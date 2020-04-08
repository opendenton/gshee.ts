import axios from 'axios'

const GST_PREFIX = /^gsx\$/

/**
 *
 * @param key         A worksheet ID
 * @example           .../worksheets/${key}/public/...
 * @returns           A url point for retrieving json
 */
const buildIndexUrl = (key: string) =>
  `https://spreadsheets.google.com/feeds/worksheets/${key}/public/basic?alt=json`

const buildSheetUrl = (key: string, sheetId: string) =>
  `https://spreadsheets.google.com/feeds/list/${key}/${sheetId}/public/values?alt=json`

/**
 *
 * @param rawEntry    entire row, including metadata
 * @returns           array of allowed keys corresponding to table headings
 */
const allowedKeys = (rawEntry: Record<string, { $t: string }>) =>
  Object.keys(rawEntry).filter((e) => GST_PREFIX.test(e))

/**
 *
 * @param keys        array of dirty keys, (ex. `gsx$keyname`)
 * @returns           array of cleaned keys, (ex. `keyname`)
 */
const stripKeys = (keys: Array<string>) =>
  keys.map((k) => k.replace(GST_PREFIX, ''))

/**
 *
 * @param ids         array of sheet id's
 * @returns           array of promises for each id
 */
const getSheets = (ids: Array<string>, key: string) => {
  const urls = ids.map((id) => buildSheetUrl(key, id))

  return axios.all<SheetV1>(urls.map((id) => axios.get(id)))
}

/**
 * The "worker" function. It returns a cleaned set of
 * key/value pairs (tuples), based on supplied worksheet rows.
 *
 * @param entries     correspond to a row
 * @param allowed     array of keys to keep
 * @param cleaned     keys that are stripped of their `gsx$` prefix
 */
const process = ({
  entries,
  allowed,
  cleaned,
}: {
  entries: Entries
  allowed: Array<string>
  cleaned: Array<string>
}): Array<Array<[string, string]>> => {
  return entries.map((entry) =>
    Object.keys(entry)
      .filter((key) => allowed.some((k) => k === key))
      .map((key, i) => {
        return [cleaned[i], entry[key].$t]
      })
  )
}

/**
 * Fetch data from a given worksheet key, using Axios.
 * Runs subsequent fetch calls on returned sheet id's.
 *
 * @param key         a worksheet key
 * @example           '1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs'
 * @param onSuccess   callback function for success case
 * @param onFailure   callback function for failure case
 * @returns void
 */
const getData = (
  key: string,
  onSuccess: (
    output: {
      id: string
      title: string
      entries: [string, string][][]
    }[]
  ) => void,
  onFailure?: (e: Error) => void
) =>
  axios
    .get(buildIndexUrl(key))
    .then((sheet: WorkSheetV1) => {
      /**
       * Build up a record of metadata
       */
      const info = sheet.data.feed.entry.map((f) => ({
        id: f.id.$t.split('/').reverse()[0],
        title: f.title.$t,
      }))

      return info
    })
    .then((info) => {
      const ids = info.map((i) => i.id)
      const promisedSheets = getSheets(ids, key)

      promisedSheets.then((p) => {
        const entries = p.map((sheet) => sheet.data.feed.entry)
        const allowed = entries.map((e) => allowedKeys(e[0]))
        const cleaned = allowed.map(stripKeys)

        const o = info.map((n, i) => {
          return {
            id: n.id,
            title: n.title,
            entries: process({
              entries: entries[i],
              allowed: allowed[i],
              cleaned: cleaned[i],
            }),
          }
        })

        onSuccess(o)
      })
    })
    .catch((e: Error) => {
      console.error(e)

      if (onFailure) {
        onFailure(e)
      }
    })

export {
  buildIndexUrl,
  buildSheetUrl,
  getData,
  allowedKeys,
  stripKeys,
  getSheets,
  process,
}

/**
 * TODO: This is a very incomplete type
 */
type Entries = Array<{ [k: string]: { $t: string } }>

/**
 * TODO: This is a very incomplete type
 */
type WorkSheetV1 = {
  data: {
    feed: {
      /**
       * The only fields I really need are id and title
       */
      entry: Array<{ id: { $t: string }; title: { $t: string } }>
    }
  }
}

/**
 * TODO: This is a very incomplete type
 */
type SheetV1 = {
  data: {
    feed: {
      entry: Entries
    }
  }
}
