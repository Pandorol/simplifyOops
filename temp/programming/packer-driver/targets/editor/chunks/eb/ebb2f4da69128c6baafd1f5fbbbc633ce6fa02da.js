System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, log, native, sys, oops, JSB_MD5, HotOptions, Hot, _crd;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "db://assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJSB_MD(extras) {
    _reporterNs.report("JSB_MD5", "db://assets/libs/jsmd5/jsb_md5", _context.meta, extras);
  }

  _export({
    HotOptions: void 0,
    Hot: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      log = _cc.log;
      native = _cc.native;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      JSB_MD5 = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6377Ckbb9Cg5R2ygFWMOCv", "Hot", undefined);

      __checkObsolete__(['error', 'log', 'native', 'sys']);

      /** 热更参数 */
      _export("HotOptions", HotOptions = class HotOptions {
        constructor() {
          /** 获取到版本号信息 */
          this.onVersionInfo = null;

          /** 发现新版本，请更新 */
          this.onNeedToUpdate = null;

          /** 和远程版本一致，无须更新 */
          this.onNoNeedToUpdate = null;

          /** 更新失败 */
          this.onUpdateFailed = null;

          /** 更新完成 */
          this.onUpdateSucceed = null;

          /** 更新进度 */
          this.onUpdateProgress = null;
        }

        check() {
          for (let key in this) {
            if (key !== 'check') {
              if (!this[key]) {
                log(`参数HotOptions.${key}未设置！`);
                return false;
              }
            }
          }

          return true;
        }

      });
      /** 热更管理 */


      _export("Hot", Hot = class Hot {
        constructor() {
          this.assetsMgr = null;
          this.options = null;
          this.state = Hot.State.None;
          this.storagePath = "";
          this.manifest = "";
        }

        /** 热更初始化 */
        init(opt) {
          if (!sys.isNative) {
            return;
          }

          if (!opt.check()) {
            return;
          }

          this.options = opt;

          if (this.assetsMgr) {
            return;
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.load('project', (err, res) => {
            if (err) {
              error("【热更新界面】缺少热更新配置文件");
              return;
            }

            this.showSearchPath();
            this.manifest = res.nativeUrl;
            this.storagePath = `${native.fileUtils.getWritablePath()}oops_framework_remote`;
            this.assetsMgr = new native.AssetsManager(this.manifest, this.storagePath, (versionA, versionB) => {
              var _this$options;

              console.log("【热更新】客户端版本: " + versionA + ', 当前最新版本: ' + versionB);
              ((_this$options = this.options) == null ? void 0 : _this$options.onVersionInfo) && this.options.onVersionInfo({
                local: versionA,
                server: versionB
              });
              let vA = versionA.split('.');
              let vB = versionB.split('.');

              for (let i = 0; i < vA.length; ++i) {
                let a = parseInt(vA[i]);
                let b = parseInt(vB[i] || '0');

                if (a !== b) {
                  return a - b;
                }
              }

              if (vB.length > vA.length) {
                return -1;
              } else {
                return 0;
              }
            }); // 设置验证回调，如果验证通过，则返回true，否则返回false

            this.assetsMgr.setVerifyCallback((path, asset) => {
              // 压缩资源时，我们不需要检查其md5，因为zip文件已被删除
              var compressed = asset.compressed; // 检索正确的md5值

              var expectedMD5 = asset.md5; // 资源路径是相对路径，路径是绝对路径

              var relativePath = asset.path; // 资源文件的大小，但此值可能不存在

              var size = asset.size;
              var resMD5 = (_crd && JSB_MD5 === void 0 ? (_reportPossibleCrUseOfJSB_MD({
                error: Error()
              }), JSB_MD5) : JSB_MD5)(native.fileUtils.getDataFromFile(path));
              console.log('path: ' + path + '\nresMD5:' + resMD5);
              return true;
            });
            var localManifest = this.assetsMgr.getLocalManifest();
            console.log('【热更新】热更资源存放路径: ' + this.storagePath);
            console.log('【热更新】本地资源配置路径: ' + this.manifest);
            console.log('【热更新】本地包地址: ' + localManifest.getPackageUrl());
            console.log('【热更新】远程 project.manifest 地址: ' + localManifest.getManifestFileUrl());
            console.log('【热更新】远程 version.manifest 地址: ' + localManifest.getVersionFileUrl());
            this.checkUpdate();
          });
        }
        /** 删除热更所有存储文件 */


        clearHotUpdateStorage() {
          native.fileUtils.removeDirectory(this.storagePath);
        } // 检查更新


        checkUpdate() {
          if (!this.assetsMgr) {
            console.log('【热更新】请先初始化');
            return;
          }

          if (this.assetsMgr.getState() === jsb.AssetsManager.State.UNINITED) {
            error('【热更新】未初始化');
            return;
          }

          if (!this.assetsMgr.getLocalManifest().isLoaded()) {
            console.log('【热更新】加载本地 manifest 失败 ...');
            return;
          }

          this.assetsMgr.setEventCallback(this.onHotUpdateCallBack.bind(this));
          this.state = Hot.State.Check; // 下载version.manifest，进行版本比对

          this.assetsMgr.checkUpdate();
        }
        /** 开始更热 */


        hotUpdate() {
          if (!this.assetsMgr) {
            console.log('【热更新】请先初始化');
            return;
          }

          this.assetsMgr.setEventCallback(this.onHotUpdateCallBack.bind(this));
          this.state = Hot.State.Update;
          this.assetsMgr.update();
        }

        onHotUpdateCallBack(event) {
          var _this$options2, _this$options3;

          let code = event.getEventCode();

          switch (code) {
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
              console.log("【热更新】当前版本与远程版本一致且无须更新");
              ((_this$options2 = this.options) == null ? void 0 : _this$options2.onNoNeedToUpdate) && this.options.onNoNeedToUpdate(code);
              break;

            case native.EventAssetsManager.NEW_VERSION_FOUND:
              console.log('【热更新】发现新版本,请更新');
              ((_this$options3 = this.options) == null ? void 0 : _this$options3.onNeedToUpdate) && this.options.onNeedToUpdate(code, this.assetsMgr.getTotalBytes());
              break;

            case native.EventAssetsManager.ASSET_UPDATED:
              console.log('【热更新】资产更新');
              break;

            case native.EventAssetsManager.UPDATE_PROGRESSION:
              if (this.state === Hot.State.Update) {
                var _this$options4;

                // event.getPercent();
                // event.getPercentByFile();
                // event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
                // event.getDownloadedBytes() + ' / ' + event.getTotalBytes();
                console.log('【热更新】更新中...', event.getDownloadedFiles(), event.getTotalFiles(), event.getPercent());
                ((_this$options4 = this.options) == null ? void 0 : _this$options4.onUpdateProgress) && this.options.onUpdateProgress(event);
              }

              break;

            case native.EventAssetsManager.UPDATE_FINISHED:
              this.onUpdateFinished();
              break;

            default:
              this.onUpdateFailed(code);
              break;
          }
        }

        onUpdateFailed(code) {
          var _this$options5;

          this.assetsMgr.setEventCallback(null);
          ((_this$options5 = this.options) == null ? void 0 : _this$options5.onUpdateFailed) && this.options.onUpdateFailed(code);
        }

        onUpdateFinished() {
          var _this$options6;

          this.assetsMgr.setEventCallback(null);
          let searchPaths = native.fileUtils.getSearchPaths();
          let newPaths = this.assetsMgr.getLocalManifest().getSearchPaths();
          Array.prototype.unshift.apply(searchPaths, newPaths);
          localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
          native.fileUtils.setSearchPaths(searchPaths);
          console.log('【热更新】更新成功');
          ((_this$options6 = this.options) == null ? void 0 : _this$options6.onUpdateSucceed) && this.options.onUpdateSucceed();
        }

        showSearchPath() {
          console.log("========================搜索路径========================");
          let searchPaths = native.fileUtils.getSearchPaths();

          for (let i = 0; i < searchPaths.length; i++) {
            console.log("[" + i + "]: " + searchPaths[i]);
          }

          console.log("======================================================");
        }

      });

      Hot.State = {
        None: 0,
        Check: 1,
        Update: 2
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ebb2f4da69128c6baafd1f5fbbbc633ce6fa02da.js.map