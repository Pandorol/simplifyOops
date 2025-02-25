System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, Label, _decorator, LanguageLabel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Notify;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLanguageLabel(extras) {
    _reporterNs.report("LanguageLabel", "../../../libs/gui/language/LanguageLabel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      LanguageLabel = _unresolved_2.LanguageLabel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "869d28WPglKeqL+pPCvqbkq", "Notify", undefined); //cpall


      __checkObsolete__(['Animation', 'Component', 'Label', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 滚动消息提示组件  */

      _export("Notify", Notify = (_dec = ccclass('Notify'), _dec2 = property(Label), _dec3 = property(Animation), _dec(_class = (_class2 = class Notify extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lab_content", _descriptor, this);

          _initializerDefineProperty(this, "animation", _descriptor2, this);

          /** 提示动画完成 */
          this.onComplete = null;
        }

        onLoad() {
          if (this.animation) this.animation.on(Animation.EventType.FINISHED, this.onFinished, this);
        }

        onFinished() {
          this.node.destroy();
          this.onComplete && this.onComplete();
          this.onComplete = null;
        }
        /**
         * 显示提示
         * @param msg       文本
         * @param useI18n   设置为 true 时，使用多语言功能 msg 参数为多语言 key
         */


        toast(msg, useI18n) {
          var label = this.lab_content.getComponent(_crd && LanguageLabel === void 0 ? (_reportPossibleCrUseOfLanguageLabel({
            error: Error()
          }), LanguageLabel) : LanguageLabel);

          if (useI18n) {
            label.enabled = true;
            label.dataID = msg;
          } else {
            label.enabled = false;
            this.lab_content.string = msg;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lab_content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35face59e9ddadbb06fe8ce42493e7d1a4c42f13.js.map