System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCString, Component, Enum, log, Node, _decorator, VMEnv, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, executeInEditMode, menu, help, ACTION_MODE, MVCompsEdit;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      CCString = _cc.CCString;
      Component = _cc.Component;
      Enum = _cc.Enum;
      log = _cc.log;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      VMEnv = _unresolved_2.VMEnv;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2359eFXKF5HFYS74K7Y17/U", "VMCompsEdit", undefined);

      __checkObsolete__(['CCString', 'Component', 'Enum', 'log', 'Node', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu,
        help
      } = _decorator);

      ACTION_MODE = /*#__PURE__*/function (ACTION_MODE) {
        ACTION_MODE[ACTION_MODE["SEARCH_COMPONENT"] = 0] = "SEARCH_COMPONENT";
        ACTION_MODE[ACTION_MODE["ENABLE_COMPONENT"] = 1] = "ENABLE_COMPONENT";
        ACTION_MODE[ACTION_MODE["REPLACE_WATCH_PATH"] = 2] = "REPLACE_WATCH_PATH";
        ACTION_MODE[ACTION_MODE["DELETE_COMPONENT"] = 3] = "DELETE_COMPONENT";
        return ACTION_MODE;
      }(ACTION_MODE || {});
      /**
       * 用于搜索的MV 组件列表，挂载在父节点后，
       * 会遍历搜索下面的所有MV组件, 并且显示其观察值的路径
       */


      _export("default", MVCompsEdit = (_dec = menu('OopsFramework/Mvvm/Edit-Comps （快速组件操作）'), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037632&doc_id=2873565'), _dec3 = property({
        type: [CCString]
      }), _dec4 = property({
        type: Enum(ACTION_MODE)
      }), _dec5 = property({
        tooltip: '勾选后,会自动查找 find list 中填写的组件',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }), _dec6 = property({
        tooltip: '勾选后,会批量激活 find list 中填写的组件',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.ENABLE_COMPONENT;
        }
      }), _dec7 = property({
        tooltip: '勾选后,会批量关闭 find list 中填写的组件',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.ENABLE_COMPONENT;
        }
      }), _dec8 = property({
        tooltip: '允许删除节点的组件,确定需要移除请勾选,防止误操作',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.DELETE_COMPONENT;
        }
      }), _dec9 = property({
        tooltip: '勾选后,会批量删除 find list 中填写的组件',
        displayName: '[ X DELETE X ]',
        visible: function () {
          // @ts-ignore
          return this.allowDelete && this.actionType === ACTION_MODE.DELETE_COMPONENT;
        }
      }), _dec10 = property({
        tooltip: '勾选后,会批量替换掉指定的路径',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }), _dec11 = property({
        tooltip: '匹配的路径,匹配规则: 搜索开头为 game的路径',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }), _dec12 = property({
        tooltip: '替换的路径,将匹配到的路径替换',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }), _dec13 = property({
        tooltip: '是否搜集绑定VM组件的节点?',
        visible: function () {
          // @ts-ignore
          return this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }), _dec14 = property({
        type: [Node],
        readonly: true,
        tooltip: '收集到绑定了VM组件相关的节点，可以自己跳转过去',
        visible: function () {
          // @ts-ignore
          return this.canCollectNodes && this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = class MVCompsEdit extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "findList", _descriptor, this);

          _initializerDefineProperty(this, "actionType", _descriptor2, this);

          _initializerDefineProperty(this, "allowDelete", _descriptor3, this);

          _initializerDefineProperty(this, "targetPath", _descriptor4, this);

          _initializerDefineProperty(this, "replacePath", _descriptor5, this);

          _initializerDefineProperty(this, "canCollectNodes", _descriptor6, this);

          _initializerDefineProperty(this, "collectNodes", _descriptor7, this);
        }

        get findTrigger() {
          return false;
        }

        set findTrigger(v) {
          this.setComponents(0);
        }

        get enableTrigger() {
          return false;
        }

        set enableTrigger(v) {
          this.setComponents(1);
        }

        get disableTrigger() {
          return false;
        }

        set disableTrigger(v) {
          this.setComponents(2);
        }

        get deleteTrigger() {
          return false;
        }

        set deleteTrigger(v) {
          this.setComponents(3);
        }

        get replaceTrigger() {
          return false;
        }

        set replaceTrigger(v) {
          this.setComponents(4);
        }

        onLoad() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;
          let path = this.getNodePath(this.node);
          console.error('you forget delete MVEditFinder,[path]', path);
        }

        setComponents(state) {
          let array = this.findList;
          let title = '搜索到当前节点下面的组件';

          switch (state) {
            case 0:
              title = '搜索到当前节点下面的组件';
              break;

            case 1:
              title = '激活以下节点的组件';
              break;

            case 2:
              title = '关闭以下节点的组件';
              break;

            case 3:
              title = '删除以下节点的组件';
              break;

            case 4:
              title = '替换以下节点的路径';
              break;

            default:
              break;
          }

          log(title);
          log('______________________');
          array.forEach(name => {
            this.searchComponent(name, state);
          });
          log('______________________');
        }
        /**
         * 
         * @param className 
         * @param state 0-查找节点组件 1-激活节点组件 2-关闭节点组件 3-移除节点组件
         */


        searchComponent(className, state = 0) {
          /**收集节点清空 */
          this.collectNodes = [];
          let comps = this.node.getComponentsInChildren(className);
          if (comps == null || comps.length < 1) return;
          log('[' + className + ']:');
          comps.forEach(v => {
            let ext = '';

            if (state <= 3) {
              //区分模板模式路径
              if (v.templateMode === true) {
                ext = v.watchPathArr ? ':[Path:' + v.watchPathArr.join('|') + ']' : '';
              } else {
                ext = v.watchPath ? ':[Path:' + v.watchPath + ']' : '';
              }
            }

            log(this.getNodePath(v.node) + ext);

            switch (state) {
              case 0:
                //寻找组件
                if (this.canCollectNodes) {
                  if (this.collectNodes.indexOf(v.node) === -1) {
                    this.collectNodes.push(v.node);
                  }
                }

                break;

              case 1:
                // 激活组件
                v.enabled = true;
                break;

              case 2:
                // 关闭组件
                v.enabled = false;
                break;

              case 3:
                // 删除组件
                v.node.removeComponent(v);
                break;

              case 4:
                // 替换指定路径
                let targetPath = this.targetPath;
                let replacePath = this.replacePath;

                if (v.templateMode === true) {
                  for (let i = 0; i < v.watchPathArr.length; i++) {
                    const path = v.watchPathArr[i];
                    v.watchPathArr[i] = this.replaceNodePath(path, targetPath, replacePath);
                  }
                } else {
                  v.watchPath = this.replaceNodePath(v.watchPath, targetPath, replacePath);
                }

              default:
                break;
            }
          });
        }

        replaceNodePath(path, search, replace) {
          let pathArr = path.split('.');
          let searchArr = search.split('.');
          let replaceArr = replace.split('.');
          let match = true;

          for (let i = 0; i < searchArr.length; i++) {
            //未匹配上
            if (pathArr[i] !== searchArr[i]) {
              match = false;
              break;
            }
          } //匹配成功准备替换路径


          if (match === true) {
            for (let i = 0; i < replaceArr.length; i++) {
              pathArr[i] = replaceArr[i];
            }

            log(' 路径更新:', path, '>>>', pathArr.join('.'));
          }

          return pathArr.join('.');
        }

        getNodePath(node) {
          let parent = node;
          let array = [];

          while (parent) {
            let p = parent.getParent();

            if (p) {
              array.push(parent.name);
              parent = p;
            } else {
              break;
            }
          }

          return array.reverse().join('/');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "findList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ["VMBase", "VMParent"];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "actionType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ACTION_MODE.SEARCH_COMPONENT;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "findTrigger", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "findTrigger"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "enableTrigger", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "enableTrigger"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "disableTrigger", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "disableTrigger"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "allowDelete", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "deleteTrigger", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "deleteTrigger"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "replaceTrigger", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "replaceTrigger"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetPath", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 'game';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "replacePath", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '*';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "canCollectNodes", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "collectNodes", [_dec14], {
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
//# sourceMappingURL=d9319778ce4f873965fa45c2b8688537124fce8b.js.map