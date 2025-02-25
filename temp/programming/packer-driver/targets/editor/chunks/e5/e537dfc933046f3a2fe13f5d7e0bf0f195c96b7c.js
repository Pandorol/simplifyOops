System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventMessage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "beea7u9xnJD4rMj6ua/LTcF", "EventMessage", undefined); //cpall

      /**
       * 全局事件监听方法
       * @param event      事件名
       * @param args       事件参数
       */


      /** 框架内部全局事件  */
      _export("EventMessage", EventMessage = /*#__PURE__*/function (EventMessage) {
        EventMessage["GAME_SHOW"] = "GAME_ENTER";
        EventMessage["GAME_HIDE"] = "GAME_EXIT";
        EventMessage["GAME_RESIZE"] = "GAME_RESIZE";
        EventMessage["GAME_FULL_SCREEN"] = "GAME_FULL_SCREEN";
        EventMessage["GAME_ORIENTATION"] = "GAME_ORIENTATION";
        return EventMessage;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e537dfc933046f3a2fe13f5d7e0bf0f195c96b7c.js.map