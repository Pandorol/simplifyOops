System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, game, StringUtil, Timer, TimerManager, _crd;

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimer(extras) {
    _reporterNs.report("Timer", "./Timer", _context.meta, extras);
  }

  _export("TimerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      game = _cc.game;
    }, function (_unresolved_2) {
      StringUtil = _unresolved_2.StringUtil;
    }, function (_unresolved_3) {
      Timer = _unresolved_3.Timer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73600VLsIBLOKhOhd7td4P8", "TimerManager", undefined);
      /*
       * @Author: dgflash
       * @Date: 2023-01-19 10:33:49
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 14:37:19
       */


      __checkObsolete__(['Component', 'game']);

      /** 时间管理 */
      _export("TimerManager", TimerManager = class TimerManager extends Component {
        constructor() {
          super(...arguments);

          /** 倒计时数据 */
          this.times = {};

          /** 服务器时间 */
          this.date_s = new Date();

          /** 服务器初始时间 */
          this.date_s_start = new Date();

          /** 服务器时间后修正时间 */
          this.polymeric_s = 0;

          /** 客户端时间 */
          this.date_c = new Date();
        }

        /** 后台管理倒计时完成事件 */
        update(dt) {
          for (var key in this.times) {
            var data = this.times[key];
            var timer = data.timer;

            if (timer.update(dt)) {
              if (data.object[data.field] > 0) {
                data.object[data.field]--; // 倒计时结束触发

                if (data.object[data.field] == 0) {
                  this.onTimerComplete(data);
                } // 触发每秒回调事件  
                else if (data.onSecond) {
                  data.onSecond.call(data.object);
                }
              }
            }
          }
        }
        /** 触发倒计时完成事件 */


        onTimerComplete(data) {
          if (data.onComplete) data.onComplete.call(data.object);
          if (data.event) this.node.dispatchEvent(data.event);
          delete this.times[data.id];
        }
        /**
         * 在指定对象上注册一个倒计时的回调管理器
         * @param object        注册定时器的对象
         * @param field         时间字段
         * @param onSecond      每秒事件
         * @param onComplete    倒计时完成事件
         * @returns 
         * @example
        export class Test extends Component {
            private timeId!: string;
            
            start() {
                // 在指定对象上注册一个倒计时的回调管理器
                this.timeId = oops.timer.register(this, "countDown", this.onSecond, this.onComplete);
            }
            
            private onSecond() {
                console.log("每秒触发一次");
            }
              private onComplete() {
                console.log("倒计时完成触发");
            }
        }
         */


        register(object, field, onSecond, onComplete) {
          var timer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)();
          timer.step = 1;
          var data = {};
          data.id = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
            error: Error()
          }), StringUtil) : StringUtil).guid();
          data.timer = timer;
          data.object = object; // 管理对象

          data.field = field; // 时间字段

          data.onSecond = onSecond; // 每秒事件

          data.onComplete = onComplete; // 倒计时完成事件

          this.times[data.id] = data;
          return data.id;
        }
        /** 
         * 在指定对象上注销一个倒计时的回调管理器 
         * @param id         时间对象唯一表示
         * @example
        export class Test extends Component {
            private timeId!: string;
              start() {
                this.timeId = oops.timer.register(this, "countDown", this.onSecond, this.onComplete);
            }
              onDestroy() {
                // 在指定对象上注销一个倒计时的回调管理器
                oops.timer.unRegister(this.timeId);
            }
        }
         */


        unRegister(id) {
          if (this.times[id]) delete this.times[id];
        }
        /**
         * 服务器时间与本地时间同步
         * @param value   服务器时间刻度
         */


        setServerTime(value) {
          this.polymeric_s = this.getTime();
          this.date_s_start.setTime(value);
        }
        /** 获取写服务器同步的时间刻度 */


        getServerTime() {
          return this.date_s_start.getTime() + this.getTime() - this.polymeric_s;
        }
        /** 获取服务器时间对象 */


        getServerDate() {
          this.date_s.setTime(this.getServerTime());
          return this.date_s;
        }
        /** 获取本地时间刻度 */


        getClientTime() {
          return Date.now();
        }
        /** 获取本地时间对象 */


        getClientDate() {
          this.date_c.setTime(this.getClientTime());
          return this.date_c;
        }
        /** 获取游戏开始到现在逝去的时间 */


        getTime() {
          return game.totalTime;
        }
        /** 游戏最小化时记录时间数据 */


        save() {
          for (var key in this.times) {
            this.times[key].startTime = this.getTime();
          }
        }
        /** 游戏最大化时回复时间数据 */


        load() {
          for (var key in this.times) {
            var interval = Math.floor((this.getTime() - (this.times[key].startTime || this.getTime())) / 1000);
            var data = this.times[key];
            data.object[data.field] = data.object[data.field] - interval;

            if (data.object[data.field] <= 0) {
              data.object[data.field] = 0;
              this.onTimerComplete(data);
            } else {
              this.times[key].startTime = null;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff29ed224c98165c4de5976324bfa06c0a79a6c2.js.map