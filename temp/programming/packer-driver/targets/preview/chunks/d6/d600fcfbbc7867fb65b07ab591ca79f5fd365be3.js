System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LayerType, _crd, UIID, UIConfigData;

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../core/gui/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../core/gui/layer/LayerManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LayerType = _unresolved_2.LayerType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7cc1c6mhI1JFbbSdiJ6Qark", "UIConfig", undefined);

      /** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
      _export("UIID", UIID = /*#__PURE__*/function (UIID) {
        UIID[UIID["Loading"] = 1] = "Loading";
        UIID[UIID["Alert"] = 2] = "Alert";
        UIID[UIID["Confirm"] = 3] = "Confirm";
        UIID[UIID["Login"] = 4] = "Login";
        return UIID;
      }({}));
      /** 打开界面方式的配置数据 */


      _export("UIConfigData", UIConfigData = {
        [UIID.Loading]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UI,
          prefab: "loading/prefab/loading",
          bundle: "resources"
        },
        [UIID.Alert]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "common/prefab/alert",
          mask: true
        },
        [UIID.Confirm]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "common/prefab/confirm",
          mask: true
        },
        [UIID.Login]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UI,
          prefab: "ui/uilogin/uiloginView"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d600fcfbbc7867fb65b07ab591ca79f5fd365be3.js.map