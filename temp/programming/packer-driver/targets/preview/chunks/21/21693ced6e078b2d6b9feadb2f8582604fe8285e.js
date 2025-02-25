System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, AsyncQueue, ecs, UIID, LoadingViewComp, _dec, _class, _dec2, _class2, _crd, InitResComp, InitResSystem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "db://assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncQueue(extras) {
    _reporterNs.report("AsyncQueue", "db://assets/libs/collection/AsyncQueue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNextFunction(extras) {
    _reporterNs.report("NextFunction", "db://assets/libs/collection/AsyncQueue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "db://assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../ui/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitialize(extras) {
    _reporterNs.report("Initialize", "../Initialize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingViewComp(extras) {
    _reporterNs.report("LoadingViewComp", "../view/LoadingViewComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      AsyncQueue = _unresolved_3.AsyncQueue;
    }, function (_unresolved_4) {
      ecs = _unresolved_4.ecs;
    }, function (_unresolved_5) {
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      LoadingViewComp = _unresolved_6.LoadingViewComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ee0c8+7R9EFKQb+OPn9mlk", "InitRes", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-07-22 17:06:22
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-22 14:41:58
       */


      /** 初始化游戏公共资源 */
      _export("InitResComp", InitResComp = (_dec = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('InitRes'), _dec(_class = class InitResComp extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Comp {
        reset() {}

      }) || _class));

      _export("InitResSystem", InitResSystem = (_dec2 = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('Initialize'), _dec2(_class2 = class InitResSystem extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).ComblockSystem {
        filter() {
          return (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
            error: Error()
          }), ecs) : ecs).allOf(InitResComp);
        }

        entityEnter(e) {
          var queue = new (_crd && AsyncQueue === void 0 ? (_reportPossibleCrUseOfAsyncQueue({
            error: Error()
          }), AsyncQueue) : AsyncQueue)(); // 加载自定义资源

          this.loadCustom(queue); // 加载多语言包

          this.loadLanguage(queue); // 加载公共资源

          this.loadCommon(queue); // 加载游戏内容加载进度提示界面

          this.onComplete(queue, e);
          queue.play();
        }
        /** 加载自定义内容（可选） */


        loadCustom(queue) {
          queue.push( /*#__PURE__*/_asyncToGenerator(function* (next, params, args) {
            // 加载多语言对应字体
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load("language/font/" + (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.current, next);
          }));
        }
        /** 加载化语言包（可选） */


        loadLanguage(queue) {
          queue.push((next, params, args) => {
            // 设置默认语言
            var lan = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).storage.get("language");

            if (lan == null || lan == "") {
              lan = "zh";
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).storage.set("language", lan);
            } // 加载语言包资源


            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.setLanguage(lan, next);
          });
        }
        /** 加载公共资源（必备） */


        loadCommon(queue) {
          queue.push((next, params, args) => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.loadDir("common", next);
          });
        }
        /** 加载完成进入游戏内容加载界面 */


        onComplete(queue, e) {
          queue.complete = /*#__PURE__*/_asyncToGenerator(function* () {
            var node = yield (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.openAsync((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).Loading);
            if (node) e.add(node.getComponent(_crd && LoadingViewComp === void 0 ? (_reportPossibleCrUseOfLoadingViewComp({
              error: Error()
            }), LoadingViewComp) : LoadingViewComp));
            e.remove(InitResComp);
          });
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21693ced6e078b2d6b9feadb2f8582604fe8285e.js.map