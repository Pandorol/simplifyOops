import { _decorator, EventTouch } from 'cc';
import { oops } from 'db://assets/core/Oops';
import VMParent from 'db://assets/libs/model-view/VMParent';
import { PermissionManager } from 'db://assets/work/utils/PermissionManager';
const { ccclass, property } = _decorator;

@ccclass('ab1uiAddImgTip')
export class ab1uiAddImgTip extends VMParent {
    start() {
        this.nodeTreeInfoLite()
        this.setButton();

        oops.log.logBusiness(this)
    }

    update(deltaTime: number) {

    }
    onAdded(params: any) {
        this.data.tipLabel = params.toptip ? params.toptip : oops.language.getLangByID("takephotoPermissionTip")
        this.data.imgSelectMode = params.imgSelectMode ? params.imgSelectMode : "0"
        this.data.imgQuality = params.imgQuality ? params.imgQuality : "70"
    }
    async btnphoto(event: EventTouch) {
        let haspermission = await PermissionManager.checkPermission(PermissionManager.StrPermission.android.CAMERA)
        oops.gui.toast(String(haspermission))
        if (!haspermission) {
            PermissionManager.requestPermission(PermissionManager.StrPermission.android.CAMERA)
        }
        else {
            PermissionManager.setSelectImgOptions({ mode: "0", quality: this.data.imgQuality })
            PermissionManager.openCamera()
        }

    }

    async btnimg(event: EventTouch) {
        let haspermission = await PermissionManager.checkGalleryPermission()
        oops.gui.toast(String(haspermission))
        if (!haspermission) {
            PermissionManager.requestGalleryPermission()
        }
        else {
            PermissionManager.setSelectImgOptions({ mode: this.data.imgSelectMode, quality: this.data.imgQuality })
            PermissionManager.openAlbum()
        }
    }
    bg_close(event: EventTouch) {
        oops.gui.removeByNode(this.node)
    }
}


