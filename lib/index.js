"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.some");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.process = exports.getSheets = exports.stripKeys = exports.allowedKeys = exports.getData = exports.buildSheetUrl = exports.buildIndexUrl = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GST_PREFIX = /^gsx\$/;

var buildIndexUrl = function buildIndexUrl(key) {
  return "https://spreadsheets.google.com/feeds/worksheets/" + key + "/public/basic?alt=json";
};

exports.buildIndexUrl = buildIndexUrl;

var buildSheetUrl = function buildSheetUrl(key, sheetId) {
  return "https://spreadsheets.google.com/feeds/list/" + key + "/" + sheetId + "/public/values?alt=json";
};

exports.buildSheetUrl = buildSheetUrl;

var allowedKeys = function allowedKeys(rawEntry) {
  return Object.keys(rawEntry).filter(function (e) {
    return GST_PREFIX.test(e);
  });
};

exports.allowedKeys = allowedKeys;

var stripKeys = function stripKeys(keys) {
  return keys.map(function (k) {
    return k.replace(GST_PREFIX, '');
  });
};

exports.stripKeys = stripKeys;

var getSheets = function getSheets(ids, key) {
  var urls = ids.map(function (id) {
    return buildSheetUrl(key, id);
  });
  return _axios.default.all(urls.map(function (id) {
    return _axios.default.get(id);
  }));
};

exports.getSheets = getSheets;

var process = function process(_ref) {
  var entries = _ref.entries,
      allowed = _ref.allowed,
      cleaned = _ref.cleaned;
  return entries.map(function (entry) {
    return Object.keys(entry).filter(function (key) {
      return allowed.some(function (k) {
        return k === key;
      });
    }).map(function (key, i) {
      return [cleaned[i], entry[key].$t];
    });
  });
};

exports.process = process;

var getData = function getData(key, onSuccess, onFailure) {
  return _axios.default.get(buildIndexUrl(key)).then(function (sheet) {
    var info = sheet.data.feed.entry.map(function (f) {
      return {
        id: f.id.$t.split('/').reverse()[0],
        title: f.title.$t
      };
    });
    return info;
  }).then(function (info) {
    var ids = info.map(function (i) {
      return i.id;
    });
    var promisedSheets = getSheets(ids, key);
    promisedSheets.then(function (p) {
      var entries = p.map(function (sheet) {
        return sheet.data.feed.entry;
      });
      var allowed = entries.map(function (e) {
        return allowedKeys(e[0]);
      });
      var cleaned = allowed.map(stripKeys);
      var o = info.map(function (n, i) {
        return {
          id: n.id,
          title: n.title,
          entries: process({
            entries: entries[i],
            allowed: allowed[i],
            cleaned: cleaned[i]
          })
        };
      });
      onSuccess(o);
    });
  }).catch(function (e) {
    console.error(e);

    if (onFailure) {
      onFailure(e);
    }
  });
};

exports.getData = getData;