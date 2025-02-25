System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, log, _decorator, DEBUG, VM, VMEnv, _dec, _class, _crd, DEBUG_WATCH_PATH, ccclass, help, VMBase;

  function _reportPossibleCrUseOfVM(extras) {
    _reporterNs.report("VM", "./ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVMEnv(extras) {
    _reporterNs.report("VMEnv", "./VMEnv", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      log = _cc.log;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      VM = _unresolved_2.VM;
    }, function (_unresolved_3) {
      VMEnv = _unresolved_3.VMEnv;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f6f36IvUdPO7xynnVTPgzb", "VMBase", undefined);

      __checkObsolete__(['Component', 'log', '_decorator']);

      // 用来处理通知数据的层级
      // 控制旗下子节点的数据
      // 目前只是起到一个识别组件的作用，之后会抽象很多功能在这里面
      // player.equips.* 可以自动根据所在父对象的位置设置顺序
      DEBUG_WATCH_PATH = false;
      ({
        ccclass,
        help
      } = _decorator);
      /**
       * watchPath 的基础，只提供绑定功能 和 对应的数据更新函数
       */

      _export("VMBase", VMBase = (_dec = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037631&doc_id=2873565'), ccclass(_class = _dec(_class = class VMBase extends Component {
        constructor(...args) {
          super(...args);

          /**VM管理 */
          this.VM = _crd && VM === void 0 ? (_reportPossibleCrUseOfVM({
            error: Error()
          }), VM) : VM;

          /** watch 单路径  */
          this.watchPath = '';

          /** 是否启用模板多路径模式 */
          this.templateMode = false;

          /** watch 多路径 */
          this.watchPathArr = [];

          /** 储存模板多路径的值 */
          this.templateValueArr = [];
        }

        /**
         * 如果需要重写onLoad 方法，请根据顺序调用 super.onLoad()，执行默认方法
         */
        onLoad() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return; // 提前拆分、并且解析路径

          let paths = this.watchPath.split('.');

          for (let i = 1; i < paths.length; i++) {
            const p = paths[i]; // 如果发现了路径使用了 * ，则自动去自己的父节点查找自己所在 index 值

            if (p == '*') {
              let index = this.node.parent.children.findIndex(n => n === this.node);
              if (index <= 0) index = 0;
              paths[i] = index.toString();
              break;
            }
          } // 替换掉原路径


          this.watchPath = paths.join('.'); // 提前进行路径数组 的 解析

          let pathArr = this.watchPathArr;

          if (pathArr.length >= 1) {
            for (let i = 0; i < pathArr.length; i++) {
              const path = pathArr[i];
              let paths = path.split('.');

              for (let i = 1; i < paths.length; i++) {
                const p = paths[i];

                if (p == '*') {
                  let index = this.node.parent.children.findIndex(n => n === this.node);
                  if (index <= 0) index = 0;
                  paths[i] = index.toString();
                  break;
                }
              }

              this.watchPathArr[i] = paths.join('.');
            }
          } // 打印出所有绑定的路径，方便调试信息


          if (DEBUG_WATCH_PATH && DEBUG) {
            log('所有路径', this.watchPath ? [this.watchPath] : this.watchPathArr, '<<', this.node.parent.name + '.' + this.node.name);
          }

          if (this.watchPath == '' && this.watchPathArr.join('') == '') {
            log('可能未设置路径的节点:', this.node.parent.name + '.' + this.node.name);
          }
        }

        onEnable() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;

          if (this.templateMode) {
            this.setMultPathEvent(true);
          } else if (this.watchPath != '') {
            this.VM.bindPath(this.watchPath, this.onValueChanged, this);
          }

          this.onValueInit(); // 激活时,调用值初始化
        }

        onDisable() {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;

          if (this.templateMode) {
            this.setMultPathEvent(false);
          } else if (this.watchPath != '') {
            this.VM.unbindPath(this.watchPath, this.onValueChanged, this);
          }
        } // 多路径监听方式


        setMultPathEvent(enabled = true) {
          if ((_crd && VMEnv === void 0 ? (_reportPossibleCrUseOfVMEnv({
            error: Error()
          }), VMEnv) : VMEnv).editor) return;
          let arr = this.watchPathArr;

          for (let i = 0; i < arr.length; i++) {
            const path = arr[i];

            if (enabled) {
              this.VM.bindPath(path, this.onValueChanged, this);
            } else {
              this.VM.unbindPath(path, this.onValueChanged, this);
            }
          }
        }

        onValueInit() {// 虚方法
        }
        /**
         * 值变化事件
         * @param n       新值
         * @param o       旧值
         * @param pathArr 对象路径数组
         */


        onValueChanged(n, o, pathArr) {}

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c56c20381407728480021351e09e8d10b97a27a7.js.map