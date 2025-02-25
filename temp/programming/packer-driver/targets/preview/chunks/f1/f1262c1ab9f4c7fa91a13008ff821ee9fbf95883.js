System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Layers, Node, Widget, instantiate, ViewUtil, Notify, LayerNotify, _crd, ToastPrefabPath, WaitPrefabPath;

  function _reportPossibleCrUseOfViewUtil(extras) {
    _reporterNs.report("ViewUtil", "../../utils/ViewUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotify(extras) {
    _reporterNs.report("Notify", "../prompt/Notify", _context.meta, extras);
  }

  _export("LayerNotify", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Widget = _cc.Widget;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ViewUtil = _unresolved_2.ViewUtil;
    }, function (_unresolved_3) {
      Notify = _unresolved_3.Notify;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f74d0jh9DZAColymUTZOf1I", "LayerNotify", undefined); //cpall


      __checkObsolete__(['BlockInputEvents', 'Layers', 'Node', 'Widget', 'instantiate']);

      ToastPrefabPath = 'common/prefab/notify';
      WaitPrefabPath = 'common/prefab/wait';
      /*
       * 滚动消息提示层
       */

      _export("LayerNotify", LayerNotify = class LayerNotify extends Node {
        constructor(name) {
          super(name);
          this.black = void 0;

          /** 等待提示资源 */
          this.wait = null;

          /** 自定义弹出提示资源 */
          this.notify = null;

          /** 自定义弹出提示内容资源 */
          this.notifyItem = null;
          var widget = this.addComponent(Widget);
          widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
          widget.left = widget.right = widget.top = widget.bottom = 0;
          widget.alignMode = 2;
          widget.enabled = true;
          this.init();
        }

        init() {
          this.layer = Layers.Enum.UI_2D;
          this.black = this.addComponent(BlockInputEvents);
          this.black.enabled = false;
        }
        /** 打开等待提示 */


        waitOpen() {
          if (this.wait == null) this.wait = (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
            error: Error()
          }), ViewUtil) : ViewUtil).createPrefabNode(WaitPrefabPath);

          if (this.wait.parent == null) {
            this.wait.parent = this;
            this.black.enabled = true;
          }
        }
        /** 关闭等待提示 */


        waitClose() {
          if (this.wait && this.wait.parent) {
            this.wait.parent = null;
            this.black.enabled = false;
          }
        }
        /**
         * 渐隐飘过提示
         * @param content 文本表示
         * @param useI18n 是否使用多语言
         */


        toast(content, useI18n) {
          if (this.notify == null) {
            this.notify = (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
              error: Error()
            }), ViewUtil) : ViewUtil).createPrefabNode(ToastPrefabPath);
            this.notifyItem = this.notify.children[0];
            this.notifyItem.parent = null;
          }

          this.notify.parent = this;
          var childNode = instantiate(this.notifyItem);
          var prompt = childNode.getChildByName("prompt");
          var toastCom = prompt.getComponent(_crd && Notify === void 0 ? (_reportPossibleCrUseOfNotify({
            error: Error()
          }), Notify) : Notify);
          childNode.parent = this.notify;

          toastCom.onComplete = () => {
            if (this.notify.children.length == 0) {
              this.notify.parent = null;
            }
          };

          toastCom.toast(content, useI18n); // 超过3个提示，就施放第一个提示

          if (this.notify.children.length > 3) {
            this.notify.children[0].destroy();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1262c1ab9f4c7fa91a13008ff821ee9fbf95883.js.map