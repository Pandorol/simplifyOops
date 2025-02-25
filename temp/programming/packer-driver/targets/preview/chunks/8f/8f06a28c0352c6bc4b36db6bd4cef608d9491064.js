System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, sys, oops, tips, UIID, Hot, HotOptions, LoadingViewComp, _dec, _class, _crd, ccclass, property, HotUpdate;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "db://assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOftips(extras) {
    _reporterNs.report("tips", "../../common/prompt/TipsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../ui/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHot(extras) {
    _reporterNs.report("Hot", "./Hot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHotOptions(extras) {
    _reporterNs.report("HotOptions", "./Hot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingViewComp(extras) {
    _reporterNs.report("LoadingViewComp", "./LoadingViewComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      tips = _unresolved_3.tips;
    }, function (_unresolved_4) {
      UIID = _unresolved_4.UIID;
    }, function (_unresolved_5) {
      Hot = _unresolved_5.Hot;
      HotOptions = _unresolved_5.HotOptions;
    }, function (_unresolved_6) {
      LoadingViewComp = _unresolved_6.LoadingViewComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64deiQLAhLh5HGqUqaI9oA", "HotUpdate", undefined); //cpall


      __checkObsolete__(['_decorator', 'Component', 'game', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 热更新界面控制脚本 */

      _export("HotUpdate", HotUpdate = (_dec = ccclass('HotUpdate'), _dec(_class = class HotUpdate extends Component {
        constructor() {
          super(...arguments);

          /** 热更新业务管理对象 */
          this.hot = new (_crd && Hot === void 0 ? (_reportPossibleCrUseOfHot({
            error: Error()
          }), Hot) : Hot)();

          /** 公用加载界面UI做更新提示 */
          this.lv = null;
        }

        onLoad() {
          if (sys.isNative) {
            this.lv = this.getComponent(_crd && LoadingViewComp === void 0 ? (_reportPossibleCrUseOfLoadingViewComp({
              error: Error()
            }), LoadingViewComp) : LoadingViewComp);
            this.lv.data.prompt = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("update_tips_check_update");
            this.startHotUpdate();
          }
        }
        /** 开始热更新 */


        startHotUpdate() {
          var options = new (_crd && HotOptions === void 0 ? (_reportPossibleCrUseOfHotOptions({
            error: Error()
          }), HotOptions) : HotOptions)();

          options.onVersionInfo = data => {// console.log(`【热更新界面】本地版本:${data.local},远程版本:${data.server}`);
          };

          options.onUpdateProgress = event => {
            // 进度提示字
            var pc = event.getPercent();

            var _total = event.getTotalBytes();

            var _have = event.getDownloadedBytes();

            var total, have;

            if (_total < 1048576) {
              // 小于1m，就显示kb
              _total = Math.ceil(_total / 1024);
              total = _total + 'K';
            } else {
              // 显示m
              total = (_total / (1024 * 1024)).toFixed(1);
              total = total + 'M';
            }

            if (_have < 1048576) {
              // 小于1m，就显示kb
              _have = Math.ceil(_have / 1024);
              have = _have + 'K';
            } else {
              // 显示m
              have = (_have / (1024 * 1024)).toFixed(1);
              have = have + 'M';
            }

            if (total == '0K') {
              this.lv.data.prompt = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("update_tips_check_update");
            } else {
              this.lv.data.prompt = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("update_tips_update") + have + '/' + total + ' (' + parseInt(pc * 100 + "") + '%)';
            } // 进度条


            if (!isNaN(event.getPercent())) {
              this.lv.data.finished = event.getDownloadedFiles();
              this.lv.data.total = event.getTotalFiles();
              this.lv.data.progress = (event.getPercent() * 100).toFixed(2);
            }
          };

          options.onNeedToUpdate = (data, totalBytes) => {
            this.lv.data.prompt = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("update_tips_new_version");
            var total = "";

            if (totalBytes < 1048576) {
              // 小于1m，就显示kb
              // totalBytes = Math.ceil(totalBytes / 1024);
              // total = total + 'KB';
              total = Math.ceil(totalBytes / 1024) + 'KB';
            } else {
              total = (totalBytes / (1024 * 1024)).toFixed(1);
              total = total + 'MB';
            } // 提示更新


            this.checkForceUpdate(() => {
              // 非 WIFI 环境提示玩家
              this.showUpdateDialog(total, () => {
                this.hot.hotUpdate();
              });
            });
          };

          options.onNoNeedToUpdate = () => {
            this.lv.enter();
          };

          options.onUpdateFailed = () => {
            this.lv.data.prompt = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("update_tips_update_fail");
            this.hot.checkUpdate();
          };

          options.onUpdateSucceed = () => {
            this.lv.data.progress = 100;
            this.lv.data.prompt = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("update_tips_update_success");
            setTimeout(() => {
              game.restart();
            }, 1000);
          };

          this.hot.init(options);
        }
        /** 检查是否强制更新信息 */


        checkForceUpdate(callback) {
          var operate = {
            title: 'common_prompt_title_sys',
            content: "update_tips_force",
            okWord: 'common_prompt_ok',
            cancelWord: 'common_prompt_cancal',
            okFunc: () => {
              this.hot.clearHotUpdateStorage();
              callback();
            },
            cancelFunc: () => {
              game.end();
            },
            needCancel: true
          };
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Confirm, operate);
        }
        /** 非 WIFI 环境提示玩家 */


        showUpdateDialog(size, callback) {
          if (sys.getNetworkType() == sys.NetworkType.LAN) {
            callback();
            return;
          }

          (_crd && tips === void 0 ? (_reportPossibleCrUseOftips({
            error: Error()
          }), tips) : tips).alert((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("update_nowifi_tip") + size, callback);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f06a28c0352c6bc4b36db6bd4cef608d9491064.js.map