!(function(t, e) {
  'use strict'
  try {
    e = e && e.hasOwnProperty('default') ? e.default : e
    var n =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self ? self : {}
    ;(function() {
      var t,
        n = e.default,
        i = i || {},
        r = this
      function o(t) {
        return 'string' == typeof t
      }
      function a(t) {
        return 'boolean' == typeof t
      }
      function s() {}
      function u(t) {
        var e = typeof t
        if ('object' == e) {
          if (!t) return 'null'
          if (t instanceof Array) return 'array'
          if (t instanceof Object) return e
          var n = Object.prototype.toString.call(t)
          if ('[object Window]' == n) return 'object'
          if (
            '[object Array]' == n ||
            ('number' == typeof t.length &&
              void 0 !== t.splice &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable('splice'))
          )
            return 'array'
          if (
            '[object Function]' == n ||
            (void 0 !== t.call &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable('call'))
          )
            return 'function'
        } else if ('function' == e && void 0 === t.call) return 'object'
        return e
      }
      function c(t) {
        return null === t
      }
      function h(t) {
        return 'array' == u(t)
      }
      function f(t) {
        var e = u(t)
        return 'array' == e || ('object' == e && 'number' == typeof t.length)
      }
      function l(t) {
        return 'function' == u(t)
      }
      function d(t) {
        var e = typeof t
        return ('object' == e && null != t) || 'function' == e
      }
      var p = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
        v = 0
      function m(t, e, n) {
        return t.call.apply(t.bind, arguments)
      }
      function g(t, e, n) {
        if (!t) throw Error()
        if (2 < arguments.length) {
          var i = Array.prototype.slice.call(arguments, 2)
          return function() {
            var n = Array.prototype.slice.call(arguments)
            return Array.prototype.unshift.apply(n, i), t.apply(e, n)
          }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
      function b(t, e, n) {
        return (b =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf('native code')
            ? m
            : g).apply(null, arguments)
      }
      function w(t, e) {
        var n = Array.prototype.slice.call(arguments, 1)
        return function() {
          var e = n.slice()
          return e.push.apply(e, arguments), t.apply(this, e)
        }
      }
      var y =
        Date.now ||
        function() {
          return +new Date()
        }
      function I(t, e) {
        function n() {}
        ;(n.prototype = e.prototype),
          (t.lb = e.prototype),
          (t.prototype = new n()),
          (t.prototype.constructor = t),
          (t.ad = function(t, n, i) {
            for (
              var r = Array(arguments.length - 2), o = 2;
              o < arguments.length;
              o++
            )
              r[o - 2] = arguments[o]
            return e.prototype[n].apply(t, r)
          })
      }
      function T(t) {
        ;(t.prototype.then = t.prototype.then),
          (t.prototype.$goog_Thenable = !0)
      }
      function E(t) {
        if (!t) return !1
        try {
          return !!t.$goog_Thenable
        } catch (t) {
          return !1
        }
      }
      function A(t) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, A)
        else {
          var e = Error().stack
          e && (this.stack = e)
        }
        t && (this.message = String(t))
      }
      function k(t, e) {
        for (var n = '', i = (t = t.split('%s')).length - 1, r = 0; r < i; r++)
          n += t[r] + (r < e.length ? e[r] : '%s')
        A.call(this, n + t[i])
      }
      function S(t, e) {
        throw new k(
          'Failure' + (t ? ': ' + t : ''),
          Array.prototype.slice.call(arguments, 1)
        )
      }
      function N(t, e) {
        ;(this.c = t), (this.f = e), (this.b = 0), (this.a = null)
      }
      function _(t, e) {
        t.f(e), 100 > t.b && (t.b++, (e.next = t.a), (t.a = e))
      }
      function O() {
        this.b = this.a = null
      }
      I(A, Error),
        (A.prototype.name = 'CustomError'),
        I(k, A),
        (k.prototype.name = 'AssertionError'),
        (N.prototype.get = function() {
          if (0 < this.b) {
            this.b--
            var t = this.a
            ;(this.a = t.next), (t.next = null)
          } else t = this.c()
          return t
        })
      var P = new N(
        function() {
          return new C()
        },
        function(t) {
          t.reset()
        }
      )
      function R() {
        var t = pt,
          e = null
        return (
          t.a &&
            ((e = t.a), (t.a = t.a.next), t.a || (t.b = null), (e.next = null)),
          e
        )
      }
      function C() {
        this.next = this.b = this.a = null
      }
      ;(O.prototype.add = function(t, e) {
        var n = P.get()
        n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n)
      }),
        (C.prototype.set = function(t, e) {
          ;(this.a = t), (this.b = e), (this.next = null)
        }),
        (C.prototype.reset = function() {
          this.next = this.b = this.a = null
        })
      var D = Array.prototype.indexOf
          ? function(t, e) {
              return Array.prototype.indexOf.call(t, e, void 0)
            }
          : function(t, e) {
              if (o(t)) return o(e) && 1 == e.length ? t.indexOf(e, 0) : -1
              for (var n = 0; n < t.length; n++)
                if (n in t && t[n] === e) return n
              return -1
            },
        L = Array.prototype.forEach
          ? function(t, e, n) {
              Array.prototype.forEach.call(t, e, n)
            }
          : function(t, e, n) {
              for (
                var i = t.length, r = o(t) ? t.split('') : t, a = 0;
                a < i;
                a++
              )
                a in r && e.call(n, r[a], a, t)
            }
      var x = Array.prototype.map
          ? function(t, e) {
              return Array.prototype.map.call(t, e, void 0)
            }
          : function(t, e) {
              for (
                var n = t.length,
                  i = Array(n),
                  r = o(t) ? t.split('') : t,
                  a = 0;
                a < n;
                a++
              )
                a in r && (i[a] = e.call(void 0, r[a], a, t))
              return i
            },
        M = Array.prototype.some
          ? function(t, e) {
              return Array.prototype.some.call(t, e, void 0)
            }
          : function(t, e) {
              for (
                var n = t.length, i = o(t) ? t.split('') : t, r = 0;
                r < n;
                r++
              )
                if (r in i && e.call(void 0, i[r], r, t)) return !0
              return !1
            }
      function j(t, e) {
        return 0 <= D(t, e)
      }
      function U(t, e) {
        var n
        return (
          (n = 0 <= (e = D(t, e))) && Array.prototype.splice.call(t, e, 1), n
        )
      }
      function V(t, e) {
        !(function(t, e) {
          var n = t.length,
            i = o(t) ? t.split('') : t
          for (--n; 0 <= n; --n) n in i && e.call(void 0, i[n], n, t)
        })(t, function(n, i) {
          e.call(void 0, n, i, t) &&
            1 == Array.prototype.splice.call(t, i, 1).length &&
            0
        })
      }
      function F(t) {
        return Array.prototype.concat.apply([], arguments)
      }
      function K(t) {
        var e = t.length
        if (0 < e) {
          for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i]
          return n
        }
        return []
      }
      function H(t, e) {
        for (
          var n = t.split('%s'),
            i = '',
            r = Array.prototype.slice.call(arguments, 1);
          r.length && 1 < n.length;

        )
          i += n.shift() + r.shift()
        return i + n.join('%s')
      }
      var q = String.prototype.trim
        ? function(t) {
            return t.trim()
          }
        : function(t) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
          }
      function G(t) {
        return Z.test(t)
          ? (-1 != t.indexOf('&') && (t = t.replace(X, '&amp;')),
            -1 != t.indexOf('<') && (t = t.replace(W, '&lt;')),
            -1 != t.indexOf('>') && (t = t.replace(z, '&gt;')),
            -1 != t.indexOf('"') && (t = t.replace(J, '&quot;')),
            -1 != t.indexOf("'") && (t = t.replace(Y, '&#39;')),
            -1 != t.indexOf('\0') && (t = t.replace($, '&#0;')),
            t)
          : t
      }
      var B,
        X = /&/g,
        W = /</g,
        z = />/g,
        J = /"/g,
        Y = /'/g,
        $ = /\x00/g,
        Z = /[\x00&<>"']/
      function Q(t, e) {
        return -1 != t.indexOf(e)
      }
      function tt(t, e) {
        return t < e ? -1 : t > e ? 1 : 0
      }
      t: {
        var et = r.navigator
        if (et) {
          var nt = et.userAgent
          if (nt) {
            B = nt
            break t
          }
        }
        B = ''
      }
      function it(t) {
        return Q(B, t)
      }
      function rt(t, e) {
        for (var n in t) e.call(void 0, t[n], n, t)
      }
      function ot(t) {
        for (var e in t) return !1
        return !0
      }
      function at(t) {
        var e,
          n = {}
        for (e in t) n[e] = t[e]
        return n
      }
      var st,
        ut,
        ct = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
          ' '
        )
      function ht(t, e) {
        for (var n, i, r = 1; r < arguments.length; r++) {
          for (n in (i = arguments[r])) t[n] = i[n]
          for (var o = 0; o < ct.length; o++)
            (n = ct[o]),
              Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
      }
      function ft(t) {
        r.setTimeout(function() {
          throw t
        }, 0)
      }
      function lt(t, e) {
        ut ||
          (function() {
            if (r.Promise && r.Promise.resolve) {
              var t = r.Promise.resolve(void 0)
              ut = function() {
                t.then(vt)
              }
            } else
              ut = function() {
                var t = vt
                !l(r.setImmediate) ||
                (r.Window &&
                  r.Window.prototype &&
                  !it('Edge') &&
                  r.Window.prototype.setImmediate == r.setImmediate)
                  ? (st ||
                      (st = (function() {
                        var t = r.MessageChannel
                        if (
                          (void 0 === t &&
                            'undefined' != typeof window &&
                            window.postMessage &&
                            window.addEventListener &&
                            !it('Presto') &&
                            (t = function() {
                              var t = document.createElement('IFRAME')
                              ;(t.style.display = 'none'),
                                (t.src = ''),
                                document.documentElement.appendChild(t)
                              var e = t.contentWindow
                              ;(t = e.document).open(), t.write(''), t.close()
                              var n = 'callImmediate' + Math.random(),
                                i =
                                  'file:' == e.location.protocol
                                    ? '*'
                                    : e.location.protocol +
                                      '//' +
                                      e.location.host
                              ;(t = b(function(t) {
                                ;('*' != i && t.origin != i) ||
                                  t.data != n ||
                                  this.port1.onmessage()
                              }, this)),
                                e.addEventListener('message', t, !1),
                                (this.port1 = {}),
                                (this.port2 = {
                                  postMessage: function() {
                                    e.postMessage(n, i)
                                  }
                                })
                            }),
                          void 0 !== t && !it('Trident') && !it('MSIE'))
                        ) {
                          var e = new t(),
                            n = {},
                            i = n
                          return (
                            (e.port1.onmessage = function() {
                              if (void 0 !== n.next) {
                                var t = (n = n.next).rb
                                ;(n.rb = null), t()
                              }
                            }),
                            function(t) {
                              ;(i.next = {rb: t}),
                                (i = i.next),
                                e.port2.postMessage(0)
                            }
                          )
                        }
                        return 'undefined' != typeof document &&
                          'onreadystatechange' in
                            document.createElement('SCRIPT')
                          ? function(t) {
                              var e = document.createElement('SCRIPT')
                              ;(e.onreadystatechange = function() {
                                ;(e.onreadystatechange = null),
                                  e.parentNode.removeChild(e),
                                  (e = null),
                                  t(),
                                  (t = null)
                              }),
                                document.documentElement.appendChild(e)
                            }
                          : function(t) {
                              r.setTimeout(t, 0)
                            }
                      })()),
                    st(t))
                  : r.setImmediate(t)
              }
          })(),
          dt || (ut(), (dt = !0)),
          pt.add(t, e)
      }
      var dt = !1,
        pt = new O()
      function vt() {
        for (var t; (t = R()); ) {
          try {
            t.a.call(t.b)
          } catch (t) {
            ft(t)
          }
          _(P, t)
        }
        dt = !1
      }
      function mt(t, e) {
        if (
          ((this.a = gt),
          (this.j = void 0),
          (this.f = this.b = this.c = null),
          (this.g = this.h = !1),
          t != s)
        )
          try {
            var n = this
            t.call(
              e,
              function(t) {
                _t(n, bt, t)
              },
              function(t) {
                if (!(t instanceof xt))
                  try {
                    if (t instanceof Error) throw t
                    throw Error('Promise rejected.')
                  } catch (t) {}
                _t(n, wt, t)
              }
            )
          } catch (t) {
            _t(this, wt, t)
          }
      }
      var gt = 0,
        bt = 2,
        wt = 3
      function yt() {
        ;(this.next = this.f = this.b = this.g = this.a = null), (this.c = !1)
      }
      yt.prototype.reset = function() {
        ;(this.f = this.b = this.g = this.a = null), (this.c = !1)
      }
      var It = new N(
        function() {
          return new yt()
        },
        function(t) {
          t.reset()
        }
      )
      function Tt(t, e, n) {
        var i = It.get()
        return (i.g = t), (i.b = e), (i.f = n), i
      }
      function Et(t) {
        if (t instanceof mt) return t
        var e = new mt(s)
        return _t(e, bt, t), e
      }
      function At(t) {
        return new mt(function(e, n) {
          n(t)
        })
      }
      function kt(t, e, n) {
        Ot(t, e, n, null) || lt(w(e, t))
      }
      function St(t, e) {
        t.b || (t.a != bt && t.a != wt) || Pt(t),
          t.f ? (t.f.next = e) : (t.b = e),
          (t.f = e)
      }
      function Nt(t, e, n, i) {
        var r = Tt(null, null, null)
        return (
          (r.a = new mt(function(t, o) {
            ;(r.g = e
              ? function(n) {
                  try {
                    var r = e.call(i, n)
                    t(r)
                  } catch (t) {
                    o(t)
                  }
                }
              : t),
              (r.b = n
                ? function(e) {
                    try {
                      var r = n.call(i, e)
                      void 0 === r && e instanceof xt ? o(e) : t(r)
                    } catch (t) {
                      o(t)
                    }
                  }
                : o)
          })),
          (r.a.c = t),
          St(t, r),
          r.a
        )
      }
      function _t(t, e, n) {
        t.a == gt &&
          (t === n &&
            ((e = wt), (n = new TypeError('Promise cannot resolve to itself'))),
          (t.a = 1),
          Ot(n, t.Kc, t.Lc, t) ||
            ((t.j = n),
            (t.a = e),
            (t.c = null),
            Pt(t),
            e != wt ||
              n instanceof xt ||
              (function(t, e) {
                ;(t.g = !0),
                  lt(function() {
                    t.g && Lt.call(null, e)
                  })
              })(t, n)))
      }
      function Ot(t, e, n, i) {
        if (t instanceof mt) return St(t, Tt(e || s, n || null, i)), !0
        if (E(t)) return t.then(e, n, i), !0
        if (d(t))
          try {
            var r = t.then
            if (l(r))
              return (
                (function(t, e, n, i, r) {
                  function o(t) {
                    a || ((a = !0), i.call(r, t))
                  }
                  var a = !1
                  try {
                    e.call(
                      t,
                      function(t) {
                        a || ((a = !0), n.call(r, t))
                      },
                      o
                    )
                  } catch (t) {
                    o(t)
                  }
                })(t, r, e, n, i),
                !0
              )
          } catch (t) {
            return n.call(i, t), !0
          }
        return !1
      }
      function Pt(t) {
        t.h || ((t.h = !0), lt(t.Ub, t))
      }
      function Rt(t) {
        var e = null
        return (
          t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
          t.b || (t.f = null),
          e
        )
      }
      function Ct(t, e, n, i) {
        if (n == wt && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1
        if (e.a) (e.a.c = null), Dt(e, n, i)
        else
          try {
            e.c ? e.g.call(e.f) : Dt(e, n, i)
          } catch (t) {
            Lt.call(null, t)
          }
        _(It, e)
      }
      function Dt(t, e, n) {
        e == bt ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
      }
      ;(mt.prototype.then = function(t, e, n) {
        return Nt(this, l(t) ? t : null, l(e) ? e : null, n)
      }),
        T(mt),
        ((t = mt.prototype).ha = function(t, e) {
          return ((t = Tt(t, t, e)).c = !0), St(this, t), this
        }),
        (t.m = function(t, e) {
          return Nt(this, null, t, e)
        }),
        (t.cancel = function(t) {
          this.a == gt &&
            lt(function() {
              !(function t(e, n) {
                if (e.a == gt)
                  if (e.c) {
                    var i = e.c
                    if (i.b) {
                      for (
                        var r = 0, o = null, a = null, s = i.b;
                        s && (s.c || (r++, s.a == e && (o = s), !(o && 1 < r)));
                        s = s.next
                      )
                        o || (a = s)
                      o &&
                        (i.a == gt && 1 == r
                          ? t(i, n)
                          : (a
                              ? ((r = a).next == i.f && (i.f = r),
                                (r.next = r.next.next))
                              : Rt(i),
                            Ct(i, o, wt, n)))
                    }
                    e.c = null
                  } else _t(e, wt, n)
              })(this, new xt(t))
            }, this)
        }),
        (t.Kc = function(t) {
          ;(this.a = gt), _t(this, bt, t)
        }),
        (t.Lc = function(t) {
          ;(this.a = gt), _t(this, wt, t)
        }),
        (t.Ub = function() {
          for (var t; (t = Rt(this)); ) Ct(this, t, this.a, this.j)
          this.h = !1
        })
      var Lt = ft
      function xt(t) {
        A.call(this, t)
      }
      function Mt() {
        0 != jt && (Ut[this[p] || (this[p] = ++v)] = this),
          (this.pa = this.pa),
          (this.oa = this.oa)
      }
      I(xt, A), (xt.prototype.name = 'cancel')
      var jt = 0,
        Ut = {}
      function Vt(t) {
        if (!t.pa && ((t.pa = !0), t.ua(), 0 != jt)) {
          var e = t[p] || (t[p] = ++v)
          if (0 != jt && t.oa && 0 < t.oa.length)
            throw Error(
              t +
                " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
            )
          delete Ut[e]
        }
      }
      function Ft(t) {
        return Ft[' '](t), t
      }
      ;(Mt.prototype.pa = !1),
        (Mt.prototype.ua = function() {
          if (this.oa) for (; this.oa.length; ) this.oa.shift()()
        }),
        (Ft[' '] = s)
      var Kt,
        Ht,
        qt = it('Opera'),
        Gt = it('Trident') || it('MSIE'),
        Bt = it('Edge'),
        Xt = Bt || Gt,
        Wt =
          it('Gecko') &&
          !(Q(B.toLowerCase(), 'webkit') && !it('Edge')) &&
          !(it('Trident') || it('MSIE')) &&
          !it('Edge'),
        zt = Q(B.toLowerCase(), 'webkit') && !it('Edge')
      function Jt() {
        var t = r.document
        return t ? t.documentMode : void 0
      }
      t: {
        var Yt = '',
          $t = ((Ht = B),
          Wt
            ? /rv:([^\);]+)(\)|;)/.exec(Ht)
            : Bt
              ? /Edge\/([\d\.]+)/.exec(Ht)
              : Gt
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ht)
                : zt
                  ? /WebKit\/(\S+)/.exec(Ht)
                  : qt ? /(?:Version)[ \/]?(\S+)/.exec(Ht) : void 0)
        if (($t && (Yt = $t ? $t[1] : ''), Gt)) {
          var Zt = Jt()
          if (null != Zt && Zt > parseFloat(Yt)) {
            Kt = String(Zt)
            break t
          }
        }
        Kt = Yt
      }
      var Qt,
        te = {}
      function ee(t) {
        return (function(t, e) {
          var n = te
          return Object.prototype.hasOwnProperty.call(n, t)
            ? n[t]
            : (n[t] = e(t))
        })(t, function() {
          for (
            var e = 0,
              n = q(String(Kt)).split('.'),
              i = q(String(t)).split('.'),
              r = Math.max(n.length, i.length),
              o = 0;
            0 == e && o < r;
            o++
          ) {
            var a = n[o] || '',
              s = i[o] || ''
            do {
              if (
                ((a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
                0 == a[0].length && 0 == s[0].length)
              )
                break
              ;(e =
                tt(
                  0 == a[1].length ? 0 : parseInt(a[1], 10),
                  0 == s[1].length ? 0 : parseInt(s[1], 10)
                ) ||
                tt(0 == a[2].length, 0 == s[2].length) ||
                tt(a[2], s[2])),
                (a = a[3]),
                (s = s[3])
            } while (0 == e)
          }
          return 0 <= e
        })
      }
      var ne = r.document
      Qt =
        ne && Gt
          ? Jt() || ('CSS1Compat' == ne.compatMode ? parseInt(Kt, 10) : 5)
          : void 0
      var ie =
          Object.freeze ||
          function(t) {
            return t
          },
        re = !Gt || 9 <= Number(Qt),
        oe = Gt && !ee('9'),
        ae = (function() {
          if (!r.addEventListener || !Object.defineProperty) return !1
          var t = !1,
            e = Object.defineProperty({}, 'passive', {
              get: function() {
                t = !0
              }
            })
          return (
            r.addEventListener('test', s, e),
            r.removeEventListener('test', s, e),
            t
          )
        })()
      function se(t, e) {
        ;(this.type = t), (this.b = this.target = e), (this.Eb = !0)
      }
      function ue(t, e) {
        if (
          (se.call(this, t ? t.type : ''),
          (this.relatedTarget = this.b = this.target = null),
          (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
          (this.key = ''),
          (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
          (this.pointerId = 0),
          (this.pointerType = ''),
          (this.a = null),
          t)
        ) {
          var n = (this.type = t.type),
            i = t.changedTouches ? t.changedTouches[0] : null
          if (
            ((this.target = t.target || t.srcElement),
            (this.b = e),
            (e = t.relatedTarget))
          ) {
            if (Wt) {
              t: {
                try {
                  Ft(e.nodeName)
                  var r = !0
                  break t
                } catch (t) {}
                r = !1
              }
              r || (e = null)
            }
          } else
            'mouseover' == n
              ? (e = t.fromElement)
              : 'mouseout' == n && (e = t.toElement)
          ;(this.relatedTarget = e),
            null === i
              ? ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                (this.screenX = t.screenX || 0),
                (this.screenY = t.screenY || 0))
              : ((this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX),
                (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                (this.screenX = i.screenX || 0),
                (this.screenY = i.screenY || 0)),
            (this.button = t.button),
            (this.key = t.key || ''),
            (this.ctrlKey = t.ctrlKey),
            (this.altKey = t.altKey),
            (this.shiftKey = t.shiftKey),
            (this.metaKey = t.metaKey),
            (this.pointerId = t.pointerId || 0),
            (this.pointerType = o(t.pointerType)
              ? t.pointerType
              : ce[t.pointerType] || ''),
            (this.a = t),
            t.defaultPrevented && this.preventDefault()
        }
      }
      ;(se.prototype.preventDefault = function() {
        this.Eb = !1
      }),
        I(ue, se)
      var ce = ie({2: 'touch', 3: 'pen', 4: 'mouse'})
      ;(ue.prototype.preventDefault = function() {
        ue.lb.preventDefault.call(this)
        var t = this.a
        if (t.preventDefault) t.preventDefault()
        else if (((t.returnValue = !1), oe))
          try {
            ;(t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) &&
              (t.keyCode = -1)
          } catch (t) {}
      }),
        (ue.prototype.f = function() {
          return this.a
        })
      var he = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
        fe = 0
      function le(t) {
        ;(t.ma = !0),
          (t.listener = null),
          (t.proxy = null),
          (t.src = null),
          (t.La = null)
      }
      function de(t) {
        ;(this.src = t), (this.a = {}), (this.b = 0)
      }
      function pe(t, e) {
        var n = e.type
        n in t.a &&
          U(t.a[n], e) &&
          (le(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
      }
      function ve(t, e, n, i) {
        for (var r = 0; r < t.length; ++r) {
          var o = t[r]
          if (!o.ma && o.listener == e && o.capture == !!n && o.La == i)
            return r
        }
        return -1
      }
      de.prototype.add = function(t, e, n, i, r) {
        var o = t.toString()
        ;(t = this.a[o]) || ((t = this.a[o] = []), this.b++)
        var a = ve(t, e, i, r)
        return (
          -1 < a
            ? ((e = t[a]), n || (e.Ha = !1))
            : (((e = new function(t, e, n, i, r) {
                ;(this.listener = t),
                  (this.proxy = null),
                  (this.src = e),
                  (this.type = n),
                  (this.capture = !!i),
                  (this.La = r),
                  (this.key = ++fe),
                  (this.ma = this.Ha = !1)
              }(e, this.src, o, !!i, r)).Ha = n),
              t.push(e)),
          e
        )
      }
      var me = 'closure_lm_' + ((1e6 * Math.random()) | 0),
        ge = {}
      function be(t, e, n, i, r) {
        if (i && i.once) ye(t, e, n, i, r)
        else if (h(e)) for (var o = 0; o < e.length; o++) be(t, e[o], n, i, r)
        else
          (n = Oe(n)),
            t && t[he]
              ? Re(t, e, n, d(i) ? !!i.capture : !!i, r)
              : we(t, e, n, !1, i, r)
      }
      function we(t, e, n, i, r, o) {
        if (!e) throw Error('Invalid event type')
        var a = d(r) ? !!r.capture : !!r,
          s = Ne(t)
        if ((s || (t[me] = s = new de(t)), !(n = s.add(e, n, i, a, o)).proxy))
          if (
            ((i = (function() {
              var t = Se,
                e = re
                  ? function(n) {
                      return t.call(e.src, e.listener, n)
                    }
                  : function(n) {
                      if (!(n = t.call(e.src, e.listener, n))) return n
                    }
              return e
            })()),
            (n.proxy = i),
            (i.src = t),
            (i.listener = n),
            t.addEventListener)
          )
            ae || (r = a),
              void 0 === r && (r = !1),
              t.addEventListener(e.toString(), i, r)
          else if (t.attachEvent) t.attachEvent(Ee(e.toString()), i)
          else {
            if (!t.addListener || !t.removeListener)
              throw Error('addEventListener and attachEvent are unavailable.')
            t.addListener(i)
          }
      }
      function ye(t, e, n, i, r) {
        if (h(e)) for (var o = 0; o < e.length; o++) ye(t, e[o], n, i, r)
        else
          (n = Oe(n)),
            t && t[he]
              ? Ce(t, e, n, d(i) ? !!i.capture : !!i, r)
              : we(t, e, n, !0, i, r)
      }
      function Ie(t, e, n, i, r) {
        if (h(e)) for (var o = 0; o < e.length; o++) Ie(t, e[o], n, i, r)
        else
          (i = d(i) ? !!i.capture : !!i),
            (n = Oe(n)),
            t && t[he]
              ? ((t = t.u),
                (e = String(e).toString()) in t.a &&
                  (-1 < (n = ve((o = t.a[e]), n, i, r)) &&
                    (le(o[n]),
                    Array.prototype.splice.call(o, n, 1),
                    0 == o.length && (delete t.a[e], t.b--))))
              : t &&
                (t = Ne(t)) &&
                ((e = t.a[e.toString()]),
                (t = -1),
                e && (t = ve(e, n, i, r)),
                (n = -1 < t ? e[t] : null) && Te(n))
      }
      function Te(t) {
        if ('number' != typeof t && t && !t.ma) {
          var e = t.src
          if (e && e[he]) pe(e.u, t)
          else {
            var n = t.type,
              i = t.proxy
            e.removeEventListener
              ? e.removeEventListener(n, i, t.capture)
              : e.detachEvent
                ? e.detachEvent(Ee(n), i)
                : e.addListener && e.removeListener && e.removeListener(i),
              (n = Ne(e))
                ? (pe(n, t), 0 == n.b && ((n.src = null), (e[me] = null)))
                : le(t)
          }
        }
      }
      function Ee(t) {
        return t in ge ? ge[t] : (ge[t] = 'on' + t)
      }
      function Ae(t, e, n, i) {
        var r = !0
        if ((t = Ne(t)) && (e = t.a[e.toString()]))
          for (e = e.concat(), t = 0; t < e.length; t++) {
            var o = e[t]
            o &&
              o.capture == n &&
              !o.ma &&
              ((o = ke(o, i)), (r = r && !1 !== o))
          }
        return r
      }
      function ke(t, e) {
        var n = t.listener,
          i = t.La || t.src
        return t.Ha && Te(t), n.call(i, e)
      }
      function Se(t, e) {
        if (t.ma) return !0
        if (!re) {
          if (!e)
            t: {
              e = ['window', 'event']
              for (var n = r, i = 0; i < e.length; i++)
                if (null == (n = n[e[i]])) {
                  e = null
                  break t
                }
              e = n
            }
          if (
            ((e = new ue((i = e), this)),
            (n = !0),
            !(0 > i.keyCode || void 0 != i.returnValue))
          ) {
            t: {
              var o = !1
              if (0 == i.keyCode)
                try {
                  i.keyCode = -1
                  break t
                } catch (t) {
                  o = !0
                }
              ;(o || void 0 == i.returnValue) && (i.returnValue = !0)
            }
            for (i = [], o = e.b; o; o = o.parentNode) i.push(o)
            for (t = t.type, o = i.length - 1; 0 <= o; o--) {
              e.b = i[o]
              var a = Ae(i[o], t, !0, e)
              n = n && a
            }
            for (o = 0; o < i.length; o++)
              (e.b = i[o]), (a = Ae(i[o], t, !1, e)), (n = n && a)
          }
          return n
        }
        return ke(t, new ue(e, this))
      }
      function Ne(t) {
        return (t = t[me]) instanceof de ? t : null
      }
      var _e = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
      function Oe(t) {
        return l(t)
          ? t
          : (t[_e] ||
              (t[_e] = function(e) {
                return t.handleEvent(e)
              }),
            t[_e])
      }
      function Pe() {
        Mt.call(this),
          (this.u = new de(this)),
          (this.Mb = this),
          (this.Ta = null)
      }
      function Re(t, e, n, i, r) {
        t.u.add(String(e), n, !1, i, r)
      }
      function Ce(t, e, n, i, r) {
        t.u.add(String(e), n, !0, i, r)
      }
      function De(t, e, n, i) {
        if (!(e = t.u.a[String(e)])) return !0
        e = e.concat()
        for (var r = !0, o = 0; o < e.length; ++o) {
          var a = e[o]
          if (a && !a.ma && a.capture == n) {
            var s = a.listener,
              u = a.La || a.src
            a.Ha && pe(t.u, a), (r = !1 !== s.call(u, i) && r)
          }
        }
        return r && 0 != i.Eb
      }
      function Le(t, e, n) {
        if (l(t)) n && (t = b(t, n))
        else {
          if (!t || 'function' != typeof t.handleEvent)
            throw Error('Invalid listener argument')
          t = b(t.handleEvent, t)
        }
        return 2147483647 < Number(e) ? -1 : r.setTimeout(t, e || 0)
      }
      function xe(t) {
        var e = null
        return new mt(function(n, i) {
          ;-1 ==
            (e = Le(function() {
              n(void 0)
            }, t)) && i(Error('Failed to schedule timer.'))
        }).m(function(t) {
          throw (r.clearTimeout(e), t)
        })
      }
      function Me(t) {
        if (t.S && 'function' == typeof t.S) return t.S()
        if (o(t)) return t.split('')
        if (f(t)) {
          for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i])
          return e
        }
        for (i in ((e = []), (n = 0), t)) e[n++] = t[i]
        return e
      }
      function je(t) {
        if (t.U && 'function' == typeof t.U) return t.U()
        if (!t.S || 'function' != typeof t.S) {
          if (f(t) || o(t)) {
            var e = []
            t = t.length
            for (var n = 0; n < t; n++) e.push(n)
            return e
          }
          for (var i in ((e = []), (n = 0), t)) e[n++] = i
          return e
        }
      }
      function Ue(t, e) {
        ;(this.b = {}), (this.a = []), (this.c = 0)
        var n = arguments.length
        if (1 < n) {
          if (n % 2) throw Error('Uneven number of arguments')
          for (var i = 0; i < n; i += 2)
            this.set(arguments[i], arguments[i + 1])
        } else if (t)
          if (t instanceof Ue)
            for (n = t.U(), i = 0; i < n.length; i++)
              this.set(n[i], t.get(n[i]))
          else for (i in t) this.set(i, t[i])
      }
      function Ve(t) {
        if (t.c != t.a.length) {
          for (var e = 0, n = 0; e < t.a.length; ) {
            var i = t.a[e]
            Fe(t.b, i) && (t.a[n++] = i), e++
          }
          t.a.length = n
        }
        if (t.c != t.a.length) {
          var r = {}
          for (n = e = 0; e < t.a.length; )
            Fe(r, (i = t.a[e])) || ((t.a[n++] = i), (r[i] = 1)), e++
          t.a.length = n
        }
      }
      function Fe(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      I(Pe, Mt),
        (Pe.prototype[he] = !0),
        (Pe.prototype.addEventListener = function(t, e, n, i) {
          be(this, t, e, n, i)
        }),
        (Pe.prototype.removeEventListener = function(t, e, n, i) {
          Ie(this, t, e, n, i)
        }),
        (Pe.prototype.dispatchEvent = function(t) {
          var e,
            n = this.Ta
          if (n) for (e = []; n; n = n.Ta) e.push(n)
          n = this.Mb
          var i = t.type || t
          if (o(t)) t = new se(t, n)
          else if (t instanceof se) t.target = t.target || n
          else {
            var r = t
            ht((t = new se(i, n)), r)
          }
          if (((r = !0), e))
            for (var a = e.length - 1; 0 <= a; a--) {
              var s = (t.b = e[a])
              r = De(s, i, !0, t) && r
            }
          if (
            ((r = De((s = t.b = n), i, !0, t) && r),
            (r = De(s, i, !1, t) && r),
            e)
          )
            for (a = 0; a < e.length; a++)
              r = De((s = t.b = e[a]), i, !1, t) && r
          return r
        }),
        (Pe.prototype.ua = function() {
          if ((Pe.lb.ua.call(this), this.u)) {
            var t,
              e = this.u
            for (t in e.a) {
              for (var n = e.a[t], i = 0; i < n.length; i++) le(n[i])
              delete e.a[t], e.b--
            }
          }
          this.Ta = null
        }),
        ((t = Ue.prototype).S = function() {
          Ve(this)
          for (var t = [], e = 0; e < this.a.length; e++)
            t.push(this.b[this.a[e]])
          return t
        }),
        (t.U = function() {
          return Ve(this), this.a.concat()
        }),
        (t.clear = function() {
          ;(this.b = {}), (this.c = this.a.length = 0)
        }),
        (t.get = function(t, e) {
          return Fe(this.b, t) ? this.b[t] : e
        }),
        (t.set = function(t, e) {
          Fe(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e)
        }),
        (t.forEach = function(t, e) {
          for (var n = this.U(), i = 0; i < n.length; i++) {
            var r = n[i],
              o = this.get(r)
            t.call(e, o, r, this)
          }
        })
      var Ke = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
      function He(t, e) {
        if (
          ((this.b = this.l = this.c = ''),
          (this.j = null),
          (this.h = this.g = ''),
          (this.f = !1),
          t instanceof He)
        ) {
          ;(this.f = void 0 !== e ? e : t.f),
            qe(this, t.c),
            (this.l = t.l),
            (this.b = t.b),
            Ge(this, t.j),
            (this.g = t.g),
            (e = t.a)
          var n = new on()
          ;(n.c = e.c),
            e.a && ((n.a = new Ue(e.a)), (n.b = e.b)),
            Be(this, n),
            (this.h = t.h)
        } else
          t && (n = String(t).match(Ke))
            ? ((this.f = !!e),
              qe(this, n[1] || '', !0),
              (this.l = Ye(n[2] || '')),
              (this.b = Ye(n[3] || '', !0)),
              Ge(this, n[4]),
              (this.g = Ye(n[5] || '', !0)),
              Be(this, n[6] || '', !0),
              (this.h = Ye(n[7] || '')))
            : ((this.f = !!e), (this.a = new on(null, this.f)))
      }
      function qe(t, e, n) {
        ;(t.c = n ? Ye(e, !0) : e), t.c && (t.c = t.c.replace(/:$/, ''))
      }
      function Ge(t, e) {
        if (e) {
          if (((e = Number(e)), isNaN(e) || 0 > e))
            throw Error('Bad port number ' + e)
          t.j = e
        } else t.j = null
      }
      function Be(t, e, n) {
        e instanceof on
          ? ((t.a = e),
            (function(t, e) {
              e &&
                !t.f &&
                (an(t),
                (t.c = null),
                t.a.forEach(function(t, e) {
                  var n = e.toLowerCase()
                  e != n && (un(this, e), hn(this, n, t))
                }, t)),
                (t.f = e)
            })(t.a, t.f))
          : (n || (e = $e(e, nn)), (t.a = new on(e, t.f)))
      }
      function Xe(t, e, n) {
        t.a.set(e, n)
      }
      function We(t, e) {
        return t.a.get(e)
      }
      function ze(t) {
        return t instanceof He ? new He(t) : new He(t, void 0)
      }
      function Je(t, e) {
        var n = new He(null, void 0)
        return qe(n, 'https'), t && (n.b = t), e && (n.g = e), n
      }
      function Ye(t, e) {
        return t
          ? e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)
          : ''
      }
      function $e(t, e, n) {
        return o(t)
          ? ((t = encodeURI(t).replace(e, Ze)),
            n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
            t)
          : null
      }
      function Ze(t) {
        return (
          '%' +
          (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
          (15 & t).toString(16)
        )
      }
      He.prototype.toString = function() {
        var t = [],
          e = this.c
        e && t.push($e(e, Qe, !0), ':')
        var n = this.b
        return (
          (n || 'file' == e) &&
            (t.push('//'),
            (e = this.l) && t.push($e(e, Qe, !0), '@'),
            t.push(
              encodeURIComponent(String(n)).replace(
                /%25([0-9a-fA-F]{2})/g,
                '%$1'
              )
            ),
            null != (n = this.j) && t.push(':', String(n))),
          (n = this.g) &&
            (this.b && '/' != n.charAt(0) && t.push('/'),
            t.push($e(n, '/' == n.charAt(0) ? en : tn, !0))),
          (n = this.a.toString()) && t.push('?', n),
          (n = this.h) && t.push('#', $e(n, rn)),
          t.join('')
        )
      }
      var Qe = /[#\/\?@]/g,
        tn = /[#\?:]/g,
        en = /[#\?]/g,
        nn = /[#\?@]/g,
        rn = /#/g
      function on(t, e) {
        ;(this.b = this.a = null), (this.c = t || null), (this.f = !!e)
      }
      function an(t) {
        t.a ||
          ((t.a = new Ue()),
          (t.b = 0),
          t.c &&
            (function(t, e) {
              if (t) {
                t = t.split('&')
                for (var n = 0; n < t.length; n++) {
                  var i = t[n].indexOf('='),
                    r = null
                  if (0 <= i) {
                    var o = t[n].substring(0, i)
                    r = t[n].substring(i + 1)
                  } else o = t[n]
                  e(o, r ? decodeURIComponent(r.replace(/\+/g, ' ')) : '')
                }
              }
            })(t.c, function(e, n) {
              t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n)
            }))
      }
      function sn(t) {
        var e = je(t)
        if (void 0 === e) throw Error('Keys are undefined')
        var n = new on(null, void 0)
        t = Me(t)
        for (var i = 0; i < e.length; i++) {
          var r = e[i],
            o = t[i]
          h(o) ? hn(n, r, o) : n.add(r, o)
        }
        return n
      }
      function un(t, e) {
        an(t),
          (e = fn(t, e)),
          Fe(t.a.b, e) &&
            ((t.c = null),
            (t.b -= t.a.get(e).length),
            Fe((t = t.a).b, e) &&
              (delete t.b[e], t.c--, t.a.length > 2 * t.c && Ve(t)))
      }
      function cn(t, e) {
        return an(t), (e = fn(t, e)), Fe(t.a.b, e)
      }
      function hn(t, e, n) {
        un(t, e),
          0 < n.length &&
            ((t.c = null), t.a.set(fn(t, e), K(n)), (t.b += n.length))
      }
      function fn(t, e) {
        return (e = String(e)), t.f && (e = e.toLowerCase()), e
      }
      ;((t = on.prototype).add = function(t, e) {
        an(this), (this.c = null), (t = fn(this, t))
        var n = this.a.get(t)
        return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this
      }),
        (t.clear = function() {
          ;(this.a = this.c = null), (this.b = 0)
        }),
        (t.forEach = function(t, e) {
          an(this),
            this.a.forEach(function(n, i) {
              L(
                n,
                function(n) {
                  t.call(e, n, i, this)
                },
                this
              )
            }, this)
        }),
        (t.U = function() {
          an(this)
          for (
            var t = this.a.S(), e = this.a.U(), n = [], i = 0;
            i < e.length;
            i++
          )
            for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i])
          return n
        }),
        (t.S = function(t) {
          an(this)
          var e = []
          if (o(t)) cn(this, t) && (e = F(e, this.a.get(fn(this, t))))
          else {
            t = this.a.S()
            for (var n = 0; n < t.length; n++) e = F(e, t[n])
          }
          return e
        }),
        (t.set = function(t, e) {
          return (
            an(this),
            (this.c = null),
            cn(this, (t = fn(this, t))) && (this.b -= this.a.get(t).length),
            this.a.set(t, [e]),
            (this.b += 1),
            this
          )
        }),
        (t.get = function(t, e) {
          return 0 < (t = t ? this.S(t) : []).length ? String(t[0]) : e
        }),
        (t.toString = function() {
          if (this.c) return this.c
          if (!this.a) return ''
          for (var t = [], e = this.a.U(), n = 0; n < e.length; n++) {
            var i = e[n],
              r = encodeURIComponent(String(i))
            i = this.S(i)
            for (var o = 0; o < i.length; o++) {
              var a = r
              '' !== i[o] && (a += '=' + encodeURIComponent(String(i[o]))),
                t.push(a)
            }
          }
          return (this.c = t.join('&'))
        })
      var ln = !Gt || 9 <= Number(Qt)
      function dn() {
        ;(this.a = ''), (this.b = vn)
      }
      function pn(t) {
        return t instanceof dn && t.constructor === dn && t.b === vn
          ? t.a
          : (S("expected object of type Const, got '" + t + "'"),
            'type_error:Const')
      }
      ;(dn.prototype.la = !0),
        (dn.prototype.ja = function() {
          return this.a
        }),
        (dn.prototype.toString = function() {
          return 'Const{' + this.a + '}'
        })
      var vn = {}
      function mn(t) {
        var e = new dn()
        return (e.a = t), e
      }
      function gn() {
        ;(this.a = ''), (this.b = Tn)
      }
      function bn(t) {
        return t instanceof gn && t.constructor === gn && t.b === Tn
          ? t.a
          : (S(
              "expected object of type TrustedResourceUrl, got '" +
                t +
                "' of type " +
                u(t)
            ),
            'type_error:TrustedResourceUrl')
      }
      function wn(t, e) {
        var n = pn(t)
        if (!In.test(n)) throw Error('Invalid TrustedResourceUrl format: ' + n)
        return (function(t) {
          var e = new gn()
          return (e.a = t), e
        })(
          (t = n.replace(yn, function(t, i) {
            if (!Object.prototype.hasOwnProperty.call(e, i))
              throw Error(
                'Found marker, "' +
                  i +
                  '", in format string, "' +
                  n +
                  '", but no valid label mapping found in args: ' +
                  JSON.stringify(e)
              )
            return (t = e[i]) instanceof dn
              ? pn(t)
              : encodeURIComponent(String(t))
          }))
        )
      }
      mn(''),
        (gn.prototype.la = !0),
        (gn.prototype.ja = function() {
          return this.a
        }),
        (gn.prototype.toString = function() {
          return 'TrustedResourceUrl{' + this.a + '}'
        })
      var yn = /%{(\w+)}/g,
        In = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,
        Tn = {}
      function En() {
        ;(this.a = ''), (this.b = Nn)
      }
      function An(t) {
        return t instanceof En && t.constructor === En && t.b === Nn
          ? t.a
          : (S(
              "expected object of type SafeUrl, got '" + t + "' of type " + u(t)
            ),
            'type_error:SafeUrl')
      }
      ;(En.prototype.la = !0),
        (En.prototype.ja = function() {
          return this.a
        }),
        (En.prototype.toString = function() {
          return 'SafeUrl{' + this.a + '}'
        })
      var kn = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
      function Sn(t) {
        return t instanceof En
          ? t
          : ((t = t.la ? t.ja() : String(t)),
            kn.test(t) || (t = 'about:invalid#zClosurez'),
            _n(t))
      }
      var Nn = {}
      function _n(t) {
        var e = new En()
        return (e.a = t), e
      }
      function On() {
        ;(this.a = ''), (this.b = Pn)
      }
      _n('about:blank'),
        (On.prototype.la = !0),
        (On.prototype.ja = function() {
          return this.a
        }),
        (On.prototype.toString = function() {
          return 'SafeHtml{' + this.a + '}'
        })
      var Pn = {}
      function Rn(t) {
        var e = new On()
        return (e.a = t), e
      }
      function Cn(t) {
        var e = document
        return o(t) ? e.getElementById(t) : t
      }
      function Dn(t, e) {
        rt(e, function(e, n) {
          e && e.la && (e = e.ja()),
            'style' == n
              ? (t.style.cssText = e)
              : 'class' == n
                ? (t.className = e)
                : 'for' == n
                  ? (t.htmlFor = e)
                  : Ln.hasOwnProperty(n)
                    ? t.setAttribute(Ln[n], e)
                    : 0 == n.lastIndexOf('aria-', 0) ||
                      0 == n.lastIndexOf('data-', 0)
                      ? t.setAttribute(n, e)
                      : (t[n] = e)
        })
      }
      Rn('<!DOCTYPE html>'), Rn(''), Rn('<br>')
      var Ln = {
        cellpadding: 'cellPadding',
        cellspacing: 'cellSpacing',
        colspan: 'colSpan',
        frameborder: 'frameBorder',
        height: 'height',
        maxlength: 'maxLength',
        nonce: 'nonce',
        role: 'role',
        rowspan: 'rowSpan',
        type: 'type',
        usemap: 'useMap',
        valign: 'vAlign',
        width: 'width'
      }
      function xn(t, e, n) {
        var i = arguments,
          r = document,
          a = String(i[0]),
          s = i[1]
        if (!ln && s && (s.name || s.type)) {
          if (
            ((a = ['<', a]),
            s.name && a.push(' name="', G(s.name), '"'),
            s.type)
          ) {
            a.push(' type="', G(s.type), '"')
            var u = {}
            ht(u, s), delete u.type, (s = u)
          }
          a.push('>'), (a = a.join(''))
        }
        return (
          (a = r.createElement(a)),
          s &&
            (o(s)
              ? (a.className = s)
              : h(s) ? (a.className = s.join(' ')) : Dn(a, s)),
          2 < i.length &&
            (function(t, e, n) {
              function i(n) {
                n && e.appendChild(o(n) ? t.createTextNode(n) : n)
              }
              for (var r = 2; r < n.length; r++) {
                var a = n[r]
                !f(a) || (d(a) && 0 < a.nodeType)
                  ? i(a)
                  : L(Mn(a) ? K(a) : a, i)
              }
            })(r, a, i),
          a
        )
      }
      function Mn(t) {
        if (t && 'number' == typeof t.length) {
          if (d(t))
            return 'function' == typeof t.item || 'string' == typeof t.item
          if (l(t)) return 'function' == typeof t.item
        }
        return !1
      }
      function jn(t) {
        var e = []
        return (
          (function t(e, n, i) {
            if (null == n) i.push('null')
            else {
              if ('object' == typeof n) {
                if (h(n)) {
                  var r = n
                  ;(n = r.length), i.push('[')
                  for (var o = '', a = 0; a < n; a++)
                    i.push(o), t(e, r[a], i), (o = ',')
                  return void i.push(']')
                }
                if (
                  !(
                    n instanceof String ||
                    n instanceof Number ||
                    n instanceof Boolean
                  )
                ) {
                  for (r in (i.push('{'), (o = ''), n))
                    Object.prototype.hasOwnProperty.call(n, r) &&
                      ('function' != typeof (a = n[r]) &&
                        (i.push(o),
                        Fn(r, i),
                        i.push(':'),
                        t(e, a, i),
                        (o = ',')))
                  return void i.push('}')
                }
                n = n.valueOf()
              }
              switch (typeof n) {
                case 'string':
                  Fn(n, i)
                  break
                case 'number':
                  i.push(isFinite(n) && !isNaN(n) ? String(n) : 'null')
                  break
                case 'boolean':
                  i.push(String(n))
                  break
                case 'function':
                  i.push('null')
                  break
                default:
                  throw Error('Unknown type: ' + typeof n)
              }
            }
          })(new function() {}(), t, e),
          e.join('')
        )
      }
      var Un = {
          '"': '\\"',
          '\\': '\\\\',
          '/': '\\/',
          '\b': '\\b',
          '\f': '\\f',
          '\n': '\\n',
          '\r': '\\r',
          '\t': '\\t',
          '\v': '\\u000b'
        },
        Vn = /\uffff/.test('￿')
          ? /[\\"\x00-\x1f\x7f-\uffff]/g
          : /[\\"\x00-\x1f\x7f-\xff]/g
      function Fn(t, e) {
        e.push(
          '"',
          t.replace(Vn, function(t) {
            var e = Un[t]
            return (
              e ||
                ((e = '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                (Un[t] = e)),
              e
            )
          }),
          '"'
        )
      }
      function Kn() {
        var t = oi()
        return (Gt && !!Qt && 11 == Qt) || /Edge\/\d+/.test(t)
      }
      function Hn() {
        return (
          (r.window && r.window.location.href) ||
          (self && self.location && self.location.href) ||
          ''
        )
      }
      function qn(t, e) {
        e = e || r.window
        var n = 'about:blank'
        t && (n = An(Sn(t))), (e.location.href = n)
      }
      function Gn(t) {
        return !!(
          (t = (t || oi()).toLowerCase()).match(/android/) ||
          t.match(/webos/) ||
          t.match(/iphone|ipad|ipod/) ||
          t.match(/blackberry/) ||
          t.match(/windows phone/) ||
          t.match(/iemobile/)
        )
      }
      function Bn(t) {
        t = t || r.window
        try {
          t.close()
        } catch (t) {}
      }
      function Xn(t, e, n) {
        var i = Math.floor(1e9 * Math.random()).toString()
        ;(e = e || 500), (n = n || 600)
        var r = (window.screen.availHeight - n) / 2,
          o = (window.screen.availWidth - e) / 2
        for (a in ((e = {
          width: e,
          height: n,
          top: 0 < r ? r : 0,
          left: 0 < o ? o : 0,
          location: !0,
          resizable: !0,
          statusbar: !0,
          toolbar: !1
        }),
        (n = oi().toLowerCase()),
        i && ((e.target = i), Q(n, 'crios/') && (e.target = '_blank')),
        ni(oi()) == ti && ((t = t || 'http://localhost'), (e.scrollbars = !0)),
        (n = t || ''),
        (t = e) || (t = {}),
        (i = window),
        (e = n instanceof En ? n : Sn(void 0 !== n.href ? n.href : String(n))),
        (n = t.target || n.target),
        (r = []),
        t))
          switch (a) {
            case 'width':
            case 'height':
            case 'top':
            case 'left':
              r.push(a + '=' + t[a])
              break
            case 'target':
            case 'noopener':
            case 'noreferrer':
              break
            default:
              r.push(a + '=' + (t[a] ? 1 : 0))
          }
        var a = r.join(',')
        if (
          (((it('iPhone') && !it('iPod') && !it('iPad')) ||
            it('iPad') ||
            it('iPod')) &&
          i.navigator &&
          i.navigator.standalone &&
          n &&
          '_self' != n
            ? ((a = i.document.createElement('A')),
              e instanceof En ||
                e instanceof En ||
                ((e = e.la ? e.ja() : String(e)),
                kn.test(e) || (e = 'about:invalid#zClosurez'),
                (e = _n(e))),
              (a.href = An(e)),
              a.setAttribute('target', n),
              t.noreferrer && a.setAttribute('rel', 'noreferrer'),
              (t = document.createEvent('MouseEvent')).initMouseEvent(
                'click',
                !0,
                !0,
                i,
                1
              ),
              a.dispatchEvent(t),
              (a = {}))
            : t.noreferrer
              ? ((a = i.open('', n, a)),
                (t = An(e)),
                a &&
                  (Xt && Q(t, ';') && (t = "'" + t.replace(/'/g, '%27') + "'"),
                  (a.opener = null),
                  mn('b/12014412, meta tag with sanitized URL'),
                  (t = Rn(
                    (t =
                      '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                      G(t) +
                      '">')
                  )),
                  a.document.write(
                    (function(t) {
                      return t instanceof On &&
                        t.constructor === On &&
                        t.b === Pn
                        ? t.a
                        : (S(
                            "expected object of type SafeHtml, got '" +
                              t +
                              "' of type " +
                              u(t)
                          ),
                          'type_error:SafeHtml')
                    })(t)
                  ),
                  a.document.close()))
              : (a = i.open(An(e), n, a)) && t.noopener && (a.opener = null),
          a)
        )
          try {
            a.focus()
          } catch (t) {}
        return a
      }
      var Wn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
      function zn() {
        var t = null
        return new mt(function(e) {
          'complete' == r.document.readyState
            ? e()
            : ((t = function() {
                e()
              }),
              ye(window, 'load', t))
        }).m(function(e) {
          throw (Ie(window, 'load', t), e)
        })
      }
      function Jn(t) {
        return (
          (t = t || oi()),
          !(
            'file:' !== hi() ||
            !t.toLowerCase().match(/iphone|ipad|ipod|android/)
          )
        )
      }
      function Yn() {
        var t = r.window
        try {
          return !(!t || t == t.top)
        } catch (t) {
          return !1
        }
      }
      function $n() {
        return (
          'object' != typeof r.window && 'function' == typeof r.importScripts
        )
      }
      function Zn() {
        return n.INTERNAL.hasOwnProperty('reactNative')
          ? 'ReactNative'
          : n.INTERNAL.hasOwnProperty('node')
            ? 'Node'
            : $n() ? 'Worker' : 'Browser'
      }
      function Qn() {
        var t = Zn()
        return 'ReactNative' === t || 'Node' === t
      }
      var ti = 'Firefox',
        ei = 'Chrome'
      function ni(t) {
        var e = t.toLowerCase()
        return Q(e, 'opera/') || Q(e, 'opr/') || Q(e, 'opios/')
          ? 'Opera'
          : Q(e, 'iemobile')
            ? 'IEMobile'
            : Q(e, 'msie') || Q(e, 'trident/')
              ? 'IE'
              : Q(e, 'edge/')
                ? 'Edge'
                : Q(e, 'firefox/')
                  ? ti
                  : Q(e, 'silk/')
                    ? 'Silk'
                    : Q(e, 'blackberry')
                      ? 'Blackberry'
                      : Q(e, 'webos')
                        ? 'Webos'
                        : !Q(e, 'safari/') ||
                          Q(e, 'chrome/') ||
                          Q(e, 'crios/') ||
                          Q(e, 'android')
                          ? (!Q(e, 'chrome/') && !Q(e, 'crios/')) ||
                            Q(e, 'edge/')
                            ? Q(e, 'android')
                              ? 'Android'
                              : (t = t.match(
                                  /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
                                )) && 2 == t.length
                                ? t[1]
                                : 'Other'
                            : ei
                          : 'Safari'
      }
      var ii = {Qc: 'FirebaseCore-web', Sc: 'FirebaseUI-web'}
      function ri(t, e) {
        e = e || []
        var n,
          i = [],
          r = {}
        for (n in ii) r[ii[n]] = !0
        for (n = 0; n < e.length; n++)
          void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]))
        return (
          i.sort(),
          (e = i).length || (e = ['FirebaseCore-web']),
          'Browser' === (i = Zn())
            ? (i = ni((r = oi())))
            : 'Worker' === i && (i = ni((r = oi())) + '-' + i),
          i + '/JsCore/' + t + '/' + e.join(',')
        )
      }
      function oi() {
        return (r.navigator && r.navigator.userAgent) || ''
      }
      function ai(t, e) {
        ;(t = t.split('.')), (e = e || r)
        for (var n = 0; n < t.length && 'object' == typeof e && null != e; n++)
          e = e[t[n]]
        return n != t.length && (e = void 0), e
      }
      function si() {
        try {
          var t = r.localStorage,
            e = vi()
          if (t)
            return t.setItem(e, '1'), t.removeItem(e), !Kn() || !!r.indexedDB
        } catch (t) {
          return $n() && !!r.indexedDB
        }
        return !1
      }
      function ui() {
        return (
          (ci() || 'chrome-extension:' === hi() || Jn()) &&
          !Qn() &&
          si() &&
          !$n()
        )
      }
      function ci() {
        return 'http:' === hi() || 'https:' === hi()
      }
      function hi() {
        return (r.location && r.location.protocol) || null
      }
      function fi(t) {
        return !Gn((t = t || oi())) && ni(t) != ti
      }
      function li(t) {
        return void 0 === t ? null : jn(t)
      }
      function di(t) {
        var e,
          n = {}
        for (e in t)
          t.hasOwnProperty(e) &&
            null !== t[e] &&
            void 0 !== t[e] &&
            (n[e] = t[e])
        return n
      }
      function pi(t) {
        if (null !== t) return JSON.parse(t)
      }
      function vi(t) {
        return t || Math.floor(1e9 * Math.random()).toString()
      }
      function mi(t) {
        return (
          'Safari' != ni((t = t || oi())) &&
          !t.toLowerCase().match(/iphone|ipad|ipod/)
        )
      }
      function gi() {
        var t = r.___jsl
        if (t && t.H)
          for (var e in t.H)
            if (
              ((t.H[e].r = t.H[e].r || []),
              (t.H[e].L = t.H[e].L || []),
              (t.H[e].r = t.H[e].L.concat()),
              t.CP)
            )
              for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
      }
      function bi(t, e) {
        if (t > e) throw Error('Short delay should be less than long delay!')
        ;(this.a = t),
          (this.c = e),
          (t = oi()),
          (e = Zn()),
          (this.b = Gn(t) || 'ReactNative' === e)
      }
      function wi() {
        var t = r.document
        return (
          !t || void 0 === t.visibilityState || 'visible' == t.visibilityState
        )
      }
      function yi(t) {
        try {
          var e = new Date(parseInt(t, 10))
          if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString()
        } catch (t) {}
        return null
      }
      function Ii() {
        return !(!ai('fireauth.oauthhelper', r) && !ai('fireauth.iframe', r))
      }
      bi.prototype.get = function() {
        var t = r.navigator
        return !t ||
          'boolean' != typeof t.onLine ||
          (!ci() && 'chrome-extension:' !== hi() && void 0 === t.connection) ||
          t.onLine
          ? this.b ? this.c : this.a
          : Math.min(5e3, this.a)
      }
      var Ti,
        Ei = {}
      try {
        var Ai = {}
        Object.defineProperty(Ai, 'abcd', {
          configurable: !0,
          enumerable: !0,
          value: 1
        }),
          Object.defineProperty(Ai, 'abcd', {
            configurable: !0,
            enumerable: !0,
            value: 2
          }),
          (Ti = 2 == Ai.abcd)
      } catch (Ht) {
        Ti = !1
      }
      function ki(t, e, n) {
        Ti
          ? Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n
            })
          : (t[e] = n)
      }
      function Si(t, e) {
        if (e) for (var n in e) e.hasOwnProperty(n) && ki(t, n, e[n])
      }
      function Ni(t) {
        var e = {}
        return Si(e, t), e
      }
      function _i(t) {
        var e = t
        if ('object' == typeof t && null != t)
          for (var n in ((e = 'length' in t ? [] : {}), t)) ki(e, n, _i(t[n]))
        return e
      }
      var Oi = 'EMAIL_SIGNIN',
        Pi = 'email',
        Ri = 'newEmail',
        Ci = 'requestType',
        Di = 'email',
        Li = 'fromEmail',
        xi = 'data',
        Mi = 'operation'
      function ji(t, e) {
        ;(this.code = Vi + t), (this.message = e || Fi[t] || '')
      }
      function Ui(t) {
        var e = t && t.code
        return e ? new ji(e.substring(Vi.length), t.message) : null
      }
      I(ji, Error),
        (ji.prototype.C = function() {
          return {code: this.code, message: this.message}
        }),
        (ji.prototype.toJSON = function() {
          return this.C()
        })
      var Vi = 'auth/',
        Fi = {
          'argument-error': '',
          'app-not-authorized':
            "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
          'app-not-installed':
            'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
          'captcha-check-failed':
            'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
          'code-expired':
            'The SMS code has expired. Please re-send the verification code to try again.',
          'cordova-not-ready': 'Cordova framework is not ready.',
          'cors-unsupported': 'This browser is not supported.',
          'credential-already-in-use':
            'This credential is already associated with a different user account.',
          'custom-token-mismatch':
            'The custom token corresponds to a different audience.',
          'requires-recent-login':
            'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
          'dynamic-link-not-activated':
            'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
          'email-already-in-use':
            'The email address is already in use by another account.',
          'expired-action-code': 'The action code has expired. ',
          'cancelled-popup-request':
            'This operation has been cancelled due to another conflicting popup being opened.',
          'internal-error': 'An internal error has occurred.',
          'invalid-app-credential':
            'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
          'invalid-app-id':
            'The mobile app identifier is not registed for the current project.',
          'invalid-user-token':
            "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
          'invalid-auth-event': 'An internal error has occurred.',
          'invalid-verification-code':
            'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.',
          'invalid-continue-uri':
            'The continue URL provided in the request is invalid.',
          'invalid-cordova-configuration':
            'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
          'invalid-custom-token':
            'The custom token format is incorrect. Please check the documentation.',
          'invalid-email': 'The email address is badly formatted.',
          'invalid-api-key':
            'Your API key is invalid, please check you have copied it correctly.',
          'invalid-cert-hash':
            'The SHA-1 certificate hash provided is invalid.',
          'invalid-credential':
            'The supplied auth credential is malformed or has expired.',
          'invalid-persistence-type':
            'The specified persistence type is invalid. It can only be local, session or none.',
          'invalid-message-payload':
            'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
          'invalid-oauth-provider':
            'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
          'invalid-oauth-client-id':
            'The OAuth client ID provided is either invalid or does not match the specified API key.',
          'unauthorized-domain':
            'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
          'invalid-action-code':
            'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
          'wrong-password':
            'The password is invalid or the user does not have a password.',
          'invalid-phone-number':
            'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
          'invalid-recipient-email':
            'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
          'invalid-sender':
            'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
          'invalid-verification-id':
            'The verification ID used to create the phone auth credential is invalid.',
          'missing-android-pkg-name':
            'An Android Package Name must be provided if the Android App is required to be installed.',
          'auth-domain-config-required':
            'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
          'missing-app-credential':
            'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
          'missing-verification-code':
            'The phone auth credential was created with an empty SMS verification code.',
          'missing-continue-uri':
            'A continue URL must be provided in the request.',
          'missing-iframe-start': 'An internal error has occurred.',
          'missing-ios-bundle-id':
            'An iOS Bundle ID must be provided if an App Store ID is provided.',
          'missing-phone-number':
            'To send verification codes, provide a phone number for the recipient.',
          'missing-verification-id':
            'The phone auth credential was created with an empty verification ID.',
          'app-deleted': 'This instance of FirebaseApp has been deleted.',
          'account-exists-with-different-credential':
            'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
          'network-request-failed':
            'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
          'no-auth-event': 'An internal error has occurred.',
          'no-such-provider':
            'User was not linked to an account with the given provider.',
          'operation-not-allowed':
            'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
          'operation-not-supported-in-this-environment':
            'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
          'popup-blocked':
            'Unable to establish a connection with the popup. It may have been blocked by the browser.',
          'popup-closed-by-user':
            'The popup has been closed by the user before finalizing the operation.',
          'provider-already-linked':
            'User can only be linked to one identity for the given provider.',
          'quota-exceeded':
            "The project's quota for this operation has been exceeded.",
          'redirect-cancelled-by-user':
            'The redirect operation has been cancelled by the user before finalizing.',
          'redirect-operation-pending':
            'A redirect sign-in operation is already pending.',
          timeout: 'The operation has timed out.',
          'user-token-expired':
            "The user's credential is no longer valid. The user must sign in again.",
          'too-many-requests':
            'We have blocked all requests from this device due to unusual activity. Try again later.',
          'unauthorized-continue-uri':
            'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
          'unsupported-persistence-type':
            'The current environment does not support the specified persistence type.',
          'user-cancelled':
            'User did not grant your application the permissions it requested.',
          'user-not-found':
            'There is no user record corresponding to this identifier. The user may have been deleted.',
          'user-disabled':
            'The user account has been disabled by an administrator.',
          'user-mismatch':
            'The supplied credentials do not correspond to the previously signed in user.',
          'user-signed-out': '',
          'weak-password': 'The password must be 6 characters long or more.',
          'web-storage-unsupported':
            'This browser is not supported or 3rd party cookies and data may be disabled.'
        }
      function Ki(t) {
        var e = t[Bi]
        if (void 0 === e) throw new ji('missing-continue-uri')
        if ('string' != typeof e || ('string' == typeof e && !e.length))
          throw new ji('invalid-continue-uri')
        ;(this.h = e), (this.b = this.a = null), (this.g = !1)
        var n = t[Hi]
        if (n && 'object' == typeof n) {
          e = n[zi]
          var i = n[Xi]
          if (((n = n[Wi]), 'string' == typeof e && e.length)) {
            if (((this.a = e), void 0 !== i && 'boolean' != typeof i))
              throw new ji(
                'argument-error',
                Xi + ' property must be a boolean when specified.'
              )
            if (
              ((this.g = !!i),
              void 0 !== n &&
                ('string' != typeof n || ('string' == typeof n && !n.length)))
            )
              throw new ji(
                'argument-error',
                Wi + ' property must be a non empty string when specified.'
              )
            this.b = n || null
          } else {
            if (void 0 !== e)
              throw new ji(
                'argument-error',
                zi + ' property must be a non empty string when specified.'
              )
            if (void 0 !== i || void 0 !== n)
              throw new ji('missing-android-pkg-name')
          }
        } else if (void 0 !== n)
          throw new ji(
            'argument-error',
            Hi + ' property must be a non null object when specified.'
          )
        if (((this.f = null), (e = t[Gi]) && 'object' == typeof e)) {
          if ('string' == typeof (e = e[Ji]) && e.length) this.f = e
          else if (void 0 !== e)
            throw new ji(
              'argument-error',
              Ji + ' property must be a non empty string when specified.'
            )
        } else if (void 0 !== e)
          throw new ji(
            'argument-error',
            Gi + ' property must be a non null object when specified.'
          )
        if (void 0 !== (t = t[qi]) && 'boolean' != typeof t)
          throw new ji(
            'argument-error',
            qi + ' property must be a boolean when specified.'
          )
        this.c = !!t
      }
      var Hi = 'android',
        qi = 'handleCodeInApp',
        Gi = 'iOS',
        Bi = 'url',
        Xi = 'installApp',
        Wi = 'minimumVersion',
        zi = 'packageName',
        Ji = 'bundleId'
      function Yi(t) {
        var e = {}
        for (var n in ((e.continueUrl = t.h),
        (e.canHandleCodeInApp = t.c),
        (e.androidPackageName = t.a) &&
          ((e.androidMinimumVersion = t.b), (e.androidInstallApp = t.g)),
        (e.iOSBundleId = t.f),
        e))
          null === e[n] && delete e[n]
        return e
      }
      var $i = null,
        Zi = null
      function Qi(t) {
        var e = ''
        return (
          (function(t, e) {
            function n(e) {
              for (; i < t.length; ) {
                var n = t.charAt(i++),
                  r = Zi[n]
                if (null != r) return r
                if (!/^[\s\xa0]*$/.test(n))
                  throw Error('Unknown base64 encoding at char: ' + n)
              }
              return e
            }
            !(function() {
              if (!$i) {
                ;($i = {}), (Zi = {})
                for (var t = 0; 65 > t; t++)
                  ($i[
                    t
                  ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(
                    t
                  )),
                    (Zi[$i[t]] = t),
                    62 <= t &&
                      (Zi[
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'.charAt(
                          t
                        )
                      ] = t)
              }
            })()
            for (var i = 0; ; ) {
              var r = n(-1),
                o = n(0),
                a = n(64),
                s = n(64)
              if (64 === s && -1 === r) break
              e((r << 2) | (o >> 4)),
                64 != a &&
                  (e(((o << 4) & 240) | (a >> 2)),
                  64 != s && e(((a << 6) & 192) | s))
            }
          })(t, function(t) {
            e += String.fromCharCode(t)
          }),
          e
        )
      }
      function tr(t) {
        ;(this.c = t.sub),
          (this.a =
            t.provider_id ||
            (t.firebase && t.firebase.sign_in_provider) ||
            null),
          (this.b = !!t.is_anonymous || 'anonymous' == this.a)
      }
      function er(t) {
        return (t = nr(t)) && t.sub && t.iss && t.aud && t.exp
          ? new tr(t)
          : null
      }
      function nr(t) {
        if (!t) return null
        if (3 != (t = t.split('.')).length) return null
        for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++)
          t += '.'
        try {
          return JSON.parse(Qi(t))
        } catch (t) {}
        return null
      }
      tr.prototype.f = function() {
        return this.b
      }
      var ir = 'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
          ' '
        ),
        rr = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
        or = {
          Rc: {Ma: 'locale', Aa: 500, za: 600, Na: 'facebook.com', cb: rr},
          Tc: {Ma: null, Aa: 500, za: 620, Na: 'github.com', cb: rr},
          Uc: {Ma: 'hl', Aa: 515, za: 680, Na: 'google.com', cb: rr},
          $c: {Ma: 'lang', Aa: 485, za: 705, Na: 'twitter.com', cb: ir}
        }
      function ar(t) {
        for (var e in or) if (or[e].Na == t) return or[e]
        return null
      }
      function sr(t) {
        var e = {}
        ;(e['facebook.com'] = lr),
          (e['google.com'] = pr),
          (e['github.com'] = dr),
          (e['twitter.com'] = vr)
        var n = t && t[cr]
        try {
          if (n) return e[n] ? new e[n](t) : new fr(t)
          if (void 0 !== t[ur]) return new hr(t)
        } catch (t) {}
        return null
      }
      var ur = 'idToken',
        cr = 'providerId'
      function hr(t) {
        var e = t[cr]
        if (!e && t[ur]) {
          var n = er(t[ur])
          n && n.a && (e = n.a)
        }
        if (!e) throw Error('Invalid additional user info!')
        ;('anonymous' != e && 'custom' != e) || (e = null),
          (n = !1),
          void 0 !== t.isNewUser
            ? (n = !!t.isNewUser)
            : 'identitytoolkit#SignupNewUserResponse' === t.kind && (n = !0),
          ki(this, 'providerId', e),
          ki(this, 'isNewUser', n)
      }
      function fr(t) {
        hr.call(this, t),
          ki(this, 'profile', _i((t = pi(t.rawUserInfo || '{}')) || {}))
      }
      function lr(t) {
        if ((fr.call(this, t), 'facebook.com' != this.providerId))
          throw Error('Invalid provider ID!')
      }
      function dr(t) {
        if ((fr.call(this, t), 'github.com' != this.providerId))
          throw Error('Invalid provider ID!')
        ki(this, 'username', (this.profile && this.profile.login) || null)
      }
      function pr(t) {
        if ((fr.call(this, t), 'google.com' != this.providerId))
          throw Error('Invalid provider ID!')
      }
      function vr(t) {
        if ((fr.call(this, t), 'twitter.com' != this.providerId))
          throw Error('Invalid provider ID!')
        ki(this, 'username', t.screenName || null)
      }
      function mr(t) {
        var e = ze(t),
          n = We(e, 'link'),
          i = We(ze(n), 'link')
        return We(ze((e = We(e, 'deep_link_id'))), 'link') || e || i || n || t
      }
      function gr(t, e) {
        return t
          .then(function(t) {
            if (t[$o]) {
              var n = er(t[$o])
              if (!n || e != n.c) throw new ji('user-mismatch')
              return t
            }
            throw new ji('user-mismatch')
          })
          .m(function(t) {
            throw t && t.code && t.code == Vi + 'user-not-found'
              ? new ji('user-mismatch')
              : t
          })
      }
      function br(t, e, n) {
        if (e.idToken || e.accessToken)
          e.idToken && ki(this, 'idToken', e.idToken),
            e.accessToken && ki(this, 'accessToken', e.accessToken)
        else {
          if (!e.oauthToken || !e.oauthTokenSecret)
            throw new ji('internal-error', 'failed to construct a credential')
          ki(this, 'accessToken', e.oauthToken),
            ki(this, 'secret', e.oauthTokenSecret)
        }
        ki(this, 'providerId', t), ki(this, 'signInMethod', n)
      }
      function wr(t) {
        var e = {}
        return (
          t.idToken && (e.id_token = t.idToken),
          t.accessToken && (e.access_token = t.accessToken),
          t.secret && (e.oauth_token_secret = t.secret),
          (e.providerId = t.providerId),
          {postBody: sn(e).toString(), requestUri: 'http://localhost'}
        )
      }
      function yr(t, e) {
        ;(this.Ac = e || []),
          Si(this, {providerId: t, isOAuthProvider: !0}),
          (this.tb = {}),
          (this.Za = (ar(t) || {}).Ma || null),
          (this.Xa = null)
      }
      function Ir(t) {
        yr.call(this, t, rr), (this.a = [])
      }
      function Tr() {
        Ir.call(this, 'facebook.com')
      }
      function Er(t) {
        if (!t)
          throw new ji(
            'argument-error',
            'credential failed: expected 1 argument (the OAuth access token).'
          )
        var e = t
        return d(t) && (e = t.accessToken), new Tr().credential(null, e)
      }
      function Ar() {
        Ir.call(this, 'github.com')
      }
      function kr(t) {
        if (!t)
          throw new ji(
            'argument-error',
            'credential failed: expected 1 argument (the OAuth access token).'
          )
        var e = t
        return d(t) && (e = t.accessToken), new Ar().credential(null, e)
      }
      function Sr() {
        Ir.call(this, 'google.com'), this.ta('profile')
      }
      function Nr(t, e) {
        var n = t
        return (
          d(t) && ((n = t.idToken), (e = t.accessToken)),
          new Sr().credential(n, e)
        )
      }
      function _r() {
        yr.call(this, 'twitter.com', ir)
      }
      function Or(t, e) {
        var n = t
        if (
          (d(n) || (n = {oauthToken: t, oauthTokenSecret: e}),
          !n.oauthToken || !n.oauthTokenSecret)
        )
          throw new ji(
            'argument-error',
            'credential failed: expected 2 arguments (the OAuth access token and secret).'
          )
        return new br('twitter.com', n, 'twitter.com')
      }
      function Pr(t, e, n) {
        ;(this.a = t),
          (this.b = e),
          ki(this, 'providerId', 'password'),
          ki(
            this,
            'signInMethod',
            n === Rr.EMAIL_LINK_SIGN_IN_METHOD
              ? Rr.EMAIL_LINK_SIGN_IN_METHOD
              : Rr.EMAIL_PASSWORD_SIGN_IN_METHOD
          )
      }
      function Rr() {
        Si(this, {providerId: 'password', isOAuthProvider: !1})
      }
      function Cr(t, e) {
        if (!(e = Dr(e))) throw new ji('argument-error', 'Invalid email link!')
        return new Pr(t, e, Rr.EMAIL_LINK_SIGN_IN_METHOD)
      }
      function Dr(t) {
        var e =
          We(
            (t = new function(t) {
              this.a = ze(t)
            }((t = mr(t)))).a,
            'oobCode'
          ) || null
        return 'signIn' === (We(t.a, 'mode') || null) && e ? e : null
      }
      function Lr(t) {
        if (!((t.Ra && t.Qa) || (t.Ea && t.Z))) throw new ji('internal-error')
        ;(this.a = t),
          ki(this, 'providerId', 'phone'),
          ki(this, 'signInMethod', 'phone')
      }
      function xr(t) {
        return t.a.Ea && t.a.Z
          ? {temporaryProof: t.a.Ea, phoneNumber: t.a.Z}
          : {sessionInfo: t.a.Ra, code: t.a.Qa}
      }
      function Mr(t) {
        try {
          this.a = t || n.auth()
        } catch (t) {
          throw new ji(
            'argument-error',
            'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
          )
        }
        Si(this, {providerId: 'phone', isOAuthProvider: !1})
      }
      function jr(t, e) {
        if (!t) throw new ji('missing-verification-id')
        if (!e) throw new ji('missing-verification-code')
        return new Lr({Ra: t, Qa: e})
      }
      function Ur(t) {
        if (t.temporaryProof && t.phoneNumber)
          return new Lr({Ea: t.temporaryProof, Z: t.phoneNumber})
        var e = t && t.providerId
        if (!e || 'password' === e) return null
        var n = t && t.oauthAccessToken,
          i = t && t.oauthTokenSecret
        t = t && t.oauthIdToken
        try {
          switch (e) {
            case 'google.com':
              return Nr(t, n)
            case 'facebook.com':
              return Er(n)
            case 'github.com':
              return kr(n)
            case 'twitter.com':
              return Or(n, i)
            default:
              return new Ir(e).credential(t, n)
          }
        } catch (t) {
          return null
        }
      }
      function Vr(t) {
        if (!t.isOAuthProvider) throw new ji('invalid-oauth-provider')
      }
      function Fr(t, e, n, i, r) {
        if (
          ((this.b = t),
          (this.c = e || null),
          (this.f = n || null),
          (this.g = i || null),
          (this.a = r || null),
          !this.f && !this.a)
        )
          throw new ji('invalid-auth-event')
        if (this.f && this.a) throw new ji('invalid-auth-event')
        if (this.f && !this.g) throw new ji('invalid-auth-event')
      }
      function Kr(t) {
        return (t = t || {}).type
          ? new Fr(
              t.type,
              t.eventId,
              t.urlResponse,
              t.sessionId,
              t.error && Ui(t.error)
            )
          : null
      }
      function Hr() {
        ;(this.b = null), (this.a = [])
      }
      I(fr, hr),
        I(lr, fr),
        I(dr, fr),
        I(pr, fr),
        I(vr, fr),
        (br.prototype.xa = function(t) {
          return pa(t, wr(this))
        }),
        (br.prototype.c = function(t, e) {
          var n = wr(this)
          return (n.idToken = e), va(t, n)
        }),
        (br.prototype.f = function(t, e) {
          return gr(ma(t, wr(this)), e)
        }),
        (br.prototype.C = function() {
          var t = {providerId: this.providerId, signInMethod: this.signInMethod}
          return (
            this.idToken && (t.oauthIdToken = this.idToken),
            this.accessToken && (t.oauthAccessToken = this.accessToken),
            this.secret && (t.oauthTokenSecret = this.secret),
            t
          )
        }),
        (yr.prototype.Ca = function(t) {
          return (this.tb = at(t)), this
        }),
        I(Ir, yr),
        (Ir.prototype.ta = function(t) {
          return j(this.a, t) || this.a.push(t), this
        }),
        (Ir.prototype.yb = function() {
          return K(this.a)
        }),
        (Ir.prototype.credential = function(t, e) {
          if (!t && !e)
            throw new ji(
              'argument-error',
              'credential failed: must provide the ID token and/or the access token.'
            )
          return new br(
            this.providerId,
            {idToken: t || null, accessToken: e || null},
            this.providerId
          )
        }),
        I(Tr, Ir),
        ki(Tr, 'PROVIDER_ID', 'facebook.com'),
        ki(Tr, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'),
        I(Ar, Ir),
        ki(Ar, 'PROVIDER_ID', 'github.com'),
        ki(Ar, 'GITHUB_SIGN_IN_METHOD', 'github.com'),
        I(Sr, Ir),
        ki(Sr, 'PROVIDER_ID', 'google.com'),
        ki(Sr, 'GOOGLE_SIGN_IN_METHOD', 'google.com'),
        I(_r, yr),
        ki(_r, 'PROVIDER_ID', 'twitter.com'),
        ki(_r, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'),
        (Pr.prototype.xa = function(t) {
          return this.signInMethod == Rr.EMAIL_LINK_SIGN_IN_METHOD
            ? Ba(t, Aa, {email: this.a, oobCode: this.b})
            : Ba(t, Ka, {email: this.a, password: this.b})
        }),
        (Pr.prototype.c = function(t, e) {
          return this.signInMethod == Rr.EMAIL_LINK_SIGN_IN_METHOD
            ? Ba(t, ka, {idToken: e, email: this.a, oobCode: this.b})
            : Ba(t, xa, {idToken: e, email: this.a, password: this.b})
        }),
        (Pr.prototype.f = function(t, e) {
          return gr(this.xa(t), e)
        }),
        (Pr.prototype.C = function() {
          return {
            email: this.a,
            password: this.b,
            signInMethod: this.signInMethod
          }
        }),
        Si(Rr, {PROVIDER_ID: 'password'}),
        Si(Rr, {EMAIL_LINK_SIGN_IN_METHOD: 'emailLink'}),
        Si(Rr, {EMAIL_PASSWORD_SIGN_IN_METHOD: 'password'}),
        (Lr.prototype.xa = function(t) {
          return t.Sa(xr(this))
        }),
        (Lr.prototype.c = function(t, e) {
          var n = xr(this)
          return (n.idToken = e), Ba(t, qa, n)
        }),
        (Lr.prototype.f = function(t, e) {
          var n = xr(this)
          return (n.operation = 'REAUTH'), gr((t = Ba(t, Ga, n)), e)
        }),
        (Lr.prototype.C = function() {
          var t = {providerId: 'phone'}
          return (
            this.a.Ra && (t.verificationId = this.a.Ra),
            this.a.Qa && (t.verificationCode = this.a.Qa),
            this.a.Ea && (t.temporaryProof = this.a.Ea),
            this.a.Z && (t.phoneNumber = this.a.Z),
            t
          )
        }),
        (Mr.prototype.Sa = function(t, e) {
          var n = this.a.b
          return Et(e.verify()).then(function(i) {
            if (!o(i))
              throw new ji(
                'argument-error',
                'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
              )
            switch (e.type) {
              case 'recaptcha':
                return (function(t, e) {
                  return Ba(t, Da, e)
                })(n, {phoneNumber: t, recaptchaToken: i}).then(
                  function(t) {
                    return 'function' == typeof e.reset && e.reset(), t
                  },
                  function(t) {
                    throw ('function' == typeof e.reset && e.reset(), t)
                  }
                )
              default:
                throw new ji(
                  'argument-error',
                  'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                )
            }
          })
        }),
        Si(Mr, {PROVIDER_ID: 'phone'}),
        Si(Mr, {PHONE_SIGN_IN_METHOD: 'phone'}),
        (Fr.prototype.C = function() {
          return {
            type: this.b,
            eventId: this.c,
            urlResponse: this.f,
            sessionId: this.g,
            error: this.a && this.a.C()
          }
        })
      var qr = null
      function Gr(t) {
        var e = 'unauthorized-domain',
          n = void 0,
          i = ze(t)
        ;(t = i.b),
          'chrome-extension' == (i = i.c)
            ? (n = H(
                'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                t
              ))
            : 'http' == i || 'https' == i
              ? (n = H(
                  'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                  t
                ))
              : (e = 'operation-not-supported-in-this-environment'),
          ji.call(this, e, n)
      }
      function Br(t, e, n) {
        ji.call(this, t, n),
          (t = e || {}).ub && ki(this, 'email', t.ub),
          t.Z && ki(this, 'phoneNumber', t.Z),
          t.credential && ki(this, 'credential', t.credential)
      }
      function Xr(t) {
        if (t.code) {
          var e = t.code || ''
          0 == e.indexOf(Vi) && (e = e.substring(Vi.length))
          var n = {credential: Ur(t)}
          if (t.email) n.ub = t.email
          else {
            if (!t.phoneNumber) return new ji(e, t.message || void 0)
            n.Z = t.phoneNumber
          }
          return new Br(e, n, t.message)
        }
        return null
      }
      ;(Hr.prototype.subscribe = function(t) {
        var e = this
        this.a.push(t),
          this.b ||
            ((this.b = function(t) {
              for (var n = 0; n < e.a.length; n++) e.a[n](t)
            }),
            'function' == typeof (t = ai('universalLinks.subscribe', r)) &&
              t(null, this.b))
      }),
        (Hr.prototype.unsubscribe = function(t) {
          V(this.a, function(e) {
            return e == t
          })
        }),
        I(Gr, ji),
        I(Br, ji),
        (Br.prototype.C = function() {
          var t = {code: this.code, message: this.message}
          this.email && (t.email = this.email),
            this.phoneNumber && (t.phoneNumber = this.phoneNumber)
          var e = this.credential && this.credential.C()
          return e && ht(t, e), t
        }),
        (Br.prototype.toJSON = function() {
          return this.C()
        })
      var Wr,
        zr = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/
      function Jr() {}
      function Yr(t) {
        return t.c || (t.c = t.b())
      }
      function $r() {}
      function Zr(t) {
        if (
          !t.f &&
          'undefined' == typeof XMLHttpRequest &&
          'undefined' != typeof ActiveXObject
        ) {
          for (
            var e = [
                'MSXML2.XMLHTTP.6.0',
                'MSXML2.XMLHTTP.3.0',
                'MSXML2.XMLHTTP',
                'Microsoft.XMLHTTP'
              ],
              n = 0;
            n < e.length;
            n++
          ) {
            var i = e[n]
            try {
              return new ActiveXObject(i), (t.f = i)
            } catch (t) {}
          }
          throw Error(
            'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
          )
        }
        return t.f
      }
      function Qr() {}
      function to() {
        ;(this.a = new XDomainRequest()),
          (this.readyState = 0),
          (this.onreadystatechange = null),
          (this.responseText = ''),
          (this.status = -1),
          (this.statusText = ''),
          (this.a.onload = b(this.bc, this)),
          (this.a.onerror = b(this.zb, this)),
          (this.a.onprogress = b(this.cc, this)),
          (this.a.ontimeout = b(this.fc, this))
      }
      function eo(t, e) {
        ;(t.readyState = e), t.onreadystatechange && t.onreadystatechange()
      }
      function no(t, e, n) {
        this.reset(t, e, n, void 0, void 0)
      }
      function io(t) {
        ;(this.f = t), (this.b = this.c = this.a = null)
      }
      function ro(t, e) {
        ;(this.name = t), (this.value = e)
      }
      ;(Jr.prototype.c = null),
        I($r, Jr),
        ($r.prototype.a = function() {
          var t = Zr(this)
          return t ? new ActiveXObject(t) : new XMLHttpRequest()
        }),
        ($r.prototype.b = function() {
          var t = {}
          return Zr(this) && ((t[0] = !0), (t[1] = !0)), t
        }),
        (Wr = new $r()),
        I(Qr, Jr),
        (Qr.prototype.a = function() {
          var t = new XMLHttpRequest()
          if ('withCredentials' in t) return t
          if ('undefined' != typeof XDomainRequest) return new to()
          throw Error('Unsupported browser')
        }),
        (Qr.prototype.b = function() {
          return {}
        }),
        ((t = to.prototype).open = function(t, e, n) {
          if (null != n && !n) throw Error('Only async requests are supported.')
          this.a.open(t, e)
        }),
        (t.send = function(t) {
          if (t) {
            if ('string' != typeof t)
              throw Error('Only string data is supported')
            this.a.send(t)
          } else this.a.send()
        }),
        (t.abort = function() {
          this.a.abort()
        }),
        (t.setRequestHeader = function() {}),
        (t.getResponseHeader = function(t) {
          return 'content-type' == t.toLowerCase() ? this.a.contentType : ''
        }),
        (t.bc = function() {
          ;(this.status = 200),
            (this.responseText = this.a.responseText),
            eo(this, 4)
        }),
        (t.zb = function() {
          ;(this.status = 500), (this.responseText = ''), eo(this, 4)
        }),
        (t.fc = function() {
          this.zb()
        }),
        (t.cc = function() {
          ;(this.status = 200), eo(this, 1)
        }),
        (t.getAllResponseHeaders = function() {
          return 'content-type: ' + this.a.contentType
        }),
        (no.prototype.a = null),
        (no.prototype.reset = function(t, e, n, i, r) {
          delete this.a
        }),
        (ro.prototype.toString = function() {
          return this.name
        })
      var oo = new ro('SEVERE', 1e3),
        ao = new ro('WARNING', 900),
        so = new ro('CONFIG', 700),
        uo = new ro('FINE', 500)
      io.prototype.log = function(t, e, n) {
        if (
          t.value >=
          (function t(e) {
            return e.c
              ? e.c
              : e.a ? t(e.a) : (S('Root logger has no level set.'), null)
          })(this).value
        )
          for (
            l(e) && (e = e()),
              t = new no(t, String(e), this.f),
              n && (t.a = n),
              n = this;
            n;

          )
            n = n.a
      }
      var co = {},
        ho = null
      function fo(t) {
        var e
        if (
          (ho || ((ho = new io('')), (co[''] = ho), (ho.c = so)), !(e = co[t]))
        ) {
          e = new io(t)
          var n = t.lastIndexOf('.'),
            i = t.substr(n + 1)
          ;(n = fo(t.substr(0, n))).b || (n.b = {}),
            (n.b[i] = e),
            (e.a = n),
            (co[t] = e)
        }
        return e
      }
      function lo(t, e) {
        t && t.log(uo, e, void 0)
      }
      function po(t) {
        this.f = t
      }
      function vo(t) {
        Pe.call(this),
          (this.j = t),
          (this.readyState = mo),
          (this.status = 0),
          (this.responseText = this.statusText = ''),
          (this.onreadystatechange = null),
          (this.g = new Headers()),
          (this.b = null),
          (this.h = 'GET'),
          (this.c = ''),
          (this.a = !1),
          (this.f = fo('goog.net.FetchXmlHttp'))
      }
      I(po, Jr),
        (po.prototype.a = function() {
          return new vo(this.f)
        }),
        (po.prototype.b = (function(t) {
          return function() {
            return t
          }
        })({})),
        I(vo, Pe)
      var mo = 0
      function go(t) {
        t.onreadystatechange && t.onreadystatechange.call(t)
      }
      function bo(t) {
        Pe.call(this),
          (this.headers = new Ue()),
          (this.D = t || null),
          (this.c = !1),
          (this.B = this.a = null),
          (this.h = this.N = this.l = ''),
          (this.f = this.I = this.j = this.G = !1),
          (this.g = 0),
          (this.s = null),
          (this.o = wo),
          (this.v = this.O = !1)
      }
      ;((t = vo.prototype).open = function(t, e) {
        if (this.readyState != mo)
          throw (this.abort(), Error('Error reopening a connection'))
        ;(this.h = t), (this.c = e), (this.readyState = 1), go(this)
      }),
        (t.send = function(t) {
          if (1 != this.readyState)
            throw (this.abort(), Error('need to call open() first. '))
          this.a = !0
          var e = {
            headers: this.g,
            method: this.h,
            credentials: void 0,
            cache: void 0
          }
          t && (e.body = t),
            this.j
              .fetch(new Request(this.c, e))
              .then(this.ec.bind(this), this.Ab.bind(this))
        }),
        (t.abort = function() {
          ;(this.responseText = ''),
            (this.g = new Headers()),
            (this.status = 0),
            1 <= this.readyState &&
              this.a &&
              4 != this.readyState &&
              ((this.readyState = 4), (this.a = !1), go(this)),
            (this.readyState = mo)
        }),
        (t.ec = function(t) {
          this.a &&
            (this.b || ((this.b = t.headers), (this.readyState = 2), go(this)),
            this.a &&
              ((this.readyState = 3),
              go(this),
              this.a &&
                t.text().then(this.dc.bind(this, t), this.Ab.bind(this))))
        }),
        (t.dc = function(t, e) {
          this.a &&
            ((this.status = t.status),
            (this.statusText = t.statusText),
            (this.responseText = e),
            (this.readyState = 4),
            go(this))
        }),
        (t.Ab = function(t) {
          var e = this.f
          e &&
            e.log(
              ao,
              'Failed to fetch url ' + this.c,
              t instanceof Error ? t : Error(t)
            ),
            this.a && ((this.readyState = 4), go(this))
        }),
        (t.setRequestHeader = function(t, e) {
          this.g.append(t, e)
        }),
        (t.getResponseHeader = function(t) {
          return this.b
            ? this.b.get(t.toLowerCase()) || ''
            : ((t = this.f) &&
                t.log(
                  ao,
                  'Attempting to get response header but no headers have been received for url: ' +
                    this.c,
                  void 0
                ),
              '')
        }),
        (t.getAllResponseHeaders = function() {
          if (!this.b) {
            var t = this.f
            return (
              t &&
                t.log(
                  ao,
                  'Attempting to get all response headers but no headers have been received for url: ' +
                    this.c,
                  void 0
                ),
              ''
            )
          }
          t = []
          for (var e = this.b.entries(), n = e.next(); !n.done; )
            (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next())
          return t.join('\r\n')
        }),
        I(bo, Pe)
      var wo = ''
      bo.prototype.b = fo('goog.net.XhrIo')
      var yo = /^https?$/i,
        Io = ['POST', 'PUT']
      function To(t, e, n, i, a) {
        if (t.a)
          throw Error(
            '[goog.net.XhrIo] Object is active with another request=' +
              t.l +
              '; newUri=' +
              e
          )
        ;(n = n ? n.toUpperCase() : 'GET'),
          (t.l = e),
          (t.h = ''),
          (t.N = n),
          (t.G = !1),
          (t.c = !0),
          (t.a = t.D ? t.D.a() : Wr.a()),
          (t.B = t.D ? Yr(t.D) : Yr(Wr)),
          (t.a.onreadystatechange = b(t.Db, t))
        try {
          lo(t.b, Ro(t, 'Opening Xhr')),
            (t.I = !0),
            t.a.open(n, String(e), !0),
            (t.I = !1)
        } catch (e) {
          return (
            lo(t.b, Ro(t, 'Error opening Xhr: ' + e.message)), void Ao(t, e)
          )
        }
        e = i || ''
        var s = new Ue(t.headers)
        a &&
          (function(t, e) {
            if (t.forEach && 'function' == typeof t.forEach)
              t.forEach(e, void 0)
            else if (f(t) || o(t)) L(t, e, void 0)
            else
              for (var n = je(t), i = Me(t), r = i.length, a = 0; a < r; a++)
                e.call(void 0, i[a], n && n[a], t)
          })(a, function(t, e) {
            s.set(e, t)
          }),
          (a = (function(t) {
            t: {
              for (
                var e = Eo, n = t.length, i = o(t) ? t.split('') : t, r = 0;
                r < n;
                r++
              )
                if (r in i && e.call(void 0, i[r], r, t)) {
                  e = r
                  break t
                }
              e = -1
            }
            return 0 > e ? null : o(t) ? t.charAt(e) : t[e]
          })(s.U())),
          (i = r.FormData && e instanceof r.FormData),
          !j(Io, n) ||
            a ||
            i ||
            s.set(
              'Content-Type',
              'application/x-www-form-urlencoded;charset=utf-8'
            ),
          s.forEach(function(t, e) {
            this.a.setRequestHeader(e, t)
          }, t),
          t.o && (t.a.responseType = t.o),
          'withCredentials' in t.a &&
            t.a.withCredentials !== t.O &&
            (t.a.withCredentials = t.O)
        try {
          _o(t),
            0 < t.g &&
              ((t.v = (function(t) {
                return (
                  Gt &&
                  ee(9) &&
                  'number' == typeof t.timeout &&
                  void 0 !== t.ontimeout
                )
              })(t.a)),
              lo(
                t.b,
                Ro(
                  t,
                  'Will abort after ' + t.g + 'ms if incomplete, xhr2 ' + t.v
                )
              ),
              t.v
                ? ((t.a.timeout = t.g), (t.a.ontimeout = b(t.Fa, t)))
                : (t.s = Le(t.Fa, t.g, t))),
            lo(t.b, Ro(t, 'Sending request')),
            (t.j = !0),
            t.a.send(e),
            (t.j = !1)
        } catch (e) {
          lo(t.b, Ro(t, 'Send error: ' + e.message)), Ao(t, e)
        }
      }
      function Eo(t) {
        return 'content-type' == t.toLowerCase()
      }
      function Ao(t, e) {
        ;(t.c = !1),
          t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
          (t.h = e),
          ko(t),
          No(t)
      }
      function ko(t) {
        t.G ||
          ((t.G = !0), t.dispatchEvent('complete'), t.dispatchEvent('error'))
      }
      function So(t) {
        if (t.c && void 0 !== i)
          if (t.B[1] && 4 == Oo(t) && 2 == Po(t))
            lo(t.b, Ro(t, 'Local request error detected and ignored'))
          else if (t.j && 4 == Oo(t)) Le(t.Db, 0, t)
          else if ((t.dispatchEvent('readystatechange'), 4 == Oo(t))) {
            lo(t.b, Ro(t, 'Request complete')), (t.c = !1)
            try {
              var e,
                n = Po(t)
              t: switch (n) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var o = !0
                  break t
                default:
                  o = !1
              }
              if (!(e = o)) {
                var a
                if ((a = 0 === n)) {
                  var s = String(t.l).match(Ke)[1] || null
                  if (!s && r.self && r.self.location) {
                    var u = r.self.location.protocol
                    s = u.substr(0, u.length - 1)
                  }
                  a = !yo.test(s ? s.toLowerCase() : '')
                }
                e = a
              }
              if (e) t.dispatchEvent('complete'), t.dispatchEvent('success')
              else {
                try {
                  var c = 2 < Oo(t) ? t.a.statusText : ''
                } catch (e) {
                  lo(t.b, 'Can not get status: ' + e.message), (c = '')
                }
                ;(t.h = c + ' [' + Po(t) + ']'), ko(t)
              }
            } finally {
              No(t)
            }
          }
      }
      function No(t, e) {
        if (t.a) {
          _o(t)
          var n = t.a,
            i = t.B[0] ? s : null
          ;(t.a = null), (t.B = null), e || t.dispatchEvent('ready')
          try {
            n.onreadystatechange = i
          } catch (e) {
            ;(t = t.b) &&
              t.log(
                oo,
                'Problem encountered resetting onreadystatechange: ' +
                  e.message,
                void 0
              )
          }
        }
      }
      function _o(t) {
        t.a && t.v && (t.a.ontimeout = null),
          t.s && (r.clearTimeout(t.s), (t.s = null))
      }
      function Oo(t) {
        return t.a ? t.a.readyState : 0
      }
      function Po(t) {
        try {
          return 2 < Oo(t) ? t.a.status : -1
        } catch (t) {
          return -1
        }
      }
      function Ro(t, e) {
        return e + ' [' + t.N + ' ' + t.l + ' ' + Po(t) + ']'
      }
      function Co(t, e) {
        ;(this.g = []),
          (this.v = t),
          (this.s = e || null),
          (this.f = this.a = !1),
          (this.c = void 0),
          (this.u = this.B = this.j = !1),
          (this.h = 0),
          (this.b = null),
          (this.l = 0)
      }
      function Do(t, e, n) {
        ;(t.a = !0), (t.c = n), (t.f = !e), jo(t)
      }
      function Lo(t) {
        if (t.a) {
          if (!t.u) throw new Uo(t)
          t.u = !1
        }
      }
      function xo(t, e, n, i) {
        t.g.push([e, n, i]), t.a && jo(t)
      }
      function Mo(t) {
        return M(t.g, function(t) {
          return l(t[1])
        })
      }
      function jo(t) {
        if (t.h && t.a && Mo(t)) {
          var e = t.h,
            n = Ko[e]
          n && (r.clearTimeout(n.a), delete Ko[e]), (t.h = 0)
        }
        t.b && (t.b.l--, delete t.b), (e = t.c)
        for (var i = (n = !1); t.g.length && !t.j; ) {
          var o = t.g.shift(),
            a = o[0],
            s = o[1]
          if (((o = o[2]), (a = t.f ? s : a)))
            try {
              var u = a.call(o || t.s, e)
              void 0 !== u &&
                ((t.f = t.f && (u == e || u instanceof Error)), (t.c = e = u)),
                (E(e) ||
                  ('function' == typeof r.Promise && e instanceof r.Promise)) &&
                  ((i = !0), (t.j = !0))
            } catch (i) {
              ;(e = i), (t.f = !0), Mo(t) || (n = !0)
            }
        }
        ;(t.c = e),
          i &&
            ((u = b(t.o, t, !0)),
            (i = b(t.o, t, !1)),
            e instanceof Co ? (xo(e, u, i), (e.B = !0)) : e.then(u, i)),
          n && ((e = new Fo(e)), (Ko[e.a] = e), (t.h = e.a))
      }
      function Uo() {
        A.call(this)
      }
      function Vo() {
        A.call(this)
      }
      function Fo(t) {
        ;(this.a = r.setTimeout(b(this.c, this), 0)), (this.b = t)
      }
      ;((t = bo.prototype).Fa = function() {
        void 0 !== i &&
          this.a &&
          ((this.h = 'Timed out after ' + this.g + 'ms, aborting'),
          lo(this.b, Ro(this, this.h)),
          this.dispatchEvent('timeout'),
          this.abort(8))
      }),
        (t.abort = function() {
          this.a &&
            this.c &&
            (lo(this.b, Ro(this, 'Aborting')),
            (this.c = !1),
            (this.f = !0),
            this.a.abort(),
            (this.f = !1),
            this.dispatchEvent('complete'),
            this.dispatchEvent('abort'),
            No(this))
        }),
        (t.ua = function() {
          this.a &&
            (this.c &&
              ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
            No(this, !0)),
            bo.lb.ua.call(this)
        }),
        (t.Db = function() {
          this.pa || (this.I || this.j || this.f ? So(this) : this.tc())
        }),
        (t.tc = function() {
          So(this)
        }),
        (t.getResponse = function() {
          try {
            if (!this.a) return null
            if ('response' in this.a) return this.a.response
            switch (this.o) {
              case wo:
              case 'text':
                return this.a.responseText
              case 'arraybuffer':
                if ('mozResponseArrayBuffer' in this.a)
                  return this.a.mozResponseArrayBuffer
            }
            var t = this.b
            return (
              t &&
                t.log(
                  oo,
                  'Response type ' +
                    this.o +
                    ' is not supported on this browser',
                  void 0
                ),
              null
            )
          } catch (t) {
            return lo(this.b, 'Can not get response: ' + t.message), null
          }
        }),
        (Co.prototype.cancel = function(t) {
          if (this.a) this.c instanceof Co && this.c.cancel()
          else {
            if (this.b) {
              var e = this.b
              delete this.b, t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel())
            }
            this.v ? this.v.call(this.s, this) : (this.u = !0),
              this.a || ((t = new Vo(this)), Lo(this), Do(this, !1, t))
          }
        }),
        (Co.prototype.o = function(t, e) {
          ;(this.j = !1), Do(this, t, e)
        }),
        (Co.prototype.D = function() {
          Lo(this), Do(this, !0, null)
        }),
        (Co.prototype.then = function(t, e, n) {
          var i,
            r,
            o = new mt(function(t, e) {
              ;(i = t), (r = e)
            })
          return (
            xo(this, i, function(t) {
              t instanceof Vo ? o.cancel() : r(t)
            }),
            o.then(t, e, n)
          )
        }),
        T(Co),
        I(Uo, A),
        (Uo.prototype.message = 'Deferred has already fired'),
        (Uo.prototype.name = 'AlreadyCalledError'),
        I(Vo, A),
        (Vo.prototype.message = 'Deferred was canceled'),
        (Vo.prototype.name = 'CanceledError'),
        (Fo.prototype.c = function() {
          throw (delete Ko[this.a], this.b)
        })
      var Ko = {}
      function Ho(t) {
        var e = {},
          n = e.document || document,
          i = bn(t),
          r = document.createElement('SCRIPT'),
          o = {Fb: r, Fa: void 0},
          a = new Co(qo, o),
          s = null,
          u = null != e.timeout ? e.timeout : 5e3
        return (
          0 < u &&
            ((s = window.setTimeout(function() {
              Go(r, !0)
              var t = new Wo(Xo, 'Timeout reached for loading script ' + i)
              Lo(a), Do(a, !1, t)
            }, u)),
            (o.Fa = s)),
          (r.onload = r.onreadystatechange = function() {
            ;(r.readyState &&
              'loaded' != r.readyState &&
              'complete' != r.readyState) ||
              (Go(r, e.bd || !1, s), a.D())
          }),
          (r.onerror = function() {
            Go(r, !0, s)
            var t = new Wo(Bo, 'Error while loading script ' + i)
            Lo(a), Do(a, !1, t)
          }),
          ht((o = e.attributes || {}), {
            type: 'text/javascript',
            charset: 'UTF-8'
          }),
          Dn(r, o),
          (r.src = bn(t)),
          (function(t) {
            var e
            return (e = (t || document).getElementsByTagName('HEAD')) &&
              0 != e.length
              ? e[0]
              : t.documentElement
          })(n).appendChild(r),
          a
        )
      }
      function qo() {
        if (this && this.Fb) {
          var t = this.Fb
          t && 'SCRIPT' == t.tagName && Go(t, !0, this.Fa)
        }
      }
      function Go(t, e, n) {
        null != n && r.clearTimeout(n),
          (t.onload = s),
          (t.onerror = s),
          (t.onreadystatechange = s),
          e &&
            window.setTimeout(function() {
              t && t.parentNode && t.parentNode.removeChild(t)
            }, 0)
      }
      var Bo = 0,
        Xo = 1
      function Wo(t, e) {
        var n = 'Jsloader error (code #' + t + ')'
        e && (n += ': ' + e), A.call(this, n), (this.code = t)
      }
      function zo(t) {
        this.f = t
      }
      function Jo(t, e, i) {
        if (
          ((this.b = t),
          (t = e || {}),
          (this.j =
            t.secureTokenEndpoint ||
            'https://securetoken.googleapis.com/v1/token'),
          (this.l = t.secureTokenTimeout || Zo),
          (this.f = at(t.secureTokenHeaders || Qo)),
          (this.g =
            t.firebaseEndpoint ||
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'),
          (this.h = t.firebaseTimeout || ta),
          (this.a = at(t.firebaseHeaders || ea)),
          i &&
            ((this.a['X-Client-Version'] = i),
            (this.f['X-Client-Version'] = i)),
          (i = 'Node' == Zn()),
          !(i =
            r.XMLHttpRequest ||
            (i && n.INTERNAL.node && n.INTERNAL.node.XMLHttpRequest)) && !$n())
        )
          throw new ji(
            'internal-error',
            'The XMLHttpRequest compatibility library was not found.'
          )
        ;(this.c = void 0),
          $n()
            ? (this.c = new po(self))
            : Qn() ? (this.c = new zo(i)) : (this.c = new Qr())
      }
      I(Wo, A),
        I(zo, Jr),
        (zo.prototype.a = function() {
          return new this.f()
        }),
        (zo.prototype.b = function() {
          return {}
        })
      var Yo,
        $o = 'idToken',
        Zo = new bi(3e4, 6e4),
        Qo = {'Content-Type': 'application/x-www-form-urlencoded'},
        ta = new bi(3e4, 6e4),
        ea = {'Content-Type': 'application/json'}
      function na(t, e) {
        e ? (t.a['X-Firebase-Locale'] = e) : delete t.a['X-Firebase-Locale']
      }
      function ia(t, e) {
        e
          ? ((t.a['X-Client-Version'] = e), (t.f['X-Client-Version'] = e))
          : (delete t.a['X-Client-Version'], delete t.f['X-Client-Version'])
      }
      function ra(t, e, n, i, o, a, s) {
        ;(function() {
          var t = oi()
          return !(
            ((t =
              ni(t) != ei
                ? null
                : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
                  ? parseInt(t[1], 10)
                  : null) &&
              30 > t) ||
            (Gt && Qt && !(9 < Qt))
          )
        })() || $n()
          ? (t = b(t.o, t))
          : (Yo ||
              (Yo = new mt(function(t, e) {
                !(function(t, e) {
                  if (((window.gapi || {}).client || {}).request) t()
                  else {
                    r[aa] = function() {
                      ;((window.gapi || {}).client || {}).request
                        ? t()
                        : e(Error('CORS_UNSUPPORTED'))
                    }
                    var n = wn(oa, {onload: aa})
                    !(function(t, e) {
                      xo(t, null, e, void 0)
                    })(Ho(n), function() {
                      e(Error('CORS_UNSUPPORTED'))
                    })
                  }
                })(t, e)
              })),
            (t = b(t.u, t))),
          t(e, n, i, o, a, s)
      }
      Jo.prototype.o = function(t, e, n, i, o, a) {
        if (
          $n() &&
          (void 0 === r.fetch || void 0 === r.Headers || void 0 === r.Request)
        )
          throw new ji(
            'operation-not-supported-in-this-environment',
            'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.'
          )
        var s = new bo(this.c)
        if (a) {
          s.g = Math.max(0, a)
          var u = setTimeout(function() {
            s.dispatchEvent('timeout')
          }, a)
        }
        Re(s, 'complete', function() {
          u && clearTimeout(u)
          var t = null
          try {
            t =
              JSON.parse(
                (function(t) {
                  try {
                    return t.a ? t.a.responseText : ''
                  } catch (e) {
                    return lo(t.b, 'Can not get responseText: ' + e.message), ''
                  }
                })(this)
              ) || null
          } catch (e) {
            t = null
          }
          e && e(t)
        }),
          Ce(s, 'ready', function() {
            u && clearTimeout(u), Vt(this)
          }),
          Ce(s, 'timeout', function() {
            u && clearTimeout(u), Vt(this), e && e(null)
          }),
          To(s, t, n, i, o)
      }
      var oa = mn('https://apis.google.com/js/client.js?onload=%{onload}'),
        aa = '__fcb' + Math.floor(1e6 * Math.random()).toString()
      function sa(t) {
        if (!zr.test(t.email)) throw new ji('invalid-email')
      }
      function ua(t) {
        'email' in t && sa(t)
      }
      function ca(t) {
        if (!t[$o]) throw new ji('internal-error')
      }
      function ha(t) {
        if (t.phoneNumber || t.temporaryProof) {
          if (!t.phoneNumber || !t.temporaryProof)
            throw new ji('internal-error')
        } else {
          if (!t.sessionInfo) throw new ji('missing-verification-id')
          if (!t.code) throw new ji('missing-verification-code')
        }
      }
      ;(Jo.prototype.u = function(t, e, n, i, r) {
        var o = this
        Yo.then(function() {
          window.gapi.client.setApiKey(o.b)
          var a = window.gapi.auth.getToken()
          window.gapi.auth.setToken(null),
            window.gapi.client.request({
              path: t,
              method: n,
              body: i,
              headers: r,
              authType: 'none',
              callback: function(t) {
                window.gapi.auth.setToken(a), e && e(t)
              }
            })
        }).m(function(t) {
          e && e({error: {message: (t && t.message) || 'CORS_UNSUPPORTED'}})
        })
      }),
        (Jo.prototype.jb = function() {
          return Ba(this, Ma, {})
        }),
        (Jo.prototype.mb = function(t, e) {
          return Ba(this, La, {idToken: t, email: e})
        }),
        (Jo.prototype.nb = function(t, e) {
          return Ba(this, xa, {idToken: t, password: e})
        })
      var fa = {displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL'}
      function la(t) {
        if (!t.requestUri || (!t.sessionId && !t.postBody))
          throw new ji('internal-error')
      }
      function da(t) {
        var e = null
        if (
          (t.needConfirmation
            ? ((t.code = 'account-exists-with-different-credential'),
              (e = Xr(t)))
            : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage
              ? ((t.code = 'credential-already-in-use'), (e = Xr(t)))
              : 'EMAIL_EXISTS' == t.errorMessage
                ? ((t.code = 'email-already-in-use'), (e = Xr(t)))
                : t.errorMessage && (e = Xa(t.errorMessage)),
          e)
        )
          throw e
        if (!t[$o]) throw new ji('internal-error')
      }
      function pa(t, e) {
        return (e.returnIdpCredential = !0), Ba(t, ja, e)
      }
      function va(t, e) {
        return (e.returnIdpCredential = !0), Ba(t, Va, e)
      }
      function ma(t, e) {
        return (e.returnIdpCredential = !0), (e.autoCreate = !1), Ba(t, Ua, e)
      }
      function ga(t) {
        if (!t.oobCode) throw new ji('invalid-action-code')
      }
      ;((t = Jo.prototype).ob = function(t, e) {
        var n = {idToken: t},
          i = []
        return (
          rt(fa, function(t, r) {
            var o = e[r]
            null === o ? i.push(t) : r in e && (n[r] = o)
          }),
          i.length && (n.deleteAttribute = i),
          Ba(this, La, n)
        )
      }),
        (t.gb = function(t, e) {
          return (
            ht((t = {requestType: 'PASSWORD_RESET', email: t}), e),
            Ba(this, Oa, t)
          )
        }),
        (t.hb = function(t, e) {
          return (
            ht((t = {requestType: 'EMAIL_SIGNIN', email: t}), e),
            Ba(this, Na, t)
          )
        }),
        (t.fb = function(t, e) {
          return (
            ht((t = {requestType: 'VERIFY_EMAIL', idToken: t}), e),
            Ba(this, _a, t)
          )
        }),
        (t.Sa = function(t) {
          return Ba(this, Ha, t)
        }),
        (t.Wa = function(t, e) {
          return Ba(this, Ca, {oobCode: t, newPassword: e})
        }),
        (t.Ia = function(t) {
          return Ba(this, wa, {oobCode: t})
        }),
        (t.Ua = function(t) {
          return Ba(this, ba, {oobCode: t})
        })
      var ba = {endpoint: 'setAccountInfo', A: ga, ba: 'email'},
        wa = {
          endpoint: 'resetPassword',
          A: ga,
          J: function(t) {
            var e = t.requestType
            if (!e || (!t.email && 'EMAIL_SIGNIN' != e))
              throw new ji('internal-error')
          }
        },
        ya = {
          endpoint: 'signupNewUser',
          A: function(t) {
            if ((sa(t), !t.password)) throw new ji('weak-password')
          },
          J: ca,
          R: !0
        },
        Ia = {endpoint: 'createAuthUri'},
        Ta = {endpoint: 'deleteAccount', T: ['idToken']},
        Ea = {
          endpoint: 'setAccountInfo',
          T: ['idToken', 'deleteProvider'],
          A: function(t) {
            if (!h(t.deleteProvider)) throw new ji('internal-error')
          }
        },
        Aa = {
          endpoint: 'emailLinkSignin',
          T: ['email', 'oobCode'],
          A: sa,
          J: ca,
          R: !0
        },
        ka = {
          endpoint: 'emailLinkSignin',
          T: ['idToken', 'email', 'oobCode'],
          A: sa,
          J: ca,
          R: !0
        },
        Sa = {endpoint: 'getAccountInfo'},
        Na = {
          endpoint: 'getOobConfirmationCode',
          T: ['requestType'],
          A: function(t) {
            if ('EMAIL_SIGNIN' != t.requestType) throw new ji('internal-error')
            sa(t)
          },
          ba: 'email'
        },
        _a = {
          endpoint: 'getOobConfirmationCode',
          T: ['idToken', 'requestType'],
          A: function(t) {
            if ('VERIFY_EMAIL' != t.requestType) throw new ji('internal-error')
          },
          ba: 'email'
        },
        Oa = {
          endpoint: 'getOobConfirmationCode',
          T: ['requestType'],
          A: function(t) {
            if ('PASSWORD_RESET' != t.requestType)
              throw new ji('internal-error')
            sa(t)
          },
          ba: 'email'
        },
        Pa = {pb: !0, endpoint: 'getProjectConfig', Cb: 'GET'},
        Ra = {
          pb: !0,
          endpoint: 'getRecaptchaParam',
          Cb: 'GET',
          J: function(t) {
            if (!t.recaptchaSiteKey) throw new ji('internal-error')
          }
        },
        Ca = {endpoint: 'resetPassword', A: ga, ba: 'email'},
        Da = {
          endpoint: 'sendVerificationCode',
          T: ['phoneNumber', 'recaptchaToken'],
          ba: 'sessionInfo'
        },
        La = {endpoint: 'setAccountInfo', T: ['idToken'], A: ua, R: !0},
        xa = {
          endpoint: 'setAccountInfo',
          T: ['idToken'],
          A: function(t) {
            if ((ua(t), !t.password)) throw new ji('weak-password')
          },
          J: ca,
          R: !0
        },
        Ma = {endpoint: 'signupNewUser', J: ca, R: !0},
        ja = {endpoint: 'verifyAssertion', A: la, J: da, R: !0},
        Ua = {
          endpoint: 'verifyAssertion',
          A: la,
          J: function(t) {
            if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage)
              throw new ji('user-not-found')
            if (t.errorMessage) throw Xa(t.errorMessage)
            if (!t[$o]) throw new ji('internal-error')
          },
          R: !0
        },
        Va = {
          endpoint: 'verifyAssertion',
          A: function(t) {
            if ((la(t), !t.idToken)) throw new ji('internal-error')
          },
          J: da,
          R: !0
        },
        Fa = {
          endpoint: 'verifyCustomToken',
          A: function(t) {
            if (!t.token) throw new ji('invalid-custom-token')
          },
          J: ca,
          R: !0
        },
        Ka = {
          endpoint: 'verifyPassword',
          A: function(t) {
            if ((sa(t), !t.password)) throw new ji('wrong-password')
          },
          J: ca,
          R: !0
        },
        Ha = {endpoint: 'verifyPhoneNumber', A: ha, J: ca},
        qa = {
          endpoint: 'verifyPhoneNumber',
          A: function(t) {
            if (!t.idToken) throw new ji('internal-error')
            ha(t)
          },
          J: function(t) {
            if (t.temporaryProof)
              throw ((t.code = 'credential-already-in-use'), Xr(t))
            ca(t)
          }
        },
        Ga = {
          Tb: {USER_NOT_FOUND: 'user-not-found'},
          endpoint: 'verifyPhoneNumber',
          A: ha,
          J: ca
        }
      function Ba(t, e, n) {
        if (
          !(function(t, e) {
            if (!e || !e.length) return !0
            if (!t) return !1
            for (var n = 0; n < e.length; n++) {
              var i = t[e[n]]
              if (void 0 === i || null === i || '' === i) return !1
            }
            return !0
          })(n, e.T)
        )
          return At(new ji('internal-error'))
        var i,
          r = e.Cb || 'POST'
        return Et(n)
          .then(e.A)
          .then(function() {
            return (
              e.R && (n.returnSecureToken = !0),
              (function(t, e, n, i, r, o) {
                var a = ze(t.g + e)
                Xe(a, 'key', t.b), o && Xe(a, 'cb', y().toString())
                var s = 'GET' == n
                if (s) for (var u in i) i.hasOwnProperty(u) && Xe(a, u, i[u])
                return new mt(function(e, o) {
                  ra(
                    t,
                    a.toString(),
                    function(t) {
                      t
                        ? t.error ? o(Wa(t, r || {})) : e(t)
                        : o(new ji('network-request-failed'))
                    },
                    n,
                    s ? void 0 : jn(di(i)),
                    t.a,
                    t.h.get()
                  )
                })
              })(t, e.endpoint, r, n, e.Tb, e.pb || !1)
            )
          })
          .then(function(t) {
            return (i = t)
          })
          .then(e.J)
          .then(function() {
            if (!e.ba) return i
            if (!(e.ba in i)) throw new ji('internal-error')
            return i[e.ba]
          })
      }
      function Xa(t) {
        return Wa({error: {errors: [{message: t}], code: 400, message: t}})
      }
      function Wa(t, e) {
        var n =
            ((t.error && t.error.errors && t.error.errors[0]) || {}).reason ||
            '',
          i = {
            keyInvalid: 'invalid-api-key',
            ipRefererBlocked: 'app-not-authorized'
          }
        if ((n = i[n] ? new ji(i[n]) : null)) return n
        for (var r in ((n = (t.error && t.error.message) || ''),
        ht(
          (i = {
            INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
            CREDENTIAL_MISMATCH: 'custom-token-mismatch',
            MISSING_CUSTOM_TOKEN: 'internal-error',
            INVALID_IDENTIFIER: 'invalid-email',
            MISSING_CONTINUE_URI: 'internal-error',
            INVALID_EMAIL: 'invalid-email',
            INVALID_PASSWORD: 'wrong-password',
            USER_DISABLED: 'user-disabled',
            MISSING_PASSWORD: 'internal-error',
            EMAIL_EXISTS: 'email-already-in-use',
            PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
            INVALID_IDP_RESPONSE: 'invalid-credential',
            FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
            INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
            INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
            INVALID_SENDER: 'invalid-sender',
            EMAIL_NOT_FOUND: 'user-not-found',
            EXPIRED_OOB_CODE: 'expired-action-code',
            INVALID_OOB_CODE: 'invalid-action-code',
            MISSING_OOB_CODE: 'internal-error',
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
            INVALID_ID_TOKEN: 'invalid-user-token',
            TOKEN_EXPIRED: 'user-token-expired',
            USER_NOT_FOUND: 'user-token-expired',
            CORS_UNSUPPORTED: 'cors-unsupported',
            DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
            INVALID_APP_ID: 'invalid-app-id',
            TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
            WEAK_PASSWORD: 'weak-password',
            OPERATION_NOT_ALLOWED: 'operation-not-allowed',
            USER_CANCELLED: 'user-cancelled',
            CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
            INVALID_APP_CREDENTIAL: 'invalid-app-credential',
            INVALID_CODE: 'invalid-verification-code',
            INVALID_PHONE_NUMBER: 'invalid-phone-number',
            INVALID_SESSION_INFO: 'invalid-verification-id',
            INVALID_TEMPORARY_PROOF: 'invalid-credential',
            MISSING_APP_CREDENTIAL: 'missing-app-credential',
            MISSING_CODE: 'missing-verification-code',
            MISSING_PHONE_NUMBER: 'missing-phone-number',
            MISSING_SESSION_INFO: 'missing-verification-id',
            QUOTA_EXCEEDED: 'quota-exceeded',
            SESSION_EXPIRED: 'code-expired',
            INVALID_CONTINUE_URI: 'invalid-continue-uri',
            MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
            MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
            UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
            INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
            INVALID_CERT_HASH: 'invalid-cert-hash'
          }),
          e || {}
        ),
        (e =
          (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0),
        i))
          if (0 === n.indexOf(r)) return new ji(i[r], e)
        return !e && t && (e = li(t)), new ji('internal-error', e)
      }
      var za,
        Ja = {
          Wc: {
            Ya: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
            eb: 'https://securetoken.googleapis.com/v1/token',
            id: 'p'
          },
          Yc: {
            Ya:
              'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
            eb: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
            id: 's'
          },
          Zc: {
            Ya:
              'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
            eb: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
            id: 't'
          }
        }
      function Ya(t) {
        for (var e in Ja)
          if (Ja[e].id === t)
            return {firebaseEndpoint: (t = Ja[e]).Ya, secureTokenEndpoint: t.eb}
        return null
      }
      function $a(t) {
        ;(this.b = t),
          (this.a = null),
          (this.ab = (function(t) {
            return (
              ns ||
              (ns = new mt(function(t, e) {
                function n() {
                  gi(),
                    ai('gapi.load')('gapi.iframes', {
                      callback: t,
                      ontimeout: function() {
                        gi(), e(Error('Network Error'))
                      },
                      timeout: ts.get()
                    })
                }
                if (ai('gapi.iframes.Iframe')) t()
                else if (ai('gapi.load')) n()
                else {
                  var i =
                    '__iframefcb' + Math.floor(1e6 * Math.random()).toString()
                  ;(r[i] = function() {
                    ai('gapi.load') ? n() : e(Error('Network Error'))
                  }),
                    Et(Ho((i = wn(Qa, {onload: i})))).m(function() {
                      e(Error('Network Error'))
                    })
                }
              }).m(function(t) {
                throw ((ns = null), t)
              }))
            ).then(function() {
              return new mt(function(e, n) {
                ai('gapi.iframes.getContext')().open(
                  {
                    where: document.body,
                    url: t.b,
                    messageHandlersFilter: ai(
                      'gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'
                    ),
                    attributes: {
                      style: {
                        position: 'absolute',
                        top: '-100px',
                        width: '1px',
                        height: '1px'
                      }
                    },
                    dontclear: !0
                  },
                  function(i) {
                    function r() {
                      clearTimeout(o), e()
                    }
                    ;(t.a = i), t.a.restyle({setHideOnLeave: !1})
                    var o = setTimeout(function() {
                      n(Error('Network Error'))
                    }, es.get())
                    i.ping(r).then(r, function() {
                      n(Error('Network Error'))
                    })
                  }
                )
              })
            })
          })(this))
      }
      za = Ya('__EID__') ? '__EID__' : void 0
      var Za,
        Qa = mn('https://apis.google.com/js/api.js?onload=%{onload}'),
        ts = new bi(3e4, 6e4),
        es = new bi(5e3, 15e3),
        ns = null
      function is(t, e, n) {
        ;(this.j = t),
          (this.g = e),
          (this.h = n),
          (this.f = null),
          (this.a = Je(this.j, '/__/auth/iframe')),
          Xe(this.a, 'apiKey', this.g),
          Xe(this.a, 'appName', this.h),
          (this.b = null),
          (this.c = [])
      }
      function rs(t, e, n, i, r) {
        ;(this.o = t),
          (this.u = e),
          (this.c = n),
          (this.l = i),
          (this.h = this.g = this.j = null),
          (this.a = r),
          (this.f = null)
      }
      function os(t) {
        try {
          return n
            .app(t)
            .auth()
            .Ka()
        } catch (t) {
          return []
        }
      }
      function as(t, e, n, i, r) {
        ;(this.u = t),
          (this.f = e),
          (this.b = n),
          (this.c = i || null),
          (this.h = r || null),
          (this.o = this.s = this.v = null),
          (this.g = []),
          (this.l = this.a = null)
      }
      function ss(t) {
        var e = Hn()
        return (function(t) {
          return Ba(t, Pa, {}).then(function(t) {
            return t.authorizedDomains || []
          })
        })(t).then(function(t) {
          t: {
            var n = ze(e),
              i = n.c
            n = n.b
            for (var r = 0; r < t.length; r++) {
              var o = t[r],
                a = n,
                s = i
              if (
                (0 == o.indexOf('chrome-extension://')
                  ? (a = ze(o).b == a && 'chrome-extension' == s)
                  : 'http' != s && 'https' != s
                    ? (a = !1)
                    : Wn.test(o)
                      ? (a = a == o)
                      : ((o = o.split('.').join('\\.')),
                        (a = new RegExp(
                          '^(.+\\.' + o + '|' + o + ')$',
                          'i'
                        ).test(a))),
                a)
              ) {
                t = !0
                break t
              }
            }
            t = !1
          }
          if (!t) throw new Gr(Hn())
        })
      }
      function us(t) {
        return t.l
          ? t.l
          : ((t.l = zn().then(function() {
              if (!t.s) {
                var e = t.c,
                  n = t.h,
                  i = os(t.b),
                  r = new is(t.u, t.f, t.b)
                ;(r.f = e), (r.b = n), (r.c = K(i || [])), (t.s = r.toString())
              }
              ;(t.j = new $a(t.s)),
                (function(t) {
                  if (!t.j) throw Error('IfcHandler must be initialized!')
                  !(function(t, e) {
                    t.ab.then(function() {
                      t.a.register(
                        'authEvent',
                        e,
                        ai('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
                      )
                    })
                  })(t.j, function(e) {
                    var n = {}
                    if (e && e.authEvent) {
                      var i = !1
                      for (e = Kr(e.authEvent), n = 0; n < t.g.length; n++)
                        i = t.g[n](e) || i
                      return ((n = {}).status = i ? 'ACK' : 'ERROR'), Et(n)
                    }
                    return (n.status = 'ERROR'), Et(n)
                  })
                })(t)
            })),
            t.l)
      }
      function cs(t) {
        return (
          t.o ||
            ((t.v = t.c ? ri(t.c, os(t.b)) : null),
            (t.o = new Jo(t.f, Ya(t.h), t.v))),
          t.o
        )
      }
      function hs(t, e, n, i, r, o, a, s, u, c) {
        return (
          ((t = new rs(t, e, n, i, r)).j = o),
          (t.g = a),
          (t.h = s),
          (t.b = at(u || null)),
          (t.f = c),
          t.toString()
        )
      }
      function fs(t) {
        if (
          ((this.a =
            t ||
            (n.INTERNAL.reactNative && n.INTERNAL.reactNative.AsyncStorage)),
          !this.a)
        )
          throw new ji(
            'internal-error',
            'The React Native compatibility library was not found.'
          )
        this.type = 'asyncStorage'
      }
      function ls() {
        if (!vs()) throw new ji('web-storage-unsupported')
        ;(this.f = {}),
          (this.a = []),
          (this.b = 0),
          (this.g = r.indexedDB),
          (this.type = 'indexedDB')
      }
      function ds(t) {
        return new mt(function(e, n) {
          var i = t.g.open('firebaseLocalStorageDb', 1)
          ;(i.onerror = function(t) {
            try {
              t.preventDefault()
            } catch (t) {}
            n(Error(t.target.error))
          }),
            (i.onupgradeneeded = function(t) {
              t = t.target.result
              try {
                t.createObjectStore('firebaseLocalStorage', {
                  keyPath: 'fbase_key'
                })
              } catch (t) {
                n(t)
              }
            }),
            (i.onsuccess = function(i) {
              ;(i = i.target.result).objectStoreNames.contains(
                'firebaseLocalStorage'
              )
                ? e(i)
                : (function(t) {
                    return new mt(function(e, n) {
                      var i = t.g.deleteDatabase('firebaseLocalStorageDb')
                      ;(i.onsuccess = function() {
                        e()
                      }),
                        (i.onerror = function(t) {
                          n(Error(t.target.error))
                        })
                    })
                  })(t)
                    .then(function() {
                      return ds(t)
                    })
                    .then(function(t) {
                      e(t)
                    })
                    .m(function(t) {
                      n(t)
                    })
            })
        })
      }
      function ps(t) {
        return t.h || (t.h = ds(t)), t.h
      }
      function vs() {
        try {
          return !!r.indexedDB
        } catch (t) {
          return !1
        }
      }
      function ms(t) {
        return t.objectStore('firebaseLocalStorage')
      }
      function gs(t, e) {
        return t.transaction(
          ['firebaseLocalStorage'],
          e ? 'readwrite' : 'readonly'
        )
      }
      function bs(t) {
        return new mt(function(e, n) {
          ;(t.onsuccess = function(t) {
            t && t.target ? e(t.target.result) : e()
          }),
            (t.onerror = function(t) {
              n(Error(t.target.errorCode))
            })
        })
      }
      function ws(t) {
        var e = this,
          n = null
        ;(this.a = []),
          (this.type = 'indexedDB'),
          (this.c = t),
          (this.b = Et()
            .then(function() {
              return vs()
                ? (Za || (Za = new ls()),
                  (n = Za)
                    .set('__sak', '!')
                    .then(function() {
                      return n.get('__sak')
                    })
                    .then(function(t) {
                      if ('!' !== t) throw Error('indexedDB not supported!')
                      return n.P('__sak')
                    })
                    .then(function() {
                      return n
                    })
                    .m(function() {
                      return e.c
                    }))
                : e.c
            })
            .then(function(t) {
              return (
                (e.type = t.type),
                t.Y(function(t) {
                  L(e.a, function(e) {
                    e(t)
                  })
                }),
                t
              )
            }))
      }
      function ys() {
        ;(this.a = {}), (this.type = 'inMemory')
      }
      function Is() {
        if (
          !(function() {
            var t = 'Node' == Zn()
            if (
              !(t =
                Ts() || (t && n.INTERNAL.node && n.INTERNAL.node.localStorage))
            )
              return !1
            try {
              return t.setItem('__sak', '1'), t.removeItem('__sak'), !0
            } catch (t) {
              return !1
            }
          })()
        ) {
          if ('Node' == Zn())
            throw new ji(
              'internal-error',
              'The LocalStorage compatibility library was not found.'
            )
          throw new ji('web-storage-unsupported')
        }
        ;(this.a = Ts() || n.INTERNAL.node.localStorage),
          (this.type = 'localStorage')
      }
      function Ts() {
        try {
          var t = r.localStorage,
            e = vi()
          return t && (t.setItem(e, '1'), t.removeItem(e)), t
        } catch (t) {
          return null
        }
      }
      function Es() {
        this.type = 'nullStorage'
      }
      function As() {
        if (
          !(function() {
            var t = 'Node' == Zn()
            if (
              !(t =
                ks() ||
                (t && n.INTERNAL.node && n.INTERNAL.node.sessionStorage))
            )
              return !1
            try {
              return t.setItem('__sak', '1'), t.removeItem('__sak'), !0
            } catch (t) {
              return !1
            }
          })()
        ) {
          if ('Node' == Zn())
            throw new ji(
              'internal-error',
              'The SessionStorage compatibility library was not found.'
            )
          throw new ji('web-storage-unsupported')
        }
        ;(this.a = ks() || n.INTERNAL.node.sessionStorage),
          (this.type = 'sessionStorage')
      }
      function ks() {
        try {
          var t = r.sessionStorage,
            e = vi()
          return t && (t.setItem(e, '1'), t.removeItem(e)), t
        } catch (t) {
          return null
        }
      }
      ;(is.prototype.toString = function() {
        return (
          this.f ? Xe(this.a, 'v', this.f) : un(this.a.a, 'v'),
          this.b ? Xe(this.a, 'eid', this.b) : un(this.a.a, 'eid'),
          this.c.length
            ? Xe(this.a, 'fw', this.c.join(','))
            : un(this.a.a, 'fw'),
          this.a.toString()
        )
      }),
        (rs.prototype.toString = function() {
          var t = Je(this.o, '/__/auth/handler')
          if (
            (Xe(t, 'apiKey', this.u),
            Xe(t, 'appName', this.c),
            Xe(t, 'authType', this.l),
            this.a.isOAuthProvider)
          ) {
            var e = this.a
            try {
              var i = n
                .app(this.c)
                .auth()
                .ca()
            } catch (t) {
              i = null
            }
            for (var r in ((e.Xa = i),
            Xe(t, 'providerId', this.a.providerId),
            (i = di((e = this.a).tb))))
              i[r] = i[r].toString()
            ;(r = e.Ac), (i = at(i))
            for (var o = 0; o < r.length; o++) {
              var a = r[o]
              a in i && delete i[a]
            }
            e.Za && e.Xa && !i[e.Za] && (i[e.Za] = e.Xa),
              ot(i) || Xe(t, 'customParameters', li(i))
          }
          if (
            ('function' == typeof this.a.yb &&
              ((e = this.a.yb()).length && Xe(t, 'scopes', e.join(','))),
            this.j ? Xe(t, 'redirectUrl', this.j) : un(t.a, 'redirectUrl'),
            this.g ? Xe(t, 'eventId', this.g) : un(t.a, 'eventId'),
            this.h ? Xe(t, 'v', this.h) : un(t.a, 'v'),
            this.b)
          )
            for (var s in this.b)
              this.b.hasOwnProperty(s) && !We(t, s) && Xe(t, s, this.b[s])
          return (
            this.f ? Xe(t, 'eid', this.f) : un(t.a, 'eid'),
            (s = os(this.c)).length && Xe(t, 'fw', s.join(',')),
            t.toString()
          )
        }),
        ((t = as.prototype).Da = function(t, e, n) {
          var i = new ji('popup-closed-by-user'),
            r = new ji('web-storage-unsupported'),
            o = this,
            a = !1
          return this.ea()
            .then(function() {
              ;(function(t) {
                var e = {type: 'webStorageSupport'}
                return us(t)
                  .then(function() {
                    return (function(t, e) {
                      return t.ab.then(function() {
                        return new mt(function(n) {
                          t.a.send(
                            e.type,
                            e,
                            n,
                            ai('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
                          )
                        })
                      })
                    })(t.j, e)
                  })
                  .then(function(t) {
                    if (t && t.length && void 0 !== t[0].webStorageSupport)
                      return t[0].webStorageSupport
                    throw Error()
                  })
              })(o).then(function(n) {
                n || (t && Bn(t), e(r), (a = !0))
              })
            })
            .m(function() {})
            .then(function() {
              if (!a)
                return (function(t) {
                  return new mt(function(e) {
                    return (function n() {
                      xe(2e3).then(function() {
                        if (t && !t.closed) return n()
                        e()
                      })
                    })()
                  })
                })(t)
            })
            .then(function() {
              if (!a)
                return xe(n).then(function() {
                  e(i)
                })
            })
        }),
        (t.Gb = function() {
          var t = oi()
          return !fi(t) && !mi(t)
        }),
        (t.Bb = function() {
          return !1
        }),
        (t.xb = function(t, e, n, i, r, o, a) {
          if (!t) return At(new ji('popup-blocked'))
          if (a && !fi())
            return (
              this.ea().m(function(e) {
                Bn(t), r(e)
              }),
              i(),
              Et()
            )
          this.a || (this.a = ss(cs(this)))
          var s = this
          return this.a
            .then(function() {
              var e = s.ea().m(function(e) {
                throw (Bn(t), r(e), e)
              })
              return i(), e
            })
            .then(function() {
              ;(Vr(n), a) ||
                qn(hs(s.u, s.f, s.b, e, n, null, o, s.c, void 0, s.h), t)
            })
            .m(function(t) {
              throw ('auth/network-request-failed' == t.code && (s.a = null), t)
            })
        }),
        (t.Ba = function(t, e, n) {
          this.a || (this.a = ss(cs(this)))
          var i = this
          return this.a
            .then(function() {
              Vr(e), qn(hs(i.u, i.f, i.b, t, e, Hn(), n, i.c, void 0, i.h))
            })
            .m(function(t) {
              throw ('auth/network-request-failed' == t.code && (i.a = null), t)
            })
        }),
        (t.ea = function() {
          var t = this
          return us(this)
            .then(function() {
              return t.j.ab
            })
            .m(function() {
              throw ((t.a = null), new ji('network-request-failed'))
            })
        }),
        (t.Lb = function() {
          return !0
        }),
        (t.va = function(t) {
          this.g.push(t)
        }),
        (t.Ja = function(t) {
          V(this.g, function(e) {
            return e == t
          })
        }),
        ((t = fs.prototype).get = function(t) {
          return Et(this.a.getItem(t)).then(function(t) {
            return t && pi(t)
          })
        }),
        (t.set = function(t, e) {
          return Et(this.a.setItem(t, li(e)))
        }),
        (t.P = function(t) {
          return Et(this.a.removeItem(t))
        }),
        (t.Y = function() {}),
        (t.aa = function() {}),
        ((t = ls.prototype).set = function(t, e) {
          var n,
            i = !1,
            r = this
          return ps(this)
            .then(function(e) {
              return bs((e = ms(gs((n = e), !0))).get(t))
            })
            .then(function(o) {
              var a = ms(gs(n, !0))
              return o
                ? ((o.value = e), bs(a.put(o)))
                : (r.b++,
                  (i = !0),
                  ((o = {}).fbase_key = t),
                  (o.value = e),
                  bs(a.add(o)))
            })
            .then(function() {
              r.f[t] = e
            })
            .ha(function() {
              i && r.b--
            })
        }),
        (t.get = function(t) {
          return ps(this)
            .then(function(e) {
              return bs(ms(gs(e, !1)).get(t))
            })
            .then(function(t) {
              return t && t.value
            })
        }),
        (t.P = function(t) {
          var e = !1,
            n = this
          return ps(this)
            .then(function(i) {
              return (e = !0), n.b++, bs(ms(gs(i, !0)).delete(t))
            })
            .then(function() {
              delete n.f[t]
            })
            .ha(function() {
              e && n.b--
            })
        }),
        (t.Jc = function() {
          var t = this
          return ps(this)
            .then(function(t) {
              var e = ms(gs(t, !1))
              return e.getAll
                ? bs(e.getAll())
                : new mt(function(t, n) {
                    var i = [],
                      r = e.openCursor()
                    ;(r.onsuccess = function(e) {
                      ;(e = e.target.result)
                        ? (i.push(e.value), e.continue())
                        : t(i)
                    }),
                      (r.onerror = function(t) {
                        n(Error(t.target.errorCode))
                      })
                  })
            })
            .then(function(e) {
              var n = {},
                i = []
              if (0 == t.b) {
                for (i = 0; i < e.length; i++) n[e[i].fbase_key] = e[i].value
                ;(i = (function t(e, n) {
                  var i,
                    r = []
                  for (i in e)
                    if (i in n)
                      if (typeof e[i] != typeof n[i]) r.push(i)
                      else if (h(e[i])) {
                        t: {
                          var o = void 0,
                            a = e[i],
                            s = n[i]
                          for (o in a)
                            if (!(o in s) || a[o] !== s[o]) {
                              o = !1
                              break t
                            }
                          for (o in s)
                            if (!(o in a)) {
                              o = !1
                              break t
                            }
                          o = !0
                        }
                        o || r.push(i)
                      } else
                        'object' == typeof e[i] && null != e[i] && null != n[i]
                          ? 0 < t(e[i], n[i]).length && r.push(i)
                          : e[i] !== n[i] && r.push(i)
                    else r.push(i)
                  for (i in n) i in e || r.push(i)
                  return r
                })(t.f, n)),
                  (t.f = n)
              }
              return i
            })
        }),
        (t.Y = function(t) {
          0 == this.a.length &&
            (function(t) {
              t.c && t.c.cancel('STOP_EVENT'),
                (function e() {
                  t.c = xe(800)
                    .then(b(t.Jc, t))
                    .then(function(e) {
                      0 < e.length &&
                        L(t.a, function(t) {
                          t(e)
                        })
                    })
                    .then(e)
                    .m(function(t) {
                      'STOP_EVENT' != t.message && e()
                    })
                  return t.c
                })()
            })(this),
            this.a.push(t)
        }),
        (t.aa = function(t) {
          V(this.a, function(e) {
            return e == t
          }),
            0 == this.a.length && this.c && this.c.cancel('STOP_EVENT')
        }),
        ((t = ws.prototype).get = function(t) {
          return this.b.then(function(e) {
            return e.get(t)
          })
        }),
        (t.set = function(t, e) {
          return this.b.then(function(n) {
            return n.set(t, e)
          })
        }),
        (t.P = function(t) {
          return this.b.then(function(e) {
            return e.P(t)
          })
        }),
        (t.Y = function(t) {
          this.a.push(t)
        }),
        (t.aa = function(t) {
          V(this.a, function(e) {
            return e == t
          })
        }),
        ((t = ys.prototype).get = function(t) {
          return Et(this.a[t])
        }),
        (t.set = function(t, e) {
          return (this.a[t] = e), Et()
        }),
        (t.P = function(t) {
          return delete this.a[t], Et()
        }),
        (t.Y = function() {}),
        (t.aa = function() {}),
        ((t = Is.prototype).get = function(t) {
          var e = this
          return Et().then(function() {
            return pi(e.a.getItem(t))
          })
        }),
        (t.set = function(t, e) {
          var n = this
          return Et().then(function() {
            var i = li(e)
            null === i ? n.P(t) : n.a.setItem(t, i)
          })
        }),
        (t.P = function(t) {
          var e = this
          return Et().then(function() {
            e.a.removeItem(t)
          })
        }),
        (t.Y = function(t) {
          r.window && be(r.window, 'storage', t)
        }),
        (t.aa = function(t) {
          r.window && Ie(r.window, 'storage', t)
        }),
        ((t = Es.prototype).get = function() {
          return Et(null)
        }),
        (t.set = function() {
          return Et()
        }),
        (t.P = function() {
          return Et()
        }),
        (t.Y = function() {}),
        (t.aa = function() {}),
        ((t = As.prototype).get = function(t) {
          var e = this
          return Et().then(function() {
            return pi(e.a.getItem(t))
          })
        }),
        (t.set = function(t, e) {
          var n = this
          return Et().then(function() {
            var i = li(e)
            null === i ? n.P(t) : n.a.setItem(t, i)
          })
        }),
        (t.P = function(t) {
          var e = this
          return Et().then(function() {
            e.a.removeItem(t)
          })
        }),
        (t.Y = function() {}),
        (t.aa = function() {})
      var Ss,
        Ns,
        _s = {w: Is, Pa: As},
        Os = {w: Is, Pa: As},
        Ps = {w: fs, Pa: Es},
        Rs = {w: Is, Pa: Es},
        Cs = {Vc: 'local', NONE: 'none', Xc: 'session'}
      function Ds() {
        var t = !(mi(oi()) || !Yn()),
          e = fi(),
          n = si()
        ;(this.o = t),
          (this.h = e),
          (this.l = n),
          (this.a = {}),
          Ss ||
            (Ss = new function() {
              var t = {}
              ;(t.Browser = _s),
                (t.Node = Os),
                (t.ReactNative = Ps),
                (t.Worker = Rs),
                (this.a = t[Zn()])
            }()),
          (t = Ss)
        try {
          this.g =
            (!Kn() && Ii()) || !r.indexedDB
              ? new t.a.w()
              : new ws($n() ? new ys() : new t.a.w())
        } catch (t) {
          ;(this.g = new ys()), (this.h = !0)
        }
        try {
          this.j = new t.a.Pa()
        } catch (t) {
          this.j = new ys()
        }
        ;(this.u = new ys()), (this.f = b(this.Kb, this)), (this.b = {})
      }
      function Ls() {
        return Ns || (Ns = new Ds()), Ns
      }
      function xs(t, e) {
        switch (e) {
          case 'session':
            return t.j
          case 'none':
            return t.u
          default:
            return t.g
        }
      }
      function Ms(t, e) {
        return 'firebase:' + t.name + (e ? ':' + e : '')
      }
      function js(t, e, n) {
        return (
          (n = Ms(e, n)), 'local' == e.w && (t.b[n] = null), xs(t, e.w).P(n)
        )
      }
      function Us(t) {
        t.c && (clearInterval(t.c), (t.c = null))
      }
      ;((t = Ds.prototype).get = function(t, e) {
        return xs(this, t.w).get(Ms(t, e))
      }),
        (t.set = function(t, e, n) {
          var i = Ms(t, n),
            r = this,
            o = xs(this, t.w)
          return o
            .set(i, e)
            .then(function() {
              return o.get(i)
            })
            .then(function(e) {
              'local' == t.w && (r.b[i] = e)
            })
        }),
        (t.addListener = function(t, e, n) {
          ;(t = Ms(t, e)),
            this.l && (this.b[t] = r.localStorage.getItem(t)),
            ot(this.a) &&
              (xs(this, 'local').Y(this.f),
              this.h ||
                ((Kn() || !Ii()) && r.indexedDB) ||
                !this.l ||
                (function(t) {
                  Us(t),
                    (t.c = setInterval(function() {
                      for (var e in t.a) {
                        var n = r.localStorage.getItem(e),
                          i = t.b[e]
                        n != i &&
                          ((t.b[e] = n),
                          (n = new ue({
                            type: 'storage',
                            key: e,
                            target: window,
                            oldValue: i,
                            newValue: n,
                            a: !0
                          })),
                          t.Kb(n))
                      }
                    }, 1e3))
                })(this)),
            this.a[t] || (this.a[t] = []),
            this.a[t].push(n)
        }),
        (t.removeListener = function(t, e, n) {
          ;(t = Ms(t, e)),
            this.a[t] &&
              (V(this.a[t], function(t) {
                return t == n
              }),
              0 == this.a[t].length && delete this.a[t]),
            ot(this.a) && (xs(this, 'local').aa(this.f), Us(this))
        }),
        (t.Kb = function(t) {
          if (t && t.f) {
            var e = t.a.key
            if (null == e)
              for (var n in this.a) {
                var i = this.b[n]
                void 0 === i && (i = null)
                var o = r.localStorage.getItem(n)
                o !== i && ((this.b[n] = o), this.Va(n))
              }
            else if (0 == e.indexOf('firebase:') && this.a[e]) {
              if (
                (void 0 !== t.a.a ? xs(this, 'local').aa(this.f) : Us(this),
                this.o)
              )
                if (((n = r.localStorage.getItem(e)), (i = t.a.newValue) !== n))
                  null !== i
                    ? r.localStorage.setItem(e, i)
                    : r.localStorage.removeItem(e)
                else if (this.b[e] === i && void 0 === t.a.a) return
              var a = this
              ;(n = function() {
                ;(void 0 === t.a.a && a.b[e] === r.localStorage.getItem(e)) ||
                  ((a.b[e] = r.localStorage.getItem(e)), a.Va(e))
              }),
                Gt &&
                Qt &&
                10 == Qt &&
                r.localStorage.getItem(e) !== t.a.newValue &&
                t.a.newValue !== t.a.oldValue
                  ? setTimeout(n, 10)
                  : n()
            }
          } else L(t, b(this.Va, this))
        }),
        (t.Va = function(t) {
          this.a[t] &&
            L(this.a[t], function(t) {
              t()
            })
        })
      var Vs,
        Fs = {name: 'authEvent', w: 'local'}
      function Ks(t, e) {
        ;(this.b = -1),
          (this.b = Hs),
          (this.f = r.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
          (this.g = this.c = 0),
          (this.a = []),
          (this.j = t),
          (this.h = e),
          (this.l = r.Int32Array ? new Int32Array(64) : Array(64)),
          void 0 !== Vs || (Vs = r.Int32Array ? new Int32Array(Js) : Js),
          this.reset()
      }
      I(Ks, function() {
        this.b = -1
      })
      for (var Hs = 64, qs = Hs - 1, Gs = [], Bs = 0; Bs < qs; Bs++) Gs[Bs] = 0
      var Xs = F(128, Gs)
      function Ws(t) {
        for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
          (n[i++] =
            (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]),
            (r = 4 * i)
        for (e = 16; 64 > e; e++) {
          ;(r = 0 | n[e - 15]), (i = 0 | n[e - 2])
          var o =
              ((0 | n[e - 16]) +
                (((r >>> 7) | (r << 25)) ^
                  ((r >>> 18) | (r << 14)) ^
                  (r >>> 3))) |
              0,
            a =
              ((0 | n[e - 7]) +
                (((i >>> 17) | (i << 15)) ^
                  ((i >>> 19) | (i << 13)) ^
                  (i >>> 10))) |
              0
          n[e] = (o + a) | 0
        }
        ;(i = 0 | t.a[0]), (r = 0 | t.a[1])
        var s = 0 | t.a[2],
          u = 0 | t.a[3],
          c = 0 | t.a[4],
          h = 0 | t.a[5],
          f = 0 | t.a[6]
        for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
          var l =
            ((((i >>> 2) | (i << 30)) ^
              ((i >>> 13) | (i << 19)) ^
              ((i >>> 22) | (i << 10))) +
              ((i & r) ^ (i & s) ^ (r & s))) |
            0
          ;(a =
            ((o =
              (o +
                (((c >>> 6) | (c << 26)) ^
                  ((c >>> 11) | (c << 21)) ^
                  ((c >>> 25) | (c << 7)))) |
              0) +
              (((a = ((a = (c & h) ^ (~c & f)) + (0 | Vs[e])) | 0) +
                (0 | n[e])) |
                0)) |
            0),
            (o = f),
            (f = h),
            (h = c),
            (c = (u + a) | 0),
            (u = s),
            (s = r),
            (r = i),
            (i = (a + l) | 0)
        }
        ;(t.a[0] = (t.a[0] + i) | 0),
          (t.a[1] = (t.a[1] + r) | 0),
          (t.a[2] = (t.a[2] + s) | 0),
          (t.a[3] = (t.a[3] + u) | 0),
          (t.a[4] = (t.a[4] + c) | 0),
          (t.a[5] = (t.a[5] + h) | 0),
          (t.a[6] = (t.a[6] + f) | 0),
          (t.a[7] = (t.a[7] + o) | 0)
      }
      function zs(t, e, n) {
        void 0 === n && (n = e.length)
        var i = 0,
          r = t.c
        if (o(e))
          for (; i < n; )
            (t.f[r++] = e.charCodeAt(i++)), r == t.b && (Ws(t), (r = 0))
        else {
          if (!f(e)) throw Error('message must be string or array')
          for (; i < n; ) {
            var a = e[i++]
            if (!('number' == typeof a && 0 <= a && 255 >= a && a == (0 | a)))
              throw Error('message must be a byte array')
            ;(t.f[r++] = a), r == t.b && (Ws(t), (r = 0))
          }
        }
        ;(t.c = r), (t.g += n)
      }
      Ks.prototype.reset = function() {
        ;(this.g = this.c = 0),
          (this.a = r.Int32Array ? new Int32Array(this.h) : K(this.h))
      }
      var Js = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]
      function Ys() {
        Ks.call(this, 8, $s)
      }
      I(Ys, Ks)
      var $s = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ]
      function Zs(t, e, n, i, r) {
        ;(this.u = t),
          (this.j = e),
          (this.l = n),
          (this.o = i || null),
          (this.s = r || null),
          (this.h = e + ':' + n),
          (this.v = new function() {
            this.a = Ls()
          }()),
          (this.g = new function(t) {
            ;(this.a = t), (this.b = Ls())
          }(this.h)),
          (this.f = null),
          (this.b = []),
          (this.a = this.c = null)
      }
      function Qs(t) {
        return new ji('invalid-cordova-configuration', t)
      }
      function tu(t) {
        var e = new Ys()
        zs(e, t), (t = [])
        var n = 8 * e.g
        56 > e.c ? zs(e, Xs, 56 - e.c) : zs(e, Xs, e.b - (e.c - 56))
        for (var i = 63; 56 <= i; i--) (e.f[i] = 255 & n), (n /= 256)
        for (Ws(e), i = n = 0; i < e.j; i++)
          for (var r = 24; 0 <= r; r -= 8) t[n++] = (e.a[i] >> r) & 255
        return (function(t) {
          return x(t, function(t) {
            return 1 < (t = t.toString(16)).length ? t : '0' + t
          }).join('')
        })(t)
      }
      function eu(t, e) {
        for (var n = 0; n < t.b.length; n++)
          try {
            t.b[n](e)
          } catch (t) {}
      }
      function nu(t) {
        return (
          t.f ||
            (t.f = t.ea().then(function() {
              return new mt(function(e) {
                t.va(function n(i) {
                  return e(i), t.Ja(n), !1
                }),
                  (function(t) {
                    function e(e) {
                      ;(i = !0),
                        o && o.cancel(),
                        iu(t).then(function(i) {
                          var r = n
                          if (i && e && e.url) {
                            var o = null
                            ;-1 !=
                              (r = mr(e.url)).indexOf('/__/auth/callback') &&
                              (o = (o =
                                'object' ==
                                typeof (o = pi(
                                  We((o = ze(r)), 'firebaseError') || null
                                ))
                                  ? Ui(o)
                                  : null)
                                ? new Fr(i.b, i.c, null, null, o)
                                : new Fr(i.b, i.c, r, i.g)),
                              (r = o || n)
                          }
                          eu(t, r)
                        })
                    }
                    var n = new Fr(
                        'unknown',
                        null,
                        null,
                        null,
                        new ji('no-auth-event')
                      ),
                      i = !1,
                      o = xe(500).then(function() {
                        return iu(t).then(function() {
                          i || eu(t, n)
                        })
                      }),
                      a = r.handleOpenURL
                    ;(r.handleOpenURL = function(t) {
                      if (
                        (0 ==
                          t
                            .toLowerCase()
                            .indexOf(
                              ai('BuildInfo.packageName', r).toLowerCase() +
                                '://'
                            ) && e({url: t}),
                        'function' == typeof a)
                      )
                        try {
                          a(t)
                        } catch (t) {
                          console.error(t)
                        }
                    }),
                      qr || (qr = new Hr()),
                      qr.subscribe(e)
                  })(t)
              })
            })),
          t.f
        )
      }
      function iu(t) {
        var e = null
        return (function(t) {
          return t.b.get(Fs, t.a).then(function(t) {
            return Kr(t)
          })
        })(t.g)
          .then(function(n) {
            return (e = n), js((n = t.g).b, Fs, n.a)
          })
          .then(function() {
            return e
          })
      }
      ;((t = Zs.prototype).ea = function() {
        return this.ya
          ? this.ya
          : (this.ya = (Jn(void 0)
              ? zn().then(function() {
                  return new mt(function(t, e) {
                    var n = r.document,
                      i = setTimeout(function() {
                        e(Error('Cordova framework is not ready.'))
                      }, 1e3)
                    n.addEventListener(
                      'deviceready',
                      function() {
                        clearTimeout(i), t()
                      },
                      !1
                    )
                  })
                })
              : At(Error('Cordova must run in an Android or iOS file scheme.'))
            ).then(
              function() {
                if ('function' != typeof ai('universalLinks.subscribe', r))
                  throw Qs('cordova-universal-links-plugin is not installed')
                if (void 0 === ai('BuildInfo.packageName', r))
                  throw Qs('cordova-plugin-buildinfo is not installed')
                if (
                  'function' !=
                  typeof ai('cordova.plugins.browsertab.openUrl', r)
                )
                  throw Qs('cordova-plugin-browsertab is not installed')
                if ('function' != typeof ai('cordova.InAppBrowser.open', r))
                  throw Qs('cordova-plugin-inappbrowser is not installed')
              },
              function() {
                throw new ji('cordova-not-ready')
              }
            ))
      }),
        (t.Da = function(t, e) {
          return e(new ji('operation-not-supported-in-this-environment')), Et()
        }),
        (t.xb = function() {
          return At(new ji('operation-not-supported-in-this-environment'))
        }),
        (t.Lb = function() {
          return !1
        }),
        (t.Gb = function() {
          return !0
        }),
        (t.Bb = function() {
          return !0
        }),
        (t.Ba = function(t, e, n) {
          if (this.c) return At(new ji('redirect-operation-pending'))
          var i = this,
            o = r.document,
            a = null,
            s = null,
            u = null,
            c = null
          return (this.c = Et()
            .then(function() {
              return Vr(e), nu(i)
            })
            .then(function() {
              return (function(t, e, n, i) {
                var o = (function() {
                    for (var t = 20, e = []; 0 < t; )
                      e.push(
                        '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                          Math.floor(62 * Math.random())
                        )
                      ),
                        t--
                    return e.join('')
                  })(),
                  a = new Fr(e, i, null, o, new ji('no-auth-event')),
                  s = ai('BuildInfo.packageName', r)
                if ('string' != typeof s)
                  throw new ji('invalid-cordova-configuration')
                var u = ai('BuildInfo.displayName', r),
                  c = {}
                if (
                  oi()
                    .toLowerCase()
                    .match(/iphone|ipad|ipod/)
                )
                  c.ibi = s
                else {
                  if (
                    !oi()
                      .toLowerCase()
                      .match(/android/)
                  )
                    return At(
                      new ji('operation-not-supported-in-this-environment')
                    )
                  c.apn = s
                }
                u && (c.appDisplayName = u), (o = tu(o)), (c.sessionId = o)
                var h = hs(t.u, t.j, t.l, e, n, null, i, t.o, c, t.s)
                return t
                  .ea()
                  .then(function() {
                    var e = t.h
                    return t.v.a.set(Fs, a.C(), e)
                  })
                  .then(function() {
                    var e = ai('cordova.plugins.browsertab.isAvailable', r)
                    if ('function' != typeof e)
                      throw new ji('invalid-cordova-configuration')
                    var n = null
                    e(function(e) {
                      if (e) {
                        if (
                          'function' !=
                          typeof (n = ai(
                            'cordova.plugins.browsertab.openUrl',
                            r
                          ))
                        )
                          throw new ji('invalid-cordova-configuration')
                        n(h)
                      } else {
                        if (
                          'function' !=
                          typeof (n = ai('cordova.InAppBrowser.open', r))
                        )
                          throw new ji('invalid-cordova-configuration')
                        ;(e = !(
                          !(e = oi()).match(/(iPad|iPhone|iPod).*OS 7_\d/i) &&
                          !e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                        )),
                          (t.a = n(h, e ? '_blank' : '_system', 'location=yes'))
                      }
                    })
                  })
              })(i, t, e, n)
            })
            .then(function() {
              return new mt(function(t, e) {
                ;(s = function() {
                  var e = ai('cordova.plugins.browsertab.close', r)
                  return (
                    t(),
                    'function' == typeof e && e(),
                    i.a &&
                      'function' == typeof i.a.close &&
                      (i.a.close(), (i.a = null)),
                    !1
                  )
                }),
                  i.va(s),
                  (u = function() {
                    a ||
                      (a = xe(2e3).then(function() {
                        e(new ji('redirect-cancelled-by-user'))
                      }))
                  }),
                  (c = function() {
                    wi() && u()
                  }),
                  o.addEventListener('resume', u, !1),
                  oi()
                    .toLowerCase()
                    .match(/android/) ||
                    o.addEventListener('visibilitychange', c, !1)
              }).m(function(t) {
                return iu(i).then(function() {
                  throw t
                })
              })
            })
            .ha(function() {
              u && o.removeEventListener('resume', u, !1),
                c && o.removeEventListener('visibilitychange', c, !1),
                a && a.cancel(),
                s && i.Ja(s),
                (i.c = null)
            }))
        }),
        (t.va = function(t) {
          this.b.push(t),
            nu(this).m(function(e) {
              'auth/invalid-cordova-configuration' === e.code &&
                ((e = new Fr(
                  'unknown',
                  null,
                  null,
                  null,
                  new ji('no-auth-event')
                )),
                t(e))
            })
        }),
        (t.Ja = function(t) {
          V(this.b, function(e) {
            return e == t
          })
        })
      var ru = {name: 'pendingRedirect', w: 'session'}
      function ou(t) {
        return js(t.b, ru, t.a)
      }
      function au(t, e, n) {
        ;(this.v = t),
          (this.l = e),
          (this.u = n),
          (this.h = []),
          (this.f = !1),
          (this.j = b(this.o, this)),
          (this.c = new mu()),
          (this.s = new yu()),
          (this.g = new function(t) {
            ;(this.a = t), (this.b = Ls())
          }(this.l + ':' + this.u)),
          (this.b = {}),
          (this.b.unknown = this.c),
          (this.b.signInViaRedirect = this.c),
          (this.b.linkViaRedirect = this.c),
          (this.b.reauthViaRedirect = this.c),
          (this.b.signInViaPopup = this.s),
          (this.b.linkViaPopup = this.s),
          (this.b.reauthViaPopup = this.s),
          (this.a = su(this.v, this.l, this.u, za))
      }
      function su(t, e, i, r) {
        var o = n.SDK_VERSION || null
        return Jn() ? new Zs(t, e, i, o, r) : new as(t, e, i, o, r)
      }
      function uu(t) {
        t.f || ((t.f = !0), t.a.va(t.j))
        var e = t.a
        return t.a.ea().m(function(n) {
          throw (t.a == e && t.reset(), n)
        })
      }
      function cu(t) {
        t.a.Gb() &&
          uu(t).m(function(e) {
            var n = new Fr(
              'unknown',
              null,
              null,
              null,
              new ji('operation-not-supported-in-this-environment')
            )
            du(e) && t.o(n)
          }),
          t.a.Bb() || gu(t.c)
      }
      ;(au.prototype.reset = function() {
        ;(this.f = !1), this.a.Ja(this.j), (this.a = su(this.v, this.l, this.u))
      }),
        (au.prototype.subscribe = function(t) {
          if ((j(this.h, t) || this.h.push(t), !this.f)) {
            var e = this
            ;(function(t) {
              return t.b.get(ru, t.a).then(function(t) {
                return 'pending' == t
              })
            })(this.g)
              .then(function(t) {
                t
                  ? ou(e.g).then(function() {
                      uu(e).m(function(t) {
                        var n = new Fr(
                          'unknown',
                          null,
                          null,
                          null,
                          new ji('operation-not-supported-in-this-environment')
                        )
                        du(t) && e.o(n)
                      })
                    })
                  : cu(e)
              })
              .m(function() {
                cu(e)
              })
          }
        }),
        (au.prototype.unsubscribe = function(t) {
          V(this.h, function(e) {
            return e == t
          })
        }),
        (au.prototype.o = function(t) {
          if (!t) throw new ji('invalid-auth-event')
          for (var e = !1, n = 0; n < this.h.length; n++) {
            var i = this.h[n]
            if (i.qb(t.b, t.c)) {
              ;(e = this.b[t.b]) && e.h(t, i), (e = !0)
              break
            }
          }
          return gu(this.c), e
        })
      var hu = new bi(2e3, 1e4),
        fu = new bi(3e4, 6e4)
      function lu(t, e, n, i, r, o) {
        return t.a.xb(
          e,
          n,
          i,
          function() {
            t.f || ((t.f = !0), t.a.va(t.j))
          },
          function() {
            t.reset()
          },
          r,
          o
        )
      }
      function du(t) {
        return !(!t || 'auth/cordova-not-ready' != t.code)
      }
      ;(au.prototype.da = function() {
        return this.c.da()
      }),
        (au.prototype.Ba = function(t, e, n) {
          var i,
            r = this
          return (function(t) {
            return t.b.set(ru, 'pending', t.a)
          })(this.g).then(function() {
            return r.a
              .Ba(t, e, n)
              .m(function(t) {
                if (du(t))
                  throw new ji('operation-not-supported-in-this-environment')
                return (
                  (i = t),
                  ou(r.g).then(function() {
                    throw i
                  })
                )
              })
              .then(function() {
                return r.a.Lb()
                  ? new mt(function() {})
                  : ou(r.g)
                      .then(function() {
                        return r.da()
                      })
                      .then(function() {})
                      .m(function() {})
              })
          })
        }),
        (au.prototype.Da = function(t, e, n, i) {
          return this.a.Da(
            n,
            function(n) {
              t.ga(e, null, n, i)
            },
            hu.get()
          )
        })
      var pu = {}
      function vu(t, e, n) {
        var i = e + ':' + n
        return pu[i] || (pu[i] = new au(t, e, n)), pu[i]
      }
      function mu() {
        ;(this.b = null),
          (this.f = []),
          (this.c = []),
          (this.a = null),
          (this.g = !1)
      }
      function gu(t) {
        t.g || ((t.g = !0), wu(t, !1, null, null))
      }
      function bu(t, e) {
        if (
          ((t.b = function() {
            return Et(e)
          }),
          t.f.length)
        )
          for (var n = 0; n < t.f.length; n++) t.f[n](e)
      }
      function wu(t, e, n, i) {
        e
          ? i
            ? (function(t, e) {
                if (
                  ((t.b = function() {
                    return At(e)
                  }),
                  t.c.length)
                )
                  for (var n = 0; n < t.c.length; n++) t.c[n](e)
              })(t, i)
            : bu(t, n)
          : bu(t, {user: null}),
          (t.f = []),
          (t.c = [])
      }
      function yu() {}
      function Iu(t, e) {
        ;(this.a = e), ki(this, 'verificationId', t)
      }
      function Tu(t, e, n, i) {
        return new Mr(t).Sa(e, n).then(function(t) {
          return new Iu(t, i)
        })
      }
      function Eu(t, e, n) {
        if (
          ((this.h = t),
          (this.j = e),
          (this.g = n),
          (this.c = 3e4),
          (this.f = 96e4),
          (this.b = null),
          (this.a = this.c),
          this.f < this.c)
        )
          throw Error('Proactive refresh lower bound greater than upper bound!')
      }
      function Au(t) {
        ;(this.f = t), (this.b = this.a = null), (this.c = 0)
      }
      function ku(t, e) {
        var n = e[$o],
          i = e.refreshToken
        ;(e = Su(e.expiresIn)), (t.b = n), (t.c = e), (t.a = i)
      }
      function Su(t) {
        return y() + 1e3 * parseInt(t, 10)
      }
      function Nu(t, e) {
        return (function(t, e) {
          return new mt(function(n, i) {
            ;('refresh_token' == e.grant_type && e.refresh_token) ||
            ('authorization_code' == e.grant_type && e.code)
              ? ra(
                  t,
                  t.j + '?key=' + encodeURIComponent(t.b),
                  function(t) {
                    t
                      ? t.error
                        ? i(Wa(t))
                        : t.access_token && t.refresh_token
                          ? n(t)
                          : i(new ji('internal-error'))
                      : i(new ji('network-request-failed'))
                  },
                  'POST',
                  sn(e).toString(),
                  t.f,
                  t.l.get()
                )
              : i(new ji('internal-error'))
          })
        })(t.f, e)
          .then(function(e) {
            return (
              (t.b = e.access_token),
              (t.c = Su(e.expires_in)),
              (t.a = e.refresh_token),
              {accessToken: t.b, expirationTime: t.c, refreshToken: t.a}
            )
          })
          .m(function(e) {
            throw ('auth/user-token-expired' == e.code && (t.a = null), e)
          })
      }
      function _u(t, e) {
        ;(this.a = t || null),
          (this.b = e || null),
          Si(this, {lastSignInTime: yi(e || null), creationTime: yi(t || null)})
      }
      function Ou(t, e) {
        for (var n in (se.call(this, t), e)) this[n] = e[n]
      }
      function Pu(t, e, i) {
        ;(this.D = []),
          (this.G = t.apiKey),
          (this.s = t.appName),
          (this.B = t.authDomain || null),
          (t = n.SDK_VERSION ? ri(n.SDK_VERSION) : null),
          (this.b = new Jo(this.G, Ya(za), t)),
          (this.h = new Au(this.b)),
          ju(this, e[$o]),
          ku(this.h, e),
          ki(this, 'refreshToken', this.h.a),
          Fu(this, i || {}),
          Pe.call(this),
          (this.I = !1),
          this.B && ui() && (this.a = vu(this.B, this.G, this.s)),
          (this.N = []),
          (this.j = null),
          (this.l = (function(t) {
            return new Eu(
              function() {
                return t.F(!0)
              },
              function(t) {
                return !(!t || 'auth/network-request-failed' != t.code)
              },
              function() {
                var e = t.h.c - y() - 3e5
                return 0 < e ? e : 0
              }
            )
          })(this)),
          (this.V = b(this.Ga, this))
        var r = this
        ;(this.ia = null),
          (this.sa = function(t) {
            r.na(t.g)
          }),
          (this.X = null),
          (this.O = []),
          (this.ra = function(t) {
            Cu(r, t.c)
          }),
          (this.W = null)
      }
      function Ru(t, e) {
        t.X && Ie(t.X, 'languageCodeChanged', t.sa),
          (t.X = e) && be(e, 'languageCodeChanged', t.sa)
      }
      function Cu(t, e) {
        ;(t.O = e), ia(t.b, n.SDK_VERSION ? ri(n.SDK_VERSION, t.O) : null)
      }
      function Du(t, e) {
        t.W && Ie(t.W, 'frameworkChanged', t.ra),
          (t.W = e) && be(e, 'frameworkChanged', t.ra)
      }
      function Lu(t) {
        try {
          return n.app(t.s).auth()
        } catch (e) {
          throw new ji(
            'internal-error',
            "No firebase.auth.Auth instance is available for the Firebase App '" +
              t.s +
              "'!"
          )
        }
      }
      function xu(t) {
        t.o ||
          t.l.b ||
          (t.l.start(), Ie(t, 'tokenChanged', t.V), be(t, 'tokenChanged', t.V))
      }
      function Mu(t) {
        Ie(t, 'tokenChanged', t.V), t.l.stop()
      }
      function ju(t, e) {
        ;(t.qa = e), ki(t, '_lat', e)
      }
      function Uu(t) {
        for (var e = [], n = 0; n < t.N.length; n++) e.push(t.N[n](t))
        return (function(t) {
          return new mt(function(e) {
            var n = t.length,
              i = []
            if (n)
              for (
                var r = function(t, r, o) {
                    n--,
                      (i[t] = r ? {Zb: !0, value: o} : {Zb: !1, reason: o}),
                      0 == n && e(i)
                  },
                  o = 0;
                o < t.length;
                o++
              )
                kt(t[o], w(r, o, !0), w(r, o, !1))
            else e(i)
          })
        })(e).then(function() {
          return t
        })
      }
      function Vu(t) {
        t.a && !t.I && ((t.I = !0), t.a.subscribe(t))
      }
      function Fu(t, e) {
        Si(t, {
          uid: e.uid,
          displayName: e.displayName || null,
          photoURL: e.photoURL || null,
          email: e.email || null,
          emailVerified: e.emailVerified || !1,
          phoneNumber: e.phoneNumber || null,
          isAnonymous: e.isAnonymous || !1,
          metadata: new _u(e.createdAt, e.lastLoginAt),
          providerData: []
        })
      }
      function Ku() {}
      function Hu(t) {
        return Et().then(function() {
          if (t.o) throw new ji('app-deleted')
        })
      }
      function qu(t) {
        return x(t.providerData, function(t) {
          return t.providerId
        })
      }
      function Gu(t, e) {
        e && (Bu(t, e.providerId), t.providerData.push(e))
      }
      function Bu(t, e) {
        V(t.providerData, function(t) {
          return t.providerId == e
        })
      }
      function Xu(t, e, n) {
        ;('uid' != e || n) && t.hasOwnProperty(e) && ki(t, e, n)
      }
      function Wu(t, e) {
        t != e &&
          (Si(t, {
            uid: e.uid,
            displayName: e.displayName,
            photoURL: e.photoURL,
            email: e.email,
            emailVerified: e.emailVerified,
            phoneNumber: e.phoneNumber,
            isAnonymous: e.isAnonymous,
            providerData: []
          }),
          e.metadata
            ? ki(
                t,
                'metadata',
                (function(t) {
                  return new _u(t.a, t.b)
                })(e.metadata)
              )
            : ki(t, 'metadata', new _u()),
          L(e.providerData, function(e) {
            Gu(t, e)
          }),
          (t.h = e.h),
          ki(t, 'refreshToken', t.h.a))
      }
      function zu(t) {
        return t.F().then(function(e) {
          var n = t.isAnonymous
          return (function(t, e) {
            return Ba(t.b, Sa, {idToken: e}).then(b(t.uc, t))
          })(t, e).then(function() {
            return n || Xu(t, 'isAnonymous', !1), e
          })
        })
      }
      function Ju(t, e) {
        e[$o] &&
          t.qa != e[$o] &&
          (ku(t.h, e),
          t.dispatchEvent(new Ou('tokenChanged')),
          ju(t, e[$o]),
          Xu(t, 'refreshToken', t.h.a))
      }
      function Yu(t, e) {
        return zu(t).then(function() {
          if (j(qu(t), e))
            return Uu(t).then(function() {
              throw new ji('provider-already-linked')
            })
        })
      }
      function $u(t, e, n) {
        return Ni({
          user: t,
          credential: Ur(e),
          additionalUserInfo: (e = sr(e)),
          operationType: n
        })
      }
      function Zu(t, e) {
        return (
          Ju(t, e),
          t.reload().then(function() {
            return t
          })
        )
      }
      function Qu(t, e, i, r, o) {
        if (!ui())
          return At(new ji('operation-not-supported-in-this-environment'))
        if (t.j && !o) return At(t.j)
        var a = ar(i.providerId),
          s = vi(t.uid + ':::'),
          u = null
        ;(!fi() || Yn()) &&
          t.B &&
          i.isOAuthProvider &&
          (u = hs(t.B, t.G, t.s, e, i, null, s, n.SDK_VERSION || null))
        var c = Xn(u, a && a.Aa, a && a.za)
        return (
          (r = r()
            .then(function() {
              if ((ec(t), !o)) return t.F().then(function() {})
            })
            .then(function() {
              return lu(t.a, c, e, i, s, !!u)
            })
            .then(function() {
              return new mt(function(n, i) {
                t.ga(e, null, new ji('cancelled-popup-request'), t.g || null),
                  (t.f = n),
                  (t.v = i),
                  (t.g = s),
                  (t.c = t.a.Da(t, e, c, s))
              })
            })
            .then(function(t) {
              return c && Bn(c), t ? Ni(t) : null
            })
            .m(function(t) {
              throw (c && Bn(c), t)
            })),
          nc(t, r, o)
        )
      }
      function tc(t, e, n, i, r) {
        if (!ui())
          return At(new ji('operation-not-supported-in-this-environment'))
        if (t.j && !r) return At(t.j)
        var o = null,
          a = vi(t.uid + ':::')
        return (
          (i = i()
            .then(function() {
              if ((ec(t), !r)) return t.F().then(function() {})
            })
            .then(function() {
              return (t.$ = a), Uu(t)
            })
            .then(function(e) {
              return t.fa && (e = (e = t.fa).b.set(rc, t.C(), e.a)), e
            })
            .then(function() {
              return t.a.Ba(e, n, a)
            })
            .m(function(e) {
              if (((o = e), t.fa)) return oc(t.fa)
              throw o
            })
            .then(function() {
              if (o) throw o
            })),
          nc(t, i, r)
        )
      }
      function ec(t) {
        if (!t.a || !t.I) {
          if (t.a && !t.I) throw new ji('internal-error')
          throw new ji('auth-domain-config-required')
        }
      }
      function nc(t, e, n) {
        var i = (function(t, e, n) {
          return t.j && !n
            ? (e.cancel(), At(t.j))
            : e.m(function(e) {
                throw (!e ||
                  ('auth/user-disabled' != e.code &&
                    'auth/user-token-expired' != e.code) ||
                  (t.j || t.dispatchEvent(new Ou('userInvalidated')),
                  (t.j = e)),
                e)
              })
        })(t, e, n)
        return (
          t.D.push(i),
          i.ha(function() {
            U(t.D, i)
          }),
          i
        )
      }
      function ic(t) {
        if (!t.apiKey) return null
        var e = {
            apiKey: t.apiKey,
            authDomain: t.authDomain,
            appName: t.appName
          },
          n = {}
        if (
          !(
            t.stsTokenManager &&
            t.stsTokenManager.accessToken &&
            t.stsTokenManager.expirationTime
          )
        )
          return null
        ;(n[$o] = t.stsTokenManager.accessToken),
          (n.refreshToken = t.stsTokenManager.refreshToken || null),
          (n.expiresIn = (t.stsTokenManager.expirationTime - y()) / 1e3)
        var i = new Pu(e, n, t)
        return (
          t.providerData &&
            L(t.providerData, function(t) {
              t && Gu(i, Ni(t))
            }),
          t.redirectEventId && (i.$ = t.redirectEventId),
          i
        )
      }
      ;(mu.prototype.reset = function() {
        ;(this.b = null), this.a && (this.a.cancel(), (this.a = null))
      }),
        (mu.prototype.h = function(t, e) {
          if (t) {
            this.reset(), (this.g = !0)
            var n = t.b,
              i = t.c,
              r = t.a && 'auth/web-storage-unsupported' == t.a.code,
              o =
                t.a &&
                'auth/operation-not-supported-in-this-environment' == t.a.code
            'unknown' != n || r || o
              ? t.a
                ? (wu(this, !0, null, t.a), Et())
                : e.wa(n, i)
                  ? (function(t, e, n) {
                      n = n.wa(e.b, e.c)
                      var i = e.f,
                        r = e.g,
                        o = !!e.b.match(/Redirect$/)
                      n(i, r)
                        .then(function(e) {
                          wu(t, o, e, null)
                        })
                        .m(function(e) {
                          wu(t, o, null, e)
                        })
                    })(this, t, e)
                  : At(new ji('invalid-auth-event'))
              : (wu(this, !1, null, null), Et())
          } else At(new ji('invalid-auth-event'))
        }),
        (mu.prototype.da = function() {
          var t = this
          return new mt(function(e, n) {
            t.b
              ? t.b().then(e, n)
              : (t.f.push(e),
                t.c.push(n),
                (function(t) {
                  var e = new ji('timeout')
                  t.a && t.a.cancel(),
                    (t.a = xe(fu.get()).then(function() {
                      t.b || wu(t, !0, null, e)
                    }))
                })(t))
          })
        }),
        (yu.prototype.h = function(t, e) {
          if (t) {
            var n = t.b,
              i = t.c
            t.a
              ? (e.ga(t.b, null, t.a, t.c), Et())
              : e.wa(n, i)
                ? (function(t, e) {
                    var n = t.c,
                      i = t.b
                    e
                      .wa(i, n)(t.f, t.g)
                      .then(function(t) {
                        e.ga(i, t, null, n)
                      })
                      .m(function(t) {
                        e.ga(i, null, t, n)
                      })
                  })(t, e)
                : At(new ji('invalid-auth-event'))
          } else At(new ji('invalid-auth-event'))
        }),
        (Iu.prototype.confirm = function(t) {
          return (t = jr(this.verificationId, t)), this.a(t)
        }),
        (Eu.prototype.start = function() {
          ;(this.a = this.c),
            (function t(e, n) {
              e.stop()
              e.b = xe(
                (function(t, e) {
                  return e
                    ? ((t.a = t.c), t.g())
                    : ((e = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), e)
                })(e, n)
              )
                .then(function() {
                  return (
                    (t = r.document),
                    (e = null),
                    wi() || !t
                      ? Et()
                      : new mt(function(n) {
                          ;(e = function() {
                            wi() &&
                              (t.removeEventListener('visibilitychange', e, !1),
                              n())
                          }),
                            t.addEventListener('visibilitychange', e, !1)
                        }).m(function(n) {
                          throw (t.removeEventListener(
                            'visibilitychange',
                            e,
                            !1
                          ),
                          n)
                        })
                  )
                  var t, e
                })
                .then(function() {
                  return e.h()
                })
                .then(function() {
                  t(e, !0)
                })
                .m(function(n) {
                  e.j(n) && t(e, !1)
                })
            })(this, !0)
        }),
        (Eu.prototype.stop = function() {
          this.b && (this.b.cancel(), (this.b = null))
        }),
        (Au.prototype.C = function() {
          return {
            apiKey: this.f.b,
            refreshToken: this.a,
            accessToken: this.b,
            expirationTime: this.c
          }
        }),
        (Au.prototype.getToken = function(t) {
          return (
            (t = !!t),
            this.b && !this.a
              ? At(new ji('user-token-expired'))
              : t || !this.b || y() > this.c - 3e4
                ? this.a
                  ? Nu(this, {
                      grant_type: 'refresh_token',
                      refresh_token: this.a
                    })
                  : Et(null)
                : Et({
                    accessToken: this.b,
                    expirationTime: this.c,
                    refreshToken: this.a
                  })
          )
        }),
        (_u.prototype.C = function() {
          return {lastLoginAt: this.b, createdAt: this.a}
        }),
        I(Ou, se),
        I(Pu, Pe),
        (Pu.prototype.na = function(t) {
          ;(this.ia = t), na(this.b, t)
        }),
        (Pu.prototype.ca = function() {
          return this.ia
        }),
        (Pu.prototype.Ka = function() {
          return K(this.O)
        }),
        (Pu.prototype.Ga = function() {
          this.l.b && (this.l.stop(), this.l.start())
        }),
        ki(Pu.prototype, 'providerId', 'firebase'),
        ((t = Pu.prototype).reload = function() {
          var t = this
          return nc(
            this,
            Hu(this).then(function() {
              return zu(t)
                .then(function() {
                  return Uu(t)
                })
                .then(Ku)
            })
          )
        }),
        (t.ac = function(t) {
          return this.F(t).then(function(t) {
            return new function(t) {
              var e = nr(t)
              if (!(e && e.exp && e.auth_time && e.iat))
                throw new ji(
                  'internal-error',
                  'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.'
                )
              Si(this, {
                token: t,
                expirationTime: yi(1e3 * e.exp),
                authTime: yi(1e3 * e.auth_time),
                issuedAtTime: yi(1e3 * e.iat),
                signInProvider:
                  e.firebase && e.firebase.sign_in_provider
                    ? e.firebase.sign_in_provider
                    : null,
                claims: e
              })
            }(t)
          })
        }),
        (t.F = function(t) {
          var e = this
          return nc(
            this,
            Hu(this)
              .then(function() {
                return e.h.getToken(t)
              })
              .then(function(t) {
                if (!t) throw new ji('internal-error')
                return (
                  t.accessToken != e.qa &&
                    (ju(e, t.accessToken),
                    e.dispatchEvent(new Ou('tokenChanged'))),
                  Xu(e, 'refreshToken', t.refreshToken),
                  t.accessToken
                )
              })
          )
        }),
        (t.getToken = function(t) {
          return (
            Ei[
              'firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.'
            ] ||
              ((Ei[
                'firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.'
              ] = !0),
              'undefined' != typeof console &&
                'function' == typeof console.warn &&
                console.warn(
                  'firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.'
                )),
            this.F(t)
          )
        }),
        (t.uc = function(t) {
          if (!(t = t.users) || !t.length) throw new ji('internal-error')
          Fu(this, {
            uid: (t = t[0]).localId,
            displayName: t.displayName,
            photoURL: t.photoUrl,
            email: t.email,
            emailVerified: !!t.emailVerified,
            phoneNumber: t.phoneNumber,
            lastLoginAt: t.lastLoginAt,
            createdAt: t.createdAt
          })
          for (
            var e = (function(t) {
                return (t = t.providerUserInfo) && t.length
                  ? x(t, function(t) {
                      return new function(t, e, n, i, r, o) {
                        Si(this, {
                          uid: t,
                          displayName: i || null,
                          photoURL: r || null,
                          email: n || null,
                          phoneNumber: o || null,
                          providerId: e
                        })
                      }(
                        t.rawId,
                        t.providerId,
                        t.email,
                        t.displayName,
                        t.photoUrl,
                        t.phoneNumber
                      )
                    })
                  : []
              })(t),
              n = 0;
            n < e.length;
            n++
          )
            Gu(this, e[n])
          Xu(
            this,
            'isAnonymous',
            !(
              (this.email && t.passwordHash) ||
              (this.providerData && this.providerData.length)
            )
          )
        }),
        (t.bb = function(t) {
          var e = this,
            n = null
          return nc(
            this,
            t
              .f(this.b, this.uid)
              .then(function(t) {
                return (
                  Ju(e, t),
                  (n = $u(e, t, 'reauthenticate')),
                  (e.j = null),
                  e.reload()
                )
              })
              .then(function() {
                return n
              }),
            !0
          )
        }),
        (t.vc = function(t) {
          return this.bb(t).then(function() {})
        }),
        (t.$a = function(t) {
          var e = this,
            n = null
          return nc(
            this,
            Yu(this, t.providerId)
              .then(function() {
                return e.F()
              })
              .then(function(n) {
                return t.c(e.b, n)
              })
              .then(function(t) {
                return (n = $u(e, t, 'link')), Zu(e, t)
              })
              .then(function() {
                return n
              })
          )
        }),
        (t.mc = function(t) {
          return this.$a(t).then(function(t) {
            return t.user
          })
        }),
        (t.nc = function(t, e) {
          var n = this
          return nc(
            this,
            Yu(this, 'phone').then(function() {
              return Tu(Lu(n), t, e, b(n.$a, n))
            })
          )
        }),
        (t.wc = function(t, e) {
          var n = this
          return nc(
            this,
            Et().then(function() {
              return Tu(Lu(n), t, e, b(n.bb, n))
            }),
            !0
          )
        }),
        (t.mb = function(t) {
          var e = this
          return nc(
            this,
            this.F()
              .then(function(n) {
                return e.b.mb(n, t)
              })
              .then(function(t) {
                return Ju(e, t), e.reload()
              })
          )
        }),
        (t.Nc = function(t) {
          var e = this
          return nc(
            this,
            this.F()
              .then(function(n) {
                return t.c(e.b, n)
              })
              .then(function(t) {
                return Ju(e, t), e.reload()
              })
          )
        }),
        (t.nb = function(t) {
          var e = this
          return nc(
            this,
            this.F()
              .then(function(n) {
                return e.b.nb(n, t)
              })
              .then(function(t) {
                return Ju(e, t), e.reload()
              })
          )
        }),
        (t.ob = function(t) {
          if (void 0 === t.displayName && void 0 === t.photoURL) return Hu(this)
          var e = this
          return nc(
            this,
            this.F()
              .then(function(n) {
                return e.b.ob(n, {
                  displayName: t.displayName,
                  photoUrl: t.photoURL
                })
              })
              .then(function(t) {
                return (
                  Ju(e, t),
                  Xu(e, 'displayName', t.displayName || null),
                  Xu(e, 'photoURL', t.photoUrl || null),
                  L(e.providerData, function(t) {
                    'password' === t.providerId &&
                      (ki(t, 'displayName', e.displayName),
                      ki(t, 'photoURL', e.photoURL))
                  }),
                  Uu(e)
                )
              })
              .then(Ku)
          )
        }),
        (t.Mc = function(t) {
          var e = this
          return nc(
            this,
            zu(this).then(function(n) {
              return j(qu(e), t)
                ? (function(t, e, n) {
                    return Ba(t, Ea, {idToken: e, deleteProvider: n})
                  })(e.b, n, [t]).then(function(t) {
                    var n = {}
                    return (
                      L(t.providerUserInfo || [], function(t) {
                        n[t.providerId] = !0
                      }),
                      L(qu(e), function(t) {
                        n[t] || Bu(e, t)
                      }),
                      n[Mr.PROVIDER_ID] || ki(e, 'phoneNumber', null),
                      Uu(e)
                    )
                  })
                : Uu(e).then(function() {
                    throw new ji('no-such-provider')
                  })
            })
          )
        }),
        (t.delete = function() {
          var t = this
          return nc(
            this,
            this.F()
              .then(function(e) {
                return Ba(t.b, Ta, {idToken: e})
              })
              .then(function() {
                t.dispatchEvent(new Ou('userDeleted'))
              })
          ).then(function() {
            for (var e = 0; e < t.D.length; e++) t.D[e].cancel('app-deleted')
            Ru(t, null),
              Du(t, null),
              (t.D = []),
              (t.o = !0),
              Mu(t),
              ki(t, 'refreshToken', null),
              t.a && t.a.unsubscribe(t)
          })
        }),
        (t.qb = function(t, e) {
          return !!(
            ('linkViaPopup' == t && (this.g || null) == e && this.f) ||
            ('reauthViaPopup' == t && (this.g || null) == e && this.f) ||
            ('linkViaRedirect' == t && (this.$ || null) == e) ||
            ('reauthViaRedirect' == t && (this.$ || null) == e)
          )
        }),
        (t.ga = function(t, e, n, i) {
          ;('linkViaPopup' != t && 'reauthViaPopup' != t) ||
            i != (this.g || null) ||
            (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
            this.c && (this.c.cancel(), (this.c = null)),
            delete this.f,
            delete this.v)
        }),
        (t.wa = function(t, e) {
          return 'linkViaPopup' == t && e == (this.g || null)
            ? b(this.vb, this)
            : 'reauthViaPopup' == t && e == (this.g || null)
              ? b(this.wb, this)
              : 'linkViaRedirect' == t && (this.$ || null) == e
                ? b(this.vb, this)
                : 'reauthViaRedirect' == t && (this.$ || null) == e
                  ? b(this.wb, this)
                  : null
        }),
        (t.oc = function(t) {
          var e = this
          return Qu(
            this,
            'linkViaPopup',
            t,
            function() {
              return Yu(e, t.providerId).then(function() {
                return Uu(e)
              })
            },
            !1
          )
        }),
        (t.xc = function(t) {
          return Qu(
            this,
            'reauthViaPopup',
            t,
            function() {
              return Et()
            },
            !0
          )
        }),
        (t.pc = function(t) {
          var e = this
          return tc(
            this,
            'linkViaRedirect',
            t,
            function() {
              return Yu(e, t.providerId)
            },
            !1
          )
        }),
        (t.yc = function(t) {
          return tc(
            this,
            'reauthViaRedirect',
            t,
            function() {
              return Et()
            },
            !0
          )
        }),
        (t.vb = function(t, e) {
          var n = this
          this.c && (this.c.cancel(), (this.c = null))
          var i = null
          return nc(
            this,
            this.F()
              .then(function(i) {
                return va(n.b, {requestUri: t, sessionId: e, idToken: i})
              })
              .then(function(t) {
                return (i = $u(n, t, 'link')), Zu(n, t)
              })
              .then(function() {
                return i
              })
          )
        }),
        (t.wb = function(t, e) {
          var n = this
          this.c && (this.c.cancel(), (this.c = null))
          var i = null
          return nc(
            this,
            Et()
              .then(function() {
                return gr(ma(n.b, {requestUri: t, sessionId: e}), n.uid)
              })
              .then(function(t) {
                return (
                  (i = $u(n, t, 'reauthenticate')),
                  Ju(n, t),
                  (n.j = null),
                  n.reload()
                )
              })
              .then(function() {
                return i
              }),
            !0
          )
        }),
        (t.fb = function(t) {
          var e = this,
            n = null
          return nc(
            this,
            this.F()
              .then(function(e) {
                return (n = e), void 0 === t || ot(t) ? {} : Yi(new Ki(t))
              })
              .then(function(t) {
                return e.b.fb(n, t)
              })
              .then(function(t) {
                if (e.email != t) return e.reload()
              })
              .then(function() {})
          )
        }),
        (t.toJSON = function() {
          return this.C()
        }),
        (t.C = function() {
          var t = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            isAnonymous: this.isAnonymous,
            providerData: [],
            apiKey: this.G,
            appName: this.s,
            authDomain: this.B,
            stsTokenManager: this.h.C(),
            redirectEventId: this.$ || null
          }
          return (
            this.metadata && ht(t, this.metadata.C()),
            L(this.providerData, function(e) {
              t.providerData.push(
                (function(t) {
                  var e,
                    n = {}
                  for (e in t) t.hasOwnProperty(e) && (n[e] = t[e])
                  return n
                })(e)
              )
            }),
            t
          )
        })
      var rc = {name: 'redirectUser', w: 'session'}
      function oc(t) {
        return js(t.b, rc, t.a)
      }
      function ac(t) {
        ;(this.a = t),
          (this.b = Ls()),
          (this.c = null),
          (this.f = (function(t) {
            var e = cc('local'),
              n = cc('session'),
              i = cc('none')
            return (function(t, e, n) {
              var i = Ms(e, n),
                o = xs(t, e.w)
              return t.get(e, n).then(function(a) {
                var s = null
                try {
                  s = pi(r.localStorage.getItem(i))
                } catch (t) {}
                if (s && !a) return r.localStorage.removeItem(i), t.set(e, s, n)
                s &&
                  a &&
                  'localStorage' != o.type &&
                  r.localStorage.removeItem(i)
              })
            })(t.b, e, t.a)
              .then(function() {
                return t.b.get(n, t.a)
              })
              .then(function(r) {
                return r
                  ? n
                  : t.b.get(i, t.a).then(function(n) {
                      return n
                        ? i
                        : t.b.get(e, t.a).then(function(n) {
                            return n
                              ? e
                              : t.b.get(uc, t.a).then(function(t) {
                                  return t ? cc(t) : e
                                })
                          })
                    })
              })
              .then(function(e) {
                return (t.c = e), sc(t, e.w)
              })
              .m(function() {
                t.c || (t.c = e)
              })
          })(this)),
          this.b.addListener(cc('local'), this.a, b(this.g, this))
      }
      function sc(t, e) {
        var n,
          i = []
        for (n in Cs) Cs[n] !== e && i.push(js(t.b, cc(Cs[n]), t.a))
        return (
          i.push(js(t.b, uc, t.a)),
          (function(t) {
            return new mt(function(e, n) {
              var i = t.length,
                r = []
              if (i)
                for (
                  var o = function(t, n) {
                      i--, (r[t] = n), 0 == i && e(r)
                    },
                    a = function(t) {
                      n(t)
                    },
                    s = 0;
                  s < t.length;
                  s++
                )
                  kt(t[s], w(o, s), a)
              else e(r)
            })
          })(i)
        )
      }
      ac.prototype.g = function() {
        var t = this,
          e = cc('local')
        dc(this, function() {
          return Et()
            .then(function() {
              return t.c && 'local' != t.c.w ? t.b.get(e, t.a) : null
            })
            .then(function(n) {
              if (n)
                return sc(t, 'local').then(function() {
                  t.c = e
                })
            })
        })
      }
      var uc = {name: 'persistence', w: 'session'}
      function cc(t) {
        return {name: 'authUser', w: t}
      }
      function hc(t, e) {
        return dc(t, function() {
          return t.b.set(t.c, e.C(), t.a)
        })
      }
      function fc(t) {
        return dc(t, function() {
          return js(t.b, t.c, t.a)
        })
      }
      function lc(t, e) {
        return dc(t, function() {
          return t.b.get(t.c, t.a).then(function(t) {
            return t && e && (t.authDomain = e), ic(t || {})
          })
        })
      }
      function dc(t, e) {
        return (t.f = t.f.then(e, e)), t.f
      }
      function pc(t) {
        if (
          ((this.l = !1),
          ki(this, 'app', t),
          !Ic(this).options || !Ic(this).options.apiKey)
        )
          throw new ji('invalid-api-key')
        ;(t = n.SDK_VERSION ? ri(n.SDK_VERSION) : null),
          (this.b = new Jo(
            Ic(this).options && Ic(this).options.apiKey,
            Ya(za),
            t
          )),
          (this.N = []),
          (this.o = []),
          (this.I = []),
          (this.Ob = n.INTERNAL.createSubscribe(b(this.ic, this))),
          (this.O = void 0),
          (this.Pb = n.INTERNAL.createSubscribe(b(this.jc, this))),
          wc(this, null),
          (this.h = new ac(Ic(this).options.apiKey + ':' + Ic(this).name)),
          (this.G = new function(t) {
            ;(this.a = t), (this.b = Ls())
          }(Ic(this).options.apiKey + ':' + Ic(this).name)),
          (this.V = kc(
            this,
            (function(t) {
              var e = Ic(t).options.authDomain,
                n = (function(t) {
                  var e = (function(t, e) {
                    return t.b.get(rc, t.a).then(function(t) {
                      return t && e && (t.authDomain = e), ic(t || {})
                    })
                  })(t.G, Ic(t).options.authDomain).then(function(e) {
                    return (t.B = e) && (e.fa = t.G), oc(t.G)
                  })
                  return kc(t, e)
                })(t)
                  .then(function() {
                    return lc(t.h, e)
                  })
                  .then(function(e) {
                    return e
                      ? ((e.fa = t.G),
                        t.B && (t.B.$ || null) == (e.$ || null)
                          ? e
                          : e
                              .reload()
                              .then(function() {
                                return hc(t.h, e).then(function() {
                                  return e
                                })
                              })
                              .m(function(n) {
                                return 'auth/network-request-failed' == n.code
                                  ? e
                                  : fc(t.h)
                              }))
                      : null
                  })
                  .then(function(e) {
                    wc(t, e || null)
                  })
              return kc(t, n)
            })(this)
          )),
          (this.j = kc(
            this,
            (function(t) {
              return t.V.then(function() {
                return t.da()
              })
                .m(function() {})
                .then(function() {
                  if (!t.l) return t.ia()
                })
                .m(function() {})
                .then(function() {
                  if (!t.l) {
                    t.X = !0
                    var e = t.h
                    e.b.addListener(cc('local'), e.a, t.ia)
                  }
                })
            })(this)
          )),
          (this.X = !1),
          (this.ia = b(this.Ic, this)),
          (this.Ga = b(this.ka, this)),
          (this.qa = b(this.Yb, this)),
          (this.ra = b(this.gc, this)),
          (this.sa = b(this.hc, this)),
          (function(t) {
            var e = Ic(t).options.authDomain,
              n = Ic(t).options.apiKey
            e &&
              ui() &&
              (t.Nb = t.V.then(function() {
                if (!t.l) {
                  if (
                    ((t.a = vu(e, n, Ic(t).name)),
                    t.a.subscribe(t),
                    Tc(t) && Vu(Tc(t)),
                    t.B)
                  ) {
                    Vu(t.B)
                    var i = t.B
                    i.na(t.ca()),
                      Ru(i, t),
                      Cu((i = t.B), t.D),
                      Du(i, t),
                      (t.B = null)
                  }
                  return t.a
                }
              }))
          })(this),
          (this.INTERNAL = {}),
          (this.INTERNAL.delete = b(this.delete, this)),
          (this.INTERNAL.logFramework = b(this.qc, this)),
          (this.s = 0),
          Pe.call(this),
          (function(t) {
            Object.defineProperty(t, 'lc', {
              get: function() {
                return this.ca()
              },
              set: function(t) {
                this.na(t)
              },
              enumerable: !1
            }),
              (t.W = null)
          })(this),
          (this.D = [])
      }
      function vc(t) {
        se.call(this, 'languageCodeChanged'), (this.g = t)
      }
      function mc(t) {
        se.call(this, 'frameworkChanged'), (this.c = t)
      }
      function gc(t) {
        return t.Nb || At(new ji('auth-domain-config-required'))
      }
      function bc(t, e) {
        var n = {}
        return (
          (n.apiKey = Ic(t).options.apiKey),
          (n.authDomain = Ic(t).options.authDomain),
          (n.appName = Ic(t).name),
          t.V.then(function() {
            return (function(t, e, n, i) {
              var r = new Pu(t, e)
              return (
                n && (r.fa = n),
                i && Cu(r, i),
                r.reload().then(function() {
                  return r
                })
              )
            })(n, e, t.G, t.Ka())
          })
            .then(function(e) {
              return Tc(t) && e.uid == Tc(t).uid
                ? (Wu(Tc(t), e), t.ka(e))
                : (wc(t, e), Vu(e), t.ka(e))
            })
            .then(function() {
              Ac(t)
            })
        )
      }
      function wc(t, e) {
        Tc(t) &&
          ((function(t, e) {
            V(t.N, function(t) {
              return t == e
            })
          })(Tc(t), t.Ga),
          Ie(Tc(t), 'tokenChanged', t.qa),
          Ie(Tc(t), 'userDeleted', t.ra),
          Ie(Tc(t), 'userInvalidated', t.sa),
          Mu(Tc(t))),
          e &&
            (e.N.push(t.Ga),
            be(e, 'tokenChanged', t.qa),
            be(e, 'userDeleted', t.ra),
            be(e, 'userInvalidated', t.sa),
            0 < t.s && xu(e)),
          ki(t, 'currentUser', e),
          e && (e.na(t.ca()), Ru(e, t), Cu(e, t.D), Du(e, t))
      }
      function yc(t, e) {
        var n = null,
          i = null
        return kc(
          t,
          e
            .then(function(e) {
              return (n = Ur(e)), (i = sr(e)), bc(t, e)
            })
            .then(function() {
              return Ni({
                user: Tc(t),
                credential: n,
                additionalUserInfo: i,
                operationType: 'signIn'
              })
            })
        )
      }
      function Ic(t) {
        return t.app
      }
      function Tc(t) {
        return t.currentUser
      }
      function Ec(t) {
        return (Tc(t) && Tc(t)._lat) || null
      }
      function Ac(t) {
        if (t.X) {
          for (var e = 0; e < t.o.length; e++) t.o[e] && t.o[e](Ec(t))
          if (t.O !== t.getUid() && t.I.length)
            for (t.O = t.getUid(), e = 0; e < t.I.length; e++)
              t.I[e] && t.I[e](Ec(t))
        }
      }
      function kc(t, e) {
        return (
          t.N.push(e),
          e.ha(function() {
            U(t.N, e)
          }),
          e
        )
      }
      function Sc(t, e, n, i, o, a) {
        if (
          (ki(this, 'type', 'recaptcha'),
          (this.b = this.c = null),
          (this.o = !1),
          (this.l = e),
          (this.a = n || {theme: 'light', type: 'image'}),
          (this.g = []),
          this.a[Oc])
        )
          throw new ji(
            'argument-error',
            'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
          )
        if (((this.h = 'invisible' === this.a[Pc]), !r.document))
          throw new ji(
            'operation-not-supported-in-this-environment',
            'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.'
          )
        if (!Cn(e) || (!this.h && Cn(e).hasChildNodes()))
          throw new ji(
            'argument-error',
            'reCAPTCHA container is either not found or already contains inner elements!'
          )
        ;(this.u = new Jo(t, a || null, o || null)),
          (this.s =
            i ||
            function() {
              return null
            })
        var s = this
        this.j = []
        var u = this.a[Nc]
        this.a[Nc] = function(t) {
          if ((Rc(s, t), 'function' == typeof u)) u(t)
          else if ('string' == typeof u) {
            var e = ai(u, r)
            'function' == typeof e && e(t)
          }
        }
        var c = this.a[_c]
        this.a[_c] = function() {
          if ((Rc(s, null), 'function' == typeof c)) c()
          else if ('string' == typeof c) {
            var t = ai(c, r)
            'function' == typeof t && t()
          }
        }
      }
      ;(ac.prototype.ib = function(t) {
        var e = null,
          n = this
        return (
          (function(t) {
            var e = new ji('invalid-persistence-type'),
              n = new ji('unsupported-persistence-type')
            t: {
              for (i in Cs)
                if (Cs[i] == t) {
                  var i = !0
                  break t
                }
              i = !1
            }
            if (!i || 'string' != typeof t) throw e
            switch (Zn()) {
              case 'ReactNative':
                if ('session' === t) throw n
                break
              case 'Node':
                if ('none' !== t) throw n
                break
              default:
                if (!si() && 'none' !== t) throw n
            }
          })(t),
          dc(this, function() {
            return t != n.c.w
              ? n.b
                  .get(n.c, n.a)
                  .then(function(i) {
                    return (e = i), sc(n, t)
                  })
                  .then(function() {
                    if (((n.c = cc(t)), e)) return n.b.set(n.c, e, n.a)
                  })
              : Et()
          })
        )
      }),
        I(pc, Pe),
        I(vc, se),
        I(mc, se),
        ((t = pc.prototype).ib = function(t) {
          return kc(this, (t = this.h.ib(t)))
        }),
        (t.na = function(t) {
          this.W === t ||
            this.l ||
            ((this.W = t),
            na(this.b, this.W),
            this.dispatchEvent(new vc(this.ca())))
        }),
        (t.ca = function() {
          return this.W
        }),
        (t.Oc = function() {
          var t = r.navigator
          this.na(
            (t &&
              ((t.languages && t.languages[0]) ||
                t.language ||
                t.userLanguage)) ||
              null
          )
        }),
        (t.qc = function(t) {
          this.D.push(t),
            ia(this.b, n.SDK_VERSION ? ri(n.SDK_VERSION, this.D) : null),
            this.dispatchEvent(new mc(this.D))
        }),
        (t.Ka = function() {
          return K(this.D)
        }),
        (t.toJSON = function() {
          return {
            apiKey: Ic(this).options.apiKey,
            authDomain: Ic(this).options.authDomain,
            appName: Ic(this).name,
            currentUser: Tc(this) && Tc(this).C()
          }
        }),
        (t.qb = function(t, e) {
          switch (t) {
            case 'unknown':
            case 'signInViaRedirect':
              return !0
            case 'signInViaPopup':
              return this.g == e && !!this.f
            default:
              return !1
          }
        }),
        (t.ga = function(t, e, n, i) {
          'signInViaPopup' == t &&
            this.g == i &&
            (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
            this.c && (this.c.cancel(), (this.c = null)),
            delete this.f,
            delete this.v)
        }),
        (t.wa = function(t, e) {
          return 'signInViaRedirect' == t ||
            ('signInViaPopup' == t && this.g == e && this.f)
            ? b(this.Xb, this)
            : null
        }),
        (t.Xb = function(t, e) {
          var n = this
          ;(t = {requestUri: t, sessionId: e}),
            this.c && (this.c.cancel(), (this.c = null))
          var i = null,
            r = null,
            o = pa(n.b, t).then(function(t) {
              return (i = Ur(t)), (r = sr(t)), t
            })
          return kc(
            this,
            (t = n.V.then(function() {
              return o
            })
              .then(function(t) {
                return bc(n, t)
              })
              .then(function() {
                return Ni({
                  user: Tc(n),
                  credential: i,
                  additionalUserInfo: r,
                  operationType: 'signIn'
                })
              }))
          )
        }),
        (t.Gc = function(t) {
          if (!ui())
            return At(new ji('operation-not-supported-in-this-environment'))
          var e = this,
            i = ar(t.providerId),
            r = vi(),
            o = null
          ;(!fi() || Yn()) &&
            Ic(this).options.authDomain &&
            t.isOAuthProvider &&
            (o = hs(
              Ic(this).options.authDomain,
              Ic(this).options.apiKey,
              Ic(this).name,
              'signInViaPopup',
              t,
              null,
              r,
              n.SDK_VERSION || null
            ))
          var a = Xn(o, i && i.Aa, i && i.za)
          return kc(
            this,
            (i = gc(this)
              .then(function(e) {
                return lu(e, a, 'signInViaPopup', t, r, !!o)
              })
              .then(function() {
                return new mt(function(t, n) {
                  e.ga(
                    'signInViaPopup',
                    null,
                    new ji('cancelled-popup-request'),
                    e.g
                  ),
                    (e.f = t),
                    (e.v = n),
                    (e.g = r),
                    (e.c = e.a.Da(e, 'signInViaPopup', a, r))
                })
              })
              .then(function(t) {
                return a && Bn(a), t ? Ni(t) : null
              })
              .m(function(t) {
                throw (a && Bn(a), t)
              }))
          )
        }),
        (t.Hc = function(t) {
          if (!ui())
            return At(new ji('operation-not-supported-in-this-environment'))
          var e = this
          return kc(
            this,
            gc(this)
              .then(function() {
                return dc((t = e.h), function() {
                  return t.b.set(uc, t.c.w, t.a)
                })
                var t
              })
              .then(function() {
                return e.a.Ba('signInViaRedirect', t)
              })
          )
        }),
        (t.da = function() {
          if (!ui())
            return At(new ji('operation-not-supported-in-this-environment'))
          var t = this
          return kc(
            this,
            gc(this)
              .then(function() {
                return t.a.da()
              })
              .then(function(t) {
                return t ? Ni(t) : null
              })
          )
        }),
        (t.kb = function() {
          var t = this
          return kc(
            this,
            this.j.then(function() {
              return Tc(t)
                ? (wc(t, null),
                  fc(t.h).then(function() {
                    Ac(t)
                  }))
                : Et()
            })
          )
        }),
        (t.Ic = function() {
          var t = this
          return lc(this.h, Ic(this).options.authDomain).then(function(e) {
            if (!t.l) {
              var n
              if ((n = Tc(t) && e)) {
                n = Tc(t).uid
                var i = e.uid
                n =
                  void 0 !== n &&
                  null !== n &&
                  '' !== n &&
                  void 0 !== i &&
                  null !== i &&
                  '' !== i &&
                  n == i
              }
              if (n) return Wu(Tc(t), e), Tc(t).F()
              ;(Tc(t) || e) &&
                (wc(t, e),
                e && (Vu(e), (e.fa = t.G)),
                t.a && t.a.subscribe(t),
                Ac(t))
            }
          })
        }),
        (t.ka = function(t) {
          return hc(this.h, t)
        }),
        (t.Yb = function() {
          Ac(this), this.ka(Tc(this))
        }),
        (t.gc = function() {
          this.kb()
        }),
        (t.hc = function() {
          this.kb()
        }),
        (t.ic = function(t) {
          var e = this
          this.addAuthTokenListener(function() {
            t.next(Tc(e))
          })
        }),
        (t.jc = function(t) {
          var e = this
          !(function(t, e) {
            t.I.push(e),
              kc(
                t,
                t.j.then(function() {
                  !t.l &&
                    j(t.I, e) &&
                    t.O !== t.getUid() &&
                    ((t.O = t.getUid()), e(Ec(t)))
                })
              )
          })(this, function() {
            t.next(Tc(e))
          })
        }),
        (t.sc = function(t, e, i) {
          var r = this
          return (
            this.X &&
              n.Promise.resolve().then(function() {
                l(t) ? t(Tc(r)) : l(t.next) && t.next(Tc(r))
              }),
            this.Ob(t, e, i)
          )
        }),
        (t.rc = function(t, e, i) {
          var r = this
          return (
            this.X &&
              n.Promise.resolve().then(function() {
                ;(r.O = r.getUid()),
                  l(t) ? t(Tc(r)) : l(t.next) && t.next(Tc(r))
              }),
            this.Pb(t, e, i)
          )
        }),
        (t.$b = function(t) {
          var e = this
          return kc(
            this,
            this.j.then(function() {
              return Tc(e)
                ? Tc(e)
                    .F(t)
                    .then(function(t) {
                      return {accessToken: t}
                    })
                : null
            })
          )
        }),
        (t.Cc = function(t) {
          return this.Hb(t).then(function(t) {
            return t.user
          })
        }),
        (t.Hb = function(t) {
          var e = this
          return this.j
            .then(function() {
              return yc(e, Ba(e.b, Fa, {token: t}))
            })
            .then(function(t) {
              var n = t.user
              return Xu(n, 'isAnonymous', !1), e.ka(n), t
            })
        }),
        (t.Ib = function(t, e) {
          var n = this
          return this.j.then(function() {
            return yc(n, Ba(n.b, Ka, {email: t, password: e}))
          })
        }),
        (t.Dc = function(t, e) {
          return this.Ib(t, e).then(function(t) {
            return t.user
          })
        }),
        (t.Sb = function(t, e) {
          return this.sb(t, e).then(function(t) {
            return t.user
          })
        }),
        (t.sb = function(t, e) {
          var n = this
          return this.j.then(function() {
            return yc(n, Ba(n.b, ya, {email: t, password: e}))
          })
        }),
        (t.Bc = function(t) {
          return this.Oa(t).then(function(t) {
            return t.user
          })
        }),
        (t.Oa = function(t) {
          var e = this
          return this.j.then(function() {
            return yc(e, t.xa(e.b))
          })
        }),
        (t.jb = function() {
          return this.Jb().then(function(t) {
            return t.user
          })
        }),
        (t.Jb = function() {
          var t = this
          return this.j.then(function() {
            var e = Tc(t)
            return e && e.isAnonymous
              ? Ni({
                  user: e,
                  credential: null,
                  additionalUserInfo: Ni({providerId: null, isNewUser: !1}),
                  operationType: 'signIn'
                })
              : yc(t, t.b.jb()).then(function(e) {
                  var n = e.user
                  return Xu(n, 'isAnonymous', !0), t.ka(n), e
                })
          })
        }),
        (t.getUid = function() {
          return (Tc(this) && Tc(this).uid) || null
        }),
        (t.Qb = function(t) {
          this.addAuthTokenListener(t),
            this.s++,
            0 < this.s && Tc(this) && xu(Tc(this))
        }),
        (t.zc = function(t) {
          var e = this
          L(this.o, function(n) {
            n == t && e.s--
          }),
            0 > this.s && (this.s = 0),
            0 == this.s && Tc(this) && Mu(Tc(this)),
            this.removeAuthTokenListener(t)
        }),
        (t.addAuthTokenListener = function(t) {
          var e = this
          this.o.push(t),
            kc(
              this,
              this.j.then(function() {
                e.l || (j(e.o, t) && t(Ec(e)))
              })
            )
        }),
        (t.removeAuthTokenListener = function(t) {
          V(this.o, function(e) {
            return e == t
          })
        }),
        (t.delete = function() {
          this.l = !0
          for (var t = 0; t < this.N.length; t++)
            this.N[t].cancel('app-deleted')
          return (
            (this.N = []),
            this.h && (t = this.h).b.removeListener(cc('local'), t.a, this.ia),
            this.a && this.a.unsubscribe(this),
            n.Promise.resolve()
          )
        }),
        (t.Vb = function(t) {
          return kc(
            this,
            (function(t, e) {
              return Ba(t, Ia, {
                identifier: e,
                continueUri: ci() ? Hn() : 'http://localhost'
              }).then(function(t) {
                return t.allProviders || []
              })
            })(this.b, t)
          )
        }),
        (t.Wb = function(t) {
          return kc(
            this,
            (function(t, e) {
              return Ba(t, Ia, {
                identifier: e,
                continueUri: ci() ? Hn() : 'http://localhost'
              }).then(function(t) {
                return t.signinMethods || []
              })
            })(this.b, t)
          )
        }),
        (t.kc = function(t) {
          return !!Dr(t)
        }),
        (t.hb = function(t, e) {
          var n = this
          return kc(
            this,
            Et()
              .then(function() {
                var t = new Ki(e)
                if (!t.c)
                  throw new ji(
                    'argument-error',
                    qi + ' must be true when sending sign in link to email'
                  )
                return Yi(t)
              })
              .then(function(e) {
                return n.b.hb(t, e)
              })
              .then(function() {})
          )
        }),
        (t.Pc = function(t) {
          return this.Ia(t).then(function(t) {
            return t.data.email
          })
        }),
        (t.Wa = function(t, e) {
          return kc(this, this.b.Wa(t, e).then(function() {}))
        }),
        (t.Ia = function(t) {
          return kc(
            this,
            this.b.Ia(t).then(function(t) {
              return new function(t) {
                var e = {},
                  n = t[Pi],
                  i = t[Ri]
                if (!(t = t[Ci]) || (t != Oi && !n))
                  throw Error('Invalid provider user info!')
                ;(e[Li] = i || null),
                  (e[Di] = n || null),
                  ki(this, Mi, t),
                  ki(this, xi, _i(e))
              }(t)
            })
          )
        }),
        (t.Ua = function(t) {
          return kc(this, this.b.Ua(t).then(function() {}))
        }),
        (t.gb = function(t, e) {
          var n = this
          return kc(
            this,
            Et()
              .then(function() {
                return void 0 === e || ot(e) ? {} : Yi(new Ki(e))
              })
              .then(function(e) {
                return n.b.gb(t, e)
              })
              .then(function() {})
          )
        }),
        (t.Fc = function(t, e) {
          return kc(this, Tu(this, t, e, b(this.Oa, this)))
        }),
        (t.Ec = function(t, e) {
          var n = this
          return kc(
            this,
            Et().then(function() {
              var i = Cr(t, e || Hn())
              return n.Oa(i)
            })
          )
        })
      var Nc = 'callback',
        _c = 'expired-callback',
        Oc = 'sitekey',
        Pc = 'size'
      function Rc(t, e) {
        for (var n = 0; n < t.j.length; n++)
          try {
            t.j[n](e)
          } catch (t) {}
      }
      function Cc(t, e) {
        return (
          t.g.push(e),
          e.ha(function() {
            U(t.g, e)
          }),
          e
        )
      }
      function Dc(t) {
        if (t.o)
          throw new ji(
            'internal-error',
            'RecaptchaVerifier instance has been destroyed.'
          )
      }
      ;((t = Sc.prototype).ya = function() {
        var t = this
        return this.c
          ? this.c
          : (this.c = Cc(
              this,
              Et()
                .then(function() {
                  if (ci() && !$n()) return zn()
                  throw new ji(
                    'operation-not-supported-in-this-environment',
                    'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
                  )
                })
                .then(function() {
                  return (function(t, e) {
                    return new mt(function(n, i) {
                      var o = setTimeout(function() {
                        i(new ji('network-request-failed'))
                      }, xc.get())
                      if (!r.grecaptcha || (e !== t.c && !t.b)) {
                        r[t.a] = function() {
                          if (r.grecaptcha) {
                            t.c = e
                            var a = r.grecaptcha.render
                            ;(r.grecaptcha.render = function(e, n) {
                              return (e = a(e, n)), t.b++, e
                            }),
                              clearTimeout(o),
                              n()
                          } else clearTimeout(o), i(new ji('internal-error'))
                          delete r[t.a]
                        }
                        var a = wn(Lc, {onload: t.a, hl: e || ''})
                        Et(Ho(a)).m(function() {
                          clearTimeout(o),
                            i(
                              new ji(
                                'internal-error',
                                'Unable to load external reCAPTCHA dependencies!'
                              )
                            )
                        })
                      } else clearTimeout(o), n()
                    })
                  })(jc(), t.s())
                })
                .then(function() {
                  return Ba(t.u, Ra, {})
                })
                .then(function(e) {
                  t.a[Oc] = e.recaptchaSiteKey
                })
                .m(function(e) {
                  throw ((t.c = null), e)
                })
            ))
      }),
        (t.render = function() {
          Dc(this)
          var t = this
          return Cc(
            this,
            this.ya().then(function() {
              if (null === t.b) {
                var e = t.l
                if (!t.h) {
                  var n = Cn(e)
                  ;(e = xn('DIV')), n.appendChild(e)
                }
                t.b = grecaptcha.render(e, t.a)
              }
              return t.b
            })
          )
        }),
        (t.verify = function() {
          Dc(this)
          var t = this
          return Cc(
            this,
            this.render().then(function(e) {
              return new mt(function(n) {
                var i = grecaptcha.getResponse(e)
                if (i) n(i)
                else {
                  var r = function(e) {
                    e &&
                      ((function(t, e) {
                        V(t.j, function(t) {
                          return t == e
                        })
                      })(t, r),
                      n(e))
                  }
                  t.j.push(r), t.h && grecaptcha.execute(t.b)
                }
              })
            })
          )
        }),
        (t.reset = function() {
          Dc(this), null !== this.b && grecaptcha.reset(this.b)
        }),
        (t.clear = function() {
          Dc(this), (this.o = !0), jc().b--
          for (var t = 0; t < this.g.length; t++)
            this.g[t].cancel('RecaptchaVerifier instance has been destroyed.')
          if (!this.h) {
            t = Cn(this.l)
            for (var e; (e = t.firstChild); ) t.removeChild(e)
          }
        })
      var Lc = mn(
        'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'
      )
      var xc = new bi(3e4, 6e4)
      var Mc = null
      function jc() {
        return (
          Mc ||
            (Mc = new function() {
              ;(this.b = r.grecaptcha ? 1 / 0 : 0),
                (this.c = null),
                (this.a = '__rcb' + Math.floor(1e6 * Math.random()).toString())
            }()),
          Mc
        )
      }
      function Uc(t, e, i) {
        try {
          this.f = i || n.app()
        } catch (t) {
          throw new ji(
            'argument-error',
            'No firebase.app.App instance is currently initialized.'
          )
        }
        if (!this.f.options || !this.f.options.apiKey)
          throw new ji('invalid-api-key')
        i = this.f.options.apiKey
        var r = this,
          o = null
        try {
          o = this.f.auth().Ka()
        } catch (t) {}
        ;(o = n.SDK_VERSION ? ri(n.SDK_VERSION, o) : null),
          Sc.call(
            this,
            i,
            t,
            e,
            function() {
              try {
                var t = r.f.auth().ca()
              } catch (e) {
                t = null
              }
              return t
            },
            o,
            Ya(za)
          )
      }
      function Vc(t, e, n, i) {
        t: {
          n = Array.prototype.slice.call(n)
          for (var r = 0, o = !1, a = 0; a < e.length; a++)
            if (e[a].optional) o = !0
            else {
              if (o)
                throw new ji(
                  'internal-error',
                  'Argument validator encountered a required argument after an optional argument.'
                )
              r++
            }
          if (((o = e.length), n.length < r || o < n.length))
            i =
              'Expected ' +
              (r == o
                ? 1 == r ? '1 argument' : r + ' arguments'
                : r + '-' + o + ' arguments') +
              ' but got ' +
              n.length +
              '.'
          else {
            for (r = 0; r < n.length; r++)
              if (
                ((o = e[r].optional && void 0 === n[r]), !e[r].M(n[r]) && !o)
              ) {
                if (((e = e[r]), 0 > r || r >= Fc.length))
                  throw new ji(
                    'internal-error',
                    'Argument validator received an unsupported number of arguments.'
                  )
                ;(n = Fc[r]),
                  (i =
                    (i ? '' : n + ' argument ') +
                    (e.name ? '"' + e.name + '" ' : '') +
                    'must be ' +
                    e.K +
                    '.')
                break t
              }
            i = null
          }
        }
        if (i) throw new ji('argument-error', t + ' failed: ' + i)
      }
      I(Uc, Sc)
      var Fc = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
        ' '
      )
      function Kc(t, e) {
        return {name: t || '', K: 'a valid string', optional: !!e, M: o}
      }
      function Hc() {
        return {name: 'opt_forceRefresh', K: 'a boolean', optional: !0, M: a}
      }
      function qc(t, e) {
        return {name: t || '', K: 'a valid object', optional: !!e, M: d}
      }
      function Gc(t, e) {
        return {name: t || '', K: 'a function', optional: !!e, M: l}
      }
      function Bc(t, e) {
        return {name: t || '', K: 'null', optional: !!e, M: c}
      }
      function Xc(t) {
        return {
          name: t ? t + 'Credential' : 'credential',
          K: t ? 'a valid ' + t + ' credential' : 'a valid credential',
          optional: !1,
          M: function(e) {
            if (!e) return !1
            var n = !t || e.providerId === t
            return !(!e.xa || !n)
          }
        }
      }
      function Wc() {
        return {
          name: 'applicationVerifier',
          K: 'an implementation of firebase.auth.ApplicationVerifier',
          optional: !1,
          M: function(t) {
            return !!(t && o(t.type) && l(t.verify))
          }
        }
      }
      function zc(t, e, n, i) {
        return {
          name: n || '',
          K: t.K + ' or ' + e.K,
          optional: !!i,
          M: function(n) {
            return t.M(n) || e.M(n)
          }
        }
      }
      function Jc(t, e) {
        for (var n in e) {
          var i = e[n].name
          t[i] = $c(i, t[n], e[n].i)
        }
      }
      function Yc(t, e, n, i) {
        t[e] = $c(e, n, i)
      }
      function $c(t, e, n) {
        function i() {
          var t = Array.prototype.slice.call(arguments)
          return Vc(o, n, t), e.apply(this, t)
        }
        if (!n) return e
        var r,
          o = (function(t) {
            return (t = t.split('.'))[t.length - 1]
          })(t)
        for (r in e) i[r] = e[r]
        for (r in e.prototype) i.prototype[r] = e.prototype[r]
        return i
      }
      Jc(pc.prototype, {
        Ua: {name: 'applyActionCode', i: [Kc('code')]},
        Ia: {name: 'checkActionCode', i: [Kc('code')]},
        Wa: {name: 'confirmPasswordReset', i: [Kc('code'), Kc('newPassword')]},
        Sb: {
          name: 'createUserWithEmailAndPassword',
          i: [Kc('email'), Kc('password')]
        },
        sb: {
          name: 'createUserAndRetrieveDataWithEmailAndPassword',
          i: [Kc('email'), Kc('password')]
        },
        Vb: {name: 'fetchProvidersForEmail', i: [Kc('email')]},
        Wb: {name: 'fetchSignInMethodsForEmail', i: [Kc('email')]},
        da: {name: 'getRedirectResult', i: []},
        kc: {name: 'isSignInWithEmailLink', i: [Kc('emailLink')]},
        rc: {
          name: 'onAuthStateChanged',
          i: [
            zc(qc(), Gc(), 'nextOrObserver'),
            Gc('opt_error', !0),
            Gc('opt_completed', !0)
          ]
        },
        sc: {
          name: 'onIdTokenChanged',
          i: [
            zc(qc(), Gc(), 'nextOrObserver'),
            Gc('opt_error', !0),
            Gc('opt_completed', !0)
          ]
        },
        gb: {
          name: 'sendPasswordResetEmail',
          i: [
            Kc('email'),
            zc(
              qc('opt_actionCodeSettings', !0),
              Bc(null, !0),
              'opt_actionCodeSettings',
              !0
            )
          ]
        },
        hb: {
          name: 'sendSignInLinkToEmail',
          i: [Kc('email'), qc('actionCodeSettings')]
        },
        ib: {name: 'setPersistence', i: [Kc('persistence')]},
        Oa: {name: 'signInAndRetrieveDataWithCredential', i: [Xc()]},
        jb: {name: 'signInAnonymously', i: []},
        Jb: {name: 'signInAnonymouslyAndRetrieveData', i: []},
        Bc: {name: 'signInWithCredential', i: [Xc()]},
        Cc: {name: 'signInWithCustomToken', i: [Kc('token')]},
        Hb: {name: 'signInAndRetrieveDataWithCustomToken', i: [Kc('token')]},
        Dc: {
          name: 'signInWithEmailAndPassword',
          i: [Kc('email'), Kc('password')]
        },
        Ec: {
          name: 'signInWithEmailLink',
          i: [Kc('email'), Kc('emailLink', !0)]
        },
        Ib: {
          name: 'signInAndRetrieveDataWithEmailAndPassword',
          i: [Kc('email'), Kc('password')]
        },
        Fc: {name: 'signInWithPhoneNumber', i: [Kc('phoneNumber'), Wc()]},
        Gc: {
          name: 'signInWithPopup',
          i: [
            {
              name: 'authProvider',
              K: 'a valid Auth provider',
              optional: !1,
              M: function(t) {
                return !!(
                  t &&
                  t.providerId &&
                  t.hasOwnProperty &&
                  t.hasOwnProperty('isOAuthProvider')
                )
              }
            }
          ]
        },
        Hc: {
          name: 'signInWithRedirect',
          i: [
            {
              name: 'authProvider',
              K: 'a valid Auth provider',
              optional: !1,
              M: function(t) {
                return !!(
                  t &&
                  t.providerId &&
                  t.hasOwnProperty &&
                  t.hasOwnProperty('isOAuthProvider')
                )
              }
            }
          ]
        },
        kb: {name: 'signOut', i: []},
        toJSON: {name: 'toJSON', i: [Kc(null, !0)]},
        Oc: {name: 'useDeviceLanguage', i: []},
        Pc: {name: 'verifyPasswordResetCode', i: [Kc('code')]}
      }),
        (function(t, e) {
          for (var n in e) {
            var i = e[n].name
            if (i !== n) {
              var r = e[n].Rb
              Object.defineProperty(t, i, {
                get: function() {
                  return this[n]
                },
                set: function(t) {
                  Vc(i, [r], [t], !0), (this[n] = t)
                },
                enumerable: !0
              })
            }
          }
        })(pc.prototype, {
          lc: {name: 'languageCode', Rb: zc(Kc(), Bc(), 'languageCode')}
        }),
        (pc.Persistence = Cs),
        (pc.Persistence.LOCAL = 'local'),
        (pc.Persistence.SESSION = 'session'),
        (pc.Persistence.NONE = 'none'),
        Jc(Pu.prototype, {
          delete: {name: 'delete', i: []},
          ac: {name: 'getIdTokenResult', i: [Hc()]},
          F: {name: 'getIdToken', i: [Hc()]},
          getToken: {name: 'getToken', i: [Hc()]},
          $a: {name: 'linkAndRetrieveDataWithCredential', i: [Xc()]},
          mc: {name: 'linkWithCredential', i: [Xc()]},
          nc: {name: 'linkWithPhoneNumber', i: [Kc('phoneNumber'), Wc()]},
          oc: {
            name: 'linkWithPopup',
            i: [
              {
                name: 'authProvider',
                K: 'a valid Auth provider',
                optional: !1,
                M: function(t) {
                  return !!(
                    t &&
                    t.providerId &&
                    t.hasOwnProperty &&
                    t.hasOwnProperty('isOAuthProvider')
                  )
                }
              }
            ]
          },
          pc: {
            name: 'linkWithRedirect',
            i: [
              {
                name: 'authProvider',
                K: 'a valid Auth provider',
                optional: !1,
                M: function(t) {
                  return !!(
                    t &&
                    t.providerId &&
                    t.hasOwnProperty &&
                    t.hasOwnProperty('isOAuthProvider')
                  )
                }
              }
            ]
          },
          bb: {name: 'reauthenticateAndRetrieveDataWithCredential', i: [Xc()]},
          vc: {name: 'reauthenticateWithCredential', i: [Xc()]},
          wc: {
            name: 'reauthenticateWithPhoneNumber',
            i: [Kc('phoneNumber'), Wc()]
          },
          xc: {
            name: 'reauthenticateWithPopup',
            i: [
              {
                name: 'authProvider',
                K: 'a valid Auth provider',
                optional: !1,
                M: function(t) {
                  return !!(
                    t &&
                    t.providerId &&
                    t.hasOwnProperty &&
                    t.hasOwnProperty('isOAuthProvider')
                  )
                }
              }
            ]
          },
          yc: {
            name: 'reauthenticateWithRedirect',
            i: [
              {
                name: 'authProvider',
                K: 'a valid Auth provider',
                optional: !1,
                M: function(t) {
                  return !!(
                    t &&
                    t.providerId &&
                    t.hasOwnProperty &&
                    t.hasOwnProperty('isOAuthProvider')
                  )
                }
              }
            ]
          },
          reload: {name: 'reload', i: []},
          fb: {
            name: 'sendEmailVerification',
            i: [
              zc(
                qc('opt_actionCodeSettings', !0),
                Bc(null, !0),
                'opt_actionCodeSettings',
                !0
              )
            ]
          },
          toJSON: {name: 'toJSON', i: [Kc(null, !0)]},
          Mc: {name: 'unlink', i: [Kc('provider')]},
          mb: {name: 'updateEmail', i: [Kc('email')]},
          nb: {name: 'updatePassword', i: [Kc('password')]},
          Nc: {name: 'updatePhoneNumber', i: [Xc('phone')]},
          ob: {name: 'updateProfile', i: [qc('profile')]}
        }),
        Jc(mt.prototype, {
          ha: {name: 'finally'},
          m: {name: 'catch'},
          then: {name: 'then'}
        }),
        Jc(Iu.prototype, {
          confirm: {name: 'confirm', i: [Kc('verificationCode')]}
        }),
        Yc(
          Rr,
          'credential',
          function(t, e) {
            return new Pr(t, e)
          },
          [Kc('email'), Kc('password')]
        ),
        Jc(Tr.prototype, {
          ta: {name: 'addScope', i: [Kc('scope')]},
          Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
        }),
        Yc(Tr, 'credential', Er, [zc(Kc(), qc(), 'token')]),
        Yc(Rr, 'credentialWithLink', Cr, [Kc('email'), Kc('emailLink')]),
        Jc(Ar.prototype, {
          ta: {name: 'addScope', i: [Kc('scope')]},
          Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
        }),
        Yc(Ar, 'credential', kr, [zc(Kc(), qc(), 'token')]),
        Jc(Sr.prototype, {
          ta: {name: 'addScope', i: [Kc('scope')]},
          Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
        }),
        Yc(Sr, 'credential', Nr, [
          zc(Kc(), zc(qc(), Bc()), 'idToken'),
          zc(Kc(), Bc(), 'accessToken', !0)
        ]),
        Jc(_r.prototype, {
          Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
        }),
        Yc(_r, 'credential', Or, [zc(Kc(), qc(), 'token'), Kc('secret', !0)]),
        Jc(Ir.prototype, {
          ta: {name: 'addScope', i: [Kc('scope')]},
          credential: {
            name: 'credential',
            i: [
              zc(Kc(), Bc(), 'idToken', !0),
              zc(Kc(), Bc(), 'accessToken', !0)
            ]
          },
          Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
        }),
        Yc(Mr, 'credential', jr, [
          Kc('verificationId'),
          Kc('verificationCode')
        ]),
        Jc(Mr.prototype, {
          Sa: {name: 'verifyPhoneNumber', i: [Kc('phoneNumber'), Wc()]}
        }),
        Jc(ji.prototype, {toJSON: {name: 'toJSON', i: [Kc(null, !0)]}}),
        Jc(Br.prototype, {toJSON: {name: 'toJSON', i: [Kc(null, !0)]}}),
        Jc(Gr.prototype, {toJSON: {name: 'toJSON', i: [Kc(null, !0)]}}),
        Jc(Uc.prototype, {
          clear: {name: 'clear', i: []},
          render: {name: 'render', i: []},
          verify: {name: 'verify', i: []}
        }),
        (function() {
          if (void 0 === n || !n.INTERNAL || !n.INTERNAL.registerService)
            throw Error(
              'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
            )
          var t = {Auth: pc, Error: ji}
          Yc(t, 'EmailAuthProvider', Rr, []),
            Yc(t, 'FacebookAuthProvider', Tr, []),
            Yc(t, 'GithubAuthProvider', Ar, []),
            Yc(t, 'GoogleAuthProvider', Sr, []),
            Yc(t, 'TwitterAuthProvider', _r, []),
            Yc(t, 'OAuthProvider', Ir, [Kc('providerId')]),
            Yc(t, 'PhoneAuthProvider', Mr, [
              {
                name: 'auth',
                K: 'an instance of Firebase Auth',
                optional: !0,
                M: function(t) {
                  return !!(t && t instanceof pc)
                }
              }
            ]),
            Yc(t, 'RecaptchaVerifier', Uc, [
              zc(
                Kc(),
                {
                  name: '',
                  K: 'an HTML element',
                  optional: !1,
                  M: function(t) {
                    return !!(t && t instanceof Element)
                  }
                },
                'recaptchaContainer'
              ),
              qc('recaptchaParameters', !0),
              {
                name: 'app',
                K: 'an instance of Firebase App',
                optional: !0,
                M: function(t) {
                  return !!(t && t instanceof n.app.App)
                }
              }
            ]),
            n.INTERNAL.registerService(
              'auth',
              function(t, e) {
                return (
                  e({
                    INTERNAL: {
                      getUid: b((t = new pc(t)).getUid, t),
                      getToken: b(t.$b, t),
                      addAuthTokenListener: b(t.Qb, t),
                      removeAuthTokenListener: b(t.zc, t)
                    }
                  }),
                  t
                )
              },
              t,
              function(t, e) {
                if ('create' === t)
                  try {
                    e.auth()
                  } catch (t) {}
              }
            ),
            n.INTERNAL.extendNamespace({User: Pu})
        })()
    }.call(
      void 0 !== n
        ? n
        : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window ? window : {}
    ))
  } catch (t) {
    throw (console.error(t),
    new Error(
      'Cannot instantiate firebase-auth - be sure to load firebase-app.js first.'
    ))
  }
})((this.firebase = this.firebase || {}), firebase)
//# sourceMappingURL=firebase-auth.js.map
