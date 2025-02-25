System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Toggle, _decorator, VMBase, VMEnv, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, executeInEditMode, menu, help, COMP_ARRAY_CHECK, VMCustom;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVMBase(extras) {
    _reporterNs.report("VMBase", "./VMBase", _context.meta, extras);
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
      Toggle = _cc.Toggle;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      VMBase = _unresolved_2.VMBase;
    }, function (_unresolved_3) {
      VMEnv = _unresolved_3.VMEnv;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce662fwsSVPLKpmHx+KocFu", "VMCustom", undefined);

      __checkObsolete__(['Toggle', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu,
        help
      } = _decorator);
      /** 自动检查识别的数组,你可以准备自己的组件放上去自动识别 */

      COMP_ARRAY_CHECK = [['BhvFrameIndex', 'index', false], ['BhvGroupToggle', 'index', false], ['BhvRollNumber', 'targetValue', false], // 组件名、默认属性、controller值
      ['cc.Label', 'string', false], ['cc.RichText', 'string', false], ['cc.EditBox', 'string', true], ['cc.Slider', 'progress', true], ['cc.ProgressBar', 'progress', false], ['cc.Toggle', 'isChecked', true]];
      /**
       * [VM-Custom]
       * 自定义数值监听, 可以快速对该节点上任意一个组件上的属性进行双向绑定
       */

      _export("VMCustom", VMCustom = (_dec = menu('OopsFramework/Mvvm/VM-Custom （自定义）'), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037634&doc_id=2873565'), _dec3 = property({
        tooltip: '激活controller,以开启双向绑定，否则只能接收消息'
      }), _dec4 = property({
        tooltip: "监视对象路径"
      }), _dec5 = property({
        tooltip: '绑定组件的名字'
      }), _dec6 = property({
        tooltip: '组件上需要监听的属性'
      }), _dec7 = property({
        tooltip: '刷新间隔频率(只影响脏检查的频率)',
        step: 0.01,
        range: [0, 1],
        visible: function visible() {
          // @ts-ignore
          return this.controller === true;
        }
      }), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = class VMCustom extends (_crd && VMBase === void 0 ? (_reportPossibleCrUseOfVMBase({
        error: Error()
      }), VMBase) : VMBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "controller", _descriptor, this);

          _initializerDefineProperty(this, "watchPath", _descriptor2, this);

          _initializerDefineProperty(this, "componentName", _descriptor3, this);

          _initializerDefineProperty(this, "componentProperty", _descriptor4, this);

          _initializerDefineProperty(this, "refreshRate", _descriptor5, this);

          /** 计时器 */
          this._timer = 0;

          /** 监听的组件对象 */
          this._watchComponent = null;

          /** 是否能监听组件的数据 */
          this._canWatchComponent = false;

          /** 检查的值 */
          this._oldValue = null;
        }

        onLoad() {
          super.onLoad(); // 只在运行时检查组件是否缺失可用

          this.checkEditorComponent(); //编辑器检查

          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;
          this._watchComponent = this.node.getComponent(this.componentName);
          this.checkComponentState();
        }

        onRestore() {
          this.checkEditorComponent();
        }

        start() {
          //从 watch 的路径中获取一个初始值
          this.onValueInit();
        } // 挂在对应节点后，自动获取组件属性和名字


        checkEditorComponent() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;
          var checkArray = COMP_ARRAY_CHECK;

          for (var i = 0; i < checkArray.length; i++) {
            var params = checkArray[i];
            var comp = this.node.getComponent(params[0]);

            if (comp) {
              if (this.componentName == '') this.componentName = params[0];
              if (this.componentProperty == '') this.componentProperty = params[1];
              if (params[2] !== null) this.controller = params[2];
              break;
            }
          }
        }

        checkComponentState() {
          this._canWatchComponent = false;

          if (!this._watchComponent) {
            console.error('未设置需要监听的组件');
            return;
          }

          if (!this.componentProperty) {
            console.error('未设置需要监听的组件 的属性');
            return;
          }

          if (this.componentProperty in this._watchComponent === false) {
            console.error('需要监听的组件的属性不存在');
            return;
          }

          this._canWatchComponent = true;
        }

        getComponentValue() {
          return this._watchComponent[this.componentProperty];
        }

        setComponentValue(value) {
          // 如果遇到 Toggle 组件就调用上面的方法解决
          if (this.componentName == "cc.Toggle") {
            this.node.getComponent(Toggle).isChecked = value;
          } else {
            this._watchComponent[this.componentProperty] = value;
          }
        }
        /** 初始化获取数据 */


        onValueInit() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return; //更新信息

          this.setComponentValue(this.VM.getValue(this.watchPath));
        }
        /** [可重写]组件的值发生变化后，触发更新此值 */


        onValueController(newValue, oldValue) {
          this.VM.setValue(this.watchPath, newValue);
        }
        /** [可重写]初始化改变数据 */


        onValueChanged(n, o, pathArr) {
          this.setComponentValue(n);
        }

        update(dt) {
          // 脏检查（组件是否存在，是否被激活）
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return; //if (this.templateMode == true) return; //todo 模板模式下不能计算  

          if (!this.controller) return;
          if (!this._canWatchComponent || this._watchComponent['enabled'] === false) return; //刷新频率检查

          this._timer += dt;
          if (this._timer < this.refreshRate) return;
          this._timer = 0;
          var oldValue = this._oldValue;
          var newValue = this.getComponentValue();
          if (this._oldValue === newValue) return;
          this._oldValue = this.getComponentValue();
          this.onValueController(newValue, oldValue);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "controller", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "watchPath", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "componentName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "componentProperty", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "refreshRate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b016bb40c2694a9da524d3b7e34de8d4d385ea81.js.map