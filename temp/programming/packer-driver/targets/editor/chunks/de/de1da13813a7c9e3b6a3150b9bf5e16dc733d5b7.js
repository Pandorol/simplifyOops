System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCString, _decorator, StringFormatFunction, VMCustom, VMEnv, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, menu, help, VMProgress;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfStringFormatFunction(extras) {
    _reporterNs.report("StringFormatFunction", "./StringFormat", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVMCustom(extras) {
    _reporterNs.report("VMCustom", "./VMCustom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVMEnv(extras) {
    _reporterNs.report("VMEnv", "./VMEnv", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCString = _cc.CCString;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      StringFormatFunction = _unresolved_2.StringFormatFunction;
    }, function (_unresolved_3) {
      VMCustom = _unresolved_3.VMCustom;
    }, function (_unresolved_4) {
      VMEnv = _unresolved_4.VMEnv;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a50eqI7JZNV5Sh0y/Qd9C6", "VMProgress", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-08-11 14:45:44
       * @LastEditors: dgflash
       * @LastEditTime: 2022-08-11 15:43:34
       */


      __checkObsolete__(['CCString', '_decorator']);

      ({
        ccclass,
        property,
        menu,
        help
      } = _decorator);

      _export("default", VMProgress = (_dec = menu('OopsFramework/Mvvm/VM-Progress （进度条）'), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037843&doc_id=2873565'), _dec3 = property({
        visible: false,
        override: true
      }), _dec4 = property({
        type: [CCString],
        tooltip: '第一个值是min 值，第二个值 是 max 值，会计算出两者的比例'
      }), _dec5 = property({
        visible: function () {
          // @ts-ignore
          return this.componentProperty === 'string';
        },
        tooltip: '字符串格式化，和 VMLabel 的字段一样，需要填入对应的格式化字符串'
      }), ccclass(_class = _dec(_class = _dec2(_class = (_class2 = class VMProgress extends (_crd && VMCustom === void 0 ? (_reportPossibleCrUseOfVMCustom({
        error: Error()
      }), VMCustom) : VMCustom) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "watchPath", _descriptor, this);

          _initializerDefineProperty(this, "watchPathArr", _descriptor2, this);

          this.templateMode = true;

          _initializerDefineProperty(this, "stringFormat", _descriptor3, this);
        }

        onLoad() {
          if (this.watchPathArr.length < 2 || this.watchPathArr[0] == '[min]' || this.watchPathArr[1] == '[max]') {
            console.error('VMProgress must have two values!');
          }

          super.onLoad();
        }

        start() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;
          this.onValueInit();
        }

        onValueInit() {
          let max = this.watchPathArr.length;

          for (let i = 0; i < max; i++) {
            this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i]);
          }

          let value = this.templateValueArr[0] / this.templateValueArr[1];
          this.setComponentValue(value);
        }

        setComponentValue(value) {
          if (this.stringFormat !== '') {
            let res = (_crd && StringFormatFunction === void 0 ? (_reportPossibleCrUseOfStringFormatFunction({
              error: Error()
            }), StringFormatFunction) : StringFormatFunction).deal(value, this.stringFormat);
            super.setComponentValue(res);
          } else {
            super.setComponentValue(value);
          }
        }

        onValueController(n, o) {
          let value = Math.round(n * this.templateValueArr[1]);
          if (Number.isNaN(value)) value = 0;
          this.VM.setValue(this.watchPathArr[0], value);
        }
        /** 初始化改变数据 */


        onValueChanged(n, o, pathArr) {
          if (this.templateMode === false) return;
          let path = pathArr.join('.'); // 寻找缓存位置

          let index = this.watchPathArr.findIndex(v => v === path);

          if (index >= 0) {
            // 如果是所属的路径，就可以替换文本了
            this.templateValueArr[index] = n; //缓存值
          }

          let value = this.templateValueArr[0] / this.templateValueArr[1];
          if (value > 1) value = 1;
          if (value < 0 || Number.isNaN(value)) value = 0;
          this.setComponentValue(value);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "watchPath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "watchPathArr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ['[min]', '[max]'];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stringFormat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de1da13813a7c9e3b6a3150b9bf5e16dc733d5b7.js.map