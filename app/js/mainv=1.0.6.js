!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , p = f.toString
      , d = p.call(Object)
      , h = {}
      , g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , y = function e(t) {
        return null != t && t === t.window
    }
      , v = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e,
        n)
            for (i in v)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                    a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function C(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            p()
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes),
            A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
            t = t || d,
            g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T)
                        m = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length;
                        while (s--)
                            h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","),
                        m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)),
                            r
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id")
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            return t
        }
        function se(e) {
            return e[b] = !0,
            e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function le(e, t) {
            var n = e.split("|")
              , i = n.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function(t) {
                return t = +t,
                se(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a,
            h = d.documentElement,
            g = !o(d),
            w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            n.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(d.getElementsByClassName),
            n.getById = ue(function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            y = [],
            (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                v.push("!=", W)
            }),
            y = y.length && new RegExp(y.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Q.test(h.compareDocumentPosition),
            x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e),
            t = t.replace(z, "='$1']"),
            n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e),
            x(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(D),
            f) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        }
        ,
        (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild],
                            a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                    p === t))
                                        break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)
                            e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = pe(t);
        function ye() {}
        ye.prototype = r.filters = r.pseudos,
        r.setFilters = new ye,
        a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            u = [],
            l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = _.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }),
                s = s.slice(n.length));
                for (a in r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }
        ;
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)),
            i && !i[b] && (i = Te(i, o)),
            se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u),
                r) {
                    l = we(v, d),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--)
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = v.length;
                            while (c--)
                                (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    v = we(v === a ? v.splice(h, v.length) : v),
                    i ? i(null, a, v, u) : L.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type])
                                break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        function Ee(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , o = function(o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0,
                        a || f.ownerDocument === d || (p(f),
                        s = !g);
                        while (y = e[h++])
                            if (y(f, a || d, s)) {
                                u.push(f);
                                break
                            }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--,
                    o && x.push(f))
                }
                if (v += m,
                n && m !== v) {
                    h = 0;
                    while (y = t[h++])
                        y(x, b, a, s);
                    if (o) {
                        if (v > 0)
                            while (m--)
                                x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b),
                    c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E,
                l = w),
                x
            };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)),
                n = t.length;
                while (n--)
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }
        ,
        u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o],
                    r.relative[c = l.type])
                        break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && ve(u)))
                            return L.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(D).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(e);
    w.find = E,
    w.expr = E.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = E.uniqueSort,
    w.text = E.getText,
    w.isXMLDoc = E.isXML,
    w.contains = E.contains,
    w.escapeSelector = E.escape;
    var k = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                A.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 && (O[e] || w.uniqueSort(i),
            H.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length)
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1)
            }
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    w.each(n, function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1)
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ;
    function I(e) {
        return e
    }
    function W(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++,
                                    l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== W && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                        n[1][3].add(a(0, e, g(t) ? t : I)),
                        n[2][3].add(a(0, e, g(r) ? r : W))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i
                }
            }
              , o = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then)))
                return a.then();
            while (n--)
                $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }),
    w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _),
        e.removeEventListener("load", _),
        w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _),
    e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n)
                z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(w(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , X = /^-ms-/
      , U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1,
    Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[G(t)] = n;
            else
                for (r in t)
                    i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(M) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q
      , K = new Q
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o),
                1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--)
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                        ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e)))
                        return n;
                    if (void 0 !== (n = ne(o, e)))
                        return n
                } else
                    this.each(function() {
                        K.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = J.get(e, t),
                n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = w._queueHooks(e, t)
              , a = function() {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
      , oe = ["Top", "Right", "Bottom", "Left"]
      , ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , se = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            w.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        le[r] = i,
        i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = J.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
            J.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    w.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o),
            a = ye(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement
      , we = /^key/
      , Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function ke() {
        return !1
    }
    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = ke;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && w.find.matchesSelector(be, i),
                n.guid || (n.guid = w.guid++),
                (u = y.events) || (u = y.events = {}),
                (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    d = g = (s = Ce.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = w.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = w.event.special[d] || {},
                    c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = w.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t,
            n = 1; n < arguments.length; n++)
                u[n] = arguments[n];
            if (t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l),
                n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem,
                    r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = ke),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ae = /<script|<style|<link/i
      , je = /checked\s*(?:[^=]|=\s*.checked.)/i
      , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e),
            a = J.set(t, o),
            l = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e),
            u = w.extend({}, s),
            K.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y))
            return e.each(function(i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())),
                Re(o, t, n, r)
            });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
                l = i,
                f !== d && (l = w.clone(l, !0, !0),
                u && w.merge(s, ye(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, Oe),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)),
            r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s),
                r = 0,
                i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    a = a || ye(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else
                    Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ye(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                w(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
      , $e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Be = new RegExp(oe.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                a = 36 === c.offsetWidth || "absolute",
                be.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "Moz", "ms"]
      , Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye)
            return e;
        var t = e[0].toUpperCase() + e.slice(1)
          , n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t)in Ye)
                return e
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e),
        t
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
            r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i),
            "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
        u
    }
    function et(e, t, n) {
        var r = $e(e)
          , i = Fe(e, t, r)
          , o = "border-box" === w.css(e, "boxSizing", !1, r)
          , a = o;
        if (We.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                        return et(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ke(e, n, s)
            }
        }
    }),
    w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }),
    w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e,t,n,r,i)
    }
    w.Tween = tt,
    tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : tt.propHooks._default.set(this),
            this
        }
    },
    tt.prototype.init.prototype = tt.prototype,
    tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = tt.prototype.init,
    w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval),
        w.fx.tick())
    }
    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }),
        nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r],
            it.test(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r])
                        continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0),
            l = e.style.display || l,
            c = w.css(e, "display"),
            fe([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
            l = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            u = !1;
            for (r in d)
                u || (y ? "hidden"in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                    display: l
                }),
                o && (y.hidden = !g),
                g && fe([e], !0),
                p.done(function() {
                    g || fe([e]),
                    J.remove(e, "fxshow");
                    for (r in d)
                        w.style(e, r, d[r])
                })),
                u = lt(g ? y[r] : 0, r, p),
                r in y || (y[r] = u.start,
                g && (u.end = u.start,
                u.start = 0))
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n),
            i = t[r],
            o = e[n],
            Array.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = w.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts))
                return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return w.map(c, lt, l),
        g(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                pt.tweeners[n] = pt.tweeners[n] || [],
                pt.tweeners[n].unshift(t)
        },
        prefilters: [ct],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            g(r.old) && r.old.call(this),
            r.queue && w.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e)
              , o = w.speed(t, n, r)
              , a = function() {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = w.timers
                  , a = J.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }),
    w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        nt = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        rt || (rt = !0,
        at())
    }
    ,
    w.fx.stop = function() {
        rt = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a],
            ht[a] = i,
            i = null != n(e, t, r) ? a : null,
            ht[a] = o),
            i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                i = w.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    function vt(e) {
        return (e.match(M) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, mt(this)))
                });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0,
                    o = w(this),
                    a = xt(e);
                    while (t = a[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = g(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/
      , Tt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(),
            x.sort()),
            c = m.indexOf(":") < 0 && "on" + m,
            t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : w.makeArray(n, [t]),
            d = w.event.special[m] || {},
            o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m,
                    wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    h = s,
                    t.type = a > 1 ? l : d.bindType || m,
                    (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                    (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null),
                w.event.triggered = m,
                t.isPropagationStopped() && h.addEventListener(m, Tt),
                i[m](),
                t.isPropagationStopped() && h.removeEventListener(m, Tt),
                w.event.triggered = void 0,
                u && (i[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t);
                i || r.addEventListener(e, n, !0),
                J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0),
                J.remove(r, t))
            }
        }
    });
    var Ct = e.location
      , Et = Date.now()
      , kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , Dt = /\r?\n/g
      , Nt = /^(?:submit|button|image|reset|file)$/i
      , At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g
      , Lt = /#.*$/
      , Ht = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Mt = /^(?:GET|HEAD)$/
      , Rt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _t(e, t, n, r) {
        var i = {}
          , o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0,
            w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r),
        e
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a))
                                s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t),
                    k(0, t),
                    this
                }
            };
            if (v.promise(E),
            h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
            _t(It, h, n, E),
            c)
                return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Mt.test(h.type),
            o = h.url.replace(Lt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Ht, "$1"),
            d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d),
            h.url = o + d),
            h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = "abort",
            m.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            i = _t(Wt, h, n, E)) {
                if (E.readyState = 1,
                f && y.trigger("ajaxSend", [E, h]),
                c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(b, k)
                } catch (e) {
                    if (c)
                        throw e;
                    k(-1, e)
                }
            } else
                k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                E.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (b = Xt(h, E, r)),
                b = Ut(h, b, E, l),
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                p = b.data,
                l = !(d = b.error))) : (d = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                E.statusCode(x),
                x = void 0,
                f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                m.fireWith(g, [E, C]),
                f && (y.trigger("ajaxComplete", [E, h]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r,
            r = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }),
    w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials"in Gt,
    h.ajax = Gt = !!Gt,
    w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = []
      , Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || w.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? w(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Yt.push(i)),
                a && g(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        o = A.exec(e),
        a = !n && [],
        o ? [t.createElement(o[1])] : (o = xe([e], t, a),
        a && a.length && w(a).remove(),
        w.merge([], o.childNodes))
    }
    ,
    w.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            o = w.css(e, "top"),
            u = w.css(e, "left"),
            (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            g(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            if (r)
                return r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position"))
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n)
                return n = Fe(e, t),
                We.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = o.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || w.guid++,
            i
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = N,
    w.isFunction = g,
    w.isWindow = y,
    w.camelCase = G,
    w.type = x,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery
      , Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt),
        t && e.jQuery === w && (e.jQuery = Jt),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
});
(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("jquery")) : typeof define === "function" && define.amd ? define(["jquery"], factory) : global.Util = factory(global.jQuery)
}
)(this, function($) {
    "use strict";
    $ = $ && $.hasOwnProperty("default") ? $["default"] : $;
    var Util = function($$$1) {
        var TRANSITION_END = "transitionend";
        var MAX_UID = 1e6;
        var MILLISECONDS_MULTIPLIER = 1e3;
        function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()
        }
        function getSpecialTransitionEndEvent() {
            return {
                bindType: TRANSITION_END,
                delegateType: TRANSITION_END,
                handle: function handle(event) {
                    if ($$$1(event.target).is(this)) {
                        return event.handleObj.handler.apply(this, arguments)
                    }
                    return undefined
                }
            }
        }
        function transitionEndEmulator(duration) {
            var _this = this;
            var called = false;
            $$$1(this).one(Util.TRANSITION_END, function() {
                called = true
            });
            setTimeout(function() {
                if (!called) {
                    Util.triggerTransitionEnd(_this)
                }
            }, duration);
            return this
        }
        function setTransitionEndSupport() {
            $$$1.fn.emulateTransitionEnd = transitionEndEmulator;
            $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
        }
        var Util = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function getUID(prefix) {
                do {
                    prefix += ~~(Math.random() * MAX_UID)
                } while (document.getElementById(prefix));
                return prefix
            },
            getSelectorFromElement: function getSelectorFromElement(element) {
                var selector = element.getAttribute("data-target");
                if (!selector || selector === "#") {
                    selector = element.getAttribute("href") || ""
                }
                try {
                    return document.querySelector(selector) ? selector : null
                } catch (err) {
                    return null
                }
            },
            getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
                if (!element) {
                    return 0
                }
                var transitionDuration = $$$1(element).css("transition-duration");
                var floatTransitionDuration = parseFloat(transitionDuration);
                if (!floatTransitionDuration) {
                    return 0
                }
                transitionDuration = transitionDuration.split(",")[0];
                return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER
            },
            reflow: function reflow(element) {
                return element.offsetHeight
            },
            triggerTransitionEnd: function triggerTransitionEnd(element) {
                $$$1(element).trigger(TRANSITION_END)
            },
            supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(TRANSITION_END)
            },
            isElement: function isElement(obj) {
                return (obj[0] || obj).nodeType
            },
            typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
                for (var property in configTypes) {
                    if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                        var expectedTypes = configTypes[property];
                        var value = config[property];
                        var valueType = value && Util.isElement(value) ? "element" : toType(value);
                        if (!new RegExp(expectedTypes).test(valueType)) {
                            throw new Error(componentName.toUpperCase() + ": " + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'))
                        }
                    }
                }
            }
        };
        setTransitionEndSupport();
        return Util
    }($);
    return Util
});
(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("jquery"), require("popper.js"), require("./util.js")) : typeof define === "function" && define.amd ? define(["jquery", "popper.js", "./util.js"], factory) : global.Dropdown = factory(global.jQuery, global.Popper, global.Util)
}
)(this, function($, Popper, Util) {
    "use strict";
    $ = $ && $.hasOwnProperty("default") ? $["default"] : $;
    Popper = Popper && Popper.hasOwnProperty("default") ? Popper["default"] : Popper;
    Util = Util && Util.hasOwnProperty("default") ? Util["default"] : Util;
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value"in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            _defineProperties(Constructor, staticProps);
        return Constructor
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            })
        } else {
            obj[key] = value
        }
        return obj
    }
    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === "function") {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable
                }))
            }
            ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key])
            })
        }
        return target
    }
    var Dropdown = function($$$1) {
        var NAME = "dropdown";
        var VERSION = "4.1.3";
        var DATA_KEY = "bs.dropdown";
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = ".data-api";
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var ESCAPE_KEYCODE = 27;
        var SPACE_KEYCODE = 32;
        var TAB_KEYCODE = 9;
        var ARROW_UP_KEYCODE = 38;
        var ARROW_DOWN_KEYCODE = 40;
        var RIGHT_MOUSE_BUTTON_WHICH = 3;
        var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            CLICK: "click" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
            KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
            KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            DROPRIGHT: "dropright",
            DROPLEFT: "dropleft",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            POSITION_STATIC: "position-static"
        };
        var Selector = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
        };
        var AttachmentMap = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end",
            RIGHT: "right-start",
            RIGHTEND: "right-end",
            LEFT: "left-start",
            LEFTEND: "left-end"
        };
        var Default = {
            offset: 0,
            flip: true,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        };
        var DefaultType = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        };
        var Dropdown = function() {
            function Dropdown(element, config) {
                this._element = element;
                this._popper = null;
                this._config = this._getConfig(config);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners()
            }
            var _proto = Dropdown.prototype;
            _proto.toggle = function toggle() {
                if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
                    return
                }
                var parent = Dropdown._getParentFromElement(this._element);
                var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);
                Dropdown._clearMenus();
                if (isActive) {
                    return
                }
                var relatedTarget = {
                    relatedTarget: this._element
                };
                var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
                $$$1(parent).trigger(showEvent);
                if (showEvent.isDefaultPrevented()) {
                    return
                }
                if (!this._inNavbar) {
                    if (typeof Popper === "undefined") {
                        throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)")
                    }
                    var referenceElement = this._element;
                    if (this._config.reference === "parent") {
                        referenceElement = parent
                    } else if (Util.isElement(this._config.reference)) {
                        referenceElement = this._config.reference;
                        if (typeof this._config.reference.jquery !== "undefined") {
                            referenceElement = this._config.reference[0]
                        }
                    }
                    if (this._config.boundary !== "scrollParent") {
                        $$$1(parent).addClass(ClassName.POSITION_STATIC)
                    }
                    this._popper = new Popper(referenceElement,this._menu,this._getPopperConfig())
                }
                if ("ontouchstart"in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
                    $$$1(document.body).children().on("mouseover", null, $$$1.noop)
                }
                this._element.focus();
                this._element.setAttribute("aria-expanded", true);
                $$$1(this._menu).toggleClass(ClassName.SHOW);
                $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget))
            }
            ;
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                $$$1(this._element).off(EVENT_KEY);
                this._element = null;
                this._menu = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                    this._popper = null
                }
            }
            ;
            _proto.update = function update() {
                this._inNavbar = this._detectNavbar();
                if (this._popper !== null) {
                    this._popper.scheduleUpdate()
                }
            }
            ;
            _proto._addEventListeners = function _addEventListeners() {
                var _this = this;
                $$$1(this._element).on(Event.CLICK, function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this.toggle()
                })
            }
            ;
            _proto._getConfig = function _getConfig(config) {
                config = _objectSpread({}, this.constructor.Default, $$$1(this._element).data(), config);
                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config
            }
            ;
            _proto._getMenuElement = function _getMenuElement() {
                if (!this._menu) {
                    var parent = Dropdown._getParentFromElement(this._element);
                    if (parent) {
                        this._menu = parent.querySelector(Selector.MENU)
                    }
                }
                return this._menu
            }
            ;
            _proto._getPlacement = function _getPlacement() {
                var $parentDropdown = $$$1(this._element.parentNode);
                var placement = AttachmentMap.BOTTOM;
                if ($parentDropdown.hasClass(ClassName.DROPUP)) {
                    placement = AttachmentMap.TOP;
                    if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                        placement = AttachmentMap.TOPEND
                    }
                } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
                    placement = AttachmentMap.RIGHT
                } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
                    placement = AttachmentMap.LEFT
                } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                    placement = AttachmentMap.BOTTOMEND
                }
                return placement
            }
            ;
            _proto._detectNavbar = function _detectNavbar() {
                return $$$1(this._element).closest(".navbar").length > 0
            }
            ;
            _proto._getPopperConfig = function _getPopperConfig() {
                var _this2 = this;
                var offsetConf = {};
                if (typeof this._config.offset === "function") {
                    offsetConf.fn = function(data) {
                        data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets) || {});
                        return data
                    }
                } else {
                    offsetConf.offset = this._config.offset
                }
                var popperConfig = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: offsetConf,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                if (this._config.display === "static") {
                    popperConfig.modifiers.applyStyle = {
                        enabled: false
                    }
                }
                return popperConfig
            }
            ;
            Dropdown._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function() {
                    var data = $$$1(this).data(DATA_KEY);
                    var _config = typeof config === "object" ? config : null;
                    if (!data) {
                        data = new Dropdown(this,_config);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") {
                            throw new TypeError('No method named "' + config + '"')
                        }
                        data[config]()
                    }
                })
            }
            ;
            Dropdown._clearMenus = function _clearMenus(event) {
                if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === "keyup" && event.which !== TAB_KEYCODE)) {
                    return
                }
                var toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));
                for (var i = 0, len = toggles.length; i < len; i++) {
                    var parent = Dropdown._getParentFromElement(toggles[i]);
                    var context = $$$1(toggles[i]).data(DATA_KEY);
                    var relatedTarget = {
                        relatedTarget: toggles[i]
                    };
                    if (event && event.type === "click") {
                        relatedTarget.clickEvent = event
                    }
                    if (!context) {
                        continue
                    }
                    var dropdownMenu = context._menu;
                    if (!$$$1(parent).hasClass(ClassName.SHOW)) {
                        continue
                    }
                    if (event && (event.type === "click" && /input|textarea/i.test(event.target.tagName) || event.type === "keyup" && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
                        continue
                    }
                    var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
                    $$$1(parent).trigger(hideEvent);
                    if (hideEvent.isDefaultPrevented()) {
                        continue
                    }
                    if ("ontouchstart"in document.documentElement) {
                        $$$1(document.body).children().off("mouseover", null, $$$1.noop)
                    }
                    toggles[i].setAttribute("aria-expanded", "false");
                    $$$1(dropdownMenu).removeClass(ClassName.SHOW);
                    $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget))
                }
            }
            ;
            Dropdown._getParentFromElement = function _getParentFromElement(element) {
                var parent;
                var selector = Util.getSelectorFromElement(element);
                if (selector) {
                    parent = document.querySelector(selector)
                }
                return parent || element.parentNode
            }
            ;
            Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
                if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
                    return
                }
                event.preventDefault();
                event.stopPropagation();
                if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
                    return
                }
                var parent = Dropdown._getParentFromElement(this);
                var isActive = $$$1(parent).hasClass(ClassName.SHOW);
                if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
                    if (event.which === ESCAPE_KEYCODE) {
                        var toggle = parent.querySelector(Selector.DATA_TOGGLE);
                        $$$1(toggle).trigger("focus")
                    }
                    $$$1(this).trigger("click");
                    return
                }
                var items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));
                if (items.length === 0) {
                    return
                }
                var index = items.indexOf(event.target);
                if (event.which === ARROW_UP_KEYCODE && index > 0) {
                    index--
                }
                if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
                    index++
                }
                if (index < 0) {
                    index = 0
                }
                items[index].focus()
            }
            ;
            _createClass(Dropdown, null, [{
                key: "VERSION",
                get: function get() {
                    return VERSION
                }
            }, {
                key: "Default",
                get: function get() {
                    return Default
                }
            }, {
                key: "DefaultType",
                get: function get() {
                    return DefaultType
                }
            }]);
            return Dropdown
        }();
        $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
            event.preventDefault();
            event.stopPropagation();
            Dropdown._jQueryInterface.call($$$1(this), "toggle")
        }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function(e) {
            e.stopPropagation()
        });
        $$$1.fn[NAME] = Dropdown._jQueryInterface;
        $$$1.fn[NAME].Constructor = Dropdown;
        $$$1.fn[NAME].noConflict = function() {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Dropdown._jQueryInterface
        }
        ;
        return Dropdown
    }($, Popper);
    return Dropdown
});
(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("jquery"), require("./util.js")) : typeof define === "function" && define.amd ? define(["jquery", "./util.js"], factory) : global.Collapse = factory(global.jQuery, global.Util)
}
)(this, function($, Util) {
    "use strict";
    $ = $ && $.hasOwnProperty("default") ? $["default"] : $;
    Util = Util && Util.hasOwnProperty("default") ? Util["default"] : Util;
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value"in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor)
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            _defineProperties(Constructor, staticProps);
        return Constructor
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            })
        } else {
            obj[key] = value
        }
        return obj
    }
    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === "function") {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable
                }))
            }
            ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key])
            })
        }
        return target
    }
    var Collapse = function($$$1) {
        var NAME = "collapse";
        var VERSION = "4.1.3";
        var DATA_KEY = "bs.collapse";
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = ".data-api";
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var Default = {
            toggle: true,
            parent: ""
        };
        var DefaultType = {
            toggle: "boolean",
            parent: "(string|element)"
        };
        var Event = {
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        };
        var Dimension = {
            WIDTH: "width",
            HEIGHT: "height"
        };
        var Selector = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        };
        var Collapse = function() {
            function Collapse(element, config) {
                this._isTransitioning = false;
                this._element = element;
                this._config = this._getConfig(config);
                this._triggerArray = $$$1.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
                var toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));
                for (var i = 0, len = toggleList.length; i < len; i++) {
                    var elem = toggleList[i];
                    var selector = Util.getSelectorFromElement(elem);
                    var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function(foundElem) {
                        return foundElem === element
                    });
                    if (selector !== null && filterElement.length > 0) {
                        this._selector = selector;
                        this._triggerArray.push(elem)
                    }
                }
                this._parent = this._config.parent ? this._getParent() : null;
                if (!this._config.parent) {
                    this._addAriaAndCollapsedClass(this._element, this._triggerArray)
                }
                if (this._config.toggle) {
                    this.toggle()
                }
            }
            var _proto = Collapse.prototype;
            _proto.toggle = function toggle() {
                if ($$$1(this._element).hasClass(ClassName.SHOW)) {
                    this.hide()
                } else {
                    this.show()
                }
            }
            ;
            _proto.show = function show() {
                var _this = this;
                if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
                    return
                }
                var actives;
                var activesData;
                if (this._parent) {
                    actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function(elem) {
                        return elem.getAttribute("data-parent") === _this._config.parent
                    });
                    if (actives.length === 0) {
                        actives = null
                    }
                }
                if (actives) {
                    activesData = $$$1(actives).not(this._selector).data(DATA_KEY);
                    if (activesData && activesData._isTransitioning) {
                        return
                    }
                }
                var startEvent = $$$1.Event(Event.SHOW);
                $$$1(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return
                }
                if (actives) {
                    Collapse._jQueryInterface.call($$$1(actives).not(this._selector), "hide");
                    if (!activesData) {
                        $$$1(actives).data(DATA_KEY, null)
                    }
                }
                var dimension = this._getDimension();
                $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
                this._element.style[dimension] = 0;
                if (this._triggerArray.length) {
                    $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr("aria-expanded", true)
                }
                this.setTransitioning(true);
                var complete = function complete() {
                    $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
                    _this._element.style[dimension] = "";
                    _this.setTransitioning(false);
                    $$$1(_this._element).trigger(Event.SHOWN)
                };
                var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                var scrollSize = "scroll" + capitalizedDimension;
                var transitionDuration = Util.getTransitionDurationFromElement(this._element);
                $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
                this._element.style[dimension] = this._element[scrollSize] + "px"
            }
            ;
            _proto.hide = function hide() {
                var _this2 = this;
                if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
                    return
                }
                var startEvent = $$$1.Event(Event.HIDE);
                $$$1(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return
                }
                var dimension = this._getDimension();
                this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
                Util.reflow(this._element);
                $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
                var triggerArrayLength = this._triggerArray.length;
                if (triggerArrayLength > 0) {
                    for (var i = 0; i < triggerArrayLength; i++) {
                        var trigger = this._triggerArray[i];
                        var selector = Util.getSelectorFromElement(trigger);
                        if (selector !== null) {
                            var $elem = $$$1([].slice.call(document.querySelectorAll(selector)));
                            if (!$elem.hasClass(ClassName.SHOW)) {
                                $$$1(trigger).addClass(ClassName.COLLAPSED).attr("aria-expanded", false)
                            }
                        }
                    }
                }
                this.setTransitioning(true);
                var complete = function complete() {
                    _this2.setTransitioning(false);
                    $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN)
                };
                this._element.style[dimension] = "";
                var transitionDuration = Util.getTransitionDurationFromElement(this._element);
                $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration)
            }
            ;
            _proto.setTransitioning = function setTransitioning(isTransitioning) {
                this._isTransitioning = isTransitioning
            }
            ;
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            }
            ;
            _proto._getConfig = function _getConfig(config) {
                config = _objectSpread({}, Default, config);
                config.toggle = Boolean(config.toggle);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config
            }
            ;
            _proto._getDimension = function _getDimension() {
                var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
                return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
            }
            ;
            _proto._getParent = function _getParent() {
                var _this3 = this;
                var parent = null;
                if (Util.isElement(this._config.parent)) {
                    parent = this._config.parent;
                    if (typeof this._config.parent.jquery !== "undefined") {
                        parent = this._config.parent[0]
                    }
                } else {
                    parent = document.querySelector(this._config.parent)
                }
                var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                var children = [].slice.call(parent.querySelectorAll(selector));
                $$$1(children).each(function(i, element) {
                    _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element])
                });
                return parent
            }
            ;
            _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
                if (element) {
                    var isOpen = $$$1(element).hasClass(ClassName.SHOW);
                    if (triggerArray.length) {
                        $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr("aria-expanded", isOpen)
                    }
                }
            }
            ;
            Collapse._getTargetFromElement = function _getTargetFromElement(element) {
                var selector = Util.getSelectorFromElement(element);
                return selector ? document.querySelector(selector) : null
            }
            ;
            Collapse._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function() {
                    var $this = $$$1(this);
                    var data = $this.data(DATA_KEY);
                    var _config = _objectSpread({}, Default, $this.data(), typeof config === "object" && config ? config : {});
                    if (!data && _config.toggle && /show|hide/.test(config)) {
                        _config.toggle = false
                    }
                    if (!data) {
                        data = new Collapse(this,_config);
                        $this.data(DATA_KEY, data)
                    }
                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") {
                            throw new TypeError('No method named "' + config + '"')
                        }
                        data[config]()
                    }
                })
            }
            ;
            _createClass(Collapse, null, [{
                key: "VERSION",
                get: function get() {
                    return VERSION
                }
            }, {
                key: "Default",
                get: function get() {
                    return Default
                }
            }]);
            return Collapse
        }();
        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
            if (event.currentTarget.tagName === "A") {
                event.preventDefault()
            }
            var $trigger = $$$1(this);
            var selector = Util.getSelectorFromElement(this);
            var selectors = [].slice.call(document.querySelectorAll(selector));
            $$$1(selectors).each(function() {
                var $target = $$$1(this);
                var data = $target.data(DATA_KEY);
                var config = data ? "toggle" : $trigger.data();
                Collapse._jQueryInterface.call($target, config)
            })
        });
        $$$1.fn[NAME] = Collapse._jQueryInterface;
        $$$1.fn[NAME].Constructor = Collapse;
        $$$1.fn[NAME].noConflict = function() {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Collapse._jQueryInterface
        }
        ;
        return Collapse
    }($);
    return Collapse
});
(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}
)(function(t) {
    t.ui = t.ui || {},
    t.ui.version = "1.12.1";
    var e = 0
      , i = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++)
                try {
                    s = t._data(n, "events"),
                    s && s.remove && t(n).triggerHandler("remove")
                } catch (a) {}
            e(i)
        }
    }(t.cleanData),
    t.widget = function(e, i, s) {
        var n, o, a, r = {}, l = e.split(".")[0];
        e = e.split(".")[1];
        var h = l + "-" + e;
        return s || (s = i,
        i = t.Widget),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        t.expr[":"][h.toLowerCase()] = function(e) {
            return !!t.data(e, h)
        }
        ,
        t[l] = t[l] || {},
        n = t[l][e],
        o = t[l][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e),
            void 0) : new o(t,e)
        }
        ,
        t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }),
        a = new i,
        a.options = t.widget.extend({}, a.options),
        t.each(s, function(e, s) {
            return t.isFunction(s) ? (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }
                function n(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t,
                    this._superApply = n,
                    e = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    e
                }
            }(),
            void 0) : (r[e] = s,
            void 0)
        }),
        o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }),
        n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }),
        delete n._childConstructors) : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
    }
    ,
    t.widget.extend = function(e) {
        for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
            for (s in o[a])
                n = o[a][s],
                o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
        return e
    }
    ,
    t.widget.bridge = function(e, s) {
        var n = s.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var a = "string" == typeof o
              , r = i.call(arguments, 1)
              , l = this;
            return a ? this.length || "instance" !== o ? this.each(function() {
                var i, s = t.data(this, n);
                return "instance" === o ? (l = s,
                !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r),
                i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i,
                !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'")
            }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
            this.each(function() {
                var e = t.data(this, n);
                e ? (e.option(o || {}),
                e._init && e._init()) : t.data(this, n, new s(o,this))
            })),
            l
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(i, s) {
            s = t(s || this.defaultElement || this)[0],
            this.element = t(s),
            this.uuid = e++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            this.classesElementLookup = {},
            s !== this && (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }),
            this.document = t(s.style ? s.ownerDocument : s.document || s),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(),
            t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {},
                s = e.split("."),
                e = s.shift(),
                s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]),
                    o = 0; s.length - 1 > o; o++)
                        n[s[o]] = n[s[o]] || {},
                        n = n[s[o]];
                    if (e = s.pop(),
                    1 === arguments.length)
                        return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e)
                n = this.classesElementLookup[i],
                e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()),
                this._removeClass(n, i),
                s.addClass(this._classes({
                    element: s,
                    keys: i,
                    classes: e,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++)
                    a = n.classesElementLookup[i[r]] || t(),
                    a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()),
                    n.classesElementLookup[i[r]] = a,
                    s.push(i[r]),
                    o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }
            var s = []
              , n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e),
            this._on(e.element, {
                remove: "_untrackClassesElement"
            }),
            e.keys && i(e.keys.match(/\S+/g) || [], !0),
            e.extra && i(e.extra.match(/\S+/g) || []),
            s.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t
              , o = {
                extra: n ? e : i,
                keys: n ? t : e,
                element: n ? this.element : t,
                add: s
            };
            return o.element.toggleClass(this._classes(o), s),
            this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i,
            i = e,
            e = !1),
            s ? (i = n = t(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            t.each(s, function(s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/)
                  , h = l[1] + o.eventNamespace
                  , c = l[2];
                c ? n.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.off(i).off(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {},
            i = t.Event(i),
            i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            a = !t.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](),
                o && o.call(s[0]),
                i()
            })
        }
    }),
    t.widget,
    function() {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        var n, o = Math.max, a = Math.abs, r = /left|center|right/, l = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n)
                    return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                return t("body").append(s),
                e = o.offsetWidth,
                s.css("overflow", "scroll"),
                i = o.offsetWidth,
                e === i && (i = s[0].clientWidth),
                s.remove(),
                n = e - i
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
                  , s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
                  , n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth
                  , o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: o ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window)
                  , s = t.isWindow(i[0])
                  , n = !!i[0] && 9 === i[0].nodeType
                  , o = !s && !n;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: o ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        },
        t.fn.position = function(n) {
            if (!n || !n.of)
                return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, g, m, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b), w = (n.collision || "flip").split(" "), k = {};
            return _ = s(v),
            v[0].preventDefault && (n.at = "left top"),
            p = _.width,
            f = _.height,
            g = _.offset,
            m = t.extend({}, g),
            t.each(["my", "at"], function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                i[0] = r.test(i[0]) ? i[0] : "center",
                i[1] = l.test(i[1]) ? i[1] : "center",
                t = h.exec(i[0]),
                e = h.exec(i[1]),
                k[this] = [t ? t[0] : 0, e ? e[0] : 0],
                n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }),
            1 === w.length && (w[1] = w[0]),
            "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2),
            "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2),
            u = e(k.at, p, f),
            m.left += u[0],
            m.top += u[1],
            this.each(function() {
                var s, r, l = t(this), h = l.outerWidth(), c = l.outerHeight(), d = i(this, "marginLeft"), _ = i(this, "marginTop"), x = h + d + i(this, "marginRight") + y.width, C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, m), T = e(k.my, l.outerWidth(), l.outerHeight());
                "right" === n.my[0] ? D.left -= h : "center" === n.my[0] && (D.left -= h / 2),
                "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2),
                D.left += T[0],
                D.top += T[1],
                s = {
                    marginLeft: d,
                    marginTop: _
                },
                t.each(["left", "top"], function(e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: h,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [u[0] + T[0], u[1] + T[1]],
                        my: n.my,
                        at: n.at,
                        within: b,
                        elem: l
                    })
                }),
                n.using && (r = function(t) {
                    var e = g.left - D.left
                      , i = e + p - h
                      , s = g.top - D.top
                      , r = s + f - c
                      , u = {
                        target: {
                            element: v,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: l,
                            left: D.left,
                            top: D.top,
                            width: h,
                            height: c
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    h > p && p > a(e + i) && (u.horizontal = "center"),
                    c > f && f > a(s + r) && (u.vertical = "middle"),
                    u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical",
                    n.using.call(this, t, u)
                }
                ),
                l.offset(t.extend(D, {
                    using: r
                }))
            })
        }
        ,
        t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n,
                    t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n,
                    t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - r - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o,
                    (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l,
                    (s > 0 || u > a(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - r - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o,
                    (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l,
                    (i > 0 || u > a(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments),
                    t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments),
                    t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(),
    t.ui.position,
    t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body),
        e.nodeName || (e = t.body),
        e
    }
    ,
    t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target)
                      , s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e),
                    e.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item")
                          , s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"),
                        this.focus(e, s))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled")
              , i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                a = !1,
                s = this.previousFilter || "",
                o = !1,
                n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode),
                clearTimeout(this.filterTimer),
                n === s ? o = !0 : n = s + n,
                i = this._filterMenuItems(n),
                i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i,
                i.length || (n = String.fromCharCode(e.keyCode),
                i = this._filterMenuItems(n)),
                i.length ? (this.focus(e, i),
                this.previousFilter = n,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i, s, n, o, a = this, r = this.options.icons.submenu, l = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            s = l.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this)
                  , i = e.prev()
                  , s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r),
                i.attr("aria-haspopup", "true").prepend(s),
                e.attr("aria-labelledby", i.attr("id"))
            }),
            this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"),
            e = l.add(this.element),
            i = e.find(this.options.items),
            i.not(".ui-menu-item").each(function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
            }),
            n = i.not(".ui-menu-item, .ui-menu-divider"),
            o = n.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"),
            i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t + ""),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            s = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(s, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(n, null, "ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            i = e.children(".ui-menu"),
            i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
            n = e.offset().top - this.activeMenu.offset().top - i - s,
            o = this.activeMenu.scrollTop(),
            a = this.activeMenu.height(),
            r = e.outerHeight(),
            0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(e),
                this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element),
            t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()),
            this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this),
                0 > i.offset().top - s - n
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())),
            void 0) : (this.next(e),
            void 0)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this),
                i.offset().top - s + n > 0
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())),
            void 0) : (this.next(e),
            void 0)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }),
    t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element),
            this.valueMethod = this.element[o || a ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return e = !0,
                        s = !0,
                        i = !0,
                        void 0;
                    e = !1,
                    s = !1,
                    i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                    case o.PAGE_UP:
                        e = !0,
                        this._move("previousPage", n);
                        break;
                    case o.PAGE_DOWN:
                        e = !0,
                        this._move("nextPage", n);
                        break;
                    case o.UP:
                        e = !0,
                        this._keyEvent("previous", n);
                        break;
                    case o.DOWN:
                        e = !0,
                        this._keyEvent("next", n);
                        break;
                    case o.ENTER:
                        this.menu.active && (e = !0,
                        n.preventDefault(),
                        this.menu.select(n));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(n),
                        n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e)
                        return e = !1,
                        (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(),
                        void 0;
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1,
                    t.preventDefault(),
                    void 0) : (this._searchTimeout(t),
                    void 0)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? (delete this.cancelBlur,
                    void 0) : (clearTimeout(this.searching),
                    this.close(t),
                    this._change(t),
                    void 0)
                }
            }),
            this._initSource(),
            this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur,
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1,
                    e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(),
                    this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    }),
                    void 0) : (n = i.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value),
                    s = i.item.attr("aria-label") || n.value,
                    s && t.trim(s).length && (this.liveRegion.children().hide(),
                    t("<div>").text(s).appendTo(this.liveRegion)),
                    void 0)
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item")
                      , n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = n,
                    this._delay(function() {
                        this.previous = n,
                        this.selectedItem = s
                    })),
                    !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = s
                }
            }),
            this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e && e[0] || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source,
            this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(e, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                var e = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null,
                this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
            this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
            this.menu.blur(),
            void 0) : (this.menu[t](e),
            void 0) : (this.search(null, e),
            void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e),
            e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length)
                return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }),
    t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            t("<div>").text(i).appendTo(this.liveRegion))
        }
    }),
    t.ui.autocomplete,
    t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i),
            e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id")
              , s = (e.attr("aria-describedby") || "").split(/\s+/)
              , n = t.inArray(i, s);
            -1 !== n && s.splice(n, 1),
            e.removeData("ui-tooltip-id"),
            s = t.trim(s.join(" ")),
            s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this.disabledTitles = t([])
        },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i),
            "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e.element)
            })
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0],
                e.close(n, !0)
            }),
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }),
            this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this
              , s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
            s.data("ui-tooltip-open", !0),
            e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"),
                e.target = e.currentTarget = this,
                i.close(e, !0)),
                s.attr("title") && (s.uniqueId(),
                i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                },
                s.attr("title", ""))
            }),
            this._registerCloseHandlers(e, s),
            this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                n._delay(function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o),
                    this._open(e, t, i))
                })
            }),
            i && this._open(e, t, i),
            void 0)
        },
        _open: function(e, i, s) {
            function n(t) {
                h.of = t,
                a.is(":hidden") || a.position(h)
            }
            var o, a, r, l, h = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i))
                    return o.tooltip.find(".ui-tooltip-content").html(s),
                    void 0;
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
                o = this._tooltip(i),
                a = o.tooltip,
                this._addDescribedBy(i, a.attr("id")),
                a.find(".ui-tooltip-content").html(s),
                this.liveRegion.children().hide(),
                l = t("<div>").html(a.find(".ui-tooltip-content").html()),
                l.removeAttr("name").find("[name]").removeAttr("name"),
                l.removeAttr("id").find("[id]").removeAttr("id"),
                l.appendTo(this.liveRegion),
                this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: n
                }),
                n(e)) : a.position(t.extend({
                    of: i
                }, this.options.position)),
                a.hide(),
                this._show(a, this.options.show),
                this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (n(h.of),
                    clearInterval(r))
                }, t.fx.interval)),
                this._trigger("open", e, {
                    tooltip: a
                })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0],
                        this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }
            ),
            e && "mouseover" !== e.type || (s.mouseleave = "close"),
            e && "focusin" !== e.type || (s.focusout = "close"),
            this._on(!0, i, s)
        },
        close: function(e) {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            return o ? (i = o.tooltip,
            o.closing || (clearInterval(this.delayedShow),
            n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")),
            this._removeDescribedBy(n),
            o.hiding = !0,
            i.stop(!0),
            this._hide(i, this.options.hide, function() {
                s._removeTooltip(t(this))
            }),
            n.removeData("ui-tooltip-open"),
            this._off(n, "mouseleave focusout keyup"),
            n[0] !== this.element[0] && this._off(n, "remove"),
            this._off(this.document, "mousemove"),
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title),
                delete s.parents[e]
            }),
            o.closing = !0,
            this._trigger("close", e, {
                tooltip: i
            }),
            o.hiding || (o.closing = !1)),
            void 0) : (n.removeData("ui-tooltip-open"),
            void 0)
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip")
              , s = t("<div>").appendTo(i)
              , n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"),
            this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
            i.appendTo(this._appendTo(e)),
            this.tooltips[n] = {
                element: e,
                tooltip: i
            }
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        },
        _removeTooltip: function(t) {
            t.remove(),
            delete this.tooltips[t.attr("id")]
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body),
            e
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur")
                  , o = s.element;
                n.target = n.currentTarget = o[0],
                e.close(n, !0),
                t("#" + i).remove(),
                o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                o.removeData("ui-tooltip-title"))
            }),
            this.liveRegion.remove()
        }
    }),
    t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass),
            t
        }
    }),
    t.ui.tooltip
});
(function(factory) {
    var registeredInModuleLoader = false;
    if (typeof define === "function" && define.amd) {
        define(factory);
        registeredInModuleLoader = true
    }
    if (typeof exports === "object") {
        module.exports = factory();
        registeredInModuleLoader = true
    }
    if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function() {
            window.Cookies = OldCookies;
            return api
        }
    }
}
)(function() {
    function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) {
                result[key] = attributes[key]
            }
        }
        return result
    }
    function init(converter) {
        function api(key, value, attributes) {
            var result;
            if (typeof document === "undefined") {
                return
            }
            if (arguments.length > 1) {
                attributes = extend({
                    path: "/"
                }, api.defaults, attributes);
                if (typeof attributes.expires === "number") {
                    var expires = new Date;
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
                    attributes.expires = expires
                }
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result
                    }
                } catch (e) {}
                if (!converter.write) {
                    value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
                } else {
                    value = converter.write(value, key)
                }
                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);
                var stringifiedAttributes = "";
                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue
                    }
                    stringifiedAttributes += "; " + attributeName;
                    if (attributes[attributeName] === true) {
                        continue
                    }
                    stringifiedAttributes += "=" + attributes[attributeName]
                }
                return document.cookie = key + "=" + value + stringifiedAttributes
            }
            if (!key) {
                result = {}
            }
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;
            for (; i < cookies.length; i++) {
                var parts = cookies[i].split("=");
                var cookie = parts.slice(1).join("=");
                if (!this.json && cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1)
                }
                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie)
                        } catch (e) {}
                    }
                    if (key === name) {
                        result = cookie;
                        break
                    }
                    if (!key) {
                        result[name] = cookie
                    }
                } catch (e) {}
            }
            return result
        }
        api.set = api;
        api.get = function(key) {
            return api.call(api, key)
        }
        ;
        api.getJSON = function() {
            return api.apply({
                json: true
            }, [].slice.call(arguments))
        }
        ;
        api.defaults = {};
        api.remove = function(key, attributes) {
            api(key, "", extend(attributes, {
                expires: -1
            }))
        }
        ;
        api.withConverter = init;
        return api
    }
    return init(function() {})
});
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e = -1
      , o = -1
      , n = function(t) {
        return parseFloat(t) || 0
    }
      , a = function(e) {
        var o = 1
          , a = t(e)
          , i = null
          , r = [];
        return a.each(function() {
            var e = t(this)
              , a = e.offset().top - n(e.css("margin-top"))
              , s = r.length > 0 ? r[r.length - 1] : null;
            null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e),
            i = a
        }),
        r
    }
      , i = function(e) {
        var o = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        };
        return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0),
        o)
    }
      , r = t.fn.matchHeight = function(e) {
        var o = i(e);
        if (o.remove) {
            var n = this;
            return this.css(o.property, ""),
            t.each(r._groups, function(t, e) {
                e.elements = e.elements.not(n)
            }),
            this
        }
        return this.length <= 1 && !o.target ? this : (r._groups.push({
            elements: this,
            options: o
        }),
        r._apply(this, o),
        this)
    }
    ;
    r.version = "0.7.2",
    r._groups = [],
    r._throttle = 80,
    r._maintainScroll = !1,
    r._beforeUpdate = null,
    r._afterUpdate = null,
    r._rows = a,
    r._parse = n,
    r._parseOptions = i,
    r._apply = function(e, o) {
        var s = i(o)
          , h = t(e)
          , l = [h]
          , c = t(window).scrollTop()
          , p = t("html").outerHeight(!0)
          , u = h.parents().filter(":hidden");
        return u.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }),
        u.css("display", "block"),
        s.byRow && !s.target && (h.each(function() {
            var e = t(this)
              , o = e.css("display");
            "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"),
            e.data("style-cache", e.attr("style")),
            e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }),
        l = a(h),
        h.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })),
        t.each(l, function(e, o) {
            var a = t(o)
              , i = 0;
            if (s.target)
                i = s.target.outerHeight(!1);
            else {
                if (s.byRow && a.length <= 1)
                    return void a.css(s.property, "");
                a.each(function() {
                    var e = t(this)
                      , o = e.attr("style")
                      , n = e.css("display");
                    "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                    var a = {
                        display: n
                    };
                    a[s.property] = "",
                    e.css(a),
                    e.outerHeight(!1) > i && (i = e.outerHeight(!1)),
                    o ? e.attr("style", o) : e.css("display", "")
                })
            }
            a.each(function() {
                var e = t(this)
                  , o = 0;
                s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")),
                o += n(e.css("padding-top")) + n(e.css("padding-bottom"))),
                e.css(s.property, i - o + "px"))
            })
        }),
        u.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }),
        r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
        this
    }
    ,
    r._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var o = t(this)
              , n = o.attr("data-mh") || o.attr("data-match-height");
            n in e ? e[n] = e[n].add(o) : e[n] = o
        }),
        t.each(e, function() {
            this.matchHeight(!0)
        })
    }
    ;
    var s = function(e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups),
        t.each(r._groups, function() {
            r._apply(this.elements, this.options)
        }),
        r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function(n, a) {
        if (a && "resize" === a.type) {
            var i = t(window).width();
            if (i === e)
                return;
            e = i
        }
        n ? o === -1 && (o = setTimeout(function() {
            s(a),
            o = -1
        }, r._throttle)) : s(a)
    }
    ,
    t(r._applyDataApi);
    var h = t.fn.on ? "on" : "bind";
    t(window)[h]("load", function(t) {
        r._update(!1, t)
    }),
    t(window)[h]("resize orientationchange", function(t) {
        r._update(!0, t)
    })
});
(function(window, document, $, undefined) {
    "use strict";
    var H = $("html")
      , W = $(window)
      , D = $(document)
      , F = $.fancybox = function() {
        F.open.apply(this, arguments)
    }
      , IE = navigator.userAgent.match(/msie/i)
      , didUpdate = null
      , isTouch = document.createTouch !== undefined
      , isQuery = function(obj) {
        return obj && obj.hasOwnProperty && obj instanceof $
    }
      , isString = function(str) {
        return str && $.type(str) === "string"
    }
      , isPercentage = function(str) {
        return isString(str) && str.indexOf("%") > 0
    }
      , isScrollable = function(el) {
        return el && !(el.style.overflow && el.style.overflow === "hidden") && (el.clientWidth && el.scrollWidth > el.clientWidth || el.clientHeight && el.scrollHeight > el.clientHeight)
    }
      , getScalar = function(orig, dim) {
        var value = parseInt(orig, 10) || 0;
        if (dim && isPercentage(orig)) {
            value = F.getViewport()[dim] / 100 * value
        }
        return Math.ceil(value)
    }
      , getValue = function(value, dim) {
        return getScalar(value, dim) + "px"
    };
    $.extend(F, {
        version: "2.1.7",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: true,
            autoHeight: false,
            autoWidth: false,
            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3e3,
            preload: 3,
            modal: false,
            loop: true,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": true
                }
            },
            iframe: {
                scrolling: "auto",
                preload: true
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: true,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading: '<div id="fancybox-loading"><div></div></div>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: true,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: true,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: true,
                title: true
            },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(group, opts) {
            if (!group) {
                return
            }
            if (!$.isPlainObject(opts)) {
                opts = {}
            }
            if (false === F.close(true)) {
                return
            }
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group]
            }
            $.each(group, function(i, element) {
                var obj = {}, href, title, content, type, rez, hrefParts, selector;
                if ($.type(element) === "object") {
                    if (element.nodeType) {
                        element = $(element)
                    }
                    if (isQuery(element)) {
                        obj = {
                            href: element.data("fancybox-href") || element.attr("href"),
                            title: $("<div/>").text(element.data("fancybox-title") || element.attr("title") || "").html(),
                            isDom: true,
                            element: element
                        };
                        if ($.metadata) {
                            $.extend(true, obj, element.metadata())
                        }
                    } else {
                        obj = element
                    }
                }
                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || "";
                content = opts.content || obj.content;
                type = content ? "html" : opts.type || obj.type;
                if (!type && obj.isDom) {
                    type = element.data("fancybox-type");
                    if (!type) {
                        rez = element.prop("class").match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null
                    }
                }
                if (isString(href)) {
                    if (!type) {
                        if (F.isImage(href)) {
                            type = "image"
                        } else if (F.isSWF(href)) {
                            type = "swf"
                        } else if (href.charAt(0) === "#") {
                            type = "inline"
                        } else if (isString(element)) {
                            type = "html";
                            content = element
                        }
                    }
                    if (type === "ajax") {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift()
                    }
                }
                if (!content) {
                    if (type === "inline") {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, "") : href)
                        } else if (obj.isDom) {
                            content = element
                        }
                    } else if (type === "html") {
                        content = href
                    } else if (!type && !href && obj.isDom) {
                        type = "inline";
                        content = element
                    }
                }
                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });
                group[i] = obj
            });
            F.opts = $.extend(true, {}, F.defaults, opts);
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false
            }
            F.group = group;
            return F._start(F.opts.index)
        },
        cancel: function() {
            var coming = F.coming;
            if (coming && false === F.trigger("onCancel")) {
                return
            }
            F.hideLoading();
            if (!coming) {
                return
            }
            if (F.ajaxLoad) {
                F.ajaxLoad.abort()
            }
            F.ajaxLoad = null;
            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null
            }
            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger("onReset").remove()
            }
            F.coming = null;
            if (!F.current) {
                F._afterZoomOut(coming)
            }
        },
        close: function(event) {
            F.cancel();
            if (false === F.trigger("beforeClose")) {
                return
            }
            F.unbindEvents();
            if (!F.isActive) {
                return
            }
            if (!F.isOpen || event === true) {
                $(".fancybox-wrap").stop(true).trigger("onReset").remove();
                F._afterZoomOut()
            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;
                $(".fancybox-item, .fancybox-nav").remove();
                F.wrap.stop(true, true).removeClass("fancybox-opened");
                F.transitions[F.current.closeMethod]()
            }
        },
        play: function(action) {
            var clear = function() {
                clearTimeout(F.player.timer)
            }
              , set = function() {
                clear();
                if (F.current && F.player.isActive) {
                    F.player.timer = setTimeout(F.next, F.current.playSpeed)
                }
            }
              , stop = function() {
                clear();
                D.unbind(".player");
                F.player.isActive = false;
                F.trigger("onPlayEnd")
            }
              , start = function() {
                if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                    F.player.isActive = true;
                    D.bind({
                        "onCancel.player beforeClose.player": stop,
                        "onUpdate.player": set,
                        "beforeLoad.player": clear
                    });
                    set();
                    F.trigger("onPlayStart")
                }
            };
            if (action === true || !F.player.isActive && action !== false) {
                start()
            } else {
                stop()
            }
        },
        next: function(direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next
                }
                F.jumpto(current.index + 1, direction, "next")
            }
        },
        prev: function(direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev
                }
                F.jumpto(current.index - 1, direction, "prev")
            }
        },
        jumpto: function(index, direction, router) {
            var current = F.current;
            if (!current) {
                return
            }
            index = getScalar(index);
            F.direction = direction || current.direction[index >= current.index ? "next" : "prev"];
            F.router = router || "jumpto";
            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + index % current.group.length
                }
                index = index % current.group.length
            }
            if (current.group[index] !== undefined) {
                F.cancel();
                F._start(index)
            }
        },
        reposition: function(e, onlyAbsolute) {
            var current = F.current, wrap = current ? current.wrap : null, pos;
            if (wrap) {
                pos = F._getPosition(onlyAbsolute);
                if (e && e.type === "scroll") {
                    delete pos.position;
                    wrap.stop(true, true).animate(pos, 200)
                } else {
                    wrap.css(pos);
                    current.pos = $.extend({}, current.dim, pos)
                }
            }
        },
        update: function(e) {
            var type = e && e.originalEvent && e.originalEvent.type
              , anyway = !type || type === "orientationchange";
            if (anyway) {
                clearTimeout(didUpdate);
                didUpdate = null
            }
            if (!F.isOpen || didUpdate) {
                return
            }
            didUpdate = setTimeout(function() {
                var current = F.current;
                if (!current || F.isClosing) {
                    return
                }
                F.wrap.removeClass("fancybox-tmp");
                if (anyway || type === "load" || type === "resize" && current.autoResize) {
                    F._setDimension()
                }
                if (!(type === "scroll" && current.canShrink)) {
                    F.reposition(e)
                }
                F.trigger("onUpdate");
                didUpdate = null
            }, anyway && !isTouch ? 0 : 300)
        },
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;
                if (isTouch) {
                    F.wrap.removeAttr("style").addClass("fancybox-tmp");
                    F.trigger("onUpdate")
                }
                F.update()
            }
        },
        hideLoading: function() {
            D.unbind(".loading");
            $("#fancybox-loading").remove()
        },
        showLoading: function() {
            var el, viewport;
            F.hideLoading();
            el = $(F.opts.tpl.loading).click(F.cancel).appendTo("body");
            D.bind("keydown.loading", function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();
                    F.cancel()
                }
            });
            if (!F.defaults.fixed) {
                viewport = F.getViewport();
                el.css({
                    position: "absolute",
                    top: viewport.h * .5 + viewport.y,
                    left: viewport.w * .5 + viewport.x
                })
            }
            F.trigger("onLoading")
        },
        getViewport: function() {
            var locked = F.current && F.current.locked || false
              , rez = {
                x: W.scrollLeft(),
                y: W.scrollTop()
            };
            if (locked && locked.length) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight
            } else {
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height()
            }
            return rez
        },
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind(".fb")
            }
            D.unbind(".fb");
            W.unbind(".fb")
        },
        bindEvents: function() {
            var current = F.current, keys;
            if (!current) {
                return
            }
            W.bind("orientationchange.fb" + (isTouch ? "" : " resize.fb") + (current.autoCenter && !current.locked ? " scroll.fb" : ""), F.update);
            keys = current.keys;
            if (keys) {
                D.bind("keydown.fb", function(e) {
                    var code = e.which || e.keyCode
                      , target = e.target || e.srcElement;
                    if (code === 27 && F.coming) {
                        return false
                    }
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is("[contenteditable]")))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);
                                e.preventDefault();
                                return false
                            }
                            if ($.inArray(code, val) > -1) {
                                F[i]();
                                e.preventDefault();
                                return false
                            }
                        })
                    }
                })
            }
            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind("mousewheel.fb", function(e, delta, deltaX, deltaY) {
                    var target = e.target || null
                      , parent = $(target)
                      , canScroll = false;
                    while (parent.length) {
                        if (canScroll || parent.is(".fancybox-skin") || parent.is(".fancybox-wrap")) {
                            break
                        }
                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent()
                    }
                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? "down" : "left")
                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? "up" : "right")
                            }
                            e.preventDefault()
                        }
                    }
                })
            }
        },
        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;
            if (obj) {
                if ($.isFunction(obj[event])) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1))
                }
                if (ret === false) {
                    return false
                }
                if (obj.helpers) {
                    $.each(obj.helpers, function(helper, opts) {
                        if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj)
                        }
                    })
                }
            }
            D.trigger(event)
        },
        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(index) {
            var coming = {}, obj, href, type, margin, padding;
            index = getScalar(index);
            obj = F.group[index] || null;
            if (!obj) {
                return false
            }
            coming = $.extend(true, {}, F.opts, obj);
            margin = coming.margin;
            padding = coming.padding;
            if ($.type(margin) === "number") {
                coming.margin = [margin, margin, margin, margin]
            }
            if ($.type(padding) === "number") {
                coming.padding = [padding, padding, padding, padding]
            }
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                })
            }
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true
            }
            if (coming.width === "auto") {
                coming.autoWidth = true
            }
            if (coming.height === "auto") {
                coming.autoHeight = true
            }
            coming.group = F.group;
            coming.index = index;
            F.coming = coming;
            if (false === F.trigger("beforeLoad")) {
                F.coming = null;
                return
            }
            type = coming.type;
            href = coming.href;
            if (!type) {
                F.coming = null;
                if (F.current && F.router && F.router !== "jumpto") {
                    F.current.index = index;
                    return F[F.router](F.direction)
                }
                return false
            }
            F.isActive = true;
            if (type === "image" || type === "swf") {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = "visible"
            }
            if (type === "image") {
                coming.aspectRatio = true
            }
            if (type === "iframe" && isTouch) {
                coming.scrolling = "scroll"
            }
            coming.wrap = $(coming.tpl.wrap).addClass("fancybox-" + (isTouch ? "mobile" : "desktop") + " fancybox-type-" + type + " fancybox-tmp " + coming.wrapCSS).appendTo(coming.parent || "body");
            $.extend(coming, {
                skin: $(".fancybox-skin", coming.wrap),
                outer: $(".fancybox-outer", coming.wrap),
                inner: $(".fancybox-inner", coming.wrap)
            });
            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css("padding" + v, getValue(coming.padding[i]))
            });
            F.trigger("onReady");
            if (type === "inline" || type === "html") {
                if (!coming.content || !coming.content.length) {
                    return F._error("content")
                }
            } else if (!href) {
                return F._error("href")
            }
            if (type === "image") {
                F._loadImage()
            } else if (type === "ajax") {
                F._loadAjax()
            } else if (type === "iframe") {
                F._loadIframe()
            } else {
                F._afterLoad()
            }
        },
        _error: function(type) {
            $.extend(F.coming, {
                type: "html",
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: type,
                content: F.coming.tpl.error
            });
            F._afterLoad()
        },
        _loadImage: function() {
            var img = F.imgPreload = new Image;
            img.onload = function() {
                this.onload = this.onerror = null;
                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;
                F._afterLoad()
            }
            ;
            img.onerror = function() {
                this.onload = this.onerror = null;
                F._error("image")
            }
            ;
            img.src = F.coming.href;
            if (img.complete !== true) {
                F.showLoading()
            }
        },
        _loadAjax: function() {
            var coming = F.coming;
            F.showLoading();
            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== "abort") {
                        F._error("ajax", jqXHR)
                    } else {
                        F.hideLoading()
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === "success") {
                        coming.content = data;
                        F._afterLoad()
                    }
                }
            }))
        },
        _loadIframe: function() {
            var coming = F.coming
              , iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", isTouch ? "auto" : coming.iframe.scrolling).attr("src", coming.href);
            $(coming.wrap).bind("onReset", function() {
                try {
                    $(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            });
            if (coming.iframe.preload) {
                F.showLoading();
                iframe.one("load", function() {
                    $(this).data("ready", 1);
                    if (!isTouch) {
                        $(this).bind("load.fb", F.update)
                    }
                    $(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                    F._afterLoad()
                })
            }
            coming.content = iframe.appendTo(coming.inner);
            if (!coming.iframe.preload) {
                F._afterLoad()
            }
        },
        _preloadImages: function() {
            var group = F.group, current = F.current, len = group.length, cnt = current.preload ? Math.min(current.preload, len - 1) : 0, item, i;
            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];
                if (item.type === "image" && item.href) {
                    (new Image).src = item.href
                }
            }
        },
        _afterLoad: function() {
            var coming = F.coming, previous = F.current, placeholder = "fancybox-placeholder", current, content, type, scrolling, href, embed;
            F.hideLoading();
            if (!coming || F.isActive === false) {
                return
            }
            if (false === F.trigger("afterLoad", coming, previous)) {
                coming.wrap.stop(true).trigger("onReset").remove();
                F.coming = null;
                return
            }
            if (previous) {
                F.trigger("beforeChange", previous);
                previous.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()
            }
            F.unbindEvents();
            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;
            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });
            href = current.href;
            switch (type) {
            case "inline":
            case "ajax":
            case "html":
                if (current.selector) {
                    content = $("<div>").html(content).find(current.selector)
                } else if (isQuery(content)) {
                    if (!content.data(placeholder)) {
                        content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide())
                    }
                    content = content.show().detach();
                    current.wrap.bind("onReset", function() {
                        if ($(this).find(content).length) {
                            content.hide().replaceAll(content.data(placeholder)).data(placeholder, false)
                        }
                    })
                }
                break;
            case "image":
                content = current.tpl.image.replace(/\{href\}/g, href);
                break;
            case "swf":
                content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                embed = "";
                $.each(current.swf, function(name, val) {
                    content += '<param name="' + name + '" value="' + val + '"></param>';
                    embed += " " + name + '="' + val + '"'
                });
                content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + "></embed></object>";
                break
            }
            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content)
            }
            F.trigger("beforeShow");
            current.inner.css("overflow", scrolling === "yes" ? "scroll" : scrolling === "no" ? "hidden" : scrolling);
            F._setDimension();
            F.reposition();
            F.isOpen = false;
            F.coming = null;
            F.bindEvents();
            if (!F.isOpened) {
                $(".fancybox-wrap").not(current.wrap).stop(true).trigger("onReset").remove()
            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]()
            }
            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();
            F._preloadImages()
        },
        _setDimension: function() {
            var viewport = F.getViewport(), steps = 0, canShrink = false, canExpand = false, wrap = F.wrap, skin = F.skin, inner = F.inner, current = F.current, width = current.width, height = current.height, minWidth = current.minWidth, minHeight = current.minHeight, maxWidth = current.maxWidth, maxHeight = current.maxHeight, scrolling = current.scrolling, scrollOut = current.scrollOutside ? current.scrollbarWidth : 0, margin = current.margin, wMargin = getScalar(margin[1] + margin[3]), hMargin = getScalar(margin[0] + margin[2]), wPadding, hPadding, wSpace, hSpace, origWidth, origHeight, origMaxWidth, origMaxHeight, ratio, width_, height_, maxWidth_, maxHeight_, iframe, body;
            wrap.add(skin).add(inner).width("auto").height("auto").removeClass("fancybox-tmp");
            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;
            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;
            if (current.type === "iframe") {
                iframe = current.content;
                if (current.autoHeight && iframe && iframe.data("ready") === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);
                            body = iframe.contents().find("body");
                            if (scrollOut) {
                                body.css("overflow-x", "hidden")
                            }
                            origHeight = body.outerHeight(true)
                        }
                    } catch (e) {}
                }
            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass("fancybox-tmp");
                if (!current.autoWidth) {
                    inner.width(origWidth)
                }
                if (!current.autoHeight) {
                    inner.height(origHeight)
                }
                if (current.autoWidth) {
                    origWidth = inner.width()
                }
                if (current.autoHeight) {
                    origHeight = inner.height()
                }
                inner.removeClass("fancybox-tmp")
            }
            width = getScalar(origWidth);
            height = getScalar(origHeight);
            ratio = origWidth / origHeight;
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, "w") - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, "w") - wSpace : maxWidth);
            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, "h") - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, "h") - hSpace : maxHeight);
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;
            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight)
            }
            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;
            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio)
                }
                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio)
                }
                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio)
                }
                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio)
                }
            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));
                if (current.autoHeight && current.type !== "iframe") {
                    inner.width(width);
                    height = inner.height()
                }
                height = Math.max(minHeight, Math.min(height, maxHeight))
            }
            if (current.fitToView) {
                inner.width(width).height(height);
                wrap.width(width + wPadding);
                width_ = wrap.width();
                height_ = wrap.height();
                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break
                        }
                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);
                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio)
                        }
                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio)
                        }
                        inner.width(width).height(height);
                        wrap.width(width + wPadding);
                        width_ = wrap.width();
                        height_ = wrap.height()
                    }
                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)))
                }
            }
            if (scrollOut && scrolling === "auto" && height < origHeight && width + wPadding + scrollOut < maxWidth_) {
                width += scrollOut
            }
            inner.width(width).height(height);
            wrap.width(width + wPadding);
            width_ = wrap.width();
            height_ = wrap.height();
            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight);
            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });
            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height("auto")
            }
        },
        _getPosition: function(onlyAbsolute) {
            var current = F.current
              , viewport = F.getViewport()
              , margin = current.margin
              , width = F.wrap.width() + margin[1] + margin[3]
              , height = F.wrap.height() + margin[0] + margin[2]
              , rez = {
                position: "absolute",
                top: margin[0],
                left: margin[3]
            };
            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = "fixed"
            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x
            }
            rez.top = getValue(Math.max(rez.top, rez.top + (viewport.h - height) * current.topRatio));
            rez.left = getValue(Math.max(rez.left, rez.left + (viewport.w - width) * current.leftRatio));
            return rez
        },
        _afterZoomIn: function() {
            var current = F.current;
            if (!current) {
                return
            }
            F.isOpen = F.isOpened = true;
            F.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0);
            F.update();
            if (current.closeClick || current.nextClick && F.group.length > 1) {
                F.inner.css("cursor", "pointer").bind("click.fb", function(e) {
                    if (!$(e.target).is("a") && !$(e.target).parent().is("a")) {
                        e.preventDefault();
                        F[current.closeClick ? "close" : "next"]()
                    }
                })
            }
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind("click.fb", function(e) {
                    e.preventDefault();
                    F.close()
                })
            }
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind("click.fb", F.prev)
                }
                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind("click.fb", F.next)
                }
            }
            F.trigger("afterShow");
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false)
            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;
                F.play(true)
            }
        },
        _afterZoomOut: function(obj) {
            obj = obj || F.current;
            $(".fancybox-wrap").trigger("onReset").remove();
            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            F.trigger("afterClose", obj)
        }
    });
    F.transitions = {
        getOrigPosition: function() {
            var current = F.current
              , element = current.element
              , orig = current.orig
              , pos = {}
              , width = 50
              , height = 50
              , hPadding = current.hPadding
              , wPadding = current.wPadding
              , viewport = F.getViewport();
            if (!orig && current.isDom && element.is(":visible")) {
                orig = element.find("img:first");
                if (!orig.length) {
                    orig = element
                }
            }
            if (isQuery(orig)) {
                pos = orig.offset();
                if (orig.is("img")) {
                    width = orig.outerWidth();
                    height = orig.outerHeight()
                }
            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio
            }
            if (F.wrap.css("position") === "fixed" || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x
            }
            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };
            return pos
        },
        step: function(now, fx) {
            var ratio, padding, value, prop = fx.prop, current = F.current, wrapSpace = current.wrapSpace, skinSpace = current.skinSpace;
            if (prop === "width" || prop === "height") {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);
                if (F.isClosing) {
                    ratio = 1 - ratio
                }
                padding = prop === "width" ? current.wPadding : current.hPadding;
                value = now - padding;
                F.skin[prop](getScalar(prop === "width" ? value : value - wrapSpace * ratio));
                F.inner[prop](getScalar(prop === "width" ? value : value - wrapSpace * ratio - skinSpace * ratio))
            }
        },
        zoomIn: function() {
            var current = F.current
              , startPos = current.pos
              , effect = current.openEffect
              , elastic = effect === "elastic"
              , endPos = $.extend({
                opacity: 1
            }, startPos);
            delete endPos.position;
            if (elastic) {
                startPos = this.getOrigPosition();
                if (current.openOpacity) {
                    startPos.opacity = .1
                }
            } else if (effect === "fade") {
                startPos.opacity = .1
            }
            F.wrap.css(startPos).animate(endPos, {
                duration: effect === "none" ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            })
        },
        zoomOut: function() {
            var current = F.current
              , effect = current.closeEffect
              , elastic = effect === "elastic"
              , endPos = {
                opacity: .1
            };
            if (elastic) {
                endPos = this.getOrigPosition();
                if (current.closeOpacity) {
                    endPos.opacity = .1
                }
            }
            F.wrap.animate(endPos, {
                duration: effect === "none" ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            })
        },
        changeIn: function() {
            var current = F.current, effect = current.nextEffect, startPos = current.pos, endPos = {
                opacity: 1
            }, direction = F.direction, distance = 200, field;
            startPos.opacity = .1;
            if (effect === "elastic") {
                field = direction === "down" || direction === "up" ? "top" : "left";
                if (direction === "down" || direction === "right") {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = "+=" + distance + "px"
                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = "-=" + distance + "px"
                }
            }
            if (effect === "none") {
                F._afterZoomIn()
            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                })
            }
        },
        changeOut: function() {
            var previous = F.previous
              , effect = previous.prevEffect
              , endPos = {
                opacity: .1
            }
              , direction = F.direction
              , distance = 200;
            if (effect === "elastic") {
                endPos[direction === "down" || direction === "up" ? "top" : "left"] = (direction === "up" || direction === "left" ? "-" : "+") + "=" + distance + "px"
            }
            previous.wrap.animate(endPos, {
                duration: effect === "none" ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    $(this).trigger("onReset").remove()
                }
            })
        }
    };
    F.helpers.overlay = {
        defaults: {
            closeClick: true,
            speedOut: 200,
            showEarly: true,
            css: {},
            locked: !isTouch,
            fixed: true
        },
        overlay: null,
        fixed: false,
        el: $("html"),
        create: function(opts) {
            var parent;
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.close()
            }
            parent = F.coming ? F.coming.parent : opts.parent;
            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(parent && parent.length ? parent : "body");
            this.fixed = false;
            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass("fancybox-overlay-fixed");
                this.fixed = true
            }
        },
        open: function(opts) {
            var that = this;
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.overlay.unbind(".overlay").width("auto").height("auto")
            } else {
                this.create(opts)
            }
            if (!this.fixed) {
                W.bind("resize.overlay", $.proxy(this.update, this));
                this.update()
            }
            if (opts.closeClick) {
                this.overlay.bind("click.overlay", function(e) {
                    if ($(e.target).hasClass("fancybox-overlay")) {
                        if (F.isActive) {
                            F.close()
                        } else {
                            that.close()
                        }
                        return false
                    }
                })
            }
            this.overlay.css(opts.css).show()
        },
        close: function() {
            W.unbind("resize.overlay");
            if (this.el.hasClass("fancybox-lock")) {
                $(".fancybox-margin").removeClass("fancybox-margin");
                this.el.removeClass("fancybox-lock");
                W.scrollTop(this.scrollV).scrollLeft(this.scrollH)
            }
            $(".fancybox-overlay").remove().hide();
            $.extend(this, {
                overlay: null,
                fixed: false
            })
        },
        update: function() {
            var width = "100%", offsetWidth;
            this.overlay.width(width).height("100%");
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (D.width() > offsetWidth) {
                    width = D.width()
                }
            } else if (D.width() > W.width()) {
                width = D.width()
            }
            this.overlay.width(width).height(D.height())
        },
        onReady: function(opts, obj) {
            var overlay = this.overlay;
            $(".fancybox-overlay").stop(true, true);
            if (!overlay) {
                this.create(opts)
            }
            if (opts.locked && this.fixed && obj.fixed) {
                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false
            }
            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments)
            }
        },
        beforeShow: function(opts, obj) {
            if (obj.locked && !this.el.hasClass("fancybox-lock")) {
                if (this.fixPosition !== false) {
                    $("*:not(object)").filter(function() {
                        return $(this).css("position") === "fixed" && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap")
                    }).addClass("fancybox-margin")
                }
                this.el.addClass("fancybox-margin");
                this.scrollV = W.scrollTop();
                this.scrollH = W.scrollLeft();
                this.el.addClass("fancybox-lock");
                W.scrollTop(this.scrollV).scrollLeft(this.scrollH)
            }
            this.open(opts)
        },
        onUpdate: function() {
            if (!this.fixed) {
                this.update()
            }
        },
        afterClose: function(opts) {
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this))
            }
        }
    };
    F.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(opts) {
            var current = F.current, text = current.title, type = opts.type, title, target;
            if ($.isFunction(text)) {
                text = text.call(current.element, current)
            }
            if (!isString(text) || $.trim(text) === "") {
                return
            }
            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + "</div>");
            switch (type) {
            case "inside":
                target = F.skin;
                break;
            case "outside":
                target = F.wrap;
                break;
            case "over":
                target = F.inner;
                break;
            default:
                target = F.skin;
                title.appendTo("body");
                if (IE) {
                    title.width(title.width())
                }
                title.wrapInner('<span class="child"></span>');
                F.current.margin[2] += Math.abs(getScalar(title.css("margin-bottom")));
                break
            }
            title[opts.position === "top" ? "prependTo" : "appendTo"](target)
        }
    };
    $.fn.fancybox = function(options) {
        var index, that = $(this), selector = this.selector || "", run = function(e) {
            var what = $(this).blur(), idx = index, relType, relVal;
            if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is(".fancybox-wrap")) {
                relType = options.groupAttr || "data-fancybox-group";
                relVal = what.attr(relType);
                if (!relVal) {
                    relType = "rel";
                    relVal = what.get(0)[relType]
                }
                if (relVal && relVal !== "" && relVal !== "nofollow") {
                    what = selector.length ? $(selector) : that;
                    what = what.filter("[" + relType + '="' + relVal + '"]');
                    idx = what.index(this)
                }
                options.index = idx;
                if (F.open(what, options) !== false) {
                    e.preventDefault()
                }
            }
        };
        options = options || {};
        index = options.index || 0;
        if (!selector || options.live === false) {
            that.unbind("click.fb-start").bind("click.fb-start", run)
        } else {
            D.undelegate(selector, "click.fb-start").delegate(selector + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", run)
        }
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    }
    ;
    D.ready(function() {
        var w1, w2;
        if ($.scrollbarWidth === undefined) {
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")
                  , child = parent.children()
                  , width = child.innerWidth() - child.height(99).innerWidth();
                parent.remove();
                return width
            }
        }
        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = function() {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo("body")
                  , fixed = elem[0].offsetTop === 20 || elem[0].offsetTop === 15;
                elem.remove();
                return fixed
            }()
        }
        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $("body")
        });
        w1 = $(window).width();
        H.addClass("fancybox-lock-test");
        w2 = $(window).width();
        H.removeClass("fancybox-lock-test");
        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head")
    })
}
)(window, document, jQuery);
!function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }
    function o() {
        var e, n, t, o, s, i, a;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [],
                n = C[l],
                n.name && (e.push(n.name.toLowerCase()),
                n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++)
                        e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn,
                s = 0; s < e.length; s++)
                    i = e[s],
                    a = i.split("."),
                    1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]]instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                    Modernizr[a[0]][a[1]] = o),
                    S.push((o ? "" : "no-") + a.join("-"))
            }
    }
    function s(e) {
        var n = b.className
          , t = Modernizr._config.classPrefix || "";
        if (_ && (n = n.baseVal),
        Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t),
        _ ? b.className.baseVal = n : b.className = n)
    }
    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    function a() {
        var e = n.body;
        return e || (e = i(_ ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function l(e, t, r, o) {
        var s, l, u, f, c = "modernizr", d = i("div"), p = a();
        if (parseInt(r, 10))
            for (; r--; )
                u = i("div"),
                u.id = o ? o[r] : c + (r + 1),
                d.appendChild(u);
        return s = i("style"),
        s.type = "text/css",
        s.id = "s" + c,
        (p.fake ? p : d).appendChild(s),
        p.appendChild(d),
        s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)),
        d.id = c,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        f = b.style.overflow,
        b.style.overflow = "hidden",
        b.appendChild(p)),
        l = t(d, e),
        p.fake ? (p.parentNode.removeChild(p),
        b.style.overflow = f,
        b.offsetHeight) : d.parentNode.removeChild(d),
        !!l
    }
    function u(e, n) {
        return !!~("" + e).indexOf(n)
    }
    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }
    function c(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }
    function d(e, n, t) {
        var o;
        for (var s in e)
            if (e[s]in n)
                return t === !1 ? e[s] : (o = n[e[s]],
                r(o, "function") ? c(o, t || n) : o);
        return !1
    }
    function p(n, t, r) {
        var o;
        if ("getComputedStyle"in e) {
            o = getComputedStyle.call(e, n, t);
            var s = e.console;
            if (null !== o)
                r && (o = o.getPropertyValue(r));
            else if (s) {
                var i = s.error ? "error" : "log";
                s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }
    function m(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function v(n, r) {
        var o = n.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; o--; )
                if (e.CSS.supports(m(n[o]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var s = []; o--; )
                s.push("(" + m(n[o]) + ":" + r + ")");
            return s = s.join(" or "),
            l("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == p(e, null, "position")
            })
        }
        return t
    }
    function g(e, n, o, s) {
        function a() {
            c && (delete k.style,
            delete k.modElem)
        }
        if (s = r(s, "undefined") ? !1 : s,
        !r(o, "undefined")) {
            var l = v(e, o);
            if (!r(l, "undefined"))
                return l
        }
        for (var c, d, p, m, g, h = ["modernizr", "tspan", "samp"]; !k.style && h.length; )
            c = !0,
            k.modElem = i(h.shift()),
            k.style = k.modElem.style;
        for (p = e.length,
        d = 0; p > d; d++)
            if (m = e[d],
            g = k.style[m],
            u(m, "-") && (m = f(m)),
            k.style[m] !== t) {
                if (s || r(o, "undefined"))
                    return a(),
                    "pfx" == n ? m : !0;
                try {
                    k.style[m] = o
                } catch (y) {}
                if (k.style[m] != g)
                    return a(),
                    "pfx" == n ? m : !0
            }
        return a(),
        !1
    }
    function h(e, n, t, o, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , a = (e + " " + E.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? g(a, n, o, s) : (a = (e + " " + P.join(i + " ") + i).split(" "),
        d(a, n, t))
    }
    function y(e, n, r) {
        return h(e, t, t, n, r)
    }
    var S = []
      , C = []
      , w = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
            var t = this;
            setTimeout(function() {
                n(t[e])
            }, 0)
        },
        addTest: function(e, n, t) {
            C.push({
                name: e,
                fn: n,
                options: t
            })
        },
        addAsyncTest: function(e) {
            C.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = w,
    Modernizr = new Modernizr,
    Modernizr.addTest("json", "JSON"in e && "parse"in JSON && "stringify"in JSON),
    Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var b = n.documentElement
      , _ = "svg" === b.nodeName.toLowerCase()
      , x = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = x;
    var z = function() {
        var n = e.matchMedia || e.msMatchMedia;
        return n ? function(e) {
            var t = n(e);
            return t && t.matches || !1
        }
        : function(n) {
            var t = !1;
            return l("@media " + n + " { #modernizr { position: absolute; } }", function(n) {
                t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position
            }),
            t
        }
    }();
    w.mq = z;
    var N = w.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart"in e || e.DocumentTouch && n instanceof DocumentTouch)
            t = !0;
        else {
            var r = ["@media (", x.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            N(r, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    });
    var T = "Moz O ms Webkit"
      , E = w._config.usePrefixes ? T.split(" ") : [];
    w._cssomPrefixes = E;
    var P = w._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    w._domPrefixes = P;
    var j = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete j.elem
    });
    var k = {
        style: j.elem.style
    };
    Modernizr._q.unshift(function() {
        delete k.style
    }),
    w.testAllProps = h,
    w.testAllProps = y,
    Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)),
    o(),
    s(S),
    delete w.addTest,
    delete w.addAsyncTest;
    for (var O = 0; O < Modernizr._q.length; O++)
        Modernizr._q[O]();
    e.Modernizr = Modernizr
}(window, document);
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else if (typeof exports === "object") {
        module.exports = factory
    } else {
        factory(jQuery)
    }
}
)(function($) {
    var toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], toBind = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], slice = Array.prototype.slice, nullLowestDeltaTimeout, lowestDelta;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i; ) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks
        }
    }
    var special = $.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i; ) {
                    this.addEventListener(toBind[--i], handler, false)
                }
            } else {
                this.onmousewheel = handler
            }
            $.data(this, "mousewheel-line-height", special.getLineHeight(this));
            $.data(this, "mousewheel-page-height", special.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i; ) {
                    this.removeEventListener(toBind[--i], handler, false)
                }
            } else {
                this.onmousewheel = null
            }
            $.removeData(this, "mousewheel-line-height");
            $.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(elem) {
            var $elem = $(elem)
              , $parent = $elem["offsetParent"in $.fn ? "offsetParent" : "parent"]();
            if (!$parent.length) {
                $parent = $("body")
            }
            return parseInt($parent.css("fontSize"), 10) || parseInt($elem.css("fontSize"), 10) || 16
        },
        getPageHeight: function(elem) {
            return $(elem).height()
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn)
        }
    });
    function handler(event) {
        var orgEvent = event || window.event
          , args = slice.call(arguments, 1)
          , delta = 0
          , deltaX = 0
          , deltaY = 0
          , absDelta = 0
          , offsetX = 0
          , offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if ("detail"in orgEvent) {
            deltaY = orgEvent.detail * -1
        }
        if ("wheelDelta"in orgEvent) {
            deltaY = orgEvent.wheelDelta
        }
        if ("wheelDeltaY"in orgEvent) {
            deltaY = orgEvent.wheelDeltaY
        }
        if ("wheelDeltaX"in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1
        }
        if ("axis"in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0
        }
        delta = deltaY === 0 ? deltaX : deltaY;
        if ("deltaY"in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY
        }
        if ("deltaX"in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1
            }
        }
        if (deltaY === 0 && deltaX === 0) {
            return
        }
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, "mousewheel-line-height");
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, "mousewheel-page-height");
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight
        }
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40
            }
        }
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40
        }
        delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top
        }
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        event.deltaMode = 0;
        args.unshift(event, delta, deltaX, deltaY);
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout)
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args)
    }
    function nullLowestDelta() {
        lowestDelta = null
    }
    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && orgEvent.type === "mousewheel" && absDelta % 120 === 0
    }
});
var targObj = "zoomPanObj"
  , contName = "zoomContainer"
  , moveName = "objWrap"
  , zIn = "zoomIn"
  , zOut = "zoomOut"
  , mobileName = typeof mobileName !== "undefined" ? mobileName : "chkMobile"
  , resizeName = typeof resizeName !== "undefined" ? resizeName : "dotTap"
  , contRat = typeof contRat !== "undefined" ? contRat : {
    x: 1,
    y: 1
};
childRats = typeof childRats !== "undefined" ? childRats : false;
function convPer(coord1, coord2) {
    var perX = coord1.x / coord2.x * 100
      , pery = coord1.y / coord2.y * 100;
    return {
        x: perX,
        y: pery
    }
}
function getPos() {
    return {
        x: parseFloat($("#" + moveName).css("left").slice(0, -2)),
        y: parseFloat($("#" + moveName).css("top").slice(0, -2))
    }
}
function getMPos(e) {
    return {
        x: e.clientX - $("#" + contName).offset().left,
        y: e.clientY - $("#" + contName).offset().top
    }
}
function getGPos(e) {
    return {
        x: e.x - $("#" + contName).offset().left,
        y: e.y - $("#" + contName).offset().top
    }
}
function setPosition(tpos) {
    $("#" + moveName).css("left", tpos.x + "px");
    $("#" + moveName).css("top", tpos.y + "px")
}
function setDimensions(dim) {
    $("#" + moveName).css("width", dim.x + "px");
    $("#" + moveName).css("height", dim.y + "px")
}
function constrain(nPos, cDims, zDims) {
    nPos.x = nPos.x > 0 ? 0 : nPos.x;
    nPos.x = zDims.x + nPos.x < cDims.x ? cDims.x - zDims.x : nPos.x;
    nPos.y = nPos.y > 0 ? 0 : nPos.y;
    nPos.y = zDims.y + nPos.y < cDims.y ? cDims.y - zDims.y : nPos.y;
    return nPos
}
function sizeChild(className, iCRats) {
    $.each(iCRats, function(i, r) {
        sel = "." + className + r[0];
        if ($(sel).length > 0) {
            var h = $(sel).width() * r[1];
            $(sel).height(h + "px")
        }
    })
}
function zoom(scaleBy, cDims, zLvl, zMax, zMin, zEvt, e, iCRats) {
    if (zLvl < zMin || zLvl > zMax) {
        zLvl = zLvl < zMin ? zMin : zMax
    } else {
        var zDims = {
            x: $("#" + moveName).width() * scaleBy,
            y: $("#" + moveName).height() * scaleBy
        }
          , ePos = zEvt ? zEvt == "btn" ? {
            x: cDims.x / 2,
            y: cDims.y / 2
        } : getGPos(zEvt) : getMPos(e)
          , pos = getPos()
          , zPos = {
            x: (pos.x - ePos.x) * scaleBy + cDims.x / 2,
            y: (pos.y - ePos.y) * scaleBy + cDims.y / 2
        }
          , zPos = constrain(zPos, cDims, zDims);
        setDimensions(zDims);
        setPosition(zPos);
        if (iCRats) {
            sizeChild(resizeName, iCRats)
        }
    }
    return zLvl
}
function pan(cDims, pMPos, pEvt, e) {
    var pos = getPos()
      , ePos = pEvt ? getGPos(pEvt) : getMPos(e)
      , pPos = {
        x: ePos.x - pMPos.x + pos.x,
        y: ePos.y - pMPos.y + pos.y
    }
      , mDims = {
        x: $("#" + moveName).width(),
        y: $("#" + moveName).height()
    };
    pPos = constrain(pPos, cDims, mDims);
    setPosition(pPos);
    return ePos
}
function urlExists(url) {
    var http = new XMLHttpRequest;
    http.open("HEAD", url, false);
    http.send();
    return http.status == 200
}
$(document).ready(function() {
    if ($("#" + targObj).length > 0) {
        if ($(window).width() < 992 || $("html").is(".touchevents")) {
            console.log($("#" + targObj));
            var originalSrc = $("#" + targObj).attr("src");
            if (urlExists(originalSrc.replace("PNG/", "PNG/Thumb/"))) {
                $("#" + targObj).attr("src", originalSrc.replace("PNG/", "PNG/Thumb/"))
            }
            $("#" + targObj).css("float", "none");
            $("#" + moveName).css("position", "static");
            $("#" + targObj).wrap('<a href="' + originalSrc + '" target="_blank"></div>');
            $("#zoomBtns").hide();
            return
        }
        $(window).on("load", function() {
            var bDims = {
                x: $("#" + targObj).width(),
                y: $("#" + targObj).height()
            }
              , mobile = $("#" + mobileName).css("display") == "block" ? true : false
              , bRat = bDims.y / bDims.x;
            cRat = mobile ? {
                x: 1,
                y: bDims.y / bDims.x
            } : contRat,
            cDims = {
                x: bDims.x / cRat.x,
                y: bDims.y / cRat.y
            },
            sFact = 1.3,
            sFactS = 1.03,
            dots = 10,
            zLvl = 0,
            zMax = mobile ? 10 : 7,
            zMin = mobile ? 3 : 0,
            zIni = mobile ? 3 : 0,
            mChk = false,
            zChk = false,
            $("#" + targObj).wrap("<div id='" + contName + "'></div>");
            $("#" + targObj).wrap("<div id='" + moveName + "'></div>");
            $("#" + contName).append("<div id='zoomBtns'><div id='" + zIn + "'></div><div id='" + zOut + "'></div></div>");
            $("#" + moveName).css("height", bDims.y + "px");
            $("#" + contName).css("height", cDims.y + "px");
            setPosition(convPer({
                x: (bDims.x - cDims.x) / -2,
                y: (bDims.y - cDims.y) / -2
            }, cDims));
            zLvl = zoom(Math.pow(sFact, zIni), cDims, zIni, zMax, zMin, "btn", false, childRats);
            $(window).resize(function() {
                cDims = {
                    x: $("#" + contName).width(),
                    y: $("#" + contName).width() * bRat / cRat.y
                };
                $("#" + contName).css("height", cDims.y + "px")
            });
            $(document).on("click", "#" + zIn, function(e) {
                e.preventDefault();
                zLvl++;
                zLvl = zoom(sFact, cDims, zLvl, zMax, zMin, "btn", false, childRats)
            });
            $(document).on("click", "#" + zOut, function(e) {
                e.preventDefault();
                zLvl--;
                zLvl = zoom(1 / sFact, cDims, zLvl, zMax, zMin, "btn", false, childRats)
            });
            $(document).on("dblclick", "#" + contName, function(e) {
                e.preventDefault();
                if (!zChk) {
                    mChk = true;
                    zLvl++;
                    zLvl = zoom(sFact, cDims, zLvl, zMax, zMin, false, e, childRats)
                }
            });
            $(document).on("mousedown", "#" + contName, function(e1) {
                e1.preventDefault();
                var pMPos = getMPos(e1);
                mChk = true;
                $(document).on("mousemove", function(e2) {
                    pMPos = pan(cDims, pMPos, false, e2)
                })
            });
            $(document).on("mouseup", function(e) {
                $(document).off("mousemove")
            });
            $(document).on("mouseover", "#" + zIn, function(e) {
                zChk = true
            });
            $(document).on("mouseout", "#" + zIn, function(e) {
                zChk = false
            });
            $(document).on("mouseover", "#" + zOut, function(e) {
                zChk = true
            });
            $(document).on("mouseout", "#" + zOut, function(e) {
                zChk = false
            });
            $(document).on("mousewheel", "#" + contName, function(e) {
                e.preventDefault();
                if (e.deltaY > 0) {
                    zLvl++;
                    zLvl = zoom(sFact, cDims, zLvl, zMax, zMin, false, e, childRats)
                } else {
                    zLvl--;
                    zLvl = zoom(1 / sFact, cDims, zLvl, zMax, zMin, false, e, childRats)
                }
            })
        })
    }
});
var routeResults = [], currentRouteID, disableAutocompleteSearch = false, favouriteRoutes = [], heroSliderTimer = null, heroSliderTimerPaused = false;
if (typeof baseURL == "undefined") {
    baseURL = ""
}
$(function() {
    ocUtilities($);
    mobileMainNav($);
    preloadImages($);
    nextTrips($);
    tabNavigation($);
    homepageAlerts($);
    setupISNs($);
    feedbackButton($);
    alertsToggle($);
    accordionToggle($);
    destinationsCategories($);
    submitApplicationForm($);
    feedbackForm($);
    formValidation($);
    appGalleryLinks($);
    headerTabIndex($);
    lrtLaunchNavigation($);
    lrtLaunchCountdown($);
    serviceChangeNotification($);
    homepageParallax($);
    stage2Nav();
    stage2LineNumbers();
    stage2HeroSlider();
    stage2SearchAnimation();
    stage2FlipCards();
    stage2FlipCardsBack();
    stage2StationImages();
    stage2DesktopNav();
    stage2SearchClear();
    stage2SearchSubmit()
});
function ocUtilities($) {
    var pageHash = window.location.hash;
    $("html").addClass("js");
    $(".language-toggle").each(function() {
        $(this).attr("href", $(this).attr("href").replace("index.php", ""))
    });
    $(".homepage-news__recent .col-8 .news-card").matchHeight();
    $(".fancybox-media").fancybox({
        afterLoad: function() {
            $(".fancybox-wrap").attr("role", "dialog");
            $(".fancybox-inner").attr("role", "document");
            $(".fancybox-inner").attr("aria-labelledby", $(".fancybox-image").attr("alt"))
        }
    });
    $('a[rel="noopener"]').each(function() {
        if ($(this).attr("href").indexOf("dev.octranspo.com") != -1 || $(this).attr("href").indexOf("www.octranspo.com") != -1) {
            $(this).removeAttr("rel");
            $(this).removeAttr("target")
        }
    });
    if (pageHash == "#news-240782") {
        window.location.replace("/en/news/article/new-look-for-octranspo-website/")
    }
    if (pageHash == "#news-240783") {
        window.location.replace("/fr/nouvelles/article/refonte-du-site-octranspo/")
    }
    $(".fr .news-pagination a").each(function() {
        $(this).attr("href", $(this).attr("href").replace("/news", "/nouvelles"));
        $(this).html($(this).html().replace("First", "Première"));
        $(this).html($(this).html().replace("Last", "Dernière"))
    });
    $(".en .link-new-window").each(function() {
        $(this).find(".new-window-tooltip").remove();
        $(this).append('<span class="new-window-tooltip">Opens external website in a new window/tab.</span>')
    });
    $(".fr .link-new-window").each(function() {
        $(this).find(".new-window-tooltip").remove();
        $(this).append('<span class="new-window-tooltip">Ouvre le site Web externe dans une nouvelle fenêtre ou un nouvel onglet</span>')
    });
    $(".detour-map a").fancybox({
        autoSize: true,
        type: "iframe",
        iframe: {
            preload: false
        }
    });
    $(".breadcrumbs li").each(function() {
        $(this).html($(this).html().replace("&amp;", "&"));
        $(this).html($(this).html().replace("& ", "&amp; "))
    })
}
function mobileMainNav($) {
    if ($(window).width() < 992) {
        $("body").addClass("mobile-nav-init");
        $(".main-nav, .stage2-main-nav").find(".expand").remove();
        $(".main-nav li ul, .stage2-main-nav > li > ul, .stage2-main-nav li ul").each(function() {
            $(this).hide();
            if ($(this).parent().is(".list-flexbox-column")) {
                $(this).parent().parent().parent().parent().addClass("has-subnav");
                if ($(this).parent().parent().parent().parent().find("a .expand").length == 0) {
                    $(this).parent().parent().parent().parent().children("a").append('<span class="expand" tabindex="0" role="button" aria-expanded="false">Expand</span>')
                }
            } else {
                $(this).parent().addClass("has-subnav");
                $(this).parent().children("a").append('<span class="expand" tabindex="0" role="button" aria-expanded="false">Expand</span>')
            }
        });
        $(".stage2-main-nav .subnav-item .expand").each(function() {
            var targetElement = $(this).parent().parent().find("ul");
            targetElement.attr("aria-hidden", "true");
            if (targetElement.attr("id")) {
                $(this).attr("aria-controls", targetElement.attr("id"))
            }
        });
        $(".main-nav .expand, .stage2-main-nav .expand").unbind("click");
        $(".main-nav .expand, .stage2-main-nav .expand").click(function(e) {
            e.preventDefault();
            if ($(this).parent().next().is(".subnav")) {
                $(this).toggleClass("expanded");
                $(this).parent().parent().addClass("active");
                $(".stage2-main-nav li").not(".active").removeClass("subnav-open");
                $(".stage2-main-nav li").not(".active").find(".expand").removeClass("expanded");
                $(this).parent().parent().removeClass("active");
                $(this).parent().parent().toggleClass("subnav-open");
                if ($(this).parent().parent().is(".subnav-open")) {
                    $(this).parent().next().show();
                    $(this).parent().next().find(".list-flexbox-column > ul").show()
                } else {
                    $(this).parent().next().hide()
                }
            } else {
                if ($(".stage2-main-nav").length) {
                    $(this).parent().parent().addClass("active");
                    $(".stage2-main-nav .subnav li").not(".active").removeClass("subnav-open");
                    $(".stage2-main-nav .subnav li").not(".active").find(".expand").removeClass("expanded");
                    $(".stage2-main-nav .subnav li").not(".active").find("ul").hide();
                    $(this).parent().parent().removeClass("active")
                }
                $(this).parent().parent().siblings(".has-subnav").children("ul").hide();
                if ($(this).parent().is(".active")) {
                    e.preventDefault();
                    $(this).parent().parent().children("ul").hide();
                    $(this).parent().removeClass("active");
                    $(this).parent().parent().removeClass("subnav-open")
                } else {
                    e.preventDefault();
                    $(this).parent().parent().children("ul").show();
                    $(this).parent().parent().parent().find("a").removeClass("active");
                    $(this).parent().addClass("active");
                    $(this).parent().parent().addClass("subnav-open")
                }
            }
            if ($(this).is(".expanded") || $(this).parent().parent().is(".subnav-open")) {
                $(this).attr("aria-expanded", "true");
                $(this).parent().parent().children("ul").removeAttr("aria-hidden")
            } else {
                $(this).attr("aria-expanded", "false");
                $(this).parent().parent().children("ul").attr("aria-hidden", "true")
            }
        })
    } else {
        $(".main-nav li ul").each(function() {
            $(this).parent().addClass("has-subnav")
        });
        $(".main-nav li ul.has-subnav a").each(function() {});
        $("body").removeClass("mobile-nav-init");
        $(".stage2-main-nav ul").show()
    }
    $(".navbar-toggler").attr("aria-expanded", "false");
    $(".navbar-collapse").on("shown.bs.collapse", function() {
        $(".navbar-toggler").attr("aria-expanded", "true")
    });
    $(".navbar-collapse").on("hide.bs.collapse", function() {
        $(".navbar-toggler").attr("aria-expanded", "false")
    })
}
function preloadImages($) {
    $("nav").each(function() {
        var preloadPaths = $(this).data("preload");
        if (preloadPaths) {
            preloadPaths = preloadPaths.split("|");
            for (i = 0; i < preloadPaths.length; i++) {
                preloadImage = new Image;
                preloadImage.src = preloadPaths[i]
            }
        }
    })
}
function nextTrips($) {
    var favouriteRoutesCookie = Cookies.get("favourites");
    var favouritesLabel = "Favourites";
    var favouritesInstructions = "Select the star beside a route to favourite it.";
    var favouritesWidgetContent = "";
    var favouritesAtSeparator = " at stop ";
    var removeFavourite = "remove from favourites";
    if (favouriteRoutesCookie) {
        favouriteRoutes = favouriteRoutesCookie.split(",")
    }
    if ($("body").is(".fr")) {
        favouritesLabel = "Favoris";
        favouritesInstructions = "Pour ajouter un circuit à vos favoris, cliquez sur l’étoile.";
        favouritesAtSeparator = " à l&apos;arrêt ";
        removeFavourite = "Retirer de la liste des favoris"
    }
    $(".next-trips-get-routes, .next-trip-results").hide();
    $(".next-trip-results, .next-trips-get-routes").removeClass("init");
    $("#next-departure-stop").autocomplete({
        classes: {
            "ui-autocomplete": "next-trips-autocomplete"
        },
        source: function(request, response) {
            var searchTerm = request.term.replace(/ /gi, "");
            searchTerm = request.term.replace(/\?/gi, "");
            if (searchTerm.length > 0) {
                $.getJSON(baseURL + "next_trips/stops?keyword=" + encodeURIComponent(request.term), function(data) {
                    response($.map(data.Gtfs, function(stop_data) {
                        return {
                            value: stop_data.stop_code + " - " + stop_data.stop_name,
                            label: stop_data.stop_code + " - " + stop_data.stop_name
                        }
                    }))
                })
            }
        },
        close: function(event, ui) {
            if (!disableAutocompleteSearch) {
                getNextTripsByStopID($(event.target).val(), "#next-departure-stop-route-ids")
            } else {
                disableAutocompleteSearch = false
            }
        },
        minLength: 2,
        delay: 100
    });
    if ($('.next-trips-get-stops input[name="stop_id"]').length > 0) {
        $('.next-trips-get-stops input[name="stop_id"]')[0].oninvalid = function() {
            if ($("body").is(".fr")) {
                if ($('.next-trips-get-stops input[name="stop_id"]').val().length < 4) {
                    this.setCustomValidity("Minimum de 4 caractères.")
                }
            } else {
                if ($('.next-trips-get-stops input[name="stop_id"]').val().length < 4) {
                    this.setCustomValidity("Please enter at least 4 characters.")
                }
            }
        }
    }
    $("#next-departure-stop").unbind("keyup");
    $("#next-departure-stop").keyup(function(e) {
        console.log(e.keyCode);
        if (e.keyCode == "13" && $(this).val().length > 4) {
            $(this)[0].setCustomValidity("");
            disableAutocompleteSearch = true;
            $("#next-departure-stop").autocomplete("close");
            getNextTripsByStopID($(this).val(), "#next-departure-stop-route-ids")
        } else if (e.keyCode == "13") {
            $(this)[0].setCustomValidity("");
            e.preventDefault();
            return false
        } else if (e.keyCode == "27") {
            $(this).val("");
            $("#next-departure-stop").autocomplete("close");
            getNextTripsByStopID("", "#next-departure-stop-route-ids");
            e.preventDefault();
            return false
        } else {
            if ($("body").is(".fr")) {
                this.setCustomValidity('"Minimum de 4 caractères.')
            } else {
                if ($('.next-trips-get-stops input[name="stop_id"]').val().length < 4) {
                    this.setCustomValidity("Please enter at least 4 characters.")
                }
            }
        }
    });
    $(".next-trips-get-routes").delegate('input[type="checkbox"]', "keyup", function(e) {
        if (e.keyCode == "13") {
            $(this).trigger("click")
        }
    });
    $(".next-trips-get-stops").submit(function(e) {
        e.preventDefault();
        getNextTripsByStopID($(this).find('input[name="stop_id"]').val(), "#next-departure-stop-route-ids")
    });
    $(".next-trips").delegate(".next-trips-reset", "click", function(e) {
        e.preventDefault();
        $("#next-departure-stop").val("");
        $(".next-trips-get-routes").hide();
        $(".next-trip-results").hide();
        $(".next-trips h4.error").remove();
        $(".asterisk").addClass("init");
        $(this).remove()
    });
    $(".next-trips").delegate(".next-trips-reset", "keyup", function(e) {
        e.preventDefault();
        if (e.keyCode == "13") {
            $(this).trigger("click")
        }
    });
    $(".next-trips").delegate(".refresh", "click", function(e) {
        e.preventDefault();
        $('.next-trips-get-routes .next-trips-route input[type="checkbox"]:checked').trigger("click").trigger("click")
    });
    $(".next-trips").delegate(".refresh", "keyup", function(e) {
        e.preventDefault();
        if (e.keyCode == "13") {
            $('.next-trips-get-routes .next-trips-route input[type="checkbox"]:checked').trigger("click").trigger("click")
        }
    });
    $(".info-toggle").click(function(e) {
        e.preventDefault();
        $($(this).attr("href")).toggleClass("hidden")
    });
    $("#next-trip").on("click", ".favourite-route", function(e) {
        var routeData = $(this).data("routestop").split("-");
        routeData = routeData[0] + "-" + routeData[1] + "-" + routeData[2];
        console.log(routeData);
        if (favouriteRoutes.indexOf(routeData) == -1) {
            favouriteRoutes.push(routeData);
            $('.favourite-route[data-routestop="' + routeData + '"]').addClass("selected")
        } else {
            var favouriteIndex = favouriteRoutes.indexOf(routeData);
            $('.favourite-route[data-routestop="' + routeData + '"]').removeClass("selected");
            favouriteRoutes.splice(favouriteIndex, 1)
        }
        Cookies.set("favourites", favouriteRoutes.toString(), {
            expires: 365
        });
        favouritesWidget()
    });
    $("#next-trip").on("click", ".favourite-route-get", function(e) {
        var stopID = $(this).data("stop").toString();
        var routeID = $(this).data("route").toString();
        $("#next-departure-stop").val(stopID);
        getNextTripsByStopID(stopID, "#next-departure-stop-route-ids", routeID)
    });
    $("#next-trip").on("click", ".remove-favourite", function(e) {
        routeData = $(this).prev().data("route") + "-" + $(this).prev().data("stop");
        var favouriteIndex = favouriteRoutes.indexOf(routeData);
        $('.favourite-route[data-routestop="' + routeData + '"]').removeClass("selected");
        favouriteRoutes.splice(favouriteIndex, 1);
        Cookies.set("favourites", favouriteRoutes.toString(), {
            expires: 365
        });
        $(this).parent().remove();
        if ($("#next-trip .favourites .favourite-route-nav-item").length == 0) {
            favouritesWidget()
        }
        if ($("#next-trip .favourites .favourite-route-nav-item").length && $("#next-trip .favourites .favourite-route-nav-item").length < 6) {
            favouritesWidget()
        }
    });
    favouritesWidget()
}
function favouritesButtonLabel() {
    var removeFavourite = "Remove from favourites";
    var favouritesLabel = "Add to favourites";
    if ($("body").is(".fr")) {
        favouritesLabel = "Ajouter à ma liste de favoris";
        removeFavourite = "Retirer de la liste des favoris"
    }
    $(".favourite-route").each(function() {
        if ($(this).is(".selected")) {
            $(this).attr("title", removeFavourite)
        } else {
            $(this).attr("title", favouritesLabel)
        }
    })
}
function favouritesWidget() {
    var favouriteRoutesCookie = Cookies.get("favourites");
    var favouritesLabel = "Favourites";
    var favouritesInstructions = "Select the star beside a route to favourite it.";
    var favouritesWidgetContent = "";
    var favouritesAtSeparator = " at stop ";
    var removeFavourite = "Remove from favourites";
    var moreFavouritestext = "More favourites";
    var fewerFavouritestext = "Fewer favourites";
    var favouritesExpanded = false;
    if (favouriteRoutesCookie) {
        favouriteRoutes = favouriteRoutesCookie.split(",")
    }
    if ($("body").is(".fr")) {
        favouritesLabel = "Favoris";
        favouritesInstructions = "Pour ajouter un circuit à vos favoris, cliquez sur l’étoile.";
        favouritesAtSeparator = " à l&apos;arrêt ";
        removeFavourite = "Retirer de la liste des favoris";
        moreFavouritestext = "Plus de circuits favoris";
        fewerFavouritestext = "Moins de circuits favoris"
    }
    if ($(".homepage-widgets__widget .favourites.open").length) {
        favouritesExpanded = true
    }
    $(".homepage-widgets__widget .favourites").remove();
    if (favouritesExpanded) {
        favouritesWidgetContent += '<div class="favourites open">'
    } else {
        favouritesWidgetContent += '<div class="favourites">'
    }
    favouritesWidgetContent += '<p><strong><span class="favourites-icon">';
    favouritesWidgetContent += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.824" viewBox="0 0 24 22.824"><path id="Icon_feather-star" data-name="Icon feather-star" d="M15,3l3.708,7.512L27,11.724l-6,5.844,1.416,8.256L15,21.924l-7.416,3.9L9,17.568,3,11.724l8.292-1.212Z" transform="translate(-3 -3)" fill="#707070"/></svg>';
    favouritesWidgetContent += "</span>" + favouritesLabel + "</strong></p>";
    if (favouriteRoutes.length == 0) {
        favouritesWidgetContent += "<p>" + favouritesInstructions + "</p>"
    } else {
        for (var i = 0; i < favouriteRoutes.length; i++) {
            favouriteRoutes[i] = favouriteRoutes[i].replace("-undefined", "");
            var favouriteRouteArray = favouriteRoutes[i].split("-");
            var routeString;
            if (typeof favouriteRouteArray[2] !== "undefined") {
                routeString = '<div class="favourite-route-nav-item"><span class="favourite-route-get" data-route="' + favouriteRouteArray[0] + '" data-stop="' + favouriteRouteArray[1] + "-" + favouriteRouteArray[2] + '">';
                routeString += favouriteRouteArray[0] + favouritesAtSeparator + favouriteRouteArray[1] + "-" + favouriteRouteArray[2]
            } else {
                routeString = '<div class="favourite-route-nav-item"><span class="favourite-route-get" data-route="' + favouriteRouteArray[0] + '" data-stop="' + favouriteRouteArray[1] + '">';
                routeString += favouriteRouteArray[0] + favouritesAtSeparator + favouriteRouteArray[1]
            }
            routeString += '</span><span class="remove-favourite" title="' + removeFavourite + '">';
            routeString += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>';
            routeString += "</span></div>";
            favouritesWidgetContent += routeString
        }
    }
    if (favouriteRoutes.length > 5) {
        favouritesWidgetContent += '<a class="show-more">' + moreFavouritestext + "</a>";
        favouritesWidgetContent += '<a class="show-less">' + fewerFavouritestext + "</a>"
    }
    favouritesWidgetContent += "</div>";
    $(".next-trips-all-schedules").before(favouritesWidgetContent);
    $(".favourites .show-more").unbind("click");
    $(".favourites .show-more").click(function(e) {
        $(".favourites").toggleClass("open")
    });
    $(".favourites .show-less").unbind("click");
    $(".favourites .show-less").click(function(e) {
        $(".favourites").toggleClass("open")
    });
    favouritesButtonLabel()
}
function getNextTripsByStopID(stopID, targetElement, selectedRoute) {
    var lang = "en"
      , depart_at = "departs at";
    var noServiceLabel = "This route does not serve this stop.";
    if ($("body").is(".fr")) {
        lang = "fr";
        depart_at = "partir à ";
        noServiceLabel = "Le circuit sélectionné ne dessert plus cet arrêt."
    }
    stopIDString = stopID;
    stopIDString = stopIDString.replace("ST-LAURENT", "ST&hyphen;LAURENT");
    stopID = stopID.replace(/ /gi, "");
    stopID = stopID.replace(/\?/gi, "");
    if (stopID.length < 4) {
        return false
    } else {
        if (stopID.substring(4, 5) == " ") {
            stopID = stopID.substring(0, 4)
        }
    }
    $(".next-trips .loading").remove();
    $(".next-trip-results").before('<span class="loading"></span>');
    if (typeof _gaq != "undefined") {
        _gaq.push(["_trackEvent", "nextTripsRoutesLookup", stopID])
    }
    var routeJSON = $.getJSON(baseURL + "next_trips/routes?stop_id=" + stopID, function(data) {
        $(".next-trips .error").remove();
        if (typeof data.GetRouteSummaryForStopResult == "undefined") {
            data.GetRouteSummaryForStopResult = {};
            data.GetRouteSummaryForStopResult.Error = "10"
        }
        if (typeof data.GetRouteSummaryForStopResult.Error == "undefined" && typeof data.GetRouteSummaryForStopResult.StopNo == "undefined") {
            data.GetRouteSummaryForStopResult = {};
            data.GetRouteSummaryForStopResult.Error = "10"
        }
        if (typeof data.GetRouteSummaryForStopResult.Error !== "undefined" && data.GetRouteSummaryForStopResult.Error) {
            if ($("body").is(".fr")) {
                switch (data.GetRouteSummaryForStopResult.Error) {
                case "1":
                    $(".next-trips-get-routes").before('<h4 class="error">Clé API invalide</h4>');
                    break;
                case "2":
                    $(".next-trips-get-routes").before('<h4 class="error">Impossible d\'interroger la source de données</h4>');
                    break;
                case "10":
                    $(".next-trips-get-routes").before('<h4 class="error">Numéro d\'arrêt invalide.</h4>');
                    break;
                case "11":
                    $(".next-trips-get-routes").before('<h4 class="error">Numéro de route invalide.</h4>');
                    break;
                case "12":
                    $(".next-trips-get-routes").before('<h4 class="error">Stop ne dessert pas la route</h4>');
                    break;
                case "13":
                    $(".next-trips-get-routes").before('<h4 class="error">Entrée invalide</h4>');
                    break;
                case "14":
                    $(".next-trips-get-routes").before('<h4 class="error">Nom d\'arrêt invalide.</h4>');
                    break;
                default:
                    $(".next-trips-get-routes").before('<h4 class="error">Entrée invalide</h4>');
                    break
                }
            } else {
                switch (data.GetRouteSummaryForStopResult.Error) {
                case "1":
                    $(".next-trips-get-routes").before('<h4 class="error">Invalid API key</h4>');
                    break;
                case "2":
                    $(".next-trips-get-routes").before('<h4 class="error">Unable to query data source</h4>');
                    break;
                case "10":
                    $(".next-trips-get-routes").before('<h4 class="error">Invalid stop number</h4>');
                    break;
                case "11":
                    $(".next-trips-get-routes").before('<h4 class="error">Invalid route number</h4>');
                    break;
                case "12":
                    $(".next-trips-get-routes").before('<h4 class="error">Stop does not service route</h4>');
                    break;
                case "13":
                    $(".next-trips-get-routes").before('<h4 class="error">Invalid input</h4>');
                    break;
                case "14":
                    $(".next-trips-get-routes").before('<h4 class="error">Invalid stop name</h4>');
                    break;
                default:
                    $(".next-trips-get-routes").before('<h4 class="error">Invalid input</h4>');
                    break
                }
            }
            $(".next-trips span.loading").remove();
            return false
        }
        $(".next-trips span.loading").remove();
        $(".next-trips .ui-autocomplete-input").removeClass("ui-autocomplete-loading");
        var displayedRoutes = [];
        $(targetElement).closest(".next-trips").find(".route-result").remove();
        $(".next-trips-get-routes").hide();
        if (typeof data.GetRouteSummaryForStopResult !== "undefined") {
            $(targetElement).find(".next-trips-route").remove();
            if (typeof data.GetRouteSummaryForStopResult.Routes == "undefined") {
                return false
            }
            $(".next-trips-get-routes").show();
            $(".stop_id_outer").append('<button class="next-trips-reset clear">clear</button>');
            if (typeof data.GetRouteSummaryForStopResult.Routes.Route.RouteNo != "undefined") {
                if ($.inArray(data.GetRouteSummaryForStopResult.Routes.Route.RouteNo, displayedRoutes) == -1) {
                    displayedRoutes.push(data.GetRouteSummaryForStopResult.Routes.Route.RouteNo);
                    $(targetElement).append('<div class="next-trips-route col-2"><input type="checkbox" name="route_id" value="' + data.GetRouteSummaryForStopResult.Routes.Route.RouteNo + '" id="next-trips-' + data.GetRouteSummaryForStopResult.Routes.Route.RouteNo + '"><label for="next-trips-' + data.GetRouteSummaryForStopResult.Routes.Route.RouteNo + '">' + data.GetRouteSummaryForStopResult.Routes.Route.RouteNo + "</label></div>")
                }
            } else {
                for (var i = 0; i < data.GetRouteSummaryForStopResult.Routes.Route.length; i++) {
                    if ($.inArray(data.GetRouteSummaryForStopResult.Routes.Route[i].RouteNo, displayedRoutes) == -1) {
                        displayedRoutes.push(data.GetRouteSummaryForStopResult.Routes.Route[i].RouteNo);
                        $(targetElement).append('<div class="next-trips-route col-2"><input type="checkbox" name="route_id" value="' + data.GetRouteSummaryForStopResult.Routes.Route[i].RouteNo + '" id="next-trips-' + data.GetRouteSummaryForStopResult.Routes.Route[i].RouteNo + '"><label for="next-trips-' + data.GetRouteSummaryForStopResult.Routes.Route[i].RouteNo + '">' + data.GetRouteSummaryForStopResult.Routes.Route[i].RouteNo + "</label></div>")
                    }
                }
            }
            $(targetElement).find('input[type="checkbox"]').change(function() {
                var currentTime = new Date;
                var selectedRoutes = [];
                var checkedCount = 0;
                $(targetElement).find('input[type="checkbox"]:checked').each(function() {
                    checkedCount++
                });
                if (checkedCount > 5) {
                    $(this).prop("checked", false);
                    return false
                }
                $(".next-trips .loading").remove();
                if (checkedCount > 0) {
                    $(".next-trip-results").before('<span class="loading"></span>')
                }
                $(targetElement).find('input[type="checkbox"]:checked').each(function() {
                    currentRouteID = $(this).val();
                    currentRouteIDFallback = currentRouteID;
                    selectedRoutes.push(currentRouteID);
                    var displayRoute = true;
                    var currentRouteIDLocal = $(this).val();
                    if (typeof _gaq != "undefined") {
                        _gaq.push(["_trackEvent", "nextTripsLookup", stopID, $(this).val()])
                    }
                    var nextTripsJSON = $.getJSON(baseURL + "next_trips/next_trips?stop_id=" + stopID + "&route_id=" + $(this).val(), function(nextTripsData) {
                        var returnString = ""
                          , nextTrips = false;
                        var routeStopString;
                        var stopIDNumeric = stopID.split("-");
                        var favouritesLabel = "Add to favourites";
                        if (lang == "fr") {
                            favouritesLabel = "Ajouter à ma liste de favoris"
                        }
                        var favouriteIsSelectedString = "";
                        var routeNoIcon = "";
                        console.log("nextTripsData");
                        console.log(nextTripsData.GetNextTripsForStopResult.Route.RouteDirection);
                        if (typeof nextTripsData.GetNextTripsForStopResult.Route.RouteDirection !== "undefined") {
                            if (typeof nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo !== "undefined") {
                                currentRouteID = nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo;
                                stopIDNumeric = stopIDNumeric[0];
                                routeStopString = currentRouteID + "-" + stopIDString;
                                favouriteIsSelectedString = "";
                                if (favouriteRoutes.indexOf(routeStopString) !== -1) {
                                    favouriteIsSelectedString = " selected"
                                }
                                if (nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo == "") {
                                    nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo = currentRouteIDFallback;
                                    currentRouteID = currentRouteIDFallback;
                                    nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteLabel = "";
                                    routeStopString = currentRouteID + "-" + stopIDString
                                }
                                if (typeof nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteLabel == "undefined") {
                                    nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteLabel = ""
                                }
                                routeNoIcon = '<span class="favourite-route favourite-route-single ' + favouriteIsSelectedString + '" data-routestop="' + routeStopString + '" title="' + favouritesLabel + '">';
                                routeNoIcon += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.824" viewBox="0 0 24 22.824"><path id="Icon_feather-star" data-name="Icon feather-star" d="M15,3l3.708,7.512L27,11.724l-6,5.844,1.416,8.256L15,21.924l-7.416,3.9L9,17.568,3,11.724l8.292-1.212Z" transform="translate(-3 -3)" fill="#707070"/></svg>';
                                routeNoIcon += "</span>";
                                if (typeof nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.Trips == "undefined") {
                                    nextTrips = null
                                } else {
                                    nextTrips = getFormattedNextTrips(nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.Trips.Trip, nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteLabel)
                                }
                                if (nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo == "") {
                                    console.log("missing routeNo");
                                    console.log(nextTripsData);
                                    nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo = currentRouteID;
                                    nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteLabel = ""
                                }
                                if (nextTrips) {
                                    returnString = '<div class="route-result" data-modified="' + Date.now() + '" data-route="' + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo + '"><strong>' + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo + " " + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteLabel + "</strong> " + depart_at + ":<br>";
                                    returnString += nextTrips;
                                    returnString += routeNoIcon;
                                    returnString += "</div>"
                                } else {
                                    console.log("no trips single direction " + currentRouteID);
                                    returnString = '<div class="route-result no-results" data-modified="' + Date.now() + '" data-route="' + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo + '"><strong>' + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.RouteNo + "</strong> ";
                                    returnString += $(".next-trips-no-results").html();
                                    returnString += routeNoIcon;
                                    returnString += "</div>"
                                }
                            } else {
                                returnString = "";
                                returnString += '<div class="route-result" data-modified="' + Date.now() + '" data-route="' + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[0].RouteNo + '">';
                                for (var j = 0; j < nextTripsData.GetNextTripsForStopResult.Route.RouteDirection.length; j++) {
                                    nextTrips = getFormattedNextTrips(nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[j].Trips.Trip, nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[j].RouteLabel);
                                    stopIDNumeric = stopIDNumeric[0];
                                    routeStopString = nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[j].RouteNo + "-" + stopIDString;
                                    if (favouriteRoutes.indexOf(routeStopString) !== -1) {
                                        favouriteIsSelectedString = " selected"
                                    }
                                    routeNoIcon = '<span class="favourite-route' + favouriteIsSelectedString + '" data-routestop="' + routeStopString + '" title="' + favouritesLabel + '">';
                                    routeNoIcon += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.824" viewBox="0 0 24 22.824"><path id="Icon_feather-star" data-name="Icon feather-star" d="M15,3l3.708,7.512L27,11.724l-6,5.844,1.416,8.256L15,21.924l-7.416,3.9L9,17.568,3,11.724l8.292-1.212Z" transform="translate(-3 -3)" fill="#707070"/></svg>';
                                    routeNoIcon += "</span>";
                                    if (nextTrips) {
                                        returnString += '<div class="route-result-inner"><strong>';
                                        returnString += nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[j].RouteNo + " " + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[j].RouteLabel + "</strong> " + depart_at + ":<br>";
                                        returnString += nextTrips;
                                        returnString += routeNoIcon;
                                        returnString += "</div>"
                                    } else {
                                        console.log("no trips multiple direction " + currentRouteID);
                                        returnString += '<div class="route-result-inner"><strong>' + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[j].RouteNo + " " + nextTripsData.GetNextTripsForStopResult.Route.RouteDirection[j].RouteLabel + "</strong> ";
                                        returnString += $(".next-trips-no-results").html();
                                        returnString += routeNoIcon;
                                        returnString += "</div>"
                                    }
                                }
                                returnString += "</div>"
                            }
                        } else {
                            console.log("no results " + currentRouteID);
                            returnString += '<div class="route-result"><strong>';
                            returnString += currentRouteID + "</strong>: " + $(".next-trips-no-results").html();
                            returnString += "</div>"
                        }
                        $(".next-trip-results .route-result").each(function() {
                            if ($(this).data("route") == currentRouteIDLocal) {
                                if (Date.now() - $(this).data("modified") < 36e5) {
                                    displayRoute = false
                                } else {
                                    $(this).remove()
                                }
                            }
                        });
                        if (displayRoute) {
                            $(targetElement).closest(".next-trips").find(".next-trip-results").append(returnString);
                            $(".next-trip-results").show();
                            sortByRoute(".next-trip-results .route-result");
                            $(".next-trips .asterisk").removeClass("init")
                        }
                    })
                });
                $(".next-trip-results .route-result").addClass("remove");
                $(".next-trip-results .route-result").each(function() {
                    console.log(selectedRoutes);
                    if (selectedRoutes.indexOf(parseFloat($(this).data("route"))) != -1) {
                        $(this).removeClass("remove")
                    }
                });
                $(".next-trip-results .route-result.remove").remove();
                sortByRoute(".next-trip-results .route-result");
                $(".next-trips span.loading").remove()
            });
            if (selectedRoute != undefined) {
                var targetCheckbox = "#next-trips-" + selectedRoute;
                console.log("targetCheckbox" + $(targetCheckbox).length);
                if ($(targetCheckbox).length) {
                    $(targetCheckbox).trigger("click")
                } else {
                    $(".next-trip-results").append('<div class="route-result no-results">' + noServiceLabel + "</div>");
                    $(".next-trip-results").show();
                    $(".next-trips .asterisk").removeClass("init")
                }
            }
        }
    })
}
function getFormattedNextTrips(nextTrips, routeLabel) {
    var currentTime = new Date;
    var formattedTrips = "";
    if (typeof nextTrips == "undefined") {
        return false
    }
    for (var i = 0; i < nextTrips.length; i++) {
        hasCoords = false;
        var tripArrivaltime = new Date(currentTime.getTime() + nextTrips[i].AdjustedScheduleTime * 6e4);
        if (nextTrips[i].AdjustmentAge > -1) {
            hasCoords = true
        }
        formattedTrips += tripArrivaltime.getHours() + ":" + pad_number(tripArrivaltime.getMinutes(), 2);
        if (hasCoords) {
            formattedTrips += "*"
        }
        if (nextTrips[i].TripDestination != routeLabel) {
            formattedTrips += '<span class="info" title="Destination ' + nextTrips[i].TripDestination + '">More information</span>'
        }
        if (i < nextTrips.length - 1) {
            formattedTrips += ", "
        }
    }
    return formattedTrips
}
function tabNavigation($) {
    var pageHash = window.location.hash;
    $("a.tab").each(function() {
        if ($(this).is(":first-child")) {
            $(this).addClass("tab--active")
        } else {
            $(this).removeClass("tab--active");
            $($(this).attr("href")).hide()
        }
        $(this).click(function(e) {
            e.preventDefault();
            $(this).parent().find("a.tab").each(function() {
                $(this).removeClass("tab--active");
                $($(this).attr("href")).hide()
            });
            $(this).addClass("tab--active");
            $($(this).attr("href")).show()
        });
        if (!$(this).attr("aria-controls")) {
            var linkTarget = $(this).attr("href");
            var linkID = linkTarget.replace("#", "") + "-tab";
            if (!$(this).attr("id")) {
                $(this).attr("id", linkID)
            }
            $(this).attr("aria-controls", $(this).attr("href"));
            $(linkTarget).attr("aria-labelledby", linkID);
            $(linkTarget).addClass("mobile-tabcontent")
        }
        if (pageHash == $(this).attr("href")) {
            $(this).trigger("click")
        }
    });
    $('[role="tab"]').click(function(e) {
        var widgetId = $(this).attr("aria-controls").replace("#", "");
        openHomePageWidget(e, widgetId);
        $(this).parent().find('[role="tab"]').removeClass("aria-selected", "false");
        $(this).parent().find('[role="tab"]').attr("aria-selected", "false");
        $(this).parent().find('[role="tab"]').removeClass("aria-current", "false");
        $(this).parent().find('[role="tab"]').attr("aria-current", "false");
        $(this).attr("aria-current", "true");
        $(this).attr("aria-selected", "true")
    });
    $("a.tablinks").click(function(e) {
        openHomePageWidget(e, $(this).data("tab"))
    });
    $(".generic-tab a").click(function(e) {
        openTabContent(e, $(this).attr("href").replace("#", ""))
    });
    $('.generic-tab [role="tab"]').click(function(e) {
        openTabContent(e, $(this).attr("aria-controls").replace("#", ""))
    });
    $(".generic-tab > a:first-child").each(function() {
        openTabContent(null, $(this).attr("href").replace("#", ""));
        $(this).addClass("active")
    });
    $('.generic-tab [role="tab"]:first-child').each(function() {
        openTabContent(null, $(this).attr("aria-controls").replace("#", ""));
        $(this).addClass("active")
    });
    $(window).resize(function() {
        if ($(window).width() >= 991) {
            $("a.tablinks").each(function() {
                $("#" + $(this).data("tab")).show()
            })
        }
        if ($(window).height() < 750) {
            $(".btn-feedback").hide()
        } else {
            if ($(window).width() >= 768) {
                feedbackButton($)
            } else {
                $(".btn-feedback").hide()
            }
        }
        if ($(window).width() <= 991 && !$("body").is(".mobile-nav-init")) {
            mobileMainNav($)
        } else if ($(window).width() > 991) {
            $(".stage2-main-nav ul").show()
        }
        stage2HeroSliderHeight();
        stage2NavExpandButtons()
    });
    if (pageHash.length > 0) {
        $("a.tablink").each(function() {
            if ($(this).attr("href") == pageHash || $($(this).attr("href")).find(pageHash).length > 0) {
                openTabContent(null, $(this).attr("href").replace("#", ""));
                $(this).addClass("active")
            }
        })
    }
}
function setupISNs($) {
    $(".isn").each(function() {
        var isHidden = Cookies.get("isn-hide-" + $(this).attr("id"));
        if (isHidden) {
            $(this).remove()
        }
    });
    $(".isn").show();
    $(".isn .close-icon").click(function() {
        Cookies.set("isn-hide-" + $(this).parent().attr("id"), true);
        $(this).parent().remove()
    })
}
function feedbackButton($) {
    $(".btn-feedback").each(function() {
        var hideFeedbackButton = Cookies.get("feedback-btn-hide");
        if (hideFeedbackButton) {
            $(this).remove()
        } else {
            $(this).show()
        }
    });
    $(".btn-feedback .close").click(function() {
        Cookies.set("feedback-btn-hide", true, {
            expires: 1
        });
        $(this).parent().remove()
    })
}
function homepageAlerts($) {
    $(".homepage-widgets__widget #alerts-routes a, .homepage-widgets__widget #alerts-stations a").click(function(e) {
        var lang = "en";
        if ($("body").is(".fr")) {
            lang = "fr"
        }
        $(this).parent().parent().find("a").removeClass("tab-content__item__link--active");
        $(this).addClass("tab-content__item__link--active");
        e.preventDefault();
        if ($(this).data("route")) {
            $("#alerts-routes-content").load(baseURL + "alerts/filter?alertlang=" + lang + "&route=" + $(this).data("route"), function() {})
        } else if ($(this).data("station")) {
            $("#alerts-stations-content").load(baseURL + "alerts/filter?alertlang=" + lang + "&station=" + $(this).data("station"), function() {})
        } else {
            $("#alerts-routes-content").load(baseURL + "alerts/filter?alertlang=" + lang, function() {})
        }
    });
    $(".homepage-widgets__widget #alerts-routes .more a, .homepage-widgets__widget #alerts-stations .more a").unbind("click");
    $(".homepage-widgets__widget #alerts-routes .more a").click(function(e) {
        e.preventDefault();
        $(".homepage-widgets__widget #alerts-routes .more").show();
        $(this).parent().hide();
        if ($(this).parent().is(".less")) {
            $(window).scrollTop($(".homepage-widgets__widget #alerts-routes").offset().top - 50);
            $(".homepage-widgets__widget #alerts-routes .alert-route-more-visible").each(function() {
                $(this).addClass("alert-route-more").removeClass("alert-route-more-visible")
            })
        } else {
            $(".homepage-widgets__widget #alerts-routes .alert-route-more").each(function() {
                $(this).addClass("alert-route-more-visible").removeClass("alert-route-more")
            })
        }
    });
    $(".homepage-widgets__widget #alerts-stations .more a").click(function(e) {
        e.preventDefault();
        $(".homepage-widgets__widget #alerts-stations .more").show();
        $(this).parent().hide();
        if ($(this).parent().is(".less")) {
            $(window).scrollTop($(".homepage-widgets__widget #alerts-stations").offset().top - 50);
            $(".homepage-widgets__widget #alerts-stations .alert-route-more-visible").each(function() {
                $(this).addClass("alert-route-more").removeClass("alert-route-more-visible")
            })
        } else {
            $(".homepage-widgets__widget #alerts-stations .alert-route-more").each(function() {
                $(this).addClass("alert-route-more-visible").removeClass("alert-route-more")
            })
        }
    });
    $(".col--alerts-isn .alert").hide();
    $(".col--alerts-isn .display-count").parent().hide();
    $(".homepage-widgets__widget--alerts--alerts-inline #alerts-routes a, .homepage-widgets__widget--alerts--alerts-inline #alerts-stations a").click(function(e) {
        $(this).parent().parent().find("a").removeClass("tab-content__item__link--active");
        $(this).addClass("tab-content__item__link--active");
        e.preventDefault();
        if ($(this).data("route")) {
            var selectedRoute = $(this).data("route")
              , routeDisplayCount = 0;
            $(".col--alerts-isn .alert, .col--alerts-cancellations .alert, .col--alerts-detours .alert, .col--alerts-stations .alert").hide();
            $(".col--alerts-cancellations .alert").each(function() {
                var alertRoutes = $(this).data("routes");
                if (typeof alertRoutes == "string") {
                    alertRoutes = alertRoutes.split("|")
                } else if (alertRoutes) {
                    alertRoutes = [alertRoutes]
                } else {
                    alertRoutes = []
                }
                for (i = 0; i < alertRoutes.length; i++) {
                    if (selectedRoute == alertRoutes[i]) {
                        routeDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-cancellations .display-count").html(routeDisplayCount);
                if (routeDisplayCount < 1) {
                    $(".col--alerts-cancellations .display-count").parent().hide()
                } else {
                    $(".col--alerts-cancellations .display-count").parent().show()
                }
            });
            routeDisplayCount = 0;
            $(".col--alerts-isn .alert").each(function() {
                var alertRoutes = $(this).data("routes");
                if (typeof alertRoutes == "string") {
                    alertRoutes = alertRoutes.split("|")
                } else if (alertRoutes) {
                    alertRoutes = [alertRoutes]
                } else {
                    alertRoutes = []
                }
                for (i = 0; i < alertRoutes.length; i++) {
                    if (selectedRoute == alertRoutes[i]) {
                        routeDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-isn .display-count").html(routeDisplayCount);
                if (routeDisplayCount < 1) {
                    $(".col--alerts-isn .display-count").parent().hide()
                } else {
                    $(".col--alerts-isn .display-count").parent().show()
                }
            });
            routeDisplayCount = 0;
            $(".col--alerts-detours .alert").each(function() {
                var alertRoutes = $(this).data("routes");
                if (typeof alertRoutes == "string") {
                    alertRoutes = alertRoutes.split("|")
                } else if (alertRoutes) {
                    alertRoutes = [alertRoutes]
                } else {
                    alertRoutes = []
                }
                for (i = 0; i < alertRoutes.length; i++) {
                    if (selectedRoute == alertRoutes[i]) {
                        routeDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-detours .display-count").html(routeDisplayCount);
                if (routeDisplayCount < 1) {
                    $(".col--alerts-detours .display-count").parent().hide()
                } else {
                    $(".col--alerts-detours .display-count").parent().show()
                }
            });
            routeDisplayCount = 0;
            $(".col--alerts-stations .alert").each(function() {
                var alertRoutes = $(this).data("routes");
                if (typeof alertRoutes == "string") {
                    alertRoutes = alertRoutes.split("|")
                } else if (alertRoutes) {
                    alertRoutes = [alertRoutes]
                } else {
                    alertRoutes = []
                }
                for (i = 0; i < alertRoutes.length; i++) {
                    if (selectedRoute == alertRoutes[i]) {
                        routeDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-stations .display-count").html(routeDisplayCount);
                if (routeDisplayCount < 1) {
                    $(".col--alerts-stations .display-count").parent().hide()
                } else {
                    $(".col--alerts-stations .display-count").parent().show()
                }
            });
            routeDisplayCount = 0;
            $(".col--alerts-isn .alert").each(function() {
                var alertRoutes = $(this).data("routes");
                if (typeof alertRoutes == "string") {
                    alertRoutes = alertRoutes.split("|")
                } else if (alertRoutes) {
                    alertRoutes = [alertRoutes]
                } else {
                    alertRoutes = []
                }
                for (i = 0; i < alertRoutes.length; i++) {
                    if (selectedRoute == alertRoutes[i]) {
                        routeDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-isn .display-count").html(routeDisplayCount);
                if (routeDisplayCount < 1) {
                    $(".col--alerts-isn .display-count").parent().hide()
                } else {
                    $(".col--alerts-isn .display-count").parent().show()
                }
            })
        } else if ($(this).data("station")) {
            var selectedStation = $(this).data("station")
              , stationDisplayCount = 0;
            $(".col--alerts-stations .alert, .col--alerts-other .alert, .col--alerts-isn .alert").hide();
            $(".col--alerts-cancellations .alert").each(function() {
                var alertStations = $(this).data("stations");
                if (typeof alertStations == "string") {
                    alertStations = alertStations.split("|")
                } else if (alertStations) {
                    alertStations = [alertStations]
                } else {
                    alertStations = []
                }
                for (i = 0; i < alertStations.length; i++) {
                    if (selectedStation == alertStations[i]) {
                        stationDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-cancellations .display-count").html(stationDisplayCount);
                if (stationDisplayCount < 1) {
                    $(".col--alerts-cancellations .display-count").parent().hide()
                } else {
                    $(".col--alerts-cancellations .display-count").parent().show()
                }
            });
            stationDisplayCount = 0;
            $(".col--alerts-isn .alert").each(function() {
                var alertStations = $(this).data("stations");
                if (typeof alertStations == "string") {
                    alertStations = alertStations.split("|")
                } else if (alertStations) {
                    alertStations = [alertStations]
                } else {
                    alertStations = []
                }
                for (i = 0; i < alertStations.length; i++) {
                    if (selectedStation == alertStations[i]) {
                        stationDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-isn .display-count").html(stationDisplayCount);
                if (stationDisplayCount < 1) {
                    $(".col--alerts-isn .display-count").parent().hide()
                } else {
                    $(".col--alerts-isn .display-count").parent().show()
                }
            });
            stationDisplayCount = 0;
            $(".col--alerts-detours .alert").each(function() {
                var alertStations = $(this).data("stations");
                if (typeof alertStations == "string") {
                    alertStations = alertStations.split("|")
                } else if (alertStations) {
                    alertStations = [alertStations]
                } else {
                    alertStations = []
                }
                for (i = 0; i < alertStations.length; i++) {
                    if (selectedStation == alertStations[i]) {
                        stationDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-detours .display-count").html(stationDisplayCount);
                if (stationDisplayCount < 1) {
                    $(".col--alerts-detours .display-count").parent().hide()
                } else {
                    $(".col--alerts-detours .display-count").parent().show()
                }
            });
            stationDisplayCount = 0;
            $(".col--alerts-stations .alert").each(function() {
                var alertStations = $(this).data("stations");
                if (typeof alertStations == "string") {
                    alertStations = alertStations.split("|")
                } else if (alertStations) {
                    alertStations = [alertStations]
                } else {
                    alertStations = []
                }
                for (i = 0; i < alertStations.length; i++) {
                    if (selectedStation == alertStations[i]) {
                        stationDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-stations .display-count").html(stationDisplayCount);
                if (stationDisplayCount < 1) {
                    $(".col--alerts-stations .display-count").parent().hide()
                } else {
                    $(".col--alerts-stations .display-count").parent().show()
                }
            });
            stationDisplayCount = 0;
            $(".col--alerts-other .alert").each(function() {
                var alertStations = $(this).data("stations");
                if (typeof alertStations == "string") {
                    alertStations = alertStations.split("|")
                } else if (alertStations) {
                    alertStations = [alertStations]
                } else {
                    alertStations = []
                }
                for (i = 0; i < alertStations.length; i++) {
                    if (selectedStation == alertStations[i]) {
                        stationDisplayCount++;
                        $(this).show()
                    }
                }
                $(".col--alerts-other .display-count").html(stationDisplayCount);
                if (stationDisplayCount < 1) {
                    $(".col--alerts-other .display-count").parent().hide()
                } else {
                    $(".col--alerts-other .display-count").parent().show()
                }
            })
        } else {
            $(".col--alerts-cancellations .alert, .col--alerts-detours .alert").show()
        }
    });
    var pageHash = window.location.hash;
    $(".tabs--alerts > a").click(function() {
        if ($(this).is(".alert-tab-stations")) {
            $("#alerts-stations .btn--all-alerts").trigger("click");
            $(".col--alerts-cancellations").hide();
            $(".col--alerts-detours").hide();
            $(".col--alerts-stations").show();
            $(".col--alerts-stations .display-count").html($(".col--alerts-stations .alert").length);
            $(".col--alerts-stations h2, .col--alerts-stations .alert").show()
        } else {
            $("#alerts-routes .btn--all-alerts").trigger("click");
            $(".col--alerts-cancellations").show();
            $(".col--alerts-detours").show();
            $(".col--alerts-stations").hide()
        }
    });
    $('.container-homepage-widgets a[data-tab="alerts"]').click(function() {
        $("#alerts .tabs a:first-child").trigger("click")
    });
    $(".homepage-widgets__widget--alerts--alerts-inline .alert-tab-routes").trigger("click");
    $(".homepage-widgets__widget--alerts--alerts-inline").delegate(".alert a", "keyup", function(e) {
        if (e.keyCode == "13") {
            var targetAnchor = $(this).attr("href").split("#");
            if (typeof targetAnchor[1] !== "undefined") {
                $('div[data-alert="' + targetAnchor[1] + '"]').each(function() {
                    $(".alert h3").removeClass("from-anchor").removeClass("expanded");
                    $(".alert .alert-content").hide();
                    $(this).find("h3").addClass("from-anchor").addClass("expanded");
                    $(this).find(".alert-content").show();
                    $(window).scrollTop($(this).offset().top);
                    return false
                })
            }
        }
    });
    $(".homepage-widgets__widget--alerts--alerts-inline").delegate(".alert a", "click", function(e) {
        var targetAnchor = $(this).attr("href").split("#");
        if (typeof targetAnchor[1] !== "undefined") {
            $('div[data-alert="' + targetAnchor[1] + '"]').each(function() {
                $(".alert h3").removeClass("from-anchor").removeClass("expanded");
                $(".alert .alert-content").hide();
                $(this).find("h3").addClass("from-anchor").addClass("expanded");
                $(this).find(".alert-content").show();
                $(window).scrollTop($(this).offset().top);
                return false
            })
        }
    });
    $(".homepage-widgets__widget--alerts--alerts-inline .btn--all-alerts").unbind("click");
    $(".homepage-widgets__widget--alerts--alerts-inline .btn--all-alerts").click(function(e) {
        e.preventDefault();
        $(".tab-content a").removeClass("tab-content__item__link--active");
        $(this).addClass("tab-content__item__link--active");
        $(".col--alerts-cancellations, .col--alerts-detours, .col--alerts-stations, .col--alerts-other").each(function() {
            var alertCount = 0;
            $(this).find("h2").show();
            $(this).find(".alert").show();
            $(this).find(".display-count").html($(this).find(".alert").length)
        })
    })
}
$(window).on("load", function() {
    var pageHash = window.location.hash;
    if (pageHash && $(".accordion-container .alert-no-results").length > 0) {
        $(pageHash).parent().show();
        setTimeout(function() {
            $(window).scrollTop($(pageHash).offset().top - 50)
        }, 200)
    }
});
function alertsToggle($) {
    var pageHash = window.location.hash;
    if (pageHash.length > 1) {
        $(".alert").each(function() {
            if ("#" + $(this).data("alert") == pageHash || $(this).data("alert-id") == pageHash.replace("#alerts-", "") || $(this).data("alert-id") == pageHash.replace("#alert-", "")) {
                if ($(this).closest(".col--alerts").is(".col--alerts-stations")) {
                    $(".alert-tab-stations").trigger("click")
                } else {
                    $(".alert-tab-routes").trigger("click")
                }
                $(this).find("h3").addClass("from-anchor").trigger("click").next().show();
                $(window).scrollTop($(this).offset().top);
                return false
            }
        })
    }
    $("header .isn a, .alert-content a").click(function(e) {
        var targetElement = "";
        var isnHref = $(this).attr("href").split("#");
        console.log(isnHref[1]);
        if (isnHref.length > 1) {
            targetAlertID = isnHref[1].replace("alert-", "").replace("alerts-", "");
            var alertSelected = false;
            $('.alert[data-alert-id="' + targetAlertID + '"]').each(function() {
                if (!alertSelected) {
                    e.preventDefault();
                    $(this).children("h3").not(".expanded").trigger("click");
                    $(window).scrollTop($(this).offset().top)
                }
                alertSelected = true;
                return true
            });
            $('.alert[data-alert="' + isnHref[1] + '"]').each(function() {
                if (!alertSelected) {
                    e.preventDefault();
                    $(this).children("h3").not(".expanded").trigger("click");
                    $(window).scrollTop($(this).offset().top)
                }
                alertSelected = true;
                return true
            })
        }
    })
}
function feedbackForm($) {
    $(".g-recaptcha iframe").each(function() {
        $(this).attr("title", "Recaptcha iframe").removeAttr("frameborder").removeAttr("scrolling")
    })
}
function formValidation($) {
    $("body").delegate('input[required], input[type="url"]', "input, blur", function(e) {
        $(this)[0].setCustomValidity("");
        if (($(this)[0].validity.valueMissing || $(this)[0].validity.tooShort) && $("body").is(".fr")) {
            $(this)[0].setCustomValidity("Champ obligatoire.")
        }
        if ($(this)[0].validity.patternMismatch && !$("body").is(".fr")) {
            $(this)[0].setCustomValidity("Disallowed key characters.")
        }
        if ($(this)[0].validity.patternMismatch && $("body").is(".fr")) {
            $(this)[0].setCustomValidity("Caractères clés non autorisés.")
        }
        if ($(this)[0].validity.typeMismatch && $(this).attr("type") == "url" && $("body").is(".fr")) {
            $(this)[0].setCustomValidity("S'il vous plaît entrer une URL.")
        }
    });
    $("body").delegate(".search-form input", "keyup", function(e) {
        $(this)[0].setCustomValidity("");
        if ($(this)[0].validity.patternMismatch && $("body").is(".fr")) {
            $(this)[0].setCustomValidity("Caractères clés non autorisés.")
        }
    })
}
function openHomePageWidget(evt, widgetID) {
    evt.preventDefault();
    var i, tabcontent, tablinks;
    console.log(widgetID);
    tabcontent = document.getElementsByClassName("mobile-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    $('a[href="#' + widgetID + '"]').parent().find("a").each(function() {
        var linkID = $(this).attr("href");
        $(linkID).hide();
        $(this).attr("aria-selected", "false")
    });
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        $(tablinks[i]).removeClass("active");
        $(tablinks[i]).attr("aria-selected", "false")
    }
    document.getElementById(widgetID).style.display = "block";
    $(evt.currentTarget).addClass("active");
    $(evt.currentTarget).attr("aria-selected", "true")
}
function pad_number(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}
function accordionToggle($) {
    var pageHash = window.location.hash;
    var acc = document.getElementsByClassName("accordion");
    var i;
    $(".accordion-container .accordion, .faq-accordion .accordion").each(function() {
        $(this).click(function(e) {
            console.log("click");
            var tabContent = $(this).next()[0];
            $(this).siblings(".accordion").removeClass("active");
            $(this).siblings(".accordion").attr("aria-expanded", "false");
            $(this).toggleClass("active");
            if ($(this).is(".active")) {
                $(this).attr("aria-expanded", "true")
            } else {
                $(this).attr("aria-expanded", "false")
            }
            if (tabContent.style.display === "block") {
                $(this).siblings(".accordion-content").css("display", "none");
                tabContent.style.display = "none"
            } else {
                $(this).siblings(".accordion-content").css("display", "none");
                tabContent.style.display = "block"
            }
        });
        if (pageHash == "#" + $(this).attr("id")) {
            $(this).trigger("click")
        }
    });
    $("a.read-more, a.read-more-btn").each(function() {
        if ($(this).attr("href").substring(0, 1) == "#" && $($(this).attr("href")).length > 0 && !$(this).is(".no-js")) {
            $($(this).attr("href")).hide()
        }
    });
    $("a.read-more, a.read-more-btn").click(function(e) {
        if ($(this).attr("href").substring(0, 1) == "#" && $($(this).attr("href")).length > 0) {
            e.preventDefault();
            $(this).toggleClass("read-less");
            if ($(this).is(".read-less")) {
                $($(this).attr("href")).hide();
                $(this).html($(this).html().replace("More", "Less"))
            } else {
                $($(this).attr("href")).show();
                $(this).html($(this).html().replace("Less", "More"))
            }
        }
    });
    $(".documentation ol li a").click(function(e) {
        var targetElement = $(this).attr("href");
        if ($(targetElement).length > 0) {
            $(targetElement).trigger("click")
        }
    });
    $("a.read-more.no-js, a.read-more-btn.no-js").unbind("click")
}
function destinationsCategories($) {
    var venuesList = [];
    if ($(".venues").length == 0) {
        return false
    }
    if ($(".destinations-category-form").length > 0 && $(".destinations-category-form").data("selected-categories")) {
        var destinationsSelectedCategories = $(".destinations-category-form").data("selected-categories");
        if (typeof destinationsSelectedCategories == "number") {
            destinationsSelectedCategories = destinationsSelectedCategories.toString()
        }
        destinationsSelectedCategories = destinationsSelectedCategories.split("|");
        $('.destinations-category-form input[type="checkbox"]').each(function() {
            if (destinationsSelectedCategories.indexOf($(this).val()) != -1) {
                $(this).prop("checked", true)
            }
        })
    }
    if ($("body").is(".fr")) {
        $.getJSON(baseURL + "/fr/ottawa-destinations/venues-list", function(data) {
            venuesList = data.venues;
            $("#search-venue").autocomplete({
                classes: {
                    "ui-autocomplete": "search-venue-autocomplete"
                },
                select: function(event, ui) {
                    $("#destinations-keyword-search").submit()
                },
                source: venuesList
            })
        })
    } else {
        $.getJSON(baseURL + "/en/ottawa-destinations/venues-list", function(data) {
            venuesList = data.venues;
            $("#search-venue").autocomplete({
                classes: {
                    "ui-autocomplete": "search-venue-autocomplete"
                },
                select: function(event, ui) {
                    $("#destinations-keyword-search").submit()
                },
                source: venuesList
            })
        })
    }
}
function submitApplicationForm($) {
    $('input[name="app_download_link_android"], input[name="app_download_link_apple"], input[name="app_download_link_other"]').parent().hide();
    $('input[name="app_download_link_android"], input[name="app_download_link_apple"], input[name="app_download_link_other"], input[name="developer_url"]').attr("type", "url");
    $('input[type="url"]').keyup(function() {
        if ($(this).val().length > 8 && $(this).val().indexOf("http://") == -1 && $(this).val().indexOf("https://") == -1) {
            $(this).val("https://" + $(this).val())
        }
    });
    $('input[name="app_platform[]"]').change(function() {
        if ($(this).val() == "Android") {
            $('input[name="app_download_link_android"]').parent().toggle()
        }
        if ($(this).val() == "Apple") {
            $('input[name="app_download_link_apple"]').parent().toggle()
        }
        if ($(this).val() == "Other") {
            $('input[name="app_download_link_other"]').parent().toggle()
        }
    });
    $(".fr .channel_form label").each(function() {
        $(this).html($(this).html().replace("Description", "Description de l’application"));
        $(this).html($(this).html().replace("App Platform", "Plateforme"));
        $(this).html($(this).html().replace("App Icon", "Capture d’écran de l’application"));
        $(this).html($(this).html().replace("App Image", "Icône de l’application"));
        $(this).html($(this).html().replace("Free or Paid app?", "Gratuite ou à vendre?"));
        $(this).html($(this).html().replace("Developer Name", "Nom du développeur"));
        $(this).html($(this).html().replace("Developer Email Address", "Adresse courriel du développeur"));
        $(this).html($(this).html().replace("Developer URL", "Site Web du développeur (adresse URL)"))
    });
    $(".fr .channel_form option").each(function() {
        $(this).html($(this).html().replace("Free", "Gratuite"));
        $(this).html($(this).html().replace("Paid", "Payante"))
    })
}
function appGalleryLinks($) {
    var pageHash = window.location.hash;
    if ($(".app").length > 0) {
        $(".app").each(function() {
            if (pageHash == "#" + $(this).data("entry-id")) {
                console.log('.tablink a[href="#' + $(this).parent().attr("id") + '"]');
                $('a.tablink[href="#' + $(this).parent().attr("id") + '"]').trigger("click");
                $(window).scrollTop($(this).offset().top);
                return false
            }
        })
    }
}
function headerTabIndex($) {
    var tabIndex = 1;
    $("header .isn a").each(function() {
        $(this).attr("tabindex", tabIndex);
        tabIndex++
    });
    $("header .skip-to-content").each(function() {
        $(this).attr("tabindex", tabIndex);
        tabIndex++
    });
    $("header .logo").each(function() {
        $(this).attr("tabindex", tabIndex);
        tabIndex++
    })
}
function lrtLaunchNavigation($) {
    $(".en.welcome-aboard-menu .main-nav .red-nav-item > a").html('Welcome Ab<span class="lrt-nav-o">o</span>ard <span class="expand">Expand</span>');
    $(".fr.welcome-aboard-menu .main-nav .red-nav-item > a").html('Bienvenue à b<span class="lrt-nav-o">o</span>rd <span class="expand">Expand</span>');
    $(".en.welcome-aboard-menu .main-nav .o-line-nav-item > a").html('The <span class="lrt-nav-o">o</span>-Line');
    $(".fr.welcome-aboard-menu .main-nav .o-line-nav-item > a").html('L\'<span class="lrt-nav-o">o</span>-Ligne');
    $(".welcome-aboard-menu .main-nav .red-nav-item > a .expand").click(function(e) {
        $(this).parent().parent().siblings(".has-subnav").children("ul").hide();
        if ($(this).parent().is(".active")) {
            e.preventDefault();
            $(this).parent().parent().children("ul").hide();
            $(this).parent().removeClass("active")
        } else {
            e.preventDefault();
            $(this).parent().parent().children("ul").show();
            $(this).parent().parent().parent().find("a").removeClass("active");
            $(this).parent().addClass("active")
        }
    })
}
function lrtLaunchCountdown($) {
    if ($("body").is(".homepage-lrt-countdown")) {
        if ($(".lrt-launch-countdown-complete").length > 0) {
            $("#lrt-launch-countdown").countdown(endDate, function(event) {
                if ($("body").is(".fr")) {
                    $(this).html(event.strftime('<div class="date-segment"><div class="number">%D</div><div class="label">jours</div></div><div class="date-segment"><div class="number">%H</div><div class="label">heures</div></div><div class="date-segment"><div class="number">%M</div><div class="label">minutes</div></div><div class="date-segment"><div class="number">%S</div><div class="label">secondes</div></div>'))
                } else {
                    $(this).html(event.strftime('<div class="date-segment"><div class="number">%D</div><div class="label">days</div></div><div class="date-segment"><div class="number">%H</div><div class="label">hours</div></div><div class="date-segment"><div class="number">%M</div><div class="label">minutes</div></div><div class="date-segment"><div class="number">%S</div><div class="label">seconds</div></div>'))
                }
                if (event.elapsed == true && countdownComplete == false) {
                    var countdownHTML;
                    if ($("body").is(".fr")) {
                        countdownHTML = '<div class="date-segment date-segment-full"><div class="complete">Bienvenue à bord!</div></div>'
                    } else {
                        countdownHTML = '<div class="date-segment date-segment-full"><div class="complete">Welcome aboard!</div></div>'
                    }
                    $("#lrt-launch-countdown").attr("id", "lrt-launch-countdown-old");
                    $("#lrt-launch-countdown-old").after('<div class="countdown lrt-launch-countdown-complete" id="lrt-launch-countdown">' + countdownHTML + "</div>");
                    $("#lrt-launch-countdown-old").remove();
                    $("#lrt-launch-countdown-mobile").attr("id", "lrt-launch-countdown-mobile-old");
                    $("#lrt-launch-countdown-mobile-old").after('<div class="countdown" id="lrt-launch-countdown-mobile">' + countdownHTML + "</div>");
                    $("#lrt-launch-countdown-mobile-old").remove();
                    $("#lrt-launch-countdown-old, #lrt-launch-countdown-mobile-old").hide();
                    console.log("test:");
                    console.log($(".en #lrt-launch-countdown, .en #lrt-launch-countdown-mobile").html());
                    lrtCountdownComplete($)
                }
            })
        } else {
            $("#lrt-launch-countdown").countdown("2019/09/14 14:00:00", function(event) {
                if ($("body").is(".fr")) {
                    $(this).html(event.strftime('<div class="date-segment"><div class="number">%D</div><div class="label">jours</div></div><div class="date-segment"><div class="number">%H</div><div class="label">heures</div></div><div class="date-segment"><div class="number">%M</div><div class="label">minutes</div></div><div class="date-segment"><div class="number">%S</div><div class="label">secondes</div></div>'))
                } else {
                    $(this).html(event.strftime('<div class="date-segment"><div class="number">%D</div><div class="label">days</div></div><div class="date-segment"><div class="number">%H</div><div class="label">hours</div></div><div class="date-segment"><div class="number">%M</div><div class="label">minutes</div></div><div class="date-segment"><div class="number">%S</div><div class="label">seconds</div></div>'))
                }
            })
        }
        if ($(".lrt-launch-countdown-complete").length > 0) {
            $("#lrt-launch-countdown-mobile").countdown(endDate, function(event) {
                $(this).html(event.strftime('<div class="date-segment">%D:%H:%M:%S</div>'))
            })
        } else {
            $("#lrt-launch-countdown-mobile").countdown("2019/09/14 14:00:00", function(event) {
                $(this).html(event.strftime('<div class="date-segment">%D:%H:%M:%S</div>'))
            })
        }
    }
}
function lrtCountdownComplete($) {
    countdownComplete = true;
    var confettiHeight = $(".homepage-widget-wrap").height();
    var confettiWidth = $(".homepage-widget-wrap").width();
    confettiSettings.height = confettiHeight;
    confettiSettings.width = confettiWidth;
    console.log(confettiSettings);
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    $(".homepage-widget-wrap").addClass("canvas-wrap");
    $("#homepage-widget-confetti").css("width", confettiWidth + "px");
    $("#homepage-widget-confetti").css("top", "-" + confettiHeight + "px");
    $("#homepage-widget-confetti").animate({
        top: "0px"
    }, {
        duration: 2e3,
        specialEasing: {
            maxHeight: "easeout"
        },
        complete: function() {}
    });
    setTimeout(function() {
        $("#homepage-widget-confetti").fadeTo("slow", 0);
        $(".homepage-widget-wrap").removeClass("canvas-wrap")
    }, 3e4);
    $(".homepage-widget-wrap, #homepage-widget-confetti").on("click scroll keyup", function(e) {
        if ($("#homepage-widget-confetti").length > 0) {
            $("#homepage-widget-confetti").fadeTo(200, 0)
        }
    });
    $(document).on("scroll", function(e) {
        if ($("#homepage-widget-confetti").length > 0) {
            $("#homepage-widget-confetti").fadeTo(200, 0)
        }
    })
}
function serviceChangeNotification($) {
    $(".modal-service-change .close").click(function() {
        var serviceChangeCookieExpiration = new Date((new Date).getTime() + 60 * 60 * 1e3);
        Cookies.set("hide-service-change-notification", true, {
            expires: serviceChangeCookieExpiration
        });
        $(".modal-service-change").remove()
    });
    if (Cookies.get("hide-service-change-notification")) {
        $(".modal-service-change").remove()
    } else {
        $(".modal-service-change").show()
    }
    if ($(window).width() < 992) {
        $(".modal-service-change a").css("height", $(".modal-service-change").height() + "px")
    }
}
function homepageParallax($) {
    if ($("#parallax-container").length > 0) {
        var parallaxContainer = $("#parallax-container")
          , containerWidth = parallaxContainer.width()
          , trainWidth = $("#train-scroll").width()
          , trainTwoWidth = $("#train-two-scroll").width()
          , busWidth = $("#bus-scroll").width();
        var scrollRatio = ($(window).scrollTop() - parallaxContainer.offset().top) / parallaxContainer.height();
        var trainOffset = containerWidth * .5 - containerWidth * .5 * (scrollRatio * .9);
        var trainTwoOffset = containerWidth * .5 - (containerWidth * .5 + trainTwoWidth) * (scrollRatio * .65);
        var busOffset = containerWidth * .7 - (containerWidth * .7 + busWidth) * (scrollRatio * .2);
        $("#train-scroll").css("margin-right", "-" + containerWidth * .3 + "px");
        $("#train-two-scroll").css("margin-left", "-" + containerWidth * .1 + "px");
        $("#bus-scroll").css("margin-left", "-" + containerWidth * .05 + "px");
        $("#train-scroll").css("right", trainOffset + "px");
        $("#train-two-scroll").css("right", trainTwoOffset + "px");
        $("#bus-scroll").css("left", busOffset + "px");
        $(window).scroll(function() {
            containerWidth = $("#parallax-container").width();
            var parallaxContainerTop = parallaxContainer.offset().top
              , parallaxContainerBottom = parallaxContainer.offset().top + parallaxContainer.height()
              , windowScroll = $(window).scrollTop();
            var scrollPercentage = ($(window).scrollTop() - parallaxContainerTop) / parallaxContainer.height() * 100;
            var scrollRatio = ($(window).scrollTop() - parallaxContainerTop) / parallaxContainer.height();
            if (windowScroll > 0 && windowScroll < parallaxContainerBottom) {
                trainOffset = containerWidth * .5 - containerWidth * .5 * (scrollRatio * .9);
                trainTwoOffset = containerWidth * .5 - (containerWidth * .5 + trainTwoWidth) * (scrollRatio * .65);
                busOffset = containerWidth * .7 - (containerWidth * .7 + busWidth) * (scrollRatio * .2);
                $("#train-scroll").css("left", trainOffset + "px");
                $("#train-two-scroll").css("right", trainTwoOffset + "px");
                $("#bus-scroll").css("left", busOffset + "px")
            }
        })
    }
}
jQuery.ui.autocomplete.prototype._resizeMenu = function() {
    var ul = this.menu.element;
    ul.outerWidth(this.element.outerWidth())
}
;
function sortByRoute(element) {
    var sortResultsArray = [];
    $(element).each(function() {
        var routeID = $(this).data("route");
        if (routeID == "R1") {
            routeID = -1
        }
        if (routeID == "R2") {
            routeID = 0
        }
        routeID = parseFloat(routeID);
        sortResultsArray[routeID] = $(this)
    });
    console.log(sortResultsArray);
    for (i = -1; i < sortResultsArray.length; i++) {
        if (sortResultsArray[i]) {
            $(".next-trip-results").append(sortResultsArray[i])
        }
    }
    favouritesButtonLabel()
}
function openTabContent(evt, tabName) {
    if (evt) {
        evt.preventDefault()
    }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        $(tablinks).removeClass("active");
        $(tablinks).attr("aria-selected", "false")
    }
    document.getElementById(tabName).style.display = "block";
    if (evt) {
        $(evt.currentTarget).addClass("active");
        $(evt.currentTarget).attr("aria-selected", "true")
    }
}
function logo_train() {
    if ($("body").is(".transit-150")) {
        setTimeout(function() {
            $("#logo150").css("opacity", "1");
            $("#logo150").css("left", "0");
            $("#logo").animate({
                opacity: "0"
            }, 600);
            $("#logo150").animate({
                left: "+=133",
                easing: "easeOutCirc"
            }, 1900);
            setTimeout(function() {
                $("#logo150").animate({
                    opacity: "0"
                }, 1e3, function() {
                    $("#logo").animate({
                        opacity: "1"
                    }, 1e3, function() {
                        logo_train()
                    })
                })
            }, 3e3)
        }, 1e3)
    }
}
function stage2Nav() {
    var pageHash = window.location.hash;
    if ($(window).width() > 991) {
        $(".stage2-main-nav > li > ul, .stage2-main-nav > li > .subnav").each(function() {
            $(this).parent().addClass("has-subnav");
            $(this).parent().children("a").append('<span class="expand">Expand</span>')
        })
    }
    $(".stage2-main-nav > li").each(function() {
        if ($(this).find("ul").length) {
            $(this).append('<div class="subnav"></div>');
            $(this).find(".subnav").append('<div class="list-flexbox"><div class="list-flexbox-column list-flexbox-column-1"><ul></ul></div><div class="list-flexbox-column list-flexbox-column-2"><ul></ul></div><div class="list-flexbox-column list-flexbox-column-3"><ul></ul></div></div>');
            $(this).find(".subnav").append('<div class="list-flexbox list-flexbox-bottom"><div class="list-flexbox-column list-flexbox-bottom-column-1"><ul></ul></div><div class="list-flexbox-column list-flexbox-bottom-column-2"><ul></ul></div><div class="list-flexbox-column list-flexbox-bottom-column-3"><ul></ul></div></div>')
        }
    });
    $(".stage2-nav-section").on("keyup", ".expand", function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            $(this).trigger("click")
        }
    });
    $(".stage2-main-nav > li > ul > li").each(function() {
        if ($(this).is(".col3")) {
            $(this).appendTo($(this).parent().parent().find(".list-flexbox-column-3 > ul"))
        } else if ($(this).is(".col2")) {
            $(this).appendTo($(this).parent().parent().find(".list-flexbox-column-2 > ul"))
        } else if ($(this).is(".bottom-col3")) {
            $(this).appendTo($(this).parent().parent().find(".list-flexbox-bottom-column-3 > ul"))
        } else if ($(this).is(".bottom-col2")) {
            $(this).appendTo($(this).parent().parent().find(".list-flexbox-bottom-column-2 > ul"))
        } else if ($(this).is(".bottom-col1")) {
            $(this).appendTo($(this).parent().parent().find(".list-flexbox-bottom-column-1 > ul"))
        } else {
            $(this).appendTo($(this).parent().parent().find(".list-flexbox-column-1 > ul"))
        }
    });
    $(".stage2-main-nav > li > ul").remove();
    $(".stage2-header .navbar-toggler").click(function() {
        $(".stage2-overlay").toggleClass("open");
        $("body").toggleClass("no-scroll");
        $(".stage2-nav-section").toggleClass("expanded")
    });
    $(".stage2-overlay").click(function() {
        if ($(this).is(".open")) {
            $(".stage2-overlay").toggleClass("open");
            $(".stage2-nav-section").toggleClass("expanded")
        }
    });
    if ($(".stage2-header").length) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 130) {
                $("body").addClass("header-scroll")
            } else {
                $("body").removeClass("header-scroll")
            }
        })
    }
    $.js = function(el) {
        return $("[data-js=" + el + "]")
    }
    ;
    if ($(".benefits-single-box").length) {
        $(".benefits-single-box").attr("tabindex", "0");
        $(".benefits-single-box").keyup(function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                $(this).trigger("click")
            }
        })
    }
    $(".stage-2 a.tab").click(function() {
        var targetElement = $(this).attr("href");
        if ($(targetElement).find(".photo-carousel-container").length) {
            $(targetElement).parent().find(".navigation-buttons-slider.prev").trigger("click")
        }
    });
    $("body.stage-2").on("keyup", function(e) {
        if (e.keyCode == 9 && $(this).is(".no-scroll")) {
            setTimeout(function() {
                console.log($(":focus").closest(".stage2-nav-section").length);
                if ($(":focus").closest(".stage2-nav-section").length <= 0) {
                    $(".mobile-nav-min-subsection .navbar-toggler").trigger("click")
                }
            }, 0)
        }
    });
    $(".stage-2 .stage2-main .container-prev-next .stage2-prev-next a").unbind("click");
    $(".stage-2 .stage2-main .container-prev-next .stage2-prev-next a, .stage2-main-nav .subnav-item a").click(function(e) {
        var pageHash = window.location.hash;
        var currentURL = window.location.href.replace(pageHash, "").replace(/\/$/, "");
        var linkHref = $(this).attr("href");
        var scrollToValue = 0;
        currentURL = currentURL.replace(window.location.origin, "");
        linkHref = linkHref.replace(window.location.origin, "");
        if (linkHref.indexOf(currentURL) != -1) {
            linkAnchor = linkHref.replace(currentURL, "");
            linkAnchor = linkAnchor.replace("/", "");
            if (linkHref.indexOf("#") == 0) {
                e.preventDefault()
            }
            if ($(linkAnchor).length) {
                if ($('[role="tablist"] a[href="' + linkAnchor + '"]').length) {
                    $('[role="tablist"] a[href="' + linkAnchor + '"]').trigger("click")
                }
                scrollToValue = $(linkAnchor).offset().top;
                scrollToValue -= $(linkAnchor).parent().find('[role="tablist"]').height();
                $(window).scrollTop(scrollToValue);
                history.pushState(null, null, linkAnchor)
            }
        }
    });
    if ($("body.stage-2").length && pageHash) {
        if ($('a[href="' + pageHash + '"]').length) {
            $(window).scrollTop($('a[href="' + pageHash + '"]').offset().top - 150)
        }
        if ($(".mobile-tabcontent .accordion").length || $(".mobile-tabcontent .tab-anchor-inner").length) {
            var parentTabID;
            if ($(pageHash).is(".accordion")) {
                parentTabID = $(pageHash).closest(".mobile-tabcontent").attr("id");
                if (parentTabID) {
                    parentTabID = "#" + parentTabID;
                    $('[role="tablist"] a[href="' + parentTabID + '"]').trigger("click");
                    $(pageHash).addClass("active");
                    $(pageHash).attr("aria-expanded", "true");
                    $(pageHash).next().show();
                    console.log("scrollTop: " + $(pageHash).offset().top);
                    $(window).scrollTop($(pageHash).offset().top - 150)
                }
            }
            if ($(pageHash).is(".tab-anchor-inner")) {
                parentTabID = $(pageHash).closest(".mobile-tabcontent").attr("id");
                if (parentTabID) {
                    parentTabID = "#" + parentTabID;
                    $('[role="tablist"] a[href="' + parentTabID + '"]').trigger("click");
                    $(window).scrollTop($(pageHash).offset().top - 150)
                }
            }
        }
    }
    stage2NavExpandButtons()
}
function stage2NavExpandButtons() {
    var expandBtnText = "Expand";
    if ($("body").is("fr")) {
        expandBtnText = "Expand FR"
    }
    if ($(".stage2-main-nav").length && $(".stage2-main-nav .expand").length == 0) {
        $(".stage2-main-nav a").each(function() {
            if ($(this).parent().parent().find("ul").length) {
                var controlsID = $(this).parent().parent().find("ul").attr("id");
                if (controlsID) {
                    $(this).after('<button class="expand" tabindex="0" aria-controls="' + controlsID + '">' + expandBtnText + "</span></button>")
                } else {
                    $(this).after('<button class="expand" tabindex="0"><span class="visuallyhidden">' + expandBtnText + "</span></button>")
                }
            }
        })
    }
    $(".stage2-main-nav .expand").each(function() {
        if ($(this).parent().next().css("display") == "none") {
            $(this).parent().next().attr("aria-hidden", "true")
        } else {
            $(this).parent().next().attr("aria-hidden", "false")
        }
    });
    $(".stage2-main-nav .expand").unbind("click");
    $(".stage2-main-nav .expand").click(function() {
        $(this).addClass("active");
        $(this).parent().next().addClass("active");
        $(this).closest(".subnav").addClass("active");
        $(".subnav.active").prev().children(".expand").addClass("active");
        $(".stage2-main-nav .expand").not(".active").removeClass("expanded");
        $(".stage2-main-nav .main-nav-link-continer + ul").not(".active").hide();
        $(".stage2-main-nav .subnav").not(".active").hide();
        $(this).parent().next().toggle();
        if ($(this).parent().next().css("display") == "none") {
            $(this).parent().next().attr("aria-hidden", "true")
        } else {
            $(this).parent().next().attr("aria-hidden", "false")
        }
        $(this).toggleClass("expanded");
        $(".stage2-main-nav .expand").removeClass("active");
        $(this).parent().next().removeClass("active");
        $(".stage2-main-nav .subnav").removeClass("active")
    });
    $(".stage2-main-nav .expand").unbind("keyup");
    $(".stage2-main-nav .expand").keyup(function(e) {
        if (e.keyCode == "13") {
            e.preventDefault();
            $(this).trigger("click")
        }
    })
}
function stage2LineNumbers() {
    if ($(".lines span").length) {
        $(".lines span").each(function() {
            $(this).html('<span class="visuallyhidden">' + $(this).html() + "</span>")
        })
    }
}
function stage2StationImages() {
    if ($(".destination-large").length) {
        $(".destination-large .inner").each(function() {
            if ($(this).find(".overlay").length == 0) {
                $(this).html('<div class="overlay">' + $(this).html() + "</div>")
            }
        })
    }
    $(".row-destinations .destination-list a").click(function(event) {
        event.preventDefault();
        $(this).parent().parent().find(".destination-large .inner h2").html($(this).html());
        var imageURL = "url(" + $(this).attr("data-image") + ")";
        $(this).parent().parent().find(".destination-large .inner").css("background-image", imageURL)
    })
}
function stage2DesktopNav() {
    if ($(".stage2-header").length) {
        $(document).on("scroll", function(e) {
            if (document.documentElement.scrollTop > 80) {
                $("body").addClass("header-collapse")
            } else {
                $("body").removeClass("header-collapse")
            }
        })
    }
}
function stage2HeroSlider() {
    if ($(".hero-slider").length) {
        $(".hero-slider").each(function() {
            var sliderElement = $(this)
              , slideCount = 0
              , currentSlide = 0
              , slideHeight = 0;
            sliderElement.find(".slider-controls .total-slides").html(sliderElement.find(".slide").length);
            sliderElement.find(".slider-controls .slide-control.prev").click(function() {
                previousSlide(sliderElement)
            });
            sliderElement.find(".slider-controls .slide-control.next").click(function() {
                nextSlide(sliderElement)
            });
            sliderElement.find(".slider-controls").append('<nav class="slider-pagination"></nav>');
            sliderElement.find(".slide").each(function() {
                currentSlide++;
                if ($(this).is(".active")) {
                    sliderElement.find(".slider-controls .slider-pagination").append('<a href="#' + $(this).attr("id") + '" class="current">' + currentSlide + "</a>")
                } else {
                    sliderElement.find(".slider-controls .slider-pagination").append('<a href="#' + $(this).attr("id") + '">' + currentSlide + "</a>")
                }
                if ($(this).height() > slideHeight) {
                    slideHeight = $(this).height()
                }
            });
            sliderElement.css("height", slideHeight);
            $(".hero-slider .slide").matchHeight();
            sliderElement.find(".slider-controls .slider-pagination a").click(function(event) {
                event.preventDefault();
                $(this).parent().find("a").removeClass("current");
                $(this).addClass("current");
                setSlide(sliderElement, $(this).html())
            });
            sliderElement.find(".slider-controls .pause-button").click(function(event) {
                event.preventDefault();
                $(this).toggleClass("paused");
                if (heroSliderTimerPaused) {
                    heroSliderTimer = setInterval(function() {
                        $(".hero-slider .slide-control.next").trigger("click")
                    }, 3e3);
                    heroSliderTimerPaused = false
                } else {
                    window.clearInterval(heroSliderTimer);
                    heroSliderTimerPaused = true
                }
            });
            sliderElement.find(".slider-controls .slide-control, .slider-controls .slider-pagination a, .slider-controls .pause-button").keyup(function(event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    $(this).trigger("click")
                }
            })
        })
    }
    if ($(window).width() > 991) {
        heroSliderTimer = setInterval(function() {
            $(".hero-slider .slide-control.next").trigger("click")
        }, 12e3)
    } else {
        window.clearInterval(heroSliderTimer)
    }
}
function previousSlide(element) {
    var slideCount = element.find(".slide").length
      , currentSlide = 0
      , newSlide = 1;
    element.find(".slide").each(function() {
        currentSlide++;
        if ($(this).is(".active")) {
            if (currentSlide == 1) {
                newSlide = slideCount
            } else {
                newSlide = currentSlide - 1
            }
        }
    });
    element.find(".slide.active").removeClass("active");
    element.find(".slide:nth-child(" + newSlide + ")").addClass("active");
    element.find(".slider-controls .slide-number .current-slide").html(newSlide);
    element.find(".slider-controls .slider-pagination a").removeClass("current");
    element.find(".slider-controls .slider-pagination a:nth-child(" + newSlide + ")").addClass("current")
}
function nextSlide(element) {
    var slideCount = element.find(".slide").length
      , currentSlide = 0
      , newSlide = 1;
    element.find(".slide").each(function() {
        currentSlide++;
        if ($(this).is(".active")) {
            if (currentSlide == slideCount) {
                newSlide = 1
            } else {
                newSlide = currentSlide + 1
            }
        }
    });
    element.find(".slide.active").removeClass("active");
    element.find(".slide:nth-child(" + newSlide + ")").addClass("active");
    element.find(".slider-controls .slide-number .current-slide").html(newSlide);
    element.find(".slider-controls .slider-pagination a").removeClass("current");
    element.find(".slider-controls .slider-pagination a:nth-child(" + newSlide + ")").addClass("current")
}
function setSlide(element, newSlide) {
    element.find(".slide.active").removeClass("active");
    element.find(".slide:nth-child(" + newSlide + ")").addClass("active");
    element.find(".slider-controls .slide-number .current-slide").html(newSlide);
    element.find(".slider-controls .slider-pagination a").removeClass("current");
    element.find(".slider-controls .slider-pagination a:nth-child(" + newSlide + ")").addClass("current")
}
function stage2MobileSlider() {
    var element = $(".info-bubbles");
    if ($(window).width() < 992 && element.length && $(".info-bubbles .slider-canvas").length == 0) {
        if ($(".hero-slider").is(".mobile-slider-active")) {
            return
        }
        $(".hero-slider").addClass("mobile-slider-active");
        window.clearInterval(heroSliderTimer);
        $(".info-bubbles").each(function() {
            var element = $(this);
            var childMaxWidth = 0
              , totalWidth = 0
              , slideCount = 0
              , paginationContent = "";
            element.children().each(function() {
                slideCount++;
                totalWidth += $(this).width();
                $(this).addClass("mobile-slide");
                paginationContent += '<span class="paginate">' + slideCount + "</span>";
                if ($(this).width() > childMaxWidth) {
                    childMaxWidth = $(this).width()
                }
            });
            element.children().css("width", childMaxWidth + "px");
            element.css("width", childMaxWidth + "px");
            element.html('<div class="slider-canvas" style="width: ' + totalWidth + 'px;" data-current-slide="1">' + element.html() + "</div>");
            element.append('<span class="mobile-slider-nav previous">Previous</span>');
            element.append('<span class="mobile-slider-nav next">Next</span>');
            element.append('<div class="mobile-slider-pagination">' + paginationContent + "</div>");
            element.find(".mobile-slider-pagination .paginate:first-child").addClass("current");
            element.find(".mobile-slider-nav.next").click(function() {
                var element = $(this).closest(".info-bubbles");
                mobileNextSlide(element)
            });
            element.find(".mobile-slider-nav.previous").click(function() {
                var element = $(this).closest(".info-bubbles");
                mobilePreviousSlide(element)
            });
            element.find(".mobile-slider-pagination span").click(function() {
                var element = $(this).closest(".info-bubbles");
                element.find(".mobile-slider-pagination .paginate:first-child").removeClass("current");
                $(this).addClass("current");
                mobileSetSlide(element, $(this).html())
            })
        })
    } else if ($(".info-bubbles .slider-canvas").length) {
        $(".hero-slider").removeClass("mobile-slider-active");
        $(".info-bubbles .info-bubble").removeClass("mobile-slide").css("width", "auto");
        $(".info-bubbles").css("width", "100%");
        $(".info-bubbles").css("margin-top", "20px");
        $(".info-bubbles .slider-canvas").each(function() {
            $(this).parent().html($(this).html())
        })
    }
}
function mobileSetSlide(element, position) {
    var targetSlide = element.find(".mobile-slide:nth-child(" + position + ")");
    if (targetSlide.length) {
        var targetLeft = targetSlide.width() * (position - 1) * -1;
        element.find(".slider-canvas").data("current-slide", position).css("margin-left", targetLeft)
    }
}
function mobileNextSlide(element) {
    var slideCount = element.find(".mobile-slide").length
      , currentSlide = 0
      , newSlide = 1;
    currentSlide = element.find(".slider-canvas").data("current-slide");
    if (currentSlide == slideCount) {
        newSlide = 1
    } else {
        newSlide = currentSlide + 1
    }
    mobileSetSlide(element, newSlide)
}
function mobilePreviousSlide(element) {
    var slideCount = element.find(".mobile-slide").length
      , currentSlide = 0
      , newSlide = 1;
    currentSlide = element.find(".slider-canvas").data("current-slide");
    if (currentSlide == 1) {
        newSlide = slideCount
    } else {
        newSlide = currentSlide - 1
    }
    mobileSetSlide(element, newSlide)
}
function stage2SearchAnimation() {
    $("#searchBtnBar").click(function() {
        if ($('#desktop-search-form input[type="text"]').width() < 1) {
            $('#desktop-search-form input[type="text"]').css("visibility", "visible");
            $('#desktop-search-form input[type="text"]').css("background-color", "rgba(57, 56, 63, 0.05)");
            $("#desktop-search-form").fadeIn().animate({
                opacity: "0.8"
            }, "3000");
            $('#desktop-search-form input[type="text"]').animate({
                width: "260px",
                opacity: "0.8"
            }, "3000");
            $('#desktop-search-form input[type="text"]').focus()
        } else {
            $("#desktop-search-form").fadeOut().animate({
                opacity: "0.8"
            }, "3000");
            $('#desktop-search-form input[type="text"]').animate({
                width: "0px",
                opacity: "0.8"
            }, "3000")
        }
    })
}
function stage2SearchClear() {
    $("#stage2-search-clear-mobile").on("click", function(event) {
        $(".searchField").val("");
        $("#stage2-search-clear-mobile").css("display", "none")
    });
    $("#stage2-search-clear-desktop").on("click", function(event) {
        $(".searchField").val("");
        $("#stage2-search-clear-desktop").css("display", "none")
    });
    $('#stage2-search-mobile input[type="text"]').keyup(function() {
        $("#stage2-search-clear-mobile").css("display", "block");
        if ($('#stage2-search-mobile input[type="text"]').val() === "") {
            $("#stage2-search-clear-mobile").css("display", "none")
        }
    });
    $('#desktop-search-bar input[type="text"]').keyup(function() {
        $("#stage2-search-clear-desktop").css("display", "block");
        if ($('#desktop-search-bar input[type="text"]').val() === "") {
            $("#stage2-search-clear-desktop").css("display", "none")
        }
    })
}
function stage2SearchSubmit() {
    var inputMobile = document.getElementById("stage2-search-mobile");
    var inputDesktop = document.getElementById("desktop-search-bar");
    if (inputMobile) {
        inputMobile.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("stage2-mobile-submit").click()
            }
        })
    }
    if (inputDesktop) {
        inputDesktop.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("stage2-desktop-submit").click()
            }
        })
    }
}
function stage2HeroSliderHeight() {
    if ($(".hero-slider").length) {
        $(".hero-slider").each(function() {
            var sliderElement = $(this)
              , slideCount = 0
              , currentSlide = 0
              , slideHeight = 0;
            sliderElement.find(".slide").each(function() {
                if ($(this).height() > slideHeight) {
                    slideHeight = $(this).height()
                }
            });
            sliderElement.css("height", slideHeight)
        })
    }
}
function stage2TimelineSlickDates() {
    if ($(".stage2-timeline-carousel")) {
        var transcribeValue1 = $("#stage2-timeline-transcribe-data1").data("transcribe-value");
        var transcribeValue2 = $("#stage2-timeline-transcribe-data2").data("transcribe-value");
        var transcribeValue3 = $("#stage2-timeline-transcribe-data3").data("transcribe-value");
        var slickDates = document.querySelectorAll(".stage2-timeline-carousel .slick-dots li button");
        if (slickDates.length) {
            if (slickDates[0]) {
                slickDates[0].innerHTML = transcribeValue1;
                slickDates[0].setAttribute("aria-label", transcribeValue1);
                slickDates[0].setAttribute("id", "slide-selector-control-1");
                slickDates[0].setAttribute("aria-controls", "timeline-panel-1")
            }
            if (slickDates[1]) {
                slickDates[1].innerHTML = transcribeValue2;
                slickDates[1].setAttribute("aria-label", transcribeValue2);
                slickDates[1].setAttribute("id", "slide-selector-control-2");
                slickDates[1].setAttribute("aria-controls", "timeline-panel-2")
            }
            if (slickDates[2]) {
                slickDates[2].innerHTML = transcribeValue3;
                slickDates[2].setAttribute("aria-label", transcribeValue3);
                slickDates[2].setAttribute("id", "slide-selector-control-3");
                slickDates[2].setAttribute("aria-controls", "timeline-panel-3")
            }
            slickDates[0].style.background = "#ffffff";
            slickDates[0].style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
            slickDates[0].style.borderRadius = "8px";
            slickDates[0].style.border = "transparent";
            slickDates[0].style.color = "#39383f"
        }
    }
}
function stage2HomeTimeline() {
    if ($(".stage2-timeline-carousel")) {
        if ($(".stage2-timeline-carousel ul.slick-dots")) {
            $("<article class='top-line-circle-container dates-line-map'><section></section><div class='carousel-top-line carousel-top-line--one'></div><section></section><div class='carousel-top-line carousel-top-line--two'></div><section></section></article>").appendTo(".stage2-timeline-carousel .timeline-carousel__item-wrapper");
            $(".stage2-timeline-carousel ul.slick-dots").addClass("dates-line-map");
            $(".stage2-timeline-carousel ul.slick-dots").attr("role", "group");
            $(".stage2-timeline-carousel ul.slick-dots").attr("aria-label", "Choose slide to display.");
            $("<div></div>").addClass("line-circle line-circle--one").appendTo(".stage2-timeline-carousel .timeline-carousel__item");
            $("<div></div>").addClass("line-circle line-circle--two").appendTo(".stage2-timeline-carousel .timeline-carousel__item");
            $("<div></div>").addClass("line-circle line-circle--three").appendTo(".stage2-timeline-carousel .timeline-carousel__item");
            $(".stage2-timeline-carousel .dates-line-container").append($(".stage2-timeline-carousel .slick-dots, .stage2-timeline-carousel .top-line-circle-container"));
            $("<section class='top-line-circle'></section>").appendTo(".stage2-timeline-carousel .slick-dots li");
            $(".top-line-circle").each(function(i) {
                $(this).addClass("top-line-circle--" + i++)
            })
        }
        $(".dates-line-map").wrapAll("<section class='dates-line-map-container' />")
    }
}
function stage2HomeTimelineHoverEffects() {
    var hasTouchScreen = false;
    if ("maxTouchPoints"in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0
    } else if ("msMaxTouchPoints"in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0
    } else {
        var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
            hasTouchScreen = !!mQ.matches
        } else if ("orientation"in window) {
            hasTouchScreen = true
        } else {
            var UA = navigator.userAgent;
            hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        }
    }
    if (hasTouchScreen === false || $(window).width() > 992) {
        var slickDates = document.querySelectorAll(".stage2-timeline-carousel .slick-dots li button");
        if ($(".stage2-timeline-carousel")) {
            if ($(slickDates[0]).hasClass("timeline-active") || $(slickDates[1]).hasClass("timeline-active") || $(slickDates[2]).hasClass("timeline-active")) {
                return 0
            } else {
                $(".stage2-timeline-carousel .top-line-circle--0").mouseenter(function() {
                    $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-hover");
                    $(slickDates[0]).addClass("timeline-date-hover")
                });
                $(".stage2-timeline-carousel .top-line-circle--0").mouseleave(function() {
                    $(slickDates[0]).removeClass("timeline-date-hover");
                    $(".stage2-timeline-carousel .top-line-circle--0").removeClass("timeline-circle-hover")
                });
                $(".stage2-timeline-carousel .top-line-circle--1").mouseenter(function() {
                    $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-hover");
                    $(".stage2-timeline-carousel .top-line-circle--1").addClass("timeline-circle-hover");
                    $(slickDates[0]).addClass("timeline-date-hover");
                    $(slickDates[1]).addClass("timeline-date-hover");
                    $(".stage2-timeline-carousel .carousel-top-line--one").addClass("timeline-line-one-hover")
                });
                $(".stage2-timeline-carousel .top-line-circle--1").mouseleave(function() {
                    $(slickDates[1]).removeClass("timeline-date-hover");
                    $(slickDates[0]).removeClass("timeline-date-hover");
                    $(".stage2-timeline-carousel .top-line-circle--0").removeClass("timeline-circle-hover");
                    $(".stage2-timeline-carousel .carousel-top-line--one").removeClass("timeline-line-one-hover");
                    $(".stage2-timeline-carousel .top-line-circle--1").removeClass("timeline-circle-hover")
                });
                $(".stage2-timeline-carousel .top-line-circle--2").mouseenter(function() {
                    $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-hover");
                    $(".stage2-timeline-carousel .top-line-circle--1").addClass("timeline-circle-hover");
                    $(".stage2-timeline-carousel .top-line-circle--2").addClass("timeline-circle-hover");
                    $(slickDates[0]).addClass("timeline-date-hover");
                    $(slickDates[1]).addClass("timeline-date-hover");
                    $(slickDates[2]).addClass("timeline-date-hover");
                    $(".stage2-timeline-carousel .carousel-top-line--one").addClass("timeline-line-one-hover");
                    $(".stage2-timeline-carousel .carousel-top-line--two").addClass("timeline-line-two-hover")
                });
                $(".stage2-timeline-carousel .top-line-circle--2").mouseleave(function() {
                    $(slickDates[0]).removeClass("timeline-date-hover");
                    $(slickDates[1]).removeClass("timeline-date-hover");
                    $(slickDates[2]).removeClass("timeline-date-hover");
                    $(".stage2-timeline-carousel .top-line-circle--0").removeClass("timeline-circle-hover");
                    $(".stage2-timeline-carousel .carousel-top-line--one").removeClass("timeline-line-one-hover");
                    $(".stage2-timeline-carousel .top-line-circle--1").removeClass("timeline-circle-hover");
                    $(".stage2-timeline-carousel .carousel-top-line--two").removeClass("timeline-line-two-hover");
                    $(".stage2-timeline-carousel .top-line-circle--2").removeClass("timeline-circle-hover")
                })
            }
            $(slickDates[1]).mouseenter(function() {
                $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-hover");
                $(".stage2-timeline-carousel .top-line-circle--1").addClass("timeline-circle-hover");
                $(slickDates[0]).addClass("timeline-date-hover");
                $(slickDates[1]).addClass("timeline-date-hover");
                $(".stage2-timeline-carousel .carousel-top-line--one").addClass("timeline-line-one-hover")
            });
            $(slickDates[1]).mouseleave(function() {
                $(slickDates[1]).removeClass("timeline-date-hover");
                $(slickDates[0]).removeClass("timeline-date-hover");
                $(".stage2-timeline-carousel .top-line-circle--0").removeClass("timeline-circle-hover");
                $(".stage2-timeline-carousel .carousel-top-line--one").removeClass("timeline-line-one-hover");
                $(".stage2-timeline-carousel .top-line-circle--1").removeClass("timeline-circle-hover")
            });
            $(slickDates[2]).mouseenter(function() {
                $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-hover");
                $(".stage2-timeline-carousel .top-line-circle--1").addClass("timeline-circle-hover");
                $(".stage2-timeline-carousel .top-line-circle--2").addClass("timeline-circle-hover");
                $(slickDates[0]).addClass("timeline-date-hover");
                $(slickDates[1]).addClass("timeline-date-hover");
                $(slickDates[2]).addClass("timeline-date-hover");
                $(".stage2-timeline-carousel .carousel-top-line--one").addClass("timeline-line-one-hover");
                $(".stage2-timeline-carousel .carousel-top-line--two").addClass("timeline-line-two-hover")
            });
            $(slickDates[2]).mouseleave(function() {
                $(slickDates[0]).removeClass("timeline-date-hover");
                $(slickDates[1]).removeClass("timeline-date-hover");
                $(slickDates[2]).removeClass("timeline-date-hover");
                $(".stage2-timeline-carousel .top-line-circle--0").removeClass("timeline-circle-hover");
                $(".stage2-timeline-carousel .carousel-top-line--one").removeClass("timeline-line-one-hover");
                $(".stage2-timeline-carousel .top-line-circle--1").removeClass("timeline-circle-hover");
                $(".stage2-timeline-carousel .carousel-top-line--two").removeClass("timeline-line-two-hover");
                $(".stage2-timeline-carousel .top-line-circle--2").removeClass("timeline-circle-hover")
            })
        }
    }
}
function stage2HomeTimelineClickEffects() {
    var slickDates = document.querySelectorAll(".stage2-timeline-carousel .slick-dots li button");
    if ($(".stage2-timeline-carousel").length) {
        $(slickDates[0]).click(function() {
            if ($(slickDates[0]).hasClass("timeline-active"))
                ;{
                $(slickDates[0]).removeClass("timeline-active");
                $(slickDates[1]).removeClass("timeline-active");
                $(slickDates[2]).removeClass("timeline-active")
            }
            $(slickDates[0]).toggleClass("timeline-active");
            $(slickDates[1]).removeClass("timeline-active");
            $(slickDates[2]).removeClass("timeline-active");
            $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-hover");
            $(slickDates[0]).addClass("timeline-date-hover");
            $(".stage2-timeline-carousel .top-line-circle--1").removeClass("timeline-circle-active");
            $(".stage2-timeline-carousel .carousel-top-line--one").removeClass("timeline-line-one-active");
            $(".stage2-timeline-carousel .top-line-circle--2").removeClass("timeline-circle-active");
            $(".stage2-timeline-carousel .carousel-top-line--two").removeClass("timeline-line-two-active")
        });
        $(slickDates[1]).click(function() {
            if ($(slickDates[1]).hasClass("timeline-active"))
                ;{
                $(slickDates[0]).removeClass("timeline-active");
                $(slickDates[1]).removeClass("timeline-active");
                $(slickDates[2]).removeClass("timeline-active")
            }
            $(slickDates[1]).toggleClass("timeline-active");
            $(slickDates[0]).addClass("timeline-active");
            $(slickDates[2]).removeClass("timeline-active");
            $(slickDates[2]).addClass("timeline-inactive");
            $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-active");
            $(".stage2-timeline-carousel .top-line-circle--1").addClass("timeline-circle-active");
            $(slickDates[0]).addClass("timeline-date-active");
            $(slickDates[1]).addClass("timeline-date-active");
            $(".stage2-timeline-carousel .carousel-top-line--one").addClass("timeline-line-one-active");
            $(slickDates[1]).removeClass("timeline-date-hover");
            $(".stage2-timeline-carousel .top-line-circle--2").removeClass("timeline-circle-active");
            $(".stage2-timeline-carousel .carousel-top-line--two").removeClass("timeline-line-two-active")
        });
        $(slickDates[2]).click(function() {
            if ($(slickDates[2]).hasClass("timeline-active"))
                ;{
                $(slickDates[0]).removeClass("timeline-active");
                $(slickDates[1]).removeClass("timeline-active");
                $(slickDates[2]).removeClass("timeline-active")
            }
            $(slickDates[2]).toggleClass("timeline-active");
            $(slickDates[1]).addClass("timeline-active");
            $(slickDates[0]).addClass("timeline-active");
            $(".stage2-timeline-carousel .top-line-circle--0").addClass("timeline-circle-active");
            $(".stage2-timeline-carousel .top-line-circle--1").addClass("timeline-circle-active");
            $(".stage2-timeline-carousel .top-line-circle--2").addClass("timeline-circle-active");
            $(slickDates[0]).addClass("timeline-date-active");
            $(slickDates[1]).addClass("timeline-date-active");
            $(slickDates[2]).addClass("timeline-date-active");
            $(".stage2-timeline-carousel .carousel-top-line--one").addClass("timeline-line-one-active");
            $(".stage2-timeline-carousel .carousel-top-line--two").addClass("timeline-line-two-active")
        })
    }
}
function stage2HomeTimelineCircleClickEffects() {
    var slickDates = document.querySelectorAll(".stage2-timeline-carousel .slick-dots li button");
    $(".stage2-timeline-carousel .top-line-circle--0").on("click", function() {
        $(slickDates[0]).trigger("click")
    });
    $(".stage2-timeline-carousel .top-line-circle--1").on("click", function() {
        $(slickDates[1]).trigger("click")
    });
    $(".stage2-timeline-carousel .top-line-circle--2").on("click", function() {
        $(slickDates[2]).trigger("click")
    })
}
function stage2FlipCards() {
    var flipCardIndex = 0;
    $(".flip-card .flip-card-back").each(function() {
        flipCardIndex++;
        $(this).attr("id", "flip-card-back-" + flipCardIndex)
    });
    $(".flip-card .flip-card-toggle").each(function() {
        $(this).attr("href", $(this).parent().parent().parent().find(".flip-card-back").attr("id"))
    });
    $(".flip-card .flip-card-toggle").click(function(e) {
        e.preventDefault();
        $(this).closest(".flip-card").toggleClass("flipped")
    })
}
function stage2FlipCardsBack() {
    $(".flip-card .flip-card-back").click(function() {
        $(this).closest(".flip-card").toggleClass("flipped")
    })
}
$(document).ready(function() {
    $.js("timeline-carousel").on("afterChange", function(event, slick, currentSlide) {
        var slickDates = document.querySelectorAll(".stage2-timeline-carousel .slick-dots li button");
        if (currentSlide === 0) {
            $(slickDates[0]).trigger("click")
        }
        if (currentSlide === 1) {
            $(slickDates[1]).trigger("click")
        }
        if (currentSlide === 2) {
            $(slickDates[2]).trigger("click")
        }
    });
    $.js("timeline-carousel").on("edge", function(event, slick, direction) {
        if (direction === "right") {
            $.js("timeline-carousel").slick("slickGoTo", 0)
        }
        if (direction === "left") {
            var lastSlide = slick.$slides.length - 1;
            $.js("timeline-carousel").slick("slickGoTo", lastSlide)
        }
    });
    $.js = function(el) {
        return $("[data-js=" + el + "]")
    }
    ;
    function timelineCarousel() {
        if ($.js("timeline-carousel").length) {
            $.js("timeline-carousel").slick({
                accessibility: false,
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                appendDots: ".stage2-timeline-carousel .heading-container",
                waitForAnimate: true,
                touchThreshold: 100,
                swipeToSlide: true,
                dragging: true,
                edgeFriction: 0
            })
        }
    }
    timelineCarousel();
    stage2HomeTimeline();
    stage2HomeTimelineClickEffects();
    stage2HomeTimelineHoverEffects();
    stage2HomeTimelineCircleClickEffects();
    stage2TimelineSlickDates();
    function updateTabIndexForActiveSlide() {
        var activeSlide = $.js("timeline-carousel").find(".slick-active");
        var allSlides = $.js("timeline-carousel").find(".timeline-carousel__item");
        var buttonInActiveSlide = activeSlide.find(".carousel-text-container");
        var lineButtonInActiveSlide = document.querySelectorAll(".card-buttons");
        allSlides.each(function() {
            $(this).attr("tabindex", "-1")
        });
        lineButtonInActiveSlide.forEach(function(element) {
            element.setAttribute("tabindex", "-1")
        });
        $.js("timeline-carousel").find(".carousel-text-container").removeAttr("tabindex");
        activeSlide.removeAttr("tabindex");
        buttonInActiveSlide.attr("tabindex", "0");
        activeSlide.find(".card-buttons").each(function() {
            $(this).attr("tabindex", "0")
        })
    }
    updateTabIndexForActiveSlide();
    $.js("timeline-carousel").on("afterChange", function(event, slick, currentSlide) {
        updateTabIndexForActiveSlide()
    });
    function setAriaCurrentForSlickActiveButton() {
        var allYearNavs = document.querySelectorAll(".stage2-timeline-carousel .slick-dots li button");
        var activeSlide = $.js("timeline-carousel").find(".slick-active");
        allYearNavs.forEach(function(element) {
            if (element.classList.contains("slick-active")) {
                element.setAttribute("aria-current", "true")
            } else {
                element.removeAttribute("aria-current")
            }
        });
        var activeSlideIndex = Array.from(activeSlide.parent().children()).indexOf(activeSlide[0]);
        var activeButton = allYearNavs[activeSlideIndex];
        var liveRegionText = "Slide " + (activeSlideIndex + 1) + " of " + allYearNavs.length;
        var liveRegion = document.getElementById("live-region");
        liveRegion.textContent = liveRegionText
    }
    var timelineNavbuttons = document.querySelectorAll(".stage2-timeline-carousel .slick-dots li button");
    timelineNavbuttons.forEach(function(button) {
        button.addEventListener("click", function() {
            this.setAttribute("aria-disabled", "true");
            this.classList.add("slick-active");
            timelineNavbuttons.forEach(function(btn) {
                if (btn !== button) {
                    btn.removeAttribute("aria-disabled");
                    btn.classList.remove("slick-active")
                }
            });
            setAriaCurrentForSlickActiveButton()
        })
    });
    $.js = function(el) {
        return $("[data-js=" + el + "]")
    }
    ;
    function carouselStation() {
        $.js("station-carousel").slick({
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            waitForAnimate: true,
            responsive: [{
                breakpoint: 1205,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })
    }
    carouselStation();
    var filtered = false;
    $("#filter-button-line1").on("click", function() {
        $.js("station-carousel").slick("slickUnfilter");
        if (filtered === false) {
            $.js("station-carousel").slick("slickFilter", ".station-card-line1")
        }
    });
    $("#filter-button-line2").on("click", function() {
        $.js("station-carousel").slick("slickUnfilter");
        if (filtered === false) {
            $.js("station-carousel").slick("slickFilter", ".station-card-line2")
        }
    });
    $("#filter-button-line3").on("click", function() {
        $.js("station-carousel").slick("slickUnfilter");
        if (filtered === false) {
            $.js("station-carousel").slick("slickFilter", ".station-card-line3")
        }
    });
    $("#filter-button-line4").on("click", function() {
        $.js("station-carousel").slick("slickUnfilter");
        if (filtered === false) {
            $.js("station-carousel").slick("slickFilter", ".station-card-line4")
        }
    });
    $("#filter-button-lineall").on("click", function() {
        $.js("station-carousel").slick("slickUnfilter");
        if (filtered === false) {
            $.js("station-carousel").slick("slickFilter", ".station-card-lineall")
        }
    });
    $.js = function(el) {
        return $("[data-js=" + el + "]")
    }
    ;
    function carouselHomeNews() {
        $.js("gallery-carousel").slick({
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: false,
            speed: 1100,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [{
                breakpoint: 1264,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })
    }
    carouselHomeNews();
    $.js = function(el) {
        return $("[data-js=" + el + "]")
    }
    ;
    function carouselNewsPage() {
        $.js("news-gallery-carousel").slick({
            infinite: false,
            arrows: false,
            dots: true,
            autoplay: false,
            speed: 1100,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        $(".station-navigation-list-buttons .navigation-buttons-section div").unbind("keyup");
        $(".station-navigation-list-buttons .navigation-buttons-section div").keyup(function(event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                $(this).click()
            }
        })
    }
    carouselNewsPage();
    $.js = function(el) {
        return $("[data-js=" + el + "]")
    }
    ;
    function imageCarousel() {
        if ($(".navigation-buttons-slider").length) {
            $(".navigation-buttons-slider").attr("tabindex", "0");
            $(".navigation-buttons-slider").each(function() {
                $(this).attr("aria-label", $(this).attr("title"))
            });
            $(".navigation-buttons-slider").keyup(function(event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    $(this).trigger("click")
                }
            })
        }
        if ($.js("image-gallery-carousel").length) {
            $.js("image-gallery-carousel").slick({
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: false,
                speed: 500,
                waitForAnimate: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }]
            })
        }
        if ($.js("image-gallery-carousel-2").length) {
            $.js("image-gallery-carousel-2").slick({
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: false,
                speed: 500,
                waitForAnimate: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }]
            })
        }
        if ($.js("image-gallery-carousel-3").length) {
            $.js("image-gallery-carousel-3").slick({
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: false,
                speed: 500,
                waitForAnimate: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }]
            })
        }
        if ($.js("image-gallery-carousel-main").length) {
            $.js("image-gallery-carousel-main").slick({
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: false,
                speed: 500,
                waitForAnimate: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }]
            })
        }
        if ($.js("image-gallery-carousel-main-2").length) {
            $.js("image-gallery-carousel-main-2").slick({
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: false,
                speed: 500,
                waitForAnimate: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }]
            })
        }
        if ($.js("image-gallery-carousel-main-3").length) {
            $.js("image-gallery-carousel-main-3").slick({
                infinite: false,
                arrows: false,
                dots: true,
                autoplay: false,
                speed: 500,
                waitForAnimate: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: false,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false
                    }
                }]
            })
        }
    }
    $(".photo-carousel-container-nav .navigation-buttons-slider.prev").click(function() {
        $(this).closest(".container-photo-gallery-header").find(".image-gallery-carousel").slick("slickPrev")
    });
    $(".photo-carousel-container-nav .navigation-buttons-slider.next").click(function() {
        $(this).closest(".container-photo-gallery-header").find(".image-gallery-carousel").slick("slickNext")
    });
    imageCarousel();
    if ($("nav.stage2-top-nav-container")) {
        if ($('#desktop-search-form input[type="text"]').width() < 1) {
            $("nav.stage2-top-nav-container").css("position", "relative")
        }
    }
    $(".border-box").matchHeight();
    if ($(".en ul.stage2-breadcrumbs").length > 0) {
        $(".en ul.stage2-breadcrumbs li:nth-child(2) a").text("Home");
        $("<p>></p>").addClass("crumb-chevron").appendTo(".en ul.stage2-breadcrumbs li")
    }
    if ($(".fr ul.stage2-breadcrumbs").length > 0) {
        $(".fr ul.stage2-breadcrumbs li:nth-child(2) a").text("Accueil");
        $("<p>></p>").addClass("crumb-chevron").appendTo(".fr ul.stage2-breadcrumbs li")
    }
    if ($("ul.breadcrumbs").length > 0) {
        $("ul.breadcrumbs").parent().attr("role", "navigation");
        $("ul.breadcrumbs").parent().attr("aria-label", "Breadcrumb");
        $("ul.breadcrumbs > li.last").attr("aria-current", "page")
    }
    $("img").each(function() {
        if (!$(this).attr("alt") || $(this).attr("alt") == "") {
            $(this).attr("alt", "")
        }
    });
    $(".accordion-container .accordion, .faq-accordion .accordion").each(function() {
        $(this).attr("tabindex", 0);
        $(this).keyup(function(event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();
                $(this).click()
            }
        })
    });
    logo_train()
});
function clearFilters() {
    var elem = document.querySelectorAll(".devices");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = ""
    }
    $("input[type=checkbox]").prop("checked", false)
}
