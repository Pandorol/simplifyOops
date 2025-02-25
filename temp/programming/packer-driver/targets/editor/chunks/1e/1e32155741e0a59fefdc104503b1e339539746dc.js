System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, _decorator, VMBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, menu, help, CLAMP_MODE, VMModify;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVMBase(extras) {
    _reporterNs.report("VMBase", "./VMBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      VMBase = _unresolved_2.VMBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d2a4voaOJJGJZRWFPG6Bk7", "VMModify", undefined);

      __checkObsolete__(['Enum', '_decorator']);

      ({
        ccclass,
        property,
        menu,
        help
      } = _decorator);
      /** 限制值边界范围的模式 */

      CLAMP_MODE = /*#__PURE__*/function (CLAMP_MODE) {
        CLAMP_MODE[CLAMP_MODE["MIN"] = 0] = "MIN";
        CLAMP_MODE[CLAMP_MODE["MAX"] = 1] = "MAX";
        CLAMP_MODE[CLAMP_MODE["MIN_MAX"] = 2] = "MIN_MAX";
        return CLAMP_MODE;
      }(CLAMP_MODE || {});
      /**
       * [VM-Modify]
       * 动态快速的修改模型的数值,使用按钮 绑定该组件上的函数，即可动态调用
       * 修改 Model 的值
       */


      _export("default", VMModify = (_dec = menu('OopsFramework/Mvvm/VM-Modify （修改数据）'), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037642&doc_id=2873565'), _dec3 = property({
        tooltip: "监视对象路径"
      }), _dec4 = property({
        tooltip: "是不启用取值范围限制"
      }), _dec5 = property({
        type: Enum(CLAMP_MODE),
        visible: function () {
          // @ts-ignore
          return this.valueClamp === true;
        }
      }), _dec6 = property({
        visible: function () {
          // @ts-ignore
          return this.valueClamp === true && this.valueClampMode !== CLAMP_MODE.MAX;
        }
      }), _dec7 = property({
        visible: function () {
          // @ts-ignore
          return this.valueClamp === true && this.valueClampMode !== CLAMP_MODE.MIN;
        }
      }), ccclass(_class = _dec(_class = _dec2(_class = (_class2 = class VMModify extends (_crd && VMBase === void 0 ? (_reportPossibleCrUseOfVMBase({
        error: Error()
      }), VMBase) : VMBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "watchPath", _descriptor, this);

          _initializerDefineProperty(this, "valueClamp", _descriptor2, this);

          _initializerDefineProperty(this, "valueClampMode", _descriptor3, this);

          _initializerDefineProperty(this, "valueMin", _descriptor4, this);

          _initializerDefineProperty(this, "valueMax", _descriptor5, this);
        }

        // 限制最终结果的取值范围
        clampValue(res) {
          let min = this.valueMin;
          let max = this.valueMax;
          if (this.valueClamp == false) return res;

          switch (this.valueClampMode) {
            case CLAMP_MODE.MIN_MAX:
              if (res > max) res = max;
              if (res < min) res = min;
              break;

            case CLAMP_MODE.MIN:
              if (res < min) res = min;
              break;

            case CLAMP_MODE.MAX:
              if (res > max) res = max;
              break;

            default:
              break;
          }

          return res;
        }
        /** 加整数 */


        vAddInt(e, data) {
          this.vAdd(e, data, true);
        }
        /** 减整数 */


        vSubInt(e, data) {
          this.vSub(e, data, true);
        }
        /** 乘整数 */


        vMulInt(e, data) {
          this.vMul(e, data, true);
        }
        /** 除整数 */


        vDivInt(e, data) {
          this.vDiv(e, data, true);
        }
        /** 加 */


        vAdd(e, data, int = false) {
          let a = parseFloat(data);
          let res = this.VM.getValue(this.watchPath, 0) + a;

          if (int) {
            res = Math.round(res);
          }

          this.VM.setValue(this.watchPath, this.clampValue(res));
        }
        /** 减 */


        vSub(e, data, int = false) {
          let a = parseFloat(data);
          let res = this.VM.getValue(this.watchPath, 0) - a;

          if (int) {
            res = Math.round(res);
          }

          this.VM.setValue(this.watchPath, this.clampValue(res));
        }
        /** 乘 */


        vMul(e, data, int = false) {
          let a = parseFloat(data);
          let res = this.VM.getValue(this.watchPath, 0) * a;

          if (int) {
            res = Math.round(res);
          }

          this.VM.setValue(this.watchPath, this.clampValue(res));
        }
        /** 除 */


        vDiv(e, data, int = false) {
          let a = parseFloat(data);
          let res = this.VM.getValue(this.watchPath, 0) / a;

          if (int) {
            res = Math.round(res);
          }

          this.VM.setValue(this.watchPath, this.clampValue(res));
        }
        /** 字符串赋值 */


        vString(e, data) {
          let a = data;
          this.VM.setValue(this.watchPath, a);
        }
        /** 整数赋值 */


        vNumberInt(e, data) {
          this.vNumber(e, data, true);
        }
        /** 数字赋值 */


        vNumber(e, data, int = false) {
          let a = parseFloat(data);

          if (int) {
            a = Math.round(a);
          }

          this.VM.setValue(this.watchPath, this.clampValue(a));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "watchPath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "valueClamp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "valueClampMode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return CLAMP_MODE.MIN_MAX;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "valueMin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "valueMax", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e32155741e0a59fefdc104503b1e339539746dc.js.map