System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Component, _decorator, VMEnv, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, menu, BhvSwitchPage;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVMEnv(extras) {
    _reporterNs.report("VMEnv", "../VMEnv", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      VMEnv = _unresolved_2.VMEnv;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3d083kncpDPqVztMtiq6DO", "BhvSwitchPage", undefined);

      __checkObsolete__(['CCInteger', 'Component', 'Node', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator);
      /** 页面切换 */

      _export("BhvSwitchPage", BhvSwitchPage = (_dec = menu("OopsFramework/UI/Switch Page （页面切换）"), _dec2 = property({
        type: CCInteger
      }), ccclass(_class = executeInEditMode(_class = _dec(_class = (_class2 = class BhvSwitchPage extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isLoopPage", _descriptor, this);

          _initializerDefineProperty(this, "_index", _descriptor2, this);

          this.preIndex = 0;
          //判断是否在 changing 页面状态
          this._isChanging = false;
        }

        get index() {
          return this._index;
        }

        set index(v) {
          if (this.isChanging) return;
          v = Math.round(v);
          let count = this.node.children.length - 1;

          if (this.isLoopPage) {
            if (v > count) v = 0;
            if (v < 0) v = count;
          } else {
            if (v > count) v = count;
            if (v < 0) v = 0;
          }

          this.preIndex = this._index; //标记之前的页面

          this._index = v;

          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) {
            this._updateEditorPage(v);
          } else {
            this._updatePage(v);
          }
        }

        /**只读，是否在changing 的状态 */
        get isChanging() {
          return this._isChanging;
        }

        onLoad() {
          this.preIndex = this.index;
        }

        _updateEditorPage(page) {
          if (!(_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;
          let children = this.node.children;

          for (let i = 0; i < children.length; i++) {
            const node = children[i];

            if (i == page) {
              node.active = true;
            } else {
              node.active = false;
            }
          }
        }

        _updatePage(page) {
          let children = this.node.children;
          let preIndex = this.preIndex;
          let curIndex = this.index;
          if (preIndex === curIndex) return; //没有改变就不进行操作

          let preNode = children[preIndex]; //旧节点

          let showNode = children[curIndex]; //新节点

          preNode.active = false;
          showNode.active = true;
        }

        next() {
          if (this.isChanging) {
            return false;
          } else {
            this.index++;
            return true;
          }
        }

        previous() {
          if (this.isChanging) {
            return false;
          } else {
            this.index--;
            return true;
          }
        }

        setEventIndex(e, index) {
          if (this.index >= 0 && this.index != null && this.isChanging === false) {
            this.index = index;
            return true;
          } else {
            return false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isLoopPage", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_index", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "index", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "index"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ebffc359a6f3512e751b93134dfd33b9696b1faf.js.map