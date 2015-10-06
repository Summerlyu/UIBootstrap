
window.Bugsnag = function (e, t, n) {
    function i(t) {
        var n = e.console;
        void 0 !== n && void 0 !== n.log && n.log("[Bugsnag] " + t)
    }
    function r(e, t) {
        var n = [];
        for (var i in e) if (e.hasOwnProperty(i) && null != i && null != e[i]) {
                var o = t ? t + "[" + i + "]" : i,
                    a = e[i];
                n.push("object" == typeof a ? r(a, o) : encodeURIComponent(o) + "=" + encodeURIComponent(a))
            }
        return n.join("&")
    }
    function o(e, t) {
        if (null == t) return e;
        e = e || {};
        for (var n in t) if (t.hasOwnProperty(n)) try {
                    e[n] = t[n].constructor === Object ? o(e[n], t[n]) : t[n]
            } catch (i) {
            e[n] = t[n]
        }
        return e
    }
    function a(e, t) {
        if (b.testRequest) b.testRequest(e, t);
        else {
            var n = new Image;
            n.src = e + "?" + r(t) + "&ct=img&cb=" + (new Date).getTime()
        }
    }
    function s(e) {
        for (var t = {}, n = /^data\-([\w\-]+)$/, i = e.attributes, r = 0; i.length > r; r++) {
            var o = i[r];
            if (n.test(o.nodeName)) {
                var a = o.nodeName.match(n)[1];
                t[a] = o.nodeValue
            }
        }
        return t
    }
    function l(e) {
        return y = y || s(j), b[e] || y[e.toLowerCase()]
    }
    function u(e) {
        return null != e && e.match(w) ? !0 : (i("Invalid API key '" + e + "'"), !1)
    }
    function c(t, i) {
        var r = l("apiKey");
        if (u(r)) {
            for (var s = l("releaseStage") || S, c = l("notifyReleaseStages") || M, d = !1, h = 0; c.length > h; h++) if (s === c[h]) {
                    d = !0;
                    break
                }
            if (d) {
                var f = o(l("metaData"), i),
                    p = e.location;
                a(l("endpoint") || C, {
                    notifierVersion: T,
                    apiKey: r,
                    projectRoot: l("projectRoot") || p.protocol + "//" + p.host,
                    context: l("context") || p.pathname,
                    metaData: f,
                    releaseStage: s,
                    url: e.location.href,
                    userAgent: n.userAgent,
                    language: n.language || n.userLanguage,
                    name: t.name,
                    message: t.message,
                    stacktrace: t.stacktrace,
                    file: t.file,
                    lineNumber: t.lineNumber
                })
            }
        }
    }
    function d() {
        var e, t = 10,
            n = "[anonymous]";
        try {
            throw new Error("")
        } catch (i) {
            e = h(i)
        }
        if (!e) {
            for (var r = [], o = arguments.callee.caller.caller; o && t > r.length;) {
                var a = k.test(o.toString()) ? RegExp.$1 || n : n;
                r.push(a), o = o.caller
            }
            e = r.join("\n")
        }
        return e
    }
    function h(e) {
        return e.stack || e.backtrace || e.stacktrace
    }
    function f() {
        var e = l("metrics"),
            t = l("apiKey");
        if ((e === !0 || "true" === e) && u(t)) {
            var n = "bugsnag_" + t,
                i = v(n);
            null == i && (i = m(), g(n, i, 1e3, !0)), a(l("metricsEndpoint") || _, {
                userId: i,
                apiKey: t
            })
        }
    }

    function g(n, i, r, o) {
        var a = "",
            s = "";
        if (r) {
            var l = new Date;
            l.setTime(l.getTime() + 1e3 * 60 * 60 * 24 * r), s = "; expires=" + l.toGMTString()
        }
        if (o) {
            var u = e.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
                c = u ? u[0] : "";
            a = c ? "; domain=." + c : ""
        }
        t.cookie = n + "=" + encodeURIComponent(i) + s + "; path=/" + a
    }
    function v(e) {
        var n = t.cookie.match(e + "=([^$;]+)");
        return n ? decodeURIComponent(n[1]) : null
    }
    var b = {};
    b.notifyException = function (e, t, n) {
        "string" != typeof t && (n = t), c({
            name: t || e.name,
            message: e.message || e.description,
            stacktrace: h(e) || d(),
            file: e.fileName || e.sourceURL,
            lineNumber: e.lineNumber || e.line
        }, n)
    }, b.notify = function (e, t, n) {
        c({
            name: e,
            message: t,
            stacktrace: d()
        }, n)
    };
    var y, w = /^[0-9a-f]{32}$/i,
        k = /function\s*([\w\-$]+)?\s*\(/i,
        x = "https://notify.bugsnag.com/",
        C = x + "js",
        _ = x + "metrics",
        T = "1.0.6",
        S = "production",
        M = [S],
        E = t.getElementsByTagName("script"),
        j = E[E.length - 1];
    return f(), b
}(window, document, navigator),


function (e, t) {
    function n(e) {
        var t = pt[e] = {};
        return J.each(e.split(tt), function (e, n) {
            t[n] = !0
        }), t
    }
    function i(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(gt, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : mt.test(i) ? J.parseJSON(i) : i
                } catch (o) {}
                J.data(e, n, i)
            } else i = t
        }
        return i
    }
    function r(e) {
        var t;
        for (t in e) if (("data" !== t || !J.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    function o() {
        return !1
    }
    function a() {
        return !0
    }
    function s(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function l(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    function u(e, t, n) {
        if (t = t || 0, J.isFunction(t)) return J.grep(e, function (e, i) {
                var r = !! t.call(e, i, e);
                return r === n
            });
        if (t.nodeType) return J.grep(e, function (e) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var i = J.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if ($t.test(t)) return J.filter(t, i, !n);
            t = J.filter(t, i)
        }
        return J.grep(e, function (e) {
            return J.inArray(e, t) >= 0 === n
        })
    }
    function c(e) {
        var t = zt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    
    function f(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), J.support.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(J.expando))
    }
    function p(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function m(e) {
        Xt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function g(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = bn.length; r--;) if (t = bn[r] + n, t in e) return t;
        return i
    }
    function v(e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
    }
    function b(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (r[o] = J._data(n, "olddisplay"), t ? (r[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (r[o] = J._data(n, "olddisplay", x(n.nodeName)))) : (i = nn(n, "display"), r[o] || "none" === i || J._data(n, "olddisplay", i)));
        for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
        return e
    }
    function y(e, t, n) {
        var i = dn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function w(e, t, n, i) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += J.css(e, n + vn[r], !0)), i ? ("content" === n && (o -= parseFloat(nn(e, "padding" + vn[r])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + vn[r] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + vn[r])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + vn[r] + "Width")) || 0));
        return o
    }
    function k(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = !0,
            o = J.support.boxSizing && "border-box" === J.css(e, "boxSizing");
        if (0 >= i || null == i) {
            if (i = nn(e, t), (0 > i || null == i) && (i = e.style[t]), hn.test(i)) return i;
            r = o && (J.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + w(e, t, n || (o ? "border" : "content"), r) + "px"
    }
   
   
    function _(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r, o, a = t.toLowerCase().split(tt),
                s = 0,
                l = a.length;
            if (J.isFunction(n)) for (; l > s; s++) i = a[s], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[o ? "unshift" : "push"](n)
        }
    }
    function T(e, n, i, r, o, a) {
        o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
        for (var s, l = e[o], u = 0, c = l ? l.length : 0, d = e === On; c > u && (d || !s); u++) s = l[u](n, i, r), "string" == typeof s && (!d || a[s] ? s = t : (n.dataTypes.unshift(s), s = T(e, n, i, r, s, a)));
        return !d && s || a["*"] || (s = T(e, n, i, r, "*", a)), s
    }
    function S(e, n) {
        var i, r, o = J.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        r && J.extend(!0, e, r)
    }
  
    
    function j() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function L() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function A() {
        return setTimeout(function () {
            Kn = t
        }, 0), Kn = J.now()
    }
    function F(e, t) {
        J.each(t, function (t, n) {
            for (var i = (ei[t] || []).concat(ei["*"]), r = 0, o = i.length; o > r; r++) if (i[r].call(e, t, n)) return
        })
    }
    function N(e, t, n) {
        var i, r = 0,
            o = Zn.length,
            a = J.Deferred().always(function () {
                delete s.elem
            }),
            s = function () {
                for (var t = Kn || A(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, o = 0, s = l.tweens.length; s > o; o++) l.tweens[o].run(r);
                return a.notifyWith(e, [l, r, n]), 1 > r && s ? n : (a.resolveWith(e, [l]), !1)
            }, l = a.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Kn || A(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = J.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function (t) {
                    for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            u = l.props;
        for (P(u, l.opts.specialEasing); o > r; r++) if (i = Zn[r].call(l, e, u, l.opts)) return i;
        return F(l, u), J.isFunction(l.opts.start) && l.opts.start.call(e, l), J.fx.timer(J.extend(s, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function P(e, t) {
        var n, i, r, o, a;
        for (n in e) if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = J.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }
    function I(e, t, n) {
        var i, r, o, a, s, l, u, c, d, h = this,
            f = e.style,
            p = {}, m = [],
            g = e.nodeType && v(e);
        n.queue || (c = J._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, d = c.empty.fire, c.empty.fire = function () {
            c.unqueued || d()
        }), c.unqueued++, h.always(function () {
            h.always(function () {
                c.unqueued--, J.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === J.css(e, "display") && "none" === J.css(e, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== x(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", J.support.shrinkWrapBlocks || h.done(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t) if (o = t[i], Qn.exec(o)) {
                if (delete t[i], l = l || "toggle" === o, o === (g ? "hide" : "show")) continue;
                m.push(i)
            }
        if (a = m.length) {
            s = J._data(e, "fxshow") || J._data(e, "fxshow", {}), "hidden" in s && (g = s.hidden), l && (s.hidden = !g), g ? J(e).show() : h.done(function () {
                J(e).hide()
            }), h.done(function () {
                var t;
                J.removeData(e, "fxshow", !0);
                for (t in p) J.style(e, t, p[t])
            });
            for (i = 0; a > i; i++) r = m[i], u = h.createTween(r, g ? s[r] : 0), p[r] = s[r] || J.style(e, r), r in s || (s[r] = u.start, g && (u.end = u.start, u.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function $(e, t, n, i, r) {
        return new $.prototype.init(e, t, n, i, r)
    }
    function O(e, t) {
        var n, i = {
                height: e
            }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = vn[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function D(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var z, W, H = e.document,
        q = e.location,
        B = e.navigator,
        R = e.jQuery,
        V = e.$,
        U = Array.prototype.push,
        G = Array.prototype.slice,
        K = Array.prototype.indexOf,
        X = Object.prototype.toString,
        Q = Object.prototype.hasOwnProperty,
        Y = String.prototype.trim,
        J = function (e, t) {
            return new J.fn.init(e, t, z)
        }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        et = /\S/,
        tt = /\s+/,
        nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ot = /^[\],:{}\s]*$/,
        at = /(?:^|:|,)(?:\s*\[)+/g,
        st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ut = /^-ms-/,
        ct = /-([\da-z])/gi,
        dt = function (e, t) {
            return (t + "").toUpperCase()
        }, ht = function () {
            H.addEventListener ? (H.removeEventListener("DOMContentLoaded", ht, !1), J.ready()) : "complete" === H.readyState && (H.detachEvent("onreadystatechange", ht), J.ready())
        }, ft = {};
    J.fn = J.prototype = {
        constructor: J,
        init: function (e, n, i) {
            var r, o, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : it.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) return n = n instanceof J ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : H, e = J.parseHTML(r[1], a, !0), rt.test(r[1]) && J.isPlainObject(n) && this.attr.call(e, n, !0), J.merge(this, e);
                if (o = H.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2]) return i.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = H, this.selector = e, this
            }
            return J.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return G.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, n) {
            var i = J.merge(this.constructor(), e);
            return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
        },
        each: function (e, t) {
            return J.each(this, e, t)
        },
        ready: function (e) {
            return J.ready.promise().done(e), this
        },
        eq: function (e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
        },
        map: function (e) {
            return this.pushStack(J.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    }, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function () {
        var e, n, i, r, o, a, s = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || J.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (e = arguments[l])) for (n in e) i = s[n], r = e[n], s !== r && (c && r && (J.isPlainObject(r) || (o = J.isArray(r))) ? (o ? (o = !1, a = i && J.isArray(i) ? i : []) : a = i && J.isPlainObject(i) ? i : {}, s[n] = J.extend(c, a, r)) : r !== t && (s[n] = r));
        return s
    }, J.extend({
        noConflict: function (t) {
            return e.$ === J && (e.$ = V), t && e.jQuery === J && (e.jQuery = R), J
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--J.readyWait : !J.isReady) {
                if (!H.body) return setTimeout(J.ready, 1);
                J.isReady = !0, e !== !0 && --J.readyWait > 0 || (W.resolveWith(H, [J]), J.fn.trigger && J(H).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === J.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? String(e) : ft[X.call(e)] || "object"
        },
        isPlainObject: function (e) {
            if (!e || "object" !== J.type(e) || e.nodeType || J.isWindow(e)) return !1;
            try {
                if (e.constructor && !Q.call(e, "constructor") && !Q.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var i;
            for (i in e);
            return i === t || Q.call(e, i)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            var i;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || H, (i = rt.exec(e)) ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, n ? null : []), J.merge([], (i.cacheable ? J.clone(i.fragment) : i.fragment).childNodes))) : null
        },
        parseJSON: function (t) {
            return t && "string" == typeof t ? (t = J.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + t)() : (J.error("Invalid JSON: " + t), void 0)) : null
        },
        parseXML: function (n) {
            var i, r;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (o) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + n), i
        },
        noop: function () {},
        globalEval: function (t) {
            t && et.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ut, "ms-").replace(ct, dt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, n, i) {
            var r, o = 0,
                a = e.length,
                s = a === t || J.isFunction(e);
            if (i) if (s) {
                    for (r in e) if (n.apply(e[r], i) === !1) break
                } else for (; a > o && n.apply(e[o++], i) !== !1;);
                else if (s) {
                for (r in e) if (n.call(e[r], r, e[r]) === !1) break
            } else for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
            return e
        },
        trim: Y && !Y.call("﻿ ") ? function (e) {
            return null == e ? "" : Y.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(nt, "")
        },
        makeArray: function (e, t) {
            var n, i = t || [];
            return null != e && (n = J.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || J.isWindow(e) ? U.call(i, e) : J.merge(i, e)), i
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (K) return K.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var i = n.length,
                r = e.length,
                o = 0;
            if ("number" == typeof i) for (; i > o; o++) e[r++] = n[o];
            else for (; n[o] !== t;) e[r++] = n[o++];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            var i, r = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) i = !! t(e[o], o), n !== i && r.push(e[o]);
            return r
        },
        map: function (e, n, i) {
            var r, o, a = [],
                s = 0,
                l = e.length,
                u = e instanceof J || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || J.isArray(e));
            if (u) for (; l > s; s++) r = n(e[s], s, i), null != r && (a[a.length] = r);
            else for (o in e) r = n(e[o], o, i), null != r && (a[a.length] = r);
            return a.concat.apply([], a)
        },
        guid: 1,
        proxy: function (e, n) {
            var i, r, o;
            return "string" == typeof n && (i = e[n], n = e, e = i), J.isFunction(e) ? (r = G.call(arguments, 2), o = function () {
                return e.apply(n, r.concat(G.call(arguments)))
            }, o.guid = e.guid = e.guid || J.guid++, o) : t
        },
        access: function (e, n, i, r, o, a, s) {
            var l, u = null == i,
                c = 0,
                d = e.length;
            if (i && "object" == typeof i) {
                for (c in i) J.access(e, n, c, i[c], 1, a, r);
                o = 1
            } else if (r !== t) {
                if (l = s === t && J.isFunction(r), u && (l ? (l = n, n = function (e, t, n) {
                    return l.call(J(e), n)
                }) : (n.call(e, r), n = null)), n) for (; d > c; c++) n(e[c], i, l ? r.call(e[c], c, n(e[c], i)) : r, s);
                o = 1
            }
            return o ? e : u ? n.call(e) : d ? n(e[0], i) : a
        },
        now: function () {
            return (new Date).getTime()
        }
    }), J.ready.promise = function (t) {
        if (!W) if (W = J.Deferred(), "complete" === H.readyState) setTimeout(J.ready, 1);
            else if (H.addEventListener) H.addEventListener("DOMContentLoaded", ht, !1), e.addEventListener("load", J.ready, !1);
        else {
            H.attachEvent("onreadystatechange", ht), e.attachEvent("onload", J.ready);
            var n = !1;
            try {
                n = null == e.frameElement && H.documentElement
            } catch (i) {}
            n && n.doScroll && function r() {
                if (!J.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    J.ready()
                }
            }()
        }
        return W.promise(t)
    }, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        ft["[object " + t + "]"] = t.toLowerCase()
    }), z = J(H);
    var pt = {};
    J.Callbacks = function (e) {
        e = "string" == typeof e ? pt[e] || n(e) : J.extend({}, e);
        var i, r, o, a, s, l, u = [],
            c = !e.once && [],
            d = function (t) {
                for (i = e.memory && t, r = !0, l = a || 0, a = 0, s = u.length, o = !0; u && s > l; l++) if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                o = !1, u && (c ? c.length && d(c.shift()) : i ? u = [] : h.disable())
            }, h = {
                add: function () {
                    if (u) {
                        var t = u.length;
                        (function n(t) {
                            J.each(t, function (t, i) {
                                var r = J.type(i);
                                "function" === r ? e.unique && h.has(i) || u.push(i) : i && i.length && "string" !== r && n(i)
                            })
                        })(arguments), o ? s = u.length : i && (a = t, d(i))
                    }
                    return this
                },
                remove: function () {
                    return u && J.each(arguments, function (e, t) {
                        for (var n;
                        (n = J.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (s >= n && s--, l >= n && l--)
                    }), this
                },
                has: function (e) {
                    return J.inArray(e, u) > -1
                },
                empty: function () {
                    return u = [], this
                },
                disable: function () {
                    return u = c = i = t, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return c = t, i || h.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !u || r && !c || (o ? c.push(t) : d(t)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return h
    }, J.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                ["notify", "progress", J.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return J.Deferred(function (n) {
                            J.each(t, function (t, i) {
                                var o = i[0],
                                    a = e[t];
                                r[i[1]](J.isFunction(a) ? function () {
                                    var e = a.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [e])
                                } : n[o])
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? J.extend(e, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, J.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = a.fire, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, n, i, r = 0,
                o = G.call(arguments),
                a = o.length,
                s = 1 !== a || e && J.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : J.Deferred(),
                u = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    }), J.support = function () {
        var t, n, i, r, o, a, s, l, u, c, d, h = H.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), i = h.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
        r = H.createElement("select"), o = r.appendChild(H.createElement("option")), a = h.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !! h.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !! i.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== h.className,
            enctype: !! H.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === H.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete h.test
        } catch (f) {
            t.deleteExpando = !1
        }
        if (!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", d = function () {
            t.noCloneEvent = !1
        }), h.cloneNode(!0).fireEvent("onclick"), h.detachEvent("onclick", d)), a = H.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), h.appendChild(a), s = H.createDocumentFragment(), s.appendChild(h.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(h), h.attachEvent) for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) l = "on" + u, c = l in h, c || (h.setAttribute(l, "return;"), c = "function" == typeof h[l]), t[u + "Bubbles"] = c;
        return J(function () {
            var n, i, r, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                s = H.getElementsByTagName("body")[0];
            s && (n = H.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), i = H.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, o = H.createElement("div"), o.style.cssText = i.style.cssText = a, o.style.marginRight = o.style.width = "0", i.style.width = "1px", i.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = i = r = o = null)
        }), s.removeChild(h), n = i = r = o = a = s = h = null, t
    }();
    var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        gt = /([A-Z])/g;
    J.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? J.cache[e[J.expando]] : e[J.expando], !! e && !r(e)
        },
        data: function (e, n, i, r) {
            if (J.acceptData(e)) {
                var o, a, s = J.expando,
                    l = "string" == typeof n,
                    u = e.nodeType,
                    c = u ? J.cache : e,
                    d = u ? e[s] : e[s] && s;
                if (d && c[d] && (r || c[d].data) || !l || i !== t) return d || (u ? e[s] = d = J.deletedIds.pop() || J.guid++ : d = s), c[d] || (c[d] = {}, u || (c[d].toJSON = J.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[d] = J.extend(c[d], n) : c[d].data = J.extend(c[d].data, n)), o = c[d], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[J.camelCase(n)] = i), l ? (a = o[n], null == a && (a = o[J.camelCase(n)])) : a = o, a
            }
        },
        removeData: function (e, t, n) {
            if (J.acceptData(e)) {
                var i, o, a, s = e.nodeType,
                    l = s ? J.cache : e,
                    u = s ? e[J.expando] : J.expando;
                if (l[u]) {
                    if (t && (i = n ? l[u] : l[u].data)) {
                        J.isArray(t) || (t in i ? t = [t] : (t = J.camelCase(t), t = t in i ? [t] : t.split(" ")));
                        for (o = 0, a = t.length; a > o; o++) delete i[t[o]];
                        if (!(n ? r : J.isEmptyObject)(i)) return
                    }(n || (delete l[u].data, r(l[u]))) && (s ? J.cleanData([e], !0) : J.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
                }
            }
        },
        _data: function (e, t, n) {
            return J.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && J.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), J.fn.extend({
        data: function (e, n) {
            var r, o, a, s, l, u = this[0],
                c = 0,
                d = null;
            if (e === t) {
                if (this.length && (d = J.data(u), 1 === u.nodeType && !J._data(u, "parsedAttrs"))) {
                    for (a = u.attributes, l = a.length; l > c; c++) s = a[c].name, s.indexOf("data-") || (s = J.camelCase(s.substring(5)), i(u, s, d[s]));
                    J._data(u, "parsedAttrs", !0)
                }
                return d
            }
            return "object" == typeof e ? this.each(function () {
                J.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", o = r[1] + "!", J.access(this, function (n) {
                return n === t ? (d = this.triggerHandler("getData" + o, [r[0]]), d === t && u && (d = J.data(u, e), d = i(u, e, d)), d === t && r[1] ? this.data(r[0]) : d) : (r[1] = n, this.each(function () {
                    var t = J(this);
                    t.triggerHandler("setData" + o, r), J.data(this, e, n), t.triggerHandler("changeData" + o, r)
                }), void 0)
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                J.removeData(this, e)
            })
        }
    }), J.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = J._data(e, t), n && (!i || J.isArray(n) ? i = J._data(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = J.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = J._queueHooks(e, t),
                a = function () {
                    J.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J._data(e, n) || J._data(e, n, {
                empty: J.Callbacks("once memory").add(function () {
                    J.removeData(e, t + "queue", !0), J.removeData(e, n, !0)
                })
            })
        }
    }), J.fn.extend({
        queue: function (e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? J.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = J.queue(this, e, n);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && J.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                J.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var i, r = 1,
                o = J.Deferred(),
                a = this,
                s = this.length,
                l = function () {
                    --r || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = J._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var vt, bt, yt, wt = /[\t\r\n]/g,
        kt = /\r/g,
        xt = /^(?:button|input)$/i,
        Ct = /^(?:button|input|object|select|textarea)$/i,
        _t = /^a(?:rea|)$/i,
        Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        St = J.support.getSetAttribute;
    J.fn.extend({
        attr: function (e, t) {
            return J.access(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                J.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return J.access(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = J.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, i, r, o, a, s;
            if (J.isFunction(e)) return this.each(function (t) {
                    J(this).addClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e) for (t = e.split(tt), n = 0, i = this.length; i > n; n++) if (r = this[n], 1 === r.nodeType) if (r.className || 1 !== t.length) {
                            for (o = " " + r.className + " ", a = 0, s = t.length; s > a; a++) 0 > o.indexOf(" " + t[a] + " ") && (o += t[a] + " ");
                            r.className = J.trim(o)
                        } else r.className = e;
            return this
        },
        removeClass: function (e) {
            var n, i, r, o, a, s, l;
            if (J.isFunction(e)) return this.each(function (t) {
                    J(this).removeClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e || e === t) for (n = (e || "").split(tt), s = 0, l = this.length; l > s; s++) if (r = this[s], 1 === r.nodeType && r.className) {
                        for (i = (" " + r.className + " ").replace(wt, " "), o = 0, a = n.length; a > o; o++) for (; i.indexOf(" " + n[o] + " ") >= 0;) i = i.replace(" " + n[o] + " ", " ");
                        r.className = e ? J.trim(i) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                i = "boolean" == typeof t;
            return J.isFunction(e) ? this.each(function (n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) for (var r, o = 0, a = J(this), s = t, l = e.split(tt); r = l[o++];) s = i ? s : !a.hasClass(r), a[s ? "addClass" : "removeClass"](r);
                else("undefined" === n || "boolean" === n) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : J._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, i, r, o = this[0]; {
                if (arguments.length) return r = J.isFunction(e), this.each(function (i) {
                        var o, a = J(this);
                        1 === this.nodeType && (o = r ? e.call(this, i, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), n = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                if (o) return n = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(kt, "") : null == i ? "" : i)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++) if (n = i[l], !(!n.selected && l !== r || (J.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    var n = J.makeArray(t);
                    return J(e).find("option").each(function () {
                        this.selected = J.inArray(J(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function (e, n, i, r) {
            var o, a, s, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return r && J.isFunction(J.fn[n]) ? J(e)[n](i) : "undefined" == typeof e.getAttribute ? J.prop(e, n, i) : (s = 1 !== l || !J.isXMLDoc(e), s && (n = n.toLowerCase(), a = J.attrHooks[n] || (Tt.test(n) ? bt : vt)), i !== t ? null === i ? (J.removeAttr(e, n), void 0) : a && "set" in a && s && (o = a.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
        },
        removeAttr: function (e, t) {
            var n, i, r, o, a = 0;
            if (t && 1 === e.nodeType) for (i = t.split(tt); i.length > a; a++) r = i[a], r && (n = J.propFix[r] || r, o = Tt.test(r), o || J.attr(e, r, ""), e.removeAttribute(St ? r : n), o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (xt.test(e.nodeName) && e.parentNode) J.error("type property can't be changed");
                    else if (!J.support.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return vt && J.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    return vt && J.nodeName(e, "button") ? vt.set(e, t, n) : (e.value = t, void 0)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, i) {
            var r, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !J.isXMLDoc(e), a && (n = J.propFix[n] || n, o = J.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Ct.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), bt = {
        get: function (e, n) {
            var i, r = J.prop(e, n);
            return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var i;
            return t === !1 ? J.removeAttr(e, n) : (i = J.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, St || (yt = {
        name: !0,
        id: !0,
        coords: !0
    }, vt = J.valHooks.button = {
        get: function (e, n) {
            var i;
            return i = e.getAttributeNode(n), i && (yt[n] ? "" !== i.value : i.specified) ? i.value : t
        },
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = H.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
        }
    }, J.each(["width", "height"], function (e, t) {
        J.attrHooks[t] = J.extend(J.attrHooks[t], {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), J.attrHooks.contenteditable = {
        get: vt.get,
        set: function (e, t, n) {
            "" === t && (t = "false"), vt.set(e, t, n)
        }
    }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function (e, n) {
        J.attrHooks[n] = J.extend(J.attrHooks[n], {
            get: function (e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }), J.support.style || (J.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function () {
        J.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), J.each(["radio", "checkbox"], function () {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function (e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Mt = /^(?:textarea|input|select)$/i,
        Et = /^([^\.]*|)(?:\.(.+)|)$/,
        jt = /(?:^|\s)hover(\.\S+|)\b/,
        Lt = /^key/,
        At = /^(?:mouse|contextmenu)|click/,
        Ft = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function (e) {
            return J.event.special.hover ? e : e.replace(jt, "mouseenter$1 mouseleave$1")
        };
    J.event = {
        add: function (e, n, i, r, o) {
            var a, s, l, u, c, d, h, f, p, m, g;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (a = J._data(e))) {
                for (i.handler && (p = i, i = p.handler, o = p.selector), i.guid || (i.guid = J.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function (e) {
                    return "undefined" == typeof J || e && J.event.triggered === e.type ? t : J.event.dispatch.apply(s.elem, arguments)
                }, s.elem = e), n = J.trim(Nt(n)).split(" "), u = 0; n.length > u; u++) c = Et.exec(n[u]) || [], d = c[1], h = (c[2] || "").split(".").sort(), g = J.event.special[d] || {}, d = (o ? g.delegateType : g.bindType) || d, g = J.event.special[d] || {}, f = J.extend({
                        type: d,
                        origType: c[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && J.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, p), m = l[d], m || (m = l[d] = [], m.delegateCount = 0, g.setup && g.setup.call(e, r, h, s) !== !1 || (e.addEventListener ? e.addEventListener(d, s, !1) : e.attachEvent && e.attachEvent("on" + d, s))), g.add && (g.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), o ? m.splice(m.delegateCount++, 0, f) : m.push(f), J.event.global[d] = !0;
                e = null
            }
        },
        global: {},
        remove: function (e, t, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, m, g = J.hasData(e) && J._data(e);
            if (g && (h = g.events)) {
                for (t = J.trim(Nt(t || "")).split(" "), o = 0; t.length > o; o++) if (a = Et.exec(t[o]) || [], s = l = a[1], u = a[2], s) {
                        for (f = J.event.special[s] || {}, s = (i ? f.delegateType : f.bindType) || s, p = h[s] || [], c = p.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; p.length > d; d++) m = p[d], !r && l !== m.origType || n && n.guid !== m.guid || u && !u.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (p.splice(d--, 1), m.selector && p.delegateCount--, f.remove && f.remove.call(e, m));
                        0 === p.length && c !== p.length && (f.teardown && f.teardown.call(e, u, g.handle) !== !1 || J.removeEvent(e, s, g.handle), delete h[s])
                    } else for (s in h) J.event.remove(e, s + t[o], n, i, !0);
                J.isEmptyObject(h) && (delete g.handle, J.removeData(e, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, i, r, o) {
            if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                var a, s, l, u, c, d, h, f, p, m, g = n.type || n,
                    v = [];
                if (!Ft.test(g + J.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), r && !J.event.customEvent[g] || J.event.global[g])) if (n = "object" == typeof n ? n[J.expando] ? n : new J.Event(g, n) : new J.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0 > g.indexOf(":") ? "on" + g : "", r) {
                        if (n.result = t, n.target || (n.target = r), i = null != i ? J.makeArray(i) : [], i.unshift(n), h = J.event.special[g] || {}, !h.trigger || h.trigger.apply(r, i) !== !1) {
                            if (p = [
                                [r, h.bindType || g]
                            ], !o && !h.noBubble && !J.isWindow(r)) {
                                for (m = h.delegateType || g, u = Ft.test(m + g) ? r : r.parentNode, c = r; u; u = u.parentNode) p.push([u, m]), c = u;
                                c === (r.ownerDocument || H) && p.push([c.defaultView || c.parentWindow || e, m])
                            }
                            for (l = 0; p.length > l && !n.isPropagationStopped(); l++) u = p[l][0], n.type = p[l][1], f = (J._data(u, "events") || {})[n.type] && J._data(u, "handle"), f && f.apply(u, i), f = d && u[d], f && J.acceptData(u) && f.apply && f.apply(u, i) === !1 && n.preventDefault();
                            return n.type = g, o || n.isDefaultPrevented() || h._default && h._default.apply(r.ownerDocument, i) !== !1 || "click" === g && J.nodeName(r, "a") || !J.acceptData(r) || d && r[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !J.isWindow(r) && (c = r[d], c && (r[d] = null), J.event.triggered = g, r[g](), J.event.triggered = t, c && (r[d] = c)), n.result
                        }
                    } else {
                        a = J.cache;
                        for (l in a) a[l].events && a[l].events[g] && J.event.trigger(n, i, a[l].handle.elem, !0)
                    }
            }
        },
        dispatch: function (n) {
            n = J.event.fix(n || e.event);
            var i, r, o, a, s, l, u, c, d, h = (J._data(this, "events") || {})[n.type] || [],
                f = h.delegateCount,
                p = G.call(arguments),
                m = !n.exclusive && !n.namespace,
                g = J.event.special[n.type] || {}, v = [];
            if (p[0] = n, n.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, n) !== !1) {
                if (f && (!n.button || "click" !== n.type)) for (o = n.target; o != this; o = o.parentNode || this) if (o.disabled !== !0 || "click" !== n.type) {
                            for (s = {}, u = [], i = 0; f > i; i++) c = h[i], d = c.selector, s[d] === t && (s[d] = c.needsContext ? J(d, this).index(o) >= 0 : J.find(d, this, null, [o]).length), s[d] && u.push(c);
                            u.length && v.push({
                                elem: o,
                                matches: u
                            })
                        }
                for (h.length > f && v.push({
                    elem: this,
                    matches: h.slice(f)
                }), i = 0; v.length > i && !n.isPropagationStopped(); i++) for (l = v[i], n.currentTarget = l.elem, r = 0; l.matches.length > r && !n.isImmediatePropagationStopped(); r++) c = l.matches[r], (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((J.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, p), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                return g.postDispatch && g.postDispatch.call(this, n), n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var i, r, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || H, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[J.expando]) return e;
            var t, n, i = e,
                r = J.event.fixHooks[e.type] || {}, o = r.props ? this.props.concat(r.props) : this.props;
            for (e = J.Event(i), t = o.length; t;) n = o[--t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || H), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, r.filter ? r.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    J.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, J.event.handle = J.event.dispatch, J.removeEvent = H.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, J.Event = function (e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(e, t)
    }, J.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = a;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = a;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = a, this.stopPropagation()
        },
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return o.selector, (!r || r !== i && !J.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), J.support.submitBubbles || (J.event.special.submit = {
        setup: function () {
            return J.nodeName(this, "form") ? !1 : (J.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    i = J.nodeName(n, "input") || J.nodeName(n, "button") ? n.form : t;
                i && !J._data(i, "_submit_attached") && (J.event.add(i, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), J._data(i, "_submit_attached", !0))
            }), void 0)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && J.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return J.nodeName(this, "form") ? !1 : (J.event.remove(this, "._submit"), void 0)
        }
    }), J.support.changeBubbles || (J.event.special.change = {
        setup: function () {
            return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), J.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0)
            })), !1) : (J.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Mt.test(t.nodeName) && !J._data(t, "_change_attached") && (J.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || J.event.simulate("change", this.parentNode, e, !0)
                }), J._data(t, "_change_attached", !0))
            }), void 0)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return J.event.remove(this, "._change"), !Mt.test(this.nodeName)
        }
    }), J.support.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            i = function (e) {
                J.event.simulate(t, e.target, J.event.fix(e), !0)
            };
        J.event.special[t] = {
            setup: function () {
                0 === n++ && H.addEventListener(e, i, !0)
            },
            teardown: function () {
                0 === --n && H.removeEventListener(e, i, !0)
            }
        }
    }), J.fn.extend({
        on: function (e, n, i, r, a) {
            var s, l;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (l in e) this.on(l, n, i, e[l], a);
                return this
            }
            if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = o;
            else if (!r) return this;
            return 1 === a && (s = r, r = function (e) {
                return J().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = J.guid++)), this.each(function () {
                J.event.add(this, e, r, i, n)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, n, i) {
            var r, a;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, J(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (a in e) this.off(a, n, e[a]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = o), this.each(function () {
                J.event.remove(this, e, i, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return J(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return J(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            return this[0] ? J.event.trigger(e, t, this[0], !0) : void 0
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || J.guid++,
                i = 0,
                r = function (n) {
                    var r = (J._data(this, "lastToggle" + e.guid) || 0) % i;
                    return J._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
                };
            for (r.guid = n; t.length > i;) t[i++].guid = n;
            return this.click(r)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        J.fn[t] = function (e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Lt.test(t) && (J.event.fixHooks[t] = J.event.keyHooks), At.test(t) && (J.event.fixHooks[t] = J.event.mouseHooks)
    }),


    function (e, t) {
        function n(e, t, n, i) {
            n = n || [], t = t || A;
            var r, o, a, s, l = t.nodeType;
            if (!e || "string" != typeof e) return n;
            if (1 !== l && 9 !== l) return [];
            if (a = k(t), !a && !i && (r = nt.exec(e))) if (s = r[1]) {
                    if (9 === l) {
                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && x(t, o) && o.id === s) return n.push(o), n
                } else {
                    if (r[2]) return $.apply(n, O.call(t.getElementsByTagName(e), 0)), n;
                    if ((s = r[3]) && ht && t.getElementsByClassName) return $.apply(n, O.call(t.getElementsByClassName(s), 0)), n
                }
            return m(e.replace(Y, "$1"), t, n, i, a)
        }
  
        function u(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }
        function c(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
            return a
        }
     
        function h(e) {
            for (var t, n, i, r = e.length, o = y.relative[e[0].type], a = o || y.relative[" "], s = o ? 1 : 0, c = l(function (e) {
                    return e === t
                }, a, !0), f = l(function (e) {
                    return D.call(t, e) > -1
                }, a, !0), p = [
                    function (e, n, i) {
                        return !o && (i || n !== S) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i))
                    }
                ]; r > s; s++) if (n = y.relative[e[s].type]) p = [l(u(p), n)];
                else {
                    if (n = y.filter[e[s].type].apply(null, e[s].matches), n[j]) {
                        for (i = ++s; r > i && !y.relative[e[i].type]; i++);
                        return d(s > 1 && u(p), s > 1 && e.slice(0, s - 1).join("").replace(Y, "$1"), n, i > s && h(e.slice(s, i)), r > i && h(e = e.slice(i)), r > i && e.join(""))
                    }
                    p.push(n)
                }
            return u(p)
        }
        function f(e, t) {
            var i = t.length > 0,
                r = e.length > 0,
                o = function (a, s, l, u, d) {
                    var h, f, p, m = [],
                        g = 0,
                        b = "0",
                        w = a && [],
                        k = null != d,
                        x = S,
                        C = a || r && y.find.TAG("*", d && s.parentNode || s),
                        _ = N += null == x ? 1 : Math.E;
                    for (k && (S = s !== A && s, v = o.el); null != (h = C[b]); b++) {
                        if (r && h) {
                            for (f = 0; p = e[f]; f++) if (p(h, s, l)) {
                                    u.push(h);
                                    break
                                }
                            k && (N = _, v = ++o.el)
                        }
                        i && ((h = !p && h) && g--, a && w.push(h))
                    }
                    if (g += b, i && b !== g) {
                        for (f = 0; p = t[f]; f++) p(w, m, s, l);
                        if (a) {
                            if (g > 0) for (; b--;) w[b] || m[b] || (m[b] = I.call(u));
                            m = c(m)
                        }
                        $.apply(u, m), k && !a && m.length > 0 && g + t.length > 1 && n.uniqueSort(u)
                    }
                    return k && (N = _, S = x), w
                };
            return o.el = 0, i ? z(o) : o
        }

        function m(e, t, n, i, r) {
            var o, a, l, u, c, d = s(e);
            if (d.length, !i && 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !r && y.relative[a[1].type]) {
                    if (t = y.find.ID(l.matches[0].replace(at, ""), t, r)[0], !t) return n;
                    e = e.slice(a.shift().length)
                }
                for (o = st.POS.test(e) ? -1 : a.length - 1; o >= 0 && (l = a[o], !y.relative[u = l.type]); o--) if ((c = y.find[u]) && (i = c(l.matches[0].replace(at, ""), it.test(a[0].type) && t.parentNode || t, r))) {
                        if (a.splice(o, 1), e = i.length && a.join(""), !e) return $.apply(n, O.call(i, 0)), n;
                        break
                    }
            }
            return C(e, d)(i, t, r, n, it.test(e)), n
        }
        function g() {}
        var v, b, y, w, k, x, C, _, T, S, M = !0,
            E = "undefined",
            j = ("sizcache" + Math.random()).replace(".", ""),
            L = String,
            A = e.document,
            F = A.documentElement,
            N = 0,
            P = 0,
            I = [].pop,
            $ = [].push,
            O = [].slice,
            D = [].indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                return -1
            }, z = function (e, t) {
                return e[j] = null == t || t, e
            }, W = function () {
                var e = {}, t = [];
                return z(function (n, i) {
                    return t.push(n) > y.cacheLength && delete e[t.shift()], e[n + " "] = i
                }, e)
            }, H = W(),
            q = W(),
            B = W(),
            R = "[\\x20\\t\\r\\n\\f]",
            V = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            U = V.replace("w", "w#"),
            G = "([*^$|!~]?=)",
            K = "\\[" + R + "*(" + V + ")" + R + "*(?:" + G + R + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + R + "*\\]",
            X = ":(" + V + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + K + ")|[^:]|\\\\.)*|.*))\\)|)",
            Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)",
            Y = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            Z = new RegExp("^" + R + "*," + R + "*"),
            et = new RegExp("^" + R + "*([\\x20\\t\\r\\n\\f>+~])" + R + "*"),
            tt = new RegExp(X),
            nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            it = /[\x20\t\r\n\f]*[+~]/,
            rt = /h\d/i,
            ot = /input|select|textarea|button/i,
            at = /\\(?!\\)/g,
            st = {
                ID: new RegExp("^#(" + V + ")"),
                CLASS: new RegExp("^\\.(" + V + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + V + ")['\"]?\\]"),
                TAG: new RegExp("^(" + V.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + K),
                PSEUDO: new RegExp("^" + X),
                POS: new RegExp(Q, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|" + Q, "i")
            }, lt = function (e) {
                var t = A.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }, ut = lt(function (e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }),
            ct = lt(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== E && "#" === e.firstChild.getAttribute("href")
            }),
            dt = lt(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }),
            ht = lt(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }),
            ft = lt(function (e) {
                e.id = j + 0, e.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>", F.insertBefore(e, F.firstChild);
                var t = A.getElementsByName && A.getElementsByName(j).length === 2 + A.getElementsByName(j + 0).length;
                return b = !A.getElementById(j), F.removeChild(e), t
            });
        try {
            O.call(F.childNodes, 0)[0].nodeType
        } catch (pt) {
            O = function (e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n
            }
        }
        n.matches = function (e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function (e, t) {
            return n(t, null, null, [e]).length > 0
        }, w = n.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i]; i++) n += w(t);
            return n
        }, k = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, x = n.contains = F.contains ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                i = t && t.parentNode;
            return e === i || !! (i && 1 === i.nodeType && n.contains && n.contains(i))
        } : F.compareDocumentPosition ? function (e, t) {
            return t && !! (16 & e.compareDocumentPosition(t))
        } : function (e, t) {
            for (; t = t.parentNode;) if (t === e) return !0;
            return !1
        }, n.attr = function (e, t) {
            var n, i = k(e);
            return i || (t = t.toLowerCase()), (n = y.attrHandle[t]) ? n(e) : i || dt ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, y = n.selectors = {
            cacheLength: 50,
            createPseudo: z,
            match: st,
            attrHandle: ct ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: b ? function (e, t, n) {
                    if (typeof t.getElementById !== E && !n) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                } : function (e, n, i) {
                    if (typeof n.getElementById !== E && !i) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== E && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                },
                TAG: ut ? function (e, t) {
                    return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var n = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return n
                },
                NAME: ft && function (e, t) {
                    return typeof t.getElementsByName !== E ? t.getElementsByName(name) : void 0
                },
                CLASS: ht && function (e, t, n) {
                    return typeof t.getElementsByClassName === E || n ? void 0 : t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n;
                    return st.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                }
            },
            filter: {
                ID: b ? function (e) {
                    return e = e.replace(at, ""),
                    function (t) {
                        return t.getAttribute("id") === e
                    }
                } : function (e) {
                    return e = e.replace(at, ""),
                    function (t) {
                        var n = typeof t.getAttributeNode !== E && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                },
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(at, "").toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = H[j][e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && H(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, i) {
                    return function (r) {
                        var o = n.attr(r, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.substr(o.length - i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, i) {
                    return "nth" === e ? function (e) {
                        var t, r, o = e.parentNode;
                        if (1 === n && 0 === i) return !0;
                        if (o) for (r = 0, t = o.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling);
                        return r -= i, r === n || 0 === r % n && r / n >= 0
                    } : function (t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            for (; n = n.previousSibling;) if (1 === n.nodeType) return !1;
                            if ("first" === e) return !0;
                            n = t;
                        case "last":
                            for (; n = n.nextSibling;) if (1 === n.nodeType) return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var i, r = y.pseudos[e] || y.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return r[j] ? r(t) : r.length > 1 ? (i = [e, e, "", t], y.setFilters.hasOwnProperty(e.toLowerCase()) ? z(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = D.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: z(function (e) {
                    var t = [],
                        n = [],
                        i = C(e.replace(Y, "$1"));
                    return i[j] ? z(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: z(function (e) {
                    return function (t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: z(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !y.pseudos.empty(e)
                },
                empty: function (e) {
                    var t;
                    for (e = e.firstChild; e;) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function (e) {
                    return rt.test(e.nodeName)
                },
                text: function (e) {
                    var t, n;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                },
                radio: i("radio"),
                checkbox: i("checkbox"),
                file: i("file"),
                password: i("password"),
                image: i("image"),
                submit: r("submit"),
                reset: r("reset"),
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function (e) {
                    return ot.test(e.nodeName)
                },
                focus: function (e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                active: function (e) {
                    return e === e.ownerDocument.activeElement
                },
                first: o(function () {
                    return [0]
                }),
                last: o(function (e, t) {
                    return [t - 1]
                }),
                eq: o(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: o(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: o(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: o(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: o(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
                    return e
                })
            }
        }, _ = F.compareDocumentPosition ? function (e, t) {
            return e === t ? (T = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        } : function (e, t) {
            if (e === t) return T = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, i, r = [],
                o = [],
                s = e.parentNode,
                l = t.parentNode,
                u = s;
            if (s === l) return a(e, t);
            if (!s) return -1;
            if (!l) return 1;
            for (; u;) r.unshift(u), u = u.parentNode;
            for (u = l; u;) o.unshift(u), u = u.parentNode;
            n = r.length, i = o.length;
            for (var c = 0; n > c && i > c; c++) if (r[c] !== o[c]) return a(r[c], o[c]);
            return c === n ? a(e, o[c], -1) : a(r[c], t, 1)
        }, [0, 0].sort(_), M = !T, n.uniqueSort = function (e) {
            var t, n = [],
                i = 1,
                r = 0;
            if (T = M, e.sort(_), T) {
                for (; t = e[i]; i++) t === e[i - 1] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        }, n.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, C = n.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = B[j][e + " "];
            if (!o) {
                for (t || (t = s(e)), n = t.length; n--;) o = h(t[n]), o[j] ? i.push(o) : r.push(o);
                o = B(e, f(r, i))
            }
            return o
        }, A.querySelectorAll && function () {
            var e, t = m,
                i = /'|\\/g,
                r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                o = [":focus"],
                a = [":active"],
                l = F.matchesSelector || F.mozMatchesSelector || F.webkitMatchesSelector || F.oMatchesSelector || F.msMatchesSelector;
            lt(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + R + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
            }), lt(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + R + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
            }), o = new RegExp(o.join("|")), m = function (e, n, r, a, l) {
                if (!a && !l && !o.test(e)) {
                    var u, c, d = !0,
                        h = j,
                        f = n,
                        p = 9 === n.nodeType && e;
                    if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                        for (u = s(e), (d = n.getAttribute("id")) ? h = d.replace(i, "\\$&") : n.setAttribute("id", h), h = "[id='" + h + "'] ", c = u.length; c--;) u[c] = h + u[c].join("");
                        f = it.test(e) && n.parentNode || n, p = u.join(",")
                    }
                    if (p) try {
                            return $.apply(r, O.call(f.querySelectorAll(p), 0)), r
                    } catch (m) {} finally {
                        d || n.removeAttribute("id")
                    }
                }
                return t(e, n, r, a, l)
            }, l && (lt(function (t) {
                e = l.call(t, "div");
                try {
                    l.call(t, "[test!='']:sizzle"), a.push("!=", X)
                } catch (n) {}
            }), a = new RegExp(a.join("|")), n.matchesSelector = function (t, i) {
                if (i = i.replace(r, "='$1']"), !k(t) && !a.test(i) && !o.test(i)) try {
                        var s = l.call(t, i);
                        if (s || e || t.document && 11 !== t.document.nodeType) return s
                } catch (u) {}
                return n(i, null, null, [t]).length > 0
            })
        }(), y.pseudos.nth = y.pseudos.eq, y.filters = g.prototype = y.pseudos, y.setFilters = new g, n.attr = J.attr, J.find = n, J.expr = n.selectors, J.expr[":"] = J.expr.pseudos, J.unique = n.uniqueSort, J.text = n.getText, J.isXMLDoc = n.isXML, J.contains = n.contains
    }(e);
    var Pt = /Until$/,
        It = /^(?:parents|prev(?:Until|All))/,
        $t = /^.[^:#\[\.,]*$/,
        Ot = J.expr.match.needsContext,
        Dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.fn.extend({
        find: function (e) {
            var t, n, i, r, o, a, s = this;
            if ("string" != typeof e) return J(e).filter(function () {
                    for (t = 0, n = s.length; n > t; t++) if (J.contains(s[t], this)) return !0
                });
            for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++) if (i = a.length, J.find(e, this[t], a), t > 0) for (r = i; a.length > r; r++) for (o = 0; i > o; o++) if (a[o] === a[r]) {
                                a.splice(r--, 1);
                                break
                            }
            return a
        },
        has: function (e) {
            var t, n = J(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++) if (J.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(u(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? Ot.test(e) ? J(e, this.context).index(this[0]) >= 0 : J.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = Ot.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : J.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
            }
            return o = o.length > 1 ? J.unique(o) : o, this.pushStack(o, "closest", e)
        },
        index: function (e) {
            return e ? "string" == typeof e ? J.inArray(this[0], J(e)) : J.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? J(e, t) : J.makeArray(e && e.nodeType ? [e] : e),
                i = J.merge(this.get(), n);
            return this.pushStack(s(n[0]) || s(i[0]) ? i : J.unique(i))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.fn.andSelf = J.fn.addBack, J.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function (e) {
            return l(e, "nextSibling")
        },
        prev: function (e) {
            return l(e, "previousSibling")
        },
        nextAll: function (e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return J.sibling(e.firstChild)
        },
        contents: function (e) {
            return J.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : J.merge([], e.childNodes)
        }
    }, function (e, t) {
        J.fn[e] = function (n, i) {
            var r = J.map(this, t, n);
            return Pt.test(e) || (i = n), i && "string" == typeof i && (r = J.filter(i, r)), r = this.length > 1 && !Dt[e] ? J.unique(r) : r, this.length > 1 && It.test(e) && (r = r.reverse()), this.pushStack(r, e, G.call(arguments).join(","))
        }
    }), J.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? J.find.matchesSelector(t[0], e) ? [t[0]] : [] : J.find.matches(e, t)
        },
        dir: function (e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !J(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Wt = / jQuery\d+="(?:null|\d+)"/g,
        Ht = /^\s+/,
        qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Bt = /<([\w:]+)/,
        Rt = /<tbody/i,
        Vt = /<|&#?\w+;/,
        Ut = /<(?:script|style|link)/i,
        Gt = /<(?:script|object|embed|option|style)/i,
        Kt = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
        Xt = /^(?:checkbox|radio)$/,
        Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Yt = /\/(java|ecma)script/i,
        Jt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, en = c(H),
        tn = en.appendChild(H.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, J.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), J.fn.extend({
        text: function (e) {
            return J.access(this, function (e) {
                return e === t ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (J.isFunction(e)) return this.each(function (t) {
                    J(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = J(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return J.isFunction(e) ? this.each(function (t) {
                J(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = J(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = J.isFunction(e);
            return this.each(function (n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (!s(this[0])) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = J.clean(arguments);
                return this.pushStack(J.merge(e, this), "before", this.selector)
            }
        },
        after: function () {
            if (!s(this[0])) return this.domManip(arguments, !1, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = J.clean(arguments);
                return this.pushStack(J.merge(this, e), "after", this.selector)
            }
        },
        remove: function (e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)(!e || J.filter(e, [n]).length) && (t || 1 !== n.nodeType || (J.cleanData(n.getElementsByTagName("*")), J.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && J.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return J.clone(this, e, t)
            })
        },
        html: function (e) {
            return J.access(this, function (e) {
                var n = this[0] || {}, i = 0,
                    r = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Wt, "") : t;
                if (!("string" != typeof e || Ut.test(e) || !J.support.htmlSerialize && Kt.test(e) || !J.support.leadingWhitespace && Ht.test(e) || Zt[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(qt, "<$1></$2>");
                    try {
                        for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return s(this[0]) ? this.length ? this.pushStack(J(J.isFunction(e) ? e() : e), "replaceWith", e) : this : J.isFunction(e) ? this.each(function (t) {
                var n = J(this),
                    i = n.html();
                n.replaceWith(e.call(this, t, i))
            }) : ("string" != typeof e && (e = J(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                J(this).remove(), t ? J(t).before(e) : J(n).append(e)
            }))
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, i) {
            e = [].concat.apply([], e);
            var r, o, a, s, l = 0,
                u = e[0],
                c = [],
                h = this.length;
            if (!J.support.checkClone && h > 1 && "string" == typeof u && Qt.test(u)) return this.each(function () {
                    J(this).domManip(e, n, i)
                });
            if (J.isFunction(u)) return this.each(function (r) {
                    var o = J(this);
                    e[0] = u.call(this, r, n ? o.html() : t), o.domManip(e, n, i)
                });
            if (this[0]) {
                if (r = J.buildFragment(e, this, c), a = r.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o) for (n = n && J.nodeName(o, "tr"), s = r.cacheable || h - 1; h > l; l++) i.call(n && J.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === s ? a : J.clone(a, !0, !0));
                a = o = null, c.length && J.each(c, function (e, t) {
                    t.src ? J.ajax ? J.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : J.error("no ajax") : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Jt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), J.buildFragment = function (e, n, i) {
        var r, o, a, s = e[0];
        return n = n || H, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof s && 512 > s.length && n === H && "<" === s.charAt(0)) || Gt.test(s) || !J.support.checkClone && Qt.test(s) || !J.support.html5Clone && Kt.test(s) || (o = !0, r = J.fragments[s], a = r !== t), r || (r = n.createDocumentFragment(), J.clean(e, n, r, i), o && (J.fragments[s] = a && r)), {
            fragment: r,
            cacheable: o
        }
    }, J.fragments = {}, J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        J.fn[e] = function (n) {
            var i, r = 0,
                o = [],
                a = J(n),
                s = a.length,
                l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s) return a[t](this[0]), this;
            for (; s > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), J(a[r])[t](i), o = o.concat(i);
            return this.pushStack(o, e, a.selector)
        }
    }), J.extend({
        clone: function (e, t, n) {
            var i, r, o, a;
            if (J.support.html5Clone || J.isXMLDoc(e) || !Kt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e))) for (f(e, a), i = p(e), r = p(a), o = 0; i[o]; ++o) r[o] && f(i[o], r[o]);
            if (t && (h(e, a), n)) for (i = p(e), r = p(a), o = 0; i[o]; ++o) h(i[o], r[o]);
            return i = r = null, a
        },
        clean: function (e, t, n, i) {
            var r, o, a, s, l, u, d, h, f, p, g, v = t === H && en,
                b = [];
            for (t && "undefined" != typeof t.createDocumentFragment || (t = H), r = 0; null != (a = e[r]); r++) if ("number" == typeof a && (a += ""), a) {
                    if ("string" == typeof a) if (Vt.test(a)) {
                            for (v = v || c(t), d = t.createElement("div"), v.appendChild(d), a = a.replace(qt, "<$1></$2>"), s = (Bt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[s] || Zt._default, u = l[0], d.innerHTML = l[1] + a + l[2]; u--;) d = d.lastChild;
                            if (!J.support.tbody) for (h = Rt.test(a), f = "table" !== s || h ? "<table>" !== l[1] || h ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, o = f.length - 1; o >= 0; --o) J.nodeName(f[o], "tbody") && !f[o].childNodes.length && f[o].parentNode.removeChild(f[o]);
                            !J.support.leadingWhitespace && Ht.test(a) && d.insertBefore(t.createTextNode(Ht.exec(a)[0]), d.firstChild), a = d.childNodes, d.parentNode.removeChild(d)
                        } else a = t.createTextNode(a);
                    a.nodeType ? b.push(a) : J.merge(b, a)
                }
            if (d && (a = d = v = null), !J.support.appendChecked) for (r = 0; null != (a = b[r]); r++) J.nodeName(a, "input") ? m(a) : "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), m);
            if (n) for (p = function (e) {
                    return !e.type || Yt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                }, r = 0; null != (a = b[r]); r++) J.nodeName(a, "script") && p(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (g = J.grep(J.merge([], a.getElementsByTagName("script")), p), b.splice.apply(b, [r + 1, 0].concat(g)), r += g.length));
            return b
        },
        cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = J.expando, l = J.cache, u = J.support.deleteExpando, c = J.event.special; null != (r = e[a]); a++) if ((t || J.acceptData(r)) && (i = r[s], n = i && l[i])) {
                    if (n.events) for (o in n.events) c[o] ? J.event.remove(r, o) : J.removeEvent(r, o, n.handle);
                    l[i] && (delete l[i], u ? delete r[s] : r.removeAttribute ? r.removeAttribute(s) : r[s] = null, J.deletedIds.push(i))
                }
        }
    }),
    function () {
        var e, t;
        J.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = J.uaMatch(B.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), J.browser = t, J.sub = function () {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            J.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, i) {
                return i && i instanceof J && !(i instanceof e) && (i = e(i)), J.fn.init.call(this, n, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(H);
            return e
        }
    }();
    var nn, rn, on, an = /alpha\([^)]*\)/i,
        sn = /opacity=([^)]*)/,
        ln = /^(top|right|bottom|left)$/,
        un = /^(none|table(?!-c[ea]).+)/,
        cn = /^margin/,
        dn = new RegExp("^(" + Z + ")(.*)$", "i"),
        hn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        fn = new RegExp("^([-+])=(" + Z + ")", "i"),
        pn = {
            BODY: "block"
        }, mn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, gn = {
            letterSpacing: 0,
            fontWeight: 400
        }, vn = ["Top", "Right", "Bottom", "Left"],
        bn = ["Webkit", "O", "Moz", "ms"],
        yn = J.fn.toggle;
    J.fn.extend({
        css: function (e, n) {
            return J.access(this, function (e, n, i) {
                return i !== t ? J.style(e, n, i) : J.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return b(this, !0)
        },
        hide: function () {
            return b(this)
        },
        toggle: function (e, t) {
            var n = "boolean" == typeof e;
            return J.isFunction(e) && J.isFunction(t) ? yn.apply(this, arguments) : this.each(function () {
                (n ? e : v(this)) ? J(this).show() : J(this).hide()
            })
        }
    }), J.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = J.camelCase(n),
                    u = e.style;
                if (n = J.cssProps[l] || (J.cssProps[l] = g(u, l)), s = J.cssHooks[n] || J.cssHooks[l], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : u[n];
                if (a = typeof i, "string" === a && (o = fn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(J.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || J.cssNumber[l] || (i += "px"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
                        u[n] = i
                } catch (c) {}
            }
        },
        css: function (e, n, i, r) {
            var o, a, s, l = J.camelCase(n);
            return n = J.cssProps[l] || (J.cssProps[l] = g(e.style, l)), s = J.cssHooks[n] || J.cssHooks[l], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = nn(e, n)), "normal" === o && n in gn && (o = gn[n]), i || r !== t ? (a = parseFloat(o), i || J.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function (e, t, n) {
            var i, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            i = n.call(e);
            for (r in t) e.style[r] = o[r];
            return i
        }
    }), e.getComputedStyle ? nn = function (t, n) {
        var i, r, o, a, s = e.getComputedStyle(t, null),
            l = t.style;
        return s && (i = s.getPropertyValue(n) || s[n], "" !== i || J.contains(t.ownerDocument, t) || (i = J.style(t, n)), hn.test(i) && cn.test(n) && (r = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = s.width, l.width = r, l.minWidth = o, l.maxWidth = a)), i
    } : H.documentElement.currentStyle && (nn = function (e, t) {
        var n, i, r = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return null == r && o && o[t] && (r = o[t]), hn.test(r) && !ln.test(t) && (n = o.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
    }), J.each(["height", "width"], function (e, t) {
        J.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? J.swap(e, mn, function () {
                    return k(e, t, i)
                }) : k(e, t, i) : void 0
            },
            set: function (e, n, i) {
                return y(e, n, i ? w(e, t, i, J.support.boxSizing && "border-box" === J.css(e, "boxSizing")) : 0)
            }
        }
    }), J.support.opacity || (J.cssHooks.opacity = {
        get: function (e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === J.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
        }
    }), J(function () {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function (e, t) {
                return J.swap(e, {
                    display: "inline-block"
                }, function () {
                    return t ? nn(e, "marginRight") : void 0
                })
            }
        }), !J.support.pixelPosition && J.fn.position && J.each(["top", "left"], function (e, t) {
            J.cssHooks[t] = {
                get: function (e, n) {
                    if (n) {
                        var i = nn(e, t);
                        return hn.test(i) ? J(e).position()[t] + "px" : i
                    }
                }
            }
        })
    }), J.expr && J.expr.filters && (J.expr.filters.hidden = function (e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
    }, J.expr.filters.visible = function (e) {
        return !J.expr.filters.hidden(e)
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        J.cssHooks[e + t] = {
            expand: function (n) {
                var i, r = "string" == typeof n ? n.split(" ") : [n],
                    o = {};
                for (i = 0; 4 > i; i++) o[e + vn[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, cn.test(e) || (J.cssHooks[e + t].set = y)
    });
    var wn = /%20/g,
        kn = /\[\]$/,
        xn = /\r?\n/g,
        Cn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        _n = /^(?:select|textarea)/i;
    J.fn.extend({
        serialize: function () {
            return J.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? J.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || _n.test(this.nodeName) || Cn.test(this.type))
            }).map(function (e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(xn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(xn, "\r\n")
                }
            }).get()
        }
    }), J.param = function (e, n) {
        var i, r = [],
            o = function (e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function () {
                o(this.name, this.value)
            });
        else for (i in e) C(i, e[i], n, o);
        return r.join("&").replace(wn, "+")
    };
    var Tn, Sn, Mn = /#.*$/,
        En = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        jn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Ln = /^(?:GET|HEAD)$/,
        An = /^\/\//,
        Fn = /\?/,
        Nn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Pn = /([?&])_=[^&]*/,
        In = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        $n = J.fn.load,
        On = {}, Dn = {}, zn = ["*/"] + ["*"];
    try {
        Sn = q.href
    } catch (Wn) {
        Sn = H.createElement("a"), Sn.href = "", Sn = Sn.href
    }
    Tn = In.exec(Sn.toLowerCase()) || [], J.fn.load = function (e, n, i) {
        if ("string" != typeof e && $n) return $n.apply(this, arguments);
        if (!this.length) return this;
        var r, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), J.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), J.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n,
            complete: function (e, t) {
                i && s.each(i, a || [e.responseText, t, e])
            }
        }).done(function (e) {
            a = arguments, s.html(r ? J("<div>").append(e.replace(Nn, "")).find(r) : e)
        }), this
    }, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        J.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), J.each(["get", "post"], function (e, n) {
        J[n] = function (e, i, r, o) {
            return J.isFunction(i) && (o = o || r, r = i, i = t), J.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: o
            })
        }
    }), J.extend({
        getScript: function (e, n) {
            return J.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return J.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? S(e, J.ajaxSettings) : (t = e, e = J.ajaxSettings), S(e, t), e
        },
        ajaxSettings: {
            url: Sn,
            isLocal: jn.test(Tn[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": zn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: _(On),
        ajaxTransport: _(Dn),
        ajax: function (e, n) {
            function i(e, n, i, a) {
                var u, d, b, y, k, C = n;
                2 !== w && (w = 2, l && clearTimeout(l), s = t, o = a || "", x.readyState = e > 0 ? 4 : 0, i && (y = M(h, x, i)), e >= 200 && 300 > e || 304 === e ? (h.ifModified && (k = x.getResponseHeader("Last-Modified"), k && (J.lastModified[r] = k), k = x.getResponseHeader("Etag"), k && (J.etag[r] = k)), 304 === e ? (C = "notmodified", u = !0) : (u = E(h, y), C = u.state, d = u.data, b = u.error, u = !b)) : (b = C, (!C || e) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || C) + "", u ? m.resolveWith(f, [d, C, x]) : m.rejectWith(f, [x, C, b]), x.statusCode(v), v = t, c && p.trigger("ajax" + (u ? "Success" : "Error"), [x, h, u ? d : b]), g.fireWith(f, [x, C]), c && (p.trigger("ajaxComplete", [x, h]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, o, a, s, l, u, c, d, h = J.ajaxSetup({}, n),
                f = h.context || h,
                p = f !== h && (f.nodeType || f instanceof J) ? J(f) : J.event,
                m = J.Deferred(),
                g = J.Callbacks("once memory"),
                v = h.statusCode || {}, b = {}, y = {}, w = 0,
                k = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!w) {
                            var n = e.toLowerCase();
                            e = y[n] = y[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? o : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (2 === w) {
                            if (!a) for (a = {}; n = En.exec(o);) a[n[1].toLowerCase()] = n[2];
                            n = a[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return w || (h.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || k, s && s.abort(e), i(0, e), this
                    }
                };
            if (m.promise(x), x.success = x.done, x.error = x.fail, x.complete = g.add, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (2 > w) for (t in e) v[t] = [v[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, h.url = ((e || h.url) + "").replace(Mn, "").replace(An, Tn[1] + "//"), h.dataTypes = J.trim(h.dataType || "*").toLowerCase().split(tt), null == h.crossDomain && (u = In.exec(h.url.toLowerCase()), h.crossDomain = !(!u || u[1] === Tn[1] && u[2] === Tn[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Tn[3] || ("http:" === Tn[1] ? 80 : 443)))), h.data && h.processData && "string" != typeof h.data && (h.data = J.param(h.data, h.traditional)), T(On, h, n, x), 2 === w) return x;
            if (c = h.global, h.type = h.type.toUpperCase(), h.hasContent = !Ln.test(h.type), c && 0 === J.active++ && J.event.trigger("ajaxStart"), !h.hasContent && (h.data && (h.url += (Fn.test(h.url) ? "&" : "?") + h.data, delete h.data), r = h.url, h.cache === !1)) {
                var C = J.now(),
                    _ = h.url.replace(Pn, "$1_=" + C);
                h.url = _ + (_ === h.url ? (Fn.test(h.url) ? "&" : "?") + "_=" + C : "")
            }(h.data && h.hasContent && h.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), h.ifModified && (r = r || h.url, J.lastModified[r] && x.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && x.setRequestHeader("If-None-Match", J.etag[r])), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) x.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(f, x, h) === !1 || 2 === w)) return x.abort();
            k = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) x[d](h[d]);
            if (s = T(Dn, h, n, x)) {
                x.readyState = 1, c && p.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (l = setTimeout(function () {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    w = 1, s.send(b, i)
                } catch (S) {
                    if (!(2 > w)) throw S;
                    i(-1, S)
                }
            } else i(-1, "No Transport");
            return x
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Hn = [],
        qn = /\?/,
        Bn = /(=)\?(?=&|$)|\?\?/,
        Rn = J.now();
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Hn.pop() || J.expando + "_" + Rn++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function (n, i, r) {
        var o, a, s, l = n.data,
            u = n.url,
            c = n.jsonp !== !1,
            d = c && Bn.test(u),
            h = c && !d && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(l);
        return "jsonp" === n.dataTypes[0] || d || h ? (o = n.jsonpCallback = J.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], d ? n.url = u.replace(Bn, "$1" + o) : h ? n.data = l.replace(Bn, "$1" + o) : c && (n.url += (qn.test(u) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || J.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", e[o] = function () {
            s = arguments
        }, r.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Hn.push(o)), s && J.isFunction(a) && a(s[0]), s = a = t
        }), "script") : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), J.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, i = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
            return {
                send: function (r, o) {
                    n = H.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Vn, Un = e.ActiveXObject ? function () {
            for (var e in Vn) Vn[e](0, 1)
        } : !1,
        Gn = 0;
    J.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && j() || L()
    } : j,
    function (e) {
        J.extend(J.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function (n) {
        if (!n.crossDomain || J.support.cors) {
            var i;
            return {
                send: function (r, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in r) l.setRequestHeader(s, r[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), i = function (e, r) {
                        var s, u, c, d, h;
                        try {
                            if (i && (r || 4 === l.readyState)) if (i = t, a && (l.onreadystatechange = J.noop, Un && delete Vn[a]), r) 4 !== l.readyState && l.abort();
                                else {
                                    s = l.status, c = l.getAllResponseHeaders(), d = {}, h = l.responseXML, h && h.documentElement && (d.xml = h);
                                    try {
                                        d.text = l.responseText
                                    } catch (f) {}
                                    try {
                                        u = l.statusText
                                    } catch (f) {
                                        u = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (p) {
                            r || o(-1, p)
                        }
                        d && o(s, u, d, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (a = ++Gn, Un && (Vn || (Vn = {}, J(e).unload(Un)), Vn[a] = i), l.onreadystatechange = i) : i()
                },
                abort: function () {
                    i && i(0, 1)
                }
            }
        }
    });
    var Kn, Xn, Qn = /^(?:toggle|show|hide)$/,
        Yn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Zn = [I],
        ei = {
            "*": [
                function (e, t) {
                    var n, i, r = this.createTween(e, t),
                        o = Yn.exec(t),
                        a = r.cur(),
                        s = +a || 0,
                        l = 1,
                        u = 20;
                    if (o) {
                        if (n = +o[2], i = o[3] || (J.cssNumber[e] ? "" : "px"), "px" !== i && s) {
                            s = J.css(r.elem, e, !0) || n || 1;
                            do l = l || ".5", s /= l, J.style(r.elem, e, s + i); while (l !== (l = r.cur() / a) && 1 !== l && --u)
                        }
                        r.unit = i, r.start = s, r.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return r
                }
            ]
        };
    J.Animation = J.extend(N, {
        tweener: function (e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], ei[n] = ei[n] || [], ei[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Zn.unshift(e) : Zn.push(e)
        }
    }), J.Tween = $, $.prototype = {
        constructor: $,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.each(["toggle", "show", "hide"], function (e, t) {
        var n = J.fn[t];
        J.fn[t] = function (i, r, o) {
            return null == i || "boolean" == typeof i || !e && J.isFunction(i) && J.isFunction(r) ? n.apply(this, arguments) : this.animate(O(t, !0), i, r, o)
        }
    }), J.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(v).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var r = J.isEmptyObject(e),
                o = J.speed(t, n, i),
                a = function () {
                    var t = N(this, J.extend({}, e), o);
                    r && t.stop(!0)
                };
            return r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, i) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = J.timers,
                    a = J._data(this);
                if (n) a[n] && a[n].stop && r(a[n]);
                else for (n in a) a[n] && a[n].stop && Jn.test(n) && r(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                (t || !i) && J.dequeue(this, e)
            })
        }
    }), J.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        J.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), J.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
        }, i
    }, J.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.timers = [], J.fx = $.prototype.init, J.fx.tick = function () {
        var e, n = J.timers,
            i = 0;
        for (Kn = J.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
        n.length || J.fx.stop(), Kn = t
    }, J.fx.timer = function (e) {
        e() && J.timers.push(e) && !Xn && (Xn = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.interval = 13, J.fx.stop = function () {
        clearInterval(Xn), Xn = null
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function (e) {
        return J.grep(J.timers, function (t) {
            return e === t.elem
        }).length
    });
    var ti = /^(?:body|html)$/i;
    J.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
                J.offset.setOffset(this, e, t)
            });
        var n, i, r, o, a, s, l, u = {
                top: 0,
                left: 0
            }, c = this[0],
            d = c && c.ownerDocument;
        if (d) return (i = d.body) === c ? J.offset.bodyOffset(c) : (n = d.documentElement, J.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()), r = D(d), o = n.clientTop || i.clientTop || 0, a = n.clientLeft || i.clientLeft || 0, s = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {
                top: u.top + s - o,
                left: u.left + l - a
            }) : u)
    }, J.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(J.css(e, "marginTop")) || 0, n += parseFloat(J.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var i = J.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, a = J(e),
                s = a.offset(),
                l = J.css(e, "top"),
                u = J.css(e, "left"),
                c = ("absolute" === i || "fixed" === i) && J.inArray("auto", [l, u]) > -1,
                d = {}, h = {};
            c ? (h = a.position(), r = h.top, o = h.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), J.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
        }
    }, J.fn.extend({
        position: function () {
            if (this[0]) {
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    i = ti.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(J.css(e, "marginTop")) || 0, n.left -= parseFloat(J.css(e, "marginLeft")) || 0, i.top += parseFloat(J.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(J.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || H.body; e && !ti.test(e.nodeName) && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || H.body
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var i = /Y/.test(n);
        J.fn[e] = function (r) {
            return J.access(this, function (e, r, o) {
                var a = D(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(i ? J(a).scrollLeft() : o, i ? o : J(a).scrollTop()) : e[r] = o, void 0)
            }, e, r, arguments.length, null)
        }
    }), J.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        J.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (i, r) {
            J.fn[r] = function (r, o) {
                var a = arguments.length && (i || "boolean" != typeof r),
                    s = i || (r === !0 || o === !0 ? "margin" : "border");
                return J.access(this, function (n, i, r) {
                    var o;
                    return J.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? J.css(n, i, r, s) : J.style(n, i, r, s)
                }, n, a ? r : t, a, null)
            }
        })
    }), e.jQuery = e.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return J
    })
}(window),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return "rails" === e.namespace
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var i;
    e.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i), r.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var r, o, a, s, l, u, c, d;
            if (i.fire(n, "ajax:before")) {
                if (s = n.data("cross-domain"), l = s === t ? null : s, u = n.data("with-credentials") || null, c = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    r = n.attr("method"), o = n.attr("action"), a = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (a.push(h), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (r = n.data("method"), o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : (r = n.data("method"), o = i.href(n), a = n.data("params") || null);
                d = {
                    type: r || "GET",
                    data: a,
                    dataType: c,
                    beforeSend: function (e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), i.fire(n, "ajax:beforeSend", [e, r])
                    },
                    success: function (e, t, i) {
                        n.trigger("ajax:success", [e, t, i])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, i) {
                        n.trigger("ajax:error", [e, t, i])
                    },
                    xhrFields: {
                        withCredentials: u
                    },
                    crossDomain: l
                }, o && (d.url = o);
                var f = i.ajax(d);
                return n.trigger("ajax:send", f), f
            }
            return !1
        },
        handleMethod: function (n) {
            var r = i.href(n),
                o = n.data("method"),
                a = n.attr("target"),
                s = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                u = e('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== t && s !== t && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        },
        disableFormElements: function (t) {
            t.find(i.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(i.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t, n = e.data("confirm"),
                r = !1;
            return n ? (i.fire(e, "confirm") && (r = i.confirm(n), t = i.fire(e, "confirm:complete", [r])), r && t) : !0
        },
        blankInputs: function (t, n, i) {
            var r, o, a = e(),
                s = n || "input,textarea",
                l = t.find(s);
            return l.each(function () {
                if (r = e(this), o = r.is(":checkbox,:radio") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is(":radio") && l.filter('input:radio:checked[name="' + r.attr("name") + '"]').length) return !0;
                    a = a.add(r)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (e, t) {
            return i.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, i) {
            var r = n.data("events"),
                o = !0;
            return r !== t && r.submit !== t && e.each(r.submit, function (e, t) {
                return "function" == typeof t.handler ? o = t.handler(i) : void 0
            }), o
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return i.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, i.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), e(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(e(this))
    }), e(document).delegate(i.linkClickSelector, "click.rails", function (n) {
        var r = e(this),
            o = r.data("method"),
            a = r.data("params");
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (r.is(i.linkDisableSelector) && i.disableElement(r), r.data("remote") !== t) {
            if (!(!n.metaKey && !n.ctrlKey || o && "GET" !== o || a)) return !0;
            var s = i.handleRemote(r);
            return s === !1 ? i.enableElement(r) : s.error(function () {
                i.enableElement(r)
            }), !1
        }
        return r.data("method") ? (i.handleMethod(r), !1) : void 0
    }), e(document).delegate(i.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), e(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var r = e(this),
            o = r.data("remote") !== t,
            a = i.blankInputs(r, i.requiredInputSelector),
            s = i.nonBlankInputs(r, i.fileInputSelector);
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (a && r.attr("novalidate") == t && i.fire(r, "ajax:aborted:required", [a])) return i.stopEverything(n);
        if (o) {
            if (s) {
                setTimeout(function () {
                    i.disableFormElements(r)
                }, 13);
                var l = i.fire(r, "ajax:aborted:file", [s]);
                return l || setTimeout(function () {
                    i.enableFormElements(r)
                }, 13), l
            }
            return !e.support.submitBubbles && "1.7" > e().jquery && i.callFormSubmitBindings(r, n) === !1 ? i.stopEverything(n) : (i.handleRemote(r), !1)
        }
        setTimeout(function () {
            i.disableFormElements(r)
        }, 13)
    }), e(document).delegate(i.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        var r = n.attr("name"),
            o = r ? {
                name: r,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", o)
    }), e(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && i.disableFormElements(e(this))
    }), e(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && i.enableFormElements(e(this))
    }), e(function () {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),

function (e, t) {
    function n(t, n) {
        var r, o, a, s = t.nodeName.toLowerCase();
        return "area" === s ? (r = t.parentNode, o = r.name, t.href && o && "map" === r.nodeName.toLowerCase() ? (a = e("img[usemap=#" + o + "]")[0], !! a && i(a)) : !1) : (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" === s ? t.href || n : n) && i(t)
    }
    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var r = 0,
        o = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function (t, n) {
            return "number" == typeof t ? this.each(function () {
                var i = this;
                setTimeout(function () {
                    e(i).focus(), n && n.call(i)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                    if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                    o = o.parent()
            }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++r)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                o.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function (t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var i = e.attr(t, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, i) {
        function r(t, n, i, r) {
            return e.each(o, function () {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            s = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function (n) {
            return n === t ? s["inner" + i].call(this) : this.each(function () {
                e(this).css(a, r(this, n) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function () {
                e(this).css(a, r(this, t, !0, n) + "px")
            })
        }
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), function () {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
    }(), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, i) {
                var r, o = e.ui[t].prototype;
                for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
            },
            call: function (e, t, n) {
                var i, r = e.plugins[t];
                if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (i = 0; r.length > i; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        },
        contains: e.contains,
        hasScroll: function (t, n) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        },
        isOverAxis: function (e, t, n) {
            return e > t && t + n > e
        },
        isOver: function (t, n, i, r, o, a) {
            return e.ui.isOverAxis(t, i, o) && e.ui.isOverAxis(n, r, a)
        }
    }))
}(jQuery),
function (e, t) {
    var n = 0,
        i = Array.prototype.slice,
        r = e.cleanData;
    e.cleanData = function (t) {
        for (var n, i = 0; null != (n = t[i]); i++) try {
                e(n).triggerHandler("remove")
        } catch (o) {}
        r(t)
    }, e.widget = function (t, n, i) {
        var r, o, a, s, l = t.split(".")[0];
        t = t.split(".")[1], r = l + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function (t) {
            return !!e.data(t, r)
        }, e[l] = e[l] || {}, o = e[l][t], a = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new a(e, t)
        }, e.extend(a, o, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function (t, r) {
            e.isFunction(r) && (i[t] = function () {
                var e = function () {
                    return n.prototype[t].apply(this, arguments)
                }, i = function (e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function () {
                    var t, n = this._super,
                        o = this._superApply;
                    return this._super = e, this._superApply = i, t = r.apply(this, arguments), this._super = n, this._superApply = o, t
                }
            }())
        }), a.prototype = e.widget.extend(s, {
            widgetEventPrefix: o ? s.widgetEventPrefix : t
        }, i, {
            constructor: a,
            namespace: l,
            widgetName: t,
            widgetBaseClass: r,
            widgetFullName: r
        }), o ? (e.each(o._childConstructors, function (t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(a), e.widget.bridge(t, a)
    }, e.widget.extend = function (n) {
        for (var r, o, a = i.call(arguments, 1), s = 0, l = a.length; l > s; s++) for (r in a[s]) o = a[s][r], a[s].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
        return n
    }, e.widget.bridge = function (n, r) {
        var o = r.prototype.widgetFullName || n;
        e.fn[n] = function (a) {
            var s = "string" == typeof a,
                l = i.call(arguments, 1),
                u = this;
            return a = !s && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a, s ? this.each(function () {
                var i, r = e.data(this, o);
                return r ? e.isFunction(r[a]) && "_" !== a.charAt(0) ? (i = r[a].apply(r, l), i !== r && i !== t ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function () {
                var t = e.data(this, o);
                t ? t.option(a || {})._init() : e.data(this, o, new r(a, this))
            }), u
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetName, this), e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (n, i) {
            var r, o, a, s = n;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof n) if (s = {}, r = n.split("."), n = r.shift(), r.length) {
                    for (o = s[n] = e.widget.extend({}, this.options[n]), a = 0; r.length - 1 > a; a++) o[r[a]] = o[r[a]] || {}, o = o[r[a]];
                    if (n = r.pop(), i === t) return o[n] === t ? null : o[n];
                    o[n] = i
                } else {
                    if (i === t) return this.options[n] === t ? null : this.options[n];
                    s[n] = i
                }
            return this._setOptions(s), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (t, n, i) {
            var r, o = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function (i, a) {
                function s() {
                    return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                var l = i.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + o.eventNamespace,
                    c = l[2];
                c ? r.delegate(c, u, s) : n.bind(u, s)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, n, i) {
            var r, o, a = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, n) {
        e.Widget.prototype["_" + t] = function (i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
            r = r || {}, "number" == typeof r && (r = {
                duration: r
            }), a = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && e.effects && (e.effects.effect[s] || e.uiBackCompat !== !1 && e.effects[s]) ? i[t](r) : s !== t && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function (n) {
                e(this)[t](), o && o.call(i[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function () {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery),
function (e, t) {
    function n(e, t, n) {
        return [parseInt(e[0], 10) * (h.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (h.test(e[1]) ? n / 100 : 1)]
    }
    function i(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }
    e.ui = e.ui || {};
    var r, o = Math.max,
        a = Math.abs,
        s = Math.round,
        l = /left|center|right/,
        u = /top|center|bottom/,
        c = /[\+\-]\d+%?/,
        d = /^\w+/,
        h = /%$/,
        f = e.fn.position;
    e.position = {
        scrollbarWidth: function () {
            if (r !== t) return r;
            var n, i, o = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                a = o.children()[0];
            return e("body").append(o), n = a.offsetWidth, o.css("overflow", "scroll"), i = a.offsetWidth, n === i && (i = o[0].clientWidth), o.remove(), r = n - i
        },
        getScrollInfo: function (t) {
            var n = t.isWindow ? "" : t.element.css("overflow-x"),
                i = t.isWindow ? "" : t.element.css("overflow-y"),
                r = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                o = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
            return {
                width: r ? e.position.scrollbarWidth() : 0,
                height: o ? e.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function (t) {
            var n = e(t || window),
                i = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: i,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: i ? n.width() : n.outerWidth(),
                height: i ? n.height() : n.outerHeight()
            }
        }
    }, e.fn.position = function (t) {
        if (!t || !t.of) return f.apply(this, arguments);
        t = e.extend({}, t);
        var r, h, p, m, g, v = e(t.of),
            b = e.position.getWithinInfo(t.within),
            y = e.position.getScrollInfo(b),
            w = v[0],
            k = (t.collision || "flip").split(" "),
            x = {};
        return 9 === w.nodeType ? (h = v.width(), p = v.height(), m = {
            top: 0,
            left: 0
        }) : e.isWindow(w) ? (h = v.width(), p = v.height(), m = {
            top: v.scrollTop(),
            left: v.scrollLeft()
        }) : w.preventDefault ? (t.at = "left top", h = p = 0, m = {
            top: w.pageY,
            left: w.pageX
        }) : (h = v.outerWidth(), p = v.outerHeight(), m = v.offset()), g = e.extend({}, m), e.each(["my", "at"], function () {
            var e, n, i = (t[this] || "").split(" ");
            1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = c.exec(i[0]), n = c.exec(i[1]), x[this] = [e ? e[0] : 0, n ? n[0] : 0], t[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
        }), 1 === k.length && (k[1] = k[0]), "right" === t.at[0] ? g.left += h : "center" === t.at[0] && (g.left += h / 2), "bottom" === t.at[1] ? g.top += p : "center" === t.at[1] && (g.top += p / 2), r = n(x.at, h, p), g.left += r[0], g.top += r[1], this.each(function () {
            var l, u, c = e(this),
                d = c.outerWidth(),
                f = c.outerHeight(),
                w = i(this, "marginLeft"),
                C = i(this, "marginTop"),
                _ = d + w + i(this, "marginRight") + y.width,
                T = f + C + i(this, "marginBottom") + y.height,
                S = e.extend({}, g),
                M = n(x.my, c.outerWidth(), c.outerHeight());
            "right" === t.my[0] ? S.left -= d : "center" === t.my[0] && (S.left -= d / 2), "bottom" === t.my[1] ? S.top -= f : "center" === t.my[1] && (S.top -= f / 2), S.left += M[0], S.top += M[1], e.support.offsetFractions || (S.left = s(S.left), S.top = s(S.top)), l = {
                marginLeft: w,
                marginTop: C
            }, e.each(["left", "top"], function (n, i) {
                e.ui.position[k[n]] && e.ui.position[k[n]][i](S, {
                    targetWidth: h,
                    targetHeight: p,
                    elemWidth: d,
                    elemHeight: f,
                    collisionPosition: l,
                    collisionWidth: _,
                    collisionHeight: T,
                    offset: [r[0] + M[0], r[1] + M[1]],
                    my: t.my,
                    at: t.at,
                    within: b,
                    elem: c
                })
            }), e.fn.bgiframe && c.bgiframe(), t.using && (u = function (e) {
                var n = m.left - S.left,
                    i = n + h - d,
                    r = m.top - S.top,
                    s = r + p - f,
                    l = {
                        target: {
                            element: v,
                            left: m.left,
                            top: m.top,
                            width: h,
                            height: p
                        },
                        element: {
                            element: c,
                            left: S.left,
                            top: S.top,
                            width: d,
                            height: f
                        },
                        horizontal: 0 > i ? "left" : n > 0 ? "right" : "center",
                        vertical: 0 > s ? "top" : r > 0 ? "bottom" : "middle"
                    };
                d > h && h > a(n + i) && (l.horizontal = "center"), f > p && p > a(r + s) && (l.vertical = "middle"), l.important = o(a(n), a(i)) > o(a(r), a(s)) ? "horizontal" : "vertical", t.using.call(this, e, l)
            }), c.offset(e.extend(S, {
                using: u
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (e, t) {
                var n, i = t.within,
                    r = i.isWindow ? i.scrollLeft : i.offset.left,
                    a = i.width,
                    s = e.left - t.collisionPosition.marginLeft,
                    l = r - s,
                    u = s + t.collisionWidth - a - r;
                t.collisionWidth > a ? l > 0 && 0 >= u ? (n = e.left + l + t.collisionWidth - a - r, e.left += l - n) : e.left = u > 0 && 0 >= l ? r : l > u ? r + a - t.collisionWidth : r : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = o(e.left - s, e.left)
            },
            top: function (e, t) {
                var n, i = t.within,
                    r = i.isWindow ? i.scrollTop : i.offset.top,
                    a = t.within.height,
                    s = e.top - t.collisionPosition.marginTop,
                    l = r - s,
                    u = s + t.collisionHeight - a - r;
                t.collisionHeight > a ? l > 0 && 0 >= u ? (n = e.top + l + t.collisionHeight - a - r, e.top += l - n) : e.top = u > 0 && 0 >= l ? r : l > u ? r + a - t.collisionHeight : r : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = o(e.top - s, e.top)
            }
        },
        flip: {
            left: function (e, t) {
                var n, i, r = t.within,
                    o = r.offset.left + r.scrollLeft,
                    s = r.width,
                    l = r.isWindow ? r.scrollLeft : r.offset.left,
                    u = e.left - t.collisionPosition.marginLeft,
                    c = u - l,
                    d = u + t.collisionWidth - s - l,
                    h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                    f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                    p = -2 * t.offset[0];
                0 > c ? (n = e.left + h + f + p + t.collisionWidth - s - o, (0 > n || a(c) > n) && (e.left += h + f + p)) : d > 0 && (i = e.left - t.collisionPosition.marginLeft + h + f + p - l, (i > 0 || d > a(i)) && (e.left += h + f + p))
            },
            top: function (e, t) {
                var n, i, r = t.within,
                    o = r.offset.top + r.scrollTop,
                    s = r.height,
                    l = r.isWindow ? r.scrollTop : r.offset.top,
                    u = e.top - t.collisionPosition.marginTop,
                    c = u - l,
                    d = u + t.collisionHeight - s - l,
                    h = "top" === t.my[1],
                    f = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                    p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                    m = -2 * t.offset[1];
                0 > c ? (i = e.top + f + p + m + t.collisionHeight - s - o, e.top + f + p + m > c && (0 > i || a(c) > i) && (e.top += f + p + m)) : d > 0 && (n = e.top - t.collisionPosition.marginTop + f + p + m - l, e.top + f + p + m > d && (n > 0 || d > a(n)) && (e.top += f + p + m))
            }
        },
        flipfit: {
            left: function () {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function () {
        var t, n, i, r, o, a = document.getElementsByTagName("body")[0],
            s = document.createElement("div");
        t = document.createElement(a ? "div" : "body"), i = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, a && e.extend(i, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in i) t.style[o] = i[o];
        t.appendChild(s), n = a || document.documentElement, n.insertBefore(t, n.firstChild), s.style.cssText = "position: absolute; left: 10.7432222px;", r = e(s).offset().left, e.support.offsetFractions = r > 10 && 11 > r, t.innerHTML = "", n.removeChild(t)
    }(), e.uiBackCompat !== !1 && function (e) {
        var n = e.fn.position;
        e.fn.position = function (i) {
            if (!i || !i.offset) return n.call(this, i);
            var r = i.offset.split(" "),
                o = i.at.split(" ");
            return 1 === r.length && (r[1] = r[0]), /^\d/.test(r[0]) && (r[0] = "+" + r[0]), /^\d/.test(r[1]) && (r[1] = "+" + r[1]), 1 === o.length && (/left|center|right/.test(o[0]) ? o[1] = "center" : (o[1] = o[0], o[0] = "center")), n.call(this, e.extend(i, {
                at: o[0] + r[0] + " " + o[1] + r[1],
                offset: t
            }))
        }
    }(jQuery)
}(jQuery),


function () {
    var e = this,
        t = e._,
        n = {}, i = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = i.push,
        s = i.slice,
        l = i.concat,
        u = r.toString,
        c = r.hasOwnProperty,
        d = i.forEach,
        h = i.map,
        f = i.reduce,
        p = i.reduceRight,
        m = i.filter,
        g = i.every,
        v = i.some,
        b = i.indexOf,
        y = i.lastIndexOf,
        w = Array.isArray,
        k = Object.keys,
        x = o.bind,
        C = function (e) {
            return e instanceof C ? e : this instanceof C ? (this._wrapped = e, void 0) : new C(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : e._ = C, C.VERSION = "1.4.4";
    var _ = C.each = C.forEach = function (e, t, i) {
        if (null != e) if (d && e.forEach === d) e.forEach(t, i);
            else if (e.length === +e.length) {
            for (var r = 0, o = e.length; o > r; r++) if (t.call(i, e[r], r, e) === n) return
        } else for (var a in e) if (C.has(e, a) && t.call(i, e[a], a, e) === n) return
    };
    C.map = C.collect = function (e, t, n) {
        var i = [];
        return null == e ? i : h && e.map === h ? e.map(t, n) : (_(e, function (e, r, o) {
            i[i.length] = t.call(n, e, r, o)
        }), i)
    };
    var T = "Reduce of empty array with no initial value";
    C.reduce = C.foldl = C.inject = function (e, t, n, i) {
        var r = arguments.length > 2;
        if (null == e && (e = []), f && e.reduce === f) return i && (t = C.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
        if (_(e, function (e, o, a) {
            r ? n = t.call(i, n, e, o, a) : (n = e, r = !0)
        }), !r) throw new TypeError(T);
        return n
    }, C.reduceRight = C.foldr = function (e, t, n, i) {
        var r = arguments.length > 2;
        if (null == e && (e = []), p && e.reduceRight === p) return i && (t = C.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var a = C.keys(e);
            o = a.length
        }
        if (_(e, function (s, l, u) {
            l = a ? a[--o] : --o, r ? n = t.call(i, n, e[l], l, u) : (n = e[l], r = !0)
        }), !r) throw new TypeError(T);
        return n
    }, C.find = C.detect = function (e, t, n) {
        var i;
        return S(e, function (e, r, o) {
            return t.call(n, e, r, o) ? (i = e, !0) : void 0
        }), i
    }, C.filter = C.select = function (e, t, n) {
        var i = [];
        return null == e ? i : m && e.filter === m ? e.filter(t, n) : (_(e, function (e, r, o) {
            t.call(n, e, r, o) && (i[i.length] = e)
        }), i)
    }, C.reject = function (e, t, n) {
        return C.filter(e, function (e, i, r) {
            return !t.call(n, e, i, r)
        }, n)
    }, C.every = C.all = function (e, t, i) {
        t || (t = C.identity);
        var r = !0;
        return null == e ? r : g && e.every === g ? e.every(t, i) : (_(e, function (e, o, a) {
            return (r = r && t.call(i, e, o, a)) ? void 0 : n
        }), !! r)
    };
    var S = C.some = C.any = function (e, t, i) {
        t || (t = C.identity);
        var r = !1;
        return null == e ? r : v && e.some === v ? e.some(t, i) : (_(e, function (e, o, a) {
            return r || (r = t.call(i, e, o, a)) ? n : void 0
        }), !! r)
    };
    C.contains = C.include = function (e, t) {
        return null == e ? !1 : b && e.indexOf === b ? -1 != e.indexOf(t) : S(e, function (e) {
            return e === t
        })
    }, C.invoke = function (e, t) {
        var n = s.call(arguments, 2),
            i = C.isFunction(t);
        return C.map(e, function (e) {
            return (i ? t : e[t]).apply(e, n)
        })
    }, C.pluck = function (e, t) {
        return C.map(e, function (e) {
            return e[t]
        })
    }, C.where = function (e, t, n) {
        return C.isEmpty(t) ? n ? null : [] : C[n ? "find" : "filter"](e, function (e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0
        })
    }, C.findWhere = function (e, t) {
        return C.where(e, t, !0)
    }, C.max = function (e, t, n) {
        if (!t && C.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && C.isEmpty(e)) return -1 / 0;
        var i = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return _(e, function (e, r, o) {
            var a = t ? t.call(n, e, r, o) : e;
            a >= i.computed && (i = {
                value: e,
                computed: a
            })
        }), i.value
    }, C.min = function (e, t, n) {
        if (!t && C.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && C.isEmpty(e)) return 1 / 0;
        var i = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return _(e, function (e, r, o) {
            var a = t ? t.call(n, e, r, o) : e;
            i.computed > a && (i = {
                value: e,
                computed: a
            })
        }), i.value
    }, C.shuffle = function (e) {
        var t, n = 0,
            i = [];
        return _(e, function (e) {
            t = C.random(n++), i[n - 1] = i[t], i[t] = e
        }), i
    };
    var M = function (e) {
        return C.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    C.sortBy = function (e, t, n) {
        var i = M(t);
        return C.pluck(C.map(e, function (e, t, r) {
            return {
                value: e,
                index: t,
                criteria: i.call(n, e, t, r)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                i = t.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var E = function (e, t, n, i) {
        var r = {}, o = M(t || C.identity);
        return _(e, function (t, a) {
            var s = o.call(n, t, a, e);
            i(r, s, t)
        }), r
    };
    C.groupBy = function (e, t, n) {
        return E(e, t, n, function (e, t, n) {
            (C.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, C.countBy = function (e, t, n) {
        return E(e, t, n, function (e, t) {
            C.has(e, t) || (e[t] = 0), e[t]++
        })
    }, C.sortedIndex = function (e, t, n, i) {
        n = null == n ? C.identity : M(n);
        for (var r = n.call(i, t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            r > n.call(i, e[s]) ? o = s + 1 : a = s
        }
        return o
    }, C.toArray = function (e) {
        return e ? C.isArray(e) ? s.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : []
    }, C.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length
    }, C.first = C.head = C.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
    }, C.initial = function (e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, C.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
    }, C.rest = C.tail = C.drop = function (e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    }, C.compact = function (e) {
        return C.filter(e, C.identity)
    };
    var j = function (e, t, n) {
        return _(e, function (e) {
            C.isArray(e) ? t ? a.apply(n, e) : j(e, t, n) : n.push(e)
        }), n
    };
    C.flatten = function (e, t) {
        return j(e, t, [])
    }, C.without = function (e) {
        return C.difference(e, s.call(arguments, 1))
    }, C.uniq = C.unique = function (e, t, n, i) {
        C.isFunction(t) && (i = n, n = t, t = !1);
        var r = n ? C.map(e, n, i) : e,
            o = [],
            a = [];
        return _(r, function (n, i) {
            (t ? i && a[a.length - 1] === n : C.contains(a, n)) || (a.push(n), o.push(e[i]))
        }), o
    }, C.union = function () {
        return C.uniq(l.apply(i, arguments))
    }, C.intersection = function (e) {
        var t = s.call(arguments, 1);
        return C.filter(C.uniq(e), function (e) {
            return C.every(t, function (t) {
                return C.indexOf(t, e) >= 0
            })
        })
    }, C.difference = function (e) {
        var t = l.apply(i, s.call(arguments, 1));
        return C.filter(e, function (e) {
            return !C.contains(t, e)
        })
    }, C.zip = function () {
        for (var e = s.call(arguments), t = C.max(C.pluck(e, "length")), n = Array(t), i = 0; t > i; i++) n[i] = C.pluck(e, "" + i);
        return n
    }, C.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
        return n
    }, C.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var i = 0,
            r = e.length;
        if (n) {
            if ("number" != typeof n) return i = C.sortedIndex(e, t), e[i] === t ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n
        }
        if (b && e.indexOf === b) return e.indexOf(t, n);
        for (; r > i; i++) if (e[i] === t) return i;
        return -1
    }, C.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var i = null != n;
        if (y && e.lastIndexOf === y) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var r = i ? n : e.length; r--;) if (e[r] === t) return r;
        return -1
    }, C.range = function (e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = Array(i); i > r;) o[r++] = e, e += n;
        return o
    }, C.bind = function (e, t) {
        if (e.bind === x && x) return x.apply(e, s.call(arguments, 1));
        var n = s.call(arguments, 2);
        return function () {
            return e.apply(t, n.concat(s.call(arguments)))
        }
    }, C.partial = function (e) {
        var t = s.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(s.call(arguments)))
        }
    }, C.bindAll = function (e) {
        var t = s.call(arguments, 1);
        return 0 === t.length && (t = C.functions(e)), _(t, function (t) {
            e[t] = C.bind(e[t], e)
        }), e
    }, C.memoize = function (e, t) {
        var n = {};
        return t || (t = C.identity),
        function () {
            var i = t.apply(this, arguments);
            return C.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
        }
    }, C.delay = function (e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, C.defer = function (e) {
        return C.delay.apply(C, [e, 1].concat(s.call(arguments, 1)))
    }, C.throttle = function (e, t) {
        var n, i, r, o, a = 0,
            s = function () {
                a = new Date, r = null, o = e.apply(n, i)
            };
        return function () {
            var l = new Date,
                u = t - (l - a);
            return n = this, i = arguments, 0 >= u ? (clearTimeout(r), r = null, a = l, o = e.apply(n, i)) : r || (r = setTimeout(s, u)), o
        }
    }, C.debounce = function (e, t, n) {
        var i, r;
        return function () {
            var o = this,
                a = arguments,
                s = function () {
                    i = null, n || (r = e.apply(o, a))
                }, l = n && !i;
            return clearTimeout(i), i = setTimeout(s, t), l && (r = e.apply(o, a)), r
        }
    }, C.once = function (e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, C.wrap = function (e, t) {
        return function () {
            var n = [e];
            return a.apply(n, arguments), t.apply(this, n)
        }
    }, C.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, C.after = function (e, t) {
        return 0 >= e ? t() : function () {
            return 1 > --e ? t.apply(this, arguments) : void 0
        }
    }, C.keys = k || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) C.has(e, n) && (t[t.length] = n);
        return t
    }, C.values = function (e) {
        var t = [];
        for (var n in e) C.has(e, n) && t.push(e[n]);
        return t
    }, C.pairs = function (e) {
        var t = [];
        for (var n in e) C.has(e, n) && t.push([n, e[n]]);
        return t
    }, C.invert = function (e) {
        var t = {};
        for (var n in e) C.has(e, n) && (t[e[n]] = n);
        return t
    }, C.functions = C.methods = function (e) {
        var t = [];
        for (var n in e) C.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, C.extend = function (e) {
        return _(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] = t[n]
        }), e
    }, C.pick = function (e) {
        var t = {}, n = l.apply(i, s.call(arguments, 1));
        return _(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, C.omit = function (e) {
        var t = {}, n = l.apply(i, s.call(arguments, 1));
        for (var r in e) C.contains(n, r) || (t[r] = e[r]);
        return t
    }, C.defaults = function (e) {
        return _(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) null == e[n] && (e[n] = t[n])
        }), e
    }, C.clone = function (e) {
        return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e
    }, C.tap = function (e, t) {
        return t(e), e
    };
    var L = function (e, t, n, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof C && (e = e._wrapped), t instanceof C && (t = t._wrapped);
        var r = u.call(e);
        if (r != u.call(t)) return !1;
        switch (r) {
        case "[object String]":
            return e == t + "";
        case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--;) if (n[o] == e) return i[o] == t;
        n.push(e), i.push(t);
        var a = 0,
            s = !0;
        if ("[object Array]" == r) {
            if (a = e.length, s = a == t.length) for (; a-- && (s = L(e[a], t[a], n, i)););
        } else {
            var l = e.constructor,
                c = t.constructor;
            if (l !== c && !(C.isFunction(l) && l instanceof l && C.isFunction(c) && c instanceof c)) return !1;
            for (var d in e) if (C.has(e, d) && (a++, !(s = C.has(t, d) && L(e[d], t[d], n, i)))) break;
            if (s) {
                for (d in t) if (C.has(t, d) && !a--) break;
                s = !a
            }
        }
        return n.pop(), i.pop(), s
    };
    C.isEqual = function (e, t) {
        return L(e, t, [], [])
    }, C.isEmpty = function (e) {
        if (null == e) return !0;
        if (C.isArray(e) || C.isString(e)) return 0 === e.length;
        for (var t in e) if (C.has(e, t)) return !1;
        return !0
    }, C.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, C.isArray = w || function (e) {
        return "[object Array]" == u.call(e)
    }, C.isObject = function (e) {
        return e === Object(e)
    }, _(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        C["is" + e] = function (t) {
            return u.call(t) == "[object " + e + "]"
        }
    }), C.isArguments(arguments) || (C.isArguments = function (e) {
        return !(!e || !C.has(e, "callee"))
    }), C.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, C.isNaN = function (e) {
        return C.isNumber(e) && e != +e
    }, C.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == u.call(e)
    }, C.isNull = function (e) {
        return null === e
    }, C.isUndefined = function (e) {
        return void 0 === e
    }, C.has = function (e, t) {
        return c.call(e, t)
    }, C.noConflict = function () {
        return e._ = t, this
    }, C.identity = function (e) {
        return e
    }, C.times = function (e, t, n) {
        for (var i = Array(e), r = 0; e > r; r++) i[r] = t.call(n, r);
        return i
    }, C.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var A = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    A.unescape = C.invert(A.escape);
    var F = {
        escape: RegExp("[" + C.keys(A.escape).join("") + "]", "g"),
        unescape: RegExp("(" + C.keys(A.unescape).join("|") + ")", "g")
    };
    C.each(["escape", "unescape"], function (e) {
        C[e] = function (t) {
            return null == t ? "" : ("" + t).replace(F[e], function (t) {
                return A[e][t]
            })
        }
    }), C.result = function (e, t) {
        if (null == e) return null;
        var n = e[t];
        return C.isFunction(n) ? n.call(e) : n
    }, C.mixin = function (e) {
        _(C.functions(e), function (t) {
            var n = C[t] = e[t];
            C.prototype[t] = function () {
                var e = [this._wrapped];
                return a.apply(e, arguments), O.call(this, n.apply(C, e))
            }
        })
    };
    var N = 0;
    C.uniqueId = function (e) {
        var t = ++N + "";
        return e ? e + t : t
    }, C.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /(.)^/,
        I = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, $ = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    C.template = function (e, t, n) {
        var i;
        n = C.defaults({}, n, C.templateSettings);
        var r = RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        e.replace(r, function (t, n, i, r, s) {
            return a += e.slice(o, s).replace($, function (e) {
                return "\\" + I[e]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), o = s + t.length, t
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            i = Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (t) return i(t, C);
        var l = function (e) {
            return i.call(this, e, C)
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
    }, C.chain = function (e) {
        return C(e).chain()
    };
    var O = function (e) {
        return this._chain ? C(e).chain() : e
    };
    C.mixin(C), _(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = i[e];
        C.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], O.call(this, n)
        }
    }), _(["concat", "join", "slice"], function (e) {
        var t = i[e];
        C.prototype[e] = function () {
            return O.call(this, t.apply(this._wrapped, arguments))
        }
    }), C.extend(C.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),


function (e) {
    e.uniform = {
        options: {
            selectClass: "form-element",
            radioClass: "radio",
            checkboxClass: "checker",
            fileClass: "uploader",
            filenameClass: "filename",
            fileBtnClass: "action",
            fileDefaultText: "No file selected",
            fileBtnText: "Choose File",
            checkedClass: "checked",
            focusClass: "focus",
            disabledClass: "disabled",
            buttonClass: "form-button",
            activeClass: "active",
            hoverClass: "hover",
            useID: !0,
            idPrefix: "form-element",
            resetSelector: !1,
            autoHide: !0
        },
        elements: []
    }, e.support.selectOpacity = e.browser.msie && 7 > e.browser.version ? !1 : !0, e.fn.uniform = function (t) {
        function n(t) {
            $el = e(t), $el.addClass($el.attr("type")), u(t)
        }
        function i(t) {
            e(t).addClass("form-element"), u(t)
        }

      
        function u(t) {
            t = e(t).get(), t.length > 1 ? e.each(t, function (t, n) {
                e.uniform.elements.push(n)
            }) : e.uniform.elements.push(t)
        }
        t = e.extend(e.uniform.options, t);
        var c = this;
        return 0 != t.resetSelector && e(t.resetSelector).mouseup(function () {
            function t() {
                e.uniform.update(c)
            }
            setTimeout(t, 10)
        }), e.uniform.restore = function (t) {
            void 0 == t && (t = e(e.uniform.elements)), e(t).each(function () {
                e(this).is(":checkbox") ? e(this).unwrap().unwrap() : e(this).is("select") ? (e(this).siblings("span").remove(), e(this).unwrap()) : e(this).is(":radio") ? e(this).unwrap().unwrap() : e(this).is(":file") ? (e(this).siblings("span").remove(), e(this).unwrap()) : e(this).is("button, :submit, :reset, a, input[type='button']") && e(this).unwrap().unwrap(), e(this).unbind(".uniform"), e(this).css("opacity", "1");
                var n = e.inArray(e(t), e.uniform.elements);
                e.uniform.elements.splice(n, 1)
            })
        }, e.uniform.noSelect = function (t) {
            function n() {
                return !1
            }
            e(t).each(function () {
                this.onselectstart = this.ondragstart = n, e(this).mousedown(n).css({
                    MozUserSelect: "none"
                })
            })
        }, e.uniform.update = function (n) {
            void 0 == n && (n = e(e.uniform.elements)), n = e(n), n.each(function () {
                var i = e(this);
                if (i.is("select")) {
                    var r = i.siblings("span"),
                        o = i.parent("div");
                    o.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), r.html(i.find(":selected").html()), i.is(":disabled") ? o.addClass(t.disabledClass) : o.removeClass(t.disabledClass)
                } else if (i.is(":checkbox")) {
                    var r = i.closest("span"),
                        o = i.closest("div");
                    o.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), r.removeClass(t.checkedClass), i.is(":checked") && r.addClass(t.checkedClass), i.is(":disabled") ? o.addClass(t.disabledClass) : o.removeClass(t.disabledClass)
                } else if (i.is(":radio")) {
                    var r = i.closest("span"),
                        o = i.closest("div");
                    o.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), r.removeClass(t.checkedClass), i.is(":checked") && r.addClass(t.checkedClass), i.is(":disabled") ? o.addClass(t.disabledClass) : o.removeClass(t.disabledClass)
                } else if (i.is(":file")) {
                    var o = i.parent("div"),
                        a = i.siblings(t.filenameClass);
                    btnTag = i.siblings(t.fileBtnClass), o.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), a.text(i.val()), i.is(":disabled") ? o.addClass(t.disabledClass) : o.removeClass(t.disabledClass)
                } else if (i.is(":submit") || i.is(":reset") || i.is("button") || i.is("a") || n.is("input[type=button]")) {
                    var o = i.closest("div");
                    o.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), i.is(":disabled") ? o.addClass(t.disabledClass) : o.removeClass(t.disabledClass)
                }
            })
        }, this.each(function () {
            if (e.support.selectOpacity) {
                var t = e(this);
                t.is("select") ? 1 != t.attr("multiple") && (void 0 == t.attr("size") || 1 >= t.attr("size")) && o(t) : t.is(":checkbox") ? a(t) : t.is(":radio") ? s(t) : t.is(":file") ? l(t) : t.is(":text, :password, input[type='email']") ? n(t) : t.is("textarea") ? i(t) : (t.is("a") || t.is(":submit") || t.is(":reset") || t.is("button") || t.is("input[type=button]")) && r(t)
            }
        })
    }
}(jQuery),


function (k, H) {
    function aa(e, t) {
        var n;
        if ("string" == typeof e && "string" == typeof t) return localStorage[e] = t, !0;
        if ("object" == typeof e && "undefined" == typeof t) {
            for (n in e) e.hasOwnProperty(n) && (localStorage[n] = e[n]);
            return !0
        }
        return !1
    }
    function W(e, t) {
        var n, i;
        if (n = new Date, n.setTime(n.getTime() + 31536e6), n = "; expires=" + n.toGMTString(), "string" == typeof e && "string" == typeof t) return document.cookie = e + "=" + t + n + "; path=/", !0;
        if ("object" == typeof e && "undefined" == typeof t) {
            for (i in e) e.hasOwnProperty(i) && (document.cookie = i + "=" + e[i] + n + "; path=/");
            return !0
        }
        return !1
    }
    function ba(e) {
        return localStorage[e]
    }
    function ca(e) {
        var t, n, i;
        for (e += "=", t = document.cookie.split(";"), n = 0; t.length > n; n++) {
            for (i = t[n];
            " " === i.charAt(0);) i = i.substring(1, i.length);
            if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
        }
        return null
    }
    function da(e) {
        return delete localStorage[e]
    }
    function ea(e) {
        return W(e, "", -1)
    }

    k.omap = function (e, t) {
        var n = {};
        return k.each(e, function (i, r) {
            n[i] = t.call(e, i, r)
        }), n
    };
    var R = "undefined" != typeof window.localStorage;
    k.extend({
        Storage: {
            set: R ? aa : W,
            get: R ? ba : ca,
            remove: R ? da : ea
        }
    }), jQuery.fn.extend({
        everyTime: function (e, t, n, i, r) {
            return this.each(function () {
                jQuery.timer.add(this, e, t, n, i, r)
            })
        },
        oneTime: function (e, t, n) {
            return this.each(function () {
                jQuery.timer.add(this, e, t, n, 1)
            })
        },
        stopTime: function (e, t) {
            return this.each(function () {
                jQuery.timer.remove(this, e, t)
            })
        }
    }), jQuery.extend({
        timer: {
            guid: 1,
            global: {},
            regex: /^([0-9]+)\s*(.*s)?$/,
            powers: {
                ms: 1,
                cs: 10,
                ds: 100,
                s: 1e3,
                das: 1e4,
                hs: 1e5,
                ks: 1e6
            },
            timeParse: function (e) {
                if (e === H || null === e) return null;
                var t = this.regex.exec(jQuery.trim(e.toString()));
                return t[2] ? parseInt(t[1], 10) * (this.powers[t[2]] || 1) : e
            },
            add: function (e, t, n, i, r, o) {
                var a = 0;
                if (jQuery.isFunction(n) && (r || (r = i), i = n, n = t), t = jQuery.timer.timeParse(t), !("number" != typeof t || isNaN(t) || 0 >= t)) {
                    r && r.constructor !== Number && (o = !! r, r = 0), r = r || 0, o = o || !1, e.$timers || (e.$timers = {}), e.$timers[n] || (e.$timers[n] = {}), i.$timerID = i.$timerID || this.guid++;
                    var s = function () {
                        o && s.inProgress || (s.inProgress = !0, (++a > r && 0 !== r || i.call(e, a) === !1) && jQuery.timer.remove(e, n, i), s.inProgress = !1)
                    };
                    s.$timerID = i.$timerID, e.$timers[n][i.$timerID] || (e.$timers[n][i.$timerID] = window.setInterval(s, t)), this.global[n] || (this.global[n] = []), this.global[n].push(e)
                }
            },
            remove: function (e, t, n) {
                var i, r = e.$timers;
                if (r) {
                    if (t) {
                        if (r[t]) {
                            if (n) n.$timerID && (window.clearInterval(r[t][n.$timerID]), delete r[t][n.$timerID]);
                            else for (var o in r[t]) r[t].hasOwnProperty(o) && (window.clearInterval(r[t][o]), delete r[t][o]);
                            for (i in r[t]) if (r[t].hasOwnProperty(i)) break;
                            i || (i = null, delete r[t])
                        }
                    } else for (var a in r) r.hasOwnProperty(a) && this.remove(e, a, n);
                    for (i in r) if (r.hasOwnProperty(i)) break;
                    i || (e.$timers = null)
                }
            }
        }
    }), jQuery.browser.msie && jQuery(window).one("unload", function () {
        var e, t = jQuery.timer.global;
        for (e in t) if (t.hasOwnProperty(e)) for (var n = t[e], i = n.length; --i;) jQuery.timer.remove(n[i], e)
    }),
    function (e) {
        if (String.prototype.split.toString().match(/\[native/)) {
            var t, n = String.prototype.split,
                i = /()??/.exec("")[1] === e;
            return t = function (t, r, o) {
                if ("[object RegExp]" !== Object.prototype.toString.call(r)) return n.call(t, r, o);
                var a, s, l, u = [],
                    c = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.extended ? "x" : "") + (r.sticky ? "y" : ""),
                    d = 0;
                for (r = RegExp(r.source, c + "g"), t += "", i || (a = RegExp("^" + r.source + "$(?!\\s)", c)), o = o === e ? 4294967295 : o >>> 0;
                (s = r.exec(t)) && (c = s.index + s[0].length, !(c > d && (u.push(t.slice(d, s.index)), !i && s.length > 1 && s[0].replace(a, function () {
                    for (var t = 1; arguments.length - 2 > t; t++) arguments[t] === e && (s[t] = e)
                }), s.length > 1 && s.index < t.length && Array.prototype.push.apply(u, s.slice(1)), l = s[0].length, d = c, u.length >= o)));) r.lastIndex === s.index && r.lastIndex++;
                return d === t.length ? (l || !r.test("")) && u.push("") : u.push(t.slice(d)), u.length > o ? u.slice(0, o) : u
            }, String.prototype.split = function (e, n) {
                return t(this, e, n)
            }, t
        }
    }(), k.json_stringify = function (e, t) {
        var n, i = "";
        switch (t = t === H ? 1 : t, typeof e) {
        case "function":
            i += e;
            break;
        case "boolean":
            i += e ? "true" : "false";
            break;
        case "object":
            if (null === e) i += "null";
            else if (e instanceof Array) {
                i += "[";
                var r = e.length;
                for (n = 0; r - 1 > n; ++n) i += k.json_stringify(e[n], t + 1);
                i += k.json_stringify(e[r - 1], t + 1) + "]"
            } else {
                i += "{";
                for (r in e) e.hasOwnProperty(r) && (i += '"' + r + '":' + k.json_stringify(e[r], t + 1));
                i += "}"
            }
            break;
        case "string":
            r = e;
            var o = {
                "\\\\": "\\\\",
                '"': '\\"',
                "/": "\\/",
                "\\n": "\\n",
                "\\r": "\\r",
                "\\t": "\\t"
            };
            for (n in o) o.hasOwnProperty(n) && (r = r.replace(RegExp(n, "g"), o[n]));
            i += '"' + r + '"';
            break;
        case "number":
            i += String(e)
        }
        return i += t > 1 ? "," : "", 1 === t && (i = i.replace(/,([\]}])/g, "$1")), i.replace(/([\[{]),/g, "$1")
    }, k.fn.cmd = function (e) {

        var s = this;
        s.addClass("cmd"), s.append('<span class="prompt"></span><span></span><span class="cursor">&nbsp;</span><span></span>');
        var l = k("<textarea/>").addClass("clipboard").appendTo(s);
        e.width && s.width(e.width);
        var u, c, d, h, f, p, m = !1,
            g = "",
            v = null,
            b = e.mask || !1,
            y = "",
            w = 0,
            x = e.enabled,
            C = s.find(".cursor"),
            _ = function (e) {
                function t(e, t) {
                    if (t === e.length) a.html(k.terminal.encode(e)), C.html("&nbsp;"), s.html("");
                    else if (0 === t) a.html(""), C.html(k.terminal.encode(e.slice(0, 1))), s.html(k.terminal.encode(e.slice(1)));
                    else {
                        var n = k.terminal.encode(e.slice(0, t));
                        a.html(n), n = e.slice(t, t + 1), C.html(" " === n ? "&nbsp;" : k.terminal.encode(n)), t === e.length - 1 ? s.html("") : s.html(k.terminal.encode(e.slice(t + 1)))
                    }
                }
                function n(e) {
                    return "<div>" + k.terminal.encode(e) + "</div>"
                }
                function i(e) {
                    var t = s;
                    k.each(e, function (e, i) {
                        t = k(n(i)).insertAfter(t).addClass("clear")
                    })
                }
                function o(e) {
                    k.each(e, function (e, t) {
                        a.before(n(t))
                    })
                }
                var a = C.prev(),
                    s = C.next();
                return function () {
                    var l, d, h = b ? y.replace(/./g, "*") : y;
                    if (e.find("div").remove(), a.html(""), h.length > u - c - 1 || h.match(/\n/)) {
                        var f, p = h.match(/\t/g),
                            m = p ? 3 * p.length : 0;
                        if (p && (h = h.replace(/\t/g, "\0\0\0\0")), h.match(/\n/)) {
                            var g = h.split("\n");
                            for (d = u - c - 1, l = 0; g.length - 1 > l; ++l) g[l] += " ";
                            for (g[0].length > d ? (f = [g[0].substring(0, d)], f = f.concat(U(g[0].substring(d), u))) : f = [g[0]], l = 1; g.length > l; ++l) g[l].length > u ? f = f.concat(U(g[l], u)) : f.push(g[l])
                        } else f = r(h); if (p && (f = k.map(f, function (e) {
                            return e.replace(/\x00\x00\x00\x00/g, "	")
                        })), d = f[0].length, d > w) t(f[0], w), i(f.slice(1));
                        else if (w === d) a.before(n(f[0])), t(f[1], 0), i(f.slice(2));
                        else if (l = f.length, d > w) t(f[0], w), i(f.slice(1));
                        else if (w === d) a.before(n(f[0])), t(f[1], 0), i(f.slice(2));
                        else {
                            p = f.slice(-1)[0], g = h.length - w;
                            var v = p.length;
                            if (h = 0, v >= g) o(f.slice(0, -1)), t(p, (v === g ? 0 : v - g) + m);
                            else if (3 === l) a.before("<div>" + k.terminal.encode(f[0]) + "</div>"), t(f[1], w - d - 1), s.after('<div class="clear">' + k.terminal.encode(f[2]) + "</div>");
                            else {
                                for (h = w, l = 0; f.length > l && (d = f[l].length, h > d); ++l) h -= d;
                                d = f[l], m = l, h === d.length && (h = 0, d = f[++m]), t(d, h), o(f.slice(0, m)), i(f.slice(m + 1))
                            }
                        }
                    } else "" === h ? (a.html(""), C.html("&nbsp;"), s.html("")) : t(h, w)
                }
            }(s),
            T = function () {
                var e = s.find(".prompt");
                return function () {
                    "string" == typeof h ? (c = X(h), e.html(k.terminal.format(h))) : h(function (t) {
                        c = X(t), e.html(k.terminal.format(t))
                    })
                }
            }();
        return k.extend(s, {
            name: function (e) {
                return e === H ? f : (f = e, p = new ga(e), void 0)
            },
            history: function () {
                return p
            },
            set: function (t, n) {
                t !== H && (y = t, n || (w = y.length), _(), "function" == typeof e.onCommandChange && e.onCommandChange(y))
            },
            insert: function (t, n) {
                w === y.length ? y += t : y = 0 === w ? t + y : y.slice(0, w) + t + y.slice(w), n || (w += t.length), _(), "function" == typeof e.onCommandChange && e.onCommandChange(y)
            },
            get: function () {
                return y
            },
            commands: function (t) {
                return t ? (e.commands = t, void 0) : t
            },
            destroy: function () {
                k(document.documentElement).unbind(".commandline"), s.find(".prompt").remove()
            },
            prompt: function (e) {
                if (e === H) return h;
                if ("string" != typeof e && "function" != typeof e) throw "prompt must be a function or string";
                h = e, T(), _()
            },
            position: function (e) {
                return "number" != typeof e ? w : (w = 0 > e ? 0 : e > y.length ? y.length : e, _(), void 0)
            },
            visible: function () {
                var e = s.visible;
                return function () {
                    e.apply(s, []), _(), T()
                }
            }(),
            show: function () {
                var e = s.show;
                return function () {
                    e.apply(s, []), _(), T()
                }
            }(),
            resize: function (e) {
                if (e) u = e;
                else {
                    e = s.width();
                    var t = C.innerWidth();
                    u = Math.floor(e / t)
                }
                _()
            },
            enable: function () {
                x || (C.addClass("inverted"), s.everyTime(500, "blink", t), x = !0)
            },
            isenabled: function () {
                return x
            },
            disable: function () {
                x && (s.stopTime("blink", t), C.removeClass("inverted"), x = !1)
            },
            mask: function (e) {
                return "boolean" != typeof e ? b : (b = e, _(), void 0)
            }
        }), s.name(e.name || ""), h = e.prompt || "> ", T(), (e.enabled === H || e.enabled === !0) && s.enable(), k(k.browser.msie ? document.documentElement : window).keypress(function (t) {
            var r;
            if (t.ctrlKey && 99 === t.which) return !0;
            if (!m && e.keypress && (r = e.keypress(t)), r !== H && !r) return r;
            if (x) {
                if (k.inArray(t.which, [38, 32, 13, 0, 8]) > -1 && 123 !== t.keyCode && (38 !== t.which || !t.shiftKey)) return !1;
                if (!(t.ctrlKey || t.altKey && 100 === t.which)) return m ? (g += String.fromCharCode(t.which), n(), i()) : s.insert(String.fromCharCode(t.which)), !1;
                t.altKey && (m ? (g += String.fromCharCode(t.which), n(), i()) : s.insert(String.fromCharCode(t.which)))
            }
        }).keydown(a), s
    };
    var ha = /(\[\[[gbius]*;[^;]*;[^\]]*\](?:[^\]\[]*|\[*(?!\[)[^\]]*\][^\]]*)\])/g,
        Z = /\[\[([gbius]*);([^;]*);([^;\]]*;|[^\]]*);?([^\]]*)\]([^\]\[]*|[^\[]*\[(?!\[)*[^\]]*\][^\]]*)\]/g,
        $ = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/,
        ia = /(https?:((?!&[^;]+;)[^\s:"'<)])+)/g,
        ja = /((([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/g;
    k.terminal = {
        split_equal: function (e, t) {
            for (var n = e.split(/\n/g), i = /(\[\[[gbius]*;[^;]*;[^\]]*\][^\]\[]*\]?)/g, r = /(\[\[[gbius]*;[^;]*;[^\]]*\])/, o = /\[\[[gbius]*;?[^;]*;?[^\]]*\]?$/, a = !1, s = !1, l = "", u = [], c = 0, d = n.length; d > c; ++c) {
                if ("" !== l) {
                    if ("" === n[c]) {
                        u.push(l + "]");
                        continue
                    }
                    n[c] = l + n[c], l = ""
                } else if ("" === n[c]) {
                    u.push("");
                    continue
                }
                for (var h = n[c], f = 0, p = 0, m = 0, g = h.length; g > m; ++m) if ("[" === h[m] && "[" === h[m + 1] ? a = !0 : a && "]" === h[m] ? s = s ? a = !1 : !0 : (a && s || !a) && ++p, p === t || m === g - 1) {
                        var v = h.substring(f, m + 1);
                        l && (v = l + v, v.match("]") && (l = "")), f = m + 1, p = 0;
                        var b = v.match(i);
                        b && (b = b[b.length - 1], "]" !== b[b.length - 1] ? (l = b.match(r)[1], v += "]") : v.match(o) && (v = v.replace(o, ""), l = b.match(r)[1])), u.push(v)
                    }
            }
            return u
        },
        encode: function (e) {
            return e.replace(/&(?!#[0-9]+;|[a-zA-Z]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
        },
        format: function (e) {
            if ("string" == typeof e) {
                e = k.terminal.encode(k.terminal.from_ansi(e));
                var t = e.split(ha);
                return t && t.length > 1 && (e = k.map(t, function (e) {
                    return "" === e ? e : "[" === e.substring(0, 1) ? e.replace(Z, function (e, t, n, i, r, o) {
                        if ("" === o) return "<span>&nbsp;</span>";
                        e = "", -1 !== t.indexOf("b") && (e += "font-weight:bold;");
                        var a = "text-decoration:";
                        return -1 !== t.indexOf("u") && (a += "underline "), -1 !== t.indexOf("s") && (a += "line-through"), (-1 !== t.indexOf("s") || -1 !== t.indexOf("u")) && (e += a + ";"), -1 !== t.indexOf("i") && (e += "font-style:italic;"), n.match($) && (e += "color:" + n + ";", -1 !== t.indexOf("g") && (e += "text-shadow: 0 0 5px " + n + ";")), i.match($) && (e += "background-color:" + i), '<span style="' + e + '"' + ("" != r ? ' class="' + r + '"' : "") + ">" + o + "</span>"
                    }) : "<span>" + e + "</span>"
                }).join("")), e.replace(ia, function (e) {
                    var t = e.match(/\.$/);
                    return e = e.replace(/\.$/, ""), '<a target="_blank" href="' + e + '">' + e + "</a>" + (t ? "." : "")
                }).replace(ja, '<a href="mailto:$1">$1</a>').replace(/<span><br\/?><\/span>/g, "<br/>")
            }
            return ""
        },
        strip: function (e) {
            return e.replace(Z, "$5")
        },
        active: function () {
            return O.front()
        },
        ansi_colors: {
            normal: {
                black: "#000",
                red: "#AA0000",
                green: "#008400",
                yellow: "#AA5500",
                blue: "#0000AA",
                magenta: "#AA00AA",
                cyan: "#00AAAA",
                white: "#fff"
            },
            bold: {
                white: "#fff",
                red: "#FF5555",
                green: "#44D544",
                yellow: "#FFFF55",
                blue: "#5555FF",
                magenta: "#FF55FF",
                cyan: "#55FFFF",
                black: "#000"
            }
        },
        from_ansi: function () {
            function e(e) {
                var i, r = e.split(";");
                e = [];
                var o, a = "",
                    s = "";
                for (o in r) i = parseInt(r[o], 10), 1 === i && e.push("b"), 4 === i && e.push("u"), n[i] && (s = n[i]), t[i] && (a = t[i]);
                for (i = r = k.terminal.ansi_colors.normal, o = e.length; o--;) if ("b" == e[o]) {
                        "" == a && (a = "white"), i = k.terminal.ansi_colors.bold;
                        break
                    }
                return "[[" + [e.join(""), i[a], r[s]].join(";") + "]"
            }
            var t = {
                30: "black",
                31: "red",
                32: "green",
                33: "yellow",
                34: "blue",
                35: "magenta",
                36: "cyan",
                37: "white"
            }, n = {
                    40: "black",
                    41: "red",
                    42: "green",
                    43: "yellow",
                    44: "blue",
                    45: "magenta",
                    46: "cyan",
                    47: "white"
                };
            return function (t) {
                var n = t.split(/(\[[0-9;]*m)/g);
                if (1 == n.length) return t;
                t = [], n.length > 3 && "[0m" == n.slice(0, 3).join("") && (n = n.slice(3));
                for (var i = !1, r = 0; n.length > r; ++r) {
                    var o = n[r].match(/^\[([0-9;]*)m$/);
                    o ? "" != o[1] && (i ? (t.push("]"), "0" == o[1] ? i = !1 : t.push(e(o[1]))) : (i = !0, t.push(e(o[1])))) : t.push(n[r])
                }
                return i && t.push("]"), t.join("")
            }
        }()
    }, k.fn.visible = function () {
        return this.css("visibility", "visible")
    }, k.fn.hidden = function () {
        return this.css("visibility", "hidden")
    }, k.jrpc = function (e, t, n, i, r, o) {
        return t = k.json_stringify({
            jsonrpc: "2.0",
            method: n,
            params: i,
            id: t
        }), k.ajax({
            url: e,
            data: t,
            success: r,
            error: o,
            contentType: "application/json",
            dataType: "json",
            async: !0,
            cache: !1,
            type: "POST"
        })
    }, R = / {14}$/;
    var ka = [
        ["jQuery Terminal", "(c) 2011-2012 jcubic"],
        ["jQuery Terminal Emulator v. 0.4.22", "Copyright (c) 2011-2012 Jakub Jankiewicz <http://jcubic.pl>".replace(/ *<.*>/, "")],
        ["jQuery Terminal Emulator version version 0.4.22", "Copyright (c) 2011-2012 Jakub Jankiewicz <http://jcubic.pl>"],
        ["      _______                 ________                        __", "     / / _  /_ ____________ _/__  ___/______________  _____  / /", " __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /", "/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__", "\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/ /_/ /_/  \\/\\__\\_\\___/", "         \\/          /____/                                   ".replace(R, "") + "version 0.4.22", "Copyright (c) 2011-2012 Jakub Jankiewicz <http://jcubic.pl>"],
        ["      __ _____                     ________                              __", "     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /", " __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /", "/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__", "\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/", "          \\/              /____/                                          ".replace(R, "") + "version 0.4.22", "Copyright (c) 2011-2012 Jakub Jankiewicz <http://jcubic.pl>"]
    ],
        V = [],
        O = new function (e) {
            var t = e ? [e] : [],
                n = 0;
            k.extend(this, {
                rotate: function () {
                    return 1 === t.length ? t[0] : (n === t.length - 1 ? n = 0 : ++n, t[n])
                },
                length: function () {
                    return t.length
                },
                set: function (e) {
                    for (var i = t.length; i--;) if (t[i] === e) return n = i, void 0;
                    this.append(e)
                },
                front: function () {
                    return t[n]
                },
                append: function (e) {
                    t.push(e)
                }
            })
        };
    k.fn.terminal = function (e, t) {
        function n() {
            return y.get(0).scrollHeight > y.innerHeight()
        }
        function i() {
            var e = y.find(".cursor").width(),
                t = Math.floor(y.width() / e);
            if (n()) {
                var i = y.innerWidth() - y.width();
                t -= Math.ceil((20 - i / 2) / (e - 1))
            }
            return t
        }
        function r(e, t) {
            _.displayExceptions && (y.error("&#91;" + t + "&#93;: " + ("string" == typeof e ? e : "string" == typeof e.fileName ? e.fileName + ": " + e.message : e.message)), "string" == typeof e.fileName && (y.pause(), k.get(e.fileName, function (t) {
                y.resume();
                var n = e.lineNumber - 1;
                (t = t.split("\n")[n]) && y.error("&#91;" + e.lineNumber + "&#93;: " + t)
            })), e.stack && y.error(e.stack))
        }
        function o(e, t) {
            try {
                if ("function" == typeof t) t(function () {});
                else if ("string" != typeof t) throw e + " must be string or function"
            } catch (n) {
                return r(n, e.toUpperCase()), !1
            }
            return !0
        }
        function a() {
            var e = y.prop ? y.prop("scrollHeight") : y.attr("scrollHeight");
            y.scrollTop(e)
        }
        function s(e) {
            e = "string" == typeof e ? e : String(e);
            var t, n;
            if (e.length > b) {
                var i = k.terminal.split_equal(e, b);
                for (e = k("<div></div>"), t = 0, n = i.length; n > t; ++t) "" === i[t] || "\r" === i[t] ? e.append("<div>&nbsp;</div>") : k("<div/>").html(k.terminal.format(i[t])).appendTo(e)
            } else e = k("<div/>").html(k.terminal.format(e));
            return v.append(e), e.width("100%"), a(), e
        }
        function l() {
            t.greetings === H ? y.echo(y.signature) : t.greetings && y.echo(t.greetings)
        }
        function u(e, t) {
            var n = 1,
                i = function (i, r) {
                    t.pause(), k.jrpc(e, n++, i, r, function (e) {
                        if (e.error) t.error("&#91;RPC&#93; " + e.error.message);
                        else if ("string" == typeof e.result) t.echo(e.result);
                        else if (e.result instanceof Array) t.echo(e.result.join(" "));
                        else if ("object" == typeof e.result) {
                            var n, i = "";
                            for (n in e.result) e.result.hasOwnProperty(n) && (i += n + ": " + e.result[n] + "\n");
                            t.echo(i)
                        }
                        t.resume()
                    }, function (e, n) {
                        t.error("&#91;AJAX&#93; " + n + " - Server reponse is: \n" + e.responseText), t.resume()
                    })
                };
            return function (e, t) {
                if ("" !== e) {
                    var n, r;
                    if (e.match(/[^ ]* /) ? (e = e.split(/ +/), n = e[0], r = e.slice(1)) : (n = e, r = []), _.login && "help" !== n) {
                        var o = t.token();
                        o ? i(n, [o].concat(r)) : t.error("&#91;AUTH&#93; Access denied (no token)")
                    } else i(n, r)
                }
            }
        }
        function c(e) {
            e = e.replace(/\[/g, "&#91;").replace(/\]/g, "&#93;");
            var t = P.prompt();
            P.mask() && (e = e.replace(/./g, "*")), "function" == typeof t ? t(function (t) {
                y.echo(t + e)
            }) : y.echo(t + e)
        }
        function d(e, t) {
            try {
                var n = N.top();
                "exit" === e && _.exit ? 1 === N.size() ? _.login ? f() : (t || c(e), y.echo("You can exit from main interpeter")) : y.pop("exit") : (t || c(e), "clear" === e && _.clear ? y.clear() : n.eval(e, y))
            } catch (i) {
                throw r(i, "USER"), y.resume(), i
            }
        }
        function h() {
            var e = null;
            P.prompt("login: "), _.history && P.history().disable(), P.commands(function (t) {
                try {
                    if (c(t), e) {
                        if (P.mask(!1), y.pause(), "function" != typeof _.login) throw "Value of login property must be a function";
                        _.login(e, t, function (t) {
                            if (t) {
                                var n = _.name;
                                n = n ? "_" + n : "", k.Storage.set("token" + n, t), k.Storage.set("login" + n, e), P.commands(d), m()
                            } else y.error("Wrong password try again"), P.prompt("login: "), e = null;
                            y.resume(), _.history && P.history().enable()
                        })
                    } else e = t, P.prompt("password: "), P.mask(!0)
                } catch (n) {
                    throw r(n, "LOGIN", y), n
                }
            })
        }
        function f() {
            if ("function" == typeof _.onBeforelogout) try {
                    if (0 == _.onBeforelogout(y)) return
            } catch (e) {
                throw r(e, "onBeforelogout"), e
            }
            var t = _.name;
            if (t = t ? "_" + t : "", k.Storage.remove("token" + t, null), k.Storage.remove("login" + t, null), _.history && P.history().disable(), h(), "function" == typeof _.onAfterlogout) try {
                    _.onAfterlogout(y)
            } catch (n) {
                throw r(n, "onAfterlogout"), n
            }
        }
        function p() {
            var e = N.top(),
                t = "";
            e.name !== H && "" !== e.name && (t += e.name + "_"), t += x, P.name(t), "function" == typeof e.prompt ? P.prompt(function (t) {
                e.prompt(t, y)
            }) : P.prompt(e.prompt), _.history && P.history().enable(), P.set(""), "function" == typeof e.onStart && e.onStart(y)
        }
        function m() {
            if (p(), l(), "function" == typeof _.onInit) try {
                    _.onInit(y)
            } catch (e) {
                throw r(e, "OnInit"), e
            }
        }
        function g(e) {
            if (y.oneTime(5, function () {
                E()
            }), _.keydown && _.keydown(e, y) === !1) return !1;
            if (y.paused()) {
                if (68 === e.which && e.ctrlKey) {
                    for (e = V.length; e--;) {
                        var t = V[e];
                        if (4 !== t.readyState) try {
                                t.abort()
                        } catch (n) {
                            y.error("error in aborting ajax")
                        }
                    }
                    return y.resume(), !1
                }
            } else {
                if (9 !== e.which && (j = 0), 68 === e.which && e.ctrlKey) return "" === P.get() ? N.size() > 1 || _.login !== H ? y.pop("") : (y.resume(), y.echo("")) : y.set_command(""), !1;
                if (_.tabcompletion && 9 === e.which) {
                    if (++j, t = P.get(), !t.match(" ")) {
                        var i = RegExp("^" + t),
                            r = N.top().command_list,
                            o = [];
                        for (e = r.length; e--;) i.test(r[e]) && o.push(r[e]);
                        1 === o.length ? y.set_command(o[0]) : o.length > 1 && j >= 2 && (c(t), y.echo(o.join("	")), j = 0)
                    }
                    return !1
                }
                if (86 === e.which && e.ctrlKey) return y.oneTime(1, function () {
                        a()
                    }), !0;
                if (9 === e.which && e.ctrlKey) return O.length() > 1 && y.focus(!1), !1;
                34 === e.which ? y.scroll(y.height()) : 33 === e.which ? y.scroll(-y.height()) : y.attr({
                    scrollTop: y.attr("scrollHeight")
                })
            }
        }
        var v, b, y = this,
            w = [],
            x = O.length(),
            C = [],
            _ = k.extend({
                name: "",
                prompt: "> ",
                history: !0,
                exit: !0,
                clear: !0,
                enabled: !0,
                displayExceptions: !0,
                cancelableAjax: !0,
                login: null,
                tabcompletion: null,
                historyFilter: null,
                onInit: k.noop,
                onClear: k.noop,
                onBlur: k.noop,
                onFocus: k.noop,
                onTerminalChange: k.noop,
                onExit: k.noop,
                keypress: k.noop,
                keydown: k.noop
            }, t || {});
        _.width && y.width(_.width), _.height && y.height(_.height);
        var T = !_.enabled;
        if (0 === y.length) throw 'Sorry, but terminal said that "' + y.selector + '" is not valid selector!';
        if (y.ajaxSend(function (e, t) {
            V.push(t)
        }), y.data("terminal")) return y.data("terminal");
        v = k("<div>").addClass("terminal-output").appendTo(y), y.addClass("terminal").append("<div/>"), y.click(function () {
            y.find("textarea").focus()
        });
        var S = [];
        k.extend(y, k.omap({
            clear: function () {
                v.html(""), P.set(""), w = [];
                try {
                    _.onClear(y)
                } catch (e) {
                    throw r(e, "onClear"), e
                }
                return y.attr({
                    scrollTop: 0
                }), y
            },
            exec: function (e, t) {
                return T ? S.push([e, t]) : d(e, t), y
            },
            commands: function () {
                return N.top().eval
            },
            greetings: function () {
                return l(), y
            },
            paused: function () {
                return T
            },
            pause: function () {
                return P && (T = !0, y.disable(), P.hidden()), y
            },
            resume: function () {
                if (P) {
                    y.enable();
                    var e = S;
                    for (S = []; e.length;) {
                        var t = e.shift();
                        y.exec.apply(y, t)
                    }
                    P.visible(), a()
                }
                return y
            },
            cols: function () {
                return b
            },
            rows: function () {
                return w.length
            },
            history: function () {
                return P.history()
            },
            next: function () {
                if (1 === O.length()) return y;
                var e = y.offset().top;
                y.height(), y.scrollTop();
                var t = y,
                    n = k(window).scrollTop(),
                    i = n + k(window).height(),
                    o = k(t).offset().top;
                if (o + k(t).height() >= n && i >= o) {
                    O.front().disable(), e = O.rotate().enable(), t = e.offset().top - 50, k("html,body").animate({
                        scrollTop: t
                    }, 500);
                    try {
                        _.onTerminalChange(e)
                    } catch (a) {
                        throw r(a, "onTerminalChange"), a
                    }
                    return e
                }
                return y.enable(), k("html,body").animate({
                    scrollTop: e - 50
                }, 500), y
            },
            focus: function (e, t) {
                return y.oneTime(1, function () {
                    if (1 === O.length()) if (e === !1) try {
                                !t && _.onBlur(y) !== !1 && y.disable()
                        } catch (n) {
                        throw r(n, "onBlur"), n
                    } else try {
                            !t && _.onFocus(y) !== !1 && y.enable()
                    } catch (i) {
                        throw r(i, "onFocus"), i
                    } else if (e === !1) y.next();
                    else {
                        var o = O.front();
                        if (o != y && (o.disable(), !t)) try {
                                _.onTerminalChange(y)
                        } catch (a) {
                            throw r(a, "onTerminalChange"), a
                        }
                        O.set(y), y.enable()
                    }
                }), y
            },
            enable: function () {
                return b === H && y.resize(), T && P && (P.enable(), T = !1), y
            },
            disable: function () {
                return P && (T = !0, P.disable()), y
            },
            enabled: function () {
                return T
            },
            signature: function () {
                var e = y.cols();
                return e = 15 > e ? null : 35 > e ? 0 : 55 > e ? 1 : 64 > e ? 2 : 75 > e ? 3 : 4, null !== e ? ka[e].join("\n") + "\n" : ""
            },
            version: function () {
                return "0.4.22"
            },
            get_command: function () {
                return P.get()
            },
            insert: function (e) {
                if ("string" == typeof e) return P.insert(e), y;
                throw "insert function argument is not a string"
            },
            set_prompt: function (e) {
                return o("prompt", e) && ("function" == typeof e ? P.prompt(function (t) {
                    e(t, y)
                }) : P.prompt(e), N.top().prompt = e), y
            },
            get_prompt: function () {
                return N.top().prompt
            },
            set_command: function (e) {
                return P.set(e), y
            },
            set_mask: function (e) {
                return P.mask(e), y
            },
            get_output: function (e) {
                return e ? w : k.map(w, function (e, t) {
                    return "function" == typeof t ? t() : t
                }).join("\n")
            },
            resize: function (e, t) {
                e && t && (y.width(e), y.height(t)), b = i(), P.resize(b);
                var n = v.detach();
                return v.html(""), k.each(w, function (e, t) {
                    s(t && "function" == typeof t ? t() : t)
                }), y.prepend(n), a(), y
            },
            echo: function (e) {
                return w.push(e), s("function" == typeof e ? e() : e), E(), y
            },
            error: function (e) {
                return y.echo("[[;#f00;]" + e.replace(/\[/g, "&#91;").replace(/\]/g, "&#93;") + "]")
            },
            scroll: function (e) {
                var t;
                return e = Math.round(e), y.prop ? (e > y.prop("scrollTop") && e > 0 && y.prop("scrollTop", 0), t = y.prop("scrollTop"), y.prop("scrollTop", t + e)) : (e > y.attr("scrollTop") && e > 0 && y.attr("scrollTop", 0), t = y.attr("scrollTop"), y.attr("scrollTop", t + e)), y
            },
            logout: _.login ? function () {
                for (; N.size() > 1;) N.pop();
                return f(), y
            } : function () {
                throw "You don't have login function"
            },
            token: _.login ? function () {
                var e = _.name;
                return k.Storage.get("token" + (e ? "_" + e : ""))
            } : k.noop,
            login_name: _.login ? function () {
                var e = _.name;
                return k.Storage.get("login" + (e ? "_" + e : ""))
            } : k.noop,
            name: function () {
                return _.name
            },
            push: function (e, t) {
                return (t && (!t.prompt || o("prompt", t.prompt)) || !t) && ("string" == typeof e && (e = u(t.eval, y)), N.push(k.extend({
                    eval: e
                }, t)), p()), y
            },
            reset: function () {
                for (y.clear(); N.size() > 1;) N.pop();
                m()
            },
            pop: function (e) {
                if (e !== H && c(e), N.top().name === _.name) {
                    if (_.login && (f(), "function" == typeof _.onExit)) try {
                            _.onExit(y)
                    } catch (t) {
                        throw r(t, "onExit"), t
                    }
                } else if (e = N.pop(), p(), "function" == typeof e.onExit) try {
                        e.onExit(y)
                } catch (n) {
                    throw r(n, "onExit"), n
                }
                return y
            }
        }, function (e, t) {
            return function () {
                try {
                    return t.apply(this, Array.prototype.slice.apply(arguments))
                } catch (e) {
                    r(e, "TERMINAL")
                }
            }
        }));
        var M, E = function () {
                var e = n();
                return function () {
                    e !== n() && (y.resize(), e = n())
                }
            }(),
            j = 0;
        if (_.login && "function" == typeof _.onBeforeLogin) try {
                _.onBeforeLogin(y)
        } catch (L) {
            throw r(L, "onBeforeLogin"), L
        }
        if ("string" == typeof e) M = e, e = u(e, y);
        else {
            if ("object" == typeof e && e.constructor === Array) throw "You can't use array as eval";
            if ("object" == typeof e) {
                for (var A in e) e.hasOwnProperty(A) && C.push(A);
                e = function F(e) {
                    return function (t) {
                        if ("" !== t) {
                            t = t.split(/ +/);
                            var n = t[0],
                                i = t.slice(1);
                            t = e[n];
                            var r = typeof t;
                            if ("function" === r) t.apply(y, i);
                            else if ("object" === r || "string" === r) {
                                if (i = [], "object" === r) {
                                    for (var o in t) t.hasOwnProperty(o) && i.push(o);
                                    t = F(t)
                                }
                                y.push(t, {
                                    prompt: n + "> ",
                                    name: n,
                                    command_list: i
                                })
                            } else y.error("Command '" + n + "' Not Found")
                        }
                    }
                }(e)
            } else if ("function" != typeof e) throw 'Unknow object "' + String(e) + '" passed as eval'
        } if (M && ("string" == typeof _.login || _.login) && (_.login = function (e) {
            var t = 1;
            return function (n, i, r) {
                y.pause(), k.jrpc(M, t++, e, [n, i], function (e) {
                    y.resume(), !e.error && e.result ? r(e.result) : r(null)
                }, function (e, t) {
                    y.resume(), y.error("&#91;AJAX&#92; Response: " + t + "\n" + e.responseText)
                })
            }
        }("boolean" == typeof _.login ? "login" : _.login)), o("prompt", _.prompt)) {
            var N = new fa({
                name: _.name,
                eval: e,
                prompt: _.prompt,
                command_list: C,
                greetings: _.greetings
            }),
                P = y.find(".terminal-output").next().cmd({
                    prompt: _.prompt,
                    history: _.history,
                    historyFilter: _.historyFilter,
                    width: "100%",
                    keydown: g,
                    keypress: _.keypress ? function (e) {
                        return _.keypress(e, y)
                    } : null,
                    onCommandChange: function (e) {
                        if ("function" == typeof _.onCommandChange) try {
                                _.onCommandChange(e, y)
                        } catch (t) {
                            throw r(t, "onCommandChange"), t
                        }
                        a()
                    },
                    commands: d
                });
            O.append(y), _.enabled === !0 ? y.focus(H, !0) : y.disable(), k(window).resize(y.resize), y.click(function () {
                T && O.length() > 1 && y === k.terminal.active() || y.focus()
            }), t.login && y.token && !y.token() && y.login_name && !y.login_name() ? h() : m(), "function" == typeof k.fn.init.prototype.mousewheel && y.mousewheel(function (e, t) {
                return t > 0 ? y.scroll(-40) : y.scroll(40), !1
            }, !0)
        }
        return y.data("terminal", y), y
    }
}(jQuery),

function (e) {
    e.InFieldLabels = function (t, n, i) {
        var r = this;
        r.$label = e(t), r.label = t, r.$field = e(n), r.field = n, r.$label.data("InFieldLabels", r), r.showing = !0, r.init = function () {
            r.options = e.extend({}, e.InFieldLabels.defaultOptions, i), "" != r.$field.val() && (r.$label.hide(), r.showing = !1), r.$field.focus(function () {
                r.fadeOnFocus()
            }).blur(function () {
                r.checkForEmpty(!0)
            }).bind("keydown.infieldlabel", function (e) {
                r.hideOnChange(e)
            }).change(function () {
                r.checkForEmpty()
            }).bind("onPropertyChange", function () {
                r.checkForEmpty()
            }), setTimeout(function () {
                r.checkForEmpty(!0)
            }, 500)
        }, r.fadeOnFocus = function () {
            r.showing && r.setOpacity(r.options.fadeOpacity)
        }, r.setOpacity = function (e) {
            r.$label.stop().animate({
                opacity: e
            }, r.options.fadeDuration), r.showing = e > 0
        }, r.checkForEmpty = function (e) {
            "" == r.$field.val() ? (r.prepForShow(), r.setOpacity(e ? 1 : r.options.fadeOpacity)) : r.setOpacity(0)
        }, r.prepForShow = function () {
            r.showing || (r.$label.css({
                opacity: 0
            }).show(), r.$field.bind("keydown.infieldlabel", function (e) {
                r.hideOnChange(e)
            }))
        }, r.hideOnChange = function (e) {
            16 != e.keyCode && 9 != e.keyCode && (r.showing && (r.$label.hide(), r.showing = !1), r.$field.unbind("keydown.infieldlabel"))
        }, r.init()
    }, e.InFieldLabels.defaultOptions = {
        fadeOpacity: .5,
        fadeDuration: 300
    }, e.fn.inFieldLabels = function (t) {
        return this.each(function () {
            var n = e(this).attr("for");
            if (n) {
                var i = e("input#" + n + "[type='text']," + "input#" + n + "[type='email']," + "input#" + n + "[type='password']," + "textarea#" + n);
                0 != i.length && new e.InFieldLabels(this, i[0], t)
            }
        })
    }
}(jQuery),

jQuery.cookie = function (e, t, n) {
    if (arguments.length > 1 && "[object Object]" !== String(t)) {
        if (n = jQuery.extend({}, n), (null === t || void 0 === t) && (n.expires = -1), "number" == typeof n.expires) {
            var i = n.expires,
                r = n.expires = new Date;
            r.setDate(r.getDate() + i)
        }
        return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
    }
    n = t || {};
    var o, a = n.raw ? function (e) {
            return e
        } : decodeURIComponent;
    return (o = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(o[1]) : null
},
/*

	jQuery Tags Input Plugin 1.3.3
	
	Copyright (c) 2011 XOXCO, Inc
	
	Documentation for this plugin lives here:
	http://xoxco.com/clickable/jquery-tags-input
	
	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php

	ben@xoxco.com

*/

function (e) {
    var t = new Array,
        n = new Array;
    e.fn.doAutosize = function (t) {
        var n = e(this).data("minwidth"),
            i = e(this).data("maxwidth"),
            r = "",
            o = e(this),
            a = e("#" + e(this).data("tester_id"));
        if (r !== (r = o.val())) {
            var s = r.replace(/&/g, "&amp;").replace(/\s/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            a.html(s);
            var l = a.width(),
                u = l + t.comfortZone >= n ? l + t.comfortZone : n,
                c = o.width(),
                d = c > u && u >= n || u > n && i > u;
            d && o.width(u)
        }
    }, e.fn.resetAutosize = function (t) {
        var n = e(this).data("minwidth") || t.minInputWidth || e(this).width(),
            i = e(this).data("maxwidth") || t.maxInputWidth || e(this).closest(".tagsinput").width() - t.inputPadding,
            r = e(this),
            o = e("<tester/>").css({
                position: "absolute",
                top: -9999,
                left: -9999,
                width: "auto",
                fontSize: r.css("fontSize"),
                fontFamily: r.css("fontFamily"),
                fontWeight: r.css("fontWeight"),
                letterSpacing: r.css("letterSpacing"),
                whiteSpace: "nowrap"
            }),
            a = e(this).attr("id") + "_autosize_tester";
        !e("#" + a).length > 0 && (o.attr("id", a), o.appendTo("body")), r.data("minwidth", n), r.data("maxwidth", i), r.data("tester_id", a), r.css("width", n)
    }, e.fn.addTag = function (i, r) {
        return r = jQuery.extend({
            focus: !1,
            callback: !0
        }, r), this.each(function () {
            var o = e(this).attr("id"),
                a = e(this).val().split(t[o]);
            if ("" == a[0] && (a = new Array), i = jQuery.trim(i), r.unique) {
                var s = e(this).tagExist(i);
                1 == s && e("#" + o + "_tag").addClass("not_valid")
            } else var s = !1; if ("" != i && 1 != s) {
                if (e("<span>").addClass("tag").append(e("<span>").text(i).append("&nbsp;&nbsp;"), e("<a>", {
                    href: "#",
                    title: "Removing tag",
                    text: "x"
                }).click(function () {
                    return e("#" + o).removeTag(escape(i))
                })).insertBefore("#" + o + "_addTag"), a.push(i), e("#" + o + "_tag").val(""), r.focus ? e("#" + o + "_tag").focus() : e("#" + o + "_tag").blur(), e.fn.tagsInput.updateTagsField(this, a), r.callback && n[o] && n[o].onAddTag) {
                    var l = n[o].onAddTag;
                    l.call(this, i)
                }
                if (n[o] && n[o].onChange) {
                    var u = a.length,
                        l = n[o].onChange;
                    l.call(this, e(this), a[u - 1])
                }
            }
        }), !1
    }, e.fn.removeTag = function (r) {
        return r = unescape(r), this.each(function () {
            var o = e(this).attr("id"),
                a = e(this).val().split(t[o]);
            for (e("#" + o + "_tagsinput .tag").remove(), str = "", i = 0; a.length > i; i++) a[i] != r && (str = str + t[o] + a[i]);
            if (e.fn.tagsInput.importTags(this, str), n[o] && n[o].onRemoveTag) {
                var s = n[o].onRemoveTag;
                s.call(this, r)
            }
        }), !1
    }, e.fn.tagExist = function (n) {
        var i = e(this).attr("id"),
            r = e(this).val().split(t[i]);
        return jQuery.inArray(n, r) >= 0
    }, e.fn.importTags = function (t) {
        id = e(this).attr("id"), e("#" + id + "_tagsinput .tag").remove(), e.fn.tagsInput.importTags(this, t)
    }, e.fn.tagsInput = function (i) {
        var r = jQuery.extend({
            interactive: !0,
            defaultText: "add a tag",
            minChars: 0,
            width: "300px",
            height: "100px",
            autocomplete: {
                selectFirst: !1
            },
            hide: !0,
            delimiter: ",",
            unique: !0,
            removeWithBackspace: !0,
            placeholderColor: "#666666",
            autosize: !0,
            comfortZone: 20,
            inputPadding: 12
        }, i);
        return this.each(function () {
            r.hide && e(this).hide();
            var i = e(this).attr("id");
            (!i || t[e(this).attr("id")]) && (i = e(this).attr("id", "tags" + (new Date).getTime()).attr("id"));
            var o = jQuery.extend({
                pid: i,
                real_input: "#" + i,
                holder: "#" + i + "_tagsinput",
                input_wrapper: "#" + i + "_addTag",
                fake_input: "#" + i + "_tag"
            }, r);
            t[i] = o.delimiter, (r.onAddTag || r.onRemoveTag || r.onChange) && (n[i] = new Array, n[i].onAddTag = r.onAddTag, n[i].onRemoveTag = r.onRemoveTag, n[i].onChange = r.onChange);
            var a = '<div id="' + i + '_tagsinput" class="tagsinput"><div id="' + i + '_addTag">';
            if (r.interactive && (a = a + '<input id="' + i + '_tag" value="" data-default="' + r.defaultText + '" />'), a += '</div><div class="tags_clear"></div></div>', e(a).insertAfter(this), e(o.holder).css("width", r.width), e(o.holder).css("min-height", r.height), e(o.holder).css("height", "100%"), "" != e(o.real_input).val() && e.fn.tagsInput.importTags(e(o.real_input), e(o.real_input).val()), r.interactive) {
                if (e(o.fake_input).val(e(o.fake_input).attr("data-default")), e(o.fake_input).css("color", r.placeholderColor), e(o.fake_input).resetAutosize(r), e(o.holder).bind("click", o, function (t) {
                    e(t.data.fake_input).focus()
                }), e(o.fake_input).bind("focus", o, function (t) {
                    e(t.data.fake_input).val() == e(t.data.fake_input).attr("data-default") && e(t.data.fake_input).val(""), e(t.data.fake_input).css("color", "#000000")
                }), void 0 != r.autocomplete_url) {
                    autocomplete_options = {
                        source: r.autocomplete_url
                    };
                    for (attrname in r.autocomplete) autocomplete_options[attrname] = r.autocomplete[attrname];
                    void 0 !== jQuery.Autocompleter ? (e(o.fake_input).autocomplete(r.autocomplete_url, r.autocomplete), e(o.fake_input).bind("result", o, function (t, n) {
                        n && e("#" + i).addTag(n[0] + "", {
                            focus: !0,
                            unique: r.unique
                        })
                    })) : void 0 !== jQuery.ui.autocomplete && (e(o.fake_input).autocomplete(autocomplete_options), e(o.fake_input).bind("autocompleteselect", o, function (t, n) {
                        return e(t.data.real_input).addTag(n.item.value, {
                            focus: !0,
                            unique: r.unique
                        }), !1
                    }))
                } else e(o.fake_input).bind("blur", o, function (t) {
                        var n = e(this).attr("data-default");
                        return "" != e(t.data.fake_input).val() && e(t.data.fake_input).val() != n ? t.data.minChars <= e(t.data.fake_input).val().length && (!t.data.maxChars || t.data.maxChars >= e(t.data.fake_input).val().length) && e(t.data.real_input).addTag(e(t.data.fake_input).val(), {
                            focus: !0,
                            unique: r.unique
                        }) : (e(t.data.fake_input).val(e(t.data.fake_input).attr("data-default")), e(t.data.fake_input).css("color", r.placeholderColor)), !1
                    });
                e(o.fake_input).bind("keypress", o, function (t) {
                    return t.which == t.data.delimiter.charCodeAt(0) || 13 == t.which ? (t.preventDefault(), t.data.minChars <= e(t.data.fake_input).val().length && (!t.data.maxChars || t.data.maxChars >= e(t.data.fake_input).val().length) && e(t.data.real_input).addTag(e(t.data.fake_input).val(), {
                        focus: !0,
                        unique: r.unique
                    }), e(t.data.fake_input).resetAutosize(r), !1) : (t.data.autosize && e(t.data.fake_input).doAutosize(r), void 0)
                }), o.removeWithBackspace && e(o.fake_input).bind("keydown", function (t) {
                    if (8 == t.keyCode && "" == e(this).val()) {
                        t.preventDefault();
                        var n = e(this).closest(".tagsinput").find(".tag:last").text(),
                            i = e(this).attr("id").replace(/_tag$/, "");
                        n = n.replace(/[\s]+x$/, ""), e("#" + i).removeTag(escape(n)), e(this).trigger("focus")
                    }
                }), e(o.fake_input).blur(), o.unique && e(o.fake_input).keydown(function (t) {
                    (8 == t.keyCode || String.fromCharCode(t.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)) && e(this).removeClass("not_valid")
                })
            }
        }), this
    }, e.fn.tagsInput.updateTagsField = function (n, i) {
        var r = e(n).attr("id");
        e(n).val(i.join(t[r]))
    }, e.fn.tagsInput.importTags = function (r, o) {
        e(r).val("");
        var a = e(r).attr("id"),
            s = o.split(t[a]);
        for (i = 0; s.length > i; i++) e(r).addTag(s[i], {
                focus: !1,
                callback: !1
            });
        if (n[a] && n[a].onChange) {
            var l = n[a].onChange;
            l.call(r, r, s[i])
        }
    }
}(jQuery),
function (e, t) {
    var n = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        COMMA: 188,
        SPACE: 32,
        HOME: 36,
        END: 35
    }, i = {
            triggerChar: "@",
            onDataRequest: e.noop,
            minChars: 2,
            showAvatars: !0,
            elastic: !0,
            insertSpaceAfterMention: !0,
            classes: {
                autoCompleteItemActive: "active"
            },
            templates: {
                wrapper: t.template('<div class="mentions-input-box"></div>'),
                autocompleteList: t.template('<div class="mentions-autocomplete-list"></div>'),
                autocompleteListItem: t.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><%= content %></li>'),
                autocompleteListItemAvatar: t.template('<img src="<%= avatar %>" />'),
                autocompleteListItemIcon: t.template('<div class="icon <%= icon %>"></div>'),
                mentionsOverlay: t.template('<div class="mentions"><div></div></div>'),
                mentionItemSyntax: t.template("@[<%= value %>](<%= type %>:<%= id %>)"),
                mentionItemHighlight: t.template("<strong><span><%= value %></span></strong>")
            }
        }, r = {
            htmlEncode: function (e) {
                return t.escape(e)
            },
            highlightTerm: function (e, t) {
                return t || t.length ? e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>") : e
            },
            setCaratPosition: function (e, t) {
                if (e.createTextRange) {
                    var n = e.createTextRange();
                    n.move("character", t), n.select()
                } else e.selectionStart ? (e.focus(), e.setSelectionRange(t, t)) : e.focus()
            },
            rtrim: function (e) {
                return e.replace(/\s+$/, "")
            }
        }, o = function (o) {
            function a() {
                S = e(T), "true" != S.attr("data-mentions-input") && (M = S.parent(), j = e(o.templates.wrapper()), S.wrapAll(j), j = M.find("> div"), S.attr("data-mentions-input", "true"), S.bind("keydown", y), S.bind("keypress", b), S.bind("input", v), S.bind("click", m), S.bind("blur", g), o.elastic && S.elastic())
            }
            function s() {
                E = e(o.templates.autocompleteList()), E.appendTo(j), E.delegate("li", "mousedown", p)
            }
            function l() {
                L = e(o.templates.mentionsOverlay()), L.prependTo(j)
            }
            function u() {
                var e = f();
                t.each(N, function (t) {
                    var n = o.templates.mentionItemSyntax(t);
                    e = e.replace(t.value, n)
                });
                var n = r.htmlEncode(e);
                t.each(N, function (e) {
                    var i = t.extend({}, e, {
                        value: r.htmlEncode(e.value)
                    }),
                        a = o.templates.mentionItemSyntax(i),
                        s = o.templates.mentionItemHighlight(i);
                    n = n.replace(a, s)
                }), n = n.replace(/\n/g, "<br />"), n = n.replace(/ {2}/g, "&nbsp; "), S.data("messageText", e), L.find("div").html(n)
            }
            function c() {
                I = []
            }
            function d() {
                var e = f();
                N = t.reject(N, function (t) {
                    return !t.value || -1 == e.indexOf(t.value)
                }), N = t.compact(N)
            }
            function h(e) {
                var t = f(),
                    n = new RegExp("\\" + o.triggerChar + F, "gi");
                if (match = n.exec(t)) {
                    var i = n.lastIndex - F.length - 1,
                        a = n.lastIndex,
                        s = t.substr(0, i),
                        l = t.substr(a, t.length),
                        d = (s + e.value).length;
                    o.insertSpaceAfterMention && (d += 1), N.push(e), c(), F = "", w();
                    var h = s + e.value;
                    o.insertSpaceAfterMention && (h += " "), h += l, S.val(h), u(), S.focus(), r.setCaratPosition(S[0], d)
                }
            }
            function f() {
                return e.trim(S.val())
            }
            function p() {
                var t = e(this),
                    n = P[t.attr("data-uid")];
                return h(n), !1
            }
            function m() {
                c()
            }
            function g() {
                w()
            }
            function v() {
                u(), d();
                var e = t.lastIndexOf(I, o.triggerChar);
                e > -1 && (F = I.slice(e + 1).join(""), F = r.rtrim(F), t.defer(t.bind(C, this, F)))
            }
            function b(e) {
                if (e.keyCode !== n.BACKSPACE) {
                    var t = String.fromCharCode(e.which || e.keyCode);
                    I.push(t)
                }
            }
            function y(i) {
                if (i.keyCode == n.LEFT || i.keyCode == n.RIGHT || i.keyCode == n.HOME || i.keyCode == n.END) return t.defer(c), navigator.userAgent.indexOf("MSIE 9") > -1 && t.defer(u), void 0;
                if (i.keyCode == n.BACKSPACE) return I = I.slice(0, -1 + I.length), void 0;
                if (!E.is(":visible")) return !0;
                switch (i.keyCode) {
                case n.UP:
                case n.DOWN:
                    var r = null;
                    return r = i.keyCode == n.DOWN ? A && A.length ? A.next() : E.find("li").first() : e(A).prev(), r.length && k(r), !1;
                case n.RETURN:
                case n.TAB:
                    if (A && A.length) return A.trigger("mousedown"), !1
                }
                return !0
            }
            function w() {
                A = null, E.empty().hide()
            }
            function k(e) {
                e.addClass(o.classes.autoCompleteItemActive), e.siblings().removeClass(o.classes.autoCompleteItemActive), A = e
            }
            function x(n, i) {
                E.show();
                var a = t.pluck(N, "value");
                if (i = t.reject(i, function (e) {
                    return t.include(a, e.name)
                }), !i.length) return w(), void 0;
                E.empty();
                var s = e("<ul>").appendTo(E).hide();
                t.each(i, function (i, a) {
                    var l = t.uniqueId("mention_");
                    P[l] = t.extend({}, i, {
                        value: i.name
                    });
                    var u = e(o.templates.autocompleteListItem({
                        id: r.htmlEncode(i.id),
                        display: r.htmlEncode(i.name),
                        type: r.htmlEncode(i.type),
                        username: r.highlightTerm(r.htmlEncode(i.username), n),
                        content: r.highlightTerm(r.htmlEncode(i.name), n)
                    })).attr("data-uid", l);
                    if (0 === a && k(u), o.showAvatars) {
                        var c;
                        c = i.avatar ? e(o.templates.autocompleteListItemAvatar({
                            avatar: i.avatar,
                            type: i.type
                        })) : e(o.templates.autocompleteListItemIcon({
                            icon: i.icon
                        })), c.prependTo(u.find("a"))
                    }
                    u = u.appendTo(s)
                }), E.show(), s.show()
            }
            function C(e) {
                e && e.length && e.length >= o.minChars ? o.onDataRequest.call(this, "search", e, function (t) {
                    x(e, t)
                }) : w()
            }
            function _() {
                S.val(""), N = [], u()
            }
            var T, S, M, E, j, L, A, F, N = [],
                P = {}, I = [];
            return o = e.extend(!0, {}, i, o), {
                init: function (e) {
                    T = e, a(), s(), l(), _(), o.prefillMention && h(o.prefillMention)
                },
                val: function (e) {
                    if (t.isFunction(e)) {
                        var n = N.length ? S.data("messageText") : f();
                        e.call(this, n)
                    }
                },
                reset: function () {
                    _()
                },
                getMentions: function (e) {
                    t.isFunction(e) && e.call(this, N)
                },
                setMentions: function (e, n) {
                    S.val(e), insertSpace = o.insertSpaceAfterMention, o.insertSpaceAfterMention = !1, t.each(n, function (e) {
                        e.value = e.name, F = e.value, h(e)
                    }), o.insertSpaceAfterMention = insertSpace
                }
            }
        };
    e.fn.mentionsInput = function (n, i) {
        var r = arguments;
        return "object" != typeof n && n || (i = n), this.each(function () {
            var a = e.data(this, "mentionsInput") || e.data(this, "mentionsInput", new o(i));
            return t.isFunction(a[n]) ? a[n].apply(this, Array.prototype.slice.call(r, 1)) : "object" != typeof n && n ? (e.error("Method " + n + " does not exist"), void 0) : a.init.call(this, this)
        })
    }
}(jQuery, _), // copyright chris wanstrath

function (e) {
    function t(t, i, r) {
        var o = this;
        return this.on("click.pjax", t, function (t) {
            var a = e.extend({}, h(i, r));
            a.container || (a.container = e(this).attr("data-pjax") || o), n(t, a)
        })
    }
    function n(t, n, i) {
        i = h(n, i);
        var o = t.currentTarget;
        if ("A" !== o.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol !== o.protocol || location.host !== o.host || o.hash && o.href.replace(o.hash, "") === location.href.replace(location.hash, "") || o.href === location.href + "#")) {
            var a = {
                url: o.href,
                container: e(o).attr("data-pjax"),
                target: o,
                fragment: null
            };
            r(e.extend({}, a, i)), t.preventDefault()
        }
    }
    function i(t, n, i) {
        i = h(n, i);
        var o = t.currentTarget;
        if ("FORM" !== o.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
        var a = {
            type: o.method,
            url: o.action,
            data: e(o).serializeArray(),
            container: e(o).attr("data-pjax"),
            target: o,
            fragment: null,
            timeout: 0
        };
        r(e.extend({}, a, i)), t.preventDefault()
    }
    function r(t) {
        function n(t, n) {
            var r = e.Event(t, {
                relatedTarget: i
            });
            return s.trigger(r, n), !r.isDefaultPrevented()
        }
        t = e.extend(!0, {}, e.ajaxSettings, r.defaults, t), e.isFunction(t.url) && (t.url = t.url());
        var i = t.target,
            o = d(t.url).hash,
            s = t.context = f(t.container);
        t.data || (t.data = {}), t.data._pjax = s.selector;
        var l;
        t.beforeSend = function (e, i) {
            return "GET" !== i.type && (i.timeout = 0), i.timeout > 0 && (l = setTimeout(function () {
                n("pjax:timeout", [e, t]) && e.abort("timeout")
            }, i.timeout), i.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", s.selector), n("pjax:beforeSend", [e, i]) ? (t.requestUrl = d(i.url).href, void 0) : !1
        }, t.complete = function (e, i) {
            l && clearTimeout(l), n("pjax:complete", [e, i, t]), n("pjax:end", [e, t])
        }, t.error = function (e, i, r) {
            var o = m("", e, t),
                s = n("pjax:error", [e, i, r, t]);
            "GET" == t.type && "abort" !== i && s && a(o.url)
        }, t.success = function (i, l, c) {
            var h = m(i, c, t);
            if (!h.contents) return a(h.url), void 0;
            if (r.state = {
                id: t.id || u(),
                url: h.url,
                title: h.title,
                container: s.selector,
                fragment: t.fragment,
                timeout: t.timeout
            }, (t.push || t.replace) && window.history.replaceState(r.state, h.title, h.url), h.title && (document.title = h.title), s.html(h.contents), "number" == typeof t.scrollTo && e(window).scrollTop(t.scrollTo), (t.replace || t.push) && window._gaq && _gaq.push(["_trackPageview"]), "" !== o) {
                var f = d(h.url);
                f.hash = o, r.state.url = f.href, window.history.replaceState(r.state, h.title, f.href);
                var p = e(f.hash);
                p.length && e(window).scrollTop(p.offset().top)
            }
            n("pjax:success", [i, l, c, t])
        }, r.state || (r.state = {
            id: u(),
            url: window.location.href,
            title: document.title,
            container: s.selector,
            fragment: t.fragment,
            timeout: t.timeout
        }, window.history.replaceState(r.state, document.title));
        var h = r.xhr;
        h && 4 > h.readyState && (h.onreadystatechange = e.noop, h.abort()), r.options = t;
        var h = r.xhr = e.ajax(t);
        return h.readyState > 0 && (t.push && !t.replace && (g(r.state.id, s.clone().contents()), window.history.pushState(null, "", c(t.requestUrl))), n("pjax:start", [h, t]), n("pjax:send", [h, t])), r.xhr
    }
    function o(t, n) {
        var i = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return r(e.extend(i, h(t, n)))
    }
    function a(e) {
        window.history.replaceState(null, "", "#"), window.location.replace(e)
    }
    function s(t) {
        var n = t.state;
        if (n && n.container) {
            var i = e(n.container);
            if (i.length) {
                var o = w[n.id];
                if (r.state) {
                    var s = r.state.id < n.id ? "forward" : "back";
                    v(s, r.state.id, i.clone().contents())
                }
                var l = e.Event("pjax:popstate", {
                    state: n,
                    direction: s
                });
                i.trigger(l);
                var u = {
                    id: n.id,
                    url: n.url,
                    container: i,
                    push: !1,
                    fragment: n.fragment,
                    timeout: n.timeout,
                    scrollTo: !1
                };
                o ? (i.trigger("pjax:start", [null, u]), n.title && (document.title = n.title), i.html(o), r.state = n, i.trigger("pjax:end", [null, u])) : r(u), i[0].offsetHeight
            } else a(location.href)
        }
    }
    function l(t) {
        var n = e.isFunction(t.url) ? t.url() : t.url,
            i = t.type ? t.type.toUpperCase() : "GET",
            r = e("<form>", {
                method: "GET" === i ? "GET" : "POST",
                action: n,
                style: "display:none"
            });
        "GET" !== i && "POST" !== i && r.append(e("<input>", {
            type: "hidden",
            name: "_method",
            value: i.toLowerCase()
        }));
        var o = t.data;
        if ("string" == typeof o) e.each(o.split("&"), function (t, n) {
                var i = n.split("=");
                r.append(e("<input>", {
                    type: "hidden",
                    name: i[0],
                    value: i[1]
                }))
            });
        else if ("object" == typeof o) for (key in o) r.append(e("<input>", {
                    type: "hidden",
                    name: key,
                    value: o[key]
                }));
        e(document.body).append(r), r.submit()
    }
    function u() {
        return (new Date).getTime()
    }
    function c(e) {
        return e.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }
    function d(e) {
        var t = document.createElement("a");
        return t.href = e, t
    }
    function h(t, n) {
        return t && n ? n.container = t : n = e.isPlainObject(t) ? t : {
            container: t
        }, n.container && (n.container = f(n.container)), n
    }
    function f(t) {
        if (t = e(t), t.length) {
            if ("" !== t.selector && t.context === document) return t;
            if (t.attr("id")) return e("#" + t.attr("id"));
            throw "cant get selector for pjax container!"
        }
        throw "no pjax container for " + t.selector
    }
    function p(e, t) {
        return e.filter(t).add(e.find(t))
    }
    function m(t, n, i) {
        var r = {};
        if (r.url = c(n.getResponseHeader("X-PJAX-URL") || i.requestUrl), /<html/i.test(t)) var o = e(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]),
        a = e(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);
        else var o = a = e(t); if (0 === a.length) return r;
        if (r.title = p(o, "title").last().text(), i.fragment) {
            if ("body" === i.fragment) var s = a;
            else var s = p(a, i.fragment).first();
            s.length && (r.contents = s.contents(), r.title || (r.title = s.attr("title") || s.data("title")))
        } else /<html/i.test(t) || (r.contents = a);
        return r.contents && (r.contents = r.contents.not("title"), r.contents.find("title").remove()), r.title && (r.title = e.trim(r.title)), r
    }
    function g(e, t) {
        for (w[e] = t, x.push(e); k.length;) delete w[k.shift()];
        for (; x.length > r.defaults.maxCacheLength;) delete w[x.shift()]
    }
    function v(e, t, n) {
        var i, r;
        w[t] = n, "forward" === e ? (i = x, r = k) : (i = k, r = x), i.push(t), (t = r.pop()) && delete w[t]
    }
    function b() {
        e.fn.pjax = t, e.pjax = r, e.pjax.enable = e.noop, e.pjax.disable = y, e.pjax.click = n, e.pjax.submit = i, e.pjax.reload = o, e.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20
        }, e(window).bind("popstate.pjax", s)
    }
    function y() {
        e.fn.pjax = function () {
            return this
        }, e.pjax = l, e.pjax.enable = b, e.pjax.disable = e.noop, e.pjax.click = e.noop, e.pjax.submit = e.noop, e.pjax.reload = function () {
            window.location.reload()
        }, e(window).unbind("popstate.pjax", s)
    }
    var w = {}, k = [],
        x = [];
    0 > e.inArray("state", e.event.props) && e.event.props.push("state"), e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), e.support.pjax ? b() : y()
}(jQuery),



function () {
    var e = {}, t = null,
        n = null,
        i = document.title,
        r = null,
        o = null,
        a = {}, s = {
            width: 7,
            height: 9,
            font: "10px arial",
            colour: "#ffffff",
            background: "#F03D25",
            fallback: !0,
            abbreviate: !0
        }, l = function () {
            var e = navigator.userAgent.toLowerCase();
            return function (t) {
                return -1 !== e.indexOf(t)
            }
        }(),
        u = {
            ie: l("msie"),
            chrome: l("chrome"),
            webkit: l("chrome") || l("safari"),
            safari: l("safari") && !l("chrome"),
            mozilla: l("mozilla") && !l("chrome") && !l("safari")
        }, c = function () {
            for (var e = document.getElementsByTagName("link"), t = 0, n = e.length; n > t; t++) if ((e[t].getAttribute("rel") || "").match(/\bicon\b/)) return e[t];
            return !1
        }, d = function () {
            for (var e = document.getElementsByTagName("link"), t = document.getElementsByTagName("head")[0], n = 0, i = e.length; i > n; n++) {
                var r = "undefined" != typeof e[n];
                r && (e[n].getAttribute("rel") || "").match(/\bicon\b/) && t.removeChild(e[n])
            }
        }, h = function () {
            if (!n || !t) {
                var e = c();
                n = t = e ? e.getAttribute("href") : "/favicon.ico"
            }
            return t
        }, f = function () {
            return o || (o = document.createElement("canvas"), o.width = 16, o.height = 16), o
        }, p = function (e) {
            d();
            var t = document.createElement("link");
            t.type = "image/x-icon", t.rel = "icon", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
        }, m = function (e, t) {
            if (!f().getContext || u.ie || u.safari || "force" === a.fallback) return g(e);
            var n = f().getContext("2d"),
                t = t || "#000000",
                i = h();
            r = new Image, r.onload = function () {
                n.clearRect(0, 0, 16, 16), n.drawImage(r, 0, 0, r.width, r.height, 0, 0, 16, 16), (e + "").length > 0 && v(n, e, t), b()
            }, i.match(/^data/) || (r.crossOrigin = "anonymous"), r.src = i
        }, g = function (e) {
            a.fallback && (document.title = (e + "").length > 0 ? "(" + e + ") " + i : i)
        }, v = function (e, t) {
            "number" == typeof t && t > 99 && a.abbreviate && (t = y(t));
            var n = (t + "").length - 1,
                i = a.width + 6 * n,
                r = 16 - i,
                o = 16 - a.height;
            e.font = (u.webkit ? "bold " : "") + a.font, e.fillStyle = a.background, e.strokeStyle = a.background, e.lineWidth = 1, e.fillRect(r, o, i - 1, a.height), e.beginPath(), e.moveTo(r - .5, o + 1), e.lineTo(r - .5, 15), e.stroke(), e.beginPath(), e.moveTo(15.5, o + 1), e.lineTo(15.5, 15), e.stroke(), e.beginPath(), e.strokeStyle = "rgba(0,0,0,0.3)", e.moveTo(r, 16), e.lineTo(15, 16), e.stroke(), e.fillStyle = a.colour, e.textAlign = "right", e.textBaseline = "top", e.fillText(t, 15, u.mozilla ? 7 : 6)
        }, b = function () {
            f().getContext && p(f().toDataURL())
        }, y = function (e) {
            for (var t = [
                ["G", 1e9],
                ["M", 1e6],
                ["k", 1e3]
            ], n = 0; t.length > n; ++n) if (e >= t[n][1]) {
                    e = w(e / t[n][1]) + t[n][0];
                    break
                }
            return e
        }, w = function (e, t) {
            var n = new Number(e);
            return n.toFixed(t)
        };
    e.setOptions = function (e) {
        a = {};
        for (var t in s) a[t] = e.hasOwnProperty(t) ? e[t] : s[t];
        return this
    }, e.setImage = function (e) {
        return t = e, b(), this
    }, e.setBubble = function (e, t) {
        return e = e || "", m(e, t), this
    }, e.reset = function () {
        p(n)
    }, e.setOptions(s), window.Tinycon = e
}(),
function (e) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
}(navigator.userAgent || navigator.vendor || window.opera);
var Chart = function (e) {
    function t(e, t, n) {
        return e = o((e - t.graphMin) / (t.steps * t.stepValue), 1, 0), n * t.steps * e
    }
    function n(e, t, n, i) {
        function r() {
            l += a;
            var u = e.animation ? o(s(l), null, 0) : 1;
            i.clearRect(0, 0, c, d), e.scaleOverlay ? (n(u), t()) : (t(), n(u)), 1 >= l ? b(r) : "function" == typeof e.onAnimationComplete && e.onAnimationComplete()
        }
        var a = e.animation ? 1 / o(e.animationSteps, Number.MAX_VALUE, 1) : 1,
            s = u[e.animationEasing],
            l = e.animation ? 0 : 1;
        "function" != typeof t && (t = function () {}), b(r)
    }
    function i(e, t, n, i, o, a) {
        var s;
        for (e = Math.floor(Math.log(i - o) / Math.LN10), o = Math.floor(o / (1 * Math.pow(10, e))) * Math.pow(10, e), i = Math.ceil(i / (1 * Math.pow(10, e))) * Math.pow(10, e) - o, e = Math.pow(10, e), s = Math.round(i / e); n > s || s > t;) e = n > s ? e / 2 : 2 * e, s = Math.round(i / e);
        return t = [], r(a, t, s, o, e), {
            steps: s,
            stepValue: e,
            graphMin: o,
            labels: t
        }
    }
    function r(e, t, n, i, r) {
        if (e) for (var o = 1; n + 1 > o; o++) t.push(s(e, {
                    value: (i + r * o).toFixed(0 != r % 1 ? r.toString().split(".")[1].length : 0)
                }))
    }
    function o(e, t, n) {
        return !isNaN(parseFloat(t)) && isFinite(t) && e > t ? t : !isNaN(parseFloat(n)) && isFinite(n) && n > e ? n : e
    }
    function a(e, t) {
        var n, i = {};
        for (n in e) i[n] = e[n];
        for (n in t) i[n] = t[n];
        return i
    }
    function s(e, t) {
        var n = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : y[e] = y[e] || s(document.getElementById(e).innerHTML);
        return t ? n(t) : n
    }
    var l = this,
        u = {
            linear: function (e) {
                return e
            },
            easeInQuad: function (e) {
                return e * e
            },
            easeOutQuad: function (e) {
                return -1 * e * (e - 2)
            },
            easeInOutQuad: function (e) {
                return 1 > (e /= .5) ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            },
            easeInCubic: function (e) {
                return e * e * e
            },
            easeOutCubic: function (e) {
                return 1 * ((e = e / 1 - 1) * e * e + 1)
            },
            easeInOutCubic: function (e) {
                return 1 > (e /= .5) ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            },
            easeInQuart: function (e) {
                return e * e * e * e
            },
            easeOutQuart: function (e) {
                return -1 * ((e = e / 1 - 1) * e * e * e - 1)
            },
            easeInOutQuart: function (e) {
                return 1 > (e /= .5) ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            },
            easeInQuint: function (e) {
                return 1 * (e /= 1) * e * e * e * e
            },
            easeOutQuint: function (e) {
                return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
            },
            easeInOutQuint: function (e) {
                return 1 > (e /= .5) ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            },
            easeInSine: function (e) {
                return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function (e) {
                return 1 * Math.sin(e / 1 * (Math.PI / 2))
            },
            easeInOutSine: function (e) {
                return -.5 * (Math.cos(Math.PI * e / 1) - 1)
            },
            easeInExpo: function (e) {
                return 0 == e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
            },
            easeOutExpo: function (e) {
                return 1 == e ? 1 : 1 * (-Math.pow(2, -10 * e / 1) + 1)
            },
            easeInOutExpo: function (e) {
                return 0 == e ? 0 : 1 == e ? 1 : 1 > (e /= .5) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            },
            easeInCirc: function (e) {
                return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
            },
            easeOutCirc: function (e) {
                return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
            },
            easeInOutCirc: function (e) {
                return 1 > (e /= .5) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            },
            easeInElastic: function (e) {
                var t = 1.70158,
                    n = 0,
                    i = 1;
                return 0 == e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), Math.abs(1) > i ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n)))
            },
            easeOutElastic: function (e) {
                var t = 1.70158,
                    n = 0,
                    i = 1;
                return 0 == e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), Math.abs(1) > i ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin(2 * (1 * e - t) * Math.PI / n) + 1)
            },
            easeInOutElastic: function (e) {
                var t = 1.70158,
                    n = 0,
                    i = 1;
                return 0 == e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), Math.abs(1) > i ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), 1 > e ? -.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n) : .5 * i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n) + 1)
            },
            easeInBack: function (e) {
                return 1 * (e /= 1) * e * (2.70158 * e - 1.70158)
            },
            easeOutBack: function (e) {
                return 1 * ((e = e / 1 - 1) * e * (2.70158 * e + 1.70158) + 1)
            },
            easeInOutBack: function (e) {
                var t = 1.70158;
                return 1 > (e /= .5) ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            },
            easeInBounce: function (e) {
                return 1 - u.easeOutBounce(1 - e)
            },
            easeOutBounce: function (e) {
                return 1 / 2.75 > (e /= 1) ? 7.5625 * e * e : 2 / 2.75 > e ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            },
            easeInOutBounce: function (e) {
                return .5 > e ? .5 * u.easeInBounce(2 * e) : .5 * u.easeOutBounce(2 * e - 1) + .5
            }
        }, c = e.canvas.width,
        d = e.canvas.height;
    window.devicePixelRatio && (e.canvas.style.width = c + "px", e.canvas.style.height = d + "px", e.canvas.height = d * window.devicePixelRatio, e.canvas.width = c * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio)), this.PolarArea = function (t, n) {
        l.PolarArea.defaults = {
            scaleOverlay: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = n ? a(l.PolarArea.defaults, n) : l.PolarArea.defaults;
        return new h(t, i, e)
    }, this.Radar = function (t, n) {
        l.Radar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !1,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            angleShowLineOut: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 12,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = n ? a(l.Radar.defaults, n) : l.Radar.defaults;
        return new f(t, i, e)
    }, this.Pie = function (t, n) {
        l.Pie.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = n ? a(l.Pie.defaults, n) : l.Pie.defaults;
        return new p(t, i, e)
    }, this.Doughnut = function (t, n) {
        l.Doughnut.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = n ? a(l.Doughnut.defaults, n) : l.Doughnut.defaults;
        return new m(t, i, e)
    }, this.Line = function (t, n) {
        l.Line.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            bezierCurve: !0,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 2,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = n ? a(l.Line.defaults, n) : l.Line.defaults;
        return new g(t, i, e)
    }, this.Bar = function (t, n) {
        l.Bar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = n ? a(l.Bar.defaults, n) : l.Bar.defaults;
        return new v(t, i, e)
    };
    var h = function (e, o, a) {
        var s, l, u, h, f, p, m, g, v;
        for (f = Math.min.apply(Math, [c, d]) / 2, f -= Math.max.apply(Math, [.5 * o.scaleFontSize, .5 * o.scaleLineWidth]), h = 2 * o.scaleFontSize, o.scaleShowLabelBackdrop && (h += 2 * o.scaleBackdropPaddingY, f -= 1.5 * o.scaleBackdropPaddingY), g = f, h = h ? h : 5, s = Number.MIN_VALUE, l = Number.MAX_VALUE, u = 0; e.length > u; u++) e[u].value > s && (s = e[u].value), l > e[u].value && (l = e[u].value);
        u = Math.floor(g / (.66 * h)), h = Math.floor(.5 * (g / h)), v = o.scaleShowLabels ? o.scaleLabel : null, o.scaleOverride ? (m = {
            steps: o.scaleSteps,
            stepValue: o.scaleStepWidth,
            graphMin: o.scaleStartValue,
            labels: []
        }, r(v, m.labels, m.steps, o.scaleStartValue, o.scaleStepWidth)) : m = i(g, u, h, s, l, v), p = f / m.steps, n(o, function () {
            for (var e = 0; m.steps > e; e++) if (o.scaleShowLine && (a.beginPath(), a.arc(c / 2, d / 2, p * (e + 1), 0, 2 * Math.PI, !0), a.strokeStyle = o.scaleLineColor, a.lineWidth = o.scaleLineWidth, a.stroke()), o.scaleShowLabels) {
                    a.textAlign = "center", a.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily;
                    var t = m.labels[e];
                    if (o.scaleShowLabelBackdrop) {
                        var n = a.measureText(t).width;
                        a.fillStyle = o.scaleBackdropColor, a.beginPath(), a.rect(Math.round(c / 2 - n / 2 - o.scaleBackdropPaddingX), Math.round(d / 2 - p * (e + 1) - .5 * o.scaleFontSize - o.scaleBackdropPaddingY), Math.round(n + 2 * o.scaleBackdropPaddingX), Math.round(o.scaleFontSize + 2 * o.scaleBackdropPaddingY)), a.fill()
                    }
                    a.textBaseline = "middle", a.fillStyle = o.scaleFontColor, a.fillText(t, c / 2, d / 2 - p * (e + 1))
                }
        }, function (n) {
            var i = -Math.PI / 2,
                r = 2 * Math.PI / e.length,
                s = 1,
                l = 1;
            for (o.animation && (o.animateScale && (s = n), o.animateRotate && (l = n)), n = 0; e.length > n; n++) a.beginPath(), a.arc(c / 2, d / 2, s * t(e[n].value, m, p), i, i + l * r, !1), a.lineTo(c / 2, d / 2), a.closePath(), a.fillStyle = e[n].color, a.fill(), o.segmentShowStroke && (a.strokeStyle = o.segmentStrokeColor, a.lineWidth = o.segmentStrokeWidth, a.stroke()), i += l * r
        }, a)
    }, f = function (e, a, s) {
            var l, u, h, f, p, m, g, v, b;
            for (e.labels || (e.labels = []), p = Math.min.apply(Math, [c, d]) / 2, f = 2 * a.scaleFontSize, l = v = 0; e.labels.length > l; l++) s.font = a.pointLabelFontStyle + " " + a.pointLabelFontSize + "px " + a.pointLabelFontFamily, u = s.measureText(e.labels[l]).width, u > v && (v = u);
            for (p -= Math.max.apply(Math, [v, 1.5 * (a.pointLabelFontSize / 2)]), p -= a.pointLabelFontSize, v = p = o(p, null, 0), f = f ? f : 5, l = Number.MIN_VALUE, u = Number.MAX_VALUE, h = 0; e.datasets.length > h; h++) for (b = 0; e.datasets[h].data.length > b; b++) e.datasets[h].data[b] > l && (l = e.datasets[h].data[b]), u > e.datasets[h].data[b] && (u = e.datasets[h].data[b]);
            h = Math.floor(v / (.66 * f)), f = Math.floor(.5 * (v / f)), b = a.scaleShowLabels ? a.scaleLabel : null, a.scaleOverride ? (g = {
                steps: a.scaleSteps,
                stepValue: a.scaleStepWidth,
                graphMin: a.scaleStartValue,
                labels: []
            }, r(b, g.labels, g.steps, a.scaleStartValue, a.scaleStepWidth)) : g = i(v, h, f, l, u, b), m = p / g.steps, n(a, function () {
                var t = 2 * Math.PI / e.datasets[0].data.length;
                if (s.save(), s.translate(c / 2, d / 2), a.angleShowLineOut) {
                    s.strokeStyle = a.angleLineColor, s.lineWidth = a.angleLineWidth;
                    for (var n = 0; e.datasets[0].data.length > n; n++) s.rotate(t), s.beginPath(), s.moveTo(0, 0), s.lineTo(0, -p), s.stroke()
                }
                for (n = 0; g.steps > n; n++) {
                    if (s.beginPath(), a.scaleShowLine) {
                        s.strokeStyle = a.scaleLineColor, s.lineWidth = a.scaleLineWidth, s.moveTo(0, -m * (n + 1));
                        for (var i = 0; e.datasets[0].data.length > i; i++) s.rotate(t), s.lineTo(0, -m * (n + 1));
                        s.closePath(), s.stroke()
                    }
                    a.scaleShowLabels && (s.textAlign = "center", s.font = a.scaleFontStyle + " " + a.scaleFontSize + "px " + a.scaleFontFamily, s.textBaseline = "middle", a.scaleShowLabelBackdrop && (i = s.measureText(g.labels[n]).width, s.fillStyle = a.scaleBackdropColor, s.beginPath(), s.rect(Math.round(-i / 2 - a.scaleBackdropPaddingX), Math.round(-m * (n + 1) - .5 * a.scaleFontSize - a.scaleBackdropPaddingY), Math.round(i + 2 * a.scaleBackdropPaddingX), Math.round(a.scaleFontSize + 2 * a.scaleBackdropPaddingY)), s.fill()), s.fillStyle = a.scaleFontColor, s.fillText(g.labels[n], 0, -m * (n + 1)))
                }
                for (n = 0; e.labels.length > n; n++) {
                    s.font = a.pointLabelFontStyle + " " + a.pointLabelFontSize + "px " + a.pointLabelFontFamily, s.fillStyle = a.pointLabelFontColor;
                    var i = Math.sin(t * n) * (p + a.pointLabelFontSize),
                        r = Math.cos(t * n) * (p + a.pointLabelFontSize);
                    s.textAlign = t * n == Math.PI || 0 == t * n ? "center" : t * n > Math.PI ? "right" : "left", s.textBaseline = "middle", s.fillText(e.labels[n], i, -r)
                }
                s.restore()
            }, function (n) {
                var i = 2 * Math.PI / e.datasets[0].data.length;
                s.save(), s.translate(c / 2, d / 2);
                for (var r = 0; e.datasets.length > r; r++) {
                    s.beginPath(), s.moveTo(0, -1 * n * t(e.datasets[r].data[0], g, m));
                    for (var o = 1; e.datasets[r].data.length > o; o++) s.rotate(i), s.lineTo(0, -1 * n * t(e.datasets[r].data[o], g, m));
                    if (s.closePath(), s.fillStyle = e.datasets[r].fillColor, s.strokeStyle = e.datasets[r].strokeColor, s.lineWidth = a.datasetStrokeWidth, s.fill(), s.stroke(), a.pointDot) for (s.fillStyle = e.datasets[r].pointColor, s.strokeStyle = e.datasets[r].pointStrokeColor, s.lineWidth = a.pointDotStrokeWidth, o = 0; e.datasets[r].data.length > o; o++) s.rotate(i), s.beginPath(), s.arc(0, -1 * n * t(e.datasets[r].data[o], g, m), a.pointDotRadius, 2 * Math.PI, !1), s.fill(), s.stroke();
                    s.rotate(i)
                }
                s.restore()
            }, s)
        }, p = function (e, t, i) {
            for (var r = 0, o = Math.min.apply(Math, [d / 2, c / 2]) - 5, a = 0; e.length > a; a++) r += e[a].value;
            n(t, null, function (n) {
                var a = -Math.PI / 2,
                    s = 1,
                    l = 1;
                for (t.animation && (t.animateScale && (s = n), t.animateRotate && (l = n)), n = 0; e.length > n; n++) {
                    var u = 2 * (l * e[n].value / r) * Math.PI;
                    i.beginPath(), i.arc(c / 2, d / 2, s * o, a, a + u), i.lineTo(c / 2, d / 2), i.closePath(), i.fillStyle = e[n].color, i.fill(), t.segmentShowStroke && (i.lineWidth = t.segmentStrokeWidth, i.strokeStyle = t.segmentStrokeColor, i.stroke()), a += u
                }
            }, i)
        }, m = function (e, t, i) {
            for (var r = 0, o = Math.min.apply(Math, [d / 2, c / 2]) - 5, a = o * (t.percentageInnerCutout / 100), s = 0; e.length > s; s++) r += e[s].value;
            n(t, null, function (n) {
                var s = -Math.PI / 2,
                    l = 1,
                    u = 1;
                for (t.animation && (t.animateScale && (l = n), t.animateRotate && (u = n)), n = 0; e.length > n; n++) {
                    var h = 2 * (u * e[n].value / r) * Math.PI;
                    i.beginPath(), i.arc(c / 2, d / 2, l * o, s, s + h, !1), i.arc(c / 2, d / 2, l * a, s + h, s, !0), i.closePath(), i.fillStyle = e[n].color, i.fill(), t.segmentShowStroke && (i.lineWidth = t.segmentStrokeWidth, i.strokeStyle = t.segmentStrokeColor, i.stroke()), s += h
                }
            }, i)
        }, g = function (e, o, a) {
            var s, l, u, h, f, p, m, g, v, b, y, w, k, x = 0;
            for (f = d, a.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, b = 1, h = 0; e.labels.length > h; h++) s = a.measureText(e.labels[h]).width, b = s > b ? s : b;
            for (b > c / e.labels.length ? (x = 45, c / e.labels.length < Math.cos(x) * b ? (x = 90, f -= b) : f -= Math.sin(x) * b) : f -= o.scaleFontSize, h = o.scaleFontSize, f = f - 5 - h, s = Number.MIN_VALUE, l = Number.MAX_VALUE, u = 0; e.datasets.length > u; u++) for (g = 0; e.datasets[u].data.length > g; g++) e.datasets[u].data[g] > s && (s = e.datasets[u].data[g]), l > e.datasets[u].data[g] && (l = e.datasets[u].data[g]);
            if (u = Math.floor(f / (.66 * h)), h = Math.floor(.5 * (f / h)), g = o.scaleShowLabels ? o.scaleLabel : "", o.scaleOverride ? (m = {
                steps: o.scaleSteps,
                stepValue: o.scaleStepWidth,
                graphMin: o.scaleStartValue,
                labels: []
            }, r(g, m.labels, m.steps, o.scaleStartValue, o.scaleStepWidth)) : m = i(f, u, h, s, l, g), p = Math.floor(f / m.steps), h = 1, o.scaleShowLabels) {
                for (a.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, s = 0; m.labels.length > s; s++) l = a.measureText(m.labels[s]).width, h = l > h ? l : h;
                h += 10
            }
            y = c - h - b, v = Math.floor(y / (e.labels.length - 1)), w = c - b / 2 - y, k = f + o.scaleFontSize / 2, n(o, function () {
                a.lineWidth = o.scaleLineWidth, a.strokeStyle = o.scaleLineColor, a.beginPath(), a.moveTo(c - b / 2 + 5, k), a.lineTo(c - b / 2 - y - 5, k), a.stroke(), x > 0 ? (a.save(), a.textAlign = "right") : a.textAlign = "center", a.fillStyle = o.scaleFontColor;
                for (var t = 0; e.labels.length > t; t++) a.save(), x > 0 ? (a.translate(w + t * v, k + o.scaleFontSize), a.rotate(-(x * (Math.PI / 180))), a.fillText(e.labels[t], 0, 0), a.restore()) : a.fillText(e.labels[t], w + t * v, k + o.scaleFontSize + 3), a.beginPath(), a.moveTo(w + t * v, k + 3), o.scaleShowGridLines && t > 0 ? (a.lineWidth = o.scaleGridLineWidth, a.strokeStyle = o.scaleGridLineColor, a.lineTo(w + t * v, 5)) : a.lineTo(w + t * v, k + 3), a.stroke();
                for (a.lineWidth = o.scaleLineWidth, a.strokeStyle = o.scaleLineColor, a.beginPath(), a.moveTo(w, k + 5), a.lineTo(w, 5), a.stroke(), a.textAlign = "right", a.textBaseline = "middle", t = 0; m.steps > t; t++) a.beginPath(), a.moveTo(w - 3, k - (t + 1) * p), o.scaleShowGridLines ? (a.lineWidth = o.scaleGridLineWidth, a.strokeStyle = o.scaleGridLineColor, a.lineTo(w + y + 5, k - (t + 1) * p)) : a.lineTo(w - .5, k - (t + 1) * p), a.stroke(), o.scaleShowLabels && a.fillText(m.labels[t], w - 8, k - (t + 1) * p)
            }, function (n) {
                function i(i, r) {
                    return k - n * t(e.datasets[i].data[r], m, p)
                }
                for (var r = 0; e.datasets.length > r; r++) {
                    a.strokeStyle = e.datasets[r].strokeColor, a.lineWidth = o.datasetStrokeWidth, a.beginPath(), a.moveTo(w, k - n * t(e.datasets[r].data[0], m, p));
                    for (var s = 1; e.datasets[r].data.length > s; s++) o.bezierCurve ? a.bezierCurveTo(w + v * (s - .5), i(r, s - 1), w + v * (s - .5), i(r, s), w + v * s, i(r, s)) : a.lineTo(w + v * s, i(r, s));
                    if (a.stroke(), o.datasetFill ? (a.lineTo(w + v * (e.datasets[r].data.length - 1), k), a.lineTo(w, k), a.closePath(), a.fillStyle = e.datasets[r].fillColor, a.fill()) : a.closePath(), o.pointDot) for (a.fillStyle = e.datasets[r].pointColor, a.strokeStyle = e.datasets[r].pointStrokeColor, a.lineWidth = o.pointDotStrokeWidth, s = 0; e.datasets[r].data.length > s; s++) a.beginPath(), a.arc(w + v * s, k - n * t(e.datasets[r].data[s], m, p), o.pointDotRadius, 0, 2 * Math.PI, !0), a.fill(), a.stroke()
                }
            }, a)
        }, v = function (e, o, a) {
            var s, l, u, h, f, p, m, g, v, b, y, w, k, x, C = 0;
            for (f = d, a.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, b = 1, h = 0; e.labels.length > h; h++) s = a.measureText(e.labels[h]).width, b = s > b ? s : b;
            for (b > c / e.labels.length ? (C = 45, c / e.labels.length < Math.cos(C) * b ? (C = 90, f -= b) : f -= Math.sin(C) * b) : f -= o.scaleFontSize, h = o.scaleFontSize, f = f - 5 - h, s = Number.MIN_VALUE, l = Number.MAX_VALUE, u = 0; e.datasets.length > u; u++) for (g = 0; e.datasets[u].data.length > g; g++) e.datasets[u].data[g] > s && (s = e.datasets[u].data[g]), l > e.datasets[u].data[g] && (l = e.datasets[u].data[g]);
            if (u = Math.floor(f / (.66 * h)), h = Math.floor(.5 * (f / h)), g = o.scaleShowLabels ? o.scaleLabel : "", o.scaleOverride ? (m = {
                steps: o.scaleSteps,
                stepValue: o.scaleStepWidth,
                graphMin: o.scaleStartValue,
                labels: []
            }, r(g, m.labels, m.steps, o.scaleStartValue, o.scaleStepWidth)) : m = i(f, u, h, s, l, g), p = Math.floor(f / m.steps), h = 1, o.scaleShowLabels) {
                for (a.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, s = 0; m.labels.length > s; s++) l = a.measureText(m.labels[s]).width, h = l > h ? l : h;
                h += 10
            }
            y = c - h - b, v = Math.floor(y / e.labels.length), x = (v - 2 * o.scaleGridLineWidth - 2 * o.barValueSpacing - (o.barDatasetSpacing * e.datasets.length - 1) - (o.barStrokeWidth / 2 * e.datasets.length - 1)) / e.datasets.length, w = c - b / 2 - y, k = f + o.scaleFontSize / 2, n(o, function () {
                a.lineWidth = o.scaleLineWidth, a.strokeStyle = o.scaleLineColor, a.beginPath(), a.moveTo(c - b / 2 + 5, k), a.lineTo(c - b / 2 - y - 5, k), a.stroke(), C > 0 ? (a.save(), a.textAlign = "right") : a.textAlign = "center", a.fillStyle = o.scaleFontColor;
                for (var t = 0; e.labels.length > t; t++) a.save(), C > 0 ? (a.translate(w + t * v, k + o.scaleFontSize), a.rotate(-(C * (Math.PI / 180))), a.fillText(e.labels[t], 0, 0), a.restore()) : a.fillText(e.labels[t], w + t * v + v / 2, k + o.scaleFontSize + 3), a.beginPath(), a.moveTo(w + (t + 1) * v, k + 3), a.lineWidth = o.scaleGridLineWidth, a.strokeStyle = o.scaleGridLineColor, a.lineTo(w + (t + 1) * v, 5), a.stroke();
                for (a.lineWidth = o.scaleLineWidth, a.strokeStyle = o.scaleLineColor, a.beginPath(), a.moveTo(w, k + 5), a.lineTo(w, 5), a.stroke(), a.textAlign = "right", a.textBaseline = "middle", t = 0; m.steps > t; t++) a.beginPath(), a.moveTo(w - 3, k - (t + 1) * p), o.scaleShowGridLines ? (a.lineWidth = o.scaleGridLineWidth, a.strokeStyle = o.scaleGridLineColor, a.lineTo(w + y + 5, k - (t + 1) * p)) : a.lineTo(w - .5, k - (t + 1) * p), a.stroke(), o.scaleShowLabels && a.fillText(m.labels[t], w - 8, k - (t + 1) * p)
            }, function (n) {
                a.lineWidth = o.barStrokeWidth;
                for (var i = 0; e.datasets.length > i; i++) {
                    a.fillStyle = e.datasets[i].fillColor, a.strokeStyle = e.datasets[i].strokeColor;
                    for (var r = 0; e.datasets[i].data.length > r; r++) {
                        var s = w + o.barValueSpacing + v * r + x * i + o.barDatasetSpacing * i + o.barStrokeWidth * i;
                        a.beginPath(), a.moveTo(s, k), a.lineTo(s, k - n * t(e.datasets[i].data[r], m, p) + o.barStrokeWidth / 2), a.lineTo(s + x, k - n * t(e.datasets[i].data[r], m, p) + o.barStrokeWidth / 2), a.lineTo(s + x, k), o.barShowStroke && a.stroke(), a.closePath(), a.fill()
                    }
                }
            }, a)
        }, b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }, y = {}
};
window.CodeMirror = function () {
    "use strict";

    function e(r, o) {
        if (!(this instanceof e)) return new e(r, o);
        this.options = o = o || {};
        for (var s in ar)!o.hasOwnProperty(s) && ar.hasOwnProperty(s) && (o[s] = ar[s]);
        d(o);
        var u = this.display = t(r);
        u.wrapper.CodeMirror = this, l(this), o.autofocus && !Ri && et(this), this.view = n(new $n([new In([xn("", null, R(u))])])), this.nextOpId = 0, i(this), a(this), o.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), this.setValue(o.value || ""), Ai && setTimeout(hi(Z, this, !0), 20), this.view.history = Rn(), nt(this);
        var c;
        try {
            c = document.activeElement == u.input
        } catch (h) {}
        c || o.autofocus && !Ri ? setTimeout(hi(bt, this), 20) : yt(this), K(this, function () {
            for (var e in or) or.propertyIsEnumerable(e) && or[e](this, o[e], sr);
            for (var t = 0; dr.length > t; ++t) dr[t](this)
        })()
    }
    function t(e) {
        var t = {}, n = t.input = mi("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none;");
        Pi ? n.style.width = "1000px" : n.setAttribute("wrap", "off"), n.setAttribute("autocorrect", "off"), n.setAttribute("autocapitalize", "off"), t.inputDiv = mi("div", [n], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), t.scrollbarH = mi("div", [mi("div", null, null, "height: 1px")], "CodeMirror-hscrollbar"), t.scrollbarV = mi("div", [mi("div", null, null, "width: 1px")], "CodeMirror-vscrollbar"), t.scrollbarFiller = mi("div", null, "CodeMirror-scrollbar-filler"), t.lineDiv = mi("div"), t.selectionDiv = mi("div", null, null, "position: relative; z-index: 1"), t.cursor = mi("div", " ", "CodeMirror-cursor"), t.otherCursor = mi("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"), t.measure = mi("div", null, "CodeMirror-measure"), t.lineSpace = mi("div", [t.measure, t.selectionDiv, t.lineDiv, t.cursor, t.otherCursor], null, "position: relative; outline: none"), t.mover = mi("div", [mi("div", [t.lineSpace], "CodeMirror-lines")], null, "position: relative"), t.sizer = mi("div", [t.mover], "CodeMirror-sizer"), t.heightForcer = mi("div", " ", null, "position: absolute; height: " + vr + "px"), t.gutters = mi("div", null, "CodeMirror-gutters"), t.lineGutter = null;
        var i = mi("div", [t.sizer, t.heightForcer, t.gutters], null, "position: relative; min-height: 100%");
        return t.scroller = mi("div", [i], "CodeMirror-scroll"), t.scroller.setAttribute("tabIndex", "-1"), t.wrapper = mi("div", [t.inputDiv, t.scrollbarH, t.scrollbarV, t.scrollbarFiller, t.scroller], "CodeMirror"), Fi && (t.gutters.style.zIndex = -1, t.scroller.style.paddingRight = 0), e.appendChild ? e.appendChild(t.wrapper) : e(t.wrapper), Bi && (n.style.width = "0px"), Pi || (t.scroller.draggable = !0), zi ? (t.inputDiv.style.height = "1px", t.inputDiv.style.position = "absolute") : Fi && (t.scrollbarH.style.minWidth = t.scrollbarV.style.minWidth = "18px"), t.viewOffset = t.showingFrom = t.showingTo = t.lastSizeC = 0, t.lineNumWidth = t.lineNumInnerWidth = t.lineNumChars = null, t.prevInput = "", t.alignWidgets = !1, t.pollingFast = !1, t.poll = new oi, t.draggingText = !1, t.cachedCharWidth = t.cachedTextHeight = null, t.measureLineCache = [], t.measureLineCachePos = 0, t.inaccurateSelection = !1, t.pasteIncoming = !1, t.wheelDX = t.wheelDY = t.wheelStartX = t.wheelStartY = null, t
    }
    function n(e) {
        var t = {
            line: 0,
            ch: 0
        };
        return {
            doc: e,
            frontier: 0,
            highlight: new oi,
            sel: {
                from: t,
                to: t,
                head: t,
                anchor: t,
                shift: !1,
                extend: !1
            },
            scrollTop: 0,
            scrollLeft: 0,
            overwrite: !1,
            focused: !1,
            maxLine: On(e, 0),
            maxLineLength: 0,
            maxLineChanged: !1,
            suppressEdits: !1,
            goalColumn: null,
            cantEdit: !1,
            keyMaps: [],
            overlays: [],
            modeGen: 0
        }
    }
    function i(t) {
        var n = t.view.doc;
        t.view.mode = e.getMode(t.options, t.options.mode), n.iter(0, n.size, function (e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
        }), t.view.frontier = 0, j(t, 100), t.view.modeGen++, t.curOp && X(t, 0, n.size)
    }
    function r(e) {
        var t = e.view.doc,
            n = R(e.display);
        if (e.options.lineWrapping) {
            e.display.wrapper.className += " CodeMirror-wrap";
            var i = e.display.scroller.clientWidth / V(e.display) - 3;
            t.iter(0, t.size, function (e) {
                if (0 != e.height) {
                    var t = Math.ceil(e.text.length / i) || 1;
                    1 != t && Dn(e, t * n)
                }
            }), e.display.sizer.style.minWidth = ""
        } else e.display.wrapper.className = e.display.wrapper.className.replace(" CodeMirror-wrap", ""), c(e.view), t.iter(0, t.size, function (e) {
                0 != e.height && Dn(e, n)
            });
        X(e, 0, t.size), D(e), setTimeout(function () {
            h(e.display, e.view.doc.height)
        }, 100)
    }
    function o(e) {
        var t = fr[e.options.keyMap].style;
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (t ? " cm-keymap-" + t : "")
    }
    function a(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), D(e)
    }
    function s(e) {
        l(e), b(e, !0)
    }
    function l(e) {
        var t = e.display.gutters,
            n = e.options.gutters;
        gi(t);
        for (var i = 0; n.length > i; ++i) {
            var r = n[i],
                o = t.appendChild(mi("div", null, "CodeMirror-gutter " + r));
            "CodeMirror-linenumbers" == r && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
        }
        t.style.display = i ? "" : "none"
    }
    function u(e, t) {
        if (0 == t.height) return 0;
        for (var n, i = t.text.length, r = t; n = un(r);) {
            var o = n.find();
            r = On(e, o.from.line), i += o.from.ch - o.to.ch
        }
        for (r = t; n = cn(r);) {
            var o = n.find();
            i -= r.text.length - o.from.ch, r = On(e, o.to.line), i += r.text.length - o.to.ch
        }
        return i
    }
    function c(e) {
        e.maxLine = On(e.doc, 0), e.maxLineLength = u(e.doc, e.maxLine), e.maxLineChanged = !0, e.doc.iter(1, e.doc.size, function (t) {
            var n = u(e.doc, t);
            n > e.maxLineLength && (e.maxLineLength = n, e.maxLine = t)
        })
    }
    function d(e) {
        for (var t = !1, n = 0; e.gutters.length > n; ++n) "CodeMirror-linenumbers" == e.gutters[n] && (e.lineNumbers ? t = !0 : e.gutters.splice(n--, 1));
        !t && e.lineNumbers && e.gutters.push("CodeMirror-linenumbers")
    }
    function h(e, t) {
        var n = t + 2 * N(e);
        e.sizer.style.minHeight = e.heightForcer.style.top = n + "px";
        var i = Math.max(n, e.scroller.scrollHeight),
            r = e.scroller.scrollWidth > e.scroller.clientWidth,
            o = i > e.scroller.clientHeight;
        o ? (e.scrollbarV.style.display = "block", e.scrollbarV.style.bottom = r ? yi(e.measure) + "px" : "0", e.scrollbarV.firstChild.style.height = i - e.scroller.clientHeight + e.scrollbarV.clientHeight + "px") : e.scrollbarV.style.display = "", r ? (e.scrollbarH.style.display = "block", e.scrollbarH.style.right = o ? yi(e.measure) + "px" : "0", e.scrollbarH.firstChild.style.width = e.scroller.scrollWidth - e.scroller.clientWidth + e.scrollbarH.clientWidth + "px") : e.scrollbarH.style.display = "", r && o ? (e.scrollbarFiller.style.display = "block", e.scrollbarFiller.style.height = e.scrollbarFiller.style.width = yi(e.measure) + "px") : e.scrollbarFiller.style.display = "", Wi && 0 === yi(e.measure) && (e.scrollbarV.style.minWidth = e.scrollbarH.style.minHeight = Hi ? "18px" : "12px")
    }
    function f(e, t, n) {
        var i = e.scroller.scrollTop,
            r = e.wrapper.clientHeight;
        "number" == typeof n ? i = n : n && (i = n.top, r = n.bottom - n.top), i = Math.floor(i - N(e));
        var o = Math.ceil(i + r);
        return {
            from: Hn(t, i),
            to: Hn(t, o)
        }
    }
    function p(e) {
        var t = e.display;
        if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var n = v(t) - t.scroller.scrollLeft + e.view.scrollLeft, i = t.gutters.offsetWidth, r = n + "px", o = t.lineDiv.firstChild; o; o = o.nextSibling) if (o.alignable) for (var a = 0, s = o.alignable; s.length > a; ++a) s[a].style.left = r;
            e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
        }
    }
    function m(e) {
        if (!e.options.lineNumbers) return !1;
        var t = e.view.doc,
            n = g(e.options, t.size - 1),
            i = e.display;
        if (n.length != i.lineNumChars) {
            var r = i.measure.appendChild(mi("div", [mi("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                o = r.firstChild.offsetWidth,
                a = r.offsetWidth - o;
            return i.lineGutter.style.width = "", i.lineNumInnerWidth = Math.max(o, i.lineGutter.offsetWidth - a), i.lineNumWidth = i.lineNumInnerWidth + a, i.lineNumChars = i.lineNumInnerWidth ? n.length : -1, i.lineGutter.style.width = i.lineNumWidth + "px", !0
        }
        return !1
    }
    function g(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }
    function v(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }
    function b(e, t, n) {
        var i = e.display.showingFrom,
            r = e.display.showingTo,
            o = y(e, t, n);
        return o && (ii(e, e, "update", e), (e.display.showingFrom != i || e.display.showingTo != r) && ii(e, e, "viewportChange", e, e.display.showingFrom, e.display.showingTo)), T(e), h(e.display, e.view.doc.height), o
    }
    function y(e, t, n) {
        var i = e.display,
            r = e.view.doc;
        if (!i.wrapper.clientWidth) return i.showingFrom = i.showingTo = i.viewOffset = 0, void 0;
        var o = f(i, r, n);
        if (!(t !== !0 && 0 == t.length && o.from > i.showingFrom && o.to < i.showingTo)) {
            t && m(e) && (t = !0);
            var a = i.sizer.style.marginLeft = i.gutters.offsetWidth + "px";
            if (i.scrollbarH.style.left = e.options.fixedGutter ? a : "0", t !== !0 && Zi) for (var s = 0; t.length > s; ++s) for (var l, u = t[s]; l = un(On(r, u.from));) {
                        var c = l.find().from.line;
                        u.diff && (u.diff -= u.from - c), u.from = c
            }
            var d = t === !0 ? 0 : 1 / 0;
            if (e.options.lineNumbers && t && t !== !0) for (var s = 0; t.length > s; ++s) if (t[s].diff) {
                        d = t[s].from;
                        break
                    }
            var c = Math.max(o.from - e.options.viewportMargin, 0),
                h = Math.min(r.size, o.to + e.options.viewportMargin);
            if (c > i.showingFrom && 20 > c - i.showingFrom && (c = i.showingFrom), i.showingTo > h && 20 > i.showingTo - h && (h = Math.min(r.size, i.showingTo)), Zi) for (c = zn(dn(r, On(r, c))); r.size > h && hn(On(r, h));)++h;
            for (var p = t === !0 ? [] : w([{
                    from: i.showingFrom,
                    to: i.showingTo
                }
            ], t), g = 0, s = 0; p.length > s; ++s) {
                var v = p[s];
                c > v.from && (v.from = c), v.to > h && (v.to = h), v.from >= v.to ? p.splice(s--, 1) : g += v.to - v.from
            }
            if (g != h - c || c != i.showingFrom || h != i.showingTo) {
                p.sort(function (e, t) {
                    return e.from - t.from
                });
                var b = document.activeElement;.7 * (h - c) > g && (i.lineDiv.style.display = "none"), x(e, c, h, p, d), i.lineDiv.style.display = "", document.activeElement != b && b.offsetHeight && b.focus();
                var k = c != i.showingFrom || h != i.showingTo || i.lastSizeC != i.wrapper.clientHeight;
                k && (i.lastSizeC = i.wrapper.clientHeight), i.showingFrom = c, i.showingTo = h, j(e, 100);
                for (var C, _ = i.lineDiv.offsetTop, T = i.lineDiv.firstChild; T; T = T.nextSibling) if (T.lineObj) {
                        if (Fi) {
                            var S = T.offsetTop + T.offsetHeight;
                            C = S - _, _ = S
                        } else {
                            var M = T.getBoundingClientRect();
                            C = M.bottom - M.top
                        }
                        var E = T.lineObj.height - C;
                        if (2 > C && (C = R(i)), E > .001 || -.001 > E) {
                            Dn(T.lineObj, C);
                            var L = T.lineObj.widgets;
                            if (L) for (var s = 0; L.length > s; ++s) L[s].height = L[s].node.offsetHeight
                        }
                    }
                return i.viewOffset = qn(e, On(r, c)), i.mover.style.top = i.viewOffset + "px", f(i, r, n).to >= h && y(e, [], n), !0
            }
        }
    }
    function w(e, t) {
        for (var n = 0, i = t.length || 0; i > n; ++n) {
            for (var r = t[n], o = [], a = r.diff || 0, s = 0, l = e.length; l > s; ++s) {
                var u = e[s];
                r.to <= u.from && r.diff ? o.push({
                    from: u.from + a,
                    to: u.to + a
                }) : r.to <= u.from || r.from >= u.to ? o.push(u) : (r.from > u.from && o.push({
                    from: u.from,
                    to: r.from
                }), r.to < u.to && o.push({
                    from: r.to + a,
                    to: u.to + a
                }))
            }
            e = o
        }
        return e
    }
    function k(e) {
        for (var t = e.display, n = {}, i = {}, r = t.gutters.firstChild, o = 0; r; r = r.nextSibling, ++o) n[e.options.gutters[o]] = r.offsetLeft, i[e.options.gutters[o]] = r.offsetWidth;
        return {
            fixedPos: v(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: i,
            wrapperWidth: t.wrapper.clientWidth
        }
    }
    function x(e, t, n, i, r) {
        function o(t) {
            var n = t.nextSibling;
            return Pi && Vi && e.display.currentWheelTarget == t ? (t.style.display = "none", t.lineObj = null) : t.parentNode.removeChild(t), n
        }
        var a = k(e),
            s = e.display,
            l = e.options.lineNumbers;
        i.length || Pi && e.display.currentWheelTarget || gi(s.lineDiv);
        var u = s.lineDiv,
            c = u.firstChild,
            d = i.shift(),
            h = t;
        for (e.view.doc.iter(t, n, function (t) {
            if (d && d.to == h && (d = i.shift()), hn(t)) {
                if (0 != t.height && Dn(t, 0), t.widgets && c.previousSibling) for (var n = 0; t.widgets.length > n; ++n) if (t.widgets[n].showIfHidden) {
                            var s = c.previousSibling;
                            if ("pre" == s.nodeType) {
                                var f = mi("div", null, null, "position: relative");
                                s.parentNode.replaceChild(f, s), f.appendChild(s), s = f
                            }
                            s.appendChild(_(t.widgets[n], s, a))
                        }
            } else if (d && h >= d.from && d.to > h) {
                for (; c.lineObj != t;) c = o(c);
                l && h >= r && c.lineNumber && bi(c.lineNumber, g(e.options, h)), c = c.nextSibling
            } else {
                var p = C(e, t, h, a);
                u.insertBefore(p, c), p.lineObj = t
            }++h
        }); c;) c = o(c)
    }
    function C(e, t, n, i) {
        var r = Ln(e, t),
            o = t.gutterMarkers,
            a = e.display;
        if (!(e.options.lineNumbers || o || t.bgClass || t.wrapClass || t.widgets && t.widgets.length)) return r;
        var s = mi("div", null, t.wrapClass, "position: relative");
        if (e.options.lineNumbers || o) {
            var l = s.appendChild(mi("div", null, null, "position: absolute; left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px"));
            if (e.options.fixedGutter && (s.alignable = [l]), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (s.lineNumber = l.appendChild(mi("div", g(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.lineNumInnerWidth + "px"))), o) for (var u = 0; e.options.gutters.length > u; ++u) {
                    var c = e.options.gutters[u],
                        d = o.hasOwnProperty(c) && o[c];
                    d && l.appendChild(mi("div", [d], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[c] + "px; width: " + i.gutterWidth[c] + "px"))
            }
        }
        if (t.bgClass && s.appendChild(mi("div", " ", t.bgClass + " CodeMirror-linebackground")), s.appendChild(r), t.widgets) for (var h = 0, f = t.widgets; f.length > h; ++h) {
                var p = f[h],
                    m = _(p, s, i);
                p.above ? s.insertBefore(m, e.options.lineNumbers && 0 != t.height ? l : r) : s.appendChild(m)
        }
        return Fi && (s.style.zIndex = 2), s
    }
    function _(e, t, n) {
        var i = mi("div", [e.node], "CodeMirror-linewidget");
        if (i.widget = e, e.noHScroll) {
            (t.alignable || (t.alignable = [])).push(i);
            var r = n.wrapperWidth;
            i.style.left = n.fixedPos + "px", e.coverGutter || (r -= n.gutterTotalWidth, i.style.paddingLeft = n.gutterTotalWidth + "px"), i.style.width = r + "px"
        }
        return e.coverGutter && (i.style.zIndex = 5, i.style.position = "relative", e.noHScroll || (i.style.marginLeft = -n.gutterTotalWidth + "px")), i
    }
    function T(e) {
        var t = e.display,
            n = St(e.view.sel.from, e.view.sel.to);
        n || e.options.showCursorWhenSelecting ? S(e) : t.cursor.style.display = t.otherCursor.style.display = "none", n ? t.selectionDiv.style.display = "none" : M(e);
        var i = H(e, e.view.sel.head, "div"),
            r = t.wrapper.getBoundingClientRect(),
            o = t.lineDiv.getBoundingClientRect();
        t.inputDiv.style.top = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + o.top - r.top)) + "px", t.inputDiv.style.left = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + o.left - r.left)) + "px"
    }
    function S(e) {
        var t = e.display,
            n = H(e, e.view.sel.head, "div");
        t.cursor.style.left = n.left + "px", t.cursor.style.top = n.top + "px", t.cursor.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", t.cursor.style.display = "", n.other ? (t.otherCursor.style.display = "", t.otherCursor.style.left = n.other.left + "px", t.otherCursor.style.top = n.other.top + "px", t.otherCursor.style.height = .85 * (n.other.bottom - n.other.top) + "px") : t.otherCursor.style.display = "none"
    }
    function M(e) {
        function t(e, t, n, i) {
            0 > t && (t = 0), a.appendChild(mi("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == n ? s - e : n) + "px; height: " + (i - t) + "px"))
        }
        function n(n, i, o, a) {
            function u(t) {
                return W(e, {
                    line: n,
                    ch: t
                }, "div", c)
            }
            var c = On(r, n),
                d = c.text.length,
                h = a ? 1 / 0 : -1 / 0;
            return ki(Bn(c), i || 0, null == o ? d : o, function (e, n, r) {
                var c = u("rtl" == r ? n - 1 : e),
                    f = u("rtl" == r ? e : n - 1),
                    p = c.left,
                    m = f.right;
                f.top - c.top > 3 && (t(p, c.top, null, c.bottom), p = l, c.bottom < f.top && t(p, c.bottom, null, f.top)), null == o && n == d && (m = s), null == i && 0 == e && (p = l), h = a ? Math.min(f.top, h) : Math.max(f.bottom, h), l + 1 > p && (p = l), t(p, f.top, m - p, f.bottom)
            }), h
        }
        var i = e.display,
            r = e.view.doc,
            o = e.view.sel,
            a = document.createDocumentFragment(),
            s = i.lineSpace.offsetWidth,
            l = P(e.display);
        if (o.from.line == o.to.line) n(o.from.line, o.from.ch, o.to.ch);
        else {
            for (var u, c, d = On(r, o.from.line), h = d, f = [o.from.line, o.from.ch]; u = cn(h);) {
                var p = u.find();
                if (f.push(p.from.ch, p.to.line, p.to.ch), p.to.line == o.to.line) {
                    f.push(o.to.ch), c = !0;
                    break
                }
                h = On(r, p.to.line)
            }
            if (c) for (var m = 0; f.length > m; m += 3) n(f[m], f[m + 1], f[m + 2]);
            else {
                var g, v, b = On(r, o.to.line);
                g = o.from.ch ? n(o.from.line, o.from.ch, null, !1) : qn(e, d) - i.viewOffset, v = o.to.ch ? n(o.to.line, un(b) ? null : 0, o.to.ch, !0) : qn(e, b) - i.viewOffset, v > g && t(l, g, null, v)
            }
        }
        vi(i.selectionDiv, a), i.selectionDiv.style.display = ""
    }
    function E(e) {
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        t.cursor.style.visibility = t.otherCursor.style.visibility = "", t.blinker = setInterval(function () {
            t.cursor.offsetHeight && (t.cursor.style.visibility = t.otherCursor.style.visibility = (n = !n) ? "" : "hidden")
        }, e.options.cursorBlinkRate)
    }
    function j(e, t) {
        e.view.mode.startState && e.view.frontier < e.display.showingTo && e.view.highlight.set(t, hi(L, e))
    }
    function L(e) {
        var t = e.view,
            n = t.doc;
        if (!(t.frontier >= e.display.showingTo)) {
            var i, r = +new Date + e.options.workTime,
                o = Ut(t.mode, F(e, t.frontier)),
                a = [];
            n.iter(t.frontier, Math.min(n.size, e.display.showingTo + 500), function (n) {
                if (t.frontier >= e.display.showingFrom) {
                    var s = n.styles;
                    n.styles = Sn(e, n, o);
                    for (var l = !s || s.length != n.styles.length, u = 0; !l && s.length > u; ++u) l = s[u] != n.styles[u];
                    l && (i && i.end == t.frontier ? i.end++ : a.push(i = {
                        start: t.frontier,
                        end: t.frontier + 1
                    })), n.stateAfter = Ut(t.mode, o)
                } else En(e, n, o), n.stateAfter = 0 == t.frontier % 5 ? Ut(t.mode, o) : null;
                return ++t.frontier, +new Date > r ? (j(e, e.options.workDelay), !0) : void 0
            }), a.length && K(e, function () {
                for (var e = 0; a.length > e; ++e) X(this, a[e].start, a[e].end)
            })()
        }
    }
    function A(e, t) {
        for (var n, i, r = e.view.doc, o = t, a = t - 100; o > a; --o) {
            if (0 == o) return 0;
            var s = On(r, o - 1);
            if (s.stateAfter) return o;
            var l = ai(s.text, null, e.options.tabSize);
            (null == i || n > l) && (i = o - 1, n = l)
        }
        return i
    }
    function F(e, t) {
        var n = e.view;
        if (!n.mode.startState) return !0;
        var i = A(e, t),
            r = i && On(n.doc, i - 1).stateAfter;
        return r = r ? Ut(n.mode, r) : Gt(n.mode), n.doc.iter(i, t, function (o) {
            En(e, o, r);
            var a = i == t - 1 || 0 == i % 5 || i >= n.showingFrom && n.showingTo > i;
            o.stateAfter = a ? Ut(n.mode, r) : null, ++i
        }), r
    }
    function N(e) {
        return e.lineSpace.offsetTop
    }
    function P(e) {
        var t = vi(e.measure, mi("pre")).appendChild(mi("span", "x"));
        return t.offsetLeft
    }
    function I(e, t, n, i) {
        var r = -1;
        i = i || $(e, t);
        for (var o = n;; o += r) {
            var a = i[o];
            if (a) break;
            0 > r && 0 == o && (r = 1)
        }
        return {
            left: n > o ? a.right : a.left,
            right: o > n ? a.left : a.right,
            top: a.top,
            bottom: a.bottom
        }
    }
    function $(e, t) {
        for (var n = e.display, i = e.display.measureLineCache, r = 0; i.length > r; ++r) {
            var o = i[r];
            if (o.text == t.text && o.markedSpans == t.markedSpans && n.scroller.clientWidth == o.width) return o.measure
        }
        var a = O(e, t),
            o = {
                text: t.text,
                width: n.scroller.clientWidth,
                markedSpans: t.markedSpans,
                measure: a
            };
        return 16 == i.length ? i[++n.measureLineCachePos % 16] = o : i.push(o), a
    }
    function O(e, t) {
        var n = e.display,
            i = di(t.text.length),
            r = Ln(e, t, i);
        if (Ai && !Fi && !e.options.lineWrapping && r.childNodes.length > 100) {
            for (var o = document.createDocumentFragment(), a = 10, s = r.childNodes.length, l = 0, u = Math.ceil(s / a); u > l; ++l) {
                for (var c = mi("div", null, null, "display: inline-block"), d = 0; a > d && s; ++d) c.appendChild(r.firstChild), --s;
                o.appendChild(c)
            }
            r.appendChild(o)
        }
        vi(n.measure, r);
        for (var h, f = n.lineDiv.getBoundingClientRect(), p = [], m = di(t.text.length), g = r.offsetHeight, l = 0; i.length > l; ++l) if (h = i[l]) {
                for (var v = h.getBoundingClientRect(), b = Math.max(0, v.top - f.top), y = Math.min(v.bottom - f.top, g), d = 0; p.length > d; d += 2) {
                    var w = p[d],
                        k = p[d + 1];
                    if (!(w > y || b > k) && (b >= w && k >= y || w >= b && y >= k || Math.min(y, k) - Math.max(b, w) >= y - b >> 1)) {
                        p[d] = Math.min(b, w), p[d + 1] = Math.max(y, k);
                        break
                    }
                }
                d == p.length && p.push(b, y), m[l] = {
                    left: v.left - f.left,
                    right: v.right - f.left,
                    top: d
                }
            }
        for (var h, l = 0; m.length > l; ++l) if (h = m[l]) {
                var x = h.top;
                h.top = p[x], h.bottom = p[x + 1]
            }
        return m
    }
    function D(e) {
        e.display.measureLineCache.length = e.display.measureLineCachePos = 0, e.display.cachedCharWidth = e.display.cachedTextHeight = null, e.view.maxLineChanged = !0
    }
    function z(e, t, n, i) {
        if (t.widgets) for (var r = 0; t.widgets.length > r; ++r) if (t.widgets[r].above) {
                    var o = wn(t.widgets[r]);
                    n.top += o, n.bottom += o
                }
        if ("line" == i) return n;
        i || (i = "local");
        var a = qn(e, t);
        if ("local" != i && (a -= e.display.viewOffset), "page" == i) {
            var s = e.display.lineSpace.getBoundingClientRect();
            a += s.top + (window.pageYOffset || (document.documentElement || document.body).scrollTop);
            var l = s.left + (window.pageXOffset || (document.documentElement || document.body).scrollLeft);
            n.left += l, n.right += l
        }
        return n.top += a, n.bottom += a, n
    }
    function W(e, t, n, i) {
        return i || (i = On(e.view.doc, t.line)), z(e, i, I(e, i, t.ch), n)
    }
    function H(e, t, n, i, r) {
        function o(t, o) {
            var a = I(e, i, t, r);
            return o ? a.left = a.right : a.right = a.left, z(e, i, a, n)
        }
        i = i || On(e.view.doc, t.line), r || (r = $(e, i));
        var a = Bn(i),
            s = t.ch;
        if (!a) return o(s);
        for (var l, u, c = a[0].level, d = 0; a.length > d; ++d) {
            var h, f, p = a[d],
                m = p.level % 2;
            if (s > p.from && p.to > s) return o(s, m);
            var g = m ? p.to : p.from,
                v = m ? p.from : p.to;
            if (g == s) f = d && p.level < (h = a[d - 1]).level ? o(h.level % 2 ? h.from : h.to - 1, !0) : o(m && p.from != p.to ? s - 1 : s), m == c ? l = f : u = f;
            else if (v == s) {
                var h = a.length - 1 > d && a[d + 1];
                if (!m && h && h.from == h.to) continue;
                f = h && p.level < h.level ? o(h.level % 2 ? h.to - 1 : h.from) : o(m ? s : s - 1, !0), m == c ? l = f : u = f
            }
        }
        return c && !s && (u = o(a[0].to - 1)), l ? (u && (l.other = u), l) : u
    }
    function q(e, t, n) {
        var i = e.view.doc;
        if (n += e.display.viewOffset, 0 > n) return {
                line: 0,
                ch: 0,
                outside: !0
        };
        var r = Hn(i, n);
        if (r >= i.size) return {
                line: i.size - 1,
                ch: On(i, i.size - 1).text.length
        };
        for (0 > t && (t = 0);;) {
            var o = On(i, r),
                a = B(e, o, r, t, n),
                s = cn(o),
                l = s && s.find();
            if (!(s && a.ch >= l.from.ch)) return a;
            r = l.to.line
        }
    }
    function B(e, t, n, i, r) {
        function o(i) {
            var r = H(e, {
                line: n,
                ch: i
            }, "line", t, u);
            return s = !0, a > r.bottom ? Math.max(0, r.left - l) : r.top > a ? r.left + l : (s = !1, r.left)
        }
        var a = r - qn(e, t),
            s = !1,
            l = e.display.wrapper.clientWidth,
            u = $(e, t),
            c = Bn(t),
            d = t.text.length,
            h = _i(t),
            f = Ti(t),
            p = P(e.display),
            m = o(f);
        if (i > m) return {
                line: n,
                ch: f,
                outside: s
        };
        for (;;) {
            if (c ? f == h || f == Ei(t, h, 1) : 1 >= f - h) {
                for (var g = m - i > i - p, v = g ? h : f; kr.test(t.text.charAt(v));)++v;
                return {
                    line: n,
                    ch: v,
                    after: g,
                    outside: s
                }
            }
            var b = Math.ceil(d / 2),
                y = h + b;
            if (c) {
                y = h;
                for (var w = 0; b > w; ++w) y = Ei(t, y, 1)
            }
            var k = o(y);
            k > i ? (f = y, m = k, s && (m += 1e3), d -= b) : (h = y, p = k, d = b)
        }
    }
    function R(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == Ki) {
            Ki = mi("pre");
            for (var t = 0; 49 > t; ++t) Ki.appendChild(document.createTextNode("x")), Ki.appendChild(mi("br"));
            Ki.appendChild(document.createTextNode("x"))
        }
        vi(e.measure, Ki);
        var n = Ki.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), gi(e.measure), n || 1
    }
    function V(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = mi("span", "x"),
            n = mi("pre", [t]);
        vi(e.measure, n);
        var i = t.offsetWidth;
        return i > 2 && (e.cachedCharWidth = i), i || 10
    }
    function U(e) {
        e.curOp ? ++e.curOp.depth : e.curOp = {
            depth: 1,
            changes: [],
            delayedCallbacks: [],
            updateInput: null,
            userSelChange: null,
            textChanged: null,
            selectionChanged: !1,
            updateMaxLine: !1,
            id: ++e.nextOpId
        }
    }
    function G(e) {
        var t = e.curOp;
        if (!--t.depth) {
            e.curOp = null;
            var n = e.view,
                i = e.display;
            if (t.updateMaxLine && c(n), n.maxLineChanged && !e.options.lineWrapping) {
                var r = I(e, n.maxLine, n.maxLine.text.length).right;
                i.sizer.style.minWidth = r + 3 + vr + "px", n.maxLineChanged = !1;
                var o = Math.max(0, i.sizer.offsetLeft + i.sizer.offsetWidth - i.scroller.clientWidth);
                n.scrollLeft > o && ct(e, Math.min(i.scroller.scrollLeft, o), !0)
            }
            var a, s;
            if (t.selectionChanged) {
                var l = H(e, n.sel.head);
                a = zt(e, l.left, l.top, l.left, l.bottom)
            }(t.changes.length || a && null != a.scrollTop) && (s = b(e, t.changes, a && a.scrollTop)), !s && t.selectionChanged && T(e), a && $t(e), t.selectionChanged && E(e), n.focused && t.updateInput && Z(e, t.userSelChange), t.textChanged && ni(e, "change", e, t.textChanged), t.selectionChanged && ni(e, "cursorActivity", e);
            for (var u = 0; t.delayedCallbacks.length > u; ++u) t.delayedCallbacks[u](e)
        }
    }
    function K(e, t) {
        return function () {
            var n = e || this;
            U(n);
            try {
                var i = t.apply(n, arguments)
            } finally {
                G(n)
            }
            return i
        }
    }
    function X(e, t, n, i) {
        e.curOp.changes.push({
            from: t,
            to: n,
            diff: i
        })
    }
    function Q(e) {
        e.view.pollingFast || e.display.poll.set(e.options.pollInterval, function () {
            J(e), e.view.focused && Q(e)
        })
    }
    function Y(e) {
        function t() {
            var i = J(e);
            i || n ? (e.display.pollingFast = !1, Q(e)) : (n = !0, e.display.poll.set(60, t))
        }
        var n = !1;
        e.display.pollingFast = !0, e.display.poll.set(20, t)
    }
    function J(e) {
        var t = e.display.input,
            n = e.display.prevInput,
            i = e.view,
            r = i.sel;
        if (!i.focused || Mr(t) || tt(e)) return !1;
        var o = t.value;
        if (o == n && St(r.from, r.to)) return !1;
        U(e), i.sel.shift = !1;
        for (var a = 0, s = Math.min(n.length, o.length); s > a && n[a] == o[a];)++a;
        var l = r.from,
            u = r.to;
        n.length > a ? l = {
            line: l.line,
            ch: l.ch - (n.length - a)
        } : i.overwrite && St(l, u) && !e.display.pasteIncoming && (u = {
            line: u.line,
            ch: Math.min(On(e.view.doc, u.line).text.length, u.ch + (o.length - a))
        });
        var c = e.curOp.updateInput;
        return kt(e, l, u, Sr(o.slice(a)), "end", e.display.pasteIncoming ? "paste" : "input", {
            from: l,
            to: u
        }), e.curOp.updateInput = c, o.length > 1e3 ? t.value = e.display.prevInput = "" : e.display.prevInput = o, G(e), e.display.pasteIncoming = !1, !0
    }
    function Z(e, t) {
        var n, i, r = e.view;
        St(r.sel.from, r.sel.to) ? t && (e.display.prevInput = e.display.input.value = "") : (e.display.prevInput = "", n = Er && (r.sel.to.line - r.sel.from.line > 100 || (i = e.getSelection()).length > 1e3), e.display.input.value = n ? "-" : i || e.getSelection(), r.focused && ui(e.display.input)), e.display.inaccurateSelection = n
    }
    function et(e) {
        "nocursor" == e.options.readOnly || !Ai && document.activeElement == e.display.input || e.display.input.focus()
    }
    function tt(e) {
        return e.options.readOnly || e.view.cantEdit
    }
    function nt(e) {
        function t() {
            e.view.focused && setTimeout(hi(et, e), 0)
        }
        function n() {
            o.cachedCharWidth = o.cachedTextHeight = null, D(e), b(e, !0)
        }
        function i(t) {
            e.options.onDragEvent && e.options.onDragEvent(e, Gn(t)) || Qn(t)
        }
        function r() {
            o.inaccurateSelection && (o.prevInput = "", o.inaccurateSelection = !1, o.input.value = e.getSelection(), ui(o.input))
        }
        var o = e.display;
        ei(o.scroller, "mousedown", K(e, ot)), ei(o.scroller, "dblclick", K(e, Kn)), ei(o.lineSpace, "selectstart", function (e) {
            it(o, e) || Kn(e)
        }), Li || ei(o.scroller, "contextmenu", function (t) {
            wt(e, t)
        }), ei(o.scroller, "scroll", function () {
            ut(e, o.scroller.scrollTop), ct(e, o.scroller.scrollLeft, !0), ni(e, "scroll", e)
        }), ei(o.scrollbarV, "scroll", function () {
            ut(e, o.scrollbarV.scrollTop)
        }), ei(o.scrollbarH, "scroll", function () {
            ct(e, o.scrollbarH.scrollLeft)
        }), ei(o.scroller, "mousewheel", function (t) {
            dt(e, t)
        }), ei(o.scroller, "DOMMouseScroll", function (t) {
            dt(e, t)
        }), ei(o.scrollbarH, "mousedown", t), ei(o.scrollbarV, "mousedown", t), ei(o.wrapper, "scroll", function () {
            o.wrapper.scrollTop = o.wrapper.scrollLeft = 0
        }), window.registered || (window.registered = 0), ++window.registered, ei(window, "resize", n), setTimeout(function a() {
            for (var e = o.wrapper.parentNode; e && e != document.body; e = e.parentNode);
            e ? setTimeout(a, 5e3) : (--window.registered, ti(window, "resize", n))
        }, 5e3), ei(o.input, "keyup", K(e, function (t) {
            e.options.onKeyEvent && e.options.onKeyEvent(e, Gn(t)) || 16 == Zn(t, "keyCode") && (e.view.sel.shift = !1)
        })), ei(o.input, "input", hi(Y, e)), ei(o.input, "keydown", K(e, gt)), ei(o.input, "keypress", K(e, vt)), ei(o.input, "focus", hi(bt, e)), ei(o.input, "blur", hi(yt, e)), e.options.dragDrop && (ei(o.scroller, "dragstart", function (t) {
            lt(e, t)
        }), ei(o.scroller, "dragenter", i), ei(o.scroller, "dragover", i), ei(o.scroller, "drop", K(e, at))), ei(o.scroller, "paste", function (t) {
            it(o, t) || (et(e), Y(e))
        }), ei(o.input, "paste", function () {
            o.pasteIncoming = !0, Y(e)
        }), ei(o.input, "cut", r), ei(o.input, "copy", r), zi && ei(o.sizer, "mouseup", function () {
            document.activeElement == o.input && o.input.blur(), et(e)
        })
    }
    function it(e, t) {
        for (var n = Yn(t); n != e.wrapper; n = n.parentNode) {
            if (!n) return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(n.className) || n.parentNode == e.sizer && n != e.mover) return !0
        }
    }
    function rt(e, t, n) {
        var i = e.display;
        if (!n) {
            var r = Yn(t);
            if (r == i.scrollbarH || r == i.scrollbarH.firstChild || r == i.scrollbarV || r == i.scrollbarV.firstChild || r == i.scrollbarFiller) return null
        }
        var o, a, s = i.lineSpace.getBoundingClientRect();
        try {
            o = t.clientX, a = t.clientY
        } catch (t) {
            return null
        }
        return q(e, o - s.left, a - s.top)
    }
    function ot(e) {
        function t(e) {
            if ("single" == d) return Ft(r, Lt(l, u), e), void 0;
            if (g = Lt(l, g), v = Lt(l, v), "double" == d) {
                var t = Bt(On(l, e.line).text, e);
                Mt(e, g) ? Ft(r, t.from, v) : Ft(r, g, t.to)
            } else "triple" == d && (Mt(e, g) ? Ft(r, v, Lt(l, {
                    line: e.line,
                    ch: 0
                })) : Ft(r, g, Lt(l, {
                    line: e.line + 1,
                    ch: 0
                })))
        }
        function n(e) {
            var i = ++y,
                s = rt(r, e, !0);
            if (s) if (St(s, p)) {
                    var u = e.clientY < b.top ? -20 : e.clientY > b.bottom ? 20 : 0;
                    u && setTimeout(K(r, function () {
                        y == i && (o.scroller.scrollTop += u, n(e))
                    }), 50)
                } else {
                    a.focused || bt(r), p = s, t(s);
                    var c = f(o, l);
                    (s.line >= c.to || s.line < c.from) && setTimeout(K(r, function () {
                        y == i && n(e)
                    }), 150)
                }
        }
        function i(e) {
            y = 1 / 0;
            var n = rt(r, e);
            n && t(n), Kn(e), et(r), ti(document, "mousemove", w), ti(document, "mouseup", k)
        }
        var r = this,
            o = r.display,
            a = r.view,
            s = a.sel,
            l = a.doc;
        if (s.shift = Zn(e, "shiftKey"), it(o, e)) return Pi || (o.scroller.draggable = !1, setTimeout(function () {
                o.scroller.draggable = !0
            }, 100)), void 0;
        if (!st(r, e)) {
            var u = rt(r, e);
            switch (Jn(e)) {
            case 3:
                return Li && wt.call(r, r, e), void 0;
            case 2:
                return u && Ft(r, u), setTimeout(hi(et, r), 20), Kn(e), void 0
            }
            if (!u) return Yn(e) == o.scroller && Kn(e), void 0;
            a.focused || bt(r);
            var c = +new Date,
                d = "single";
            if (Qi && Qi.time > c - 400 && St(Qi.pos, u)) d = "triple", Kn(e), setTimeout(hi(et, r), 20), Rt(r, u.line);
            else if (Xi && Xi.time > c - 400 && St(Xi.pos, u)) {
                d = "double", Qi = {
                    time: c,
                    pos: u
                }, Kn(e);
                var h = Bt(On(l, u.line).text, u);
                Ft(r, h.from, h.to)
            } else Xi = {
                    time: c,
                    pos: u
            };
            var p = u;
            if (r.options.dragDrop && xr && !tt(r) && !St(s.from, s.to) && !Mt(u, s.from) && !Mt(s.to, u) && "single" == d) {
                var m = K(r, function (t) {
                    Pi && (o.scroller.draggable = !1), a.draggingText = !1, ti(document, "mouseup", m), ti(o.scroller, "drop", m), 10 > Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) && (Kn(t), Ft(r, u), et(r))
                });
                return Pi && (o.scroller.draggable = !0), a.draggingText = m, o.scroller.dragDrop && o.scroller.dragDrop(), ei(document, "mouseup", m), ei(o.scroller, "drop", m), void 0
            }
            Kn(e), "single" == d && Ft(r, Lt(l, u));
            var g = s.from,
                v = s.to,
                b = o.wrapper.getBoundingClientRect(),
                y = 0,
                w = K(r, function (e) {
                    Ai || Jn(e) ? n(e) : i(e)
                }),
                k = K(r, i);
            ei(document, "mousemove", w), ei(document, "mouseup", k)
        }
    }
    function at(e) {
        var t = this;
        if (!(it(t.display, e) || t.options.onDragEvent && t.options.onDragEvent(t, Gn(e)))) {
            Kn(e);
            var n = rt(t, e, !0),
                i = e.dataTransfer.files;
            if (n && !tt(t)) if (i && i.length && window.FileReader && window.File) for (var r = i.length, o = Array(r), a = 0, s = function (e, i) {
                            var s = new FileReader;
                            s.onload = function () {
                                o[i] = s.result, ++a == r && (n = Lt(t.view.doc, n), K(t, function () {
                                    var e = Tt(t, o.join(""), n, n, "paste");
                                    Nt(t, n, e)
                                })())
                            }, s.readAsText(e)
                        }, l = 0; r > l; ++l) s(i[l], l);
                else {
                    if (t.view.draggingText && !Mt(n, t.view.sel.from) && !Mt(t.view.sel.to, n)) return t.view.draggingText(e), setTimeout(hi(et, t), 20), void 0;
                    try {
                        var o = e.dataTransfer.getData("Text");
                        if (o) {
                            var u = t.view.sel.from,
                                c = t.view.sel.to;
                            Nt(t, n, n), t.view.draggingText && Tt(t, "", u, c, "paste"), t.replaceSelection(o, null, "paste"), et(t), bt(t)
                        }
                    } catch (e) {}
                }
        }
    }
    function st(e, t) {
        var n = e.display;
        try {
            var i = t.clientX,
                r = t.clientY
        } catch (t) {
            return !1
        }
        if (i >= Math.floor(n.gutters.getBoundingClientRect().right)) return !1;
        if (Kn(t), !ri(e, "gutterClick")) return !0;
        var o = n.lineDiv.getBoundingClientRect();
        if (r > o.bottom) return !0;
        r -= o.top - n.viewOffset;
        for (var a = 0; e.options.gutters.length > a; ++a) {
            var s = n.gutters.childNodes[a];
            if (s && s.getBoundingClientRect().right >= i) {
                var l = Hn(e.view.doc, r),
                    u = e.options.gutters[a];
                ii(e, e, "gutterClick", e, l, u, t);
                break
            }
        }
        return !0
    }
    function lt(e, t) {
        if (!it(e.display, t)) {
            var n = e.getSelection();
            if (t.dataTransfer.setData("Text", n), t.dataTransfer.setDragImage && !Di) {
                var i = mi("img", null, null, "position: fixed; left: 0; top: 0;");
                Oi && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), t.dataTransfer.setDragImage(i, 0, 0), Oi && i.parentNode.removeChild(i)
            }
        }
    }
    function ut(e, t) {
        2 > Math.abs(e.view.scrollTop - t) || (e.view.scrollTop = t, Li || b(e, [], t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbarV.scrollTop != t && (e.display.scrollbarV.scrollTop = t), Li && b(e, []))
    }
    function ct(e, t, n) {
        (n ? t == e.view.scrollLeft : 2 > Math.abs(e.view.scrollLeft - t)) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.view.scrollLeft = t, p(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbarH.scrollLeft != t && (e.display.scrollbarH.scrollLeft = t))
    }
    function dt(e, t) {
        var n = t.wheelDeltaX,
            i = t.wheelDeltaY;
        if (null == n && t.detail && t.axis == t.HORIZONTAL_AXIS && (n = t.detail), null == i && t.detail && t.axis == t.VERTICAL_AXIS ? i = t.detail : null == i && (i = t.wheelDelta), i && Vi && Pi) for (var r = t.target; r != a; r = r.parentNode) if (r.lineObj) {
                    e.display.currentWheelTarget = r;
                    break
                }
        var o = e.display,
            a = o.scroller;
        if (n && !Li && !Oi && null != tr) return i && ut(e, Math.max(0, Math.min(a.scrollTop + i * tr, a.scrollHeight - a.clientHeight))), ct(e, Math.max(0, Math.min(a.scrollLeft + n * tr, a.scrollWidth - a.clientWidth))), Kn(t), o.wheelStartX = null, void 0;
        if (i && null != tr) {
            var s = i * tr,
                l = e.view.scrollTop,
                u = l + o.wrapper.clientHeight;
            0 > s ? l = Math.max(0, l + s - 50) : u = Math.min(e.view.doc.height, u + s + 50), b(e, [], {
                top: l,
                bottom: u
            })
        }
        20 > er && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, o.wheelDX = n, o.wheelDY = i, setTimeout(function () {
            if (null != o.wheelStartX) {
                var e = a.scrollLeft - o.wheelStartX,
                    t = a.scrollTop - o.wheelStartY,
                    n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                o.wheelStartX = o.wheelStartY = null, n && (tr = (tr * er + n) / (er + 1), ++er)
            }
        }, 200)) : (o.wheelDX += n, o.wheelDY += i))
    }
    function ht(e, t, n) {
        if ("string" == typeof t && (t = hr[t], !t)) return !1;
        e.display.pollingFast && J(e) && (e.display.pollingFast = !1);
        var i = e.view,
            r = i.sel.shift;
        try {
            tt(e) && (i.suppressEdits = !0), n && (i.sel.shift = !1), t(e)
        } catch (o) {
            if (o != br) throw o;
            return !1
        } finally {
            i.sel.shift = r, i.suppressEdits = !1
        }
        return !0
    }
    function ft(e) {
        var t = e.view.keyMaps.slice(0);
        return t.push(e.options.keyMap), e.options.extraKeys && t.unshift(e.options.extraKeys), t
    }
    function pt(e, t) {
        function n() {
            s = !0
        }
        var i = Kt(e.options.keyMap),
            r = i.auto;
        clearTimeout(nr), r && !Qt(t) && (nr = setTimeout(function () {
            Kt(e.options.keyMap) == i && (e.options.keyMap = r.call ? r.call(null, e) : r)
        }, 50));
        var o = jr[Zn(t, "keyCode")],
            a = !1;
        if (null == o || t.altGraphKey) return !1;
        Zn(t, "altKey") && (o = "Alt-" + o), Zn(t, Yi ? "metaKey" : "ctrlKey") && (o = "Ctrl-" + o), Zn(t, Yi ? "ctrlKey" : "metaKey") && (o = "Cmd-" + o);
        var s = !1,
            l = ft(e);
        return a = Zn(t, "shiftKey") ? Xt("Shift-" + o, l, function (t) {
            return ht(e, t, !0)
        }, n) || Xt(o, l, function (t) {
            return "string" == typeof t && /^go[A-Z]/.test(t) ? ht(e, t) : void 0
        }, n) : Xt(o, l, function (t) {
            return ht(e, t)
        }, n), s && (a = !1), a && (Kn(t), E(e), Ni && (t.oldKeyCode = t.keyCode, t.keyCode = 0)), a
    }
    function mt(e, t, n) {
        var i = Xt("'" + n + "'", ft(e), function (t) {
            return ht(e, t, !0)
        });
        return i && (Kn(t), E(e)), i
    }
    function gt(e) {
        var t = this;
        if (t.view.focused || bt(t), Ai && 27 == e.keyCode && (e.returnValue = !1), !t.options.onKeyEvent || !t.options.onKeyEvent(t, Gn(e))) {
            var n = Zn(e, "keyCode");
            t.view.sel.shift = 16 == n || Zn(e, "shiftKey");
            var i = pt(t, e);
            Oi && (rr = i ? n : null, i || 88 != n || Er || !Zn(e, Vi ? "metaKey" : "ctrlKey") || t.replaceSelection(""))
        }
    }
    function vt(e) {
        var t = this;
        if (!t.options.onKeyEvent || !t.options.onKeyEvent(t, Gn(e))) {
            var n = Zn(e, "keyCode"),
                i = Zn(e, "charCode");
            if (Oi && n == rr) return rr = null, Kn(e), void 0;
            if (!(Oi && (!e.which || 10 > e.which) || zi) || !pt(t, e)) {
                var r = String.fromCharCode(null == i ? n : i);
                this.options.electricChars && this.view.mode.electricChars && this.options.smartIndent && !tt(this) && this.view.mode.electricChars.indexOf(r) > -1 && setTimeout(K(t, function () {
                    Wt(t, t.view.sel.to.line, "smart")
                }), 75), mt(t, e, r) || Y(t)
            }
        }
    }
    function bt(e) {
        "nocursor" != e.options.readOnly && (e.view.focused || (ni(e, "focus", e), e.view.focused = !0, -1 == e.display.scroller.className.search(/\bCodeMirror-focused\b/) && (e.display.scroller.className += " CodeMirror-focused"), Z(e, !0)), Q(e), E(e))
    }
    function yt(e) {
        e.view.focused && (ni(e, "blur", e), e.view.focused = !1, e.display.scroller.className = e.display.scroller.className.replace(" CodeMirror-focused", "")), clearInterval(e.display.blinker), setTimeout(function () {
            e.view.focused || (e.view.sel.shift = !1)
        }, 150)
    }
    function wt(e, t) {
        function n() {
            if (i.inputDiv.style.position = "relative", i.input.style.cssText = s, Ni && (i.scrollbarV.scrollTop = i.scroller.scrollTop = a), Q(e), null != i.input.selectionStart) {
                clearTimeout(ir);
                var t = i.input.value = " " + (St(r.from, r.to) ? "" : i.input.value),
                    n = 0;
                i.prevInput = " ", i.input.selectionStart = 1, i.input.selectionEnd = t.length, ir = setTimeout(function o() {
                    " " == i.prevInput && 0 == i.input.selectionStart ? K(e, hr.selectAll)(e) : 10 > n++ ? ir = setTimeout(o, 500) : Z(e)
                }, 200)
            }
        }
        var i = e.display;
        if (!it(i, t)) {
            var r = e.view.sel,
                o = rt(e, t),
                a = i.scroller.scrollTop;
            if (o && !Oi) {
                (St(r.from, r.to) || Mt(o, r.from) || !Mt(o, r.to)) && K(e, Nt)(e, o, o);
                var s = i.input.style.cssText;
                i.inputDiv.style.position = "absolute", i.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (t.clientY - 5) + "px; left: " + (t.clientX - 5) + "px; z-index: 1000; background: white; outline: none;" + "border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", et(e), Z(e, !0), St(r.from, r.to) && (i.input.value = i.prevInput = " "), Li ? (Qn(t), ei(window, "mouseup", function l() {
                    ti(window, "mouseup", l), setTimeout(n, 20)
                })) : setTimeout(n, 50)
            }
        }
    }
    function kt(e, t, n, i, r, o) {
        var a = Ji && sn(e.view.doc, t, n);
        if (!a) return xt(e, t, n, i, r, o);
        for (var s = a.length - 1; s >= 1; --s) xt(e, a[s].from, a[s].to, [""], o);
        return a.length ? xt(e, a[0].from, a[0].to, i, r, o) : void 0
    }
    function xt(e, t, n, i, r, o) {
        if (!e.view.suppressEdits) {
            var a = e.view,
                s = a.doc,
                l = [];
            s.iter(t.line, n.line + 1, function (e) {
                l.push(gn(e.text, e.markedSpans))
            });
            var u = a.sel.from,
                c = a.sel.to,
                d = an(mn(l[0]), mn(li(l)), t.ch, n.ch, i),
                h = _t(e, t, n, d, r, o);
            return a.history && Vn(e, t.line, i.length, l, o, u, c, a.sel.from, a.sel.to), h
        }
    }
    function Ct(e, t) {
        var n = e.view.doc,
            i = e.view.history,
            r = ("undo" == t ? i.done : i.undone).pop();
        if (r) {
            for (var o = {
                events: [],
                fromBefore: r.fromAfter,
                toBefore: r.toAfter,
                fromAfter: r.fromBefore,
                toAfter: r.toBefore
            }, a = r.events.length - 1; a >= 0; a -= 1) {
                i.dirtyCounter += "undo" == t ? -1 : 1;
                var s = r.events[a],
                    l = [],
                    u = s.start + s.added;
                n.iter(s.start, u, function (e) {
                    l.push(gn(e.text, e.markedSpans))
                }), o.events.push({
                    start: s.start,
                    added: s.old.length,
                    old: l
                });
                var c = a ? null : {
                    from: r.fromBefore,
                    to: r.toBefore
                };
                _t(e, {
                    line: s.start,
                    ch: 0
                }, {
                    line: u - 1,
                    ch: On(n, u - 1).text.length
                }, s.old, c, t)
            }("undo" == t ? i.undone : i.done).push(o)
        }
    }
    function _t(e, t, n, i, r, o) {
        var a = e.view,
            s = a.doc,
            l = e.display;
        if (!a.suppressEdits) {
            var c = n.line - t.line,
                d = On(s, t.line),
                h = On(s, n.line),
                f = !1,
                p = t.line;
            e.options.lineWrapping || (p = zn(dn(s, d)), s.iter(p, n.line + 1, function (e) {
                return e == a.maxLine ? (f = !0, !0) : void 0
            }));
            var m = li(i),
                g = R(l);
            if (0 == t.ch && 0 == n.ch && "" == pn(m)) {
                for (var v = [], b = 0, y = i.length - 1; y > b; ++b) v.push(xn(pn(i[b]), mn(i[b]), g));
                Cn(e, h, h.text, mn(m)), c && s.remove(t.line, c, e), v.length && s.insert(t.line, v)
            } else if (d == h) if (1 == i.length) Cn(e, d, d.text.slice(0, t.ch) + pn(i[0]) + d.text.slice(n.ch), mn(i[0]));
                else {
                    for (var v = [], b = 1, y = i.length - 1; y > b; ++b) v.push(xn(pn(i[b]), mn(i[b]), g));
                    v.push(xn(pn(m) + d.text.slice(n.ch), mn(m), g)), Cn(e, d, d.text.slice(0, t.ch) + pn(i[0]), mn(i[0])), s.insert(t.line + 1, v)
                } else if (1 == i.length) Cn(e, d, d.text.slice(0, t.ch) + pn(i[0]) + h.text.slice(n.ch), mn(i[0])), s.remove(t.line + 1, c, e);
            else {
                var v = [];
                Cn(e, d, d.text.slice(0, t.ch) + pn(i[0]), mn(i[0])), Cn(e, h, pn(m) + h.text.slice(n.ch), mn(m));
                for (var b = 1, y = i.length - 1; y > b; ++b) v.push(xn(pn(i[b]), mn(i[b]), g));
                c > 1 && s.remove(t.line + 1, c - 1, e), s.insert(t.line + 1, v)
            } if (e.options.lineWrapping) {
                var w = Math.max(5, l.scroller.clientWidth / V(l) - 3);
                s.iter(t.line, t.line + i.length, function (e) {
                    if (0 != e.height) {
                        var t = (Math.ceil(e.text.length / w) || 1) * g;
                        t != e.height && Dn(e, t)
                    }
                })
            } else s.iter(p, t.line + i.length, function (e) {
                    var t = u(s, e);
                    t > a.maxLineLength && (a.maxLine = e, a.maxLineLength = t, a.maxLineChanged = !0, f = !1)
                }), f && (e.curOp.updateMaxLine = !0);
            a.frontier = Math.min(a.frontier, t.line), j(e, 400);
            var k = i.length - c - 1;
            if (X(e, t.line, n.line + 1, k), ri(e, "change")) {
                for (var b = 0; i.length > b; ++b) "string" != typeof i[b] && (i[b] = i[b].text);
                var x = {
                    from: t,
                    to: n,
                    text: i,
                    origin: o
                };
                if (e.curOp.textChanged) {
                    for (var C = e.curOp.textChanged; C.next; C = C.next);
                    C.next = x
                } else e.curOp.textChanged = x
            }
            var _, T, S = {
                    line: t.line + i.length - 1,
                    ch: pn(m).length + (1 == i.length ? t.ch : 0)
                };
            if (r && "string" != typeof r) r.from ? (_ = r.from, T = r.to) : _ = T = r;
            else if ("end" == r) _ = T = S;
            else if ("start" == r) _ = T = t;
            else if ("around" == r) _ = t, T = S;
            else {
                var M = function (e) {
                    if (Mt(e, t)) return e;
                    if (!Mt(n, e)) return S;
                    var i = e.line + k,
                        r = e.ch;
                    return e.line == n.line && (r += pn(m).length - (n.ch - (n.line == t.line ? t.ch : 0))), {
                        line: i,
                        ch: r
                    }
                };
                _ = M(a.sel.from), T = M(a.sel.to)
            }
            return Nt(e, _, T, null, !0), S
        }
    }
   
 
   
    function Vt(t, n, i, r) {
        e.defaults[t] = n, i && (or[t] = r ? function (e, t, n) {
            n != sr && i(e, t, n)
        } : i)
    }
    function Ut(e, t) {
        if (t === !0) return t;
        if (e.copyState) return e.copyState(t);
        var n = {};
        for (var i in t) {
            var r = t[i];
            r instanceof Array && (r = r.concat([])), n[i] = r
        }
        return n
    }
    function Gt(e, t, n) {
        return e.startState ? e.startState(t, n) : !0
    }
    function Kt(e) {
        return "string" == typeof e ? fr[e] : e
    }
   
    function Qt(e) {
        var t = jr[Zn(e, "keyCode")];
        return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
    }
    function Yt(e, t) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8
    }
    function Jt(e, t) {
        this.lines = [], this.type = t, this.cm = e
    }
    function Zt(e, t, n, i, r) {
        var o = e.view.doc,
            a = new Jt(e, r);
        if ("range" == r && !Mt(t, n)) return a;
        if (i) for (var s in i) i.hasOwnProperty(s) && (a[s] = i[s]);
        a.replacedWith && (a.collapsed = !0, a.replacedWith = mi("span", [a.replacedWith], "CodeMirror-widget")), a.collapsed && (Zi = !0);
        var l, u, c = t.line,
            d = 0;
        if (o.iter(c, n.line + 1, function (i) {
            a.collapsed && !e.options.lineWrapping && dn(o, i) == e.view.maxLine && (e.curOp.updateMaxLine = !0);
            var r = {
                from: null,
                to: null,
                marker: a
            };
            d += i.text.length, c == t.line && (r.from = t.ch, d -= t.ch), c == n.line && (r.to = n.ch, d -= i.text.length - n.ch), a.collapsed && (c == n.line && (u = ln(i, n.ch)), c == t.line ? l = ln(i, t.ch) : Dn(i, 0)), nn(i, r), ++c
        }), a.collapsed && o.iter(t.line, n.line + 1, function (e) {
            hn(e) && Dn(e, 0)
        }), a.readOnly && (Ji = !0, (e.view.history.done.length || e.view.history.undone.length) && e.clearHistory()), a.collapsed) {
            if (l != u) throw new Error("Inserting collapsed marker overlapping an existing one");
            a.size = d, a.atomic = !0
        }
        return (a.className || a.startStyle || a.endStyle || a.collapsed) && X(e, t.line, n.line + 1), a.atomic && Pt(e), a
    }
   
    function tn(e, t) {
        for (var n, i = 0; e.length > i; ++i) e[i] != t && (n || (n = [])).push(e[i]);
        return n
    }
   
    function rn(e, t) {
        if (e) for (var n, i = 0; e.length > i; ++i) {
                var r = e[i],
                    o = r.marker,
                    a = null == r.from || (o.inclusiveLeft ? t >= r.from : t > r.from);
                if (a || "bookmark" == o.type && r.from == t) {
                    var s = null == r.to || (o.inclusiveRight ? r.to >= t : r.to > t);
                    (n || (n = [])).push({
                        from: r.from,
                        to: s ? null : r.to,
                        marker: o
                    })
                }
        }
        return n
    }
    function on(e, t, n) {
        if (e) for (var i, r = 0; e.length > r; ++r) {
                var o = e[r],
                    a = o.marker,
                    s = null == o.to || (a.inclusiveRight ? o.to >= n : o.to > n);
                if (s || "bookmark" == a.type && o.from == n && o.from != t) {
                    var l = null == o.from || (a.inclusiveLeft ? n >= o.from : n > o.from);
                    (i || (i = [])).push({
                        from: l ? null : o.from - n,
                        to: null == o.to ? null : o.to - n,
                        marker: a
                    })
                }
        }
        return i
    }
    function an(e, t, n, i, r) {
        if (!e && !t) return r;
        var o = rn(e, n),
            a = on(t, n, i),
            s = 1 == r.length,
            l = li(r).length + (s ? n : 0);
        if (o) for (var u = 0; o.length > u; ++u) {
                var c = o[u];
                if (null == c.to) {
                    var d = en(a, c.marker);
                    d ? s && (c.to = null == d.to ? null : d.to + l) : c.to = n
                }
        }
        if (a) for (var u = 0; a.length > u; ++u) {
                var c = a[u];
                if (null != c.to && (c.to += l), null == c.from) {
                    var d = en(o, c.marker);
                    d || (c.from = l, s && (o || (o = [])).push(c))
                } else c.from += l, s && (o || (o = [])).push(c)
        }
        var h = [gn(r[0], o)];
        if (!s) {
            var f, p = r.length - 2;
            if (p > 0 && o) for (var u = 0; o.length > u; ++u) null == o[u].to && (f || (f = [])).push({
                        from: null,
                        to: null,
                        marker: o[u].marker
                    });
            for (var u = 0; p > u; ++u) h.push(gn(r[u + 1], f));
            h.push(gn(li(r), a))
        }
        return h
    }

   
    function vn(e) {
        var t = e.markedSpans;
        if (t) {
            for (var n = 0; t.length > n; ++n) {
                var i = t[n].marker.lines,
                    r = ci(i, e);
                i.splice(r, 1)
            }
            e.markedSpans = null
        }
    }
   
    function yn(e) {
        return function () {
            U(this.cm);
            try {
                var t = e.apply(this, arguments)
            } finally {
                G(this.cm)
            }
            return t
        }
    }
  
    function In(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, n = e.length, i = 0; n > t; ++t) e[t].parent = this, i += e[t].height;
        this.height = i
    }
    function $n(e) {
        this.children = e;
        for (var t = 0, n = 0, i = 0, r = e.length; r > i; ++i) {
            var o = e[i];
            t += o.chunkSize(), n += o.height, o.parent = this
        }
        this.size = t, this.height = n, this.parent = null
    }
    function On(e, t) {
        for (; !e.lines;) for (var n = 0;; ++n) {
                var i = e.children[n],
                    r = i.chunkSize();
                if (r > t) {
                    e = i;
                    break
                }
                t -= r
        }
        return e.lines[t]
    }
  
    function Un() {
        Qn(this)
    }
    function Gn(e) {
        return e.stop || (e.stop = Un), e
    }
    function Kn(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function Xn(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    function Qn(e) {
        Kn(e), Xn(e)
    }
    function Yn(e) {
        return e.target || e.srcElement
    }
    function Jn(e) {
        var t = e.which;
        return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Vi && e.ctrlKey && 1 == t && (t = 3), t
    }
    function Zn(e, t) {
        var n = e.override && e.override.hasOwnProperty(t);
        return n ? e.override[t] : e[t]
    }
    function ei(e, t, n) {
        if (e.addEventListener) e.addEventListener(t, n, !1);
        else if (e.attachEvent) e.attachEvent("on" + t, n);
        else {
            var i = e._handlers || (e._handlers = {}),
                r = i[t] || (i[t] = []);
            r.push(n)
        }
    }
    function ti(e, t, n) {
        if (e.removeEventListener) e.removeEventListener(t, n, !1);
        else if (e.detachEvent) e.detachEvent("on" + t, n);
        else {
            var i = e._handlers && e._handlers[t];
            if (!i) return;
            for (var r = 0; i.length > r; ++r) if (i[r] == n) {
                    i.splice(r, 1);
                    break
                }
        }
    }
    function ni(e, t) {
        var n = e._handlers && e._handlers[t];
        if (n) for (var i = Array.prototype.slice.call(arguments, 2), r = 0; n.length > r; ++r) n[r].apply(null, i)
    }
    function ii(e, t, n) {
        function i(e) {
            return function () {
                e.apply(null, o)
            }
        }
        var r = t._handlers && t._handlers[n];
        if (r) for (var o = Array.prototype.slice.call(arguments, 3), a = e.curOp && e.curOp.delayedCallbacks, s = 0; r.length > s; ++s) a ? a.push(i(r[s])) : r[s].apply(null, o)
    }
    function ri(e, t) {
        var n = e._handlers && e._handlers[t];
        return n && n.length > 0
    }
    function oi() {
        this.id = null
    }
    function ai(e, t, n) {
        null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
        for (var i = 0, r = 0; t > i; ++i) "	" == e.charAt(i) ? r += n - r % n : ++r;
        return r
    }
    function si(e) {
        for (; e >= yr.length;) yr.push(li(yr) + " ");
        return yr[e]
    }
    function li(e) {
        return e[e.length - 1]
    }
    function ui(e) {
        Bi ? (e.selectionStart = 0, e.selectionEnd = e.value.length) : e.select()
    }
    function ci(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, i = e.length; i > n; ++n) if (e[n] == t) return n;
        return -1
    }
    function di(e) {
        for (var t = [], n = 0; e > n; ++n) t.push(void 0);
        return t
    }
    function hi(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
            return e.apply(null, t)
        }
    }
    function fi(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || wr.test(e))
    }
    function pi(e) {
        var t = 0;
        for (var n in e) e.hasOwnProperty(n) && e[n] && ++t;
        return !t
    }
    function mi(e, t, n, i) {
        var r = document.createElement(e);
        if (n && (r.className = n), i && (r.style.cssText = i), "string" == typeof t) bi(r, t);
        else if (t) for (var o = 0; t.length > o; ++o) r.appendChild(t[o]);
        return r
    }
    function gi(e) {
        if (Ai) for (; e.firstChild;) e.removeChild(e.firstChild);
        else e.innerHTML = "";
        return e
    }
    function vi(e, t) {
        return gi(e).appendChild(t)
    }
    function bi(e, t) {
        Ni ? (e.innerHTML = "", e.appendChild(document.createTextNode(t))) : e.textContent = t
    }
    function yi(e) {
        if (null != _r) return _r;
        var t = mi("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
        return vi(e, t), t.offsetWidth && (_r = t.offsetHeight - t.clientHeight), _r || 0
    }
    function wi(e) {
        if (null == Tr) {
            var t = mi("span", "​");
            vi(e, mi("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Tr = 1 >= t.offsetWidth && t.offsetHeight > 2 && !Fi)
        }
        return Tr ? mi("span", "​") : mi("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px")
    }
    function ki(e, t, n, i) {
        if (!e) return i(t, n, "ltr");
        for (var r = 0; e.length > r; ++r) {
            var o = e[r];
            (n > o.from && o.to > t || t == n && o.to == t) && i(Math.max(o.from, t), Math.min(o.to, n), 1 == o.level ? "rtl" : "ltr")
        }
    }
    function xi(e) {
        return e.level % 2 ? e.to : e.from
    }
    function Ci(e) {
        return e.level % 2 ? e.from : e.to
    }
    function _i(e) {
        var t = Bn(e);
        return t ? xi(t[0]) : 0
    }
    function Ti(e) {
        var t = Bn(e);
        return t ? Ci(li(t)) : e.text.length
    }
    function Si(e, t) {
        var n = On(e.view.doc, t),
            i = dn(e.view.doc, n);
        i != n && (t = zn(i));
        var r = Bn(i),
            o = r ? r[0].level % 2 ? Ti(i) : _i(i) : 0;
        return {
            line: t,
            ch: o
        }
    }
    function Mi(e, t) {
        for (var n, i; n = cn(i = On(e.view.doc, t));) t = n.find().to.line;
        var r = Bn(i),
            o = r ? r[0].level % 2 ? _i(i) : Ti(i) : i.text.length;
        return {
            line: t,
            ch: o
        }
    }
    function Ei(e, t, n, i) {
        var r = Bn(e);
        if (!r) return ji(e, t, n, i);
        for (var o = i ? function (t, n) {
                do t += n; while (t > 0 && kr.test(e.text.charAt(t)));
                return t
            } : function (e, t) {
                return e + t
            }, a = r[0].level, s = 0; r.length > s; ++s) {
            var l = r[s],
                u = l.level % 2 == a;
            if (t > l.from && l.to > t || u && (l.from == t || l.to == t)) break
        }
        for (var c = o(t, l.level % 2 ? -n : n); null != c;) if (l.level % 2 == a) {
                if (!(l.from > c || c > l.to)) break;
                l = r[s += n], c = l && (n > 0 == l.level % 2 ? o(l.to, -1) : o(l.from, 1))
            } else if (c == xi(l)) l = r[--s], c = l && Ci(l);
        else {
            if (c != Ci(l)) break;
            l = r[++s], c = l && xi(l)
        }
        return 0 > c || c > e.text.length ? null : c
    }
    function ji(e, t, n, i) {
        var r = t + n;
        if (i) for (; r > 0 && kr.test(e.text.charAt(r));) r += n;
        return 0 > r || r > e.text.length ? null : r
    }
    var Li = /gecko\/\d/i.test(navigator.userAgent),
        Ai = /MSIE \d/.test(navigator.userAgent),
        Fi = Ai && (null == document.documentMode || 8 > document.documentMode),
        Ni = Ai && (null == document.documentMode || 9 > document.documentMode),
        Pi = /WebKit\//.test(navigator.userAgent),
        Ii = Pi && /Qt\/\d+\.\d+/.test(navigator.userAgent),
        $i = /Chrome\//.test(navigator.userAgent),
        Oi = /Opera\//.test(navigator.userAgent),
        Di = /Apple Computer/.test(navigator.vendor),
        zi = /KHTML\//.test(navigator.userAgent),
        Wi = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent),
        Hi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),
        qi = /PhantomJS/.test(navigator.userAgent),
        Bi = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent),
        Ri = Bi || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),
        Vi = Bi || /Mac/.test(navigator.platform),
        Ui = /windows/i.test(navigator.platform),
        Gi = Oi && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    Gi && (Gi = Number(Gi[1]));
    var Ki, Xi, Qi, Yi = Vi && (Ii || Oi && (null == Gi || 12.11 > Gi)),
        Ji = !1,
        Zi = !1,
        er = 0,
        tr = null;
    Ai ? tr = -.53 : Li ? tr = 15 : $i ? tr = -.7 : Di && (tr = -1 / 3);
    var nr, ir, rr = null;
    e.prototype = {
        getValue: function (e) {
            var t = [],
                n = this.view.doc;
            return n.iter(0, n.size, function (e) {
                t.push(e.text)
            }), t.join(e || "\n")
        },
        setValue: K(null, function (e) {
            var t = this.view.doc,
                n = {
                    line: 0,
                    ch: 0
                }, i = On(t, t.size - 1).text.length;
            xt(this, n, {
                line: t.size - 1,
                ch: i
            }, Sr(e), n, n, "setValue")
        }),
        getSelection: function (e) {
            return this.getRange(this.view.sel.from, this.view.sel.to, e)
        },
        replaceSelection: K(null, function (e, t, n) {
            var i = this.view.sel;
            kt(this, i.from, i.to, Sr(e), t || "around", n)
        }),
        focus: function () {
            window.focus(), et(this), bt(this), Y(this)
        },
        setOption: function (e, t) {
            var n = this.options,
                i = n[e];
            (n[e] != t || "mode" == e) && (n[e] = t, or.hasOwnProperty(e) && K(this, or[e])(this, t, i))
        },
        getOption: function (e) {
            return this.options[e]
        },
        getMode: function () {
            return this.view.mode
        },
        addKeyMap: function (e) {
            this.view.keyMaps.push(e)
        },
        removeKeyMap: function (e) {
            for (var t = this.view.keyMaps, n = 0; t.length > n; ++n) if (("string" == typeof e ? t[n].name : t[n]) == e) return t.splice(n, 1), !0
        },
        addOverlay: K(null, function (t, n) {
            var i = t.token ? t : e.getMode(this.options, t);
            if (i.startState) throw new Error("Overlays may not be stateful.");
            this.view.overlays.push({
                mode: i,
                modeSpec: t,
                opaque: n && n.opaque
            }), this.view.modeGen++, X(this, 0, this.view.doc.size)
        }),
        removeOverlay: K(null, function (e) {
            for (var t = this.view.overlays, n = 0; t.length > n; ++n) if (t[n].modeSpec == e) return t.splice(n, 1), this.view.modeGen++, X(this, 0, this.view.doc.size), void 0
        }),
        undo: K(null, function () {
            Ct(this, "undo")
        }),
        redo: K(null, function () {
            Ct(this, "redo")
        }),
        indentLine: K(null, function (e, t, n) {
            "string" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), At(this.view.doc, e) && Wt(this, e, t, n)
        }),
        indentSelection: K(null, function (e) {
            var t = this.view.sel;
            if (St(t.from, t.to)) return Wt(this, t.from.line, e);
            for (var n = t.to.line - (t.to.ch ? 0 : 1), i = t.from.line; n >= i; ++i) Wt(this, i, e)
        }),
        historySize: function () {
            var e = this.view.history;
            return {
                undo: e.done.length,
                redo: e.undone.length
            }
        },
        clearHistory: function () {
            this.view.history = Rn()
        },
        markClean: function () {
            this.view.history.dirtyCounter = 0, this.view.history.lastOp = this.view.history.lastOrigin = null
        },
        isClean: function () {
            return 0 == this.view.history.dirtyCounter
        },
        getHistory: function () {
            function e(e) {
                for (var t, n = 0, i = []; e.length > n; ++n) {
                    var r = e[n];
                    i.push({
                        events: t = [],
                        fromBefore: r.fromBefore,
                        toBefore: r.toBefore,
                        fromAfter: r.fromAfter,
                        toAfter: r.toAfter
                    });
                    for (var o = 0, a = r.events; a.length > o; ++o) {
                        var s = [],
                            l = a[o];
                        t.push({
                            start: l.start,
                            added: l.added,
                            old: s
                        });
                        for (var u = 0; l.old.length > u; ++u) s.push(pn(l.old[u]))
                    }
                }
                return i
            }
            var t = this.view.history;
            return {
                done: e(t.done),
                undone: e(t.undone)
            }
        },
        setHistory: function (e) {
            var t = this.view.history = Rn();
            t.done = e.done, t.undone = e.undone
        },
        getTokenAt: function (e) {
            var t = this.view.doc;
            e = Lt(t, e);
            for (var n = F(this, e.line), i = this.view.mode, r = On(t, e.line), o = new Yt(r.text, this.options.tabSize); o.pos < e.ch && !o.eol();) {
                o.start = o.pos;
                var a = i.token(o, n)
            }
            return {
                start: o.start,
                end: o.pos,
                string: o.current(),
                className: a || null,
                type: a || null,
                state: n
            }
        },
        getStateAfter: function (e) {
            var t = this.view.doc;
            return e = jt(t, null == e ? t.size - 1 : e), F(this, e + 1)
        },
        cursorCoords: function (e, t) {
            var n, i = this.view.sel;
            return n = null == e ? i.head : "object" == typeof e ? Lt(this.view.doc, e) : e ? i.from : i.to, H(this, n, t || "page")
        },
        charCoords: function (e, t) {
            return W(this, Lt(this.view.doc, e), t || "page")
        },
        coordsChar: function (e) {
            var t = this.display.lineSpace.getBoundingClientRect();
            return q(this, e.left - t.left, e.top - t.top)
        },
        defaultTextHeight: function () {
            return R(this.display)
        },
        markText: K(null, function (e, t, n) {
            return Zt(this, Lt(this.view.doc, e), Lt(this.view.doc, t), n, "range")
        }),
        setBookmark: K(null, function (e, t) {
            return e = Lt(this.view.doc, e), Zt(this, e, e, t ? {
                replacedWith: t
            } : {}, "bookmark")
        }),
        findMarksAt: function (e) {
            var t = this.view.doc;
            e = Lt(t, e);
            var n = [],
                i = On(t, e.line).markedSpans;
            if (i) for (var r = 0; i.length > r; ++r) {
                    var o = i[r];
                    (null == o.from || o.from <= e.ch) && (null == o.to || o.to >= e.ch) && n.push(o.marker)
            }
            return n
        },
        setGutterMarker: K(null, function (e, t, n) {
            return Ht(this, e, function (e) {
                var i = e.gutterMarkers || (e.gutterMarkers = {});
                return i[t] = n, !n && pi(i) && (e.gutterMarkers = null), !0
            })
        }),
        clearGutter: K(null, function (e) {
            var t = 0,
                n = this,
                i = n.view.doc;
            i.iter(0, i.size, function (i) {
                i.gutterMarkers && i.gutterMarkers[e] && (i.gutterMarkers[e] = null, X(n, t, t + 1), pi(i.gutterMarkers) && (i.gutterMarkers = null)), ++t
            })
        }),
        addLineClass: K(null, function (e, t, n) {
            return Ht(this, e, function (e) {
                var i = "text" == t ? "textClass" : "background" == t ? "bgClass" : "wrapClass";
                if (e[i]) {
                    if (new RegExp("\\b" + n + "\\b").test(e[i])) return !1;
                    e[i] += " " + n
                } else e[i] = n;
                return !0
            })
        }),
        removeLineClass: K(null, function (e, t, n) {
            return Ht(this, e, function (e) {
                var i = "text" == t ? "textClass" : "background" == t ? "bgClass" : "wrapClass",
                    r = e[i];
                if (!r) return !1;
                if (null == n) e[i] = null;
                else {
                    var o = r.replace(new RegExp("^" + n + "\\b\\s*|\\s*\\b" + n + "\\b"), "");
                    if (o == r) return !1;
                    e[i] = o || null
                }
                return !0
            })
        }),
        addLineWidget: K(null, function (e, t, n) {
            return kn(this, e, t, n)
        }),
        removeLineWidget: function (e) {
            e.clear()
        },
        lineInfo: function (e) {
            if ("number" == typeof e) {
                if (!At(this.view.doc, e)) return null;
                var t = e;
                if (e = On(this.view.doc, e), !e) return null
            } else {
                var t = zn(e);
                if (null == t) return null
            }
            return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets
            }
        },
        getViewport: function () {
            return {
                from: this.display.showingFrom,
                to: this.display.showingTo
            }
        },
        addWidget: function (e, t, n, i, r) {
            var o = this.display;
            e = H(this, Lt(this.view.doc, e));
            var a = e.top,
                s = e.left;
            if (t.style.position = "absolute", o.sizer.appendChild(t), "over" == i) a = e.top;
            else if ("near" == i) {
                var l = Math.max(o.wrapper.clientHeight, this.view.doc.height),
                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                e.bottom + t.offsetHeight > l && e.top > t.offsetHeight && (a = e.top - t.offsetHeight), s + t.offsetWidth > u && (s = u - t.offsetWidth)
            }
            t.style.top = a + N(o) + "px", t.style.left = t.style.right = "", "right" == r ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == r ? s = 0 : "middle" == r && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && Dt(this, s, a, s + t.offsetWidth, a + t.offsetHeight)
        },
        lineCount: function () {
            return this.view.doc.size
        },
        clipPos: function (e) {
            return Lt(this.view.doc, e)
        },
        getCursor: function (e) {
            var t, n = this.view.sel;
            return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || e === !1 ? n.to : n.from, Et(t)
        },
        somethingSelected: function () {
            return !St(this.view.sel.from, this.view.sel.to)
        },
        setCursor: K(null, function (e, t, n) {
            var i = Lt(this.view.doc, "number" == typeof e ? {
                line: e,
                ch: t || 0
            } : e);
            n ? Ft(this, i) : Nt(this, i, i)
        }),
        setSelection: K(null, function (e, t) {
            var n = this.view.doc;
            Nt(this, Lt(n, e), Lt(n, t || e))
        }),
        extendSelection: K(null, function (e, t) {
            var n = this.view.doc;
            Ft(this, Lt(n, e), t && Lt(n, t))
        }),
        setExtending: function (e) {
            this.view.sel.extend = e
        },
        getLine: function (e) {
            var t = this.getLineHandle(e);
            return t && t.text
        },
        getLineHandle: function (e) {
            var t = this.view.doc;
            return At(t, e) ? On(t, e) : void 0
        },
        getLineNumber: function (e) {
            return zn(e)
        },
        setLine: K(null, function (e, t) {
            At(this.view.doc, e) && Tt(this, t, {
                line: e,
                ch: 0
            }, {
                line: e,
                ch: On(this.view.doc, e).text.length
            })
        }),
        removeLine: K(null, function (e) {
            At(this.view.doc, e) && Tt(this, "", {
                line: e,
                ch: 0
            }, Lt(this.view.doc, {
                line: e + 1,
                ch: 0
            }))
        }),
        replaceRange: K(null, function (e, t, n) {
            var i = this.view.doc;
            return t = Lt(i, t), n = n ? Lt(i, n) : t, Tt(this, e, t, n)
        }),
        getRange: function (e, t, n) {
            var i = this.view.doc;
            e = Lt(i, e), t = Lt(i, t);
            var r = e.line,
                o = t.line;
            if (r == o) return On(i, r).text.slice(e.ch, t.ch);
            var a = [On(i, r).text.slice(e.ch)];
            return i.iter(r + 1, o, function (e) {
                a.push(e.text)
            }), a.push(On(i, o).text.slice(0, t.ch)), a.join(n || "\n")
        },
        triggerOnKeyDown: K(null, gt),
        execCommand: function (e) {
            return hr[e](this)
        },
        moveH: K(null, function (e, t) {
            var n = this.view.sel,
                i = 0 > e ? n.from : n.to;
            (n.shift || n.extend || St(n.from, n.to)) && (i = qt(this, e, t, this.options.rtlMoveVisually)), Ft(this, i, i, e)
        }),
        deleteH: K(null, function (e, t) {
            var n = this.view.sel;
            St(n.from, n.to) ? Tt(this, "", n.from, qt(this, e, t, !1), "delete") : Tt(this, "", n.from, n.to, "delete"), this.curOp.userSelChange = !0
        }),
        moveV: K(null, function (e, t) {
            var n, i = this.view,
                r = i.doc,
                o = this.display,
                a = i.sel.head,
                s = H(this, a, "div"),
                l = s.left;
            if (null != i.goalColumn && (l = i.goalColumn), "page" == t) {
                var u = Math.min(o.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
                n = s.top + e * u
            } else "line" == t && (n = e > 0 ? s.bottom + 3 : s.top - 3);
            do {
                var c = q(this, l, n);
                n += 5 * e
            } while (c.outside && (0 > e ? n > 0 : r.height > n));
            "page" == t && (o.scrollbarV.scrollTop += W(this, c, "div").top - s.top), Ft(this, c, c, e), i.goalColumn = l
        }),
        toggleOverwrite: function () {
            (this.view.overwrite = !this.view.overwrite) ? this.display.cursor.className += " CodeMirror-overwrite" : this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "")
        },
        posFromIndex: function (e) {
            var t, n = 0,
                i = this.view.doc;
            return i.iter(0, i.size, function (i) {
                var r = i.text.length + 1;
                return r > e ? (t = e, !0) : (e -= r, ++n, void 0)
            }), Lt(i, {
                line: n,
                ch: t
            })
        },
        indexFromPos: function (e) {
            e = Lt(this.view.doc, e);
            var t = e.ch;
            return this.view.doc.iter(0, e.line, function (e) {
                t += e.text.length + 1
            }), t
        },
        scrollTo: function (e, t) {
            null != e && (this.display.scrollbarH.scrollLeft = this.display.scroller.scrollLeft = e), null != t && (this.display.scrollbarV.scrollTop = this.display.scroller.scrollTop = t), b(this, [])
        },
        getScrollInfo: function () {
            var e = this.display.scroller,
                t = vr;
            return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - t,
                width: e.scrollWidth - t,
                clientHeight: e.clientHeight - t,
                clientWidth: e.clientWidth - t
            }
        },
        scrollIntoView: function (e) {
            "number" == typeof e && (e = {
                line: e,
                ch: 0
            }), e && null == e.line ? Dt(this, e.left, e.top, e.right, e.bottom) : (e = e ? Lt(this.view.doc, e) : this.view.sel.head, Ot(this, e))
        },
        setSize: function (e, t) {
            function n(e) {
                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
            }
            null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.refresh()
        },
        on: function (e, t) {
            ei(this, e, t)
        },
        off: function (e, t) {
            ti(this, e, t)
        },
        operation: function (e) {
            return K(this, e)()
        },
        refresh: function () {
            D(this);
            var e = this.view.scrollTop,
                t = this.view.scrollLeft;
            this.display.scroller.scrollHeight > e && (this.display.scrollbarV.scrollTop = this.display.scroller.scrollTop = e), this.display.scroller.scrollWidth > t && (this.display.scrollbarH.scrollLeft = this.display.scroller.scrollLeft = t), b(this, !0)
        },
        getInputField: function () {
            return this.display.input
        },
        getWrapperElement: function () {
            return this.display.wrapper
        },
        getScrollerElement: function () {
            return this.display.scroller
        },
        getGutterElement: function () {
            return this.display.gutters
        }
    };
    var or = e.optionHandlers = {}, ar = e.defaults = {}, sr = e.Init = {
            toString: function () {
                return "CodeMirror.Init"
            }
        };
    Vt("value", "", function (e, t) {
        e.setValue(t)
    }, !0), Vt("mode", null, i, !0), Vt("indentUnit", 2, i, !0), Vt("indentWithTabs", !1), Vt("smartIndent", !0), Vt("tabSize", 4, function (e) {
        i(e), D(e), b(e, !0)
    }, !0), Vt("electricChars", !0), Vt("rtlMoveVisually", !Ui), Vt("theme", "default", function (e) {
        a(e), s(e)
    }, !0), Vt("keyMap", "default", o), Vt("extraKeys", null), Vt("onKeyEvent", null), Vt("onDragEvent", null), Vt("lineWrapping", !1, r, !0), Vt("gutters", [], function (e) {
        d(e.options), s(e)
    }, !0), Vt("fixedGutter", !0, function (e, t) {
        e.display.gutters.style.left = t ? v(e.display) + "px" : "0", e.refresh()
    }, !0), Vt("lineNumbers", !1, function (e) {
        d(e.options), s(e)
    }, !0), Vt("firstLineNumber", 1, s, !0), Vt("lineNumberFormatter", function (e) {
        return e
    }, s, !0), Vt("showCursorWhenSelecting", !1, T, !0), Vt("readOnly", !1, function (e, t) {
        "nocursor" == t ? (yt(e), e.display.input.blur()) : t || Z(e, !0)
    }), Vt("dragDrop", !0), Vt("cursorBlinkRate", 530), Vt("cursorHeight", 1), Vt("workTime", 100), Vt("workDelay", 100), Vt("flattenSpans", !0), Vt("pollInterval", 100), Vt("undoDepth", 40), Vt("viewportMargin", 10, function (e) {
        e.refresh()
    }, !0), Vt("tabindex", null, function (e, t) {
        e.display.input.tabIndex = t || ""
    }), Vt("autofocus", null);
    var lr = e.modes = {}, ur = e.mimeModes = {};
    e.defineMode = function (t, n) {
        if (e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2) {
            n.dependencies = [];
            for (var i = 2; arguments.length > i; ++i) n.dependencies.push(arguments[i])
        }
        lr[t] = n
    }, e.defineMIME = function (e, t) {
        ur[e] = t
    }, e.resolveMode = function (t) {
        if ("string" == typeof t && ur.hasOwnProperty(t)) t = ur[t];
        else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
        return "string" == typeof t ? {
            name: t
        } : t || {
            name: "null"
        }
    }, e.getMode = function (t, n) {
        n = e.resolveMode(n);
        var i = lr[n.name];
        if (!i) return e.getMode(t, "text/plain");
        var r = i(t, n);
        if (cr.hasOwnProperty(n.name)) {
            var o = cr[n.name];
            for (var a in o) o.hasOwnProperty(a) && (r.hasOwnProperty(a) && (r["_" + a] = r[a]), r[a] = o[a])
        }
        return r.name = n.name, r
    }, e.defineMode("null", function () {
        return {
            token: function (e) {
                e.skipToEnd()
            }
        }
    }), e.defineMIME("text/plain", "null");
    var cr = e.modeExtensions = {};
    e.extendMode = function (e, t) {
        var n = cr.hasOwnProperty(e) ? cr[e] : cr[e] = {};
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
    }, e.defineExtension = function (t, n) {
        e.prototype[t] = n
    }, e.defineOption = Vt;
    var dr = [];
    e.defineInitHook = function (e) {
        dr.push(e)
    }, e.copyState = Ut, e.startState = Gt, e.innerMode = function (e, t) {
        for (; e.innerMode;) {
            var n = e.innerMode(t);
            t = n.state, e = n.mode
        }
        return n || {
            mode: e,
            state: t
        }
    };
    var hr = e.commands = {
        selectAll: function (e) {
            e.setSelection({
                line: 0,
                ch: 0
            }, {
                line: e.lineCount() - 1
            })
        },
        killLine: function (e) {
            var t = e.getCursor(!0),
                n = e.getCursor(!1),
                i = !St(t, n);
            i || e.getLine(t.line).length != t.ch ? e.replaceRange("", t, i ? n : {
                line: t.line
            }, "delete") : e.replaceRange("", t, {
                line: t.line + 1,
                ch: 0
            }, "delete")
        },
        deleteLine: function (e) {
            var t = e.getCursor().line;
            e.replaceRange("", {
                line: t,
                ch: 0
            }, {
                line: t
            }, "delete")
        },
        undo: function (e) {
            e.undo()
        },
        redo: function (e) {
            e.redo()
        },
        goDocStart: function (e) {
            e.extendSelection({
                line: 0,
                ch: 0
            })
        },
        goDocEnd: function (e) {
            e.extendSelection({
                line: e.lineCount() - 1
            })
        },
        goLineStart: function (e) {
            e.extendSelection(Si(e, e.getCursor().line))
        },
        goLineStartSmart: function (e) {
            var t = e.getCursor(),
                n = Si(e, t.line),
                i = e.getLineHandle(n.line),
                r = Bn(i);
            if (r && 0 != r[0].level) e.extendSelection(n);
            else {
                var o = Math.max(0, i.text.search(/\S/)),
                    a = t.line == n.line && o >= t.ch && t.ch;
                e.extendSelection({
                    line: n.line,
                    ch: a ? 0 : o
                })
            }
        },
        goLineEnd: function (e) {
            e.extendSelection(Mi(e, e.getCursor().line))
        },
        goLineUp: function (e) {
            e.moveV(-1, "line")
        },
        goLineDown: function (e) {
            e.moveV(1, "line")
        },
        goPageUp: function (e) {
            e.moveV(-1, "page")
        },
        goPageDown: function (e) {
            e.moveV(1, "page")
        },
        goCharLeft: function (e) {
            e.moveH(-1, "char")
        },
        goCharRight: function (e) {
            e.moveH(1, "char")
        },
        goColumnLeft: function (e) {
            e.moveH(-1, "column")
        },
        goColumnRight: function (e) {
            e.moveH(1, "column")
        },
        goWordLeft: function (e) {
            e.moveH(-1, "word")
        },
        goWordRight: function (e) {
            e.moveH(1, "word")
        },
        delCharBefore: function (e) {
            e.deleteH(-1, "char")
        },
        delCharAfter: function (e) {
            e.deleteH(1, "char")
        },
        delWordBefore: function (e) {
            e.deleteH(-1, "word")
        },
        delWordAfter: function (e) {
            e.deleteH(1, "word")
        },
        indentAuto: function (e) {
            e.indentSelection("smart")
        },
        indentMore: function (e) {
            e.indentSelection("add")
        },
        indentLess: function (e) {
            e.indentSelection("subtract")
        },
        insertTab: function (e) {
            e.replaceSelection("	", "end", "input")
        },
        defaultTab: function (e) {
            e.somethingSelected() ? e.indentSelection("add") : e.replaceSelection("	", "end", "input")
        },
        transposeChars: function (e) {
            var t = e.getCursor(),
                n = e.getLine(t.line);
            t.ch > 0 && t.ch < n.length - 1 && e.replaceRange(n.charAt(t.ch) + n.charAt(t.ch - 1), {
                line: t.line,
                ch: t.ch - 1
            }, {
                line: t.line,
                ch: t.ch + 1
            })
        },
        newlineAndIndent: function (e) {
            K(e, function () {
                e.replaceSelection("\n", "end", "input"), e.indentLine(e.getCursor().line, null, !0)
            })()
        },
        toggleOverwrite: function (e) {
            e.toggleOverwrite()
        }
    }, fr = e.keyMap = {};
    fr.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite"
    }, fr.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Alt-Up": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Down": "goDocEnd",
        "Ctrl-Left": "goWordLeft",
        "Ctrl-Right": "goWordRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delWordBefore",
        "Ctrl-Delete": "delWordAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        fallthrough: "basic"
    }, fr.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goWordLeft",
        "Alt-Right": "goWordRight",
        "Cmd-Left": "goLineStart",
        "Cmd-Right": "goLineEnd",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-Alt-Backspace": "delWordAfter",
        "Alt-Delete": "delWordAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        fallthrough: ["basic", "emacsy"]
    }, fr["default"] = Vi ? fr.macDefault : fr.pcDefault, fr.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, e.isModifierKey = Qt, e.fromTextArea = function (t, n) {
        function i() {
            t.value = u.getValue()
        }
        if (n || (n = {}), n.value = t.value, !n.tabindex && t.tabindex && (n.tabindex = t.tabindex), null == n.autofocus) {
            var r = document.body;
            try {
                r = document.activeElement
            } catch (o) {}
            n.autofocus = r == t || null != t.getAttribute("autofocus") && r == document.body
        }
        if (t.form) {
            ei(t.form, "submit", i);
            var a = t.form,
                s = a.submit;
            try {
                a.submit = function l() {
                    i(), a.submit = s, a.submit(), a.submit = l
                }
            } catch (o) {}
        }
        t.style.display = "none";
        var u = e(function (e) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }, n);
        return u.save = i, u.getTextArea = function () {
            return t
        }, u.toTextArea = function () {
            i(), t.parentNode.removeChild(u.getWrapperElement()), t.style.display = "", t.form && (ti(t.form, "submit", i), "function" == typeof t.form.submit && (t.form.submit = s))
        }, u
    }, Yt.prototype = {
        eol: function () {
            return this.pos >= this.string.length
        },
        sol: function () {
            return 0 == this.pos
        },
        peek: function () {
            return this.string.charAt(this.pos) || void 0
        },
        next: function () {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
        },
        eat: function (e) {
            var t = this.string.charAt(this.pos);
            if ("string" == typeof e) var n = t == e;
            else var n = t && (e.test ? e.test(t) : e(t));
            return n ? (++this.pos, t) : void 0
        },
        eatWhile: function (e) {
            for (var t = this.pos; this.eat(e););
            return this.pos > t
        },
        eatSpace: function () {
            for (var e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
            return this.pos > e
        },
        skipToEnd: function () {
            this.pos = this.string.length
        },
        skipTo: function (e) {
            var t = this.string.indexOf(e, this.pos);
            return t > -1 ? (this.pos = t, !0) : void 0
        },
        backUp: function (e) {
            this.pos -= e
        },
        column: function () {
            return ai(this.string, this.start, this.tabSize)
        },
        indentation: function () {
            return ai(this.string, null, this.tabSize)
        },
        match: function (e, t, n) {
            if ("string" != typeof e) {
                var i = this.string.slice(this.pos).match(e);
                return i && i.index > 0 ? null : (i && t !== !1 && (this.pos += i[0].length), i)
            }
            var r = function (e) {
                return n ? e.toLowerCase() : e
            };
            return r(this.string).indexOf(r(e), this.pos) == this.pos ? (t !== !1 && (this.pos += e.length), !0) : void 0
        },
        current: function () {
            return this.string.slice(this.start, this.pos)
        }
    }, e.StringStream = Yt, e.TextMarker = Jt, Jt.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            U(this.cm);
            for (var e = this.cm.view, t = null, n = null, i = 0; this.lines.length > i; ++i) {
                var r = this.lines[i],
                    o = en(r.markedSpans, this);
                null != o.to && (n = zn(r)), r.markedSpans = tn(r.markedSpans, o), null != o.from ? t = zn(r) : this.collapsed && !hn(r) && Dn(r, R(this.cm.display))
            }
            if (this.collapsed && !this.cm.options.lineWrapping) for (var i = 0; this.lines.length > i; ++i) {
                    var a = dn(e.doc, this.lines[i]),
                        s = u(e.doc, a);
                    s > e.maxLineLength && (e.maxLine = a, e.maxLineLength = s, e.maxLineChanged = !0)
            }
            null != t && X(this.cm, t, n + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.collapsed && this.cm.view.cantEdit && (this.cm.view.cantEdit = !1, Pt(this.cm)), G(this.cm), ii(this.cm, this, "clear")
        }
    }, Jt.prototype.find = function () {
        for (var e, t, n = 0; this.lines.length > n; ++n) {
            var i = this.lines[n],
                r = en(i.markedSpans, this);
            if (null != r.from || null != r.to) {
                var o = zn(i);
                null != r.from && (e = {
                    line: o,
                    ch: r.from
                }), null != r.to && (t = {
                    line: o,
                    ch: r.to
                })
            }
        }
        return "bookmark" == this.type ? e : e && {
            from: e,
            to: t
        }
    }, Jt.prototype.getOptions = function (e) {
        var t = this.replacedWith;
        return {
            className: this.className,
            inclusiveLeft: this.inclusiveLeft,
            inclusiveRight: this.inclusiveRight,
            atomic: this.atomic,
            collapsed: this.collapsed,
            clearOnEnter: this.clearOnEnter,
            replacedWith: e ? t && t.cloneNode(!0) : t,
            readOnly: this.readOnly,
            startStyle: this.startStyle,
            endStyle: this.endStyle
        }
    };
    var pr = e.LineWidget = function (e, t, n) {
        for (var i in n) n.hasOwnProperty(i) && (this[i] = n[i]);
        this.cm = e, this.node = t
    };
    pr.prototype.clear = yn(function () {
        var e = this.line.widgets,
            t = zn(this.line);
        if (null != t && e) {
            for (var n = 0; e.length > n; ++n) e[n] == this && e.splice(n--, 1);
            Dn(this.line, Math.max(0, this.line.height - wn(this))), X(this.cm, t, t + 1)
        }
    }), pr.prototype.changed = yn(function () {
        var e = this.height;
        this.height = null;
        var t = wn(this) - e;
        if (t) {
            Dn(this.line, this.line.height + t);
            var n = zn(this.line);
            X(this.cm, n, n + 1)
        }
    });
    var mr = {}, gr = /[\t\u0000-\u0019\u200b\u2028\u2029\uFEFF]/g;
    In.prototype = {
        chunkSize: function () {
            return this.lines.length
        },
        remove: function (e, t, n) {
            for (var i = e, r = e + t; r > i; ++i) {
                var o = this.lines[i];
                this.height -= o.height, _n(o), ii(n, o, "delete")
            }
            this.lines.splice(e, t)
        },
        collapse: function (e) {
            e.splice.apply(e, [e.length, 0].concat(this.lines))
        },
        insertHeight: function (e, t, n) {
            this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
            for (var i = 0, r = t.length; r > i; ++i) t[i].parent = this
        },
        iterN: function (e, t, n) {
            for (var i = e + t; i > e; ++e) if (n(this.lines[e])) return !0
        }
    }, $n.prototype = {
        chunkSize: function () {
            return this.size
        },
        remove: function (e, t, n) {
            this.size -= t;
            for (var i = 0; this.children.length > i; ++i) {
                var r = this.children[i],
                    o = r.chunkSize();
                if (o > e) {
                    var a = Math.min(t, o - e),
                        s = r.height;
                    if (r.remove(e, a, n), this.height -= s - r.height, o == a && (this.children.splice(i--, 1), r.parent = null), 0 == (t -= a)) break;
                    e = 0
                } else e -= o
            }
            if (25 > this.size - t) {
                var l = [];
                this.collapse(l), this.children = [new In(l)], this.children[0].parent = this
            }
        },
        collapse: function (e) {
            for (var t = 0, n = this.children.length; n > t; ++t) this.children[t].collapse(e)
        },
        insert: function (e, t) {
            for (var n = 0, i = 0, r = t.length; r > i; ++i) n += t[i].height;
            this.insertHeight(e, t, n)
        },
        insertHeight: function (e, t, n) {
            this.size += t.length, this.height += n;
            for (var i = 0, r = this.children.length; r > i; ++i) {
                var o = this.children[i],
                    a = o.chunkSize();
                if (a >= e) {
                    if (o.insertHeight(e, t, n), o.lines && o.lines.length > 50) {
                        for (; o.lines.length > 50;) {
                            var s = o.lines.splice(o.lines.length - 25, 25),
                                l = new In(s);
                            o.height -= l.height, this.children.splice(i + 1, 0, l), l.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                e -= a
            }
        },
        maybeSpill: function () {
            if (!(10 >= this.children.length)) {
                var e = this;
                do {
                    var t = e.children.splice(e.children.length - 5, 5),
                        n = new $n(t);
                    if (e.parent) {
                        e.size -= n.size, e.height -= n.height;
                        var i = ci(e.parent.children, e);
                        e.parent.children.splice(i + 1, 0, n)
                    } else {
                        var r = new $n(e.children);
                        r.parent = e, e.children = [r, n], e = r
                    }
                    n.parent = e.parent
                } while (e.children.length > 10);
                e.parent.maybeSpill()
            }
        },
        iter: function (e, t, n) {
            this.iterN(e, t - e, n)
        },
        iterN: function (e, t, n) {
            for (var i = 0, r = this.children.length; r > i; ++i) {
                var o = this.children[i],
                    a = o.chunkSize();
                if (a > e) {
                    var s = Math.min(t, a - e);
                    if (o.iterN(e, s, n)) return !0;
                    if (0 == (t -= s)) break;
                    e = 0
                } else e -= a
            }
        }
    }, e.e_stop = Qn, e.e_preventDefault = Kn, e.e_stopPropagation = Xn, e.on = ei, e.off = ti, e.signal = ni;
    var vr = 30,
        br = e.Pass = {
            toString: function () {
                return "CodeMirror.Pass"
            }
        };
    oi.prototype = {
        set: function (e, t) {
            clearTimeout(this.id), this.id = setTimeout(t, e)
        }
    }, e.countColumn = ai;
    var yr = [""],
        wr = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc]/,
        kr = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F]/,
        xr = function () {
            if (Ni) return !1;
            var e = mi("div");
            return "draggable" in e || "dragDrop" in e
        }(),
        Cr = /^$/;
    Li ? Cr = /$'/ : Di ? Cr = /\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/ : $i && (Cr = /\-[^ \-\.?]|\?[^ \-\.?\]\}:;!'\"\),\/]|[\.!\"#&%\)*+,:;=>\]|\}~][\(\{\[<]|\$'/);
    var _r, Tr, Sr = 3 != "\n\nb".split(/\n/).length ? function (e) {
            for (var t = 0, n = [], i = e.length; i >= t;) {
                var r = e.indexOf("\n", t); - 1 == r && (r = e.length);
                var o = e.slice(t, "\r" == e.charAt(r - 1) ? r - 1 : r),
                    a = o.indexOf("\r"); - 1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = r + 1)
            }
            return n
        } : function (e) {
            return e.split(/\r\n?|\n/)
        };
    e.splitLines = Sr;
    var Mr = window.getSelection ? function (e) {
            try {
                return e.selectionStart != e.selectionEnd
            } catch (t) {
                return !1
            }
        } : function (e) {
            try {
                var t = e.ownerDocument.selection.createRange()
            } catch (n) {}
            return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1
        }, Er = function () {
            var e = mi("div");
            return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
        }(),
        jr = {
            3: "Enter",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Esc",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            44: "PrintScrn",
            45: "Insert",
            46: "Delete",
            59: ";",
            91: "Mod",
            92: "Mod",
            93: "Mod",
            109: "-",
            107: "=",
            127: "Delete",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            63276: "PageUp",
            63277: "PageDown",
            63275: "End",
            63273: "Home",
            63234: "Left",
            63232: "Up",
            63235: "Right",
            63233: "Down",
            63302: "Insert",
            63272: "Delete"
        };
    e.keyNames = jr,
    function () {
        for (var e = 0; 10 > e; e++) jr[e + 48] = String(e);
        for (var e = 65; 90 >= e; e++) jr[e] = String.fromCharCode(e);
        for (var e = 1; 12 >= e; e++) jr[e + 111] = jr[e + 63235] = "F" + e
    }();
    var Lr = function () {
        function e(e) {
            return 255 >= e ? t.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1791 >= e ? n.charAt(e - 1536) : e >= 1792 && 2220 >= e ? "r" : "L"
        }
        var t = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL",
            n = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr",
            i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            r = /[stwN]/,
            o = /[LRr]/,
            a = /[Lb1n]/,
            s = /[1n]/,
            l = "L";
        return function (t) {
            if (!i.test(t)) return !1;
            for (var n, u = t.length, c = [], d = 0; u > d; ++d) c.push(n = e(t.charCodeAt(d)));
            for (var d = 0, h = l; u > d; ++d) {
                var n = c[d];
                "m" == n ? c[d] = h : h = n
            }
            for (var d = 0, f = l; u > d; ++d) {
                var n = c[d];
                "1" == n && "r" == f ? c[d] = "n" : o.test(n) && (f = n, "r" == n && (c[d] = "R"))
            }
            for (var d = 1, h = c[0]; u - 1 > d; ++d) {
                var n = c[d];
                "+" == n && "1" == h && "1" == c[d + 1] ? c[d] = "1" : "," != n || h != c[d + 1] || "1" != h && "n" != h || (c[d] = h), h = n
            }
            for (var d = 0; u > d; ++d) {
                var n = c[d];
                if ("," == n) c[d] = "N";
                else if ("%" == n) {
                    for (var p = d + 1; u > p && "%" == c[p]; ++p);
                    for (var m = d && "!" == c[d - 1] || u - 1 > p && "1" == c[p] ? "1" : "N", g = d; p > g; ++g) c[g] = m;
                    d = p - 1
                }
            }
            for (var d = 0, f = l; u > d; ++d) {
                var n = c[d];
                "L" == f && "1" == n ? c[d] = "L" : o.test(n) && (f = n)
            }
            for (var d = 0; u > d; ++d) if (r.test(c[d])) {
                    for (var p = d + 1; u > p && r.test(c[p]); ++p);
                    for (var v = "L" == (d ? c[d - 1] : l), b = "L" == (u - 1 > p ? c[p] : l), m = v || b ? "L" : "R", g = d; p > g; ++g) c[g] = m;
                    d = p - 1
                }
            for (var y, w = [], d = 0; u > d;) if (a.test(c[d])) {
                    var k = d;
                    for (++d; u > d && a.test(c[d]); ++d);
                    w.push({
                        from: k,
                        to: d,
                        level: 0
                    })
                } else {
                    var x = d,
                        C = w.length;
                    for (++d; u > d && "L" != c[d]; ++d);
                    for (var g = x; d > g;) if (s.test(c[g])) {
                            g > x && w.splice(C, 0, {
                                from: x,
                                to: g,
                                level: 1
                            });
                            var _ = g;
                            for (++g; d > g && s.test(c[g]); ++g);
                            w.splice(C, 0, {
                                from: _,
                                to: g,
                                level: 2
                            }), x = g
                        } else ++g;
                    d > x && w.splice(C, 0, {
                        from: x,
                        to: d,
                        level: 1
                    })
                }
            return 1 == w[0].level && (y = t.match(/^\s+/)) && (w[0].from = y[0].length, w.unshift({
                from: 0,
                to: y[0].length,
                level: 0
            })), 1 == li(w).level && (y = t.match(/\s+$/)) && (li(w).to -= y[0].length, w.push({
                from: u - y[0].length,
                to: u,
                level: 0
            })), w[0].level != li(w).level && w.push({
                from: u,
                to: u,
                level: w[0].level
            }), w
        }
    }();
    return e.version = "3.02", e
}(), CodeMirror.defineMode("clike", function (e, t) {
    function n(e, t) {
        var n = e.next();
        if (g[n]) {
            var o = g[n](e, t);
            if (o !== !1) return o
        }
        if ('"' == n || "'" == n) return t.tokenize = i(n), t.tokenize(e, t);
        if (/[\[\]{}\(\),;\:\.]/.test(n)) return l = n, null;
        if (/\d/.test(n)) return e.eatWhile(/[\w\.]/), "number";
        if ("/" == n) {
            if (e.eat("*")) return t.tokenize = r, r(e, t);
            if (e.eat("/")) return e.skipToEnd(), "comment"
        }
        if (b.test(n)) return e.eatWhile(b), "operator";
        e.eatWhile(/[\w\$_]/);
        var a = e.current();
        return h.propertyIsEnumerable(a) ? (p.propertyIsEnumerable(a) && (l = "newstatement"), "keyword") : f.propertyIsEnumerable(a) ? (p.propertyIsEnumerable(a) && (l = "newstatement"), "builtin") : m.propertyIsEnumerable(a) ? "atom" : "variable"
    }
    function i(e) {
        return function (t, n) {
            for (var i, r = !1, o = !1; null != (i = t.next());) {
                if (i == e && !r) {
                    o = !0;
                    break
                }
                r = !r && "\\" == i
            }
            return (o || !r && !v) && (n.tokenize = null), "string"
        }
    }
    function r(e, t) {
        for (var n, i = !1; n = e.next();) {
            if ("/" == n && i) {
                t.tokenize = null;
                break
            }
            i = "*" == n
        }
        return "comment"
    }
    function o(e, t, n, i, r) {
        this.indented = e, this.column = t, this.type = n, this.align = i, this.prev = r
    }
    function a(e, t, n) {
        var i = e.indented;
        return e.context && "statement" == e.context.type && (i = e.context.indented), e.context = new o(i, t, n, null, e.context)
    }
    function s(e) {
        var t = e.context.type;
        return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented), e.context = e.context.prev
    }
    var l, u = e.indentUnit,
        c = t.statementIndentUnit || u,
        d = t.dontAlignCalls,
        h = t.keywords || {}, f = t.builtin || {}, p = t.blockKeywords || {}, m = t.atoms || {}, g = t.hooks || {}, v = t.multiLineStrings,
        b = /[+\-*&%=<>!?|\/]/;
    return {
        startState: function (e) {
            return {
                tokenize: null,
                context: new o((e || 0) - u, 0, "top", !1),
                indented: 0,
                startOfLine: !0
            }
        },
        token: function (e, t) {
            var i = t.context;
            if (e.sol() && (null == i.align && (i.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) return null;
            l = null;
            var r = (t.tokenize || n)(e, t);
            if ("comment" == r || "meta" == r) return r;
            if (null == i.align && (i.align = !0), ";" != l && ":" != l && "," != l || "statement" != i.type) if ("{" == l) a(t, e.column(), "}");
                else if ("[" == l) a(t, e.column(), "]");
            else if ("(" == l) a(t, e.column(), ")");
            else if ("}" == l) {
                for (;
                "statement" == i.type;) i = s(t);
                for ("}" == i.type && (i = s(t));
                "statement" == i.type;) i = s(t)
            } else l == i.type ? s(t) : (("}" == i.type || "top" == i.type) && ";" != l || "statement" == i.type && "newstatement" == l) && a(t, e.column(), "statement");
            else s(t);
            return t.startOfLine = !1, r
        },
        indent: function (e, t) {
            if (e.tokenize != n && null != e.tokenize) return CodeMirror.Pass;
            var i = e.context,
                r = t && t.charAt(0);
            "statement" == i.type && "}" == r && (i = i.prev);
            var o = r == i.type;
            return "statement" == i.type ? i.indented + ("{" == r ? 0 : c) : d && ")" == i.type && !o ? i.indented + c : i.align ? i.column + (o ? 0 : 1) : i.indented + (o ? 0 : u)
        },
        electricChars: "{}"
    }
}),
function () {
    function e(e) {
        for (var t = {}, n = e.split(" "), i = 0; n.length > i; ++i) t[n[i]] = !0;
        return t
    }
    function t(e, n) {
        if (!n.startOfLine) return !1;
        for (;;) {
            if (!e.skipTo("\\")) {
                e.skipToEnd(), n.tokenize = null;
                break
            }
            if (e.next(), e.eol()) {
                n.tokenize = t;
                break
            }
        }
        return "meta"
    }
    function n(e, t) {
        for (var n; null != (n = e.next());) if ('"' == n && !e.eat('"')) {
                t.tokenize = null;
                break
            }
        return "string"
    }
    function i(e, t) {
        for (var n = 0; e.length > n; ++n) CodeMirror.defineMIME(e[n], t)
    }
    var r = "auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile";
    i(["text/x-csrc", "text/x-c", "text/x-chdr"], {
        name: "clike",
        keywords: e(r),
        blockKeywords: e("case do else for if switch while struct"),
        atoms: e("null"),
        hooks: {
            "#": t
        }
    }), i(["text/x-c++src", "text/x-c++hdr"], {
        name: "clike",
        keywords: e(r + " asm dynamic_cast namespace reinterpret_cast try bool explicit new " + "static_cast typeid catch operator template typename class friend private " + "this using const_cast inline public throw virtual delete mutable protected " + "wchar_t"),
        blockKeywords: e("catch class do else finally for if struct switch try while"),
        atoms: e("true false null"),
        hooks: {
            "#": t
        }
    }), CodeMirror.defineMIME("text/x-java", {
        name: "clike",
        keywords: e("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),
        blockKeywords: e("catch class do else finally for if switch try while"),
        atoms: e("true false null"),
        hooks: {
            "@": function (e) {
                return e.eatWhile(/[\w\$_]/), "meta"
            }
        }
    }), CodeMirror.defineMIME("text/x-csharp", {
        name: "clike",
        keywords: e("abstract as base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
        blockKeywords: e("catch class do else finally for foreach if struct switch try while"),
        builtin: e("Boolean Byte Char DateTime DateTimeOffset Decimal Double Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
        atoms: e("true false null"),
        hooks: {
            "@": function (e, t) {
                return e.eat('"') ? (t.tokenize = n, n(e, t)) : (e.eatWhile(/[\w\$_]/), "meta")
            }
        }
    }), CodeMirror.defineMIME("text/x-scala", {
        name: "clike",
        keywords: e("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try trye type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
        blockKeywords: e("catch class do else finally for forSome if match switch try while"),
        atoms: e("true false null"),
        hooks: {
            "@": function (e) {
                return e.eatWhile(/[\w\$_]/), "meta"
            }
        }
    })
}(), CodeMirror.defineMode("css", function (e) {
    function t(e) {
        for (var t = {}, n = 0; e.length > n; ++n) t[e[n]] = !0;
        return t
    }
    function n(e, t) {
        return l = t, e
    }
    function i(e, t) {
        var i = e.next();
        if ("@" == i) return e.eatWhile(/[\w\\\-]/), n("def", e.current());
        if ("/" == i && e.eat("*")) return t.tokenize = r, r(e, t);
        if ("<" == i && e.eat("!")) return t.tokenize = o, o(e, t);
        if ("=" == i) n(null, "compare");
        else {
            if (("~" == i || "|" == i) && e.eat("=")) return n(null, "compare");
            if ('"' == i || "'" == i) return t.tokenize = a(i), t.tokenize(e, t);
            if ("#" == i) return e.eatWhile(/[\w\\\-]/), n("atom", "hash");
            if ("!" == i) return e.match(/^\s*\w*/), n("keyword", "important");
            if (/\d/.test(i)) return e.eatWhile(/[\w.%]/), n("number", "unit");
            if ("-" !== i) return /[,+>*\/]/.test(i) ? n(null, "select-op") : "." == i && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? n("qualifier", "qualifier") : ":" == i ? n("operator", i) : /[;{}\[\]\(\)]/.test(i) ? n(null, i) : "u" == i && e.match("rl(") ? (e.backUp(1), t.tokenize = s, n("property", "variable")) : (e.eatWhile(/[\w\\\-]/), n("property", "variable"));
            if (/\d/.test(e.peek())) return e.eatWhile(/[\w.%]/), n("number", "unit");
            if (e.match(/^[^-]+-/)) return n("meta", "meta")
        }
    }
    function r(e, t) {
        for (var r, o = !1; null != (r = e.next());) {
            if (o && "/" == r) {
                t.tokenize = i;
                break
            }
            o = "*" == r
        }
        return n("comment", "comment")
    }
    function o(e, t) {
        for (var r, o = 0; null != (r = e.next());) {
            if (o >= 2 && ">" == r) {
                t.tokenize = i;
                break
            }
            o = "-" == r ? o + 1 : 0
        }
        return n("comment", "comment")
    }
    function a(e, t) {
        return function (r, o) {
            for (var a, s = !1; null != (a = r.next()) && (a != e || s);) s = !s && "\\" == a;
            return s || (t && r.backUp(1), o.tokenize = i), n("string", "string")
        }
    }
    function s(e, t) {
        return e.next(), t.tokenize = e.match(/\s*[\"\']/, !1) ? i : a(")", !0), n(null, "(")
    }
    var l, u = e.indentUnit,
        c = t(["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"]),
        d = t(["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid"]),
        h = t(["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid-cell", "grid-column", "grid-column-align", "grid-column-sizing", "grid-column-span", "grid-columns", "grid-flow", "grid-row", "grid-row-align", "grid-row-sizing", "grid-row-span", "grid-rows", "grid-template", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-shadow", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"]),
        f = t(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"]),
        p = t(["above", "absolute", "activeborder", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "auto", "avoid", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break-all", "break-word", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ew-resize", "expanded", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "justify", "kannada", "katakana", "katakana-iroha", "khmer", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "navy", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "overlay", "overline", "padding", "padding-box", "painted", "paused", "persian", "plus-darker", "plus-lighter", "pointer", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radio", "read-only", "read-write", "read-write-plaintext-only", "relative", "repeat", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "single", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "white", "wider", "window", "windowframe", "windowtext", "x-large", "x-small", "xor", "xx-large", "xx-small", "yellow"]);
    return {
        startState: function (e) {
            return {
                tokenize: i,
                baseIndent: e || 0,
                stack: []
            }
        },
        token: function (e, t) {
            if (t.tokenize == i && e.eatSpace()) return null;
            var n = t.tokenize(e, t),
                r = t.stack[t.stack.length - 1];
            return "property" == n ? "propertyValue" == r ? n = p[e.current()] ? "string-2" : f[e.current()] ? "keyword" : "variable-2" : "rule" == r ? h[e.current()] || (n += " error") : r && "@media{" != r ? "@media" == r ? n = c[e.current()] ? "attribute" : /^(only|not)$/i.test(e.current()) ? "keyword" : "and" == e.current().toLowerCase() ? "error" : d[e.current()] ? "error" : "attribute error" : "@mediaType" == r ? n = c[e.current()] ? "attribute" : "and" == e.current().toLowerCase() ? "operator" : /^(only|not)$/i.test(e.current()) ? "error" : d[e.current()] ? "error" : "error" : "@mediaType(" == r ? h[e.current()] || (c[e.current()] ? n = "error" : "and" == e.current().toLowerCase() ? n = "operator" : /^(only|not)$/i.test(e.current()) ? n = "error" : n += " error") : n = "error" : n = "tag" : "atom" == n ? r && "@media{" != r ? "propertyValue" == r ? /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e.current()) || (n += " error") : n = "error" : n = "builtin" : "@media" == r && "{" == l && (n = "error"), "{" == l ? "@media" == r || "@mediaType" == r ? (t.stack.pop(), t.stack[t.stack.length - 1] = "@media{") : t.stack.push("rule") : "}" == l ? (t.stack.pop(), "propertyValue" == r && t.stack.pop()) : "@media" == l ? t.stack.push("@media") : "@media" == r && /\b(keyword|attribute)\b/.test(n) ? t.stack.push("@mediaType") : "@mediaType" == r && "," == e.current() ? t.stack.pop() : "@mediaType" == r && "(" == l ? t.stack.push("@mediaType(") : "@mediaType(" == r && ")" == l ? t.stack.pop() : "rule" == r && ":" == l ? t.stack.push("propertyValue") : "propertyValue" == r && ";" == l && t.stack.pop(), n
        },
        indent: function (e, t) {
            var n = e.stack.length;
            return /^\}/.test(t) && (n -= "propertyValue" == e.stack[e.stack.length - 1] ? 2 : 1), e.baseIndent + n * u
        },
        electricChars: "}"
    }
}), CodeMirror.defineMIME("text/css", "css"), CodeMirror.defineMode("htmlembedded", function (e, t) {
    function n(e, t) {
        return e.match(a, !1) ? (t.token = i, r.token(e, t.scriptState)) : o.token(e, t.htmlState)
    }
    function i(e, t) {
        return e.match(s, !1) ? (t.token = n, o.token(e, t.htmlState)) : r.token(e, t.scriptState)
    }
    var r, o, a = t.scriptStartRegex || /^<%/i,
        s = t.scriptEndRegex || /^%>/i;
    return {
        startState: function () {
            return r = r || CodeMirror.getMode(e, t.scriptingModeSpec), o = o || CodeMirror.getMode(e, "htmlmixed"), {
                token: t.startOpen ? i : n,
                htmlState: CodeMirror.startState(o),
                scriptState: CodeMirror.startState(r)
            }
        },
        token: function (e, t) {
            return t.token(e, t)
        },
        indent: function (e, t) {
            return e.token == n ? o.indent(e.htmlState, t) : r.indent ? r.indent(e.scriptState, t) : void 0
        },
        copyState: function (e) {
            return {
                token: e.token,
                htmlState: CodeMirror.copyState(o, e.htmlState),
                scriptState: CodeMirror.copyState(r, e.scriptState)
            }
        },
        electricChars: "/{}:",
        innerMode: function (e) {
            return e.token == i ? {
                state: e.scriptState,
                mode: r
            } : {
                state: e.htmlState,
                mode: o
            }
        }
    }
}, "htmlmixed"), CodeMirror.defineMIME("application/x-ejs", {
    name: "htmlembedded",
    scriptingModeSpec: "javascript"
}), CodeMirror.defineMIME("application/x-aspx", {
    name: "htmlembedded",
    scriptingModeSpec: "text/x-csharp"
}), CodeMirror.defineMIME("application/x-jsp", {
    name: "htmlembedded",
    scriptingModeSpec: "text/x-java"
}), CodeMirror.defineMIME("application/x-erb", {
    name: "htmlembedded",
    scriptingModeSpec: "ruby"
}), CodeMirror.defineMode("htmlmixed", function (e) {
    function t(e, t) {
        var n = o.token(e, t.htmlState);
        return /(?:^|\s)tag(?:\s|$)/.test(n) && ">" == e.current() && t.htmlState.context && (/^script$/i.test(t.htmlState.context.tagName) ? (t.token = i, t.localState = a.startState(o.indent(t.htmlState, ""))) : /^style$/i.test(t.htmlState.context.tagName) && (t.token = r, t.localState = s.startState(o.indent(t.htmlState, "")))), n
    }
    function n(e, t, n) {
        var i, r = e.current(),
            o = r.search(t);
        return o > -1 ? e.backUp(r.length - o) : (i = r.match(/<\/?$/)) && (e.backUp(r.length), e.match(t, !1) || e.match(r[0])), n
    }
    function i(e, i) {
        return e.match(/^<\/\s*script\s*>/i, !1) ? (i.token = t, i.localState = null, t(e, i)) : n(e, /<\/\s*script\s*>/, a.token(e, i.localState))
    }
    function r(e, i) {
        return e.match(/^<\/\s*style\s*>/i, !1) ? (i.token = t, i.localState = null, t(e, i)) : n(e, /<\/\s*style\s*>/, s.token(e, i.localState))
    }
    var o = CodeMirror.getMode(e, {
        name: "xml",
        htmlMode: !0
    }),
        a = CodeMirror.getMode(e, "javascript"),
        s = CodeMirror.getMode(e, "css");
    return {
        startState: function () {
            var e = o.startState();
            return {
                token: t,
                localState: null,
                mode: "html",
                htmlState: e
            }
        },
        copyState: function (e) {
            if (e.localState) var t = CodeMirror.copyState(e.token == r ? s : a, e.localState);
            return {
                token: e.token,
                localState: t,
                mode: e.mode,
                htmlState: CodeMirror.copyState(o, e.htmlState)
            }
        },
        token: function (e, t) {
            return t.token(e, t)
        },
        indent: function (e, n) {
            return e.token == t || /^\s*<\//.test(n) ? o.indent(e.htmlState, n) : e.token == i ? a.indent(e.localState, n) : s.indent(e.localState, n)
        },
        electricChars: "/{}:",
        innerMode: function (e) {
            var n = e.token == t ? o : e.token == i ? a : s;
            return {
                state: e.localState || e.htmlState,
                mode: n
            }
        }
    }
}, "xml", "javascript", "css"), CodeMirror.defineMIME("text/html", "htmlmixed"), CodeMirror.defineMode("javascript", function (e, t) {
    function n(e, t, n) {
        return t.tokenize = n, n(e, t)
    }
    function i(e, t) {
        for (var n, i = !1; null != (n = e.next());) {
            if (n == t && !i) return !1;
            i = !i && "\\" == n
        }
        return i
    }
    function r(e, t, n) {
        return D = e, z = n, t
    }
    function o(e, t) {
        var o = e.next();
        if ('"' == o || "'" == o) return n(e, t, a(o));
        if (/[\[\]{}\(\),;\:\.]/.test(o)) return r(o);
        if ("0" == o && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i), r("number", "number");
        if (/\d/.test(o) || "-" == o && e.eat(/\d/)) return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), r("number", "number");
        if ("/" == o) return e.eat("*") ? n(e, t, s) : e.eat("/") ? (e.skipToEnd(), r("comment", "comment")) : "operator" == t.lastType || "keyword c" == t.lastType || /^[\[{}\(,;:]$/.test(t.lastType) ? (i(e, "/"), e.eatWhile(/[gimy]/), r("regexp", "string-2")) : (e.eatWhile(R), r("operator", null, e.current()));
        if ("#" == o) return e.skipToEnd(), r("error", "error");
        if (R.test(o)) return e.eatWhile(R), r("operator", null, e.current());
        e.eatWhile(/[\w\$_]/);
        var l = e.current(),
            u = B.propertyIsEnumerable(l) && B[l];
        return u && "." != t.lastType ? r(u.type, u.style, l) : r("variable", "variable", l)
    }
    function a(e) {
        return function (t, n) {
            return i(t, e) || (n.tokenize = o), r("string", "string")
        }
    }
    function s(e, t) {
        for (var n, i = !1; n = e.next();) {
            if ("/" == n && i) {
                t.tokenize = o;
                break
            }
            i = "*" == n
        }
        return r("comment", "comment")
    }
    function l(e, t, n, i, r, o) {
        this.indented = e, this.column = t, this.type = n, this.prev = r, this.info = o, null != i && (this.align = i)
    }
    function u(e, t) {
        for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0
    }
    function c(e, t, n, i, r) {
        var o = e.cc;
        for (U.state = e, U.stream = r, U.marked = null, U.cc = o, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;) {
            var a = o.length ? o.pop() : H ? w : y;
            if (a(n, i)) {
                for (; o.length && o[o.length - 1].lex;) o.pop()();
                return U.marked ? U.marked : "variable" == n && u(e, i) ? "variable-2" : t
            }
        }
    }
    function d() {
        for (var e = arguments.length - 1; e >= 0; e--) U.cc.push(arguments[e])
    }
    function h() {
        return d.apply(null, arguments), !0
    }
    function f(e) {
        function t(t) {
            for (var n = t; n; n = n.next) if (n.name == e) return !0;
            return !1
        }
        var n = U.state;
        if (n.context) {
            if (U.marked = "def", t(n.localVars)) return;
            n.localVars = {
                name: e,
                next: n.localVars
            }
        } else {
            if (t(n.globalVars)) return;
            n.globalVars = {
                name: e,
                next: n.globalVars
            }
        }
    }
    function p() {
        U.state.context = {
            prev: U.state.context,
            vars: U.state.localVars
        }, U.state.localVars = G
    }
    function m() {
        U.state.localVars = U.state.context.vars, U.state.context = U.state.context.prev
    }
    function g(e, t) {
        var n = function () {
            var n = U.state;
            n.lexical = new l(n.indented, U.stream.column(), e, null, n.lexical, t)
        };
        return n.lex = !0, n
    }
    function v() {
        var e = U.state;
        e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
    }
    function b(e) {
        return function (t) {
            return t == e ? h() : ";" == e ? d() : h(arguments.callee)
        }
    }
    function y(e) {
        return "var" == e ? h(g("vardef"), L, b(";"), v) : "keyword a" == e ? h(g("form"), w, y, v) : "keyword b" == e ? h(g("form"), y, v) : "{" == e ? h(g("}"), M, v) : ";" == e ? h() : "function" == e ? h($) : "for" == e ? h(g("form"), b("("), g(")"), F, b(")"), v, y, v) : "variable" == e ? h(g("stat"), C) : "switch" == e ? h(g("form"), w, g("}", "switch"), b("{"), M, v, v) : "case" == e ? h(w, b(":")) : "default" == e ? h(b(":")) : "catch" == e ? h(g("form"), p, b("("), O, b(")"), y, v, m) : d(g("stat"), w, b(";"), v)
    }
    function w(e) {
        return V.hasOwnProperty(e) ? h(x) : "function" == e ? h($) : "keyword c" == e ? h(k) : "(" == e ? h(g(")"), k, b(")"), v, x) : "operator" == e ? h(w) : "[" == e ? h(g("]"), S(w, "]"), v, x) : "{" == e ? h(g("}"), S(T, "}"), v, x) : h()
    }
    function k(e) {
        return e.match(/[;\}\)\],]/) ? d() : d(w)
    }
    function x(e, t) {
        if ("operator" == e && /\+\+|--/.test(t)) return h(x);
        if ("operator" == e && "?" == t) return h(w, b(":"), w);
        if (";" != e) return "(" == e ? h(g(")"), S(w, ")"), v, x) : "." == e ? h(_, x) : "[" == e ? h(g("]"), w, b("]"), v, x) : void 0
    }
    function C(e) {
        return ":" == e ? h(v, y) : d(x, b(";"), v)
    }
    function _(e) {
        return "variable" == e ? (U.marked = "property", h()) : void 0
    }
    function T(e) {
        return "variable" == e && (U.marked = "property"), V.hasOwnProperty(e) ? h(b(":"), w) : void 0
    }
    function S(e, t) {
        function n(i) {
            return "," == i ? h(e, n) : i == t ? h() : h(b(t))
        }
        return function (i) {
            return i == t ? h() : d(e, n)
        }
    }
    function M(e) {
        return "}" == e ? h() : d(y, M)
    }
    function E(e) {
        return ":" == e ? h(j) : d()
    }
    function j(e) {
        return "variable" == e ? (U.marked = "variable-3", h()) : d()
    }
    function L(e, t) {
        return "variable" == e ? (f(t), q ? h(E, A) : h(A)) : d()
    }
    function A(e, t) {
        return "=" == t ? h(w, A) : "," == e ? h(L) : void 0
    }
    function F(e) {
        return "var" == e ? h(L, b(";"), P) : ";" == e ? h(P) : "variable" == e ? h(N) : h(P)
    }
    function N(e, t) {
        return "in" == t ? h(w) : h(x, P)
    }
    function P(e, t) {
        return ";" == e ? h(I) : "in" == t ? h(w) : h(w, b(";"), I)
    }
    function I(e) {
        ")" != e && h(w)
    }
    function $(e, t) {
        return "variable" == e ? (f(t), h($)) : "(" == e ? h(g(")"), p, S(O, ")"), v, y, m) : void 0
    }
    function O(e, t) {
        return "variable" == e ? (f(t), q ? h(E) : h()) : void 0
    }
    var D, z, W = e.indentUnit,
        H = t.json,
        q = t.typescript,
        B = function () {
            function e(e) {
                return {
                    type: e,
                    style: "keyword"
                }
            }
            var t = e("keyword a"),
                n = e("keyword b"),
                i = e("keyword c"),
                r = e("operator"),
                o = {
                    type: "atom",
                    style: "atom"
                }, a = {
                    "if": t,
                    "while": t,
                    "with": t,
                    "else": n,
                    "do": n,
                    "try": n,
                    "finally": n,
                    "return": i,
                    "break": i,
                    "continue": i,
                    "new": i,
                    "delete": i,
                    "throw": i,
                    "var": e("var"),
                    "const": e("var"),
                    let: e("var"),
                    "function": e("function"),
                    "catch": e("catch"),
                    "for": e("for"),
                    "switch": e("switch"),
                    "case": e("case"),
                    "default": e("default"),
                    "in": r,
                    "typeof": r,
                    "instanceof": r,
                    "true": o,
                    "false": o,
                    "null": o,
                    undefined: o,
                    NaN: o,
                    Infinity: o
                };
            if (q) {
                var s = {
                    type: "variable",
                    style: "variable-3"
                }, l = {
                        "interface": e("interface"),
                        "class": e("class"),
                        "extends": e("extends"),
                        constructor: e("constructor"),
                        "public": e("public"),
                        "private": e("private"),
                        "protected": e("protected"),
                        "static": e("static"),
                        "super": e("super"),
                        string: s,
                        number: s,
                        bool: s,
                        any: s
                    };
                for (var u in l) a[u] = l[u]
            }
            return a
        }(),
        R = /[+\-*&%=<>!?|]/,
        V = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0
        }, U = {
            state: null,
            column: null,
            marked: null,
            cc: null
        }, G = {
            name: "this",
            next: {
                name: "arguments"
            }
        };
    return v.lex = !0, {
        startState: function (e) {
            return {
                tokenize: o,
                lastType: null,
                cc: [],
                lexical: new l((e || 0) - W, 0, "block", !1),
                localVars: t.localVars,
                globalVars: t.globalVars,
                context: t.localVars && {
                    vars: t.localVars
                },
                indented: 0
            }
        },
        token: function (e, t) {
            if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation()), e.eatSpace()) return null;
            var n = t.tokenize(e, t);
            return "comment" == D ? n : (t.lastType = D, c(t, n, D, z, e))
        },
        indent: function (e, t) {
            if (e.tokenize == s) return CodeMirror.Pass;
            if (e.tokenize != o) return 0;
            var n = t && t.charAt(0),
                i = e.lexical;
            "stat" == i.type && "}" == n && (i = i.prev);
            var r = i.type,
                a = n == r;
            return "vardef" == r ? i.indented + ("operator" == e.lastType || "," == e.lastType ? 4 : 0) : "form" == r && "{" == n ? i.indented : "form" == r ? i.indented + W : "stat" == r ? i.indented + ("operator" == e.lastType || "," == e.lastType ? W : 0) : "switch" != i.info || a ? i.align ? i.column + (a ? 0 : 1) : i.indented + (a ? 0 : W) : i.indented + (/^(?:case|default)\b/.test(t) ? W : 2 * W)
        },
        electricChars: ":{}",
        jsonMode: H
    }
}), CodeMirror.defineMIME("text/javascript", "javascript"), CodeMirror.defineMIME("text/ecmascript", "javascript"), CodeMirror.defineMIME("application/javascript", "javascript"), CodeMirror.defineMIME("application/ecmascript", "javascript"), CodeMirror.defineMIME("application/json", {
    name: "javascript",
    json: !0
}), CodeMirror.defineMIME("text/typescript", {
    name: "javascript",
    typescript: !0
}), CodeMirror.defineMIME("application/typescript", {
    name: "javascript",
    typescript: !0
}),
function () {
    function e(e) {
        for (var t = {}, n = e.split(" "), i = 0; n.length > i; ++i) t[n[i]] = !0;
        return t
    }
    function t(e) {
        return function (t, n) {
            return t.match(e) ? n.tokenize = null : t.skipToEnd(), "string"
        }
    }
    var n = {
        name: "clike",
        keywords: e("abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent"),
        blockKeywords: e("catch do else elseif for foreach if switch try while"),
        atoms: e("true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__"),
        builtin: e("func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport echo print global static exit array empty eval isset unset die include require include_once require_once"),
        multiLineStrings: !0,
        hooks: {
            $: function (e) {
                return e.eatWhile(/[\w\$_]/), "variable-2"
            },
            "<": function (e, n) {
                return e.match(/<</) ? (e.eatWhile(/[\w\.]/), n.tokenize = t(e.current().slice(3)), n.tokenize(e, n)) : !1
            },
            "#": function (e) {
                for (; !e.eol() && !e.match("?>", !1);) e.next();
                return "comment"
            },
            "/": function (e) {
                if (e.eat("/")) {
                    for (; !e.eol() && !e.match("?>", !1);) e.next();
                    return "comment"
                }
                return !1
            }
        }
    };
    CodeMirror.defineMode("php", function (e, t) {
        function i(e, t) {
            var n = t.curMode == o;
            if (e.sol() && '"' != t.pending && (t.pending = null), n) return n && null == t.php.tokenize && e.match("?>") ? (t.curMode = r, t.curState = t.html, "meta") : o.token(e, t.curState);
            if (e.match(/^<\?\w*/)) return t.curMode = o, t.curState = t.php, "meta";
            if ('"' == t.pending) {
                for (; !e.eol() && '"' != e.next(););
                var i = "string"
            } else if (t.pending && e.pos < t.pending.end) {
                e.pos = t.pending.end;
                var i = t.pending.style
            } else var i = r.token(e, t.curState);
            t.pending = null;
            var a = e.current(),
                s = a.search(/<\?/);
            return -1 != s && (t.pending = "string" == i && /\"$/.test(a) && !/\?>/.test(a) ? '"' : {
                end: e.pos,
                style: i
            }, e.backUp(a.length - s)), i
        }
        var r = CodeMirror.getMode(e, "text/html"),
            o = CodeMirror.getMode(e, n);
        return {
            startState: function () {
                var e = CodeMirror.startState(r),
                    n = CodeMirror.startState(o);
                return {
                    html: e,
                    php: n,
                    curMode: t.startOpen ? o : r,
                    curState: t.startOpen ? n : e,
                    pending: null
                }
            },
            copyState: function (e) {
                var t, n = e.html,
                    i = CodeMirror.copyState(r, n),
                    a = e.php,
                    s = CodeMirror.copyState(o, a);
                return t = e.curMode == r ? i : s, {
                    html: i,
                    php: s,
                    curMode: e.curMode,
                    curState: t,
                    pending: e.pending
                }
            },
            token: i,
            indent: function (e, t) {
                return e.curMode != o && /^\s*<\//.test(t) || e.curMode == o && /^\?>/.test(t) ? r.indent(e.html, t) : e.curMode.indent(e.curState, t)
            },
            electricChars: "/{}:",
            innerMode: function (e) {
                return {
                    state: e.curState,
                    mode: e.curMode
                }
            }
        }
    }, "htmlmixed"), CodeMirror.defineMIME("application/x-httpd-php", "php"), CodeMirror.defineMIME("application/x-httpd-php-open", {
        name: "php",
        startOpen: !0
    }), CodeMirror.defineMIME("text/x-php", n)
}(), CodeMirror.defineMode("ruby", function (e) {
    function t(e) {
        for (var t = {}, n = 0, i = e.length; i > n; ++n) t[e[n]] = !0;
        return t
    }
    function n(e, t, n) {
        return n.tokenize.push(e), e(t, n)
    }
    function i(e, t) {
        if (l = null, e.sol() && e.match("=begin") && e.eol()) return t.tokenize.push(s), "comment";
        if (e.eatSpace()) return null;
        var i, r = e.next();
        if ("`" == r || "'" == r || '"' == r || "/" == r && !e.eol() && " " != e.peek()) return n(o(r, "string", '"' == r || "`" == r), e, t);
        if ("%" == r) {
            var u, c = !1;
            e.eat("s") ? u = "atom" : e.eat(/[WQ]/) ? (u = "string", c = !0) : e.eat(/[wxqr]/) && (u = "string");
            var d = e.eat(/[^\w\s]/);
            return d ? (h.propertyIsEnumerable(d) && (d = h[d]), n(o(d, u, c, !0), e, t)) : "operator"
        }
        if ("#" == r) return e.skipToEnd(), "comment";
        if ("<" == r && (i = e.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) return n(a(i[1]), e, t);
        if ("0" == r) return e.eat("x") ? e.eatWhile(/[\da-fA-F]/) : e.eat("b") ? e.eatWhile(/[01]/) : e.eatWhile(/[0-7]/), "number";
        if (/\d/.test(r)) return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), "number";
        if ("?" == r) {
            for (; e.match(/^\\[CM]-/););
            return e.eat("\\") ? e.eatWhile(/\w/) : e.next(), "string"
        }
        return ":" == r ? e.eat("'") ? n(o("'", "atom", !1), e, t) : e.eat('"') ? n(o('"', "atom", !0), e, t) : (e.eatWhile(/[\w\?]/), "atom") : "@" == r ? (e.eat("@"), e.eatWhile(/[\w\?]/), "variable-2") : "$" == r ? (e.next(), e.eatWhile(/[\w\?]/), "variable-3") : /\w/.test(r) ? (e.eatWhile(/[\w\?]/), e.eat(":") ? "atom" : "ident") : "|" != r || !t.varList && "{" != t.lastTok && "do" != t.lastTok ? /[\(\)\[\]{}\\;]/.test(r) ? (l = r, null) : "-" == r && e.eat(">") ? "arrow" : /[=+\-\/*:\.^%<>~|]/.test(r) ? (e.eatWhile(/[=+\-\/*:\.^%<>~|]/), "operator") : null : (l = "|", null)
    }
    function r() {
        var e = 1;
        return function (t, n) {
            if ("}" == t.peek()) {
                if (e--, 0 == e) return n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](t, n)
            } else "{" == t.peek() && e++;
            return i(t, n)
        }
    }
    function o(e, t, n, i) {
        return function (o, a) {
            for (var s, l = !1; null != (s = o.next());) {
                if (s == e && (i || !l)) {
                    a.tokenize.pop();
                    break
                }
                if (n && "#" == s && !l && o.eat("{")) {
                    a.tokenize.push(r(arguments.callee));
                    break
                }
                l = !l && "\\" == s
            }
            return t
        }
    }
    function a(e) {
        return function (t, n) {
            return t.match(e) ? n.tokenize.pop() : t.skipToEnd(), "string"
        }
    }
    function s(e, t) {
        return e.sol() && e.match("=end") && e.eol() && t.tokenize.pop(), e.skipToEnd(), "comment"
    }
    var l, u = t(["alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload"]),
        c = t(["def", "class", "case", "for", "while", "do", "module", "then", "catch", "loop", "proc", "begin"]),
        d = t(["end", "until"]),
        h = {
            "[": "]",
            "{": "}",
            "(": ")"
        };
    return {
        startState: function () {
            return {
                tokenize: [i],
                indented: 0,
                context: {
                    type: "top",
                    indented: -e.indentUnit
                },
                continuedLine: !1,
                lastTok: null,
                varList: !1
            }
        },
        token: function (e, t) {
            e.sol() && (t.indented = e.indentation());
            var n, i = t.tokenize[t.tokenize.length - 1](e, t);
            if ("ident" == i) {
                var r = e.current();
                i = u.propertyIsEnumerable(e.current()) ? "keyword" : /^[A-Z]/.test(r) ? "tag" : "def" == t.lastTok || "class" == t.lastTok || t.varList ? "def" : "variable", c.propertyIsEnumerable(r) ? n = "indent" : d.propertyIsEnumerable(r) ? n = "dedent" : "if" != r && "unless" != r || e.column() != e.indentation() || (n = "indent")
            }
            return (l || i && "comment" != i) && (t.lastTok = r || l || i), "|" == l && (t.varList = !t.varList), "indent" == n || /[\(\[\{]/.test(l) ? t.context = {
                prev: t.context,
                type: l || i,
                indented: t.indented
            } : ("dedent" == n || /[\)\]\}]/.test(l)) && t.context.prev && (t.context = t.context.prev), e.eol() && (t.continuedLine = "\\" == l || "operator" == i), i
        },
        indent: function (t, n) {
            if (t.tokenize[t.tokenize.length - 1] != i) return 0;
            var r = n && n.charAt(0),
                o = t.context,
                a = o.type == h[r] || "keyword" == o.type && /^(?:end|until|else|elsif|when|rescue)\b/.test(n);
            return o.indented + (a ? 0 : e.indentUnit) + (t.continuedLine ? e.indentUnit : 0)
        },
        electricChars: "}de"
    }
}), CodeMirror.defineMIME("text/x-ruby", "ruby"), CodeMirror.defineMode("xml", function (e, t) {
    function n(e, t) {
        function n(n) {
            return t.tokenize = n, n(e, t)
        }
        var r = e.next();
        if ("<" == r) {
            if (e.eat("!")) return e.eat("[") ? e.match("CDATA[") ? n(o("atom", "]]>")) : null : e.match("--") ? n(o("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(a(1))) : null;
            if (e.eat("?")) return e.eatWhile(/[\w\._\-]/), t.tokenize = o("meta", "?>"), "meta";
            var s = e.eat("/");
            y = "";
            for (var l; l = e.eat(/[^\s\u00a0=<>\"\'\/?]/);) y += l;
            return y ? (w = s ? "closeTag" : "openTag", t.tokenize = i, "tag") : "error"
        }
        if ("&" == r) {
            var u;
            return u = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), u ? "atom" : "error"
        }
        return e.eatWhile(/[^&<]/), null
    }
    function i(e, t) {
        var i = e.next();
        return ">" == i || "/" == i && e.eat(">") ? (t.tokenize = n, w = ">" == i ? "endTag" : "selfcloseTag", "tag") : "=" == i ? (w = "equals", null) : /[\'\"]/.test(i) ? (t.tokenize = r(i), t.tokenize(e, t)) : (e.eatWhile(/[^\s\u00a0=<>\"\']/), "word")
    }
    function r(e) {
        return function (t, n) {
            for (; !t.eol();) if (t.next() == e) {
                    n.tokenize = i;
                    break
                }
            return "string"
        }
    }
    function o(e, t) {
        return function (i, r) {
            for (; !i.eol();) {
                if (i.match(t)) {
                    r.tokenize = n;
                    break
                }
                i.next()
            }
            return e
        }
    }
    function a(e) {
        return function (t, i) {
            for (var r; null != (r = t.next());) {
                if ("<" == r) return i.tokenize = a(e + 1), i.tokenize(t, i);
                if (">" == r) {
                    if (1 == e) {
                        i.tokenize = n;
                        break
                    }
                    return i.tokenize = a(e - 1), i.tokenize(t, i)
                }
            }
            return "meta"
        }
    }
    function s() {
        for (var e = arguments.length - 1; e >= 0; e--) k.cc.push(arguments[e])
    }
    function l() {
        return s.apply(null, arguments), !0
    }
    function u(e, t) {
        var n = _.doNotIndent.hasOwnProperty(e) || k.context && k.context.noIndent;
        k.context = {
            prev: k.context,
            tagName: e,
            indent: k.indented,
            startOfLine: t,
            noIndent: n
        }
    }
    function c() {
        k.context && (k.context = k.context.prev)
    }
    function d(e) {
        if ("openTag" == e) return k.tagName = y, l(m, h(k.startOfLine));
        if ("closeTag" == e) {
            var t = !1;
            return k.context ? k.context.tagName != y && (_.implicitlyClosed.hasOwnProperty(k.context.tagName.toLowerCase()) && c(), t = !k.context || k.context.tagName != y) : t = !0, t && (x = "error"), l(f(t))
        }
        return l()
    }
    function h(e) {
        return function (t) {
            var n = k.tagName;
            return k.tagName = null, "selfcloseTag" == t || "endTag" == t && _.autoSelfClosers.hasOwnProperty(n.toLowerCase()) ? (p(n.toLowerCase()), l()) : "endTag" == t ? (p(n.toLowerCase()), u(n, e), l()) : l()
        }
    }
    function f(e) {
        return function (t) {
            return e && (x = "error"), "endTag" == t ? (c(), l()) : (x = "error", l(arguments.callee))
        }
    }
    function p(e) {
        for (var t;;) {
            if (!k.context) return;
            if (t = k.context.tagName.toLowerCase(), !_.contextGrabbers.hasOwnProperty(t) || !_.contextGrabbers[t].hasOwnProperty(e)) return;
            c()
        }
    }
    function m(e) {
        return "word" == e ? (x = "attribute", l(g, m)) : "endTag" == e || "selfcloseTag" == e ? s() : (x = "error", l(m))
    }
    function g(e) {
        return "equals" == e ? l(v, m) : (_.allowMissing ? "word" == e && (x = "attribute") : x = "error", "endTag" == e || "selfcloseTag" == e ? s() : l())
    }
    function v(e) {
        return "string" == e ? l(b) : "word" == e && _.allowUnquoted ? (x = "string", l()) : (x = "error", "endTag" == e || "selfCloseTag" == e ? s() : l())
    }
    function b(e) {
        return "string" == e ? l(b) : s()
    }
    var y, w, k, x, C = e.indentUnit,
        _ = t.htmlMode ? {
            autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            },
            implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0
            },
            contextGrabbers: {
                dd: {
                    dd: !0,
                    dt: !0
                },
                dt: {
                    dd: !0,
                    dt: !0
                },
                li: {
                    li: !0
                },
                option: {
                    option: !0,
                    optgroup: !0
                },
                optgroup: {
                    optgroup: !0
                },
                p: {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    dir: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    menu: !0,
                    nav: !0,
                    ol: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    ul: !0
                },
                rp: {
                    rp: !0,
                    rt: !0
                },
                rt: {
                    rp: !0,
                    rt: !0
                },
                tbody: {
                    tbody: !0,
                    tfoot: !0
                },
                td: {
                    td: !0,
                    th: !0
                },
                tfoot: {
                    tbody: !0
                },
                th: {
                    td: !0,
                    th: !0
                },
                thead: {
                    tbody: !0,
                    tfoot: !0
                },
                tr: {
                    tr: !0
                }
            },
            doNotIndent: {
                pre: !0
            },
            allowUnquoted: !0,
            allowMissing: !0
        } : {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1
        }, T = t.alignCDATA;
    return {
        startState: function () {
            return {
                tokenize: n,
                cc: [],
                indented: 0,
                startOfLine: !0,
                tagName: null,
                context: null
            }
        },
        token: function (e, t) {
            if (e.sol() && (t.startOfLine = !0, t.indented = e.indentation()), e.eatSpace()) return null;
            x = w = y = null;
            var n = t.tokenize(e, t);
            if (t.type = w, (n || w) && "comment" != n) for (k = t;;) {
                    var i = t.cc.pop() || d;
                    if (i(w || n)) break
            }
            return t.startOfLine = !1, x || n
        },
        indent: function (e, t, r) {
            var o = e.context;
            if (e.tokenize != i && e.tokenize != n || o && o.noIndent) return r ? r.match(/^(\s*)/)[0].length : 0;
            if (T && /<!\[CDATA\[/.test(t)) return 0;
            for (o && /^<\//.test(t) && (o = o.prev); o && !o.startOfLine;) o = o.prev;
            return o ? o.indent + C : 0
        },
        electricChars: "/",
        configuration: t.htmlMode ? "html" : "xml"
    }
}), CodeMirror.defineMIME("text/xml", "xml"), CodeMirror.defineMIME("application/xml", "xml"), CodeMirror.mimeModes.hasOwnProperty("text/html") || CodeMirror.defineMIME("text/html", {
    name: "xml",
    htmlMode: !0
});
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
var Hogan = {};
(function (e, t) {
    function n(e, t, n) {
        function i() {}
        function r() {}
        i.prototype = e, r.prototype = e.subs;
        var o, a = new i;
        a.subs = new r, a.ib();
        for (o in t) a.subs[o] = t[o];
        for (o in n) a.partials[o] = n[o];
        return a
    }
    function i(e) {
        return String(null === e || void 0 === e ? "" : e)
    }
    function r(e) {
        return e = i(e), c.test(e) ? e.replace(o, "&amp;").replace(a, "&lt;").replace(s, "&gt;").replace(l, "&#39;").replace(u, "&quot;") : e
    }
    e.Template = function (e, t, n, i) {
        e = e || {}, this.r = e.code || this.r, this.c = n, this.options = i, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.ib()
    }, e.Template.prototype = {
        r: function () {
            return ""
        },
        v: r,
        t: i,
        render: function (e, t, n) {
            return this.ri([e], t || {}, n)
        },
        ri: function (e, t, n) {
            return this.r(e, t, n)
        },
        ep: function (e, t) {
            var i = this.partials[e],
                r = t[i.name];
            if (i.instance && i.base == r) return i.instance;
            if ("string" == typeof r) {
                if (!this.c) throw new Error("No compiler available.");
                r = this.c.compile(r, this.options)
            }
            return r ? (this.partials[e].base = r, i.subs && (r = n(r, i.subs, i.partials)), this.partials[e].instance = r, r) : null
        },
        rp: function (e, t, n, i) {
            var r = this.ep(e, n);
            return r ? r.ri(t, n, i) : ""
        },
        rs: function (e, t, n) {
            var i = e[e.length - 1];
            if (!d(i)) return n(e, t, this), void 0;
            for (var r = 0; i.length > r; r++) e.push(i[r]), n(e, t, this), e.pop()
        },
        s: function (e, t, n, i, r, o, a) {
            var s;
            return d(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ms(e, t, n, i, r, o, a)), s = "" === e || !! e, !i && s && t && t.push("object" == typeof e ? e : t[t.length - 1]), s)
        },
        d: function (e, t, n, i) {
            var r = e.split("."),
                o = this.f(r[0], t, n, i),
                a = null;
            if ("." === e && d(t[t.length - 2])) return t[t.length - 1];
            for (var s = 1; r.length > s; s++) o && "object" == typeof o && null != o[r[s]] ? (a = o, o = o[r[s]]) : o = "";
            return i && !o ? !1 : (i || "function" != typeof o || (t.push(a), o = this.mv(o, t, n), t.pop()), o)
        },
        f: function (e, t, n, i) {
            for (var r = !1, o = null, a = !1, s = t.length - 1; s >= 0; s--) if (o = t[s], o && "object" == typeof o && null != o[e]) {
                    r = o[e], a = !0;
                    break
                }
            return a ? (i || "function" != typeof r || (r = this.mv(r, t, n)), r) : i ? !1 : ""
        },
        ls: function (e, t, n, r, o) {
            var a = this.options.delimiters;
            return this.options.delimiters = o, this.b(this.ct(i(e.call(t, r)), t, n)), this.options.delimiters = a, !1
        },
        ct: function (e, t, n) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(e, this.options).render(t, n)
        },
        b: t ? function (e) {
            this.buf.push(e)
        } : function (e) {
            this.buf += e
        },
        fl: t ? function () {
            var e = this.buf.join("");
            return this.buf = [], e
        } : function () {
            var e = this.buf;
            return this.buf = "", e
        },
        ib: function () {
            this.buf = t ? [] : ""
        },
        ms: function (e, t, n, i, r, o, a) {
            var s = t[t.length - 1],
                l = e.call(s);
            return "function" == typeof l ? i ? !0 : this.ls(l, s, n, this.text.substring(r, o), a) : l
        },
        mv: function (e, t, n) {
            var r = t[t.length - 1],
                o = e.call(r);
            return "function" == typeof o ? this.ct(i(o.call(r)), r, n) : o
        },
        sub: function (e, t, n, i) {
            var r = this.subs[e];
            r && r(t, n, this, i)
        }
    };
    var o = /&/g,
        a = /</g,
        s = />/g,
        l = /\'/g,
        u = /\"/g,
        c = /[&<>\"\']/,
        d = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
})("undefined" != typeof exports ? exports : Hogan),
function (e) {
    function t(e) {
        "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
    }
    function n(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }
    function i(e, t, n) {
        if (t.charAt(n) != e.charAt(0)) return !1;
        for (var i = 1, r = e.length; r > i; i++) if (t.charAt(n + i) != e.charAt(i)) return !1;
        return !0
    }
    function r(t, n, i, s) {
        var l = [],
            u = null,
            c = null,
            d = null;
        for (c = i[i.length - 1]; t.length > 0;) {
            if (d = t.shift(), c && "<" == c.tag && !(d.tag in y)) throw new Error("Illegal content in < super tag.");
            if (e.tags[d.tag] <= e.tags.$ || o(d, s)) i.push(d), d.nodes = r(t, d.tag, i, s);
            else {
                if ("/" == d.tag) {
                    if (0 === i.length) throw new Error("Closing tag without opener: /" + d.n);
                    if (u = i.pop(), d.n != u.n && !a(d.n, u.n, s)) throw new Error("Nesting error: " + u.n + " vs. " + d.n);
                    return u.end = d.i, l
                }
                "\n" == d.tag && (d.last = 0 == t.length || "\n" == t[0].tag)
            }
            l.push(d)
        }
        if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
        return l
    }
    function o(e, t) {
        for (var n = 0, i = t.length; i > n; n++) if (t[n].o == e.n) return e.tag = "#", !0
    }
    function a(e, t, n) {
        for (var i = 0, r = n.length; r > i; i++) if (n[i].c == e && n[i].o == t) return !0
    }
    function s(e) {
        var t = [];
        for (var n in e) t.push('"' + u(n) + '": function(c,p,t,i) {' + e[n] + "}");
        return "{ " + t.join(",") + " }"
    }
    function l(e) {
        var t = [];
        for (var n in e.partials) t.push('"' + u(n) + '":{name:"' + u(e.partials[n].name) + '", ' + l(e.partials[n]) + "}");
        return "partials: {" + t.join(",") + "}, subs: " + s(e.subs)
    }
    function u(e) {
        return e.replace(b, "\\\\").replace(m, '\\"').replace(g, "\\n").replace(v, "\\r")
    }
    function c(e) {
        return~ e.indexOf(".") ? "d" : "f"
    }
    function d(e, t) {
        var n = "<" + (t.prefix || ""),
            i = n + e.n + w++;
        return t.partials[i] = {
            name: e.n,
            partials: {}
        }, t.code += 't.b(t.rp("' + u(i) + '",c,p,"' + (e.indent || "") + '"));', i
    }
    function h(e, t) {
        t.code += "t.b(t.t(t." + c(e.n) + '("' + u(e.n) + '",c,p,0)));'
    }
    function f(e) {
        return "t.b(" + e + ");"
    }
    var p = /\S/,
        m = /\"/g,
        g = /\n/g,
        v = /\r/g,
        b = /\\/g;
    e.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
    }, e.scan = function (r, o) {
        function a() {
            b.length > 0 && (y.push({
                tag: "_t",
                text: new String(b)
            }), b = "")
        }
        function s() {
            for (var t = !0, n = x; y.length > n; n++) if (t = e.tags[y[n].tag] < e.tags._v || "_t" == y[n].tag && null === y[n].text.match(p), !t) return !1;
            return t
        }
        function l(e, t) {
            if (a(), e && s()) for (var n, i = x; y.length > i; i++) y[i].text && ((n = y[i + 1]) && ">" == n.tag && (n.indent = y[i].text.toString()), y.splice(i, 1));
            else t || y.push({
                    tag: "\n"
                });
            w = !1, x = y.length
        }
        function u(e, t) {
            var i = "=" + _,
                r = e.indexOf(i, t),
                o = n(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
            return C = o[0], _ = o[1], r + i.length - 1
        }
        var c = r.length,
            d = 0,
            h = 1,
            f = 2,
            m = d,
            g = null,
            v = null,
            b = "",
            y = [],
            w = !1,
            k = 0,
            x = 0,
            C = "{{",
            _ = "}}";
        for (o && (o = o.split(" "), C = o[0], _ = o[1]), k = 0; c > k; k++) m == d ? i(C, r, k) ? (--k, a(), m = h) : "\n" == r.charAt(k) ? l(w) : b += r.charAt(k) : m == h ? (k += C.length - 1, v = e.tags[r.charAt(k + 1)], g = v ? r.charAt(k + 1) : "_v", "=" == g ? (k = u(r, k), m = d) : (v && k++, m = f), w = k) : i(_, r, k) ? (y.push({
                tag: g,
                n: n(b),
                otag: C,
                ctag: _,
                i: "/" == g ? w - C.length : k + _.length
            }), b = "", k += _.length - 1, m = d, "{" == g && ("}}" == _ ? k++ : t(y[y.length - 1]))) : b += r.charAt(k);
        return l(w, !0), y
    };
    var y = {
        _t: !0,
        "\n": !0,
        $: !0,
        "/": !0
    };
    e.stringify = function (t) {
        return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + l(t) + "}"
    };
    var w = 0;
    e.generate = function (t, n, i) {
        w = 0;
        var r = {
            code: "",
            subs: {},
            partials: {}
        };
        return e.walk(t, r), i.asString ? this.stringify(r, n, i) : this.makeTemplate(r, n, i)
    }, e.wrapMain = function (e) {
        return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
    }, e.template = e.Template, e.makeTemplate = function (e, t, n) {
        var i = this.makePartials(e);
        return i.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(i, t, this, n)
    }, e.makePartials = function (e) {
        var t, n = {
                subs: {},
                partials: e.partials,
                name: e.name
            };
        for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t]);
        for (t in e.subs) n.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
        return n
    }, e.codegen = {
        "#": function (t, n) {
            n.code += "if(t.s(t." + c(t.n) + '("' + u(t.n) + '",c,p,1),' + "c,p,0," + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){' + "t.rs(c,p," + "function(c,p,t){", e.walk(t.nodes, n), n.code += "});c.pop();}"
        },
        "^": function (t, n) {
            n.code += "if(!t.s(t." + c(t.n) + '("' + u(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, n), n.code += "};"
        },
        ">": d,
        "<": function (t, n) {
            var i = {
                partials: {},
                code: "",
                subs: {},
                inPartial: !0
            };
            e.walk(t.nodes, i);
            var r = n.partials[d(t, n)];
            r.subs = i.subs, r.partials = i.partials
        },
        $: function (t, n) {
            var i = {
                subs: {},
                code: "",
                partials: n.partials,
                prefix: t.n
            };
            e.walk(t.nodes, i), n.subs[t.n] = i.code, n.inPartial || (n.code += 't.sub("' + u(t.n) + '",c,p,i);')
        },
        "\n": function (e, t) {
            t.code += f('"\\n"' + (e.last ? "" : " + i"))
        },
        _v: function (e, t) {
            t.code += "t.b(t.v(t." + c(e.n) + '("' + u(e.n) + '",c,p,0)));'
        },
        _t: function (e, t) {
            t.code += f('"' + u(e.text) + '"')
        },
        "{": h,
        "&": h
    }, e.walk = function (t, n) {
        for (var i, r = 0, o = t.length; o > r; r++) i = e.codegen[t[r].tag], i && i(t[r], n);
        return n
    }, e.parse = function (e, t, n) {
        return n = n || {}, r(e, "", [], n.sectionTags || [])
    }, e.cache = {}, e.cacheKey = function (e, t) {
        return [e, !! t.asString, !! t.disableLambda].join("||")
    }, e.compile = function (t, n) {
        n = n || {};
        var i = e.cacheKey(t, n),
            r = this.cache[i];
        return r ? r : (r = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n), this.cache[i] = r)
    }
}("undefined" != typeof exports ? exports : Hogan), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_correct"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading feedback correct">'), i.b("\n" + n), i.b('  <div class="button-container">'), i.b("\n" + n), i.b('    <a class="button cc-goto">Next Task</a>'), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("  <p><strong>Nice!</strong> "), i.b(i.v(i.f("feedback", e, t, 0))), i.b("</p>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_feedback_wrong"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading feedback wrong">'), i.b("\n" + n), i.b('  <div class="button-container">'), i.b("\n" + n), i.b('    <a class="button cc-test" data-default-text="Try Again">Try Again</a>'), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("  <p><strong>Bummer!</strong> "), i.b(i.v(i.f("feedback", e, t, 0))), i.b("</p>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_results"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading">'), i.b("\n" + n), i.b("  <h3>Results</h3>"), i.b("\n" + n), i.b('  <div class="button-container">'), i.b("\n" + n), i.b("    <a class='button button-neutral hide-results' data-task-number='"), i.b(i.v(i.f("currentTask", e, t, 0))), i.b("'>Hide</a>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.b("\n" + n), i.b("<iframe id='results-"), i.b(i.v(i.f("currentTask", e, t, 0))), i.b("' class='command-results' src='"), i.b(i.v(i.f("url", e, t, 0))), i.b("'>"), i.b("\n" + n), i.b("</iframe>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/command_task"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="contained task_view">'), i.b("\n" + n), i.b('  <div class="primary-heading">'), i.b("\n" + n), i.b('    <div id="instructions">'), i.b("\n" + n), i.b('      <div class="task-count">'), i.b("\n" + n), i.b("        <p>"), i.b(i.v(i.f("currentTask", e, t, 0))), i.b(" of "), i.b(i.v(i.f("totalTasks", e, t, 0))), i.b("</p>"), i.b("\n" + n), i.b("        <span>Challenge Tasks</span>"), i.b("\n" + n), i.b("      </div>"), i.b("\n"), i.b("\n" + n), i.b('      <img src="'), i.b(i.v(i.f("badgeUrl", e, t, 0))), i.b('">'), i.b("\n" + n), i.b("      <h1>"), i.b(i.v(i.d("taskData.body", e, t, 0))), i.b("</h1>"), i.b("\n" + n), i.b("      <p>Type in your command below, then press Enter.</p>"), i.b("\n" + n), i.b("    </div>"), i.b("\n" + n), i.b("  </div>"), i.b("\n"), i.b("\n" + n), i.b('  <div class="workspace module">'), i.b("\n" + n), i.b('    <div class="cc-workspace"> '), i.b("\n" + n), i.b('      <div id="feedback">'), i.b("\n" + n), i.b("      </div>"), i.b("\n" + n), i.b('      <div class="cc-editor-container">'), i.b("\n" + n), i.b('        <div class="terminal"></div>'), i.b("\n" + n), i.b("      </div>"), i.b("\n" + n), i.b("    </div>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_correct"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading feedback correct">'), i.b("\n" + n), i.b('  <div class="button-container">'), i.b("\n" + n), i.b('    <a class="button cc-goto" data-task="'), i.b(i.v(i.f("nextTask", e, t, 0))), i.b('">Next Task</a>'), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("  <p><strong>Nice!</strong> "), i.b(i.v(i.f("feedback", e, t, 0))), i.b("</p>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_finished"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading feedback correct">'), i.b("\n" + n), i.b("  <p><strong>Congrats!</strong> You completed the Challenge!</p>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_inactive_task_failed"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading feedback wrong">'), i.b("\n" + n), i.b("  <p><strong>Oops!</strong> It looks like Task "), i.b(i.v(i.f("failedTask", e, t, 0))), i.b(" is no longer passing.</p>"), i.b("\n" + n), i.b('  <div class="button-container two-button">'), i.b("\n" + n), i.b('    <a class="button button-generic cc-test" data-task="'), i.b(i.v(i.f("currentTask", e, t, 0))), i.b('">Recheck My Work</a>'), i.b("\n" + n), i.b('    <a class="button button-generic cc-goto" data-task="'), i.b(i.v(i.f("failedTask", e, t, 0))), i.b('">Go to Task '), i.b(i.v(i.f("failedTaskAsWord", e, t, 0))), i.b("</a>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_neutral"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading feedback">'), i.b("\n" + n), i.b('  <div class="button-container">'), i.b("\n" + n), i.b('    <a class="button button-green cc-test" data-task="'), i.b(i.v(i.f("task", e, t, 0))), i.b('" data-default-text="Check Work">Check Work</a>'), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/feedback_wrong"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="panel-heading feedback wrong">'), i.b("\n" + n), i.b('  <div class="button-container">'), i.b("\n" + n), i.b('    <a class="button cc-test" data-task="'), i.b(i.v(i.f("failedTask", e, t, 0))), i.b('" data-default-text="Recheck Work">Recheck Work</a>'), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b("  <p><strong>Bummer!</strong> "), i.b(i.v(i.f("feedback", e, t, 0))), i.b("</p>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["code_challenges/instructions"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="task-count">'), i.b("\n" + n), i.b("  <p>"), i.b(i.v(i.f("task", e, t, 0))), i.b(" of "), i.b(i.v(i.f("totalTasks", e, t, 0))), i.b("</p>"), i.b("\n" + n), i.b("  <span>Challenge Tasks</span>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.b("\n" + n), i.b('<img src="'), i.b(i.v(i.f("badgeImageUrl", e, t, 0))), i.b('" class="object-image"/>'), i.b("\n" + n), i.b("<h1>"), i.b(i.v(i.f("body", e, t, 0))), i.b("</h1>"), i.b("\n" + n), i.b('<p><strong class="hot">Important:</strong> The code you write in each task should be added to the code written in the previous task.</p>'), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/feedback"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="feedback '), i.s(i.f("answer_passed", e, t, 1), e, t, 1, 0, 0, "") || i.b("wrong"), i.b('">'), i.b("\n" + n), i.b('  <a href="#" class="button button-flat">Next</a>'), i.b("\n" + n), i.b('  <span class="icon"></span>'), i.b("\n" + n), i.b("  <p>"), i.b("\n" + n), i.s(i.f("answer_passed", e, t, 1), e, t, 0, 172, 236, "{{ }}") && (i.rs(e, t, function (e, t, i) {
            i.b("    <strong>Well done!</strong> That's the correct answer."), i.b("\n" + n)
        }), e.pop()), i.s(i.f("answer_passed", e, t, 1), e, t, 1, 0, 0, "") || (i.b("    <strong>Nice try!</strong> Unfortunately, that answer is incorrect."), i.b("\n" + n)), i.b("  </p>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/fill_in_the_blank"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<ul class="quiz-answers fill-in-blank">'), i.b("\n" + n), i.s(i.f("answers", e, t, 1), e, t, 0, 54, 257, "{{ }}") && (i.rs(e, t, function (e, t, i) {
            i.b("  <li>"), i.b("\n" + n), i.b('    <form id="fill-in-blank">'), i.b("\n" + n), i.b("      "), i.b(i.t(i.f("answer", e, t, 0))), i.b("\n" + n), i.b('      <input type="submit" value="Submit" id="submit">'), i.b("\n" + n), i.b("    </form>"), i.b("\n" + n), i.b("  </li>"), i.b("\n" + n), i.b('  <a href="'), i.b(i.v(i.f("href", e, t, 0))), i.b('" class="button button-primary">Submit Answer</a>'), i.b("\n" + n)
        }), e.pop()), i.b("</ul>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/multiple_choice"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<ul class="quiz-answers multiple-choice">'), i.b("\n" + n), i.s(i.f("answers", e, t, 1), e, t, 0, 56, 250, "{{ }}") && (i.rs(e, t, function (e, t, i) {
            i.b("  <li>"), i.b("\n" + n), i.b('    <a href="'), i.b(i.v(i.f("href", e, t, 0))), i.b('">'), i.b("\n" + n), i.b('      <strong class="abcdWrapper">'), i.b("\n" + n), i.b('        <span class="abcd">'), i.b(i.t(i.f("abcd", e, t, 0))), i.b("</span>"), i.b("\n" + n), i.b("      </strong>"), i.b("\n" + n), i.b('      <span class="answer">'), i.b(i.t(i.f("answer", e, t, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </a>"), i.b("\n" + n), i.b("  </li>"), i.b("\n" + n)
        }), e.pop()), i.b("</ul>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/question"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="question">'), i.b("\n" + n), i.b('  <div class="question-count">'), i.b(i.v(i.d("question.current_question", e, t, 0))), i.b(" <span>of</span> "), i.b(i.v(i.d("question.total_questions", e, t, 0))), i.b("</div>"), i.b("\n" + n), i.b(" "), i.b(i.t(i.d("question.question", e, t, 0))), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/score"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<div class="module quiz-score">'), i.b("\n" + n), i.b('  <div class="score-counter">'), i.b("\n" + n), i.b('    <div class="correct '), i.s(i.d("score.answers_correct", e, t, 1), e, t, 0, 112, 119, "{{ }}") && (i.rs(e, t, function (e, t, n) {
            n.b(" active")
        }), e.pop()), i.b('">'), i.b("\n" + n), i.b("      <strong>"), i.b(i.v(i.d("score.answers_correct", e, t, 0))), i.b("</strong> Correct"), i.b("\n" + n), i.b("    </div>"), i.b("\n" + n), i.b('    <div class="incorrect '), i.s(i.d("score.answers_incorrect", e, t, 1), e, t, 0, 270, 277, "{{ }}") && (i.rs(e, t, function (e, t, n) {
            n.b(" active")
        }), e.pop()), i.b('">'), i.b("\n" + n), i.b("      <strong>"), i.b(i.v(i.d("score.answers_incorrect", e, t, 0))), i.b("</strong> Incorrect"), i.b("\n" + n), i.b("    </div>"), i.b("\n" + n), i.b("  </div>"), i.b("\n" + n), i.b('  <span class="note">You need <strong>'), i.b(i.v(i.d("score.answers_to_pass", e, t, 0))), i.b(" correct "), i.b(i.v(i.f("label", e, t, 0))), i.b("</strong> or more to pass this quiz.</span>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {}), this.HoganTemplates || (this.HoganTemplates = {}), this.HoganTemplates["quizzes/true_false"] = new Hogan.Template({
    code: function (e, t, n) {
        var i = this;
        return i.b(n = n || ""), i.b('<ul class="quiz-answers true-false">'), i.b("\n" + n), i.s(i.f("answers", e, t, 1), e, t, 0, 51, 188, "{{ }}") && (i.rs(e, t, function (e, t, i) {
            i.b("  <li>"), i.b("\n" + n), i.b('  <a href="'), i.b(i.v(i.f("href", e, t, 0))), i.b('">'), i.b("\n" + n), i.b('    <strong class="abcdWrapper">'), i.b("\n" + n), i.b('      <span class="tf">'), i.b(i.v(i.f("answer", e, t, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </strong>"), i.b("\n" + n), i.b("    </a>"), i.b("\n" + n), i.b("  </li>"), i.b("\n" + n)
        }), e.pop()), i.b("</ul>"), i.b("\n"), i.fl()
    },
    partials: {},
    subs: {}
}, "", Hogan, {});


var mejs = mejs || {};
mejs.version = "2.11.0", mejs.meIndex = 0, mejs.plugins = {
    silverlight: [{
            version: [3, 0],
            types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }
    ],
    flash: [{
            version: [9, 0, 124],
            types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
        }
    ],
    youtube: [{
            version: null,
            types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
        }
    ],
    vimeo: [{
            version: null,
            types: ["video/vimeo", "video/x-vimeo"]
        }
    ]
}, mejs.Utility = {
    encodeUrl: function (e) {
        return encodeURIComponent(e)
    },
    escapeHTML: function (e) {
        return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function (e) {
        var t = document.createElement("div");
        return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href
    },
    getScriptPath: function (e) {
        for (var t, n, i = 0, r = "", o = "", a = document.getElementsByTagName("script"), s = a.length, l = e.length; s > i; i++) {
            for (n = a[i].src, t = 0; l > t; t++) if (o = e[t], n.indexOf(o) > -1) {
                    r = n.substring(0, n.indexOf(o));
                    break
                }
            if ("" !== r) break
        }
        return r
    },
    secondsToTimeCode: function (e, t, n, i) {
        "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
        var r = Math.floor(e / 3600) % 24,
            o = Math.floor(e / 60) % 60,
            a = Math.floor(e % 60),
            s = Math.floor((e % 1 * i).toFixed(3)),
            l = (t || r > 0 ? (10 > r ? "0" + r : r) + ":" : "") + (10 > o ? "0" + o : o) + ":" + (10 > a ? "0" + a : a) + (n ? ":" + (10 > s ? "0" + s : s) : "");
        return l
    },
    timeCodeToSeconds: function (e, t, n, i) {
        "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
        var r = e.split(":"),
            o = parseInt(r[0], 10),
            a = parseInt(r[1], 10),
            s = parseInt(r[2], 10),
            l = 0,
            u = 0;
        return n && (l = parseInt(r[3]) / i), u = 3600 * o + 60 * a + s + l
    },
    convertSMPTEtoSeconds: function (e) {
        if ("string" != typeof e) return !1;
        e = e.replace(",", ".");
        var t = 0,
            n = -1 != e.indexOf(".") ? e.split(".")[1].length : 0,
            i = 1;
        e = e.split(":").reverse();
        for (var r = 0; e.length > r; r++) i = 1, r > 0 && (i = Math.pow(60, r)), t += Number(e[r]) * i;
        return Number(t.toFixed(n))
    },
    removeSwf: function (e) {
        var t = document.getElementById(e);
        t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", function () {
            4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    },
    removeObjectInIE: function (e) {
        var t = document.getElementById(e);
        if (t) {
            for (var n in t) "function" == typeof t[n] && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
}, mejs.PluginDetector = {
    hasPluginVersion: function (e, t) {
        var n = this.plugins[e];
        return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2] ? !0 : !1
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (e, t, n, i, r) {
        this.plugins[e] = this.detectPlugin(t, n, i, r)
    },
    detectPlugin: function (e, t, n, i) {
        var r, o, a, s = [0, 0, 0];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
            if (r = this.nav.plugins[e].description, r && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin)) for (s = r.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), o = 0; s.length > o; o++) s[o] = parseInt(s[o].match(/\d+/), 10)
        } else if ("undefined" != typeof window.ActiveXObject) try {
                a = new ActiveXObject(n), a && (s = i(a))
        } catch (l) {}
        return s
    }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (e) {
    var t = [],
        n = e.GetVariable("$version");
    return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (e) {
    var t = [0, 0, 0, 0],
        n = function (e, t, n, i) {
            for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[n] += i;
            t[n] -= i
        };
    return n(e, t, 0, 1), n(e, t, 1, 1), n(e, t, 2, 1e4), n(e, t, 2, 1e3), n(e, t, 2, 100), n(e, t, 2, 10), n(e, t, 2, 1), n(e, t, 3, 1), t
}), mejs.MediaFeatures = {
    init: function () {
        var e, t, n = this,
            i = document,
            r = mejs.PluginDetector.nav,
            o = mejs.PluginDetector.ua.toLowerCase(),
            a = ["source", "track", "audio", "video"];
        n.isiPad = null !== o.match(/ipad/i), n.isiPhone = null !== o.match(/iphone/i), n.isiOS = n.isiPhone || n.isiPad, n.isAndroid = null !== o.match(/android/i), n.isBustedAndroid = null !== o.match(/android 2\.[12]/), n.isIE = -1 != r.appName.toLowerCase().indexOf("microsoft"), n.isChrome = null !== o.match(/chrome/gi), n.isFirefox = null !== o.match(/firefox/gi), n.isWebkit = null !== o.match(/webkit/gi), n.isGecko = null !== o.match(/gecko/gi) && !n.isWebkit, n.isOpera = null !== o.match(/opera/gi), n.hasTouch = "ontouchstart" in window, n.svg = !! document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (e = 0; a.length > e; e++) t = document.createElement(a[e]);
        n.supportsMediaTag = "undefined" != typeof t.canPlayType || n.isBustedAndroid, n.hasSemiNativeFullScreen = "undefined" != typeof t.webkitEnterFullscreen, n.hasWebkitNativeFullScreen = "undefined" != typeof t.webkitRequestFullScreen, n.hasMozNativeFullScreen = "undefined" != typeof t.mozRequestFullScreen, n.hasTrueNativeFullScreen = n.hasWebkitNativeFullScreen || n.hasMozNativeFullScreen, n.nativeFullScreenEnabled = n.hasTrueNativeFullScreen, n.hasMozNativeFullScreen && (n.nativeFullScreenEnabled = t.mozFullScreenEnabled), this.isChrome && (n.hasSemiNativeFullScreen = !1), n.hasTrueNativeFullScreen && (n.fullScreenEventName = n.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange", n.isFullScreen = function () {
            return t.mozRequestFullScreen ? i.mozFullScreen : t.webkitRequestFullScreen ? i.webkitIsFullScreen : void 0
        }, n.requestFullScreen = function (e) {
            n.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : n.hasMozNativeFullScreen && e.mozRequestFullScreen()
        }, n.cancelFullScreen = function () {
            n.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : n.hasMozNativeFullScreen && document.mozCancelFullScreen()
        }), n.hasSemiNativeFullScreen && o.match(/mac os x 10_5/i) && (n.hasNativeFullScreen = !1, n.hasSemiNativeFullScreen = !1)
    }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function (e) {
        this.currentTime = e
    },
    setMuted: function (e) {
        this.muted = e
    },
    setVolume: function (e) {
        this.volume = e
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (e) {
        for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
        if ("string" == typeof e) this.src = e;
        else {
            var n, i;
            for (n = 0; e.length > n; n++) if (i = e[n], this.canPlayType(i.type)) {
                    this.src = i.src;
                    break
                }
        }
    },
    setVideoSize: function (e, t) {
        this.width = e, this.height = t
    }
}, mejs.PluginMediaElement = function (e, t, n) {
    this.id = e, this.pluginType = t, this.src = n, this.events = {}, this.attributes = {}
}, mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
    },
    load: function () {
        null != this.pluginApi && ("youtube" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
    },
    pause: function () {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
    },
    stop: function () {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
    },
    canPlayType: function (e) {
        var t, n, i, r = mejs.plugins[this.pluginType];
        for (t = 0; r.length > t; t++) if (i = r[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, i.version)) for (n = 0; i.types.length > n; n++) if (e == i.types[n]) return "probably";
        return ""
    },
    positionFullscreenButton: function (e, t, n) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(e, t, n)
    },
    hideFullscreenButton: function () {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (e) {
        if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), this.src = mejs.Utility.absolutizeUrl(e);
        else {
            var t, n;
            for (t = 0; e.length > t; t++) if (n = e[t], this.canPlayType(n.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(n.src)), this.src = mejs.Utility.absolutizeUrl(e);
                    break
                }
        }
    },
    setCurrentTime: function (e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
    },
    setVolume: function (e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e), this.volume = e)
    },
    setMuted: function (e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(e), this.muted = e)
    },
    setVideoSize: function (e, t) {
        this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
    },
    setFullscreen: function (e) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
    },
    enterFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function () {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function (e, t) {
        this.events[e] = this.events[e] || [], this.events[e].push(t)
    },
    removeEventListener: function (e, t) {
        if (!e) return this.events = {}, !0;
        var n = this.events[e];
        if (!n) return !0;
        if (!t) return this.events[e] = [], !0;
        for (i = 0; n.length > i; i++) if (n[i] === t) return this.events[e].splice(i, 1), !0;
        return !1
    },
    dispatchEvent: function (e) {
        var t, n, i = this.events[e];
        if (i) for (n = Array.prototype.slice.call(arguments, 1), t = 0; i.length > t; t++) i[t].apply(null, n)
    },
    hasAttribute: function (e) {
        return e in this.attributes
    },
    removeAttribute: function (e) {
        delete this.attributes[e]
    },
    getAttribute: function (e) {
        return this.hasAttribute(e) ? this.attributes[e] : ""
    },
    setAttribute: function (e, t) {
        this.attributes[e] = t
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
}, mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (e, t, n) {
        this.pluginMediaElements[e] = t, this.htmlMediaElements[e] = n
    },
    unregisterPluginElement: function (e) {
        delete this.pluginMediaElements[e], delete this.htmlMediaElements[e]
    },
    initPlugin: function (e) {
        var t = this.pluginMediaElements[e],
            n = this.htmlMediaElements[e];
        if (t) {
            switch (t.pluginType) {
            case "flash":
                t.pluginElement = t.pluginApi = document.getElementById(e);
                break;
            case "silverlight":
                t.pluginElement = document.getElementById(t.id), t.pluginApi = t.pluginElement.Content.MediaElementJS
            }
            null != t.pluginApi && t.success && t.success(t, n)
        }
    },
    fireEvent: function (e, t, n) {
        var i, r, o, a = this.pluginMediaElements[e];
        i = {
            type: t,
            target: a
        };
        for (r in n) a[r] = n[r], i[r] = n[r];
        o = n.bufferedTime || 0, i.target.buffered = i.buffered = {
            start: function () {
                return 0
            },
            end: function () {
                return o
            },
            length: 1
        }, a.dispatchEvent(i.type, i)
    }
}, mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: !1,
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function () {},
    error: function () {}
}, mejs.MediaElement = function (e, t) {
    return mejs.HtmlMediaElementShim.create(e, t)
}, mejs.HtmlMediaElementShim = {
    create: function (e, t) {
        var n, i, r = mejs.MediaElementDefaults,
            o = "string" == typeof e ? document.getElementById(e) : e,
            a = o.tagName.toLowerCase(),
            s = "audio" === a || "video" === a,
            l = s ? o.getAttribute("src") : o.getAttribute("href"),
            u = o.getAttribute("poster"),
            c = o.getAttribute("autoplay"),
            d = o.getAttribute("preload"),
            h = o.getAttribute("controls");
        for (i in t) r[i] = t[i];
        return l = "undefined" == typeof l || null === l || "" == l ? null : l, u = "undefined" == typeof u || null === u ? "" : u, d = "undefined" == typeof d || null === d || "false" === d ? "none" : d, c = !("undefined" == typeof c || null === c || "false" === c), h = !("undefined" == typeof h || null === h || "false" === h), n = this.determinePlayback(o, r, mejs.MediaFeatures.supportsMediaTag, s, l), n.url = null !== n.url ? mejs.Utility.absolutizeUrl(n.url) : "", "native" == n.method ? (mejs.MediaFeatures.isBustedAndroid && (o.src = n.url, o.addEventListener("click", function () {
            o.play()
        }, !1)), this.updateNative(n, r, c, d)) : "" !== n.method ? this.createPlugin(n, r, u, c, d, h) : (this.createErrorMessage(n, r, u), this)
    },
    determinePlayback: function (e, t, n, i, r) {
        var o, a, s, l, u, c, d, h, f, p, m, g = [],
            v = {
                method: "",
                url: "",
                htmlMediaElement: e,
                isVideo: "audio" != e.tagName.toLowerCase()
            };
        if ("undefined" != typeof t.type && "" !== t.type) if ("string" == typeof t.type) g.push({
                    type: t.type,
                    url: r
                });
            else for (o = 0; t.type.length > o; o++) g.push({
                        type: t.type[o],
                        url: r
                    });
            else if (null !== r) c = this.formatType(r, e.getAttribute("type")), g.push({
                type: c,
                url: r
            });
        else for (o = 0; e.childNodes.length > o; o++) u = e.childNodes[o], 1 == u.nodeType && "source" == u.tagName.toLowerCase() && (r = u.getAttribute("src"), c = this.formatType(r, u.getAttribute("type")), m = u.getAttribute("media"), (!m || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && g.push({
                    type: c,
                    url: r
                })); if (!i && g.length > 0 && null !== g[0].url && this.getTypeFromFile(g[0].url).indexOf("audio") > -1 && (v.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function (e) {
            return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
        }), n && ("auto" === t.mode || "auto_plugin" === t.mode || "native" === t.mode)) {
            for (i || (p = document.createElement(v.isVideo ? "video" : "audio"), e.parentNode.insertBefore(p, e), e.style.display = "none", v.htmlMediaElement = e = p), o = 0; g.length > o; o++) if ("" !== e.canPlayType(g[o].type).replace(/no/, "") || "" !== e.canPlayType(g[o].type.replace(/mp3/, "mpeg")).replace(/no/, "")) {
                    v.method = "native", v.url = g[o].url;
                    break
                }
            if ("native" === v.method && (null !== v.url && (e.src = v.url), "auto_plugin" !== t.mode)) return v
        }
        if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode) for (o = 0; g.length > o; o++) for (c = g[o].type, a = 0; t.plugins.length > a; a++) for (d = t.plugins[a], h = mejs.plugins[d], s = 0; h.length > s; s++) if (f = h[s], null == f.version || mejs.PluginDetector.hasPluginVersion(d, f.version)) for (l = 0; f.types.length > l; l++) if (c == f.types[l]) return v.method = d, v.url = g[o].url, v;
        return "auto_plugin" === t.mode && "native" === v.method ? v : ("" === v.method && g.length > 0 && (v.url = g[0].url), v)
    },
    formatType: function (e, t) {
        return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
    },
    getTypeFromFile: function (e) {
        e = e.split("?")[0];
        var t = e.substring(e.lastIndexOf(".") + 1);
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video" : "audio") + "/" + this.getTypeFromExtension(t)
    },
    getTypeFromExtension: function (e) {
        switch (e) {
        case "mp4":
        case "m4v":
            return "mp4";
        case "webm":
        case "webma":
        case "webmv":
            return "webm";
        case "ogg":
        case "oga":
        case "ogv":
            return "ogg";
        default:
            return e
        }
    },
    createErrorMessage: function (e, t, n) {
        var i = e.htmlMediaElement,
            r = document.createElement("div");
        r.className = "me-cannotplay";
        try {
            r.style.width = i.width + "px", r.style.height = i.height + "px"
        } catch (o) {}
        r.innerHTML = "" !== n ? '<a href="' + e.url + '"><img src="' + n + '" width="100%" height="100%" /></a>' : '<a href="' + e.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", i.parentNode.insertBefore(r, i), i.style.display = "none", t.error(i)
    },
    createPlugin: function (e, t, n, i, r, o) {
        var a, s, l, u = e.htmlMediaElement,
            c = 1,
            d = 1,
            h = "me_" + e.method + "_" + mejs.meIndex++,
            f = new mejs.PluginMediaElement(h, e.method, e.url),
            p = document.createElement("div");
        f.tagName = u.tagName;
        for (var m = 0; u.attributes.length > m; m++) {
            var g = u.attributes[m];
            1 == g.specified && f.setAttribute(g.name, g.value)
        }
        for (s = u.parentNode; null !== s && "body" != s.tagName.toLowerCase();) {
            if ("p" == s.parentNode.tagName.toLowerCase()) {
                s.parentNode.parentNode.insertBefore(s, s.parentNode);
                break
            }
            s = s.parentNode
        }
        switch (e.isVideo ? (c = t.videoWidth > 0 ? t.videoWidth : null !== u.getAttribute("width") ? u.getAttribute("width") : t.defaultVideoWidth, d = t.videoHeight > 0 ? t.videoHeight : null !== u.getAttribute("height") ? u.getAttribute("height") : t.defaultVideoHeight, c = mejs.Utility.encodeUrl(c), d = mejs.Utility.encodeUrl(d)) : t.enablePluginDebug && (c = 320, d = 240), f.success = t.success, mejs.MediaPluginBridge.registerPluginElement(h, f, u), p.className = "me-plugin", p.id = h + "_container", e.isVideo ? u.parentNode.insertBefore(p, u) : document.body.insertBefore(p, document.body.childNodes[0]), l = ["id=" + h, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (i ? "true" : "false"), "preload=" + r, "width=" + c, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + d], null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) : l.push("file=" + e.url)), t.enablePluginDebug && l.push("debug=true"), t.enablePluginSmoothing && l.push("smoothing=true"), o && l.push("controls=true"), t.pluginVars && (l = l.concat(t.pluginVars)), e.method) {
        case "silverlight":
            p.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + h + '" name="' + h + '" width="' + c + '" height="' + d + '" class="mejs-shim">' + '<param name="initParams" value="' + l.join(",") + '" />' + '<param name="windowless" value="true" />' + '<param name="background" value="black" />' + '<param name="minRuntimeVersion" value="3.0.0.0" />' + '<param name="autoUpgrade" value="true" />' + '<param name="source" value="' + t.pluginPath + t.silverlightName + '" />' + "</object>";
            break;
        case "flash":
            mejs.MediaFeatures.isIE ? (a = document.createElement("div"), p.appendChild(a), a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + h + '" width="' + c + '" height="' + d + '" class="mejs-shim">' + '<param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" />' + '<param name="flashvars" value="' + l.join("&amp;") + '" />' + '<param name="quality" value="high" />' + '<param name="bgcolor" value="#000000" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + "</object>") : p.innerHTML = '<embed id="' + h + '" name="' + h + '" ' + 'play="true" ' + 'loop="false" ' + 'quality="high" ' + 'bgcolor="#000000" ' + 'wmode="transparent" ' + 'allowScriptAccess="always" ' + 'allowFullScreen="true" ' + 'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' + 'src="' + t.pluginPath + t.flashName + '" ' + 'flashvars="' + l.join("&") + '" ' + 'width="' + c + '" ' + 'height="' + d + '" ' + 'class="mejs-shim"></embed>';
            break;
        case "youtube":
            var v = e.url.substr(e.url.lastIndexOf("=") + 1);
            youtubeSettings = {
                container: p,
                containerId: p.id,
                pluginMediaElement: f,
                pluginId: h,
                videoId: v,
                height: d,
                width: c
            }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
            break;
        case "vimeo":
            f.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), p.innerHTML = '<iframe src="http://player.vimeo.com/video/' + f.vimeoid + '?portrait=0&byline=0&title=0" width="' + c + '" height="' + d + '" frameborder="0" class="mejs-shim"></iframe>'
        }
        return u.style.display = "none", f
    },
    updateNative: function (e, t) {
        var n, i = e.htmlMediaElement;
        for (n in mejs.HtmlMediaElement) i[n] = mejs.HtmlMediaElement[n];
        return t.success(i, i), i
    }
}, mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function () {
        if (!this.isIframeStarted) {
            var e = document.createElement("script");
            e.src = "http://www.youtube.com/player_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t), this.isIframeStarted = !0
        }
    },
    iframeQueue: [],
    enqueueIframe: function (e) {
        this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(), this.iframeQueue.push(e))
    },
    createIframe: function (e) {
        var t = e.pluginMediaElement,
            n = new YT.Player(e.containerId, {
                height: e.height,
                width: e.width,
                videoId: e.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function () {
                        e.pluginMediaElement.pluginApi = n, mejs.MediaPluginBridge.initPlugin(e.pluginId), setInterval(function () {
                            mejs.YouTubeApi.createEvent(n, t, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function (e) {
                        mejs.YouTubeApi.handleStateChange(e.data, n, t)
                    }
                }
            })
    },
    createEvent: function (e, t, n) {
        var i = {
            type: n,
            target: t
        };
        if (e && e.getDuration) {
            t.currentTime = i.currentTime = e.getCurrentTime(), t.duration = i.duration = e.getDuration(), i.paused = t.paused, i.ended = t.ended, i.muted = e.isMuted(), i.volume = e.getVolume() / 100, i.bytesTotal = e.getVideoBytesTotal(), i.bufferedBytes = e.getVideoBytesLoaded();
            var r = i.bufferedBytes / i.bytesTotal * i.duration;
            i.target.buffered = i.buffered = {
                start: function () {
                    return 0
                },
                end: function () {
                    return r
                },
                length: 1
            }
        }
        t.dispatchEvent(i.type, i)
    },
    iFrameReady: function () {
        for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
            var e = this.iframeQueue.pop();
            this.createIframe(e)
        }
    },
    flashPlayers: {},
    createFlash: function (e) {
        this.flashPlayers[e.pluginId] = e;
        var t, n = "http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim">' + '<param name="movie" value="' + n + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + "</object>") : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + n + '" ' + 'width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim">' + '<param name="allowScriptAccess" value="always">' + '<param name="wmode" value="transparent">' + "</object>"
    },
    flashReady: function (e) {
        var t = this.flashPlayers[e],
            n = document.getElementById(e),
            i = t.pluginMediaElement;
        i.pluginApi = i.pluginElement = n, mejs.MediaPluginBridge.initPlugin(e), n.cueVideoById(t.videoId);
        var r = t.containerId + "_callback";
        window[r] = function (e) {
            mejs.YouTubeApi.handleStateChange(e, n, i)
        }, n.addEventListener("onStateChange", r), setInterval(function () {
            mejs.YouTubeApi.createEvent(n, i, "timeupdate")
        }, 250)
    },
    handleStateChange: function (e, t, n) {
        switch (e) {
        case -1:
            n.paused = !0, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "loadedmetadata");
            break;
        case 0:
            n.paused = !1, n.ended = !0, mejs.YouTubeApi.createEvent(t, n, "ended");
            break;
        case 1:
            n.paused = !1, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "play"), mejs.YouTubeApi.createEvent(t, n, "playing");
            break;
        case 2:
            n.paused = !0, n.ended = !1, mejs.YouTubeApi.createEvent(t, n, "pause");
            break;
        case 3:
            mejs.YouTubeApi.createEvent(t, n, "progress");
            break;
        case 5:
        }
    }
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement,
function (e, t, n) {
    "use strict";
    var i = {
        locale: {
            strings: {}
        },
        methods: {}
    };
    i.locale.getLanguage = function () {
        return {
            language: navigator.language
        }
    }, i.locale.INIT_LANGUAGE = i.locale.getLanguage(), i.methods.checkPlain = function (e) {
        var t, n, i = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
        e = String(e);
        for (t in i) i.hasOwnProperty(t) && (n = new RegExp(t, "g"), e = e.replace(n, i[t]));
        return e
    }, i.methods.formatString = function (e, t) {
        for (var n in t) {
            switch (n.charAt(0)) {
            case "@":
                t[n] = i.methods.checkPlain(t[n]);
                break;
            case "!":
                break;
            case "%":
            default:
                t[n] = '<em class="placeholder">' + i.methods.checkPlain(t[n]) + "</em>"
            }
            e = e.replace(n, t[n])
        }
        return e
    }, i.methods.t = function (e, t, n) {
        return i.locale.strings && i.locale.strings[n.context] && i.locale.strings[n.context][e] && (e = i.locale.strings[n.context][e]), t && (e = i.methods.formatString(e, t)), e
    }, i.t = function (e, t, n) {
        if ("string" == typeof e && e.length > 0) {
            var r = i.locale.getLanguage();
            return n = n || {
                context: r.language
            }, i.methods.t(e, t, n)
        }
        throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        }
    }, n.i18n = i
}(jQuery, document, mejs),
function (e) {
    "use strict";
    e.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schließen"
    }
}(mejs.i18n.locale.strings), mejs.MediaElementDefaults.pluginPath = "", mejs.MediaElementDefaults.flashName = "//a248.e.akamai.net/teamtreehouse.com/assets/mediaelement_rails/flashmediaelement-08779e8a0970c1646cf0c7c7011e93f2.swf", mejs.MediaElementDefaults.silverlightName = "//a248.e.akamai.net/teamtreehouse.com/assets/mediaelement_rails/silverlightmediaelement-41eff9523fe560fa6b5f84449e6da314.xap",
/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2012, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
"undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof ender && (mejs.$ = ender),
function (e) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (e) {
            return .05 * e.duration
        },
        defaultSeekForwardInterval: function (e) {
            return .05 * e.duration
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: !1,
        autoRewind: !0,
        enableAutosize: !0,
        alwaysShowHours: !1,
        showTimecodeFrameCount: !1,
        framesPerSecond: 25,
        autosizeProgress: !0,
        alwaysShowControls: !1,
        hideVideoControlsOnLoad: !1,
        clickToPlayPause: !0,
        iPadUseNativeControls: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: !0,
        enableKeyboard: !0,
        pauseOtherPlayers: !0,
        keyActions: [{
                keys: [32, 179],
                action: function (e, t) {
                    t.paused || t.ended ? t.play() : t.pause()
                }
            }, {
                keys: [38],
                action: function (e, t) {
                    var n = Math.min(t.volume + .1, 1);
                    t.setVolume(n)
                }
            }, {
                keys: [40],
                action: function (e, t) {
                    var n = Math.max(t.volume - .1, 0);
                    t.setVolume(n)
                }
            }, {
                keys: [37, 227],
                action: function (e, t) {
                    if (!isNaN(t.duration) && t.duration > 0) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var n = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                        t.setCurrentTime(n)
                    }
                }
            }, {
                keys: [39, 228],
                action: function (e, t) {
                    if (!isNaN(t.duration) && t.duration > 0) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var n = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                        t.setCurrentTime(n)
                    }
                }
            }, {
                keys: [70],
                action: function (e) {
                    "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                }
            }
        ]
    }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function (t, n) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(t, n);
        var i = this;
        return i.$media = i.$node = e(t), i.node = i.media = i.$media[0], "undefined" != typeof i.node.player ? i.node.player : (i.node.player = i, "undefined" == typeof n && (n = i.$node.data("mejsoptions")), i.options = e.extend({}, mejs.MepDefaults, n), i.id = "mep_" + mejs.mepIndex++, mejs.players[i.id] = i, i.init(), i)
    }, mejs.MediaElementPlayer.prototype = {
        hasFocus: !1,
        controlsAreVisible: !0,
        init: function () {
            var t = this,
                n = mejs.MediaFeatures,
                i = e.extend(!0, {}, t.options, {
                    success: function (e, n) {
                        t.meReady(e, n)
                    },
                    error: function (e) {
                        t.handleError(e)
                    }
                }),
                r = t.media.tagName.toLowerCase();
            if (t.isDynamic = "audio" !== r && "video" !== r, t.isVideo = t.isDynamic ? t.options.isVideo : "audio" !== r && t.options.isVideo, n.isiPad && t.options.iPadUseNativeControls || n.isiPhone && t.options.iPhoneUseNativeControls) t.$media.attr("controls", "controls"), n.isiPad && null !== t.media.getAttribute("autoplay") && (t.media.load(), t.media.play());
            else if (n.isAndroid && t.options.AndroidUseNativeControls);
            else {
                if (t.$media.removeAttr("controls"), t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '">' + '<div class="mejs-inner">' + '<div class="mejs-mediaelement"></div>' + '<div class="mejs-layers"></div>' + '<div class="mejs-controls"></div>' + '<div class="mejs-clear"></div>' + "</div>" + "</div>").addClass(t.$media[0].className).insertBefore(t.$media), t.container.addClass((n.isAndroid ? "mejs-android " : "") + (n.isiOS ? "mejs-ios " : "") + (n.isiPad ? "mejs-ipad " : "") + (n.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio ")), n.isiOS) {
                    var o = t.$media.clone();
                    t.container.find(".mejs-mediaelement").append(o), t.$media.remove(), t.$node = t.$media = o, t.node = t.media = o[0]
                } else t.container.find(".mejs-mediaelement").append(t.$media);
                t.controls = t.container.find(".mejs-controls"), t.layers = t.container.find(".mejs-layers");
                var a = t.isVideo ? "video" : "audio",
                    s = a.substring(0, 1).toUpperCase() + a.substring(1);
                t.width = t.options[a + "Width"] > 0 || t.options[a + "Width"].toString().indexOf("%") > -1 ? t.options[a + "Width"] : "" !== t.media.style.width && null !== t.media.style.width ? t.media.style.width : null !== t.media.getAttribute("width") ? t.$media.attr("width") : t.options["default" + s + "Width"], t.height = t.options[a + "Height"] > 0 || t.options[a + "Height"].toString().indexOf("%") > -1 ? t.options[a + "Height"] : "" !== t.media.style.height && null !== t.media.style.height ? t.media.style.height : null !== t.$media[0].getAttribute("height") ? t.$media.attr("height") : t.options["default" + s + "Height"], t.setPlayerSize(t.width, t.height), i.pluginWidth = t.height, i.pluginHeight = t.width
            }
            mejs.MediaElement(t.$media[0], i), t.container.trigger("controlsshown")
        },
        showControls: function (e) {
            var t = this;
            e = "undefined" == typeof e || e, t.controlsAreVisible || (e ? (t.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function () {
                t.controlsAreVisible = !0, t.container.trigger("controlsshown")
            }), t.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function () {
                t.controlsAreVisible = !0
            })) : (t.controls.css("visibility", "visible").css("display", "block"), t.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize())
        },
        hideControls: function (t) {
            var n = this;
            t = "undefined" == typeof t || t, n.controlsAreVisible && (t ? (n.controls.stop(!0, !0).fadeOut(200, function () {
                e(this).css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")
            }), n.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function () {
                e(this).css("visibility", "hidden").css("display", "block")
            })) : (n.controls.css("visibility", "hidden").css("display", "block"), n.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")))
        },
        controlsTimer: null,
        startControlsTimer: function (e) {
            var t = this;
            e = "undefined" != typeof e ? e : 1500, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function () {
                t.hideControls(), t.killControlsTimer("hide")
            }, e)
        },
        killControlsTimer: function () {
            var e = this;
            null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, e.controlsTimer = null)
        },
        controlsEnabled: !0,
        disableControls: function () {
            var e = this;
            e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1
        },
        enableControls: function () {
            var e = this;
            e.showControls(!1), e.controlsEnabled = !0
        },
        meReady: function (e, t) {
            var n, i, r = this,
                o = mejs.MediaFeatures,
                a = t.getAttribute("autoplay"),
                s = !("undefined" == typeof a || null === a || "false" === a);
            if (!r.created) {
                if (r.created = !0, r.media = e, r.domNode = t, !(o.isAndroid && r.options.AndroidUseNativeControls || o.isiPad && r.options.iPadUseNativeControls || o.isiPhone && r.options.iPhoneUseNativeControls)) {
                    r.buildposter(r, r.controls, r.layers, r.media), r.buildkeyboard(r, r.controls, r.layers, r.media), r.buildoverlays(r, r.controls, r.layers, r.media), r.findTracks();
                    for (n in r.options.features) if (i = r.options.features[n], r["build" + i]) try {
                                r["build" + i](r, r.controls, r.layers, r.media)
                        } catch (l) {}
                    r.container.trigger("controlsready"), r.setPlayerSize(r.width, r.height), r.setControlsSize(), r.isVideo && (mejs.MediaFeatures.hasTouch ? r.$media.bind("touchstart", function () {
                        r.controlsAreVisible ? r.hideControls(!1) : r.controlsEnabled && r.showControls(!1)
                    }) : (r.media.addEventListener("click", function () {
                        r.options.clickToPlayPause && (r.media.paused ? r.media.play() : r.media.pause())
                    }), r.container.bind("mouseenter mouseover", function () {
                        r.controlsEnabled && (r.options.alwaysShowControls || (r.killControlsTimer("enter"), r.showControls(), r.startControlsTimer(2500)))
                    }).bind("mousemove", function () {
                        r.controlsEnabled && (r.controlsAreVisible || r.showControls(), r.options.alwaysShowControls || r.startControlsTimer(2500))
                    }).bind("mouseleave", function () {
                        r.controlsEnabled && (r.media.paused || r.options.alwaysShowControls || r.startControlsTimer(1e3))
                    })), r.options.hideVideoControlsOnLoad && r.hideControls(!1), s && !r.options.alwaysShowControls && r.hideControls(), r.options.enableAutosize && r.media.addEventListener("loadedmetadata", function (e) {
                        0 >= r.options.videoHeight && null === r.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (r.setPlayerSize(e.target.videoWidth, e.target.videoHeight), r.setControlsSize(), r.media.setVideoSize(e.target.videoWidth, e.target.videoHeight))
                    }, !1)), e.addEventListener("play", function () {
                        var e;
                        for (e in mejs.players) {
                            var t = mejs.players[e];
                            t.id == r.id || !r.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), t.hasFocus = !1
                        }
                        r.hasFocus = !0
                    }, !1), r.media.addEventListener("ended", function () {
                        if (r.options.autoRewind) try {
                                r.media.setCurrentTime(0)
                        } catch (e) {}
                        r.media.pause(), r.setProgressRail && r.setProgressRail(), r.setCurrentRail && r.setCurrentRail(), r.options.loop ? r.media.play() : !r.options.alwaysShowControls && r.controlsEnabled && r.showControls()
                    }, !1), r.media.addEventListener("loadedmetadata", function () {
                        r.updateDuration && r.updateDuration(), r.updateCurrent && r.updateCurrent(), r.isFullScreen || (r.setPlayerSize(r.width, r.height), r.setControlsSize())
                    }, !1), setTimeout(function () {
                        r.setPlayerSize(r.width, r.height), r.setControlsSize()
                    }, 50), r.globalBind("resize", function () {
                        r.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || r.setPlayerSize(r.width, r.height), r.setControlsSize()
                    }), "youtube" == r.media.pluginType && r.container.find(".mejs-overlay-play").hide()
                }
                s && "native" == e.pluginType && (e.load(), e.play()), r.options.success && ("string" == typeof r.options.success ? window[r.options.success](r.media, r.domNode, r) : r.options.success(r.media, r.domNode, r))
            }
        },
        handleError: function (e) {
            var t = this;
            t.controls.hide(), t.options.error && t.options.error(e)
        },
        setPlayerSize: function (t, n) {
            var i = this;
            if ("undefined" != typeof t && (i.width = t), "undefined" != typeof n && (i.height = n), i.height.toString().indexOf("%") > 0 || "100%" === i.$node.css("max-width") || i.$node[0].currentStyle && "100%" === i.$node[0].currentStyle.maxWidth) {
                var r = i.isVideo ? i.media.videoWidth && i.media.videoWidth > 0 ? i.media.videoWidth : i.options.defaultVideoWidth : i.options.defaultAudioWidth,
                    o = i.isVideo ? i.media.videoHeight && i.media.videoHeight > 0 ? i.media.videoHeight : i.options.defaultVideoHeight : i.options.defaultAudioHeight,
                    a = i.container.parent().closest(":visible").width(),
                    s = i.isVideo || !i.options.autosizeProgress ? parseInt(a * o / r, 10) : o;
                "body" === i.container.parent()[0].tagName.toLowerCase() && (a = e(window).width(), s = e(window).height()), 0 != s && 0 != a && (i.container.width(a).height(s), i.$media.add(i.container.find(".mejs-shim")).width("100%").height("100%"), i.isVideo && i.media.setVideoSize && i.media.setVideoSize(a, s), i.layers.children(".mejs-layer").width("100%").height("100%"))
            } else i.container.width(i.width).height(i.height), i.layers.children(".mejs-layer").width(i.width).height(i.height)
        },
        setControlsSize: function () {
            var t = this,
                n = 0,
                i = 0,
                r = t.controls.find(".mejs-time-rail"),
                o = t.controls.find(".mejs-time-total"),
                a = (t.controls.find(".mejs-time-current"), t.controls.find(".mejs-time-loaded"), r.siblings());
            t.options && !t.options.autosizeProgress && (i = parseInt(r.css("width"))), 0 !== i && i || (a.each(function () {
                var t = e(this);
                "absolute" != t.css("position") && t.is(":visible") && (n += e(this).outerWidth(!0))
            }), i = t.controls.width() - n - (r.outerWidth(!0) - r.width())), r.width(i), o.width(i - (o.outerWidth(!0) - o.width())), t.setProgressRail && t.setProgressRail(), t.setCurrentRail && t.setCurrentRail()
        },
        buildposter: function (t, n, i, r) {
            var o = this,
                a = e('<div class="mejs-poster mejs-layer"></div>').appendTo(i),
                s = t.$media.attr("poster");
            "" !== t.options.poster && (s = t.options.poster), "" !== s && null != s ? o.setPoster(s) : a.hide(), r.addEventListener("play", function () {
                a.hide()
            }, !1)
        },
        setPoster: function (t) {
            var n = this,
                i = n.container.find(".mejs-poster"),
                r = i.find("img");
            0 == r.length && (r = e('<img width="100%" height="100%" />').appendTo(i)), r.attr("src", t)
        },
        buildoverlays: function (t, n, i, r) {
            var o = this;
            if (t.isVideo) {
                var a = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(i),
                    s = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(i),
                    l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(i).click(function () {
                        o.options.clickToPlayPause && (r.paused ? r.play() : r.pause())
                    });
                r.addEventListener("play", function () {
                    l.hide(), a.hide(), n.find(".mejs-time-buffering").hide(), s.hide()
                }, !1), r.addEventListener("playing", function () {
                    l.hide(), a.hide(), n.find(".mejs-time-buffering").hide(), s.hide()
                }, !1), r.addEventListener("seeking", function () {
                    a.show(), n.find(".mejs-time-buffering").show()
                }, !1), r.addEventListener("seeked", function () {
                    a.hide(), n.find(".mejs-time-buffering").hide()
                }, !1), r.addEventListener("pause", function () {
                    mejs.MediaFeatures.isiPhone || l.show()
                }, !1), r.addEventListener("waiting", function () {
                    a.show(), n.find(".mejs-time-buffering").show()
                }, !1), r.addEventListener("loadeddata", function () {
                    a.show(), n.find(".mejs-time-buffering").show()
                }, !1), r.addEventListener("canplay", function () {
                    a.hide(), n.find(".mejs-time-buffering").hide()
                }, !1), r.addEventListener("error", function () {
                    a.hide(), n.find(".mejs-time-buffering").hide(), s.show(), s.find("mejs-overlay-error").html("Error loading this resource")
                }, !1)
            }
        },
        buildkeyboard: function (t, n, i, r) {
            var o = this;
            o.globalBind("keydown", function (e) {
                if (t.hasFocus && t.options.enableKeyboard) for (var n = 0, i = t.options.keyActions.length; i > n; n++) for (var o = t.options.keyActions[n], a = 0, s = o.keys.length; s > a; a++) if (e.keyCode == o.keys[a]) return e.preventDefault(), o.action(t, r, e.keyCode), !1;
                return !0
            }), o.globalBind("click", function (n) {
                0 == e(n.target).closest(".mejs-container").length && (t.hasFocus = !1)
            })
        },
        findTracks: function () {
            var t = this,
                n = t.$media.find("track");
            t.tracks = [], n.each(function (n, i) {
                i = e(i), t.tracks.push({
                    srclang: i.attr("srclang") ? i.attr("srclang").toLowerCase() : "",
                    src: i.attr("src"),
                    kind: i.attr("kind"),
                    label: i.attr("label") || "",
                    entries: [],
                    isLoaded: !1
                })
            })
        },
        changeSkin: function (e) {
            this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize()
        },
        play: function () {
            this.media.play()
        },
        pause: function () {
            this.media.pause()
        },
        load: function () {
            this.media.load()
        },
        setMuted: function (e) {
            this.media.setMuted(e)
        },
        setCurrentTime: function (e) {
            this.media.setCurrentTime(e)
        },
        getCurrentTime: function () {
            return this.media.currentTime
        },
        setVolume: function (e) {
            this.media.setVolume(e)
        },
        getVolume: function () {
            return this.media.volume
        },
        setSrc: function (e) {
            this.media.setSrc(e)
        },
        remove: function () {
            var t, n, i = this;
            for (t in i.options.features) if (n = i.options.features[t], i["clean" + n]) try {
                        i["clean" + n](i)
                } catch (r) {}
            "native" === i.media.pluginType ? i.$media.prop("controls", !0) : i.media.remove(), i.isDynamic || ("native" === i.media.pluginType, i.$node.insertBefore(i.container)), mejs.players.splice(e.inArray(i, mejs.players), 1), i.container.remove(), i.globalUnbind(), delete i.node.player, delete mejs.players[i.id]
        }
    },
    function () {
        function t(t, i) {
            var r = {
                d: [],
                w: []
            };
            return e.each((t || "").split(" "), function (e, t) {
                r[n.test(t) ? "w" : "d"].push(t + "." + i)
            }), r.d = r.d.join(" "), r.w = r.w.join(" "), r
        }
        var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function (n, i, r) {
            var o = this;
            n = t(n, o.id), n.d && e(document).bind(n.d, i, r), n.w && e(window).bind(n.w, i, r)
        }, mejs.MediaElementPlayer.prototype.globalUnbind = function (n, i) {
            var r = this;
            n = t(n, r.id), n.d && e(document).unbind(n.d, i), n.w && e(window).unbind(n.w, i)
        }
    }(), "undefined" != typeof jQuery && (jQuery.fn.mediaelementplayer = function (e) {
        return e === !1 ? this.each(function () {
            var e = jQuery(this).data("mediaelementplayer");
            e && e.remove(), jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function () {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, e))
        }), this
    }), e(document).ready(function () {
        e(".mejs-player").mediaelementplayer()
    }), window.MediaElementPlayer = mejs.MediaElementPlayer
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        playpauseText: "Play/Pause"
    }), e.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (t, n, i, r) {
            var o = this,
                a = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + o.id + '" title="' + o.options.playpauseText + '"></button>' + "</div>").appendTo(n).click(function (e) {
                    return e.preventDefault(), r.paused ? r.play() : r.pause(), !1
                });
            r.addEventListener("play", function () {
                a.removeClass("mejs-play").addClass("mejs-pause")
            }, !1), r.addEventListener("playing", function () {
                a.removeClass("mejs-play").addClass("mejs-pause")
            }, !1), r.addEventListener("pause", function () {
                a.removeClass("mejs-pause").addClass("mejs-play")
            }, !1), r.addEventListener("paused", function () {
                a.removeClass("mejs-pause").addClass("mejs-play")
            }, !1)
        }
    })
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        stopText: "Stop"
    }), e.extend(MediaElementPlayer.prototype, {
        buildstop: function (t, n, i, r) {
            var o = this;
            e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + o.id + '" title="' + o.options.stopText + '"></button>' + "</div>").appendTo(n).click(function () {
                r.paused || r.pause(), r.currentTime > 0 && (r.setCurrentTime(0), r.pause(), n.find(".mejs-time-current").width("0px"), n.find(".mejs-time-handle").css("left", "0px"), n.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)), n.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)), i.find(".mejs-poster").show())
            })
        }
    })
}(mejs.$),
function (e) {
    e.extend(MediaElementPlayer.prototype, {
        buildprogress: function (t, n, i, r) {
            e('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(n), n.find(".mejs-time-buffering").hide();
            var o = this,
                a = n.find(".mejs-time-total"),
                s = n.find(".mejs-time-loaded"),
                l = n.find(".mejs-time-current"),
                u = n.find(".mejs-time-handle"),
                c = n.find(".mejs-time-float"),
                d = n.find(".mejs-time-float-current"),
                h = function (e) {
                    var t = e.pageX,
                        n = a.offset(),
                        i = a.outerWidth(!0),
                        o = 0,
                        s = 0,
                        l = 0;
                    r.duration && (n.left > t ? t = n.left : t > i + n.left && (t = i + n.left), l = t - n.left, o = l / i, s = .02 >= o ? 0 : o * r.duration, f && s !== r.currentTime && r.setCurrentTime(s), mejs.MediaFeatures.hasTouch || (c.css("left", l), d.html(mejs.Utility.secondsToTimeCode(s)), c.show()))
                }, f = !1,
                p = !1;
            a.bind("mousedown", function (e) {
                return 1 === e.which ? (f = !0, h(e), o.globalBind("mousemove.dur", function (e) {
                    h(e)
                }), o.globalBind("mouseup.dur", function () {
                    f = !1, c.hide(), o.globalUnbind(".dur")
                }), !1) : void 0
            }).bind("mouseenter", function () {
                p = !0, o.globalBind("mousemove.dur", function (e) {
                    h(e)
                }), mejs.MediaFeatures.hasTouch || c.show()
            }).bind("mouseleave", function () {
                p = !1, f || (o.globalUnbind(".dur"), c.hide())
            }), r.addEventListener("progress", function (e) {
                t.setProgressRail(e), t.setCurrentRail(e)
            }, !1), r.addEventListener("timeupdate", function (e) {
                t.setProgressRail(e), t.setCurrentRail(e)
            }, !1), o.loaded = s, o.total = a, o.current = l, o.handle = u
        },
        setProgressRail: function (e) {
            var t = this,
                n = void 0 != e ? e.target : t.media,
                i = null;
            n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? i = n.buffered.end(0) / n.duration : n && void 0 != n.bytesTotal && n.bytesTotal > 0 && void 0 != n.bufferedBytes ? i = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 != e.total && (i = e.loaded / e.total), null !== i && (i = Math.min(1, Math.max(0, i)), t.loaded && t.total && t.loaded.width(t.total.width() * i))
        },
        setCurrentRail: function () {
            var e = this;
            if (void 0 != e.media.currentTime && e.media.duration && e.total && e.handle) {
                var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
                    n = t - Math.round(e.handle.outerWidth(!0) / 2);
                e.current.width(t), e.handle.css("left", n)
            }
        }
    })
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: " <span> | </span> "
    }), e.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (t, n, i, r) {
            var o = this;
            e('<div class="mejs-time"><span class="mejs-currenttime">' + (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span>" + "</div>").appendTo(n), o.currenttime = o.controls.find(".mejs-currenttime"), r.addEventListener("timeupdate", function () {
                t.updateCurrent()
            }, !1)
        },
        buildduration: function (t, n, i, r) {
            var o = this;
            n.children().last().find(".mejs-currenttime").length > 0 ? e(o.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (o.options.duration > 0 ? mejs.Utility.secondsToTimeCode(o.options.duration, o.options.alwaysShowHours || o.media.duration > 3600, o.options.showTimecodeFrameCount, o.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(n.find(".mejs-time")) : (n.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (o.options.duration > 0 ? mejs.Utility.secondsToTimeCode(o.options.duration, o.options.alwaysShowHours || o.media.duration > 3600, o.options.showTimecodeFrameCount, o.options.framesPerSecond || 25) : (t.options.alwaysShowHours ? "00:" : "") + (t.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>" + "</div>").appendTo(n)), o.durationD = o.controls.find(".mejs-duration"), r.addEventListener("timeupdate", function () {
                t.updateDuration()
            }, !1)
        },
        updateCurrent: function () {
            var e = this;
            e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(e.media.currentTime, e.options.alwaysShowHours || e.media.duration > 3600, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
        },
        updateDuration: function () {
            var e = this;
            e.container.toggleClass("mejs-long-video", e.media.duration > 3600), e.durationD && (e.options.duration > 0 || e.media.duration) && e.durationD.html(mejs.Utility.secondsToTimeCode(e.options.duration > 0 ? e.options.duration : e.media.duration, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
        }
    })
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        muteText: "Mute Toggle",
        hideVolumeOnTouchDevices: !0,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    }), e.extend(MediaElementPlayer.prototype, {
        buildvolume: function (t, n, i, r) {
            if (!mejs.MediaFeatures.hasTouch || !this.options.hideVolumeOnTouchDevices) {
                var o = this,
                    a = o.isVideo ? o.options.videoVolume : o.options.audioVolume,
                    s = "horizontal" == a ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '"></button>' + "</div>" + '<div class="mejs-horizontal-volume-slider">' + '<div class="mejs-horizontal-volume-total"></div>' + '<div class="mejs-horizontal-volume-current"></div>' + '<div class="mejs-horizontal-volume-handle"></div>' + "</div>").appendTo(n) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '"></button>' + '<div class="mejs-volume-slider">' + '<div class="mejs-volume-total"></div>' + '<div class="mejs-volume-current"></div>' + '<div class="mejs-volume-handle"></div>' + "</div>" + "</div>").appendTo(n),
                    l = o.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    u = o.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    c = o.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    d = o.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    h = function (e, t) {
                        if (!l.is(":visible") && "undefined" == typeof t) return l.show(), h(e, !0), l.hide(), void 0;
                        if (e = Math.max(0, e), e = Math.min(e, 1), 0 == e ? s.removeClass("mejs-mute").addClass("mejs-unmute") : s.removeClass("mejs-unmute").addClass("mejs-mute"), "vertical" == a) {
                            var n = u.height(),
                                i = u.position(),
                                r = n - n * e;
                            d.css("top", Math.round(i.top + r - d.height() / 2)), c.height(n - r), c.css("top", i.top + r)
                        } else {
                            var o = u.width(),
                                i = u.position(),
                                f = o * e;
                            d.css("left", Math.round(i.left + f - d.width() / 2)), c.width(Math.round(f))
                        }
                    }, f = function (e) {
                        var t = null,
                            n = u.offset();
                        if ("vertical" == a) {
                            var i = u.height(),
                                o = (parseInt(u.css("top").replace(/px/, ""), 10), e.pageY - n.top);
                            if (t = (i - o) / i, 0 == n.top || 0 == n.left) return
                        } else {
                            var s = u.width(),
                                l = e.pageX - n.left;
                            t = l / s
                        }
                        t = Math.max(0, t), t = Math.min(t, 1), h(t), 0 == t ? r.setMuted(!0) : r.setMuted(!1), r.setVolume(t)
                    }, p = !1,
                    m = !1;
                s.hover(function () {
                    l.show(), m = !0
                }, function () {
                    m = !1, p || "vertical" != a || l.hide()
                }), l.bind("mouseover", function () {
                    m = !0
                }).bind("mousedown", function (e) {
                    return f(e), o.globalBind("mousemove.vol", function (e) {
                        f(e)
                    }), o.globalBind("mouseup.vol", function () {
                        p = !1, o.globalUnbind(".vol"), m || "vertical" != a || l.hide()
                    }), p = !0, !1
                }), s.find("button").click(function () {
                    r.setMuted(!r.muted)
                }), r.addEventListener("volumechange", function () {
                    p || (r.muted ? (h(0), s.removeClass("mejs-mute").addClass("mejs-unmute")) : (h(r.volume), s.removeClass("mejs-unmute").addClass("mejs-mute")))
                }, !1), o.container.is(":visible") && (h(t.options.startVolume), 0 === t.options.startVolume && r.setMuted(!0), "native" === r.pluginType && r.setVolume(t.options.startVolume))
            }
        }
    })
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        usePluginFullScreen: !0,
        newWindowCallback: function () {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    }), e.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        docStyleOverflow: null,
        isInIframe: !1,
        buildfullscreen: function (t, n, i, r) {
            if (t.isVideo) {
                if (t.isInIframe = window.location != window.parent.location, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    var o = function () {
                        mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0, t.setControlsSize()) : (t.isNativeFullScreen = !1, t.exitFullScreen())
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? t.globalBind(mejs.MediaFeatures.fullScreenEventName, o) : t.container.bind(mejs.MediaFeatures.fullScreenEventName, o)
                }
                var a = this,
                    s = (t.container, e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + a.id + '" title="' + a.options.fullscreenText + '"></button>' + "</div>").appendTo(n));
                if ("native" === a.media.pluginType || !a.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) s.click(function () {
                        var e = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen;
                        e ? t.exitFullScreen() : t.enterFullScreen()
                    });
                else {
                    var l = null,
                        u = function () {
                            var e, t = document.createElement("x"),
                                n = document.documentElement,
                                i = window.getComputedStyle;
                            return "pointerEvents" in t.style ? (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = i && "auto" === i(t, "").pointerEvents, n.removeChild(t), !! e) : !1
                        }();
                    if (u && !mejs.MediaFeatures.isOpera) {
                        var c = !1,
                            d = function () {
                                c && (h.hide(), f.hide(), p.hide(), s.css("pointer-events", ""), a.controls.css("pointer-events", ""), c = !1)
                            }, h = e('<div class="mejs-fullscreen-hover" />').appendTo(a.container).mouseover(d),
                            f = e('<div class="mejs-fullscreen-hover"  />').appendTo(a.container).mouseover(d),
                            p = e('<div class="mejs-fullscreen-hover"  />').appendTo(a.container).mouseover(d),
                            m = function () {
                                var e = {
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                };
                                h.css(e), f.css(e), p.css(e), h.width(a.container.width()).height(a.container.height() - a.controls.height());
                                var t = s.offset().left - a.container.offset().left;
                                fullScreenBtnWidth = s.outerWidth(!0), f.width(t).height(a.controls.height()).css({
                                    top: a.container.height() - a.controls.height()
                                }), p.width(a.container.width() - t - fullScreenBtnWidth).height(a.controls.height()).css({
                                    top: a.container.height() - a.controls.height(),
                                    left: t + fullScreenBtnWidth
                                })
                            };
                        a.globalBind("resize", function () {
                            m()
                        }), s.mouseover(function () {
                            if (!a.isFullScreen) {
                                var e = s.offset(),
                                    n = t.container.offset();
                                r.positionFullscreenButton(e.left - n.left, e.top - n.top, !1), s.css("pointer-events", "none"), a.controls.css("pointer-events", "none"), h.show(), p.show(), f.show(), m(), c = !0
                            }
                        }), r.addEventListener("fullscreenchange", function () {
                            d()
                        })
                    } else s.mouseover(function () {
                            null !== l && (clearTimeout(l), delete l);
                            var e = s.offset(),
                                n = t.container.offset();
                            r.positionFullscreenButton(e.left - n.left, e.top - n.top, !0)
                        }).mouseout(function () {
                            null !== l && (clearTimeout(l), delete l), l = setTimeout(function () {
                                r.hideFullscreenButton()
                            }, 1500)
                        })
                }
                t.fullscreenBtn = s, a.globalBind("keydown", function (e) {
                    (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || a.isFullScreen) && 27 == e.keyCode && t.exitFullScreen()
                })
            }
        },
        cleanfullscreen: function (e) {
            e.exitFullScreen()
        },
        enterFullScreen: function () {
            var t = this;
            if ("native" === t.media.pluginType || !mejs.MediaFeatures.isFirefox && !t.options.usePluginFullScreen) {
                if (docStyleOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", normalHeight = t.container.height(), normalWidth = t.container.width(), "native" === t.media.pluginType) if (mejs.MediaFeatures.hasTrueNativeFullScreen) mejs.MediaFeatures.requestFullScreen(t.container[0]), t.isInIframe && setTimeout(function n() {
                            t.isNativeFullScreen && (e(window).width() !== screen.width ? t.exitFullScreen() : setTimeout(n, 500))
                        }, 500);
                    else if (mejs.MediaFeatures.hasSemiNativeFullScreen) return t.media.webkitEnterFullscreen(), void 0;
                if (t.isInIframe) {
                    var i = t.options.newWindowCallback(this);
                    if ("" !== i) {
                        if (!mejs.MediaFeatures.hasTrueNativeFullScreen) return t.pause(), window.open(i, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"), void 0;
                        setTimeout(function () {
                            t.isNativeFullScreen || (t.pause(), window.open(i, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                        }, 250)
                    }
                }
                t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), setTimeout(function () {
                    t.container.css({
                        width: "100%",
                        height: "100%"
                    }), t.setControlsSize()
                }, 500), "native" === t.pluginType ? t.$media.width("100%").height("100%") : (t.container.find(".mejs-shim").width("100%").height("100%"), t.media.setVideoSize(e(window).width(), e(window).height())), t.layers.children("div").width("100%").height("100%"), t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), t.setControlsSize(), t.isFullScreen = !0
            }
        },
        exitFullScreen: function () {
            var e = this;
            return "native" !== e.media.pluginType && mejs.MediaFeatures.isFirefox ? (e.media.setFullscreen(!1), void 0) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || e.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), document.documentElement.style.overflow = docStyleOverflow, e.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), "native" === e.pluginType ? e.$media.width(normalWidth).height(normalHeight) : (e.container.find("object embed").width(normalWidth).height(normalHeight), e.media.setVideoSize(normalWidth, normalHeight)), e.layers.children("div").width(normalWidth).height(normalHeight), e.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), e.setControlsSize(), e.isFullScreen = !1, void 0)
        }
    })
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: "Captions/Subtitles",
        hideCaptionsButtonWhenEmpty: !0,
        toggleCaptionsButtonWhenOnlyOne: !1,
        slidesSelector: ""
    }), e.extend(MediaElementPlayer.prototype, {
        hasChapters: !1,
        buildtracks: function (t, n, i, r) {
            if (t.isVideo && 0 != t.tracks.length) {
                var o, a = this;
                t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(i).hide(), t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(i).hide(), t.captionsText = t.captions.find(".mejs-captions-text"), t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + a.id + '" title="' + a.options.tracksText + '"></button>' + '<div class="mejs-captions-selector">' + "<ul>" + "<li>" + '<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" />' + '<label for="' + t.id + '_captions_none">None</label>' + "</li>" + "</ul>" + "</div>" + "</div>").appendTo(n);
                var s = 0;
                for (o = 0; t.tracks.length > o; o++) "subtitles" == t.tracks[o].kind && s++;
                for (a.options.toggleCaptionsButtonWhenOnlyOne && 1 == s ? t.captionsButton.on("click", function () {
                    if (null == t.selectedTrack) var e = t.tracks[0].srclang;
                    else var e = "none";
                    t.setTrack(e)
                }) : t.captionsButton.hover(function () {
                    e(this).find(".mejs-captions-selector").css("visibility", "visible")
                }, function () {
                    e(this).find(".mejs-captions-selector").css("visibility", "hidden")
                }).on("click", "input[type=radio]", function () {
                    lang = this.value, t.setTrack(lang)
                }), t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function () {
                    t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function () {
                    r.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                }), t.trackToLoad = -1, t.selectedTrack = null, t.isLoadingTrack = !1, o = 0; t.tracks.length > o; o++) "subtitles" == t.tracks[o].kind && t.addTrackButton(t.tracks[o].srclang, t.tracks[o].label);
                t.loadNextTrack(), r.addEventListener("timeupdate", function () {
                    t.displayCaptions()
                }, !1), "" != t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector), r.addEventListener("timeupdate", function () {
                    t.displaySlides()
                }, !1)), r.addEventListener("loadedmetadata", function () {
                    t.displayChapters()
                }, !1), t.container.hover(function () {
                    t.hasChapters && (t.chapters.css("visibility", "visible"), t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()))
                }, function () {
                    t.hasChapters && !r.paused && t.chapters.fadeOut(200, function () {
                        e(this).css("visibility", "hidden"), e(this).css("display", "block")
                    })
                }), null !== t.node.getAttribute("autoplay") && t.chapters.css("visibility", "hidden")
            }
        },
        setTrack: function (e) {
            var t, n = this;
            if ("none" == e) n.selectedTrack = null, n.captionsButton.removeClass("mejs-captions-enabled");
            else for (t = 0; n.tracks.length > t; t++) if (n.tracks[t].srclang == e) {
                        null == n.selectedTrack && n.captionsButton.addClass("mejs-captions-enabled"), n.selectedTrack = n.tracks[t], n.captions.attr("lang", n.selectedTrack.srclang), n.displayCaptions();
                        break
                    }
        },
        loadNextTrack: function () {
            var e = this;
            e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
        },
        loadTrack: function (t) {
            var n = this,
                i = n.tracks[t],
                r = function () {
                    i.isLoaded = !0, n.enableTrackButton(i.srclang, i.label), n.loadNextTrack()
                };
            e.ajax({
                url: i.src,
                dataType: "text",
                success: function (e) {
                    i.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? mejs.TrackFormatParser.dfxp.parse(e) : mejs.TrackFormatParser.webvvt.parse(e), r(), "chapters" == i.kind && n.media.addEventListener("play", function () {
                        n.media.duration > 0 && n.displayChapters(i)
                    }, !1), "slides" == i.kind && n.setupSlides(i)
                },
                error: function () {
                    n.loadNextTrack()
                }
            })
        },
        enableTrackButton: function (t, n) {
            var i = this;
            "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(n), i.options.startLanguage == t && e("#" + i.id + "_captions_" + t).click(), i.adjustLanguageBox()
        },
        addTrackButton: function (t, n) {
            var i = this;
            "" === n && (n = mejs.language.codes[t] || t), i.captionsButton.find("ul").append(e('<li><input type="radio" name="' + i.id + '_captions" id="' + i.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" />' + '<label for="' + i.id + "_captions_" + t + '">' + n + " (loading)" + "</label>" + "</li>")), i.adjustLanguageBox(), i.container.find(".mejs-captions-translations option[value=" + t + "]").remove()
        },
        adjustLanguageBox: function () {
            var e = this;
            e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
        },
        checkForTracks: function () {
            var e = this,
                t = !1;
            if (e.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; e.tracks.length > i; i++) if ("subtitles" == e.tracks[i].kind) {
                        t = !0;
                        break
                    }
                t || (e.captionsButton.hide(), e.setControlsSize())
            }
        },
        displayCaptions: function () {
            if ("undefined" != typeof this.tracks) {
                var e, t = this,
                    n = t.selectedTrack;
                if (null != n && n.isLoaded) {
                    for (e = 0; n.entries.times.length > e; e++) if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return t.captionsText.html(n.entries.text[e]), t.captions.show().height(0), void 0;
                    t.captions.hide()
                } else t.captions.hide()
            }
        },
        setupSlides: function (e) {
            var t = this;
            t.slides = e, t.slides.entries.imgs = [t.slides.entries.text.length], t.showSlide(0)
        },
        showSlide: function (t) {
            if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                var n = this,
                    i = n.slides.entries.text[t],
                    r = n.slides.entries.imgs[t];
                "undefined" == typeof r || "undefined" == typeof r.fadeIn ? n.slides.entries.imgs[t] = r = e('<img src="' + i + '">').on("load", function () {
                    r.appendTo(n.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                }) : r.is(":visible") || r.is(":animated") || (console.log("showing existing slide"), r.fadeIn().siblings(":visible").fadeOut())
            }
        },
        displaySlides: function () {
            if ("undefined" != typeof this.slides) {
                var e, t = this,
                    n = t.slides;
                for (e = 0; n.entries.times.length > e; e++) if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return t.showSlide(e), void 0
            }
        },
        displayChapters: function () {
            var e, t = this;
            for (e = 0; t.tracks.length > e; e++) if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
                    t.drawChapters(t.tracks[e]), t.hasChapters = !0;
                    break
                }
        },
        drawChapters: function (t) {
            var n, i, r = this,
                o = 0,
                a = 0;
            for (r.chapters.empty(), n = 0; t.entries.times.length > n; n++) i = t.entries.times[n].stop - t.entries.times[n].start, o = Math.floor(100 * (i / r.media.duration)), (o + a > 100 || n == t.entries.times.length - 1 && 100 > o + a) && (o = 100 - a), r.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[n].start + '" style="left: ' + a.toString() + "%;width: " + o.toString() + '%;">' + '<div class="mejs-chapter-block' + (n == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '">' + '<span class="ch-title">' + t.entries.text[n] + "</span>" + '<span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[n].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[n].stop) + "</span>" + "</div>" + "</div>")), a += o;
            r.chapters.find("div.mejs-chapter").click(function () {
                r.media.setCurrentTime(parseFloat(e(this).attr("rel"))), r.media.paused && r.media.play()
            }), r.chapters.show()
        }
    }), mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    }, mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (t) {
                for (var n, i, r = 0, o = mejs.TrackFormatParser.split2(t, /\r?\n/), a = {
                        text: [],
                        times: []
                    }; o.length > r; r++) if (this.pattern_identifier.exec(o[r]) && (r++, n = this.pattern_timecode.exec(o[r]), n && o.length > r)) {
                        for (r++, i = o[r], r++;
                        "" !== o[r] && o.length > r;) i = i + "\n" + o[r], r++;
                        i = e.trim(i).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), a.text.push(i), a.times.push({
                            start: 0 == mejs.Utility.convertSMPTEtoSeconds(n[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(n[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(n[3]),
                            settings: n[5]
                        })
                    }
                return a
            }
        },
        dfxp: {
            parse: function (t) {
                t = e(t).filter("tt");
                var n, i, r = 0,
                    o = t.children("div").eq(0),
                    a = o.find("p"),
                    s = t.find("#" + o.attr("style")),
                    l = {
                        text: [],
                        times: []
                    };
                if (s.length) {
                    var u = s.removeAttr("id").get(0).attributes;
                    if (u.length) for (n = {}, r = 0; u.length > r; r++) n[u[r].name.split(":")[1]] = u[r].value
                }
                for (r = 0; a.length > r; r++) {
                    var c, d = {
                            start: null,
                            stop: null,
                            style: null
                        };
                    if (a.eq(r).attr("begin") && (d.start = mejs.Utility.convertSMPTEtoSeconds(a.eq(r).attr("begin"))), !d.start && a.eq(r - 1).attr("end") && (d.start = mejs.Utility.convertSMPTEtoSeconds(a.eq(r - 1).attr("end"))), a.eq(r).attr("end") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(a.eq(r).attr("end"))), !d.stop && a.eq(r + 1).attr("begin") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(a.eq(r + 1).attr("begin"))), n) {
                        c = "";
                        for (var h in n) c += h + ":" + n[h] + ";"
                    }
                    c && (d.style = c), 0 == d.start && (d.start = .2), l.times.push(d), i = e.trim(a.eq(r).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), l.text.push(i), 0 == l.times.start && (l.times.start = 2)
                }
                return l
            }
        },
        split2: function (e, t) {
            return e.split(t)
        }
    }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function (e, t) {
        var n, i = [],
            r = "";
        for (n = 0; e.length > n; n++) r += e.substring(n, n + 1), t.test(r) && (i.push(r.replace(t, "")), r = "");
        return i.push(r), i
    })
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        contextMenuItems: [{
                render: function (e) {
                    return "undefined" == typeof e.enterFullScreen ? null : e.isFullScreen ? "Turn off Fullscreen" : "Go Fullscreen"
                },
                click: function (e) {
                    e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
                }
            }, {
                render: function (e) {
                    return e.media.muted ? "Unmute" : "Mute"
                },
                click: function (e) {
                    e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                }
            }, {
                isSeparator: !0
            }, {
                render: function () {
                    return "Download Video"
                },
                click: function (e) {
                    window.location.href = e.media.currentSrc
                }
            }
        ]
    }), e.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (t) {
            t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(), t.container.bind("contextmenu", function (e) {
                return t.isContextMenuEnabled ? (e.preventDefault(), t.renderContextMenu(e.clientX - 1, e.clientY - 1), !1) : void 0
            }), t.container.bind("click", function () {
                t.contextMenu.hide()
            }), t.contextMenu.bind("mouseleave", function () {
                t.startContextMenuTimer()
            })
        },
        cleancontextmenu: function (e) {
            e.contextMenu.remove()
        },
        isContextMenuEnabled: !0,
        enableContextMenu: function () {
            this.isContextMenuEnabled = !0
        },
        disableContextMenu: function () {
            this.isContextMenuEnabled = !1
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
            var e = this;
            e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function () {
                e.hideContextMenu(), e.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function () {
            var e = this.contextMenuTimer;
            null != e && (clearTimeout(e), delete e, e = null)
        },
        hideContextMenu: function () {
            this.contextMenu.hide()
        },
        renderContextMenu: function (t, n) {
            for (var i = this, r = "", o = i.options.contextMenuItems, a = 0, s = o.length; s > a; a++) if (o[a].isSeparator) r += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var l = o[a].render(i);
                    null != l && (r += '<div class="mejs-contextmenu-item" data-itemindex="' + a + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>")
                }
            i.contextMenu.empty().append(e(r)).css({
                top: n,
                left: t
            }).show(), i.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var t = e(this),
                    n = parseInt(t.data("itemindex"), 10),
                    r = i.options.contextMenuItems[n];
                "undefined" != typeof r.show && r.show(t, i), t.click(function () {
                    "undefined" != typeof r.click && r.click(i), i.contextMenu.hide()
                })
            }), setTimeout(function () {
                i.killControlsTimer("rev3")
            }, 100)
        }
    })
}(mejs.$),
function (e) {
    e.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    }), e.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (t, n, i) {
            var r = this,
                o = r.container.find('link[rel="postroll"]').attr("href");
            "undefined" != typeof o && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + r.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(i).hide(), r.media.addEventListener("ended", function () {
                e.ajax({
                    dataType: "html",
                    url: o,
                    success: function (e) {
                        i.find(".mejs-postroll-layer-content").html(e)
                    }
                }), t.postroll.show()
            }, !1))
        }
    })
}(mejs.$),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.onSelectChange = t(this.onSelectChange, this), this.setOptions = t(this.setOptions, this), this.onUnfocus = t(this.onUnfocus, this), this.onSelectClick = t(this.onSelectClick, this), this.onOptionClick = t(this.onOptionClick, this), this.setSelected = t(this.setSelected, this), this.select = $(e), this.select.on("change", this.onSelectChange), this.container = $("<div class='dd-container'>"), this.container.delegate("li .dd-option", "click", this.onOptionClick), this.container.delegate(".dd-select", "click", this.onSelectClick), this.container.insertAfter(this.select), $(document.body).on("click", this.onUnfocus), this.select.hide(), this.onSelectChange()
        }
        return e.prototype.setSelected = function () {
            var e, t;
            return t = this.select.find("option:selected"), e = $("<div>").addClass("dd-select").append(this.divForOption(t).addClass("dd-selected")).append('<span class="dd-pointer dd-pointer-down"></span>'), this.container.append(e)
        }, e.prototype.onOptionClick = function (e) {
            var t;
            return t = $(e.currentTarget), this.select.val(t.data("value")).change()
        }, e.prototype.onSelectClick = function (e) {
            var t;
            return t = this.container.find("ul"), t.is(":visible") ? void 0 : (e.stopPropagation(), $(e.currentTarget).trigger("open"), t.slideDown("fast").find("dd-pointer").removeClass("dd-pointer-down").addClass("dd-pointer-up"))
        }, e.prototype.onUnfocus = function () {
            var e;
            return e = this.container.find("ul"), e.is(":visible") ? (this.container.find(".dd-select").trigger("close"), e.hide().find("dd-pointer").removeClass("dd-pointer-up").addClass("dd-pointer-down")) : void 0
        }, e.prototype.setOptions = function () {
            var e, t, n, i, r, o;
            for (n = $("<ul>").addClass("dd-options dd-click-off-close"), o = this.select.find("option[value]").not(":first-child"), i = 0, r = o.length; r > i; i++) t = o[i], e = this.divForOption(t).toggleClass("dd-option-selected", $(t).is(":selected")).addClass("dd-option"), n.append($("<li>").append(e));
            return this.container.append(n)
        }, e.prototype.divForOption = function (e) {
            var t;
            return e = $(e), t = $('<a>\n  <label class="dd-option-text ' + (e.is(":first-child") ? "dd-placeholder" : "") + '">' + e.text() + "</label>\n</a>"), t.data("value", e.val()), e.data("skillLevel") && t.prepend('<span class="dd-desc">' + e.data("skillLevel") + "</span>"), e.data("imagesrc") && t.prepend('<img class="dd-option-image" src="' + e.data("imagesrc") + '"> '), t
        }, e.prototype.onSelectChange = function () {
            return this.container.empty(), this.setSelected(), this.setOptions(), this.container.find(".dd-select").trigger("close")
        }, e
    }(), window.Slick = e
}.call(this),
function () {
    var e;
    e = function () {
        function e() {}
        return e.version = "1.0.0", e.registered_features = {}, e.featurettes = {}, e.featurettes_counter = 0, e.register = function (e, t) {
            return this.registered_features[e] = t
        }, e.load = function () {
            var e, t, n, i, r, o, a, s, l;
            for (s = $(".featurette"), l = [], o = 0, a = s.length; a > o; o++) e = s[o], t = e.getAttribute("data-featurette"), i = this.registered_features[t], i ? (n = e.id, (null == n || "" === n) && (n = "featurette-" + this.featurettes_counter, e.id = n), r = new i(e), this.featurettes[n] = r, l.push(this.featurettes_counter += 1)) : l.push(void 0);
            return l
        }, e.get = function (e) {
            return this.featurettes[e]
        }, e.getElementsByClass = function (e) {
            var t, n, i, r, o, a;
            if (document.getElementsByClassName) t = document.getElementsByClassName(e);
            else for (t = new Array, i = document.getElementsByTagName("*"), r = new RegExp("(^|\\s)" + e + "(\\s|$)"), o = 0, a = i.length; a > o; o++) n = i[o], r.test(n.className) && t.push(n);
            return t
        }, e
    }(), window.Featurette = e
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t;
            t = $(e), t.submit(function () {
                var e;
                return e = t.find("input[type='submit']"), e.attr("disabled", "true").val("Working..."), $.ajax({
                    url: t.attr("action"),
                    type: "POST",
                    data: t.serialize(),
                    headers: {
                        "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
                    },
                    beforeSend: function () {
                        return t.find(".error").remove()
                    },
                    success: function () {
                        return t.empty(), t.append('<p class="success">' + t.attr("data-success-message") + "</p>")
                    },
                    error: function (n) {
                        return e.removeAttr("disabled").val("Subscribe"), t.append('<p class="error">' + n.responseText + "</p>")
                    }
                }), !1
            })
        }
        return e
    }(), Featurette.register("ajax-form", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t;
            t = $(e), t.click(function () {
                return window._gaq.push(["_trackEvent", t.attr("data-category"), t.attr("data-action"), t.attr("data-label"), t.attr("data-value")])
            })
        }
        return e
    }(), Featurette.register("analytics-event-link", e)
}.call(this),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    this.CodeChallenge || (this.CodeChallenge = {}), CodeChallenge.Base = function () {
        function t(t) {
            var n, i = this;
            this.el = t, this.acceptIncomingMessage = e(this.acceptIncomingMessage, this), this.handleEngineStatusUpdate = e(this.handleEngineStatusUpdate, this), this.handleEngineEvent = e(this.handleEngineEvent, this), this.handleTimeoutError = e(this.handleTimeoutError, this), this.submit = e(this.submit, this), this.goToTask = e(this.goToTask, this), this.el = $(this.el), n = this.el.data("challenge"), this.tasks = n.tasks, this.currentTask = 0, this.lastTaskPassed = 0, this.timeoutDelay = 1e3 * n.timeout, this.timeoutId = null, this.isPreview = n.admin_preview, this.workspace = new CodeChallenge.WorkspaceView(this.el.find(".cc-workspace")), this.instructions = new CodeChallenge.InstructionView(this.el.find("#instructions"), this.tasks, this.el.data("badge-url")), this.feedback = new CodeChallenge.FeedbackView(this.el.find("#feedback"), this.submit, this.goToTask), this.preview = new CodeChallenge.PreviewView(this.el.find(".cc-preview-view"), this.submit), this.engineListener = new CodeChallenge.EngineListener(n.uuid, this.acceptIncomingMessage, {
                event: this.handleEngineEvent,
                engine_update: this.handleEngineStatusUpdate,
                connect: function () {
                    return n.no_preview ? void 0 : i.submit()
                }
            }), this.submitter = new CodeChallenge.Submitter(this.el.data("submit-path"), n.uuid, n.challenge_id, this.timeoutDelay, n.queue_name), this.goToTask(1)
        }
        return t.prototype.goToTask = function (e) {
            var t;
            return this.currentTask = e, t = Math.max(e, this.lastTaskPassed), this.instructions.update(e), this.feedback["default"](t)
        }, t.prototype.submit = function (e) {
            var t;
            return t = this.listenForMessages(), this.submitter.submit(t, this.workspace.getFiles(), e), this.timeoutId = setTimeout(this.handleTimeoutError, this.timeoutDelay)
        }, t.prototype.handleTimeoutError = function () {
            return this.rejectMessages(), this.genericErrorMessage("Timeout Error"), this.feedback.resetButton(), this.preview.resetButton()
        }, t.prototype.handleEngineEvent = function (e) {
            var t;
            return this.rejectMessages(), e.pass ? e.task === this.tasks.length ? (this.feedback.finished(), this.isPreview !== !0 && this.completeChallenge()) : (e.task > this.lastTaskPassed && (this.lastTaskPassed = e.task), this.feedback.correct(e.feedback, e.task + 1)) : e.pass === !1 && (e.task <= this.lastTaskPassed && e.task !== this.currentTask ? this.feedback.inactiveTaskFailed(e.task, e.up_to) : this.feedback.wrong(e.feedback, e.up_to)), clearTimeout(this.timeoutId), this.preview.update(null != (t = e.preview_urls) ? t[0] : void 0), "run" === e.target && this.preview.resetButton(), "test" === e.target ? this.feedback.resetButton() : void 0
        }, t.prototype.handleEngineStatusUpdate = function (e) {
            var t;
            return t = "run" === e.target ? this.preview.updateButton(e.text) : this.feedback.updateButton(e.text)
        }, t.prototype.listenForMessages = function () {
            var e, t;
            return null == (e = this.messageId) && (this.messageId = 0), null == (t = this.totalMessages) && (this.totalMessages = 0), this.totalMessages += 1, this.messageId = this.totalMessages
        }, t.prototype.acceptIncomingMessage = function (e) {
            return parseInt(e.message_id, 10) === this.messageId
        }, t.prototype.rejectMessages = function () {
            return this.messageId = null
        }, t.prototype.completeChallenge = function () {
            var e = this;
            return $.ajax({
                type: "POST",
                url: this.el.data("completed-path"),
                data: {
                    _method: "PUT"
                },
                success: function (t) {
                    return "Badge awarded!" !== t.message ? Featurette.get("challenge-completed-modal").showOverlay() : (Featurette.get("badge-modal").showOverlay(), t.video ? ($("#badge-modal").find(".modal").removeClass("two-quarter").addClass("four-quarter"), $("#rewardVideoViewer").html(t.video), $("#rewardVideo").show(), e.player = new MediaElementPlayer($("#player"))) : void 0)
                },
                error: function (t, n, i) {
                    return e.genericErrorMessage(i)
                }
            })
        }, t.prototype.genericErrorMessage = function (e) {
            return Bugsnag.notify("EngineError", e), alert("There was a problem connecting to the Code Challenge Engine. If this problem persists, please contact support at help@teamtreehouse.com.")
        }, t
    }(), Featurette.register("code-challenge", CodeChallenge.Base)
}.call(this),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    this.CodeChallenge || (this.CodeChallenge = {}), CodeChallenge.CommandChallenge = function () {
        function t(t) {
            var n;
            this.el = t, this.acceptIncomingMessage = e(this.acceptIncomingMessage, this), this.acceptIncomingMessage = e(this.acceptIncomingMessage, this), this.retryCurrentTask = e(this.retryCurrentTask, this), this.goToNextTask = e(this.goToNextTask, this), this.handleEngineEvent = e(this.handleEngineEvent, this), this.handleTimeoutError = e(this.handleTimeoutError, this), this.submit = e(this.submit, this), this.el = $(this.el), n = this.el.data("challenge"), this.tasks = n.tasks, this.currentTask = 1, this.lastTaskPassed = 0, this.timeoutDelay = 1e3 * n.timeout, this.timeoutId = null, this.badgeUrl = this.el.data("badge-url"), this.addViewForCurrentTask(), this.engineListener = new CodeChallenge.EngineListener(n.uuid, this.acceptIncomingMessage, {
                event: this.handleEngineEvent
            }), this.submitter = new CodeChallenge.Submitter(this.el.data("submit-path"), n.uuid, n.challenge_id, this.timeoutDelay, n.queue_name)
        }
        return t.prototype.submit = function (e, t) {
            var n;
            return n = this.listenForMessages(), this.submitter.submit(n, [], e, t), this.timeoutId = setTimeout(this.handleTimeoutError, this.timeoutDelay)
        }, t.prototype.handleTimeoutError = function () {
            return this.rejectMessages(), this.genericErrorMessage()
        }, t.prototype.handleEngineEvent = function (e) {
            var t, n = this;
            return this.rejectMessages(), e.pass ? e.task === this.tasks.length ? this.completeChallenge() : (this.lastTaskPassed = e.task, this.taskView.correct(e.feedback), $(".cc-goto").click(function () {
                return n.goToNextTask()
            })) : (this.taskView.wrong(e.feedback), $(".cc-test").click(function () {
                return n.retryCurrentTask()
            })), this.taskView.displayResults(null != (t = e.preview_urls) ? t[0] : void 0), clearTimeout(this.timeoutId)
        }, t.prototype.goToNextTask = function () {
            return this.taskView.hideResults(this.lastTaskPassed, $(".hide-results")), $(".cc-goto").remove(), this.currentTask = this.lastTaskPassed + 1, this.addViewForCurrentTask()
        }, t.prototype.retryCurrentTask = function () {
            return $("#" + this.el.attr("id") + " .task_view").last().remove(), this.addViewForCurrentTask()
        }, t.prototype.listenForMessages = function () {
            var e, t;
            return null == (e = this.messageId) && (this.messageId = 0), null == (t = this.totalMessages) && (this.totalMessages = 0), this.totalMessages += 1, this.messageId = this.totalMessages
        }, t.prototype.addViewForCurrentTask = function () {
            return this.taskView = new CodeChallenge.CommandTaskView(this.el, this.tasks[this.currentTask - 1], this.currentTask, this.tasks.length, this.submit, this.badgeUrl)
        }, t.prototype.acceptIncomingMessage = function () {}, t.prototype.acceptIncomingMessage = function (e) {
            return parseInt(e.message_id, 10) === this.messageId
        }, t.prototype.rejectMessages = function () {
            return this.messageId = null
        }, t.prototype.completeChallenge = function () {
            var e = this;
            return $.ajax({
                type: "POST",
                url: this.el.data("completed-path"),
                data: {
                    _method: "PUT"
                },
                success: function (e) {
                    return "Badge awarded!" === e ? Featurette.get("badge-modal").showOverlay() : Featurette.get("challenge-completed-modal").showOverlay()
                },
                error: function () {
                    return e.genericErrorMessage
                }
            })
        }, t.prototype.genericErrorMessage = function () {
            return alert("There was a problem connecting to the Code Challenge Engine. If this problem persists, please contact support at help@teamtreehouse.com.")
        }, t
    }(), Featurette.register("command-challenge", CodeChallenge.CommandChallenge)
}.call(this),
function () {
    var e;
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.EngineListener = function () {
        function e(e, t, n) {
            var i, r, o, a;
            this.acceptIncoming = t, this.callbacks = n, o = {
                channel: e,
                subscribe_key: this.subKey,
                publish_key: this.pubKey,
                presence: !1,
                ssl: !0
            }, this.socket = io.connect("https://pubsub.pubnub.com/challenge", o), a = this.callbacks;
            for (r in a) i = a[r], this.bindEvent(r, i)
        }
        return e.prototype.subKey = "sub-e2de2b5c-13c2-11e2-b508-f53fda4cd93d", e.prototype.pubKey = "pub-b8a18d09-58e0-4ec4-acd5-67ce32d576cd", e.prototype.bindEvent = function (e, t) {
            var n = this;
            return this.socket.on(e, function (i) {
                return n.acceptIncoming(i) || "connect" === e ? t(i) : void 0
            })
        }, e
    }()
}.call(this),
function () {
    var e;
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.Submitter = function () {
        function e(e, t, n, i, r) {
            this.url = e, this.ajaxDefaultData = {
                uuid: t,
                challenge_id: n,
                queue_name: r
            }
        }
        return e.prototype.submit = function (e, t, n, i) {
            var r;
            return null == n && (n = null), null == i && (i = null), r = {
                message_id: e,
                task: n,
                files: t,
                command: i
            }, $.extend(r, this.ajaxDefaultData), $.ajax({
                type: "POST",
                url: this.url,
                data: r
            })
        }, e
    }()
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.CommandTaskView = function () {
        function e(e, n, i, r, o, a) {
            this.el = e, this.taskData = n, this.currentTask = i, this.totalTasks = r, this.submitForTestingCallback = o, this.badgeUrl = a, this.hideResults = t(this.hideResults, this), this.displayResults = t(this.displayResults, this), this.wrong = t(this.wrong, this), this.correct = t(this.correct, this), this.disableOtherTaskEntries = t(this.disableOtherTaskEntries, this), this.addNewTaskEntry = t(this.addNewTaskEntry, this), this.el = $(this.el), this.addNewTaskEntry()
        }
        return e.prototype.addNewTaskEntry = function () {
            var e, t, n, i, r = this;
            return this.disableOtherTaskEntries(), e = {
                taskData: this.taskData,
                currentTask: this.currentTask,
                totalTasks: this.totalTasks,
                badgeUrl: this.badgeUrl
            }, this.el.append(HoganTemplates["code_challenges/command_task"].render(e)), i = $("#" + this.el.attr("id") + " .task_view .terminal").last(), t = function (e, t) {
                return "" !== e ? (r.submitForTestingCallback(r.currentTask, e), t.pause(), t.echo("Checking your answer...")) : void 0
            }, n = i.terminal(t, {
                greetings: ""
            }, {
                width: "100%",
                prompt: "> "
            }), i.data("terminal", n)
        }, e.prototype.disableOtherTaskEntries = function () {
            return this.el.children(".task_view").addClass("inactive")
        }, e.prototype.correct = function (e) {
            var t;
            return t = $("#" + this.el.attr("id") + " .task_view #feedback").last(), t.html(HoganTemplates["code_challenges/command_feedback_correct"].render({
                feedback: e
            }))
        }, e.prototype.wrong = function (e) {
            var t;
            return t = $("#" + this.el.attr("id") + " .task_view #feedback").last(), t.html(HoganTemplates["code_challenges/command_feedback_wrong"].render({
                feedback: e
            }))
        }, e.prototype.displayResults = function (e) {
            var t, n, i, r = this;
            if (void 0 !== e && null !== e) return i = this.el.children(".task_view").last(), t = {
                    currentTask: this.currentTask,
                    url: e
            }, i.append(HoganTemplates["code_challenges/command_results"].render(t)), n = $(".hide-results").last(), n.click(function () {
                var e;
                return e = t.currentTask, r.hideResults(e, n)
            })
        }, e.prototype.hideResults = function (e, t) {
            var n = this;
            return $("#results-" + e).hide(), t.addClass("show-results"), t.removeClass("hide-results"), t.html("Show"), t.click(function () {
                return $("#results-" + e).show(), t.addClass("hide-results"), t.removeClass("show-results"), t.html("Hide"), t.click(function () {
                    return n.hideResults(e, t)
                })
            })
        }, e
    }()
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.EditorView = function () {
        function e(e) {
            this.handleCursorMove = t(this.handleCursorMove, this), this.codeMirror = CodeMirror.fromTextArea(e, {
                mode: $(e).data("editor-mode"),
                tabMode: "indent",
                tabSize: 2,
                lineNumbers: !0,
                theme: "solarized dark"
            }), this.codeMirror.on("cursorActivity", this.handleCursorMove), this.handleCursorMove()
        }
        return e.prototype.handleCursorMove = function () {
            var e, t;
            return t = this.highlightedLine, e = this.codeMirror.getCursor().line, t && this.codeMirror.removeLineClass(t, "background", "CodeMirror-activeline-background"), this.highlightedLine = this.codeMirror.addLineClass(e, "background", "CodeMirror-activeline-background")
        }, e.prototype.getValue = function () {
            return this.codeMirror.getValue()
        }, e
    }()
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.FeedbackView = function () {
        function e(e, n, i) {
            this.el = e, this.submitForTestingCallback = n, this.goToTaskCallback = i, this.goToTask = t(this.goToTask, this), this.testTask = t(this.testTask, this), this.el = $(this.el), this.el.on("click", ".cc-test", this.testTask), this.el.on("click", ".cc-goto", this.goToTask)
        }
        return e.prototype.testTask = function (e) {
            var t, n;
            return e.preventDefault(), t = $(e.target), t.hasClass("disabled") ? void 0 : ($(".cc-test, .cc-preview").addClass("disabled"), t.text("Working..."), n = t.data("task"), this.submitForTestingCallback(n))
        }, e.prototype.goToTask = function (e) {
            var t, n;
            return e.preventDefault(), t = $(e.target), t.hasClass("disabled") ? void 0 : (n = t.data("task"), this.goToTaskCallback(n))
        }, e.prototype.generateFeedback = function (e, t) {
            return null == t && (t = {}), HoganTemplates["code_challenges/feedback_" + e].render(t)
        }, e.prototype["default"] = function (e) {
            return this.el.html(this.generateFeedback("neutral", {
                task: e
            }))
        }, e.prototype.correct = function (e, t) {
            return this.el.html(this.generateFeedback("correct", {
                feedback: e,
                nextTask: t
            }))
        }, e.prototype.finished = function () {
            return this.el.html(this.generateFeedback("finished"))
        }, e.prototype.wrong = function (e, t) {
            return this.el.html(this.generateFeedback("wrong", {
                feedback: e,
                failedTask: t
            }))
        }, e.prototype.inactiveTaskFailed = function (e, t) {
            var n;
            return n = {
                failedTaskAsWord: this.numberToWord(e),
                failedTask: e,
                currentTask: t
            }, this.el.html(this.generateFeedback("inactive_task_failed", n))
        }, e.prototype.numberToWord = function (e) {
            var t;
            return t = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"], 11 > e ? t[e] : "#" + e
        }, e.prototype.resetButton = function () {
            var e;
            return e = this.el.find(".cc-test"), e.text(e.data("default-text")), $(".cc-test, .cc-preview").removeClass("disabled")
        }, e.prototype.updateButton = function (e) {
            return this.el.find(".cc-test").text(e)
        }, e
    }()
}.call(this),
function () {
    var e;
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.InstructionView = function () {
        function e(e, t, n) {
            this.el = e, this.taskInstructions = t, this.badgeImageUrl = n, this.el = $(this.el)
        }
        return e.prototype.update = function (e) {
            var t;
            return t = {
                task: e,
                body: this.taskInstructions[e - 1].body,
                totalTasks: this.taskInstructions.length,
                badgeImageUrl: this.badgeImageUrl
            }, this.el.html(HoganTemplates["code_challenges/instructions"].render(t))
        }, e
    }()
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.PreviewView = function () {
        function e(e, n) {
            this.el = e, this.submitForPreviewingCallback = n, this.previewTask = t(this.previewTask, this), this.el = $(this.el), this.el.on("click", ".cc-preview", this.previewTask)
        }
        return e.prototype.previewTask = function (e) {
            var t;
            return e.preventDefault(), t = $(e.target), t.hasClass("disabled") ? void 0 : ($(".cc-test, .cc-preview").addClass("disabled"), t.text("Working..."), this.submitForPreviewingCallback())
        }, e.prototype.update = function (e) {
            return this.el.find("iframe").attr("src", e)
        }, e.prototype.resetButton = function () {
            var e;
            return e = this.el.find(".cc-preview"), e.text(e.data("default-text")), $(".cc-test, .cc-preview").removeClass("disabled")
        }, e.prototype.updateButton = function (e) {
            return this.el.find(".cc-preview").text(e)
        }, e
    }()
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    null == (e = this.CodeChallenge) && (this.CodeChallenge = {}), CodeChallenge.WorkspaceView = function () {
        function e(e) {
            this.el = e, this.handleMenuClick = t(this.handleMenuClick, this), this.initializeEditor = t(this.initializeEditor, this), this.el.find(".editor textarea").each(this.initializeEditor), this.el.on("click", ".cc-editor-menu a", this.handleMenuClick), this.el.find(".cc-editor-menu .selected").click()
        }
        return e.prototype.initializeEditor = function (e, t) {
            return this.editors || (this.editors = []), this.editors.push(new CodeChallenge.EditorView(t))
        }, e.prototype.handleMenuClick = function (e) {
            var t, n;
            return e.preventDefault(), n = $(e.target), this.el.find(".cc-editor-menu .selected").removeClass("selected"), n.addClass("selected"), t = this.el.find(".cc-editor-menu a").index(n), this.el.find(".editor.selected").removeClass("selected"), this.el.find(".editor").eq(t).addClass("selected")
        }, e.prototype.getFiles = function () {
            var e = this;
            return $.map(this.editors, function (t, n) {
                var i, r;
                return r = e.el.find(".cc-editor-menu a").eq(n).text(), i = t.getValue(), {
                    source: r,
                    content: i
                }
            })
        }, e
    }()
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t, n, i = this;
            this.$element = $(e), this.$element.on("click", "a", function (e) {
                var t, n;
                return t = $(e.currentTarget), n = t.attr("data-topic"), i.updateTab(t, n), !0
            }), this.current_anchor = document.location.hash, "" === this.current_anchor ? this.$element.find(".topic-tab-projects")[0].click() : (t = this.$element.find("li a[href='" + this.current_anchor + "']"), n = t.attr("data-topic"), this.updateTab(t, n))
        }
        return e.prototype.updateTab = function (e, t) {
            return this.$element.find("a").removeClass("selected"), e.addClass("selected"), "all" === t ? $(".topic-group").show() : ($(".topic-group").hide(), $(".topic-group-" + t).show())
        }, e
    }(), Featurette.register("dashboard-tabs", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.toggleContent = t(this.toggleContent, this), this.root = $(e), this.root.on("click", ".expander-trigger", this.toggleContent), this.parentSelector = this.root.data("parent-selector")
        }
        return e.prototype.toggleContent = function (e) {
            var t, n, i, r;
            return e.preventDefault(), i = $(e.currentTarget), n = i.parents(this.parentSelector), n.toggleClass("expanded"), n.hasClass("expanded") && (r = n.data("content-path")) && (t = n.find(".expander-content-container"), t.hasClass("is-empty")) ? $.get(r, function (e) {
                return t.html(e).removeClass("is-empty")
            }) : void 0
        }, e
    }(), Featurette.register("expander", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t = this;
            this.element = $(e), this.comment_id = this.element.data("comment"), this.show_comment = $("#show-comment-" + this.comment_id), this.edit_comment = $("#edit-comment-" + this.comment_id), this.cancel_element = $("#cancel-comment-" + this.comment_id), this.element.click(function () {
                return t.show_comment.hide(), t.edit_comment.show()
            }), this.cancel_element.click(function (e) {
                return t.edit_comment.hide(), t.show_comment.show(), e.preventDefault()
            })
        }
        return e
    }(), Featurette.register("forum-editing", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t, n = this;
            this.element = $(e), this.element.tagsInput({
                height: "",
                width: "auto",
                defaultText: "Add a Tag",
                placeholderColor: "#9A9DA1",
                autocomplete_url: "/forum_tag_autocomplete"
            }), t = "#" + this.element.attr("id"), this.display_div = $("" + t + "_tagsinput"), this.actual_input = $("" + t + "_tag"), this.actual_input.focus(function () {
                return n.display_div.addClass("active")
            }), this.actual_input.focusout(function () {
                return n.display_div.removeClass("active")
            })
        }
        return e
    }(), Featurette.register("forum-tags-input", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t, n, i, r;
            t = $(e), r = function () {
                return t.find(".subnav-trigger > a").toggleClass("selected"), t.find(".subnav").toggle()
            }, i = function () {
                return t.find(".subnav-trigger > a").addClass("selected"), t.find(".subnav").show()
            }, n = function () {
                return t.find(".subnav-trigger > a").removeClass("selected"), t.find(".subnav").hide()
            }, t.find(".subnav a").on("click", n), t.find(".subnav-trigger > a").on("touchstart", r), t.find(".subnav-trigger").mouseenter(i), t.find(".subnav-trigger").mouseleave(n)
        }
        return e
    }(), Featurette.register("gear-menu", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t;
            this.id = e.id, this.mikeId = "mike", this.mikeSound = "mike-sound", this.countCookie = "mikeCounter", this.setupMike(), t = $(e), t.find(".close-message").click(function () {
                return t.slideUp("fast")
            })
        }
        return e.prototype.setupMike = function () {
            var e = this;
            return this.canPlayMp3() || this.canPlayOgg() ? $("#" + this.mikeId).click(function () {
                var t;
                return $("#" + e.id).slideToggle("fast"), t = parseInt($.cookie(e.countCookie)) || 0, 0 === t % 10 && $("#" + e.mikeSound)[0].play(), $.cookie(e.countCookie, t + 1)
            }) : void 0
        }, e.prototype.canPlayMp3 = function () {
            var e;
            return e = document.createElement("audio"), !(!e.canPlayType || !e.canPlayType("audio/mpeg;").replace(/no/, ""))
        }, e.prototype.canPlayOgg = function () {
            var e;
            return e = document.createElement("audio"), !(!e.canPlayType || !e.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))
        }, e
    }(), Featurette.register("global-message-container", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t = this;
            this.id = e.id, $(e).find("#contact-form .honey-pot-field").remove(), this.resetContactForm(), $(e).find("#contact-form").submit(function (e) {
                return t.handleSubmit(e)
            })
        }
        return e.prototype.resetContactForm = function () {
            var e;
            return e = $("#" + this.id), e.find("#contact-form input").add("#" + this.id + " #contact-form textarea").removeClass("field_with_errors"), e.find("span.error-message").hide(), e.find(".message").hide(), this.hasBeenSubmitted && e.find("#contact-form").css("visibility", "visible"), this.hasBeenSubmitted && e.find(".form-footer .button").css("visibility", "visible"), this.hasBeenSubmitted = !1
        }, e.prototype.handleSubmit = function (e) {
            var t, n = this;
            return t = $("#" + this.id), this.resetContactForm(), t.find("#contact-form").css("visibility", "hidden"), t.find(".form-footer .button").css("visibility", "hidden"), t.find(".message.waiting").show(), $.ajax({
                url: "/contact.json",
                type: "POST",
                dataType: "json",
                data: t.find("form").serialize(),
                error: function () {
                    return $(".contactForm .message").hide(), $(".contactForm .message.error").show()
                },
                success: function (e) {
                    return t.find(".message").hide(), $.isEmptyObject(e.errors) ? (t.find(".message.success").show(), n.hasBeenSubmitted = !0, t.find("#contact-form textarea").val("")) : (t.find(".message.error").show(), t.find("#contact-form").css("visibility", "visible"), t.find(".form-footer .button").css("visibility", "visible"), $.each(e.errors, function (e, n) {
                        return t.find("#contact_form_" + e).addClass("field_with_errors").closest("div.form-item").find("span.error-message").show().text(n[0])
                    }))
                }
            }), e.preventDefault()
        }, e
    }(), Featurette.register("help-form", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.removePathItem = t(this.removePathItem, this), this.addNewPathItem = t(this.addNewPathItem, this), this.onCourseSelection = t(this.onCourseSelection, this);
            var n;
            this.el = $(e), this.el.on("change", ".select-course", this.onCourseSelection), this.el.on("click", ".add-new", this.addNewPathItem), this.el.on("click", ".modal-close", this.removePathItem), this.el.on("open", ".dd-select", function (e) {
                return $(e.target).parents(".item").css("z-index", 200)
            }), this.el.on("close", ".dd-select", function (e) {
                return $(e.target).parents(".item").css("z-index", "")
            }), n = this.el.find(".select-course select, .select-item select"), $.uniform.restore(n), this.initializeDropdowns(this.el)
        }
        return e.prototype.initializeDropdowns = function (e) {
            return e.find(".select-course select").each(function () {
                return new Slick(this)
            }), e.find(".select-item select").each(function () {
                return new Slick(this)
            })
        }, e.prototype.onCourseSelection = function (e) {
            var t, n;
            return t = $(e.target), n = t.parents(".item").find(".select-item"), $.get("/learning-adventures/syllabus-options/" + t.val(), function (e) {
                return n.find("select").html(e).change(), n.show()
            })
        }, e.prototype.addNewPathItem = function (e) {
            var t, n, i;
            return e.preventDefault(), this.template || (this.template = this.el.find("#path-item-fields-template").html()), n = (new Date).getTime(), i = new RegExp("new_path_item", "g"), t = $(this.template.replace(i, n)), this.initializeDropdowns(t), this.el.find(".item:last").after(t), this.el.find(".item:visible").length > 1 ? this.el.find(".item:visible:first .modal-close").show() : void 0
        }, e.prototype.removePathItem = function (e) {
            var t, n;
            return e.preventDefault(), n = $(e.currentTarget).parents(".item"), t = n.find("input[type=hidden]"), t.length > 0 ? (t.val("1"), n.hide()) : n.remove(), 1 === this.el.find(".item:visible").length ? this.el.find(".item:visible:first .modal-close").hide() : void 0
        }, e
    }(), Featurette.register("learning-adventure-form", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.onFormSubmit = t(this.onFormSubmit, this);
            var n;
            this.textarea = $(e), this.form = this.textarea.closest("form"), this.textarea.mentionsInput({
                onDataRequest: this.onDataRequest,
                triggerChar: "@",
                minChars: 1,
                showAvatars: !0,
                elastic: !1,
                templates: {
                    autocompleteList: _.template('<div class="user-tagging"></div>'),
                    autocompleteListItem: _.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><a><strong><%= content %></strong><span>@<%= username %></span></a></li>'),
                    autocompleteListItemAvatar: _.template('<div class="user-avatar <%= type %>"><img src="<%= avatar %>" /></div>')
                }
            }), (n = this.textarea.data("mentions")) && this.textarea.mentionsInput("setMentions", this.textarea.data("mentions-body"), n), this.form.on("submit", this.onFormSubmit)
        }
        return e.prototype.onFormSubmit = function () {
            var e = this;
            return this.textarea.mentionsInput("val", function (t) {
                var n;
                return n = $("<input type='hidden' name='" + e.textarea.attr("name") + "'/>"), n.val(t), e.textarea.after(n), e.textarea.attr("name", "gui_body")
            })
        }, e.prototype.onDataRequest = function (e, t, n) {
            return $.getJSON("/users/mention_search.json", "query=" + t, function (e) {
                return n.call(this, e)
            })
        }, e
    }(), Featurette.register("mentions", e)
}.call(this),
function () {
    var e, t, n, i = {}.hasOwnProperty,
        r = function (e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) i.call(t, r) && (e[r] = t[r]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
    t = function () {
        function e(e) {
            this.id = e.id, this.beforeClose = null, this.closeable = null == $(e).data("uncloseable"), this.lightbox = new LightBox("#" + this.id, this.closeable)
        }
        return e.prototype.showOverlay = function () {
            return this.lightbox.showOverlay()
        }, e.prototype.closeOverlay = function () {
            return this.beforeClose && this.beforeClose(), this.lightbox.closeOverlay()
        }, e
    }(), Featurette.register("modal", t), e = function (e) {
        function t() {
            return n = t.__super__.constructor.apply(this, arguments)
        }
        return r(t, e), t.prototype.showOverlay = function () {
            return Featurette.get("help-form").resetContactForm(), t.__super__.showOverlay.call(this)
        }, t
    }(t), Featurette.register("help-modal", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t, n = this;
            this.id = e.id, t = $(e), this.target = t.attr("data-target"), this.mobile_fallback = t.attr("data-mobile-fallback"), t.click(function (e) {
                var t;
                return n.mobile_fallback && 480 >= $(window).width() ? !0 : (t = Featurette.get(n.target), t.showOverlay(), e.preventDefault())
            })
        }
        return e
    }(), Featurette.register("modal-trigger", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.updateNotificationsCount = t(this.updateNotificationsCount, this), this.markNotificationsRead = t(this.markNotificationsRead, this), this.sendWebkitNotification = t(this.sendWebkitNotification, this), this.addNewNotification = t(this.addNewNotification, this), this.hideDropdown = t(this.hideDropdown, this), this.showDropdown = t(this.showDropdown, this), this.toggleDropdown = t(this.toggleDropdown, this);
            var n, i, r = this;
            this.el = $(e), n = this.el.data("channel"), this.notificationsDropdown = this.el.find(".notifications-dropdown").addClass("hidden"), this.notificationsLink = this.el.find("a:first-child"), this.counter = this.el.find("#notification-count"), i = {
                channel: n,
                subscribe_key: this.subKey,
                publish_key: this.pubKey,
                presence: !1,
                ssl: !0
            }, this.socket = io.connect("https://pubsub.pubnub.com/notifications", i), this.socket.on("notification", function (e) {
                return r.addNewNotification(e)
            }), this.el.click(function () {
                return r.toggleDropdown()
            }), this.notificationsDropdown.on("click", function (e) {
                return e.stopPropagation()
            }), Tinycon.setOptions({
                width: 7,
                height: 9,
                font: "10px arial",
                colour: "#ffffff",
                background: "#ea6c6c",
                fallback: !0
            }), Tinycon.setBubble(parseInt(this.counter.text()))
        }
        return e.prototype.subKey = "sub-e2de2b5c-13c2-11e2-b508-f53fda4cd93d", e.prototype.pubKey = "pub-b8a18d09-58e0-4ec4-acd5-67ce32d576cd", e.prototype.toggleDropdown = function (e) {
            return null == e && (e = !0), this.notificationsDropdown.hasClass("hidden") ? this.showDropdown() : this.hideDropdown()
        }, e.prototype.showDropdown = function () {
            var e = this;
            return this.notificationsDropdown.removeClass("hidden"), this.notificationsLink.addClass("selected"), $("body").on("click", function (t) {
                return e.bodyClick = t, $(t.target).closest("li.notifications").length ? void 0 : e.hideDropdown()
            }), $(document).keyup(function (t) {
                return e.documentKeyup = t, 27 === t.keyCode ? e.hideDropdown(!1) : void 0
            })
        }, e.prototype.hideDropdown = function (e) {
            return null == e && (e = !0), this.notificationsDropdown.addClass("hidden"), this.notificationsLink.removeClass("selected"), this.bodyClick && $("body").off(this.bodyClick), this.documentKeyup && $(document).off(this.documentKeyup), e ? this.markNotificationsRead() : void 0
        }, e.prototype.addNewNotification = function (e) {
            var t, n;
            return t = $(e), 0 === $(t.attr("id")).length && ($("#notifications-list").prepend(t), n = parseInt(this.counter.text()), n++, this.updateNotificationsCount(n), window.webkitNotifications) ? this.sendWebkitNotification(t) : void 0
        }, e.prototype.sendWebkitNotification = function (e) {
            var t, n, i, r, o;
            return 0 === window.webkitNotifications.checkPermission() ? (r = e.children("h4").first().text(), n = e.children("p").first().text(), t = e.find("img").first().attr("src"), t.match("^http") || (t = "http:" + t), o = e.children("h4").children("a").first().attr("href"), i = window.webkitNotifications.createNotification(t, r, n), i.onclick = function () {
                return window.open(o), i.close()
            }, i.show()) : void 0
        }, e.prototype.markNotificationsRead = function () {
            var e, t, n = this;
            return e = this.el.find("input").serializeArray(), e.length ? (t = window.location.protocol + "//" + window.location.host + "/notifications/mark-read", $.post(t, e, function () {
                return n.el.find(".notification-unread").removeClass("notification-unread"), n.el.find('input[name="unread"]').remove(), n.updateNotificationsCount(0), !0
            })) : void 0
        }, e.prototype.updateNotificationsCount = function (e) {
            return 0 === e ? this.counter.addClass("hidden") : this.counter.removeClass("hidden"), this.counter.text(e), Tinycon.setBubble(e)
        }, e
    }(), Featurette.register("notifications", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            this.hasCanvasSupport() && this.createChart(e)
        }
        return e.prototype.createChart = function (e) {
            var t, n, i, r, o, a, s, l, u;
            i = e.getContext("2d"), n = {
                html: "#47c6e3",
                css: "#32789d",
                javascript: "#9d4f50",
                ruby: "#eb595c",
                ios: "#a185c7",
                business: "#fd805a",
                android: "#68d387",
                php: "#ff8fb4",
                wordpress: "#fed36e",
                design: "#498059",
                "dev tools": "#6b5982"
            }, s = $(e).data("points"), r = [], l = 0;
            for (a in s) u = s[a], l += u, r.push({
                    value: u,
                    color: n[a]
                });
            return 0 === l && r.push({
                value: 1,
                color: "#ddd"
            }), o = {
                segmentShowStroke: !1,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 70,
                width: 180,
                animation: !1
            }, t = new Chart(i).Doughnut(r, o)
        }, e.prototype.hasCanvasSupport = function () {
            var e;
            return e = document.createElement("canvas"), !(!e.getContext || !e.getContext("2d"))
        }, e
    }(), Featurette.register("points-chart", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.el = e, this.generateAnswers = t(this.generateAnswers, this), this.generateQuestion = t(this.generateQuestion, this), this.generateScore = t(this.generateScore, this), this.generateFeedback = t(this.generateFeedback, this), this.nextQuestion = t(this.nextQuestion, this), this.initializeQuiz = t(this.initializeQuiz, this), this.processResponse = t(this.processResponse, this), this.submitAnswer = t(this.submitAnswer, this), this.el = $(this.el), this.quizData = this.el.data("quiz"), this.initializeQuiz(this.quizData), this.questionAnswered = !1, this.el.on("click", ".quiz-answers a", this.submitAnswer), this.el.on("click", ".feedback a", this.nextQuestion), this.el.on("submit", "#fill-in-blank", function (e) {
                return e.preventDefault(), $(e.currentTarget).parents(".quiz-answers").find("a").click()
            }), this.el.data("unavailable") === !0 && setTimeout(function () {
                return Featurette.get("quiz-unavailable").showOverlay()
            }, 100)
        }
        return e.prototype.submitAnswer = function (e) {
            var t, n, i = this;
            return e.preventDefault(), this.questionAnswered ? void 0 : (this.questionAnswered = !0, n = e.currentTarget, $(n).addClass("selected"), $(".quiz-answers").addClass("inactive"), t = {
                fitb_answers: $("#fill-in-blank").serializeArray()
            }, this.quizData.quiz_attempt && (t.quiz_attempt = this.quizData.quiz_attempt), $.ajax({
                type: "POST",
                url: n.href,
                data: t,
                dataType: "json",
                success: function (e) {
                    return i.processResponse(e)
                },
                error: function (e) {
                    return debug("Error", e)
                }
            }))
        }, e.prototype.processResponse = function (e) {
            return this.quizData = e, "passed" === this.quizData.quiz_status ? this.quizData.badge_earned === !0 ? (Featurette.get("badge-modal").showOverlay(), e.video && ($("#badge-modal").find(".modal").removeClass("two-quarter").addClass("four-quarter"), $("#rewardVideoViewer").html(e.video), $("#rewardVideo").show(), this.player = new MediaElementPlayer($("#player")))) : $("#quiz-completed-modal").size() > 0 ? Featurette.get("quiz-completed-modal").showOverlay() : Featurette.get("badge-modal").showOverlay() : "failed" === this.quizData.quiz_status && Featurette.get("failed-quiz-modal").showOverlay(), this.generateFeedback(this.quizData), this.generateScore(this.quizData)
        }, e.prototype.initializeQuiz = function (e) {
            return this.generateScore(e), this.generateQuestion(e), this.generateAnswers(e)
        }, e.prototype.nextQuestion = function (e) {
            var t;
            return e.preventDefault(), this.questionAnswered = !1, t = e.currentTarget, $("#feedback").empty(), this.generateQuestion(this.quizData), this.generateAnswers(this.quizData)
        }, e.prototype.generateFeedback = function (e) {
            var t;
            return t = HoganTemplates["quizzes/feedback"].render(e), this.el.find("#feedback").html(t)
        }, e.prototype.generateScore = function (e) {
            var t;
            return e.label = e.score.answers_to_pass > 1 ? "answers" : "answer", t = HoganTemplates["quizzes/score"].render(e), this.el.find("#score").html(t)
        }, e.prototype.generateQuestion = function (e) {
            var t;
            return t = HoganTemplates["quizzes/question"].render(e), this.el.find("#question").html(t)
        }, e.prototype.generateAnswers = function (e) {
            var t;
            return t = "", "MultipleChoice" === e.question.question_type ? t = HoganTemplates["quizzes/multiple_choice"].render(e) : "TrueFalse" === e.question.question_type ? t = HoganTemplates["quizzes/true_false"].render(e) : "FillInTheBlank" === e.question.question_type && (t = HoganTemplates["quizzes/fill_in_the_blank"].render(e)), this.el.find("#answers").html(t)
        }, e
    }(), Featurette.register("quiz", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t = this;
            this.element = $(e), this.base_url = this.element.data("remote-path"), this.has_query_string = this.base_url.indexOf("?") > 0, this.page = 1, this.element.click(function () {
                var e;
                return t.page += 1, e = t.has_query_string ? t.base_url + ("&page=" + t.page) : t.base_url + ("?page=" + t.page), $.ajax({
                    url: e,
                    type: "get",
                    dataType: "script"
                })
            })
        }
        return e
    }(), Featurette.register("show-more", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            $(e).find("a").attr("target", "_blank")
        }
        return e
    }(), Featurette.register("show-notes", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.onScroll = t(this.onScroll, this), this.el = $(e), this.stickyContainer = $("#" + this.el.data("sticky-container")), this.stickyContainer.length && this.stickyContainer.height(this.stickyContainer.height()), this.originalOffset = this.el.offset().top, $(window).on("scroll resize load", this.onScroll)
        }
        return e.prototype.onScroll = function () {
            var e;
            return e = $(window).scrollTop(), e > this.originalOffset ? this.el.addClass("sticky") : this.el.removeClass("sticky")
        }, e
    }(), Featurette.register("sticky-element", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t, n, i, r = this;
            this.id = e.id, t = $(e), this.class_to_close = t.attr("data-class-to-close"), t.hasClass("tooltip-left") || t.hasClass("tooltip-right") ? (n = (parseInt(t.height()) + 24) / 2, t.css({
                top: "50%",
                marginTop: -n
            })) : t.hasClass("tooltip-top") ? (n = (parseInt(t.width()) + 30) / 2, i = parseInt(t.height() + 30), t.css({
                top: -i,
                left: "50%",
                marginLeft: -n
            })) : t.hasClass("tooltip-bottom") && (n = (parseInt(t.width()) + 24) / 2, i = parseInt(t.height() + 30), t.css({
                top: "auto",
                bottom: -i,
                left: "50%",
                marginLeft: -n
            })), t.find(".close-tooltip").click(function () {
                return r.close()
            }), "true" !== t.attr("data-hide") && setTimeout(function () {
                return t.fadeIn()
            }, 200)
        }
        return e.prototype.close = function () {
            var e, t;
            return e = $("#" + this.id), e.fadeOut(), this.class_to_close && $("." + this.class_to_close).fadeOut(), (t = e.attr("data-flag")) ? $.post("/dashboard/flag", {
                _method: "PUT",
                flag: t
            }) : void 0
        }, e
    }(), Featurette.register("tooltip", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.setActiveTab = t(this.setActiveTab, this), this.loading = t(this.loading, this);
            var n;
            this.el = $(e), this.targetContainer = $("#courses-container"), this.el.pjax("a[data-pjax='true']", {
                container: "#courses-container",
                scrollTo: !1,
                timeout: 0
            }), location.hash && (n = location.hash.split("#")[1], this.el.find("a[data-pjax='true'][href$='" + n + "']").click()), this.targetContainer.on("pjax:start", this.loading), this.targetContainer.on("pjax:end", this.setActiveTab), this.setActiveTab()
        }
        return e.prototype.loading = function () {
            return this.targetContainer.addClass("inactive")
        }, e.prototype.setActiveTab = function () {
            return this.targetContainer.removeClass("inactive"), this.el.find("a").removeClass("selected"), this.el.find("a[href$='" + window.location.pathname + "']").addClass("selected"), this.targetContainer.find(".achievement-list > li").length > 3 ? $(".roadmap-callout").show() : $(".roadmap-callout").hide(), "/library" !== location.pathname ? $("#featured-stages").hide() : $("#featured-stages").show()
        }, e
    }(), Featurette.register("topic-tabs", e)
}.call(this),
function () {
    var e;
    e = function () {
        function e(e) {
            var t, n = this;
            this.id = e.id, t = $(e), this.target = t.attr("data-target"), this.poster = t.attr("data-poster"), this.src = t.attr("data-src"), this.captionSrc = t.attr("data-captions"), t.click(function (e) {
                var t, i;
                return t = Featurette.get(n.target), $("#" + t.id).html(Video.render("player", n.poster, n.src, n.captionSrc, {
                    autoplay: !0
                })), i = Video.initPlayer($("#player")), t.lightbox.beforeClose = function () {
                    return i.pause()
                }, t.showOverlay(), e.preventDefault()
            })
        }
        return e
    }(), Featurette.register("video-modal-trigger", e)
}.call(this),
function () {
    var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    e = function () {
        function e(e) {
            this.transitionToPlaying = t(this.transitionToPlaying, this), this.transitionToPaused = t(this.transitionToPaused, this), this.onEnd = t(this.onEnd, this), this.recordViewEvent = t(this.recordViewEvent, this), this.addEvents = t(this.addEvents, this);
            var n;
            this.el = $(e), this.el.attr("data-autoplay") && (this.autoplay = !0), $(document).bind("contextmenu", function (e) {
                return "VIDEO" === e.target.tagName.toUpperCase() ? !1 : void 0
            }), n = {
                enableAutosize: !0,
                success: this.addEvents
            }, this.el.attr("data-force-flash") && (n.mode = "shim"), this.el.attr("data-start-language") && (n.startLanguage = this.el.attr("data-start-language")), this.didPlay = !1, this.player = Video.initPlayer(e, n), $(".rewatch").on("click", function () {
                return $("#next-step-overlay").removeClass("active"), mejs.players[0].setCurrentTime(0), mejs.players[0].play()
            })
        }
        return e.prototype.addEvents = function (e) {
            var t;
            return this.mejsObj = e, e.addEventListener("pause", this.transitionToPaused), e.addEventListener("play", this.transitionToPlaying), e.addEventListener("timeupdate", this.recordViewEvent), e.addEventListener("ended", this.onEnd), this.autoplay ? (t = function () {
                return e.play()
            }, setTimeout(t, 1e3)) : void 0
        }, e.prototype.recordViewEvent = function () {
            return this.mejsObj.currentTime > 10 ? (this.mejsObj.removeEventListener("timeupdate", this.recordViewEvent), $.post(this.el.data("record-video-view-url"), "_method=PUT")) : void 0
        }, e.prototype.onEnd = function () {
            var e;
            return 10 > this.mejsObj.currentTime && $.post(this.el.data("record-video-view-url"), "_method=PUT"), e = $("#" + this.el.data("post-roll-overlay")), e.addClass("active"), !0
        }, e.prototype.transitionToPaused = function () {
            return this.player.container.addClass("mejs-treehouse-is-paused"), this.player.container.removeClass("mejs-treehouse-is-playing")
        }, e.prototype.transitionToPlaying = function () {
            return this.player.container.addClass("mejs-treehouse-is-playing"), this.player.container.removeClass("mejs-treehouse-is-paused")
        }, e
    }(), Featurette.register("video-player", e)
}.call(this),
function () {
    $(function () {
        var e;
        return e = function () {
            function e() {}
            return e.modals = {}, e.handleTrigger = function (t) {
                var n, i;
                return $.browser.mobile ? !0 : (e.container || (e.container = $("#mini-profile-container")), t.preventDefault(), i = $(t.currentTarget), n = i.data("profile-name"), e.modals[n] ? e.modals[n].showOverlay() : e.createModalFor(n))
            }, e.createModalFor = function (e) {
                var t, n = this;
                return t = $("<div class='modal mini-profile' id='mini-profile-" + e + "' style='display: none'/>"), t.load("/mini_profile/" + e, function () {
                    return n.container.append(t), new Featurette.registered_features["points-chart"](t.find(".chart")[0]), n.modals[e] = new Featurette.registered_features.modal(t[0]), n.modals[e].showOverlay()
                })
            }, e
        }.call(this), $(document).on("click", "[data-behavior=mini-profile-trigger]", e.handleTrigger)
    })
}.call(this),
function () {
    var e, t, n, i, r, o, a, s, l, u, c, d = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    window.debug = function () {
        return this.console ? console.log(Array.prototype.slice.call(arguments)) : void 0
    }, u = function () {
        function e() {}
        return e.format_number = function (e) {
            var t, n, i, r;
            for (e += "", n = e.split("."), i = n[0], r = n.length > 1 ? "." + n[1] : "", t = /(\d+)(\d{3})/; t.test(i);) i = i.replace(t, "$1,$2");
            return i + r
        }, e
    }(), window.Utilities = u, i = function () {
        function e() {
            $(".clickonce").click(function () {
                return $(".clickonce").click(function (e) {
                    return e.preventDefault()
                })
            })
        }
        return e
    }(), window.PreventDoubleSubmit = i, s = function () {
        function e() {
            var e = this;
            this.silverLightbox = new t("#silver-modal"), this.goldLightbox = new t("#gold-modal"), this.cancelLightbox = new t("#cancel-account-modal"), this.pauseLightbox = new t("#pause-account-modal"), $("#switchToSilver").click(function (t) {
                return t.preventDefault(), e.silverLightbox.showOverlay()
            }), $("#switchToGold").click(function (t) {
                return t.preventDefault(), e.goldLightbox.showOverlay()
            }), $("#cancel-account").click(function (t) {
                return t.preventDefault(), e.cancelLightbox.showOverlay()
            }), $("#pause-account").click(function (t) {
                return t.preventDefault(), e.pauseLightbox.showOverlay()
            }), $(".cancel-modal").click(function (t) {
                return t.preventDefault(), e.silverLightbox.closeOverlay(), e.goldLightbox.closeOverlay(), e.cancelLightbox.closeOverlay(), e.pauseLightbox.closeOverlay()
            })
        }
        return e
    }(), window.SubscriptionChangePage = s, l = function () {
        function e() {
            $("#addMember, .closeIcon").click(function (e) {
                return e.preventDefault(), $("#addMemberSection").slideToggle()
            })
        }
        return e
    }(), window.TeamsPage = l, c = function () {
        function e() {}
        return e.render = function (e, t, n, i, r) {
            var o;
            return o = '<video id="' + e + '" style="width: 100%; height: 100%;" type="video/mp4"\n    controls="controls" preload="none" poster="' + t + '"\n    src="' + n + '" ' + (r.autoplay ? "autoplay" : void 0) + ">", i && (o += '<track kind="subtitles" src="' + i + '" srclang="en">'), o += "</video>"
        }, e.initPlayer = function (e, t) {
            var n, i, r;
            return null == t && (t = {}), n = $(e), $.extend(t, {
                enableAutosize: !0
            }), n.attr("data-force-flash") && (t.mode = "shim"), n.attr("data-start-language") ? t.startLanguage = n.attr("data-start-language") : $.cookie("captionLanguage") && (t.startLanguage = $.cookie("captionLanguage")), n.attr("data-captions-preferences-url") && (i = n.attr("data-captions-preferences-url")), r = t.success, t.success = function (e, t) {
                return $(t).closest(".mejs-container").find(".mejs-captions-selector input[type=radio]").click(function (e) {
                    var t;
                    return t = e.target.value, "none" === t && (t = null), $.cookie("captionLanguage", t, {
                        expires: 1095
                    }), i ? $.post(i, {
                        language: t
                    }) : void 0
                }), r ? r(e, t) : void 0
            }, new MediaElementPlayer(n, t)
        }, e
    }(), window.Video = c, t = function () {
        function e(e, t) {
            null == t && (t = !0), this.$tarp = $(".modal-tarp"), this.$lightboxElement = $(e), this.visible = !1, this.closeable = t, this.beforeClose = null, this.attachCloseEvents(), this.animation = "slideIn"
        }
        return e.prototype.showOverlay = function () {
            var e, t, n, i;
            return i = this.$lightboxElement.width(), e = $(document).width() / 2 - i / 2, n = $(window).scrollTop(), t = n + this.windowHeight(), this.$lightboxElement.css({
                display: "block",
                top: t,
                opacity: 0,
                zIndex: 600,
                left: e
            }), this.$tarp.css({
                zIndex: 500,
                opacity: 0
            }).show(), this.$tarp.animate({
                opacity: 1
            }, 100), this.$lightboxElement.delay(100).animate({
                opacity: 1,
                top: n
            }, 150), this.visible = !0
        }, e.prototype.closeOverlay = function () {
            var e, t, n = this;
            return this.beforeClose && this.beforeClose(), t = parseInt(this.$lightboxElement.css("top")), e = t + this.windowHeight(), this.$lightboxElement.animate({
                top: e,
                opacity: .001
            }, 50, function () {
                return n.$lightboxElement.hide()
            }), this.$tarp.delay(50).hide()
        }, e.prototype.finalizeClose = function () {
            return this.$tarp.css({
                zIndex: -500
            }), this.$lightboxElement.css({
                zIndex: -600,
                top: 0
            }), this.visible = !1
        }, e.prototype.windowHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight || getElementsByTagName("body")[0].clientHeight
        }, e.prototype.tarpClick = function (e) {
            return $(e.target).hasClass("modal-tarp") && this.visible && this.closeable ? (e.stopPropagation(), this.closeOverlay()) : void 0
        }, e.prototype.attachCloseEvents = function () {
            var e = this;
            return $(document).keyup(function (t) {
                return 27 === t.which && e.visible && e.closeable ? e.closeOverlay() : void 0
            }), this.$lightboxElement.find(".modal-close").click(function (t) {
                return e.visible && e.closeable ? (e.closeOverlay(), t.preventDefault()) : void 0
            }), $(document).click(function (t) {
                return e.tarpClick(t)
            }), $(document).on("touchstart", function (t) {
                return e.tarpClick(t)
            })
        }, e
    }(), window.LightBox = t, $(document).ready(function () {
        var e;
        return e = "#habla_wcsend_input", $(document).on("focus", e, function () {
            return $(document).click()
        })
    }), a = function () {
        function e() {
            var e = this;
            this.studentLightbox = new t("#student-signup-modal"), $(".student-signup-trigger").click(function (t) {
                return t.preventDefault(), e.studentLightbox.showOverlay()
            }), $(".cancel-modal").click(function (t) {
                return t.preventDefault(), e.studentLightbox.closeOverlay()
            })
        }
        return e
    }(), window.StudentSignup = a, r = function () {
        function e() {
            $("a[data-see-more-target]").each(function (e, t) {
                var n, i, r, o;
                return n = $(t), i = $("#" + n.data("see-more-target")), o = n.text(), r = n.data("see-more-hide-text") || o, n.click(function (e) {
                    return e.preventDefault(), i.is(":visible") || "none" !== i.css("display") ? (n.text(o), i.hide()) : (n.text(r), i.show())
                })
            })
        }
        return e
    }(), new r, $(".inactive a").live("click", function (e) {
        return e.preventDefault()
    }), e = function () {
        function e(e) {
            var t = this;
            this.prices = e, this.updateQuantity = d(this.updateQuantity, this), this.chosen = "silver", this.quantity = 2, $(".choose-silver").live("click", function () {
                return t.chosen = "silver", t.updateTotal(), $("#silver-radio").attr("checked"), $(".group-builder-step").animate({
                    opacity: 1
                }, 500), $(".choose-silver").removeClass("inactive"), $(".choose-silver").addClass("selected"), $(".choose-gold").addClass("inactive"), $(".choose-gold").removeClass("selected")
            }), $(".choose-gold").live("click", function () {
                return t.chosen = "gold", t.updateTotal(), $("#gold-radio").attr("checked"), $(".group-builder-step").animate({
                    opacity: 1
                }, 500), $(".choose-gold").removeClass("inactive"), $(".choose-gold").addClass("selected"), $(".choose-silver").addClass("inactive"), $(".choose-silver").removeClass("selected")
            })
        }
        return e.prototype.updateTotal = function () {
            var e, t, n, i, r;
            return 100 === this.quantity ? ($("#contact-sales").show(), $("#quote").hide()) : (t = this.prices[this.chosen], t && (n = t * this.quantity, r = u.format_number(parseInt(n)), e = (100 * n % 100).toString(), 1 === e.length && (e = "0" + e), i = "<sup>$</sup>" + r + "<sup>" + e + "</sup>", $("#total-price").html(i)), $("#contact-sales").hide(), $("#quote").show())
        }, e.prototype.updateQuantity = function (e) {
            return this.quantity = parseInt(e), $("#group-quantity").text(this.quantity), this.updateTotal()
        }, e
    }(), window.GroupQuote = e, n = function () {
        function e() {
            $(".oneMonth").on("click", function () {
                return $("#months-1").attr("checked"), $(".oneMonth").removeClass("unchecked"), $(".oneMonth").addClass("checked"), $(".twoMonths").removeClass("checked"), $(".twoMonths").addClass("unchecked"), $(".threeMonths").removeClass("checked"), $(".threeMonths").addClass("unchecked")
            }), $(".twoMonths").on("click", function () {
                return $("#months-2").attr("checked"), $(".oneMonth").removeClass("checked"), $(".oneMonth").addClass("unchecked"), $(".twoMonths").removeClass("unchecked"), $(".twoMonths").addClass("checked"), $(".threeMonths").removeClass("checked"), $(".threeMonths").addClass("unchecked")
            }), $(".threeMonths").on("click", function () {
                return $("#months-3").attr("checked"), $(".oneMonth").removeClass("checked"), $(".oneMonth").addClass("unchecked"), $(".twoMonths").removeClass("checked"), $(".twoMonths").addClass("unchecked"), $(".threeMonths").removeClass("unchecked"), $(".threeMonths").addClass("checked")
            })
        }
        return e
    }(), window.PauseRadios = n, o = function () {
        function e(e, t, n, i) {
            var r = this;
            this.track = e, this.minValue = t, this.maxValue = n, this.callback = i, this.touchMove = d(this.touchMove, this), this.mouseMove = d(this.mouseMove, this), this.holding = !1, this.handle = this.track.find(".slider-handle"), this.userRange = n - t, this.handleOffset = this.handle.width() / 2, $(document).mousemove(function (e) {
                return r.mouseMove(e)
            }), document.addEventListener && document.addEventListener("touchmove", function (e) {
                return r.touchMove(e)
            }, !0), this.handle.mousedown(function () {
                return r.slideStart()
            }), this.handle.on("touchstart", function () {
                return r.slideStart()
            })
        }
        return e.prototype.slideStart = function () {
            var e = this;
            return this.holding = !0, this.disableSelection(), $(document).mouseup(function () {
                return e.slideEnd()
            }), $(document).on("touchend", function () {
                return e.slideEnd()
            })
        }, e.prototype.slideEnd = function () {
            return this.holding = !1, this.enableSelection()
        }, e.prototype.mouseMove = function (e) {
            return this.updatePosition(e.pageX, e), !1
        }, e.prototype.touchMove = function (e) {
            return this.updatePosition(e.changedTouches[0].screenX, e)
        }, e.prototype.updatePosition = function (e, t) {
            var n, i, r, o, a, s, l;
            return this.holding ? (t.preventDefault(), i = 0 - this.handleOffset, n = this.track.width() - this.handleOffset, r = e - this.track.offset().left, r -= this.handleOffset, $(".tooltip").fadeOut("fast"), i > r ? r = i : r > n && (r = n), a = n - i, s = r - i, this.handle.css("left", r), o = s / a, l = this.minValue + this.userRange * o, this.callback(l)) : void 0
        }, e.prototype.disableSelection = function () {
            return $("body").css("-moz-user-select", "none"), this.onselectstart = document.onselectstart, document.onselectstart = function () {
                return !1
            }
        }, e.prototype.enableSelection = function () {
            return $("body").css("-moz-user-select", "auto"), document.onselectstart = this.onselectstart
        }, e
    }(), window.Slider = o
}.call(this),
function () {
    var e, t, n, i = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }, r = {}.hasOwnProperty,
        o = function (e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        }, a = [].slice;
    t = function () {
        function e(e) {
            var t = this;
            this.formPrefix = null != e ? e : "account_signup", this.paymentType = $("#" + this.formPrefix + "_payment_method_credit_card, #" + this.formPrefix + "_payment_method_paypal"), this.paymentType.change(function () {
                return t.togglePaymentMethod()
            }), this.togglePaymentMethod(), $("#cvv-tooltip").mouseenter(function () {
                return $(this).find(".tooltip").css("display", "block")
            }), $("#cvv-tooltip").mouseleave(function () {
                return $(this).find(".tooltip").hide()
            }), $("#subscribe_monthly").click(function () {
                var e;
                return $("#subscribe_monthly").addClass("selected"), $("#subscribe_annually").removeClass("selected"), $("#monthly-checkmark").show(), $("#annual-checkmark").hide(), $("#account_signup_billing_period_monthly").attr("checked", "yes"), e = $.trim($("#monthly-charge").html()), $("#footer-price").html(e)
            }), $("#subscribe_annually").click(function () {
                var e;
                return $("#subscribe_annually").addClass("selected"), $("#subscribe_monthly").removeClass("selected"), $("#monthly-checkmark").hide(), $("#annual-checkmark").show(), $("#account_signup_billing_period_annual").attr("checked", "yes"), e = $.trim($("#annual-charge").html()), $("#footer-price").html(e)
            })
        }
        return e.prototype.togglePaymentMethod = function () {
            var e;
            return e = $("input[name='" + this.formPrefix + "[payment_method]']:checked").val(), "paypal" === e ? ($(".credit-card-chosen").hide(), $(".paypal-chosen").show()) : ($(".credit-card-chosen").show(), $(".paypal-chosen").hide())
        }, e
    }(), window.PaymentForm = t, n = function () {
        function e(e) {
            var t;
            t = $(e).find(".tooltip").parent().find("input"), t.focus(function () {
                var e;
                return e = $(this).parent().find(".tooltip"), e.data("hide-on-mobile") && 480 >= $(window).width() ? void 0 : e.fadeIn()
            }), t.blur(function () {
                return $(this).parent().find(".tooltip").fadeOut()
            }), $(e).submit(function () {
                return $(e + " button#submit").html("Processing..."), $(e + " button#submit").attr("disabled", "true")
            })
        }
        return e
    }(), window.StandardForm = n, e = function (e) {
        function t(e) {
            this.unwrapErrors = i(this.unwrapErrors, this);
            var n = this;
            this.accountForm = $(e), this.accountEmail = this.accountForm.find("#account_signup_email, #person_email"), this.accountProfile = this.accountForm.find("#account_signup_profile_name, #person_profile_name"), this.accountName = this.accountForm.find("#account_signup_first_name, #account_signup_last_name, #person_first_name, #person_last_name"), this.accountProfileName = this.accountProfile.val(), this.currentEmail = this.accountEmail.val(), t.__super__.constructor.call(this, this.accountForm), this.accountEmail.change(function () {
                return n.verifyEmailAddress()
            }), this.accountProfile.change(function () {
                return n.verifyProfileName()
            }), this.accountName.change(function () {
                return n.suggestProfileName()
            }), this.verifyEmailAddress(), this.verifyProfileName(), this.suggestProfileName()
        }
        return o(t, e), t.prototype.verifyEmailAddress = function () {
            var e, t, n, i, r = this;
            return t = this.accountEmail, n = t.siblings("label"), e = t.val(), i = $("meta[name='csrf-token']").attr("content"), this.clearFormErrors(t), $("input").change(function () {
                return $(this).removeClass("error"), $(this).parent().removeClass("field_with_errors")
            }), e !== this.currentEmail ? $.ajax("/account/email_address", {
                type: "POST",
                dataType: "json",
                data: {
                    email: e
                },
                headers: {
                    "X-CSRF-Token": i
                },
                error: function (e) {
                    var i;
                    return r.unwrapErrors(t, n), r.clearFormErrors(t), t.siblings("label").wrap('<div class="field_with_errors" />'), t.wrap('<div class="field_with_errors" />'), i = JSON.parse(e.responseText), t.after("<p class='error-message'>" + i.error + "</p>")
                },
                success: function () {
                    return r.unwrapErrors(t, n), null == t.val() ? r.clearFormErrors(t) : void 0
                }
            }) : void 0
        }, t.prototype.verifyProfileName = function () {
            var e, t, n, i, r, o, a = this;
            return e = this.accountProfile, n = e.siblings("label"), r = e.val(), t = $(this.accountName[0]).val(), i = $(this.accountName[1]).val(), o = $("meta[name='csrf-token']").attr("content"), r !== this.accountProfileName ? $.ajax("/account/profile_name", {
                type: "POST",
                dataType: "json",
                data: {
                    profile_name: r,
                    first_name: t,
                    last_name: i
                },
                headers: {
                    "X-CSRF-Token": o
                },
                error: function (t) {
                    var i;
                    return a.unwrapErrors(e, n), a.clearFormErrors(e), e.siblings("label").wrap('<div class="field_with_errors" />'), e.wrap('<div class="field_with_errors" />'), i = JSON.parse(t.responseText), e.val(i.suggestion), e.after("<p class='error-message'>" + i.error + "</p>")
                },
                success: function () {
                    return a.unwrapErrors(e, n), a.clearFormErrors(e)
                }
            }) : void 0
        }, t.prototype.suggestProfileName = function () {
            var e, t, n, i;
            return e = $(this.accountName[0]).val().toLowerCase(), n = $(this.accountName[1]).val().toLowerCase(), t = !! e, i = !! n, !this.accountProfile.val() && t && i && (this.accountProfile.val("" + e + n), this.accountProfile.blur()), this.verifyProfileName()
        }, t.prototype.unwrapErrors = function () {
            var e, t, n, i, r;
            for (t = arguments.length >= 1 ? a.call(arguments, 0) : [], r = [], n = 0, i = t.length; i > n; n++) e = t[n], e.closest("div").hasClass("field_with_errors") ? r.push(e.unwrap()) : r.push(void 0);
            return r
        }, t.prototype.clearFormErrors = function (e) {
            return e.siblings("p.error-message").remove()
        }, t
    }(n), window.AccountForm = e
}.call(this), $(function () {
    $.browser.mozilla && $("body").addClass("gecko"), $.browser.webkit && $("body").addClass("webkit"), $("select, textarea, input:file, input:text, input:password, input[type='email']").not(".editor textarea").uniform(), $(".form-item label:not(.prefill)").inFieldLabels(), $(".form-button-group").each(function (e) {
        var e = $(this),
            t = e.find(".button"),
            n = parseInt(t.width()) + 35;
        e.css({
            paddingRight: n
        }), t.css({
            marginRight: -n
        })
    }), $(".search-trigger").on("click", function () {
        $("#search-form .form-item").show(), $("#search-form .text").focus(), $(this).hide()
    }), $(".trigger-transcript").toggle(function () {
        $(".video-transcript").addClass("full-transcript"), $(this).text("Close transcript")
    }, function () {
        $(".video-transcript").removeClass("full-transcript"), $(this).text("Show full transcript")
    })
}), setStage = function () {
    $("body").addClass("cropped"), $(".lights-out").removeClass("hidden"), $(".lights-out").animate({
        opacity: 1
    }, 200), $(".global-breadcrumbs").animate({
        top: 0
    })
}, $(function () {
    Featurette.load()
}), $(document).ajaxSend(function (e, t) {
    var n = $("meta[name='csrf-token']").attr("content");
    t.setRequestHeader("X-CSRF-Token", n)
}), $(function () {
    $(".start-discussion").on("click", function () {
        $(this).addClass("inactive"), $(".forum-actions").hide(), $(".start-a-discussion").show(), $("#forum_post_subject").focus(), $(".new-discussion").show(), $(".title-note").show()
    }), $(".start-a-discussion input").focus(function () {
        $(".start-a-discussion").addClass("active"), $(".new-discussion").show(), $(".title-note").show()
    }), $(".cheatsheet-toggle").on("click", function (e) {
        $(".markdown-cheatsheet").slideToggle(200), e.preventDefault()
    }), $(".cheatsheet-close").on("click", function (e) {
        $(".markdown-cheatsheet").slideUp(200), e.preventDefault()
    }), $(".form-close").on("click", function (e) {
        $(".start-a-discussion").hide(), $(".forum-actions").show(), $(".start-discussion").removeClass("inactive"), e.preventDefault()
    }), $("#edit-post").on("click", function (e) {
        $("#display-post").hide(), $("#edit-post-form").show(), e.preventDefault()
    }), $("#cancel-edit-post").on("click", function (e) {
        $("#display-post").show(), $("#edit-post-form").hide(), e.preventDefault()
    })
}), Bugsnag.apiKey = "16b875e4d6899a27049288618f9ba496", $(function () {
    $("#launch_console").on("click", function (e) {
        var t = "top=100,left=100,height=600,width=800,scrollbars=0,location=0,menubar=0,toolbar=0",
            n = window.open("http://console.teamtreehouse.com:3388/window", null, t);
        null == n && alert("It looks like your pop up blocker blocked the console window."), e.preventDefault()
    })
});