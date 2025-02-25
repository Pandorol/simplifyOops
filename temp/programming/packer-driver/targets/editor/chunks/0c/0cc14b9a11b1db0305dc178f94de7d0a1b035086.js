System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, List, _crd;

  _export("List", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4d36IVkDZEFYGJyOy6wiZw", "List", undefined);

      /** 列表 */
      _export("List", List = class List {
        constructor(only = true) {
          this.element = void 0;

          /** 是否保证元素的唯一性 */
          this.only = false;

          /** 元素数量(内部再增删时会修改这个参数，外部只做计算和绑定使用，切记不可做赋值操作) */
          this.count = 0;
          this.only = only;
          this.element = [];
        }
        /**
         * 添加到末尾(注意如果保证唯一性，那么重复时就直接返回)
         * @param value 
         */


        push(value) {
          if (this.only) {
            let index = this.element.indexOf(value);

            if (index >= 0) {
              return false;
            }
          }

          this.element.push(value);
          this.count = this.element.length;
          return true;
        }
        /**
         * 添加到列表头部(注意如果保证唯一性，那么重复时就直接返回)
         * @param value 
         * @returns 
         */


        unshift(value) {
          if (this.only) {
            let index = this.element.indexOf(value);

            if (index >= 0) {
              return false;
            }
          }

          this.element.unshift(value);
          this.count = this.element.length;
          return true;
        }
        /**
         * 获取并删除最后一个元素
         * @returns 
         */


        pop() {
          if (this.element.length > 0) {
            const result = this.element.pop();
            this.count = this.element.length;
            return result;
          }

          return null;
        }
        /**
         * 获取并删除第一个元素
         * @returns 
         */


        shift() {
          if (this.element.length > 0) {
            const result = this.element.shift();
            this.count = this.element.length;
            return result;
          }

          return null;
        }
        /**
         * 删除指定索引的元素
         * @param index 
         */


        removeAt(index) {
          if (index >= this.element.length) {
            throw new Error("删除索引超出范围！");
          }

          const result = this.element[index];
          this.element.splice(index, 1);
          this.count = this.element.length;
          return result;
        }
        /**
         * 删除元素
         * @param value 
         */


        remove(value) {
          let index = this.element.indexOf(value);

          if (index < 0) {
            throw new Error("要删除的内容不在列表中！" + value);
          }

          const result = this.element[index];
          this.element.splice(index, 1);
          this.count = this.element.length;
        }
        /** 移除所有元素 */


        clear() {
          this.count = 0;
          this.element.length = 0;
        }
        /**
         * 判断是否包含
         * @param value 
         * @returns 
         */


        has(value) {
          return this.find(value) >= 0;
        }
        /**
         * 查找元素下标
         * @param value 
         * @returns 
         */


        find(value) {
          return this.element.indexOf(value);
        }
        /**
         * 查找元素下标
         * @param predicate 
         * @returns 
         */


        findIndex(predicate) {
          let index = this.element.findIndex(predicate);
          return index;
        }
        /**
         * 获取指定元素
         * @param index 
         * @returns 
         */


        get(index) {
          if (index >= this.element.length) {
            throw new Error("超出索引范围:" + index + "/" + this.element.length);
          }

          return this.element[index];
        }
        /**
         * 源列表数据(注意不要直接进行增删操作，而是通过List.push....等接口进行操作)
         */


        get elements() {
          return this.element;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0cc14b9a11b1db0305dc178f94de7d0a1b035086.js.map