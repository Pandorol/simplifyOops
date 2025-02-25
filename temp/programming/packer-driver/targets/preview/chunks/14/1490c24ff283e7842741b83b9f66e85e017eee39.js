System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, CCInteger, Enum, Node, Sprite, UIOpacity, UIRenderer, _decorator, color, VMBase, VM, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, menu, help, CONDITION, ACTION, CHILD_MODE_TYPE, VMState;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVMBase(extras) {
    _reporterNs.report("VMBase", "./VMBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVM(extras) {
    _reporterNs.report("VM", "./ViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      CCInteger = _cc.CCInteger;
      Enum = _cc.Enum;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      UIRenderer = _cc.UIRenderer;
      _decorator = _cc._decorator;
      color = _cc.color;
    }, function (_unresolved_2) {
      VMBase = _unresolved_2.VMBase;
    }, function (_unresolved_3) {
      VM = _unresolved_3.VM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47052uw/Y5O1LXaLObj4ARx", "VMState", undefined);

      __checkObsolete__(['Button', 'CCInteger', 'Color', 'Enum', 'Node', 'Sprite', 'UIOpacity', 'UIRenderer', '_decorator', 'color']);

      ({
        ccclass,
        property,
        menu,
        help
      } = _decorator);
      /** 比较条件 */

      CONDITION = /*#__PURE__*/function (CONDITION) {
        CONDITION[CONDITION["=="] = 0] = "==";
        CONDITION[CONDITION["!="] = 1] = "!=";
        CONDITION[CONDITION[">"] = 2] = ">";
        CONDITION[CONDITION[">="] = 3] = ">=";
        CONDITION[CONDITION["<"] = 4] = "<";
        CONDITION[CONDITION["<="] = 5] = "<=";
        CONDITION[CONDITION["range"] = 6] = "range";
        return CONDITION;
      }(CONDITION || {});

      ACTION = /*#__PURE__*/function (ACTION) {
        ACTION[ACTION["NODE_ACTIVE"] = 0] = "NODE_ACTIVE";
        ACTION[ACTION["NODE_VISIBLE"] = 1] = "NODE_VISIBLE";
        ACTION[ACTION["NODE_OPACITY"] = 2] = "NODE_OPACITY";
        ACTION[ACTION["NODE_COLOR"] = 3] = "NODE_COLOR";
        ACTION[ACTION["COMPONENT_CUSTOM"] = 4] = "COMPONENT_CUSTOM";
        ACTION[ACTION["SPRITE_GRAYSCALE"] = 5] = "SPRITE_GRAYSCALE";
        ACTION[ACTION["BUTTON_INTERACTABLE"] = 6] = "BUTTON_INTERACTABLE";
        return ACTION;
      }(ACTION || {});

      CHILD_MODE_TYPE = /*#__PURE__*/function (CHILD_MODE_TYPE) {
        CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_INDEX"] = 0] = "NODE_INDEX";
        CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_NAME"] = 1] = "NODE_NAME";
        return CHILD_MODE_TYPE;
      }(CHILD_MODE_TYPE || {});
      /**
       * [VM-State]
       * 监听数值状态,根据数值条件设置节点是否激活
       */


      _export("default", VMState = (_dec = menu('OopsFramework/Mvvm/VM-State （状态控制）'), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037846&doc_id=2873565'), _dec3 = property({
        tooltip: '遍历子节点,根据子节点的名字或名字转换为值，判断值满足条件 来激活'
      }), _dec4 = property({
        type: Enum(CONDITION)
      }), _dec5 = property({
        type: Enum(CHILD_MODE_TYPE),
        tooltip: '遍历子节点,根据子节点的名字转换为值，判断值满足条件 来激活',
        visible: function visible() {
          // @ts-ignore
          return this.foreachChildMode === true;
        }
      }), _dec6 = property({
        displayName: 'Value: a',
        visible: function visible() {
          // @ts-ignore
          return this.foreachChildMode === false;
        }
      }), _dec7 = property({
        displayName: 'Value: b',
        visible: function visible() {
          // @ts-ignore
          return this.foreachChildMode === false && this.condition === CONDITION.range;
        }
      }), _dec8 = property({
        type: Enum(ACTION),
        tooltip: '一旦满足条件就对节点执行操作'
      }), _dec9 = property({
        visible: function visible() {
          // @ts-ignore
          return this.valueAction === ACTION.NODE_OPACITY;
        },
        range: [0, 255],
        type: CCInteger,
        displayName: 'Action Opacity'
      }), _dec10 = property({
        visible: function visible() {
          // @ts-ignore
          return this.valueAction === ACTION.NODE_COLOR;
        },
        displayName: 'Action Color'
      }), _dec11 = property({
        visible: function visible() {
          // @ts-ignore
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: 'Component Name'
      }), _dec12 = property({
        visible: function visible() {
          // @ts-ignore
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: 'Component Property'
      }), _dec13 = property({
        visible: function visible() {
          // @ts-ignore
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: 'Default Value'
      }), _dec14 = property({
        visible: function visible() {
          // @ts-ignore
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: 'Action Value'
      }), _dec15 = property({
        type: [Node],
        tooltip: '需要执行条件的节点，如果不填写则默认会执行本节点以及本节点的所有子节点 的状态'
      }), ccclass(_class = _dec(_class = _dec2(_class = (_class2 = class VMState extends (_crd && VMBase === void 0 ? (_reportPossibleCrUseOfVMBase({
        error: Error()
      }), VMBase) : VMBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "watchPath", _descriptor, this);

          _initializerDefineProperty(this, "foreachChildMode", _descriptor2, this);

          _initializerDefineProperty(this, "condition", _descriptor3, this);

          _initializerDefineProperty(this, "foreachChildType", _descriptor4, this);

          _initializerDefineProperty(this, "valueA", _descriptor5, this);

          _initializerDefineProperty(this, "valueB", _descriptor6, this);

          _initializerDefineProperty(this, "valueAction", _descriptor7, this);

          _initializerDefineProperty(this, "valueActionOpacity", _descriptor8, this);

          _initializerDefineProperty(this, "valueActionColor", _descriptor9, this);

          _initializerDefineProperty(this, "valueComponentName", _descriptor10, this);

          _initializerDefineProperty(this, "valueComponentProperty", _descriptor11, this);

          _initializerDefineProperty(this, "valueComponentDefaultValue", _descriptor12, this);

          _initializerDefineProperty(this, "valueComponentActionValue", _descriptor13, this);

          _initializerDefineProperty(this, "watchNodes", _descriptor14, this);
        }

        onLoad() {
          super.onLoad(); // 如果数组里没有监听值，那么默认把所有子节点给监听了

          if (this.watchNodes.length == 0) {
            if (this.valueAction !== ACTION.NODE_ACTIVE && this.foreachChildMode === false) {
              this.watchNodes.push(this.node);
            }

            this.watchNodes = this.watchNodes.concat(this.node.children);
          }
        }

        start() {
          if (this.enabled) {
            this.onValueInit();
          }
        } // 当值初始化时


        onValueInit() {
          var value = (_crd && VM === void 0 ? (_reportPossibleCrUseOfVM({
            error: Error()
          }), VM) : VM).getValue(this.watchPath);
          this.checkNodeFromValue(value);
        } // 当值被改变时


        onValueChanged(newVar, oldVar, pathArr) {
          this.checkNodeFromValue(newVar);
        } // 检查节点值更新


        checkNodeFromValue(value) {
          if (this.foreachChildMode) {
            this.watchNodes.forEach((node, index) => {
              var v = this.foreachChildType === CHILD_MODE_TYPE.NODE_INDEX ? index : node.name;
              var check = this.conditionCheck(value, v); // log('遍历模式', value, node.name, check);

              this.setNodeState(node, check);
            });
          } else {
            var check = this.conditionCheck(value, this.valueA, this.valueB);
            this.setNodesStates(check);
          }
        } // 更新 多个节点 的 状态


        setNodesStates(checkState) {
          var nodes = this.watchNodes;
          var check = checkState;
          nodes.forEach(node => {
            this.setNodeState(node, check);
          });
        }
        /** 更新单个节点的状态 */


        setNodeState(node, checkState) {
          var n = this.valueAction;
          var check = checkState;

          switch (n) {
            case ACTION.NODE_ACTIVE:
              node.active = check ? true : false;
              break;

            case ACTION.NODE_VISIBLE:
              {
                var opacity = node.getComponent(UIOpacity);
                if (opacity == null) opacity = node.addComponent(UIOpacity);

                if (opacity) {
                  opacity.opacity = check ? 255 : 0;
                }

                break;
              }

            case ACTION.NODE_OPACITY:
              {
                var _opacity = node.getComponent(UIOpacity);

                if (_opacity == null) _opacity = node.addComponent(UIOpacity);

                if (_opacity) {
                  _opacity.opacity = check ? this.valueActionOpacity : 255;
                }

                break;
              }

            case ACTION.NODE_COLOR:
              {
                var uir = node.getComponent(UIRenderer);

                if (uir) {
                  uir.color = check ? this.valueActionColor : color(255, 255, 255);
                }

                break;
              }

            case ACTION.COMPONENT_CUSTOM:
              var comp = node.getComponent(this.valueComponentName);
              if (comp == null) return;

              if (this.valueComponentProperty in comp) {
                comp[this.valueComponentProperty] = check ? this.valueComponentActionValue : this.valueComponentDefaultValue;
              }

              break;

            case ACTION.SPRITE_GRAYSCALE:
              {
                var sprite = node.getComponent(Sprite);

                if (sprite) {
                  sprite.grayscale = check;
                }

                break;
              }

            case ACTION.BUTTON_INTERACTABLE:
              {
                var _sprite = node.getComponent(Button);

                if (_sprite) {
                  _sprite.interactable = check;
                }

                break;
              }

            default:
              break;
          }
        }
        /** 条件检查 */


        conditionCheck(v, a, b) {
          var cod = CONDITION;

          switch (this.condition) {
            case cod["=="]:
              if (v == a) return true;
              break;

            case cod["!="]:
              if (v != a) return true;
              break;

            case cod["<"]:
              if (v < a) return true;
              break;

            case cod[">"]:
              if (v > a) return true;
              break;

            case cod[">="]:
              if (v >= a) return true;
              break;

            case cod["<"]:
              if (v < a) return true;
              break;

            case cod["<="]:
              if (v <= a) return true;
              break;

            case cod["range"]:
              if (v >= a && v <= b) return true;
              break;

            default:
              break;
          }

          return false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "watchPath", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "foreachChildMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "condition", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CONDITION["=="];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "foreachChildType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CHILD_MODE_TYPE.NODE_INDEX;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "valueA", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "valueB", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "valueAction", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ACTION.NODE_ACTIVE;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "valueActionOpacity", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "valueActionColor", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(155, 155, 155);
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "valueComponentName", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "valueComponentProperty", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "valueComponentDefaultValue", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "valueComponentActionValue", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "watchNodes", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1490c24ff283e7842741b83b9f66e85e017eee39.js.map