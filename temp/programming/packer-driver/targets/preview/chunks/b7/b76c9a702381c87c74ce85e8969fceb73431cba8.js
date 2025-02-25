System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, GameConfig, _crd;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "db://assets/core/Oops", _context.meta, extras);
  }

  _export("GameConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bddcqJ//FIfqkFD8h9QSge", "GameConfig", undefined); //cpall


      /* 游戏配置解析，对应 resources/config/config.json 配置 */
      _export("GameConfig", GameConfig = class GameConfig {
        /** 客户端版本号配置 */
        get version() {
          return this._data["config"]["version"];
        }
        /** 包名 */


        get package() {
          return this._data["config"]["package"];
        }
        /** 游戏每秒传输帧数 */


        get frameRate() {
          return this._data.config.frameRate;
        }
        /** 本地存储内容加密 key */


        get localDataKey() {
          return this._data.config.localDataKey;
        }
        /** 本地存储内容加密 iv */


        get localDataIv() {
          return this._data.config.localDataIv;
        }
        /** Http 服务器地址 */


        get httpServer() {
          return this._data.config.httpServer;
        }
        /** Http 请求超时时间 */


        get httpTimeout() {
          return this._data.config.httpTimeout;
        }
        /** 获取当前客户端支持的语言类型 */


        get language() {
          return this._data.language.type || ["zh"];
        }
        /** 获取当前客户端支持的语言 Json 配置路径 */


        get languagePathJson() {
          return this._data.language.path.json || "language/json";
        }
        /** 获取当前客户端支持的语言纹理配置路径 */


        get languagePathTexture() {
          return this._data.language.path.texture || "language/texture";
        }
        /** 默认语言 */


        get languageDefault() {
          return this._data.language.default || "zh";
        }
        /** 是否启用远程资源 */


        get bundleEnable() {
          return this._data.bundle.enable;
        }
        /** 远程资源服务器地址 */


        get bundleServer() {
          return this._data.bundle.server;
        }
        /** 远程资源名 */


        get bundleDefault() {
          return this._data.bundle.default;
        }
        /** 远程所有资源包配置 */


        get bundlePackages() {
          return this._data.bundle.packages;
        }
        /** 加载界面资源超时提示 */


        get loadingTimeoutGui() {
          return this._data.config.loadingTimeoutGui || 1000;
        }

        /** 游戏配置数据 */
        get data() {
          return this._data;
        }

        constructor(config) {
          this._data = null;
          this._data = Object.freeze(config.json);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).log.logConfig(this._data, "游戏配置");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b76c9a702381c87c74ce85e8969fceb73431cba8.js.map