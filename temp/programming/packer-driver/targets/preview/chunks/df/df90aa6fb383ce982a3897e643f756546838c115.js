System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, error, StringFormatFunction, VMBase, VMEnv, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, executeInEditMode, help, LABEL_TYPE, VMLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfStringFormatFunction(extras) {
    _reporterNs.report("StringFormatFunction", "./StringFormat", _context.meta, extras);
  }

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
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      error = _cc.error;
    }, function (_unresolved_2) {
      StringFormatFunction = _unresolved_2.StringFormatFunction;
    }, function (_unresolved_3) {
      VMBase = _unresolved_3.VMBase;
    }, function (_unresolved_4) {
      VMEnv = _unresolved_4.VMEnv;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "545c05XsG9GDJispEGWKvYv", "VMLabel", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'error']);

      ({
        ccclass,
        property,
        menu,
        executeInEditMode,
        help
      } = _decorator);
      LABEL_TYPE = {
        CC_LABEL: 'cc.Label',
        CC_RICH_TEXT: 'cc.RichText',
        CC_EDIT_BOX: 'cc.EditBox'
      };
      /**
       *  [VM-Label]
       *  专门处理 Label 相关 的组件，如 ccLabel,ccRichText,ccEditBox
       *  可以使用模板化的方式将数据写入,可以处理字符串格式等
       *  todo 加入stringFormat 可以解析转换常见的字符串格式
       */

      _export("default", VMLabel = (_dec = menu('OopsFramework/Mvvm/VM-Label （标签）'), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037641&doc_id=2873565'), _dec3 = property({
        tooltip: '是否启用模板代码,只能在运行时之前设置,\n将会动态解析模板语法 {{0}},并且自动设置监听的路径'
      }), _dec4 = property({
        visible() {
          // @ts-ignore
          return this.templateMode === false;
        }

      }), _dec5 = property({
        readonly: true
      }), _dec6 = property({
        type: [CCString],

        visible() {
          // @ts-ignore
          return this.templateMode === true;
        }

      }), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = class VMLabel extends (_crd && VMBase === void 0 ? (_reportPossibleCrUseOfVMBase({
        error: Error()
      }), VMBase) : VMBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "templateMode", _descriptor, this);

          _initializerDefineProperty(this, "watchPath", _descriptor2, this);

          _initializerDefineProperty(this, "labelType", _descriptor3, this);

          _initializerDefineProperty(this, "watchPathArr", _descriptor4, this);

          /** 按照路径参数顺序保存的 值的数组（固定）*/
          this.templateValueArr = [];

          /** 保存着字符模板格式的数组 (只会影响显示参数) */
          this.templateFormatArr = [];

          /** 源字符串 */
          this.originText = null;
        }

        onRestore() {
          this.checkLabel();
        }

        onLoad() {
          super.onLoad();
          this.checkLabel();
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;

          if (this.templateMode) {
            this.originText = this.getLabelValue();
            this.parseTemplate();
          }
        }

        start() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;
          this.onValueInit();
        }
        /** 解析模板 获取初始格式化字符串格式的信息 */


        parseTemplate() {
          var regexAll = /\{\{(.+?)\}\}/g; // 匹配： 所有的{{value}}

          var regex = /\{\{(.+?)\}\}/; // 匹配： {{value}} 中的 value

          var res = this.originText.match(regexAll); // 匹配结果数组

          if (res == null) return;

          for (var i = 0; i < res.length; i++) {
            var e = res[i];
            var arr = e.match(regex);
            var matchName = arr[1]; // let paramIndex = parseInt(matchName) || 0;

            var matchInfo = matchName.split(':')[1] || '';
            this.templateFormatArr[i] = matchInfo;
          }
        }
        /** 获取解析字符串模板后得到的值 */


        getReplaceText() {
          if (!this.originText) return "";
          var regexAll = /\{\{(.+?)\}\}/g; // 匹配： 所有的{{value}}

          var regex = /\{\{(.+?)\}\}/; // 匹配： {{value}} 中的 value

          var res = this.originText.match(regexAll); // 匹配结果数组 [{{value}}，{{value}}，{{value}}]

          if (res == null) return ''; // 未匹配到文本

          var str = this.originText; // 原始字符串模板 "name:{{0}} 或 name:{{0:fix2}}"

          for (var i = 0; i < res.length; i++) {
            var e = res[i];
            var getValue = void 0;
            var arr = e.match(regex); // 匹配到的数组 [{{value}}, value]

            var indexNum = parseInt(arr[1] || '0') || 0; // 取出数组的 value 元素 转换成整数

            var format = this.templateFormatArr[i]; // 格式化字符 的 配置参数

            getValue = this.templateValueArr[indexNum];
            str = str.replace(e, this.getValueFromFormat(getValue, format)); //从路径缓存值获取数据
          }

          return str;
        }
        /** 格式化字符串 */


        getValueFromFormat(value, format) {
          return (_crd && StringFormatFunction === void 0 ? (_reportPossibleCrUseOfStringFormatFunction({
            error: Error()
          }), StringFormatFunction) : StringFormatFunction).deal(value, format);
        }
        /** 初始化获取数据 */


        onValueInit() {
          //更新信息
          if (this.templateMode === false) {
            this.setLabelValue(this.VM.getValue(this.watchPath)); //
          } else {
            var max = this.watchPathArr.length;

            for (var i = 0; i < max; i++) {
              this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i], '?');
            }

            this.setLabelValue(this.getReplaceText()); // 重新解析
          }
        }
        /** 监听数据发生了变动的情况 */


        onValueChanged(n, o, pathArr) {
          if (this.templateMode === false) {
            this.setLabelValue(n);
          } else {
            var path = pathArr.join('.'); // 寻找缓存位置

            var index = this.watchPathArr.findIndex(v => v === path);

            if (index >= 0) {
              //如果是所属的路径，就可以替换文本了
              this.templateValueArr[index] = n; // 缓存值

              this.setLabelValue(this.getReplaceText()); // 重新解析文本
            }
          }
        }

        setLabelValue(value) {
          var component = this.getComponent(this.labelType);
          component.string = value + '';
        }

        getLabelValue() {
          var component = this.getComponent(this.labelType);
          return component.string;
        }

        checkLabel() {
          var checkArray = ['cc.Label', 'cc.RichText', 'cc.EditBox'];

          for (var i = 0; i < checkArray.length; i++) {
            var e = checkArray[i];
            var comp = this.node.getComponent(e);

            if (comp) {
              this.labelType = e;
              return true;
            }
          }

          error('没有挂载任何label组件');
          return false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "templateMode", [_dec3], {
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
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LABEL_TYPE.CC_LABEL;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "watchPathArr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df90aa6fb383ce982a3897e643f756546838c115.js.map