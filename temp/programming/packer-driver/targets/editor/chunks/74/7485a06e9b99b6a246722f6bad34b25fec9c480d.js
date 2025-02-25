System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, Label, lerp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, menu, VALUE_TYPE, BhvRollNumber;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  /** 时间格式转换 */
  function parseTimer(timer = 0, isFullTimer = true) {
    let t = Math.floor(timer);
    let hours = Math.floor(t / 3600);
    let mins = Math.floor(t % 3600 / 60);
    let secs = t % 60;
    let m = '' + mins;
    let s = '' + secs;
    if (secs < 10) s = '0' + secs; // full timer 按小时算,无论有没有小时

    if (isFullTimer) {
      if (mins < 10) m = '0' + mins;
      return hours + ':' + m + ':' + s;
    } else {
      m = '' + (mins + hours * 60);
      if (mins < 10) m = '0' + mins;
      return m + ':' + s;
    }
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Label = _cc.Label;
      lerp = _cc.lerp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72d13dwmG9LS4gkJhSuAp3F", "BhvRollNumber", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'Label', 'lerp']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      VALUE_TYPE = /*#__PURE__*/function (VALUE_TYPE) {
        VALUE_TYPE[VALUE_TYPE["INTEGER"] = 0] = "INTEGER";
        VALUE_TYPE[VALUE_TYPE["FIXED_2"] = 1] = "FIXED_2";
        VALUE_TYPE[VALUE_TYPE["TIMER"] = 2] = "TIMER";
        VALUE_TYPE[VALUE_TYPE["PERCENTAGE"] = 3] = "PERCENTAGE";
        VALUE_TYPE[VALUE_TYPE["KMBT_FIXED2"] = 4] = "KMBT_FIXED2";
        VALUE_TYPE[VALUE_TYPE["CUSTOMER"] = 5] = "CUSTOMER";
        return VALUE_TYPE;
      }(VALUE_TYPE || {});

      /**
       * 滚动数字
       * 将会使用 lerp 自动滚动数字到目标数值
       */
      _export("BhvRollNumber", BhvRollNumber = (_dec = menu("OopsFramework/UI/Roll Number （滚动数字）"), _dec2 = property({
        type: Label,
        tooltip: '需要滚动的 Label 组件,如果不进行设置，就会从自己的节点自动查找'
      }), _dec3 = property({
        tooltip: '当前的滚动值(开始的滚动值)'
      }), _dec4 = property({
        tooltip: '是否显示正负符号'
      }), _dec5 = property({
        tooltip: '滚动的目标值'
      }), _dec6 = property({
        tooltip: '滚动的线性差值',
        step: 0.01,
        max: 1,
        min: 0
      }), _dec7 = property({
        tooltip: '是否在开始时就播放'
      }), _dec8 = property({
        tooltip: '在滚动之前会等待几秒',
        step: 0.1,
        max: 1,
        min: 0
      }), _dec9 = property({
        type: Enum(VALUE_TYPE),
        tooltip: '是否在开始时就播放'
      }), ccclass(_class = _dec(_class = (_class2 = class BhvRollNumber extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "value", _descriptor2, this);

          _initializerDefineProperty(this, "showPlusSymbol", _descriptor3, this);

          _initializerDefineProperty(this, "_targetValue", _descriptor4, this);

          /** 滚动的线性差值 0 ~ 1 */
          _initializerDefineProperty(this, "lerp", _descriptor5, this);

          _initializerDefineProperty(this, "playAtStart", _descriptor6, this);

          _initializerDefineProperty(this, "runWaitTimer", _descriptor7, this);

          _initializerDefineProperty(this, "valueType", _descriptor8, this);

          /** 自定义string 处理函数 */
          this.onCustom = null;
          this.isScrolling = false;
        }

        get targetValue() {
          return this._targetValue;
        }

        set targetValue(v) {
          this._targetValue = v;
          this.scroll(); //数据变动了就开始滚动
        }

        onLoad() {
          if (this.label == undefined) {
            this.label = this.node.getComponent(Label);
          }

          if (this.playAtStart) {
            this.updateLabel();
            this.scroll();
          }
        }
        /** 开始滚动数字 */


        scroll() {
          if (this.isScrolling) return; //  已经在滚动了就返回

          if (this.runWaitTimer > 0) {
            this.scheduleOnce(() => {
              this.isScrolling = true;
            }, this.runWaitTimer);
          } else {
            this.isScrolling = true;
          }
        }
        /** 停止滚动数字 */


        stop() {
          this.value = this.targetValue;
          this.isScrolling = false;
          this.updateLabel();
        }
        /** 初始化数值,不填写则全部按默认值处理 */


        init(value, target, lerp) {
          this.targetValue = target || 0;
          this.value = value || 0;
          this.lerp = lerp || 0.1;
        }
        /** 滚动到指定数字 */


        scrollTo(target) {
          if (target === null || target === undefined) return;
          this.targetValue = target;
        }
        /** 更新文本 */


        updateLabel() {
          let value = this.value;
          let string = '';

          switch (this.valueType) {
            case VALUE_TYPE.INTEGER:
              // 最终显示整数类型
              string = Math.round(value) + '';
              break;

            case VALUE_TYPE.FIXED_2:
              // 最终显示两位小数类型
              string = value.toFixed(2);
              break;

            case VALUE_TYPE.TIMER:
              // 最终显示 计时器类型
              string = parseTimer(value);
              break;

            case VALUE_TYPE.PERCENTAGE:
              // 最终显示 百分比
              string = Math.round(value * 100) + '%';
              break;

            case VALUE_TYPE.KMBT_FIXED2:
              // 长单位缩放,只计算到 KMBT
              if (value >= Number.MAX_VALUE) {
                string = 'MAX';
              } else if (value > 1000000000000) {
                string = (value / 1000000000000).toFixed(2) + 'T';
              } else if (value > 1000000000) {
                string = (value / 1000000000).toFixed(2) + 'B';
              } else if (value > 1000000) {
                string = (value / 1000000).toFixed(2) + 'M';
              } else if (value > 1000) {
                string = (value / 1000).toFixed(2) + "K";
              } else {
                string = Math.round(value).toString();
              }

              break;

            case VALUE_TYPE.CUSTOMER:
              // 自定义设置模式 (通过给定的自定义函数..处理)
              if (this.onCustom) {
                string = this.onCustom(this.value, this.targetValue);
              }

              break;

            default:
              break;
          } // 显示正负符号


          if (this.showPlusSymbol) {
            if (value > 0) {
              string = '+' + string;
            } else if (value < 0) {
              string = '-' + string;
            }
          }

          if (this.label) {
            if (string === this.label.string) return; // 保证效率,如果上次赋值过,就不重复赋值

            this.label.string = string;
          }
        }

        update(dt) {
          if (this.isScrolling == false) return;
          this.value = lerp(this.value, this.targetValue, this.lerp);
          this.updateLabel();

          if (Math.abs(this.value - this.targetValue) <= 0.0001) {
            this.value = this.targetValue;
            this.isScrolling = false; //this.node.emit('roll-hit-target');        // 滚动数字击中了目标

            return;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showPlusSymbol", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "targetValue", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "targetValue"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_targetValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lerp", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playAtStart", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "runWaitTimer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "valueType", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return VALUE_TYPE.INTEGER;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7485a06e9b99b6a246722f6bad34b25fec9c480d.js.map