System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, EventHandler, Input, Node, SpriteFrame, _decorator, input, isValid, oops, EventDispatcher, EventMessage, resLoader, ViewUtil, _dec, _class, _crd, ccclass, ResType, GameComponent;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "../../core/common/event/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMessage(extras) {
    _reporterNs.report("EventMessage", "../../core/common/event/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListenerFunc(extras) {
    _reporterNs.report("ListenerFunc", "../../core/common/event/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompleteCallback(extras) {
    _reporterNs.report("CompleteCallback", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaths(extras) {
    _reporterNs.report("Paths", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgressCallback(extras) {
    _reporterNs.report("ProgressCallback", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewUtil(extras) {
    _reporterNs.report("ViewUtil", "../../core/utils/ViewUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      Input = _cc.Input;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
      input = _cc.input;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      EventDispatcher = _unresolved_3.EventDispatcher;
    }, function (_unresolved_4) {
      EventMessage = _unresolved_4.EventMessage;
    }, function (_unresolved_5) {
      resLoader = _unresolved_5.resLoader;
    }, function (_unresolved_6) {
      ViewUtil = _unresolved_6.ViewUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62362nWbWZP653j6XL/zJDq", "GameComponent", undefined); //cpall


      __checkObsolete__(['Asset', 'Button', 'Component', 'EventHandler', 'EventKeyboard', 'EventTouch', 'Input', 'Node', 'Sprite', 'SpriteFrame', '__private', '_decorator', 'input', 'isValid']);

      ({
        ccclass
      } = _decorator);
      /** 加载资源类型 */

      ResType = /*#__PURE__*/function (ResType) {
        ResType[ResType["Load"] = 0] = "Load";
        ResType[ResType["LoadDir"] = 1] = "LoadDir";
        ResType[ResType["Audio"] = 2] = "Audio";
        return ResType;
      }(ResType || {});
      /** 资源加载记录 */


      /** 
       * 游戏显示对象组件模板
       * 1、当前对象加载的资源，会在对象释放时，自动释放引用的资源
       * 2、当前对象支持启动游戏引擎提供的各种常用逻辑事件
       */
      _export("GameComponent", GameComponent = (_dec = ccclass("GameComponent"), _dec(_class = class GameComponent extends Component {
        constructor(...args) {
          super(...args);
          //#region 全局事件管理
          this._event = null;
          //#endregion
          //#region 预制节点管理

          /** 摊平的节点集合（所有节点不能重名） */
          this.nodes = null;
          //#endregion
          //#region 资源加载管理

          /** 资源路径 */
          this.resPaths = null;
        }

        /** 全局事件管理器 */
        get event() {
          if (this._event == null) this._event = new (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher)();
          return this._event;
        }
        /**
         * 注册全局事件
         * @param event       事件名
         * @param listener    处理事件的侦听器函数
         * @param object      侦听函数绑定的this对象
         */


        on(event, listener, object) {
          this.event.on(event, listener, object);
        }
        /**
         * 移除全局事件
         * @param event      事件名
         */


        off(event) {
          this.event.off(event);
        }
        /** 
         * 触发全局事件 
         * @param event      事件名
         * @param args       事件参数
         */


        dispatchEvent(event, ...args) {
          this.event.dispatchEvent(event, ...args);
        }

        /** 通过节点名获取预制上的节点，整个预制不能有重名节点 */
        getNode(name) {
          if (this.nodes) {
            return this.nodes.get(name);
          }

          return undefined;
        }
        /** 平摊所有节点存到Map<string, Node>中通过get(name: string)方法获取 */


        nodeTreeInfoLite() {
          this.nodes = new Map();
          (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
            error: Error()
          }), ViewUtil) : ViewUtil).nodeTreeInfoLite(this.node, this.nodes);
        }
        /**
         * 从资源缓存中找到预制资源名并创建一个显示对象
         * @param path 资源路径
         */


        createPrefabNode(path, bundleName = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
          error: Error()
        }), oops) : oops).res.defaultBundleName) {
          return (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
            error: Error()
          }), ViewUtil) : ViewUtil).createPrefabNode(path, bundleName);
        }
        /**
         * 加载预制并创建预制节点
         * @param path       资源路径
         * @param bundleName 资源包名
         */


        createPrefabNodeAsync(path, bundleName = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
          error: Error()
        }), oops) : oops).res.defaultBundleName) {
          return (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
            error: Error()
          }), ViewUtil) : ViewUtil).createPrefabNodeAsync(path, bundleName);
        }

        // 资源使用记录

        /**
         * 获取资源
         * @param path          资源路径
         * @param type          资源类型
         * @param bundleName    远程资源包名
         */
        getRes(path, type, bundleName) {
          return (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.get(path, type, bundleName);
        }
        /**
         * 添加资源使用记录
         * @param type          资源类型
         * @param bundleName    资源包名
         * @param paths         资源路径
         */


        addPathToRecord(type, bundleName, paths, resId) {
          if (this.resPaths == null) this.resPaths = new Map();
          var rps = this.resPaths.get(type);

          if (rps == null) {
            rps = new Map();
            this.resPaths.set(type, rps);
          }

          if (paths instanceof Array) {
            let realBundle = bundleName;

            for (let index = 0; index < paths.length; index++) {
              let realPath = paths[index];
              let key = this.getResKey(realBundle, realPath, resId);

              if (!rps.has(key)) {
                rps.set(key, {
                  path: realPath,
                  bundle: realBundle,
                  resId: resId
                });
              }
            }
          } else if (typeof paths === "string") {
            let realBundle = bundleName;
            let realPath = paths;
            let key = this.getResKey(realBundle, realPath, resId);

            if (!rps.has(key)) {
              rps.set(key, {
                path: realPath,
                bundle: realBundle,
                resId: resId
              });
            }
          } else {
            let realBundle = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName;
            let realPath = bundleName;
            let key = this.getResKey(realBundle, realPath, resId);

            if (!rps.has(key)) {
              rps.set(key, {
                path: realPath,
                bundle: realBundle,
                resId: resId
              });
            }
          }
        }

        getResKey(realBundle, realPath, resId) {
          let key = `${realBundle}:${realPath}`;
          if (resId != null) key += ":" + resId;
          return key;
        }
        /**
         * 加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         */


        load(bundleName, paths, type, onProgress, onComplete) {
          this.addPathToRecord(ResType.Load, bundleName, paths);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.load(bundleName, paths, type, onProgress, onComplete);
        }
        /**
         * 异步加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         */


        loadAsync(bundleName, paths, type) {
          this.addPathToRecord(ResType.Load, bundleName, paths);
          return (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadAsync(bundleName, paths, type);
        }
        /**
         * 加载文件夹中的资源
         * @param bundleName    远程包名
         * @param dir           文件夹名
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         */


        loadDir(bundleName, dir, type, onProgress, onComplete) {
          let realDir;
          let realBundle;

          if (typeof dir === "string") {
            realDir = dir;
            realBundle = bundleName;
          } else {
            realDir = bundleName;
            realBundle = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName;
          }

          this.addPathToRecord(ResType.LoadDir, realBundle, realDir);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadDir(bundleName, dir, type, onProgress, onComplete);
        }
        /** 释放资源 */


        release() {
          if (this.resPaths) {
            const rps = this.resPaths.get(ResType.Load);

            if (rps) {
              rps.forEach(value => {
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).res.release(value.path, value.bundle);
              });
              rps.clear();
            }
          }
        }
        /** 释放文件夹的资源 */


        releaseDir() {
          if (this.resPaths) {
            const rps = this.resPaths.get(ResType.LoadDir);

            if (rps) {
              rps.forEach(value => {
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).res.releaseDir(value.path, value.bundle);
              });
            }
          }
        }
        /** 释放音效资源 */


        releaseAudioEffect() {
          if (this.resPaths) {
            const rps = this.resPaths.get(ResType.Audio);

            if (rps) {
              rps.forEach(value => {
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).audio.putEffect(value.resId, value.path, value.bundle);
              });
            }
          }
        }
        /**
         * 设置图片资源
         * @param target  目标精灵对象
         * @param path    图片资源地址
         * @param bundle  资源包名
         */


        async setSprite(target, path, bundle = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
          error: Error()
        }), resLoader) : resLoader).defaultBundleName) {
          const spriteFrame = await this.loadAsync(bundle, path, SpriteFrame);

          if (!spriteFrame || !isValid(target)) {
            const rps = this.resPaths.get(ResType.Load);

            if (rps) {
              const key = this.getResKey(bundle, path);
              rps.delete(key);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.release(path, bundle);
            }

            return;
          }

          target.spriteFrame = spriteFrame;
        } //#endregion
        //#region 音频播放管理

        /**
         * 播放背景音乐（不受自动释放资源管理）
         * @param url           资源地址
         * @param callback      资源加载完成回调
         * @param bundleName    资源包名
         */


        playMusic(url, callback, bundleName) {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.playMusic(url, callback, bundleName);
        }
        /**
         * 循环播放背景音乐（不受自动释放资源管理）
         * @param url           资源地址
         * @param bundleName    资源包名
         */


        playMusicLoop(url, bundleName) {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.stopMusic();
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.playMusicLoop(url, bundleName);
        }
        /**
         * 播放音效
         * @param url           资源地址
         * @param callback      资源加载完成回调
         * @param bundleName    资源包名
         */


        async playEffect(url, bundleName) {
          if (bundleName == null) bundleName = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.defaultBundleName;
          const id = await (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.playEffect(url, bundleName, () => {
            const rps = this.resPaths.get(ResType.Audio);

            if (rps) {
              const key = this.getResKey(bundleName, url, id);
              rps.delete(key);
            }
          });
          this.addPathToRecord(ResType.Audio, bundleName, url, id);
        } //#endregion
        //#region 游戏逻辑事件

        /** 
         * 批量设置当前界面按钮事件
         * @param bindRootEvent  是否对预制根节点绑定触摸事件
         * @example
         * 注：按钮节点Label1、Label2必须绑定UIButton等类型的按钮组件才会生效，方法名必须与节点名一致
         * this.setButton();
         * 
         * Label1(event: EventTouch) { console.log(event.target.name); }
         * Label2(event: EventTouch) { console.log(event.target.name); }
         */


        setButton(bindRootEvent = true) {
          // 自定义按钮批量绑定触摸事件
          if (bindRootEvent) {
            this.node.on(Node.EventType.TOUCH_END, event => {
              const self = this;
              const func = self[event.target.name];

              if (func) {
                func.call(this, event);
              } // 不触发界面根节点触摸事件、不触发长按钮组件的触摸事件
              // else if (event.target != this.node && event.target.getComponent(ButtonTouchLong) == null) {
              //     console.warn(`名为【${event.target.name}】的按钮事件方法不存在`);
              // }

            }, this);
          } // Cocos Creator Button组件批量绑定触摸事件（使用UIButton支持放连点功能）


          const regex = /<([^>]+)>/;
          const buttons = this.node.getComponentsInChildren(Button);
          buttons.forEach(b => {
            const node = b.node;
            const self = this;
            const func = self[node.name];

            if (func) {
              const event = new EventHandler();
              event.target = this.node;
              event.handler = b.node.name;
              event.component = this.name.match(regex)[1];
              b.clickEvents.push(event);
            } // else {
            //     console.warn(`名为【${node.name}】的按钮事件方法不存在`);
            // }

          });
        }
        /** 
         * 批量设置全局事件 
         * @example
         *  this.setEvent("onGlobal");
         *  this.dispatchEvent("onGlobal", "全局事件");
         * 
         *  onGlobal(event: string, args: any) { console.log(args) };
         */


        setEvent(...args) {
          const self = this;

          for (const name of args) {
            const func = self[name];
            if (func) this.on(name, func, this);else console.error(`名为【${name}】的全局事方法不存在`);
          }
        }
        /**
         * 键盘事件开关
         * @param on 打开键盘事件为true
         */


        setKeyboard(on) {
          if (on) {
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
            input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
          } else {
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
            input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
          }
        }
        /** 键按下 */


        onKeyDown(event) {}
        /** 键放开 */


        onKeyUp(event) {}
        /** 键长按 */


        onKeyPressing(event) {}
        /** 监听游戏从后台进入事件 */


        setGameShow() {
          this.on((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_SHOW, this.onGameShow, this);
        }
        /** 监听游戏切到后台事件 */


        setGameHide() {
          this.on((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_HIDE, this.onGameHide, this);
        }
        /** 监听游戏画笔尺寸变化事件 */


        setGameResize() {
          this.on((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_RESIZE, this.onGameResize, this);
        }
        /** 监听游戏全屏事件 */


        setGameFullScreen() {
          this.on((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_FULL_SCREEN, this.onGameFullScreen, this);
        }
        /** 监听游戏旋转屏幕事件 */


        setGameOrientation() {
          this.on((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_ORIENTATION, this.onGameOrientation, this);
        }
        /** 游戏从后台进入事件回调 */


        onGameShow() {}
        /** 游戏切到后台事件回调 */


        onGameHide() {}
        /** 游戏画笔尺寸变化事件回调 */


        onGameResize() {}
        /** 游戏全屏事件回调 */


        onGameFullScreen() {}
        /** 游戏旋转屏幕事件回调 */


        onGameOrientation() {} //#endregion


        onDestroy() {
          // 释放消息对象
          if (this._event) {
            this._event.destroy();

            this._event = null;
          } // 节点引用数据清除


          if (this.nodes) {
            this.nodes.clear();
            this.nodes = null;
          } // 自动释放资源


          if (this.resPaths) {
            this.releaseAudioEffect();
            this.release();
            this.releaseDir();
            this.resPaths.clear();
            this.resPaths = null;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=069cd6dcd3a747ab150b36e307620bcaccda1d35.js.map