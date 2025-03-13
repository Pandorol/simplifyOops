import { _decorator } from 'cc';
import { oops } from 'db://assets/core/Oops';
import VMParent from 'db://assets/libs/model-view/VMParent';
import { UIID } from '../UIConfig';
const { ccclass, property } = _decorator;

@ccclass('uiloadingbundle')
export class uiloadingbundle extends VMParent {
    /** VM 组件绑定数据 */
    data: any = {
        /** 加载资源当前进度 */
        finished: 0,
        /** 加载资源最大进度 */
        total: 0,
        /** 加载资源进度比例值 */
        progress: "0",
        /** 加载流程中提示文本 */
        prompt: ""
    };
    private progress: number = 0;
    start() {


        // oops.res.loadBundle()
        oops.gui.open(UIID.Login);

        oops.gui.removeByNode(this.node);
    }

    update(deltaTime: number) {

    }
}


