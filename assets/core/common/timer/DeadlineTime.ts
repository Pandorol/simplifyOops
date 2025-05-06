// DeadlineTime.ts
import { _decorator, Component, EventHandler, Label, Node } from 'cc';
const { ccclass, property, menu } = _decorator;

// 倒计时各字段结构
interface TimeStruct {
    day: number;
    hour: number;
    minute: number;
    second: number;
}

@ccclass('DeadlineTime')
@menu('自定义组件/DeadlineTime')
export class DeadlineTime extends Component {
    /** 天数 Label */
    @property(Label)
    public lbday: Label | null = null;
    /** 小时 Label */
    @property(Label)
    public lbhour: Label | null = null;
    /** 分钟 Label */
    @property(Label)
    public lbminute: Label | null = null;
    /** 秒数 Label */
    @property(Label)
    public lbsecond: Label | null = null;

    /** 天数背景节点（可选） */
    @property(Node)
    public nddaybg: Node | null = null;
    /** 天数冒号节点（可选） */
    @property(Node)
    public nddaymaohao: Node | null = null;

    /** 倒计时结束后的回调事件 */
    @property({ type: EventHandler, tooltip: '倒计时结束回调' })
    public TimeEndEvent: EventHandler = new EventHandler();;

    public leftTime: number = 0;       // 剩余毫秒数
    public times: TimeStruct = { day: 0, hour: 0, minute: 0, second: 0 };



    /**
     * 外部调用，启动倒计时
     * @param value 毫秒数
     */
    public starttime(value: number) {
        this.stopTimer();
        this.leftTime = value;
        // 假设 window.util.transTimeToDay 返回 {day,hour,minute,second}
        this.times = this.transTimeToDay(value);
        this.setshowtime();
        // 每秒调用一次 onTimerTick，REPEAT_FOREVER 默认为无限次
        this.schedule(this.onTimerTick, 1);
    }
    public transTimeToDay(value: number): TimeStruct {
        // 总秒数
        const totalSec = Math.floor(value / 1000);

        // 总小时数
        const totalHour = Math.floor(totalSec / 3600);
        // 天数
        const day = Math.floor(totalHour / 24);
        // 小时（去除完整天后的剩余小时）
        const hour = totalHour % 24;

        // 去除完整小时后的剩余秒数
        const remSecAfterHour = totalSec % 3600;
        // 分钟
        const minute = Math.floor(remSecAfterHour / 60);
        // 秒
        const second = remSecAfterHour % 60;

        return { day, hour, minute, second };
    }

    /** 更新所有 Label 的显示，并控制天数字段的显隐 */
    public setshowtime() {
        if (this.nddaybg) this.nddaybg.active = this.times.day > 0;
        if (this.nddaymaohao) this.nddaymaohao.active = this.times.day > 0;
        if (this.lbday) this.lbday.string = `${this.times.day}天`;
        if (this.lbhour) this.lbhour.string = this.times.hour < 10 ? `0${this.times.hour}` : `${this.times.hour}`;
        if (this.lbminute) this.lbminute.string = this.times.minute < 10 ? `0${this.times.minute}` : `${this.times.minute}`;
        if (this.lbsecond) this.lbsecond.string = this.times.second < 10 ? `0${this.times.second}` : `${this.times.second}`;
    }

    /** 定时回调，每秒减少并刷新显示 */
    public onTimerTick = () => {
        if (this.leftTime <= 0) {
            this.stopTimer();
            if (this.TimeEndEvent) {
                // 触发结束回调
                EventHandler.emitEvents([this.TimeEndEvent], this);
            }
            return;
        }

        this.leftTime -= 1000;
        if (this.times.second > 0) {
            this.times.second--;
        } else if (this.times.minute > 0) {
            this.times.minute--; this.times.second = 59;
        } else if (this.times.hour > 0) {
            this.times.hour--; this.times.minute = 59; this.times.second = 59;
        } else if (this.times.day > 0) {
            this.times.day--; this.times.hour = 23; this.times.minute = 59; this.times.second = 59;
        } else {
            // 理论上走不到这儿，因为上面 leftTime<=0 会直接 stop
        }

        this.setshowtime();
    }

    /** 停止定时器 */
    public stopTimer() {
        this.unschedule(this.onTimerTick);
    }

    /** 组件销毁时一定要清定时，防止内存泄漏 */
    public onDestroy() {
        this.stopTimer();
    }
}
