import { oops } from '../../core/Oops';
export class Reflections {

    static onSelectImgBack(imgPath) {
        if (!imgPath) { return }

        oops.gui.toast(imgPath)
    }
    static onVideoImgBack(vparam) {
        if (!vparam) { return }
        oops.gui.toast(vparam)
    }
}

//@ts-ignore
window.Reflections = Reflections;
globalThis.Reflections = Reflections;
