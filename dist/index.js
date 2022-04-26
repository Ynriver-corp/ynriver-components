/*! For license information please see index.js.LICENSE.txt */
(() => {
    "use strict";
    var t = {
        418: t => {
            var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;

            function n(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }

            t.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
                        return e[t]
                    })).join("")) return !1;
                    var o = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function (t) {
                        o[t] = t
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function (t, a) {
                for (var i, c, f = n(t), p = 1; p < arguments.length; p++) {
                    for (var s in i = Object(arguments[p])) r.call(i, s) && (f[s] = i[s]);
                    if (e) {
                        c = e(i);
                        for (var u = 0; u < c.length; u++) o.call(i, c[u]) && (f[c[u]] = i[c[u]])
                    }
                }
                return f
            }
        }, 408: (t, e, r) => {
            var o = r(418), n = "function" == typeof Symbol && Symbol.for;
            n && Symbol.for("react.element"), n && Symbol.for("react.portal"), n && Symbol.for("react.fragment"), n && Symbol.for("react.strict_mode"), n && Symbol.for("react.profiler"), n && Symbol.for("react.provider"), n && Symbol.for("react.context"), n && Symbol.for("react.forward_ref"), n && Symbol.for("react.suspense"), n && Symbol.for("react.memo"), n && Symbol.for("react.lazy"), "function" == typeof Symbol && Symbol.iterator;

            function a(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) e += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var i = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, c = {};

            function f(t, e, r) {
                this.props = t, this.context = e, this.refs = c, this.updater = r || i
            }

            function p() {
            }

            function s(t, e, r) {
                this.props = t, this.context = e, this.refs = c, this.updater = r || i
            }

            f.prototype.isReactComponent = {}, f.prototype.setState = function (t, e) {
                if ("object" != typeof t && "function" != typeof t && null != t) throw Error(a(85));
                this.updater.enqueueSetState(this, t, e, "setState")
            }, f.prototype.forceUpdate = function (t) {
                this.updater.enqueueForceUpdate(this, t, "forceUpdate")
            }, p.prototype = f.prototype;
            var u = s.prototype = new p;
            u.constructor = s, o(u, f.prototype), u.isPureReactComponent = !0;
            Object.prototype.hasOwnProperty
        }, 294: (t, e, r) => {
            r(408)
        }
    }, e = {};

    function r(o) {
        var n = e[o];
        if (void 0 !== n) return n.exports;
        var a = e[o] = {exports: {}};
        return t[o](a, a.exports, r), a.exports
    }

    r.d = (t, e) => {
        for (var o in e) r.o(e, o) && !r.o(t, o) && Object.defineProperty(t, o, {enumerable: !0, get: e[o]})
    }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r(294)
})();
