System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, warn, EventData, MessageEventData, MessageManager, _crd, message;

  function _reportPossibleCrUseOfListenerFunc(extras) {
    _reporterNs.report("ListenerFunc", "./EventMessage", _context.meta, extras);
  }

  _export({
    MessageEventData: void 0,
    MessageManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a401fY+wj9NsqOACoZ7Zy/R", "MessageManager", undefined); //cpall


      __checkObsolete__(['log', 'warn']);

      EventData = class EventData {
        constructor() {
          this.event = void 0;
          this.listener = void 0;
          this.object = void 0;
        }

      };
      /** 批量注册、移除全局事件对象 */

      _export("MessageEventData", MessageEventData = class MessageEventData {
        constructor() {
          this.events = new Map();
        }

        /**
         * 注册全局事件
         * @param event      事件名
         * @param listener   处理事件的侦听器函数
         * @param object     侦听函数绑定的作用域对象
         */
        on(event, listener, object) {
          let eds = this.events.get(event);

          if (eds == null) {
            eds = [];
            this.events.set(event, eds);
          }

          let ed = new EventData();
          ed.event = event;
          ed.listener = listener;
          ed.object = object;
          eds.push(ed);
          message.on(event, listener, object);
        }
        /**
        * 移除全局事件
         * @param event     事件名
         */


        off(event) {
          let eds = this.events.get(event);
          if (!eds) return;

          for (let eb of eds) {
            message.off(event, eb.listener, eb.object);
          }

          this.events.delete(event);
        }
        /** 
         * 触发全局事件 
         * @param event      事件名
         * @param args       事件参数
         */


        dispatchEvent(event, ...args) {
          message.dispatchEvent(event, ...args);
        }
        /** 清除所有的全局事件监听 */


        clear() {
          const keys = Array.from(this.events.keys());

          for (let event of keys) {
            this.off(event);
          }
        }

      });
      /** 
       * 全局消息管理
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037894&doc_id=2873565
       * @example 
      // 注册持续监听的全局事件
      export class RoleViewComp extends Component{
          onLoad(){
              // 监听全局事件
              oops.message.on(GameEvent.GameServerConnected, this.onHandler, this);
          }
          
          protected onDestroy() {
              // 对象释放时取消注册的全局事件
              oops.message.off(GameEvent.GameServerConnected, this.onHandler, this);
          }
          
          private onHandler(event: string, args: any) {
              switch (event) {
                  case GameEvent.GameServerConnected:
                      console.log("处理游戏服务器连接成功后的逻辑");
                      break;
              }
          }
      }
      
      // 注册只触发一次的全局事件
      export class RoleViewComp extends Component{
          onLoad(){
              // 监听一次事件，事件响应后，该监听自动移除
              oops.message.once(GameEvent.GameServerConnected, this.onHandler, this);
          }
          
          private onHandler(event: string, args: any) {
              switch (event) {
                  case GameEvent.GameServerConnected:
                      console.log("处理游戏服务器连接成功后的逻辑");
                      break;
              }
          }
      }
       */


      _export("MessageManager", MessageManager = class MessageManager {
        constructor() {
          this.events = new Map();
        }

        /**
         * 注册全局事件
         * @param event      事件名
         * @param listener   处理事件的侦听器函数
         * @param object     侦听函数绑定的作用域对象
         */
        on(event, listener, object) {
          if (!event || !listener) {
            warn(`注册【${event}】事件的侦听器函数为空`);
            return;
          }

          let eds = this.events.get(event);

          if (eds == null) {
            eds = [];
            this.events.set(event, eds);
          }

          let length = eds.length;

          for (let i = 0; i < length; i++) {
            let bin = eds[i];

            if (bin.listener == listener && bin.object == object) {
              warn(`名为【${event}】的事件重复注册侦听器`);
            }
          }

          let data = new EventData();
          data.event = event;
          data.listener = listener;
          data.object = object;
          eds.push(data);
        }
        /**
         * 监听一次事件，事件响应后，该监听自动移除
         * @param event     事件名
         * @param listener  事件触发回调方法
         * @param object    侦听函数绑定的作用域对象
         */


        once(event, listener, object) {
          let _listener = ($event, ...$args) => {
            this.off(event, _listener, object);
            _listener = null;
            listener.call(object, $event, $args);
          };

          this.on(event, _listener, object);
        }
        /**
         * 移除全局事件
         * @param event     事件名
         * @param listener  处理事件的侦听器函数
         * @param object    侦听函数绑定的作用域对象
         */


        off(event, listener, object) {
          let eds = this.events.get(event);

          if (!eds) {
            log(`名为【${event}】的事件不存在`);
            return;
          }

          let length = eds.length;

          for (let i = 0; i < length; i++) {
            let bin = eds[i];

            if (bin.listener == listener && bin.object == object) {
              eds.splice(i, 1);
              break;
            }
          }

          if (eds.length == 0) {
            this.events.delete(event);
          }
        }
        /** 
         * 触发全局事件 
         * @param event      事件名
         * @param args       事件参数
         */


        dispatchEvent(event, ...args) {
          let list = this.events.get(event);

          if (list != null) {
            let eds = list.concat();
            let length = eds.length;

            for (let i = 0; i < length; i++) {
              let eventBin = eds[i];
              eventBin.listener.call(eventBin.object, event, ...args);
            }
          }
        }

      });

      _export("message", message = new MessageManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ddff1ee276540dc8737cd784c0f63261bf272ac2.js.map