import { ecs } from "../../libs/ecs/ECS";
import { AccountModelComp } from "./model/AccountModelComp";

@ecs.register('Account')
export class Account extends ecs.Entity {
    AccountModel!: AccountModelComp;
    protected init() {
        this.addComponents<ecs.Comp>(AccountModelComp);
        // this.addEvent();
    }
}