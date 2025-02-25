System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioSource, _decorator, _dec, _class, _crd, ccclass, AudioEffect;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioSource = _cc.AudioSource;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", undefined); //cpall


      __checkObsolete__(['AudioSource', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /** 游戏音效 */

      _export("AudioEffect", AudioEffect = (_dec = ccclass('AudioEffect'), _dec(_class = class AudioEffect extends AudioSource {
        constructor() {
          super(...arguments);

          /** 背景音乐播放完成回调 */
          this.onComplete = null;
        }

        start() {
          this.node.on(AudioSource.EventType.ENDED, this.onAudioEnded, this);
        }

        onAudioEnded() {
          this.onComplete && this.onComplete();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcd933dd16f7b29cd927de48f079ac113bd68978.js.map