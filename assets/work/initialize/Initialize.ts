
// import { Account } from "../account/Account";
import { ecs } from "../../libs/ecs/ECS";
import { Account } from "../account/Account";
import { InitResComp } from "./bll/InitRes";


/**
 * 游戏进入初始化模块
 * 1、热更新
 * 2、加载默认资源
 */
@ecs.register('Initialize')
export class Initialize extends ecs.Entity {
    /** 帐号管理 */
    account: Account = null!;

    protected init() {
        // 帐号模块为初始化模块的子实体对象
        this.account = ecs.getEntity<Account>(Account);
        this.addChild(this.account);

        // 初始化游戏公共资源
        this.add(InitResComp);
    }
}

// export class EcsInitializeSystem extends ecs.System {
//     constructor() {
//         super();

//         this.add(new InitResSystem());
//     }
// }