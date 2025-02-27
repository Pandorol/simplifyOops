import { oops } from '../../core/Oops';
export class WsFunc {
    static doWithFunc(data) {
        let msgType = data.msgType;
        let msgData = data.msgData;
        oops.log.logNet('socket通知消息', data);
        switch (msgType) {
            case "msgUserOffline":
                //用户下线通知
                WsFunc.msgUserOffline(msgData);
                break;

            default:
                break;
        }
    }
    static msgUserOffline(data) {

    }
}
