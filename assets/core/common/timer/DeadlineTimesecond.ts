// DeadlineTimesecond.ts
import { _decorator, EventHandler } from 'cc';
import { DeadlineTime } from './DeadlineTime';
const { ccclass, property, menu } = _decorator;

/**
 * 在 DeadlineTime 基础上，将显示改为总秒数
 */
@ccclass('DeadlineTimesecond')
@menu('自定义组件/DeadlineTimesecond')
export class DeadlineTimesecond extends DeadlineTime {


    /** 定时回调，每秒减少并刷新显示 */
    public onTimerTick = () => {
        if (this.leftTime <= 0) {
            this.stopTimer();
            return;
        }
        if (this.leftTime <= 5000 && this.leftTime >= 3000) {
            if (this.TimeEndEvent) {
                // 触发结束回调
                EventHandler.emitEvents([this.TimeEndEvent], this);
            }
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
    public setshowtime(): void {
        // 计算总秒数
        const totalSeconds =
            this.times.second
            + this.times.minute * 60
            + this.times.hour * 3600
            + this.times.day * 86400;

        if (this.lbsecond) {
            this.lbsecond.string = `${totalSeconds}s`;
        }
    }
}
