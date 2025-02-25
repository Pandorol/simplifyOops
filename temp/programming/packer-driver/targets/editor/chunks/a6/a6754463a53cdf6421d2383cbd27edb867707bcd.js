System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GameComponent, VM, _dec, _dec2, _class, _crd, ccclass, help, executionOrder, VMParent;

  function _reportPossibleCrUseOfGameComponent(extras) {
    _reporterNs.report("GameComponent", "../../module/common/GameComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVM(extras) {
    _reporterNs.report("VM", "./ViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GameComponent = _unresolved_2.GameComponent;
    }, function (_unresolved_3) {
      VM = _unresolved_3.VM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15ccciO+ZRH476sPKD/LvB7", "VMParent", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        help,
        executionOrder
      } = _decorator);
      /**
       * 提供VM环境，控制旗下所有VM节点
       * 一般用于 非全局的 VM绑定,VM 环境与 组件紧密相连
       * （Prefab 模式绑定）
       * VMParent 必须必其他组件优先执行
       * v0.1 修复bug ，现在可以支持 Parent 嵌套 （但是注意性能问题，不要频繁嵌套）
       */

      _export("default", VMParent = (_dec = executionOrder(-1), _dec2 = help('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037729&doc_id=2873565'), ccclass(_class = _dec(_class = _dec2(_class = class VMParent extends (_crd && GameComponent === void 0 ? (_reportPossibleCrUseOfGameComponent({
        error: Error()
      }), GameComponent) : GameComponent) {
        constructor(...args) {
          super(...args);

          /** 绑定的标签，可以通过这个tag 获取 当前的 vm 实例 */
          this.tag = '_temp';

          /** 需要绑定的私有数据 */
          this.data = {};

          /**VM 管理 */
          this.VM = _crd && VM === void 0 ? (_reportPossibleCrUseOfVM({
            error: Error()
          }), VM) : VM;
        }

        /**
         * [注意]不能直接覆盖此方法，如果需要覆盖。
         * 只能在该方法内部调用父类的实现 
         *   ```ts
         *       onLoad(){
         *           super.onLoad();
         *       }
         *   ``` 
         * 
         */
        onLoad() {
          if (this.data == null) return;
          this.tag = '_temp' + '<' + this.node.uuid.replace('.', '') + '>';
          (_crd && VM === void 0 ? (_reportPossibleCrUseOfVM({
            error: Error()
          }), VM) : VM).add(this.data, this.tag); // log(VM['_mvs'],this.tag)
          //搜寻所有节点：找到 watch path

          let comps = this.getVMComponents(); // console.group();

          for (let i = 0; i < comps.length; i++) {
            const comp = comps[i];
            this.replaceVMPath(comp, this.tag);
          } // console.groupEnd()


          this.onBind();
        }
        /**在 onLoad 完成 和 start() 之前调用，你可以在这里进行初始化数据等操作 */


        onBind() {}
        /**在 onDestroy() 后调用,此时仍然可以获取绑定的 data 数据*/


        onUnBind() {}

        replaceVMPath(comp, tag) {
          // @ts-ignore
          let path = comp['watchPath']; // @ts-ignore

          if (comp['templateMode'] == true) {
            // @ts-ignore
            let pathArr = comp['watchPathArr'];

            if (pathArr) {
              for (let i = 0; i < pathArr.length; i++) {
                const path = pathArr[i];
                pathArr[i] = path.replace('*', tag);
              }
            }
          } else {
            // VMLabel
            // 遇到特殊 path 就优先替换路径
            if (path.split('.')[0] === '*') {
              // @ts-ignore
              comp['watchPath'] = path.replace('*', tag);
            }
          }
        }
        /** 未优化的遍历节点，获取VM 组件 */


        getVMComponents() {
          let comps = this.node.getComponentsInChildren('VMBase');
          let parents = this.node.getComponentsInChildren('VMParent').filter(v => v.uuid !== this.uuid); // 过滤掉自己
          //过滤掉不能赋值的parent

          let filters = [];
          parents.forEach(node => {
            filters = filters.concat(node.getComponentsInChildren('VMBase'));
          });
          comps = comps.filter(v => filters.indexOf(v) < 0);
          return comps;
        }
        /**
         * [注意]不能覆盖此方法，如果需要覆盖。
         * 需要在该方法内部调用父类的实现，再定义自己的方法
         * ```ts
         *   onDestroy(){
         *       super.onDestroy();
         *   }
         * ```
         */


        onDestroy() {
          this.onUnBind(); // 解除全部引用

          (_crd && VM === void 0 ? (_reportPossibleCrUseOfVM({
            error: Error()
          }), VM) : VM).remove(this.tag);
          this.data = null;
          super.onDestroy();
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6754463a53cdf6421d2383cbd27edb867707bcd.js.map