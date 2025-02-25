System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, StorageSecuritySimple, _crd;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStorageSecurity(extras) {
    _reporterNs.report("IStorageSecurity", "./StorageManager", _context.meta, extras);
  }

  _export("StorageSecuritySimple", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e32dWm6g1PZ5OJAp316fOS", "StorageSecuritySimple", undefined); //cpall


      /** 
       * 本地存储加密
       * 优点：
       * 1、代码体积小
       * 2、不依赖第三方库，使用这套方案可删除 
       *    StorageSecurityCrypto.ts
       *    EncryptUtil.ts
       *    package.json 中的crypto依赖减小包体
       * 
       * 缺点：
       * 1、加密强度小
       */
      _export("StorageSecuritySimple", StorageSecuritySimple = class StorageSecuritySimple {
        constructor() {
          this.secretkey = null;
          const key = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).config.game.localDataKey;
          const iv = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).config.game.localDataIv;
          this.secretkey = key + iv;
        }

        encrypt(str) {
          let er = '';

          for (let i = 0; i < str.length; i++) {
            er += String.fromCharCode(str.charCodeAt(i) ^ this.secretkey.charCodeAt(i % this.secretkey.length));
          }

          return er;
        }

        decrypt(str) {
          let dr = '';

          for (let i = 0; i < str.length; i++) {
            dr += String.fromCharCode(str.charCodeAt(i) ^ this.secretkey.charCodeAt(i % this.secretkey.length));
          }

          return dr;
        }

        encryptKey(str) {
          return this.encrypt(str);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01ba917dba825f4a5c6d319562ca1ca163c1180f.js.map