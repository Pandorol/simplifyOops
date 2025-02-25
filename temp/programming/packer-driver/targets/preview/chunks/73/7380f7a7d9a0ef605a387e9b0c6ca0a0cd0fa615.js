System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCString, Component, _decorator, sp, EDITOR, resLoader, LanguageData, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _crd, ccclass, property, menu, LanguageSpine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageData(extras) {
    _reporterNs.report("LanguageData", "./LanguageData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCString = _cc.CCString;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      sp = _cc.sp;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      LanguageData = _unresolved_3.LanguageData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc440bkNh5AJZUoAd5OSrLX", "LanguageSpine", undefined); //cpall


      __checkObsolete__(['CCString', 'Component', '_decorator', 'sp']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /** Spine 动画多语言 */

      _export("LanguageSpine", LanguageSpine = (_dec = ccclass("LanguageSpine"), _dec2 = menu('OopsFramework/Language/LanguageSpine （Spine 动画多语言）'), _dec3 = property({
        serializable: true
      }), _dec4 = property({
        type: CCString,
        serializable: true
      }), _dec(_class = _dec2(_class = (_class2 = class LanguageSpine extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_dataID", _descriptor, this);

          /** 默认动画名 */
          this._defaultAnimation = "";
        }

        get dataID() {
          return this._dataID || "";
        }

        set dataID(value) {
          this._dataID = value;

          if (!EDITOR) {
            this.updateSpine();
          }
        }

        onLoad() {
          var spine = this.getComponent(sp.Skeleton);
          this._defaultAnimation = spine.animation;
        }

        start() {
          this.updateSpine();
        }
        /** 更新语言 */


        language() {
          this.updateSpine();
        }

        updateSpine() {
          // 获取语言标记
          var path = "language/spine/" + (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current + "/" + this.dataID;
          var res = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).get(path, sp.SkeletonData);

          if (res) {
            var spine = this.getComponent(sp.Skeleton);
            spine.skeletonData = res;
            spine.setAnimation(0, this._defaultAnimation, true);
          } else {
            console.error("[LanguageSpine] 资源不存在 " + path);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_dataID", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dataID", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "dataID"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7380f7a7d9a0ef605a387e9b0c6ca0a0cd0fa615.js.map