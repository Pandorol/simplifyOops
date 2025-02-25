
import { game } from "cc";
import { oops } from '../../core/Oops';
import { WsFunc } from "./WsFunc";
var WebSocket = WebSocket || window.WebSocket;
export class WsNet {
    sock = null
    isConnected = false
    lockReconnect = false
    initFlag = true
    wsUrl = null
    timeout = 10000 //10秒
    respTimeout = 30000 //30秒
    timeoutObj = null
    serverTimeoutObj = null
    reConnectTimeoutObj = null
    reConnectTryNum = 0 //重连重试次数
    maxReconnectTimes = 10	// 最大重连次数，超过这个次数，执行restart

    _on_opened(event) {
        console.log("ws connect server success");

        if (!this.initFlag) {
            oops.log.logNet("重连成功！")
            // util.showAlert("重连成功！");
        }
        this.reConnectTryNum = 0;
        this.isConnected = true;
        this.initFlag = false;
        this.clearAllTimeout();
        this.heartCheckAllStart();
        oops.message.dispatchEvent("SOCKET_CONNECT_SUCCESS", event)
        // window.eventBus.pos(window.eventContant.SOCKET_CONNECT_SUCCESS);
    }

    _on_recv_data(event) {
        // console.log('socket通知消息111', event);
        var recvMsg = event.data;
        if (null == recvMsg || 0 == recvMsg.length) {
            console.log("消息为空，不处理");
            return;
        }
        //不管收到什么消息，则直接进行重置心跳包应答检测定时任务
        this.heartRespCheckReset();
        this.heartRespCheckStart();
        //判断是否是心跳包
        if ("true" == recvMsg) {
            return;
        }
        oops.log.logNet(recvMsg);

        //处理业务
        recvMsg = JSON.parse(recvMsg);
        var msgType = recvMsg.msgType;
        if (null == msgType || 0 == msgType.length) {
            oops.log.logNet("消息类型不存在");
            return;
        }
        this.doWithFunc(recvMsg);
    }

    _on_socket_close(event) {
        if (this.sock) {
            this.close();
            console.log("ws connect server close -------------");
        }
        if (!this.initFlag) {
            //若是已连接后断开，则进行重连
            //未连接，则不进行重连
            this.reConnect();
        }
    }

    _on_socket_err(event) {
        if (this.sock) {
            this.close();
            console.log("ws connect server " + event);
        }
        this.reConnect();
    }

    connect(url) {
        this.wsUrl = url;
        oops.log.logNet("websockt连接:" + this.wsUrl);
        this.sock = new WebSocket(this.wsUrl);

        this.sock.onopen = this._on_opened.bind(this);
        this.sock.onmessage = this._on_recv_data.bind(this);
        this.sock.onclose = this._on_socket_close.bind(this);
        this.sock.onerror = this._on_socket_err.bind(this);
    }
    //断线重连
    reConnect(tipText = "") {
        var self = this;
        oops.log.logNet("ws reConnect 断线重连" + self.lockReconnect);
        if (self.lockReconnect) return;
        if (self.reConnectTryNum > self.maxReconnectTimes) {
            oops.log.logNet("ws reconnect fail");
            //多次重连失败，退出到登录界面
            // if(uiFunc.findUI("uiLoading/uiWaitting")){
            // 	uiFunc.closeUI("uiLoading/uiWaitting");
            // }
            // this.initWs();
            // //关闭所有界面
            // uiFunc.closeAllUI();
            // //打开登录界面
            // uiFunc.openUI(viewContant.LOGIN);
            oops.gui.toast("网络连接失败，请检查网络后重新登录");
            setTimeout(() => {
                game.restart();
            }, 1500);

            return;
        }
        self.lockReconnect = true;
        self.reConnectTryNum += 1;
        // if (window.openReconnectTip == 1) {
        //     uiFunc.openTip("uiLoading/uiWaitting", null, { text: tipText ? tipText : "您的网络环境出现波动，请检查网络" });
        // }
        //没连接上会一直重连，设置延迟避免请求过多
        if (self.reConnectTimeoutObj) clearTimeout(self.reConnectTimeoutObj);
        self.reConnectTimeoutObj = setTimeout(function () {
            oops.log.logNet("ws reconnect server...");
            self.connect(self.wsUrl);
            self.lockReconnect = false;
        }, 2000);
    }

    //发送
    send(buf) {
        if (!this.sock || !this.isConnected) {
            return;
        }
        this.sock.send(buf);
    }

    /**
     * isClear 清空后回到未连接状态 不会进行重连(比如退出登录的时候)
     */
    close(isClear = false) {
        oops.log.logNet("关闭ws链路");
        if (isClear) {
            this.clearAllTimeout();
            if (this.sock !== null) {
                this.sock.onclose = function () { };
                this.sock.onopen = function () { };
                this.sock.onerror = function () { };
                this.sock.onmessage = function () { };
            }
            this.initFlag = true;
            this.lockReconnect = false;
            this.wsUrl = null;
            this.timeoutObj = null;
            this.serverTimeoutObj = null;
            this.reConnectTimeoutObj = null;
            this.reConnectTryNum = 0;
        }

        this.isConnected = false;
        if (this.sock !== null) {
            this.sock.close();
            this.sock = null;
        }
    }
    //初始化链路
    initWs() {
        this.reConnectTryNum = 0;
        this.initFlag = true;
        //关闭定时器
        this.clearAllTimeout();
        //关闭链路
        this.close();
    }

    //心跳检测所有定时器
    heartCheckAllStart() {
        this.heartCheckStart();
        this.heartRespCheckStart();
    }

    //心跳检测
    heartCheckStart() {
        this.timeoutObj = setInterval(function () {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            this.send("ping");
        }, this.timeout)
    }

    //心跳应答检测
    heartRespCheckStart() {

        this.serverTimeoutObj = setTimeout(function () { //如果超过一定时间还没重置，说明后端主动断开了
            this.reConnect();
        }, this.respTimeout)
    }

    //心跳检测定时器重置
    heartCheckReset() {
        clearTimeout(this.timeoutObj);
        return this;
    }

    //心跳应答检测定时器重置
    heartRespCheckReset() {
        clearTimeout(this.serverTimeoutObj);
        return this;
    }
    //清除所有定时器
    clearAllTimeout() {
        //清除重连定时器
        clearTimeout(this.reConnectTimeoutObj);
        //清除心跳包定时器
        this.heartCheckReset();
        this.heartRespCheckReset();
        return this;
    }

    doWithFunc(data) {
        var msgType = data.msgType;
        //需要初始化链路的消息
        switch (msgType) {
            case "msgUserOffline":
                this.clearWs(data.msgData);
                break;
            default:
                break;
        }
        //调用业务脚本
        WsFunc.doWithFunc(data);
    }

    clearWs(data) {
        var userId = data.userId;
        if (userId != oops.storage.getUser()) {
            oops.log.logNet("非法用户报文，丢弃");
            return;
        }
        this.initWs();
    }

    isClose() {
        return !this.isConnected;
    }

    // /**
    //  * 注册连接成功回调
    //  * @param {*} callback 
    //  */
    // registerConnectSuccessCallback(callback){
    // 	this._connectServerSuccessFunc = callback;
    // }
}

