System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, _decorator, resLoader, _dec, _class, _crd, ccclass, menu, AudioMusic;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", undefined); //cpall


      __checkObsolete__(['AudioClip', 'AudioSource', '_decorator']);

      ({
        ccclass,
        menu
      } = _decorator);
      /** 
       * 背景音乐 
       * 1、播放一个新背景音乐时，先加载音乐资源，然后停止正在播放的背景资源同时施放当前背景音乐资源，最后播放新的背景音乐
       */

      _export("AudioMusic", AudioMusic = (_dec = ccclass('AudioMusic'), _dec(_class = class AudioMusic extends AudioSource {
        constructor() {
          super(...arguments);

          /** 背景音乐开关 */
          this.switch = true;

          /** 背景音乐播放完成回调 */
          this.onComplete = null;
          this._progress = 0;
          this._isLoading = false;
          this._nextBundleName = null;
          // 下一个音乐资源包
          this._nextUrl = null;
        }

        // 下一个播放音乐
        start() {
          // this.node.on(AudioSource.EventType.STARTED, this.onAudioStarted, this);
          this.node.on(AudioSource.EventType.ENDED, this.onAudioEnded, this);
        } // private onAudioStarted() { }


        onAudioEnded() {
          this.onComplete && this.onComplete();
        }
        /** 获取音乐播放进度 */


        get progress() {
          if (this.duration > 0) this._progress = this.currentTime / this.duration;
          return this._progress;
        }
        /**
         * 设置音乐当前播放进度
         * @param value     进度百分比0到1之间
         */


        set progress(value) {
          this._progress = value;
          this.currentTime = value * this.duration;
        }
        /**
         * 加载音乐并播放
         * @param url          音乐资源地址
         * @param callback     加载完成回调
         * @param bundleName   资源包名
         */


        load(url, callback, bundleName) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (bundleName === void 0) {
              bundleName = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).defaultBundleName;
            }

            // 下一个加载的背景音乐资源
            if (_this._isLoading) {
              _this._nextBundleName = bundleName;
              _this._nextUrl = url;
              return;
            }

            _this._isLoading = true;
            var data = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadAsync(bundleName, url, AudioClip);

            if (data) {
              _this._isLoading = false; // 处理等待加载的背景音乐

              if (_this._nextUrl != null) {
                // 加载等待播放的背景音乐
                _this.load(_this._nextUrl, callback, _this._nextBundleName);

                _this._nextBundleName = _this._nextUrl = null;
              } else {
                callback && callback(); // 正在播放的时候先关闭

                if (_this.playing) {
                  _this.stop();
                } // 删除当前正在播放的音乐


                _this.release(); // 播放背景音乐


                _this.clip = data;

                _this.play();
              }
            }
          })();
        }
        /** 释放当前背景音乐资源 */


        release() {
          if (this.clip) {
            this.stop();
            this.clip.decRef();
            this.clip = null;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2089e9481dde7baa92a2ae0f49d7941372d29026.js.map