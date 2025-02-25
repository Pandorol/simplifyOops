System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, warn, AsyncQueue, _crd;

  _export("AsyncQueue", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c48bBN521JzIxhITJunFji", "AsyncQueue", undefined);

      __checkObsolete__(['log', 'warn']);

      /**
       * 异步队列处理
       * @example
      var queue: AsyncQueue = new AsyncQueue();
      queue.push((next: NextFunction, params: any, args: any) => {
          oops.res.load("language/font/" + oops.language.current, next);
      });
      queue.push((next: NextFunction, params: any, args: any) => {
          oops.res.loadDir("common", next);
      });
      queue.complete =  () => {
          console.log("处理完成");
      };
      queue.play();
       */
      _export("AsyncQueue", AsyncQueue = class AsyncQueue {
        constructor() {
          // 正在运行的任务
          this._runningAsyncTask = null;
          this._queues = [];
          // 正在执行的异步任务标识
          this._isProcessingTaskUUID = 0;
          this._enable = true;

          /**
           * 任务队列完成回调
           */
          this.complete = null;
        }

        /** 任务队列 */
        get queues() {
          return this._queues;
        }

        /** 是否开启可用 */
        get enable() {
          return this._enable;
        }
        /** 是否开启可用 */


        set enable(val) {
          if (this._enable === val) {
            return;
          }

          this._enable = val;

          if (val && this.size > 0) {
            this.play();
          }
        }

        /**
         * 添加一个异步任务到队列中
         * @param callback  回调
         * @param params    参数
         */
        push(callback, params = null) {
          let uuid = AsyncQueue._$uuid_count++;

          this._queues.push({
            uuid: uuid,
            callbacks: [callback],
            params: params
          });

          return uuid;
        }
        /**
         * 添加多个任务，多个任务函数会同时执行
         * @param params     参数据
         * @param callbacks  回调
         * @returns 
         */


        pushMulti(params, ...callbacks) {
          let uuid = AsyncQueue._$uuid_count++;

          this._queues.push({
            uuid: uuid,
            callbacks: callbacks,
            params: params
          });

          return uuid;
        }
        /**
         * 移除一个还未执行的异步任务
         * @param uuid  任务唯一编号
         */


        remove(uuid) {
          var _this$_runningAsyncTa;

          if (((_this$_runningAsyncTa = this._runningAsyncTask) == null ? void 0 : _this$_runningAsyncTa.uuid) === uuid) {
            warn("正在执行的任务不可以移除");
            return;
          }

          for (let i = 0; i < this._queues.length; i++) {
            if (this._queues[i].uuid === uuid) {
              this._queues.splice(i, 1);

              break;
            }
          }
        }
        /** 队列长度 */


        get size() {
          return this._queues.length;
        }
        /** 是否有正在处理的任务 */


        get isProcessing() {
          return this._isProcessingTaskUUID > 0;
        }
        /** 队列是否已停止 */


        get isStop() {
          if (this._queues.length > 0) {
            return false;
          }

          if (this.isProcessing) {
            return false;
          }

          return true;
        }
        /** 正在执行的任务参数 */


        get runningParams() {
          if (this._runningAsyncTask) {
            return this._runningAsyncTask.params;
          }

          return null;
        }
        /** 清空队列 */


        clear() {
          this._queues = [];
          this._isProcessingTaskUUID = 0;
          this._runningAsyncTask = null;
        }
        /** 跳过当前正在执行的任务 */


        step() {
          if (this.isProcessing) {
            this.next(this._isProcessingTaskUUID);
          }
        }
        /**
         * 开始运行队列
         * @param args  参数
         */


        play(args = null) {
          if (this.isProcessing) {
            return;
          }

          if (!this._enable) {
            return;
          }

          let actionData = this._queues.shift();

          if (actionData) {
            this._runningAsyncTask = actionData;
            let taskUUID = actionData.uuid;
            this._isProcessingTaskUUID = taskUUID;
            let callbacks = actionData.callbacks;

            if (callbacks.length == 1) {
              let nextFunc = (nextArgs = null) => {
                this.next(taskUUID, nextArgs);
              };

              callbacks[0](nextFunc, actionData.params, args);
            } else {
              // 多个任务函数同时执行
              let fnum = callbacks.length;
              let nextArgsArr = [];

              let nextFunc = (nextArgs = null) => {
                --fnum;
                nextArgsArr.push(nextArgs || null);

                if (fnum === 0) {
                  this.next(taskUUID, nextArgsArr);
                }
              };

              let knum = fnum;

              for (let i = 0; i < knum; i++) {
                callbacks[i](nextFunc, actionData.params, args);
              }
            }
          } else {
            this._isProcessingTaskUUID = 0;
            this._runningAsyncTask = null;

            if (this.complete) {
              this.complete(args);
            }
          }
        }
        /**
         * 往队列中push一个延时任务
         * @param time 毫秒时间
         * @param callback （可选参数）时间到了之后回调
         */


        yieldTime(time, callback = null) {
          let task = function (next, params, args) {
            let _t = setTimeout(() => {
              clearTimeout(_t);

              if (callback) {
                callback();
              }

              next(args);
            }, time);
          };

          this.push(task, {
            des: "AsyncQueue.yieldTime"
          });
        }

        next(taskUUID, args = null) {
          if (this._isProcessingTaskUUID === taskUUID) {
            this._isProcessingTaskUUID = 0;
            this._runningAsyncTask = null;
            this.play(args);
          } else {
            if (this._runningAsyncTask) {
              log(this._runningAsyncTask);
            }
          }
        }
        /**
         * 返回一个执行函数，执行函数调用count次后，next将触发
         * @param count 
         * @param next 
         * @return 返回一个匿名函数
         */


        static excuteTimes(count, next = null) {
          let fnum = count;

          let call = () => {
            --fnum;

            if (fnum === 0) {
              next && next();
            }
          };

          return call;
        }

      });

      // 任务task的唯一标识
      AsyncQueue._$uuid_count = 1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c350da8ae49bcffd58e6482f2a14bb5d9246fa5.js.map