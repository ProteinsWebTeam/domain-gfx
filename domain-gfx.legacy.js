var DomainGfx = (function(t) {
  function e(n) {
    if (r[n]) return r[n].exports;
    var i = (r[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var r = {};
  return (
    (e.m = t),
    (e.c = r),
    (e.d = function(t, r, n) {
      e.o(t, r) ||
        Object.defineProperty(t, r, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (e.n = function(t) {
      var r =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(r, 'a', r), r;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ''),
    e((e.s = 5))
  );
})([
  function(t, e, r) {
    'use strict';
    var n = r(3),
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
      a = n.a || o || Function('return this')();
    e.a = a;
  },
  function(t, e, r) {
    var n,
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
        : ((n = l),
          void 0 !== (i = 'function' == typeof n ? n.call(e, r, e, t) : n) &&
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
      function r(t, r) {
        return e(t).appendChild(r);
      }
      function n(t, e, r, n) {
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
      function i(t, e, r, i) {
        var o = n(t, e, r, i);
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
      function s(e, r) {
        var n = e.className;
        t(r).test(n) || (e.className += (n ? ' ' : '') + r);
      }
      function u(e, r) {
        for (var n = e.split(' '), i = 0; i < n.length; i++)
          n[i] && !t(n[i]).test(r) && (r += ' ' + n[i]);
        return r;
      }
      function c(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function() {
          return t.apply(null, e);
        };
      }
      function f(t, e, r) {
        e || (e = {});
        for (var n in t)
          !t.hasOwnProperty(n) ||
            (!1 === r && e.hasOwnProperty(n)) ||
            (e[n] = t[n]);
        return e;
      }
      function d(t, e, r, n, i) {
        null == e && -1 == (e = t.search(/[^\s\u00a0]/)) && (e = t.length);
        for (var o = n || 0, a = i || 0; ; ) {
          var l = t.indexOf('\t', o);
          if (l < 0 || l >= e) return a + (e - o);
          (a += l - o), (a += r - a % r), (o = l + 1);
        }
      }
      function h(t, e) {
        for (var r = 0; r < t.length; ++r) if (t[r] == e) return r;
        return -1;
      }
      function p(t, e, r) {
        for (var n = 0, i = 0; ; ) {
          var o = t.indexOf('\t', n);
          -1 == o && (o = t.length);
          var a = o - n;
          if (o == t.length || i + a >= e) return n + Math.min(a, e - i);
          if (((i += o - n), (i += r - i % r), (n = o + 1), i >= e)) return n;
        }
      }
      function g(t) {
        for (; wo.length <= t; ) wo.push(v(wo) + ' ');
        return wo[t];
      }
      function v(t) {
        return t[t.length - 1];
      }
      function m(t, e) {
        for (var r = [], n = 0; n < t.length; n++) r[n] = e(t[n], n);
        return r;
      }
      function y() {}
      function b(t, e) {
        var r;
        return (
          Object.create
            ? (r = Object.create(t))
            : ((y.prototype = t), (r = new y())),
          e && f(e, r),
          r
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
      function C(t) {
        for (var e in t) if (t.hasOwnProperty(e) && t[e]) return !1;
        return !0;
      }
      function S(t) {
        return t.charCodeAt(0) >= 768 && Co.test(t);
      }
      function k(t, e, r) {
        for (; (r < 0 ? e > 0 : e < t.length) && S(t.charAt(e)); ) e += r;
        return e;
      }
      function L(t, e, r) {
        for (var n = e > r ? -1 : 1; ; ) {
          if (e == r) return e;
          var i = (e + r) / 2,
            o = n < 0 ? Math.ceil(i) : Math.floor(i);
          if (o == e) return t(o) ? e : r;
          t(o) ? (r = o) : (e = o + n);
        }
      }
      function T(t, e) {
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
      function M(t, e, r) {
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
      function O(t, e, r) {
        var n = [];
        return (
          t.iter(e, r, function(t) {
            n.push(t.text);
          }),
          n
        );
      }
      function A(t, e) {
        var r = e - t.height;
        if (r) for (var n = t; n; n = n.parent) n.height += r;
      }
      function _(t) {
        if (null == t.parent) return null;
        for (
          var e = t.parent, r = h(e.lines, t), n = e.parent;
          n;
          e = n, n = n.parent
        )
          for (var i = 0; n.children[i] != e; ++i)
            r += n.children[i].chunkSize();
        return r + e.first;
      }
      function N(t, e) {
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
          var l = t.lines[a].height;
          if (e < l) break;
          e -= l;
        }
        return r + a;
      }
      function E(t, e) {
        return e >= t.first && e < t.first + t.size;
      }
      function D(t, e) {
        return String(t.lineNumberFormatter(e + t.firstLineNumber));
      }
      function W(t, e, r) {
        if ((void 0 === r && (r = null), !(this instanceof W)))
          return new W(t, e, r);
        (this.line = t), (this.ch = e), (this.sticky = r);
      }
      function P(t, e) {
        return t.line - e.line || t.ch - e.ch;
      }
      function H(t, e) {
        return t.sticky == e.sticky && 0 == P(t, e);
      }
      function F(t) {
        return W(t.line, t.ch);
      }
      function j(t, e) {
        return P(t, e) < 0 ? e : t;
      }
      function z(t, e) {
        return P(t, e) < 0 ? t : e;
      }
      function I(t, e) {
        return Math.max(t.first, Math.min(e, t.first + t.size - 1));
      }
      function R(t, e) {
        if (e.line < t.first) return W(t.first, 0);
        var r = t.first + t.size - 1;
        return e.line > r
          ? W(r, T(t, r).text.length)
          : (function(t, e) {
              var r = t.ch;
              return null == r || r > e
                ? W(t.line, e)
                : r < 0 ? W(t.line, 0) : t;
            })(e, T(t, e.line).text.length);
      }
      function B(t, e) {
        for (var r = [], n = 0; n < e.length; n++) r[n] = R(t, e[n]);
        return r;
      }
      function V(t, e, r) {
        (this.marker = t), (this.from = e), (this.to = r);
      }
      function U(t, e) {
        if (t)
          for (var r = 0; r < t.length; ++r) {
            var n = t[r];
            if (n.marker == e) return n;
          }
      }
      function G(t, e) {
        for (var r, n = 0; n < t.length; ++n)
          t[n] != e && (r || (r = [])).push(t[n]);
        return r;
      }
      function q(t, e) {
        if (e.full) return null;
        var r = E(t, e.from.line) && T(t, e.from.line).markedSpans,
          n = E(t, e.to.line) && T(t, e.to.line).markedSpans;
        if (!r && !n) return null;
        var i = e.from.ch,
          o = e.to.ch,
          a = 0 == P(e.from, e.to),
          l = (function(t, e, r) {
            var n;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker;
                if (
                  null == o.from ||
                  (a.inclusiveLeft ? o.from <= e : o.from < e) ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!r || !o.marker.insertLeft))
                ) {
                  var l =
                    null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                  (n || (n = [])).push(new V(a, o.from, l ? null : o.to));
                }
              }
            return n;
          })(r, i, a),
          s = (function(t, e, r) {
            var n;
            if (t)
              for (var i = 0; i < t.length; ++i) {
                var o = t[i],
                  a = o.marker;
                if (
                  null == o.to ||
                  (a.inclusiveRight ? o.to >= e : o.to > e) ||
                  (o.from == e &&
                    'bookmark' == a.type &&
                    (!r || o.marker.insertLeft))
                ) {
                  var l =
                    null == o.from ||
                    (a.inclusiveLeft ? o.from <= e : o.from < e);
                  (n || (n = [])).push(
                    new V(
                      a,
                      l ? null : o.from - e,
                      null == o.to ? null : o.to - e
                    )
                  );
                }
              }
            return n;
          })(n, o, a),
          u = 1 == e.text.length,
          c = v(e.text).length + (u ? i : 0);
        if (l)
          for (var f = 0; f < l.length; ++f) {
            var d = l[f];
            if (null == d.to) {
              var h = U(s, d.marker);
              h ? u && (d.to = null == h.to ? null : h.to + c) : (d.to = i);
            }
          }
        if (s)
          for (var p = 0; p < s.length; ++p) {
            var g = s[p];
            if ((null != g.to && (g.to += c), null == g.from)) {
              U(l, g.marker) || ((g.from = c), u && (l || (l = [])).push(g));
            } else (g.from += c), u && (l || (l = [])).push(g);
          }
        l && (l = K(l)), s && s != l && (s = K(s));
        var m = [l];
        if (!u) {
          var y,
            b = e.text.length - 2;
          if (b > 0 && l)
            for (var w = 0; w < l.length; ++w)
              null == l[w].to &&
                (y || (y = [])).push(new V(l[w].marker, null, null));
          for (var x = 0; x < b; ++x) m.push(y);
          m.push(s);
        }
        return m;
      }
      function K(t) {
        for (var e = 0; e < t.length; ++e) {
          var r = t[e];
          null != r.from &&
            r.from == r.to &&
            !1 !== r.marker.clearWhenEmpty &&
            t.splice(e--, 1);
        }
        return t.length ? t : null;
      }
      function $(t) {
        var e = t.markedSpans;
        if (e) {
          for (var r = 0; r < e.length; ++r) e[r].marker.detachLine(t);
          t.markedSpans = null;
        }
      }
      function X(t, e) {
        if (e) {
          for (var r = 0; r < e.length; ++r) e[r].marker.attachLine(t);
          t.markedSpans = e;
        }
      }
      function Y(t) {
        return t.inclusiveLeft ? -1 : 0;
      }
      function Z(t) {
        return t.inclusiveRight ? 1 : 0;
      }
      function Q(t, e) {
        var r = t.lines.length - e.lines.length;
        if (0 != r) return r;
        var n = t.find(),
          i = e.find(),
          o = P(n.from, i.from) || Y(t) - Y(e);
        if (o) return -o;
        var a = P(n.to, i.to) || Z(t) - Z(e);
        return a || e.id - t.id;
      }
      function J(t, e) {
        var r,
          n = ko && t.markedSpans;
        if (n)
          for (var i = void 0, o = 0; o < n.length; ++o)
            (i = n[o]).marker.collapsed &&
              null == (e ? i.from : i.to) &&
              (!r || Q(r, i.marker) < 0) &&
              (r = i.marker);
        return r;
      }
      function tt(t) {
        return J(t, !0);
      }
      function et(t) {
        return J(t, !1);
      }
      function rt(t, e, r, n, i) {
        var o = T(t, e),
          a = ko && o.markedSpans;
        if (a)
          for (var l = 0; l < a.length; ++l) {
            var s = a[l];
            if (s.marker.collapsed) {
              var u = s.marker.find(0),
                c = P(u.from, r) || Y(s.marker) - Y(i),
                f = P(u.to, n) || Z(s.marker) - Z(i);
              if (
                !((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) &&
                ((c <= 0 &&
                  (s.marker.inclusiveRight && i.inclusiveLeft
                    ? P(u.to, r) >= 0
                    : P(u.to, r) > 0)) ||
                  (c >= 0 &&
                    (s.marker.inclusiveRight && i.inclusiveLeft
                      ? P(u.from, n) <= 0
                      : P(u.from, n) < 0)))
              )
                return !0;
            }
          }
      }
      function nt(t) {
        for (var e; (e = tt(t)); ) t = e.find(-1, !0).line;
        return t;
      }
      function it(t, e) {
        var r = T(t, e),
          n = nt(r);
        return r == n ? e : _(n);
      }
      function ot(t, e) {
        if (e > t.lastLine()) return e;
        var r,
          n = T(t, e);
        if (!at(t, n)) return e;
        for (; (r = et(n)); ) n = r.find(1, !0).line;
        return _(n) + 1;
      }
      function at(t, e) {
        var r = ko && e.markedSpans;
        if (r)
          for (var n = void 0, i = 0; i < r.length; ++i)
            if ((n = r[i]).marker.collapsed) {
              if (null == n.from) return !0;
              if (
                !n.marker.widgetNode &&
                0 == n.from &&
                n.marker.inclusiveLeft &&
                lt(t, e, n)
              )
                return !0;
            }
      }
      function lt(t, e, r) {
        if (null == r.to) {
          var n = r.marker.find(1, !0);
          return lt(t, n.line, U(n.line.markedSpans, r.marker));
        }
        if (r.marker.inclusiveRight && r.to == e.text.length) return !0;
        for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
          if (
            (i = e.markedSpans[o]).marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == r.to &&
            (null == i.to || i.to != r.from) &&
            (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
            lt(t, e, i)
          )
            return !0;
      }
      function st(t) {
        for (
          var e = 0, r = (t = nt(t)).parent, n = 0;
          n < r.lines.length;
          ++n
        ) {
          var i = r.lines[n];
          if (i == t) break;
          e += i.height;
        }
        for (var o = r.parent; o; r = o, o = r.parent)
          for (var a = 0; a < o.children.length; ++a) {
            var l = o.children[a];
            if (l == r) break;
            e += l.height;
          }
        return e;
      }
      function ut(t) {
        if (0 == t.height) return 0;
        for (var e, r = t.text.length, n = t; (e = tt(n)); ) {
          var i = e.find(0, !0);
          (n = i.from.line), (r += i.from.ch - i.to.ch);
        }
        for (n = t; (e = et(n)); ) {
          var o = e.find(0, !0);
          (r -= n.text.length - o.from.ch),
            (r += (n = o.to.line).text.length - o.to.ch);
        }
        return r;
      }
      function ct(t) {
        var e = t.display,
          r = t.doc;
        (e.maxLine = T(r, r.first)),
          (e.maxLineLength = ut(e.maxLine)),
          (e.maxLineChanged = !0),
          r.iter(function(t) {
            var r = ut(t);
            r > e.maxLineLength && ((e.maxLineLength = r), (e.maxLine = t));
          });
      }
      function ft(t, e, r) {
        var n;
        Lo = null;
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.from < e && o.to > e) return i;
          o.to == e && (o.from != o.to && 'before' == r ? (n = i) : (Lo = i)),
            o.from == e &&
              (o.from != o.to && 'before' != r ? (n = i) : (Lo = i));
        }
        return null != n ? n : Lo;
      }
      function dt(t, e) {
        var r = t.order;
        return null == r && (r = t.order = To(t.text, e)), r;
      }
      function ht(t, e) {
        return (t._handlers && t._handlers[e]) || Mo;
      }
      function pt(t, e, r) {
        if (t.removeEventListener) t.removeEventListener(e, r, !1);
        else if (t.detachEvent) t.detachEvent('on' + e, r);
        else {
          var n = t._handlers,
            i = n && n[e];
          if (i) {
            var o = h(i, r);
            o > -1 && (n[e] = i.slice(0, o).concat(i.slice(o + 1)));
          }
        }
      }
      function gt(t, e) {
        var r = ht(t, e);
        if (r.length)
          for (
            var n = Array.prototype.slice.call(arguments, 2), i = 0;
            i < r.length;
            ++i
          )
            r[i].apply(null, n);
      }
      function vt(t, e, r) {
        return (
          'string' == typeof e &&
            (e = {
              type: e,
              preventDefault: function() {
                this.defaultPrevented = !0;
              },
            }),
          gt(t, r || e.type, t, e),
          Ct(e) || e.codemirrorIgnore
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
            -1 == h(r, e[n]) && r.push(e[n]);
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
      function Ct(t) {
        return null != t.defaultPrevented
          ? t.defaultPrevented
          : 0 == t.returnValue;
      }
      function St(t) {
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
          ro && t.ctrlKey && 1 == e && (e = 3),
          e
        );
      }
      function Tt(t) {
        if (null == ho) {
          var e = n('span', '​');
          r(t, n('span', [e, document.createTextNode('x')])),
            0 != t.firstChild.offsetHeight &&
              (ho =
                e.offsetWidth <= 1 && e.offsetHeight > 2 && !(Ui && Gi < 8));
        }
        var i = ho
          ? n('span', '​')
          : n(
              'span',
              ' ',
              null,
              'display: inline-block; width: 1px; margin-right: -1px'
            );
        return i.setAttribute('cm-text', ''), i;
      }
      function Mt(t) {
        if (null != po) return po;
        var n = r(t, document.createTextNode('AخA')),
          i = ao(n, 0, 1).getBoundingClientRect(),
          o = ao(n, 1, 2).getBoundingClientRect();
        return e(t), !(!i || i.left == i.right) && (po = o.right - i.right < 3);
      }
      function Ot(t) {
        if ('string' == typeof t && Po.hasOwnProperty(t)) t = Po[t];
        else if (t && 'string' == typeof t.name && Po.hasOwnProperty(t.name)) {
          var e = Po[t.name];
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
      function At(t, e) {
        e = Ot(e);
        var r = Wo[e.name];
        if (!r) return At(t, 'text/plain');
        var n = r(t, e);
        if (Ho.hasOwnProperty(e.name)) {
          var i = Ho[e.name];
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
      function _t(t, e) {
        f(e, Ho.hasOwnProperty(t) ? Ho[t] : (Ho[t] = {}));
      }
      function Nt(t, e) {
        if (!0 === e) return e;
        if (t.copyState) return t.copyState(e);
        var r = {};
        for (var n in e) {
          var i = e[n];
          i instanceof Array && (i = i.concat([])), (r[n] = i);
        }
        return r;
      }
      function Et(t, e) {
        for (var r; t.innerMode && (r = t.innerMode(e)) && r.mode != t; )
          (e = r.state), (t = r.mode);
        return r || { mode: t, state: e };
      }
      function Dt(t, e, r) {
        return !t.startState || t.startState(e, r);
      }
      function Wt(t, e, r, n) {
        var i = [t.state.modeGen],
          o = {};
        Bt(
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
                Bt(
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
      function Pt(t, e, r) {
        if (!e.styles || e.styles[0] != t.state.modeGen) {
          var n = Ht(t, _(e)),
            i =
              e.text.length > t.options.maxHighlightLength &&
              Nt(t.doc.mode, n.state),
            o = Wt(t, e, n);
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
      function Ht(t, e, r) {
        var n = t.doc,
          i = t.display;
        if (!n.mode.startState) return new zo(n, !0, e);
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
              var s = T(o, l - 1),
                u = s.stateAfter;
              if (
                u &&
                (!r ||
                  l + (u instanceof jo ? u.lookAhead : 0) <= o.modeFrontier)
              )
                return l;
              var c = d(s.text, null, t.options.tabSize);
              (null == i || n > c) && ((i = l - 1), (n = c));
            }
            return i;
          })(t, e, r),
          a = o > n.first && T(n, o - 1).stateAfter,
          l = a ? zo.fromSaved(n, a, o) : new zo(n, Dt(n.mode), o);
        return (
          n.iter(o, e, function(r) {
            Ft(t, r.text, l);
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
      function Ft(t, e, r, n) {
        var i = t.doc.mode,
          o = new Fo(e, t.options.tabSize, r);
        for (o.start = o.pos = n || 0, '' == e && jt(i, r.state); !o.eol(); )
          zt(i, o, r.state), (o.start = o.pos);
      }
      function jt(t, e) {
        if (t.blankLine) return t.blankLine(e);
        if (t.innerMode) {
          var r = Et(t, e);
          return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
        }
      }
      function zt(t, e, r, n) {
        for (var i = 0; i < 10; i++) {
          n && (n[0] = Et(t, r).mode);
          var o = t.token(e, r);
          if (e.pos > e.start) return o;
        }
        throw new Error('Mode ' + t.name + ' failed to advance stream.');
      }
      function It(t, e, r, n) {
        var i,
          o,
          a = t.doc,
          l = a.mode,
          s = T(a, (e = R(a, e)).line),
          u = Ht(t, e.line, r),
          c = new Fo(s.text, t.options.tabSize, u);
        for (n && (o = []); (n || c.pos < e.ch) && !c.eol(); )
          (c.start = c.pos),
            (i = zt(l, c, u.state)),
            n && o.push(new Io(c, i, Nt(a.mode, u.state)));
        return n ? o : new Io(c, i, u.state);
      }
      function Rt(t, e) {
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
      function Bt(t, e, r, n, i, o, a) {
        var l = r.flattenSpans;
        null == l && (l = t.options.flattenSpans);
        var s,
          u = 0,
          c = null,
          f = new Fo(e, t.options.tabSize, n),
          d = t.options.addModeClass && [null];
        for ('' == e && Rt(jt(r, n.state), o); !f.eol(); ) {
          if (
            (f.pos > t.options.maxHighlightLength
              ? ((l = !1),
                a && Ft(t, e, n, f.pos),
                (f.pos = e.length),
                (s = null))
              : (s = Rt(zt(r, f, n.state, d), o)),
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
      function Vt(t) {
        (t.parent = null), $(t);
      }
      function Ut(t, e) {
        if (!t || /^\s*$/.test(t)) return null;
        var r = e.addModeClass ? Uo : Vo;
        return r[t] || (r[t] = t.replace(/\S+/g, 'cm-$&'));
      }
      function Gt(t, e) {
        var r = i('span', null, null, qi ? 'padding-right: .1px' : null),
          n = {
            pre: i('pre', [r], 'CodeMirror-line'),
            content: r,
            col: 0,
            pos: 0,
            cm: t,
            trailingSpace: !1,
            splitSpaces: (Ui || qi) && t.getOption('lineWrapping'),
          };
        e.measure = {};
        for (var o = 0; o <= (e.rest ? e.rest.length : 0); o++) {
          var a = o ? e.rest[o - 1] : e.line,
            l = void 0;
          (n.pos = 0),
            (n.addToken = Kt),
            Mt(t.display.measure) &&
              (l = dt(a, t.doc.direction)) &&
              (n.addToken = (function(t, e) {
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
              })(n.addToken, l)),
            (n.map = []);
          !(function(t, e, r) {
            var n = t.markedSpans,
              i = t.text,
              o = 0;
            if (!n) {
              for (var a = 1; a < r.length; a += 2)
                e.addToken(
                  e,
                  i.slice(o, (o = r[a])),
                  Ut(r[a + 1], e.cm.options)
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
                        S.collapsed && (!h || Q(h.marker, S) < 0) && (h = C))
                      : C.from > g && y > C.from && (y = C.from);
                }
                if (w)
                  for (var k = 0; k < w.length; k += 2)
                    w[k + 1] == y && (c += ' ' + w[k]);
                if (!h || h.from == g)
                  for (var L = 0; L < b.length; ++L) $t(e, 0, b[L]);
                if (h && (h.from || 0) == g) {
                  if (
                    ($t(
                      e,
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
                    e.addToken(
                      e,
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
                (m = i.slice(o, (o = r[v++]))), (l = Ut(r[v++], e.cm.options));
              }
            }
          })(a, n, Pt(t, a, e != t.display.externalMeasured && _(a))),
            a.styleClasses &&
              (a.styleClasses.bgClass &&
                (n.bgClass = u(a.styleClasses.bgClass, n.bgClass || '')),
              a.styleClasses.textClass &&
                (n.textClass = u(a.styleClasses.textClass, n.textClass || ''))),
            0 == n.map.length &&
              n.map.push(0, 0, n.content.appendChild(Tt(t.display.measure))),
            0 == o
              ? ((e.measure.map = n.map), (e.measure.cache = {}))
              : ((e.measure.maps || (e.measure.maps = [])).push(n.map),
                (e.measure.caches || (e.measure.caches = [])).push({}));
        }
        if (qi) {
          var s = n.content.lastChild;
          (/\bcm-tab\b/.test(s.className) ||
            (s.querySelector && s.querySelector('.cm-tab'))) &&
            (n.content.className = 'cm-tab-wrap-hack');
        }
        return (
          gt(t, 'renderLine', t, e.line, n.pre),
          n.pre.className &&
            (n.textClass = u(n.pre.className, n.textClass || '')),
          n
        );
      }
      function qt(t) {
        var e = n('span', '•', 'cm-invalidchar');
        return (
          (e.title = '\\u' + t.charCodeAt(0).toString(16)),
          e.setAttribute('aria-label', e.title),
          e
        );
      }
      function Kt(t, e, r, i, o, a, l) {
        if (e) {
          var s,
            u = t.splitSpaces
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
            c = t.cm.state.specialChars,
            f = !1;
          if (c.test(e)) {
            s = document.createDocumentFragment();
            for (var d = 0; ; ) {
              c.lastIndex = d;
              var h = c.exec(e),
                p = h ? h.index - d : e.length - d;
              if (p) {
                var v = document.createTextNode(u.slice(d, d + p));
                Ui && Gi < 9 ? s.appendChild(n('span', [v])) : s.appendChild(v),
                  t.map.push(t.pos, t.pos + p, v),
                  (t.col += p),
                  (t.pos += p);
              }
              if (!h) break;
              d += p + 1;
              var m = void 0;
              if ('\t' == h[0]) {
                var y = t.cm.options.tabSize,
                  b = y - t.col % y;
                (m = s.appendChild(n('span', g(b), 'cm-tab'))).setAttribute(
                  'role',
                  'presentation'
                ),
                  m.setAttribute('cm-text', '\t'),
                  (t.col += b);
              } else
                '\r' == h[0] || '\n' == h[0]
                  ? ((m = s.appendChild(
                      n('span', '\r' == h[0] ? '␍' : '␤', 'cm-invalidchar')
                    )).setAttribute('cm-text', h[0]),
                    (t.col += 1))
                  : ((m = t.cm.options.specialCharPlaceholder(
                      h[0]
                    )).setAttribute('cm-text', h[0]),
                    Ui && Gi < 9
                      ? s.appendChild(n('span', [m]))
                      : s.appendChild(m),
                    (t.col += 1));
              t.map.push(t.pos, t.pos + 1, m), t.pos++;
            }
          } else
            (t.col += e.length),
              (s = document.createTextNode(u)),
              t.map.push(t.pos, t.pos + e.length, s),
              Ui && Gi < 9 && (f = !0),
              (t.pos += e.length);
          if (
            ((t.trailingSpace = 32 == u.charCodeAt(e.length - 1)),
            r || i || o || f || l)
          ) {
            var w = r || '';
            i && (w += i), o && (w += o);
            var x = n('span', [s], w, l);
            return a && (x.title = a), t.content.appendChild(x);
          }
          t.content.appendChild(s);
        }
      }
      function $t(t, e, r, n) {
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
      function Xt(t, e, r) {
        (this.line = e),
          (this.rest = (function(t) {
            for (var e, r; (e = et(t)); )
              (t = e.find(1, !0).line), (r || (r = [])).push(t);
            return r;
          })(e)),
          (this.size = this.rest ? _(v(this.rest)) - r + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = at(t, e));
      }
      function Yt(t, e, r) {
        for (var n, i = [], o = e; o < r; o = n) {
          var a = new Xt(t.doc, T(t.doc, o), o);
          (n = o + a.size), i.push(a);
        }
        return i;
      }
      function Zt(t, e) {
        var r = ht(t, e);
        if (r.length) {
          var n,
            i = Array.prototype.slice.call(arguments, 2);
          Go
            ? (n = Go.delayedCallbacks)
            : qo ? (n = qo) : ((n = qo = []), setTimeout(Qt, 0));
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
      function Qt() {
        var t = qo;
        qo = null;
        for (var e = 0; e < t.length; ++e) t[e]();
      }
      function Jt(t, e, r, n) {
        for (var i = 0; i < e.changes.length; i++) {
          var o = e.changes[i];
          'text' == o
            ? (function(t, e) {
                var r = e.text.className,
                  n = ee(t, e);
                e.text == e.node && (e.node = n.pre);
                e.text.parentNode.replaceChild(n.pre, e.text),
                  (e.text = n.pre),
                  n.bgClass != e.bgClass || n.textClass != e.textClass
                    ? ((e.bgClass = n.bgClass),
                      (e.textClass = n.textClass),
                      re(t, e))
                    : r && (e.text.className = r);
              })(t, e)
            : 'gutter' == o
              ? ne(t, e, r, n)
              : 'class' == o
                ? re(t, e)
                : 'widget' == o &&
                  (function(t, e, r) {
                    e.alignable && (e.alignable = null);
                    for (var n = e.node.firstChild, i = void 0; n; n = i)
                      (i = n.nextSibling),
                        'CodeMirror-linewidget' == n.className &&
                          e.node.removeChild(n);
                    oe(t, e, r);
                  })(t, e, n);
        }
        e.changes = null;
      }
      function te(t) {
        return (
          t.node == t.text &&
            ((t.node = n('div', null, null, 'position: relative')),
            t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text),
            t.node.appendChild(t.text),
            Ui && Gi < 8 && (t.node.style.zIndex = 2)),
          t.node
        );
      }
      function ee(t, e) {
        var r = t.display.externalMeasured;
        return r && r.line == e.line
          ? ((t.display.externalMeasured = null),
            (e.measure = r.measure),
            r.built)
          : Gt(t, e);
      }
      function re(t, e) {
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
            var i = te(e);
            (e.background = i.insertBefore(n('div', null, r), i.firstChild)),
              t.display.input.setUneditable(e.background);
          }
        })(t, e),
          e.line.wrapClass
            ? (te(e).className = e.line.wrapClass)
            : e.node != e.text && (e.node.className = '');
        var r = e.textClass
          ? e.textClass + ' ' + (e.line.textClass || '')
          : e.line.textClass;
        e.text.className = r || '';
      }
      function ne(t, e, r, i) {
        if (
          (e.gutter && (e.node.removeChild(e.gutter), (e.gutter = null)),
          e.gutterBackground &&
            (e.node.removeChild(e.gutterBackground),
            (e.gutterBackground = null)),
          e.line.gutterClass)
        ) {
          var o = te(e);
          (e.gutterBackground = n(
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
            s = (e.gutter = n(
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
                n(
                  'div',
                  D(t.options, r),
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
      function ie(t, e, r, n) {
        var i = ee(t, e);
        return (
          (e.text = e.node = i.pre),
          i.bgClass && (e.bgClass = i.bgClass),
          i.textClass && (e.textClass = i.textClass),
          re(t, e),
          ne(t, e, r, n),
          oe(t, e, n),
          e.node
        );
      }
      function oe(t, e, r) {
        if ((ae(t, e.line, e, r, !0), e.rest))
          for (var n = 0; n < e.rest.length; n++) ae(t, e.rest[n], e, r, !1);
      }
      function ae(t, e, r, i, o) {
        if (e.widgets)
          for (var a = te(r), l = 0, s = e.widgets; l < s.length; ++l) {
            var u = s[l],
              c = n('div', [u.node], 'CodeMirror-linewidget');
            u.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
              (function(t, e, r, n) {
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
                  t.noHScroll ||
                    (e.style.marginLeft = -n.gutterTotalWidth + 'px'));
              })(u, c, r, i),
              t.display.input.setUneditable(c),
              o && u.above
                ? a.insertBefore(c, r.gutter || r.text)
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
            r(e.display.measure, n('div', [t.node], null, i));
        }
        return (t.height = t.node.parentNode.offsetHeight);
      }
      function se(t, e) {
        for (var r = kt(e); r != t.wrapper; r = r.parentNode)
          if (
            !r ||
            (1 == r.nodeType && 'true' == r.getAttribute('cm-ignore-events')) ||
            (r.parentNode == t.sizer && r != t.mover)
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
        var e = r(t.measure, n('pre', 'x')),
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
        return go - t.display.nativeBarWidth;
      }
      function he(t) {
        return t.display.scroller.clientWidth - de(t) - t.display.barWidth;
      }
      function pe(t) {
        return t.display.scroller.clientHeight - de(t) - t.display.barHeight;
      }
      function ge(t, e, r) {
        if (t.line == e) return { map: t.measure.map, cache: t.measure.cache };
        for (var n = 0; n < t.rest.length; n++)
          if (t.rest[n] == e)
            return { map: t.measure.maps[n], cache: t.measure.caches[n] };
        for (var i = 0; i < t.rest.length; i++)
          if (_(t.rest[i]) > r)
            return {
              map: t.measure.maps[i],
              cache: t.measure.caches[i],
              before: !0,
            };
      }
      function ve(t, e, r, n) {
        return be(t, ye(t, e), r, n);
      }
      function me(t, e) {
        if (e >= t.display.viewFrom && e < t.display.viewTo)
          return t.display.view[Ge(t, e)];
        var r = t.display.externalMeasured;
        return r && e >= r.lineN && e < r.lineN + r.size ? r : void 0;
      }
      function ye(t, e) {
        var n = _(e),
          i = me(t, n);
        i && !i.text
          ? (i = null)
          : i && i.changes && (Jt(t, i, n, Ie(t)), (t.curOp.forceUpdate = !0)),
          i ||
            (i = (function(t, e) {
              var n = _((e = nt(e))),
                i = (t.display.externalMeasured = new Xt(t.doc, e, n));
              i.lineN = n;
              var o = (i.built = Gt(t, i));
              return (i.text = o.pre), r(t.display.lineMeasure, o.pre), i;
            })(t, e));
        var o = ge(i, e, n);
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
                (!(function(t, e, r) {
                  var n = t.options.lineWrapping,
                    i = n && he(t);
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
              (l = (function(t, e, i, o) {
                var a,
                  l = we(e.map, i, o),
                  s = l.node,
                  u = l.start,
                  c = l.end,
                  f = l.collapse;
                if (3 == s.nodeType) {
                  for (var d = 0; d < 4; d++) {
                    for (; u && S(e.line.text.charAt(l.coverStart + u)); ) --u;
                    for (
                      ;
                      l.coverStart + c < l.coverEnd &&
                      S(e.line.text.charAt(l.coverStart + c));

                    )
                      ++c;
                    if (
                      (a =
                        Ui && Gi < 9 && 0 == u && c == l.coverEnd - l.coverStart
                          ? s.parentNode.getBoundingClientRect()
                          : xe(ao(s, u, c).getClientRects(), o)).left ||
                      a.right ||
                      0 == u
                    )
                      break;
                    (c = u), (u -= 1), (f = 'right');
                  }
                  Ui &&
                    Gi < 11 &&
                    (a = (function(t, e) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function(t) {
                          if (null != Do) return Do;
                          var e = r(t, n('span', 'x')),
                            i = e.getBoundingClientRect(),
                            o = ao(e, 0, 1).getBoundingClientRect();
                          return (Do = Math.abs(i.left - o.left) > 1);
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
                if (Ui && Gi < 9 && !u && (!a || (!a.left && !a.right))) {
                  var p = s.parentNode.getClientRects()[0];
                  a = p
                    ? {
                        left: p.left,
                        right: p.left + ze(t.display),
                        top: p.top,
                        bottom: p.bottom,
                      }
                    : Ko;
                }
                for (
                  var g = a.top - e.rect.top,
                    v = a.bottom - e.rect.top,
                    m = (g + v) / 2,
                    y = e.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(m < y[b]);
                  b++
                );
                var w = b ? y[b - 1] : 0,
                  x = y[b],
                  C = {
                    left: ('right' == f ? a.right : a.left) - e.rect.left,
                    right: ('left' == f ? a.left : a.right) - e.rect.left,
                    top: w,
                    bottom: x,
                  };
                a.left || a.right || (C.bogus = !0);
                t.options.singleCursorHeightPerLine ||
                  ((C.rtop = g), (C.rbottom = v));
                return C;
              })(t, e, i, o)).bogus || (e.cache[s] = l)),
          {
            left: l.left,
            right: l.right,
            top: a ? l.rtop : l.top,
            bottom: a ? l.rbottom : l.bottom,
          }
        );
      }
      function we(t, e, r) {
        for (var n, i, o, a, l, s, u = 0; u < t.length; u += 3)
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
      function xe(t, e) {
        var r = Ko;
        if ('left' == e)
          for (var n = 0; n < t.length && (r = t[n]).left == r.right; n++);
        else
          for (var i = t.length - 1; i >= 0 && (r = t[i]).left == r.right; i--);
        return r;
      }
      function Ce(t) {
        if (
          t.measure &&
          ((t.measure.cache = {}), (t.measure.heights = null), t.rest)
        )
          for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {};
      }
      function Se(t) {
        (t.display.externalMeasure = null), e(t.display.lineMeasure);
        for (var r = 0; r < t.display.view.length; r++) Ce(t.display.view[r]);
      }
      function ke(t) {
        Se(t),
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
          for (var r = 0; r < t.widgets.length; ++r)
            t.widgets[r].above && (e += le(t.widgets[r]));
        return e;
      }
      function Oe(t, e, r, n, i) {
        if (!i) {
          var o = Me(e);
          (r.top += o), (r.bottom += o);
        }
        if ('line' == n) return r;
        n || (n = 'local');
        var a = st(e);
        if (
          ('local' == n ? (a += ue(t.display)) : (a -= t.display.viewOffset),
          'page' == n || 'window' == n)
        ) {
          var l = t.display.lineSpace.getBoundingClientRect();
          a += l.top + ('window' == n ? 0 : Te());
          var s = l.left + ('window' == n ? 0 : Le());
          (r.left += s), (r.right += s);
        }
        return (r.top += a), (r.bottom += a), r;
      }
      function Ae(t, e, r) {
        if ('div' == r) return e;
        var n = e.left,
          i = e.top;
        if ('page' == r) (n -= Le()), (i -= Te());
        else if ('local' == r || !r) {
          var o = t.display.sizer.getBoundingClientRect();
          (n += o.left), (i += o.top);
        }
        var a = t.display.lineSpace.getBoundingClientRect();
        return { left: n - a.left, top: i - a.top };
      }
      function _e(t, e, r, n, i) {
        return n || (n = T(t.doc, e.line)), Oe(t, n, ve(t, n, e.ch, i), r);
      }
      function Ne(t, e, r, n, i, o) {
        function a(e, a) {
          var l = be(t, i, e, a ? 'right' : 'left', o);
          return a ? (l.left = l.right) : (l.right = l.left), Oe(t, n, l, r);
        }
        function l(t, e, r) {
          var n = 1 == s[e].level;
          return a(r ? t - 1 : t, n != r);
        }
        (n = n || T(t.doc, e.line)), i || (i = ye(t, n));
        var s = dt(n, t.doc.direction),
          u = e.ch,
          c = e.sticky;
        if (
          (u >= n.text.length
            ? ((u = n.text.length), (c = 'before'))
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
        var r = 0;
        (e = R(t.doc, e)), t.options.lineWrapping || (r = ze(t.display) * e.ch);
        var n = T(t.doc, e.line),
          i = st(n) + ue(t.display);
        return { left: r, right: r, top: i, bottom: i + n.height };
      }
      function De(t, e, r, n, i) {
        var o = W(t, e, r);
        return (o.xRel = i), n && (o.outside = !0), o;
      }
      function We(t, e, r) {
        var n = t.doc;
        if ((r += t.display.viewOffset) < 0)
          return De(n.first, 0, null, !0, -1);
        var i = N(n, r),
          o = n.first + n.size - 1;
        if (i > o)
          return De(n.first + n.size - 1, T(n, o).text.length, null, !0, 1);
        e < 0 && (e = 0);
        for (var a = T(n, i); ; ) {
          var l = (function(t, e, r, n, i) {
              i -= st(e);
              var o = ye(t, e),
                a = Me(e),
                l = 0,
                s = e.text.length,
                u = !0,
                c = dt(e, t.doc.direction);
              if (c) {
                var f = (t.options.lineWrapping
                  ? function(t, e, r, n, i, o, a) {
                      var l = Pe(t, e, n, a),
                        s = l.begin,
                        u = l.end;
                      /\s/.test(e.text.charAt(u - 1)) && u--;
                      for (var c = null, f = null, d = 0; d < i.length; d++) {
                        var h = i[d];
                        if (!(h.from >= u || h.to <= s)) {
                          var p = 1 != h.level,
                            g = be(
                              t,
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
                  : function(t, e, r, n, i, o, a) {
                      var l = L(
                          function(l) {
                            var s = i[l],
                              u = 1 != s.level;
                            return Fe(
                              Ne(
                                t,
                                W(r, u ? s.to : s.from, u ? 'before' : 'after'),
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
                          c = Ne(
                            t,
                            W(r, u ? s.from : s.to, u ? 'after' : 'before'),
                            'line',
                            e,
                            n
                          );
                        Fe(c, o, a, !0) && c.top > a && (s = i[l - 1]);
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
                g = null,
                v = L(
                  function(e) {
                    var r = be(t, o, e);
                    return (
                      (r.top += a),
                      (r.bottom += a),
                      !!Fe(r, n, i, !1) &&
                        (r.top <= i && r.left <= n && ((p = e), (g = r)), !0)
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
                      : v == e.text.length
                        ? 'before'
                        : be(t, o, v - (u ? 1 : 0)).bottom + a <= i == u
                          ? 'after'
                          : 'before');
                var w = Ne(t, W(r, v, h), 'line', e, o);
                (d = w.left), (m = i < w.top || i >= w.bottom);
              }
              return (v = k(e.text, v, 1)), De(r, v, h, m, n - d);
            })(t, a, i, e, r),
            s = et(a),
            u = s && s.find(0, !0);
          if (!s || !(l.ch > u.from.ch || (l.ch == u.from.ch && l.xRel > 0)))
            return l;
          i = _((a = u.to.line));
        }
      }
      function Pe(t, e, r, n) {
        n -= Me(e);
        var i = e.text.length,
          o = L(
            function(e) {
              return be(t, r, e - 1).bottom <= n;
            },
            i,
            0
          );
        return (
          (i = L(
            function(e) {
              return be(t, r, e).top > n;
            },
            o,
            i
          )),
          { begin: o, end: i }
        );
      }
      function He(t, e, r, n) {
        r || (r = ye(t, e));
        return Pe(t, e, r, Oe(t, e, be(t, r, n), 'line').top);
      }
      function Fe(t, e, r, n) {
        return !(t.bottom <= r) && (t.top > r || (n ? t.left : t.right) > e);
      }
      function je(t) {
        if (null != t.cachedTextHeight) return t.cachedTextHeight;
        if (null == Bo) {
          Bo = n('pre');
          for (var i = 0; i < 49; ++i)
            Bo.appendChild(document.createTextNode('x')),
              Bo.appendChild(n('br'));
          Bo.appendChild(document.createTextNode('x'));
        }
        r(t.measure, Bo);
        var o = Bo.offsetHeight / 50;
        return o > 3 && (t.cachedTextHeight = o), e(t.measure), o || 1;
      }
      function ze(t) {
        if (null != t.cachedCharWidth) return t.cachedCharWidth;
        var e = n('span', 'xxxxxxxxxx'),
          i = n('pre', [e]);
        r(t.measure, i);
        var o = e.getBoundingClientRect(),
          a = (o.right - o.left) / 10;
        return a > 2 && (t.cachedCharWidth = a), a || 10;
      }
      function Ie(t) {
        for (
          var e = t.display,
            r = {},
            n = {},
            i = e.gutters.clientLeft,
            o = e.gutters.firstChild,
            a = 0;
          o;
          o = o.nextSibling, ++a
        )
          (r[t.options.gutters[a]] = o.offsetLeft + o.clientLeft + i),
            (n[t.options.gutters[a]] = o.clientWidth);
        return {
          fixedPos: Re(e),
          gutterTotalWidth: e.gutters.offsetWidth,
          gutterLeft: r,
          gutterWidth: n,
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
        var e = je(t.display),
          r = t.options.lineWrapping,
          n =
            r &&
            Math.max(5, t.display.scroller.clientWidth / ze(t.display) - 3);
        return function(i) {
          if (at(t.doc, i)) return 0;
          var o = 0;
          if (i.widgets)
            for (var a = 0; a < i.widgets.length; a++)
              i.widgets[a].height && (o += i.widgets[a].height);
          return r ? o + (Math.ceil(i.text.length / n) || 1) * e : o + e;
        };
      }
      function Ve(t) {
        var e = t.doc,
          r = Be(t);
        e.iter(function(t) {
          var e = r(t);
          e != t.height && A(t, e);
        });
      }
      function Ue(t, e, r, n) {
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
          u = We(t, o, a);
        if (n && 1 == u.xRel && (s = T(t.doc, u.line).text).length == u.ch) {
          var c = d(s, s.length, t.options.tabSize) - s.length;
          u = W(
            u.line,
            Math.max(
              0,
              Math.round((o - fe(t.display).left) / ze(t.display)) - c
            )
          );
        }
        return u;
      }
      function Ge(t, e) {
        if (e >= t.display.viewTo) return null;
        if ((e -= t.display.viewFrom) < 0) return null;
        for (var r = t.display.view, n = 0; n < r.length; n++)
          if ((e -= r[n].size) < 0) return n;
      }
      function qe(t) {
        t.display.input.showSelection(t.display.input.prepareSelection());
      }
      function Ke(t, e) {
        void 0 === e && (e = !0);
        for (
          var r = t.doc,
            i = {},
            o = (i.cursors = document.createDocumentFragment()),
            a = (i.selection = document.createDocumentFragment()),
            l = 0;
          l < r.sel.ranges.length;
          l++
        )
          if (e || l != r.sel.primIndex) {
            var s = r.sel.ranges[l];
            if (
              !(
                s.from().line >= t.display.viewTo ||
                s.to().line < t.display.viewFrom
              )
            ) {
              var u = s.empty();
              (u || t.options.showCursorWhenSelecting) && $e(t, s.head, o),
                u ||
                  (function(t, e, r) {
                    function i(t, e, r, i) {
                      e < 0 && (e = 0),
                        (e = Math.round(e)),
                        (i = Math.round(i)),
                        s.appendChild(
                          n(
                            'div',
                            null,
                            'CodeMirror-selected',
                            'position: absolute; left: ' +
                              t +
                              'px;\n                             top: ' +
                              e +
                              'px; width: ' +
                              (null == r ? f - t : r) +
                              'px;\n                             height: ' +
                              (i - e) +
                              'px'
                          )
                        );
                    }
                    function o(e, r, n) {
                      function o(r, n) {
                        return _e(t, W(e, r), 'div', h, n);
                      }
                      function a(e, r, n) {
                        var i = He(t, h, null, e),
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
                        h = T(l, e),
                        p = h.text.length,
                        g = dt(h, l.direction);
                      return (
                        (function(t, e, r, n) {
                          if (!t) return n(e, r, 'ltr', 0);
                          for (var i = !1, o = 0; o < t.length; ++o) {
                            var a = t[o];
                            ((a.from < r && a.to > e) ||
                              (e == r && a.to == e)) &&
                              (n(
                                Math.max(a.from, e),
                                Math.min(a.to, r),
                                1 == a.level ? 'rtl' : 'ltr',
                                o
                              ),
                              (i = !0));
                          }
                          i || n(e, r, 'ltr');
                        })(g, r || 0, null == n ? p : n, function(t, e, l, h) {
                          var v = 'ltr' == l,
                            m = o(t, v ? 'left' : 'right'),
                            y = o(e - 1, v ? 'right' : 'left'),
                            b = null == r && 0 == t,
                            w = null == n && e == p,
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
                                (M = d ? f : a(t, l, 'before')),
                                (O = d ? c : a(e, l, 'after')),
                                (A = d && w && C ? f : y.right))
                              : ((T = d ? a(t, l, 'before') : c),
                                (M = !d && b && x ? f : m.right),
                                (O = !d && w && C ? c : y.left),
                                (A = d ? a(e, l, 'after') : f)),
                              i(T, m.top, M - T, m.bottom),
                              m.bottom < y.top && i(c, m.bottom, null, y.top),
                              i(O, y.top, A - O, y.bottom);
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
                      var g = T(l, h.line),
                        v = T(l, p.line),
                        m = nt(g) == nt(v),
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
                  })(t, s, a);
            }
          }
        return i;
      }
      function $e(t, e, r) {
        var i = Ne(
            t,
            e,
            'div',
            null,
            null,
            !t.options.singleCursorHeightPerLine
          ),
          o = r.appendChild(n('div', ' ', 'CodeMirror-cursor'));
        if (
          ((o.style.left = i.left + 'px'),
          (o.style.top = i.top + 'px'),
          (o.style.height =
            Math.max(0, i.bottom - i.top) * t.options.cursorHeight + 'px'),
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
      function Xe(t, e) {
        return t.top - e.top || t.left - e.left;
      }
      function Ye(t) {
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
      function Ze(t) {
        t.state.focused || (t.display.input.focus(), Je(t));
      }
      function Qe(t) {
        (t.state.delayingBlurEvent = !0),
          setTimeout(function() {
            t.state.delayingBlurEvent &&
              ((t.state.delayingBlurEvent = !1), tr(t));
          }, 100);
      }
      function Je(t, e) {
        t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1),
          'nocursor' != t.options.readOnly &&
            (t.state.focused ||
              (gt(t, 'focus', t, e),
              (t.state.focused = !0),
              s(t.display.wrapper, 'CodeMirror-focused'),
              t.curOp ||
                t.display.selForContextMenu == t.doc.sel ||
                (t.display.input.reset(),
                qi &&
                  setTimeout(function() {
                    return t.display.input.reset(!0);
                  }, 20)),
              t.display.input.receivedFocus()),
            Ye(t));
      }
      function tr(t, e) {
        t.state.delayingBlurEvent ||
          (t.state.focused &&
            (gt(t, 'blur', t, e),
            (t.state.focused = !1),
            uo(t.display.wrapper, 'CodeMirror-focused')),
          clearInterval(t.display.blinker),
          setTimeout(function() {
            t.state.focused || (t.display.shift = !1);
          }, 150));
      }
      function er(t) {
        for (
          var e = t.display, r = e.lineDiv.offsetTop, n = 0;
          n < e.view.length;
          n++
        ) {
          var i = e.view[n],
            o = void 0;
          if (!i.hidden) {
            if (Ui && Gi < 8) {
              var a = i.node.offsetTop + i.node.offsetHeight;
              (o = a - r), (r = a);
            } else {
              var l = i.node.getBoundingClientRect();
              o = l.bottom - l.top;
            }
            var s = i.line.height - o;
            if (
              (o < 2 && (o = je(e)),
              (s > 0.005 || s < -0.005) && (A(i.line, o), rr(i.line), i.rest))
            )
              for (var u = 0; u < i.rest.length; u++) rr(i.rest[u]);
          }
        }
      }
      function rr(t) {
        if (t.widgets)
          for (var e = 0; e < t.widgets.length; ++e)
            t.widgets[e].height = t.widgets[e].node.parentNode.offsetHeight;
      }
      function nr(t, e, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : t.scroller.scrollTop;
        n = Math.floor(n - ue(t));
        var i = r && null != r.bottom ? r.bottom : n + t.wrapper.clientHeight,
          o = N(e, n),
          a = N(e, i);
        if (r && r.ensure) {
          var l = r.ensure.from.line,
            s = r.ensure.to.line;
          l < o
            ? ((o = l), (a = N(e, st(T(e, l)) + t.wrapper.clientHeight)))
            : Math.min(s, e.lastLine()) >= a &&
              ((o = N(e, st(T(e, s)) - t.wrapper.clientHeight)), (a = s));
        }
        return { from: o, to: Math.max(a, o + 1) };
      }
      function ir(t) {
        var e = t.display,
          r = e.view;
        if (e.alignWidgets || (e.gutters.firstChild && t.options.fixedGutter)) {
          for (
            var n = Re(e) - e.scroller.scrollLeft + t.doc.scrollLeft,
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
      function or(t) {
        if (!t.options.lineNumbers) return !1;
        var e = t.doc,
          r = D(t.options, e.first + e.size - 1),
          i = t.display;
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
            Pr(t),
            !0
          );
        }
        return !1;
      }
      function ar(t, e) {
        var r = t.display,
          n = je(t.display);
        e.top < 0 && (e.top = 0);
        var i =
            t.curOp && null != t.curOp.scrollTop
              ? t.curOp.scrollTop
              : r.scroller.scrollTop,
          o = pe(t),
          a = {};
        e.bottom - e.top > o && (e.bottom = e.top + o);
        var l = t.doc.height + ce(r),
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
          d = he(t) - (t.options.fixedGutter ? r.gutters.offsetWidth : 0),
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
      function lr(t, e) {
        null != e &&
          (cr(t),
          (t.curOp.scrollTop =
            (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) +
            e));
      }
      function sr(t) {
        cr(t);
        var e = t.getCursor();
        t.curOp.scrollToPos = {
          from: e,
          to: e,
          margin: t.options.cursorScrollMargin,
        };
      }
      function ur(t, e, r) {
        (null == e && null == r) || cr(t),
          null != e && (t.curOp.scrollLeft = e),
          null != r && (t.curOp.scrollTop = r);
      }
      function cr(t) {
        var e = t.curOp.scrollToPos;
        if (e) {
          t.curOp.scrollToPos = null;
          fr(t, Ee(t, e.from), Ee(t, e.to), e.margin);
        }
      }
      function fr(t, e, r, n) {
        var i = ar(t, {
          left: Math.min(e.left, r.left),
          top: Math.min(e.top, r.top) - n,
          right: Math.max(e.right, r.right),
          bottom: Math.max(e.bottom, r.bottom) + n,
        });
        ur(t, i.scrollLeft, i.scrollTop);
      }
      function dr(t, e) {
        Math.abs(t.doc.scrollTop - e) < 2 ||
          (Ii || Wr(t, { top: e }), hr(t, e, !0), Ii && Wr(t), _r(t, 100));
      }
      function hr(t, e, r) {
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
      function pr(t, e, r, n) {
        (e = Math.min(
          e,
          t.display.scroller.scrollWidth - t.display.scroller.clientWidth
        )),
          ((r ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) &&
            !n) ||
            ((t.doc.scrollLeft = e),
            ir(t),
            t.display.scroller.scrollLeft != e &&
              (t.display.scroller.scrollLeft = e),
            t.display.scrollbars.setScrollLeft(e));
      }
      function gr(t) {
        var e = t.display,
          r = e.gutters.offsetWidth,
          n = Math.round(t.doc.height + ce(t.display));
        return {
          clientHeight: e.scroller.clientHeight,
          viewHeight: e.wrapper.clientHeight,
          scrollWidth: e.scroller.scrollWidth,
          clientWidth: e.scroller.clientWidth,
          viewWidth: e.wrapper.clientWidth,
          barLeft: t.options.fixedGutter ? r : 0,
          docHeight: n,
          scrollHeight: n + de(t) + e.barHeight,
          nativeBarWidth: e.nativeBarWidth,
          gutterWidth: r,
        };
      }
      function vr(t, e) {
        e || (e = gr(t));
        var r = t.display.barWidth,
          n = t.display.barHeight;
        mr(t, e);
        for (
          var i = 0;
          (i < 4 && r != t.display.barWidth) || n != t.display.barHeight;
          i++
        )
          r != t.display.barWidth && t.options.lineWrapping && er(t),
            mr(t, gr(t)),
            (r = t.display.barWidth),
            (n = t.display.barHeight);
      }
      function mr(t, e) {
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
      function yr(t) {
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
            function(e, r) {
              'horizontal' == r ? pr(t, e) : dr(t, e);
            },
            t
          )),
          t.display.scrollbars.addClass &&
            s(t.display.wrapper, t.display.scrollbars.addClass);
      }
      function br(t) {
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
            Go
              ? Go.ops.push(t)
              : (t.ownsGroup = Go = { ops: [t], delayedCallbacks: [] });
          })(t.curOp);
      }
      function wr(t) {
        !(function(t, e) {
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
                        i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                          null,
                          i.cm
                        );
                  }
                } while (r < e.length);
              })(r);
            } finally {
              (Go = null), e(r);
            }
        })(t.curOp, function(t) {
          for (var e = 0; e < t.ops.length; e++) t.ops[e].cm.curOp = null;
          !(function(t) {
            for (var e = t.ops, r = 0; r < e.length; r++)
              !(function(t) {
                var e = t.cm,
                  r = e.display;
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
                    (t.scrollToPos.from.line < r.viewFrom ||
                      t.scrollToPos.to.line >= r.viewTo)) ||
                  (r.maxLineChanged && e.options.lineWrapping)),
                  (t.update =
                    t.mustUpdate &&
                    new Qo(
                      e,
                      t.mustUpdate && {
                        top: t.scrollTop,
                        ensure: t.scrollToPos,
                      },
                      t.forceUpdate
                    ));
              })(e[r]);
            for (var i = 0; i < e.length; i++)
              !(function(t) {
                t.updatedDisplay = t.mustUpdate && Er(t.cm, t.update);
              })(e[i]);
            for (var o = 0; o < e.length; o++)
              !(function(t) {
                var e = t.cm,
                  r = e.display;
                t.updatedDisplay && er(e);
                (t.barMeasure = gr(e)),
                  r.maxLineChanged &&
                    !e.options.lineWrapping &&
                    ((t.adjustWidthTo =
                      ve(e, r.maxLine, r.maxLine.text.length).left + 3),
                    (e.display.sizerWidth = t.adjustWidthTo),
                    (t.barMeasure.scrollWidth = Math.max(
                      r.scroller.clientWidth,
                      r.sizer.offsetLeft +
                        t.adjustWidthTo +
                        de(e) +
                        e.display.barWidth
                    )),
                    (t.maxScrollLeft = Math.max(
                      0,
                      r.sizer.offsetLeft + t.adjustWidthTo - he(e)
                    )));
                (t.updatedDisplay || t.selectionChanged) &&
                  (t.preparedSelection = r.input.prepareSelection());
              })(e[o]);
            for (var a = 0; a < e.length; a++)
              !(function(t) {
                var e = t.cm;
                null != t.adjustWidthTo &&
                  ((e.display.sizer.style.minWidth = t.adjustWidthTo + 'px'),
                  t.maxScrollLeft < e.doc.scrollLeft &&
                    pr(
                      e,
                      Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft),
                      !0
                    ),
                  (e.display.maxLineChanged = !1));
                var r = t.focus && t.focus == l();
                t.preparedSelection &&
                  e.display.input.showSelection(t.preparedSelection, r);
                (t.updatedDisplay || t.startHeight != e.doc.height) &&
                  vr(e, t.barMeasure);
                t.updatedDisplay && Hr(e, t.barMeasure);
                t.selectionChanged && Ye(e);
                e.state.focused &&
                  t.updateInput &&
                  e.display.input.reset(t.typing);
                r && Ze(t.cm);
              })(e[a]);
            for (var s = 0; s < e.length; s++)
              !(function(t) {
                var e = t.cm,
                  r = e.display,
                  i = e.doc;
                t.updatedDisplay && Dr(e, t.update);
                null == r.wheelStartX ||
                  (null == t.scrollTop &&
                    null == t.scrollLeft &&
                    !t.scrollToPos) ||
                  (r.wheelStartX = r.wheelStartY = null);
                null != t.scrollTop && hr(e, t.scrollTop, t.forceScroll);
                null != t.scrollLeft && pr(e, t.scrollLeft, !0, !0);
                if (t.scrollToPos) {
                  var o = (function(t, e, r, n) {
                    null == n && (n = 0);
                    var i;
                    t.options.lineWrapping ||
                      e != r ||
                      (r =
                        'before' ==
                        (e = e.ch
                          ? W(
                              e.line,
                              'before' == e.sticky ? e.ch - 1 : e.ch,
                              'after'
                            )
                          : e).sticky
                          ? W(e.line, e.ch + 1, 'before')
                          : e);
                    for (var o = 0; o < 5; o++) {
                      var a = !1,
                        l = Ne(t, e),
                        s = r && r != e ? Ne(t, r) : l,
                        u = ar(
                          t,
                          (i = {
                            left: Math.min(l.left, s.left),
                            top: Math.min(l.top, s.top) - n,
                            right: Math.max(l.left, s.left),
                            bottom: Math.max(l.bottom, s.bottom) + n,
                          })
                        ),
                        c = t.doc.scrollTop,
                        f = t.doc.scrollLeft;
                      if (
                        (null != u.scrollTop &&
                          (dr(t, u.scrollTop),
                          Math.abs(t.doc.scrollTop - c) > 1 && (a = !0)),
                        null != u.scrollLeft &&
                          (pr(t, u.scrollLeft),
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
                    if (!vt(t, 'scrollCursorIntoView')) {
                      var r = t.display,
                        i = r.sizer.getBoundingClientRect(),
                        o = null;
                      if (
                        (e.top + i.top < 0
                          ? (o = !0)
                          : e.bottom + i.top >
                              (window.innerHeight ||
                                document.documentElement.clientHeight) &&
                            (o = !1),
                        null != o && !Qi)
                      ) {
                        var a = n(
                          'div',
                          '​',
                          null,
                          'position: absolute;\n                         top: ' +
                            (e.top - r.viewOffset - ue(t.display)) +
                            'px;\n                         height: ' +
                            (e.bottom - e.top + de(t) + r.barHeight) +
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
                    a[s].lines.length || gt(a[s], 'hide');
                if (l)
                  for (var u = 0; u < l.length; ++u)
                    l[u].lines.length && gt(l[u], 'unhide');
                r.wrapper.offsetHeight &&
                  (i.scrollTop = e.display.scroller.scrollTop);
                t.changeObjs && gt(e, 'changes', e, t.changeObjs);
                t.update && t.update.finish();
              })(e[s]);
          })(t);
        });
      }
      function xr(t, e) {
        if (t.curOp) return e();
        br(t);
        try {
          return e();
        } finally {
          wr(t);
        }
      }
      function Cr(t, e) {
        return function() {
          if (t.curOp) return e.apply(t, arguments);
          br(t);
          try {
            return e.apply(t, arguments);
          } finally {
            wr(t);
          }
        };
      }
      function Sr(t) {
        return function() {
          if (this.curOp) return t.apply(this, arguments);
          br(this);
          try {
            return t.apply(this, arguments);
          } finally {
            wr(this);
          }
        };
      }
      function kr(t) {
        return function() {
          var e = this.cm;
          if (!e || e.curOp) return t.apply(this, arguments);
          br(e);
          try {
            return t.apply(this, arguments);
          } finally {
            wr(e);
          }
        };
      }
      function Lr(t, e, r, n) {
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
          ko && it(t.doc, e) < i.viewTo && Mr(t);
        else if (r <= i.viewFrom)
          ko && ot(t.doc, r + n) > i.viewFrom
            ? Mr(t)
            : ((i.viewFrom += n), (i.viewTo += n));
        else if (e <= i.viewFrom && r >= i.viewTo) Mr(t);
        else if (e <= i.viewFrom) {
          var o = Or(t, r, r + n, 1);
          o
            ? ((i.view = i.view.slice(o.index)),
              (i.viewFrom = o.lineN),
              (i.viewTo += n))
            : Mr(t);
        } else if (r >= i.viewTo) {
          var a = Or(t, e, e, -1);
          a
            ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN))
            : Mr(t);
        } else {
          var l = Or(t, e, e, -1),
            s = Or(t, r, r + n, 1);
          l && s
            ? ((i.view = i.view
                .slice(0, l.index)
                .concat(Yt(t, l.lineN, s.lineN))
                .concat(i.view.slice(s.index))),
              (i.viewTo += n))
            : Mr(t);
        }
        var u = i.externalMeasured;
        u &&
          (r < u.lineN
            ? (u.lineN += n)
            : e < u.lineN + u.size && (i.externalMeasured = null));
      }
      function Tr(t, e, r) {
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
          var o = n.view[Ge(t, e)];
          if (null != o.node) {
            var a = o.changes || (o.changes = []);
            -1 == h(a, r) && a.push(r);
          }
        }
      }
      function Mr(t) {
        (t.display.viewFrom = t.display.viewTo = t.doc.first),
          (t.display.view = []),
          (t.display.viewOffset = 0);
      }
      function Or(t, e, r, n) {
        var i,
          o = Ge(t, e),
          a = t.display.view;
        if (!ko || r == t.doc.first + t.doc.size) return { index: o, lineN: r };
        for (var l = t.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
        if (l != e) {
          if (n > 0) {
            if (o == a.length - 1) return null;
            (i = l + a[o].size - e), o++;
          } else i = l - e;
          (e += i), (r += i);
        }
        for (; it(t.doc, r) != r; ) {
          if (o == (n < 0 ? 0 : a.length - 1)) return null;
          (r += n * a[o - (n < 0 ? 1 : 0)].size), (o += n);
        }
        return { index: o, lineN: r };
      }
      function Ar(t) {
        for (var e = t.display.view, r = 0, n = 0; n < e.length; n++) {
          var i = e[n];
          i.hidden || (i.node && !i.changes) || ++r;
        }
        return r;
      }
      function _r(t, e) {
        t.doc.highlightFrontier < t.display.viewTo &&
          t.state.highlight.set(e, c(Nr, t));
      }
      function Nr(t) {
        var e = t.doc;
        if (!(e.highlightFrontier >= t.display.viewTo)) {
          var r = +new Date() + t.options.workTime,
            n = Ht(t, e.highlightFrontier),
            i = [];
          e.iter(
            n.line,
            Math.min(e.first + e.size, t.display.viewTo + 500),
            function(o) {
              if (n.line >= t.display.viewFrom) {
                var a = o.styles,
                  l =
                    o.text.length > t.options.maxHighlightLength
                      ? Nt(e.mode, n.state)
                      : null,
                  s = Wt(t, o, n, !0);
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
                  Ft(t, o.text, n),
                  (o.stateAfter = n.line % 5 == 0 ? n.save() : null),
                  n.nextLine();
              if (+new Date() > r) return _r(t, t.options.workDelay), !0;
            }
          ),
            (e.highlightFrontier = n.line),
            (e.modeFrontier = Math.max(e.modeFrontier, n.line)),
            i.length &&
              xr(t, function() {
                for (var e = 0; e < i.length; e++) Tr(t, i[e], 'text');
              });
        }
      }
      function Er(t, r) {
        var n = t.display,
          i = t.doc;
        if (r.editorIsHidden) return Mr(t), !1;
        if (
          !r.force &&
          r.visible.from >= n.viewFrom &&
          r.visible.to <= n.viewTo &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
          n.renderedView == n.view &&
          0 == Ar(t)
        )
          return !1;
        or(t) && (Mr(t), (r.dims = Ie(t)));
        var o = i.first + i.size,
          s = Math.max(r.visible.from - t.options.viewportMargin, i.first),
          u = Math.min(o, r.visible.to + t.options.viewportMargin);
        n.viewFrom < s &&
          s - n.viewFrom < 20 &&
          (s = Math.max(i.first, n.viewFrom)),
          n.viewTo > u && n.viewTo - u < 20 && (u = Math.min(o, n.viewTo)),
          ko && ((s = it(t.doc, s)), (u = ot(t.doc, u)));
        var c =
          s != n.viewFrom ||
          u != n.viewTo ||
          n.lastWrapHeight != r.wrapperHeight ||
          n.lastWrapWidth != r.wrapperWidth;
        !(function(t, e, r) {
          var n = t.display;
          0 == n.view.length || e >= n.viewTo || r <= n.viewFrom
            ? ((n.view = Yt(t, e, r)), (n.viewFrom = e))
            : (n.viewFrom > e
                ? (n.view = Yt(t, e, n.viewFrom).concat(n.view))
                : n.viewFrom < e && (n.view = n.view.slice(Ge(t, e))),
              (n.viewFrom = e),
              n.viewTo < r
                ? (n.view = n.view.concat(Yt(t, n.viewTo, r)))
                : n.viewTo > r && (n.view = n.view.slice(0, Ge(t, r)))),
            (n.viewTo = r);
        })(t, s, u),
          (n.viewOffset = st(T(t.doc, n.viewFrom))),
          (t.display.mover.style.top = n.viewOffset + 'px');
        var f = Ar(t);
        if (
          !c &&
          0 == f &&
          !r.force &&
          n.renderedView == n.view &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
        )
          return !1;
        var d = (function(t) {
          if (t.hasFocus()) return null;
          var e = l();
          if (!e || !a(t.display.lineDiv, e)) return null;
          var r = { activeElt: e };
          if (window.getSelection) {
            var n = window.getSelection();
            n.anchorNode &&
              n.extend &&
              a(t.display.lineDiv, n.anchorNode) &&
              ((r.anchorNode = n.anchorNode),
              (r.anchorOffset = n.anchorOffset),
              (r.focusNode = n.focusNode),
              (r.focusOffset = n.focusOffset));
          }
          return r;
        })(t);
        return (
          f > 4 && (n.lineDiv.style.display = 'none'),
          (function(t, r, n) {
            function i(e) {
              var r = e.nextSibling;
              return (
                qi && ro && t.display.currentWheelTarget == e
                  ? (e.style.display = 'none')
                  : e.parentNode.removeChild(e),
                r
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
                var p = a && null != r && r <= c && d.lineNumber;
                d.changes &&
                  (h(d.changes, 'gutter') > -1 && (p = !1), Jt(t, d, c, n)),
                  p &&
                    (e(d.lineNumber),
                    d.lineNumber.appendChild(
                      document.createTextNode(D(t.options, c))
                    )),
                  (s = d.node.nextSibling);
              } else {
                var g = ie(t, d, c, n);
                l.insertBefore(g, s);
              }
              c += d.size;
            }
            for (; s; ) s = i(s);
          })(t, n.updateLineNumbers, r.dims),
          f > 4 && (n.lineDiv.style.display = ''),
          (n.renderedView = n.view),
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
                r = document.createRange();
              r.setEnd(t.anchorNode, t.anchorOffset),
                r.collapse(!1),
                e.removeAllRanges(),
                e.addRange(r),
                e.extend(t.focusNode, t.focusOffset);
            }
          })(d),
          e(n.cursorDiv),
          e(n.selectionDiv),
          (n.gutters.style.height = n.sizer.style.minHeight = 0),
          c &&
            ((n.lastWrapHeight = r.wrapperHeight),
            (n.lastWrapWidth = r.wrapperWidth),
            _r(t, 400)),
          (n.updateLineNumbers = null),
          !0
        );
      }
      function Dr(t, e) {
        for (
          var r = e.viewport, n = !0;
          ((n && t.options.lineWrapping && e.oldDisplayWidth != he(t)) ||
            (r &&
              null != r.top &&
              (r = {
                top: Math.min(t.doc.height + ce(t.display) - pe(t), r.top),
              }),
            (e.visible = nr(t.display, t.doc, r)),
            !(
              e.visible.from >= t.display.viewFrom &&
              e.visible.to <= t.display.viewTo
            ))) &&
          Er(t, e);
          n = !1
        ) {
          er(t);
          var i = gr(t);
          qe(t), vr(t, i), Hr(t, i), (e.force = !1);
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
      function Wr(t, e) {
        var r = new Qo(t, e);
        if (Er(t, r)) {
          er(t), Dr(t, r);
          var n = gr(t);
          qe(t), vr(t, n), Hr(t, n), r.finish();
        }
      }
      function Pr(t) {
        var e = t.display.gutters.offsetWidth;
        t.display.sizer.style.marginLeft = e + 'px';
      }
      function Hr(t, e) {
        (t.display.sizer.style.minHeight = e.docHeight + 'px'),
          (t.display.heightForcer.style.top = e.docHeight + 'px'),
          (t.display.gutters.style.height =
            e.docHeight + t.display.barHeight + de(t) + 'px');
      }
      function Fr(t) {
        var r = t.display.gutters,
          i = t.options.gutters;
        e(r);
        for (var o = 0; o < i.length; ++o) {
          var a = i[o],
            l = r.appendChild(n('div', null, 'CodeMirror-gutter ' + a));
          'CodeMirror-linenumbers' == a &&
            ((t.display.lineGutter = l),
            (l.style.width = (t.display.lineNumWidth || 1) + 'px'));
        }
        (r.style.display = o ? '' : 'none'), Pr(t);
      }
      function jr(t) {
        var e = h(t.gutters, 'CodeMirror-linenumbers');
        -1 == e && t.lineNumbers
          ? (t.gutters = t.gutters.concat(['CodeMirror-linenumbers']))
          : e > -1 &&
            !t.lineNumbers &&
            ((t.gutters = t.gutters.slice(0)), t.gutters.splice(e, 1));
      }
      function zr(t) {
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
      function Ir(t) {
        var e = zr(t);
        return (e.x *= ta), (e.y *= ta), e;
      }
      function Rr(t, e) {
        var r = zr(e),
          n = r.x,
          i = r.y,
          o = t.display,
          a = o.scroller,
          l = a.scrollWidth > a.clientWidth,
          s = a.scrollHeight > a.clientHeight;
        if ((n && l) || (i && s)) {
          if (i && ro && qi)
            t: for (var u = e.target, c = o.view; u != a; u = u.parentNode)
              for (var f = 0; f < c.length; f++)
                if (c[f].node == u) {
                  t.display.currentWheelTarget = u;
                  break t;
                }
          if (n && !Ii && !Xi && null != ta)
            return (
              i && s && dr(t, Math.max(0, a.scrollTop + i * ta)),
              pr(t, Math.max(0, a.scrollLeft + n * ta)),
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
              Wr(t, { top: h, bottom: p });
          }
          Jo < 20 &&
            (null == o.wheelStartX
              ? ((o.wheelStartX = a.scrollLeft),
                (o.wheelStartY = a.scrollTop),
                (o.wheelDX = n),
                (o.wheelDY = i),
                setTimeout(function() {
                  if (null != o.wheelStartX) {
                    var t = a.scrollLeft - o.wheelStartX,
                      e = a.scrollTop - o.wheelStartY,
                      r =
                        (e && o.wheelDY && e / o.wheelDY) ||
                        (t && o.wheelDX && t / o.wheelDX);
                    (o.wheelStartX = o.wheelStartY = null),
                      r && ((ta = (ta * Jo + r) / (Jo + 1)), ++Jo);
                  }
                }, 200))
              : ((o.wheelDX += n), (o.wheelDY += i)));
        }
      }
      function Br(t, e) {
        var r = t[e];
        t.sort(function(t, e) {
          return P(t.from(), e.from());
        }),
          (e = h(t, r));
        for (var n = 1; n < t.length; n++) {
          var i = t[n],
            o = t[n - 1];
          if (P(o.to(), i.from()) >= 0) {
            var a = z(o.from(), i.from()),
              l = j(o.to(), i.to()),
              s = o.empty() ? i.from() == i.head : o.from() == o.head;
            n <= e && --e, t.splice(--n, 2, new ra(s ? l : a, s ? a : l));
          }
        }
        return new ea(t, e);
      }
      function Vr(t, e) {
        return new ea([new ra(t, e || t)], 0);
      }
      function Ur(t) {
        return t.text
          ? W(
              t.from.line + t.text.length - 1,
              v(t.text).length + (1 == t.text.length ? t.from.ch : 0)
            )
          : t.to;
      }
      function Gr(t, e) {
        if (P(t, e.from) < 0) return t;
        if (P(t, e.to) <= 0) return Ur(e);
        var r = t.line + e.text.length - (e.to.line - e.from.line) - 1,
          n = t.ch;
        return t.line == e.to.line && (n += Ur(e).ch - e.to.ch), W(r, n);
      }
      function qr(t, e) {
        for (var r = [], n = 0; n < t.sel.ranges.length; n++) {
          var i = t.sel.ranges[n];
          r.push(new ra(Gr(i.anchor, e), Gr(i.head, e)));
        }
        return Br(r, t.sel.primIndex);
      }
      function Kr(t, e, r) {
        return t.line == e.line
          ? W(r.line, t.ch - e.ch + r.ch)
          : W(r.line + (t.line - e.line), t.ch);
      }
      function $r(t) {
        (t.doc.mode = At(t.options, t.doc.modeOption)), Xr(t);
      }
      function Xr(t) {
        t.doc.iter(function(t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }),
          (t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first),
          _r(t, 100),
          t.state.modeGen++,
          t.curOp && Lr(t);
      }
      function Yr(t, e) {
        return (
          0 == e.from.ch &&
          0 == e.to.ch &&
          '' == v(e.text) &&
          (!t.cm || t.cm.options.wholeLineUpdateBefore)
        );
      }
      function Zr(t, e, r, n) {
        function i(t) {
          return r ? r[t] : null;
        }
        function o(t, r, i) {
          !(function(t, e, r, n) {
            (t.text = e),
              t.stateAfter && (t.stateAfter = null),
              t.styles && (t.styles = null),
              null != t.order && (t.order = null),
              $(t),
              X(t, r);
            var i = n ? n(t) : 1;
            i != t.height && A(t, i);
          })(t, r, i, n),
            Zt(t, 'change', t, e);
        }
        function a(t, e) {
          for (var r = [], o = t; o < e; ++o) r.push(new Ro(u[o], i(o), n));
          return r;
        }
        var l = e.from,
          s = e.to,
          u = e.text,
          c = T(t, l.line),
          f = T(t, s.line),
          d = v(u),
          h = i(u.length - 1),
          p = s.line - l.line;
        if (e.full)
          t.insert(0, a(0, u.length)), t.remove(u.length, t.size - u.length);
        else if (Yr(t, e)) {
          var g = a(0, u.length - 1);
          o(f, f.text, h),
            p && t.remove(l.line, p),
            g.length && t.insert(l.line, g);
        } else if (c == f)
          if (1 == u.length)
            o(c, c.text.slice(0, l.ch) + d + c.text.slice(s.ch), h);
          else {
            var m = a(1, u.length - 1);
            m.push(new Ro(d + c.text.slice(s.ch), h, n)),
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
      function Qr(t, e, r) {
        function n(t, i, o) {
          if (t.linked)
            for (var a = 0; a < t.linked.length; ++a) {
              var l = t.linked[a];
              if (l.doc != i) {
                var s = o && l.sharedHist;
                (r && !s) || (e(l.doc, s), n(l.doc, t, s));
              }
            }
        }
        n(t, null, !0);
      }
      function Jr(t, e) {
        if (e.cm) throw new Error('This document is already in use.');
        (t.doc = e),
          (e.cm = t),
          Ve(t),
          $r(t),
          tn(t),
          t.options.lineWrapping || ct(t),
          (t.options.mode = e.modeOption),
          Lr(t);
      }
      function tn(t) {
        ('rtl' == t.doc.direction
          ? s
          : uo)(t.display.lineDiv, 'CodeMirror-rtl');
      }
      function en(t) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = t || 1);
      }
      function rn(t, e) {
        var r = { from: F(e.from), to: Ur(e), text: M(t, e.from, e.to) };
        return (
          sn(t, r, e.from.line, e.to.line + 1),
          Qr(
            t,
            function(t) {
              return sn(t, r, e.from.line, e.to.line + 1);
            },
            !0
          ),
          r
        );
      }
      function nn(t) {
        for (; t.length; ) {
          if (!v(t).ranges) break;
          t.pop();
        }
      }
      function on(t, e, r, n) {
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
                t.cm &&
                i.lastModTime > l - t.cm.options.historyEventDelay) ||
                '*' == e.origin.charAt(0)))) &&
          (o = (function(t, e) {
            return e
              ? (nn(t.done), v(t.done))
              : t.done.length && !v(t.done).ranges
                ? v(t.done)
                : t.done.length > 1 && !t.done[t.done.length - 2].ranges
                  ? (t.done.pop(), v(t.done))
                  : void 0;
          })(i, i.lastOp == n))
        )
          (a = v(o.changes)),
            0 == P(e.from, e.to) && 0 == P(e.from, a.to)
              ? (a.to = Ur(e))
              : o.changes.push(rn(t, e));
        else {
          var s = v(i.done);
          for (
            (s && s.ranges) || ln(t.sel, i.done),
              o = { changes: [rn(t, e)], generation: i.generation },
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
          a || gt(t, 'historyAdded');
      }
      function an(t, e, r, n) {
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
            })(t, o, v(i.done), e)))
          ? (i.done[i.done.length - 1] = e)
          : ln(e, i.done),
          (i.lastSelTime = +new Date()),
          (i.lastSelOrigin = o),
          (i.lastSelOp = r),
          n && !1 !== n.clearRedo && nn(i.undone);
      }
      function ln(t, e) {
        var r = v(e);
        (r && r.ranges && r.equals(t)) || e.push(t);
      }
      function sn(t, e, r, n) {
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
      function un(t) {
        if (!t) return null;
        for (var e, r = 0; r < t.length; ++r)
          t[r].marker.explicitlyCleared
            ? e || (e = t.slice(0, r))
            : e && e.push(t[r]);
        return e ? (e.length ? e : null) : t;
      }
      function cn(t, e) {
        var r = (function(t, e) {
            var r = e['spans_' + t.id];
            if (!r) return null;
            for (var n = [], i = 0; i < e.text.length; ++i) n.push(un(r[i]));
            return n;
          })(t, e),
          n = q(t, e);
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
      function fn(t, e, r) {
        for (var n = [], i = 0; i < t.length; ++i) {
          var o = t[i];
          if (o.ranges) n.push(r ? ea.prototype.deepCopy.call(o) : o);
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
                    h(e, Number(c[1])) > -1 &&
                    ((v(l)[f] = u[f]), delete u[f]);
            }
          }
        }
        return n;
      }
      function dn(t, e, r, n) {
        if (n) {
          var i = t.anchor;
          if (r) {
            var o = P(e, i) < 0;
            o != P(r, i) < 0 ? ((i = e), (e = r)) : o != P(e, r) < 0 && (e = r);
          }
          return new ra(i, e);
        }
        return new ra(r || e, e);
      }
      function hn(t, e, r, n, i) {
        null == i && (i = t.cm && (t.cm.display.shift || t.extend)),
          yn(t, new ea([dn(t.sel.primary(), e, r, i)], 0), n);
      }
      function pn(t, e, r) {
        for (
          var n = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0;
          o < t.sel.ranges.length;
          o++
        )
          n[o] = dn(t.sel.ranges[o], e[o], null, i);
        yn(t, Br(n, t.sel.primIndex), r);
      }
      function gn(t, e, r, n) {
        var i = t.sel.ranges.slice(0);
        (i[e] = r), yn(t, Br(i, t.sel.primIndex), n);
      }
      function vn(t, e, r, n) {
        yn(t, Vr(e, r), n);
      }
      function mn(t, e, r) {
        var n = t.history.done,
          i = v(n);
        i && i.ranges ? ((n[n.length - 1] = e), bn(t, e, r)) : yn(t, e, r);
      }
      function yn(t, e, r) {
        bn(t, e, r), an(t, t.sel, t.cm ? t.cm.curOp.id : NaN, r);
      }
      function bn(t, e, r) {
        (yt(t, 'beforeSelectionChange') ||
          (t.cm && yt(t.cm, 'beforeSelectionChange'))) &&
          (e = (function(t, e, r) {
            var n = {
              ranges: e.ranges,
              update: function(e) {
                var r = this;
                this.ranges = [];
                for (var n = 0; n < e.length; n++)
                  r.ranges[n] = new ra(R(t, e[n].anchor), R(t, e[n].head));
              },
              origin: r && r.origin,
            };
            return (
              gt(t, 'beforeSelectionChange', t, n),
              t.cm && gt(t.cm, 'beforeSelectionChange', t.cm, n),
              n.ranges != e.ranges ? Br(n.ranges, n.ranges.length - 1) : e
            );
          })(t, e, r));
        wn(
          t,
          Cn(
            t,
            e,
            (r && r.bias) ||
              (P(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1),
            !0
          )
        ),
          (r && !1 === r.scroll) || !t.cm || sr(t.cm);
      }
      function wn(t, e) {
        e.equals(t.sel) ||
          ((t.sel = e),
          t.cm &&
            ((t.cm.curOp.updateInput = t.cm.curOp.selectionChanged = !0),
            mt(t.cm)),
          Zt(t, 'cursorActivity', t));
      }
      function xn(t) {
        wn(t, Cn(t, t.sel, null, !1));
      }
      function Cn(t, e, r, n) {
        for (var i, o = 0; o < e.ranges.length; o++) {
          var a = e.ranges[o],
            l = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o],
            s = kn(t, a.anchor, l && l.anchor, r, n),
            u = kn(t, a.head, l && l.head, r, n);
          (i || s != a.anchor || u != a.head) &&
            (i || (i = e.ranges.slice(0, o)), (i[o] = new ra(s, u)));
        }
        return i ? Br(i, e.primIndex) : e;
      }
      function Sn(t, e, r, n, i) {
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
              if (i && (gt(s, 'beforeCursorEnter'), s.explicitlyCleared)) {
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
                    (u = Ln(t, u, -n, u && u.line == e.line ? o : null)),
                  u &&
                    u.line == e.line &&
                    (c = P(u, r)) &&
                    (n < 0 ? c < 0 : c > 0))
                )
                  return Sn(t, u, e, n, i);
              }
              var f = s.find(n < 0 ? -1 : 1);
              return (
                (n < 0 ? s.inclusiveLeft : s.inclusiveRight) &&
                  (f = Ln(t, f, n, f.line == e.line ? o : null)),
                f ? Sn(t, f, e, n, i) : null
              );
            }
          }
        return e;
      }
      function kn(t, e, r, n, i) {
        var o = n || 1,
          a =
            Sn(t, e, r, o, i) ||
            (!i && Sn(t, e, r, o, !0)) ||
            Sn(t, e, r, -o, i) ||
            (!i && Sn(t, e, r, -o, !0));
        return a || ((t.cantEdit = !0), W(t.first, 0));
      }
      function Ln(t, e, r, n) {
        return r < 0 && 0 == e.ch
          ? e.line > t.first ? R(t, W(e.line - 1)) : null
          : r > 0 && e.ch == (n || T(t, e.line)).text.length
            ? e.line < t.first + t.size - 1 ? W(e.line + 1, 0) : null
            : new W(e.line, e.ch + r);
      }
      function Tn(t) {
        t.setSelection(W(t.firstLine(), 0), W(t.lastLine()), mo);
      }
      function Mn(t, e, r) {
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
              e && (n.from = R(t, e)),
                r && (n.to = R(t, r)),
                i && (n.text = i),
                void 0 !== o && (n.origin = o);
            }),
          gt(t, 'beforeChange', t, n),
          t.cm && gt(t.cm, 'beforeChange', t.cm, n),
          n.canceled
            ? null
            : { from: n.from, to: n.to, text: n.text, origin: n.origin }
        );
      }
      function On(t, e, r) {
        if (t.cm) {
          if (!t.cm.curOp) return Cr(t.cm, On)(t, e, r);
          if (t.cm.state.suppressEdits) return;
        }
        if (
          !(yt(t, 'beforeChange') || (t.cm && yt(t.cm, 'beforeChange'))) ||
          (e = Mn(t, e, !0))
        ) {
          var n =
            So &&
            !r &&
            (function(t, e, r) {
              var n = null;
              if (
                (t.iter(e.line, r.line + 1, function(t) {
                  if (t.markedSpans)
                    for (var e = 0; e < t.markedSpans.length; ++e) {
                      var r = t.markedSpans[e].marker;
                      !r.readOnly ||
                        (n && -1 != h(n, r)) ||
                        (n || (n = [])).push(r);
                    }
                }),
                !n)
              )
                return null;
              for (var i = [{ from: e, to: r }], o = 0; o < n.length; ++o)
                for (var a = n[o], l = a.find(0), s = 0; s < i.length; ++s) {
                  var u = i[s];
                  if (!(P(u.to, l.from) < 0 || P(u.from, l.to) > 0)) {
                    var c = [s, 1],
                      f = P(u.from, l.from),
                      d = P(u.to, l.to);
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
              An(t, {
                from: n[i].from,
                to: n[i].to,
                text: i ? [''] : e.text,
                origin: e.origin,
              });
          else An(t, e);
        }
      }
      function An(t, e) {
        if (1 != e.text.length || '' != e.text[0] || 0 != P(e.from, e.to)) {
          var r = qr(t, e);
          on(t, e, r, t.cm ? t.cm.curOp.id : NaN), En(t, e, r, q(t, e));
          var n = [];
          Qr(t, function(t, r) {
            r || -1 != h(n, t.history) || (Hn(t.history, e), n.push(t.history)),
              En(t, e, null, q(t, e));
          });
        }
      }
      function _n(t, e, r) {
        if (!t.cm || !t.cm.state.suppressEdits || r) {
          for (
            var n,
              i = t.history,
              o = t.sel,
              a = 'undo' == e ? i.done : i.undone,
              l = 'undo' == e ? i.undone : i.done,
              s = 0;
            s < a.length &&
            ((n = a[s]), r ? !n.ranges || n.equals(t.sel) : n.ranges);
            s++
          );
          if (s != a.length) {
            for (
              i.lastOrigin = i.lastSelOrigin = null;
              (n = a.pop()).ranges;

            ) {
              if ((ln(n, l), r && !n.equals(t.sel)))
                return void yn(t, n, { clearRedo: !1 });
              o = n;
            }
            var u = [];
            ln(o, l),
              l.push({ changes: u, generation: i.generation }),
              (i.generation = n.generation || ++i.maxGeneration);
            for (
              var c =
                  yt(t, 'beforeChange') || (t.cm && yt(t.cm, 'beforeChange')),
                f = function(r) {
                  var i = n.changes[r];
                  if (((i.origin = e), c && !Mn(t, i, !1)))
                    return (a.length = 0), {};
                  u.push(rn(t, i));
                  var o = r ? qr(t, i) : v(a);
                  En(t, i, o, cn(t, i)),
                    !r &&
                      t.cm &&
                      t.cm.scrollIntoView({ from: i.from, to: Ur(i) });
                  var l = [];
                  Qr(t, function(t, e) {
                    e ||
                      -1 != h(l, t.history) ||
                      (Hn(t.history, i), l.push(t.history)),
                      En(t, i, null, cn(t, i));
                  });
                },
                d = n.changes.length - 1;
              d >= 0;
              --d
            ) {
              var p = f(d);
              if (p) return p.v;
            }
          }
        }
      }
      function Nn(t, e) {
        if (
          0 != e &&
          ((t.first += e),
          (t.sel = new ea(
            m(t.sel.ranges, function(t) {
              return new ra(
                W(t.anchor.line + e, t.anchor.ch),
                W(t.head.line + e, t.head.ch)
              );
            }),
            t.sel.primIndex
          )),
          t.cm)
        ) {
          Lr(t.cm, t.first, t.first - e, e);
          for (var r = t.cm.display, n = r.viewFrom; n < r.viewTo; n++)
            Tr(t.cm, n, 'gutter');
        }
      }
      function En(t, e, r, n) {
        if (t.cm && !t.cm.curOp) return Cr(t.cm, En)(t, e, r, n);
        if (e.to.line < t.first)
          Nn(t, e.text.length - 1 - (e.to.line - e.from.line));
        else if (!(e.from.line > t.lastLine())) {
          if (e.from.line < t.first) {
            var i = e.text.length - 1 - (t.first - e.from.line);
            Nn(t, i),
              (e = {
                from: W(t.first, 0),
                to: W(e.to.line + i, e.to.ch),
                text: [v(e.text)],
                origin: e.origin,
              });
          }
          var o = t.lastLine();
          e.to.line > o &&
            (e = {
              from: e.from,
              to: W(o, T(t, o).text.length),
              text: [e.text[0]],
              origin: e.origin,
            }),
            (e.removed = M(t, e.from, e.to)),
            r || (r = qr(t, e)),
            t.cm
              ? (function(t, e, r) {
                  var n = t.doc,
                    i = t.display,
                    o = e.from,
                    a = e.to,
                    l = !1,
                    s = o.line;
                  t.options.lineWrapping ||
                    ((s = _(nt(T(n, o.line)))),
                    n.iter(s, a.line + 1, function(t) {
                      if (t == i.maxLine) return (l = !0), !0;
                    }));
                  n.sel.contains(e.from, e.to) > -1 && mt(t);
                  Zr(n, e, r, Be(t)),
                    t.options.lineWrapping ||
                      (n.iter(s, o.line + e.text.length, function(t) {
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
                      for (var r = t.first, n = e - 1; n > r; n--) {
                        var i = T(t, n).stateAfter;
                        if (i && (!(i instanceof jo) || n + i.lookAhead < e)) {
                          r = n + 1;
                          break;
                        }
                      }
                      t.highlightFrontier = Math.min(t.highlightFrontier, r);
                    }
                  })(n, o.line),
                    _r(t, 400);
                  var u = e.text.length - (a.line - o.line) - 1;
                  e.full
                    ? Lr(t)
                    : o.line != a.line || 1 != e.text.length || Yr(t.doc, e)
                      ? Lr(t, o.line, a.line + 1, u)
                      : Tr(t, o.line, 'text');
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
                })(t.cm, e, n)
              : Zr(t, e, n),
            bn(t, r, mo);
        }
      }
      function Dn(t, e, r, n, i) {
        if ((n || (n = r), P(n, r) < 0)) {
          var o;
          (r = (o = [n, r])[0]), (n = o[1]);
        }
        'string' == typeof e && (e = t.splitLines(e)),
          On(t, { from: r, to: n, text: e, origin: i });
      }
      function Wn(t, e, r, n) {
        r < t.line ? (t.line += n) : e < t.line && ((t.line = e), (t.ch = 0));
      }
      function Pn(t, e, r, n) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i],
            a = !0;
          if (o.ranges) {
            o.copied || ((o = t[i] = o.deepCopy()).copied = !0);
            for (var l = 0; l < o.ranges.length; l++)
              Wn(o.ranges[l].anchor, e, r, n), Wn(o.ranges[l].head, e, r, n);
          } else {
            for (var s = 0; s < o.changes.length; ++s) {
              var u = o.changes[s];
              if (r < u.from.line)
                (u.from = W(u.from.line + n, u.from.ch)),
                  (u.to = W(u.to.line + n, u.to.ch));
              else if (e <= u.to.line) {
                a = !1;
                break;
              }
            }
            a || (t.splice(0, i + 1), (i = 0));
          }
        }
      }
      function Hn(t, e) {
        var r = e.from.line,
          n = e.to.line,
          i = e.text.length - (n - r) - 1;
        Pn(t.done, r, n, i), Pn(t.undone, r, n, i);
      }
      function Fn(t, e, r, n) {
        var i = e,
          o = e;
        return (
          'number' == typeof e ? (o = T(t, I(t, e))) : (i = _(e)),
          null == i ? null : (n(o, i) && t.cm && Tr(t.cm, i, r), o)
        );
      }
      function jn(t) {
        var e = this;
        (this.lines = t), (this.parent = null);
        for (var r = 0, n = 0; n < t.length; ++n)
          (t[n].parent = e), (r += t[n].height);
        this.height = r;
      }
      function zn(t) {
        var e = this;
        this.children = t;
        for (var r = 0, n = 0, i = 0; i < t.length; ++i) {
          var o = t[i];
          (r += o.chunkSize()), (n += o.height), (o.parent = e);
        }
        (this.size = r), (this.height = n), (this.parent = null);
      }
      function In(t, e, r) {
        st(e) < ((t.curOp && t.curOp.scrollTop) || t.doc.scrollTop) && lr(t, r);
      }
      function Rn(t, e, r, n, o) {
        if (n && n.shared)
          return (function(t, e, r, n, i) {
            (n = f(n)).shared = !1;
            var o = [Rn(t, e, r, n, i)],
              a = o[0],
              l = n.widgetNode;
            return (
              Qr(t, function(t) {
                l && (n.widgetNode = l.cloneNode(!0)),
                  o.push(Rn(t, R(t, e), R(t, r), n, i));
                for (var s = 0; s < t.linked.length; ++s)
                  if (t.linked[s].isParent) return;
                a = v(o);
              }),
              new aa(o, a)
            );
          })(t, e, r, n, o);
        if (t.cm && !t.cm.curOp) return Cr(t.cm, Rn)(t, e, r, n, o);
        var a = new oa(t, o),
          l = P(e, r);
        if ((n && f(n, a, !1), l > 0 || (0 == l && !1 !== a.clearWhenEmpty)))
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
            rt(t, e.line, e, r, a) ||
            (e.line != r.line && rt(t, r.line, e, r, a))
          )
            throw new Error(
              'Inserting collapsed marker partially overlapping an existing one'
            );
          ko = !0;
        }
        a.addToHistory &&
          on(t, { from: e, to: r, origin: 'markText' }, t.sel, NaN);
        var s,
          u = e.line,
          c = t.cm;
        if (
          (t.iter(u, r.line + 1, function(t) {
            c &&
              a.collapsed &&
              !c.options.lineWrapping &&
              nt(t) == c.display.maxLine &&
              (s = !0),
              a.collapsed && u != e.line && A(t, 0),
              (function(t, e) {
                (t.markedSpans = t.markedSpans
                  ? t.markedSpans.concat([e])
                  : [e]),
                  e.marker.attachLine(t);
              })(
                t,
                new V(a, u == e.line ? e.ch : null, u == r.line ? r.ch : null)
              ),
              ++u;
          }),
          a.collapsed &&
            t.iter(e.line, r.line + 1, function(e) {
              at(t, e) && A(e, 0);
            }),
          a.clearOnEnter &&
            Oo(a, 'beforeCursorEnter', function() {
              return a.clear();
            }),
          a.readOnly &&
            ((So = !0),
            (t.history.done.length || t.history.undone.length) &&
              t.clearHistory()),
          a.collapsed && ((a.id = ++ia), (a.atomic = !0)),
          c)
        ) {
          if ((s && (c.curOp.updateMaxLine = !0), a.collapsed))
            Lr(c, e.line, r.line + 1);
          else if (
            a.className ||
            a.title ||
            a.startStyle ||
            a.endStyle ||
            a.css
          )
            for (var d = e.line; d <= r.line; d++) Tr(c, d, 'text');
          a.atomic && xn(c.doc), Zt(c, 'markerAdded', c, a);
        }
        return a;
      }
      function Bn(t) {
        return t.findMarks(W(t.first, 0), t.clipPos(W(t.lastLine())), function(
          t
        ) {
          return t.parent;
        });
      }
      function Vn(t) {
        for (
          var e = function(e) {
              var r = t[e],
                n = [r.primary.doc];
              Qr(r.primary.doc, function(t) {
                return n.push(t);
              });
              for (var i = 0; i < r.markers.length; i++) {
                var o = r.markers[i];
                -1 == h(n, o.doc) &&
                  ((o.parent = null), r.markers.splice(i--, 1));
              }
            },
            r = 0;
          r < t.length;
          r++
        )
          e(r);
      }
      function Un(t) {
        var e = this;
        if ((Gn(e), !vt(e, t) && !se(e.display, t))) {
          wt(t), Ui && (ua = +new Date());
          var r = Ue(e, t, !0),
            n = t.dataTransfer.files;
          if (r && !e.isReadOnly())
            if (n && n.length && window.FileReader && window.File)
              for (
                var i = n.length,
                  o = Array(i),
                  a = 0,
                  l = function(t, n) {
                    if (
                      !e.options.allowDropFileTypes ||
                      -1 != h(e.options.allowDropFileTypes, t.type)
                    ) {
                      var l = new FileReader();
                      (l.onload = Cr(e, function() {
                        var t = l.result;
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(t) && (t = ''),
                          (o[n] = t),
                          ++a == i)
                        ) {
                          var s = {
                            from: (r = R(e.doc, r)),
                            to: r,
                            text: e.doc.splitLines(
                              o.join(e.doc.lineSeparator())
                            ),
                            origin: 'paste',
                          };
                          On(e.doc, s), mn(e.doc, Vr(r, Ur(s)));
                        }
                      })),
                        l.readAsText(t);
                    }
                  },
                  s = 0;
                s < i;
                ++s
              )
                l(n[s], s);
            else {
              if (e.state.draggingText && e.doc.sel.contains(r) > -1)
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
                    bn(e.doc, Vr(r, r)),
                    c)
                  )
                    for (var f = 0; f < c.length; ++f)
                      Dn(e.doc, '', c[f].anchor, c[f].head, 'drag');
                  e.replaceSelection(u, 'around', 'paste'),
                    e.display.input.focus();
                }
              } catch (t) {}
            }
        }
      }
      function Gn(t) {
        t.display.dragCursor &&
          (t.display.lineSpace.removeChild(t.display.dragCursor),
          (t.display.dragCursor = null));
      }
      function qn(t) {
        if (document.getElementsByClassName)
          for (
            var e = document.getElementsByClassName('CodeMirror'), r = 0;
            r < e.length;
            r++
          ) {
            var n = e[r].CodeMirror;
            n && t(n);
          }
      }
      function Kn() {
        ca ||
          (!(function() {
            var t;
            Oo(window, 'resize', function() {
              null == t &&
                (t = setTimeout(function() {
                  (t = null), qn($n);
                }, 100));
            }),
              Oo(window, 'blur', function() {
                return qn(tr);
              });
          })(),
          (ca = !0));
      }
      function $n(t) {
        var e = t.display;
        (e.lastWrapHeight == e.wrapper.clientHeight &&
          e.lastWrapWidth == e.wrapper.clientWidth) ||
          ((e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null),
          (e.scrollbarsClipped = !1),
          t.setSize());
      }
      function Xn(t) {
        var e = t.split(/-(?!$)/);
        t = e[e.length - 1];
        for (var r, n, i, o, a = 0; a < e.length - 1; a++) {
          var l = e[a];
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
          r && (t = 'Alt-' + t),
          n && (t = 'Ctrl-' + t),
          o && (t = 'Cmd-' + t),
          i && (t = 'Shift-' + t),
          t
        );
      }
      function Yn(t) {
        var e = {};
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var n = t[r];
            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
            if ('...' == n) {
              delete t[r];
              continue;
            }
            for (var i = m(r.split(' '), Xn), o = 0; o < i.length; o++) {
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
      function Zn(t, e, r, n) {
        var i = (e = ei(e)).call ? e.call(t, n) : e[t];
        if (!1 === i) return 'nothing';
        if ('...' === i) return 'multi';
        if (null != i && r(i)) return 'handled';
        if (e.fallthrough) {
          if ('[object Array]' != Object.prototype.toString.call(e.fallthrough))
            return Zn(t, e.fallthrough, r, n);
          for (var o = 0; o < e.fallthrough.length; o++) {
            var a = Zn(t, e.fallthrough[o], r, n);
            if (a) return a;
          }
        }
      }
      function Qn(t) {
        var e = 'string' == typeof t ? t : fa[t.keyCode];
        return 'Ctrl' == e || 'Alt' == e || 'Shift' == e || 'Mod' == e;
      }
      function Jn(t, e, r) {
        var n = t;
        return (
          e.altKey && 'Alt' != n && (t = 'Alt-' + t),
          (lo ? e.metaKey : e.ctrlKey) && 'Ctrl' != n && (t = 'Ctrl-' + t),
          (lo ? e.ctrlKey : e.metaKey) && 'Cmd' != n && (t = 'Cmd-' + t),
          !r && e.shiftKey && 'Shift' != n && (t = 'Shift-' + t),
          t
        );
      }
      function ti(t, e) {
        if (Xi && 34 == t.keyCode && t.char) return !1;
        var r = fa[t.keyCode];
        return null != r && !t.altGraphKey && Jn(r, t, e);
      }
      function ei(t) {
        return 'string' == typeof t ? ga[t] : t;
      }
      function ri(t, e) {
        for (var r = t.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
          for (var o = e(r[i]); n.length && P(o.from, v(n).to) <= 0; ) {
            var a = n.pop();
            if (P(a.from, o.from) < 0) {
              o.from = a.from;
              break;
            }
          }
          n.push(o);
        }
        xr(t, function() {
          for (var e = n.length - 1; e >= 0; e--)
            Dn(t.doc, '', n[e].from, n[e].to, '+delete');
          sr(t);
        });
      }
      function ni(t, e, r) {
        var n = k(t.text, e + r, r);
        return n < 0 || n > t.text.length ? null : n;
      }
      function ii(t, e, r) {
        var n = ni(t, e.ch, r);
        return null == n ? null : new W(e.line, n, r < 0 ? 'after' : 'before');
      }
      function oi(t, e, r, n, i) {
        if (t) {
          var o = dt(r, e.doc.direction);
          if (o) {
            var a,
              l = i < 0 ? v(o) : o[0],
              s = i < 0 == (1 == l.level) ? 'after' : 'before';
            if (l.level > 0 || 'rtl' == e.doc.direction) {
              var u = ye(e, r);
              a = i < 0 ? r.text.length - 1 : 0;
              var c = be(e, u, a).top;
              (a = L(
                function(t) {
                  return be(e, u, t).top == c;
                },
                i < 0 == (1 == l.level) ? l.from : l.to - 1,
                a
              )),
                'before' == s && (a = ni(r, a, 1));
            } else a = i < 0 ? l.to : l.from;
            return new W(n, a, s);
          }
        }
        return new W(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after');
      }
      function ai(t, e) {
        var r = T(t.doc, e),
          n = nt(r);
        return n != r && (e = _(n)), oi(!0, t, n, e, 1);
      }
      function li(t, e) {
        var r = T(t.doc, e),
          n = (function(t) {
            for (var e; (e = et(t)); ) t = e.find(1, !0).line;
            return t;
          })(r);
        return n != r && (e = _(n)), oi(!0, t, r, e, -1);
      }
      function si(t, e) {
        var r = ai(t, e.line),
          n = T(t.doc, r.line),
          i = dt(n, t.doc.direction);
        if (!i || 0 == i[0].level) {
          var o = Math.max(0, n.text.search(/\S/)),
            a = e.line == r.line && e.ch <= o && e.ch;
          return W(r.line, a ? 0 : o, r.sticky);
        }
        return r;
      }
      function ui(t, e, r) {
        if ('string' == typeof e && !(e = va[e])) return !1;
        t.display.input.ensurePolled();
        var n = t.display.shift,
          i = !1;
        try {
          t.isReadOnly() && (t.state.suppressEdits = !0),
            r && (t.display.shift = !1),
            (i = e(t) != vo);
        } finally {
          (t.display.shift = n), (t.state.suppressEdits = !1);
        }
        return i;
      }
      function ci(t, e, r, n) {
        var i = t.state.keySeq;
        if (i) {
          if (Qn(e)) return 'handled';
          ma.set(50, function() {
            t.state.keySeq == i &&
              ((t.state.keySeq = null), t.display.input.reset());
          }),
            (e = i + ' ' + e);
        }
        var o = (function(t, e, r) {
          for (var n = 0; n < t.state.keyMaps.length; n++) {
            var i = Zn(e, t.state.keyMaps[n], r, t);
            if (i) return i;
          }
          return (
            (t.options.extraKeys && Zn(e, t.options.extraKeys, r, t)) ||
            Zn(e, t.options.keyMap, r, t)
          );
        })(t, e, n);
        return (
          'multi' == o && (t.state.keySeq = e),
          'handled' == o && Zt(t, 'keyHandled', t, e, r),
          ('handled' != o && 'multi' != o) || (wt(r), Ye(t)),
          i && !o && /\'$/.test(e) ? (wt(r), !0) : !!o
        );
      }
      function fi(t, e) {
        var r = ti(e, !0);
        return (
          !!r &&
          (e.shiftKey && !t.state.keySeq
            ? ci(t, 'Shift-' + r, e, function(e) {
                return ui(t, e, !0);
              }) ||
              ci(t, r, e, function(e) {
                if ('string' == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                  return ui(t, e);
              })
            : ci(t, r, e, function(e) {
                return ui(t, e);
              }))
        );
      }
      function di(t) {
        var e = this;
        if (((e.curOp.focus = l()), !vt(e, t))) {
          Ui && Gi < 11 && 27 == t.keyCode && (t.returnValue = !1);
          var r = t.keyCode;
          e.display.shift = 16 == r || t.shiftKey;
          var n = fi(e, t);
          Xi &&
            ((ya = n ? r : null),
            !n &&
              88 == r &&
              !Eo &&
              (ro ? t.metaKey : t.ctrlKey) &&
              e.replaceSelection('', null, 'cut')),
            18 != r ||
              /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) ||
              (function(t) {
                function e(t) {
                  (18 != t.keyCode && t.altKey) ||
                    (uo(r, 'CodeMirror-crosshair'),
                    pt(document, 'keyup', e),
                    pt(document, 'mouseover', e));
                }
                var r = t.display.lineDiv;
                s(r, 'CodeMirror-crosshair');
                Oo(document, 'keyup', e), Oo(document, 'mouseover', e);
              })(e);
        }
      }
      function hi(t) {
        16 == t.keyCode && (this.doc.sel.shift = !1), vt(this, t);
      }
      function pi(t) {
        var e = this;
        if (
          !(
            se(e.display, t) ||
            vt(e, t) ||
            (t.ctrlKey && !t.altKey) ||
            (ro && t.metaKey)
          )
        ) {
          var r = t.keyCode,
            n = t.charCode;
          if (Xi && r == ya) return (ya = null), void wt(t);
          if (!Xi || (t.which && !(t.which < 10)) || !fi(e, t)) {
            var i = String.fromCharCode(null == n ? r : n);
            '\b' != i &&
              ((function(t, e, r) {
                return ci(t, "'" + r + "'", e, function(e) {
                  return ui(t, e, !0);
                });
              })(e, t, i) ||
                e.display.input.onKeyPress(t));
          }
        }
      }
      function gi(t) {
        var e = this,
          r = e.display;
        if (!(vt(e, t) || (r.activeTouch && r.input.supportsTouch())))
          if ((r.input.ensurePolled(), (r.shift = t.shiftKey), se(r, t)))
            qi ||
              ((r.scroller.draggable = !1),
              setTimeout(function() {
                return (r.scroller.draggable = !0);
              }, 100));
          else if (!yi(e, t)) {
            var n = Ue(e, t),
              i = Lt(t),
              o = n
                ? (function(t, e) {
                    var r = +new Date();
                    return xa && xa.compare(r, t, e)
                      ? ((wa = xa = null), 'triple')
                      : wa && wa.compare(r, t, e)
                        ? ((xa = new ba(r, t, e)), (wa = null), 'double')
                        : ((wa = new ba(r, t, e)), (xa = null), 'single');
                  })(n, i)
                : 'single';
            window.focus(),
              1 == i && e.state.selectingText && e.state.selectingText(t),
              (n &&
                (function(t, e, r, n, i) {
                  var o = 'Click';
                  'double' == n
                    ? (o = 'Double' + o)
                    : 'triple' == n && (o = 'Triple' + o);
                  return (
                    (o = (1 == e ? 'Left' : 2 == e ? 'Middle' : 'Right') + o),
                    ci(t, Jn(o, i), i, function(e) {
                      if (('string' == typeof e && (e = va[e]), !e)) return !1;
                      var n = !1;
                      try {
                        t.isReadOnly() && (t.state.suppressEdits = !0),
                          (n = e(t, r) != vo);
                      } finally {
                        t.state.suppressEdits = !1;
                      }
                      return n;
                    })
                  );
                })(e, i, n, o, t)) ||
                (1 == i
                  ? n
                    ? (function(t, e, r, n) {
                        Ui ? setTimeout(c(Ze, t), 0) : (t.curOp.focus = l());
                        var i,
                          o = (function(t, e, r) {
                            var n = t.getOption('configureMouse'),
                              i = n ? n(t, e, r) : {};
                            if (null == i.unit) {
                              var o = no ? r.shiftKey && r.metaKey : r.altKey;
                              i.unit = o
                                ? 'rectangle'
                                : 'single' == e
                                  ? 'char'
                                  : 'double' == e ? 'word' : 'line';
                            }
                            (null == i.extend || t.doc.extend) &&
                              (i.extend = t.doc.extend || r.shiftKey);
                            null == i.addNew &&
                              (i.addNew = ro ? r.metaKey : r.ctrlKey);
                            null == i.moveOnDrag &&
                              (i.moveOnDrag = !(ro ? r.altKey : r.ctrlKey));
                            return i;
                          })(t, r, n),
                          a = t.doc.sel;
                        t.options.dragDrop &&
                        Ao &&
                        !t.isReadOnly() &&
                        'single' == r &&
                        (i = a.contains(e)) > -1 &&
                        (P((i = a.ranges[i]).from(), e) < 0 || e.xRel > 0) &&
                        (P(i.to(), e) > 0 || e.xRel < 0)
                          ? (function(t, e, r, n) {
                              var i = t.display,
                                o = !1,
                                a = Cr(t, function(e) {
                                  qi && (i.scroller.draggable = !1),
                                    (t.state.draggingText = !1),
                                    pt(document, 'mouseup', a),
                                    pt(document, 'mousemove', l),
                                    pt(i.scroller, 'dragstart', s),
                                    pt(i.scroller, 'drop', a),
                                    o ||
                                      (wt(e),
                                      n.addNew ||
                                        hn(t.doc, r, null, null, n.extend),
                                      qi || (Ui && 9 == Gi)
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
                              qi && (i.scroller.draggable = !0);
                              (t.state.draggingText = a),
                                (a.copy = !n.moveOnDrag),
                                i.scroller.dragDrop && i.scroller.dragDrop();
                              Oo(document, 'mouseup', a),
                                Oo(document, 'mousemove', l),
                                Oo(i.scroller, 'dragstart', s),
                                Oo(i.scroller, 'drop', a),
                                Qe(t),
                                setTimeout(function() {
                                  return i.input.focus();
                                }, 20);
                            })(t, n, e, o)
                          : (function(t, e, r, n) {
                              function i(e) {
                                if (0 != P(m, e))
                                  if (((m = e), 'rectangle' == n.unit)) {
                                    for (
                                      var i = [],
                                        o = t.options.tabSize,
                                        a = d(T(u, r.line).text, r.ch, o),
                                        l = d(T(u, e.line).text, e.ch, o),
                                        s = Math.min(a, l),
                                        g = Math.max(a, l),
                                        v = Math.min(r.line, e.line),
                                        y = Math.min(
                                          t.lastLine(),
                                          Math.max(r.line, e.line)
                                        );
                                      v <= y;
                                      v++
                                    ) {
                                      var b = T(u, v).text,
                                        w = p(b, s, o);
                                      s == g
                                        ? i.push(new ra(W(v, w), W(v, w)))
                                        : b.length > w &&
                                          i.push(
                                            new ra(W(v, w), W(v, p(b, g, o)))
                                          );
                                    }
                                    i.length || i.push(new ra(r, r)),
                                      yn(
                                        u,
                                        Br(h.ranges.slice(0, f).concat(i), f),
                                        { origin: '*mouse', scroll: !1 }
                                      ),
                                      t.scrollIntoView(e);
                                  } else {
                                    var x,
                                      C = c,
                                      S = vi(t, e, n.unit),
                                      k = C.anchor;
                                    P(S.anchor, k) > 0
                                      ? ((x = S.head),
                                        (k = z(C.from(), S.anchor)))
                                      : ((x = S.anchor),
                                        (k = j(C.to(), S.head)));
                                    var L = h.ranges.slice(0);
                                    (L[f] = (function(t, e) {
                                      var r = e.anchor,
                                        n = e.head,
                                        i = T(t.doc, r.line);
                                      if (0 == P(r, n) && r.sticky == n.sticky)
                                        return e;
                                      var o = dt(i);
                                      if (!o) return e;
                                      var a = ft(o, r.ch, r.sticky),
                                        l = o[a];
                                      if (l.from != r.ch && l.to != r.ch)
                                        return e;
                                      var s =
                                        a +
                                        ((l.from == r.ch) == (1 != l.level)
                                          ? 0
                                          : 1);
                                      if (0 == s || s == o.length) return e;
                                      var u;
                                      if (n.line != r.line)
                                        u =
                                          (n.line - r.line) *
                                            ('ltr' == t.doc.direction
                                              ? 1
                                              : -1) >
                                          0;
                                      else {
                                        var c = ft(o, n.ch, n.sticky),
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
                                        ? e
                                        : new ra(new W(r.line, p, g), n);
                                    })(t, new ra(R(u, k), x))),
                                      yn(u, Br(L, f), yo);
                                  }
                              }
                              function o(e) {
                                var r = ++b,
                                  a = Ue(t, e, !0, 'rectangle' == n.unit);
                                if (a)
                                  if (0 != P(a, m)) {
                                    (t.curOp.focus = l()), i(a);
                                    var c = nr(s, u);
                                    (a.line >= c.to || a.line < c.from) &&
                                      setTimeout(
                                        Cr(t, function() {
                                          b == r && o(e);
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
                                        Cr(t, function() {
                                          b == r &&
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
                                g = h.ranges;
                              n.addNew && !n.extend
                                ? ((f = u.sel.contains(r)),
                                  (c = f > -1 ? g[f] : new ra(r, r)))
                                : ((c = u.sel.primary()),
                                  (f = u.sel.primIndex));
                              if ('rectangle' == n.unit)
                                n.addNew || (c = new ra(r, r)),
                                  (r = Ue(t, e, !0, !0)),
                                  (f = -1);
                              else {
                                var v = vi(t, r, n.unit);
                                c = n.extend
                                  ? dn(c, v.anchor, v.head, n.extend)
                                  : v;
                              }
                              n.addNew
                                ? -1 == f
                                  ? ((f = g.length),
                                    yn(u, Br(g.concat([c]), f), {
                                      scroll: !1,
                                      origin: '*mouse',
                                    }))
                                  : g.length > 1 &&
                                    g[f].empty() &&
                                    'char' == n.unit &&
                                    !n.extend
                                    ? (yn(
                                        u,
                                        Br(
                                          g.slice(0, f).concat(g.slice(f + 1)),
                                          0
                                        ),
                                        { scroll: !1, origin: '*mouse' }
                                      ),
                                      (h = u.sel))
                                    : gn(u, f, c, yo)
                                : ((f = 0),
                                  yn(u, new ea([c], 0), yo),
                                  (h = u.sel));
                              var m = r;
                              var y = s.wrapper.getBoundingClientRect(),
                                b = 0;
                              var w = Cr(t, function(t) {
                                  Lt(t) ? o(t) : a(t);
                                }),
                                x = Cr(t, a);
                              (t.state.selectingText = x),
                                Oo(document, 'mousemove', w),
                                Oo(document, 'mouseup', x);
                            })(t, n, e, o);
                      })(e, n, o, t)
                    : kt(t) == r.scroller && wt(t)
                  : 2 == i
                    ? (n && hn(e.doc, n),
                      setTimeout(function() {
                        return r.input.focus();
                      }, 20))
                    : 3 == i && (so ? bi(e, t) : Qe(e)));
          }
      }
      function vi(t, e, r) {
        if ('char' == r) return new ra(e, e);
        if ('word' == r) return t.findWordAt(e);
        if ('line' == r)
          return new ra(W(e.line, 0), R(t.doc, W(e.line + 1, 0)));
        var n = r(t, e);
        return new ra(n.from, n.to);
      }
      function mi(t, e, r, n) {
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
        n && wt(e);
        var a = t.display,
          l = a.lineDiv.getBoundingClientRect();
        if (o > l.bottom || !yt(t, r)) return Ct(e);
        o -= l.top - a.viewOffset;
        for (var s = 0; s < t.options.gutters.length; ++s) {
          var u = a.gutters.childNodes[s];
          if (u && u.getBoundingClientRect().right >= i) {
            return gt(t, r, t, N(t.doc, o), t.options.gutters[s], e), Ct(e);
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
          vt(t, e, 'contextmenu') ||
          t.display.input.onContextMenu(e);
      }
      function wi(t) {
        (t.display.wrapper.className =
          t.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
          t.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
          ke(t);
      }
      function xi(t) {
        Fr(t), Lr(t), ir(t);
      }
      function Ci(t, e, r) {
        if (!e != !(r && r != Ca)) {
          var n = t.display.dragFunctions,
            i = e ? Oo : pt;
          i(t.display.scroller, 'dragstart', n.start),
            i(t.display.scroller, 'dragenter', n.enter),
            i(t.display.scroller, 'dragover', n.over),
            i(t.display.scroller, 'dragleave', n.leave),
            i(t.display.scroller, 'drop', n.drop);
        }
      }
      function Si(t) {
        t.options.lineWrapping
          ? (s(t.display.wrapper, 'CodeMirror-wrap'),
            (t.display.sizer.style.minWidth = ''),
            (t.display.sizerWidth = null))
          : (uo(t.display.wrapper, 'CodeMirror-wrap'), ct(t)),
          Ve(t),
          Lr(t),
          ke(t),
          setTimeout(function() {
            return vr(t);
          }, 100);
      }
      function ki(t, e) {
        var o = this;
        if (!(this instanceof ki)) return new ki(t, e);
        (this.options = e = e ? f(e) : {}), f(Sa, e, !1), jr(e);
        var a = e.value;
        'string' == typeof a &&
          (a = new sa(a, e.mode, null, e.lineSeparator, e.direction)),
          (this.doc = a);
        var l = new ki.inputStyles[e.inputStyle](this),
          s = (this.display = new function(t, e, r) {
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
                'position: absolute; height: ' + go + 'px; width: 1px;'
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
              Ui &&
                Gi < 8 &&
                ((o.gutters.style.zIndex = -1),
                (o.scroller.style.paddingRight = 0)),
              qi || (Ii && eo) || (o.scroller.draggable = !0),
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
              r.init(o);
          }(t, a, l));
        (s.wrapper.CodeMirror = this),
          Fr(this),
          wi(this),
          e.lineWrapping &&
            (this.display.wrapper.className += ' CodeMirror-wrap'),
          yr(this),
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
          Ui &&
            Gi < 11 &&
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
              var r = e.left - t.left,
                n = e.top - t.top;
              return r * r + n * n > 400;
            }
            var o = t.display;
            Oo(o.scroller, 'mousedown', Cr(t, gi)),
              Ui && Gi < 11
                ? Oo(
                    o.scroller,
                    'dblclick',
                    Cr(t, function(e) {
                      if (!vt(t, e)) {
                        var r = Ue(t, e);
                        if (r && !yi(t, e) && !se(t.display, e)) {
                          wt(e);
                          var n = t.findWordAt(r);
                          hn(t.doc, n.anchor, n.head);
                        }
                      }
                    })
                  )
                : Oo(o.scroller, 'dblclick', function(e) {
                    return vt(t, e) || wt(e);
                  });
            so ||
              Oo(o.scroller, 'contextmenu', function(e) {
                return bi(t, e);
              });
            var a,
              l = { end: 0 };
            Oo(o.scroller, 'touchstart', function(e) {
              if (
                !vt(t, e) &&
                !(function(t) {
                  if (1 != t.touches.length) return !1;
                  var e = t.touches[0];
                  return e.radiusX <= 1 && e.radiusY <= 1;
                })(e) &&
                !yi(t, e)
              ) {
                o.input.ensurePolled(), clearTimeout(a);
                var r = +new Date();
                (o.activeTouch = {
                  start: r,
                  moved: !1,
                  prev: r - l.end <= 300 ? l : null,
                }),
                  1 == e.touches.length &&
                    ((o.activeTouch.left = e.touches[0].pageX),
                    (o.activeTouch.top = e.touches[0].pageY));
              }
            }),
              Oo(o.scroller, 'touchmove', function() {
                o.activeTouch && (o.activeTouch.moved = !0);
              }),
              Oo(o.scroller, 'touchend', function(r) {
                var n = o.activeTouch;
                if (
                  n &&
                  !se(o, r) &&
                  null != n.left &&
                  !n.moved &&
                  new Date() - n.start < 300
                ) {
                  var a,
                    l = t.coordsChar(o.activeTouch, 'page');
                  (a =
                    !n.prev || i(n, n.prev)
                      ? new ra(l, l)
                      : !n.prev.prev || i(n, n.prev.prev)
                        ? t.findWordAt(l)
                        : new ra(W(l.line, 0), R(t.doc, W(l.line + 1, 0)))),
                    t.setSelection(a.anchor, a.head),
                    t.focus(),
                    wt(r);
                }
                e();
              }),
              Oo(o.scroller, 'touchcancel', e),
              Oo(o.scroller, 'scroll', function() {
                o.scroller.clientHeight &&
                  (dr(t, o.scroller.scrollTop),
                  pr(t, o.scroller.scrollLeft, !0),
                  gt(t, 'scroll', t));
              }),
              Oo(o.scroller, 'mousewheel', function(e) {
                return Rr(t, e);
              }),
              Oo(o.scroller, 'DOMMouseScroll', function(e) {
                return Rr(t, e);
              }),
              Oo(o.wrapper, 'scroll', function() {
                return (o.wrapper.scrollTop = o.wrapper.scrollLeft = 0);
              }),
              (o.dragFunctions = {
                enter: function(e) {
                  vt(t, e) || St(e);
                },
                over: function(e) {
                  vt(t, e) ||
                    (!(function(t, e) {
                      var i = Ue(t, e);
                      if (i) {
                        var o = document.createDocumentFragment();
                        $e(t, i, o),
                          t.display.dragCursor ||
                            ((t.display.dragCursor = n(
                              'div',
                              null,
                              'CodeMirror-cursors CodeMirror-dragcursors'
                            )),
                            t.display.lineSpace.insertBefore(
                              t.display.dragCursor,
                              t.display.cursorDiv
                            )),
                          r(t.display.dragCursor, o);
                      }
                    })(t, e),
                    St(e));
                },
                start: function(e) {
                  return (function(t, e) {
                    if (Ui && (!t.state.draggingText || +new Date() - ua < 100))
                      St(e);
                    else if (
                      !vt(t, e) &&
                      !se(t.display, e) &&
                      (e.dataTransfer.setData('Text', t.getSelection()),
                      (e.dataTransfer.effectAllowed = 'copyMove'),
                      e.dataTransfer.setDragImage && !Yi)
                    ) {
                      var r = n(
                        'img',
                        null,
                        null,
                        'position: fixed; left: 0; top: 0;'
                      );
                      (r.src =
                        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                        Xi &&
                          ((r.width = r.height = 1),
                          t.display.wrapper.appendChild(r),
                          (r._top = r.offsetTop)),
                        e.dataTransfer.setDragImage(r, 0, 0),
                        Xi && r.parentNode.removeChild(r);
                    }
                  })(t, e);
                },
                drop: Cr(t, Un),
                leave: function(e) {
                  vt(t, e) || Gn(t);
                },
              });
            var s = o.input.getField();
            Oo(s, 'keyup', function(e) {
              return hi.call(t, e);
            }),
              Oo(s, 'keydown', Cr(t, di)),
              Oo(s, 'keypress', Cr(t, pi)),
              Oo(s, 'focus', function(e) {
                return Je(t, e);
              }),
              Oo(s, 'blur', function(e) {
                return tr(t, e);
              });
          })(this),
          Kn(),
          br(this),
          (this.curOp.forceUpdate = !0),
          Jr(this, a),
          (e.autofocus && !eo) || this.hasFocus()
            ? setTimeout(c(Je, this), 20)
            : tr(this);
        for (var u in ka) ka.hasOwnProperty(u) && ka[u](o, e[u], Ca);
        or(this), e.finishInit && e.finishInit(this);
        for (var d = 0; d < La.length; ++d) La[d](o);
        wr(this),
          qi &&
            e.lineWrapping &&
            'optimizelegibility' == getComputedStyle(s.lineDiv).textRendering &&
            (s.lineDiv.style.textRendering = 'auto');
      }
      function Li(t, e, r, n) {
        var i,
          o = t.doc;
        null == r && (r = 'add'),
          'smart' == r && (o.mode.indent ? (i = Ht(t, e).state) : (r = 'prev'));
        var a = t.options.tabSize,
          l = T(o, e),
          s = d(l.text, null, a);
        l.stateAfter && (l.stateAfter = null);
        var u,
          c = l.text.match(/^\s*/)[0];
        if (n || /\S/.test(l.text)) {
          if (
            'smart' == r &&
            ((u = o.mode.indent(i, l.text.slice(c.length), l.text)) == vo ||
              u > 150)
          ) {
            if (!n) return;
            r = 'prev';
          }
        } else (u = 0), (r = 'not');
        'prev' == r
          ? (u = e > o.first ? d(T(o, e - 1).text, null, a) : 0)
          : 'add' == r
            ? (u = s + t.options.indentUnit)
            : 'subtract' == r
              ? (u = s - t.options.indentUnit)
              : 'number' == typeof r && (u = s + r),
          (u = Math.max(0, u));
        var f = '',
          h = 0;
        if (t.options.indentWithTabs)
          for (var p = Math.floor(u / a); p; --p) (h += a), (f += '\t');
        if ((h < u && (f += g(u - h)), f != c))
          return (
            Dn(o, f, W(e, 0), W(e, c.length), '+input'),
            (l.stateAfter = null),
            !0
          );
        for (var v = 0; v < o.sel.ranges.length; v++) {
          var m = o.sel.ranges[v];
          if (m.head.line == e && m.head.ch < c.length) {
            var y = W(e, c.length);
            gn(o, v, new ra(y, y));
            break;
          }
        }
      }
      function Ti(t) {
        Ta = t;
      }
      function Mi(t, e, r, n, i) {
        var o = t.doc;
        (t.display.shift = !1), n || (n = o.sel);
        var a = t.state.pasteIncoming || 'paste' == i,
          l = _o(e),
          s = null;
        if (a && n.ranges.length > 1)
          if (Ta && Ta.text.join('\n') == e) {
            if (n.ranges.length % Ta.text.length == 0) {
              s = [];
              for (var u = 0; u < Ta.text.length; u++)
                s.push(o.splitLines(Ta.text[u]));
            }
          } else
            l.length == n.ranges.length &&
              t.options.pasteLinesPerSelection &&
              (s = m(l, function(t) {
                return [t];
              }));
        for (var c, f = n.ranges.length - 1; f >= 0; f--) {
          var d = n.ranges[f],
            h = d.from(),
            p = d.to();
          d.empty() &&
            (r && r > 0
              ? (h = W(h.line, h.ch - r))
              : t.state.overwrite && !a
                ? (p = W(
                    p.line,
                    Math.min(T(o, p.line).text.length, p.ch + v(l).length)
                  ))
                : Ta &&
                  Ta.lineWise &&
                  Ta.text.join('\n') == e &&
                  (h = p = W(h.line, 0))),
            (c = t.curOp.updateInput);
          var g = {
            from: h,
            to: p,
            text: s ? s[f % s.length] : l,
            origin: i || (a ? 'paste' : t.state.cutIncoming ? 'cut' : '+input'),
          };
          On(t.doc, g), Zt(t, 'inputRead', t, g);
        }
        e && !a && Ai(t, e),
          sr(t),
          (t.curOp.updateInput = c),
          (t.curOp.typing = !0),
          (t.state.pasteIncoming = t.state.cutIncoming = !1);
      }
      function Oi(t, e) {
        var r = t.clipboardData && t.clipboardData.getData('Text');
        if (r)
          return (
            t.preventDefault(),
            e.isReadOnly() ||
              e.options.disableInput ||
              xr(e, function() {
                return Mi(e, r, 0, null, 'paste');
              }),
            !0
          );
      }
      function Ai(t, e) {
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
      function _i(t) {
        for (var e = [], r = [], n = 0; n < t.doc.sel.ranges.length; n++) {
          var i = t.doc.sel.ranges[n].head.line,
            o = { anchor: W(i, 0), head: W(i + 1, 0) };
          r.push(o), e.push(t.getRange(o.anchor, o.head));
        }
        return { text: e, ranges: r };
      }
      function Ni(t, e) {
        t.setAttribute('autocorrect', 'off'),
          t.setAttribute('autocapitalize', 'off'),
          t.setAttribute('spellcheck', !!e);
      }
      function Ei() {
        var t = n(
            'textarea',
            null,
            null,
            'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none'
          ),
          e = n(
            'div',
            [t],
            null,
            'overflow: hidden; position: relative; width: 3px; height: 0px;'
          );
        return (
          qi ? (t.style.width = '1000px') : t.setAttribute('wrap', 'off'),
          Ji && (t.style.border = '1px solid black'),
          Ni(t),
          e
        );
      }
      function Di(t, e, r, n, i) {
        function o(n) {
          var o;
          if (
            null ==
            (o = i
              ? (function(t, e, r, n) {
                  var i = dt(e, t.doc.direction);
                  if (!i) return ii(e, r, n);
                  r.ch >= e.text.length
                    ? ((r.ch = e.text.length), (r.sticky = 'before'))
                    : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'));
                  var o = ft(i, r.ch, r.sticky),
                    a = i[o];
                  if (
                    'ltr' == t.doc.direction &&
                    a.level % 2 == 0 &&
                    (n > 0 ? a.to > r.ch : a.from < r.ch)
                  )
                    return ii(e, r, n);
                  var l,
                    s = function(t, r) {
                      return ni(e, t instanceof W ? t.ch : t, r);
                    },
                    u = function(r) {
                      return t.options.lineWrapping
                        ? ((l = l || ye(t, e)), He(t, e, l, r))
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
                      return new W(r.line, d, h);
                    }
                  }
                  var p = function(t, e, n) {
                      for (
                        var o = function(t, e) {
                          return e
                            ? new W(r.line, s(t, 1), 'before')
                            : new W(r.line, t, 'after');
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
                    g = p(o + n, n, c);
                  if (g) return g;
                  var v = n > 0 ? c.end : s(c.begin, -1);
                  return null == v ||
                    (n > 0 && v == e.text.length) ||
                    !(g = p(n > 0 ? 0 : i.length - 1, n, u(v)))
                    ? null
                    : g;
                })(t.cm, s, e, r)
              : ii(s, e, r))
          ) {
            if (
              n ||
              !(function() {
                var n = e.line + r;
                return (
                  !(n < t.first || n >= t.first + t.size) &&
                  ((e = new W(n, e.ch, e.sticky)), (s = T(t, n)))
                );
              })()
            )
              return !1;
            e = oi(i, t.cm, s, e.line, r);
          } else e = o;
          return !0;
        }
        var a = e,
          l = r,
          s = T(t, e.line);
        if ('char' == n) o();
        else if ('column' == n) o(!0);
        else if ('word' == n || 'group' == n)
          for (
            var u = null,
              c = 'group' == n,
              f = t.cm && t.cm.getHelper(e, 'wordChars'),
              d = !0;
            !(r < 0) || o(!d);
            d = !1
          ) {
            var h = s.text.charAt(e.ch) || '\n',
              p = x(h, f)
                ? 'w'
                : c && '\n' == h ? 'n' : !c || /\s/.test(h) ? null : 'p';
            if ((!c || d || p || (p = 's'), u && u != p)) {
              r < 0 && ((r = 1), o(), (e.sticky = 'after'));
              break;
            }
            if ((p && (u = p), r > 0 && !o(!d))) break;
          }
        var g = kn(t, e, a, l, !0);
        return H(a, g) && (g.hitSide = !0), g;
      }
      function Wi(t, e, r, n) {
        var i,
          o = t.doc,
          a = e.left;
        if ('page' == n) {
          var l = Math.min(
              t.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            s = Math.max(l - 0.5 * je(t.display), 3);
          i = (r > 0 ? e.bottom : e.top) + r * s;
        } else 'line' == n && (i = r > 0 ? e.bottom + 3 : e.top - 3);
        for (var u; (u = We(t, a, i)).outside; ) {
          if (r < 0 ? i <= 0 : i >= o.height) {
            u.hitSide = !0;
            break;
          }
          i += 5 * r;
        }
        return u;
      }
      function Pi(t, e) {
        var r = me(t, e.line);
        if (!r || r.hidden) return null;
        var n = T(t.doc, e.line),
          i = ge(r, n, e.line),
          o = dt(n, t.doc.direction),
          a = 'left';
        if (o) {
          a = ft(o, e.ch) % 2 ? 'right' : 'left';
        }
        var l = we(i.map, e.ch, a);
        return (l.offset = 'right' == l.collapse ? l.end : l.start), l;
      }
      function Hi(t, e) {
        return e && (t.bad = !0), t;
      }
      function Fi(t, e, r) {
        var n;
        if (e == t.display.lineDiv) {
          if (!(n = t.display.lineDiv.childNodes[r]))
            return Hi(t.clipPos(W(t.display.viewTo - 1)), !0);
          (e = null), (r = 0);
        } else
          for (n = e; ; n = n.parentNode) {
            if (!n || n == t.display.lineDiv) return null;
            if (n.parentNode && n.parentNode == t.display.lineDiv) break;
          }
        for (var i = 0; i < t.display.view.length; i++) {
          var o = t.display.view[i];
          if (o.node == n)
            return (function(t, e, r) {
              function n(e, r, n) {
                for (var i = -1; i < (f ? f.length : 0); i++)
                  for (
                    var o = i < 0 ? c.map : f[i], a = 0;
                    a < o.length;
                    a += 3
                  ) {
                    var l = o[a + 2];
                    if (l == e || l == r) {
                      var s = _(i < 0 ? t.line : t.rest[i]),
                        u = o[a] + n;
                      return (
                        (n < 0 || l != e) && (u = o[a + (n ? 1 : 0)]), W(s, u)
                      );
                    }
                  }
              }
              var i = t.text.firstChild,
                o = !1;
              if (!e || !a(i, e)) return Hi(W(_(t.line), 0), !0);
              if (e == i && ((o = !0), (e = i.childNodes[r]), (r = 0), !e)) {
                var l = t.rest ? v(t.rest) : t.line;
                return Hi(W(_(l), l.text.length), o);
              }
              var s = 3 == e.nodeType ? e : null,
                u = e;
              s ||
                1 != e.childNodes.length ||
                3 != e.firstChild.nodeType ||
                ((s = e.firstChild), r && (r = s.nodeValue.length));
              for (; u.parentNode != i; ) u = u.parentNode;
              var c = t.measure,
                f = c.maps;
              var d = n(s, u, r);
              if (d) return Hi(d, o);
              for (
                var h = u.nextSibling, p = s ? s.nodeValue.length - r : 0;
                h;
                h = h.nextSibling
              ) {
                if ((d = n(h, h.firstChild, 0)))
                  return Hi(W(d.line, d.ch - p), o);
                p += h.textContent.length;
              }
              for (var g = u.previousSibling, m = r; g; g = g.previousSibling) {
                if ((d = n(g, g.firstChild, -1)))
                  return Hi(W(d.line, d.ch + m), o);
                m += g.textContent.length;
              }
            })(o, e, r);
        }
      }
      var ji = navigator.userAgent,
        zi = navigator.platform,
        Ii = /gecko\/\d/i.test(ji),
        Ri = /MSIE \d/.test(ji),
        Bi = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ji),
        Vi = /Edge\/(\d+)/.exec(ji),
        Ui = Ri || Bi || Vi,
        Gi = Ui && (Ri ? document.documentMode || 6 : +(Vi || Bi)[1]),
        qi = !Vi && /WebKit\//.test(ji),
        Ki = qi && /Qt\/\d+\.\d+/.test(ji),
        $i = !Vi && /Chrome\//.test(ji),
        Xi = /Opera\//.test(ji),
        Yi = /Apple Computer/.test(navigator.vendor),
        Zi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ji),
        Qi = /PhantomJS/.test(ji),
        Ji = !Vi && /AppleWebKit/.test(ji) && /Mobile\/\w+/.test(ji),
        to = /Android/.test(ji),
        eo =
          Ji ||
          to ||
          /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ji),
        ro = Ji || /Mac/.test(zi),
        no = /\bCrOS\b/.test(ji),
        io = /win/i.test(zi),
        oo = Xi && ji.match(/Version\/(\d*\.\d*)/);
      oo && (oo = Number(oo[1])), oo && oo >= 15 && ((Xi = !1), (qi = !0));
      var ao,
        lo = ro && (Ki || (Xi && (null == oo || oo < 12.11))),
        so = Ii || (Ui && Gi >= 9),
        uo = function(e, r) {
          var n = e.className,
            i = t(r).exec(n);
          if (i) {
            var o = n.slice(i.index + i[0].length);
            e.className = n.slice(0, i.index) + (o ? i[1] + o : '');
          }
        };
      ao = document.createRange
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
      var co = function(t) {
        t.select();
      };
      Ji
        ? (co = function(t) {
            (t.selectionStart = 0), (t.selectionEnd = t.value.length);
          })
        : Ui &&
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
        go = 30,
        vo = {
          toString: function() {
            return 'CodeMirror.Pass';
          },
        },
        mo = { scroll: !1 },
        yo = { origin: '*mouse' },
        bo = { origin: '+move' },
        wo = [''],
        xo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
        Co = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
        So = !1,
        ko = !1,
        Lo = null,
        To = (function() {
          function t(t) {
            return t <= 247
              ? r.charAt(t)
              : 1424 <= t && t <= 1524
                ? 'R'
                : 1536 <= t && t <= 1785
                  ? n.charAt(t - 1536)
                  : 1774 <= t && t <= 2220
                    ? 'r'
                    : 8192 <= t && t <= 8203 ? 'w' : 8204 == t ? 'b' : 'L';
          }
          function e(t, e, r) {
            (this.level = t), (this.from = e), (this.to = r);
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
              f.push(t(r.charCodeAt(d)));
            for (var h = 0, p = u; h < c; ++h) {
              var g = f[h];
              'm' == g ? (f[h] = p) : (p = g);
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
            for (var H, F = [], j = 0; j < c; )
              if (l.test(f[j])) {
                var z = j;
                for (++j; j < c && l.test(f[j]); ++j);
                F.push(new e(0, z, j));
              } else {
                var I = j,
                  R = F.length;
                for (++j; j < c && 'L' != f[j]; ++j);
                for (var B = I; B < j; )
                  if (s.test(f[B])) {
                    I < B && F.splice(R, 0, new e(1, I, B));
                    var V = B;
                    for (++B; B < j && s.test(f[B]); ++B);
                    F.splice(R, 0, new e(2, V, B)), (I = B);
                  } else ++B;
                I < j && F.splice(R, 0, new e(1, I, j));
              }
            return (
              'ltr' == n &&
                (1 == F[0].level &&
                  (H = r.match(/^\s+/)) &&
                  ((F[0].from = H[0].length),
                  F.unshift(new e(0, 0, H[0].length))),
                1 == v(F).level &&
                  (H = r.match(/\s+$/)) &&
                  ((v(F).to -= H[0].length),
                  F.push(new e(0, c - H[0].length, c)))),
              'rtl' == n ? F.reverse() : F
            );
          };
        })(),
        Mo = [],
        Oo = function(t, e, r) {
          if (t.addEventListener) t.addEventListener(e, r, !1);
          else if (t.attachEvent) t.attachEvent('on' + e, r);
          else {
            var n = t._handlers || (t._handlers = {});
            n[e] = (n[e] || Mo).concat(r);
          }
        },
        Ao = (function() {
          if (Ui && Gi < 9) return !1;
          var t = n('div');
          return 'draggable' in t || 'dragDrop' in t;
        })(),
        _o =
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
          var t = n('div');
          return (
            'oncopy' in t ||
            (t.setAttribute('oncopy', 'return;'), 'function' == typeof t.oncopy)
          );
        })(),
        Do = null,
        Wo = {},
        Po = {},
        Ho = {},
        Fo = function(t, e, r) {
          (this.pos = this.start = 0),
            (this.string = t),
            (this.tabSize = e || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = r);
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
        (Fo.prototype.match = function(t, e, r) {
          if ('string' != typeof t) {
            var n = this.string.slice(this.pos).match(t);
            return n && n.index > 0
              ? null
              : (n && !1 !== e && (this.pos += n[0].length), n);
          }
          var i = function(t) {
            return r ? t.toLowerCase() : t;
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
      var jo = function(t, e) {
          (this.state = t), (this.lookAhead = e);
        },
        zo = function(t, e, r, n) {
          (this.state = e),
            (this.doc = t),
            (this.line = r),
            (this.maxLookAhead = n || 0),
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
          var r = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: r && r.replace(/( |^)overlay .*/, ''),
            size: this.baseTokens[this.baseTokenPos] - t,
          };
        }),
        (zo.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }),
        (zo.fromSaved = function(t, e, r) {
          return e instanceof jo
            ? new zo(t, Nt(t.mode, e.state), r, e.lookAhead)
            : new zo(t, Nt(t.mode, e), r);
        }),
        (zo.prototype.save = function(t) {
          var e = !1 !== t ? Nt(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new jo(e, this.maxLookAhead) : e;
        });
      var Io = function(t, e, r) {
          (this.start = t.start),
            (this.end = t.pos),
            (this.string = t.current()),
            (this.type = e || null),
            (this.state = r);
        },
        Ro = function(t, e, r) {
          (this.text = t), X(this, e), (this.height = r ? r(this) : 1);
        };
      (Ro.prototype.lineNo = function() {
        return _(this);
      }),
        bt(Ro);
      var Bo,
        Vo = {},
        Uo = {},
        Go = null,
        qo = null,
        Ko = { left: 0, right: 0, top: 0, bottom: 0 },
        $o = function(t, e, r) {
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
          t(i),
            t(o),
            Oo(i, 'scroll', function() {
              i.clientHeight && e(i.scrollTop, 'vertical');
            }),
            Oo(o, 'scroll', function() {
              o.clientWidth && e(o.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            Ui &&
              Gi < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
      ($o.prototype.update = function(t) {
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
          var t = ro && !Zi ? '12px' : '18px';
          (this.horiz.style.height = this.vert.style.width = t),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              'none'),
            (this.disableHoriz = new fo()),
            (this.disableVert = new fo());
        }),
        ($o.prototype.enableZeroWidthBar = function(t, e, r) {
          function n() {
            var i = t.getBoundingClientRect();
            ('vert' == r
              ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
              : document.elementFromPoint(
                  (i.right + i.left) / 2,
                  i.bottom - 1
                )) != t
              ? (t.style.pointerEvents = 'none')
              : e.set(1e3, n);
          }
          (t.style.pointerEvents = 'auto'), e.set(1e3, n);
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
        Qo = function(t, e, r) {
          var n = t.display;
          (this.viewport = e),
            (this.visible = nr(n, t.doc, e)),
            (this.editorIsHidden = !n.wrapper.offsetWidth),
            (this.wrapperHeight = n.wrapper.clientHeight),
            (this.wrapperWidth = n.wrapper.clientWidth),
            (this.oldDisplayWidth = he(t)),
            (this.force = r),
            (this.dims = Ie(t)),
            (this.events = []);
        };
      (Qo.prototype.signal = function(t, e) {
        yt(t, e) && this.events.push(arguments);
      }),
        (Qo.prototype.finish = function() {
          for (var t = this, e = 0; e < this.events.length; e++)
            gt.apply(null, t.events[e]);
        });
      var Jo = 0,
        ta = null;
      Ui
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
          for (var r = 0; r < this.ranges.length; r++) {
            var n = e.ranges[r],
              i = t.ranges[r];
            if (!H(n.anchor, i.anchor) || !H(n.head, i.head)) return !1;
          }
          return !0;
        }),
        (ea.prototype.deepCopy = function() {
          for (var t = this, e = [], r = 0; r < this.ranges.length; r++)
            e[r] = new ra(F(t.ranges[r].anchor), F(t.ranges[r].head));
          return new ea(e, this.primIndex);
        }),
        (ea.prototype.somethingSelected = function() {
          for (var t = this, e = 0; e < this.ranges.length; e++)
            if (!t.ranges[e].empty()) return !0;
          return !1;
        }),
        (ea.prototype.contains = function(t, e) {
          var r = this;
          e || (e = t);
          for (var n = 0; n < this.ranges.length; n++) {
            var i = r.ranges[n];
            if (P(e, i.from()) >= 0 && P(t, i.to()) <= 0) return n;
          }
          return -1;
        });
      var ra = function(t, e) {
        (this.anchor = t), (this.head = e);
      };
      (ra.prototype.from = function() {
        return z(this.anchor, this.head);
      }),
        (ra.prototype.to = function() {
          return j(this.anchor, this.head);
        }),
        (ra.prototype.empty = function() {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          );
        }),
        (jn.prototype = {
          chunkSize: function() {
            return this.lines.length;
          },
          removeInner: function(t, e) {
            for (var r = this, n = t, i = t + e; n < i; ++n) {
              var o = r.lines[n];
              (r.height -= o.height), Vt(o), Zt(o, 'delete');
            }
            this.lines.splice(t, e);
          },
          collapse: function(t) {
            t.push.apply(t, this.lines);
          },
          insertInner: function(t, e, r) {
            var n = this;
            (this.height += r),
              (this.lines = this.lines
                .slice(0, t)
                .concat(e)
                .concat(this.lines.slice(t)));
            for (var i = 0; i < e.length; ++i) e[i].parent = n;
          },
          iterN: function(t, e, r) {
            for (var n = this, i = t + e; t < i; ++t)
              if (r(n.lines[t])) return !0;
          },
        }),
        (zn.prototype = {
          chunkSize: function() {
            return this.size;
          },
          removeInner: function(t, e) {
            var r = this;
            this.size -= e;
            for (var n = 0; n < this.children.length; ++n) {
              var i = r.children[n],
                o = i.chunkSize();
              if (t < o) {
                var a = Math.min(e, o - t),
                  l = i.height;
                if (
                  (i.removeInner(t, a),
                  (r.height -= l - i.height),
                  o == a && (r.children.splice(n--, 1), (i.parent = null)),
                  0 == (e -= a))
                )
                  break;
                t = 0;
              } else t -= o;
            }
            if (
              this.size - e < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof jn))
            ) {
              var s = [];
              this.collapse(s),
                (this.children = [new jn(s)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function(t) {
            for (var e = this, r = 0; r < this.children.length; ++r)
              e.children[r].collapse(t);
          },
          insertInner: function(t, e, r) {
            var n = this;
            (this.size += e.length), (this.height += r);
            for (var i = 0; i < this.children.length; ++i) {
              var o = n.children[i],
                a = o.chunkSize();
              if (t <= a) {
                if ((o.insertInner(t, e, r), o.lines && o.lines.length > 50)) {
                  for (
                    var l = o.lines.length % 25 + 25, s = l;
                    s < o.lines.length;

                  ) {
                    var u = new jn(o.lines.slice(s, (s += 25)));
                    (o.height -= u.height),
                      n.children.splice(++i, 0, u),
                      (u.parent = n);
                  }
                  (o.lines = o.lines.slice(0, l)), n.maybeSpill();
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
                var e = new zn(t.children.splice(t.children.length - 5, 5));
                if (t.parent) {
                  (t.size -= e.size), (t.height -= e.height);
                  var r = h(t.parent.children, t);
                  t.parent.children.splice(r + 1, 0, e);
                } else {
                  var n = new zn(t.children);
                  (n.parent = t), (t.children = [n, e]), (t = n);
                }
                e.parent = t.parent;
              } while (t.children.length > 10);
              t.parent.maybeSpill();
            }
          },
          iterN: function(t, e, r) {
            for (var n = this, i = 0; i < this.children.length; ++i) {
              var o = n.children[i],
                a = o.chunkSize();
              if (t < a) {
                var l = Math.min(e, a - t);
                if (o.iterN(t, l, r)) return !0;
                if (0 == (e -= l)) break;
                t = 0;
              } else t -= a;
            }
          },
        });
      var na = function(t, e, r) {
        var n = this;
        if (r) for (var i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
        (this.doc = t), (this.node = e);
      };
      (na.prototype.clear = function() {
        var t = this,
          e = this.doc.cm,
          r = this.line.widgets,
          n = this.line,
          i = _(n);
        if (null != i && r) {
          for (var o = 0; o < r.length; ++o) r[o] == t && r.splice(o--, 1);
          r.length || (n.widgets = null);
          var a = le(this);
          A(n, Math.max(0, n.height - a)),
            e &&
              (xr(e, function() {
                In(e, n, -a), Tr(e, i, 'widget');
              }),
              Zt(e, 'lineWidgetCleared', e, this, i));
        }
      }),
        (na.prototype.changed = function() {
          var t = this,
            e = this.height,
            r = this.doc.cm,
            n = this.line;
          this.height = null;
          var i = le(this) - e;
          i &&
            (A(n, n.height + i),
            r &&
              xr(r, function() {
                (r.curOp.forceUpdate = !0),
                  In(r, n, i),
                  Zt(r, 'lineWidgetChanged', r, t, _(n));
              }));
        }),
        bt(na);
      var ia = 0,
        oa = function(t, e) {
          (this.lines = []), (this.type = e), (this.doc = t), (this.id = ++ia);
        };
      (oa.prototype.clear = function() {
        var t = this;
        if (!this.explicitlyCleared) {
          var e = this.doc.cm,
            r = e && !e.curOp;
          if ((r && br(e), yt(this, 'clear'))) {
            var n = this.find();
            n && Zt(this, 'clear', n.from, n.to);
          }
          for (var i = null, o = null, a = 0; a < this.lines.length; ++a) {
            var l = t.lines[a],
              s = U(l.markedSpans, t);
            e && !t.collapsed
              ? Tr(e, _(l), 'text')
              : e && (null != s.to && (o = _(l)), null != s.from && (i = _(l))),
              (l.markedSpans = G(l.markedSpans, s)),
              null == s.from &&
                t.collapsed &&
                !at(t.doc, l) &&
                e &&
                A(l, je(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var u = 0; u < this.lines.length; ++u) {
              var c = nt(t.lines[u]),
                f = ut(c);
              f > e.display.maxLineLength &&
                ((e.display.maxLine = c),
                (e.display.maxLineLength = f),
                (e.display.maxLineChanged = !0));
            }
          null != i && e && this.collapsed && Lr(e, i, o + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), e && xn(e.doc)),
            e && Zt(e, 'markerCleared', e, this, i, o),
            r && wr(e),
            this.parent && this.parent.clear();
        }
      }),
        (oa.prototype.find = function(t, e) {
          var r = this;
          null == t && 'bookmark' == this.type && (t = 1);
          for (var n, i, o = 0; o < this.lines.length; ++o) {
            var a = r.lines[o],
              l = U(a.markedSpans, r);
            if (null != l.from && ((n = W(e ? a : _(a), l.from)), -1 == t))
              return n;
            if (null != l.to && ((i = W(e ? a : _(a), l.to)), 1 == t)) return i;
          }
          return n && { from: n, to: i };
        }),
        (oa.prototype.changed = function() {
          var t = this,
            e = this.find(-1, !0),
            r = this,
            n = this.doc.cm;
          e &&
            n &&
            xr(n, function() {
              var i = e.line,
                o = _(e.line),
                a = me(n, o);
              if (
                (a &&
                  (Ce(a),
                  (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !at(r.doc, i) && null != r.height)
              ) {
                var l = r.height;
                r.height = null;
                var s = le(r) - l;
                s && A(i, i.height + s);
              }
              Zt(n, 'markerChanged', n, t);
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
        var r = this;
        (this.markers = t), (this.primary = e);
        for (var n = 0; n < t.length; ++n) t[n].parent = r;
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
        sa = function t(e, r, n, i, o) {
          if (!(this instanceof t)) return new t(e, r, n, i, o);
          null == n && (n = 0),
            zn.call(this, [new jn([new Ro('', null)])]),
            (this.first = n),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = n);
          var a = W(n, 0);
          (this.sel = Vr(a)),
            (this.history = new en(null)),
            (this.id = ++la),
            (this.modeOption = r),
            (this.lineSep = i),
            (this.direction = 'rtl' == o ? 'rtl' : 'ltr'),
            (this.extend = !1),
            'string' == typeof e && (e = this.splitLines(e)),
            Zr(this, { from: a, to: a, text: e }),
            yn(this, Vr(a), mo);
        };
      (sa.prototype = b(zn.prototype, {
        constructor: sa,
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
          var e = O(this, this.first, this.first + this.size);
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        setValue: kr(function(t) {
          var e = W(this.first, 0),
            r = this.first + this.size - 1;
          On(
            this,
            {
              from: e,
              to: W(r, T(this, r).text.length),
              text: this.splitLines(t),
              origin: 'setValue',
              full: !0,
            },
            !0
          ),
            this.cm && ur(this.cm, 0, 0),
            yn(this, Vr(e), mo);
        }),
        replaceRange: function(t, e, r, n) {
          Dn(this, t, (e = R(this, e)), (r = r ? R(this, r) : e), n);
        },
        getRange: function(t, e, r) {
          var n = M(this, R(this, t), R(this, e));
          return !1 === r ? n : n.join(r || this.lineSeparator());
        },
        getLine: function(t) {
          var e = this.getLineHandle(t);
          return e && e.text;
        },
        getLineHandle: function(t) {
          if (E(this, t)) return T(this, t);
        },
        getLineNumber: function(t) {
          return _(t);
        },
        getLineHandleVisualStart: function(t) {
          return 'number' == typeof t && (t = T(this, t)), nt(t);
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
        setCursor: kr(function(t, e, r) {
          vn(this, R(this, 'number' == typeof t ? W(t, e || 0) : t), null, r);
        }),
        setSelection: kr(function(t, e, r) {
          vn(this, R(this, t), R(this, e || t), r);
        }),
        extendSelection: kr(function(t, e, r) {
          hn(this, R(this, t), e && R(this, e), r);
        }),
        extendSelections: kr(function(t, e) {
          pn(this, B(this, t), e);
        }),
        extendSelectionsBy: kr(function(t, e) {
          pn(this, B(this, m(this.sel.ranges, t)), e);
        }),
        setSelections: kr(function(t, e, r) {
          var n = this;
          if (t.length) {
            for (var i = [], o = 0; o < t.length; o++)
              i[o] = new ra(R(n, t[o].anchor), R(n, t[o].head));
            null == e && (e = Math.min(t.length - 1, this.sel.primIndex)),
              yn(this, Br(i, e), r);
          }
        }),
        addSelection: kr(function(t, e, r) {
          var n = this.sel.ranges.slice(0);
          n.push(new ra(R(this, t), R(this, e || t))),
            yn(this, Br(n, n.length - 1), r);
        }),
        getSelection: function(t) {
          for (var e, r = this, n = this.sel.ranges, i = 0; i < n.length; i++) {
            var o = M(r, n[i].from(), n[i].to());
            e = e ? e.concat(o) : o;
          }
          return !1 === t ? e : e.join(t || this.lineSeparator());
        },
        getSelections: function(t) {
          for (
            var e = this, r = [], n = this.sel.ranges, i = 0;
            i < n.length;
            i++
          ) {
            var o = M(e, n[i].from(), n[i].to());
            !1 !== t && (o = o.join(t || e.lineSeparator())), (r[i] = o);
          }
          return r;
        },
        replaceSelection: function(t, e, r) {
          for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = t;
          this.replaceSelections(n, e, r || '+input');
        },
        replaceSelections: kr(function(t, e, r) {
          for (
            var n = this, i = [], o = this.sel, a = 0;
            a < o.ranges.length;
            a++
          ) {
            var l = o.ranges[a];
            i[a] = {
              from: l.from(),
              to: l.to(),
              text: n.splitLines(t[a]),
              origin: r,
            };
          }
          for (
            var s =
                e &&
                'end' != e &&
                (function(t, e, r) {
                  for (
                    var n = [], i = W(t.first, 0), o = i, a = 0;
                    a < e.length;
                    a++
                  ) {
                    var l = e[a],
                      s = Kr(l.from, i, o),
                      u = Kr(Ur(l), i, o);
                    if (((i = l.to), (o = u), 'around' == r)) {
                      var c = t.sel.ranges[a],
                        f = P(c.head, c.anchor) < 0;
                      n[a] = new ra(f ? u : s, f ? s : u);
                    } else n[a] = new ra(s, s);
                  }
                  return new ea(n, t.sel.primIndex);
                })(this, i, e),
              u = i.length - 1;
            u >= 0;
            u--
          )
            On(n, i[u]);
          s ? mn(this, s) : this.cm && sr(this.cm);
        }),
        undo: kr(function() {
          _n(this, 'undo');
        }),
        redo: kr(function() {
          _n(this, 'redo');
        }),
        undoSelection: kr(function() {
          _n(this, 'undo', !0);
        }),
        redoSelection: kr(function() {
          _n(this, 'redo', !0);
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
          this.history = new en(this.history.maxGeneration);
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
            done: fn(this.history.done),
            undone: fn(this.history.undone),
          };
        },
        setHistory: function(t) {
          var e = (this.history = new en(this.history.maxGeneration));
          (e.done = fn(t.done.slice(0), null, !0)),
            (e.undone = fn(t.undone.slice(0), null, !0));
        },
        setGutterMarker: kr(function(t, e, r) {
          return Fn(this, t, 'gutter', function(t) {
            var n = t.gutterMarkers || (t.gutterMarkers = {});
            return (n[e] = r), !r && C(n) && (t.gutterMarkers = null), !0;
          });
        }),
        clearGutter: kr(function(t) {
          var e = this;
          this.iter(function(r) {
            r.gutterMarkers &&
              r.gutterMarkers[t] &&
              Fn(e, r, 'gutter', function() {
                return (
                  (r.gutterMarkers[t] = null),
                  C(r.gutterMarkers) && (r.gutterMarkers = null),
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
          } else if (null == (e = _(t))) return null;
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
        addLineClass: kr(function(e, r, n) {
          return Fn(this, e, 'gutter' == r ? 'gutter' : 'class', function(e) {
            var i =
              'text' == r
                ? 'textClass'
                : 'background' == r
                  ? 'bgClass'
                  : 'gutter' == r ? 'gutterClass' : 'wrapClass';
            if (e[i]) {
              if (t(n).test(e[i])) return !1;
              e[i] += ' ' + n;
            } else e[i] = n;
            return !0;
          });
        }),
        removeLineClass: kr(function(e, r, n) {
          return Fn(this, e, 'gutter' == r ? 'gutter' : 'class', function(e) {
            var i =
                'text' == r
                  ? 'textClass'
                  : 'background' == r
                    ? 'bgClass'
                    : 'gutter' == r ? 'gutterClass' : 'wrapClass',
              o = e[i];
            if (!o) return !1;
            if (null == n) e[i] = null;
            else {
              var a = o.match(t(n));
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
        addLineWidget: kr(function(t, e, r) {
          return (function(t, e, r, n) {
            var i = new na(t, r, n),
              o = t.cm;
            return (
              o && i.noHScroll && (o.display.alignWidgets = !0),
              Fn(t, e, 'widget', function(e) {
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
                  o && !at(t, e))
                ) {
                  var n = st(e) < t.scrollTop;
                  A(e, e.height + le(i)),
                    n && lr(o, i.height),
                    (o.curOp.forceUpdate = !0);
                }
                return !0;
              }),
              Zt(o, 'lineWidgetAdded', o, i, 'number' == typeof e ? e : _(e)),
              i
            );
          })(this, t, e, r);
        }),
        removeLineWidget: function(t) {
          t.clear();
        },
        markText: function(t, e, r) {
          return Rn(this, R(this, t), R(this, e), r, (r && r.type) || 'range');
        },
        setBookmark: function(t, e) {
          var r = {
            replacedWith: e && (null == e.nodeType ? e.widget : e),
            insertLeft: e && e.insertLeft,
            clearWhenEmpty: !1,
            shared: e && e.shared,
            handleMouseEvents: e && e.handleMouseEvents,
          };
          return (t = R(this, t)), Rn(this, t, t, r, 'bookmark');
        },
        findMarksAt: function(t) {
          var e = [],
            r = T(this, (t = R(this, t)).line).markedSpans;
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
          (t = R(this, t)), (e = R(this, e));
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
            R(this, W(r, e))
          );
        },
        indexFromPos: function(t) {
          var e = (t = R(this, t)).ch;
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
            r = this.first + this.size;
          null != t.from && t.from > e && (e = t.from),
            null != t.to && t.to < r && (r = t.to);
          var n = new sa(
            O(this, e, r),
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
                if (P(o, a)) {
                  var l = Rn(t, o, a, n.primary, n.primary.type);
                  n.markers.push(l), (l.parent = n);
                }
              }
            })(n, Bn(this)),
            n
          );
        },
        unlinkDoc: function(t) {
          var e = this;
          if ((t instanceof ki && (t = t.doc), this.linked))
            for (var r = 0; r < this.linked.length; ++r) {
              if (e.linked[r].doc == t) {
                e.linked.splice(r, 1), t.unlinkDoc(e), Vn(Bn(e));
                break;
              }
            }
          if (t.history == this.history) {
            var n = [t.id];
            Qr(
              t,
              function(t) {
                return n.push(t.id);
              },
              !0
            ),
              (t.history = new en(null)),
              (t.history.done = fn(this.history.done, n)),
              (t.history.undone = fn(this.history.undone, n));
          }
        },
        iterLinkedDocs: function(t) {
          Qr(this, t);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(t) {
          return this.lineSep ? t.split(this.lineSep) : _o(t);
        },
        lineSeparator: function() {
          return this.lineSep || '\n';
        },
        setDirection: kr(function(t) {
          'rtl' != t && (t = 'ltr'),
            t != this.direction &&
              ((this.direction = t),
              this.iter(function(t) {
                return (t.order = null);
              }),
              this.cm &&
                (function(t) {
                  xr(t, function() {
                    tn(t), Lr(t);
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
      var ga = {};
      (ga.basic = {
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
        (ga.pcDefault = {
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
        (ga.emacsy = {
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
        (ga.macDefault = {
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
        (ga.default = ro ? ga.macDefault : ga.pcDefault);
      var va = {
          selectAll: Tn,
          singleSelection: function(t) {
            return t.setSelection(
              t.getCursor('anchor'),
              t.getCursor('head'),
              mo
            );
          },
          killLine: function(t) {
            return ri(t, function(e) {
              if (e.empty()) {
                var r = T(t.doc, e.head.line).text.length;
                return e.head.ch == r && e.head.line < t.lastLine()
                  ? { from: e.head, to: W(e.head.line + 1, 0) }
                  : { from: e.head, to: W(e.head.line, r) };
              }
              return { from: e.from(), to: e.to() };
            });
          },
          deleteLine: function(t) {
            return ri(t, function(e) {
              return {
                from: W(e.from().line, 0),
                to: R(t.doc, W(e.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function(t) {
            return ri(t, function(t) {
              return { from: W(t.from().line, 0), to: t.from() };
            });
          },
          delWrappedLineLeft: function(t) {
            return ri(t, function(e) {
              var r = t.charCoords(e.head, 'div').top + 5;
              return {
                from: t.coordsChar({ left: 0, top: r }, 'div'),
                to: e.from(),
              };
            });
          },
          delWrappedLineRight: function(t) {
            return ri(t, function(e) {
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
            return t.extendSelection(W(t.firstLine(), 0));
          },
          goDocEnd: function(t) {
            return t.extendSelection(W(t.lastLine()));
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
              var r = t.cursorCoords(e.head, 'div').top + 5;
              return t.coordsChar(
                { left: t.display.lineDiv.offsetWidth + 100, top: r },
                'div'
              );
            }, bo);
          },
          goLineLeft: function(t) {
            return t.extendSelectionsBy(function(e) {
              var r = t.cursorCoords(e.head, 'div').top + 5;
              return t.coordsChar({ left: 0, top: r }, 'div');
            }, bo);
          },
          goLineLeftSmart: function(t) {
            return t.extendSelectionsBy(function(e) {
              var r = t.cursorCoords(e.head, 'div').top + 5,
                n = t.coordsChar({ left: 0, top: r }, 'div');
              return n.ch < t.getLine(n.line).search(/\S/) ? si(t, e.head) : n;
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
              var e = [], r = t.listSelections(), n = t.options.tabSize, i = 0;
              i < r.length;
              i++
            ) {
              var o = r[i].from(),
                a = d(t.getLine(o.line), o.ch, n);
              e.push(g(n - a % n));
            }
            t.replaceSelections(e);
          },
          defaultTab: function(t) {
            t.somethingSelected()
              ? t.indentSelection('add')
              : t.execCommand('insertTab');
          },
          transposeChars: function(t) {
            return xr(t, function() {
              for (var e = t.listSelections(), r = [], n = 0; n < e.length; n++)
                if (e[n].empty()) {
                  var i = e[n].head,
                    o = T(t.doc, i.line).text;
                  if (o)
                    if (
                      (i.ch == o.length && (i = new W(i.line, i.ch - 1)),
                      i.ch > 0)
                    )
                      (i = new W(i.line, i.ch + 1)),
                        t.replaceRange(
                          o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                          W(i.line, i.ch - 2),
                          i,
                          '+transpose'
                        );
                    else if (i.line > t.doc.first) {
                      var a = T(t.doc, i.line - 1).text;
                      a &&
                        ((i = new W(i.line, 1)),
                        t.replaceRange(
                          o.charAt(0) +
                            t.doc.lineSeparator() +
                            a.charAt(a.length - 1),
                          W(i.line - 1, a.length - 1),
                          i,
                          '+transpose'
                        ));
                    }
                  r.push(new ra(i, i));
                }
              t.setSelections(r);
            });
          },
          newlineAndIndent: function(t) {
            return xr(t, function() {
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
              sr(t);
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
        ba = function(t, e, r) {
          (this.time = t), (this.pos = e), (this.button = r);
        };
      ba.prototype.compare = function(t, e, r) {
        return this.time + 400 > t && 0 == P(e, this.pos) && r == this.button;
      };
      var wa,
        xa,
        Ca = {
          toString: function() {
            return 'CodeMirror.Init';
          },
        },
        Sa = {},
        ka = {};
      (ki.defaults = Sa), (ki.optionHandlers = ka);
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
          if (!vt(i, t)) {
            if (i.somethingSelected())
              Ti({ lineWise: !1, text: i.getSelections() }),
                'cut' == t.type && i.replaceSelection('', null, 'cut');
            else {
              if (!i.options.lineWiseCopyCut) return;
              var e = _i(i);
              Ti({ lineWise: !0, text: e.text }),
                'cut' == t.type &&
                  i.operation(function() {
                    i.setSelections(e.ranges, 0, mo),
                      i.replaceSelection('', null, 'cut');
                  });
            }
            if (t.clipboardData) {
              t.clipboardData.clearData();
              var r = Ta.text.join('\n');
              if (
                (t.clipboardData.setData('Text', r),
                t.clipboardData.getData('Text') == r)
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
                  s == o && n.showPrimarySelection();
              }, 50);
          }
        }
        var r = this,
          n = this,
          i = n.cm,
          o = (n.div = t.lineDiv);
        Ni(o, i.options.spellcheck),
          Oo(o, 'paste', function(t) {
            vt(i, t) ||
              Oi(t, i) ||
              (Gi <= 11 &&
                setTimeout(
                  Cr(i, function() {
                    return r.updateFromDOM();
                  }),
                  20
                ));
          }),
          Oo(o, 'compositionstart', function(t) {
            r.composing = { data: t.data, done: !1 };
          }),
          Oo(o, 'compositionupdate', function(t) {
            r.composing || (r.composing = { data: t.data, done: !1 });
          }),
          Oo(o, 'compositionend', function(t) {
            r.composing &&
              (t.data != r.composing.data && r.readFromDOMSoon(),
              (r.composing.done = !0));
          }),
          Oo(o, 'touchstart', function() {
            return n.forceCompositionEnd();
          }),
          Oo(o, 'input', function() {
            r.composing || r.readFromDOMSoon();
          }),
          Oo(o, 'copy', e),
          Oo(o, 'cut', e);
      }),
        (Ma.prototype.prepareSelection = function() {
          var t = Ke(this.cm, !1);
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
            r = e.doc.sel.primary(),
            n = r.from(),
            i = r.to();
          if (
            e.display.viewTo == e.display.viewFrom ||
            n.line >= e.display.viewTo ||
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
              0 != P(z(o, a), n) ||
              0 != P(j(o, a), i)
            ) {
              var l = e.display.view,
                s = (n.line >= e.display.viewFrom && Pi(e, n)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                u = i.line < e.display.viewTo && Pi(e, i);
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
          r(this.cm.display.cursorDiv, t.cursors),
            r(this.cm.display.selectionDiv, t.selection);
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
            : xr(this.cm, function() {
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
              var r = Fi(e, t.anchorNode, t.anchorOffset),
                n = Fi(e, t.focusNode, t.focusOffset);
              r &&
                n &&
                xr(e, function() {
                  yn(e.doc, Vr(r, n), mo),
                    (r.bad || n.bad) && (e.curOp.selectionChanged = !0);
                });
            }
          }
        }),
        (Ma.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
          var t = this.cm,
            e = t.display,
            r = t.doc.sel.primary(),
            n = r.from(),
            i = r.to();
          if (
            (0 == n.ch &&
              n.line > t.firstLine() &&
              (n = W(n.line - 1, T(t.doc, n.line - 1).length)),
            i.ch == T(t.doc, i.line).text.length &&
              i.line < t.lastLine() &&
              (i = W(i.line + 1, 0)),
            n.line < e.viewFrom || i.line > e.viewTo - 1)
          )
            return !1;
          var o, a, l;
          n.line == e.viewFrom || 0 == (o = Ge(t, n.line))
            ? ((a = _(e.view[0].line)), (l = e.view[0].node))
            : ((a = _(e.view[o].line)), (l = e.view[o - 1].node.nextSibling));
          var s,
            u,
            c = Ge(t, i.line);
          if (
            (c == e.view.length - 1
              ? ((s = e.viewTo - 1), (u = e.lineDiv.lastChild))
              : ((s = _(e.view[c + 1].line) - 1),
                (u = e.view[c + 1].node.previousSibling)),
            !l)
          )
            return !1;
          for (
            var f = t.doc.splitLines(
                (function(t, e, r, n, i) {
                  function o() {
                    u && ((s += c), (u = !1));
                  }
                  function a(t) {
                    t && (o(), (s += t));
                  }
                  function l(e) {
                    if (1 == e.nodeType) {
                      var r = e.getAttribute('cm-text');
                      if (null != r)
                        return void a(
                          r || e.textContent.replace(/\u200b/g, '')
                        );
                      var s,
                        f = e.getAttribute('cm-marker');
                      if (f) {
                        var d = t.findMarks(
                          W(n, 0),
                          W(i + 1, 0),
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
                    l(e), e != r;

                  )
                    e = e.nextSibling;
                  return s;
                })(t, l, u, a, s)
              ),
              d = M(t.doc, W(a, 0), W(s, T(t.doc, s).text.length));
            f.length > 1 && d.length > 1;

          )
            if (v(f) == v(d)) f.pop(), d.pop(), s--;
            else {
              if (f[0] != d[0]) break;
              f.shift(), d.shift(), a++;
            }
          for (
            var h = 0,
              p = 0,
              g = f[0],
              m = d[0],
              y = Math.min(g.length, m.length);
            h < y && g.charCodeAt(h) == m.charCodeAt(h);

          )
            ++h;
          for (
            var b = v(f),
              w = v(d),
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
          var C = W(a, h),
            S = W(s, d.length ? v(d).length - p : 0);
          return f.length > 1 || f[0] || P(C, S)
            ? (Dn(t.doc, f, C, S, '+input'), !0)
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
            xr(this.cm, function() {
              return Lr(t.cm);
            });
        }),
        (Ma.prototype.setUneditable = function(t) {
          t.contentEditable = 'false';
        }),
        (Ma.prototype.onKeyPress = function(t) {
          0 != t.charCode &&
            (t.preventDefault(),
            this.cm.isReadOnly() ||
              Cr(this.cm, Mi)(
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
          if (!vt(i, t)) {
            if (i.somethingSelected())
              Ti({ lineWise: !1, text: i.getSelections() });
            else {
              if (!i.options.lineWiseCopyCut) return;
              var e = _i(i);
              Ti({ lineWise: !0, text: e.text }),
                'cut' == t.type
                  ? i.setSelections(e.ranges, null, mo)
                  : ((n.prevInput = ''), (a.value = e.text.join('\n')), co(a));
            }
            'cut' == t.type && (i.state.cutIncoming = !0);
          }
        }
        var r = this,
          n = this,
          i = this.cm,
          o = (this.wrapper = Ei()),
          a = (this.textarea = o.firstChild);
        t.wrapper.insertBefore(o, t.wrapper.firstChild),
          Ji && (a.style.width = '0px'),
          Oo(a, 'input', function() {
            Ui && Gi >= 9 && r.hasSelection && (r.hasSelection = null),
              n.poll();
          }),
          Oo(a, 'paste', function(t) {
            vt(i, t) ||
              Oi(t, i) ||
              ((i.state.pasteIncoming = !0), n.fastPoll());
          }),
          Oo(a, 'cut', e),
          Oo(a, 'copy', e),
          Oo(t.scroller, 'paste', function(e) {
            se(t, e) || vt(i, e) || ((i.state.pasteIncoming = !0), n.focus());
          }),
          Oo(t.lineSpace, 'selectstart', function(e) {
            se(t, e) || wt(e);
          }),
          Oo(a, 'compositionstart', function() {
            var t = i.getCursor('from');
            n.composing && n.composing.range.clear(),
              (n.composing = {
                start: t,
                range: i.markText(t, i.getCursor('to'), {
                  className: 'CodeMirror-composing',
                }),
              });
          }),
          Oo(a, 'compositionend', function() {
            n.composing &&
              (n.poll(), n.composing.range.clear(), (n.composing = null));
          });
      }),
        (Oa.prototype.prepareSelection = function() {
          var t = this.cm,
            e = t.display,
            r = t.doc,
            n = Ke(t);
          if (t.options.moveInputWithCursor) {
            var i = Ne(t, r.sel.primary().head, 'div'),
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
        (Oa.prototype.showSelection = function(t) {
          var e = this.cm.display;
          r(e.cursorDiv, t.cursors),
            r(e.selectionDiv, t.selection),
            null != t.teTop &&
              ((this.wrapper.style.top = t.teTop + 'px'),
              (this.wrapper.style.left = t.teLeft + 'px'));
        }),
        (Oa.prototype.reset = function(t) {
          if (!this.contextMenuPending && !this.composing) {
            var e = this.cm;
            if (e.somethingSelected()) {
              this.prevInput = '';
              var r = e.getSelection();
              (this.textarea.value = r),
                e.state.focused && co(this.textarea),
                Ui && Gi >= 9 && (this.hasSelection = r);
            } else
              t ||
                ((this.prevInput = this.textarea.value = ''),
                Ui && Gi >= 9 && (this.hasSelection = null));
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
            r.poll() || e
              ? ((r.pollingFast = !1), r.slowPoll())
              : ((e = !0), r.polling.set(60, t));
          }
          var e = !1,
            r = this;
          (r.pollingFast = !0), r.polling.set(20, t);
        }),
        (Oa.prototype.poll = function() {
          var t = this,
            e = this.cm,
            r = this.textarea,
            n = this.prevInput;
          if (
            this.contextMenuPending ||
            !e.state.focused ||
            (No(r) && !n && !this.composing) ||
            e.isReadOnly() ||
            e.options.disableInput ||
            e.state.keySeq
          )
            return !1;
          var i = r.value;
          if (i == n && !e.somethingSelected()) return !1;
          if (
            (Ui && Gi >= 9 && this.hasSelection === i) ||
            (ro && /[\uf700-\uf7ff]/.test(i))
          )
            return e.display.input.reset(), !1;
          if (e.doc.sel == e.display.selForContextMenu) {
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
            xr(e, function() {
              Mi(
                e,
                i.slice(a),
                n.length - a,
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
        (Oa.prototype.ensurePolled = function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }),
        (Oa.prototype.onKeyPress = function() {
          Ui && Gi >= 9 && (this.hasSelection = null), this.fastPoll();
        }),
        (Oa.prototype.onContextMenu = function(t) {
          function e() {
            if (null != a.selectionStart) {
              var t = i.somethingSelected(),
                e = '​' + (t ? a.value : '');
              (a.value = '⇚'),
                (a.value = e),
                (n.prevInput = t ? '' : '​'),
                (a.selectionStart = 1),
                (a.selectionEnd = e.length),
                (o.selForContextMenu = i.doc.sel);
            }
          }
          function r() {
            if (
              ((n.contextMenuPending = !1),
              (n.wrapper.style.cssText = c),
              (a.style.cssText = u),
              Ui &&
                Gi < 9 &&
                o.scrollbars.setScrollTop((o.scroller.scrollTop = s)),
              null != a.selectionStart)
            ) {
              (!Ui || (Ui && Gi < 9)) && e();
              var t = 0,
                r = function e() {
                  o.selForContextMenu == i.doc.sel &&
                  0 == a.selectionStart &&
                  a.selectionEnd > 0 &&
                  '​' == n.prevInput
                    ? Cr(i, Tn)(i)
                    : t++ < 10
                      ? (o.detectingSelectAll = setTimeout(e, 500))
                      : ((o.selForContextMenu = null), o.input.reset());
                };
              o.detectingSelectAll = setTimeout(r, 200);
            }
          }
          var n = this,
            i = n.cm,
            o = i.display,
            a = n.textarea,
            l = Ue(i, t),
            s = o.scroller.scrollTop;
          if (l && !Xi) {
            i.options.resetSelectionOnContextMenu &&
              -1 == i.doc.sel.contains(l) &&
              Cr(i, yn)(i.doc, Vr(l), mo);
            var u = a.style.cssText,
              c = n.wrapper.style.cssText;
            n.wrapper.style.cssText = 'position: absolute';
            var f = n.wrapper.getBoundingClientRect();
            a.style.cssText =
              'position: absolute; width: 30px; height: 30px;\n      top: ' +
              (t.clientY - f.top - 5) +
              'px; left: ' +
              (t.clientX - f.left - 5) +
              'px;\n      z-index: 1000; background: ' +
              (Ui ? 'rgba(255, 255, 255, .05)' : 'transparent') +
              ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);';
            var d;
            if (
              (qi && (d = window.scrollY),
              o.input.focus(),
              qi && window.scrollTo(null, d),
              o.input.reset(),
              i.somethingSelected() || (a.value = n.prevInput = ' '),
              (n.contextMenuPending = !0),
              (o.selForContextMenu = i.doc.sel),
              clearTimeout(o.detectingSelectAll),
              Ui && Gi >= 9 && e(),
              so)
            ) {
              St(t);
              var h = function t() {
                pt(window, 'mouseup', t), setTimeout(r, 20);
              };
              Oo(window, 'mouseup', h);
            } else setTimeout(r, 50);
          }
        }),
        (Oa.prototype.readOnlyChanged = function(t) {
          t || this.reset(), (this.textarea.disabled = 'nocursor' == t);
        }),
        (Oa.prototype.setUneditable = function() {}),
        (Oa.prototype.needsContentAttribute = !1),
        (function(t) {
          function e(e, n, i, o) {
            (t.defaults[e] = n),
              i &&
                (r[e] = o
                  ? function(t, e, r) {
                      r != Ca && i(t, e, r);
                    }
                  : i);
          }
          var r = t.optionHandlers;
          (t.defineOption = e),
            (t.Init = Ca),
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
                (t.doc.modeOption = e), $r(t);
              },
              !0
            ),
            e('indentUnit', 2, $r, !0),
            e('indentWithTabs', !1),
            e('smartIndent', !0),
            e(
              'tabSize',
              4,
              function(t) {
                Xr(t), ke(t), Lr(t);
              },
              !0
            ),
            e('lineSeparator', null, function(t, e) {
              if (((t.doc.lineSep = e), e)) {
                var r = [],
                  n = t.doc.first;
                t.doc.iter(function(t) {
                  for (var i = 0; ; ) {
                    var o = t.text.indexOf(e, i);
                    if (-1 == o) break;
                    (i = o + e.length), r.push(W(n, o));
                  }
                  n++;
                });
                for (var i = r.length - 1; i >= 0; i--)
                  Dn(t.doc, e, r[i], W(r[i].line, r[i].ch + e.length));
              }
            }),
            e(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
              function(t, e, r) {
                (t.state.specialChars = new RegExp(
                  e.source + (e.test('\t') ? '' : '|\t'),
                  'g'
                )),
                  r != Ca && t.refresh();
              }
            ),
            e(
              'specialCharPlaceholder',
              qt,
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
            e('keyMap', 'default', function(t, e, r) {
              var n = ei(e),
                i = r != Ca && ei(r);
              i && i.detach && i.detach(t, n),
                n.attach && n.attach(t, i || null);
            }),
            e('extraKeys', null),
            e('configureMouse', null),
            e('lineWrapping', !1, Si, !0),
            e(
              'gutters',
              [],
              function(t) {
                jr(t.options), xi(t);
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
                return vr(t);
              },
              !0
            ),
            e(
              'scrollbarStyle',
              'native',
              function(t) {
                yr(t),
                  vr(t),
                  t.display.scrollbars.setScrollTop(t.doc.scrollTop),
                  t.display.scrollbars.setScrollLeft(t.doc.scrollLeft);
              },
              !0
            ),
            e(
              'lineNumbers',
              !1,
              function(t) {
                jr(t.options), xi(t);
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
            e('showCursorWhenSelecting', !1, qe, !0),
            e('resetSelectionOnContextMenu', !0),
            e('lineWiseCopyCut', !0),
            e('pasteLinesPerSelection', !0),
            e('readOnly', !1, function(t, e) {
              'nocursor' == e && (tr(t), t.display.input.blur()),
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
            e('dragDrop', !0, Ci),
            e('allowDropFileTypes', null),
            e('cursorBlinkRate', 530),
            e('cursorScrollMargin', 0),
            e('cursorHeight', 1, qe, !0),
            e('singleCursorHeightPerLine', !0, qe, !0),
            e('workTime', 100),
            e('workDelay', 100),
            e('flattenSpans', !0, Xr, !0),
            e('addModeClass', !1, Xr, !0),
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
            e('maxHighlightLength', 1e4, Xr, !0),
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
                e.hasOwnProperty(t) && Cr(this, e[t])(this, r, i),
                gt(this, 'optionChange', this, t));
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
              for (var e = this.state.keyMaps, r = 0; r < e.length; ++r)
                if (e[r] == t || e[r].name == t) return e.splice(r, 1), !0;
            },
            addOverlay: Sr(function(e, r) {
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
                Lr(this);
            }),
            removeOverlay: Sr(function(t) {
              for (
                var e = this, r = this.state.overlays, n = 0;
                n < r.length;
                ++n
              ) {
                var i = r[n].modeSpec;
                if (i == t || ('string' == typeof t && i.name == t))
                  return r.splice(n, 1), e.state.modeGen++, void Lr(e);
              }
            }),
            indentLine: Sr(function(t, e, r) {
              'string' != typeof e &&
                'number' != typeof e &&
                (e =
                  null == e
                    ? this.options.smartIndent ? 'smart' : 'prev'
                    : e ? 'add' : 'subtract'),
                E(this.doc, t) && Li(this, t, e, r);
            }),
            indentSelection: Sr(function(t) {
              for (
                var e = this, r = this.doc.sel.ranges, n = -1, i = 0;
                i < r.length;
                i++
              ) {
                var o = r[i];
                if (o.empty())
                  o.head.line > n &&
                    (Li(e, o.head.line, t, !0),
                    (n = o.head.line),
                    i == e.doc.sel.primIndex && sr(e));
                else {
                  var a = o.from(),
                    l = o.to(),
                    s = Math.max(n, a.line);
                  n = Math.min(e.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                  for (var u = s; u < n; ++u) Li(e, u, t);
                  var c = e.doc.sel.ranges;
                  0 == a.ch &&
                    r.length == c.length &&
                    c[i].from().ch > 0 &&
                    gn(e.doc, i, new ra(a, c[i].to()), mo);
                }
              }
            }),
            getTokenAt: function(t, e) {
              return It(this, t, e);
            },
            getLineTokens: function(t, e) {
              return It(this, W(t), e, !0);
            },
            getTokenTypeAt: function(t) {
              t = R(this.doc, t);
              var e,
                r = Pt(this, T(this.doc, t.line)),
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
              var n = this,
                i = [];
              if (!r.hasOwnProperty(e)) return i;
              var o = r[e],
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
                c.pred(a, n) && -1 == h(i, c.val) && i.push(c.val);
              }
              return i;
            },
            getStateAfter: function(t, e) {
              var r = this.doc;
              return (
                (t = I(r, null == t ? r.first + r.size - 1 : t)),
                Ht(this, t + 1, e).state
              );
            },
            cursorCoords: function(t, e) {
              var r,
                n = this.doc.sel.primary();
              return (
                (r =
                  null == t
                    ? n.head
                    : 'object' == (void 0 === t ? 'undefined' : o(t))
                      ? R(this.doc, t)
                      : t ? n.from() : n.to()),
                Ne(this, r, e || 'page')
              );
            },
            charCoords: function(t, e) {
              return _e(this, R(this.doc, t), e || 'page');
            },
            coordsChar: function(t, e) {
              return (t = Ae(this, t, e || 'page')), We(this, t.left, t.top);
            },
            lineAtHeight: function(t, e) {
              return (
                (t = Ae(this, { top: t, left: 0 }, e || 'page').top),
                N(this.doc, t + this.display.viewOffset)
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
                  (n = T(this.doc, t));
              } else n = t;
              return (
                Oe(this, n, { top: 0, left: 0 }, e || 'page', r || i).top +
                (i ? this.doc.height - st(n) : 0)
              );
            },
            defaultTextHeight: function() {
              return je(this.display);
            },
            defaultCharWidth: function() {
              return ze(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(t, e, r, n, i) {
              var o = this.display,
                a = (t = Ne(this, R(this.doc, t))).bottom,
                l = t.left;
              if (
                ((e.style.position = 'absolute'),
                e.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(e),
                o.sizer.appendChild(e),
                'over' == n)
              )
                a = t.top;
              else if ('above' == n || 'near' == n) {
                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                  u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ('above' == n || t.bottom + e.offsetHeight > s) &&
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
                r &&
                  (function(t, e) {
                    var r = ar(t, e);
                    null != r.scrollTop && dr(t, r.scrollTop),
                      null != r.scrollLeft && pr(t, r.scrollLeft);
                  })(this, {
                    left: l,
                    top: a,
                    right: l + e.offsetWidth,
                    bottom: a + e.offsetHeight,
                  });
            },
            triggerOnKeyDown: Sr(di),
            triggerOnKeyPress: Sr(pi),
            triggerOnKeyUp: hi,
            triggerOnMouseDown: Sr(gi),
            execCommand: function(t) {
              if (va.hasOwnProperty(t)) return va[t].call(null, this);
            },
            triggerElectric: Sr(function(t) {
              Ai(this, t);
            }),
            findPosH: function(t, e, r, n) {
              var i = this,
                o = 1;
              e < 0 && ((o = -1), (e = -e));
              for (
                var a = R(this.doc, t), l = 0;
                l < e && !(a = Di(i.doc, a, o, r, n)).hitSide;
                ++l
              );
              return a;
            },
            moveH: Sr(function(t, e) {
              var r = this;
              this.extendSelectionsBy(function(n) {
                return r.display.shift || r.doc.extend || n.empty()
                  ? Di(r.doc, n.head, t, e, r.options.rtlMoveVisually)
                  : t < 0 ? n.from() : n.to();
              }, bo);
            }),
            deleteH: Sr(function(t, e) {
              var r = this.doc.sel,
                n = this.doc;
              r.somethingSelected()
                ? n.replaceSelection('', null, '+delete')
                : ri(this, function(r) {
                    var i = Di(n, r.head, t, e, !1);
                    return t < 0
                      ? { from: i, to: r.head }
                      : { from: r.head, to: i };
                  });
            }),
            findPosV: function(t, e, r, n) {
              var i = this,
                o = 1,
                a = n;
              e < 0 && ((o = -1), (e = -e));
              for (var l = R(this.doc, t), s = 0; s < e; ++s) {
                var u = Ne(i, l, 'div');
                if (
                  (null == a ? (a = u.left) : (u.left = a),
                  (l = Wi(i, u, o, r)).hitSide)
                )
                  break;
              }
              return l;
            },
            moveV: Sr(function(t, e) {
              var r = this,
                n = this.doc,
                i = [],
                o =
                  !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (
                (n.extendSelectionsBy(function(a) {
                  if (o) return t < 0 ? a.from() : a.to();
                  var l = Ne(r, a.head, 'div');
                  null != a.goalColumn && (l.left = a.goalColumn),
                    i.push(l.left);
                  var s = Wi(r, l, t, e);
                  return (
                    'page' == e &&
                      a == n.sel.primary() &&
                      lr(r, _e(r, s, 'div').top - l.top),
                    s
                  );
                }, bo),
                i.length)
              )
                for (var a = 0; a < n.sel.ranges.length; a++)
                  n.sel.ranges[a].goalColumn = i[a];
            }),
            findWordAt: function(t) {
              var e = T(this.doc, t.line).text,
                r = t.ch,
                n = t.ch;
              if (e) {
                var i = this.getHelper(t, 'wordChars');
                ('before' != t.sticky && n != e.length) || !r ? ++n : --r;
                for (
                  var o = e.charAt(r),
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
                  r > 0 && a(e.charAt(r - 1));

                )
                  --r;
                for (; n < e.length && a(e.charAt(n)); ) ++n;
              }
              return new ra(W(t.line, r), W(t.line, n));
            },
            toggleOverwrite: function(t) {
              (null != t && t == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? s(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : uo(this.display.cursorDiv, 'CodeMirror-overwrite'),
                gt(this, 'overwriteToggle', this, this.state.overwrite));
            },
            hasFocus: function() {
              return this.display.input.getField() == l();
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: Sr(function(t, e) {
              ur(this, t, e);
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
            scrollIntoView: Sr(function(t, e) {
              null == t
                ? ((t = { from: this.doc.sel.primary().head, to: null }),
                  null == e && (e = this.options.cursorScrollMargin))
                : 'number' == typeof t
                  ? (t = { from: W(t, 0), to: null })
                  : null == t.from && (t = { from: t, to: null }),
                t.to || (t.to = t.from),
                (t.margin = e || 0),
                null != t.from.line
                  ? (function(t, e) {
                      cr(t), (t.curOp.scrollToPos = e);
                    })(this, t)
                  : fr(this, t.from, t.to, t.margin);
            }),
            setSize: Sr(function(t, e) {
              var r = this,
                n = function(t) {
                  return 'number' == typeof t || /^\d+$/.test(String(t))
                    ? t + 'px'
                    : t;
                };
              null != t && (this.display.wrapper.style.width = n(t)),
                null != e && (this.display.wrapper.style.height = n(e)),
                this.options.lineWrapping && Se(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function(t) {
                if (t.widgets)
                  for (var e = 0; e < t.widgets.length; e++)
                    if (t.widgets[e].noHScroll) {
                      Tr(r, i, 'widget');
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                gt(this, 'refresh', this);
            }),
            operation: function(t) {
              return xr(this, t);
            },
            startOperation: function() {
              return br(this);
            },
            endOperation: function() {
              return wr(this);
            },
            refresh: Sr(function() {
              var t = this.display.cachedTextHeight;
              Lr(this),
                (this.curOp.forceUpdate = !0),
                ke(this),
                ur(this, this.doc.scrollLeft, this.doc.scrollTop),
                Pr(this),
                (null == t || Math.abs(t - je(this.display)) > 0.5) && Ve(this),
                gt(this, 'refresh', this);
            }),
            swapDoc: Sr(function(t) {
              var e = this.doc;
              return (
                (e.cm = null),
                Jr(this, t),
                ke(this),
                this.display.input.reset(),
                ur(this, t.scrollLeft, t.scrollTop),
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
            (t.registerHelper = function(e, n, i) {
              r.hasOwnProperty(e) || (r[e] = t[e] = { _global: [] }),
                (r[e][n] = i);
            }),
            (t.registerGlobalHelper = function(e, n, i, o) {
              t.registerHelper(e, n, o), r[e]._global.push({ pred: i, val: o });
            });
        })(ki);
      var Aa = 'iter insert remove copy getEditor constructor'.split(' ');
      for (var _a in sa.prototype)
        sa.prototype.hasOwnProperty(_a) &&
          h(Aa, _a) < 0 &&
          (ki.prototype[_a] = (function(t) {
            return function() {
              return t.apply(this.doc, arguments);
            };
          })(sa.prototype[_a]));
      return (
        bt(sa),
        (ki.inputStyles = { textarea: Oa, contenteditable: Ma }),
        (ki.defineMode = function(t) {
          ki.defaults.mode || 'null' == t || (ki.defaults.mode = t),
            function(t, e) {
              arguments.length > 2 &&
                (e.dependencies = Array.prototype.slice.call(arguments, 2)),
                (Wo[t] = e);
            }.apply(this, arguments);
        }),
        (ki.defineMIME = function(t, e) {
          Po[t] = e;
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
          function r() {
            t.value = s.getValue();
          }
          if (
            ((e = e ? f(e) : {}),
            (e.value = t.value),
            !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
            !e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
            null == e.autofocus)
          ) {
            var n = l();
            e.autofocus =
              n == t ||
              (null != t.getAttribute('autofocus') && n == document.body);
          }
          var i;
          if (t.form && (Oo(t.form, 'submit', r), !e.leaveSubmitMethodAlone)) {
            var o = t.form;
            i = o.submit;
            try {
              var a = (o.submit = function() {
                r(), (o.submit = i), o.submit(), (o.submit = a);
              });
            } catch (t) {}
          }
          (e.finishInit = function(e) {
            (e.save = r),
              (e.getTextArea = function() {
                return t;
              }),
              (e.toTextArea = function() {
                (e.toTextArea = isNaN),
                  r(),
                  t.parentNode.removeChild(e.getWrapperElement()),
                  (t.style.display = ''),
                  t.form &&
                    (pt(t.form, 'submit', r),
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
            (t.wheelEventPixels = Ir),
            (t.Doc = sa),
            (t.splitLines = _o),
            (t.countColumn = d),
            (t.findColumn = p),
            (t.isWordChar = w),
            (t.Pass = vo),
            (t.signal = gt),
            (t.Line = Ro),
            (t.changeEnd = Ur),
            (t.scrollbarModel = Yo),
            (t.Pos = W),
            (t.cmpPos = P),
            (t.modes = Wo),
            (t.mimeModes = Po),
            (t.resolveMode = Ot),
            (t.getMode = At),
            (t.modeExtensions = Ho),
            (t.extendMode = _t),
            (t.copyState = Nt),
            (t.startState = Dt),
            (t.innerMode = Et),
            (t.commands = va),
            (t.keyMap = ga),
            (t.keyName = ti),
            (t.isModifierKey = Qn),
            (t.lookupKey = Zn),
            (t.normalizeKeyMap = Yn),
            (t.StringStream = Fo),
            (t.SharedTextMarker = aa),
            (t.TextMarker = oa),
            (t.LineWidget = na),
            (t.e_preventDefault = wt),
            (t.e_stopPropagation = xt),
            (t.e_stop = St),
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
  function(t, e, r) {
    'use strict';
    (function(t) {
      var r =
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
        n =
          'object' == (void 0 === t ? 'undefined' : r(t)) &&
          t &&
          t.Object === Object &&
          t;
      e.a = n;
    }.call(e, r(8)));
  },
  function(t, e, r) {
    'use strict';
    (function(t) {
      var n = r(0),
        i = r(10),
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
        s = l && l.exports === a ? n.a.Buffer : void 0,
        u = (s ? s.isBuffer : void 0) || i.a;
      e.a = u;
    }.call(e, r(2)(t)));
  },
  function(t, e, r) {
    'use strict';
    function n(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function i(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function o(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function a(t) {
      var e = (this.__data__ = new w(t));
      this.size = e.size;
    }
    function l(t, e, r, n, i) {
      t !== e &&
        Et(
          e,
          function(o, a) {
            if (z(o)) i || (i = new Ot()), Ne(t, e, a, r, l, n, i);
            else {
              var s = n ? n(t[a], o, a + '', t, e, i) : void 0;
              void 0 === s && (s = o), Nt(t, a, s);
            }
          },
          Ae
        );
    }
    function s(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw new TypeError(Dr);
      var r = function r() {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (s.Cache || Lt)()), r;
    }
    function u(t, e, r) {
      function n(e) {
        var r = s,
          n = u;
        return (s = u = void 0), (p = e), (f = t.apply(n, r));
      }
      function i(t) {
        var r = t - h;
        return void 0 === h || r >= e || r < 0 || (v && t - p >= c);
      }
      function o() {
        var t = ln();
        if (i(t)) return a(t);
        d = setTimeout(
          o,
          (function(t) {
            var r = e - (t - h);
            return v ? wn(r, c - (t - p)) : r;
          })(t)
        );
      }
      function a(t) {
        return (d = void 0), m && s ? n(t) : ((s = u = void 0), f);
      }
      function l() {
        var t = ln(),
          r = i(t);
        if (((s = arguments), (u = this), (h = t), r)) {
          if (void 0 === d)
            return (function(t) {
              return (p = t), (d = setTimeout(o, e)), g ? n(t) : f;
            })(h);
          if (v) return (d = setTimeout(o, e)), n(h);
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
        g = !1,
        v = !1,
        m = !0;
      if ('function' != typeof t) throw new TypeError(yn);
      return (
        (e = mn(e) || 0),
        z(r) &&
          ((g = !!r.leading),
          (c = (v = 'maxWait' in r) ? bn(mn(r.maxWait) || 0, e) : c),
          (m = 'trailing' in r ? !!r.trailing : m)),
        (l.cancel = function() {
          void 0 !== d && clearTimeout(d), (p = 0), (s = h = u = d = void 0);
        }),
        (l.flush = function() {
          return void 0 === d ? f : a(ln());
        }),
        l
      );
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var c = r(1),
      f = r.n(c),
      d = (r(6),
      function() {
        (this.__data__ = []), (this.size = 0);
      }),
      h = function(t, e) {
        return t === e || (t != t && e != e);
      },
      p = function(t, e) {
        for (var r = t.length; r--; ) if (h(t[r][0], e)) return r;
        return -1;
      },
      g = Array.prototype.splice,
      v = function(t) {
        var e = this.__data__,
          r = p(e, t);
        return !(
          r < 0 ||
          (r == e.length - 1 ? e.pop() : g.call(e, r, 1), --this.size, 0)
        );
      },
      m = function(t) {
        var e = this.__data__,
          r = p(e, t);
        return r < 0 ? void 0 : e[r][1];
      },
      y = function(t) {
        return p(this.__data__, t) > -1;
      },
      b = function(t, e) {
        var r = this.__data__,
          n = p(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
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
      C = function(t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      },
      S = function(t) {
        return this.__data__.get(t);
      },
      k = function(t) {
        return this.__data__.has(t);
      },
      L = r(0),
      T = L.a.Symbol,
      M = Object.prototype,
      O = M.hasOwnProperty,
      A = M.toString,
      _ = T ? T.toStringTag : void 0,
      N = function(t) {
        var e = O.call(t, _),
          r = t[_];
        try {
          t[_] = void 0;
          var n = !0;
        } catch (t) {}
        var i = A.call(t);
        return n && (e ? (t[_] = r) : delete t[_]), i;
      },
      E = Object.prototype.toString,
      D = function(t) {
        return E.call(t);
      },
      W = '[object Null]',
      P = '[object Undefined]',
      H = T ? T.toStringTag : void 0,
      F = function(t) {
        return null == t
          ? void 0 === t ? P : W
          : H && H in Object(t) ? N(t) : D(t);
      },
      j =
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
        var e = void 0 === t ? 'undefined' : j(t);
        return null != t && ('object' == e || 'function' == e);
      },
      I = '[object AsyncFunction]',
      R = '[object Function]',
      B = '[object GeneratorFunction]',
      V = '[object Proxy]',
      U = function(t) {
        if (!z(t)) return !1;
        var e = F(t);
        return e == R || e == B || e == I || e == V;
      },
      G = L.a['__core-js_shared__'],
      q = (function() {
        var t = /[^.]+$/.exec((G && G.keys && G.keys.IE_PROTO) || '');
        return t ? 'Symbol(src)_1.' + t : '';
      })(),
      K = function(t) {
        return !!q && q in t;
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
      Q = Object.prototype,
      J = Z.toString,
      tt = Q.hasOwnProperty,
      et = RegExp(
        '^' +
          J.call(tt)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      ),
      rt = function(t) {
        return !(!z(t) || K(t)) && (U(t) ? et : Y).test(X(t));
      },
      nt = function(t, e) {
        return null == t ? void 0 : t[e];
      },
      it = function(t, e) {
        var r = nt(t, e);
        return rt(r) ? r : void 0;
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
          var r = e[t];
          return r === ut ? void 0 : r;
        }
        return ct.call(e, t) ? e[t] : void 0;
      },
      dt = Object.prototype.hasOwnProperty,
      ht = function(t) {
        var e = this.__data__;
        return at ? void 0 !== e[t] : dt.call(e, t);
      },
      pt = '__lodash_hash_undefined__',
      gt = function(t, e) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = at && void 0 === e ? pt : e),
          this
        );
      };
    (i.prototype.clear = lt),
      (i.prototype.delete = st),
      (i.prototype.get = ft),
      (i.prototype.has = ht),
      (i.prototype.set = gt);
    var vt = i,
      mt = function() {
        (this.size = 0),
          (this.__data__ = {
            hash: new vt(),
            map: new (ot || w)(),
            string: new vt(),
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
        var r = t.__data__;
        return bt(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
      },
      xt = function(t) {
        var e = wt(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      },
      Ct = function(t) {
        return wt(this, t).get(t);
      },
      St = function(t) {
        return wt(this, t).has(t);
      },
      kt = function(t, e) {
        var r = wt(this, t),
          n = r.size;
        return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
      };
    (o.prototype.clear = mt),
      (o.prototype.delete = xt),
      (o.prototype.get = Ct),
      (o.prototype.has = St),
      (o.prototype.set = kt);
    var Lt = o,
      Tt = 200,
      Mt = function(t, e) {
        var r = this.__data__;
        if (r instanceof w) {
          var n = r.__data__;
          if (!ot || n.length < Tt - 1)
            return n.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new Lt(n);
        }
        return r.set(t, e), (this.size = r.size), this;
      };
    (a.prototype.clear = x),
      (a.prototype.delete = C),
      (a.prototype.get = S),
      (a.prototype.has = k),
      (a.prototype.set = Mt);
    var Ot = a,
      At = (function() {
        try {
          var t = it(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })(),
      _t = function(t, e, r) {
        '__proto__' == e && At
          ? At(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      },
      Nt = function(t, e, r) {
        ((void 0 === r || h(t[e], r)) && (void 0 !== r || e in t)) ||
          _t(t, e, r);
      },
      Et = (function(t) {
        return function(e, r, n) {
          for (var i = -1, o = Object(e), a = n(e), l = a.length; l--; ) {
            var s = a[t ? l : ++i];
            if (!1 === r(o[s], s, o)) break;
          }
          return e;
        };
      })(),
      Dt = r(9),
      Wt = L.a.Uint8Array,
      Pt = function(t) {
        var e = new t.constructor(t.byteLength);
        return new Wt(e).set(new Wt(t)), e;
      },
      Ht = function(t, e) {
        var r = e ? Pt(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length);
      },
      Ft = function(t, e) {
        var r = -1,
          n = t.length;
        for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
        return e;
      },
      jt = Object.create,
      zt = (function() {
        function t() {}
        return function(e) {
          if (!z(e)) return {};
          if (jt) return jt(e);
          t.prototype = e;
          var r = new t();
          return (t.prototype = void 0), r;
        };
      })(),
      It = (function(t, e) {
        return function(r) {
          return t(e(r));
        };
      })(Object.getPrototypeOf, Object),
      Rt = Object.prototype,
      Bt = function(t) {
        var e = t && t.constructor;
        return t === (('function' == typeof e && e.prototype) || Rt);
      },
      Vt = function(t) {
        return 'function' != typeof t.constructor || Bt(t) ? {} : zt(It(t));
      },
      Ut =
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
      Gt = function(t) {
        return null != t && 'object' == (void 0 === t ? 'undefined' : Ut(t));
      },
      qt = '[object Arguments]',
      Kt = function(t) {
        return Gt(t) && F(t) == qt;
      },
      $t = Object.prototype,
      Xt = $t.hasOwnProperty,
      Yt = $t.propertyIsEnumerable,
      Zt = Kt(
        (function() {
          return arguments;
        })()
      )
        ? Kt
        : function(t) {
            return Gt(t) && Xt.call(t, 'callee') && !Yt.call(t, 'callee');
          },
      Qt = Array.isArray,
      Jt = 9007199254740991,
      te = function(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= Jt;
      },
      ee = function(t) {
        return null != t && te(t.length) && !U(t);
      },
      re = function(t) {
        return Gt(t) && ee(t);
      },
      ne = r(4),
      ie = '[object Object]',
      oe = Function.prototype,
      ae = Object.prototype,
      le = oe.toString,
      se = ae.hasOwnProperty,
      ue = le.call(Object),
      ce = function(t) {
        if (!Gt(t) || F(t) != ie) return !1;
        var e = It(t);
        if (null === e) return !0;
        var r = se.call(e, 'constructor') && e.constructor;
        return 'function' == typeof r && r instanceof r && le.call(r) == ue;
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
        return Gt(t) && te(t.length) && !!fe[F(t)];
      },
      he = function(t) {
        return function(e) {
          return t(e);
        };
      },
      pe = r(11),
      ge = pe.a && pe.a.isTypedArray,
      ve = ge ? he(ge) : de,
      me = Object.prototype.hasOwnProperty,
      ye = function(t, e, r) {
        var n = t[e];
        (me.call(t, e) && h(n, r) && (void 0 !== r || e in t)) || _t(t, e, r);
      },
      be = function(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, a = e.length; ++o < a; ) {
          var l = e[o],
            s = n ? n(r[l], t[l], l, r, t) : void 0;
          void 0 === s && (s = t[l]), i ? _t(r, l, s) : ye(r, l, s);
        }
        return r;
      },
      we = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      },
      xe = 9007199254740991,
      Ce = /^(?:0|[1-9]\d*)$/,
      Se = function(t, e) {
        return (
          !!(e = null == e ? xe : e) &&
          ('number' == typeof t || Ce.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      },
      ke = Object.prototype.hasOwnProperty,
      Le = function(t, e) {
        var r = Qt(t),
          n = !r && Zt(t),
          i = !r && !n && Object(ne.a)(t),
          o = !r && !n && !i && ve(t),
          a = r || n || i || o,
          l = a ? we(t.length, String) : [],
          s = l.length;
        for (var u in t)
          (!e && !ke.call(t, u)) ||
            (a &&
              ('length' == u ||
                (i && ('offset' == u || 'parent' == u)) ||
                (o &&
                  ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                Se(u, s))) ||
            l.push(u);
        return l;
      },
      Te = function(t) {
        var e = [];
        if (null != t) for (var r in Object(t)) e.push(r);
        return e;
      },
      Me = Object.prototype.hasOwnProperty,
      Oe = function(t) {
        if (!z(t)) return Te(t);
        var e = Bt(t),
          r = [];
        for (var n in t)
          ('constructor' != n || (!e && Me.call(t, n))) && r.push(n);
        return r;
      },
      Ae = function(t) {
        return ee(t) ? Le(t, !0) : Oe(t);
      },
      _e = function(t) {
        return be(t, Ae(t));
      },
      Ne = function(t, e, r, n, i, o, a) {
        var l = t[r],
          s = e[r],
          u = a.get(s);
        if (u) Nt(t, r, u);
        else {
          var c = o ? o(l, s, r + '', t, e, a) : void 0,
            f = void 0 === c;
          if (f) {
            var d = Qt(s),
              h = !d && Object(ne.a)(s),
              p = !d && !h && ve(s);
            (c = s),
              d || h || p
                ? Qt(l)
                  ? (c = l)
                  : re(l)
                    ? (c = Ft(l))
                    : h
                      ? ((f = !1), (c = Object(Dt.a)(s, !0)))
                      : p ? ((f = !1), (c = Ht(s, !0))) : (c = [])
                : ce(s) || Zt(s)
                  ? ((c = l),
                    Zt(l) ? (c = _e(l)) : (!z(l) || (n && U(l))) && (c = Vt(s)))
                  : (f = !1);
          }
          f && (a.set(s, c), i(c, s, n, o, a), a.delete(s)), Nt(t, r, c);
        }
      },
      Ee = l,
      De = function(t) {
        return t;
      },
      We = function(t, e, r) {
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
      Pe = Math.max,
      He = function(t, e, r) {
        return (
          (e = Pe(void 0 === e ? t.length - 1 : e, 0)),
          function() {
            for (
              var n = arguments, i = -1, o = Pe(n.length - e, 0), a = Array(o);
              ++i < o;

            )
              a[i] = n[e + i];
            i = -1;
            for (var l = Array(e + 1); ++i < e; ) l[i] = n[i];
            return (l[e] = r(a)), We(t, this, l);
          }
        );
      },
      Fe = function(t) {
        return function() {
          return t;
        };
      },
      je = At
        ? function(t, e) {
            return At(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: Fe(e),
              writable: !0,
            });
          }
        : De,
      ze = 800,
      Ie = 16,
      Re = Date.now,
      Be = (function(t) {
        var e = 0,
          r = 0;
        return function() {
          var n = Re(),
            i = Ie - (n - r);
          if (((r = n), i > 0)) {
            if (++e >= ze) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      })(je),
      Ve = function(t, e) {
        return Be(He(t, e, De), t + '');
      },
      Ue =
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
      Ge = function(t, e, r) {
        if (!z(r)) return !1;
        var n = void 0 === e ? 'undefined' : Ue(e);
        return (
          !!('number' == n
            ? ee(r) && Se(e, r.length)
            : 'string' == n && e in r) && h(r[e], t)
        );
      },
      qe = (function(t) {
        return Ve(function(e, r) {
          var n = -1,
            i = r.length,
            o = i > 1 ? r[i - 1] : void 0,
            a = i > 2 ? r[2] : void 0;
          for (
            o = t.length > 3 && 'function' == typeof o ? (i--, o) : void 0,
              a && Ge(r[0], r[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
              e = Object(e);
            ++n < i;

          ) {
            var l = r[n];
            l && t(e, l, n, o);
          }
          return e;
        });
      })(function(t, e, r) {
        Ee(t, e, r);
      }),
      Ke = 0,
      $e = function() {
        return 'domain-gfx-id-' + ++Ke;
      },
      Xe = window && window.Symbol ? Symbol('lib namespace') : '_' + $e(),
      Ye = function(t) {
        return {
          set: function(e, r) {
            t.setAttribute('data-' + e, r);
          },
          get: function(e) {
            return t.getAttribute('data-' + e);
          },
        };
      },
      Ze = function(t) {
        var e = t.className,
          r = t.acceptedMargin,
          n = document.createElement('style');
        return (
          (n.textContent =
            '\n.' +
            e +
            ' {\n  padding-bottom: ' +
            r +
            'px;\n  font-family: Sans-Serif;\n}\n.' +
            e +
            '.hidden {\n  pointer-events: none;\n  display: block;\n  opacity: 0;\n  transform: translate(-999px, -999px);\n  transform: translate(200vw, 200vh);\n}\n.' +
            e +
            '___container {\n  border-style: solid;\n  border-color: #dedede;\n  border-width: 1px 2px 2px 1px;\n  border-radius: 0.2em;\n  background-color: #fff;\n  margin-bottom: ' +
            r +
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
          n
        );
      },
      Qe =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        },
      Je = function(t) {
        var e = Qe({}, t, t.metadata || {}),
          r = e.identifier || e.type || e.accession || '',
          n = e.accession || '',
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
            g = 0;
          h - e.start > 0 && (g = (h - e.start) / d * 100),
            (f =
              '\n      ' +
              e.start +
              '<span style="width: 100px;" class="domain">\n        <span class="alignment" style="\n          width: ' +
              100 * (p - h) / d +
              'px;\n          margin-left: ' +
              g +
              'px;\n          background-color: ' +
              e.color +
              ';\n        "></span>\n      </span>' +
              e.end +
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
      tr = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      er = 5,
      rr = 'domain_gfx__tooltip',
      nr = function t(e) {
        if (!e) throw new Error('No entity found in the whole tree');
        return Ye(e).get('entity')
          ? e.getBoundingClientRect()
          : t(e.parentNode);
      },
      ir = function(t, e) {
        var r = t.left + t.width / 2 - e.width / 2;
        r = r < 0 ? 0 : Math.min(r, window.innerWidth - e.width);
        var n = t.top - e.height;
        return { x: Math.round(r), y: Math.round(n) };
      },
      or = function(t) {
        var e = document.createElement('div');
        return e.classList.add(rr + '___container'), (e.innerHTML = t), e;
      },
      ar = (function() {
        function t() {
          var e = this;
          if (
            ((function(t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (this._promoteTarget = function(t) {
              return function(r) {
                r.target !== t ||
                  e._promoted ||
                  (e._container.style.willChange = 'transform');
              };
            }),
            (this._demoteTarget = function(t) {
              return function(r) {
                var n = r.target,
                  i = r.relatedTarget;
                n === t &&
                  e._promoted &&
                  ((i && i === e._container) ||
                    (e._container.style.willChange = ''));
              };
            }),
            (this._replaceTooltipContent = function(t) {
              (e._current = or(Je(t))),
                e._container.replaceChild(
                  e._current,
                  e._container.firstElementChild
                );
            }),
            (this._hide = function() {
              e._container.classList.add('hidden'), (e._visible = !1);
            }),
            (this._display = function(t) {
              var r = t.x,
                n = t.y;
              (e._container.style.transform =
                'translate(' + r + 'px, ' + (n + er) + 'px)'),
                e._container.classList.remove('hidden');
            }),
            (this._handleMouseOver = function(t) {
              var r = t.target[Xe];
              e._currentData !== r &&
                (e._currentData || r) &&
                ((e._currentData = r),
                e._replaceTooltipContent(r),
                e._display(
                  ir(nr(t.target), e._container.getBoundingClientRect())
                ));
            }),
            (this._handleMouseOut = function(t) {
              if (t.target[Xe] && t.relatedTarget !== e._container) {
                var r = t.relatedTarget[Xe];
                r !== e._currentData &&
                  ((e._currentData = r || null),
                  r
                    ? (e._replaceTooltipContent(r),
                      e._display(
                        ir(
                          nr(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              }
            }),
            window)
          ) {
            var r = document.createElement('div');
            r.classList.add(rr),
              r.classList.add('hidden'),
              (r.style.position = 'fixed'),
              (r.style.left = '0'),
              (r.style.top = '0');
            var n = or('<p>placeholder</p>');
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
              Ze({ className: rr, acceptedMargin: er })
            ),
              r.addEventListener('mouseleave', function(t) {
                var r = t.relatedTarget[Xe];
                r !== e._currentData &&
                  ((e._currentData = r || null),
                  r
                    ? (e._replaceTooltipContent(r),
                      e._display(
                        ir(
                          nr(t.relatedTarget),
                          e._container.getBoundingClientRect()
                        )
                      ))
                    : e._hide());
              });
          }
        }
        return (
          tr(t, [
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
          ]),
          t
        );
      })(),
      lr = void 0,
      sr = function() {
        return lr || (lr = new ar()), lr;
      },
      ur = function(t) {
        return function(e) {
          for (
            var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
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
          } catch (t) {
            (g = !0), (v = t);
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
      cr = ur('svg'),
      fr = ur('circle'),
      dr = ur('defs'),
      hr = ur('linearGradient'),
      pr = ur('g'),
      gr = ur('mask'),
      vr = ur('path'),
      mr = ur('rect'),
      yr = ur('stop'),
      br = ur('text'),
      wr = ur('filter'),
      xr = ur('feGaussianBlur'),
      Cr = ur('feSpecularLighting'),
      Sr = ur('fePointLight'),
      kr = ur('feComposite'),
      Lr = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      Tr = (function() {
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
          Lr(t, [
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
      Mr = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t ? 'v' + e : 0 === e ? 'h' + t : 'l' + t + ',' + e;
      },
      Or = function(t) {
        return Mr(0, t);
      },
      Ar = function(t, e) {
        var r = t.start,
          n = t.end,
          i = t.v_align,
          o = t.vAlign,
          a = t.level,
          l = void 0 === a ? 0 : a,
          s = t.lineColor,
          u = t.headColor,
          c = t.color,
          f = t.headStyle,
          d = /top/i.test(i || o),
          h = new Tr().add(Or((1.5 * l + 8) * (d ? -1 : 1)));
        return (
          n &&
            (h = h
              .add(
                (function(t) {
                  return Mr(t, 0);
                })((n - r) * e)
              )
              .add(Or((1.5 * l + 8) * (d ? 1 : -1)))),
          (h = h.finish()),
          pr(
            null,
            vr({ d: h, fill: 'none', stroke: s || (n && c) || 'black' }),
            !n &&
              (function(t) {
                var e = t.style,
                  r = t.color,
                  n = t.isOnTop;
                switch (e) {
                  case 'diamond':
                    return (function(t, e) {
                      var r = new Tr('m0,' + (e ? -10 : 6))
                        .add(Mr(2, 2))
                        .add(Mr(-2, 2))
                        .add(Mr(-2, -2))
                        .close();
                      return vr({ d: r, fill: t });
                    })(r, n);
                  case 'circle':
                    return (function(t, e) {
                      return fr({ cx: 0, cy: e ? -8 : 8, r: 1.5, fill: t });
                    })(r, n);
                  case 'arrow':
                    return (function(t, e) {
                      var r = void 0;
                      return (
                        (r = e
                          ? new Tr('m-2,-6')
                              .add(Mr(2, -2))
                              .add(Mr(2, 2))
                              .finish()
                          : new Tr('m-2,6')
                              .add(Mr(2, 2))
                              .add(Mr(2, -2))
                              .finish()),
                        vr({ stroke: t, fill: 'none', d: r })
                      );
                    })(r, n);
                  case 'pointer':
                    return (function(t, e) {
                      var r = void 0;
                      return (
                        (r = e
                          ? new Tr('m-2,-4.5')
                              .add(Mr(2, 2))
                              .add(Mr(2, -2))
                              .finish()
                          : new Tr('m-2,4.5')
                              .add(Mr(2, -2))
                              .add(Mr(2, 2))
                              .finish()),
                        vr({ stroke: t, fill: 'none', d: r })
                      );
                    })(r, n);
                  case 'line':
                    return (function(t, e) {
                      return vr({
                        stroke: t,
                        d: new Tr('m0,' + (8 * (e ? -1 : 1) - 1.5))
                          .add(Or(3))
                          .finish(),
                      });
                    })(r, n);
                  case 'square':
                  default:
                    return (function(t, e) {
                      return mr({
                        x: -1.5,
                        y: e ? -9.5 : 6.5,
                        width: 3,
                        height: 3,
                        fill: t,
                      });
                    })(r, n);
                }
              })({ color: u || (!n && c) || 'black', style: f, isOnTop: d })
          )
        );
      },
      _r = function(t) {
        var e = t.position,
          r = e.x,
          n = e.y,
          i = t.length,
          o = t.height,
          a = t.color;
        return mr({
          x: r,
          y: n,
          width: i,
          height: o,
          fill: a || '#d8d8d8',
          rx: o / 2,
          ry: o / 2,
        });
      },
      Nr = function(t) {
        var e = t.position,
          r = e.x,
          n = e.y,
          i = t.length,
          o = t.height,
          a = t.color;
        return mr({ x: r, y: n, width: i, height: o, fill: a || 'black' });
      },
      Er = function(t, e) {
        var r = $e();
        return {
          gradientId: r,
          gradientElement: hr.apply(
            void 0,
            [{ id: r, x1: 0, x2: 0, y1: 0, y2: 1 }].concat(
              (function(t) {
                if (Array.isArray(t)) {
                  for (var e = 0, r = Array(t.length); e < t.length; e++)
                    r[e] = t[e];
                  return r;
                }
                return Array.from(t);
              })(
                (e
                  ? function(t) {
                      var e = t;
                      1 === e.length && (e[1] = e[0]);
                      var r = 100 / (e.length - 1);
                      return e.map(function(t, e) {
                        return yr({ offset: e * r + '%', 'stop-color': t });
                      });
                    }
                  : function(t) {
                      for (
                        var e = [], r = t.length, n = 100 / r, i = 0;
                        i < r;
                        i++
                      )
                        e.push(yr({ offset: i * n + '%', 'stop-color': t[i] })),
                          e.push(
                            yr({ offset: i * n + n + '%', 'stop-color': t[i] })
                          );
                      return e;
                    })(t)
              )
            )
          ),
        };
      },
      Dr = 'Expected a function';
    s.Cache = Lt;
    var Wr = s,
      Pr = (function() {
        return function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function(t, e) {
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
                  !n && l.return && l.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(t, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Hr = void 0;
    window &&
      document &&
      window.getComputedStyle &&
      ((Hr = document.createElement('p')).style.opacity = '0');
    var Fr = /rgba?\((\d+), (\d+), (\d+)/,
      jr = Wr(function(t) {
        if (!Hr) return 'black';
        var e = (function(t) {
          if (!Hr || !document.body) return { r: 255, g: 255, b: 255 };
          (Hr.style.background = t), document.body.appendChild(Hr);
          var e = window.getComputedStyle(Hr).backgroundColor.match(Fr),
            r = Pr(e, 4),
            n = r[1],
            i = r[2],
            o = r[3];
          return (
            document.body && document.body.removeChild(Hr),
            { r: +n, g: +i, b: +o }
          );
        })(t);
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 >= 128
          ? 'black'
          : 'white';
      }),
      zr = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return 0 === t ? 'v' + e : 0 === e ? 'h' + t : 'l' + t + ',' + e;
      },
      Ir = function(t) {
        return zr(t, 0);
      },
      Rr = function(t) {
        return zr(0, t);
      },
      Br = function(t, e, r, n, i, o, a) {
        return (
          'A' + t + ',' + e + ',' + r + ',' + n + ',' + i + ',' + o + ',' + a
        );
      },
      Vr = function(t, e, r, n) {
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
              a = $e();
            return {
              maskId: a,
              maskElement: gr(
                {
                  id: a,
                  x: 0,
                  y: 0,
                  width: (i - e) * o,
                  height: 10,
                  fill: '#fff',
                },
                mr({
                  x: 0,
                  y: 0,
                  width: (r - e) * o,
                  height: 10,
                  opacity: 0.6,
                }),
                mr({
                  x: (r - e) * o,
                  y: 0,
                  width: (n - r) * o,
                  height: 10,
                  opacity: 1,
                }),
                mr({
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
          g = p.maskId;
        n(p.maskElement);
        var v = c,
          m = {};
        Array.isArray(v) &&
          (n((m = Er(v, h)).gradientElement),
          (v = 'url(#' + m.gradientId + ')'));
        var y = br(
          {
            x: (l - i) * e / 2,
            y: 8,
            'text-anchor': 'middle',
            'font-size': 7.5,
            'font-family': 'Sans-Serif',
            fill: d || jr(Array.isArray(c) ? c[0] : c),
            opacity: 0,
          },
          f || ''
        );
        return (
          Ye(y).set('maxwidth', (l - i) * e),
          pr(
            null,
            (function(t) {
              var e = t.start,
                r = t.end,
                n = t.startStyle,
                i = t.endStyle,
                o = t.fill,
                a = t.residueWidth,
                l = t.mask,
                s = t.filter,
                u = (r - e) * a - 10,
                c = new Tr('m5,0')
                  .add(Ir(u))
                  .add(
                    (function(t, e) {
                      switch (t.toLowerCase()) {
                        case 'jagged':
                          return (
                            Ir(5) +
                            zr(-2.5, 2.5) +
                            zr(2.5, 2.5) +
                            zr(-2.5, 2.5) +
                            zr(2.5, 2.5) +
                            Ir(-5)
                          );
                        case 'arrow':
                          return zr(5, 5) + zr(-5, 5);
                        case 'curved':
                          return Br(5, 5, 0, 0, 1, e + 5, 10);
                        case 'straight':
                        default:
                          return Ir(5) + Rr(10) + Ir(-5);
                      }
                    })(i || '', u)
                  )
                  .add(Ir(-u))
                  .add(
                    (function(t) {
                      switch (t.toLowerCase()) {
                        case 'jagged':
                          return (
                            Ir(-5) +
                            zr(2.5, -2.5) +
                            zr(-2.5, -2.5) +
                            zr(2.5, -2.5) +
                            zr(-2.5, -2.5) +
                            Ir(5)
                          );
                        case 'arrow':
                          return zr(-5, -5) + zr(5, -5);
                        case 'curved':
                          return Br(5, 5, 0, 0, 1, 5, 0);
                        case 'straight':
                        default:
                          return Ir(-5) + Rr(-10) + Ir(5);
                      }
                    })(n || '')
                  )
                  .close();
              return vr({ d: c, fill: o, mask: l, filter: s });
            })({
              start: i,
              end: l,
              startStyle: s,
              endStyle: u,
              residueWidth: e,
              fill: v,
              mask: 'url(#' + g + ')',
              filter: r && 'url(#' + r + ')',
            }),
            f ? y : null
          )
        );
      },
      Ur =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        },
      Gr = function(t, e) {
        var r = t.position,
          n = r.x,
          i = r.y,
          o = t.length,
          a = t.height,
          l = t.color,
          s = t.gradient,
          u = { x: n, y: i, width: o, height: a, opacity: 0.5 };
        if (!Array.isArray(l)) return mr(Ur({}, u, { fill: l || 'gray' }));
        var c = Er(l, s),
          f = c.gradientId;
        return e(c.gradientElement), mr(Ur({}, u, { fill: 'url(#' + f + ')' }));
      },
      qr = (function() {
        return function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function(t, e) {
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
                  !n && l.return && l.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            })(t, e);
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          );
        };
      })(),
      Kr = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      $r = function(t, e) {
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
              a.value[Xe] = e;
            }
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (i) throw o;
            }
          }
        }
      },
      Xr = (function() {
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
            (this._addToDefs = function(t) {
              return r._defs.appendChild(t);
            }),
            (this.drawMarkup = function(t, e, n) {
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
                    !o && u.return && u.return();
                  } finally {
                    if (a) throw l;
                  }
                }
                var f = qr(i, 1)[0];
                t.level = f || 0;
              }
              var d = pr(
                { transform: 'translate(' + t.start * e + ', 10)' },
                Ar(t, e)
              );
              Ye(d).set('entity', 'markup'), $r(d, t), r._canvas.appendChild(d);
            }),
            (this.drawSequence = function(t) {
              var e = pr(
                { transform: 'translate(0 10)' },
                _r({
                  position: { x: 0, y: -2.5 },
                  length: t,
                  height: 5,
                  color: '#d8d8d8',
                })
              );
              Ye(e).set('entity', 'sequence'), r._canvas.appendChild(e);
            }),
            (this.drawHit = function(t, e) {
              var n = pr(
                { transform: 'translate(' + t.tstart * e + ', 16)' },
                Nr({
                  position: { x: 0, y: 0 },
                  length: (t.tend - t.tstart) * e,
                  height: 2,
                  color: t.color,
                })
              );
              Ye(n).set('entity', 'hit'),
                $r(n, t, !0),
                r._canvas.appendChild(n);
            }),
            (this.drawRegion = function(t, e) {
              var n = pr(
                { transform: 'translate(' + t.start * e + ', 5)' },
                Vr(t, e, r._spotlight, r._addToDefs)
              );
              Ye(n).set('entity', 'region'), $r(n, t), r._canvas.appendChild(n);
              var i = n.querySelector('[data-maxwidth]');
              i &&
                (i.getBBox().width <= +(Ye(i).get('maxwidth') - 0)
                  ? i.setAttribute('opacity', 1)
                  : i.parentElement && i.parentElement.removeChild(i));
            }),
            (this.drawMotif = function(t, e) {
              var n = pr(
                { transform: 'translate(' + t.start * e + ', 6)' },
                Gr(
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
              Ye(n).set('entity', 'motif'), $r(n, t), r._canvas.appendChild(n);
            }),
            (this._spotlight = a && $e()),
            (this._defs = dr(
              null,
              this._spotlight &&
                wr(
                  {
                    id: this._spotlight,
                    filterUnits: 'objectBoundingBox',
                    x: -0.1,
                    y: -0.1,
                    width: 5,
                    height: 5,
                  },
                  xr({
                    in: 'SourceAlpha',
                    stdDeviation: 1,
                    result: 'alpha_blur',
                  }),
                  Cr(
                    {
                      in: 'alpha_blur',
                      surfaceScale: 5,
                      specularConstant: 1.5,
                      specularExponent: 12,
                      'lighting-color': '#ddd',
                      result: 'light',
                    },
                    Sr({ x: -100, y: -200, z: 100 })
                  ),
                  kr({ in: 'SourceGraphic', in2: 'light', operator: 'out' })
                )
            )),
            (this._canvas = cr(
              { width: n, height: i, viewBox: '0 0 ' + n + ' ' + i },
              this._defs
            )),
            (this._canvas.style.width = 2 * n + 'px'),
            (this._canvas.style.height = 2 * i + 'px');
        }
        return (
          Kr(t, [
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
      Yr = function() {
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
      Zr =
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
      Qr = new Set([
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
      Jr = /(^.*colo)u(r.*$)/i,
      tn = /^f(alse)?$/i,
      en = function t(e) {
        var r = {},
          n = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, l = Object.keys(e)[Symbol.iterator]();
            !(n = (a = l.next()).done);
            n = !0
          ) {
            var s = a.value,
              u = e[s],
              c = s,
              f = u;
            if (Qr.has(c) && ((f = +f), isNaN(f)))
              throw new Error(
                'expected key ' + s + ' to be a number, not ' + String(u) + ')'
              );
            Jr.test(c) && (c = c.replace(Jr, '$1$2')),
              'display' === c && (f = 'string' == typeof f ? !tn.test(f) : !!f),
              f &&
                (Array.isArray(f)
                  ? (f = f.map(function(e) {
                      return e &&
                        'object' === (void 0 === e ? 'undefined' : Zr(e))
                        ? t(e)
                        : e;
                    }))
                  : 'object' === (void 0 === f ? 'undefined' : Zr(f)) &&
                    (f = t(f))),
              (r[c] = f);
          }
        } catch (t) {
          (i = !0), (o = t);
        } finally {
          try {
            !n && l.return && l.return();
          } finally {
            if (i) throw o;
          }
        }
        return r;
      },
      rn = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e;
        };
      })(),
      nn = function(t) {
        var e = t.hidden,
          r = t.display;
        return e || !(void 0 === r || r);
      },
      on = (function() {
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
            (this._draw = function() {
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
                  nn(u) ||
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
                  var g = h.value;
                  nn(g) ||
                    (e._renderer.drawHit(g, e._params.image.width.residue),
                    (n = !0));
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
              var v = !0,
                m = !1,
                y = void 0;
              try {
                for (
                  var b, w = (e._data.regions || [])[Symbol.iterator]();
                  !(v = (b = w.next()).done);
                  v = !0
                ) {
                  var x = b.value;
                  nn(x) ||
                    (e._renderer.drawRegion(x, e._params.image.width.residue),
                    (n |= !(!x.tooltip && !x.metadata)));
                }
              } catch (t) {
                (m = !0), (y = t);
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
                  var L, T = (e._data.motifs || [])[Symbol.iterator]();
                  !(C = (L = T.next()).done);
                  C = !0
                ) {
                  var M = L.value;
                  nn(M) ||
                    (e._renderer.drawMotif(M, e._params.image.width.residue),
                    (n |= !(!M.tooltip && !M.metadata)));
                }
              } catch (t) {
                (S = !0), (k = t);
              } finally {
                try {
                  !C && T.return && T.return();
                } finally {
                  if (S) throw k;
                }
              }
              n && (e._detach = sr().attachToCanvas(e._renderer.canvas));
            }),
            (this._createCanvas = function() {
              return (
                (e._renderer = new Xr({
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
            (this._data = en(i)),
            (this._parent = o),
            (this._params = qe({}, Yr(), l)),
            (this._canvas = this._createCanvas()),
            this._parent.appendChild(this._canvas),
            this._draw();
        }
        return (
          rn(t, [
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
                this._data = en(t);
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
      an = on;
    try {
      document.dispatchEvent(new CustomEvent('domainGfxReady', { detail: on }));
    } catch (t) {}
    var ln = function() {
        return L.a.Date.now();
      },
      sn =
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
      un = '[object Symbol]',
      cn = function(t) {
        return (
          'symbol' == (void 0 === t ? 'undefined' : sn(t)) ||
          (Gt(t) && F(t) == un)
        );
      },
      fn = NaN,
      dn = /^\s+|\s+$/g,
      hn = /^[-+]0x[0-9a-f]+$/i,
      pn = /^0b[01]+$/i,
      gn = /^0o[0-7]+$/i,
      vn = parseInt,
      mn = function(t) {
        if ('number' == typeof t) return t;
        if (cn(t)) return fn;
        if (z(t)) {
          var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = z(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(dn, '');
        var r = pn.test(t);
        return r || gn.test(t)
          ? vn(t.slice(2), r ? 2 : 8)
          : hn.test(t) ? fn : +t;
      },
      yn = 'Expected a function',
      bn = Math.max,
      wn = Math.min,
      xn = u,
      Cn = r(12),
      Sn = r.n(Cn),
      kn = document.querySelector('.data textarea'),
      Ln = document.querySelector('.visu'),
      Tn = document.querySelector('.invalid'),
      Mn = void 0,
      On = function(t) {
        var e = t.getValue(),
          r = void 0;
        try {
          r = JSON.parse(e);
        } catch (t) {
          return Tn.classList.remove('hidden'), void console.error(t);
        }
        Mn ? (Mn.data = r) : (Mn = new an({ parent: Ln, data: r })),
          Tn.classList.add('hidden');
      };
    kn.value = JSON.stringify(Sn.a, null, 2);
    var An = f.a.fromTextArea(kn, { lineNumbers: !0 });
    An.on('change', xn(On, 1e3)), On(An);
  },
  function(t, e, r) {
    (function(t) {
      var n,
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
          ? l(r(1))
          : ((i = [r(1)]),
            void 0 !== (o = 'function' == typeof (n = l) ? n.apply(e, i) : n) &&
              (t.exports = o));
      })(function(t) {
        'use strict';
        t.defineMode('javascript', function(e, r) {
          function n(t, e, r) {
            return (bt = t), (wt = r), e;
          }
          function i(t, e) {
            var r = t.next();
            if ('"' == r || "'" == r)
              return (
                (e.tokenize = (function(t) {
                  return function(e, r) {
                    var o,
                      a = !1;
                    if (St && '@' == e.peek() && e.match(At))
                      return (r.tokenize = i), n('jsonld-keyword', 'meta');
                    for (; null != (o = e.next()) && (o != t || a); )
                      a = !a && '\\' == o;
                    return a || (r.tokenize = i), n('string', 'string');
                  };
                })(r)),
                e.tokenize(t, e)
              );
            if ('.' == r && t.match(/^\d+(?:[eE][+\-]?\d+)?/))
              return n('number', 'number');
            if ('.' == r && t.match('..')) return n('spread', 'meta');
            if (/[\[\]{}\(\),;\:\.]/.test(r)) return n(r);
            if ('=' == r && t.eat('>')) return n('=>', 'operator');
            if ('0' == r && t.eat(/x/i))
              return t.eatWhile(/[\da-f]/i), n('number', 'number');
            if ('0' == r && t.eat(/o/i))
              return t.eatWhile(/[0-7]/i), n('number', 'number');
            if ('0' == r && t.eat(/b/i))
              return t.eatWhile(/[01]/i), n('number', 'number');
            if (/\d/.test(r))
              return (
                t.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
                n('number', 'number')
              );
            if ('/' == r)
              return t.eat('*')
                ? ((e.tokenize = o), o(t, e))
                : t.eat('/')
                  ? (t.skipToEnd(), n('comment', 'comment'))
                  : yt(t, e, 1)
                    ? ((function(t) {
                        for (var e, r = !1, n = !1; null != (e = t.next()); ) {
                          if (!r) {
                            if ('/' == e && !n) return;
                            '[' == e ? (n = !0) : n && ']' == e && (n = !1);
                          }
                          r = !r && '\\' == e;
                        }
                      })(t),
                      t.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                      n('regexp', 'string-2'))
                    : (t.eat('='), n('operator', 'operator', t.current()));
            if ('`' == r) return (e.tokenize = l), l(t, e);
            if ('#' == r) return t.skipToEnd(), n('error', 'error');
            if (Ot.test(r))
              return (
                ('>' == r && e.lexical && '>' == e.lexical.type) ||
                  (t.eat('=')
                    ? ('!' != r && '=' != r) || t.eat('=')
                    : /[<>*+\-]/.test(r) && (t.eat(r), '>' == r && t.eat(r))),
                n('operator', 'operator', t.current())
              );
            if (Tt.test(r)) {
              t.eatWhile(Tt);
              var a = t.current();
              if ('.' != e.lastType) {
                if (Mt.propertyIsEnumerable(a)) {
                  var s = Mt[a];
                  return n(s.type, s.style, a);
                }
                if ('async' == a && t.match(/^\s*[\(\w]/, !1))
                  return n('async', 'keyword', a);
              }
              return n('variable', 'variable', a);
            }
          }
          function o(t, e) {
            for (var r, o = !1; (r = t.next()); ) {
              if ('/' == r && o) {
                e.tokenize = i;
                break;
              }
              o = '*' == r;
            }
            return n('comment', 'comment');
          }
          function l(t, e) {
            for (var r, o = !1; null != (r = t.next()); ) {
              if (!o && ('`' == r || ('$' == r && t.eat('{')))) {
                e.tokenize = i;
                break;
              }
              o = !o && '\\' == r;
            }
            return n('quasi', 'string-2', t.current());
          }
          function s(t, e) {
            e.fatArrowAt && (e.fatArrowAt = null);
            var r = t.string.indexOf('=>', t.start);
            if (!(r < 0)) {
              if (Lt) {
                var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                  t.string.slice(t.start, r)
                );
                n && (r = n.index);
              }
              for (var i = 0, o = !1, a = r - 1; a >= 0; --a) {
                var l = t.string.charAt(a),
                  s = _t.indexOf(l);
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
          function u(t, e, r, n, i, o) {
            (this.indented = t),
              (this.column = e),
              (this.type = r),
              (this.prev = i),
              (this.info = o),
              null != n && (this.align = n);
          }
          function c(t, e) {
            for (n = t.localVars; n; n = n.next) if (n.name == e) return !0;
            for (var r = t.context; r; r = r.prev)
              for (var n = r.vars; n; n = n.next) if (n.name == e) return !0;
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
              for (var r = e; r; r = r.next) if (r.name == t) return !0;
              return !1;
            }
            var n = Et.state;
            if (((Et.marked = 'def'), n.context)) {
              if (e(n.localVars)) return;
              n.localVars = { name: t, next: n.localVars };
            } else {
              if (e(n.globalVars)) return;
              r.globalVars && (n.globalVars = { name: t, next: n.globalVars });
            }
          }
          function p() {
            (Et.state.context = {
              prev: Et.state.context,
              vars: Et.state.localVars,
            }),
              (Et.state.localVars = Dt);
          }
          function g() {
            (Et.state.localVars = Et.state.context.vars),
              (Et.state.context = Et.state.context.prev);
          }
          function v(t, e) {
            var r = function() {
              var r = Et.state,
                n = r.indented;
              if ('stat' == r.lexical.type) n = r.lexical.indented;
              else
                for (
                  var i = r.lexical;
                  i && ')' == i.type && i.align;
                  i = i.prev
                )
                  n = i.indented;
              r.lexical = new u(n, Et.stream.column(), t, null, r.lexical, e);
            };
            return (r.lex = !0), r;
          }
          function m() {
            var t = Et.state;
            t.lexical.prev &&
              (')' == t.lexical.type && (t.indented = t.lexical.indented),
              (t.lexical = t.lexical.prev));
          }
          function y(t) {
            function e(r) {
              return r == t ? d() : ';' == t ? f() : d(e);
            }
            return e;
          }
          function b(t, e) {
            return 'var' == t
              ? d(v('vardef', e.length), q, y(';'), m)
              : 'keyword a' == t
                ? d(v('form'), C, b, m)
                : 'keyword b' == t
                  ? d(v('form'), b, m)
                  : 'keyword d' == t
                    ? Et.stream.match(/^\s*$/, !1)
                      ? d()
                      : d(v('stat'), k, y(';'), m)
                    : 'debugger' == t
                      ? d(y(';'))
                      : '{' == t
                        ? d(v('}'), j, m)
                        : ';' == t
                          ? d()
                          : 'if' == t
                            ? ('else' == Et.state.lexical.info &&
                                Et.state.cc[Et.state.cc.length - 1] == m &&
                                Et.state.cc.pop()(),
                              d(v('form'), C, b, m, Z))
                            : 'function' == t
                              ? d(nt)
                              : 'for' == t
                                ? d(v('form'), Q, b, m)
                                : 'variable' == t
                                  ? Lt && 'type' == e
                                    ? ((Et.marked = 'keyword'),
                                      d(I, y('operator'), I, y(';')))
                                    : Lt && 'declare' == e
                                      ? ((Et.marked = 'keyword'), d(b))
                                      : d(v('stat'), N)
                                  : 'switch' == t
                                    ? d(
                                        v('form'),
                                        C,
                                        y('{'),
                                        v('}', 'switch'),
                                        j,
                                        m,
                                        m
                                      )
                                    : 'case' == t
                                      ? d(w, y(':'))
                                      : 'default' == t
                                        ? d(y(':'))
                                        : 'catch' == t
                                          ? d(
                                              v('form'),
                                              p,
                                              y('('),
                                              it,
                                              y(')'),
                                              b,
                                              m,
                                              g
                                            )
                                          : 'class' == t
                                            ? d(v('form'), at, m)
                                            : 'export' == t
                                              ? d(v('stat'), ct, m)
                                              : 'import' == t
                                                ? d(v('stat'), dt, m)
                                                : 'module' == t
                                                  ? d(
                                                      v('form'),
                                                      K,
                                                      y('{'),
                                                      v('}'),
                                                      j,
                                                      m,
                                                      m
                                                    )
                                                  : 'async' == t
                                                    ? d(b)
                                                    : '@' == e
                                                      ? d(w, b)
                                                      : f(
                                                          v('stat'),
                                                          w,
                                                          y(';'),
                                                          m
                                                        );
          }
          function w(t) {
            return S(t, !1);
          }
          function x(t) {
            return S(t, !0);
          }
          function C(t) {
            return '(' != t ? f() : d(v(')'), w, y(')'), m);
          }
          function S(t, e) {
            if (Et.state.fatArrowAt == Et.stream.start) {
              var r = e ? _ : A;
              if ('(' == t) return d(p, v(')'), H(it, ')'), m, y('=>'), r, g);
              if ('variable' == t) return f(p, K, y('=>'), r, g);
            }
            var n = e ? T : L;
            return Nt.hasOwnProperty(t)
              ? d(n)
              : 'function' == t
                ? d(nt, n)
                : 'class' == t
                  ? d(v('form'), ot, m)
                  : 'keyword c' == t || 'async' == t
                    ? d(e ? x : w)
                    : '(' == t
                      ? d(v(')'), k, y(')'), m, n)
                      : 'operator' == t || 'spread' == t
                        ? d(e ? x : w)
                        : '[' == t
                          ? d(v(']'), mt, m, n)
                          : '{' == t
                            ? F(D, '}', null, n)
                            : 'quasi' == t
                              ? f(M, n)
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
                                            ? d(G, t ? T : L)
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
          function T(t, e, r) {
            var n = 0 == r ? L : T,
              i = 0 == r ? w : x;
            return '=>' == t
              ? d(p, r ? _ : A, g)
              : 'operator' == t
                ? /\+\+|--/.test(e) || (Lt && '!' == e)
                  ? d(n)
                  : '?' == e ? d(w, y(':'), i) : d(i)
                : 'quasi' == t
                  ? f(M, n)
                  : ';' != t
                    ? '(' == t
                      ? F(x, ')', 'call', n)
                      : '.' == t
                        ? d(E, n)
                        : '[' == t
                          ? d(v(']'), k, y(']'), m, n)
                          : Lt && 'as' == e
                            ? ((Et.marked = 'keyword'), d(I, n))
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
          function A(t) {
            return s(Et.stream, Et.state), f('{' == t ? b : w);
          }
          function _(t) {
            return s(Et.stream, Et.state), f('{' == t ? b : x);
          }
          function N(t) {
            return ':' == t ? d(m, b) : f(L, y(';'), m);
          }
          function E(t) {
            if ('variable' == t) return (Et.marked = 'property'), d();
          }
          function D(t, e) {
            if ('async' == t) return (Et.marked = 'property'), d(D);
            if ('variable' == t || 'keyword' == Et.style) {
              if (((Et.marked = 'property'), 'get' == e || 'set' == e))
                return d(W);
              var r;
              return (
                Lt &&
                  Et.state.fatArrowAt == Et.stream.start &&
                  (r = Et.stream.match(/^\s*:\s*/, !1)) &&
                  (Et.state.fatArrowAt = Et.stream.pos + r[0].length),
                d(P)
              );
            }
            return 'number' == t || 'string' == t
              ? ((Et.marked = St ? 'property' : Et.style + ' property'), d(P))
              : 'jsonld-keyword' == t
                ? d(P)
                : 'modifier' == t
                  ? d(D)
                  : '[' == t
                    ? d(w, y(']'), P)
                    : 'spread' == t
                      ? d(x, P)
                      : '*' == e
                        ? ((Et.marked = 'keyword'), d(D))
                        : ':' == t ? f(P) : void 0;
          }
          function W(t) {
            return 'variable' != t ? f(P) : ((Et.marked = 'property'), d(nt));
          }
          function P(t) {
            return ':' == t ? d(x) : '(' == t ? f(nt) : void 0;
          }
          function H(t, e, r) {
            function n(i, o) {
              if (r ? r.indexOf(i) > -1 : ',' == i) {
                var a = Et.state.lexical;
                return (
                  'call' == a.info && (a.pos = (a.pos || 0) + 1),
                  d(function(r, n) {
                    return r == e || n == e ? f() : f(t);
                  }, n)
                );
              }
              return i == e || o == e ? d() : d(y(e));
            }
            return function(r, i) {
              return r == e || i == e ? d() : f(t, n);
            };
          }
          function F(t, e, r) {
            for (var n = 3; n < arguments.length; n++) Et.cc.push(arguments[n]);
            return d(v(e, r), H(t, e), m);
          }
          function j(t) {
            return '}' == t ? d() : f(b, j);
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
                : ((Et.marked = 'type'), d(U))
              : 'string' == t || 'number' == t || 'atom' == t
                ? d(U)
                : '[' == t
                  ? d(v(']'), H(I, ']', ','), m, U)
                  : '{' == t
                    ? d(v('}'), H(B, '}', ',;'), m, U)
                    : '(' == t ? d(H(V, ')'), R) : void 0;
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
          function V(t) {
            return 'variable' == t ? d(V) : ':' == t ? d(I) : void 0;
          }
          function U(t, e) {
            return '<' == e
              ? d(v('>'), H(I, '>'), m, U)
              : '|' == e || '.' == t
                ? d(I)
                : '[' == t ? d(y(']'), U) : 'extends' == e ? d(I) : void 0;
          }
          function G(t, e) {
            if ('<' == e) return d(v('>'), H(I, '>'), m, U);
          }
          function q() {
            return f(K, z, X, Y);
          }
          function K(t, e) {
            return 'modifier' == t
              ? d(K)
              : 'variable' == t
                ? (h(e), d())
                : 'spread' == t
                  ? d(K)
                  : '[' == t ? F(K, ']') : '{' == t ? F($, '}') : void 0;
          }
          function $(t, e) {
            return 'variable' != t || Et.stream.match(/^\s*:/, !1)
              ? ('variable' == t && (Et.marked = 'property'),
                'spread' == t ? d(K) : '}' == t ? f() : d(y(':'), K, X))
              : (h(e), d(X));
          }
          function X(t, e) {
            if ('=' == e) return d(x);
          }
          function Y(t) {
            if (',' == t) return d(q);
          }
          function Z(t, e) {
            if ('keyword b' == t && 'else' == e)
              return d(v('form', 'else'), b, m);
          }
          function Q(t) {
            if ('(' == t) return d(v(')'), J, y(')'), m);
          }
          function J(t) {
            return 'var' == t
              ? d(q, y(';'), et)
              : ';' == t ? d(et) : 'variable' == t ? d(tt) : f(w, y(';'), et);
          }
          function tt(t, e) {
            return 'in' == e || 'of' == e
              ? ((Et.marked = 'keyword'), d(w))
              : d(L, et);
          }
          function et(t, e) {
            return ';' == t
              ? d(rt)
              : 'in' == e || 'of' == e
                ? ((Et.marked = 'keyword'), d(w))
                : f(w, y(';'), rt);
          }
          function rt(t) {
            ')' != t && d(w);
          }
          function nt(t, e) {
            return '*' == e
              ? ((Et.marked = 'keyword'), d(nt))
              : 'variable' == t
                ? (h(e), d(nt))
                : '(' == t
                  ? d(p, v(')'), H(it, ')'), m, z, b, g)
                  : Lt && '<' == e ? d(v('>'), H(I, '>'), m, nt) : void 0;
          }
          function it(t, e) {
            return (
              '@' == e && d(w, it),
              'spread' == t || 'modifier' == t ? d(it) : f(K, z, X)
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
              ? d(v('>'), H(I, '>'), m, lt)
              : 'extends' == e || 'implements' == e || (Lt && ',' == t)
                ? d(Lt ? I : w, lt)
                : '{' == t ? d(v('}'), st, m) : void 0;
          }
          function st(t, e) {
            return 'modifier' == t ||
              'async' == t ||
              ('variable' == t &&
                ('static' == e || 'get' == e || 'set' == e) &&
                Et.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
              ? ((Et.marked = 'keyword'), d(st))
              : 'variable' == t || 'keyword' == Et.style
                ? ((Et.marked = 'property'), d(Lt ? ut : nt, st))
                : '[' == t
                  ? d(w, y(']'), Lt ? ut : nt, st)
                  : '*' == e
                    ? ((Et.marked = 'keyword'), d(st))
                    : ';' == t
                      ? d(st)
                      : '}' == t ? d() : '@' == e ? d(w, st) : void 0;
          }
          function ut(t, e) {
            return '?' == e
              ? d(ut)
              : ':' == t ? d(I, X) : '=' == e ? d(x) : f(nt);
          }
          function ct(t, e) {
            return '*' == e
              ? ((Et.marked = 'keyword'), d(vt, y(';')))
              : 'default' == e
                ? ((Et.marked = 'keyword'), d(w, y(';')))
                : '{' == t ? d(H(ft, '}'), vt, y(';')) : f(b);
          }
          function ft(t, e) {
            return 'as' == e
              ? ((Et.marked = 'keyword'), d(y('variable')))
              : 'variable' == t ? f(x, ft) : void 0;
          }
          function dt(t) {
            return 'string' == t ? d() : f(ht, pt, vt);
          }
          function ht(t, e) {
            return '{' == t
              ? F(ht, '}')
              : ('variable' == t && h(e),
                '*' == e && (Et.marked = 'keyword'),
                d(gt));
          }
          function pt(t) {
            if (',' == t) return d(ht, pt);
          }
          function gt(t, e) {
            if ('as' == e) return (Et.marked = 'keyword'), d(ht);
          }
          function vt(t, e) {
            if ('from' == e) return (Et.marked = 'keyword'), d(w);
          }
          function mt(t) {
            return ']' == t ? d() : f(H(x, ']'));
          }
          function yt(t, e, r) {
            return (
              (e.tokenize == i &&
                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                  e.lastType
                )) ||
              ('quasi' == e.lastType &&
                /\{\s*$/.test(t.string.slice(0, t.pos - (r || 0))))
            );
          }
          var bt,
            wt,
            xt = e.indentUnit,
            Ct = r.statementIndent,
            St = r.jsonld,
            kt = r.json || St,
            Lt = r.typescript,
            Tt = r.wordCharacters || /[\w$\xa1-\uffff]/,
            Mt = (function() {
              function t(t) {
                return { type: t, style: 'keyword' };
              }
              var e = t('keyword a'),
                r = t('keyword b'),
                n = t('keyword c'),
                i = t('keyword d'),
                o = t('operator'),
                a = { type: 'atom', style: 'atom' },
                l = {
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
              if (Lt) {
                var s = { type: 'variable', style: 'type' },
                  u = {
                    interface: t('class'),
                    implements: n,
                    namespace: n,
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
            At = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
            _t = '([{}])',
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
            Dt = { name: 'this', next: { name: 'arguments' } };
          return (
            (m.lex = !0),
            {
              startState: function(t) {
                var e = {
                  tokenize: i,
                  lastType: 'sof',
                  cc: [],
                  lexical: new u((t || 0) - xt, 0, 'block', !1),
                  localVars: r.localVars,
                  context: r.localVars && { vars: r.localVars },
                  indented: t || 0,
                };
                return (
                  r.globalVars &&
                    'object' == a(r.globalVars) &&
                    (e.globalVars = r.globalVars),
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
                var r = e.tokenize(t, e);
                return 'comment' == bt
                  ? r
                  : ((e.lastType =
                      'operator' != bt || ('++' != wt && '--' != wt)
                        ? bt
                        : 'incdec'),
                    (function(t, e, r, n, i) {
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
                        if ((o.length ? o.pop() : kt ? w : b)(r, n)) {
                          for (; o.length && o[o.length - 1].lex; ) o.pop()();
                          return Et.marked
                            ? Et.marked
                            : 'variable' == r && c(t, n) ? 'variable-2' : e;
                        }
                    })(e, r, bt, wt, t));
              },
              indent: function(e, n) {
                if (e.tokenize == o) return t.Pass;
                if (e.tokenize != i) return 0;
                var a,
                  l = n && n.charAt(0),
                  s = e.lexical;
                if (!/^\s*else\b/.test(n))
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
                      !/^[,\.=+\-*:?[\(]/.test(n)));

                )
                  s = s.prev;
                Ct && ')' == s.type && 'stat' == s.prev.type && (s = s.prev);
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
                          })(e, n)
                            ? Ct || xt
                            : 0)
                        : 'switch' != s.info || d || 0 == r.doubleIndentSwitch
                          ? s.align
                            ? s.column + (d ? 0 : 1)
                            : s.indented + (d ? 0 : xt)
                          : s.indented +
                            (/^(?:case|default)\b/.test(n) ? xt : 2 * xt);
              },
              electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
              blockCommentStart: kt ? null : '/*',
              blockCommentEnd: kt ? null : '*/',
              blockCommentContinue: kt ? null : ' * ',
              lineComment: kt ? null : '//',
              fold: 'brace',
              closeBrackets: '()[]{}\'\'""``',
              helperType: kt ? 'json' : 'javascript',
              jsonldMode: St,
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
    }.call(e, r(7)(t)));
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
    var r,
      n =
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
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (t) {
      'object' === ('undefined' == typeof window ? 'undefined' : n(window)) &&
        (r = window);
    }
    t.exports = r;
  },
  function(t, e, r) {
    'use strict';
    (function(t) {
      var n = r(0),
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
        l = a && a.exports === o ? n.a.Buffer : void 0,
        s = l ? l.allocUnsafe : void 0;
      e.a = function(t, e) {
        if (e) return t.slice();
        var r = t.length,
          n = s ? s(r) : new t.constructor(r);
        return t.copy(n), n;
      };
    }.call(e, r(2)(t)));
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
      var n = r(3),
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
        l = a && a.exports === o && n.a.process,
        s = (function() {
          try {
            return l && l.binding && l.binding('util');
          } catch (t) {}
        })();
      e.a = s;
    }.call(e, r(2)(t)));
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
