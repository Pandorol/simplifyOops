System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LanguageData, _crd, LanguageType;

  _export("LanguageData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66e9advc7pOs4icAC+pXpiR", "LanguageData", undefined);

      //cpall
      __checkObsolete__(['TTFFont']);

      _export("LanguageData", LanguageData = class LanguageData {
        /** 
         * 通过多语言关键字获取语言文本 
         * 
         * 注：
         * 
         * 1、先获取language/json中的配置数据，如果没有者获取config/game/Language配置表中的多语言数据
         * 
         * 2、config/game/Language配置表可选使用，不用时不创建同名配置表即可
         * 
         * 3、config/game/Language配置表使用oops-plugin-excel-to-json插件生成，点击项目根目录下载update-oops-plugin-framework.bat或update-oops-plugin-framework.sh脚本下载插件
         */
        static getLangByID(labId) {
          var text = this.json[labId];

          if (text) {
            return text;
          }

          if (this.excel) {
            var record = this.excel[labId];

            if (record) {
              return record[this.current];
            }
          }

          return labId;
        }

      });

      /** JSON资源目录 */
      LanguageData.path_json = "language/json";

      /** 纹理资源目录 */
      LanguageData.path_texture = "language/texture";

      /** SPINE资源目录 */
      LanguageData.path_spine = "language/spine";

      /** 当前语言 */
      LanguageData.current = "";

      /** 语言JSON配置数据 */
      LanguageData.json = {};

      /** 语言EXCEL中的配置数据 */
      LanguageData.excel = null;

      /** TTF字体 */
      LanguageData.font = null;

      _export("LanguageType", LanguageType = ['LanguageLabel', 'LanguageSprite', 'LanguageSpine']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8104014cb79178fc896cec43c879bd38be49e202.js.map