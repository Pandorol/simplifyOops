System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECSComp, ECSEntity, ECSMatcher, ECSModel, ECSComblockSystem, ECSRootSystem, ECSSystem, _crd, ecs;

  function _reportPossibleCrUseOfECSComp(extras) {
    _reporterNs.report("ECSComp", "./ECSComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSEntity(extras) {
    _reporterNs.report("ECSEntity", "./ECSEntity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSMatcher(extras) {
    _reporterNs.report("ECSMatcher", "./ECSMatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompCtor(extras) {
    _reporterNs.report("CompCtor", "./ECSModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompType(extras) {
    _reporterNs.report("CompType", "./ECSModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSModel(extras) {
    _reporterNs.report("ECSModel", "./ECSModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityCtor(extras) {
    _reporterNs.report("EntityCtor", "./ECSModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSComblockSystem(extras) {
    _reporterNs.report("ECSComblockSystem", "./ECSSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSRootSystem(extras) {
    _reporterNs.report("ECSRootSystem", "./ECSSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSSystem(extras) {
    _reporterNs.report("ECSSystem", "./ECSSystem", _context.meta, extras);
  }

  _export("ecs", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ECSComp = _unresolved_2.ECSComp;
    }, function (_unresolved_3) {
      ECSEntity = _unresolved_3.ECSEntity;
    }, function (_unresolved_4) {
      ECSMatcher = _unresolved_4.ECSMatcher;
    }, function (_unresolved_5) {
      ECSModel = _unresolved_5.ECSModel;
    }, function (_unresolved_6) {
      ECSComblockSystem = _unresolved_6.ECSComblockSystem;
      ECSRootSystem = _unresolved_6.ECSRootSystem;
      ECSSystem = _unresolved_6.ECSSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be87fT76plLkaUKEYpkuV0n", "ECS", undefined);

      (function (_ecs) {
        /** 实体 - 一个概念上的定义，指的是游戏世界中的一个独特物体，是一系列组件的集合 */

        /** 组件 - 一堆数据的集合，即不存在任何的行为，只用来存储状态 */

        /** 系统 - 关注实体上组件数据变化，处理游戏逻辑 */

        /** 根系统 - 驱动游戏中所有系统工作 */

        /** 处理游戏逻辑系统对象 - 继承此对象实现自定义业务逻辑 */

        /** 实体 - 一个概念上的定义，指的是游戏世界中的一个独特物体，是一系列组件的集合 */
        var Entity = _ecs.Entity = _crd && ECSEntity === void 0 ? (_reportPossibleCrUseOfECSEntity({
          error: Error()
        }), ECSEntity) : ECSEntity;
        var Comp = _ecs.Comp = _crd && ECSComp === void 0 ? (_reportPossibleCrUseOfECSComp({
          error: Error()
        }), ECSComp) : ECSComp;
        var System = _ecs.System = _crd && ECSSystem === void 0 ? (_reportPossibleCrUseOfECSSystem({
          error: Error()
        }), ECSSystem) : ECSSystem;
        var RootSystem = _ecs.RootSystem = _crd && ECSRootSystem === void 0 ? (_reportPossibleCrUseOfECSRootSystem({
          error: Error()
        }), ECSRootSystem) : ECSRootSystem;
        var ComblockSystem = _ecs.ComblockSystem = _crd && ECSComblockSystem === void 0 ? (_reportPossibleCrUseOfECSComblockSystem({
          error: Error()
        }), ECSComblockSystem) : ECSComblockSystem; //#region 接口

        /** 组件接口 */

        /** 实体匹配器接口 */

        /**
         * 监听组件首次添加到实体上时，在ComblockSystem上实现这个接口
         * 1. entityEnter会在update方法之前执行，实体进入后，不会再次进入entityEnter方法中
         * 2. 当实体从当前System移除，下次再次符合条件进入System也会执行上述流程
         * @example
        export class RoleUpgradeSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
            filter(): ecs.IMatcher {
                return ecs.allOf(RoleUpgradeComp, RoleModelLevelComp);
            }
              entityEnter(e: Role): void {
                e.remove(RoleUpgradeComp);
            }
        }
         */

        /** 监听组件从实体上移除时，在ComblockSystem上实现这个接口 */

        /** 监听系统第一次执行update处理实体时，在ComblockSystem上实现这个接口 */

        /** 监听系统执行update处理实体时，在ComblockSystem上实现这个接口 */

        //#endregion

        /**
         * 注册组件到ecs系统中
         * @param name   由于js打包会改变类名，所以这里必须手动传入组件的名称
         * @param canNew 标识是否可以new对象。想继承自Cocos Creator的组件就不能去new，需要写成@ecs.register('name', false)
         * @example
        // 注册实体
        @ecs.register('Role')
        export class Role extends ecs.Entity {
          }
          // 注册数据组件
        @ecs.register('RoleModel')
        export class RoleModelComp extends ecs.Comp {
            id: number = -1;
              reset() {
                this.id =  -1;
            }
        }
          // 注册系统组件
        @ecs.register('Initialize')
        export class InitResSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
          }
          // 注册显示对象组件
        @ccclass('RoleViewComp')
        @ecs.register('RoleView', false)
        export class RoleViewComp extends CCComp {
            onLoad(){
                
            }
        }
        */
        function register(name, canNew) {
          if (canNew === void 0) {
            canNew = true;
          }

          return function (ctor) {
            // 注册系统
            if (ctor.s) {
              var system = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                error: Error()
              }), ECSModel) : ECSModel).systems.get(name);

              if (system == null) {
                system = new ecs.System();
                (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                  error: Error()
                }), ECSModel) : ECSModel).systems.set(name, system);
              }

              system.add(new ctor());
            } // 注册实体
            else if (ctor.tid == undefined) {
              (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                error: Error()
              }), ECSModel) : ECSModel).entityCtors.set(ctor, name);
            } // 注册组件
            else {
              if (ctor.tid === -1) {
                ctor.tid = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                  error: Error()
                }), ECSModel) : ECSModel).compTid++;
                ctor.compName = name;

                if (canNew) {
                  (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                    error: Error()
                  }), ECSModel) : ECSModel).compCtors.push(ctor); // 注册不同类型的组件

                  (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                    error: Error()
                  }), ECSModel) : ECSModel).compPools.set(ctor.tid, []);
                } else {
                  (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                    error: Error()
                  }), ECSModel) : ECSModel).compCtors.push(null);
                }

                (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                  error: Error()
                }), ECSModel) : ECSModel).compAddOrRemove.set(ctor.tid, []);
              } else {
                throw new Error("\u91CD\u590D\u6CE8\u518C\u7EC4\u4EF6\uFF1A " + name + ".");
              }
            }
          };
        }

        _ecs.register = register;

        function getEntity(ctor) {
          // 获取实体对象名
          var entityName = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).entityCtors.get(ctor);
          if (entityName == undefined) console.error(ctor.name + " \u5B9E\u4F53\u6CA1\u6709\u6CE8\u518C"); // 获取实体对象池

          var entitys = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).entityPool.get(entityName) || [];
          var entity = entitys.pop(); // 缓存中没有同类实体，则创建一个新的

          if (!entity) {
            entity = new ctor();
            entity.eid = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
              error: Error()
            }), ECSModel) : ECSModel).eid++; // 实体唯一编号

            entity.name = entityName;
          } // 触发实体初始化逻辑


          if (entity.init) {
            entity.isValid = true;
            entity.init();
          } else console.error(ctor.name + " \u5B9E\u4F53\u7F3A\u5C11 init \u65B9\u6CD5\u521D\u59CB\u5316\u9ED8\u8BA4\u7EC4\u4EF6");

          (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).eid2Entity.set(entity.eid, entity);
          return entity;
        }

        _ecs.getEntity = getEntity;

        function query(matcher) {
          var group = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).groups.get(matcher.mid);

          if (!group) {
            group = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
              error: Error()
            }), ECSModel) : ECSModel).createGroup(matcher);
            (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
              error: Error()
            }), ECSModel) : ECSModel).eid2Entity.forEach(group.onComponentAddOrRemove, group);
          }

          return group.matchEntities;
        }

        _ecs.query = query;

        function clear() {
          (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).eid2Entity.forEach(entity => {
            entity.destroy();
          });
          (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).groups.forEach(group => {
            group.clear();
          });
          (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).compAddOrRemove.forEach(callbackLst => {
            callbackLst.length = 0;
          });
          (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).eid2Entity.clear();
          (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).groups.clear();
        }

        _ecs.clear = clear;

        function getEntityByEid(eid) {
          return (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).eid2Entity.get(eid);
        }

        _ecs.getEntityByEid = getEntityByEid;

        function activeEntityCount() {
          return (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).eid2Entity.size;
        }

        _ecs.activeEntityCount = activeEntityCount;

        /** 创建实体 */
        function createEntity() {
          var entity = new Entity();
          entity.eid = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).eid++; // 实体id也是有限的资源

          (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).eid2Entity.set(entity.eid, entity);
          return entity;
        }
        /**
         * 指定一个组件创建实体，返回组件对象。
         * @param ctor 
         */


        function createEntityWithComp(ctor) {
          var entity = createEntity();
          return entity.add(ctor);
        } //#region 过滤器

        /**
         * 表示只关心这些组件的添加和删除动作。虽然实体可能有这些组件之外的组件，但是它们的添加和删除没有被关注，所以不会存在对关注之外的组件
         * 进行添加操作引发Group重复添加实体。
         * @param args 
         * @example
         * ecs.allOf(AComponent, BComponent, CComponent);
         */


        function allOf() {
          return new (_crd && ECSMatcher === void 0 ? (_reportPossibleCrUseOfECSMatcher({
            error: Error()
          }), ECSMatcher) : ECSMatcher)().allOf(...arguments);
        }

        _ecs.allOf = allOf;

        function anyOf() {
          return new (_crd && ECSMatcher === void 0 ? (_reportPossibleCrUseOfECSMatcher({
            error: Error()
          }), ECSMatcher) : ECSMatcher)().anyOf(...arguments);
        }

        _ecs.anyOf = anyOf;

        function onlyOf() {
          return new (_crd && ECSMatcher === void 0 ? (_reportPossibleCrUseOfECSMatcher({
            error: Error()
          }), ECSMatcher) : ECSMatcher)().onlyOf(...arguments);
        }

        _ecs.onlyOf = onlyOf;

        function excludeOf() {
          return new (_crd && ECSMatcher === void 0 ? (_reportPossibleCrUseOfECSMatcher({
            error: Error()
          }), ECSMatcher) : ECSMatcher)().excludeOf(...arguments);
        }

        _ecs.excludeOf = excludeOf;

        function getSingleton(ctor) {
          if (!(_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).tid2comp.has(ctor.tid)) {
            var comp = createEntityWithComp(ctor);
            (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
              error: Error()
            }), ECSModel) : ECSModel).tid2comp.set(ctor.tid, comp);
          }

          return (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).tid2comp.get(ctor.tid);
        }

        _ecs.getSingleton = getSingleton;

        function addSingleton(obj) {
          var tid = obj.constructor.tid;

          if (!(_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
            error: Error()
          }), ECSModel) : ECSModel).tid2comp.has(tid)) {
            (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
              error: Error()
            }), ECSModel) : ECSModel).tid2comp.set(tid, obj);
          }
        }

        _ecs.addSingleton = addSingleton;
      })(ecs || _export("ecs", ecs = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04107cfe09eaeaec7b33b2d0282f6a1a238fb7f5.js.map