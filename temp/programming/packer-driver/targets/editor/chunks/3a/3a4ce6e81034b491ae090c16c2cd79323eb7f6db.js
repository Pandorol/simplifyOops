System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28ac0rWU79HGpJWrnyK01Gn", "GameEvent", undefined);

      /** 游戏事件 */
      _export("GameEvent", GameEvent = /*#__PURE__*/function (GameEvent) {
        GameEvent["GameServerConnected"] = "GameServerConnected";
        GameEvent["LoginSuccess"] = "LoginSuccess";
        return GameEvent;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a4ce6e81034b491ae090c16c2cd79323eb7f6db.js.map