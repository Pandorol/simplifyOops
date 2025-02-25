/*
 * @Author: dgflash
 * @Date: 2021-11-18 14:20:46
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-25 17:06:15
 */


// import { Account } from "../../account/Account";

import { ecs } from "db://assets/libs/ecs/ECS";
import { Initialize } from "../../initialize/Initialize";

/** 游戏模块 */
@ecs.register('SingletonModule')
export class SingletonModuleComp extends ecs.Comp {
    /** 游戏初始化模块 */
    initialize: Initialize = null!;
    /** 游戏账号模块 */
    // get account(): Account {
    //     return this.initialize.account;
    // }

    reset() { }
}

export var smc: SingletonModuleComp = ecs.getSingleton(SingletonModuleComp);