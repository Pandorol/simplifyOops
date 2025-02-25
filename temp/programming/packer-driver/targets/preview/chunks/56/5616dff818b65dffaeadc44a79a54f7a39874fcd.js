System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Layers, Node, ResolutionPolicy, Widget, screen, view, warn, oops, DelegateComponent, LayerDialog, LayerNotify, LayerPopUp, LayerUI, LayerManager, _crd, ScreenAdapterType, LayerType;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerDialog(extras) {
    _reporterNs.report("LayerDialog", "./LayerDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerNotify(extras) {
    _reporterNs.report("LayerNotify", "./LayerNotify", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerPopUp(extras) {
    _reporterNs.report("LayerPopUp", "./LayerPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  _export("LayerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      Layers = _cc.Layers;
      Node = _cc.Node;
      ResolutionPolicy = _cc.ResolutionPolicy;
      Widget = _cc.Widget;
      screen = _cc.screen;
      view = _cc.view;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      DelegateComponent = _unresolved_3.DelegateComponent;
    }, function (_unresolved_4) {
      LayerDialog = _unresolved_4.LayerDialog;
    }, function (_unresolved_5) {
      LayerNotify = _unresolved_5.LayerNotify;
    }, function (_unresolved_6) {
      LayerPopUp = _unresolved_6.LayerPopUp;
    }, function (_unresolved_7) {
      LayerUI = _unresolved_7.LayerUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36af4HATr9HPbvqCH6R3C/v", "LayerManager", undefined); //cpall


      __checkObsolete__(['Camera', 'Layers', 'Node', 'ResolutionPolicy', 'Widget', 'screen', 'view', 'warn']);

      /** 屏幕适配类型 */
      _export("ScreenAdapterType", ScreenAdapterType = /*#__PURE__*/function (ScreenAdapterType) {
        ScreenAdapterType[ScreenAdapterType["Auto"] = 0] = "Auto";
        ScreenAdapterType[ScreenAdapterType["Landscape"] = 1] = "Landscape";
        ScreenAdapterType[ScreenAdapterType["Portrait"] = 2] = "Portrait";
        return ScreenAdapterType;
      }({}));
      /** 界面层类型 */


      _export("LayerType", LayerType = /*#__PURE__*/function (LayerType) {
        LayerType["Game"] = "LayerGame";
        LayerType["UI"] = "LayerUI";
        LayerType["PopUp"] = "LayerPopUp";
        LayerType["Dialog"] = "LayerDialog";
        LayerType["System"] = "LayerSystem";
        LayerType["Notify"] = "LayerNotify";
        LayerType["Guide"] = "LayerGuide";
        return LayerType;
      }({}));
      /** 
       * 界面配置结构体
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037986&doc_id=2873565
       * @example
      // 界面唯一标识
      export enum UIID {
          Loading = 1,
          Window,
          Netinstable
      }
      
      // 打开界面方式的配置数据
      export var UIConfigData: { [key: number]: UIConfig } = {
          [UIID.Loading]: { layer: LayerType.UI, prefab: "loading/prefab/loading", bundle: "resources" },
          [UIID.Netinstable]: { layer: LayerType.PopUp, prefab: "common/prefab/netinstable" },
          [UIID.Window]: { layer: LayerType.Dialog, prefab: "common/prefab/window" }
      }
       */


      /** 界面层级管理器 */
      _export("LayerManager", LayerManager = class LayerManager {
        initScreenAdapter() {
          var drs = view.getDesignResolutionSize();
          var ws = screen.windowSize;
          this.windowAspectRatio = ws.width / ws.height;
          this.designAspectRatio = drs.width / drs.height;
          var finalW = 0;
          var finalH = 0;

          if (this.windowAspectRatio > this.designAspectRatio) {
            finalH = drs.height;
            finalW = finalH * ws.width / ws.height;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).log.logView("适配屏幕高度", "【横屏】");
          } else {
            finalW = drs.width;
            finalH = finalW * ws.height / ws.width;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).log.logView("适配屏幕宽度", "【竖屏】");
          }

          view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
        }
        /**
         * 构造函数
         * @param root  界面根节点
         */


        constructor(root) {
          /** 界面根节点 */
          this.root = void 0;

          /** 界面摄像机 */
          this.camera = void 0;

          /** 游戏界面特效层 */
          this.game = void 0;

          /** 新手引导层 */
          this.guide = void 0;

          /** 窗口宽高比例 */
          this.windowAspectRatio = 0;

          /** 设计宽高比例 */
          this.designAspectRatio = 0;

          /** 界面层 */
          this.ui = void 0;

          /** 弹窗层 */
          this.popup = void 0;

          /** 只能弹出一个的弹窗 */
          this.dialog = void 0;

          /** 游戏系统提示弹窗  */
          this.system = void 0;

          /** 消息提示控制器，请使用show方法来显示 */
          this.notify = void 0;

          /** UI配置 */
          this.configs = {};
          this.root = root;
          this.initScreenAdapter();
          this.camera = this.root.getComponentInChildren(Camera);
          this.game = this.create_node(LayerType.Game);
          this.ui = new (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
            error: Error()
          }), LayerUI) : LayerUI)(LayerType.UI);
          this.popup = new (_crd && LayerPopUp === void 0 ? (_reportPossibleCrUseOfLayerPopUp({
            error: Error()
          }), LayerPopUp) : LayerPopUp)(LayerType.PopUp);
          this.dialog = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)(LayerType.Dialog);
          this.system = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)(LayerType.System);
          this.notify = new (_crd && LayerNotify === void 0 ? (_reportPossibleCrUseOfLayerNotify({
            error: Error()
          }), LayerNotify) : LayerNotify)(LayerType.Notify);
          this.guide = this.create_node(LayerType.Guide);
          root.addChild(this.game);
          root.addChild(this.ui);
          root.addChild(this.popup);
          root.addChild(this.dialog);
          root.addChild(this.system);
          root.addChild(this.notify);
          root.addChild(this.guide);
        }
        /**
         * 初始化所有UI的配置对象
         * @param configs 配置对象
         */


        init(configs) {
          this.configs = configs;
        }
        /**
         * 设置窗口打开失败回调
         * @param callback  回调方法
         */


        setOpenFailure(callback) {
          this.ui.onOpenFailure = this.popup.onOpenFailure = this.dialog.onOpenFailure = this.system.onOpenFailure = callback;
        }
        /**
         * 渐隐飘过提示
         * @param content 文本表示
         * @param useI18n 是否使用多语言
         * @example 
         * oops.gui.toast("提示内容");
         */


        toast(content, useI18n) {
          if (useI18n === void 0) {
            useI18n = false;
          }

          this.notify.toast(content, useI18n);
        }
        /** 打开等待提示 */


        waitOpen() {
          this.notify.waitOpen();
        }
        /** 关闭等待提示 */


        waitClose() {
          this.notify.waitClose();
        }
        /**
         * 设置界面配置
         * @param uiId   要设置的界面id
         * @param config 要设置的配置
         */


        setConfig(uiId, config) {
          this.configs[uiId] = config;
        }
        /**
         * 同步打开一个窗口
         * @param uiId          窗口唯一编号
         * @param uiArgs        窗口参数
         * @param callbacks     回调对象
         * @example
        var uic: UICallbacks = {
            onAdded: (node: Node, params: any) => {
                var comp = node.getComponent(LoadingViewComp) as ecs.Comp;
            }
            onRemoved:(node: Node | null, params: any) => {
                        
            }
        };
        oops.gui.open(UIID.Loading, null, uic);
         */


        open(uiId, uiArgs, callbacks) {
          if (uiArgs === void 0) {
            uiArgs = null;
          }

          var config = this.configs[uiId];

          if (config == null) {
            warn("\u6253\u5F00\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
          }

          switch (config.layer) {
            case LayerType.UI:
              this.ui.add(config, uiArgs, callbacks);
              break;

            case LayerType.PopUp:
              this.popup.add(config, uiArgs, callbacks);
              break;

            case LayerType.Dialog:
              this.dialog.add(config, uiArgs, callbacks);
              break;

            case LayerType.System:
              this.system.add(config, uiArgs, callbacks);
              break;
          }
        }
        /**
         * 异步打开一个窗口
         * @param uiId          窗口唯一编号
         * @param uiArgs        窗口参数
         * @example 
         * var node = await oops.gui.openAsync(UIID.Loading);
         */


        openAsync(uiId, uiArgs) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (uiArgs === void 0) {
              uiArgs = null;
            }

            return new Promise((resolve, reject) => {
              var callbacks = {
                onAdded: (node, params) => {
                  resolve(node);
                },
                onLoadFailure: () => {
                  resolve(null);
                }
              };

              _this.open(uiId, uiArgs, callbacks);
            });
          })();
        }
        /**
         * 场景替换
         * @param removeUiId  移除场景编号
         * @param openUiId    新打开场景编号
         * @param uiArgs      新打开场景参数
         */


        replace(removeUiId, openUiId, uiArgs) {
          if (uiArgs === void 0) {
            uiArgs = null;
          }

          var callbacks = {
            onAdded: (node, params) => {
              this.remove(removeUiId);
            }
          };
          this.open(openUiId, uiArgs, callbacks);
        }
        /**
         * 异步场景替换
         * @param removeUiId  移除场景编号
         * @param openUiId    新打开场景编号
         * @param uiArgs      新打开场景参数
         */


        replaceAsync(removeUiId, openUiId, uiArgs) {
          var _this2 = this;

          if (uiArgs === void 0) {
            uiArgs = null;
          }

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            var node = yield _this2.openAsync(openUiId, uiArgs);

            if (node) {
              _this2.remove(removeUiId);

              resolve(node);
            } else {
              resolve(null);
            }
          }));
        }
        /**
         * 缓存中是否存在指定标识的窗口
         * @param uiId 窗口唯一标识
         * @example
         * oops.gui.has(UIID.Loading);
         */


        has(uiId) {
          var config = this.configs[uiId];

          if (config == null) {
            warn("\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u914D\u7F6E\u4E0D\u5B58\u5728\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return false;
          }

          var result = false;

          switch (config.layer) {
            case LayerType.UI:
              result = this.ui.has(config.prefab);
              break;

            case LayerType.PopUp:
              result = this.popup.has(config.prefab);
              break;

            case LayerType.Dialog:
              result = this.dialog.has(config.prefab);
              break;

            case LayerType.System:
              result = this.system.has(config.prefab);
              break;
          }

          return result;
        }
        /**
         * 缓存中是否存在指定标识的窗口
         * @param uiId 窗口唯一标识
         * @example
         * oops.gui.has(UIID.Loading);
         */


        get(uiId) {
          var config = this.configs[uiId];

          if (config == null) {
            warn("\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u914D\u7F6E\u4E0D\u5B58\u5728\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return null;
          }

          var result = null;

          switch (config.layer) {
            case LayerType.UI:
              result = this.ui.get(config.prefab);
              break;

            case LayerType.PopUp:
              result = this.popup.get(config.prefab);
              break;

            case LayerType.Dialog:
              result = this.dialog.get(config.prefab);
              break;

            case LayerType.System:
              result = this.system.get(config.prefab);
              break;
          }

          return result;
        }
        /**
         * 移除指定标识的窗口
         * @param uiId         窗口唯一标识
         * @param isDestroy    移除后是否释放
         * @example
         * oops.gui.remove(UIID.Loading);
         */


        remove(uiId, isDestroy) {
          var config = this.configs[uiId];

          if (config == null) {
            warn("\u5220\u9664\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
          }

          switch (config.layer) {
            case LayerType.UI:
              this.ui.remove(config.prefab, isDestroy);
              break;

            case LayerType.PopUp:
              this.popup.remove(config.prefab, isDestroy);
              break;

            case LayerType.Dialog:
              this.dialog.remove(config.prefab, isDestroy);
              break;

            case LayerType.System:
              this.system.remove(config.prefab, isDestroy);
              break;
          }
        }
        /**
         * 删除一个通过this框架添加进来的节点
         * @param node          窗口节点
         * @param isDestroy     移除后是否释放资源
         * @example
         * oops.gui.removeByNode(cc.Node);
         */


        removeByNode(node, isDestroy) {
          if (node instanceof Node) {
            var comp = node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);

            if (comp && comp.vp) {
              // 释放显示的界面
              if (node.parent) {
                node.parent.remove(comp.vp.config.prefab, isDestroy);
              } // 释放缓存中的界面
              else if (isDestroy) {
                switch (comp.vp.config.layer) {
                  case LayerType.UI:
                    // @ts-ignore 注：不对外使用
                    this.ui.removeCache(comp.vp.config.prefab);
                    break;

                  case LayerType.PopUp:
                    // @ts-ignore 注：不对外使用
                    this.popup.removeCache(comp.vp.config.prefab);
                    break;

                  case LayerType.Dialog:
                    // @ts-ignore 注：不对外使用
                    this.dialog.removeCache(comp.vp.config.prefab);
                    break;

                  case LayerType.System:
                    // @ts-ignore 注：不对外使用
                    this.system.removeCache(comp.vp.config.prefab);
                    break;
                }
              }
            } else {
              warn("\u5F53\u524D\u5220\u9664\u7684node\u4E0D\u662F\u901A\u8FC7\u754C\u9762\u7BA1\u7406\u5668\u6DFB\u52A0\u5230\u821E\u53F0\u4E0A");
              node.destroy();
            }
          }
        }
        /**
         * 清除所有窗口
         * @param isDestroy 移除后是否释放
         * @example
         * oops.gui.clear();
         */


        clear(isDestroy) {
          if (isDestroy === void 0) {
            isDestroy = false;
          }

          this.ui.clear(isDestroy);
          this.popup.clear(isDestroy);
          this.dialog.clear(isDestroy);
          this.system.clear(isDestroy);
        }

        create_node(name) {
          var node = new Node(name);
          node.layer = Layers.Enum.UI_2D;
          var w = node.addComponent(Widget);
          w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
          w.left = w.right = w.top = w.bottom = 0;
          w.alignMode = 2;
          w.enabled = true;
          return node;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5616dff818b65dffaeadc44a79a54f7a39874fcd.js.map