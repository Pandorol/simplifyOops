System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewParams, LayerPopUp, LayerDialog, _crd;

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewParams(extras) {
    _reporterNs.report("ViewParams", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerPopUp(extras) {
    _reporterNs.report("LayerPopUp", "./LayerPopup", _context.meta, extras);
  }

  _export("LayerDialog", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewParams = _unresolved_2.ViewParams;
    }, function (_unresolved_3) {
      LayerPopUp = _unresolved_3.LayerPopUp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e07c4hrtEVJ8J5+niOmEdLS", "LayerDialog", undefined); //cpall


      /** 模式弹窗数据 */

      /*
       * 模式弹窗层，该层的窗口同时只能显示一个，删除以后会自动从队列当中取一个弹窗，直到队列为空
       */
      _export("LayerDialog", LayerDialog = class LayerDialog extends (_crd && LayerPopUp === void 0 ? (_reportPossibleCrUseOfLayerPopUp({
        error: Error()
      }), LayerPopUp) : LayerPopUp) {
        constructor() {
          super(...arguments);

          /** 窗口调用参数队列 */
          this.params = [];
        }

        add(config, params, callbacks) {
          // 控制同一时间只能显示一个模式窗口
          if (this.ui_nodes.size > 0) {
            this.params.push({
              config: config,
              params: params,
              callbacks: callbacks
            });
            return;
          }

          this.black.enabled = true;
          this.show(config, params, callbacks);
        }
        /** 显示模式弹窗 */


        show(config, params, callbacks) {
          var vp = this.ui_cache.get(config.prefab);

          if (vp == null) {
            vp = new (_crd && ViewParams === void 0 ? (_reportPossibleCrUseOfViewParams({
              error: Error()
            }), ViewParams) : ViewParams)();
            vp.valid = true;
            vp.config = config;
          }

          vp.params = params || {};
          vp.callbacks = callbacks != null ? callbacks : {};
          this.ui_nodes.set(vp.config.prefab, vp);
          this.load(vp, config.bundle);
        }

        onCloseWindow(vp) {
          super.onCloseWindow(vp);
          setTimeout(this.next.bind(this), 0);
        }

        setBlackDisable() {
          if (this.params.length == 0) {
            this.black.enabled = false;
            this.closeVacancyRemove();
            this.closeMask();
          }
        }

        next() {
          if (this.params.length > 0) {
            var param = this.params.shift();
            this.show(param.config, param.params, param.callbacks);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45d33200201b1fc04f5e52ea2ae8b7f733013fee.js.map