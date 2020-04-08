export const mockWorksheet = {
  data: {
    version: '1.0',
    encoding: 'UTF-8',
    feed: {
      xmlns: 'http://www.w3.org/2005/Atom',
      xmlns$openSearch: 'http://a9.com/-/spec/opensearchrss/1.0/',
      xmlns$gs: 'http://schemas.google.com/spreadsheets/2006',
      id: {
        $t:
          'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic',
      },
      updated: { $t: '2020-04-07T00:54:18.882Z' },
      category: [
        {
          scheme: 'http://schemas.google.com/spreadsheets/2006',
          term: 'http://schemas.google.com/spreadsheets/2006#worksheet',
        },
      ],
      title: { type: 'text', $t: 'denton.works responses' },
      link: [
        {
          rel: 'alternate',
          type: 'application/atom+xml',
          href: 'https://docs.google.com/spreadsheets/d/exampleKey/pubhtml',
        },
        {
          rel: 'http://schemas.google.com/g/2005#feed',
          type: 'application/atom+xml',
          href:
            'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic',
        },
        {
          rel: 'http://schemas.google.com/g/2005#post',
          type: 'application/atom+xml',
          href:
            'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic',
        },
        {
          rel: 'self',
          type: 'application/atom+xml',
          href:
            'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic?alt=json',
        },
      ],
      author: [
        { name: { $t: 'heather' }, email: { $t: 'heather@stokedenton.com' } },
      ],
      openSearch$totalResults: { $t: '2' },
      openSearch$startIndex: { $t: '1' },
      entry: [
        {
          id: {
            $t:
              'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic/sheetId1',
          },
          updated: { $t: '2020-04-07T00:54:18.882Z' },
          category: [
            {
              scheme: 'http://schemas.google.com/spreadsheets/2006',
              term: 'http://schemas.google.com/spreadsheets/2006#worksheet',
            },
          ],
          title: { type: 'text', $t: 'candidates' },
          content: { type: 'text', $t: 'candidates' },
          link: [
            {
              rel: 'http://schemas.google.com/spreadsheets/2006#listfeed',
              type: 'application/atom+xml',
              href:
                'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/basic',
            },
            {
              rel: 'http://schemas.google.com/spreadsheets/2006#cellsfeed',
              type: 'application/atom+xml',
              href:
                'https://spreadsheets.google.com/feeds/cells/exampleKey/sheetId1/public/basic',
            },
            {
              rel:
                'http://schemas.google.com/visualization/2008#visualizationApi',
              type: 'application/atom+xml',
              href:
                'https://docs.google.com/spreadsheets/d/exampleKey/gviz/tq?gid=497686216&pub=1',
            },
            {
              rel: 'http://schemas.google.com/spreadsheets/2006#exportcsv',
              type: 'text/csv',
              href:
                'https://docs.google.com/spreadsheets/d/exampleKey/export?gid=497686216&format=csv',
            },
            {
              rel: 'self',
              type: 'application/atom+xml',
              href:
                'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic/sheetId1',
            },
          ],
          gs$colCount: { $t: '17' },
          gs$rowCount: { $t: '103' },
        },
        {
          id: {
            $t:
              'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic/sheetId2',
          },
          updated: { $t: '2020-04-07T00:54:18.882Z' },
          category: [
            {
              scheme: 'http://schemas.google.com/spreadsheets/2006',
              term: 'http://schemas.google.com/spreadsheets/2006#worksheet',
            },
          ],
          title: { type: 'text', $t: 'jobs' },
          content: { type: 'text', $t: 'jobs' },
          link: [
            {
              rel: 'http://schemas.google.com/spreadsheets/2006#listfeed',
              type: 'application/atom+xml',
              href:
                'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId2/public/basic',
            },
            {
              rel: 'http://schemas.google.com/spreadsheets/2006#cellsfeed',
              type: 'application/atom+xml',
              href:
                'https://spreadsheets.google.com/feeds/cells/exampleKey/sheetId2/public/basic',
            },
            {
              rel:
                'http://schemas.google.com/visualization/2008#visualizationApi',
              type: 'application/atom+xml',
              href:
                'https://docs.google.com/spreadsheets/d/exampleKey/gviz/tq?gid=1442137348&pub=1',
            },
            {
              rel: 'http://schemas.google.com/spreadsheets/2006#exportcsv',
              type: 'text/csv',
              href:
                'https://docs.google.com/spreadsheets/d/exampleKey/export?gid=1442137348&format=csv',
            },
            {
              rel: 'self',
              type: 'application/atom+xml',
              href:
                'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic/sheetId2',
            },
          ],
          gs$colCount: { $t: '20' },
          gs$rowCount: { $t: '103' },
        },
      ],
    },
  },
  status: 200,
  statusText: '',
  headers: {
    'cache-control': 'private, max-age=0, must-revalidate, no-transform',
    'content-encoding': 'gzip',
    'content-type': 'application/json; charset=UTF-8',
    date: 'Tue, 07 Apr 2020 00:54:18 GMT',
    expires: 'Tue, 07 Apr 2020 00:54:18 GMT',
    'last-modified': 'Tue, 07 Apr 2020 00:54:18 GMT',
    server: 'GSE',
    vary: 'Accept, X-GData-Authorization, GData-Version',
  },
  config: {
    url:
      'https://spreadsheets.google.com/feeds/worksheets/exampleKey/public/basic?alt=json',
    method: 'get',
    headers: { Accept: 'application/json, text/plain, */*' },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
  },
  request: {},
}
