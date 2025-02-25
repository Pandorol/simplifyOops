System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, oops, StringUtil, GameQueryConfig, _crd;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../core/utils/StringUtil", _context.meta, extras);
  }

  _export("GameQueryConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      StringUtil = _unresolved_3.StringUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e130dm4tcpKU5qMOCqJEf3V", "GameQueryConfig", undefined); //apall


      __checkObsolete__(['sys']);

      /**
       * 获取和处理浏览器地址栏参数
       * @example
       * config.query.data.username
       */
      _export("GameQueryConfig", GameQueryConfig = class GameQueryConfig {
        /** 调试模式开关 */
        get debug() {
          return this._data["debug"];
        }
        /** 玩家帐号名 */


        get username() {
          return this._data["username"];
        }
        /** 语言 */


        get lang() {
          return this._data["lang"] || "zh";
        }

        /** 浏览器地址栏原始参数 */
        get data() {
          return this._data;
        }
        /** 构造函数 */


        constructor() {
          this._data = null;

          if (!sys.isBrowser) {
            this._data = {};
            return;
          }

          this._data = this.parseUrl();

          if (!this._data["username"]) {
            this._data["username"] = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
              error: Error()
            }), StringUtil) : StringUtil).guid();
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).log.logConfig(this._data, "查询参数");
        }

        parseUrl() {
          if (typeof window !== "object") return {};
          if (!window.document) return {};
          var url = window.document.location.href.toString();
          var u = url.split("?");

          if (typeof u[1] == "string") {
            u = u[1].split("&");
            var get = {};

            for (var i = 0, l = u.length; i < l; ++i) {
              var j = u[i];
              var x = j.indexOf("=");

              if (x < 0) {
                continue;
              }

              var key = j.substring(0, x);
              var value = j.substring(x + 1);
              get[decodeURIComponent(key)] = value && decodeURIComponent(value);
            }

            return get;
          } else {
            return {};
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4844b00064a16a443391ab9c31ac2111d8bdc05.js.map