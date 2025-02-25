System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECSModel, ECSMask, _crd;

  function _reportPossibleCrUseOfECSModel(extras) {
    _reporterNs.report("ECSModel", "./ECSModel", _context.meta, extras);
  }

  _export("ECSMask", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ECSModel = _unresolved_2.ECSModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d18694PPbtGs5Ipgo/vaJBX", "ECSMask", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-05-12 14:18:44
       * @LastEditors: dgflash
       * @LastEditTime: 2022-05-24 11:09:49
       */


      _export("ECSMask", ECSMask = class ECSMask {
        constructor() {
          this.mask = void 0;
          this.size = 0;
          var length = Math.ceil((_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).compTid / 31);
          this.mask = new Uint32Array(length);
          this.size = length;
        }

        set(num) {
          // https://stackoverflow.com/questions/34896909/is-it-correct-to-set-bit-31-in-javascript
          // this.mask[((num / 32) >>> 0)] |= ((1 << (num % 32)) >>> 0);
          this.mask[num / 31 >>> 0] |= 1 << num % 31;
        }

        delete(num) {
          this.mask[num / 31 >>> 0] &= ~(1 << num % 31);
        }

        has(num) {
          return !!(this.mask[num / 31 >>> 0] & 1 << num % 31);
        }

        or(other) {
          for (var i = 0; i < this.size; i++) {
            // &操作符最大也只能对2^30进行操作，如果对2^31&2^31会得到负数。当然可以(2^31&2^31) >>> 0，这样多了一步右移操作。
            if (this.mask[i] & other.mask[i]) {
              return true;
            }
          }

          return false;
        }

        and(other) {
          for (var i = 0; i < this.size; i++) {
            if ((this.mask[i] & other.mask[i]) != this.mask[i]) {
              return false;
            }
          }

          return true;
        }

        clear() {
          for (var i = 0; i < this.size; i++) {
            this.mask[i] = 0;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=657704b65dc582e2c70ab9a08ec4eedbe253ed0f.js.map