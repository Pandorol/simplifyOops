import { ecs } from "db://assets/libs/ecs/ECS";

@ecs.register('AccountModel')
export class AccountModelComp extends ecs.Comp {
    infos: {//可以让编辑器提示，没其他作用
        name: string;
        [key: string]: any;
    } = {
            name: "",
        }
    reset() {

    }
}