import { oops } from "db://assets/core/Oops";
import { ecs } from "db://assets/libs/ecs/ECS";
import { Account } from "../Account";
import { AccountModelComp } from "../model/AccountModelComp";

@ecs.register('AccountData')
export class AccountDataComp extends ecs.Comp {
    resdata: any = {}
    reset() {
        this.resdata = {}
    }
}
@ecs.register('Account')
export class AccountNetDataSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {

    filter(): ecs.IMatcher {
        return ecs.allOf(AccountDataComp, AccountModelComp);
    }
    entityEnter(e: Account): void {



        e.remove(AccountDataComp);
    }
    /** 设置本地存储的用户标识 */
    private setLocalStorage(uid: string) {
        oops.storage.setUser(uid);
        oops.storage.set("accountuid", uid);
    }
}