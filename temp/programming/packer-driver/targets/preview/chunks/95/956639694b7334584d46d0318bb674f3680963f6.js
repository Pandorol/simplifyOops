System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECSGroup, ECSModel, _crd;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "./ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSEntity(extras) {
    _reporterNs.report("ECSEntity", "./ECSEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSGroup(extras) {
    _reporterNs.report("ECSGroup", "./ECSGroup", _context.meta, extras);
  }

  _export("ECSModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ECSGroup = _unresolved_2.ECSGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d60egM6r9Gta4Op3VABSGM", "ECSModel", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-05-12 14:18:44
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-05 16:37:10
       */


      /** 组件类型 */

      /** 实体构造器接口 */

      /** 组件构造器接口 */

      /** ECS框架内部数据 */
      _export("ECSModel", ECSModel = class ECSModel {
        /**
         * 创建group，每个group只关心对应组件的添加和删除
         * @param matcher 实体筛选器
         */
        static createGroup(matcher) {
          var group = ECSModel.groups.get(matcher.mid);

          if (!group) {
            group = new (_crd && ECSGroup === void 0 ? (_reportPossibleCrUseOfECSGroup({
              error: Error()
            }), ECSGroup) : ECSGroup)(matcher);
            ECSModel.groups.set(matcher.mid, group);
            var careComponentTypeIds = matcher.indices;

            for (var i = 0; i < careComponentTypeIds.length; i++) {
              ECSModel.compAddOrRemove.get(careComponentTypeIds[i]).push(group.onComponentAddOrRemove.bind(group));
            }
          }

          return group;
        }
        /** 系统组件 */


      });

      /** 实体自增id */
      ECSModel.eid = 1;

      /** 实体造函数 */
      ECSModel.entityCtors = new Map();

      /** 实体对象缓存池 */
      ECSModel.entityPool = new Map();

      /** 通过实体id查找实体对象 */
      ECSModel.eid2Entity = new Map();

      /** 组件类型id */
      ECSModel.compTid = 0;

      /** 组件缓存池 */
      ECSModel.compPools = new Map();

      /** 组件构造函数，用于ecs.register注册时，记录不同类型的组件 */
      ECSModel.compCtors = [];

      /**
       * 每个组件的添加和删除的动作都要派送到“关心”它们的group上。goup对当前拥有或者之前（删除前）拥有该组件的实体进行组件规则判断。判断该实体是否满足group
       * 所期望的组件组合。
       */
      ECSModel.compAddOrRemove = new Map();

      /** 编号获取组件 */
      ECSModel.tid2comp = new Map();

      /**
       * 缓存的group
       * 
       * key是组件的筛选规则，一个筛选规则对应一个group
       */
      ECSModel.groups = new Map();
      ECSModel.systems = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=956639694b7334584d46d0318bb674f3680963f6.js.map