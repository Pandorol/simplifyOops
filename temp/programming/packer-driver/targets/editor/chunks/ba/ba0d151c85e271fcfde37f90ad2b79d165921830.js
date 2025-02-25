System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, warn, HttpReturn, HttpRequest, _crd, urls, reqparams, HttpEvent;

  _export({
    HttpReturn: void 0,
    HttpRequest: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca706EEjWJIcJ4vmzsqkk8S", "HttpRequest", undefined); //cpall


      /** 当前请求地址集合 */
      __checkObsolete__(['error', 'warn']);

      urls = {};
      /** 请求参数 */

      reqparams = {};

      /** 请求事件 */
      _export("HttpEvent", HttpEvent = /*#__PURE__*/function (HttpEvent) {
        HttpEvent["NO_NETWORK"] = "http_request_no_network";
        HttpEvent["UNKNOWN_ERROR"] = "http_request_unknown_error";
        HttpEvent["TIMEOUT"] = "http_request_timout";
        return HttpEvent;
      }({}));
      /**
       * HTTP请求返回值
       */


      _export("HttpReturn", HttpReturn = class HttpReturn {
        constructor() {
          /** 是否请求成功 */
          this.isSucc = false;

          /** 请求返回数据 */
          this.res = void 0;

          /** 请求错误数据 */
          this.err = void 0;
        }

      });
      /** HTTP请求 */


      _export("HttpRequest", HttpRequest = class HttpRequest {
        constructor() {
          /** 服务器地址 */
          this.server = "http://127.0.0.1/";

          /** 请求超时时间 */
          this.timeout = 10000;

          /** 自定义请求头信息 */
          this.header = new Map();
        }

        /**
         * 添加自定义请求头信息
         * @param name  信息名
         * @param value 信息值
         */
        addHeader(name, value) {
          this.header.set(name, value);
        }
        /**
         * HTTP GET请求
         * @param name                  协议名
         * @param onComplete            请求完整回调方法
         * @param params                查询参数
         * @example
        var param = '{"uid":12345}'
        var complete = (ret: HttpReturn) => {
            console.log(ret.res);
        }
        oops.http.getWithParams(name, complete, param);
         */


        get(name, onComplete, params = null) {
          this.sendRequest(name, params, false, onComplete);
        }
        /**
         * HTTP GET请求
         * @param name                  协议名
         * @param params                查询参数
         * @example 
        var txt = await oops.http.getAsync(name);
        if (txt.isSucc) {
            console.log(txt.res);
        }
         */


        getAsync(name, params = null) {
          return new Promise((resolve, reject) => {
            this.sendRequest(name, params, false, ret => {
              resolve(ret);
            });
          });
        }
        /**
         * HTTP GET请求非文本格式数据
         * @param name                  协议名
         * @param onComplete            请求完整回调方法
         * @param params                查询参数
         */


        getByArraybuffer(name, onComplete, params = null) {
          this.sendRequest(name, params, false, onComplete, 'arraybuffer', false);
        }
        /**
         * HTTP GET请求非文本格式数据
         * @param name                  协议名
         * @param params                查询参数
         * @returns Promise<any>
         */


        getAsyncByArraybuffer(name, params = null) {
          return new Promise((resolve, reject) => {
            this.sendRequest(name, params, false, ret => {
              resolve(ret);
            }, 'arraybuffer', false);
          });
        }
        /**
         * HTTP POST请求
         * @param name                  协议名
         * @param params                查询参数
         * @param onComplete      请求完整回调方法
         * @example
        var param = '{"LoginCode":"donggang_dev","Password":"e10adc3949ba59abbe56e057f20f883e"}'
        var complete = (ret: HttpReturn) => {
            console.log(ret.res);
        }
        oops.http.post(name, complete, param);
         */


        post(name, onComplete, params = null) {
          this.sendRequest(name, params, true, onComplete);
        }
        /**
         * HTTP POST请求
         * @param name                  协议名
         * @param params                查询参数
         */


        postAsync(name, params = null) {
          return new Promise((resolve, reject) => {
            this.sendRequest(name, params, true, ret => {
              resolve(ret);
            });
          });
        }
        /**
         * 取消请求中的请求
         * @param name     协议名
         */


        abort(name) {
          var xhr = urls[this.server + name];

          if (xhr) {
            xhr.abort();
          }
        }
        /**
         * 获得字符串形式的参数
         * @param params 参数对象
         * @returns 参数字符串
         */


        getParamString(params) {
          var result = "";

          for (var name in params) {
            let data = params[name];

            if (data instanceof Object) {
              for (var key in data) result += `${key}=${data[key]}&`;
            } else {
              result += `${name}=${data}&`;
            }
          }

          return result.substring(0, result.length - 1);
        }
        /** 
         * Http请求 
         * @param name(string)              请求地址
         * @param params(JSON)              请求参数
         * @param isPost(boolen)            是否为POST方式
         * @param callback(function)        请求成功回调
         * @param responseType(string)      响应类型
         * @param isOpenTimeout(boolean)    是否触发请求超时错误
         */


        sendRequest(name, params, isPost, onComplete, responseType, isOpenTimeout = true) {
          if (name == null || name == '') {
            error("请求地址不能为空");
            return;
          }

          var url,
              newUrl,
              paramsStr = "";

          if (name.toLocaleLowerCase().indexOf("http") == 0) {
            url = name;
          } else {
            url = this.server + name;
          }

          if (params) {
            paramsStr = this.getParamString(params);
            if (url.indexOf("?") > -1) newUrl = url + "&" + paramsStr;else newUrl = url + "?" + paramsStr;
          } else {
            newUrl = url;
          }

          if (urls[newUrl] != null && reqparams[newUrl] == paramsStr) {
            warn(`地址【${url}】已正在请求中，不能重复请求`);
            return;
          }

          var xhr = new XMLHttpRequest(); // 防重复请求功能

          urls[newUrl] = xhr;
          reqparams[newUrl] = paramsStr;

          if (isPost) {
            xhr.open("POST", url);
          } else {
            xhr.open("GET", newUrl);
          } // 添加自定义请求头信息


          for (const [key, value] of this.header) {
            xhr.setRequestHeader(key, value);
          } // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
          // xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");


          var data = {};
          data.url = url;
          data.params = params; // 请求超时

          if (isOpenTimeout) {
            xhr.timeout = this.timeout;

            xhr.ontimeout = () => {
              this.deleteCache(newUrl);
              ret.isSucc = false;
              ret.err = HttpEvent.TIMEOUT; // 超时

              onComplete(data);
            };
          } // 响应结果


          var ret = new HttpReturn();

          xhr.onloadend = () => {
            if (xhr.status == 500) {
              this.deleteCache(newUrl);
              ret.isSucc = false;
              ret.err = HttpEvent.NO_NETWORK; // 断网

              onComplete(ret);
            }
          };

          xhr.onerror = () => {
            this.deleteCache(newUrl);
            ret.isSucc = false;

            if (xhr.readyState == 0 || xhr.readyState == 1 || xhr.status == 0) {
              ret.err = HttpEvent.NO_NETWORK; // 断网
            } else {
              ret.err = HttpEvent.UNKNOWN_ERROR; // 未知错误
            }

            onComplete(ret);
          };

          xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;
            this.deleteCache(newUrl);

            if (xhr.status == 200 && onComplete) {
              ret.isSucc = true;

              if (responseType == 'arraybuffer') {
                xhr.responseType = responseType; // 加载非文本格式

                ret.res = xhr.response;
              } else {
                ret.res = JSON.parse(xhr.response);
              }

              onComplete(ret);
            }
          }; // 发送请求


          if (params == null || params == "") {
            xhr.send();
          } else {
            xhr.send(paramsStr);
          }
        }

        deleteCache(url) {
          delete urls[url];
          delete reqparams[url];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba0d151c85e271fcfde37f90ad2b79d165921830.js.map