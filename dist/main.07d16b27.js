// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
console.log('hi');
var html = document.querySelector("#html");
var style = document.querySelector('style');
var string = "\n/*\u5927\u5BB6\u597D,\u6211\u53EB\u5C0F\u4E38\u5B50\n*\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA,\n\u63A5\u4E0B\u6765\u6211\u5C06\u5C55\u73B0\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95,\u505A\u4E00\u4E2A\u592A\u6781\u516B\u5366\u56FE\n\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2A.box\u7684div\n**/\n.box{\n    border: 1px solid red;    \n    width: 200px;\n    height: 200px;\n}\n/*\u73B0\u5728\u9700\u8981\u628A\u8FD9\u4E2A.box\u53D8\u4E3A\u5706\u5F62*/\n.box {\n    border-radius: 50%;\n    border:none;\n}\n/*\u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\uFF0C\n*\u5DE6\u53F3\u4E24\u6781\u4E00\u9ED1\u4E00\u767D\n*/\n.box {\n    background: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 1) 0%,\n        rgba(255, 255, 255, 1) 50%,\n        rgba(0, 0, 0, 1) 50%,\n        rgba(0, 0, 0, 1) 100%\n      );\n}\n/*\u5728\u592A\u6781\u76D8\u4E0A\u518D\u6DFB\u52A0\u4E24\u4E2A\u9ED1\u767D\u76F8\u53CD\u7684\u795E\u79D8\u5C0F\u7403*/\n.box::before {\n    width: 100px;\n    height: 100px;\n    background:black;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: radial-gradient(\n      circle,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 25%,\n      rgba(0, 0, 0, 1) 25%,\n      rgba(0, 0, 0, 1) 75%,\n      rgba(255, 255, 255, 1) 75%,\n      rgba(255, 255, 255, 1) 100%\n    );}\n.box::after {\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 100px;\n        height: 100px;\n        background:white;\n        border-radius: 50%;\n        background: radial-gradient(\n          circle,\n          rgba(0, 0, 0, 1) 0%,\n          rgba(0, 0, 0, 1) 25%,\n          rgba(255, 255, 255, 1) 25%,\n          rgba(255, 255, 255, 1) 75%,\n          rgba(0, 0, 0, 1) 75%,\n          rgba(0, 0, 0, 1) 100%\n        );}\n/*\u6700\u540E\uFF0C\u8BA9\u4ED6\u8F6C\u8D77\u6765*/\n.box{\n    animation: run 1s linear infinite;\n}\n";
var n = 0; //以下解决了字符串内容逐个打印，使JS无法一次性识别需要换行的标签，产生先将一半标签打印为字符串的bug

var string2 = "";
var string3 = "";

var step = function step() {
  setTimeout(function () {
    if (n < string.length) {
      if (string[n] === "\n") {
        string2 += "<br>";
      } else if (string[n] === " ") {
        string2 += "&nbsp;";
      } else {
        string2 += string[n];
      }

      window.scrollTo(0, 9999);
      html.scrollTo(0, 9999);
      string3 = string.substring(0, n);
      html.innerHTML = string2;
      style.innerHTML = string3;
      n++;
      step();
    }
  }, 0);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.07d16b27.js.map