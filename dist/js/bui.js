"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* @preserve 
 * @name: BUI v1.5.3  
 * @detail: BUI 是一个免费的UI交互框架, 用于快速定制开发WebApp,微信,混合移动应用(Bingotouch,Link,Dcloud,Apicloud,Appcan等).
 * @site: http://www.easybui.com/ 
 * Copyright © 2016-2019 BUI. All Rights Reserved. 
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t();
}(0, function () {
  "use strict";
  function e(e, t) {
    return t = { exports: {} }, e(t, t.exports), t.exports;
  }window.libs = window.Zepto || window.jQuery || {}, window.bui = {}, window.router = {}, function (e) {
    e.debug = !0, e.hasRouter = !1, e.isWebapp, e.currentPlatform = "", e.log = !0, e.trace = !1, e.native = {}, e.config = {}, e.config.namespace = "bui", e.config.classNamePrefix = e.config.namespace + "-", e.config.version = "1.5.3", e.config.versionCode = 20190529, e.version = e.config.version, e.versionCode = e.config.versionCode, e.config.viewport = { zoom: !0, create: !0 }, e.config.init = { auto: !0 }, e.config.ready = {}, e.config.ajax = {}, e.config.back = {}, e.config.load = {}, e.config.getPageParams = {}, e.config.refresh = {}, e.config.run = {}, e.config.checkVersion = {}, e.config.dialog = {}, e.config.confirm = {}, e.config.alert = {}, e.config.hint = {}, e.config.prompt = {}, e.config.loading = {}, e.config.mask = {}, e.config.list = {}, e.config.listview = {}, e.config.scroll = {}, e.config.pullrefresh = {}, e.config.select = {}, e.config.sidebar = {}, e.config.slide = {}, e.config.actionsheet = {}, e.config.dropdown = {}, e.config.accordion = {}, e.config.stepbar = {}, e.config.rating = {}, e.config.number = {}, e.config.file = {}, e.config.fileselect = {}, e.config.upload = {}, e.config.download = {}, e.config.swipe = {}, e.config.router = {}, e.config.loader = {}, e.config.store = {};
  }(window.bui);var t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      n = function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      o = function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  },
      r = function r(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  };!function (e, n) {
    e.prefix = function (t) {
      return e.config.classNamePrefix + t;
    }, e.showLog = function (n, i) {
      i = i || "";var a = "";"object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? a = n.message + ":" + n.name + "&&stack:" + n.stack : "string" == typeof n && (a = n), e.log && console.error(i + " " + a), e.trace && console.trace && console.trace();
    }, e.guid = function (e) {
      function t() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      }return (e = void 0 === e ? "bui" : e || "") + t().substr(e.length) + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
    }, e.swipeDirection = function (e, t, n, i) {
      var a = t - e,
          o = i - n,
          r = Math.abs(a),
          l = Math.abs(o);return !(r < 9 && l < 9) && (r / l > 3 ? a > 0 ? "swiperight" : "swipeleft" : o > 0 ? "swipedown" : "swipeup");
    }, e.obj = function (i, a) {
      var o = null;a = a || null;var r = e.hasRouter ? router.currentPage() || "body" : "body";r = a || r;var l = n(r),
          c = /^(\d)/,
          s = /^[a-zA-z]/,
          u = /^\[.+\]$/,
          d = /^#\d/,
          f = /^\.\d/,
          h = "string" == typeof i,
          p = /^(html|head|body|header|main|footer|ul|li|section|dt|dd|div|span|img|article|i|strong|input|textarea|select|h1|h2|h3|h4|h5|h6|p)$/gi;if ("object" === (void 0 === i ? "undefined" : t(i))) return o = n(i);if (h && c.test(i)) return o = l.find("[id='" + i + "']");if (h && s.test(i)) {
        var g = p.test(i) || u.test(i) ? i : "#" + i;return o = l.find(g);
      }return d.test(i) ? o = l.find("[id='" + i.substr(1) + "']") : f.test(i) ? o = l.find("[class='" + i.substr(1) + "']") : i && (o = l.find(i)), o;
    }, e.objId = function (t) {
      return e.obj(t, "html");
    }, e.selector = function (e) {
      return void 0 === e ? this : n(e, this);
    }, e.widget = function (e) {
      return e && e in this ? this[e] : this;
    }, e.option = function (t, i) {
      if ("object" !== e.typeof(t) && void 0 === i) return "string" == typeof t ? this.config[t] : this.config;if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;if (t && "object" === e.typeof(t)) {
        var a = n.extend(this.config, t);return this.init(a);
      }if (this.config.hasOwnProperty(t)) {
        var o = {};o[t] = i;var a = n.extend(this.config, o);return this.init(a);
      }return this;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.emitter = function () {
      function n() {
        this.handle = Object.create(null);
      }return n.prototype.on = function (e, t, n) {
        return "function" == typeof t ? (n = t, t = this) : (n = n, t = t || this), t.handle = t.handle || {}, (e && e.indexOf(",") > -1 ? e.split(",") : [e]).forEach(function (e, i) {
          void 0 === t.handle[e] && (t.handle[e] = []), t.handle[e].push(n);
        }), t;
      }, n.prototype.off = function (n, i, a) {
        if ("function" == typeof i ? (a = i, i = this) : "function" == typeof a ? (a = a, i = i || this) : i = this, void 0 === n) i.handle = Object.create(null);else if ("string" == typeof n && "function" == typeof a) {
          var o = i.handle[n] || [];e.array.remove(o, a);
        } else "string" == typeof n && ("object" !== t(i.handle) && (i.handle = {}), i.handle[n] = []);return i;
      }, n.prototype.one = function (e, t) {
        function n() {
          t && t.apply(i, arguments), i.off(e, n);
        }var i = this;return this.on(e, n), this;
      }, n.prototype.trigger = function (e) {
        try {
          if (this.handle[arguments[0]] instanceof Array) {
            var t = this.handle[arguments[0]],
                n = [].slice.apply(arguments);n.shift();for (var i = 0, a = t.length; i < a; i++) {
              t[i] && t[i].apply(this.self || this, n);
            }
          }
        } catch (e) {}return this;
      }, n.prototype.notify = function () {
        try {
          for (var e in this.handle) {
            if (this.handle[e] instanceof Array) for (var t = this.handle[e], n = 0, i = t.length; n < i; n++) {
              t[n] && t[n].apply(this.self || this);
            }
          }
        } catch (e) {}return this;
      }, function (e) {
        return new n();
      };
    }();var i = e.emitter();e.on = i.on, e.off = i.off, e.trigger = i.trigger, e.one = i.one;
  }(window.bui || {}, window.libs), function (e, n) {
    e.store = function (i) {
      function a() {
        Te = e.hasRouter ? router.$ : n, Oe = "object" === t(re.el) ? n(re.el) : Te(re.el), Ce = Oe && Oe.parent(), je = Oe && Oe.children(), ze.$el = Oe, ze.$parent = Ce, ze.$children = je, ze.$data = le;for (var i in de) {
          de[i] = de[i].bind(ze);
        }return ze.$method = de, ie.call(ze, "beforemount"), re.beforeMounts.forEach(function (e, t) {
          e.call(ze);
        }), W(le), de && h(), he && c(), se && f(), l(), pe ? re.needCompile && router && router.on("complete", function (e) {
          re.needCompile && p(), Le && re.mounteds.forEach(function (t, n) {
            t.call(ze, e);
          }), Ne = n.extend(!0, {}, le), me = !1, be = !0, ie.call(ze, "mounted", e), Le = !1;
        }) : (Le || ne(), ve && r(), re.needCompile && p(), re.mounteds.forEach(function (e, t) {
          e.call(ze);
        }), Ne = n.extend(!0, {}, le), me = !1, be = !0, ie.call(ze, "mounted"), Le = !1), this;
      }function r() {
        var e = Oe.html();return e = g(e), Oe.html(e), this;
      }function l() {
        for (var e in le) {
          !function (e) {
            Object.defineProperty(ze, e, { configurable: !0, get: function get() {
                return Pe && console.log("1. module getting " + e, Se), !me && be ? (me = !0, be = !1, Se = []) : (me = !1, be = !1), le[e];
              }, set: function set(t) {
                Pe && console.log("2. module setting " + e, Se), Se = [], le[e] = t, Ne[e] = t;
              } });
          }(e);
        }
      }function c() {
        Object.keys(he).forEach(function (e, t) {
          d(e, he[e]);
        });
      }function s(t) {
        return ee("nexttick", function (n) {
          try {
            t && t.call(ze, n);
          } catch (n) {
            e.showLog(n);
          }
        }), this;
      }function u(t, n) {
        var i = "nexttick-" + t;return ye.hasOwnProperty(i) ? this : (ye[i] = n, ee("nexttick", function (n) {
          if (n.keyname === t) {
            we[t].pop();try {
              0 == we[t].length && ye[i] && ye[i].call(ze, n);
            } catch (n) {
              e.showLog(n);
            }
          }
        }), this);
      }function d(t, n) {
        return ee(t, function (t) {
          var i = [t.value, t.preValue || "", t];if ("init" !== t.action) {
            var a = n;try {
              switch (e.typeof(a)) {case "function":
                  a.apply(ze, i);break;case "array":
                  a.forEach(function (e, t) {
                    e.apply(ze, i);
                  });break;case "string":
                  new Function(a + "(" + t.value + "," + (t.preValue || "") + ")")();break;default:
                  a.apply(ze, i);}
            } catch (t) {
              e.showLog(t);
            }
          }
        }), this;
      }function f() {
        Object.keys(se).forEach(function (t) {
          try {
            if (le.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);var n = se[t];Object.defineProperty(ze, t, { get: function get() {
                var e,
                    i = "function" == typeof n ? n.bind(this) : n.get.bind(this);return Ie.target = function () {
                  var e = i();ie(t, { target: null, value: e, action: "set", keyname: t, param: [], origin: Ne }), Se = [];
                }, e = i(), Ie.target = null, Se = [], e;
              }, set: n && "object" === e.typeof(n) ? n.set || function () {} : function () {} });
          } catch (e) {}
        });
      }function h() {
        Object.keys(de).forEach(function (t) {
          try {
            if (le.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);Object.defineProperty(ze, t, { get: function get() {
                return de[t].bind(this);
              }, set: function set() {} });
          } catch (e) {}
        });
      }function p(i) {
        var a = null,
            o = null;void 0 === i ? (a = Oe, o = re) : "string" == typeof i ? (a = Te(i), o = re) : i && "object" === (void 0 === i ? "undefined" : t(i)) && (a = Te(i.el), o = n.extend(!0, {}, re, i));try {
          var r = !0;if (o.beforeCompiles.forEach(function (e, t) {
            if (!1 === (r = e.call(ze, o))) return !1;
          }), !1 === r) return Se = [], !1;I(a), m(a), Ee || (w(a), x(a), y(a), Ee = !0), Se = [], o.compileds.forEach(function (e, t) {
            e.call(ze, o);
          });
        } catch (t) {
          e.showLog(t);
        }
      }function g(t) {
        var i = this,
            a = t || "",
            o = new RegExp("{{[\\s]?" + ce + ue + "(.*?)}}", "mg");return a = a.replace(o, function (t, a) {
          var o = a.split(ce + ue);"" === n.trim(o[0]) && o.shift();var r = o.length > 0 && e.unit.getKeyValue(o.join("."), Ne) || "";return "function" == typeof r ? r.call(i) : r;
        });
      }function v(t, n) {
        var i = void 0;if (t in Ae) i = Ae[t];else {
          if (void 0 === (i = e.unit.getKeyValue(t, n))) return void (Pe && console.warn("请检查 " + t + " 在bui.store scope:" + ce + " 中有没有声明定义"));Ae[t] = i;
        }return i;
      }function m(t) {
        var n = t,
            i = [],
            a = n.html() || "",
            o = a.match(De) || [],
            r = e.array.uniq(o);r.length && r.forEach(function (t, a) {
          var o = n.find("[" + t + "*=" + ce + "]");o.length && o.each(function (n, a) {
            var o = this,
                r = "",
                l = U.call(this, "" + t),
                c = l[0] && l[0].keyname || "",
                s = c.indexOf(".length"),
                u = s > -1 ? c.substr(0, s) : c,
                d = l[0] && l[0].param;v(u, ze);var f = U.call(this, "b-linked");if (f.length && f.forEach(function (t, n) {
              ee(t.keyname, function (t) {
                ie(c, { target: null, value: e.unit.getKeyValue(c, ze), action: "set", keyname: c, param: d, origin: Ne });
              });
            }), "b-show" === t) switch (l[0] && l[0].rule) {case "!":
                r = "b-hide";break;default:
                r = "b-show";} else r = t;if (pe) {
              var h = e.array.compare(Fe[r], u);!h && Fe[r].push(u), !h && ee(u, Re[r].bind(o));
            } else !Le && ne(u), ee(u, Re[r].bind(o));e.array.compare(i, u) || i.push(u), Se = [], me = !1, be = !0;
          });
        }), b(i);
      }function b(t) {
        t.forEach(function (t, n) {
          ie(t, { target: null, action: "init", value: e.unit.getKeyValue(t, ze), param: null, keyname: t, origin: Ne }), Se = [];
        });
      }function w(t) {
        function i(e) {
          var t = e.target.value;X(U.call(this, "b-model")[0].keyname, t), Se = [], e.stopPropagation();
        }function a(t) {
          var n = this.getAttribute("value") || this.checked,
              i = this.getAttribute("type"),
              a = U.call(this, "b-model"),
              o = a[0].keyname,
              r = null;switch (r = v(o, ze), i) {case "checkbox":
              this.checked && (r && "array" === e.typeof(r) ? !e.array.compare(r, n) && r.push(n) : X(o, n), this.checked = !0), this.checked || (r && "array" === e.typeof(r) ? e.array.remove(r, n) : X(o, n), this.checked = !1);break;case "radio":default:
              X(o, n);}Se = [], t.stopPropagation();
        }function o(t) {
          var i = n(this).val(),
              a = (this.selectedIndex, this.multiple),
              o = U.call(this, "b-model"),
              r = o[0].keyname,
              l = null;switch (l = v(r, ze), a) {case !0:
              "array" !== e.typeof(l) && e.showLog(r + "的类型必须为数组"), i.splice(0, 0, 0, i.length + 1), l.splice.apply(l, i);break;default:
              X(r, i);}Se = [], t.stopPropagation();
        }var r = t,
            l = '[type="text"][b-model*=' + ce + '],\n                                [type="search"][b-model*=' + ce + '],\n                                [type="password"][b-model*=' + ce + '],\n                                [type="url"][b-model*=' + ce + '],\n                                [type="number"][b-model*=' + ce + '],\n                                [type="email"][b-model*=' + ce + '],\n                                [type="range"][b-model*=' + ce + "],\n                                textarea[b-model*=" + ce + "]";r.on(ge, l, i);var c = '[type="checkbox"][b-model*=' + ce + '],\n                                [type="radio"][b-model*=' + ce + "]";r.on("change", c, a);var s = "select[b-model*=" + ce + "]";r.on("change", s, o);
      }function y(e) {
        e.on("change", "[b-checked*=" + ce + "]", function (e) {
          var t = this.checked;X(U.call(this, "b-checked")[0].keyname, t), Se = [], e.stopPropagation();
        });
      }function x(e) {
        var t = e;t.on("click", "[b-click*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-click")) return !1;
        }), t.find("[b-touchstart*=" + ce + "]").length && t.on("touchstart", "[b-touchstart*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-touchstart")) return !1;
        }), t.find("[b-touchmove*=" + ce + "]").length && t.on("touchmove", "[b-touchmove*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-touchmove")) return !1;
        }), t.find("[b-touchend*=" + ce + "]").length && t.on("touchend", "[b-touchend*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-touchend")) return !1;
        }), t.find("[b-focus*=" + ce + "]").length && t.on("focus", "[b-focus*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-focus")) return !1;
        }), t.find("[b-change*=" + ce + "]").length && t.on("change", "[b-change*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-change")) return !1;
        }), t.find("[b-blur*=" + ce + "]").length && t.on("blur", "[b-blur*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-blur")) return !1;
        }), t.find("[b-submit*=" + ce + "]").length && t.on("submit", "[b-submit*=" + ce + "]", function (e) {
          if (!1 === k.call(this, e, "b-submit")) return !1;
        });
      }function k(t, n) {
        var i = U.call(this, n),
            a = i[0].keyname,
            o = i[0].param,
            r = null;o.push(t);try {
          r = v(a, ze);var l = "function" == typeof r && r.apply(ze, o);return Se = [], ie(a, { target: this, value: r, action: "set", keyname: a, param: o, origin: Ne }), l;
        } catch (t) {
          e.showLog(t);
        }
      }function I(t) {
        var n = t,
            i = n.find("[b-template*=" + ce + "]"),
            a = [];if (we = {}, i.length) try {
          i.each(function (t, n) {
            var i = this,
                o = Te(i),
                r = U.call(this, "b-template"),
                l = r[0].keyname,
                c = r[0].param,
                s = ce + ue;if (!c[0]) return void console.error('b-template 需要传数据源, 格式为: b-template="page.template(page.sources)"');var u = c[0].replace(new RegExp(s), ""),
                d = o.attr("b-command"),
                f = d || "html",
                h = o.attr("b-children") || o.children()[0] && o.children()[0].tagName;v(u, ze);pe && ne(u), we.hasOwnProperty(u) ? we[u].push(u) : we[u] = [u], ee(u, function (t) {
              var n,
                  i = t.param;switch (t.action) {case "push":case "unshift":
                  n = i;break;case "splice":
                  n = i.slice(2) || "";break;default:
                  n = t.value;}if (l in fe) {
                c[0] = n;var a = void 0 !== n && "undefined" !== n && fe[l] && fe[l].apply(ze, c) || "";pe && (o = Te('[b-template*="' + (s + u) + '"]'));var r = h ? o.children(h) : o.children(),
                    d = null;switch (Le = !0, t.action) {case "push":
                    o.append(a), r = o.children(h), d = r.last(), m(d);break;case "unshift":
                    o.prepend(a), r = o.children(h), d = r.first(), m(d);break;case "pop":
                    var p = r.length - 1;r.eq(p).remove(), r = o.children(h), d = r.last(), m(d);break;case "shift":
                    r.eq(0).remove(), r = o.children(h), d = r.first(), m(d);break;case "length":
                    break;case "splice":
                    var g = parseInt(i[0]),
                        v = parseInt(i[1]),
                        b = r.length,
                        w = b > 0;if (0 == v) {
                      if (w && b - 1 >= g) {
                        r.eq(g).before(a), r = o.children(h);for (var y = 0; y < n.length; y++) {
                          d = r.eq(g + y), m(d);
                        }
                      } else {
                        o.append(a), r = o.children(h);for (var y = 0; y < n.length; y++) {
                          d = r.last(), m(d);
                        }
                      }
                    } else if (v > 0) {
                      if (void 0 !== i[2]) if (w && b - 1 >= g) {
                        r.eq(g).before(a), r = o.children(h);for (var y = 0; y < n.length; y++) {
                          d = r.eq(g + y), m(d);
                        }
                      } else {
                        o.append(a), r = o.children(h);for (var y = 0; y < n.length; y++) {
                          d = r.last(), m(d);
                        }
                      }for (var y = 0; y < v; y++) {
                        r.eq(g + n.length + y).remove();
                      }
                    }break;case "reverse":case "sort":
                    o.html(a);break;default:
                    o[f](a);}ie.call(ze, "nexttick", t);
              } else e.showLog("找不到对应的模板,请检查下 scope:" + ce + " 的templates是否存在" + l, "bui.store");
            }), e.array.compare(a, u) || a.push(u), Se = [];
          }), b(a);
        } catch (t) {
          e.showLog(t);
        }
      }function T(t) {
        var n = O.call(this, t, "b-text"),
            i = "",
            a = e.typeof(t.value),
            o = n.attr("b-text"),
            r = U.call(this, "b-text"),
            l = (r[0].keyname, r[0].param);switch (a) {case "array":
            i = C(t, o);break;case "function":
            i = t.value.apply(ze, l);break;default:
            i = t.value;}n.text(i), Se = [];
      }function O(e, t) {
        var i = ce + ue + e.keyname;return pe ? n("[" + t + '="' + i + '"]') : Te(this);
      }function C(e, t) {
        return t.indexOf(".length") > -1 ? e.value.length || 0 : e.value instanceof Array ? e.value.join(",") : e.value;
      }function j(t) {
        var n = O.call(this, t, "b-html"),
            i = "",
            a = e.typeof(t.value),
            o = n.attr("b-html"),
            r = U.call(this, "b-html"),
            l = (r[0].keyname, r[0].param);switch (a) {case "array":
            i = C(t, o);break;case "function":
            i = t.value.apply(ze, l);break;default:
            i = t.value;}n.html(i), Se = [];
      }function S(e) {
        var t = O.call(this, e, "b-value");pe ? t.each(function (t, n) {
          E.call(this, e);
        }) : E.call(t[0], e), Se = [];
      }function E(t) {
        var n = this.getAttribute("type"),
            i = this.value,
            a = this,
            o = this.getAttribute("b-value");switch (n) {case "radio":
            i == t.value ? this.checked = !0 : this.checked = !1;break;case "checkbox":
            "array" === e.typeof(t.value) && t.value.forEach(function (e, t) {
              i == e && (a.checked = !0);
            });break;default:
            this.value = C(t, o);}
      }function L(e) {
        var t = O.call(this, e, "b-model");pe ? t.each(function (t, n) {
          N.call(this, e);
        }) : N.call(t[0], e);
      }function N(e) {
        var t = this.getAttribute("type"),
            i = this.value,
            a = (e.param, this);if ("SELECT" === this.nodeName && this.multiple) return void (e.value.length > 1 ? e.value.forEach(function (e, t) {
          "string" == typeof e ? n(a).find("option[value=" + e + "]").attr("selected", !0) : n(a).find("option[value=" + e.value + "]").attr("selected", !0);
        }) : this.value = e.value[0]);switch (t) {case "radio":
            i == e.value ? this.checked = !0 : this.checked = !1;break;case "checkbox":
            if (i && e.value instanceof Array) switch (e.action) {case "push":case "unshift":
                e.param.filter(function (e, t) {
                  if (i === e) return void (a.checked = !0);
                });break;case "pop":case "shift":
                e.param.filter(function (e, t) {
                  i === e && (a.checked = !1);
                });break;case "splice":
                var o = e.param,
                    r = parseInt(o[1]),
                    l = o.slice(2);0 == r ? l.filter(function (e, t) {
                  i === e && (a.checked = !0);
                }) : r > 0 && (void 0 !== o[2] && l.filter(function (e, t) {
                  i === e && (a.checked = !0);
                }), e.param.filter(function (e, t) {
                  i === e && (a.checked = !1);
                }));break;case "length":
                break;default:
                e.value.filter(function (e, t) {
                  i == e && (a.checked = !0);
                });} else e.value ? this.checked = !0 : this.checked = !1;break;default:
            this.value = e.value;}Se = [];
      }function B(e) {
        var t = O.call(this, e, "b-show"),
            i = n(this)[0].style.display || t.css("display"),
            a = t.attr("class") || "",
            o = a.indexOf("bui-box") > -1 || i.indexOf("flex") > -1 || i.indexOf("box") > -1;e.value ? o ? t.css("display", "-webkit-box") : t.css("display", "block") : t.css("display", "none"), Se = [];
      }function P(e) {
        var t = "!" + ce + ue + e.keyname,
            i = pe ? n('[b-show="' + t + '"]') : Te(this);e.value ? i.css("display", "none") : i.css("display", "block");
      }function D(e) {
        this.checked = !!e.value, Se = [];
      }function R(e) {
        var n = O.call(this, e, "b-bind"),
            i = this,
            a = e.keyname,
            o = e.value;if ("object" === (void 0 === o ? "undefined" : t(o))) {
          for (var r in o) {
            !function (t) {
              ee(a + "." + t, function (n) {
                F(O.call(i, e, "b-bind"), t, n.value);
              }), F(n, t, o[t]);
            }(r);
          }
        } else {
          var l = "string" == typeof a && a.split(".");F(n, l[l.length - 1], o);
        }
      }function F(e, n, i) {
        switch (n) {case "disabled":
            i ? e.attr(n, i) : e.removeAttr(n);break;case "checked":
            e.prop(n, i);break;default:
            var a = "object" === (void 0 === i ? "undefined" : t(i)) ? JSON.stringify(i) : i;e.attr(n, a);}Se = [];
      }function A(e) {
        var t = O.call(this, e, "b-src");t.attr("src", e.value), Se = [];
      }function z(e) {
        var t = O.call(this, e, "b-id");t.attr("id", e.value), Se = [];
      }function M(e) {
        var t = O.call(this, e, "b-href");t.attr("href", e.value), Se = [];
      }function H(e) {
        var n = O.call(this, e, "b-style"),
            i = this;if ("object" === t(e.value)) {
          for (var a in e.value) {
            !function (t) {
              ee(e.keyname + "." + t, function (n) {
                O.call(i, e, "b-style").css(t, n.value);
              }), n.css(e.value);
            }(a);
          }
        } else n.css(e.keyname, e.value);Se = [];
      }function V(n) {
        var i = O.call(this, n, "b-class"),
            a = this;this.classList;if ("object" === t(n.value)) {
          if ("array" === e.typeof(n.value)) i.attr("class", ""), n.value.forEach(function (e, t) {
            !i.hasClass(e) && i.addClass(e);
          });else {
            for (var o in n.value) {
              !function (e) {
                var t = n.value[e],
                    o = n.preValue && n.preValue[e] || "";ee(n.keyname + "." + e, function (t) {
                  q(O.call(a, n, "b-class"), e, t.value);
                }), q(i, e, t, o);
              }(o);
            }
          }
        } else {
          var r = "string" == typeof n.keyname && n.keyname.split(".");q(i, r[r.length - 1], n.value, n.preValue);
        }Se = [];
      }function q(e, t, n, i) {
        "boolean" == typeof n ? (n && e.addClass(t), !n && e.removeClass(t)) : "string" == typeof n && (pe && e.removeClass(n), i && e.removeClass(i), n && !e.hasClass(n) && e.addClass(n));
      }function U(t) {
        var n = [],
            i = this,
            a = this.getAttribute(t) || "",
            o = a.indexOf("&") > -1 ? a.split("&") : a && [a] || [];try {
          o.forEach(function (e, t) {
            var a = {},
                o = $.call(i, e);a.scope = ce, a.rule = o.rule, a.keyname = o.name, a.param = o.param, a.eventType = o.eventType, a.eventProperty = o.eventProperty, n.push(a);
          });
        } catch (t) {
          e.showLog("参数处理出错");
        }return n;
      }function $(t) {
        try {
          var i = /([^@|\(|\)]+)/g,
              a = t ? t.match(i) : [],
              o = "",
              r = "",
              l = null,
              c = [],
              s = null,
              u = this,
              d = "",
              f = n(u).attr("b-target"),
              h = f ? n(u).parents(f)[0] || u : u,
              p = "",
              g = "";if (l = a[0] && a[0].indexOf(ce + ue) > -1 ? a[0].split(ce + ue) : [ce, a[0]], d = l[0].split(ce), d = d[0] || d[1] || "", o = ce, r = l[1] || "", r.indexOf("$index") > -1) {
            var v = n(h).index();r = r.replace("$index", v);
          } else if (r.indexOf("$id") > -1) {
            var m = h.id;r = r.replace("$id", m);
          } else if (r.indexOf("$parentIndex") > -1) {
            var b = n(h).parent().index();r = r.replace("$parentIndex", b);
          }if (void 0 !== a[1]) {
            var w = a[1] || "";try {
              var y = /\{.+\}$/g,
                  x = /\[.+\]$/g,
                  k = /([a-zA-Z0-9][-a-zA-Z0-9\._]{0,62})|(\{.+\})|(\[.+])|([$\w\.]+)|([\d\.]+)|([\u4e00-\u9fa5|\w|\d]+)/g,
                  I = w ? w.match(k) : [];c = I.map(function (e, t) {
                var i = e,
                    a = n(h).attr("b-target"),
                    o = a ? n(h).parents(a)[0] || h : h;switch (e) {case "$this":
                    i = o;break;case "$index":
                    i = n(o).index();break;case "$parentIndex":
                    i = n(o).parent().index();break;case "$parent":
                    i = o.parentNode;break;case "$children":
                    i = n(o).children();break;case "$id":
                    i = o.id;break;case "$text":
                    i = o.textContent;break;case "$value":
                    i = o.value;break;case "$html":
                    i = o.innerHTML;}return y.test(e) || x.test(e) ? JSON.parse(e) : i;
              });
            } catch (t) {
              e.showLog(t, "getArguments"), c = [];
            }
          }void 0 !== a[2] && (s = a[2].indexOf(".") > -1 ? a[2].split(".") : [a[2]], p = s[0], g = s[1] || "");
        } catch (n) {
          e.showLog("参数格式错误:" + t);
        }return { scope: o, rule: d, name: r, param: c, eventType: p, eventProperty: g };
      }function W(e, t) {
        return _(e, t);
      }function _(t, n) {
        function i(t, n) {
          var i = t[n];if (i instanceof Array ? Y(i, n) : K(t, n), i && "object" === e.typeof(i)) return W(i);
        }if (n && "array" === e.typeof(n)) {
          if (n.length > 1) {
            var a = n.pop(),
                o = e.unit.getKeyValue(n.join("."), t);i(o, a);
          } else i(t, n[0]);
        } else Object.keys(t).forEach(function (e) {
          i(t, e);
        });
      }function K(n, i) {
        var a = n[i],
            o = "function" == typeof a ? a.call(ze) : a,
            r = [];Object.defineProperty(n, i, { enumerable: !0, configurable: !0, get: function get(e) {
            return Pe && console.log("3. data getting " + i + ":", o), ke.target = this, (me || !me && be) && Se.push(i), Ie.target && r.push(Ie.target), o;
          }, set: function set(n) {
            if (n === o) return Se = [], xe = !1, me = !1, be = !0, !0;ke.target === this && (Se = []), ke.target = this, (!be || !me && be) && Se.push(i);var a = Se.join(".");!xe && ie.call(ze, "beforeupdate", { action: "set", value: n, preValue: o, keyname: a, origin: Ne }), Pe && console.log("4. data setting " + a, n);var l = e.unit.getKeyValue(a, Ne);return o = n, r.forEach(function (e) {
              return e();
            }), !xe && ie(a, { action: "set", value: o, preValue: l, keyname: a, origin: Ne }), e.unit.setKeyValue(a, o, Ne), o instanceof Array ? W(le, Se) : "object" === (void 0 === o ? "undefined" : t(o)) && (re.deep && W(n), o && Object.keys(o).forEach(function (e, t) {
              var n = i + "." + e;Se = [], ie(n, { target: null, value: o[e], preValue: l && l[e], action: "set", keyname: n, origin: Ne });
            })), !xe && ie.call(ze, "update", { action: "set", value: o, preValue: l, keyname: a, origin: Ne }), Se = [], xe = !1, me = !1, be = !0, !0;
          } });
      }function Y(t, n) {
        var i = [],
            a = Array.prototype,
            o = Object.create(a);return ["push", "pop", "shift", "unshift", "splice", "sort", "reverse", "length"].forEach(function (t) {
          var r = a[t];Object.defineProperty(o, t, { enumerable: !0, configurable: !0, value: function value(a) {
              var o = [].concat(Array.prototype.slice.call(arguments)),
                  l = r.apply(this, o);ie.call(ze, "beforeupdate", { target: null, action: t, param: o, value: this, keyname: n, origin: Ne }), i.push(n), n in le || i.unshift(Se.join("."));var c = i.join("."),
                  s = e.unit.getKeyValue(c, Ne);switch (Pe && console.log("5. " + c + " action " + t + " "), t) {case "pop":case "shift":
                  o = [l];}e.unit.setKeyValue(c, this, Ne);var u = Oe.find('[b-template*="' + ce + "." + c + '"]');return ie(c, { target: u, action: t, param: o, value: this, preValue: s, keyname: n, origin: Ne }), i = [], Se = [], me = !1, be = !0, ie.call(ze, "update", { target: u, action: t, param: o, value: this, preValue: s, keyname: n, origin: Ne }), l;
            } });
        }), t.__proto__ = o, t;
      }function J(t) {
        if (void 0 === t) return Ne = Ne;if ("string" == typeof t) {
          var n = e.unit.getKeyValue(t, Ne);return Se = [], n;
        }return Ne;
      }function X(i, a) {
        var r = "string" == typeof i,
            l = [],
            c = null;if (Se = [], r && void 0 !== a) {
          var s, u;Pe && console.log("set " + i + " "), xe = !0, ie.call(ze, "beforeupdate", (s = { action: "set", target: null, value: c, preValue: d }, o(s, "action", "set"), o(s, "keyname", i), o(s, "origin", Ne), s));var d = e.unit.getKeyValue(i, Ne);a && "object" === e.typeof(a) ? (c = n.extend(!0, {}, a), l.push(i), Object.keys(a).forEach(function (e, t) {
            var n = i + "." + e;ie.call(ze, n, { target: null, value: a[e], preValue: d, action: "set", keyname: n, origin: Ne });
          })) : c = a, e.unit.setKeyValue(i, a, le), e.unit.setKeyValue(i, c, Ne), Be[i] = c, ie.call(ze, i, { target: null, value: c, preValue: d, action: "set", keyname: i, origin: Ne }), ie.call(ze, "update", (u = { action: "set", target: null, value: c, preValue: d }, o(u, "action", "set"), o(u, "keyname", i), o(u, "origin", Ne), u)), "object" === (void 0 === a ? "undefined" : t(a)) && (a instanceof Array ? W(le, i.split(ue)) : W(a)), Se = [];
        } else i && "object" === e.typeof(i) && (Ne = n.extend(!0, {}, Ne, i), G(i));return Ne;
      }function Z(t, n) {
        return "string" == typeof t && (e.unit.delKey(t, Ne), n && n.call(ze, t)), Ne;
      }function Q(e, t) {
        return Z(e, function (t) {
          ie(e);
        }), Ne;
      }function G(t, n) {
        for (var i in t) {
          var a = void 0 === n ? i : n + i,
              o = t[i];ie(a, { target: null, value: o, preValue: Ne[i] || "undefined", action: "set", param: null, keyname: a, origin: Ne }), o && "object" === e.typeof(o) && G(o, i + ".");
        }
      }function ee(e, t) {
        var n = ce + ue + e;return ke.on.call(ze, n, t), this;
      }function te(e, t) {
        return ye.hasOwnProperty(e) ? this : (ee(e, t), ye[e] = t, this);
      }function ne(e, t) {
        if (e) {
          var n = ce + ue + e;ke.off.call(ze, n, t);
        } else ze.handle = {};return this;
      }function ie(e) {
        var t = ce + ue + e;return Pe && console.warn(t, "trigger"), arguments[0] = t, ke.trigger.apply(ze, arguments), me = !1, be = !0, xe = !1, this;
      }function ae() {
        return Se = [], me = !1, be = !0, xe = !1, this;
      }var oe = { el: null, scope: "", data: null, extends: null, mixins: [], beforeMounts: [], beforeCompiles: [], compileds: [], mounteds: [], computed: null, methods: null, watch: null, templates: null, beforeMount: null, mounted: null, beforeCompile: null, compiled: null, isPublic: !1, modelEvent: "input", scopeSplit: ".", delayInput: 200, needStatic: !1, needCompile: !0, deep: !0, log: !1, autoinit: !0 },
          re = null;re = function (t) {
        var i = null,
            a = t && t.extends ? [t.extends] : [];e.array.merge(oe.mixins, a, t.mixins || [], [t]);var o = n.extend(!0, {}, oe, e.config.store);return oe.mixins.forEach(function (e, t) {
          e.beforeMount && oe.beforeMounts.push(e.beforeMount), e.beforeCompile && oe.beforeCompiles.push(e.beforeCompile), e.compiled && oe.compileds.push(e.compiled), e.mounted && oe.mounteds.push(e.mounted), i = n.extend(!0, o, e);
        }), i = n.extend(!0, oe, i);
      }(i);var le = re.data,
          ce = re.scope || e.guid(),
          se = re.computed,
          ue = re.scopeSplit,
          de = re.methods,
          fe = re.templates,
          he = re.watch || oe.watch,
          pe = (re.delayInput, re.isPublic),
          ge = re.modelEvent,
          ve = re.needStatic,
          me = !1,
          be = !0,
          we = {},
          ye = {},
          xe = !1,
          ke = e.emitter(),
          Ie = { target: null };re.el ? re.el = re.el : re.el = pe ? "body" : ".bui-page";var Te = null,
          Oe = null,
          Ce = null,
          je = null,
          Se = [],
          Ee = !1,
          Le = !0,
          Ne = le,
          Be = {},
          Pe = void 0 === re.log ? oe.log : re.log,
          De = /b-text|b-html|b-value|b-show|b-hide|b-checked|b-src|b-href|b-bind|b-style|b-class|b-model/gim,
          Re = { "b-text": T, "b-html": j, "b-value": S, "b-show": B, "b-hide": P, "b-checked": D, "b-bind": R, "b-src": A, "b-id": z, "b-href": M, "b-class": V, "b-model": L, "b-style": H },
          Fe = { "b-text": [], "b-html": [], "b-value": [], "b-show": [], "b-hide": [], "b-checked": [], "b-bind": [], "b-src": [], "b-href": [], "b-class": [], "b-model": [], "b-style": [] },
          Ae = {},
          ze = (n.extend(!0, {}, le, de, he, se, fe), { $data: Ne, $methods: de, config: re, watch: d, nextTick: s, oneTick: u, get: J, set: X, delete: Q, del: Q, observer: W, compile: p, compileHtml: g, clearKey: ae, init: a, on: ee, off: ne, one: te, trigger: ie });return re.autoinit && a(), ze;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    function n(n, i) {
      function a(t) {
        var n = i || 750,
            a = document.head.parentNode,
            o = t || (p / n * 100).toFixed(2);return u = o || 48, e.config.viewport.zoom && (a.style.fontSize = u + "px"), e.trigger.call(e, "viewportinit"), this;
      }function o(e) {
        return p || t("body").width() || t("#bui-router").width() || t(".bui-page").width();
      }function r(e) {
        return g || t("body").height() || t("#bui-router").height() || t(".bui-page").height();
      }function l(e) {
        return v;
      }function c(e) {
        return m;
      }function s(e) {
        return h;
      }e.trigger.call(e, "viewportbefore");var u,
          d = document.querySelector("meta[name=viewport]"),
          f = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
          h = window.devicePixelRatio,
          p = document.documentElement.clientWidth,
          g = document.documentElement.clientHeight,
          v = parseInt(p) * parseInt(h),
          m = parseInt(g) * parseInt(h);if (d) e.config.viewport.create && (d.content = f);else {
        var b = document.createElement("meta");b.name = "viewport", b.content = f;var w = document.head;e.config.viewport.create && w.appendChild(b), b = null;
      }var y = [240, 320, 360, 375, 384, 412, 414, 435, 480, 512, 540, 768, 1024, 1536, 2048, 2732, 534, 854, 750],
          x = [32, 42.67, 48, 50, 51.2, 54.93, 55.2, 58, 64, 68.27, 60, 60, 60, 60, 60, 60, 60, 60, 60],
          k = e.array.index(y, document.documentElement.clientWidth);return k > -1 && void 0 === n ? u = x[k] : a(n), { width: o, height: r, fontSize: u, screenWidth: l, screenHeight: c, ratio: s, init: a };
    }e.viewport = n;
  }(window.bui || {}, window.libs), function (e, n) {
    e.loader = function (i) {
      function o(e) {
        return e = e || {}, L = n.extend({}, L, e), this;
      }function r(e) {
        if (void 0 === e) return D;if ("object" === (void 0 === e ? "undefined" : t(e)) && ("modules" in e || "baseUrl" in e)) D = n.extend(!0, {}, D, e), R = D.modules;else if ("object" === (void 0 === e ? "undefined" : t(e)) && "moduleName" in e) {
          var i = u(e);R[e.moduleName] = i || {}, D = n.extend(!1, D, { modules: R }), R = D.modules;
        }return D;
      }function l(e) {
        if ("string" == typeof e) return D.modules[e] || null;
      }function c(t, n) {
        return n && "object" === e.typeof(n) && (n.moduleName = t, r(n)), this;
      }function s(e, t) {
        var n = e,
            i = t.lastIndexOf("/"),
            a = t.substr(0, i);return e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, function (e) {
          var t = a.lastIndexOf("/");return a = a.substr(0, t), "";
        }), n = a ? a + "/" + e : e) : e.indexOf("./") > -1 && (n = a + "/" + e.replace(/\.\//g, "")), n;
      }function u(e) {
        var t = { id: "", moduleName: "", template: "", data: null, depend: [], script: "", style: [], isDefined: !1, isLoaded: !1, beforeCreate: null, created: null, beforeLoad: null, loaded: null, show: null, beforeDestroy: null, destroyed: null, exports: {}, dependExports: [] },
            i = {};return e.moduleName in R && (i = R[e.moduleName]), n.extend(!0, {}, t, i, e);
      }function d(t) {
        L.log && console.log("destroy " + t);var i = "string" == typeof t ? R[t] : null;if (i) {
          i.beforeDestroy && i.beforeDestroy.call(i);var a = n('script[name="' + t + '"]').attr("src");N = e.array.remove(N, a), n('script[name="' + t + '"]').remove(), delete D.modules[t], R = D.modules, i.destroyed && i.destroyed.call(i);
        }
      }function f(t, i, a) {
        var o = { moduleName: "", template: "", data: null, depend: [], beforeCreate: null, created: null, beforeLoad: null, loaded: null, hide: null, show: null, beforeDestroy: null, destroyed: null },
            l = {},
            c = "";try {
          var u = p().name ? p() : h(),
              d = u.name;
        } catch (e) {}var f = [],
            v = [];if (void 0 === t) return e.showLog("define第1个参数不能为空"), this;"function" == typeof t ? (a = t, c = d, i = []) : "object" === e.typeof(t) ? (c = d, i = t.depend || [], a = t.loaded, l = n.extend(!0, {}, o, t)) : "array" === e.typeof(t) ? (a = i, i = t, c = d) : "function" == typeof i ? (c = t, a = i, i = []) : (c = t, i = i, a = a);var m = c in R ? R[c].script || u.src : u.src;if (L.log && console.log("define " + c), i.length) for (var b = 0; b < i.length; b++) {
          var w = i[b],
              y = w.indexOf("./") > -1 ? s(w, m) : w;y.indexOf(".css") > -1 ? y.indexOf("css!") > -1 ? v.push(y.substr(4)) : v.push(y) : (f.push(y), y in R || r({ moduleName: y }));
        }if ("string" == typeof c && "function" == typeof a) {
          var x = function x() {
            var e = [g, R[d] && R[d].exports, R[d]],
                t = [];f.length && f.forEach(function (e, n) {
              R[e] && t.push(R[e].exports);
            });var n = t.concat(e);return a && a.apply(this, n);
          };l = t && "object" === e.typeof(t) ? n.extend(!0, {}, o, t) : n.extend(!0, {}, o), l.moduleName = c, l.depend = f, l.style = v, l.script = m, l.loaded = x, r(l);
        } else e.showLog("define " + c + "模块的参数格式不对");return this;
      }function h(e) {
        var t = window.location.pathname,
            n = t.indexOf(".html"),
            i = "",
            a = "";return n > -1 ? (i = t.substr(0, n), a = i + ".js") : (i = t, a = i + ".js"), { name: i, src: a };
      }function p() {
        var e,
            t,
            i = window.location.href,
            o = [],
            r = document.currentScript;if (i.indexOf("#") > -1 ? o = i.split("#") : o.push(i), S = o[0].replace("/index.html", "") + "/", r) return e = r.src.replace(S, ""), t = r.getAttribute("name") || e.substr("0", e.indexOf(L.scriptSuffix)), { name: t, src: e };try {
          a();
        } catch (e) {
          var l = e.stack || e.sourceURL || e.stacktrace || "",
              c = l.split(/[@ ]/g).pop(),
              s = c.replace(/(:\d+)?:\d+$/i, ""),
              s = s.replace(new RegExp(S, "g"), "");return r = n('script[src="' + s + '"]')[0], t = r ? r.getAttribute("name") : s.replace(L.scriptSuffix, ""), { name: t, src: s };
        }
      }function g(t, n) {
        L.log && console.log("require " + t);if (t && "string" == typeof t) {
          var i = t.indexOf(".html");t = i > -1 ? t.substr(0, i) : t, t = [t];
        }if (n && "function" != typeof n) return e.showLog("require第2个参数格式为function", "bui.loader.require"), this;try {
          v(t, n);
        } catch (t) {
          e.showLog(t, "bui.loader.require");
        }return this;
      }function v(t, n) {
        function i(t, n) {
          function o(e, a) {
            var o = R[e];o && (o.isDefined = !0), o && o.beforeLoad && o.beforeLoad.call(o, o.depend), o && o.depend && o.depend.length && i(o.depend, n), a == t.length - 1 && n && n.apply(o);
          }t = t || [], R = D.modules, t.forEach(function (i, r) {
            var l = R[i];if (R[i] && R[i].style && R[i] && R[i].style.length && I(R[i].style), e.array.compare(a, i) || a.unshift(i), l && l.isLoaded) r == t.length - 1 && (n && n.apply(l), a = []);else if (l && l.loaded) {
              var c = R[i].beforeCreate && R[i].beforeCreate.call(R[i]);if (!1 === c) return !1;R[i].created && R[i].created.call(R[i]), o(i, r);
            } else k(i, function () {
              var e = R[i];if (!1 === (e && e.beforeCreate && e.beforeCreate.call(R[i]))) return !1;e && e.style && e.style.length && I(e.style), e && e.created && e.created.call(R[i]), o(i, r);
            }, function () {
              r == t.length - 1 && (n && n.apply(null), a = []);
            });
          });
        }var a = [];i(t, function () {
          if (b(a)) {
            var e = [];t.forEach(function (i, a) {
              m(i), e.push(R[i] && R[i].exports), a === t.length - 1 && n && n.apply(F, e || []);
            });
          }
        });
      }function m(t) {
        R = D.modules;var n = "string" == typeof t ? R[t] || {} : t,
            i = n.depend || [],
            a = null,
            o = [];n.dependExports = [];try {
          if (i.length) for (var r = 0; r < i.length; r++) {
            var l = i[r],
                c = R[l];c.isLoaded ? o[r] = c.exports : o[r] = m(c) || c.exports, c.exports = o[r], n.dependExports.push(o[r]), c.isLoaded = !0;
          }a = n.isLoaded ? n.exports : n.loaded && n.loaded.apply(n, o), n.exports = a || R[n.moduleName] && R[n.moduleName].exports, n.isLoaded = !0, L.log && console.log("execute " + n.moduleName);
        } catch (t) {
          e.showLog(t, "bui.loader.execute");
        }return a;
      }function b(e) {
        var t = !0,
            n = e || [];if (R = D.modules, n.length) n.forEach(function (e, n) {
          R[e] && !1 === R[e].isDefined && (t = !1);
        });else for (var i in R) {
          R[i] && !1 === R[i].isDefined && (t = !1);
        }return t;
      }function w(t) {
        var n = !0,
            i = [];if (R = D.modules, "string" == typeof t) {
          t.indexOf(",") > -1 ? i = t.split(",") : i.push(t);
        } else t && "array" === e.typeof(t) && (i = t || []);if (i.length) i.forEach(function (e, t) {
          e in R || (n = !1), R[e] && !1 === R[e].isLoaded && (n = !1);
        });else for (var a in R) {
          R[a] && !1 === R[a].isLoaded && (n = !1);
        }return n;
      }function y(t, n, i) {
        return "string" == typeof t ? t.indexOf(".css") > -1 ? (T(t), n && n(t)) : t.indexOf(".html") > -1 || t.indexOf(".htm") > -1 ? x(t, n, i) : k(t, n, i) : t && "array" === e.typeof(t) && t.forEach(function (e, a) {
          e.indexOf(".css") > -1 ? (T(e), a == t.length - 1 && n && n(t)) : e.indexOf(".html") > -1 || e.indexOf(".htm") > -1 ? x(e, n, i) : a == t.length - 1 ? k(e, n, i) : k(e);
        }), this;
      }function x(e, t, i) {
        if (P.hasOwnProperty(e)) return t && t.call(F, P[e], 200), this;"string" == typeof e && n.ajax({ url: e, dataType: "html", success: function success(n, i, a) {
            a.url = e, t && t.call(F, n, i, a), P[e] = n;
          }, error: function error(e, t, n) {
            i && i.call(F, e, t, n);
          } });
      }function k(t, i, a) {
        var o,
            r = this;if (R = D.modules, void 0 === t || "" == t) return a && a.call(r, t), this;if (t in R) o = t, t = R[t].script || o + L.scriptSuffix;else {
          var l = t.indexOf(L.scriptSuffix);l > -1 ? (t = t, o = t.substr(0, l)) : (o = t, t += L.scriptSuffix);
        }var c = document.createElement("script") || {},
            s = L.cache ? "" : "?t=" + new Date().getTime(),
            u = t.indexOf("http://") > -1 || t.indexOf("https://") > -1;c.type = "text/javascript", c.async = L.async, c.src = u ? t + s : D.baseUrl + t + s, c.setAttribute("name", o), c.onload = function () {
          L.log && console.log("create " + t), i && i(t);
        }, c.onerror = function (e) {
          L.log && console.log("createError " + t), a && a(t);
        };var d = e.array.index(N, t),
            f = n('script[name="' + o + '"]').length || n('script[src="' + t + '"]').length;return d > -1 || f ? i && i(t) : d < 0 && (document.body && document.body.appendChild(c), L.cache && N.push(t)), c = null, this;
      }function I(t) {
        var n,
            i = t.length;if ("array" === e.typeof(t)) for (n = 0; n < i; n++) {
          var a = t[n];T(a);
        } else T(t);
      }function T(t) {
        if ("string" != typeof t) return void e.showLog(t + "的格式不正确");if (e.array.index(B, t) < 0) {
          var n = document.createElement("link") || {};n.href = t + (L.cache ? "" : "?t=" + new Date().getTime()), n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), document.head && document.head.appendChild(n), n = null, B.push(t);
        }
      }function O(t, n) {
        return e.on.apply(F, arguments), this;
      }function C(t, n) {
        return e.off.apply(F, arguments), this;
      }function j(t) {
        F.self = this == window || this == F ? null : this, e.trigger.apply(F, arguments);
      }var S,
          E = { cache: !0, async: !1, log: !1, scriptSuffix: ".js" },
          L = n.extend({}, E, e.config.loader, i),
          N = [],
          B = [],
          P = {},
          D = { baseUrl: "", modules: {} },
          R = {},
          F = { init: o, define: f, require: g, destroy: d, map: r, import: y, checkLoad: w, get: l, set: c, on: O, off: C, trigger: j };return F;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.router = function (i) {
      function a(t) {
        if (ye.store = t.store || null, delete t.store, t = n.extend(!0, {}, $, e.config.router, t), $ = ye.config = t, e.hasRouter = !0, be = !0, "pages/main/main.html" === t.indexModule.template && "pages/main/main.js" === t.indexModule.script || (ge = loader.map(t.indexModule)), ne && "effect" in t && re.forEach(function (e, n) {
          e.effect = t.effect;
        }), !t.id) return e.showLog("id 不能为空", "bui.router.init"), !1;if (H = e.objId(t.id), q = bui.mask({ appendTo: H, opacity: 0, autoClose: !1 }), V = e.loading({ display: "block", width: 30, height: 30, opacity: 0 }), K = H.children(".bui-router-main"), Z = t.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", Q = t.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", !K.length) {
          var i = S(t);H.html(i), K = H.children(".bui-router-main");
        }return (t.width > 0 || String(t.width).indexOf("%") > -1) && K.width(t.width), (t.height > 0 || String(t.height).indexOf("%") > -1) && K.height(t.height), X || l(t), R.call(this, "init", { target: H[0] }), ye;
      }function o(e) {
        var e = e || {};return e.width = e.width || $.width, e.height = e.height || $.height, window.viewport = bui.viewport(), Z = e.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", Q = e.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", K.css({ width: Z, height: Q }), R.call(this, "resize", { target: re[re.length - 1] }), this;
      }function r() {
        var e = me.get("hasCache", 0);Boolean(e) && $.reloadCache ? he.load() : c(), de = !0;
      }function l(t) {
        return r(), window.addEventListener("beforeunload", function (e) {
          $.reloadCache && he.save(), R.call(_, "beforeunload", { target: re[re.length - 1] });
        }), t.hash ? (window.addEventListener("hashchange", function (t) {
          var n = s(),
              i = "" == n.pid || "undefined" == n.pid ? "main" : n.pid,
              a = e.array.index(re, i, "pid");a > -1 ? (g({ index: -(re.length - a - 1) }), R.call(_, "popstate", { type: "back", prevTarget: re[a - 1], target: re[a] })) : (d({ url: i, param: n.param, replace: !0 }), R.call(_, "popstate", { type: "load", prevTarget: re[re.length - 2], target: re[re.length - 1] }));
        }), this) : ($.syncHistory && "pushState" in window.history && window.addEventListener("popstate", function (t) {
          var n = s(),
              i = "" == n.pid ? $.indexModule.moduleName : n.pid,
              a = m(i);e.array.index(re, i, "pid") > -1 ? (g({ index: a, param: n.param }), R.call(_, "popstate", { type: "back", prevTarget: re[a - 1], target: re[a] })) : (d({ url: i, param: n.param }), R.call(_, "popstate", { type: "load", prevTarget: re[re.length - 2], target: re[re.length - 1] }));
        }), this);
      }function c(t) {
        try {
          var n = s();if (n.pid) {
            if (n.pid.indexOf("http://") > -1 || n.pid.indexOf("https://") > -1) return void d({ url: n.pid, param: n.param, iframe: !0 });d({ url: n.pid, param: n.param });
          } else d({ url: $.indexModule.moduleName, param: n.param || {} });
        } catch (t) {
          e.showLog(t, "bui.router.loadUrl");
        }
      }function s(e) {
        function t(t, n) {
          for (var i = t && t.substr(n + 1), a = i && i.split("&"), o = 0; o < a.length; o++) {
            var r = e ? decodeURIComponent(a[o].split("=")[1]) : a[o].split("=")[1];u[a[o].split("=")[0]] = r;
          }
        }var n = window.location.hash || window.location.search,
            i = window.location.search,
            a = i && i.indexOf("?"),
            e = 0 != e,
            o = n && n.indexOf("?"),
            r = o > -1 ? n && n.substr(1, o - 1) : window.location.hash.substr(1),
            l = r && r.indexOf($.pageSuffix),
            c = l > -1 ? r.substr(0, l) : r,
            s = l > -1 ? r : r + $.pageSuffix,
            u = {};return o > -1 && (t(i, a), t(n, o)), { pid: c, url: s, param: u };
      }function u(t) {
        var i = n.Deferred(),
            a = function (_a) {
          function a(_x, _x2) {
            return _a.apply(this, arguments);
          }

          a.toString = function () {
            return _a.toString();
          };

          return a;
        }(function (n, a) {
          return b(n.url, function (i) {
            var o = e.guid(),
                r = p(n.url),
                l = r.pid,
                c = (L({ id: o, content: i, pid: l }), []);he.add(l, { id: o, pid: l, template: i }), c.push(l), n.style && "array" === e.typeof(n.style) ? n.style.forEach(function (e, t) {
              c.push(e);
            }) : n.style && "string" === e.typeof(n.style) && c.push(n.style), n.script && "array" === e.typeof(n.script) ? n.script.forEach(function (e, t) {
              c.push(e);
            }) : n.script && "string" === e.typeof(n.script) && c.push(n.script), loader.import(c, function () {
              R.call(ye, "preloadafter", { prevTarget: null, target: null }), a && a(t);
            }, function () {
              R.call(ye, "preloadafter", { prevTarget: null, target: null }), a && a(t);
            });
          }, function (t) {
            e.showLog(n.url + "请求失败"), i.reject(n.url);
          }), i.promise();
        });return t && "object" === e.typeof(t) ? "url" in t && a(t, function () {
          i.resolve(t);
        }) : t && "array" === e.typeof(t) && t.forEach(function (e, n) {
          n == t.length - 1 ? "url" in e && a(e, function () {
            i.resolve(t);
          }) : "url" in e && a(e);
        }), i;
      }function d(t) {
        function i(e) {
          q && q.hide(), d.progress && V && V.hide(), le.removeLast(), $.syncHistory && window.history.back(), f.reject(e);
        }function a(t) {
          te || I in oe ? (c({ pid: I }), ue && r(), t && t()) : (loader.checkLoad(I) ? (c({ pid: I }), t && t()) : loader.require(I, function (n) {
            try {
              if (d.firstAnimate && d.progress && V && V.hide(), oe[I] = n || null, f.resolve(n), G || d.firstAnimate || d.replace) {
                var i = loader.get(I);i && i.show && i.show({ type: "firstload", target: O });
              }t && t();
            } catch (t) {
              e.showLog(t, "bui.router.load"), f.reject();
            }
          }), d.callback && d.callback({ prevTarget: g, target: O }), R.call(ye, "complete", { prevTarget: g, target: O }));
        }function o() {
          W = e.objId(D.id);var t = W.find(".bui-page");t.length && d.autoInit && e.init({ id: t, height: Q });
        }function r(t) {
          W = e.objId(w), C(), j();try {
            if (G || te || d.replace || d.part) {
              !d.firstAnimate && d.progress && V && V.hide(), t && t(), q && q.hide(), W.css("zIndex", 5);var n = le.getLast(),
                  i = "pageshow-" + n.pid;R.call(ye, "pageshow", { type: "load", target: le.getLast() }), R.call(ye, i, { type: "load", target: le.getLast() });
            } else Y && Y.hide(), J && J.show(function () {
              !d.firstAnimate && d.progress && V && V.hide(), t && t(), W.css("zIndex", 5), q && q.hide();var e = re[re.length - 2],
                  n = le.getLast(),
                  i = loader.get(n.pid),
                  a = loader.get(e.pid),
                  o = "pageshow-" + n.pid,
                  r = "pagehide-" + e.pid;R.call(ye, r, { type: "load", target: re[re.length - 2] }), R.call(ye, o, { type: "load", target: le.getLast() }), R.call(ye, "pagehide", { type: "load", target: re[re.length - 2] }), R.call(ye, "pageshow", { type: "load", target: le.getLast() }), a && a.hide && a.hide({ type: "load", target: re[re.length - 2] }), i && i.show && i.show({ type: "load", target: le.getLast() });
            });
          } catch (t) {
            e.showLog(t, "bui.router.doAnimate");
          }
        }function l(t) {
          var n = "";if (ye.store && (t = ye.store.compileHtml(t)), d.part) n = N({ content: t }), d.id ? y.html(n) : e.showLog("id 不能为空", "router.loadPart");else if (d.replace) {
            var i = le.getLast();y = re.length ? e.objId(i.id) : K, i.pid = I, i.url = T, i.param = v;e.array.index(re, I, "pid");n = I in ce ? he.get(I, "template") : N({ content: t }), y.html(n).attr("data-page", I);
          } else te || (n = L({ id: w, content: t, pid: I }), K && K.attr("data-main", w).append(n));return n;
        }function c(e) {
          var t = e || le.getLast(),
              n = ve[t.pid] && ve[t.pid] || {},
              i = n.loaded,
              a = i && i.apply(n, n.dependExports) || n.exports;oe[t.pid] = a || null, n.exports = a, te = !1, G = !1, R.call(ye, "refresh", { prevTarget: g, target: t }), q && q.hide(), $.progress && V && V.hide(), f.resolve(a);
        }function s() {
          var e = re[re.length - 2] || null,
              t = le.getLast();G && !d.part && (R.call(ye, "firstload", { prevTarget: e, target: t }), G = !1), d.part ? R.call(ye, "loadpart", { prevTarget: e, target: t }) : R.call(ye, "load", { prevTarget: e, target: t });
        }var u = { id: "", url: "", param: {}, effect: "", path: $.path, firstAnimate: $.firstAnimate, progress: $.progress, reload: $.reload, autoInit: $.autoInit, replace: !1, iframe: !1, decode: !1, part: !1, cache: $.cache, callback: null, beforeLoad: $.beforeLoad },
            d = n.extend(!0, {}, u, t),
            f = n.Deferred(),
            g = le.getLast() || null;re[re.length - 2];d.url.indexOf("./") > -1 && (d.url = h(d.url, g)), d.path && (d.path = "/" == d.path[d.path.length - 1] ? d.path : d.path + "/"), d.url = d.url in ve || d.iframe || d.url.indexOf("http:") > -1 ? d.url : d.path + d.url;var v = null,
            m = {};d.id = (d.id && d.id.indexOf("#") > -1 ? d.id.substr(1) : d.id) || "";var w = d.replace ? g.id : d.id || e.guid(),
            y = e.objId(w);if (!d.url) return e.showLog("url 不能为空", "bui.router.load"), f.promise();if (d.url = d.decode ? decodeURIComponent(d.url) : d.url, d.url.indexOf("tel:") >= 0 || d.url.indexOf("mailto:") >= 0 || d.url.indexOf("sms:") >= 0) return e.unit.openExtral(d.url), f.promise();if (d.url && d.url.indexOf("?") > -1) {
          var x = d.url.split("?");m = e.unit.keyStringToObject(x[1]), d.url = x[0];
        }v = n.extend(!0, {}, m, d.param), "undefined" == d.url && (d.url = "main"), d.iframe = Boolean(d.iframe);var k = p(d.url),
            I = k.pid,
            T = d.iframe ? d.url : k.url,
            O = { id: w, pid: I, url: T, replace: d.replace, param: v, part: {}, effect: t.effect || $.effect };ie = O;var S = "function" == typeof d.beforeLoad ? d.beforeLoad.call(ye, { prevTarget: g, target: O }) : d.beforeLoad;if (R.call(ye, "loadbefore", { prevTarget: g, target: O }), R.call(ye, "beforeload", { prevTarget: g, target: O }), !1 === S) return this;q && q.show(), d.progress && V && V.show(), loader.map({ moduleName: I, id: w });var B = loader.get(O.pid);if (B && B.beforeLoad && B.beforeLoad(), re.length && d.effect) {
          var P = re.length - 1;re[P].effect = d.effect;
        }!te && !d.part && !d.replace && le.add(O), d.replace && le.replace(O);var D = le.getLast();if (d.part && (D.part && (D.part[w] = { id: w, pid: I, url: T, param: v }), D.currentPart = w, D.part && re.splice(re.length - 1, 1, D)), d.part || (fe = O), I in ce) !function (e) {
          l(he.get(e.pid, "template")), e.part ? c(e) : (o(), !te && r(function () {
            e.progress && V && V.hide();
          }), c(e));
        }({ pid: I, progress: d.progress, part: d.part }), d.callback && d.callback({ prevTarget: g, target: O }), R.call(ye, "complete", { prevTarget: g, target: O });else {
          if (d.iframe) return function (e) {
            var t = E({ id: e.id, pid: e.pid, url: e.url, param: e.param });K && K.attr("data-main", e.id).append(t), r(function () {
              d.progress && V && V.hide();
            });
          }({ id: w, pid: I, url: d.url, param: v }), f.promise();if (d.part) return function () {
            b(T, function (t, n, i) {
              e.objId(w).html(t), a(s), d.cache && he.add(I, { id: w, pid: I, template: t }), q && q.hide(), d.progress && V && V.hide();
            }, function (e, t, n) {
              i(T), R.call(ye, "loadfail", e, t, n);
            });
          }(), f.promise();!function () {
            b(T, function (e, t, n) {
              if (l(e), d.cache && he.add(I, { id: w, pid: I, template: e }), o(), d.firstAnimate) return void r(function () {
                a(s), d.progress && V && V.hide(), pe.add(I, { id: w, pid: I, param: v });
              });r(function () {
                d.progress && V && V.hide();
              }), a(s), pe.add(I, { id: w, pid: I, param: v });
            }, function (e, t, n) {
              i(T), R.call(ye, "loadfail", e, t, n);
            });
          }();
        }return f.promise();
      }function f(e) {
        var t = { id: "", url: "", param: {}, part: !0 };return d(n.extend(!0, {}, t, e)).promise();
      }function h(e, t) {
        var n = e,
            i = t.url.lastIndexOf("/"),
            a = t.url.substr(0, i);return e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, function (e) {
          var t = a.lastIndexOf("/");return a = a.substr(0, t), "";
        }), n = a ? a + "/" + e : e) : e.indexOf("./") > -1 && (n = a + "/" + e.replace(/\.\//g, "")), n;
      }function p(e) {
        var t = "",
            n = e;ge = loader.map(), ve = ge.modules;var i = n.indexOf($.pageSuffix);return i > -1 ? (t = n, (n = t.substr(0, i)) in ve || (n = T(t) || n)) : (n = n, t = ve[n] && ve[n].template || n + $.pageSuffix || ""), { pid: n, url: t };
      }function g(t) {
        var i = this,
            a = {};"function" == typeof t ? a.callback = t : a = t || {};var o = n.extend(!0, { index: -1, name: "", beforeBack: $.beforeBack, callback: null }, a),
            r = parseInt(o.index),
            l = re.length;if (ge = loader.map(), ve = ge.modules, r > 0) return void e.showLog("index 参数只能是负数", "bui.router.back");var c = le.getLast(),
            s = l - 1,
            u = "function" == typeof a.beforeBack ? a.beforeBack.call(ye, { prevTarget: null, target: c }) : a.beforeBack;R.call(ye, "backbefore", { prevTarget: null, target: c }), R.call(ye, "beforeback", { prevTarget: null, target: c });var d = loader.get(c.pid);return d && d.beforeDestroy && d.beforeDestroy(), !1 === u ? this : (o.name && (r = m(o.name)), Math.abs(r) > s && (r = -s), l > 1 && ee && (r < -1 && j(r), ee = !1, a.effect && (Y.option({ effect: a.effect }), J.option({ effect: a.effect })), Y && Y.show(), J && J.hide(function () {
          var t = l + r;O(t), le.removeNext(t), j();var n = C(),
              a = n.pid;e.objId(n.id).css("zIndex", 5), function () {
            var e = {};e = oe[a] || {};var t = loader.get(n.pid);o.callback && o.callback.call(i, e, n), R.call(ye, "back", { prevTarget: c, target: n }), fe = n;var r = "pageshow-" + n.pid,
                l = "pagehide-" + c.pid;d && d.hide && d.hide({ type: "back", target: c }), t && t.show && t.show({ type: "back", target: n }), R.call(ye, l, { type: "back", target: c }), R.call(ye, r, { type: "back", target: n }), R.call(ye, "pageshow", { type: "back", target: n }), R.call(ye, "pagehide", { type: "back", target: c }), d && d.destroyed && d.destroyed(), ee = !0;
          }();
        })), this);
      }function v(t) {
        return "string" == typeof t && "main" !== t ? (loader.destroy(t), he.del(t), t in oe && delete oe[t]) : e.showLog("参数只能是字符串"), this;
      }function m(t) {
        var n,
            i = e.array.indexs(re, t, "pid"),
            a = i.length;if (a) {
          var o = -(re.length - i[a - 1] - 1);n = 0 == o ? -1 : o;
        } else n = -1;return n;
      }function b(t, i, a) {
        if ("string" == typeof t) {
          var o = null;t.indexOf(".js") > -1 && (o = loader.get(fe.pid)) && o.beforeCreate && o.beforeCreate(), n.ajax({ url: t, dataType: "html", async: $.async, success: function success(e, n, a) {
              a.url = t, "" === e && R.call(ye, "fail", e, n, a), i && i(e, n, a), R.call(ye, "success", e, n, a), o && o.created && o.created();
            }, error: function error(e, t, n) {
              a && a(e, t, n), R.call(ye, "fail", e, t, n);
            } });
        } else if ("function" == typeof t) {
          var r = t && t();i && i(r, 200, {}), R.call(ye, "success", r, 200, {});
        } else e.showLog("url 不能为空", "bui.router.requestUrl");
      }function w() {
        te = !0;var e = re.length - 1,
            t = re[e];return d({ id: t.id, url: t.pid, param: t.param }), this;
      }function y(e) {
        return e = e || {}, d({ url: e.url || "", param: e.param || {}, replace: !0 }), this;
      }function x() {
        return le.getLast().param;
      }function k(e) {
        var t = le.getLast(),
            n = e || t.currentPart,
            i = null,
            a = n in t.part ? t.part[n] : {};return "param" in a && (i = a.param), i;
      }function I(e) {
        var t;return e && (t = e in oe), t;
      }function T(t) {
        for (var n in ve) {
          try {
            if ((ve[n].template || "") === t) return n;
          } catch (t) {
            e.showLog(t.message);
          }
        }
      }function O(e) {
        K.children().each(function (t, i) {
          t >= e && n(i).remove();
        });
      }function C() {
        var t = le.getLast(),
            n = t.id || "",
            i = t.effect || $.effect;return n && (R.call(ye, "beforepageshow", { target: t }), J = null, J = e.toggle({ id: document.getElementById(n), effect: ae[i].inRight || "" }), K && K.attr("data-main", n)), t;
      }function j(t) {
        t = t || -1;var n = re.length + t - 1,
            i = re[n],
            a = i && i.id || "",
            o = i && i.effect || $.effect;return a && (R.call(ye, "beforepagehide", { target: i }), Y = null, Y = e.toggle({ id: document.getElementById(a), effect: ae[o].inLeft || "" })), i;
      }function S(e) {
        e = e || {};var t = "";String(Z).indexOf("%"), String(Q).indexOf("%");return t += '<div class="bui-router-main">', t += "</div>";
      }function E(t) {
        var n = t.param ? e.setUrlParams(t.url, t.param) : t.url,
            i = "";return i += '<div id="' + t.id + '" class="bui-router-item" data-page="' + t.pid + '">', i += '<iframe class="bui-router-iframe" src="' + n + '"></iframe>', i += "</div>";
      }function L(e) {
        var t = "";return t += '<div id="' + e.id + '" class="bui-router-item" data-page="' + e.pid + '">', t += e.content || "", t += "</div>";
      }function N(e) {
        var t = "";return t += e.content;
      }function B(t, n) {
        return ne = !0, e.option.call(ye, t, n);
      }function P(t, n) {
        return e.on.apply(ye, arguments), this;
      }function D(t, n) {
        return e.off.apply(ye, arguments), this;
      }function R(t) {
        ye.self = this == window || this == ye ? null : this, e.trigger.apply(ye, arguments);
      }function F() {
        return ie || le.getLast();
      }function A() {
        var e = ie || le.getLast();return document.getElementById(e.id);
      }function z(e) {
        return ie.id;
      }function M(i) {
        var a = le.getLast(),
            o = e.objId(a.id),
            r = "object" === (void 0 === i ? "undefined" : t(i)) ? n(i) : o.find(".bui-page");return r.length && e.init({ id: r, height: Q }), this;
      }var H,
          V,
          q,
          U = { id: "", progress: !1, syncHistory: !0, autoInit: !0, firstAnimate: !1, path: "", indexModule: { moduleName: "main", template: "pages/main/main.html", script: "pages/main/main.js" }, hash: !1, cache: !0, reloadCache: !1, reload: !1, useScroll: ".bui-scroll-x", beforeBack: null, beforeLoad: null, store: null, width: 0, height: 0, async: !0, effect: "push", hashPrefix: "#", scriptSuffix: ".js", pageSuffix: ".html" },
          $ = n.extend({}, U, e.config.router, i),
          W = null,
          _ = this,
          K = null,
          Y = null,
          J = null,
          X = !1,
          Z = "",
          Q = "",
          G = !0,
          ee = !0,
          te = !1,
          ne = !1,
          ie = null,
          ae = { none: { inRight: "showIn", inLeft: "showIn" }, fadein: { inRight: "fadeIn", inLeft: "fadeIn" }, fadeinslide: { inRight: "fadeInRight", inLeft: "fadeInLeft" }, slide: { inRight: "slideInRight", inLeft: "slideInLeft" }, push: { inRight: "pushInRight", inLeft: "pushInLeft" }, zoom: { inRight: "zoomIn", inLeft: "zoomIn" }, cover: { inRight: "coverInRight", inLeft: "coverInLeft" }, zoomslide: { inRight: "zoomSlideInRight", inLeft: "zoomSlideInLeft" }, fadeinslideback: { inRight: "fadeInLeft", inLeft: "fadeInRight" }, slideback: { inRight: "slideInLeft", inLeft: "slideInRight" }, pushback: { inRight: "pushInLeft", inLeft: "pushInRight" }, coverback: { inRight: "coverInLeft", inLeft: "coverInRight" }, zoomslideback: { inRight: "zoomSlideInLeft", inLeft: "zoomSlideInRight" } },
          oe = {},
          re = [],
          le = {},
          ce = {},
          se = {},
          ue = !1,
          de = !1,
          fe = {},
          he = {},
          pe = {},
          ge = loader.map($.indexModule),
          ve = ge.modules,
          me = e.storage({ local: !1 }),
          be = !1;le.get = function () {
        return re;
      }, le.add = function (t) {
        t = t || {};var n = window.location.origin + window.location.pathname + "#" + t.pid,
            i = e.setUrlParams(n, t.param);if (re.push(t), !G) return $.syncHistory && "pushState" in window.history && window.history.pushState(t, null, i), re;
      }, le.prepend = function (t) {
        t = t || {};var n = window.location.origin + window.location.pathname + "#" + t.pid;e.setUrlParams(n, t.param);return re.unshift(t), re;
      }, le.replace = function (t) {
        t = t || {};var n = re.length - 1,
            i = window.location.origin + window.location.pathname + "#" + t.pid,
            a = e.setUrlParams(i, t.param);return n > -1 && (re.splice(n, 1, t), $.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, a)), re;
      }, le.getLast = function (e) {
        var t = re.length - 1,
            n = re[t] || {};return e ? n[e] : n;
      }, le.removeNext = function (t) {
        var n = re.length - t;re.splice(t, n);var i = le.getLast(),
            a = window.location.origin + window.location.pathname + "#" + i.pid,
            o = e.setUrlParams(a, i.param);$.syncHistory && "replaceState" in window.history && window.history.replaceState(i.param, null, o);
      }, le.removeLast = function () {
        var e = re.length - 1;le.removeNext(e);
      }, he.add = function (e, t) {
        return ce[e] = t || {}, ce[e];
      }, he.del = function (e) {
        delete ce[e];
      }, he.get = function (e, t) {
        if (t) {
          return (ce[e] || {})[t];
        }return ce[e];
      }, he.save = function () {
        if (re.length > 1) {
          var e = H.html();me.set("cacheHtml", e), me.set("cacheHistory", re), me.set("hasCache", "true");
        }
      }, he.load = function () {
        var t = me.get("cacheHtml", 0),
            n = me.get("cacheHistory", 0),
            i = [];if (n.length > 1) {
          H.html(t), K = H.children(".bui-router-main");g({ name: s().pid });try {
            n.forEach(function (e, t) {
              var n = "string" == typeof e ? JSON.parse(e) : e;i.push(n);
            });var a = i[i.length - 1];fe = a, loader.require(a.pid, function (e) {
              oe[a.pid] = e || null;
            }), P("back", function (e) {
              loader.require(e.target.pid, function (t) {
                oe[e.target.pid] = t || null;
              });
            });
          } catch (t) {
            e.showLog(t);
          }re = i, C(), j(), G = !1, ue = !0, he.clear();
        }
      }, he.clear = function () {
        me.remove("cacheHistory"), me.remove("cacheHtml"), me.remove("hasCache");
      }, pe.add = function (e, t) {
        return se[e] = t || {}, se[e];
      }, pe.get = function (e, t) {
        if (t) {
          return (se[e] || {})[t];
        }return se[e];
      };var we = function we(t) {
        var n = ie || le.getLast(),
            i = document.getElementById(n.id) || document;return e.obj(t, i);
      },
          ye = { init: a, option: B, data: {}, on: P, off: D, trigger: R, load: d, resize: o, destroy: v, loadPart: f, replace: y, refresh: w, back: g, isLoad: I, $: we, currentId: z, currentPage: A, currentModule: F, getPageParams: x, getPartParams: k, getHistory: le.get, preload: u, initScroll: M, history: { get: le.get, getLast: le.getLast } };return ye;
    };
  }(window.bui || {}, window.libs), function (e, a) {
    var o = function () {
      function o(t) {
        n(this, o), this._default = { log: !1, hasLife: !0, onBeforeInit: null, onInited: null }, this._plugin = t || { name: "", depend: null, config: null, param: null, callback: null };var i = e.config.hasOwnProperty(this._plugin.name) ? e.config[this._plugin.name] : null;this.config = a.extend(!0, {}, this._default, i, this._plugin.config, this._plugin.param), this.initStatus = !1, this.reinitStatus = !1, this.widgets = Object.create(null), this.init();
      }return i(o, [{ key: "widget", value: function value(e) {
          return e && e in this.widgets ? this.widgets[e] : this.widgets;
        } }, { key: "init", value: function value(e) {
          var t = this,
              n = e || null;t.config = a.extend(!0, this.config, n);var i = t.config,
              o = i.hasLife && i.onBeforeInit && i.onBeforeInit.call(t, i);return i.log && console.log(t._plugin.name + " before init"), !1 === o ? t : (t._plugin.callback && t._plugin.callback.call(t, i), i.log && console.log(t._plugin.name + " init"), i.hasLife && i.onInited && i.onInited.call(t, i), i.log && console.log(t._plugin.name + " after inited"), this.initStatus = !0, t);
        } }, { key: "reinit", value: function value() {
          return this.destroy(), this.init(), this.config.log && console.log(this._plugin.name + " reinit"), this;
        } }, { key: "destroy", value: function value(e) {
          return this.beforeDestroy && this.beforeDestroy(), this.beforeDestroy = null, this.widgets = {}, this.off(), this.initStatus = !1, e && e.call(this), this.config.log && console.log(this._plugin.name + " destroyed"), this;
        } }, { key: "prefix", value: function value(t) {
          return e.config.classNamePrefix + t;
        } }, { key: "showLog", value: function value(n, i) {
          i = i || "";var a = "";return "object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? a = n.message + ":" + n.name + "&&stack:" + n.stack : "string" == typeof n && (a = n), e.log && console.error(i + " " + a), e.trace && console.trace && console.trace(), this;
        } }, { key: "option", value: function value(t, n) {
          if ("object" !== e.typeof(t) && void 0 === n) return "string" == typeof t ? this.config[t] : this.config;var i = this;if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;if (t && "object" === e.typeof(t)) {
            var o = a.extend(this.config, t);return i && i.init(o);
          }if (this.config.hasOwnProperty(t)) {
            var r = {};r[t] = n;var l = a.extend(this.config, r);return i && i.init(l);
          }return this;
        } }, { key: "emitter", get: function get() {
          return e.emitter();
        } }, { key: "on", get: function get() {
          return this.emitter.on;
        } }, { key: "off", get: function get() {
          return this.emitter.off;
        } }, { key: "trigger", get: function get() {
          return this.emitter.trigger;
        } }]), o;
    }();e.extend = function (t) {
      var a = function () {
        function a(e) {
          n(this, a), this.init(e);
        }return i(a, [{ key: "init", value: function value(n) {
            var i = n.name;return this.checkName(i) ? (e[i] = function (e) {
              return t.param = e, new o(t);
            }, this) : this;
          } }, { key: "checkName", value: function value(t) {
            return t ? !e.hasOwnProperty(t) || (console.warn("已有相同名为" + t + "的插件或方法,请重新换个名称注册."), !1) : (console.warn("插件名字不能为空"), !1);
          } }]), a;
      }();new a(t);
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.setUrlParams = function (n, i, a) {
      var a = 0 != a,
          i = "object" == (void 0 === i ? "undefined" : t(i)) ? i : {},
          o = e.unit.objectToKeyString(i, a);return "" == o ? n : n + "?" + o;
    }, e.getUrlParams = function (t) {
      var t = 0 != t,
          n = window.location.search,
          i = {};if (n.indexOf("?") > -1) {
        var a = n.substr(1);i = e.unit.keyStringToObject(a, t);
      }return i;
    }, e.getUrlParam = function (e) {
      var t = window.location.search,
          n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
          i = t.substr(1).match(n);return null != i ? decodeURIComponent(i[2]) : null;
    }, e.typeof = function (e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);return t = t.toLowerCase();
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.array = {}, Array.prototype.$index = function (e, t) {
      var n = this;for (var i in n) {
        var a = n[i];try {
          if ((a && a[t] || a) == e) return parseInt(i);
        } catch (e) {}
      }return -1;
    }, e.array.index = e.inArray = function (e, t, n) {
      var i, a;return e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e), i.$index(a, n);
    }, Array.prototype.$include = function (e, t) {
      var n = this;for (var i in n) {
        var a = n[i];try {
          if ((a && a[t] || a) == e) return !0;
        } catch (e) {}
      }return !1;
    }, e.array.compare = e.compareArray = function (e, t, n) {
      var i, a;return e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e), i.$include(a, n);
    }, e.array.remove = e.removeArray = function (t, n, i) {
      function a(e) {
        l.forEach(function (t, n) {
          try {
            ("string" == typeof i || "number" == typeof i ? t[i] || t : t) == e && l.splice(n, 1);
          } catch (e) {}
        });
      }var o, r;t instanceof Array ? (o = t || [], r = n) : (o = n || [], r = t || []);var l = o || [];return r && "array" === e.typeof(r) ? r.forEach(function (e, t) {
        a("string" == typeof i || "number" == typeof i ? e[i] || e : e);
      }) : a(r), l;
    }, e.array.filter = e.filterArray = function (e, t, n) {
      var i, a;e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);var o = [];for (var r in i) {
        try {
          var l = i[r] && i[r][n] || i[r];new RegExp(a).test(l) && o.push(i[r]);
        } catch (e) {}
      }return o;
    }, e.array.indexs = e.indexArray = function (e, t, n) {
      var i, a;e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);var o = [];for (var r in i) {
        try {
          (i[r] && i[r][n] || i[r]) === a && o.push(+r);
        } catch (e) {}
      }return o;
    }, e.array.excess = e.excessArray = function (e, t, n) {
      var i;e instanceof Array ? i = e || [] : i = t || [];var a = {},
          o = [];for (var r in i) {
        try {
          var l = i[r] && i[r][n] || i[r];a[l] != l && (a[l] = l, o.push(i[r]));
        } catch (e) {}
      }return o;
    }, e.array.uniq = function (t, n) {
      for (var i = [], a = 0; a < t.length; a++) {
        var o = void 0 === n,
            r = o ? t[a] : t[a][n] || t[a];(o ? -1 == e.array.index(i, r, n) : -1 == i.indexOf(r)) && i.push(r);
      }return i;
    }, e.array.copy = e.copyArray = function (t, n, i) {
      var a = [];if (n = n || 0, i = i || t && t.length, !t || "array" === e.typeof(t)) {
        t.forEach(function (e, t) {
          a.push(e);
        });return a.splice(n, i) || [];
      }
    }, Array.prototype.$empty = function () {
      return this.splice(0, this.length);
    }, e.array.empty = function (t) {
      if (!t || "array" === e.typeof(t)) return t.$empty();
    }, Array.prototype.$replace = function (t) {
      if (t && "array" !== e.typeof(t)) return this;var n = [0, this.length].concat(t);return this.splice.apply(this, n);
    }, e.array.replace = function (t, n) {
      if (!t || "array" === e.typeof(t)) return t.$replace(n);
    }, Array.prototype.$merge = function (e) {
      var t,
          n = this,
          i = arguments,
          a = i.length - 1,
          o = i[a];if ("string" == typeof o && i.length > 1) {
        for (var l = a, c = [], s = 0; s < l; s++) {
          !function (e) {
            var t = Array.prototype.slice.call(i[e], 0);n.forEach(function (e, n) {
              var i = e[o] || e;t instanceof Array && t.forEach(function (n, a) {
                var r = n[o] || n;if (i === r) {
                  for (var l in n) {
                    e[l] = n[l];
                  }t.splice(a, 1);
                }
              });
            }), c.push(t);
          }(s);
        }return this.$merge.apply(this, c);
      }var u = (t = [this.length, 0]).concat.apply(t, r(Array.prototype.slice.call(arguments, 0)));return this.splice.apply(this, u), this;
    }, e.array.merge = function (t) {
      if (!t || "array" === e.typeof(t)) return t.$merge.apply(t, r(Array.prototype.slice.call(arguments, 1)));
    }, Array.prototype.$get = function (e, t) {
      var n,
          i = this,
          a = null;for (var o in i) {
        a = i[o];try {
          (a && a[t] || a) == e && (n = a);
        } catch (e) {}
      }return n;
    }, e.array.get = function (t, n, i) {
      if (!t || "array" === e.typeof(t)) return t.$get(n, i);
    }, e.array.getAll = function (e, t, n) {
      var e = e || [],
          i = [],
          a = null;for (var o in e) {
        try {
          a = e[o];var r = a && a[n] || a;t && t instanceof Array ? t.forEach(function (e, t) {
            r == e && i.push(a);
          }) : r == t && i.push(a);
        } catch (e) {}
      }return i;
    }, Array.prototype.$set = function (t, n, i) {
      for (var a = this, o = /\d/.test(t), r = 0; r < a.length; r++) {
        var l = a[r],
            c = void 0 === i ? l : l[i] || l;if (o ? r === t : c === t) {
          if (i) {
            if (n && "object" == e.typeof(n)) for (var s in n) {
              l[s] = n[s];
            } else l[i] = n;a.splice(r, 1, l);
          } else a.splice(r, 1, n);return a;
        }
      }return a;
    }, e.array.set = function (t, n, i, a) {
      if (!t || "array" === e.typeof(t)) return t.$set(n, i, a);
    }, e.array.setAll = function (t, n, i, a) {
      if (!t || "array" === e.typeof(t)) return t.filter(function (o, r) {
        var l = void 0 === a ? o : o[a] || o;if (r == n || l === n) if (a) {
          if (i && "object" == e.typeof(i)) for (var c in i) {
            o[c] = i[c];
          } else o[a] = i;t.splice(r, 1, o);
        } else t.splice(r, 1, i);
      }), t;
    }, Array.prototype.$delete = function (t, n) {
      function i(e) {
        a.forEach(function (t, i) {
          try {
            ("string" == typeof n || "number" == typeof n ? t[n] || t : t) != e && i != e || a.splice(i, 1);
          } catch (e) {}
        });
      }var a = this,
          o = e.array.indexs(a, t, n);return t && "array" === e.typeof(t) ? t.forEach(function (e, t) {
        i("string" == typeof n || "number" == typeof n ? e[n] || e : e);
      }) : i(t), o;
    }, e.array.delete = function (t, n, i) {
      if (!t || "array" === e.typeof(t)) return t.$delete(n, i);
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.storage = function (n) {
      function i(t, n, i) {
        var a = 1 == l ? null : d.getItem(t),
            o = [],
            r = "",
            c = i ? n[i] : n;if (null === a) {
          o.push(n), r = JSON.stringify(o);try {
            d.setItem(t, r);
          } catch (e) {
            "QuotaExceededError" == e.name && console.log("超出本地存储限额！");
          }
        } else {
          var s = JSON.parse(a);if (i ? e.array.compare(s, c, i) : e.array.compare(s, c)) {
            e.array.remove(s, c, i), s[u](n);try {
              r = JSON.stringify(s), d.setItem(t, r);
            } catch (e) {
              "QuotaExceededError" == e.name && console.log("超出本地存储限额！");
            }
          } else {
            s[u](n), s.length > l && 0 != l && s.pop();try {
              r = JSON.stringify(s), d.setItem(t, r);
            } catch (e) {
              "QuotaExceededError" == e.name && console.log("超出本地存储限额！");
            }
          }
        }return this;
      }function a(t, n, i) {
        var a,
            o = d.getItem(t) || "";try {
          a = o && e.unit.stringToJson(o);
        } catch (t) {
          a = o, e.showLog(t.name + ": " + t.message, "bui.storage.get");
        }if ("number" == typeof n && i) a = a && a[n] && a[n][i] || void 0;else if ("string" == typeof n) {
          var r = e.array.index(a, n, i);a = a && a[r];
        } else a = "number" == typeof n ? a && a[n] || void 0 : a;return a;
      }function o(t, n, i) {
        if ("string" != typeof t) return void e.showLog("要删除的字段名只能是字符串", "bui.storage.remove");var o = a(t) || [];if ("number" == typeof n) {
          var r = "number" == typeof i ? i : r;o.splice(n, r);try {
            var l = JSON.stringify(o) || "";d.setItem(t, l);
          } catch (t) {
            e.showLog(t.name + ": " + t.message, "bui.storage.remove");
          }
        } else if ("string" == typeof n) {
          var c = e.array.remove(o, n, i);try {
            var l = JSON.stringify(c) || "";d.setItem(t, l);
          } catch (t) {
            e.showLog(t.name + ": " + t.message, "bui.storage.remove");
          }
        } else d.removeItem(t);return this;
      }function r() {
        return d.clear(), this;
      }var l, c, s;"number" == typeof n || "string" == typeof n ? (l = 0 == parseInt(n) ? 0 : parseInt(n) || 1, s = !0, c = !0) : "object" === (void 0 === n ? "undefined" : t(n)) ? (l = n && 0 == n.size ? 0 : n.size || 1, s = !n || 0 != n.local, c = !n || 0 != n.reverse) : (l = 1, s = !0, c = !0);var u = c ? "push" : "unshift",
          d = s ? localStorage : sessionStorage;return { get: a, set: i, remove: o, clear: r };
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.unit = {}, e.unit.remToPx = function (e) {
      var t = window && window.viewport && window.viewport.fontSize || 100,
          e = (parseFloat(e) * t).toFixed(2);return e;
    }, e.unit.pxToRem = function (e) {
      var t = window && window.viewport && window.viewport.fontSize || 100,
          e = (parseFloat(e) / t).toFixed(2);return e;
    }, e.unit.pxToRemZoom = function (e) {
      var e = (parseFloat(e) / 100).toFixed(2);return e;
    }, e.unit.debounce = function (e, t, n) {
      var i;return function () {
        var a = n || this,
            o = arguments,
            r = function r() {
          i = null, e.apply(a, o);
        };clearTimeout(i), i = setTimeout(r, t);
      };
    }, e.unit.throttle = function (e, t, n) {
      t || (t = 250);var i, a;return function () {
        var o = n || this,
            r = +new Date(),
            l = arguments;i && r < i + t ? (clearTimeout(a), a = setTimeout(function () {
          i = r, e.apply(o, l);
        }, t)) : (i = r, e.apply(o, l));
      };
    }, e.unit.startWithCss = function (e) {
      var t = new RegExp("^\\.|^#");return "string" == typeof e && t.test(e);
    }, e.unit.startWithId = function (e) {
      var t = new RegExp("^#");return "string" == typeof e && t.test(e);
    }, e.unit.startWithClass = function (e) {
      var t = new RegExp("^\\.");return "string" == typeof e && t.test(e);
    }, e.unit.endWithImage = function (e) {
      var t = new RegExp("(.png|.jpg|.gif)$");return "string" == typeof e && t.test(e);
    }, e.unit.tel = function (t) {
      var n,
          t = String(t),
          i = "tel:";return 0 == t.indexOf("+") && (i = "wtai://wp/mc;"), n = t, window.location.href = i + n, e;
    }, e.unit.sms = function (t, n) {
      var i = navigator.userAgent,
          a = /(iPhone|iPad|iOS)/i.test(i),
          o = a ? "&" : "?";return window.location.href = "sms:" + t + o + "body=" + n, e;
    }, e.unit.mailto = function (t) {
      var t = "email" in t ? t : {};return "string" == typeof t.email && t.email.indexOf("@") > 0 ? window.location.href = "mailto:" + t.email + "?subject=" + (t.subject || "") + "&body=" + (t.body || "") + "&cc=" + (t.cc || "") : e.showLog(email + "格式不正确"), e;
    }, e.unit.openExtral = function (t) {
      var n = [],
          i = "",
          t = String(t);if (t.indexOf("mailto:") >= 0) if (n = t.split("mailto:"), i = n[1], i.indexOf("?") > -1) {
        var a = i.split("?"),
            o = e.unit.keyStringToObject(a[1]);o.email = a[0], e.unit.mailto(o);
      } else e.unit.mailto({ email: i });if (t.indexOf("tel:") >= 0 && (n = t.split("tel:"), i = parseInt(n[1]), e.unit.tel(i)), t.indexOf("sms:") >= 0) if (n = t.split("sms:"), i = n[1], t.indexOf("=") >= 0) {
        var r = t.split("="),
            l = r[1];e.unit.sms(i, l);
      } else e.unit.sms(i);return e;
    }, e.unit.objectToKeyString = function (e, t) {
      var n = "";for (var i in e) {
        n += "&" + i + "=" + (t ? encodeURIComponent(e[i]) : e[i]);
      }return n.substr(1);
    }, e.unit.keyStringToObject = function (t, n) {
      var i,
          a = {},
          o = [];try {
        for (o = t.split("&"), i = 0; i < o.length; i++) {
          var r = n ? decodeURIComponent(o[i].split("=")[1]) : o[i].split("=")[1];a[o[i].split("=")[0]] = r;
        }
      } catch (t) {
        e.showLog(t);
      }return a;
    }, e.unit.checkTargetInclude = function (e, t) {
      var i = t,
          a = [];if (i.indexOf(",") > -1) {
        a = i.split(",");var o,
            r = a.length;for (o = 0; o < r; o++) {
          var l = a[o];l.indexOf(".") > -1 && (a[o] = l.substr(1));
        }
      } else i.indexOf(".") > -1 ? a[0] = i.substr(1) : a[0] = i;var c,
          s = a.length;for (c = 0; c < s; c++) {
        if (n(e).hasClass(a[c])) return !0;
      }return !1;
    }, e.unit.jsonToString = function (n) {
      function i(n) {
        if (n && "object" === e.typeof(n)) {
          for (var i in n) {
            var a = n[i];"object" === (void 0 === a ? "undefined" : t(a)) && (n[i] = JSON.stringify(a));
          }return n;
        }
      }function a(n) {
        if (n && "array" === e.typeof(n)) return n.forEach(function (e, i) {
          "object" === (void 0 === e ? "undefined" : t(e)) && (n[i] = JSON.stringify(e));
        }), n;
      }return "object" === (void 0 === n ? "undefined" : t(n)) ? function (t) {
        function n(t, n) {
          var o = t[n];return o && "object" === e.typeof(o) ? t[n] = i(o) : o && "array" === e.typeof(o) ? t[n] = a(o) : t[n] = o, t[n];
        }var o;if ("object" === e.typeof(t)) {
          for (var r in t) {
            t[r] = n(t, r);
          }o = JSON.stringify(t);
        } else "array" === e.typeof(t) ? (t.forEach(function (e, i) {
          t[i] = n(t, i);
        }), o = JSON.stringify(t)) : o = t;return o;
      }(n) : n;
    }, e.unit.stringToJson = function (n) {
      function i(n) {
        var a, o;try {
          if (a = "object" === (void 0 === n ? "undefined" : t(n)) ? n : JSON.parse(n), "array" === e.typeof(a)) a.forEach(function (e, t) {
            a[t] = i(e);
          });else if ("object" === e.typeof(a)) for (var r in a) {
            var l = a[r];a[r] = i(l);
          }o = a;
        } catch (e) {
          o = n;
        }return o;
      }return n && i(n);
    }, e.unit.setKeyValue = function (e, t, n) {
      function i(e, n) {
        if (a.length) return i(a.shift(), n[e] || {});n[e] = t;
      }var a = e && e.indexOf(".") > -1 ? e.split(".") : [e];return i(a.shift(), n);
    }, e.unit.getKeyValue = function (e, t) {
      function n(e, t) {
        var a = t[e];if (a && "string" == typeof a && a.indexOf("{") > -1 && a.indexOf("}") > -1) try {
          t[e] = JSON.parse(a);
        } catch (n) {
          t[e] = a;
        }return void 0 !== a && i.length ? n(i.shift(), a) : a;
      }var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];return n(i.shift(), t);
    }, e.unit.getKeyObj = function (e, t) {
      function n(e, t) {
        var a = t[e];return !a instanceof Array && a instanceof Object ? n(i.shift(), a) : a;
      }var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];return n(i.shift(), t);
    }, e.unit.delKey = function (e, t) {
      function n(e, a) {
        return i.length ? n(i.shift(), a[e]) : (delete a[e], t);
      }var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];return n(i.shift(), t);
    }, e.unit.calcHeight = function (e, t) {
      var i = n(e);i[0] && (i[0].style.height = "calc(100% - " + t + ")");
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.platform = function () {
      function e(e) {
        return (/Windows NT/i.test(s)
        );
      }function t() {
        return (/Macintosh/i.test(s)
        );
      }function n(e) {
        return (/(Android|Linux)/i.test(s)
        );
      }function i(e) {
        return (/(iPhone)/i.test(s)
        );
      }function a(e) {
        var t = !1;return 3 == window.devicePixelRatio && 375 == document.documentElement.clientWidth && 812 == document.documentElement.clientHeight && (t = !0), t;
      }function o(e) {
        return (/(iPad)/i.test(s)
        );
      }function r(e) {
        return (/(iPhone|iPad|iOS)/i.test(s)
        );
      }function l(e) {
        return (/(micromessenger)/i.test(s)
        );
      }function c(e) {
        return (/(crosswalk)/i.test(s)
        );
      }var s = navigator.userAgent;return { isAndroid: n, isIphone: i, isIpad: o, isIos: r, isWeiXin: l, isBingotouch: c, isMac: t, isIphoneX: a, isWindow: e };
    }();
  }(window.bui || {}, window.libs), function (e, t) {
    e.timer = function (n) {
      function i() {
        return d = h, f = !0, clearTimeout(p), this;
      }function a() {
        return h = s ? c.times : 0, clearTimeout(p), g(), this;
      }function o() {
        if (f && (h = d, f = !1), 0 == h) return h = 0, u && u.text(h), c.onEnd && c.onEnd.call(this, { count: h, target: u && u[0] }), void clearTimeout(p);var e = h < 10 ? "0" + h : h;return u && u.text(e), c.onProcess && c.onProcess.call(this, { count: h, target: u && u[0] }), h--, p = setTimeout(function () {
          o();
        }, c.interval), this;
      }function r() {
        if (f && (h = d, f = !1), h == c.times) return c.onEnd && c.onEnd.call(this), h = c.times, u && u.text(h), void clearTimeout(p);var e = h < 10 ? "0" + h : h;return u && u.text(e), c.onProcess && c.onProcess.call(this, h), h++, p = setTimeout(function () {
          r();
        }, c.interval), this;
      }var l = { interval: 1e3, target: null, reduce: !0, onEnd: null, onProcess: null, times: 10 },
          c = t.extend({}, l, n),
          s = c.reduce,
          u = c.target ? e.obj(c.target) : null,
          d = 0,
          f = !1,
          h = s ? c.times : 0,
          p = null,
          g = s ? o : r;return { stop: function stop() {
          d = 0, h = s ? c.times : 0, clearTimeout(p);
        }, start: g, restart: a, pause: i };
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.animate = function (i) {
      function a(t) {
        return t.id ? (N = e.objId(t.id), N.css({ "-webkit-transition": M, transition: M }), B = t.open3D, P = t.zoom, D = t.animates || [], F = R.config = t, this) : void e.showLog("animate id不能为空", "bui.animate");
      }function o(e) {
        var e = e,
            t = Math.abs(parseFloat(e));e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : P ? -t / 100 + "rem" : -t + "px";var n = "translateX(" + e + ")";return D.push(n), A.push(n), this;
      }function r(e) {
        var e = e,
            t = Math.abs(parseFloat(e));e = "string" == typeof e && e.indexOf("%") > -1 ? e : P ? t / 100 + "rem" : t + "px";var n = "translateX(" + e + ")";return D.push(n), A.push(n), this;
      }function l(e) {
        var e = e,
            t = Math.abs(parseFloat(e));e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : P ? -t / 100 + "rem" : -t + "px";var n = "translateY(" + e + ")";return D.push(n), A.push(n), this;
      }function c(e) {
        var e = e,
            t = Math.abs(parseFloat(e));e = "string" == typeof e && e.indexOf("%") > -1 ? e : P ? t / 100 + "rem" : t + "px";var n = "translateY(" + e + ")";return D.push(n), A.push(n), this;
      }function s(e) {
        var t = String(e),
            e = t.indexOf(",") > -1 ? t : e + ",1",
            n = "scale(" + e + ")";return D.push(n), A.push(n), this;
      }function u(e) {
        var e = String(e),
            t = "scaleX(" + e + ")";return D.push(t), A.push(t), this;
      }function d(e) {
        var e = String(e),
            t = "scaleY(" + e + ")";return D.push(t), A.push(t), this;
      }function f(e) {
        var t = String(e),
            e = t.indexOf("deg") > -1 ? t : t + "deg",
            n = "rotate(" + e + ")";return D.push(n), A.push(n), this;
      }function h(e) {
        var t = String(e),
            e = t.indexOf("deg") > -1 ? t : t + "deg",
            n = "rotateX(" + e + ")";return D.push(n), A.push(n), this;
      }function p(e) {
        var t = String(e),
            e = t.indexOf("deg") > -1 ? t : t + "deg",
            n = "rotateY(" + e + ")";return D.push(n), A.push(n), this;
      }function g(e) {
        var e,
            t = String(e),
            i = [];t.indexOf(",") > -1 ? (i = t.split(","), e = "", n.each(i, function (t, n) {
          t < 2 && (e += n.indexOf("deg") > -1 ? "," + n : "," + n + "deg");
        }), e = e.substr(1)) : e = t.indexOf("deg") > -1 ? t : t + "deg,0";var a = "skew(" + e + ")";return D.push(a), A.push(a), this;
      }function v(e) {
        var t = String(e),
            e = t.indexOf("deg") > -1 ? t : t + "deg",
            n = "skewX(" + e + ")";return D.push(n), A.push(n), this;
      }function m(e) {
        var t = String(e),
            e = t.indexOf("deg") > -1 ? t : t + "deg",
            n = "skewY(" + e + ")";return D.push(n), A.push(n), this;
      }function b(e) {
        var t = String(e);return N.css({ "-webkit-transform-origin": t, "transform-origin": t }), this;
      }function w(e, t) {
        var n = t || "ease-out";return M = "number" == typeof e ? "all " + e + "ms " + n : 0 == e || "none" == e ? "none" : 1 == e ? "all 300ms " + n : e || "all 300ms " + n, N.css({ "-webkit-transition": M, transition: M }), this;
      }function y() {
        return D = [], A = [], z = [], H = 0, this;
      }function x(e) {
        return V && (w(), V = !1), N.css({ "-webkit-transform": "", transform: "" }), "none" != M && N.one("webkitTransitionEnd", function () {
          e && e.call(R, this);
        }), y(), this;
      }function k(e) {
        var t = B ? A.join("") + "translateZ(0)" : A.join("");try {
          z[H] = [], z[H].push(D.join("")), D = [], H++;
        } catch (e) {}return N.css({ "-webkit-transform": t, transform: t }), "none" != M ? N.one("webkitTransitionEnd", function () {
          e && e.call(R, this);
        }) : e && e.call(R, this), this;
      }function I(e) {
        function t(e) {
          var o = e[i] || [],
              r = e[i + 1] || [];n = B ? o.join("") + "translateZ(0)" : o.join(""), n = A.join("") + n.replace(/\(.*?\)/g, "(0)"), N.css({ "-webkit-transform": "", transform: "" }), i++;try {
            N.one("webkitTransitionEnd", function () {
              if (!r || !r.length) return i = 0, void (historyCache = []);t(a);
            });
          } catch (e) {}
        }var n,
            i = 0,
            a = z.reverse();return t(a), this;
      }function T(e, t) {
        return N.css({ "-webkit-transform": e, transform: e }), t && "none" != w && N.one("webkitTransitionEnd", function () {
          t.call(R, this);
        }), this;
      }function O(e) {
        return e = parseFloat(e) || 100, B = !0, N.parent().css({ perspective: e + "px" }), this;
      }function C(e, n) {
        var i = {};return "object" === (void 0 === e ? "undefined" : t(e)) ? (i = e, n = "") : "string" == typeof e && (i[e] = n || ""), N.css(i), this;
      }function j(t) {
        var n = {};return e.widget.call(n, t);
      }function S(t, n) {
        return e.option.call(R, t, n);
      }var E = { id: "", zoom: !0, open3D: !1, animates: [] };if ("object" === (void 0 === i ? "undefined" : t(i)) && i.id) i = i || {};else {
        var L = i || "";i = {}, i.id = L;
      }var N,
          B,
          P,
          D,
          R = { origin: b, transition: w, property: C, open3D: O, transform: T, start: k, stop: x, clear: y, left: o, right: r, up: l, down: c, scale: s, scaleX: u, scaleY: d, rotate: f, rotateX: h, rotateY: p, skew: g, skewX: v, skewY: m, reverse: I, widget: j, option: S, config: F, init: a },
          F = R.config = n.extend(!0, {}, E, i),
          A = [],
          z = [],
          M = "all 300ms ease-out";a(F);var H = 0,
          V = !1;return R;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.toggle = function (n) {
      function i(t) {
        if (t = t || m, b = !1, !t.id) return void e.showLog("toggle id不能为空", "bui.toggle");y = e.objId(t.id), m = v.config = t, g = y.attr("class") || "";var n = t.effect,
            i = t.inOrder ? e.array.index(w.hideInOrder, n) : e.array.index(w.hide, n),
            a = n && (e.array.index(w.show, n) > -1 ? e.array.index(w.show, n) : i);return I = !(y[0] && "none" == y[0].style.display || "none" == y.css("display")), a < 0 ? (p = w.show[0], h = t.inOrder ? w.hideInOrder[0] : w.hide[0]) : (p = w.show[a], h = t.inOrder ? w.hideInOrder[a] : w.hide[a]), this;
      }function a() {
        return I;
      }function o(t, n) {
        if (!b) return y = e.objId(m.id), !(!x && !k) && (x = !1, "function" == typeof t ? (t = t, n = n || p || "") : (n = t || p || "", t = null), y[0] && "none" == y[0].style.display && y.css("display", "block"), y.addClass("animated " + n), "showIn" == n || "showOut" == n || "none" == n ? (m.revert && y.removeClass("animated " + n), t && t.call(v, this), I = !0, x = !0) : y.one("webkitAnimationEnd", function () {
          try {
            !I && y.css("display", "block"), m.revert && y.removeClass("animated " + n), t && t.call(v, this), I = !0, x = !0;
          } catch (t) {
            e.showLog(t, "toggle show method");
          }
        }), this);
      }function r(t, n) {
        if (!b && (y = e.objId(m.id), x || k)) return k = !1, "function" == typeof t ? (t = t, n = n || h || "") : (n = t || h || "", t = null), y.css("display", "block").addClass("animated " + n), "showIn" == n || "showOut" == n || "none" == n ? (y.css("display", "none"), m.revert && y.removeClass("animated " + n), t && t.call(v, this), I = !1, k = !0) : y.one("webkitAnimationEnd", function () {
          try {
            y.css("display", "none"), m.revert && y.removeClass("animated " + n), t && t.call(v, this), I = !1, k = !0;
          } catch (t) {
            e.showLog(t, "toggle hide method");
          }
        }), this;
      }function l() {
        return y.remove(), this;
      }function c(e) {
        var e = 1 == e;y && (y.off(), e && y.remove()), b = !0;
      }function s(t) {
        var n = {};return e.widget.call(n, t);
      }function u(t, n) {
        return e.option.call(v, t, n);
      }var d = { id: "", effect: "fadeIn", revert: !0, inOrder: !1 };if ("string" == typeof n) {
        var f = n || "";n = {}, n.id = f;
      }var h,
          p,
          g,
          v = { show: o, hide: r, remove: l, isShow: a, destroy: c, widget: s, option: u, config: m, init: i },
          m = v.config = t.extend(!0, {}, d, n),
          b = !1,
          w = { show: ["fadeIn", "fadeInLeft", "fadeInRight", "fadeInDown", "fadeInUp", "fadeInLeftBig", "fadeInRightBig", "fadeInUpBig", "fadeInDownBig", "zoomIn", "bounceIn", "rotateIn", "rollIn", "flipInX", "flipInY", "lightSpeedIn", "showIn", "slideInRight", "slideInLeft", "coverInLeft", "coverInRight", "zoomSlideInLeft", "zoomSlideInRight", "pushInLeft", "pushInRight"], hide: ["fadeOut", "fadeOutLeft", "fadeOutRight", "fadeOutUp", "fadeOutDown", "fadeOutLeftBig", "fadeOutRightBig", "fadeOutDownBig", "fadeOutUpBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutRight", "slideOutLeft", "coverOutLeft", "coverOutRight", "zoomSlideOutLeft", "zoomSlideOutRight", "pushOutLeft", "pushOutRight"], hideInOrder: ["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRightBig", "fadeOutLeftBig", "fadeOutUpBig", "fadeOutDownBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutLeft", "slideOutRight", "coverOutRight", "coverOutLeft", "zoomSlideOutRight", "zoomSlideOutLeft", "pushOutRight", "pushOutLeft"] },
          y = null,
          x = !0,
          k = !0,
          I = !1;return m.id && i(m), v;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.mask = function (n) {
      function i(n) {
        j = !1;var i = t.extend(!0, w, x, n);return i.onBeforeInit && i.onBeforeInit.call(y, i), i.appendTo = i.appendTo || "body", T = e.objId(i.appendTo), x = y.config = i, m = T.css("position"), i.autoTrigger && r(i), O = e.objId(i.id), i.onInited && i.onInited.call(y, i), this;
      }function a(e) {
        var t = function t(_t) {
          e.callback && e.callback.call(y, _t), e.autoClose && s(), _t.stopPropagation();
        };O.on("click.mask", t), C = !0;
      }function o(t) {
        var n = t.background ? t.background : "rgba(0,0,0," + t.opacity + ")",
            i = "";return i += '<div id="' + I + '" class="' + e.prefix("mask") + '" style="background:' + n + ";z-index:" + t.zIndex + '"></div>';
      }function r(n) {
        if (!j) {
          var i = t.extend(!0, {}, w, x, n),
              r = o(i);return O = e.objId(I), O && O.length ? O.css("display", "block") : (T.append(r).css("position", "relative"), O = e.objId(I)), b = !0, v.call(y, "show"), C || a(i), this;
        }
      }function l() {
        if (!j) return O && O.remove(), O = null, T.css("position", m || "static"), b = !1, C = !1, v.call(y, "hide"), this;
      }function c(t) {
        if (!j) return O = e.objId(I), O && O.length ? (O.css("display", "block"), T.css("position", "relative"), b = !0) : r(x), v.call(y, "show"), this;
      }function s() {
        if (!j) return O && O.css("display", "none"), T.css("position", "relative"), b = !1, v.call(y, "hide"), this;
      }function u() {
        return b;
      }function d(e) {
        l(), T && T.off("click.mask"), g("show"), g("hide"), j = !0;
      }function f(t) {
        var n = {};return e.widget.call(n, t);
      }function h(t, n) {
        return e.option.call(y, t, n);
      }function p(t, n) {
        return e.on.apply(y, arguments), this;
      }function g(t, n) {
        return e.off.apply(y, arguments), this;
      }function v(t) {
        y.self = this == window || this == y ? null : this, e.trigger.apply(y, arguments);
      }var m,
          b,
          w = { id: "", appendTo: "", opacity: .3, background: "", zIndex: 100, autoTrigger: !1, autoClose: !1, onBeforeInit: null, onInited: null, callback: null },
          y = { handle: {}, on: p, off: g, hide: s, show: c, isShow: u, remove: l, destroy: d, widget: f, option: h, config: x, init: i },
          x = y.config = t.extend(!0, {}, w, e.config.mask, n),
          k = e.guid(),
          I = x.id ? x.id.indexOf("#") > -1 ? x.id.substring(1) : x.id : k,
          T = (t("body"), e.objId(x.appendTo)),
          O = null,
          C = !1,
          j = !1;return i(x), y;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.loading = function (n) {
      function i(i) {
        N = !1;var a = t.extend(!0, {}, O, i);return a.onBeforeInit && a.onBeforeInit.call(T, n), a.appendTo = a.appendTo || "body", C = t(a.appendTo), O = T.config = a, a.autoTrigger && E.length < 1 && r(a), E = e.objId(j), a.onInited && a.onInited.call(T, a), this;
      }function a(e) {
        var t = e || O,
            n = function n(e) {
          t.callback && t.callback.call(T, e), e.stopPropagation();
        };return C.on("click.bui", "#" + j, n), L = !0, this;
      }function o(t) {
        t = t || {};var n = t.text,
            i = C.width() || document.documentElement.clientWidth,
            a = n && "block" == t.display ? parseInt(t.height) + 30 : parseInt(t.height),
            o = -i / 2,
            r = -a / 2,
            l = "block" == t.display ? e.prefix("loading-block") : e.prefix("loading-inline"),
            c = "";return c += '<div id="' + j + '" class="' + e.prefix("loading") + " " + l + '" style="width:' + i + "px;height:" + a + "px;line-height:" + a + "px;margin-left:" + o + "px;margin-top:" + r + "px;" + (t.zIndex ? "z-index:" + t.zIndex : "") + '" >', t.onlyText || (c += '<div class="' + e.prefix("loading-cell") + '" style="width:' + parseFloat(t.width) + "px;height:" + parseFloat(t.height) + 'px;"></div>'), c += '<div class="' + e.prefix("loading-text") + '">' + t.text + "</div>", c += "</div>", t && t.template ? t.template.call(T, t) : c;
      }function r(n) {
        if (!N) {
          var i = t.extend(!0, {}, O, n);if (E = e.objId(j), k = E.children(".bui-loading-cell"), E.hasClass("bui-loading-pause")) E.removeClass("bui-loading-pause"), y.call(this, "start");else {
            E.length && E.remove();var r = o(i);C.append(r), F && F.show(), y.call(this, "show");
          }return i.timeout && (P && clearTimeout(P), P = setTimeout(function () {
            d();
          }, i.timeout)), L || a(i), B = !0, this;
        }
      }function l(t) {
        if (!N) {
          E = e.objId(j), x = E.children(".bui-loading-text");return void 0 === t ? x && x.text() : (x && x.text(t), this);
        }
      }function c() {
        N || (E = e.objId(j), k = E.children(".bui-loading-cell"), k.css("display", "inline-block"), E.removeClass("bui-loading-pause"));
      }function s() {
        N || (E = e.objId(j), k = E.children(".bui-loading-cell"), k.css("display", "none"), E.addClass("bui-loading-pause"));
      }function u() {
        return B;
      }function d() {
        if (!N) return E = e.objId(j), E && E.remove(), E = null, F && F.remove(), L = !1, B = !1, y.call(this, "remove"), y.call(this, "hide"), this;
      }function f() {
        if (!N) return E.addClass("bui-loading-pause"), y.call(this, "pause"), this;
      }function h(n) {
        var i = n || {};if (!N) {
          var a = t.extend(!0, O, i);return E = e.objId(a.id), E && E.length ? (l(a.text), E[0].style.display = "-webkit-box", F && F.show(), y.call(this, "show")) : r(a), O.timeout && (P && clearTimeout(P), P = setTimeout(function (e) {
            p();
          }, O.timeout)), B = !0, this;
        }
      }function p() {
        if (!N) return E = e.objId(j), O.appendTo ? (E.css("display", "none"), F && F.hide()) : E && E.length && (E.css("display", "none"), F && F.hide()), B = !1, y.call(this, "hide"), this;
      }function g(e) {
        var e = 1 == e;d(), C && C.off("click.bui"), w("show"), w("hide"), w("start"), w("stop"), w("pause"), w("remove"), F && F.destroy(e), N = !0;
      }function v(t) {
        var n = { mask: F || {} };return e.widget.call(n, t);
      }function m(t, n) {
        return e.option.call(T, t, n);
      }function b(t, n) {
        return e.on.apply(T, arguments), this;
      }function w(t, n) {
        return e.off.apply(T, arguments), this;
      }function y(t) {
        T.self = this == window || this == T ? null : this, e.trigger.apply(T, arguments);
      }var x,
          k,
          I = { appendTo: "", width: 30, height: 30, text: "", onlyText: !1, mask: !0, zIndex: "", autoTrigger: !1, autoClose: !0, timeout: 0, opacity: 0, display: "block", template: null, onBeforeInit: null, onInited: null, callback: null },
          T = { handle: {}, on: b, off: w, start: r, stop: d, isLoading: u, pause: f, text: l, showRing: c, hideRing: s, show: h, hide: p, destroy: g, widget: v, option: m, config: O, init: i },
          O = T.config = t.extend(!0, {}, I, e.config.loading, n),
          C = (t("body"), null),
          j = e.guid(),
          S = j + "-mask",
          E = e.objId(j),
          L = !1,
          N = !1,
          B = !1,
          P = null;O.id = j;var D = O.callback;O.callback = function (e) {
        O.autoClose && d(), D && D.call(T, e);
      };var R = t.extend(!0, {}, O, { id: S }),
          F = O.mask ? e.mask(R) : null;return i(O), T;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.slide = function (n) {
      function i(n) {
        var i = t.extend(!1, pe, n);if (!1 === (i.onBeforeInit && i.onBeforeInit.call(he, i))) return this;if (!i.id) return void e.showLog("slide id不能为空", "bui.slide.init");if (H = e.obj(i.id), pe = he.config = i, Q = i.direction, "function" == typeof i.template) H.html(i.template.call(he, i.data || []) || "");else if (i.data && !i.template) {
          var l = H.find(i.main).length <= 0;if (l) {
            var c = N(i);H.html(c);
          }var s = H.find(i.children),
              u = B.call(he, i.data);s.html(u);
        }if (i.needLoading && (xe = bui.loading({ appendTo: H })), V = 0 == i.menu.indexOf("#") ? e.obj(i.menu) : H.find(i.menu).eq(0), q = V.children(), U = H.find(i.children).eq(0), $ = U.parent(), W = U.children(), ue = W.length, i.loop && W.length) {
          var d = W.eq(W.length - 1).clone(!0),
              f = W.eq(0).clone(!0);U.prepend(d).append(f), W = U.children();var h = W.length - 1;z("afterto"), A("afterto", function (e) {
            0 == e && g(h - 1, "none"), e == h && g(1, "none");
          }), g(1, "none");!H.hasClass(".bui-slide-loop") && H.addClass("bui-slide-loop"), be = !0;
        }if (i.cross && W.length) {
          var p = function p(e) {
            var t = W.eq(e);t.removeClass("bui-cross-prev").removeClass("bui-cross-next"), t.prev().removeClass("bui-cross-next").addClass("bui-cross-prev"), t.next().removeClass("bui-cross-prev").addClass("bui-cross-next");
          };!H.hasClass(".bui-slide-cross") && H.addClass("bui-slide-cross"), z("to", p), A("to", p), g(1, "none"), we = !0;
        }return a(i), r(i), se = i.autoplay, se && v(), me || (o(), Te = !0), ve = U.children(".active").length ? U.children(".active").index() : ve || i.index, parseInt(i.index) > 0 ? g(i.index, "none") : g(ve, "none"), i.onInited && i.onInited.call(he, i), this;
      }function a(e) {
        re = document.documentElement.clientWidth, le = document.documentElement.clientHeight, e.height = String(e.height).indexOf("%") > -1 ? parseFloat(e.height) / 100 * le : parseFloat(e.height), e.width = String(e.width).indexOf("%") > -1 ? parseFloat(e.width) / 100 * re : parseFloat(e.width);var t = H.parents(".bui-page"),
            n = (H.parents("main"), H[0] && H[0].offsetTop || 0),
            i = t.children(e.header),
            a = i[0] && i[0].offsetHeight || 0,
            o = t.children(e.footer),
            r = o[0] && o[0].offsetHeight || 0;ie = le - (a || 0) - (r || 0) - n, ae = 0 == e.height ? ie : e.height;var l = "static" == V.parent().css("position") ? V.css("position") : V.parent().css("position");oe = H.find(e.menu).length ? "absolute" == l || "fixed" == l ? ae : ae - (V[0] && V[0].offsetHeight || 0) : ae, Z = e.fullscreen ? le : 0 == e.height ? oe : e.height, X = e.fullscreen ? re : e.width || re, _ = W.length, G = "x" == Q ? X / pe.visibleNum : X, ne = "y" == Q ? Z / pe.visibleNum : Z, ce = "y" == pe.direction ? ne * pe.scrollNum : G * pe.scrollNum, Y = X * _ / pe.visibleNum, J = Z * _ / pe.visibleNum;
      }function o() {
        var e = function e(_e) {
          var n = t(this).hasClass("active"),
              i = t(this).index(),
              a = t(this).attr("disabled"),
              o = t(this).hasClass("disabled") || "" == a || "true" == a || "disabled" == a;n || o || (pe.animate ? g(i) : g(i, "none"), k(i), se && v()), _e.stopPropagation();
        };0 == pe.menu.indexOf("#") ? V.on("click.bui", "li", e) : H.on("click.bui", pe.menu + " li", e), H.on("click.bui", pe.prev, y), H.on("click.bui", pe.next, x);var n = pe.children + " " + pe.item;pe.data && H.on("click.bui", n, function (e) {
          var n = t(e.currentTarget),
              i = n.attr("href"),
              a = "true" == n.attr("data-reload"),
              o = "true" == n.attr("data-iframe");i && bui.load({ url: i, reload: a, iframe: o }), M.call(he, "click", e), pe.callback && pe.callback.call(he, e, he), e.stopPropagation();
        }), T(), pe.swipe || I(), me = !0;
      }function r(e) {
        Oe = { x: { swipeDir: "swipeleft", swipeDir2: "swiperight", width: ce }, y: { swipeDir: "swipeup", swipeDir2: "swipedown", width: ce } }, de = { x: { parentInitKey: "width", parentInitValue: Y, boxCss: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;", boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + G + "px;height:" + ne + "px;" }, y: { parentInitKey: "height", parentInitValue: J, box: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;-webkit-box-orient: vertical;box-orient: vertical;", boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + G + "px;height:" + ne + "px;" } }, W = U.children(), ue = W.length, $[de[Q].parentInitKey](de[Q].parentInitValue);var n,
            i = W.length;for (n = 0; n < i; n++) {
          var a = W[n].getAttribute("data-scroll"),
              o = null == a ? pe.scroll : "false" != a;de[Q].boxItemCSS = de[Q].boxItemCSS + (o ? "overflow:auto;" : "overflow:hidden;"), W[n].style.cssText = de[Q].boxItemCSS;
        }try {
          U[0] && (U[0].style.cssText = de[Q].boxCss);
        } catch (e) {
          console.log("请检查下children参数是否正确.", "bui.slide id:" + pe.id);
        }var r = "y" == Q && pe.visibleNum > 1 ? oe / pe.visibleNum : oe,
            c = pe.zoom ? ae / 100 + "rem" : ae + "px",
            s = pe.zoom ? r / 100 + "rem" : r + "px";pe.zoom;if (pe.fullscreen ? (t("main").css({ position: "static" }), H.addClass("bui-slide-fullscreen").css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, "z-index": 10, overflow: "hidden", width: X, height: le }), W.addClass(pe.alignClassName || "bui-box-center").css("height", le)) : (H.css({ position: "relative", overflow: "hidden", width: X, height: c }), W.addClass(pe.alignClassName).height(s)), pe.autoheight && H.addClass("bui-slide-autoheight"), pe.autopage) {
          var u = l(),
              d = U.find(".active").index() + 1,
              f = O(u, d);H.children(".bui-slide-head").remove(), H.append(f), q = H.find(pe.menu).eq(0).children();
        }
      }function l() {
        var e = W.length,
            t = e - pe.visibleNum;return e % pe.scrollNum != 0 ? t + 1 : t / pe.scrollNum + 1;
      }function c(t) {
        var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches,
            i = je ? n[0] : t;return ge.x1 = i.pageX, ge.y1 = i.pageY, ge.direction = "", !1 !== (pe.onBeforeTouchstart && pe.onBeforeTouchstart.call(he, t, ge)) && (pe.stopHandle && e.unit.checkTargetInclude(t.target, pe.stopHandle) ? void (Le = !1) : (Be = -ve * ce, Pe = -ve * ce, n.length > 1 || t.scale && 1 !== t.scale ? void f("x" == Q ? Be : Pe) : (se && (m(), se = !0), M.call(he, "touchstart", t, ge), pe.onStart && pe.onStart.call(he, t, ge, he), void (Le = !0))));
      }function s(n) {
        var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;if (i.length > 1 || n.scale && 1 !== n.scale) return void f("x" == Q ? Be : Pe);if (Le) {
          var a = je ? i[0] : n;ge.x2 = a.pageX, ge.y2 = a.pageY;if (!1 === (pe.onBeforeTouchmove && pe.onBeforeTouchmove.call(he, n, ge))) return !1;ge.direction || (ge.direction = e.swipeDirection(ge.x1, ge.x2, ge.y1, ge.y2)), "swipeleft" !== ge.direction && "swiperight" !== ge.direction || (n.preventDefault(), n.stopPropagation()), M.call(he, "touchmove", n, ge);try {
            if ("y" == Q && pe.scroll) {
              var o = t(n.target).closest(".active"),
                  r = o[0].scrollTop || 0,
                  c = o[0].scrollHeight || 0,
                  s = o[0].offsetHeight || 0;if ("swipedown" === ge.direction && r > 1) return void (Ne = !1);if ("swipeup" === ge.direction && c - r - s >= 2) return void (Ne = !1);
            }
          } catch (n) {}ee = ge.x2 - ge.x1, te = ge.y2 - ge.y1, Oe.x.move = Be + ee, Oe.x.absDelta = Math.abs(ee), Oe.y.move = Pe + te, Oe.y.absDelta = Math.abs(te);var u = l();ge.direction !== Oe[Q].swipeDir && ge.direction !== Oe[Q].swipeDir2 || (pe.delay && Oe[Q].absDelta > pe.distance && f(Oe[Q].move, "none"), pe.delay || (pe.bufferEffect ? f(Oe[Q].move, "none") : 0 == ve && u > 1 && ("swipeleft" == ge.direction || "swipeup" == ge.direction) ? f(Oe[Q].move, "none") : ve == u - 1 && u > 1 && ("swiperight" == ge.direction || "swipedown" == ge.direction) ? f(Oe[Q].move, "none") : ve > 0 && ve < u - 1 && u > 1 && f(Oe[Q].move, "none"), n.preventDefault()), pe.onMove && pe.onMove.call(he, n, ge, he)), Ne = !0;
        }
      }function u(e) {
        if (M.call(he, "touchend", e, ge), !1 === (pe.onBeforeTouchend && pe.onBeforeTouchend.call(he, e, ge))) return !1;Ne && (ee = ge.x2 - ge.x1, te = ge.y2 - ge.y1, Oe.x.delta = Be, Oe.x.absDelta = Math.abs(ee), Oe.y.delta = Pe, Oe.y.absDelta = Math.abs(te), Oe[Q].absDelta > pe.distance ? (d.call(this, e, ge, Oe), pe.onEnd && pe.onEnd.call(he, e, ge, he)) : Oe[Q].absDelta < pe.distance && f(Oe[Q].delta), se && v(), "swipeleft" != ge.direction && "swiperight" != ge.direction || e.stopPropagation(), Se += ge.y2 - ge.y1, Ee += ge.x2 - ge.x1, ge.lastX = Ee, ge.lastY = Se, ge = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, Le = !1, Ne = !1, p());
      }function d(e, t, i) {
        ve = U.children(".active").index();var a;if (t.direction == i[Q].swipeDir) {
          var o = W.length,
              r = o - pe.visibleNum,
              l = o % pe.scrollNum != 0 ? r + 1 : r / pe.scrollNum + 1;if (ve >= l - 1) a = ve, i[Q].delta = -a * i[Q].width, f(i[Q].delta), ve = a, k(a), M.call(he, "last", a);else if (a = ve + 1, i[Q].delta = -a * i[Q].width, f(i[Q].delta), ve = a, k(a), n.autoload) C(ve);else {
            W.eq(ve);if (n.loop && ve > ue) return;M.call(he, "to", a);
          }M.call(he, "next", a);
        } else if (t.direction == i[Q].swipeDir2) if (ve > 0) {
          if (a = ve - 1, i[Q].delta = -a * i[Q].width, f(i[Q].delta), ve = a, k(a), n.autoload) C(ve);else {
            W.eq(ve);if (n.loop && 0 == ve) return;M.call(he, "to", a);
          }M.call(he, "prev", a);
        } else a = ve, i[Q].delta = -a * i[Q].width, f(i[Q].delta), ve = a, k(a), M.call(he, "first", a);
      }function f(e, t) {
        var n = pe.transition,
            t = t || "all " + n + "ms",
            e = e || 0;switch (Q) {case "x":
            h(e + "px", 0, t, $);break;case "y":
            h(0, e + "px", t, $);}return this;
      }function h(e, t, n, i) {
        var a = t || 0;"y" == Q && pe.zoom && String(t).indexOf("%") <= -1 && (a = parseInt(t) / 100 + "rem");var n,
            i = i || H,
            e = e || 0,
            o = e,
            r = String(e).indexOf("%") > -1 ? String(e) : o,
            l = String(t).indexOf("%") > -1 ? String(t) : a;n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";try {
          i.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + r + "," + l + ")", transform: "translate(" + r + "," + l + ")" });
        } catch (e) {
          console.log(e.message);
        }
      }function p(e) {
        $.one("webkitTransitionEnd", function () {
          $.css({ "-webkit-transition": "none", transition: "none" }), e && e.call(he, ve), M.call(he, "afterto", ve);
        });
      }function g(e, i, a) {
        var o = 0,
            r = null,
            a = 0 != a;if ("string" == typeof e && e.indexOf(".html") > -1) {
          var c = [];q.each(function (n, i) {
            var a = t(i).attr("href") || void 0;c[n] = a, a == e && (o = n);
          });
        } else o = parseInt(e);"function" == typeof i && (r = i, i = "");var s = { x: { transform: -o * parseFloat(ce) }, y: { transform: -o * parseFloat(ce) } },
            u = l();if (t(".bui-slide-video video").each(function (e, t) {
          this.pause();
        }), o >= u || o < 0) return !1;if (f(s[Q].transform, i), ve = o, k(o), se && v(), n.autoload) C(ve);else {
          W.eq(ve);if (!a) return;M.call(he, "to", o);
        }return p(r), this;
      }function v(e) {
        var e = e || pe.interval;m(), se = !0;var t = ve;K = setInterval(function () {
          var e = l();t >= 0 && t < e - 1 ? t += 1 : t = 0, g(t);
        }, e), M.call(he, "play");
      }function m(e) {
        if (K) try {
          window.clearInterval(K), se = !1, M.call(he, "stop");
        } catch (e) {}return this;
      }function b(e) {
        v(e);
      }function w() {
        return ve;
      }function y() {
        var e = ve - 1;return pe.loop && -1 == e && (e = ue), g(e), M.call(he, "prev", e), this;
      }function x() {
        var e = ve + 1;return pe.loop && e > ue + 1 && (e = 1), g(e), M.call(he, "next", e), this;
      }function k(e) {
        e = e || 0, W.removeClass("active"), W.eq(e).addClass("active"), q.removeClass("active"), q.eq(e).addClass("active");
      }function I() {
        return H.off("touchstart", c).off("touchmove", s).off("touchend", u).off("touchcancel"), M.call(he, "lock"), this;
      }function T(e) {
        return H.on("touchstart", c).on("touchmove", s).on("touchend", u).on("touchcancel", function () {
          f("x" == Q ? Be : Pe);
        }), M.call(he, "unlock"), this;
      }function O(e, t) {
        var n,
            i = "",
            t = t || 1;for (i += '<div class="bui-slide-head">', i += "<ul >", n = 1; n < Number(e) + 1; n++) {
          i += "<li " + (n == t ? 'class="active"' : "") + ">" + n + "</li>";
        }return i += "</ul >", i += "</div >";
      }function C(n) {
        var i = W.eq(n),
            a = q.eq(n),
            o = a.attr("href") || "";if (e.array.compare(ke, n)) return M.call(he, "to", n, "200"), !1;pe.autoload && (o ? o in ye ? (i.html(ye[o]), ke.push(n), !Te && M.call(he, "load", n, status), !Te && M.call(he, "to", n, status), Te = !1) : (ye[o] = "", xe && xe.show(), t.ajax({ url: o, dataType: "html", async: pe.async, success: function success(e, t) {
            ye[o] = e, i.html(e), ke.push(n), M.call(he, "load", n, t), !Te && M.call(he, "to", n, t), Te = !1, xe && xe.hide();
          }, error: function error(e, t) {
            M.call(he, "loadfail", n, t), xe && xe.hide();
          } })) : (!Te && M.call(he, "to", n), Te = !1));
      }function j(t) {
        var n,
            i = e.guid(),
            t = t || 1,
            a = "";for (n = 0; n < t; n++) {
          a += '<li id="' + i + '" style="-webkit-box-flex:1;box-flex:1;width:' + G + "px;height:" + ne + 'px;"></li>';
        }U.append(a), W = U.children();var o = G * W.length;_ = W.length, $.width(o);
      }function S(n) {
        var i = { id: null, url: "", preload: !1, param: {}, success: null, fail: null },
            a = t.extend(!0, {}, i, n),
            o = a.url || "",
            r = null,
            l = W.length ? ve + 1 : 0;if (a.id) r = e.obj(a.id);else {
          var c = W.eq(l);c.length ? r = c : (j(), W = U.children(), r = W.eq(l));
        }if (o) if (ve = l, Ie[l] = a.param, o in ye) {
          e.array.compare(ke, l) || (ke.push(l), r.html(ye[o]), a.success && a.success.call(he, ye[o], "cache"), M.call(he, "load", ye[o], "cache")), a.preload || g(l);
        } else t.ajax({ url: o, success: function success(t, n) {
            t ? (ye[o] = t, e.array.compare(ke, l) || (ke.push(l), r.html(ye[o]), a.success && a.success.call(he, ye[o], n), M.call(he, "load", t, n)), a.preload || g(l)) : (a.fail && a.fail.call(r, t, n), M.call(he, "loadfail", t, n));
          }, error: function error(e, t) {
            a.fail && a.fail.call(he, e, t), M.call(he, "loadfail", e, t);
          } });return this;
      }function E(e) {
        var e = "number" == typeof e ? e : ve;return Ie[e] || {};
      }function L(e) {
        return W.eq(ve)[0];
      }function N(e) {
        return '<div class="' + e.main.substr(1) + '">\n              <ul class="bui-slide-main-ul">\n              </ul>\n            </div>';
      }function B(e) {
        var e = e || [],
            t = "";return e.length && e.forEach(function (e, n) {
          var i = e.title ? '<div class="bui-slide-title">' + e.title + "</div>" : "",
              a = e.background ? '<div class="bui-slide-img" style="background-image:url(' + e.background + ')"></div>' : '<div class="bui-slide-img"><img src="' + e.image + '" alt="' + (e.title || "") + '"/></div>',
              o = "";e.video && (o = '<div class="bui-slide-video">\n                        <video class="bui-video" src="' + e.video.src + '" width="' + (e.video.width ? e.video.width : "100%") + '" height="' + (e.video.height ? e.video.height : "100%") + '" poster="' + (e.video.poster ? e.video.poster : "") + '" ' + (e.video.preload ? "preload" : "") + " " + (e.video.muted ? "muted" : "") + " " + (e.video.autoplay ? "autoplay" : "") + " " + (e.video.controls ? "controls" : "") + " " + (e.video.loop ? "loop" : "") + " " + (e.video.fullscreen ? "fullscreen" : "") + "></video>\n                        </div>"), t += '<li data-id="' + (e.id || "") + '" href="' + (e.url || "") + '" data-reload="' + (e.reload || !1) + '" data-iframe="' + (e.iframe || !1) + '">\n                  ' + (o || a) + "\n                  " + i + "\n                  </li>";
        }), t;
      }function P(e) {
        var i = t.extend(!0, {}, n, e);return a(i), r(i), g(ve, "none"), this;
      }function D(e) {
        var e = 1 == e;m(), V && (V.off("click.bui"), e && V.remove()), H && (H.off(), e && H.remove()), z("stop"), z("play"), z("first"), z("last"), z("to");
      }function R(t) {
        var n = { loading: xe };return e.widget.call(n, t);
      }function F(t, n) {
        return e.option.call(he, t, n);
      }function A(t, n) {
        return e.on.apply(he, arguments), this;
      }function z(t, n) {
        return e.off.apply(he, arguments), this;
      }function M(t) {
        he.self = this == window || this == he ? null : this, e.trigger.apply(he, arguments);
      }var H,
          V,
          q,
          U,
          $,
          W,
          _,
          K,
          Y,
          J,
          X,
          Z,
          Q,
          G,
          ee,
          te,
          ne,
          ie,
          ae,
          oe,
          re,
          le,
          ce,
          se,
          ue,
          de,
          fe = { id: "", menu: ".bui-slide-head > ul", children: ".bui-slide-main > ul", main: ".bui-slide-main", header: "header", footer: "footer", item: "li", prev: ".bui-slide-prev", next: ".bui-slide-next", alignClassName: "", stopHandle: "", width: 0, height: 0, data: null, zoom: !0, transition: 200, interval: 5e3, swipe: !0, animate: !0, delay: !1, bufferEffect: !0, visibleNum: 1, scrollNum: 1, distance: 40, direction: "x", autoplay: !1, loop: !1, cross: !1, autoheight: !1, autoinit: !0, scroll: !1, index: 0, fullscreen: !1, autopage: !1, autoload: !1, needLoading: !1, async: !0, template: null, callback: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, onStart: null, onMove: null, onEnd: null },
          he = { handle: {}, on: A, off: z, to: g, load: S, resize: P, getPageParams: E, getPages: l, $active: L, prev: y, next: x, stop: m, start: b, lock: I, index: w, unlock: T, destroy: D, widget: R, option: F, config: pe, init: i },
          pe = he.config = t.extend(!0, {}, fe, e.config.slide, n),
          ge = {},
          ve = 0,
          me = !1,
          be = !1,
          we = !1,
          ye = {},
          xe = null,
          ke = [],
          Ie = [],
          Te = !1,
          Oe = { x: {}, y: {} },
          Ce = /hp-tablet/gi.test(navigator.appVersion),
          je = "ontouchstart" in window && !Ce,
          Q = "",
          Se = 0,
          Ee = 0,
          Le = !1,
          Ne = !1,
          ge = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" };try {
        pe.autoinit && i(pe);
      } catch (t) {
        e.showLog(t);
      }var Be, Pe;return he;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.swipe = function () {
      var n = null,
          i = null;return function (a) {
        function o(i) {
          var a = t.extend(!0, X, i);return a.onBeforeInit && a.onBeforeInit.call(J, a), pe = !1, a.id ? (F = e.obj(a.id), H = a.width > 0 ? a.width : Ie.clientWidth, V = a.height > 0 ? a.height : Ie.clientHeight, A = F.children(a.handle), z = G ? F.children() : F, U = z.children(a.swipeleft), $ = z.children(a.swiperight), W = z.children(a.swipeup), _ = z.children(a.swipedown), K = parseFloat(a.movingDistance), M = K, c(), ee || (r(a), ee = !0), n && n.close(), de || (L(), S()), a.onInited && a.onInited.call(J, a), this) : void e.showLog("swipe id不能为空", "bui.swipe.init");
        }function r(e) {
          z.css({ width: H, position: "relative", overflow: "hidden" }), !G && z.css({ height: V }), A.css({ position: "relative", "z-index": 10 });try {
            var t = U.attr("data-moving") || K,
                n = $.attr("data-moving") || K,
                i = W.attr("data-moving") || K,
                a = _.attr("data-moving") || K,
                o = l(t),
                r = l(n),
                c = l(i),
                s = l(a);ne && U.css({ width: o }), te && $.css({ width: r }), ae && _.css({ height: s }), ie && W.css({ height: c });
          } catch (e) {}
        }function l(e) {
          return X.zoom ? e / 100 + "rem" : e + "px";
        }function c() {
          "x" == Q ? (te = !!$.length, ne = !!U.length) : "y" == Q ? (ae = !!_.length, ie = !!W.length) : "xy" == Q && (ae = !!_.length, ie = !!W.length, ne = !!U.length, te = !!$.length);
        }function s(n) {
          var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;if (i.length > 1 || n.scale && 1 !== n.scale) return void (be = !1);if (X.stopHandle && e.unit.checkTargetInclude(n.target, X.stopHandle)) return void (be = !1);var a = me ? i[0] : n;if (Z.id = X.id, Z.x1 = a.pageX, Z.y1 = a.pageY, Z.direction = "", q = t(n.target).closest(X.handle), !1 === (X.onBeforeTouchstart && X.onBeforeTouchstart.call(J, n, Z))) return !1;R.call(J, "touchstart", n, Z);var o = t(n.target).closest(".bui-scroll"),
              l = t(n.target).closest(".bui-tab-main li.active"),
              s = t(n.target).closest("main"),
              u = t(n.target).closest(".swipedown"),
              d = t(n.target).closest(".swipeup"),
              f = u.length ? u : d.length ? d : q;if (Z.scrollObj = o.length ? o : l.length ? l : s.length ? s : u.length ? u : f, Te = Z.scrollObj.scrollTop() || 0, G && !ge) {
            A = q, z = A.parent(), U = z.children(X.swipeleft), $ = z.children(X.swiperight), W = z.children(X.swipeup), _ = z.children(X.swipedown), c();z.index();r(X), (0 == X.height || "" == z[0].style.height) && z.height(q[0] && q[0].offsetHeight);
          }if (Z.movingleft = parseInt(U.attr("data-moving") || K), Z.movingright = parseInt($.attr("data-moving") || K), Z.movingup = parseInt(W.attr("data-moving") || K), Z.movingdown = parseInt(_.attr("data-moving") || K), q.length) {
            var h = !1;switch (Q) {case "x":
                h = !(!ne && !te);break;case "y":
                h = !(!ie && !ae);break;case "xy":
                h = !!(ne || te || ie || ae);}
          }be = void 0 == h || 1 == h;
        }function u(t) {
          var a = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches;if (a.length > 1 || t.scale && 1 !== t.scale) return void k();var o = me ? a[0] : t;if (Z.x2 = o.pageX, Z.y2 = o.pageY, !1 === (X.onBeforeTouchmove && X.onBeforeTouchmove.call(J, t, Z))) return !1;if (R.call(J, "touchmove", t, Z), n && t.stopPropagation(), be) {
            var r = Z.scrollObj.scrollTop() <= 0,
                l = (Z.scrollObj[0] && Z.scrollObj[0].scrollHeight) - (Z.scrollObj[0] && Z.scrollObj[0].offsetHeight) - Z.scrollObj.scrollTop() <= 2,
                c = Z.y2 - Z.y1 > 0,
                s = Z.y2 - Z.y1 < 0;if (le) {
              if (c && r) return we = !1, void t.preventDefault();if (s && l && t.preventDefault(), s && !l) return void (we = !1);if (c && !r) return void (we = !1);
            }if (ae && !le && (c && r && t.preventDefault(), s && l && t.preventDefault()), !ae && c && r && t.preventDefault(), ce) {
              if (c && r && t.preventDefault(), s && l) return t.preventDefault(), void (we = !1);if (s && !l) return void (we = !1);if (c && !r) return void (we = !1);
            }Z.direction || (Z.direction = e.swipeDirection(Z.x1, Z.x2, Z.y1, Z.y2)), "swipeleft" !== Z.direction && "swiperight" !== Z.direction || t.preventDefault();try {
              if ("swipeup" === Z.direction || "swipedown" === Z.direction) {
                var u = F[0].scrollTop || 0,
                    d = (F[0].scrollHeight, q[0].scrollTop, q[0].scrollHeight, Z.scrollObj[0] && Z.scrollObj[0].scrollTop || 0),
                    p = Z.scrollObj[0] && Z.scrollObj[0].offsetHeight || 0,
                    g = Z.scrollObj[0] && Z.scrollObj[0].scrollHeight || 0,
                    v = !1,
                    m = !1;u <= 0 && d <= 0 && (v = !0), g - d - p <= 2 && (m = !0);
              }
            } catch (t) {}var b = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Z.x2 - Z.x1 : Z.y2 - Z.y1,
                w = 0;Z.deltax = ge ? Math.abs(b) : Math.abs(b) + xe, !te || "swiperight" != Z.direction || re || ge || i ? !v || !ae || "swipedown" != Z.direction || le || ge || i ? !ne || "swipeleft" != Z.direction || oe || ge || i ? !m || !ie || "swipeup" != Z.direction || ce || ge || i ? "swipeleft" == Z.direction && re ? (M = Z.movingright, w = f(Z, Z.movingright), ue && E(-Z.deltax, 0, "none", i || $), se && E(-w, 0, "none", A), R.call(J, "movingleft", t, Z), we = !0, t.stopPropagation()) : "swipeup" == Z.direction && le ? (M = Z.movingdown, w = f(Z, Z.movingdown), ue && E(0, -Z.deltax, "none", i || _), se && E(0, -w, "none", A), R.call(J, "movingup", t, Z), we = !0, t.preventDefault(), t.stopPropagation()) : "swiperight" == Z.direction && oe ? (M = Z.movingleft, w = f(Z, Z.movingleft), ue && E(Z.deltax, 0, "none", i || U), se && E(w, 0, "none", A), R.call(J, "movingright", t, Z), we = !0, t.stopPropagation()) : "swipedown" == Z.direction && ce && (M = Z.movingup, w = f(Z, Z.movingup), ue && E(0, Z.deltax, "none", i || W), se && E(0, w, "none", A), R.call(J, "movingdown", t, Z), we = !0, t.preventDefault(), t.stopPropagation()) : (M = Z.movingup, w = h(Z, Z.movingup), ue && E(0, w, "none", W), se && E(0, -Z.deltax, "none", A), R.call(J, "movingup", t, Z), we = !0, t.preventDefault(), t.stopPropagation()) : (M = Z.movingleft, w = h(Z, Z.movingleft), ue && E(w, 0, "none", U), se && E(-Z.deltax, 0, "none", A), R.call(J, "movingleft", t, Z), we = !0, t.stopPropagation()) : (M = Z.movingdown, w = f(Z, Z.movingdown), ue && E(0, w, "none", _), se && E(0, Z.deltax, "none", A), R.call(J, "movingdown", t, Z), we = !0, t.preventDefault(), t.stopPropagation()) : (M = Z.movingright, w = f(Z, Z.movingright), ue && E(w, 0, "none", $), se && E(Z.deltax, 0, "none", A), R.call(J, "movingright", t, Z), we = !0, t.stopPropagation());
          }
        }function d(e) {
          if (R.call(J, "touchend", e, Z), !1 === (X.onBeforeTouchend && X.onBeforeTouchend.call(J, e, Z))) return !1;if (we) {
            var t = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Math.abs(Z.x2 - Z.x1) : Math.abs(Z.y2 - Z.y1),
                n = "";switch (Z.direction) {case "swiperight":
                n = "swipeleft";break;case "swipeleft":
                n = "swiperight";break;case "swipeup":
                n = "swipedown";break;case "swipedown":
                n = "swipeup";}te && "swiperight" == Z.direction && t > X.distance && !re && !ge ? (g(), R.call(J, Z.direction, e, Z), R.call(J, "open", Z.direction)) : ne && "swipeleft" == Z.direction && t > X.distance && !oe && !ge ? (p(), R.call(J, Z.direction, e, Z), R.call(J, "open", Z.direction)) : ie && "swipeup" == Z.direction && t > X.distance && !ce && !ge ? (v(), R.call(J, Z.direction, e, Z), R.call(J, "open", Z.direction)) : ae && "swipedown" == Z.direction && t > X.distance && !le && !ge ? (m(), R.call(J, Z.direction, e, Z), R.call(J, "open", Z.direction)) : ge && t < X.distance ? (ne && oe && p(), te && re && g(), ie && ce && v(), ae && le && m(), R.call(J, Z.direction, e, Z), X.alwaysTrigger && R.call(J, "open", Z.direction)) : ge && t > X.distance ? (ne && oe && w(), te && re && b(), ie && ce && y(), ae && le && x(), R.call(J, Z.direction, e, Z), R.call(J, "close", n)) : !ge && t < X.distance && ("swipeleft" === Z.direction && ne && !oe && w(), "swiperight" === Z.direction && te && !re && b(), "swipeup" === Z.direction && ie && !ce && y(), "swipedown" === Z.direction && ae && !le && x(), X.alwaysTrigger && R.call(J, "close", n), R.call(J, Z.direction, e, Z)), ye = Z.direction, be = !1, we = !1, e.stopPropagation();
          }
        }function f(e, t) {
          var n = -t + e.deltax;return n = n > 0 ? 0 : n;
        }function h(e, t) {
          var n = t - e.deltax;return n = n > t ? t : n;
        }function p(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || U, e.handle = e.handle || A, n && n.close(), ge = !0, oe = !0, G && (n = J, i = U, Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition, e.target), se && E(-M, 0, e.transition, e.handle);
        }function g(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || $, e.handle = e.handle || A, n && n.close(), ge = !0, re = !0, G && (n = J, i = $, Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition, e.target), se && E(M, 0, e.transition, e.handle);
        }function v(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || W, e.handle = e.handle || A, n && n.close(), ge = !0, ce = !0, G && (n = J, i = W, Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition, e.target), se && E(0, -M, e.transition, e.handle);
        }function m(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || _, e.handle = e.handle || A, n && n.close(), ge = !0, le = !0, G && (n = J, i = _, Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition, e.target), se && E(0, M, e.transition, e.handle);
        }function b(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = $, e.handle = he || A, ge = !1, re = !1, G && (n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E(-(M + 1), 0, e.transition, e.target), se && E(xe, 0, e.transition, e.handle);
        }function w(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = U, e.handle = he || A, ge = !1, oe = !1, G && (n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E("101%", 0, e.transition, e.target), se && E(-xe, 0, e.transition, e.handle);
        }function y(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = W, e.handle = he || A, ge = !1, ce = !1, G && (n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E(0, "100%", e.transition, e.target), se && E(0, -xe, e.transition, e.handle);
        }function x(e) {
          e = e || {}, e.transition = e.transition || X.transition, e.target = _, e.handle = he || A, ge = !1, le = !1, G && (n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E(0, -M, e.transition, e.target), se && E(0, xe, e.transition, e.handle);
        }function k() {
          re && b(), oe && w(), le && x(), ce && y(), R.call(J, "close", ye);
        }function I() {
          if (!pe) return k(), this;
        }function T(e) {
          if (!pe) {
            var t = e || {};t.transition = t.transition || X.transition, t.index = t.index || 0;var n,
                i = t.target;switch (ye = i, i) {case "swiperight":
                t.target = $.eq(t.index), n = t.target.parent().index(), t.handle = G ? F.children().eq(n).children(X.handle) : A, he = t.handle, fe = t.target, M = $.attr("data-moving") || K, te && g(t);break;case "swipeleft":
                t.target = U.eq(t.index), n = t.target.parent().index(), t.handle = G ? F.children().eq(n).children(X.handle) : A, he = t.handle, fe = t.target, M = U.attr("data-moving") || K, ne && p(t);break;case "swipedown":
                t.target = _.eq(t.index), n = t.target.parent().index(), t.handle = G ? F.children().eq(n).children(X.handle) : A, he = t.handle, fe = t.target, M = _.attr("data-moving") || K, ae && m(t);break;case "swipeup":
                t.target = W.eq(t.index), n = t.target.parent().index(), t.handle = G ? F.children().eq(n).children(X.handle) : A, he = t.handle, fe = t.target, M = W.attr("data-moving") || K, ie && v(t);break;default:
                t.target = $.eq(t.index), n = t.target.parent().index(), t.handle = G ? F.children().eq(n).children(X.handle) : A, he = t.handle, fe = t.target, te && g(t);}return R.call(J, "open", i), this;
          }
        }function O() {
          return n;
        }function C() {
          return ge;
        }function j(e) {
          var i = t(e.target),
              a = i.closest(U).length || i.closest($).length || i.closest(W).length || i.closest(_).length || e.target.className.indexOf("bui-mask") > -1 || e.target.className.indexOf("bui-click") > -1;n && (a || (n.close(), e.stopPropagation()));
        }function S() {
          F.on("touchstart", s).on("touchmove", u).on("touchend", d).on("touchcancel", function () {}), de = !0;
        }function E(e, t, n, i) {
          var n,
              a = i || F,
              e = e || 0,
              t = t || 0,
              o = X.zoom ? parseFloat(e) / 100 + "rem" : parseFloat(e) + "px",
              r = X.zoom ? parseFloat(t) / 100 + "rem" : parseFloat(t) + "px",
              l = String(e).indexOf("%") > -1 ? e : o,
              c = String(t).indexOf("%") > -1 ? t : r;return n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms", a.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + l + "," + c + ")", transform: "translate(" + l + "," + c + ")" }).one("webkitTransitionEnd", function () {
            a.css({ "-webkit-transition": "none", transition: "none" });
          }), this;
        }function L() {
          if (!pe) return F.off("touchmove", u).off("touchend", d).off("touchcancel", function () {}), R.call(J, "lock"), this;
        }function N() {
          if (!pe) return F.on("touchmove", u).on("touchend", d).on("touchcancel", function () {}), R.call(J, "unlock"), this;
        }function B(e) {
          var e = 1 == e;F && (F.off(), e && F.remove()), D("open"), D("close"), pe = !0;
        }function P(t, n) {
          return e.on.apply(J, arguments), this;
        }function D(t, n) {
          return e.off.apply(J, arguments), this;
        }function R(t) {
          J.self = this == window || this == J ? null : this, e.trigger.apply(J, arguments);
        }var F,
            A,
            z,
            M,
            H,
            V,
            q,
            U,
            $,
            W,
            _,
            K,
            Y = { id: "", handle: ".handle", swiperight: ".swiperight", swipeleft: ".swipeleft", swipeup: ".swipeup", swipedown: ".swipedown", direction: "x", stopHandle: "", hasChild: !1, handleMove: !0, targetMove: !0, alwaysTrigger: !1, width: 0, height: 0, movingDistance: 280, initDistance: 0, zoom: !1, distance: 40, autoinit: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, transition: 300 },
            J = { handle: {}, active: O, isActive: C, on: P, off: D, close: I, open: T, destroy: B, lock: L, unlock: N, init: o },
            X = J.config = t.extend(!0, {}, Y, e.config.swipe, a),
            Z = {},
            Q = X.direction,
            G = X.hasChild,
            ee = !1,
            te = !1,
            ne = !1,
            ie = !1,
            ae = !1,
            oe = !1,
            re = !1,
            le = !1,
            ce = !1,
            se = X.handleMove,
            ue = X.targetMove,
            de = !1,
            fe = null,
            he = null,
            pe = !1,
            ge = !1,
            ve = /hp-tablet/gi.test(navigator.appVersion),
            me = "ontouchstart" in window && !ve,
            be = !1,
            we = !1,
            Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "", deltax: 0, movingleft: 0, movingright: 0, movingup: 0, movingdown: 0, scrollObj: null },
            ye = "",
            xe = X.initDistance,
            ke = document,
            Ie = ke.documentElement;X.autoinit && o(X);var Te = 0;return J;
      };
    }();
  }(window.bui || {}, window.libs), function (e, t) {
    e.sidebar = function (n) {
      function i(n) {
        var i = t.extend(!0, y, n);return i.onBeforeInit && i.onBeforeInit.call(w, i), y = w.config = i, i.trigger && (O = e.obj(i.trigger)), k = e.obj(i.handle), m || (m = e.swipe({ id: i.id, handle: i.handle, movingDistance: i.width, swiperight: i.swiperight, swipeleft: i.swipeleft, direction: "x", hasChild: !1, width: 0, height: 0, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, handleMove: i.handleMove, zoom: i.zoom, distance: i.distance, transition: 300 })), y.mask && !x && (x = bui.mask({ id: i.id + "-mask", appendTo: k, autoTrigger: !1, opacity: i.opacity, callback: function callback() {
            m.close();
          } })), T || (a(), i.height > 0 && e.obj(i.id).height(i.height)), i.onInited && i.onInited.call(w, i), this;
      }function a() {
        var e = this;m.on("open", function (t) {
          O && O.addClass("active"), x && x.show(), k.css("overflow-y", "hidden"), I = !0, v.call(e, "open", t);
        }), m.on("close", function () {
          O && O.removeClass("active"), x && x.hide(), k.css("overflow-y", "auto"), I = !1, v.call(e, "close");
        }), O && O.on("click.bui", function (e) {
          if (!t(this).hasClass("disabled")) {
            var n = t(this).attr("data-target") || "swiperight";I ? r() : o({ target: n });
          }
        }), T = !0;
      }function o(e) {
        var t = e || {};return t.target = t.target || "swiperight", t.transition = t.transition || 300, m.open(t), this;
      }function r() {
        return m.close(), this;
      }function l() {
        return m.lock(), v.call(this, "lock"), this;
      }function c(e) {
        return m.unlock(), v.call(this, "unlock"), this;
      }function s() {
        return I;
      }function u() {
        return m.active();
      }function d(e) {
        var e = 1 == e;O && O.off("click.bui"), g("open"), g("close"), x && x.destroy(e), m && m.destroy(e);
      }function f(t) {
        var n = { swipe: m, mask: x };return e.widget.call(n, t);
      }function h(t, n) {
        return e.option.call(w, t, n);
      }function p(t, n) {
        return e.on.apply(w, arguments), this;
      }function g(t, n) {
        return e.off.apply(w, arguments), this;
      }function v(t) {
        w.self = this == window || this == w ? null : this, e.trigger.apply(w, arguments);
      }var m,
          b = { id: "", trigger: "", handle: ".bui-page", swiperight: ".swiperight", swipeleft: ".swipeleft", handleMove: !0, mask: !0, width: 280, opacity: .1, height: 0, zoom: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, autoinit: !0, onBeforeInit: null, onInited: null, distance: 40 },
          w = { handle: {}, on: p, off: g, active: u, isActive: s, open: o, close: r, lock: l, unlock: c, destroy: d, widget: f, option: h, config: y, init: i },
          y = w.config = t.extend(!0, {}, b, e.config.sidebar, n),
          x = null,
          k = null,
          I = !1,
          T = !1,
          O = null;return y.autoinit && i(y), w;
    };
  }(bui || {}, libs), function (e, t) {
    e.listview = function (n) {
      function i(n) {
        var i = t.extend(!0, k, n);return i.onBeforeInit && i.onBeforeInit.call(x, i), k = x.config = i, b = e.obj(i.id), w = b.children(), w.length && a(i), I || o(i), i.onInited && i.onInited.call(x, i), this;
      }function a(e) {
        e.height > 0 && b.height(e.height), e.data && e.data.length ? w.each(function (n, i) {
          var a = t(i),
              o = a.attr("status"),
              l = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;if (!o) {
            var c = "function" == typeof e.template ? e.template.call(x, e.data) : r(e);a.append(c).attr("status", "1");
          }i.style.height || t(i).height(l);
        }) : w.each(function (n, i) {
          var a = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;i.style.height || t(i).height(a);
        });
      }function o(e) {
        var t = this,
            n = function n(t) {
          t.ui = x, e.callback && e.callback.call(x, t, m);
        };b.on("click.bui", ".bui-listview-menu .bui-btn", n), m = bui.swipe({ id: e.id, handle: e.handle, movingDistance: e.menuWidth, swiperight: e.swiperight, swipeleft: e.swipeleft, direction: "x", hasChild: !0, width: e.width, height: 0, zoom: e.zoom, distance: e.distance, onBeforeTouchstart: e.onBeforeTouchstart, onBeforeTouchmove: e.onBeforeTouchmove, onBeforeTouchend: e.onBeforeTouchend, transition: 300 }), m.on("open", function (e) {
          T = !0, v.call(t, "open", e);
        }), m.on("close", function (e) {
          T = !1, v.call(t, "close", e);
        }), I = !0;
      }function r(e) {
        var n = "",
            i = "right" == e.position ? e.swipeleft.substr(1) : e.swiperight.substr(1);return n += '<div class="bui-listview-menu ' + i + '">', t.each(e.data, function (e, t) {
          n += '    <div class="bui-btn ' + t.classname + '">' + t.text + "</div>";
        }), n += "</div>";
      }function l() {
        return m.active();
      }function c(e) {
        var t = e || {};return t.target = t.target || ("right" == k.position ? k.swipeleft.substr(1) : k.swiperight.substr(1)), t.transition = t.transition || 300, t.index = t.index || 0, m.open(t), this;
      }function s() {
        return m.close(), this;
      }function u() {
        return m.lock(), v.call(this, "lock"), this;
      }function d(e) {
        return m.unlock(), v.call(this, "unlock"), this;
      }function f(e) {
        var e = 1 == e;w && (w.off("click.bui"), w = null), b && (b.off("click.bui"), e && b.remove(), b = null), g("open"), g("close"), m && m.destroy(e), k = null, x = null;
      }function h(t) {
        var n = { swipe: m };return e.widget.call(n, t);
      }function p(t, n) {
        return e.option.call(x, t, n);
      }function g(t, n) {
        return e.off.apply(x, arguments), this;
      }function v(t) {
        x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments);
      }var m,
          b,
          w,
          y = { id: "", data: [], handle: ".bui-btn", swiperight: ".swiperight", swipeleft: ".swipeleft", position: "right", width: 0, height: 0, menuWidth: 160, menuHeight: 0, distance: 80, zoom: !1, autoinit: !0, template: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, callback: null },
          x = { active: l, lock: u, unlock: d, open: c, close: s, destroy: f, widget: h, option: p, config: k, init: i },
          k = x.config = t.extend(!0, {}, y, e.config.listview, n),
          I = !1,
          T = !1;return k.autoinit && i(k), x;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.btn = function (n) {
      function i(n) {
        var n = n;o();var i = 0;r.on("click.bui", s, function (a) {
          var o = n || t(this).attr("href"),
              r = t(this).attr("target"),
              s = t(this).attr("disabled"),
              d = t(this).hasClass("disabled") || "" == s || "true" == s || "disabled" == s;if (o && !d && !(o && o.indexOf("javascript:") > -1)) {
            var f = t(this).attr("param") || "",
                h = f && f.indexOf("{") > -1 && f.indexOf("}") > -1 ? JSON.parse(t(this).attr("param")) : {},
                p = h;(t(this).attr("progress") ? "false" != t(this).attr("progress") : l) && e.loading({ autoTrigger: !0, display: "block", opacity: 0, timeout: u.timeout });var g = +new Date();if (g - i < 350) return !1;i = g;var v = { url: o, param: p, replace: c };return "_blank" == r ? e.run({ id: o, data: p }) : e.load(v), !1;
          }
        });
      }function a(n, i) {
        var i = i || {};o(), r.on("click.bui", s, function (a) {
          var o = this,
              r = t(o).css("background-color");if (!t(this).hasClass("disabled") && "true" != t(this).attr("disabled")) {
            var l = "none" == r ? "#fff" : r;i.appendTo = o, i.background = i.background || l, i.display = i.display || "inline", i.width = i.width || 15, i.height = i.height || 15, i.text = i.text || "加载中", i.autoClose = 1 == i.autoClose, i.autoTrigger = 0 != i.autoTrigger;var c = e.loading(i);return n && n.call(o, c);
          }
        });
      }function o() {
        return r.off("click.bui", s), this;
      }var r,
          l,
          c,
          s,
          u = {};return function (n) {
        "object" === e.typeof(n) ? (u.id = n.id || "", u.handle = n.handle || "", u.progress = "progress" in n && n.progress, u.replace = "replace" in n && n.replace, u.timeout = n.timeout || 3e3) : "string" === e.typeof(n) && (u.id = n || "", u.handle = "", u.progress = !1, u.replace = !1, u.timeout = 3e3), r = t(u.id), s = u.handle, l = u.progress, c = u.replace;
      }(n), { load: i, submit: a, off: o };
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.dialog = function (i) {
      function a(i) {
        var a = n.extend(!0, C, i);switch (a.onBeforeInit && a.onBeforeInit.call(O, a), a.appendTo = a.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), D = !1, k = a.effect, B = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth, P = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight, a.position) {case "top":
            j = "bui-dialog-top", k = a.effect || "fadeInDown";break;case "bottom":
            j = "bui-dialog-bottom", k = a.effect || "fadeInUp";break;case "left":
            j = "bui-dialog-left", k = a.effect || "fadeInLeft";break;case "right":
            j = "bui-dialog-right", k = a.effect || "fadeInRight";break;case "center":
            j = "bui-dialog-center", k = a.effect || L;}a.fullscreen && (j = "bui-dialog-fullscreen", k = a.effect || L), a.render ? (a.id = e.guid(), u(a), y = e.objId(a.id)) : (y = e.obj(a.id), y.addClass(j).css("z-index", a.zIndex)), S = y.width() > B ? B : y.width(), E = y.height() > P ? P : y.height(), y.css("display", "none"), x || (x = e.toggle({ id: a.id, effect: k }));try {
          var o = "object" === t(a.id) ? n(a.id).attr("id") + "-mask" : a.id + "-mask";i.mask && !I && (I = e.mask({ id: o, opacity: i.opacity, appendTo: y.parent(), autoTrigger: !1, onlyOne: !0, autoClose: !1, zIndex: parseInt(i.zIndex, 10) - 1, callback: function callback(e) {
              i.onMask && i.onMask.call(O, e), C.autoClose && (C.render ? c(s) : c());
            } }));
        } catch (e) {
          console.log(e);
        }return N && !C.render || d(), C = O.config = a, a.onInited && a.onInited.call(O, a), this;
      }function o(e) {
        var t = "";return t += '<div id="' + e.id + '" class="bui-dialog ' + j + " " + e.className + '" style="display:block;z-index:' + e.zIndex + '">', e.title && (t += '\t<div class="bui-dialog-head">' + e.title + "</div>"), t += '\t<div class="bui-dialog-main">', e.content && (t += e.content), t += "\t</div>", e.buttons && e.buttons.length && (t += '\t<div class="bui-dialog-foot bui-box">', n(e.buttons).each(function (e, n) {
          t += '\t\t<div class="bui-btn span1 ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || n) + "</div>";
        }), t += "\t</div>"), e.close && (t += '   <div class="bui-dialog-close">' + (e.closeText ? e.closeText : '<i class="icon-close"></i>') + "</div>"), t += "</div>";
      }function r(t) {
        if (!l && !D) {
          var i = { width: C.width, height: C.height, zoom: C.zoom, fullscreen: C.fullscreen, position: C.position, scroll: C.scroll, onBeforeOpen: C.onBeforeOpen, effect: "", callback: null },
              a = i;"function" == typeof t ? a.callback = t : "string" == typeof t ? a.effect = t : t && "object" === e.typeof(t) && (a = n.extend(!0, {}, i, t));var o = a.onBeforeOpen && a.onBeforeOpen.call(O, { toggle: x });if (w.call(O, "beforeopen", { toggle: x }), !1 === o) return this;y.css("display", "block");if (0 == (y.attr("status") || 0)) {
            S = String(a.width).indexOf("%") > -1 ? B * parseFloat(a.width) / 100 : a.width || y.width(), E = String(a.height).indexOf("%") > -1 ? P * parseFloat(a.height) / 100 : a.height || y.height();var r = e.unit.pxToRemZoom(S),
                c = e.unit.pxToRemZoom(E),
                s = a.zoom ? r + "rem" : S + "px",
                u = a.zoom ? c + "rem" : E + "px",
                f = a.zoom ? "-" + c / 2 + "rem" : "-" + E / 2 + "px",
                h = a.zoom ? "-" + r / 2 + "rem" : "-" + S / 2 + "px";if ("center" != a.position || a.fullscreen || y.css({ width: s, height: u, top: "50%", "margin-top": f, left: "50%", "margin-left": h, right: "auto" }), a.fullscreen || y.css({ width: s, height: u }), a.fullscreen && y.addClass("bui-dialog-fullscreen"), a.scroll) {
              var p = y.children(".bui-dialog-head"),
                  g = y.children(".bui-dialog-foot"),
                  v = y.children(".bui-dialog-main"),
                  m = p.length ? p.height() : 0,
                  b = g.length ? g.height() : 0,
                  k = y.height() - m - b;v.css({ height: k });
            }y.attr("status", "1");
          }return I && I.show(), x.show(function (e) {
            l = !0, a.callback && a.callback.call(O, { toggle: x }), w.call(O, "openafter", { toggle: x }), w.call(O, "afteropen", { toggle: x });
          }, a.effect), N || d(), w.call(O, "open", { toggle: x }), this;
        }
      }function l(e) {
        return l;
      }function c(t) {
        if (l && !D) {
          var n = {};"function" == typeof t ? n.callback = t : "string" == typeof t ? (n.effect = t, n.callback = C.onClose) : t && "object" === e.typeof(t) && (n = t), n.onBeforeClose = C.onBeforeClose;var i = n.onBeforeClose && n.onBeforeClose.call(O, { toggle: x });if (w.call(O, "beforeclose", { toggle: x }), !1 === i) return this;try {
            x.hide(function (e) {
              l = !1, n.callback && n.callback.call(O, { toggle: x });
            }, n.effect), I && I.hide(), w.call(this, "close", { toggle: x });
          } catch (t) {
            e.showLog(t, "bui.dialog.close");
          }return this;
        }
      }function s() {
        try {
          y.remove(), I && I.remove(), w.call(this, "remove");
        } catch (t) {
          e.showLog(t, "bui.dialog.remove");
        }return this;
      }function u(e) {
        var t = o(e);return n(e.appendTo).append(t), this;
      }function d() {
        return y.on("click.bui", ".bui-dialog-close", function (e) {
          C.render ? c(s) : c(), C.onClose && C.onClose.call(O, e, O), e.stopPropagation();
        }), y.on("click.bui", ".bui-dialog-foot .bui-btn", function (e) {
          e.target = this, C.callback && C.callback.call(O, e, O), C.autoClose && (C.render ? c(s) : c()), e.stopPropagation();
        }), N = !0, this;
      }function f(t) {
        return e.selector.call(y, t);
      }function h(e) {
        var t = e || {};return T.title = C.title || "提示", T.content = C.content || "", T.close = !1, T.render = !0, T.autoClose = C.autoClose, T.mask = C.mask, T.buttons = C.buttons && C.buttons.length ? C.buttons : ["确定"], a(n.extend(!0, T, t)), w.call(O, "create"), this;
      }function p() {
        var e = 1 == e;y && (y.off("click.bui"), y.remove(), y = null), b("open"), b("close"), I && I.destroy(e), x && x.destroy(e), D = !0;
      }function g(t) {
        var n = { toggle: x, mask: I };return e.widget.call(n, t);
      }function v(t, n) {
        return e.option.call(O, t, n);
      }function m(t, n) {
        return e.on.apply(O, arguments), this;
      }function b(t, n) {
        return e.off.apply(O, arguments), this;
      }function w(t) {
        O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments);
      }var y,
          x,
          k,
          I,
          T = { id: "", title: "", effect: "zoomIn", content: "", className: "", appendTo: "", position: "center", fullscreen: !1, width: 0, height: 0, mask: !0, opacity: .6, render: !1, autoClose: !0, close: !0, scroll: !0, closeText: "", zoom: !1, zIndex: 100, buttons: [], onBeforeClose: null, onBeforeOpen: null, onBeforeInit: null, autoinit: !0, onInited: null, onMask: null, onClose: null, callback: null },
          O = { selector: f, $el: f, $: f, handle: {}, on: m, off: b, open: r, close: c, isOpen: l, create: h, remove: s, destroy: p, widget: g, option: v, config: C, init: a },
          C = O.config = n.extend(!1, {}, T, e.config.dialog, i),
          j = "",
          S = "",
          E = "",
          L = "fadeInDown",
          l = !1,
          N = !1,
          B = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth,
          P = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight,
          D = !1;return C.id && C.autoinit && a(C), O;
    };
  }(bui || {}, libs), function (e, t) {
    e.alert = function (n, i) {
      var a = e.dialog(),
          o = {};o.className = "bui-alert", o.title = "", o.width = 580, o.height = 360, o.scroll = !0, o.zIndex = 111, o.position = "center", o.autoClose = !0, o.zoom = !0, o.buttons = [{ name: "确定", className: "primary-reverse" }], o.callback = i || function () {};var r = t.extend(o, e.config.alert),
          l = "";try {
        l = "string" == typeof n && n.indexOf("<") > -1 && n.indexOf(">") > -1 ? "<xmp>" + n + "</xmp>" : !n || "object" !== e.typeof(n) && "array" !== e.typeof(n) ? n && "function" === e.typeof(n) ? n.toString() : n : JSON.stringify(n), r.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + l + "</div>";
      } catch (t) {
        e.showLog(t, "bui.alert");
      }return a.create(r).open(), a;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.confirm = function (i, a) {
      var o = e.dialog(),
          r = {};r.className = "bui-confirm", r.title = "", r.width = 580, r.height = 360, r.scroll = !0, r.zIndex = 111, r.autoClose = !0, r.zoom = !0, r.position = "center", r.buttons = [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], r.callback = a || function () {};var l = {};return "object" === (void 0 === i ? "undefined" : t(i)) ? (i.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i.content + "</div>", l = n.extend(r, e.config.confirm, i)) : (l = n.extend(r, e.config.confirm), l.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i + "</div>", l.callback = a || function () {}), o.create(l).open(), o;
    };
  }(window.bui || {}, window.libs);e(function (e) {
    !function (n, i) {
      n.prompt = function (a, o) {
        var r = n.dialog(),
            l = {};l.className = "bui-prompt", l.title = "", l.width = 580, l.height = 400, l.scroll = !0, l.autoClose = !1, l.zoom = !0, l.zIndex = 111, l.position = "center", l.buttons = [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], l.callback = o || function () {}, l.placeholder = "", l.row = 1, l.type = "text", l.value = "", l.onChange = null;var c = {},
            s = "",
            u = "";switch ("object" === (void 0 === a ? "undefined" : t(a)) ? (c = i.extend(l, n.config.prompt, a), s = c.content || "") : (c = i.extend(l, n.config.prompt), c.callback = o || function () {}, s = a || ""), c.type) {case "number":
            c.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + s + '</div> <div class="span1"> <input class="bui-prompt-text" placeholder="' + c.placeholder + '" type="' + c.type + '" value="' + c.value + '"/> </div> </div>';break;default:
            c.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + s + '</div> <div class="span1"> <textarea class="bui-prompt-text" placeholder="' + c.placeholder + '" rows="' + c.row + '" >' + c.value + "</textarea> </div> </div>";}return r.create(c).open(), i("#" + r.config.id).on("change", ".bui-prompt-text", function (t) {
          u = this.value, c.onChange && c.onChange.call(e, t);
        }), r.value = function (e) {
          return void 0 === e ? u : (i("#" + r.config.id).find(".bui-prompt-text").val(e), u = e);
        }, r.focus = function (e) {
          i("#" + r.config.id).find(".bui-prompt-text").focus();
        }, r;
      };
    }(window.bui || {}, window.libs);
  });!function (e, n) {
    e.hint = function (i, a) {
      function o(t) {
        var i = n.extend(!0, T, t);return i.onBeforeInit && i.onBeforeInit.call(I, i), x = e.guid(), j = "top" === i.position ? "fadeInDown" : "bottom" === i.position ? "fadeInUp" : i.effect, T = I.config = i, l(x, i.content, O, i.appendTo), ++O, C = e.objId(x), y || (y = e.toggle({ id: C, effect: j })), S = !0, y.show(), i.autoClose && (k && clearTimeout(k), k = setTimeout(function () {
          i.onClose && i.onClose.call(I), s();
        }, i.timeout)), E || r(i), i.onInited && i.onInited.call(I, i), this;
      }function r(e) {
        e.showClose && C.on("click.bui", ".bui-hint-close", function (t) {
          s(), e.onClose && e.onClose.call(I, t);
        }), E = !0;
      }function l(t, i, a, o) {
        var r,
            l = "11" + a,
            c = o ? e.obj(o) : n("body");switch (T.position) {case "top":
            r = "bui-hint-top";break;case "bottom":
            r = "bui-hint-bottom";break;case "center":
            r = "bui-hint-center";}var s = T.background ? "background:" + T.background : "",
            u = s + ";z-index:" + l + ";opacity:" + T.opacity,
            d = '<div id="' + t + '" class="bui-hint ' + r + " " + T.skin + '" style="' + u + '">' + i + (T.showClose ? '<div class="bui-hint-close"><i class="icon-close"></i></div>' : "") + "</div>";c.append(d), o && c.css("position", "relative");
      }function c() {
        return S;
      }function s() {
        var e = this;return y && (S = !1, y.hide(function () {
          y.remove(), m.call(e, "remove", { toggle: y }), y = null;
        })), this;
      }function u(e, t) {
        var n = this;return "function" == typeof e ? (e = e, t = t || T.effect || "") : (t = e || T.effect || "", e = null), y && (S = !1, y.hide(function () {
          e && e.call(I, { toggle: y }), m.call(n, "hide", { toggle: y });
        }, t)), this;
      }function d(e, t) {
        var n = this;return "function" == typeof e ? (e = e, t = t || T.effect || "") : (t = e || T.effect || "", e = null), y && (S = !0, y.show(function (t) {
          m.call(n, "show", { toggle: y }), e && e.call(I, { toggle: y });
        }, t)), this;
      }function f(e) {
        var e = 1 == e;C.off("click.bui"), y && y.destroy(e), v("show"), v("hide");
      }function h(t) {
        var n = { toggle: y };return e.widget.call(n, t);
      }function p(t, n) {
        return e.option.call(I, t, n);
      }function g(t, n) {
        return e.on.apply(I, arguments), this;
      }function v(t, n) {
        return e.off.apply(I, arguments), this;
      }function m(t) {
        I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments);
      }var b = { appendTo: "", content: "", timeout: 2e3, autoClose: !0, showClose: !1, opacity: 1, background: "", effect: "fadeInUp", skin: "", position: "bottom", onBeforeInit: null, onInited: null, onClose: null };if ("number" == typeof i || "string" == typeof i) {
        var w = i || "";i = {}, i.content = w, i.onClose = a || null;
      } else "object" === (void 0 === i ? "undefined" : t(i)) && i.content && (i = i);var y,
          x,
          k,
          I = { handle: {}, on: g, off: v, remove: s, hide: u, show: d, isShow: c, destroy: f, widget: h, option: p, config: T, init: o },
          T = I.config = n.extend(!0, {}, b, e.config.hint, i),
          O = 0,
          C = null,
          j = "",
          S = !1,
          E = !1;return T.content && o(T), I;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.pullrefresh = function (n) {
      function i(n) {
        var i = t.extend(!0, z, n);return i.onBeforeInit && i.onBeforeInit.call(A, i), i.id ? (O = e.obj(i.id), z = A.config = i, C = O[0], j = O.children(P), S = O.children(D), E = O.children(R), B = a, N = i.refreshTips.end, $ || ($ = e.loading({ appendTo: j, width: 15, height: 15, autoClose: !1, text: N, onlyText: !0, display: "inline", autoTrigger: !1, mask: !1 })), i.autoLoad && (V = !0, $.start({ text: i.refreshTips.start, onlyText: !1 }), B()), q || r(i), m(i.height), i.onInited && i.onInited.call(A, i), this) : void e.hint("pullrefresh id不能为空");
      }function a() {
        H = new Date().getTime(), z.onBeforeRefresh && z.onBeforeRefresh.call(A), z.onRefresh && z.onRefresh.call(A), T.call(A, "refresh");
      }function o() {
        var e = new Date().getTime(),
            t = e - H,
            n = Math.floor(t / 36e5),
            i = Math.floor(t / 6e4);Math.floor(t / 1e3);return n <= 0 && i <= 0 ? "刚刚更新" : n <= 0 && i > 0 ? i + "分钟前更新" : "上次更新时间:" + (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i);
      }function r(e) {
        M || d(), q = !0;
      }function l(n) {
        var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches,
            a = _ ? i[0] : n;return Z.x1 = a.pageX, Z.y1 = a.pageY, Z.direction = "", Q = O.scrollTop(), z.stopHandle && e.unit.checkTargetInclude(n.target, z.stopHandle) ? void (J = !1) : i.length > 1 || n.scale && 1 !== n.scale ? void (J = !1) : !1 !== (z.onBeforeTouchstart && z.onBeforeTouchstart.call(A, n, Z)) && (N = z.lastUpdated ? o() : z.refreshTips.end, T.call(A, "touchstart", n, Z), void (t(window).scrollTop() <= 0 && Q <= 0 && z.onRefresh && !V ? (J = !0, t(this).css("touch-action", "none")) : J = !1));
      }function c(t) {
        var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches || [];if (!J) return void h();if (n.length > 1 || t.scale && 1 !== t.scale) return void h();var i = _ ? n[0] : t;if (Z.x2 = i.pageX, Z.y2 = i.pageY, !1 === (z.onBeforeTouchmove && z.onBeforeTouchmove.call(A, t, Z))) return !1;Z.direction || (Z.direction = e.swipeDirection(Z.x1, Z.x2, Z.y1, Z.y2)), T.call(A, "touchmove", t, Z), "swipeleft" !== Z.direction && "swiperight" !== Z.direction || t.preventDefault(), Z.y2 - Z.y1 > 0 && Q <= 0 && t.preventDefault(), "swipedown" == Z.direction ? (T.call(A, "movingdown", t, Z), L = Math.abs(Z.y2 - Z.y1), h(L / 2, !1), L >= z.distance ? G || ($.show({ text: z.refreshTips.release, onlyText: !1 }).pause(), G = !0) : ee || ($.show({ text: N, onlyText: !1 }).pause(), ee = !0), X = !0, z.maxDistance > z.distance && L >= z.maxDistance && ($.show({ text: z.refreshTips.start, onlyText: !1 }).start(), V = !0, z.onRefresh && B(), X = !1, G = !1, ee = !1, Z = {}, K += Z.y2 - Z.y1, Y += Z.x2 - Z.x1, Z.lastX = Y, Z.lastY = K, Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, J = !1, X = !1), t.preventDefault(), t.stopPropagation()) : "swipeup" == Z.direction && (T.call(A, "movingup", t, Z), X = !0);
      }function s(e) {
        return T.call(A, "touchend", e, Z), !1 !== (z.onBeforeTouchend && z.onBeforeTouchend.call(A, e, Z)) && (t(this).css("touch-action", "auto"), X ? ("swipedown" == Z.direction ? (T.call(A, Z.direction, e, Z), L >= z.distance ? (h(z.distance / 2), $.show({ text: z.refreshTips.start, onlyText: !1 }).start(), V = !0, z.onRefresh && B()) : h(), e.stopPropagation(), G = !1, ee = !1, Z = {}) : "swipeup" == Z.direction && T.call(A, Z.direction, e, Z), K += Z.y2 - Z.y1, Y += Z.x2 - Z.x1, Z.lastX = Y, Z.lastY = K, Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, J = !1, void (X = !1)) : (Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, J = !1, void (X = !1)));
      }function u(e) {
        return M = !0, O.off("touchstart", l).off("touchmove", c).off("touchend", s).off("touchcancel", h), h(), e && e.call(A), T.call(A, "lock"), this;
      }function d(e) {
        return M = !1, O.on("touchstart", l).on("touchmove", c).on("touchend", s).on("touchcancel", h), e && e.call(this), T.call(A, "unlock"), this;
      }function f(e, t, n) {
        return U || ($.show({ text: z.refreshTips.success, onlyText: !1 }), h(e, t), S.one("webkitTransitionEnd", function () {
          $ && $.hide(), U = !1, n && n.call(A);
        })), this;
      }function h(e, t) {
        t = 0 != t, e = e || 0, V = !1;var n = t ? "all 300ms ease-out" : "none";return p(0, e + "px", n, S), E.length && p(0, e + "px", n, E), this;
      }function p(e, t, n, i) {
        var n,
            i = i || O,
            e = e || 0,
            t = t || 0,
            a = e,
            o = t,
            r = String(e).indexOf("%") > -1 ? String(e) : a,
            l = String(t).indexOf("%") > -1 ? String(t) : o;n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";try {
          i.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + r + "," + l + ")", transform: "translate(" + r + "," + l + ")" }), i.one("webkitTransitionEnd", function () {
            i.css({ "-webkit-transition": "none", transition: "none" });
          });
        } catch (e) {
          console.log(e.message);
        }
      }function g() {
        U = !0, h(), e.hint(z.refreshTips.fail), T.call(A, "fail");
      }function v() {
        h(z.distance / 2, !0), $.start({ text: z.refreshTips.start, onlyText: !1 }), z.onRefresh && B();
      }function m(e) {
        var t = O.parents(".bui-page"),
            n = (t.children("main"), t.find(".bui-tab-head .bui-nav")),
            i = C && C.offsetTop || 0,
            a = t.children(z.header),
            o = a.length > 1 ? a.eq(a.length - 1).height() : a.height(),
            r = t.children(z.footer),
            l = r.length > 1 ? r.eq(r.length - 1).height() : r.height(),
            c = window && window.viewport && window.viewport.height() - (o || 0) - (l || 0) - i - n.height(),
            s = e ? parseFloat(e) : c;O.height(s);
      }function b(e) {
        var t = e || { height: 0, width: 0 };return this.setHeight(t), t && t.width > 0 && O.width(t.width), this;
      }function w(e) {
        var e = 1 == e;O && (O.off(), e && O.remove()), $ && $.destroy(e), I("refresh"), I("movingdown"), I("swipedown");
      }function y(t) {
        var n = { loading: $ };return e.widget.call(n, t);
      }function x(t, n) {
        return e.option.call(A, t, n);
      }function k(t, n) {
        return e.on.apply(A, arguments), this;
      }function I(t, n) {
        return e.off.apply(A, arguments), this;
      }function T(t) {
        A.self = this == window || this == A ? null : this, e.trigger.apply(A, arguments);
      }var O,
          C,
          j,
          S,
          E,
          L,
          N,
          B,
          P = "." + e.prefix("scroll-head"),
          D = "." + e.prefix("scroll-main"),
          R = "." + e.prefix("scroll-foot"),
          F = { id: "", stopHandle: "", childrenTop: P, childrenMain: D, header: ".bui-page header", footer: ".bui-page footer", distance: 90, maxDistance: 0, autoLoad: !0, lastUpdated: !1, height: 0, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "刷新失败,请检查下网络再试试", success: "刷新成功" }, autoinit: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onBeforeRefresh: null, onInited: null, onRefresh: null },
          A = { handle: {}, on: k, off: I, reverse: f, refresh: v, setHeight: m, resize: b, fail: g, lock: u, unlock: d, destroy: w, widget: y, option: x, config: z, init: i },
          z = A.config = t.extend(!0, {}, F, e.config.pullrefresh, n),
          M = !1,
          H = new Date().getTime(),
          V = !1,
          q = !1,
          U = !1,
          $ = null,
          W = /hp-tablet/gi.test(navigator.appVersion),
          _ = "ontouchstart" in window && !W,
          K = 0,
          Y = 0,
          J = !1,
          X = !1,
          Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" };z.autoinit && i(z);var Q = 0,
          G = !1,
          ee = !1;return A;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.scroll = function (i) {
      function a(t) {
        var i = n.extend(!0, X, t);if (i.onBeforeInit && i.onBeforeInit.call(J, i), F = n(window), !i.id) return void e.hint("scroll id不能为空");D = e.obj(i.id), re = i.page, le = i.pageSize, X = J.config = i, ne = !0, ie = !0, ae = !1, oe = !1, R = D[0], z = D.children(W), H = D.children(_), M = D.children(K), H.css({ position: "relative" }), Q || (Q = e.loading({ appendTo: M, width: 20, height: 20, autoClose: !1, text: i.scrollTips.start, display: "inline", autoTrigger: !1, mask: !1 })), V = c, q = l, U ? U.init({ id: i.id, onBeforeRefresh: i.onBeforeRefresh, onRefresh: V, distance: i.distance, maxDistance: i.maxDistance, lastUpdated: i.lastUpdated, height: i.height, refreshTips: i.refreshTips, autoLoad: i.autoRefresh }) : i.refresh && i.onRefresh ? (U = e.pullrefresh({ id: i.id, onBeforeRefresh: i.onBeforeRefresh, onRefresh: V, distance: i.distance, stopHandle: i.stopHandle, maxDistance: i.maxDistance, lastUpdated: i.lastUpdated, header: i.header, footer: i.footer, height: i.height, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, refreshTips: i.refreshTips, autoLoad: i.autoRefresh }), U.lock(), ee = !0) : y(i.height);try {
          q && q.call(J, re, le);
        } catch (t) {
          e.showLog(t, "bui.scroll.init");
        }return ce || o(i), i.onInited && i.onInited.call(J, i), this;
      }function o(t) {
        D.on("scroll", e.unit.debounce(r, t.delayTime)), ce = !0;
      }function r(e) {
        var t = e.target;0 == (t.scrollTop || 0) ? P.call(J, "scrolltop", e) : t.scrollTop + t.clientHeight >= (t && t.scrollHeight - X.endDistance) && X.onLoad && (X.page = J.config.page = ++re, X.autoScroll && q && q.call(J, X.page, le), P.call(J, "scrollbottom", e)), P.call(J, "scrollend", e), X.onScrolling && X.onScrolling.call(J, e, J);
      }function l(e, t) {
        return te = !0, oe = !1, ie && !ae && (X.page = J.config.page = e, X.onBeforeLoad && X.onBeforeLoad.call(J, e, t), X.onLoad && Q && Q.start({ text: X.scrollTips.start, onlyText: !1 }), X.onLoad && X.onLoad.call(J, e, t)), ee && X.refresh && U && U.unlock(), this;
      }function c() {
        te = !0, ie = !0, ae = !1, ne = !0, oe = !0, re = Z, le = X.pageSize, se = {}, Q && Q.start({ text: X.scrollTips.end, onlyText: !0 }), X.page = J.config.page = re, P.call(J, "refresh", re), X.onRefresh && X.onRefresh.call(J, re, le);
      }function s() {
        return X.page;
      }function u(t, n, i) {
        var i = 0 != i;if (!n || "array" != e.typeof(n)) return Q && Q.stop(), e.showLog("scroll 控件的updatePage 第2个参数,必须是一个数组,如果是list控件,检测field的data映射是否准确", "bui.scroll.updatePage"), void (n = []);n = n, te = !1, ue && clearTimeout(ue), ue = setTimeout(function () {
          var e = parseInt(D.height()),
              a = parseInt(D.find(X.childrenMain)[0] && D.find(X.childrenMain)[0].scrollHeight);if (i) {
            if (n && n.length > le - 1) {
              if (ie = !0, ae = !1, ne = !1, Q && Q.start({ text: X.scrollTips.end, onlyText: !0 }), a >= 10 && a < e && X.autoNext && X.onLoad) {
                var o = ++re;q && q.call(J, o, le);
              }P.call(J, "loadpage", n, re);
            } else {
              ie = !1, ae = !0;var r = ne && n && n.length < 1 ? X.scrollTips.nodata : X.scrollTips.last;Q && Q.start({ text: r, onlyText: !0 }), P.call(J, "loadpage", n, re), P.call(J, "lastpage", n, re);
            }
          } else ie = !1, ae = !0, Q && Q.stop();return se[t] = n;
        }, 10);
      }function d(e) {
        return U && U.reverse(), e && e.call(J, U), this;
      }function f() {
        return oe;
      }function h(e) {
        return se;
      }function p(e) {
        se = {};
      }function g(e, t) {
        return G = !0, ee = !0, Q.show({ text: X.scrollTips.fail, onlyText: !0, callback: function callback(n) {
            l(e, t);
          } }), U && U.lock(), this;
      }function v(t, n) {
        var i,
            a,
            o = [];if (t && n) for (i in se) {
          var r = e.array.filter(se[i], t, n) || [];if (r.length) for (a in r) {
            o.push(r[a]);
          }
        }return o;
      }function m(e, t) {
        var e = e || 0;A = D.find(X.children).children(X.handle);var n = D.height(),
            i = parseFloat(A.height()),
            a = R.scrollHeight,
            o = i * parseInt(e) - i;return a > n && (R.scrollTop = o, P.call(J, "to", e), t && t.call(J, parseInt(e))), this;
      }function b(e) {
        return A = D.find(X.children).children(X.handle), m(A.length, e), this;
      }function w(e) {
        var i = 0;return i = "object" === (void 0 === e ? "undefined" : t(e)) ? n(e)[0].offsetTop : "string" == typeof e && e.indexOf("#") > -1 ? n(e)[0].offsetTop : parseInt(e) || 0, R.scrollTop = i, this;
      }function y(e) {
        var t = D.parents(".bui-page"),
            n = (t.children("main"), t.find(".bui-tab-head .bui-nav")),
            i = R && R.offsetTop || 0,
            a = t.children(X.header),
            o = a.length > 1 ? a.eq(a.length - 1).height() : a.height(),
            r = t.children(X.footer),
            l = r.length > 1 ? r.eq(r.length - 1).height() : r.height(),
            c = window.viewport.height() - (o || 0) - (l || 0) - i - n.height(),
            s = e ? parseFloat(e) : c;D.height(s);
      }function x() {
        return D.off("scroll", e.unit.debounce(r, X.delayTime)), P.call(J, "lock"), this;
      }function k(t) {
        return D.on("scroll", e.unit.debounce(r, X.delayTime)), P.call(J, "unlock"), this;
      }function I() {
        return m(1), U && U.refresh(), this;
      }function T(e) {
        var e = e || re;return re = e, q && q.call(J, re, le), this;
      }function O() {
        return q && q.call(J, ++re, le), this;
      }function C() {
        return re-- > 0 && q && q.call(J, re--, le), this;
      }function j(e) {
        var t = e || { height: 0, width: 0 };return this.setHeight(t), t && t.width > 0 && D.width(t.width), this;
      }function S(e) {
        var e = 1 == e;D && (D.off("scroll"), e && D.remove()), U && U.destroy(e), Q && Q.destroy(e), B("loadpage"), B("lastpage"), B("scrolltop"), B("scrollbottom"), B("scrollend");
      }function E(t) {
        var n = { pullrefresh: U, loading: Q };return e.widget.call(n, t);
      }function L(t, n) {
        return e.option.call(J, t, n);
      }function N(t, n) {
        return e.on.apply(J, arguments), this;
      }function B(t, n) {
        return e.off.apply(J, arguments), this;
      }function P(t) {
        J.self = this == window || this == J ? null : this, e.trigger.apply(J, arguments);
      }var D,
          R,
          F,
          A,
          z,
          M,
          H,
          V,
          q,
          U,
          $ = "." + e.prefix("list"),
          W = "." + e.prefix("scroll-head"),
          _ = "." + e.prefix("scroll-main"),
          K = "." + e.prefix("scroll-foot"),
          Y = { id: "", childrenTop: W, childrenMain: _, childrenBottom: K, children: $, stopHandle: "", header: ".bui-page header", footer: ".bui-page footer", handle: "li", distance: 100, endDistance: 1, height: 0, page: 1, pageSize: 10, lastUpdated: !0, autoRefresh: !1, autoNext: !0, autoScroll: !0, refresh: !0, delayTime: 100, scrollTips: { start: "努力加载中..", end: "上拉加载更多", nodata: "没有更多内容", last: "没有更多内容", fail: "点击重新加载" }, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "点击加载", success: "刷新成功" }, autoinit: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, onScrolling: null, onBeforeRefresh: null, onRefresh: null, onBeforeLoad: null, onLoad: null },
          J = { handle: {}, on: N, off: B, reverse: d, updateCache: u, updatePage: u, getPage: s, getCache: h, clearCache: p, resize: j, fail: g, filter: v, to: m, toBottom: b, scrollTop: w, lock: x, unlock: k, refresh: I, load: T, nextPage: O, prevPage: C, setHeight: y, isRefresh: f, destroy: S, widget: E, option: L, config: X, init: a },
          X = J.config = n.extend(!0, {}, Y, e.config.scroll, i),
          Z = X.page,
          Q = null,
          G = !1,
          ee = !1,
          te = !1,
          G = !1,
          ne = !0,
          ie = !0,
          ae = !1,
          oe = !1,
          re = X.page,
          le = X.pageSize,
          ce = !1,
          se = {};X.autoinit && a(X);var ue;return J;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.list = function (n) {
      function i(n) {
        var i = t.extend(!0, C, n);i.onBeforeInit && i.onBeforeInit.call(O, i), w = e.obj(i.id), y = w.find(i.children), C = O.config = i, S = C.data;var r = 0 == C.refresh ? null : l;return I ? I.init({ id: i.id, children: i.children, handle: i.handle, page: i.page, pageSize: i.pageSize, distance: i.distance, maxDistance: i.maxDistance, height: i.height, refresh: i.refresh, autoNext: i.autoNext, autoScroll: i.autoScroll, scrollTips: i.scrollTips, refreshTips: i.refreshTips, lastUpdated: i.lastUpdated, onBeforeRefresh: i.onBeforeRefresh, onBeforeLoad: i.onBeforeLoad, onRefresh: r, onLoad: o }) : I = bui.scroll({ id: i.id, children: i.children, handle: i.handle, header: i.header, footer: i.footer, page: i.page, pageSize: i.pageSize, distance: i.distance, stopHandle: i.stopHandle, maxDistance: i.maxDistance, height: i.height, refresh: i.refresh, autoNext: i.autoNext, autoScroll: i.autoScroll, scrollTips: i.scrollTips, refreshTips: i.refreshTips, lastUpdated: i.lastUpdated, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, onBeforeRefresh: i.onBeforeRefresh, onBeforeLoad: i.onBeforeLoad, onRefresh: r, onLoad: o }), E || a(i), i.onInited && i.onInited.call(O, i), this;
      }function a(e) {
        return e.callback && w.on("click", e.handle, function (t) {
          e.callback.call(O, t);
        }), E = !0, this;
      }function o(i, a, o) {
        function r(e, t, n) {
          var i = (e - 1) * t;return i + t >= n.length ? n.slice(i, n.length) : n.slice(i, i + t);
        }function l(t, a, o) {
          var l, u, d;l = "string" == typeof t ? t && JSON.parse(t) || {} : t || {}, u = C && C.field && "" == C.field.data ? l || [] : "object" === e.typeof(l) && e.unit.getKeyValue(C.field.data, l) || [];var f = /\[.+\]$/g;if ("string" == typeof u && f.test(u)) try {
            d = JSON.parse(u);
          } catch (t) {
            d = u, e.showLog(t);
          } else d = u;u = d && "array" === e.typeof(d) ? d : [], C.localData && (u = r(i, C.pageSize, u));var h = n.template && n.template(u, l, i) || "";y && y[s](h);var p = I && I.isRefresh() || !1;b.call(c, "success", t, i, o);try {
            p ? (C.onRefresh && C.onRefresh.call(O, I, l, o), b.call(c, "refresh", t, i, o), C.refresh && I.reverse()) : (b.call(this, "onloadbefore"), C.onLoad && C.onLoad.call(O, I, l, o), b.call(c, "onload", t, i, o)), C.localData ? C.autoUpdatePage && c && c.updatePage(i, u) : C.autoUpdatePage && I && I.updatePage(i, u), k = u;
          } catch (e) {}
        }var c = this,
            s = o || C.commandLoad;return S = t.extend(!0, {}, L, C.data, S), C.field.page.length && e.unit.setKeyValue(C.field.page, i, S), C.field.size.length && e.unit.setKeyValue(C.field.size, a, S), C.page = O.config.page = i, C.data = S, C.localData ? void l(C.localData, 200) : (x = e.ajax(C).done(l).fail(function (e, t, n) {
          b.call(c, "fail", e, i, n), C.onFail && C.onFail.call(O, t, I, i, n), I && I.fail(i, a, e);
        }), this);
      }function r() {
        var e = I.getPage();return I.updatePage(e, k), this;
      }function l() {
        var e = j,
            t = C.pageSize;return b.call(this, "refreshbefore"), o(e, t, C.commandRefresh), this;
      }function c() {
        return b.call(this, "refreshbefore"), I.refresh(), this;
      }function s(n, i) {
        var a;if ("string" == typeof i) try {
          a = JSON.parse(i);
        } catch (t) {
          return void e.showLog("data 参数必须为对象", "bui.list.modifyData");
        } else a = i;return S = t.extend(!0, {}, L, a);
      }function u() {
        return y.html(""), this;
      }function d(e) {
        var e = 1 == e;w && (w.off("click.bui"), e && w.remove(), w = null), m("refreshbefore"), m("refresh"), m("success"), m("fail"), I && I.destroy(e);
      }function f(t) {
        var n = { scroll: I, ajax: x };return e.widget.call(n, t);
      }function h(t, n) {
        return "data" == t && void 0 !== n ? s(t, n) : e.option.call(O, t, n);
      }function p(e) {
        return C = O.config = t.extend(!0, {}, O.config, e), S = C.data, this;
      }function g(e) {
        return I.resize(e), this;
      }function v(t, n) {
        return e.on.apply(O, arguments), this;
      }function m(t, n) {
        return e.off.apply(O, arguments), this;
      }function b(t) {
        O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments);
      }var w,
          y,
          x,
          k,
          I,
          T = { id: "", url: "", data: {}, method: "GET", dataType: "json", headers: {}, contentType: "", timeout: 2e4, field: { page: "page", size: "pageSize", data: "" }, scrollTips: { start: "努力加载中..", end: "上拉加载更多", nodata: "没有更多内容", last: "没有更多内容", fail: "点击重新加载" }, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "点击加载", success: "刷新成功" }, lastUpdated: !1, page: 1, pageSize: 10, autoNext: !0, autoUpdatePage: !0, autoScroll: !0, autoinit: !0, native: !0, needNative: !1, refresh: !0, stopHandle: "", children: ".bui-list", handle: ".bui-btn", header: ".bui-page header", footer: ".bui-page footer", height: 0, commandRefresh: "html", commandLoad: "append", localData: null, template: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, onBeforeRefresh: null, onRefresh: null, onLoad: null, onFail: null, callback: null },
          O = { handle: {}, on: v, off: m, empty: u, updatePage: r, refresh: c, resize: g, modify: p, destroy: d, widget: f, option: h, config: C, init: i },
          C = O.config = t.extend(!0, {}, T, e.config.list, n),
          j = C.page,
          S = {},
          E = !1,
          L = C.data;return C.autoinit && i(C), O;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.searchbar = function (n) {
      function i(n) {
        var i = t.extend(!0, w, n);return i.onBeforeInit && i.onBeforeInit.call(b, i), h = e.obj(i.id), w = b.config = i, g = h.find("input"), h.find(i.handleRemove).length > 0 || g.after('<i class="' + i.handleRemove.substr(1) + '"></i>'), v = h.find(i.handleRemove), v.hide(), y || a(i), i.onInited && i.onInited.call(b, i), this;
      }function a(n) {
        return h.on("click.bui", n.handle, function (e) {
          document.activeElement.blur();var t = g.val();p = t, f.call(b, "search", e, t), n.callback && n.callback.call(b, e, t);
        }), h.on("click.bui", n.handleRemove, function (e) {
          document.activeElement.blur(), g.val("");var i = g.val();p = i, t(this).hide(), f.call(b, "remove", e, i), n.onRemove && n.onRemove.call(b, e, i);
        }), h.on("input", "input", e.unit.debounce(function (e) {
          var t = g.val();p = t, t ? v.show() : v.hide(), f.call(b, "input", e, t), n.onInput && n.onInput.call(b, e, t);
        }, n.delayTime)), y = !0, this;
      }function o(e) {
        var t = e || p;return p = t, f.call(this, "search", {}, t), w.callback && w.callback.call(this, {}, t), this;
      }function r() {
        return p;
      }function l(e) {
        var e = 1 == e;h && (h.off(), e && h.remove()), d("search"), d("remove"), d("input");
      }function c(t) {
        var n = {};return e.widget.call(n, t);
      }function s(t, n) {
        return e.option.call(b, t, n);
      }function u(t, n) {
        return e.on.apply(b, arguments), this;
      }function d(t, n) {
        return e.off.apply(b, arguments), this;
      }function f(t) {
        b.self = this == window || this == b ? null : this, e.trigger.apply(b, arguments);
      }var h,
          p,
          g,
          v,
          m = { id: "", handle: ".icon-search,.btn-search", handleRemove: ".icon-removefill", delayTime: 400, onInput: null, onRemove: null, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
          b = { handle: {}, on: u, off: d, search: o, value: r, destroy: l, widget: c, option: s, config: w, init: i },
          w = b.config = t.extend(!0, {}, m, e.config.searchbar, n),
          y = !1;return w.autoinit && i(w), b;
    };
  }(bui || {}, libs), function (e, n) {
    e.select = function (i) {
      function a(t) {
        var i = n.extend(!0, q, t);if (i.onBeforeInit && i.onBeforeInit.call(V, i), i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), X = [], Z = [], Q = [], U = i.id ? e.obj(i.id).attr("id") : U, q = V.config = i, J = "function" == typeof i.template ? i.template : u, i.data && i.data.length || G) var a = J.call(this, i.data);if (i.popup) {
          if (M) R.find(".bui-dialog-main").html(a);else {
            if (i.id) R = e.obj(i.id);else {
              var r = c();n(i.appendTo).append(r), R = e.obj(U), R.find(".bui-dialog-main").html(a);
            }M = e.dialog({ id: U, effect: i.effect, mask: i.mask, position: i.position, autoClose: !1, height: i.height, width: i.width, zoom: !1, fullscreen: i.fullscreen, onMask: function onMask(e) {
                h();
              } });
          }
        } else {
          if (!i.id) return void e.hint("select id 必须有");R = e.obj(i.id), i.data && i.data.length && R.html(a);
        }return z = R.find(i.handle), i.data && i.data.length < 1 && o(), G || l(i), i.value && g(i.value), i.onInited && i.onInited.call(V, i), this;
      }function o() {
        var e = [],
            t = [];return z.find("input").each(function (i, a) {
          var o = n(this);if (!(o.length < 1)) {
            var l = o.val(),
                c = o.attr("text"),
                s = o.attr("image"),
                u = o.attr("icon"),
                d = o.is(":checked");q.data[i] = {}, q.data[i][W] = c, q.data[i][_] = l, q.data[i][K] = s, q.data[i][Y] = u, e.push(l), t.push(c), d && r({ name: c, value: l, index: i });
          }
        }), { value: e, text: t };
      }function r(e) {
        var t = parseInt(e.index, 10);switch (q.type) {case "radio":case "select":
            X = [], Z = [], Q = [], X.push(e.name), Z.push(e.value), Q.push(t);break;case "checkbox":
            X.push(e.name), Z.push(e.value), Q.push(t);}
      }function l(t) {
        t.trigger && (D = e.obj(t.trigger), A = D.find(t.triggerChildren).length ? D.find(t.triggerChildren) : D, F = t.placeholder || n.trim(A.html() || ""), t.placeholder && A.html(t.placeholder), D.on("click.bui", function (e) {
          var i = t.onBeforeOpen && t.onBeforeOpen.call(V);n(this).hasClass("disabled") || 0 == i || d();
        }));var i = function i(_i) {
          var a = n(_i.target[_i.target.length - 1]);if (!a.attr("disabled")) {
            var o = a.val(),
                l = a.attr("text"),
                c = a.attr("index"),
                s = "INPUT" !== _i.srcElement.nodeName ? a.is(":checked") : !a.is(":checked");_i.target = a[0], _i.index = c, s ? s && (t.toggle || "checkbox" == t.type) && (P.call(V, "uncheck", _i), e.array.remove(X, l), e.array.remove(Z, o), e.array.remove(Q, c), t.onChange && t.onChange.call(V, _i)) : (P.call(V, "check", _i), r({ name: l, value: o, index: c }), t.onChange && t.onChange.call(V, _i)), g(Z.join(",") || "", _i), m(X.join(",") || "");
          }
        },
            a = function a(e) {
          var a = null;e.srcElement = e.originalEvent && e.originalEvent.srcElement || e.srcElement, a = n(this).find("input"), e.target = [a[0]], i.call(V, e), t.popup && t.autoClose && h(), P.call(V, "select", e), e.stopPropagation();
        };R.on("click", t.handle, a);var o = function o(e) {
          t.callback && t.callback.call(V, e, V), e.stopPropagation();
        };R.on("click.bui", t.callbackHandle, o), G = !0;
      }function c(e) {
        var t = "";return q.popup && (t += '<div id="' + U + '" class="bui-dialog bui-dialog-select">', q.title && (t += '<div class="bui-dialog-head">' + q.title + "</div>"), t += '  <div class="bui-dialog-main">'), q.popup && (t += "  </div>", q.buttons.length > 0 && (t += '    <div class="bui-dialog-foot bui-box">', n.each(q.buttons, function (e, n) {
          t += '        <div class="span1">', t += '             <div class="bui-btn ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || n) + "</div>", t += "        </div>";
        }), t += "    </div>"), t += "</div>"), t;
      }function s(e) {
        var e = e || {},
            t = document.createElement("input");for (var n in e) {
          "string" != typeof e[n] && "number" != typeof e[n] || t.setAttribute(n, e[n]);
        }switch (q.type) {case "mulelect":
            t.setAttribute("type", "checkbox"), t.setAttribute("class", q.className || "bui-choose");break;case "select":
            t.setAttribute("type", "radio"), t.setAttribute("class", q.className || "bui-choose");break;case "radio":
            t.setAttribute("type", "radio"), t.setAttribute("class", q.className || "bui-radio");break;case "checkbox":
            t.setAttribute("type", "checkbox"), t.setAttribute("class", q.className || "bui-choose");break;default:
            t.setAttribute("type", "checkbox");}return t;
      }function u(t) {
        var i = $,
            a = "",
            o = "";return n.each(t, function (t, a) {
          var r = "string" == typeof a ? a : a[W] || a || "",
              l = a && a[K] ? a[K] || a : "",
              c = a && a[Y] ? a[Y] || a : "",
              u = a && a[_] ? a[_] || a : a || r || t,
              d = t,
              f = { name: i, value: u, text: r, index: d };l && (f.image = l), c && (f.icon = c), a = a && "object" === e.typeof(a) ? a : {};var h = n.extend(!0, {}, a, f),
              p = s(h).outerHTML;if (o += '    <div class="bui-btn bui-box bui-btn-line">', "left" == q.direction && (o += p), l) {
            var g = e.unit.endWithImage(l) ? '<div class="thumbnail"><img src="' + l + '" alt="" /></div>' : '<div class="thumbnail ' + l + '"></div>';o += g;
          }if (c) {
            var v = e.unit.endWithImage(c) ? '<i class="icon"><img src="' + c + '" alt="" /></i>' : '<i class="icon ' + c + '"></i>';o += v;
          }"center" == q.direction ? (o += '        <div class="span1" align="center">' + r + "</div>", o += p) : o += '        <div class="span1">' + r + "</div>", "right" == q.direction && (o += p), o += "    </div>";
        }), a += '    <div class="bui-list bui-list-select">', a += o, a += "    </div>";
      }function d(e) {
        P.call(this, "beforeshow");var n = {};return "function" == typeof e ? n.callback = function () {
          e && e.call(V), P.call(V, "show");
        } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), q.popup && M ? (!M.isOpen() && M.open(n), P.call(V, "show")) : (R.css("display", "block"), n.callback ? n.callback() : P.call(V, "show")), this;
      }function f() {
        return R.html(""), q.data = [], this;
      }function h(e) {
        P.call(this, "beforehide");var n = {};return "function" == typeof e ? n.callback = function () {
          e && e.call(V), P.call(V, "hide");
        } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), q.popup && M ? M.isOpen() && M.close(n) : (R.css("display", "none"), n.callback ? n.callback() : P.call(V, "hide")), this;
      }function p() {
        return Q.join(",");
      }function g(t, n) {
        if (void 0 === t) return Z.join(",");z = R.find(q.handle);var i = [],
            a = [],
            o = [],
            r = [],
            l = [];"string" == typeof t && t.indexOf(",") > -1 ? l = t.split(",") : t instanceof Array ? l = t : t && l.push(t), q.data && q.data.forEach(function (t, n) {
          var c = t && "object" === e.typeof(t) && t.hasOwnProperty(W) ? String(t[W]) : String(t),
              s = t && "object" === e.typeof(t) && t.hasOwnProperty(_) ? String(t[_]) : String(t) || String(n),
              u = z.eq(n).find("input");if ("" == t) return u.prop("checked", !1), X = [], Z = [], void (Q = []);var d = e.array.index(l, c);e.array.index(l, s) > -1 || d > -1 ? ("radio" != q.type && "select" != q.type || (a = [], o = [], r = []), a.push(c), o.push(s), r.push(n), i[n] = u, u.prop("checked", !0)) : u.prop("checked", !1);
        }), X = a.slice(0), Z = o.slice(0), Q = r.slice(0);var c = n || { target: i[i.length - 1], index: Q };P.call(V, "change", c), D && q.change && (D.attr("value", o.join(",")), A.text(X.join(","))), R.attr("value", o.join(","));
      }function v() {
        var e = [];return Z.forEach(function (t, n) {
          e.push({ value: t, name: X[n], index: Q[n] });
        }), e;
      }function m(e) {
        return void 0 === e ? X.join(",") : (D && q.change && (D.attr("text", e), A.html(e || F)), R.attr("text", e), this);
      }function b(e) {
        var t = [];return String(e).indexOf(",") > -1 ? t = e.split(",") : t.push(parseInt(e)), X = [], Z = [], t.forEach(function (e, t) {
          q.data[e] && X.push(q.data[e][W] || q.data[e]), q.data[e] && Z.push(q.data[e][_] || t);
        }), "checkbox" == q.type || "mulselect" == q.type ? (m(X.join(",")), g(Z.join(","))) : (m(X[0]), g(Z[0])), this;
      }function w(t) {
        var n = [];return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(parseInt(t)), n.forEach(function (t, n) {
          var i = z.eq(t).find("input"),
              a = i.val(),
              o = i.attr("text");e.array.delete(X, o), e.array.delete(Z, a), i.prop("checked", null);
        }), this;
      }function y() {
        if ("checkbox" == q.type) {
          b(q.data.map(function (e, t) {
            return t;
          }).join(","));
        } else b(0);return this;
      }function x() {
        return X = [], Z = [], z.find("input").prop("checked", null), g(""), m(""), P.call(this, "reset"), this;
      }function k() {
        if ("checkbox" == q.type) {
          var t = X.map(function (e, t) {
            return e;
          });Z.map(function (e, t) {
            return e;
          });X = [], Z = [], q.data && q.data.forEach(function (n, i) {
            var a = z.eq(i).find("input");e.array.index(t, n[W]) > -1 ? a.prop("checked", null) : (a.prop("checked", !0), X.push(n[W]), Z.push(n[_]));
          }), g(Z.join(",") || ""), m(X.join(",") || "");
        } else x();return this;
      }function I(t) {
        var n = [];return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(t), n.forEach(function (t, n) {
          var i = null;q.data.forEach(function (n, a) {
            var o = n[W] || n,
                r = n[_] || n;t != r && t != o || (i = z.eq(a).find("input"), i.prop("checked", null), e.array.remove(X, o), e.array.remove(Z, r));
          });
        }), this;
      }function T() {
        var e = D;return e && e.addClass("disabled"), this;
      }function O() {
        var e = D;return e && e.removeClass("disabled"), this;
      }function C(e) {
        if (void 0 === e) z.find("input").attr("disabled", !0);else {
          if ("number" != typeof e) return void console.log("index 必须为数字");z.eq(e).find("input").attr("disabled", !0);
        }return this;
      }function j(e) {
        if (void 0 === e) z.find("input").removeAttr("disabled");else {
          if ("number" != typeof e) return void console.log("index 必须为数字");z.eq(e).find("input").removeAttr("disabled");
        }return this;
      }function S(e) {
        var e = 1 == e;return R && (R.off(), e && R.remove()), D && (D.off("click.bui"), e && D.remove()), M && M.destroy(e), B("show"), B("hide"), B("change"), B("select"), B("check"), B("uncheck"), this;
      }function E(t) {
        var n = { dialog: M || {} };return e.widget.call(n, t);
      }function L(t, n) {
        return e.option.call(V, t, n);
      }function N(t, n) {
        return e.on.apply(V, arguments), this;
      }function B(t, n) {
        return e.off.apply(V, arguments), this;
      }function P(t) {
        V.self = this == window || this == V ? null : this, e.trigger.apply(V, arguments);
      }var D,
          R,
          F,
          A,
          z,
          M,
          H = { id: "", trigger: "", triggerChildren: ".span1", handle: ".bui-list .bui-btn", className: "", name: "", appendTo: "", data: [], popup: !0, title: "", autoClose: !1, placeholder: "", field: { name: "name", value: "value", image: "image", icon: "icon" }, height: 0, width: 0, mask: !0, change: !0, toggle: !1, effect: "fadeInUp", type: "select", direction: "left", position: "bottom", fullscreen: !1, value: "", buttons: [], onChange: null, autoinit: !0, onBeforeOpen: null, onBeforeInit: null, template: null, onInited: null, callbackHandle: ".bui-dialog-foot .bui-btn", callback: null },
          V = { handle: {}, on: N, off: B, value: g, values: v, index: p, active: b, unactive: w, disabled: T, enabled: O, disabledSelect: C, enabledSelect: j, template: J, empty: f, text: m, show: d, hide: h, selectAll: y, selectNone: x, unselect: k, unselected: I, destroy: S, widget: E, option: L, config: q, init: a },
          q = V.config = n.extend(!0, {}, H, e.config.select, i),
          U = e.guid(),
          $ = q.name || e.guid(),
          W = q.field.name,
          _ = q.field.value,
          K = q.field.image,
          Y = q.field.icon,
          J = null,
          X = [],
          Z = [],
          Q = [],
          G = !1;return q.autoinit && a(q), V;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.dropdown = function (n) {
      function i(n) {
        var i = t.extend(!0, N, n);if (i.onBeforeInit && i.onBeforeInit.call(L, i), !i.id) return void e.showLog("dropdown id不能为空", "bui.dropdown.init");if (I = e.obj(i.id), N = L.config = i, T = I.children(i.handle), S = i.target ? I.find(i.target) : T.next(), D = T.text(), i.data && i.data.length) {
          var l = "function" == typeof i.template ? i.template.call(L, i.data) : p(i.data);S.length ? S.remove() && T.after(l) : I.append(l), S = I.find(i.target);
        }C = i.relative, O = I.attr("position") || i.position;var c = I[0] && I[0].offsetLeft >= document.documentElement.clientWidth ? 0 : I[0] && I[0].offsetLeft,
            u = i.width ? "auto" : -c + "px",
            d = { bottom: { menuPosition: "bui-menu-bottom", arrowPosition: "bui-arrow-up", left: u }, top: { menuPosition: "bui-menu-top", arrowPosition: "bui-arrow-down", left: u }, left: { menuPosition: "bui-menu-left", arrowPosition: "bui-arrow-right", left: "auto" }, right: { menuPosition: "bui-menu-right", arrowPosition: "bui-arrow-left", left: "100%" } };if (j = i.width > 0 ? i.width : C ? B : i.width, parseFloat(j) > 0 && S.width(j), o(i.showArrow ? d[O].arrowPosition + " " + d[O].menuPosition : d[O].menuPosition, d[O].left), i.value) r(i.value);else {
          var f = S.find(i.targetHandle + ".active").eq(0),
              h = f.index();h > -1 && s(h);
        }return P || a(i), i.onInited && i.onInited.call(L, i), this;
      }function a(e) {
        var n = function n(_n) {
          if (!t(this).hasClass("disabled")) {
            var i = t(this).hasClass("active"),
                a = e.target ? t(this).parent().find(e.target) : t(this).next();h(), i ? (t(this).removeClass("active"), a.css("display", "none"), k.call(L, "hide")) : (t(this).addClass("active"), a.css("display", "block"), k.call(L, "show")), _n.stopPropagation();
          }
        },
            i = function i(n) {
          var i = t(this),
              a = i.parent(),
              o = i.attr("value") || "";t.trim(i.text()), void 0 != a.attr("change") ? a.attr("change") : e.change;e.showActive && i.addClass("active").siblings().removeClass("active"), r.call(this, o), N.autoClose && d(), n.target = this, e.callback && e.callback.call(L, n), N.stopPropagation && n.stopPropagation();
        };T.on("click.bui", n), I.on("click.bui", e.targetHandle, i);var a = function a(e) {
          h(), e.stopPropagation();
        };N.autoClose && t("body").off("click.bui").on("click.bui", ":not(.bui-dropdown)", a), P = !0;
      }function o(e, t) {
        S.addClass(e), C && S.css({ left: t });
      }function r(n) {
        if (void 0 === n) {
          return R || T.attr("value");
        }var i = "htmllielement" === e.typeof(this),
            a = i && t(this).parent(),
            o = i ? t(this).parents(".bui-dropdown").children(N.handle) : T,
            r = i ? a.find(N.targetHandle) : S.find(N.targetHandle);if (r.removeClass("active"), N.data && N.data.length) {
          if ("" == n) return R = "", void o.attr("value", n);var l = e.array.index(N.data, n, "value"),
              c = e.array.index(N.data, n, "name");l > -1 && (r.eq(l).addClass("active"), o.attr("value", n), N.change && u.call(this, N.data[l].name), R = n), c > -1 && (r.eq(c).addClass("active"), o.attr("value", N.data[c].value), N.change && u.call(this, n), R = N.data[c].value);
        } else r.each(function (e, i) {
          var a = i.innerText,
              r = i.getAttribute("value");a != n && r != n || (t(this).addClass("active"), o.attr("value", r), N.change && u.call(this, a), R = r);
        });N.change || k.call(this, "change");
      }function l() {
        return { name: F, value: R };
      }function c() {
        return R = "", r(""), u(D), d(), this;
      }function s(e) {
        e = parseInt(e);var n = S.find(N.targetHandle).eq(e);if (n.length >= 0) {
          r(n.attr("value") || t.trim(n.text()) || ""), N.showActive && n.addClass("active").siblings().removeClass("active");
        }return this;
      }function u(n) {
        if (void 0 === n) {
          return F || t.trim(T.text());
        }var i = "htmllielement" === e.typeof(this),
            a = i ? t(this).parents(".bui-dropdown").children(N.handle) : T,
            o = a.children(N.handleChildren);return o.length ? o.text(n) : a.text(n), F = n, k.call(this, "change"), this;
      }function d() {
        return T.removeClass("active"), S.css("display", "none"), k.call(this, "hide"), this;
      }function f() {
        return T.addClass("active"), S.css("display", "block"), k.call(this, "show"), this;
      }function h() {
        return t(".bui-dropdown > .bui-btn").removeClass("active"), t(".bui-dropdown > .bui-list").css("display", "none"), k.call(this, "hide"), this;
      }function p(e) {
        var t = "";return t += '<ul class="bui-list">', e.map(function (e, n) {
          t += '<li class="bui-btn" value="' + e.value + '">' + e.name + "</li>";
        }), t += "</ul>";
      }function g() {
        var e = T;return e && e.addClass("disabled"), this;
      }function v() {
        var e = T;return e && e.removeClass("disabled"), this;
      }function m(e) {
        var e = 1 == e;I && (I.off("click.bui"), e && I.remove()), T && (T.off("click.bui"), e && T.remove()), t("body").off("click.bui"), x("show"), x("hide");
      }function b(t) {
        var n = {};return e.widget.call(n, t);
      }function w(t, n) {
        return e.option.call(L, t, n);
      }function y(t, n) {
        return e.on.apply(L, arguments), this;
      }function x(t, n) {
        return e.off.apply(L, arguments), this;
      }function k(t) {
        L.self = this == window || this == L ? null : this, e.trigger.apply(L, arguments);
      }var I,
          T,
          O,
          C,
          j,
          S,
          E = { id: "", handle: ".bui-btn", handleChildren: ".span1", target: ".bui-list", targetHandle: ".bui-btn", data: null, position: "bottom", showArrow: !1, showActive: !0, autoClose: !0, stopPropagation: !1, width: 0, value: "", relative: !0, change: !0, autoinit: !0, template: null, onBeforeInit: null, onInited: null, callback: null },
          L = { handle: {}, on: y, off: x, active: s, disabled: g, enabled: v, value: r, values: l, reset: c, text: u, hide: d, show: f, hideAll: h, destroy: m, widget: b, option: w, config: N, init: i },
          N = L.config = t.extend(!0, {}, E, e.config.dropdown, n),
          B = document.documentElement.clientWidth,
          P = !1,
          D = "",
          R = "",
          F = "";return N.autoinit && i(N), L;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.accordion = function (n) {
      function i(n) {
        var i = t.extend(!0, j, n);return i.onBeforeInit && i.onBeforeInit.call(C, i), x = document.documentElement.clientWidth, k = document.documentElement.clientHeight, S = e.obj(i.id) || e.obj("." + e.prefix("accordion")), j = C.config = i, I = i.handle.indexOf("#") > -1 ? e.obj(i.handle) : S.children(i.handle), T = i.target.indexOf("#") > -1 ? e.obj(i.target) : S.children(i.target), a(i), E || o(i), i.onInited && i.onInited.call(C, i), this;
      }function a(e) {
        I.removeClass("active"), T.css("display", "none"), parseFloat(e.targetHeight) > 0 && T.height(e.targetHeight), parseFloat(e.height) > 0 && S.height(e.height);
      }function o(e) {
        var n = function n(_n2) {
          t(this).hasClass("disabled") || t(this).attr("href") || (c.call(this, _n2, e), e.callback && e.callback.call(C, _n2), !t(this).attr("href") && _n2.stopPropagation());
        };e.handle.indexOf("#") > -1 ? I.on("click.bui", n) : S.off("click.bui").on("click.bui", e.handle, n), E = !0;
      }function r(e) {
        var t;return t = "number" == typeof e ? I.eq(e) : I, t && t.addClass("disabled"), this;
      }function l(e) {
        var t;return t = "number" == typeof e ? I.eq(e) : I, t && t.removeClass("disabled"), this;
      }function c(n, i) {
        var a = t(this),
            o = a.hasClass("active"),
            r = (I.index(this), i.target.indexOf("#") > -1 ? e.obj(i.target) : a.next(i.target));i.single ? o ? (a.removeClass("active"), r.css("display", "none"), y.call(C, "hide", n)) : (p(), a.addClass("active"), r.css("display", "block"), y.call(C, "show", n)) : o ? (a.removeClass("active"), r.css("display", "none"), y.call(C, "hide", n)) : (a.addClass("active"), r.css("display", "block"), y.call(C, "show", n));
      }function s(e) {
        var e = Number(e) || 0,
            t = I.eq(e).length ? I.eq(e) : I,
            n = T.eq(e).length ? T.eq(e) : t.next(j.target);return t.addClass("active"), n.css("display", "block"), y.call(this, "show", { target: I[e] }), this;
      }function u(e) {
        var e = Number(e) || 0,
            t = I.eq(e).length ? I.eq(e) : I,
            n = T.eq(e).length ? T.eq(e) : t.next(j.target);return t.removeClass("active"), n.css("display", "none"), y.call(this, "hide", { target: I[e] }), this;
      }function d() {
        return S.length > 1 ? S.each(function (e, t) {
          f(0, t);
        }) : f(0), y.call(this, "show", { target: I[0] }), this;
      }function f(e, n) {
        var e = e || 0;(n ? t(n) : S).children(j.handle).eq(e).addClass("active").next(j.target).css("display", "block");
      }function h() {
        return I.each(function (e, n) {
          t(n).addClass("active").next(j.target).css("display", "block");
        }), y.call(this, "showall", { target: I }), this;
      }function p() {
        return I.each(function (e, n) {
          t(n).removeClass("active").next(j.target).css("display", "none");
        }), y.call(this, "hideall", { target: I }), this;
      }function g(e) {
        S && (S.off("click.bui"), S.remove(), S = null), w("hide"), w("show");
      }function v(t) {
        var n = {};return e.widget.call(n, t);
      }function m(t, n) {
        return e.option.call(C, t, n);
      }function b(t, n) {
        return e.on.apply(C, arguments), this;
      }function w(t, n) {
        return e.off.apply(C, arguments), this;
      }function y(t) {
        C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments);
      }var x,
          k,
          I,
          T,
          O = { id: "", handle: "dt", target: "dd", height: 0, targetHeight: 0, single: !1, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
          C = { handle: {}, on: b, off: w, showFirst: d, showAll: h, hideAll: p, disabled: r, enabled: l, destroy: g, show: s, hide: u, widget: v, option: m, config: j, init: i },
          j = C.config = t.extend(!0, {}, O, e.config.accordion, n),
          S = null,
          E = !1;return j.autoinit && i(j), C;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.rating = function (n) {
      function i(n) {
        var i = t.extend(!0, C, n);return i.onBeforeInit && i.onBeforeInit.call(O, i), i.id ? (w = e.obj(i.id), C = O.config = i, y = i.fullClassName, x = i.halfClassName, l(i), j || r(i), i.onInited && i.onInited.call(O, i), this) : void e.hint("rating id不能为空");
      }function a(t) {
        var n = (e.guid(), ""),
            i = 0,
            a = t.stars;for (i = 0; i < a; i++) {
          n += '<div class="bui-rating-cell" ></div>';
        }return n;
      }function o(e) {
        var t,
            n = "",
            e = String(e) || String(k),
            i = 0,
            a = C.stars,
            o = [];o = e.indexOf(".") > -1 ? e.split(".") : [e, 0];var r = parseInt(o[0]);for (t = o[1] / 10 * 100 + "%", i = 0; i < a; i++) {
          i < r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:100%;">&nbsp;</div></div>'), i == r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:' + t + ';">&nbsp;</div></div>'), i > r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:0;">&nbsp;</div></div>');
        }return n;
      }function r(e) {
        if (!e.disabled) {
          var n = String(e.value).indexOf(".") > -1 ? 1 : 0;w.on("click.bui", e.handle, function (i) {
            var a = t(this).index(),
                o = 0;if (e.half) {
              o = n % 2 == 0 ? a + .5 : a + 1;
            } else o = a + 1;c(o), s(o), n++, e.callback && e.callback.call(O, i), i.stopPropagation();
          });
        }j = !0;
      }function l(e) {
        if (e.render) {
          var t = a(e);w.html(t), I = w.children(e.handle);
        } else I = w.children(e.handle);s(e.value);
      }function c(e) {
        var n = [];e = String(e), C.half && e.indexOf(".") > -1 ? n = e.split(".") : n.push(e), I.removeClass(y).removeClass(x), I.each(function (e, i) {
          1 == n.length && e < n[0] ? t(i).addClass(y) : 2 == n.length && (e < n[0] && t(i).addClass(y), e == n[0] && t(i).addClass(x));
        });
      }function s(e) {
        return e ? (w.attr("value", e), c(e), k = e, b.call(O, "change", e)) : k = w.attr("value"), k;
      }function u(e) {
        var t = o(e);w.attr("value", e).html(t), k = e;
      }function d(e) {
        var e = 0 != e;return e ? (w.off("click.bui", C.handle), b.call(O, "disabled")) : f(), this;
      }function f(e) {
        return C.disabled = !1, r(), b.call(O, "undisabled"), this;
      }function h(e) {
        var e = 1 == e;w && (w.off("click.bui"), e && w.remove()), m("change");
      }function p(t) {
        var n = {};return e.widget.call(n, t);
      }function g(t, n) {
        return e.option.call(O, t, n);
      }function v(t, n) {
        return e.on.apply(O, arguments), this;
      }function m(t, n) {
        return e.off.apply(O, arguments), this;
      }function b(t) {
        O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments);
      }var w,
          y,
          x,
          k,
          I,
          T = { id: "", handle: ".bui-rating-cell", fullClassName: "bui-rating-cell-full", halfClassName: "bui-rating-cell-half", half: !1, stars: 5, value: 0, disabled: !1, render: !0, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
          O = { handle: {}, on: v, off: m, disabled: d, show: u, value: s, destroy: h, widget: p, option: g, config: C, init: i },
          C = O.config = t.extend(!0, {}, T, e.config.rating, n),
          j = !1;return C.autoinit && i(C), O;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.actionsheet = function (i) {
      function a(t) {
        var i = n.extend(!0, C, t);i.onBeforeInit && i.onBeforeInit.call(O, i), x = e.obj(i.trigger), C = O.config = i, C.id = k = e.guid();var a = "function" == typeof i.template ? i.template.call(O, i.data || i.buttons) : r(i.data || i.buttons);return e.obj(i.appendTo).append(a), w || (w = e.dialog({ id: C.id, position: i.position, mask: i.mask, effect: i.effect, opacity: i.opacity, onBeforeOpen: i.onBeforeOpen, onBeforeClose: i.onBeforeClose, onMask: function onMask() {
            c(), i.onMask && i.onMask();
          } })), I = w.$el(), y = I.find(i.handle), j || o(), i.onInited && i.onInited.call(O, i), this;
      }function o() {
        var e = function e(_e2) {
          _e2.target = this, C.callback && C.callback.call(O, _e2, O), b.call(O, "click", _e2);
        },
            t = function t(e) {
          n(this).hasClass("disabled") || s.call(this);
        };I && I.on("click.bui", C.handle, e), x && x.on("click.bui", t), j = !0;
      }function r(e) {
        var t = parseFloat(C.width),
            n = t > 0 ? "width:" + t + "px;left:50%;right:0;margin-left:-" + t / 2 + "px;" : "",
            i = "";return e && e.length && (i += '<div id="' + C.id + '" class="bui-actionsheet" style="' + n + '">', i += '    <ul class="bui-list">', i += l(e), i += "    </ul>", C.cancelText && (i += '    <div class="bui-btn" value="cancel">' + C.cancelText + "</div>"), i += "</div>"), i;
      }function l(e) {
        var t = "";return n.each(e, function (e, n) {
          t += '        <li class="bui-btn ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || "") + "</li>";
        }), t;
      }function c(e) {
        b.call(this, "beforehide");var n = {};return "function" == typeof e ? n.callback = function () {
          e && e.call(O), b.call(O, "hide");
        } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), w.isOpen() && w.close(n), this;
      }function s(e) {
        b.call(this, "beforeshow");var n = {};return "function" == typeof e ? n.callback = function () {
          e && e.call(O), b.call(O, "show");
        } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), !w.isOpen() && w.open(n), this;
      }function u(e) {
        var t = x;return t && t.addClass("disabled"), this;
      }function d() {
        var e = x;return e && e.removeClass("disabled"), this;
      }function f(e) {
        var e = 1 == e;x && x.off("click.bui"), m("hide"), m("show"), w && w.destroy(e);
      }function h(t) {
        var n = { dialog: w };return e.widget.call(n, t);
      }function p(t, n) {
        return "buttons" == t && void 0 !== n ? g(t, n) : e.option.call(O, t, n);
      }function g(t, n) {
        if (n && "array" === e.typeof(n)) {
          var i = l(n);e.obj(C.id).find(".bui-list").html(i);
        }
      }function v(t, n) {
        return e.on.apply(O, arguments), this;
      }function m(t, n) {
        return e.off.apply(O, arguments), this;
      }function b(t) {
        O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments);
      }var w,
          y,
          x,
          k,
          I,
          T = { id: "", appendTo: ".bui-page", trigger: "", handle: ".bui-btn", position: "bottom", effect: "fadeInUp", width: 0, mask: !0, opacity: .6, data: null, buttons: [], template: null, cancelText: "取消", autoinit: !0, onMask: null, onBeforeOpen: null, onBeforeClose: null, onBeforeInit: null, onInited: null, callback: null },
          O = { handle: {}, on: v, off: m, disabled: u, enabled: d, hide: c, show: s, destroy: f, widget: h, option: p, config: C, init: a },
          C = O.config = n.extend(!1, {}, T, e.config.actionsheet, i),
          j = !1;return C.autoinit && a(C), O;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.number = function (i) {
      function a(i) {
        var a = n.extend(!0, P, i);return a.onBeforeInit && a.onBeforeInit.call(B, a), R = !1, T = a.max, O = a.min, C = a.step, F = e.obj(a.parentId), L = "object" === t(a.id) ? e.obj(a.id) : F.find(a.id), P = B.config = a, a.render && r(a), j = L.children(a.prev), S = L.children(a.next), E = L.children(a.input), D || c(a), a.disabled && E.attr("disabled", "disabled"), u(a.value), a.target = E, a.value = a.value, a.onInited && a.onInited.call(B, a), a.inited && a.inited.call(B, a), this;
      }function o(e) {
        var t = "";return t += '    <div class="bui-number-prev"><i class="icon-minus"></i></div>', t += '    <input type="text" name="' + e.name + '" value="' + e.value + '"/>', t += '    <div class="bui-number-next"><i class="icon-plus"></i></div>';
      }function r(e) {
        var t = o(e);return L.html(t), this;
      }function l(t) {
        return e.selector.call(L, t);
      }function c(t) {
        var i = ".bui-number " + t.input,
            a = ".bui-number " + t.prev,
            o = ".bui-number " + t.next;return t.onInput && F.off("input", i).on("input", i, e.unit.debounce(function (e) {
          var i = n(this).val();e.value = i, t.onInput && t.onInput.call(B, e), e.stopPropagation();
        }, 400)), F.off("change", i).on("change", i, function (e) {
          var i = t.autocheck && isNaN(parseInt(n(this).val(), 10)) ? 0 : parseInt(n(this).val(), 10);/^[0-9]*$/i.test(i) && u.call(this, i), e.value = i, t.onChange && t.onChange.call(B, e), e.stopPropagation();
        }), F.off("click.bui", a).on("click.bui", a, function (e) {
          var i = n(this).next(P.input);e.value = i.val(), v.call(i, e), t.callback && t.callback.call(B, e), e.preventDefault(), e.stopPropagation();
        }), F.off("click.bui", o).on("click.bui", o, function (e) {
          var i = n(this).prev(P.input);e.value = i.val(), m.call(i, e), t.callback && t.callback.call(B, e), e.preventDefault(), e.stopPropagation();
        }), D = !0, this;
      }function s() {
        g();var e = this == B ? E : n(this);return parseInt(e.val(), 10);
      }function u(e) {
        g();var t = this == B ? E : n(this);return Array.prototype.slice.call(t).forEach(function (t, n) {
          var i = t.getAttribute("max") || t.parentElement.getAttribute("data-max") || P.max,
              a = t.getAttribute("min") || t.parentElement.getAttribute("data-min") || P.min,
              o = P.autocheck ? d(e, a, i) : e;t.value = o;I.call(B, "change", { target: t, value: e }), P.onChange && P.onChange.call(B, { target: t, value: e });
        }), this;
      }function d(e, t, n) {
        var i = e || 0;return i > n && (i = n), i < t && (i = t), i && i >= t && i <= n && (i = i), i;
      }function f(e) {
        var t = 0;return e ? (u.call(this, e), t = e) : t = s.call(this), t;
      }function h(t) {
        if (L.length < 1 && (L = F.find(P.id)), t && "array" === e.typeof(t)) return Array.prototype.slice.call(L).forEach(function (e, n) {
          (e.id || e.getAttribute("name") || "") == t[n].id && (e.querySelector("input").value = t[n].value);
        }), this;var n = [];return Array.prototype.slice.call(L).forEach(function (e, t) {
          var i = e.id || e.getAttribute("name") || "",
              a = parseInt(e.querySelector("input").value, 10);n.push({ id: i, value: a });
        }), n;
      }function p(e) {
        g();var t = this == B ? E : n(this),
            e = 0 != e;return e ? t.attr("disabled", "disabled") : t.removeAttr("disabled"), this;
      }function g() {
        L = "object" === t(P.id) ? e.obj(P.id) : F.find(P.id), j = L.children(P.prev), S = L.children(P.next), E = L.children(P.input);
      }function v() {
        g();var e = this == B ? E : n(this),
            t = e.val(),
            i = parseInt(t, 10),
            a = i -= C;return u.call(e, a), I.call(B, "prev", a), this;
      }function m() {
        g();var e = this == B ? E : n(this),
            t = e.val(),
            i = parseInt(t, 10),
            a = i += C;return u.call(e, a), I.call(B, "next", a), this;
      }function b(e) {
        var e = 1 == e;L = F.find(P.id), L && (L.off("click.bui"), L.off("input"), e && L.remove()), k("prev"), k("next"), k("change"), R = !0;
      }function w(t) {
        var n = {};return e.widget.call(n, t);
      }function y(t, n) {
        return e.option.call(B, t, n);
      }function x(t, n) {
        return e.on.apply(B, arguments), this;
      }function k(t, n) {
        return e.off.apply(B, arguments), this;
      }function I(t) {
        B.self = this == window || this == B ? null : this, e.trigger.apply(B, arguments);
      }var T,
          O,
          C,
          j,
          S,
          E,
          L,
          N = { parentId: ".bui-page", id: ".bui-number", min: 0, max: 100, step: 1, value: 1, disabled: !1, render: !0, tips: !1, autocheck: !0, name: "", prev: ".bui-number-prev", input: "input", next: ".bui-number-next", onInput: null, autoinit: !0, inited: null, onBeforeInit: null, onInited: null, onChange: null, callback: null },
          B = { handle: {}, on: x, off: k, $el: l, disabled: p, value: f, values: h, prev: v, next: m, destroy: b, widget: w, option: y, config: P, init: a },
          P = B.config = n.extend(!0, {}, N, e.config.number, i),
          D = !1,
          R = !1,
          F = null;return P.autoinit && a(P), B;
    };
  }(bui || {}, libs), function (e, t) {
    e.stepbar = function (n) {
      function i(n) {
        var i = t.extend(!0, w, n);if (i.onBeforeInit && i.onBeforeInit.call(b, i), !i.id) return void e.hint("stepbar id不能为空");g = e.obj(i.id), w = b.config = i;var r = "function" == typeof i.template ? i.template.call(b, i.data) : a(i.data);return i.lineCenter && g.addClass("bui-stepbar-center"), g.html(r), v = g.children(), y || o(i), i.onInited && i.onInited.call(b, i), this;
      }function a(e) {
        var n = "";return t.each(e, function (e, t) {
          var i = w.hasNumber ? e + 1 : "",
              a = w.hasNumber ? "bui-stepbar-number" : "";n += '<div class="bui-stepbar-cell ' + a + '">', n += '    <span class="bui-stepbar-dot">' + i + "</span>", n += '    <div class="bui-stepbar-text">', t.title && (n += "        <h3>" + t.title + "</h3>"), t.subtitle && (n += '        <p class="bui-stepbar-time">' + t.subtitle + "</p>"), t.content && (n += '        <p class="bui-stepbar-desc">' + t.content + "</p>"), n += "    </div>", n += "</div>";
        }), n;
      }function o(e) {
        var n = function n(_n3) {
          if (e.click) {
            r(t(this).index());
          }e.callback && e.callback.call(b, _n3, b);
        };return g.on("click.bui", e.handle, n), y = !0, this;
      }function r(e) {
        if ("number" == typeof e) return e = e >= v.length - 1 ? v.length - 1 : e < 0 ? 0 : e, v.each(function (n, i) {
          n < e && t(i).removeClass("active").addClass("visited"), n == e && t(i).removeClass("visited").addClass("active"), n > e && t(i).removeClass("visited active");
        }), p.call(this, "change", e), e;var e = g.children(".active").index();return e;
      }function l() {
        var e = r() + 1;return p.call(this, "next", e), r(e);
      }function c() {
        var e = r() - 1;return p.call(this, "prev", e), r(e);
      }function s(e) {
        var e = 1 == e;g && (g.off("click.bui"), e && g.remove()), h("next"), h("prev"), h("change");
      }function u(t) {
        var n = {};return e.widget.call(n, t);
      }function d(t, n) {
        return e.option.call(b, t, n);
      }function f(t, n) {
        return e.on.apply(b, arguments), this;
      }function h(t, n) {
        return e.off.apply(b, arguments), this;
      }function p(t) {
        b.self = this == window || this == b ? null : this, e.trigger.apply(b, arguments);
      }var g,
          v,
          m = { id: null, handle: ".bui-stepbar-cell", hasNumber: !1, lineCenter: !1, click: !0, autoinit: !0, data: [], template: null, onBeforeInit: null, onInited: null, callback: null },
          b = { handle: {}, on: f, off: h, value: r, next: l, prev: c, destroy: s, widget: u, option: d, config: w, init: i },
          w = b.config = t.extend(!0, {}, m, e.config.stepbar, n),
          y = !1;return w.autoinit && i(w), b;
    };
  }(window.bui || {}, window.libs);var l = function l(e) {
    function t(e) {
      return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e);
    }function n(e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n].style;i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t;
      }return e;
    }function i(e, t) {
      "string" != typeof t && (t += "ms");for (var n = 0; n < e.length; n++) {
        var i = e[n].style;i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t;
      }return e;
    }function a(e, t) {
      var n, i, a, o;return void 0 === t && (t = "x"), a = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), o = new WebKitCSSMatrix("none" === i ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = window.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0;
    }var o = this,
        r = { updateValuesOnTouchmove: !1, rotateEffect: !1, momentumRatio: 7, freeMode: !1 };e = e || {};for (var l in r) {
      void 0 === e[l] && (e[l] = r[l]);
    }o.params = e, o.cols = [], o.initialized = !1;var c = function () {
      var e = navigator.userAgent,
          t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          n = e.match(/(iPad).*OS\s([\d_]+)/),
          i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          a = !n && e.match(/(iPhone\sOS)\s([\d_]+)/),
          o = n || i || a,
          r = !!t;return o || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !r;
    }();return o.setValue = function (e, t) {
      var n = 0;if (0 === o.cols.length) return o.value = e, void o.updateValue(e);for (var i = 0; i < o.cols.length; i++) {
        o.cols[i] && !o.cols[i].divider && (o.cols[i].setValue(e[n], t), n++);
      }
    }, o.updateValue = function (e) {
      for (var t = e || [], n = [], i = 0; i < o.cols.length; i++) {
        o.cols[i].divider || (t.push(o.cols[i].value), n.push(o.cols[i].displayValue));
      }t.indexOf(void 0) >= 0 || (o.value = t, o.displayValue = n, o.params.onChange && o.params.onChange(o, o.value, o.displayValue));
    }, o.initPickerCol = function (e, r) {
      function l(e) {
        if (!k && !x) {
          var t = e.originalEvent || e;t.preventDefault(), x = !0, I = T = t.targetTouches[0].pageY, O = new Date().getTime(), P = !0, j = E = a(p.wrapper[0], "y");
        }
      }function s(e) {
        if (x) {
          var r = e.originalEvent || e;r.preventDefault(), P = !1, T = r.targetTouches[0].pageY, k || (t(y), k = !0, j = E = a(p.wrapper[0], "y"), i(p.wrapper, "0ms")), r.preventDefault();E = j + (T - I), S = void 0, E < b && (E = b - Math.pow(b - E, .8), S = "min"), E > w && (E = w + Math.pow(E - w, .8), S = "max"), n(p.wrapper, "translate3d(0," + E + "px,0)"), p.updateItems(void 0, E, 0, o.params.updateValuesOnTouchmove), N = E - L || E, B = new Date().getTime(), L = E;
        }
      }function u(e) {
        if (!x || !k) return void (x = k = !1);x = k = !1, i(p.wrapper, ""), S && ("min" === S ? n(p.wrapper, "translate3d(0," + b + "px,0)") : n(p.wrapper, "translate3d(0," + w + "px,0)")), C = new Date().getTime();var t;C - O > 300 ? t = E : (Math.abs(N / (C - B)), t = E + N * o.params.momentumRatio), t = Math.max(Math.min(t, w), b);var a = -Math.floor((t - w) / v);o.params.freeMode || (t = -a * v + w), n(p.wrapper, "translate3d(0," + parseInt(t, 10) + "px,0)"), p.updateItems(a, t, "", !0), setTimeout(function () {
          P = !0;
        }, 100);
      }function d(e) {
        if (P) {
          t(y);var n = $(this).attr("data-picker-value");p.setValue(n);
        }
      }var f = $(e),
          h = f.index(),
          p = o.cols[h];if (!p.divider) {
        p.container = f, p.wrapper = p.container.find(".picker-items-col-wrapper"), p.items = p.wrapper.find(".picker-item");var g, v, m, b, w;p.replaceValues = function (e, t, n) {
          p.destroyEvents(), p.values = e, p.displayValues = t;var i = o.columnHTML(p, !0);p.wrapper.html(i), p.items = p.wrapper.find(".picker-item"), p.calcSize(), p.setValue(n || p.values[0], 0, !0), p.initEvents();
        }, p.calcSize = function () {
          o.params.rotateEffect && (p.container.removeClass("picker-items-col-absolute"), p.width || (p.container[0].style.width = ""));var e, t;e = 0, t = p.container[0].offsetHeight, g = p.wrapper[0].offsetHeight, v = p.items[0].offsetHeight, m = v * p.items.length, b = t / 2 - m + v / 2, w = t / 2 - v / 2, p.width && (e = p.width, parseInt(e, 10) === e && (e += "px"), p.container[0].style.width = e), o.params.rotateEffect && (p.width || (p.items.each(function () {
            var t = $(this);t[0].style.width = "auto", e = Math.max(e, t[0].offsetWidth), t[0].style.width = "";
          }), p.container[0].style.width = e + 2 + "px"), p.container.addClass("picker-items-col-absolute"));
        }, p.calcSize(), n(p.wrapper, "translate3d(0," + w + "px,0)"), i(p.wrapper, "0ms");var y;p.setValue = function (e, t, a) {
          void 0 === t && (t = "");var o = p.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();void 0 !== o && -1 !== o || (o = 0);var r = -o * v + w;n(p.wrapper, "translate3d(0," + r + "px,0)"), i(p.wrapper, t + "ms"), p.updateItems(o, r, t, a);
        }, p.updateItems = function (e, t, r, l) {
          void 0 === t && (t = a(p.wrapper[0], "y")), void 0 === e && (e = -Math.round((t - w) / v)), e < 0 && (e = 0), e >= p.items.length && (e = p.items.length - 1);var s = p.activeIndex;p.wrapper.find(".picker-selected").removeClass("picker-selected"), i(p.items, r);var u = p.items.eq(e).addClass("picker-selected");if (n(u, ""), o.params.rotateEffect) {
            Math.floor((t - w) / v);p.items.each(function () {
              var e = $(this),
                  i = e.index() * v,
                  a = w - t,
                  o = i - a,
                  r = o / v,
                  l = Math.ceil(p.height / v / 2) + 1,
                  s = -18 * r;s > 180 && (s = 180), s < -180 && (s = -180), Math.abs(r) > l ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"), n(e, "translate3d(0, " + (-t + w) + "px, " + (c ? -110 : 0) + "px) rotateX(" + s + "deg)");
            });
          }(l || void 0 === l) && (p.value = u.attr("data-picker-value"), p.displayValue = p.displayValues ? p.displayValues[e] : p.value, s != e && (p.onChange && p.onChange(o, p.value, p.displayValue), o.updateValue()));
        }, r && p.updateItems(0, w, 0);var x,
            k,
            I,
            T,
            O,
            C,
            j,
            S,
            E,
            L,
            N,
            B,
            P = !0;p.initEvents = function (e) {
          var t = /hp-tablet/gi.test(navigator.appVersion),
              n = "ontouchstart" in window && !t,
              i = n ? "touchstart" : "mousedown",
              a = n ? "touchmove" : "mousemove",
              o = n ? "touchend" : "mouseup",
              r = e ? "off" : "on";p.container[r](i, l), p.container[r](a, s), p.container[r](o, u), "mouseup" == o && document.documentElement.addEventListener("mouseleave", u, !1), p.items[r]("click", d);
        }, p.destroyEvents = function () {
          p.initEvents(!0);
        }, p.initEvents();
      }
    }, o.columnHTML = function (e, t) {
      var n = "",
          i = "";if (e.divider) i += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";else {
        for (var a = 0; a < e.values.length; a++) {
          n += '<div class="picker-item" data-picker-value="' + e.values[a] + '">' + (e.displayValues ? e.displayValues[a] : e.values[a]) + "</div>";
        }i += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + n + "</div></div>";
      }return t ? n : i;
    }, o.layout = function () {
      var e,
          t = "",
          n = "";o.cols = [];var i = "";for (e = 0; e < o.params.cols.length; e++) {
        var a = o.params.cols[e];i += o.columnHTML(o.params.cols[e]), o.cols.push(a);
      }n = "picker-modal picker-columns " + (o.params.cssClass || "") + (o.params.rotateEffect ? " picker-3d" : ""), t = '<div class="' + n + '"><div class="picker-modal-inner picker-items">' + i + '<div class="picker-center-highlight"></div></div></div>', o.pickerHTML = t;
    }, o.init = function () {
      o.initialized || (o.layout(), o.container = $(o.pickerHTML), o.container.addClass("picker-modal-inline"), $(o.params.container).html(o.container), o.container.find(".picker-items-col").each(function () {
        var e = !0;(!o.initialized && o.params.value || o.initialized && o.value) && (e = !1), o.initPickerCol(this, e);
      }), o.value ? o.setValue(o.value, 0) : o.params.value && o.setValue(o.params.value, 0)), o.initialized = !0;
    }, o.init(), o;
  };!function (e, t) {
    e.picker = function (e) {
      return new l(e);
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.pickerdate = function () {
      function i(e) {
        if (e && e.constructor == Date) return e;if (e && "string" == typeof e) {
          if (e = e.replace(/[-|年|月|日|号]/gim, "/").replace(/[时|分|秒]/gim, ":").replace(/^(\d{4}\/\d+?)($|\s)/, function (e, t) {
            return t + "/1";
          }).replace(/^(\d{1,2}\/\d{1,2}?)($|\s)/, function (e, t) {
            return new Date().getFullYear() + "/" + t;
          }), e.indexOf("/") < 0) {
            var t = new Date();e = t.getFullYear() + "/" + t.getMonth() + "/" + t.getDate() + " " + e;
          }return new Date(e);
        }return "number" == typeof e ? new Date(e) : new Date();
      }function a(e, t) {
        var e,
            t,
            n = new Date();return n.getTime() < e.getTime() ? e : n.getTime() > t.getTime() ? t : n;
      }function o(o) {
        function r(e) {
          var t = new Date("1970/1/1");return N.forEach(function (n, i) {
            t["set" + n](e[j[n]].value - ("Month" == n ? 1 : 0));
          }), t;
        }function l(e) {
          var t = i(e);return N.map(function (e, n) {
            return t["get" + e]() + ("Month" == e ? 1 : 0);
          });
        }function c() {
          if (!n(this).hasClass("disabled")) {
            if (C.bindValue) {
              k = n(this);var e = k.val() || k.text();I.value(e);
            }O && !O.isOpen() && O.open();
          }
        }function s(t) {
          I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments);
        }var u,
            d,
            f,
            h,
            p,
            g,
            v,
            m,
            b,
            w,
            y = e.guid(),
            x = { id: y, height: 260, popup: !0, mask: !0, autoinit: !0, bindValue: !1, position: "bottom", effect: "fadeInUp", appendTo: "", rotateEffect: !1, buttons: [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], onBeforeInit: null, onInited: null, onMask: function onMask() {
            O && O.close();
          }, callback: null },
            k = null,
            I = this,
            T = function T() {},
            O = null,
            C = n.extend(!0, {}, x, o);C.appendTo = C.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), C.callback = function (e) {
          var t = o.callback && o.callback.call(I, e);if (1 == t || void 0 === t) if ("取消" == n(e.target).text().trim() || "cancel" == n(e.target).text().trim() || "关闭" == n(e.target).text().trim()) try {
            var a = i(u);I.value(a);
          } catch (e) {} else u = I.value();k = null;
        };var j = {},
            S = ["FullYear", "Month", "Date"],
            E = ["Hours", "Minutes", "Seconds"],
            L = { FullYear: "year", Month: "month", Date: "date", Hours: "hour", Minutes: "minute", Seconds: "second" },
            N = [],
            B = !1;this.config = {}, this.option = function () {}, this.cols = function (e) {
          e = e || {};var t = [];return b = [], m = [], j = {}, N = [], S.forEach(function (n, i) {
            "none" !== e[L[n]] && (N.push(n), t.push(n));
          }), E.forEach(function (t, n) {
            "none" !== e[L[t]] && (N.push(t), b.push(t));
          }), t.forEach(function (t, n) {
            j[t] = m.length, m.push(R[t](e[L[t]]));
          }), b.forEach(function (n, i) {
            0 == i && 0 != t.length ? m.push(R.Space()) : m.push(R.Divider()), 0 == t.length && (m[0].content = ""), j[n] = m.length, m.push(R[n](e[L[n]]));
          }), I.picker && (I.picker.params.cols = m, I.picker.initialized = !1, I.picker.init()), B = !1, this;
        }, this.id = function (e) {
          e && !p && (p = e);
        }, this.reset = function () {
          return I.picker && (I.picker.initialized = !1, I.picker.init()), this;
        }, this.min = function (e) {
          return f = i(e || C.min || "1960/01/01 00:00:00"), this;
        }, this.max = function (e) {
          return h = i(e || C.max || "2024/01/01 00:00:00"), this;
        }, this.value = function (e) {
          if (e) {
            var t = i(e),
                n = l(t);return I.picker.setValue(n, 0), this;
          }return v(I.picker, I.value, I.displayValue);
        }, this.handle = function (t) {
          if (t && d !== t) {
            var n = e.obj(d);n && n.off("click", c), n = e.obj(t), n && n.on("click", c), c.hasOpen = !1, d = t;
          }return this;
        };var P = { y: function y(e, t) {
            return e.getFullYear().toString().slice(-t);
          }, M: function M(e, t) {
            return ((t > 1 ? "0" : "") + (e.getMonth() + 1)).slice(-2);
          }, d: function d(e, t) {
            return ((t > 1 ? "0" : "") + e.getDate()).slice(-2);
          }, h: function h(e, t) {
            return ((t > 1 ? "0" : "") + e.getHours()).slice(-2);
          }, m: function m(e, t) {
            return ((t > 1 ? "0" : "") + e.getMinutes()).slice(-2);
          }, s: function s(e, t) {
            return ((t > 1 ? "0" : "") + e.getSeconds()).slice(-2);
          } };this.formatValue = function (e) {
          return v = function v(t, n, i) {
            var a = r(t.cols);return e.replace(/y+|M+|d+|h+|m+|s+/g, function (e) {
              return P[e[0]](a, e.length);
            });
          }, I.picker && I.picker.updateValue(), B = !1, this;
        }, this.onChange = function (t) {
          var n = this;return g = C.bindValue ? function (i) {
            k ? k[0] && "INPUT" === k[0].nodeName ? k.val(i) : k.text(i) : e.obj(d).each(function (e, t) {
              "INPUT" === t.nodeName ? t.value = i : t.innerTEXT = i;
            }), t && t.call(n, i);
          } : t || T, s.call(this, "change", w), this;
        }, this.popup = function (i) {
          if (C.popup && !O) {
            var a = '<div id="' + y + '" class="bui-dialog" >';a += '<div class="bui-dialog-main"><div id="' + y + '-picker"></div></div>', C.buttons && C.buttons.length && (a += '<div class="bui-dialog-foot bui-box">', n.each(C.buttons, function (e, n) {
              var i = "object" == (void 0 === n ? "undefined" : t(n)) && "className" in n ? " " + n.className : "",
                  o = "object" == (void 0 === n ? "undefined" : t(n)) && "name" in n ? n.name : n;a += '<div class="span1"><div class="bui-btn' + i + '">' + o + "</div></div>";
            }), a += "</div>"), a += "</div>";n(C.appendTo).append(a);p = e.obj(y + "-picker");
          }return this;
        };var D = function D(e, t, n) {
          var i = r(e.cols),
              a = f["get" + t](),
              o = h["get" + t](),
              l = i.getTime(),
              c = f.getTime(),
              s = h.getTime();return l < c && i["get" + t]() < a ? ("Month" == t && (a += 1), void e.cols[j[t]].setValue(a)) : l > s && i["get" + t]() > o ? ("Month" == t && (o += 1), void e.cols[j[t]].setValue(o)) : void (n && (l < c || l > s) && e.cols[j[n]].onChange(e));
        },
            R = {};R.FullYear = function (e) {
          return e = e || { values: function () {
              for (var e = [], t = f.getFullYear(), n = h.getFullYear(), i = t; i <= n; i++) {
                e.push(i);
              }return e;
            }() }, { values: e.values, displayValues: e.displayValues, onChange: function onChange(e, t, n) {
              D(e, "FullYear", j.Month ? "Month" : "");
            } };
        }, R.Month = function (e) {
          return e = e || { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], displayValues: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, { values: e.values, displayValues: e.displayValues, textAlign: "right", onChange: function onChange(e, t, n) {
              for (var i = new Date(e.cols[j.FullYear].value, parseInt(e.cols[j.Month].value), 0).getDate(), a = [], o = 1; o <= i; o++) {
                a.push(o);
              }var r = e.cols[j.Date];r && r.replaceValues && r.replaceValues(a, null, r.value < i ? r.value : i), D(e, "Month", j.Date ? "Date" : "");
            } };
        }, R.Date = function (e) {
          return e = e || { values: function () {
              var e = 31,
                  t = [];do {
                t.unshift(e);
              } while (e--);return t;
            }(), displayValues: function () {
              var e = 31,
                  t = [];do {
                t.unshift(e + "天");
              } while (e--);return t;
            }() }, { values: e.values, displayValues: e.displayValues, onChange: function onChange(e, t, n) {
              D(e, "Date", j.Hours ? "Hours" : "");
            } };
        }, R.Space = function () {
          return { divider: !0, content: "  " };
        }, R.Hours = function (e) {
          return e = e || function () {
            for (var e = [], t = [], n = 0; n < 24; n++) {
              e.push(n), t.push(("0" + n).slice(-2));
            }return { values: e, displayValues: t };
          }(), { values: e.values, displayValues: e.displayValues, onChange: function onChange(e, t, n) {
              D(e, "Hours", j.Minutes ? "Minutes" : "");
            } };
        }, R.Divider = function () {
          return { divider: !0, textAlign: "center", content: ":" };
        }, R.Minutes = function (e) {
          return e = e || function () {
            for (var e = [], t = [], n = 0; n < 60; n++) {
              e.push(n), t.push(("0" + n).slice(-2));
            }return { values: e, displayValues: t };
          }(), { values: e.values, displayValues: e.displayValues, onChange: function onChange(e, t, n) {
              D(e, "Minutes", j.Seconds ? "Seconds" : "");
            } };
        }, R.Seconds = function (e) {
          return e = e || function () {
            for (var e = [], t = [], n = 0; n < 60; n++) {
              e.push(n), t.push(("0" + n).slice(-2));
            }return { values: e, displayValues: t };
          }(), { values: e.values, displayValues: e.displayValues, onChange: function onChange(e, t, n) {
              D(e, "Seconds");
            } };
        }, I.init = function (t) {
          var o = n.extend(!0, C, t);o.onBeforeInit && o.onBeforeInit.call(I, o), I.min(o.min), I.max(o.max), I.cols(o.cols), I.id(o.id), I.handle(o.handle), I.popup(o), I.onChange(o.onChange), I.formatValue(o.formatValue || "yyyy-MM-dd hh:mm:ss"), I.picker = e.picker({ container: p, rotateEffect: o.rotateEffect, value: l(o.value ? i(o.value) : a(f, h)), onChange: function onChange(e, t, n) {
              var i = v(e, t, n);w != i && (w = i, g(i), s.call(this, "change", i));
            }, cols: m }), o.popup && !O && (O = e.dialog.call(this, o), O && O.on("open", function () {
            u = v(I.picker, I.value, I.displayValue), I.picker && (I.picker.initialized = !1, I.picker.init()), s.call(this, "show");
          }), O && O.on("close", function () {
            s.call(this, "hide");
          })), o.onInited && o.onInited.call(I, o);
        }, C.autoinit && I.init(C), this.disabled = function () {
          var t = e.obj(d);return t && t.addClass("disabled"), this;
        }, this.open = function (e) {
          return O.open(e), this;
        }, this.isOpen = function () {
          return O.isOpen();
        }, this.close = function (e) {
          return O.close(e), this;
        }, this.enabled = function () {
          var t = e.obj(d);return t && t.removeClass("disabled"), this;
        }, this.destroy = function (e) {
          var e = 1 == e;this.off("show"), this.off("hide"), this.off("change"), O && O.destroy(e), I = null;
        }, this.widget = function (t) {
          var n = { dialog: O || {} };return e.widget.call(n, t);
        }, this.on = function (t, n) {
          return e.on.apply(I, arguments), this;
        }, this.off = function (t, n) {
          return e.off.apply(I, arguments), this;
        };
      }return function (e) {
        return new o(e);
      };
    }();
  }(window.bui || {}, window.libs), function (e, n) {
    e.levelselect = function (i) {
      function a(t) {
        i = n.extend(!0, {}, w, t), i.onBeforeInit && i.onBeforeInit.call(P, i);var a = "";i.popup ? (a = h(i), D.append(a), B || (B = bui.dialog({ id: x, height: i.height, mask: i.mask, scroll: !1, autoClose: i.autoClose, fullscreen: i.fullscreen, position: i.position, effect: i.effect, onMask: i.onMask })), I = e.obj(x)) : (a = p(i), D.append(a), I = e.objId(x)), T = e.objId(k);var o = 0;for (o = 0; o < i.level; o++) {
          !function (t) {
            L[t] = n(".select-level-val-" + t, I), E[t] = n(".select-level-" + t, T), i.trigger && (N[t] = n(i.trigger).eq(t)), S[t] || (S[t] = bui.select({ id: E[t], type: "select", direction: "right", field: { name: i.field.name, icon: i.field.icon, image: i.field.image, value: i.field.value || i.field.name }, popup: !1, data: [], template: i.template, onChange: i.onChange }), S[t].on("change", function (a) {
              i.log && console.log("change", t);var o = S[t].index() || 0,
                  r = S[t].value() || 0,
                  l = S[t].text() || S[t].value();C[t] = { name: l, value: r, index: o };var c = [],
                  s = [];"string" == typeof i.field.data ? c = y[t][o][i.field.data] || y[t][o] : i.field.data && "array" === e.typeof(i.field.data) && (i.field.data.forEach(function (e, n) {
                s.push(y[t][o][i.field.data[n]]);
              }), c = s[0] || s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), y[t + 1] = c, S[t + 1] && S[t + 1].option("data", y[t + 1]), S[t + 2] && S[t + 2].option("data", [""]), E[t] && E[t].find(".bui-btn").removeClass("active"), n(a.target).parents(".bui-btn").addClass("active"), f(t), L[t] && L[t].text(l), L[t + 1] && L[t + 1].text(i.placeholder), L[t + 2] && L[t + 2].text(""), N[t] && N[t].text(l), N[t + 1] && N[t + 1].text(i.placeholder), N[t + 2] && N[t + 2].text(""), a.context = { trigger: N[t], selector: L[t], index: t, select: S[t], data: y[t] }, m.call(P, "change", a), t == i.level - 1 && m.call(P, "lastchange", a), 1 == i.visibleNum && (i.log && console.log("next"), j.next()), i.popup && !B.isOpen() || (t == i.level - 1 ? (i.log && console.log("close"), i.autoClose && B && B.close()) : t % i.visibleNum == 1 && (i.log && console.log("next"), j.next()));
            }), L[t].on("click", function () {
              var e = n(this).index(),
                  t = j.index();1 == i.visibleNum ? j.to(e) : (e > t ? j.next() : j.prev(), n(this).addClass("active").siblings().removeClass("active"));
            }));
          }(o);
        }var r = window && window.viewport && window.viewport.height() || n(window).height(),
            l = i.fullscreen ? r : String(i.height).indexOf("%") > -1 ? r * parseFloat(i.height) / 100 : i.height;i.popup && B ? B.on("open", function (e) {
          O = l - I.find(".select-value").height() - I.children(".bui-dialog-head").height(), u(i);
        }) : (O = l, u(i)), L[0] && L[0].text(i.placeholder), N[0] && N[0].text(i.placeholder), y[0] = i.data, S[0].option("data", y[0]), i.value && d(i.value), i.onInited && i.onInited.call(this, i), R = !1;
      }function o(e, t) {
        return j && j.to(e, t), this;
      }function r() {
        return j && j.prev(), this;
      }function l() {
        return j && j.next(), this;
      }function c(e) {
        m.call(this, "beforeshow");var n = {};"function" == typeof e ? n.callback = function () {
          e && e.call(P), m.call(P, "show");
        } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), B && B.open(n);
      }function s(e) {
        m.call(this, "beforehide");var n = {};"function" == typeof e ? n.callback = function () {
          e && e.call(P), m.call(P, "hide");
        } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), B && B.close(n);
      }function u(e) {
        j || (j = bui.tab({ id: k, height: O, scroll: !0, zoom: !1, visibleNum: e.visibleNum, scrollNum: e.scrollNum }).lock(), j.on("to", function (e) {
          f(e);
        }));
      }function d(n) {
        if (void 0 === n) return C;n && "array" === e.typeof(n) ? n.forEach(function (e, n) {
          "string" == typeof e ? S[n].value(e) : "object" === (void 0 === e ? "undefined" : t(e)) && (S[n].text(e.name), S[n].value(e.value));
        }) : e.showLog("参数是一个数组类型");
      }function f(e) {
        n(".select-value div", I).removeClass("active"), n(".select-value div", I).eq(e).addClass("active");
      }function h(e) {
        var t = "";return t += '<div id="' + x + '" class="bui-dialog bui-levelselect" style="display:none;">', t += '    <div class="bui-dialog-head">' + e.title + "</div>", t += '    <div class="bui-dialog-main">', t += p(e), t += "    </div>", t += '    <div class="bui-dialog-close"><i class="icon-close"></i></div>', t += "</div>";
      }function p(e) {
        var t = "",
            n = 0;if (e.popup || (t += '<div id="' + x + '" class="bui-levelselect">'), e.showValue) {
          for (t += '    <div class="bui-box select-value">', n = 0; n < e.level; n++) {
            t += '        <div class="select-level-val-' + n + '"></div>';
          }t += "    </div>";
        }for (t += '<div id="' + k + '" class="bui-tab bui-levelselect-tab">', t += '    <div class="bui-tab-main">', t += "        <ul>", n = 0; n < e.level; n++) {
          t += "            <li>", t += '                <div class="select-level-' + n + '"></div>', t += "            </li>";
        }return t += "        </ul>", t += "    </div>", t += "</div>", e.popup || (t += "</div>"), t;
      }function g(t, n) {
        return e.on.apply(P, arguments), this;
      }function v(t, n) {
        return e.off.apply(P, arguments), this;
      }function m(t) {
        P.self = this == window || this == P ? null : this, e.trigger.apply(P, arguments);
      }var b = { popup: !0, data: [], height: 300, appendTo: "", title: "所在地区", trigger: null, placeholder: "请选择", level: 3, visibleNum: 2, scrollNum: 1, log: !1, mask: !0, autoClose: !0, fullscreen: !1, position: "bottom", effect: "fadeInUp", showValue: !0, onMask: null, value: [], autoinit: !0, onChange: null, onBeforeInit: null, template: null, onInited: null, field: { name: "n", icon: "icon", image: "image", value: "", data: ["c", "a"] } },
          w = n.extend(!0, {}, b, i),
          y = [],
          x = bui.guid(),
          k = x + "-slide",
          I = null,
          T = null,
          O = 0,
          C = [],
          j = null,
          S = [],
          E = [],
          L = [],
          N = [],
          B = null,
          P = { init: a, show: c, hide: s, value: d, to: o, prev: r, next: l, on: g, off: v, trigger: m };i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body");var D = n(i.id ? i.id : i.appendTo),
          R = !0;return w.onBeforeInit && w.onBeforeInit.call(P, w), w.autoinit && a(w), P;
    };
  }(window.bui || {}, window.libs);e(function (e) {
    !function (t, n) {
      t.tab = function (i) {
        var a = { id: "", menu: ".bui-tab-head > ul", children: ".bui-tab-main > ul", header: "header", footer: "footer", main: ".bui-tab-main", item: "li", prev: ".bui-tab-prev", next: ".bui-tab-next", alignClassName: "", stopHandle: "", width: 0, height: 0, zoom: !1, swipe: !0, animate: !0, bufferEffect: !1, visibleNum: 1, scrollNum: 1, distance: 40, direction: "x", autoplay: !1, autoheight: !1, scroll: !0, index: 0, fullscreen: !1, autopage: !1, autoload: !1, autoinit: !0, data: null, template: null, async: !0, callback: null, onBeforeInit: null, onInited: null, onStart: null, onMove: null, onEnd: null },
            o = e.config = n.extend(!0, {}, a, t.config.slide, i);return t.slide(o);
      };
    }(window.bui || {}, window.libs);
  });!function (e, t) {
    e.input = function (n) {
      function i(n) {
        var i = t.extend(!0, k, n);if (i.onBeforeInit && i.onBeforeInit.call(x, i), k = x.config = i, "" != i.id && null !== i.id) {
          if (p = e.obj(i.id), w = p.find(i.target), v = w.eq(0), m = e.unit.startWithClass(i.iconClass) ? i.iconClass : "." + i.iconClass, !I) {
            if (a(i), i.showLength) {
              var r = o(i);p.append(r);
            }i.maxLength > 0 && w.attr("maxlength", i.maxLength);
          }return i.showLength && w.trigger(i.event), i.onInited && i.onInited.call(x, i), this;
        }
      }function a(e) {
        return w.on(e.event, bui.unit.debounce(function (n) {
          var i = this.value,
              a = t(this).parent(),
              o = a.find(m);g = i, i.length > 0 && e.showIcon ? o && o.length ? o.css("display", "block") : (a.append('<i class="' + m.substr(1) + '"></i>'), o = w.find(m)) : o && o.css("display", "none"), e.showLength && (b = a.find("em"), b.text(i.length)), e.onInput && e.onInput.call(x, n), h.call(x, "input", n);
        }, 100)), w.on("focus", function (n) {
          var i = this.value;g = i, v = t(this), e.showIcon && (p.find(m).css("display", "none"), i && t(this).next().css("display", "block")), e.onFocus && e.onFocus.call(x, n), h.call(x, "focus", n);
        }), w.on("blur", function (t) {
          var n = e.onBlur && e.onBlur.call(x, t);g = 1 == n || null === n ? this.value : "", h.call(x, "blur", t);
        }), e.showIcon && p.on("click", m, function (t) {
          e.callback && e.callback.call(x, t), h.call(x, "click", t);
        }), I = !0, this;
      }function o(e) {
        v.parent();return '<span class="bui-input-length"><em>0</em>/' + e.maxLength + "</span>";
      }function r(e) {
        return void 0 !== e ? (v.val(e), w.trigger(k.event), this) : v.val();
      }function l() {
        return v.val(""), v.next().css("display", "none"), k.showLength && b.text(0), this;
      }function c() {
        return "text" == v.attr("type") ? v.attr("type", "password") : v.attr("type", "text"), this;
      }function s(t) {
        var n = {};return e.widget.call(n, t);
      }function u(t, n) {
        return e.option.call(x, t, n);
      }function d(t, n) {
        return e.on.apply(x, arguments), this;
      }function f(t, n) {
        return e.off.apply(x, arguments), this;
      }function h(t) {
        x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments);
      }var p,
          g,
          v,
          m,
          b,
          w,
          y = { id: "", target: "input,textarea", event: "input", iconClass: ".icon-remove", showIcon: !0, showLength: !1, maxLength: 0, onInput: null, onBlur: null, onFocus: null, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
          x = { handle: {}, empty: l, value: r, toggleType: c, on: d, off: f, widget: s, option: u, config: k, init: i },
          k = x.config = t.extend(!0, {}, y, e.config.searchbar, n),
          I = !1;return k.autoinit && i(k), x;
    };
  }(bui || {}, libs), function (e, n) {
    e.ajax = function (i) {
      function a(e) {
        var t = function t(_t2, n, i) {
          var a;if ("string" == typeof _t2 && "json" == e.dataType) try {
            a = JSON.parse(_t2);
          } catch (e) {
            a = _t2;
          } else a = _t2 || {};s && s(a, n, i), o.resolve(a, n, i);
        },
            i = function i(t, n, _i2) {
          var a;if ("string" == typeof t && "json" == e.dataType) try {
            a = JSON.parse(t);
          } catch (e) {
            a = t;
          } else a = t || {};u && u(a, n, _i2), o.reject(a, n, _i2);
        };e.success = t, e.error = i;var a = e.type && e.type.toUpperCase();e.type = a || e.method.toUpperCase(), r = n.ajax(e);
      }var o = n.Deferred(),
          r = null,
          l = { data: {}, method: "GET", dataType: "json", timeout: 6e4, headers: {}, processData: !0, mimeType: "none", cache: !1, async: !0, needJsonString: !1, contentType: "", localData: null, native: !0, needNative: !1 },
          c = n.extend(!0, {}, l, e.config.ajax, i),
          s = c.success,
          u = c.fail || c.error;"" === c.contentType && "GET" == c.method ? c.contentType = "text/html;charset=UTF-8" : "" === c.contentType && "POST" == c.method ? c.contentType = "application/x-www-form-urlencoded" : c.contentType = c.contentType;"object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;if (c.needJsonString) try {
        c.data = "object" === t(c.data) ? JSON.stringify(c.data) : c.data;
      } catch (e) {
        c.data = c.data;
      }if (!c.url) return e.showLog("url不能为空", "bui.ajax"), o;if (o.abort = function () {
        r && r.abort();
      }, c.localData) return s && s(c.localData, 200), o.resolve(c.localData, 200), o;if (c.needNative) {
        if (void 0 === e.native.ajax) return a(c), o;o = e.native.ajax && e.native.ajax(c) || o;
      } else a(c);return o;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.load = function (n) {
      var i,
          a = { url: "", param: {}, reload: !1, replace: !1, native: !0, needNative: !1 },
          o = t.extend(!0, {}, a, e.config.load, n),
          r = {},
          l = o.url;if (!o.url) return void e.showLog("url 不能为空!", "bui.load:web");if (l.indexOf("tel:") >= 0 || l.indexOf("mailto:") >= 0 || l.indexOf("sms:") >= 0) return void e.unit.openExtral(l);if (l && l.indexOf("?") > -1) {
        var c = l.split("?");r = e.unit.keyStringToObject(c[1]), o.url = c[0];
      }try {
        var s = "string" == typeof o.param && JSON.parse(o.param) || o.param || {};o.param = t.extend(!0, {}, r, s);
      } catch (t) {
        return void e.showLog("param 参数值必须是一个{}对象", "bui.load:web");
      }return document.activeElement.blur(), n && n.needNative ? void (e.native.load && e.native.load(o)) : (i = e.setUrlParams(o.url, o.param), o.reload && e.isWebapp ? void (window.location.href = i) : o.reload && !e.isWebapp ? void (e.native.load && e.native.load(o)) : !o.replace || "load" in window.router ? void ("load" in window.router ? window.router.load(o) : o.native && e.isWebapp || !o.native && !e.isWebapp ? window.location.href = i : e.native.load && e.native.load(o)) : void window.location.replace(i));
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.getPageParams = function (i) {
      var a = n.Deferred(),
          o = { callback: null, native: !0, needNative: !1 };i = i || {};var r = n.extend(!0, {}, o, e.config.getPageParams);"function" == typeof i ? r.callback = i : i && "object" === e.typeof(i) && (r = n.extend(!0, {}, o, e.config.getPageParams, i));"object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;if (i && i.needNative) return a = e.native.getPageParams && e.native.getPageParams(r) || a;if ("getPageParams" in window.router) {
        var l = window.router.getPageParams && window.router.getPageParams() || e.getUrlParams();r.callback && r.callback(l), a.resolve(l);
      } else if (r.native && e.isWebapp || !r.native && !e.isWebapp) {
        var c = e.getUrlParams();r.callback && r.callback(c), a.resolve(c);
      } else a = e.native.getPageParams && e.native.getPageParams(r) || a;return a;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.back = function (i) {
      function a() {
        if (window.history.go(o.index), f) try {
          clearTimeout(f);
        } catch (e) {}o.delay && o.callback ? f = setTimeout(function () {
          if (e.hasRouter) {
            var t = router.history.getLast(),
                n = loader.map().modules[t.pid].exports;o.callback.call(router, n);
          } else o.callback();
        }, 500) : o.callback && o.callback();
      }var o,
          r = { index: -1, name: "", delay: !0, native: !0, beforeBack: !0, callback: null };"function" == typeof i ? (r.callback = i, o = n.extend(!0, {}, r, e.config.back)) : o = i && "object" === e.typeof(i) ? n.extend(!0, {}, r, e.config.back, i) : n.extend(!0, {}, r, e.config.back);var l = ("object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp, e.hasRouter ? router.history && router.history.getLast() || null : null);if (!1 !== ("function" == typeof o.beforeBack ? o.beforeBack.call(this, { prevTarget: null, target: l }) : o.beforeBack)) {
        if (i && i.needNative) return void (e.native.back && e.native.back(o));if ("back" in window.router) {
          if (window.router.config.syncHistory) {
            var c = router.history.get(),
                s = c.length - 1;if (o.name) {
              var u = e.array.indexs(c, o.name, "pid"),
                  d = u.length;o.index = d ? -(c.length - u[d - 1] - 1) : -1;
            }if (Math.abs(o.index) >= c.length && (o.index = -s), Math.abs(o.index) >= window.history.length && window.router.config.hash && (o.index = window.router.config.reloadCache ? -s : -(window.history.length - 1)), 0 == o.index && (o.index = -1), window.router.config.hash && !window.router.config.reloadCache) return void a();c.length > 1 && a();
          } else window.router.back && window.router.back(o);
        } else o.native && e.isWebapp || !o.native && !e.isWebapp ? a() : e.native.back && e.native.back(o);var f;
      }
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.refresh = function (n) {
      var i = { native: !0, needNative: !1 },
          a = t.extend(!0, {}, i, e.config.refresh, n);if (n && n.needNative) return void (e.native.refresh && e.native.refresh());"refresh" in window.router ? window.router.refresh() : a.native && e.isWebapp || !a.native && !e.isWebapp ? window.location.reload(!0) : e.native.refresh && e.native.refresh();
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.run = function (i) {
      var a = {},
          o = { id: "", name: "", data: null, onFail: null, native: !0, needNative: !1 };"string" == typeof i ? a.id = i : i && "object" === e.typeof(i) && (a = n.extend(!0, {}, o, e.config.run, i));var r = String(a.id);if ("object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp) {
        if (r.indexOf("http://") > -1 || r.indexOf("https://") > -1) {
          var l = e.setUrlParams(a.id, a.data);if (e.platform.isIos()) return void (window.location.href = l);var c = window.open("", "_blank") || window.open("", "_newtab");c.location.href = l;
        }
      } else e.native.run && e.native.run(a);
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.fileselect = function (i) {
      function a(t) {
        var i = n.extend(!0, I, t);switch (I.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), i.mediaType) {case "allmedeia":
            L = "*";break;case "picture":case "image":
            L = "image/*";break;case "video":
            L = "video/*";break;case "audio":
            L = "audio/*";break;default:
            L = i.mediaType;}return S = [], E ? (B = new Image(), P = new FileReader(), D = document.createElement("canvas"), R = D.getContext("2d"), f(), N || o(i)) : x = e.native.fileselect && e.native.fileselect.call(T, t, { module: O }) || {}, this;
      }function o(t) {
        return y.on("change", function (t) {
          var n = this.files;if (!(n.length < 1)) {
            n.length > 1 && e.showLog("一次只能选一张图片", "bui.fileselect:web");var i = n[0];C = i;var a = { name: i.name, data: i, type: i.type, size: i.size };if (S.push(a), j.needCompress) {
              j.data = i, j.mimeType = j.mimeType ? j.mimeType : i.type;r(j);
            } else j.onSuccess && j.onSuccess.call(T, i, S);this.value = "";
          }
        }), N = !0, this;
      }function r(t) {
        var i = n.extend(!0, { destinationType: "file", data: null, mimeType: "", quality: .8, width: 800, height: 800, needCompress: !0, needChangeData: !1, onSuccess: null, onFail: null }, I, t);B.onload = function () {
          var t = this.width,
              n = this.height,
              a = i.width,
              o = i.height,
              r = t,
              c = n;i.needCompress && (t > a || n > o) && (t / n > a / o ? (r = a, c = Math.round(a * (n / t))) : (c = o, r = Math.round(o * (t / n)))), D.width = r, D.height = c, R.clearRect(0, 0, r, c), R.drawImage(B, 0, 0, r, c);var s = D.toDataURL(i.mimeType || i.data && i.data.type || "image/jpeg", i.quality),
              f = l(i.data.name) || "";switch (i.destinationType) {case "file":
              C = u(s, f);break;case "blob":
              C = d(s);break;case "data":
              C = s;}if (i.needChangeData) {
            var h = e.array.index(S, i.data.name, "name");h > -1 && (S[h].data = C, C.size && (S[h].size = C.size), C.type && (S[h].type = C.type));
          }return i.onSuccess && i.onSuccess.call(T, C, S), C;
        }, B.onerror = function () {
          i.onFail && i.onFail.call(T, B.src);
        }, P.onload = function (e) {
          B.src = e.target.result;
        }, i.data && 0 == i.data.type.indexOf("image") && P.readAsDataURL(t.data);
      }function l(e) {
        return e.indexOf(".png") > -1 || e.indexOf(".jpg") > -1 || e.indexOf(".gif") > -1 || e.indexOf(".jpeg") > -1 ? e.substr(0, e.lastIndexOf(".")) : e;
      }function c(t) {
        C = null;var i = n.extend(!0, { needChangeData: !0, needCompress: !1 }, I, t);return j = i, j.mimeType = t.mimeType ? t.mimeType : "", E ? (t.from ? "picture" === t.from || "photo" === t.from || "savephoto" === t.from ? y.removeAttr("capture") : y.attr("capture", t.from) : y.removeAttr("capture"), e.platform.isIos() && "function" == typeof FastClick ? y[0].dispatchEvent(new Event("click")) : y.trigger("click")) : x.add(i), this;
      }function s(t) {
        var i = n.extend(!0, { needCompress: !1, destinationType: "data", mimeType: "", needChangeData: !1 }, t);if (i.data = i.data || C, i.mimeType = t.mimeType ? t.mimeType : i.data && i.data.type || "image/jpeg", E) try {
          r(i);
        } catch (t) {
          e.showLog(t);
        } else x.toBase64(i);return this;
      }function u(e, t) {
        t = t || "file";for (var n = e.split(","), i = n[0].match(/:(.*?);/)[1], a = i.split("/")[1], o = atob(n[1]), r = o.length, l = new Uint8Array(r); r--;) {
          l[r] = o.charCodeAt(r);
        }return new File([l], t + "." + a, { type: i });
      }function d(e) {
        for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], i = atob(t[1]), a = i.length, o = new Uint8Array(a); a--;) {
          o[a] = i.charCodeAt(a);
        }return new Blob([o], { type: n });
      }function f() {
        if (void 0 == y) {
          w = bui.guid();var e = I.from ? 'capture="' + I.from + '"' : "",
              t = '<input type="file" accept="' + L + '" name="uploadFiles" id="' + w + '" ' + e + ' style="display:none"/>';n(I.appendTo).append(t), y = n("#" + w) || n('input[name="uploadFiles"]');
        }
      }function h(t, n) {
        var n = n || "name";if (!E) return S = x.remove(t, n);if ("string" == typeof t) {
          S.length && e.array.remove(S, t, n);var i = S.length ? S[S.length - 1].data : null;return C = i, y[0].value = "", S;
        }return this;
      }function p() {
        return S = [], C = null, E ? y[0].value = "" : x.clear(), S;
      }function g() {
        return S = E ? S : x.data();
      }function v() {
        return C = E ? C : x.value();
      }function m() {
        return E ? C.name : x.value().name;
      }function b() {
        return E ? S.length - 1 : x.data().length - 1;
      }var w,
          y,
          x,
          k = { native: !0, needNative: !1, needCompress: !1, appendTo: "", quality: .8, from: "camera", width: 800, height: 800, onSuccess: null, onFail: null, mediaType: "picture" },
          I = n.extend(!0, {}, k, e.config.fileselect, i),
          T = this,
          O = { add: c, remove: h, clear: p, value: v, data: g, toFile: u, toBase64: s, resize: r, toBlob: d, currentIndex: b, currentName: m, init: a },
          C = null,
          j = null,
          S = [],
          E = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
          L = "*",
          N = !1,
          B = null,
          P = null,
          D = null,
          R = null;return a(I), O;
    };
  }(bui || {}, libs), function (e, n) {
    e.file = function (i) {
      function a(t) {
        return w = e.fileselect(t), v = o(t), O && (m = r({ root: !0, create: !0 })), this;
      }function o(t) {
        function i(e) {
          var t = "";try {
            switch (e.code) {case FileError.QUOTA_EXCEEDED_ERR:
                t = "QUOTA_EXCEEDED_ERR";break;case FileError.NOT_FOUND_ERR:
                t = "NOT_FOUND_ERR";break;case FileError.SECURITY_ERR:
                t = "SECURITY_ERR";break;case FileError.INVALID_MODIFICATION_ERR:
                t = "INVALID_MODIFICATION_ERR";break;case FileError.INVALID_STATE_ERR:
                t = "INVALID_STATE_ERR";break;default:
                t = "Unknown Error";}
          } catch (e) {}var n = { msg: t };a.reject(n);
        }var a = n.Deferred();return O ? (p = "bui.app", g = window, b = 1024 * parseInt(T.size) * 1024, window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, navigator.webkitPersistentStorage && navigator.webkitPersistentStorage.requestQuota(b, function (e) {
          window.requestFileSystem(window.PERSISTENT, e, function (e) {
            a.resolve(e);
          }, i);
        })) : y = e.native.file && e.native.file(t, { fileselect: w, module: I }) || {}, a;
      }function r(e) {
        var t = { folderName: p, root: !1, create: !1, msg: "", param: { create: !1, exclusive: !1 }, onSuccess: null, onFail: null },
            i = n.extend({}, t, e),
            a = "";if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), O) {
          var o = l(i.folderName);o = i.root ? o : p + "/" + o, v.done(function (e) {
            e.root.getDirectory(o, i.param, function (t) {
              i.onSuccess && i.onSuccess.call(I, t, e);
            }, function (e) {
              var t = { msg: a + o + " 文件夹失败" };i.onFail && i.onFail.call(I, t);
            });
          }).fail(function (e) {
            var t = { msg: "文件系统还没准备好." };i.onFail && i.onFail.call(I, t);
          });
        } else y.getFolder(i);return this;
      }function l(e) {
        var t;return "." == e[0] || "/" == e[0] || " " == e[0] ? (t = e.slice(1), l(t)) : "." != e[0] && "/" != e[0] && " " != e[0] ? e : void 0;
      }function c(e) {
        return e && e.indexOf("/") > -1 ? e.slice(e.lastIndexOf("/") + 1, e.indexOf("?") > -1 ? e.indexOf("?") : void 0) : e;
      }function s(e) {
        var t = { fileName: "", folderName: "", root: !1, create: !1, param: { create: !1, exclusive: !1 }, onSuccess: null, onFail: null },
            i = n.extend({}, t, e),
            a = "";if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), !i.fileName || i.fileName.indexOf(".") < 0) return void (i.onFail && i.onFail());if (O) {
          var o = c(i.fileName);r({ root: i.root, folderName: i.folderName, create: !0, onSuccess: function onSuccess(e, t) {
              var n = e.name == p ? e.name + "/" + o : p + "/" + e.name + "/" + o;t.root.getFile(n, i.param, function (e) {
                x = e, i.onSuccess && i.onSuccess.call(I, e, t);
              }, function (e) {
                var t = { msg: a + o + " 文件失败" };i.onFail && i.onFail.call(I, t);
              });
            }, onFail: function onFail(e) {
              i.onFail && i.onFail(e);
            } });
        } else y.getFile(i);return this;
      }function u(e) {
        var t = n.extend(!0, {}, e);return O ? r({ root: t.root, folderName: t.folderName, create: t.create, onSuccess: function onSuccess(e, n) {
            e.removeRecursively(function () {
              t.onSuccess && t.onSuccess.call(I, e, n);
            }, function (n) {
              var i = { msg: "删除 " + t.folderName + " 文件失败" };t.onFail && t.onFail.call(I, i, e);
            });
          }, onFail: function onFail(e) {
            var n = { msg: "删除 " + t.folderName + " 文件失败" };t.onFail && t.onFail.call(I, n);
          } }) : y.removeFolder(t), this;
      }function d(e) {
        var t = n.extend(!0, {}, e);return O ? s({ root: t.root, create: t.create, folderName: t.folderName, fileName: t.fileName, onSuccess: function onSuccess(e, n) {
            e.remove(function () {
              t.onSuccess && t.onSuccess.call(I, e, n);
            }, function (n) {
              var i = { msg: "删除 " + t.fileName + " 文件失败" };t.onFail && t.onFail.call(I, i, e);
            });
          }, onFail: function onFail(e) {
            var n = { msg: "删除 " + t.fileName + " 文件失败" };t.onFail && t.onFail.call(I, n);
          } }) : y.removeFile(t), this;
      }function f(t) {
        var n = t || {};if (n.url) {
          c(n.url);return O ? e.showLog("web暂不支持open方法", "bui.file.open:web") : y.open(n), this;
        }
      }function h(e) {
        return w.toBase64(e), this;
      }var p,
          g,
          v,
          m,
          b,
          w,
          y,
          x,
          k = { size: 10, native: !0, needNative: !1 },
          I = { getFolder: r, removeFolder: u, getFile: s, getFileName: c, removeFile: d, toBase64: h, open: f, init: a },
          T = I.config = n.extend(!0, {}, k, e.config.file, i),
          O = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp;return a(T), I;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.upload = function (i) {
      function a(t) {
        return x = e.loading({ display: "block", width: 30, height: 30, opacity: 0, autoClose: t.autoClose, callback: t.onMask }), k = e.fileselect.call(N, { native: t.native, needNative: t.needNative, from: t.from, mediaType: t.mediaType }), D || (T = e.native.upload && e.native.upload(t, { loading: x, fileselect: k, module: N }) || {}), t.data ? (d(t), this) : this;
      }function o(e) {
        return k.resize(e), this;
      }function r(e) {
        return k.add(e), this;
      }function l(e, t) {
        var n = u(),
            i = n.length;return i < 1 ? this : (/\d/.test(e) ? k.remove(n[e].name, t) : "string" == typeof e ? k.remove(e, t) : k.remove(n[i - 1].name, t), this);
      }function c() {
        return k.clear(), this;
      }function s(e) {
        return k.toBase64(e), this;
      }function u() {
        return k.data();
      }function d(e) {
        var t = n.extend(!0, {}, E, e);if (C = t.url, O = k.value(), B = t.showProgress, O) {
          if (B && x.show(), D) {
            var i = t.data,
                a = new FormData();a.append(t.fileKey, O);for (var o in i) {
              t.fileKey === o && a.delete(o), a.append(o, i[o]);
            }return t.data = a, p(t);
          }return T.start(t) || L;
        }
      }function f(e) {
        var t = n.extend(!0, { needFileinfo: !1 }, E, e),
            i = t[t.fileKey] || k.data();return null === t.data && (t.data = {}), i.forEach(function (e, n) {
          !function (e) {
            if (t.data[t.fileKey] = i[e].data, t.needFileinfo) for (var n in i[e]) {
              "data" !== n && (t.data[n] = i[e][n]);
            }d(t);
          }(n);
        }), L;
      }function h(e) {
        return D ? (x && x.stop(), I && I.abort(), e && e.call(N, x, I)) : T.stop(e), this;
      }function p(e) {
        var t = e.onSuccess,
            i = e.onFail;return I = n.ajax({ url: C, type: e.method, data: e.data, cache: e.cache, headers: e.headers, dataType: e.dataType, contentType: e.contentType, processData: e.processData, timeout: e.timeout, xhr: function xhr() {
            var e = n.ajaxSettings.xhr();if (g && e.upload) return e.upload.addEventListener("progress", g, !1), e;
          }, success: function success(e) {
            m(), t && t.call(N, e), L.resolve(e);
          }, error: function error(e, t, n) {
            m(), i && i.call(N, e, t), L.reject(e, t, n);
          } }), L;
      }function g(e) {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame(function () {
          if (e.lengthComputable) {
            var t = Math.round(100 * e.loaded / e.total);j = t.toString() + "%", t < 100 ? v(j) : m(), P && P.call(N, j);
          }
        });
      }function v(e) {
        return B && x && x.show({ text: e }), this;
      }function m() {
        return x && x.stop(), this;
      }function b() {
        return k.currentName();
      }function w() {
        return k.currentIndex();
      }function y(t) {
        var n = { loading: x, fileselect: k, ajax: I };return e.widget.call(n, t);
      }var x,
          k,
          I,
          T,
          O,
          C,
          j,
          S = { url: "", data: null, headers: {}, showProgress: !0, timeout: 6e4, contentType: !1, processData: !1, autoClose: !0, native: !0, needNative: !1, method: "POST", fileKey: "file", dataType: "json", mediaType: "picture", from: "picture", onProgress: null, onMask: function onMask() {
          h();
        }, onSuccess: null, onFail: null },
          E = n.extend(!0, {}, S, e.config.upload, i),
          L = n.Deferred(),
          N = { init: a, add: r, remove: l, resize: o, currentIndex: w, currentName: b, clear: c, data: u, start: d, startAll: f, stop: h, toBase64: s, widget: y },
          B = E.showProgress,
          P = E.onProgress,
          D = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp;return a(E), N;
    };
  }(window.bui || {}, window.libs), function (e, n) {
    e.download = function (i) {
      function a(t) {
        return L = t.showProgress && e.loading({ display: "block", width: 30, height: 30, opacity: 0, callback: function callback() {
            u();
          } }), m = e.file({ native: t.native, needNative: t.needNative }), C ? function (e) {
          m.getFolder({ folderName: e.folderName, create: !1, onSuccess: function onSuccess(e, t) {
              y = e.fullPath;
            }, onFail: function onFail(t) {
              m.getFolder({ folderName: e.folderName, create: !0, onSuccess: function onSuccess(e, t) {
                  y = e.fullPath;
                }, onFail: function onFail(e) {
                  E && E.call(T, e);
                } });
            } }), e.url && o(e);
        }(t) : b = e.native.download && e.native.download(t, { file: m, loading: L, module: T }) || {}, this;
      }function o(e) {
        var t = n.extend(!0, {}, O, e);w = t.needEncode ? encodeURI(t.url) : t.url, S = t.onProgress, j = t.showProgress, j && L && L.show({ text: "0%" }), x = y + "/" + (e.fileName || m.getFileName(t.url)), C ? (t.cache = !1, t.contentType = !1, t.processData = !1, v = n.ajax({ url: w, type: t.method, data: t.data, cache: t.cache, headers: t.headers, contentType: t.contentType, processData: t.processData, timeout: t.timeout, xhr: function xhr() {
            var e = n.ajaxSettings.xhr();if (d && e) return e.addEventListener("progress", d, !1), e;
          }, success: function success(n) {
            var i = e.fileName || m.getFileName(t.url);m.getFile({ fileName: i, folderName: t.folderName, create: !0, onSuccess: function onSuccess(e, n) {
                t.onSuccess && t.onSuccess.call(T, e.fullPath, n);
              } });
          }, fail: function fail(e) {
            h(), t.onFail && t.onFail.call(T, e);
          } })) : b.start(t);
      }function r(e) {
        var t = n.extend(!0, { autoDown: !0 }, O, e),
            i = e.fileName || m.getFileName(t.url);m.getFile({ fileName: i, folderName: t.folderName, onSuccess: function onSuccess(e, n) {
            t.onSuccess && t.onSuccess.call(T, e.fullPath, e, n);
          }, onFail: function onFail(e) {
            t.autoDown = o(t);
          } });
      }function l(t) {
        return t.fileName ? (t.folderName = t.folderName || O.folderName, m.removeFile(t), this) : (e.showLog("请告诉我们你要删除哪个文件, fileName "), this);
      }function c(e) {
        return e.folderName = e.folderName || O.folderName, m.removeFolder(e), this;
      }function s(e) {
        return m.open(e), this;
      }function u(e) {
        C ? (h(), v && v.abort(), N && window.cancelAnimationFrame(N)) : b.stop(), e && e.call(T, L, v);
      }function d(e) {
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, N = window.requestAnimationFrame(function () {
          if (e.lengthComputable) {
            var t = Math.round(100 * e.loaded / e.total);k = t.toString() + "%", t < 100 ? f(k) : h(), S && S.call(T, k);
          }
        });
      }function f(e) {
        j && L && L.show({ text: e });
      }function h() {
        j && L && L.stop();
      }function p(e) {
        return m.toBase64(e), this;
      }function g(t) {
        var n = { loading: L, file: m, ajax: v };return e.widget.call(n, t);
      }var v,
          m,
          b,
          w,
          y,
          x,
          k,
          I = { url: "", data: {}, headers: {}, method: "GET", showProgress: !0, timeout: 6e4, fileName: "", folderName: "download", native: !0, needNative: !1, onProgress: null, onSuccess: null, onFail: null },
          T = { open: s, getFile: r, removeFile: l, removeFolder: c, start: o, stop: u, toBase64: p, init: a, widget: g },
          O = T.config = n.extend(!0, {}, I, e.config.download, i),
          C = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
          j = O.showProgress,
          S = O.onProgress,
          E = O.onFail,
          L = null,
          N = null;return a(O), T;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.currentPlatform = "webapp", e.on("pagereadybefore", function () {
      e.platform.isWindow() || e.platform.isMac() ? window.viewport = e.viewport(40) : window.viewport = e.viewport(), e.config.init.auto && e.init();
    }), e.webready = function (n) {
      t(document).ready(function () {
        e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready");
      });
    }, e.ready = function (n) {
      e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp;var i = t.Deferred();if (e.isWebapp) t(document).ready(function () {
        e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready"), i.resolve();
      });else {
        if (void 0 === e.native.ready) return e.showLog("当前 bui.isWebapp = false; 但bui.js为webapp版本,不支持原生方法,请使用 buijs update -p xxx, 更换bui.js为对应xxx平台版本;"), e.webready(n), i;i = e.native.ready && e.native.ready(n) || i;
      }return i;
    };
  }(window.bui || {}, window.libs), function (e, t) {
    e.init = function (n) {
      var i,
          a = { id: ".bui-page", height: 0, header: "header", main: "main", footer: "footer", reduceRem: 0 };if ("object" == e.typeof(n)) i = t.extend({}, a, e.config.init, n);else {
        var o = {};o.height = n, i = t.extend({}, a, o);
      }var r = i.height || document.documentElement.clientHeight || t("body").height() || t("#bui-router").height() || t(".bui-page").height();if (!(e.obj(i.main).length < 1)) {
        try {
          var l = e.obj(i.id),
              c = i.header.indexOf("#") > -1 ? e.obj(i.header)[0] : l.children(i.header)[0],
              s = i.footer.indexOf("#") > -1 ? e.obj(i.footer)[0] : l.children(i.footer)[0],
              u = i.main.indexOf("#") > -1 ? e.obj(i.main) : l.children(i.main),
              d = c ? c.offsetHeight : 0,
              f = s ? s.offsetHeight : 0,
              h = i.reduceRem > 0 ? e.unit.remToPx(i.reduceRem) : 0,
              p = r - d - f - h;if (parseInt(p) > 0) u.height(p);else {
            var g = d + f + h + "px";e.unit.calcHeight(u, g);
          }
        } catch (t) {
          e.showLog(t, "bui.init");
        }return p;
      }
    }, window.addEventListener ? window.addEventListener("load", function (t) {
      e.trigger.call(e, "onload");
    }, !1) : window.attachEvent("onload", function (t) {
      e.trigger.call(e, "onload");
    }), window.loader = e.loader(), e.define = loader.define, e.require = loader.require, e.map = loader.map, e.import = loader.import, e.checkLoad = loader.checkLoad, e.checkDefine = loader.checkDefine, t(document).ready(function () {
      e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp, e.trigger.call(e, "pagebefore"), "function" == typeof FastClick && FastClick.attach(document.body), e.trigger.call(e, "pageinit");
    });try {
      var n = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "",
          i = n.replace(/hidden/i, "visibilitychange"),
          a = function a(t) {
        document[n] ? e.trigger.call(e, "pagehide", t) : e.trigger.call(e, "pageshow", t);
      };document.addEventListener(i, a);
    } catch (e) {}try {
      navigator.control.gesture(!1), navigator.control.longpressMenu(!1);
    } catch (e) {}
  }(window.bui || {}, window.libs);
});