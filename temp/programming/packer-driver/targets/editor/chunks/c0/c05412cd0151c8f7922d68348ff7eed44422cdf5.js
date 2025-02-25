System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, VMParent, _dec, _class, _class2, _crd, ccclass, property, CCVMParentComp;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVMParent(extras) {
    _reporterNs.report("VMParent", "../../libs/model-view/VMParent", _context.meta, extras);
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
      VMParent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5908aTmM1lItpXgo7ROpQeQ", "CCVMParentComp", undefined); //cpall


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 
       * 支持 MVVM 功能的游戏显示对象组件
       * 
       * 使用方法：
       * 1. 对象拥有 cc.Component 组件功能与 ecs.Comp 组件功能
       * 2. 对象自带全局事件监听、释放、发送全局消息功能
       * 3. 对象管理的所有节点摊平，直接通过节点名获取cc.Node对象（节点名不能有重名）
       * 4. 对象支持 VMParent 所有功能
       * 
       * 应用场景
       * 1. 网络游戏，优先有数据对象，然后创建视图对象，当释放视图组件时，部分场景不希望释放数据对象
       * 
       * @example
      @ccclass('LoadingViewComp')
      @ecs.register('LoadingView', false)
      export class LoadingViewComp extends CCVMParentComp {
          // VM 组件绑定数据
          data: any = {
              // 加载资源当前进度
              finished: 0,
              // 加载资源最大进度
              total: 0,
              // 加载资源进度比例值
              progress: "0",
              // 加载流程中提示文本
              prompt: ""
          };
      
          private progress: number = 0;
      
          reset(): void {
            
          }
      }
       */

      _export("CCVMParentComp", CCVMParentComp = (_dec = ccclass('CCVMParentComp'), _dec(_class = (_class2 = class CCVMParentComp extends (_crd && VMParent === void 0 ? (_reportPossibleCrUseOfVMParent({
        error: Error()
      }), VMParent) : VMParent) {
        constructor(...args) {
          super(...args);
          this.canRecycle = void 0;
          this.ent = void 0;
        }

      }, _class2.tid = -1, _class2.compName = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c05412cd0151c8f7922d68348ff7eed44422cdf5.js.map