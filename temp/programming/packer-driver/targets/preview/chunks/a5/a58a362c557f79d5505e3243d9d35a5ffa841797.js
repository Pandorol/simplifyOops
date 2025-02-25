System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Collection, _crd;

  _export("Collection", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1dcf5AtQQVK3KQ/2jHHD5gi", "Collection", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-07-22 15:54:51
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-22 14:47:59
       */

      /** 支持Map与Array功能的集合对象 */
      _export("Collection", Collection = class Collection extends Map {
        constructor() {
          super(...arguments);
          this._array = [];
        }

        /** 获取数组对象 */
        get array() {
          return this._array;
        }
        /**
         * 设置值
         * @param key       关键字
         * @param value     数据值
         */


        set(key, value) {
          if (this.has(key)) {
            var old = this.get(key);

            var index = this._array.indexOf(old);

            this._array[index] = value;
          } else {
            this._array.push(value);
          }

          return super.set(key, value);
        }
        /**
         * 删除值
         * @param key       关键字
         */


        delete(key) {
          var value = this.get(key);

          if (value) {
            var index = this._array.indexOf(value);

            if (index > -1) this._array.splice(index, 1);
            return super.delete(key);
          }

          return false;
        }

        clear() {
          this._array.splice(0, this._array.length);

          super.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a58a362c557f79d5505e3243d9d35a5ffa841797.js.map