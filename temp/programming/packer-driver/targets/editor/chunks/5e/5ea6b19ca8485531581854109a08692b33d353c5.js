System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, log, JsonOb, ViewModel, VMManager, _crd, VM_EMIT_HEAD, DEBUG_SHOW_PATH, VM;

  /** 通过 .  路径设置值 */
  function setValueFromPath(obj, path, value, tag = '') {
    let props = path.split('.');

    for (let i = 0; i < props.length; i++) {
      const propName = props[i];

      if (propName in obj === false) {
        console.error('[' + propName + '] not find in ' + tag + '.' + path);
        break;
      }

      if (i == props.length - 1) {
        obj[propName] = value;
      } else {
        obj = obj[propName];
      }
    }
  }
  /** 通过 . 路径 获取值 */


  function getValueFromPath(obj, path, def, tag = '') {
    let props = path.split('.');

    for (let i = 0; i < props.length; i++) {
      const propName = props[i];

      if (propName in obj === false) {
        console.error('[' + propName + '] not find in ' + tag + '.' + path);
        return def;
      }

      obj = obj[propName];
    }

    if (obj === null || typeof obj === "undefined") obj = def; //如果g == null 则返回一个默认值

    return obj;
  }
  /**
   * ModelViewer 类
   */


  function _reportPossibleCrUseOfJsonOb(extras) {
    _reporterNs.report("JsonOb", "./JsonOb", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      log = _cc.log;
    }, function (_unresolved_2) {
      JsonOb = _unresolved_2.JsonOb;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54f75k4X+RP0qaXOzrfZysL", "ViewModel", undefined);

      __checkObsolete__(['director', 'log']);

      VM_EMIT_HEAD = 'VC:';
      DEBUG_SHOW_PATH = false;
      ViewModel = class ViewModel {
        constructor(data, tag) {
          this.$data = void 0;
          // 索引值用的标签
          this._tag = null;

          /** 激活状态, 将会通过 director.emit 发送值变动的信号, 适合需要屏蔽的情况 */
          this.active = true;

          /** 是否激活根路径回调通知, 不激活的情况下 只能监听末端路径值来判断是否变化 */
          this.emitToRootPath = false;
          new (_crd && JsonOb === void 0 ? (_reportPossibleCrUseOfJsonOb({
            error: Error()
          }), JsonOb) : JsonOb)(data, this._callback.bind(this));
          this.$data = data;
          this._tag = tag;
        }

        // 回调函数 请注意 回调的 path 数组是 引用类型，禁止修改
        _callback(n, o, path) {
          if (this.active == true) {
            let name = VM_EMIT_HEAD + this._tag + '.' + path.join('.');
            if (DEBUG_SHOW_PATH) log('>>', n, o, path);
            director.emit(name, n, o, [this._tag].concat(path)); // 通知末端路径

            if (this.emitToRootPath) director.emit(VM_EMIT_HEAD + this._tag, n, o, path); // 通知主路径

            if (path.length >= 2) {
              for (let i = 0; i < path.length - 1; i++) {
                const e = path[i]; //log('中端路径');
              }
            }
          }
        } // 通过路径设置数据的方法


        setValue(path, value) {
          setValueFromPath(this.$data, path, value, this._tag);
        } // 获取路径的值


        getValue(path, def) {
          return getValueFromPath(this.$data, path, def, this._tag);
        }

      };
      /**
       * VM 对象管理器(工厂)
       */

      VMManager = class VMManager {
        constructor() {
          this._mvs = new Map();
          this.setObjValue = setValueFromPath;
          this.getObjValue = getValueFromPath;
        }

        /**
         * 绑定一个数据，并且可以由VM所管理（绑定的数据只能是值类型）
         * @param data 需要绑定的数据
         * @param tag 对应该数据的标签(用于识别为哪个VM，不允许重复)
         * @param activeRootObject 激活主路径通知，可能会有性能影响，一般不使用
         */
        add(data, tag = 'global', activeRootObject = false) {
          let vm = new ViewModel(data, tag);

          let has = this._mvs.get(tag);

          if (tag.includes('.')) {
            console.error('cant write . in tag:', tag);
            return;
          }

          if (has) {
            console.error('already set VM tag:' + tag);
            return;
          }

          vm.emitToRootPath = activeRootObject;

          this._mvs.set(tag, vm);
        }
        /**
         * 移除并且销毁 VM 对象
         * @param tag 
         */


        remove(tag) {
          this._mvs.delete(tag);
        }
        /**
         * 获取绑定的数据
         * @param tag 数据tag
         */


        get(tag) {
          let res = this._mvs.get(tag);

          return res;
        }
        /**
         * 通过全局路径,而不是 VM 对象来 设置值
         * @param path - 全局取值路径
         * @param value - 需要增加的值
         */


        addValue(path, value) {
          path = path.trim(); //防止空格,自动剔除

          let rs = path.split('.');

          if (rs.length < 2) {
            console.error('Cant find path:' + path);
          }

          ;
          let vm = this.get(rs[0]);

          if (!vm) {
            console.error('Cant Set VM:' + rs[0]);
            return;
          }

          ;
          let resPath = rs.slice(1).join('.');
          vm.setValue(resPath, vm.getValue(resPath) + value);
        }
        /**
         * 通过全局路径,而不是 VM 对象来 获取值
         * @param path - 全局取值路径
         * @param def - 如果取不到值的返回的默认值
         */


        getValue(path, def) {
          path = path.trim(); // 防止空格,自动剔除

          let rs = path.split('.');

          if (rs.length < 2) {
            console.error('Get Value Cant find path:' + path);
            return;
          }

          ;
          let vm = this.get(rs[0]);

          if (!vm) {
            console.error('Cant Get VM:' + rs[0]);
            return;
          }

          ;
          return vm.getValue(rs.slice(1).join('.'), def);
        }
        /**
         * 通过全局路径,而不是 VM 对象来 设置值
         * @param path - 全局取值路径
         * @param value - 需要设置的值
         */


        setValue(path, value) {
          path = path.trim(); // 防止空格,自动剔除

          let rs = path.split('.');

          if (rs.length < 2) {
            console.error('Set Value Cant find path:' + path);
            return;
          }

          ;
          let vm = this.get(rs[0]);

          if (!vm) {
            console.error('Cant Set VM:' + rs[0]);
            return;
          }

          ;
          vm.setValue(rs.slice(1).join('.'), value);
        }

        /** 等同于 director.on */
        bindPath(path, callback, target, useCapture) {
          path = path.trim(); // 防止空格,自动剔除

          if (path == '') {
            console.error(target.node.name, '节点绑定的路径为空');
            return;
          }

          if (path.split('.')[0] === '*') {
            console.error(path, '路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本');
            return;
          } // @ts-ignore


          director.on(VM_EMIT_HEAD + path, callback, target, useCapture);
        }
        /** 等同于 director.off */


        unbindPath(path, callback, target) {
          path = path.trim(); //防止空格,自动剔除

          if (path.split('.')[0] === '*') {
            console.error(path, '路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本');
            return;
          } // @ts-ignore


          director.off(VM_EMIT_HEAD + path, callback, target);
        }
        /** 冻结所有标签的 VM，视图将不会受到任何信息 */


        inactive() {
          this._mvs.forEach(mv => {
            mv.active = false;
          });
        }
        /** 激活所有标签的 VM*/


        active() {
          this._mvs.forEach(mv => {
            mv.active = false;
          });
        }

      }; //   整数、小数、时间、缩写

      /**
       *  VM管理对象,使用文档: 
       *  https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/ViewModelScript.md
       */

      _export("VM", VM = new VMManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ea6b19ca8485531581854109a08692b33d353c5.js.map