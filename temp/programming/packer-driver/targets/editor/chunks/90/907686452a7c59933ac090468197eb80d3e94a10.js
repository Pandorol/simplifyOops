System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECSGroup, _crd;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "./ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSEntity(extras) {
    _reporterNs.report("ECSEntity", "./ECSEntity", _context.meta, extras);
  }

  _export("ECSGroup", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c21a23o9P5FNJamcMmoYWfs", "ECSGroup", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-05 14:21:54
       */


      _export("ECSGroup", ECSGroup = class ECSGroup {
        /**
         * 符合规则的实体
         */
        get matchEntities() {
          if (this._entitiesCache === null) {
            this._entitiesCache = Array.from(this._matchEntities.values());
          }

          return this._entitiesCache;
        }
        /**
         * 当前group中实体的数量
         * 
         * 注：不要手动修改这个属性值。
         * 注：其实可以通过this._matchEntities.size获得实体数量，但是需要封装get方法。为了减少一次方法的调用所以才直接创建一个count属性
         */


        /** 获取matchEntities中第一个实体 */
        get entity() {
          return this.matchEntities[0];
        }

        constructor(matcher) {
          /** 实体筛选规则 */
          this.matcher = void 0;
          this._matchEntities = new Map();
          this._entitiesCache = null;
          this.count = 0;
          this._enteredEntities = null;
          this._removedEntities = null;
          this.matcher = matcher;
        }

        onComponentAddOrRemove(entity) {
          if (this.matcher.isMatch(entity)) {
            // Group只关心指定组件在实体身上的添加和删除动作。
            this._matchEntities.set(entity.eid, entity);

            this._entitiesCache = null;
            this.count++;

            if (this._enteredEntities) {
              this._enteredEntities.set(entity.eid, entity);

              this._removedEntities.delete(entity.eid);
            }
          } else if (this._matchEntities.has(entity.eid)) {
            // 如果Group中有这个实体，但是这个实体已经不满足匹配规则，则从Group中移除该实体
            this._matchEntities.delete(entity.eid);

            this._entitiesCache = null;
            this.count--;

            if (this._enteredEntities) {
              this._enteredEntities.delete(entity.eid);

              this._removedEntities.set(entity.eid, entity);
            }
          }
        }

        watchEntityEnterAndRemove(enteredEntities, removedEntities) {
          this._enteredEntities = enteredEntities;
          this._removedEntities = removedEntities;
        }

        clear() {
          var _this$_enteredEntitie, _this$_removedEntitie;

          this._matchEntities.clear();

          this._entitiesCache = null;
          this.count = 0;
          (_this$_enteredEntitie = this._enteredEntities) == null || _this$_enteredEntitie.clear();
          (_this$_removedEntitie = this._removedEntities) == null || _this$_removedEntitie.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=907686452a7c59933ac090468197eb80d3e94a10.js.map