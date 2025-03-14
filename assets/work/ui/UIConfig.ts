import { LayerType, UIConfig } from "../../core/gui/layer/LayerManager";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum UIID {
    /** 资源加载界面 */
    Loading = 1,
    /** 提示弹出窗口 */
    Alert,
    /** 确认弹出窗口 */
    Confirm,
    /** 加载资源界面 */
    LoadingBundles,

    /** 测试登录界面 */
    Login,

    /** 测试拍照相册界面 */
    PhotoImg,

    /** 观看视频界面 */
    VideoView,
}

/** 打开界面方式的配置数据 */
export var UIConfigData: { [key: number]: UIConfig } = {
    [UIID.Loading]: { layer: LayerType.UI, prefab: "loading/prefab/loading", bundle: "resources" },
    [UIID.Alert]: { layer: LayerType.Dialog, prefab: "common/prefab/alert", mask: true },
    [UIID.Confirm]: { layer: LayerType.Dialog, prefab: "common/prefab/confirm", mask: true },
    [UIID.LoadingBundles]: { layer: LayerType.UI, prefab: "ui/uiloadingBundle/uiloindbundle" },
    [UIID.Login]: { layer: LayerType.UI, prefab: "ab1ui/ab1login/ab1Login", bundle: "ab1" },
    [UIID.PhotoImg]: { layer: LayerType.UI, prefab: "ab1ui/ab1addImgTip/ab1AddImgTip", bundle: "ab1" },
    [UIID.VideoView]: { layer: LayerType.PopUp, prefab: "ab1ui/ab1videoView/ab1VideoView", bundle: "ab1", vacancy: true },
}