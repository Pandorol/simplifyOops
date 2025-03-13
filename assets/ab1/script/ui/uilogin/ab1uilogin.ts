import { _decorator, EventTouch } from 'cc';
import VMParent from 'db://assets/libs/model-view/VMParent';
import { UIID } from 'db://assets/work/ui/UIConfig';
import { oops } from '../../../../core/Oops';
const { ccclass, property } = _decorator;

@ccclass('ab1uilogin')
export class ab1uilogin extends VMParent {

    start() {
        this.setButton();
    }

    update(deltaTime: number) {

    }
    TestButton(event: EventTouch) {
        oops.log.logBusiness("TestButtonClick")
        oops.gui.open(UIID.PhotoImg, { toptip: oops.language.getLangByID("takephotoPermissionTip") })

    }
}


