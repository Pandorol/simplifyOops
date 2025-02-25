System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, oops, AudioEffectPool, AudioMusic, AudioManager, _crd, LOCAL_STORE_KEY;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioEffectPool(extras) {
    _reporterNs.report("AudioEffectPool", "./AudioEffectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMusic(extras) {
    _reporterNs.report("AudioMusic", "./AudioMusic", _context.meta, extras);
  }

  _export("AudioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      AudioEffectPool = _unresolved_3.AudioEffectPool;
    }, function (_unresolved_4) {
      AudioMusic = _unresolved_4.AudioMusic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "252f0z+vPNL8Y/jsLYmomtw", "AudioManager", undefined); //cpall


      __checkObsolete__(['AudioClip', 'Component']);

      LOCAL_STORE_KEY = "game_audio";
      /**
       * 音频管理
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037893&doc_id=2873565
       * @example
       // 模块功能通过 oops.audio 调用
       oops.audio.playMusic("audios/nocturne");
       */

      _export("AudioManager", AudioManager = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          /** 背景音乐管理对象 */
          this.music = null;

          /** 音效管理对象 */
          this.effect = new (_crd && AudioEffectPool === void 0 ? (_reportPossibleCrUseOfAudioEffectPool({
            error: Error()
          }), AudioEffectPool) : AudioEffectPool)();

          /** 音乐管理状态数据 */
          this.local_data = {};
        }

        /**
         * 设置背景音乐播放完成回调
         * @param callback 背景音乐播放完成回调
         */
        setMusicComplete(callback) {
          if (callback === void 0) {
            callback = null;
          }

          this.music.onComplete = callback;
        }
        /**
         * 播放背景音乐
         * @param url        资源地址
         * @param callback   音乐播放完成事件
         * @param bundleName 资源包名
         */


        playMusic(url, callback, bundleName) {
          if (this.music.switch) {
            this.music.loop = false;
            this.music.load(url, callback, bundleName).then();
          }
        }
        /** 循环播放背景音乐 */


        playMusicLoop(url, bundleName) {
          if (this.music.switch) {
            this.music.loop = true;
            this.music.load(url, null, bundleName).then();
          }
        }
        /** 停止背景音乐播放 */


        stopMusic() {
          if (this.music.switch && this.music.playing) {
            this.music.stop();
          }
        }
        /**
         * 获取背景音乐播放进度
         */


        get progressMusic() {
          return this.music.progress;
        }
        /**
         * 设置背景乐播放进度
         * @param value     播放进度值
         */


        set progressMusic(value) {
          this.music.progress = value;
        }
        /**
         * 获取背景音乐音量
         */


        get volumeMusic() {
          return this.music.volume;
        }
        /**
         * 设置背景音乐音量
         * @param value     音乐音量值
         */


        set volumeMusic(value) {
          this.music.volume = value;
          this.save();
        }
        /**
         * 获取背景音乐开关值
         */


        get switchMusic() {
          return this.music.switch;
        }
        /**
         * 设置背景音乐开关值
         * @param value     开关值
         */


        set switchMusic(value) {
          this.music.switch = value;
          if (!value) this.music.stop();
          this.save();
        }
        /**
         * 播放音效
         * @param url        资源地址
         * @param callback   加载完成回调
         * @param bundleName 资源包名
         */


        playEffect(url, bundleName, onPlayComplete) {
          return this.effect.load(url, bundleName, onPlayComplete);
        }
        /** 回收音效播放器 */


        putEffect(aeid, url, bundleName) {
          this.effect.put(aeid, url, bundleName);
        }
        /** 获取音效音量 */


        get volumeEffect() {
          return this.effect.volume;
        }
        /**
         * 设置获取音效音量
         * @param value     音效音量值
         */


        set volumeEffect(value) {
          this.effect.volume = value;
          this.save();
        }
        /** 获取音效开关值 */


        get switchEffect() {
          return this.effect.switch;
        }
        /**
         * 设置音效开关值
         * @param value     音效开关值
         */


        set switchEffect(value) {
          this.effect.switch = value;
          if (!value) this.effect.stop();
          this.save();
        }
        /** 恢复当前暂停的音乐与音效播放 */


        resumeAll() {
          if (!this.music.playing && this.music.progress > 0) this.music.play();
          this.effect.play();
        }
        /** 暂停当前音乐与音效的播放 */


        pauseAll() {
          if (this.music.playing) this.music.pause();
          this.effect.pause();
        }
        /** 停止当前音乐与音效的播放 */


        stopAll() {
          this.music.stop();
          this.effect.stop();
        }
        /** 保存音乐音效的音量、开关配置数据到本地 */


        save() {
          this.local_data.volume_music = this.music.volume;
          this.local_data.volume_effect = this.effect.volume;
          this.local_data.switch_music = this.music.switch;
          this.local_data.switch_effect = this.effect.switch;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.set(LOCAL_STORE_KEY, this.local_data);
        }
        /** 本地加载音乐音效的音量、开关配置数据并设置到游戏中 */


        load() {
          this.music = this.getComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
            error: Error()
          }), AudioMusic) : AudioMusic) || this.addComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
            error: Error()
          }), AudioMusic) : AudioMusic);
          this.local_data = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.getJson(LOCAL_STORE_KEY);

          if (this.local_data) {
            try {
              this.setState();
            } catch (_unused) {
              this.setStateDefault();
            }
          } else {
            this.setStateDefault();
          }
        }

        setState() {
          this.music.volume = this.local_data.volume_music;
          this.effect.volume = this.local_data.volume_effect;
          this.music.switch = this.local_data.switch_music;
          this.effect.switch = this.local_data.switch_effect;
        }

        setStateDefault() {
          this.local_data = {};
          this.music.volume = 1;
          this.effect.volume = 1;
          this.music.switch = true;
          this.effect.switch = true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07fcd3d613a25d181e51bc6c76eb4d3467ace9bb.js.map