System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, GameManager, _crd;

  _export("GameManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73fa0CEfOhMdJUoZwoFIIZV", "GameManager", undefined); //cpall


      /** 游戏世界管理 */
      __checkObsolete__(['Node', 'director']);

      _export("GameManager", GameManager = class GameManager {
        constructor(root) {
          /** 界面根节点 */
          this.root = void 0;
          this.root = root;
        }
        /** 设置游戏动画速度 */


        setTimeScale(scale) {
          //@ts-ignore
          director.globalGameTimeScale = scale;
        }
        /** 获取游戏动画速度 */


        getTimeScale() {
          //@ts-ignore
          return director.globalGameTimeScale;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd8b99288e0f2384ca4aec3d71b519193d81c504.js.map