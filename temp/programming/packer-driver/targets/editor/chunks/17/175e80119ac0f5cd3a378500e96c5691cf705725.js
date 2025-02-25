System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, LanguageLabel, oops, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, CommonPrompt;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLanguageLabel(extras) {
    _reporterNs.report("LanguageLabel", "../../../libs/gui/language/LanguageLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      LanguageLabel = _unresolved_2.LanguageLabel;
    }, function (_unresolved_3) {
      oops = _unresolved_3.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0975dBNDlVI9LWr34+VBNqn", "CommonPrompt", undefined); //cpall


      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 公共提示窗口 */

      _export("CommonPrompt", CommonPrompt = (_dec = ccclass("CommonPrompt"), _dec2 = property(_crd && LanguageLabel === void 0 ? (_reportPossibleCrUseOfLanguageLabel({
        error: Error()
      }), LanguageLabel) : LanguageLabel), _dec3 = property(_crd && LanguageLabel === void 0 ? (_reportPossibleCrUseOfLanguageLabel({
        error: Error()
      }), LanguageLabel) : LanguageLabel), _dec4 = property(_crd && LanguageLabel === void 0 ? (_reportPossibleCrUseOfLanguageLabel({
        error: Error()
      }), LanguageLabel) : LanguageLabel), _dec5 = property(_crd && LanguageLabel === void 0 ? (_reportPossibleCrUseOfLanguageLabel({
        error: Error()
      }), LanguageLabel) : LanguageLabel), _dec(_class = (_class2 = class CommonPrompt extends Component {
        constructor(...args) {
          super(...args);

          /** 窗口标题多语言组件 */
          _initializerDefineProperty(this, "lab_title", _descriptor, this);

          /** 提示内容多语言组件 */
          _initializerDefineProperty(this, "lab_content", _descriptor2, this);

          /** 确认按钮文本多语言组件 */
          _initializerDefineProperty(this, "lab_ok", _descriptor3, this);

          /** 取消按钮文本多语言组件 */
          _initializerDefineProperty(this, "lab_cancel", _descriptor4, this);

          this.config = {};
        }

        /**
         * 
         * 
         * @param params 参数 
         * {
         *     title:      标题
         *     content:    内容
         *     okWord:     ok按钮上的文字
         *     okFunc:     确认时执行的方法
         *     cancelWord: 取消按钮的文字
         *     cancelFunc: 取消时执行的方法
         *     needCancel: 是否需要取消按钮
         * }
         */
        onAdded(params) {
          this.config = params || {};
          this.setTitle();
          this.setContent();
          this.setBtnOkLabel();
          this.setBtnCancelLabel();
          this.node.active = true;
          return true;
        }

        setTitle() {
          this.lab_title.dataID = this.config.title;
        }

        setContent() {
          this.lab_content.dataID = this.config.content;
        }

        setBtnOkLabel() {
          this.lab_ok.dataID = this.config.okWord;
        }

        setBtnCancelLabel() {
          if (this.lab_cancel) {
            this.lab_cancel.dataID = this.config.cancelWord;
            this.lab_cancel.node.parent.active = this.config.needCancel || false;
          }
        }

        onOk() {
          if (typeof this.config.okFunc == "function") {
            this.config.okFunc();
          }

          this.close();
        }

        onClose() {
          if (typeof this.config.closeFunc == "function") {
            this.config.closeFunc();
          }

          this.close();
        }

        onCancel() {
          if (typeof this.config.cancelFunc == "function") {
            this.config.cancelFunc();
          }

          this.close();
        }

        close() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.removeByNode(this.node);
        }

        onDestroy() {
          this.config = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lab_title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lab_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lab_ok", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lab_cancel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=175e80119ac0f5cd3a378500e96c5691cf705725.js.map