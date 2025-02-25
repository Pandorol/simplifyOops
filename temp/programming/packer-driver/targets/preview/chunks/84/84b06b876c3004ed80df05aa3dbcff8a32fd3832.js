System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, PREVIEW, StorageManager, _crd;

  _export("StorageManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "530900yO+VAiodALf0GRbXf", "StorageManager", undefined); //cpall


      __checkObsolete__(['sys']);

      /** 
       * 本地存储 
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037957&doc_id=2873565
       */
      _export("StorageManager", StorageManager = class StorageManager {
        constructor() {
          this.id = null;
          this.iss = null;
        }

        /** 数据加密开关 */
        get encrypted() {
          return !PREVIEW;
        }
        /** 本地存储数据加密方式初始化 */


        init(iis) {
          this.iss = iis;
        }
        /**
         * 设置用户唯一标识
         * @param id 
         */


        setUser(id) {
          this.id = id;
        }

        getUser() {
          return this.id;
        }
        /**
         * 存储本地数据
         * @param key 存储key
         * @param value 存储值
         * @returns 
         */


        set(key, value) {
          var keywords = this.getKey(key);

          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          if (this.encrypted) {
            keywords = this.iss.encryptKey(keywords);
          }

          if (null == value) {
            console.warn("存储的值为空，则直接移除该存储");
            this.remove(key);
            return;
          }

          if (typeof value === 'function') {
            console.error("储存的值不能为方法");
            return;
          }

          if (typeof value === 'object') {
            try {
              value = JSON.stringify(value);
            } catch (e) {
              console.error("\u89E3\u6790\u5931\u8D25\uFF0Cstr = " + value);
              return;
            }
          } else if (typeof value === 'number') {
            value = value + "";
          }

          if (this.encrypted) {
            value = this.iss.encrypt(value);
          }

          sys.localStorage.setItem(keywords, value);
        }
        /**
         * 获取指定关键字的数据
         * @param key          获取的关键字
         * @param defaultValue 获取的默认值
         * @returns 
         */


        get(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = "";
          }

          if (null == key) {
            console.error("存储的key不能为空");
            return null;
          }

          key = this.getKey(key);

          if (this.encrypted) {
            key = this.iss.encryptKey(key);
          }

          var str = sys.localStorage.getItem(key);

          if (null != str && '' !== str && this.encrypted) {
            str = this.iss.decrypt(str);
          }

          if (null === str) {
            return defaultValue;
          }

          return str;
        }
        /** 获取指定关键字的数值 */


        getNumber(key, defaultValue) {
          if (defaultValue === void 0) {
            defaultValue = 0;
          }

          var r = this.get(key);

          if (r == "0") {
            return Number(r);
          }

          return Number(r) || defaultValue;
        }
        /** 获取指定关键字的布尔值 */


        getBoolean(key) {
          var r = this.get(key);
          return r.toLowerCase() === 'true';
        }
        /** 获取指定关键字的JSON对象 */


        getJson(key, defaultValue) {
          var r = this.get(key);
          return r && JSON.parse(r) || defaultValue;
        }
        /**
         * 删除指定关键字的数据
         * @param key 需要移除的关键字
         * @returns 
         */


        remove(key) {
          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          var keywords = this.getKey(key);

          if (this.encrypted) {
            keywords = this.iss.encryptKey(keywords);
          }

          sys.localStorage.removeItem(keywords);
        }
        /** 清空整个本地存储 */


        clear() {
          sys.localStorage.clear();
        }
        /** 获取数据分组关键字 */


        getKey(key) {
          if (this.id == null || this.id == "") {
            return key;
          }

          return this.id + "_" + key;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84b06b876c3004ed80df05aa3dbcff8a32fd3832.js.map