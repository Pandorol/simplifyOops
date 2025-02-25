System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, Node, NodePool, oops, resLoader, AudioEffect, AudioEffectPool, _crd, AE_ID_MAX;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioEffect(extras) {
    _reporterNs.report("AudioEffect", "./AudioEffect", _context.meta, extras);
  }

  _export("AudioEffectPool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      AudioEffect = _unresolved_4.AudioEffect;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01278BDjrtCr4CBpmO5DZlN", "AudioEffectPool", undefined); //cpall


      __checkObsolete__(['AudioClip', 'Node', 'NodePool']);

      AE_ID_MAX = 30000;
      /** 音效池 */

      _export("AudioEffectPool", AudioEffectPool = class AudioEffectPool {
        constructor() {
          this._switch = true;
          this._volume = 1;

          /** 音效播放器对象池 */
          this.pool = new NodePool();

          /** 对象池集合 */
          this.effects = new Map();

          /** 用过的音效资源记录 */
          this.res = new Map();
          this._aeId = 0;
        }

        /** 音效开关 */
        get switch() {
          return this._switch;
        }

        set switch(value) {
          this._switch = value;
          if (value) this.stop();
        }

        /** 所有音效音量 */
        get volume() {
          return this._volume;
        }

        set volume(value) {
          this._volume = value;
          this.effects.forEach(ae => {
            ae.volume = value;
          });
        }

        /** 获取请求唯一编号 */
        getAeId() {
          if (this._aeId == AE_ID_MAX) this._aeId = 1;
          this._aeId++;
          return this._aeId;
        }
        /**
         * 加载与播放音效
         * @param url                  音效资源地址与音效资源
         * @param bundleName           资源包名
         * @param onPlayComplete       播放完成回调
         * @returns 
         */


        async load(url, bundleName = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
          error: Error()
        }), resLoader) : resLoader).defaultBundleName, onPlayComplete) {
          return new Promise(async (resolve, reject) => {
            if (!this.switch) return resolve(-1);
            let aeid = this.getAeId();
            let key;

            if (url instanceof AudioClip) {
              key = url.uuid;
            } else {
              key = `${bundleName}_${url}`;
            }

            key += "_" + aeid; // 创建音效资源

            let clip;

            if (url instanceof AudioClip) {
              clip = url;
            } else {
              clip = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).get(url, AudioClip, bundleName);

              if (!clip) {
                this.res.set(bundleName, url);
                clip = await (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                  error: Error()
                }), resLoader) : resLoader).loadAsync(bundleName, url, AudioClip);
              }
            } // 获取音效果播放器播放音乐


            let ae;
            let node = null;

            if (this.pool.size() == 0) {
              node = new Node();
              node.name = "AudioEffect";
              node.parent = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).audio.node;
              ae = node.addComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
                error: Error()
              }), AudioEffect) : AudioEffect);
            } else {
              node = this.pool.get();
              ae = node.getComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
                error: Error()
              }), AudioEffect) : AudioEffect);
            }

            ae.onComplete = () => {
              this.put(aeid, url, bundleName); // 播放完回收对象

              onPlayComplete && onPlayComplete(); // console.log(`【音效】回收，池中剩余音效播放器【${this.pool.size()}】`);
            }; // 记录正在播放的音效播放器


            this.effects.set(key, ae);
            ae.volume = this.volume;
            ae.clip = clip;
            ae.play();
            resolve(aeid);
          });
        }
        /**
         * 回收音效播放器
         * @param aeid          播放器编号
         * @param url           音效路径
         * @param bundleName    资源包名
         */


        put(aeid, url, bundleName = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
          error: Error()
        }), resLoader) : resLoader).defaultBundleName) {
          let key;

          if (url instanceof AudioClip) {
            key = url.uuid;
          } else {
            key = `${bundleName}_${url}`;
          }

          key += "_" + aeid;
          let ae = this.effects.get(key);

          if (ae && ae.clip) {
            this.effects.delete(key);
            ae.stop();
            this.pool.put(ae.node);
          }
        }
        /** 释放所有音效资源与对象池中播放器 */


        release() {
          // 释放正在播放的音效
          this.effects.forEach(ae => {
            ae.node.destroy();
          });
          this.effects.clear(); // 释放音效资源

          this.res.forEach((url, bundleName) => {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).release(bundleName, url);
          }); // 释放池中播放器

          this.pool.clear();
        }
        /** 停止播放所有音效 */


        stop() {
          this.effects.forEach(ae => {
            ae.stop();
          });
        }
        /** 恢复所有音效 */


        play() {
          if (!this.switch) return;
          this.effects.forEach(ae => {
            ae.play();
          });
        }
        /** 暂停所有音效 */


        pause() {
          if (!this.switch) return;
          this.effects.forEach(ae => {
            ae.pause();
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5bd409222ac874f1a689b030649813c048a188d7.js.map