System.register(["__unresolved_0", "cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Enum, EventHandler, Node, Sprite, SpriteFrame, tween, Tween, UITransform, Vec3, DEV, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, disallowMultiple, menu, executionOrder, SelectedType, ListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Enum = _cc.Enum;
      EventHandler = _cc.EventHandler;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Tween = _cc.Tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "850b3xYLj1Ef5JlQ4X/4ZZH", "ListItem", undefined);

      ({
        ccclass,
        property,
        disallowMultiple,
        menu,
        executionOrder
      } = _decorator);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Enum', 'EventHandler', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'Tween', 'UITransform', 'Vec3']);

      SelectedType = /*#__PURE__*/function (SelectedType) {
        SelectedType[SelectedType["NONE"] = 0] = "NONE";
        SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
        SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
        return SelectedType;
      }(SelectedType || {});

      _export("default", ListItem = (_dec = disallowMultiple(), _dec2 = menu('List Item'), _dec3 = executionOrder(-5001), _dec4 = property({
        type: Sprite,
        tooltip: DEV && '图标'
      }), _dec5 = property({
        type: Node,
        tooltip: DEV && '标题'
      }), _dec6 = property({
        type: Enum(SelectedType),
        tooltip: DEV && '选择模式'
      }), _dec7 = property({
        type: Node,
        tooltip: DEV && '被选标识',

        visible() {
          return this.selectedMode > SelectedType.NONE;
        }

      }), _dec8 = property({
        type: SpriteFrame,
        tooltip: DEV && '被选择的SpriteFrame',

        visible() {
          return this.selectedMode == SelectedType.SWITCH;
        }

      }), _dec9 = property({
        tooltip: DEV && '自适应尺寸（宽或高）'
      }), ccclass(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class ListItem extends Component {
        constructor() {
          super(...arguments);

          //图标
          _initializerDefineProperty(this, "icon", _descriptor, this);

          //标题
          _initializerDefineProperty(this, "title", _descriptor2, this);

          //选择模式
          _initializerDefineProperty(this, "selectedMode", _descriptor3, this);

          //被选标志
          _initializerDefineProperty(this, "selectedFlag", _descriptor4, this);

          //被选择的SpriteFrame
          _initializerDefineProperty(this, "selectedSpriteFrame", _descriptor5, this);

          //未被选择的SpriteFrame
          this._unselectedSpriteFrame = null;

          //自适应尺寸
          _initializerDefineProperty(this, "adaptiveSize", _descriptor6, this);

          //选择
          this._selected = false;
          //按钮组件
          this._btnCom = void 0;
          //依赖的List组件
          this.list = void 0;
          //是否已经注册过事件
          this._eventReg = false;
          //序列id
          this.listId = void 0;
        }

        set selected(val) {
          this._selected = val;
          Tween;
          if (!this.selectedFlag) return;

          switch (this.selectedMode) {
            case SelectedType.TOGGLE:
              this.selectedFlag.active = val;
              break;

            case SelectedType.SWITCH:
              var sp = this.selectedFlag.getComponent(Sprite);

              if (sp) {
                sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
              }

              break;
          }
        }

        get selected() {
          return this._selected;
        }

        get btnCom() {
          if (!this._btnCom) this._btnCom = this.node.getComponent(Button);
          return this._btnCom;
        }

        onLoad() {
          // //没有按钮组件的话，selectedFlag无效
          // if (!this.btnCom)
          //     this.selectedMode == SelectedType.NONE;
          //有选择模式时，保存相应的东西
          if (this.selectedMode == SelectedType.SWITCH) {
            var com = this.selectedFlag.getComponent(Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
          }
        }

        onDestroy() {
          this.node.off(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
        }

        _registerEvent() {
          if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
              this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
            }

            if (this.adaptiveSize) {
              this.node.on(Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }

            this._eventReg = true;
          }
        }

        _onSizeChange() {
          this.list._onItemAdaptive(this.node);
        }
        /**
         * 创建事件
         * @param {cc.Component} component 组件脚本
         * @param {string} handlerName 触发函数名称
         * @param {cc.Node} node 组件所在node（不传的情况下取component.node）
         * @returns cc.Component.EventHandler
         */


        createEvt(component, handlerName, node) {
          if (node === void 0) {
            node = null;
          }

          if (!component.isValid) return; //有些异步加载的，节点以及销毁了。

          component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
          var evt = new EventHandler();
          evt.target = node || component.node;
          evt.component = component['comName'];
          evt.handler = handlerName;
          return evt;
        }

        showAni(aniType, callFunc, del) {
          var t = this;
          var twe;
          var ut = t.node.getComponent(UITransform);

          switch (aniType) {
            case 0:
              //向上消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(0, ut.height * 2)
              });
              break;

            case 1:
              //向右消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(ut.width * 2, 0)
              });
              break;

            case 2:
              //向下消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(0, ut.height * -2)
              });
              break;

            case 3:
              //向左消失
              twe = tween(t.node).to(.2, {
                scale: new Vec3(.7, .7)
              }).by(.3, {
                position: new Vec3(ut.width * -2, 0)
              });
              break;

            default:
              //默认：缩小消失
              twe = tween(t.node).to(.3, {
                scale: new Vec3(.1, .1)
              });
              break;
          }

          if (callFunc || del) {
            twe.call(() => {
              if (del) {
                t.list._delSingleItem(t.node);

                for (var n = t.list.displayData.length - 1; n >= 0; n--) {
                  if (t.list.displayData[n].id == t.listId) {
                    t.list.displayData.splice(n, 1);
                    break;
                  }
                }
              }

              callFunc();
            });
          }

          twe.start();
        }

        onClickThis() {
          this.list.selectedId = this.listId;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectedMode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SelectedType.NONE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectedFlag", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selectedSpriteFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "adaptiveSize", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da26b57c4edf604aed9f23ce44d23ba61c5d9d69.js.map