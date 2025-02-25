System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCString, Enum, EventHandler, _decorator, VMBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, executeInEditMode, menu, help, FILTER_MODE, VMEvent;

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
      CCString = _cc.CCString;
      Enum = _cc.Enum;
      EventHandler = _cc.EventHandler;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      VMBase = _unresolved_2.VMBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9ce7kf8XZJeLPlT2iWn2zD", "VMEvent", undefined);

      __checkObsolete__(['CCString', 'Enum', 'EventHandler', '_decorator']);

      // +普通 label 更新数据的情况,label.string = xxx;
      // +frameIndex 插件，通过number 数值设置 BhvFrameIndex 来切换当前贴图
      // +spriteFrame 直接替换贴图的情况 , 
      //  读取本地路径 data.spriteFrame = $res:/pic/com1
      //  读取网页路径 data.spriteFrame = $url:http:xxxxxxxxxx.png
      // +特殊条件控制 
      // 比较条件:,如果传入值 > /< />= /<= /== 某值时，执行的action类型
      ({
        ccclass,
        property,
        executeInEditMode,
        menu,
        help
      } = _decorator);

      FILTER_MODE = /*#__PURE__*/function (FILTER_MODE) {
        FILTER_MODE[FILTER_MODE["none"] = 0] = "none";
        FILTER_MODE[FILTER_MODE["=="] = 1] = "==";
        FILTER_MODE[FILTER_MODE["!="] = 2] = "!=";
        FILTER_MODE[FILTER_MODE[">"] = 3] = ">";
        FILTER_MODE[FILTER_MODE[">="] = 4] = ">=";
        FILTER_MODE[FILTER_MODE["<"] = 5] = "<";
        FILTER_MODE[FILTER_MODE["<="] = 6] = "<=";
        return FILTER_MODE;
      }(FILTER_MODE || {});
      /**
       *  [VM-Event]
       * 提供  ViewModel 的相关基础功能,
       * 如果值发生变化将会调用对应的函数方法
       */


      _export("default", VMEvent = (_dec = menu('OopsFramework/Mvvm/VM-EventCall （调用函数）'), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037640&doc_id=2873565'), _dec3 = property({
        tooltip: '使用模板模式，可以使用多路径监听'
      }), _dec4 = property({
        tooltip: '监听获取值的路径',
        visible: function () {
          // @ts-ignore
          return this.templateMode === false;
        }
      }), _dec5 = property({
        tooltip: '触发一次后会自动关闭该事件'
      }), _dec6 = property({
        tooltip: '监听获取值的多条路径,这些值的改变都会通过这个函数回调,请使用 pathArr 区分获取的值 ',
        type: [CCString],
        visible: function () {
          // @ts-ignore
          return this.templateMode === true;
        }
      }), _dec7 = property({
        tooltip: '过滤模式，会根据条件过滤掉时间的触发',
        type: Enum(FILTER_MODE)
      }), _dec8 = property({
        visible: function () {
          // @ts-ignore
          return this.filterMode !== FILTER_MODE.none;
        }
      }), _dec9 = property([EventHandler]), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = class VMEvent extends (_crd && VMBase === void 0 ? (_reportPossibleCrUseOfVMBase({
        error: Error()
      }), VMBase) : VMBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "templateMode", _descriptor, this);

          _initializerDefineProperty(this, "watchPath", _descriptor2, this);

          _initializerDefineProperty(this, "triggerOnce", _descriptor3, this);

          _initializerDefineProperty(this, "watchPathArr", _descriptor4, this);

          _initializerDefineProperty(this, "filterMode", _descriptor5, this);

          _initializerDefineProperty(this, "compareValue", _descriptor6, this);

          _initializerDefineProperty(this, "changeEvents", _descriptor7, this);
        }

        onValueInit() {}

        onValueChanged(newVar, oldVar, pathArr) {
          let res = this.conditionCheck(newVar, this.compareValue);
          if (!res) return;

          if (Array.isArray(this.changeEvents)) {
            this.changeEvents.forEach(v => {
              v.emit([newVar, oldVar, pathArr]);
            });
          } // 激活一次后，自动关闭组件


          if (this.triggerOnce === true) {
            this.enabled = false;
          }
        }
        /** 条件检查 */


        conditionCheck(a, b) {
          let cod = FILTER_MODE;

          switch (this.filterMode) {
            case cod.none:
              return true;

            case cod["=="]:
              if (a == b) return true;
              break;

            case cod["!="]:
              if (a != b) return true;
              break;

            case cod["<"]:
              if (a < b) return true;
              break;

            case cod[">"]:
              if (a > b) return true;
              break;

            case cod[">="]:
              if (a >= b) return true;
              break;

            case cod["<"]:
              if (a < b) return true;
              break;

            case cod["<="]:
              if (a <= b) return true;
              break;

            default:
              break;
          }

          return false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "templateMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "watchPath", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "triggerOnce", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "watchPathArr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "filterMode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return FILTER_MODE.none;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "compareValue", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "changeEvents", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59752756510df731aac200088e04039c59302018.js.map