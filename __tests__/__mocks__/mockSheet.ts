export const mockSheet = [
  {
    data: {
      version: '1.0',
      encoding: 'UTF-8',
      feed: {
        xmlns: 'http://www.w3.org/2005/Atom',
        xmlns$openSearch: 'http://a9.com/-/spec/opensearchrss/1.0/',
        xmlns$gsx: 'http://schemas.google.com/spreadsheets/2006/extended',
        id: {
          $t:
            'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/values',
        },
        updated: { $t: '2020-04-07T00:57:12.493Z' },
        category: [
          {
            scheme: 'http://schemas.google.com/spreadsheets/2006',
            term: 'http://schemas.google.com/spreadsheets/2006#list',
          },
        ],
        title: { type: 'text', $t: 'candidates' },
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
              'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/values',
          },
          {
            rel: 'http://schemas.google.com/g/2005#post',
            type: 'application/atom+xml',
            href:
              'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/values',
          },
          {
            rel: 'self',
            type: 'application/atom+xml',
            href:
              'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/values?alt=json',
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
                'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/values/cokwr',
            },
            updated: { $t: '2020-04-07T00:57:12.493Z' },
            category: [
              {
                scheme: 'http://schemas.google.com/spreadsheets/2006',
                term: 'http://schemas.google.com/spreadsheets/2006#list',
              },
            ],
            title: { type: 'text', $t: '3/29/2020 2:45:48' },
            content: {
              type: 'text',
              $t: 'foo: Foo, bar: Bar, ',
            },
            link: [
              {
                rel: 'self',
                type: 'application/atom+xml',
                href:
                  'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/values/cokwr',
              },
            ],
            gsx$timestamp: { $t: '3/29/2020 2:45:48' },
            gsx$foo: { $t: 'Foo' },
            gsx$bar: { $t: 'Bar' },
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
      date: 'Tue, 07 Apr 2020 00:57:12 GMT',
      expires: 'Tue, 07 Apr 2020 00:57:12 GMT',
      'last-modified': 'Tue, 07 Apr 2020 00:57:12 GMT',
      server: 'GSE',
      vary: 'Accept, X-GData-Authorization, GData-Version',
    },
    config: {
      url:
        'https://spreadsheets.google.com/feeds/list/exampleKey/sheetId1/public/values?alt=json',
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
  },
]
