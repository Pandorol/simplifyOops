System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, color, Component, Enum, EventHandler, SpriteFrame, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, menu, PARAM_TYPE, BhvButtonGroup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      color = _cc.color;
      Component = _cc.Component;
      Enum = _cc.Enum;
      EventHandler = _cc.EventHandler;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41df676L55LvJ52uxkQpfxJ", "BhvButtonGroup", undefined);

      __checkObsolete__(['Button', 'color', 'Color', 'Component', 'Enum', 'EventHandler', 'SpriteFrame', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      PARAM_TYPE = /*#__PURE__*/function (PARAM_TYPE) {
        PARAM_TYPE[PARAM_TYPE["CHILDREN_INDEX"] = 0] = "CHILDREN_INDEX";
        PARAM_TYPE[PARAM_TYPE["CHILDREN_NAME"] = 1] = "CHILDREN_NAME";
        return PARAM_TYPE;
      }(PARAM_TYPE || {});
      /**
       * 群体事件，适合绑定节点组的回调信息
       * 将该组件的所处节点的所有子节点，绑定相同的回调对象，并将组件名设置到customEventData属性中
       */


      _export("BhvButtonGroup", BhvButtonGroup = (_dec = menu("OopsFramework/UI/Button Group （按钮组控制）"), _dec2 = property({
        type: Enum(Button.Transition)
      }), _dec3 = property({
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.COLOR;
        }
      }), _dec4 = property({
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.COLOR;
        }
      }), _dec5 = property({
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.COLOR;
        }
      }), _dec6 = property({
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.COLOR;
        }
      }), _dec7 = property({
        type: SpriteFrame,
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.SPRITE;
        }
      }), _dec8 = property({
        type: SpriteFrame,
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.SPRITE;
        }
      }), _dec9 = property({
        type: SpriteFrame,
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.SPRITE;
        }
      }), _dec10 = property({
        type: SpriteFrame,
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.SPRITE;
        }
      }), _dec11 = property({
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.SCALE || this.transition === Button.Transition.COLOR;
        }
      }), _dec12 = property({
        visible: function () {
          // @ts-ignore
          return this.transition === Button.Transition.SCALE;
        }
      }), _dec13 = property({
        type: Enum(PARAM_TYPE)
      }), _dec14 = property({
        type: [EventHandler]
      }), _dec15 = property({
        tooltip: '规避3.x引擎BUG，EventHandler.component位为空导致找不到触发事件的脚本名的问题',
        readonly: true
      }), ccclass(_class = _dec(_class = (_class2 = class BhvButtonGroup extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "transition", _descriptor, this);

          _initializerDefineProperty(this, "hoverColor", _descriptor2, this);

          _initializerDefineProperty(this, "normalColor", _descriptor3, this);

          _initializerDefineProperty(this, "pressedColor", _descriptor4, this);

          _initializerDefineProperty(this, "disabledColor", _descriptor5, this);

          _initializerDefineProperty(this, "normalSprite", _descriptor6, this);

          _initializerDefineProperty(this, "pressedSprite", _descriptor7, this);

          _initializerDefineProperty(this, "hoverSprite", _descriptor8, this);

          _initializerDefineProperty(this, "disabledSprite", _descriptor9, this);

          _initializerDefineProperty(this, "duration", _descriptor10, this);

          _initializerDefineProperty(this, "zoomScale", _descriptor11, this);

          _initializerDefineProperty(this, "paramType", _descriptor12, this);

          _initializerDefineProperty(this, "touchEvents", _descriptor13, this);

          _initializerDefineProperty(this, "EventHandler_component", _descriptor14, this);
        }

        onLoad() {
          this.node.children.forEach((node, nodeIndex) => {
            let comp = node.getComponent(Button);
            if (comp == null) comp = node.addComponent(Button); // 同步属性
            // comp.target = node;
            // comp.transition = this.transition;
            // comp.zoomScale = this.zoomScale;
            // comp.disabledSprite = this.disabledSprite;
            // comp.hoverSprite = this.hoverSprite;
            // comp.normalSprite = this.normalSprite;
            // comp.pressedSprite = this.pressedSprite;
            // comp.hoverColor = this.hoverColor;
            // comp.normalColor = this.normalColor;
            // comp.pressedColor = this.pressedColor;
            // comp.disabledColor = this.disabledColor;
            // 绑定回调事件

            this.touchEvents.forEach(event => {
              // 克隆数据，每个节点获取的都是不同的回调
              let hd = new EventHandler(); //copy对象

              hd.component = event.component == "" ? this.EventHandler_component : event.component;
              hd.handler = event.handler;
              hd.target = event.target;

              if (this.paramType === PARAM_TYPE.CHILDREN_INDEX) {
                hd.customEventData = nodeIndex.toString();
              } else {
                hd.customEventData = node.name;
              }

              comp.clickEvents.push(hd);
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "transition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Button.Transition.NONE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hoverColor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color(255, 255, 255);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalColor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color(214, 214, 214);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pressedColor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color(211, 211, 211);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "disabledColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color(124, 124, 124);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "normalSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pressedSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hoverSprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "disabledSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "zoomScale", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.1;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "paramType", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return PARAM_TYPE.CHILDREN_INDEX;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "touchEvents", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "EventHandler_component", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "VMModify";
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec5949e3fb06aed584dbfd8174a537be67e84e55.js.map