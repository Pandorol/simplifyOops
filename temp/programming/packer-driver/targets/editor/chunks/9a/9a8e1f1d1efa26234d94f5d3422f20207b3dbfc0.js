System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, oops, _dec, _class, _crd, ccclass, EventOnAdded, EventOnBeforeRemove, EventOnRemoved, DelegateComponent;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22780C0A4lFJ7LpakBrRovO", "DelegateComponent", undefined); //cpall


      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass
      } = _decorator);
      EventOnAdded = "onAdded";
      EventOnBeforeRemove = "onBeforeRemove";
      EventOnRemoved = "onRemoved";
      /** 窗口事件触发组件 */

      _export("DelegateComponent", DelegateComponent = (_dec = ccclass('DelegateComponent'), _dec(_class = class DelegateComponent extends Component {
        constructor(...args) {
          super(...args);

          /** 视图参数 */
          this.vp = null;

          /** 界面关闭回调 - 包括关闭动画播放完（辅助框架内存业务流程使用） */
          this.onCloseWindow = null;
        }

        /** 窗口添加 */
        add() {
          return new Promise(async (resolve, reject) => {
            // 触发窗口组件上添加到父节点后的事件
            for (let i = 0; i < this.node.components.length; i++) {
              const component = this.node.components[i];
              const func = component[EventOnAdded];

              if (func) {
                if ((await func.call(component, this.vp.params)) == false) {
                  resolve(false);
                  return;
                }
              }
            } // 触发外部窗口显示前的事件（辅助实现自定义动画逻辑）


            if (typeof this.vp.callbacks.onAdded === "function") {
              this.vp.callbacks.onAdded(this.node, this.vp.params);
            }

            resolve(true);
          });
        }
        /** 删除节点，该方法只能调用一次，将会触发onBeforeRemoved回调 */


        remove(isDestroy) {
          if (this.vp.valid) {
            // 触发窗口移除舞台之前事件
            this.applyComponentsFunction(this.node, EventOnBeforeRemove, this.vp.params); //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）

            if (typeof this.vp.callbacks.onBeforeRemove === "function") {
              this.vp.callbacks.onBeforeRemove(this.node, this.onBeforeRemoveNext.bind(this, isDestroy));
            } else {
              this.removed(this.vp, isDestroy);
            }
          }
        }
        /** 窗口关闭前动画处理完后的回调方法，主要用于释放资源 */


        onBeforeRemoveNext(isDestroy) {
          this.removed(this.vp, isDestroy);
        }
        /** 窗口组件中触发移除事件与释放窗口对象 */


        removed(vp, isDestroy) {
          vp.valid = false;

          if (vp.callbacks && typeof vp.callbacks.onRemoved === "function") {
            vp.callbacks.onRemoved(this.node, vp.params);
          } // 界面移除舞台事件


          this.onCloseWindow && this.onCloseWindow(vp);

          if (isDestroy) {
            // 释放界面显示对象
            this.node.destroy(); // 释放界面相关资源

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.release(vp.config.prefab); // oops.log.logView(`【界面管理】释放【${vp.config.prefab}】界面资源`);
          } else {
            this.node.removeFromParent();
          }
        }

        onDestroy() {
          // 触发窗口组件上窗口移除之后的事件
          this.applyComponentsFunction(this.node, EventOnRemoved, this.vp.params);
          this.vp = null;
        }

        applyComponentsFunction(node, funName, params) {
          for (let i = 0; i < node.components.length; i++) {
            const component = node.components[i];
            const func = component[funName];

            if (func) {
              func.call(component, params);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a8e1f1d1efa26234d94f5d3422f20207b3dbfc0.js.map