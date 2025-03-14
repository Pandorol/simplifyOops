import { _decorator, sys, WebView } from 'cc';
import { GameComponent } from 'db://assets/module/common/GameComponent';
import { UIID } from 'db://assets/work/ui/UIConfig';
import { oops } from '../../../../core/Oops';
const { ccclass, property } = _decorator;

@ccclass('ab1uivideoView')
export class ab1uivideoView extends GameComponent {
    mvideo: any;

    // 保存浏览器环境下绑定后的回调函数
    private _boundBrowserMessage: (res: MessageEvent) => void = null;
    start() {
        this.nodeTreeInfoLite()
        var scheme = "sxlm";
        // 使用可选参数或适配类型
        const jsCallback = (target?: any, url?: any) => {
            try {
                oops.gui.remove(UIID.VideoView);
                const str = url?.replace(`${scheme}://`, '');
                oops.log.logNet('客户端返回信息=', JSON.stringify(str));
            } catch (e) {
                // 处理异常
            }
        };
        if (sys.isBrowser) {
            // 绑定并保存事件处理函数
            this._boundBrowserMessage = this.browserMessage.bind(this);
            window.addEventListener('message', this._boundBrowserMessage);
        }
        else if ((sys.platform === sys.Platform.WECHAT_GAME) || (sys.platform === sys.Platform.WECHAT_MINI_PROGRAM)) {
            try {

                let systemInfo = wx.getWindowInfo();
                let screenWidth = systemInfo.windowWidth;
                let screenHeight = systemInfo.windowHeight;
                // 设定你希望的视频宽高
                let videoWidth = screenWidth * 0.6; // 单位：px
                let videoHeight = screenHeight * 0.6; // 单位：px// 获取屏幕尺寸

                let x = (screenWidth - videoWidth) / 2
                let y = (screenHeight - videoHeight) / 2
                // 创建视频组件
                //@ts-ignore
                this.mvideo = wx.createVideo({
                    src: '',
                    autoplay: true,    // 自动播放
                    loop: false,       // 不循环
                    controls: true,    // 显示控制条
                    fullScreen: true,  // 全屏播放
                    width: videoWidth,
                    height: videoHeight,
                    x: x,
                    y: y
                });
                // this.mvideo.requestFullScreen(90)
            }
            catch {

            }
        }
        else {

            this.getNode("m_Webview").getComponent(WebView).setJavascriptInterfaceScheme(scheme);
            this.getNode("m_Webview").getComponent(WebView).setOnJSCallback(jsCallback);
        }

        this.setUrl("https://answer.sxwychina.com/details/html/newVideo.html?userId=446082908789821440&microVideoId=906716509433921536&videoUrl=https://pc.sxwychina.com/microVideo/906716509433921536/938577884867100672.mp4&type=6")
    }

    update(deltaTime: number) {

    }
    browserMessage(res: MessageEvent) {
        oops.gui.remove(UIID.VideoView);
        const jsonData: any = {};
        if (typeof res.data === 'string' && res.data.indexOf('isPlaySuccess=') > -1) {
            res.data.split('&').forEach(o => {
                const keyValue = o.split('=');
                jsonData[keyValue[0]] = decodeURI(keyValue[1]);
            });
        }
    }
    setUrl(url) {
        this.getNode("m_Webview").getComponent(WebView).url = url

    }
    onBeforeRemove() {
        if ((sys.platform === sys.Platform.WECHAT_GAME) || (sys.platform === sys.Platform.WECHAT_MINI_PROGRAM)) {
            try {
                this.mvideo.destroy()
            }
            catch {

            }
        }
        else if (sys.isBrowser) {
            window.removeEventListener('message', this._boundBrowserMessage)
        }
    }
}


