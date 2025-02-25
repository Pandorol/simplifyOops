System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, Vec3, oops, UIID, TipsManager, _crd, tips;

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "db://assets/core/gui/layer/Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "db://assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../ui/UIConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9748eriEcJOp6OSdnZ/qhs5", "TipsManager", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2022-08-05 10:13:47
       */


      __checkObsolete__(['Node', 'tween', 'Vec3']);

      /** 提示窗口管理 */
      TipsManager = class TipsManager {
        test(callback) {
          var operate = {
            title: 'common_prompt_title_sys',
            content: "common_prompt_content",
            okWord: 'common_prompt_ok',
            cancelWord: 'common_prompt_cancal',
            okFunc: () => {
              console.log("okFunc");
            },
            cancelFunc: () => {
              console.log("cancelFunc");
            },
            needCancel: true
          };
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Confirm, operate, this.getPopCommonEffect());
        }

        alert(content, cb, title, okWord) {
          var operate = {
            title: title ? title : 'common_prompt_title_sys',
            content: content,
            okWord: okWord ? okWord : 'common_prompt_ok',
            okFunc: () => {
              cb && cb();
            },
            needCancel: false
          };
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Confirm, operate, tips.getPopCommonEffect());
        }

        confirm(content, cb, okWord) {
          if (okWord === void 0) {
            okWord = "common_prompt_ok";
          }

          var operate = {
            title: 'common_prompt_title_sys',
            content: content,
            okWord: okWord,
            cancelWord: 'common_prompt_cancal',
            okFunc: () => {
              cb && cb();
            },
            cancelFunc: () => {},
            needCancel: true
          };
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Confirm, operate, tips.getPopCommonEffect());
        }
        /** 弹窗动画 */


        getPopCommonEffect(callbacks) {
          var newCallbacks = {
            // 节点添加动画
            onAdded: (node, params) => {
              node.setScale(0.1, 0.1, 0.1);
              tween(node).to(0.2, {
                scale: new Vec3(1, 1, 1)
              }).start();
            },
            // 节点删除动画
            onBeforeRemove: (node, next) => {
              tween(node).to(0.2, {
                scale: new Vec3(0.1, 0.1, 0.1)
              }).call((target, data) => {
                next();
              }).start();
            }
          };

          if (callbacks) {
            if (callbacks && callbacks.onAdded) {
              var onAdded = callbacks.onAdded; // @ts-ignore

              callbacks.onAdded = (node, params) => {
                onAdded(node, params); // @ts-ignore

                newCallbacks.onAdded(node, params);
              };
            }

            if (callbacks && callbacks.onBeforeRemove) {
              var onBeforeRemove = callbacks.onBeforeRemove;

              callbacks.onBeforeRemove = (node, params) => {
                onBeforeRemove(node, params); // @ts-ignore

                newCallbacks.onBeforeRemove(node, params);
              };
            }

            return callbacks;
          }

          return newCallbacks;
        }

      };

      _export("tips", tips = new TipsManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=659ec38c0284272233f854accb017c938ffc693a.js.map