var DomainGfx = (function(t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var n = {};
  return (
    (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ''),
    e((e.s = 49))
  );
})([
  function(t, e) {
    var n = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
    'number' == typeof __g && (__g = n);
  },
  function(t, e, n) {
    var r = n(22)('wks'),
      i = n(12),
      o = n(0).Symbol,
      a = 'function' == typeof o;
    (t.exports = function(t) {
      return r[t] || (r[t] = (a && o[t]) || (a ? o : i)('Symbol.' + t));
    }).store = r;
  },
  function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  },
  function(t, e, n) {
    t.exports = !n(11)(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7;
          },
        }).a
      );
    });
  },
  function(t, e, n) {
    var r = n(7),
      i = n(31),
      o = n(20),
      a = Object.defineProperty;
    e.f = n(3)
      ? Object.defineProperty
      : function(t, e, n) {
          if ((r(t), (e = o(e, !0)), r(n), i))
            try {
              return a(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported!');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function(t, e, n) {
    var r = n(4),
      i = n(16);
    t.exports = n(3)
      ? function(t, e, n) {
          return r.f(t, e, i(1, n));
        }
      : function(t, e, n) {
          return (t[e] = n), t;
        };
  },
  function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
      if (!r(t)) throw TypeError(t + ' is not an object!');
      return t;
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(47),
      i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      o =
        'object' == ('undefined' == typeof self ? 'undefined' : i(self)) &&
        self &&
        self.Object === Object &&
        self,
      a = r.a || o || Function('return this')();
    e.a = a;
  },
  function(t, e, n) {
    var r = n(0),
      i = n(6),
      o = n(2),
      a = n(12)('src'),
      l = Function.toString,
      s = ('' + l).split('toString');
    (n(15).inspectSource = function(t) {
      return l.call(t);
    }),
      (t.exports = function(t, e, n, l) {
        var u = 'function' == typeof n;
        u && (o(n, 'name') || i(n, 'name', e)),
          t[e] !== n &&
            (u && (o(n, a) || i(n, a, t[e] ? '' + t[e] : s.join(String(e)))),
            t === r
              ? (t[e] = n)
              : l
                ? t[e] ? (t[e] = n) : i(t, e, n)
                : (delete t[e], i(t, e, n)));
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && this[a]) || l.call(this);
      });
  },
  function(t, e, n) {
    var r = n(54),
      i = n(35);
    t.exports = function(t) {
      return r(i(t));
    };
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function(t) {
      return 'Symbol('.concat(
        void 0 === t ? '' : t,
        ')_',
        (++n + r).toString(36)
      );
    };
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, n) {
    var r = n(0),
      i = n(15),
      o = n(6),
      a = n(9),
      l = n(17),
      s = function(t, e, n) {
        var u,
          c,
          f,
          d,
          h = t & s.F,
          p = t & s.G,
          v = t & s.S,
          g = t & s.P,
          m = t & s.B,
          y = p ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
          b = p ? i : i[e] || (i[e] = {}),
          w = b.prototype || (b.prototype = {});
        p && (n = e);
        for (u in n)
          (f = ((c = !h && y && void 0 !== y[u]) ? y : n)[u]),
            (d =
              m && c
                ? l(f, r)
                : g && 'function' == typeof f ? l(Function.call, f) : f),
            y && a(y, u, f, t & s.U),
            b[u] != f && o(b, u, d),
            g && w[u] != f && (w[u] = f);
      };
    (r.core = i),
      (s.F = 1),
      (s.G = 2),
      (s.S = 4),
      (s.P = 8),
      (s.B = 16),
      (s.W = 32),
      (s.U = 64),
      (s.R = 128),
      (t.exports = s);
  },
  function(t, e) {
    var n = (t.exports = { version: '2.5.1' });
    'number' == typeof __e && (__e = n);
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function(t, e, n) {
    var r = n(51);
    t.exports = function(t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function(n, r, i) {
            return t.call(e, n, r, i);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e, n) {
    var r = n(4).f,
      i = n(2),
      o = n(1)('toStringTag');
    t.exports = function(t, e, n) {
      t &&
        !i((t = n ? t : t.prototype), o) &&
        r(t, o, { configurable: !0, value: e });
    };
  },
  function(t, e, n) {
    var r = n(34),
      i = n(26);
    t.exports =
      Object.keys ||
      function(t) {
        return r(t, i);
      };
  },
  function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
      if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e, n) {
    var r = n(12)('meta'),
      i = n(5),
      o = n(2),
      a = n(4).f,
      l = 0,
      s =
        Object.isExtensible ||
        function() {
          return !0;
        },
      u = !n(11)(function() {
        return s(Object.preventExtensions({}));
      }),
      c = function(t) {
        a(t, r, { value: { i: 'O' + ++l, w: {} } });
      },
      f = (t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(t, e) {
          if (!i(t))
            return 'symbol' == typeof t
              ? t
              : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, r)) {
            if (!s(t)) return 'F';
            if (!e) return 'E';
            c(t);
          }
          return t[r].i;
        },
        getWeak: function(t, e) {
          if (!o(t, r)) {
            if (!s(t)) return !0;
            if (!e) return !1;
            c(t);
          }
          return t[r].w;
        },
        onFreeze: function(t) {
          return u && f.NEED && s(t) && !o(t, r) && c(t), t;
        },
      });
  },
  function(t, e, n) {
    var r = n(0),
      i = r['__core-js_shared__'] || (r['__core-js_shared__'] = {});
    t.exports = function(t) {
      return i[t] || (i[t] = {});
    };
  },
  function(t, e) {
    t.exports = !1;
  },
  function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  },
  function(t, e, n) {
    var r = n(22)('keys'),
      i = n(12);
    t.exports = function(t) {
      return r[t] || (r[t] = i(t));
    };
  },
  function(t, e) {
    t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    );
  },
  function(t, e) {
    e.f = {}.propertyIsEnumerable;
  },
  function(t, e, n) {
    var r = n(7),
      i = n(58),
      o = n(26),
      a = n(25)('IE_PROTO'),
      l = function() {},
      s = function() {
        var t,
          e = n(32)('iframe'),
          r = o.length;
        for (
          e.style.display = 'none',
            n(59).appendChild(e),
            e.src = 'javascript:',
            (t = e.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            s = t.F;
          r--;

        )
          delete s.prototype[o[r]];
        return s();
      };
    t.exports =
      Object.create ||
      function(t, e) {
        var n;
        return (
          null !== t
            ? ((l.prototype = r(t)),
              (n = new l()),
              (l.prototype = null),
              (n[a] = t))
            : (n = s()),
          void 0 === e ? n : i(n, e)
        );
      };
  },
  function(t, e, n) {
    var r,
      i,
      o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            };
    !(function(a, l) {
      'object' === o(e) && void 0 !== t
        ? (t.exports = l())
        : ((r = l),
          void 0 !== (i = 'function' == typeof r ? r.call(e, n, e, t) : r) &&
            (t.exports = i));
    })(0, function() {
      'use strict';
      function t(t) {
        return new RegExp('(^|\\s)' + t + '(?:$|\\s)\\s*');
      }
      function e(t) {
        for (var e = t.childNodes.length; e > 0; --e)
          t.removeChild(t.firstChild);
        return t;
      }
      function n(t, n) {
        return e(t).appendChild(n);
      }
      function r(t, e, n, r) {
        var i = document.createElement(t);
        if (
          (n && (i.className = n),
          r && (i.style.cssText = r),
          'string' == typeof e)
        )
          i.appendChild(document.createTextNode(e));
        else if (e) for (var o = 0; o < e.length; ++o) i.appendChild(e[o]);
        return i;
      }
      function i(t, e, n, i) {
        var o = r(t, e, n, i);
        return o.setAttribute('role', 'presentation'), o;
      }
      function a(t, e) {
        if ((3 == e.nodeType && (e = e.parentNode), t.contains))
          return t.contains(e);
        do {
          if ((11 == e.nodeType && (e = e.host), e == t)) return !0;
        } while ((e = e.parentNode));
      }
      function l() {
        var t;
        try {
          t = document.activeElement;
        } catch (e) {
          t = document.body || null;
        }
        for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
          t = t.shadowRoot.activeElement;
        return t;
      }
      function s(e, n) {
        var r = e.className;
        t(n).test(r) || (e.className += (r ? ' ' : '') + n);
      }
      function u(e, n) {
        for (var r = e.split(' '), i = 0; i < r.length; i++)
          r[i] && !t(r[i]).test(n) && (n += ' ' + r[i]);
        return n;
      }
      function c(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function() {
          return t.apply(null, e);
        };
      }
      function f(t, e, n) {
        e || (e = {});
        for (var r in t)
          !t.hasOwnProperty(r) ||
            (!1 === n && e.hasOwnProperty(r)) ||
            (e[r] = t[r]);
        return e;
      }
      function d(t, e, n, r, i) {
        null == e && -1 == (e = t.search(/[^\s\u00a0]/)) && (e = t.length);
        for (var o = r || 0, a = i || 0; ; ) {
          var l = t.indexOf('\t', o);
          if (l < 0 || l >= e) return a + (e - o);
          (a += l - o), (a += n - a % n), (o = l + 1);
        }
      }
      function h(t, e) {
        for (var n = 0; n < t.length; ++n) if (t[n] == e) return n;
        return -1;
      }
      function p(t, e, n) {
        for (var r = 0, i = 0; ; ) {
          var o = t.indexOf('\t', r);
          -1 == o && (o = t.length);
          var a = o - r;
          if (o == t.length || i + a >= e) return r + Math.min(a, e - i);
          if (((i += o - r), (i += n - i % n), (r = o + 1), i >= e)) return r;
        }
      }
      function v(t) {
        for (; wo.length <= t; ) wo.push(g(wo) + ' ');
        return wo[t];
      }
      function g(t) {
        return t[t.length - 1];
      }
      function m(t, e) {
        for (var n = [], r = 0; r < t.length; r++) n[r] = e(t[r], r);
        return n;
      }
      function y() {}
      function b(t, e) {
        var n;
        return (
          Object.create
            ? (n = Object.create(t))
            : ((y.prototype = t), (n = new y())),
          e && f(e, n),
          n
        );
      }
      function w(t) {
        return (
          /\w/.test(t) ||
          (t > '' && (t.toUpperCase() != t.toLowerCase() || xo.test(t)))
        );
      }
      function x(t, e) {
        return e ? !!(e.source.indexOf('\\w') > -1 && w(t)) || e.test(t) : w(t);
      }
      function S(t) {
        for (var e in t) if (t.hasOwnProperty(e) && t[e]) return !1;
        return !0;
      }
      function C(t) {
        return t.charCodeAt(0) >= 768 && So.test(t);
      }
      function k(t, e, n) {
        for (; (n < 0 ? e > 0 : e < t.length) && C(t.charAt(e)); ) e += n;
        return e;
      }
      function L(t, e, n) {
        for (var r = e > n ? -1 : 1; ; ) {
          if (e == n) return e;
          var i = (e + n) / 2,
            o = r < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == e) return t(o) ? e : n;
          t(o) ? (n = o) : (e = o + r);
        }
      }
      function T(t, e) {
        if ((e -= t.first) < 0 || e >= t.size)
          throw new Error(
            'There is no line ' + (e + t.first) + ' in the document.'
          );
        for (var n = t; !n.lines; )
          for (var r = 0; ; ++r) {
            var i = n.children[r],
              o = i.chunkSize();
            if (e < o) {
              n = i;
              break;
            }
            e -= o;
          }
        return n.lines[e];
      }
      function M(t, e, n) {
        var r = [],
          i = e.line;
        return (
          t.iter(e.line, n.line + 1, function(t) {
            var o = t.text;
            i == n.line && (o = o.slice(0, n.ch)),
              i == e.line && (o = o.slice(e.ch)),
              r.push(o),
              ++i;
          }),
          r
        );
      }
      function O(t, e, n) {
        var r = [];
        return (
          t.iter(e, n, function(t) {
            r.push(t.text);
          }),
          r
        );
      }
      function _(t, e) {
        var n = e - t.height;
        if (n) for (var r = t; r; r = r.parent) r.height += n;
      }
      function A(t) {
        if (null == t.parent) return null;
        for (
          var e = t.parent, n = h(e.lines, t), r = e.parent;
          r;
          e = r, r = r.parent
        )
          for (var i = 0; r.children[i] != e; ++i)
            n += r.children[i].chunkSize();
        return n + e.first;
      }
      function N(t, e) {
        var n = t.first;
        t: do {
          for (var r = 0; r < t.children.length; ++r) {
            var i = t.children[r],
              o = i.height;
            if (e < o) {
              t = i;
              continue t;
            }
            (e -= o), (n += i.chunkSize());
          }
          return n;
        } while (!t.lines);
        for (var a = 0; a < t.lines.length; ++a) {
          var l = t.lines[a].height;
          if (e < l) break;
          e -= l;
        }
        return n + a;
      }
      function E(t, e) {
        return e >= t.first && e < t.first + t.size;
      }
      function P(t, e) {
        return String(t.lineNumberFormatter(e + t.firstLineNumber));
      }
      function D(t, e, n) {
        if ((void 0 === n && (n = null), !(this instanceof D)))
          return new D(t, e, n);
        (this.line = t), (this.ch = e), (this.sticky = n);
      }
      function W(t, e) {
        return t.line - e.line || t.ch - e.ch;
      }
      function j(t, e) {
        return t.sticky == e.sticky && 0 == W(t, e);
      }
      function F(t) {
        return D(t.line, t.ch);
      }
      function H(t, e) {
        return W(t, e) < 0 ? e : t;
      }
      function z(t, e) {
        return W(t, e) < 0 ? t : e;
      }
      function I(t, e) {
        return Math.max(t.first, Math.min(e, t.first + t.size - 1));
      }
      function R(t, e) {
        if (e.line < t.first) return D(t.first, 0);
        var n = t.first + t.size - 1;
        return e.line > n
          ? D(n, T(t, n).text.length)
          : (function(t, e) {
              var n = t.ch;
              return null == n || n > e
                ? D(t.line, e)
                : n < 0 ? D(t.line, 0) : t;
            })(e, T(t, e.line).text.length);
      }
      function B(t, e) {
        for (var n = [], r = 0; r < e.length; r++) n[r] = R(t, e[r]);
        return n;
      }
      function G(t, e, n) {
        (this.marker = t), (this.from = e), (this.to = n);
      }
      function V(t, e) {
        if (t)
          for (var n = 0; n < t.length; ++n) {
            var r = t[n];
            if (r.marker == e) return r;
          }
      }
      function U(t, e) {
        for (var n, r = 0; r < t.length; ++r)
          t[r] != e && (n || (n = [])).push(t[r]);
        return n;
      }
      function K(t, e) {
        if (e.full) return null;
        var n = E(t, e.from.line) && T(t, e.from.line).markedSpans,
          r = E(t, e.to.line) && T(t, e.to.line).markedSpans;
        if (!n && !r) return null;
        var i = e.from.ch,
          o = e.to.ch,
          a = 0 == W(e.from, e.to),
          l = (function(t, e, n) {
            var r;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker;
                if (
                  null == o.from ||
                  (a.inclusiveLeft ? o.from <= e : o.from < e) ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!n || !o.marker.insertLeft))
                ) {
                  var l =
                    null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                  (r || (r = [])).push(new G(a, o.from, l ? null : o.to));
                }
              }
            return r;
          })(n, i, a),
          s = (function(t, e, n) {
            var r;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker;
                if (
                  null == o.to ||
                  (a.inclusiveRight ? o.to >= e : o.to > e) ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!n || o.marker.insertLeft))
                ) {
                  var l =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= e : o.from < e);
                  (r || (r = [])).push(
                    new G(
                      a,
                      l ? null : o.from - e,
                      null == o.to ? null : o.to - e
                    )
                  );
                }
              }
            return r;
          })(r, o, a),
          u = 1 == e.text.length,
          c = g(e.text).length + (u ? i : 0);
        if (l)
          for (var f = 0; f < l.length; ++f) {
            var d = l[f];
            if (null == d.to) {
              var h = V(s, d.marker);
              h ? u && (d.to = null == h.to ? null : h.to + c) : (d.to = i);
            }
          }
        if (s)
          for (var p = 0; p < s.length; ++p) {
            var v = s[p];
            if ((null != v.to && (v.to += c), null == v.from)) {
              V(l, v.marker) || ((v.from = c), u && (l || (l = [])).push(v));
            } else (v.from += c), u && (l || (l = [])).push(v);
          }
        l && (l = q(l)), s && s != l && (s = q(s));
        var m = [l];
        if (!u) {
          var y,
            b = e.text.length - 2;
          if (b > 0 && l)
            for (var w = 0; w < l.length; ++w)
              null == l[w].to &&
                (y || (y = [])).push(new G(l[w].marker, null, null));
          for (var x = 0; x < b; ++x) m.push(y);
          m.push(s);
        }
        return m;
      }
      function q(t) {
        for (var e = 0; e < t.length; ++e) {
          var n = t[e];
          null != n.from &&
            n.from == n.to &&
            !1 !== n.marker.clearWhenEmpty &&
            t.splice(e--, 1);
        }
        return t.length ? t : null;
      }
      function $(t) {
        var e = t.markedSpans;
        if (e) {
          for (var n = 0; n < e.length; ++n) e[n].marker.detachLine(t);
          t.markedSpans = null;
        }
      }
      function X(t, e) {
        if (e) {
          for (var n = 0; n < e.length; ++n) e[n].marker.attachLine(t);
          t.markedSpans = e;
        }
      }
      function Y(t) {
        return t.inclusiveLeft ? -1 : 0;
      }
      function Z(t) {
        return t.inclusiveRight ? 1 : 0;
      }
      function J(t, e) {
        var n = t.lines.length - e.lines.length;
        if (0 != n) return n;
        var r = t.find(),
          i = e.find(),
          o = W(r.from, i.from) || Y(t) - Y(e);
        if (o) return -o;
        var a = W(r.to, i.to) || Z(t) - Z(e);
        return a || e.id - t.id;
      }
      function Q(t, e) {
        var n,
          r = ko && t.markedSpans;
        if (r)
          for (var i = void 0, o = 0; o < r.length; ++o)
            (i = r[o]).marker.collapsed &&
              null == (e ? i.from : i.to) &&
              (!n || J(n, i.marker) < 0) &&
              (n = i.marker);
        return n;
      }
      function tt(t) {
        return Q(t, !0);
      }
      function et(t) {
        return Q(t, !1);
      }
      function nt(t, e, n, r, i) {
        var o = T(t, e),
          a = ko && o.markedSpans;
        if (a)
          for (var l = 0; l < a.length; ++l) {
            var s = a[l];
            if (s.marker.collapsed) {
              var u = s.marker.find(0),
                c = W(u.from, n) || Y(s.marker) - Y(i),
                f = W(u.to, r) || Z(s.marker) - Z(i);
              if (
                !((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) &&
                ((c <= 0 &&
                  (s.marker.inclusiveRight && i.inclusiveLeft
                    ? W(u.to, n) >= 0
                    : W(u.to, n) > 0)) ||
                  (c >= 0 &&
                    (s.marker.inclusiveRight && i.inclusiveLeft
                      ? W(u.from, r) <= 0
                      : W(u.from, r) < 0)))
              )
                return !0;
            }
          }
      }
      function rt(t) {
        for (var e; (e = tt(t)); ) t = e.find(-1, !0).line;
        return t;
      }
      function it(t, e) {
        var n = T(t, e),
          r = rt(n);
        return n == r ? e : A(r);
      }
      function ot(t, e) {
        if (e > t.lastLine()) return e;
        var n,
          r = T(t, e);
        if (!at(t, r)) return e;
        for (; (n = et(r)); ) r = n.find(1, !0).line;
        return A(r) + 1;
      }
      function at(t, e) {
        var n = ko && e.markedSpans;
        if (n)
          for (var r = void 0, i = 0; i < n.length; ++i)
            if ((r = n[i]).marker.collapsed) {
              if (null == r.from) return !0;
              if (
                !r.marker.widgetNode &&
                0 == r.from &&
                r.marker.inclusiveLeft &&
                lt(t, e, r)
              )
                return !0;
            }
      }
      function lt(t, e, n) {
        if (null == n.to) {
          var r = n.marker.find(1, !0);
          return lt(t, r.line, V(r.line.markedSpans, n.marker));
        }
        if (n.marker.inclusiveRight && n.to == e.text.length) return !0;
        for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
          if (
            (i = e.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == n.to &&
            (null == i.to || i.to != n.from) &&
            (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
            lt(t, e, i)
          )
            return !0;
      }
      function st(t) {
        for (
          var e = 0, n = (t = rt(t)).parent, r = 0;
          r < n.lines.length;
          ++r
        ) {
          var i = n.lines[r];
          if (i == t) break;
          e += i.height;
        }
        for (var o = n.parent; o; n = o, o = n.parent)
          for (var a = 0; a < o.children.length; ++a) {
            var l = o.children[a];
            if (l == n) break;
            e += l.height;
          }
        return e;
      }
      function ut(t) {
        if (0 == t.height) return 0;
        for (var e, n = t.text.length, r = t; (e = tt(r)); ) {
          var i = e.find(0, !0);
          (r = i.from.line), (n += i.from.ch - i.to.ch);
        }
        for (r = t; (e = et(r)); ) {
          var o = e.find(0, !0);
          (n -= r.text.length - o.from.ch),
            (n += (r = o.to.line).text.length - o.to.ch);
        }
        return n;
      }
      function ct(t) {
        var e = t.display,
          n = t.doc;
        (e.maxLine = T(n, n.first)),
          (e.maxLineLength = ut(e.maxLine)),
          (e.maxLineChanged = !0),
          n.iter(function(t) {
            var n = ut(t);
            n > e.maxLineLength && ((e.maxLineLength = n), (e.maxLine = t));
          });
      }
      function ft(t, e, n) {
        var r;
        Lo = null;
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.from < e && o.to > e) return i;
          o.to == e && (o.from != o.to && 'before' == n ? (r = i) : (Lo = i)),
            o.from == e &&
              (o.from != o.to && 'before' != n ? (r = i) : (Lo = i));
        }
        return null != r ? r : Lo;
      }
      function dt(t, e) {
        var n = t.order;
        return null == n && (n = t.order = To(t.text, e)), n;
      }
      function ht(t, e) {
        return (t._handlers && t._handlers[e]) || Mo;
      }
      function pt(t, e, n) {
        if (t.removeEventListener) t.removeEventListener(e, n, !1);
        else if (t.detachEvent) t.detachEvent('on' + e, n);
        else {
          var r = t._handlers,
            i = r && r[e];
          if (i) {
            var o = h(i, n);
            o > -1 && (r[e] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function vt(t, e) {
        var n = ht(t, e);
        if (n.length)
          for (
            var r = Array.prototype.slice.call(arguments, 2), i = 0;
            i < n.length;
            ++i
          )
            n[i].apply(null, r);
      }
      function gt(t, e, n) {
        return (
          'string' == typeof e &&
            (e = {
              type: e,
              preventDefault: function() {
                this.defaultPrevented = !0;
              },
            }),
          vt(t, n || e.type, t, e),
          St(e) || e.codemirrorIgnore
        );
      }
      function mt(t) {
        var e = t._handlers && t._handlers.cursorActivity;
        if (e)
          for (
            var n =
                t.curOp.cursorActivityHandlers ||
                (t.curOp.cursorActivityHandlers = []),
              r = 0;
            r < e.length;
            ++r
          )
            -1 == h(n, e[r]) && n.push(e[r]);
      }
      function yt(t, e) {
        return ht(t, e).length > 0;
      }
      function bt(t) {
        (t.prototype.on = function(t, e) {
          Oo(this, t, e);
        }),
          (t.prototype.off = function(t, e) {
            pt(this, t, e);
          });
      }
      function wt(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function xt(t) {
        t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
      }
      function St(t) {
        return null != t.defaultPrevented
          ? t.defaultPrevented
          : 0 == t.returnValue;
      }
      function Ct(t) {
        wt(t), xt(t);
      }
      function kt(t) {
        return t.target || t.srcElement;
      }
      function Lt(t) {
        var e = t.which;
        return (
          null == e &&
            (1 & t.button
              ? (e = 1)
              : 2 & t.button ? (e = 3) : 4 & t.button && (e = 2)),
          no && t.ctrlKey && 1 == e && (e = 3),
          e
        );
      }
      function Tt(t) {
        if (null == ho) {
          var e = r('span', '​');
          n(t, r('span', [e, document.createTextNode('x')])),
            0 != t.firstChild.offsetHeight &&
              (ho =
                e.offsetWidth <= 1 && e.offsetHeight > 2 && !(Vi && Ui < 8));
        }
        var i = ho
          ? r('span', '​')
          : r(
              'span',
              ' ',
              null,
              'display: inline-block; width: 1px; margin-right: -1px'
            );
        return i.setAttribute('cm-text', ''), i;
      }
      function Mt(t) {
        if (null != po) return po;
        var r = n(t, document.createTextNode('AخA')),
          i = ao(r, 0, 1).getBoundingClientRect(),
          o = ao(r, 1, 2).getBoundingClientRect();
        return e(t), !(!i || i.left == i.right) && (po = o.right - i.right < 3);
      }
      function Ot(t) {
        if ('string' == typeof t && Wo.hasOwnProperty(t)) t = Wo[t];
        else if (t && 'string' == typeof t.name && Wo.hasOwnProperty(t.name)) {
          var e = Wo[t.name];
          'string' == typeof e && (e = { name: e }),
            ((t = b(e, t)).name = e.name);
        } else {
          if ('string' == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
            return Ot('application/xml');
          if ('string' == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t))
            return Ot('application/json');
        }
        return 'string' == typeof t ? { name: t } : t || { name: 'null' };
      }
      function _t(t, e) {
        e = Ot(e);
        var n = Do[e.name];
        if (!n) return _t(t, 'text/plain');
        var r = n(t, e);
        if (jo.hasOwnProperty(e.name)) {
          var i = jo[e.name];
          for (var o in i)
            i.hasOwnProperty(o) &&
              (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
        }
        if (
          ((r.name = e.name),
          e.helperType && (r.helperType = e.helperType),
          e.modeProps)
        )
          for (var a in e.modeProps) r[a] = e.modeProps[a];
        return r;
      }
      function At(t, e) {
        f(e, jo.hasOwnProperty(t) ? jo[t] : (jo[t] = {}));
      }
      function Nt(t, e) {
        if (!0 === e) return e;
        if (t.copyState) return t.copyState(e);
        var n = {};
        for (var r in e) {
          var i = e[r];
          i instanceof Array && (i = i.concat([])), (n[r] = i);
        }
        return n;
      }
      function Et(t, e) {
        for (var n; t.innerMode && (n = t.innerMode(e)) && n.mode != t; )
          (e = n.state), (t = n.mode);
        return n || { mode: t, state: e };
      }
      function Pt(t, e, n) {
        return !t.startState || t.startState(e, n);
      }
      function Dt(t, e, n, r) {
        var i = [t.state.modeGen],
          o = {};
        Bt(
          t,
          e.text,
          t.doc.mode,
          n,
          function(t, e) {
            return i.push(t, e);
          },
          o,
          r
        );
        for (
          var a = n.state,
            l = function(r) {
              n.baseTokens = i;
              var l = t.state.overlays[r],
                s = 1,
                u = 0;
              (n.state = !0),
                Bt(
                  t,
                  e.text,
                  l.mode,
                  n,
                  function(t, e) {
                    for (var n = s; u < t; ) {
                      var r = i[s];
                      r > t && i.splice(s, 1, t, i[s + 1], r),
                        (s += 2),
                        (u = Math.min(t, r));
                    }
                    if (e)
                      if (l.opaque)
                        i.splice(n, s - n, t, 'overlay ' + e), (s = n + 2);
                      else
                        for (; n < s; n += 2) {
                          var o = i[n + 1];
                          i[n + 1] = (o ? o + ' ' : '') + 'overlay ' + e;
                        }
                  },
                  o
                ),
                (n.state = a),
                (n.baseTokens = null),
                (n.baseTokenPos = 1);
            },
            s = 0;
          s < t.state.overlays.length;
          ++s
        )
          l(s);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function Wt(t, e, n) {
        if (!e.styles || e.styles[0] != t.state.modeGen) {
          var r = jt(t, A(e)),
            i =
              e.text.length > t.options.maxHighlightLength &&
              Nt(t.doc.mode, r.state),
            o = Dt(t, e, r);
          i && (r.state = i),
            (e.stateAfter = r.save(!i)),
            (e.styles = o.styles),
            o.classes
              ? (e.styleClasses = o.classes)
              : e.styleClasses && (e.styleClasses = null),
            n === t.doc.highlightFrontier &&
              (t.doc.modeFrontier = Math.max(
                t.doc.modeFrontier,
                ++t.doc.highlightFrontier
              ));
        }
        return e.styles;
      }
      function jt(t, e, n) {
        var r = t.doc,
          i = t.display;
        if (!r.mode.startState) return new zo(r, !0, e);
        var o = (function(t, e, n) {
            for (
              var r,
                i,
                o = t.doc,
                a = n ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100),
                l = e;
              l > a;
              --l
            ) {
              if (l <= o.first) return o.first;
              var s = T(o, l - 1),
                u = s.stateAfter;
              if (
                u &&
                (!n ||
                  l + (u instanceof Ho ? u.lookAhead : 0) <= o.modeFrontier)
              )
                return l;
              var c = d(s.text, null, t.options.tabSize);
              (null == i || r > c) && ((i = l - 1), (r = c));
            }
            return i;
          })(t, e, n),
          a = o > r.first && T(r, o - 1).stateAfter,
          l = a ? zo.fromSaved(r, a, o) : new zo(r, Pt(r.mode), o);
        return (
          r.iter(o, e, function(n) {
            Ft(t, n.text, l);
            var r = l.line;
            (n.stateAfter =
              r == e - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo)
                ? l.save()
                : null),
              l.nextLine();
          }),
          n && (r.modeFrontier = l.line),
          l
        );
      }
      function Ft(t, e, n, r) {
        var i = t.doc.mode,
          o = new Fo(e, t.options.tabSize, n);
        for (o.start = o.pos = r || 0, '' == e && Ht(i, n.state); !o.eol(); )
          zt(i, o, n.state), (o.start = o.pos);
      }
      function Ht(t, e) {
        if (t.blankLine) return t.blankLine(e);
        if (t.innerMode) {
          var n = Et(t, e);
          return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
        }
      }
      function zt(t, e, n, r) {
        for (var i = 0; i < 10; i++) {
          r && (r[0] = Et(t, n).mode);
          var o = t.token(e, n);
          if (e.pos > e.start) return o;
        }
        throw new Error('Mode ' + t.name + ' failed to advance stream.');
      }
      function It(t, e, n, r) {
        var i,
          o,
          a = t.doc,
          l = a.mode,
          s = T(a, (e = R(a, e)).line),
          u = jt(t, e.line, n),
          c = new Fo(s.text, t.options.tabSize, u);
        for (r && (o = []); (r || c.pos < e.ch) && !c.eol(); )
          (c.start = c.pos),
            (i = zt(l, c, u.state)),
            r && o.push(new Io(c, i, Nt(a.mode, u.state)));
        return r ? o : new Io(c, i, u.state);
      }
      function Rt(t, e) {
        if (t)
          for (;;) {
            var n = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n) break;
            t = t.slice(0, n.index) + t.slice(n.index + n[0].length);
            var r = n[1] ? 'bgClass' : 'textClass';
            null == e[r]
              ? (e[r] = n[2])
              : new RegExp('(?:^|s)' + n[2] + '(?:$|s)').test(e[r]) ||
                (e[r] += ' ' + n[2]);
          }
        return t;
      }
      function Bt(t, e, n, r, i, o, a) {
        var l = n.flattenSpans;
        null == l && (l = t.options.flattenSpans);
        var s,
          u = 0,
          c = null,
          f = new Fo(e, t.options.tabSize, r),
          d = t.options.addModeClass && [null];
        for ('' == e && Rt(Ht(n, r.state), o); !f.eol(); ) {
          if (
            (f.pos > t.options.maxHighlightLength
              ? ((l = !1),
                a && Ft(t, e, r, f.pos),
                (f.pos = e.length),
                (s = null))
              : (s = Rt(zt(n, f, r.state, d), o)),
            d)
          ) {
            var h = d[0].name;
            h && (s = 'm-' + (s ? h + ' ' + s : h));
          }
          if (!l || c != s) {
            for (; u < f.start; ) i((u = Math.min(f.start, u + 5e3)), c);
            c = s;
          }
          f.start = f.pos;
        }
        for (; u < f.pos; ) {
          var p = Math.min(f.pos, u + 5e3);
          i(p, c), (u = p);
        }
      }
      function Gt(t) {
        (t.parent = null), $(t);
      }
      function Vt(t, e) {
        if (!t || /^\s*$/.test(t)) return null;
        var n = e.addModeClass ? Vo : Go;
        return n[t] || (n[t] = t.replace(/\S+/g, 'cm-$&'));
      }
      function Ut(t, e) {
        var n = i('span', null, null, Ki ? 'padding-right: .1px' : null),
          r = {
            pre: i('pre', [n], 'CodeMirror-line'),
            content: n,
            col: 0,
            pos: 0,
            cm: t,
            trailingSpace: !1,
            splitSpaces: (Vi || Ki) && t.getOption('lineWrapping'),
          };
        e.measure = {};
        for (var o = 0; o <= (e.rest ? e.rest.length : 0); o++) {
          var a = o ? e.rest[o - 1] : e.line,
            l = void 0;
          (r.pos = 0),
            (r.addToken = qt),
            Mt(t.display.measure) &&
              (l = dt(a, t.doc.direction)) &&
              (r.addToken = (function(t, e) {
                return function(n, r, i, o, a, l, s) {
                  i = i ? i + ' cm-force-border' : 'cm-force-border';
                  for (var u = n.pos, c = u + r.length; ; ) {
                    for (
                      var f = void 0, d = 0;
                      d < e.length && !((f = e[d]).to > u && f.from <= u);
                      d++
                    );
                    if (f.to >= c) return t(n, r, i, o, a, l, s);
                    t(n, r.slice(0, f.to - u), i, o, null, l, s),
                      (o = null),
                      (r = r.slice(f.to - u)),
                      (u = f.to);
                  }
                };
              })(r.addToken, l)),
            (r.map = []);
          !(function(t, e, n) {
            var r = t.markedSpans,
              i = t.text,
              o = 0;
            if (!r) {
              for (var a = 1; a < n.length; a += 2)
                e.addToken(
                  e,
                  i.slice(o, (o = n[a])),
                  Vt(n[a + 1], e.cm.options)
                );
              return;
            }
            for (
              var l,
                s,
                u,
                c,
                f,
                d,
                h,
                p = i.length,
                v = 0,
                g = 1,
                m = '',
                y = 0;
              ;

            ) {
              if (y == v) {
                (u = c = f = d = s = ''), (h = null), (y = 1 / 0);
                for (var b = [], w = void 0, x = 0; x < r.length; ++x) {
                  var S = r[x],
                    C = S.marker;
                  'bookmark' == C.type && S.from == v && C.widgetNode
                    ? b.push(C)
                    : S.from <= v &&
                      (null == S.to ||
                        S.to > v ||
                        (C.collapsed && S.to == v && S.from == v))
                      ? (null != S.to &&
                          S.to != v &&
                          y > S.to &&
                          ((y = S.to), (c = '')),
                        C.className && (u += ' ' + C.className),
                        C.css && (s = (s ? s + ';' : '') + C.css),
                        C.startStyle &&
                          S.from == v &&
                          (f += ' ' + C.startStyle),
                        C.endStyle &&
                          S.to == y &&
                          (w || (w = [])).push(C.endStyle, S.to),
                        C.title && !d && (d = C.title),
                        C.collapsed && (!h || J(h.marker, C) < 0) && (h = S))
                      : S.from > v && y > S.from && (y = S.from);
                }
                if (w)
                  for (var k = 0; k < w.length; k += 2)
                    w[k + 1] == y && (c += ' ' + w[k]);
                if (!h || h.from == v)
                  for (var L = 0; L < b.length; ++L) $t(e, 0, b[L]);
                if (h && (h.from || 0) == v) {
                  if (
                    ($t(
                      e,
                      (null == h.to ? p + 1 : h.to) - v,
                      h.marker,
                      null == h.from
                    ),
                    null == h.to)
                  )
                    return;
                  h.to == v && (h = !1);
                }
              }
              if (v >= p) break;
              for (var T = Math.min(p, y); ; ) {
                if (m) {
                  var M = v + m.length;
                  if (!h) {
                    var O = M > T ? m.slice(0, T - v) : m;
                    e.addToken(
                      e,
                      O,
                      l ? l + u : u,
                      f,
                      v + O.length == y ? c : '',
                      d,
                      s
                    );
                  }
                  if (M >= T) {
                    (m = m.slice(T - v)), (v = T);
                    break;
                  }
                  (v = M), (f = '');
                }
                (m = i.slice(o, (o = n[g++]))), (l = Vt(n[g++], e.cm.options));
              }
            }
          })(a, r, Wt(t, a, e != t.display.externalMeasured && A(a))),
            a.styleClasses &&
              (a.styleClasses.bgClass &&
                (r.bgClass = u(a.styleClasses.bgClass, r.bgClass || '')),
              a.styleClasses.textClass &&
                (r.textClass = u(a.styleClasses.textClass, r.textClass || ''))),
            0 == r.map.length &&
              r.map.push(0, 0, r.content.appendChild(Tt(t.display.measure))),
            0 == o
              ? ((e.measure.map = r.map), (e.measure.cache = {}))
              : ((e.measure.maps || (e.measure.maps = [])).push(r.map),
                (e.measure.caches || (e.measure.caches = [])).push({}));
        }
        if (Ki) {
          var s = r.content.lastChild;
          (/\bcm-tab\b/.test(s.className) ||
            (s.querySelector && s.querySelector('.cm-tab'))) &&
            (r.content.className = 'cm-tab-wrap-hack');
        }
        return (
          vt(t, 'renderLine', t, e.line, r.pre),
          r.pre.className &&
            (r.textClass = u(r.pre.className, r.textClass || '')),
          r
        );
      }
      function Kt(t) {
        var e = r('span', '•', 'cm-invalidchar');
        return (
          (e.title = '\\u' + t.charCodeAt(0).toString(16)),
          e.setAttribute('aria-label', e.title),
          e
        );
      }
      function qt(t, e, n, i, o, a, l) {
        if (e) {
          var s,
            u = t.splitSpaces
              ? (function(t, e) {
                  if (t.length > 1 && !/  /.test(t)) return t;
                  for (var n = e, r = '', i = 0; i < t.length; i++) {
                    var o = t.charAt(i);
                    ' ' != o ||
                      !n ||
                      (i != t.length - 1 && 32 != t.charCodeAt(i + 1)) ||
                      (o = ' '),
                      (r += o),
                      (n = ' ' == o);
                  }
                  return r;
                })(e, t.trailingSpace)
              : e,
            c = t.cm.state.specialChars,
            f = !1;
          if (c.test(e)) {
            s = document.createDocumentFragment();
            for (var d = 0; ; ) {
              c.lastIndex = d;
              var h = c.exec(e),
                p = h ? h.index - d : e.length - d;
              if (p) {
                var g = document.createTextNode(u.slice(d, d + p));
                Vi && Ui < 9 ? s.appendChild(r('span', [g])) : s.appendChild(g),
                  t.map.push(t.pos, t.pos + p, g),
                  (t.col += p),
                  (t.pos += p);
              }
              if (!h) break;
              d += p + 1;
              var m = void 0;
              if ('\t' == h[0]) {
                var y = t.cm.options.tabSize,
                  b = y - t.col % y;
                (m = s.appendChild(r('span', v(b), 'cm-tab'))).setAttribute(
                  'role',
                  'presentation'
                ),
                  m.setAttribute('cm-text', '\t'),
                  (t.col += b);
              } else
                '\r' == h[0] || '\n' == h[0]
                  ? ((m = s.appendChild(
                      r('span', '\r' == h[0] ? '␍' : '␤', 'cm-invalidchar')
                    )).setAttribute('cm-text', h[0]),
                    (t.col += 1))
                  : ((m = t.cm.options.specialCharPlaceholder(
                      h[0]
                    )).setAttribute('cm-text', h[0]),
                    Vi && Ui < 9
                      ? s.appendChild(r('span', [m]))
                      : s.appendChild(m),
                    (t.col += 1));
              t.map.push(t.pos, t.pos + 1, m), t.pos++;
            }
          } else
            (t.col += e.length),
              (s = document.createTextNode(u)),
              t.map.push(t.pos, t.pos + e.length, s),
              Vi && Ui < 9 && (f = !0),
              (t.pos += e.length);
          if (
            ((t.trailingSpace = 32 == u.charCodeAt(e.length - 1)),
            n || i || o || f || l)
          ) {
            var w = n || '';
            i && (w += i), o && (w += o);
            var x = r('span', [s], w, l);
            return a && (x.title = a), t.content.appendChild(x);
          }
          t.content.appendChild(s);
        }
      }
      function $t(t, e, n, r) {
        var i = !r && n.widgetNode;
        i && t.map.push(t.pos, t.pos + e, i),
          !r &&
            t.cm.display.input.needsContentAttribute &&
            (i || (i = t.content.appendChild(document.createElement('span'))),
            i.setAttribute('cm-marker', n.id)),
          i && (t.cm.display.input.setUneditable(i), t.content.appendChild(i)),
          (t.pos += e),
          (t.trailingSpace = !1);
      }
      function Xt(t, e, n) {
        (this.line = e),
          (this.rest = (function(t) {
            for (var e, n; (e = et(t)); )
              (t = e.find(1, !0).line), (n || (n = [])).push(t);
            return n;
          })(e)),
          (this.size = this.rest ? A(g(this.rest)) - n + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = at(t, e));
      }
      function Yt(t, e, n) {
        for (var r, i = [], o = e; o < n; o = r) {
          var a = new Xt(t.doc, T(t.doc, o), o);
          (r = o + a.size), i.push(a);
        }
        return i;
      }
      function Zt(t, e) {
        var n = ht(t, e);
        if (n.length) {
          var r,
            i = Array.prototype.slice.call(arguments, 2);
          Uo
            ? (r = Uo.delayedCallbacks)
            : Ko ? (r = Ko) : ((r = Ko = []), setTimeout(Jt, 0));
          for (
            var o = function(t) {
                r.push(function() {
                  return n[t].apply(null, i);
                });
              },
              a = 0;
            a < n.length;
            ++a
          )
            o(a);
        }
      }
      function Jt() {
        var t = Ko;
        Ko = null;
        for (var e = 0; e < t.length; ++e) t[e]();
      }
      function Qt(t, e, n, r) {
        for (var i = 0; i < e.changes.length; i++) {
          var o = e.changes[i];
          'text' == o
            ? (function(t, e) {
                var n = e.text.className,
                  r = ee(t, e);
                e.text == e.node && (e.node = r.pre);
                e.text.parentNode.replaceChild(r.pre, e.text),
                  (e.text = r.pre),
                  r.bgClass != e.bgClass || r.textClass != e.textClass
                    ? ((e.bgClass = r.bgClass),
                      (e.textClass = r.textClass),
                      ne(t, e))
                    : n && (e.text.className = n);
              })(t, e)
            : 'gutter' == o
              ? re(t, e, n, r)
              : 'class' == o
                ? ne(t, e)
                : 'widget' == o &&
                  (function(t, e, n) {
                    e.alignable && (e.alignable = null);
                    for (var r = e.node.firstChild, i = void 0; r; r = i)
                      (i = r.nextSibling),
                        'CodeMirror-linewidget' == r.className &&
                          e.node.removeChild(r);
                    oe(t, e, n);
                  })(t, e, r);
        }
        e.changes = null;
      }
      function te(t) {
        return (
          t.node == t.text &&
            ((t.node = r('div', null, null, 'position: relative')),
            t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text),
            t.node.appendChild(t.text),
            Vi && Ui < 8 && (t.node.style.zIndex = 2)),
          t.node
        );
      }
      function ee(t, e) {
        var n = t.display.externalMeasured;
        return n && n.line == e.line
          ? ((t.display.externalMeasured = null),
            (e.measure = n.measure),
            n.built)
          : Ut(t, e);
      }
      function ne(t, e) {
        !(function(t, e) {
          var n = e.bgClass
            ? e.bgClass + ' ' + (e.line.bgClass || '')
            : e.line.bgClass;
          if ((n && (n += ' CodeMirror-linebackground'), e.background))
            n
              ? (e.background.className = n)
              : (e.background.parentNode.removeChild(e.background),
                (e.background = null));
          else if (n) {
            var i = te(e);
            (e.background = i.insertBefore(r('div', null, n), i.firstChild)),
              t.display.input.setUneditable(e.background);
          }
        })(t, e),
          e.line.wrapClass
            ? (te(e).className = e.line.wrapClass)
            : e.node != e.text && (e.node.className = '');
        var n = e.textClass
          ? e.textClass + ' ' + (e.line.textClass || '')
          : e.line.textClass;
        e.text.className = n || '';
      }
      function re(t, e, n, i) {
        if (
          (e.gutter && (e.node.removeChild(e.gutter), (e.gutter = null)),
          e.gutterBackground &&
            (e.node.removeChild(e.gutterBackground),
            (e.gutterBackground = null)),
          e.line.gutterClass)
        ) {
          var o = te(e);
          (e.gutterBackground = r(
            'div',
            null,
            'CodeMirror-gutter-background ' + e.line.gutterClass,
            'left: ' +
              (t.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
              'px; width: ' +
              i.gutterTotalWidth +
              'px'
          )),
            t.display.input.setUneditable(e.gutterBackground),
            o.insertBefore(e.gutterBackground, e.text);
        }
        var a = e.line.gutterMarkers;
        if (t.options.lineNumbers || a) {
          var l = te(e),
            s = (e.gutter = r(
              'div',
              null,
              'CodeMirror-gutter-wrapper',
              'left: ' +
                (t.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
                'px'
            ));
          if (
            (t.display.input.setUneditable(s),
            l.insertBefore(s, e.text),
            e.line.gutterClass && (s.className += ' ' + e.line.gutterClass),
            !t.options.lineNumbers ||
              (a && a['CodeMirror-linenumbers']) ||
              (e.lineNumber = s.appendChild(
                r(
                  'div',
                  P(t.options, n),
                  'CodeMirror-linenumber CodeMirror-gutter-elt',
                  'left: ' +
                    i.gutterLeft['CodeMirror-linenumbers'] +
                    'px; width: ' +
                    t.display.lineNumInnerWidth +
                    'px'
                )
              )),
            a)
          )
            for (var u = 0; u < t.options.gutters.length; ++u) {
              var c = t.options.gutters[u],
                f = a.hasOwnProperty(c) && a[c];
              f &&
                s.appendChild(
                  r(
                    'div',
                    [f],
                    'CodeMirror-gutter-elt',
                    'left: ' +
                      i.gutterLeft[c] +
                      'px; width: ' +
                      i.gutterWidth[c] +
                      'px'
                  )
                );
            }
        }
      }
      function ie(t, e, n, r) {
        var i = ee(t, e);
        return (
          (e.text = e.node = i.pre),
          i.bgClass && (e.bgClass = i.bgClass),
          i.textClass && (e.textClass = i.textClass),
          ne(t, e),
          re(t, e, n, r),
          oe(t, e, r),
          e.node
        );
      }
      function oe(t, e, n) {
        if ((ae(t, e.line, e, n, !0), e.rest))
          for (var r = 0; r < e.rest.length; r++) ae(t, e.rest[r], e, n, !1);
      }
      function ae(t, e, n, i, o) {
        if (e.widgets)
          for (var a = te(n), l = 0, s = e.widgets; l < s.length; ++l) {
            var u = s[l],
              c = r('div', [u.node], 'CodeMirror-linewidget');
            u.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
              (function(t, e, n, r) {
                if (t.noHScroll) {
                  (n.alignable || (n.alignable = [])).push(e);
                  var i = r.wrapperWidth;
                  (e.style.left = r.fixedPos + 'px'),
                    t.coverGutter ||
                      ((i -= r.gutterTotalWidth),
                      (e.style.paddingLeft = r.gutterTotalWidth + 'px')),
                    (e.style.width = i + 'px');
                }
                t.coverGutter &&
                  ((e.style.zIndex = 5),
                  (e.style.position = 'relative'),
                  t.noHScroll ||
                    (e.style.marginLeft = -r.gutterTotalWidth + 'px'));
              })(u, c, n, i),
              t.display.input.setUneditable(c),
              o && u.above
                ? a.insertBefore(c, n.gutter || n.text)
                : a.appendChild(c),
              Zt(u, 'redraw');
          }
      }
      function le(t) {
        if (null != t.height) return t.height;
        var e = t.doc.cm;
        if (!e) return 0;
        if (!a(document.body, t.node)) {
          var i = 'position: relative;';
          t.coverGutter &&
            (i += 'margin-left: -' + e.display.gutters.offsetWidth + 'px;'),
            t.noHScroll &&
              (i += 'width: ' + e.display.wrapper.clientWidth + 'px;'),
            n(e.display.measure, r('div', [t.node], null, i));
        }
        return (t.height = t.node.parentNode.offsetHeight);
      }
      function se(t, e) {
        for (var n = kt(e); n != t.wrapper; n = n.parentNode)
          if (
            !n ||
            (1 == n.nodeType && 'true' == n.getAttribute('cm-ignore-events')) ||
            (n.parentNode == t.sizer && n != t.mover)
          )
            return !0;
      }
      function ue(t) {
        return t.lineSpace.offsetTop;
      }
      function ce(t) {
        return t.mover.offsetHeight - t.lineSpace.offsetHeight;
      }
      function fe(t) {
        if (t.cachedPaddingH) return t.cachedPaddingH;
        var e = n(t.measure, r('pre', 'x')),
          i = window.getComputedStyle
            ? window.getComputedStyle(e)
            : e.currentStyle,
          o = {
            left: parseInt(i.paddingLeft),
            right: parseInt(i.paddingRight),
          };
        return isNaN(o.left) || isNaN(o.right) || (t.cachedPaddingH = o), o;
      }
      function de(t) {
        return vo - t.display.nativeBarWidth;
      }
      function he(t) {
        return t.display.scroller.clientWidth - de(t) - t.display.barWidth;
      }
      function pe(t) {
        return t.display.scroller.clientHeight - de(t) - t.display.barHeight;
      }
      function ve(t, e, n) {
        if (t.line == e) return { map: t.measure.map, cache: t.measure.cache };
        for (var r = 0; r < t.rest.length; r++)
          if (t.rest[r] == e)
            return { map: t.measure.maps[r], cache: t.measure.caches[r] };
        for (var i = 0; i < t.rest.length; i++)
          if (A(t.rest[i]) > n)
            return {
              map: t.measure.maps[i],
              cache: t.measure.caches[i],
              before: !0,
            };
      }
      function ge(t, e, n, r) {
        return be(t, ye(t, e), n, r);
      }
      function me(t, e) {
        if (e >= t.display.viewFrom && e < t.display.viewTo)
          return t.display.view[Ue(t, e)];
        var n = t.display.externalMeasured;
        return n && e >= n.lineN && e < n.lineN + n.size ? n : void 0;
      }
      function ye(t, e) {
        var r = A(e),
          i = me(t, r);
        i && !i.text
          ? (i = null)
          : i && i.changes && (Qt(t, i, r, Ie(t)), (t.curOp.forceUpdate = !0)),
          i ||
            (i = (function(t, e) {
              var r = A((e = rt(e))),
                i = (t.display.externalMeasured = new Xt(t.doc, e, r));
              i.lineN = r;
              var o = (i.built = Ut(t, i));
              return (i.text = o.pre), n(t.display.lineMeasure, o.pre), i;
            })(t, e));
        var o = ve(i, e, r);
        return {
          line: e,
          view: i,
          rect: null,
          map: o.map,
          cache: o.cache,
          before: o.before,
          hasHeights: !1,
        };
      }
      function be(t, e, i, o, a) {
        e.before && (i = -1);
        var l,
          s = i + (o || '');
        return (
          e.cache.hasOwnProperty(s)
            ? (l = e.cache[s])
            : (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
              e.hasHeights ||
                (!(function(t, e, n) {
                  var r = t.options.lineWrapping,
                    i = r && he(t);
                  if (!e.measure.heights || (r && e.measure.width != i)) {
                    var o = (e.measure.heights = []);
                    if (r) {
                      e.measure.width = i;
                      for (
                        var a = e.text.firstChild.getClientRects(), l = 0;
                        l < a.length - 1;
                        l++
                      ) {
                        var s = a[l],
                          u = a[l + 1];
                        Math.abs(s.bottom - u.bottom) > 2 &&
                          o.push((s.bottom + u.top) / 2 - n.top);
                      }
                    }
                    o.push(n.bottom - n.top);
                  }
                })(t, e.view, e.rect),
                (e.hasHeights = !0)),
              (l = (function(t, e, i, o) {
                var a,
                  l = we(e.map, i, o),
                  s = l.node,
                  u = l.start,
                  c = l.end,
                  f = l.collapse;
                if (3 == s.nodeType) {
                  for (var d = 0; d < 4; d++) {
                    for (; u && C(e.line.text.charAt(l.coverStart + u)); ) --u;
                    for (
                      ;
                      l.coverStart + c < l.coverEnd &&
                      C(e.line.text.charAt(l.coverStart + c));

                    )
                      ++c;
                    if (
                      (a =
                        Vi && Ui < 9 && 0 == u && c == l.coverEnd - l.coverStart
                          ? s.parentNode.getBoundingClientRect()
                          : xe(ao(s, u, c).getClientRects(), o)).left ||
                      a.right ||
                      0 == u
                    )
                      break;
                    (c = u), (u -= 1), (f = 'right');
                  }
                  Vi &&
                    Ui < 11 &&
                    (a = (function(t, e) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function(t) {
                          if (null != Po) return Po;
                          var e = n(t, r('span', 'x')),
                            i = e.getBoundingClientRect(),
                            o = ao(e, 0, 1).getBoundingClientRect();
                          return (Po = Math.abs(i.left - o.left) > 1);
                        })(t)
                      )
                        return e;
                      var i = screen.logicalXDPI / screen.deviceXDPI,
                        o = screen.logicalYDPI / screen.deviceYDPI;
                      return {
                        left: e.left * i,
                        right: e.right * i,
                        top: e.top * o,
                        bottom: e.bottom * o,
                      };
                    })(t.display.measure, a));
                } else {
                  u > 0 && (f = o = 'right');
                  var h;
                  a =
                    t.options.lineWrapping &&
                    (h = s.getClientRects()).length > 1
                      ? h['right' == o ? h.length - 1 : 0]
                      : s.getBoundingClientRect();
                }
                if (Vi && Ui < 9 && !u && (!a || (!a.left && !a.right))) {
                  var p = s.parentNode.getClientRects()[0];
                  a = p
                    ? {
                        left: p.left,
                        right: p.left + ze(t.display),
                        top: p.top,
                        bottom: p.bottom,
                      }
                    : qo;
                }
                for (
                  var v = a.top - e.rect.top,
                    g = a.bottom - e.rect.top,
                    m = (v + g) / 2,
                    y = e.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(m < y[b]);
                  b++
                );
                var w = b ? y[b - 1] : 0,
                  x = y[b],
                  S = {
                    left: ('right' == f ? a.right : a.left) - e.rect.left,
                    right: ('left' == f ? a.left : a.right) - e.rect.left,
                    top: w,
                    bottom: x,
                  };
                a.left || a.right || (S.bogus = !0);
                t.options.singleCursorHeightPerLine ||
                  ((S.rtop = v), (S.rbottom = g));
                return S;
              })(t, e, i, o)).bogus || (e.cache[s] = l)),
          {
            left: l.left,
            right: l.right,
            top: a ? l.rtop : l.top,
            bottom: a ? l.rbottom : l.bottom,
          }
        );
      }
      function we(t, e, n) {
        for (var r, i, o, a, l, s, u = 0; u < t.length; u += 3)
          if (
            ((l = t[u]),
            (s = t[u + 1]),
            e < l
              ? ((i = 0), (o = 1), (a = 'left'))
              : e < s
                ? (o = (i = e - l) + 1)
                : (u == t.length - 3 || (e == s && t[u + 3] > e)) &&
                  ((i = (o = s - l) - 1), e >= s && (a = 'right')),
            null != i)
          ) {
            if (
              ((r = t[u + 2]),
              l == s && n == (r.insertLeft ? 'left' : 'right') && (a = n),
              'left' == n && 0 == i)
            )
              for (; u && t[u - 2] == t[u - 3] && t[u - 1].insertLeft; )
                (r = t[2 + (u -= 3)]), (a = 'left');
            if ('right' == n && i == s - l)
              for (
                ;
                u < t.length - 3 &&
                t[u + 3] == t[u + 4] &&
                !t[u + 5].insertLeft;

              )
                (r = t[(u += 3) + 2]), (a = 'right');
            break;
          }
        return {
          node: r,
          start: i,
          end: o,
          collapse: a,
          coverStart: l,
          coverEnd: s,
        };
      }
      function xe(t, e) {
        var n = qo;
        if ('left' == e)
          for (var r = 0; r < t.length && (n = t[r]).left == n.right; r++);
        else
          for (var i = t.length - 1; i >= 0 && (n = t[i]).left == n.right; i--);
        return n;
      }
      function Se(t) {
        if (
          t.measure &&
          ((t.measure.cache = {}), (t.measure.heights = null), t.rest)
        )
          for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {};
      }
      function Ce(t) {
        (t.display.externalMeasure = null), e(t.display.lineMeasure);
        for (var n = 0; n < t.display.view.length; n++) Se(t.display.view[n]);
      }
      function ke(t) {
        Ce(t),
          (t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null),
          t.options.lineWrapping || (t.display.maxLineChanged = !0),
          (t.display.lineNumChars = null);
      }
      function Le() {
        return $i && to
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft;
      }
      function Te() {
        return $i && to
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop;
      }
      function Me(t) {
        var e = 0;
        if (t.widgets)
          for (var n = 0; n < t.widgets.length; ++n)
            t.widgets[n].above && (e += le(t.widgets[n]));
        return e;
      }
      function Oe(t, e, n, r, i) {
        if (!i) {
          var o = Me(e);
          (n.top += o), (n.bottom += o);
        }
        if ('line' == r) return n;
        r || (r = 'local');
        var a = st(e);
        if (
          ('local' == r ? (a += ue(t.display)) : (a -= t.display.viewOffset),
          'page' == r || 'window' == r)
        ) {
          var l = t.display.lineSpace.getBoundingClientRect();
          a += l.top + ('window' == r ? 0 : Te());
          var s = l.left + ('window' == r ? 0 : Le());
          (n.left += s), (n.right += s);
        }
        return (n.top += a), (n.bottom += a), n;
      }
      function _e(t, e, n) {
        if ('div' == n) return e;
        var r = e.left,
          i = e.top;
        if ('page' == n) (r -= Le()), (i -= Te());
        else if ('local' == n || !n) {
          var o = t.display.sizer.getBoundingClientRect();
          (r += o.left), (i += o.top);
        }
        var a = t.display.lineSpace.getBoundingClientRect();
        return { left: r - a.left, top: i - a.top };
      }
      function Ae(t, e, n, r, i) {
        return r || (r = T(t.doc, e.line)), Oe(t, r, ge(t, r, e.ch, i), n);
      }
      function Ne(t, e, n, r, i, o) {
        function a(e, a) {
          var l = be(t, i, e, a ? 'right' : 'left', o);
          return a ? (l.left = l.right) : (l.right = l.left), Oe(t, r, l, n);
        }
        function l(t, e, n) {
          var r = 1 == s[e].level;
          return a(n ? t - 1 : t, r != n);
        }
        (r = r || T(t.doc, e.line)), i || (i = ye(t, r));
        var s = dt(r, t.doc.direction),
          u = e.ch,
          c = e.sticky;
        if (
          (u >= r.text.length
            ? ((u = r.text.length), (c = 'before'))
            : u <= 0 && ((u = 0), (c = 'after')),
          !s)
        )
          return a('before' == c ? u - 1 : u, 'before' == c);
        var f = ft(s, u, c),
          d = Lo,
          h = l(u, f, 'before' == c);
        return null != d && (h.other = l(u, d, 'before' != c)), h;
      }
      function Ee(t, e) {
        var n = 0;
        (e = R(t.doc, e)), t.options.lineWrapping || (n = ze(t.display) * e.ch);
        var r = T(t.doc, e.line),
          i = st(r) + ue(t.display);
        return { left: n, right: n, top: i, bottom: i + r.height };
      }
      function Pe(t, e, n, r, i) {
        var o = D(t, e, n);
        return (o.xRel = i), r && (o.outside = !0), o;
      }
      function De(t, e, n) {
        var r = t.doc;
        if ((n += t.display.viewOffset) < 0)
          return Pe(r.first, 0, null, !0, -1);
        var i = N(r, n),
          o = r.first + r.size - 1;
        if (i > o)
          return Pe(r.first + r.size - 1, T(r, o).text.length, null, !0, 1);
        e < 0 && (e = 0);
        for (var a = T(r, i); ; ) {
          var l = (function(t, e, n, r, i) {
              i -= st(e);
              var o = ye(t, e),
                a = Me(e),
                l = 0,
                s = e.text.length,
                u = !0,
                c = dt(e, t.doc.direction);
              if (c) {
                var f = (t.options.lineWrapping
                  ? function(t, e, n, r, i, o, a) {
                      var l = We(t, e, r, a),
                        s = l.begin,
                        u = l.end;
                      /\s/.test(e.text.charAt(u - 1)) && u--;
                      for (var c = null, f = null, d = 0; d < i.length; d++) {
                        var h = i[d];
                        if (!(h.from >= u || h.to <= s)) {
                          var p = 1 != h.level,
                            v = be(
                              t,
                              r,
                              p ? Math.min(u, h.to) - 1 : Math.max(s, h.from)
                            ).right,
                            g = v < o ? o - v + 1e9 : v - o;
                          (!c || f > g) && ((c = h), (f = g));
                        }
                      }
                      c || (c = i[i.length - 1]);
                      c.from < s && (c = { from: s, to: c.to, level: c.level });
                      c.to > u && (c = { from: c.from, to: u, level: c.level });
                      return c;
                    }
                  : function(t, e, n, r, i, o, a) {
                      var l = L(
                          function(l) {
                            var s = i[l],
                              u = 1 != s.level;
                            return Fe(
                              Ne(
                                t,
                                D(n, u ? s.to : s.from, u ? 'before' : 'after'),
                                'line',
                                e,
                                r
                              ),
                              o,
                              a,
                              !0
                            );
                          },
                          0,
                          i.length - 1
                        ),
                        s = i[l];
                      if (l > 0) {
                        var u = 1 != s.level,
                          c = Ne(
                            t,
                            D(n, u ? s.from : s.to, u ? 'after' : 'before'),
                            'line',
                            e,
                            r
                          );
                        Fe(c, o, a, !0) && c.top > a && (s = i[l - 1]);
                      }
                      return s;
                    })(t, e, n, o, c, r, i);
                (u = 1 != f.level),
                  (l = u ? f.from : f.to - 1),
                  (s = u ? f.to : f.from - 1);
              }
              var d,
                h,
                p = null,
                v = null,
                g = L(
                  function(e) {
                    var n = be(t, o, e);
                    return (
                      (n.top += a),
                      (n.bottom += a),
                      !!Fe(n, r, i, !1) &&
                        (n.top <= i && n.left <= r && ((p = e), (v = n)), !0)
                    );
                  },
                  l,
                  s
                ),
                m = !1;
              if (v) {
                var y = r - v.left < v.right - r,
                  b = y == u;
                (g = p + (b ? 0 : 1)),
                  (h = b ? 'after' : 'before'),
                  (d = y ? v.left : v.right);
              } else {
                u || (g != s && g != l) || g++,
                  (h =
                    0 == g
                      ? 'after'
                      : g == e.text.length
                        ? 'before'
                        : be(t, o, g - (u ? 1 : 0)).bottom + a <= i == u
                          ? 'after'
                          : 'before');
                var w = Ne(t, D(n, g, h), 'line', e, o);
                (d = w.left), (m = i < w.top || i >= w.bottom);
              }
              return (g = k(e.text, g, 1)), Pe(n, g, h, m, r - d);
            })(t, a, i, e, n),
            s = et(a),
            u = s && s.find(0, !0);
          if (!s || !(l.ch > u.from.ch || (l.ch == u.from.ch && l.xRel > 0)))
            return l;
          i = A((a = u.to.line));
        }
      }
      function We(t, e, n, r) {
        r -= Me(e);
        var i = e.text.length,
          o = L(
            function(e) {
              return be(t, n, e - 1).bottom <= r;
            },
            i,
            0
          );
        return (
          (i = L(
            function(e) {
              return be(t, n, e).top > r;
            },
            o,
            i
          )),
          { begin: o, end: i }
        );
      }
      function je(t, e, n, r) {
        n || (n = ye(t, e));
        return We(t, e, n, Oe(t, e, be(t, n, r), 'line').top);
      }
      function Fe(t, e, n, r) {
        return !(t.bottom <= n) && (t.top > n || (r ? t.left : t.right) > e);
      }
      function He(t) {
        if (null != t.cachedTextHeight) return t.cachedTextHeight;
        if (null == Bo) {
          Bo = r('pre');
          for (var i = 0; i < 49; ++i)
            Bo.appendChild(document.createTextNode('x')),
              Bo.appendChild(r('br'));
          Bo.appendChild(document.createTextNode('x'));
        }
        n(t.measure, Bo);
        var o = Bo.offsetHeight / 50;
        return o > 3 && (t.cachedTextHeight = o), e(t.measure), o || 1;
      }
      function ze(t) {
        if (null != t.cachedCharWidth) return t.cachedCharWidth;
        var e = r('span', 'xxxxxxxxxx'),
          i = r('pre', [e]);
        n(t.measure, i);
        var o = e.getBoundingClientRect(),
          a = (o.right - o.left) / 10;
        return a > 2 && (t.cachedCharWidth = a), a || 10;
      }
      function Ie(t) {
        for (
          var e = t.display,
            n = {},
            r = {},
            i = e.gutters.clientLeft,
            o = e.gutters.firstChild,
            a = 0;
          o;
          o = o.nextSibling, ++a
        )
          (n[t.options.gutters[a]] = o.offsetLeft + o.clientLeft + i),
            (r[t.options.gutters[a]] = o.clientWidth);
        return {
          fixedPos: Re(e),
          gutterTotalWidth: e.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: e.wrapper.clientWidth,
        };
      }
      function Re(t) {
        return (
          t.scroller.getBoundingClientRect().left -
          t.sizer.getBoundingClientRect().left
        );
      }
      function Be(t) {
        var e = He(t.display),
          n = t.options.lineWrapping,
          r =
            n &&
            Math.max(5, t.display.scroller.clientWidth / ze(t.display) - 3);
        return function(i) {
          if (at(t.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return n ? o + (Math.ceil(i.text.length / r) || 1) * e : o + e;
        };
      }
      function Ge(t) {
        var e = t.doc,
          n = Be(t);
        e.iter(function(t) {
          var e = n(t);
          e != t.height && _(t, e);
        });
      }
      function Ve(t, e, n, r) {
        var i = t.display;
        if (!n && 'true' == kt(e).getAttribute('cm-not-content')) return null;
        var o,
          a,
          l = i.lineSpace.getBoundingClientRect();
        try {
          (o = e.clientX - l.left), (a = e.clientY - l.top);
        } catch (e) {
          return null;
        }
        var s,
          u = De(t, o, a);
        if (r && 1 == u.xRel && (s = T(t.doc, u.line).text).length == u.ch) {
          var c = d(s, s.length, t.options.tabSize) - s.length;
          u = D(
            u.line,
            Math.max(
              0,
              Math.round((o - fe(t.display).left) / ze(t.display)) - c
            )
          );
        }
        return u;
      }
      function Ue(t, e) {
        if (e >= t.display.viewTo) return null;
        if ((e -= t.display.viewFrom) < 0) return null;
        for (var n = t.display.view, r = 0; r < n.length; r++)
          if ((e -= n[r].size) < 0) return r;
      }
      function Ke(t) {
        t.display.input.showSelection(t.display.input.prepareSelection());
      }
      function qe(t, e) {
        void 0 === e && (e = !0);
        for (
          var n = t.doc,
            i = {},
            o = (i.cursors = document.createDocumentFragment()),
            a = (i.selection = document.createDocumentFragment()),
            l = 0;
          l < n.sel.ranges.length;
          l++
        )
          if (e || l != n.sel.primIndex) {
            var s = n.sel.ranges[l];
            if (
              !(
                s.from().line >= t.display.viewTo ||
                s.to().line < t.display.viewFrom
              )
            ) {
              var u = s.empty();
              (u || t.options.showCursorWhenSelecting) && $e(t, s.head, o),
                u ||
                  (function(t, e, n) {
                    function i(t, e, n, i) {
                      e < 0 && (e = 0),
                        (e = Math.round(e)),
                        (i = Math.round(i)),
                        s.appendChild(
                          r(
                            'div',
                            null,
                            'CodeMirror-selected',
                            'position: absolute; left: ' +
                              t +
                              'px;\n                             top: ' +
                              e +
                              'px; width: ' +
                              (null == n ? f - t : n) +
                              'px;\n                             height: ' +
                              (i - e) +
                              'px'
                          )
                        );
                    }
                    function o(e, n, r) {
                      function o(n, r) {
                        return Ae(t, D(e, n), 'div', h, r);
                      }
                      function a(e, n, r) {
                        var i = je(t, h, null, e),
                          a = ('ltr' == n) == ('after' == r) ? 'left' : 'right';
                        return o(
                          'after' == r
                            ? i.begin
                            : i.end -
                              (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1),
                          a
                        )[a];
                      }
                      var s,
                        u,
                        h = T(l, e),
                        p = h.text.length,
                        v = dt(h, l.direction);
                      return (
                        (function(t, e, n, r) {
                          if (!t) return r(e, n, 'ltr', 0);
                          for (var i = !1, o = 0; o < t.length; ++o) {
                            var a = t[o];
                            ((a.from < n && a.to > e) ||
                              (e == n && a.to == e)) &&
                              (r(
                                Math.max(a.from, e),
                                Math.min(a.to, n),
                                1 == a.level ? 'rtl' : 'ltr',
                                o
                              ),
                              (i = !0));
                          }
                          i || r(e, n, 'ltr');
                        })(v, n || 0, null == r ? p : r, function(t, e, l, h) {
                          var g = 'ltr' == l,
                            m = o(t, g ? 'left' : 'right'),
                            y = o(e - 1, g ? 'right' : 'left'),
                            b = null == n && 0 == t,
                            w = null == r && e == p,
                            x = 0 == h,
                            S = !v || h == v.length - 1;
                          if (y.top - m.top <= 3) {
                            var C = (d ? w : b) && S,
                              k = (d ? b : w) && x ? c : (g ? m : y).left,
                              L = C ? f : (g ? y : m).right;
                            i(k, m.top, L - k, m.bottom);
                          } else {
                            var T, M, O, _;
                            g
                              ? ((T = d && b && x ? c : m.left),
                                (M = d ? f : a(t, l, 'before')),
                                (O = d ? c : a(e, l, 'after')),
                                (_ = d && w && S ? f : y.right))
                              : ((T = d ? a(t, l, 'before') : c),
                                (M = !d && b && x ? f : m.right),
                                (O = !d && w && S ? c : y.left),
                                (_ = d ? a(e, l, 'after') : f)),
                              i(T, m.top, M - T, m.bottom),
                              m.bottom < y.top && i(c, m.bottom, null, y.top),
                              i(O, y.top, _ - O, y.bottom);
                          }
                          (!s || Xe(m, s) < 0) && (s = m),
                            Xe(y, s) < 0 && (s = y),
                            (!u || Xe(m, u) < 0) && (u = m),
                            Xe(y, u) < 0 && (u = y);
                        }),
                        { start: s, end: u }
                      );
                    }
                    var a = t.display,
                      l = t.doc,
                      s = document.createDocumentFragment(),
                      u = fe(t.display),
                      c = u.left,
                      f =
                        Math.max(a.sizerWidth, he(t) - a.sizer.offsetLeft) -
                        u.right,
                      d = 'ltr' == l.direction;
                    var h = e.from(),
                      p = e.to();
                    if (h.line == p.line) o(h.line, h.ch, p.ch);
                    else {
                      var v = T(l, h.line),
                        g = T(l, p.line),
                        m = rt(v) == rt(g),
                        y = o(h.line, h.ch, m ? v.text.length + 1 : null).end,
                        b = o(p.line, m ? 0 : null, p.ch).start;
                      m &&
                        (y.top < b.top - 2
                          ? (i(y.right, y.top, null, y.bottom),
                            i(c, b.top, b.left, b.bottom))
                          : i(y.right, y.top, b.left - y.right, y.bottom)),
                        y.bottom < b.top && i(c, y.bottom, null, b.top);
                    }
                    n.appendChild(s);
                  })(t, s, a);
            }
          }
        return i;
      }
      function $e(t, e, n) {
        var i = Ne(
            t,
            e,
            'div',
            null,
            null,
            !t.options.singleCursorHeightPerLine
          ),
          o = n.appendChild(r('div', ' ', 'CodeMirror-cursor'));
        if (
          ((o.style.left = i.left + 'px'),
          (o.style.top = i.top + 'px'),
          (o.style.height =
            Math.max(0, i.bottom - i.top) * t.options.cursorHeight + 'px'),
          i.other)
        ) {
          var a = n.appendChild(
            r('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
          );
          (a.style.display = ''),
            (a.style.left = i.other.left + 'px'),
            (a.style.top = i.other.top + 'px'),
            (a.style.height = 0.85 * (i.other.bottom - i.other.top) + 'px');
        }
      }
      function Xe(t, e) {
        return t.top - e.top || t.left - e.left;
      }
      function Ye(t) {
        if (t.state.focused) {
          var e = t.display;
          clearInterval(e.blinker);
          var n = !0;
          (e.cursorDiv.style.visibility = ''),
            t.options.cursorBlinkRate > 0
              ? (e.blinker = setInterval(function() {
                  return (e.cursorDiv.style.visibility = (n = !n)
                    ? ''
                    : 'hidden');
                }, t.options.cursorBlinkRate))
              : t.options.cursorBlinkRate < 0 &&
                (e.cursorDiv.style.visibility = 'hidden');
        }
      }
      function Ze(t) {
        t.state.focused || (t.display.input.focus(), Qe(t));
      }
      function Je(t) {
        (t.state.delayingBlurEvent = !0),
          setTimeout(function() {
            t.state.delayingBlurEvent &&
              ((t.state.delayingBlurEvent = !1), tn(t));
          }, 100);
      }
      function Qe(t, e) {
        t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1),
          'nocursor' != t.options.readOnly &&
            (t.state.focused ||
              (vt(t, 'focus', t, e),
              (t.state.focused = !0),
              s(t.display.wrapper, 'CodeMirror-focused'),
              t.curOp ||
                t.display.selForContextMenu == t.doc.sel ||
                (t.display.input.reset(),
                Ki &&
                  setTimeout(function() {
                    return t.display.input.reset(!0);
                  }, 20)),
              t.display.input.receivedFocus()),
            Ye(t));
      }
      function tn(t, e) {
        t.state.delayingBlurEvent ||
          (t.state.focused &&
            (vt(t, 'blur', t, e),
            (t.state.focused = !1),
            uo(t.display.wrapper, 'CodeMirror-focused')),
          clearInterval(t.display.blinker),
          setTimeout(function() {
            t.state.focused || (t.display.shift = !1);
          }, 150));
      }
      function en(t) {
        for (
          var e = t.display, n = e.lineDiv.offsetTop, r = 0;
          r < e.view.length;
          r++
        ) {
          var i = e.view[r],
            o = void 0;
          if (!i.hidden) {
            if (Vi && Ui < 8) {
              var a = i.node.offsetTop + i.node.offsetHeight;
              (o = a - n), (n = a);
            } else {
              var l = i.node.getBoundingClientRect();
              o = l.bottom - l.top;
            }
            var s = i.line.height - o;
            if (
              (o < 2 && (o = He(e)),
              (s > 0.005 || s < -0.005) && (_(i.line, o), nn(i.line), i.rest))
            )
              for (var u = 0; u < i.rest.length; u++) nn(i.rest[u]);
          }
        }
      }
      function nn(t) {
        if (t.widgets)
          for (var e = 0; e < t.widgets.length; ++e)
            t.widgets[e].height = t.widgets[e].node.parentNode.offsetHeight;
      }
      function rn(t, e, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : t.scroller.scrollTop;
        r = Math.floor(r - ue(t));
        var i = n && null != n.bottom ? n.bottom : r + t.wrapper.clientHeight,
          o = N(e, r),
          a = N(e, i);
        if (n && n.ensure) {
          var l = n.ensure.from.line,
            s = n.ensure.to.line;
          l < o
            ? ((o = l), (a = N(e, st(T(e, l)) + t.wrapper.clientHeight)))
            : Math.min(s, e.lastLine()) >= a &&
              ((o = N(e, st(T(e, s)) - t.wrapper.clientHeight)), (a = s));
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function on(t) {
        var e = t.display,
          n = e.view;
        if (e.alignWidgets || (e.gutters.firstChild && t.options.fixedGutter)) {
          for (
            var r = Re(e) - e.scroller.scrollLeft + t.doc.scrollLeft,
              i = e.gutters.offsetWidth,
              o = r + 'px',
              a = 0;
            a < n.length;
            a++
          )
            if (!n[a].hidden) {
              t.options.fixedGutter &&
                (n[a].gutter && (n[a].gutter.style.left = o),
                n[a].gutterBackground &&
                  (n[a].gutterBackground.style.left = o));
              var l = n[a].alignable;
              if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
            }
          t.options.fixedGutter && (e.gutters.style.left = r + i + 'px');
        }
      }
      function an(t) {
        if (!t.options.lineNumbers) return !1;
        var e = t.doc,
          n = P(t.options, e.first + e.size - 1),
          i = t.display;
        if (n.length != i.lineNumChars) {
          var o = i.measure.appendChild(
              r(
                'div',
                [r('div', n)],
                'CodeMirror-linenumber CodeMirror-gutter-elt'
              )
            ),
            a = o.firstChild.offsetWidth,
            l = o.offsetWidth - a;
          return (
            (i.lineGutter.style.width = ''),
            (i.lineNumInnerWidth =
              Math.max(a, i.lineGutter.offsetWidth - l) + 1),
            (i.lineNumWidth = i.lineNumInnerWidth + l),
            (i.lineNumChars = i.lineNumInnerWidth ? n.length : -1),
            (i.lineGutter.style.width = i.lineNumWidth + 'px'),
            jn(t),
            !0
          );
        }
        return !1;
      }
      function ln(t, e) {
        var n = t.display,
          r = He(t.display);
        e.top < 0 && (e.top = 0);
        var i =
            t.curOp && null != t.curOp.scrollTop
              ? t.curOp.scrollTop
              : n.scroller.scrollTop,
          o = pe(t),
          a = {};
        e.bottom - e.top > o && (e.bottom = e.top + o);
        var l = t.doc.height + ce(n),
          s = e.top < r,
          u = e.bottom > l - r;
        if (e.top < i) a.scrollTop = s ? 0 : e.top;
        else if (e.bottom > i + o) {
          var c = Math.min(e.top, (u ? l : e.bottom) - o);
          c != i && (a.scrollTop = c);
        }
        var f =
            t.curOp && null != t.curOp.scrollLeft
              ? t.curOp.scrollLeft
              : n.scroller.scrollLeft,
          d = he(t) - (t.options.fixedGutter ? n.gutters.offsetWidth : 0),
          h = e.right - e.left > d;
        return (
          h && (e.right = e.left + d),
          e.left < 10
            ? (a.scrollLeft = 0)
            : e.left < f
              ? (a.scrollLeft = Math.max(0, e.left - (h ? 0 : 10)))
              : e.right > d + f - 3 &&
                (a.scrollLeft = e.right + (h ? 0 : 10) - d),
          a
        );
      }
      function sn(t, e) {
        null != e &&
          (fn(t),
          (t.curOp.scrollTop =
            (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) +
            e));
      }
      function un(t) {
        fn(t);
        var e = t.getCursor();
        t.curOp.scrollToPos = {
          from: e,
          to: e,
          margin: t.options.cursorScrollMargin,
        };
      }
      function cn(t, e, n) {
        (null == e && null == n) || fn(t),
          null != e && (t.curOp.scrollLeft = e),
          null != n && (t.curOp.scrollTop = n);
      }
      function fn(t) {
        var e = t.curOp.scrollToPos;
        if (e) {
          t.curOp.scrollToPos = null;
          dn(t, Ee(t, e.from), Ee(t, e.to), e.margin);
        }
      }
      function dn(t, e, n, r) {
        var i = ln(t, {
          left: Math.min(e.left, n.left),
          top: Math.min(e.top, n.top) - r,
          right: Math.max(e.right, n.right),
          bottom: Math.max(e.bottom, n.bottom) + r,
        });
        cn(t, i.scrollLeft, i.scrollTop);
      }
      function hn(t, e) {
        Math.abs(t.doc.scrollTop - e) < 2 ||
          (Ii || Wn(t, { top: e }), pn(t, e, !0), Ii && Wn(t), Nn(t, 100));
      }
      function pn(t, e, n) {
        (e = Math.min(
          t.display.scroller.scrollHeight - t.display.scroller.clientHeight,
          e
        )),
          (t.display.scroller.scrollTop != e || n) &&
            ((t.doc.scrollTop = e),
            t.display.scrollbars.setScrollTop(e),
            t.display.scroller.scrollTop != e &&
              (t.display.scroller.scrollTop = e));
      }
      function vn(t, e, n, r) {
        (e = Math.min(
          e,
          t.display.scroller.scrollWidth - t.display.scroller.clientWidth
        )),
          ((n ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) &&
            !r) ||
            ((t.doc.scrollLeft = e),
            on(t),
            t.display.scroller.scrollLeft != e &&
              (t.display.scroller.scrollLeft = e),
            t.display.scrollbars.setScrollLeft(e));
      }
      function gn(t) {
        var e = t.display,
          n = e.gutters.offsetWidth,
          r = Math.round(t.doc.height + ce(t.display));
        return {
          clientHeight: e.scroller.clientHeight,
          viewHeight: e.wrapper.clientHeight,
          scrollWidth: e.scroller.scrollWidth,
          clientWidth: e.scroller.clientWidth,
          viewWidth: e.wrapper.clientWidth,
          barLeft: t.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + de(t) + e.barHeight,
          nativeBarWidth: e.nativeBarWidth,
          gutterWidth: n,
        };
      }
      function mn(t, e) {
        e || (e = gn(t));
        var n = t.display.barWidth,
          r = t.display.barHeight;
        yn(t, e);
        for (
          var i = 0;
          (i < 4 && n != t.display.barWidth) || r != t.display.barHeight;
          i++
        )
          n != t.display.barWidth && t.options.lineWrapping && en(t),
            yn(t, gn(t)),
            (n = t.display.barWidth),
            (r = t.display.barHeight);
      }
      function yn(t, e) {
        var n = t.display,
          r = n.scrollbars.update(e);
        (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
          (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
          (n.heightForcer.style.borderBottom =
            r.bottom + 'px solid transparent'),
          r.right && r.bottom
            ? ((n.scrollbarFiller.style.display = 'block'),
              (n.scrollbarFiller.style.height = r.bottom + 'px'),
              (n.scrollbarFiller.style.width = r.right + 'px'))
            : (n.scrollbarFiller.style.display = ''),
          r.bottom &&
          t.options.coverGutterNextToScrollbar &&
          t.options.fixedGutter
            ? ((n.gutterFiller.style.display = 'block'),
              (n.gutterFiller.style.height = r.bottom + 'px'),
              (n.gutterFiller.style.width = e.gutterWidth + 'px'))
            : (n.gutterFiller.style.display = '');
      }
      function bn(t) {
        t.display.scrollbars &&
          (t.display.scrollbars.clear(),
          t.display.scrollbars.addClass &&
            uo(t.display.wrapper, t.display.scrollbars.addClass)),
          (t.display.scrollbars = new Yo[t.options.scrollbarStyle](
            function(e) {
              t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
                Oo(e, 'mousedown', function() {
                  t.state.focused &&
                    setTimeout(function() {
                      return t.display.input.focus();
                    }, 0);
                }),
                e.setAttribute('cm-not-content', 'true');
            },
            function(e, n) {
              'horizontal' == n ? vn(t, e) : hn(t, e);
            },
            t
          )),
          t.display.scrollbars.addClass &&
            s(t.display.wrapper, t.display.scrollbars.addClass);
      }
      function wn(t) {
        (t.curOp = {
          cm: t,
          viewChanged: !1,
          startHeight: t.doc.height,
          forceUpdate: !1,
          updateInput: null,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Zo,
        }),
          (function(t) {
            Uo
              ? Uo.ops.push(t)
              : (t.ownsGroup = Uo = { ops: [t], delayedCallbacks: [] });
          })(t.curOp);
      }
      function xn(t) {
        !(function(t, e) {
          var n = t.ownsGroup;
          if (n)
            try {
              !(function(t) {
                var e = t.delayedCallbacks,
                  n = 0;
                do {
                  for (; n < e.length; n++) e[n].call(null);
                  for (var r = 0; r < t.ops.length; r++) {
                    var i = t.ops[r];
                    if (i.cursorActivityHandlers)
                      for (
                        ;
                        i.cursorActivityCalled <
                        i.cursorActivityHandlers.length;

                      )
                        i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                          null,
                          i.cm
                        );
                  }
                } while (n < e.length);
              })(n);
            } finally {
              (Uo = null), e(n);
            }
        })(t.curOp, function(t) {
          for (var e = 0; e < t.ops.length; e++) t.ops[e].cm.curOp = null;
          !(function(t) {
            for (var e = t.ops, n = 0; n < e.length; n++)
              !(function(t) {
                var e = t.cm,
                  n = e.display;
                (function(t) {
                  var e = t.display;
                  !e.scrollbarsClipped &&
                    e.scroller.offsetWidth &&
                    ((e.nativeBarWidth =
                      e.scroller.offsetWidth - e.scroller.clientWidth),
                    (e.heightForcer.style.height = de(t) + 'px'),
                    (e.sizer.style.marginBottom = -e.nativeBarWidth + 'px'),
                    (e.sizer.style.borderRightWidth = de(t) + 'px'),
                    (e.scrollbarsClipped = !0));
                })(e),
                  t.updateMaxLine && ct(e);
                (t.mustUpdate =
                  t.viewChanged ||
                  t.forceUpdate ||
                  null != t.scrollTop ||
                  (t.scrollToPos &&
                    (t.scrollToPos.from.line < n.viewFrom ||
                      t.scrollToPos.to.line >= n.viewTo)) ||
                  (n.maxLineChanged && e.options.lineWrapping)),
                  (t.update =
                    t.mustUpdate &&
                    new Jo(
                      e,
                      t.mustUpdate && {
                        top: t.scrollTop,
                        ensure: t.scrollToPos,
                      },
                      t.forceUpdate
                    ));
              })(e[n]);
            for (var i = 0; i < e.length; i++)
              !(function(t) {
                t.updatedDisplay = t.mustUpdate && Pn(t.cm, t.update);
              })(e[i]);
            for (var o = 0; o < e.length; o++)
              !(function(t) {
                var e = t.cm,
                  n = e.display;
                t.updatedDisplay && en(e);
                (t.barMeasure = gn(e)),
                  n.maxLineChanged &&
                    !e.options.lineWrapping &&
                    ((t.adjustWidthTo =
                      ge(e, n.maxLine, n.maxLine.text.length).left + 3),
                    (e.display.sizerWidth = t.adjustWidthTo),
                    (t.barMeasure.scrollWidth = Math.max(
                      n.scroller.clientWidth,
                      n.sizer.offsetLeft +
                        t.adjustWidthTo +
                        de(e) +
                        e.display.barWidth
                    )),
                    (t.maxScrollLeft = Math.max(
                      0,
                      n.sizer.offsetLeft + t.adjustWidthTo - he(e)
                    )));
                (t.updatedDisplay || t.selectionChanged) &&
                  (t.preparedSelection = n.input.prepareSelection());
              })(e[o]);
            for (var a = 0; a < e.length; a++)
              !(function(t) {
                var e = t.cm;
                null != t.adjustWidthTo &&
                  ((e.display.sizer.style.minWidth = t.adjustWidthTo + 'px'),
                  t.maxScrollLeft < e.doc.scrollLeft &&
                    vn(
                      e,
                      Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft),
                      !0
                    ),
                  (e.display.maxLineChanged = !1));
                var n = t.focus && t.focus == l();
                t.preparedSelection &&
                  e.display.input.showSelection(t.preparedSelection, n);
                (t.updatedDisplay || t.startHeight != e.doc.height) &&
                  mn(e, t.barMeasure);
                t.updatedDisplay && Fn(e, t.barMeasure);
                t.selectionChanged && Ye(e);
                e.state.focused &&
                  t.updateInput &&
                  e.display.input.reset(t.typing);
                n && Ze(t.cm);
              })(e[a]);
            for (var s = 0; s < e.length; s++)
              !(function(t) {
                var e = t.cm,
                  n = e.display,
                  i = e.doc;
                t.updatedDisplay && Dn(e, t.update);
                null == n.wheelStartX ||
                  (null == t.scrollTop &&
                    null == t.scrollLeft &&
                    !t.scrollToPos) ||
                  (n.wheelStartX = n.wheelStartY = null);
                null != t.scrollTop && pn(e, t.scrollTop, t.forceScroll);
                null != t.scrollLeft && vn(e, t.scrollLeft, !0, !0);
                if (t.scrollToPos) {
                  var o = (function(t, e, n, r) {
                    null == r && (r = 0);
                    var i;
                    t.options.lineWrapping ||
                      e != n ||
                      (n =
                        'before' ==
                        (e = e.ch
                          ? D(
                              e.line,
                              'before' == e.sticky ? e.ch - 1 : e.ch,
                              'after'
                            )
                          : e).sticky
                          ? D(e.line, e.ch + 1, 'before')
                          : e);
                    for (var o = 0; o < 5; o++) {
                      var a = !1,
                        l = Ne(t, e),
                        s = n && n != e ? Ne(t, n) : l,
                        u = ln(
                          t,
                          (i = {
                            left: Math.min(l.left, s.left),
                            top: Math.min(l.top, s.top) - r,
                            right: Math.max(l.left, s.left),
                            bottom: Math.max(l.bottom, s.bottom) + r,
                          })
                        ),
                        c = t.doc.scrollTop,
                        f = t.doc.scrollLeft;
                      if (
                        (null != u.scrollTop &&
                          (hn(t, u.scrollTop),
                          Math.abs(t.doc.scrollTop - c) > 1 && (a = !0)),
                        null != u.scrollLeft &&
                          (vn(t, u.scrollLeft),
                          Math.abs(t.doc.scrollLeft - f) > 1 && (a = !0)),
                        !a)
                      )
                        break;
                    }
                    return i;
                  })(
                    e,
                    R(i, t.scrollToPos.from),
                    R(i, t.scrollToPos.to),
                    t.scrollToPos.margin
                  );
                  !(function(t, e) {
                    if (!gt(t, 'scrollCursorIntoView')) {
                      var n = t.display,
                        i = n.sizer.getBoundingClientRect(),
                        o = null;
                      if (
                        (e.top + i.top < 0
                          ? (o = !0)
                          : e.bottom + i.top >
                              (window.innerHeight ||
                                document.documentElement.clientHeight) &&
                            (o = !1),
                        null != o && !Ji)
                      ) {
                        var a = r(
                          'div',
                          '​',
                          null,
                          'position: absolute;\n                         top: ' +
                            (e.top - n.viewOffset - ue(t.display)) +
                            'px;\n                         height: ' +
                            (e.bottom - e.top + de(t) + n.barHeight) +
                            'px;\n                         left: ' +
                            e.left +
                            'px; width: ' +
                            Math.max(2, e.right - e.left) +
                            'px;'
                        );
                        t.display.lineSpace.appendChild(a),
                          a.scrollIntoView(o),
                          t.display.lineSpace.removeChild(a);
                      }
                    }
                  })(e, o);
                }
                var a = t.maybeHiddenMarkers,
                  l = t.maybeUnhiddenMarkers;
                if (a)
                  for (var s = 0; s < a.length; ++s)
                    a[s].lines.length || vt(a[s], 'hide');
                if (l)
                  for (var u = 0; u < l.length; ++u)
                    l[u].lines.length && vt(l[u], 'unhide');
                n.wrapper.offsetHeight &&
                  (i.scrollTop = e.display.scroller.scrollTop);
                t.changeObjs && vt(e, 'changes', e, t.changeObjs);
                t.update && t.update.finish();
              })(e[s]);
          })(t);
        });
      }
      function Sn(t, e) {
        if (t.curOp) return e();
        wn(t);
        try {
          return e();
        } finally {
          xn(t);
        }
      }
      function Cn(t, e) {
        return function() {
          if (t.curOp) return e.apply(t, arguments);
          wn(t);
          try {
            return e.apply(t, arguments);
          } finally {
            xn(t);
          }
        };
      }
      function kn(t) {
        return function() {
          if (this.curOp) return t.apply(this, arguments);
          wn(this);
          try {
            return t.apply(this, arguments);
          } finally {
            xn(this);
          }
        };
      }
      function Ln(t) {
        return function() {
          var e = this.cm;
          if (!e || e.curOp) return t.apply(this, arguments);
          wn(e);
          try {
            return t.apply(this, arguments);
          } finally {
            xn(e);
          }
        };
      }
      function Tn(t, e, n, r) {
        null == e && (e = t.doc.first),
          null == n && (n = t.doc.first + t.doc.size),
          r || (r = 0);
        var i = t.display;
        if (
          (r &&
            n < i.viewTo &&
            (null == i.updateLineNumbers || i.updateLineNumbers > e) &&
            (i.updateLineNumbers = e),
          (t.curOp.viewChanged = !0),
          e >= i.viewTo)
        )
          ko && it(t.doc, e) < i.viewTo && On(t);
        else if (n <= i.viewFrom)
          ko && ot(t.doc, n + r) > i.viewFrom
            ? On(t)
            : ((i.viewFrom += r), (i.viewTo += r));
        else if (e <= i.viewFrom && n >= i.viewTo) On(t);
        else if (e <= i.viewFrom) {
          var o = _n(t, n, n + r, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += r))
            : On(t);
        } else if (n >= i.viewTo) {
          var a = _n(t, e, e, -1);
          a
            ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
            : On(t);
        } else {
          var l = _n(t, e, e, -1),
            s = _n(t, n, n + r, 1);
          l && s
            ? ((i.view = i.view
                .slice(0, l.index)
                .concat(Yt(t, l.lineN, s.lineN))
                .concat(i.view.slice(s.index))),
              (i.viewTo += r))
            : On(t);
        }
        var u = i.externalMeasured;
        u &&
          (n < u.lineN
            ? (u.lineN += r)
            : e < u.lineN + u.size && (i.externalMeasured = null));
      }
      function Mn(t, e, n) {
        t.curOp.viewChanged = !0;
        var r = t.display,
          i = t.display.externalMeasured;
        if (
          (i &&
            e >= i.lineN &&
            e < i.lineN + i.size &&
            (r.externalMeasured = null),
          !(e < r.viewFrom || e >= r.viewTo))
        ) {
          var o = r.view[Ue(t, e)];
          if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == h(a, n) && a.push(n);
          }
        }
      }
      function On(t) {
        (t.display.viewFrom = t.display.viewTo = t.doc.first),
          (t.display.view = []),
          (t.display.viewOffset = 0);
      }
      function _n(t, e, n, r) {
        var i,
          o = Ue(t, e),
          a = t.display.view;
        if (!ko || n == t.doc.first + t.doc.size) return { index: o, lineN: n };
        for (var l = t.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
        if (l != e) {
          if (r > 0) {
            if (o == a.length - 1) return null;
            (i = l + a[o].size - e), o++;
          } else i = l - e;
          (e += i), (n += i);
        }
        for (; it(t.doc, n) != n; ) {
          if (o == (r < 0 ? 0 : a.length - 1)) return null;
          (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
        }
        return { index: o, lineN: n };
      }
      function An(t) {
        for (var e = t.display.view, n = 0, r = 0; r < e.length; r++) {
          var i = e[r];
          i.hidden || (i.node && !i.changes) || ++n;
        }
        return n;
      }
      function Nn(t, e) {
        t.doc.highlightFrontier < t.display.viewTo &&
          t.state.highlight.set(e, c(En, t));
      }
      function En(t) {
        var e = t.doc;
        if (!(e.highlightFrontier >= t.display.viewTo)) {
          var n = +new Date() + t.options.workTime,
            r = jt(t, e.highlightFrontier),
            i = [];
          e.iter(
            r.line,
            Math.min(e.first + e.size, t.display.viewTo + 500),
            function(o) {
              if (r.line >= t.display.viewFrom) {
                var a = o.styles,
                  l =
                    o.text.length > t.options.maxHighlightLength
                      ? Nt(e.mode, r.state)
                      : null,
                  s = Dt(t, o, r, !0);
                l && (r.state = l), (o.styles = s.styles);
                var u = o.styleClasses,
                  c = s.classes;
                c ? (o.styleClasses = c) : u && (o.styleClasses = null);
                for (
                  var f =
                      !a ||
                      a.length != o.styles.length ||
                      (u != c &&
                        (!u ||
                          !c ||
                          u.bgClass != c.bgClass ||
                          u.textClass != c.textClass)),
                    d = 0;
                  !f && d < a.length;
                  ++d
                )
                  f = a[d] != o.styles[d];
                f && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
              } else
                o.text.length <= t.options.maxHighlightLength &&
                  Ft(t, o.text, r),
                  (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                  r.nextLine();
              if (+new Date() > n) return Nn(t, t.options.workDelay), !0;
            }
          ),
            (e.highlightFrontier = r.line),
            (e.modeFrontier = Math.max(e.modeFrontier, r.line)),
            i.length &&
              Sn(t, function() {
                for (var e = 0; e < i.length; e++) Mn(t, i[e], 'text');
              });
        }
      }
      function Pn(t, n) {
        var r = t.display,
          i = t.doc;
        if (n.editorIsHidden) return On(t), !1;
        if (
          !n.force &&
          n.visible.from >= r.viewFrom &&
          n.visible.to <= r.viewTo &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
          r.renderedView == r.view &&
          0 == An(t)
        )
          return !1;
        an(t) && (On(t), (n.dims = Ie(t)));
        var o = i.first + i.size,
          s = Math.max(n.visible.from - t.options.viewportMargin, i.first),
          u = Math.min(o, n.visible.to + t.options.viewportMargin);
        r.viewFrom < s &&
          s - r.viewFrom < 20 &&
          (s = Math.max(i.first, r.viewFrom)),
          r.viewTo > u && r.viewTo - u < 20 && (u = Math.min(o, r.viewTo)),
          ko && ((s = it(t.doc, s)), (u = ot(t.doc, u)));
        var c =
          s != r.viewFrom ||
          u != r.viewTo ||
          r.lastWrapHeight != n.wrapperHeight ||
          r.lastWrapWidth != n.wrapperWidth;
        !(function(t, e, n) {
          var r = t.display;
          0 == r.view.length || e >= r.viewTo || n <= r.viewFrom
            ? ((r.view = Yt(t, e, n)), (r.viewFrom = e))
            : (r.viewFrom > e
                ? (r.view = Yt(t, e, r.viewFrom).concat(r.view))
                : r.viewFrom < e && (r.view = r.view.slice(Ue(t, e))),
              (r.viewFrom = e),
              r.viewTo < n
                ? (r.view = r.view.concat(Yt(t, r.viewTo, n)))
                : r.viewTo > n && (r.view = r.view.slice(0, Ue(t, n)))),
            (r.viewTo = n);
        })(t, s, u),
          (r.viewOffset = st(T(t.doc, r.viewFrom))),
          (t.display.mover.style.top = r.viewOffset + 'px');
        var f = An(t);
        if (
          !c &&
          0 == f &&
          !n.force &&
          r.renderedView == r.view &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)
        )
          return !1;
        var d = (function(t) {
          if (t.hasFocus()) return null;
          var e = l();
          if (!e || !a(t.display.lineDiv, e)) return null;
          var n = { activeElt: e };
          if (window.getSelection) {
            var r = window.getSelection();
            r.anchorNode &&
              r.extend &&
              a(t.display.lineDiv, r.anchorNode) &&
              ((n.anchorNode = r.anchorNode),
              (n.anchorOffset = r.anchorOffset),
              (n.focusNode = r.focusNode),
              (n.focusOffset = r.focusOffset));
          }
          return n;
        })(t);
        return (
          f > 4 && (r.lineDiv.style.display = 'none'),
          (function(t, n, r) {
            function i(e) {
              var n = e.nextSibling;
              return (
                Ki && no && t.display.currentWheelTarget == e
                  ? (e.style.display = 'none')
                  : e.parentNode.removeChild(e),
                n
              );
            }
            var o = t.display,
              a = t.options.lineNumbers,
              l = o.lineDiv,
              s = l.firstChild;
            for (var u = o.view, c = o.viewFrom, f = 0; f < u.length; f++) {
              var d = u[f];
              if (d.hidden);
              else if (d.node && d.node.parentNode == l) {
                for (; s != d.node; ) s = i(s);
                var p = a && null != n && n <= c && d.lineNumber;
                d.changes &&
                  (h(d.changes, 'gutter') > -1 && (p = !1), Qt(t, d, c, r)),
                  p &&
                    (e(d.lineNumber),
                    d.lineNumber.appendChild(
                      document.createTextNode(P(t.options, c))
                    )),
                  (s = d.node.nextSibling);
              } else {
                var v = ie(t, d, c, r);
                l.insertBefore(v, s);
              }
              c += d.size;
            }
            for (; s; ) s = i(s);
          })(t, r.updateLineNumbers, n.dims),
          f > 4 && (r.lineDiv.style.display = ''),
          (r.renderedView = r.view),
          (function(t) {
            if (
              t &&
              t.activeElt &&
              t.activeElt != l() &&
              (t.activeElt.focus(),
              t.anchorNode &&
                a(document.body, t.anchorNode) &&
                a(document.body, t.focusNode))
            ) {
              var e = window.getSelection(),
                n = document.createRange();
              n.setEnd(t.anchorNode, t.anchorOffset),
                n.collapse(!1),
                e.removeAllRanges(),
                e.addRange(n),
                e.extend(t.focusNode, t.focusOffset);
            }
          })(d),
          e(r.cursorDiv),
          e(r.selectionDiv),
          (r.gutters.style.height = r.sizer.style.minHeight = 0),
          c &&
            ((r.lastWrapHeight = n.wrapperHeight),
            (r.lastWrapWidth = n.wrapperWidth),
            Nn(t, 400)),
          (r.updateLineNumbers = null),
          !0
        );
      }
      function Dn(t, e) {
        for (
          var n = e.viewport, r = !0;
          ((r && t.options.lineWrapping && e.oldDisplayWidth != he(t)) ||
            (n &&
              null != n.top &&
              (n = {
                top: Math.min(t.doc.height + ce(t.display) - pe(t), n.top),
              }),
            (e.visible = rn(t.display, t.doc, n)),
            !(
              e.visible.from >= t.display.viewFrom &&
              e.visible.to <= t.display.viewTo
            ))) &&
          Pn(t, e);
          r = !1
        ) {
          en(t);
          var i = gn(t);
          Ke(t), mn(t, i), Fn(t, i), (e.force = !1);
        }
        e.signal(t, 'update', t),
          (t.display.viewFrom == t.display.reportedViewFrom &&
            t.display.viewTo == t.display.reportedViewTo) ||
            (e.signal(
              t,
              'viewportChange',
              t,
              t.display.viewFrom,
              t.display.viewTo
            ),
            (t.display.reportedViewFrom = t.display.viewFrom),
            (t.display.reportedViewTo = t.display.viewTo));
      }
      function Wn(t, e) {
        var n = new Jo(t, e);
        if (Pn(t, n)) {
          en(t), Dn(t, n);
          var r = gn(t);
          Ke(t), mn(t, r), Fn(t, r), n.finish();
        }
      }
      function jn(t) {
        var e = t.display.gutters.offsetWidth;
        t.display.sizer.style.marginLeft = e + 'px';
      }
      function Fn(t, e) {
        (t.display.sizer.style.minHeight = e.docHeight + 'px'),
          (t.display.heightForcer.style.top = e.docHeight + 'px'),
          (t.display.gutters.style.height =
            e.docHeight + t.display.barHeight + de(t) + 'px');
      }
      function Hn(t) {
        var n = t.display.gutters,
          i = t.options.gutters;
        e(n);
        for (var o = 0; o < i.length; ++o) {
          var a = i[o],
            l = n.appendChild(r('div', null, 'CodeMirror-gutter ' + a));
          'CodeMirror-linenumbers' == a &&
            ((t.display.lineGutter = l),
            (l.style.width = (t.display.lineNumWidth || 1) + 'px'));
        }
        (n.style.display = o ? '' : 'none'), jn(t);
      }
      function zn(t) {
        var e = h(t.gutters, 'CodeMirror-linenumbers');
        -1 == e && t.lineNumbers
          ? (t.gutters = t.gutters.concat(['CodeMirror-linenumbers']))
          : e > -1 &&
            !t.lineNumbers &&
            ((t.gutters = t.gutters.slice(0)), t.gutters.splice(e, 1));
      }
      function In(t) {
        var e = t.wheelDeltaX,
          n = t.wheelDeltaY;
        return (
          null == e &&
            t.detail &&
            t.axis == t.HORIZONTAL_AXIS &&
            (e = t.detail),
          null == n && t.detail && t.axis == t.VERTICAL_AXIS
            ? (n = t.detail)
            : null == n && (n = t.wheelDelta),
          { x: e, y: n }
        );
      }
      function Rn(t) {
        var e = In(t);
        return (e.x *= ta), (e.y *= ta), e;
      }
      function Bn(t, e) {
        var n = In(e),
          r = n.x,
          i = n.y,
          o = t.display,
          a = o.scroller,
          l = a.scrollWidth > a.clientWidth,
          s = a.scrollHeight > a.clientHeight;
        if ((r && l) || (i && s)) {
          if (i && no && Ki)
            t: for (var u = e.target, c = o.view; u != a; u = u.parentNode)
              for (var f = 0; f < c.length; f++)
                if (c[f].node == u) {
                  t.display.currentWheelTarget = u;
                  break t;
                }
          if (r && !Ii && !Xi && null != ta)
            return (
              i && s && hn(t, Math.max(0, a.scrollTop + i * ta)),
              vn(t, Math.max(0, a.scrollLeft + r * ta)),
              (!i || (i && s)) && wt(e),
              void (o.wheelStartX = null)
            );
          if (i && null != ta) {
            var d = i * ta,
              h = t.doc.scrollTop,
              p = h + o.wrapper.clientHeight;
            d < 0
              ? (h = Math.max(0, h + d - 50))
              : (p = Math.min(t.doc.height, p + d + 50)),
              Wn(t, { top: h, bottom: p });
          }
          Qo < 20 &&
            (null == o.wheelStartX
              ? ((o.wheelStartX = a.scrollLeft),
                (o.wheelStartY = a.scrollTop),
                (o.wheelDX = r),
                (o.wheelDY = i),
                setTimeout(function() {
                  if (null != o.wheelStartX) {
                    var t = a.scrollLeft - o.wheelStartX,
                      e = a.scrollTop - o.wheelStartY,
                      n =
                        (e && o.wheelDY && e / o.wheelDY) ||
                        (t && o.wheelDX && t / o.wheelDX);
                    (o.wheelStartX = o.wheelStartY = null),
                      n && ((ta = (ta * Qo + n) / (Qo + 1)), ++Qo);
                  }
                }, 200))
              : ((o.wheelDX += r), (o.wheelDY += i)));
        }
      }
      function Gn(t, e) {
        var n = t[e];
        t.sort(function(t, e) {
          return W(t.from(), e.from());
        }),
          (e = h(t, n));
        for (var r = 1; r < t.length; r++) {
          var i = t[r],
            o = t[r - 1];
          if (W(o.to(), i.from()) >= 0) {
            var a = z(o.from(), i.from()),
              l = H(o.to(), i.to()),
              s = o.empty() ? i.from() == i.head : o.from() == o.head;
            r <= e && --e, t.splice(--r, 2, new na(s ? l : a, s ? a : l));
          }
        }
        return new ea(t, e);
      }
      function Vn(t, e) {
        return new ea([new na(t, e || t)], 0);
      }
      function Un(t) {
        return t.text
          ? D(
              t.from.line + t.text.length - 1,
              g(t.text).length + (1 == t.text.length ? t.from.ch : 0)
            )
          : t.to;
      }
      function Kn(t, e) {
        if (W(t, e.from) < 0) return t;
        if (W(t, e.to) <= 0) return Un(e);
        var n = t.line + e.text.length - (e.to.line - e.from.line) - 1,
          r = t.ch;
        return t.line == e.to.line && (r += Un(e).ch - e.to.ch), D(n, r);
      }
      function qn(t, e) {
        for (var n = [], r = 0; r < t.sel.ranges.length; r++) {
          var i = t.sel.ranges[r];
          n.push(new na(Kn(i.anchor, e), Kn(i.head, e)));
        }
        return Gn(n, t.sel.primIndex);
      }
      function $n(t, e, n) {
        return t.line == e.line
          ? D(n.line, t.ch - e.ch + n.ch)
          : D(n.line + (t.line - e.line), t.ch);
      }
      function Xn(t) {
        (t.doc.mode = _t(t.options, t.doc.modeOption)), Yn(t);
      }
      function Yn(t) {
        t.doc.iter(function(t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }),
          (t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first),
          Nn(t, 100),
          t.state.modeGen++,
          t.curOp && Tn(t);
      }
      function Zn(t, e) {
        return (
          0 == e.from.ch &&
          0 == e.to.ch &&
          '' == g(e.text) &&
          (!t.cm || t.cm.options.wholeLineUpdateBefore)
        );
      }
      function Jn(t, e, n, r) {
        function i(t) {
          return n ? n[t] : null;
        }
        function o(t, n, i) {
          !(function(t, e, n, r) {
            (t.text = e),
              t.stateAfter && (t.stateAfter = null),
              t.styles && (t.styles = null),
              null != t.order && (t.order = null),
              $(t),
              X(t, n);
            var i = r ? r(t) : 1;
            i != t.height && _(t, i);
          })(t, n, i, r),
            Zt(t, 'change', t, e);
        }
        function a(t, e) {
          for (var n = [], o = t; o < e; ++o) n.push(new Ro(u[o], i(o), r));
          return n;
        }
        var l = e.from,
          s = e.to,
          u = e.text,
          c = T(t, l.line),
          f = T(t, s.line),
          d = g(u),
          h = i(u.length - 1),
          p = s.line - l.line;
        if (e.full)
          t.insert(0, a(0, u.length)), t.remove(u.length, t.size - u.length);
        else if (Zn(t, e)) {
          var v = a(0, u.length - 1);
          o(f, f.text, h),
            p && t.remove(l.line, p),
            v.length && t.insert(l.line, v);
        } else if (c == f)
          if (1 == u.length)
            o(c, c.text.slice(0, l.ch) + d + c.text.slice(s.ch), h);
          else {
            var m = a(1, u.length - 1);
            m.push(new Ro(d + c.text.slice(s.ch), h, r)),
              o(c, c.text.slice(0, l.ch) + u[0], i(0)),
              t.insert(l.line + 1, m);
          }
        else if (1 == u.length)
          o(c, c.text.slice(0, l.ch) + u[0] + f.text.slice(s.ch), i(0)),
            t.remove(l.line + 1, p);
        else {
          o(c, c.text.slice(0, l.ch) + u[0], i(0)),
            o(f, d + f.text.slice(s.ch), h);
          var y = a(1, u.length - 1);
          p > 1 && t.remove(l.line + 1, p - 1), t.insert(l.line + 1, y);
        }
        Zt(t, 'change', t, e);
      }
      function Qn(t, e, n) {
        function r(t, i, o) {
          if (t.linked)
            for (var a = 0; a < t.linked.length; ++a) {
              var l = t.linked[a];
              if (l.doc != i) {
                var s = o && l.sharedHist;
                (n && !s) || (e(l.doc, s), r(l.doc, t, s));
              }
            }
        }
        r(t, null, !0);
      }
      function tr(t, e) {
        if (e.cm) throw new Error('This document is already in use.');
        (t.doc = e),
          (e.cm = t),
          Ge(t),
          Xn(t),
          er(t),
          t.options.lineWrapping || ct(t),
          (t.options.mode = e.modeOption),
          Tn(t);
      }
      function er(t) {
        ('rtl' == t.doc.direction
          ? s
          : uo)(t.display.lineDiv, 'CodeMirror-rtl');
      }
      function nr(t) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = t || 1);
      }
      function rr(t, e) {
        var n = { from: F(e.from), to: Un(e), text: M(t, e.from, e.to) };
        return (
          sr(t, n, e.from.line, e.to.line + 1),
          Qn(
            t,
            function(t) {
              return sr(t, n, e.from.line, e.to.line + 1);
            },
            !0
          ),
          n
        );
      }
      function ir(t) {
        for (; t.length; ) {
          if (!g(t).ranges) break;
          t.pop();
        }
      }
      function or(t, e, n, r) {
        var i = t.history;
        i.undone.length = 0;
        var o,
          a,
          l = +new Date();
        if (
          (i.lastOp == r ||
            (i.lastOrigin == e.origin &&
              e.origin &&
              (('+' == e.origin.charAt(0) &&
                t.cm &&
                i.lastModTime > l - t.cm.options.historyEventDelay) ||
                '*' == e.origin.charAt(0)))) &&
          (o = (function(t, e) {
            return e
              ? (ir(t.done), g(t.done))
              : t.done.length && !g(t.done).ranges
                ? g(t.done)
                : t.done.length > 1 && !t.done[t.done.length - 2].ranges
                  ? (t.done.pop(), g(t.done))
                  : void 0;
          })(i, i.lastOp == r))
        )
          (a = g(o.changes)),
            0 == W(e.from, e.to) && 0 == W(e.from, a.to)
              ? (a.to = Un(e))
              : o.changes.push(rr(t, e));
        else {
          var s = g(i.done);
          for (
            (s && s.ranges) || lr(t.sel, i.done),
              o = { changes: [rr(t, e)], generation: i.generation },
              i.done.push(o);
            i.done.length > i.undoDepth;

          )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(n),
          (i.generation = ++i.maxGeneration),
          (i.lastModTime = i.lastSelTime = l),
          (i.lastOp = i.lastSelOp = r),
          (i.lastOrigin = i.lastSelOrigin = e.origin),
          a || vt(t, 'historyAdded');
      }
      function ar(t, e, n, r) {
        var i = t.history,
          o = r && r.origin;
        n == i.lastSelOp ||
        (o &&
          i.lastSelOrigin == o &&
          ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
            (function(t, e, n, r) {
              var i = e.charAt(0);
              return (
                '*' == i ||
                ('+' == i &&
                  n.ranges.length == r.ranges.length &&
                  n.somethingSelected() == r.somethingSelected() &&
                  new Date() - t.history.lastSelTime <=
                    (t.cm ? t.cm.options.historyEventDelay : 500))
              );
            })(t, o, g(i.done), e)))
          ? (i.done[i.done.length - 1] = e)
          : lr(e, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = n),
          r && !1 !== r.clearRedo && ir(i.undone);
      }
      function lr(t, e) {
        var n = g(e);
        (n && n.ranges && n.equals(t)) || e.push(t);
      }
      function sr(t, e, n, r) {
        var i = e['spans_' + t.id],
          o = 0;
        t.iter(Math.max(t.first, n), Math.min(t.first + t.size, r), function(
          n
        ) {
          n.markedSpans &&
            ((i || (i = e['spans_' + t.id] = {}))[o] = n.markedSpans),
            ++o;
        });
      }
      function ur(t) {
        if (!t) return null;
        for (var e, n = 0; n < t.length; ++n)
          t[n].marker.explicitlyCleared
            ? e || (e = t.slice(0, n))
            : e && e.push(t[n]);
        return e ? (e.length ? e : null) : t;
      }
      function cr(t, e) {
        var n = (function(t, e) {
            var n = e['spans_' + t.id];
            if (!n) return null;
            for (var r = [], i = 0; i < e.text.length; ++i) r.push(ur(n[i]));
            return r;
          })(t, e),
          r = K(t, e);
        if (!n) return r;
        if (!r) return n;
        for (var i = 0; i < n.length; ++i) {
          var o = n[i],
            a = r[i];
          if (o && a)
            t: for (var l = 0; l < a.length; ++l) {
              for (var s = a[l], u = 0; u < o.length; ++u)
                if (o[u].marker == s.marker) continue t;
              o.push(s);
            }
          else a && (n[i] = a);
        }
        return n;
      }
      function fr(t, e, n) {
        for (var r = [], i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.ranges) r.push(n ? ea.prototype.deepCopy.call(o) : o);
          else {
            var a = o.changes,
              l = [];
            r.push({ changes: l });
            for (var s = 0; s < a.length; ++s) {
              var u = a[s],
                c = void 0;
              if ((l.push({ from: u.from, to: u.to, text: u.text }), e))
                for (var f in u)
                  (c = f.match(/^spans_(\d+)$/)) &&
                    h(e, Number(c[1])) > -1 &&
                    ((g(l)[f] = u[f]), delete u[f]);
            }
          }
        }
        return r;
      }
      function dr(t, e, n, r) {
        if (r) {
          var i = t.anchor;
          if (n) {
            var o = W(e, i) < 0;
            o != W(n, i) < 0 ? ((i = e), (e = n)) : o != W(e, n) < 0 && (e = n);
          }
          return new na(i, e);
        }
        return new na(n || e, e);
      }
      function hr(t, e, n, r, i) {
        null == i && (i = t.cm && (t.cm.display.shift || t.extend)),
          yr(t, new ea([dr(t.sel.primary(), e, n, i)], 0), r);
      }
      function pr(t, e, n) {
        for (
          var r = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0;
          o < t.sel.ranges.length;
          o++
        )
          r[o] = dr(t.sel.ranges[o], e[o], null, i);
        yr(t, Gn(r, t.sel.primIndex), n);
      }
      function vr(t, e, n, r) {
        var i = t.sel.ranges.slice(0);
        (i[e] = n), yr(t, Gn(i, t.sel.primIndex), r);
      }
      function gr(t, e, n, r) {
        yr(t, Vn(e, n), r);
      }
      function mr(t, e, n) {
        var r = t.history.done,
          i = g(r);
        i && i.ranges ? ((r[r.length - 1] = e), br(t, e, n)) : yr(t, e, n);
      }
      function yr(t, e, n) {
        br(t, e, n), ar(t, t.sel, t.cm ? t.cm.curOp.id : NaN, n);
      }
      function br(t, e, n) {
        (yt(t, 'beforeSelectionChange') ||
          (t.cm && yt(t.cm, 'beforeSelectionChange'))) &&
          (e = (function(t, e, n) {
            var r = {
              ranges: e.ranges,
              update: function(e) {
                var n = this;
                this.ranges = [];
                for (var r = 0; r < e.length; r++)
                  n.ranges[r] = new na(R(t, e[r].anchor), R(t, e[r].head));
              },
              origin: n && n.origin,
            };
            return (
              vt(t, 'beforeSelectionChange', t, r),
              t.cm && vt(t.cm, 'beforeSelectionChange', t.cm, r),
              r.ranges != e.ranges ? Gn(r.ranges, r.ranges.length - 1) : e
            );
          })(t, e, n));
        wr(
          t,
          Sr(
            t,
            e,
            (n && n.bias) ||
              (W(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1),
            !0
          )
        ),
          (n && !1 === n.scroll) || !t.cm || un(t.cm);
      }
      function wr(t, e) {
        e.equals(t.sel) ||
          ((t.sel = e),
          t.cm &&
            ((t.cm.curOp.updateInput = t.cm.curOp.selectionChanged = !0),
            mt(t.cm)),
          Zt(t, 'cursorActivity', t));
      }
      function xr(t) {
        wr(t, Sr(t, t.sel, null, !1));
      }
      function Sr(t, e, n, r) {
        for (var i, o = 0; o < e.ranges.length; o++) {
          var a = e.ranges[o],
            l = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o],
            s = kr(t, a.anchor, l && l.anchor, n, r),
            u = kr(t, a.head, l && l.head, n, r);
          (i || s != a.anchor || u != a.head) &&
            (i || (i = e.ranges.slice(0, o)), (i[o] = new na(s, u)));
        }
        return i ? Gn(i, e.primIndex) : e;
      }
      function Cr(t, e, n, r, i) {
        var o = T(t, e.line);
        if (o.markedSpans)
          for (var a = 0; a < o.markedSpans.length; ++a) {
            var l = o.markedSpans[a],
              s = l.marker;
            if (
              (null == l.from ||
                (s.inclusiveLeft ? l.from <= e.ch : l.from < e.ch)) &&
              (null == l.to || (s.inclusiveRight ? l.to >= e.ch : l.to > e.ch))
            ) {
              if (i && (vt(s, 'beforeCursorEnter'), s.explicitlyCleared)) {
                if (o.markedSpans) {
                  --a;
                  continue;
                }
                break;
              }
              if (!s.atomic) continue;
              if (n) {
                var u = s.find(r < 0 ? 1 : -1),
                  c = void 0;
                if (
                  ((r < 0 ? s.inclusiveRight : s.inclusiveLeft) &&
                    (u = Lr(t, u, -r, u && u.line == e.line ? o : null)),
                  u &&
                    u.line == e.line &&
                    (c = W(u, n)) &&
                    (r < 0 ? c < 0 : c > 0))
                )
                  return Cr(t, u, e, r, i);
              }
              var f = s.find(r < 0 ? -1 : 1);
              return (
                (r < 0 ? s.inclusiveLeft : s.inclusiveRight) &&
                  (f = Lr(t, f, r, f.line == e.line ? o : null)),
                f ? Cr(t, f, e, r, i) : null
              );
            }
          }
        return e;
      }
      function kr(t, e, n, r, i) {
        var o = r || 1,
          a =
            Cr(t, e, n, o, i) ||
            (!i && Cr(t, e, n, o, !0)) ||
            Cr(t, e, n, -o, i) ||
            (!i && Cr(t, e, n, -o, !0));
        return a || ((t.cantEdit = !0), D(t.first, 0));
      }
      function Lr(t, e, n, r) {
        return n < 0 && 0 == e.ch
          ? e.line > t.first ? R(t, D(e.line - 1)) : null
          : n > 0 && e.ch == (r || T(t, e.line)).text.length
            ? e.line < t.first + t.size - 1 ? D(e.line + 1, 0) : null
            : new D(e.line, e.ch + n);
      }
      function Tr(t) {
        t.setSelection(D(t.firstLine(), 0), D(t.lastLine()), mo);
      }
      function Mr(t, e, n) {
        var r = {
          canceled: !1,
          from: e.from,
          to: e.to,
          text: e.text,
          origin: e.origin,
          cancel: function() {
            return (r.canceled = !0);
          },
        };
        return (
          n &&
            (r.update = function(e, n, i, o) {
              e && (r.from = R(t, e)),
                n && (r.to = R(t, n)),
                i && (r.text = i),
                void 0 !== o && (r.origin = o);
            }),
          vt(t, 'beforeChange', t, r),
          t.cm && vt(t.cm, 'beforeChange', t.cm, r),
          r.canceled
            ? null
            : { from: r.from, to: r.to, text: r.text, origin: r.origin }
        );
      }
      function Or(t, e, n) {
        if (t.cm) {
          if (!t.cm.curOp) return Cn(t.cm, Or)(t, e, n);
          if (t.cm.state.suppressEdits) return;
        }
        if (
          !(yt(t, 'beforeChange') || (t.cm && yt(t.cm, 'beforeChange'))) ||
          (e = Mr(t, e, !0))
        ) {
          var r =
            Co &&
            !n &&
            (function(t, e, n) {
              var r = null;
              if (
                (t.iter(e.line, n.line + 1, function(t) {
                  if (t.markedSpans)
                    for (var e = 0; e < t.markedSpans.length; ++e) {
                      var n = t.markedSpans[e].marker;
                      !n.readOnly ||
                        (r && -1 != h(r, n)) ||
                        (r || (r = [])).push(n);
                    }
                }),
                !r)
              )
                return null;
              for (var i = [{ from: e, to: n }], o = 0; o < r.length; ++o)
                for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
                  var u = i[s];
                  if (!(W(u.to, l.from) < 0 || W(u.from, l.to) > 0)) {
                    var c = [s, 1],
                      f = W(u.from, l.from),
                      d = W(u.to, l.to);
                    (f < 0 || (!a.inclusiveLeft && !f)) &&
                      c.push({ from: u.from, to: l.from }),
                      (d > 0 || (!a.inclusiveRight && !d)) &&
                        c.push({ from: l.to, to: u.to }),
                      i.splice.apply(i, c),
                      (s += c.length - 3);
                  }
                }
              return i;
            })(t, e.from, e.to);
          if (r)
            for (var i = r.length - 1; i >= 0; --i)
              _r(t, {
                from: r[i].from,
                to: r[i].to,
                text: i ? [''] : e.text,
                origin: e.origin,
              });
          else _r(t, e);
        }
      }
      function _r(t, e) {
        if (1 != e.text.length || '' != e.text[0] || 0 != W(e.from, e.to)) {
          var n = qn(t, e);
          or(t, e, n, t.cm ? t.cm.curOp.id : NaN), Er(t, e, n, K(t, e));
          var r = [];
          Qn(t, function(t, n) {
            n || -1 != h(r, t.history) || (jr(t.history, e), r.push(t.history)),
              Er(t, e, null, K(t, e));
          });
        }
      }
      function Ar(t, e, n) {
        if (!t.cm || !t.cm.state.suppressEdits || n) {
          for (
            var r,
              i = t.history,
              o = t.sel,
              a = 'undo' == e ? i.done : i.undone,
              l = 'undo' == e ? i.undone : i.done,
              s = 0;
            s < a.length &&
            ((r = a[s]), n ? !r.ranges || r.equals(t.sel) : r.ranges);
            s++
          );
          if (s != a.length) {
            for (
              i.lastOrigin = i.lastSelOrigin = null;
              (r = a.pop()).ranges;

            ) {
              if ((lr(r, l), n && !r.equals(t.sel)))
                return void yr(t, r, { clearRedo: !1 });
              o = r;
            }
            var u = [];
            lr(o, l),
              l.push({ changes: u, generation: i.generation }),
              (i.generation = r.generation || ++i.maxGeneration);
            for (
              var c =
                  yt(t, 'beforeChange') || (t.cm && yt(t.cm, 'beforeChange')),
                f = function(n) {
                  var i = r.changes[n];
                  if (((i.origin = e), c && !Mr(t, i, !1)))
                    return (a.length = 0), {};
                  u.push(rr(t, i));
                  var o = n ? qn(t, i) : g(a);
                  Er(t, i, o, cr(t, i)),
                    !n &&
                      t.cm &&
                      t.cm.scrollIntoView({ from: i.from, to: Un(i) });
                  var l = [];
                  Qn(t, function(t, e) {
                    e ||
                      -1 != h(l, t.history) ||
                      (jr(t.history, i), l.push(t.history)),
                      Er(t, i, null, cr(t, i));
                  });
                },
                d = r.changes.length - 1;
              d >= 0;
              --d
            ) {
              var p = f(d);
              if (p) return p.v;
            }
          }
        }
      }
      function Nr(t, e) {
        if (
          0 != e &&
          ((t.first += e),
          (t.sel = new ea(
            m(t.sel.ranges, function(t) {
              return new na(
                D(t.anchor.line + e, t.anchor.ch),
                D(t.head.line + e, t.head.ch)
              );
            }),
            t.sel.primIndex
          )),
          t.cm)
        ) {
          Tn(t.cm, t.first, t.first - e, e);
          for (var n = t.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            Mn(t.cm, r, 'gutter');
        }
      }
      function Er(t, e, n, r) {
        if (t.cm && !t.cm.curOp) return Cn(t.cm, Er)(t, e, n, r);
        if (e.to.line < t.first)
          Nr(t, e.text.length - 1 - (e.to.line - e.from.line));
        else if (!(e.from.line > t.lastLine())) {
          if (e.from.line < t.first) {
            var i = e.text.length - 1 - (t.first - e.from.line);
            Nr(t, i),
              (e = {
                from: D(t.first, 0),
                to: D(e.to.line + i, e.to.ch),
                text: [g(e.text)],
                origin: e.origin,
              });
          }
          var o = t.lastLine();
          e.to.line > o &&
            (e = {
              from: e.from,
              to: D(o, T(t, o).text.length),
              text: [e.text[0]],
              origin: e.origin,
            }),
            (e.removed = M(t, e.from, e.to)),
            n || (n = qn(t, e)),
            t.cm
              ? (function(t, e, n) {
                  var r = t.doc,
                    i = t.display,
                    o = e.from,
                    a = e.to,
                    l = !1,
                    s = o.line;
                  t.options.lineWrapping ||
                    ((s = A(rt(T(r, o.line)))),
                    r.iter(s, a.line + 1, function(t) {
                      if (t == i.maxLine) return (l = !0), !0;
                    }));
                  r.sel.contains(e.from, e.to) > -1 && mt(t);
                  Jn(r, e, n, Be(t)),
                    t.options.lineWrapping ||
                      (r.iter(s, o.line + e.text.length, function(t) {
                        var e = ut(t);
                        e > i.maxLineLength &&
                          ((i.maxLine = t),
                          (i.maxLineLength = e),
                          (i.maxLineChanged = !0),
                          (l = !1));
                      }),
                      l && (t.curOp.updateMaxLine = !0));
                  (function(t, e) {
                    if (
                      ((t.modeFrontier = Math.min(t.modeFrontier, e)),
                      !(t.highlightFrontier < e - 10))
                    ) {
                      for (var n = t.first, r = e - 1; r > n; r--) {
                        var i = T(t, r).stateAfter;
                        if (i && (!(i instanceof Ho) || r + i.lookAhead < e)) {
                          n = r + 1;
                          break;
                        }
                      }
                      t.highlightFrontier = Math.min(t.highlightFrontier, n);
                    }
                  })(r, o.line),
                    Nn(t, 400);
                  var u = e.text.length - (a.line - o.line) - 1;
                  e.full
                    ? Tn(t)
                    : o.line != a.line || 1 != e.text.length || Zn(t.doc, e)
                      ? Tn(t, o.line, a.line + 1, u)
                      : Mn(t, o.line, 'text');
                  var c = yt(t, 'changes'),
                    f = yt(t, 'change');
                  if (f || c) {
                    var d = {
                      from: o,
                      to: a,
                      text: e.text,
                      removed: e.removed,
                      origin: e.origin,
                    };
                    f && Zt(t, 'change', t, d),
                      c &&
                        (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(
                          d
                        );
                  }
                  t.display.selForContextMenu = null;
                })(t.cm, e, r)
              : Jn(t, e, r),
            br(t, n, mo);
        }
      }
      function Pr(t, e, n, r, i) {
        if ((r || (r = n), W(r, n) < 0)) {
          var o;
          (n = (o = [r, n])[0]), (r = o[1]);
        }
        'string' == typeof e && (e = t.splitLines(e)),
          Or(t, { from: n, to: r, text: e, origin: i });
      }
      function Dr(t, e, n, r) {
        n < t.line ? (t.line += r) : e < t.line && ((t.line = e), (t.ch = 0));
      }
      function Wr(t, e, n, r) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i],
            a = !0;
          if (o.ranges) {
            o.copied || ((o = t[i] = o.deepCopy()).copied = !0);
            for (var l = 0; l < o.ranges.length; l++)
              Dr(o.ranges[l].anchor, e, n, r), Dr(o.ranges[l].head, e, n, r);
          } else {
            for (var s = 0; s < o.changes.length; ++s) {
              var u = o.changes[s];
              if (n < u.from.line)
                (u.from = D(u.from.line + r, u.from.ch)),
                  (u.to = D(u.to.line + r, u.to.ch));
              else if (e <= u.to.line) {
                a = !1;
                break;
              }
            }
            a || (t.splice(0, i + 1), (i = 0));
          }
        }
      }
      function jr(t, e) {
        var n = e.from.line,
          r = e.to.line,
          i = e.text.length - (r - n) - 1;
        Wr(t.done, n, r, i), Wr(t.undone, n, r, i);
      }
      function Fr(t, e, n, r) {
        var i = e,
          o = e;
        return (
          'number' == typeof e ? (o = T(t, I(t, e))) : (i = A(e)),
          null == i ? null : (r(o, i) && t.cm && Mn(t.cm, i, n), o)
        );
      }
      function Hr(t) {
        var e = this;
        (this.lines = t), (this.parent = null);
        for (var n = 0, r = 0; r < t.length; ++r)
          (t[r].parent = e), (n += t[r].height);
        this.height = n;
      }
      function zr(t) {
        var e = this;
        this.children = t;
        for (var n = 0, r = 0, i = 0; i < t.length; ++i) {
          var o = t[i];
          (n += o.chunkSize()), (r += o.height), (o.parent = e);
        }
        (this.size = n), (this.height = r), (this.parent = null);
      }
      function Ir(t, e, n) {
        st(e) < ((t.curOp && t.curOp.scrollTop) || t.doc.scrollTop) && sn(t, n);
      }
      function Rr(t, e, n, r, o) {
        if (r && r.shared)
          return (function(t, e, n, r, i) {
            (r = f(r)).shared = !1;
            var o = [Rr(t, e, n, r, i)],
              a = o[0],
              l = r.widgetNode;
            return (
              Qn(t, function(t) {
                l && (r.widgetNode = l.cloneNode(!0)),
                  o.push(Rr(t, R(t, e), R(t, n), r, i));
                for (var s = 0; s < t.linked.length; ++s)
                  if (t.linked[s].isParent) return;
                a = g(o);
              }),
              new aa(o, a)
            );
          })(t, e, n, r, o);
        if (t.cm && !t.cm.curOp) return Cn(t.cm, Rr)(t, e, n, r, o);
        var a = new oa(t, o),
          l = W(e, n);
        if ((r && f(r, a, !1), l > 0 || (0 == l && !1 !== a.clearWhenEmpty)))
          return a;
        if (
          (a.replacedWith &&
            ((a.collapsed = !0),
            (a.widgetNode = i('span', [a.replacedWith], 'CodeMirror-widget')),
            r.handleMouseEvents ||
              a.widgetNode.setAttribute('cm-ignore-events', 'true'),
            r.insertLeft && (a.widgetNode.insertLeft = !0)),
          a.collapsed)
        ) {
          if (
            nt(t, e.line, e, n, a) ||
            (e.line != n.line && nt(t, n.line, e, n, a))
          )
            throw new Error(
              'Inserting collapsed marker partially overlapping an existing one'
            );
          ko = !0;
        }
        a.addToHistory &&
          or(t, { from: e, to: n, origin: 'markText' }, t.sel, NaN);
        var s,
          u = e.line,
          c = t.cm;
        if (
          (t.iter(u, n.line + 1, function(t) {
            c &&
              a.collapsed &&
              !c.options.lineWrapping &&
              rt(t) == c.display.maxLine &&
              (s = !0),
              a.collapsed && u != e.line && _(t, 0),
              (function(t, e) {
                (t.markedSpans = t.markedSpans
                  ? t.markedSpans.concat([e])
                  : [e]),
                  e.marker.attachLine(t);
              })(
                t,
                new G(a, u == e.line ? e.ch : null, u == n.line ? n.ch : null)
              ),
              ++u;
          }),
          a.collapsed &&
            t.iter(e.line, n.line + 1, function(e) {
              at(t, e) && _(e, 0);
            }),
          a.clearOnEnter &&
            Oo(a, 'beforeCursorEnter', function() {
              return a.clear();
            }),
          a.readOnly &&
            ((Co = !0),
            (t.history.done.length || t.history.undone.length) &&
              t.clearHistory()),
          a.collapsed && ((a.id = ++ia), (a.atomic = !0)),
          c)
        ) {
          if ((s && (c.curOp.updateMaxLine = !0), a.collapsed))
            Tn(c, e.line, n.line + 1);
          else if (
            a.className ||
            a.title ||
            a.startStyle ||
            a.endStyle ||
            a.css
          )
            for (var d = e.line; d <= n.line; d++) Mn(c, d, 'text');
          a.atomic && xr(c.doc), Zt(c, 'markerAdded', c, a);
        }
        return a;
      }
      function Br(t) {
        return t.findMarks(D(t.first, 0), t.clipPos(D(t.lastLine())), function(
          t
        ) {
          return t.parent;
        });
      }
      function Gr(t) {
        for (
          var e = function(e) {
              var n = t[e],
                r = [n.primary.doc];
              Qn(n.primary.doc, function(t) {
                return r.push(t);
              });
              for (var i = 0; i < n.markers.length; i++) {
                var o = n.markers[i];
                -1 == h(r, o.doc) &&
                  ((o.parent = null), n.markers.splice(i--, 1));
              }
            },
            n = 0;
          n < t.length;
          n++
        )
          e(n);
      }
      function Vr(t) {
        var e = this;
        if ((Ur(e), !gt(e, t) && !se(e.display, t))) {
          wt(t), Vi && (ua = +new Date());
          var n = Ve(e, t, !0),
            r = t.dataTransfer.files;
          if (n && !e.isReadOnly())
            if (r && r.length && window.FileReader && window.File)
              for (
                var i = r.length,
                  o = Array(i),
                  a = 0,
                  l = function(t, r) {
                    if (
                      !e.options.allowDropFileTypes ||
                      -1 != h(e.options.allowDropFileTypes, t.type)
                    ) {
                      var l = new FileReader();
                      (l.onload = Cn(e, function() {
                        var t = l.result;
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(t) && (t = ''),
                          (o[r] = t),
                          ++a == i)
                        ) {
                          var s = {
                            from: (n = R(e.doc, n)),
                            to: n,
                            text: e.doc.splitLines(
                              o.join(e.doc.lineSeparator())
                            ),
                            origin: 'paste',
                          };
                          Or(e.doc, s), mr(e.doc, Vn(n, Un(s)));
                        }
                      })),
                        l.readAsText(t);
                    }
                  },
                  s = 0;
                s < i;
                ++s
              )
                l(r[s], s);
            else {
              if (e.state.draggingText && e.doc.sel.contains(n) > -1)
                return (
                  e.state.draggingText(t),
                  void setTimeout(function() {
                    return e.display.input.focus();
                  }, 20)
                );
              try {
                var u = t.dataTransfer.getData('Text');
                if (u) {
                  var c;
                  if (
                    (e.state.draggingText &&
                      !e.state.draggingText.copy &&
                      (c = e.listSelections()),
                    br(e.doc, Vn(n, n)),
                    c)
                  )
                    for (var f = 0; f < c.length; ++f)
                      Pr(e.doc, '', c[f].anchor, c[f].head, 'drag');
                  e.replaceSelection(u, 'around', 'paste'),
                    e.display.input.focus();
                }
              } catch (t) {}
            }
        }
      }
      function Ur(t) {
        t.display.dragCursor &&
          (t.display.lineSpace.removeChild(t.display.dragCursor),
          (t.display.dragCursor = null));
      }
      function Kr(t) {
        if (document.getElementsByClassName)
          for (
            var e = document.getElementsByClassName('CodeMirror'), n = 0;
            n < e.length;
            n++
          ) {
            var r = e[n].CodeMirror;
            r && t(r);
          }
      }
      function qr() {
        ca ||
          (!(function() {
            var t;
            Oo(window, 'resize', function() {
              null == t &&
                (t = setTimeout(function() {
                  (t = null), Kr($r);
                }, 100));
            }),
              Oo(window, 'blur', function() {
                return Kr(tn);
              });
          })(),
          (ca = !0));
      }
      function $r(t) {
        var e = t.display;
        (e.lastWrapHeight == e.wrapper.clientHeight &&
          e.lastWrapWidth == e.wrapper.clientWidth) ||
          ((e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null),
          (e.scrollbarsClipped = !1),
          t.setSize());
      }
      function Xr(t) {
        var e = t.split(/-(?!$)/);
        t = e[e.length - 1];
        for (var n, r, i, o, a = 0; a < e.length - 1; a++) {
          var l = e[a];
          if (/^(cmd|meta|m)$/i.test(l)) o = !0;
          else if (/^a(lt)?$/i.test(l)) n = !0;
          else if (/^(c|ctrl|control)$/i.test(l)) r = !0;
          else {
            if (!/^s(hift)?$/i.test(l))
              throw new Error('Unrecognized modifier name: ' + l);
            i = !0;
          }
        }
        return (
          n && (t = 'Alt-' + t),
          r && (t = 'Ctrl-' + t),
          o && (t = 'Cmd-' + t),
          i && (t = 'Shift-' + t),
          t
        );
      }
      function Yr(t) {
        var e = {};
        for (var n in t)
          if (t.hasOwnProperty(n)) {
            var r = t[n];
            if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
            if ('...' == r) {
              delete t[n];
              continue;
            }
            for (var i = m(n.split(' '), Xr), o = 0; o < i.length; o++) {
              var a = void 0,
                l = void 0;
              o == i.length - 1
                ? ((l = i.join(' ')), (a = r))
                : ((l = i.slice(0, o + 1).join(' ')), (a = '...'));
              var s = e[l];
              if (s) {
                if (s != a) throw new Error('Inconsistent bindings for ' + l);
              } else e[l] = a;
            }
            delete t[n];
          }
        for (var u in e) t[u] = e[u];
        return t;
      }
      function Zr(t, e, n, r) {
        var i = (e = ei(e)).call ? e.call(t, r) : e[t];
        if (!1 === i) return 'nothing';
        if ('...' === i) return 'multi';
        if (null != i && n(i)) return 'handled';
        if (e.fallthrough) {
          if ('[object Array]' != Object.prototype.toString.call(e.fallthrough))
            return Zr(t, e.fallthrough, n, r);
          for (var o = 0; o < e.fallthrough.length; o++) {
            var a = Zr(t, e.fallthrough[o], n, r);
            if (a) return a;
          }
        }
      }
      function Jr(t) {
        var e = 'string' == typeof t ? t : fa[t.keyCode];
        return 'Ctrl' == e || 'Alt' == e || 'Shift' == e || 'Mod' == e;
      }
      function Qr(t, e, n) {
        var r = t;
        return (
          e.altKey && 'Alt' != r && (t = 'Alt-' + t),
          (lo ? e.metaKey : e.ctrlKey) && 'Ctrl' != r && (t = 'Ctrl-' + t),
          (lo ? e.ctrlKey : e.metaKey) && 'Cmd' != r && (t = 'Cmd-' + t),
          !n && e.shiftKey && 'Shift' != r && (t = 'Shift-' + t),
          t
        );
      }
      function ti(t, e) {
        if (Xi && 34 == t.keyCode && t.char) return !1;
        var n = fa[t.keyCode];
        return null != n && !t.altGraphKey && Qr(n, t, e);
      }
      function ei(t) {
        return 'string' == typeof t ? va[t] : t;
      }
      function ni(t, e) {
        for (var n = t.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
          for (var o = e(n[i]); r.length && W(o.from, g(r).to) <= 0; ) {
            var a = r.pop();
            if (W(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          r.push(o);
        }
        Sn(t, function() {
          for (var e = r.length - 1; e >= 0; e--)
            Pr(t.doc, '', r[e].from, r[e].to, '+delete');
          un(t);
        });
      }
      function ri(t, e, n) {
        var r = k(t.text, e + n, n);
        return r < 0 || r > t.text.length ? null : r;
      }
      function ii(t, e, n) {
        var r = ri(t, e.ch, n);
        return null == r ? null : new D(e.line, r, n < 0 ? 'after' : 'before');
      }
      function oi(t, e, n, r, i) {
        if (t) {
          var o = dt(n, e.doc.direction);
          if (o) {
            var a,
              l = i < 0 ? g(o) : o[0],
              s = i < 0 == (1 == l.level) ? 'after' : 'before';
            if (l.level > 0 || 'rtl' == e.doc.direction) {
              var u = ye(e, n);
              a = i < 0 ? n.text.length - 1 : 0;
              var c = be(e, u, a).top;
              (a = L(
                function(t) {
                  return be(e, u, t).top == c;
                },
                i < 0 == (1 == l.level) ? l.from : l.to - 1,
                a
              )),
                'before' == s && (a = ri(n, a, 1));
            } else a = i < 0 ? l.to : l.from;
            return new D(r, a, s);
          }
        }
        return new D(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after');
      }
      function ai(t, e) {
        var n = T(t.doc, e),
          r = rt(n);
        return r != n && (e = A(r)), oi(!0, t, r, e, 1);
      }
      function li(t, e) {
        var n = T(t.doc, e),
          r = (function(t) {
            for (var e; (e = et(t)); ) t = e.find(1, !0).line;
            return t;
          })(n);
        return r != n && (e = A(r)), oi(!0, t, n, e, -1);
      }
      function si(t, e) {
        var n = ai(t, e.line),
          r = T(t.doc, n.line),
          i = dt(r, t.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(0, r.text.search(/\S/)),
            a = e.line == n.line && e.ch <= o && e.ch;
          return D(n.line, a ? 0 : o, n.sticky);
        }
        return n;
      }
      function ui(t, e, n) {
        if ('string' == typeof e && !(e = ga[e])) return !1;
        t.display.input.ensurePolled();
        var r = t.display.shift,
          i = !1;
        try {
          t.isReadOnly() && (t.state.suppressEdits = !0),
            n && (t.display.shift = !1),
            (i = e(t) != go);
        } finally {
          (t.display.shift = r), (t.state.suppressEdits = !1);
        }
        return i;
      }
      function ci(t, e, n, r) {
        var i = t.state.keySeq;
        if (i) {
          if (Jr(e)) return 'handled';
          ma.set(50, function() {
            t.state.keySeq == i &&
              ((t.state.keySeq = null), t.display.input.reset());
          }),
            (e = i + ' ' + e);
        }
        var o = (function(t, e, n) {
          for (var r = 0; r < t.state.keyMaps.length; r++) {
            var i = Zr(e, t.state.keyMaps[r], n, t);
            if (i) return i;
          }
          return (
            (t.options.extraKeys && Zr(e, t.options.extraKeys, n, t)) ||
            Zr(e, t.options.keyMap, n, t)
          );
        })(t, e, r);
        return (
          'multi' == o && (t.state.keySeq = e),
          'handled' == o && Zt(t, 'keyHandled', t, e, n),
          ('handled' != o && 'multi' != o) || (wt(n), Ye(t)),
          i && !o && /\'$/.test(e) ? (wt(n), !0) : !!o
        );
      }
      function fi(t, e) {
        var n = ti(e, !0);
        return (
          !!n &&
          (e.shiftKey && !t.state.keySeq
            ? ci(t, 'Shift-' + n, e, function(e) {
                return ui(t, e, !0);
              }) ||
              ci(t, n, e, function(e) {
                if ('string' == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                  return ui(t, e);
              })
            : ci(t, n, e, function(e) {
                return ui(t, e);
              }))
        );
      }
      function di(t) {
        var e = this;
        if (((e.curOp.focus = l()), !gt(e, t))) {
          Vi && Ui < 11 && 27 == t.keyCode && (t.returnValue = !1);
          var n = t.keyCode;
          e.display.shift = 16 == n || t.shiftKey;
          var r = fi(e, t);
          Xi &&
            ((ya = r ? n : null),
            !r &&
              88 == n &&
              !Eo &&
              (no ? t.metaKey : t.ctrlKey) &&
              e.replaceSelection('', null, 'cut')),
            18 != n ||
              /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) ||
              (function(t) {
                function e(t) {
                  (18 != t.keyCode && t.altKey) ||
                    (uo(n, 'CodeMirror-crosshair'),
                    pt(document, 'keyup', e),
                    pt(document, 'mouseover', e));
                }
                var n = t.display.lineDiv;
                s(n, 'CodeMirror-crosshair');
                Oo(document, 'keyup', e), Oo(document, 'mouseover', e);
              })(e);
        }
      }
      function hi(t) {
        16 == t.keyCode && (this.doc.sel.shift = !1), gt(this, t);
      }
      function pi(t) {
        var e = this;
        if (
          !(
            se(e.display, t) ||
            gt(e, t) ||
            (t.ctrlKey && !t.altKey) ||
            (no && t.metaKey)
          )
        ) {
          var n = t.keyCode,
            r = t.charCode;
          if (Xi && n == ya) return (ya = null), void wt(t);
          if (!Xi || (t.which && !(t.which < 10)) || !fi(e, t)) {
            var i = String.fromCharCode(null == r ? n : r);
            '\b' != i &&
              ((function(t, e, n) {
                return ci(t, "'" + n + "'", e, function(e) {
                  return ui(t, e, !0);
                });
              })(e, t, i) ||
                e.display.input.onKeyPress(t));
          }
        }
      }
      function vi(t) {
        var e = this,
          n = e.display;
        if (!(gt(e, t) || (n.activeTouch && n.input.supportsTouch())))
          if ((n.input.ensurePolled(), (n.shift = t.shiftKey), se(n, t)))
            Ki ||
              ((n.scroller.draggable = !1),
              setTimeout(function() {
                return (n.scroller.draggable = !0);
              }, 100));
          else if (!yi(e, t)) {
            var r = Ve(e, t),
              i = Lt(t),
              o = r
                ? (function(t, e) {
                    var n = +new Date();
                    return xa && xa.compare(n, t, e)
                      ? ((wa = xa = null), 'triple')
                      : wa && wa.compare(n, t, e)
                        ? ((xa = new ba(n, t, e)), (wa = null), 'double')
                        : ((wa = new ba(n, t, e)), (xa = null), 'single');
                  })(r, i)
                : 'single';
            window.focus(),
              1 == i && e.state.selectingText && e.state.selectingText(t),
              (r &&
                (function(t, e, n, r, i) {
                  var o = 'Click';
                  'double' == r
                    ? (o = 'Double' + o)
                    : 'triple' == r && (o = 'Triple' + o);
                  return (
                    (o = (1 == e ? 'Left' : 2 == e ? 'Middle' : 'Right') + o),
                    ci(t, Qr(o, i), i, function(e) {
                      if (('string' == typeof e && (e = ga[e]), !e)) return !1;
                      var r = !1;
                      try {
                        t.isReadOnly() && (t.state.suppressEdits = !0),
                          (r = e(t, n) != go);
                      } finally {
                        t.state.suppressEdits = !1;
                      }
                      return r;
                    })
                  );
                })(e, i, r, o, t)) ||
                (1 == i
                  ? r
                    ? (function(t, e, n, r) {
                        Vi ? setTimeout(c(Ze, t), 0) : (t.curOp.focus = l());
                        var i,
                          o = (function(t, e, n) {
                            var r = t.getOption('configureMouse'),
                              i = r ? r(t, e, n) : {};
                            if (null == i.unit) {
                              var o = ro ? n.shiftKey && n.metaKey : n.altKey;
                              i.unit = o
                                ? 'rectangle'
                                : 'single' == e
                                  ? 'char'
                                  : 'double' == e ? 'word' : 'line';
                            }
                            (null == i.extend || t.doc.extend) &&
                              (i.extend = t.doc.extend || n.shiftKey);
                            null == i.addNew &&
                              (i.addNew = no ? n.metaKey : n.ctrlKey);
                            null == i.moveOnDrag &&
                              (i.moveOnDrag = !(no ? n.altKey : n.ctrlKey));
                            return i;
                          })(t, n, r),
                          a = t.doc.sel;
                        t.options.dragDrop &&
                        _o &&
                        !t.isReadOnly() &&
                        'single' == n &&
                        (i = a.contains(e)) > -1 &&
                        (W((i = a.ranges[i]).from(), e) < 0 || e.xRel > 0) &&
                        (W(i.to(), e) > 0 || e.xRel < 0)
                          ? (function(t, e, n, r) {
                              var i = t.display,
                                o = !1,
                                a = Cn(t, function(e) {
                                  Ki && (i.scroller.draggable = !1),
                                    (t.state.draggingText = !1),
                                    pt(document, 'mouseup', a),
                                    pt(document, 'mousemove', l),
                                    pt(i.scroller, 'dragstart', s),
                                    pt(i.scroller, 'drop', a),
                                    o ||
                                      (wt(e),
                                      r.addNew ||
                                        hr(t.doc, n, null, null, r.extend),
                                      Ki || (Vi && 9 == Ui)
                                        ? setTimeout(function() {
                                            document.body.focus(),
                                              i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                                }),
                                l = function(t) {
                                  o =
                                    o ||
                                    Math.abs(e.clientX - t.clientX) +
                                      Math.abs(e.clientY - t.clientY) >=
                                      10;
                                },
                                s = function() {
                                  return (o = !0);
                                };
                              Ki && (i.scroller.draggable = !0);
                              (t.state.draggingText = a),
                                (a.copy = !r.moveOnDrag),
                                i.scroller.dragDrop && i.scroller.dragDrop();
                              Oo(document, 'mouseup', a),
                                Oo(document, 'mousemove', l),
                                Oo(i.scroller, 'dragstart', s),
                                Oo(i.scroller, 'drop', a),
                                Je(t),
                                setTimeout(function() {
                                  return i.input.focus();
                                }, 20);
                            })(t, r, e, o)
                          : (function(t, e, n, r) {
                              function i(e) {
                                if (0 != W(m, e))
                                  if (((m = e), 'rectangle' == r.unit)) {
                                    for (
                                      var i = [],
                                        o = t.options.tabSize,
                                        a = d(T(u, n.line).text, n.ch, o),
                                        l = d(T(u, e.line).text, e.ch, o),
                                        s = Math.min(a, l),
                                        v = Math.max(a, l),
                                        g = Math.min(n.line, e.line),
                                        y = Math.min(
                                          t.lastLine(),
                                          Math.max(n.line, e.line)
                                        );
                                      g <= y;
                                      g++
                                    ) {
                                      var b = T(u, g).text,
                                        w = p(b, s, o);
                                      s == v
                                        ? i.push(new na(D(g, w), D(g, w)))
                                        : b.length > w &&
                                          i.push(
                                            new na(D(g, w), D(g, p(b, v, o)))
                                          );
                                    }
                                    i.length || i.push(new na(n, n)),
                                      yr(
                                        u,
                                        Gn(h.ranges.slice(0, f).concat(i), f),
                                        { origin: '*mouse', scroll: !1 }
                                      ),
                                      t.scrollIntoView(e);
                                  } else {
                                    var x,
                                      S = c,
                                      C = gi(t, e, r.unit),
                                      k = S.anchor;
                                    W(C.anchor, k) > 0
                                      ? ((x = C.head),
                                        (k = z(S.from(), C.anchor)))
                                      : ((x = C.anchor),
                                        (k = H(S.to(), C.head)));
                                    var L = h.ranges.slice(0);
                                    (L[f] = (function(t, e) {
                                      var n = e.anchor,
                                        r = e.head,
                                        i = T(t.doc, n.line);
                                      if (0 == W(n, r) && n.sticky == r.sticky)
                                        return e;
                                      var o = dt(i);
                                      if (!o) return e;
                                      var a = ft(o, n.ch, n.sticky),
                                        l = o[a];
                                      if (l.from != n.ch && l.to != n.ch)
                                        return e;
                                      var s =
                                        a +
                                        ((l.from == n.ch) == (1 != l.level)
                                          ? 0
                                          : 1);
                                      if (0 == s || s == o.length) return e;
                                      var u;
                                      if (r.line != n.line)
                                        u =
                                          (r.line - n.line) *
                                            ('ltr' == t.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var c = ft(o, r.ch, r.sticky),
                                          f =
                                            c - a ||
                                            (r.ch - n.ch) *
                                              (1 == l.level ? -1 : 1);
                                        u =
                                          c == s - 1 || c == s ? f < 0 : f > 0;
                                      }
                                      var d = o[s + (u ? -1 : 0)],
                                        h = u == (1 == d.level),
                                        p = h ? d.from : d.to,
                                        v = h ? 'after' : 'before';
                                      return n.ch == p && n.sticky == v
                                        ? e
                                        : new na(new D(n.line, p, v), r);
                                    })(t, new na(R(u, k), x))),
                                      yr(u, Gn(L, f), yo);
                                  }
                              }
                              function o(e) {
                                var n = ++b,
                                  a = Ve(t, e, !0, 'rectangle' == r.unit);
                                if (a)
                                  if (0 != W(a, m)) {
                                    (t.curOp.focus = l()), i(a);
                                    var c = rn(s, u);
                                    (a.line >= c.to || a.line < c.from) &&
                                      setTimeout(
                                        Cn(t, function() {
                                          b == n && o(e);
                                        }),
                                        150
                                      );
                                  } else {
                                    var f =
                                      e.clientY < y.top
                                        ? -20
                                        : e.clientY > y.bottom ? 20 : 0;
                                    f &&
                                      setTimeout(
                                        Cn(t, function() {
                                          b == n &&
                                            ((s.scroller.scrollTop += f), o(e));
                                        }),
                                        50
                                      );
                                  }
                              }
                              function a(e) {
                                (t.state.selectingText = !1),
                                  (b = 1 / 0),
                                  wt(e),
                                  s.input.focus(),
                                  pt(document, 'mousemove', w),
                                  pt(document, 'mouseup', x),
                                  (u.history.lastSelOrigin = null);
                              }
                              var s = t.display,
                                u = t.doc;
                              wt(e);
                              var c,
                                f,
                                h = u.sel,
                                v = h.ranges;
                              r.addNew && !r.extend
                                ? ((f = u.sel.contains(n)),
                                  (c = f > -1 ? v[f] : new na(n, n)))
                                : ((c = u.sel.primary()),
                                  (f = u.sel.primIndex));
                              if ('rectangle' == r.unit)
                                r.addNew || (c = new na(n, n)),
                                  (n = Ve(t, e, !0, !0)),
                                  (f = -1);
                              else {
                                var g = gi(t, n, r.unit);
                                c = r.extend
                                  ? dr(c, g.anchor, g.head, r.extend)
                                  : g;
                              }
                              r.addNew
                                ? -1 == f
                                  ? ((f = v.length),
                                    yr(u, Gn(v.concat([c]), f), {
                                      scroll: !1,
                                      origin: '*mouse',
                                    }))
                                  : v.length > 1 &&
                                    v[f].empty() &&
                                    'char' == r.unit &&
                                    !r.extend
                                    ? (yr(
                                        u,
                                        Gn(
                                          v.slice(0, f).concat(v.slice(f + 1)),
                                          0
                                        ),
                                        { scroll: !1, origin: '*mouse' }
                                      ),
                                      (h = u.sel))
                                    : vr(u, f, c, yo)
                                : ((f = 0),
                                  yr(u, new ea([c], 0), yo),
                                  (h = u.sel));
                              var m = n;
                              var y = s.wrapper.getBoundingClientRect(),
                                b = 0;
                              var w = Cn(t, function(t) {
                                  Lt(t) ? o(t) : a(t);
                                }),
                                x = Cn(t, a);
                              (t.state.selectingText = x),
                                Oo(document, 'mousemove', w),
                                Oo(document, 'mouseup', x);
                            })(t, r, e, o);
                      })(e, r, o, t)
                    : kt(t) == n.scroller && wt(t)
                  : 2 == i
                    ? (r && hr(e.doc, r),
                      setTimeout(function() {
                        return n.input.focus();
                      }, 20))
                    : 3 == i && (so ? bi(e, t) : Je(e)));
          }
      }
      function gi(t, e, n) {
        if ('char' == n) return new na(e, e);
        if ('word' == n) return t.findWordAt(e);
        if ('line' == n)
          return new na(D(e.line, 0), R(t.doc, D(e.line + 1, 0)));
        var r = n(t, e);
        return new na(r.from, r.to);
      }
      function mi(t, e, n, r) {
        var i, o;
        if (e.touches) (i = e.touches[0].clientX), (o = e.touches[0].clientY);
        else
          try {
            (i = e.clientX), (o = e.clientY);
          } catch (e) {
            return !1;
          }
        if (i >= Math.floor(t.display.gutters.getBoundingClientRect().right))
          return !1;
        r && wt(e);
        var a = t.display,
          l = a.lineDiv.getBoundingClientRect();
        if (o > l.bottom || !yt(t, n)) return St(e);
        o -= l.top - a.viewOffset;
        for (var s = 0; s < t.options.gutters.length; ++s) {
          var u = a.gutters.childNodes[s];
          if (u && u.getBoundingClientRect().right >= i) {
            return vt(t, n, t, N(t.doc, o), t.options.gutters[s], e), St(e);
          }
        }
      }
      function yi(t, e) {
        return mi(t, e, 'gutterClick', !0);
      }
      function bi(t, e) {
        se(t.display, e) ||
          (function(t, e) {
            if (!yt(t, 'gutterContextMenu')) return !1;
            return mi(t, e, 'gutterContextMenu', !1);
          })(t, e) ||
          gt(t, e, 'contextmenu') ||
          t.display.input.onContextMenu(e);
      }
      function wi(t) {
        (t.display.wrapper.className =
          t.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
          t.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
          ke(t);
      }
      function xi(t) {
        Hn(t), Tn(t), on(t);
      }
      function Si(t, e, n) {
        if (!e != !(n && n != Sa)) {
          var r = t.display.dragFunctions,
            i = e ? Oo : pt;
          i(t.display.scroller, 'dragstart', r.start),
            i(t.display.scroller, 'dragenter', r.enter),
            i(t.display.scroller, 'dragover', r.over),
            i(t.display.scroller, 'dragleave', r.leave),
            i(t.display.scroller, 'drop', r.drop);
        }
      }
      function Ci(t) {
        t.options.lineWrapping
          ? (s(t.display.wrapper, 'CodeMirror-wrap'),
            (t.display.sizer.style.minWidth = ''),
            (t.display.sizerWidth = null))
          : (uo(t.display.wrapper, 'CodeMirror-wrap'), ct(t)),
          Ge(t),
          Tn(t),
          ke(t),
          setTimeout(function() {
            return mn(t);
          }, 100);
      }
      function ki(t, e) {
        var o = this;
        if (!(this instanceof ki)) return new ki(t, e);
        (this.options = e = e ? f(e) : {}), f(Ca, e, !1), zn(e);
        var a = e.value;
        'string' == typeof a &&
          (a = new sa(a, e.mode, null, e.lineSeparator, e.direction)),
          (this.doc = a);
        var l = new ki.inputStyles[e.inputStyle](this),
          s = (this.display = new function(t, e, n) {
            var o = this;
            (this.input = n),
              (o.scrollbarFiller = r(
                'div',
                null,
                'CodeMirror-scrollbar-filler'
              )),
              o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
              (o.gutterFiller = r('div', null, 'CodeMirror-gutter-filler')),
              o.gutterFiller.setAttribute('cm-not-content', 'true'),
              (o.lineDiv = i('div', null, 'CodeMirror-code')),
              (o.selectionDiv = r(
                'div',
                null,
                null,
                'position: relative; z-index: 1'
              )),
              (o.cursorDiv = r('div', null, 'CodeMirror-cursors')),
              (o.measure = r('div', null, 'CodeMirror-measure')),
              (o.lineMeasure = r('div', null, 'CodeMirror-measure')),
              (o.lineSpace = i(
                'div',
                [
                  o.measure,
                  o.lineMeasure,
                  o.selectionDiv,
                  o.cursorDiv,
                  o.lineDiv,
                ],
                null,
                'position: relative; outline: none'
              ));
            var a = i('div', [o.lineSpace], 'CodeMirror-lines');
            (o.mover = r('div', [a], null, 'position: relative')),
              (o.sizer = r('div', [o.mover], 'CodeMirror-sizer')),
              (o.sizerWidth = null),
              (o.heightForcer = r(
                'div',
                null,
                null,
                'position: absolute; height: ' + vo + 'px; width: 1px;'
              )),
              (o.gutters = r('div', null, 'CodeMirror-gutters')),
              (o.lineGutter = null),
              (o.scroller = r(
                'div',
                [o.sizer, o.heightForcer, o.gutters],
                'CodeMirror-scroll'
              )),
              o.scroller.setAttribute('tabIndex', '-1'),
              (o.wrapper = r(
                'div',
                [o.scrollbarFiller, o.gutterFiller, o.scroller],
                'CodeMirror'
              )),
              Vi &&
                Ui < 8 &&
                ((o.gutters.style.zIndex = -1),
                (o.scroller.style.paddingRight = 0)),
              Ki || (Ii && eo) || (o.scroller.draggable = !0),
              t && (t.appendChild ? t.appendChild(o.wrapper) : t(o.wrapper)),
              (o.viewFrom = o.viewTo = e.first),
              (o.reportedViewFrom = o.reportedViewTo = e.first),
              (o.view = []),
              (o.renderedView = null),
              (o.externalMeasured = null),
              (o.viewOffset = 0),
              (o.lastWrapHeight = o.lastWrapWidth = 0),
              (o.updateLineNumbers = null),
              (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
              (o.scrollbarsClipped = !1),
              (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
              (o.alignWidgets = !1),
              (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
              (o.maxLine = null),
              (o.maxLineLength = 0),
              (o.maxLineChanged = !1),
              (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
              (o.shift = !1),
              (o.selForContextMenu = null),
              (o.activeTouch = null),
              n.init(o);
          }(t, a, l));
        (s.wrapper.CodeMirror = this),
          Hn(this),
          wi(this),
          e.lineWrapping &&
            (this.display.wrapper.className += ' CodeMirror-wrap'),
          bn(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new fo(),
            keySeq: null,
            specialChars: null,
          }),
          e.autofocus && !eo && s.input.focus(),
          Vi &&
            Ui < 11 &&
            setTimeout(function() {
              return o.display.input.reset(!0);
            }, 20),
          (function(t) {
            function e() {
              o.activeTouch &&
                ((a = setTimeout(function() {
                  return (o.activeTouch = null);
                }, 1e3)),
                ((l = o.activeTouch).end = +new Date()));
            }
            function i(t, e) {
              if (null == e.left) return !0;
              var n = e.left - t.left,
                r = e.top - t.top;
              return n * n + r * r > 400;
            }
            var o = t.display;
            Oo(o.scroller, 'mousedown', Cn(t, vi)),
              Vi && Ui < 11
                ? Oo(
                    o.scroller,
                    'dblclick',
                    Cn(t, function(e) {
                      if (!gt(t, e)) {
                        var n = Ve(t, e);
                        if (n && !yi(t, e) && !se(t.display, e)) {
                          wt(e);
                          var r = t.findWordAt(n);
                          hr(t.doc, r.anchor, r.head);
                        }
                      }
                    })
                  )
                : Oo(o.scroller, 'dblclick', function(e) {
                    return gt(t, e) || wt(e);
                  });
            so ||
              Oo(o.scroller, 'contextmenu', function(e) {
                return bi(t, e);
              });
            var a,
              l = { end: 0 };
            Oo(o.scroller, 'touchstart', function(e) {
              if (
                !gt(t, e) &&
                !(function(t) {
                  if (1 != t.touches.length) return !1;
                  var e = t.touches[0];
                  return e.radiusX <= 1 && e.radiusY <= 1;
                })(e) &&
                !yi(t, e)
              ) {
                o.input.ensurePolled(), clearTimeout(a);
                var n = +new Date();
                (o.activeTouch = {
                  start: n,
                  moved: !1,
                  prev: n - l.end <= 300 ? l : null,
                }),
                  1 == e.touches.length &&
                    ((o.activeTouch.left = e.touches[0].pageX),
                    (o.activeTouch.top = e.touches[0].pageY));
              }
            }),
              Oo(o.scroller, 'touchmove', function() {
                o.activeTouch && (o.activeTouch.moved = !0);
              }),
              Oo(o.scroller, 'touchend', function(n) {
                var r = o.activeTouch;
                if (
                  r &&
                  !se(o, n) &&
                  null != r.left &&
                  !r.moved &&
                  new Date() - r.start < 300
                ) {
                  var a,
                    l = t.coordsChar(o.activeTouch, 'page');
                  (a =
                    !r.prev || i(r, r.prev)
                      ? new na(l, l)
                      : !r.prev.prev || i(r, r.prev.prev)
                        ? t.findWordAt(l)
                        : new na(D(l.line, 0), R(t.doc, D(l.line + 1, 0)))),
                    t.setSelection(a.anchor, a.head),
                    t.focus(),
                    wt(n);
                }
                e();
              }),
              Oo(o.scroller, 'touchcancel', e),
              Oo(o.scroller, 'scroll', function() {
                o.scroller.clientHeight &&
                  (hn(t, o.scroller.scrollTop),
                  vn(t, o.scroller.scrollLeft, !0),
                  vt(t, 'scroll', t));
              }),
              Oo(o.scroller, 'mousewheel', function(e) {
                return Bn(t, e);
              }),
              Oo(o.scroller, 'DOMMouseScroll', function(e) {
                return Bn(t, e);
              }),
              Oo(o.wrapper, 'scroll', function() {
                return (o.wrapper.scrollTop = o.wrapper.scrollLeft = 0);
              }),
              (o.dragFunctions = {
                enter: function(e) {
                  gt(t, e) || Ct(e);
                },
                over: function(e) {
                  gt(t, e) ||
                    (!(function(t, e) {
                      var i = Ve(t, e);
                      if (i) {
                        var o = document.createDocumentFragment();
                        $e(t, i, o),
                          t.display.dragCursor ||
                            ((t.display.dragCursor = r(
                              'div',
                              null,
                              'CodeMirror-cursors CodeMirror-dragcursors'
                            )),
                            t.display.lineSpace.insertBefore(
                              t.display.dragCursor,
                              t.display.cursorDiv
                            )),
                          n(t.display.dragCursor, o);
                      }
                    })(t, e),
                    Ct(e));
                },
                start: function(e) {
                  return (function(t, e) {
                    if (Vi && (!t.state.draggingText || +new Date() - ua < 100))
                      Ct(e);
                    else if (
                      !gt(t, e) &&
                      !se(t.display, e) &&
                      (e.dataTransfer.setData('Text', t.getSelection()),
                      (e.dataTransfer.effectAllowed = 'copyMove'),
                      e.dataTransfer.setDragImage && !Yi)
                    ) {
                      var n = r(
                        'img',
                        null,
                        null,
                        'position: fixed; left: 0; top: 0;'
                      );
                      (n.src =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                        Xi &&
                          ((n.width = n.height = 1),
                          t.display.wrapper.appendChild(n),
                          (n._top = n.offsetTop)),
                        e.dataTransfer.setDragImage(n, 0, 0),
                        Xi && n.parentNode.removeChild(n);
                    }
                  })(t, e);
                },
                drop: Cn(t, Vr),
                leave: function(e) {
                  gt(t, e) || Ur(t);
                },
              });
            var s = o.input.getField();
            Oo(s, 'keyup', function(e) {
              return hi.call(t, e);
            }),
              Oo(s, 'keydown', Cn(t, di)),
              Oo(s, 'keypress', Cn(t, pi)),
              Oo(s, 'focus', function(e) {
                return Qe(t, e);
              }),
              Oo(s, 'blur', function(e) {
                return tn(t, e);
              });
          })(this),
          qr(),
          wn(this),
          (this.curOp.forceUpdate = !0),
          tr(this, a),
          (e.autofocus && !eo) || this.hasFocus()
            ? setTimeout(c(Qe, this), 20)
            : tn(this);
        for (var u in ka) ka.hasOwnProperty(u) && ka[u](o, e[u], Sa);
        an(this), e.finishInit && e.finishInit(this);
        for (var d = 0; d < La.length; ++d) La[d](o);
        xn(this),
          Ki &&
            e.lineWrapping &&
            'optimizelegibility' == getComputedStyle(s.lineDiv).textRendering &&
            (s.lineDiv.style.textRendering = 'auto');
      }
      function Li(t, e, n, r) {
        var i,
          o = t.doc;
        null == n && (n = 'add'),
          'smart' == n && (o.mode.indent ? (i = jt(t, e).state) : (n = 'prev'));
        var a = t.options.tabSize,
          l = T(o, e),
          s = d(l.text, null, a);
        l.stateAfter && (l.stateAfter = null);
        var u,
          c = l.text.match(/^\s*/)[0];
        if (r || /\S/.test(l.text)) {
          if (
            'smart' == n &&
            ((u = o.mode.indent(i, l.text.slice(c.length), l.text)) == go ||
              u > 150)
          ) {
            if (!r) return;
            n = 'prev';
          }
        } else (u = 0), (n = 'not');
        'prev' == n
          ? (u = e > o.first ? d(T(o, e - 1).text, null, a) : 0)
          : 'add' == n
            ? (u = s + t.options.indentUnit)
            : 'subtract' == n
              ? (u = s - t.options.indentUnit)
              : 'number' == typeof n && (u = s + n),
          (u = Math.max(0, u));
        var f = '',
          h = 0;
        if (t.options.indentWithTabs)
          for (var p = Math.floor(u / a); p; --p) (h += a), (f += '\t');
        if ((h < u && (f += v(u - h)), f != c))
          return (
            Pr(o, f, D(e, 0), D(e, c.length), '+input'),
            (l.stateAfter = null),
            !0
          );
        for (var g = 0; g < o.sel.ranges.length; g++) {
          var m = o.sel.ranges[g];
          if (m.head.line == e && m.head.ch < c.length) {
            var y = D(e, c.length);
            vr(o, g, new na(y, y));
            break;
          }
        }
      }
      function Ti(t) {
        Ta = t;
      }
      function Mi(t, e, n, r, i) {
        var o = t.doc;
        (t.display.shift = !1), r || (r = o.sel);
        var a = t.state.pasteIncoming || 'paste' == i,
          l = Ao(e),
          s = null;
        if (a && r.ranges.length > 1)
          if (Ta && Ta.text.join('\n') == e) {
            if (r.ranges.length % Ta.text.length == 0) {
              s = [];
              for (var u = 0; u < Ta.text.length; u++)
                s.push(o.splitLines(Ta.text[u]));
            }
          } else
            l.length == r.ranges.length &&
              t.options.pasteLinesPerSelection &&
              (s = m(l, function(t) {
                return [t];
              }));
        for (var c, f = r.ranges.length - 1; f >= 0; f--) {
          var d = r.ranges[f],
            h = d.from(),
            p = d.to();
          d.empty() &&
            (n && n > 0
              ? (h = D(h.line, h.ch - n))
              : t.state.overwrite && !a
                ? (p = D(
                    p.line,
                    Math.min(T(o, p.line).text.length, p.ch + g(l).length)
                  ))
                : Ta &&
                  Ta.lineWise &&
                  Ta.text.join('\n') == e &&
                  (h = p = D(h.line, 0))),
            (c = t.curOp.updateInput);
          var v = {
            from: h,
            to: p,
            text: s ? s[f % s.length] : l,
            origin: i || (a ? 'paste' : t.state.cutIncoming ? 'cut' : '+input'),
          };
          Or(t.doc, v), Zt(t, 'inputRead', t, v);
        }
        e && !a && _i(t, e),
          un(t),
          (t.curOp.updateInput = c),
          (t.curOp.typing = !0),
          (t.state.pasteIncoming = t.state.cutIncoming = !1);
      }
      function Oi(t, e) {
        var n = t.clipboardData && t.clipboardData.getData('Text');
        if (n)
          return (
            t.preventDefault(),
            e.isReadOnly() ||
              e.options.disableInput ||
              Sn(e, function() {
                return Mi(e, n, 0, null, 'paste');
              }),
            !0
          );
      }
      function _i(t, e) {
        if (t.options.electricChars && t.options.smartIndent)
          for (var n = t.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];
            if (
              !(
                i.head.ch > 100 ||
                (r && n.ranges[r - 1].head.line == i.head.line)
              )
            ) {
              var o = t.getModeAt(i.head),
                a = !1;
              if (o.electricChars) {
                for (var l = 0; l < o.electricChars.length; l++)
                  if (e.indexOf(o.electricChars.charAt(l)) > -1) {
                    a = Li(t, i.head.line, 'smart');
                    break;
                  }
              } else
                o.electricInput &&
                  o.electricInput.test(
                    T(t.doc, i.head.line).text.slice(0, i.head.ch)
                  ) &&
                  (a = Li(t, i.head.line, 'smart'));
              a && Zt(t, 'electricInput', t, i.head.line);
            }
          }
      }
      function Ai(t) {
        for (var e = [], n = [], r = 0; r < t.doc.sel.ranges.length; r++) {
          var i = t.doc.sel.ranges[r].head.line,
            o = { anchor: D(i, 0), head: D(i + 1, 0) };
          n.push(o), e.push(t.getRange(o.anchor, o.head));
        }
        return { text: e, ranges: n };
      }
      function Ni(t, e) {
        t.setAttribute('autocorrect', 'off'),
          t.setAttribute('autocapitalize', 'off'),
          t.setAttribute('spellcheck', !!e);
      }
      function Ei() {
        var t = r(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
          ),
          e = r(
            'div',
            [t],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;'
          );
        return (
          Ki ? (t.style.width = '1000px') : t.setAttribute('wrap', 'off'),
          Qi && (t.style.border = '1px solid black'),
          Ni(t),
          e
        );
      }
      function Pi(t, e, n, r, i) {
        function o(r) {
          var o;
          if (
            null ==
            (o = i
              ? (function(t, e, n, r) {
                  var i = dt(e, t.doc.direction);
                  if (!i) return ii(e, n, r);
                  n.ch >= e.text.length
                    ? ((n.ch = e.text.length), (n.sticky = 'before'))
                    : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
                  var o = ft(i, n.ch, n.sticky),
                    a = i[o];
                  if (
                    'ltr' == t.doc.direction &&
                    a.level % 2 == 0 &&
                    (r > 0 ? a.to > n.ch : a.from < n.ch)
                  )
                    return ii(e, n, r);
                  var l,
                    s = function(t, n) {
                      return ri(e, t instanceof D ? t.ch : t, n);
                    },
                    u = function(n) {
                      return t.options.lineWrapping
                        ? ((l = l || ye(t, e)), je(t, e, l, n))
                        : { begin: 0, end: e.text.length };
                    },
                    c = u('before' == n.sticky ? s(n, -1) : n.ch);
                  if ('rtl' == t.doc.direction || 1 == a.level) {
                    var f = (1 == a.level) == r < 0,
                      d = s(n, f ? 1 : -1);
                    if (
                      null != d &&
                      (f
                        ? d <= a.to && d <= c.end
                        : d >= a.from && d >= c.begin)
                    ) {
                      var h = f ? 'before' : 'after';
                      return new D(n.line, d, h);
                    }
                  }
                  var p = function(t, e, r) {
                      for (
                        var o = function(t, e) {
                          return e
                            ? new D(n.line, s(t, 1), 'before')
                            : new D(n.line, t, 'after');
                        };
                        t >= 0 && t < i.length;
                        t += e
                      ) {
                        var a = i[t],
                          l = e > 0 == (1 != a.level),
                          u = l ? r.begin : s(r.end, -1);
                        if (a.from <= u && u < a.to) return o(u, l);
                        if (
                          ((u = l ? a.from : s(a.to, -1)),
                          r.begin <= u && u < r.end)
                        )
                          return o(u, l);
                      }
                    },
                    v = p(o + r, r, c);
                  if (v) return v;
                  var g = r > 0 ? c.end : s(c.begin, -1);
                  return null == g ||
                    (r > 0 && g == e.text.length) ||
                    !(v = p(r > 0 ? 0 : i.length - 1, r, u(g)))
                    ? null
                    : v;
                })(t.cm, s, e, n)
              : ii(s, e, n))
          ) {
            if (
              r ||
              !(function() {
                var r = e.line + n;
                return (
                  !(r < t.first || r >= t.first + t.size) &&
                  ((e = new D(r, e.ch, e.sticky)), (s = T(t, r)))
                );
              })()
            )
              return !1;
            e = oi(i, t.cm, s, e.line, n);
          } else e = o;
          return !0;
        }
        var a = e,
          l = n,
          s = T(t, e.line);
        if ('char' == r) o();
        else if ('column' == r) o(!0);
        else if ('word' == r || 'group' == r)
          for (
            var u = null,
              c = 'group' == r,
              f = t.cm && t.cm.getHelper(e, 'wordChars'),
              d = !0;
            !(n < 0) || o(!d);
            d = !1
          ) {
            var h = s.text.charAt(e.ch) || '\n',
              p = x(h, f)
                ? 'w'
                : c && '\n' == h ? 'n' : !c || /\s/.test(h) ? null : 'p';
            if ((!c || d || p || (p = 's'), u && u != p)) {
              n < 0 && ((n = 1), o(), (e.sticky = 'after'));
              break;
            }
            if ((p && (u = p), n > 0 && !o(!d))) break;
          }
        var v = kr(t, e, a, l, !0);
        return j(a, v) && (v.hitSide = !0), v;
      }
      function Di(t, e, n, r) {
        var i,
          o = t.doc,
          a = e.left;
        if ('page' == r) {
          var l = Math.min(
              t.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            s = Math.max(l - 0.5 * He(t.display), 3);
          i = (n > 0 ? e.bottom : e.top) + n * s;
        } else 'line' == r && (i = n > 0 ? e.bottom + 3 : e.top - 3);
        for (var u; (u = De(t, a, i)).outside; ) {
          if (n < 0 ? i <= 0 : i >= o.height) {
            u.hitSide = !0;
            break;
          }
          i += 5 * n;
        }
        return u;
      }
      function Wi(t, e) {
        var n = me(t, e.line);
        if (!n || n.hidden) return null;
        var r = T(t.doc, e.line),
          i = ve(n, r, e.line),
          o = dt(r, t.doc.direction),
          a = 'left';
        if (o) {
          a = ft(o, e.ch) % 2 ? 'right' : 'left';
        }
        var l = we(i.map, e.ch, a);
        return (l.offset = 'right' == l.collapse ? l.end : l.start), l;
      }
      function ji(t, e) {
        return e && (t.bad = !0), t;
      }
      function Fi(t, e, n) {
        var r;
        if (e == t.display.lineDiv) {
          if (!(r = t.display.lineDiv.childNodes[n]))
            return ji(t.clipPos(D(t.display.viewTo - 1)), !0);
          (e = null), (n = 0);
        } else
          for (r = e; ; r = r.parentNode) {
            if (!r || r == t.display.lineDiv) return null;
            if (r.parentNode && r.parentNode == t.display.lineDiv) break;
          }
        for (var i = 0; i < t.display.view.length; i++) {
          var o = t.display.view[i];
          if (o.node == r)
            return (function(t, e, n) {
              function r(e, n, r) {
                for (var i = -1; i < (f ? f.length : 0); i++)
                  for (
                    var o = i < 0 ? c.map : f[i], a = 0;
                    a < o.length;
                    a += 3
                  ) {
                    var l = o[a + 2];
                    if (l == e || l == n) {
                      var s = A(i < 0 ? t.line : t.rest[i]),
                        u = o[a] + r;
                      return (
                        (r < 0 || l != e) && (u = o[a + (r ? 1 : 0)]), D(s, u)
                      );
                    }
                  }
              }
              var i = t.text.firstChild,
                o = !1;
              if (!e || !a(i, e)) return ji(D(A(t.line), 0), !0);
              if (e == i && ((o = !0), (e = i.childNodes[n]), (n = 0), !e)) {
                var l = t.rest ? g(t.rest) : t.line;
                return ji(D(A(l), l.text.length), o);
              }
              var s = 3 == e.nodeType ? e : null,
                u = e;
              s ||
                1 != e.childNodes.length ||
                3 != e.firstChild.nodeType ||
                ((s = e.firstChild), n && (n = s.nodeValue.length));
              for (; u.parentNode != i; ) u = u.parentNode;
              var c = t.measure,
                f = c.maps;
              var d = r(s, u, n);
              if (d) return ji(d, o);
              for (
                var h = u.nextSibling, p = s ? s.nodeValue.length - n : 0;
                h;
                h = h.nextSibling
              ) {
                if ((d = r(h, h.firstChild, 0)))
                  return ji(D(d.line, d.ch - p), o);
                p += h.textContent.length;
              }
              for (var v = u.previousSibling, m = n; v; v = v.previousSibling) {
                if ((d = r(v, v.firstChild, -1)))
                  return ji(D(d.line, d.ch + m), o);
                m += v.textContent.length;
              }
            })(o, e, n);
        }
      }
      var Hi = navigator.userAgent,
        zi = navigator.platform,
        Ii = /gecko\/\d/i.test(Hi),
        Ri = /MSIE \d/.test(Hi),
        Bi = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Hi),
        Gi = /Edge\/(\d+)/.exec(Hi),
        Vi = Ri || Bi || Gi,
        Ui = Vi && (Ri ? document.documentMode || 6 : +(Gi || Bi)[1]),
        Ki = !Gi && /WebKit\//.test(Hi),
        qi = Ki && /Qt\/\d+\.\d+/.test(Hi),
        $i = !Gi && /Chrome\//.test(Hi),
        Xi = /Opera\//.test(Hi),
        Yi = /Apple Computer/.test(navigator.vendor),
        Zi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Hi),
        Ji = /PhantomJS/.test(Hi),
        Qi = !Gi && /AppleWebKit/.test(Hi) && /Mobile\/\w+/.test(Hi),
        to = /Android/.test(Hi),
        eo =
          Qi ||
          to ||
          /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Hi),
        no = Qi || /Mac/.test(zi),
        ro = /\bCrOS\b/.test(Hi),
        io = /win/i.test(zi),
        oo = Xi && Hi.match(/Version\/(\d*\.\d*)/);
      oo && (oo = Number(oo[1])), oo && oo >= 15 && ((Xi = !1), (Ki = !0));
      var ao,
        lo = no && (qi || (Xi && (null == oo || oo < 12.11))),
        so = Ii || (Vi && Ui >= 9),
        uo = function(e, n) {
          var r = e.className,
            i = t(n).exec(r);
          if (i) {
            var o = r.slice(i.index + i[0].length);
            e.className = r.slice(0, i.index) + (o ? i[1] + o : '');
          }
        };
      ao = document.createRange
        ? function(t, e, n, r) {
            var i = document.createRange();
            return i.setEnd(r || t, n), i.setStart(t, e), i;
          }
        : function(t, e, n) {
            var r = document.body.createTextRange();
            try {
              r.moveToElementText(t.parentNode);
            } catch (t) {
              return r;
            }
            return (
              r.collapse(!0),
              r.moveEnd('character', n),
              r.moveStart('character', e),
              r
            );
          };
      var co = function(t) {
        t.select();
      };
      Qi
        ? (co = function(t) {
            (t.selectionStart = 0), (t.selectionEnd = t.value.length);
          })
        : Vi &&
          (co = function(t) {
            try {
              t.select();
            } catch (t) {}
          });
      var fo = function() {
        this.id = null;
      };
      fo.prototype.set = function(t, e) {
        clearTimeout(this.id), (this.id = setTimeout(e, t));
      };
      var ho,
        po,
        vo = 30,
        go = {
          toString: function() {
            return 'CodeMirror.Pass';
          },
        },
        mo = { scroll: !1 },
        yo = { origin: '*mouse' },
        bo = { origin: '+move' },
        wo = [''],
        xo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
        So = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
        Co = !1,
        ko = !1,
        Lo = null,
        To = (function() {
          function t(t) {
            return t <= 247
              ? n.charAt(t)
              : 1424 <= t && t <= 1524
                ? 'R'
                : 1536 <= t && t <= 1785
                  ? r.charAt(t - 1536)
                  : 1774 <= t && t <= 2220
                    ? 'r'
                    : 8192 <= t && t <= 8203 ? 'w' : 8204 == t ? 'b' : 'L';
          }
          function e(t, e, n) {
            (this.level = t), (this.from = e), (this.to = n);
          }
          var n =
              'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
            r =
              'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111',
            i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            o = /[stwN]/,
            a = /[LRr]/,
            l = /[Lb1n]/,
            s = /[1n]/;
          return function(n, r) {
            var u = 'ltr' == r ? 'L' : 'R';
            if (0 == n.length || ('ltr' == r && !i.test(n))) return !1;
            for (var c = n.length, f = [], d = 0; d < c; ++d)
              f.push(t(n.charCodeAt(d)));
            for (var h = 0, p = u; h < c; ++h) {
              var v = f[h];
              'm' == v ? (f[h] = p) : (p = v);
            }
            for (var m = 0, y = u; m < c; ++m) {
              var b = f[m];
              '1' == b && 'r' == y
                ? (f[m] = 'n')
                : a.test(b) && ((y = b), 'r' == b && (f[m] = 'R'));
            }
            for (var w = 1, x = f[0]; w < c - 1; ++w) {
              var S = f[w];
              '+' == S && '1' == x && '1' == f[w + 1]
                ? (f[w] = '1')
                : ',' != S ||
                  x != f[w + 1] ||
                  ('1' != x && 'n' != x) ||
                  (f[w] = x),
                (x = S);
            }
            for (var C = 0; C < c; ++C) {
              var k = f[C];
              if (',' == k) f[C] = 'N';
              else if ('%' == k) {
                var L = void 0;
                for (L = C + 1; L < c && '%' == f[L]; ++L);
                for (
                  var T =
                      (C && '!' == f[C - 1]) || (L < c && '1' == f[L])
                        ? '1'
                        : 'N',
                    M = C;
                  M < L;
                  ++M
                )
                  f[M] = T;
                C = L - 1;
              }
            }
            for (var O = 0, _ = u; O < c; ++O) {
              var A = f[O];
              'L' == _ && '1' == A ? (f[O] = 'L') : a.test(A) && (_ = A);
            }
            for (var N = 0; N < c; ++N)
              if (o.test(f[N])) {
                var E = void 0;
                for (E = N + 1; E < c && o.test(f[E]); ++E);
                for (
                  var P = 'L' == (N ? f[N - 1] : u),
                    D = P == ('L' == (E < c ? f[E] : u)) ? (P ? 'L' : 'R') : u,
                    W = N;
                  W < E;
                  ++W
                )
                  f[W] = D;
                N = E - 1;
              }
            for (var j, F = [], H = 0; H < c; )
              if (l.test(f[H])) {
                var z = H;
                for (++H; H < c && l.test(f[H]); ++H);
                F.push(new e(0, z, H));
              } else {
                var I = H,
                  R = F.length;
                for (++H; H < c && 'L' != f[H]; ++H);
                for (var B = I; B < H; )
                  if (s.test(f[B])) {
                    I < B && F.splice(R, 0, new e(1, I, B));
                    var G = B;
                    for (++B; B < H && s.test(f[B]); ++B);
                    F.splice(R, 0, new e(2, G, B)), (I = B);
                  } else ++B;
                I < H && F.splice(R, 0, new e(1, I, H));
              }
            return (
              'ltr' == r &&
                (1 == F[0].level &&
                  (j = n.match(/^\s+/)) &&
                  ((F[0].from = j[0].length),
                  F.unshift(new e(0, 0, j[0].length))),
                1 == g(F).level &&
                  (j = n.match(/\s+$/)) &&
                  ((g(F).to -= j[0].length),
                  F.push(new e(0, c - j[0].length, c)))),
              'rtl' == r ? F.reverse() : F
            );
          };
        })(),
        Mo = [],
        Oo = function(t, e, n) {
          if (t.addEventListener) t.addEventListener(e, n, !1);
          else if (t.attachEvent) t.attachEvent('on' + e, n);
          else {
            var r = t._handlers || (t._handlers = {});
            r[e] = (r[e] || Mo).concat(n);
          }
        },
        _o = (function() {
          if (Vi && Ui < 9) return !1;
          var t = r('div');
          return 'draggable' in t || 'dragDrop' in t;
        })(),
        Ao =
          3 != '\n\nb'.split(/\n/).length
            ? function(t) {
                for (var e = 0, n = [], r = t.length; e <= r; ) {
                  var i = t.indexOf('\n', e);
                  -1 == i && (i = t.length);
                  var o = t.slice(e, '\r' == t.charAt(i - 1) ? i - 1 : i),
                    a = o.indexOf('\r');
                  -1 != a
                    ? (n.push(o.slice(0, a)), (e += a + 1))
                    : (n.push(o), (e = i + 1));
                }
                return n;
              }
            : function(t) {
                return t.split(/\r\n?|\n/);
              },
        No = window.getSelection
          ? function(t) {
              try {
                return t.selectionStart != t.selectionEnd;
              } catch (t) {
                return !1;
              }
            }
          : function(t) {
              var e;
              try {
                e = t.ownerDocument.selection.createRange();
              } catch (t) {}
              return (
                !(!e || e.parentElement() != t) &&
                0 != e.compareEndPoints('StartToEnd', e)
              );
            },
        Eo = (function() {
          var t = r('div');
          return (
            'oncopy' in t ||
            (t.setAttribute('oncopy', 'return;'), 'function' == typeof t.oncopy)
          );
        })(),
        Po = null,
        Do = {},
        Wo = {},
        jo = {},
        Fo = function(t, e, n) {
          (this.pos = this.start = 0),
            (this.string = t),
            (this.tabSize = e || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = n);
        };
      (Fo.prototype.eol = function() {
        return this.pos >= this.string.length;
      }),
        (Fo.prototype.sol = function() {
          return this.pos == this.lineStart;
        }),
        (Fo.prototype.peek = function() {
          return this.string.charAt(this.pos) || void 0;
        }),
        (Fo.prototype.next = function() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }),
        (Fo.prototype.eat = function(t) {
          var e = this.string.charAt(this.pos);
          if ('string' == typeof t ? e == t : e && (t.test ? t.test(e) : t(e)))
            return ++this.pos, e;
        }),
        (Fo.prototype.eatWhile = function(t) {
          for (var e = this.pos; this.eat(t); );
          return this.pos > e;
        }),
        (Fo.prototype.eatSpace = function() {
          for (
            var t = this, e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++t.pos;
          return this.pos > e;
        }),
        (Fo.prototype.skipToEnd = function() {
          this.pos = this.string.length;
        }),
        (Fo.prototype.skipTo = function(t) {
          var e = this.string.indexOf(t, this.pos);
          if (e > -1) return (this.pos = e), !0;
        }),
        (Fo.prototype.backUp = function(t) {
          this.pos -= t;
        }),
        (Fo.prototype.column = function() {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = d(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? d(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        }),
        (Fo.prototype.indentation = function() {
          return (
            d(this.string, null, this.tabSize) -
            (this.lineStart ? d(this.string, this.lineStart, this.tabSize) : 0)
          );
        }),
        (Fo.prototype.match = function(t, e, n) {
          if ('string' != typeof t) {
            var r = this.string.slice(this.pos).match(t);
            return r && r.index > 0
              ? null
              : (r && !1 !== e && (this.pos += r[0].length), r);
          }
          var i = function(t) {
            return n ? t.toLowerCase() : t;
          };
          if (i(this.string.substr(this.pos, t.length)) == i(t))
            return !1 !== e && (this.pos += t.length), !0;
        }),
        (Fo.prototype.current = function() {
          return this.string.slice(this.start, this.pos);
        }),
        (Fo.prototype.hideFirstChars = function(t, e) {
          this.lineStart += t;
          try {
            return e();
          } finally {
            this.lineStart -= t;
          }
        }),
        (Fo.prototype.lookAhead = function(t) {
          var e = this.lineOracle;
          return e && e.lookAhead(t);
        }),
        (Fo.prototype.baseToken = function() {
          var t = this.lineOracle;
          return t && t.baseToken(this.pos);
        });
      var Ho = function(t, e) {
          (this.state = t), (this.lookAhead = e);
        },
        zo = function(t, e, n, r) {
          (this.state = e),
            (this.doc = t),
            (this.line = n),
            (this.maxLookAhead = r || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
        };
      (zo.prototype.lookAhead = function(t) {
        var e = this.doc.getLine(this.line + t);
        return null != e && t > this.maxLookAhead && (this.maxLookAhead = t), e;
      }),
        (zo.prototype.baseToken = function(t) {
          var e = this;
          if (!this.baseTokens) return null;
          for (; this.baseTokens[this.baseTokenPos] <= t; ) e.baseTokenPos += 2;
          var n = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: n && n.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - t,
          };
        }),
        (zo.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (zo.fromSaved = function(t, e, n) {
          return e instanceof Ho
            ? new zo(t, Nt(t.mode, e.state), n, e.lookAhead)
            : new zo(t, Nt(t.mode, e), n);
        }),
        (zo.prototype.save = function(t) {
          var e = !1 !== t ? Nt(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new Ho(e, this.maxLookAhead) : e;
        });
      var Io = function(t, e, n) {
          (this.start = t.start),
            (this.end = t.pos),
            (this.string = t.current()),
            (this.type = e || null),
            (this.state = n);
        },
        Ro = function(t, e, n) {
          (this.text = t), X(this, e), (this.height = n ? n(this) : 1);
        };
      (Ro.prototype.lineNo = function() {
        return A(this);
      }),
        bt(Ro);
      var Bo,
        Go = {},
        Vo = {},
        Uo = null,
        Ko = null,
        qo = { left: 0, right: 0, top: 0, bottom: 0 },
        $o = function(t, e, n) {
          this.cm = n;
          var i = (this.vert = r(
              'div',
              [r('div', null, null, 'min-width: 1px')],
              'CodeMirror-vscrollbar'
            )),
            o = (this.horiz = r(
              'div',
              [r('div', null, null, 'height: 100%; min-height: 1px')],
              'CodeMirror-hscrollbar'
            ));
          t(i),
            t(o),
            Oo(i, 'scroll', function() {
              i.clientHeight && e(i.scrollTop, 'vertical');
            }),
            Oo(o, 'scroll', function() {
              o.clientWidth && e(o.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            Vi &&
              Ui < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
      ($o.prototype.update = function(t) {
        var e = t.scrollWidth > t.clientWidth + 1,
          n = t.scrollHeight > t.clientHeight + 1,
          r = t.nativeBarWidth;
        if (n) {
          (this.vert.style.display = 'block'),
            (this.vert.style.bottom = e ? r + 'px' : '0');
          var i = t.viewHeight - (e ? r : 0);
          this.vert.firstChild.style.height =
            Math.max(0, t.scrollHeight - t.clientHeight + i) + 'px';
        } else
          (this.vert.style.display = ''),
            (this.vert.firstChild.style.height = '0');
        if (e) {
          (this.horiz.style.display = 'block'),
            (this.horiz.style.right = n ? r + 'px' : '0'),
            (this.horiz.style.left = t.barLeft + 'px');
          var o = t.viewWidth - t.barLeft - (n ? r : 0);
          this.horiz.firstChild.style.width =
            Math.max(0, t.scrollWidth - t.clientWidth + o) + 'px';
        } else
          (this.horiz.style.display = ''),
            (this.horiz.firstChild.style.width = '0');
        return (
          !this.checkedZeroWidth &&
            t.clientHeight > 0 &&
            (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: n ? r : 0, bottom: e ? r : 0 }
        );
      }),
        ($o.prototype.setScrollLeft = function(t) {
          this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
        }),
        ($o.prototype.setScrollTop = function(t) {
          this.vert.scrollTop != t && (this.vert.scrollTop = t),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
        }),
        ($o.prototype.zeroWidthHack = function() {
          var t = no && !Zi ? '12px' : '18px';
          (this.horiz.style.height = this.vert.style.width = t),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              'none'),
            (this.disableHoriz = new fo()),
            (this.disableVert = new fo());
        }),
        ($o.prototype.enableZeroWidthBar = function(t, e, n) {
          function r() {
            var i = t.getBoundingClientRect();
            ('vert' == n
              ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
              : document.elementFromPoint(
                  (i.right + i.left) / 2,
                  i.bottom - 1
                )) != t
              ? (t.style.pointerEvents = 'none')
              : e.set(1e3, r);
          }
          (t.style.pointerEvents = 'auto'), e.set(1e3, r);
        }),
        ($o.prototype.clear = function() {
          var t = this.horiz.parentNode;
          t.removeChild(this.horiz), t.removeChild(this.vert);
        });
      var Xo = function() {};
      (Xo.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }),
        (Xo.prototype.setScrollLeft = function() {}),
        (Xo.prototype.setScrollTop = function() {}),
        (Xo.prototype.clear = function() {});
      var Yo = { native: $o, null: Xo },
        Zo = 0,
        Jo = function(t, e, n) {
          var r = t.display;
          (this.viewport = e),
            (this.visible = rn(r, t.doc, e)),
            (this.editorIsHidden = !r.wrapper.offsetWidth),
            (this.wrapperHeight = r.wrapper.clientHeight),
            (this.wrapperWidth = r.wrapper.clientWidth),
            (this.oldDisplayWidth = he(t)),
            (this.force = n),
            (this.dims = Ie(t)),
            (this.events = []);
        };
      (Jo.prototype.signal = function(t, e) {
        yt(t, e) && this.events.push(arguments);
      }),
        (Jo.prototype.finish = function() {
          for (var t = this, e = 0; e < this.events.length; e++)
            vt.apply(null, t.events[e]);
        });
      var Qo = 0,
        ta = null;
      Vi
        ? (ta = -0.53)
        : Ii ? (ta = 15) : $i ? (ta = -0.7) : Yi && (ta = -1 / 3);
      var ea = function(t, e) {
        (this.ranges = t), (this.primIndex = e);
      };
      (ea.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }),
        (ea.prototype.equals = function(t) {
          var e = this;
          if (t == this) return !0;
          if (
            t.primIndex != this.primIndex ||
            t.ranges.length != this.ranges.length
          )
            return !1;
          for (var n = 0; n < this.ranges.length; n++) {
            var r = e.ranges[n],
              i = t.ranges[n];
            if (!j(r.anchor, i.anchor) || !j(r.head, i.head)) return !1;
          }
          return !0;
        }),
        (ea.prototype.deepCopy = function() {
          for (var t = this, e = [], n = 0; n < this.ranges.length; n++)
            e[n] = new na(F(t.ranges[n].anchor), F(t.ranges[n].head));
          return new ea(e, this.primIndex);
        }),
        (ea.prototype.somethingSelected = function() {
          for (var t = this, e = 0; e < this.ranges.length; e++)
            if (!t.ranges[e].empty()) return !0;
          return !1;
        }),
        (ea.prototype.contains = function(t, e) {
          var n = this;
          e || (e = t);
          for (var r = 0; r < this.ranges.length; r++) {
            var i = n.ranges[r];
            if (W(e, i.from()) >= 0 && W(t, i.to()) <= 0) return r;
          }
          return -1;
        });
      var na = function(t, e) {
        (this.anchor = t), (this.head = e);
      };
      (na.prototype.from = function() {
        return z(this.anchor, this.head);
      }),
        (na.prototype.to = function() {
          return H(this.anchor, this.head);
        }),
        (na.prototype.empty = function() {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        }),
        (Hr.prototype = {
          chunkSize: function() {
            return this.lines.length;
          },
          removeInner: function(t, e) {
            for (var n = this, r = t, i = t + e; r < i; ++r) {
              var o = n.lines[r];
              (n.height -= o.height), Gt(o), Zt(o, 'delete');
            }
            this.lines.splice(t, e);
          },
          collapse: function(t) {
            t.push.apply(t, this.lines);
          },
          insertInner: function(t, e, n) {
            var r = this;
            (this.height += n),
              (this.lines = this.lines
                .slice(0, t)
                .concat(e)
                .concat(this.lines.slice(t)));
            for (var i = 0; i < e.length; ++i) e[i].parent = r;
          },
          iterN: function(t, e, n) {
            for (var r = this, i = t + e; t < i; ++t)
              if (n(r.lines[t])) return !0;
          },
        }),
        (zr.prototype = {
          chunkSize: function() {
            return this.size;
          },
          removeInner: function(t, e) {
            var n = this;
            this.size -= e;
            for (var r = 0; r < this.children.length; ++r) {
              var i = n.children[r],
                o = i.chunkSize();
              if (t < o) {
                var a = Math.min(e, o - t),
                  l = i.height;
                if (
                  (i.removeInner(t, a),
                  (n.height -= l - i.height),
                  o == a && (n.children.splice(r--, 1), (i.parent = null)),
                  0 == (e -= a))
                )
                  break;
                t = 0;
              } else t -= o;
            }
            if (
              this.size - e < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof Hr))
            ) {
              var s = [];
              this.collapse(s),
                (this.children = [new Hr(s)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function(t) {
            for (var e = this, n = 0; n < this.children.length; ++n)
              e.children[n].collapse(t);
          },
          insertInner: function(t, e, n) {
            var r = this;
            (this.size += e.length), (this.height += n);
            for (var i = 0; i < this.children.length; ++i) {
              var o = r.children[i],
                a = o.chunkSize();
              if (t <= a) {
                if ((o.insertInner(t, e, n), o.lines && o.lines.length > 50)) {
                  for (
                    var l = o.lines.length % 25 + 25, s = l;
                    s < o.lines.length;

                  ) {
                    var u = new Hr(o.lines.slice(s, (s += 25)));
                    (o.height -= u.height),
                      r.children.splice(++i, 0, u),
                      (u.parent = r);
                  }
                  (o.lines = o.lines.slice(0, l)), r.maybeSpill();
                }
                break;
              }
              t -= a;
            }
          },
          maybeSpill: function() {
            if (!(this.children.length <= 10)) {
              var t = this;
              do {
                var e = new zr(t.children.splice(t.children.length - 5, 5));
                if (t.parent) {
                  (t.size -= e.size), (t.height -= e.height);
                  var n = h(t.parent.children, t);
                  t.parent.children.splice(n + 1, 0, e);
                } else {
                  var r = new zr(t.children);
                  (r.parent = t), (t.children = [r, e]), (t = r);
                }
                e.parent = t.parent;
              } while (t.children.length > 10);
              t.parent.maybeSpill();
            }
          },
          iterN: function(t, e, n) {
            for (var r = this, i = 0; i < this.children.length; ++i) {
              var o = r.children[i],
                a = o.chunkSize();
              if (t < a) {
                var l = Math.min(e, a - t);
                if (o.iterN(t, l, n)) return !0;
                if (0 == (e -= l)) break;
                t = 0;
              } else t -= a;
            }
          },
        });
      var ra = function(t, e, n) {
        var r = this;
        if (n) for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
        (this.doc = t), (this.node = e);
      };
      (ra.prototype.clear = function() {
        var t = this,
          e = this.doc.cm,
          n = this.line.widgets,
          r = this.line,
          i = A(r);
        if (null != i && n) {
          for (var o = 0; o < n.length; ++o) n[o] == t && n.splice(o--, 1);
          n.length || (r.widgets = null);
          var a = le(this);
          _(r, Math.max(0, r.height - a)),
            e &&
              (Sn(e, function() {
                Ir(e, r, -a), Mn(e, i, 'widget');
              }),
              Zt(e, 'lineWidgetCleared', e, this, i));
        }
      }),
        (ra.prototype.changed = function() {
          var t = this,
            e = this.height,
            n = this.doc.cm,
            r = this.line;
          this.height = null;
          var i = le(this) - e;
          i &&
            (_(r, r.height + i),
            n &&
              Sn(n, function() {
                (n.curOp.forceUpdate = !0),
                  Ir(n, r, i),
                  Zt(n, 'lineWidgetChanged', n, t, A(r));
              }));
        }),
        bt(ra);
      var ia = 0,
        oa = function(t, e) {
          (this.lines = []), (this.type = e), (this.doc = t), (this.id = ++ia);
        };
      (oa.prototype.clear = function() {
        var t = this;
        if (!this.explicitlyCleared) {
          var e = this.doc.cm,
            n = e && !e.curOp;
          if ((n && wn(e), yt(this, 'clear'))) {
            var r = this.find();
            r && Zt(this, 'clear', r.from, r.to);
          }
          for (var i = null, o = null, a = 0; a < this.lines.length; ++a) {
            var l = t.lines[a],
              s = V(l.markedSpans, t);
            e && !t.collapsed
              ? Mn(e, A(l), 'text')
              : e && (null != s.to && (o = A(l)), null != s.from && (i = A(l))),
              (l.markedSpans = U(l.markedSpans, s)),
              null == s.from &&
                t.collapsed &&
                !at(t.doc, l) &&
                e &&
                _(l, He(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var u = 0; u < this.lines.length; ++u) {
              var c = rt(t.lines[u]),
                f = ut(c);
              f > e.display.maxLineLength &&
                ((e.display.maxLine = c),
                (e.display.maxLineLength = f),
                (e.display.maxLineChanged = !0));
            }
          null != i && e && this.collapsed && Tn(e, i, o + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), e && xr(e.doc)),
            e && Zt(e, 'markerCleared', e, this, i, o),
            n && xn(e),
            this.parent && this.parent.clear();
        }
      }),
        (oa.prototype.find = function(t, e) {
          var n = this;
          null == t && 'bookmark' == this.type && (t = 1);
          for (var r, i, o = 0; o < this.lines.length; ++o) {
            var a = n.lines[o],
              l = V(a.markedSpans, n);
            if (null != l.from && ((r = D(e ? a : A(a), l.from)), -1 == t))
              return r;
            if (null != l.to && ((i = D(e ? a : A(a), l.to)), 1 == t)) return i;
          }
          return r && { from: r, to: i };
        }),
        (oa.prototype.changed = function() {
          var t = this,
            e = this.find(-1, !0),
            n = this,
            r = this.doc.cm;
          e &&
            r &&
            Sn(r, function() {
              var i = e.line,
                o = A(e.line),
                a = me(r, o);
              if (
                (a &&
                  (Se(a),
                  (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                (r.curOp.updateMaxLine = !0),
                !at(n.doc, i) && null != n.height)
              ) {
                var l = n.height;
                n.height = null;
                var s = le(n) - l;
                s && _(i, i.height + s);
              }
              Zt(r, 'markerChanged', r, t);
            });
        }),
        (oa.prototype.attachLine = function(t) {
          if (!this.lines.length && this.doc.cm) {
            var e = this.doc.cm.curOp;
            (e.maybeHiddenMarkers && -1 != h(e.maybeHiddenMarkers, this)) ||
              (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(
                this
              );
          }
          this.lines.push(t);
        }),
        (oa.prototype.detachLine = function(t) {
          if (
            (this.lines.splice(h(this.lines, t), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var e = this.doc.cm.curOp;
            (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this);
          }
        }),
        bt(oa);
      var aa = function(t, e) {
        var n = this;
        (this.markers = t), (this.primary = e);
        for (var r = 0; r < t.length; ++r) t[r].parent = n;
      };
      (aa.prototype.clear = function() {
        var t = this;
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e) t.markers[e].clear();
          Zt(this, 'clear');
        }
      }),
        (aa.prototype.find = function(t, e) {
          return this.primary.find(t, e);
        }),
        bt(aa);
      var la = 0,
        sa = function t(e, n, r, i, o) {
          if (!(this instanceof t)) return new t(e, n, r, i, o);
          null == r && (r = 0),
            zr.call(this, [new Hr([new Ro('', null)])]),
            (this.first = r),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = r);
          var a = D(r, 0);
          (this.sel = Vn(a)),
            (this.history = new nr(null)),
            (this.id = ++la),
            (this.modeOption = n),
            (this.lineSep = i),
            (this.direction = 'rtl' == o ? 'rtl' : 'ltr'),
            (this.extend = !1),
            'string' == typeof e && (e = this.splitLines(e)),
            Jn(this, { from: a, to: a, text: e }),
            yr(this, Vn(a), mo);
        };
      (sa.prototype = b(zr.prototype, {
        constructor: sa,
        iter: function(t, e, n) {
          n
            ? this.iterN(t - this.first, e - t, n)
            : this.iterN(this.first, this.first + this.size, t);
        },
        insert: function(t, e) {
          for (var n = 0, r = 0; r < e.length; ++r) n += e[r].height;
          this.insertInner(t - this.first, e, n);
        },
        remove: function(t, e) {
          this.removeInner(t - this.first, e);
        },
        getValue: function(t) {
          var e = O(this, this.first, this.first + this.size);
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        setValue: Ln(function(t) {
          var e = D(this.first, 0),
            n = this.first + this.size - 1;
          Or(
            this,
            {
              from: e,
              to: D(n, T(this, n).text.length),
              text: this.splitLines(t),
              origin: 'setValue',
              full: !0,
            },
            !0
          ),
            this.cm && cn(this.cm, 0, 0),
            yr(this, Vn(e), mo);
        }),
        replaceRange: function(t, e, n, r) {
          Pr(this, t, (e = R(this, e)), (n = n ? R(this, n) : e), r);
        },
        getRange: function(t, e, n) {
          var r = M(this, R(this, t), R(this, e));
          return !1 === n ? r : r.join(n || this.lineSeparator());
        },
        getLine: function(t) {
          var e = this.getLineHandle(t);
          return e && e.text;
        },
        getLineHandle: function(t) {
          if (E(this, t)) return T(this, t);
        },
        getLineNumber: function(t) {
          return A(t);
        },
        getLineHandleVisualStart: function(t) {
          return 'number' == typeof t && (t = T(this, t)), rt(t);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(t) {
          return R(this, t);
        },
        getCursor: function(t) {
          var e = this.sel.primary();
          return null == t || 'head' == t
            ? e.head
            : 'anchor' == t
              ? e.anchor
              : 'end' == t || 'to' == t || !1 === t ? e.to() : e.from();
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: Ln(function(t, e, n) {
          gr(this, R(this, 'number' == typeof t ? D(t, e || 0) : t), null, n);
        }),
        setSelection: Ln(function(t, e, n) {
          gr(this, R(this, t), R(this, e || t), n);
        }),
        extendSelection: Ln(function(t, e, n) {
          hr(this, R(this, t), e && R(this, e), n);
        }),
        extendSelections: Ln(function(t, e) {
          pr(this, B(this, t), e);
        }),
        extendSelectionsBy: Ln(function(t, e) {
          pr(this, B(this, m(this.sel.ranges, t)), e);
        }),
        setSelections: Ln(function(t, e, n) {
          var r = this;
          if (t.length) {
            for (var i = [], o = 0; o < t.length; o++)
              i[o] = new na(R(r, t[o].anchor), R(r, t[o].head));
            null == e && (e = Math.min(t.length - 1, this.sel.primIndex)),
              yr(this, Gn(i, e), n);
          }
        }),
        addSelection: Ln(function(t, e, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new na(R(this, t), R(this, e || t))),
            yr(this, Gn(r, r.length - 1), n);
        }),
        getSelection: function(t) {
          for (var e, n = this, r = this.sel.ranges, i = 0; i < r.length; i++) {
            var o = M(n, r[i].from(), r[i].to());
            e = e ? e.concat(o) : o;
          }
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        getSelections: function(t) {
          for (
            var e = this, n = [], r = this.sel.ranges, i = 0;
            i < r.length;
            i++
          ) {
            var o = M(e, r[i].from(), r[i].to());
            !1 !== t && (o = o.join(t || e.lineSeparator())), (n[i] = o);
          }
          return n;
        },
        replaceSelection: function(t, e, n) {
          for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = t;
          this.replaceSelections(r, e, n || '+input');
        },
        replaceSelections: Ln(function(t, e, n) {
          for (
            var r = this, i = [], o = this.sel, a = 0;
            a < o.ranges.length;
            a++
          ) {
            var l = o.ranges[a];
            i[a] = {
              from: l.from(),
              to: l.to(),
              text: r.splitLines(t[a]),
              origin: n,
            };
          }
          for (
            var s =
                e &&
                'end' != e &&
                (function(t, e, n) {
                  for (
                    var r = [], i = D(t.first, 0), o = i, a = 0;
                    a < e.length;
                    a++
                  ) {
                    var l = e[a],
                      s = $n(l.from, i, o),
                      u = $n(Un(l), i, o);
                    if (((i = l.to), (o = u), 'around' == n)) {
                      var c = t.sel.ranges[a],
                        f = W(c.head, c.anchor) < 0;
                      r[a] = new na(f ? u : s, f ? s : u);
                    } else r[a] = new na(s, s);
                  }
                  return new ea(r, t.sel.primIndex);
                })(this, i, e),
              u = i.length - 1;
            u >= 0;
            u--
          )
            Or(r, i[u]);
          s ? mr(this, s) : this.cm && un(this.cm);
        }),
        undo: Ln(function() {
          Ar(this, 'undo');
        }),
        redo: Ln(function() {
          Ar(this, 'redo');
        }),
        undoSelection: Ln(function() {
          Ar(this, 'undo', !0);
        }),
        redoSelection: Ln(function() {
          Ar(this, 'redo', !0);
        }),
        setExtending: function(t) {
          this.extend = t;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (
            var t = this.history, e = 0, n = 0, r = 0;
            r < t.done.length;
            r++
          )
            t.done[r].ranges || ++e;
          for (var i = 0; i < t.undone.length; i++) t.undone[i].ranges || ++n;
          return { undo: e, redo: n };
        },
        clearHistory: function() {
          this.history = new nr(this.history.maxGeneration);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(t) {
          return (
            t &&
              (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
          );
        },
        isClean: function(t) {
          return this.history.generation == (t || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: fr(this.history.done),
            undone: fr(this.history.undone),
          };
        },
        setHistory: function(t) {
          var e = (this.history = new nr(this.history.maxGeneration));
          (e.done = fr(t.done.slice(0), null, !0)),
            (e.undone = fr(t.undone.slice(0), null, !0));
        },
        setGutterMarker: Ln(function(t, e, n) {
          return Fr(this, t, 'gutter', function(t) {
            var r = t.gutterMarkers || (t.gutterMarkers = {});
            return (r[e] = n), !n && S(r) && (t.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Ln(function(t) {
          var e = this;
          this.iter(function(n) {
            n.gutterMarkers &&
              n.gutterMarkers[t] &&
              Fr(e, n, 'gutter', function() {
                return (
                  (n.gutterMarkers[t] = null),
                  S(n.gutterMarkers) && (n.gutterMarkers = null),
                  !0
                );
              });
          });
        }),
        lineInfo: function(t) {
          var e;
          if ('number' == typeof t) {
            if (!E(this, t)) return null;
            if (((e = t), !(t = T(this, t)))) return null;
          } else if (null == (e = A(t))) return null;
          return {
            line: e,
            handle: t,
            text: t.text,
            gutterMarkers: t.gutterMarkers,
            textClass: t.textClass,
            bgClass: t.bgClass,
            wrapClass: t.wrapClass,
            widgets: t.widgets,
          };
        },
        addLineClass: Ln(function(e, n, r) {
          return Fr(this, e, 'gutter' == n ? 'gutter' : 'class', function(e) {
            var i =
              'text' == n
                ? 'textClass'
                : 'background' == n
                  ? 'bgClass'
                  : 'gutter' == n ? 'gutterClass' : 'wrapClass';
            if (e[i]) {
              if (t(r).test(e[i])) return !1;
              e[i] += ' ' + r;
            } else e[i] = r;
            return !0;
          });
        }),
        removeLineClass: Ln(function(e, n, r) {
          return Fr(this, e, 'gutter' == n ? 'gutter' : 'class', function(e) {
            var i =
                'text' == n
                  ? 'textClass'
                  : 'background' == n
                    ? 'bgClass'
                    : 'gutter' == n ? 'gutterClass' : 'wrapClass',
              o = e[i];
            if (!o) return !1;
            if (null == r) e[i] = null;
            else {
              var a = o.match(t(r));
              if (!a) return !1;
              var l = a.index + a[0].length;
              e[i] =
                o.slice(0, a.index) +
                  (a.index && l != o.length ? ' ' : '') +
                  o.slice(l) || null;
            }
            return !0;
          });
        }),
        addLineWidget: Ln(function(t, e, n) {
          return (function(t, e, n, r) {
            var i = new ra(t, n, r),
              o = t.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              Fr(t, e, 'widget', function(e) {
                var n = e.widgets || (e.widgets = []);
                if (
                  (null == i.insertAt
                    ? n.push(i)
                    : n.splice(
                        Math.min(n.length - 1, Math.max(0, i.insertAt)),
                        0,
                        i
                      ),
                  (i.line = e),
                  o && !at(t, e))
                ) {
                  var r = st(e) < t.scrollTop;
                  _(e, e.height + le(i)),
                    r && sn(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              Zt(o, 'lineWidgetAdded', o, i, 'number' == typeof e ? e : A(e)),
              i
            );
          })(this, t, e, n);
        }),
        removeLineWidget: function(t) {
          t.clear();
        },
        markText: function(t, e, n) {
          return Rr(this, R(this, t), R(this, e), n, (n && n.type) || 'range');
        },
        setBookmark: function(t, e) {
          var n = {
            replacedWith: e && (null == e.nodeType ? e.widget : e),
            insertLeft: e && e.insertLeft,
            clearWhenEmpty: !1,
            shared: e && e.shared,
            handleMouseEvents: e && e.handleMouseEvents,
          };
          return (t = R(this, t)), Rr(this, t, t, n, 'bookmark');
        },
        findMarksAt: function(t) {
          var e = [],
            n = T(this, (t = R(this, t)).line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (null == i.from || i.from <= t.ch) &&
                (null == i.to || i.to >= t.ch) &&
                e.push(i.marker.parent || i.marker);
            }
          return e;
        },
        findMarks: function(t, e, n) {
          (t = R(this, t)), (e = R(this, e));
          var r = [],
            i = t.line;
          return (
            this.iter(t.line, e.line + 1, function(o) {
              var a = o.markedSpans;
              if (a)
                for (var l = 0; l < a.length; l++) {
                  var s = a[l];
                  (null != s.to && i == t.line && t.ch >= s.to) ||
                    (null == s.from && i != t.line) ||
                    (null != s.from && i == e.line && s.from >= e.ch) ||
                    (n && !n(s.marker)) ||
                    r.push(s.marker.parent || s.marker);
                }
              ++i;
            }),
            r
          );
        },
        getAllMarks: function() {
          var t = [];
          return (
            this.iter(function(e) {
              var n = e.markedSpans;
              if (n)
                for (var r = 0; r < n.length; ++r)
                  null != n[r].from && t.push(n[r].marker);
            }),
            t
          );
        },
        posFromIndex: function(t) {
          var e,
            n = this.first,
            r = this.lineSeparator().length;
          return (
            this.iter(function(i) {
              var o = i.text.length + r;
              if (o > t) return (e = t), !0;
              (t -= o), ++n;
            }),
            R(this, D(n, e))
          );
        },
        indexFromPos: function(t) {
          var e = (t = R(this, t)).ch;
          if (t.line < this.first || t.ch < 0) return 0;
          var n = this.lineSeparator().length;
          return (
            this.iter(this.first, t.line, function(t) {
              e += t.text.length + n;
            }),
            e
          );
        },
        copy: function(t) {
          var e = new sa(
            O(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return (
            (e.scrollTop = this.scrollTop),
            (e.scrollLeft = this.scrollLeft),
            (e.sel = this.sel),
            (e.extend = !1),
            t &&
              ((e.history.undoDepth = this.history.undoDepth),
              e.setHistory(this.getHistory())),
            e
          );
        },
        linkedDoc: function(t) {
          t || (t = {});
          var e = this.first,
            n = this.first + this.size;
          null != t.from && t.from > e && (e = t.from),
            null != t.to && t.to < n && (n = t.to);
          var r = new sa(
            O(this, e, n),
            t.mode || this.modeOption,
            e,
            this.lineSep,
            this.direction
          );
          return (
            t.sharedHist && (r.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: r,
              sharedHist: t.sharedHist,
            }),
            (r.linked = [
              { doc: this, isParent: !0, sharedHist: t.sharedHist },
            ]),
            (function(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  i = r.find(),
                  o = t.clipPos(i.from),
                  a = t.clipPos(i.to);
                if (W(o, a)) {
                  var l = Rr(t, o, a, r.primary, r.primary.type);
                  r.markers.push(l), (l.parent = r);
                }
              }
            })(r, Br(this)),
            r
          );
        },
        unlinkDoc: function(t) {
          var e = this;
          if ((t instanceof ki && (t = t.doc), this.linked))
            for (var n = 0; n < this.linked.length; ++n) {
              if (e.linked[n].doc == t) {
                e.linked.splice(n, 1), t.unlinkDoc(e), Gr(Br(e));
                break;
              }
            }
          if (t.history == this.history) {
            var r = [t.id];
            Qn(
              t,
              function(t) {
                return r.push(t.id);
              },
              !0
            ),
              (t.history = new nr(null)),
              (t.history.done = fr(this.history.done, r)),
              (t.history.undone = fr(this.history.undone, r));
          }
        },
        iterLinkedDocs: function(t) {
          Qn(this, t);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(t) {
          return this.lineSep ? t.split(this.lineSep) : Ao(t);
        },
        lineSeparator: function() {
          return this.lineSep || '\n';
        },
        setDirection: Ln(function(t) {
          'rtl' != t && (t = 'ltr'),
            t != this.direction &&
              ((this.direction = t),
              this.iter(function(t) {
                return (t.order = null);
              }),
              this.cm &&
                (function(t) {
                  Sn(t, function() {
                    er(t), Tn(t);
                  });
                })(this.cm));
        }),
      })),
        (sa.prototype.eachLine = sa.prototype.iter);
      for (
        var ua = 0,
          ca = !1,
          fa = {
            3: 'Enter',
            8: 'Backspace',
            9: 'Tab',
            13: 'Enter',
            16: 'Shift',
            17: 'Ctrl',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Esc',
            32: 'Space',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'Left',
            38: 'Up',
            39: 'Right',
            40: 'Down',
            44: 'PrintScrn',
            45: 'Insert',
            46: 'Delete',
            59: ';',
            61: '=',
            91: 'Mod',
            92: 'Mod',
            93: 'Mod',
            106: '*',
            107: '=',
            109: '-',
            110: '.',
            111: '/',
            127: 'Delete',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'",
            63232: 'Up',
            63233: 'Down',
            63234: 'Left',
            63235: 'Right',
            63272: 'Delete',
            63273: 'Home',
            63275: 'End',
            63276: 'PageUp',
            63277: 'PageDown',
            63302: 'Insert',
          },
          da = 0;
        da < 10;
        da++
      )
        fa[da + 48] = fa[da + 96] = String(da);
      for (var ha = 65; ha <= 90; ha++) fa[ha] = String.fromCharCode(ha);
      for (var pa = 1; pa <= 12; pa++) fa[pa + 111] = fa[pa + 63235] = 'F' + pa;
      var va = {};
      (va.basic = {
        Left: 'goCharLeft',
        Right: 'goCharRight',
        Up: 'goLineUp',
        Down: 'goLineDown',
        End: 'goLineEnd',
        Home: 'goLineStartSmart',
        PageUp: 'goPageUp',
        PageDown: 'goPageDown',
        Delete: 'delCharAfter',
        Backspace: 'delCharBefore',
        'Shift-Backspace': 'delCharBefore',
        Tab: 'defaultTab',
        'Shift-Tab': 'indentAuto',
        Enter: 'newlineAndIndent',
        Insert: 'toggleOverwrite',
        Esc: 'singleSelection',
      }),
        (va.pcDefault = {
          'Ctrl-A': 'selectAll',
          'Ctrl-D': 'deleteLine',
          'Ctrl-Z': 'undo',
          'Shift-Ctrl-Z': 'redo',
          'Ctrl-Y': 'redo',
          'Ctrl-Home': 'goDocStart',
          'Ctrl-End': 'goDocEnd',
          'Ctrl-Up': 'goLineUp',
          'Ctrl-Down': 'goLineDown',
          'Ctrl-Left': 'goGroupLeft',
          'Ctrl-Right': 'goGroupRight',
          'Alt-Left': 'goLineStart',
          'Alt-Right': 'goLineEnd',
          'Ctrl-Backspace': 'delGroupBefore',
          'Ctrl-Delete': 'delGroupAfter',
          'Ctrl-S': 'save',
          'Ctrl-F': 'find',
          'Ctrl-G': 'findNext',
          'Shift-Ctrl-G': 'findPrev',
          'Shift-Ctrl-F': 'replace',
          'Shift-Ctrl-R': 'replaceAll',
          'Ctrl-[': 'indentLess',
          'Ctrl-]': 'indentMore',
          'Ctrl-U': 'undoSelection',
          'Shift-Ctrl-U': 'redoSelection',
          'Alt-U': 'redoSelection',
          fallthrough: 'basic',
        }),
        (va.emacsy = {
          'Ctrl-F': 'goCharRight',
          'Ctrl-B': 'goCharLeft',
          'Ctrl-P': 'goLineUp',
          'Ctrl-N': 'goLineDown',
          'Alt-F': 'goWordRight',
          'Alt-B': 'goWordLeft',
          'Ctrl-A': 'goLineStart',
          'Ctrl-E': 'goLineEnd',
          'Ctrl-V': 'goPageDown',
          'Shift-Ctrl-V': 'goPageUp',
          'Ctrl-D': 'delCharAfter',
          'Ctrl-H': 'delCharBefore',
          'Alt-D': 'delWordAfter',
          'Alt-Backspace': 'delWordBefore',
          'Ctrl-K': 'killLine',
          'Ctrl-T': 'transposeChars',
          'Ctrl-O': 'openLine',
        }),
        (va.macDefault = {
          'Cmd-A': 'selectAll',
          'Cmd-D': 'deleteLine',
          'Cmd-Z': 'undo',
          'Shift-Cmd-Z': 'redo',
          'Cmd-Y': 'redo',
          'Cmd-Home': 'goDocStart',
          'Cmd-Up': 'goDocStart',
          'Cmd-End': 'goDocEnd',
          'Cmd-Down': 'goDocEnd',
          'Alt-Left': 'goGroupLeft',
          'Alt-Right': 'goGroupRight',
          'Cmd-Left': 'goLineLeft',
          'Cmd-Right': 'goLineRight',
          'Alt-Backspace': 'delGroupBefore',
          'Ctrl-Alt-Backspace': 'delGroupAfter',
          'Alt-Delete': 'delGroupAfter',
          'Cmd-S': 'save',
          'Cmd-F': 'find',
          'Cmd-G': 'findNext',
          'Shift-Cmd-G': 'findPrev',
          'Cmd-Alt-F': 'replace',
          'Shift-Cmd-Alt-F': 'replaceAll',
          'Cmd-[': 'indentLess',
          'Cmd-]': 'indentMore',
          'Cmd-Backspace': 'delWrappedLineLeft',
          'Cmd-Delete': 'delWrappedLineRight',
          'Cmd-U': 'undoSelection',
          'Shift-Cmd-U': 'redoSelection',
          'Ctrl-Up': 'goDocStart',
          'Ctrl-Down': 'goDocEnd',
          fallthrough: ['basic', 'emacsy'],
        }),
        (va.default = no ? va.macDefault : va.pcDefault);
      var ga = {
          selectAll: Tr,
          singleSelection: function(t) {
            return t.setSelection(
              t.getCursor('anchor'),
              t.getCursor('head'),
              mo
            );
          },
          killLine: function(t) {
            return ni(t, function(e) {
              if (e.empty()) {
                var n = T(t.doc, e.head.line).text.length;
                return e.head.ch == n && e.head.line < t.lastLine()
                  ? { from: e.head, to: D(e.head.line + 1, 0) }
                  : { from: e.head, to: D(e.head.line, n) };
              }
              return { from: e.from(), to: e.to() };
            });
          },
          deleteLine: function(t) {
            return ni(t, function(e) {
              return {
                from: D(e.from().line, 0),
                to: R(t.doc, D(e.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function(t) {
            return ni(t, function(t) {
              return { from: D(t.from().line, 0), to: t.from() };
            });
          },
          delWrappedLineLeft: function(t) {
            return ni(t, function(e) {
              var n = t.charCoords(e.head, 'div').top + 5;
              return {
                from: t.coordsChar({ left: 0, top: n }, 'div'),
                to: e.from(),
              };
            });
          },
          delWrappedLineRight: function(t) {
            return ni(t, function(e) {
              var n = t.charCoords(e.head, 'div').top + 5,
                r = t.coordsChar(
                  { left: t.display.lineDiv.offsetWidth + 100, top: n },
                  'div'
                );
              return { from: e.from(), to: r };
            });
          },
          undo: function(t) {
            return t.undo();
          },
          redo: function(t) {
            return t.redo();
          },
          undoSelection: function(t) {
            return t.undoSelection();
          },
          redoSelection: function(t) {
            return t.redoSelection();
          },
          goDocStart: function(t) {
            return t.extendSelection(D(t.firstLine(), 0));
          },
          goDocEnd: function(t) {
            return t.extendSelection(D(t.lastLine()));
          },
          goLineStart: function(t) {
            return t.extendSelectionsBy(
              function(e) {
                return ai(t, e.head.line);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineStartSmart: function(t) {
            return t.extendSelectionsBy(
              function(e) {
                return si(t, e.head);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineEnd: function(t) {
            return t.extendSelectionsBy(
              function(e) {
                return li(t, e.head.line);
              },
              { origin: '+move', bias: -1 }
            );
          },
          goLineRight: function(t) {
            return t.extendSelectionsBy(function(e) {
              var n = t.cursorCoords(e.head, 'div').top + 5;
              return t.coordsChar(
                { left: t.display.lineDiv.offsetWidth + 100, top: n },
                'div'
              );
            }, bo);
          },
          goLineLeft: function(t) {
            return t.extendSelectionsBy(function(e) {
              var n = t.cursorCoords(e.head, 'div').top + 5;
              return t.coordsChar({ left: 0, top: n }, 'div');
            }, bo);
          },
          goLineLeftSmart: function(t) {
            return t.extendSelectionsBy(function(e) {
              var n = t.cursorCoords(e.head, 'div').top + 5,
                r = t.coordsChar({ left: 0, top: n }, 'div');
              return r.ch < t.getLine(r.line).search(/\S/) ? si(t, e.head) : r;
            }, bo);
          },
          goLineUp: function(t) {
            return t.moveV(-1, 'line');
          },
          goLineDown: function(t) {
            return t.moveV(1, 'line');
          },
          goPageUp: function(t) {
            return t.moveV(-1, 'page');
          },
          goPageDown: function(t) {
            return t.moveV(1, 'page');
          },
          goCharLeft: function(t) {
            return t.moveH(-1, 'char');
          },
          goCharRight: function(t) {
            return t.moveH(1, 'char');
          },
          goColumnLeft: function(t) {
            return t.moveH(-1, 'column');
          },
          goColumnRight: function(t) {
            return t.moveH(1, 'column');
          },
          goWordLeft: function(t) {
            return t.moveH(-1, 'word');
          },
          goGroupRight: function(t) {
            return t.moveH(1, 'group');
          },
          goGroupLeft: function(t) {
            return t.moveH(-1, 'group');
          },
          goWordRight: function(t) {
            return t.moveH(1, 'word');
          },
          delCharBefore: function(t) {
            return t.deleteH(-1, 'char');
          },
          delCharAfter: function(t) {
            return t.deleteH(1, 'char');
          },
          delWordBefore: function(t) {
            return t.deleteH(-1, 'word');
          },
          delWordAfter: function(t) {
            return t.deleteH(1, 'word');
          },
          delGroupBefore: function(t) {
            return t.deleteH(-1, 'group');
          },
          delGroupAfter: function(t) {
            return t.deleteH(1, 'group');
          },
          indentAuto: function(t) {
            return t.indentSelection('smart');
          },
          indentMore: function(t) {
            return t.indentSelection('add');
          },
          indentLess: function(t) {
            return t.indentSelection('subtract');
          },
          insertTab: function(t) {
            return t.replaceSelection('\t');
          },
          insertSoftTab: function(t) {
            for (
              var e = [], n = t.listSelections(), r = t.options.tabSize, i = 0;
              i < n.length;
              i++
            ) {
              var o = n[i].from(),
                a = d(t.getLine(o.line), o.ch, r);
              e.push(v(r - a % r));
            }
            t.replaceSelections(e);
          },
          defaultTab: function(t) {
            t.somethingSelected()
              ? t.indentSelection('add')
              : t.execCommand('insertTab');
          },
          transposeChars: function(t) {
            return Sn(t, function() {
              for (var e = t.listSelections(), n = [], r = 0; r < e.length; r++)
                if (e[r].empty()) {
                  var i = e[r].head,
                    o = T(t.doc, i.line).text;
                  if (o)
                    if (
                      (i.ch == o.length && (i = new D(i.line, i.ch - 1)),
                      i.ch > 0)
                    )
                      (i = new D(i.line, i.ch + 1)),
                        t.replaceRange(
                          o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                          D(i.line, i.ch - 2),
                          i,
                          '+transpose'
                        );
                    else if (i.line > t.doc.first) {
                      var a = T(t.doc, i.line - 1).text;
                      a &&
                        ((i = new D(i.line, 1)),
                        t.replaceRange(
                          o.charAt(0) +
                            t.doc.lineSeparator() +
                            a.charAt(a.length - 1),
                          D(i.line - 1, a.length - 1),
                          i,
                          '+transpose'
                        ));
                    }
                  n.push(new na(i, i));
                }
              t.setSelections(n);
            });
          },
          newlineAndIndent: function(t) {
            return Sn(t, function() {
              for (var e = t.listSelections(), n = e.length - 1; n >= 0; n--)
                t.replaceRange(
                  t.doc.lineSeparator(),
                  e[n].anchor,
                  e[n].head,
                  '+input'
                );
              e = t.listSelections();
              for (var r = 0; r < e.length; r++)
                t.indentLine(e[r].from().line, null, !0);
              un(t);
            });
          },
          openLine: function(t) {
            return t.replaceSelection('\n', 'start');
          },
          toggleOverwrite: function(t) {
            return t.toggleOverwrite();
          },
        },
        ma = new fo(),
        ya = null,
        ba = function(t, e, n) {
          (this.time = t), (this.pos = e), (this.button = n);
        };
      ba.prototype.compare = function(t, e, n) {
        return this.time + 400 > t && 0 == W(e, this.pos) && n == this.button;
      };
      var wa,
        xa,
        Sa = {
          toString: function() {
            return 'CodeMirror.Init';
          },
        },
        Ca = {},
        ka = {};
      (ki.defaults = Ca), (ki.optionHandlers = ka);
      var La = [];
      ki.defineInitHook = function(t) {
        return La.push(t);
      };
      var Ta = null,
        Ma = function(t) {
          (this.cm = t),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new fo()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
      (Ma.prototype.init = function(t) {
        function e(t) {
          if (!gt(i, t)) {
            if (i.somethingSelected())
              Ti({ lineWise: !1, text: i.getSelections() }),
                'cut' == t.type && i.replaceSelection('', null, 'cut');
            else {
              if (!i.options.lineWiseCopyCut) return;
              var e = Ai(i);
              Ti({ lineWise: !0, text: e.text }),
                'cut' == t.type &&
                  i.operation(function() {
                    i.setSelections(e.ranges, 0, mo),
                      i.replaceSelection('', null, 'cut');
                  });
            }
            if (t.clipboardData) {
              t.clipboardData.clearData();
              var n = Ta.text.join('\n');
              if (
                (t.clipboardData.setData('Text', n),
                t.clipboardData.getData('Text') == n)
              )
                return void t.preventDefault();
            }
            var a = Ei(),
              l = a.firstChild;
            i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild),
              (l.value = Ta.text.join('\n'));
            var s = document.activeElement;
            co(l),
              setTimeout(function() {
                i.display.lineSpace.removeChild(a),
                  s.focus(),
                  s == o && r.showPrimarySelection();
              }, 50);
          }
        }
        var n = this,
          r = this,
          i = r.cm,
          o = (r.div = t.lineDiv);
        Ni(o, i.options.spellcheck),
          Oo(o, 'paste', function(t) {
            gt(i, t) ||
              Oi(t, i) ||
              (Ui <= 11 &&
                setTimeout(
                  Cn(i, function() {
                    return n.updateFromDOM();
                  }),
                  20
                ));
          }),
          Oo(o, 'compositionstart', function(t) {
            n.composing = { data: t.data, done: !1 };
          }),
          Oo(o, 'compositionupdate', function(t) {
            n.composing || (n.composing = { data: t.data, done: !1 });
          }),
          Oo(o, 'compositionend', function(t) {
            n.composing &&
              (t.data != n.composing.data && n.readFromDOMSoon(),
              (n.composing.done = !0));
          }),
          Oo(o, 'touchstart', function() {
            return r.forceCompositionEnd();
          }),
          Oo(o, 'input', function() {
            n.composing || n.readFromDOMSoon();
          }),
          Oo(o, 'copy', e),
          Oo(o, 'cut', e);
      }),
        (Ma.prototype.prepareSelection = function() {
          var t = qe(this.cm, !1);
          return (t.focus = this.cm.state.focused), t;
        }),
        (Ma.prototype.showSelection = function(t, e) {
          t &&
            this.cm.display.view.length &&
            ((t.focus || e) && this.showPrimarySelection(),
            this.showMultipleSelections(t));
        }),
        (Ma.prototype.showPrimarySelection = function() {
          var t = window.getSelection(),
            e = this.cm,
            n = e.doc.sel.primary(),
            r = n.from(),
            i = n.to();
          if (
            e.display.viewTo == e.display.viewFrom ||
            r.line >= e.display.viewTo ||
            i.line < e.display.viewFrom
          )
            t.removeAllRanges();
          else {
            var o = Fi(e, t.anchorNode, t.anchorOffset),
              a = Fi(e, t.focusNode, t.focusOffset);
            if (
              !o ||
              o.bad ||
              !a ||
              a.bad ||
              0 != W(z(o, a), r) ||
              0 != W(H(o, a), i)
            ) {
              var l = e.display.view,
                s = (r.line >= e.display.viewFrom && Wi(e, r)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                u = i.line < e.display.viewTo && Wi(e, i);
              if (!u) {
                var c = l[l.length - 1].measure,
                  f = c.maps ? c.maps[c.maps.length - 1] : c.map;
                u = {
                  node: f[f.length - 1],
                  offset: f[f.length - 2] - f[f.length - 3],
                };
              }
              if (s && u) {
                var d,
                  h = t.rangeCount && t.getRangeAt(0);
                try {
                  d = ao(s.node, s.offset, u.offset, u.node);
                } catch (t) {}
                d &&
                  (!Ii && e.state.focused
                    ? (t.collapse(s.node, s.offset),
                      d.collapsed || (t.removeAllRanges(), t.addRange(d)))
                    : (t.removeAllRanges(), t.addRange(d)),
                  h && null == t.anchorNode
                    ? t.addRange(h)
                    : Ii && this.startGracePeriod()),
                  this.rememberSelection();
              } else t.removeAllRanges();
            }
          }
        }),
        (Ma.prototype.startGracePeriod = function() {
          var t = this;
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function() {
              (t.gracePeriod = !1),
                t.selectionChanged() &&
                  t.cm.operation(function() {
                    return (t.cm.curOp.selectionChanged = !0);
                  });
            }, 20));
        }),
        (Ma.prototype.showMultipleSelections = function(t) {
          n(this.cm.display.cursorDiv, t.cursors),
            n(this.cm.display.selectionDiv, t.selection);
        }),
        (Ma.prototype.rememberSelection = function() {
          var t = window.getSelection();
          (this.lastAnchorNode = t.anchorNode),
            (this.lastAnchorOffset = t.anchorOffset),
            (this.lastFocusNode = t.focusNode),
            (this.lastFocusOffset = t.focusOffset);
        }),
        (Ma.prototype.selectionInEditor = function() {
          var t = window.getSelection();
          if (!t.rangeCount) return !1;
          var e = t.getRangeAt(0).commonAncestorContainer;
          return a(this.div, e);
        }),
        (Ma.prototype.focus = function() {
          'nocursor' != this.cm.options.readOnly &&
            (this.selectionInEditor() ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus());
        }),
        (Ma.prototype.blur = function() {
          this.div.blur();
        }),
        (Ma.prototype.getField = function() {
          return this.div;
        }),
        (Ma.prototype.supportsTouch = function() {
          return !0;
        }),
        (Ma.prototype.receivedFocus = function() {
          function t() {
            e.cm.state.focused &&
              (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
          }
          var e = this;
          this.selectionInEditor()
            ? this.pollSelection()
            : Sn(this.cm, function() {
                return (e.cm.curOp.selectionChanged = !0);
              }),
            this.polling.set(this.cm.options.pollInterval, t);
        }),
        (Ma.prototype.selectionChanged = function() {
          var t = window.getSelection();
          return (
            t.anchorNode != this.lastAnchorNode ||
            t.anchorOffset != this.lastAnchorOffset ||
            t.focusNode != this.lastFocusNode ||
            t.focusOffset != this.lastFocusOffset
          );
        }),
        (Ma.prototype.pollSelection = function() {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var t = window.getSelection(),
              e = this.cm;
            if (
              to &&
              $i &&
              this.cm.options.gutters.length &&
              (function(t) {
                for (var e = t; e; e = e.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(e.className)) return !0;
                return !1;
              })(t.anchorNode)
            )
              return (
                this.cm.triggerOnKeyDown({
                  type: 'keydown',
                  keyCode: 8,
                  preventDefault: Math.abs,
                }),
                this.blur(),
                void this.focus()
              );
            if (!this.composing) {
              this.rememberSelection();
              var n = Fi(e, t.anchorNode, t.anchorOffset),
                r = Fi(e, t.focusNode, t.focusOffset);
              n &&
                r &&
                Sn(e, function() {
                  yr(e.doc, Vn(n, r), mo),
                    (n.bad || r.bad) && (e.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (Ma.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var t = this.cm,
            e = t.display,
            n = t.doc.sel.primary(),
            r = n.from(),
            i = n.to();
          if (
            (0 == r.ch &&
              r.line > t.firstLine() &&
              (r = D(r.line - 1, T(t.doc, r.line - 1).length)),
            i.ch == T(t.doc, i.line).text.length &&
              i.line < t.lastLine() &&
              (i = D(i.line + 1, 0)),
            r.line < e.viewFrom || i.line > e.viewTo - 1)
          )
            return !1;
          var o, a, l;
          r.line == e.viewFrom || 0 == (o = Ue(t, r.line))
            ? ((a = A(e.view[0].line)), (l = e.view[0].node))
            : ((a = A(e.view[o].line)), (l = e.view[o - 1].node.nextSibling));
          var s,
            u,
            c = Ue(t, i.line);
          if (
            (c == e.view.length - 1
              ? ((s = e.viewTo - 1), (u = e.lineDiv.lastChild))
              : ((s = A(e.view[c + 1].line) - 1),
                (u = e.view[c + 1].node.previousSibling)),
            !l)
          )
            return !1;
          for (
            var f = t.doc.splitLines(
                (function(t, e, n, r, i) {
                  function o() {
                    u && ((s += c), (u = !1));
                  }
                  function a(t) {
                    t && (o(), (s += t));
                  }
                  function l(e) {
                    if (1 == e.nodeType) {
                      var n = e.getAttribute('cm-text');
                      if (null != n)
                        return void a(
                          n || e.textContent.replace(/\u200b/g, '')
                        );
                      var s,
                        f = e.getAttribute('cm-marker');
                      if (f) {
                        var d = t.findMarks(
                          D(r, 0),
                          D(i + 1, 0),
                          (function(t) {
                            return function(e) {
                              return e.id == t;
                            };
                          })(+f)
                        );
                        return void (
                          d.length &&
                          (s = d[0].find(0)) &&
                          a(M(t.doc, s.from, s.to).join(c))
                        );
                      }
                      if ('false' == e.getAttribute('contenteditable')) return;
                      var h = /^(pre|div|p)$/i.test(e.nodeName);
                      h && o();
                      for (var p = 0; p < e.childNodes.length; p++)
                        l(e.childNodes[p]);
                      h && (u = !0);
                    } else 3 == e.nodeType && a(e.nodeValue);
                  }
                  for (
                    var s = '', u = !1, c = t.doc.lineSeparator();
                    l(e), e != n;

                  )
                    e = e.nextSibling;
                  return s;
                })(t, l, u, a, s)
              ),
              d = M(t.doc, D(a, 0), D(s, T(t.doc, s).text.length));
            f.length > 1 && d.length > 1;

          )
            if (g(f) == g(d)) f.pop(), d.pop(), s--;
            else {
              if (f[0] != d[0]) break;
              f.shift(), d.shift(), a++;
            }
          for (
            var h = 0,
              p = 0,
              v = f[0],
              m = d[0],
              y = Math.min(v.length, m.length);
            h < y && v.charCodeAt(h) == m.charCodeAt(h);

          )
            ++h;
          for (
            var b = g(f),
              w = g(d),
              x = Math.min(
                b.length - (1 == f.length ? h : 0),
                w.length - (1 == d.length ? h : 0)
              );
            p < x &&
            b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1);

          )
            ++p;
          if (1 == f.length && 1 == d.length && a == r.line)
            for (
              ;
              h &&
              h > r.ch &&
              b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1);

            )
              h--, p++;
          (f[f.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, '')),
            (f[0] = f[0].slice(h).replace(/\u200b+$/, ''));
          var S = D(a, h),
            C = D(s, d.length ? g(d).length - p : 0);
          return f.length > 1 || f[0] || W(S, C)
            ? (Pr(t.doc, f, S, C, '+input'), !0)
            : void 0;
        }),
        (Ma.prototype.ensurePolled = function() {
          this.forceCompositionEnd();
        }),
        (Ma.prototype.reset = function() {
          this.forceCompositionEnd();
        }),
        (Ma.prototype.forceCompositionEnd = function() {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus());
        }),
        (Ma.prototype.readFromDOMSoon = function() {
          var t = this;
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function() {
              if (((t.readDOMTimeout = null), t.composing)) {
                if (!t.composing.done) return;
                t.composing = null;
              }
              t.updateFromDOM();
            }, 80));
        }),
        (Ma.prototype.updateFromDOM = function() {
          var t = this;
          (!this.cm.isReadOnly() && this.pollContent()) ||
            Sn(this.cm, function() {
              return Tn(t.cm);
            });
        }),
        (Ma.prototype.setUneditable = function(t) {
          t.contentEditable = 'false';
        }),
        (Ma.prototype.onKeyPress = function(t) {
          0 != t.charCode &&
            (t.preventDefault(),
            this.cm.isReadOnly() ||
              Cn(this.cm, Mi)(
                this.cm,
                String.fromCharCode(
                  null == t.charCode ? t.keyCode : t.charCode
                ),
                0
              ));
        }),
        (Ma.prototype.readOnlyChanged = function(t) {
          this.div.contentEditable = String('nocursor' != t);
        }),
        (Ma.prototype.onContextMenu = function() {}),
        (Ma.prototype.resetPosition = function() {}),
        (Ma.prototype.needsContentAttribute = !0);
      var Oa = function(t) {
        (this.cm = t),
          (this.prevInput = ''),
          (this.pollingFast = !1),
          (this.polling = new fo()),
          (this.hasSelection = !1),
          (this.composing = null);
      };
      (Oa.prototype.init = function(t) {
        function e(t) {
          if (!gt(i, t)) {
            if (i.somethingSelected())
              Ti({ lineWise: !1, text: i.getSelections() });
            else {
              if (!i.options.lineWiseCopyCut) return;
              var e = Ai(i);
              Ti({ lineWise: !0, text: e.text }),
                'cut' == t.type
                  ? i.setSelections(e.ranges, null, mo)
                  : ((r.prevInput = ''), (a.value = e.text.join('\n')), co(a));
            }
            'cut' == t.type && (i.state.cutIncoming = !0);
          }
        }
        var n = this,
          r = this,
          i = this.cm,
          o = (this.wrapper = Ei()),
          a = (this.textarea = o.firstChild);
        t.wrapper.insertBefore(o, t.wrapper.firstChild),
          Qi && (a.style.width = '0px'),
          Oo(a, 'input', function() {
            Vi && Ui >= 9 && n.hasSelection && (n.hasSelection = null),
              r.poll();
          }),
          Oo(a, 'paste', function(t) {
            gt(i, t) ||
              Oi(t, i) ||
              ((i.state.pasteIncoming = !0), r.fastPoll());
          }),
          Oo(a, 'cut', e),
          Oo(a, 'copy', e),
          Oo(t.scroller, 'paste', function(e) {
            se(t, e) || gt(i, e) || ((i.state.pasteIncoming = !0), r.focus());
          }),
          Oo(t.lineSpace, 'selectstart', function(e) {
            se(t, e) || wt(e);
          }),
          Oo(a, 'compositionstart', function() {
            var t = i.getCursor('from');
            r.composing && r.composing.range.clear(),
              (r.composing = {
                start: t,
                range: i.markText(t, i.getCursor('to'), {
                  className: 'CodeMirror-composing',
                }),
              });
          }),
          Oo(a, 'compositionend', function() {
            r.composing &&
              (r.poll(), r.composing.range.clear(), (r.composing = null));
          });
      }),
        (Oa.prototype.prepareSelection = function() {
          var t = this.cm,
            e = t.display,
            n = t.doc,
            r = qe(t);
          if (t.options.moveInputWithCursor) {
            var i = Ne(t, n.sel.primary().head, 'div'),
              o = e.wrapper.getBoundingClientRect(),
              a = e.lineDiv.getBoundingClientRect();
            (r.teTop = Math.max(
              0,
              Math.min(e.wrapper.clientHeight - 10, i.top + a.top - o.top)
            )),
              (r.teLeft = Math.max(
                0,
                Math.min(e.wrapper.clientWidth - 10, i.left + a.left - o.left)
              ));
          }
          return r;
        }),
        (Oa.prototype.showSelection = function(t) {
          var e = this.cm.display;
          n(e.cursorDiv, t.cursors),
            n(e.selectionDiv, t.selection),
            null != t.teTop &&
              ((this.wrapper.style.top = t.teTop + 'px'),
              (this.wrapper.style.left = t.teLeft + 'px'));
        }),
        (Oa.prototype.reset = function(t) {
          if (!this.contextMenuPending && !this.composing) {
            var e = this.cm;
            if (e.somethingSelected()) {
              this.prevInput = '';
              var n = e.getSelection();
              (this.textarea.value = n),
                e.state.focused && co(this.textarea),
                Vi && Ui >= 9 && (this.hasSelection = n);
            } else
              t ||
                ((this.prevInput = this.textarea.value = ''),
                Vi && Ui >= 9 && (this.hasSelection = null));
          }
        }),
        (Oa.prototype.getField = function() {
          return this.textarea;
        }),
        (Oa.prototype.supportsTouch = function() {
          return !1;
        }),
        (Oa.prototype.focus = function() {
          if (
            'nocursor' != this.cm.options.readOnly &&
            (!eo || l() != this.textarea)
          )
            try {
              this.textarea.focus();
            } catch (t) {}
        }),
        (Oa.prototype.blur = function() {
          this.textarea.blur();
        }),
        (Oa.prototype.resetPosition = function() {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (Oa.prototype.receivedFocus = function() {
          this.slowPoll();
        }),
        (Oa.prototype.slowPoll = function() {
          var t = this;
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function() {
              t.poll(), t.cm.state.focused && t.slowPoll();
            });
        }),
        (Oa.prototype.fastPoll = function() {
          function t() {
            n.poll() || e
              ? ((n.pollingFast = !1), n.slowPoll())
              : ((e = !0), n.polling.set(60, t));
          }
          var e = !1,
            n = this;
          (n.pollingFast = !0), n.polling.set(20, t);
        }),
        (Oa.prototype.poll = function() {
          var t = this,
            e = this.cm,
            n = this.textarea,
            r = this.prevInput;
          if (
            this.contextMenuPending ||
            !e.state.focused ||
            (No(n) && !r && !this.composing) ||
            e.isReadOnly() ||
            e.options.disableInput ||
            e.state.keySeq
          )
            return !1;
          var i = n.value;
          if (i == r && !e.somethingSelected()) return !1;
          if (
            (Vi && Ui >= 9 && this.hasSelection === i) ||
            (no && /[\uf700-\uf7ff]/.test(i))
          )
            return e.display.input.reset(), !1;
          if (e.doc.sel == e.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if ((8203 != o || r || (r = '​'), 8666 == o))
              return this.reset(), this.cm.execCommand('undo');
          }
          for (
            var a = 0, l = Math.min(r.length, i.length);
            a < l && r.charCodeAt(a) == i.charCodeAt(a);

          )
            ++a;
          return (
            Sn(e, function() {
              Mi(
                e,
                i.slice(a),
                r.length - a,
                null,
                t.composing ? '*compose' : null
              ),
                i.length > 1e3 || i.indexOf('\n') > -1
                  ? (n.value = t.prevInput = '')
                  : (t.prevInput = i),
                t.composing &&
                  (t.composing.range.clear(),
                  (t.composing.range = e.markText(
                    t.composing.start,
                    e.getCursor('to'),
                    { className: 'CodeMirror-composing' }
                  )));
            }),
            !0
          );
        }),
        (Oa.prototype.ensurePolled = function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Oa.prototype.onKeyPress = function() {
          Vi && Ui >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Oa.prototype.onContextMenu = function(t) {
          function e() {
            if (null != a.selectionStart) {
              var t = i.somethingSelected(),
                e = '​' + (t ? a.value : '');
              (a.value = '⇚'),
                (a.value = e),
                (r.prevInput = t ? '' : '​'),
                (a.selectionStart = 1),
                (a.selectionEnd = e.length),
                (o.selForContextMenu = i.doc.sel);
            }
          }
          function n() {
            if (
              ((r.contextMenuPending = !1),
              (r.wrapper.style.cssText = c),
              (a.style.cssText = u),
              Vi &&
                Ui < 9 &&
                o.scrollbars.setScrollTop((o.scroller.scrollTop = s)),
              null != a.selectionStart)
            ) {
              (!Vi || (Vi && Ui < 9)) && e();
              var t = 0,
                n = function e() {
                  o.selForContextMenu == i.doc.sel &&
                  0 == a.selectionStart &&
                  a.selectionEnd > 0 &&
                  '​' == r.prevInput
                    ? Cn(i, Tr)(i)
                    : t++ < 10
                      ? (o.detectingSelectAll = setTimeout(e, 500))
                      : ((o.selForContextMenu = null), o.input.reset());
                };
              o.detectingSelectAll = setTimeout(n, 200);
            }
          }
          var r = this,
            i = r.cm,
            o = i.display,
            a = r.textarea,
            l = Ve(i, t),
            s = o.scroller.scrollTop;
          if (l && !Xi) {
            i.options.resetSelectionOnContextMenu &&
              -1 == i.doc.sel.contains(l) &&
              Cn(i, yr)(i.doc, Vn(l), mo);
            var u = a.style.cssText,
              c = r.wrapper.style.cssText;
            r.wrapper.style.cssText = 'position: absolute';
            var f = r.wrapper.getBoundingClientRect();
            a.style.cssText =
              'position: absolute; width: 30px; height: 30px;\n      top: ' +
              (t.clientY - f.top - 5) +
              'px; left: ' +
              (t.clientX - f.left - 5) +
              'px;\n      z-index: 1000; background: ' +
              (Vi ? 'rgba(255, 255, 255, .05)' : 'transparent') +
              ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);';
            var d;
            if (
              (Ki && (d = window.scrollY),
              o.input.focus(),
              Ki && window.scrollTo(null, d),
              o.input.reset(),
              i.somethingSelected() || (a.value = r.prevInput = ' '),
              (r.contextMenuPending = !0),
              (o.selForContextMenu = i.doc.sel),
              clearTimeout(o.detectingSelectAll),
              Vi && Ui >= 9 && e(),
              so)
            ) {
              Ct(t);
              var h = function t() {
                pt(window, 'mouseup', t), setTimeout(n, 20);
              };
              Oo(window, 'mouseup', h);
            } else setTimeout(n, 50);
          }
        }),
        (Oa.prototype.readOnlyChanged = function(t) {
          t || this.reset(), (this.textarea.disabled = 'nocursor' == t);
        }),
        (Oa.prototype.setUneditable = function() {}),
        (Oa.prototype.needsContentAttribute = !1),
        (function(t) {
          function e(e, r, i, o) {
            (t.defaults[e] = r),
              i &&
                (n[e] = o
                  ? function(t, e, n) {
                      n != Sa && i(t, e, n);
                    }
                  : i);
          }
          var n = t.optionHandlers;
          (t.defineOption = e),
            (t.Init = Sa),
            e(
              'value',
              '',
              function(t, e) {
                return t.setValue(e);
              },
              !0
            ),
            e(
              'mode',
              null,
              function(t, e) {
                (t.doc.modeOption = e), Xn(t);
              },
              !0
            ),
            e('indentUnit', 2, Xn, !0),
            e('indentWithTabs', !1),
            e('smartIndent', !0),
            e(
              'tabSize',
              4,
              function(t) {
                Yn(t), ke(t), Tn(t);
              },
              !0
            ),
            e('lineSeparator', null, function(t, e) {
              if (((t.doc.lineSep = e), e)) {
                var n = [],
                  r = t.doc.first;
                t.doc.iter(function(t) {
                  for (var i = 0; ; ) {
                    var o = t.text.indexOf(e, i);
                    if (-1 == o) break;
                    (i = o + e.length), n.push(D(r, o));
                  }
                  r++;
                });
                for (var i = n.length - 1; i >= 0; i--)
                  Pr(t.doc, e, n[i], D(n[i].line, n[i].ch + e.length));
              }
            }),
            e(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
              function(t, e, n) {
                (t.state.specialChars = new RegExp(
                  e.source + (e.test('\t') ? '' : '|\t'),
                  'g'
                )),
                  n != Sa && t.refresh();
              }
            ),
            e(
              'specialCharPlaceholder',
              Kt,
              function(t) {
                return t.refresh();
              },
              !0
            ),
            e('electricChars', !0),
            e(
              'inputStyle',
              eo ? 'contenteditable' : 'textarea',
              function() {
                throw new Error(
                  'inputStyle can not (yet) be changed in a running editor'
                );
              },
              !0
            ),
            e(
              'spellcheck',
              !1,
              function(t, e) {
                return (t.getInputField().spellcheck = e);
              },
              !0
            ),
            e('rtlMoveVisually', !io),
            e('wholeLineUpdateBefore', !0),
            e(
              'theme',
              'default',
              function(t) {
                wi(t), xi(t);
              },
              !0
            ),
            e('keyMap', 'default', function(t, e, n) {
              var r = ei(e),
                i = n != Sa && ei(n);
              i && i.detach && i.detach(t, r),
                r.attach && r.attach(t, i || null);
            }),
            e('extraKeys', null),
            e('configureMouse', null),
            e('lineWrapping', !1, Ci, !0),
            e(
              'gutters',
              [],
              function(t) {
                zn(t.options), xi(t);
              },
              !0
            ),
            e(
              'fixedGutter',
              !0,
              function(t, e) {
                (t.display.gutters.style.left = e ? Re(t.display) + 'px' : '0'),
                  t.refresh();
              },
              !0
            ),
            e(
              'coverGutterNextToScrollbar',
              !1,
              function(t) {
                return mn(t);
              },
              !0
            ),
            e(
              'scrollbarStyle',
              'native',
              function(t) {
                bn(t),
                  mn(t),
                  t.display.scrollbars.setScrollTop(t.doc.scrollTop),
                  t.display.scrollbars.setScrollLeft(t.doc.scrollLeft);
              },
              !0
            ),
            e(
              'lineNumbers',
              !1,
              function(t) {
                zn(t.options), xi(t);
              },
              !0
            ),
            e('firstLineNumber', 1, xi, !0),
            e(
              'lineNumberFormatter',
              function(t) {
                return t;
              },
              xi,
              !0
            ),
            e('showCursorWhenSelecting', !1, Ke, !0),
            e('resetSelectionOnContextMenu', !0),
            e('lineWiseCopyCut', !0),
            e('pasteLinesPerSelection', !0),
            e('readOnly', !1, function(t, e) {
              'nocursor' == e && (tn(t), t.display.input.blur()),
                t.display.input.readOnlyChanged(e);
            }),
            e(
              'disableInput',
              !1,
              function(t, e) {
                e || t.display.input.reset();
              },
              !0
            ),
            e('dragDrop', !0, Si),
            e('allowDropFileTypes', null),
            e('cursorBlinkRate', 530),
            e('cursorScrollMargin', 0),
            e('cursorHeight', 1, Ke, !0),
            e('singleCursorHeightPerLine', !0, Ke, !0),
            e('workTime', 100),
            e('workDelay', 100),
            e('flattenSpans', !0, Yn, !0),
            e('addModeClass', !1, Yn, !0),
            e('pollInterval', 100),
            e('undoDepth', 200, function(t, e) {
              return (t.doc.history.undoDepth = e);
            }),
            e('historyEventDelay', 1250),
            e(
              'viewportMargin',
              10,
              function(t) {
                return t.refresh();
              },
              !0
            ),
            e('maxHighlightLength', 1e4, Yn, !0),
            e('moveInputWithCursor', !0, function(t, e) {
              e || t.display.input.resetPosition();
            }),
            e('tabindex', null, function(t, e) {
              return (t.display.input.getField().tabIndex = e || '');
            }),
            e('autofocus', null),
            e(
              'direction',
              'ltr',
              function(t, e) {
                return t.doc.setDirection(e);
              },
              !0
            );
        })(ki),
        (function(t) {
          var e = t.optionHandlers,
            n = (t.helpers = {});
          (t.prototype = {
            constructor: t,
            focus: function() {
              window.focus(), this.display.input.focus();
            },
            setOption: function(t, n) {
              var r = this.options,
                i = r[t];
              (r[t] == n && 'mode' != t) ||
                ((r[t] = n),
                e.hasOwnProperty(t) && Cn(this, e[t])(this, n, i),
                vt(this, 'optionChange', this, t));
            },
            getOption: function(t) {
              return this.options[t];
            },
            getDoc: function() {
              return this.doc;
            },
            addKeyMap: function(t, e) {
              this.state.keyMaps[e ? 'push' : 'unshift'](ei(t));
            },
            removeKeyMap: function(t) {
              for (var e = this.state.keyMaps, n = 0; n < e.length; ++n)
                if (e[n] == t || e[n].name == t) return e.splice(n, 1), !0;
            },
            addOverlay: kn(function(e, n) {
              var r = e.token ? e : t.getMode(this.options, e);
              if (r.startState)
                throw new Error('Overlays may not be stateful.');
              !(function(t, e, n) {
                for (var r = 0, i = n(e); r < t.length && n(t[r]) <= i; ) r++;
                t.splice(r, 0, e);
              })(
                this.state.overlays,
                {
                  mode: r,
                  modeSpec: e,
                  opaque: n && n.opaque,
                  priority: (n && n.priority) || 0,
                },
                function(t) {
                  return t.priority;
                }
              ),
                this.state.modeGen++,
                Tn(this);
            }),
            removeOverlay: kn(function(t) {
              for (
                var e = this, n = this.state.overlays, r = 0;
                r < n.length;
                ++r
              ) {
                var i = n[r].modeSpec;
                if (i == t || ('string' == typeof t && i.name == t))
                  return n.splice(r, 1), e.state.modeGen++, void Tn(e);
              }
            }),
            indentLine: kn(function(t, e, n) {
              'string' != typeof e &&
                'number' != typeof e &&
                (e =
                  null == e
                    ? this.options.smartIndent ? 'smart' : 'prev'
                    : e ? 'add' : 'subtract'),
                E(this.doc, t) && Li(this, t, e, n);
            }),
            indentSelection: kn(function(t) {
              for (
                var e = this, n = this.doc.sel.ranges, r = -1, i = 0;
                i < n.length;
                i++
              ) {
                var o = n[i];
                if (o.empty())
                  o.head.line > r &&
                    (Li(e, o.head.line, t, !0),
                    (r = o.head.line),
                    i == e.doc.sel.primIndex && un(e));
                else {
                  var a = o.from(),
                    l = o.to(),
                    s = Math.max(r, a.line);
                  r = Math.min(e.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                  for (var u = s; u < r; ++u) Li(e, u, t);
                  var c = e.doc.sel.ranges;
                  0 == a.ch &&
                    n.length == c.length &&
                    c[i].from().ch > 0 &&
                    vr(e.doc, i, new na(a, c[i].to()), mo);
                }
              }
            }),
            getTokenAt: function(t, e) {
              return It(this, t, e);
            },
            getLineTokens: function(t, e) {
              return It(this, D(t), e, !0);
            },
            getTokenTypeAt: function(t) {
              t = R(this.doc, t);
              var e,
                n = Wt(this, T(this.doc, t.line)),
                r = 0,
                i = (n.length - 1) / 2,
                o = t.ch;
              if (0 == o) e = n[2];
              else
                for (;;) {
                  var a = (r + i) >> 1;
                  if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                  else {
                    if (!(n[2 * a + 1] < o)) {
                      e = n[2 * a + 2];
                      break;
                    }
                    r = a + 1;
                  }
                }
              var l = e ? e.indexOf('overlay ') : -1;
              return l < 0 ? e : 0 == l ? null : e.slice(0, l - 1);
            },
            getModeAt: function(e) {
              var n = this.doc.mode;
              return n.innerMode
                ? t.innerMode(n, this.getTokenAt(e).state).mode
                : n;
            },
            getHelper: function(t, e) {
              return this.getHelpers(t, e)[0];
            },
            getHelpers: function(t, e) {
              var r = this,
                i = [];
              if (!n.hasOwnProperty(e)) return i;
              var o = n[e],
                a = this.getModeAt(t);
              if ('string' == typeof a[e]) o[a[e]] && i.push(o[a[e]]);
              else if (a[e])
                for (var l = 0; l < a[e].length; l++) {
                  var s = o[a[e][l]];
                  s && i.push(s);
                }
              else
                a.helperType && o[a.helperType]
                  ? i.push(o[a.helperType])
                  : o[a.name] && i.push(o[a.name]);
              for (var u = 0; u < o._global.length; u++) {
                var c = o._global[u];
                c.pred(a, r) && -1 == h(i, c.val) && i.push(c.val);
              }
              return i;
            },
            getStateAfter: function(t, e) {
              var n = this.doc;
              return (
                (t = I(n, null == t ? n.first + n.size - 1 : t)),
                jt(this, t + 1, e).state
              );
            },
            cursorCoords: function(t, e) {
              var n,
                r = this.doc.sel.primary();
              return (
                (n =
                  null == t
                    ? r.head
                    : 'object' == (void 0 === t ? 'undefined' : o(t))
                      ? R(this.doc, t)
                      : t ? r.from() : r.to()),
                Ne(this, n, e || 'page')
              );
            },
            charCoords: function(t, e) {
              return Ae(this, R(this.doc, t), e || 'page');
            },
            coordsChar: function(t, e) {
              return (t = _e(this, t, e || 'page')), De(this, t.left, t.top);
            },
            lineAtHeight: function(t, e) {
              return (
                (t = _e(this, { top: t, left: 0 }, e || 'page').top),
                N(this.doc, t + this.display.viewOffset)
              );
            },
            heightAtLine: function(t, e, n) {
              var r,
                i = !1;
              if ('number' == typeof t) {
                var o = this.doc.first + this.doc.size - 1;
                t < this.doc.first
                  ? (t = this.doc.first)
                  : t > o && ((t = o), (i = !0)),
                  (r = T(this.doc, t));
              } else r = t;
              return (
                Oe(this, r, { top: 0, left: 0 }, e || 'page', n || i).top +
                (i ? this.doc.height - st(r) : 0)
              );
            },
            defaultTextHeight: function() {
              return He(this.display);
            },
            defaultCharWidth: function() {
              return ze(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(t, e, n, r, i) {
              var o = this.display,
                a = (t = Ne(this, R(this.doc, t))).bottom,
                l = t.left;
              if (
                ((e.style.position = 'absolute'),
                e.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(e),
                o.sizer.appendChild(e),
                'over' == r)
              )
                a = t.top;
              else if ('above' == r || 'near' == r) {
                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                  u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ('above' == r || t.bottom + e.offsetHeight > s) &&
                t.top > e.offsetHeight
                  ? (a = t.top - e.offsetHeight)
                  : t.bottom + e.offsetHeight <= s && (a = t.bottom),
                  l + e.offsetWidth > u && (l = u - e.offsetWidth);
              }
              (e.style.top = a + 'px'),
                (e.style.left = e.style.right = ''),
                'right' == i
                  ? ((l = o.sizer.clientWidth - e.offsetWidth),
                    (e.style.right = '0px'))
                  : ('left' == i
                      ? (l = 0)
                      : 'middle' == i &&
                        (l = (o.sizer.clientWidth - e.offsetWidth) / 2),
                    (e.style.left = l + 'px')),
                n &&
                  (function(t, e) {
                    var n = ln(t, e);
                    null != n.scrollTop && hn(t, n.scrollTop),
                      null != n.scrollLeft && vn(t, n.scrollLeft);
                  })(this, {
                    left: l,
                    top: a,
                    right: l + e.offsetWidth,
                    bottom: a + e.offsetHeight,
                  });
            },
            triggerOnKeyDown: kn(di),
            triggerOnKeyPress: kn(pi),
            triggerOnKeyUp: hi,
            triggerOnMouseDown: kn(vi),
            execCommand: function(t) {
              if (ga.hasOwnProperty(t)) return ga[t].call(null, this);
            },
            triggerElectric: kn(function(t) {
              _i(this, t);
            }),
            findPosH: function(t, e, n, r) {
              var i = this,
                o = 1;
              e < 0 && ((o = -1), (e = -e));
              for (
                var a = R(this.doc, t), l = 0;
                l < e && !(a = Pi(i.doc, a, o, n, r)).hitSide;
                ++l
              );
              return a;
            },
            moveH: kn(function(t, e) {
              var n = this;
              this.extendSelectionsBy(function(r) {
                return n.display.shift || n.doc.extend || r.empty()
                  ? Pi(n.doc, r.head, t, e, n.options.rtlMoveVisually)
                  : t < 0 ? r.from() : r.to();
              }, bo);
            }),
            deleteH: kn(function(t, e) {
              var n = this.doc.sel,
                r = this.doc;
              n.somethingSelected()
                ? r.replaceSelection('', null, '+delete')
                : ni(this, function(n) {
                    var i = Pi(r, n.head, t, e, !1);
                    return t < 0
                      ? { from: i, to: n.head }
                      : { from: n.head, to: i };
                  });
            }),
            findPosV: function(t, e, n, r) {
              var i = this,
                o = 1,
                a = r;
              e < 0 && ((o = -1), (e = -e));
              for (var l = R(this.doc, t), s = 0; s < e; ++s) {
                var u = Ne(i, l, 'div');
                if (
                  (null == a ? (a = u.left) : (u.left = a),
                  (l = Di(i, u, o, n)).hitSide)
                )
                  break;
              }
              return l;
            },
            moveV: kn(function(t, e) {
              var n = this,
                r = this.doc,
                i = [],
                o =
                  !this.display.shift && !r.extend && r.sel.somethingSelected();
              if (
                (r.extendSelectionsBy(function(a) {
                  if (o) return t < 0 ? a.from() : a.to();
                  var l = Ne(n, a.head, 'div');
                  null != a.goalColumn && (l.left = a.goalColumn),
                    i.push(l.left);
                  var s = Di(n, l, t, e);
                  return (
                    'page' == e &&
                      a == r.sel.primary() &&
                      sn(n, Ae(n, s, 'div').top - l.top),
                    s
                  );
                }, bo),
                i.length)
              )
                for (var a = 0; a < r.sel.ranges.length; a++)
                  r.sel.ranges[a].goalColumn = i[a];
            }),
            findWordAt: function(t) {
              var e = T(this.doc, t.line).text,
                n = t.ch,
                r = t.ch;
              if (e) {
                var i = this.getHelper(t, 'wordChars');
                ('before' != t.sticky && r != e.length) || !n ? ++r : --n;
                for (
                  var o = e.charAt(n),
                    a = x(o, i)
                      ? function(t) {
                          return x(t, i);
                        }
                      : /\s/.test(o)
                        ? function(t) {
                            return /\s/.test(t);
                          }
                        : function(t) {
                            return !/\s/.test(t) && !x(t);
                          };
                  n > 0 && a(e.charAt(n - 1));

                )
                  --n;
                for (; r < e.length && a(e.charAt(r)); ) ++r;
              }
              return new na(D(t.line, n), D(t.line, r));
            },
            toggleOverwrite: function(t) {
              (null != t && t == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? s(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : uo(this.display.cursorDiv, 'CodeMirror-overwrite'),
                vt(this, 'overwriteToggle', this, this.state.overwrite));
            },
            hasFocus: function() {
              return this.display.input.getField() == l();
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: kn(function(t, e) {
              cn(this, t, e);
            }),
            getScrollInfo: function() {
              var t = this.display.scroller;
              return {
                left: t.scrollLeft,
                top: t.scrollTop,
                height: t.scrollHeight - de(this) - this.display.barHeight,
                width: t.scrollWidth - de(this) - this.display.barWidth,
                clientHeight: pe(this),
                clientWidth: he(this),
              };
            },
            scrollIntoView: kn(function(t, e) {
              null == t
                ? ((t = { from: this.doc.sel.primary().head, to: null }),
                  null == e && (e = this.options.cursorScrollMargin))
                : 'number' == typeof t
                  ? (t = { from: D(t, 0), to: null })
                  : null == t.from && (t = { from: t, to: null }),
                t.to || (t.to = t.from),
                (t.margin = e || 0),
                null != t.from.line
                  ? (function(t, e) {
                      fn(t), (t.curOp.scrollToPos = e);
                    })(this, t)
                  : dn(this, t.from, t.to, t.margin);
            }),
            setSize: kn(function(t, e) {
              var n = this,
                r = function(t) {
                  return 'number' == typeof t || /^\d+$/.test(String(t))
                    ? t + 'px'
                    : t;
                };
              null != t && (this.display.wrapper.style.width = r(t)),
                null != e && (this.display.wrapper.style.height = r(e)),
                this.options.lineWrapping && Ce(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function(t) {
                if (t.widgets)
                  for (var e = 0; e < t.widgets.length; e++)
                    if (t.widgets[e].noHScroll) {
                      Mn(n, i, 'widget');
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                vt(this, 'refresh', this);
            }),
            operation: function(t) {
              return Sn(this, t);
            },
            startOperation: function() {
              return wn(this);
            },
            endOperation: function() {
              return xn(this);
            },
            refresh: kn(function() {
              var t = this.display.cachedTextHeight;
              Tn(this),
                (this.curOp.forceUpdate = !0),
                ke(this),
                cn(this, this.doc.scrollLeft, this.doc.scrollTop),
                jn(this),
                (null == t || Math.abs(t - He(this.display)) > 0.5) && Ge(this),
                vt(this, 'refresh', this);
            }),
            swapDoc: kn(function(t) {
              var e = this.doc;
              return (
                (e.cm = null),
                tr(this, t),
                ke(this),
                this.display.input.reset(),
                cn(this, t.scrollLeft, t.scrollTop),
                (this.curOp.forceScroll = !0),
                Zt(this, 'swapDoc', this, e),
                e
              );
            }),
            getInputField: function() {
              return this.display.input.getField();
            },
            getWrapperElement: function() {
              return this.display.wrapper;
            },
            getScrollerElement: function() {
              return this.display.scroller;
            },
            getGutterElement: function() {
              return this.display.gutters;
            },
          }),
            bt(t),
            (t.registerHelper = function(e, r, i) {
              n.hasOwnProperty(e) || (n[e] = t[e] = { _global: [] }),
                (n[e][r] = i);
            }),
            (t.registerGlobalHelper = function(e, r, i, o) {
              t.registerHelper(e, r, o), n[e]._global.push({ pred: i, val: o });
            });
        })(ki);
      var _a = 'iter insert remove copy getEditor constructor'.split(' ');
      for (var Aa in sa.prototype)
        sa.prototype.hasOwnProperty(Aa) &&
          h(_a, Aa) < 0 &&
          (ki.prototype[Aa] = (function(t) {
            return function() {
              return t.apply(this.doc, arguments);
            };
          })(sa.prototype[Aa]));
      return (
        bt(sa),
        (ki.inputStyles = { textarea: Oa, contenteditable: Ma }),
        (ki.defineMode = function(t) {
          ki.defaults.mode || 'null' == t || (ki.defaults.mode = t),
            function(t, e) {
              arguments.length > 2 &&
                (e.dependencies = Array.prototype.slice.call(arguments, 2)),
                (Do[t] = e);
            }.apply(this, arguments);
        }),
        (ki.defineMIME = function(t, e) {
          Wo[t] = e;
        }),
        ki.defineMode('null', function() {
          return {
            token: function(t) {
              return t.skipToEnd();
            },
          };
        }),
        ki.defineMIME('text/plain', 'null'),
        (ki.defineExtension = function(t, e) {
          ki.prototype[t] = e;
        }),
        (ki.defineDocExtension = function(t, e) {
          sa.prototype[t] = e;
        }),
        (ki.fromTextArea = function(t, e) {
          function n() {
            t.value = s.getValue();
          }
          if (
            ((e = e ? f(e) : {}),
            (e.value = t.value),
            !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
            !e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
            null == e.autofocus)
          ) {
            var r = l();
            e.autofocus =
              r == t ||
              (null != t.getAttribute('autofocus') && r == document.body);
          }
          var i;
          if (t.form && (Oo(t.form, 'submit', n), !e.leaveSubmitMethodAlone)) {
            var o = t.form;
            i = o.submit;
            try {
              var a = (o.submit = function() {
                n(), (o.submit = i), o.submit(), (o.submit = a);
              });
            } catch (t) {}
          }
          (e.finishInit = function(e) {
            (e.save = n),
              (e.getTextArea = function() {
                return t;
              }),
              (e.toTextArea = function() {
                (e.toTextArea = isNaN),
                  n(),
                  t.parentNode.removeChild(e.getWrapperElement()),
                  (t.style.display = ''),
                  t.form &&
                    (pt(t.form, 'submit', n),
                    'function' == typeof t.form.submit && (t.form.submit = i));
              });
          }),
            (t.style.display = 'none');
          var s = ki(function(e) {
            return t.parentNode.insertBefore(e, t.nextSibling);
          }, e);
          return s;
        }),
        (function(t) {
          (t.off = pt),
            (t.on = Oo),
            (t.wheelEventPixels = Rn),
            (t.Doc = sa),
            (t.splitLines = Ao),
            (t.countColumn = d),
            (t.findColumn = p),
            (t.isWordChar = w),
            (t.Pass = go),
            (t.signal = vt),
            (t.Line = Ro),
            (t.changeEnd = Un),
            (t.scrollbarModel = Yo),
            (t.Pos = D),
            (t.cmpPos = W),
            (t.modes = Do),
            (t.mimeModes = Wo),
            (t.resolveMode = Ot),
            (t.getMode = _t),
            (t.modeExtensions = jo),
            (t.extendMode = At),
            (t.copyState = Nt),
            (t.startState = Pt),
            (t.innerMode = Et),
            (t.commands = ga),
            (t.keyMap = va),
            (t.keyName = ti),
            (t.isModifierKey = Jr),
            (t.lookupKey = Zr),
            (t.normalizeKeyMap = Yr),
            (t.StringStream = Fo),
            (t.SharedTextMarker = aa),
            (t.TextMarker = oa),
            (t.LineWidget = ra),
            (t.e_preventDefault = wt),
            (t.e_stopPropagation = xt),
            (t.e_stop = Ct),
            (t.addClass = s),
            (t.contains = a),
            (t.rmClass = uo),
            (t.keyNames = fa);
        })(ki),
        (ki.version = '5.31.0'),
        ki
      );
    });
  },
  function(t, e) {
    t.exports = function(t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i;
            },
          }),
          Object.defineProperty(e, 'exports', { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function(t, e, n) {
    t.exports =
      !n(3) &&
      !n(11)(function() {
        return (
          7 !=
          Object.defineProperty(n(32)('div'), 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(t, e, n) {
    var r = n(5),
      i = n(0).document,
      o = r(i) && r(i.createElement);
    t.exports = function(t) {
      return o ? i.createElement(t) : {};
    };
  },
  function(t, e, n) {
    e.f = n(1);
  },
  function(t, e, n) {
    var r = n(2),
      i = n(10),
      o = n(55)(!1),
      a = n(25)('IE_PROTO');
    t.exports = function(t, e) {
      var n,
        l = i(t),
        s = 0,
        u = [];
      for (n in l) n != a && r(l, n) && u.push(n);
      for (; e.length > s; ) r(l, (n = e[s++])) && (~o(u, n) || u.push(n));
      return u;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function(t, e, n) {
    var r = n(37),
      i = Math.min;
    t.exports = function(t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  function(t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function(t, e, n) {
    var r = n(34),
      i = n(26).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return r(t, i);
      };
  },
  function(t, e, n) {
    var r = n(27),
      i = n(16),
      o = n(10),
      a = n(20),
      l = n(2),
      s = n(31),
      u = Object.getOwnPropertyDescriptor;
    e.f = n(3)
      ? u
      : function(t, e) {
          if (((t = o(t)), (e = a(e, !0)), s))
            try {
              return u(t, e);
            } catch (t) {}
          if (l(t, e)) return i(!r.f.call(t, e), t[e]);
        };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { value: e, done: !!t };
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(23),
      i = n(14),
      o = n(9),
      a = n(6),
      l = n(2),
      s = n(13),
      u = n(64),
      c = n(18),
      f = n(65),
      d = n(1)('iterator'),
      h = !([].keys && 'next' in [].keys()),
      p = function() {
        return this;
      };
    t.exports = function(t, e, n, v, g, m, y) {
      u(n, e, v);
      var b,
        w,
        x,
        S = function(t) {
          if (!h && t in T) return T[t];
          switch (t) {
            case 'keys':
            case 'values':
              return function() {
                return new n(this, t);
              };
          }
          return function() {
            return new n(this, t);
          };
        },
        C = e + ' Iterator',
        k = 'values' == g,
        L = !1,
        T = t.prototype,
        M = T[d] || T['@@iterator'] || (g && T[g]),
        O = M || S(g),
        _ = g ? (k ? S('entries') : O) : void 0,
        A = 'Array' == e ? T.entries || M : M;
      if (
        (A &&
          (x = f(A.call(new t()))) !== Object.prototype &&
          x.next &&
          (c(x, C, !0), r || l(x, d) || a(x, d, p)),
        k &&
          M &&
          'values' !== M.name &&
          ((L = !0),
          (O = function() {
            return M.call(this);
          })),
        (r && !y) || (!h && !L && T[d]) || a(T, d, O),
        (s[e] = O),
        (s[C] = p),
        g)
      )
        if (
          ((b = {
            values: k ? O : S('values'),
            keys: m ? O : S('keys'),
            entries: _,
          }),
          y)
        )
          for (w in b) w in T || o(T, w, b[w]);
        else i(i.P + i.F * (h || L), e, b);
      return b;
    };
  },
  function(t, e, n) {
    var r = n(9);
    t.exports = function(t, e, n) {
      for (var i in e) r(t, i, e[i], n);
      return t;
    };
  },
  function(t, e) {
    t.exports = function(t, e, n, r) {
      if (!(t instanceof e) || (void 0 !== r && r in t))
        throw TypeError(n + ': incorrect invocation!');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(17),
      i = n(69),
      o = n(70),
      a = n(7),
      l = n(36),
      s = n(71),
      u = {},
      c = {};
    ((e = t.exports = function(t, e, n, f, d) {
      var h,
        p,
        v,
        g,
        m = d
          ? function() {
              return t;
            }
          : s(t),
        y = r(n, f, e ? 2 : 1),
        b = 0;
      if ('function' != typeof m) throw TypeError(t + ' is not iterable!');
      if (o(m)) {
        for (h = l(t.length); h > b; b++)
          if ((g = e ? y(a((p = t[b]))[0], p[1]) : y(t[b])) === u || g === c)
            return g;
      } else
        for (v = m.call(t); !(p = v.next()).done; )
          if ((g = i(v, y, p.value, e)) === u || g === c) return g;
    }).BREAK = u),
      (e.RETURN = c);
  },
  function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e) {
      if (!r(t) || t._t !== e)
        throw TypeError('Incompatible receiver, ' + e + ' required!');
      return t;
    };
  },
  function(t, e, n) {
    'use strict';
    (function(t) {
      var n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        r =
          'object' == (void 0 === t ? 'undefined' : n(t)) &&
          t &&
          t.Object === Object &&
          t;
      e.a = r;
    }.call(e, n(81)));
  },
  function(t, e, n) {
    'use strict';
    (function(t) {
      var r = n(8),
        i = n(83),
        o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        a =
          'object' ==
            ('undefined' == typeof exports ? 'undefined' : o(exports)) &&
          exports &&
          !exports.nodeType &&
          exports,
        l = a && 'object' == o(t) && t && !t.nodeType && t,
        s = l && l.exports === a ? r.a.Buffer : void 0,
        u = (s ? s.isBuffer : void 0) || i.a;
      e.a = u;
    }.call(e, n(30)(t)));
  },
  function(t, e, n) {
    'use strict';
    function r(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function i(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function o(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function a(t) {
      var e = (this.__data__ = new w(t));
      this.size = e.size;
    }
    function l(t, e, n, r, i) {
      t !== e &&
        Et(
          e,
          function(o, a) {
            if (z(o)) i || (i = new Ot()), Ne(t, e, a, n, l, r, i);
            else {
              var s = r ? r(t[a], o, a + '', t, e, i) : void 0;
              void 0 === s && (s = o), Nt(t, a, s);
            }
          },
          _e
        );
    }
    function s(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw new TypeError(Dn);
      var n = function n() {
        var r = arguments,
          i = e ? e.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (s.Cache || Lt)()), n;
    }
    function u(t, e, n) {
      function r(e) {
        var n = s,
          r = u;
        return (s = u = void 0), (p = e), (f = t.apply(r, n));
      }
      function i(t) {
        var n = t - h;
        return void 0 === h || n >= e || n < 0 || (g && t - p >= c);
      }
      function o() {
        var t = lr();
        if (i(t)) return a(t);
        d = setTimeout(
          o,
          (function(t) {
            var n = e - (t - h);
            return g ? wr(n, c - (t - p)) : n;
          })(t)
        );
      }
      function a(t) {
        return (d = void 0), m && s ? r(t) : ((s = u = void 0), f);
      }
      function l() {
        var t = lr(),
          n = i(t);
        if (((s = arguments), (u = this), (h = t), n)) {
          if (void 0 === d)
            return (function(t) {
              return (p = t), (d = setTimeout(o, e)), v ? r(t) : f;
            })(h);
          if (g) return (d = setTimeout(o, e)), r(h);
        }
        return void 0 === d && (d = setTimeout(o, e)), f;
      }
      var s,
        u,
        c,
        f,
        d,
        h,
        p = 0,
        v = !1,
        g = !1,
        m = !0;
      if ('function' != typeof t) throw new TypeError(yr);
      return (
        (e = mr(e) || 0),
        z(n) &&
          ((v = !!n.leading),
          (c = (g = 'maxWait' in n) ? br(mr(n.maxWait) || 0, e) : c),
          (m = 'trailing' in n ? !!n.trailing : m)),
        (l.cancel = function() {
          void 0 !== d && clearTimeout(d), (p = 0), (s = h = u = d = void 0);
        }),
        (l.flush = function() {
          return void 0 === d ? f : a(lr());
        }),
        l
      );
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    n(50), n(61), n(67), n(78);
    var c = n(29),
      f = n.n(c),
      d = (n(79),
      function() {
        (this.__data__ = []), (this.size = 0);
      }),
      h = function(t, e) {
        return t === e || (t != t && e != e);
      },
      p = function(t, e) {
        for (var n = t.length; n--; ) if (h(t[n][0], e)) return n;
        return -1;
      },
      v = Array.prototype.splice,
      g = function(t) {
        var e = this.__data__,
          n = p(e, t);
        return !(
          n < 0 ||
          (n == e.length - 1 ? e.pop() : v.call(e, n, 1), --this.size, 0)
        );
      },
      m = function(t) {
        var e = this.__data__,
          n = p(e, t);
        return n < 0 ? void 0 : e[n][1];
      },
      y = function(t) {
        return p(this.__data__, t) > -1;
      },
      b = function(t, e) {
        var n = this.__data__,
          r = p(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
      };
    (r.prototype.clear = d),
      (r.prototype.delete = g),
      (r.prototype.get = m),
      (r.prototype.has = y),
      (r.prototype.set = b);
    var w = r,
      x = function() {
        (this.__data__ = new w()), (this.size = 0);
      },
      S = function(t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      },
      C = function(t) {
        return this.__data__.get(t);
      },
      k = function(t) {
        return this.__data__.has(t);
      },
      L = n(8),
      T = L.a.Symbol,
      M = Object.prototype,
      O = M.hasOwnProperty,
      _ = M.toString,
      A = T ? T.toStringTag : void 0,
      N = function(t) {
        var e = O.call(t, A),
          n = t[A];
        try {
          t[A] = void 0;
          var r = !0;
        } catch (t) {}
        var i = _.call(t);
        return r && (e ? (t[A] = n) : delete t[A]), i;
      },
      E = Object.prototype.toString,
      P = function(t) {
        return E.call(t);
      },
      D = '[object Null]',
      W = '[object Undefined]',
      j = T ? T.toStringTag : void 0,
      F = function(t) {
        return null == t
          ? void 0 === t ? W : D
          : j && j in Object(t) ? N(t) : P(t);
      },
      H =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      z = function(t) {
        var e = void 0 === t ? 'undefined' : H(t);
        return null != t && ('object' == e || 'function' == e);
      },
      I = '[object AsyncFunction]',
      R = '[object Function]',
      B = '[object GeneratorFunction]',
      G = '[object Proxy]',
      V = function(t) {
        if (!z(t)) return !1;
        var e = F(t);
        return e == R || e == B || e == I || e == G;
      },
      U = L.a['__core-js_shared__'],
      K = (function() {
        var t = /[^.]+$/.exec((U && U.keys && U.keys.IE_PROTO) || '');
        return t ? 'Symbol(src)_1.' + t : '';
      })(),
      q = function(t) {
        return !!K && K in t;
      },
      $ = Function.prototype.toString,
      X = function(t) {
        if (null != t) {
          try {
            return $.call(t);
          } catch (t) {}
          try {
            return t + '';
          } catch (t) {}
        }
        return '';
      },
      Y = /^\[object .+?Constructor\]$/,
      Z = Function.prototype,
      J = Object.prototype,
      Q = Z.toString,
      tt = J.hasOwnProperty,
      et = RegExp(
        '^' +
          Q.call(tt)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      ),
      nt = function(t) {
        return !(!z(t) || q(t)) && (V(t) ? et : Y).test(X(t));
      },
      rt = function(t, e) {
        return null == t ? void 0 : t[e];
      },
      it = function(t, e) {
        var n = rt(t, e);
        return nt(n) ? n : void 0;
      },
      ot = it(L.a, 'Map'),
      at = it(Object, 'create'),
      lt = function() {
        (this.__data__ = at ? at(null) : {}), (this.size = 0);
      },
      st = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      },
      ut = '__lodash_hash_undefined__',
      ct = Object.prototype.hasOwnProperty,
      ft = function(t) {
        var e = this.__data__;
        if (at) {
          var n = e[t];
          return n === ut ? void 0 : n;
        }
        return ct.call(e, t) ? e[t] : void 0;
      },
      dt = Object.prototype.hasOwnProperty,
      ht = function(t) {
        var e = this.__data__;
        return at ? void 0 !== e[t] : dt.call(e, t);
      },
      pt = '__lodash_hash_undefined__',
      vt = function(t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = at && void 0 === e ? pt : e),
          this
        );
      };
    (i.prototype.clear = lt),
      (i.prototype.delete = st),
      (i.prototype.get = ft),
      (i.prototype.has = ht),
      (i.prototype.set = vt);
    var gt = i,
      mt = function() {
        (this.size = 0),
          (this.__data__ = {
            hash: new gt(),
            map: new (ot || w)(),
            string: new gt(),
          });
      },
      yt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      bt = function(t) {
        var e = void 0 === t ? 'undefined' : yt(t);
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
          ? '__proto__' !== t
          : null === t;
      },
      wt = function(t, e) {
        var n = t.__data__;
        return bt(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map;
      },
      xt = function(t) {
        var e = wt(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      },
      St = function(t) {
        return wt(this, t).get(t);
      },
      Ct = function(t) {
        return wt(this, t).has(t);
      },
      kt = function(t, e) {
        var n = wt(this, t),
          r = n.size;
        return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
      };
    (o.prototype.clear = mt),
      (o.prototype.delete = xt),
      (o.prototype.get = St),
      (o.prototype.has = Ct),
      (o.prototype.set = kt);
    var Lt = o,
      Tt = 200,
      Mt = function(t, e) {
        var n = this.__data__;
        if (n instanceof w) {
          var r = n.__data__;
          if (!ot || r.length < Tt - 1)
            return r.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new Lt(r);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    (a.prototype.clear = x),
      (a.prototype.delete = S),
      (a.prototype.get = C),
      (a.prototype.has = k),
      (a.prototype.set = Mt);
    var Ot = a,
      _t = (function() {
        try {
          var t = it(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })(),
      At = function(t, e, n) {
        '__proto__' == e && _t
          ? _t(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      },
      Nt = function(t, e, n) {
        ((void 0 === n || h(t[e], n)) && (void 0 !== n || e in t)) ||
          At(t, e, n);
      },
      Et = (function(t) {
        return function(e, n, r) {
          for (var i = -1, o = Object(e), a = r(e), l = a.length; l--; ) {
            var s = a[t ? l : ++i];
            if (!1 === n(o[s], s, o)) break;
          }
          return e;
        };
      })(),
      Pt = n(82),
      Dt = L.a.Uint8Array,
      Wt = function(t) {
        var e = new t.constructor(t.byteLength);
        return new Dt(e).set(new Dt(t)), e;
      },
      jt = function(t, e) {
        var n = e ? Wt(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
      },
      Ft = function(t, e) {
        var n = -1,
          r = t.length;
        for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
        return e;
      },
      Ht = Object.create,
      zt = (function() {
        function t() {}
        return function(e) {
          if (!z(e)) return {};
          if (Ht) return Ht(e);
          t.prototype = e;
          var n = new t();
          return (t.prototype = void 0), n;
        };
      })(),
      It = (function(t, e) {
        return function(n) {
          return t(e(n));
        };
      })(Object.getPrototypeOf, Object),
      Rt = Object.prototype,
      Bt = function(t) {
        var e = t && t.constructor;
        return t === (('function' == typeof e && e.prototype) || Rt);
      },
      Gt = function(t) {
        return 'function' != typeof t.constructor || Bt(t) ? {} : zt(It(t));
      },
      Vt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      Ut = function(t) {
        return null != t && 'object' == (void 0 === t ? 'undefined' : Vt(t));
      },
      Kt = '[object Arguments]',
      qt = function(t) {
        return Ut(t) && F(t) == Kt;
      },
      $t = Object.prototype,
      Xt = $t.hasOwnProperty,
      Yt = $t.propertyIsEnumerable,
      Zt = qt(
        (function() {
          return arguments;
        })()
      )
        ? qt
        : function(t) {
            return Ut(t) && Xt.call(t, 'callee') && !Yt.call(t, 'callee');
          },
      Jt = Array.isArray,
      Qt = 9007199254740991,
      te = function(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= Qt;
      },
      ee = function(t) {
        return null != t && te(t.length) && !V(t);
      },
      ne = function(t) {
        return Ut(t) && ee(t);
      },
      re = n(48),
      ie = '[object Object]',
      oe = Function.prototype,
      ae = Object.prototype,
      le = oe.toString,
      se = ae.hasOwnProperty,
      ue = le.call(Object),
      ce = function(t) {
        if (!Ut(t) || F(t) != ie) return !1;
        var e = It(t);
        if (null === e) return !0;
        var n = se.call(e, 'constructor') && e.constructor;
        return 'function' == typeof n && n instanceof n && le.call(n) == ue;
      },
      fe = {};
    (fe['[object Float32Array]'] = fe['[object Float64Array]'] = fe[
      '[object Int8Array]'
    ] = fe['[object Int16Array]'] = fe['[object Int32Array]'] = fe[
      '[object Uint8Array]'
    ] = fe['[object Uint8ClampedArray]'] = fe['[object Uint16Array]'] = fe[
      '[object Uint32Array]'
    ] = !0),
      (fe['[object Arguments]'] = fe['[object Array]'] = fe[
        '[object ArrayBuffer]'
      ] = fe['[object Boolean]'] = fe['[object DataView]'] = fe[
        '[object Date]'
      ] = fe['[object Error]'] = fe['[object Function]'] = fe[
        '[object Map]'
      ] = fe['[object Number]'] = fe['[object Object]'] = fe[
        '[object RegExp]'
      ] = fe['[object Set]'] = fe['[object String]'] = fe[
        '[object WeakMap]'
      ] = !1);
    var de = function(t) {
        return Ut(t) && te(t.length) && !!fe[F(t)];
      },
      he = function(t) {
        return function(e) {
          return t(e);
        };
      },
      pe = n(84),
      ve = pe.a && pe.a.isTypedArray,
      ge = ve ? he(ve) : de,
      me = Object.prototype.hasOwnProperty,
      ye = function(t, e, n) {
        var r = t[e];
        (me.call(t, e) && h(r, n) && (void 0 !== n || e in t)) || At(t, e, n);
      },
      be = function(t, e, n, r) {
        var i = !n;
        n || (n = {});
        for (var o = -1, a = e.length; ++o < a; ) {
          var l = e[o],
            s = r ? r(n[l], t[l], l, n, t) : void 0;
          void 0 === s && (s = t[l]), i ? At(n, l, s) : ye(n, l, s);
        }
        return n;
      },
      we = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      },
      xe = 9007199254740991,
      Se = /^(?:0|[1-9]\d*)$/,
      Ce = function(t, e) {
        return (
          !!(e = null == e ? xe : e) &&
          ('number' == typeof t || Se.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      },
      ke = Object.prototype.hasOwnProperty,
      Le = function(t, e) {
        var n = Jt(t),
          r = !n && Zt(t),
          i = !n && !r && Object(re.a)(t),
          o = !n && !r && !i && ge(t),
          a = n || r || i || o,
          l = a ? we(t.length, String) : [],
          s = l.length;
        for (var u in t)
          (!e && !ke.call(t, u)) ||
            (a &&
              ('length' == u ||
                (i && ('offset' == u || 'parent' == u)) ||
                (o &&
                  ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                Ce(u, s))) ||
            l.push(u);
        return l;
      },
      Te = function(t) {
        var e = [];
        if (null != t) for (var n in Object(t)) e.push(n);
        return e;
      },
      Me = Object.prototype.hasOwnProperty,
      Oe = function(t) {
        if (!z(t)) return Te(t);
        var e = Bt(t),
          n = [];
        for (var r in t)
          ('constructor' != r || (!e && Me.call(t, r))) && n.push(r);
        return n;
      },
      _e = function(t) {
        return ee(t) ? Le(t, !0) : Oe(t);
      },
      Ae = function(t) {
        return be(t, _e(t));
      },
      Ne = function(t, e, n, r, i, o, a) {
        var l = t[n],
          s = e[n],
          u = a.get(s);
        if (u) Nt(t, n, u);
        else {
          var c = o ? o(l, s, n + '', t, e, a) : void 0,
            f = void 0 === c;
          if (f) {
            var d = Jt(s),
              h = !d && Object(re.a)(s),
              p = !d && !h && ge(s);
            (c = s),
              d || h || p
                ? Jt(l)
                  ? (c = l)
                  : ne(l)
                    ? (c = Ft(l))
                    : h
                      ? ((f = !1), (c = Object(Pt.a)(s, !0)))
                      : p ? ((f = !1), (c = jt(s, !0))) : (c = [])
                : ce(s) || Zt(s)
                  ? ((c = l),
                    Zt(l) ? (c = Ae(l)) : (!z(l) || (r && V(l))) && (c = Gt(s)))
                  : (f = !1);
          }
          f && (a.set(s, c), i(c, s, r, o, a), a.delete(s)), Nt(t, n, c);
        }
      },
      Ee = l,
      Pe = function(t) {
        return t;
      },
      De = function(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      },
      We = Math.max,
      je = function(t, e, n) {
        return (
          (e = We(void 0 === e ? t.length - 1 : e, 0)),
          function() {
            for (
              var r = arguments, i = -1, o = We(r.length - e, 0), a = Array(o);
              ++i < o;

            )
              a[i] = r[e + i];
            i = -1;
            for (var l = Array(e + 1); ++i < e; ) l[i] = r[i];
            return (l[e] = n(a)), De(t, this, l);
          }
        );
      },
      Fe = function(t) {
        return function() {
          return t;
        };
      },
      He = _t
        ? function(t, e) {
            return _t(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: Fe(e),
              writable: !0,
            });
          }
        : Pe,
      ze = 800,
      Ie = 16,
      Re = Date.now,
      Be = (function(t) {
        var e = 0,
          n = 0;
        return function() {
          var r = Re(),
            i = Ie - (r - n);
          if (((n = r), i > 0)) {
            if (++e >= ze) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      })(He),
      Ge = function(t, e) {
        return Be(je(t, e, Pe), t + '');
      },
      Ve =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      Ue = function(t, e, n) {
        if (!z(n)) return !1;
        var r = void 0 === e ? 'undefined' : Ve(e);
        return (
          !!('number' == r
            ? ee(n) && Ce(e, n.length)
            : 'string' == r && e in n) && h(n[e], t)
        );
      },
      Ke = (function(t) {
        return Ge(function(e, n) {
          var r = -1,
            i = n.length,
            o = i > 1 ? n[i - 1] : void 0,
            a = i > 2 ? n[2] : void 0;
          for (
            o = t.length > 3 && 'function' == typeof o ? (i--, o) : void 0,
              a && Ue(n[0], n[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
              e = Object(e);
            ++r < i;

          ) {
            var l = n[r];
            l && t(e, l, r, o);
          }
          return e;
        });
      })(function(t, e, n) {
        Ee(t, e, n);
      }),
      qe = 0,
      $e = function() {
        return 'domain-gfx-id-' + ++qe;
      },
      Xe = window && window.Symbol ? Symbol('lib namespace') : '_' + $e(),
      Ye = function(t) {
        return {
          set: function(e, n) {
            t.setAttribute('data-' + e, n);
          },
          get: function(e) {
            return t.getAttribute('data-' + e);
          },
        };
      },
      Ze = function(t) {
        var e = t.className,
          n = t.acceptedMargin,
          r = document.createElement('style');
        return (
          (r.textContent =
            '\n.' +
            e +
            ' {\n  padding-bottom: ' +
            n +
            'px;\n  font-family: Sans-Serif;\n}\n.' +
            e +
            '.hidden {\n  pointer-events: none;\n  display: block;\n  opacity: 0;\n  transform: translate(-999px, -999px);\n  transform: translate(200vw, 200vh);\n}\n.' +
            e +
            '___container {\n  border-style: solid;\n  border-color: #dedede;\n  border-width: 1px 2px 2px 1px;\n  border-radius: 0.2em;\n  background-color: #fff;\n  margin-bottom: ' +
            n +
            'px;\n}\n.' +
            e +
            ' thead {\n  background-color: #dedede;\n}\n.' +
            e +
            ' td:first-of-type {\n  font-weight: bold;\n}\n.' +
            e +
            ' th {\n  text-align: left;\n}\n.' +
            e +
            ' .coordinates {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.' +
            e +
            ' .domain {\n  margin: 0 0.5em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 0.5em;\n  background-color: black;\n}\n.' +
            e +
            ' .alignment {\n  display: inline-block;\n  margin-left: 0;\n  height: 1em;\n  border-radius: 0.2em;\n  background-color: grey;\n}'),
          r
        );
      },
      Je =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      Qe = function(t) {
        var e = Je({}, t, t.metadata || {}),
          n = e.identifier || e.type || e.accession || '',
          r = e.accession || '',
          i = e.description,
          o = e.database || e.source,
          a = e.start,
          l = e.targetStart || e.tStart || e.tstart,
          s = e.targetEnd || e.tEnd || e.tend,
          u = e.queryStart || e.qStart || e.qstart,
          c = e.queryEnd || e.qEnd || e.qend,
          f = void 0;
        if (e.end) {
          var d = e.end - e.start,
            h = e.aliStart || e.start,
            p = e.aliEnd || e.end,
            v = 0;
          h - e.start > 0 && (v = (h - e.start) / d * 100),
            (f =
              '\n      ' +
              e.start +
              '<span style="width: 100px;" class="domain">\n        <span class="alignment" style="\n          width: ' +
              100 * (p - h) / d +
              'px;\n          margin-left: ' +
              v +
              'px;\n          background-color: ' +
              e.color +
              ';\n        "></span>\n      </span>' +
              e.end +
              '\n    ');
        }
        return (
          '\n    <table>\n      <thead>\n        <tr>\n          <th colspan="2">\n            ' +
          (n || (l && 'Match coordinates')) +
          '\n            ' +
          (r && r !== n ? ' (' + r + ')' : '') +
          '\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        ' +
          (i
            ? '\n        <tr>\n          <td>Description:</td>\n          <td>' +
              i +
              '</td>\n        </tr>\n        '
            : '') +
          '\n        ' +
          (f
            ? '\n        <tr>\n          <td>Coordinates:</td>\n          <td class="coordinates">' +
              f +
              '</td>\n        </tr>\n        '
            : '') +
          '\n        ' +
          (!f && a
            ? '\n        <tr>\n          <td>Position:</td>\n          <td>' +
              a +
              '</td>\n        </tr>\n        '
            : '') +
          '\n        ' +
          (o
            ? '\n        <tr>\n          <td>Source:</td>\n          <td>' +
              o +
              '</td>\n        </tr>\n        '
            : '') +
          '\n        ' +
          (l
            ? '\n        <tr>\n          <td>Target:</td>\n          <td>' +
              l +
              (s ? ' - ' + s : '') +
              '</td>\n        </tr>\n        '
            : '') +
          '\n        ' +
          (u
            ? '\n        <tr>\n          <td>Query:</td>\n          <td>' +
              u +
              (c ? ' - ' + c : '') +
              '</td>\n        </tr>\n        '
            : '') +
          '\n      </tbody>\n    </table>\n  '
        );
      },
      tn = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      en = 5,
      nn = 'domain_gfx__tooltip',
      rn = function t(e) {
        if (!e) throw new Error('No entity found in the whole tree');
        return Ye(e).get('entity')
          ? e.getBoundingClientRect()
          : t(e.parentNode);
      },
      on = function(t, e) {
        var n = t.left + t.width / 2 - e.width / 2;
        n = n < 0 ? 0 : Math.min(n, window.innerWidth - e.width);
        var r = t.top - e.height;
        return { x: Math.round(n), y: Math.round(r) };
      },
      an = function(t) {
        var e = document.createElement('div');
        return e.classList.add(nn + '___container'), (e.innerHTML = t), e;
      },
      ln = (function() {
        function t() {
          var e = this;
          if (
            ((function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (this._promoteTarget = function(t) {
              return function(n) {
                n.target !== t ||
                  e._promoted ||
                  (e._container.style.willChange = 'transform');
              };
            }),
            (this._demoteTarget = function(t) {
              return function(n) {
                var r = n.target,
                  i = n.relatedTarget;
                r === t &&
                  e._promoted &&
                  ((i && i === e._container) ||
                    (e._container.style.willChange = ''));
              };
            }),
            (this._replaceTooltipContent = function(t) {
              (e._current = an(Qe(t))),
                e._container.replaceChild(
                  e._current,
                  e._container.firstElementChild
                );
            }),
            (this._hide = function() {
              e._container.classList.add('hidden'), (e._visible = !1);
            }),
            (this._display = function(t) {
              var n = t.x,
                r = t.y;
              (e._container.style.transform =
                'translate(' + n + 'px, ' + (r + en) + 'px)'),
                e._container.classList.remove('hidden');
            }),
            (this._handleMouseOver = function(t) {
              var n = t.target[Xe];
              e._currentData !== n &&
                (e._currentData || n) &&
                ((e._currentData = n),
                e._replaceTooltipContent(n),
                e._display(
                  on(rn(t.target), e._container.getBoundingClientRect())
                ));
            }),
            (this._handleMouseOut = function(t) {
              if (t.target[Xe] && t.relatedTarget !== e._container) {
                var n = t.relatedTarget[Xe];
                n !== e._currentData &&
                  ((e._currentData = n || null),
                  n
                    ? (e._replaceTooltipContent(n),
                      e._display(
                        on(
                          rn(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              }
            }),
            window)
          ) {
            var n = document.createElement('div');
            n.classList.add(nn),
              n.classList.add('hidden'),
              (n.style.position = 'fixed'),
              (n.style.left = '0'),
              (n.style.top = '0');
            var r = an('<p>placeholder</p>');
            if (
              (n.appendChild(r),
              (this._current = r),
              (this._container = n),
              !document.body)
            )
              throw new Error('No body in document');
            if (
              (document.body.appendChild(n),
              (this._promoted = !1),
              !document.head)
            )
              throw new Error('No head in document');
            document.head.appendChild(
              Ze({ className: nn, acceptedMargin: en })
            ),
              n.addEventListener('mouseleave', function(t) {
                var n = t.relatedTarget[Xe];
                n !== e._currentData &&
                  ((e._currentData = n || null),
                  n
                    ? (e._replaceTooltipContent(n),
                      e._display(
                        on(
                          rn(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              });
          }
        }
        return (
          tn(t, [
            {
              key: 'attachToCanvas',
              value: function(t) {
                var e = this,
                  n = this._promoteTarget(t),
                  r = this._demoteTarget(t);
                return (
                  t.addEventListener('mouseenter', n),
                  t.addEventListener('mouseleave', r),
                  t.addEventListener('mouseover', this._handleMouseOver),
                  t.addEventListener('mousemove', this._handleMouseOver),
                  t.addEventListener('mouseout', this._handleMouseOut),
                  function() {
                    t.removeEventListener('mouseenter', n),
                      t.removeEventListener('mouseleave', r),
                      t.removeEventListener('mouseover', e._handleMouseOver),
                      t.removeEventListener('mousemove', e._handleMouseOver),
                      t.removeEventListener('mouseout', e._handleMouseOut);
                  }
                );
              },
            },
          ]),
          t
        );
      })(),
      sn = void 0,
      un = function() {
        return sn || (sn = new ln()), sn;
      },
      cn = function(t) {
        return function(e) {
          for (
            var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          var o = document.createElementNS('http://www.w3.org/2000/svg', t),
            a = Object.keys(e || {}),
            l = !0,
            s = !1,
            u = void 0;
          try {
            for (
              var c, f = a[Symbol.iterator]();
              !(l = (c = f.next()).done);
              l = !0
            ) {
              var d = c.value,
                h = e[d];
              (h || 0 === h) && o.setAttribute(d, String(h));
            }
          } catch (t) {
            (s = !0), (u = t);
          } finally {
            try {
              !l && f.return && f.return();
            } finally {
              if (s) throw u;
            }
          }
          var p = !0,
            v = !1,
            g = void 0;
          try {
            for (
              var m, y = r[Symbol.iterator]();
              !(p = (m = y.next()).done);
              p = !0
            ) {
              var b = m.value;
              b &&
                o.appendChild(
                  b instanceof Node ? b : document.createTextNode(b)
                );
            }
          } catch (t) {
            (v = !0), (g = t);
          } finally {
            try {
              !p && y.return && y.return();
            } finally {
              if (v) throw g;
            }
          }
          return o;
        };
      },
      fn = cn('svg'),
      dn = cn('circle'),
      hn = cn('defs'),
      pn = cn('linearGradient'),
      vn = cn('g'),
      gn = cn('mask'),
      mn = cn('path'),
      yn = cn('rect'),
      bn = cn('stop'),
      wn = cn('text'),
      xn = cn('filter'),
      Sn = cn('feGaussianBlur'),
      Cn = cn('feSpecularLighting'),
      kn = cn('fePointLight'),
      Ln = cn('feComposite'),
      Tn = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      Mn = (function() {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'm0,0';
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._data = e);
        }
        return (
          Tn(t, [
            {
              key: 'add',
              value: function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : '';
                return (this._data += t), this;
              },
            },
            {
              key: 'finish',
              value: function(t) {
                return t && (this._data += 'z'), this._data;
              },
            },
            {
              key: 'close',
              value: function() {
                return this.finish(!0);
              },
            },
          ]),
          t
        );
      })(),
      On = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t ? 'v' + e : 0 === e ? 'h' + t : 'l' + t + ',' + e;
      },
      _n = function(t) {
        return On(0, t);
      },
      An = function(t, e) {
        var n = t.start,
          r = t.end,
          i = t.v_align,
          o = t.vAlign,
          a = t.level,
          l = void 0 === a ? 0 : a,
          s = t.lineColor,
          u = t.headColor,
          c = t.color,
          f = t.headStyle,
          d = /top/i.test(i || o),
          h = new Mn().add(_n((1.5 * l + 8) * (d ? -1 : 1)));
        return (
          r &&
            (h = h
              .add(
                (function(t) {
                  return On(t, 0);
                })((r - n) * e)
              )
              .add(_n((1.5 * l + 8) * (d ? 1 : -1)))),
          (h = h.finish()),
          vn(
            null,
            mn({ d: h, fill: 'none', stroke: s || (r && c) || 'black' }),
            !r &&
              (function(t) {
                var e = t.style,
                  n = t.color,
                  r = t.isOnTop;
                switch (e) {
                  case 'diamond':
                    return (function(t, e) {
                      var n = new Mn('m0,' + (e ? -10 : 6))
                        .add(On(2, 2))
                        .add(On(-2, 2))
                        .add(On(-2, -2))
                        .close();
                      return mn({ d: n, fill: t });
                    })(n, r);
                  case 'circle':
                    return (function(t, e) {
                      return dn({ cx: 0, cy: e ? -8 : 8, r: 1.5, fill: t });
                    })(n, r);
                  case 'arrow':
                    return (function(t, e) {
                      var n = void 0;
                      return (
                        (n = e
                          ? new Mn('m-2,-6')
                              .add(On(2, -2))
                              .add(On(2, 2))
                              .finish()
                          : new Mn('m-2,6')
                              .add(On(2, 2))
                              .add(On(2, -2))
                              .finish()),
                        mn({ stroke: t, fill: 'none', d: n })
                      );
                    })(n, r);
                  case 'pointer':
                    return (function(t, e) {
                      var n = void 0;
                      return (
                        (n = e
                          ? new Mn('m-2,-4.5')
                              .add(On(2, 2))
                              .add(On(2, -2))
                              .finish()
                          : new Mn('m-2,4.5')
                              .add(On(2, -2))
                              .add(On(2, 2))
                              .finish()),
                        mn({ stroke: t, fill: 'none', d: n })
                      );
                    })(n, r);
                  case 'line':
                    return (function(t, e) {
                      return mn({
                        stroke: t,
                        d: new Mn('m0,' + (8 * (e ? -1 : 1) - 1.5))
                          .add(_n(3))
                          .finish(),
                      });
                    })(n, r);
                  case 'square':
                  default:
                    return (function(t, e) {
                      return yn({
                        x: -1.5,
                        y: e ? -9.5 : 6.5,
                        width: 3,
                        height: 3,
                        fill: t,
                      });
                    })(n, r);
                }
              })({ color: u || (!r && c) || 'black', style: f, isOnTop: d })
          )
        );
      },
      Nn = function(t) {
        var e = t.position,
          n = e.x,
          r = e.y,
          i = t.length,
          o = t.height,
          a = t.color;
        return yn({
          x: n,
          y: r,
          width: i,
          height: o,
          fill: a || '#d8d8d8',
          rx: o / 2,
          ry: o / 2,
        });
      },
      En = function(t) {
        var e = t.position,
          n = e.x,
          r = e.y,
          i = t.length,
          o = t.height,
          a = t.color;
        return yn({ x: n, y: r, width: i, height: o, fill: a || 'black' });
      },
      Pn = function(t, e) {
        var n = $e();
        return {
          gradientId: n,
          gradientElement: pn.apply(
            void 0,
            [{ id: n, x1: 0, x2: 0, y1: 0, y2: 1 }].concat(
              (function(t) {
                if (Array.isArray(t)) {
                  for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                  return n;
                }
                return Array.from(t);
              })(
                (e
                  ? function(t) {
                      var e = t;
                      1 === e.length && (e[1] = e[0]);
                      var n = 100 / (e.length - 1);
                      return e.map(function(t, e) {
                        return bn({ offset: e * n + '%', 'stop-color': t });
                      });
                    }
                  : function(t) {
                      for (
                        var e = [], n = t.length, r = 100 / n, i = 0;
                        i < n;
                        i++
                      )
                        e.push(bn({ offset: i * r + '%', 'stop-color': t[i] })),
                          e.push(
                            bn({ offset: i * r + r + '%', 'stop-color': t[i] })
                          );
                      return e;
                    })(t)
              )
            )
          ),
        };
      },
      Dn = 'Expected a function';
    s.Cache = Lt;
    var Wn = s,
      jn = (function() {
        return function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function(t, e) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, l = t[Symbol.iterator]();
                  !(r = (a = l.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  !r && l.return && l.return();
                } finally {
                  if (i) throw o;
                }
              }
              return n;
            })(t, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Fn = void 0;
    window &&
      document &&
      window.getComputedStyle &&
      ((Fn = document.createElement('p')).style.opacity = '0');
    var Hn = /rgba?\((\d+), (\d+), (\d+)/,
      zn = Wn(function(t) {
        if (!Fn) return 'black';
        var e = (function(t) {
          if (!Fn || !document.body) return { r: 255, g: 255, b: 255 };
          (Fn.style.background = t), document.body.appendChild(Fn);
          var e = window.getComputedStyle(Fn).backgroundColor.match(Hn),
            n = jn(e, 4),
            r = n[1],
            i = n[2],
            o = n[3];
          return (
            document.body && document.body.removeChild(Fn),
            { r: +r, g: +i, b: +o }
          );
        })(t);
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 >= 128
          ? 'black'
          : 'white';
      }),
      In = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t ? 'v' + e : 0 === e ? 'h' + t : 'l' + t + ',' + e;
      },
      Rn = function(t) {
        return In(t, 0);
      },
      Bn = function(t) {
        return In(0, t);
      },
      Gn = function(t, e, n, r, i, o, a) {
        return (
          'A' + t + ',' + e + ',' + n + ',' + r + ',' + i + ',' + o + ',' + a
        );
      },
      Vn = function(t, e, n, r) {
        var i = t.start,
          o = t.aliStart,
          a = t.aliEnd,
          l = t.end,
          s = t.startStyle,
          u = t.endStyle,
          c = t.color,
          f = t.text,
          d = t.textColor,
          h = t.gradient,
          p = (function(t) {
            var e = t.start,
              n = t.aliStart,
              r = t.aliEnd,
              i = t.end,
              o = t.residueWidth,
              a = $e();
            return {
              maskId: a,
              maskElement: gn(
                {
                  id: a,
                  x: 0,
                  y: 0,
                  width: (i - e) * o,
                  height: 10,
                  fill: '#fff',
                },
                yn({
                  x: 0,
                  y: 0,
                  width: (n - e) * o,
                  height: 10,
                  opacity: 0.6,
                }),
                yn({
                  x: (n - e) * o,
                  y: 0,
                  width: (r - n) * o,
                  height: 10,
                  opacity: 1,
                }),
                yn({
                  x: (r - e) * o,
                  y: 0,
                  width: (i - r) * o,
                  height: 10,
                  opacity: 0.6,
                })
              ),
            };
          })({
            start: i,
            aliStart: o || i,
            aliEnd: a || l,
            end: l,
            residueWidth: e,
          }),
          v = p.maskId;
        r(p.maskElement);
        var g = c,
          m = {};
        Array.isArray(g) &&
          (r((m = Pn(g, h)).gradientElement),
          (g = 'url(#' + m.gradientId + ')'));
        var y = wn(
          {
            x: (l - i) * e / 2,
            y: 8,
            'text-anchor': 'middle',
            'font-size': 7.5,
            'font-family': 'Sans-Serif',
            fill: d || zn(Array.isArray(c) ? c[0] : c),
            opacity: 0,
          },
          f || ''
        );
        return (
          Ye(y).set('maxwidth', (l - i) * e),
          vn(
            null,
            (function(t) {
              var e = t.start,
                n = t.end,
                r = t.startStyle,
                i = t.endStyle,
                o = t.fill,
                a = t.residueWidth,
                l = t.mask,
                s = t.filter,
                u = (n - e) * a - 10,
                c = new Mn('m5,0')
                  .add(Rn(u))
                  .add(
                    (function(t, e) {
                      switch (t.toLowerCase()) {
                        case 'jagged':
                          return (
                            Rn(5) +
                            In(-2.5, 2.5) +
                            In(2.5, 2.5) +
                            In(-2.5, 2.5) +
                            In(2.5, 2.5) +
                            Rn(-5)
                          );
                        case 'arrow':
                          return In(5, 5) + In(-5, 5);
                        case 'curved':
                          return Gn(5, 5, 0, 0, 1, e + 5, 10);
                        case 'straight':
                        default:
                          return Rn(5) + Bn(10) + Rn(-5);
                      }
                    })(i || '', u)
                  )
                  .add(Rn(-u))
                  .add(
                    (function(t) {
                      switch (t.toLowerCase()) {
                        case 'jagged':
                          return (
                            Rn(-5) +
                            In(2.5, -2.5) +
                            In(-2.5, -2.5) +
                            In(2.5, -2.5) +
                            In(-2.5, -2.5) +
                            Rn(5)
                          );
                        case 'arrow':
                          return In(-5, -5) + In(5, -5);
                        case 'curved':
                          return Gn(5, 5, 0, 0, 1, 5, 0);
                        case 'straight':
                        default:
                          return Rn(-5) + Bn(-10) + Rn(5);
                      }
                    })(r || '')
                  )
                  .close();
              return mn({ d: c, fill: o, mask: l, filter: s });
            })({
              start: i,
              end: l,
              startStyle: s,
              endStyle: u,
              residueWidth: e,
              fill: g,
              mask: 'url(#' + v + ')',
              filter: n && 'url(#' + n + ')',
            }),
            f ? y : null
          )
        );
      },
      Un =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      Kn = function(t, e) {
        var n = t.position,
          r = n.x,
          i = n.y,
          o = t.length,
          a = t.height,
          l = t.color,
          s = t.gradient,
          u = { x: r, y: i, width: o, height: a, opacity: 0.5 };
        if (!Array.isArray(l)) return yn(Un({}, u, { fill: l || 'gray' }));
        var c = Pn(l, s),
          f = c.gradientId;
        return e(c.gradientElement), yn(Un({}, u, { fill: 'url(#' + f + ')' }));
      },
      qn = (function() {
        return function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function(t, e) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, l = t[Symbol.iterator]();
                  !(r = (a = l.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  !r && l.return && l.return();
                } finally {
                  if (i) throw o;
                }
              }
              return n;
            })(t, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      $n = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      Xn = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (window && (e.tooltip || e.metadata || n)) {
          var r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = t.querySelectorAll(':not(g)')[Symbol.iterator]();
              !(r = (a = l.next()).done);
              r = !0
            ) {
              a.value[Xe] = e;
            }
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              !r && l.return && l.return();
            } finally {
              if (i) throw o;
            }
          }
        }
      },
      Yn = (function() {
        function t(e) {
          var n = this,
            r = e.width,
            i = e.height,
            o = e.spotlight,
            a = void 0 === o || o;
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._addToDefs = function(t) {
              return n._defs.appendChild(t);
            }),
            (this.drawMarkup = function(t, e, r) {
              if (t.end && !Number.isFinite(t.level)) {
                var i = new Set([0, 1, -1]),
                  o = !0,
                  a = !1,
                  l = void 0;
                try {
                  for (
                    var s, u = r[Symbol.iterator]();
                    !(o = (s = u.next()).done);
                    o = !0
                  ) {
                    var c = s.value;
                    t.start < c.end && i.delete(c.level);
                  }
                } catch (t) {
                  (a = !0), (l = t);
                } finally {
                  try {
                    !o && u.return && u.return();
                  } finally {
                    if (a) throw l;
                  }
                }
                var f = qn(i, 1)[0];
                t.level = f || 0;
              }
              var d = vn(
                { transform: 'translate(' + t.start * e + ', 10)' },
                An(t, e)
              );
              Ye(d).set('entity', 'markup'), Xn(d, t), n._canvas.appendChild(d);
            }),
            (this.drawSequence = function(t) {
              var e = vn(
                { transform: 'translate(0 10)' },
                Nn({
                  position: { x: 0, y: -2.5 },
                  length: t,
                  height: 5,
                  color: '#d8d8d8',
                })
              );
              Ye(e).set('entity', 'sequence'), n._canvas.appendChild(e);
            }),
            (this.drawHit = function(t, e) {
              var r = vn(
                { transform: 'translate(' + t.tstart * e + ', 16)' },
                En({
                  position: { x: 0, y: 0 },
                  length: (t.tend - t.tstart) * e,
                  height: 2,
                  color: t.color,
                })
              );
              Ye(r).set('entity', 'hit'),
                Xn(r, t, !0),
                n._canvas.appendChild(r);
            }),
            (this.drawRegion = function(t, e) {
              var r = vn(
                { transform: 'translate(' + t.start * e + ', 5)' },
                Vn(t, e, n._spotlight, n._addToDefs)
              );
              Ye(r).set('entity', 'region'), Xn(r, t), n._canvas.appendChild(r);
              var i = r.querySelector('[data-maxwidth]');
              i &&
                (i.getBBox().width <= +(Ye(i).get('maxwidth') - 0)
                  ? i.setAttribute('opacity', 1)
                  : i.parentElement && i.parentElement.removeChild(i));
            }),
            (this.drawMotif = function(t, e) {
              var r = vn(
                { transform: 'translate(' + t.start * e + ', 6)' },
                Kn(
                  {
                    position: { x: 0, y: 0 },
                    length: (t.end - t.start) * e,
                    height: 8,
                    color: t.color,
                    gradient: t.gradient,
                  },
                  n._addToDefs
                )
              );
              Ye(r).set('entity', 'motif'), Xn(r, t), n._canvas.appendChild(r);
            }),
            (this._spotlight = a && $e()),
            (this._defs = hn(
              null,
              this._spotlight &&
                xn(
                  {
                    id: this._spotlight,
                    filterUnits: 'objectBoundingBox',
                    x: -0.1,
                    y: -0.1,
                    width: 5,
                    height: 5,
                  },
                  Sn({
                    in: 'SourceAlpha',
                    stdDeviation: 1,
                    result: 'alpha_blur',
                  }),
                  Cn(
                    {
                      in: 'alpha_blur',
                      surfaceScale: 5,
                      specularConstant: 1.5,
                      specularExponent: 12,
                      'lighting-color': '#ddd',
                      result: 'light',
                    },
                    kn({ x: -100, y: -200, z: 100 })
                  ),
                  Ln({ in: 'SourceGraphic', in2: 'light', operator: 'out' })
                )
            )),
            (this._canvas = fn(
              { width: r, height: i, viewBox: '0 0 ' + r + ' ' + i },
              this._defs
            )),
            (this._canvas.style.width = 2 * r + 'px'),
            (this._canvas.style.height = 2 * i + 'px');
        }
        return (
          $n(t, [
            {
              key: 'canvas',
              get: function() {
                return this._canvas;
              },
            },
          ]),
          t
        );
      })(),
      Zn = function() {
        return {
          image: {
            headSize: {
              circle: 3,
              square: 5,
              diamond: 4,
              arrow: 3,
              pointer: 3,
              line: 3,
            },
            sequenceEndPadding: 2,
            offset: { x: 0, y: 0 },
            increment: {
              lollipopToLollipop: 7,
              bridgeToBridge: 2,
              bridgeToLollipop: 5,
            },
            largeJaggedSteps: 6,
            fontSize: '10px',
            height: { markup: 20, region: 20, motif: 14 },
            opacity: { motif: 0.6, env: 0.6 },
            labelPadding: 3,
            width: { residue: 0.5 },
            scale: { x: 1, y: 1 },
            highlight: { weight: 1, color: '#000' },
          },
          options: {
            baseUrl: '',
            imageMap: !0,
            labels: !0,
            tips: !0,
            tipStyle: 'pfam',
            newCanvas: !0,
          },
        };
      },
      Jn =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      Qn = new Set([
        'start',
        'end',
        'aliStart',
        'aliEnd',
        'modelStart',
        'modelEnd',
        'length',
        'level',
        'tStart',
        'tEnd',
        'qStart',
        'qEnd',
        'tstart',
        'tend',
        'qstart',
        'qend',
      ]),
      tr = /(^.*colo)u(r.*$)/i,
      er = /^f(alse)?$/i,
      nr = function t(e) {
        var n = {},
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, l = Object.keys(e)[Symbol.iterator]();
            !(r = (a = l.next()).done);
            r = !0
          ) {
            var s = a.value,
              u = e[s],
              c = s,
              f = u;
            if (Qn.has(c) && ((f = +f), isNaN(f)))
              throw new Error(
                'expected key ' + s + ' to be a number, not ' + String(u) + ')'
              );
            tr.test(c) && (c = c.replace(tr, '$1$2')),
              'display' === c && (f = 'string' == typeof f ? !er.test(f) : !!f),
              f &&
                (Array.isArray(f)
                  ? (f = f.map(function(e) {
                      return e &&
                        'object' === (void 0 === e ? 'undefined' : Jn(e))
                        ? t(e)
                        : e;
                    }))
                  : 'object' === (void 0 === f ? 'undefined' : Jn(f)) &&
                    (f = t(f))),
              (n[c] = f);
          }
        } catch (t) {
          (i = !0), (o = t);
        } finally {
          try {
            !r && l.return && l.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      },
      rr = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      ir = function(t) {
        var e = t.hidden,
          n = t.display;
        return e || !(void 0 === n || n);
      },
      or = (function() {
        function t() {
          var e = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = n.data,
            i = void 0 === r ? {} : r,
            o = n.parent,
            a = n.params,
            l = void 0 === a ? {} : a;
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this._draw = function() {
              var t = (e._data.markups || []).sort(function(t, e) {
                  return t.start - e.start;
                }),
                n = [],
                r = !1,
                i = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var l, s = t[Symbol.iterator]();
                  !(i = (l = s.next()).done);
                  i = !0
                ) {
                  var u = l.value;
                  ir(u) ||
                    (e._renderer.drawMarkup(
                      u,
                      e._params.image.width.residue,
                      n
                    ),
                    (r |= !(!u.tooltip && !u.metadata)),
                    u.end && n.push(u));
                }
              } catch (t) {
                (o = !0), (a = t);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (o) throw a;
                }
              }
              e._renderer.drawSequence(
                e._data.length * e._params.image.width.residue
              );
              var c = !0,
                f = !1,
                d = void 0;
              try {
                for (
                  var h, p = (e._data.hits || [])[Symbol.iterator]();
                  !(c = (h = p.next()).done);
                  c = !0
                ) {
                  var v = h.value;
                  ir(v) ||
                    (e._renderer.drawHit(v, e._params.image.width.residue),
                    (r = !0));
                }
              } catch (t) {
                (f = !0), (d = t);
              } finally {
                try {
                  !c && p.return && p.return();
                } finally {
                  if (f) throw d;
                }
              }
              var g = !0,
                m = !1,
                y = void 0;
              try {
                for (
                  var b, w = (e._data.regions || [])[Symbol.iterator]();
                  !(g = (b = w.next()).done);
                  g = !0
                ) {
                  var x = b.value;
                  ir(x) ||
                    (e._renderer.drawRegion(x, e._params.image.width.residue),
                    (r |= !(!x.tooltip && !x.metadata)));
                }
              } catch (t) {
                (m = !0), (y = t);
              } finally {
                try {
                  !g && w.return && w.return();
                } finally {
                  if (m) throw y;
                }
              }
              var S = !0,
                C = !1,
                k = void 0;
              try {
                for (
                  var L, T = (e._data.motifs || [])[Symbol.iterator]();
                  !(S = (L = T.next()).done);
                  S = !0
                ) {
                  var M = L.value;
                  ir(M) ||
                    (e._renderer.drawMotif(M, e._params.image.width.residue),
                    (r |= !(!M.tooltip && !M.metadata)));
                }
              } catch (t) {
                (C = !0), (k = t);
              } finally {
                try {
                  !S && T.return && T.return();
                } finally {
                  if (C) throw k;
                }
              }
              r && (e._detach = un().attachToCanvas(e._renderer.canvas));
            }),
            (this._createCanvas = function() {
              return (
                (e._renderer = new Yn({
                  width: e._computeWidth(e._data, e._params),
                  height: e._computeHeight(),
                })),
                e._renderer.canvas
              );
            }),
            (this.delete = function() {
              e._detach && (e._detach(), (e._detach = null)),
                e._parent.removeChild(e._canvas),
                (e._canvas = e._parent = null);
            }),
            (this._data = nr(i)),
            (this._parent = o),
            (this._params = Ke({}, Zn(), l)),
            (this._canvas = this._createCanvas()),
            this._parent.appendChild(this._canvas),
            this._draw();
        }
        return (
          rr(t, [
            {
              key: '_computeWidth',
              value: function(t, e) {
                var n = t.length,
                  r = void 0 === n ? 0 : n,
                  i = e.image,
                  o = i.width,
                  a = i.sequenceEndPadding;
                return r * o.residue + a;
              },
            },
            {
              key: '_computeHeight',
              value: function() {
                return 20;
              },
            },
            {
              key: 'data',
              get: function() {
                return this._data;
              },
              set: function(t) {
                this._data = nr(t);
                var e = this._canvas;
                return (
                  (this._canvas = this._createCanvas()),
                  this._parent.replaceChild(this._canvas, e),
                  this._draw(),
                  this._data
                );
              },
            },
          ]),
          t
        );
      })(),
      ar = or;
    try {
      document.dispatchEvent(new CustomEvent('domainGfxReady', { detail: or }));
    } catch (t) {}
    var lr = function() {
        return L.a.Date.now();
      },
      sr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            },
      ur = '[object Symbol]',
      cr = function(t) {
        return (
          'symbol' == (void 0 === t ? 'undefined' : sr(t)) ||
          (Ut(t) && F(t) == ur)
        );
      },
      fr = NaN,
      dr = /^\s+|\s+$/g,
      hr = /^[-+]0x[0-9a-f]+$/i,
      pr = /^0b[01]+$/i,
      vr = /^0o[0-7]+$/i,
      gr = parseInt,
      mr = function(t) {
        if ('number' == typeof t) return t;
        if (cr(t)) return fr;
        if (z(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = z(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(dr, '');
        var n = pr.test(t);
        return n || vr.test(t)
          ? gr(t.slice(2), n ? 2 : 8)
          : hr.test(t) ? fr : +t;
      },
      yr = 'Expected a function',
      br = Math.max,
      wr = Math.min,
      xr = u,
      Sr = n(85),
      Cr = n.n(Sr),
      kr = document.querySelector('.data textarea'),
      Lr = document.querySelector('.visu'),
      Tr = document.querySelector('.invalid'),
      Mr = void 0,
      Or = function(t) {
        var e = t.getValue(),
          n = void 0;
        try {
          n = JSON.parse(e);
        } catch (t) {
          return Tr.classList.remove('hidden'), void console.error(t);
        }
        Mr ? (Mr.data = n) : (Mr = new ar({ parent: Lr, data: n })),
          Tr.classList.add('hidden');
      };
    kr.value = JSON.stringify(Cr.a, null, 2);
    var _r = f.a.fromTextArea(kr, { lineNumbers: !0 });
    _r.on('change', xr(Or, 1e3)), Or(_r);
  },
  function(t, e, n) {
    'use strict';
    var r = n(0),
      i = n(2),
      o = n(3),
      a = n(14),
      l = n(9),
      s = n(21).KEY,
      u = n(11),
      c = n(22),
      f = n(18),
      d = n(12),
      h = n(1),
      p = n(33),
      v = n(52),
      g = n(53),
      m = n(57),
      y = n(7),
      b = n(10),
      w = n(20),
      x = n(16),
      S = n(28),
      C = n(60),
      k = n(40),
      L = n(4),
      T = n(19),
      M = k.f,
      O = L.f,
      _ = C.f,
      A = r.Symbol,
      N = r.JSON,
      E = N && N.stringify,
      P = h('_hidden'),
      D = h('toPrimitive'),
      W = {}.propertyIsEnumerable,
      j = c('symbol-registry'),
      F = c('symbols'),
      H = c('op-symbols'),
      z = Object.prototype,
      I = 'function' == typeof A,
      R = r.QObject,
      B = !R || !R.prototype || !R.prototype.findChild,
      G =
        o &&
        u(function() {
          return (
            7 !=
            S(
              O({}, 'a', {
                get: function() {
                  return O(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function(t, e, n) {
              var r = M(z, e);
              r && delete z[e], O(t, e, n), r && t !== z && O(z, e, r);
            }
          : O,
      V = function(t) {
        var e = (F[t] = S(A.prototype));
        return (e._k = t), e;
      },
      U =
        I && 'symbol' == typeof A.iterator
          ? function(t) {
              return 'symbol' == typeof t;
            }
          : function(t) {
              return t instanceof A;
            },
      K = function(t, e, n) {
        return (
          t === z && K(H, e, n),
          y(t),
          (e = w(e, !0)),
          y(n),
          i(F, e)
            ? (n.enumerable
                ? (i(t, P) && t[P][e] && (t[P][e] = !1),
                  (n = S(n, { enumerable: x(0, !1) })))
                : (i(t, P) || O(t, P, x(1, {})), (t[P][e] = !0)),
              G(t, e, n))
            : O(t, e, n)
        );
      },
      q = function(t, e) {
        y(t);
        for (var n, r = g((e = b(e))), i = 0, o = r.length; o > i; )
          K(t, (n = r[i++]), e[n]);
        return t;
      },
      $ = function(t) {
        var e = W.call(this, (t = w(t, !0)));
        return (
          !(this === z && i(F, t) && !i(H, t)) &&
          (!(e || !i(this, t) || !i(F, t) || (i(this, P) && this[P][t])) || e)
        );
      },
      X = function(t, e) {
        if (((t = b(t)), (e = w(e, !0)), t !== z || !i(F, e) || i(H, e))) {
          var n = M(t, e);
          return (
            !n || !i(F, e) || (i(t, P) && t[P][e]) || (n.enumerable = !0), n
          );
        }
      },
      Y = function(t) {
        for (var e, n = _(b(t)), r = [], o = 0; n.length > o; )
          i(F, (e = n[o++])) || e == P || e == s || r.push(e);
        return r;
      },
      Z = function(t) {
        for (
          var e, n = t === z, r = _(n ? H : b(t)), o = [], a = 0;
          r.length > a;

        )
          !i(F, (e = r[a++])) || (n && !i(z, e)) || o.push(F[e]);
        return o;
      };
    I ||
      (l(
        (A = function() {
          if (this instanceof A)
            throw TypeError('Symbol is not a constructor!');
          var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
              this === z && e.call(H, n),
                i(this, P) && i(this[P], t) && (this[P][t] = !1),
                G(this, t, x(1, n));
            };
          return o && B && G(z, t, { configurable: !0, set: e }), V(t);
        }).prototype,
        'toString',
        function() {
          return this._k;
        }
      ),
      (k.f = X),
      (L.f = K),
      (n(39).f = C.f = Y),
      (n(27).f = $),
      (n(38).f = Z),
      o && !n(23) && l(z, 'propertyIsEnumerable', $, !0),
      (p.f = function(t) {
        return V(h(t));
      })),
      a(a.G + a.W + a.F * !I, { Symbol: A });
    for (
      var J = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
          ','
        ),
        Q = 0;
      J.length > Q;

    )
      h(J[Q++]);
    for (var tt = T(h.store), et = 0; tt.length > et; ) v(tt[et++]);
    a(a.S + a.F * !I, 'Symbol', {
      for: function(t) {
        return i(j, (t += '')) ? j[t] : (j[t] = A(t));
      },
      keyFor: function(t) {
        if (!U(t)) throw TypeError(t + ' is not a symbol!');
        for (var e in j) if (j[e] === t) return e;
      },
      useSetter: function() {
        B = !0;
      },
      useSimple: function() {
        B = !1;
      },
    }),
      a(a.S + a.F * !I, 'Object', {
        create: function(t, e) {
          return void 0 === e ? S(t) : q(S(t), e);
        },
        defineProperty: K,
        defineProperties: q,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Y,
        getOwnPropertySymbols: Z,
      }),
      N &&
        a(
          a.S +
            a.F *
              (!I ||
                u(function() {
                  var t = A();
                  return (
                    '[null]' != E([t]) ||
                    '{}' != E({ a: t }) ||
                    '{}' != E(Object(t))
                  );
                })),
          'JSON',
          {
            stringify: function(t) {
              if (void 0 !== t && !U(t)) {
                for (var e, n, r = [t], i = 1; arguments.length > i; )
                  r.push(arguments[i++]);
                return (
                  'function' == typeof (e = r[1]) && (n = e),
                  (!n && m(e)) ||
                    (e = function(t, e) {
                      if ((n && (e = n.call(this, t, e)), !U(e))) return e;
                    }),
                  (r[1] = e),
                  E.apply(N, r)
                );
              }
            },
          }
        ),
      A.prototype[D] || n(6)(A.prototype, D, A.prototype.valueOf),
      f(A, 'Symbol'),
      f(Math, 'Math', !0),
      f(r.JSON, 'JSON', !0);
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(0),
      i = n(15),
      o = n(23),
      a = n(33),
      l = n(4).f;
    t.exports = function(t) {
      var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      '_' == t.charAt(0) || t in e || l(e, t, { value: a.f(t) });
    };
  },
  function(t, e, n) {
    var r = n(19),
      i = n(38),
      o = n(27);
    t.exports = function(t) {
      var e = r(t),
        n = i.f;
      if (n)
        for (var a, l = n(t), s = o.f, u = 0; l.length > u; )
          s.call(t, (a = l[u++])) && e.push(a);
      return e;
    };
  },
  function(t, e, n) {
    var r = n(24);
    t.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return 'String' == r(t) ? t.split('') : Object(t);
        };
  },
  function(t, e, n) {
    var r = n(10),
      i = n(36),
      o = n(56);
    t.exports = function(t) {
      return function(e, n, a) {
        var l,
          s = r(e),
          u = i(s.length),
          c = o(a, u);
        if (t && n != n) {
          for (; u > c; ) if ((l = s[c++]) != l) return !0;
        } else
          for (; u > c; c++)
            if ((t || c in s) && s[c] === n) return t || c || 0;
        return !t && -1;
      };
    };
  },
  function(t, e, n) {
    var r = n(37),
      i = Math.max,
      o = Math.min;
    t.exports = function(t, e) {
      return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  },
  function(t, e, n) {
    var r = n(24);
    t.exports =
      Array.isArray ||
      function(t) {
        return 'Array' == r(t);
      };
  },
  function(t, e, n) {
    var r = n(4),
      i = n(7),
      o = n(19);
    t.exports = n(3)
      ? Object.defineProperties
      : function(t, e) {
          i(t);
          for (var n, a = o(e), l = a.length, s = 0; l > s; )
            r.f(t, (n = a[s++]), e[n]);
          return t;
        };
  },
  function(t, e, n) {
    var r = n(0).document;
    t.exports = r && r.documentElement;
  },
  function(t, e, n) {
    var r = n(10),
      i = n(39).f,
      o = {}.toString,
      a =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function(t) {
      return a && '[object Window]' == o.call(t)
        ? (function(t) {
            try {
              return i(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : i(r(t));
    };
  },
  function(t, e, n) {
    for (
      var r = n(62),
        i = n(19),
        o = n(9),
        a = n(0),
        l = n(6),
        s = n(13),
        u = n(1),
        c = u('iterator'),
        f = u('toStringTag'),
        d = s.Array,
        h = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        p = i(h),
        v = 0;
      v < p.length;
      v++
    ) {
      var g,
        m = p[v],
        y = h[m],
        b = a[m],
        w = b && b.prototype;
      if (w && (w[c] || l(w, c, d), w[f] || l(w, f, m), (s[m] = d), y))
        for (g in r) w[g] || o(w, g, r[g], !0);
    }
  },
  function(t, e, n) {
    'use strict';
    var r = n(63),
      i = n(41),
      o = n(13),
      a = n(10);
    (t.exports = n(42)(
      Array,
      'Array',
      function(t, e) {
        (this._t = a(t)), (this._i = 0), (this._k = e);
      },
      function() {
        var t = this._t,
          e = this._k,
          n = this._i++;
        return !t || n >= t.length
          ? ((this._t = void 0), i(1))
          : 'keys' == e
            ? i(0, n)
            : 'values' == e ? i(0, t[n]) : i(0, [n, t[n]]);
      },
      'values'
    )),
      (o.Arguments = o.Array),
      r('keys'),
      r('values'),
      r('entries');
  },
  function(t, e, n) {
    var r = n(1)('unscopables'),
      i = Array.prototype;
    void 0 == i[r] && n(6)(i, r, {}),
      (t.exports = function(t) {
        i[r][t] = !0;
      });
  },
  function(t, e, n) {
    'use strict';
    var r = n(28),
      i = n(16),
      o = n(18),
      a = {};
    n(6)(a, n(1)('iterator'), function() {
      return this;
    }),
      (t.exports = function(t, e, n) {
        (t.prototype = r(a, { next: i(1, n) })), o(t, e + ' Iterator');
      });
  },
  function(t, e, n) {
    var r = n(2),
      i = n(66),
      o = n(25)('IE_PROTO'),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function(t) {
        return (
          (t = i(t)),
          r(t, o)
            ? t[o]
            : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object ? a : null
        );
      };
  },
  function(t, e, n) {
    var r = n(35);
    t.exports = function(t) {
      return Object(r(t));
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(68),
      i = n(46);
    t.exports = n(74)(
      'Set',
      function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(t) {
          return r.def(i(this, 'Set'), (t = 0 === t ? 0 : t), t);
        },
      },
      r
    );
  },
  function(t, e, n) {
    'use strict';
    var r = n(4).f,
      i = n(28),
      o = n(43),
      a = n(17),
      l = n(44),
      s = n(45),
      u = n(42),
      c = n(41),
      f = n(73),
      d = n(3),
      h = n(21).fastKey,
      p = n(46),
      v = d ? '_s' : 'size',
      g = function(t, e) {
        var n,
          r = h(e);
        if ('F' !== r) return t._i[r];
        for (n = t._f; n; n = n.n) if (n.k == e) return n;
      };
    t.exports = {
      getConstructor: function(t, e, n, u) {
        var c = t(function(t, r) {
          l(t, c, e, '_i'),
            (t._t = e),
            (t._i = i(null)),
            (t._f = void 0),
            (t._l = void 0),
            (t[v] = 0),
            void 0 != r && s(r, n, t[u], t);
        });
        return (
          o(c.prototype, {
            clear: function() {
              for (var t = p(this, e), n = t._i, r = t._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
              (t._f = t._l = void 0), (t[v] = 0);
            },
            delete: function(t) {
              var n = p(this, e),
                r = g(n, t);
              if (r) {
                var i = r.n,
                  o = r.p;
                delete n._i[r.i],
                  (r.r = !0),
                  o && (o.n = i),
                  i && (i.p = o),
                  n._f == r && (n._f = i),
                  n._l == r && (n._l = o),
                  n[v]--;
              }
              return !!r;
            },
            forEach: function(t) {
              p(this, e);
              for (
                var n,
                  r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has: function(t) {
              return !!g(p(this, e), t);
            },
          }),
          d &&
            r(c.prototype, 'size', {
              get: function() {
                return p(this, e)[v];
              },
            }),
          c
        );
      },
      def: function(t, e, n) {
        var r,
          i,
          o = g(t, e);
        return (
          o
            ? (o.v = n)
            : ((t._l = o = {
                i: (i = h(e, !0)),
                k: e,
                v: n,
                p: (r = t._l),
                n: void 0,
                r: !1,
              }),
              t._f || (t._f = o),
              r && (r.n = o),
              t[v]++,
              'F' !== i && (t._i[i] = o)),
          t
        );
      },
      getEntry: g,
      setStrong: function(t, e, n) {
        u(
          t,
          e,
          function(t, n) {
            (this._t = p(t, e)), (this._k = n), (this._l = void 0);
          },
          function() {
            for (var t = this, e = t._k, n = t._l; n && n.r; ) n = n.p;
            return t._t && (t._l = n = n ? n.n : t._t._f)
              ? 'keys' == e
                ? c(0, n.k)
                : 'values' == e ? c(0, n.v) : c(0, [n.k, n.v])
              : ((t._t = void 0), c(1));
          },
          n ? 'entries' : 'values',
          !n,
          !0
        ),
          f(e);
      },
    };
  },
  function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && r(o.call(t)), e);
      }
    };
  },
  function(t, e, n) {
    var r = n(13),
      i = n(1)('iterator'),
      o = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (r.Array === t || o[i] === t);
    };
  },
  function(t, e, n) {
    var r = n(72),
      i = n(1)('iterator'),
      o = n(13);
    t.exports = n(15).getIteratorMethod = function(t) {
      if (void 0 != t) return t[i] || t['@@iterator'] || o[r(t)];
    };
  },
  function(t, e, n) {
    var r = n(24),
      i = n(1)('toStringTag'),
      o =
        'Arguments' ==
        r(
          (function() {
            return arguments;
          })()
        );
    t.exports = function(t) {
      var e, n, a;
      return void 0 === t
        ? 'Undefined'
        : null === t
          ? 'Null'
          : 'string' ==
            typeof (n = (function(t, e) {
              try {
                return t[e];
              } catch (t) {}
            })((e = Object(t)), i))
            ? n
            : o
              ? r(e)
              : 'Object' == (a = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : a;
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(0),
      i = n(4),
      o = n(3),
      a = n(1)('species');
    t.exports = function(t) {
      var e = r[t];
      o &&
        e &&
        !e[a] &&
        i.f(e, a, {
          configurable: !0,
          get: function() {
            return this;
          },
        });
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(0),
      i = n(14),
      o = n(9),
      a = n(43),
      l = n(21),
      s = n(45),
      u = n(44),
      c = n(5),
      f = n(11),
      d = n(75),
      h = n(18),
      p = n(76);
    t.exports = function(t, e, n, v, g, m) {
      var y = r[t],
        b = y,
        w = g ? 'set' : 'add',
        x = b && b.prototype,
        S = {},
        C = function(t) {
          var e = x[t];
          o(
            x,
            t,
            'delete' == t
              ? function(t) {
                  return !(m && !c(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : 'has' == t
                ? function(t) {
                    return !(m && !c(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : 'get' == t
                  ? function(t) {
                      return m && !c(t)
                        ? void 0
                        : e.call(this, 0 === t ? 0 : t);
                    }
                  : 'add' == t
                    ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this;
                      }
                    : function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this;
                      }
          );
        };
      if (
        'function' == typeof b &&
        (m ||
          (x.forEach &&
            !f(function() {
              new b().entries().next();
            })))
      ) {
        var k = new b(),
          L = k[w](m ? {} : -0, 1) != k,
          T = f(function() {
            k.has(1);
          }),
          M = d(function(t) {
            new b(t);
          }),
          O =
            !m &&
            f(function() {
              for (var t = new b(), e = 5; e--; ) t[w](e, e);
              return !t.has(-0);
            });
        M ||
          (((b = e(function(e, n) {
            u(e, b, t);
            var r = p(new y(), e, b);
            return void 0 != n && s(n, g, r[w], r), r;
          })).prototype = x),
          (x.constructor = b)),
          (T || O) && (C('delete'), C('has'), g && C('get')),
          (O || L) && C(w),
          m && x.clear && delete x.clear;
      } else
        (b = v.getConstructor(e, t, g, w)), a(b.prototype, n), (l.NEED = !0);
      return (
        h(b, t),
        (S[t] = b),
        i(i.G + i.W + i.F * (b != y), S),
        m || v.setStrong(b, t, g),
        b
      );
    };
  },
  function(t, e, n) {
    var r = n(1)('iterator'),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function() {
        i = !0;
      }),
        Array.from(o, function() {
          throw 2;
        });
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          a = o[r]();
        (a.next = function() {
          return { done: (n = !0) };
        }),
          (o[r] = function() {
            return a;
          }),
          t(o);
      } catch (t) {}
      return n;
    };
  },
  function(t, e, n) {
    var r = n(5),
      i = n(77).set;
    t.exports = function(t, e, n) {
      var o,
        a = e.constructor;
      return (
        a !== n &&
          'function' == typeof a &&
          (o = a.prototype) !== n.prototype &&
          r(o) &&
          i &&
          i(t, o),
        t
      );
    };
  },
  function(t, e, n) {
    var r = n(5),
      i = n(7),
      o = function(t, e) {
        if ((i(t), !r(e) && null !== e))
          throw TypeError(e + ": can't set as prototype!");
      };
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function(t, e, r) {
              try {
                (r = n(17)(
                  Function.call,
                  n(40).f(Object.prototype, '__proto__').set,
                  2
                ))(t, []),
                  (e = !(t instanceof Array));
              } catch (t) {
                e = !0;
              }
              return function(t, n) {
                return o(t, n), e ? (t.__proto__ = n) : r(t, n), t;
              };
            })({}, !1)
          : void 0),
      check: o,
    };
  },
  function(t, e, n) {
    var r = n(14),
      i = n(0).isFinite;
    r(r.S, 'Number', {
      isFinite: function(t) {
        return 'number' == typeof t && i(t);
      },
    });
  },
  function(t, e, n) {
    (function(t) {
      var r,
        i,
        o,
        a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              };
      !(function(l) {
        'object' == a(e) && 'object' == a(t)
          ? l(n(29))
          : ((i = [n(29)]),
            void 0 !== (o = 'function' == typeof (r = l) ? r.apply(e, i) : r) &&
              (t.exports = o));
      })(function(t) {
        'use strict';
        t.defineMode('javascript', function(e, n) {
          function r(t, e, n) {
            return (bt = t), (wt = n), e;
          }
          function i(t, e) {
            var n = t.next();
            if ('"' == n || "'" == n)
              return (
                (e.tokenize = (function(t) {
                  return function(e, n) {
                    var o,
                      a = !1;
                    if (Ct && '@' == e.peek() && e.match(_t))
                      return (n.tokenize = i), r('jsonld-keyword', 'meta');
                    for (; null != (o = e.next()) && (o != t || a); )
                      a = !a && '\\' == o;
                    return a || (n.tokenize = i), r('string', 'string');
                  };
                })(n)),
                e.tokenize(t, e)
              );
            if ('.' == n && t.match(/^\d+(?:[eE][+\-]?\d+)?/))
              return r('number', 'number');
            if ('.' == n && t.match('..')) return r('spread', 'meta');
            if (/[\[\]{}\(\),;\:\.]/.test(n)) return r(n);
            if ('=' == n && t.eat('>')) return r('=>', 'operator');
            if ('0' == n && t.eat(/x/i))
              return t.eatWhile(/[\da-f]/i), r('number', 'number');
            if ('0' == n && t.eat(/o/i))
              return t.eatWhile(/[0-7]/i), r('number', 'number');
            if ('0' == n && t.eat(/b/i))
              return t.eatWhile(/[01]/i), r('number', 'number');
            if (/\d/.test(n))
              return (
                t.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
                r('number', 'number')
              );
            if ('/' == n)
              return t.eat('*')
                ? ((e.tokenize = o), o(t, e))
                : t.eat('/')
                  ? (t.skipToEnd(), r('comment', 'comment'))
                  : yt(t, e, 1)
                    ? ((function(t) {
                        for (var e, n = !1, r = !1; null != (e = t.next()); ) {
                          if (!n) {
                            if ('/' == e && !r) return;
                            '[' == e ? (r = !0) : r && ']' == e && (r = !1);
                          }
                          n = !n && '\\' == e;
                        }
                      })(t),
                      t.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                      r('regexp', 'string-2'))
                    : (t.eat('='), r('operator', 'operator', t.current()));
            if ('`' == n) return (e.tokenize = l), l(t, e);
            if ('#' == n) return t.skipToEnd(), r('error', 'error');
            if (Ot.test(n))
              return (
                ('>' == n && e.lexical && '>' == e.lexical.type) ||
                  (t.eat('=')
                    ? ('!' != n && '=' != n) || t.eat('=')
                    : /[<>*+\-]/.test(n) && (t.eat(n), '>' == n && t.eat(n))),
                r('operator', 'operator', t.current())
              );
            if (Tt.test(n)) {
              t.eatWhile(Tt);
              var a = t.current();
              if ('.' != e.lastType) {
                if (Mt.propertyIsEnumerable(a)) {
                  var s = Mt[a];
                  return r(s.type, s.style, a);
                }
                if ('async' == a && t.match(/^\s*[\(\w]/, !1))
                  return r('async', 'keyword', a);
              }
              return r('variable', 'variable', a);
            }
          }
          function o(t, e) {
            for (var n, o = !1; (n = t.next()); ) {
              if ('/' == n && o) {
                e.tokenize = i;
                break;
              }
              o = '*' == n;
            }
            return r('comment', 'comment');
          }
          function l(t, e) {
            for (var n, o = !1; null != (n = t.next()); ) {
              if (!o && ('`' == n || ('$' == n && t.eat('{')))) {
                e.tokenize = i;
                break;
              }
              o = !o && '\\' == n;
            }
            return r('quasi', 'string-2', t.current());
          }
          function s(t, e) {
            e.fatArrowAt && (e.fatArrowAt = null);
            var n = t.string.indexOf('=>', t.start);
            if (!(n < 0)) {
              if (Lt) {
                var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                  t.string.slice(t.start, n)
                );
                r && (n = r.index);
              }
              for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                var l = t.string.charAt(a),
                  s = At.indexOf(l);
                if (s >= 0 && s < 3) {
                  if (!i) {
                    ++a;
                    break;
                  }
                  if (0 == --i) {
                    '(' == l && (o = !0);
                    break;
                  }
                } else if (s >= 3 && s < 6) ++i;
                else if (Tt.test(l)) o = !0;
                else {
                  if (/["'\/]/.test(l)) return;
                  if (o && !i) {
                    ++a;
                    break;
                  }
                }
              }
              o && !i && (e.fatArrowAt = a);
            }
          }
          function u(t, e, n, r, i, o) {
            (this.indented = t),
              (this.column = e),
              (this.type = n),
              (this.prev = i),
              (this.info = o),
              null != r && (this.align = r);
          }
          function c(t, e) {
            for (r = t.localVars; r; r = r.next) if (r.name == e) return !0;
            for (var n = t.context; n; n = n.prev)
              for (var r = n.vars; r; r = r.next) if (r.name == e) return !0;
          }
          function f() {
            for (var t = arguments.length - 1; t >= 0; t--)
              Et.cc.push(arguments[t]);
          }
          function d() {
            return f.apply(null, arguments), !0;
          }
          function h(t) {
            function e(e) {
              for (var n = e; n; n = n.next) if (n.name == t) return !0;
              return !1;
            }
            var r = Et.state;
            if (((Et.marked = 'def'), r.context)) {
              if (e(r.localVars)) return;
              r.localVars = { name: t, next: r.localVars };
            } else {
              if (e(r.globalVars)) return;
              n.globalVars && (r.globalVars = { name: t, next: r.globalVars });
            }
          }
          function p() {
            (Et.state.context = {
              prev: Et.state.context,
              vars: Et.state.localVars,
            }),
              (Et.state.localVars = Pt);
          }
          function v() {
            (Et.state.localVars = Et.state.context.vars),
              (Et.state.context = Et.state.context.prev);
          }
          function g(t, e) {
            var n = function() {
              var n = Et.state,
                r = n.indented;
              if ('stat' == n.lexical.type) r = n.lexical.indented;
              else
                for (
                  var i = n.lexical;
                  i && ')' == i.type && i.align;
                  i = i.prev
                )
                  r = i.indented;
              n.lexical = new u(r, Et.stream.column(), t, null, n.lexical, e);
            };
            return (n.lex = !0), n;
          }
          function m() {
            var t = Et.state;
            t.lexical.prev &&
              (')' == t.lexical.type && (t.indented = t.lexical.indented),
              (t.lexical = t.lexical.prev));
          }
          function y(t) {
            function e(n) {
              return n == t ? d() : ';' == t ? f() : d(e);
            }
            return e;
          }
          function b(t, e) {
            return 'var' == t
              ? d(g('vardef', e.length), K, y(';'), m)
              : 'keyword a' == t
                ? d(g('form'), S, b, m)
                : 'keyword b' == t
                  ? d(g('form'), b, m)
                  : 'keyword d' == t
                    ? Et.stream.match(/^\s*$/, !1)
                      ? d()
                      : d(g('stat'), k, y(';'), m)
                    : 'debugger' == t
                      ? d(y(';'))
                      : '{' == t
                        ? d(g('}'), H, m)
                        : ';' == t
                          ? d()
                          : 'if' == t
                            ? ('else' == Et.state.lexical.info &&
                                Et.state.cc[Et.state.cc.length - 1] == m &&
                                Et.state.cc.pop()(),
                              d(g('form'), S, b, m, Z))
                            : 'function' == t
                              ? d(rt)
                              : 'for' == t
                                ? d(g('form'), J, b, m)
                                : 'variable' == t
                                  ? Lt && 'type' == e
                                    ? ((Et.marked = 'keyword'),
                                      d(I, y('operator'), I, y(';')))
                                    : Lt && 'declare' == e
                                      ? ((Et.marked = 'keyword'), d(b))
                                      : d(g('stat'), N)
                                  : 'switch' == t
                                    ? d(
                                        g('form'),
                                        S,
                                        y('{'),
                                        g('}', 'switch'),
                                        H,
                                        m,
                                        m
                                      )
                                    : 'case' == t
                                      ? d(w, y(':'))
                                      : 'default' == t
                                        ? d(y(':'))
                                        : 'catch' == t
                                          ? d(
                                              g('form'),
                                              p,
                                              y('('),
                                              it,
                                              y(')'),
                                              b,
                                              m,
                                              v
                                            )
                                          : 'class' == t
                                            ? d(g('form'), at, m)
                                            : 'export' == t
                                              ? d(g('stat'), ct, m)
                                              : 'import' == t
                                                ? d(g('stat'), dt, m)
                                                : 'module' == t
                                                  ? d(
                                                      g('form'),
                                                      q,
                                                      y('{'),
                                                      g('}'),
                                                      H,
                                                      m,
                                                      m
                                                    )
                                                  : 'async' == t
                                                    ? d(b)
                                                    : '@' == e
                                                      ? d(w, b)
                                                      : f(
                                                          g('stat'),
                                                          w,
                                                          y(';'),
                                                          m
                                                        );
          }
          function w(t) {
            return C(t, !1);
          }
          function x(t) {
            return C(t, !0);
          }
          function S(t) {
            return '(' != t ? f() : d(g(')'), w, y(')'), m);
          }
          function C(t, e) {
            if (Et.state.fatArrowAt == Et.stream.start) {
              var n = e ? A : _;
              if ('(' == t) return d(p, g(')'), j(it, ')'), m, y('=>'), n, v);
              if ('variable' == t) return f(p, q, y('=>'), n, v);
            }
            var r = e ? T : L;
            return Nt.hasOwnProperty(t)
              ? d(r)
              : 'function' == t
                ? d(rt, r)
                : 'class' == t
                  ? d(g('form'), ot, m)
                  : 'keyword c' == t || 'async' == t
                    ? d(e ? x : w)
                    : '(' == t
                      ? d(g(')'), k, y(')'), m, r)
                      : 'operator' == t || 'spread' == t
                        ? d(e ? x : w)
                        : '[' == t
                          ? d(g(']'), mt, m, r)
                          : '{' == t
                            ? F(P, '}', null, r)
                            : 'quasi' == t
                              ? f(M, r)
                              : 'new' == t
                                ? d(
                                    (function(t) {
                                      return function(e) {
                                        return '.' == e
                                          ? d(
                                              t
                                                ? function(t, e) {
                                                    if ('target' == e)
                                                      return (
                                                        (Et.marked = 'keyword'),
                                                        d(T)
                                                      );
                                                  }
                                                : function(t, e) {
                                                    if ('target' == e)
                                                      return (
                                                        (Et.marked = 'keyword'),
                                                        d(L)
                                                      );
                                                  }
                                            )
                                          : 'variable' == e && Lt
                                            ? d(U, t ? T : L)
                                            : f(t ? x : w);
                                      };
                                    })(e)
                                  )
                                : d();
          }
          function k(t) {
            return t.match(/[;\}\)\],]/) ? f() : f(w);
          }
          function L(t, e) {
            return ',' == t ? d(w) : T(t, e, !1);
          }
          function T(t, e, n) {
            var r = 0 == n ? L : T,
              i = 0 == n ? w : x;
            return '=>' == t
              ? d(p, n ? A : _, v)
              : 'operator' == t
                ? /\+\+|--/.test(e) || (Lt && '!' == e)
                  ? d(r)
                  : '?' == e ? d(w, y(':'), i) : d(i)
                : 'quasi' == t
                  ? f(M, r)
                  : ';' != t
                    ? '(' == t
                      ? F(x, ')', 'call', r)
                      : '.' == t
                        ? d(E, r)
                        : '[' == t
                          ? d(g(']'), k, y(']'), m, r)
                          : Lt && 'as' == e
                            ? ((Et.marked = 'keyword'), d(I, r))
                            : 'regexp' == t
                              ? ((Et.state.lastType = Et.marked = 'operator'),
                                Et.stream.backUp(
                                  Et.stream.pos - Et.stream.start - 1
                                ),
                                d(i))
                              : void 0
                    : void 0;
          }
          function M(t, e) {
            return 'quasi' != t
              ? f()
              : '${' != e.slice(e.length - 2) ? d(M) : d(w, O);
          }
          function O(t) {
            if ('}' == t)
              return (Et.marked = 'string-2'), (Et.state.tokenize = l), d(M);
          }
          function _(t) {
            return s(Et.stream, Et.state), f('{' == t ? b : w);
          }
          function A(t) {
            return s(Et.stream, Et.state), f('{' == t ? b : x);
          }
          function N(t) {
            return ':' == t ? d(m, b) : f(L, y(';'), m);
          }
          function E(t) {
            if ('variable' == t) return (Et.marked = 'property'), d();
          }
          function P(t, e) {
            if ('async' == t) return (Et.marked = 'property'), d(P);
            if ('variable' == t || 'keyword' == Et.style) {
              if (((Et.marked = 'property'), 'get' == e || 'set' == e))
                return d(D);
              var n;
              return (
                Lt &&
                  Et.state.fatArrowAt == Et.stream.start &&
                  (n = Et.stream.match(/^\s*:\s*/, !1)) &&
                  (Et.state.fatArrowAt = Et.stream.pos + n[0].length),
                d(W)
              );
            }
            return 'number' == t || 'string' == t
              ? ((Et.marked = Ct ? 'property' : Et.style + ' property'), d(W))
              : 'jsonld-keyword' == t
                ? d(W)
                : 'modifier' == t
                  ? d(P)
                  : '[' == t
                    ? d(w, y(']'), W)
                    : 'spread' == t
                      ? d(x, W)
                      : '*' == e
                        ? ((Et.marked = 'keyword'), d(P))
                        : ':' == t ? f(W) : void 0;
          }
          function D(t) {
            return 'variable' != t ? f(W) : ((Et.marked = 'property'), d(rt));
          }
          function W(t) {
            return ':' == t ? d(x) : '(' == t ? f(rt) : void 0;
          }
          function j(t, e, n) {
            function r(i, o) {
              if (n ? n.indexOf(i) > -1 : ',' == i) {
                var a = Et.state.lexical;
                return (
                  'call' == a.info && (a.pos = (a.pos || 0) + 1),
                  d(function(n, r) {
                    return n == e || r == e ? f() : f(t);
                  }, r)
                );
              }
              return i == e || o == e ? d() : d(y(e));
            }
            return function(n, i) {
              return n == e || i == e ? d() : f(t, r);
            };
          }
          function F(t, e, n) {
            for (var r = 3; r < arguments.length; r++) Et.cc.push(arguments[r]);
            return d(g(e, n), j(t, e), m);
          }
          function H(t) {
            return '}' == t ? d() : f(b, H);
          }
          function z(t, e) {
            if (Lt) {
              if (':' == t) return d(I);
              if ('?' == e) return d(z);
            }
          }
          function I(t, e) {
            return 'variable' == t || 'void' == e
              ? 'keyof' == e
                ? ((Et.marked = 'keyword'), d(I))
                : ((Et.marked = 'type'), d(V))
              : 'string' == t || 'number' == t || 'atom' == t
                ? d(V)
                : '[' == t
                  ? d(g(']'), j(I, ']', ','), m, V)
                  : '{' == t
                    ? d(g('}'), j(B, '}', ',;'), m, V)
                    : '(' == t ? d(j(G, ')'), R) : void 0;
          }
          function R(t) {
            if ('=>' == t) return d(I);
          }
          function B(t, e) {
            return 'variable' == t || 'keyword' == Et.style
              ? ((Et.marked = 'property'), d(B))
              : '?' == e
                ? d(B)
                : ':' == t ? d(I) : '[' == t ? d(w, z, y(']'), B) : void 0;
          }
          function G(t) {
            return 'variable' == t ? d(G) : ':' == t ? d(I) : void 0;
          }
          function V(t, e) {
            return '<' == e
              ? d(g('>'), j(I, '>'), m, V)
              : '|' == e || '.' == t
                ? d(I)
                : '[' == t ? d(y(']'), V) : 'extends' == e ? d(I) : void 0;
          }
          function U(t, e) {
            if ('<' == e) return d(g('>'), j(I, '>'), m, V);
          }
          function K() {
            return f(q, z, X, Y);
          }
          function q(t, e) {
            return 'modifier' == t
              ? d(q)
              : 'variable' == t
                ? (h(e), d())
                : 'spread' == t
                  ? d(q)
                  : '[' == t ? F(q, ']') : '{' == t ? F($, '}') : void 0;
          }
          function $(t, e) {
            return 'variable' != t || Et.stream.match(/^\s*:/, !1)
              ? ('variable' == t && (Et.marked = 'property'),
                'spread' == t ? d(q) : '}' == t ? f() : d(y(':'), q, X))
              : (h(e), d(X));
          }
          function X(t, e) {
            if ('=' == e) return d(x);
          }
          function Y(t) {
            if (',' == t) return d(K);
          }
          function Z(t, e) {
            if ('keyword b' == t && 'else' == e)
              return d(g('form', 'else'), b, m);
          }
          function J(t) {
            if ('(' == t) return d(g(')'), Q, y(')'), m);
          }
          function Q(t) {
            return 'var' == t
              ? d(K, y(';'), et)
              : ';' == t ? d(et) : 'variable' == t ? d(tt) : f(w, y(';'), et);
          }
          function tt(t, e) {
            return 'in' == e || 'of' == e
              ? ((Et.marked = 'keyword'), d(w))
              : d(L, et);
          }
          function et(t, e) {
            return ';' == t
              ? d(nt)
              : 'in' == e || 'of' == e
                ? ((Et.marked = 'keyword'), d(w))
                : f(w, y(';'), nt);
          }
          function nt(t) {
            ')' != t && d(w);
          }
          function rt(t, e) {
            return '*' == e
              ? ((Et.marked = 'keyword'), d(rt))
              : 'variable' == t
                ? (h(e), d(rt))
                : '(' == t
                  ? d(p, g(')'), j(it, ')'), m, z, b, v)
                  : Lt && '<' == e ? d(g('>'), j(I, '>'), m, rt) : void 0;
          }
          function it(t, e) {
            return (
              '@' == e && d(w, it),
              'spread' == t || 'modifier' == t ? d(it) : f(q, z, X)
            );
          }
          function ot(t, e) {
            return 'variable' == t ? at(t, e) : lt(t, e);
          }
          function at(t, e) {
            if ('variable' == t) return h(e), d(lt);
          }
          function lt(t, e) {
            return '<' == e
              ? d(g('>'), j(I, '>'), m, lt)
              : 'extends' == e || 'implements' == e || (Lt && ',' == t)
                ? d(Lt ? I : w, lt)
                : '{' == t ? d(g('}'), st, m) : void 0;
          }
          function st(t, e) {
            return 'modifier' == t ||
              'async' == t ||
              ('variable' == t &&
                ('static' == e || 'get' == e || 'set' == e) &&
                Et.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
              ? ((Et.marked = 'keyword'), d(st))
              : 'variable' == t || 'keyword' == Et.style
                ? ((Et.marked = 'property'), d(Lt ? ut : rt, st))
                : '[' == t
                  ? d(w, y(']'), Lt ? ut : rt, st)
                  : '*' == e
                    ? ((Et.marked = 'keyword'), d(st))
                    : ';' == t
                      ? d(st)
                      : '}' == t ? d() : '@' == e ? d(w, st) : void 0;
          }
          function ut(t, e) {
            return '?' == e
              ? d(ut)
              : ':' == t ? d(I, X) : '=' == e ? d(x) : f(rt);
          }
          function ct(t, e) {
            return '*' == e
              ? ((Et.marked = 'keyword'), d(gt, y(';')))
              : 'default' == e
                ? ((Et.marked = 'keyword'), d(w, y(';')))
                : '{' == t ? d(j(ft, '}'), gt, y(';')) : f(b);
          }
          function ft(t, e) {
            return 'as' == e
              ? ((Et.marked = 'keyword'), d(y('variable')))
              : 'variable' == t ? f(x, ft) : void 0;
          }
          function dt(t) {
            return 'string' == t ? d() : f(ht, pt, gt);
          }
          function ht(t, e) {
            return '{' == t
              ? F(ht, '}')
              : ('variable' == t && h(e),
                '*' == e && (Et.marked = 'keyword'),
                d(vt));
          }
          function pt(t) {
            if (',' == t) return d(ht, pt);
          }
          function vt(t, e) {
            if ('as' == e) return (Et.marked = 'keyword'), d(ht);
          }
          function gt(t, e) {
            if ('from' == e) return (Et.marked = 'keyword'), d(w);
          }
          function mt(t) {
            return ']' == t ? d() : f(j(x, ']'));
          }
          function yt(t, e, n) {
            return (
              (e.tokenize == i &&
                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                  e.lastType
                )) ||
              ('quasi' == e.lastType &&
                /\{\s*$/.test(t.string.slice(0, t.pos - (n || 0))))
            );
          }
          var bt,
            wt,
            xt = e.indentUnit,
            St = n.statementIndent,
            Ct = n.jsonld,
            kt = n.json || Ct,
            Lt = n.typescript,
            Tt = n.wordCharacters || /[\w$\xa1-\uffff]/,
            Mt = (function() {
              function t(t) {
                return { type: t, style: 'keyword' };
              }
              var e = t('keyword a'),
                n = t('keyword b'),
                r = t('keyword c'),
                i = t('keyword d'),
                o = t('operator'),
                a = { type: 'atom', style: 'atom' },
                l = {
                  if: t('if'),
                  while: e,
                  with: e,
                  else: n,
                  do: n,
                  try: n,
                  finally: n,
                  return: i,
                  break: i,
                  continue: i,
                  new: t('new'),
                  delete: r,
                  void: r,
                  throw: r,
                  debugger: t('debugger'),
                  var: t('var'),
                  const: t('var'),
                  let: t('var'),
                  function: t('function'),
                  catch: t('catch'),
                  for: t('for'),
                  switch: t('switch'),
                  case: t('case'),
                  default: t('default'),
                  in: o,
                  typeof: o,
                  instanceof: o,
                  true: a,
                  false: a,
                  null: a,
                  undefined: a,
                  NaN: a,
                  Infinity: a,
                  this: t('this'),
                  class: t('class'),
                  super: t('atom'),
                  yield: r,
                  export: t('export'),
                  import: t('import'),
                  extends: r,
                  await: r,
                };
              if (Lt) {
                var s = { type: 'variable', style: 'type' },
                  u = {
                    interface: t('class'),
                    implements: r,
                    namespace: r,
                    module: t('module'),
                    enum: t('module'),
                    public: t('modifier'),
                    private: t('modifier'),
                    protected: t('modifier'),
                    abstract: t('modifier'),
                    readonly: t('modifier'),
                    string: s,
                    number: s,
                    boolean: s,
                    any: s,
                  };
                for (var c in u) l[c] = u[c];
              }
              return l;
            })(),
            Ot = /[+\-*&%=<>!?|~^@]/,
            _t = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
            At = '([{}])',
            Nt = {
              atom: !0,
              number: !0,
              variable: !0,
              string: !0,
              regexp: !0,
              this: !0,
              'jsonld-keyword': !0,
            },
            Et = { state: null, column: null, marked: null, cc: null },
            Pt = { name: 'this', next: { name: 'arguments' } };
          return (
            (m.lex = !0),
            {
              startState: function(t) {
                var e = {
                  tokenize: i,
                  lastType: 'sof',
                  cc: [],
                  lexical: new u((t || 0) - xt, 0, 'block', !1),
                  localVars: n.localVars,
                  context: n.localVars && { vars: n.localVars },
                  indented: t || 0,
                };
                return (
                  n.globalVars &&
                    'object' == a(n.globalVars) &&
                    (e.globalVars = n.globalVars),
                  e
                );
              },
              token: function(t, e) {
                if (
                  (t.sol() &&
                    (e.lexical.hasOwnProperty('align') ||
                      (e.lexical.align = !1),
                    (e.indented = t.indentation()),
                    s(t, e)),
                  e.tokenize != o && t.eatSpace())
                )
                  return null;
                var n = e.tokenize(t, e);
                return 'comment' == bt
                  ? n
                  : ((e.lastType =
                      'operator' != bt || ('++' != wt && '--' != wt)
                        ? bt
                        : 'incdec'),
                    (function(t, e, n, r, i) {
                      var o = t.cc;
                      for (
                        Et.state = t,
                          Et.stream = i,
                          Et.marked = null,
                          Et.cc = o,
                          Et.style = e,
                          t.lexical.hasOwnProperty('align') ||
                            (t.lexical.align = !0);
                        ;

                      )
                        if ((o.length ? o.pop() : kt ? w : b)(n, r)) {
                          for (; o.length && o[o.length - 1].lex; ) o.pop()();
                          return Et.marked
                            ? Et.marked
                            : 'variable' == n && c(t, r) ? 'variable-2' : e;
                        }
                    })(e, n, bt, wt, t));
              },
              indent: function(e, r) {
                if (e.tokenize == o) return t.Pass;
                if (e.tokenize != i) return 0;
                var a,
                  l = r && r.charAt(0),
                  s = e.lexical;
                if (!/^\s*else\b/.test(r))
                  for (var u = e.cc.length - 1; u >= 0; --u) {
                    var c = e.cc[u];
                    if (c == m) s = s.prev;
                    else if (c != Z) break;
                  }
                for (
                  ;
                  ('stat' == s.type || 'form' == s.type) &&
                  ('}' == l ||
                    ((a = e.cc[e.cc.length - 1]) &&
                      (a == L || a == T) &&
                      !/^[,\.=+\-*:?[\(]/.test(r)));

                )
                  s = s.prev;
                St && ')' == s.type && 'stat' == s.prev.type && (s = s.prev);
                var f = s.type,
                  d = l == f;
                return 'vardef' == f
                  ? s.indented +
                      ('operator' == e.lastType || ',' == e.lastType
                        ? s.info + 1
                        : 0)
                  : 'form' == f && '{' == l
                    ? s.indented
                    : 'form' == f
                      ? s.indented + xt
                      : 'stat' == f
                        ? s.indented +
                          ((function(t, e) {
                            return (
                              'operator' == t.lastType ||
                              ',' == t.lastType ||
                              Ot.test(e.charAt(0)) ||
                              /[,.]/.test(e.charAt(0))
                            );
                          })(e, r)
                            ? St || xt
                            : 0)
                        : 'switch' != s.info || d || 0 == n.doubleIndentSwitch
                          ? s.align
                            ? s.column + (d ? 0 : 1)
                            : s.indented + (d ? 0 : xt)
                          : s.indented +
                            (/^(?:case|default)\b/.test(r) ? xt : 2 * xt);
              },
              electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
              blockCommentStart: kt ? null : '/*',
              blockCommentEnd: kt ? null : '*/',
              blockCommentContinue: kt ? null : ' * ',
              lineComment: kt ? null : '//',
              fold: 'brace',
              closeBrackets: '()[]{}\'\'""``',
              helperType: kt ? 'json' : 'javascript',
              jsonldMode: Ct,
              jsonMode: kt,
              expressionAllowed: yt,
              skipExpression: function(t) {
                var e = t.cc[t.cc.length - 1];
                (e != w && e != x) || t.cc.pop();
              },
            }
          );
        }),
          t.registerHelper('wordChars', 'javascript', /[\w$]/),
          t.defineMIME('text/javascript', 'javascript'),
          t.defineMIME('text/ecmascript', 'javascript'),
          t.defineMIME('application/javascript', 'javascript'),
          t.defineMIME('application/x-javascript', 'javascript'),
          t.defineMIME('application/ecmascript', 'javascript'),
          t.defineMIME('application/json', { name: 'javascript', json: !0 }),
          t.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
          t.defineMIME('application/ld+json', {
            name: 'javascript',
            jsonld: !0,
          }),
          t.defineMIME('text/typescript', {
            name: 'javascript',
            typescript: !0,
          }),
          t.defineMIME('application/typescript', {
            name: 'javascript',
            typescript: !0,
          });
      });
    }.call(e, n(80)(t)));
  },
  function(t, e) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function(t, e) {
    var n,
      r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            };
    n = (function() {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (t) {
      'object' === ('undefined' == typeof window ? 'undefined' : r(window)) &&
        (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    'use strict';
    (function(t) {
      var r = n(8),
        i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        o =
          'object' ==
            ('undefined' == typeof exports ? 'undefined' : i(exports)) &&
          exports &&
          !exports.nodeType &&
          exports,
        a = o && 'object' == i(t) && t && !t.nodeType && t,
        l = a && a.exports === o ? r.a.Buffer : void 0,
        s = l ? l.allocUnsafe : void 0;
      e.a = function(t, e) {
        if (e) return t.slice();
        var n = t.length,
          r = s ? s(n) : new t.constructor(n);
        return t.copy(r), r;
      };
    }.call(e, n(30)(t)));
  },
  function(t, e, n) {
    'use strict';
    e.a = function() {
      return !1;
    };
  },
  function(t, e, n) {
    'use strict';
    (function(t) {
      var r = n(47),
        i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              },
        o =
          'object' ==
            ('undefined' == typeof exports ? 'undefined' : i(exports)) &&
          exports &&
          !exports.nodeType &&
          exports,
        a = o && 'object' == i(t) && t && !t.nodeType && t,
        l = a && a.exports === o && r.a.process,
        s = (function() {
          try {
            return l && l.binding && l.binding('util');
          } catch (t) {}
        })();
      e.a = s;
    }.call(e, n(30)(t)));
  },
  function(t, e) {
    t.exports = {
      length: 950,
      regions: [
        {
          modelStart: 5,
          modelEnd: 292,
          colour: '#2dcf00',
          endStyle: 'jagged',
          startStyle: 'jagged',
          display: !0,
          end: 361,
          aliEnd: 361,
          href: '/family/PF00082',
          text: 'Peptidase_S8',
          modelLength: 307,
          metadata: {
            scoreName: 'e-value',
            score: '1.3e-38',
            description: 'Subtilase family',
            accession: 'PF00082',
            end: 587,
            database: 'pfam',
            aliEnd: 573,
            identifier: 'Peptidase_S8',
            type: 'Domain',
            aliStart: 163,
            start: 159,
          },
          type: 'pfama',
          aliStart: 163,
          start: 159,
        },
        {
          modelStart: 5,
          modelEnd: 292,
          colour: '#2dcf00',
          endStyle: 'jagged',
          startStyle: 'jagged',
          display: !0,
          end: 587,
          aliEnd: 573,
          href: '/family/PF00082',
          text: 'Peptidase_S8',
          modelLength: 307,
          metadata: {
            scoreName: 'e-value',
            score: '1.3e-38',
            description: 'Subtilase family',
            accession: 'PF00082',
            end: 587,
            database: 'pfam',
            aliEnd: 573,
            identifier: 'Peptidase_S8',
            type: 'Domain',
            aliStart: 163,
            start: 159,
          },
          type: 'pfama',
          aliStart: 470,
          start: 470,
        },
        {
          modelStart: 12,
          modelEnd: 100,
          colour: '#ff5353',
          endStyle: 'curved',
          startStyle: 'jagged',
          display: !0,
          end: 469,
          aliEnd: 469,
          href: '/family/PF02225',
          text: 'PA',
          modelLength: 100,
          metadata: {
            scoreName: 'e-value',
            score: '7.1e-09',
            description: 'PA domain',
            accession: 'PF02225',
            end: 469,
            database: 'pfam',
            aliEnd: 469,
            identifier: 'PA',
            type: 'Family',
            aliStart: 385,
            start: 362,
          },
          type: 'pfama',
          aliStart: 385,
          start: 362,
        },
        {
          modelStart: 1,
          modelEnd: 112,
          colour: '#5b5bff',
          endStyle: 'curved',
          startStyle: 'curved',
          display: !0,
          end: 726,
          aliEnd: 726,
          href: '/family/PF06280',
          text: 'DUF1034',
          modelLength: 112,
          metadata: {
            scoreName: 'e-value',
            score: '1.1e-13',
            description: 'Fn3-like domain (DUF1034)',
            accession: 'PF06280',
            end: 726,
            database: 'pfam',
            aliEnd: 726,
            identifier: 'DUF1034',
            type: 'Domain',
            aliStart: 613,
            start: 613,
          },
          type: 'pfama',
          aliStart: 613,
          start: 613,
        },
      ],
      markups: [
        {
          lineColour: '#ff0000',
          colour: '#000000',
          display: !0,
          end: 470,
          v_align: 'top',
          metadata: {
            database: 'pfam',
            type: 'Link between discontinous regions',
            end: 470,
            start: 361,
          },
          type: 'Nested',
          start: 361,
        },
        {
          lineColour: '#333333',
          colour: '#e469fe',
          display: !0,
          residue: 'S',
          headStyle: 'diamond',
          v_align: 'top',
          type: 'Pfam predicted active site',
          metadata: {
            database: 'pfam',
            description: 'S Pfam predicted active site',
            start: 538,
          },
          start: 538,
        },
        {
          lineColour: '#333333',
          colour: '#e469fe',
          display: !0,
          residue: 'D',
          headStyle: 'diamond',
          v_align: 'top',
          type: 'Pfam predicted active site',
          metadata: {
            database: 'pfam',
            description: 'D Pfam predicted active site',
            start: 185,
          },
          start: 185,
        },
        {
          lineColour: '#333333',
          colour: '#e469fe',
          display: !0,
          residue: 'H',
          headStyle: 'diamond',
          v_align: 'top',
          type: 'Pfam predicted active site',
          metadata: {
            database: 'pfam',
            description: 'H Pfam predicted active site',
            start: 235,
          },
          start: 235,
        },
      ],
      metadata: {
        database: 'uniprot',
        identifier: 'Q560V8_CRYNE',
        organism: 'Cryptococcus neoformans (Filobasidiella neoformans)',
        description: 'Putative uncharacterized protein',
        taxid: 5207,
        accession: 'Q560V8',
      },
      motifs: [
        {
          colour: '#ffa500',
          metadata: { database: 'Phobius', type: 'sig_p', end: 23, start: 1 },
          type: 'sig_p',
          display: !0,
          end: 23,
          start: 1,
        },
        {
          colour: '#00ffff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '2.5100',
            end: 21,
            start: 3,
          },
          type: 'low_complexity',
          display: !1,
          end: 21,
          start: 3,
        },
        {
          colour: '#86bcff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '1.4900',
            end: 156,
            start: 134,
          },
          type: 'low_complexity',
          display: !0,
          end: 156,
          start: 134,
        },
        {
          colour: '#00ffff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '2.0200',
            end: 187,
            start: 173,
          },
          type: 'low_complexity',
          display: !1,
          end: 187,
          start: 173,
        },
        {
          colour: '#00ffff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '2.0800',
            end: 218,
            start: 207,
          },
          type: 'low_complexity',
          display: !1,
          end: 218,
          start: 207,
        },
        {
          colour: '#00ffff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '2.1300',
            end: 231,
            start: 220,
          },
          type: 'low_complexity',
          display: !1,
          end: 231,
          start: 220,
        },
        {
          colour: '#00ffff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '2.0000',
            end: 554,
            start: 538,
          },
          type: 'low_complexity',
          display: !1,
          end: 554,
          start: 538,
        },
        {
          colour: '#86bcff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '1.9100',
            end: 590,
            start: 578,
          },
          type: 'low_complexity',
          display: !0,
          end: 590,
          start: 588,
        },
        {
          colour: '#00ffff',
          metadata: {
            database: 'seg',
            type: 'low_complexity',
            score: '1.7600',
            end: 831,
            start: 822,
          },
          type: 'low_complexity',
          display: !1,
          end: 831,
          start: 822,
        },
        {
          colour: ['#ff7ff0', '#f2ff7f', '#7ff2ff'],
          href: '/pfamb/PB075017',
          type: 'pfamb',
          metadata: {
            database: 'pfam',
            identifier: 'Pfam-B_75017',
            type: 'Pfam-B',
            start: 791,
            end: 949,
            accession: 'PB075017',
          },
          start: 791,
          end: 949,
          display: !0,
        },
      ],
    };
  },
]);
//# sourceMappingURL=domain-gfx.legacy.js.map
