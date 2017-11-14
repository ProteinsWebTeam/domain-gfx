var DomainGfx = (function(e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var i = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  var r = {};
  return (
    (t.m = e),
    (t.c = r),
    (t.d = function(e, r, n) {
      t.o(e, r) ||
        Object.defineProperty(e, r, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ''),
    t((t.s = 5))
  );
})([
  function(e, t, r) {
    'use strict';
    var n = r(3),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = n.a || i || Function('return this')();
    t.a = o;
  },
  function(e, t) {
    e.exports = function(e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
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
          Object.defineProperty(t, 'exports', { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function(e, t, r) {
    !(function(t, r) {
      e.exports = r();
    })(0, function() {
      'use strict';
      function e(e) {
        return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
      }
      function t(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function r(e, r) {
        return t(e).appendChild(r);
      }
      function n(e, t, r, n) {
        var i = document.createElement(e);
        if (
          (r && (i.className = r),
          n && (i.style.cssText = n),
          'string' == typeof t)
        )
          i.appendChild(document.createTextNode(t));
        else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
        return i;
      }
      function i(e, t, r, i) {
        var o = n(e, t, r, i);
        return o.setAttribute('role', 'presentation'), o;
      }
      function o(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
          return e.contains(t);
        do {
          if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
        } while ((t = t.parentNode));
      }
      function a() {
        var e;
        try {
          e = document.activeElement;
        } catch (t) {
          e = document.body || null;
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
          e = e.shadowRoot.activeElement;
        return e;
      }
      function l(t, r) {
        var n = t.className;
        e(r).test(n) || (t.className += (n ? ' ' : '') + r);
      }
      function s(t, r) {
        for (var n = t.split(' '), i = 0; i < n.length; i++)
          n[i] && !e(n[i]).test(r) && (r += ' ' + n[i]);
        return r;
      }
      function u(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, t);
        };
      }
      function c(e, t, r) {
        t || (t = {});
        for (var n in e)
          !e.hasOwnProperty(n) ||
            (!1 === r && t.hasOwnProperty(n)) ||
            (t[n] = e[n]);
        return t;
      }
      function f(e, t, r, n, i) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
        for (var o = n || 0, a = i || 0; ; ) {
          var l = e.indexOf('\t', o);
          if (l < 0 || l >= t) return a + (t - o);
          (a += l - o), (a += r - a % r), (o = l + 1);
        }
      }
      function d(e, t) {
        for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
        return -1;
      }
      function h(e, t, r) {
        for (var n = 0, i = 0; ; ) {
          var o = e.indexOf('\t', n);
          -1 == o && (o = e.length);
          var a = o - n;
          if (o == e.length || i + a >= t) return n + Math.min(a, t - i);
          if (((i += o - n), (i += r - i % r), (n = o + 1), i >= t)) return n;
        }
      }
      function p(e) {
        for (; bo.length <= e; ) bo.push(g(bo) + ' ');
        return bo[e];
      }
      function g(e) {
        return e[e.length - 1];
      }
      function v(e, t) {
        for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
        return r;
      }
      function m() {}
      function y(e, t) {
        var r;
        return (
          Object.create
            ? (r = Object.create(e))
            : ((m.prototype = e), (r = new m())),
          t && c(t, r),
          r
        );
      }
      function b(e) {
        return (
          /\w/.test(e) ||
          (e > '' && (e.toUpperCase() != e.toLowerCase() || wo.test(e)))
        );
      }
      function w(e, t) {
        return t ? !!(t.source.indexOf('\\w') > -1 && b(e)) || t.test(e) : b(e);
      }
      function x(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
        return !0;
      }
      function C(e) {
        return e.charCodeAt(0) >= 768 && xo.test(e);
      }
      function S(e, t, r) {
        for (; (r < 0 ? t > 0 : t < e.length) && C(e.charAt(t)); ) t += r;
        return t;
      }
      function k(e, t, r) {
        for (var n = t > r ? -1 : 1; ; ) {
          if (t == r) return t;
          var i = (t + r) / 2,
            o = n < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == t) return e(o) ? t : r;
          e(o) ? (r = o) : (t = o + n);
        }
      }
      function L(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
          throw new Error(
            'There is no line ' + (t + e.first) + ' in the document.'
          );
        for (var r = e; !r.lines; )
          for (var n = 0; ; ++n) {
            var i = r.children[n],
              o = i.chunkSize();
            if (t < o) {
              r = i;
              break;
            }
            t -= o;
          }
        return r.lines[t];
      }
      function T(e, t, r) {
        var n = [],
          i = t.line;
        return (
          e.iter(t.line, r.line + 1, function(e) {
            var o = e.text;
            i == r.line && (o = o.slice(0, r.ch)),
              i == t.line && (o = o.slice(t.ch)),
              n.push(o),
              ++i;
          }),
          n
        );
      }
      function M(e, t, r) {
        var n = [];
        return (
          e.iter(t, r, function(e) {
            n.push(e.text);
          }),
          n
        );
      }
      function O(e, t) {
        var r = t - e.height;
        if (r) for (var n = e; n; n = n.parent) n.height += r;
      }
      function A(e) {
        if (null == e.parent) return null;
        for (
          var t = e.parent, r = d(t.lines, e), n = t.parent;
          n;
          t = n, n = n.parent
        )
          for (var i = 0; n.children[i] != t; ++i)
            r += n.children[i].chunkSize();
        return r + t.first;
      }
      function _(e, t) {
        var r = e.first;
        e: do {
          for (var n = 0; n < e.children.length; ++n) {
            var i = e.children[n],
              o = i.height;
            if (t < o) {
              e = i;
              continue e;
            }
            (t -= o), (r += i.chunkSize());
          }
          return r;
        } while (!e.lines);
        for (var a = 0; a < e.lines.length; ++a) {
          var l = e.lines[a].height;
          if (t < l) break;
          t -= l;
        }
        return r + a;
      }
      function N(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function E(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function D(e, t, r) {
        if ((void 0 === r && (r = null), !(this instanceof D)))
          return new D(e, t, r);
        (this.line = e), (this.ch = t), (this.sticky = r);
      }
      function W(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function P(e, t) {
        return e.sticky == t.sticky && 0 == W(e, t);
      }
      function H(e) {
        return D(e.line, e.ch);
      }
      function F(e, t) {
        return W(e, t) < 0 ? t : e;
      }
      function z(e, t) {
        return W(e, t) < 0 ? e : t;
      }
      function j(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function I(e, t) {
        if (t.line < e.first) return D(e.first, 0);
        var r = e.first + e.size - 1;
        return t.line > r
          ? D(r, L(e, r).text.length)
          : (function(e, t) {
              var r = e.ch;
              return null == r || r > t
                ? D(e.line, t)
                : r < 0 ? D(e.line, 0) : e;
            })(t, L(e, t.line).text.length);
      }
      function R(e, t) {
        for (var r = [], n = 0; n < t.length; n++) r[n] = I(e, t[n]);
        return r;
      }
      function B(e, t, r) {
        (this.marker = e), (this.from = t), (this.to = r);
      }
      function V(e, t) {
        if (e)
          for (var r = 0; r < e.length; ++r) {
            var n = e[r];
            if (n.marker == t) return n;
          }
      }
      function U(e, t) {
        for (var r, n = 0; n < e.length; ++n)
          e[n] != t && (r || (r = [])).push(e[n]);
        return r;
      }
      function G(e, t) {
        if (t.full) return null;
        var r = N(e, t.from.line) && L(e, t.from.line).markedSpans,
          n = N(e, t.to.line) && L(e, t.to.line).markedSpans;
        if (!r && !n) return null;
        var i = t.from.ch,
          o = t.to.ch,
          a = 0 == W(t.from, t.to),
          l = (function(e, t, r) {
            var n;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  a = o.marker;
                if (
                  null == o.from ||
                  (a.inclusiveLeft ? o.from <= t : o.from < t) ||
                  (o.from == t &&
                    'bookmark' == a.type &&
                    (!r || !o.marker.insertLeft))
                ) {
                  var l =
                    null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                  (n || (n = [])).push(new B(a, o.from, l ? null : o.to));
                }
              }
            return n;
          })(r, i, a),
          s = (function(e, t, r) {
            var n;
            if (e)
              for (var i = 0; i < e.length; ++i) {
                var o = e[i],
                  a = o.marker;
                if (
                  null == o.to ||
                  (a.inclusiveRight ? o.to >= t : o.to > t) ||
                  (o.from == t &&
                    'bookmark' == a.type &&
                    (!r || o.marker.insertLeft))
                ) {
                  var l =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= t : o.from < t);
                  (n || (n = [])).push(
                    new B(
                      a,
                      l ? null : o.from - t,
                      null == o.to ? null : o.to - t
                    )
                  );
                }
              }
            return n;
          })(n, o, a),
          u = 1 == t.text.length,
          c = g(t.text).length + (u ? i : 0);
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
            b = t.text.length - 2;
          if (b > 0 && l)
            for (var w = 0; w < l.length; ++w)
              null == l[w].to &&
                (y || (y = [])).push(new B(l[w].marker, null, null));
          for (var x = 0; x < b; ++x) m.push(y);
          m.push(s);
        }
        return m;
      }
      function q(e) {
        for (var t = 0; t < e.length; ++t) {
          var r = e[t];
          null != r.from &&
            r.from == r.to &&
            !1 !== r.marker.clearWhenEmpty &&
            e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function K(e) {
        var t = e.markedSpans;
        if (t) {
          for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function $(e, t) {
        if (t) {
          for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function X(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function Y(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function Z(e, t) {
        var r = e.lines.length - t.lines.length;
        if (0 != r) return r;
        var n = e.find(),
          i = t.find(),
          o = W(n.from, i.from) || X(e) - X(t);
        if (o) return -o;
        var a = W(n.to, i.to) || Y(e) - Y(t);
        return a || t.id - e.id;
      }
      function Q(e, t) {
        var r,
          n = So && e.markedSpans;
        if (n)
          for (var i = void 0, o = 0; o < n.length; ++o)
            (i = n[o]).marker.collapsed &&
              null == (t ? i.from : i.to) &&
              (!r || Z(r, i.marker) < 0) &&
              (r = i.marker);
        return r;
      }
      function J(e) {
        return Q(e, !0);
      }
      function ee(e) {
        return Q(e, !1);
      }
      function te(e, t, r, n, i) {
        var o = L(e, t),
          a = So && o.markedSpans;
        if (a)
          for (var l = 0; l < a.length; ++l) {
            var s = a[l];
            if (s.marker.collapsed) {
              var u = s.marker.find(0),
                c = W(u.from, r) || X(s.marker) - X(i),
                f = W(u.to, n) || Y(s.marker) - Y(i);
              if (
                !((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) &&
                ((c <= 0 &&
                  (s.marker.inclusiveRight && i.inclusiveLeft
                    ? W(u.to, r) >= 0
                    : W(u.to, r) > 0)) ||
                  (c >= 0 &&
                    (s.marker.inclusiveRight && i.inclusiveLeft
                      ? W(u.from, n) <= 0
                      : W(u.from, n) < 0)))
              )
                return !0;
            }
          }
      }
      function re(e) {
        for (var t; (t = J(e)); ) e = t.find(-1, !0).line;
        return e;
      }
      function ne(e, t) {
        var r = L(e, t),
          n = re(r);
        return r == n ? t : A(n);
      }
      function ie(e, t) {
        if (t > e.lastLine()) return t;
        var r,
          n = L(e, t);
        if (!oe(e, n)) return t;
        for (; (r = ee(n)); ) n = r.find(1, !0).line;
        return A(n) + 1;
      }
      function oe(e, t) {
        var r = So && t.markedSpans;
        if (r)
          for (var n = void 0, i = 0; i < r.length; ++i)
            if ((n = r[i]).marker.collapsed) {
              if (null == n.from) return !0;
              if (
                !n.marker.widgetNode &&
                0 == n.from &&
                n.marker.inclusiveLeft &&
                ae(e, t, n)
              )
                return !0;
            }
      }
      function ae(e, t, r) {
        if (null == r.to) {
          var n = r.marker.find(1, !0);
          return ae(e, n.line, V(n.line.markedSpans, r.marker));
        }
        if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
          if (
            (i = t.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == r.to &&
            (null == i.to || i.to != r.from) &&
            (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
            ae(e, t, i)
          )
            return !0;
      }
      function le(e) {
        for (
          var t = 0, r = (e = re(e)).parent, n = 0;
          n < r.lines.length;
          ++n
        ) {
          var i = r.lines[n];
          if (i == e) break;
          t += i.height;
        }
        for (var o = r.parent; o; r = o, o = r.parent)
          for (var a = 0; a < o.children.length; ++a) {
            var l = o.children[a];
            if (l == r) break;
            t += l.height;
          }
        return t;
      }
      function se(e) {
        if (0 == e.height) return 0;
        for (var t, r = e.text.length, n = e; (t = J(n)); ) {
          var i = t.find(0, !0);
          (n = i.from.line), (r += i.from.ch - i.to.ch);
        }
        for (n = e; (t = ee(n)); ) {
          var o = t.find(0, !0);
          (r -= n.text.length - o.from.ch),
            (r += (n = o.to.line).text.length - o.to.ch);
        }
        return r;
      }
      function ue(e) {
        var t = e.display,
          r = e.doc;
        (t.maxLine = L(r, r.first)),
          (t.maxLineLength = se(t.maxLine)),
          (t.maxLineChanged = !0),
          r.iter(function(e) {
            var r = se(e);
            r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e));
          });
      }
      function ce(e, t, r) {
        var n;
        ko = null;
        for (var i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.from < t && o.to > t) return i;
          o.to == t && (o.from != o.to && 'before' == r ? (n = i) : (ko = i)),
            o.from == t &&
              (o.from != o.to && 'before' != r ? (n = i) : (ko = i));
        }
        return null != n ? n : ko;
      }
      function fe(e, t) {
        var r = e.order;
        return null == r && (r = e.order = Lo(e.text, t)), r;
      }
      function de(e, t) {
        return (e._handlers && e._handlers[t]) || To;
      }
      function he(e, t, r) {
        if (e.removeEventListener) e.removeEventListener(t, r, !1);
        else if (e.detachEvent) e.detachEvent('on' + t, r);
        else {
          var n = e._handlers,
            i = n && n[t];
          if (i) {
            var o = d(i, r);
            o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function pe(e, t) {
        var r = de(e, t);
        if (r.length)
          for (
            var n = Array.prototype.slice.call(arguments, 2), i = 0;
            i < r.length;
            ++i
          )
            r[i].apply(null, n);
      }
      function ge(e, t, r) {
        return (
          'string' == typeof t &&
            (t = {
              type: t,
              preventDefault: function() {
                this.defaultPrevented = !0;
              },
            }),
          pe(e, r || t.type, e, t),
          xe(t) || t.codemirrorIgnore
        );
      }
      function ve(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (
            var r =
                e.curOp.cursorActivityHandlers ||
                (e.curOp.cursorActivityHandlers = []),
              n = 0;
            n < t.length;
            ++n
          )
            -1 == d(r, t[n]) && r.push(t[n]);
      }
      function me(e, t) {
        return de(e, t).length > 0;
      }
      function ye(e) {
        (e.prototype.on = function(e, t) {
          Mo(this, e, t);
        }),
          (e.prototype.off = function(e, t) {
            he(this, e, t);
          });
      }
      function be(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
      }
      function we(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
      }
      function xe(e) {
        return null != e.defaultPrevented
          ? e.defaultPrevented
          : 0 == e.returnValue;
      }
      function Ce(e) {
        be(e), we(e);
      }
      function Se(e) {
        return e.target || e.srcElement;
      }
      function ke(e) {
        var t = e.which;
        return (
          null == t &&
            (1 & e.button
              ? (t = 1)
              : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
          to && e.ctrlKey && 1 == t && (t = 3),
          t
        );
      }
      function Le(e) {
        if (null == fo) {
          var t = n('span', '​');
          r(e, n('span', [t, document.createTextNode('x')])),
            0 != e.firstChild.offsetHeight &&
              (fo =
                t.offsetWidth <= 1 && t.offsetHeight > 2 && !(Vi && Ui < 8));
        }
        var i = fo
          ? n('span', '​')
          : n(
              'span',
              ' ',
              null,
              'display: inline-block; width: 1px; margin-right: -1px'
            );
        return i.setAttribute('cm-text', ''), i;
      }
      function Te(e) {
        if (null != ho) return ho;
        var n = r(e, document.createTextNode('AخA')),
          i = oo(n, 0, 1).getBoundingClientRect(),
          o = oo(n, 1, 2).getBoundingClientRect();
        return t(e), !(!i || i.left == i.right) && (ho = o.right - i.right < 3);
      }
      function Me(e) {
        if ('string' == typeof e && Wo.hasOwnProperty(e)) e = Wo[e];
        else if (e && 'string' == typeof e.name && Wo.hasOwnProperty(e.name)) {
          var t = Wo[e.name];
          'string' == typeof t && (t = { name: t }),
            ((e = y(t, e)).name = t.name);
        } else {
          if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Me('application/xml');
          if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Me('application/json');
        }
        return 'string' == typeof e ? { name: e } : e || { name: 'null' };
      }
      function Oe(e, t) {
        t = Me(t);
        var r = Do[t.name];
        if (!r) return Oe(e, 'text/plain');
        var n = r(e, t);
        if (Po.hasOwnProperty(t.name)) {
          var i = Po[t.name];
          for (var o in i)
            i.hasOwnProperty(o) &&
              (n.hasOwnProperty(o) && (n['_' + o] = n[o]), (n[o] = i[o]));
        }
        if (
          ((n.name = t.name),
          t.helperType && (n.helperType = t.helperType),
          t.modeProps)
        )
          for (var a in t.modeProps) n[a] = t.modeProps[a];
        return n;
      }
      function Ae(e, t) {
        c(t, Po.hasOwnProperty(e) ? Po[e] : (Po[e] = {}));
      }
      function _e(e, t) {
        if (!0 === t) return t;
        if (e.copyState) return e.copyState(t);
        var r = {};
        for (var n in t) {
          var i = t[n];
          i instanceof Array && (i = i.concat([])), (r[n] = i);
        }
        return r;
      }
      function Ne(e, t) {
        for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e; )
          (t = r.state), (e = r.mode);
        return r || { mode: e, state: t };
      }
      function Ee(e, t, r) {
        return !e.startState || e.startState(t, r);
      }
      function De(e, t, r, n) {
        var i = [e.state.modeGen],
          o = {};
        Re(
          e,
          t.text,
          e.doc.mode,
          r,
          function(e, t) {
            return i.push(e, t);
          },
          o,
          n
        );
        for (
          var a = r.state,
            l = function(n) {
              r.baseTokens = i;
              var l = e.state.overlays[n],
                s = 1,
                u = 0;
              (r.state = !0),
                Re(
                  e,
                  t.text,
                  l.mode,
                  r,
                  function(e, t) {
                    for (var r = s; u < e; ) {
                      var n = i[s];
                      n > e && i.splice(s, 1, e, i[s + 1], n),
                        (s += 2),
                        (u = Math.min(e, n));
                    }
                    if (t)
                      if (l.opaque)
                        i.splice(r, s - r, e, 'overlay ' + t), (s = r + 2);
                      else
                        for (; r < s; r += 2) {
                          var o = i[r + 1];
                          i[r + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                        }
                  },
                  o
                ),
                (r.state = a),
                (r.baseTokens = null),
                (r.baseTokenPos = 1);
            },
            s = 0;
          s < e.state.overlays.length;
          ++s
        )
          l(s);
        return { styles: i, classes: o.bgClass || o.textClass ? o : null };
      }
      function We(e, t, r) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var n = Pe(e, A(t)),
            i =
              t.text.length > e.options.maxHighlightLength &&
              _e(e.doc.mode, n.state),
            o = De(e, t, n);
          i && (n.state = i),
            (t.stateAfter = n.save(!i)),
            (t.styles = o.styles),
            o.classes
              ? (t.styleClasses = o.classes)
              : t.styleClasses && (t.styleClasses = null),
            r === e.doc.highlightFrontier &&
              (e.doc.modeFrontier = Math.max(
                e.doc.modeFrontier,
                ++e.doc.highlightFrontier
              ));
        }
        return t.styles;
      }
      function Pe(e, t, r) {
        var n = e.doc,
          i = e.display;
        if (!n.mode.startState) return new zo(n, !0, t);
        var o = (function(e, t, r) {
            for (
              var n,
                i,
                o = e.doc,
                a = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                l = t;
              l > a;
              --l
            ) {
              if (l <= o.first) return o.first;
              var s = L(o, l - 1),
                u = s.stateAfter;
              if (
                u &&
                (!r ||
                  l + (u instanceof Fo ? u.lookAhead : 0) <= o.modeFrontier)
              )
                return l;
              var c = f(s.text, null, e.options.tabSize);
              (null == i || n > c) && ((i = l - 1), (n = c));
            }
            return i;
          })(e, t, r),
          a = o > n.first && L(n, o - 1).stateAfter,
          l = a ? zo.fromSaved(n, a, o) : new zo(n, Ee(n.mode), o);
        return (
          n.iter(o, t, function(r) {
            He(e, r.text, l);
            var n = l.line;
            (r.stateAfter =
              n == t - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo)
                ? l.save()
                : null),
              l.nextLine();
          }),
          r && (n.modeFrontier = l.line),
          l
        );
      }
      function He(e, t, r, n) {
        var i = e.doc.mode,
          o = new Ho(t, e.options.tabSize, r);
        for (o.start = o.pos = n || 0, '' == t && Fe(i, r.state); !o.eol(); )
          ze(i, o, r.state), (o.start = o.pos);
      }
      function Fe(e, t) {
        if (e.blankLine) return e.blankLine(t);
        if (e.innerMode) {
          var r = Ne(e, t);
          return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
        }
      }
      function ze(e, t, r, n) {
        for (var i = 0; i < 10; i++) {
          n && (n[0] = Ne(e, r).mode);
          var o = e.token(t, r);
          if (t.pos > t.start) return o;
        }
        throw new Error('Mode ' + e.name + ' failed to advance stream.');
      }
      function je(e, t, r, n) {
        var i,
          o,
          a = e.doc,
          l = a.mode,
          s = L(a, (t = I(a, t)).line),
          u = Pe(e, t.line, r),
          c = new Ho(s.text, e.options.tabSize, u);
        for (n && (o = []); (n || c.pos < t.ch) && !c.eol(); )
          (c.start = c.pos),
            (i = ze(l, c, u.state)),
            n && o.push(new jo(c, i, _e(a.mode, u.state)));
        return n ? o : new jo(c, i, u.state);
      }
      function Ie(e, t) {
        if (e)
          for (;;) {
            var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!r) break;
            e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
            var n = r[1] ? 'bgClass' : 'textClass';
            null == t[n]
              ? (t[n] = r[2])
              : new RegExp('(?:^|s)' + r[2] + '(?:$|s)').test(t[n]) ||
                (t[n] += ' ' + r[2]);
          }
        return e;
      }
      function Re(e, t, r, n, i, o, a) {
        var l = r.flattenSpans;
        null == l && (l = e.options.flattenSpans);
        var s,
          u = 0,
          c = null,
          f = new Ho(t, e.options.tabSize, n),
          d = e.options.addModeClass && [null];
        for ('' == t && Ie(Fe(r, n.state), o); !f.eol(); ) {
          if (
            (f.pos > e.options.maxHighlightLength
              ? ((l = !1),
                a && He(e, t, n, f.pos),
                (f.pos = t.length),
                (s = null))
              : (s = Ie(ze(r, f, n.state, d), o)),
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
      function Be(e) {
        (e.parent = null), K(e);
      }
      function Ve(e, t) {
        if (!e || /^\s*$/.test(e)) return null;
        var r = t.addModeClass ? Vo : Bo;
        return r[e] || (r[e] = e.replace(/\S+/g, 'cm-$&'));
      }
      function Ue(e, t) {
        var r = i('span', null, null, Gi ? 'padding-right: .1px' : null),
          n = {
            pre: i('pre', [r], 'CodeMirror-line'),
            content: r,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: (Vi || Gi) && e.getOption('lineWrapping'),
          };
        t.measure = {};
        for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
          var a = o ? t.rest[o - 1] : t.line,
            l = void 0;
          (n.pos = 0),
            (n.addToken = qe),
            Te(e.display.measure) &&
              (l = fe(a, e.doc.direction)) &&
              (n.addToken = (function(e, t) {
                return function(r, n, i, o, a, l, s) {
                  i = i ? i + ' cm-force-border' : 'cm-force-border';
                  for (var u = r.pos, c = u + n.length; ; ) {
                    for (
                      var f = void 0, d = 0;
                      d < t.length && !((f = t[d]).to > u && f.from <= u);
                      d++
                    );
                    if (f.to >= c) return e(r, n, i, o, a, l, s);
                    e(r, n.slice(0, f.to - u), i, o, null, l, s),
                      (o = null),
                      (n = n.slice(f.to - u)),
                      (u = f.to);
                  }
                };
              })(n.addToken, l)),
            (n.map = []);
          !(function(e, t, r) {
            var n = e.markedSpans,
              i = e.text,
              o = 0;
            if (!n) {
              for (var a = 1; a < r.length; a += 2)
                t.addToken(
                  t,
                  i.slice(o, (o = r[a])),
                  Ve(r[a + 1], t.cm.options)
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
                g = 0,
                v = 1,
                m = '',
                y = 0;
              ;

            ) {
              if (y == g) {
                (u = c = f = d = s = ''), (h = null), (y = 1 / 0);
                for (var b = [], w = void 0, x = 0; x < n.length; ++x) {
                  var C = n[x],
                    S = C.marker;
                  'bookmark' == S.type && C.from == g && S.widgetNode
                    ? b.push(S)
                    : C.from <= g &&
                      (null == C.to ||
                        C.to > g ||
                        (S.collapsed && C.to == g && C.from == g))
                      ? (null != C.to &&
                          C.to != g &&
                          y > C.to &&
                          ((y = C.to), (c = '')),
                        S.className && (u += ' ' + S.className),
                        S.css && (s = (s ? s + ';' : '') + S.css),
                        S.startStyle &&
                          C.from == g &&
                          (f += ' ' + S.startStyle),
                        S.endStyle &&
                          C.to == y &&
                          (w || (w = [])).push(S.endStyle, C.to),
                        S.title && !d && (d = S.title),
                        S.collapsed && (!h || Z(h.marker, S) < 0) && (h = C))
                      : C.from > g && y > C.from && (y = C.from);
                }
                if (w)
                  for (var k = 0; k < w.length; k += 2)
                    w[k + 1] == y && (c += ' ' + w[k]);
                if (!h || h.from == g)
                  for (var L = 0; L < b.length; ++L) Ke(t, 0, b[L]);
                if (h && (h.from || 0) == g) {
                  if (
                    (Ke(
                      t,
                      (null == h.to ? p + 1 : h.to) - g,
                      h.marker,
                      null == h.from
                    ),
                    null == h.to)
                  )
                    return;
                  h.to == g && (h = !1);
                }
              }
              if (g >= p) break;
              for (var T = Math.min(p, y); ; ) {
                if (m) {
                  var M = g + m.length;
                  if (!h) {
                    var O = M > T ? m.slice(0, T - g) : m;
                    t.addToken(
                      t,
                      O,
                      l ? l + u : u,
                      f,
                      g + O.length == y ? c : '',
                      d,
                      s
                    );
                  }
                  if (M >= T) {
                    (m = m.slice(T - g)), (g = T);
                    break;
                  }
                  (g = M), (f = '');
                }
                (m = i.slice(o, (o = r[v++]))), (l = Ve(r[v++], t.cm.options));
              }
            }
          })(a, n, We(e, a, t != e.display.externalMeasured && A(a))),
            a.styleClasses &&
              (a.styleClasses.bgClass &&
                (n.bgClass = s(a.styleClasses.bgClass, n.bgClass || '')),
              a.styleClasses.textClass &&
                (n.textClass = s(a.styleClasses.textClass, n.textClass || ''))),
            0 == n.map.length &&
              n.map.push(0, 0, n.content.appendChild(Le(e.display.measure))),
            0 == o
              ? ((t.measure.map = n.map), (t.measure.cache = {}))
              : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (Gi) {
          var u = n.content.lastChild;
          (/\bcm-tab\b/.test(u.className) ||
            (u.querySelector && u.querySelector('.cm-tab'))) &&
            (n.content.className = 'cm-tab-wrap-hack');
        }
        return (
          pe(e, 'renderLine', e, t.line, n.pre),
          n.pre.className &&
            (n.textClass = s(n.pre.className, n.textClass || '')),
          n
        );
      }
      function Ge(e) {
        var t = n('span', '•', 'cm-invalidchar');
        return (
          (t.title = '\\u' + e.charCodeAt(0).toString(16)),
          t.setAttribute('aria-label', t.title),
          t
        );
      }
      function qe(e, t, r, i, o, a, l) {
        if (t) {
          var s,
            u = e.splitSpaces
              ? (function(e, t) {
                  if (e.length > 1 && !/ {2}/.test(e)) return e;
                  for (var r = t, n = '', i = 0; i < e.length; i++) {
                    var o = e.charAt(i);
                    ' ' != o ||
                      !r ||
                      (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                      (o = ' '),
                      (n += o),
                      (r = ' ' == o);
                  }
                  return n;
                })(t, e.trailingSpace)
              : t,
            c = e.cm.state.specialChars,
            f = !1;
          if (c.test(t)) {
            s = document.createDocumentFragment();
            for (var d = 0; ; ) {
              c.lastIndex = d;
              var h = c.exec(t),
                g = h ? h.index - d : t.length - d;
              if (g) {
                var v = document.createTextNode(u.slice(d, d + g));
                Vi && Ui < 9 ? s.appendChild(n('span', [v])) : s.appendChild(v),
                  e.map.push(e.pos, e.pos + g, v),
                  (e.col += g),
                  (e.pos += g);
              }
              if (!h) break;
              d += g + 1;
              var m = void 0;
              if ('\t' == h[0]) {
                var y = e.cm.options.tabSize,
                  b = y - e.col % y;
                (m = s.appendChild(n('span', p(b), 'cm-tab'))).setAttribute(
                  'role',
                  'presentation'
                ),
                  m.setAttribute('cm-text', '\t'),
                  (e.col += b);
              } else
                '\r' == h[0] || '\n' == h[0]
                  ? ((m = s.appendChild(
                      n('span', '\r' == h[0] ? '␍' : '␤', 'cm-invalidchar')
                    )).setAttribute('cm-text', h[0]),
                    (e.col += 1))
                  : ((m = e.cm.options.specialCharPlaceholder(
                      h[0]
                    )).setAttribute('cm-text', h[0]),
                    Vi && Ui < 9
                      ? s.appendChild(n('span', [m]))
                      : s.appendChild(m),
                    (e.col += 1));
              e.map.push(e.pos, e.pos + 1, m), e.pos++;
            }
          } else
            (e.col += t.length),
              (s = document.createTextNode(u)),
              e.map.push(e.pos, e.pos + t.length, s),
              Vi && Ui < 9 && (f = !0),
              (e.pos += t.length);
          if (
            ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
            r || i || o || f || l)
          ) {
            var w = r || '';
            i && (w += i), o && (w += o);
            var x = n('span', [s], w, l);
            return a && (x.title = a), e.content.appendChild(x);
          }
          e.content.appendChild(s);
        }
      }
      function Ke(e, t, r, n) {
        var i = !n && r.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
          !n &&
            e.cm.display.input.needsContentAttribute &&
            (i || (i = e.content.appendChild(document.createElement('span'))),
            i.setAttribute('cm-marker', r.id)),
          i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
          (e.pos += t),
          (e.trailingSpace = !1);
      }
      function $e(e, t, r) {
        (this.line = t),
          (this.rest = (function(e) {
            for (var t, r; (t = ee(e)); )
              (e = t.find(1, !0).line), (r || (r = [])).push(e);
            return r;
          })(t)),
          (this.size = this.rest ? A(g(this.rest)) - r + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = oe(e, t));
      }
      function Xe(e, t, r) {
        for (var n, i = [], o = t; o < r; o = n) {
          var a = new $e(e.doc, L(e.doc, o), o);
          (n = o + a.size), i.push(a);
        }
        return i;
      }
      function Ye(e, t) {
        var r = de(e, t);
        if (r.length) {
          var n,
            i = Array.prototype.slice.call(arguments, 2);
          Uo
            ? (n = Uo.delayedCallbacks)
            : Go ? (n = Go) : ((n = Go = []), setTimeout(Ze, 0));
          for (
            var o = function(e) {
                n.push(function() {
                  return r[e].apply(null, i);
                });
              },
              a = 0;
            a < r.length;
            ++a
          )
            o(a);
        }
      }
      function Ze() {
        var e = Go;
        Go = null;
        for (var t = 0; t < e.length; ++t) e[t]();
      }
      function Qe(e, t, r, n) {
        for (var i = 0; i < t.changes.length; i++) {
          var o = t.changes[i];
          'text' == o
            ? (function(e, t) {
                var r = t.text.className,
                  n = et(e, t);
                t.text == t.node && (t.node = n.pre);
                t.text.parentNode.replaceChild(n.pre, t.text),
                  (t.text = n.pre),
                  n.bgClass != t.bgClass || n.textClass != t.textClass
                    ? ((t.bgClass = n.bgClass),
                      (t.textClass = n.textClass),
                      tt(e, t))
                    : r && (t.text.className = r);
              })(e, t)
            : 'gutter' == o
              ? rt(e, t, r, n)
              : 'class' == o
                ? tt(e, t)
                : 'widget' == o &&
                  (function(e, t, r) {
                    t.alignable && (t.alignable = null);
                    for (var n = t.node.firstChild, i = void 0; n; n = i)
                      (i = n.nextSibling),
                        'CodeMirror-linewidget' == n.className &&
                          t.node.removeChild(n);
                    it(e, t, r);
                  })(e, t, n);
        }
        t.changes = null;
      }
      function Je(e) {
        return (
          e.node == e.text &&
            ((e.node = n('div', null, null, 'position: relative')),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            Vi && Ui < 8 && (e.node.style.zIndex = 2)),
          e.node
        );
      }
      function et(e, t) {
        var r = e.display.externalMeasured;
        return r && r.line == t.line
          ? ((e.display.externalMeasured = null),
            (t.measure = r.measure),
            r.built)
          : Ue(e, t);
      }
      function tt(e, t) {
        !(function(e, t) {
          var r = t.bgClass
            ? t.bgClass + ' ' + (t.line.bgClass || '')
            : t.line.bgClass;
          if ((r && (r += ' CodeMirror-linebackground'), t.background))
            r
              ? (t.background.className = r)
              : (t.background.parentNode.removeChild(t.background),
                (t.background = null));
          else if (r) {
            var i = Je(t);
            (t.background = i.insertBefore(n('div', null, r), i.firstChild)),
              e.display.input.setUneditable(t.background);
          }
        })(e, t),
          t.line.wrapClass
            ? (Je(t).className = t.line.wrapClass)
            : t.node != t.text && (t.node.className = '');
        var r = t.textClass
          ? t.textClass + ' ' + (t.line.textClass || '')
          : t.line.textClass;
        t.text.className = r || '';
      }
      function rt(e, t, r, i) {
        if (
          (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
          t.gutterBackground &&
            (t.node.removeChild(t.gutterBackground),
            (t.gutterBackground = null)),
          t.line.gutterClass)
        ) {
          var o = Je(t);
          (t.gutterBackground = n(
            'div',
            null,
            'CodeMirror-gutter-background ' + t.line.gutterClass,
            'left: ' +
              (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
              'px; width: ' +
              i.gutterTotalWidth +
              'px'
          )),
            e.display.input.setUneditable(t.gutterBackground),
            o.insertBefore(t.gutterBackground, t.text);
        }
        var a = t.line.gutterMarkers;
        if (e.options.lineNumbers || a) {
          var l = Je(t),
            s = (t.gutter = n(
              'div',
              null,
              'CodeMirror-gutter-wrapper',
              'left: ' +
                (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
                'px'
            ));
          if (
            (e.display.input.setUneditable(s),
            l.insertBefore(s, t.text),
            t.line.gutterClass && (s.className += ' ' + t.line.gutterClass),
            !e.options.lineNumbers ||
              (a && a['CodeMirror-linenumbers']) ||
              (t.lineNumber = s.appendChild(
                n(
                  'div',
                  E(e.options, r),
                  'CodeMirror-linenumber CodeMirror-gutter-elt',
                  'left: ' +
                    i.gutterLeft['CodeMirror-linenumbers'] +
                    'px; width: ' +
                    e.display.lineNumInnerWidth +
                    'px'
                )
              )),
            a)
          )
            for (var u = 0; u < e.options.gutters.length; ++u) {
              var c = e.options.gutters[u],
                f = a.hasOwnProperty(c) && a[c];
              f &&
                s.appendChild(
                  n(
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
      function nt(e, t, r, n) {
        var i = et(e, t);
        return (
          (t.text = t.node = i.pre),
          i.bgClass && (t.bgClass = i.bgClass),
          i.textClass && (t.textClass = i.textClass),
          tt(e, t),
          rt(e, t, r, n),
          it(e, t, n),
          t.node
        );
      }
      function it(e, t, r) {
        if ((ot(e, t.line, t, r, !0), t.rest))
          for (var n = 0; n < t.rest.length; n++) ot(e, t.rest[n], t, r, !1);
      }
      function ot(e, t, r, i, o) {
        if (t.widgets)
          for (var a = Je(r), l = 0, s = t.widgets; l < s.length; ++l) {
            var u = s[l],
              c = n('div', [u.node], 'CodeMirror-linewidget');
            u.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
              (function(e, t, r, n) {
                if (e.noHScroll) {
                  (r.alignable || (r.alignable = [])).push(t);
                  var i = n.wrapperWidth;
                  (t.style.left = n.fixedPos + 'px'),
                    e.coverGutter ||
                      ((i -= n.gutterTotalWidth),
                      (t.style.paddingLeft = n.gutterTotalWidth + 'px')),
                    (t.style.width = i + 'px');
                }
                e.coverGutter &&
                  ((t.style.zIndex = 5),
                  (t.style.position = 'relative'),
                  e.noHScroll ||
                    (t.style.marginLeft = -n.gutterTotalWidth + 'px'));
              })(u, c, r, i),
              e.display.input.setUneditable(c),
              o && u.above
                ? a.insertBefore(c, r.gutter || r.text)
                : a.appendChild(c),
              Ye(u, 'redraw');
          }
      }
      function at(e) {
        if (null != e.height) return e.height;
        var t = e.doc.cm;
        if (!t) return 0;
        if (!o(document.body, e.node)) {
          var i = 'position: relative;';
          e.coverGutter &&
            (i += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
            e.noHScroll &&
              (i += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
            r(t.display.measure, n('div', [e.node], null, i));
        }
        return (e.height = e.node.parentNode.offsetHeight);
      }
      function lt(e, t) {
        for (var r = Se(t); r != e.wrapper; r = r.parentNode)
          if (
            !r ||
            (1 == r.nodeType && 'true' == r.getAttribute('cm-ignore-events')) ||
            (r.parentNode == e.sizer && r != e.mover)
          )
            return !0;
      }
      function st(e) {
        return e.lineSpace.offsetTop;
      }
      function ut(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function ct(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH;
        var t = r(e.measure, n('pre', 'x')),
          i = window.getComputedStyle
            ? window.getComputedStyle(t)
            : t.currentStyle,
          o = {
            left: parseInt(i.paddingLeft),
            right: parseInt(i.paddingRight),
          };
        return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o;
      }
      function ft(e) {
        return po - e.display.nativeBarWidth;
      }
      function dt(e) {
        return e.display.scroller.clientWidth - ft(e) - e.display.barWidth;
      }
      function ht(e) {
        return e.display.scroller.clientHeight - ft(e) - e.display.barHeight;
      }
      function pt(e, t, r) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
        for (var n = 0; n < e.rest.length; n++)
          if (e.rest[n] == t)
            return { map: e.measure.maps[n], cache: e.measure.caches[n] };
        for (var i = 0; i < e.rest.length; i++)
          if (A(e.rest[i]) > r)
            return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0,
            };
      }
      function gt(e, t, r, n) {
        return yt(e, mt(e, t), r, n);
      }
      function vt(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[Ut(e, t)];
        var r = e.display.externalMeasured;
        return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
      }
      function mt(e, t) {
        var n = A(t),
          i = vt(e, n);
        i && !i.text
          ? (i = null)
          : i && i.changes && (Qe(e, i, n, jt(e)), (e.curOp.forceUpdate = !0)),
          i ||
            (i = (function(e, t) {
              var n = A((t = re(t))),
                i = (e.display.externalMeasured = new $e(e.doc, t, n));
              i.lineN = n;
              var o = (i.built = Ue(e, i));
              return (i.text = o.pre), r(e.display.lineMeasure, o.pre), i;
            })(e, t));
        var o = pt(i, t, n);
        return {
          line: t,
          view: i,
          rect: null,
          map: o.map,
          cache: o.cache,
          before: o.before,
          hasHeights: !1,
        };
      }
      function yt(e, t, i, o, a) {
        t.before && (i = -1);
        var l,
          s = i + (o || '');
        return (
          t.cache.hasOwnProperty(s)
            ? (l = t.cache[s])
            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
              t.hasHeights ||
                (!(function(e, t, r) {
                  var n = e.options.lineWrapping,
                    i = n && dt(e);
                  if (!t.measure.heights || (n && t.measure.width != i)) {
                    var o = (t.measure.heights = []);
                    if (n) {
                      t.measure.width = i;
                      for (
                        var a = t.text.firstChild.getClientRects(), l = 0;
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
                })(e, t.view, t.rect),
                (t.hasHeights = !0)),
              (l = (function(e, t, i, o) {
                var a,
                  l = bt(t.map, i, o),
                  s = l.node,
                  u = l.start,
                  c = l.end,
                  f = l.collapse;
                if (3 == s.nodeType) {
                  for (var d = 0; d < 4; d++) {
                    for (; u && C(t.line.text.charAt(l.coverStart + u)); ) --u;
                    for (
                      ;
                      l.coverStart + c < l.coverEnd &&
                      C(t.line.text.charAt(l.coverStart + c));

                    )
                      ++c;
                    if (
                      (a =
                        Vi && Ui < 9 && 0 == u && c == l.coverEnd - l.coverStart
                          ? s.parentNode.getBoundingClientRect()
                          : wt(oo(s, u, c).getClientRects(), o)).left ||
                      a.right ||
                      0 == u
                    )
                      break;
                    (c = u), (u -= 1), (f = 'right');
                  }
                  Vi &&
                    Ui < 11 &&
                    (a = (function(e, t) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function(e) {
                          if (null != Eo) return Eo;
                          var t = r(e, n('span', 'x')),
                            i = t.getBoundingClientRect(),
                            o = oo(t, 0, 1).getBoundingClientRect();
                          return (Eo = Math.abs(i.left - o.left) > 1);
                        })(e)
                      )
                        return t;
                      var i = screen.logicalXDPI / screen.deviceXDPI,
                        o = screen.logicalYDPI / screen.deviceYDPI;
                      return {
                        left: t.left * i,
                        right: t.right * i,
                        top: t.top * o,
                        bottom: t.bottom * o,
                      };
                    })(e.display.measure, a));
                } else {
                  u > 0 && (f = o = 'right');
                  var h;
                  a =
                    e.options.lineWrapping &&
                    (h = s.getClientRects()).length > 1
                      ? h['right' == o ? h.length - 1 : 0]
                      : s.getBoundingClientRect();
                }
                if (Vi && Ui < 9 && !u && (!a || (!a.left && !a.right))) {
                  var p = s.parentNode.getClientRects()[0];
                  a = p
                    ? {
                        left: p.left,
                        right: p.left + zt(e.display),
                        top: p.top,
                        bottom: p.bottom,
                      }
                    : qo;
                }
                for (
                  var g = a.top - t.rect.top,
                    v = a.bottom - t.rect.top,
                    m = (g + v) / 2,
                    y = t.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(m < y[b]);
                  b++
                );
                var w = b ? y[b - 1] : 0,
                  x = y[b],
                  S = {
                    left: ('right' == f ? a.right : a.left) - t.rect.left,
                    right: ('left' == f ? a.left : a.right) - t.rect.left,
                    top: w,
                    bottom: x,
                  };
                a.left || a.right || (S.bogus = !0);
                e.options.singleCursorHeightPerLine ||
                  ((S.rtop = g), (S.rbottom = v));
                return S;
              })(e, t, i, o)).bogus || (t.cache[s] = l)),
          {
            left: l.left,
            right: l.right,
            top: a ? l.rtop : l.top,
            bottom: a ? l.rbottom : l.bottom,
          }
        );
      }
      function bt(e, t, r) {
        for (var n, i, o, a, l, s, u = 0; u < e.length; u += 3)
          if (
            ((l = e[u]),
            (s = e[u + 1]),
            t < l
              ? ((i = 0), (o = 1), (a = 'left'))
              : t < s
                ? (o = (i = t - l) + 1)
                : (u == e.length - 3 || (t == s && e[u + 3] > t)) &&
                  ((i = (o = s - l) - 1), t >= s && (a = 'right')),
            null != i)
          ) {
            if (
              ((n = e[u + 2]),
              l == s && r == (n.insertLeft ? 'left' : 'right') && (a = r),
              'left' == r && 0 == i)
            )
              for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                (n = e[2 + (u -= 3)]), (a = 'left');
            if ('right' == r && i == s - l)
              for (
                ;
                u < e.length - 3 &&
                e[u + 3] == e[u + 4] &&
                !e[u + 5].insertLeft;

              )
                (n = e[(u += 3) + 2]), (a = 'right');
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
      function wt(e, t) {
        var r = qo;
        if ('left' == t)
          for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
        else
          for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--);
        return r;
      }
      function xt(e) {
        if (
          e.measure &&
          ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
          for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
      }
      function Ct(e) {
        (e.display.externalMeasure = null), t(e.display.lineMeasure);
        for (var r = 0; r < e.display.view.length; r++) xt(e.display.view[r]);
      }
      function St(e) {
        Ct(e),
          (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
          e.options.lineWrapping || (e.display.maxLineChanged = !0),
          (e.display.lineNumChars = null);
      }
      function kt() {
        return Ki && Ji
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft;
      }
      function Lt() {
        return Ki && Ji
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop;
      }
      function Tt(e) {
        var t = 0;
        if (e.widgets)
          for (var r = 0; r < e.widgets.length; ++r)
            e.widgets[r].above && (t += at(e.widgets[r]));
        return t;
      }
      function Mt(e, t, r, n, i) {
        if (!i) {
          var o = Tt(t);
          (r.top += o), (r.bottom += o);
        }
        if ('line' == n) return r;
        n || (n = 'local');
        var a = le(t);
        if (
          ('local' == n ? (a += st(e.display)) : (a -= e.display.viewOffset),
          'page' == n || 'window' == n)
        ) {
          var l = e.display.lineSpace.getBoundingClientRect();
          a += l.top + ('window' == n ? 0 : Lt());
          var s = l.left + ('window' == n ? 0 : kt());
          (r.left += s), (r.right += s);
        }
        return (r.top += a), (r.bottom += a), r;
      }
      function Ot(e, t, r) {
        if ('div' == r) return t;
        var n = t.left,
          i = t.top;
        if ('page' == r) (n -= kt()), (i -= Lt());
        else if ('local' == r || !r) {
          var o = e.display.sizer.getBoundingClientRect();
          (n += o.left), (i += o.top);
        }
        var a = e.display.lineSpace.getBoundingClientRect();
        return { left: n - a.left, top: i - a.top };
      }
      function At(e, t, r, n, i) {
        return n || (n = L(e.doc, t.line)), Mt(e, n, gt(e, n, t.ch, i), r);
      }
      function _t(e, t, r, n, i, o) {
        function a(t, a) {
          var l = yt(e, i, t, a ? 'right' : 'left', o);
          return a ? (l.left = l.right) : (l.right = l.left), Mt(e, n, l, r);
        }
        function l(e, t, r) {
          var n = 1 == s[t].level;
          return a(r ? e - 1 : e, n != r);
        }
        (n = n || L(e.doc, t.line)), i || (i = mt(e, n));
        var s = fe(n, e.doc.direction),
          u = t.ch,
          c = t.sticky;
        if (
          (u >= n.text.length
            ? ((u = n.text.length), (c = 'before'))
            : u <= 0 && ((u = 0), (c = 'after')),
          !s)
        )
          return a('before' == c ? u - 1 : u, 'before' == c);
        var f = ce(s, u, c),
          d = ko,
          h = l(u, f, 'before' == c);
        return null != d && (h.other = l(u, d, 'before' != c)), h;
      }
      function Nt(e, t) {
        var r = 0;
        (t = I(e.doc, t)), e.options.lineWrapping || (r = zt(e.display) * t.ch);
        var n = L(e.doc, t.line),
          i = le(n) + st(e.display);
        return { left: r, right: r, top: i, bottom: i + n.height };
      }
      function Et(e, t, r, n, i) {
        var o = D(e, t, r);
        return (o.xRel = i), n && (o.outside = !0), o;
      }
      function Dt(e, t, r) {
        var n = e.doc;
        if ((r += e.display.viewOffset) < 0)
          return Et(n.first, 0, null, !0, -1);
        var i = _(n, r),
          o = n.first + n.size - 1;
        if (i > o)
          return Et(n.first + n.size - 1, L(n, o).text.length, null, !0, 1);
        t < 0 && (t = 0);
        for (var a = L(n, i); ; ) {
          var l = (function(e, t, r, n, i) {
              i -= le(t);
              var o = mt(e, t),
                a = Tt(t),
                l = 0,
                s = t.text.length,
                u = !0,
                c = fe(t, e.doc.direction);
              if (c) {
                var f = (e.options.lineWrapping
                  ? function(e, t, r, n, i, o, a) {
                      var l = Wt(e, t, n, a),
                        s = l.begin,
                        u = l.end;
                      /\s/.test(t.text.charAt(u - 1)) && u--;
                      for (var c = null, f = null, d = 0; d < i.length; d++) {
                        var h = i[d];
                        if (!(h.from >= u || h.to <= s)) {
                          var p = 1 != h.level,
                            g = yt(
                              e,
                              n,
                              p ? Math.min(u, h.to) - 1 : Math.max(s, h.from)
                            ).right,
                            v = g < o ? o - g + 1e9 : g - o;
                          (!c || f > v) && ((c = h), (f = v));
                        }
                      }
                      c || (c = i[i.length - 1]);
                      c.from < s && (c = { from: s, to: c.to, level: c.level });
                      c.to > u && (c = { from: c.from, to: u, level: c.level });
                      return c;
                    }
                  : function(e, t, r, n, i, o, a) {
                      var l = k(
                          function(l) {
                            var s = i[l],
                              u = 1 != s.level;
                            return Ht(
                              _t(
                                e,
                                D(r, u ? s.to : s.from, u ? 'before' : 'after'),
                                'line',
                                t,
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
                          c = _t(
                            e,
                            D(r, u ? s.from : s.to, u ? 'after' : 'before'),
                            'line',
                            t,
                            n
                          );
                        Ht(c, o, a, !0) && c.top > a && (s = i[l - 1]);
                      }
                      return s;
                    })(e, t, r, o, c, n, i);
                (u = 1 != f.level),
                  (l = u ? f.from : f.to - 1),
                  (s = u ? f.to : f.from - 1);
              }
              var d,
                h,
                p = null,
                g = null,
                v = k(
                  function(t) {
                    var r = yt(e, o, t);
                    return (
                      (r.top += a),
                      (r.bottom += a),
                      !!Ht(r, n, i, !1) &&
                        (r.top <= i && r.left <= n && ((p = t), (g = r)), !0)
                    );
                  },
                  l,
                  s
                ),
                m = !1;
              if (g) {
                var y = n - g.left < g.right - n,
                  b = y == u;
                (v = p + (b ? 0 : 1)),
                  (h = b ? 'after' : 'before'),
                  (d = y ? g.left : g.right);
              } else {
                u || (v != s && v != l) || v++,
                  (h =
                    0 == v
                      ? 'after'
                      : v == t.text.length
                        ? 'before'
                        : yt(e, o, v - (u ? 1 : 0)).bottom + a <= i == u
                          ? 'after'
                          : 'before');
                var w = _t(e, D(r, v, h), 'line', t, o);
                (d = w.left), (m = i < w.top || i >= w.bottom);
              }
              return (v = S(t.text, v, 1)), Et(r, v, h, m, n - d);
            })(e, a, i, t, r),
            s = ee(a),
            u = s && s.find(0, !0);
          if (!s || !(l.ch > u.from.ch || (l.ch == u.from.ch && l.xRel > 0)))
            return l;
          i = A((a = u.to.line));
        }
      }
      function Wt(e, t, r, n) {
        n -= Tt(t);
        var i = t.text.length,
          o = k(
            function(t) {
              return yt(e, r, t - 1).bottom <= n;
            },
            i,
            0
          );
        return (
          (i = k(
            function(t) {
              return yt(e, r, t).top > n;
            },
            o,
            i
          )),
          { begin: o, end: i }
        );
      }
      function Pt(e, t, r, n) {
        r || (r = mt(e, t));
        return Wt(e, t, r, Mt(e, t, yt(e, r, n), 'line').top);
      }
      function Ht(e, t, r, n) {
        return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
      }
      function Ft(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == Ro) {
          Ro = n('pre');
          for (var i = 0; i < 49; ++i)
            Ro.appendChild(document.createTextNode('x')),
              Ro.appendChild(n('br'));
          Ro.appendChild(document.createTextNode('x'));
        }
        r(e.measure, Ro);
        var o = Ro.offsetHeight / 50;
        return o > 3 && (e.cachedTextHeight = o), t(e.measure), o || 1;
      }
      function zt(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = n('span', 'xxxxxxxxxx'),
          i = n('pre', [t]);
        r(e.measure, i);
        var o = t.getBoundingClientRect(),
          a = (o.right - o.left) / 10;
        return a > 2 && (e.cachedCharWidth = a), a || 10;
      }
      function jt(e) {
        for (
          var t = e.display,
            r = {},
            n = {},
            i = t.gutters.clientLeft,
            o = t.gutters.firstChild,
            a = 0;
          o;
          o = o.nextSibling, ++a
        )
          (r[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i),
            (n[e.options.gutters[a]] = o.clientWidth);
        return {
          fixedPos: It(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: r,
          gutterWidth: n,
          wrapperWidth: t.wrapper.clientWidth,
        };
      }
      function It(e) {
        return (
          e.scroller.getBoundingClientRect().left -
          e.sizer.getBoundingClientRect().left
        );
      }
      function Rt(e) {
        var t = Ft(e.display),
          r = e.options.lineWrapping,
          n =
            r &&
            Math.max(5, e.display.scroller.clientWidth / zt(e.display) - 3);
        return function(i) {
          if (oe(e.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
        };
      }
      function Bt(e) {
        var t = e.doc,
          r = Rt(e);
        t.iter(function(e) {
          var t = r(e);
          t != e.height && O(e, t);
        });
      }
      function Vt(e, t, r, n) {
        var i = e.display;
        if (!r && 'true' == Se(t).getAttribute('cm-not-content')) return null;
        var o,
          a,
          l = i.lineSpace.getBoundingClientRect();
        try {
          (o = t.clientX - l.left), (a = t.clientY - l.top);
        } catch (t) {
          return null;
        }
        var s,
          u = Dt(e, o, a);
        if (n && 1 == u.xRel && (s = L(e.doc, u.line).text).length == u.ch) {
          var c = f(s, s.length, e.options.tabSize) - s.length;
          u = D(
            u.line,
            Math.max(
              0,
              Math.round((o - ct(e.display).left) / zt(e.display)) - c
            )
          );
        }
        return u;
      }
      function Ut(e, t) {
        if (t >= e.display.viewTo) return null;
        if ((t -= e.display.viewFrom) < 0) return null;
        for (var r = e.display.view, n = 0; n < r.length; n++)
          if ((t -= r[n].size) < 0) return n;
      }
      function Gt(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function qt(e, t) {
        void 0 === t && (t = !0);
        for (
          var r = e.doc,
            i = {},
            o = (i.cursors = document.createDocumentFragment()),
            a = (i.selection = document.createDocumentFragment()),
            l = 0;
          l < r.sel.ranges.length;
          l++
        )
          if (t || l != r.sel.primIndex) {
            var s = r.sel.ranges[l];
            if (
              !(
                s.from().line >= e.display.viewTo ||
                s.to().line < e.display.viewFrom
              )
            ) {
              var u = s.empty();
              (u || e.options.showCursorWhenSelecting) && Kt(e, s.head, o),
                u ||
                  (function(e, t, r) {
                    function i(e, t, r, i) {
                      t < 0 && (t = 0),
                        (t = Math.round(t)),
                        (i = Math.round(i)),
                        s.appendChild(
                          n(
                            'div',
                            null,
                            'CodeMirror-selected',
                            'position: absolute; left: ' +
                              e +
                              'px;\n                             top: ' +
                              t +
                              'px; width: ' +
                              (null == r ? f - e : r) +
                              'px;\n                             height: ' +
                              (i - t) +
                              'px'
                          )
                        );
                    }
                    function o(t, r, n) {
                      function o(r, n) {
                        return At(e, D(t, r), 'div', h, n);
                      }
                      function a(t, r, n) {
                        var i = Pt(e, h, null, t),
                          a = ('ltr' == r) == ('after' == n) ? 'left' : 'right';
                        return o(
                          'after' == n
                            ? i.begin
                            : i.end -
                              (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1),
                          a
                        )[a];
                      }
                      var s,
                        u,
                        h = L(l, t),
                        p = h.text.length,
                        g = fe(h, l.direction);
                      return (
                        (function(e, t, r, n) {
                          if (!e) return n(t, r, 'ltr', 0);
                          for (var i = !1, o = 0; o < e.length; ++o) {
                            var a = e[o];
                            ((a.from < r && a.to > t) ||
                              (t == r && a.to == t)) &&
                              (n(
                                Math.max(a.from, t),
                                Math.min(a.to, r),
                                1 == a.level ? 'rtl' : 'ltr',
                                o
                              ),
                              (i = !0));
                          }
                          i || n(t, r, 'ltr');
                        })(g, r || 0, null == n ? p : n, function(e, t, l, h) {
                          var v = 'ltr' == l,
                            m = o(e, v ? 'left' : 'right'),
                            y = o(t - 1, v ? 'right' : 'left'),
                            b = null == r && 0 == e,
                            w = null == n && t == p,
                            x = 0 == h,
                            C = !g || h == g.length - 1;
                          if (y.top - m.top <= 3) {
                            var S = (d ? w : b) && C,
                              k = (d ? b : w) && x ? c : (v ? m : y).left,
                              L = S ? f : (v ? y : m).right;
                            i(k, m.top, L - k, m.bottom);
                          } else {
                            var T, M, O, A;
                            v
                              ? ((T = d && b && x ? c : m.left),
                                (M = d ? f : a(e, l, 'before')),
                                (O = d ? c : a(t, l, 'after')),
                                (A = d && w && C ? f : y.right))
                              : ((T = d ? a(e, l, 'before') : c),
                                (M = !d && b && x ? f : m.right),
                                (O = !d && w && C ? c : y.left),
                                (A = d ? a(t, l, 'after') : f)),
                              i(T, m.top, M - T, m.bottom),
                              m.bottom < y.top && i(c, m.bottom, null, y.top),
                              i(O, y.top, A - O, y.bottom);
                          }
                          (!s || $t(m, s) < 0) && (s = m),
                            $t(y, s) < 0 && (s = y),
                            (!u || $t(m, u) < 0) && (u = m),
                            $t(y, u) < 0 && (u = y);
                        }),
                        { start: s, end: u }
                      );
                    }
                    var a = e.display,
                      l = e.doc,
                      s = document.createDocumentFragment(),
                      u = ct(e.display),
                      c = u.left,
                      f =
                        Math.max(a.sizerWidth, dt(e) - a.sizer.offsetLeft) -
                        u.right,
                      d = 'ltr' == l.direction;
                    var h = t.from(),
                      p = t.to();
                    if (h.line == p.line) o(h.line, h.ch, p.ch);
                    else {
                      var g = L(l, h.line),
                        v = L(l, p.line),
                        m = re(g) == re(v),
                        y = o(h.line, h.ch, m ? g.text.length + 1 : null).end,
                        b = o(p.line, m ? 0 : null, p.ch).start;
                      m &&
                        (y.top < b.top - 2
                          ? (i(y.right, y.top, null, y.bottom),
                            i(c, b.top, b.left, b.bottom))
                          : i(y.right, y.top, b.left - y.right, y.bottom)),
                        y.bottom < b.top && i(c, y.bottom, null, b.top);
                    }
                    r.appendChild(s);
                  })(e, s, a);
            }
          }
        return i;
      }
      function Kt(e, t, r) {
        var i = _t(
            e,
            t,
            'div',
            null,
            null,
            !e.options.singleCursorHeightPerLine
          ),
          o = r.appendChild(n('div', ' ', 'CodeMirror-cursor'));
        if (
          ((o.style.left = i.left + 'px'),
          (o.style.top = i.top + 'px'),
          (o.style.height =
            Math.max(0, i.bottom - i.top) * e.options.cursorHeight + 'px'),
          i.other)
        ) {
          var a = r.appendChild(
            n('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
          );
          (a.style.display = ''),
            (a.style.left = i.other.left + 'px'),
            (a.style.top = i.other.top + 'px'),
            (a.style.height = 0.85 * (i.other.bottom - i.other.top) + 'px');
        }
      }
      function $t(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function Xt(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var r = !0;
          (t.cursorDiv.style.visibility = ''),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function() {
                  return (t.cursorDiv.style.visibility = (r = !r)
                    ? ''
                    : 'hidden');
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 &&
                (t.cursorDiv.style.visibility = 'hidden');
        }
      }
      function Yt(e) {
        e.state.focused || (e.display.input.focus(), Qt(e));
      }
      function Zt(e) {
        (e.state.delayingBlurEvent = !0),
          setTimeout(function() {
            e.state.delayingBlurEvent &&
              ((e.state.delayingBlurEvent = !1), Jt(e));
          }, 100);
      }
      function Qt(e, t) {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
          'nocursor' != e.options.readOnly &&
            (e.state.focused ||
              (pe(e, 'focus', e, t),
              (e.state.focused = !0),
              l(e.display.wrapper, 'CodeMirror-focused'),
              e.curOp ||
                e.display.selForContextMenu == e.doc.sel ||
                (e.display.input.reset(),
                Gi &&
                  setTimeout(function() {
                    return e.display.input.reset(!0);
                  }, 20)),
              e.display.input.receivedFocus()),
            Xt(e));
      }
      function Jt(e, t) {
        e.state.delayingBlurEvent ||
          (e.state.focused &&
            (pe(e, 'blur', e, t),
            (e.state.focused = !1),
            so(e.display.wrapper, 'CodeMirror-focused')),
          clearInterval(e.display.blinker),
          setTimeout(function() {
            e.state.focused || (e.display.shift = !1);
          }, 150));
      }
      function er(e) {
        for (
          var t = e.display, r = t.lineDiv.offsetTop, n = 0;
          n < t.view.length;
          n++
        ) {
          var i = t.view[n],
            o = void 0;
          if (!i.hidden) {
            if (Vi && Ui < 8) {
              var a = i.node.offsetTop + i.node.offsetHeight;
              (o = a - r), (r = a);
            } else {
              var l = i.node.getBoundingClientRect();
              o = l.bottom - l.top;
            }
            var s = i.line.height - o;
            if (
              (o < 2 && (o = Ft(t)),
              (s > 0.005 || s < -0.005) && (O(i.line, o), tr(i.line), i.rest))
            )
              for (var u = 0; u < i.rest.length; u++) tr(i.rest[u]);
          }
        }
      }
      function tr(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t)
            e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight;
      }
      function rr(e, t, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
        n = Math.floor(n - st(e));
        var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
          o = _(t, n),
          a = _(t, i);
        if (r && r.ensure) {
          var l = r.ensure.from.line,
            s = r.ensure.to.line;
          l < o
            ? ((o = l), (a = _(t, le(L(t, l)) + e.wrapper.clientHeight)))
            : Math.min(s, t.lastLine()) >= a &&
              ((o = _(t, le(L(t, s)) - e.wrapper.clientHeight)), (a = s));
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function nr(e) {
        var t = e.display,
          r = t.view;
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
          for (
            var n = It(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
              i = t.gutters.offsetWidth,
              o = n + 'px',
              a = 0;
            a < r.length;
            a++
          )
            if (!r[a].hidden) {
              e.options.fixedGutter &&
                (r[a].gutter && (r[a].gutter.style.left = o),
                r[a].gutterBackground &&
                  (r[a].gutterBackground.style.left = o));
              var l = r[a].alignable;
              if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o;
            }
          e.options.fixedGutter && (t.gutters.style.left = n + i + 'px');
        }
      }
      function ir(e) {
        if (!e.options.lineNumbers) return !1;
        var t = e.doc,
          r = E(e.options, t.first + t.size - 1),
          i = e.display;
        if (r.length != i.lineNumChars) {
          var o = i.measure.appendChild(
              n(
                'div',
                [n('div', r)],
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
            (i.lineNumChars = i.lineNumInnerWidth ? r.length : -1),
            (i.lineGutter.style.width = i.lineNumWidth + 'px'),
            Wr(e),
            !0
          );
        }
        return !1;
      }
      function or(e, t) {
        var r = e.display,
          n = Ft(e.display);
        t.top < 0 && (t.top = 0);
        var i =
            e.curOp && null != e.curOp.scrollTop
              ? e.curOp.scrollTop
              : r.scroller.scrollTop,
          o = ht(e),
          a = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var l = e.doc.height + ut(r),
          s = t.top < n,
          u = t.bottom > l - n;
        if (t.top < i) a.scrollTop = s ? 0 : t.top;
        else if (t.bottom > i + o) {
          var c = Math.min(t.top, (u ? l : t.bottom) - o);
          c != i && (a.scrollTop = c);
        }
        var f =
            e.curOp && null != e.curOp.scrollLeft
              ? e.curOp.scrollLeft
              : r.scroller.scrollLeft,
          d = dt(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
          h = t.right - t.left > d;
        return (
          h && (t.right = t.left + d),
          t.left < 10
            ? (a.scrollLeft = 0)
            : t.left < f
              ? (a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)))
              : t.right > d + f - 3 &&
                (a.scrollLeft = t.right + (h ? 0 : 10) - d),
          a
        );
      }
      function ar(e, t) {
        null != t &&
          (ur(e),
          (e.curOp.scrollTop =
            (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) +
            t));
      }
      function lr(e) {
        ur(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
          from: t,
          to: t,
          margin: e.options.cursorScrollMargin,
        };
      }
      function sr(e, t, r) {
        (null == t && null == r) || ur(e),
          null != t && (e.curOp.scrollLeft = t),
          null != r && (e.curOp.scrollTop = r);
      }
      function ur(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
          e.curOp.scrollToPos = null;
          cr(e, Nt(e, t.from), Nt(e, t.to), t.margin);
        }
      }
      function cr(e, t, r, n) {
        var i = or(e, {
          left: Math.min(t.left, r.left),
          top: Math.min(t.top, r.top) - n,
          right: Math.max(t.right, r.right),
          bottom: Math.max(t.bottom, r.bottom) + n,
        });
        sr(e, i.scrollLeft, i.scrollTop);
      }
      function fr(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
          (ji || Dr(e, { top: t }), dr(e, t, !0), ji && Dr(e), Ar(e, 100));
      }
      function dr(e, t, r) {
        (t = Math.min(
          e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
          t
        )),
          (e.display.scroller.scrollTop != t || r) &&
            ((e.doc.scrollTop = t),
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t &&
              (e.display.scroller.scrollTop = t));
      }
      function hr(e, t, r, n) {
        (t = Math.min(
          t,
          e.display.scroller.scrollWidth - e.display.scroller.clientWidth
        )),
          ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
            !n) ||
            ((e.doc.scrollLeft = t),
            nr(e),
            e.display.scroller.scrollLeft != t &&
              (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t));
      }
      function pr(e) {
        var t = e.display,
          r = t.gutters.offsetWidth,
          n = Math.round(e.doc.height + ut(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? r : 0,
          docHeight: n,
          scrollHeight: n + ft(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: r,
        };
      }
      function gr(e, t) {
        t || (t = pr(e));
        var r = e.display.barWidth,
          n = e.display.barHeight;
        vr(e, t);
        for (
          var i = 0;
          (i < 4 && r != e.display.barWidth) || n != e.display.barHeight;
          i++
        )
          r != e.display.barWidth && e.options.lineWrapping && er(e),
            vr(e, pr(e)),
            (r = e.display.barWidth),
            (n = e.display.barHeight);
      }
      function vr(e, t) {
        var r = e.display,
          n = r.scrollbars.update(t);
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
          e.options.coverGutterNextToScrollbar &&
          e.options.fixedGutter
            ? ((r.gutterFiller.style.display = 'block'),
              (r.gutterFiller.style.height = n.bottom + 'px'),
              (r.gutterFiller.style.width = t.gutterWidth + 'px'))
            : (r.gutterFiller.style.display = '');
      }
      function mr(e) {
        e.display.scrollbars &&
          (e.display.scrollbars.clear(),
          e.display.scrollbars.addClass &&
            so(e.display.wrapper, e.display.scrollbars.addClass)),
          (e.display.scrollbars = new Xo[e.options.scrollbarStyle](
            function(t) {
              e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                Mo(t, 'mousedown', function() {
                  e.state.focused &&
                    setTimeout(function() {
                      return e.display.input.focus();
                    }, 0);
                }),
                t.setAttribute('cm-not-content', 'true');
            },
            function(t, r) {
              'horizontal' == r ? hr(e, t) : fr(e, t);
            },
            e
          )),
          e.display.scrollbars.addClass &&
            l(e.display.wrapper, e.display.scrollbars.addClass);
      }
      function yr(e) {
        (e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
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
          id: ++Yo,
        }),
          (function(e) {
            Uo
              ? Uo.ops.push(e)
              : (e.ownsGroup = Uo = { ops: [e], delayedCallbacks: [] });
          })(e.curOp);
      }
      function br(e) {
        !(function(e, t) {
          var r = e.ownsGroup;
          if (r)
            try {
              !(function(e) {
                var t = e.delayedCallbacks,
                  r = 0;
                do {
                  for (; r < t.length; r++) t[r].call(null);
                  for (var n = 0; n < e.ops.length; n++) {
                    var i = e.ops[n];
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
                } while (r < t.length);
              })(r);
            } finally {
              (Uo = null), t(r);
            }
        })(e.curOp, function(e) {
          for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
          !(function(e) {
            for (var t = e.ops, r = 0; r < t.length; r++)
              !(function(e) {
                var t = e.cm,
                  r = t.display;
                (function(e) {
                  var t = e.display;
                  !t.scrollbarsClipped &&
                    t.scroller.offsetWidth &&
                    ((t.nativeBarWidth =
                      t.scroller.offsetWidth - t.scroller.clientWidth),
                    (t.heightForcer.style.height = ft(e) + 'px'),
                    (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
                    (t.sizer.style.borderRightWidth = ft(e) + 'px'),
                    (t.scrollbarsClipped = !0));
                })(t),
                  e.updateMaxLine && ue(t);
                (e.mustUpdate =
                  e.viewChanged ||
                  e.forceUpdate ||
                  null != e.scrollTop ||
                  (e.scrollToPos &&
                    (e.scrollToPos.from.line < r.viewFrom ||
                      e.scrollToPos.to.line >= r.viewTo)) ||
                  (r.maxLineChanged && t.options.lineWrapping)),
                  (e.update =
                    e.mustUpdate &&
                    new Zo(
                      t,
                      e.mustUpdate && {
                        top: e.scrollTop,
                        ensure: e.scrollToPos,
                      },
                      e.forceUpdate
                    ));
              })(t[r]);
            for (var i = 0; i < t.length; i++)
              !(function(e) {
                e.updatedDisplay = e.mustUpdate && Nr(e.cm, e.update);
              })(t[i]);
            for (var o = 0; o < t.length; o++)
              !(function(e) {
                var t = e.cm,
                  r = t.display;
                e.updatedDisplay && er(t);
                (e.barMeasure = pr(t)),
                  r.maxLineChanged &&
                    !t.options.lineWrapping &&
                    ((e.adjustWidthTo =
                      gt(t, r.maxLine, r.maxLine.text.length).left + 3),
                    (t.display.sizerWidth = e.adjustWidthTo),
                    (e.barMeasure.scrollWidth = Math.max(
                      r.scroller.clientWidth,
                      r.sizer.offsetLeft +
                        e.adjustWidthTo +
                        ft(t) +
                        t.display.barWidth
                    )),
                    (e.maxScrollLeft = Math.max(
                      0,
                      r.sizer.offsetLeft + e.adjustWidthTo - dt(t)
                    )));
                (e.updatedDisplay || e.selectionChanged) &&
                  (e.preparedSelection = r.input.prepareSelection());
              })(t[o]);
            for (var l = 0; l < t.length; l++)
              !(function(e) {
                var t = e.cm;
                null != e.adjustWidthTo &&
                  ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
                  e.maxScrollLeft < t.doc.scrollLeft &&
                    hr(
                      t,
                      Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                      !0
                    ),
                  (t.display.maxLineChanged = !1));
                var r = e.focus && e.focus == a();
                e.preparedSelection &&
                  t.display.input.showSelection(e.preparedSelection, r);
                (e.updatedDisplay || e.startHeight != t.doc.height) &&
                  gr(t, e.barMeasure);
                e.updatedDisplay && Pr(t, e.barMeasure);
                e.selectionChanged && Xt(t);
                t.state.focused &&
                  e.updateInput &&
                  t.display.input.reset(e.typing);
                r && Yt(e.cm);
              })(t[l]);
            for (var s = 0; s < t.length; s++)
              !(function(e) {
                var t = e.cm,
                  r = t.display,
                  i = t.doc;
                e.updatedDisplay && Er(t, e.update);
                null == r.wheelStartX ||
                  (null == e.scrollTop &&
                    null == e.scrollLeft &&
                    !e.scrollToPos) ||
                  (r.wheelStartX = r.wheelStartY = null);
                null != e.scrollTop && dr(t, e.scrollTop, e.forceScroll);
                null != e.scrollLeft && hr(t, e.scrollLeft, !0, !0);
                if (e.scrollToPos) {
                  var o = (function(e, t, r, n) {
                    null == n && (n = 0);
                    var i;
                    e.options.lineWrapping ||
                      t != r ||
                      (r =
                        'before' ==
                        (t = t.ch
                          ? D(
                              t.line,
                              'before' == t.sticky ? t.ch - 1 : t.ch,
                              'after'
                            )
                          : t).sticky
                          ? D(t.line, t.ch + 1, 'before')
                          : t);
                    for (var o = 0; o < 5; o++) {
                      var a = !1,
                        l = _t(e, t),
                        s = r && r != t ? _t(e, r) : l,
                        u = or(
                          e,
                          (i = {
                            left: Math.min(l.left, s.left),
                            top: Math.min(l.top, s.top) - n,
                            right: Math.max(l.left, s.left),
                            bottom: Math.max(l.bottom, s.bottom) + n,
                          })
                        ),
                        c = e.doc.scrollTop,
                        f = e.doc.scrollLeft;
                      if (
                        (null != u.scrollTop &&
                          (fr(e, u.scrollTop),
                          Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)),
                        null != u.scrollLeft &&
                          (hr(e, u.scrollLeft),
                          Math.abs(e.doc.scrollLeft - f) > 1 && (a = !0)),
                        !a)
                      )
                        break;
                    }
                    return i;
                  })(
                    t,
                    I(i, e.scrollToPos.from),
                    I(i, e.scrollToPos.to),
                    e.scrollToPos.margin
                  );
                  !(function(e, t) {
                    if (!ge(e, 'scrollCursorIntoView')) {
                      var r = e.display,
                        i = r.sizer.getBoundingClientRect(),
                        o = null;
                      if (
                        (t.top + i.top < 0
                          ? (o = !0)
                          : t.bottom + i.top >
                              (window.innerHeight ||
                                document.documentElement.clientHeight) &&
                            (o = !1),
                        null != o && !Zi)
                      ) {
                        var a = n(
                          'div',
                          '​',
                          null,
                          'position: absolute;\n                         top: ' +
                            (t.top - r.viewOffset - st(e.display)) +
                            'px;\n                         height: ' +
                            (t.bottom - t.top + ft(e) + r.barHeight) +
                            'px;\n                         left: ' +
                            t.left +
                            'px; width: ' +
                            Math.max(2, t.right - t.left) +
                            'px;'
                        );
                        e.display.lineSpace.appendChild(a),
                          a.scrollIntoView(o),
                          e.display.lineSpace.removeChild(a);
                      }
                    }
                  })(t, o);
                }
                var a = e.maybeHiddenMarkers,
                  l = e.maybeUnhiddenMarkers;
                if (a)
                  for (var s = 0; s < a.length; ++s)
                    a[s].lines.length || pe(a[s], 'hide');
                if (l)
                  for (var u = 0; u < l.length; ++u)
                    l[u].lines.length && pe(l[u], 'unhide');
                r.wrapper.offsetHeight &&
                  (i.scrollTop = t.display.scroller.scrollTop);
                e.changeObjs && pe(t, 'changes', t, e.changeObjs);
                e.update && e.update.finish();
              })(t[s]);
          })(e);
        });
      }
      function wr(e, t) {
        if (e.curOp) return t();
        yr(e);
        try {
          return t();
        } finally {
          br(e);
        }
      }
      function xr(e, t) {
        return function() {
          if (e.curOp) return t.apply(e, arguments);
          yr(e);
          try {
            return t.apply(e, arguments);
          } finally {
            br(e);
          }
        };
      }
      function Cr(e) {
        return function() {
          if (this.curOp) return e.apply(this, arguments);
          yr(this);
          try {
            return e.apply(this, arguments);
          } finally {
            br(this);
          }
        };
      }
      function Sr(e) {
        return function() {
          var t = this.cm;
          if (!t || t.curOp) return e.apply(this, arguments);
          yr(t);
          try {
            return e.apply(this, arguments);
          } finally {
            br(t);
          }
        };
      }
      function kr(e, t, r, n) {
        null == t && (t = e.doc.first),
          null == r && (r = e.doc.first + e.doc.size),
          n || (n = 0);
        var i = e.display;
        if (
          (n &&
            r < i.viewTo &&
            (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
            (i.updateLineNumbers = t),
          (e.curOp.viewChanged = !0),
          t >= i.viewTo)
        )
          So && ne(e.doc, t) < i.viewTo && Tr(e);
        else if (r <= i.viewFrom)
          So && ie(e.doc, r + n) > i.viewFrom
            ? Tr(e)
            : ((i.viewFrom += n), (i.viewTo += n));
        else if (t <= i.viewFrom && r >= i.viewTo) Tr(e);
        else if (t <= i.viewFrom) {
          var o = Mr(e, r, r + n, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += n))
            : Tr(e);
        } else if (r >= i.viewTo) {
          var a = Mr(e, t, t, -1);
          a
            ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
            : Tr(e);
        } else {
          var l = Mr(e, t, t, -1),
            s = Mr(e, r, r + n, 1);
          l && s
            ? ((i.view = i.view
                .slice(0, l.index)
                .concat(Xe(e, l.lineN, s.lineN))
                .concat(i.view.slice(s.index))),
              (i.viewTo += n))
            : Tr(e);
        }
        var u = i.externalMeasured;
        u &&
          (r < u.lineN
            ? (u.lineN += n)
            : t < u.lineN + u.size && (i.externalMeasured = null));
      }
      function Lr(e, t, r) {
        e.curOp.viewChanged = !0;
        var n = e.display,
          i = e.display.externalMeasured;
        if (
          (i &&
            t >= i.lineN &&
            t < i.lineN + i.size &&
            (n.externalMeasured = null),
          !(t < n.viewFrom || t >= n.viewTo))
        ) {
          var o = n.view[Ut(e, t)];
          if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == d(a, r) && a.push(r);
          }
        }
      }
      function Tr(e) {
        (e.display.viewFrom = e.display.viewTo = e.doc.first),
          (e.display.view = []),
          (e.display.viewOffset = 0);
      }
      function Mr(e, t, r, n) {
        var i,
          o = Ut(e, t),
          a = e.display.view;
        if (!So || r == e.doc.first + e.doc.size) return { index: o, lineN: r };
        for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
        if (l != t) {
          if (n > 0) {
            if (o == a.length - 1) return null;
            (i = l + a[o].size - t), o++;
          } else i = l - t;
          (t += i), (r += i);
        }
        for (; ne(e.doc, r) != r; ) {
          if (o == (n < 0 ? 0 : a.length - 1)) return null;
          (r += n * a[o - (n < 0 ? 1 : 0)].size), (o += n);
        }
        return { index: o, lineN: r };
      }
      function Or(e) {
        for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
          var i = t[n];
          i.hidden || (i.node && !i.changes) || ++r;
        }
        return r;
      }
      function Ar(e, t) {
        e.doc.highlightFrontier < e.display.viewTo &&
          e.state.highlight.set(t, u(_r, e));
      }
      function _r(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var r = +new Date() + e.options.workTime,
            n = Pe(e, t.highlightFrontier),
            i = [];
          t.iter(
            n.line,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function(o) {
              if (n.line >= e.display.viewFrom) {
                var a = o.styles,
                  l =
                    o.text.length > e.options.maxHighlightLength
                      ? _e(t.mode, n.state)
                      : null,
                  s = De(e, o, n, !0);
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
                o.text.length <= e.options.maxHighlightLength &&
                  He(e, o.text, n),
                  (o.stateAfter = n.line % 5 == 0 ? n.save() : null),
                  n.nextLine();
              if (+new Date() > r) return Ar(e, e.options.workDelay), !0;
            }
          ),
            (t.highlightFrontier = n.line),
            (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
            i.length &&
              wr(e, function() {
                for (var t = 0; t < i.length; t++) Lr(e, i[t], 'text');
              });
        }
      }
      function Nr(e, r) {
        var n = e.display,
          i = e.doc;
        if (r.editorIsHidden) return Tr(e), !1;
        if (
          !r.force &&
          r.visible.from >= n.viewFrom &&
          r.visible.to <= n.viewTo &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
          n.renderedView == n.view &&
          0 == Or(e)
        )
          return !1;
        ir(e) && (Tr(e), (r.dims = jt(e)));
        var l = i.first + i.size,
          s = Math.max(r.visible.from - e.options.viewportMargin, i.first),
          u = Math.min(l, r.visible.to + e.options.viewportMargin);
        n.viewFrom < s &&
          s - n.viewFrom < 20 &&
          (s = Math.max(i.first, n.viewFrom)),
          n.viewTo > u && n.viewTo - u < 20 && (u = Math.min(l, n.viewTo)),
          So && ((s = ne(e.doc, s)), (u = ie(e.doc, u)));
        var c =
          s != n.viewFrom ||
          u != n.viewTo ||
          n.lastWrapHeight != r.wrapperHeight ||
          n.lastWrapWidth != r.wrapperWidth;
        !(function(e, t, r) {
          var n = e.display;
          0 == n.view.length || t >= n.viewTo || r <= n.viewFrom
            ? ((n.view = Xe(e, t, r)), (n.viewFrom = t))
            : (n.viewFrom > t
                ? (n.view = Xe(e, t, n.viewFrom).concat(n.view))
                : n.viewFrom < t && (n.view = n.view.slice(Ut(e, t))),
              (n.viewFrom = t),
              n.viewTo < r
                ? (n.view = n.view.concat(Xe(e, n.viewTo, r)))
                : n.viewTo > r && (n.view = n.view.slice(0, Ut(e, r)))),
            (n.viewTo = r);
        })(e, s, u),
          (n.viewOffset = le(L(e.doc, n.viewFrom))),
          (e.display.mover.style.top = n.viewOffset + 'px');
        var f = Or(e);
        if (
          !c &&
          0 == f &&
          !r.force &&
          n.renderedView == n.view &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
        )
          return !1;
        var h = (function(e) {
          if (e.hasFocus()) return null;
          var t = a();
          if (!t || !o(e.display.lineDiv, t)) return null;
          var r = { activeElt: t };
          if (window.getSelection) {
            var n = window.getSelection();
            n.anchorNode &&
              n.extend &&
              o(e.display.lineDiv, n.anchorNode) &&
              ((r.anchorNode = n.anchorNode),
              (r.anchorOffset = n.anchorOffset),
              (r.focusNode = n.focusNode),
              (r.focusOffset = n.focusOffset));
          }
          return r;
        })(e);
        return (
          f > 4 && (n.lineDiv.style.display = 'none'),
          (function(e, r, n) {
            function i(t) {
              var r = t.nextSibling;
              return (
                Gi && to && e.display.currentWheelTarget == t
                  ? (t.style.display = 'none')
                  : t.parentNode.removeChild(t),
                r
              );
            }
            var o = e.display,
              a = e.options.lineNumbers,
              l = o.lineDiv,
              s = l.firstChild;
            for (var u = o.view, c = o.viewFrom, f = 0; f < u.length; f++) {
              var h = u[f];
              if (h.hidden);
              else if (h.node && h.node.parentNode == l) {
                for (; s != h.node; ) s = i(s);
                var p = a && null != r && r <= c && h.lineNumber;
                h.changes &&
                  (d(h.changes, 'gutter') > -1 && (p = !1), Qe(e, h, c, n)),
                  p &&
                    (t(h.lineNumber),
                    h.lineNumber.appendChild(
                      document.createTextNode(E(e.options, c))
                    )),
                  (s = h.node.nextSibling);
              } else {
                var g = nt(e, h, c, n);
                l.insertBefore(g, s);
              }
              c += h.size;
            }
            for (; s; ) s = i(s);
          })(e, n.updateLineNumbers, r.dims),
          f > 4 && (n.lineDiv.style.display = ''),
          (n.renderedView = n.view),
          (function(e) {
            if (
              e &&
              e.activeElt &&
              e.activeElt != a() &&
              (e.activeElt.focus(),
              e.anchorNode &&
                o(document.body, e.anchorNode) &&
                o(document.body, e.focusNode))
            ) {
              var t = window.getSelection(),
                r = document.createRange();
              r.setEnd(e.anchorNode, e.anchorOffset),
                r.collapse(!1),
                t.removeAllRanges(),
                t.addRange(r),
                t.extend(e.focusNode, e.focusOffset);
            }
          })(h),
          t(n.cursorDiv),
          t(n.selectionDiv),
          (n.gutters.style.height = n.sizer.style.minHeight = 0),
          c &&
            ((n.lastWrapHeight = r.wrapperHeight),
            (n.lastWrapWidth = r.wrapperWidth),
            Ar(e, 400)),
          (n.updateLineNumbers = null),
          !0
        );
      }
      function Er(e, t) {
        for (
          var r = t.viewport, n = !0;
          ((n && e.options.lineWrapping && t.oldDisplayWidth != dt(e)) ||
            (r &&
              null != r.top &&
              (r = {
                top: Math.min(e.doc.height + ut(e.display) - ht(e), r.top),
              }),
            (t.visible = rr(e.display, e.doc, r)),
            !(
              t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo
            ))) &&
          Nr(e, t);
          n = !1
        ) {
          er(e);
          var i = pr(e);
          Gt(e), gr(e, i), Pr(e, i), (t.force = !1);
        }
        t.signal(e, 'update', e),
          (e.display.viewFrom == e.display.reportedViewFrom &&
            e.display.viewTo == e.display.reportedViewTo) ||
            (t.signal(
              e,
              'viewportChange',
              e,
              e.display.viewFrom,
              e.display.viewTo
            ),
            (e.display.reportedViewFrom = e.display.viewFrom),
            (e.display.reportedViewTo = e.display.viewTo));
      }
      function Dr(e, t) {
        var r = new Zo(e, t);
        if (Nr(e, r)) {
          er(e), Er(e, r);
          var n = pr(e);
          Gt(e), gr(e, n), Pr(e, n), r.finish();
        }
      }
      function Wr(e) {
        var t = e.display.gutters.offsetWidth;
        e.display.sizer.style.marginLeft = t + 'px';
      }
      function Pr(e, t) {
        (e.display.sizer.style.minHeight = t.docHeight + 'px'),
          (e.display.heightForcer.style.top = t.docHeight + 'px'),
          (e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + ft(e) + 'px');
      }
      function Hr(e) {
        var r = e.display.gutters,
          i = e.options.gutters;
        t(r);
        for (var o = 0; o < i.length; ++o) {
          var a = i[o],
            l = r.appendChild(n('div', null, 'CodeMirror-gutter ' + a));
          'CodeMirror-linenumbers' == a &&
            ((e.display.lineGutter = l),
            (l.style.width = (e.display.lineNumWidth || 1) + 'px'));
        }
        (r.style.display = o ? '' : 'none'), Wr(e);
      }
      function Fr(e) {
        var t = d(e.gutters, 'CodeMirror-linenumbers');
        -1 == t && e.lineNumbers
          ? (e.gutters = e.gutters.concat(['CodeMirror-linenumbers']))
          : t > -1 &&
            !e.lineNumbers &&
            ((e.gutters = e.gutters.slice(0)), e.gutters.splice(t, 1));
      }
      function zr(e) {
        var t = e.wheelDeltaX,
          r = e.wheelDeltaY;
        return (
          null == t &&
            e.detail &&
            e.axis == e.HORIZONTAL_AXIS &&
            (t = e.detail),
          null == r && e.detail && e.axis == e.VERTICAL_AXIS
            ? (r = e.detail)
            : null == r && (r = e.wheelDelta),
          { x: t, y: r }
        );
      }
      function jr(e) {
        var t = zr(e);
        return (t.x *= Jo), (t.y *= Jo), t;
      }
      function Ir(e, t) {
        var r = zr(t),
          n = r.x,
          i = r.y,
          o = e.display,
          a = o.scroller,
          l = a.scrollWidth > a.clientWidth,
          s = a.scrollHeight > a.clientHeight;
        if ((n && l) || (i && s)) {
          if (i && to && Gi)
            e: for (var u = t.target, c = o.view; u != a; u = u.parentNode)
              for (var f = 0; f < c.length; f++)
                if (c[f].node == u) {
                  e.display.currentWheelTarget = u;
                  break e;
                }
          if (n && !ji && !$i && null != Jo)
            return (
              i && s && fr(e, Math.max(0, a.scrollTop + i * Jo)),
              hr(e, Math.max(0, a.scrollLeft + n * Jo)),
              (!i || (i && s)) && be(t),
              void (o.wheelStartX = null)
            );
          if (i && null != Jo) {
            var d = i * Jo,
              h = e.doc.scrollTop,
              p = h + o.wrapper.clientHeight;
            d < 0
              ? (h = Math.max(0, h + d - 50))
              : (p = Math.min(e.doc.height, p + d + 50)),
              Dr(e, { top: h, bottom: p });
          }
          Qo < 20 &&
            (null == o.wheelStartX
              ? ((o.wheelStartX = a.scrollLeft),
                (o.wheelStartY = a.scrollTop),
                (o.wheelDX = n),
                (o.wheelDY = i),
                setTimeout(function() {
                  if (null != o.wheelStartX) {
                    var e = a.scrollLeft - o.wheelStartX,
                      t = a.scrollTop - o.wheelStartY,
                      r =
                        (t && o.wheelDY && t / o.wheelDY) ||
                        (e && o.wheelDX && e / o.wheelDX);
                    (o.wheelStartX = o.wheelStartY = null),
                      r && ((Jo = (Jo * Qo + r) / (Qo + 1)), ++Qo);
                  }
                }, 200))
              : ((o.wheelDX += n), (o.wheelDY += i)));
        }
      }
      function Rr(e, t) {
        var r = e[t];
        e.sort(function(e, t) {
          return W(e.from(), t.from());
        }),
          (t = d(e, r));
        for (var n = 1; n < e.length; n++) {
          var i = e[n],
            o = e[n - 1];
          if (W(o.to(), i.from()) >= 0) {
            var a = z(o.from(), i.from()),
              l = F(o.to(), i.to()),
              s = o.empty() ? i.from() == i.head : o.from() == o.head;
            n <= t && --t, e.splice(--n, 2, new ta(s ? l : a, s ? a : l));
          }
        }
        return new ea(e, t);
      }
      function Br(e, t) {
        return new ea([new ta(e, t || e)], 0);
      }
      function Vr(e) {
        return e.text
          ? D(
              e.from.line + e.text.length - 1,
              g(e.text).length + (1 == e.text.length ? e.from.ch : 0)
            )
          : e.to;
      }
      function Ur(e, t) {
        if (W(e, t.from) < 0) return e;
        if (W(e, t.to) <= 0) return Vr(t);
        var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          n = e.ch;
        return e.line == t.to.line && (n += Vr(t).ch - t.to.ch), D(r, n);
      }
      function Gr(e, t) {
        for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
          var i = e.sel.ranges[n];
          r.push(new ta(Ur(i.anchor, t), Ur(i.head, t)));
        }
        return Rr(r, e.sel.primIndex);
      }
      function qr(e, t, r) {
        return e.line == t.line
          ? D(r.line, e.ch - t.ch + r.ch)
          : D(r.line + (e.line - t.line), e.ch);
      }
      function Kr(e) {
        (e.doc.mode = Oe(e.options, e.doc.modeOption)), $r(e);
      }
      function $r(e) {
        e.doc.iter(function(e) {
          e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
        }),
          (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
          Ar(e, 100),
          e.state.modeGen++,
          e.curOp && kr(e);
      }
      function Xr(e, t) {
        return (
          0 == t.from.ch &&
          0 == t.to.ch &&
          '' == g(t.text) &&
          (!e.cm || e.cm.options.wholeLineUpdateBefore)
        );
      }
      function Yr(e, t, r, n) {
        function i(e) {
          return r ? r[e] : null;
        }
        function o(e, r, i) {
          !(function(e, t, r, n) {
            (e.text = t),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null),
              K(e),
              $(e, r);
            var i = n ? n(e) : 1;
            i != e.height && O(e, i);
          })(e, r, i, n),
            Ye(e, 'change', e, t);
        }
        function a(e, t) {
          for (var r = [], o = e; o < t; ++o) r.push(new Io(u[o], i(o), n));
          return r;
        }
        var l = t.from,
          s = t.to,
          u = t.text,
          c = L(e, l.line),
          f = L(e, s.line),
          d = g(u),
          h = i(u.length - 1),
          p = s.line - l.line;
        if (t.full)
          e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);
        else if (Xr(e, t)) {
          var v = a(0, u.length - 1);
          o(f, f.text, h),
            p && e.remove(l.line, p),
            v.length && e.insert(l.line, v);
        } else if (c == f)
          if (1 == u.length)
            o(c, c.text.slice(0, l.ch) + d + c.text.slice(s.ch), h);
          else {
            var m = a(1, u.length - 1);
            m.push(new Io(d + c.text.slice(s.ch), h, n)),
              o(c, c.text.slice(0, l.ch) + u[0], i(0)),
              e.insert(l.line + 1, m);
          }
        else if (1 == u.length)
          o(c, c.text.slice(0, l.ch) + u[0] + f.text.slice(s.ch), i(0)),
            e.remove(l.line + 1, p);
        else {
          o(c, c.text.slice(0, l.ch) + u[0], i(0)),
            o(f, d + f.text.slice(s.ch), h);
          var y = a(1, u.length - 1);
          p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, y);
        }
        Ye(e, 'change', e, t);
      }
      function Zr(e, t, r) {
        function n(e, i, o) {
          if (e.linked)
            for (var a = 0; a < e.linked.length; ++a) {
              var l = e.linked[a];
              if (l.doc != i) {
                var s = o && l.sharedHist;
                (r && !s) || (t(l.doc, s), n(l.doc, e, s));
              }
            }
        }
        n(e, null, !0);
      }
      function Qr(e, t) {
        if (t.cm) throw new Error('This document is already in use.');
        (e.doc = t),
          (t.cm = e),
          Bt(e),
          Kr(e),
          Jr(e),
          e.options.lineWrapping || ue(e),
          (e.options.mode = t.modeOption),
          kr(e);
      }
      function Jr(e) {
        ('rtl' == e.doc.direction
          ? l
          : so)(e.display.lineDiv, 'CodeMirror-rtl');
      }
      function en(e) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = e || 1);
      }
      function tn(e, t) {
        var r = { from: H(t.from), to: Vr(t), text: T(e, t.from, t.to) };
        return (
          ln(e, r, t.from.line, t.to.line + 1),
          Zr(
            e,
            function(e) {
              return ln(e, r, t.from.line, t.to.line + 1);
            },
            !0
          ),
          r
        );
      }
      function rn(e) {
        for (; e.length; ) {
          if (!g(e).ranges) break;
          e.pop();
        }
      }
      function nn(e, t, r, n) {
        var i = e.history;
        i.undone.length = 0;
        var o,
          a,
          l = +new Date();
        if (
          (i.lastOp == n ||
            (i.lastOrigin == t.origin &&
              t.origin &&
              (('+' == t.origin.charAt(0) &&
                e.cm &&
                i.lastModTime > l - e.cm.options.historyEventDelay) ||
                '*' == t.origin.charAt(0)))) &&
          (o = (function(e, t) {
            return t
              ? (rn(e.done), g(e.done))
              : e.done.length && !g(e.done).ranges
                ? g(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                  ? (e.done.pop(), g(e.done))
                  : void 0;
          })(i, i.lastOp == n))
        )
          (a = g(o.changes)),
            0 == W(t.from, t.to) && 0 == W(t.from, a.to)
              ? (a.to = Vr(t))
              : o.changes.push(tn(e, t));
        else {
          var s = g(i.done);
          for (
            (s && s.ranges) || an(e.sel, i.done),
              o = { changes: [tn(e, t)], generation: i.generation },
              i.done.push(o);
            i.done.length > i.undoDepth;

          )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(r),
          (i.generation = ++i.maxGeneration),
          (i.lastModTime = i.lastSelTime = l),
          (i.lastOp = i.lastSelOp = n),
          (i.lastOrigin = i.lastSelOrigin = t.origin),
          a || pe(e, 'historyAdded');
      }
      function on(e, t, r, n) {
        var i = e.history,
          o = n && n.origin;
        r == i.lastSelOp ||
        (o &&
          i.lastSelOrigin == o &&
          ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
            (function(e, t, r, n) {
              var i = t.charAt(0);
              return (
                '*' == i ||
                ('+' == i &&
                  r.ranges.length == n.ranges.length &&
                  r.somethingSelected() == n.somethingSelected() &&
                  new Date() - e.history.lastSelTime <=
                    (e.cm ? e.cm.options.historyEventDelay : 500))
              );
            })(e, o, g(i.done), t)))
          ? (i.done[i.done.length - 1] = t)
          : an(t, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = r),
          n && !1 !== n.clearRedo && rn(i.undone);
      }
      function an(e, t) {
        var r = g(t);
        (r && r.ranges && r.equals(e)) || t.push(e);
      }
      function ln(e, t, r, n) {
        var i = t['spans_' + e.id],
          o = 0;
        e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function(
          r
        ) {
          r.markedSpans &&
            ((i || (i = t['spans_' + e.id] = {}))[o] = r.markedSpans),
            ++o;
        });
      }
      function sn(e) {
        if (!e) return null;
        for (var t, r = 0; r < e.length; ++r)
          e[r].marker.explicitlyCleared
            ? t || (t = e.slice(0, r))
            : t && t.push(e[r]);
        return t ? (t.length ? t : null) : e;
      }
      function un(e, t) {
        var r = (function(e, t) {
            var r = t['spans_' + e.id];
            if (!r) return null;
            for (var n = [], i = 0; i < t.text.length; ++i) n.push(sn(r[i]));
            return n;
          })(e, t),
          n = G(e, t);
        if (!r) return n;
        if (!n) return r;
        for (var i = 0; i < r.length; ++i) {
          var o = r[i],
            a = n[i];
          if (o && a)
            e: for (var l = 0; l < a.length; ++l) {
              for (var s = a[l], u = 0; u < o.length; ++u)
                if (o[u].marker == s.marker) continue e;
              o.push(s);
            }
          else a && (r[i] = a);
        }
        return r;
      }
      function cn(e, t, r) {
        for (var n = [], i = 0; i < e.length; ++i) {
          var o = e[i];
          if (o.ranges) n.push(r ? ea.prototype.deepCopy.call(o) : o);
          else {
            var a = o.changes,
              l = [];
            n.push({ changes: l });
            for (var s = 0; s < a.length; ++s) {
              var u = a[s],
                c = void 0;
              if ((l.push({ from: u.from, to: u.to, text: u.text }), t))
                for (var f in u)
                  (c = f.match(/^spans_(\d+)$/)) &&
                    d(t, Number(c[1])) > -1 &&
                    ((g(l)[f] = u[f]), delete u[f]);
            }
          }
        }
        return n;
      }
      function fn(e, t, r, n) {
        if (n) {
          var i = e.anchor;
          if (r) {
            var o = W(t, i) < 0;
            o != W(r, i) < 0 ? ((i = t), (t = r)) : o != W(t, r) < 0 && (t = r);
          }
          return new ta(i, t);
        }
        return new ta(r || t, t);
      }
      function dn(e, t, r, n, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
          mn(e, new ea([fn(e.sel.primary(), t, r, i)], 0), n);
      }
      function hn(e, t, r) {
        for (
          var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
          o < e.sel.ranges.length;
          o++
        )
          n[o] = fn(e.sel.ranges[o], t[o], null, i);
        mn(e, Rr(n, e.sel.primIndex), r);
      }
      function pn(e, t, r, n) {
        var i = e.sel.ranges.slice(0);
        (i[t] = r), mn(e, Rr(i, e.sel.primIndex), n);
      }
      function gn(e, t, r, n) {
        mn(e, Br(t, r), n);
      }
      function vn(e, t, r) {
        var n = e.history.done,
          i = g(n);
        i && i.ranges ? ((n[n.length - 1] = t), yn(e, t, r)) : mn(e, t, r);
      }
      function mn(e, t, r) {
        yn(e, t, r), on(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
      }
      function yn(e, t, r) {
        (me(e, 'beforeSelectionChange') ||
          (e.cm && me(e.cm, 'beforeSelectionChange'))) &&
          (t = (function(e, t, r) {
            var n = {
              ranges: t.ranges,
              update: function(t) {
                var r = this;
                this.ranges = [];
                for (var n = 0; n < t.length; n++)
                  r.ranges[n] = new ta(I(e, t[n].anchor), I(e, t[n].head));
              },
              origin: r && r.origin,
            };
            return (
              pe(e, 'beforeSelectionChange', e, n),
              e.cm && pe(e.cm, 'beforeSelectionChange', e.cm, n),
              n.ranges != t.ranges ? Rr(n.ranges, n.ranges.length - 1) : t
            );
          })(e, t, r));
        bn(
          e,
          xn(
            e,
            t,
            (r && r.bias) ||
              (W(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1),
            !0
          )
        ),
          (r && !1 === r.scroll) || !e.cm || lr(e.cm);
      }
      function bn(e, t) {
        t.equals(e.sel) ||
          ((e.sel = t),
          e.cm &&
            ((e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0),
            ve(e.cm)),
          Ye(e, 'cursorActivity', e));
      }
      function wn(e) {
        bn(e, xn(e, e.sel, null, !1));
      }
      function xn(e, t, r, n) {
        for (var i, o = 0; o < t.ranges.length; o++) {
          var a = t.ranges[o],
            l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
            s = Sn(e, a.anchor, l && l.anchor, r, n),
            u = Sn(e, a.head, l && l.head, r, n);
          (i || s != a.anchor || u != a.head) &&
            (i || (i = t.ranges.slice(0, o)), (i[o] = new ta(s, u)));
        }
        return i ? Rr(i, t.primIndex) : t;
      }
      function Cn(e, t, r, n, i) {
        var o = L(e, t.line);
        if (o.markedSpans)
          for (var a = 0; a < o.markedSpans.length; ++a) {
            var l = o.markedSpans[a],
              s = l.marker;
            if (
              (null == l.from ||
                (s.inclusiveLeft ? l.from <= t.ch : l.from < t.ch)) &&
              (null == l.to || (s.inclusiveRight ? l.to >= t.ch : l.to > t.ch))
            ) {
              if (i && (pe(s, 'beforeCursorEnter'), s.explicitlyCleared)) {
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
                    (u = kn(e, u, -n, u && u.line == t.line ? o : null)),
                  u &&
                    u.line == t.line &&
                    (c = W(u, r)) &&
                    (n < 0 ? c < 0 : c > 0))
                )
                  return Cn(e, u, t, n, i);
              }
              var f = s.find(n < 0 ? -1 : 1);
              return (
                (n < 0 ? s.inclusiveLeft : s.inclusiveRight) &&
                  (f = kn(e, f, n, f.line == t.line ? o : null)),
                f ? Cn(e, f, t, n, i) : null
              );
            }
          }
        return t;
      }
      function Sn(e, t, r, n, i) {
        var o = n || 1,
          a =
            Cn(e, t, r, o, i) ||
            (!i && Cn(e, t, r, o, !0)) ||
            Cn(e, t, r, -o, i) ||
            (!i && Cn(e, t, r, -o, !0));
        return a || ((e.cantEdit = !0), D(e.first, 0));
      }
      function kn(e, t, r, n) {
        return r < 0 && 0 == t.ch
          ? t.line > e.first ? I(e, D(t.line - 1)) : null
          : r > 0 && t.ch == (n || L(e, t.line)).text.length
            ? t.line < e.first + e.size - 1 ? D(t.line + 1, 0) : null
            : new D(t.line, t.ch + r);
      }
      function Ln(e) {
        e.setSelection(D(e.firstLine(), 0), D(e.lastLine()), vo);
      }
      function Tn(e, t, r) {
        var n = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return (n.canceled = !0);
          },
        };
        return (
          r &&
            (n.update = function(t, r, i, o) {
              t && (n.from = I(e, t)),
                r && (n.to = I(e, r)),
                i && (n.text = i),
                void 0 !== o && (n.origin = o);
            }),
          pe(e, 'beforeChange', e, n),
          e.cm && pe(e.cm, 'beforeChange', e.cm, n),
          n.canceled
            ? null
            : { from: n.from, to: n.to, text: n.text, origin: n.origin }
        );
      }
      function Mn(e, t, r) {
        if (e.cm) {
          if (!e.cm.curOp) return xr(e.cm, Mn)(e, t, r);
          if (e.cm.state.suppressEdits) return;
        }
        if (
          !(me(e, 'beforeChange') || (e.cm && me(e.cm, 'beforeChange'))) ||
          (t = Tn(e, t, !0))
        ) {
          var n =
            Co &&
            !r &&
            (function(e, t, r) {
              var n = null;
              if (
                (e.iter(t.line, r.line + 1, function(e) {
                  if (e.markedSpans)
                    for (var t = 0; t < e.markedSpans.length; ++t) {
                      var r = e.markedSpans[t].marker;
                      !r.readOnly ||
                        (n && -1 != d(n, r)) ||
                        (n || (n = [])).push(r);
                    }
                }),
                !n)
              )
                return null;
              for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
                for (var a = n[o], l = a.find(0), s = 0; s < i.length; ++s) {
                  var u = i[s];
                  if (!(W(u.to, l.from) < 0 || W(u.from, l.to) > 0)) {
                    var c = [s, 1],
                      f = W(u.from, l.from),
                      h = W(u.to, l.to);
                    (f < 0 || (!a.inclusiveLeft && !f)) &&
                      c.push({ from: u.from, to: l.from }),
                      (h > 0 || (!a.inclusiveRight && !h)) &&
                        c.push({ from: l.to, to: u.to }),
                      i.splice.apply(i, c),
                      (s += c.length - 3);
                  }
                }
              return i;
            })(e, t.from, t.to);
          if (n)
            for (var i = n.length - 1; i >= 0; --i)
              On(e, {
                from: n[i].from,
                to: n[i].to,
                text: i ? [''] : t.text,
                origin: t.origin,
              });
          else On(e, t);
        }
      }
      function On(e, t) {
        if (1 != t.text.length || '' != t.text[0] || 0 != W(t.from, t.to)) {
          var r = Gr(e, t);
          nn(e, t, r, e.cm ? e.cm.curOp.id : NaN), Nn(e, t, r, G(e, t));
          var n = [];
          Zr(e, function(e, r) {
            r || -1 != d(n, e.history) || (Pn(e.history, t), n.push(e.history)),
              Nn(e, t, null, G(e, t));
          });
        }
      }
      function An(e, t, r) {
        if (!e.cm || !e.cm.state.suppressEdits || r) {
          for (
            var n,
              i = e.history,
              o = e.sel,
              a = 'undo' == t ? i.done : i.undone,
              l = 'undo' == t ? i.undone : i.done,
              s = 0;
            s < a.length &&
            ((n = a[s]), r ? !n.ranges || n.equals(e.sel) : n.ranges);
            s++
          );
          if (s != a.length) {
            for (
              i.lastOrigin = i.lastSelOrigin = null;
              (n = a.pop()).ranges;

            ) {
              if ((an(n, l), r && !n.equals(e.sel)))
                return void mn(e, n, { clearRedo: !1 });
              o = n;
            }
            var u = [];
            an(o, l),
              l.push({ changes: u, generation: i.generation }),
              (i.generation = n.generation || ++i.maxGeneration);
            for (
              var c =
                  me(e, 'beforeChange') || (e.cm && me(e.cm, 'beforeChange')),
                f = function(r) {
                  var i = n.changes[r];
                  if (((i.origin = t), c && !Tn(e, i, !1)))
                    return (a.length = 0), {};
                  u.push(tn(e, i));
                  var o = r ? Gr(e, i) : g(a);
                  Nn(e, i, o, un(e, i)),
                    !r &&
                      e.cm &&
                      e.cm.scrollIntoView({ from: i.from, to: Vr(i) });
                  var l = [];
                  Zr(e, function(e, t) {
                    t ||
                      -1 != d(l, e.history) ||
                      (Pn(e.history, i), l.push(e.history)),
                      Nn(e, i, null, un(e, i));
                  });
                },
                h = n.changes.length - 1;
              h >= 0;
              --h
            ) {
              var p = f(h);
              if (p) return p.v;
            }
          }
        }
      }
      function _n(e, t) {
        if (
          0 != t &&
          ((e.first += t),
          (e.sel = new ea(
            v(e.sel.ranges, function(e) {
              return new ta(
                D(e.anchor.line + t, e.anchor.ch),
                D(e.head.line + t, e.head.ch)
              );
            }),
            e.sel.primIndex
          )),
          e.cm)
        ) {
          kr(e.cm, e.first, e.first - t, t);
          for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
            Lr(e.cm, n, 'gutter');
        }
      }
      function Nn(e, t, r, n) {
        if (e.cm && !e.cm.curOp) return xr(e.cm, Nn)(e, t, r, n);
        if (t.to.line < e.first)
          _n(e, t.text.length - 1 - (t.to.line - t.from.line));
        else if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            _n(e, i),
              (t = {
                from: D(e.first, 0),
                to: D(t.to.line + i, t.to.ch),
                text: [g(t.text)],
                origin: t.origin,
              });
          }
          var o = e.lastLine();
          t.to.line > o &&
            (t = {
              from: t.from,
              to: D(o, L(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin,
            }),
            (t.removed = T(e, t.from, t.to)),
            r || (r = Gr(e, t)),
            e.cm
              ? (function(e, t, r) {
                  var n = e.doc,
                    i = e.display,
                    o = t.from,
                    a = t.to,
                    l = !1,
                    s = o.line;
                  e.options.lineWrapping ||
                    ((s = A(re(L(n, o.line)))),
                    n.iter(s, a.line + 1, function(e) {
                      if (e == i.maxLine) return (l = !0), !0;
                    }));
                  n.sel.contains(t.from, t.to) > -1 && ve(e);
                  Yr(n, t, r, Rt(e)),
                    e.options.lineWrapping ||
                      (n.iter(s, o.line + t.text.length, function(e) {
                        var t = se(e);
                        t > i.maxLineLength &&
                          ((i.maxLine = e),
                          (i.maxLineLength = t),
                          (i.maxLineChanged = !0),
                          (l = !1));
                      }),
                      l && (e.curOp.updateMaxLine = !0));
                  (function(e, t) {
                    if (
                      ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                      !(e.highlightFrontier < t - 10))
                    ) {
                      for (var r = e.first, n = t - 1; n > r; n--) {
                        var i = L(e, n).stateAfter;
                        if (i && (!(i instanceof Fo) || n + i.lookAhead < t)) {
                          r = n + 1;
                          break;
                        }
                      }
                      e.highlightFrontier = Math.min(e.highlightFrontier, r);
                    }
                  })(n, o.line),
                    Ar(e, 400);
                  var u = t.text.length - (a.line - o.line) - 1;
                  t.full
                    ? kr(e)
                    : o.line != a.line || 1 != t.text.length || Xr(e.doc, t)
                      ? kr(e, o.line, a.line + 1, u)
                      : Lr(e, o.line, 'text');
                  var c = me(e, 'changes'),
                    f = me(e, 'change');
                  if (f || c) {
                    var d = {
                      from: o,
                      to: a,
                      text: t.text,
                      removed: t.removed,
                      origin: t.origin,
                    };
                    f && Ye(e, 'change', e, d),
                      c &&
                        (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(
                          d
                        );
                  }
                  e.display.selForContextMenu = null;
                })(e.cm, t, n)
              : Yr(e, t, n),
            yn(e, r, vo);
        }
      }
      function En(e, t, r, n, i) {
        if ((n || (n = r), W(n, r) < 0)) {
          var o;
          (r = (o = [n, r])[0]), (n = o[1]);
        }
        'string' == typeof t && (t = e.splitLines(t)),
          Mn(e, { from: r, to: n, text: t, origin: i });
      }
      function Dn(e, t, r, n) {
        r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
      }
      function Wn(e, t, r, n) {
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            a = !0;
          if (o.ranges) {
            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
            for (var l = 0; l < o.ranges.length; l++)
              Dn(o.ranges[l].anchor, t, r, n), Dn(o.ranges[l].head, t, r, n);
          } else {
            for (var s = 0; s < o.changes.length; ++s) {
              var u = o.changes[s];
              if (r < u.from.line)
                (u.from = D(u.from.line + n, u.from.ch)),
                  (u.to = D(u.to.line + n, u.to.ch));
              else if (t <= u.to.line) {
                a = !1;
                break;
              }
            }
            a || (e.splice(0, i + 1), (i = 0));
          }
        }
      }
      function Pn(e, t) {
        var r = t.from.line,
          n = t.to.line,
          i = t.text.length - (n - r) - 1;
        Wn(e.done, r, n, i), Wn(e.undone, r, n, i);
      }
      function Hn(e, t, r, n) {
        var i = t,
          o = t;
        return (
          'number' == typeof t ? (o = L(e, j(e, t))) : (i = A(t)),
          null == i ? null : (n(o, i) && e.cm && Lr(e.cm, i, r), o)
        );
      }
      function Fn(e) {
        var t = this;
        (this.lines = e), (this.parent = null);
        for (var r = 0, n = 0; n < e.length; ++n)
          (e[n].parent = t), (r += e[n].height);
        this.height = r;
      }
      function zn(e) {
        var t = this;
        this.children = e;
        for (var r = 0, n = 0, i = 0; i < e.length; ++i) {
          var o = e[i];
          (r += o.chunkSize()), (n += o.height), (o.parent = t);
        }
        (this.size = r), (this.height = n), (this.parent = null);
      }
      function jn(e, t, r) {
        le(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && ar(e, r);
      }
      function In(e, t, r, n, o) {
        if (n && n.shared)
          return (function(e, t, r, n, i) {
            (n = c(n)).shared = !1;
            var o = [In(e, t, r, n, i)],
              a = o[0],
              l = n.widgetNode;
            return (
              Zr(e, function(e) {
                l && (n.widgetNode = l.cloneNode(!0)),
                  o.push(In(e, I(e, t), I(e, r), n, i));
                for (var s = 0; s < e.linked.length; ++s)
                  if (e.linked[s].isParent) return;
                a = g(o);
              }),
              new oa(o, a)
            );
          })(e, t, r, n, o);
        if (e.cm && !e.cm.curOp) return xr(e.cm, In)(e, t, r, n, o);
        var a = new ia(e, o),
          l = W(t, r);
        if ((n && c(n, a, !1), l > 0 || (0 == l && !1 !== a.clearWhenEmpty)))
          return a;
        if (
          (a.replacedWith &&
            ((a.collapsed = !0),
            (a.widgetNode = i('span', [a.replacedWith], 'CodeMirror-widget')),
            n.handleMouseEvents ||
              a.widgetNode.setAttribute('cm-ignore-events', 'true'),
            n.insertLeft && (a.widgetNode.insertLeft = !0)),
          a.collapsed)
        ) {
          if (
            te(e, t.line, t, r, a) ||
            (t.line != r.line && te(e, r.line, t, r, a))
          )
            throw new Error(
              'Inserting collapsed marker partially overlapping an existing one'
            );
          So = !0;
        }
        a.addToHistory &&
          nn(e, { from: t, to: r, origin: 'markText' }, e.sel, NaN);
        var s,
          u = t.line,
          f = e.cm;
        if (
          (e.iter(u, r.line + 1, function(e) {
            f &&
              a.collapsed &&
              !f.options.lineWrapping &&
              re(e) == f.display.maxLine &&
              (s = !0),
              a.collapsed && u != t.line && O(e, 0),
              (function(e, t) {
                (e.markedSpans = e.markedSpans
                  ? e.markedSpans.concat([t])
                  : [t]),
                  t.marker.attachLine(e);
              })(
                e,
                new B(a, u == t.line ? t.ch : null, u == r.line ? r.ch : null)
              ),
              ++u;
          }),
          a.collapsed &&
            e.iter(t.line, r.line + 1, function(t) {
              oe(e, t) && O(t, 0);
            }),
          a.clearOnEnter &&
            Mo(a, 'beforeCursorEnter', function() {
              return a.clear();
            }),
          a.readOnly &&
            ((Co = !0),
            (e.history.done.length || e.history.undone.length) &&
              e.clearHistory()),
          a.collapsed && ((a.id = ++na), (a.atomic = !0)),
          f)
        ) {
          if ((s && (f.curOp.updateMaxLine = !0), a.collapsed))
            kr(f, t.line, r.line + 1);
          else if (
            a.className ||
            a.title ||
            a.startStyle ||
            a.endStyle ||
            a.css
          )
            for (var d = t.line; d <= r.line; d++) Lr(f, d, 'text');
          a.atomic && wn(f.doc), Ye(f, 'markerAdded', f, a);
        }
        return a;
      }
      function Rn(e) {
        return e.findMarks(D(e.first, 0), e.clipPos(D(e.lastLine())), function(
          e
        ) {
          return e.parent;
        });
      }
      function Bn(e) {
        for (
          var t = function(t) {
              var r = e[t],
                n = [r.primary.doc];
              Zr(r.primary.doc, function(e) {
                return n.push(e);
              });
              for (var i = 0; i < r.markers.length; i++) {
                var o = r.markers[i];
                -1 == d(n, o.doc) &&
                  ((o.parent = null), r.markers.splice(i--, 1));
              }
            },
            r = 0;
          r < e.length;
          r++
        )
          t(r);
      }
      function Vn(e) {
        var t = this;
        if ((Un(t), !ge(t, e) && !lt(t.display, e))) {
          be(e), Vi && (sa = +new Date());
          var r = Vt(t, e, !0),
            n = e.dataTransfer.files;
          if (r && !t.isReadOnly())
            if (n && n.length && window.FileReader && window.File)
              for (
                var i = n.length,
                  o = Array(i),
                  a = 0,
                  l = function(e, n) {
                    if (
                      !t.options.allowDropFileTypes ||
                      -1 != d(t.options.allowDropFileTypes, e.type)
                    ) {
                      var l = new FileReader();
                      (l.onload = xr(t, function() {
                        var e = l.result;
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ''),
                          (o[n] = e),
                          ++a == i)
                        ) {
                          var s = {
                            from: (r = I(t.doc, r)),
                            to: r,
                            text: t.doc.splitLines(
                              o.join(t.doc.lineSeparator())
                            ),
                            origin: 'paste',
                          };
                          Mn(t.doc, s), vn(t.doc, Br(r, Vr(s)));
                        }
                      })),
                        l.readAsText(e);
                    }
                  },
                  s = 0;
                s < i;
                ++s
              )
                l(n[s], s);
            else {
              if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                return (
                  t.state.draggingText(e),
                  void setTimeout(function() {
                    return t.display.input.focus();
                  }, 20)
                );
              try {
                var u = e.dataTransfer.getData('Text');
                if (u) {
                  var c;
                  if (
                    (t.state.draggingText &&
                      !t.state.draggingText.copy &&
                      (c = t.listSelections()),
                    yn(t.doc, Br(r, r)),
                    c)
                  )
                    for (var f = 0; f < c.length; ++f)
                      En(t.doc, '', c[f].anchor, c[f].head, 'drag');
                  t.replaceSelection(u, 'around', 'paste'),
                    t.display.input.focus();
                }
              } catch (e) {}
            }
        }
      }
      function Un(e) {
        e.display.dragCursor &&
          (e.display.lineSpace.removeChild(e.display.dragCursor),
          (e.display.dragCursor = null));
      }
      function Gn(e) {
        if (document.getElementsByClassName)
          for (
            var t = document.getElementsByClassName('CodeMirror'), r = 0;
            r < t.length;
            r++
          ) {
            var n = t[r].CodeMirror;
            n && e(n);
          }
      }
      function qn() {
        ua ||
          (!(function() {
            var e;
            Mo(window, 'resize', function() {
              null == e &&
                (e = setTimeout(function() {
                  (e = null), Gn(Kn);
                }, 100));
            }),
              Mo(window, 'blur', function() {
                return Gn(Jt);
              });
          })(),
          (ua = !0));
      }
      function Kn(e) {
        var t = e.display;
        (t.lastWrapHeight == t.wrapper.clientHeight &&
          t.lastWrapWidth == t.wrapper.clientWidth) ||
          ((t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
          (t.scrollbarsClipped = !1),
          e.setSize());
      }
      function $n(e) {
        var t = e.split(/-(?!$)/);
        e = t[t.length - 1];
        for (var r, n, i, o, a = 0; a < t.length - 1; a++) {
          var l = t[a];
          if (/^(cmd|meta|m)$/i.test(l)) o = !0;
          else if (/^a(lt)?$/i.test(l)) r = !0;
          else if (/^(c|ctrl|control)$/i.test(l)) n = !0;
          else {
            if (!/^s(hift)?$/i.test(l))
              throw new Error('Unrecognized modifier name: ' + l);
            i = !0;
          }
        }
        return (
          r && (e = 'Alt-' + e),
          n && (e = 'Ctrl-' + e),
          o && (e = 'Cmd-' + e),
          i && (e = 'Shift-' + e),
          e
        );
      }
      function Xn(e) {
        var t = {};
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var n = e[r];
            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
            if ('...' == n) {
              delete e[r];
              continue;
            }
            for (var i = v(r.split(' '), $n), o = 0; o < i.length; o++) {
              var a = void 0,
                l = void 0;
              o == i.length - 1
                ? ((l = i.join(' ')), (a = n))
                : ((l = i.slice(0, o + 1).join(' ')), (a = '...'));
              var s = t[l];
              if (s) {
                if (s != a) throw new Error('Inconsistent bindings for ' + l);
              } else t[l] = a;
            }
            delete e[r];
          }
        for (var u in t) e[u] = t[u];
        return e;
      }
      function Yn(e, t, r, n) {
        var i = (t = ei(t)).call ? t.call(e, n) : t[e];
        if (!1 === i) return 'nothing';
        if ('...' === i) return 'multi';
        if (null != i && r(i)) return 'handled';
        if (t.fallthrough) {
          if ('[object Array]' != Object.prototype.toString.call(t.fallthrough))
            return Yn(e, t.fallthrough, r, n);
          for (var o = 0; o < t.fallthrough.length; o++) {
            var a = Yn(e, t.fallthrough[o], r, n);
            if (a) return a;
          }
        }
      }
      function Zn(e) {
        var t = 'string' == typeof e ? e : ca[e.keyCode];
        return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
      }
      function Qn(e, t, r) {
        var n = e;
        return (
          t.altKey && 'Alt' != n && (e = 'Alt-' + e),
          (ao ? t.metaKey : t.ctrlKey) && 'Ctrl' != n && (e = 'Ctrl-' + e),
          (ao ? t.ctrlKey : t.metaKey) && 'Cmd' != n && (e = 'Cmd-' + e),
          !r && t.shiftKey && 'Shift' != n && (e = 'Shift-' + e),
          e
        );
      }
      function Jn(e, t) {
        if ($i && 34 == e.keyCode && e.char) return !1;
        var r = ca[e.keyCode];
        return null != r && !e.altGraphKey && Qn(r, e, t);
      }
      function ei(e) {
        return 'string' == typeof e ? pa[e] : e;
      }
      function ti(e, t) {
        for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
          for (var o = t(r[i]); n.length && W(o.from, g(n).to) <= 0; ) {
            var a = n.pop();
            if (W(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          n.push(o);
        }
        wr(e, function() {
          for (var t = n.length - 1; t >= 0; t--)
            En(e.doc, '', n[t].from, n[t].to, '+delete');
          lr(e);
        });
      }
      function ri(e, t, r) {
        var n = S(e.text, t + r, r);
        return n < 0 || n > e.text.length ? null : n;
      }
      function ni(e, t, r) {
        var n = ri(e, t.ch, r);
        return null == n ? null : new D(t.line, n, r < 0 ? 'after' : 'before');
      }
      function ii(e, t, r, n, i) {
        if (e) {
          var o = fe(r, t.doc.direction);
          if (o) {
            var a,
              l = i < 0 ? g(o) : o[0],
              s = i < 0 == (1 == l.level) ? 'after' : 'before';
            if (l.level > 0 || 'rtl' == t.doc.direction) {
              var u = mt(t, r);
              a = i < 0 ? r.text.length - 1 : 0;
              var c = yt(t, u, a).top;
              (a = k(
                function(e) {
                  return yt(t, u, e).top == c;
                },
                i < 0 == (1 == l.level) ? l.from : l.to - 1,
                a
              )),
                'before' == s && (a = ri(r, a, 1));
            } else a = i < 0 ? l.to : l.from;
            return new D(n, a, s);
          }
        }
        return new D(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after');
      }
      function oi(e, t) {
        var r = L(e.doc, t),
          n = re(r);
        return n != r && (t = A(n)), ii(!0, e, n, t, 1);
      }
      function ai(e, t) {
        var r = L(e.doc, t),
          n = (function(e) {
            for (var t; (t = ee(e)); ) e = t.find(1, !0).line;
            return e;
          })(r);
        return n != r && (t = A(n)), ii(!0, e, r, t, -1);
      }
      function li(e, t) {
        var r = oi(e, t.line),
          n = L(e.doc, r.line),
          i = fe(n, e.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(0, n.text.search(/\S/)),
            a = t.line == r.line && t.ch <= o && t.ch;
          return D(r.line, a ? 0 : o, r.sticky);
        }
        return r;
      }
      function si(e, t, r) {
        if ('string' == typeof t && !(t = ga[t])) return !1;
        e.display.input.ensurePolled();
        var n = e.display.shift,
          i = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
            r && (e.display.shift = !1),
            (i = t(e) != go);
        } finally {
          (e.display.shift = n), (e.state.suppressEdits = !1);
        }
        return i;
      }
      function ui(e, t, r, n) {
        var i = e.state.keySeq;
        if (i) {
          if (Zn(t)) return 'handled';
          va.set(50, function() {
            e.state.keySeq == i &&
              ((e.state.keySeq = null), e.display.input.reset());
          }),
            (t = i + ' ' + t);
        }
        var o = (function(e, t, r) {
          for (var n = 0; n < e.state.keyMaps.length; n++) {
            var i = Yn(t, e.state.keyMaps[n], r, e);
            if (i) return i;
          }
          return (
            (e.options.extraKeys && Yn(t, e.options.extraKeys, r, e)) ||
            Yn(t, e.options.keyMap, r, e)
          );
        })(e, t, n);
        return (
          'multi' == o && (e.state.keySeq = t),
          'handled' == o && Ye(e, 'keyHandled', e, t, r),
          ('handled' != o && 'multi' != o) || (be(r), Xt(e)),
          i && !o && /\'$/.test(t) ? (be(r), !0) : !!o
        );
      }
      function ci(e, t) {
        var r = Jn(t, !0);
        return (
          !!r &&
          (t.shiftKey && !e.state.keySeq
            ? ui(e, 'Shift-' + r, t, function(t) {
                return si(e, t, !0);
              }) ||
              ui(e, r, t, function(t) {
                if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                  return si(e, t);
              })
            : ui(e, r, t, function(t) {
                return si(e, t);
              }))
        );
      }
      function fi(e) {
        var t = this;
        if (((t.curOp.focus = a()), !ge(t, e))) {
          Vi && Ui < 11 && 27 == e.keyCode && (e.returnValue = !1);
          var r = e.keyCode;
          t.display.shift = 16 == r || e.shiftKey;
          var n = ci(t, e);
          $i &&
            ((ma = n ? r : null),
            !n &&
              88 == r &&
              !No &&
              (to ? e.metaKey : e.ctrlKey) &&
              t.replaceSelection('', null, 'cut')),
            18 != r ||
              /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
              (function(e) {
                function t(e) {
                  (18 != e.keyCode && e.altKey) ||
                    (so(r, 'CodeMirror-crosshair'),
                    he(document, 'keyup', t),
                    he(document, 'mouseover', t));
                }
                var r = e.display.lineDiv;
                l(r, 'CodeMirror-crosshair');
                Mo(document, 'keyup', t), Mo(document, 'mouseover', t);
              })(t);
        }
      }
      function di(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
      }
      function hi(e) {
        var t = this;
        if (
          !(
            lt(t.display, e) ||
            ge(t, e) ||
            (e.ctrlKey && !e.altKey) ||
            (to && e.metaKey)
          )
        ) {
          var r = e.keyCode,
            n = e.charCode;
          if ($i && r == ma) return (ma = null), void be(e);
          if (!$i || (e.which && !(e.which < 10)) || !ci(t, e)) {
            var i = String.fromCharCode(null == n ? r : n);
            '\b' != i &&
              ((function(e, t, r) {
                return ui(e, "'" + r + "'", t, function(t) {
                  return si(e, t, !0);
                });
              })(t, e, i) ||
                t.display.input.onKeyPress(e));
          }
        }
      }
      function pi(e) {
        var t = this,
          r = t.display;
        if (!(ge(t, e) || (r.activeTouch && r.input.supportsTouch())))
          if ((r.input.ensurePolled(), (r.shift = e.shiftKey), lt(r, e)))
            Gi ||
              ((r.scroller.draggable = !1),
              setTimeout(function() {
                return (r.scroller.draggable = !0);
              }, 100));
          else if (!mi(t, e)) {
            var n = Vt(t, e),
              i = ke(e),
              o = n
                ? (function(e, t) {
                    var r = +new Date();
                    return wa && wa.compare(r, e, t)
                      ? ((ba = wa = null), 'triple')
                      : ba && ba.compare(r, e, t)
                        ? ((wa = new ya(r, e, t)), (ba = null), 'double')
                        : ((ba = new ya(r, e, t)), (wa = null), 'single');
                  })(n, i)
                : 'single';
            window.focus(),
              1 == i && t.state.selectingText && t.state.selectingText(e),
              (n &&
                (function(e, t, r, n, i) {
                  var o = 'Click';
                  'double' == n
                    ? (o = 'Double' + o)
                    : 'triple' == n && (o = 'Triple' + o);
                  return (
                    (o = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + o),
                    ui(e, Qn(o, i), i, function(t) {
                      if (('string' == typeof t && (t = ga[t]), !t)) return !1;
                      var n = !1;
                      try {
                        e.isReadOnly() && (e.state.suppressEdits = !0),
                          (n = t(e, r) != go);
                      } finally {
                        e.state.suppressEdits = !1;
                      }
                      return n;
                    })
                  );
                })(t, i, n, o, e)) ||
                (1 == i
                  ? n
                    ? (function(e, t, r, n) {
                        Vi ? setTimeout(u(Yt, e), 0) : (e.curOp.focus = a());
                        var i,
                          o = (function(e, t, r) {
                            var n = e.getOption('configureMouse'),
                              i = n ? n(e, t, r) : {};
                            if (null == i.unit) {
                              var o = ro ? r.shiftKey && r.metaKey : r.altKey;
                              i.unit = o
                                ? 'rectangle'
                                : 'single' == t
                                  ? 'char'
                                  : 'double' == t ? 'word' : 'line';
                            }
                            (null == i.extend || e.doc.extend) &&
                              (i.extend = e.doc.extend || r.shiftKey);
                            null == i.addNew &&
                              (i.addNew = to ? r.metaKey : r.ctrlKey);
                            null == i.moveOnDrag &&
                              (i.moveOnDrag = !(to ? r.altKey : r.ctrlKey));
                            return i;
                          })(e, r, n),
                          l = e.doc.sel;
                        e.options.dragDrop &&
                        Oo &&
                        !e.isReadOnly() &&
                        'single' == r &&
                        (i = l.contains(t)) > -1 &&
                        (W((i = l.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                        (W(i.to(), t) > 0 || t.xRel < 0)
                          ? (function(e, t, r, n) {
                              var i = e.display,
                                o = !1,
                                a = xr(e, function(t) {
                                  Gi && (i.scroller.draggable = !1),
                                    (e.state.draggingText = !1),
                                    he(document, 'mouseup', a),
                                    he(document, 'mousemove', l),
                                    he(i.scroller, 'dragstart', s),
                                    he(i.scroller, 'drop', a),
                                    o ||
                                      (be(t),
                                      n.addNew ||
                                        dn(e.doc, r, null, null, n.extend),
                                      Gi || (Vi && 9 == Ui)
                                        ? setTimeout(function() {
                                            document.body.focus(),
                                              i.input.focus();
                                          }, 20)
                                        : i.input.focus());
                                }),
                                l = function(e) {
                                  o =
                                    o ||
                                    Math.abs(t.clientX - e.clientX) +
                                      Math.abs(t.clientY - e.clientY) >=
                                      10;
                                },
                                s = function() {
                                  return (o = !0);
                                };
                              Gi && (i.scroller.draggable = !0);
                              (e.state.draggingText = a),
                                (a.copy = !n.moveOnDrag),
                                i.scroller.dragDrop && i.scroller.dragDrop();
                              Mo(document, 'mouseup', a),
                                Mo(document, 'mousemove', l),
                                Mo(i.scroller, 'dragstart', s),
                                Mo(i.scroller, 'drop', a),
                                Zt(e),
                                setTimeout(function() {
                                  return i.input.focus();
                                }, 20);
                            })(e, n, t, o)
                          : (function(e, t, r, n) {
                              function i(t) {
                                if (0 != W(m, t))
                                  if (((m = t), 'rectangle' == n.unit)) {
                                    for (
                                      var i = [],
                                        o = e.options.tabSize,
                                        a = f(L(u, r.line).text, r.ch, o),
                                        l = f(L(u, t.line).text, t.ch, o),
                                        s = Math.min(a, l),
                                        g = Math.max(a, l),
                                        v = Math.min(r.line, t.line),
                                        y = Math.min(
                                          e.lastLine(),
                                          Math.max(r.line, t.line)
                                        );
                                      v <= y;
                                      v++
                                    ) {
                                      var b = L(u, v).text,
                                        w = h(b, s, o);
                                      s == g
                                        ? i.push(new ta(D(v, w), D(v, w)))
                                        : b.length > w &&
                                          i.push(
                                            new ta(D(v, w), D(v, h(b, g, o)))
                                          );
                                    }
                                    i.length || i.push(new ta(r, r)),
                                      mn(
                                        u,
                                        Rr(p.ranges.slice(0, d).concat(i), d),
                                        { origin: '*mouse', scroll: !1 }
                                      ),
                                      e.scrollIntoView(t);
                                  } else {
                                    var x,
                                      C = c,
                                      S = gi(e, t, n.unit),
                                      k = C.anchor;
                                    W(S.anchor, k) > 0
                                      ? ((x = S.head),
                                        (k = z(C.from(), S.anchor)))
                                      : ((x = S.anchor),
                                        (k = F(C.to(), S.head)));
                                    var T = p.ranges.slice(0);
                                    (T[d] = (function(e, t) {
                                      var r = t.anchor,
                                        n = t.head,
                                        i = L(e.doc, r.line);
                                      if (0 == W(r, n) && r.sticky == n.sticky)
                                        return t;
                                      var o = fe(i);
                                      if (!o) return t;
                                      var a = ce(o, r.ch, r.sticky),
                                        l = o[a];
                                      if (l.from != r.ch && l.to != r.ch)
                                        return t;
                                      var s =
                                        a +
                                        ((l.from == r.ch) == (1 != l.level)
                                          ? 0
                                          : 1);
                                      if (0 == s || s == o.length) return t;
                                      var u;
                                      if (n.line != r.line)
                                        u =
                                          (n.line - r.line) *
                                            ('ltr' == e.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var c = ce(o, n.ch, n.sticky),
                                          f =
                                            c - a ||
                                            (n.ch - r.ch) *
                                              (1 == l.level ? -1 : 1);
                                        u =
                                          c == s - 1 || c == s ? f < 0 : f > 0;
                                      }
                                      var d = o[s + (u ? -1 : 0)],
                                        h = u == (1 == d.level),
                                        p = h ? d.from : d.to,
                                        g = h ? 'after' : 'before';
                                      return r.ch == p && r.sticky == g
                                        ? t
                                        : new ta(new D(r.line, p, g), n);
                                    })(e, new ta(I(u, k), x))),
                                      mn(u, Rr(T, d), mo);
                                  }
                              }
                              function o(t) {
                                var r = ++b,
                                  l = Vt(e, t, !0, 'rectangle' == n.unit);
                                if (l)
                                  if (0 != W(l, m)) {
                                    (e.curOp.focus = a()), i(l);
                                    var c = rr(s, u);
                                    (l.line >= c.to || l.line < c.from) &&
                                      setTimeout(
                                        xr(e, function() {
                                          b == r && o(t);
                                        }),
                                        150
                                      );
                                  } else {
                                    var f =
                                      t.clientY < y.top
                                        ? -20
                                        : t.clientY > y.bottom ? 20 : 0;
                                    f &&
                                      setTimeout(
                                        xr(e, function() {
                                          b == r &&
                                            ((s.scroller.scrollTop += f), o(t));
                                        }),
                                        50
                                      );
                                  }
                              }
                              function l(t) {
                                (e.state.selectingText = !1),
                                  (b = 1 / 0),
                                  be(t),
                                  s.input.focus(),
                                  he(document, 'mousemove', w),
                                  he(document, 'mouseup', x),
                                  (u.history.lastSelOrigin = null);
                              }
                              var s = e.display,
                                u = e.doc;
                              be(t);
                              var c,
                                d,
                                p = u.sel,
                                g = p.ranges;
                              n.addNew && !n.extend
                                ? ((d = u.sel.contains(r)),
                                  (c = d > -1 ? g[d] : new ta(r, r)))
                                : ((c = u.sel.primary()),
                                  (d = u.sel.primIndex));
                              if ('rectangle' == n.unit)
                                n.addNew || (c = new ta(r, r)),
                                  (r = Vt(e, t, !0, !0)),
                                  (d = -1);
                              else {
                                var v = gi(e, r, n.unit);
                                c = n.extend
                                  ? fn(c, v.anchor, v.head, n.extend)
                                  : v;
                              }
                              n.addNew
                                ? -1 == d
                                  ? ((d = g.length),
                                    mn(u, Rr(g.concat([c]), d), {
                                      scroll: !1,
                                      origin: '*mouse',
                                    }))
                                  : g.length > 1 &&
                                    g[d].empty() &&
                                    'char' == n.unit &&
                                    !n.extend
                                    ? (mn(
                                        u,
                                        Rr(
                                          g.slice(0, d).concat(g.slice(d + 1)),
                                          0
                                        ),
                                        { scroll: !1, origin: '*mouse' }
                                      ),
                                      (p = u.sel))
                                    : pn(u, d, c, mo)
                                : ((d = 0),
                                  mn(u, new ea([c], 0), mo),
                                  (p = u.sel));
                              var m = r;
                              var y = s.wrapper.getBoundingClientRect(),
                                b = 0;
                              var w = xr(e, function(e) {
                                  ke(e) ? o(e) : l(e);
                                }),
                                x = xr(e, l);
                              (e.state.selectingText = x),
                                Mo(document, 'mousemove', w),
                                Mo(document, 'mouseup', x);
                            })(e, n, t, o);
                      })(t, n, o, e)
                    : Se(e) == r.scroller && be(e)
                  : 2 == i
                    ? (n && dn(t.doc, n),
                      setTimeout(function() {
                        return r.input.focus();
                      }, 20))
                    : 3 == i && (lo ? yi(t, e) : Zt(t)));
          }
      }
      function gi(e, t, r) {
        if ('char' == r) return new ta(t, t);
        if ('word' == r) return e.findWordAt(t);
        if ('line' == r)
          return new ta(D(t.line, 0), I(e.doc, D(t.line + 1, 0)));
        var n = r(e, t);
        return new ta(n.from, n.to);
      }
      function vi(e, t, r, n) {
        var i, o;
        if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
        else
          try {
            (i = t.clientX), (o = t.clientY);
          } catch (t) {
            return !1;
          }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        n && be(t);
        var a = e.display,
          l = a.lineDiv.getBoundingClientRect();
        if (o > l.bottom || !me(e, r)) return xe(t);
        o -= l.top - a.viewOffset;
        for (var s = 0; s < e.options.gutters.length; ++s) {
          var u = a.gutters.childNodes[s];
          if (u && u.getBoundingClientRect().right >= i) {
            return pe(e, r, e, _(e.doc, o), e.options.gutters[s], t), xe(t);
          }
        }
      }
      function mi(e, t) {
        return vi(e, t, 'gutterClick', !0);
      }
      function yi(e, t) {
        lt(e.display, t) ||
          (function(e, t) {
            if (!me(e, 'gutterContextMenu')) return !1;
            return vi(e, t, 'gutterContextMenu', !1);
          })(e, t) ||
          ge(e, t, 'contextmenu') ||
          e.display.input.onContextMenu(t);
      }
      function bi(e) {
        (e.display.wrapper.className =
          e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
          e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
          St(e);
      }
      function wi(e) {
        Hr(e), kr(e), nr(e);
      }
      function xi(e, t, r) {
        if (!t != !(r && r != xa)) {
          var n = e.display.dragFunctions,
            i = t ? Mo : he;
          i(e.display.scroller, 'dragstart', n.start),
            i(e.display.scroller, 'dragenter', n.enter),
            i(e.display.scroller, 'dragover', n.over),
            i(e.display.scroller, 'dragleave', n.leave),
            i(e.display.scroller, 'drop', n.drop);
        }
      }
      function Ci(e) {
        e.options.lineWrapping
          ? (l(e.display.wrapper, 'CodeMirror-wrap'),
            (e.display.sizer.style.minWidth = ''),
            (e.display.sizerWidth = null))
          : (so(e.display.wrapper, 'CodeMirror-wrap'), ue(e)),
          Bt(e),
          kr(e),
          St(e),
          setTimeout(function() {
            return gr(e);
          }, 100);
      }
      function Si(e, t) {
        var o = this;
        if (!(this instanceof Si)) return new Si(e, t);
        (this.options = t = t ? c(t) : {}), c(Ca, t, !1), Fr(t);
        var a = t.value;
        'string' == typeof a &&
          (a = new la(a, t.mode, null, t.lineSeparator, t.direction)),
          (this.doc = a);
        var l = new Si.inputStyles[t.inputStyle](this),
          s = (this.display = new function(e, t, r) {
            var o = this;
            (this.input = r),
              (o.scrollbarFiller = n(
                'div',
                null,
                'CodeMirror-scrollbar-filler'
              )),
              o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
              (o.gutterFiller = n('div', null, 'CodeMirror-gutter-filler')),
              o.gutterFiller.setAttribute('cm-not-content', 'true'),
              (o.lineDiv = i('div', null, 'CodeMirror-code')),
              (o.selectionDiv = n(
                'div',
                null,
                null,
                'position: relative; z-index: 1'
              )),
              (o.cursorDiv = n('div', null, 'CodeMirror-cursors')),
              (o.measure = n('div', null, 'CodeMirror-measure')),
              (o.lineMeasure = n('div', null, 'CodeMirror-measure')),
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
            (o.mover = n('div', [a], null, 'position: relative')),
              (o.sizer = n('div', [o.mover], 'CodeMirror-sizer')),
              (o.sizerWidth = null),
              (o.heightForcer = n(
                'div',
                null,
                null,
                'position: absolute; height: ' + po + 'px; width: 1px;'
              )),
              (o.gutters = n('div', null, 'CodeMirror-gutters')),
              (o.lineGutter = null),
              (o.scroller = n(
                'div',
                [o.sizer, o.heightForcer, o.gutters],
                'CodeMirror-scroll'
              )),
              o.scroller.setAttribute('tabIndex', '-1'),
              (o.wrapper = n(
                'div',
                [o.scrollbarFiller, o.gutterFiller, o.scroller],
                'CodeMirror'
              )),
              Vi &&
                Ui < 8 &&
                ((o.gutters.style.zIndex = -1),
                (o.scroller.style.paddingRight = 0)),
              Gi || (ji && eo) || (o.scroller.draggable = !0),
              e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
              (o.viewFrom = o.viewTo = t.first),
              (o.reportedViewFrom = o.reportedViewTo = t.first),
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
              r.init(o);
          }(e, a, l));
        (s.wrapper.CodeMirror = this),
          Hr(this),
          bi(this),
          t.lineWrapping &&
            (this.display.wrapper.className += ' CodeMirror-wrap'),
          mr(this),
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
            highlight: new co(),
            keySeq: null,
            specialChars: null,
          }),
          t.autofocus && !eo && s.input.focus(),
          Vi &&
            Ui < 11 &&
            setTimeout(function() {
              return o.display.input.reset(!0);
            }, 20),
          (function(e) {
            function t() {
              o.activeTouch &&
                ((a = setTimeout(function() {
                  return (o.activeTouch = null);
                }, 1e3)),
                ((l = o.activeTouch).end = +new Date()));
            }
            function i(e, t) {
              if (null == t.left) return !0;
              var r = t.left - e.left,
                n = t.top - e.top;
              return r * r + n * n > 400;
            }
            var o = e.display;
            Mo(o.scroller, 'mousedown', xr(e, pi)),
              Vi && Ui < 11
                ? Mo(
                    o.scroller,
                    'dblclick',
                    xr(e, function(t) {
                      if (!ge(e, t)) {
                        var r = Vt(e, t);
                        if (r && !mi(e, t) && !lt(e.display, t)) {
                          be(t);
                          var n = e.findWordAt(r);
                          dn(e.doc, n.anchor, n.head);
                        }
                      }
                    })
                  )
                : Mo(o.scroller, 'dblclick', function(t) {
                    return ge(e, t) || be(t);
                  });
            lo ||
              Mo(o.scroller, 'contextmenu', function(t) {
                return yi(e, t);
              });
            var a,
              l = { end: 0 };
            Mo(o.scroller, 'touchstart', function(t) {
              if (
                !ge(e, t) &&
                !(function(e) {
                  if (1 != e.touches.length) return !1;
                  var t = e.touches[0];
                  return t.radiusX <= 1 && t.radiusY <= 1;
                })(t) &&
                !mi(e, t)
              ) {
                o.input.ensurePolled(), clearTimeout(a);
                var r = +new Date();
                (o.activeTouch = {
                  start: r,
                  moved: !1,
                  prev: r - l.end <= 300 ? l : null,
                }),
                  1 == t.touches.length &&
                    ((o.activeTouch.left = t.touches[0].pageX),
                    (o.activeTouch.top = t.touches[0].pageY));
              }
            }),
              Mo(o.scroller, 'touchmove', function() {
                o.activeTouch && (o.activeTouch.moved = !0);
              }),
              Mo(o.scroller, 'touchend', function(r) {
                var n = o.activeTouch;
                if (
                  n &&
                  !lt(o, r) &&
                  null != n.left &&
                  !n.moved &&
                  new Date() - n.start < 300
                ) {
                  var a,
                    l = e.coordsChar(o.activeTouch, 'page');
                  (a =
                    !n.prev || i(n, n.prev)
                      ? new ta(l, l)
                      : !n.prev.prev || i(n, n.prev.prev)
                        ? e.findWordAt(l)
                        : new ta(D(l.line, 0), I(e.doc, D(l.line + 1, 0)))),
                    e.setSelection(a.anchor, a.head),
                    e.focus(),
                    be(r);
                }
                t();
              }),
              Mo(o.scroller, 'touchcancel', t),
              Mo(o.scroller, 'scroll', function() {
                o.scroller.clientHeight &&
                  (fr(e, o.scroller.scrollTop),
                  hr(e, o.scroller.scrollLeft, !0),
                  pe(e, 'scroll', e));
              }),
              Mo(o.scroller, 'mousewheel', function(t) {
                return Ir(e, t);
              }),
              Mo(o.scroller, 'DOMMouseScroll', function(t) {
                return Ir(e, t);
              }),
              Mo(o.wrapper, 'scroll', function() {
                return (o.wrapper.scrollTop = o.wrapper.scrollLeft = 0);
              }),
              (o.dragFunctions = {
                enter: function(t) {
                  ge(e, t) || Ce(t);
                },
                over: function(t) {
                  ge(e, t) ||
                    (!(function(e, t) {
                      var i = Vt(e, t);
                      if (i) {
                        var o = document.createDocumentFragment();
                        Kt(e, i, o),
                          e.display.dragCursor ||
                            ((e.display.dragCursor = n(
                              'div',
                              null,
                              'CodeMirror-cursors CodeMirror-dragcursors'
                            )),
                            e.display.lineSpace.insertBefore(
                              e.display.dragCursor,
                              e.display.cursorDiv
                            )),
                          r(e.display.dragCursor, o);
                      }
                    })(e, t),
                    Ce(t));
                },
                start: function(t) {
                  return (function(e, t) {
                    if (Vi && (!e.state.draggingText || +new Date() - sa < 100))
                      Ce(t);
                    else if (
                      !ge(e, t) &&
                      !lt(e.display, t) &&
                      (t.dataTransfer.setData('Text', e.getSelection()),
                      (t.dataTransfer.effectAllowed = 'copyMove'),
                      t.dataTransfer.setDragImage && !Xi)
                    ) {
                      var r = n(
                        'img',
                        null,
                        null,
                        'position: fixed; left: 0; top: 0;'
                      );
                      (r.src =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                        $i &&
                          ((r.width = r.height = 1),
                          e.display.wrapper.appendChild(r),
                          (r._top = r.offsetTop)),
                        t.dataTransfer.setDragImage(r, 0, 0),
                        $i && r.parentNode.removeChild(r);
                    }
                  })(e, t);
                },
                drop: xr(e, Vn),
                leave: function(t) {
                  ge(e, t) || Un(e);
                },
              });
            var s = o.input.getField();
            Mo(s, 'keyup', function(t) {
              return di.call(e, t);
            }),
              Mo(s, 'keydown', xr(e, fi)),
              Mo(s, 'keypress', xr(e, hi)),
              Mo(s, 'focus', function(t) {
                return Qt(e, t);
              }),
              Mo(s, 'blur', function(t) {
                return Jt(e, t);
              });
          })(this),
          qn(),
          yr(this),
          (this.curOp.forceUpdate = !0),
          Qr(this, a),
          (t.autofocus && !eo) || this.hasFocus()
            ? setTimeout(u(Qt, this), 20)
            : Jt(this);
        for (var f in Sa) Sa.hasOwnProperty(f) && Sa[f](o, t[f], xa);
        ir(this), t.finishInit && t.finishInit(this);
        for (var d = 0; d < ka.length; ++d) ka[d](o);
        br(this),
          Gi &&
            t.lineWrapping &&
            'optimizelegibility' == getComputedStyle(s.lineDiv).textRendering &&
            (s.lineDiv.style.textRendering = 'auto');
      }
      function ki(e, t, r, n) {
        var i,
          o = e.doc;
        null == r && (r = 'add'),
          'smart' == r && (o.mode.indent ? (i = Pe(e, t).state) : (r = 'prev'));
        var a = e.options.tabSize,
          l = L(o, t),
          s = f(l.text, null, a);
        l.stateAfter && (l.stateAfter = null);
        var u,
          c = l.text.match(/^\s*/)[0];
        if (n || /\S/.test(l.text)) {
          if (
            'smart' == r &&
            ((u = o.mode.indent(i, l.text.slice(c.length), l.text)) == go ||
              u > 150)
          ) {
            if (!n) return;
            r = 'prev';
          }
        } else (u = 0), (r = 'not');
        'prev' == r
          ? (u = t > o.first ? f(L(o, t - 1).text, null, a) : 0)
          : 'add' == r
            ? (u = s + e.options.indentUnit)
            : 'subtract' == r
              ? (u = s - e.options.indentUnit)
              : 'number' == typeof r && (u = s + r),
          (u = Math.max(0, u));
        var d = '',
          h = 0;
        if (e.options.indentWithTabs)
          for (var g = Math.floor(u / a); g; --g) (h += a), (d += '\t');
        if ((h < u && (d += p(u - h)), d != c))
          return (
            En(o, d, D(t, 0), D(t, c.length), '+input'),
            (l.stateAfter = null),
            !0
          );
        for (var v = 0; v < o.sel.ranges.length; v++) {
          var m = o.sel.ranges[v];
          if (m.head.line == t && m.head.ch < c.length) {
            var y = D(t, c.length);
            pn(o, v, new ta(y, y));
            break;
          }
        }
      }
      function Li(e) {
        La = e;
      }
      function Ti(e, t, r, n, i) {
        var o = e.doc;
        (e.display.shift = !1), n || (n = o.sel);
        var a = e.state.pasteIncoming || 'paste' == i,
          l = Ao(t),
          s = null;
        if (a && n.ranges.length > 1)
          if (La && La.text.join('\n') == t) {
            if (n.ranges.length % La.text.length == 0) {
              s = [];
              for (var u = 0; u < La.text.length; u++)
                s.push(o.splitLines(La.text[u]));
            }
          } else
            l.length == n.ranges.length &&
              e.options.pasteLinesPerSelection &&
              (s = v(l, function(e) {
                return [e];
              }));
        for (var c, f = n.ranges.length - 1; f >= 0; f--) {
          var d = n.ranges[f],
            h = d.from(),
            p = d.to();
          d.empty() &&
            (r && r > 0
              ? (h = D(h.line, h.ch - r))
              : e.state.overwrite && !a
                ? (p = D(
                    p.line,
                    Math.min(L(o, p.line).text.length, p.ch + g(l).length)
                  ))
                : La &&
                  La.lineWise &&
                  La.text.join('\n') == t &&
                  (h = p = D(h.line, 0))),
            (c = e.curOp.updateInput);
          var m = {
            from: h,
            to: p,
            text: s ? s[f % s.length] : l,
            origin: i || (a ? 'paste' : e.state.cutIncoming ? 'cut' : '+input'),
          };
          Mn(e.doc, m), Ye(e, 'inputRead', e, m);
        }
        t && !a && Oi(e, t),
          lr(e),
          (e.curOp.updateInput = c),
          (e.curOp.typing = !0),
          (e.state.pasteIncoming = e.state.cutIncoming = !1);
      }
      function Mi(e, t) {
        var r = e.clipboardData && e.clipboardData.getData('Text');
        if (r)
          return (
            e.preventDefault(),
            t.isReadOnly() ||
              t.options.disableInput ||
              wr(t, function() {
                return Ti(t, r, 0, null, 'paste');
              }),
            !0
          );
      }
      function Oi(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
          for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
            var i = r.ranges[n];
            if (
              !(
                i.head.ch > 100 ||
                (n && r.ranges[n - 1].head.line == i.head.line)
              )
            ) {
              var o = e.getModeAt(i.head),
                a = !1;
              if (o.electricChars) {
                for (var l = 0; l < o.electricChars.length; l++)
                  if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                    a = ki(e, i.head.line, 'smart');
                    break;
                  }
              } else
                o.electricInput &&
                  o.electricInput.test(
                    L(e.doc, i.head.line).text.slice(0, i.head.ch)
                  ) &&
                  (a = ki(e, i.head.line, 'smart'));
              a && Ye(e, 'electricInput', e, i.head.line);
            }
          }
      }
      function Ai(e) {
        for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
          var i = e.doc.sel.ranges[n].head.line,
            o = { anchor: D(i, 0), head: D(i + 1, 0) };
          r.push(o), t.push(e.getRange(o.anchor, o.head));
        }
        return { text: t, ranges: r };
      }
      function _i(e, t) {
        e.setAttribute('autocorrect', 'off'),
          e.setAttribute('autocapitalize', 'off'),
          e.setAttribute('spellcheck', !!t);
      }
      function Ni() {
        var e = n(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
          ),
          t = n(
            'div',
            [e],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;'
          );
        return (
          Gi ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
          Qi && (e.style.border = '1px solid black'),
          _i(e),
          t
        );
      }
      function Ei(e, t, r, n, i) {
        function o(n) {
          var o;
          if (
            null ==
            (o = i
              ? (function(e, t, r, n) {
                  var i = fe(t, e.doc.direction);
                  if (!i) return ni(t, r, n);
                  r.ch >= t.text.length
                    ? ((r.ch = t.text.length), (r.sticky = 'before'))
                    : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'));
                  var o = ce(i, r.ch, r.sticky),
                    a = i[o];
                  if (
                    'ltr' == e.doc.direction &&
                    a.level % 2 == 0 &&
                    (n > 0 ? a.to > r.ch : a.from < r.ch)
                  )
                    return ni(t, r, n);
                  var l,
                    s = function(e, r) {
                      return ri(t, e instanceof D ? e.ch : e, r);
                    },
                    u = function(r) {
                      return e.options.lineWrapping
                        ? ((l = l || mt(e, t)), Pt(e, t, l, r))
                        : { begin: 0, end: t.text.length };
                    },
                    c = u('before' == r.sticky ? s(r, -1) : r.ch);
                  if ('rtl' == e.doc.direction || 1 == a.level) {
                    var f = (1 == a.level) == n < 0,
                      d = s(r, f ? 1 : -1);
                    if (
                      null != d &&
                      (f
                        ? d <= a.to && d <= c.end
                        : d >= a.from && d >= c.begin)
                    ) {
                      var h = f ? 'before' : 'after';
                      return new D(r.line, d, h);
                    }
                  }
                  var p = function(e, t, n) {
                      for (
                        var o = function(e, t) {
                          return t
                            ? new D(r.line, s(e, 1), 'before')
                            : new D(r.line, e, 'after');
                        };
                        e >= 0 && e < i.length;
                        e += t
                      ) {
                        var a = i[e],
                          l = t > 0 == (1 != a.level),
                          u = l ? n.begin : s(n.end, -1);
                        if (a.from <= u && u < a.to) return o(u, l);
                        if (
                          ((u = l ? a.from : s(a.to, -1)),
                          n.begin <= u && u < n.end)
                        )
                          return o(u, l);
                      }
                    },
                    g = p(o + n, n, c);
                  if (g) return g;
                  var v = n > 0 ? c.end : s(c.begin, -1);
                  return null == v ||
                    (n > 0 && v == t.text.length) ||
                    !(g = p(n > 0 ? 0 : i.length - 1, n, u(v)))
                    ? null
                    : g;
                })(e.cm, s, t, r)
              : ni(s, t, r))
          ) {
            if (
              n ||
              !(function() {
                var n = t.line + r;
                return (
                  !(n < e.first || n >= e.first + e.size) &&
                  ((t = new D(n, t.ch, t.sticky)), (s = L(e, n)))
                );
              })()
            )
              return !1;
            t = ii(i, e.cm, s, t.line, r);
          } else t = o;
          return !0;
        }
        var a = t,
          l = r,
          s = L(e, t.line);
        if ('char' == n) o();
        else if ('column' == n) o(!0);
        else if ('word' == n || 'group' == n)
          for (
            var u = null,
              c = 'group' == n,
              f = e.cm && e.cm.getHelper(t, 'wordChars'),
              d = !0;
            !(r < 0) || o(!d);
            d = !1
          ) {
            var h = s.text.charAt(t.ch) || '\n',
              p = w(h, f)
                ? 'w'
                : c && '\n' == h ? 'n' : !c || /\s/.test(h) ? null : 'p';
            if ((!c || d || p || (p = 's'), u && u != p)) {
              r < 0 && ((r = 1), o(), (t.sticky = 'after'));
              break;
            }
            if ((p && (u = p), r > 0 && !o(!d))) break;
          }
        var g = Sn(e, t, a, l, !0);
        return P(a, g) && (g.hitSide = !0), g;
      }
      function Di(e, t, r, n) {
        var i,
          o = e.doc,
          a = t.left;
        if ('page' == n) {
          var l = Math.min(
              e.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            s = Math.max(l - 0.5 * Ft(e.display), 3);
          i = (r > 0 ? t.bottom : t.top) + r * s;
        } else 'line' == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
        for (var u; (u = Dt(e, a, i)).outside; ) {
          if (r < 0 ? i <= 0 : i >= o.height) {
            u.hitSide = !0;
            break;
          }
          i += 5 * r;
        }
        return u;
      }
      function Wi(e, t) {
        var r = vt(e, t.line);
        if (!r || r.hidden) return null;
        var n = L(e.doc, t.line),
          i = pt(r, n, t.line),
          o = fe(n, e.doc.direction),
          a = 'left';
        if (o) {
          a = ce(o, t.ch) % 2 ? 'right' : 'left';
        }
        var l = bt(i.map, t.ch, a);
        return (l.offset = 'right' == l.collapse ? l.end : l.start), l;
      }
      function Pi(e, t) {
        return t && (e.bad = !0), e;
      }
      function Hi(e, t, r) {
        var n;
        if (t == e.display.lineDiv) {
          if (!(n = e.display.lineDiv.childNodes[r]))
            return Pi(e.clipPos(D(e.display.viewTo - 1)), !0);
          (t = null), (r = 0);
        } else
          for (n = t; ; n = n.parentNode) {
            if (!n || n == e.display.lineDiv) return null;
            if (n.parentNode && n.parentNode == e.display.lineDiv) break;
          }
        for (var i = 0; i < e.display.view.length; i++) {
          var a = e.display.view[i];
          if (a.node == n)
            return (function(e, t, r) {
              function n(t, r, n) {
                for (var i = -1; i < (f ? f.length : 0); i++)
                  for (
                    var o = i < 0 ? c.map : f[i], a = 0;
                    a < o.length;
                    a += 3
                  ) {
                    var l = o[a + 2];
                    if (l == t || l == r) {
                      var s = A(i < 0 ? e.line : e.rest[i]),
                        u = o[a] + n;
                      return (
                        (n < 0 || l != t) && (u = o[a + (n ? 1 : 0)]), D(s, u)
                      );
                    }
                  }
              }
              var i = e.text.firstChild,
                a = !1;
              if (!t || !o(i, t)) return Pi(D(A(e.line), 0), !0);
              if (t == i && ((a = !0), (t = i.childNodes[r]), (r = 0), !t)) {
                var l = e.rest ? g(e.rest) : e.line;
                return Pi(D(A(l), l.text.length), a);
              }
              var s = 3 == t.nodeType ? t : null,
                u = t;
              s ||
                1 != t.childNodes.length ||
                3 != t.firstChild.nodeType ||
                ((s = t.firstChild), r && (r = s.nodeValue.length));
              for (; u.parentNode != i; ) u = u.parentNode;
              var c = e.measure,
                f = c.maps;
              var d = n(s, u, r);
              if (d) return Pi(d, a);
              for (
                var h = u.nextSibling, p = s ? s.nodeValue.length - r : 0;
                h;
                h = h.nextSibling
              ) {
                if ((d = n(h, h.firstChild, 0)))
                  return Pi(D(d.line, d.ch - p), a);
                p += h.textContent.length;
              }
              for (var v = u.previousSibling, m = r; v; v = v.previousSibling) {
                if ((d = n(v, v.firstChild, -1)))
                  return Pi(D(d.line, d.ch + m), a);
                m += v.textContent.length;
              }
            })(a, t, r);
        }
      }
      var Fi = navigator.userAgent,
        zi = navigator.platform,
        ji = /gecko\/\d/i.test(Fi),
        Ii = /MSIE \d/.test(Fi),
        Ri = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Fi),
        Bi = /Edge\/(\d+)/.exec(Fi),
        Vi = Ii || Ri || Bi,
        Ui = Vi && (Ii ? document.documentMode || 6 : +(Bi || Ri)[1]),
        Gi = !Bi && /WebKit\//.test(Fi),
        qi = Gi && /Qt\/\d+\.\d+/.test(Fi),
        Ki = !Bi && /Chrome\//.test(Fi),
        $i = /Opera\//.test(Fi),
        Xi = /Apple Computer/.test(navigator.vendor),
        Yi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Fi),
        Zi = /PhantomJS/.test(Fi),
        Qi = !Bi && /AppleWebKit/.test(Fi) && /Mobile\/\w+/.test(Fi),
        Ji = /Android/.test(Fi),
        eo =
          Qi ||
          Ji ||
          /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Fi),
        to = Qi || /Mac/.test(zi),
        ro = /\bCrOS\b/.test(Fi),
        no = /win/i.test(zi),
        io = $i && Fi.match(/Version\/(\d*\.\d*)/);
      io && (io = Number(io[1])), io && io >= 15 && (($i = !1), (Gi = !0));
      var oo,
        ao = to && (qi || ($i && (null == io || io < 12.11))),
        lo = ji || (Vi && Ui >= 9),
        so = function(t, r) {
          var n = t.className,
            i = e(r).exec(n);
          if (i) {
            var o = n.slice(i.index + i[0].length);
            t.className = n.slice(0, i.index) + (o ? i[1] + o : '');
          }
        };
      oo = document.createRange
        ? function(e, t, r, n) {
            var i = document.createRange();
            return i.setEnd(n || e, r), i.setStart(e, t), i;
          }
        : function(e, t, r) {
            var n = document.body.createTextRange();
            try {
              n.moveToElementText(e.parentNode);
            } catch (e) {
              return n;
            }
            return (
              n.collapse(!0),
              n.moveEnd('character', r),
              n.moveStart('character', t),
              n
            );
          };
      var uo = function(e) {
        e.select();
      };
      Qi
        ? (uo = function(e) {
            (e.selectionStart = 0), (e.selectionEnd = e.value.length);
          })
        : Vi &&
          (uo = function(e) {
            try {
              e.select();
            } catch (e) {}
          });
      var co = function() {
        this.id = null;
      };
      co.prototype.set = function(e, t) {
        clearTimeout(this.id), (this.id = setTimeout(t, e));
      };
      var fo,
        ho,
        po = 30,
        go = {
          toString: function() {
            return 'CodeMirror.Pass';
          },
        },
        vo = { scroll: !1 },
        mo = { origin: '*mouse' },
        yo = { origin: '+move' },
        bo = [''],
        wo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
        xo = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
        Co = !1,
        So = !1,
        ko = null,
        Lo = (function() {
          function e(e) {
            return e <= 247
              ? r.charAt(e)
              : 1424 <= e && e <= 1524
                ? 'R'
                : 1536 <= e && e <= 1785
                  ? n.charAt(e - 1536)
                  : 1774 <= e && e <= 2220
                    ? 'r'
                    : 8192 <= e && e <= 8203 ? 'w' : 8204 == e ? 'b' : 'L';
          }
          function t(e, t, r) {
            (this.level = e), (this.from = t), (this.to = r);
          }
          var r =
              'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
            n =
              'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111',
            i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            o = /[stwN]/,
            a = /[LRr]/,
            l = /[Lb1n]/,
            s = /[1n]/;
          return function(r, n) {
            var u = 'ltr' == n ? 'L' : 'R';
            if (0 == r.length || ('ltr' == n && !i.test(r))) return !1;
            for (var c = r.length, f = [], d = 0; d < c; ++d)
              f.push(e(r.charCodeAt(d)));
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
              var C = f[w];
              '+' == C && '1' == x && '1' == f[w + 1]
                ? (f[w] = '1')
                : ',' != C ||
                  x != f[w + 1] ||
                  ('1' != x && 'n' != x) ||
                  (f[w] = x),
                (x = C);
            }
            for (var S = 0; S < c; ++S) {
              var k = f[S];
              if (',' == k) f[S] = 'N';
              else if ('%' == k) {
                var L = void 0;
                for (L = S + 1; L < c && '%' == f[L]; ++L);
                for (
                  var T =
                      (S && '!' == f[S - 1]) || (L < c && '1' == f[L])
                        ? '1'
                        : 'N',
                    M = S;
                  M < L;
                  ++M
                )
                  f[M] = T;
                S = L - 1;
              }
            }
            for (var O = 0, A = u; O < c; ++O) {
              var _ = f[O];
              'L' == A && '1' == _ ? (f[O] = 'L') : a.test(_) && (A = _);
            }
            for (var N = 0; N < c; ++N)
              if (o.test(f[N])) {
                var E = void 0;
                for (E = N + 1; E < c && o.test(f[E]); ++E);
                for (
                  var D = 'L' == (N ? f[N - 1] : u),
                    W = D == ('L' == (E < c ? f[E] : u)) ? (D ? 'L' : 'R') : u,
                    P = N;
                  P < E;
                  ++P
                )
                  f[P] = W;
                N = E - 1;
              }
            for (var H, F = [], z = 0; z < c; )
              if (l.test(f[z])) {
                var j = z;
                for (++z; z < c && l.test(f[z]); ++z);
                F.push(new t(0, j, z));
              } else {
                var I = z,
                  R = F.length;
                for (++z; z < c && 'L' != f[z]; ++z);
                for (var B = I; B < z; )
                  if (s.test(f[B])) {
                    I < B && F.splice(R, 0, new t(1, I, B));
                    var V = B;
                    for (++B; B < z && s.test(f[B]); ++B);
                    F.splice(R, 0, new t(2, V, B)), (I = B);
                  } else ++B;
                I < z && F.splice(R, 0, new t(1, I, z));
              }
            return (
              'ltr' == n &&
                (1 == F[0].level &&
                  (H = r.match(/^\s+/)) &&
                  ((F[0].from = H[0].length),
                  F.unshift(new t(0, 0, H[0].length))),
                1 == g(F).level &&
                  (H = r.match(/\s+$/)) &&
                  ((g(F).to -= H[0].length),
                  F.push(new t(0, c - H[0].length, c)))),
              'rtl' == n ? F.reverse() : F
            );
          };
        })(),
        To = [],
        Mo = function(e, t, r) {
          if (e.addEventListener) e.addEventListener(t, r, !1);
          else if (e.attachEvent) e.attachEvent('on' + t, r);
          else {
            var n = e._handlers || (e._handlers = {});
            n[t] = (n[t] || To).concat(r);
          }
        },
        Oo = (function() {
          if (Vi && Ui < 9) return !1;
          var e = n('div');
          return 'draggable' in e || 'dragDrop' in e;
        })(),
        Ao =
          3 != '\n\nb'.split(/\n/).length
            ? function(e) {
                for (var t = 0, r = [], n = e.length; t <= n; ) {
                  var i = e.indexOf('\n', t);
                  -1 == i && (i = e.length);
                  var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                    a = o.indexOf('\r');
                  -1 != a
                    ? (r.push(o.slice(0, a)), (t += a + 1))
                    : (r.push(o), (t = i + 1));
                }
                return r;
              }
            : function(e) {
                return e.split(/\r\n?|\n/);
              },
        _o = window.getSelection
          ? function(e) {
              try {
                return e.selectionStart != e.selectionEnd;
              } catch (e) {
                return !1;
              }
            }
          : function(e) {
              var t;
              try {
                t = e.ownerDocument.selection.createRange();
              } catch (e) {}
              return (
                !(!t || t.parentElement() != e) &&
                0 != t.compareEndPoints('StartToEnd', t)
              );
            },
        No = (function() {
          var e = n('div');
          return (
            'oncopy' in e ||
            (e.setAttribute('oncopy', 'return;'), 'function' == typeof e.oncopy)
          );
        })(),
        Eo = null,
        Do = {},
        Wo = {},
        Po = {},
        Ho = function(e, t, r) {
          (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = r);
        };
      (Ho.prototype.eol = function() {
        return this.pos >= this.string.length;
      }),
        (Ho.prototype.sol = function() {
          return this.pos == this.lineStart;
        }),
        (Ho.prototype.peek = function() {
          return this.string.charAt(this.pos) || void 0;
        }),
        (Ho.prototype.next = function() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }),
        (Ho.prototype.eat = function(e) {
          var t = this.string.charAt(this.pos);
          if ('string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos, t;
        }),
        (Ho.prototype.eatWhile = function(e) {
          for (var t = this.pos; this.eat(e); );
          return this.pos > t;
        }),
        (Ho.prototype.eatSpace = function() {
          for (
            var e = this, t = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++e.pos;
          return this.pos > t;
        }),
        (Ho.prototype.skipToEnd = function() {
          this.pos = this.string.length;
        }),
        (Ho.prototype.skipTo = function(e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) return (this.pos = t), !0;
        }),
        (Ho.prototype.backUp = function(e) {
          this.pos -= e;
        }),
        (Ho.prototype.column = function() {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = f(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? f(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        }),
        (Ho.prototype.indentation = function() {
          return (
            f(this.string, null, this.tabSize) -
            (this.lineStart ? f(this.string, this.lineStart, this.tabSize) : 0)
          );
        }),
        (Ho.prototype.match = function(e, t, r) {
          if ('string' != typeof e) {
            var n = this.string.slice(this.pos).match(e);
            return n && n.index > 0
              ? null
              : (n && !1 !== t && (this.pos += n[0].length), n);
          }
          var i = function(e) {
            return r ? e.toLowerCase() : e;
          };
          if (i(this.string.substr(this.pos, e.length)) == i(e))
            return !1 !== t && (this.pos += e.length), !0;
        }),
        (Ho.prototype.current = function() {
          return this.string.slice(this.start, this.pos);
        }),
        (Ho.prototype.hideFirstChars = function(e, t) {
          this.lineStart += e;
          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        }),
        (Ho.prototype.lookAhead = function(e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        }),
        (Ho.prototype.baseToken = function() {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        });
      var Fo = function(e, t) {
          (this.state = e), (this.lookAhead = t);
        },
        zo = function(e, t, r, n) {
          (this.state = t),
            (this.doc = e),
            (this.line = r),
            (this.maxLookAhead = n || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1);
        };
      (zo.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }),
        (zo.prototype.baseToken = function(e) {
          var t = this;
          if (!this.baseTokens) return null;
          for (; this.baseTokens[this.baseTokenPos] <= e; ) t.baseTokenPos += 2;
          var r = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: r && r.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - e,
          };
        }),
        (zo.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (zo.fromSaved = function(e, t, r) {
          return t instanceof Fo
            ? new zo(e, _e(e.mode, t.state), r, t.lookAhead)
            : new zo(e, _e(e.mode, t), r);
        }),
        (zo.prototype.save = function(e) {
          var t = !1 !== e ? _e(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new Fo(t, this.maxLookAhead) : t;
        });
      var jo = function(e, t, r) {
          (this.start = e.start),
            (this.end = e.pos),
            (this.string = e.current()),
            (this.type = t || null),
            (this.state = r);
        },
        Io = function(e, t, r) {
          (this.text = e), $(this, t), (this.height = r ? r(this) : 1);
        };
      (Io.prototype.lineNo = function() {
        return A(this);
      }),
        ye(Io);
      var Ro,
        Bo = {},
        Vo = {},
        Uo = null,
        Go = null,
        qo = { left: 0, right: 0, top: 0, bottom: 0 },
        Ko = function(e, t, r) {
          this.cm = r;
          var i = (this.vert = n(
              'div',
              [n('div', null, null, 'min-width: 1px')],
              'CodeMirror-vscrollbar'
            )),
            o = (this.horiz = n(
              'div',
              [n('div', null, null, 'height: 100%; min-height: 1px')],
              'CodeMirror-hscrollbar'
            ));
          e(i),
            e(o),
            Mo(i, 'scroll', function() {
              i.clientHeight && t(i.scrollTop, 'vertical');
            }),
            Mo(o, 'scroll', function() {
              o.clientWidth && t(o.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            Vi &&
              Ui < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
      (Ko.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1,
          r = e.scrollHeight > e.clientHeight + 1,
          n = e.nativeBarWidth;
        if (r) {
          (this.vert.style.display = 'block'),
            (this.vert.style.bottom = t ? n + 'px' : '0');
          var i = e.viewHeight - (t ? n : 0);
          this.vert.firstChild.style.height =
            Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
        } else
          (this.vert.style.display = ''),
            (this.vert.firstChild.style.height = '0');
        if (t) {
          (this.horiz.style.display = 'block'),
            (this.horiz.style.right = r ? n + 'px' : '0'),
            (this.horiz.style.left = e.barLeft + 'px');
          var o = e.viewWidth - e.barLeft - (r ? n : 0);
          this.horiz.firstChild.style.width =
            Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
        } else
          (this.horiz.style.display = ''),
            (this.horiz.firstChild.style.width = '0');
        return (
          !this.checkedZeroWidth &&
            e.clientHeight > 0 &&
            (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: r ? n : 0, bottom: t ? n : 0 }
        );
      }),
        (Ko.prototype.setScrollLeft = function(e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
        }),
        (Ko.prototype.setScrollTop = function(e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
        }),
        (Ko.prototype.zeroWidthHack = function() {
          var e = to && !Yi ? '12px' : '18px';
          (this.horiz.style.height = this.vert.style.width = e),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              'none'),
            (this.disableHoriz = new co()),
            (this.disableVert = new co());
        }),
        (Ko.prototype.enableZeroWidthBar = function(e, t, r) {
          function n() {
            var i = e.getBoundingClientRect();
            ('vert' == r
              ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
              : document.elementFromPoint(
                  (i.right + i.left) / 2,
                  i.bottom - 1
                )) != e
              ? (e.style.pointerEvents = 'none')
              : t.set(1e3, n);
          }
          (e.style.pointerEvents = 'auto'), t.set(1e3, n);
        }),
        (Ko.prototype.clear = function() {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert);
        });
      var $o = function() {};
      ($o.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }),
        ($o.prototype.setScrollLeft = function() {}),
        ($o.prototype.setScrollTop = function() {}),
        ($o.prototype.clear = function() {});
      var Xo = { native: Ko, null: $o },
        Yo = 0,
        Zo = function(e, t, r) {
          var n = e.display;
          (this.viewport = t),
            (this.visible = rr(n, e.doc, t)),
            (this.editorIsHidden = !n.wrapper.offsetWidth),
            (this.wrapperHeight = n.wrapper.clientHeight),
            (this.wrapperWidth = n.wrapper.clientWidth),
            (this.oldDisplayWidth = dt(e)),
            (this.force = r),
            (this.dims = jt(e)),
            (this.events = []);
        };
      (Zo.prototype.signal = function(e, t) {
        me(e, t) && this.events.push(arguments);
      }),
        (Zo.prototype.finish = function() {
          for (var e = this, t = 0; t < this.events.length; t++)
            pe.apply(null, e.events[t]);
        });
      var Qo = 0,
        Jo = null;
      Vi
        ? (Jo = -0.53)
        : ji ? (Jo = 15) : Ki ? (Jo = -0.7) : Xi && (Jo = -1 / 3);
      var ea = function(e, t) {
        (this.ranges = e), (this.primIndex = t);
      };
      (ea.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }),
        (ea.prototype.equals = function(e) {
          var t = this;
          if (e == this) return !0;
          if (
            e.primIndex != this.primIndex ||
            e.ranges.length != this.ranges.length
          )
            return !1;
          for (var r = 0; r < this.ranges.length; r++) {
            var n = t.ranges[r],
              i = e.ranges[r];
            if (!P(n.anchor, i.anchor) || !P(n.head, i.head)) return !1;
          }
          return !0;
        }),
        (ea.prototype.deepCopy = function() {
          for (var e = this, t = [], r = 0; r < this.ranges.length; r++)
            t[r] = new ta(H(e.ranges[r].anchor), H(e.ranges[r].head));
          return new ea(t, this.primIndex);
        }),
        (ea.prototype.somethingSelected = function() {
          for (var e = this, t = 0; t < this.ranges.length; t++)
            if (!e.ranges[t].empty()) return !0;
          return !1;
        }),
        (ea.prototype.contains = function(e, t) {
          var r = this;
          t || (t = e);
          for (var n = 0; n < this.ranges.length; n++) {
            var i = r.ranges[n];
            if (W(t, i.from()) >= 0 && W(e, i.to()) <= 0) return n;
          }
          return -1;
        });
      var ta = function(e, t) {
        (this.anchor = e), (this.head = t);
      };
      (ta.prototype.from = function() {
        return z(this.anchor, this.head);
      }),
        (ta.prototype.to = function() {
          return F(this.anchor, this.head);
        }),
        (ta.prototype.empty = function() {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        }),
        (Fn.prototype = {
          chunkSize: function() {
            return this.lines.length;
          },
          removeInner: function(e, t) {
            for (var r = this, n = e, i = e + t; n < i; ++n) {
              var o = r.lines[n];
              (r.height -= o.height), Be(o), Ye(o, 'delete');
            }
            this.lines.splice(e, t);
          },
          collapse: function(e) {
            e.push.apply(e, this.lines);
          },
          insertInner: function(e, t, r) {
            var n = this;
            (this.height += r),
              (this.lines = this.lines
                .slice(0, e)
                .concat(t)
                .concat(this.lines.slice(e)));
            for (var i = 0; i < t.length; ++i) t[i].parent = n;
          },
          iterN: function(e, t, r) {
            for (var n = this, i = e + t; e < i; ++e)
              if (r(n.lines[e])) return !0;
          },
        }),
        (zn.prototype = {
          chunkSize: function() {
            return this.size;
          },
          removeInner: function(e, t) {
            var r = this;
            this.size -= t;
            for (var n = 0; n < this.children.length; ++n) {
              var i = r.children[n],
                o = i.chunkSize();
              if (e < o) {
                var a = Math.min(t, o - e),
                  l = i.height;
                if (
                  (i.removeInner(e, a),
                  (r.height -= l - i.height),
                  o == a && (r.children.splice(n--, 1), (i.parent = null)),
                  0 == (t -= a))
                )
                  break;
                e = 0;
              } else e -= o;
            }
            if (
              this.size - t < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof Fn))
            ) {
              var s = [];
              this.collapse(s),
                (this.children = [new Fn(s)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function(e) {
            for (var t = this, r = 0; r < this.children.length; ++r)
              t.children[r].collapse(e);
          },
          insertInner: function(e, t, r) {
            var n = this;
            (this.size += t.length), (this.height += r);
            for (var i = 0; i < this.children.length; ++i) {
              var o = n.children[i],
                a = o.chunkSize();
              if (e <= a) {
                if ((o.insertInner(e, t, r), o.lines && o.lines.length > 50)) {
                  for (
                    var l = o.lines.length % 25 + 25, s = l;
                    s < o.lines.length;

                  ) {
                    var u = new Fn(o.lines.slice(s, (s += 25)));
                    (o.height -= u.height),
                      n.children.splice(++i, 0, u),
                      (u.parent = n);
                  }
                  (o.lines = o.lines.slice(0, l)), n.maybeSpill();
                }
                break;
              }
              e -= a;
            }
          },
          maybeSpill: function() {
            if (!(this.children.length <= 10)) {
              var e = this;
              do {
                var t = new zn(e.children.splice(e.children.length - 5, 5));
                if (e.parent) {
                  (e.size -= t.size), (e.height -= t.height);
                  var r = d(e.parent.children, e);
                  e.parent.children.splice(r + 1, 0, t);
                } else {
                  var n = new zn(e.children);
                  (n.parent = e), (e.children = [n, t]), (e = n);
                }
                t.parent = e.parent;
              } while (e.children.length > 10);
              e.parent.maybeSpill();
            }
          },
          iterN: function(e, t, r) {
            for (var n = this, i = 0; i < this.children.length; ++i) {
              var o = n.children[i],
                a = o.chunkSize();
              if (e < a) {
                var l = Math.min(t, a - e);
                if (o.iterN(e, l, r)) return !0;
                if (0 == (t -= l)) break;
                e = 0;
              } else e -= a;
            }
          },
        });
      var ra = function(e, t, r) {
        var n = this;
        if (r) for (var i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
        (this.doc = e), (this.node = t);
      };
      (ra.prototype.clear = function() {
        var e = this,
          t = this.doc.cm,
          r = this.line.widgets,
          n = this.line,
          i = A(n);
        if (null != i && r) {
          for (var o = 0; o < r.length; ++o) r[o] == e && r.splice(o--, 1);
          r.length || (n.widgets = null);
          var a = at(this);
          O(n, Math.max(0, n.height - a)),
            t &&
              (wr(t, function() {
                jn(t, n, -a), Lr(t, i, 'widget');
              }),
              Ye(t, 'lineWidgetCleared', t, this, i));
        }
      }),
        (ra.prototype.changed = function() {
          var e = this,
            t = this.height,
            r = this.doc.cm,
            n = this.line;
          this.height = null;
          var i = at(this) - t;
          i &&
            (O(n, n.height + i),
            r &&
              wr(r, function() {
                (r.curOp.forceUpdate = !0),
                  jn(r, n, i),
                  Ye(r, 'lineWidgetChanged', r, e, A(n));
              }));
        }),
        ye(ra);
      var na = 0,
        ia = function(e, t) {
          (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++na);
        };
      (ia.prototype.clear = function() {
        var e = this;
        if (!this.explicitlyCleared) {
          var t = this.doc.cm,
            r = t && !t.curOp;
          if ((r && yr(t), me(this, 'clear'))) {
            var n = this.find();
            n && Ye(this, 'clear', n.from, n.to);
          }
          for (var i = null, o = null, a = 0; a < this.lines.length; ++a) {
            var l = e.lines[a],
              s = V(l.markedSpans, e);
            t && !e.collapsed
              ? Lr(t, A(l), 'text')
              : t && (null != s.to && (o = A(l)), null != s.from && (i = A(l))),
              (l.markedSpans = U(l.markedSpans, s)),
              null == s.from &&
                e.collapsed &&
                !oe(e.doc, l) &&
                t &&
                O(l, Ft(t.display));
          }
          if (t && this.collapsed && !t.options.lineWrapping)
            for (var u = 0; u < this.lines.length; ++u) {
              var c = re(e.lines[u]),
                f = se(c);
              f > t.display.maxLineLength &&
                ((t.display.maxLine = c),
                (t.display.maxLineLength = f),
                (t.display.maxLineChanged = !0));
            }
          null != i && t && this.collapsed && kr(t, i, o + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), t && wn(t.doc)),
            t && Ye(t, 'markerCleared', t, this, i, o),
            r && br(t),
            this.parent && this.parent.clear();
        }
      }),
        (ia.prototype.find = function(e, t) {
          var r = this;
          null == e && 'bookmark' == this.type && (e = 1);
          for (var n, i, o = 0; o < this.lines.length; ++o) {
            var a = r.lines[o],
              l = V(a.markedSpans, r);
            if (null != l.from && ((n = D(t ? a : A(a), l.from)), -1 == e))
              return n;
            if (null != l.to && ((i = D(t ? a : A(a), l.to)), 1 == e)) return i;
          }
          return n && { from: n, to: i };
        }),
        (ia.prototype.changed = function() {
          var e = this,
            t = this.find(-1, !0),
            r = this,
            n = this.doc.cm;
          t &&
            n &&
            wr(n, function() {
              var i = t.line,
                o = A(t.line),
                a = vt(n, o);
              if (
                (a &&
                  (xt(a),
                  (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !oe(r.doc, i) && null != r.height)
              ) {
                var l = r.height;
                r.height = null;
                var s = at(r) - l;
                s && O(i, i.height + s);
              }
              Ye(n, 'markerChanged', n, e);
            });
        }),
        (ia.prototype.attachLine = function(e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers && -1 != d(t.maybeHiddenMarkers, this)) ||
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                this
              );
          }
          this.lines.push(e);
        }),
        (ia.prototype.detachLine = function(e) {
          if (
            (this.lines.splice(d(this.lines, e), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        }),
        ye(ia);
      var oa = function(e, t) {
        var r = this;
        (this.markers = e), (this.primary = t);
        for (var n = 0; n < e.length; ++n) e[n].parent = r;
      };
      (oa.prototype.clear = function() {
        var e = this;
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var t = 0; t < this.markers.length; ++t) e.markers[t].clear();
          Ye(this, 'clear');
        }
      }),
        (oa.prototype.find = function(e, t) {
          return this.primary.find(e, t);
        }),
        ye(oa);
      var aa = 0,
        la = function(e, t, r, n, i) {
          if (!(this instanceof la)) return new la(e, t, r, n, i);
          null == r && (r = 0),
            zn.call(this, [new Fn([new Io('', null)])]),
            (this.first = r),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = r);
          var o = D(r, 0);
          (this.sel = Br(o)),
            (this.history = new en(null)),
            (this.id = ++aa),
            (this.modeOption = t),
            (this.lineSep = n),
            (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
            (this.extend = !1),
            'string' == typeof e && (e = this.splitLines(e)),
            Yr(this, { from: o, to: o, text: e }),
            mn(this, Br(o), vo);
        };
      (la.prototype = y(zn.prototype, {
        constructor: la,
        iter: function(e, t, r) {
          r
            ? this.iterN(e - this.first, t - e, r)
            : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function(e, t) {
          for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
          this.insertInner(e - this.first, t, r);
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t);
        },
        getValue: function(e) {
          var t = M(this, this.first, this.first + this.size);
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        setValue: Sr(function(e) {
          var t = D(this.first, 0),
            r = this.first + this.size - 1;
          Mn(
            this,
            {
              from: t,
              to: D(r, L(this, r).text.length),
              text: this.splitLines(e),
              origin: 'setValue',
              full: !0,
            },
            !0
          ),
            this.cm && sr(this.cm, 0, 0),
            mn(this, Br(t), vo);
        }),
        replaceRange: function(e, t, r, n) {
          En(this, e, (t = I(this, t)), (r = r ? I(this, r) : t), n);
        },
        getRange: function(e, t, r) {
          var n = T(this, I(this, e), I(this, t));
          return !1 === r ? n : n.join(r || this.lineSeparator());
        },
        getLine: function(e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function(e) {
          if (N(this, e)) return L(this, e);
        },
        getLineNumber: function(e) {
          return A(e);
        },
        getLineHandleVisualStart: function(e) {
          return 'number' == typeof e && (e = L(this, e)), re(e);
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
        clipPos: function(e) {
          return I(this, e);
        },
        getCursor: function(e) {
          var t = this.sel.primary();
          return null == e || 'head' == e
            ? t.head
            : 'anchor' == e
              ? t.anchor
              : 'end' == e || 'to' == e || !1 === e ? t.to() : t.from();
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: Sr(function(e, t, r) {
          gn(this, I(this, 'number' == typeof e ? D(e, t || 0) : e), null, r);
        }),
        setSelection: Sr(function(e, t, r) {
          gn(this, I(this, e), I(this, t || e), r);
        }),
        extendSelection: Sr(function(e, t, r) {
          dn(this, I(this, e), t && I(this, t), r);
        }),
        extendSelections: Sr(function(e, t) {
          hn(this, R(this, e), t);
        }),
        extendSelectionsBy: Sr(function(e, t) {
          hn(this, R(this, v(this.sel.ranges, e)), t);
        }),
        setSelections: Sr(function(e, t, r) {
          var n = this;
          if (e.length) {
            for (var i = [], o = 0; o < e.length; o++)
              i[o] = new ta(I(n, e[o].anchor), I(n, e[o].head));
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              mn(this, Rr(i, t), r);
          }
        }),
        addSelection: Sr(function(e, t, r) {
          var n = this.sel.ranges.slice(0);
          n.push(new ta(I(this, e), I(this, t || e))),
            mn(this, Rr(n, n.length - 1), r);
        }),
        getSelection: function(e) {
          for (var t, r = this, n = this.sel.ranges, i = 0; i < n.length; i++) {
            var o = T(r, n[i].from(), n[i].to());
            t = t ? t.concat(o) : o;
          }
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (
            var t = this, r = [], n = this.sel.ranges, i = 0;
            i < n.length;
            i++
          ) {
            var o = T(t, n[i].from(), n[i].to());
            !1 !== e && (o = o.join(e || t.lineSeparator())), (r[i] = o);
          }
          return r;
        },
        replaceSelection: function(e, t, r) {
          for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
          this.replaceSelections(n, t, r || '+input');
        },
        replaceSelections: Sr(function(e, t, r) {
          for (
            var n = this, i = [], o = this.sel, a = 0;
            a < o.ranges.length;
            a++
          ) {
            var l = o.ranges[a];
            i[a] = {
              from: l.from(),
              to: l.to(),
              text: n.splitLines(e[a]),
              origin: r,
            };
          }
          for (
            var s =
                t &&
                'end' != t &&
                (function(e, t, r) {
                  for (
                    var n = [], i = D(e.first, 0), o = i, a = 0;
                    a < t.length;
                    a++
                  ) {
                    var l = t[a],
                      s = qr(l.from, i, o),
                      u = qr(Vr(l), i, o);
                    if (((i = l.to), (o = u), 'around' == r)) {
                      var c = e.sel.ranges[a],
                        f = W(c.head, c.anchor) < 0;
                      n[a] = new ta(f ? u : s, f ? s : u);
                    } else n[a] = new ta(s, s);
                  }
                  return new ea(n, e.sel.primIndex);
                })(this, i, t),
              u = i.length - 1;
            u >= 0;
            u--
          )
            Mn(n, i[u]);
          s ? vn(this, s) : this.cm && lr(this.cm);
        }),
        undo: Sr(function() {
          An(this, 'undo');
        }),
        redo: Sr(function() {
          An(this, 'redo');
        }),
        undoSelection: Sr(function() {
          An(this, 'undo', !0);
        }),
        redoSelection: Sr(function() {
          An(this, 'redo', !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (
            var e = this.history, t = 0, r = 0, n = 0;
            n < e.done.length;
            n++
          )
            e.done[n].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
          return { undo: t, redo: r };
        },
        clearHistory: function() {
          this.history = new en(this.history.maxGeneration);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return (
            e &&
              (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
          );
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: cn(this.history.done),
            undone: cn(this.history.undone),
          };
        },
        setHistory: function(e) {
          var t = (this.history = new en(this.history.maxGeneration));
          (t.done = cn(e.done.slice(0), null, !0)),
            (t.undone = cn(e.undone.slice(0), null, !0));
        },
        setGutterMarker: Sr(function(e, t, r) {
          return Hn(this, e, 'gutter', function(e) {
            var n = e.gutterMarkers || (e.gutterMarkers = {});
            return (n[t] = r), !r && x(n) && (e.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Sr(function(e) {
          var t = this;
          this.iter(function(r) {
            r.gutterMarkers &&
              r.gutterMarkers[e] &&
              Hn(t, r, 'gutter', function() {
                return (
                  (r.gutterMarkers[e] = null),
                  x(r.gutterMarkers) && (r.gutterMarkers = null),
                  !0
                );
              });
          });
        }),
        lineInfo: function(e) {
          var t;
          if ('number' == typeof e) {
            if (!N(this, e)) return null;
            if (((t = e), !(e = L(this, e)))) return null;
          } else if (null == (t = A(e))) return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets,
          };
        },
        addLineClass: Sr(function(t, r, n) {
          return Hn(this, t, 'gutter' == r ? 'gutter' : 'class', function(t) {
            var i =
              'text' == r
                ? 'textClass'
                : 'background' == r
                  ? 'bgClass'
                  : 'gutter' == r ? 'gutterClass' : 'wrapClass';
            if (t[i]) {
              if (e(n).test(t[i])) return !1;
              t[i] += ' ' + n;
            } else t[i] = n;
            return !0;
          });
        }),
        removeLineClass: Sr(function(t, r, n) {
          return Hn(this, t, 'gutter' == r ? 'gutter' : 'class', function(t) {
            var i =
                'text' == r
                  ? 'textClass'
                  : 'background' == r
                    ? 'bgClass'
                    : 'gutter' == r ? 'gutterClass' : 'wrapClass',
              o = t[i];
            if (!o) return !1;
            if (null == n) t[i] = null;
            else {
              var a = o.match(e(n));
              if (!a) return !1;
              var l = a.index + a[0].length;
              t[i] =
                o.slice(0, a.index) +
                  (a.index && l != o.length ? ' ' : '') +
                  o.slice(l) || null;
            }
            return !0;
          });
        }),
        addLineWidget: Sr(function(e, t, r) {
          return (function(e, t, r, n) {
            var i = new ra(e, r, n),
              o = e.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              Hn(e, t, 'widget', function(t) {
                var r = t.widgets || (t.widgets = []);
                if (
                  (null == i.insertAt
                    ? r.push(i)
                    : r.splice(
                        Math.min(r.length - 1, Math.max(0, i.insertAt)),
                        0,
                        i
                      ),
                  (i.line = t),
                  o && !oe(e, t))
                ) {
                  var n = le(t) < e.scrollTop;
                  O(t, t.height + at(i)),
                    n && ar(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              Ye(o, 'lineWidgetAdded', o, i, 'number' == typeof t ? t : A(t)),
              i
            );
          })(this, e, t, r);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, t, r) {
          return In(this, I(this, e), I(this, t), r, (r && r.type) || 'range');
        },
        setBookmark: function(e, t) {
          var r = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents,
          };
          return (e = I(this, e)), In(this, e, e, r, 'bookmark');
        },
        findMarksAt: function(e) {
          var t = [],
            r = L(this, (e = I(this, e)).line).markedSpans;
          if (r)
            for (var n = 0; n < r.length; ++n) {
              var i = r[n];
              (null == i.from || i.from <= e.ch) &&
                (null == i.to || i.to >= e.ch) &&
                t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function(e, t, r) {
          (e = I(this, e)), (t = I(this, t));
          var n = [],
            i = e.line;
          return (
            this.iter(e.line, t.line + 1, function(o) {
              var a = o.markedSpans;
              if (a)
                for (var l = 0; l < a.length; l++) {
                  var s = a[l];
                  (null != s.to && i == e.line && e.ch >= s.to) ||
                    (null == s.from && i != e.line) ||
                    (null != s.from && i == t.line && s.from >= t.ch) ||
                    (r && !r(s.marker)) ||
                    n.push(s.marker.parent || s.marker);
                }
              ++i;
            }),
            n
          );
        },
        getAllMarks: function() {
          var e = [];
          return (
            this.iter(function(t) {
              var r = t.markedSpans;
              if (r)
                for (var n = 0; n < r.length; ++n)
                  null != r[n].from && e.push(r[n].marker);
            }),
            e
          );
        },
        posFromIndex: function(e) {
          var t,
            r = this.first,
            n = this.lineSeparator().length;
          return (
            this.iter(function(i) {
              var o = i.text.length + n;
              if (o > e) return (t = e), !0;
              (e -= o), ++r;
            }),
            I(this, D(r, t))
          );
        },
        indexFromPos: function(e) {
          var t = (e = I(this, e)).ch;
          if (e.line < this.first || e.ch < 0) return 0;
          var r = this.lineSeparator().length;
          return (
            this.iter(this.first, e.line, function(e) {
              t += e.text.length + r;
            }),
            t
          );
        },
        copy: function(e) {
          var t = new la(
            M(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          );
        },
        linkedDoc: function(e) {
          e || (e = {});
          var t = this.first,
            r = this.first + this.size;
          null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < r && (r = e.to);
          var n = new la(
            M(this, t, r),
            e.mode || this.modeOption,
            t,
            this.lineSep,
            this.direction
          );
          return (
            e.sharedHist && (n.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: n,
              sharedHist: e.sharedHist,
            }),
            (n.linked = [
              { doc: this, isParent: !0, sharedHist: e.sharedHist },
            ]),
            (function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r],
                  i = n.find(),
                  o = e.clipPos(i.from),
                  a = e.clipPos(i.to);
                if (W(o, a)) {
                  var l = In(e, o, a, n.primary, n.primary.type);
                  n.markers.push(l), (l.parent = n);
                }
              }
            })(n, Rn(this)),
            n
          );
        },
        unlinkDoc: function(e) {
          var t = this;
          if ((e instanceof Si && (e = e.doc), this.linked))
            for (var r = 0; r < this.linked.length; ++r) {
              if (t.linked[r].doc == e) {
                t.linked.splice(r, 1), e.unlinkDoc(t), Bn(Rn(t));
                break;
              }
            }
          if (e.history == this.history) {
            var n = [e.id];
            Zr(
              e,
              function(e) {
                return n.push(e.id);
              },
              !0
            ),
              (e.history = new en(null)),
              (e.history.done = cn(this.history.done, n)),
              (e.history.undone = cn(this.history.undone, n));
          }
        },
        iterLinkedDocs: function(e) {
          Zr(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : Ao(e);
        },
        lineSeparator: function() {
          return this.lineSep || '\n';
        },
        setDirection: Sr(function(e) {
          'rtl' != e && (e = 'ltr'),
            e != this.direction &&
              ((this.direction = e),
              this.iter(function(e) {
                return (e.order = null);
              }),
              this.cm &&
                (function(e) {
                  wr(e, function() {
                    Jr(e), kr(e);
                  });
                })(this.cm));
        }),
      })),
        (la.prototype.eachLine = la.prototype.iter);
      for (
        var sa = 0,
          ua = !1,
          ca = {
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
          fa = 0;
        fa < 10;
        fa++
      )
        ca[fa + 48] = ca[fa + 96] = String(fa);
      for (var da = 65; da <= 90; da++) ca[da] = String.fromCharCode(da);
      for (var ha = 1; ha <= 12; ha++) ca[ha + 111] = ca[ha + 63235] = 'F' + ha;
      var pa = {};
      (pa.basic = {
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
        (pa.pcDefault = {
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
        (pa.emacsy = {
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
        (pa.macDefault = {
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
        (pa.default = to ? pa.macDefault : pa.pcDefault);
      var ga = {
          selectAll: Ln,
          singleSelection: function(e) {
            return e.setSelection(
              e.getCursor('anchor'),
              e.getCursor('head'),
              vo
            );
          },
          killLine: function(e) {
            return ti(e, function(t) {
              if (t.empty()) {
                var r = L(e.doc, t.head.line).text.length;
                return t.head.ch == r && t.head.line < e.lastLine()
                  ? { from: t.head, to: D(t.head.line + 1, 0) }
                  : { from: t.head, to: D(t.head.line, r) };
              }
              return { from: t.from(), to: t.to() };
            });
          },
          deleteLine: function(e) {
            return ti(e, function(t) {
              return {
                from: D(t.from().line, 0),
                to: I(e.doc, D(t.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function(e) {
            return ti(e, function(e) {
              return { from: D(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function(e) {
            return ti(e, function(t) {
              var r = e.charCoords(t.head, 'div').top + 5;
              return {
                from: e.coordsChar({ left: 0, top: r }, 'div'),
                to: t.from(),
              };
            });
          },
          delWrappedLineRight: function(e) {
            return ti(e, function(t) {
              var r = e.charCoords(t.head, 'div').top + 5,
                n = e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: r },
                  'div'
                );
              return { from: t.from(), to: n };
            });
          },
          undo: function(e) {
            return e.undo();
          },
          redo: function(e) {
            return e.redo();
          },
          undoSelection: function(e) {
            return e.undoSelection();
          },
          redoSelection: function(e) {
            return e.redoSelection();
          },
          goDocStart: function(e) {
            return e.extendSelection(D(e.firstLine(), 0));
          },
          goDocEnd: function(e) {
            return e.extendSelection(D(e.lastLine()));
          },
          goLineStart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return oi(e, t.head.line);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineStartSmart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return li(e, t.head);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineEnd: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return ai(e, t.head.line);
              },
              { origin: '+move', bias: -1 }
            );
          },
          goLineRight: function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: r },
                'div'
              );
            }, yo);
          },
          goLineLeft: function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar({ left: 0, top: r }, 'div');
            }, yo);
          },
          goLineLeftSmart: function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, 'div').top + 5,
                n = e.coordsChar({ left: 0, top: r }, 'div');
              return n.ch < e.getLine(n.line).search(/\S/) ? li(e, t.head) : n;
            }, yo);
          },
          goLineUp: function(e) {
            return e.moveV(-1, 'line');
          },
          goLineDown: function(e) {
            return e.moveV(1, 'line');
          },
          goPageUp: function(e) {
            return e.moveV(-1, 'page');
          },
          goPageDown: function(e) {
            return e.moveV(1, 'page');
          },
          goCharLeft: function(e) {
            return e.moveH(-1, 'char');
          },
          goCharRight: function(e) {
            return e.moveH(1, 'char');
          },
          goColumnLeft: function(e) {
            return e.moveH(-1, 'column');
          },
          goColumnRight: function(e) {
            return e.moveH(1, 'column');
          },
          goWordLeft: function(e) {
            return e.moveH(-1, 'word');
          },
          goGroupRight: function(e) {
            return e.moveH(1, 'group');
          },
          goGroupLeft: function(e) {
            return e.moveH(-1, 'group');
          },
          goWordRight: function(e) {
            return e.moveH(1, 'word');
          },
          delCharBefore: function(e) {
            return e.deleteH(-1, 'char');
          },
          delCharAfter: function(e) {
            return e.deleteH(1, 'char');
          },
          delWordBefore: function(e) {
            return e.deleteH(-1, 'word');
          },
          delWordAfter: function(e) {
            return e.deleteH(1, 'word');
          },
          delGroupBefore: function(e) {
            return e.deleteH(-1, 'group');
          },
          delGroupAfter: function(e) {
            return e.deleteH(1, 'group');
          },
          indentAuto: function(e) {
            return e.indentSelection('smart');
          },
          indentMore: function(e) {
            return e.indentSelection('add');
          },
          indentLess: function(e) {
            return e.indentSelection('subtract');
          },
          insertTab: function(e) {
            return e.replaceSelection('\t');
          },
          insertSoftTab: function(e) {
            for (
              var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0;
              i < r.length;
              i++
            ) {
              var o = r[i].from(),
                a = f(e.getLine(o.line), o.ch, n);
              t.push(p(n - a % n));
            }
            e.replaceSelections(t);
          },
          defaultTab: function(e) {
            e.somethingSelected()
              ? e.indentSelection('add')
              : e.execCommand('insertTab');
          },
          transposeChars: function(e) {
            return wr(e, function() {
              for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                if (t[n].empty()) {
                  var i = t[n].head,
                    o = L(e.doc, i.line).text;
                  if (o)
                    if (
                      (i.ch == o.length && (i = new D(i.line, i.ch - 1)),
                      i.ch > 0)
                    )
                      (i = new D(i.line, i.ch + 1)),
                        e.replaceRange(
                          o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                          D(i.line, i.ch - 2),
                          i,
                          '+transpose'
                        );
                    else if (i.line > e.doc.first) {
                      var a = L(e.doc, i.line - 1).text;
                      a &&
                        ((i = new D(i.line, 1)),
                        e.replaceRange(
                          o.charAt(0) +
                            e.doc.lineSeparator() +
                            a.charAt(a.length - 1),
                          D(i.line - 1, a.length - 1),
                          i,
                          '+transpose'
                        ));
                    }
                  r.push(new ta(i, i));
                }
              e.setSelections(r);
            });
          },
          newlineAndIndent: function(e) {
            return wr(e, function() {
              for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
                e.replaceRange(
                  e.doc.lineSeparator(),
                  t[r].anchor,
                  t[r].head,
                  '+input'
                );
              t = e.listSelections();
              for (var n = 0; n < t.length; n++)
                e.indentLine(t[n].from().line, null, !0);
              lr(e);
            });
          },
          openLine: function(e) {
            return e.replaceSelection('\n', 'start');
          },
          toggleOverwrite: function(e) {
            return e.toggleOverwrite();
          },
        },
        va = new co(),
        ma = null,
        ya = function(e, t, r) {
          (this.time = e), (this.pos = t), (this.button = r);
        };
      ya.prototype.compare = function(e, t, r) {
        return this.time + 400 > e && 0 == W(t, this.pos) && r == this.button;
      };
      var ba,
        wa,
        xa = {
          toString: function() {
            return 'CodeMirror.Init';
          },
        },
        Ca = {},
        Sa = {};
      (Si.defaults = Ca), (Si.optionHandlers = Sa);
      var ka = [];
      Si.defineInitHook = function(e) {
        return ka.push(e);
      };
      var La = null,
        Ta = function(e) {
          (this.cm = e),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new co()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
      (Ta.prototype.init = function(e) {
        function t(e) {
          if (!ge(i, e)) {
            if (i.somethingSelected())
              Li({ lineWise: !1, text: i.getSelections() }),
                'cut' == e.type && i.replaceSelection('', null, 'cut');
            else {
              if (!i.options.lineWiseCopyCut) return;
              var t = Ai(i);
              Li({ lineWise: !0, text: t.text }),
                'cut' == e.type &&
                  i.operation(function() {
                    i.setSelections(t.ranges, 0, vo),
                      i.replaceSelection('', null, 'cut');
                  });
            }
            if (e.clipboardData) {
              e.clipboardData.clearData();
              var r = La.text.join('\n');
              if (
                (e.clipboardData.setData('Text', r),
                e.clipboardData.getData('Text') == r)
              )
                return void e.preventDefault();
            }
            var a = Ni(),
              l = a.firstChild;
            i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild),
              (l.value = La.text.join('\n'));
            var s = document.activeElement;
            uo(l),
              setTimeout(function() {
                i.display.lineSpace.removeChild(a),
                  s.focus(),
                  s == o && n.showPrimarySelection();
              }, 50);
          }
        }
        var r = this,
          n = this,
          i = n.cm,
          o = (n.div = e.lineDiv);
        _i(o, i.options.spellcheck),
          Mo(o, 'paste', function(e) {
            ge(i, e) ||
              Mi(e, i) ||
              (Ui <= 11 &&
                setTimeout(
                  xr(i, function() {
                    return r.updateFromDOM();
                  }),
                  20
                ));
          }),
          Mo(o, 'compositionstart', function(e) {
            r.composing = { data: e.data, done: !1 };
          }),
          Mo(o, 'compositionupdate', function(e) {
            r.composing || (r.composing = { data: e.data, done: !1 });
          }),
          Mo(o, 'compositionend', function(e) {
            r.composing &&
              (e.data != r.composing.data && r.readFromDOMSoon(),
              (r.composing.done = !0));
          }),
          Mo(o, 'touchstart', function() {
            return n.forceCompositionEnd();
          }),
          Mo(o, 'input', function() {
            r.composing || r.readFromDOMSoon();
          }),
          Mo(o, 'copy', t),
          Mo(o, 'cut', t);
      }),
        (Ta.prototype.prepareSelection = function() {
          var e = qt(this.cm, !1);
          return (e.focus = this.cm.state.focused), e;
        }),
        (Ta.prototype.showSelection = function(e, t) {
          e &&
            this.cm.display.view.length &&
            ((e.focus || t) && this.showPrimarySelection(),
            this.showMultipleSelections(e));
        }),
        (Ta.prototype.showPrimarySelection = function() {
          var e = window.getSelection(),
            t = this.cm,
            r = t.doc.sel.primary(),
            n = r.from(),
            i = r.to();
          if (
            t.display.viewTo == t.display.viewFrom ||
            n.line >= t.display.viewTo ||
            i.line < t.display.viewFrom
          )
            e.removeAllRanges();
          else {
            var o = Hi(t, e.anchorNode, e.anchorOffset),
              a = Hi(t, e.focusNode, e.focusOffset);
            if (
              !o ||
              o.bad ||
              !a ||
              a.bad ||
              0 != W(z(o, a), n) ||
              0 != W(F(o, a), i)
            ) {
              var l = t.display.view,
                s = (n.line >= t.display.viewFrom && Wi(t, n)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                u = i.line < t.display.viewTo && Wi(t, i);
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
                  h = e.rangeCount && e.getRangeAt(0);
                try {
                  d = oo(s.node, s.offset, u.offset, u.node);
                } catch (e) {}
                d &&
                  (!ji && t.state.focused
                    ? (e.collapse(s.node, s.offset),
                      d.collapsed || (e.removeAllRanges(), e.addRange(d)))
                    : (e.removeAllRanges(), e.addRange(d)),
                  h && null == e.anchorNode
                    ? e.addRange(h)
                    : ji && this.startGracePeriod()),
                  this.rememberSelection();
              } else e.removeAllRanges();
            }
          }
        }),
        (Ta.prototype.startGracePeriod = function() {
          var e = this;
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function() {
              (e.gracePeriod = !1),
                e.selectionChanged() &&
                  e.cm.operation(function() {
                    return (e.cm.curOp.selectionChanged = !0);
                  });
            }, 20));
        }),
        (Ta.prototype.showMultipleSelections = function(e) {
          r(this.cm.display.cursorDiv, e.cursors),
            r(this.cm.display.selectionDiv, e.selection);
        }),
        (Ta.prototype.rememberSelection = function() {
          var e = window.getSelection();
          (this.lastAnchorNode = e.anchorNode),
            (this.lastAnchorOffset = e.anchorOffset),
            (this.lastFocusNode = e.focusNode),
            (this.lastFocusOffset = e.focusOffset);
        }),
        (Ta.prototype.selectionInEditor = function() {
          var e = window.getSelection();
          if (!e.rangeCount) return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return o(this.div, t);
        }),
        (Ta.prototype.focus = function() {
          'nocursor' != this.cm.options.readOnly &&
            (this.selectionInEditor() ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus());
        }),
        (Ta.prototype.blur = function() {
          this.div.blur();
        }),
        (Ta.prototype.getField = function() {
          return this.div;
        }),
        (Ta.prototype.supportsTouch = function() {
          return !0;
        }),
        (Ta.prototype.receivedFocus = function() {
          function e() {
            t.cm.state.focused &&
              (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
          }
          var t = this;
          this.selectionInEditor()
            ? this.pollSelection()
            : wr(this.cm, function() {
                return (t.cm.curOp.selectionChanged = !0);
              }),
            this.polling.set(this.cm.options.pollInterval, e);
        }),
        (Ta.prototype.selectionChanged = function() {
          var e = window.getSelection();
          return (
            e.anchorNode != this.lastAnchorNode ||
            e.anchorOffset != this.lastAnchorOffset ||
            e.focusNode != this.lastFocusNode ||
            e.focusOffset != this.lastFocusOffset
          );
        }),
        (Ta.prototype.pollSelection = function() {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var e = window.getSelection(),
              t = this.cm;
            if (
              Ji &&
              Ki &&
              this.cm.options.gutters.length &&
              (function(e) {
                for (var t = e; t; t = t.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                return !1;
              })(e.anchorNode)
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
              var r = Hi(t, e.anchorNode, e.anchorOffset),
                n = Hi(t, e.focusNode, e.focusOffset);
              r &&
                n &&
                wr(t, function() {
                  mn(t.doc, Br(r, n), vo),
                    (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (Ta.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var e = this.cm,
            t = e.display,
            r = e.doc.sel.primary(),
            n = r.from(),
            i = r.to();
          if (
            (0 == n.ch &&
              n.line > e.firstLine() &&
              (n = D(n.line - 1, L(e.doc, n.line - 1).length)),
            i.ch == L(e.doc, i.line).text.length &&
              i.line < e.lastLine() &&
              (i = D(i.line + 1, 0)),
            n.line < t.viewFrom || i.line > t.viewTo - 1)
          )
            return !1;
          var o, a, l;
          n.line == t.viewFrom || 0 == (o = Ut(e, n.line))
            ? ((a = A(t.view[0].line)), (l = t.view[0].node))
            : ((a = A(t.view[o].line)), (l = t.view[o - 1].node.nextSibling));
          var s,
            u,
            c = Ut(e, i.line);
          if (
            (c == t.view.length - 1
              ? ((s = t.viewTo - 1), (u = t.lineDiv.lastChild))
              : ((s = A(t.view[c + 1].line) - 1),
                (u = t.view[c + 1].node.previousSibling)),
            !l)
          )
            return !1;
          for (
            var f = e.doc.splitLines(
                (function(e, t, r, n, i) {
                  function o() {
                    u && ((s += c), (u = !1));
                  }
                  function a(e) {
                    e && (o(), (s += e));
                  }
                  function l(t) {
                    if (1 == t.nodeType) {
                      var r = t.getAttribute('cm-text');
                      if (null != r)
                        return void a(
                          r || t.textContent.replace(/\u200b/g, '')
                        );
                      var s,
                        f = t.getAttribute('cm-marker');
                      if (f) {
                        var d = e.findMarks(
                          D(n, 0),
                          D(i + 1, 0),
                          (function(e) {
                            return function(t) {
                              return t.id == e;
                            };
                          })(+f)
                        );
                        return void (
                          d.length &&
                          (s = d[0].find(0)) &&
                          a(T(e.doc, s.from, s.to).join(c))
                        );
                      }
                      if ('false' == t.getAttribute('contenteditable')) return;
                      var h = /^(pre|div|p)$/i.test(t.nodeName);
                      h && o();
                      for (var p = 0; p < t.childNodes.length; p++)
                        l(t.childNodes[p]);
                      h && (u = !0);
                    } else 3 == t.nodeType && a(t.nodeValue);
                  }
                  for (
                    var s = '', u = !1, c = e.doc.lineSeparator();
                    l(t), t != r;

                  )
                    t = t.nextSibling;
                  return s;
                })(e, l, u, a, s)
              ),
              d = T(e.doc, D(a, 0), D(s, L(e.doc, s).text.length));
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
          if (1 == f.length && 1 == d.length && a == n.line)
            for (
              ;
              h &&
              h > n.ch &&
              b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1);

            )
              h--, p++;
          (f[f.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, '')),
            (f[0] = f[0].slice(h).replace(/\u200b+$/, ''));
          var C = D(a, h),
            S = D(s, d.length ? g(d).length - p : 0);
          return f.length > 1 || f[0] || W(C, S)
            ? (En(e.doc, f, C, S, '+input'), !0)
            : void 0;
        }),
        (Ta.prototype.ensurePolled = function() {
          this.forceCompositionEnd();
        }),
        (Ta.prototype.reset = function() {
          this.forceCompositionEnd();
        }),
        (Ta.prototype.forceCompositionEnd = function() {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus());
        }),
        (Ta.prototype.readFromDOMSoon = function() {
          var e = this;
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function() {
              if (((e.readDOMTimeout = null), e.composing)) {
                if (!e.composing.done) return;
                e.composing = null;
              }
              e.updateFromDOM();
            }, 80));
        }),
        (Ta.prototype.updateFromDOM = function() {
          var e = this;
          (!this.cm.isReadOnly() && this.pollContent()) ||
            wr(this.cm, function() {
              return kr(e.cm);
            });
        }),
        (Ta.prototype.setUneditable = function(e) {
          e.contentEditable = 'false';
        }),
        (Ta.prototype.onKeyPress = function(e) {
          0 != e.charCode &&
            (e.preventDefault(),
            this.cm.isReadOnly() ||
              xr(this.cm, Ti)(
                this.cm,
                String.fromCharCode(
                  null == e.charCode ? e.keyCode : e.charCode
                ),
                0
              ));
        }),
        (Ta.prototype.readOnlyChanged = function(e) {
          this.div.contentEditable = String('nocursor' != e);
        }),
        (Ta.prototype.onContextMenu = function() {}),
        (Ta.prototype.resetPosition = function() {}),
        (Ta.prototype.needsContentAttribute = !0);
      var Ma = function(e) {
        (this.cm = e),
          (this.prevInput = ''),
          (this.pollingFast = !1),
          (this.polling = new co()),
          (this.hasSelection = !1),
          (this.composing = null);
      };
      (Ma.prototype.init = function(e) {
        function t(e) {
          if (!ge(i, e)) {
            if (i.somethingSelected())
              Li({ lineWise: !1, text: i.getSelections() });
            else {
              if (!i.options.lineWiseCopyCut) return;
              var t = Ai(i);
              Li({ lineWise: !0, text: t.text }),
                'cut' == e.type
                  ? i.setSelections(t.ranges, null, vo)
                  : ((n.prevInput = ''), (a.value = t.text.join('\n')), uo(a));
            }
            'cut' == e.type && (i.state.cutIncoming = !0);
          }
        }
        var r = this,
          n = this,
          i = this.cm,
          o = (this.wrapper = Ni()),
          a = (this.textarea = o.firstChild);
        e.wrapper.insertBefore(o, e.wrapper.firstChild),
          Qi && (a.style.width = '0px'),
          Mo(a, 'input', function() {
            Vi && Ui >= 9 && r.hasSelection && (r.hasSelection = null),
              n.poll();
          }),
          Mo(a, 'paste', function(e) {
            ge(i, e) ||
              Mi(e, i) ||
              ((i.state.pasteIncoming = !0), n.fastPoll());
          }),
          Mo(a, 'cut', t),
          Mo(a, 'copy', t),
          Mo(e.scroller, 'paste', function(t) {
            lt(e, t) || ge(i, t) || ((i.state.pasteIncoming = !0), n.focus());
          }),
          Mo(e.lineSpace, 'selectstart', function(t) {
            lt(e, t) || be(t);
          }),
          Mo(a, 'compositionstart', function() {
            var e = i.getCursor('from');
            n.composing && n.composing.range.clear(),
              (n.composing = {
                start: e,
                range: i.markText(e, i.getCursor('to'), {
                  className: 'CodeMirror-composing',
                }),
              });
          }),
          Mo(a, 'compositionend', function() {
            n.composing &&
              (n.poll(), n.composing.range.clear(), (n.composing = null));
          });
      }),
        (Ma.prototype.prepareSelection = function() {
          var e = this.cm,
            t = e.display,
            r = e.doc,
            n = qt(e);
          if (e.options.moveInputWithCursor) {
            var i = _t(e, r.sel.primary().head, 'div'),
              o = t.wrapper.getBoundingClientRect(),
              a = t.lineDiv.getBoundingClientRect();
            (n.teTop = Math.max(
              0,
              Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)
            )),
              (n.teLeft = Math.max(
                0,
                Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)
              ));
          }
          return n;
        }),
        (Ma.prototype.showSelection = function(e) {
          var t = this.cm.display;
          r(t.cursorDiv, e.cursors),
            r(t.selectionDiv, e.selection),
            null != e.teTop &&
              ((this.wrapper.style.top = e.teTop + 'px'),
              (this.wrapper.style.left = e.teLeft + 'px'));
        }),
        (Ma.prototype.reset = function(e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm;
            if (t.somethingSelected()) {
              this.prevInput = '';
              var r = t.getSelection();
              (this.textarea.value = r),
                t.state.focused && uo(this.textarea),
                Vi && Ui >= 9 && (this.hasSelection = r);
            } else
              e ||
                ((this.prevInput = this.textarea.value = ''),
                Vi && Ui >= 9 && (this.hasSelection = null));
          }
        }),
        (Ma.prototype.getField = function() {
          return this.textarea;
        }),
        (Ma.prototype.supportsTouch = function() {
          return !1;
        }),
        (Ma.prototype.focus = function() {
          if (
            'nocursor' != this.cm.options.readOnly &&
            (!eo || a() != this.textarea)
          )
            try {
              this.textarea.focus();
            } catch (e) {}
        }),
        (Ma.prototype.blur = function() {
          this.textarea.blur();
        }),
        (Ma.prototype.resetPosition = function() {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }),
        (Ma.prototype.receivedFocus = function() {
          this.slowPoll();
        }),
        (Ma.prototype.slowPoll = function() {
          var e = this;
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function() {
              e.poll(), e.cm.state.focused && e.slowPoll();
            });
        }),
        (Ma.prototype.fastPoll = function() {
          function e() {
            r.poll() || t
              ? ((r.pollingFast = !1), r.slowPoll())
              : ((t = !0), r.polling.set(60, e));
          }
          var t = !1,
            r = this;
          (r.pollingFast = !0), r.polling.set(20, e);
        }),
        (Ma.prototype.poll = function() {
          var e = this,
            t = this.cm,
            r = this.textarea,
            n = this.prevInput;
          if (
            this.contextMenuPending ||
            !t.state.focused ||
            (_o(r) && !n && !this.composing) ||
            t.isReadOnly() ||
            t.options.disableInput ||
            t.state.keySeq
          )
            return !1;
          var i = r.value;
          if (i == n && !t.somethingSelected()) return !1;
          if (
            (Vi && Ui >= 9 && this.hasSelection === i) ||
            (to && /[\uf700-\uf7ff]/.test(i))
          )
            return t.display.input.reset(), !1;
          if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if ((8203 != o || n || (n = '​'), 8666 == o))
              return this.reset(), this.cm.execCommand('undo');
          }
          for (
            var a = 0, l = Math.min(n.length, i.length);
            a < l && n.charCodeAt(a) == i.charCodeAt(a);

          )
            ++a;
          return (
            wr(t, function() {
              Ti(
                t,
                i.slice(a),
                n.length - a,
                null,
                e.composing ? '*compose' : null
              ),
                i.length > 1e3 || i.indexOf('\n') > -1
                  ? (r.value = e.prevInput = '')
                  : (e.prevInput = i),
                e.composing &&
                  (e.composing.range.clear(),
                  (e.composing.range = t.markText(
                    e.composing.start,
                    t.getCursor('to'),
                    { className: 'CodeMirror-composing' }
                  )));
            }),
            !0
          );
        }),
        (Ma.prototype.ensurePolled = function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Ma.prototype.onKeyPress = function() {
          Vi && Ui >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Ma.prototype.onContextMenu = function(e) {
          function t() {
            if (null != a.selectionStart) {
              var e = i.somethingSelected(),
                t = '​' + (e ? a.value : '');
              (a.value = '⇚'),
                (a.value = t),
                (n.prevInput = e ? '' : '​'),
                (a.selectionStart = 1),
                (a.selectionEnd = t.length),
                (o.selForContextMenu = i.doc.sel);
            }
          }
          function r() {
            if (
              ((n.contextMenuPending = !1),
              (n.wrapper.style.cssText = c),
              (a.style.cssText = u),
              Vi &&
                Ui < 9 &&
                o.scrollbars.setScrollTop((o.scroller.scrollTop = s)),
              null != a.selectionStart)
            ) {
              (!Vi || (Vi && Ui < 9)) && t();
              var e = 0,
                r = function() {
                  o.selForContextMenu == i.doc.sel &&
                  0 == a.selectionStart &&
                  a.selectionEnd > 0 &&
                  '​' == n.prevInput
                    ? xr(i, Ln)(i)
                    : e++ < 10
                      ? (o.detectingSelectAll = setTimeout(r, 500))
                      : ((o.selForContextMenu = null), o.input.reset());
                };
              o.detectingSelectAll = setTimeout(r, 200);
            }
          }
          var n = this,
            i = n.cm,
            o = i.display,
            a = n.textarea,
            l = Vt(i, e),
            s = o.scroller.scrollTop;
          if (l && !$i) {
            i.options.resetSelectionOnContextMenu &&
              -1 == i.doc.sel.contains(l) &&
              xr(i, mn)(i.doc, Br(l), vo);
            var u = a.style.cssText,
              c = n.wrapper.style.cssText;
            n.wrapper.style.cssText = 'position: absolute';
            var f = n.wrapper.getBoundingClientRect();
            a.style.cssText =
              'position: absolute; width: 30px; height: 30px;\n      top: ' +
              (e.clientY - f.top - 5) +
              'px; left: ' +
              (e.clientX - f.left - 5) +
              'px;\n      z-index: 1000; background: ' +
              (Vi ? 'rgba(255, 255, 255, .05)' : 'transparent') +
              ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);';
            var d;
            if (
              (Gi && (d = window.scrollY),
              o.input.focus(),
              Gi && window.scrollTo(null, d),
              o.input.reset(),
              i.somethingSelected() || (a.value = n.prevInput = ' '),
              (n.contextMenuPending = !0),
              (o.selForContextMenu = i.doc.sel),
              clearTimeout(o.detectingSelectAll),
              Vi && Ui >= 9 && t(),
              lo)
            ) {
              Ce(e);
              var h = function() {
                he(window, 'mouseup', h), setTimeout(r, 20);
              };
              Mo(window, 'mouseup', h);
            } else setTimeout(r, 50);
          }
        }),
        (Ma.prototype.readOnlyChanged = function(e) {
          e || this.reset(), (this.textarea.disabled = 'nocursor' == e);
        }),
        (Ma.prototype.setUneditable = function() {}),
        (Ma.prototype.needsContentAttribute = !1),
        (function(e) {
          function t(t, n, i, o) {
            (e.defaults[t] = n),
              i &&
                (r[t] = o
                  ? function(e, t, r) {
                      r != xa && i(e, t, r);
                    }
                  : i);
          }
          var r = e.optionHandlers;
          (e.defineOption = t),
            (e.Init = xa),
            t(
              'value',
              '',
              function(e, t) {
                return e.setValue(t);
              },
              !0
            ),
            t(
              'mode',
              null,
              function(e, t) {
                (e.doc.modeOption = t), Kr(e);
              },
              !0
            ),
            t('indentUnit', 2, Kr, !0),
            t('indentWithTabs', !1),
            t('smartIndent', !0),
            t(
              'tabSize',
              4,
              function(e) {
                $r(e), St(e), kr(e);
              },
              !0
            ),
            t('lineSeparator', null, function(e, t) {
              if (((e.doc.lineSep = t), t)) {
                var r = [],
                  n = e.doc.first;
                e.doc.iter(function(e) {
                  for (var i = 0; ; ) {
                    var o = e.text.indexOf(t, i);
                    if (-1 == o) break;
                    (i = o + t.length), r.push(D(n, o));
                  }
                  n++;
                });
                for (var i = r.length - 1; i >= 0; i--)
                  En(e.doc, t, r[i], D(r[i].line, r[i].ch + t.length));
              }
            }),
            t(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
              function(e, t, r) {
                (e.state.specialChars = new RegExp(
                  t.source + (t.test('\t') ? '' : '|\t'),
                  'g'
                )),
                  r != xa && e.refresh();
              }
            ),
            t(
              'specialCharPlaceholder',
              Ge,
              function(e) {
                return e.refresh();
              },
              !0
            ),
            t('electricChars', !0),
            t(
              'inputStyle',
              eo ? 'contenteditable' : 'textarea',
              function() {
                throw new Error(
                  'inputStyle can not (yet) be changed in a running editor'
                );
              },
              !0
            ),
            t(
              'spellcheck',
              !1,
              function(e, t) {
                return (e.getInputField().spellcheck = t);
              },
              !0
            ),
            t('rtlMoveVisually', !no),
            t('wholeLineUpdateBefore', !0),
            t(
              'theme',
              'default',
              function(e) {
                bi(e), wi(e);
              },
              !0
            ),
            t('keyMap', 'default', function(e, t, r) {
              var n = ei(t),
                i = r != xa && ei(r);
              i && i.detach && i.detach(e, n),
                n.attach && n.attach(e, i || null);
            }),
            t('extraKeys', null),
            t('configureMouse', null),
            t('lineWrapping', !1, Ci, !0),
            t(
              'gutters',
              [],
              function(e) {
                Fr(e.options), wi(e);
              },
              !0
            ),
            t(
              'fixedGutter',
              !0,
              function(e, t) {
                (e.display.gutters.style.left = t ? It(e.display) + 'px' : '0'),
                  e.refresh();
              },
              !0
            ),
            t(
              'coverGutterNextToScrollbar',
              !1,
              function(e) {
                return gr(e);
              },
              !0
            ),
            t(
              'scrollbarStyle',
              'native',
              function(e) {
                mr(e),
                  gr(e),
                  e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                  e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
              },
              !0
            ),
            t(
              'lineNumbers',
              !1,
              function(e) {
                Fr(e.options), wi(e);
              },
              !0
            ),
            t('firstLineNumber', 1, wi, !0),
            t(
              'lineNumberFormatter',
              function(e) {
                return e;
              },
              wi,
              !0
            ),
            t('showCursorWhenSelecting', !1, Gt, !0),
            t('resetSelectionOnContextMenu', !0),
            t('lineWiseCopyCut', !0),
            t('pasteLinesPerSelection', !0),
            t('readOnly', !1, function(e, t) {
              'nocursor' == t && (Jt(e), e.display.input.blur()),
                e.display.input.readOnlyChanged(t);
            }),
            t(
              'disableInput',
              !1,
              function(e, t) {
                t || e.display.input.reset();
              },
              !0
            ),
            t('dragDrop', !0, xi),
            t('allowDropFileTypes', null),
            t('cursorBlinkRate', 530),
            t('cursorScrollMargin', 0),
            t('cursorHeight', 1, Gt, !0),
            t('singleCursorHeightPerLine', !0, Gt, !0),
            t('workTime', 100),
            t('workDelay', 100),
            t('flattenSpans', !0, $r, !0),
            t('addModeClass', !1, $r, !0),
            t('pollInterval', 100),
            t('undoDepth', 200, function(e, t) {
              return (e.doc.history.undoDepth = t);
            }),
            t('historyEventDelay', 1250),
            t(
              'viewportMargin',
              10,
              function(e) {
                return e.refresh();
              },
              !0
            ),
            t('maxHighlightLength', 1e4, $r, !0),
            t('moveInputWithCursor', !0, function(e, t) {
              t || e.display.input.resetPosition();
            }),
            t('tabindex', null, function(e, t) {
              return (e.display.input.getField().tabIndex = t || '');
            }),
            t('autofocus', null),
            t(
              'direction',
              'ltr',
              function(e, t) {
                return e.doc.setDirection(t);
              },
              !0
            );
        })(Si),
        (function(e) {
          var t = e.optionHandlers,
            r = (e.helpers = {});
          (e.prototype = {
            constructor: e,
            focus: function() {
              window.focus(), this.display.input.focus();
            },
            setOption: function(e, r) {
              var n = this.options,
                i = n[e];
              (n[e] == r && 'mode' != e) ||
                ((n[e] = r),
                t.hasOwnProperty(e) && xr(this, t[e])(this, r, i),
                pe(this, 'optionChange', this, e));
            },
            getOption: function(e) {
              return this.options[e];
            },
            getDoc: function() {
              return this.doc;
            },
            addKeyMap: function(e, t) {
              this.state.keyMaps[t ? 'push' : 'unshift'](ei(e));
            },
            removeKeyMap: function(e) {
              for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
            },
            addOverlay: Cr(function(t, r) {
              var n = t.token ? t : e.getMode(this.options, t);
              if (n.startState)
                throw new Error('Overlays may not be stateful.');
              !(function(e, t, r) {
                for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; ) n++;
                e.splice(n, 0, t);
              })(
                this.state.overlays,
                {
                  mode: n,
                  modeSpec: t,
                  opaque: r && r.opaque,
                  priority: (r && r.priority) || 0,
                },
                function(e) {
                  return e.priority;
                }
              ),
                this.state.modeGen++,
                kr(this);
            }),
            removeOverlay: Cr(function(e) {
              for (
                var t = this, r = this.state.overlays, n = 0;
                n < r.length;
                ++n
              ) {
                var i = r[n].modeSpec;
                if (i == e || ('string' == typeof e && i.name == e))
                  return r.splice(n, 1), t.state.modeGen++, void kr(t);
              }
            }),
            indentLine: Cr(function(e, t, r) {
              'string' != typeof t &&
                'number' != typeof t &&
                (t =
                  null == t
                    ? this.options.smartIndent ? 'smart' : 'prev'
                    : t ? 'add' : 'subtract'),
                N(this.doc, e) && ki(this, e, t, r);
            }),
            indentSelection: Cr(function(e) {
              for (
                var t = this, r = this.doc.sel.ranges, n = -1, i = 0;
                i < r.length;
                i++
              ) {
                var o = r[i];
                if (o.empty())
                  o.head.line > n &&
                    (ki(t, o.head.line, e, !0),
                    (n = o.head.line),
                    i == t.doc.sel.primIndex && lr(t));
                else {
                  var a = o.from(),
                    l = o.to(),
                    s = Math.max(n, a.line);
                  n = Math.min(t.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                  for (var u = s; u < n; ++u) ki(t, u, e);
                  var c = t.doc.sel.ranges;
                  0 == a.ch &&
                    r.length == c.length &&
                    c[i].from().ch > 0 &&
                    pn(t.doc, i, new ta(a, c[i].to()), vo);
                }
              }
            }),
            getTokenAt: function(e, t) {
              return je(this, e, t);
            },
            getLineTokens: function(e, t) {
              return je(this, D(e), t, !0);
            },
            getTokenTypeAt: function(e) {
              e = I(this.doc, e);
              var t,
                r = We(this, L(this.doc, e.line)),
                n = 0,
                i = (r.length - 1) / 2,
                o = e.ch;
              if (0 == o) t = r[2];
              else
                for (;;) {
                  var a = (n + i) >> 1;
                  if ((a ? r[2 * a - 1] : 0) >= o) i = a;
                  else {
                    if (!(r[2 * a + 1] < o)) {
                      t = r[2 * a + 2];
                      break;
                    }
                    n = a + 1;
                  }
                }
              var l = t ? t.indexOf('overlay ') : -1;
              return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
            },
            getModeAt: function(t) {
              var r = this.doc.mode;
              return r.innerMode
                ? e.innerMode(r, this.getTokenAt(t).state).mode
                : r;
            },
            getHelper: function(e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function(e, t) {
              var n = this,
                i = [];
              if (!r.hasOwnProperty(t)) return i;
              var o = r[t],
                a = this.getModeAt(e);
              if ('string' == typeof a[t]) o[a[t]] && i.push(o[a[t]]);
              else if (a[t])
                for (var l = 0; l < a[t].length; l++) {
                  var s = o[a[t][l]];
                  s && i.push(s);
                }
              else
                a.helperType && o[a.helperType]
                  ? i.push(o[a.helperType])
                  : o[a.name] && i.push(o[a.name]);
              for (var u = 0; u < o._global.length; u++) {
                var c = o._global[u];
                c.pred(a, n) && -1 == d(i, c.val) && i.push(c.val);
              }
              return i;
            },
            getStateAfter: function(e, t) {
              var r = this.doc;
              return (
                (e = j(r, null == e ? r.first + r.size - 1 : e)),
                Pe(this, e + 1, t).state
              );
            },
            cursorCoords: function(e, t) {
              var r,
                n = this.doc.sel.primary();
              return (
                (r =
                  null == e
                    ? n.head
                    : 'object' == typeof e
                      ? I(this.doc, e)
                      : e ? n.from() : n.to()),
                _t(this, r, t || 'page')
              );
            },
            charCoords: function(e, t) {
              return At(this, I(this.doc, e), t || 'page');
            },
            coordsChar: function(e, t) {
              return (e = Ot(this, e, t || 'page')), Dt(this, e.left, e.top);
            },
            lineAtHeight: function(e, t) {
              return (
                (e = Ot(this, { top: e, left: 0 }, t || 'page').top),
                _(this.doc, e + this.display.viewOffset)
              );
            },
            heightAtLine: function(e, t, r) {
              var n,
                i = !1;
              if ('number' == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first
                  ? (e = this.doc.first)
                  : e > o && ((e = o), (i = !0)),
                  (n = L(this.doc, e));
              } else n = e;
              return (
                Mt(this, n, { top: 0, left: 0 }, t || 'page', r || i).top +
                (i ? this.doc.height - le(n) : 0)
              );
            },
            defaultTextHeight: function() {
              return Ft(this.display);
            },
            defaultCharWidth: function() {
              return zt(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(e, t, r, n, i) {
              var o = this.display,
                a = (e = _t(this, I(this.doc, e))).bottom,
                l = e.left;
              if (
                ((t.style.position = 'absolute'),
                t.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(t),
                o.sizer.appendChild(t),
                'over' == n)
              )
                a = e.top;
              else if ('above' == n || 'near' == n) {
                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                  u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ('above' == n || e.bottom + t.offsetHeight > s) &&
                e.top > t.offsetHeight
                  ? (a = e.top - t.offsetHeight)
                  : e.bottom + t.offsetHeight <= s && (a = e.bottom),
                  l + t.offsetWidth > u && (l = u - t.offsetWidth);
              }
              (t.style.top = a + 'px'),
                (t.style.left = t.style.right = ''),
                'right' == i
                  ? ((l = o.sizer.clientWidth - t.offsetWidth),
                    (t.style.right = '0px'))
                  : ('left' == i
                      ? (l = 0)
                      : 'middle' == i &&
                        (l = (o.sizer.clientWidth - t.offsetWidth) / 2),
                    (t.style.left = l + 'px')),
                r &&
                  (function(e, t) {
                    var r = or(e, t);
                    null != r.scrollTop && fr(e, r.scrollTop),
                      null != r.scrollLeft && hr(e, r.scrollLeft);
                  })(this, {
                    left: l,
                    top: a,
                    right: l + t.offsetWidth,
                    bottom: a + t.offsetHeight,
                  });
            },
            triggerOnKeyDown: Cr(fi),
            triggerOnKeyPress: Cr(hi),
            triggerOnKeyUp: di,
            triggerOnMouseDown: Cr(pi),
            execCommand: function(e) {
              if (ga.hasOwnProperty(e)) return ga[e].call(null, this);
            },
            triggerElectric: Cr(function(e) {
              Oi(this, e);
            }),
            findPosH: function(e, t, r, n) {
              var i = this,
                o = 1;
              t < 0 && ((o = -1), (t = -t));
              for (
                var a = I(this.doc, e), l = 0;
                l < t && !(a = Ei(i.doc, a, o, r, n)).hitSide;
                ++l
              );
              return a;
            },
            moveH: Cr(function(e, t) {
              var r = this;
              this.extendSelectionsBy(function(n) {
                return r.display.shift || r.doc.extend || n.empty()
                  ? Ei(r.doc, n.head, e, t, r.options.rtlMoveVisually)
                  : e < 0 ? n.from() : n.to();
              }, yo);
            }),
            deleteH: Cr(function(e, t) {
              var r = this.doc.sel,
                n = this.doc;
              r.somethingSelected()
                ? n.replaceSelection('', null, '+delete')
                : ti(this, function(r) {
                    var i = Ei(n, r.head, e, t, !1);
                    return e < 0
                      ? { from: i, to: r.head }
                      : { from: r.head, to: i };
                  });
            }),
            findPosV: function(e, t, r, n) {
              var i = this,
                o = 1,
                a = n;
              t < 0 && ((o = -1), (t = -t));
              for (var l = I(this.doc, e), s = 0; s < t; ++s) {
                var u = _t(i, l, 'div');
                if (
                  (null == a ? (a = u.left) : (u.left = a),
                  (l = Di(i, u, o, r)).hitSide)
                )
                  break;
              }
              return l;
            },
            moveV: Cr(function(e, t) {
              var r = this,
                n = this.doc,
                i = [],
                o =
                  !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (
                (n.extendSelectionsBy(function(a) {
                  if (o) return e < 0 ? a.from() : a.to();
                  var l = _t(r, a.head, 'div');
                  null != a.goalColumn && (l.left = a.goalColumn),
                    i.push(l.left);
                  var s = Di(r, l, e, t);
                  return (
                    'page' == t &&
                      a == n.sel.primary() &&
                      ar(r, At(r, s, 'div').top - l.top),
                    s
                  );
                }, yo),
                i.length)
              )
                for (var a = 0; a < n.sel.ranges.length; a++)
                  n.sel.ranges[a].goalColumn = i[a];
            }),
            findWordAt: function(e) {
              var t = L(this.doc, e.line).text,
                r = e.ch,
                n = e.ch;
              if (t) {
                var i = this.getHelper(e, 'wordChars');
                ('before' != e.sticky && n != t.length) || !r ? ++n : --r;
                for (
                  var o = t.charAt(r),
                    a = w(o, i)
                      ? function(e) {
                          return w(e, i);
                        }
                      : /\s/.test(o)
                        ? function(e) {
                            return /\s/.test(e);
                          }
                        : function(e) {
                            return !/\s/.test(e) && !w(e);
                          };
                  r > 0 && a(t.charAt(r - 1));

                )
                  --r;
                for (; n < t.length && a(t.charAt(n)); ) ++n;
              }
              return new ta(D(e.line, r), D(e.line, n));
            },
            toggleOverwrite: function(e) {
              (null != e && e == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? l(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : so(this.display.cursorDiv, 'CodeMirror-overwrite'),
                pe(this, 'overwriteToggle', this, this.state.overwrite));
            },
            hasFocus: function() {
              return this.display.input.getField() == a();
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: Cr(function(e, t) {
              sr(this, e, t);
            }),
            getScrollInfo: function() {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - ft(this) - this.display.barHeight,
                width: e.scrollWidth - ft(this) - this.display.barWidth,
                clientHeight: ht(this),
                clientWidth: dt(this),
              };
            },
            scrollIntoView: Cr(function(e, t) {
              null == e
                ? ((e = { from: this.doc.sel.primary().head, to: null }),
                  null == t && (t = this.options.cursorScrollMargin))
                : 'number' == typeof e
                  ? (e = { from: D(e, 0), to: null })
                  : null == e.from && (e = { from: e, to: null }),
                e.to || (e.to = e.from),
                (e.margin = t || 0),
                null != e.from.line
                  ? (function(e, t) {
                      ur(e), (e.curOp.scrollToPos = t);
                    })(this, e)
                  : cr(this, e.from, e.to, e.margin);
            }),
            setSize: Cr(function(e, t) {
              var r = this,
                n = function(e) {
                  return 'number' == typeof e || /^\d+$/.test(String(e))
                    ? e + 'px'
                    : e;
                };
              null != e && (this.display.wrapper.style.width = n(e)),
                null != t && (this.display.wrapper.style.height = n(t)),
                this.options.lineWrapping && Ct(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function(e) {
                if (e.widgets)
                  for (var t = 0; t < e.widgets.length; t++)
                    if (e.widgets[t].noHScroll) {
                      Lr(r, i, 'widget');
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                pe(this, 'refresh', this);
            }),
            operation: function(e) {
              return wr(this, e);
            },
            startOperation: function() {
              return yr(this);
            },
            endOperation: function() {
              return br(this);
            },
            refresh: Cr(function() {
              var e = this.display.cachedTextHeight;
              kr(this),
                (this.curOp.forceUpdate = !0),
                St(this),
                sr(this, this.doc.scrollLeft, this.doc.scrollTop),
                Wr(this),
                (null == e || Math.abs(e - Ft(this.display)) > 0.5) && Bt(this),
                pe(this, 'refresh', this);
            }),
            swapDoc: Cr(function(e) {
              var t = this.doc;
              return (
                (t.cm = null),
                Qr(this, e),
                St(this),
                this.display.input.reset(),
                sr(this, e.scrollLeft, e.scrollTop),
                (this.curOp.forceScroll = !0),
                Ye(this, 'swapDoc', this, t),
                t
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
            ye(e),
            (e.registerHelper = function(t, n, i) {
              r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }),
                (r[t][n] = i);
            }),
            (e.registerGlobalHelper = function(t, n, i, o) {
              e.registerHelper(t, n, o), r[t]._global.push({ pred: i, val: o });
            });
        })(Si);
      var Oa = 'iter insert remove copy getEditor constructor'.split(' ');
      for (var Aa in la.prototype)
        la.prototype.hasOwnProperty(Aa) &&
          d(Oa, Aa) < 0 &&
          (Si.prototype[Aa] = (function(e) {
            return function() {
              return e.apply(this.doc, arguments);
            };
          })(la.prototype[Aa]));
      return (
        ye(la),
        (Si.inputStyles = { textarea: Ma, contenteditable: Ta }),
        (Si.defineMode = function(e) {
          Si.defaults.mode || 'null' == e || (Si.defaults.mode = e),
            function(e, t) {
              arguments.length > 2 &&
                (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                (Do[e] = t);
            }.apply(this, arguments);
        }),
        (Si.defineMIME = function(e, t) {
          Wo[e] = t;
        }),
        Si.defineMode('null', function() {
          return {
            token: function(e) {
              return e.skipToEnd();
            },
          };
        }),
        Si.defineMIME('text/plain', 'null'),
        (Si.defineExtension = function(e, t) {
          Si.prototype[e] = t;
        }),
        (Si.defineDocExtension = function(e, t) {
          la.prototype[e] = t;
        }),
        (Si.fromTextArea = function(e, t) {
          function r() {
            e.value = s.getValue();
          }
          if (
            ((t = t ? c(t) : {}),
            (t.value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus)
          ) {
            var n = a();
            t.autofocus =
              n == e ||
              (null != e.getAttribute('autofocus') && n == document.body);
          }
          var i;
          if (e.form && (Mo(e.form, 'submit', r), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;
            try {
              var l = (o.submit = function() {
                r(), (o.submit = i), o.submit(), (o.submit = l);
              });
            } catch (e) {}
          }
          (t.finishInit = function(t) {
            (t.save = r),
              (t.getTextArea = function() {
                return e;
              }),
              (t.toTextArea = function() {
                (t.toTextArea = isNaN),
                  r(),
                  e.parentNode.removeChild(t.getWrapperElement()),
                  (e.style.display = ''),
                  e.form &&
                    (he(e.form, 'submit', r),
                    'function' == typeof e.form.submit && (e.form.submit = i));
              });
          }),
            (e.style.display = 'none');
          var s = Si(function(t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return s;
        }),
        (function(e) {
          (e.off = he),
            (e.on = Mo),
            (e.wheelEventPixels = jr),
            (e.Doc = la),
            (e.splitLines = Ao),
            (e.countColumn = f),
            (e.findColumn = h),
            (e.isWordChar = b),
            (e.Pass = go),
            (e.signal = pe),
            (e.Line = Io),
            (e.changeEnd = Vr),
            (e.scrollbarModel = Xo),
            (e.Pos = D),
            (e.cmpPos = W),
            (e.modes = Do),
            (e.mimeModes = Wo),
            (e.resolveMode = Me),
            (e.getMode = Oe),
            (e.modeExtensions = Po),
            (e.extendMode = Ae),
            (e.copyState = _e),
            (e.startState = Ee),
            (e.innerMode = Ne),
            (e.commands = ga),
            (e.keyMap = pa),
            (e.keyName = Jn),
            (e.isModifierKey = Zn),
            (e.lookupKey = Yn),
            (e.normalizeKeyMap = Xn),
            (e.StringStream = Ho),
            (e.SharedTextMarker = oa),
            (e.TextMarker = ia),
            (e.LineWidget = ra),
            (e.e_preventDefault = be),
            (e.e_stopPropagation = we),
            (e.e_stop = Ce),
            (e.addClass = l),
            (e.contains = o),
            (e.rmClass = so),
            (e.keyNames = ca);
        })(Si),
        (Si.version = '5.31.0'),
        Si
      );
    });
  },
  function(e, t, r) {
    'use strict';
    (function(e) {
      var r = 'object' == typeof e && e && e.Object === Object && e;
      t.a = r;
    }.call(t, r(7)));
  },
  function(e, t, r) {
    'use strict';
    (function(e) {
      var n = r(0),
        i = r(9),
        o =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        a = o && 'object' == typeof e && e && !e.nodeType && e,
        l = a && a.exports === o ? n.a.Buffer : void 0,
        s = (l ? l.isBuffer : void 0) || i.a;
      t.a = s;
    }.call(t, r(1)(e)));
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      var t = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function i(e) {
      var t = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function o(e) {
      var t = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function a(e) {
      var t = (this.__data__ = new w(e));
      this.size = t.size;
    }
    function l(e, t, r, n, i) {
      e !== t &&
        _e(
          t,
          function(o, a) {
            if (z(o)) i || (i = new Te()), Ot(e, t, a, r, l, n, i);
            else {
              var s = n ? n(e[a], o, a + '', e, t, i) : void 0;
              void 0 === s && (s = o), Ae(e, a, s);
            }
          },
          Tt
        );
    }
    function s(e, t) {
      if ('function' != typeof e || (null != t && 'function' != typeof t))
        throw new TypeError(Ar);
      var r = function() {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (s.Cache || Se)()), r;
    }
    function u(e, t, r) {
      function n(t) {
        var r = s,
          n = u;
        return (s = u = void 0), (p = t), (f = e.apply(n, r));
      }
      function i(e) {
        var r = e - h;
        return void 0 === h || r >= t || r < 0 || (v && e - p >= c);
      }
      function o() {
        var e = nn();
        if (i(e)) return a(e);
        d = setTimeout(
          o,
          (function(e) {
            var r = t - (e - h);
            return v ? vn(r, c - (e - p)) : r;
          })(e)
        );
      }
      function a(e) {
        return (d = void 0), m && s ? n(e) : ((s = u = void 0), f);
      }
      function l() {
        var e = nn(),
          r = i(e);
        if (((s = arguments), (u = this), (h = e), r)) {
          if (void 0 === d)
            return (function(e) {
              return (p = e), (d = setTimeout(o, t)), g ? n(e) : f;
            })(h);
          if (v) return (d = setTimeout(o, t)), n(h);
        }
        return void 0 === d && (d = setTimeout(o, t)), f;
      }
      var s,
        u,
        c,
        f,
        d,
        h,
        p = 0,
        g = !1,
        v = !1,
        m = !0;
      if ('function' != typeof e) throw new TypeError(pn);
      return (
        (t = hn(t) || 0),
        z(r) &&
          ((g = !!r.leading),
          (c = (v = 'maxWait' in r) ? gn(hn(r.maxWait) || 0, t) : c),
          (m = 'trailing' in r ? !!r.trailing : m)),
        (l.cancel = function() {
          void 0 !== d && clearTimeout(d), (p = 0), (s = h = u = d = void 0);
        }),
        (l.flush = function() {
          return void 0 === d ? f : a(nn());
        }),
        l
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var c = r(2),
      f = r.n(c),
      d = (r(6),
      function() {
        (this.__data__ = []), (this.size = 0);
      }),
      h = function(e, t) {
        return e === t || (e != e && t != t);
      },
      p = function(e, t) {
        for (var r = e.length; r--; ) if (h(e[r][0], t)) return r;
        return -1;
      },
      g = Array.prototype.splice,
      v = function(e) {
        var t = this.__data__,
          r = p(t, e);
        return !(
          r < 0 ||
          (r == t.length - 1 ? t.pop() : g.call(t, r, 1), --this.size, 0)
        );
      },
      m = function(e) {
        var t = this.__data__,
          r = p(t, e);
        return r < 0 ? void 0 : t[r][1];
      },
      y = function(e) {
        return p(this.__data__, e) > -1;
      },
      b = function(e, t) {
        var r = this.__data__,
          n = p(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
      };
    (n.prototype.clear = d),
      (n.prototype.delete = v),
      (n.prototype.get = m),
      (n.prototype.has = y),
      (n.prototype.set = b);
    var w = n,
      x = function() {
        (this.__data__ = new w()), (this.size = 0);
      },
      C = function(e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      },
      S = function(e) {
        return this.__data__.get(e);
      },
      k = function(e) {
        return this.__data__.has(e);
      },
      L = r(0),
      T = L.a.Symbol,
      M = Object.prototype,
      O = M.hasOwnProperty,
      A = M.toString,
      _ = T ? T.toStringTag : void 0,
      N = function(e) {
        var t = O.call(e, _),
          r = e[_];
        try {
          e[_] = void 0;
          var n = !0;
        } catch (e) {}
        var i = A.call(e);
        return n && (t ? (e[_] = r) : delete e[_]), i;
      },
      E = Object.prototype.toString,
      D = function(e) {
        return E.call(e);
      },
      W = '[object Null]',
      P = '[object Undefined]',
      H = T ? T.toStringTag : void 0,
      F = function(e) {
        return null == e
          ? void 0 === e ? P : W
          : H && H in Object(e) ? N(e) : D(e);
      },
      z = function(e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      },
      j = '[object AsyncFunction]',
      I = '[object Function]',
      R = '[object GeneratorFunction]',
      B = '[object Proxy]',
      V = function(e) {
        if (!z(e)) return !1;
        var t = F(e);
        return t == I || t == R || t == j || t == B;
      },
      U = L.a['__core-js_shared__'],
      G = (function() {
        var e = /[^.]+$/.exec((U && U.keys && U.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })(),
      q = function(e) {
        return !!G && G in e;
      },
      K = Function.prototype.toString,
      $ = function(e) {
        if (null != e) {
          try {
            return K.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      },
      X = /^\[object .+?Constructor\]$/,
      Y = Function.prototype,
      Z = Object.prototype,
      Q = Y.toString,
      J = Z.hasOwnProperty,
      ee = RegExp(
        '^' +
          Q.call(J)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      ),
      te = function(e) {
        return !(!z(e) || q(e)) && (V(e) ? ee : X).test($(e));
      },
      re = function(e, t) {
        return null == e ? void 0 : e[t];
      },
      ne = function(e, t) {
        var r = re(e, t);
        return te(r) ? r : void 0;
      },
      ie = ne(L.a, 'Map'),
      oe = ne(Object, 'create'),
      ae = function() {
        (this.__data__ = oe ? oe(null) : {}), (this.size = 0);
      },
      le = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      },
      se = '__lodash_hash_undefined__',
      ue = Object.prototype.hasOwnProperty,
      ce = function(e) {
        var t = this.__data__;
        if (oe) {
          var r = t[e];
          return r === se ? void 0 : r;
        }
        return ue.call(t, e) ? t[e] : void 0;
      },
      fe = Object.prototype.hasOwnProperty,
      de = function(e) {
        var t = this.__data__;
        return oe ? void 0 !== t[e] : fe.call(t, e);
      },
      he = '__lodash_hash_undefined__',
      pe = function(e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = oe && void 0 === t ? he : t),
          this
        );
      };
    (i.prototype.clear = ae),
      (i.prototype.delete = le),
      (i.prototype.get = ce),
      (i.prototype.has = de),
      (i.prototype.set = pe);
    var ge = i,
      ve = function() {
        (this.size = 0),
          (this.__data__ = {
            hash: new ge(),
            map: new (ie || w)(),
            string: new ge(),
          });
      },
      me = function(e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
          ? '__proto__' !== e
          : null === e;
      },
      ye = function(e, t) {
        var r = e.__data__;
        return me(t) ? r['string' == typeof t ? 'string' : 'hash'] : r.map;
      },
      be = function(e) {
        var t = ye(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      },
      we = function(e) {
        return ye(this, e).get(e);
      },
      xe = function(e) {
        return ye(this, e).has(e);
      },
      Ce = function(e, t) {
        var r = ye(this, e),
          n = r.size;
        return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
      };
    (o.prototype.clear = ve),
      (o.prototype.delete = be),
      (o.prototype.get = we),
      (o.prototype.has = xe),
      (o.prototype.set = Ce);
    var Se = o,
      ke = 200,
      Le = function(e, t) {
        var r = this.__data__;
        if (r instanceof w) {
          var n = r.__data__;
          if (!ie || n.length < ke - 1)
            return n.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new Se(n);
        }
        return r.set(e, t), (this.size = r.size), this;
      };
    (a.prototype.clear = x),
      (a.prototype.delete = C),
      (a.prototype.get = S),
      (a.prototype.has = k),
      (a.prototype.set = Le);
    var Te = a,
      Me = (function() {
        try {
          var e = ne(Object, 'defineProperty');
          return e({}, '', {}), e;
        } catch (e) {}
      })(),
      Oe = function(e, t, r) {
        '__proto__' == t && Me
          ? Me(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      },
      Ae = function(e, t, r) {
        ((void 0 === r || h(e[t], r)) && (void 0 !== r || t in e)) ||
          Oe(e, t, r);
      },
      _e = (function(e) {
        return function(t, r, n) {
          for (var i = -1, o = Object(t), a = n(t), l = a.length; l--; ) {
            var s = a[e ? l : ++i];
            if (!1 === r(o[s], s, o)) break;
          }
          return t;
        };
      })(),
      Ne = r(8),
      Ee = L.a.Uint8Array,
      De = function(e) {
        var t = new e.constructor(e.byteLength);
        return new Ee(t).set(new Ee(e)), t;
      },
      We = function(e, t) {
        var r = t ? De(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      },
      Pe = function(e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      },
      He = Object.create,
      Fe = (function() {
        function e() {}
        return function(t) {
          if (!z(t)) return {};
          if (He) return He(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })(),
      ze = (function(e, t) {
        return function(r) {
          return e(t(r));
        };
      })(Object.getPrototypeOf, Object),
      je = Object.prototype,
      Ie = function(e) {
        var t = e && e.constructor;
        return e === (('function' == typeof t && t.prototype) || je);
      },
      Re = function(e) {
        return 'function' != typeof e.constructor || Ie(e) ? {} : Fe(ze(e));
      },
      Be = function(e) {
        return null != e && 'object' == typeof e;
      },
      Ve = '[object Arguments]',
      Ue = function(e) {
        return Be(e) && F(e) == Ve;
      },
      Ge = Object.prototype,
      qe = Ge.hasOwnProperty,
      Ke = Ge.propertyIsEnumerable,
      $e = Ue(
        (function() {
          return arguments;
        })()
      )
        ? Ue
        : function(e) {
            return Be(e) && qe.call(e, 'callee') && !Ke.call(e, 'callee');
          },
      Xe = Array.isArray,
      Ye = 9007199254740991,
      Ze = function(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= Ye;
      },
      Qe = function(e) {
        return null != e && Ze(e.length) && !V(e);
      },
      Je = function(e) {
        return Be(e) && Qe(e);
      },
      et = r(4),
      tt = '[object Object]',
      rt = Function.prototype,
      nt = Object.prototype,
      it = rt.toString,
      ot = nt.hasOwnProperty,
      at = it.call(Object),
      lt = function(e) {
        if (!Be(e) || F(e) != tt) return !1;
        var t = ze(e);
        if (null === t) return !0;
        var r = ot.call(t, 'constructor') && t.constructor;
        return 'function' == typeof r && r instanceof r && it.call(r) == at;
      },
      st = {};
    (st['[object Float32Array]'] = st['[object Float64Array]'] = st[
      '[object Int8Array]'
    ] = st['[object Int16Array]'] = st['[object Int32Array]'] = st[
      '[object Uint8Array]'
    ] = st['[object Uint8ClampedArray]'] = st['[object Uint16Array]'] = st[
      '[object Uint32Array]'
    ] = !0),
      (st['[object Arguments]'] = st['[object Array]'] = st[
        '[object ArrayBuffer]'
      ] = st['[object Boolean]'] = st['[object DataView]'] = st[
        '[object Date]'
      ] = st['[object Error]'] = st['[object Function]'] = st[
        '[object Map]'
      ] = st['[object Number]'] = st['[object Object]'] = st[
        '[object RegExp]'
      ] = st['[object Set]'] = st['[object String]'] = st[
        '[object WeakMap]'
      ] = !1);
    var ut = function(e) {
        return Be(e) && Ze(e.length) && !!st[F(e)];
      },
      ct = function(e) {
        return function(t) {
          return e(t);
        };
      },
      ft = r(10),
      dt = ft.a && ft.a.isTypedArray,
      ht = dt ? ct(dt) : ut,
      pt = Object.prototype.hasOwnProperty,
      gt = function(e, t, r) {
        var n = e[t];
        (pt.call(e, t) && h(n, r) && (void 0 !== r || t in e)) || Oe(e, t, r);
      },
      vt = function(e, t, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, a = t.length; ++o < a; ) {
          var l = t[o],
            s = n ? n(r[l], e[l], l, r, e) : void 0;
          void 0 === s && (s = e[l]), i ? Oe(r, l, s) : gt(r, l, s);
        }
        return r;
      },
      mt = function(e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      },
      yt = 9007199254740991,
      bt = /^(?:0|[1-9]\d*)$/,
      wt = function(e, t) {
        return (
          !!(t = null == t ? yt : t) &&
          ('number' == typeof e || bt.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      },
      xt = Object.prototype.hasOwnProperty,
      Ct = function(e, t) {
        var r = Xe(e),
          n = !r && $e(e),
          i = !r && !n && Object(et.a)(e),
          o = !r && !n && !i && ht(e),
          a = r || n || i || o,
          l = a ? mt(e.length, String) : [],
          s = l.length;
        for (var u in e)
          (!t && !xt.call(e, u)) ||
            (a &&
              ('length' == u ||
                (i && ('offset' == u || 'parent' == u)) ||
                (o &&
                  ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                wt(u, s))) ||
            l.push(u);
        return l;
      },
      St = function(e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      },
      kt = Object.prototype.hasOwnProperty,
      Lt = function(e) {
        if (!z(e)) return St(e);
        var t = Ie(e),
          r = [];
        for (var n in e)
          ('constructor' != n || (!t && kt.call(e, n))) && r.push(n);
        return r;
      },
      Tt = function(e) {
        return Qe(e) ? Ct(e, !0) : Lt(e);
      },
      Mt = function(e) {
        return vt(e, Tt(e));
      },
      Ot = function(e, t, r, n, i, o, a) {
        var l = e[r],
          s = t[r],
          u = a.get(s);
        if (u) Ae(e, r, u);
        else {
          var c = o ? o(l, s, r + '', e, t, a) : void 0,
            f = void 0 === c;
          if (f) {
            var d = Xe(s),
              h = !d && Object(et.a)(s),
              p = !d && !h && ht(s);
            (c = s),
              d || h || p
                ? Xe(l)
                  ? (c = l)
                  : Je(l)
                    ? (c = Pe(l))
                    : h
                      ? ((f = !1), (c = Object(Ne.a)(s, !0)))
                      : p ? ((f = !1), (c = We(s, !0))) : (c = [])
                : lt(s) || $e(s)
                  ? ((c = l),
                    $e(l) ? (c = Mt(l)) : (!z(l) || (n && V(l))) && (c = Re(s)))
                  : (f = !1);
          }
          f && (a.set(s, c), i(c, s, n, o, a), a.delete(s)), Ae(e, r, c);
        }
      },
      At = l,
      _t = function(e) {
        return e;
      },
      Nt = function(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      },
      Et = Math.max,
      Dt = function(e, t, r) {
        return (
          (t = Et(void 0 === t ? e.length - 1 : t, 0)),
          function() {
            for (
              var n = arguments, i = -1, o = Et(n.length - t, 0), a = Array(o);
              ++i < o;

            )
              a[i] = n[t + i];
            i = -1;
            for (var l = Array(t + 1); ++i < t; ) l[i] = n[i];
            return (l[t] = r(a)), Nt(e, this, l);
          }
        );
      },
      Wt = function(e) {
        return function() {
          return e;
        };
      },
      Pt = Me
        ? function(e, t) {
            return Me(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: Wt(t),
              writable: !0,
            });
          }
        : _t,
      Ht = 800,
      Ft = 16,
      zt = Date.now,
      jt = (function(e) {
        var t = 0,
          r = 0;
        return function() {
          var n = zt(),
            i = Ft - (n - r);
          if (((r = n), i > 0)) {
            if (++t >= Ht) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      })(Pt),
      It = function(e, t) {
        return jt(Dt(e, t, _t), e + '');
      },
      Rt = function(e, t, r) {
        if (!z(r)) return !1;
        var n = typeof t;
        return (
          !!('number' == n
            ? Qe(r) && wt(t, r.length)
            : 'string' == n && t in r) && h(r[t], e)
        );
      },
      Bt = (function(e) {
        return It(function(t, r) {
          var n = -1,
            i = r.length,
            o = i > 1 ? r[i - 1] : void 0,
            a = i > 2 ? r[2] : void 0;
          for (
            o = e.length > 3 && 'function' == typeof o ? (i--, o) : void 0,
              a && Rt(r[0], r[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
              t = Object(t);
            ++n < i;

          ) {
            var l = r[n];
            l && e(t, l, n, o);
          }
          return t;
        });
      })(function(e, t, r) {
        At(e, t, r);
      }),
      Vt = 0,
      Ut = function() {
        return 'domain-gfx-id-' + ++Vt;
      },
      Gt = window && window.Symbol ? Symbol('lib namespace') : '_' + Ut(),
      qt = function(e) {
        return {
          set: function(t, r) {
            e.setAttribute('data-' + t, r);
          },
          get: function(t) {
            return e.getAttribute('data-' + t);
          },
        };
      },
      Kt = function(e) {
        var t = e.className,
          r = e.acceptedMargin,
          n = document.createElement('style');
        return (
          (n.textContent =
            '\n.' +
            t +
            ' {\n  padding-bottom: ' +
            r +
            'px;\n  font-family: Sans-Serif;\n}\n.' +
            t +
            '.hidden {\n  pointer-events: none;\n  display: block;\n  opacity: 0;\n  transform: translate(-999px, -999px);\n  transform: translate(200vw, 200vh);\n}\n.' +
            t +
            '___container {\n  border-style: solid;\n  border-color: #dedede;\n  border-width: 1px 2px 2px 1px;\n  border-radius: 0.2em;\n  background-color: #fff;\n  margin-bottom: ' +
            r +
            'px;\n}\n.' +
            t +
            ' thead {\n  background-color: #dedede;\n}\n.' +
            t +
            ' td:first-of-type {\n  font-weight: bold;\n}\n.' +
            t +
            ' th {\n  text-align: left;\n}\n.' +
            t +
            ' .coordinates {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.' +
            t +
            ' .domain {\n  margin: 0 0.5em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 0.5em;\n  background-color: black;\n}\n.' +
            t +
            ' .alignment {\n  display: inline-block;\n  margin-left: 0;\n  height: 1em;\n  border-radius: 0.2em;\n  background-color: grey;\n}'),
          n
        );
      },
      $t =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Xt = function(e) {
        var t = $t({}, e, e.metadata || {}),
          r = t.identifier || t.type || t.accession || '',
          n = t.accession || '',
          i = t.description,
          o = t.database || t.source,
          a = t.start,
          l = t.targetStart || t.tStart || t.tstart,
          s = t.targetEnd || t.tEnd || t.tend,
          u = t.queryStart || t.qStart || t.qstart,
          c = t.queryEnd || t.qEnd || t.qend,
          f = void 0;
        if (t.end) {
          var d = t.end - t.start,
            h = t.aliStart || t.start,
            p = t.aliEnd || t.end,
            g = 0;
          h - t.start > 0 && (g = (h - t.start) / d * 100),
            (f =
              '\n      ' +
              t.start +
              '<span style="width: 100px;" class="domain">\n        <span class="alignment" style="\n          width: ' +
              100 * (p - h) / d +
              'px;\n          margin-left: ' +
              g +
              'px;\n          background-color: ' +
              t.color +
              ';\n        "></span>\n      </span>' +
              t.end +
              '\n    ');
        }
        return (
          '\n    <table>\n      <thead>\n        <tr>\n          <th colspan="2">\n            ' +
          (r || (l && 'Match coordinates')) +
          '\n            ' +
          (n && n !== r ? ' (' + n + ')' : '') +
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
      Yt = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      Zt = 5,
      Qt = 'domain_gfx__tooltip',
      Jt = function e(t) {
        if (!t) throw new Error('No entity found in the whole tree');
        return qt(t).get('entity')
          ? t.getBoundingClientRect()
          : e(t.parentElement);
      },
      er = function(e, t) {
        var r = e.left + e.width / 2 - t.width / 2;
        r = r < 0 ? 0 : Math.min(r, window.innerWidth - t.width);
        var n = e.top - t.height;
        return { x: Math.round(r), y: Math.round(n) };
      },
      tr = function(e) {
        var t = document.createElement('div');
        return t.classList.add(Qt + '___container'), (t.innerHTML = e), t;
      },
      rr = (function() {
        function e() {
          var t = this;
          if (
            ((function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
            (this._promoteTarget = function(e) {
              return function(r) {
                r.target !== e ||
                  t._promoted ||
                  (t._container.style.willChange = 'transform');
              };
            }),
            (this._demoteTarget = function(e) {
              return function(r) {
                var n = r.target,
                  i = r.relatedTarget;
                n === e &&
                  t._promoted &&
                  ((i && i === t._container) ||
                    (t._container.style.willChange = ''));
              };
            }),
            (this._replaceTooltipContent = function(e) {
              (t._current = tr(Xt(e))),
                t._container.replaceChild(
                  t._current,
                  t._container.firstElementChild
                );
            }),
            (this._hide = function() {
              t._container.classList.add('hidden'), (t._visible = !1);
            }),
            (this._display = function(e) {
              var r = e.x,
                n = e.y;
              (t._container.style.transform =
                'translate(' + r + 'px, ' + (n + Zt) + 'px)'),
                t._container.classList.remove('hidden');
            }),
            (this._handleMouseOver = function(e) {
              var r = e.target[Gt];
              t._currentData !== r &&
                (t._currentData || r) &&
                ((t._currentData = r),
                t._replaceTooltipContent(r),
                t._display(
                  er(Jt(e.target), t._container.getBoundingClientRect())
                ));
            }),
            (this._handleMouseOut = function(e) {
              if (e.target[Gt] && e.relatedTarget !== t._container) {
                var r = e.relatedTarget[Gt];
                r !== t._currentData &&
                  ((t._currentData = r || null),
                  r
                    ? (t._replaceTooltipContent(r),
                      t._display(
                        er(
                          Jt(e.relatedTarget),
                          t._container.getBoundingClientRect()
                        )
                      ))
                    : t._hide());
              }
            }),
            window)
          ) {
            var r = document.createElement('div');
            r.classList.add(Qt),
              r.classList.add('hidden'),
              (r.style.position = 'fixed'),
              (r.style.left = '0'),
              (r.style.top = '0');
            var n = tr('<p>placeholder</p>');
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
              Kt({ className: Qt, acceptedMargin: Zt })
            ),
              r.addEventListener('mouseleave', function(e) {
                var r = e.relatedTarget[Gt];
                r !== t._currentData &&
                  ((t._currentData = r || null),
                  r
                    ? (t._replaceTooltipContent(r),
                      t._display(
                        er(
                          Jt(e.relatedTarget),
                          t._container.getBoundingClientRect()
                        )
                      ))
                    : t._hide());
              });
          }
        }
        return (
          Yt(e, [
            {
              key: 'attachToCanvas',
              value: function(e) {
                var t = this,
                  r = this._promoteTarget(e),
                  n = this._demoteTarget(e);
                return (
                  e.addEventListener('mouseenter', r),
                  e.addEventListener('mouseleave', n),
                  e.addEventListener('mouseover', this._handleMouseOver),
                  e.addEventListener('mousemove', this._handleMouseOver),
                  e.addEventListener('mouseout', this._handleMouseOut),
                  function() {
                    e.removeEventListener('mouseenter', r),
                      e.removeEventListener('mouseleave', n),
                      e.removeEventListener('mouseover', t._handleMouseOver),
                      e.removeEventListener('mousemove', t._handleMouseOver),
                      e.removeEventListener('mouseout', t._handleMouseOut);
                  }
                );
              },
            },
          ]),
          e
        );
      })(),
      nr = void 0,
      ir = function() {
        return nr || (nr = new rr()), nr;
      },
      or = function(e) {
        return function(t) {
          for (
            var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          var o = document.createElementNS('http://www.w3.org/2000/svg', e),
            a = Object.keys(t || {}),
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
                h = t[d];
              (h || 0 === h) && o.setAttribute(d, String(h));
            }
          } catch (e) {
            (s = !0), (u = e);
          } finally {
            try {
              !l && f.return && f.return();
            } finally {
              if (s) throw u;
            }
          }
          var p = !0,
            g = !1,
            v = void 0;
          try {
            for (
              var m, y = n[Symbol.iterator]();
              !(p = (m = y.next()).done);
              p = !0
            ) {
              var b = m.value;
              b &&
                o.appendChild(
                  b instanceof Node ? b : document.createTextNode(b)
                );
            }
          } catch (e) {
            (g = !0), (v = e);
          } finally {
            try {
              !p && y.return && y.return();
            } finally {
              if (g) throw v;
            }
          }
          return o;
        };
      },
      ar = or('svg'),
      lr = or('circle'),
      sr = or('defs'),
      ur = or('linearGradient'),
      cr = or('g'),
      fr = or('mask'),
      dr = or('path'),
      hr = or('rect'),
      pr = or('stop'),
      gr = or('text'),
      vr = or('filter'),
      mr = or('feGaussianBlur'),
      yr = or('feSpecularLighting'),
      br = or('fePointLight'),
      wr = or('feComposite'),
      xr = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      Cr = (function() {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'm0,0';
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._data = t);
        }
        return (
          xr(e, [
            {
              key: 'add',
              value: function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : '';
                return (this._data += e), this;
              },
            },
            {
              key: 'finish',
              value: function(e) {
                return e && (this._data += 'z'), this._data;
              },
            },
            {
              key: 'close',
              value: function() {
                return this.finish(!0);
              },
            },
          ]),
          e
        );
      })(),
      Sr = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === e ? 'v' + t : 0 === t ? 'h' + e : 'l' + e + ',' + t;
      },
      kr = function(e) {
        return Sr(0, e);
      },
      Lr = function(e, t) {
        var r = e.start,
          n = e.end,
          i = e.v_align,
          o = e.vAlign,
          a = e.level,
          l = void 0 === a ? 0 : a,
          s = e.lineColor,
          u = e.headColor,
          c = e.color,
          f = e.headStyle,
          d = /top/i.test(i || o),
          h = new Cr().add(kr((1.5 * l + 8) * (d ? -1 : 1)));
        return (
          n &&
            (h = h
              .add(
                (function(e) {
                  return Sr(e, 0);
                })((n - r) * t)
              )
              .add(kr((1.5 * l + 8) * (d ? 1 : -1)))),
          (h = h.finish()),
          cr(
            null,
            dr({ d: h, fill: 'none', stroke: s || (n && c) || 'black' }),
            !n &&
              (function(e) {
                var t = e.style,
                  r = e.color,
                  n = e.isOnTop;
                switch (t) {
                  case 'diamond':
                    return (function(e, t) {
                      var r = new Cr('m0,' + (t ? -10 : 6))
                        .add(Sr(2, 2))
                        .add(Sr(-2, 2))
                        .add(Sr(-2, -2))
                        .close();
                      return dr({ d: r, fill: e });
                    })(r, n);
                  case 'circle':
                    return (function(e, t) {
                      return lr({ cx: 0, cy: t ? -8 : 8, r: 1.5, fill: e });
                    })(r, n);
                  case 'arrow':
                    return (function(e, t) {
                      var r = void 0;
                      return (
                        (r = t
                          ? new Cr('m-2,-6')
                              .add(Sr(2, -2))
                              .add(Sr(2, 2))
                              .finish()
                          : new Cr('m-2,6')
                              .add(Sr(2, 2))
                              .add(Sr(2, -2))
                              .finish()),
                        dr({ stroke: e, fill: 'none', d: r })
                      );
                    })(r, n);
                  case 'pointer':
                    return (function(e, t) {
                      var r = void 0;
                      return (
                        (r = t
                          ? new Cr('m-2,-4.5')
                              .add(Sr(2, 2))
                              .add(Sr(2, -2))
                              .finish()
                          : new Cr('m-2,4.5')
                              .add(Sr(2, -2))
                              .add(Sr(2, 2))
                              .finish()),
                        dr({ stroke: e, fill: 'none', d: r })
                      );
                    })(r, n);
                  case 'line':
                    return (function(e, t) {
                      return dr({
                        stroke: e,
                        d: new Cr('m0,' + (8 * (t ? -1 : 1) - 1.5))
                          .add(kr(3))
                          .finish(),
                      });
                    })(r, n);
                  case 'square':
                  default:
                    return (function(e, t) {
                      return hr({
                        x: -1.5,
                        y: t ? -9.5 : 6.5,
                        width: 3,
                        height: 3,
                        fill: e,
                      });
                    })(r, n);
                }
              })({ color: u || (!n && c) || 'black', style: f, isOnTop: d })
          )
        );
      },
      Tr = function(e) {
        var t = e.position,
          r = t.x,
          n = t.y,
          i = e.length,
          o = e.height,
          a = e.color;
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
      Mr = function(e) {
        var t = e.position,
          r = t.x,
          n = t.y,
          i = e.length,
          o = e.height,
          a = e.color;
        return hr({ x: r, y: n, width: i, height: o, fill: a || 'black' });
      },
      Or = function(e, t) {
        var r = Ut();
        return {
          gradientId: r,
          gradientElement: ur.apply(
            void 0,
            [{ id: r, x1: 0, x2: 0, y1: 0, y2: 1 }].concat(
              (function(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                  return r;
                }
                return Array.from(e);
              })(
                (t
                  ? function(e) {
                      var t = e;
                      1 === t.length && (t[1] = t[0]);
                      var r = 100 / (t.length - 1);
                      return t.map(function(e, t) {
                        return pr({ offset: t * r + '%', 'stop-color': e });
                      });
                    }
                  : function(e) {
                      for (
                        var t = [], r = e.length, n = 100 / r, i = 0;
                        i < r;
                        i++
                      )
                        t.push(pr({ offset: i * n + '%', 'stop-color': e[i] })),
                          t.push(
                            pr({ offset: i * n + n + '%', 'stop-color': e[i] })
                          );
                      return t;
                    })(e)
              )
            )
          ),
        };
      },
      Ar = 'Expected a function';
    s.Cache = Se;
    var _r = s,
      Nr = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, l = e[Symbol.iterator]();
                  !(n = (a = l.next()).done) &&
                  (r.push(a.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  !n && l.return && l.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(e, t);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Er = void 0;
    window &&
      document &&
      window.getComputedStyle &&
      ((Er = document.createElement('p')).style.opacity = '0');
    var Dr = /rgba?\((\d+), (\d+), (\d+)/,
      Wr = _r(function(e) {
        if (!Er) return 'black';
        var t = (function(e) {
          if (!Er || !document.body) return { r: 255, g: 255, b: 255 };
          (Er.style.background = e), document.body.appendChild(Er);
          var t = window.getComputedStyle(Er).backgroundColor.match(Dr),
            r = Nr(t, 4),
            n = r[1],
            i = r[2],
            o = r[3];
          return (
            document.body && document.body.removeChild(Er),
            { r: +n, g: +i, b: +o }
          );
        })(e);
        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 >= 128
          ? 'black'
          : 'white';
      }),
      Pr = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === e ? 'v' + t : 0 === t ? 'h' + e : 'l' + e + ',' + t;
      },
      Hr = function(e) {
        return Pr(e, 0);
      },
      Fr = function(e) {
        return Pr(0, e);
      },
      zr = function(e, t, r, n, i, o, a) {
        return (
          'A' + e + ',' + t + ',' + r + ',' + n + ',' + i + ',' + o + ',' + a
        );
      },
      jr = function(e, t, r, n) {
        var i = e.start,
          o = e.aliStart,
          a = e.aliEnd,
          l = e.end,
          s = e.startStyle,
          u = e.endStyle,
          c = e.color,
          f = e.text,
          d = e.textColor,
          h = e.gradient,
          p = (function(e) {
            var t = e.start,
              r = e.aliStart,
              n = e.aliEnd,
              i = e.end,
              o = e.residueWidth,
              a = Ut();
            return {
              maskId: a,
              maskElement: fr(
                {
                  id: a,
                  x: 0,
                  y: 0,
                  width: (i - t) * o,
                  height: 10,
                  fill: '#fff',
                },
                hr({
                  x: 0,
                  y: 0,
                  width: (r - t) * o,
                  height: 10,
                  opacity: 0.6,
                }),
                hr({
                  x: (r - t) * o,
                  y: 0,
                  width: (n - r) * o,
                  height: 10,
                  opacity: 1,
                }),
                hr({
                  x: (n - t) * o,
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
            residueWidth: t,
          }),
          g = p.maskId;
        n(p.maskElement);
        var v = c,
          m = {};
        Array.isArray(v) &&
          (n((m = Or(v, h)).gradientElement),
          (v = 'url(#' + m.gradientId + ')'));
        var y = gr(
          {
            x: (l - i) * t / 2,
            y: 8,
            'text-anchor': 'middle',
            'font-size': 7.5,
            'font-family': 'Sans-Serif',
            fill: d || Wr(Array.isArray(c) ? c[0] : c),
            opacity: 0,
          },
          f || ''
        );
        return (
          qt(y).set('maxwidth', (l - i) * t),
          cr(
            null,
            (function(e) {
              var t = e.start,
                r = e.end,
                n = e.startStyle,
                i = e.endStyle,
                o = e.fill,
                a = e.residueWidth,
                l = e.mask,
                s = e.filter,
                u = (r - t) * a - 10,
                c = new Cr('m5,0')
                  .add(Hr(u))
                  .add(
                    (function(e, t) {
                      switch (e.toLowerCase()) {
                        case 'jagged':
                          return (
                            Hr(5) +
                            Pr(-2.5, 2.5) +
                            Pr(2.5, 2.5) +
                            Pr(-2.5, 2.5) +
                            Pr(2.5, 2.5) +
                            Hr(-5)
                          );
                        case 'arrow':
                          return Pr(5, 5) + Pr(-5, 5);
                        case 'curved':
                          return zr(5, 5, 0, 0, 1, t + 5, 10);
                        case 'straight':
                        default:
                          return Hr(5) + Fr(10) + Hr(-5);
                      }
                    })(i || '', u)
                  )
                  .add(Hr(-u))
                  .add(
                    (function(e) {
                      switch (e.toLowerCase()) {
                        case 'jagged':
                          return (
                            Hr(-5) +
                            Pr(2.5, -2.5) +
                            Pr(-2.5, -2.5) +
                            Pr(2.5, -2.5) +
                            Pr(-2.5, -2.5) +
                            Hr(5)
                          );
                        case 'arrow':
                          return Pr(-5, -5) + Pr(5, -5);
                        case 'curved':
                          return zr(5, 5, 0, 0, 1, 5, 0);
                        case 'straight':
                        default:
                          return Hr(-5) + Fr(-10) + Hr(5);
                      }
                    })(n || '')
                  )
                  .close();
              return dr({ d: c, fill: o, mask: l, filter: s });
            })({
              start: i,
              end: l,
              startStyle: s,
              endStyle: u,
              residueWidth: t,
              fill: v,
              mask: 'url(#' + g + ')',
              filter: r && 'url(#' + r + ')',
            }),
            f ? y : null
          )
        );
      },
      Ir =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      Rr = function(e, t) {
        var r = e.position,
          n = r.x,
          i = r.y,
          o = e.length,
          a = e.height,
          l = e.color,
          s = e.gradient,
          u = { x: n, y: i, width: o, height: a, opacity: 0.5 };
        if (!Array.isArray(l)) return hr(Ir({}, u, { fill: l || 'gray' }));
        var c = Or(l, s),
          f = c.gradientId;
        return t(c.gradientElement), hr(Ir({}, u, { fill: 'url(#' + f + ')' }));
      },
      Br = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, l = e[Symbol.iterator]();
                  !(n = (a = l.next()).done) &&
                  (r.push(a.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  !n && l.return && l.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(e, t);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Vr = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      Ur = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (window && (t.tooltip || t.metadata || r)) {
          var n = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var a, l = e.querySelectorAll(':not(g)')[Symbol.iterator]();
              !(n = (a = l.next()).done);
              n = !0
            ) {
              a.value[Gt] = t;
            }
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (i) throw o;
            }
          }
        }
      },
      Gr = (function() {
        function e(t) {
          var r = this,
            n = t.width,
            i = t.height,
            o = t.spotlight,
            a = void 0 === o || o;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._addToDefs = function(e) {
              return r._defs.appendChild(e);
            }),
            (this.drawMarkup = function(e, t, n) {
              if (e.end && !Number.isFinite(e.level)) {
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
                    e.start < c.end && i.delete(c.level);
                  }
                } catch (e) {
                  (a = !0), (l = e);
                } finally {
                  try {
                    !o && u.return && u.return();
                  } finally {
                    if (a) throw l;
                  }
                }
                var f = Br(i, 1)[0];
                e.level = f || 0;
              }
              var d = cr(
                { transform: 'translate(' + e.start * t + ', 10)' },
                Lr(e, t)
              );
              qt(d).set('entity', 'markup'), Ur(d, e), r._canvas.appendChild(d);
            }),
            (this.drawSequence = function(e) {
              var t = cr(
                { transform: 'translate(0 10)' },
                Tr({
                  position: { x: 0, y: -2.5 },
                  length: e,
                  height: 5,
                  color: '#d8d8d8',
                })
              );
              qt(t).set('entity', 'sequence'), r._canvas.appendChild(t);
            }),
            (this.drawHit = function(e, t) {
              var n = cr(
                { transform: 'translate(' + e.tstart * t + ', 16)' },
                Mr({
                  position: { x: 0, y: 0 },
                  length: (e.tend - e.tstart) * t,
                  height: 2,
                  color: e.color,
                })
              );
              qt(n).set('entity', 'hit'),
                Ur(n, e, !0),
                r._canvas.appendChild(n);
            }),
            (this.drawRegion = function(e, t) {
              var n = cr(
                { transform: 'translate(' + e.start * t + ', 5)' },
                jr(e, t, r._spotlight, r._addToDefs)
              );
              qt(n).set('entity', 'region'), Ur(n, e), r._canvas.appendChild(n);
              var i = n.querySelector('[data-maxwidth]');
              i &&
                (i.getBBox().width <= +(qt(i).get('maxwidth') - 0)
                  ? i.setAttribute('opacity', 1)
                  : i.parentElement && i.parentElement.removeChild(i));
            }),
            (this.drawMotif = function(e, t) {
              var n = cr(
                { transform: 'translate(' + e.start * t + ', 6)' },
                Rr(
                  {
                    position: { x: 0, y: 0 },
                    length: (e.end - e.start) * t,
                    height: 8,
                    color: e.color,
                    gradient: e.gradient,
                  },
                  r._addToDefs
                )
              );
              (n.dataset.entity = 'motif'), Ur(n, e), r._canvas.appendChild(n);
            }),
            (this._spotlight = a && Ut()),
            (this._defs = sr(
              null,
              this._spotlight &&
                vr(
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
                  wr({ in: 'SourceGraphic', in2: 'light', operator: 'out' })
                )
            )),
            (this._canvas = ar(
              { width: n, height: i, viewBox: '0 0 ' + n + ' ' + i },
              this._defs
            )),
            (this._canvas.style.width = 2 * n + 'px'),
            (this._canvas.style.height = 2 * i + 'px');
        }
        return (
          Vr(e, [
            {
              key: 'canvas',
              get: function() {
                return this._canvas;
              },
            },
          ]),
          e
        );
      })(),
      qr = function() {
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
      Kr =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      $r = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, l = e[Symbol.iterator]();
                  !(n = (a = l.next()).done) &&
                  (r.push(a.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  !n && l.return && l.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(e, t);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Xr = new Set([
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
      Yr = /(^.*colo)u(r.*$)/i,
      Zr = /^f(alse)?$/i,
      Qr = function e(t) {
        var r = {},
          n = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, l = Object.entries(t)[Symbol.iterator]();
            !(n = (a = l.next()).done);
            n = !0
          ) {
            var s = a.value,
              u = $r(s, 2),
              c = u[0],
              f = u[1],
              d = c,
              h = f;
            if (Xr.has(d) && ((h = +h), isNaN(h)))
              throw new Error(
                'expected key ' + c + ' to be a number, not ' + String(f) + ')'
              );
            Yr.test(d) && (d = d.replace(Yr, '$1$2')),
              'display' === d && (h = 'string' == typeof h ? !Zr.test(h) : !!h),
              h &&
                (Array.isArray(h)
                  ? (h = h.map(function(t) {
                      return t &&
                        'object' === (void 0 === t ? 'undefined' : Kr(t))
                        ? e(t)
                        : t;
                    }))
                  : 'object' === (void 0 === h ? 'undefined' : Kr(h)) &&
                    (h = e(h))),
              (r[d] = h);
          }
        } catch (e) {
          (i = !0), (o = e);
        } finally {
          try {
            !n && l.return && l.return();
          } finally {
            if (i) throw o;
          }
        }
        return r;
      },
      Jr = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      en = function(e) {
        var t = e.hidden,
          r = e.display;
        return t || !(void 0 === r || r);
      },
      tn = (function() {
        function e() {
          var t = this,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = r.data,
            i = void 0 === n ? {} : n,
            o = r.parent,
            a = r.params,
            l = void 0 === a ? {} : a;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._draw = function() {
              var e = (t._data.markups || []).sort(function(e, t) {
                  return e.start - t.start;
                }),
                r = [],
                n = !1,
                i = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var l, s = e[Symbol.iterator]();
                  !(i = (l = s.next()).done);
                  i = !0
                ) {
                  var u = l.value;
                  en(u) ||
                    (t._renderer.drawMarkup(
                      u,
                      t._params.image.width.residue,
                      r
                    ),
                    (n |= !(!u.tooltip && !u.metadata)),
                    u.end && r.push(u));
                }
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  !i && s.return && s.return();
                } finally {
                  if (o) throw a;
                }
              }
              t._renderer.drawSequence(
                t._data.length * t._params.image.width.residue
              );
              var c = !0,
                f = !1,
                d = void 0;
              try {
                for (
                  var h, p = (t._data.hits || [])[Symbol.iterator]();
                  !(c = (h = p.next()).done);
                  c = !0
                ) {
                  var g = h.value;
                  en(g) ||
                    (t._renderer.drawHit(g, t._params.image.width.residue),
                    (n = !0));
                }
              } catch (e) {
                (f = !0), (d = e);
              } finally {
                try {
                  !c && p.return && p.return();
                } finally {
                  if (f) throw d;
                }
              }
              var v = !0,
                m = !1,
                y = void 0;
              try {
                for (
                  var b, w = (t._data.regions || [])[Symbol.iterator]();
                  !(v = (b = w.next()).done);
                  v = !0
                ) {
                  var x = b.value;
                  en(x) ||
                    (t._renderer.drawRegion(x, t._params.image.width.residue),
                    (n |= !(!x.tooltip && !x.metadata)));
                }
              } catch (e) {
                (m = !0), (y = e);
              } finally {
                try {
                  !v && w.return && w.return();
                } finally {
                  if (m) throw y;
                }
              }
              var C = !0,
                S = !1,
                k = void 0;
              try {
                for (
                  var L, T = (t._data.motifs || [])[Symbol.iterator]();
                  !(C = (L = T.next()).done);
                  C = !0
                ) {
                  var M = L.value;
                  en(M) ||
                    (t._renderer.drawMotif(M, t._params.image.width.residue),
                    (n |= !(!M.tooltip && !M.metadata)));
                }
              } catch (e) {
                (S = !0), (k = e);
              } finally {
                try {
                  !C && T.return && T.return();
                } finally {
                  if (S) throw k;
                }
              }
              n && (t._detach = ir().attachToCanvas(t._renderer.canvas));
            }),
            (this._createCanvas = function() {
              return (
                (t._renderer = new Gr({
                  width: t._computeWidth(t._data, t._params),
                  height: t._computeHeight(),
                })),
                t._renderer.canvas
              );
            }),
            (this.delete = function() {
              t._detach && (t._detach(), (t._detach = null)),
                t._parent.removeChild(t._canvas),
                (t._canvas = t._parent = null);
            }),
            (this._data = Qr(i)),
            (this._parent = o),
            (this._params = Bt({}, qr(), l)),
            (this._canvas = this._createCanvas()),
            this._parent.appendChild(this._canvas),
            this._draw();
        }
        return (
          Jr(e, [
            {
              key: '_computeWidth',
              value: function(e, t) {
                var r = e.length,
                  n = void 0 === r ? 0 : r,
                  i = t.image,
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
              set: function(e) {
                this._data = Qr(e);
                var t = this._canvas;
                return (
                  (this._canvas = this._createCanvas()),
                  this._parent.replaceChild(this._canvas, t),
                  this._draw(),
                  this._data
                );
              },
            },
          ]),
          e
        );
      })(),
      rn = tn;
    try {
      document.dispatchEvent(new CustomEvent('domainGfxReady', { detail: tn }));
    } catch (e) {}
    var nn = function() {
        return L.a.Date.now();
      },
      on = '[object Symbol]',
      an = function(e) {
        return 'symbol' == typeof e || (Be(e) && F(e) == on);
      },
      ln = NaN,
      sn = /^\s+|\s+$/g,
      un = /^[-+]0x[0-9a-f]+$/i,
      cn = /^0b[01]+$/i,
      fn = /^0o[0-7]+$/i,
      dn = parseInt,
      hn = function(e) {
        if ('number' == typeof e) return e;
        if (an(e)) return ln;
        if (z(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = z(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(sn, '');
        var r = cn.test(e);
        return r || fn.test(e)
          ? dn(e.slice(2), r ? 2 : 8)
          : un.test(e) ? ln : +e;
      },
      pn = 'Expected a function',
      gn = Math.max,
      vn = Math.min,
      mn = u,
      yn = r(11),
      bn = r.n(yn),
      wn = document.querySelector('.data textarea'),
      xn = document.querySelector('.visu'),
      Cn = document.querySelector('.invalid'),
      Sn = void 0,
      kn = function(e) {
        var t = e.getValue(),
          r = void 0;
        try {
          r = JSON.parse(t);
        } catch (e) {
          return Cn.classList.remove('hidden'), void console.error(e);
        }
        Sn ? (Sn.data = r) : (Sn = new rn({ parent: xn, data: r })),
          Cn.classList.add('hidden');
      };
    wn.value = JSON.stringify(bn.a, null, 2);
    var Ln = f.a.fromTextArea(wn, { lineNumbers: !0 });
    Ln.on('change', mn(kn, 1e3)), kn(Ln);
  },
  function(e, t, r) {
    !(function(e) {
      e(r(2));
    })(function(e) {
      'use strict';
      e.defineMode('javascript', function(t, r) {
        function n(e, t, r) {
          return (ye = e), (be = r), t;
        }
        function i(e, t) {
          var r = e.next();
          if ('"' == r || "'" == r)
            return (
              (t.tokenize = (function(e) {
                return function(t, r) {
                  var o,
                    a = !1;
                  if (Ce && '@' == t.peek() && t.match(Oe))
                    return (r.tokenize = i), n('jsonld-keyword', 'meta');
                  for (; null != (o = t.next()) && (o != e || a); )
                    a = !a && '\\' == o;
                  return a || (r.tokenize = i), n('string', 'string');
                };
              })(r)),
              t.tokenize(e, t)
            );
          if ('.' == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/))
            return n('number', 'number');
          if ('.' == r && e.match('..')) return n('spread', 'meta');
          if (/[\[\]{}\(\),;\:\.]/.test(r)) return n(r);
          if ('=' == r && e.eat('>')) return n('=>', 'operator');
          if ('0' == r && e.eat(/x/i))
            return e.eatWhile(/[\da-f]/i), n('number', 'number');
          if ('0' == r && e.eat(/o/i))
            return e.eatWhile(/[0-7]/i), n('number', 'number');
          if ('0' == r && e.eat(/b/i))
            return e.eatWhile(/[01]/i), n('number', 'number');
          if (/\d/.test(r))
            return (
              e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), n('number', 'number')
            );
          if ('/' == r)
            return e.eat('*')
              ? ((t.tokenize = o), o(e, t))
              : e.eat('/')
                ? (e.skipToEnd(), n('comment', 'comment'))
                : me(e, t, 1)
                  ? ((function(e) {
                      for (var t, r = !1, n = !1; null != (t = e.next()); ) {
                        if (!r) {
                          if ('/' == t && !n) return;
                          '[' == t ? (n = !0) : n && ']' == t && (n = !1);
                        }
                        r = !r && '\\' == t;
                      }
                    })(e),
                    e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                    n('regexp', 'string-2'))
                  : (e.eat('='), n('operator', 'operator', e.current()));
          if ('`' == r) return (t.tokenize = a), a(e, t);
          if ('#' == r) return e.skipToEnd(), n('error', 'error');
          if (Me.test(r))
            return (
              ('>' == r && t.lexical && '>' == t.lexical.type) ||
                (e.eat('=')
                  ? ('!' != r && '=' != r) || e.eat('=')
                  : /[<>*+\-]/.test(r) && (e.eat(r), '>' == r && e.eat(r))),
              n('operator', 'operator', e.current())
            );
          if (Le.test(r)) {
            e.eatWhile(Le);
            var l = e.current();
            if ('.' != t.lastType) {
              if (Te.propertyIsEnumerable(l)) {
                var s = Te[l];
                return n(s.type, s.style, l);
              }
              if ('async' == l && e.match(/^\s*[\(\w]/, !1))
                return n('async', 'keyword', l);
            }
            return n('variable', 'variable', l);
          }
        }
        function o(e, t) {
          for (var r, o = !1; (r = e.next()); ) {
            if ('/' == r && o) {
              t.tokenize = i;
              break;
            }
            o = '*' == r;
          }
          return n('comment', 'comment');
        }
        function a(e, t) {
          for (var r, o = !1; null != (r = e.next()); ) {
            if (!o && ('`' == r || ('$' == r && e.eat('{')))) {
              t.tokenize = i;
              break;
            }
            o = !o && '\\' == r;
          }
          return n('quasi', 'string-2', e.current());
        }
        function l(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null);
          var r = e.string.indexOf('=>', e.start);
          if (!(r < 0)) {
            if (ke) {
              var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                e.string.slice(e.start, r)
              );
              n && (r = n.index);
            }
            for (var i = 0, o = !1, a = r - 1; a >= 0; --a) {
              var l = e.string.charAt(a),
                s = Ae.indexOf(l);
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
              else if (Le.test(l)) o = !0;
              else {
                if (/["'\/]/.test(l)) return;
                if (o && !i) {
                  ++a;
                  break;
                }
              }
            }
            o && !i && (t.fatArrowAt = a);
          }
        }
        function s(e, t, r, n, i, o) {
          (this.indented = e),
            (this.column = t),
            (this.type = r),
            (this.prev = i),
            (this.info = o),
            null != n && (this.align = n);
        }
        function u(e, t) {
          for (n = e.localVars; n; n = n.next) if (n.name == t) return !0;
          for (var r = e.context; r; r = r.prev)
            for (var n = r.vars; n; n = n.next) if (n.name == t) return !0;
        }
        function c() {
          for (var e = arguments.length - 1; e >= 0; e--)
            Ne.cc.push(arguments[e]);
        }
        function f() {
          return c.apply(null, arguments), !0;
        }
        function d(e) {
          function t(t) {
            for (var r = t; r; r = r.next) if (r.name == e) return !0;
            return !1;
          }
          var n = Ne.state;
          if (((Ne.marked = 'def'), n.context)) {
            if (t(n.localVars)) return;
            n.localVars = { name: e, next: n.localVars };
          } else {
            if (t(n.globalVars)) return;
            r.globalVars && (n.globalVars = { name: e, next: n.globalVars });
          }
        }
        function h() {
          (Ne.state.context = {
            prev: Ne.state.context,
            vars: Ne.state.localVars,
          }),
            (Ne.state.localVars = Ee);
        }
        function p() {
          (Ne.state.localVars = Ne.state.context.vars),
            (Ne.state.context = Ne.state.context.prev);
        }
        function g(e, t) {
          var r = function() {
            var r = Ne.state,
              n = r.indented;
            if ('stat' == r.lexical.type) n = r.lexical.indented;
            else
              for (var i = r.lexical; i && ')' == i.type && i.align; i = i.prev)
                n = i.indented;
            r.lexical = new s(n, Ne.stream.column(), e, null, r.lexical, t);
          };
          return (r.lex = !0), r;
        }
        function v() {
          var e = Ne.state;
          e.lexical.prev &&
            (')' == e.lexical.type && (e.indented = e.lexical.indented),
            (e.lexical = e.lexical.prev));
        }
        function m(e) {
          function t(r) {
            return r == e ? f() : ';' == e ? c() : f(t);
          }
          return t;
        }
        function y(e, t) {
          return 'var' == e
            ? f(g('vardef', t.length), G, m(';'), v)
            : 'keyword a' == e
              ? f(g('form'), x, y, v)
              : 'keyword b' == e
                ? f(g('form'), y, v)
                : 'keyword d' == e
                  ? Ne.stream.match(/^\s*$/, !1)
                    ? f()
                    : f(g('stat'), S, m(';'), v)
                  : 'debugger' == e
                    ? f(m(';'))
                    : '{' == e
                      ? f(g('}'), F, v)
                      : ';' == e
                        ? f()
                        : 'if' == e
                          ? ('else' == Ne.state.lexical.info &&
                              Ne.state.cc[Ne.state.cc.length - 1] == v &&
                              Ne.state.cc.pop()(),
                            f(g('form'), x, y, v, Y))
                          : 'function' == e
                            ? f(re)
                            : 'for' == e
                              ? f(g('form'), Z, y, v)
                              : 'variable' == e
                                ? ke && 'type' == t
                                  ? ((Ne.marked = 'keyword'),
                                    f(j, m('operator'), j, m(';')))
                                  : ke && 'declare' == t
                                    ? ((Ne.marked = 'keyword'), f(y))
                                    : f(g('stat'), _)
                                : 'switch' == e
                                  ? f(
                                      g('form'),
                                      x,
                                      m('{'),
                                      g('}', 'switch'),
                                      F,
                                      v,
                                      v
                                    )
                                  : 'case' == e
                                    ? f(b, m(':'))
                                    : 'default' == e
                                      ? f(m(':'))
                                      : 'catch' == e
                                        ? f(
                                            g('form'),
                                            h,
                                            m('('),
                                            ne,
                                            m(')'),
                                            y,
                                            v,
                                            p
                                          )
                                        : 'class' == e
                                          ? f(g('form'), oe, v)
                                          : 'export' == e
                                            ? f(g('stat'), ue, v)
                                            : 'import' == e
                                              ? f(g('stat'), fe, v)
                                              : 'module' == e
                                                ? f(
                                                    g('form'),
                                                    q,
                                                    m('{'),
                                                    g('}'),
                                                    F,
                                                    v,
                                                    v
                                                  )
                                                : 'async' == e
                                                  ? f(y)
                                                  : '@' == t
                                                    ? f(b, y)
                                                    : c(
                                                        g('stat'),
                                                        b,
                                                        m(';'),
                                                        v
                                                      );
        }
        function b(e) {
          return C(e, !1);
        }
        function w(e) {
          return C(e, !0);
        }
        function x(e) {
          return '(' != e ? c() : f(g(')'), b, m(')'), v);
        }
        function C(e, t) {
          if (Ne.state.fatArrowAt == Ne.stream.start) {
            var r = t ? A : O;
            if ('(' == e) return f(h, g(')'), P(ne, ')'), v, m('=>'), r, p);
            if ('variable' == e) return c(h, q, m('=>'), r, p);
          }
          var n = t ? L : k;
          return _e.hasOwnProperty(e)
            ? f(n)
            : 'function' == e
              ? f(re, n)
              : 'class' == e
                ? f(g('form'), ie, v)
                : 'keyword c' == e || 'async' == e
                  ? f(t ? w : b)
                  : '(' == e
                    ? f(g(')'), S, m(')'), v, n)
                    : 'operator' == e || 'spread' == e
                      ? f(t ? w : b)
                      : '[' == e
                        ? f(g(']'), ve, v, n)
                        : '{' == e
                          ? H(E, '}', null, n)
                          : 'quasi' == e
                            ? c(T, n)
                            : 'new' == e
                              ? f(
                                  (function(e) {
                                    return function(t) {
                                      return '.' == t
                                        ? f(
                                            e
                                              ? function(e, t) {
                                                  if ('target' == t)
                                                    return (
                                                      (Ne.marked = 'keyword'),
                                                      f(L)
                                                    );
                                                }
                                              : function(e, t) {
                                                  if ('target' == t)
                                                    return (
                                                      (Ne.marked = 'keyword'),
                                                      f(k)
                                                    );
                                                }
                                          )
                                        : 'variable' == t && ke
                                          ? f(U, e ? L : k)
                                          : c(e ? w : b);
                                    };
                                  })(t)
                                )
                              : f();
        }
        function S(e) {
          return e.match(/[;\}\)\],]/) ? c() : c(b);
        }
        function k(e, t) {
          return ',' == e ? f(b) : L(e, t, !1);
        }
        function L(e, t, r) {
          var n = 0 == r ? k : L,
            i = 0 == r ? b : w;
          return '=>' == e
            ? f(h, r ? A : O, p)
            : 'operator' == e
              ? /\+\+|--/.test(t) || (ke && '!' == t)
                ? f(n)
                : '?' == t ? f(b, m(':'), i) : f(i)
              : 'quasi' == e
                ? c(T, n)
                : ';' != e
                  ? '(' == e
                    ? H(w, ')', 'call', n)
                    : '.' == e
                      ? f(N, n)
                      : '[' == e
                        ? f(g(']'), S, m(']'), v, n)
                        : ke && 'as' == t
                          ? ((Ne.marked = 'keyword'), f(j, n))
                          : 'regexp' == e
                            ? ((Ne.state.lastType = Ne.marked = 'operator'),
                              Ne.stream.backUp(
                                Ne.stream.pos - Ne.stream.start - 1
                              ),
                              f(i))
                            : void 0
                  : void 0;
        }
        function T(e, t) {
          return 'quasi' != e
            ? c()
            : '${' != t.slice(t.length - 2) ? f(T) : f(b, M);
        }
        function M(e) {
          if ('}' == e)
            return (Ne.marked = 'string-2'), (Ne.state.tokenize = a), f(T);
        }
        function O(e) {
          return l(Ne.stream, Ne.state), c('{' == e ? y : b);
        }
        function A(e) {
          return l(Ne.stream, Ne.state), c('{' == e ? y : w);
        }
        function _(e) {
          return ':' == e ? f(v, y) : c(k, m(';'), v);
        }
        function N(e) {
          if ('variable' == e) return (Ne.marked = 'property'), f();
        }
        function E(e, t) {
          if ('async' == e) return (Ne.marked = 'property'), f(E);
          if ('variable' == e || 'keyword' == Ne.style) {
            if (((Ne.marked = 'property'), 'get' == t || 'set' == t))
              return f(D);
            var r;
            return (
              ke &&
                Ne.state.fatArrowAt == Ne.stream.start &&
                (r = Ne.stream.match(/^\s*:\s*/, !1)) &&
                (Ne.state.fatArrowAt = Ne.stream.pos + r[0].length),
              f(W)
            );
          }
          return 'number' == e || 'string' == e
            ? ((Ne.marked = Ce ? 'property' : Ne.style + ' property'), f(W))
            : 'jsonld-keyword' == e
              ? f(W)
              : 'modifier' == e
                ? f(E)
                : '[' == e
                  ? f(b, m(']'), W)
                  : 'spread' == e
                    ? f(w, W)
                    : '*' == t
                      ? ((Ne.marked = 'keyword'), f(E))
                      : ':' == e ? c(W) : void 0;
        }
        function D(e) {
          return 'variable' != e ? c(W) : ((Ne.marked = 'property'), f(re));
        }
        function W(e) {
          return ':' == e ? f(w) : '(' == e ? c(re) : void 0;
        }
        function P(e, t, r) {
          function n(i, o) {
            if (r ? r.indexOf(i) > -1 : ',' == i) {
              var a = Ne.state.lexical;
              return (
                'call' == a.info && (a.pos = (a.pos || 0) + 1),
                f(function(r, n) {
                  return r == t || n == t ? c() : c(e);
                }, n)
              );
            }
            return i == t || o == t ? f() : f(m(t));
          }
          return function(r, i) {
            return r == t || i == t ? f() : c(e, n);
          };
        }
        function H(e, t, r) {
          for (var n = 3; n < arguments.length; n++) Ne.cc.push(arguments[n]);
          return f(g(t, r), P(e, t), v);
        }
        function F(e) {
          return '}' == e ? f() : c(y, F);
        }
        function z(e, t) {
          if (ke) {
            if (':' == e) return f(j);
            if ('?' == t) return f(z);
          }
        }
        function j(e, t) {
          return 'variable' == e || 'void' == t
            ? 'keyof' == t
              ? ((Ne.marked = 'keyword'), f(j))
              : ((Ne.marked = 'type'), f(V))
            : 'string' == e || 'number' == e || 'atom' == e
              ? f(V)
              : '[' == e
                ? f(g(']'), P(j, ']', ','), v, V)
                : '{' == e
                  ? f(g('}'), P(R, '}', ',;'), v, V)
                  : '(' == e ? f(P(B, ')'), I) : void 0;
        }
        function I(e) {
          if ('=>' == e) return f(j);
        }
        function R(e, t) {
          return 'variable' == e || 'keyword' == Ne.style
            ? ((Ne.marked = 'property'), f(R))
            : '?' == t
              ? f(R)
              : ':' == e ? f(j) : '[' == e ? f(b, z, m(']'), R) : void 0;
        }
        function B(e) {
          return 'variable' == e ? f(B) : ':' == e ? f(j) : void 0;
        }
        function V(e, t) {
          return '<' == t
            ? f(g('>'), P(j, '>'), v, V)
            : '|' == t || '.' == e
              ? f(j)
              : '[' == e ? f(m(']'), V) : 'extends' == t ? f(j) : void 0;
        }
        function U(e, t) {
          if ('<' == t) return f(g('>'), P(j, '>'), v, V);
        }
        function G() {
          return c(q, z, $, X);
        }
        function q(e, t) {
          return 'modifier' == e
            ? f(q)
            : 'variable' == e
              ? (d(t), f())
              : 'spread' == e
                ? f(q)
                : '[' == e ? H(q, ']') : '{' == e ? H(K, '}') : void 0;
        }
        function K(e, t) {
          return 'variable' != e || Ne.stream.match(/^\s*:/, !1)
            ? ('variable' == e && (Ne.marked = 'property'),
              'spread' == e ? f(q) : '}' == e ? c() : f(m(':'), q, $))
            : (d(t), f($));
        }
        function $(e, t) {
          if ('=' == t) return f(w);
        }
        function X(e) {
          if (',' == e) return f(G);
        }
        function Y(e, t) {
          if ('keyword b' == e && 'else' == t)
            return f(g('form', 'else'), y, v);
        }
        function Z(e) {
          if ('(' == e) return f(g(')'), Q, m(')'), v);
        }
        function Q(e) {
          return 'var' == e
            ? f(G, m(';'), ee)
            : ';' == e ? f(ee) : 'variable' == e ? f(J) : c(b, m(';'), ee);
        }
        function J(e, t) {
          return 'in' == t || 'of' == t
            ? ((Ne.marked = 'keyword'), f(b))
            : f(k, ee);
        }
        function ee(e, t) {
          return ';' == e
            ? f(te)
            : 'in' == t || 'of' == t
              ? ((Ne.marked = 'keyword'), f(b))
              : c(b, m(';'), te);
        }
        function te(e) {
          ')' != e && f(b);
        }
        function re(e, t) {
          return '*' == t
            ? ((Ne.marked = 'keyword'), f(re))
            : 'variable' == e
              ? (d(t), f(re))
              : '(' == e
                ? f(h, g(')'), P(ne, ')'), v, z, y, p)
                : ke && '<' == t ? f(g('>'), P(j, '>'), v, re) : void 0;
        }
        function ne(e, t) {
          return (
            '@' == t && f(b, ne),
            'spread' == e || 'modifier' == e ? f(ne) : c(q, z, $)
          );
        }
        function ie(e, t) {
          return 'variable' == e ? oe(e, t) : ae(e, t);
        }
        function oe(e, t) {
          if ('variable' == e) return d(t), f(ae);
        }
        function ae(e, t) {
          return '<' == t
            ? f(g('>'), P(j, '>'), v, ae)
            : 'extends' == t || 'implements' == t || (ke && ',' == e)
              ? f(ke ? j : b, ae)
              : '{' == e ? f(g('}'), le, v) : void 0;
        }
        function le(e, t) {
          return 'modifier' == e ||
            'async' == e ||
            ('variable' == e &&
              ('static' == t || 'get' == t || 'set' == t) &&
              Ne.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            ? ((Ne.marked = 'keyword'), f(le))
            : 'variable' == e || 'keyword' == Ne.style
              ? ((Ne.marked = 'property'), f(ke ? se : re, le))
              : '[' == e
                ? f(b, m(']'), ke ? se : re, le)
                : '*' == t
                  ? ((Ne.marked = 'keyword'), f(le))
                  : ';' == e
                    ? f(le)
                    : '}' == e ? f() : '@' == t ? f(b, le) : void 0;
        }
        function se(e, t) {
          return '?' == t
            ? f(se)
            : ':' == e ? f(j, $) : '=' == t ? f(w) : c(re);
        }
        function ue(e, t) {
          return '*' == t
            ? ((Ne.marked = 'keyword'), f(ge, m(';')))
            : 'default' == t
              ? ((Ne.marked = 'keyword'), f(b, m(';')))
              : '{' == e ? f(P(ce, '}'), ge, m(';')) : c(y);
        }
        function ce(e, t) {
          return 'as' == t
            ? ((Ne.marked = 'keyword'), f(m('variable')))
            : 'variable' == e ? c(w, ce) : void 0;
        }
        function fe(e) {
          return 'string' == e ? f() : c(de, he, ge);
        }
        function de(e, t) {
          return '{' == e
            ? H(de, '}')
            : ('variable' == e && d(t),
              '*' == t && (Ne.marked = 'keyword'),
              f(pe));
        }
        function he(e) {
          if (',' == e) return f(de, he);
        }
        function pe(e, t) {
          if ('as' == t) return (Ne.marked = 'keyword'), f(de);
        }
        function ge(e, t) {
          if ('from' == t) return (Ne.marked = 'keyword'), f(b);
        }
        function ve(e) {
          return ']' == e ? f() : c(P(w, ']'));
        }
        function me(e, t, r) {
          return (
            (t.tokenize == i &&
              /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                t.lastType
              )) ||
            ('quasi' == t.lastType &&
              /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))))
          );
        }
        var ye,
          be,
          we = t.indentUnit,
          xe = r.statementIndent,
          Ce = r.jsonld,
          Se = r.json || Ce,
          ke = r.typescript,
          Le = r.wordCharacters || /[\w$\xa1-\uffff]/,
          Te = (function() {
            function e(e) {
              return { type: e, style: 'keyword' };
            }
            var t = e('keyword a'),
              r = e('keyword b'),
              n = e('keyword c'),
              i = e('keyword d'),
              o = e('operator'),
              a = { type: 'atom', style: 'atom' },
              l = {
                if: e('if'),
                while: t,
                with: t,
                else: r,
                do: r,
                try: r,
                finally: r,
                return: i,
                break: i,
                continue: i,
                new: e('new'),
                delete: n,
                void: n,
                throw: n,
                debugger: e('debugger'),
                var: e('var'),
                const: e('var'),
                let: e('var'),
                function: e('function'),
                catch: e('catch'),
                for: e('for'),
                switch: e('switch'),
                case: e('case'),
                default: e('default'),
                in: o,
                typeof: o,
                instanceof: o,
                true: a,
                false: a,
                null: a,
                undefined: a,
                NaN: a,
                Infinity: a,
                this: e('this'),
                class: e('class'),
                super: e('atom'),
                yield: n,
                export: e('export'),
                import: e('import'),
                extends: n,
                await: n,
              };
            if (ke) {
              var s = { type: 'variable', style: 'type' },
                u = {
                  interface: e('class'),
                  implements: n,
                  namespace: n,
                  module: e('module'),
                  enum: e('module'),
                  public: e('modifier'),
                  private: e('modifier'),
                  protected: e('modifier'),
                  abstract: e('modifier'),
                  readonly: e('modifier'),
                  string: s,
                  number: s,
                  boolean: s,
                  any: s,
                };
              for (var c in u) l[c] = u[c];
            }
            return l;
          })(),
          Me = /[+\-*&%=<>!?|~^@]/,
          Oe = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
          Ae = '([{}])',
          _e = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            this: !0,
            'jsonld-keyword': !0,
          },
          Ne = { state: null, column: null, marked: null, cc: null },
          Ee = { name: 'this', next: { name: 'arguments' } };
        return (
          (v.lex = !0),
          {
            startState: function(e) {
              var t = {
                tokenize: i,
                lastType: 'sof',
                cc: [],
                lexical: new s((e || 0) - we, 0, 'block', !1),
                localVars: r.localVars,
                context: r.localVars && { vars: r.localVars },
                indented: e || 0,
              };
              return (
                r.globalVars &&
                  'object' == typeof r.globalVars &&
                  (t.globalVars = r.globalVars),
                t
              );
            },
            token: function(e, t) {
              if (
                (e.sol() &&
                  (t.lexical.hasOwnProperty('align') || (t.lexical.align = !1),
                  (t.indented = e.indentation()),
                  l(e, t)),
                t.tokenize != o && e.eatSpace())
              )
                return null;
              var r = t.tokenize(e, t);
              return 'comment' == ye
                ? r
                : ((t.lastType =
                    'operator' != ye || ('++' != be && '--' != be)
                      ? ye
                      : 'incdec'),
                  (function(e, t, r, n, i) {
                    var o = e.cc;
                    for (
                      Ne.state = e,
                        Ne.stream = i,
                        Ne.marked = null,
                        Ne.cc = o,
                        Ne.style = t,
                        e.lexical.hasOwnProperty('align') ||
                          (e.lexical.align = !0);
                      ;

                    )
                      if ((o.length ? o.pop() : Se ? b : y)(r, n)) {
                        for (; o.length && o[o.length - 1].lex; ) o.pop()();
                        return Ne.marked
                          ? Ne.marked
                          : 'variable' == r && u(e, n) ? 'variable-2' : t;
                      }
                  })(t, r, ye, be, e));
            },
            indent: function(t, n) {
              if (t.tokenize == o) return e.Pass;
              if (t.tokenize != i) return 0;
              var a,
                l = n && n.charAt(0),
                s = t.lexical;
              if (!/^\s*else\b/.test(n))
                for (var u = t.cc.length - 1; u >= 0; --u) {
                  var c = t.cc[u];
                  if (c == v) s = s.prev;
                  else if (c != Y) break;
                }
              for (
                ;
                ('stat' == s.type || 'form' == s.type) &&
                ('}' == l ||
                  ((a = t.cc[t.cc.length - 1]) &&
                    (a == k || a == L) &&
                    !/^[,\.=+\-*:?[\(]/.test(n)));

              )
                s = s.prev;
              xe && ')' == s.type && 'stat' == s.prev.type && (s = s.prev);
              var f = s.type,
                d = l == f;
              return 'vardef' == f
                ? s.indented +
                    ('operator' == t.lastType || ',' == t.lastType
                      ? s.info + 1
                      : 0)
                : 'form' == f && '{' == l
                  ? s.indented
                  : 'form' == f
                    ? s.indented + we
                    : 'stat' == f
                      ? s.indented +
                        ((function(e, t) {
                          return (
                            'operator' == e.lastType ||
                            ',' == e.lastType ||
                            Me.test(t.charAt(0)) ||
                            /[,.]/.test(t.charAt(0))
                          );
                        })(t, n)
                          ? xe || we
                          : 0)
                      : 'switch' != s.info || d || 0 == r.doubleIndentSwitch
                        ? s.align
                          ? s.column + (d ? 0 : 1)
                          : s.indented + (d ? 0 : we)
                        : s.indented +
                          (/^(?:case|default)\b/.test(n) ? we : 2 * we);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: Se ? null : '/*',
            blockCommentEnd: Se ? null : '*/',
            blockCommentContinue: Se ? null : ' * ',
            lineComment: Se ? null : '//',
            fold: 'brace',
            closeBrackets: '()[]{}\'\'""``',
            helperType: Se ? 'json' : 'javascript',
            jsonldMode: Ce,
            jsonMode: Se,
            expressionAllowed: me,
            skipExpression: function(e) {
              var t = e.cc[e.cc.length - 1];
              (t != b && t != w) || e.cc.pop();
            },
          }
        );
      }),
        e.registerHelper('wordChars', 'javascript', /[\w$]/),
        e.defineMIME('text/javascript', 'javascript'),
        e.defineMIME('text/ecmascript', 'javascript'),
        e.defineMIME('application/javascript', 'javascript'),
        e.defineMIME('application/x-javascript', 'javascript'),
        e.defineMIME('application/ecmascript', 'javascript'),
        e.defineMIME('application/json', { name: 'javascript', json: !0 }),
        e.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
        e.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
        e.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
        e.defineMIME('application/typescript', {
          name: 'javascript',
          typescript: !0,
        });
    });
  },
  function(e, t) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (r = window);
    }
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    (function(e) {
      var n = r(0),
        i =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        o = i && 'object' == typeof e && e && !e.nodeType && e,
        a = o && o.exports === i ? n.a.Buffer : void 0,
        l = a ? a.allocUnsafe : void 0;
      t.a = function(e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = l ? l(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    }.call(t, r(1)(e)));
  },
  function(e, t, r) {
    'use strict';
    t.a = function() {
      return !1;
    };
  },
  function(e, t, r) {
    'use strict';
    (function(e) {
      var n = r(3),
        i =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        o = i && 'object' == typeof e && e && !e.nodeType && e,
        a = o && o.exports === i && n.a.process,
        l = (function() {
          try {
            return a && a.binding && a.binding('util');
          } catch (e) {}
        })();
      t.a = l;
    }.call(t, r(1)(e)));
  },
  function(e, t) {
    e.exports = {
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
// # sourceMappingURL=domain-gfx.js.map
