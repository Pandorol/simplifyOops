System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Node, Prefab, Widget, oops, ViewParams, DelegateComponent, LayerUI, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./LayerManager", _context.meta, extras);
  }

  _export("LayerUI", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      ViewParams = _unresolved_3.ViewParams;
    }, function (_unresolved_4) {
      DelegateComponent = _unresolved_4.DelegateComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4dc3KuGX5O15Mc1KZBhTTf", "LayerUI", undefined); //cpall


      __checkObsolete__(['instantiate', 'Node', 'Prefab', 'Widget']);

      /** 界面层对象 */
      _export("LayerUI", LayerUI = class LayerUI extends Node {
        /**
         * UI基础层，允许添加多个预制件节点
         * @param name 该层名
         */
        constructor(name) {
          super(name);

          /** 全局窗口打开失败 */
          this.onOpenFailure = null;

          /** 显示界面节点集合 */
          this.ui_nodes = new Map();

          /** 被移除的界面缓存数据 */
          this.ui_cache = new Map();
          var widget = this.addComponent(Widget);
          widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
          widget.left = widget.right = widget.top = widget.bottom = 0;
          widget.alignMode = 2;
          widget.enabled = true;
        }
        /**
         * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点
         * @param config     界面配置数据
         * @param params     自定义参数
         * @param callbacks  回调函数对象，可选
         * @returns ture为成功,false为失败
         */


        add(config, params, callbacks) {
          if (this.ui_nodes.has(config.prefab)) {
            console.warn("\u8DEF\u5F84\u4E3A\u3010" + config.prefab + "\u3011\u7684\u9884\u5236\u91CD\u590D\u52A0\u8F7D");
            return;
          } // 检查缓存中是否存界面


          var vp = this.ui_cache.get(config.prefab);

          if (vp == null) {
            vp = new (_crd && ViewParams === void 0 ? (_reportPossibleCrUseOfViewParams({
              error: Error()
            }), ViewParams) : ViewParams)();
            vp.config = config;
          }

          this.ui_nodes.set(config.prefab, vp);
          vp.params = params != null ? params : {};
          vp.callbacks = callbacks != null ? callbacks : {};
          vp.valid = true;
          this.load(vp, config.bundle);
        }
        /**
         * 加载界面资源
         * @param vp         显示参数
         * @param bundle     远程资源包名，如果为空就是默认本地资源包
         */


        load(vp, bundle) {
          var _this = this;

          return _asyncToGenerator(function* () {
            // 加载界面资源超时提示
            var timerId = setTimeout(_this.onLoadingTimeoutGui, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).config.game.loadingTimeoutGui);

            if (vp && vp.node) {
              yield _this.showUi(vp);
            } else {
              // 优先加载配置的指定资源包中资源，如果没配置则加载默认资源包资源
              bundle = bundle || (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.defaultBundleName;
              var res = yield (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.loadAsync(bundle, vp.config.prefab, Prefab);

              if (res) {
                var ui = instantiate(res);
                vp.node = ui; // 窗口事件委托

                var dc = ui.addComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                  error: Error()
                }), DelegateComponent) : DelegateComponent);
                dc.vp = vp;
                dc.onCloseWindow = _this.onCloseWindow.bind(_this); // 显示界面

                yield _this.showUi(vp);
              } else {
                console.warn("\u8DEF\u5F84\u4E3A\u3010" + vp.config.prefab + "\u3011\u7684\u9884\u5236\u52A0\u8F7D\u5931\u8D25");

                _this.failure(vp);
              }
            } // 关闭界面资源超时提示


            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.waitClose();
            clearTimeout(timerId);
          })();
        }
        /** 加载超时事件*/


        onLoadingTimeoutGui() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.waitOpen();
        }
        /** 窗口关闭事件 */


        onCloseWindow(vp) {
          this.ui_nodes.delete(vp.config.prefab);
        }
        /**
         * 创建界面节点
         * @param vp  视图参数
         */


        showUi(vp) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // 触发窗口添加事件
            var comp = vp.node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);
            var r = yield comp.add();

            if (r) {
              vp.node.parent = _this2; // 标记界面为使用状态

              vp.valid = true;
            } else {
              console.warn("\u8DEF\u5F84\u4E3A\u3010" + vp.config.prefab + "\u3011\u7684\u81EA\u5B9A\u4E49\u9884\u5904\u7406\u903B\u8F91\u5F02\u5E38.\u68C0\u67E5\u9884\u5236\u4E0A\u7ED1\u5B9A\u7684\u7EC4\u4EF6\u4E2D onAdded \u65B9\u6CD5,\u8FD4\u56DEtrue\u624D\u80FD\u6B63\u786E\u5B8C\u6210\u7A97\u53E3\u663E\u793A\u6D41\u7A0B");

              _this2.failure(vp);
            }

            return r;
          })();
        }
        /** 打开窗口失败逻辑 */


        failure(vp) {
          this.onCloseWindow(vp);
          vp.callbacks && vp.callbacks.onLoadFailure && vp.callbacks.onLoadFailure();
          this.onOpenFailure && this.onOpenFailure();
        }
        /**
         * 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除
         * @param prefabPath   预制路径
         * @param isDestroy    移除后是否释放
         */


        remove(prefabPath, isDestroy) {
          var release = undefined;
          if (isDestroy !== undefined) release = isDestroy; // 界面移出舞台

          var vp = this.ui_nodes.get(prefabPath);

          if (vp) {
            // 优先使用参数中控制的释放条件，如果未传递参数则用配置中的释放条件，默认不缓存关闭的界面
            if (release === undefined) {
              release = vp.config.destroy !== undefined ? vp.config.destroy : true;
            } // 不释放界面，缓存起来待下次使用


            if (release === false) {
              this.ui_cache.set(vp.config.prefab, vp);
            }

            var childNode = vp.node;
            var comp = childNode.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);
            comp.remove(release);
          } // 验证是否删除后台缓存界面


          if (release === true) this.removeCache(prefabPath);
        }
        /** 删除缓存的界面，当缓存界面被移除舞台时，可通过此方法删除缓存界面 */


        removeCache(prefabPath) {
          var vp = this.ui_cache.get(prefabPath);

          if (vp) {
            this.onCloseWindow(vp);
            this.ui_cache.delete(prefabPath);
            var childNode = vp.node;
            childNode.destroy();
          }
        }
        /**
         * 根据预制路径获取已打开界面的节点对象
         * @param prefabPath  预制路径
         */


        get(prefabPath) {
          var vp = this.ui_nodes.get(prefabPath);
          if (vp) return vp.node;
          return null;
        }
        /**
         * 判断当前层是否包含 uuid或预制件路径对应的Node节点
         * @param prefabPath 预制件路径或者UUID
         */


        has(prefabPath) {
          return this.ui_nodes.has(prefabPath);
        }
        /**
         * 清除所有节点，队列当中的也删除
         * @param isDestroy  移除后是否释放
         */


        clear(isDestroy) {
          // 清除所有显示的界面
          this.ui_nodes.forEach((value, key) => {
            this.remove(value.config.prefab, isDestroy);
            value.valid = false;
          });
          this.ui_nodes.clear(); // 清除缓存中的界面

          if (isDestroy) {
            this.ui_cache.forEach((value, prefabPath) => {
              this.removeCache(prefabPath);
            });
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01f219437c48cad1385766f5a34a89ebbf2cb61d.js.map