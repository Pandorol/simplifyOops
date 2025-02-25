System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MessageEventData, EventDispatcher, _crd;

  function _reportPossibleCrUseOfListenerFunc(extras) {
    _reporterNs.report("ListenerFunc", "./EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageEventData(extras) {
    _reporterNs.report("MessageEventData", "./MessageManager", _context.meta, extras);
  }

  _export("EventDispatcher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MessageEventData = _unresolved_2.MessageEventData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c680af5iPNKeIO4cArf/90m", "EventDispatcher", undefined); //cpall


      /* 事件对象基类，继承该类将拥有发送和接送事件的能力 */
      _export("EventDispatcher", EventDispatcher = class EventDispatcher {
        constructor() {
          this._msg = null;
        }

        /**
         * 注册全局事件
         * @param event     事件名
         * @param listener  处理事件的侦听器函数
         * @param object    侦听函数绑定的作用域对象
         */
        on(event, listener, object) {
          if (this._msg == null) {
            this._msg = new (_crd && MessageEventData === void 0 ? (_reportPossibleCrUseOfMessageEventData({
              error: Error()
            }), MessageEventData) : MessageEventData)();
          }

          this._msg.on(event, listener, object);
        }
        /**
         * 移除全局事件
         * @param event      事件名
         */


        off(event) {
          if (this._msg) {
            this._msg.off(event);
          }
        }
        /** 
         * 触发全局事件 
         * @param event      事件名
         * @param args       事件参数
         */


        dispatchEvent(event) {
          if (this._msg == null) {
            this._msg = new (_crd && MessageEventData === void 0 ? (_reportPossibleCrUseOfMessageEventData({
              error: Error()
            }), MessageEventData) : MessageEventData)();
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          this._msg.dispatchEvent(event, ...args);
        }
        /**
         * 销毁事件对象
         */


        destroy() {
          if (this._msg) {
            this._msg.clear();
          }

          this._msg = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57277fe5c5c83a73bfa1e3112bc7a2c8774faa82.js.map