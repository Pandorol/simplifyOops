System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, _decorator, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LoadingIndicator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87032/P3TtGkJ/kV6yRChPT", "LoadingIndicator", undefined); //cpall


      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 加载延时提示动画 */

      _export("LoadingIndicator", LoadingIndicator = (_dec = ccclass("LoadingIndicator"), _dec2 = property(Node), _dec(_class = (_class2 = class LoadingIndicator extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loading", _descriptor, this);

          this.loading_rotate = 0;
        }

        update(dt) {
          this.loading_rotate += dt * 220;
          this.loading.setRotationFromEuler(0, 0, -this.loading_rotate % 360);

          if (this.loading_rotate > 360) {
            this.loading_rotate -= 360;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec2], {
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
//# sourceMappingURL=d9fdf42b9e3da8cbf06acae179e455317c1ca599.js.map