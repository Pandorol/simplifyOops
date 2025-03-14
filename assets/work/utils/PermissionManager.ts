import { native, sys } from "cc";
import { oops } from '../../core/Oops';
import { Reflections } from "./Reflections";

/**
 *@param mode "0":只选择图片,"1":只选择视频,"2":图片或视频都可以选择
 *@param quality "70":选择的图片压缩的质量
 */
interface SelectImgOptions {
    quality: string;
    mode: string;
}
export class PermissionManager {

    public static StrPermission = {
        android: {
            CAMERA: "android.permission.CAMERA"
        }
    }

    private static m_Options: SelectImgOptions = {
        quality: "70",
        mode: "2"
    }
    public static setSelectImgOptions(op: SelectImgOptions) {
        this.m_Options.mode = op.mode
        this.m_Options.quality = op.quality
    }
    /**
     * 检查是否拥有某个权限
     * @param permission 
     * @returns 
     */
    public static async checkPermission(permission: string): Promise<boolean> {
        if (sys.isNative) {
            return await this.nativeCheck(permission);
        }
        else {

            return true;
        }
    }

    private static async nativeCheck(permission: string): Promise<boolean> {
        return new Promise(resolve => {
            if (sys.isNative && sys.os === sys.OS.ANDROID) {
                let result = native.reflection.callStaticMethod("com/cocos/game/AppActivity", "hasRequestPermission", "(Ljava/lang/String;)Z", permission);

                resolve(result);
                return
            }
            else if (sys.isNative && sys.os === sys.OS.IOS) {

                return
            }
            resolve(true);
        });
    }
    /**
     * 检查是否有照片视频权限，旧的是读取文件权限，所以单独写出来在原生判断处理
     * @param param 
     * @returns 
     */
    public static async checkGalleryPermission(param: string = "nothing"): Promise<boolean> {
        if (sys.isNative) {
            return new Promise(resolve => {
                if (sys.os === sys.OS.ANDROID) {
                    let result = native.reflection.callStaticMethod("com/cocos/game/AppActivity", "hasGalleryPermissions", "(Ljava/lang/String;)Z", param);

                    resolve(result);
                    return
                }
                else if (sys.os === sys.OS.IOS) {

                    return
                }
                resolve(true);
            });
        }
        else {

            return true;
        }
    }
    public static requestGalleryPermission(param: string = "nothing") {
        if (sys.isNative) {

            if (sys.os === sys.OS.ANDROID) {
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "DoRequestGalleryPermissions", "(Ljava/lang/String;)V", param);
            }
            else if (sys.os === sys.OS.IOS) {

            }


        }
        else if ((sys.platform === sys.Platform.WECHAT_GAME) || (sys.platform === sys.Platform.WECHAT_MINI_PROGRAM)) {

        }
        else {


        }
    }
    public static requestPermission(permission: string) {
        if (sys.isNative && sys.os === sys.OS.ANDROID) {
            native.reflection.callStaticMethod("com/cocos/game/AppActivity", "DoRequestPermission", "(Ljava/lang/String;)V", permission);
            return
        }
        else if (sys.isNative && sys.os === sys.OS.IOS) {

        }

    }

    /**
     * 
     * @param quality 打开原生相机拍照后压缩的质量
     * @returns 
     */
    public static openCamera() {
        if (sys.isNative) {
            if (sys.os === sys.OS.ANDROID) {
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "DoOpenCamera", "(Ljava/lang/String;)V", this.m_Options.mode);
                return
            }
            else if (sys.os === sys.OS.IOS) {

            }
        }

        else if ((sys.platform === sys.Platform.WECHAT_GAME) || (sys.platform === sys.Platform.WECHAT_MINI_PROGRAM)) {
            wx.chooseMedia({
                count: 1, // 可选择的媒体文件数量
                mediaType: ['image'], // 仅选择图片
                sourceType: ['camera'], // 可从相册或相机中选择
                sizeType: ['compressed'], // 可选择原图或压缩图'original',
                success(res) {

                    let fileInfo = res.tempFiles[0];
                    let mediaType = res.type; // 确保媒体类型 // 'image' 或 'video'
                    let tempFilePath = res.tempFiles[0].tempFilePath;

                    if (mediaType === 'image') {
                        Reflections.onSelectImgBack(tempFilePath)
                    }
                    else if (mediaType === 'video') {
                        let videoSize = fileInfo.size;
                        let videoDuration = fileInfo.duration;
                        let videostr = tempFilePath + "," + videoSize + "," + videoDuration + "," + "null"//视频大小+","+视频时长+","+"null"
                        Reflections.onVideoImgBack(videostr)
                    }
                },
                fail(err) {
                    // 处理失败情况
                    oops.gui.toast(err.errMsg)
                }
            });
        }
    }
    /**
     * 
     * @param mode "0":只选择图片,"1":只选择视频,"2":图片或视频都可以选择
     * @param quality "70":选择的图片压缩的质量
     * @returns 
     */
    public static openAlbum() {

        if (sys.isNative) {
            if (sys.os === sys.OS.ANDROID) {
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "DoOpenAlbum", "(Ljava/lang/String;Ljava/lang/String;)V", this.m_Options.mode, this.m_Options.quality);
                return
            }
            else if (sys.os === sys.OS.IOS) {

            }
        }

        else if ((sys.platform === sys.Platform.WECHAT_GAME) || (sys.platform === sys.Platform.WECHAT_MINI_PROGRAM)) {
            oops.gui.toast("sys.platform === sys.Platform.WECHAT_GAME")
            wx.chooseMedia({
                count: 1, // 可选择的媒体文件数量
                mediaType: ['image', 'video'], // 仅选择图片
                sourceType: ['album', 'camera'], // 可从相册或相机中选择
                sizeType: ['compressed'], // 可选择原图或压缩图'original',
                success(res) {

                    let fileInfo = res.tempFiles[0];
                    let mediaType = res.type; // 确保媒体类型 // 'image' 或 'video'
                    let tempFilePath = res.tempFiles[0].tempFilePath;

                    if (mediaType === 'image') {
                        Reflections.onSelectImgBack(tempFilePath)
                    }
                    else if (mediaType === 'video') {
                        let videoSize = fileInfo.size;
                        let videoDuration = fileInfo.duration;
                        let videostr = tempFilePath + "," + videoSize + "," + videoDuration + "," + "null"//视频大小+","+视频时长+","+"null"
                        Reflections.onVideoImgBack(videostr)
                    }
                    // let fs = wx.getFileSystemManager();
                    // 保存临时文件到本地,不需要，tmpfile能在几个小时够了
                    // fs.saveFile({
                    //     tempFilePath,
                    //     success(saveRes) {
                    //         let savedFilePath = saveRes.savedFilePath;
                    //         // 在后续操作中使用 savedFilePath
                    //         if (mediaType === 'image') {
                    //             Reflections.onSelectImgBack(savedFilePath)
                    //         }
                    //         else if (mediaType === 'video') {
                    //             let videoSize = fileInfo.size;
                    //             let videoDuration = fileInfo.duration;
                    //             let videostr = savedFilePath + "," + videoSize + "," + videoDuration + "," + "null"//视频大小+","+视频时长+","+"null"
                    //             Reflections.onVideoImgBack(videostr)
                    //         }
                    //     },
                    //     fail(err) {
                    //         console.error('保存文件失败：', err);
                    //     }
                    // });
                },
                fail(err) {
                    // 处理失败情况
                    oops.gui.toast(err.errMsg)
                }
            });

        }
    }
}



