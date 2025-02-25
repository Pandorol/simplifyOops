System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DEBUG, Config, Logger, oops, _crd, version;

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "../module/config/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoader(extras) {
    _reporterNs.report("ResLoader", "./common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./common/storage/StorageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "./gui/layer/LayerManager", _context.meta, extras);
  }

  _export("oops", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      Config = _unresolved_2.Config;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9aebX8irxH14Kw3q0OwQZ9", "Oops", undefined); //cpall
      // import { EffectSingleCase } from "../libs/animator-effect/EffectSingleCase";
      // import { ecs } from "../libs/ecs/ECS";
      // import { ECSRootSystem } from "../libs/ecs/ECSSystem";
      // import { LanguageManager } from "../libs/gui/language/Language";
      // import { VM } from "../libs/model-view/ViewModel";
      // import { HttpRequest } from "../libs/network/HttpRequest";
      // import { NetManager } from "../libs/network/NetManager";
      // import { AudioManager } from "./common/audio/AudioManager";
      // import { MessageManager } from "./common/event/MessageManager";


      // import { RandomManager } from "./common/random/RandomManager";
      // import { TimerManager } from "./common/timer/TimerManager";
      // import { GameManager } from "./game/GameManager";

      /** 框架版本号 */
      _export("version", version = "2.0.0.20241118");
      /** 框架核心模块访问入口 */


      _export("oops", oops = class oops {}); // 引入oops全局变量以方便调试


      /** ----------核心模块---------- */

      /** 日志管理 */
      oops.log = _crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
        error: Error()
      }), Logger) : Logger;

      /** 游戏配置 */
      oops.config = new (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
        error: Error()
      }), Config) : Config)();

      /** 本地存储 */
      oops.storage = void 0;

      /** 资源管理 */
      oops.res = void 0;

      /** 全局消息 */
      // static message: MessageManager;

      /** 随机工具 */
      // static random = RandomManager.instance;

      /** 游戏时间管理 */
      // static timer: TimerManager;

      /** 游戏音乐管理 */
      // static audio: AudioManager;

      /** 二维界面管理 */
      oops.gui = void 0;

      if (DEBUG) {
        //@ts-ignore
        window.oops = oops;
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ceb4238036f5b842f2b0212b5427a6c27331106e.js.map