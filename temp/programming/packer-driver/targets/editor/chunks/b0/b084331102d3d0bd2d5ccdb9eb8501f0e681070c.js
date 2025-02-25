System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, Logger, _crd, LogType, names;

  _export("Logger", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55c5eCDbiNGQrFiBTXmhOZz", "Logger", undefined); //cpall


      /** 日志类型 */
      __checkObsolete__(['log']);

      _export("LogType", LogType = /*#__PURE__*/function (LogType) {
        LogType[LogType["Net"] = 1] = "Net";
        LogType[LogType["Model"] = 2] = "Model";
        LogType[LogType["Business"] = 4] = "Business";
        LogType[LogType["View"] = 8] = "View";
        LogType[LogType["Config"] = 16] = "Config";
        LogType[LogType["Trace"] = 32] = "Trace";
        return LogType;
      }({}));

      names = {
        "1": "网络日志",
        "2": "数据日志",
        "4": "业务日志",
        "8": "视图日志",
        "16": "配置日志",
        "32": "标准日志"
      };
      /** 
       * 日志管理 
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037904&doc_id=2873565
       * @example
      oops.log.trace("默认标准日志");
      oops.log.logConfig("灰色配置日志");
      oops.log.logNet("橙色网络日志");
      oops.log.logModel("紫色数据日志");
      oops.log.logBusiness("蓝色业务日志");
      oops.log.logView("绿色视图日志");
       */

      _export("Logger", Logger = class Logger {
        static init() {
          this.tags = LogType.Net | LogType.Model | LogType.Business | LogType.View | LogType.Config | LogType.Trace;
        }
        /** 
         * 设置显示的日志类型，默认值为不显示任何类型日志
         * @example
        oops.log.setTags(LogType.View|LogType.Business)
         */


        static setTags(tag = null) {
          if (tag) {
            this.tags = tag;
          }
        }
        /**
         * 记录开始计时
         * @param describe  标题描述
         * @example
        oops.log.start();
        ...
        省略N行代码
        ...
        oops.log.end();
         */


        static start(describe = "Time") {
          console.time(describe);
        }
        /**
         * 打印范围内时间消耗
         * @param describe  标题描述
         * @example
        oops.log.start();
        ...
        省略N行代码
        ...
        oops.log.end();
         */


        static end(describe = "Time") {
          console.timeEnd(describe);
        }
        /**
         * 打印表格
         * @param msg       日志消息
         * @param describe  标题描述
         * @example
        var object:any = {uid:1000, name:"oops"};
        oops.log.table(object);
         */


        static table(msg, describe) {
          if (!this.isOpen(LogType.Trace)) {
            return;
          }

          console.table(msg);
        }
        /**
         * 打印标准日志
         * @param msg       日志消息
         */


        static trace(msg, color = "color:#ffffff;") {
          // 标记没有打开，不打印该日志
          if (!this.isOpen(LogType.Trace)) {
            return;
          }

          var backLog = console.log || log;
          backLog.call(null, "%c%s%s", color, this.getDateString(), msg);
        }
        /**
         * 打印网络层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        static logNet(msg, describe) {
          this.orange(LogType.Net, msg, describe);
        }
        /**
         * 打印数据层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        static logModel(msg, describe) {
          this.violet(LogType.Model, msg, describe);
        }
        /**
         * 打印业务层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        static logBusiness(msg, describe) {
          this.blue(LogType.Business, msg, describe);
        }
        /**
         * 打印视图日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        static logView(msg, describe) {
          this.green(LogType.View, msg, describe);
        }
        /** 打印配置日志 */


        static logConfig(msg, describe) {
          this.gray(LogType.Config, msg, describe);
        } // 橙色


        static orange(tag, msg, describe) {
          this.print(tag, msg, "color:#ee7700;", describe);
        } // 紫色


        static violet(tag, msg, describe) {
          this.print(tag, msg, "color:Violet;", describe);
        } // 蓝色


        static blue(tag, msg, describe) {
          this.print(tag, msg, "color:#3a5fcd;", describe);
        } // 绿色


        static green(tag, msg, describe) {
          this.print(tag, msg, "color:green;", describe);
        } // 灰色


        static gray(tag, msg, describe) {
          this.print(tag, msg, "color:gray;", describe);
        }

        static isOpen(tag) {
          return (this.tags & tag) != 0;
        }
        /**
         * 输出日志
         * @param tag       日志类型
         * @param msg       日志内容
         * @param color     日志文本颜色
         * @param describe  日志标题描述
         */


        static print(tag, msg, color, describe) {
          // 标记没有打开，不打印该日志
          if (!this.isOpen(tag)) {
            return;
          }

          const backLog = console.log || log;
          const type = names[tag];

          if (describe) {
            backLog.call(null, "%c%s%s%s:%s%o", color, this.getDateString(), '[' + type + ']', this.stack(5), describe, msg);
          } else {
            backLog.call(null, "%c%s%s%s:%o", color, this.getDateString(), '[' + type + ']', this.stack(5), msg);
          }
        }

        static stack(index) {
          const e = new Error();
          const lines = e.stack.split("\n");
          const result = [];
          lines.forEach(line => {
            line = line.substring(7);
            var lineBreak = line.split(" ");

            if (lineBreak.length < 2) {
              result.push(lineBreak[0]);
            } else {
              result.push({
                [lineBreak[0]]: lineBreak[1]
              });
            }
          });
          let list = [];
          let splitList = [];

          if (index < result.length - 1) {
            let value;

            for (let a in result[index]) {
              splitList = a.split(".");

              if (splitList.length == 2) {
                list = splitList.concat();
              } else {
                value = result[index][a];
                const start = value.lastIndexOf("/");
                const end = value.lastIndexOf(".");

                if (start > -1 && end > -1) {
                  const r = value.substring(start + 1, end);
                  list.push(r);
                } else {
                  list.push(value);
                }
              }
            }
          }

          if (list.length == 1) {
            return "[" + list[0] + ".ts]";
          } else if (list.length == 2) {
            return "[" + list[0] + ".ts->" + list[1] + "]";
          }

          return "";
        }

        static getDateString() {
          let d = new Date();
          let str = d.getHours().toString();
          let timeStr = "";
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getMinutes().toString();
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getSeconds().toString();
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getMilliseconds().toString();
          if (str.length == 1) str = "00" + str;
          if (str.length == 2) str = "0" + str;
          timeStr += str;
          timeStr = "[" + timeStr + "]";
          return timeStr;
        }

      }); // @ts-ignore


      Logger.tags = 0;
      Logger.init();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b084331102d3d0bd2d5ccdb9eb8501f0e681070c.js.map