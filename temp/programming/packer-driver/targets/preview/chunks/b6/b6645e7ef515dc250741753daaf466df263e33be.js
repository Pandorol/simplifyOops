System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ecs, _dec, _class, _crd, SingletonModuleComp, smc;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "db://assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitialize(extras) {
    _reporterNs.report("Initialize", "../../initialize/Initialize", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ecs = _unresolved_2.ecs;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c11472aPc1P0K2H9Nlk7mKo", "SingletonModuleComp", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-11-18 14:20:46
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-25 17:06:15
       */
      // import { Account } from "../../account/Account";


      /** 游戏模块 */
      _export("SingletonModuleComp", SingletonModuleComp = (_dec = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('SingletonModule'), _dec(_class = class SingletonModuleComp extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Comp {
        constructor() {
          super(...arguments);

          /** 游戏初始化模块 */
          this.initialize = null;
        }

        /** 游戏账号模块 */
        // get account(): Account {
        //     return this.initialize.account;
        // }
        reset() {}

      }) || _class));

      _export("smc", smc = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).getSingleton(SingletonModuleComp));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6645e7ef515dc250741753daaf466df263e33be.js.map