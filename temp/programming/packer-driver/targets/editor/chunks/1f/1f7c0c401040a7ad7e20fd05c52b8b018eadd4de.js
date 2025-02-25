System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Layers, Node, ViewUtil, LayerUI, LayerPopUp, _crd, Mask;

  function _reportPossibleCrUseOfViewUtil(extras) {
    _reporterNs.report("ViewUtil", "../../utils/ViewUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  _export("LayerPopUp", void 0);

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
    }, function (_unresolved_2) {
      ViewUtil = _unresolved_2.ViewUtil;
    }, function (_unresolved_3) {
      LayerUI = _unresolved_3.LayerUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf144gCpEBKOaCwmuca23b+", "LayerPopup", undefined); //cpall


      __checkObsolete__(['BlockInputEvents', 'EventTouch', 'Layers', 'Node']);

      Mask = 'common/prefab/mask';
      /* 弹窗层，允许同时弹出多个窗口 */

      _export("LayerPopUp", LayerPopUp = class LayerPopUp extends (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
        error: Error()
      }), LayerUI) : LayerUI) {
        constructor(name) {
          super(name);

          /** 触摸事件阻挡 */
          this.black = void 0;

          /** 半透明遮罩资源 */
          this.mask = void 0;
          this.init();
        }

        init() {
          this.layer = Layers.Enum.UI_2D;
          this.black = this.addComponent(BlockInputEvents);
          this.black.enabled = false;
        }

        async showUi(vp) {
          const r = await super.showUi(vp);

          if (r) {
            // 界面加载完成显示时，启动触摸非窗口区域关闭
            this.openVacancyRemove(vp.config); // 界面加载完成显示时，层级事件阻挡

            this.black.enabled = true;
          }

          return r;
        }

        onCloseWindow(vp) {
          super.onCloseWindow(vp); // 界面关闭后，关闭触摸事件阻挡、关闭触摸非窗口区域关闭、关闭遮罩

          this.setBlackDisable();
        }
        /** 设置触摸事件阻挡 */


        setBlackDisable() {
          // 所有弹窗关闭后，关闭事件阻挡功能
          if (this.ui_nodes.size == 0) {
            this.black.enabled = false;
            this.closeVacancyRemove();
            this.closeMask();
          }
        }
        /** 关闭遮罩 */


        closeMask() {
          if (this.mask == null) return;
          let flag = true;

          for (let value of this.ui_nodes.values()) {
            if (value.config.mask) {
              flag = false;
              break;
            }
          }

          if (flag) {
            this.mask.parent = null;
          }
        }
        /** 启动触摸非窗口区域关闭 */


        openVacancyRemove(config) {
          if (!this.hasEventListener(Node.EventType.TOUCH_END, this.onTouchEnd, this)) {
            this.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          } // 背景半透明遮罩


          if (this.mask == null) {
            this.mask = (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
              error: Error()
            }), ViewUtil) : ViewUtil).createPrefabNode(Mask);
          }

          if (config.mask) {
            this.mask.parent = this;
            this.mask.setSiblingIndex(0);
          }
        }
        /** 关闭触摸非窗口区域关闭 */


        closeVacancyRemove() {
          let flag = true;

          for (let value of this.ui_nodes.values()) {
            if (value.config.vacancy) {
              flag = false;
              break;
            }
          }

          if (flag && this.hasEventListener(Node.EventType.TOUCH_END, this.onTouchEnd, this)) {
            this.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          }
        }

        onTouchEnd(event) {
          if (event.target === this) {
            this.ui_nodes.forEach(vp => {
              // 关闭已显示的界面
              if (vp.valid && vp.config.vacancy) {
                this.remove(vp.config.prefab, vp.config.destroy);
              }
            });
          }
        }

        clear(isDestroy) {
          super.clear(isDestroy);
          this.black.enabled = false;
          this.closeVacancyRemove();
          this.closeMask();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f7c0c401040a7ad7e20fd05c52b8b018eadd4de.js.map