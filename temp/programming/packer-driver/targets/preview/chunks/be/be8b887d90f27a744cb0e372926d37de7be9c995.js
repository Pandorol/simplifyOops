System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RandomManager, SeedRandom, _crd;

  function _reportPossibleCrUseOfRandomManager(extras) {
    _reporterNs.report("RandomManager", "./RandomManager", _context.meta, extras);
  }

  _export("SeedRandom", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RandomManager = _unresolved_2.RandomManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b02bnNwwZEWq9Ft59BRCIB", "SeedRandom", undefined);

      /** 伪随机 */
      _export("SeedRandom", SeedRandom = class SeedRandom {
        get random() {
          return this.rm;
        }

        constructor(seed) {
          this.rm = void 0;
          this.sr = void 0;
          //@ts-ignore
          this.sr = new Math.seedrandom(seed);
          this.rm = new (_crd && RandomManager === void 0 ? (_reportPossibleCrUseOfRandomManager({
            error: Error()
          }), RandomManager) : RandomManager)();
          this.rm.setRandom(this.sr);
        }

        destroy() {
          this.rm = null;
          this.sr = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be8b887d90f27a744cb0e372926d37de7be9c995.js.map