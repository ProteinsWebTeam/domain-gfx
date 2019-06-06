var DomainGfx = (function(t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 210))
  );
})([
  function(t, e, r) {
    (function(e) {
      var r = 'object',
        n = function(t) {
          return t && t.Math == Math && t;
        };
      t.exports =
        n(typeof globalThis == r && globalThis) ||
        n(typeof window == r && window) ||
        n(typeof self == r && self) ||
        n(typeof e == r && e) ||
        Function('return this')();
    }.call(this, r(103)));
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
  function(t, e, r) {
    var n = r(0),
      i = r(36).f,
      o = r(12),
      a = r(13),
      l = r(77),
      s = r(108),
      u = r(80);
    t.exports = function(t, e) {
      var r,
        c,
        f,
        d,
        h,
        p = t.target,
        v = t.global,
        g = t.stat;
      if ((r = v ? n : g ? n[p] || l(p, {}) : (n[p] || {}).prototype))
        for (c in e) {
          if (
            ((d = e[c]),
            (f = t.noTargetGet ? (h = i(r, c)) && h.value : r[c]),
            !u(v ? c : p + (g ? '.' : '#') + c, t.forced) && void 0 !== f)
          ) {
            if (typeof d == typeof f) continue;
            s(d, f);
          }
          (t.sham || (f && f.sham)) && o(d, 'sham', !0), a(r, c, d, t);
        }
    };
  },
  function(t, e, r) {
    var n = r(0),
      i = r(40),
      o = r(56),
      a = r(111),
      l = n.Symbol,
      s = i('wks');
    t.exports = function(t) {
      return s[t] || (s[t] = (a && l[t]) || (a ? l : o)('Symbol.' + t));
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(64),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = n.a || i || Function('return this')();
    e.a = o;
  },
  function(t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return r.call(t, e);
    };
  },
  function(t, e, r) {
    var n = r(9),
      i = r(105),
      o = r(11),
      a = r(39),
      l = Object.defineProperty;
    e.f = n
      ? l
      : function(t, e, r) {
          if ((o(t), (e = a(e, !0)), o(r), i))
            try {
              return l(t, e, r);
            } catch (t) {}
          if ('get' in r || 'set' in r)
            throw TypeError('Accessors not supported');
          return 'value' in r && (t[e] = r.value), t;
        };
  },
  function(t, e) {
    var r = (t.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')());
    'number' == typeof __g && (__g = r);
  },
  function(t, e, r) {
    var n = r(68)('wks'),
      i = r(34),
      o = r(7).Symbol,
      a = 'function' == typeof o;
    (t.exports = function(t) {
      return n[t] || (n[t] = (a && o[t]) || (a ? o : i)('Symbol.' + t));
    }).store = n;
  },
  function(t, e, r) {
    var n = r(1);
    t.exports = !n(function() {
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
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function(t, e, r) {
    var n = r(10);
    t.exports = function(t) {
      if (!n(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    };
  },
  function(t, e, r) {
    var n = r(9),
      i = r(6),
      o = r(37);
    t.exports = n
      ? function(t, e, r) {
          return i.f(t, e, o(1, r));
        }
      : function(t, e, r) {
          return (t[e] = r), t;
        };
  },
  function(t, e, r) {
    var n = r(0),
      i = r(40),
      o = r(12),
      a = r(5),
      l = r(77),
      s = r(107),
      u = r(41),
      c = u.get,
      f = u.enforce,
      d = String(s).split('toString');
    i('inspectSource', function(t) {
      return s.call(t);
    }),
      (t.exports = function(t, e, r, i) {
        var s = !!i && !!i.unsafe,
          u = !!i && !!i.enumerable,
          c = !!i && !!i.noTargetGet;
        'function' == typeof r &&
          ('string' != typeof e || a(r, 'name') || o(r, 'name', e),
          (f(r).source = d.join('string' == typeof e ? e : ''))),
          t !== n
            ? (s ? !c && t[e] && (u = !0) : delete t[e],
              u ? (t[e] = r) : o(t, e, r))
            : u
            ? (t[e] = r)
            : l(e, r);
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && c(this).source) || s.call(this);
      });
  },
  function(t, e, r) {
    var n = r(28);
    t.exports = function(t) {
      return Object(n(t));
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(1),
      o = r(61),
      a = r(10),
      l = r(14),
      s = r(20),
      u = r(124),
      c = r(125),
      f = r(82),
      d = r(3)('isConcatSpreadable'),
      h = !i(function() {
        var t = [];
        return (t[d] = !1), t.concat()[0] !== t;
      }),
      p = f('concat'),
      v = function(t) {
        if (!a(t)) return !1;
        var e = t[d];
        return void 0 !== e ? !!e : o(t);
      };
    n(
      { target: 'Array', proto: !0, forced: !h || !p },
      {
        concat: function(t) {
          var e,
            r,
            n,
            i,
            o,
            a = l(this),
            f = c(a, 0),
            d = 0;
          for (e = -1, n = arguments.length; e < n; e++)
            if (((o = -1 === e ? a : arguments[e]), v(o))) {
              if (d + (i = s(o.length)) > 9007199254740991)
                throw TypeError('Maximum allowed index exceeded');
              for (r = 0; r < i; r++, d++) r in o && u(f, d, o[r]);
            } else {
              if (d >= 9007199254740991)
                throw TypeError('Maximum allowed index exceeded');
              u(f, d++, o);
            }
          return (f.length = d), f;
        },
      }
    );
  },
  function(t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return r.call(t, e);
    };
  },
  function(t, e, r) {
    t.exports = !r(33)(function() {
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
  function(t, e, r) {
    var n = r(22),
      i = r(89),
      o = r(66),
      a = Object.defineProperty;
    e.f = r(17)
      ? Object.defineProperty
      : function(t, e, r) {
          if ((n(t), (e = o(e, !0)), n(r), i))
            try {
              return a(t, e, r);
            } catch (t) {}
          if ('get' in r || 'set' in r)
            throw TypeError('Accessors not supported!');
          return 'value' in r && (t[e] = r.value), t;
        };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(0),
      o = r(5),
      a = r(111),
      l = r(9),
      s = r(54),
      u = r(13),
      c = r(42),
      f = r(1),
      d = r(40),
      h = r(59),
      p = r(56),
      v = r(3),
      g = r(112),
      m = r(113),
      y = r(182),
      b = r(61),
      x = r(11),
      w = r(10),
      S = r(14),
      C = r(25),
      k = r(39),
      T = r(37),
      L = r(43),
      O = r(57),
      M = r(185),
      _ = r(36),
      A = r(6),
      E = r(76),
      N = r(12),
      P = r(60),
      j = r(79),
      D = r(55),
      I = r(41),
      F = D('hidden'),
      W = I.set,
      z = I.getterFor('Symbol'),
      H = _.f,
      R = A.f,
      B = M.f,
      G = i.Symbol,
      V = i.JSON,
      U = V && V.stringify,
      $ = v('toPrimitive'),
      K = E.f,
      q = d('symbol-registry'),
      Y = d('symbols'),
      X = d('op-symbols'),
      Z = d('wks'),
      J = Object.prototype,
      Q = i.QObject,
      tt = !Q || !Q.prototype || !Q.prototype.findChild,
      et =
        l &&
        f(function() {
          return (
            7 !=
            L(
              R({}, 'a', {
                get: function() {
                  return R(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function(t, e, r) {
              var n = H(J, e);
              n && delete J[e], R(t, e, r), n && t !== J && R(J, e, n);
            }
          : R,
      rt = function(t, e) {
        var r = (Y[t] = L(G.prototype));
        return (
          W(r, { type: 'Symbol', tag: t, description: e }),
          l || (r.description = e),
          r
        );
      },
      nt =
        a && 'symbol' == typeof G.iterator
          ? function(t) {
              return 'symbol' == typeof t;
            }
          : function(t) {
              return Object(t) instanceof G;
            },
      it = function(t, e, r) {
        return (
          t === J && it(X, e, r),
          x(t),
          (e = k(e, !0)),
          x(r),
          o(Y, e)
            ? (r.enumerable
                ? (o(t, F) && t[F][e] && (t[F][e] = !1),
                  (r = L(r, { enumerable: T(0, !1) })))
                : (o(t, F) || R(t, F, T(1, {})), (t[F][e] = !0)),
              et(t, e, r))
            : R(t, e, r)
        );
      },
      ot = function(t, e) {
        x(t);
        for (var r, n = y((e = C(e))), i = 0, o = n.length; o > i; )
          it(t, (r = n[i++]), e[r]);
        return t;
      },
      at = function(t) {
        var e = K.call(this, (t = k(t, !0)));
        return (
          !(this === J && o(Y, t) && !o(X, t)) &&
          (!(e || !o(this, t) || !o(Y, t) || (o(this, F) && this[F][t])) || e)
        );
      },
      lt = function(t, e) {
        if (((t = C(t)), (e = k(e, !0)), t !== J || !o(Y, e) || o(X, e))) {
          var r = H(t, e);
          return (
            !r || !o(Y, e) || (o(t, F) && t[F][e]) || (r.enumerable = !0), r
          );
        }
      },
      st = function(t) {
        for (var e, r = B(C(t)), n = [], i = 0; r.length > i; )
          o(Y, (e = r[i++])) || o(c, e) || n.push(e);
        return n;
      },
      ut = function(t) {
        for (
          var e, r = t === J, n = B(r ? X : C(t)), i = [], a = 0;
          n.length > a;

        )
          !o(Y, (e = n[a++])) || (r && !o(J, e)) || i.push(Y[e]);
        return i;
      };
    a ||
      (u(
        (G = function() {
          if (this instanceof G) throw TypeError('Symbol is not a constructor');
          var t = void 0 === arguments[0] ? void 0 : String(arguments[0]),
            e = p(t),
            r = function(t) {
              this === J && r.call(X, t),
                o(this, F) && o(this[F], e) && (this[F][e] = !1),
                et(this, e, T(1, t));
            };
          return l && tt && et(J, e, { configurable: !0, set: r }), rt(e, t);
        }).prototype,
        'toString',
        function() {
          return z(this).tag;
        }
      ),
      (E.f = at),
      (A.f = it),
      (_.f = lt),
      (O.f = M.f = st),
      (j.f = ut),
      l &&
        (R(G.prototype, 'description', {
          configurable: !0,
          get: function() {
            return z(this).description;
          },
        }),
        s || u(J, 'propertyIsEnumerable', at, { unsafe: !0 })),
      (g.f = function(t) {
        return rt(v(t), t);
      })),
      n({ global: !0, wrap: !0, forced: !a, sham: !a }, { Symbol: G });
    for (var ct = P(Z), ft = 0; ct.length > ft; ) m(ct[ft++]);
    n(
      { target: 'Symbol', stat: !0, forced: !a },
      {
        for: function(t) {
          return o(q, (t += '')) ? q[t] : (q[t] = G(t));
        },
        keyFor: function(t) {
          if (!nt(t)) throw TypeError(t + ' is not a symbol');
          for (var e in q) if (q[e] === t) return e;
        },
        useSetter: function() {
          tt = !0;
        },
        useSimple: function() {
          tt = !1;
        },
      }
    ),
      n(
        { target: 'Object', stat: !0, forced: !a, sham: !l },
        {
          create: function(t, e) {
            return void 0 === e ? L(t) : ot(L(t), e);
          },
          defineProperty: it,
          defineProperties: ot,
          getOwnPropertyDescriptor: lt,
        }
      ),
      n(
        { target: 'Object', stat: !0, forced: !a },
        { getOwnPropertyNames: st, getOwnPropertySymbols: ut }
      ),
      n(
        {
          target: 'Object',
          stat: !0,
          forced: f(function() {
            j.f(1);
          }),
        },
        {
          getOwnPropertySymbols: function(t) {
            return j.f(S(t));
          },
        }
      ),
      V &&
        n(
          {
            target: 'JSON',
            stat: !0,
            forced:
              !a ||
              f(function() {
                var t = G();
                return (
                  '[null]' != U([t]) ||
                  '{}' != U({ a: t }) ||
                  '{}' != U(Object(t))
                );
              }),
          },
          {
            stringify: function(t) {
              for (var e, r, n = [t], i = 1; arguments.length > i; )
                n.push(arguments[i++]);
              if (((r = e = n[1]), (w(e) || void 0 !== t) && !nt(t)))
                return (
                  b(e) ||
                    (e = function(t, e) {
                      if (
                        ('function' == typeof r && (e = r.call(this, t, e)),
                        !nt(e))
                      )
                        return e;
                    }),
                  (n[1] = e),
                  U.apply(V, n)
                );
            },
          }
        ),
      G.prototype[$] || N(G.prototype, $, G.prototype.valueOf),
      h(G, 'Symbol'),
      (c[F] = !0);
  },
  function(t, e, r) {
    var n = r(58),
      i = Math.min;
    t.exports = function(t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  },
  function(t, e, r) {
    var n = r(18),
      i = r(50);
    t.exports = r(17)
      ? function(t, e, r) {
          return n.f(t, e, i(1, r));
        }
      : function(t, e, r) {
          return (t[e] = r), t;
        };
  },
  function(t, e, r) {
    var n = r(23);
    t.exports = function(t) {
      if (!n(t)) throw TypeError(t + ' is not an object!');
      return t;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function(t, e, r) {
    var n = r(152),
      i = r(71);
    t.exports = function(t) {
      return n(i(t));
    };
  },
  function(t, e, r) {
    var n = r(104),
      i = r(28);
    t.exports = function(t) {
      return n(i(t));
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(9),
      o = r(0),
      a = r(5),
      l = r(10),
      s = r(6).f,
      u = r(108),
      c = o.Symbol;
    if (
      i &&
      'function' == typeof c &&
      (!('description' in c.prototype) || void 0 !== c().description)
    ) {
      var f = {},
        d = function() {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof d ? new c(t) : void 0 === t ? c() : c(t);
          return '' === t && (f[e] = !0), e;
        };
      u(d, c);
      var h = (d.prototype = c.prototype);
      h.constructor = d;
      var p = h.toString,
        v = 'Symbol(test)' == String(c('test')),
        g = /^Symbol\((.*)\)[^)]+$/;
      s(h, 'description', {
        configurable: !0,
        get: function() {
          var t = l(this) ? this.valueOf() : this,
            e = p.call(t);
          if (a(f, t)) return '';
          var r = v ? e.slice(7, -1) : e.replace(g, '$1');
          return '' === r ? void 0 : r;
        },
      }),
        n({ global: !0, forced: !0 }, { Symbol: d });
    }
  },
  function(t, e, r) {
    var n = r(7),
      i = r(21),
      o = r(16),
      a = r(34)('src'),
      l = Function.toString,
      s = ('' + l).split('toString');
    (r(49).inspectSource = function(t) {
      return l.call(t);
    }),
      (t.exports = function(t, e, r, l) {
        var u = 'function' == typeof r;
        u && (o(r, 'name') || i(r, 'name', e)),
          t[e] !== r &&
            (u && (o(r, a) || i(r, a, t[e] ? '' + t[e] : s.join(String(e)))),
            t === n
              ? (t[e] = r)
              : l
              ? t[e]
                ? (t[e] = r)
                : i(t, e, r)
              : (delete t[e], i(t, e, r)));
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && this[a]) || l.call(this);
      });
  },
  function(t, e) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(25),
      i = r(115),
      o = r(45),
      a = r(41),
      l = r(81),
      s = a.set,
      u = a.getterFor('Array Iterator');
    (t.exports = l(
      Array,
      'Array',
      function(t, e) {
        s(this, { type: 'Array Iterator', target: n(t), index: 0, kind: e });
      },
      function() {
        var t = u(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == r
          ? { value: n, done: !1 }
          : 'values' == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      'values'
    )),
      (o.Arguments = o.Array),
      i('keys'),
      i('values'),
      i('entries');
  },
  function(t, e, r) {
    var n = r(2),
      i = r(9);
    n(
      { target: 'Object', stat: !0, forced: !i, sham: !i },
      { defineProperty: r(6).f }
    );
  },
  function(t, e, r) {
    var n = r(13),
      i = r(190),
      o = Object.prototype;
    i !== o.toString && n(o, 'toString', i, { unsafe: !0 });
  },
  function(t, e, r) {
    r(2)({ target: 'Array', stat: !0 }, { isArray: r(61) });
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
    var r = 0,
      n = Math.random();
    t.exports = function(t) {
      return 'Symbol('.concat(
        void 0 === t ? '' : t,
        ')_',
        (++r + n).toString(36)
      );
    };
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, r) {
    var n = r(9),
      i = r(76),
      o = r(37),
      a = r(25),
      l = r(39),
      s = r(5),
      u = r(105),
      c = Object.getOwnPropertyDescriptor;
    e.f = n
      ? c
      : function(t, e) {
          if (((t = a(t)), (e = l(e, !0)), u))
            try {
              return c(t, e);
            } catch (t) {}
          if (s(t, e)) return o(!i.f.call(t, e), t[e]);
        };
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
  function(t, e) {
    var r = {}.toString;
    t.exports = function(t) {
      return r.call(t).slice(8, -1);
    };
  },
  function(t, e, r) {
    var n = r(10);
    t.exports = function(t, e) {
      if (!n(t)) return t;
      var r, i;
      if (e && 'function' == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      if ('function' == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
      if (!e && 'function' == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e, r) {
    var n = r(0),
      i = r(77),
      o = r(54),
      a = n['__core-js_shared__'] || i('__core-js_shared__', {});
    (t.exports = function(t, e) {
      return a[t] || (a[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.1.3',
      mode: o ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
    });
  },
  function(t, e, r) {
    var n,
      i,
      o,
      a = r(179),
      l = r(0),
      s = r(10),
      u = r(12),
      c = r(5),
      f = r(55),
      d = r(42),
      h = l.WeakMap;
    if (a) {
      var p = new h(),
        v = p.get,
        g = p.has,
        m = p.set;
      (n = function(t, e) {
        return m.call(p, t, e), e;
      }),
        (i = function(t) {
          return v.call(p, t) || {};
        }),
        (o = function(t) {
          return g.call(p, t);
        });
    } else {
      var y = f('state');
      (d[y] = !0),
        (n = function(t, e) {
          return u(t, y, e), e;
        }),
        (i = function(t) {
          return c(t, y) ? t[y] : {};
        }),
        (o = function(t) {
          return c(t, y);
        });
    }
    t.exports = {
      set: n,
      get: i,
      has: o,
      enforce: function(t) {
        return o(t) ? i(t) : n(t, {});
      },
      getterFor: function(t) {
        return function(e) {
          var r;
          if (!s(e) || (r = i(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return r;
        };
      },
    };
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, r) {
    var n = r(11),
      i = r(183),
      o = r(78),
      a = r(42),
      l = r(184),
      s = r(106),
      u = r(55)('IE_PROTO'),
      c = function() {},
      f = function() {
        var t,
          e = s('iframe'),
          r = o.length;
        for (
          e.style.display = 'none',
            l.appendChild(e),
            e.src = String('javascript:'),
            (t = e.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            f = t.F;
          r--;

        )
          delete f.prototype[o[r]];
        return f();
      };
    (t.exports =
      Object.create ||
      function(t, e) {
        var r;
        return (
          null !== t
            ? ((c.prototype = n(t)),
              (r = new c()),
              (c.prototype = null),
              (r[u] = t))
            : (r = f()),
          void 0 === e ? r : i(r, e)
        );
      }),
      (a[u] = !0);
  },
  function(t, e, r) {
    r(113)('iterator');
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, r) {
    'use strict';
    var n = r(122),
      i = r(41),
      o = r(81),
      a = i.set,
      l = i.getterFor('String Iterator');
    o(
      String,
      'String',
      function(t) {
        a(this, { type: 'String Iterator', string: String(t), index: 0 });
      },
      function() {
        var t,
          e = l(this),
          r = e.string,
          i = e.index;
        return i >= r.length
          ? { value: void 0, done: !0 }
          : ((t = n(r, i, !0)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function(t, e, r) {
    var n = r(0),
      i = r(123),
      o = r(29),
      a = r(12),
      l = r(3),
      s = l('iterator'),
      u = l('toStringTag'),
      c = o.values;
    for (var f in i) {
      var d = n[f],
        h = d && d.prototype;
      if (h) {
        if (h[s] !== c)
          try {
            a(h, s, c);
          } catch (t) {
            h[s] = c;
          }
        if ((h[u] || a(h, u, f), i[f]))
          for (var p in o)
            if (h[p] !== o[p])
              try {
                a(h, p, o[p]);
              } catch (t) {
                h[p] = o[p];
              }
      }
    }
  },
  function(t, e, r) {
    var n = r(7),
      i = r(49),
      o = r(21),
      a = r(27),
      l = r(51),
      s = function(t, e, r) {
        var u,
          c,
          f,
          d,
          h = t & s.F,
          p = t & s.G,
          v = t & s.S,
          g = t & s.P,
          m = t & s.B,
          y = p ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
          b = p ? i : i[e] || (i[e] = {}),
          x = b.prototype || (b.prototype = {});
        for (u in (p && (r = e), r))
          (f = ((c = !h && y && void 0 !== y[u]) ? y : r)[u]),
            (d =
              m && c
                ? l(f, n)
                : g && 'function' == typeof f
                ? l(Function.call, f)
                : f),
            y && a(y, u, f, t & s.U),
            b[u] != f && o(b, u, d),
            g && x[u] != f && (x[u] = f);
      };
    (n.core = i),
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
    var r = (t.exports = { version: '2.4.0' });
    'number' == typeof __e && (__e = r);
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
  function(t, e, r) {
    var n = r(149);
    t.exports = function(t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 1:
          return function(r) {
            return t.call(e, r);
          };
        case 2:
          return function(r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function(r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e, r) {
    var n = r(18).f,
      i = r(16),
      o = r(8)('toStringTag');
    t.exports = function(t, e, r) {
      t &&
        !i((t = r ? t : t.prototype), o) &&
        n(t, o, { configurable: !0, value: e });
    };
  },
  function(t, e, r) {
    var n = r(92),
      i = r(73);
    t.exports =
      Object.keys ||
      function(t) {
        return n(t, i);
      };
  },
  function(t, e) {
    t.exports = !1;
  },
  function(t, e, r) {
    var n = r(40),
      i = r(56),
      o = n('keys');
    t.exports = function(t) {
      return o[t] || (o[t] = i(t));
    };
  },
  function(t, e) {
    var r = 0,
      n = Math.random();
    t.exports = function(t) {
      return 'Symbol('.concat(
        void 0 === t ? '' : t,
        ')_',
        (++r + n).toString(36)
      );
    };
  },
  function(t, e, r) {
    var n = r(109),
      i = r(78).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return n(t, i);
      };
  },
  function(t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  function(t, e, r) {
    var n = r(6).f,
      i = r(5),
      o = r(3)('toStringTag');
    t.exports = function(t, e, r) {
      t &&
        !i((t = r ? t : t.prototype), o) &&
        n(t, o, { configurable: !0, value: e });
    };
  },
  function(t, e, r) {
    var n = r(109),
      i = r(78);
    t.exports =
      Object.keys ||
      function(t) {
        return n(t, i);
      };
  },
  function(t, e, r) {
    var n = r(38);
    t.exports =
      Array.isArray ||
      function(t) {
        return 'Array' == n(t);
      };
  },
  function(t, e, r) {
    var n = r(119);
    t.exports = function(t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function() {
            return t.call(e);
          };
        case 1:
          return function(r) {
            return t.call(e, r);
          };
        case 2:
          return function(r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function(r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e, r) {
    var n = r(2),
      i = r(14),
      o = r(60);
    n(
      {
        target: 'Object',
        stat: !0,
        forced: r(1)(function() {
          o(1);
        }),
      },
      {
        keys: function(t) {
          return o(i(t));
        },
      }
    );
  },
  function(t, e, r) {
    'use strict';
    (function(t) {
      var r = 'object' == typeof t && t && t.Object === Object && t;
      e.a = r;
    }.call(this, r(103)));
  },
  function(t, e, r) {
    'use strict';
    (function(t) {
      var n = r(4),
        i = r(145),
        o =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        a = o && 'object' == typeof t && t && !t.nodeType && t,
        l = a && a.exports === o ? n.a.Buffer : void 0,
        s = (l ? l.isBuffer : void 0) || i.a;
      e.a = s;
    }.call(this, r(86)(t)));
  },
  function(t, e, r) {
    var n = r(23);
    t.exports = function(t, e) {
      if (!n(t)) return t;
      var r, i;
      if (e && 'function' == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      if ('function' == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
      if (!e && 'function' == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e, r) {
    var n = r(34)('meta'),
      i = r(23),
      o = r(16),
      a = r(18).f,
      l = 0,
      s =
        Object.isExtensible ||
        function() {
          return !0;
        },
      u = !r(33)(function() {
        return s(Object.preventExtensions({}));
      }),
      c = function(t) {
        a(t, n, { value: { i: 'O' + ++l, w: {} } });
      },
      f = (t.exports = {
        KEY: n,
        NEED: !1,
        fastKey: function(t, e) {
          if (!i(t))
            return 'symbol' == typeof t
              ? t
              : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, n)) {
            if (!s(t)) return 'F';
            if (!e) return 'E';
            c(t);
          }
          return t[n].i;
        },
        getWeak: function(t, e) {
          if (!o(t, n)) {
            if (!s(t)) return !0;
            if (!e) return !1;
            c(t);
          }
          return t[n].w;
        },
        onFreeze: function(t) {
          return u && f.NEED && s(t) && !o(t, n) && c(t), t;
        },
      });
  },
  function(t, e, r) {
    var n = r(7),
      i = n['__core-js_shared__'] || (n['__core-js_shared__'] = {});
    t.exports = function(t) {
      return i[t] || (i[t] = {});
    };
  },
  function(t, e) {
    t.exports = !1;
  },
  function(t, e) {
    var r = {}.toString;
    t.exports = function(t) {
      return r.call(t).slice(8, -1);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function(t, e, r) {
    var n = r(68)('keys'),
      i = r(34);
    t.exports = function(t) {
      return n[t] || (n[t] = i(t));
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
  function(t, e, r) {
    var n = r(22),
      i = r(157),
      o = r(73),
      a = r(72)('IE_PROTO'),
      l = function() {},
      s = function() {
        var t,
          e = r(90)('iframe'),
          n = o.length;
        for (
          e.style.display = 'none',
            r(158).appendChild(e),
            e.src = 'javascript:',
            (t = e.contentWindow.document).open(),
            t.write('<script>document.F=Object</script>'),
            t.close(),
            s = t.F;
          n--;

        )
          delete s.prototype[o[n]];
        return s();
      };
    t.exports =
      Object.create ||
      function(t, e) {
        var r;
        return (
          null !== t
            ? ((l.prototype = n(t)),
              (r = new l()),
              (l.prototype = null),
              (r[a] = t))
            : (r = s()),
          void 0 === e ? r : i(r, e)
        );
      };
  },
  function(t, e, r) {
    'use strict';
    var n = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !n.call({ 1: 2 }, 1);
    e.f = o
      ? function(t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  function(t, e, r) {
    var n = r(0),
      i = r(12);
    t.exports = function(t, e) {
      try {
        i(n, t, e);
      } catch (r) {
        n[t] = e;
      }
      return e;
    };
  },
  function(t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ];
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function(t, e, r) {
    var n = r(1),
      i = /#|\.prototype\./,
      o = function(t, e) {
        var r = l[a(t)];
        return r == u || (r != s && ('function' == typeof e ? n(e) : !!e));
      },
      a = (o.normalize = function(t) {
        return String(t)
          .replace(i, '.')
          .toLowerCase();
      }),
      l = (o.data = {}),
      s = (o.NATIVE = 'N'),
      u = (o.POLYFILL = 'P');
    t.exports = o;
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(186),
      o = r(117),
      a = r(118),
      l = r(59),
      s = r(12),
      u = r(13),
      c = r(3),
      f = r(54),
      d = r(45),
      h = r(116),
      p = h.IteratorPrototype,
      v = h.BUGGY_SAFARI_ITERATORS,
      g = c('iterator'),
      m = function() {
        return this;
      };
    t.exports = function(t, e, r, c, h, y, b) {
      i(r, e, c);
      var x,
        w,
        S,
        C = function(t) {
          if (t === h && M) return M;
          if (!v && t in L) return L[t];
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function() {
                return new r(this, t);
              };
          }
          return function() {
            return new r(this);
          };
        },
        k = e + ' Iterator',
        T = !1,
        L = t.prototype,
        O = L[g] || L['@@iterator'] || (h && L[h]),
        M = (!v && O) || C(h),
        _ = ('Array' == e && L.entries) || O;
      if (
        (_ &&
          ((x = o(_.call(new t()))),
          p !== Object.prototype &&
            x.next &&
            (f ||
              o(x) === p ||
              (a ? a(x, p) : 'function' != typeof x[g] && s(x, g, m)),
            l(x, k, !0, !0),
            f && (d[k] = m))),
        'values' == h &&
          O &&
          'values' !== O.name &&
          ((T = !0),
          (M = function() {
            return O.call(this);
          })),
        (f && !b) || L[g] === M || s(L, g, M),
        (d[e] = M),
        h)
      )
        if (
          ((w = {
            values: C('values'),
            keys: y ? M : C('keys'),
            entries: C('entries'),
          }),
          b)
        )
          for (S in w) (!v && !T && S in L) || u(L, S, w[S]);
        else n({ target: e, proto: !0, forced: v || T }, w);
      return w;
    };
  },
  function(t, e, r) {
    var n = r(1),
      i = r(3)('species');
    t.exports = function(t) {
      return !n(function() {
        var e = [];
        return (
          ((e.constructor = {})[i] = function() {
            return { foo: 1 };
          }),
          1 !== e[t](Boolean).foo
        );
      });
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(84),
      o = r(82),
      a = i(2);
    n(
      { target: 'Array', proto: !0, forced: !o('filter') },
      {
        filter: function(t) {
          return a(this, t, arguments[1]);
        },
      }
    );
  },
  function(t, e, r) {
    var n = r(62),
      i = r(104),
      o = r(14),
      a = r(20),
      l = r(125);
    t.exports = function(t, e) {
      var r = 1 == t,
        s = 2 == t,
        u = 3 == t,
        c = 4 == t,
        f = 6 == t,
        d = 5 == t || f,
        h = e || l;
      return function(e, l, p) {
        for (
          var v,
            g,
            m = o(e),
            y = i(m),
            b = n(l, p, 3),
            x = a(y.length),
            w = 0,
            S = r ? h(e, x) : s ? h(e, 0) : void 0;
          x > w;
          w++
        )
          if ((d || w in y) && ((g = b((v = y[w]), w, m)), t))
            if (r) S[w] = g;
            else if (g)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return w;
                case 2:
                  S.push(v);
              }
            else if (c) return !1;
        return f ? -1 : u || c ? c : S;
      };
    };
  },
  function(t, e, r) {
    'use strict';
    var n,
      i,
      o = r(140),
      a = RegExp.prototype.exec,
      l = String.prototype.replace,
      s = a,
      u = ((n = /a/),
      (i = /b*/g),
      a.call(n, 'a'),
      a.call(i, 'a'),
      0 !== n.lastIndex || 0 !== i.lastIndex),
      c = void 0 !== /()??/.exec('')[1];
    (u || c) &&
      (s = function(t) {
        var e,
          r,
          n,
          i,
          s = this;
        return (
          c && (r = new RegExp('^' + s.source + '$(?!\\s)', o.call(s))),
          u && (e = s.lastIndex),
          (n = a.call(s, t)),
          u && n && (s.lastIndex = s.global ? n.index + n[0].length : e),
          c &&
            n &&
            n.length > 1 &&
            l.call(n[0], r, function() {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (n[i] = void 0);
            }),
          n
        );
      }),
      (t.exports = s);
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
  function(t, e, r) {
    t.exports = (function() {
      'use strict';
      var t = navigator.userAgent,
        e = navigator.platform,
        r = /gecko\/\d/i.test(t),
        n = /MSIE \d/.test(t),
        i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(t),
        o = /Edge\/(\d+)/.exec(t),
        a = n || i || o,
        l = a && (n ? document.documentMode || 6 : +(o || i)[1]),
        s = !o && /WebKit\//.test(t),
        u = s && /Qt\/\d+\.\d+/.test(t),
        c = !o && /Chrome\//.test(t),
        f = /Opera\//.test(t),
        d = /Apple Computer/.test(navigator.vendor),
        h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(t),
        p = /PhantomJS/.test(t),
        v = !o && /AppleWebKit/.test(t) && /Mobile\/\w+/.test(t),
        g = /Android/.test(t),
        m =
          v || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(t),
        y = v || /Mac/.test(e),
        b = /\bCrOS\b/.test(t),
        x = /win/i.test(e),
        w = f && t.match(/Version\/(\d*\.\d*)/);
      w && (w = Number(w[1])), w && w >= 15 && ((f = !1), (s = !0));
      var S = y && (u || (f && (null == w || w < 12.11))),
        C = r || (a && l >= 9);
      function k(t) {
        return new RegExp('(^|\\s)' + t + '(?:$|\\s)\\s*');
      }
      var T,
        L = function(t, e) {
          var r = t.className,
            n = k(e).exec(r);
          if (n) {
            var i = r.slice(n.index + n[0].length);
            t.className = r.slice(0, n.index) + (i ? n[1] + i : '');
          }
        };
      function O(t) {
        for (var e = t.childNodes.length; e > 0; --e)
          t.removeChild(t.firstChild);
        return t;
      }
      function M(t, e) {
        return O(t).appendChild(e);
      }
      function _(t, e, r, n) {
        var i = document.createElement(t);
        if (
          (r && (i.className = r),
          n && (i.style.cssText = n),
          'string' == typeof e)
        )
          i.appendChild(document.createTextNode(e));
        else if (e) for (var o = 0; o < e.length; ++o) i.appendChild(e[o]);
        return i;
      }
      function A(t, e, r, n) {
        var i = _(t, e, r, n);
        return i.setAttribute('role', 'presentation'), i;
      }
      function E(t, e) {
        if ((3 == e.nodeType && (e = e.parentNode), t.contains))
          return t.contains(e);
        do {
          if ((11 == e.nodeType && (e = e.host), e == t)) return !0;
        } while ((e = e.parentNode));
      }
      function N() {
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
      function P(t, e) {
        var r = t.className;
        k(e).test(r) || (t.className += (r ? ' ' : '') + e);
      }
      function j(t, e) {
        for (var r = t.split(' '), n = 0; n < r.length; n++)
          r[n] && !k(r[n]).test(e) && (e += ' ' + r[n]);
        return e;
      }
      T = document.createRange
        ? function(t, e, r, n) {
            var i = document.createRange();
            return i.setEnd(n || t, r), i.setStart(t, e), i;
          }
        : function(t, e, r) {
            var n = document.body.createTextRange();
            try {
              n.moveToElementText(t.parentNode);
            } catch (t) {
              return n;
            }
            return (
              n.collapse(!0),
              n.moveEnd('character', r),
              n.moveStart('character', e),
              n
            );
          };
      var D = function(t) {
        t.select();
      };
      function I(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function() {
          return t.apply(null, e);
        };
      }
      function F(t, e, r) {
        for (var n in (e || (e = {}), t))
          !t.hasOwnProperty(n) ||
            (!1 === r && e.hasOwnProperty(n)) ||
            (e[n] = t[n]);
        return e;
      }
      function W(t, e, r, n, i) {
        null == e && -1 == (e = t.search(/[^\s\u00a0]/)) && (e = t.length);
        for (var o = n || 0, a = i || 0; ; ) {
          var l = t.indexOf('\t', o);
          if (l < 0 || l >= e) return a + (e - o);
          (a += l - o), (a += r - (a % r)), (o = l + 1);
        }
      }
      v
        ? (D = function(t) {
            (t.selectionStart = 0), (t.selectionEnd = t.value.length);
          })
        : a &&
          (D = function(t) {
            try {
              t.select();
            } catch (t) {}
          });
      var z = function() {
        this.id = null;
      };
      function H(t, e) {
        for (var r = 0; r < t.length; ++r) if (t[r] == e) return r;
        return -1;
      }
      z.prototype.set = function(t, e) {
        clearTimeout(this.id), (this.id = setTimeout(e, t));
      };
      var R = 30,
        B = {
          toString: function() {
            return 'CodeMirror.Pass';
          },
        },
        G = { scroll: !1 },
        V = { origin: '*mouse' },
        U = { origin: '+move' };
      function $(t, e, r) {
        for (var n = 0, i = 0; ; ) {
          var o = t.indexOf('\t', n);
          -1 == o && (o = t.length);
          var a = o - n;
          if (o == t.length || i + a >= e) return n + Math.min(a, e - i);
          if (((i += o - n), (n = o + 1), (i += r - (i % r)) >= e)) return n;
        }
      }
      var K = [''];
      function q(t) {
        for (; K.length <= t; ) K.push(Y(K) + ' ');
        return K[t];
      }
      function Y(t) {
        return t[t.length - 1];
      }
      function X(t, e) {
        for (var r = [], n = 0; n < t.length; n++) r[n] = e(t[n], n);
        return r;
      }
      function Z() {}
      function J(t, e) {
        var r;
        return (
          Object.create
            ? (r = Object.create(t))
            : ((Z.prototype = t), (r = new Z())),
          e && F(e, r),
          r
        );
      }
      var Q = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function tt(t) {
        return (
          /\w/.test(t) ||
          (t > '' && (t.toUpperCase() != t.toLowerCase() || Q.test(t)))
        );
      }
      function et(t, e) {
        return e
          ? !!(e.source.indexOf('\\w') > -1 && tt(t)) || e.test(t)
          : tt(t);
      }
      function rt(t) {
        for (var e in t) if (t.hasOwnProperty(e) && t[e]) return !1;
        return !0;
      }
      var nt = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function it(t) {
        return t.charCodeAt(0) >= 768 && nt.test(t);
      }
      function ot(t, e, r) {
        for (; (r < 0 ? e > 0 : e < t.length) && it(t.charAt(e)); ) e += r;
        return e;
      }
      function at(t, e, r) {
        for (var n = e > r ? -1 : 1; ; ) {
          if (e == r) return e;
          var i = (e + r) / 2,
            o = n < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == e) return t(o) ? e : r;
          t(o) ? (r = o) : (e = o + n);
        }
      }
      var lt = null;
      function st(t, e, r) {
        var n;
        lt = null;
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.from < e && o.to > e) return i;
          o.to == e && (o.from != o.to && 'before' == r ? (n = i) : (lt = i)),
            o.from == e &&
              (o.from != o.to && 'before' != r ? (n = i) : (lt = i));
        }
        return null != n ? n : lt;
      }
      var ut = (function() {
        var t =
            'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
          e =
            'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          n = /[stwN]/,
          i = /[LRr]/,
          o = /[Lb1n]/,
          a = /[1n]/;
        function l(t, e, r) {
          (this.level = t), (this.from = e), (this.to = r);
        }
        return function(s, u) {
          var c,
            f = 'ltr' == u ? 'L' : 'R';
          if (0 == s.length || ('ltr' == u && !r.test(s))) return !1;
          for (var d = s.length, h = [], p = 0; p < d; ++p)
            h.push(
              (c = s.charCodeAt(p)) <= 247
                ? t.charAt(c)
                : 1424 <= c && c <= 1524
                ? 'R'
                : 1536 <= c && c <= 1785
                ? e.charAt(c - 1536)
                : 1774 <= c && c <= 2220
                ? 'r'
                : 8192 <= c && c <= 8203
                ? 'w'
                : 8204 == c
                ? 'b'
                : 'L'
            );
          for (var v = 0, g = f; v < d; ++v) {
            var m = h[v];
            'm' == m ? (h[v] = g) : (g = m);
          }
          for (var y = 0, b = f; y < d; ++y) {
            var x = h[y];
            '1' == x && 'r' == b
              ? (h[y] = 'n')
              : i.test(x) && ((b = x), 'r' == x && (h[y] = 'R'));
          }
          for (var w = 1, S = h[0]; w < d - 1; ++w) {
            var C = h[w];
            '+' == C && '1' == S && '1' == h[w + 1]
              ? (h[w] = '1')
              : ',' != C ||
                S != h[w + 1] ||
                ('1' != S && 'n' != S) ||
                (h[w] = S),
              (S = C);
          }
          for (var k = 0; k < d; ++k) {
            var T = h[k];
            if (',' == T) h[k] = 'N';
            else if ('%' == T) {
              var L = void 0;
              for (L = k + 1; L < d && '%' == h[L]; ++L);
              for (
                var O =
                    (k && '!' == h[k - 1]) || (L < d && '1' == h[L])
                      ? '1'
                      : 'N',
                  M = k;
                M < L;
                ++M
              )
                h[M] = O;
              k = L - 1;
            }
          }
          for (var _ = 0, A = f; _ < d; ++_) {
            var E = h[_];
            'L' == A && '1' == E ? (h[_] = 'L') : i.test(E) && (A = E);
          }
          for (var N = 0; N < d; ++N)
            if (n.test(h[N])) {
              var P = void 0;
              for (P = N + 1; P < d && n.test(h[P]); ++P);
              for (
                var j = 'L' == (N ? h[N - 1] : f),
                  D = 'L' == (P < d ? h[P] : f),
                  I = j == D ? (j ? 'L' : 'R') : f,
                  F = N;
                F < P;
                ++F
              )
                h[F] = I;
              N = P - 1;
            }
          for (var W, z = [], H = 0; H < d; )
            if (o.test(h[H])) {
              var R = H;
              for (++H; H < d && o.test(h[H]); ++H);
              z.push(new l(0, R, H));
            } else {
              var B = H,
                G = z.length;
              for (++H; H < d && 'L' != h[H]; ++H);
              for (var V = B; V < H; )
                if (a.test(h[V])) {
                  B < V && z.splice(G, 0, new l(1, B, V));
                  var U = V;
                  for (++V; V < H && a.test(h[V]); ++V);
                  z.splice(G, 0, new l(2, U, V)), (B = V);
                } else ++V;
              B < H && z.splice(G, 0, new l(1, B, H));
            }
          return (
            'ltr' == u &&
              (1 == z[0].level &&
                (W = s.match(/^\s+/)) &&
                ((z[0].from = W[0].length),
                z.unshift(new l(0, 0, W[0].length))),
              1 == Y(z).level &&
                (W = s.match(/\s+$/)) &&
                ((Y(z).to -= W[0].length),
                z.push(new l(0, d - W[0].length, d)))),
            'rtl' == u ? z.reverse() : z
          );
        };
      })();
      function ct(t, e) {
        var r = t.order;
        return null == r && (r = t.order = ut(t.text, e)), r;
      }
      var ft = [],
        dt = function(t, e, r) {
          if (t.addEventListener) t.addEventListener(e, r, !1);
          else if (t.attachEvent) t.attachEvent('on' + e, r);
          else {
            var n = t._handlers || (t._handlers = {});
            n[e] = (n[e] || ft).concat(r);
          }
        };
      function ht(t, e) {
        return (t._handlers && t._handlers[e]) || ft;
      }
      function pt(t, e, r) {
        if (t.removeEventListener) t.removeEventListener(e, r, !1);
        else if (t.detachEvent) t.detachEvent('on' + e, r);
        else {
          var n = t._handlers,
            i = n && n[e];
          if (i) {
            var o = H(i, r);
            o > -1 && (n[e] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function vt(t, e) {
        var r = ht(t, e);
        if (r.length)
          for (
            var n = Array.prototype.slice.call(arguments, 2), i = 0;
            i < r.length;
            ++i
          )
            r[i].apply(null, n);
      }
      function gt(t, e, r) {
        return (
          'string' == typeof e &&
            (e = {
              type: e,
              preventDefault: function() {
                this.defaultPrevented = !0;
              },
            }),
          vt(t, r || e.type, t, e),
          St(e) || e.codemirrorIgnore
        );
      }
      function mt(t) {
        var e = t._handlers && t._handlers.cursorActivity;
        if (e)
          for (
            var r =
                t.curOp.cursorActivityHandlers ||
                (t.curOp.cursorActivityHandlers = []),
              n = 0;
            n < e.length;
            ++n
          )
            -1 == H(r, e[n]) && r.push(e[n]);
      }
      function yt(t, e) {
        return ht(t, e).length > 0;
      }
      function bt(t) {
        (t.prototype.on = function(t, e) {
          dt(this, t, e);
        }),
          (t.prototype.off = function(t, e) {
            pt(this, t, e);
          });
      }
      function xt(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function wt(t) {
        t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
      }
      function St(t) {
        return null != t.defaultPrevented
          ? t.defaultPrevented
          : 0 == t.returnValue;
      }
      function Ct(t) {
        xt(t), wt(t);
      }
      function kt(t) {
        return t.target || t.srcElement;
      }
      function Tt(t) {
        var e = t.which;
        return (
          null == e &&
            (1 & t.button
              ? (e = 1)
              : 2 & t.button
              ? (e = 3)
              : 4 & t.button && (e = 2)),
          y && t.ctrlKey && 1 == e && (e = 3),
          e
        );
      }
      var Lt,
        Ot,
        Mt = (function() {
          if (a && l < 9) return !1;
          var t = _('div');
          return 'draggable' in t || 'dragDrop' in t;
        })();
      function _t(t) {
        if (null == Lt) {
          var e = _('span', '​');
          M(t, _('span', [e, document.createTextNode('x')])),
            0 != t.firstChild.offsetHeight &&
              (Lt = e.offsetWidth <= 1 && e.offsetHeight > 2 && !(a && l < 8));
        }
        var r = Lt
          ? _('span', '​')
          : _(
              'span',
              ' ',
              null,
              'display: inline-block; width: 1px; margin-right: -1px'
            );
        return r.setAttribute('cm-text', ''), r;
      }
      function At(t) {
        if (null != Ot) return Ot;
        var e = M(t, document.createTextNode('AخA')),
          r = T(e, 0, 1).getBoundingClientRect(),
          n = T(e, 1, 2).getBoundingClientRect();
        return O(t), !(!r || r.left == r.right) && (Ot = n.right - r.right < 3);
      }
      var Et,
        Nt =
          3 != '\n\nb'.split(/\n/).length
            ? function(t) {
                for (var e = 0, r = [], n = t.length; e <= n; ) {
                  var i = t.indexOf('\n', e);
                  -1 == i && (i = t.length);
                  var o = t.slice(e, '\r' == t.charAt(i - 1) ? i - 1 : i),
                    a = o.indexOf('\r');
                  -1 != a
                    ? (r.push(o.slice(0, a)), (e += a + 1))
                    : (r.push(o), (e = i + 1));
                }
                return r;
              }
            : function(t) {
                return t.split(/\r\n?|\n/);
              },
        Pt = window.getSelection
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
        jt =
          'oncopy' in (Et = _('div')) ||
          (Et.setAttribute('oncopy', 'return;'),
          'function' == typeof Et.oncopy),
        Dt = null,
        It = {},
        Ft = {};
      function Wt(t) {
        if ('string' == typeof t && Ft.hasOwnProperty(t)) t = Ft[t];
        else if (t && 'string' == typeof t.name && Ft.hasOwnProperty(t.name)) {
          var e = Ft[t.name];
          'string' == typeof e && (e = { name: e }),
            ((t = J(e, t)).name = e.name);
        } else {
          if ('string' == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
            return Wt('application/xml');
          if ('string' == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t))
            return Wt('application/json');
        }
        return 'string' == typeof t ? { name: t } : t || { name: 'null' };
      }
      function zt(t, e) {
        e = Wt(e);
        var r = It[e.name];
        if (!r) return zt(t, 'text/plain');
        var n = r(t, e);
        if (Ht.hasOwnProperty(e.name)) {
          var i = Ht[e.name];
          for (var o in i)
            i.hasOwnProperty(o) &&
              (n.hasOwnProperty(o) && (n['_' + o] = n[o]), (n[o] = i[o]));
        }
        if (
          ((n.name = e.name),
          e.helperType && (n.helperType = e.helperType),
          e.modeProps)
        )
          for (var a in e.modeProps) n[a] = e.modeProps[a];
        return n;
      }
      var Ht = {};
      function Rt(t, e) {
        var r = Ht.hasOwnProperty(t) ? Ht[t] : (Ht[t] = {});
        F(e, r);
      }
      function Bt(t, e) {
        if (!0 === e) return e;
        if (t.copyState) return t.copyState(e);
        var r = {};
        for (var n in e) {
          var i = e[n];
          i instanceof Array && (i = i.concat([])), (r[n] = i);
        }
        return r;
      }
      function Gt(t, e) {
        for (var r; t.innerMode && (r = t.innerMode(e)) && r.mode != t; )
          (e = r.state), (t = r.mode);
        return r || { mode: t, state: e };
      }
      function Vt(t, e, r) {
        return !t.startState || t.startState(e, r);
      }
      var Ut = function(t, e, r) {
        (this.pos = this.start = 0),
          (this.string = t),
          (this.tabSize = e || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0),
          (this.lineOracle = r);
      };
      function $t(t, e) {
        if ((e -= t.first) < 0 || e >= t.size)
          throw new Error(
            'There is no line ' + (e + t.first) + ' in the document.'
          );
        for (var r = t; !r.lines; )
          for (var n = 0; ; ++n) {
            var i = r.children[n],
              o = i.chunkSize();
            if (e < o) {
              r = i;
              break;
            }
            e -= o;
          }
        return r.lines[e];
      }
      function Kt(t, e, r) {
        var n = [],
          i = e.line;
        return (
          t.iter(e.line, r.line + 1, function(t) {
            var o = t.text;
            i == r.line && (o = o.slice(0, r.ch)),
              i == e.line && (o = o.slice(e.ch)),
              n.push(o),
              ++i;
          }),
          n
        );
      }
      function qt(t, e, r) {
        var n = [];
        return (
          t.iter(e, r, function(t) {
            n.push(t.text);
          }),
          n
        );
      }
      function Yt(t, e) {
        var r = e - t.height;
        if (r) for (var n = t; n; n = n.parent) n.height += r;
      }
      function Xt(t) {
        if (null == t.parent) return null;
        for (
          var e = t.parent, r = H(e.lines, t), n = e.parent;
          n;
          e = n, n = n.parent
        )
          for (var i = 0; n.children[i] != e; ++i)
            r += n.children[i].chunkSize();
        return r + e.first;
      }
      function Zt(t, e) {
        var r = t.first;
        t: do {
          for (var n = 0; n < t.children.length; ++n) {
            var i = t.children[n],
              o = i.height;
            if (e < o) {
              t = i;
              continue t;
            }
            (e -= o), (r += i.chunkSize());
          }
          return r;
        } while (!t.lines);
        for (var a = 0; a < t.lines.length; ++a) {
          var l = t.lines[a],
            s = l.height;
          if (e < s) break;
          e -= s;
        }
        return r + a;
      }
      function Jt(t, e) {
        return e >= t.first && e < t.first + t.size;
      }
      function Qt(t, e) {
        return String(t.lineNumberFormatter(e + t.firstLineNumber));
      }
      function te(t, e, r) {
        if ((void 0 === r && (r = null), !(this instanceof te)))
          return new te(t, e, r);
        (this.line = t), (this.ch = e), (this.sticky = r);
      }
      function ee(t, e) {
        return t.line - e.line || t.ch - e.ch;
      }
      function re(t, e) {
        return t.sticky == e.sticky && 0 == ee(t, e);
      }
      function ne(t) {
        return te(t.line, t.ch);
      }
      function ie(t, e) {
        return ee(t, e) < 0 ? e : t;
      }
      function oe(t, e) {
        return ee(t, e) < 0 ? t : e;
      }
      function ae(t, e) {
        return Math.max(t.first, Math.min(e, t.first + t.size - 1));
      }
      function le(t, e) {
        if (e.line < t.first) return te(t.first, 0);
        var r = t.first + t.size - 1;
        return e.line > r
          ? te(r, $t(t, r).text.length)
          : (function(t, e) {
              var r = t.ch;
              return null == r || r > e
                ? te(t.line, e)
                : r < 0
                ? te(t.line, 0)
                : t;
            })(e, $t(t, e.line).text.length);
      }
      function se(t, e) {
        for (var r = [], n = 0; n < e.length; n++) r[n] = le(t, e[n]);
        return r;
      }
      (Ut.prototype.eol = function() {
        return this.pos >= this.string.length;
      }),
        (Ut.prototype.sol = function() {
          return this.pos == this.lineStart;
        }),
        (Ut.prototype.peek = function() {
          return this.string.charAt(this.pos) || void 0;
        }),
        (Ut.prototype.next = function() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }),
        (Ut.prototype.eat = function(t) {
          var e = this.string.charAt(this.pos);
          if ('string' == typeof t ? e == t : e && (t.test ? t.test(e) : t(e)))
            return ++this.pos, e;
        }),
        (Ut.prototype.eatWhile = function(t) {
          for (var e = this.pos; this.eat(t); );
          return this.pos > e;
        }),
        (Ut.prototype.eatSpace = function() {
          for (
            var t = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos;
          return this.pos > t;
        }),
        (Ut.prototype.skipToEnd = function() {
          this.pos = this.string.length;
        }),
        (Ut.prototype.skipTo = function(t) {
          var e = this.string.indexOf(t, this.pos);
          if (e > -1) return (this.pos = e), !0;
        }),
        (Ut.prototype.backUp = function(t) {
          this.pos -= t;
        }),
        (Ut.prototype.column = function() {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = W(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? W(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        }),
        (Ut.prototype.indentation = function() {
          return (
            W(this.string, null, this.tabSize) -
            (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0)
          );
        }),
        (Ut.prototype.match = function(t, e, r) {
          if ('string' != typeof t) {
            var n = this.string.slice(this.pos).match(t);
            return n && n.index > 0
              ? null
              : (n && !1 !== e && (this.pos += n[0].length), n);
          }
          var i = function(t) {
              return r ? t.toLowerCase() : t;
            },
            o = this.string.substr(this.pos, t.length);
          if (i(o) == i(t)) return !1 !== e && (this.pos += t.length), !0;
        }),
        (Ut.prototype.current = function() {
          return this.string.slice(this.start, this.pos);
        }),
        (Ut.prototype.hideFirstChars = function(t, e) {
          this.lineStart += t;
          try {
            return e();
          } finally {
            this.lineStart -= t;
          }
        }),
        (Ut.prototype.lookAhead = function(t) {
          var e = this.lineOracle;
          return e && e.lookAhead(t);
        }),
        (Ut.prototype.baseToken = function() {
          var t = this.lineOracle;
          return t && t.baseToken(this.pos);
        });
      var ue = function(t, e) {
          (this.state = t), (this.lookAhead = e);
        },
        ce = function(t, e, r, n) {
          (this.state = e),
            (this.doc = t),
            (this.line = r),
            (this.maxLookAhead = n || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
        };
      function fe(t, e, r, n) {
        var i = [t.state.modeGen],
          o = {};
        xe(
          t,
          e.text,
          t.doc.mode,
          r,
          function(t, e) {
            return i.push(t, e);
          },
          o,
          n
        );
        for (
          var a = r.state,
            l = function(n) {
              r.baseTokens = i;
              var l = t.state.overlays[n],
                s = 1,
                u = 0;
              (r.state = !0),
                xe(
                  t,
                  e.text,
                  l.mode,
                  r,
                  function(t, e) {
                    for (var r = s; u < t; ) {
                      var n = i[s];
                      n > t && i.splice(s, 1, t, i[s + 1], n),
                        (s += 2),
                        (u = Math.min(t, n));
                    }
                    if (e)
                      if (l.opaque)
                        i.splice(r, s - r, t, 'overlay ' + e), (s = r + 2);
                      else
                        for (; r < s; r += 2) {
                          var o = i[r + 1];
                          i[r + 1] = (o ? o + ' ' : '') + 'overlay ' + e;
                        }
                  },
                  o
                ),
                (r.state = a),
                (r.baseTokens = null),
                (r.baseTokenPos = 1);
            },
            s = 0;
          s < t.state.overlays.length;
          ++s
        )
          l(s);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function de(t, e, r) {
        if (!e.styles || e.styles[0] != t.state.modeGen) {
          var n = he(t, Xt(e)),
            i =
              e.text.length > t.options.maxHighlightLength &&
              Bt(t.doc.mode, n.state),
            o = fe(t, e, n);
          i && (n.state = i),
            (e.stateAfter = n.save(!i)),
            (e.styles = o.styles),
            o.classes
              ? (e.styleClasses = o.classes)
              : e.styleClasses && (e.styleClasses = null),
            r === t.doc.highlightFrontier &&
              (t.doc.modeFrontier = Math.max(
                t.doc.modeFrontier,
                ++t.doc.highlightFrontier
              ));
        }
        return e.styles;
      }
      function he(t, e, r) {
        var n = t.doc,
          i = t.display;
        if (!n.mode.startState) return new ce(n, !0, e);
        var o = (function(t, e, r) {
            for (
              var n,
                i,
                o = t.doc,
                a = r ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100),
                l = e;
              l > a;
              --l
            ) {
              if (l <= o.first) return o.first;
              var s = $t(o, l - 1),
                u = s.stateAfter;
              if (
                u &&
                (!r ||
                  l + (u instanceof ue ? u.lookAhead : 0) <= o.modeFrontier)
              )
                return l;
              var c = W(s.text, null, t.options.tabSize);
              (null == i || n > c) && ((i = l - 1), (n = c));
            }
            return i;
          })(t, e, r),
          a = o > n.first && $t(n, o - 1).stateAfter,
          l = a ? ce.fromSaved(n, a, o) : new ce(n, Vt(n.mode), o);
        return (
          n.iter(o, e, function(r) {
            pe(t, r.text, l);
            var n = l.line;
            (r.stateAfter =
              n == e - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo)
                ? l.save()
                : null),
              l.nextLine();
          }),
          r && (n.modeFrontier = l.line),
          l
        );
      }
      function pe(t, e, r, n) {
        var i = t.doc.mode,
          o = new Ut(e, t.options.tabSize, r);
        for (o.start = o.pos = n || 0, '' == e && ve(i, r.state); !o.eol(); )
          ge(i, o, r.state), (o.start = o.pos);
      }
      function ve(t, e) {
        if (t.blankLine) return t.blankLine(e);
        if (t.innerMode) {
          var r = Gt(t, e);
          return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
        }
      }
      function ge(t, e, r, n) {
        for (var i = 0; i < 10; i++) {
          n && (n[0] = Gt(t, r).mode);
          var o = t.token(e, r);
          if (e.pos > e.start) return o;
        }
        throw new Error('Mode ' + t.name + ' failed to advance stream.');
      }
      (ce.prototype.lookAhead = function(t) {
        var e = this.doc.getLine(this.line + t);
        return null != e && t > this.maxLookAhead && (this.maxLookAhead = t), e;
      }),
        (ce.prototype.baseToken = function(t) {
          if (!this.baseTokens) return null;
          for (; this.baseTokens[this.baseTokenPos] <= t; )
            this.baseTokenPos += 2;
          var e = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: e && e.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - t,
          };
        }),
        (ce.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (ce.fromSaved = function(t, e, r) {
          return e instanceof ue
            ? new ce(t, Bt(t.mode, e.state), r, e.lookAhead)
            : new ce(t, Bt(t.mode, e), r);
        }),
        (ce.prototype.save = function(t) {
          var e = !1 !== t ? Bt(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ue(e, this.maxLookAhead) : e;
        });
      var me = function(t, e, r) {
        (this.start = t.start),
          (this.end = t.pos),
          (this.string = t.current()),
          (this.type = e || null),
          (this.state = r);
      };
      function ye(t, e, r, n) {
        var i,
          o = t.doc,
          a = o.mode;
        e = le(o, e);
        var l,
          s = $t(o, e.line),
          u = he(t, e.line, r),
          c = new Ut(s.text, t.options.tabSize, u);
        for (n && (l = []); (n || c.pos < e.ch) && !c.eol(); )
          (c.start = c.pos),
            (i = ge(a, c, u.state)),
            n && l.push(new me(c, i, Bt(o.mode, u.state)));
        return n ? l : new me(c, i, u.state);
      }
      function be(t, e) {
        if (t)
          for (;;) {
            var r = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!r) break;
            t = t.slice(0, r.index) + t.slice(r.index + r[0].length);
            var n = r[1] ? 'bgClass' : 'textClass';
            null == e[n]
              ? (e[n] = r[2])
              : new RegExp('(?:^|s)' + r[2] + '(?:$|s)').test(e[n]) ||
                (e[n] += ' ' + r[2]);
          }
        return t;
      }
      function xe(t, e, r, n, i, o, a) {
        var l = r.flattenSpans;
        null == l && (l = t.options.flattenSpans);
        var s,
          u = 0,
          c = null,
          f = new Ut(e, t.options.tabSize, n),
          d = t.options.addModeClass && [null];
        for ('' == e && be(ve(r, n.state), o); !f.eol(); ) {
          if (
            (f.pos > t.options.maxHighlightLength
              ? ((l = !1),
                a && pe(t, e, n, f.pos),
                (f.pos = e.length),
                (s = null))
              : (s = be(ge(r, f, n.state, d), o)),
            d)
          ) {
            var h = d[0].name;
            h && (s = 'm-' + (s ? h + ' ' + s : h));
          }
          if (!l || c != s) {
            for (; u < f.start; ) (u = Math.min(f.start, u + 5e3)), i(u, c);
            c = s;
          }
          f.start = f.pos;
        }
        for (; u < f.pos; ) {
          var p = Math.min(f.pos, u + 5e3);
          i(p, c), (u = p);
        }
      }
      var we = !1,
        Se = !1;
      function Ce(t, e, r) {
        (this.marker = t), (this.from = e), (this.to = r);
      }
      function ke(t, e) {
        if (t)
          for (var r = 0; r < t.length; ++r) {
            var n = t[r];
            if (n.marker == e) return n;
          }
      }
      function Te(t, e) {
        for (var r, n = 0; n < t.length; ++n)
          t[n] != e && (r || (r = [])).push(t[n]);
        return r;
      }
      function Le(t, e) {
        if (e.full) return null;
        var r = Jt(t, e.from.line) && $t(t, e.from.line).markedSpans,
          n = Jt(t, e.to.line) && $t(t, e.to.line).markedSpans;
        if (!r && !n) return null;
        var i = e.from.ch,
          o = e.to.ch,
          a = 0 == ee(e.from, e.to),
          l = (function(t, e, r) {
            var n;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker,
                  l =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= e : o.from < e);
                if (
                  l ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!r || !o.marker.insertLeft))
                ) {
                  var s =
                    null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                  (n || (n = [])).push(new Ce(a, o.from, s ? null : o.to));
                }
              }
            return n;
          })(r, i, a),
          s = (function(t, e, r) {
            var n;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker,
                  l = null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                if (
                  l ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!r || o.marker.insertLeft))
                ) {
                  var s =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= e : o.from < e);
                  (n || (n = [])).push(
                    new Ce(
                      a,
                      s ? null : o.from - e,
                      null == o.to ? null : o.to - e
                    )
                  );
                }
              }
            return n;
          })(n, o, a),
          u = 1 == e.text.length,
          c = Y(e.text).length + (u ? i : 0);
        if (l)
          for (var f = 0; f < l.length; ++f) {
            var d = l[f];
            if (null == d.to) {
              var h = ke(s, d.marker);
              h ? u && (d.to = null == h.to ? null : h.to + c) : (d.to = i);
            }
          }
        if (s)
          for (var p = 0; p < s.length; ++p) {
            var v = s[p];
            if ((null != v.to && (v.to += c), null == v.from)) {
              var g = ke(l, v.marker);
              g || ((v.from = c), u && (l || (l = [])).push(v));
            } else (v.from += c), u && (l || (l = [])).push(v);
          }
        l && (l = Oe(l)), s && s != l && (s = Oe(s));
        var m = [l];
        if (!u) {
          var y,
            b = e.text.length - 2;
          if (b > 0 && l)
            for (var x = 0; x < l.length; ++x)
              null == l[x].to &&
                (y || (y = [])).push(new Ce(l[x].marker, null, null));
          for (var w = 0; w < b; ++w) m.push(y);
          m.push(s);
        }
        return m;
      }
      function Oe(t) {
        for (var e = 0; e < t.length; ++e) {
          var r = t[e];
          null != r.from &&
            r.from == r.to &&
            !1 !== r.marker.clearWhenEmpty &&
            t.splice(e--, 1);
        }
        return t.length ? t : null;
      }
      function Me(t) {
        var e = t.markedSpans;
        if (e) {
          for (var r = 0; r < e.length; ++r) e[r].marker.detachLine(t);
          t.markedSpans = null;
        }
      }
      function _e(t, e) {
        if (e) {
          for (var r = 0; r < e.length; ++r) e[r].marker.attachLine(t);
          t.markedSpans = e;
        }
      }
      function Ae(t) {
        return t.inclusiveLeft ? -1 : 0;
      }
      function Ee(t) {
        return t.inclusiveRight ? 1 : 0;
      }
      function Ne(t, e) {
        var r = t.lines.length - e.lines.length;
        if (0 != r) return r;
        var n = t.find(),
          i = e.find(),
          o = ee(n.from, i.from) || Ae(t) - Ae(e);
        if (o) return -o;
        var a = ee(n.to, i.to) || Ee(t) - Ee(e);
        return a || e.id - t.id;
      }
      function Pe(t, e) {
        var r,
          n = Se && t.markedSpans;
        if (n)
          for (var i = void 0, o = 0; o < n.length; ++o)
            (i = n[o]).marker.collapsed &&
              null == (e ? i.from : i.to) &&
              (!r || Ne(r, i.marker) < 0) &&
              (r = i.marker);
        return r;
      }
      function je(t) {
        return Pe(t, !0);
      }
      function De(t) {
        return Pe(t, !1);
      }
      function Ie(t, e) {
        var r,
          n = Se && t.markedSpans;
        if (n)
          for (var i = 0; i < n.length; ++i) {
            var o = n[i];
            o.marker.collapsed &&
              (null == o.from || o.from < e) &&
              (null == o.to || o.to > e) &&
              (!r || Ne(r, o.marker) < 0) &&
              (r = o.marker);
          }
        return r;
      }
      function Fe(t, e, r, n, i) {
        var o = $t(t, e),
          a = Se && o.markedSpans;
        if (a)
          for (var l = 0; l < a.length; ++l) {
            var s = a[l];
            if (s.marker.collapsed) {
              var u = s.marker.find(0),
                c = ee(u.from, r) || Ae(s.marker) - Ae(i),
                f = ee(u.to, n) || Ee(s.marker) - Ee(i);
              if (
                !((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) &&
                ((c <= 0 &&
                  (s.marker.inclusiveRight && i.inclusiveLeft
                    ? ee(u.to, r) >= 0
                    : ee(u.to, r) > 0)) ||
                  (c >= 0 &&
                    (s.marker.inclusiveRight && i.inclusiveLeft
                      ? ee(u.from, n) <= 0
                      : ee(u.from, n) < 0)))
              )
                return !0;
            }
          }
      }
      function We(t) {
        for (var e; (e = je(t)); ) t = e.find(-1, !0).line;
        return t;
      }
      function ze(t, e) {
        var r = $t(t, e),
          n = We(r);
        return r == n ? e : Xt(n);
      }
      function He(t, e) {
        if (e > t.lastLine()) return e;
        var r,
          n = $t(t, e);
        if (!Re(t, n)) return e;
        for (; (r = De(n)); ) n = r.find(1, !0).line;
        return Xt(n) + 1;
      }
      function Re(t, e) {
        var r = Se && e.markedSpans;
        if (r)
          for (var n = void 0, i = 0; i < r.length; ++i)
            if ((n = r[i]).marker.collapsed) {
              if (null == n.from) return !0;
              if (
                !n.marker.widgetNode &&
                0 == n.from &&
                n.marker.inclusiveLeft &&
                Be(t, e, n)
              )
                return !0;
            }
      }
      function Be(t, e, r) {
        if (null == r.to) {
          var n = r.marker.find(1, !0);
          return Be(t, n.line, ke(n.line.markedSpans, r.marker));
        }
        if (r.marker.inclusiveRight && r.to == e.text.length) return !0;
        for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
          if (
            (i = e.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == r.to &&
            (null == i.to || i.to != r.from) &&
            (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
            Be(t, e, i)
          )
            return !0;
      }
      function Ge(t) {
        t = We(t);
        for (var e = 0, r = t.parent, n = 0; n < r.lines.length; ++n) {
          var i = r.lines[n];
          if (i == t) break;
          e += i.height;
        }
        for (var o = r.parent; o; o = (r = o).parent)
          for (var a = 0; a < o.children.length; ++a) {
            var l = o.children[a];
            if (l == r) break;
            e += l.height;
          }
        return e;
      }
      function Ve(t) {
        if (0 == t.height) return 0;
        for (var e, r = t.text.length, n = t; (e = je(n)); ) {
          var i = e.find(0, !0);
          (n = i.from.line), (r += i.from.ch - i.to.ch);
        }
        for (n = t; (e = De(n)); ) {
          var o = e.find(0, !0);
          (r -= n.text.length - o.from.ch),
            (n = o.to.line),
            (r += n.text.length - o.to.ch);
        }
        return r;
      }
      function Ue(t) {
        var e = t.display,
          r = t.doc;
        (e.maxLine = $t(r, r.first)),
          (e.maxLineLength = Ve(e.maxLine)),
          (e.maxLineChanged = !0),
          r.iter(function(t) {
            var r = Ve(t);
            r > e.maxLineLength && ((e.maxLineLength = r), (e.maxLine = t));
          });
      }
      var $e = function(t, e, r) {
        (this.text = t), _e(this, e), (this.height = r ? r(this) : 1);
      };
      function Ke(t) {
        (t.parent = null), Me(t);
      }
      ($e.prototype.lineNo = function() {
        return Xt(this);
      }),
        bt($e);
      var qe = {},
        Ye = {};
      function Xe(t, e) {
        if (!t || /^\s*$/.test(t)) return null;
        var r = e.addModeClass ? Ye : qe;
        return r[t] || (r[t] = t.replace(/\S+/g, 'cm-$&'));
      }
      function Ze(t, e) {
        var r = A('span', null, null, s ? 'padding-right: .1px' : null),
          n = {
            pre: A('pre', [r], 'CodeMirror-line'),
            content: r,
            col: 0,
            pos: 0,
            cm: t,
            trailingSpace: !1,
            splitSpaces: t.getOption('lineWrapping'),
          };
        e.measure = {};
        for (var i = 0; i <= (e.rest ? e.rest.length : 0); i++) {
          var o = i ? e.rest[i - 1] : e.line,
            a = void 0;
          (n.pos = 0),
            (n.addToken = Qe),
            At(t.display.measure) &&
              (a = ct(o, t.doc.direction)) &&
              (n.addToken = tr(n.addToken, a)),
            (n.map = []);
          var l = e != t.display.externalMeasured && Xt(o);
          rr(o, n, de(t, o, l)),
            o.styleClasses &&
              (o.styleClasses.bgClass &&
                (n.bgClass = j(o.styleClasses.bgClass, n.bgClass || '')),
              o.styleClasses.textClass &&
                (n.textClass = j(o.styleClasses.textClass, n.textClass || ''))),
            0 == n.map.length &&
              n.map.push(0, 0, n.content.appendChild(_t(t.display.measure))),
            0 == i
              ? ((e.measure.map = n.map), (e.measure.cache = {}))
              : ((e.measure.maps || (e.measure.maps = [])).push(n.map),
                (e.measure.caches || (e.measure.caches = [])).push({}));
        }
        if (s) {
          var u = n.content.lastChild;
          (/\bcm-tab\b/.test(u.className) ||
            (u.querySelector && u.querySelector('.cm-tab'))) &&
            (n.content.className = 'cm-tab-wrap-hack');
        }
        return (
          vt(t, 'renderLine', t, e.line, n.pre),
          n.pre.className &&
            (n.textClass = j(n.pre.className, n.textClass || '')),
          n
        );
      }
      function Je(t) {
        var e = _('span', '•', 'cm-invalidchar');
        return (
          (e.title = '\\u' + t.charCodeAt(0).toString(16)),
          e.setAttribute('aria-label', e.title),
          e
        );
      }
      function Qe(t, e, r, n, i, o, s) {
        if (e) {
          var u,
            c = t.splitSpaces
              ? (function(t, e) {
                  if (t.length > 1 && !/  /.test(t)) return t;
                  for (var r = e, n = '', i = 0; i < t.length; i++) {
                    var o = t.charAt(i);
                    ' ' != o ||
                      !r ||
                      (i != t.length - 1 && 32 != t.charCodeAt(i + 1)) ||
                      (o = ' '),
                      (n += o),
                      (r = ' ' == o);
                  }
                  return n;
                })(e, t.trailingSpace)
              : e,
            f = t.cm.state.specialChars,
            d = !1;
          if (f.test(e)) {
            u = document.createDocumentFragment();
            for (var h = 0; ; ) {
              f.lastIndex = h;
              var p = f.exec(e),
                v = p ? p.index - h : e.length - h;
              if (v) {
                var g = document.createTextNode(c.slice(h, h + v));
                a && l < 9 ? u.appendChild(_('span', [g])) : u.appendChild(g),
                  t.map.push(t.pos, t.pos + v, g),
                  (t.col += v),
                  (t.pos += v);
              }
              if (!p) break;
              h += v + 1;
              var m = void 0;
              if ('\t' == p[0]) {
                var y = t.cm.options.tabSize,
                  b = y - (t.col % y);
                (m = u.appendChild(_('span', q(b), 'cm-tab'))).setAttribute(
                  'role',
                  'presentation'
                ),
                  m.setAttribute('cm-text', '\t'),
                  (t.col += b);
              } else
                '\r' == p[0] || '\n' == p[0]
                  ? ((m = u.appendChild(
                      _('span', '\r' == p[0] ? '␍' : '␤', 'cm-invalidchar')
                    )).setAttribute('cm-text', p[0]),
                    (t.col += 1))
                  : ((m = t.cm.options.specialCharPlaceholder(
                      p[0]
                    )).setAttribute('cm-text', p[0]),
                    a && l < 9
                      ? u.appendChild(_('span', [m]))
                      : u.appendChild(m),
                    (t.col += 1));
              t.map.push(t.pos, t.pos + 1, m), t.pos++;
            }
          } else
            (t.col += e.length),
              (u = document.createTextNode(c)),
              t.map.push(t.pos, t.pos + e.length, u),
              a && l < 9 && (d = !0),
              (t.pos += e.length);
          if (
            ((t.trailingSpace = 32 == c.charCodeAt(e.length - 1)),
            r || n || i || d || o)
          ) {
            var x = r || '';
            n && (x += n), i && (x += i);
            var w = _('span', [u], x, o);
            if (s)
              for (var S in s)
                s.hasOwnProperty(S) &&
                  'style' != S &&
                  'class' != S &&
                  w.setAttribute(S, s[S]);
            return t.content.appendChild(w);
          }
          t.content.appendChild(u);
        }
      }
      function tr(t, e) {
        return function(r, n, i, o, a, l, s) {
          i = i ? i + ' cm-force-border' : 'cm-force-border';
          for (var u = r.pos, c = u + n.length; ; ) {
            for (
              var f = void 0, d = 0;
              d < e.length && !((f = e[d]).to > u && f.from <= u);
              d++
            );
            if (f.to >= c) return t(r, n, i, o, a, l, s);
            t(r, n.slice(0, f.to - u), i, o, null, l, s),
              (o = null),
              (n = n.slice(f.to - u)),
              (u = f.to);
          }
        };
      }
      function er(t, e, r, n) {
        var i = !n && r.widgetNode;
        i && t.map.push(t.pos, t.pos + e, i),
          !n &&
            t.cm.display.input.needsContentAttribute &&
            (i || (i = t.content.appendChild(document.createElement('span'))),
            i.setAttribute('cm-marker', r.id)),
          i && (t.cm.display.input.setUneditable(i), t.content.appendChild(i)),
          (t.pos += e),
          (t.trailingSpace = !1);
      }
      function rr(t, e, r) {
        var n = t.markedSpans,
          i = t.text,
          o = 0;
        if (n)
          for (
            var a, l, s, u, c, f, d, h = i.length, p = 0, v = 1, g = '', m = 0;
            ;

          ) {
            if (m == p) {
              (s = u = c = l = ''), (d = null), (f = null), (m = 1 / 0);
              for (var y = [], b = void 0, x = 0; x < n.length; ++x) {
                var w = n[x],
                  S = w.marker;
                if ('bookmark' == S.type && w.from == p && S.widgetNode)
                  y.push(S);
                else if (
                  w.from <= p &&
                  (null == w.to ||
                    w.to > p ||
                    (S.collapsed && w.to == p && w.from == p))
                ) {
                  if (
                    (null != w.to &&
                      w.to != p &&
                      m > w.to &&
                      ((m = w.to), (u = '')),
                    S.className && (s += ' ' + S.className),
                    S.css && (l = (l ? l + ';' : '') + S.css),
                    S.startStyle && w.from == p && (c += ' ' + S.startStyle),
                    S.endStyle &&
                      w.to == m &&
                      (b || (b = [])).push(S.endStyle, w.to),
                    S.title && ((d || (d = {})).title = S.title),
                    S.attributes)
                  )
                    for (var C in S.attributes)
                      (d || (d = {}))[C] = S.attributes[C];
                  S.collapsed && (!f || Ne(f.marker, S) < 0) && (f = w);
                } else w.from > p && m > w.from && (m = w.from);
              }
              if (b)
                for (var k = 0; k < b.length; k += 2)
                  b[k + 1] == m && (u += ' ' + b[k]);
              if (!f || f.from == p)
                for (var T = 0; T < y.length; ++T) er(e, 0, y[T]);
              if (f && (f.from || 0) == p) {
                if (
                  (er(
                    e,
                    (null == f.to ? h + 1 : f.to) - p,
                    f.marker,
                    null == f.from
                  ),
                  null == f.to)
                )
                  return;
                f.to == p && (f = !1);
              }
            }
            if (p >= h) break;
            for (var L = Math.min(h, m); ; ) {
              if (g) {
                var O = p + g.length;
                if (!f) {
                  var M = O > L ? g.slice(0, L - p) : g;
                  e.addToken(
                    e,
                    M,
                    a ? a + s : s,
                    c,
                    p + M.length == m ? u : '',
                    l,
                    d
                  );
                }
                if (O >= L) {
                  (g = g.slice(L - p)), (p = L);
                  break;
                }
                (p = O), (c = '');
              }
              (g = i.slice(o, (o = r[v++]))), (a = Xe(r[v++], e.cm.options));
            }
          }
        else
          for (var _ = 1; _ < r.length; _ += 2)
            e.addToken(e, i.slice(o, (o = r[_])), Xe(r[_ + 1], e.cm.options));
      }
      function nr(t, e, r) {
        (this.line = e),
          (this.rest = (function(t) {
            for (var e, r; (e = De(t)); )
              (t = e.find(1, !0).line), (r || (r = [])).push(t);
            return r;
          })(e)),
          (this.size = this.rest ? Xt(Y(this.rest)) - r + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = Re(t, e));
      }
      function ir(t, e, r) {
        for (var n, i = [], o = e; o < r; o = n) {
          var a = new nr(t.doc, $t(t.doc, o), o);
          (n = o + a.size), i.push(a);
        }
        return i;
      }
      var or = null,
        ar = null;
      function lr(t, e) {
        var r = ht(t, e);
        if (r.length) {
          var n,
            i = Array.prototype.slice.call(arguments, 2);
          or
            ? (n = or.delayedCallbacks)
            : ar
            ? (n = ar)
            : ((n = ar = []), setTimeout(sr, 0));
          for (
            var o = function(t) {
                n.push(function() {
                  return r[t].apply(null, i);
                });
              },
              a = 0;
            a < r.length;
            ++a
          )
            o(a);
        }
      }
      function sr() {
        var t = ar;
        ar = null;
        for (var e = 0; e < t.length; ++e) t[e]();
      }
      function ur(t, e, r, n) {
        for (var i = 0; i < e.changes.length; i++) {
          var o = e.changes[i];
          'text' == o
            ? dr(t, e)
            : 'gutter' == o
            ? pr(t, e, r, n)
            : 'class' == o
            ? hr(t, e)
            : 'widget' == o && vr(t, e, n);
        }
        e.changes = null;
      }
      function cr(t) {
        return (
          t.node == t.text &&
            ((t.node = _('div', null, null, 'position: relative')),
            t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text),
            t.node.appendChild(t.text),
            a && l < 8 && (t.node.style.zIndex = 2)),
          t.node
        );
      }
      function fr(t, e) {
        var r = t.display.externalMeasured;
        return r && r.line == e.line
          ? ((t.display.externalMeasured = null),
            (e.measure = r.measure),
            r.built)
          : Ze(t, e);
      }
      function dr(t, e) {
        var r = e.text.className,
          n = fr(t, e);
        e.text == e.node && (e.node = n.pre),
          e.text.parentNode.replaceChild(n.pre, e.text),
          (e.text = n.pre),
          n.bgClass != e.bgClass || n.textClass != e.textClass
            ? ((e.bgClass = n.bgClass), (e.textClass = n.textClass), hr(t, e))
            : r && (e.text.className = r);
      }
      function hr(t, e) {
        !(function(t, e) {
          var r = e.bgClass
            ? e.bgClass + ' ' + (e.line.bgClass || '')
            : e.line.bgClass;
          if ((r && (r += ' CodeMirror-linebackground'), e.background))
            r
              ? (e.background.className = r)
              : (e.background.parentNode.removeChild(e.background),
                (e.background = null));
          else if (r) {
            var n = cr(e);
            (e.background = n.insertBefore(_('div', null, r), n.firstChild)),
              t.display.input.setUneditable(e.background);
          }
        })(t, e),
          e.line.wrapClass
            ? (cr(e).className = e.line.wrapClass)
            : e.node != e.text && (e.node.className = '');
        var r = e.textClass
          ? e.textClass + ' ' + (e.line.textClass || '')
          : e.line.textClass;
        e.text.className = r || '';
      }
      function pr(t, e, r, n) {
        if (
          (e.gutter && (e.node.removeChild(e.gutter), (e.gutter = null)),
          e.gutterBackground &&
            (e.node.removeChild(e.gutterBackground),
            (e.gutterBackground = null)),
          e.line.gutterClass)
        ) {
          var i = cr(e);
          (e.gutterBackground = _(
            'div',
            null,
            'CodeMirror-gutter-background ' + e.line.gutterClass,
            'left: ' +
              (t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
              'px; width: ' +
              n.gutterTotalWidth +
              'px'
          )),
            t.display.input.setUneditable(e.gutterBackground),
            i.insertBefore(e.gutterBackground, e.text);
        }
        var o = e.line.gutterMarkers;
        if (t.options.lineNumbers || o) {
          var a = cr(e),
            l = (e.gutter = _(
              'div',
              null,
              'CodeMirror-gutter-wrapper',
              'left: ' +
                (t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                'px'
            ));
          if (
            (t.display.input.setUneditable(l),
            a.insertBefore(l, e.text),
            e.line.gutterClass && (l.className += ' ' + e.line.gutterClass),
            !t.options.lineNumbers ||
              (o && o['CodeMirror-linenumbers']) ||
              (e.lineNumber = l.appendChild(
                _(
                  'div',
                  Qt(t.options, r),
                  'CodeMirror-linenumber CodeMirror-gutter-elt',
                  'left: ' +
                    n.gutterLeft['CodeMirror-linenumbers'] +
                    'px; width: ' +
                    t.display.lineNumInnerWidth +
                    'px'
                )
              )),
            o)
          )
            for (var s = 0; s < t.display.gutterSpecs.length; ++s) {
              var u = t.display.gutterSpecs[s].className,
                c = o.hasOwnProperty(u) && o[u];
              c &&
                l.appendChild(
                  _(
                    'div',
                    [c],
                    'CodeMirror-gutter-elt',
                    'left: ' +
                      n.gutterLeft[u] +
                      'px; width: ' +
                      n.gutterWidth[u] +
                      'px'
                  )
                );
            }
        }
      }
      function vr(t, e, r) {
        e.alignable && (e.alignable = null);
        for (var n = e.node.firstChild, i = void 0; n; n = i)
          (i = n.nextSibling),
            'CodeMirror-linewidget' == n.className && e.node.removeChild(n);
        mr(t, e, r);
      }
      function gr(t, e, r, n) {
        var i = fr(t, e);
        return (
          (e.text = e.node = i.pre),
          i.bgClass && (e.bgClass = i.bgClass),
          i.textClass && (e.textClass = i.textClass),
          hr(t, e),
          pr(t, e, r, n),
          mr(t, e, n),
          e.node
        );
      }
      function mr(t, e, r) {
        if ((yr(t, e.line, e, r, !0), e.rest))
          for (var n = 0; n < e.rest.length; n++) yr(t, e.rest[n], e, r, !1);
      }
      function yr(t, e, r, n, i) {
        if (e.widgets)
          for (var o = cr(r), a = 0, l = e.widgets; a < l.length; ++a) {
            var s = l[a],
              u = _('div', [s.node], 'CodeMirror-linewidget');
            s.handleMouseEvents || u.setAttribute('cm-ignore-events', 'true'),
              br(s, u, r, n),
              t.display.input.setUneditable(u),
              i && s.above
                ? o.insertBefore(u, r.gutter || r.text)
                : o.appendChild(u),
              lr(s, 'redraw');
          }
      }
      function br(t, e, r, n) {
        if (t.noHScroll) {
          (r.alignable || (r.alignable = [])).push(e);
          var i = n.wrapperWidth;
          (e.style.left = n.fixedPos + 'px'),
            t.coverGutter ||
              ((i -= n.gutterTotalWidth),
              (e.style.paddingLeft = n.gutterTotalWidth + 'px')),
            (e.style.width = i + 'px');
        }
        t.coverGutter &&
          ((e.style.zIndex = 5),
          (e.style.position = 'relative'),
          t.noHScroll || (e.style.marginLeft = -n.gutterTotalWidth + 'px'));
      }
      function xr(t) {
        if (null != t.height) return t.height;
        var e = t.doc.cm;
        if (!e) return 0;
        if (!E(document.body, t.node)) {
          var r = 'position: relative;';
          t.coverGutter &&
            (r += 'margin-left: -' + e.display.gutters.offsetWidth + 'px;'),
            t.noHScroll &&
              (r += 'width: ' + e.display.wrapper.clientWidth + 'px;'),
            M(e.display.measure, _('div', [t.node], null, r));
        }
        return (t.height = t.node.parentNode.offsetHeight);
      }
      function wr(t, e) {
        for (var r = kt(e); r != t.wrapper; r = r.parentNode)
          if (
            !r ||
            (1 == r.nodeType && 'true' == r.getAttribute('cm-ignore-events')) ||
            (r.parentNode == t.sizer && r != t.mover)
          )
            return !0;
      }
      function Sr(t) {
        return t.lineSpace.offsetTop;
      }
      function Cr(t) {
        return t.mover.offsetHeight - t.lineSpace.offsetHeight;
      }
      function kr(t) {
        if (t.cachedPaddingH) return t.cachedPaddingH;
        var e = M(t.measure, _('pre', 'x')),
          r = window.getComputedStyle
            ? window.getComputedStyle(e)
            : e.currentStyle,
          n = {
            left: parseInt(r.paddingLeft),
            right: parseInt(r.paddingRight),
          };
        return isNaN(n.left) || isNaN(n.right) || (t.cachedPaddingH = n), n;
      }
      function Tr(t) {
        return R - t.display.nativeBarWidth;
      }
      function Lr(t) {
        return t.display.scroller.clientWidth - Tr(t) - t.display.barWidth;
      }
      function Or(t) {
        return t.display.scroller.clientHeight - Tr(t) - t.display.barHeight;
      }
      function Mr(t, e, r) {
        if (t.line == e) return { map: t.measure.map, cache: t.measure.cache };
        for (var n = 0; n < t.rest.length; n++)
          if (t.rest[n] == e)
            return { map: t.measure.maps[n], cache: t.measure.caches[n] };
        for (var i = 0; i < t.rest.length; i++)
          if (Xt(t.rest[i]) > r)
            return {
              map: t.measure.maps[i],
              cache: t.measure.caches[i],
              before: !0,
            };
      }
      function _r(t, e, r, n) {
        return Nr(t, Er(t, e), r, n);
      }
      function Ar(t, e) {
        if (e >= t.display.viewFrom && e < t.display.viewTo)
          return t.display.view[sn(t, e)];
        var r = t.display.externalMeasured;
        return r && e >= r.lineN && e < r.lineN + r.size ? r : void 0;
      }
      function Er(t, e) {
        var r = Xt(e),
          n = Ar(t, r);
        n && !n.text
          ? (n = null)
          : n && n.changes && (ur(t, n, r, rn(t)), (t.curOp.forceUpdate = !0)),
          n ||
            (n = (function(t, e) {
              var r = Xt((e = We(e))),
                n = (t.display.externalMeasured = new nr(t.doc, e, r));
              n.lineN = r;
              var i = (n.built = Ze(t, n));
              return (n.text = i.pre), M(t.display.lineMeasure, i.pre), n;
            })(t, e));
        var i = Mr(n, e, r);
        return {
          line: e,
          view: n,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1,
        };
      }
      function Nr(t, e, r, n, i) {
        e.before && (r = -1);
        var o,
          s = r + (n || '');
        return (
          e.cache.hasOwnProperty(s)
            ? (o = e.cache[s])
            : (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
              e.hasHeights ||
                ((function(t, e, r) {
                  var n = t.options.lineWrapping,
                    i = n && Lr(t);
                  if (!e.measure.heights || (n && e.measure.width != i)) {
                    var o = (e.measure.heights = []);
                    if (n) {
                      e.measure.width = i;
                      for (
                        var a = e.text.firstChild.getClientRects(), l = 0;
                        l < a.length - 1;
                        l++
                      ) {
                        var s = a[l],
                          u = a[l + 1];
                        Math.abs(s.bottom - u.bottom) > 2 &&
                          o.push((s.bottom + u.top) / 2 - r.top);
                      }
                    }
                    o.push(r.bottom - r.top);
                  }
                })(t, e.view, e.rect),
                (e.hasHeights = !0)),
              (o = (function(t, e, r, n) {
                var i,
                  o = Dr(e.map, r, n),
                  s = o.node,
                  u = o.start,
                  c = o.end,
                  f = o.collapse;
                if (3 == s.nodeType) {
                  for (var d = 0; d < 4; d++) {
                    for (; u && it(e.line.text.charAt(o.coverStart + u)); ) --u;
                    for (
                      ;
                      o.coverStart + c < o.coverEnd &&
                      it(e.line.text.charAt(o.coverStart + c));

                    )
                      ++c;
                    if (
                      (i =
                        a && l < 9 && 0 == u && c == o.coverEnd - o.coverStart
                          ? s.parentNode.getBoundingClientRect()
                          : Ir(T(s, u, c).getClientRects(), n)).left ||
                      i.right ||
                      0 == u
                    )
                      break;
                    (c = u), (u -= 1), (f = 'right');
                  }
                  a &&
                    l < 11 &&
                    (i = (function(t, e) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function(t) {
                          if (null != Dt) return Dt;
                          var e = M(t, _('span', 'x')),
                            r = e.getBoundingClientRect(),
                            n = T(e, 0, 1).getBoundingClientRect();
                          return (Dt = Math.abs(r.left - n.left) > 1);
                        })(t)
                      )
                        return e;
                      var r = screen.logicalXDPI / screen.deviceXDPI,
                        n = screen.logicalYDPI / screen.deviceYDPI;
                      return {
                        left: e.left * r,
                        right: e.right * r,
                        top: e.top * n,
                        bottom: e.bottom * n,
                      };
                    })(t.display.measure, i));
                } else {
                  var h;
                  u > 0 && (f = n = 'right'),
                    (i =
                      t.options.lineWrapping &&
                      (h = s.getClientRects()).length > 1
                        ? h['right' == n ? h.length - 1 : 0]
                        : s.getBoundingClientRect());
                }
                if (a && l < 9 && !u && (!i || (!i.left && !i.right))) {
                  var p = s.parentNode.getClientRects()[0];
                  i = p
                    ? {
                        left: p.left,
                        right: p.left + en(t.display),
                        top: p.top,
                        bottom: p.bottom,
                      }
                    : jr;
                }
                for (
                  var v = i.top - e.rect.top,
                    g = i.bottom - e.rect.top,
                    m = (v + g) / 2,
                    y = e.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(m < y[b]);
                  b++
                );
                var x = b ? y[b - 1] : 0,
                  w = y[b],
                  S = {
                    left: ('right' == f ? i.right : i.left) - e.rect.left,
                    right: ('left' == f ? i.left : i.right) - e.rect.left,
                    top: x,
                    bottom: w,
                  };
                return (
                  i.left || i.right || (S.bogus = !0),
                  t.options.singleCursorHeightPerLine ||
                    ((S.rtop = v), (S.rbottom = g)),
                  S
                );
              })(t, e, r, n)).bogus || (e.cache[s] = o)),
          {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom,
          }
        );
      }
      var Pr,
        jr = { left: 0, right: 0, top: 0, bottom: 0 };
      function Dr(t, e, r) {
        for (var n, i, o, a, l, s, u = 0; u < t.length; u += 3)
          if (
            ((l = t[u]),
            (s = t[u + 1]),
            e < l
              ? ((i = 0), (o = 1), (a = 'left'))
              : e < s
              ? (o = 1 + (i = e - l))
              : (u == t.length - 3 || (e == s && t[u + 3] > e)) &&
                ((i = (o = s - l) - 1), e >= s && (a = 'right')),
            null != i)
          ) {
            if (
              ((n = t[u + 2]),
              l == s && r == (n.insertLeft ? 'left' : 'right') && (a = r),
              'left' == r && 0 == i)
            )
              for (; u && t[u - 2] == t[u - 3] && t[u - 1].insertLeft; )
                (n = t[2 + (u -= 3)]), (a = 'left');
            if ('right' == r && i == s - l)
              for (
                ;
                u < t.length - 3 &&
                t[u + 3] == t[u + 4] &&
                !t[u + 5].insertLeft;

              )
                (n = t[(u += 3) + 2]), (a = 'right');
            break;
          }
        return {
          node: n,
          start: i,
          end: o,
          collapse: a,
          coverStart: l,
          coverEnd: s,
        };
      }
      function Ir(t, e) {
        var r = jr;
        if ('left' == e)
          for (var n = 0; n < t.length && (r = t[n]).left == r.right; n++);
        else
          for (var i = t.length - 1; i >= 0 && (r = t[i]).left == r.right; i--);
        return r;
      }
      function Fr(t) {
        if (
          t.measure &&
          ((t.measure.cache = {}), (t.measure.heights = null), t.rest)
        )
          for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {};
      }
      function Wr(t) {
        (t.display.externalMeasure = null), O(t.display.lineMeasure);
        for (var e = 0; e < t.display.view.length; e++) Fr(t.display.view[e]);
      }
      function zr(t) {
        Wr(t),
          (t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null),
          t.options.lineWrapping || (t.display.maxLineChanged = !0),
          (t.display.lineNumChars = null);
      }
      function Hr() {
        return c && g
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft;
      }
      function Rr() {
        return c && g
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop;
      }
      function Br(t) {
        var e = 0;
        if (t.widgets)
          for (var r = 0; r < t.widgets.length; ++r)
            t.widgets[r].above && (e += xr(t.widgets[r]));
        return e;
      }
      function Gr(t, e, r, n, i) {
        if (!i) {
          var o = Br(e);
          (r.top += o), (r.bottom += o);
        }
        if ('line' == n) return r;
        n || (n = 'local');
        var a = Ge(e);
        if (
          ('local' == n ? (a += Sr(t.display)) : (a -= t.display.viewOffset),
          'page' == n || 'window' == n)
        ) {
          var l = t.display.lineSpace.getBoundingClientRect();
          a += l.top + ('window' == n ? 0 : Rr());
          var s = l.left + ('window' == n ? 0 : Hr());
          (r.left += s), (r.right += s);
        }
        return (r.top += a), (r.bottom += a), r;
      }
      function Vr(t, e, r) {
        if ('div' == r) return e;
        var n = e.left,
          i = e.top;
        if ('page' == r) (n -= Hr()), (i -= Rr());
        else if ('local' == r || !r) {
          var o = t.display.sizer.getBoundingClientRect();
          (n += o.left), (i += o.top);
        }
        var a = t.display.lineSpace.getBoundingClientRect();
        return { left: n - a.left, top: i - a.top };
      }
      function Ur(t, e, r, n, i) {
        return n || (n = $t(t.doc, e.line)), Gr(t, n, _r(t, n, e.ch, i), r);
      }
      function $r(t, e, r, n, i, o) {
        function a(e, a) {
          var l = Nr(t, i, e, a ? 'right' : 'left', o);
          return a ? (l.left = l.right) : (l.right = l.left), Gr(t, n, l, r);
        }
        (n = n || $t(t.doc, e.line)), i || (i = Er(t, n));
        var l = ct(n, t.doc.direction),
          s = e.ch,
          u = e.sticky;
        if (
          (s >= n.text.length
            ? ((s = n.text.length), (u = 'before'))
            : s <= 0 && ((s = 0), (u = 'after')),
          !l)
        )
          return a('before' == u ? s - 1 : s, 'before' == u);
        function c(t, e, r) {
          var n = l[e],
            i = 1 == n.level;
          return a(r ? t - 1 : t, i != r);
        }
        var f = st(l, s, u),
          d = lt,
          h = c(s, f, 'before' == u);
        return null != d && (h.other = c(s, d, 'before' != u)), h;
      }
      function Kr(t, e) {
        var r = 0;
        (e = le(t.doc, e)),
          t.options.lineWrapping || (r = en(t.display) * e.ch);
        var n = $t(t.doc, e.line),
          i = Ge(n) + Sr(t.display);
        return { left: r, right: r, top: i, bottom: i + n.height };
      }
      function qr(t, e, r, n, i) {
        var o = te(t, e, r);
        return (o.xRel = i), n && (o.outside = !0), o;
      }
      function Yr(t, e, r) {
        var n = t.doc;
        if ((r += t.display.viewOffset) < 0)
          return qr(n.first, 0, null, !0, -1);
        var i = Zt(n, r),
          o = n.first + n.size - 1;
        if (i > o)
          return qr(n.first + n.size - 1, $t(n, o).text.length, null, !0, 1);
        e < 0 && (e = 0);
        for (var a = $t(n, i); ; ) {
          var l = Qr(t, a, i, e, r),
            s = Ie(a, l.ch + (l.xRel > 0 ? 1 : 0));
          if (!s) return l;
          var u = s.find(1);
          if (u.line == i) return u;
          a = $t(n, (i = u.line));
        }
      }
      function Xr(t, e, r, n) {
        n -= Br(e);
        var i = e.text.length,
          o = at(
            function(e) {
              return Nr(t, r, e - 1).bottom <= n;
            },
            i,
            0
          );
        return (
          (i = at(
            function(e) {
              return Nr(t, r, e).top > n;
            },
            o,
            i
          )),
          { begin: o, end: i }
        );
      }
      function Zr(t, e, r, n) {
        r || (r = Er(t, e));
        var i = Gr(t, e, Nr(t, r, n), 'line').top;
        return Xr(t, e, r, i);
      }
      function Jr(t, e, r, n) {
        return !(t.bottom <= r) && (t.top > r || (n ? t.left : t.right) > e);
      }
      function Qr(t, e, r, n, i) {
        i -= Ge(e);
        var o = Er(t, e),
          a = Br(e),
          l = 0,
          s = e.text.length,
          u = !0,
          c = ct(e, t.doc.direction);
        if (c) {
          var f = (t.options.lineWrapping
            ? function(t, e, r, n, i, o, a) {
                var l = Xr(t, e, n, a),
                  s = l.begin,
                  u = l.end;
                /\s/.test(e.text.charAt(u - 1)) && u--;
                for (var c = null, f = null, d = 0; d < i.length; d++) {
                  var h = i[d];
                  if (!(h.from >= u || h.to <= s)) {
                    var p = 1 != h.level,
                      v = Nr(
                        t,
                        n,
                        p ? Math.min(u, h.to) - 1 : Math.max(s, h.from)
                      ).right,
                      g = v < o ? o - v + 1e9 : v - o;
                    (!c || f > g) && ((c = h), (f = g));
                  }
                }
                return (
                  c || (c = i[i.length - 1]),
                  c.from < s && (c = { from: s, to: c.to, level: c.level }),
                  c.to > u && (c = { from: c.from, to: u, level: c.level }),
                  c
                );
              }
            : function(t, e, r, n, i, o, a) {
                var l = at(
                    function(l) {
                      var s = i[l],
                        u = 1 != s.level;
                      return Jr(
                        $r(
                          t,
                          te(r, u ? s.to : s.from, u ? 'before' : 'after'),
                          'line',
                          e,
                          n
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
                    c = $r(
                      t,
                      te(r, u ? s.from : s.to, u ? 'after' : 'before'),
                      'line',
                      e,
                      n
                    );
                  Jr(c, o, a, !0) && c.top > a && (s = i[l - 1]);
                }
                return s;
              })(t, e, r, o, c, n, i);
          (u = 1 != f.level),
            (l = u ? f.from : f.to - 1),
            (s = u ? f.to : f.from - 1);
        }
        var d,
          h,
          p = null,
          v = null,
          g = at(
            function(e) {
              var r = Nr(t, o, e);
              return (
                (r.top += a),
                (r.bottom += a),
                !!Jr(r, n, i, !1) &&
                  (r.top <= i && r.left <= n && ((p = e), (v = r)), !0)
              );
            },
            l,
            s
          ),
          m = !1;
        if (v) {
          var y = n - v.left < v.right - n,
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
                : Nr(t, o, g - (u ? 1 : 0)).bottom + a <= i == u
                ? 'after'
                : 'before');
          var x = $r(t, te(r, g, h), 'line', e, o);
          (d = x.left), (m = i < x.top || i >= x.bottom);
        }
        return (g = ot(e.text, g, 1)), qr(r, g, h, m, n - d);
      }
      function tn(t) {
        if (null != t.cachedTextHeight) return t.cachedTextHeight;
        if (null == Pr) {
          Pr = _('pre');
          for (var e = 0; e < 49; ++e)
            Pr.appendChild(document.createTextNode('x')),
              Pr.appendChild(_('br'));
          Pr.appendChild(document.createTextNode('x'));
        }
        M(t.measure, Pr);
        var r = Pr.offsetHeight / 50;
        return r > 3 && (t.cachedTextHeight = r), O(t.measure), r || 1;
      }
      function en(t) {
        if (null != t.cachedCharWidth) return t.cachedCharWidth;
        var e = _('span', 'xxxxxxxxxx'),
          r = _('pre', [e]);
        M(t.measure, r);
        var n = e.getBoundingClientRect(),
          i = (n.right - n.left) / 10;
        return i > 2 && (t.cachedCharWidth = i), i || 10;
      }
      function rn(t) {
        for (
          var e = t.display,
            r = {},
            n = {},
            i = e.gutters.clientLeft,
            o = e.gutters.firstChild,
            a = 0;
          o;
          o = o.nextSibling, ++a
        ) {
          var l = t.display.gutterSpecs[a].className;
          (r[l] = o.offsetLeft + o.clientLeft + i), (n[l] = o.clientWidth);
        }
        return {
          fixedPos: nn(e),
          gutterTotalWidth: e.gutters.offsetWidth,
          gutterLeft: r,
          gutterWidth: n,
          wrapperWidth: e.wrapper.clientWidth,
        };
      }
      function nn(t) {
        return (
          t.scroller.getBoundingClientRect().left -
          t.sizer.getBoundingClientRect().left
        );
      }
      function on(t) {
        var e = tn(t.display),
          r = t.options.lineWrapping,
          n =
            r &&
            Math.max(5, t.display.scroller.clientWidth / en(t.display) - 3);
        return function(i) {
          if (Re(t.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return r ? o + (Math.ceil(i.text.length / n) || 1) * e : o + e;
        };
      }
      function an(t) {
        var e = t.doc,
          r = on(t);
        e.iter(function(t) {
          var e = r(t);
          e != t.height && Yt(t, e);
        });
      }
      function ln(t, e, r, n) {
        var i = t.display;
        if (!r && 'true' == kt(e).getAttribute('cm-not-content')) return null;
        var o,
          a,
          l = i.lineSpace.getBoundingClientRect();
        try {
          (o = e.clientX - l.left), (a = e.clientY - l.top);
        } catch (e) {
          return null;
        }
        var s,
          u = Yr(t, o, a);
        if (n && 1 == u.xRel && (s = $t(t.doc, u.line).text).length == u.ch) {
          var c = W(s, s.length, t.options.tabSize) - s.length;
          u = te(
            u.line,
            Math.max(
              0,
              Math.round((o - kr(t.display).left) / en(t.display)) - c
            )
          );
        }
        return u;
      }
      function sn(t, e) {
        if (e >= t.display.viewTo) return null;
        if ((e -= t.display.viewFrom) < 0) return null;
        for (var r = t.display.view, n = 0; n < r.length; n++)
          if ((e -= r[n].size) < 0) return n;
      }
      function un(t, e, r, n) {
        null == e && (e = t.doc.first),
          null == r && (r = t.doc.first + t.doc.size),
          n || (n = 0);
        var i = t.display;
        if (
          (n &&
            r < i.viewTo &&
            (null == i.updateLineNumbers || i.updateLineNumbers > e) &&
            (i.updateLineNumbers = e),
          (t.curOp.viewChanged = !0),
          e >= i.viewTo)
        )
          Se && ze(t.doc, e) < i.viewTo && fn(t);
        else if (r <= i.viewFrom)
          Se && He(t.doc, r + n) > i.viewFrom
            ? fn(t)
            : ((i.viewFrom += n), (i.viewTo += n));
        else if (e <= i.viewFrom && r >= i.viewTo) fn(t);
        else if (e <= i.viewFrom) {
          var o = dn(t, r, r + n, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += n))
            : fn(t);
        } else if (r >= i.viewTo) {
          var a = dn(t, e, e, -1);
          a
            ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
            : fn(t);
        } else {
          var l = dn(t, e, e, -1),
            s = dn(t, r, r + n, 1);
          l && s
            ? ((i.view = i.view
                .slice(0, l.index)
                .concat(ir(t, l.lineN, s.lineN))
                .concat(i.view.slice(s.index))),
              (i.viewTo += n))
            : fn(t);
        }
        var u = i.externalMeasured;
        u &&
          (r < u.lineN
            ? (u.lineN += n)
            : e < u.lineN + u.size && (i.externalMeasured = null));
      }
      function cn(t, e, r) {
        t.curOp.viewChanged = !0;
        var n = t.display,
          i = t.display.externalMeasured;
        if (
          (i &&
            e >= i.lineN &&
            e < i.lineN + i.size &&
            (n.externalMeasured = null),
          !(e < n.viewFrom || e >= n.viewTo))
        ) {
          var o = n.view[sn(t, e)];
          if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == H(a, r) && a.push(r);
          }
        }
      }
      function fn(t) {
        (t.display.viewFrom = t.display.viewTo = t.doc.first),
          (t.display.view = []),
          (t.display.viewOffset = 0);
      }
      function dn(t, e, r, n) {
        var i,
          o = sn(t, e),
          a = t.display.view;
        if (!Se || r == t.doc.first + t.doc.size) return { index: o, lineN: r };
        for (var l = t.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
        if (l != e) {
          if (n > 0) {
            if (o == a.length - 1) return null;
            (i = l + a[o].size - e), o++;
          } else i = l - e;
          (e += i), (r += i);
        }
        for (; ze(t.doc, r) != r; ) {
          if (o == (n < 0 ? 0 : a.length - 1)) return null;
          (r += n * a[o - (n < 0 ? 1 : 0)].size), (o += n);
        }
        return { index: o, lineN: r };
      }
      function hn(t) {
        for (var e = t.display.view, r = 0, n = 0; n < e.length; n++) {
          var i = e[n];
          i.hidden || (i.node && !i.changes) || ++r;
        }
        return r;
      }
      function pn(t) {
        t.display.input.showSelection(t.display.input.prepareSelection());
      }
      function vn(t, e) {
        void 0 === e && (e = !0);
        for (
          var r = t.doc,
            n = {},
            i = (n.cursors = document.createDocumentFragment()),
            o = (n.selection = document.createDocumentFragment()),
            a = 0;
          a < r.sel.ranges.length;
          a++
        )
          if (e || a != r.sel.primIndex) {
            var l = r.sel.ranges[a];
            if (
              !(
                l.from().line >= t.display.viewTo ||
                l.to().line < t.display.viewFrom
              )
            ) {
              var s = l.empty();
              (s || t.options.showCursorWhenSelecting) && gn(t, l.head, i),
                s || yn(t, l, o);
            }
          }
        return n;
      }
      function gn(t, e, r) {
        var n = $r(
            t,
            e,
            'div',
            null,
            null,
            !t.options.singleCursorHeightPerLine
          ),
          i = r.appendChild(_('div', ' ', 'CodeMirror-cursor'));
        if (
          ((i.style.left = n.left + 'px'),
          (i.style.top = n.top + 'px'),
          (i.style.height =
            Math.max(0, n.bottom - n.top) * t.options.cursorHeight + 'px'),
          n.other)
        ) {
          var o = r.appendChild(
            _('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
          );
          (o.style.display = ''),
            (o.style.left = n.other.left + 'px'),
            (o.style.top = n.other.top + 'px'),
            (o.style.height = 0.85 * (n.other.bottom - n.other.top) + 'px');
        }
      }
      function mn(t, e) {
        return t.top - e.top || t.left - e.left;
      }
      function yn(t, e, r) {
        var n = t.display,
          i = t.doc,
          o = document.createDocumentFragment(),
          a = kr(t.display),
          l = a.left,
          s = Math.max(n.sizerWidth, Lr(t) - n.sizer.offsetLeft) - a.right,
          u = 'ltr' == i.direction;
        function c(t, e, r, n) {
          e < 0 && (e = 0),
            (e = Math.round(e)),
            (n = Math.round(n)),
            o.appendChild(
              _(
                'div',
                null,
                'CodeMirror-selected',
                'position: absolute; left: ' +
                  t +
                  'px;\n                             top: ' +
                  e +
                  'px; width: ' +
                  (null == r ? s - t : r) +
                  'px;\n                             height: ' +
                  (n - e) +
                  'px'
              )
            );
        }
        function f(e, r, n) {
          var o,
            a,
            f = $t(i, e),
            d = f.text.length;
          function h(r, n) {
            return Ur(t, te(e, r), 'div', f, n);
          }
          function p(e, r, n) {
            var i = Zr(t, f, null, e),
              o = ('ltr' == r) == ('after' == n) ? 'left' : 'right',
              a =
                'after' == n
                  ? i.begin
                  : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1);
            return h(a, o)[o];
          }
          var v = ct(f, i.direction);
          return (
            (function(t, e, r, n) {
              if (!t) return n(e, r, 'ltr', 0);
              for (var i = !1, o = 0; o < t.length; ++o) {
                var a = t[o];
                ((a.from < r && a.to > e) || (e == r && a.to == e)) &&
                  (n(
                    Math.max(a.from, e),
                    Math.min(a.to, r),
                    1 == a.level ? 'rtl' : 'ltr',
                    o
                  ),
                  (i = !0));
              }
              i || n(e, r, 'ltr');
            })(v, r || 0, null == n ? d : n, function(t, e, i, f) {
              var g = 'ltr' == i,
                m = h(t, g ? 'left' : 'right'),
                y = h(e - 1, g ? 'right' : 'left'),
                b = null == r && 0 == t,
                x = null == n && e == d,
                w = 0 == f,
                S = !v || f == v.length - 1;
              if (y.top - m.top <= 3) {
                var C = (u ? b : x) && w,
                  k = (u ? x : b) && S,
                  T = C ? l : (g ? m : y).left,
                  L = k ? s : (g ? y : m).right;
                c(T, m.top, L - T, m.bottom);
              } else {
                var O, M, _, A;
                g
                  ? ((O = u && b && w ? l : m.left),
                    (M = u ? s : p(t, i, 'before')),
                    (_ = u ? l : p(e, i, 'after')),
                    (A = u && x && S ? s : y.right))
                  : ((O = u ? p(t, i, 'before') : l),
                    (M = !u && b && w ? s : m.right),
                    (_ = !u && x && S ? l : y.left),
                    (A = u ? p(e, i, 'after') : s)),
                  c(O, m.top, M - O, m.bottom),
                  m.bottom < y.top && c(l, m.bottom, null, y.top),
                  c(_, y.top, A - _, y.bottom);
              }
              (!o || mn(m, o) < 0) && (o = m),
                mn(y, o) < 0 && (o = y),
                (!a || mn(m, a) < 0) && (a = m),
                mn(y, a) < 0 && (a = y);
            }),
            { start: o, end: a }
          );
        }
        var d = e.from(),
          h = e.to();
        if (d.line == h.line) f(d.line, d.ch, h.ch);
        else {
          var p = $t(i, d.line),
            v = $t(i, h.line),
            g = We(p) == We(v),
            m = f(d.line, d.ch, g ? p.text.length + 1 : null).end,
            y = f(h.line, g ? 0 : null, h.ch).start;
          g &&
            (m.top < y.top - 2
              ? (c(m.right, m.top, null, m.bottom),
                c(l, y.top, y.left, y.bottom))
              : c(m.right, m.top, y.left - m.right, m.bottom)),
            m.bottom < y.top && c(l, m.bottom, null, y.top);
        }
        r.appendChild(o);
      }
      function bn(t) {
        if (t.state.focused) {
          var e = t.display;
          clearInterval(e.blinker);
          var r = !0;
          (e.cursorDiv.style.visibility = ''),
            t.options.cursorBlinkRate > 0
              ? (e.blinker = setInterval(function() {
                  return (e.cursorDiv.style.visibility = (r = !r)
                    ? ''
                    : 'hidden');
                }, t.options.cursorBlinkRate))
              : t.options.cursorBlinkRate < 0 &&
                (e.cursorDiv.style.visibility = 'hidden');
        }
      }
      function xn(t) {
        t.state.focused || (t.display.input.focus(), Sn(t));
      }
      function wn(t) {
        (t.state.delayingBlurEvent = !0),
          setTimeout(function() {
            t.state.delayingBlurEvent &&
              ((t.state.delayingBlurEvent = !1), Cn(t));
          }, 100);
      }
      function Sn(t, e) {
        t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1),
          'nocursor' != t.options.readOnly &&
            (t.state.focused ||
              (vt(t, 'focus', t, e),
              (t.state.focused = !0),
              P(t.display.wrapper, 'CodeMirror-focused'),
              t.curOp ||
                t.display.selForContextMenu == t.doc.sel ||
                (t.display.input.reset(),
                s &&
                  setTimeout(function() {
                    return t.display.input.reset(!0);
                  }, 20)),
              t.display.input.receivedFocus()),
            bn(t));
      }
      function Cn(t, e) {
        t.state.delayingBlurEvent ||
          (t.state.focused &&
            (vt(t, 'blur', t, e),
            (t.state.focused = !1),
            L(t.display.wrapper, 'CodeMirror-focused')),
          clearInterval(t.display.blinker),
          setTimeout(function() {
            t.state.focused || (t.display.shift = !1);
          }, 150));
      }
      function kn(t) {
        for (
          var e = t.display, r = e.lineDiv.offsetTop, n = 0;
          n < e.view.length;
          n++
        ) {
          var i = e.view[n],
            o = t.options.lineWrapping,
            s = void 0,
            u = 0;
          if (!i.hidden) {
            if (a && l < 8) {
              var c = i.node.offsetTop + i.node.offsetHeight;
              (s = c - r), (r = c);
            } else {
              var f = i.node.getBoundingClientRect();
              (s = f.bottom - f.top),
                !o &&
                  i.text.firstChild &&
                  (u =
                    i.text.firstChild.getBoundingClientRect().right -
                    f.left -
                    1);
            }
            var d = i.line.height - s;
            if (
              (d > 0.005 || d < -0.005) &&
              (Yt(i.line, s), Tn(i.line), i.rest)
            )
              for (var h = 0; h < i.rest.length; h++) Tn(i.rest[h]);
            if (u > t.display.sizerWidth) {
              var p = Math.ceil(u / en(t.display));
              p > t.display.maxLineLength &&
                ((t.display.maxLineLength = p),
                (t.display.maxLine = i.line),
                (t.display.maxLineChanged = !0));
            }
          }
        }
      }
      function Tn(t) {
        if (t.widgets)
          for (var e = 0; e < t.widgets.length; ++e) {
            var r = t.widgets[e],
              n = r.node.parentNode;
            n && (r.height = n.offsetHeight);
          }
      }
      function Ln(t, e, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : t.scroller.scrollTop;
        n = Math.floor(n - Sr(t));
        var i = r && null != r.bottom ? r.bottom : n + t.wrapper.clientHeight,
          o = Zt(e, n),
          a = Zt(e, i);
        if (r && r.ensure) {
          var l = r.ensure.from.line,
            s = r.ensure.to.line;
          l < o
            ? ((o = l), (a = Zt(e, Ge($t(e, l)) + t.wrapper.clientHeight)))
            : Math.min(s, e.lastLine()) >= a &&
              ((o = Zt(e, Ge($t(e, s)) - t.wrapper.clientHeight)), (a = s));
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function On(t, e) {
        var r = t.display,
          n = tn(t.display);
        e.top < 0 && (e.top = 0);
        var i =
            t.curOp && null != t.curOp.scrollTop
              ? t.curOp.scrollTop
              : r.scroller.scrollTop,
          o = Or(t),
          a = {};
        e.bottom - e.top > o && (e.bottom = e.top + o);
        var l = t.doc.height + Cr(r),
          s = e.top < n,
          u = e.bottom > l - n;
        if (e.top < i) a.scrollTop = s ? 0 : e.top;
        else if (e.bottom > i + o) {
          var c = Math.min(e.top, (u ? l : e.bottom) - o);
          c != i && (a.scrollTop = c);
        }
        var f =
            t.curOp && null != t.curOp.scrollLeft
              ? t.curOp.scrollLeft
              : r.scroller.scrollLeft,
          d = Lr(t) - (t.options.fixedGutter ? r.gutters.offsetWidth : 0),
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
      function Mn(t, e) {
        null != e &&
          (En(t),
          (t.curOp.scrollTop =
            (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) +
            e));
      }
      function _n(t) {
        En(t);
        var e = t.getCursor();
        t.curOp.scrollToPos = {
          from: e,
          to: e,
          margin: t.options.cursorScrollMargin,
        };
      }
      function An(t, e, r) {
        (null == e && null == r) || En(t),
          null != e && (t.curOp.scrollLeft = e),
          null != r && (t.curOp.scrollTop = r);
      }
      function En(t) {
        var e = t.curOp.scrollToPos;
        if (e) {
          t.curOp.scrollToPos = null;
          var r = Kr(t, e.from),
            n = Kr(t, e.to);
          Nn(t, r, n, e.margin);
        }
      }
      function Nn(t, e, r, n) {
        var i = On(t, {
          left: Math.min(e.left, r.left),
          top: Math.min(e.top, r.top) - n,
          right: Math.max(e.right, r.right),
          bottom: Math.max(e.bottom, r.bottom) + n,
        });
        An(t, i.scrollLeft, i.scrollTop);
      }
      function Pn(t, e) {
        Math.abs(t.doc.scrollTop - e) < 2 ||
          (r || oi(t, { top: e }), jn(t, e, !0), r && oi(t), ti(t, 100));
      }
      function jn(t, e, r) {
        (e = Math.min(
          t.display.scroller.scrollHeight - t.display.scroller.clientHeight,
          e
        )),
          (t.display.scroller.scrollTop != e || r) &&
            ((t.doc.scrollTop = e),
            t.display.scrollbars.setScrollTop(e),
            t.display.scroller.scrollTop != e &&
              (t.display.scroller.scrollTop = e));
      }
      function Dn(t, e, r, n) {
        (e = Math.min(
          e,
          t.display.scroller.scrollWidth - t.display.scroller.clientWidth
        )),
          ((r ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) &&
            !n) ||
            ((t.doc.scrollLeft = e),
            si(t),
            t.display.scroller.scrollLeft != e &&
              (t.display.scroller.scrollLeft = e),
            t.display.scrollbars.setScrollLeft(e));
      }
      function In(t) {
        var e = t.display,
          r = e.gutters.offsetWidth,
          n = Math.round(t.doc.height + Cr(t.display));
        return {
          clientHeight: e.scroller.clientHeight,
          viewHeight: e.wrapper.clientHeight,
          scrollWidth: e.scroller.scrollWidth,
          clientWidth: e.scroller.clientWidth,
          viewWidth: e.wrapper.clientWidth,
          barLeft: t.options.fixedGutter ? r : 0,
          docHeight: n,
          scrollHeight: n + Tr(t) + e.barHeight,
          nativeBarWidth: e.nativeBarWidth,
          gutterWidth: r,
        };
      }
      var Fn = function(t, e, r) {
        this.cm = r;
        var n = (this.vert = _(
            'div',
            [_('div', null, null, 'min-width: 1px')],
            'CodeMirror-vscrollbar'
          )),
          i = (this.horiz = _(
            'div',
            [_('div', null, null, 'height: 100%; min-height: 1px')],
            'CodeMirror-hscrollbar'
          ));
        (n.tabIndex = i.tabIndex = -1),
          t(n),
          t(i),
          dt(n, 'scroll', function() {
            n.clientHeight && e(n.scrollTop, 'vertical');
          }),
          dt(i, 'scroll', function() {
            i.clientWidth && e(i.scrollLeft, 'horizontal');
          }),
          (this.checkedZeroWidth = !1),
          a &&
            l < 8 &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
      };
      (Fn.prototype.update = function(t) {
        var e = t.scrollWidth > t.clientWidth + 1,
          r = t.scrollHeight > t.clientHeight + 1,
          n = t.nativeBarWidth;
        if (r) {
          (this.vert.style.display = 'block'),
            (this.vert.style.bottom = e ? n + 'px' : '0');
          var i = t.viewHeight - (e ? n : 0);
          this.vert.firstChild.style.height =
            Math.max(0, t.scrollHeight - t.clientHeight + i) + 'px';
        } else
          (this.vert.style.display = ''),
            (this.vert.firstChild.style.height = '0');
        if (e) {
          (this.horiz.style.display = 'block'),
            (this.horiz.style.right = r ? n + 'px' : '0'),
            (this.horiz.style.left = t.barLeft + 'px');
          var o = t.viewWidth - t.barLeft - (r ? n : 0);
          this.horiz.firstChild.style.width =
            Math.max(0, t.scrollWidth - t.clientWidth + o) + 'px';
        } else
          (this.horiz.style.display = ''),
            (this.horiz.firstChild.style.width = '0');
        return (
          !this.checkedZeroWidth &&
            t.clientHeight > 0 &&
            (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: r ? n : 0, bottom: e ? n : 0 }
        );
      }),
        (Fn.prototype.setScrollLeft = function(t) {
          this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
        }),
        (Fn.prototype.setScrollTop = function(t) {
          this.vert.scrollTop != t && (this.vert.scrollTop = t),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
        }),
        (Fn.prototype.zeroWidthHack = function() {
          var t = y && !h ? '12px' : '18px';
          (this.horiz.style.height = this.vert.style.width = t),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              'none'),
            (this.disableHoriz = new z()),
            (this.disableVert = new z());
        }),
        (Fn.prototype.enableZeroWidthBar = function(t, e, r) {
          (t.style.pointerEvents = 'auto'),
            e.set(1e3, function n() {
              var i = t.getBoundingClientRect(),
                o =
                  'vert' == r
                    ? document.elementFromPoint(
                        i.right - 1,
                        (i.top + i.bottom) / 2
                      )
                    : document.elementFromPoint(
                        (i.right + i.left) / 2,
                        i.bottom - 1
                      );
              o != t ? (t.style.pointerEvents = 'none') : e.set(1e3, n);
            });
        }),
        (Fn.prototype.clear = function() {
          var t = this.horiz.parentNode;
          t.removeChild(this.horiz), t.removeChild(this.vert);
        });
      var Wn = function() {};
      function zn(t, e) {
        e || (e = In(t));
        var r = t.display.barWidth,
          n = t.display.barHeight;
        Hn(t, e);
        for (
          var i = 0;
          (i < 4 && r != t.display.barWidth) || n != t.display.barHeight;
          i++
        )
          r != t.display.barWidth && t.options.lineWrapping && kn(t),
            Hn(t, In(t)),
            (r = t.display.barWidth),
            (n = t.display.barHeight);
      }
      function Hn(t, e) {
        var r = t.display,
          n = r.scrollbars.update(e);
        (r.sizer.style.paddingRight = (r.barWidth = n.right) + 'px'),
          (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + 'px'),
          (r.heightForcer.style.borderBottom =
            n.bottom + 'px solid transparent'),
          n.right && n.bottom
            ? ((r.scrollbarFiller.style.display = 'block'),
              (r.scrollbarFiller.style.height = n.bottom + 'px'),
              (r.scrollbarFiller.style.width = n.right + 'px'))
            : (r.scrollbarFiller.style.display = ''),
          n.bottom &&
          t.options.coverGutterNextToScrollbar &&
          t.options.fixedGutter
            ? ((r.gutterFiller.style.display = 'block'),
              (r.gutterFiller.style.height = n.bottom + 'px'),
              (r.gutterFiller.style.width = e.gutterWidth + 'px'))
            : (r.gutterFiller.style.display = '');
      }
      (Wn.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }),
        (Wn.prototype.setScrollLeft = function() {}),
        (Wn.prototype.setScrollTop = function() {}),
        (Wn.prototype.clear = function() {});
      var Rn = { native: Fn, null: Wn };
      function Bn(t) {
        t.display.scrollbars &&
          (t.display.scrollbars.clear(),
          t.display.scrollbars.addClass &&
            L(t.display.wrapper, t.display.scrollbars.addClass)),
          (t.display.scrollbars = new Rn[t.options.scrollbarStyle](
            function(e) {
              t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
                dt(e, 'mousedown', function() {
                  t.state.focused &&
                    setTimeout(function() {
                      return t.display.input.focus();
                    }, 0);
                }),
                e.setAttribute('cm-not-content', 'true');
            },
            function(e, r) {
              'horizontal' == r ? Dn(t, e) : Pn(t, e);
            },
            t
          )),
          t.display.scrollbars.addClass &&
            P(t.display.wrapper, t.display.scrollbars.addClass);
      }
      var Gn = 0;
      function Vn(t) {
        var e;
        (t.curOp = {
          cm: t,
          viewChanged: !1,
          startHeight: t.doc.height,
          forceUpdate: !1,
          updateInput: 0,
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
          id: ++Gn,
        }),
          (e = t.curOp),
          or
            ? or.ops.push(e)
            : (e.ownsGroup = or = { ops: [e], delayedCallbacks: [] });
      }
      function Un(t) {
        var e = t.curOp;
        e &&
          (function(t, e) {
            var r = t.ownsGroup;
            if (r)
              try {
                !(function(t) {
                  var e = t.delayedCallbacks,
                    r = 0;
                  do {
                    for (; r < e.length; r++) e[r].call(null);
                    for (var n = 0; n < t.ops.length; n++) {
                      var i = t.ops[n];
                      if (i.cursorActivityHandlers)
                        for (
                          ;
                          i.cursorActivityCalled <
                          i.cursorActivityHandlers.length;

                        )
                          i.cursorActivityHandlers[
                            i.cursorActivityCalled++
                          ].call(null, i.cm);
                    }
                  } while (r < e.length);
                })(r);
              } finally {
                (or = null), e(r);
              }
          })(e, function(t) {
            for (var e = 0; e < t.ops.length; e++) t.ops[e].cm.curOp = null;
            !(function(t) {
              for (var e = t.ops, r = 0; r < e.length; r++) $n(e[r]);
              for (var n = 0; n < e.length; n++)
                (i = e[n]).updatedDisplay = i.mustUpdate && ni(i.cm, i.update);
              for (var i, o = 0; o < e.length; o++) Kn(e[o]);
              for (var a = 0; a < e.length; a++) qn(e[a]);
              for (var l = 0; l < e.length; l++) Yn(e[l]);
            })(t);
          });
      }
      function $n(t) {
        var e = t.cm,
          r = e.display;
        !(function(t) {
          var e = t.display;
          !e.scrollbarsClipped &&
            e.scroller.offsetWidth &&
            ((e.nativeBarWidth =
              e.scroller.offsetWidth - e.scroller.clientWidth),
            (e.heightForcer.style.height = Tr(t) + 'px'),
            (e.sizer.style.marginBottom = -e.nativeBarWidth + 'px'),
            (e.sizer.style.borderRightWidth = Tr(t) + 'px'),
            (e.scrollbarsClipped = !0));
        })(e),
          t.updateMaxLine && Ue(e),
          (t.mustUpdate =
            t.viewChanged ||
            t.forceUpdate ||
            null != t.scrollTop ||
            (t.scrollToPos &&
              (t.scrollToPos.from.line < r.viewFrom ||
                t.scrollToPos.to.line >= r.viewTo)) ||
            (r.maxLineChanged && e.options.lineWrapping)),
          (t.update =
            t.mustUpdate &&
            new ri(
              e,
              t.mustUpdate && { top: t.scrollTop, ensure: t.scrollToPos },
              t.forceUpdate
            ));
      }
      function Kn(t) {
        var e = t.cm,
          r = e.display;
        t.updatedDisplay && kn(e),
          (t.barMeasure = In(e)),
          r.maxLineChanged &&
            !e.options.lineWrapping &&
            ((t.adjustWidthTo =
              _r(e, r.maxLine, r.maxLine.text.length).left + 3),
            (e.display.sizerWidth = t.adjustWidthTo),
            (t.barMeasure.scrollWidth = Math.max(
              r.scroller.clientWidth,
              r.sizer.offsetLeft + t.adjustWidthTo + Tr(e) + e.display.barWidth
            )),
            (t.maxScrollLeft = Math.max(
              0,
              r.sizer.offsetLeft + t.adjustWidthTo - Lr(e)
            ))),
          (t.updatedDisplay || t.selectionChanged) &&
            (t.preparedSelection = r.input.prepareSelection());
      }
      function qn(t) {
        var e = t.cm;
        null != t.adjustWidthTo &&
          ((e.display.sizer.style.minWidth = t.adjustWidthTo + 'px'),
          t.maxScrollLeft < e.doc.scrollLeft &&
            Dn(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0),
          (e.display.maxLineChanged = !1));
        var r = t.focus && t.focus == N();
        t.preparedSelection &&
          e.display.input.showSelection(t.preparedSelection, r),
          (t.updatedDisplay || t.startHeight != e.doc.height) &&
            zn(e, t.barMeasure),
          t.updatedDisplay && li(e, t.barMeasure),
          t.selectionChanged && bn(e),
          e.state.focused && t.updateInput && e.display.input.reset(t.typing),
          r && xn(t.cm);
      }
      function Yn(t) {
        var e = t.cm,
          r = e.display,
          n = e.doc;
        if (
          (t.updatedDisplay && ii(e, t.update),
          null == r.wheelStartX ||
            (null == t.scrollTop && null == t.scrollLeft && !t.scrollToPos) ||
            (r.wheelStartX = r.wheelStartY = null),
          null != t.scrollTop && jn(e, t.scrollTop, t.forceScroll),
          null != t.scrollLeft && Dn(e, t.scrollLeft, !0, !0),
          t.scrollToPos)
        ) {
          var i = (function(t, e, r, n) {
            var i;
            null == n && (n = 0),
              t.options.lineWrapping ||
                e != r ||
                ((e = e.ch
                  ? te(e.line, 'before' == e.sticky ? e.ch - 1 : e.ch, 'after')
                  : e),
                (r =
                  'before' == e.sticky ? te(e.line, e.ch + 1, 'before') : e));
            for (var o = 0; o < 5; o++) {
              var a = !1,
                l = $r(t, e),
                s = r && r != e ? $r(t, r) : l;
              i = {
                left: Math.min(l.left, s.left),
                top: Math.min(l.top, s.top) - n,
                right: Math.max(l.left, s.left),
                bottom: Math.max(l.bottom, s.bottom) + n,
              };
              var u = On(t, i),
                c = t.doc.scrollTop,
                f = t.doc.scrollLeft;
              if (
                (null != u.scrollTop &&
                  (Pn(t, u.scrollTop),
                  Math.abs(t.doc.scrollTop - c) > 1 && (a = !0)),
                null != u.scrollLeft &&
                  (Dn(t, u.scrollLeft),
                  Math.abs(t.doc.scrollLeft - f) > 1 && (a = !0)),
                !a)
              )
                break;
            }
            return i;
          })(
            e,
            le(n, t.scrollToPos.from),
            le(n, t.scrollToPos.to),
            t.scrollToPos.margin
          );
          !(function(t, e) {
            if (!gt(t, 'scrollCursorIntoView')) {
              var r = t.display,
                n = r.sizer.getBoundingClientRect(),
                i = null;
              if (
                (e.top + n.top < 0
                  ? (i = !0)
                  : e.bottom + n.top >
                      (window.innerHeight ||
                        document.documentElement.clientHeight) && (i = !1),
                null != i && !p)
              ) {
                var o = _(
                  'div',
                  '​',
                  null,
                  'position: absolute;\n                         top: ' +
                    (e.top - r.viewOffset - Sr(t.display)) +
                    'px;\n                         height: ' +
                    (e.bottom - e.top + Tr(t) + r.barHeight) +
                    'px;\n                         left: ' +
                    e.left +
                    'px; width: ' +
                    Math.max(2, e.right - e.left) +
                    'px;'
                );
                t.display.lineSpace.appendChild(o),
                  o.scrollIntoView(i),
                  t.display.lineSpace.removeChild(o);
              }
            }
          })(e, i);
        }
        var o = t.maybeHiddenMarkers,
          a = t.maybeUnhiddenMarkers;
        if (o)
          for (var l = 0; l < o.length; ++l)
            o[l].lines.length || vt(o[l], 'hide');
        if (a)
          for (var s = 0; s < a.length; ++s)
            a[s].lines.length && vt(a[s], 'unhide');
        r.wrapper.offsetHeight && (n.scrollTop = e.display.scroller.scrollTop),
          t.changeObjs && vt(e, 'changes', e, t.changeObjs),
          t.update && t.update.finish();
      }
      function Xn(t, e) {
        if (t.curOp) return e();
        Vn(t);
        try {
          return e();
        } finally {
          Un(t);
        }
      }
      function Zn(t, e) {
        return function() {
          if (t.curOp) return e.apply(t, arguments);
          Vn(t);
          try {
            return e.apply(t, arguments);
          } finally {
            Un(t);
          }
        };
      }
      function Jn(t) {
        return function() {
          if (this.curOp) return t.apply(this, arguments);
          Vn(this);
          try {
            return t.apply(this, arguments);
          } finally {
            Un(this);
          }
        };
      }
      function Qn(t) {
        return function() {
          var e = this.cm;
          if (!e || e.curOp) return t.apply(this, arguments);
          Vn(e);
          try {
            return t.apply(this, arguments);
          } finally {
            Un(e);
          }
        };
      }
      function ti(t, e) {
        t.doc.highlightFrontier < t.display.viewTo &&
          t.state.highlight.set(e, I(ei, t));
      }
      function ei(t) {
        var e = t.doc;
        if (!(e.highlightFrontier >= t.display.viewTo)) {
          var r = +new Date() + t.options.workTime,
            n = he(t, e.highlightFrontier),
            i = [];
          e.iter(
            n.line,
            Math.min(e.first + e.size, t.display.viewTo + 500),
            function(o) {
              if (n.line >= t.display.viewFrom) {
                var a = o.styles,
                  l =
                    o.text.length > t.options.maxHighlightLength
                      ? Bt(e.mode, n.state)
                      : null,
                  s = fe(t, o, n, !0);
                l && (n.state = l), (o.styles = s.styles);
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
                f && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
              } else
                o.text.length <= t.options.maxHighlightLength &&
                  pe(t, o.text, n),
                  (o.stateAfter = n.line % 5 == 0 ? n.save() : null),
                  n.nextLine();
              if (+new Date() > r) return ti(t, t.options.workDelay), !0;
            }
          ),
            (e.highlightFrontier = n.line),
            (e.modeFrontier = Math.max(e.modeFrontier, n.line)),
            i.length &&
              Xn(t, function() {
                for (var e = 0; e < i.length; e++) cn(t, i[e], 'text');
              });
        }
      }
      var ri = function(t, e, r) {
        var n = t.display;
        (this.viewport = e),
          (this.visible = Ln(n, t.doc, e)),
          (this.editorIsHidden = !n.wrapper.offsetWidth),
          (this.wrapperHeight = n.wrapper.clientHeight),
          (this.wrapperWidth = n.wrapper.clientWidth),
          (this.oldDisplayWidth = Lr(t)),
          (this.force = r),
          (this.dims = rn(t)),
          (this.events = []);
      };
      function ni(t, e) {
        var r = t.display,
          n = t.doc;
        if (e.editorIsHidden) return fn(t), !1;
        if (
          !e.force &&
          e.visible.from >= r.viewFrom &&
          e.visible.to <= r.viewTo &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
          r.renderedView == r.view &&
          0 == hn(t)
        )
          return !1;
        ui(t) && (fn(t), (e.dims = rn(t)));
        var i = n.first + n.size,
          o = Math.max(e.visible.from - t.options.viewportMargin, n.first),
          a = Math.min(i, e.visible.to + t.options.viewportMargin);
        r.viewFrom < o &&
          o - r.viewFrom < 20 &&
          (o = Math.max(n.first, r.viewFrom)),
          r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)),
          Se && ((o = ze(t.doc, o)), (a = He(t.doc, a)));
        var l =
          o != r.viewFrom ||
          a != r.viewTo ||
          r.lastWrapHeight != e.wrapperHeight ||
          r.lastWrapWidth != e.wrapperWidth;
        !(function(t, e, r) {
          var n = t.display;
          0 == n.view.length || e >= n.viewTo || r <= n.viewFrom
            ? ((n.view = ir(t, e, r)), (n.viewFrom = e))
            : (n.viewFrom > e
                ? (n.view = ir(t, e, n.viewFrom).concat(n.view))
                : n.viewFrom < e && (n.view = n.view.slice(sn(t, e))),
              (n.viewFrom = e),
              n.viewTo < r
                ? (n.view = n.view.concat(ir(t, n.viewTo, r)))
                : n.viewTo > r && (n.view = n.view.slice(0, sn(t, r)))),
            (n.viewTo = r);
        })(t, o, a),
          (r.viewOffset = Ge($t(t.doc, r.viewFrom))),
          (t.display.mover.style.top = r.viewOffset + 'px');
        var u = hn(t);
        if (
          !l &&
          0 == u &&
          !e.force &&
          r.renderedView == r.view &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)
        )
          return !1;
        var c = (function(t) {
          if (t.hasFocus()) return null;
          var e = N();
          if (!e || !E(t.display.lineDiv, e)) return null;
          var r = { activeElt: e };
          if (window.getSelection) {
            var n = window.getSelection();
            n.anchorNode &&
              n.extend &&
              E(t.display.lineDiv, n.anchorNode) &&
              ((r.anchorNode = n.anchorNode),
              (r.anchorOffset = n.anchorOffset),
              (r.focusNode = n.focusNode),
              (r.focusOffset = n.focusOffset));
          }
          return r;
        })(t);
        return (
          u > 4 && (r.lineDiv.style.display = 'none'),
          (function(t, e, r) {
            var n = t.display,
              i = t.options.lineNumbers,
              o = n.lineDiv,
              a = o.firstChild;
            function l(e) {
              var r = e.nextSibling;
              return (
                s && y && t.display.currentWheelTarget == e
                  ? (e.style.display = 'none')
                  : e.parentNode.removeChild(e),
                r
              );
            }
            for (var u = n.view, c = n.viewFrom, f = 0; f < u.length; f++) {
              var d = u[f];
              if (d.hidden);
              else if (d.node && d.node.parentNode == o) {
                for (; a != d.node; ) a = l(a);
                var h = i && null != e && e <= c && d.lineNumber;
                d.changes &&
                  (H(d.changes, 'gutter') > -1 && (h = !1), ur(t, d, c, r)),
                  h &&
                    (O(d.lineNumber),
                    d.lineNumber.appendChild(
                      document.createTextNode(Qt(t.options, c))
                    )),
                  (a = d.node.nextSibling);
              } else {
                var p = gr(t, d, c, r);
                o.insertBefore(p, a);
              }
              c += d.size;
            }
            for (; a; ) a = l(a);
          })(t, r.updateLineNumbers, e.dims),
          u > 4 && (r.lineDiv.style.display = ''),
          (r.renderedView = r.view),
          (function(t) {
            if (
              t &&
              t.activeElt &&
              t.activeElt != N() &&
              (t.activeElt.focus(),
              t.anchorNode &&
                E(document.body, t.anchorNode) &&
                E(document.body, t.focusNode))
            ) {
              var e = window.getSelection(),
                r = document.createRange();
              r.setEnd(t.anchorNode, t.anchorOffset),
                r.collapse(!1),
                e.removeAllRanges(),
                e.addRange(r),
                e.extend(t.focusNode, t.focusOffset);
            }
          })(c),
          O(r.cursorDiv),
          O(r.selectionDiv),
          (r.gutters.style.height = r.sizer.style.minHeight = 0),
          l &&
            ((r.lastWrapHeight = e.wrapperHeight),
            (r.lastWrapWidth = e.wrapperWidth),
            ti(t, 400)),
          (r.updateLineNumbers = null),
          !0
        );
      }
      function ii(t, e) {
        for (
          var r = e.viewport, n = !0;
          ((n && t.options.lineWrapping && e.oldDisplayWidth != Lr(t)) ||
            (r &&
              null != r.top &&
              (r = {
                top: Math.min(t.doc.height + Cr(t.display) - Or(t), r.top),
              }),
            (e.visible = Ln(t.display, t.doc, r)),
            !(
              e.visible.from >= t.display.viewFrom &&
              e.visible.to <= t.display.viewTo
            ))) &&
          ni(t, e);
          n = !1
        ) {
          kn(t);
          var i = In(t);
          pn(t), zn(t, i), li(t, i), (e.force = !1);
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
      function oi(t, e) {
        var r = new ri(t, e);
        if (ni(t, r)) {
          kn(t), ii(t, r);
          var n = In(t);
          pn(t), zn(t, n), li(t, n), r.finish();
        }
      }
      function ai(t) {
        var e = t.gutters.offsetWidth;
        t.sizer.style.marginLeft = e + 'px';
      }
      function li(t, e) {
        (t.display.sizer.style.minHeight = e.docHeight + 'px'),
          (t.display.heightForcer.style.top = e.docHeight + 'px'),
          (t.display.gutters.style.height =
            e.docHeight + t.display.barHeight + Tr(t) + 'px');
      }
      function si(t) {
        var e = t.display,
          r = e.view;
        if (e.alignWidgets || (e.gutters.firstChild && t.options.fixedGutter)) {
          for (
            var n = nn(e) - e.scroller.scrollLeft + t.doc.scrollLeft,
              i = e.gutters.offsetWidth,
              o = n + 'px',
              a = 0;
            a < r.length;
            a++
          )
            if (!r[a].hidden) {
              t.options.fixedGutter &&
                (r[a].gutter && (r[a].gutter.style.left = o),
                r[a].gutterBackground &&
                  (r[a].gutterBackground.style.left = o));
              var l = r[a].alignable;
              if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
            }
          t.options.fixedGutter && (e.gutters.style.left = n + i + 'px');
        }
      }
      function ui(t) {
        if (!t.options.lineNumbers) return !1;
        var e = t.doc,
          r = Qt(t.options, e.first + e.size - 1),
          n = t.display;
        if (r.length != n.lineNumChars) {
          var i = n.measure.appendChild(
              _(
                'div',
                [_('div', r)],
                'CodeMirror-linenumber CodeMirror-gutter-elt'
              )
            ),
            o = i.firstChild.offsetWidth,
            a = i.offsetWidth - o;
          return (
            (n.lineGutter.style.width = ''),
            (n.lineNumInnerWidth =
              Math.max(o, n.lineGutter.offsetWidth - a) + 1),
            (n.lineNumWidth = n.lineNumInnerWidth + a),
            (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
            (n.lineGutter.style.width = n.lineNumWidth + 'px'),
            ai(t.display),
            !0
          );
        }
        return !1;
      }
      function ci(t, e) {
        for (var r = [], n = !1, i = 0; i < t.length; i++) {
          var o = t[i],
            a = null;
          if (
            ('string' != typeof o && ((a = o.style), (o = o.className)),
            'CodeMirror-linenumbers' == o)
          ) {
            if (!e) continue;
            n = !0;
          }
          r.push({ className: o, style: a });
        }
        return (
          e &&
            !n &&
            r.push({ className: 'CodeMirror-linenumbers', style: null }),
          r
        );
      }
      function fi(t) {
        var e = t.gutters,
          r = t.gutterSpecs;
        O(e), (t.lineGutter = null);
        for (var n = 0; n < r.length; ++n) {
          var i = r[n],
            o = i.className,
            a = i.style,
            l = e.appendChild(_('div', null, 'CodeMirror-gutter ' + o));
          a && (l.style.cssText = a),
            'CodeMirror-linenumbers' == o &&
              ((t.lineGutter = l),
              (l.style.width = (t.lineNumWidth || 1) + 'px'));
        }
        (e.style.display = r.length ? '' : 'none'), ai(t);
      }
      function di(t) {
        fi(t.display), un(t), si(t);
      }
      function hi(t, e, n, i) {
        var o = this;
        (this.input = n),
          (o.scrollbarFiller = _('div', null, 'CodeMirror-scrollbar-filler')),
          o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
          (o.gutterFiller = _('div', null, 'CodeMirror-gutter-filler')),
          o.gutterFiller.setAttribute('cm-not-content', 'true'),
          (o.lineDiv = A('div', null, 'CodeMirror-code')),
          (o.selectionDiv = _(
            'div',
            null,
            null,
            'position: relative; z-index: 1'
          )),
          (o.cursorDiv = _('div', null, 'CodeMirror-cursors')),
          (o.measure = _('div', null, 'CodeMirror-measure')),
          (o.lineMeasure = _('div', null, 'CodeMirror-measure')),
          (o.lineSpace = A(
            'div',
            [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
            null,
            'position: relative; outline: none'
          ));
        var u = A('div', [o.lineSpace], 'CodeMirror-lines');
        (o.mover = _('div', [u], null, 'position: relative')),
          (o.sizer = _('div', [o.mover], 'CodeMirror-sizer')),
          (o.sizerWidth = null),
          (o.heightForcer = _(
            'div',
            null,
            null,
            'position: absolute; height: ' + R + 'px; width: 1px;'
          )),
          (o.gutters = _('div', null, 'CodeMirror-gutters')),
          (o.lineGutter = null),
          (o.scroller = _(
            'div',
            [o.sizer, o.heightForcer, o.gutters],
            'CodeMirror-scroll'
          )),
          o.scroller.setAttribute('tabIndex', '-1'),
          (o.wrapper = _(
            'div',
            [o.scrollbarFiller, o.gutterFiller, o.scroller],
            'CodeMirror'
          )),
          a &&
            l < 8 &&
            ((o.gutters.style.zIndex = -1),
            (o.scroller.style.paddingRight = 0)),
          s || (r && m) || (o.scroller.draggable = !0),
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
          (o.gutterSpecs = ci(i.gutters, i.lineNumbers)),
          fi(o),
          n.init(o);
      }
      (ri.prototype.signal = function(t, e) {
        yt(t, e) && this.events.push(arguments);
      }),
        (ri.prototype.finish = function() {
          for (var t = 0; t < this.events.length; t++)
            vt.apply(null, this.events[t]);
        });
      var pi = 0,
        vi = null;
      function gi(t) {
        var e = t.wheelDeltaX,
          r = t.wheelDeltaY;
        return (
          null == e &&
            t.detail &&
            t.axis == t.HORIZONTAL_AXIS &&
            (e = t.detail),
          null == r && t.detail && t.axis == t.VERTICAL_AXIS
            ? (r = t.detail)
            : null == r && (r = t.wheelDelta),
          { x: e, y: r }
        );
      }
      function mi(t) {
        var e = gi(t);
        return (e.x *= vi), (e.y *= vi), e;
      }
      function yi(t, e) {
        var n = gi(e),
          i = n.x,
          o = n.y,
          a = t.display,
          l = a.scroller,
          u = l.scrollWidth > l.clientWidth,
          c = l.scrollHeight > l.clientHeight;
        if ((i && u) || (o && c)) {
          if (o && y && s)
            t: for (var d = e.target, h = a.view; d != l; d = d.parentNode)
              for (var p = 0; p < h.length; p++)
                if (h[p].node == d) {
                  t.display.currentWheelTarget = d;
                  break t;
                }
          if (i && !r && !f && null != vi)
            return (
              o && c && Pn(t, Math.max(0, l.scrollTop + o * vi)),
              Dn(t, Math.max(0, l.scrollLeft + i * vi)),
              (!o || (o && c)) && xt(e),
              void (a.wheelStartX = null)
            );
          if (o && null != vi) {
            var v = o * vi,
              g = t.doc.scrollTop,
              m = g + a.wrapper.clientHeight;
            v < 0
              ? (g = Math.max(0, g + v - 50))
              : (m = Math.min(t.doc.height, m + v + 50)),
              oi(t, { top: g, bottom: m });
          }
          pi < 20 &&
            (null == a.wheelStartX
              ? ((a.wheelStartX = l.scrollLeft),
                (a.wheelStartY = l.scrollTop),
                (a.wheelDX = i),
                (a.wheelDY = o),
                setTimeout(function() {
                  if (null != a.wheelStartX) {
                    var t = l.scrollLeft - a.wheelStartX,
                      e = l.scrollTop - a.wheelStartY,
                      r =
                        (e && a.wheelDY && e / a.wheelDY) ||
                        (t && a.wheelDX && t / a.wheelDX);
                    (a.wheelStartX = a.wheelStartY = null),
                      r && ((vi = (vi * pi + r) / (pi + 1)), ++pi);
                  }
                }, 200))
              : ((a.wheelDX += i), (a.wheelDY += o)));
        }
      }
      a ? (vi = -0.53) : r ? (vi = 15) : c ? (vi = -0.7) : d && (vi = -1 / 3);
      var bi = function(t, e) {
        (this.ranges = t), (this.primIndex = e);
      };
      (bi.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }),
        (bi.prototype.equals = function(t) {
          if (t == this) return !0;
          if (
            t.primIndex != this.primIndex ||
            t.ranges.length != this.ranges.length
          )
            return !1;
          for (var e = 0; e < this.ranges.length; e++) {
            var r = this.ranges[e],
              n = t.ranges[e];
            if (!re(r.anchor, n.anchor) || !re(r.head, n.head)) return !1;
          }
          return !0;
        }),
        (bi.prototype.deepCopy = function() {
          for (var t = [], e = 0; e < this.ranges.length; e++)
            t[e] = new xi(ne(this.ranges[e].anchor), ne(this.ranges[e].head));
          return new bi(t, this.primIndex);
        }),
        (bi.prototype.somethingSelected = function() {
          for (var t = 0; t < this.ranges.length; t++)
            if (!this.ranges[t].empty()) return !0;
          return !1;
        }),
        (bi.prototype.contains = function(t, e) {
          e || (e = t);
          for (var r = 0; r < this.ranges.length; r++) {
            var n = this.ranges[r];
            if (ee(e, n.from()) >= 0 && ee(t, n.to()) <= 0) return r;
          }
          return -1;
        });
      var xi = function(t, e) {
        (this.anchor = t), (this.head = e);
      };
      function wi(t, e, r) {
        var n = t && t.options.selectionsMayTouch,
          i = e[r];
        e.sort(function(t, e) {
          return ee(t.from(), e.from());
        }),
          (r = H(e, i));
        for (var o = 1; o < e.length; o++) {
          var a = e[o],
            l = e[o - 1],
            s = ee(l.to(), a.from());
          if (n && !a.empty() ? s > 0 : s >= 0) {
            var u = oe(l.from(), a.from()),
              c = ie(l.to(), a.to()),
              f = l.empty() ? a.from() == a.head : l.from() == l.head;
            o <= r && --r, e.splice(--o, 2, new xi(f ? c : u, f ? u : c));
          }
        }
        return new bi(e, r);
      }
      function Si(t, e) {
        return new bi([new xi(t, e || t)], 0);
      }
      function Ci(t) {
        return t.text
          ? te(
              t.from.line + t.text.length - 1,
              Y(t.text).length + (1 == t.text.length ? t.from.ch : 0)
            )
          : t.to;
      }
      function ki(t, e) {
        if (ee(t, e.from) < 0) return t;
        if (ee(t, e.to) <= 0) return Ci(e);
        var r = t.line + e.text.length - (e.to.line - e.from.line) - 1,
          n = t.ch;
        return t.line == e.to.line && (n += Ci(e).ch - e.to.ch), te(r, n);
      }
      function Ti(t, e) {
        for (var r = [], n = 0; n < t.sel.ranges.length; n++) {
          var i = t.sel.ranges[n];
          r.push(new xi(ki(i.anchor, e), ki(i.head, e)));
        }
        return wi(t.cm, r, t.sel.primIndex);
      }
      function Li(t, e, r) {
        return t.line == e.line
          ? te(r.line, t.ch - e.ch + r.ch)
          : te(r.line + (t.line - e.line), t.ch);
      }
      function Oi(t) {
        (t.doc.mode = zt(t.options, t.doc.modeOption)), Mi(t);
      }
      function Mi(t) {
        t.doc.iter(function(t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }),
          (t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first),
          ti(t, 100),
          t.state.modeGen++,
          t.curOp && un(t);
      }
      function _i(t, e) {
        return (
          0 == e.from.ch &&
          0 == e.to.ch &&
          '' == Y(e.text) &&
          (!t.cm || t.cm.options.wholeLineUpdateBefore)
        );
      }
      function Ai(t, e, r, n) {
        function i(t) {
          return r ? r[t] : null;
        }
        function o(t, r, i) {
          !(function(t, e, r, n) {
            (t.text = e),
              t.stateAfter && (t.stateAfter = null),
              t.styles && (t.styles = null),
              null != t.order && (t.order = null),
              Me(t),
              _e(t, r);
            var i = n ? n(t) : 1;
            i != t.height && Yt(t, i);
          })(t, r, i, n),
            lr(t, 'change', t, e);
        }
        function a(t, e) {
          for (var r = [], o = t; o < e; ++o) r.push(new $e(u[o], i(o), n));
          return r;
        }
        var l = e.from,
          s = e.to,
          u = e.text,
          c = $t(t, l.line),
          f = $t(t, s.line),
          d = Y(u),
          h = i(u.length - 1),
          p = s.line - l.line;
        if (e.full)
          t.insert(0, a(0, u.length)), t.remove(u.length, t.size - u.length);
        else if (_i(t, e)) {
          var v = a(0, u.length - 1);
          o(f, f.text, h),
            p && t.remove(l.line, p),
            v.length && t.insert(l.line, v);
        } else if (c == f)
          if (1 == u.length)
            o(c, c.text.slice(0, l.ch) + d + c.text.slice(s.ch), h);
          else {
            var g = a(1, u.length - 1);
            g.push(new $e(d + c.text.slice(s.ch), h, n)),
              o(c, c.text.slice(0, l.ch) + u[0], i(0)),
              t.insert(l.line + 1, g);
          }
        else if (1 == u.length)
          o(c, c.text.slice(0, l.ch) + u[0] + f.text.slice(s.ch), i(0)),
            t.remove(l.line + 1, p);
        else {
          o(c, c.text.slice(0, l.ch) + u[0], i(0)),
            o(f, d + f.text.slice(s.ch), h);
          var m = a(1, u.length - 1);
          p > 1 && t.remove(l.line + 1, p - 1), t.insert(l.line + 1, m);
        }
        lr(t, 'change', t, e);
      }
      function Ei(t, e, r) {
        !(function t(n, i, o) {
          if (n.linked)
            for (var a = 0; a < n.linked.length; ++a) {
              var l = n.linked[a];
              if (l.doc != i) {
                var s = o && l.sharedHist;
                (r && !s) || (e(l.doc, s), t(l.doc, n, s));
              }
            }
        })(t, null, !0);
      }
      function Ni(t, e) {
        if (e.cm) throw new Error('This document is already in use.');
        (t.doc = e),
          (e.cm = t),
          an(t),
          Oi(t),
          Pi(t),
          t.options.lineWrapping || Ue(t),
          (t.options.mode = e.modeOption),
          un(t);
      }
      function Pi(t) {
        ('rtl' == t.doc.direction ? P : L)(t.display.lineDiv, 'CodeMirror-rtl');
      }
      function ji(t) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = t || 1);
      }
      function Di(t, e) {
        var r = { from: ne(e.from), to: Ci(e), text: Kt(t, e.from, e.to) };
        return (
          Hi(t, r, e.from.line, e.to.line + 1),
          Ei(
            t,
            function(t) {
              return Hi(t, r, e.from.line, e.to.line + 1);
            },
            !0
          ),
          r
        );
      }
      function Ii(t) {
        for (; t.length; ) {
          var e = Y(t);
          if (!e.ranges) break;
          t.pop();
        }
      }
      function Fi(t, e, r, n) {
        var i = t.history;
        i.undone.length = 0;
        var o,
          a,
          l = +new Date();
        if (
          (i.lastOp == n ||
            (i.lastOrigin == e.origin &&
              e.origin &&
              (('+' == e.origin.charAt(0) &&
                i.lastModTime >
                  l - (t.cm ? t.cm.options.historyEventDelay : 500)) ||
                '*' == e.origin.charAt(0)))) &&
          (o = (function(t, e) {
            return e
              ? (Ii(t.done), Y(t.done))
              : t.done.length && !Y(t.done).ranges
              ? Y(t.done)
              : t.done.length > 1 && !t.done[t.done.length - 2].ranges
              ? (t.done.pop(), Y(t.done))
              : void 0;
          })(i, i.lastOp == n))
        )
          (a = Y(o.changes)),
            0 == ee(e.from, e.to) && 0 == ee(e.from, a.to)
              ? (a.to = Ci(e))
              : o.changes.push(Di(t, e));
        else {
          var s = Y(i.done);
          for (
            (s && s.ranges) || zi(t.sel, i.done),
              o = { changes: [Di(t, e)], generation: i.generation },
              i.done.push(o);
            i.done.length > i.undoDepth;

          )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(r),
          (i.generation = ++i.maxGeneration),
          (i.lastModTime = i.lastSelTime = l),
          (i.lastOp = i.lastSelOp = n),
          (i.lastOrigin = i.lastSelOrigin = e.origin),
          a || vt(t, 'historyAdded');
      }
      function Wi(t, e, r, n) {
        var i = t.history,
          o = n && n.origin;
        r == i.lastSelOp ||
        (o &&
          i.lastSelOrigin == o &&
          ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
            (function(t, e, r, n) {
              var i = e.charAt(0);
              return (
                '*' == i ||
                ('+' == i &&
                  r.ranges.length == n.ranges.length &&
                  r.somethingSelected() == n.somethingSelected() &&
                  new Date() - t.history.lastSelTime <=
                    (t.cm ? t.cm.options.historyEventDelay : 500))
              );
            })(t, o, Y(i.done), e)))
          ? (i.done[i.done.length - 1] = e)
          : zi(e, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = r),
          n && !1 !== n.clearRedo && Ii(i.undone);
      }
      function zi(t, e) {
        var r = Y(e);
        (r && r.ranges && r.equals(t)) || e.push(t);
      }
      function Hi(t, e, r, n) {
        var i = e['spans_' + t.id],
          o = 0;
        t.iter(Math.max(t.first, r), Math.min(t.first + t.size, n), function(
          r
        ) {
          r.markedSpans &&
            ((i || (i = e['spans_' + t.id] = {}))[o] = r.markedSpans),
            ++o;
        });
      }
      function Ri(t) {
        if (!t) return null;
        for (var e, r = 0; r < t.length; ++r)
          t[r].marker.explicitlyCleared
            ? e || (e = t.slice(0, r))
            : e && e.push(t[r]);
        return e ? (e.length ? e : null) : t;
      }
      function Bi(t, e) {
        var r = (function(t, e) {
            var r = e['spans_' + t.id];
            if (!r) return null;
            for (var n = [], i = 0; i < e.text.length; ++i) n.push(Ri(r[i]));
            return n;
          })(t, e),
          n = Le(t, e);
        if (!r) return n;
        if (!n) return r;
        for (var i = 0; i < r.length; ++i) {
          var o = r[i],
            a = n[i];
          if (o && a)
            t: for (var l = 0; l < a.length; ++l) {
              for (var s = a[l], u = 0; u < o.length; ++u)
                if (o[u].marker == s.marker) continue t;
              o.push(s);
            }
          else a && (r[i] = a);
        }
        return r;
      }
      function Gi(t, e, r) {
        for (var n = [], i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.ranges) n.push(r ? bi.prototype.deepCopy.call(o) : o);
          else {
            var a = o.changes,
              l = [];
            n.push({ changes: l });
            for (var s = 0; s < a.length; ++s) {
              var u = a[s],
                c = void 0;
              if ((l.push({ from: u.from, to: u.to, text: u.text }), e))
                for (var f in u)
                  (c = f.match(/^spans_(\d+)$/)) &&
                    H(e, Number(c[1])) > -1 &&
                    ((Y(l)[f] = u[f]), delete u[f]);
            }
          }
        }
        return n;
      }
      function Vi(t, e, r, n) {
        if (n) {
          var i = t.anchor;
          if (r) {
            var o = ee(e, i) < 0;
            o != ee(r, i) < 0
              ? ((i = e), (e = r))
              : o != ee(e, r) < 0 && (e = r);
          }
          return new xi(i, e);
        }
        return new xi(r || e, e);
      }
      function Ui(t, e, r, n, i) {
        null == i && (i = t.cm && (t.cm.display.shift || t.extend)),
          Xi(t, new bi([Vi(t.sel.primary(), e, r, i)], 0), n);
      }
      function $i(t, e, r) {
        for (
          var n = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0;
          o < t.sel.ranges.length;
          o++
        )
          n[o] = Vi(t.sel.ranges[o], e[o], null, i);
        var a = wi(t.cm, n, t.sel.primIndex);
        Xi(t, a, r);
      }
      function Ki(t, e, r, n) {
        var i = t.sel.ranges.slice(0);
        (i[e] = r), Xi(t, wi(t.cm, i, t.sel.primIndex), n);
      }
      function qi(t, e, r, n) {
        Xi(t, Si(e, r), n);
      }
      function Yi(t, e, r) {
        var n = t.history.done,
          i = Y(n);
        i && i.ranges ? ((n[n.length - 1] = e), Zi(t, e, r)) : Xi(t, e, r);
      }
      function Xi(t, e, r) {
        Zi(t, e, r), Wi(t, t.sel, t.cm ? t.cm.curOp.id : NaN, r);
      }
      function Zi(t, e, r) {
        (yt(t, 'beforeSelectionChange') ||
          (t.cm && yt(t.cm, 'beforeSelectionChange'))) &&
          (e = (function(t, e, r) {
            var n = {
              ranges: e.ranges,
              update: function(e) {
                this.ranges = [];
                for (var r = 0; r < e.length; r++)
                  this.ranges[r] = new xi(le(t, e[r].anchor), le(t, e[r].head));
              },
              origin: r && r.origin,
            };
            return (
              vt(t, 'beforeSelectionChange', t, n),
              t.cm && vt(t.cm, 'beforeSelectionChange', t.cm, n),
              n.ranges != e.ranges ? wi(t.cm, n.ranges, n.ranges.length - 1) : e
            );
          })(t, e, r));
        var n =
          (r && r.bias) ||
          (ee(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
        Ji(t, to(t, e, n, !0)), (r && !1 === r.scroll) || !t.cm || _n(t.cm);
      }
      function Ji(t, e) {
        e.equals(t.sel) ||
          ((t.sel = e),
          t.cm &&
            ((t.cm.curOp.updateInput = 1),
            (t.cm.curOp.selectionChanged = !0),
            mt(t.cm)),
          lr(t, 'cursorActivity', t));
      }
      function Qi(t) {
        Ji(t, to(t, t.sel, null, !1));
      }
      function to(t, e, r, n) {
        for (var i, o = 0; o < e.ranges.length; o++) {
          var a = e.ranges[o],
            l = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o],
            s = ro(t, a.anchor, l && l.anchor, r, n),
            u = ro(t, a.head, l && l.head, r, n);
          (i || s != a.anchor || u != a.head) &&
            (i || (i = e.ranges.slice(0, o)), (i[o] = new xi(s, u)));
        }
        return i ? wi(t.cm, i, e.primIndex) : e;
      }
      function eo(t, e, r, n, i) {
        var o = $t(t, e.line);
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
              if (r) {
                var u = s.find(n < 0 ? 1 : -1),
                  c = void 0;
                if (
                  ((n < 0 ? s.inclusiveRight : s.inclusiveLeft) &&
                    (u = no(t, u, -n, u && u.line == e.line ? o : null)),
                  u &&
                    u.line == e.line &&
                    (c = ee(u, r)) &&
                    (n < 0 ? c < 0 : c > 0))
                )
                  return eo(t, u, e, n, i);
              }
              var f = s.find(n < 0 ? -1 : 1);
              return (
                (n < 0 ? s.inclusiveLeft : s.inclusiveRight) &&
                  (f = no(t, f, n, f.line == e.line ? o : null)),
                f ? eo(t, f, e, n, i) : null
              );
            }
          }
        return e;
      }
      function ro(t, e, r, n, i) {
        var o = n || 1,
          a =
            eo(t, e, r, o, i) ||
            (!i && eo(t, e, r, o, !0)) ||
            eo(t, e, r, -o, i) ||
            (!i && eo(t, e, r, -o, !0));
        return a || ((t.cantEdit = !0), te(t.first, 0));
      }
      function no(t, e, r, n) {
        return r < 0 && 0 == e.ch
          ? e.line > t.first
            ? le(t, te(e.line - 1))
            : null
          : r > 0 && e.ch == (n || $t(t, e.line)).text.length
          ? e.line < t.first + t.size - 1
            ? te(e.line + 1, 0)
            : null
          : new te(e.line, e.ch + r);
      }
      function io(t) {
        t.setSelection(te(t.firstLine(), 0), te(t.lastLine()), G);
      }
      function oo(t, e, r) {
        var n = {
          canceled: !1,
          from: e.from,
          to: e.to,
          text: e.text,
          origin: e.origin,
          cancel: function() {
            return (n.canceled = !0);
          },
        };
        return (
          r &&
            (n.update = function(e, r, i, o) {
              e && (n.from = le(t, e)),
                r && (n.to = le(t, r)),
                i && (n.text = i),
                void 0 !== o && (n.origin = o);
            }),
          vt(t, 'beforeChange', t, n),
          t.cm && vt(t.cm, 'beforeChange', t.cm, n),
          n.canceled
            ? (t.cm && (t.cm.curOp.updateInput = 2), null)
            : { from: n.from, to: n.to, text: n.text, origin: n.origin }
        );
      }
      function ao(t, e, r) {
        if (t.cm) {
          if (!t.cm.curOp) return Zn(t.cm, ao)(t, e, r);
          if (t.cm.state.suppressEdits) return;
        }
        if (
          !(yt(t, 'beforeChange') || (t.cm && yt(t.cm, 'beforeChange'))) ||
          (e = oo(t, e, !0))
        ) {
          var n =
            we &&
            !r &&
            (function(t, e, r) {
              var n = null;
              if (
                (t.iter(e.line, r.line + 1, function(t) {
                  if (t.markedSpans)
                    for (var e = 0; e < t.markedSpans.length; ++e) {
                      var r = t.markedSpans[e].marker;
                      !r.readOnly ||
                        (n && -1 != H(n, r)) ||
                        (n || (n = [])).push(r);
                    }
                }),
                !n)
              )
                return null;
              for (var i = [{ from: e, to: r }], o = 0; o < n.length; ++o)
                for (var a = n[o], l = a.find(0), s = 0; s < i.length; ++s) {
                  var u = i[s];
                  if (!(ee(u.to, l.from) < 0 || ee(u.from, l.to) > 0)) {
                    var c = [s, 1],
                      f = ee(u.from, l.from),
                      d = ee(u.to, l.to);
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
          if (n)
            for (var i = n.length - 1; i >= 0; --i)
              lo(t, {
                from: n[i].from,
                to: n[i].to,
                text: i ? [''] : e.text,
                origin: e.origin,
              });
          else lo(t, e);
        }
      }
      function lo(t, e) {
        if (1 != e.text.length || '' != e.text[0] || 0 != ee(e.from, e.to)) {
          var r = Ti(t, e);
          Fi(t, e, r, t.cm ? t.cm.curOp.id : NaN), co(t, e, r, Le(t, e));
          var n = [];
          Ei(t, function(t, r) {
            r || -1 != H(n, t.history) || (vo(t.history, e), n.push(t.history)),
              co(t, e, null, Le(t, e));
          });
        }
      }
      function so(t, e, r) {
        var n = t.cm && t.cm.state.suppressEdits;
        if (!n || r) {
          for (
            var i,
              o = t.history,
              a = t.sel,
              l = 'undo' == e ? o.done : o.undone,
              s = 'undo' == e ? o.undone : o.done,
              u = 0;
            u < l.length &&
            ((i = l[u]), r ? !i.ranges || i.equals(t.sel) : i.ranges);
            u++
          );
          if (u != l.length) {
            for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
              if (!(i = l.pop()).ranges) {
                if (n) return void l.push(i);
                break;
              }
              if ((zi(i, s), r && !i.equals(t.sel)))
                return void Xi(t, i, { clearRedo: !1 });
              a = i;
            }
            var c = [];
            zi(a, s),
              s.push({ changes: c, generation: o.generation }),
              (o.generation = i.generation || ++o.maxGeneration);
            for (
              var f =
                  yt(t, 'beforeChange') || (t.cm && yt(t.cm, 'beforeChange')),
                d = function(r) {
                  var n = i.changes[r];
                  if (((n.origin = e), f && !oo(t, n, !1)))
                    return (l.length = 0), {};
                  c.push(Di(t, n));
                  var o = r ? Ti(t, n) : Y(l);
                  co(t, n, o, Bi(t, n)),
                    !r &&
                      t.cm &&
                      t.cm.scrollIntoView({ from: n.from, to: Ci(n) });
                  var a = [];
                  Ei(t, function(t, e) {
                    e ||
                      -1 != H(a, t.history) ||
                      (vo(t.history, n), a.push(t.history)),
                      co(t, n, null, Bi(t, n));
                  });
                },
                h = i.changes.length - 1;
              h >= 0;
              --h
            ) {
              var p = d(h);
              if (p) return p.v;
            }
          }
        }
      }
      function uo(t, e) {
        if (
          0 != e &&
          ((t.first += e),
          (t.sel = new bi(
            X(t.sel.ranges, function(t) {
              return new xi(
                te(t.anchor.line + e, t.anchor.ch),
                te(t.head.line + e, t.head.ch)
              );
            }),
            t.sel.primIndex
          )),
          t.cm)
        ) {
          un(t.cm, t.first, t.first - e, e);
          for (var r = t.cm.display, n = r.viewFrom; n < r.viewTo; n++)
            cn(t.cm, n, 'gutter');
        }
      }
      function co(t, e, r, n) {
        if (t.cm && !t.cm.curOp) return Zn(t.cm, co)(t, e, r, n);
        if (e.to.line < t.first)
          uo(t, e.text.length - 1 - (e.to.line - e.from.line));
        else if (!(e.from.line > t.lastLine())) {
          if (e.from.line < t.first) {
            var i = e.text.length - 1 - (t.first - e.from.line);
            uo(t, i),
              (e = {
                from: te(t.first, 0),
                to: te(e.to.line + i, e.to.ch),
                text: [Y(e.text)],
                origin: e.origin,
              });
          }
          var o = t.lastLine();
          e.to.line > o &&
            (e = {
              from: e.from,
              to: te(o, $t(t, o).text.length),
              text: [e.text[0]],
              origin: e.origin,
            }),
            (e.removed = Kt(t, e.from, e.to)),
            r || (r = Ti(t, e)),
            t.cm
              ? (function(t, e, r) {
                  var n = t.doc,
                    i = t.display,
                    o = e.from,
                    a = e.to,
                    l = !1,
                    s = o.line;
                  t.options.lineWrapping ||
                    ((s = Xt(We($t(n, o.line)))),
                    n.iter(s, a.line + 1, function(t) {
                      if (t == i.maxLine) return (l = !0), !0;
                    })),
                    n.sel.contains(e.from, e.to) > -1 && mt(t),
                    Ai(n, e, r, on(t)),
                    t.options.lineWrapping ||
                      (n.iter(s, o.line + e.text.length, function(t) {
                        var e = Ve(t);
                        e > i.maxLineLength &&
                          ((i.maxLine = t),
                          (i.maxLineLength = e),
                          (i.maxLineChanged = !0),
                          (l = !1));
                      }),
                      l && (t.curOp.updateMaxLine = !0)),
                    (function(t, e) {
                      if (
                        ((t.modeFrontier = Math.min(t.modeFrontier, e)),
                        !(t.highlightFrontier < e - 10))
                      ) {
                        for (var r = t.first, n = e - 1; n > r; n--) {
                          var i = $t(t, n).stateAfter;
                          if (
                            i &&
                            (!(i instanceof ue) || n + i.lookAhead < e)
                          ) {
                            r = n + 1;
                            break;
                          }
                        }
                        t.highlightFrontier = Math.min(t.highlightFrontier, r);
                      }
                    })(n, o.line),
                    ti(t, 400);
                  var u = e.text.length - (a.line - o.line) - 1;
                  e.full
                    ? un(t)
                    : o.line != a.line || 1 != e.text.length || _i(t.doc, e)
                    ? un(t, o.line, a.line + 1, u)
                    : cn(t, o.line, 'text');
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
                    f && lr(t, 'change', t, d),
                      c &&
                        (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(
                          d
                        );
                  }
                  t.display.selForContextMenu = null;
                })(t.cm, e, n)
              : Ai(t, e, n),
            Zi(t, r, G);
        }
      }
      function fo(t, e, r, n, i) {
        var o;
        n || (n = r),
          ee(n, r) < 0 && ((r = (o = [n, r])[0]), (n = o[1])),
          'string' == typeof e && (e = t.splitLines(e)),
          ao(t, { from: r, to: n, text: e, origin: i });
      }
      function ho(t, e, r, n) {
        r < t.line ? (t.line += n) : e < t.line && ((t.line = e), (t.ch = 0));
      }
      function po(t, e, r, n) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i],
            a = !0;
          if (o.ranges) {
            o.copied || ((o = t[i] = o.deepCopy()).copied = !0);
            for (var l = 0; l < o.ranges.length; l++)
              ho(o.ranges[l].anchor, e, r, n), ho(o.ranges[l].head, e, r, n);
          } else {
            for (var s = 0; s < o.changes.length; ++s) {
              var u = o.changes[s];
              if (r < u.from.line)
                (u.from = te(u.from.line + n, u.from.ch)),
                  (u.to = te(u.to.line + n, u.to.ch));
              else if (e <= u.to.line) {
                a = !1;
                break;
              }
            }
            a || (t.splice(0, i + 1), (i = 0));
          }
        }
      }
      function vo(t, e) {
        var r = e.from.line,
          n = e.to.line,
          i = e.text.length - (n - r) - 1;
        po(t.done, r, n, i), po(t.undone, r, n, i);
      }
      function go(t, e, r, n) {
        var i = e,
          o = e;
        return (
          'number' == typeof e ? (o = $t(t, ae(t, e))) : (i = Xt(e)),
          null == i ? null : (n(o, i) && t.cm && cn(t.cm, i, r), o)
        );
      }
      function mo(t) {
        (this.lines = t), (this.parent = null);
        for (var e = 0, r = 0; r < t.length; ++r)
          (t[r].parent = this), (e += t[r].height);
        this.height = e;
      }
      function yo(t) {
        this.children = t;
        for (var e = 0, r = 0, n = 0; n < t.length; ++n) {
          var i = t[n];
          (e += i.chunkSize()), (r += i.height), (i.parent = this);
        }
        (this.size = e), (this.height = r), (this.parent = null);
      }
      (xi.prototype.from = function() {
        return oe(this.anchor, this.head);
      }),
        (xi.prototype.to = function() {
          return ie(this.anchor, this.head);
        }),
        (xi.prototype.empty = function() {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        }),
        (mo.prototype = {
          chunkSize: function() {
            return this.lines.length;
          },
          removeInner: function(t, e) {
            for (var r = t, n = t + e; r < n; ++r) {
              var i = this.lines[r];
              (this.height -= i.height), Ke(i), lr(i, 'delete');
            }
            this.lines.splice(t, e);
          },
          collapse: function(t) {
            t.push.apply(t, this.lines);
          },
          insertInner: function(t, e, r) {
            (this.height += r),
              (this.lines = this.lines
                .slice(0, t)
                .concat(e)
                .concat(this.lines.slice(t)));
            for (var n = 0; n < e.length; ++n) e[n].parent = this;
          },
          iterN: function(t, e, r) {
            for (var n = t + e; t < n; ++t) if (r(this.lines[t])) return !0;
          },
        }),
        (yo.prototype = {
          chunkSize: function() {
            return this.size;
          },
          removeInner: function(t, e) {
            this.size -= e;
            for (var r = 0; r < this.children.length; ++r) {
              var n = this.children[r],
                i = n.chunkSize();
              if (t < i) {
                var o = Math.min(e, i - t),
                  a = n.height;
                if (
                  (n.removeInner(t, o),
                  (this.height -= a - n.height),
                  i == o && (this.children.splice(r--, 1), (n.parent = null)),
                  0 == (e -= o))
                )
                  break;
                t = 0;
              } else t -= i;
            }
            if (
              this.size - e < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof mo))
            ) {
              var l = [];
              this.collapse(l),
                (this.children = [new mo(l)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function(t) {
            for (var e = 0; e < this.children.length; ++e)
              this.children[e].collapse(t);
          },
          insertInner: function(t, e, r) {
            (this.size += e.length), (this.height += r);
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                o = i.chunkSize();
              if (t <= o) {
                if ((i.insertInner(t, e, r), i.lines && i.lines.length > 50)) {
                  for (
                    var a = (i.lines.length % 25) + 25, l = a;
                    l < i.lines.length;

                  ) {
                    var s = new mo(i.lines.slice(l, (l += 25)));
                    (i.height -= s.height),
                      this.children.splice(++n, 0, s),
                      (s.parent = this);
                  }
                  (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                }
                break;
              }
              t -= o;
            }
          },
          maybeSpill: function() {
            if (!(this.children.length <= 10)) {
              var t = this;
              do {
                var e = t.children.splice(t.children.length - 5, 5),
                  r = new yo(e);
                if (t.parent) {
                  (t.size -= r.size), (t.height -= r.height);
                  var n = H(t.parent.children, t);
                  t.parent.children.splice(n + 1, 0, r);
                } else {
                  var i = new yo(t.children);
                  (i.parent = t), (t.children = [i, r]), (t = i);
                }
                r.parent = t.parent;
              } while (t.children.length > 10);
              t.parent.maybeSpill();
            }
          },
          iterN: function(t, e, r) {
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                o = i.chunkSize();
              if (t < o) {
                var a = Math.min(e, o - t);
                if (i.iterN(t, a, r)) return !0;
                if (0 == (e -= a)) break;
                t = 0;
              } else t -= o;
            }
          },
        });
      var bo = function(t, e, r) {
        if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
        (this.doc = t), (this.node = e);
      };
      function xo(t, e, r) {
        Ge(e) < ((t.curOp && t.curOp.scrollTop) || t.doc.scrollTop) && Mn(t, r);
      }
      (bo.prototype.clear = function() {
        var t = this.doc.cm,
          e = this.line.widgets,
          r = this.line,
          n = Xt(r);
        if (null != n && e) {
          for (var i = 0; i < e.length; ++i) e[i] == this && e.splice(i--, 1);
          e.length || (r.widgets = null);
          var o = xr(this);
          Yt(r, Math.max(0, r.height - o)),
            t &&
              (Xn(t, function() {
                xo(t, r, -o), cn(t, n, 'widget');
              }),
              lr(t, 'lineWidgetCleared', t, this, n));
        }
      }),
        (bo.prototype.changed = function() {
          var t = this,
            e = this.height,
            r = this.doc.cm,
            n = this.line;
          this.height = null;
          var i = xr(this) - e;
          i &&
            (Re(this.doc, n) || Yt(n, n.height + i),
            r &&
              Xn(r, function() {
                (r.curOp.forceUpdate = !0),
                  xo(r, n, i),
                  lr(r, 'lineWidgetChanged', r, t, Xt(n));
              }));
        }),
        bt(bo);
      var wo = 0,
        So = function(t, e) {
          (this.lines = []), (this.type = e), (this.doc = t), (this.id = ++wo);
        };
      function Co(t, e, r, n, i) {
        if (n && n.shared)
          return (function(t, e, r, n, i) {
            (n = F(n)).shared = !1;
            var o = [Co(t, e, r, n, i)],
              a = o[0],
              l = n.widgetNode;
            return (
              Ei(t, function(t) {
                l && (n.widgetNode = l.cloneNode(!0)),
                  o.push(Co(t, le(t, e), le(t, r), n, i));
                for (var s = 0; s < t.linked.length; ++s)
                  if (t.linked[s].isParent) return;
                a = Y(o);
              }),
              new ko(o, a)
            );
          })(t, e, r, n, i);
        if (t.cm && !t.cm.curOp) return Zn(t.cm, Co)(t, e, r, n, i);
        var o = new So(t, i),
          a = ee(e, r);
        if ((n && F(n, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty)))
          return o;
        if (
          (o.replacedWith &&
            ((o.collapsed = !0),
            (o.widgetNode = A('span', [o.replacedWith], 'CodeMirror-widget')),
            n.handleMouseEvents ||
              o.widgetNode.setAttribute('cm-ignore-events', 'true'),
            n.insertLeft && (o.widgetNode.insertLeft = !0)),
          o.collapsed)
        ) {
          if (
            Fe(t, e.line, e, r, o) ||
            (e.line != r.line && Fe(t, r.line, e, r, o))
          )
            throw new Error(
              'Inserting collapsed marker partially overlapping an existing one'
            );
          Se = !0;
        }
        o.addToHistory &&
          Fi(t, { from: e, to: r, origin: 'markText' }, t.sel, NaN);
        var l,
          s = e.line,
          u = t.cm;
        if (
          (t.iter(s, r.line + 1, function(t) {
            u &&
              o.collapsed &&
              !u.options.lineWrapping &&
              We(t) == u.display.maxLine &&
              (l = !0),
              o.collapsed && s != e.line && Yt(t, 0),
              (function(t, e) {
                (t.markedSpans = t.markedSpans
                  ? t.markedSpans.concat([e])
                  : [e]),
                  e.marker.attachLine(t);
              })(
                t,
                new Ce(o, s == e.line ? e.ch : null, s == r.line ? r.ch : null)
              ),
              ++s;
          }),
          o.collapsed &&
            t.iter(e.line, r.line + 1, function(e) {
              Re(t, e) && Yt(e, 0);
            }),
          o.clearOnEnter &&
            dt(o, 'beforeCursorEnter', function() {
              return o.clear();
            }),
          o.readOnly &&
            ((we = !0),
            (t.history.done.length || t.history.undone.length) &&
              t.clearHistory()),
          o.collapsed && ((o.id = ++wo), (o.atomic = !0)),
          u)
        ) {
          if ((l && (u.curOp.updateMaxLine = !0), o.collapsed))
            un(u, e.line, r.line + 1);
          else if (
            o.className ||
            o.startStyle ||
            o.endStyle ||
            o.css ||
            o.attributes ||
            o.title
          )
            for (var c = e.line; c <= r.line; c++) cn(u, c, 'text');
          o.atomic && Qi(u.doc), lr(u, 'markerAdded', u, o);
        }
        return o;
      }
      (So.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var t = this.doc.cm,
            e = t && !t.curOp;
          if ((e && Vn(t), yt(this, 'clear'))) {
            var r = this.find();
            r && lr(this, 'clear', r.from, r.to);
          }
          for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
            var a = this.lines[o],
              l = ke(a.markedSpans, this);
            t && !this.collapsed
              ? cn(t, Xt(a), 'text')
              : t &&
                (null != l.to && (i = Xt(a)), null != l.from && (n = Xt(a))),
              (a.markedSpans = Te(a.markedSpans, l)),
              null == l.from &&
                this.collapsed &&
                !Re(this.doc, a) &&
                t &&
                Yt(a, tn(t.display));
          }
          if (t && this.collapsed && !t.options.lineWrapping)
            for (var s = 0; s < this.lines.length; ++s) {
              var u = We(this.lines[s]),
                c = Ve(u);
              c > t.display.maxLineLength &&
                ((t.display.maxLine = u),
                (t.display.maxLineLength = c),
                (t.display.maxLineChanged = !0));
            }
          null != n && t && this.collapsed && un(t, n, i + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), t && Qi(t.doc)),
            t && lr(t, 'markerCleared', t, this, n, i),
            e && Un(t),
            this.parent && this.parent.clear();
        }
      }),
        (So.prototype.find = function(t, e) {
          var r, n;
          null == t && 'bookmark' == this.type && (t = 1);
          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
              a = ke(o.markedSpans, this);
            if (null != a.from && ((r = te(e ? o : Xt(o), a.from)), -1 == t))
              return r;
            if (null != a.to && ((n = te(e ? o : Xt(o), a.to)), 1 == t))
              return n;
          }
          return r && { from: r, to: n };
        }),
        (So.prototype.changed = function() {
          var t = this,
            e = this.find(-1, !0),
            r = this,
            n = this.doc.cm;
          e &&
            n &&
            Xn(n, function() {
              var i = e.line,
                o = Xt(e.line),
                a = Ar(n, o);
              if (
                (a &&
                  (Fr(a),
                  (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !Re(r.doc, i) && null != r.height)
              ) {
                var l = r.height;
                r.height = null;
                var s = xr(r) - l;
                s && Yt(i, i.height + s);
              }
              lr(n, 'markerChanged', n, t);
            });
        }),
        (So.prototype.attachLine = function(t) {
          if (!this.lines.length && this.doc.cm) {
            var e = this.doc.cm.curOp;
            (e.maybeHiddenMarkers && -1 != H(e.maybeHiddenMarkers, this)) ||
              (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(
                this
              );
          }
          this.lines.push(t);
        }),
        (So.prototype.detachLine = function(t) {
          if (
            (this.lines.splice(H(this.lines, t), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var e = this.doc.cm.curOp;
            (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this);
          }
        }),
        bt(So);
      var ko = function(t, e) {
        (this.markers = t), (this.primary = e);
        for (var r = 0; r < t.length; ++r) t[r].parent = this;
      };
      function To(t) {
        return t.findMarks(
          te(t.first, 0),
          t.clipPos(te(t.lastLine())),
          function(t) {
            return t.parent;
          }
        );
      }
      function Lo(t) {
        for (
          var e = function(e) {
              var r = t[e],
                n = [r.primary.doc];
              Ei(r.primary.doc, function(t) {
                return n.push(t);
              });
              for (var i = 0; i < r.markers.length; i++) {
                var o = r.markers[i];
                -1 == H(n, o.doc) &&
                  ((o.parent = null), r.markers.splice(i--, 1));
              }
            },
            r = 0;
          r < t.length;
          r++
        )
          e(r);
      }
      (ko.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var t = 0; t < this.markers.length; ++t) this.markers[t].clear();
          lr(this, 'clear');
        }
      }),
        (ko.prototype.find = function(t, e) {
          return this.primary.find(t, e);
        }),
        bt(ko);
      var Oo = 0,
        Mo = function(t, e, r, n, i) {
          if (!(this instanceof Mo)) return new Mo(t, e, r, n, i);
          null == r && (r = 0),
            yo.call(this, [new mo([new $e('', null)])]),
            (this.first = r),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = r);
          var o = te(r, 0);
          (this.sel = Si(o)),
            (this.history = new ji(null)),
            (this.id = ++Oo),
            (this.modeOption = e),
            (this.lineSep = n),
            (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
            (this.extend = !1),
            'string' == typeof t && (t = this.splitLines(t)),
            Ai(this, { from: o, to: o, text: t }),
            Xi(this, Si(o), G);
        };
      (Mo.prototype = J(yo.prototype, {
        constructor: Mo,
        iter: function(t, e, r) {
          r
            ? this.iterN(t - this.first, e - t, r)
            : this.iterN(this.first, this.first + this.size, t);
        },
        insert: function(t, e) {
          for (var r = 0, n = 0; n < e.length; ++n) r += e[n].height;
          this.insertInner(t - this.first, e, r);
        },
        remove: function(t, e) {
          this.removeInner(t - this.first, e);
        },
        getValue: function(t) {
          var e = qt(this, this.first, this.first + this.size);
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        setValue: Qn(function(t) {
          var e = te(this.first, 0),
            r = this.first + this.size - 1;
          ao(
            this,
            {
              from: e,
              to: te(r, $t(this, r).text.length),
              text: this.splitLines(t),
              origin: 'setValue',
              full: !0,
            },
            !0
          ),
            this.cm && An(this.cm, 0, 0),
            Xi(this, Si(e), G);
        }),
        replaceRange: function(t, e, r, n) {
          (e = le(this, e)), (r = r ? le(this, r) : e), fo(this, t, e, r, n);
        },
        getRange: function(t, e, r) {
          var n = Kt(this, le(this, t), le(this, e));
          return !1 === r ? n : n.join(r || this.lineSeparator());
        },
        getLine: function(t) {
          var e = this.getLineHandle(t);
          return e && e.text;
        },
        getLineHandle: function(t) {
          if (Jt(this, t)) return $t(this, t);
        },
        getLineNumber: function(t) {
          return Xt(t);
        },
        getLineHandleVisualStart: function(t) {
          return 'number' == typeof t && (t = $t(this, t)), We(t);
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
          return le(this, t);
        },
        getCursor: function(t) {
          var e = this.sel.primary();
          return null == t || 'head' == t
            ? e.head
            : 'anchor' == t
            ? e.anchor
            : 'end' == t || 'to' == t || !1 === t
            ? e.to()
            : e.from();
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: Qn(function(t, e, r) {
          qi(this, le(this, 'number' == typeof t ? te(t, e || 0) : t), null, r);
        }),
        setSelection: Qn(function(t, e, r) {
          qi(this, le(this, t), le(this, e || t), r);
        }),
        extendSelection: Qn(function(t, e, r) {
          Ui(this, le(this, t), e && le(this, e), r);
        }),
        extendSelections: Qn(function(t, e) {
          $i(this, se(this, t), e);
        }),
        extendSelectionsBy: Qn(function(t, e) {
          var r = X(this.sel.ranges, t);
          $i(this, se(this, r), e);
        }),
        setSelections: Qn(function(t, e, r) {
          if (t.length) {
            for (var n = [], i = 0; i < t.length; i++)
              n[i] = new xi(le(this, t[i].anchor), le(this, t[i].head));
            null == e && (e = Math.min(t.length - 1, this.sel.primIndex)),
              Xi(this, wi(this.cm, n, e), r);
          }
        }),
        addSelection: Qn(function(t, e, r) {
          var n = this.sel.ranges.slice(0);
          n.push(new xi(le(this, t), le(this, e || t))),
            Xi(this, wi(this.cm, n, n.length - 1), r);
        }),
        getSelection: function(t) {
          for (var e, r = this.sel.ranges, n = 0; n < r.length; n++) {
            var i = Kt(this, r[n].from(), r[n].to());
            e = e ? e.concat(i) : i;
          }
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        getSelections: function(t) {
          for (var e = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
            var i = Kt(this, r[n].from(), r[n].to());
            !1 !== t && (i = i.join(t || this.lineSeparator())), (e[n] = i);
          }
          return e;
        },
        replaceSelection: function(t, e, r) {
          for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = t;
          this.replaceSelections(n, e, r || '+input');
        },
        replaceSelections: Qn(function(t, e, r) {
          for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var a = i.ranges[o];
            n[o] = {
              from: a.from(),
              to: a.to(),
              text: this.splitLines(t[o]),
              origin: r,
            };
          }
          for (
            var l =
                e &&
                'end' != e &&
                (function(t, e, r) {
                  for (
                    var n = [], i = te(t.first, 0), o = i, a = 0;
                    a < e.length;
                    a++
                  ) {
                    var l = e[a],
                      s = Li(l.from, i, o),
                      u = Li(Ci(l), i, o);
                    if (((i = l.to), (o = u), 'around' == r)) {
                      var c = t.sel.ranges[a],
                        f = ee(c.head, c.anchor) < 0;
                      n[a] = new xi(f ? u : s, f ? s : u);
                    } else n[a] = new xi(s, s);
                  }
                  return new bi(n, t.sel.primIndex);
                })(this, n, e),
              s = n.length - 1;
            s >= 0;
            s--
          )
            ao(this, n[s]);
          l ? Yi(this, l) : this.cm && _n(this.cm);
        }),
        undo: Qn(function() {
          so(this, 'undo');
        }),
        redo: Qn(function() {
          so(this, 'redo');
        }),
        undoSelection: Qn(function() {
          so(this, 'undo', !0);
        }),
        redoSelection: Qn(function() {
          so(this, 'redo', !0);
        }),
        setExtending: function(t) {
          this.extend = t;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (
            var t = this.history, e = 0, r = 0, n = 0;
            n < t.done.length;
            n++
          )
            t.done[n].ranges || ++e;
          for (var i = 0; i < t.undone.length; i++) t.undone[i].ranges || ++r;
          return { undo: e, redo: r };
        },
        clearHistory: function() {
          this.history = new ji(this.history.maxGeneration);
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
            done: Gi(this.history.done),
            undone: Gi(this.history.undone),
          };
        },
        setHistory: function(t) {
          var e = (this.history = new ji(this.history.maxGeneration));
          (e.done = Gi(t.done.slice(0), null, !0)),
            (e.undone = Gi(t.undone.slice(0), null, !0));
        },
        setGutterMarker: Qn(function(t, e, r) {
          return go(this, t, 'gutter', function(t) {
            var n = t.gutterMarkers || (t.gutterMarkers = {});
            return (n[e] = r), !r && rt(n) && (t.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Qn(function(t) {
          var e = this;
          this.iter(function(r) {
            r.gutterMarkers &&
              r.gutterMarkers[t] &&
              go(e, r, 'gutter', function() {
                return (
                  (r.gutterMarkers[t] = null),
                  rt(r.gutterMarkers) && (r.gutterMarkers = null),
                  !0
                );
              });
          });
        }),
        lineInfo: function(t) {
          var e;
          if ('number' == typeof t) {
            if (!Jt(this, t)) return null;
            if (((e = t), !(t = $t(this, t)))) return null;
          } else if (null == (e = Xt(t))) return null;
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
        addLineClass: Qn(function(t, e, r) {
          return go(this, t, 'gutter' == e ? 'gutter' : 'class', function(t) {
            var n =
              'text' == e
                ? 'textClass'
                : 'background' == e
                ? 'bgClass'
                : 'gutter' == e
                ? 'gutterClass'
                : 'wrapClass';
            if (t[n]) {
              if (k(r).test(t[n])) return !1;
              t[n] += ' ' + r;
            } else t[n] = r;
            return !0;
          });
        }),
        removeLineClass: Qn(function(t, e, r) {
          return go(this, t, 'gutter' == e ? 'gutter' : 'class', function(t) {
            var n =
                'text' == e
                  ? 'textClass'
                  : 'background' == e
                  ? 'bgClass'
                  : 'gutter' == e
                  ? 'gutterClass'
                  : 'wrapClass',
              i = t[n];
            if (!i) return !1;
            if (null == r) t[n] = null;
            else {
              var o = i.match(k(r));
              if (!o) return !1;
              var a = o.index + o[0].length;
              t[n] =
                i.slice(0, o.index) +
                  (o.index && a != i.length ? ' ' : '') +
                  i.slice(a) || null;
            }
            return !0;
          });
        }),
        addLineWidget: Qn(function(t, e, r) {
          return (function(t, e, r, n) {
            var i = new bo(t, r, n),
              o = t.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              go(t, e, 'widget', function(e) {
                var r = e.widgets || (e.widgets = []);
                if (
                  (null == i.insertAt
                    ? r.push(i)
                    : r.splice(
                        Math.min(r.length - 1, Math.max(0, i.insertAt)),
                        0,
                        i
                      ),
                  (i.line = e),
                  o && !Re(t, e))
                ) {
                  var n = Ge(e) < t.scrollTop;
                  Yt(e, e.height + xr(i)),
                    n && Mn(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              o &&
                lr(
                  o,
                  'lineWidgetAdded',
                  o,
                  i,
                  'number' == typeof e ? e : Xt(e)
                ),
              i
            );
          })(this, t, e, r);
        }),
        removeLineWidget: function(t) {
          t.clear();
        },
        markText: function(t, e, r) {
          return Co(
            this,
            le(this, t),
            le(this, e),
            r,
            (r && r.type) || 'range'
          );
        },
        setBookmark: function(t, e) {
          var r = {
            replacedWith: e && (null == e.nodeType ? e.widget : e),
            insertLeft: e && e.insertLeft,
            clearWhenEmpty: !1,
            shared: e && e.shared,
            handleMouseEvents: e && e.handleMouseEvents,
          };
          return Co(this, (t = le(this, t)), t, r, 'bookmark');
        },
        findMarksAt: function(t) {
          t = le(this, t);
          var e = [],
            r = $t(this, t.line).markedSpans;
          if (r)
            for (var n = 0; n < r.length; ++n) {
              var i = r[n];
              (null == i.from || i.from <= t.ch) &&
                (null == i.to || i.to >= t.ch) &&
                e.push(i.marker.parent || i.marker);
            }
          return e;
        },
        findMarks: function(t, e, r) {
          (t = le(this, t)), (e = le(this, e));
          var n = [],
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
                    (r && !r(s.marker)) ||
                    n.push(s.marker.parent || s.marker);
                }
              ++i;
            }),
            n
          );
        },
        getAllMarks: function() {
          var t = [];
          return (
            this.iter(function(e) {
              var r = e.markedSpans;
              if (r)
                for (var n = 0; n < r.length; ++n)
                  null != r[n].from && t.push(r[n].marker);
            }),
            t
          );
        },
        posFromIndex: function(t) {
          var e,
            r = this.first,
            n = this.lineSeparator().length;
          return (
            this.iter(function(i) {
              var o = i.text.length + n;
              if (o > t) return (e = t), !0;
              (t -= o), ++r;
            }),
            le(this, te(r, e))
          );
        },
        indexFromPos: function(t) {
          var e = (t = le(this, t)).ch;
          if (t.line < this.first || t.ch < 0) return 0;
          var r = this.lineSeparator().length;
          return (
            this.iter(this.first, t.line, function(t) {
              e += t.text.length + r;
            }),
            e
          );
        },
        copy: function(t) {
          var e = new Mo(
            qt(this, this.first, this.first + this.size),
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
            r = this.first + this.size;
          null != t.from && t.from > e && (e = t.from),
            null != t.to && t.to < r && (r = t.to);
          var n = new Mo(
            qt(this, e, r),
            t.mode || this.modeOption,
            e,
            this.lineSep,
            this.direction
          );
          return (
            t.sharedHist && (n.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: n,
              sharedHist: t.sharedHist,
            }),
            (n.linked = [
              { doc: this, isParent: !0, sharedHist: t.sharedHist },
            ]),
            (function(t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r],
                  i = n.find(),
                  o = t.clipPos(i.from),
                  a = t.clipPos(i.to);
                if (ee(o, a)) {
                  var l = Co(t, o, a, n.primary, n.primary.type);
                  n.markers.push(l), (l.parent = n);
                }
              }
            })(n, To(this)),
            n
          );
        },
        unlinkDoc: function(t) {
          if ((t instanceof ka && (t = t.doc), this.linked))
            for (var e = 0; e < this.linked.length; ++e) {
              var r = this.linked[e];
              if (r.doc == t) {
                this.linked.splice(e, 1), t.unlinkDoc(this), Lo(To(this));
                break;
              }
            }
          if (t.history == this.history) {
            var n = [t.id];
            Ei(
              t,
              function(t) {
                return n.push(t.id);
              },
              !0
            ),
              (t.history = new ji(null)),
              (t.history.done = Gi(this.history.done, n)),
              (t.history.undone = Gi(this.history.undone, n));
          }
        },
        iterLinkedDocs: function(t) {
          Ei(this, t);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(t) {
          return this.lineSep ? t.split(this.lineSep) : Nt(t);
        },
        lineSeparator: function() {
          return this.lineSep || '\n';
        },
        setDirection: Qn(function(t) {
          var e;
          'rtl' != t && (t = 'ltr'),
            t != this.direction &&
              ((this.direction = t),
              this.iter(function(t) {
                return (t.order = null);
              }),
              this.cm &&
                Xn((e = this.cm), function() {
                  Pi(e), un(e);
                }));
        }),
      })),
        (Mo.prototype.eachLine = Mo.prototype.iter);
      var _o = 0;
      function Ao(t) {
        var e = this;
        if ((Eo(e), !gt(e, t) && !wr(e.display, t))) {
          xt(t), a && (_o = +new Date());
          var r = ln(e, t, !0),
            n = t.dataTransfer.files;
          if (r && !e.isReadOnly())
            if (n && n.length && window.FileReader && window.File)
              for (
                var i = n.length,
                  o = Array(i),
                  l = 0,
                  s = function(t, n) {
                    if (
                      !e.options.allowDropFileTypes ||
                      -1 != H(e.options.allowDropFileTypes, t.type)
                    ) {
                      var a = new FileReader();
                      (a.onload = Zn(e, function() {
                        var t = a.result;
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(t) && (t = ''),
                          (o[n] = t),
                          ++l == i)
                        ) {
                          var s = {
                            from: (r = le(e.doc, r)),
                            to: r,
                            text: e.doc.splitLines(
                              o.join(e.doc.lineSeparator())
                            ),
                            origin: 'paste',
                          };
                          ao(e.doc, s), Yi(e.doc, Si(r, Ci(s)));
                        }
                      })),
                        a.readAsText(t);
                    }
                  },
                  u = 0;
                u < i;
                ++u
              )
                s(n[u], u);
            else {
              if (e.state.draggingText && e.doc.sel.contains(r) > -1)
                return (
                  e.state.draggingText(t),
                  void setTimeout(function() {
                    return e.display.input.focus();
                  }, 20)
                );
              try {
                var c = t.dataTransfer.getData('Text');
                if (c) {
                  var f;
                  if (
                    (e.state.draggingText &&
                      !e.state.draggingText.copy &&
                      (f = e.listSelections()),
                    Zi(e.doc, Si(r, r)),
                    f)
                  )
                    for (var d = 0; d < f.length; ++d)
                      fo(e.doc, '', f[d].anchor, f[d].head, 'drag');
                  e.replaceSelection(c, 'around', 'paste'),
                    e.display.input.focus();
                }
              } catch (t) {}
            }
        }
      }
      function Eo(t) {
        t.display.dragCursor &&
          (t.display.lineSpace.removeChild(t.display.dragCursor),
          (t.display.dragCursor = null));
      }
      function No(t) {
        if (document.getElementsByClassName) {
          for (
            var e = document.getElementsByClassName('CodeMirror'),
              r = [],
              n = 0;
            n < e.length;
            n++
          ) {
            var i = e[n].CodeMirror;
            i && r.push(i);
          }
          r.length &&
            r[0].operation(function() {
              for (var e = 0; e < r.length; e++) t(r[e]);
            });
        }
      }
      var Po = !1;
      function jo() {
        var t;
        Po ||
          (dt(window, 'resize', function() {
            null == t &&
              (t = setTimeout(function() {
                (t = null), No(Do);
              }, 100));
          }),
          dt(window, 'blur', function() {
            return No(Cn);
          }),
          (Po = !0));
      }
      function Do(t) {
        var e = t.display;
        (e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null),
          (e.scrollbarsClipped = !1),
          t.setSize();
      }
      for (
        var Io = {
            3: 'Pause',
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
            145: 'ScrollLock',
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
          Fo = 0;
        Fo < 10;
        Fo++
      )
        Io[Fo + 48] = Io[Fo + 96] = String(Fo);
      for (var Wo = 65; Wo <= 90; Wo++) Io[Wo] = String.fromCharCode(Wo);
      for (var zo = 1; zo <= 12; zo++) Io[zo + 111] = Io[zo + 63235] = 'F' + zo;
      var Ho = {};
      function Ro(t) {
        var e,
          r,
          n,
          i,
          o = t.split(/-(?!$)/);
        t = o[o.length - 1];
        for (var a = 0; a < o.length - 1; a++) {
          var l = o[a];
          if (/^(cmd|meta|m)$/i.test(l)) i = !0;
          else if (/^a(lt)?$/i.test(l)) e = !0;
          else if (/^(c|ctrl|control)$/i.test(l)) r = !0;
          else {
            if (!/^s(hift)?$/i.test(l))
              throw new Error('Unrecognized modifier name: ' + l);
            n = !0;
          }
        }
        return (
          e && (t = 'Alt-' + t),
          r && (t = 'Ctrl-' + t),
          i && (t = 'Cmd-' + t),
          n && (t = 'Shift-' + t),
          t
        );
      }
      function Bo(t) {
        var e = {};
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var n = t[r];
            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
            if ('...' == n) {
              delete t[r];
              continue;
            }
            for (var i = X(r.split(' '), Ro), o = 0; o < i.length; o++) {
              var a = void 0,
                l = void 0;
              o == i.length - 1
                ? ((l = i.join(' ')), (a = n))
                : ((l = i.slice(0, o + 1).join(' ')), (a = '...'));
              var s = e[l];
              if (s) {
                if (s != a) throw new Error('Inconsistent bindings for ' + l);
              } else e[l] = a;
            }
            delete t[r];
          }
        for (var u in e) t[u] = e[u];
        return t;
      }
      function Go(t, e, r, n) {
        var i = (e = Ko(e)).call ? e.call(t, n) : e[t];
        if (!1 === i) return 'nothing';
        if ('...' === i) return 'multi';
        if (null != i && r(i)) return 'handled';
        if (e.fallthrough) {
          if ('[object Array]' != Object.prototype.toString.call(e.fallthrough))
            return Go(t, e.fallthrough, r, n);
          for (var o = 0; o < e.fallthrough.length; o++) {
            var a = Go(t, e.fallthrough[o], r, n);
            if (a) return a;
          }
        }
      }
      function Vo(t) {
        var e = 'string' == typeof t ? t : Io[t.keyCode];
        return 'Ctrl' == e || 'Alt' == e || 'Shift' == e || 'Mod' == e;
      }
      function Uo(t, e, r) {
        var n = t;
        return (
          e.altKey && 'Alt' != n && (t = 'Alt-' + t),
          (S ? e.metaKey : e.ctrlKey) && 'Ctrl' != n && (t = 'Ctrl-' + t),
          (S ? e.ctrlKey : e.metaKey) && 'Cmd' != n && (t = 'Cmd-' + t),
          !r && e.shiftKey && 'Shift' != n && (t = 'Shift-' + t),
          t
        );
      }
      function $o(t, e) {
        if (f && 34 == t.keyCode && t.char) return !1;
        var r = Io[t.keyCode];
        return (
          null != r &&
          !t.altGraphKey &&
          (3 == t.keyCode && t.code && (r = t.code), Uo(r, t, e))
        );
      }
      function Ko(t) {
        return 'string' == typeof t ? Ho[t] : t;
      }
      function qo(t, e) {
        for (var r = t.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
          for (var o = e(r[i]); n.length && ee(o.from, Y(n).to) <= 0; ) {
            var a = n.pop();
            if (ee(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          n.push(o);
        }
        Xn(t, function() {
          for (var e = n.length - 1; e >= 0; e--)
            fo(t.doc, '', n[e].from, n[e].to, '+delete');
          _n(t);
        });
      }
      function Yo(t, e, r) {
        var n = ot(t.text, e + r, r);
        return n < 0 || n > t.text.length ? null : n;
      }
      function Xo(t, e, r) {
        var n = Yo(t, e.ch, r);
        return null == n ? null : new te(e.line, n, r < 0 ? 'after' : 'before');
      }
      function Zo(t, e, r, n, i) {
        if (t) {
          var o = ct(r, e.doc.direction);
          if (o) {
            var a,
              l = i < 0 ? Y(o) : o[0],
              s = i < 0 == (1 == l.level),
              u = s ? 'after' : 'before';
            if (l.level > 0 || 'rtl' == e.doc.direction) {
              var c = Er(e, r);
              a = i < 0 ? r.text.length - 1 : 0;
              var f = Nr(e, c, a).top;
              (a = at(
                function(t) {
                  return Nr(e, c, t).top == f;
                },
                i < 0 == (1 == l.level) ? l.from : l.to - 1,
                a
              )),
                'before' == u && (a = Yo(r, a, 1));
            } else a = i < 0 ? l.to : l.from;
            return new te(n, a, u);
          }
        }
        return new te(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after');
      }
      (Ho.basic = {
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
        (Ho.pcDefault = {
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
        (Ho.emacsy = {
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
        (Ho.macDefault = {
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
        (Ho.default = y ? Ho.macDefault : Ho.pcDefault);
      var Jo = {
        selectAll: io,
        singleSelection: function(t) {
          return t.setSelection(t.getCursor('anchor'), t.getCursor('head'), G);
        },
        killLine: function(t) {
          return qo(t, function(e) {
            if (e.empty()) {
              var r = $t(t.doc, e.head.line).text.length;
              return e.head.ch == r && e.head.line < t.lastLine()
                ? { from: e.head, to: te(e.head.line + 1, 0) }
                : { from: e.head, to: te(e.head.line, r) };
            }
            return { from: e.from(), to: e.to() };
          });
        },
        deleteLine: function(t) {
          return qo(t, function(e) {
            return {
              from: te(e.from().line, 0),
              to: le(t.doc, te(e.to().line + 1, 0)),
            };
          });
        },
        delLineLeft: function(t) {
          return qo(t, function(t) {
            return { from: te(t.from().line, 0), to: t.from() };
          });
        },
        delWrappedLineLeft: function(t) {
          return qo(t, function(e) {
            var r = t.charCoords(e.head, 'div').top + 5,
              n = t.coordsChar({ left: 0, top: r }, 'div');
            return { from: n, to: e.from() };
          });
        },
        delWrappedLineRight: function(t) {
          return qo(t, function(e) {
            var r = t.charCoords(e.head, 'div').top + 5,
              n = t.coordsChar(
                { left: t.display.lineDiv.offsetWidth + 100, top: r },
                'div'
              );
            return { from: e.from(), to: n };
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
          return t.extendSelection(te(t.firstLine(), 0));
        },
        goDocEnd: function(t) {
          return t.extendSelection(te(t.lastLine()));
        },
        goLineStart: function(t) {
          return t.extendSelectionsBy(
            function(e) {
              return Qo(t, e.head.line);
            },
            { origin: '+move', bias: 1 }
          );
        },
        goLineStartSmart: function(t) {
          return t.extendSelectionsBy(
            function(e) {
              return ta(t, e.head);
            },
            { origin: '+move', bias: 1 }
          );
        },
        goLineEnd: function(t) {
          return t.extendSelectionsBy(
            function(e) {
              return (function(t, e) {
                var r = $t(t.doc, e),
                  n = (function(t) {
                    for (var e; (e = De(t)); ) t = e.find(1, !0).line;
                    return t;
                  })(r);
                return n != r && (e = Xt(n)), Zo(!0, t, r, e, -1);
              })(t, e.head.line);
            },
            { origin: '+move', bias: -1 }
          );
        },
        goLineRight: function(t) {
          return t.extendSelectionsBy(function(e) {
            var r = t.cursorCoords(e.head, 'div').top + 5;
            return t.coordsChar(
              { left: t.display.lineDiv.offsetWidth + 100, top: r },
              'div'
            );
          }, U);
        },
        goLineLeft: function(t) {
          return t.extendSelectionsBy(function(e) {
            var r = t.cursorCoords(e.head, 'div').top + 5;
            return t.coordsChar({ left: 0, top: r }, 'div');
          }, U);
        },
        goLineLeftSmart: function(t) {
          return t.extendSelectionsBy(function(e) {
            var r = t.cursorCoords(e.head, 'div').top + 5,
              n = t.coordsChar({ left: 0, top: r }, 'div');
            return n.ch < t.getLine(n.line).search(/\S/) ? ta(t, e.head) : n;
          }, U);
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
            var e = [], r = t.listSelections(), n = t.options.tabSize, i = 0;
            i < r.length;
            i++
          ) {
            var o = r[i].from(),
              a = W(t.getLine(o.line), o.ch, n);
            e.push(q(n - (a % n)));
          }
          t.replaceSelections(e);
        },
        defaultTab: function(t) {
          t.somethingSelected()
            ? t.indentSelection('add')
            : t.execCommand('insertTab');
        },
        transposeChars: function(t) {
          return Xn(t, function() {
            for (var e = t.listSelections(), r = [], n = 0; n < e.length; n++)
              if (e[n].empty()) {
                var i = e[n].head,
                  o = $t(t.doc, i.line).text;
                if (o)
                  if (
                    (i.ch == o.length && (i = new te(i.line, i.ch - 1)),
                    i.ch > 0)
                  )
                    (i = new te(i.line, i.ch + 1)),
                      t.replaceRange(
                        o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                        te(i.line, i.ch - 2),
                        i,
                        '+transpose'
                      );
                  else if (i.line > t.doc.first) {
                    var a = $t(t.doc, i.line - 1).text;
                    a &&
                      ((i = new te(i.line, 1)),
                      t.replaceRange(
                        o.charAt(0) +
                          t.doc.lineSeparator() +
                          a.charAt(a.length - 1),
                        te(i.line - 1, a.length - 1),
                        i,
                        '+transpose'
                      ));
                  }
                r.push(new xi(i, i));
              }
            t.setSelections(r);
          });
        },
        newlineAndIndent: function(t) {
          return Xn(t, function() {
            for (var e = t.listSelections(), r = e.length - 1; r >= 0; r--)
              t.replaceRange(
                t.doc.lineSeparator(),
                e[r].anchor,
                e[r].head,
                '+input'
              );
            e = t.listSelections();
            for (var n = 0; n < e.length; n++)
              t.indentLine(e[n].from().line, null, !0);
            _n(t);
          });
        },
        openLine: function(t) {
          return t.replaceSelection('\n', 'start');
        },
        toggleOverwrite: function(t) {
          return t.toggleOverwrite();
        },
      };
      function Qo(t, e) {
        var r = $t(t.doc, e),
          n = We(r);
        return n != r && (e = Xt(n)), Zo(!0, t, n, e, 1);
      }
      function ta(t, e) {
        var r = Qo(t, e.line),
          n = $t(t.doc, r.line),
          i = ct(n, t.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(0, n.text.search(/\S/)),
            a = e.line == r.line && e.ch <= o && e.ch;
          return te(r.line, a ? 0 : o, r.sticky);
        }
        return r;
      }
      function ea(t, e, r) {
        if ('string' == typeof e && !(e = Jo[e])) return !1;
        t.display.input.ensurePolled();
        var n = t.display.shift,
          i = !1;
        try {
          t.isReadOnly() && (t.state.suppressEdits = !0),
            r && (t.display.shift = !1),
            (i = e(t) != B);
        } finally {
          (t.display.shift = n), (t.state.suppressEdits = !1);
        }
        return i;
      }
      var ra = new z();
      function na(t, e, r, n) {
        var i = t.state.keySeq;
        if (i) {
          if (Vo(e)) return 'handled';
          if (
            (/\'$/.test(e)
              ? (t.state.keySeq = null)
              : ra.set(50, function() {
                  t.state.keySeq == i &&
                    ((t.state.keySeq = null), t.display.input.reset());
                }),
            ia(t, i + ' ' + e, r, n))
          )
            return !0;
        }
        return ia(t, e, r, n);
      }
      function ia(t, e, r, n) {
        var i = (function(t, e, r) {
          for (var n = 0; n < t.state.keyMaps.length; n++) {
            var i = Go(e, t.state.keyMaps[n], r, t);
            if (i) return i;
          }
          return (
            (t.options.extraKeys && Go(e, t.options.extraKeys, r, t)) ||
            Go(e, t.options.keyMap, r, t)
          );
        })(t, e, n);
        return (
          'multi' == i && (t.state.keySeq = e),
          'handled' == i && lr(t, 'keyHandled', t, e, r),
          ('handled' != i && 'multi' != i) || (xt(r), bn(t)),
          !!i
        );
      }
      function oa(t, e) {
        var r = $o(e, !0);
        return (
          !!r &&
          (e.shiftKey && !t.state.keySeq
            ? na(t, 'Shift-' + r, e, function(e) {
                return ea(t, e, !0);
              }) ||
              na(t, r, e, function(e) {
                if ('string' == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                  return ea(t, e);
              })
            : na(t, r, e, function(e) {
                return ea(t, e);
              }))
        );
      }
      var aa = null;
      function la(t) {
        var e = this;
        if (((e.curOp.focus = N()), !gt(e, t))) {
          a && l < 11 && 27 == t.keyCode && (t.returnValue = !1);
          var r = t.keyCode;
          e.display.shift = 16 == r || t.shiftKey;
          var n = oa(e, t);
          f &&
            ((aa = n ? r : null),
            !n &&
              88 == r &&
              !jt &&
              (y ? t.metaKey : t.ctrlKey) &&
              e.replaceSelection('', null, 'cut')),
            18 != r ||
              /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) ||
              (function(t) {
                var e = t.display.lineDiv;
                function r(t) {
                  (18 != t.keyCode && t.altKey) ||
                    (L(e, 'CodeMirror-crosshair'),
                    pt(document, 'keyup', r),
                    pt(document, 'mouseover', r));
                }
                P(e, 'CodeMirror-crosshair'),
                  dt(document, 'keyup', r),
                  dt(document, 'mouseover', r);
              })(e);
        }
      }
      function sa(t) {
        16 == t.keyCode && (this.doc.sel.shift = !1), gt(this, t);
      }
      function ua(t) {
        var e = this;
        if (
          !(
            wr(e.display, t) ||
            gt(e, t) ||
            (t.ctrlKey && !t.altKey) ||
            (y && t.metaKey)
          )
        ) {
          var r = t.keyCode,
            n = t.charCode;
          if (f && r == aa) return (aa = null), void xt(t);
          if (!f || (t.which && !(t.which < 10)) || !oa(e, t)) {
            var i = String.fromCharCode(null == n ? r : n);
            '\b' != i &&
              ((function(t, e, r) {
                return na(t, "'" + r + "'", e, function(e) {
                  return ea(t, e, !0);
                });
              })(e, t, i) ||
                e.display.input.onKeyPress(t));
          }
        }
      }
      var ca,
        fa,
        da = function(t, e, r) {
          (this.time = t), (this.pos = e), (this.button = r);
        };
      function ha(t) {
        var e = this,
          r = e.display;
        if (!(gt(e, t) || (r.activeTouch && r.input.supportsTouch())))
          if ((r.input.ensurePolled(), (r.shift = t.shiftKey), wr(r, t)))
            s ||
              ((r.scroller.draggable = !1),
              setTimeout(function() {
                return (r.scroller.draggable = !0);
              }, 100));
          else if (!ga(e, t)) {
            var n = ln(e, t),
              i = Tt(t),
              o = n
                ? (function(t, e) {
                    var r = +new Date();
                    return fa && fa.compare(r, t, e)
                      ? ((ca = fa = null), 'triple')
                      : ca && ca.compare(r, t, e)
                      ? ((fa = new da(r, t, e)), (ca = null), 'double')
                      : ((ca = new da(r, t, e)), (fa = null), 'single');
                  })(n, i)
                : 'single';
            window.focus(),
              1 == i && e.state.selectingText && e.state.selectingText(t),
              (n &&
                (function(t, e, r, n, i) {
                  var o = 'Click';
                  return (
                    'double' == n
                      ? (o = 'Double' + o)
                      : 'triple' == n && (o = 'Triple' + o),
                    na(
                      t,
                      Uo(
                        (o =
                          (1 == e ? 'Left' : 2 == e ? 'Middle' : 'Right') + o),
                        i
                      ),
                      i,
                      function(e) {
                        if (('string' == typeof e && (e = Jo[e]), !e))
                          return !1;
                        var n = !1;
                        try {
                          t.isReadOnly() && (t.state.suppressEdits = !0),
                            (n = e(t, r) != B);
                        } finally {
                          t.state.suppressEdits = !1;
                        }
                        return n;
                      }
                    )
                  );
                })(e, i, n, o, t)) ||
                (1 == i
                  ? n
                    ? (function(t, e, r, n) {
                        a ? setTimeout(I(xn, t), 0) : (t.curOp.focus = N());
                        var i,
                          o = (function(t, e, r) {
                            var n = t.getOption('configureMouse'),
                              i = n ? n(t, e, r) : {};
                            if (null == i.unit) {
                              var o = b ? r.shiftKey && r.metaKey : r.altKey;
                              i.unit = o
                                ? 'rectangle'
                                : 'single' == e
                                ? 'char'
                                : 'double' == e
                                ? 'word'
                                : 'line';
                            }
                            return (
                              (null == i.extend || t.doc.extend) &&
                                (i.extend = t.doc.extend || r.shiftKey),
                              null == i.addNew &&
                                (i.addNew = y ? r.metaKey : r.ctrlKey),
                              null == i.moveOnDrag &&
                                (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)),
                              i
                            );
                          })(t, r, n),
                          u = t.doc.sel;
                        t.options.dragDrop &&
                        Mt &&
                        !t.isReadOnly() &&
                        'single' == r &&
                        (i = u.contains(e)) > -1 &&
                        (ee((i = u.ranges[i]).from(), e) < 0 || e.xRel > 0) &&
                        (ee(i.to(), e) > 0 || e.xRel < 0)
                          ? (function(t, e, r, n) {
                              var i = t.display,
                                o = !1,
                                u = Zn(t, function(e) {
                                  s && (i.scroller.draggable = !1),
                                    (t.state.draggingText = !1),
                                    pt(i.wrapper.ownerDocument, 'mouseup', u),
                                    pt(i.wrapper.ownerDocument, 'mousemove', c),
                                    pt(i.scroller, 'dragstart', f),
                                    pt(i.scroller, 'drop', u),
                                    o ||
                                      (xt(e),
                                      n.addNew ||
                                        Ui(t.doc, r, null, null, n.extend),
                                      s || (a && 9 == l)
                                        ? setTimeout(function() {
                                            i.wrapper.ownerDocument.body.focus(),
                                              i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                                }),
                                c = function(t) {
                                  o =
                                    o ||
                                    Math.abs(e.clientX - t.clientX) +
                                      Math.abs(e.clientY - t.clientY) >=
                                      10;
                                },
                                f = function() {
                                  return (o = !0);
                                };
                              s && (i.scroller.draggable = !0),
                                (t.state.draggingText = u),
                                (u.copy = !n.moveOnDrag),
                                i.scroller.dragDrop && i.scroller.dragDrop(),
                                dt(i.wrapper.ownerDocument, 'mouseup', u),
                                dt(i.wrapper.ownerDocument, 'mousemove', c),
                                dt(i.scroller, 'dragstart', f),
                                dt(i.scroller, 'drop', u),
                                wn(t),
                                setTimeout(function() {
                                  return i.input.focus();
                                }, 20);
                            })(t, n, e, o)
                          : (function(t, e, r, n) {
                              var i = t.display,
                                o = t.doc;
                              xt(e);
                              var a,
                                l,
                                s = o.sel,
                                u = s.ranges;
                              if (
                                (n.addNew && !n.extend
                                  ? ((l = o.sel.contains(r)),
                                    (a = l > -1 ? u[l] : new xi(r, r)))
                                  : ((a = o.sel.primary()),
                                    (l = o.sel.primIndex)),
                                'rectangle' == n.unit)
                              )
                                n.addNew || (a = new xi(r, r)),
                                  (r = ln(t, e, !0, !0)),
                                  (l = -1);
                              else {
                                var c = pa(t, r, n.unit);
                                a = n.extend
                                  ? Vi(a, c.anchor, c.head, n.extend)
                                  : c;
                              }
                              n.addNew
                                ? -1 == l
                                  ? ((l = u.length),
                                    Xi(o, wi(t, u.concat([a]), l), {
                                      scroll: !1,
                                      origin: '*mouse',
                                    }))
                                  : u.length > 1 &&
                                    u[l].empty() &&
                                    'char' == n.unit &&
                                    !n.extend
                                  ? (Xi(
                                      o,
                                      wi(
                                        t,
                                        u.slice(0, l).concat(u.slice(l + 1)),
                                        0
                                      ),
                                      { scroll: !1, origin: '*mouse' }
                                    ),
                                    (s = o.sel))
                                  : Ki(o, l, a, V)
                                : ((l = 0),
                                  Xi(o, new bi([a], 0), V),
                                  (s = o.sel));
                              var f = r;
                              function d(e) {
                                if (0 != ee(f, e))
                                  if (((f = e), 'rectangle' == n.unit)) {
                                    for (
                                      var i = [],
                                        u = t.options.tabSize,
                                        c = W($t(o, r.line).text, r.ch, u),
                                        d = W($t(o, e.line).text, e.ch, u),
                                        h = Math.min(c, d),
                                        p = Math.max(c, d),
                                        v = Math.min(r.line, e.line),
                                        g = Math.min(
                                          t.lastLine(),
                                          Math.max(r.line, e.line)
                                        );
                                      v <= g;
                                      v++
                                    ) {
                                      var m = $t(o, v).text,
                                        y = $(m, h, u);
                                      h == p
                                        ? i.push(new xi(te(v, y), te(v, y)))
                                        : m.length > y &&
                                          i.push(
                                            new xi(te(v, y), te(v, $(m, p, u)))
                                          );
                                    }
                                    i.length || i.push(new xi(r, r)),
                                      Xi(
                                        o,
                                        wi(
                                          t,
                                          s.ranges.slice(0, l).concat(i),
                                          l
                                        ),
                                        { origin: '*mouse', scroll: !1 }
                                      ),
                                      t.scrollIntoView(e);
                                  } else {
                                    var b,
                                      x = a,
                                      w = pa(t, e, n.unit),
                                      S = x.anchor;
                                    ee(w.anchor, S) > 0
                                      ? ((b = w.head),
                                        (S = oe(x.from(), w.anchor)))
                                      : ((b = w.anchor),
                                        (S = ie(x.to(), w.head)));
                                    var C = s.ranges.slice(0);
                                    (C[l] = (function(t, e) {
                                      var r = e.anchor,
                                        n = e.head,
                                        i = $t(t.doc, r.line);
                                      if (0 == ee(r, n) && r.sticky == n.sticky)
                                        return e;
                                      var o = ct(i);
                                      if (!o) return e;
                                      var a = st(o, r.ch, r.sticky),
                                        l = o[a];
                                      if (l.from != r.ch && l.to != r.ch)
                                        return e;
                                      var s,
                                        u =
                                          a +
                                          ((l.from == r.ch) == (1 != l.level)
                                            ? 0
                                            : 1);
                                      if (0 == u || u == o.length) return e;
                                      if (n.line != r.line)
                                        s =
                                          (n.line - r.line) *
                                            ('ltr' == t.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var c = st(o, n.ch, n.sticky),
                                          f =
                                            c - a ||
                                            (n.ch - r.ch) *
                                              (1 == l.level ? -1 : 1);
                                        s =
                                          c == u - 1 || c == u ? f < 0 : f > 0;
                                      }
                                      var d = o[u + (s ? -1 : 0)],
                                        h = s == (1 == d.level),
                                        p = h ? d.from : d.to,
                                        v = h ? 'after' : 'before';
                                      return r.ch == p && r.sticky == v
                                        ? e
                                        : new xi(new te(r.line, p, v), n);
                                    })(t, new xi(le(o, S), b))),
                                      Xi(o, wi(t, C, l), V);
                                  }
                              }
                              var h = i.wrapper.getBoundingClientRect(),
                                p = 0;
                              function v(e) {
                                (t.state.selectingText = !1),
                                  (p = 1 / 0),
                                  e && (xt(e), i.input.focus()),
                                  pt(i.wrapper.ownerDocument, 'mousemove', g),
                                  pt(i.wrapper.ownerDocument, 'mouseup', m),
                                  (o.history.lastSelOrigin = null);
                              }
                              var g = Zn(t, function(e) {
                                  0 !== e.buttons && Tt(e)
                                    ? (function e(r) {
                                        var a = ++p,
                                          l = ln(
                                            t,
                                            r,
                                            !0,
                                            'rectangle' == n.unit
                                          );
                                        if (l)
                                          if (0 != ee(l, f)) {
                                            (t.curOp.focus = N()), d(l);
                                            var s = Ln(i, o);
                                            (l.line >= s.to ||
                                              l.line < s.from) &&
                                              setTimeout(
                                                Zn(t, function() {
                                                  p == a && e(r);
                                                }),
                                                150
                                              );
                                          } else {
                                            var u =
                                              r.clientY < h.top
                                                ? -20
                                                : r.clientY > h.bottom
                                                ? 20
                                                : 0;
                                            u &&
                                              setTimeout(
                                                Zn(t, function() {
                                                  p == a &&
                                                    ((i.scroller.scrollTop += u),
                                                    e(r));
                                                }),
                                                50
                                              );
                                          }
                                      })(e)
                                    : v(e);
                                }),
                                m = Zn(t, v);
                              (t.state.selectingText = m),
                                dt(i.wrapper.ownerDocument, 'mousemove', g),
                                dt(i.wrapper.ownerDocument, 'mouseup', m);
                            })(t, n, e, o);
                      })(e, n, o, t)
                    : kt(t) == r.scroller && xt(t)
                  : 2 == i
                  ? (n && Ui(e.doc, n),
                    setTimeout(function() {
                      return r.input.focus();
                    }, 20))
                  : 3 == i && (C ? e.display.input.onContextMenu(t) : wn(e)));
          }
      }
      function pa(t, e, r) {
        if ('char' == r) return new xi(e, e);
        if ('word' == r) return t.findWordAt(e);
        if ('line' == r)
          return new xi(te(e.line, 0), le(t.doc, te(e.line + 1, 0)));
        var n = r(t, e);
        return new xi(n.from, n.to);
      }
      function va(t, e, r, n) {
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
        n && xt(e);
        var a = t.display,
          l = a.lineDiv.getBoundingClientRect();
        if (o > l.bottom || !yt(t, r)) return St(e);
        o -= l.top - a.viewOffset;
        for (var s = 0; s < t.display.gutterSpecs.length; ++s) {
          var u = a.gutters.childNodes[s];
          if (u && u.getBoundingClientRect().right >= i) {
            var c = Zt(t.doc, o),
              f = t.display.gutterSpecs[s];
            return vt(t, r, t, c, f.className, e), St(e);
          }
        }
      }
      function ga(t, e) {
        return va(t, e, 'gutterClick', !0);
      }
      function ma(t, e) {
        wr(t.display, e) ||
          (function(t, e) {
            return (
              !!yt(t, 'gutterContextMenu') && va(t, e, 'gutterContextMenu', !1)
            );
          })(t, e) ||
          gt(t, e, 'contextmenu') ||
          C ||
          t.display.input.onContextMenu(e);
      }
      function ya(t) {
        (t.display.wrapper.className =
          t.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
          t.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
          zr(t);
      }
      da.prototype.compare = function(t, e, r) {
        return this.time + 400 > t && 0 == ee(e, this.pos) && r == this.button;
      };
      var ba = {
          toString: function() {
            return 'CodeMirror.Init';
          },
        },
        xa = {},
        wa = {};
      function Sa(t, e, r) {
        var n = r && r != ba;
        if (!e != !n) {
          var i = t.display.dragFunctions,
            o = e ? dt : pt;
          o(t.display.scroller, 'dragstart', i.start),
            o(t.display.scroller, 'dragenter', i.enter),
            o(t.display.scroller, 'dragover', i.over),
            o(t.display.scroller, 'dragleave', i.leave),
            o(t.display.scroller, 'drop', i.drop);
        }
      }
      function Ca(t) {
        t.options.lineWrapping
          ? (P(t.display.wrapper, 'CodeMirror-wrap'),
            (t.display.sizer.style.minWidth = ''),
            (t.display.sizerWidth = null))
          : (L(t.display.wrapper, 'CodeMirror-wrap'), Ue(t)),
          an(t),
          un(t),
          zr(t),
          setTimeout(function() {
            return zn(t);
          }, 100);
      }
      function ka(t, e) {
        var r = this;
        if (!(this instanceof ka)) return new ka(t, e);
        (this.options = e = e ? F(e) : {}), F(xa, e, !1);
        var n = e.value;
        'string' == typeof n
          ? (n = new Mo(n, e.mode, null, e.lineSeparator, e.direction))
          : e.mode && (n.modeOption = e.mode),
          (this.doc = n);
        var i = new ka.inputStyles[e.inputStyle](this),
          o = (this.display = new hi(t, n, i, e));
        for (var u in ((o.wrapper.CodeMirror = this),
        ya(this),
        e.lineWrapping &&
          (this.display.wrapper.className += ' CodeMirror-wrap'),
        Bn(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new z(),
          keySeq: null,
          specialChars: null,
        }),
        e.autofocus && !m && o.input.focus(),
        a &&
          l < 11 &&
          setTimeout(function() {
            return r.display.input.reset(!0);
          }, 20),
        (function(t) {
          var e = t.display;
          dt(e.scroller, 'mousedown', Zn(t, ha)),
            dt(
              e.scroller,
              'dblclick',
              a && l < 11
                ? Zn(t, function(e) {
                    if (!gt(t, e)) {
                      var r = ln(t, e);
                      if (r && !ga(t, e) && !wr(t.display, e)) {
                        xt(e);
                        var n = t.findWordAt(r);
                        Ui(t.doc, n.anchor, n.head);
                      }
                    }
                  })
                : function(e) {
                    return gt(t, e) || xt(e);
                  }
            ),
            dt(e.scroller, 'contextmenu', function(e) {
              return ma(t, e);
            });
          var r,
            n = { end: 0 };
          function i() {
            e.activeTouch &&
              ((r = setTimeout(function() {
                return (e.activeTouch = null);
              }, 1e3)),
              ((n = e.activeTouch).end = +new Date()));
          }
          function o(t, e) {
            if (null == e.left) return !0;
            var r = e.left - t.left,
              n = e.top - t.top;
            return r * r + n * n > 400;
          }
          dt(e.scroller, 'touchstart', function(i) {
            if (
              !gt(t, i) &&
              !(function(t) {
                if (1 != t.touches.length) return !1;
                var e = t.touches[0];
                return e.radiusX <= 1 && e.radiusY <= 1;
              })(i) &&
              !ga(t, i)
            ) {
              e.input.ensurePolled(), clearTimeout(r);
              var o = +new Date();
              (e.activeTouch = {
                start: o,
                moved: !1,
                prev: o - n.end <= 300 ? n : null,
              }),
                1 == i.touches.length &&
                  ((e.activeTouch.left = i.touches[0].pageX),
                  (e.activeTouch.top = i.touches[0].pageY));
            }
          }),
            dt(e.scroller, 'touchmove', function() {
              e.activeTouch && (e.activeTouch.moved = !0);
            }),
            dt(e.scroller, 'touchend', function(r) {
              var n = e.activeTouch;
              if (
                n &&
                !wr(e, r) &&
                null != n.left &&
                !n.moved &&
                new Date() - n.start < 300
              ) {
                var a,
                  l = t.coordsChar(e.activeTouch, 'page');
                (a =
                  !n.prev || o(n, n.prev)
                    ? new xi(l, l)
                    : !n.prev.prev || o(n, n.prev.prev)
                    ? t.findWordAt(l)
                    : new xi(te(l.line, 0), le(t.doc, te(l.line + 1, 0)))),
                  t.setSelection(a.anchor, a.head),
                  t.focus(),
                  xt(r);
              }
              i();
            }),
            dt(e.scroller, 'touchcancel', i),
            dt(e.scroller, 'scroll', function() {
              e.scroller.clientHeight &&
                (Pn(t, e.scroller.scrollTop),
                Dn(t, e.scroller.scrollLeft, !0),
                vt(t, 'scroll', t));
            }),
            dt(e.scroller, 'mousewheel', function(e) {
              return yi(t, e);
            }),
            dt(e.scroller, 'DOMMouseScroll', function(e) {
              return yi(t, e);
            }),
            dt(e.wrapper, 'scroll', function() {
              return (e.wrapper.scrollTop = e.wrapper.scrollLeft = 0);
            }),
            (e.dragFunctions = {
              enter: function(e) {
                gt(t, e) || Ct(e);
              },
              over: function(e) {
                gt(t, e) ||
                  ((function(t, e) {
                    var r = ln(t, e);
                    if (r) {
                      var n = document.createDocumentFragment();
                      gn(t, r, n),
                        t.display.dragCursor ||
                          ((t.display.dragCursor = _(
                            'div',
                            null,
                            'CodeMirror-cursors CodeMirror-dragcursors'
                          )),
                          t.display.lineSpace.insertBefore(
                            t.display.dragCursor,
                            t.display.cursorDiv
                          )),
                        M(t.display.dragCursor, n);
                    }
                  })(t, e),
                  Ct(e));
              },
              start: function(e) {
                return (function(t, e) {
                  if (a && (!t.state.draggingText || +new Date() - _o < 100))
                    Ct(e);
                  else if (
                    !gt(t, e) &&
                    !wr(t.display, e) &&
                    (e.dataTransfer.setData('Text', t.getSelection()),
                    (e.dataTransfer.effectAllowed = 'copyMove'),
                    e.dataTransfer.setDragImage && !d)
                  ) {
                    var r = _(
                      'img',
                      null,
                      null,
                      'position: fixed; left: 0; top: 0;'
                    );
                    (r.src =
                      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                      f &&
                        ((r.width = r.height = 1),
                        t.display.wrapper.appendChild(r),
                        (r._top = r.offsetTop)),
                      e.dataTransfer.setDragImage(r, 0, 0),
                      f && r.parentNode.removeChild(r);
                  }
                })(t, e);
              },
              drop: Zn(t, Ao),
              leave: function(e) {
                gt(t, e) || Eo(t);
              },
            });
          var s = e.input.getField();
          dt(s, 'keyup', function(e) {
            return sa.call(t, e);
          }),
            dt(s, 'keydown', Zn(t, la)),
            dt(s, 'keypress', Zn(t, ua)),
            dt(s, 'focus', function(e) {
              return Sn(t, e);
            }),
            dt(s, 'blur', function(e) {
              return Cn(t, e);
            });
        })(this),
        jo(),
        Vn(this),
        (this.curOp.forceUpdate = !0),
        Ni(this, n),
        (e.autofocus && !m) || this.hasFocus()
          ? setTimeout(I(Sn, this), 20)
          : Cn(this),
        wa))
          wa.hasOwnProperty(u) && wa[u](r, e[u], ba);
        ui(this), e.finishInit && e.finishInit(this);
        for (var c = 0; c < Ta.length; ++c) Ta[c](r);
        Un(this),
          s &&
            e.lineWrapping &&
            'optimizelegibility' == getComputedStyle(o.lineDiv).textRendering &&
            (o.lineDiv.style.textRendering = 'auto');
      }
      (ka.defaults = xa), (ka.optionHandlers = wa);
      var Ta = [];
      function La(t, e, r, n) {
        var i,
          o = t.doc;
        null == r && (r = 'add'),
          'smart' == r && (o.mode.indent ? (i = he(t, e).state) : (r = 'prev'));
        var a = t.options.tabSize,
          l = $t(o, e),
          s = W(l.text, null, a);
        l.stateAfter && (l.stateAfter = null);
        var u,
          c = l.text.match(/^\s*/)[0];
        if (n || /\S/.test(l.text)) {
          if (
            'smart' == r &&
            ((u = o.mode.indent(i, l.text.slice(c.length), l.text)) == B ||
              u > 150)
          ) {
            if (!n) return;
            r = 'prev';
          }
        } else (u = 0), (r = 'not');
        'prev' == r
          ? (u = e > o.first ? W($t(o, e - 1).text, null, a) : 0)
          : 'add' == r
          ? (u = s + t.options.indentUnit)
          : 'subtract' == r
          ? (u = s - t.options.indentUnit)
          : 'number' == typeof r && (u = s + r),
          (u = Math.max(0, u));
        var f = '',
          d = 0;
        if (t.options.indentWithTabs)
          for (var h = Math.floor(u / a); h; --h) (d += a), (f += '\t');
        if ((d < u && (f += q(u - d)), f != c))
          return (
            fo(o, f, te(e, 0), te(e, c.length), '+input'),
            (l.stateAfter = null),
            !0
          );
        for (var p = 0; p < o.sel.ranges.length; p++) {
          var v = o.sel.ranges[p];
          if (v.head.line == e && v.head.ch < c.length) {
            var g = te(e, c.length);
            Ki(o, p, new xi(g, g));
            break;
          }
        }
      }
      ka.defineInitHook = function(t) {
        return Ta.push(t);
      };
      var Oa = null;
      function Ma(t) {
        Oa = t;
      }
      function _a(t, e, r, n, i) {
        var o = t.doc;
        (t.display.shift = !1), n || (n = o.sel);
        var a = +new Date() - 200,
          l = 'paste' == i || t.state.pasteIncoming > a,
          s = Nt(e),
          u = null;
        if (l && n.ranges.length > 1)
          if (Oa && Oa.text.join('\n') == e) {
            if (n.ranges.length % Oa.text.length == 0) {
              u = [];
              for (var c = 0; c < Oa.text.length; c++)
                u.push(o.splitLines(Oa.text[c]));
            }
          } else
            s.length == n.ranges.length &&
              t.options.pasteLinesPerSelection &&
              (u = X(s, function(t) {
                return [t];
              }));
        for (
          var f = t.curOp.updateInput, d = n.ranges.length - 1;
          d >= 0;
          d--
        ) {
          var h = n.ranges[d],
            p = h.from(),
            v = h.to();
          h.empty() &&
            (r && r > 0
              ? (p = te(p.line, p.ch - r))
              : t.state.overwrite && !l
              ? (v = te(
                  v.line,
                  Math.min($t(o, v.line).text.length, v.ch + Y(s).length)
                ))
              : l &&
                Oa &&
                Oa.lineWise &&
                Oa.text.join('\n') == e &&
                (p = v = te(p.line, 0)));
          var g = {
            from: p,
            to: v,
            text: u ? u[d % u.length] : s,
            origin:
              i || (l ? 'paste' : t.state.cutIncoming > a ? 'cut' : '+input'),
          };
          ao(t.doc, g), lr(t, 'inputRead', t, g);
        }
        e && !l && Ea(t, e),
          _n(t),
          t.curOp.updateInput < 2 && (t.curOp.updateInput = f),
          (t.curOp.typing = !0),
          (t.state.pasteIncoming = t.state.cutIncoming = -1);
      }
      function Aa(t, e) {
        var r = t.clipboardData && t.clipboardData.getData('Text');
        if (r)
          return (
            t.preventDefault(),
            e.isReadOnly() ||
              e.options.disableInput ||
              Xn(e, function() {
                return _a(e, r, 0, null, 'paste');
              }),
            !0
          );
      }
      function Ea(t, e) {
        if (t.options.electricChars && t.options.smartIndent)
          for (var r = t.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
            var i = r.ranges[n];
            if (
              !(
                i.head.ch > 100 ||
                (n && r.ranges[n - 1].head.line == i.head.line)
              )
            ) {
              var o = t.getModeAt(i.head),
                a = !1;
              if (o.electricChars) {
                for (var l = 0; l < o.electricChars.length; l++)
                  if (e.indexOf(o.electricChars.charAt(l)) > -1) {
                    a = La(t, i.head.line, 'smart');
                    break;
                  }
              } else
                o.electricInput &&
                  o.electricInput.test(
                    $t(t.doc, i.head.line).text.slice(0, i.head.ch)
                  ) &&
                  (a = La(t, i.head.line, 'smart'));
              a && lr(t, 'electricInput', t, i.head.line);
            }
          }
      }
      function Na(t) {
        for (var e = [], r = [], n = 0; n < t.doc.sel.ranges.length; n++) {
          var i = t.doc.sel.ranges[n].head.line,
            o = { anchor: te(i, 0), head: te(i + 1, 0) };
          r.push(o), e.push(t.getRange(o.anchor, o.head));
        }
        return { text: e, ranges: r };
      }
      function Pa(t, e, r, n) {
        t.setAttribute('autocorrect', r ? '' : 'off'),
          t.setAttribute('autocapitalize', n ? '' : 'off'),
          t.setAttribute('spellcheck', !!e);
      }
      function ja() {
        var t = _(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
          ),
          e = _(
            'div',
            [t],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;'
          );
        return (
          s ? (t.style.width = '1000px') : t.setAttribute('wrap', 'off'),
          v && (t.style.border = '1px solid black'),
          Pa(t),
          e
        );
      }
      function Da(t, e, r, n, i) {
        var o = e,
          a = r,
          l = $t(t, e.line);
        function s(n) {
          var o, a;
          if (
            null ==
            (o = i
              ? (function(t, e, r, n) {
                  var i = ct(e, t.doc.direction);
                  if (!i) return Xo(e, r, n);
                  r.ch >= e.text.length
                    ? ((r.ch = e.text.length), (r.sticky = 'before'))
                    : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'));
                  var o = st(i, r.ch, r.sticky),
                    a = i[o];
                  if (
                    'ltr' == t.doc.direction &&
                    a.level % 2 == 0 &&
                    (n > 0 ? a.to > r.ch : a.from < r.ch)
                  )
                    return Xo(e, r, n);
                  var l,
                    s = function(t, r) {
                      return Yo(e, t instanceof te ? t.ch : t, r);
                    },
                    u = function(r) {
                      return t.options.lineWrapping
                        ? ((l = l || Er(t, e)), Zr(t, e, l, r))
                        : { begin: 0, end: e.text.length };
                    },
                    c = u('before' == r.sticky ? s(r, -1) : r.ch);
                  if ('rtl' == t.doc.direction || 1 == a.level) {
                    var f = (1 == a.level) == n < 0,
                      d = s(r, f ? 1 : -1);
                    if (
                      null != d &&
                      (f
                        ? d <= a.to && d <= c.end
                        : d >= a.from && d >= c.begin)
                    ) {
                      var h = f ? 'before' : 'after';
                      return new te(r.line, d, h);
                    }
                  }
                  var p = function(t, e, n) {
                      for (
                        var o = function(t, e) {
                          return e
                            ? new te(r.line, s(t, 1), 'before')
                            : new te(r.line, t, 'after');
                        };
                        t >= 0 && t < i.length;
                        t += e
                      ) {
                        var a = i[t],
                          l = e > 0 == (1 != a.level),
                          u = l ? n.begin : s(n.end, -1);
                        if (a.from <= u && u < a.to) return o(u, l);
                        if (
                          ((u = l ? a.from : s(a.to, -1)),
                          n.begin <= u && u < n.end)
                        )
                          return o(u, l);
                      }
                    },
                    v = p(o + n, n, c);
                  if (v) return v;
                  var g = n > 0 ? c.end : s(c.begin, -1);
                  return null == g ||
                    (n > 0 && g == e.text.length) ||
                    !(v = p(n > 0 ? 0 : i.length - 1, n, u(g)))
                    ? null
                    : v;
                })(t.cm, l, e, r)
              : Xo(l, e, r))
          ) {
            if (
              n ||
              ((a = e.line + r) < t.first ||
                a >= t.first + t.size ||
                ((e = new te(a, e.ch, e.sticky)), !(l = $t(t, a))))
            )
              return !1;
            e = Zo(i, t.cm, l, e.line, r);
          } else e = o;
          return !0;
        }
        if ('char' == n) s();
        else if ('column' == n) s(!0);
        else if ('word' == n || 'group' == n)
          for (
            var u = null,
              c = 'group' == n,
              f = t.cm && t.cm.getHelper(e, 'wordChars'),
              d = !0;
            !(r < 0) || s(!d);
            d = !1
          ) {
            var h = l.text.charAt(e.ch) || '\n',
              p = et(h, f)
                ? 'w'
                : c && '\n' == h
                ? 'n'
                : !c || /\s/.test(h)
                ? null
                : 'p';
            if ((!c || d || p || (p = 's'), u && u != p)) {
              r < 0 && ((r = 1), s(), (e.sticky = 'after'));
              break;
            }
            if ((p && (u = p), r > 0 && !s(!d))) break;
          }
        var v = ro(t, e, o, a, !0);
        return re(o, v) && (v.hitSide = !0), v;
      }
      function Ia(t, e, r, n) {
        var i,
          o,
          a = t.doc,
          l = e.left;
        if ('page' == n) {
          var s = Math.min(
              t.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            u = Math.max(s - 0.5 * tn(t.display), 3);
          i = (r > 0 ? e.bottom : e.top) + r * u;
        } else 'line' == n && (i = r > 0 ? e.bottom + 3 : e.top - 3);
        for (; (o = Yr(t, l, i)).outside; ) {
          if (r < 0 ? i <= 0 : i >= a.height) {
            o.hitSide = !0;
            break;
          }
          i += 5 * r;
        }
        return o;
      }
      var Fa = function(t) {
        (this.cm = t),
          (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
          (this.polling = new z()),
          (this.composing = null),
          (this.gracePeriod = !1),
          (this.readDOMTimeout = null);
      };
      function Wa(t, e) {
        var r = Ar(t, e.line);
        if (!r || r.hidden) return null;
        var n = $t(t.doc, e.line),
          i = Mr(r, n, e.line),
          o = ct(n, t.doc.direction),
          a = 'left';
        if (o) {
          var l = st(o, e.ch);
          a = l % 2 ? 'right' : 'left';
        }
        var s = Dr(i.map, e.ch, a);
        return (s.offset = 'right' == s.collapse ? s.end : s.start), s;
      }
      function za(t, e) {
        return e && (t.bad = !0), t;
      }
      function Ha(t, e, r) {
        var n;
        if (e == t.display.lineDiv) {
          if (!(n = t.display.lineDiv.childNodes[r]))
            return za(t.clipPos(te(t.display.viewTo - 1)), !0);
          (e = null), (r = 0);
        } else
          for (n = e; ; n = n.parentNode) {
            if (!n || n == t.display.lineDiv) return null;
            if (n.parentNode && n.parentNode == t.display.lineDiv) break;
          }
        for (var i = 0; i < t.display.view.length; i++) {
          var o = t.display.view[i];
          if (o.node == n) return Ra(o, e, r);
        }
      }
      function Ra(t, e, r) {
        var n = t.text.firstChild,
          i = !1;
        if (!e || !E(n, e)) return za(te(Xt(t.line), 0), !0);
        if (e == n && ((i = !0), (e = n.childNodes[r]), (r = 0), !e)) {
          var o = t.rest ? Y(t.rest) : t.line;
          return za(te(Xt(o), o.text.length), i);
        }
        var a = 3 == e.nodeType ? e : null,
          l = e;
        for (
          a ||
          1 != e.childNodes.length ||
          3 != e.firstChild.nodeType ||
          ((a = e.firstChild), r && (r = a.nodeValue.length));
          l.parentNode != n;

        )
          l = l.parentNode;
        var s = t.measure,
          u = s.maps;
        function c(e, r, n) {
          for (var i = -1; i < (u ? u.length : 0); i++)
            for (var o = i < 0 ? s.map : u[i], a = 0; a < o.length; a += 3) {
              var l = o[a + 2];
              if (l == e || l == r) {
                var c = Xt(i < 0 ? t.line : t.rest[i]),
                  f = o[a] + n;
                return (n < 0 || l != e) && (f = o[a + (n ? 1 : 0)]), te(c, f);
              }
            }
        }
        var f = c(a, l, r);
        if (f) return za(f, i);
        for (
          var d = l.nextSibling, h = a ? a.nodeValue.length - r : 0;
          d;
          d = d.nextSibling
        ) {
          if ((f = c(d, d.firstChild, 0))) return za(te(f.line, f.ch - h), i);
          h += d.textContent.length;
        }
        for (var p = l.previousSibling, v = r; p; p = p.previousSibling) {
          if ((f = c(p, p.firstChild, -1))) return za(te(f.line, f.ch + v), i);
          v += p.textContent.length;
        }
      }
      (Fa.prototype.init = function(t) {
        var e = this,
          r = this,
          n = r.cm,
          i = (r.div = t.lineDiv);
        function o(t) {
          if (!gt(n, t)) {
            if (n.somethingSelected())
              Ma({ lineWise: !1, text: n.getSelections() }),
                'cut' == t.type && n.replaceSelection('', null, 'cut');
            else {
              if (!n.options.lineWiseCopyCut) return;
              var e = Na(n);
              Ma({ lineWise: !0, text: e.text }),
                'cut' == t.type &&
                  n.operation(function() {
                    n.setSelections(e.ranges, 0, G),
                      n.replaceSelection('', null, 'cut');
                  });
            }
            if (t.clipboardData) {
              t.clipboardData.clearData();
              var o = Oa.text.join('\n');
              if (
                (t.clipboardData.setData('Text', o),
                t.clipboardData.getData('Text') == o)
              )
                return void t.preventDefault();
            }
            var a = ja(),
              l = a.firstChild;
            n.display.lineSpace.insertBefore(a, n.display.lineSpace.firstChild),
              (l.value = Oa.text.join('\n'));
            var s = document.activeElement;
            D(l),
              setTimeout(function() {
                n.display.lineSpace.removeChild(a),
                  s.focus(),
                  s == i && r.showPrimarySelection();
              }, 50);
          }
        }
        Pa(
          i,
          n.options.spellcheck,
          n.options.autocorrect,
          n.options.autocapitalize
        ),
          dt(i, 'paste', function(t) {
            gt(n, t) ||
              Aa(t, n) ||
              (l <= 11 &&
                setTimeout(
                  Zn(n, function() {
                    return e.updateFromDOM();
                  }),
                  20
                ));
          }),
          dt(i, 'compositionstart', function(t) {
            e.composing = { data: t.data, done: !1 };
          }),
          dt(i, 'compositionupdate', function(t) {
            e.composing || (e.composing = { data: t.data, done: !1 });
          }),
          dt(i, 'compositionend', function(t) {
            e.composing &&
              (t.data != e.composing.data && e.readFromDOMSoon(),
              (e.composing.done = !0));
          }),
          dt(i, 'touchstart', function() {
            return r.forceCompositionEnd();
          }),
          dt(i, 'input', function() {
            e.composing || e.readFromDOMSoon();
          }),
          dt(i, 'copy', o),
          dt(i, 'cut', o);
      }),
        (Fa.prototype.prepareSelection = function() {
          var t = vn(this.cm, !1);
          return (t.focus = this.cm.state.focused), t;
        }),
        (Fa.prototype.showSelection = function(t, e) {
          t &&
            this.cm.display.view.length &&
            ((t.focus || e) && this.showPrimarySelection(),
            this.showMultipleSelections(t));
        }),
        (Fa.prototype.getSelection = function() {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        }),
        (Fa.prototype.showPrimarySelection = function() {
          var t = this.getSelection(),
            e = this.cm,
            n = e.doc.sel.primary(),
            i = n.from(),
            o = n.to();
          if (
            e.display.viewTo == e.display.viewFrom ||
            i.line >= e.display.viewTo ||
            o.line < e.display.viewFrom
          )
            t.removeAllRanges();
          else {
            var a = Ha(e, t.anchorNode, t.anchorOffset),
              l = Ha(e, t.focusNode, t.focusOffset);
            if (
              !a ||
              a.bad ||
              !l ||
              l.bad ||
              0 != ee(oe(a, l), i) ||
              0 != ee(ie(a, l), o)
            ) {
              var s = e.display.view,
                u = (i.line >= e.display.viewFrom && Wa(e, i)) || {
                  node: s[0].measure.map[2],
                  offset: 0,
                },
                c = o.line < e.display.viewTo && Wa(e, o);
              if (!c) {
                var f = s[s.length - 1].measure,
                  d = f.maps ? f.maps[f.maps.length - 1] : f.map;
                c = {
                  node: d[d.length - 1],
                  offset: d[d.length - 2] - d[d.length - 3],
                };
              }
              if (u && c) {
                var h,
                  p = t.rangeCount && t.getRangeAt(0);
                try {
                  h = T(u.node, u.offset, c.offset, c.node);
                } catch (t) {}
                h &&
                  (!r && e.state.focused
                    ? (t.collapse(u.node, u.offset),
                      h.collapsed || (t.removeAllRanges(), t.addRange(h)))
                    : (t.removeAllRanges(), t.addRange(h)),
                  p && null == t.anchorNode
                    ? t.addRange(p)
                    : r && this.startGracePeriod()),
                  this.rememberSelection();
              } else t.removeAllRanges();
            }
          }
        }),
        (Fa.prototype.startGracePeriod = function() {
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
        (Fa.prototype.showMultipleSelections = function(t) {
          M(this.cm.display.cursorDiv, t.cursors),
            M(this.cm.display.selectionDiv, t.selection);
        }),
        (Fa.prototype.rememberSelection = function() {
          var t = this.getSelection();
          (this.lastAnchorNode = t.anchorNode),
            (this.lastAnchorOffset = t.anchorOffset),
            (this.lastFocusNode = t.focusNode),
            (this.lastFocusOffset = t.focusOffset);
        }),
        (Fa.prototype.selectionInEditor = function() {
          var t = this.getSelection();
          if (!t.rangeCount) return !1;
          var e = t.getRangeAt(0).commonAncestorContainer;
          return E(this.div, e);
        }),
        (Fa.prototype.focus = function() {
          'nocursor' != this.cm.options.readOnly &&
            (this.selectionInEditor() ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus());
        }),
        (Fa.prototype.blur = function() {
          this.div.blur();
        }),
        (Fa.prototype.getField = function() {
          return this.div;
        }),
        (Fa.prototype.supportsTouch = function() {
          return !0;
        }),
        (Fa.prototype.receivedFocus = function() {
          var t = this;
          this.selectionInEditor()
            ? this.pollSelection()
            : Xn(this.cm, function() {
                return (t.cm.curOp.selectionChanged = !0);
              }),
            this.polling.set(this.cm.options.pollInterval, function e() {
              t.cm.state.focused &&
                (t.pollSelection(),
                t.polling.set(t.cm.options.pollInterval, e));
            });
        }),
        (Fa.prototype.selectionChanged = function() {
          var t = this.getSelection();
          return (
            t.anchorNode != this.lastAnchorNode ||
            t.anchorOffset != this.lastAnchorOffset ||
            t.focusNode != this.lastFocusNode ||
            t.focusOffset != this.lastFocusOffset
          );
        }),
        (Fa.prototype.pollSelection = function() {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var t = this.getSelection(),
              e = this.cm;
            if (
              g &&
              c &&
              this.cm.display.gutterSpecs.length &&
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
              var r = Ha(e, t.anchorNode, t.anchorOffset),
                n = Ha(e, t.focusNode, t.focusOffset);
              r &&
                n &&
                Xn(e, function() {
                  Xi(e.doc, Si(r, n), G),
                    (r.bad || n.bad) && (e.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (Fa.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var t,
            e,
            r,
            n = this.cm,
            i = n.display,
            o = n.doc.sel.primary(),
            a = o.from(),
            l = o.to();
          if (
            (0 == a.ch &&
              a.line > n.firstLine() &&
              (a = te(a.line - 1, $t(n.doc, a.line - 1).length)),
            l.ch == $t(n.doc, l.line).text.length &&
              l.line < n.lastLine() &&
              (l = te(l.line + 1, 0)),
            a.line < i.viewFrom || l.line > i.viewTo - 1)
          )
            return !1;
          a.line == i.viewFrom || 0 == (t = sn(n, a.line))
            ? ((e = Xt(i.view[0].line)), (r = i.view[0].node))
            : ((e = Xt(i.view[t].line)), (r = i.view[t - 1].node.nextSibling));
          var s,
            u,
            c = sn(n, l.line);
          if (
            (c == i.view.length - 1
              ? ((s = i.viewTo - 1), (u = i.lineDiv.lastChild))
              : ((s = Xt(i.view[c + 1].line) - 1),
                (u = i.view[c + 1].node.previousSibling)),
            !r)
          )
            return !1;
          for (
            var f = n.doc.splitLines(
                (function(t, e, r, n, i) {
                  var o = '',
                    a = !1,
                    l = t.doc.lineSeparator(),
                    s = !1;
                  function u() {
                    a && ((o += l), s && (o += l), (a = s = !1));
                  }
                  function c(t) {
                    t && (u(), (o += t));
                  }
                  function f(e) {
                    if (1 == e.nodeType) {
                      var r = e.getAttribute('cm-text');
                      if (r) return void c(r);
                      var o,
                        d = e.getAttribute('cm-marker');
                      if (d) {
                        var h = t.findMarks(
                          te(n, 0),
                          te(i + 1, 0),
                          ((g = +d),
                          function(t) {
                            return t.id == g;
                          })
                        );
                        return void (
                          h.length &&
                          (o = h[0].find(0)) &&
                          c(Kt(t.doc, o.from, o.to).join(l))
                        );
                      }
                      if ('false' == e.getAttribute('contenteditable')) return;
                      var p = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                      if (
                        !/^br$/i.test(e.nodeName) &&
                        0 == e.textContent.length
                      )
                        return;
                      p && u();
                      for (var v = 0; v < e.childNodes.length; v++)
                        f(e.childNodes[v]);
                      /^(pre|p)$/i.test(e.nodeName) && (s = !0), p && (a = !0);
                    } else
                      3 == e.nodeType &&
                        c(
                          e.nodeValue
                            .replace(/\u200b/g, '')
                            .replace(/\u00a0/g, ' ')
                        );
                    var g;
                  }
                  for (; f(e), e != r; ) (e = e.nextSibling), (s = !1);
                  return o;
                })(n, r, u, e, s)
              ),
              d = Kt(n.doc, te(e, 0), te(s, $t(n.doc, s).text.length));
            f.length > 1 && d.length > 1;

          )
            if (Y(f) == Y(d)) f.pop(), d.pop(), s--;
            else {
              if (f[0] != d[0]) break;
              f.shift(), d.shift(), e++;
            }
          for (
            var h = 0,
              p = 0,
              v = f[0],
              g = d[0],
              m = Math.min(v.length, g.length);
            h < m && v.charCodeAt(h) == g.charCodeAt(h);

          )
            ++h;
          for (
            var y = Y(f),
              b = Y(d),
              x = Math.min(
                y.length - (1 == f.length ? h : 0),
                b.length - (1 == d.length ? h : 0)
              );
            p < x &&
            y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

          )
            ++p;
          if (1 == f.length && 1 == d.length && e == a.line)
            for (
              ;
              h &&
              h > a.ch &&
              y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);

            )
              h--, p++;
          (f[f.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, '')),
            (f[0] = f[0].slice(h).replace(/\u200b+$/, ''));
          var w = te(e, h),
            S = te(s, d.length ? Y(d).length - p : 0);
          return f.length > 1 || f[0] || ee(w, S)
            ? (fo(n.doc, f, w, S, '+input'), !0)
            : void 0;
        }),
        (Fa.prototype.ensurePolled = function() {
          this.forceCompositionEnd();
        }),
        (Fa.prototype.reset = function() {
          this.forceCompositionEnd();
        }),
        (Fa.prototype.forceCompositionEnd = function() {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus());
        }),
        (Fa.prototype.readFromDOMSoon = function() {
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
        (Fa.prototype.updateFromDOM = function() {
          var t = this;
          (!this.cm.isReadOnly() && this.pollContent()) ||
            Xn(this.cm, function() {
              return un(t.cm);
            });
        }),
        (Fa.prototype.setUneditable = function(t) {
          t.contentEditable = 'false';
        }),
        (Fa.prototype.onKeyPress = function(t) {
          0 == t.charCode ||
            this.composing ||
            (t.preventDefault(),
            this.cm.isReadOnly() ||
              Zn(this.cm, _a)(
                this.cm,
                String.fromCharCode(
                  null == t.charCode ? t.keyCode : t.charCode
                ),
                0
              ));
        }),
        (Fa.prototype.readOnlyChanged = function(t) {
          this.div.contentEditable = String('nocursor' != t);
        }),
        (Fa.prototype.onContextMenu = function() {}),
        (Fa.prototype.resetPosition = function() {}),
        (Fa.prototype.needsContentAttribute = !0);
      var Ba = function(t) {
        (this.cm = t),
          (this.prevInput = ''),
          (this.pollingFast = !1),
          (this.polling = new z()),
          (this.hasSelection = !1),
          (this.composing = null);
      };
      (Ba.prototype.init = function(t) {
        var e = this,
          r = this,
          n = this.cm;
        this.createField(t);
        var i = this.textarea;
        function o(t) {
          if (!gt(n, t)) {
            if (n.somethingSelected())
              Ma({ lineWise: !1, text: n.getSelections() });
            else {
              if (!n.options.lineWiseCopyCut) return;
              var e = Na(n);
              Ma({ lineWise: !0, text: e.text }),
                'cut' == t.type
                  ? n.setSelections(e.ranges, null, G)
                  : ((r.prevInput = ''), (i.value = e.text.join('\n')), D(i));
            }
            'cut' == t.type && (n.state.cutIncoming = +new Date());
          }
        }
        t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild),
          v && (i.style.width = '0px'),
          dt(i, 'input', function() {
            a && l >= 9 && e.hasSelection && (e.hasSelection = null), r.poll();
          }),
          dt(i, 'paste', function(t) {
            gt(n, t) ||
              Aa(t, n) ||
              ((n.state.pasteIncoming = +new Date()), r.fastPoll());
          }),
          dt(i, 'cut', o),
          dt(i, 'copy', o),
          dt(t.scroller, 'paste', function(e) {
            if (!wr(t, e) && !gt(n, e)) {
              if (!i.dispatchEvent)
                return (n.state.pasteIncoming = +new Date()), void r.focus();
              var o = new Event('paste');
              (o.clipboardData = e.clipboardData), i.dispatchEvent(o);
            }
          }),
          dt(t.lineSpace, 'selectstart', function(e) {
            wr(t, e) || xt(e);
          }),
          dt(i, 'compositionstart', function() {
            var t = n.getCursor('from');
            r.composing && r.composing.range.clear(),
              (r.composing = {
                start: t,
                range: n.markText(t, n.getCursor('to'), {
                  className: 'CodeMirror-composing',
                }),
              });
          }),
          dt(i, 'compositionend', function() {
            r.composing &&
              (r.poll(), r.composing.range.clear(), (r.composing = null));
          });
      }),
        (Ba.prototype.createField = function(t) {
          (this.wrapper = ja()), (this.textarea = this.wrapper.firstChild);
        }),
        (Ba.prototype.prepareSelection = function() {
          var t = this.cm,
            e = t.display,
            r = t.doc,
            n = vn(t);
          if (t.options.moveInputWithCursor) {
            var i = $r(t, r.sel.primary().head, 'div'),
              o = e.wrapper.getBoundingClientRect(),
              a = e.lineDiv.getBoundingClientRect();
            (n.teTop = Math.max(
              0,
              Math.min(e.wrapper.clientHeight - 10, i.top + a.top - o.top)
            )),
              (n.teLeft = Math.max(
                0,
                Math.min(e.wrapper.clientWidth - 10, i.left + a.left - o.left)
              ));
          }
          return n;
        }),
        (Ba.prototype.showSelection = function(t) {
          var e = this.cm,
            r = e.display;
          M(r.cursorDiv, t.cursors),
            M(r.selectionDiv, t.selection),
            null != t.teTop &&
              ((this.wrapper.style.top = t.teTop + 'px'),
              (this.wrapper.style.left = t.teLeft + 'px'));
        }),
        (Ba.prototype.reset = function(t) {
          if (!this.contextMenuPending && !this.composing) {
            var e = this.cm;
            if (e.somethingSelected()) {
              this.prevInput = '';
              var r = e.getSelection();
              (this.textarea.value = r),
                e.state.focused && D(this.textarea),
                a && l >= 9 && (this.hasSelection = r);
            } else
              t ||
                ((this.prevInput = this.textarea.value = ''),
                a && l >= 9 && (this.hasSelection = null));
          }
        }),
        (Ba.prototype.getField = function() {
          return this.textarea;
        }),
        (Ba.prototype.supportsTouch = function() {
          return !1;
        }),
        (Ba.prototype.focus = function() {
          if (
            'nocursor' != this.cm.options.readOnly &&
            (!m || N() != this.textarea)
          )
            try {
              this.textarea.focus();
            } catch (t) {}
        }),
        (Ba.prototype.blur = function() {
          this.textarea.blur();
        }),
        (Ba.prototype.resetPosition = function() {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (Ba.prototype.receivedFocus = function() {
          this.slowPoll();
        }),
        (Ba.prototype.slowPoll = function() {
          var t = this;
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function() {
              t.poll(), t.cm.state.focused && t.slowPoll();
            });
        }),
        (Ba.prototype.fastPoll = function() {
          var t = !1,
            e = this;
          (e.pollingFast = !0),
            e.polling.set(20, function r() {
              var n = e.poll();
              n || t
                ? ((e.pollingFast = !1), e.slowPoll())
                : ((t = !0), e.polling.set(60, r));
            });
        }),
        (Ba.prototype.poll = function() {
          var t = this,
            e = this.cm,
            r = this.textarea,
            n = this.prevInput;
          if (
            this.contextMenuPending ||
            !e.state.focused ||
            (Pt(r) && !n && !this.composing) ||
            e.isReadOnly() ||
            e.options.disableInput ||
            e.state.keySeq
          )
            return !1;
          var i = r.value;
          if (i == n && !e.somethingSelected()) return !1;
          if (
            (a && l >= 9 && this.hasSelection === i) ||
            (y && /[\uf700-\uf7ff]/.test(i))
          )
            return e.display.input.reset(), !1;
          if (e.doc.sel == e.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if ((8203 != o || n || (n = '​'), 8666 == o))
              return this.reset(), this.cm.execCommand('undo');
          }
          for (
            var s = 0, u = Math.min(n.length, i.length);
            s < u && n.charCodeAt(s) == i.charCodeAt(s);

          )
            ++s;
          return (
            Xn(e, function() {
              _a(
                e,
                i.slice(s),
                n.length - s,
                null,
                t.composing ? '*compose' : null
              ),
                i.length > 1e3 || i.indexOf('\n') > -1
                  ? (r.value = t.prevInput = '')
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
        (Ba.prototype.ensurePolled = function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Ba.prototype.onKeyPress = function() {
          a && l >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Ba.prototype.onContextMenu = function(t) {
          var e = this,
            r = e.cm,
            n = r.display,
            i = e.textarea;
          e.contextMenuPending && e.contextMenuPending();
          var o = ln(r, t),
            u = n.scroller.scrollTop;
          if (o && !f) {
            var c = r.options.resetSelectionOnContextMenu;
            c && -1 == r.doc.sel.contains(o) && Zn(r, Xi)(r.doc, Si(o), G);
            var d,
              h = i.style.cssText,
              p = e.wrapper.style.cssText,
              v = e.wrapper.offsetParent.getBoundingClientRect();
            if (
              ((e.wrapper.style.cssText = 'position: static'),
              (i.style.cssText =
                'position: absolute; width: 30px; height: 30px;\n      top: ' +
                (t.clientY - v.top - 5) +
                'px; left: ' +
                (t.clientX - v.left - 5) +
                'px;\n      z-index: 1000; background: ' +
                (a ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
              s && (d = window.scrollY),
              n.input.focus(),
              s && window.scrollTo(null, d),
              n.input.reset(),
              r.somethingSelected() || (i.value = e.prevInput = ' '),
              (e.contextMenuPending = y),
              (n.selForContextMenu = r.doc.sel),
              clearTimeout(n.detectingSelectAll),
              a && l >= 9 && m(),
              C)
            ) {
              Ct(t);
              var g = function() {
                pt(window, 'mouseup', g), setTimeout(y, 20);
              };
              dt(window, 'mouseup', g);
            } else setTimeout(y, 50);
          }
          function m() {
            if (null != i.selectionStart) {
              var t = r.somethingSelected(),
                o = '​' + (t ? i.value : '');
              (i.value = '⇚'),
                (i.value = o),
                (e.prevInput = t ? '' : '​'),
                (i.selectionStart = 1),
                (i.selectionEnd = o.length),
                (n.selForContextMenu = r.doc.sel);
            }
          }
          function y() {
            if (
              e.contextMenuPending == y &&
              ((e.contextMenuPending = !1),
              (e.wrapper.style.cssText = p),
              (i.style.cssText = h),
              a &&
                l < 9 &&
                n.scrollbars.setScrollTop((n.scroller.scrollTop = u)),
              null != i.selectionStart)
            ) {
              (!a || (a && l < 9)) && m();
              var t = 0,
                o = function() {
                  n.selForContextMenu == r.doc.sel &&
                  0 == i.selectionStart &&
                  i.selectionEnd > 0 &&
                  '​' == e.prevInput
                    ? Zn(r, io)(r)
                    : t++ < 10
                    ? (n.detectingSelectAll = setTimeout(o, 500))
                    : ((n.selForContextMenu = null), n.input.reset());
                };
              n.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }),
        (Ba.prototype.readOnlyChanged = function(t) {
          t || this.reset(), (this.textarea.disabled = 'nocursor' == t);
        }),
        (Ba.prototype.setUneditable = function() {}),
        (Ba.prototype.needsContentAttribute = !1),
        (function(t) {
          var e = t.optionHandlers;
          function r(r, n, i, o) {
            (t.defaults[r] = n),
              i &&
                (e[r] = o
                  ? function(t, e, r) {
                      r != ba && i(t, e, r);
                    }
                  : i);
          }
          (t.defineOption = r),
            (t.Init = ba),
            r(
              'value',
              '',
              function(t, e) {
                return t.setValue(e);
              },
              !0
            ),
            r(
              'mode',
              null,
              function(t, e) {
                (t.doc.modeOption = e), Oi(t);
              },
              !0
            ),
            r('indentUnit', 2, Oi, !0),
            r('indentWithTabs', !1),
            r('smartIndent', !0),
            r(
              'tabSize',
              4,
              function(t) {
                Mi(t), zr(t), un(t);
              },
              !0
            ),
            r('lineSeparator', null, function(t, e) {
              if (((t.doc.lineSep = e), e)) {
                var r = [],
                  n = t.doc.first;
                t.doc.iter(function(t) {
                  for (var i = 0; ; ) {
                    var o = t.text.indexOf(e, i);
                    if (-1 == o) break;
                    (i = o + e.length), r.push(te(n, o));
                  }
                  n++;
                });
                for (var i = r.length - 1; i >= 0; i--)
                  fo(t.doc, e, r[i], te(r[i].line, r[i].ch + e.length));
              }
            }),
            r(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
              function(t, e, r) {
                (t.state.specialChars = new RegExp(
                  e.source + (e.test('\t') ? '' : '|\t'),
                  'g'
                )),
                  r != ba && t.refresh();
              }
            ),
            r(
              'specialCharPlaceholder',
              Je,
              function(t) {
                return t.refresh();
              },
              !0
            ),
            r('electricChars', !0),
            r(
              'inputStyle',
              m ? 'contenteditable' : 'textarea',
              function() {
                throw new Error(
                  'inputStyle can not (yet) be changed in a running editor'
                );
              },
              !0
            ),
            r(
              'spellcheck',
              !1,
              function(t, e) {
                return (t.getInputField().spellcheck = e);
              },
              !0
            ),
            r(
              'autocorrect',
              !1,
              function(t, e) {
                return (t.getInputField().autocorrect = e);
              },
              !0
            ),
            r(
              'autocapitalize',
              !1,
              function(t, e) {
                return (t.getInputField().autocapitalize = e);
              },
              !0
            ),
            r('rtlMoveVisually', !x),
            r('wholeLineUpdateBefore', !0),
            r(
              'theme',
              'default',
              function(t) {
                ya(t), di(t);
              },
              !0
            ),
            r('keyMap', 'default', function(t, e, r) {
              var n = Ko(e),
                i = r != ba && Ko(r);
              i && i.detach && i.detach(t, n),
                n.attach && n.attach(t, i || null);
            }),
            r('extraKeys', null),
            r('configureMouse', null),
            r('lineWrapping', !1, Ca, !0),
            r(
              'gutters',
              [],
              function(t, e) {
                (t.display.gutterSpecs = ci(e, t.options.lineNumbers)), di(t);
              },
              !0
            ),
            r(
              'fixedGutter',
              !0,
              function(t, e) {
                (t.display.gutters.style.left = e ? nn(t.display) + 'px' : '0'),
                  t.refresh();
              },
              !0
            ),
            r(
              'coverGutterNextToScrollbar',
              !1,
              function(t) {
                return zn(t);
              },
              !0
            ),
            r(
              'scrollbarStyle',
              'native',
              function(t) {
                Bn(t),
                  zn(t),
                  t.display.scrollbars.setScrollTop(t.doc.scrollTop),
                  t.display.scrollbars.setScrollLeft(t.doc.scrollLeft);
              },
              !0
            ),
            r(
              'lineNumbers',
              !1,
              function(t, e) {
                (t.display.gutterSpecs = ci(t.options.gutters, e)), di(t);
              },
              !0
            ),
            r('firstLineNumber', 1, di, !0),
            r(
              'lineNumberFormatter',
              function(t) {
                return t;
              },
              di,
              !0
            ),
            r('showCursorWhenSelecting', !1, pn, !0),
            r('resetSelectionOnContextMenu', !0),
            r('lineWiseCopyCut', !0),
            r('pasteLinesPerSelection', !0),
            r('selectionsMayTouch', !1),
            r('readOnly', !1, function(t, e) {
              'nocursor' == e && (Cn(t), t.display.input.blur()),
                t.display.input.readOnlyChanged(e);
            }),
            r(
              'disableInput',
              !1,
              function(t, e) {
                e || t.display.input.reset();
              },
              !0
            ),
            r('dragDrop', !0, Sa),
            r('allowDropFileTypes', null),
            r('cursorBlinkRate', 530),
            r('cursorScrollMargin', 0),
            r('cursorHeight', 1, pn, !0),
            r('singleCursorHeightPerLine', !0, pn, !0),
            r('workTime', 100),
            r('workDelay', 100),
            r('flattenSpans', !0, Mi, !0),
            r('addModeClass', !1, Mi, !0),
            r('pollInterval', 100),
            r('undoDepth', 200, function(t, e) {
              return (t.doc.history.undoDepth = e);
            }),
            r('historyEventDelay', 1250),
            r(
              'viewportMargin',
              10,
              function(t) {
                return t.refresh();
              },
              !0
            ),
            r('maxHighlightLength', 1e4, Mi, !0),
            r('moveInputWithCursor', !0, function(t, e) {
              e || t.display.input.resetPosition();
            }),
            r('tabindex', null, function(t, e) {
              return (t.display.input.getField().tabIndex = e || '');
            }),
            r('autofocus', null),
            r(
              'direction',
              'ltr',
              function(t, e) {
                return t.doc.setDirection(e);
              },
              !0
            ),
            r('phrases', null);
        })(ka),
        (function(t) {
          var e = t.optionHandlers,
            r = (t.helpers = {});
          (t.prototype = {
            constructor: t,
            focus: function() {
              window.focus(), this.display.input.focus();
            },
            setOption: function(t, r) {
              var n = this.options,
                i = n[t];
              (n[t] == r && 'mode' != t) ||
                ((n[t] = r),
                e.hasOwnProperty(t) && Zn(this, e[t])(this, r, i),
                vt(this, 'optionChange', this, t));
            },
            getOption: function(t) {
              return this.options[t];
            },
            getDoc: function() {
              return this.doc;
            },
            addKeyMap: function(t, e) {
              this.state.keyMaps[e ? 'push' : 'unshift'](Ko(t));
            },
            removeKeyMap: function(t) {
              for (var e = this.state.keyMaps, r = 0; r < e.length; ++r)
                if (e[r] == t || e[r].name == t) return e.splice(r, 1), !0;
            },
            addOverlay: Jn(function(e, r) {
              var n = e.token ? e : t.getMode(this.options, e);
              if (n.startState)
                throw new Error('Overlays may not be stateful.');
              !(function(t, e, r) {
                for (var n = 0, i = r(e); n < t.length && r(t[n]) <= i; ) n++;
                t.splice(n, 0, e);
              })(
                this.state.overlays,
                {
                  mode: n,
                  modeSpec: e,
                  opaque: r && r.opaque,
                  priority: (r && r.priority) || 0,
                },
                function(t) {
                  return t.priority;
                }
              ),
                this.state.modeGen++,
                un(this);
            }),
            removeOverlay: Jn(function(t) {
              for (var e = this.state.overlays, r = 0; r < e.length; ++r) {
                var n = e[r].modeSpec;
                if (n == t || ('string' == typeof t && n.name == t))
                  return e.splice(r, 1), this.state.modeGen++, void un(this);
              }
            }),
            indentLine: Jn(function(t, e, r) {
              'string' != typeof e &&
                'number' != typeof e &&
                (e =
                  null == e
                    ? this.options.smartIndent
                      ? 'smart'
                      : 'prev'
                    : e
                    ? 'add'
                    : 'subtract'),
                Jt(this.doc, t) && La(this, t, e, r);
            }),
            indentSelection: Jn(function(t) {
              for (
                var e = this.doc.sel.ranges, r = -1, n = 0;
                n < e.length;
                n++
              ) {
                var i = e[n];
                if (i.empty())
                  i.head.line > r &&
                    (La(this, i.head.line, t, !0),
                    (r = i.head.line),
                    n == this.doc.sel.primIndex && _n(this));
                else {
                  var o = i.from(),
                    a = i.to(),
                    l = Math.max(r, o.line);
                  r = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                  for (var s = l; s < r; ++s) La(this, s, t);
                  var u = this.doc.sel.ranges;
                  0 == o.ch &&
                    e.length == u.length &&
                    u[n].from().ch > 0 &&
                    Ki(this.doc, n, new xi(o, u[n].to()), G);
                }
              }
            }),
            getTokenAt: function(t, e) {
              return ye(this, t, e);
            },
            getLineTokens: function(t, e) {
              return ye(this, te(t), e, !0);
            },
            getTokenTypeAt: function(t) {
              t = le(this.doc, t);
              var e,
                r = de(this, $t(this.doc, t.line)),
                n = 0,
                i = (r.length - 1) / 2,
                o = t.ch;
              if (0 == o) e = r[2];
              else
                for (;;) {
                  var a = (n + i) >> 1;
                  if ((a ? r[2 * a - 1] : 0) >= o) i = a;
                  else {
                    if (!(r[2 * a + 1] < o)) {
                      e = r[2 * a + 2];
                      break;
                    }
                    n = a + 1;
                  }
                }
              var l = e ? e.indexOf('overlay ') : -1;
              return l < 0 ? e : 0 == l ? null : e.slice(0, l - 1);
            },
            getModeAt: function(e) {
              var r = this.doc.mode;
              return r.innerMode
                ? t.innerMode(r, this.getTokenAt(e).state).mode
                : r;
            },
            getHelper: function(t, e) {
              return this.getHelpers(t, e)[0];
            },
            getHelpers: function(t, e) {
              var n = [];
              if (!r.hasOwnProperty(e)) return n;
              var i = r[e],
                o = this.getModeAt(t);
              if ('string' == typeof o[e]) i[o[e]] && n.push(i[o[e]]);
              else if (o[e])
                for (var a = 0; a < o[e].length; a++) {
                  var l = i[o[e][a]];
                  l && n.push(l);
                }
              else
                o.helperType && i[o.helperType]
                  ? n.push(i[o.helperType])
                  : i[o.name] && n.push(i[o.name]);
              for (var s = 0; s < i._global.length; s++) {
                var u = i._global[s];
                u.pred(o, this) && -1 == H(n, u.val) && n.push(u.val);
              }
              return n;
            },
            getStateAfter: function(t, e) {
              var r = this.doc;
              return he(
                this,
                (t = ae(r, null == t ? r.first + r.size - 1 : t)) + 1,
                e
              ).state;
            },
            cursorCoords: function(t, e) {
              var r = this.doc.sel.primary();
              return $r(
                this,
                null == t
                  ? r.head
                  : 'object' == typeof t
                  ? le(this.doc, t)
                  : t
                  ? r.from()
                  : r.to(),
                e || 'page'
              );
            },
            charCoords: function(t, e) {
              return Ur(this, le(this.doc, t), e || 'page');
            },
            coordsChar: function(t, e) {
              return Yr(this, (t = Vr(this, t, e || 'page')).left, t.top);
            },
            lineAtHeight: function(t, e) {
              return (
                (t = Vr(this, { top: t, left: 0 }, e || 'page').top),
                Zt(this.doc, t + this.display.viewOffset)
              );
            },
            heightAtLine: function(t, e, r) {
              var n,
                i = !1;
              if ('number' == typeof t) {
                var o = this.doc.first + this.doc.size - 1;
                t < this.doc.first
                  ? (t = this.doc.first)
                  : t > o && ((t = o), (i = !0)),
                  (n = $t(this.doc, t));
              } else n = t;
              return (
                Gr(this, n, { top: 0, left: 0 }, e || 'page', r || i).top +
                (i ? this.doc.height - Ge(n) : 0)
              );
            },
            defaultTextHeight: function() {
              return tn(this.display);
            },
            defaultCharWidth: function() {
              return en(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(t, e, r, n, i) {
              var o,
                a,
                l,
                s = this.display,
                u = (t = $r(this, le(this.doc, t))).bottom,
                c = t.left;
              if (
                ((e.style.position = 'absolute'),
                e.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(e),
                s.sizer.appendChild(e),
                'over' == n)
              )
                u = t.top;
              else if ('above' == n || 'near' == n) {
                var f = Math.max(s.wrapper.clientHeight, this.doc.height),
                  d = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                ('above' == n || t.bottom + e.offsetHeight > f) &&
                t.top > e.offsetHeight
                  ? (u = t.top - e.offsetHeight)
                  : t.bottom + e.offsetHeight <= f && (u = t.bottom),
                  c + e.offsetWidth > d && (c = d - e.offsetWidth);
              }
              (e.style.top = u + 'px'),
                (e.style.left = e.style.right = ''),
                'right' == i
                  ? ((c = s.sizer.clientWidth - e.offsetWidth),
                    (e.style.right = '0px'))
                  : ('left' == i
                      ? (c = 0)
                      : 'middle' == i &&
                        (c = (s.sizer.clientWidth - e.offsetWidth) / 2),
                    (e.style.left = c + 'px')),
                r &&
                  ((o = this),
                  (a = {
                    left: c,
                    top: u,
                    right: c + e.offsetWidth,
                    bottom: u + e.offsetHeight,
                  }),
                  null != (l = On(o, a)).scrollTop && Pn(o, l.scrollTop),
                  null != l.scrollLeft && Dn(o, l.scrollLeft));
            },
            triggerOnKeyDown: Jn(la),
            triggerOnKeyPress: Jn(ua),
            triggerOnKeyUp: sa,
            triggerOnMouseDown: Jn(ha),
            execCommand: function(t) {
              if (Jo.hasOwnProperty(t)) return Jo[t].call(null, this);
            },
            triggerElectric: Jn(function(t) {
              Ea(this, t);
            }),
            findPosH: function(t, e, r, n) {
              var i = 1;
              e < 0 && ((i = -1), (e = -e));
              for (
                var o = le(this.doc, t), a = 0;
                a < e && !(o = Da(this.doc, o, i, r, n)).hitSide;
                ++a
              );
              return o;
            },
            moveH: Jn(function(t, e) {
              var r = this;
              this.extendSelectionsBy(function(n) {
                return r.display.shift || r.doc.extend || n.empty()
                  ? Da(r.doc, n.head, t, e, r.options.rtlMoveVisually)
                  : t < 0
                  ? n.from()
                  : n.to();
              }, U);
            }),
            deleteH: Jn(function(t, e) {
              var r = this.doc.sel,
                n = this.doc;
              r.somethingSelected()
                ? n.replaceSelection('', null, '+delete')
                : qo(this, function(r) {
                    var i = Da(n, r.head, t, e, !1);
                    return t < 0
                      ? { from: i, to: r.head }
                      : { from: r.head, to: i };
                  });
            }),
            findPosV: function(t, e, r, n) {
              var i = 1,
                o = n;
              e < 0 && ((i = -1), (e = -e));
              for (var a = le(this.doc, t), l = 0; l < e; ++l) {
                var s = $r(this, a, 'div');
                if (
                  (null == o ? (o = s.left) : (s.left = o),
                  (a = Ia(this, s, i, r)).hitSide)
                )
                  break;
              }
              return a;
            },
            moveV: Jn(function(t, e) {
              var r = this,
                n = this.doc,
                i = [],
                o =
                  !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (
                (n.extendSelectionsBy(function(a) {
                  if (o) return t < 0 ? a.from() : a.to();
                  var l = $r(r, a.head, 'div');
                  null != a.goalColumn && (l.left = a.goalColumn),
                    i.push(l.left);
                  var s = Ia(r, l, t, e);
                  return (
                    'page' == e &&
                      a == n.sel.primary() &&
                      Mn(r, Ur(r, s, 'div').top - l.top),
                    s
                  );
                }, U),
                i.length)
              )
                for (var a = 0; a < n.sel.ranges.length; a++)
                  n.sel.ranges[a].goalColumn = i[a];
            }),
            findWordAt: function(t) {
              var e = this.doc,
                r = $t(e, t.line).text,
                n = t.ch,
                i = t.ch;
              if (r) {
                var o = this.getHelper(t, 'wordChars');
                ('before' != t.sticky && i != r.length) || !n ? ++i : --n;
                for (
                  var a = r.charAt(n),
                    l = et(a, o)
                      ? function(t) {
                          return et(t, o);
                        }
                      : /\s/.test(a)
                      ? function(t) {
                          return /\s/.test(t);
                        }
                      : function(t) {
                          return !/\s/.test(t) && !et(t);
                        };
                  n > 0 && l(r.charAt(n - 1));

                )
                  --n;
                for (; i < r.length && l(r.charAt(i)); ) ++i;
              }
              return new xi(te(t.line, n), te(t.line, i));
            },
            toggleOverwrite: function(t) {
              (null != t && t == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? P(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : L(this.display.cursorDiv, 'CodeMirror-overwrite'),
                vt(this, 'overwriteToggle', this, this.state.overwrite));
            },
            hasFocus: function() {
              return this.display.input.getField() == N();
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: Jn(function(t, e) {
              An(this, t, e);
            }),
            getScrollInfo: function() {
              var t = this.display.scroller;
              return {
                left: t.scrollLeft,
                top: t.scrollTop,
                height: t.scrollHeight - Tr(this) - this.display.barHeight,
                width: t.scrollWidth - Tr(this) - this.display.barWidth,
                clientHeight: Or(this),
                clientWidth: Lr(this),
              };
            },
            scrollIntoView: Jn(function(t, e) {
              null == t
                ? ((t = { from: this.doc.sel.primary().head, to: null }),
                  null == e && (e = this.options.cursorScrollMargin))
                : 'number' == typeof t
                ? (t = { from: te(t, 0), to: null })
                : null == t.from && (t = { from: t, to: null }),
                t.to || (t.to = t.from),
                (t.margin = e || 0),
                null != t.from.line
                  ? (function(t, e) {
                      En(t), (t.curOp.scrollToPos = e);
                    })(this, t)
                  : Nn(this, t.from, t.to, t.margin);
            }),
            setSize: Jn(function(t, e) {
              var r = this,
                n = function(t) {
                  return 'number' == typeof t || /^\d+$/.test(String(t))
                    ? t + 'px'
                    : t;
                };
              null != t && (this.display.wrapper.style.width = n(t)),
                null != e && (this.display.wrapper.style.height = n(e)),
                this.options.lineWrapping && Wr(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function(t) {
                if (t.widgets)
                  for (var e = 0; e < t.widgets.length; e++)
                    if (t.widgets[e].noHScroll) {
                      cn(r, i, 'widget');
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                vt(this, 'refresh', this);
            }),
            operation: function(t) {
              return Xn(this, t);
            },
            startOperation: function() {
              return Vn(this);
            },
            endOperation: function() {
              return Un(this);
            },
            refresh: Jn(function() {
              var t = this.display.cachedTextHeight;
              un(this),
                (this.curOp.forceUpdate = !0),
                zr(this),
                An(this, this.doc.scrollLeft, this.doc.scrollTop),
                ai(this.display),
                (null == t || Math.abs(t - tn(this.display)) > 0.5) && an(this),
                vt(this, 'refresh', this);
            }),
            swapDoc: Jn(function(t) {
              var e = this.doc;
              return (
                (e.cm = null),
                this.state.selectingText && this.state.selectingText(),
                Ni(this, t),
                zr(this),
                this.display.input.reset(),
                An(this, t.scrollLeft, t.scrollTop),
                (this.curOp.forceScroll = !0),
                lr(this, 'swapDoc', this, e),
                e
              );
            }),
            phrase: function(t) {
              var e = this.options.phrases;
              return e && Object.prototype.hasOwnProperty.call(e, t) ? e[t] : t;
            },
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
            (t.registerHelper = function(e, n, i) {
              r.hasOwnProperty(e) || (r[e] = t[e] = { _global: [] }),
                (r[e][n] = i);
            }),
            (t.registerGlobalHelper = function(e, n, i, o) {
              t.registerHelper(e, n, o), r[e]._global.push({ pred: i, val: o });
            });
        })(ka);
      var Ga = 'iter insert remove copy getEditor constructor'.split(' ');
      for (var Va in Mo.prototype)
        Mo.prototype.hasOwnProperty(Va) &&
          H(Ga, Va) < 0 &&
          (ka.prototype[Va] = (function(t) {
            return function() {
              return t.apply(this.doc, arguments);
            };
          })(Mo.prototype[Va]));
      return (
        bt(Mo),
        (ka.inputStyles = { textarea: Ba, contenteditable: Fa }),
        (ka.defineMode = function(t) {
          ka.defaults.mode || 'null' == t || (ka.defaults.mode = t),
            function(t, e) {
              arguments.length > 2 &&
                (e.dependencies = Array.prototype.slice.call(arguments, 2)),
                (It[t] = e);
            }.apply(this, arguments);
        }),
        (ka.defineMIME = function(t, e) {
          Ft[t] = e;
        }),
        ka.defineMode('null', function() {
          return {
            token: function(t) {
              return t.skipToEnd();
            },
          };
        }),
        ka.defineMIME('text/plain', 'null'),
        (ka.defineExtension = function(t, e) {
          ka.prototype[t] = e;
        }),
        (ka.defineDocExtension = function(t, e) {
          Mo.prototype[t] = e;
        }),
        (ka.fromTextArea = function(t, e) {
          if (
            (((e = e ? F(e) : {}).value = t.value),
            !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
            !e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
            null == e.autofocus)
          ) {
            var r = N();
            e.autofocus =
              r == t ||
              (null != t.getAttribute('autofocus') && r == document.body);
          }
          function n() {
            t.value = l.getValue();
          }
          var i;
          if (t.form && (dt(t.form, 'submit', n), !e.leaveSubmitMethodAlone)) {
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
          var l = ka(function(e) {
            return t.parentNode.insertBefore(e, t.nextSibling);
          }, e);
          return l;
        }),
        (function(t) {
          (t.off = pt),
            (t.on = dt),
            (t.wheelEventPixels = mi),
            (t.Doc = Mo),
            (t.splitLines = Nt),
            (t.countColumn = W),
            (t.findColumn = $),
            (t.isWordChar = tt),
            (t.Pass = B),
            (t.signal = vt),
            (t.Line = $e),
            (t.changeEnd = Ci),
            (t.scrollbarModel = Rn),
            (t.Pos = te),
            (t.cmpPos = ee),
            (t.modes = It),
            (t.mimeModes = Ft),
            (t.resolveMode = Wt),
            (t.getMode = zt),
            (t.modeExtensions = Ht),
            (t.extendMode = Rt),
            (t.copyState = Bt),
            (t.startState = Vt),
            (t.innerMode = Gt),
            (t.commands = Jo),
            (t.keyMap = Ho),
            (t.keyName = $o),
            (t.isModifierKey = Vo),
            (t.lookupKey = Go),
            (t.normalizeKeyMap = Bo),
            (t.StringStream = Ut),
            (t.SharedTextMarker = ko),
            (t.TextMarker = So),
            (t.LineWidget = bo),
            (t.e_preventDefault = xt),
            (t.e_stopPropagation = wt),
            (t.e_stop = Ct),
            (t.addClass = P),
            (t.contains = E),
            (t.rmClass = L),
            (t.keyNames = Io);
        })(ka),
        (ka.version = '5.47.0'),
        ka
      );
    })();
  },
  function(t, e, r) {
    'use strict';
    (function(t) {
      var n = r(64),
        i =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        o = i && 'object' == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i && n.a.process,
        l = (function() {
          try {
            var t = o && o.require && o.require('util').types;
            return t || (a && a.binding && a.binding('util'));
          } catch (t) {}
        })();
      e.a = l;
    }.call(this, r(86)(t)));
  },
  function(t, e, r) {
    t.exports =
      !r(17) &&
      !r(33)(function() {
        return (
          7 !=
          Object.defineProperty(r(90)('div'), 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(t, e, r) {
    var n = r(23),
      i = r(7).document,
      o = n(i) && n(i.createElement);
    t.exports = function(t) {
      return o ? i.createElement(t) : {};
    };
  },
  function(t, e, r) {
    e.f = r(8);
  },
  function(t, e, r) {
    var n = r(16),
      i = r(24),
      o = r(153)(!1),
      a = r(72)('IE_PROTO');
    t.exports = function(t, e) {
      var r,
        l = i(t),
        s = 0,
        u = [];
      for (r in l) r != a && n(l, r) && u.push(r);
      for (; e.length > s; ) n(l, (r = e[s++])) && (~o(u, r) || u.push(r));
      return u;
    };
  },
  function(t, e, r) {
    var n = r(94),
      i = Math.min;
    t.exports = function(t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  },
  function(t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function(t, e, r) {
    var n = r(92),
      i = r(73).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return n(t, i);
      };
  },
  function(t, e, r) {
    var n = r(74),
      i = r(50),
      o = r(24),
      a = r(66),
      l = r(16),
      s = r(89),
      u = Object.getOwnPropertyDescriptor;
    e.f = r(17)
      ? u
      : function(t, e) {
          if (((t = o(t)), (e = a(e, !0)), s))
            try {
              return u(t, e);
            } catch (t) {}
          if (l(t, e)) return i(!n.f.call(t, e), t[e]);
        };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { value: e, done: !!t };
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(69),
      i = r(48),
      o = r(27),
      a = r(21),
      l = r(16),
      s = r(35),
      u = r(163),
      c = r(52),
      f = r(164),
      d = r(8)('iterator'),
      h = !([].keys && 'next' in [].keys()),
      p = function() {
        return this;
      };
    t.exports = function(t, e, r, v, g, m, y) {
      u(r, e, v);
      var b,
        x,
        w,
        S = function(t) {
          if (!h && t in L) return L[t];
          switch (t) {
            case 'keys':
            case 'values':
              return function() {
                return new r(this, t);
              };
          }
          return function() {
            return new r(this, t);
          };
        },
        C = e + ' Iterator',
        k = 'values' == g,
        T = !1,
        L = t.prototype,
        O = L[d] || L['@@iterator'] || (g && L[g]),
        M = O || S(g),
        _ = g ? (k ? S('entries') : M) : void 0,
        A = ('Array' == e && L.entries) || O;
      if (
        (A &&
          (w = f(A.call(new t()))) !== Object.prototype &&
          (c(w, C, !0), n || l(w, d) || a(w, d, p)),
        k &&
          O &&
          'values' !== O.name &&
          ((T = !0),
          (M = function() {
            return O.call(this);
          })),
        (n && !y) || (!h && !T && L[d]) || a(L, d, M),
        (s[e] = M),
        (s[C] = p),
        g)
      )
        if (
          ((b = {
            values: k ? M : S('values'),
            keys: m ? M : S('keys'),
            entries: _,
          }),
          y)
        )
          for (x in b) x in L || o(L, x, b[x]);
        else i(i.P + i.F * (h || T), e, b);
      return b;
    };
  },
  function(t, e, r) {
    var n = r(27);
    t.exports = function(t, e, r) {
      for (var i in e) n(t, i, e[i], r);
      return t;
    };
  },
  function(t, e) {
    t.exports = function(t, e, r, n) {
      if (!(t instanceof e) || (void 0 !== n && n in t))
        throw TypeError(r + ': incorrect invocation!');
      return t;
    };
  },
  function(t, e, r) {
    var n = r(51),
      i = r(168),
      o = r(169),
      a = r(22),
      l = r(93),
      s = r(170),
      u = {},
      c = {};
    ((e = t.exports = function(t, e, r, f, d) {
      var h,
        p,
        v,
        g,
        m = d
          ? function() {
              return t;
            }
          : s(t),
        y = n(r, f, e ? 2 : 1),
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
  function(t, e) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (r = window);
    }
    t.exports = r;
  },
  function(t, e, r) {
    var n = r(1),
      i = r(38),
      o = ''.split;
    t.exports = n(function() {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function(t) {
          return 'String' == i(t) ? o.call(t, '') : Object(t);
        }
      : Object;
  },
  function(t, e, r) {
    var n = r(9),
      i = r(1),
      o = r(106);
    t.exports =
      !n &&
      !i(function() {
        return (
          7 !=
          Object.defineProperty(o('div'), 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(t, e, r) {
    var n = r(0),
      i = r(10),
      o = n.document,
      a = i(o) && i(o.createElement);
    t.exports = function(t) {
      return a ? o.createElement(t) : {};
    };
  },
  function(t, e, r) {
    var n = r(40);
    t.exports = n('native-function-to-string', Function.toString);
  },
  function(t, e, r) {
    var n = r(5),
      i = r(180),
      o = r(36),
      a = r(6);
    t.exports = function(t, e) {
      for (var r = i(e), l = a.f, s = o.f, u = 0; u < r.length; u++) {
        var c = r[u];
        n(t, c) || l(t, c, s(e, c));
      }
    };
  },
  function(t, e, r) {
    var n = r(5),
      i = r(25),
      o = r(181),
      a = r(42),
      l = o(!1);
    t.exports = function(t, e) {
      var r,
        o = i(t),
        s = 0,
        u = [];
      for (r in o) !n(a, r) && n(o, r) && u.push(r);
      for (; e.length > s; ) n(o, (r = e[s++])) && (~l(u, r) || u.push(r));
      return u;
    };
  },
  function(t, e, r) {
    var n = r(58),
      i = Math.max,
      o = Math.min;
    t.exports = function(t, e) {
      var r = n(t);
      return r < 0 ? i(r + e, 0) : o(r, e);
    };
  },
  function(t, e, r) {
    var n = r(1);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !n(function() {
        return !String(Symbol());
      });
  },
  function(t, e, r) {
    e.f = r(3);
  },
  function(t, e, r) {
    var n = r(114),
      i = r(5),
      o = r(112),
      a = r(6).f;
    t.exports = function(t) {
      var e = n.Symbol || (n.Symbol = {});
      i(e, t) || a(e, t, { value: o.f(t) });
    };
  },
  function(t, e, r) {
    t.exports = r(0);
  },
  function(t, e, r) {
    var n = r(3),
      i = r(43),
      o = r(12),
      a = n('unscopables'),
      l = Array.prototype;
    null == l[a] && o(l, a, i(null)),
      (t.exports = function(t) {
        l[a][t] = !0;
      });
  },
  function(t, e, r) {
    'use strict';
    var n,
      i,
      o,
      a = r(117),
      l = r(12),
      s = r(5),
      u = r(3),
      c = r(54),
      f = u('iterator'),
      d = !1;
    [].keys &&
      ('next' in (o = [].keys())
        ? (i = a(a(o))) !== Object.prototype && (n = i)
        : (d = !0)),
      null == n && (n = {}),
      c ||
        s(n, f) ||
        l(n, f, function() {
          return this;
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d });
  },
  function(t, e, r) {
    var n = r(5),
      i = r(14),
      o = r(55),
      a = r(187),
      l = o('IE_PROTO'),
      s = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function(t) {
          return (
            (t = i(t)),
            n(t, l)
              ? t[l]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? s
              : null
          );
        };
  },
  function(t, e, r) {
    var n = r(188);
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function() {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function(r, i) {
              return n(r, i), e ? t.call(r, i) : (r.__proto__ = i), r;
            };
          })()
        : void 0);
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t)
        throw TypeError(String(t) + ' is not a function');
      return t;
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(1);
    t.exports = function(t, e) {
      var r = [][t];
      return (
        !r ||
        !n(function() {
          r.call(
            null,
            e ||
              function() {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function(t, e, r) {
    var n = r(38),
      i = r(3)('toStringTag'),
      o =
        'Arguments' ==
        n(
          (function() {
            return arguments;
          })()
        );
    t.exports = function(t) {
      var e, r, a;
      return void 0 === t
        ? 'Undefined'
        : null === t
        ? 'Null'
        : 'string' ==
          typeof (r = (function(t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), i))
        ? r
        : o
        ? n(e)
        : 'Object' == (a = n(e)) && 'function' == typeof e.callee
        ? 'Arguments'
        : a;
    };
  },
  function(t, e, r) {
    var n = r(58),
      i = r(28);
    t.exports = function(t, e, r) {
      var o,
        a,
        l = String(i(t)),
        s = n(e),
        u = l.length;
      return s < 0 || s >= u
        ? r
          ? ''
          : void 0
        : (o = l.charCodeAt(s)) < 55296 ||
          o > 56319 ||
          s + 1 === u ||
          (a = l.charCodeAt(s + 1)) < 56320 ||
          a > 57343
        ? r
          ? l.charAt(s)
          : o
        : r
        ? l.slice(s, s + 2)
        : a - 56320 + ((o - 55296) << 10) + 65536;
    };
  },
  function(t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(39),
      i = r(6),
      o = r(37);
    t.exports = function(t, e, r) {
      var a = n(e);
      a in t ? i.f(t, a, o(0, r)) : (t[a] = r);
    };
  },
  function(t, e, r) {
    var n = r(10),
      i = r(61),
      o = r(3)('species');
    t.exports = function(t, e) {
      var r;
      return (
        i(t) &&
          ('function' != typeof (r = t.constructor) ||
          (r !== Array && !i(r.prototype))
            ? n(r) && null === (r = r[o]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(127);
    n({ target: 'Array', proto: !0, forced: [].forEach != i }, { forEach: i });
  },
  function(t, e, r) {
    'use strict';
    var n = r(84),
      i = r(120),
      o = n(0),
      a = i('forEach');
    t.exports = a
      ? function(t) {
          return o(this, t, arguments[1]);
        }
      : [].forEach;
  },
  function(t, e, r) {
    var n = r(2),
      i = r(1),
      o = r(25),
      a = r(36).f,
      l = r(9),
      s = i(function() {
        a(1);
      });
    n(
      { target: 'Object', stat: !0, forced: !l || s, sham: !l },
      {
        getOwnPropertyDescriptor: function(t, e) {
          return a(o(t), e);
        },
      }
    );
  },
  function(t, e, r) {
    var n = r(0),
      i = r(123),
      o = r(127),
      a = r(12);
    for (var l in i) {
      var s = n[l],
        u = s && s.prototype;
      if (u && u.forEach !== o)
        try {
          a(u, 'forEach', o);
        } catch (t) {
          u.forEach = o;
        }
    }
  },
  function(t, e, r) {
    var n = r(10),
      i = r(118);
    t.exports = function(t, e, r) {
      var o,
        a = e.constructor;
      return (
        a !== r &&
          'function' == typeof a &&
          (o = a.prototype) !== r.prototype &&
          n(o) &&
          i &&
          i(t, o),
        t
      );
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(196),
      i = r(198);
    t.exports = n(
      'Set',
      function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      i
    );
  },
  function(t, e, r) {
    var n = r(42),
      i = r(10),
      o = r(5),
      a = r(6).f,
      l = r(56),
      s = r(197),
      u = l('meta'),
      c = 0,
      f =
        Object.isExtensible ||
        function() {
          return !0;
        },
      d = function(t) {
        a(t, u, { value: { objectID: 'O' + ++c, weakData: {} } });
      },
      h = (t.exports = {
        REQUIRED: !1,
        fastKey: function(t, e) {
          if (!i(t))
            return 'symbol' == typeof t
              ? t
              : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, u)) {
            if (!f(t)) return 'F';
            if (!e) return 'E';
            d(t);
          }
          return t[u].objectID;
        },
        getWeakData: function(t, e) {
          if (!o(t, u)) {
            if (!f(t)) return !0;
            if (!e) return !1;
            d(t);
          }
          return t[u].weakData;
        },
        onFreeze: function(t) {
          return s && h.REQUIRED && f(t) && !o(t, u) && d(t), t;
        },
      });
    n[u] = !0;
  },
  function(t, e, r) {
    var n = r(11),
      i = r(134),
      o = r(20),
      a = r(62),
      l = r(135),
      s = r(136),
      u = {};
    (t.exports = function(t, e, r, c, f) {
      var d,
        h,
        p,
        v,
        g,
        m = a(e, r, c ? 2 : 1);
      if (f) d = t;
      else {
        if ('function' != typeof (h = l(t)))
          throw TypeError('Target is not iterable');
        if (i(h)) {
          for (p = 0, v = o(t.length); v > p; p++)
            if ((c ? m(n((g = t[p]))[0], g[1]) : m(t[p])) === u) return u;
          return;
        }
        d = h.call(t);
      }
      for (; !(g = d.next()).done; ) if (s(d, m, g.value, c) === u) return u;
    }).BREAK = u;
  },
  function(t, e, r) {
    var n = r(3),
      i = r(45),
      o = n('iterator'),
      a = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (i.Array === t || a[o] === t);
    };
  },
  function(t, e, r) {
    var n = r(121),
      i = r(45),
      o = r(3)('iterator');
    t.exports = function(t) {
      if (null != t) return t[o] || t['@@iterator'] || i[n(t)];
    };
  },
  function(t, e, r) {
    var n = r(11);
    t.exports = function(t, e, r, i) {
      try {
        return i ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && n(o.call(t)), e);
      }
    };
  },
  function(t, e) {
    t.exports = function(t, e, r) {
      if (!(t instanceof e))
        throw TypeError('Incorrect ' + (r ? r + ' ' : '') + 'invocation');
      return t;
    };
  },
  function(t, e, r) {
    var n = r(3)('iterator'),
      i = !1;
    try {
      var o = 0,
        a = {
          next: function() {
            return { done: !!o++ };
          },
          return: function() {
            i = !0;
          },
        };
      (a[n] = function() {
        return this;
      }),
        Array.from(a, function() {
          throw 2;
        });
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !i) return !1;
      var r = !1;
      try {
        var o = {};
        (o[n] = function() {
          return {
            next: function() {
              return { done: (r = !0) };
            },
          };
        }),
          t(o);
      } catch (t) {}
      return r;
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(84),
      o = r(82),
      a = i(1);
    n(
      { target: 'Array', proto: !0, forced: !o('map') },
      {
        map: function(t) {
          return a(this, t, arguments[1]);
        },
      }
    );
  },
  function(t, e, r) {
    'use strict';
    var n = r(11);
    t.exports = function() {
      var t = n(this),
        e = '';
      return (
        t.global && (e += 'g'),
        t.ignoreCase && (e += 'i'),
        t.multiline && (e += 'm'),
        t.unicode && (e += 'u'),
        t.sticky && (e += 'y'),
        e
      );
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(85);
    n({ target: 'RegExp', proto: !0, forced: /./.exec !== i }, { exec: i });
  },
  function(t, e, r) {
    'use strict';
    var n = r(12),
      i = r(13),
      o = r(1),
      a = r(3),
      l = r(85),
      s = a('species'),
      u = !o(function() {
        var t = /./;
        return (
          (t.exec = function() {
            var t = [];
            return (t.groups = { a: '7' }), t;
          }),
          '7' !== ''.replace(t, '$<a>')
        );
      }),
      c = !o(function() {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function() {
          return e.apply(this, arguments);
        };
        var r = 'ab'.split(t);
        return 2 !== r.length || 'a' !== r[0] || 'b' !== r[1];
      });
    t.exports = function(t, e, r, f) {
      var d = a(t),
        h = !o(function() {
          var e = {};
          return (
            (e[d] = function() {
              return 7;
            }),
            7 != ''[t](e)
          );
        }),
        p =
          h &&
          !o(function() {
            var e = !1,
              r = /a/;
            return (
              (r.exec = function() {
                return (e = !0), null;
              }),
              'split' === t &&
                ((r.constructor = {}),
                (r.constructor[s] = function() {
                  return r;
                })),
              r[d](''),
              !e
            );
          });
      if (!h || !p || ('replace' === t && !u) || ('split' === t && !c)) {
        var v = /./[d],
          g = r(d, ''[t], function(t, e, r, n, i) {
            return e.exec === l
              ? h && !i
                ? { done: !0, value: v.call(e, r, n) }
                : { done: !0, value: t.call(r, e, n) }
              : { done: !1 };
          }),
          m = g[0],
          y = g[1];
        i(String.prototype, t, m),
          i(
            RegExp.prototype,
            d,
            2 == e
              ? function(t, e) {
                  return y.call(t, this, e);
                }
              : function(t) {
                  return y.call(t, this);
                }
          ),
          f && n(RegExp.prototype[d], 'sham', !0);
      }
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(122);
    t.exports = function(t, e, r) {
      return e + (r ? n(t, e, !0).length : 1);
    };
  },
  function(t, e, r) {
    var n = r(38),
      i = r(85);
    t.exports = function(t, e) {
      var r = t.exec;
      if ('function' == typeof r) {
        var o = r.call(t, e);
        if ('object' != typeof o)
          throw TypeError(
            'RegExp exec method returned something other than an Object or null'
          );
        return o;
      }
      if ('RegExp' !== n(t))
        throw TypeError('RegExp#exec called on incompatible receiver');
      return i.call(t, e);
    };
  },
  function(t, e, r) {
    'use strict';
    e.a = function() {
      return !1;
    };
  },
  function(t, e, r) {
    'use strict';
    (function(t) {
      var n = r(4),
        i =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        o = i && 'object' == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i ? n.a.Buffer : void 0,
        l = a ? a.allocUnsafe : void 0;
      e.a = function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = l ? l(r) : new t.constructor(r);
        return t.copy(n), n;
      };
    }.call(this, r(86)(t)));
  },
  function(t) {
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
  function(t, e, r) {
    'use strict';
    var n = r(7),
      i = r(16),
      o = r(17),
      a = r(48),
      l = r(27),
      s = r(67).KEY,
      u = r(33),
      c = r(68),
      f = r(52),
      d = r(34),
      h = r(8),
      p = r(91),
      v = r(150),
      g = r(151),
      m = r(155),
      y = r(156),
      b = r(22),
      x = r(24),
      w = r(66),
      S = r(50),
      C = r(75),
      k = r(159),
      T = r(97),
      L = r(18),
      O = r(53),
      M = T.f,
      _ = L.f,
      A = k.f,
      E = n.Symbol,
      N = n.JSON,
      P = N && N.stringify,
      j = h('_hidden'),
      D = h('toPrimitive'),
      I = {}.propertyIsEnumerable,
      F = c('symbol-registry'),
      W = c('symbols'),
      z = c('op-symbols'),
      H = Object.prototype,
      R = 'function' == typeof E,
      B = n.QObject,
      G = !B || !B.prototype || !B.prototype.findChild,
      V =
        o &&
        u(function() {
          return (
            7 !=
            C(
              _({}, 'a', {
                get: function() {
                  return _(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function(t, e, r) {
              var n = M(H, e);
              n && delete H[e], _(t, e, r), n && t !== H && _(H, e, n);
            }
          : _,
      U = function(t) {
        var e = (W[t] = C(E.prototype));
        return (e._k = t), e;
      },
      $ =
        R && 'symbol' == typeof E.iterator
          ? function(t) {
              return 'symbol' == typeof t;
            }
          : function(t) {
              return t instanceof E;
            },
      K = function(t, e, r) {
        return (
          t === H && K(z, e, r),
          b(t),
          (e = w(e, !0)),
          b(r),
          i(W, e)
            ? (r.enumerable
                ? (i(t, j) && t[j][e] && (t[j][e] = !1),
                  (r = C(r, { enumerable: S(0, !1) })))
                : (i(t, j) || _(t, j, S(1, {})), (t[j][e] = !0)),
              V(t, e, r))
            : _(t, e, r)
        );
      },
      q = function(t, e) {
        b(t);
        for (var r, n = m((e = x(e))), i = 0, o = n.length; o > i; )
          K(t, (r = n[i++]), e[r]);
        return t;
      },
      Y = function(t) {
        var e = I.call(this, (t = w(t, !0)));
        return (
          !(this === H && i(W, t) && !i(z, t)) &&
          (!(e || !i(this, t) || !i(W, t) || (i(this, j) && this[j][t])) || e)
        );
      },
      X = function(t, e) {
        if (((t = x(t)), (e = w(e, !0)), t !== H || !i(W, e) || i(z, e))) {
          var r = M(t, e);
          return (
            !r || !i(W, e) || (i(t, j) && t[j][e]) || (r.enumerable = !0), r
          );
        }
      },
      Z = function(t) {
        for (var e, r = A(x(t)), n = [], o = 0; r.length > o; )
          i(W, (e = r[o++])) || e == j || e == s || n.push(e);
        return n;
      },
      J = function(t) {
        for (
          var e, r = t === H, n = A(r ? z : x(t)), o = [], a = 0;
          n.length > a;

        )
          !i(W, (e = n[a++])) || (r && !i(H, e)) || o.push(W[e]);
        return o;
      };
    R ||
      (l(
        (E = function() {
          if (this instanceof E)
            throw TypeError('Symbol is not a constructor!');
          var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(r) {
              this === H && e.call(z, r),
                i(this, j) && i(this[j], t) && (this[j][t] = !1),
                V(this, t, S(1, r));
            };
          return o && G && V(H, t, { configurable: !0, set: e }), U(t);
        }).prototype,
        'toString',
        function() {
          return this._k;
        }
      ),
      (T.f = X),
      (L.f = K),
      (r(96).f = k.f = Z),
      (r(74).f = Y),
      (r(95).f = J),
      o && !r(69) && l(H, 'propertyIsEnumerable', Y, !0),
      (p.f = function(t) {
        return U(h(t));
      })),
      a(a.G + a.W + a.F * !R, { Symbol: E });
    for (
      var Q = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
          ','
        ),
        tt = 0;
      Q.length > tt;

    )
      h(Q[tt++]);
    for (Q = O(h.store), tt = 0; Q.length > tt; ) v(Q[tt++]);
    a(a.S + a.F * !R, 'Symbol', {
      for: function(t) {
        return i(F, (t += '')) ? F[t] : (F[t] = E(t));
      },
      keyFor: function(t) {
        if ($(t)) return g(F, t);
        throw TypeError(t + ' is not a symbol!');
      },
      useSetter: function() {
        G = !0;
      },
      useSimple: function() {
        G = !1;
      },
    }),
      a(a.S + a.F * !R, 'Object', {
        create: function(t, e) {
          return void 0 === e ? C(t) : q(C(t), e);
        },
        defineProperty: K,
        defineProperties: q,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: J,
      }),
      N &&
        a(
          a.S +
            a.F *
              (!R ||
                u(function() {
                  var t = E();
                  return (
                    '[null]' != P([t]) ||
                    '{}' != P({ a: t }) ||
                    '{}' != P(Object(t))
                  );
                })),
          'JSON',
          {
            stringify: function(t) {
              if (void 0 !== t && !$(t)) {
                for (var e, r, n = [t], i = 1; arguments.length > i; )
                  n.push(arguments[i++]);
                return (
                  'function' == typeof (e = n[1]) && (r = e),
                  (!r && y(e)) ||
                    (e = function(t, e) {
                      if ((r && (e = r.call(this, t, e)), !$(e))) return e;
                    }),
                  (n[1] = e),
                  P.apply(N, n)
                );
              }
            },
          }
        ),
      E.prototype[D] || r(21)(E.prototype, D, E.prototype.valueOf),
      f(E, 'Symbol'),
      f(Math, 'Math', !0),
      f(n.JSON, 'JSON', !0);
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t) throw TypeError(t + ' is not a function!');
      return t;
    };
  },
  function(t, e, r) {
    var n = r(7),
      i = r(49),
      o = r(69),
      a = r(91),
      l = r(18).f;
    t.exports = function(t) {
      var e = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
      '_' == t.charAt(0) || t in e || l(e, t, { value: a.f(t) });
    };
  },
  function(t, e, r) {
    var n = r(53),
      i = r(24);
    t.exports = function(t, e) {
      for (var r, o = i(t), a = n(o), l = a.length, s = 0; l > s; )
        if (o[(r = a[s++])] === e) return r;
    };
  },
  function(t, e, r) {
    var n = r(70);
    t.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return 'String' == n(t) ? t.split('') : Object(t);
        };
  },
  function(t, e, r) {
    var n = r(24),
      i = r(93),
      o = r(154);
    t.exports = function(t) {
      return function(e, r, a) {
        var l,
          s = n(e),
          u = i(s.length),
          c = o(a, u);
        if (t && r != r) {
          for (; u > c; ) if ((l = s[c++]) != l) return !0;
        } else
          for (; u > c; c++)
            if ((t || c in s) && s[c] === r) return t || c || 0;
        return !t && -1;
      };
    };
  },
  function(t, e, r) {
    var n = r(94),
      i = Math.max,
      o = Math.min;
    t.exports = function(t, e) {
      return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  },
  function(t, e, r) {
    var n = r(53),
      i = r(95),
      o = r(74);
    t.exports = function(t) {
      var e = n(t),
        r = i.f;
      if (r)
        for (var a, l = r(t), s = o.f, u = 0; l.length > u; )
          s.call(t, (a = l[u++])) && e.push(a);
      return e;
    };
  },
  function(t, e, r) {
    var n = r(70);
    t.exports =
      Array.isArray ||
      function(t) {
        return 'Array' == n(t);
      };
  },
  function(t, e, r) {
    var n = r(18),
      i = r(22),
      o = r(53);
    t.exports = r(17)
      ? Object.defineProperties
      : function(t, e) {
          i(t);
          for (var r, a = o(e), l = a.length, s = 0; l > s; )
            n.f(t, (r = a[s++]), e[r]);
          return t;
        };
  },
  function(t, e, r) {
    t.exports = r(7).document && document.documentElement;
  },
  function(t, e, r) {
    var n = r(24),
      i = r(96).f,
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
        : i(n(t));
    };
  },
  function(t, e, r) {
    for (
      var n = r(161),
        i = r(27),
        o = r(7),
        a = r(21),
        l = r(35),
        s = r(8),
        u = s('iterator'),
        c = s('toStringTag'),
        f = l.Array,
        d = [
          'NodeList',
          'DOMTokenList',
          'MediaList',
          'StyleSheetList',
          'CSSRuleList',
        ],
        h = 0;
      h < 5;
      h++
    ) {
      var p,
        v = d[h],
        g = o[v],
        m = g && g.prototype;
      if (m)
        for (p in (m[u] || a(m, u, f), m[c] || a(m, c, v), (l[v] = f), n))
          m[p] || i(m, p, n[p], !0);
    }
  },
  function(t, e, r) {
    'use strict';
    var n = r(162),
      i = r(98),
      o = r(35),
      a = r(24);
    (t.exports = r(99)(
      Array,
      'Array',
      function(t, e) {
        (this._t = a(t)), (this._i = 0), (this._k = e);
      },
      function() {
        var t = this._t,
          e = this._k,
          r = this._i++;
        return !t || r >= t.length
          ? ((this._t = void 0), i(1))
          : i(0, 'keys' == e ? r : 'values' == e ? t[r] : [r, t[r]]);
      },
      'values'
    )),
      (o.Arguments = o.Array),
      n('keys'),
      n('values'),
      n('entries');
  },
  function(t, e, r) {
    var n = r(8)('unscopables'),
      i = Array.prototype;
    null == i[n] && r(21)(i, n, {}),
      (t.exports = function(t) {
        i[n][t] = !0;
      });
  },
  function(t, e, r) {
    'use strict';
    var n = r(75),
      i = r(50),
      o = r(52),
      a = {};
    r(21)(a, r(8)('iterator'), function() {
      return this;
    }),
      (t.exports = function(t, e, r) {
        (t.prototype = n(a, { next: i(1, r) })), o(t, e + ' Iterator');
      });
  },
  function(t, e, r) {
    var n = r(16),
      i = r(165),
      o = r(72)('IE_PROTO'),
      a = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function(t) {
        return (
          (t = i(t)),
          n(t, o)
            ? t[o]
            : 'function' == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? a
            : null
        );
      };
  },
  function(t, e, r) {
    var n = r(71);
    t.exports = function(t) {
      return Object(n(t));
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(167);
    t.exports = r(173)(
      'Set',
      function(t) {
        return function() {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(t) {
          return n.def(this, (t = 0 === t ? 0 : t), t);
        },
      },
      n
    );
  },
  function(t, e, r) {
    'use strict';
    var n = r(18).f,
      i = r(75),
      o = r(100),
      a = r(51),
      l = r(101),
      s = r(71),
      u = r(102),
      c = r(99),
      f = r(98),
      d = r(172),
      h = r(17),
      p = r(67).fastKey,
      v = h ? '_s' : 'size',
      g = function(t, e) {
        var r,
          n = p(e);
        if ('F' !== n) return t._i[n];
        for (r = t._f; r; r = r.n) if (r.k == e) return r;
      };
    t.exports = {
      getConstructor: function(t, e, r, c) {
        var f = t(function(t, n) {
          l(t, f, e, '_i'),
            (t._i = i(null)),
            (t._f = void 0),
            (t._l = void 0),
            (t[v] = 0),
            null != n && u(n, r, t[c], t);
        });
        return (
          o(f.prototype, {
            clear: function() {
              for (var t = this._i, e = this._f; e; e = e.n)
                (e.r = !0), e.p && (e.p = e.p.n = void 0), delete t[e.i];
              (this._f = this._l = void 0), (this[v] = 0);
            },
            delete: function(t) {
              var e = g(this, t);
              if (e) {
                var r = e.n,
                  n = e.p;
                delete this._i[e.i],
                  (e.r = !0),
                  n && (n.n = r),
                  r && (r.p = n),
                  this._f == e && (this._f = r),
                  this._l == e && (this._l = n),
                  this[v]--;
              }
              return !!e;
            },
            forEach: function(t) {
              l(this, f, 'forEach');
              for (
                var e,
                  r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (e = e ? e.n : this._f);

              )
                for (r(e.v, e.k, this); e && e.r; ) e = e.p;
            },
            has: function(t) {
              return !!g(this, t);
            },
          }),
          h &&
            n(f.prototype, 'size', {
              get: function() {
                return s(this[v]);
              },
            }),
          f
        );
      },
      def: function(t, e, r) {
        var n,
          i,
          o = g(t, e);
        return (
          o
            ? (o.v = r)
            : ((t._l = o = {
                i: (i = p(e, !0)),
                k: e,
                v: r,
                p: (n = t._l),
                n: void 0,
                r: !1,
              }),
              t._f || (t._f = o),
              n && (n.n = o),
              t[v]++,
              'F' !== i && (t._i[i] = o)),
          t
        );
      },
      getEntry: g,
      setStrong: function(t, e, r) {
        c(
          t,
          e,
          function(t, e) {
            (this._t = t), (this._k = e), (this._l = void 0);
          },
          function() {
            for (var t = this._k, e = this._l; e && e.r; ) e = e.p;
            return this._t && (this._l = e = e ? e.n : this._t._f)
              ? f(0, 'keys' == t ? e.k : 'values' == t ? e.v : [e.k, e.v])
              : ((this._t = void 0), f(1));
          },
          r ? 'entries' : 'values',
          !r,
          !0
        ),
          d(e);
      },
    };
  },
  function(t, e, r) {
    var n = r(22);
    t.exports = function(t, e, r, i) {
      try {
        return i ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && n(o.call(t)), e);
      }
    };
  },
  function(t, e, r) {
    var n = r(35),
      i = r(8)('iterator'),
      o = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (n.Array === t || o[i] === t);
    };
  },
  function(t, e, r) {
    var n = r(171),
      i = r(8)('iterator'),
      o = r(35);
    t.exports = r(49).getIteratorMethod = function(t) {
      if (null != t) return t[i] || t['@@iterator'] || o[n(t)];
    };
  },
  function(t, e, r) {
    var n = r(70),
      i = r(8)('toStringTag'),
      o =
        'Arguments' ==
        n(
          (function() {
            return arguments;
          })()
        );
    t.exports = function(t) {
      var e, r, a;
      return void 0 === t
        ? 'Undefined'
        : null === t
        ? 'Null'
        : 'string' ==
          typeof (r = (function(t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), i))
        ? r
        : o
        ? n(e)
        : 'Object' == (a = n(e)) && 'function' == typeof e.callee
        ? 'Arguments'
        : a;
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(7),
      i = r(18),
      o = r(17),
      a = r(8)('species');
    t.exports = function(t) {
      var e = n[t];
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
  function(t, e, r) {
    'use strict';
    var n = r(7),
      i = r(48),
      o = r(27),
      a = r(100),
      l = r(67),
      s = r(102),
      u = r(101),
      c = r(23),
      f = r(33),
      d = r(174),
      h = r(52),
      p = r(175);
    t.exports = function(t, e, r, v, g, m) {
      var y = n[t],
        b = y,
        x = g ? 'set' : 'add',
        w = b && b.prototype,
        S = {},
        C = function(t) {
          var e = w[t];
          o(
            w,
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
                  return m && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : 'add' == t
              ? function(t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : function(t, r) {
                  return e.call(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        'function' == typeof b &&
        (m ||
          (w.forEach &&
            !f(function() {
              new b().entries().next();
            })))
      ) {
        var k = new b(),
          T = k[x](m ? {} : -0, 1) != k,
          L = f(function() {
            k.has(1);
          }),
          O = d(function(t) {
            new b(t);
          }),
          M =
            !m &&
            f(function() {
              for (var t = new b(), e = 5; e--; ) t[x](e, e);
              return !t.has(-0);
            });
        O ||
          (((b = e(function(e, r) {
            u(e, b, t);
            var n = p(new y(), e, b);
            return null != r && s(r, g, n[x], n), n;
          })).prototype = w),
          (w.constructor = b)),
          (L || M) && (C('delete'), C('has'), g && C('get')),
          (M || T) && C(x),
          m && w.clear && delete w.clear;
      } else
        (b = v.getConstructor(e, t, g, x)), a(b.prototype, r), (l.NEED = !0);
      return (
        h(b, t),
        (S[t] = b),
        i(i.G + i.W + i.F * (b != y), S),
        m || v.setStrong(b, t, g),
        b
      );
    };
  },
  function(t, e, r) {
    var n = r(8)('iterator'),
      i = !1;
    try {
      var o = [7][n]();
      (o.return = function() {
        i = !0;
      }),
        Array.from(o, function() {
          throw 2;
        });
    } catch (t) {}
    t.exports = function(t, e) {
      if (!e && !i) return !1;
      var r = !1;
      try {
        var o = [7],
          a = o[n]();
        (a.next = function() {
          return { done: (r = !0) };
        }),
          (o[n] = function() {
            return a;
          }),
          t(o);
      } catch (t) {}
      return r;
    };
  },
  function(t, e, r) {
    var n = r(23),
      i = r(176).set;
    t.exports = function(t, e, r) {
      var o,
        a = e.constructor;
      return (
        a !== r &&
          'function' == typeof a &&
          (o = a.prototype) !== r.prototype &&
          n(o) &&
          i &&
          i(t, o),
        t
      );
    };
  },
  function(t, e, r) {
    var n = r(23),
      i = r(22),
      o = function(t, e) {
        if ((i(t), !n(e) && null !== e))
          throw TypeError(e + ": can't set as prototype!");
      };
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function(t, e, n) {
              try {
                (n = r(51)(
                  Function.call,
                  r(97).f(Object.prototype, '__proto__').set,
                  2
                ))(t, []),
                  (e = !(t instanceof Array));
              } catch (t) {
                e = !0;
              }
              return function(t, r) {
                return o(t, r), e ? (t.__proto__ = r) : n(t, r), t;
              };
            })({}, !1)
          : void 0),
      check: o,
    };
  },
  function(t, e, r) {
    var n = r(48),
      i = r(7).isFinite;
    n(n.S, 'Number', {
      isFinite: function(t) {
        return 'number' == typeof t && i(t);
      },
    });
  },
  function(t, e, r) {
    !(function(t) {
      'use strict';
      t.defineMode('javascript', function(e, r) {
        var n,
          i,
          o = e.indentUnit,
          a = r.statementIndent,
          l = r.jsonld,
          s = r.json || l,
          u = r.typescript,
          c = r.wordCharacters || /[\w$\xa1-\uffff]/,
          f = (function() {
            function t(t) {
              return { type: t, style: 'keyword' };
            }
            var e = t('keyword a'),
              r = t('keyword b'),
              n = t('keyword c'),
              i = t('keyword d'),
              o = t('operator'),
              a = { type: 'atom', style: 'atom' };
            return {
              if: t('if'),
              while: e,
              with: e,
              else: r,
              do: r,
              try: r,
              finally: r,
              return: i,
              break: i,
              continue: i,
              new: t('new'),
              delete: n,
              void: n,
              throw: n,
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
              yield: n,
              export: t('export'),
              import: t('import'),
              extends: n,
              await: n,
            };
          })(),
          d = /[+\-*&%=<>!?|~^@]/,
          h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
        function p(t, e, r) {
          return (n = t), (i = r), e;
        }
        function v(t, e) {
          var r,
            n = t.next();
          if ('"' == n || "'" == n)
            return (
              (e.tokenize = ((r = n),
              function(t, e) {
                var n,
                  i = !1;
                if (l && '@' == t.peek() && t.match(h))
                  return (e.tokenize = v), p('jsonld-keyword', 'meta');
                for (; null != (n = t.next()) && (n != r || i); )
                  i = !i && '\\' == n;
                return i || (e.tokenize = v), p('string', 'string');
              })),
              e.tokenize(t, e)
            );
          if ('.' == n && t.match(/^\d+(?:[eE][+\-]?\d+)?/))
            return p('number', 'number');
          if ('.' == n && t.match('..')) return p('spread', 'meta');
          if (/[\[\]{}\(\),;\:\.]/.test(n)) return p(n);
          if ('=' == n && t.eat('>')) return p('=>', 'operator');
          if ('0' == n && t.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i))
            return p('number', 'number');
          if (/\d/.test(n))
            return (
              t.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/),
              p('number', 'number')
            );
          if ('/' == n)
            return t.eat('*')
              ? ((e.tokenize = g), g(t, e))
              : t.eat('/')
              ? (t.skipToEnd(), p('comment', 'comment'))
              : Kt(t, e, 1)
              ? ((function(t) {
                  for (var e, r = !1, n = !1; null != (e = t.next()); ) {
                    if (!r) {
                      if ('/' == e && !n) return;
                      '[' == e ? (n = !0) : n && ']' == e && (n = !1);
                    }
                    r = !r && '\\' == e;
                  }
                })(t),
                t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                p('regexp', 'string-2'))
              : (t.eat('='), p('operator', 'operator', t.current()));
          if ('`' == n) return (e.tokenize = m), m(t, e);
          if ('#' == n) return t.skipToEnd(), p('error', 'error');
          if (d.test(n))
            return (
              ('>' == n && e.lexical && '>' == e.lexical.type) ||
                (t.eat('=')
                  ? ('!' != n && '=' != n) || t.eat('=')
                  : /[<>*+\-]/.test(n) && (t.eat(n), '>' == n && t.eat(n))),
              p('operator', 'operator', t.current())
            );
          if (c.test(n)) {
            t.eatWhile(c);
            var i = t.current();
            if ('.' != e.lastType) {
              if (f.propertyIsEnumerable(i)) {
                var o = f[i];
                return p(o.type, o.style, i);
              }
              if ('async' == i && t.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1))
                return p('async', 'keyword', i);
            }
            return p('variable', 'variable', i);
          }
        }
        function g(t, e) {
          for (var r, n = !1; (r = t.next()); ) {
            if ('/' == r && n) {
              e.tokenize = v;
              break;
            }
            n = '*' == r;
          }
          return p('comment', 'comment');
        }
        function m(t, e) {
          for (var r, n = !1; null != (r = t.next()); ) {
            if (!n && ('`' == r || ('$' == r && t.eat('{')))) {
              e.tokenize = v;
              break;
            }
            n = !n && '\\' == r;
          }
          return p('quasi', 'string-2', t.current());
        }
        var y = '([{}])';
        function b(t, e) {
          e.fatArrowAt && (e.fatArrowAt = null);
          var r = t.string.indexOf('=>', t.start);
          if (!(r < 0)) {
            if (u) {
              var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                t.string.slice(t.start, r)
              );
              n && (r = n.index);
            }
            for (var i = 0, o = !1, a = r - 1; a >= 0; --a) {
              var l = t.string.charAt(a),
                s = y.indexOf(l);
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
              else if (c.test(l)) o = !0;
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
        var x = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          'jsonld-keyword': !0,
        };
        function w(t, e, r, n, i, o) {
          (this.indented = t),
            (this.column = e),
            (this.type = r),
            (this.prev = i),
            (this.info = o),
            null != n && (this.align = n);
        }
        function S(t, e) {
          for (var r = t.localVars; r; r = r.next) if (r.name == e) return !0;
          for (var n = t.context; n; n = n.prev)
            for (var r = n.vars; r; r = r.next) if (r.name == e) return !0;
        }
        var C = { state: null, column: null, marked: null, cc: null };
        function k() {
          for (var t = arguments.length - 1; t >= 0; t--)
            C.cc.push(arguments[t]);
        }
        function T() {
          return k.apply(null, arguments), !0;
        }
        function L(t, e) {
          for (var r = e; r; r = r.next) if (r.name == t) return !0;
          return !1;
        }
        function O(t) {
          var e = C.state;
          if (((C.marked = 'def'), e.context))
            if ('var' == e.lexical.info && e.context && e.context.block) {
              var n = (function t(e, r) {
                if (r) {
                  if (r.block) {
                    var n = t(e, r.prev);
                    return n ? (n == r.prev ? r : new _(n, r.vars, !0)) : null;
                  }
                  return L(e, r.vars) ? r : new _(r.prev, new A(e, r.vars), !1);
                }
                return null;
              })(t, e.context);
              if (null != n) return void (e.context = n);
            } else if (!L(t, e.localVars))
              return void (e.localVars = new A(t, e.localVars));
          r.globalVars &&
            !L(t, e.globalVars) &&
            (e.globalVars = new A(t, e.globalVars));
        }
        function M(t) {
          return (
            'public' == t ||
            'private' == t ||
            'protected' == t ||
            'abstract' == t ||
            'readonly' == t
          );
        }
        function _(t, e, r) {
          (this.prev = t), (this.vars = e), (this.block = r);
        }
        function A(t, e) {
          (this.name = t), (this.next = e);
        }
        var E = new A('this', new A('arguments', null));
        function N() {
          (C.state.context = new _(C.state.context, C.state.localVars, !1)),
            (C.state.localVars = E);
        }
        function P() {
          (C.state.context = new _(C.state.context, C.state.localVars, !0)),
            (C.state.localVars = null);
        }
        function j() {
          (C.state.localVars = C.state.context.vars),
            (C.state.context = C.state.context.prev);
        }
        function D(t, e) {
          var r = function() {
            var r = C.state,
              n = r.indented;
            if ('stat' == r.lexical.type) n = r.lexical.indented;
            else
              for (var i = r.lexical; i && ')' == i.type && i.align; i = i.prev)
                n = i.indented;
            r.lexical = new w(n, C.stream.column(), t, null, r.lexical, e);
          };
          return (r.lex = !0), r;
        }
        function I() {
          var t = C.state;
          t.lexical.prev &&
            (')' == t.lexical.type && (t.indented = t.lexical.indented),
            (t.lexical = t.lexical.prev));
        }
        function F(t) {
          return function e(r) {
            return r == t
              ? T()
              : ';' == t || '}' == r || ')' == r || ']' == r
              ? k()
              : T(e);
          };
        }
        function W(t, e) {
          return 'var' == t
            ? T(D('vardef', e), yt, F(';'), I)
            : 'keyword a' == t
            ? T(D('form'), B, W, I)
            : 'keyword b' == t
            ? T(D('form'), W, I)
            : 'keyword d' == t
            ? C.stream.match(/^\s*$/, !1)
              ? T()
              : T(D('stat'), V, F(';'), I)
            : 'debugger' == t
            ? T(F(';'))
            : '{' == t
            ? T(D('}'), P, at, I, j)
            : ';' == t
            ? T()
            : 'if' == t
            ? ('else' == C.state.lexical.info &&
                C.state.cc[C.state.cc.length - 1] == I &&
                C.state.cc.pop()(),
              T(D('form'), B, W, I, kt))
            : 'function' == t
            ? T(Mt)
            : 'for' == t
            ? T(D('form'), Tt, W, I)
            : 'class' == t || (u && 'interface' == e)
            ? ((C.marked = 'keyword'),
              T(D('form', 'class' == t ? t : e), Pt, I))
            : 'variable' == t
            ? u && 'declare' == e
              ? ((C.marked = 'keyword'), T(W))
              : u &&
                ('module' == e || 'enum' == e || 'type' == e) &&
                C.stream.match(/^\s*\w/, !1)
              ? ((C.marked = 'keyword'),
                'enum' == e
                  ? T(Ut)
                  : 'type' == e
                  ? T(At, F('operator'), ct, F(';'))
                  : T(D('form'), bt, F('{'), D('}'), at, I, I))
              : u && 'namespace' == e
              ? ((C.marked = 'keyword'), T(D('form'), H, W, I))
              : u && 'abstract' == e
              ? ((C.marked = 'keyword'), T(W))
              : T(D('stat'), Q)
            : 'switch' == t
            ? T(D('form'), B, F('{'), D('}', 'switch'), P, at, I, I, j)
            : 'case' == t
            ? T(H, F(':'))
            : 'default' == t
            ? T(F(':'))
            : 'catch' == t
            ? T(D('form'), N, z, W, I, j)
            : 'export' == t
            ? T(D('stat'), Ft, I)
            : 'import' == t
            ? T(D('stat'), zt, I)
            : 'async' == t
            ? T(W)
            : '@' == e
            ? T(H, W)
            : k(D('stat'), H, F(';'), I);
        }
        function z(t) {
          if ('(' == t) return T(Et, F(')'));
        }
        function H(t, e) {
          return G(t, e, !1);
        }
        function R(t, e) {
          return G(t, e, !0);
        }
        function B(t) {
          return '(' != t ? k() : T(D(')'), H, F(')'), I);
        }
        function G(t, e, r) {
          if (C.state.fatArrowAt == C.stream.start) {
            var n = r ? X : Y;
            if ('(' == t) return T(N, D(')'), it(Et, ')'), I, F('=>'), n, j);
            if ('variable' == t) return k(N, bt, F('=>'), n, j);
          }
          var i = r ? $ : U;
          return x.hasOwnProperty(t)
            ? T(i)
            : 'function' == t
            ? T(Mt, i)
            : 'class' == t || (u && 'interface' == e)
            ? ((C.marked = 'keyword'), T(D('form'), Nt, I))
            : 'keyword c' == t || 'async' == t
            ? T(r ? R : H)
            : '(' == t
            ? T(D(')'), V, F(')'), I, i)
            : 'operator' == t || 'spread' == t
            ? T(r ? R : H)
            : '[' == t
            ? T(D(']'), Vt, I, i)
            : '{' == t
            ? ot(et, '}', null, i)
            : 'quasi' == t
            ? k(K, i)
            : 'new' == t
            ? T(
                (function(t) {
                  return function(e) {
                    return '.' == e
                      ? T(t ? J : Z)
                      : 'variable' == e && u
                      ? T(vt, t ? $ : U)
                      : k(t ? R : H);
                  };
                })(r)
              )
            : 'import' == t
            ? T(H)
            : T();
        }
        function V(t) {
          return t.match(/[;\}\)\],]/) ? k() : k(H);
        }
        function U(t, e) {
          return ',' == t ? T(H) : $(t, e, !1);
        }
        function $(t, e, r) {
          var n = 0 == r ? U : $,
            i = 0 == r ? H : R;
          return '=>' == t
            ? T(N, r ? X : Y, j)
            : 'operator' == t
            ? /\+\+|--/.test(e) || (u && '!' == e)
              ? T(n)
              : u && '<' == e && C.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1)
              ? T(D('>'), it(ct, '>'), I, n)
              : '?' == e
              ? T(H, F(':'), i)
              : T(i)
            : 'quasi' == t
            ? k(K, n)
            : ';' != t
            ? '(' == t
              ? ot(R, ')', 'call', n)
              : '.' == t
              ? T(tt, n)
              : '[' == t
              ? T(D(']'), V, F(']'), I, n)
              : u && 'as' == e
              ? ((C.marked = 'keyword'), T(ct, n))
              : 'regexp' == t
              ? ((C.state.lastType = C.marked = 'operator'),
                C.stream.backUp(C.stream.pos - C.stream.start - 1),
                T(i))
              : void 0
            : void 0;
        }
        function K(t, e) {
          return 'quasi' != t
            ? k()
            : '${' != e.slice(e.length - 2)
            ? T(K)
            : T(H, q);
        }
        function q(t) {
          if ('}' == t)
            return (C.marked = 'string-2'), (C.state.tokenize = m), T(K);
        }
        function Y(t) {
          return b(C.stream, C.state), k('{' == t ? W : H);
        }
        function X(t) {
          return b(C.stream, C.state), k('{' == t ? W : R);
        }
        function Z(t, e) {
          if ('target' == e) return (C.marked = 'keyword'), T(U);
        }
        function J(t, e) {
          if ('target' == e) return (C.marked = 'keyword'), T($);
        }
        function Q(t) {
          return ':' == t ? T(I, W) : k(U, F(';'), I);
        }
        function tt(t) {
          if ('variable' == t) return (C.marked = 'property'), T();
        }
        function et(t, e) {
          return 'async' == t
            ? ((C.marked = 'property'), T(et))
            : 'variable' == t || 'keyword' == C.style
            ? ((C.marked = 'property'),
              'get' == e || 'set' == e
                ? T(rt)
                : (u &&
                    C.state.fatArrowAt == C.stream.start &&
                    (r = C.stream.match(/^\s*:\s*/, !1)) &&
                    (C.state.fatArrowAt = C.stream.pos + r[0].length),
                  T(nt)))
            : 'number' == t || 'string' == t
            ? ((C.marked = l ? 'property' : C.style + ' property'), T(nt))
            : 'jsonld-keyword' == t
            ? T(nt)
            : u && M(e)
            ? ((C.marked = 'keyword'), T(et))
            : '[' == t
            ? T(H, lt, F(']'), nt)
            : 'spread' == t
            ? T(R, nt)
            : '*' == e
            ? ((C.marked = 'keyword'), T(et))
            : ':' == t
            ? k(nt)
            : void 0;
          var r;
        }
        function rt(t) {
          return 'variable' != t ? k(nt) : ((C.marked = 'property'), T(Mt));
        }
        function nt(t) {
          return ':' == t ? T(R) : '(' == t ? k(Mt) : void 0;
        }
        function it(t, e, r) {
          function n(i, o) {
            if (r ? r.indexOf(i) > -1 : ',' == i) {
              var a = C.state.lexical;
              return (
                'call' == a.info && (a.pos = (a.pos || 0) + 1),
                T(function(r, n) {
                  return r == e || n == e ? k() : k(t);
                }, n)
              );
            }
            return i == e || o == e
              ? T()
              : r && r.indexOf(';') > -1
              ? k(t)
              : T(F(e));
          }
          return function(r, i) {
            return r == e || i == e ? T() : k(t, n);
          };
        }
        function ot(t, e, r) {
          for (var n = 3; n < arguments.length; n++) C.cc.push(arguments[n]);
          return T(D(e, r), it(t, e), I);
        }
        function at(t) {
          return '}' == t ? T() : k(W, at);
        }
        function lt(t, e) {
          if (u) {
            if (':' == t || 'in' == e) return T(ct);
            if ('?' == e) return T(lt);
          }
        }
        function st(t) {
          if (u && ':' == t)
            return C.stream.match(/^\s*\w+\s+is\b/, !1) ? T(H, ut, ct) : T(ct);
        }
        function ut(t, e) {
          if ('is' == e) return (C.marked = 'keyword'), T();
        }
        function ct(t, e) {
          return 'keyof' == e || 'typeof' == e || 'infer' == e
            ? ((C.marked = 'keyword'), T('typeof' == e ? R : ct))
            : 'variable' == t || 'void' == e
            ? ((C.marked = 'type'), T(pt))
            : '|' == e || '&' == e
            ? T(ct)
            : 'string' == t || 'number' == t || 'atom' == t
            ? T(pt)
            : '[' == t
            ? T(D(']'), it(ct, ']', ','), I, pt)
            : '{' == t
            ? T(D('}'), it(dt, '}', ',;'), I, pt)
            : '(' == t
            ? T(it(ht, ')'), ft, pt)
            : '<' == t
            ? T(it(ct, '>'), ct)
            : void 0;
        }
        function ft(t) {
          if ('=>' == t) return T(ct);
        }
        function dt(t, e) {
          return 'variable' == t || 'keyword' == C.style
            ? ((C.marked = 'property'), T(dt))
            : '?' == e || 'number' == t || 'string' == t
            ? T(dt)
            : ':' == t
            ? T(ct)
            : '[' == t
            ? T(F('variable'), lt, F(']'), dt)
            : '(' == t
            ? k(_t, dt)
            : void 0;
        }
        function ht(t, e) {
          return ('variable' == t && C.stream.match(/^\s*[?:]/, !1)) || '?' == e
            ? T(ht)
            : ':' == t
            ? T(ct)
            : 'spread' == t
            ? T(ht)
            : k(ct);
        }
        function pt(t, e) {
          return '<' == e
            ? T(D('>'), it(ct, '>'), I, pt)
            : '|' == e || '.' == t || '&' == e
            ? T(ct)
            : '[' == t
            ? T(ct, F(']'), pt)
            : 'extends' == e || 'implements' == e
            ? ((C.marked = 'keyword'), T(ct))
            : '?' == e
            ? T(ct, F(':'), ct)
            : void 0;
        }
        function vt(t, e) {
          if ('<' == e) return T(D('>'), it(ct, '>'), I, pt);
        }
        function gt() {
          return k(ct, mt);
        }
        function mt(t, e) {
          if ('=' == e) return T(ct);
        }
        function yt(t, e) {
          return 'enum' == e
            ? ((C.marked = 'keyword'), T(Ut))
            : k(bt, lt, St, Ct);
        }
        function bt(t, e) {
          return u && M(e)
            ? ((C.marked = 'keyword'), T(bt))
            : 'variable' == t
            ? (O(e), T())
            : 'spread' == t
            ? T(bt)
            : '[' == t
            ? ot(wt, ']')
            : '{' == t
            ? ot(xt, '}')
            : void 0;
        }
        function xt(t, e) {
          return 'variable' != t || C.stream.match(/^\s*:/, !1)
            ? ('variable' == t && (C.marked = 'property'),
              'spread' == t
                ? T(bt)
                : '}' == t
                ? k()
                : '[' == t
                ? T(H, F(']'), F(':'), xt)
                : T(F(':'), bt, St))
            : (O(e), T(St));
        }
        function wt() {
          return k(bt, St);
        }
        function St(t, e) {
          if ('=' == e) return T(R);
        }
        function Ct(t) {
          if (',' == t) return T(yt);
        }
        function kt(t, e) {
          if ('keyword b' == t && 'else' == e)
            return T(D('form', 'else'), W, I);
        }
        function Tt(t, e) {
          return 'await' == e ? T(Tt) : '(' == t ? T(D(')'), Lt, I) : void 0;
        }
        function Lt(t) {
          return 'var' == t ? T(yt, Ot) : 'variable' == t ? T(Ot) : k(Ot);
        }
        function Ot(t, e) {
          return ')' == t
            ? T()
            : ';' == t
            ? T(Ot)
            : 'in' == e || 'of' == e
            ? ((C.marked = 'keyword'), T(H, Ot))
            : k(H, Ot);
        }
        function Mt(t, e) {
          return '*' == e
            ? ((C.marked = 'keyword'), T(Mt))
            : 'variable' == t
            ? (O(e), T(Mt))
            : '(' == t
            ? T(N, D(')'), it(Et, ')'), I, st, W, j)
            : u && '<' == e
            ? T(D('>'), it(gt, '>'), I, Mt)
            : void 0;
        }
        function _t(t, e) {
          return '*' == e
            ? ((C.marked = 'keyword'), T(_t))
            : 'variable' == t
            ? (O(e), T(_t))
            : '(' == t
            ? T(N, D(')'), it(Et, ')'), I, st, j)
            : u && '<' == e
            ? T(D('>'), it(gt, '>'), I, _t)
            : void 0;
        }
        function At(t, e) {
          return 'keyword' == t || 'variable' == t
            ? ((C.marked = 'type'), T(At))
            : '<' == e
            ? T(D('>'), it(gt, '>'), I)
            : void 0;
        }
        function Et(t, e) {
          return (
            '@' == e && T(H, Et),
            'spread' == t
              ? T(Et)
              : u && M(e)
              ? ((C.marked = 'keyword'), T(Et))
              : u && 'this' == t
              ? T(lt, St)
              : k(bt, lt, St)
          );
        }
        function Nt(t, e) {
          return 'variable' == t ? Pt(t, e) : jt(t, e);
        }
        function Pt(t, e) {
          if ('variable' == t) return O(e), T(jt);
        }
        function jt(t, e) {
          return '<' == e
            ? T(D('>'), it(gt, '>'), I, jt)
            : 'extends' == e || 'implements' == e || (u && ',' == t)
            ? ('implements' == e && (C.marked = 'keyword'), T(u ? ct : H, jt))
            : '{' == t
            ? T(D('}'), Dt, I)
            : void 0;
        }
        function Dt(t, e) {
          return 'async' == t ||
            ('variable' == t &&
              ('static' == e || 'get' == e || 'set' == e || (u && M(e))) &&
              C.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            ? ((C.marked = 'keyword'), T(Dt))
            : 'variable' == t || 'keyword' == C.style
            ? ((C.marked = 'property'), T(u ? It : Mt, Dt))
            : 'number' == t || 'string' == t
            ? T(u ? It : Mt, Dt)
            : '[' == t
            ? T(H, lt, F(']'), u ? It : Mt, Dt)
            : '*' == e
            ? ((C.marked = 'keyword'), T(Dt))
            : u && '(' == t
            ? k(_t, Dt)
            : ';' == t || ',' == t
            ? T(Dt)
            : '}' == t
            ? T()
            : '@' == e
            ? T(H, Dt)
            : void 0;
        }
        function It(t, e) {
          if ('?' == e) return T(It);
          if (':' == t) return T(ct, St);
          if ('=' == e) return T(R);
          var r = C.state.lexical.prev,
            n = r && 'interface' == r.info;
          return k(n ? _t : Mt);
        }
        function Ft(t, e) {
          return '*' == e
            ? ((C.marked = 'keyword'), T(Gt, F(';')))
            : 'default' == e
            ? ((C.marked = 'keyword'), T(H, F(';')))
            : '{' == t
            ? T(it(Wt, '}'), Gt, F(';'))
            : k(W);
        }
        function Wt(t, e) {
          return 'as' == e
            ? ((C.marked = 'keyword'), T(F('variable')))
            : 'variable' == t
            ? k(R, Wt)
            : void 0;
        }
        function zt(t) {
          return 'string' == t ? T() : '(' == t ? k(H) : k(Ht, Rt, Gt);
        }
        function Ht(t, e) {
          return '{' == t
            ? ot(Ht, '}')
            : ('variable' == t && O(e),
              '*' == e && (C.marked = 'keyword'),
              T(Bt));
        }
        function Rt(t) {
          if (',' == t) return T(Ht, Rt);
        }
        function Bt(t, e) {
          if ('as' == e) return (C.marked = 'keyword'), T(Ht);
        }
        function Gt(t, e) {
          if ('from' == e) return (C.marked = 'keyword'), T(H);
        }
        function Vt(t) {
          return ']' == t ? T() : k(it(R, ']'));
        }
        function Ut() {
          return k(D('form'), bt, F('{'), D('}'), it($t, '}'), I, I);
        }
        function $t() {
          return k(bt, St);
        }
        function Kt(t, e, r) {
          return (
            (e.tokenize == v &&
              /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                e.lastType
              )) ||
            ('quasi' == e.lastType &&
              /\{\s*$/.test(t.string.slice(0, t.pos - (r || 0))))
          );
        }
        return (
          (j.lex = !0),
          (I.lex = !0),
          {
            startState: function(t) {
              var e = {
                tokenize: v,
                lastType: 'sof',
                cc: [],
                lexical: new w((t || 0) - o, 0, 'block', !1),
                localVars: r.localVars,
                context: r.localVars && new _(null, null, !1),
                indented: t || 0,
              };
              return (
                r.globalVars &&
                  'object' == typeof r.globalVars &&
                  (e.globalVars = r.globalVars),
                e
              );
            },
            token: function(t, e) {
              if (
                (t.sol() &&
                  (e.lexical.hasOwnProperty('align') || (e.lexical.align = !1),
                  (e.indented = t.indentation()),
                  b(t, e)),
                e.tokenize != g && t.eatSpace())
              )
                return null;
              var r = e.tokenize(t, e);
              return 'comment' == n
                ? r
                : ((e.lastType =
                    'operator' != n || ('++' != i && '--' != i) ? n : 'incdec'),
                  (function(t, e, r, n, i) {
                    var o = t.cc;
                    for (
                      C.state = t,
                        C.stream = i,
                        C.marked = null,
                        C.cc = o,
                        C.style = e,
                        t.lexical.hasOwnProperty('align') ||
                          (t.lexical.align = !0);
                      ;

                    ) {
                      var a = o.length ? o.pop() : s ? H : W;
                      if (a(r, n)) {
                        for (; o.length && o[o.length - 1].lex; ) o.pop()();
                        return C.marked
                          ? C.marked
                          : 'variable' == r && S(t, n)
                          ? 'variable-2'
                          : e;
                      }
                    }
                  })(e, r, n, i, t));
            },
            indent: function(e, n) {
              if (e.tokenize == g) return t.Pass;
              if (e.tokenize != v) return 0;
              var i,
                l = n && n.charAt(0),
                s = e.lexical;
              if (!/^\s*else\b/.test(n))
                for (var u = e.cc.length - 1; u >= 0; --u) {
                  var c = e.cc[u];
                  if (c == I) s = s.prev;
                  else if (c != kt) break;
                }
              for (
                ;
                ('stat' == s.type || 'form' == s.type) &&
                ('}' == l ||
                  ((i = e.cc[e.cc.length - 1]) &&
                    (i == U || i == $) &&
                    !/^[,\.=+\-*:?[\(]/.test(n)));

              )
                s = s.prev;
              a && ')' == s.type && 'stat' == s.prev.type && (s = s.prev);
              var f = s.type,
                h = l == f;
              return 'vardef' == f
                ? s.indented +
                    ('operator' == e.lastType || ',' == e.lastType
                      ? s.info.length + 1
                      : 0)
                : 'form' == f && '{' == l
                ? s.indented
                : 'form' == f
                ? s.indented + o
                : 'stat' == f
                ? s.indented +
                  ((function(t, e) {
                    return (
                      'operator' == t.lastType ||
                      ',' == t.lastType ||
                      d.test(e.charAt(0)) ||
                      /[,.]/.test(e.charAt(0))
                    );
                  })(e, n)
                    ? a || o
                    : 0)
                : 'switch' != s.info || h || 0 == r.doubleIndentSwitch
                ? s.align
                  ? s.column + (h ? 0 : 1)
                  : s.indented + (h ? 0 : o)
                : s.indented + (/^(?:case|default)\b/.test(n) ? o : 2 * o);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: s ? null : '/*',
            blockCommentEnd: s ? null : '*/',
            blockCommentContinue: s ? null : ' * ',
            lineComment: s ? null : '//',
            fold: 'brace',
            closeBrackets: '()[]{}\'\'""``',
            helperType: s ? 'json' : 'javascript',
            jsonldMode: l,
            jsonMode: s,
            expressionAllowed: Kt,
            skipExpression: function(t) {
              var e = t.cc[t.cc.length - 1];
              (e != H && e != R) || t.cc.pop();
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
        t.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
        t.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
        t.defineMIME('application/typescript', {
          name: 'javascript',
          typescript: !0,
        });
    })(r(87));
  },
  function(t, e, r) {
    var n = r(0),
      i = r(107),
      o = n.WeakMap;
    t.exports = 'function' == typeof o && /native code/.test(i.call(o));
  },
  function(t, e, r) {
    var n = r(0),
      i = r(57),
      o = r(79),
      a = r(11),
      l = n.Reflect;
    t.exports =
      (l && l.ownKeys) ||
      function(t) {
        var e = i.f(a(t)),
          r = o.f;
        return r ? e.concat(r(t)) : e;
      };
  },
  function(t, e, r) {
    var n = r(25),
      i = r(20),
      o = r(110);
    t.exports = function(t) {
      return function(e, r, a) {
        var l,
          s = n(e),
          u = i(s.length),
          c = o(a, u);
        if (t && r != r) {
          for (; u > c; ) if ((l = s[c++]) != l) return !0;
        } else
          for (; u > c; c++)
            if ((t || c in s) && s[c] === r) return t || c || 0;
        return !t && -1;
      };
    };
  },
  function(t, e, r) {
    var n = r(60),
      i = r(79),
      o = r(76);
    t.exports = function(t) {
      var e = n(t),
        r = i.f;
      if (r)
        for (var a, l = r(t), s = o.f, u = 0; l.length > u; )
          s.call(t, (a = l[u++])) && e.push(a);
      return e;
    };
  },
  function(t, e, r) {
    var n = r(9),
      i = r(6),
      o = r(11),
      a = r(60);
    t.exports = n
      ? Object.defineProperties
      : function(t, e) {
          o(t);
          for (var r, n = a(e), l = n.length, s = 0; l > s; )
            i.f(t, (r = n[s++]), e[r]);
          return t;
        };
  },
  function(t, e, r) {
    var n = r(0).document;
    t.exports = n && n.documentElement;
  },
  function(t, e, r) {
    var n = r(25),
      i = r(57).f,
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
        : i(n(t));
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(116).IteratorPrototype,
      i = r(43),
      o = r(37),
      a = r(59),
      l = r(45),
      s = function() {
        return this;
      };
    t.exports = function(t, e, r) {
      var u = e + ' Iterator';
      return (
        (t.prototype = i(n, { next: o(1, r) })), a(t, u, !1, !0), (l[u] = s), t
      );
    };
  },
  function(t, e, r) {
    var n = r(1);
    t.exports = !n(function() {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function(t, e, r) {
    var n = r(10),
      i = r(11);
    t.exports = function(t, e) {
      if ((i(t), !n(e) && null !== e))
        throw TypeError("Can't set " + String(e) + ' as a prototype');
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(119),
      o = r(14),
      a = r(1),
      l = r(120),
      s = [].sort,
      u = [1, 2, 3],
      c = a(function() {
        u.sort(void 0);
      }),
      f = a(function() {
        u.sort(null);
      }),
      d = l('sort');
    n(
      { target: 'Array', proto: !0, forced: c || !f || d },
      {
        sort: function(t) {
          return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t));
        },
      }
    );
  },
  function(t, e, r) {
    'use strict';
    var n = r(121),
      i = {};
    (i[r(3)('toStringTag')] = 'z'),
      (t.exports =
        '[object z]' !== String(i)
          ? function() {
              return '[object ' + n(this) + ']';
            }
          : i.toString);
  },
  function(t, e, r) {
    'use strict';
    var n = r(9),
      i = r(0),
      o = r(80),
      a = r(13),
      l = r(5),
      s = r(38),
      u = r(130),
      c = r(39),
      f = r(1),
      d = r(43),
      h = r(57).f,
      p = r(36).f,
      v = r(6).f,
      g = r(192),
      m = i.Number,
      y = m.prototype,
      b = 'Number' == s(d(y)),
      x = 'trim' in String.prototype,
      w = function(t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          l,
          s,
          u = c(t, !1);
        if ('string' == typeof u && u.length > 2)
          if (
            43 === (e = (u = x ? u.trim() : g(u, 3)).charCodeAt(0)) ||
            45 === e
          ) {
            if (88 === (r = u.charCodeAt(2)) || 120 === r) return NaN;
          } else if (48 === e) {
            switch (u.charCodeAt(1)) {
              case 66:
              case 98:
                (n = 2), (i = 49);
                break;
              case 79:
              case 111:
                (n = 8), (i = 55);
                break;
              default:
                return +u;
            }
            for (a = (o = u.slice(2)).length, l = 0; l < a; l++)
              if ((s = o.charCodeAt(l)) < 48 || s > i) return NaN;
            return parseInt(o, n);
          }
        return +u;
      };
    if (o('Number', !m(' 0o1') || !m('0b1') || m('+0x1'))) {
      for (
        var S,
          C = function(t) {
            var e = arguments.length < 1 ? 0 : t,
              r = this;
            return r instanceof C &&
              (b
                ? f(function() {
                    y.valueOf.call(r);
                  })
                : 'Number' != s(r))
              ? u(new m(w(e)), r, C)
              : w(e);
          },
          k = n
            ? h(m)
            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                ','
              ),
          T = 0;
        k.length > T;
        T++
      )
        l(m, (S = k[T])) && !l(C, S) && v(C, S, p(m, S));
      (C.prototype = y), (y.constructor = C), a(i, 'Number', C);
    }
  },
  function(t, e, r) {
    var n = r(28),
      i = '[' + r(193) + ']',
      o = RegExp('^' + i + i + '*'),
      a = RegExp(i + i + '*$');
    t.exports = function(t, e) {
      return (
        (t = String(n(t))),
        1 & e && (t = t.replace(o, '')),
        2 & e && (t = t.replace(a, '')),
        t
      );
    };
  },
  function(t, e) {
    t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
  },
  function(t, e, r) {
    r(2)({ target: 'Number', stat: !0 }, { isFinite: r(195) });
  },
  function(t, e, r) {
    var n = r(0).isFinite;
    t.exports =
      Number.isFinite ||
      function(t) {
        return 'number' == typeof t && n(t);
      };
  },
  function(t, e, r) {
    'use strict';
    var n = r(2),
      i = r(0),
      o = r(80),
      a = r(13),
      l = r(132),
      s = r(133),
      u = r(137),
      c = r(10),
      f = r(1),
      d = r(138),
      h = r(59),
      p = r(130);
    t.exports = function(t, e, r, v, g) {
      var m = i[t],
        y = m && m.prototype,
        b = m,
        x = v ? 'set' : 'add',
        w = {},
        S = function(t) {
          var e = y[t];
          a(
            y,
            t,
            'add' == t
              ? function(t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : 'delete' == t
              ? function(t) {
                  return !(g && !c(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : 'get' == t
              ? function(t) {
                  return g && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : 'has' == t
              ? function(t) {
                  return !(g && !c(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : function(t, r) {
                  return e.call(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        o(
          t,
          'function' != typeof m ||
            !(
              g ||
              (y.forEach &&
                !f(function() {
                  new m().entries().next();
                }))
            )
        )
      )
        (b = r.getConstructor(e, t, v, x)), (l.REQUIRED = !0);
      else if (o(t, !0)) {
        var C = new b(),
          k = C[x](g ? {} : -0, 1) != C,
          T = f(function() {
            C.has(1);
          }),
          L = d(function(t) {
            new m(t);
          }),
          O =
            !g &&
            f(function() {
              for (var t = new m(), e = 5; e--; ) t[x](e, e);
              return !t.has(-0);
            });
        L ||
          (((b = e(function(e, r) {
            u(e, b, t);
            var n = p(new m(), e, b);
            return null != r && s(r, n[x], n, v), n;
          })).prototype = y),
          (y.constructor = b)),
          (T || O) && (S('delete'), S('has'), v && S('get')),
          (O || k) && S(x),
          g && y.clear && delete y.clear;
      }
      return (
        (w[t] = b),
        n({ global: !0, forced: b != m }, w),
        h(b, t),
        g || r.setStrong(b, t, v),
        b
      );
    };
  },
  function(t, e, r) {
    var n = r(1);
    t.exports = !n(function() {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  function(t, e, r) {
    'use strict';
    var n = r(6).f,
      i = r(43),
      o = r(199),
      a = r(62),
      l = r(137),
      s = r(133),
      u = r(81),
      c = r(200),
      f = r(9),
      d = r(132).fastKey,
      h = r(41),
      p = h.set,
      v = h.getterFor;
    t.exports = {
      getConstructor: function(t, e, r, u) {
        var c = t(function(t, n) {
            l(t, c, e),
              p(t, {
                type: e,
                index: i(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              f || (t.size = 0),
              null != n && s(n, t[u], t, r);
          }),
          h = v(e),
          g = function(t, e, r) {
            var n,
              i,
              o = h(t),
              a = m(t, e);
            return (
              a
                ? (a.value = r)
                : ((o.last = a = {
                    index: (i = d(e, !0)),
                    key: e,
                    value: r,
                    previous: (n = o.last),
                    next: void 0,
                    removed: !1,
                  }),
                  o.first || (o.first = a),
                  n && (n.next = a),
                  f ? o.size++ : t.size++,
                  'F' !== i && (o.index[i] = a)),
              t
            );
          },
          m = function(t, e) {
            var r,
              n = h(t),
              i = d(e);
            if ('F' !== i) return n.index[i];
            for (r = n.first; r; r = r.next) if (r.key == e) return r;
          };
        return (
          o(c.prototype, {
            clear: function() {
              for (var t = h(this), e = t.index, r = t.first; r; )
                (r.removed = !0),
                  r.previous && (r.previous = r.previous.next = void 0),
                  delete e[r.index],
                  (r = r.next);
              (t.first = t.last = void 0), f ? (t.size = 0) : (this.size = 0);
            },
            delete: function(t) {
              var e = h(this),
                r = m(this, t);
              if (r) {
                var n = r.next,
                  i = r.previous;
                delete e.index[r.index],
                  (r.removed = !0),
                  i && (i.next = n),
                  n && (n.previous = i),
                  e.first == r && (e.first = n),
                  e.last == r && (e.last = i),
                  f ? e.size-- : this.size--;
              }
              return !!r;
            },
            forEach: function(t) {
              for (
                var e,
                  r = h(this),
                  n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (e = e ? e.next : r.first);

              )
                for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
            },
            has: function(t) {
              return !!m(this, t);
            },
          }),
          o(
            c.prototype,
            r
              ? {
                  get: function(t) {
                    var e = m(this, t);
                    return e && e.value;
                  },
                  set: function(t, e) {
                    return g(this, 0 === t ? 0 : t, e);
                  },
                }
              : {
                  add: function(t) {
                    return g(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          f &&
            n(c.prototype, 'size', {
              get: function() {
                return h(this).size;
              },
            }),
          c
        );
      },
      setStrong: function(t, e, r) {
        var n = e + ' Iterator',
          i = v(e),
          o = v(n);
        u(
          t,
          e,
          function(t, e) {
            p(this, { type: n, target: t, state: i(t), kind: e, last: void 0 });
          },
          function() {
            for (var t = o(this), e = t.kind, r = t.last; r && r.removed; )
              r = r.previous;
            return t.target && (t.last = r = r ? r.next : t.state.first)
              ? 'keys' == e
                ? { value: r.key, done: !1 }
                : 'values' == e
                ? { value: r.value, done: !1 }
                : { value: [r.key, r.value], done: !1 }
              : ((t.target = void 0), { value: void 0, done: !0 });
          },
          r ? 'entries' : 'values',
          !r,
          !0
        ),
          c(e);
      },
    };
  },
  function(t, e, r) {
    var n = r(13);
    t.exports = function(t, e, r) {
      for (var i in e) n(t, i, e[i], r);
      return t;
    };
  },
  function(t, e, r) {
    'use strict';
    var n = r(201),
      i = r(6),
      o = r(3),
      a = r(9),
      l = o('species');
    t.exports = function(t) {
      var e = n(t),
        r = i.f;
      a &&
        e &&
        !e[l] &&
        r(e, l, {
          configurable: !0,
          get: function() {
            return this;
          },
        });
    };
  },
  function(t, e, r) {
    var n = r(114),
      i = r(0),
      o = function(t) {
        return 'function' == typeof t ? t : void 0;
      };
    t.exports = function(t, e) {
      return arguments.length < 2
        ? o(n[t]) || o(i[t])
        : (n[t] && n[t][e]) || (i[t] && i[t][e]);
    };
  },
  function(t, e, r) {
    var n = r(2),
      i = r(203),
      o = r(115);
    n({ target: 'Array', proto: !0 }, { fill: i }), o('fill');
  },
  function(t, e, r) {
    'use strict';
    var n = r(14),
      i = r(110),
      o = r(20);
    t.exports = function(t) {
      for (
        var e = n(this),
          r = o(e.length),
          a = arguments.length,
          l = i(a > 1 ? arguments[1] : void 0, r),
          s = a > 2 ? arguments[2] : void 0,
          u = void 0 === s ? r : i(s, r);
        u > l;

      )
        e[l++] = t;
      return e;
    };
  },
  function(t, e, r) {
    var n = r(2),
      i = r(205);
    n(
      {
        target: 'Array',
        stat: !0,
        forced: !r(138)(function(t) {
          Array.from(t);
        }),
      },
      { from: i }
    );
  },
  function(t, e, r) {
    'use strict';
    var n = r(62),
      i = r(14),
      o = r(136),
      a = r(134),
      l = r(20),
      s = r(124),
      u = r(135);
    t.exports = function(t) {
      var e,
        r,
        c,
        f,
        d = i(t),
        h = 'function' == typeof this ? this : Array,
        p = arguments.length,
        v = p > 1 ? arguments[1] : void 0,
        g = void 0 !== v,
        m = 0,
        y = u(d);
      if (
        (g && (v = n(v, p > 2 ? arguments[2] : void 0, 2)),
        null == y || (h == Array && a(y)))
      )
        for (r = new h((e = l(d.length))); e > m; m++)
          s(r, m, g ? v(d[m], m) : d[m]);
      else
        for (f = y.call(d), r = new h(); !(c = f.next()).done; m++)
          s(r, m, g ? o(f, v, [c.value, m], !0) : c.value);
      return (r.length = m), r;
    };
  },
  function(t, e, r) {
    var n = r(13),
      i = Date.prototype,
      o = i.toString,
      a = i.getTime;
    new Date(NaN) + '' != 'Invalid Date' &&
      n(i, 'toString', function() {
        var t = a.call(this);
        return t == t ? o.call(this) : 'Invalid Date';
      });
  },
  function(t, e, r) {
    'use strict';
    var n = r(13),
      i = r(11),
      o = r(1),
      a = r(140),
      l = /./.toString,
      s = RegExp.prototype,
      u = o(function() {
        return '/a/b' != l.call({ source: 'a', flags: 'b' });
      }),
      c = 'toString' != l.name;
    (u || c) &&
      n(
        RegExp.prototype,
        'toString',
        function() {
          var t = i(this),
            e = String(t.source),
            r = t.flags;
          return (
            '/' +
            e +
            '/' +
            String(
              void 0 === r && t instanceof RegExp && !('flags' in s)
                ? a.call(t)
                : r
            )
          );
        },
        { unsafe: !0 }
      );
  },
  function(t, e, r) {
    'use strict';
    var n = r(142),
      i = r(11),
      o = r(20),
      a = r(28),
      l = r(143),
      s = r(144);
    n('match', 1, function(t, e, r) {
      return [
        function(e) {
          var r = a(this),
            n = null == e ? void 0 : e[t];
          return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
        },
        function(t) {
          var n = r(e, t, this);
          if (n.done) return n.value;
          var a = i(t),
            u = String(this);
          if (!a.global) return s(a, u);
          var c = a.unicode;
          a.lastIndex = 0;
          for (var f, d = [], h = 0; null !== (f = s(a, u)); ) {
            var p = String(f[0]);
            (d[h] = p),
              '' === p && (a.lastIndex = l(u, o(a.lastIndex), c)),
              h++;
          }
          return 0 === h ? null : d;
        },
      ];
    });
  },
  function(t, e, r) {
    'use strict';
    var n = r(142),
      i = r(11),
      o = r(14),
      a = r(20),
      l = r(58),
      s = r(28),
      u = r(143),
      c = r(144),
      f = Math.max,
      d = Math.min,
      h = Math.floor,
      p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      v = /\$([$&'`]|\d\d?)/g;
    n('replace', 2, function(t, e, r) {
      return [
        function(r, n) {
          var i = s(this),
            o = null == r ? void 0 : r[t];
          return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n);
        },
        function(t, o) {
          var s = r(e, t, this, o);
          if (s.done) return s.value;
          var h = i(t),
            p = String(this),
            v = 'function' == typeof o;
          v || (o = String(o));
          var g = h.global;
          if (g) {
            var m = h.unicode;
            h.lastIndex = 0;
          }
          for (var y = []; ; ) {
            var b = c(h, p);
            if (null === b) break;
            if ((y.push(b), !g)) break;
            '' === String(b[0]) && (h.lastIndex = u(p, a(h.lastIndex), m));
          }
          for (var x, w = '', S = 0, C = 0; C < y.length; C++) {
            b = y[C];
            for (
              var k = String(b[0]),
                T = f(d(l(b.index), p.length), 0),
                L = [],
                O = 1;
              O < b.length;
              O++
            )
              L.push(void 0 === (x = b[O]) ? x : String(x));
            var M = b.groups;
            if (v) {
              var _ = [k].concat(L, T, p);
              void 0 !== M && _.push(M);
              var A = String(o.apply(void 0, _));
            } else A = n(k, p, T, L, M, o);
            T >= S && ((w += p.slice(S, T) + A), (S = T + k.length));
          }
          return w + p.slice(S);
        },
      ];
      function n(t, r, n, i, a, l) {
        var s = n + t.length,
          u = i.length,
          c = v;
        return (
          void 0 !== a && ((a = o(a)), (c = p)),
          e.call(l, c, function(e, o) {
            var l;
            switch (o.charAt(0)) {
              case '$':
                return '$';
              case '&':
                return t;
              case '`':
                return r.slice(0, n);
              case "'":
                return r.slice(s);
              case '<':
                l = a[o.slice(1, -1)];
                break;
              default:
                var c = +o;
                if (0 === c) return e;
                if (c > u) {
                  var f = h(c / 10);
                  return 0 === f
                    ? e
                    : f <= u
                    ? void 0 === i[f - 1]
                      ? o.charAt(1)
                      : i[f - 1] + o.charAt(1)
                    : e;
                }
                l = i[c - 1];
            }
            return void 0 === l ? '' : l;
          })
        );
      }
    });
  },
  function(t, e, r) {
    'use strict';
    r.r(e);
    r(148), r(160), r(166), r(177);
    var n = r(87),
      i = r.n(n);
    r(178), r(19), r(26), r(44), r(29), r(189), r(30), r(31), r(46), r(47);
    var o = function() {
      (this.__data__ = []), (this.size = 0);
    };
    var a = function(t, e) {
      return t === e || (t != t && e != e);
    };
    var l = function(t, e) {
        for (var r = t.length; r--; ) if (a(t[r][0], e)) return r;
        return -1;
      },
      s = Array.prototype.splice;
    var u = function(t) {
      var e = this.__data__,
        r = l(e, t);
      return !(
        r < 0 || (r == e.length - 1 ? e.pop() : s.call(e, r, 1), --this.size, 0)
      );
    };
    var c = function(t) {
      var e = this.__data__,
        r = l(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
    var f = function(t) {
      return l(this.__data__, t) > -1;
    };
    var d = function(t, e) {
      var r = this.__data__,
        n = l(r, t);
      return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
    };
    function h(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (h.prototype.clear = o),
      (h.prototype.delete = u),
      (h.prototype.get = c),
      (h.prototype.has = f),
      (h.prototype.set = d);
    var p = h;
    var v = function() {
      (this.__data__ = new p()), (this.size = 0);
    };
    var g = function(t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    };
    var m = function(t) {
      return this.__data__.get(t);
    };
    var y = function(t) {
        return this.__data__.has(t);
      },
      b = r(4),
      x = b.a.Symbol,
      w = Object.prototype,
      S = w.hasOwnProperty,
      C = w.toString,
      k = x ? x.toStringTag : void 0;
    var T = function(t) {
        var e = S.call(t, k),
          r = t[k];
        try {
          t[k] = void 0;
          var n = !0;
        } catch (t) {}
        var i = C.call(t);
        return n && (e ? (t[k] = r) : delete t[k]), i;
      },
      L = Object.prototype.toString;
    var O = function(t) {
        return L.call(t);
      },
      M = '[object Null]',
      _ = '[object Undefined]',
      A = x ? x.toStringTag : void 0;
    var E = function(t) {
      return null == t
        ? void 0 === t
          ? _
          : M
        : A && A in Object(t)
        ? T(t)
        : O(t);
    };
    var N = function(t) {
        var e = typeof t;
        return null != t && ('object' == e || 'function' == e);
      },
      P = '[object AsyncFunction]',
      j = '[object Function]',
      D = '[object GeneratorFunction]',
      I = '[object Proxy]';
    var F,
      W = function(t) {
        if (!N(t)) return !1;
        var e = E(t);
        return e == j || e == D || e == P || e == I;
      },
      z = b.a['__core-js_shared__'],
      H = (F = /[^.]+$/.exec((z && z.keys && z.keys.IE_PROTO) || ''))
        ? 'Symbol(src)_1.' + F
        : '';
    var R = function(t) {
        return !!H && H in t;
      },
      B = Function.prototype.toString;
    var G = function(t) {
        if (null != t) {
          try {
            return B.call(t);
          } catch (t) {}
          try {
            return t + '';
          } catch (t) {}
        }
        return '';
      },
      V = /^\[object .+?Constructor\]$/,
      U = Function.prototype,
      $ = Object.prototype,
      K = U.toString,
      q = $.hasOwnProperty,
      Y = RegExp(
        '^' +
          K.call(q)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    var X = function(t) {
      return !(!N(t) || R(t)) && (W(t) ? Y : V).test(G(t));
    };
    var Z = function(t, e) {
      return null == t ? void 0 : t[e];
    };
    var J = function(t, e) {
        var r = Z(t, e);
        return X(r) ? r : void 0;
      },
      Q = J(b.a, 'Map'),
      tt = J(Object, 'create');
    var et = function() {
      (this.__data__ = tt ? tt(null) : {}), (this.size = 0);
    };
    var rt = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      },
      nt = '__lodash_hash_undefined__',
      it = Object.prototype.hasOwnProperty;
    var ot = function(t) {
        var e = this.__data__;
        if (tt) {
          var r = e[t];
          return r === nt ? void 0 : r;
        }
        return it.call(e, t) ? e[t] : void 0;
      },
      at = Object.prototype.hasOwnProperty;
    var lt = function(t) {
        var e = this.__data__;
        return tt ? void 0 !== e[t] : at.call(e, t);
      },
      st = '__lodash_hash_undefined__';
    var ut = function(t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = tt && void 0 === e ? st : e),
        this
      );
    };
    function ct(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (ct.prototype.clear = et),
      (ct.prototype.delete = rt),
      (ct.prototype.get = ot),
      (ct.prototype.has = lt),
      (ct.prototype.set = ut);
    var ft = ct;
    var dt = function() {
      (this.size = 0),
        (this.__data__ = {
          hash: new ft(),
          map: new (Q || p)(),
          string: new ft(),
        });
    };
    var ht = function(t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
        ? '__proto__' !== t
        : null === t;
    };
    var pt = function(t, e) {
      var r = t.__data__;
      return ht(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
    };
    var vt = function(t) {
      var e = pt(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
    var gt = function(t) {
      return pt(this, t).get(t);
    };
    var mt = function(t) {
      return pt(this, t).has(t);
    };
    var yt = function(t, e) {
      var r = pt(this, t),
        n = r.size;
      return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
    };
    function bt(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (bt.prototype.clear = dt),
      (bt.prototype.delete = vt),
      (bt.prototype.get = gt),
      (bt.prototype.has = mt),
      (bt.prototype.set = yt);
    var xt = bt,
      wt = 200;
    var St = function(t, e) {
      var r = this.__data__;
      if (r instanceof p) {
        var n = r.__data__;
        if (!Q || n.length < wt - 1)
          return n.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new xt(n);
      }
      return r.set(t, e), (this.size = r.size), this;
    };
    function Ct(t) {
      var e = (this.__data__ = new p(t));
      this.size = e.size;
    }
    (Ct.prototype.clear = v),
      (Ct.prototype.delete = g),
      (Ct.prototype.get = m),
      (Ct.prototype.has = y),
      (Ct.prototype.set = St);
    var kt = Ct,
      Tt = (function() {
        try {
          var t = J(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    var Lt = function(t, e, r) {
      '__proto__' == e && Tt
        ? Tt(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    };
    var Ot = function(t, e, r) {
      ((void 0 === r || a(t[e], r)) && (void 0 !== r || e in t)) || Lt(t, e, r);
    };
    var Mt = (function(t) {
        return function(e, r, n) {
          for (var i = -1, o = Object(e), a = n(e), l = a.length; l--; ) {
            var s = a[t ? l : ++i];
            if (!1 === r(o[s], s, o)) break;
          }
          return e;
        };
      })(),
      _t = r(146),
      At = b.a.Uint8Array;
    var Et = function(t) {
      var e = new t.constructor(t.byteLength);
      return new At(e).set(new At(t)), e;
    };
    var Nt = function(t, e) {
      var r = e ? Et(t.buffer) : t.buffer;
      return new t.constructor(r, t.byteOffset, t.length);
    };
    var Pt = function(t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
        return e;
      },
      jt = Object.create,
      Dt = (function() {
        function t() {}
        return function(e) {
          if (!N(e)) return {};
          if (jt) return jt(e);
          t.prototype = e;
          var r = new t();
          return (t.prototype = void 0), r;
        };
      })();
    var It = (function(t, e) {
        return function(r) {
          return t(e(r));
        };
      })(Object.getPrototypeOf, Object),
      Ft = Object.prototype;
    var Wt = function(t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || Ft);
    };
    var zt = function(t) {
      return 'function' != typeof t.constructor || Wt(t) ? {} : Dt(It(t));
    };
    var Ht = function(t) {
        return null != t && 'object' == typeof t;
      },
      Rt = '[object Arguments]';
    var Bt = function(t) {
        return Ht(t) && E(t) == Rt;
      },
      Gt = Object.prototype,
      Vt = Gt.hasOwnProperty,
      Ut = Gt.propertyIsEnumerable,
      $t = Bt(
        (function() {
          return arguments;
        })()
      )
        ? Bt
        : function(t) {
            return Ht(t) && Vt.call(t, 'callee') && !Ut.call(t, 'callee');
          },
      Kt = Array.isArray,
      qt = 9007199254740991;
    var Yt = function(t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= qt;
    };
    var Xt = function(t) {
      return null != t && Yt(t.length) && !W(t);
    };
    var Zt = function(t) {
        return Ht(t) && Xt(t);
      },
      Jt = r(65),
      Qt = '[object Object]',
      te = Function.prototype,
      ee = Object.prototype,
      re = te.toString,
      ne = ee.hasOwnProperty,
      ie = re.call(Object);
    var oe = function(t) {
        if (!Ht(t) || E(t) != Qt) return !1;
        var e = It(t);
        if (null === e) return !0;
        var r = ne.call(e, 'constructor') && e.constructor;
        return 'function' == typeof r && r instanceof r && re.call(r) == ie;
      },
      ae = {};
    (ae['[object Float32Array]'] = ae['[object Float64Array]'] = ae[
      '[object Int8Array]'
    ] = ae['[object Int16Array]'] = ae['[object Int32Array]'] = ae[
      '[object Uint8Array]'
    ] = ae['[object Uint8ClampedArray]'] = ae['[object Uint16Array]'] = ae[
      '[object Uint32Array]'
    ] = !0),
      (ae['[object Arguments]'] = ae['[object Array]'] = ae[
        '[object ArrayBuffer]'
      ] = ae['[object Boolean]'] = ae['[object DataView]'] = ae[
        '[object Date]'
      ] = ae['[object Error]'] = ae['[object Function]'] = ae[
        '[object Map]'
      ] = ae['[object Number]'] = ae['[object Object]'] = ae[
        '[object RegExp]'
      ] = ae['[object Set]'] = ae['[object String]'] = ae[
        '[object WeakMap]'
      ] = !1);
    var le = function(t) {
      return Ht(t) && Yt(t.length) && !!ae[E(t)];
    };
    var se = function(t) {
        return function(e) {
          return t(e);
        };
      },
      ue = r(88),
      ce = ue.a && ue.a.isTypedArray,
      fe = ce ? se(ce) : le;
    var de = function(t, e) {
        if ('__proto__' != e) return t[e];
      },
      he = Object.prototype.hasOwnProperty;
    var pe = function(t, e, r) {
      var n = t[e];
      (he.call(t, e) && a(n, r) && (void 0 !== r || e in t)) || Lt(t, e, r);
    };
    var ve = function(t, e, r, n) {
      var i = !r;
      r || (r = {});
      for (var o = -1, a = e.length; ++o < a; ) {
        var l = e[o],
          s = n ? n(r[l], t[l], l, r, t) : void 0;
        void 0 === s && (s = t[l]), i ? Lt(r, l, s) : pe(r, l, s);
      }
      return r;
    };
    var ge = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      },
      me = 9007199254740991,
      ye = /^(?:0|[1-9]\d*)$/;
    var be = function(t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? me : e) &&
          ('number' == r || ('symbol' != r && ye.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      },
      xe = Object.prototype.hasOwnProperty;
    var we = function(t, e) {
      var r = Kt(t),
        n = !r && $t(t),
        i = !r && !n && Object(Jt.a)(t),
        o = !r && !n && !i && fe(t),
        a = r || n || i || o,
        l = a ? ge(t.length, String) : [],
        s = l.length;
      for (var u in t)
        (!e && !xe.call(t, u)) ||
          (a &&
            ('length' == u ||
              (i && ('offset' == u || 'parent' == u)) ||
              (o &&
                ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
              be(u, s))) ||
          l.push(u);
      return l;
    };
    var Se = function(t) {
        var e = [];
        if (null != t) for (var r in Object(t)) e.push(r);
        return e;
      },
      Ce = Object.prototype.hasOwnProperty;
    var ke = function(t) {
      if (!N(t)) return Se(t);
      var e = Wt(t),
        r = [];
      for (var n in t)
        ('constructor' != n || (!e && Ce.call(t, n))) && r.push(n);
      return r;
    };
    var Te = function(t) {
      return Xt(t) ? we(t, !0) : ke(t);
    };
    var Le = function(t) {
      return ve(t, Te(t));
    };
    var Oe = function(t, e, r, n, i, o, a) {
      var l = de(t, r),
        s = de(e, r),
        u = a.get(s);
      if (u) Ot(t, r, u);
      else {
        var c = o ? o(l, s, r + '', t, e, a) : void 0,
          f = void 0 === c;
        if (f) {
          var d = Kt(s),
            h = !d && Object(Jt.a)(s),
            p = !d && !h && fe(s);
          (c = s),
            d || h || p
              ? Kt(l)
                ? (c = l)
                : Zt(l)
                ? (c = Pt(l))
                : h
                ? ((f = !1), (c = Object(_t.a)(s, !0)))
                : p
                ? ((f = !1), (c = Nt(s, !0)))
                : (c = [])
              : oe(s) || $t(s)
              ? ((c = l), $t(l) ? (c = Le(l)) : (N(l) && !W(l)) || (c = zt(s)))
              : (f = !1);
        }
        f && (a.set(s, c), i(c, s, n, o, a), a.delete(s)), Ot(t, r, c);
      }
    };
    var Me = function t(e, r, n, i, o) {
      e !== r &&
        Mt(
          r,
          function(a, l) {
            if (N(a)) o || (o = new kt()), Oe(e, r, l, n, t, i, o);
            else {
              var s = i ? i(de(e, l), a, l + '', e, r, o) : void 0;
              void 0 === s && (s = a), Ot(e, l, s);
            }
          },
          Te
        );
    };
    var _e = function(t) {
      return t;
    };
    var Ae = function(t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      },
      Ee = Math.max;
    var Ne = function(t, e, r) {
      return (
        (e = Ee(void 0 === e ? t.length - 1 : e, 0)),
        function() {
          for (
            var n = arguments, i = -1, o = Ee(n.length - e, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[e + i];
          i = -1;
          for (var l = Array(e + 1); ++i < e; ) l[i] = n[i];
          return (l[e] = r(a)), Ae(t, this, l);
        }
      );
    };
    var Pe = function(t) {
        return function() {
          return t;
        };
      },
      je = Tt
        ? function(t, e) {
            return Tt(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: Pe(e),
              writable: !0,
            });
          }
        : _e,
      De = 800,
      Ie = 16,
      Fe = Date.now;
    var We = (function(t) {
      var e = 0,
        r = 0;
      return function() {
        var n = Fe(),
          i = Ie - (n - r);
        if (((r = n), i > 0)) {
          if (++e >= De) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    })(je);
    var ze = function(t, e) {
      return We(Ne(t, e, _e), t + '');
    };
    var He = function(t, e, r) {
      if (!N(r)) return !1;
      var n = typeof e;
      return (
        !!('number' == n
          ? Xt(r) && be(e, r.length)
          : 'string' == n && e in r) && a(r[e], t)
      );
    };
    var Re = (function(t) {
        return ze(function(e, r) {
          var n = -1,
            i = r.length,
            o = i > 1 ? r[i - 1] : void 0,
            a = i > 2 ? r[2] : void 0;
          for (
            o = t.length > 3 && 'function' == typeof o ? (i--, o) : void 0,
              a && He(r[0], r[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
              e = Object(e);
            ++n < i;

          ) {
            var l = r[n];
            l && t(e, l, n, o);
          }
          return e;
        });
      })(function(t, e, r) {
        Me(t, e, r);
      }),
      Be = (r(15), 0),
      Ge = function() {
        return 'domain-gfx-id-'.concat(++Be);
      },
      Ve = window && window.Symbol ? Symbol('lib namespace') : '_'.concat(Ge()),
      Ue = function(t) {
        return {
          set: function(e, r) {
            t.setAttribute('data-'.concat(e), r);
          },
          get: function(e) {
            return t.getAttribute('data-'.concat(e));
          },
        };
      },
      $e = function(t) {
        var e = t.className,
          r = t.acceptedMargin,
          n = document.createElement('style');
        return (
          (n.textContent = '\n.'
            .concat(e, ' {\n  padding-bottom: ')
            .concat(r, 'px;\n  font-family: Sans-Serif;\n}\n.')
            .concat(
              e,
              '.hidden {\n  pointer-events: none;\n  display: block;\n  opacity: 0;\n  transform: translate(-999px, -999px);\n  transform: translate(200vw, 200vh);\n}\n.'
            )
            .concat(
              e,
              '___container {\n  border-style: solid;\n  border-color: #dedede;\n  border-width: 1px 2px 2px 1px;\n  border-radius: 0.2em;\n  background-color: #fff;\n  margin-bottom: '
            )
            .concat(r, 'px;\n}\n.')
            .concat(e, ' thead {\n  background-color: #dedede;\n}\n.')
            .concat(e, ' td:first-of-type {\n  font-weight: bold;\n}\n.')
            .concat(e, ' th {\n  text-align: left;\n}\n.')
            .concat(
              e,
              ' .coordinates {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.'
            )
            .concat(
              e,
              ' .domain {\n  margin: 0 0.5em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 0.5em;\n  background-color: black;\n}\n.'
            )
            .concat(
              e,
              ' .alignment {\n  display: inline-block;\n  margin-left: 0;\n  height: 1em;\n  border-radius: 0.2em;\n  background-color: grey;\n}'
            )),
          n
        );
      };
    r(83), r(126), r(128), r(63), r(129);
    function Ke(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var qe = function(t) {
      var e,
        r = (function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r);
            'function' == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
              )),
              n.forEach(function(e) {
                Ke(t, e, r[e]);
              });
          }
          return t;
        })({}, t, t.metadata || {}),
        n = r.identifier || r.type || r.accession || '',
        i = r.accession || '',
        o = r.description,
        a = r.database || r.source,
        l = r.start,
        s = r.targetStart || r.tStart || r.tstart,
        u = r.targetEnd || r.tEnd || r.tend,
        c = r.queryStart || r.qStart || r.qstart,
        f = r.queryEnd || r.qEnd || r.qend;
      if (r.end) {
        var d = r.end - r.start,
          h = r.aliStart || r.start,
          p = r.aliEnd || r.end,
          v = 0;
        h - r.start > 0 && (v = ((h - r.start) / d) * 100),
          (e = '\n      '
            .concat(
              r.start,
              '<span style="width: 100px;" class="domain">\n        <span class="alignment" style="\n          width: '
            )
            .concat((100 * (p - h)) / d, 'px;\n          margin-left: ')
            .concat(v, 'px;\n          background-color: ')
            .concat(r.color, ';\n        "></span>\n      </span>')
            .concat(r.end, '\n    '));
      }
      return '\n    <table>\n      <thead>\n        <tr>\n          <th colspan="2">\n            '
        .concat(n || (s && 'Match coordinates'), '\n            ')
        .concat(
          i && i !== n ? ' ('.concat(i, ')') : '',
          '\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        '
        )
        .concat(
          o
            ? '\n        <tr>\n          <td>Description:</td>\n          <td>'.concat(
                o,
                '</td>\n        </tr>\n        '
              )
            : '',
          '\n        '
        )
        .concat(
          e
            ? '\n        <tr>\n          <td>Coordinates:</td>\n          <td class="coordinates">'.concat(
                e,
                '</td>\n        </tr>\n        '
              )
            : '',
          '\n        '
        )
        .concat(
          !e && l
            ? '\n        <tr>\n          <td>Position:</td>\n          <td>'.concat(
                l,
                '</td>\n        </tr>\n        '
              )
            : '',
          '\n        '
        )
        .concat(
          a
            ? '\n        <tr>\n          <td>Source:</td>\n          <td>'.concat(
                a,
                '</td>\n        </tr>\n        '
              )
            : '',
          '\n        '
        )
        .concat(
          s
            ? '\n        <tr>\n          <td>Target:</td>\n          <td>'
                .concat(s)
                .concat(
                  u ? ' - '.concat(u) : '',
                  '</td>\n        </tr>\n        '
                )
            : '',
          '\n        '
        )
        .concat(
          c
            ? '\n        <tr>\n          <td>Query:</td>\n          <td>'
                .concat(c)
                .concat(
                  f ? ' - '.concat(f) : '',
                  '</td>\n        </tr>\n        '
                )
            : '',
          '\n      </tbody>\n    </table>\n  '
        );
    };
    function Ye(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function Xe(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Ze,
      Je = 5,
      Qe = 'domain_gfx__tooltip',
      tr = function t(e) {
        if (!e) throw new Error('No entity found in the whole tree');
        return Ue(e).get('entity')
          ? e.getBoundingClientRect()
          : t(e.parentNode);
      },
      er = function(t, e) {
        var r = t.left + t.width / 2 - e.width / 2;
        r = r < 0 ? 0 : Math.min(r, window.innerWidth - e.width);
        var n = t.top - e.height;
        return { x: Math.round(r), y: Math.round(n) };
      },
      rr = function(t) {
        var e = document.createElement('div');
        return (
          e.classList.add(''.concat(Qe, '___container')), (e.innerHTML = t), e
        );
      },
      nr = (function() {
        function t() {
          var e = this;
          if (
            ((function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            Xe(this, '_promoteTarget', function(t) {
              return function(r) {
                r.target !== t ||
                  e._promoted ||
                  (e._container.style.willChange = 'transform');
              };
            }),
            Xe(this, '_demoteTarget', function(t) {
              return function(r) {
                var n = r.target,
                  i = r.relatedTarget;
                n === t &&
                  e._promoted &&
                  ((i && i === e._container) ||
                    (e._container.style.willChange = ''));
              };
            }),
            Xe(this, '_replaceTooltipContent', function(t) {
              (e._current = rr(qe(t))),
                e._container.replaceChild(
                  e._current,
                  e._container.firstElementChild
                );
            }),
            Xe(this, '_hide', function() {
              e._container.classList.add('hidden'), (e._visible = !1);
            }),
            Xe(this, '_display', function(t) {
              var r = t.x,
                n = t.y;
              (e._container.style.transform = 'translate('
                .concat(r, 'px, ')
                .concat(n + Je, 'px)')),
                e._container.classList.remove('hidden');
            }),
            Xe(this, '_handleMouseOver', function(t) {
              var r = t.target[Ve];
              e._currentData !== r &&
                (e._currentData || r) &&
                ((e._currentData = r),
                e._replaceTooltipContent(r),
                e._display(
                  er(tr(t.target), e._container.getBoundingClientRect())
                ));
            }),
            Xe(this, '_handleMouseOut', function(t) {
              if (t.target[Ve] && t.relatedTarget !== e._container) {
                var r = t.relatedTarget[Ve];
                r !== e._currentData &&
                  ((e._currentData = r || null),
                  r
                    ? (e._replaceTooltipContent(r),
                      e._display(
                        er(
                          tr(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              }
            }),
            window)
          ) {
            var r = document.createElement('div');
            r.classList.add(Qe),
              r.classList.add('hidden'),
              (r.style.position = 'fixed'),
              (r.style.left = '0'),
              (r.style.top = '0');
            var n = rr('<p>placeholder</p>');
            if (
              (r.appendChild(n),
              (this._current = n),
              (this._container = r),
              !document.body)
            )
              throw new Error('No body in document');
            if (
              (document.body.appendChild(r),
              (this._promoted = !1),
              !document.head)
            )
              throw new Error('No head in document');
            document.head.appendChild(
              $e({ className: Qe, acceptedMargin: Je })
            ),
              r.addEventListener('mouseleave', function(t) {
                var r = t.relatedTarget[Ve];
                r !== e._currentData &&
                  ((e._currentData = r || null),
                  r
                    ? (e._replaceTooltipContent(r),
                      e._display(
                        er(
                          tr(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              });
          }
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: 'attachToCanvas',
              value: function(t) {
                var e = this,
                  r = this._promoteTarget(t),
                  n = this._demoteTarget(t);
                return (
                  t.addEventListener('mouseenter', r),
                  t.addEventListener('mouseleave', n),
                  t.addEventListener('mouseover', this._handleMouseOver),
                  t.addEventListener('mousemove', this._handleMouseOver),
                  t.addEventListener('mouseout', this._handleMouseOut),
                  function() {
                    t.removeEventListener('mouseenter', r),
                      t.removeEventListener('mouseleave', n),
                      t.removeEventListener('mouseover', e._handleMouseOver),
                      t.removeEventListener('mousemove', e._handleMouseOver),
                      t.removeEventListener('mouseout', e._handleMouseOut);
                  }
                );
              },
            },
          ]) && Ye(e.prototype, r),
          n && Ye(e, n),
          t
        );
      })(),
      ir = function() {
        return Ze || (Ze = new nr()), Ze;
      },
      or = (r(32),
      r(191),
      r(194),
      r(131),
      function(t) {
        return function(e) {
          for (
            var r = document.createElementNS('http://www.w3.org/2000/svg', t),
              n = 0,
              i = Object.keys(e || {});
            n < i.length;
            n++
          ) {
            var o = i[n],
              a = e[o];
            (a || 0 === a) && r.setAttribute(o, String(a));
          }
          for (
            var l = arguments.length, s = new Array(l > 1 ? l - 1 : 0), u = 1;
            u < l;
            u++
          )
            s[u - 1] = arguments[u];
          for (var c = 0, f = s; c < f.length; c++) {
            var d = f[c];
            d &&
              r.appendChild(d instanceof Node ? d : document.createTextNode(d));
          }
          return r;
        };
      }),
      ar = or('svg'),
      lr = or('circle'),
      sr = or('defs'),
      ur = or('linearGradient'),
      cr = or('g'),
      fr = or('mask'),
      dr = or('path'),
      hr = or('rect'),
      pr = or('stop'),
      vr = or('text'),
      gr = or('filter'),
      mr = or('feGaussianBlur'),
      yr = or('feSpecularLighting'),
      br = or('fePointLight'),
      xr = or('feComposite');
    function wr(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var Sr = (function() {
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
        var e, r, n;
        return (
          (e = t),
          (r = [
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
          ]) && wr(e.prototype, r),
          n && wr(e, n),
          t
        );
      })(),
      Cr = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t
          ? 'v'.concat(e)
          : 0 === e
          ? 'h'.concat(t)
          : 'l'.concat(t, ',').concat(e);
      },
      kr = function(t) {
        return Cr(0, t);
      },
      Tr = function(t) {
        var e = t.style,
          r = t.color,
          n = t.isOnTop;
        switch (e) {
          case 'diamond':
            return (function(t, e) {
              var r = new Sr('m0,'.concat(e ? -10 : 6))
                .add(Cr(2, 2))
                .add(Cr(-2, 2))
                .add(Cr(-2, -2))
                .close();
              return dr({ d: r, fill: t });
            })(r, n);
          case 'circle':
            return (function(t, e) {
              return lr({ cx: 0, cy: e ? -8 : 8, r: 1.5, fill: t });
            })(r, n);
          case 'arrow':
            return (function(t, e) {
              var r;
              return (
                (r = e
                  ? new Sr('m-2,'.concat(-6))
                      .add(Cr(2, -2))
                      .add(Cr(2, 2))
                      .finish()
                  : new Sr('m-2,'.concat(6))
                      .add(Cr(2, 2))
                      .add(Cr(2, -2))
                      .finish()),
                dr({ stroke: t, fill: 'none', d: r })
              );
            })(r, n);
          case 'pointer':
            return (function(t, e) {
              var r;
              return (
                (r = e
                  ? new Sr('m-2,'.concat(-4.5))
                      .add(Cr(2, 2))
                      .add(Cr(2, -2))
                      .finish()
                  : new Sr('m-2,'.concat(4.5))
                      .add(Cr(2, -2))
                      .add(Cr(2, 2))
                      .finish()),
                dr({ stroke: t, fill: 'none', d: r })
              );
            })(r, n);
          case 'line':
            return (function(t, e) {
              return dr({
                stroke: t,
                d: new Sr('m0,'.concat(8 * (e ? -1 : 1) - 1.5))
                  .add(kr(3))
                  .finish(),
              });
            })(r, n);
          case 'square':
          default:
            return (function(t, e) {
              return hr({
                x: -1.5,
                y: e ? -9.5 : 6.5,
                width: 3,
                height: 3,
                fill: t,
              });
            })(r, n);
        }
      },
      Lr = function(t, e) {
        var r,
          n = t.start,
          i = t.end,
          o = t.v_align,
          a = t.vAlign,
          l = t.level,
          s = void 0 === l ? 0 : l,
          u = t.lineColor,
          c = t.headColor,
          f = t.color,
          d = t.headStyle,
          h = /top/i.test(o || a),
          p = new Sr().add(kr((1.5 * s + 8) * (h ? -1 : 1)));
        return (
          i &&
            (p = p
              .add(((r = (i - n) * e), Cr(r, 0)))
              .add(kr((1.5 * s + 8) * (h ? 1 : -1)))),
          (p = p.finish()),
          cr(
            null,
            dr({ d: p, fill: 'none', stroke: u || (i && f) || 'black' }),
            !i && Tr({ color: c || (!i && f) || 'black', style: d, isOnTop: h })
          )
        );
      },
      Or = function(t) {
        var e = t.position,
          r = e.x,
          n = e.y,
          i = t.length,
          o = t.height,
          a = t.color;
        return hr({
          x: r,
          y: n,
          width: i,
          height: o,
          fill: a || '#d8d8d8',
          rx: o / 2,
          ry: o / 2,
        });
      },
      Mr = function(t) {
        var e = t.position,
          r = e.x,
          n = e.y,
          i = t.length,
          o = t.height,
          a = t.color;
        return hr({ x: r, y: n, width: i, height: o, fill: a || 'black' });
      };
    r(202), r(204), r(139), r(206), r(207);
    function _r(t) {
      return (
        (function(t) {
          if (Array.isArray(t)) {
            for (var e = 0, r = new Array(t.length); e < t.length; e++)
              r[e] = t[e];
            return r;
          }
        })(t) ||
        (function(t) {
          if (
            Symbol.iterator in Object(t) ||
            '[object Arguments]' === Object.prototype.toString.call(t)
          )
            return Array.from(t);
        })(t) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance'
          );
        })()
      );
    }
    var Ar = function(t) {
        var e = t;
        1 === e.length && (e[1] = e[0]);
        var r = 100 / (e.length - 1);
        return e.map(function(t, e) {
          return pr({ offset: ''.concat(e * r, '%'), 'stop-color': t });
        });
      },
      Er = function(t) {
        for (var e = [], r = t.length, n = 100 / r, i = 0; i < r; i++)
          e.push(pr({ offset: ''.concat(i * n, '%'), 'stop-color': t[i] })),
            e.push(
              pr({ offset: ''.concat(i * n + n, '%'), 'stop-color': t[i] })
            );
        return e;
      },
      Nr = function(t, e) {
        var r = Ge();
        return {
          gradientId: r,
          gradientElement: ur.apply(
            void 0,
            [{ id: r, x1: 0, x2: 0, y1: 0, y2: 1 }].concat(_r((e ? Ar : Er)(t)))
          ),
        };
      },
      Pr = (r(141), r(208), 'Expected a function');
    function jr(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw new TypeError(Pr);
      var r = function() {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (jr.Cache || xt)()), r;
    }
    jr.Cache = xt;
    var Dr,
      Ir = jr;
    function Fr(t, e) {
      return (
        (function(t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function(t, e) {
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = t[Symbol.iterator]();
              !(n = (a = l.next()).done) &&
              (r.push(a.value), !e || r.length !== e);
              n = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        })(t, e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    window &&
      document &&
      window.getComputedStyle &&
      ((Dr = document.createElement('p')).style.opacity = '0');
    var Wr = /rgba?\((\d+), (\d+), (\d+)/,
      zr = Ir(function(t) {
        if (!Dr) return 'black';
        var e = (function(t) {
          if (!Dr || !document.body) return { r: 255, g: 255, b: 255 };
          (Dr.style.background = t), document.body.appendChild(Dr);
          var e = Fr(window.getComputedStyle(Dr).backgroundColor.match(Wr), 4),
            r = e[1],
            n = e[2],
            i = e[3];
          return (
            document.body && document.body.removeChild(Dr),
            { r: +r, g: +n, b: +i }
          );
        })(t);
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 >= 128
          ? 'black'
          : 'white';
      }),
      Hr = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t
          ? 'v'.concat(e)
          : 0 === e
          ? 'h'.concat(t)
          : 'l'.concat(t, ',').concat(e);
      },
      Rr = function(t) {
        return Hr(t, 0);
      },
      Br = function(t) {
        return Hr(0, t);
      },
      Gr = function(t, e, r, n, i, o, a) {
        return 'A'
          .concat(t, ',')
          .concat(e, ',')
          .concat(r, ',')
          .concat(n, ',')
          .concat(i, ',')
          .concat(o, ',')
          .concat(a);
      },
      Vr = function(t) {
        var e = t.start,
          r = t.end,
          n = t.startStyle,
          i = t.endStyle,
          o = t.fill,
          a = t.residueWidth,
          l = t.mask,
          s = t.filter,
          u = (r - e) * a - 10,
          c = new Sr('m'.concat(5, ',0'))
            .add(
              (function(t) {
                return Rr(t);
              })(u)
            )
            .add(
              (function(t, e) {
                switch (t.toLowerCase()) {
                  case 'jagged':
                    return (
                      Rr(5) +
                      Hr(-2.5, 2.5) +
                      Hr(2.5, 2.5) +
                      Hr(-2.5, 2.5) +
                      Hr(2.5, 2.5) +
                      Rr(-5)
                    );
                  case 'arrow':
                    return Hr(5, 5) + Hr(-5, 5);
                  case 'curved':
                    return Gr(5, 5, 0, 0, 1, e + 5, 10);
                  case 'straight':
                  default:
                    return Rr(5) + Br(10) + Rr(-5);
                }
              })(i || '', u)
            )
            .add(
              (function(t) {
                return Rr(-t);
              })(u)
            )
            .add(
              (function(t) {
                switch (t.toLowerCase()) {
                  case 'jagged':
                    return (
                      Rr(-5) +
                      Hr(2.5, -2.5) +
                      Hr(-2.5, -2.5) +
                      Hr(2.5, -2.5) +
                      Hr(-2.5, -2.5) +
                      Rr(5)
                    );
                  case 'arrow':
                    return Hr(-5, -5) + Hr(5, -5);
                  case 'curved':
                    return Gr(5, 5, 0, 0, 1, 5, 0);
                  case 'straight':
                  default:
                    return Rr(-5) + Br(-10) + Rr(5);
                }
              })(n || '')
            )
            .close();
        return dr({ d: c, fill: o, mask: l, filter: s });
      },
      Ur = function(t, e, r, n) {
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
              r = t.aliStart,
              n = t.aliEnd,
              i = t.end,
              o = t.residueWidth,
              a = Ge();
            return {
              maskId: a,
              maskElement: fr(
                {
                  id: a,
                  x: 0,
                  y: 0,
                  width: (i - e) * o,
                  height: 10,
                  fill: '#fff',
                },
                hr({
                  x: 0,
                  y: 0,
                  width: (r - e) * o,
                  height: 10,
                  opacity: 0.6,
                }),
                hr({
                  x: (r - e) * o,
                  y: 0,
                  width: (n - r) * o,
                  height: 10,
                  opacity: 1,
                }),
                hr({
                  x: (n - e) * o,
                  y: 0,
                  width: (i - n) * o,
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
        n(p.maskElement);
        var g = c,
          m = {};
        Array.isArray(g) &&
          (n((m = Nr(g, h)).gradientElement),
          (g = 'url(#'.concat(m.gradientId, ')')));
        var y = vr(
          {
            x: ((l - i) * e) / 2,
            y: 8,
            'text-anchor': 'middle',
            'font-size': 7.5,
            'font-family': 'Sans-Serif',
            fill: d || zr(Array.isArray(c) ? c[0] : c),
            opacity: 0,
          },
          f || ''
        );
        return (
          Ue(y).set('maxwidth', (l - i) * e),
          cr(
            null,
            Vr({
              start: i,
              end: l,
              startStyle: s,
              endStyle: u,
              residueWidth: e,
              fill: g,
              mask: 'url(#'.concat(v, ')'),
              filter: r && 'url(#'.concat(r, ')'),
            }),
            f ? y : null
          )
        );
      };
    function $r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
          (n = n.concat(
            Object.getOwnPropertySymbols(r).filter(function(t) {
              return Object.getOwnPropertyDescriptor(r, t).enumerable;
            })
          )),
          n.forEach(function(e) {
            Kr(t, e, r[e]);
          });
      }
      return t;
    }
    function Kr(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var qr = function(t, e) {
      var r = t.position,
        n = r.x,
        i = r.y,
        o = t.length,
        a = t.height,
        l = t.color,
        s = t.gradient,
        u = { x: n, y: i, width: o, height: a, opacity: 0.5 };
      if (!Array.isArray(l)) return hr($r({}, u, { fill: l || 'gray' }));
      var c = Nr(l, s),
        f = c.gradientId;
      return (
        e(c.gradientElement), hr($r({}, u, { fill: 'url(#'.concat(f, ')') }))
      );
    };
    function Yr(t, e) {
      return (
        (function(t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function(t, e) {
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = t[Symbol.iterator]();
              !(n = (a = l.next()).done) &&
              (r.push(a.value), !e || r.length !== e);
              n = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        })(t, e) ||
        (function() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        })()
      );
    }
    function Xr(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function Zr(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var Jr = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (window && (e.tooltip || e.metadata || r)) {
          var n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = t.querySelectorAll(':not(g)')[Symbol.iterator]();
              !(n = (a = l.next()).done);
              n = !0
            ) {
              a.value[Ve] = e;
            }
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
        }
      },
      Qr = (function() {
        function t(e) {
          var r = this,
            n = e.width,
            i = e.height,
            o = e.spotlight,
            a = void 0 === o || o;
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            Zr(this, '_addToDefs', function(t) {
              return r._defs.appendChild(t);
            }),
            Zr(this, 'drawMarkup', function(t, e, n) {
              if (t.end && !Number.isFinite(t.level)) {
                var i = new Set([0, 1, -1]),
                  o = !0,
                  a = !1,
                  l = void 0;
                try {
                  for (
                    var s, u = n[Symbol.iterator]();
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
                    o || null == u.return || u.return();
                  } finally {
                    if (a) throw l;
                  }
                }
                var f = Yr(i, 1)[0];
                t.level = f || 0;
              }
              var d = cr(
                { transform: 'translate('.concat(t.start * e, ', 10)') },
                Lr(t, e)
              );
              Ue(d).set('entity', 'markup'), Jr(d, t), r._canvas.appendChild(d);
            }),
            Zr(this, 'drawSequence', function(t) {
              var e = cr(
                { transform: 'translate(0 10)' },
                Or({
                  position: { x: 0, y: -2.5 },
                  length: t,
                  height: 5,
                  color: '#d8d8d8',
                })
              );
              Ue(e).set('entity', 'sequence'), r._canvas.appendChild(e);
            }),
            Zr(this, 'drawHit', function(t, e) {
              var n = cr(
                { transform: 'translate('.concat(t.tstart * e, ', 16)') },
                Mr({
                  position: { x: 0, y: 0 },
                  length: (t.tend - t.tstart) * e,
                  height: 2,
                  color: t.color,
                })
              );
              Ue(n).set('entity', 'hit'),
                Jr(n, t, !0),
                r._canvas.appendChild(n);
            }),
            Zr(this, 'drawRegion', function(t, e) {
              var n = cr(
                { transform: 'translate('.concat(t.start * e, ', 5)') },
                Ur(t, e, r._spotlight, r._addToDefs)
              );
              Ue(n).set('entity', 'region'), Jr(n, t), r._canvas.appendChild(n);
              var i = n.querySelector('[data-maxwidth]');
              i &&
                (i.getBBox().width <= +(Ue(i).get('maxwidth') - 0)
                  ? i.setAttribute('opacity', 1)
                  : i.parentElement && i.parentElement.removeChild(i));
            }),
            Zr(this, 'drawMotif', function(t, e) {
              var n = cr(
                { transform: 'translate('.concat(t.start * e, ', 6)') },
                qr(
                  {
                    position: { x: 0, y: 0 },
                    length: (t.end - t.start) * e,
                    height: 8,
                    color: t.color,
                    gradient: t.gradient,
                  },
                  r._addToDefs
                )
              );
              Ue(n).set('entity', 'motif'), Jr(n, t), r._canvas.appendChild(n);
            }),
            (this._spotlight = a && Ge()),
            (this._defs = sr(
              null,
              this._spotlight &&
                gr(
                  {
                    id: this._spotlight,
                    filterUnits: 'objectBoundingBox',
                    x: -0.1,
                    y: -0.1,
                    width: 5,
                    height: 5,
                  },
                  mr({
                    in: 'SourceAlpha',
                    stdDeviation: 1,
                    result: 'alpha_blur',
                  }),
                  yr(
                    {
                      in: 'alpha_blur',
                      surfaceScale: 5,
                      specularConstant: 1.5,
                      specularExponent: 12,
                      'lighting-color': '#ddd',
                      result: 'light',
                    },
                    br({ x: -100, y: -200, z: 100 })
                  ),
                  xr({ in: 'SourceGraphic', in2: 'light', operator: 'out' })
                )
            )),
            (this._canvas = ar(
              { width: n, height: i, viewBox: '0 0 '.concat(n, ' ').concat(i) },
              this._defs
            )),
            (this._canvas.style.width = ''.concat(2 * n, 'px')),
            (this._canvas.style.height = ''.concat(2 * i, 'px'));
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: 'canvas',
              get: function() {
                return this._canvas;
              },
            },
          ]) && Xr(e.prototype, r),
          n && Xr(e, n),
          t
        );
      })(),
      tn = function() {
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
      };
    r(209);
    function en(t) {
      return (en =
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
            })(t);
    }
    var rn = new Set([
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
      nn = /(^.*colo)u(r.*$)/i,
      on = /^f(alse)?$/i,
      an = function t(e) {
        for (var r = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
          var o = i[n],
            a = e[o],
            l = o,
            s = a;
          if (rn.has(l) && ((s = +s), isNaN(s)))
            throw new Error(
              'expected key '
                .concat(o, ' to be a number, not ')
                .concat(String(a), ')')
            );
          nn.test(l) && (l = l.replace(nn, '$1$2')),
            'display' === l && (s = 'string' == typeof s ? !on.test(s) : !!s),
            s &&
              (Array.isArray(s)
                ? (s = s.map(function(e) {
                    return e && 'object' === en(e) ? t(e) : e;
                  }))
                : 'object' === en(s) && (s = t(s))),
            (r[l] = s);
        }
        return r;
      };
    function ln(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function sn(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var un = function(t) {
        var e = t.hidden,
          r = t.display;
        return e || !(void 0 === r || r);
      },
      cn = (function() {
        function t() {
          var e = this,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = r.data,
            i = void 0 === n ? {} : n,
            o = r.parent,
            a = r.params,
            l = void 0 === a ? {} : a;
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            sn(this, '_draw', function() {
              var t = (e._data.markups || []).sort(function(t, e) {
                  return t.start - e.start;
                }),
                r = [],
                n = !1,
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
                  un(u) ||
                    (e._renderer.drawMarkup(
                      u,
                      e._params.image.width.residue,
                      r
                    ),
                    (n |= !(!u.tooltip && !u.metadata)),
                    u.end && r.push(u));
                }
              } catch (t) {
                (o = !0), (a = t);
              } finally {
                try {
                  i || null == s.return || s.return();
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
                  un(v) ||
                    (e._renderer.drawHit(v, e._params.image.width.residue),
                    (n = !0));
                }
              } catch (t) {
                (f = !0), (d = t);
              } finally {
                try {
                  c || null == p.return || p.return();
                } finally {
                  if (f) throw d;
                }
              }
              var g = !0,
                m = !1,
                y = void 0;
              try {
                for (
                  var b, x = (e._data.regions || [])[Symbol.iterator]();
                  !(g = (b = x.next()).done);
                  g = !0
                ) {
                  var w = b.value;
                  un(w) ||
                    (e._renderer.drawRegion(w, e._params.image.width.residue),
                    (n |= !(!w.tooltip && !w.metadata)));
                }
              } catch (t) {
                (m = !0), (y = t);
              } finally {
                try {
                  g || null == x.return || x.return();
                } finally {
                  if (m) throw y;
                }
              }
              var S = !0,
                C = !1,
                k = void 0;
              try {
                for (
                  var T, L = (e._data.motifs || [])[Symbol.iterator]();
                  !(S = (T = L.next()).done);
                  S = !0
                ) {
                  var O = T.value;
                  un(O) ||
                    (e._renderer.drawMotif(O, e._params.image.width.residue),
                    (n |= !(!O.tooltip && !O.metadata)));
                }
              } catch (t) {
                (C = !0), (k = t);
              } finally {
                try {
                  S || null == L.return || L.return();
                } finally {
                  if (C) throw k;
                }
              }
              n && (e._detach = ir().attachToCanvas(e._renderer.canvas));
            }),
            sn(this, '_createCanvas', function() {
              return (
                (e._renderer = new Qr({
                  width: e._computeWidth(e._data, e._params),
                  height: e._computeHeight(),
                })),
                e._renderer.canvas
              );
            }),
            sn(this, 'delete', function() {
              e._detach && (e._detach(), (e._detach = null)),
                e._parent.removeChild(e._canvas),
                (e._canvas = e._parent = null);
            }),
            (this._data = an(i)),
            (this._parent = o),
            (this._params = Re({}, tn(), l)),
            (this._canvas = this._createCanvas()),
            this._parent.appendChild(this._canvas),
            this._draw();
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: '_computeWidth',
              value: function(t, e) {
                var r = t.length,
                  n = void 0 === r ? 0 : r,
                  i = e.image,
                  o = i.width,
                  a = i.sequenceEndPadding;
                return n * o.residue + a;
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
                this._data = an(t);
                var e = this._canvas;
                return (
                  (this._canvas = this._createCanvas()),
                  this._parent.replaceChild(this._canvas, e),
                  this._draw(),
                  this._data
                );
              },
            },
          ]) && ln(e.prototype, r),
          n && ln(e, n),
          t
        );
      })();
    try {
      document.dispatchEvent(new CustomEvent('domainGfxReady', { detail: cn }));
    } catch (t) {}
    var fn = function() {
        return b.a.Date.now();
      },
      dn = '[object Symbol]';
    var hn = function(t) {
        return 'symbol' == typeof t || (Ht(t) && E(t) == dn);
      },
      pn = NaN,
      vn = /^\s+|\s+$/g,
      gn = /^[-+]0x[0-9a-f]+$/i,
      mn = /^0b[01]+$/i,
      yn = /^0o[0-7]+$/i,
      bn = parseInt;
    var xn = function(t) {
        if ('number' == typeof t) return t;
        if (hn(t)) return pn;
        if (N(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = N(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(vn, '');
        var r = mn.test(t);
        return r || yn.test(t)
          ? bn(t.slice(2), r ? 2 : 8)
          : gn.test(t)
          ? pn
          : +t;
      },
      wn = 'Expected a function',
      Sn = Math.max,
      Cn = Math.min;
    var kn,
      Tn = function(t, e, r) {
        var n,
          i,
          o,
          a,
          l,
          s,
          u = 0,
          c = !1,
          f = !1,
          d = !0;
        if ('function' != typeof t) throw new TypeError(wn);
        function h(e) {
          var r = n,
            o = i;
          return (n = i = void 0), (u = e), (a = t.apply(o, r));
        }
        function p(t) {
          var r = t - s;
          return void 0 === s || r >= e || r < 0 || (f && t - u >= o);
        }
        function v() {
          var t = fn();
          if (p(t)) return g(t);
          l = setTimeout(
            v,
            (function(t) {
              var r = e - (t - s);
              return f ? Cn(r, o - (t - u)) : r;
            })(t)
          );
        }
        function g(t) {
          return (l = void 0), d && n ? h(t) : ((n = i = void 0), a);
        }
        function m() {
          var t = fn(),
            r = p(t);
          if (((n = arguments), (i = this), (s = t), r)) {
            if (void 0 === l)
              return (function(t) {
                return (u = t), (l = setTimeout(v, e)), c ? h(t) : a;
              })(s);
            if (f) return (l = setTimeout(v, e)), h(s);
          }
          return void 0 === l && (l = setTimeout(v, e)), a;
        }
        return (
          (e = xn(e) || 0),
          N(r) &&
            ((c = !!r.leading),
            (o = (f = 'maxWait' in r) ? Sn(xn(r.maxWait) || 0, e) : o),
            (d = 'trailing' in r ? !!r.trailing : d)),
          (m.cancel = function() {
            void 0 !== l && clearTimeout(l), (u = 0), (n = s = i = l = void 0);
          }),
          (m.flush = function() {
            return void 0 === l ? a : g(fn());
          }),
          m
        );
      },
      Ln = r(147),
      On = document.querySelector('.data textarea'),
      Mn = document.querySelector('.visu'),
      _n = document.querySelector('.invalid'),
      An = function(t) {
        var e,
          r = t.getValue();
        try {
          e = JSON.parse(r);
        } catch (t) {
          return _n.classList.remove('hidden'), void console.error(t);
        }
        kn ? (kn.data = e) : (kn = new cn({ parent: Mn, data: e })),
          _n.classList.add('hidden');
      };
    On.value = JSON.stringify(Ln, null, 2);
    var En = i.a.fromTextArea(On, { lineNumbers: !0 });
    En.on('change', Tn(An, 1e3)), An(En);
  },
]);
//# sourceMappingURL=domain-gfx.legacy.js.map
