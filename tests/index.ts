import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { buildIndexUrl, buildSheetUrl } from '../src'
import { mockWorksheet, mockSheet } from './__mocks__'

const mock = new MockAdapter(axios)
const key = 'exampleKey'

const worksheetUrl = buildIndexUrl(key)
const sheetUrl = buildSheetUrl(key, 'sheetId1')

mock.onGet(worksheetUrl).reply(200, mockWorksheet)
mock.onGet(sheetUrl).reply(200, mockSheet)

test('getData', () => {
  it('should return processed data', () => {
    axios.get(worksheetUrl).then((d) => {
      expect(d.data).toEqual(mockWorksheet)
    })
  })
})
