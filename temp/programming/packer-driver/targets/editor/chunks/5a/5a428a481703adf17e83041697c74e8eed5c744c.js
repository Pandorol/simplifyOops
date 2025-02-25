System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, WsFunc, _crd;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../core/Oops", _context.meta, extras);
  }

  _export("WsFunc", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5139cs22hZLE6/MO/KWc7ZO", "WsFunc", undefined);

      _export("WsFunc", WsFunc = class WsFunc {
        static doWithFunc(data) {
          let msgType = data.msgType;
          let msgData = data.msgData;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).log.logNet('socket通知消息', data);

          switch (msgType) {
            case "msgUserOffline":
              //用户下线通知
              WsFunc.msgUserOffline(msgData);
              break;

            case "msgIdiomResult":
              //成语答题超时
              // window.eventBus.pos(window.eventContant.IDIOMANSWEROUTTIME, data);
              break;

            case "msgPoetryResult":
              //诗词答题超时
              // window.eventBus.pos(window.eventContant.EVALUATEANSWEROUTTIME, msgData);
              break;

            case "msgContestPlayerJoin":
              //擂台赛学生加入房间
              // window.eventBus.pos(window.eventContant.MATCHJOINPLAYER, data);
              break;

            case "msgContestMatchBegin":
              //擂台赛开始
              // window.eventBus.pos(window.eventContant.MATCHBEGIN, data);
              //打开擂台赛加载页面
              // uiFunc.openUI(viewContant.ARENALOADING);
              break;

            case "msgEvaluateResult":
              //评测答题超时
              // window.eventBus.pos(window.eventContant.EVALUATEANSWEROUTTIME, msgData);
              break;

            case "msgExamResult":
              //考试答题超时
              // window.eventBus.pos(window.eventContant.EVALUATEANSWEROUTTIME, msgData);
              break;

            case "matchPeopleNumBroadcast":
              //比赛报名人数广播
              // window.eventBus.pos(window.eventContant.MATCHPEOPLENUMBROADCAST, msgData);
              break;

            case "matchBeginBroadcast":
              //比赛开始广播
              // window.eventBus.pos(window.eventContant.MATCHBEGINBROADCAST, msgData);
              break;

            case "matchStatusBroadcast":
              // window.eventBus.pos(window.eventContant.MATCHSTATUSBROADCAST, msgData);
              break;

            case "matchSelectionScoreBroadcast":
              //选拔赛比分广播
              // window.eventBus.pos(window.eventContant.MATCHSELECTIONSCOREBROADCAST, msgData);
              break;

            case "matchEliminationScoreBroadcast":
              //淘汰赛比分广播
              // window.eventBus.pos(window.eventContant.MATCHELIMINATIONSCOREBROADCAST, msgData);
              break;

            case "matchPassedBroadcast":
              //比赛晋级广播
              // window.eventBus.pos(window.eventContant.MATCHPASSEDBROADCAST, msgData);
              break;

            case "matchChampionBroadcast":
              //比赛冠军广播
              // window.eventBus.pos(window.eventContant.MATCHCHAMPIONBROADCAST, msgData);
              break;

            case "matchPKResultBroadcast":
              //比赛对阵结果广播
              // window.eventBus.pos(window.eventContant.MATCHPKRESULTBROADCAST, msgData);
              break;

            case "matchAnswerBroadcast":
              //比赛答题广播
              // window.eventBus.pos(window.eventContant.MATCHANSWERBROADCAST, msgData);
              break;

            case "msgEvaluateReload":
              //考试答题重连
              // window.eventBus.pos(window.eventContant.MSGEVALUATERELOAD, msgData);
              break;

            case "msgContestAnswer":
              //擂台赛答题通知
              // window.eventBus.pos(window.eventContant.MSGCONTESTANSWER, msgData);
              break;

            case "msgContestEnd":
              //擂台赛答题结束通知
              // window.eventBus.pos(window.eventContant.MSGCONTESTEND, msgData);
              break;

            case "matchAnswerEndBroadcast":
              //比赛赛答题结束通知
              // window.eventBus.pos(window.eventContant.MSGCONTESTEND, msgData);
              break;

            case "msgTrainCampResult":
              //答题超时
              // window.eventBus.pos(window.eventContant.EVALUATEANSWEROUTTIME, msgData);
              break;

            case "msgAbilityExamResult":
              //答题超时
              // window.eventBus.pos(window.eventContant.MSGABILITYEXAMRESULT, msgData);
              break;

            case "msgAbilityExamReload":
              //答题重连
              // window.eventBus.pos("msgAbilityExamReload", msgData);
              break;

            case "msgFoundationTrainResult":
              // window.eventBus.pos(window.eventContant.FOUNDATIONTRAINRESULT, msgData);
              break;

            case "msgProExamResult":
              // window.eventBus.pos(window.eventContant.MSGPROEXAMRESULT, msgData);
              break;

            case "msgProExamReload":
              //名试卷考试重连
              // window.eventBus.pos(window.eventContant.MSGEVALUATERELOAD, msgData);
              break;

            case "msgTrialsResult":
              //阅读pk赛答题通知
              // window.eventBus.pos(window.eventContant.MSGTRIALSRESULT, msgData);
              break;

            case "msgRacePoetryResult":
              //活动的诗词擂台结果通知
              // window.eventBus.pos(window.eventContant.MSGRACEPOETRYRESULT, msgData);
              break;

            case "msgRaceIdiomResult":
              //活动的成语擂台结果通知
              // window.eventBus.pos(window.eventContant.MSGRACEIDIOMRESULT, msgData);
              break;

            case "msgRaceExamResult":
              //活动的整本书评测结果通知
              // window.eventBus.pos(window.eventContant.MSGRACEEXAMRESULT, msgData);
              break;

            case "rankMatchBeginBroadcast":
              //选拔赛比赛开始广播
              // window.eventBus.pos(window.eventContant.RANKMATCHBEGINBROADCAST, msgData);
              break;

            case "rankMatchStatusBroadcast":
              //选拔赛比赛状态改变广播
              // window.eventBus.pos(window.eventContant.RANKMATCHSTATUSBROADCAST, msgData);
              break;

            case "rankMatchPeopleNumBroadcast":
              //选拔赛比赛报名人数广播
              // window.eventBus.pos(window.eventContant.RANKMATCHPEOPLENUMBROADCAST, msgData);
              break;

            case "rankMatchChampionBroadcast":
              //选拔赛比赛冠军广播
              //  window.eventBus.pos(window.eventContant.RANKMATCHCHAMPIONBROADCAST, msgData);
              break;

            case "rankMatchPassedBroadcast":
              //选拔赛-比赛晋级广播
              // window.eventBus.pos(window.eventContant.RANKMATCHPASSEDBROADCAST, msgData);
              break;

            case "rankMatchSelectionScoreBroadcast":
              //选拔赛-比分广播
              // window.eventBus.pos(window.eventContant.RANKMATCHSELECTIONSCOREBROADCAST, msgData);
              break;

            case "rankMatchEliminationScoreBroadcast":
              //选拔赛-淘汰比分广播
              // window.eventBus.pos(window.eventContant.RANKMATCHELIMINATIONSCOREBROADCAST, msgData);
              break;

            case "rankMatchAnswerBroadcast":
              //选拔赛-答题广播
              // window.eventBus.pos(window.eventContant.RANKMATCHANSWERBROADCAST, msgData);
              break;

            case "rankMatchAnswerEndBroadcast":
              //比赛赛答题结束通知
              // window.eventBus.pos(window.eventContant.RANKMSGCONTESTEND, msgData);
              break;

            case "msgPatyExamResult":
              //福袋答题结束通知
              // window.eventBus.pos(window.eventContant.PATYEXAMRESULT, msgData);
              break;

            default:
              break;
          }
        }

        static msgUserOffline(data) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a428a481703adf17e83041697c74e8eed5c744c.js.map