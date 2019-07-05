!(function(exports, firebase) {
  'use strict'
  try {
    var LogLevel
    ;(firebase =
      firebase && firebase.hasOwnProperty('default')
        ? firebase.default
        : firebase),
      (function(e) {
        ;(e[(e.DEBUG = 0)] = 'DEBUG'),
          (e[(e.VERBOSE = 1)] = 'VERBOSE'),
          (e[(e.INFO = 2)] = 'INFO'),
          (e[(e.WARN = 3)] = 'WARN'),
          (e[(e.ERROR = 4)] = 'ERROR'),
          (e[(e.SILENT = 5)] = 'SILENT')
      })(LogLevel || (LogLevel = {}))
    var defaultLogLevel = LogLevel.INFO,
      defaultLogHandler = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r]
        if (!(t < e.logLevel)) {
          var o = new Date().toISOString()
          switch (t) {
            case LogLevel.DEBUG:
            case LogLevel.VERBOSE:
              console.log.apply(
                console,
                ['[' + o + ']  ' + e.name + ':'].concat(n)
              )
              break
            case LogLevel.INFO:
              console.info.apply(
                console,
                ['[' + o + ']  ' + e.name + ':'].concat(n)
              )
              break
            case LogLevel.WARN:
              console.warn.apply(
                console,
                ['[' + o + ']  ' + e.name + ':'].concat(n)
              )
              break
            case LogLevel.ERROR:
              console.error.apply(
                console,
                ['[' + o + ']  ' + e.name + ':'].concat(n)
              )
              break
            default:
              throw new Error(
                'Attempted to log a message with an invalid logType (value: ' +
                  t +
                  ')'
              )
          }
        }
      },
      Logger = (function() {
        function e(e) {
          ;(this.name = e),
            (this._logLevel = defaultLogLevel),
            (this._logHandler = defaultLogHandler)
        }
        return (
          Object.defineProperty(e.prototype, 'logLevel', {
            get: function() {
              return this._logLevel
            },
            set: function(e) {
              if (!(e in LogLevel))
                throw new TypeError('Invalid value assigned to `logLevel`')
              this._logLevel = e
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'logHandler', {
            get: function() {
              return this._logHandler
            },
            set: function(e) {
              if ('function' != typeof e)
                throw new TypeError(
                  'Value assigned to `logHandler` must be a function'
                )
              this._logHandler = e
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.debug = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            this._logHandler.apply(this, [this, LogLevel.DEBUG].concat(e))
          }),
          (e.prototype.log = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            this._logHandler.apply(this, [this, LogLevel.VERBOSE].concat(e))
          }),
          (e.prototype.info = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            this._logHandler.apply(this, [this, LogLevel.INFO].concat(e))
          }),
          (e.prototype.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            this._logHandler.apply(this, [this, LogLevel.WARN].concat(e))
          }),
          (e.prototype.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            this._logHandler.apply(this, [this, LogLevel.ERROR].concat(e))
          }),
          e
        )
      })(),
      extendStatics =
        Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }
    function __extends(e, t) {
      function n() {
        this.constructor = e
      }
      extendStatics(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()))
    }
    function __awaiter(e, t, n, r) {
      return new (n || (n = Promise))(function(o, i) {
        function a(e) {
          try {
            u(r.next(e))
          } catch (e) {
            i(e)
          }
        }
        function s(e) {
          try {
            u(r.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function u(e) {
          e.done
            ? o(e.value)
            : new n(function(t) {
                t(e.value)
              }).then(a, s)
        }
        u((r = r.apply(e, t || [])).next())
      })
    }
    function __generator(e, t) {
      var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1]
            return o[1]
          },
          trys: [],
          ops: []
        }
      return (
        (i = {next: s(0), throw: s(1), return: s(2)}),
        'function' == typeof Symbol &&
          (i[Symbol.iterator] = function() {
            return this
          }),
        i
      )
      function s(i) {
        return function(s) {
          return (function(i) {
            if (n) throw new TypeError('Generator is already executing.')
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o = r[2 & i[0] ? 'return' : i[0] ? 'throw' : 'next']) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o
                switch (((r = 0), o && (i = [0, o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i
                    break
                  case 4:
                    return a.label++, {value: i[1], done: !1}
                  case 5:
                    a.label++, (r = i[1]), (i = [0])
                    continue
                  case 7:
                    ;(i = a.ops.pop()), a.trys.pop()
                    continue
                  default:
                    if (
                      !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                      (6 === i[0] || 2 === i[0])
                    ) {
                      a = 0
                      continue
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      a.label = i[1]
                      break
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      ;(a.label = o[1]), (o = i)
                      break
                    }
                    if (o && a.label < o[2]) {
                      ;(a.label = o[2]), a.ops.push(i)
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop()
                    continue
                }
                i = t.call(e, a)
              } catch (e) {
                ;(i = [6, e]), (r = 0)
              } finally {
                n = o = 0
              }
            if (5 & i[0]) throw i[1]
            return {value: i[0] ? i[1] : void 0, done: !0}
          })([i, s])
        }
      }
    }
    var commonjsGlobal =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self ? self : {}
    function createCommonjsModule(e, t) {
      return e((t = {exports: {}}), t.exports), t.exports
    }
    var dist = createCommonjsModule(function(module) {
        ;(function() {
          var g,
            goog = goog || {},
            k = this
          function l(e) {
            return 'string' == typeof e
          }
          function n(e, t) {
            ;(e = e.split('.')), (t = t || k)
            for (var n = 0; n < e.length; n++)
              if (null == (t = t[e[n]])) return null
            return t
          }
          function aa() {}
          function ba(e) {
            var t = typeof e
            if ('object' == t) {
              if (!e) return 'null'
              if (e instanceof Array) return 'array'
              if (e instanceof Object) return t
              var n = Object.prototype.toString.call(e)
              if ('[object Window]' == n) return 'object'
              if (
                '[object Array]' == n ||
                ('number' == typeof e.length &&
                  void 0 !== e.splice &&
                  void 0 !== e.propertyIsEnumerable &&
                  !e.propertyIsEnumerable('splice'))
              )
                return 'array'
              if (
                '[object Function]' == n ||
                (void 0 !== e.call &&
                  void 0 !== e.propertyIsEnumerable &&
                  !e.propertyIsEnumerable('call'))
              )
                return 'function'
            } else if ('function' == t && void 0 === e.call) return 'object'
            return t
          }
          function p(e) {
            return 'array' == ba(e)
          }
          function ca(e) {
            var t = ba(e)
            return (
              'array' == t || ('object' == t && 'number' == typeof e.length)
            )
          }
          function da(e) {
            return 'function' == ba(e)
          }
          function ea(e) {
            var t = typeof e
            return ('object' == t && null != e) || 'function' == t
          }
          var q = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
            fa = 0
          function ha(e, t, n) {
            return e.call.apply(e.bind, arguments)
          }
          function ia(e, t, n) {
            if (!e) throw Error()
            if (2 < arguments.length) {
              var r = Array.prototype.slice.call(arguments, 2)
              return function() {
                var n = Array.prototype.slice.call(arguments)
                return Array.prototype.unshift.apply(n, r), e.apply(t, n)
              }
            }
            return function() {
              return e.apply(t, arguments)
            }
          }
          function r(e, t, n) {
            return (r =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf('native code')
                ? ha
                : ia).apply(null, arguments)
          }
          function ja(e, t) {
            var n = Array.prototype.slice.call(arguments, 1)
            return function() {
              var t = n.slice()
              return t.push.apply(t, arguments), e.apply(this, t)
            }
          }
          var t =
            Date.now ||
            function() {
              return +new Date()
            }
          function u(e, t) {
            function n() {}
            ;(n.prototype = t.prototype),
              (e.H = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e),
              (e.Ib = function(e, n, r) {
                for (
                  var o = Array(arguments.length - 2), i = 2;
                  i < arguments.length;
                  i++
                )
                  o[i - 2] = arguments[i]
                return t.prototype[n].apply(e, o)
              })
          }
          function ka(e) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, ka)
            else {
              var t = Error().stack
              t && (this.stack = t)
            }
            e && (this.message = String(e))
          }
          function la(e, t) {
            for (
              var n = '', r = (e = e.split('%s')).length - 1, o = 0;
              o < r;
              o++
            )
              n += e[o] + (o < t.length ? t[o] : '%s')
            ka.call(this, n + e[r])
          }
          function ma(e, t) {
            throw new la(
              'Failure' + (e ? ': ' + e : ''),
              Array.prototype.slice.call(arguments, 1)
            )
          }
          function w() {
            0 != na && (pa[this[q] || (this[q] = ++fa)] = this),
              (this.i = this.i),
              (this.m = this.m)
          }
          u(ka, Error),
            (ka.prototype.name = 'CustomError'),
            u(la, ka),
            (la.prototype.name = 'AssertionError')
          var na = 0,
            pa = {}
          ;(w.prototype.i = !1),
            (w.prototype.$ = function() {
              if (!this.i && ((this.i = !0), this.w(), 0 != na)) {
                var e = this[q] || (this[q] = ++fa)
                if (0 != na && this.m && 0 < this.m.length)
                  throw Error(
                    this +
                      " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
                  )
                delete pa[e]
              }
            }),
            (w.prototype.w = function() {
              if (this.m) for (; this.m.length; ) this.m.shift()()
            })
          var qa = Array.prototype.indexOf
              ? function(e, t) {
                  return Array.prototype.indexOf.call(e, t, void 0)
                }
              : function(e, t) {
                  if (l(e)) return l(t) && 1 == t.length ? e.indexOf(t, 0) : -1
                  for (var n = 0; n < e.length; n++)
                    if (n in e && e[n] === t) return n
                  return -1
                },
            ra = Array.prototype.forEach
              ? function(e, t, n) {
                  Array.prototype.forEach.call(e, t, n)
                }
              : function(e, t, n) {
                  for (
                    var r = e.length, o = l(e) ? e.split('') : e, i = 0;
                    i < r;
                    i++
                  )
                    i in o && t.call(n, o[i], i, e)
                }
          function sa(e) {
            e: {
              for (
                var t = ta, n = e.length, r = l(e) ? e.split('') : e, o = 0;
                o < n;
                o++
              )
                if (o in r && t.call(void 0, r[o], o, e)) {
                  t = o
                  break e
                }
              t = -1
            }
            return 0 > t ? null : l(e) ? e.charAt(t) : e[t]
          }
          function ua(e) {
            if (!p(e)) for (var t = e.length - 1; 0 <= t; t--) delete e[t]
            e.length = 0
          }
          function va(e) {
            return Array.prototype.concat.apply([], arguments)
          }
          function wa(e) {
            var t = e.length
            if (0 < t) {
              for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r]
              return n
            }
            return []
          }
          function xa(e) {
            return /^[\s\xa0]*$/.test(e)
          }
          var ya = String.prototype.trim
              ? function(e) {
                  return e.trim()
                }
              : function(e) {
                  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
                },
            x
          function za(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
          }
          e: {
            var Aa = k.navigator
            if (Aa) {
              var Ba = Aa.userAgent
              if (Ba) {
                x = Ba
                break e
              }
            }
            x = ''
          }
          function y(e) {
            return -1 != x.indexOf(e)
          }
          function Ca(e, t, n) {
            for (var r in e) t.call(n, e[r], r, e)
          }
          function Da(e) {
            var t,
              n = [],
              r = 0
            for (t in e) n[r++] = e[t]
            return n
          }
          function Ea(e) {
            var t,
              n = [],
              r = 0
            for (t in e) n[r++] = t
            return n
          }
          function Fa(e) {
            var t,
              n = {}
            for (t in e) n[t] = e[t]
            return n
          }
          var Ga = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
            ' '
          )
          function Ha(e, t) {
            for (var n, r, o = 1; o < arguments.length; o++) {
              for (n in (r = arguments[o])) e[n] = r[n]
              for (var i = 0; i < Ga.length; i++)
                (n = Ga[i]),
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
          }
          function Ia(e) {
            return Ia[' '](e), e
          }
          function Ja(e, t) {
            var n = Ka
            return Object.prototype.hasOwnProperty.call(n, e)
              ? n[e]
              : (n[e] = t(e))
          }
          Ia[' '] = aa
          var La = y('Opera'),
            z = y('Trident') || y('MSIE'),
            Ma = y('Edge'),
            Na = Ma || z,
            Oa =
              y('Gecko') &&
              !(-1 != x.toLowerCase().indexOf('webkit') && !y('Edge')) &&
              !(y('Trident') || y('MSIE')) &&
              !y('Edge'),
            Pa = -1 != x.toLowerCase().indexOf('webkit') && !y('Edge'),
            Ra,
            a
          function Qa() {
            var e = k.document
            return e ? e.documentMode : void 0
          }
          e: {
            var Sa = '',
              Ta = ((a = x),
              Oa
                ? /rv:([^\);]+)(\)|;)/.exec(a)
                : Ma
                  ? /Edge\/([\d\.]+)/.exec(a)
                  : z
                    ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
                    : Pa
                      ? /WebKit\/(\S+)/.exec(a)
                      : La ? /(?:Version)[ \/]?(\S+)/.exec(a) : void 0)
            if ((Ta && (Sa = Ta ? Ta[1] : ''), z)) {
              var Ua = Qa()
              if (null != Ua && Ua > parseFloat(Sa)) {
                Ra = String(Ua)
                break e
              }
            }
            Ra = Sa
          }
          var Ka = {},
            Wa
          function Va(e) {
            return Ja(e, function() {
              for (
                var t = 0,
                  n = ya(String(Ra)).split('.'),
                  r = ya(String(e)).split('.'),
                  o = Math.max(n.length, r.length),
                  i = 0;
                0 == t && i < o;
                i++
              ) {
                var a = n[i] || '',
                  s = r[i] || ''
                do {
                  if (
                    ((a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                    (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
                    0 == a[0].length && 0 == s[0].length)
                  )
                    break
                  ;(t =
                    za(
                      0 == a[1].length ? 0 : parseInt(a[1], 10),
                      0 == s[1].length ? 0 : parseInt(s[1], 10)
                    ) ||
                    za(0 == a[2].length, 0 == s[2].length) ||
                    za(a[2], s[2])),
                    (a = a[3]),
                    (s = s[3])
                } while (0 == t)
              }
              return 0 <= t
            })
          }
          var Xa = k.document
          Wa =
            Xa && z
              ? Qa() || ('CSS1Compat' == Xa.compatMode ? parseInt(Ra, 10) : 5)
              : void 0
          var Ya =
              Object.freeze ||
              function(e) {
                return e
              },
            Za = !z || 9 <= Number(Wa),
            $a = z && !Va('9'),
            ab = (function() {
              if (!k.addEventListener || !Object.defineProperty) return !1
              var e = !1,
                t = Object.defineProperty({}, 'passive', {
                  get: function() {
                    e = !0
                  }
                })
              return (
                k.addEventListener('test', aa, t),
                k.removeEventListener('test', aa, t),
                e
              )
            })()
          function A(e, t) {
            ;(this.type = e), (this.a = this.target = t), (this.Ra = !0)
          }
          function bb(e, t) {
            if (
              (A.call(this, e ? e.type : ''),
              (this.relatedTarget = this.a = this.target = null),
              (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
              (this.key = ''),
              (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
              (this.pointerId = 0),
              (this.pointerType = ''),
              (this.c = null),
              e)
            ) {
              var n = (this.type = e.type),
                r = e.changedTouches ? e.changedTouches[0] : null
              if (
                ((this.target = e.target || e.srcElement),
                (this.a = t),
                (t = e.relatedTarget))
              ) {
                if (Oa) {
                  e: {
                    try {
                      Ia(t.nodeName)
                      var o = !0
                      break e
                    } catch (e) {}
                    o = !1
                  }
                  o || (t = null)
                }
              } else
                'mouseover' == n
                  ? (t = e.fromElement)
                  : 'mouseout' == n && (t = e.toElement)
              ;(this.relatedTarget = t),
                null === r
                  ? ((this.clientX =
                      void 0 !== e.clientX ? e.clientX : e.pageX),
                    (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
                    (this.screenX = e.screenX || 0),
                    (this.screenY = e.screenY || 0))
                  : ((this.clientX =
                      void 0 !== r.clientX ? r.clientX : r.pageX),
                    (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                    (this.screenX = r.screenX || 0),
                    (this.screenY = r.screenY || 0)),
                (this.button = e.button),
                (this.key = e.key || ''),
                (this.ctrlKey = e.ctrlKey),
                (this.altKey = e.altKey),
                (this.shiftKey = e.shiftKey),
                (this.metaKey = e.metaKey),
                (this.pointerId = e.pointerId || 0),
                (this.pointerType = l(e.pointerType)
                  ? e.pointerType
                  : cb[e.pointerType] || ''),
                (this.c = e),
                e.defaultPrevented && this.b()
            }
          }
          ;(A.prototype.b = function() {
            this.Ra = !1
          }),
            u(bb, A)
          var cb = Ya({2: 'touch', 3: 'pen', 4: 'mouse'})
          bb.prototype.b = function() {
            bb.H.b.call(this)
            var e = this.c
            if (e.preventDefault) e.preventDefault()
            else if (((e.returnValue = !1), $a))
              try {
                ;(e.ctrlKey || (112 <= e.keyCode && 123 >= e.keyCode)) &&
                  (e.keyCode = -1)
              } catch (e) {}
          }
          var db = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
            eb = 0
          function fb(e, t, n, r, o) {
            ;(this.listener = e),
              (this.proxy = null),
              (this.src = t),
              (this.type = n),
              (this.capture = !!r),
              (this.ga = o),
              (this.key = ++eb),
              (this.Z = this.ba = !1)
          }
          function gb(e) {
            ;(e.Z = !0),
              (e.listener = null),
              (e.proxy = null),
              (e.src = null),
              (e.ga = null)
          }
          function hb(e) {
            ;(this.src = e), (this.a = {}), (this.b = 0)
          }
          function jb(e, t) {
            var n = t.type
            if (n in e.a) {
              var r,
                o = e.a[n],
                i = qa(o, t)
              ;(r = 0 <= i) && Array.prototype.splice.call(o, i, 1),
                r && (gb(t), 0 == e.a[n].length && (delete e.a[n], e.b--))
            }
          }
          function ib(e, t, n, r) {
            for (var o = 0; o < e.length; ++o) {
              var i = e[o]
              if (!i.Z && i.listener == t && i.capture == !!n && i.ga == r)
                return o
            }
            return -1
          }
          hb.prototype.add = function(e, t, n, r, o) {
            var i = e.toString()
            ;(e = this.a[i]) || ((e = this.a[i] = []), this.b++)
            var a = ib(e, t, r, o)
            return (
              -1 < a
                ? ((t = e[a]), n || (t.ba = !1))
                : (((t = new fb(t, this.src, i, !!r, o)).ba = n), e.push(t)),
              t
            )
          }
          var kb = 'closure_lm_' + ((1e6 * Math.random()) | 0),
            lb = {}
          function nb(e, t, n, r, o) {
            if (r && r.once) return ob(e, t, n, r, o)
            if (p(t)) {
              for (var i = 0; i < t.length; i++) nb(e, t[i], n, r, o)
              return null
            }
            return (
              (n = pb(n)),
              e && e[db]
                ? e.Ia(t, n, ea(r) ? !!r.capture : !!r, o)
                : qb(e, t, n, !1, r, o)
            )
          }
          function qb(e, t, n, r, o, i) {
            if (!t) throw Error('Invalid event type')
            var a = ea(o) ? !!o.capture : !!o,
              s = rb(e)
            if (
              (s || (e[kb] = s = new hb(e)), (n = s.add(t, n, r, a, i)).proxy)
            )
              return n
            if (
              ((r = sb()),
              (n.proxy = r),
              (r.src = e),
              (r.listener = n),
              e.addEventListener)
            )
              ab || (o = a),
                void 0 === o && (o = !1),
                e.addEventListener(t.toString(), r, o)
            else if (e.attachEvent) e.attachEvent(tb(t.toString()), r)
            else {
              if (!e.addListener || !e.removeListener)
                throw Error('addEventListener and attachEvent are unavailable.')
              e.addListener(r)
            }
            return n
          }
          function sb() {
            var e = ub,
              t = Za
                ? function(n) {
                    return e.call(t.src, t.listener, n)
                  }
                : function(n) {
                    if (!(n = e.call(t.src, t.listener, n))) return n
                  }
            return t
          }
          function ob(e, t, n, r, o) {
            if (p(t)) {
              for (var i = 0; i < t.length; i++) ob(e, t[i], n, r, o)
              return null
            }
            return (
              (n = pb(n)),
              e && e[db]
                ? e.Ja(t, n, ea(r) ? !!r.capture : !!r, o)
                : qb(e, t, n, !0, r, o)
            )
          }
          function vb(e, t, n, r, o) {
            if (p(t)) for (var i = 0; i < t.length; i++) vb(e, t[i], n, r, o)
            else
              (r = ea(r) ? !!r.capture : !!r),
                (n = pb(n)),
                e && e[db]
                  ? ((e = e.f),
                    (t = String(t).toString()) in e.a &&
                      (-1 < (n = ib((i = e.a[t]), n, r, o)) &&
                        (gb(i[n]),
                        Array.prototype.splice.call(i, n, 1),
                        0 == i.length && (delete e.a[t], e.b--))))
                  : e &&
                    (e = rb(e)) &&
                    ((t = e.a[t.toString()]),
                    (e = -1),
                    t && (e = ib(t, n, r, o)),
                    (n = -1 < e ? t[e] : null) && wb(n))
          }
          function wb(e) {
            if ('number' != typeof e && e && !e.Z) {
              var t = e.src
              if (t && t[db]) jb(t.f, e)
              else {
                var n = e.type,
                  r = e.proxy
                t.removeEventListener
                  ? t.removeEventListener(n, r, e.capture)
                  : t.detachEvent
                    ? t.detachEvent(tb(n), r)
                    : t.addListener && t.removeListener && t.removeListener(r),
                  (n = rb(t))
                    ? (jb(n, e), 0 == n.b && ((n.src = null), (t[kb] = null)))
                    : gb(e)
              }
            }
          }
          function tb(e) {
            return e in lb ? lb[e] : (lb[e] = 'on' + e)
          }
          function xb(e, t, n, r) {
            var o = !0
            if ((e = rb(e)) && (t = e.a[t.toString()]))
              for (t = t.concat(), e = 0; e < t.length; e++) {
                var i = t[e]
                i &&
                  i.capture == n &&
                  !i.Z &&
                  ((i = yb(i, r)), (o = o && !1 !== i))
              }
            return o
          }
          function yb(e, t) {
            var n = e.listener,
              r = e.ga || e.src
            return e.ba && wb(e), n.call(r, t)
          }
          function ub(e, t) {
            if (e.Z) return !0
            if (!Za) {
              var r = t || n('window.event')
              t = new bb(r, this)
              var o = !0
              if (!(0 > r.keyCode || void 0 != r.returnValue)) {
                e: {
                  var i = !1
                  if (0 == r.keyCode)
                    try {
                      r.keyCode = -1
                      break e
                    } catch (e) {
                      i = !0
                    }
                  ;(i || void 0 == r.returnValue) && (r.returnValue = !0)
                }
                for (r = [], i = t.a; i; i = i.parentNode) r.push(i)
                for (e = e.type, i = r.length - 1; 0 <= i; i--) {
                  t.a = r[i]
                  var a = xb(r[i], e, !0, t)
                  o = o && a
                }
                for (i = 0; i < r.length; i++)
                  (t.a = r[i]), (a = xb(r[i], e, !1, t)), (o = o && a)
              }
              return o
            }
            return yb(e, new bb(t, this))
          }
          function rb(e) {
            return (e = e[kb]) instanceof hb ? e : null
          }
          var zb = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
          function pb(e) {
            return da(e)
              ? e
              : (e[zb] ||
                  (e[zb] = function(t) {
                    return e.handleEvent(t)
                  }),
                e[zb])
          }
          function B() {
            w.call(this),
              (this.f = new hb(this)),
              (this.N = this),
              (this.J = null)
          }
          function Ab(e, t, n, r) {
            if (!(t = e.f.a[String(t)])) return !0
            t = t.concat()
            for (var o = !0, i = 0; i < t.length; ++i) {
              var a = t[i]
              if (a && !a.Z && a.capture == n) {
                var s = a.listener,
                  u = a.ga || a.src
                a.ba && jb(e.f, a), (o = !1 !== s.call(u, r) && o)
              }
            }
            return o && 0 != r.Ra
          }
          function Bb(e) {
            return (
              !/^\s*$/.test(e) &&
              /^[\],:{}\s\u2028\u2029]*$/.test(
                e
                  .replace(/\\["\\\/bfnrtu]/g, '@')
                  .replace(
                    /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                    ']'
                  )
                  .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, '')
              )
            )
          }
          function Cb(a) {
            if (((a = String(a)), Bb(a)))
              try {
                return eval('(' + a + ')')
              } catch (e) {}
            throw Error('Invalid JSON string: ' + a)
          }
          function Db(e) {
            var t = []
            return Eb(new Fb(), e, t), t.join('')
          }
          function Fb() {}
          function Eb(e, t, n) {
            if (null == t) n.push('null')
            else {
              if ('object' == typeof t) {
                if (p(t)) {
                  var r = t
                  ;(t = r.length), n.push('[')
                  for (var o = '', i = 0; i < t; i++)
                    n.push(o), Eb(e, r[i], n), (o = ',')
                  return void n.push(']')
                }
                if (
                  !(
                    t instanceof String ||
                    t instanceof Number ||
                    t instanceof Boolean
                  )
                ) {
                  for (r in (n.push('{'), (o = ''), t))
                    Object.prototype.hasOwnProperty.call(t, r) &&
                      ('function' != typeof (i = t[r]) &&
                        (n.push(o),
                        Gb(r, n),
                        n.push(':'),
                        Eb(e, i, n),
                        (o = ',')))
                  return void n.push('}')
                }
                t = t.valueOf()
              }
              switch (typeof t) {
                case 'string':
                  Gb(t, n)
                  break
                case 'number':
                  n.push(isFinite(t) && !isNaN(t) ? String(t) : 'null')
                  break
                case 'boolean':
                  n.push(String(t))
                  break
                case 'function':
                  n.push('null')
                  break
                default:
                  throw Error('Unknown type: ' + typeof t)
              }
            }
          }
          u(B, w),
            (B.prototype[db] = !0),
            (g = B.prototype),
            (g.addEventListener = function(e, t, n, r) {
              nb(this, e, t, n, r)
            }),
            (g.removeEventListener = function(e, t, n, r) {
              vb(this, e, t, n, r)
            }),
            (g.dispatchEvent = function(e) {
              var t,
                n = this.J
              if (n) for (t = []; n; n = n.J) t.push(n)
              n = this.N
              var r = e.type || e
              if (l(e)) e = new A(e, n)
              else if (e instanceof A) e.target = e.target || n
              else {
                var o = e
                Ha((e = new A(r, n)), o)
              }
              if (((o = !0), t))
                for (var i = t.length - 1; 0 <= i; i--) {
                  var a = (e.a = t[i])
                  o = Ab(a, r, !0, e) && o
                }
              if (
                ((o = Ab((a = e.a = n), r, !0, e) && o),
                (o = Ab(a, r, !1, e) && o),
                t)
              )
                for (i = 0; i < t.length; i++)
                  o = Ab((a = e.a = t[i]), r, !1, e) && o
              return o
            }),
            (g.w = function() {
              if ((B.H.w.call(this), this.f)) {
                var e,
                  t = this.f
                for (e in t.a) {
                  for (var n = t.a[e], r = 0; r < n.length; r++) gb(n[r])
                  delete t.a[e], t.b--
                }
              }
              this.J = null
            }),
            (g.Ia = function(e, t, n, r) {
              return this.f.add(String(e), t, !1, n, r)
            }),
            (g.Ja = function(e, t, n, r) {
              return this.f.add(String(e), t, !0, n, r)
            })
          var Hb = {
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
            Ib = /\uffff/.test('￿')
              ? /[\\"\x00-\x1f\x7f-\uffff]/g
              : /[\\"\x00-\x1f\x7f-\xff]/g
          function Gb(e, t) {
            t.push(
              '"',
              e.replace(Ib, function(e) {
                var t = Hb[e]
                return (
                  t ||
                    ((t =
                      '\\u' + (65536 | e.charCodeAt(0)).toString(16).substr(1)),
                    (Hb[e] = t)),
                  t
                )
              }),
              '"'
            )
          }
          function Jb(e, t) {
            ;(this.c = e), (this.f = t), (this.b = 0), (this.a = null)
          }
          function Kb() {
            this.b = this.a = null
          }
          Jb.prototype.get = function() {
            if (0 < this.b) {
              this.b--
              var e = this.a
              ;(this.a = e.next), (e.next = null)
            } else e = this.c()
            return e
          }
          var Nb = new Jb(
              function() {
                return new Lb()
              },
              function(e) {
                e.reset()
              }
            ),
            Rb,
            Tb
          function Ob() {
            var e = Pb,
              t = null
            return (
              e.a &&
                ((t = e.a),
                (e.a = e.a.next),
                e.a || (e.b = null),
                (t.next = null)),
              t
            )
          }
          function Lb() {
            this.next = this.b = this.a = null
          }
          function Qb(e) {
            k.setTimeout(function() {
              throw e
            }, 0)
          }
          function Sb() {
            var e = k.MessageChannel
            if (
              (void 0 === e &&
                'undefined' != typeof window &&
                window.postMessage &&
                window.addEventListener &&
                !y('Presto') &&
                (e = function() {
                  var e = document.createElement('IFRAME')
                  ;(e.style.display = 'none'),
                    (e.src = ''),
                    document.documentElement.appendChild(e)
                  var t = e.contentWindow
                  ;(e = t.document).open(), e.write(''), e.close()
                  var n = 'callImmediate' + Math.random(),
                    o =
                      'file:' == t.location.protocol
                        ? '*'
                        : t.location.protocol + '//' + t.location.host
                  ;(e = r(function(e) {
                    ;('*' != o && e.origin != o) ||
                      e.data != n ||
                      this.port1.onmessage()
                  }, this)),
                    t.addEventListener('message', e, !1),
                    (this.port1 = {}),
                    (this.port2 = {
                      postMessage: function() {
                        t.postMessage(n, o)
                      }
                    })
                }),
              void 0 !== e && !y('Trident') && !y('MSIE'))
            ) {
              var t = new e(),
                n = {},
                o = n
              return (
                (t.port1.onmessage = function() {
                  if (void 0 !== n.next) {
                    var e = (n = n.next).za
                    ;(n.za = null), e()
                  }
                }),
                function(e) {
                  ;(o.next = {za: e}), (o = o.next), t.port2.postMessage(0)
                }
              )
            }
            return 'undefined' != typeof document &&
              'onreadystatechange' in document.createElement('SCRIPT')
              ? function(e) {
                  var t = document.createElement('SCRIPT')
                  ;(t.onreadystatechange = function() {
                    ;(t.onreadystatechange = null),
                      t.parentNode.removeChild(t),
                      (t = null),
                      e(),
                      (e = null)
                  }),
                    document.documentElement.appendChild(t)
                }
              : function(e) {
                  k.setTimeout(e, 0)
                }
          }
          function Ub() {
            if (-1 != String(k.Promise).indexOf('[native code]')) {
              var e = k.Promise.resolve(void 0)
              Tb = function() {
                e.then(Vb)
              }
            } else
              Tb = function() {
                var e = Vb
                !da(k.setImmediate) ||
                (k.Window &&
                  k.Window.prototype &&
                  !y('Edge') &&
                  k.Window.prototype.setImmediate == k.setImmediate)
                  ? (Rb || (Rb = Sb()), Rb(e))
                  : k.setImmediate(e)
              }
          }
          ;(Kb.prototype.add = function(e, t) {
            var n = Nb.get()
            n.set(e, t), this.b ? (this.b.next = n) : (this.a = n), (this.b = n)
          }),
            (Lb.prototype.set = function(e, t) {
              ;(this.a = e), (this.b = t), (this.next = null)
            }),
            (Lb.prototype.reset = function() {
              this.next = this.b = this.a = null
            })
          var Wb = !1,
            Pb = new Kb()
          function Vb() {
            for (var e; (e = Ob()); ) {
              try {
                e.a.call(e.b)
              } catch (e) {
                Qb(e)
              }
              var t = Nb
              t.f(e), 100 > t.b && (t.b++, (e.next = t.a), (t.a = e))
            }
            Wb = !1
          }
          function Xb(e, n) {
            B.call(this),
              (this.b = e || 1),
              (this.a = n || k),
              (this.c = r(this.qb, this)),
              (this.g = t())
          }
          function Yb(e) {
            ;(e.ea = !1), e.O && (e.a.clearTimeout(e.O), (e.O = null))
          }
          function Zb(e, t, n) {
            if (da(e)) n && (e = r(e, n))
            else {
              if (!e || 'function' != typeof e.handleEvent)
                throw Error('Invalid listener argument')
              e = r(e.handleEvent, e)
            }
            return 2147483647 < Number(t) ? -1 : k.setTimeout(e, t || 0)
          }
          function $b(e, t, n) {
            w.call(this),
              (this.f = null != n ? r(e, n) : e),
              (this.c = t),
              (this.b = r(this.kb, this)),
              (this.a = [])
          }
          function ac(e) {
            ;(e.Y = Zb(e.b, e.c)), e.f.apply(null, e.a)
          }
          function bc(e) {
            w.call(this), (this.b = e), (this.a = {})
          }
          u(Xb, B),
            (g = Xb.prototype),
            (g.ea = !1),
            (g.O = null),
            (g.qb = function() {
              if (this.ea) {
                var e = t() - this.g
                0 < e && e < 0.8 * this.b
                  ? (this.O = this.a.setTimeout(this.c, this.b - e))
                  : (this.O && (this.a.clearTimeout(this.O), (this.O = null)),
                    this.dispatchEvent('tick'),
                    this.ea &&
                      ((this.O = this.a.setTimeout(this.c, this.b)),
                      (this.g = t())))
              }
            }),
            (g.start = function() {
              ;(this.ea = !0),
                this.O ||
                  ((this.O = this.a.setTimeout(this.c, this.b)), (this.g = t()))
            }),
            (g.w = function() {
              Xb.H.w.call(this), Yb(this), delete this.a
            }),
            u($b, w),
            (g = $b.prototype),
            (g.ha = !1),
            (g.Y = null),
            (g.cb = function(e) {
              ;(this.a = arguments), this.Y ? (this.ha = !0) : ac(this)
            }),
            (g.w = function() {
              $b.H.w.call(this),
                this.Y &&
                  (k.clearTimeout(this.Y),
                  (this.Y = null),
                  (this.ha = !1),
                  (this.a = []))
            }),
            (g.kb = function() {
              ;(this.Y = null), this.ha && ((this.ha = !1), ac(this))
            }),
            u(bc, w)
          var cc = []
          function dc(e, t, n, r) {
            p(n) || (n && (cc[0] = n.toString()), (n = cc))
            for (var o = 0; o < n.length; o++) {
              var i = nb(t, n[o], r || e.handleEvent, !1, e.b || e)
              if (!i) break
              e.a[i.key] = i
            }
          }
          function ec(e) {
            Ca(
              e.a,
              function(e, t) {
                this.a.hasOwnProperty(t) && wb(e)
              },
              e
            ),
              (e.a = {})
          }
          function fc(e, t, n) {
            this.reset(e, t, n, void 0, void 0)
          }
          function hc(e) {
            ;(this.f = e), (this.b = this.c = this.a = null)
          }
          function C(e, t) {
            ;(this.name = e), (this.value = t)
          }
          ;(bc.prototype.w = function() {
            bc.H.w.call(this), ec(this)
          }),
            (bc.prototype.handleEvent = function() {
              throw Error('EventHandler.handleEvent not implemented')
            }),
            (fc.prototype.a = null),
            (fc.prototype.reset = function(e, t, n, r, o) {
              delete this.a
            }),
            (C.prototype.toString = function() {
              return this.name
            })
          var ic = new C('SEVERE', 1e3),
            jc = new C('WARNING', 900),
            kc = new C('INFO', 800),
            lc = new C('CONFIG', 700),
            mc = new C('FINE', 500)
          function nc(e) {
            return e.c
              ? e.c
              : e.a ? nc(e.a) : (ma('Root logger has no level set.'), null)
          }
          hc.prototype.log = function(e, t, n) {
            if (e.value >= nc(this).value)
              for (
                da(t) && (t = t()),
                  e = new fc(e, String(t), this.f),
                  n && (e.a = n),
                  n = this;
                n;

              )
                n = n.a
          }
          var oc = {},
            pc = null
          function qc(e) {
            var t
            if (
              (pc || ((pc = new hc('')), (oc[''] = pc), (pc.c = lc)),
              !(t = oc[e]))
            ) {
              t = new hc(e)
              var n = e.lastIndexOf('.'),
                r = e.substr(n + 1)
              ;(n = qc(e.substr(0, n))).b || (n.b = {}),
                (n.b[r] = t),
                (t.a = n),
                (oc[e] = t)
            }
            return t
          }
          function D(e, t) {
            e && e.log(jc, t, void 0)
          }
          function rc(e, t) {
            e && e.log(kc, t, void 0)
          }
          function E(e, t) {
            e && e.log(mc, t, void 0)
          }
          function sc() {
            ;(this.a = qc('goog.labs.net.webChannel.WebChannelDebug')),
              (this.b = !0)
          }
          function tc(e, t, n, r, o, i) {
            F(e, function() {
              if (e.b)
                if (i)
                  for (var a = '', s = i.split('&'), u = 0; u < s.length; u++) {
                    var c = s[u].split('=')
                    if (1 < c.length) {
                      var h = c[0]
                      c = c[1]
                      var l = h.split('_')
                      a =
                        2 <= l.length && 'type' == l[1]
                          ? a + (h + '=') + c + '&'
                          : a + (h + '=redacted&')
                    }
                  }
                else a = null
              else a = i
              return (
                'XMLHTTP REQ (' +
                r +
                ') [attempt ' +
                o +
                ']: ' +
                t +
                '\n' +
                n +
                '\n' +
                a
              )
            })
          }
          function uc(e, t, n, r, o, i, a) {
            F(e, function() {
              return (
                'XMLHTTP RESP (' +
                r +
                ') [ attempt ' +
                o +
                ']: ' +
                t +
                '\n' +
                n +
                '\n' +
                i +
                ' ' +
                a
              )
            })
          }
          function G(e, t, n, r) {
            F(e, function() {
              return (
                'XMLHTTP TEXT (' + t + '): ' + vc(e, n) + (r ? ' ' + r : '')
              )
            })
          }
          function wc(e, t) {
            F(e, function() {
              return 'TIMEOUT: ' + t
            })
          }
          function H(e, t) {
            E(e.a, t)
          }
          function xc(e, t, n) {
            ;(e = e.a) && e.log(ic, n || 'Exception', t)
          }
          function F(e, t) {
            rc(e.a, t)
          }
          function J(e, t) {
            ;(e = e.a) && e.log(ic, t, void 0)
          }
          function vc(e, t) {
            if (!e.b) return t
            if (!t) return null
            try {
              var n = JSON.parse(t)
              if (n)
                for (var r = 0; r < n.length; r++)
                  if (p(n[r])) {
                    var o = n[r]
                    if (!(2 > o.length)) {
                      var i = o[1]
                      if (p(i) && !(1 > i.length)) {
                        var a = i[0]
                        if ('noop' != a && 'stop' != a && 'close' != a)
                          for (var s = 1; s < i.length; s++) i[s] = ''
                      }
                    }
                  }
              return Db(n)
            } catch (n) {
              return (
                H(
                  e,
                  'Exception parsing expected JS array - probably was not JS'
                ),
                t
              )
            }
          }
          sc.prototype.Fa = function() {
            this.b = !1
          }
          var yc = new B()
          function zc(e) {
            A.call(this, 'serverreachability', e)
          }
          function Ac(e) {
            yc.dispatchEvent(new zc(yc, e))
          }
          function Bc(e) {
            A.call(this, 'statevent', e)
          }
          function K(e) {
            yc.dispatchEvent(new Bc(yc, e))
          }
          function Cc(e) {
            A.call(this, 'timingevent', e)
          }
          function Dc(e, t, n) {
            yc.dispatchEvent(new Cc(yc, e, t, n))
          }
          function Ec(e, t) {
            if (!da(e))
              throw Error('Fn must not be null and must be a function')
            return k.setTimeout(function() {
              e()
            }, t)
          }
          u(zc, A), u(Bc, A), u(Cc, A)
          var Fc = {
              NO_ERROR: 0,
              rb: 1,
              yb: 2,
              xb: 3,
              ub: 4,
              wb: 5,
              zb: 6,
              Ua: 7,
              TIMEOUT: 8,
              Cb: 9
            },
            Gc = {
              tb: 'complete',
              Gb: 'success',
              Va: 'error',
              Ua: 'abort',
              Eb: 'ready',
              Fb: 'readystatechange',
              TIMEOUT: 'timeout',
              Ab: 'incrementaldata',
              Db: 'progress',
              vb: 'downloadprogress',
              Hb: 'uploadprogress'
            }
          function Hc() {}
          function Ic(e) {
            var t
            return (
              (t = e.a) ||
                ((t = {}), Jc(e) && ((t[0] = !0), (t[1] = !0)), (t = e.a = t)),
              t
            )
          }
          function Kc() {}
          Hc.prototype.a = null
          var Lc = {OPEN: 'a', sb: 'b', Va: 'c', Bb: 'd'},
            Oc
          function Mc() {
            A.call(this, 'd')
          }
          function Nc() {
            A.call(this, 'c')
          }
          function Pc() {}
          function Qc(e) {
            return (e = Jc(e)) ? new ActiveXObject(e) : new XMLHttpRequest()
          }
          function Jc(e) {
            if (
              !e.b &&
              'undefined' == typeof XMLHttpRequest &&
              'undefined' != typeof ActiveXObject
            ) {
              for (
                var t = [
                    'MSXML2.XMLHTTP.6.0',
                    'MSXML2.XMLHTTP.3.0',
                    'MSXML2.XMLHTTP',
                    'Microsoft.XMLHTTP'
                  ],
                  n = 0;
                n < t.length;
                n++
              ) {
                var r = t[n]
                try {
                  return new ActiveXObject(r), (e.b = r)
                } catch (e) {}
              }
              throw Error(
                'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
              )
            }
            return e.b
          }
          function L(e, t, n, r) {
            ;(this.i = e),
              (this.b = t),
              (this.c = n),
              (this.T = r || 1),
              (this.L = new bc(this)),
              (this.R = Rc),
              (e = Na ? 125 : void 0),
              (this.S = new Xb(e)),
              (this.j = null),
              (this.f = !1),
              (this.l = this.g = this.h = this.J = this.D = this.U = this.s = null),
              (this.u = []),
              (this.a = null),
              (this.G = 0),
              (this.m = this.o = null),
              (this.C = -1),
              (this.B = !1),
              (this.N = 0),
              (this.I = null),
              (this.v = this.X = this.K = !1)
          }
          u(Mc, A), u(Nc, A), u(Pc, Hc), (Oc = new Pc())
          var Rc = 45e3
          function Sc(e, t) {
            switch (e) {
              case 0:
                return 'Non-200 return code (' + t + ')'
              case 1:
                return 'XMLHTTP failure (no data)'
              case 2:
                return 'HttpConnection timeout'
              default:
                return 'Unknown error'
            }
          }
          var Tc = {},
            Uc = {}
          function Vc(e, t, n) {
            ;(e.J = 1), (e.h = Wc(M(t))), (e.l = n), (e.K = !0), Xc(e, null)
          }
          function Yc(e, t, n, r) {
            ;(e.J = 1), (e.h = Wc(M(t))), (e.l = null), (e.K = n), Xc(e, r)
          }
          function Xc(e, n) {
            ;(e.D = t()),
              Zc(e),
              (e.g = M(e.h)),
              $c(e.g, 't', e.T),
              (e.G = 0),
              (e.a = e.i.ca(e.i.ia() ? n : null)),
              0 < e.N && (e.I = new $b(r(e.Sa, e, e.a), e.N)),
              dc(e.L, e.a, 'readystatechange', e.nb),
              (n = e.j ? Fa(e.j) : {}),
              e.l
                ? (e.o || (e.o = 'POST'),
                  (n['Content-Type'] = 'application/x-www-form-urlencoded'),
                  e.a.fa(e.g, e.o, e.l, n))
                : ((e.o = 'GET'), e.a.fa(e.g, e.o, null, n)),
              Ac(1),
              tc(e.b, e.o, e.g, e.c, e.T, e.l)
          }
          function ad(e) {
            var t = N(e.a),
              n = e.a.Ga(),
              r = e.a.W()
            if (!(3 > t || (3 == t && !Na && !e.a.V()))) {
              e.B || 4 != t || 7 == n || Ac(8 == n || 0 >= r ? 3 : 2), bd(e)
              var o = e.a.W()
              ;(e.C = o),
                (n = e.a.V()) ||
                  H(e.b, function() {
                    return 'No response text for uri ' + e.g + ' status ' + o
                  }),
                (e.f = 200 == o),
                uc(e.b, e.o, e.g, e.c, e.T, t, o),
                e.f
                  ? ((r = cd(e)) &&
                      (G(
                        e.b,
                        e.c,
                        r,
                        'Initial handshake response via X-HTTP-Initial-Response'
                      ),
                      (e.v = !0),
                      dd(e, r)),
                    e.K
                      ? (ed(e, t, n), Na && e.f && 3 == t && fd(e))
                      : (G(e.b, e.c, n, null), dd(e, n)),
                    4 == t && gd(e),
                    e.f && !e.B && (4 == t ? e.i.ta(e) : ((e.f = !1), Zc(e))))
                  : (400 == o && 0 < n.indexOf('Unknown SID')
                      ? ((e.m = 3),
                        K(12),
                        D(e.b.a, 'XMLHTTP Unknown SID (' + e.c + ')'))
                      : ((e.m = 0),
                        K(13),
                        D(e.b.a, 'XMLHTTP Bad status ' + o + ' (' + e.c + ')')),
                    gd(e),
                    hd(e))
            }
          }
          function cd(e) {
            return !e.X || e.v
              ? null
              : e.a && (e = id(e.a, 'X-HTTP-Initial-Response')) && !xa(e)
                ? e
                : null
          }
          function ed(e, t, n) {
            for (var r = !0; !e.B && e.G < n.length; ) {
              var o = jd(e, n)
              if (o == Uc) {
                4 == t && ((e.m = 4), K(14), (r = !1)),
                  G(e.b, e.c, null, '[Incomplete Response]')
                break
              }
              if (o == Tc) {
                ;(e.m = 4), K(15), G(e.b, e.c, n, '[Invalid Chunk]'), (r = !1)
                break
              }
              G(e.b, e.c, o, null), dd(e, o)
            }
            4 == t && 0 == n.length && ((e.m = 1), K(16), (r = !1)),
              (e.f = e.f && r),
              r || (G(e.b, e.c, n, '[Invalid Chunked Response]'), gd(e), hd(e))
          }
          function fd(e) {
            dc(e.L, e.S, 'tick', e.mb), e.S.start()
          }
          function jd(e, t) {
            var n = e.G,
              r = t.indexOf('\n', n)
            return -1 == r
              ? Uc
              : ((n = Number(t.substring(n, r))),
                isNaN(n)
                  ? Tc
                  : (r += 1) + n > t.length
                    ? Uc
                    : ((t = t.substr(r, n)), (e.G = r + n), t))
          }
          function Zc(e) {
            ;(e.U = t() + e.R), kd(e, e.R)
          }
          function kd(e, t) {
            if (null != e.s) throw Error('WatchDog timer not null')
            e.s = Ec(r(e.lb, e), t)
          }
          function bd(e) {
            e.s && (k.clearTimeout(e.s), (e.s = null))
          }
          function hd(e) {
            e.i.La() || e.B || e.i.ta(e)
          }
          function gd(e) {
            bd(e)
            var t = e.I
            t && 'function' == typeof t.$ && t.$(),
              (e.I = null),
              Yb(e.S),
              ec(e.L),
              e.a && ((t = e.a), (e.a = null), t.abort(), t.$())
          }
          function dd(e, t) {
            try {
              e.i.Oa(e, t), Ac(4)
            } catch (t) {
              xc(e.b, t, 'Error in httprequest callback')
            }
          }
          function ld(e) {
            if (e.A && 'function' == typeof e.A) return e.A()
            if (l(e)) return e.split('')
            if (ca(e)) {
              for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r])
              return t
            }
            return Da(e)
          }
          function md(e, t) {
            if (e.forEach && 'function' == typeof e.forEach)
              e.forEach(t, void 0)
            else if (ca(e) || l(e)) ra(e, t, void 0)
            else {
              if (e.M && 'function' == typeof e.M) var n = e.M()
              else if (e.A && 'function' == typeof e.A) n = void 0
              else if (ca(e) || l(e)) {
                n = []
                for (var r = e.length, o = 0; o < r; o++) n.push(o)
              } else n = Ea(e)
              o = (r = ld(e)).length
              for (var i = 0; i < o; i++) t.call(void 0, r[i], n && n[i], e)
            }
          }
          function O(e, t) {
            ;(this.b = {}), (this.a = []), (this.c = 0)
            var n = arguments.length
            if (1 < n) {
              if (n % 2) throw Error('Uneven number of arguments')
              for (var r = 0; r < n; r += 2)
                this.set(arguments[r], arguments[r + 1])
            } else if (e)
              if (e instanceof O)
                for (n = e.M(), r = 0; r < n.length; r++)
                  this.set(n[r], e.get(n[r]))
              else for (r in e) this.set(r, e[r])
          }
          function od(e) {
            ;(e.b = {}), (e.a.length = 0), (e.c = 0)
          }
          function pd(e, t) {
            return (
              !!P(e.b, t) &&
              (delete e.b[t], e.c--, e.a.length > 2 * e.c && nd(e), !0)
            )
          }
          function nd(e) {
            if (e.c != e.a.length) {
              for (var t = 0, n = 0; t < e.a.length; ) {
                var r = e.a[t]
                P(e.b, r) && (e.a[n++] = r), t++
              }
              e.a.length = n
            }
            if (e.c != e.a.length) {
              var o = {}
              for (n = t = 0; t < e.a.length; )
                P(o, (r = e.a[t])) || ((e.a[n++] = r), (o[r] = 1)), t++
              e.a.length = n
            }
          }
          function P(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }
          ;(g = L.prototype),
            (g.setTimeout = function(e) {
              this.R = e
            }),
            (g.nb = function(e) {
              e = e.target
              var t = this.I
              t && 3 == N(e)
                ? (H(this.b, 'Throttling readystatechange.'), t.cb())
                : this.Sa(e)
            }),
            (g.Sa = function(e) {
              try {
                e == this.a
                  ? ad(this)
                  : D(this.b.a, 'Called back with an unexpected xmlhttp')
              } catch (e) {
                if (
                  (H(this.b, 'Failed call to OnXmlHttpReadyStateChanged_'),
                  this.a && this.a.V())
                ) {
                  var t = this
                  xc(this.b, e, function() {
                    return 'ResponseText: ' + t.a.V()
                  })
                } else xc(this.b, e, 'No response text')
              }
            }),
            (g.mb = function() {
              if (this.a) {
                var e = N(this.a),
                  t = this.a.V()
                this.G < t.length &&
                  (bd(this), ed(this, e, t), this.f && 4 != e && Zc(this))
              }
            }),
            (g.cancel = function() {
              ;(this.B = !0), gd(this)
            }),
            (g.lb = function() {
              this.s = null
              var e = t()
              0 <= e - this.U
                ? (this.f &&
                    J(
                      this.b,
                      'Received watchdog timeout even though request loaded successfully'
                    ),
                  wc(this.b, this.g),
                  2 != this.J && (Ac(3), K(17)),
                  gd(this),
                  (this.m = 2),
                  hd(this))
                : (D(this.b.a, 'WatchDog timer called too early'),
                  kd(this, this.U - e))
            }),
            (g = O.prototype),
            (g.A = function() {
              nd(this)
              for (var e = [], t = 0; t < this.a.length; t++)
                e.push(this.b[this.a[t]])
              return e
            }),
            (g.M = function() {
              return nd(this), this.a.concat()
            }),
            (g.get = function(e, t) {
              return P(this.b, e) ? this.b[e] : t
            }),
            (g.set = function(e, t) {
              P(this.b, e) || (this.c++, this.a.push(e)), (this.b[e] = t)
            }),
            (g.forEach = function(e, t) {
              for (var n = this.M(), r = 0; r < n.length; r++) {
                var o = n[r],
                  i = this.get(o)
                e.call(t, i, o, this)
              }
            })
          var qd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
          function rd(e, t) {
            if (e) {
              e = e.split('&')
              for (var n = 0; n < e.length; n++) {
                var r = e[n].indexOf('='),
                  o = null
                if (0 <= r) {
                  var i = e[n].substring(0, r)
                  o = e[n].substring(r + 1)
                } else i = e[n]
                t(i, o ? decodeURIComponent(o.replace(/\+/g, ' ')) : '')
              }
            }
          }
          function Q(e, t) {
            var n
            ;(this.b = this.j = this.f = ''),
              (this.i = null),
              (this.g = this.a = ''),
              (this.h = !1),
              e instanceof Q
                ? ((this.h = void 0 !== t ? t : e.h),
                  sd(this, e.f),
                  (this.j = e.j),
                  td(this, e.b),
                  ud(this, e.i),
                  (this.a = e.a),
                  vd(this, wd(e.c)),
                  (this.g = e.g))
                : e && (n = String(e).match(qd))
                  ? ((this.h = !!t),
                    sd(this, n[1] || '', !0),
                    (this.j = xd(n[2] || '')),
                    td(this, n[3] || '', !0),
                    ud(this, n[4]),
                    (this.a = xd(n[5] || '', !0)),
                    vd(this, n[6] || '', !0),
                    (this.g = xd(n[7] || '')))
                  : ((this.h = !!t), (this.c = new yd(null, this.h)))
          }
          function M(e) {
            return new Q(e)
          }
          function sd(e, t, n) {
            ;(e.f = n ? xd(t, !0) : t), e.f && (e.f = e.f.replace(/:$/, ''))
          }
          function td(e, t, n) {
            e.b = n ? xd(t, !0) : t
          }
          function ud(e, t) {
            if (t) {
              if (((t = Number(t)), isNaN(t) || 0 > t))
                throw Error('Bad port number ' + t)
              e.i = t
            } else e.i = null
          }
          function vd(e, t, n) {
            t instanceof yd
              ? ((e.c = t), Ed(e.c, e.h))
              : (n || (t = zd(t, Fd)), (e.c = new yd(t, e.h)))
          }
          function R(e, t, n) {
            e.c.set(t, n)
          }
          function $c(e, t, n) {
            p(n) || (n = [String(n)]), Gd(e.c, t, n)
          }
          function Wc(e) {
            return (
              R(
                e,
                'zx',
                Math.floor(2147483648 * Math.random()).toString(36) +
                  Math.abs(
                    Math.floor(2147483648 * Math.random()) ^ t()
                  ).toString(36)
              ),
              e
            )
          }
          function Hd(e) {
            return e instanceof Q ? M(e) : new Q(e, void 0)
          }
          function Id(e, t, n, r) {
            var o = new Q(null, void 0)
            return (
              e && sd(o, e), t && td(o, t), n && ud(o, n), r && (o.a = r), o
            )
          }
          function xd(e, t) {
            return e
              ? t
                ? decodeURI(e.replace(/%25/g, '%2525'))
                : decodeURIComponent(e)
              : ''
          }
          function zd(e, t, n) {
            return l(e)
              ? ((e = encodeURI(e).replace(t, Jd)),
                n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
                e)
              : null
          }
          function Jd(e) {
            return (
              '%' +
              (((e = e.charCodeAt(0)) >> 4) & 15).toString(16) +
              (15 & e).toString(16)
            )
          }
          ;(Q.prototype.toString = function() {
            var e = [],
              t = this.f
            t && e.push(zd(t, Ad, !0), ':')
            var n = this.b
            return (
              (n || 'file' == t) &&
                (e.push('//'),
                (t = this.j) && e.push(zd(t, Ad, !0), '@'),
                e.push(
                  encodeURIComponent(String(n)).replace(
                    /%25([0-9a-fA-F]{2})/g,
                    '%$1'
                  )
                ),
                null != (n = this.i) && e.push(':', String(n))),
              (n = this.a) &&
                (this.b && '/' != n.charAt(0) && e.push('/'),
                e.push(zd(n, '/' == n.charAt(0) ? Bd : Cd, !0))),
              (n = this.c.toString()) && e.push('?', n),
              (n = this.g) && e.push('#', zd(n, Dd)),
              e.join('')
            )
          }),
            (Q.prototype.resolve = function(e) {
              var t = M(this),
                n = !!e.f
              n ? sd(t, e.f) : (n = !!e.j),
                n ? (t.j = e.j) : (n = !!e.b),
                n ? td(t, e.b) : (n = null != e.i)
              var r = e.a
              if (n) ud(t, e.i)
              else if ((n = !!e.a)) {
                if ('/' != r.charAt(0))
                  if (this.b && !this.a) r = '/' + r
                  else {
                    var o = t.a.lastIndexOf('/')
                    ;-1 != o && (r = t.a.substr(0, o + 1) + r)
                  }
                if ('..' == (o = r) || '.' == o) r = ''
                else if (-1 != o.indexOf('./') || -1 != o.indexOf('/.')) {
                  ;(r = 0 == o.lastIndexOf('/', 0)), (o = o.split('/'))
                  for (var i = [], a = 0; a < o.length; ) {
                    var s = o[a++]
                    '.' == s
                      ? r && a == o.length && i.push('')
                      : '..' == s
                        ? ((1 < i.length || (1 == i.length && '' != i[0])) &&
                            i.pop(),
                          r && a == o.length && i.push(''))
                        : (i.push(s), (r = !0))
                  }
                  r = i.join('/')
                } else r = o
              }
              return (
                n ? (t.a = r) : (n = '' !== e.c.toString()),
                n ? vd(t, wd(e.c)) : (n = !!e.g),
                n && (t.g = e.g),
                t
              )
            })
          var Ad = /[#\/\?@]/g,
            Cd = /[#\?:]/g,
            Bd = /[#\?]/g,
            Fd = /[#\?@]/g,
            Dd = /#/g
          function yd(e, t) {
            ;(this.b = this.a = null), (this.c = e || null), (this.f = !!t)
          }
          function S(e) {
            e.a ||
              ((e.a = new O()),
              (e.b = 0),
              e.c &&
                rd(e.c, function(t, n) {
                  e.add(decodeURIComponent(t.replace(/\+/g, ' ')), n)
                }))
          }
          function Ld(e, t) {
            S(e),
              (t = Kd(e, t)),
              P(e.a.b, t) &&
                ((e.c = null), (e.b -= e.a.get(t).length), pd(e.a, t))
          }
          function Md(e, t) {
            return S(e), (t = Kd(e, t)), P(e.a.b, t)
          }
          function Gd(e, t, n) {
            Ld(e, t),
              0 < n.length &&
                ((e.c = null), e.a.set(Kd(e, t), wa(n)), (e.b += n.length))
          }
          function wd(e) {
            var t = new yd()
            return (t.c = e.c), e.a && ((t.a = new O(e.a)), (t.b = e.b)), t
          }
          function Kd(e, t) {
            return (t = String(t)), e.f && (t = t.toLowerCase()), t
          }
          function Ed(e, t) {
            t &&
              !e.f &&
              (S(e),
              (e.c = null),
              e.a.forEach(function(e, t) {
                var n = t.toLowerCase()
                t != n && (Ld(this, t), Gd(this, n, e))
              }, e)),
              (e.f = t)
          }
          function Pd() {}
          function Qd() {}
          function Rd(e, t) {
            ;(this.a = e),
              (this.b = t),
              (this.c = this.i = null),
              (this.h = !1),
              (this.m = null),
              (this.f = -1),
              (this.l = this.g = null)
          }
          function Sd(e) {
            H(e.b, 'TestConnection: starting stage 2')
            var t = e.a.I.a
            if (null != t)
              H(e.b, function() {
                return 'Buffered'
              }),
                K(4),
                t ? (K(10), Td(e.a, e, !1)) : (K(11), Td(e.a, e, !0))
            else {
              ;(e.c = new L(e, e.b, void 0, void 0)), (e.c.j = e.i)
              var n = Ud(e.a, e.g, e.m)
              K(4), $c(n, 'TYPE', 'xmlhttp')
              var r = e.a.j,
                o = e.a.K
              r && o && R(n, r, o), Yc(e.c, n, !1, e.g)
            }
          }
          function Wd() {
            this.a = this.b = null
          }
          function Xd() {
            this.a = new O()
          }
          function Yd(e) {
            var t = typeof e
            return ('object' == t && e) || 'function' == t
              ? 'o' + (e[q] || (e[q] = ++fa))
              : t.charAt(0) + e
          }
          function Zd(e, t) {
            ;(this.a = e), (this.b = t)
          }
          function $d(e) {
            ;(this.g = e || ae),
              k.PerformanceNavigationTiming
                ? (e =
                    0 <
                      (e = k.performance.getEntriesByType('navigation'))
                        .length &&
                    ('hq' == e[0].nextHopProtocol ||
                      'h2' == e[0].nextHopProtocol))
                : (e = !!(k.oa && k.oa.Ma && k.oa.Ma() && k.oa.Ma().Jb)),
              (this.f = e ? this.g : 1),
              (this.a = null),
              1 < this.f && (this.a = new Xd()),
              (this.b = null),
              (this.c = [])
          }
          ;(g = yd.prototype),
            (g.add = function(e, t) {
              S(this), (this.c = null), (e = Kd(this, e))
              var n = this.a.get(e)
              return (
                n || this.a.set(e, (n = [])), n.push(t), (this.b += 1), this
              )
            }),
            (g.forEach = function(e, t) {
              S(this),
                this.a.forEach(function(n, r) {
                  ra(
                    n,
                    function(n) {
                      e.call(t, n, r, this)
                    },
                    this
                  )
                }, this)
            }),
            (g.M = function() {
              S(this)
              for (
                var e = this.a.A(), t = this.a.M(), n = [], r = 0;
                r < t.length;
                r++
              )
                for (var o = e[r], i = 0; i < o.length; i++) n.push(t[r])
              return n
            }),
            (g.A = function(e) {
              S(this)
              var t = []
              if (l(e)) Md(this, e) && (t = va(t, this.a.get(Kd(this, e))))
              else {
                e = this.a.A()
                for (var n = 0; n < e.length; n++) t = va(t, e[n])
              }
              return t
            }),
            (g.set = function(e, t) {
              return (
                S(this),
                (this.c = null),
                Md(this, (e = Kd(this, e))) && (this.b -= this.a.get(e).length),
                this.a.set(e, [t]),
                (this.b += 1),
                this
              )
            }),
            (g.get = function(e, t) {
              return 0 < (e = e ? this.A(e) : []).length ? String(e[0]) : t
            }),
            (g.toString = function() {
              if (this.c) return this.c
              if (!this.a) return ''
              for (var e = [], t = this.a.M(), n = 0; n < t.length; n++) {
                var r = t[n],
                  o = encodeURIComponent(String(r))
                r = this.A(r)
                for (var i = 0; i < r.length; i++) {
                  var a = o
                  '' !== r[i] && (a += '=' + encodeURIComponent(String(r[i]))),
                    e.push(a)
                }
              }
              return (this.c = e.join('&'))
            }),
            u(Qd, Pd),
            (g = Rd.prototype),
            (g.P = null),
            (g.ca = function(e) {
              return this.a.ca(e)
            }),
            (g.abort = function() {
              this.c && (this.c.cancel(), (this.c = null)), (this.f = -1)
            }),
            (g.La = function() {
              return !1
            }),
            (g.Oa = function(e, t) {
              if (((this.f = e.C), 0 == this.P)) {
                if (
                  (H(this.b, 'TestConnection: Got data for stage 1'),
                  !this.a.o && (e = e.a))
                ) {
                  var n = id(e, 'X-Client-Wire-Protocol')
                  ;(this.l = n || null),
                    this.a.j &&
                      ((e = id(e, 'X-HTTP-Session-Id'))
                        ? (this.a.K = e)
                        : D(
                            this.b.a,
                            'Missing X_HTTP_SESSION_ID in the handshake response'
                          ))
                }
                if (t) {
                  try {
                    var r = this.a.la.a.parse(t)
                  } catch (e) {
                    return xc(this.b, e), void Vd(this.a, this)
                  }
                  this.g = r[0]
                } else
                  H(this.b, 'TestConnection: Null responseText'),
                    Vd(this.a, this)
              } else
                1 == this.P &&
                  (this.h
                    ? K(6)
                    : '11111' == t
                      ? (K(5),
                        (this.h = !0),
                        (!z || 10 <= Number(Wa)) &&
                          ((this.f = 200),
                          this.c.cancel(),
                          H(
                            this.b,
                            'Test connection succeeded; using streaming connection'
                          ),
                          K(11),
                          Td(this.a, this, !0)))
                      : (K(7), (this.h = !1)))
            }),
            (g.ta = function() {
              ;(this.f = this.c.C),
                this.c.f
                  ? 0 == this.P
                    ? ((this.P = 1),
                      H(
                        this.b,
                        'TestConnection: request complete for initial check'
                      ),
                      Sd(this))
                    : 1 == this.P &&
                      (H(
                        this.b,
                        'TestConnection: request complete for stage 2'
                      ),
                      this.h
                        ? (H(
                            this.b,
                            'Test connection succeeded; using streaming connection'
                          ),
                          K(11),
                          Td(this.a, this, !0))
                        : (H(
                            this.b,
                            'Test connection failed; not using streaming'
                          ),
                          K(10),
                          Td(this.a, this, !1)))
                  : (H(
                      this.b,
                      'TestConnection: request failed, in state ' + this.P
                    ),
                    0 == this.P ? K(8) : 1 == this.P && K(9),
                    Vd(this.a, this))
            }),
            (g.ia = function() {
              return this.a.ia()
            }),
            (g.qa = function() {
              return this.a.qa()
            }),
            (Xd.prototype.add = function(e) {
              this.a.set(Yd(e), e)
            }),
            (Xd.prototype.A = function() {
              return this.a.A()
            })
          var ae = 10
          function be(e, t) {
            e.a ||
              (-1 == t.indexOf('spdy') &&
                -1 == t.indexOf('quic') &&
                -1 == t.indexOf('h2')) ||
              ((e.f = e.g), (e.a = new Xd()), e.b && (ce(e, e.b), (e.b = null)))
          }
          function de(e) {
            return !!e.b || (!!e.a && e.a.a.c >= e.f)
          }
          function ee(e, t) {
            return (
              e.b
                ? (e = e.b == t)
                : e.a ? ((t = Yd(t)), (e = P(e.a.a.b, t))) : (e = !1),
              e
            )
          }
          function ce(e, t) {
            e.a ? e.a.add(t) : (e.b = t)
          }
          function fe(e, t) {
            var n
            e.b && e.b == t
              ? (e.b = null)
              : ((n = e.a) && ((n = Yd(t)), (n = P(e.a.a.b, n))),
                n && pd(e.a.a, Yd(t)))
          }
          function ge(e) {
            if (null != e.b) return e.c.concat(e.b.u)
            if (null != e.a && 0 != e.a.a.c) {
              var t = e.c
              return (
                ra(e.a.A(), function(e) {
                  t = t.concat(e.u)
                }),
                t
              )
            }
            return wa(e.c)
          }
          function he(e, t) {
            e.c = e.c.concat(t)
          }
          function ie() {}
          function je() {
            this.a = new ie()
          }
          function ke(e, t, n) {
            var r = n || ''
            try {
              md(e, function(e, n) {
                var o = e
                ea(e) && (o = Db(e)),
                  t.push(r + n + '=' + encodeURIComponent(o))
              })
            } catch (e) {
              throw (t.push(r + 'type=' + encodeURIComponent('_badmap')), e)
            }
          }
          function le(e, t) {
            var n = new sc()
            H(n, 'TestLoadImage: loading ' + e)
            var r = new Image()
            ;(r.onload = ja(me, n, r, 'TestLoadImage: loaded', !0, t)),
              (r.onerror = ja(me, n, r, 'TestLoadImage: error', !1, t)),
              (r.onabort = ja(me, n, r, 'TestLoadImage: abort', !1, t)),
              (r.ontimeout = ja(me, n, r, 'TestLoadImage: timeout', !1, t)),
              k.setTimeout(function() {
                r.ontimeout && r.ontimeout()
              }, 1e4),
              (r.src = e)
          }
          function me(e, t, n, r, o) {
            try {
              H(e, n),
                (t.onload = null),
                (t.onerror = null),
                (t.onabort = null),
                (t.ontimeout = null),
                o(r)
            } catch (t) {
              xc(e, t)
            }
          }
          function T(e) {
            B.call(this),
              (this.headers = new O()),
              (this.s = e || null),
              (this.c = !1),
              (this.D = this.a = null),
              (this.K = this.B = ''),
              (this.j = 0),
              (this.g = ''),
              (this.h = this.I = this.u = this.G = !1),
              (this.l = 0),
              (this.C = null),
              (this.L = ne),
              (this.v = this.o = !1)
          }
          ;($d.prototype.cancel = function() {
            ;(this.c = ge(this)),
              this.b
                ? (this.b.cancel(), (this.b = null))
                : this.a &&
                  0 != this.a.a.c &&
                  (ra(this.a.A(), function(e) {
                    e.cancel()
                  }),
                  od(this.a.a))
          }),
            (ie.prototype.stringify = function(e) {
              return k.JSON.stringify(e, void 0)
            }),
            (ie.prototype.parse = function(e) {
              return k.JSON.parse(e, void 0)
            }),
            u(T, B)
          var ne = ''
          T.prototype.b = qc('goog.net.XhrIo')
          var oe = /^https?$/i,
            pe = ['POST', 'PUT']
          function se(e) {
            return (
              z &&
              Va(9) &&
              'number' == typeof e.timeout &&
              void 0 !== e.ontimeout
            )
          }
          function ta(e) {
            return 'content-type' == e.toLowerCase()
          }
          function qe(e, t) {
            ;(e.c = !1),
              e.a && ((e.h = !0), e.a.abort(), (e.h = !1)),
              (e.g = t),
              (e.j = 5),
              te(e),
              ue(e)
          }
          function te(e) {
            e.G ||
              ((e.G = !0),
              e.dispatchEvent('complete'),
              e.dispatchEvent('error'))
          }
          function ve(e) {
            if (e.c && void 0 !== goog)
              if (e.D[1] && 4 == N(e) && 2 == e.W())
                E(e.b, U(e, 'Local request error detected and ignored'))
              else if (e.u && 4 == N(e)) Zb(e.Na, 0, e)
              else if ((e.dispatchEvent('readystatechange'), 4 == N(e))) {
                E(e.b, U(e, 'Request complete')), (e.c = !1)
                try {
                  var t,
                    n = e.W()
                  e: switch (n) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                      var r = !0
                      break e
                    default:
                      r = !1
                  }
                  if (!(t = r)) {
                    var o
                    if ((o = 0 === n)) {
                      var i = String(e.B).match(qd)[1] || null
                      if (!i && k.self && k.self.location) {
                        var a = k.self.location.protocol
                        i = a.substr(0, a.length - 1)
                      }
                      o = !oe.test(i ? i.toLowerCase() : '')
                    }
                    t = o
                  }
                  t
                    ? (e.dispatchEvent('complete'), e.dispatchEvent('success'))
                    : ((e.j = 6), (e.g = e.Ha() + ' [' + e.W() + ']'), te(e))
                } finally {
                  ue(e)
                }
              }
          }
          function ue(e, t) {
            if (e.a) {
              re(e)
              var n = e.a,
                r = e.D[0] ? aa : null
              ;(e.a = null), (e.D = null), t || e.dispatchEvent('ready')
              try {
                n.onreadystatechange = r
              } catch (t) {
                ;(e = e.b) &&
                  e.log(
                    ic,
                    'Problem encountered resetting onreadystatechange: ' +
                      t.message,
                    void 0
                  )
              }
            }
          }
          function re(e) {
            e.a && e.v && (e.a.ontimeout = null),
              e.C && (k.clearTimeout(e.C), (e.C = null))
          }
          function N(e) {
            return e.a ? e.a.readyState : 0
          }
          function id(e, t) {
            return e.a ? e.a.getResponseHeader(t) : null
          }
          function U(e, t) {
            return t + ' [' + e.K + ' ' + e.B + ' ' + e.W() + ']'
          }
          function we(e) {
            var t = ''
            return (
              Ca(e, function(e, n) {
                ;(t += n), (t += ':'), (t += e), (t += '\r\n')
              }),
              t
            )
          }
          function xe(e, t, n) {
            e: {
              for (r in n) {
                var r = !1
                break e
              }
              r = !0
            }
            if (r) return e
            if (((n = we(n)), l(e))) {
              if (
                ((t = encodeURIComponent(String(t))),
                (t += n = null != n ? '=' + encodeURIComponent(String(n)) : ''))
              ) {
                if (
                  (0 > (n = e.indexOf('#')) && (n = e.length),
                  0 > (r = e.indexOf('?')) || r > n)
                ) {
                  r = n
                  var o = ''
                } else o = e.substring(r + 1, n)
                ;(n = (e = [e.substr(0, r), o, e.substr(n)])[1]),
                  (e[1] = t ? (n ? n + '&' + t : t) : n),
                  (e = e[0] + (e[1] ? '?' + e[1] : '') + e[2])
              }
              return e
            }
            return R(e, t, n), e
          }
          function ye(e) {
            ;(this.ya = 0),
              (this.g = []),
              (this.a = new sc()),
              (this.I = new Wd()),
              (this.X = this.ua = this.D = this.ja = this.b = this.K = this.j = this.U = this.h = this.L = this.i = null),
              (this.Za = this.R = 0),
              (this.Xa = !!n('internalChannelParams.failFast', e)),
              (this.ka = this.C = this.s = this.l = this.m = this.f = null),
              (this.u = this.xa = this.N = -1),
              (this.T = this.B = this.v = 0),
              (this.Wa = n('internalChannelParams.baseRetryDelayMs', e) || 5e3),
              (this.$a = n('internalChannelParams.retryDelaySeedMs', e) || 1e4),
              (this.Ya =
                n('internalChannelParams.forwardChannelMaxRetries', e) || 2),
              (this.wa =
                n('internalChannelParams.forwardChannelRequestTimeoutMs', e) ||
                2e4),
              (this.Ta = (e && e.Kb) || void 0),
              (this.G = void 0),
              (this.S = (e && e.supportsCrossDomainXhr) || !1),
              (this.J = ''),
              (this.c = new $d(e && e.concurrentRequestLimit)),
              (this.la = new je()),
              (this.o =
                !e ||
                void 0 === e.backgroundChannelTest ||
                e.backgroundChannelTest),
              (this.va = (e && e.fastHandshake) || !1) &&
                !this.o &&
                (D(
                  this.a.a,
                  'Force backgroundChannelTest when fastHandshake is enabled.'
                ),
                (this.o = !0)),
              e && e.Fa && this.a.Fa()
          }
          function ze(e) {
            if ((H(e.a, 'disconnect()'), Ae(e), 3 == e.F)) {
              var n = e.R++,
                r = M(e.D)
              R(r, 'SID', e.J),
                R(r, 'RID', n),
                R(r, 'TYPE', 'terminate'),
                Be(e, r),
                ((n = new L(e, e.a, n, void 0)).J = 2),
                (n.h = Wc(M(r))),
                (r = !1),
                k.navigator &&
                  k.navigator.sendBeacon &&
                  (r = k.navigator.sendBeacon(n.h.toString(), '')),
                !r && k.Image && ((new Image().src = n.h), (r = !0)),
                r || ((n.a = n.i.ca(null)), n.a.fa(n.h)),
                (n.D = t()),
                Zc(n)
            }
            Ce(e)
          }
          function Ae(e) {
            e.C && (e.C.abort(), (e.C = null)),
              e.b && (e.b.cancel(), (e.b = null)),
              e.l && (k.clearTimeout(e.l), (e.l = null)),
              De(e),
              e.c.cancel(),
              e.m && (k.clearTimeout(e.m), (e.m = null))
          }
          function Ee(e, t) {
            1e3 == e.g.length &&
              J(e.a, function() {
                return 'Already have 1000 queued maps upon queueing ' + Db(t)
              }),
              e.g.push(new Zd(e.Za++, t)),
              3 == e.F && Fe(e)
          }
          function Fe(e) {
            de(e.c) || e.m || ((e.m = Ec(r(e.Qa, e), 0)), (e.v = 0))
          }
          function Ge(e, t) {
            var n = e.c
            return (n.b ? 1 : n.a ? n.a.a.c : 0) >= e.c.f - (e.m ? 1 : 0)
              ? (J(e.a, 'Unexpected retry request is scheduled.'), !1)
              : e.m
                ? (H(e.a, 'Use the retry request that is already scheduled.'),
                  (e.g = t.u.concat(e.g)),
                  !0)
                : !(1 == e.F || 2 == e.F || e.v >= (e.Xa ? 0 : e.Ya)) &&
                  (H(e.a, 'Going to retry POST'),
                  (e.m = Ec(r(e.Qa, e, t), He(e, e.v))),
                  e.v++,
                  !0)
          }
          function Je(e, t) {
            var n
            n = t ? t.c : e.R++
            var r = M(e.D)
            R(r, 'SID', e.J),
              R(r, 'RID', n),
              R(r, 'AID', e.N),
              Be(e, r),
              e.h && e.i && xe(r, e.h, e.i),
              (n = new L(e, e.a, n, e.v + 1)),
              null === e.h && (n.j = e.i),
              t && (e.g = t.u.concat(e.g)),
              (t = Ie(e, n)),
              n.setTimeout(
                Math.round(0.5 * e.wa) + Math.round(0.5 * e.wa * Math.random())
              ),
              ce(e.c, n),
              Vc(n, r, t)
          }
          function Be(e, t) {
            e.f &&
              md({}, function(e, n) {
                R(t, n, e)
              })
          }
          function Ie(e, t) {
            var n = Math.min(e.g.length, 1e3),
              o = e.f ? r(e.f.ab, e.f, e) : null
            e: for (var i = e.g, a = -1; ; ) {
              var s = ['count=' + n]
              ;-1 == a
                ? 0 < n ? ((a = i[0].a), s.push('ofs=' + a)) : (a = 0)
                : s.push('ofs=' + a)
              for (var u = !0, c = 0; c < n; c++) {
                var h = i[c].a,
                  l = i[c].b
                if (0 > (h -= a)) (a = Math.max(0, i[c].a - 100)), (u = !1)
                else
                  try {
                    ke(l, s, 'req' + h + '_')
                  } catch (e) {
                    o && o(l)
                  }
              }
              if (u) {
                o = s.join('&')
                break e
              }
            }
            return (e = e.g.splice(0, n)), (t.u = e), o
          }
          function Ke(e) {
            if (!e.b && !e.l) {
              e.T = 1
              var t = e.Pa
              Tb || Ub(), Wb || (Tb(), (Wb = !0)), Pb.add(t, e), (e.B = 0)
            }
          }
          function Le(e) {
            return e.b || e.l
              ? (J(e.a, 'Request already in progress'), !1)
              : !(3 <= e.B) &&
                  (H(e.a, 'Going to retry GET'),
                  e.T++,
                  (e.l = Ec(r(e.Pa, e), He(e, e.B))),
                  e.B++,
                  !0)
          }
          function Td(e, t, n) {
            H(e.a, 'Test Connection Finished')
            var r = t.l
            r && be(e.c, r),
              (e.ka = n),
              (e.u = t.f),
              H(e.a, 'connectChannel_()'),
              (e.D = Me(e, e.ja)),
              Fe(e)
          }
          function Vd(e, t) {
            H(e.a, 'Test Connection Failed'), (e.u = t.f), V(e, 2)
          }
          function De(e) {
            null != e.s && (k.clearTimeout(e.s), (e.s = null))
          }
          function He(e, t) {
            var n = e.Wa + Math.floor(Math.random() * e.$a)
            return e.qa() || (H(e.a, 'Inactive channel'), (n *= 2)), n * t
          }
          function V(e, t) {
            if ((F(e.a, 'Error code ' + t), 2 == t)) {
              var n = null
              e.f && (n = null)
              var o = r(e.pb, e)
              n ||
                ((n = new Q('//www.google.com/images/cleardot.gif')),
                (k.location && 'http' == k.location.protocol) || sd(n, 'https'),
                Wc(n)),
                le(n.toString(), o)
            } else K(2)
            H(e.a, 'HttpChannel: error - ' + t),
              (e.F = 0),
              e.f && e.f.Ba(t),
              Ce(e),
              Ae(e)
          }
          function Ce(e) {
            if (((e.F = 0), (e.u = -1), e.f)) {
              var t = ge(e.c)
              ;(0 == t.length && 0 == e.g.length) ||
                (H(e.a, function() {
                  return (
                    'Number of undelivered maps, pending: ' +
                    t.length +
                    ', outgoing: ' +
                    e.g.length
                  )
                }),
                (e.c.c.length = 0),
                wa(e.g),
                (e.g.length = 0)),
                e.f.Aa()
            }
          }
          function Me(e, t) {
            return (t = Ne(e, null, t)), H(e.a, 'GetForwardChannelUri: ' + t), t
          }
          function Ud(e, t, n) {
            return (
              (t = Ne(e, e.ia() ? t : null, n)),
              H(e.a, 'GetBackChannelUri: ' + t),
              t
            )
          }
          function Ne(e, t, n) {
            var r = Hd(n)
            if ('' != r.b) t && td(r, t + '.' + r.b), ud(r, r.i)
            else {
              var o,
                i = k.location
              ;(o = t ? t + '.' + i.hostname : i.hostname),
                (r = Id(i.protocol, o, i.port, n))
            }
            return (
              e.U &&
                Ca(e.U, function(e, t) {
                  R(r, t, e)
                }),
              (t = e.j),
              (n = e.K),
              t && n && R(r, t, n),
              R(r, 'VER', e.na),
              Be(e, r),
              r
            )
          }
          function Oe() {}
          function Pe(e) {
            for (var t = arguments[0], n = 1; n < arguments.length; n++) {
              var r,
                o = arguments[n]
              if (0 == o.lastIndexOf('/', 0)) t = o
              else
                (r = '' == t) ||
                  (r = 0 <= (r = t.length - 1) && t.indexOf('/', r) == r),
                  (t += r ? o : '/' + o)
            }
            return t
          }
          function Qe() {
            if (z && !(10 <= Number(Wa)))
              throw Error('Environmental error: no available transport.')
          }
          function W(e, t) {
            B.call(this),
              (this.a = new ye(t)),
              (this.b = e),
              (this.o = t && t.testUrl ? t.testUrl : Pe(this.b, 'test')),
              (this.c = qc('goog.labs.net.webChannel.WebChannelBaseTransport')),
              (this.g = (t && t.messageUrlParams) || null),
              (e = (t && t.messageHeaders) || null),
              t &&
                t.clientProtocolHeaderRequired &&
                (e
                  ? (e['X-Client-Protocol'] = 'webchannel')
                  : (e = {'X-Client-Protocol': 'webchannel'})),
              (this.a.i = e),
              (e = (t && t.initMessageHeaders) || null),
              t &&
                t.messageContentType &&
                (e
                  ? (e['X-WebChannel-Content-Type'] = t.messageContentType)
                  : (e = {'X-WebChannel-Content-Type': t.messageContentType})),
              t &&
                t.Ea &&
                (e
                  ? (e['X-WebChannel-Client-Profile'] = t.Ea)
                  : (e = {'X-WebChannel-Client-Profile': t.Ea})),
              (this.a.L = e),
              (e = t && t.httpHeadersOverwriteParam) &&
                !xa(e) &&
                (this.a.h = e),
              (this.l = (t && t.supportsCrossDomainXhr) || !1),
              (this.j = (t && t.sendRawJson) || !1),
              (t = t && t.httpSessionIdParam) &&
                !xa(t) &&
                ((this.a.j = t),
                null !== (e = this.g) &&
                  t in e &&
                  (t in (e = this.g) && delete e[t],
                  D(
                    this.c,
                    'Ignore httpSessionIdParam also specified with messageUrlParams: ' +
                      t
                  ))),
              (this.h = new Re(this))
          }
          function Se(e) {
            Mc.call(this)
            var t = e.__sm__
            if (t) {
              e: {
                for (var n in t) {
                  e = n
                  break e
                }
                e = void 0
              }
              ;(this.c = e)
                ? ((e = this.c),
                  (this.data = null !== t && e in t ? t[e] : void 0))
                : (this.data = t)
            } else this.data = e
          }
          function Te() {
            Nc.call(this), (this.status = 1)
          }
          function Re(e) {
            this.a = e
          }
          ;(g = T.prototype),
            (g.fa = function(e, t, n, o) {
              if (this.a)
                throw Error(
                  '[goog.net.XhrIo] Object is active with another request=' +
                    this.B +
                    '; newUri=' +
                    e
                )
              ;(t = t ? t.toUpperCase() : 'GET'),
                (this.B = e),
                (this.g = ''),
                (this.j = 0),
                (this.K = t),
                (this.G = !1),
                (this.c = !0),
                (this.a = this.s ? Qc(this.s) : Qc(Oc)),
                (this.D = this.s ? Ic(this.s) : Ic(Oc)),
                (this.a.onreadystatechange = r(this.Na, this))
              try {
                E(this.b, U(this, 'Opening Xhr')),
                  (this.I = !0),
                  this.a.open(t, String(e), !0),
                  (this.I = !1)
              } catch (e) {
                return (
                  E(this.b, U(this, 'Error opening Xhr: ' + e.message)),
                  void qe(this, e)
                )
              }
              e = n || ''
              var i = new O(this.headers)
              o &&
                md(o, function(e, t) {
                  i.set(t, e)
                }),
                (o = sa(i.M())),
                (n = k.FormData && e instanceof k.FormData),
                !(0 <= qa(pe, t)) ||
                  o ||
                  n ||
                  i.set(
                    'Content-Type',
                    'application/x-www-form-urlencoded;charset=utf-8'
                  ),
                i.forEach(function(e, t) {
                  this.a.setRequestHeader(t, e)
                }, this),
                this.L && (this.a.responseType = this.L),
                'withCredentials' in this.a &&
                  this.a.withCredentials !== this.o &&
                  (this.a.withCredentials = this.o)
              try {
                re(this),
                  0 < this.l &&
                    ((this.v = se(this.a)),
                    E(
                      this.b,
                      U(
                        this,
                        'Will abort after ' +
                          this.l +
                          'ms if incomplete, xhr2 ' +
                          this.v
                      )
                    ),
                    this.v
                      ? ((this.a.timeout = this.l),
                        (this.a.ontimeout = r(this.Ka, this)))
                      : (this.C = Zb(this.Ka, this.l, this))),
                  E(this.b, U(this, 'Sending request')),
                  (this.u = !0),
                  this.a.send(e),
                  (this.u = !1)
              } catch (e) {
                E(this.b, U(this, 'Send error: ' + e.message)), qe(this, e)
              }
            }),
            (g.Ka = function() {
              void 0 !== goog &&
                this.a &&
                ((this.g = 'Timed out after ' + this.l + 'ms, aborting'),
                (this.j = 8),
                E(this.b, U(this, this.g)),
                this.dispatchEvent('timeout'),
                this.abort(8))
            }),
            (g.abort = function(e) {
              this.a &&
                this.c &&
                (E(this.b, U(this, 'Aborting')),
                (this.c = !1),
                (this.h = !0),
                this.a.abort(),
                (this.h = !1),
                (this.j = e || 7),
                this.dispatchEvent('complete'),
                this.dispatchEvent('abort'),
                ue(this))
            }),
            (g.w = function() {
              this.a &&
                (this.c &&
                  ((this.c = !1), (this.h = !0), this.a.abort(), (this.h = !1)),
                ue(this, !0)),
                T.H.w.call(this)
            }),
            (g.Na = function() {
              this.i || (this.I || this.u || this.h ? ve(this) : this.jb())
            }),
            (g.jb = function() {
              ve(this)
            }),
            (g.W = function() {
              try {
                return 2 < N(this) ? this.a.status : -1
              } catch (e) {
                return -1
              }
            }),
            (g.Ha = function() {
              try {
                return 2 < N(this) ? this.a.statusText : ''
              } catch (e) {
                return E(this.b, 'Can not get status: ' + e.message), ''
              }
            }),
            (g.V = function() {
              try {
                return this.a ? this.a.responseText : ''
              } catch (e) {
                return E(this.b, 'Can not get responseText: ' + e.message), ''
              }
            }),
            (g.eb = function(e) {
              if (this.a) {
                var t = this.a.responseText
                e && 0 == t.indexOf(e) && (t = t.substring(e.length))
                e: {
                  if (((e = t), k.JSON))
                    try {
                      var n = k.JSON.parse(e)
                      break e
                    } catch (e) {}
                  n = Cb(e)
                }
                return n
              }
            }),
            (g.Ga = function() {
              return this.j
            }),
            (g.hb = function() {
              return l(this.g) ? this.g : String(this.g)
            }),
            (g = ye.prototype),
            (g.na = 8),
            (g.F = 1),
            (g.La = function() {
              return 0 == this.F
            }),
            (g.Qa = function(e) {
              if (
                ((this.m = null),
                H(this.a, 'startForwardChannel_'),
                1 == this.F)
              )
                if (e) J(this.a, 'Not supposed to retry the open')
                else {
                  H(this.a, 'open_()'),
                    (this.R = Math.floor(1e5 * Math.random())),
                    (e = this.R++)
                  var t = new L(this, this.a, e, void 0),
                    n = this.i
                  this.L && (n ? Ha((n = Fa(n)), this.L) : (n = this.L)),
                    null === this.h && (t.j = n)
                  var r = Ie(this, t),
                    o = M(this.D)
                  R(o, 'RID', e),
                    R(o, 'CVER', 22),
                    this.o && this.j && R(o, 'X-HTTP-Session-Id', this.j),
                    Be(this, o),
                    this.h && n && xe(o, this.h, n),
                    ce(this.c, t),
                    this.va
                      ? (R(o, '$req', r),
                        R(o, 'SID', 'null'),
                        (t.X = !0),
                        Vc(t, o, null))
                      : Vc(t, o, r),
                    (this.F = 2)
                }
              else
                3 == this.F &&
                  (e
                    ? Je(this, e)
                    : 0 == this.g.length
                      ? H(
                          this.a,
                          'startForwardChannel_ returned: nothing to send'
                        )
                      : de(this.c)
                        ? J(
                            this.a,
                            'startForwardChannel_ returned: connection already in progress'
                          )
                        : (Je(this),
                          H(
                            this.a,
                            'startForwardChannel_ finished, sent request'
                          )))
            }),
            (g.Pa = function() {
              ;(this.l = null),
                H(this.a, 'Creating new HttpRequest'),
                (this.b = new L(this, this.a, 'rpc', this.T)),
                null === this.h && (this.b.j = this.i),
                (this.b.N = 0)
              var e = M(this.ua)
              R(e, 'RID', 'rpc'),
                R(e, 'SID', this.J),
                R(e, 'CI', this.ka ? '0' : '1'),
                R(e, 'AID', this.N),
                Be(this, e),
                R(e, 'TYPE', 'xmlhttp'),
                this.h && this.i && xe(e, this.h, this.i),
                this.G && this.b.setTimeout(this.G),
                Yc(this.b, e, !0, this.X),
                H(this.a, 'New Request created')
            }),
            (g.Oa = function(e, t) {
              if (0 != this.F && (this.b == e || ee(this.c, e)))
                if (((this.u = e.C), !e.v && ee(this.c, e) && 3 == this.F)) {
                  try {
                    var n = this.la.a.parse(t)
                  } catch (e) {
                    n = null
                  }
                  if (p(n) && 3 == n.length)
                    if (0 == (t = n)[0])
                      e: if (
                        (H(this.a, 'Server claims our backchannel is missing.'),
                        this.l)
                      )
                        H(this.a, 'But we are currently starting the request.')
                      else {
                        if (this.b) {
                          if (!(this.b.D + 3e3 < e.D)) break e
                          De(this), this.b.cancel(), (this.b = null)
                        } else
                          D(
                            this.a.a,
                            'We do not have a BackChannel established'
                          )
                        Le(this), K(18)
                      }
                    else
                      (this.xa = t[1]),
                        0 < (e = this.xa - this.N) &&
                          ((t = t[2]),
                          H(
                            this.a,
                            t +
                              ' bytes (in ' +
                              e +
                              ' arrays) are outstanding on the BackChannel'
                          ),
                          37500 > t &&
                            this.ka &&
                            0 == this.B &&
                            !this.s &&
                            (this.s = Ec(r(this.ib, this), 6e3)))
                  else H(this.a, 'Bad POST response data returned'), V(this, 11)
                } else if (((e.v || this.b == e) && De(this), !xa(t)))
                  for (t = n = this.la.a.parse(t), n = 0; n < t.length; n++) {
                    var o = t[n]
                    if (((this.N = o[0]), (o = o[1]), 2 == this.F))
                      if ('c' == o[0]) {
                        ;(this.J = o[1]), (this.X = o[2])
                        var i = o[3]
                        null != i &&
                          ((this.na = i), F(this.a, 'VER=' + this.na)),
                          null != (i = o[4]) &&
                            ((this.ya = i), F(this.a, 'SVER=' + this.ya)),
                          null != (o = o[5]) &&
                            'number' == typeof o &&
                            0 < o &&
                            ((this.G = o *= 1.5),
                            F(this.a, 'backChannelRequestTimeoutMs_=' + o)),
                          this.o &&
                            (o = e.a) &&
                            ((i = id(o, 'X-Client-Wire-Protocol')) &&
                              be(this.c, i),
                            this.j &&
                              ((o = id(o, 'X-HTTP-Session-Id'))
                                ? ((this.K = o), R(this.D, this.j, o))
                                : D(
                                    this.a.a,
                                    'Missing X_HTTP_SESSION_ID in the handshake response'
                                  ))),
                          (this.F = 3),
                          this.f && this.f.Da(),
                          (o = e),
                          (this.ua = Ud(this, this.X, this.ja)),
                          o.v
                            ? (H(
                                this.a,
                                'Upgrade the handshake request to a backchannel.'
                              ),
                              fe(this.c, o),
                              (i = this.G) && o.setTimeout(i),
                              o.s && (bd(o), Zc(o)),
                              (this.b = o))
                            : Ke(this)
                      } else ('stop' != o[0] && 'close' != o[0]) || V(this, 7)
                    else
                      3 == this.F &&
                        ('stop' == o[0] || 'close' == o[0]
                          ? 'stop' == o[0] ? V(this, 7) : ze(this)
                          : 'noop' != o[0] && this.f && this.f.Ca(o),
                        (this.B = 0))
                  }
            }),
            (g.ib = function() {
              null != this.s &&
                ((this.s = null),
                this.b.cancel(),
                (this.b = null),
                Le(this),
                K(19))
            }),
            (g.ta = function(e) {
              H(this.a, 'Request complete')
              var n = null
              if (this.b == e) {
                De(this), (this.b = null)
                var r = 2
              } else {
                if (!ee(this.c, e)) return
                ;(n = e.u), fe(this.c, e), (r = 1)
              }
              if (((this.u = e.C), 0 != this.F))
                if (e.f)
                  1 == r
                    ? (Dc(e.l ? e.l.length : 0, t() - e.D, this.v), Fe(this))
                    : Ke(this)
                else {
                  var o = e.m
                  if (3 == o || (0 == o && 0 < this.u))
                    H(this.a, 'Not retrying due to error type')
                  else {
                    var i = this
                    if (
                      (H(this.a, function() {
                        return 'Maybe retrying, last error: ' + Sc(o, i.u)
                      }),
                      (1 == r && Ge(this, e)) || (2 == r && Le(this)))
                    )
                      return
                    H(this.a, 'Exceeded max number of retries')
                  }
                  switch ((n && 0 < n.length && he(this.c, n),
                  H(this.a, 'Error: HTTP request failed'),
                  o)) {
                    case 1:
                      V(this, 5)
                      break
                    case 4:
                      V(this, 10)
                      break
                    case 3:
                      V(this, 6)
                      break
                    default:
                      V(this, 2)
                  }
                }
            }),
            (g.pb = function(e) {
              e
                ? (F(this.a, 'Successfully pinged google.com'), K(2))
                : (F(this.a, 'Failed to ping google.com'), K(1))
            }),
            (g.ca = function(e) {
              if (e && !this.S)
                throw Error(
                  "Can't create secondary domain capable XhrIo object."
                )
              return ((e = new T(this.Ta)).o = this.S), e
            }),
            (g.qa = function() {
              return !!this.f && !0
            }),
            (g.ia = function() {
              return this.S
            }),
            (g = Oe.prototype),
            (g.Da = function() {}),
            (g.Ca = function() {}),
            (g.Ba = function() {}),
            (g.Aa = function() {}),
            (g.ab = function() {}),
            (Qe.prototype.a = function(e, t) {
              return new W(e, t)
            }),
            u(W, B),
            (g = W.prototype),
            (g.addEventListener = function(e, t, n, r) {
              W.H.addEventListener.call(this, e, t, n, r)
            }),
            (g.removeEventListener = function(e, t, n, r) {
              W.H.removeEventListener.call(this, e, t, n, r)
            }),
            (g.fb = function() {
              ;(this.a.f = this.h), this.l && (this.a.S = !0)
              var e = this.a,
                t = this.o,
                n = this.b,
                r = this.g || void 0
              H(e.a, 'connect()'),
                K(0),
                (e.ja = n),
                (e.U = r || {}),
                e.o &&
                  (H(e.a, 'connect() bypassed channel-test.'),
                  (e.I.b = []),
                  (e.I.a = !1)),
                H(e.a, 'connectTest_()'),
                (e.C = new Rd(e, e.a)),
                null === e.h && (e.C.i = e.i),
                (n = t),
                e.h && e.i && (n = xe(t, e.h, e.i)),
                ((e = e.C).m = n),
                (t = Me(e.a, e.m)),
                K(3),
                null != (n = e.a.I.b)
                  ? ((e.g = n[0]), (e.P = 1), Sd(e))
                  : ($c(t, 'MODE', 'init'),
                    !e.a.o && e.a.j && $c(t, 'X-HTTP-Session-Id', e.a.j),
                    (e.c = new L(e, e.b, void 0, void 0)),
                    (e.c.j = e.i),
                    Yc(e.c, t, !1, null),
                    (e.P = 0))
            }),
            (g.close = function() {
              ze(this.a)
            }),
            (g.gb = function(e) {
              if (l(e)) {
                var t = {}
                ;(t.__data__ = e), Ee(this.a, t)
              } else
                this.j
                  ? (((t = {}).__data__ = Db(e)), Ee(this.a, t))
                  : Ee(this.a, e)
            }),
            (g.w = function() {
              ;(this.a.f = null),
                delete this.h,
                ze(this.a),
                delete this.a,
                W.H.w.call(this)
            }),
            u(Se, Mc),
            u(Te, Nc),
            u(Re, Oe),
            (Re.prototype.Da = function() {
              rc(this.a.c, 'WebChannel opened on ' + this.a.b),
                this.a.dispatchEvent('a')
            }),
            (Re.prototype.Ca = function(e) {
              this.a.dispatchEvent(new Se(e))
            }),
            (Re.prototype.Ba = function(e) {
              rc(
                this.a.c,
                'WebChannel aborted on ' +
                  this.a.b +
                  ' due to channel error: ' +
                  e
              ),
                this.a.dispatchEvent(new Te(e))
            }),
            (Re.prototype.Aa = function() {
              rc(this.a.c, 'WebChannel closed on ' + this.a.b),
                this.a.dispatchEvent('b')
            })
          var Ue = ja(function(e, t) {
            function n() {}
            n.prototype = e.prototype
            var r = new n()
            return e.apply(r, Array.prototype.slice.call(arguments, 1)), r
          }, Qe)
          function Ve() {
            ;(this.b = []), (this.a = [])
          }
          function We(e) {
            return (
              0 == e.b.length && ((e.b = e.a), e.b.reverse(), (e.a = [])),
              e.b.pop()
            )
          }
          function Xe(e) {
            return e.b.length + e.a.length
          }
          function Ye(e, t) {
            if (
              (w.call(this),
              (this.h = e || 0),
              (this.c = t || 10),
              this.h > this.c)
            )
              throw Error(Ze)
            ;(this.a = new Ve()),
              (this.b = new Xd()),
              (this.g = null),
              this.aa()
          }
          ;(Ve.prototype.A = function() {
            for (var e = [], t = this.b.length - 1; 0 <= t; --t)
              e.push(this.b[t])
            var n = this.a.length
            for (t = 0; t < n; ++t) e.push(this.a[t])
            return e
          }),
            u(Ye, w)
          var Ze = '[goog.structs.Pool] Min can not be greater than max'
          function af(e) {
            if ('function' == typeof e.$) e.$()
            else for (var t in e) e[t] = null
          }
          function $e(e) {
            return Xe(e.a) + e.b.a.c
          }
          function bf(e, t) {
            ;(this.a = e), (this.b = t)
          }
          function cf(e) {
            if (((this.a = []), e))
              e: {
                if (e instanceof cf) {
                  var t = e.M()
                  if (((e = e.A()), 0 >= this.a.length)) {
                    for (var n = this.a, r = 0; r < t.length; r++)
                      n.push(new bf(t[r], e[r]))
                    break e
                  }
                } else (t = Ea(e)), (e = Da(e))
                for (r = 0; r < t.length; r++) df(this, t[r], e[r])
              }
          }
          function df(e, t, n) {
            var r = e.a
            for (
              r.push(new bf(t, n)), t = r.length - 1, n = (e = e.a)[t];
              0 < t && e[(r = (t - 1) >> 1)].a > n.a;

            )
              (e[t] = e[r]), (t = r)
            e[t] = n
          }
          function ef() {
            cf.call(this)
          }
          function Y(e, t) {
            ;(this.f = new ef()), Ye.call(this, e, t)
          }
          function Z(e, t, n, r) {
            ;(this.l = e), (this.j = !!r), Y.call(this, t, n)
          }
          ;(g = Ye.prototype),
            (g.da = function() {
              var e = t()
              if (!(null != this.g && 0 > e - this.g)) {
                for (var n; 0 < Xe(this.a) && ((n = We(this.a)), !this.sa(n)); )
                  this.aa()
                return (
                  !n && $e(this) < this.c && (n = this.pa()),
                  n && ((this.g = e), this.b.add(n)),
                  n
                )
              }
            }),
            (g.ob = function(e) {
              return !!pd(this.b.a, Yd(e)) && (this.ma(e), !0)
            }),
            (g.ma = function(e) {
              pd(this.b.a, Yd(e)),
                this.sa(e) && $e(this) < this.c ? this.a.a.push(e) : af(e)
            }),
            (g.aa = function() {
              for (var e = this.a; $e(this) < this.h; ) {
                var t = this.pa()
                e.a.push(t)
              }
              for (; $e(this) > this.c && 0 < Xe(this.a); ) af(We(e))
            }),
            (g.pa = function() {
              return {}
            }),
            (g.sa = function(e) {
              return 'function' != typeof e.bb || e.bb()
            }),
            (g.w = function() {
              if ((Ye.H.w.call(this), 0 < this.b.a.c))
                throw Error('[goog.structs.Pool] Objects not released')
              delete this.b
              for (var e = this.a; 0 != e.b.length || 0 != e.a.length; )
                af(We(e))
              delete this.a
            }),
            (cf.prototype.A = function() {
              for (var e = this.a, t = [], n = e.length, r = 0; r < n; r++)
                t.push(e[r].b)
              return t
            }),
            (cf.prototype.M = function() {
              for (var e = this.a, t = [], n = e.length, r = 0; r < n; r++)
                t.push(e[r].a)
              return t
            }),
            u(ef, cf),
            u(Y, Ye),
            (g = Y.prototype),
            (g.da = function(e, t) {
              if (!e) return Y.H.da.call(this)
              df(this.f, void 0 !== t ? t : 100, e), this.ra()
            }),
            (g.ra = function() {
              for (var e = this.f; 0 < e.a.length; ) {
                var t = this.da()
                if (!t) break
                var n = e,
                  r = n.a,
                  o = r.length,
                  i = r[0]
                if (0 >= o) i = void 0
                else {
                  if (1 == o) ua(r)
                  else {
                    ;(r[0] = r.pop()), (r = 0), (o = (n = n.a).length)
                    for (var a = n[r]; r < o >> 1; ) {
                      var s = 2 * r + 1,
                        u = 2 * r + 2
                      if (n[(s = u < o && n[u].a < n[s].a ? u : s)].a > a.a)
                        break
                      ;(n[r] = n[s]), (r = s)
                    }
                    n[r] = a
                  }
                  i = i.b
                }
                i.apply(this, [t])
              }
            }),
            (g.ma = function(e) {
              Y.H.ma.call(this, e), this.ra()
            }),
            (g.aa = function() {
              Y.H.aa.call(this), this.ra()
            }),
            (g.w = function() {
              Y.H.w.call(this),
                k.clearTimeout(void 0),
                ua(this.f.a),
                (this.f = null)
            }),
            u(Z, Y),
            (Z.prototype.pa = function() {
              var e = new T(),
                t = this.l
              return (
                t &&
                  t.forEach(function(t, n) {
                    e.headers.set(n, t)
                  }),
                this.j && (e.o = !0),
                e
              )
            }),
            (Z.prototype.sa = function(e) {
              return !e.i && !e.a
            }),
            (Qe.prototype.createWebChannel = Qe.prototype.a),
            (W.prototype.send = W.prototype.gb),
            (W.prototype.open = W.prototype.fb),
            (W.prototype.close = W.prototype.close),
            (Fc.NO_ERROR = 0),
            (Fc.TIMEOUT = 8),
            (Fc.HTTP_ERROR = 6),
            (Gc.COMPLETE = 'complete'),
            (Kc.EventType = Lc),
            (Lc.OPEN = 'a'),
            (Lc.CLOSE = 'b'),
            (Lc.ERROR = 'c'),
            (Lc.MESSAGE = 'd'),
            (B.prototype.listen = B.prototype.Ia),
            (Z.prototype.getObject = Z.prototype.da),
            (Z.prototype.releaseObject = Z.prototype.ob),
            (T.prototype.listenOnce = T.prototype.Ja),
            (T.prototype.getLastError = T.prototype.hb),
            (T.prototype.getLastErrorCode = T.prototype.Ga),
            (T.prototype.getStatus = T.prototype.W),
            (T.prototype.getStatusText = T.prototype.Ha),
            (T.prototype.getResponseJson = T.prototype.eb),
            (T.prototype.getResponseText = T.prototype.V),
            (T.prototype.getResponseText = T.prototype.V),
            (T.prototype.send = T.prototype.fa),
            (module.exports = {
              createWebChannelTransport: Ue,
              ErrorCode: Fc,
              EventType: Gc,
              WebChannel: Kc,
              XhrIoPool: Z
            })
        }.call(
          void 0 !== commonjsGlobal
            ? commonjsGlobal
            : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window ? window : {}
        ))
      }),
      dist_1 = dist.createWebChannelTransport,
      dist_2 = dist.ErrorCode,
      dist_3 = dist.EventType,
      dist_4 = dist.WebChannel,
      dist_5 = dist.XhrIoPool,
      SDK_VERSION = firebase.SDK_VERSION,
      logClient = new Logger('@firebase/firestore'),
      LogLevel$1
    function getLogLevel() {
      return logClient.logLevel === LogLevel.DEBUG
        ? LogLevel$1.DEBUG
        : logClient.logLevel === LogLevel.SILENT
          ? LogLevel$1.SILENT
          : LogLevel$1.ERROR
    }
    function setLogLevel$1(e) {
      switch (e) {
        case LogLevel$1.DEBUG:
          logClient.logLevel = LogLevel.DEBUG
          break
        case LogLevel$1.ERROR:
          logClient.logLevel = LogLevel.ERROR
          break
        case LogLevel$1.SILENT:
          logClient.logLevel = LogLevel.SILENT
          break
        default:
          logClient.error(
            'Firestore (' +
              SDK_VERSION +
              '): Invalid value passed to `setLogLevel`'
          )
      }
    }
    function debug(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
      if (logClient.logLevel <= LogLevel.DEBUG) {
        var o = n.map(argToString)
        logClient.debug.apply(
          logClient,
          ['Firestore (' + SDK_VERSION + ') [' + e + ']: ' + t].concat(o)
        )
      }
    }
    function error(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      if (logClient.logLevel <= LogLevel.ERROR) {
        var r = t.map(argToString)
        logClient.error.apply(
          logClient,
          ['Firestore (' + SDK_VERSION + '): ' + e].concat(r)
        )
      }
    }
    function argToString(e) {
      if ('string' == typeof e) return e
      var t = PlatformSupport.getPlatform()
      try {
        return t.formatJSON(e)
      } catch (t) {
        return e
      }
    }
    function fail(e) {
      var t = 'FIRESTORE (' + SDK_VERSION + ') INTERNAL ASSERTION FAILED: ' + e
      throw (error(t), new Error(t))
    }
    function assert(e, t) {
      e || fail(t)
    }
    ;(LogLevel$$1 = LogLevel$1 || (LogLevel$1 = {})),
      (LogLevel$$1[(LogLevel$$1.DEBUG = 0)] = 'DEBUG'),
      (LogLevel$$1[(LogLevel$$1.ERROR = 1)] = 'ERROR'),
      (LogLevel$$1[(LogLevel$$1.SILENT = 2)] = 'SILENT')
    var PlatformSupport = (function() {
      function e() {}
      return (
        (e.setPlatform = function(t) {
          e.platform && fail('Platform already defined'), (e.platform = t)
        }),
        (e.getPlatform = function() {
          return e.platform || fail('Platform not set'), e.platform
        }),
        e
      )
    })()
    function emptyByteString() {
      return PlatformSupport.getPlatform().emptyByteString
    }
    var Code = {
        OK: 'ok',
        CANCELLED: 'cancelled',
        UNKNOWN: 'unknown',
        INVALID_ARGUMENT: 'invalid-argument',
        DEADLINE_EXCEEDED: 'deadline-exceeded',
        NOT_FOUND: 'not-found',
        ALREADY_EXISTS: 'already-exists',
        PERMISSION_DENIED: 'permission-denied',
        UNAUTHENTICATED: 'unauthenticated',
        RESOURCE_EXHAUSTED: 'resource-exhausted',
        FAILED_PRECONDITION: 'failed-precondition',
        ABORTED: 'aborted',
        OUT_OF_RANGE: 'out-of-range',
        UNIMPLEMENTED: 'unimplemented',
        INTERNAL: 'internal',
        UNAVAILABLE: 'unavailable',
        DATA_LOSS: 'data-loss'
      },
      FirestoreError = (function(e) {
        function t(t, n) {
          var r = e.call(this, n) || this
          return (
            (r.code = t),
            (r.message = n),
            (r.name = 'FirebaseError'),
            (r.toString = function() {
              return r.name + ': [code=' + r.code + ']: ' + r.message
            }),
            r
          )
        }
        return __extends(t, e), t
      })(Error)
    function makeConstructorPrivate(e, t) {
      function n() {
        var e = 'This constructor is private.'
        throw (t && ((e += ' '), (e += t)),
        new FirestoreError(Code.INVALID_ARGUMENT, e))
      }
      for (var r in ((n.prototype = e.prototype), e))
        e.hasOwnProperty(r) && (n[r] = e[r])
      return n
    }
    function contains(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    function defaulted(e, t) {
      return void 0 !== e ? e : t
    }
    function forEachNumber(e, t) {
      for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var r = Number(n)
          isNaN(r) || t(r, e[n])
        }
    }
    function forEach(e, t) {
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
    }
    function isEmpty(e) {
      for (var t in (assert(
        null != e && 'object' == typeof e,
        'isEmpty() expects object parameter.'
      ),
      e))
        if (Object.prototype.hasOwnProperty.call(e, t)) return !1
      return !0
    }
    function shallowCopy(e) {
      assert(
        e && 'object' == typeof e,
        'shallowCopy() expects object parameter.'
      )
      var t = {}
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      return t
    }
    function validateExactNumberOfArgs(e, t, n) {
      if (t.length !== n)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Function ' +
            e +
            '() requires ' +
            formatPlural(n, 'argument') +
            ', but was called with ' +
            formatPlural(t.length, 'argument') +
            '.'
        )
    }
    function validateAtLeastNumberOfArgs(e, t, n) {
      if (t.length < n)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Function ' +
            e +
            '() requires at least ' +
            formatPlural(n, 'argument') +
            ', but was called with ' +
            formatPlural(t.length, 'argument') +
            '.'
        )
    }
    function validateBetweenNumberOfArgs(e, t, n, r) {
      if (t.length < n || t.length > r)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Function ' +
            e +
            '() requires between ' +
            n +
            ' and ' +
            r +
            ' arguments, but was called with ' +
            formatPlural(t.length, 'argument') +
            '.'
        )
    }
    function validateNamedArrayAtLeastNumberOfElements(e, t, n, r) {
      if (!(t instanceof Array) || t.length < r)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Function ' +
            e +
            '() requires its ' +
            n +
            ' argument to be an array with at least ' +
            formatPlural(r, 'element') +
            '.'
        )
    }
    function validateArgType(e, t, n, r) {
      validateType(e, t, ordinal(n) + ' argument', r)
    }
    function validateOptionalArgType(e, t, n, r) {
      void 0 !== r && validateArgType(e, t, n, r)
    }
    function validateNamedType(e, t, n, r) {
      validateType(e, t, n + ' option', r)
    }
    function validateNamedOptionalType(e, t, n, r) {
      void 0 !== r && validateNamedType(e, t, n, r)
    }
    function validateNamedPropertyEquals(e, t, n, r, o) {
      for (var i = [], a = 0, s = o; a < s.length; a++) {
        var u = s[a]
        if (u === r) return
        i.push(valueDescription(u))
      }
      var c = valueDescription(r)
      throw new FirestoreError(
        Code.INVALID_ARGUMENT,
        'Invalid value ' +
          c +
          ' provided to function ' +
          e +
          '() for option "' +
          n +
          '". Acceptable values: ' +
          i.join(', ')
      )
    }
    function validateNamedOptionalPropertyEquals(e, t, n, r, o) {
      void 0 !== r && validateNamedPropertyEquals(e, t, n, r, o)
    }
    function validateType(e, t, n, r) {
      if (typeof r !== t || ('object' === t && !isPlainObject(r))) {
        var o = valueDescription(r)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Function ' +
            e +
            '() requires its ' +
            n +
            ' to be of type ' +
            t +
            ', but it was: ' +
            o
        )
      }
    }
    function isPlainObject(e) {
      return (
        'object' == typeof e &&
        null !== e &&
        Object.getPrototypeOf(e) === Object.prototype
      )
    }
    function valueDescription(e) {
      if (void 0 === e) return 'undefined'
      if (null === e) return 'null'
      if ('string' == typeof e)
        return (
          e.length > 20 && (e = e.substring(0, 20) + '...'), JSON.stringify(e)
        )
      if ('number' == typeof e || 'boolean' == typeof e) return '' + e
      if ('object' == typeof e) {
        if (e instanceof Array) return 'an array'
        var t = tryGetCustomObjectType(e)
        return t ? 'a custom ' + t + ' object' : 'an object'
      }
      return 'function' == typeof e
        ? 'a function'
        : fail('Unknown wrong type: ' + typeof e)
    }
    function tryGetCustomObjectType(e) {
      if (e.constructor) {
        var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString())
        if (t && t.length > 1) return t[1]
      }
      return null
    }
    function validateDefined(e, t, n) {
      if (void 0 === n)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Function ' +
            e +
            '() requires a valid ' +
            ordinal(t) +
            ' argument, but it was undefined.'
        )
    }
    function validateOptionNames(e, t, n) {
      forEach(t, function(t, r) {
        if (n.indexOf(t) < 0)
          throw new FirestoreError(
            Code.INVALID_ARGUMENT,
            "Unknown option '" +
              t +
              "' passed to function " +
              e +
              '(). Available options: ' +
              n.join(', ')
          )
      })
    }
    function invalidClassError(e, t, n, r) {
      var o = valueDescription(r)
      return new FirestoreError(
        Code.INVALID_ARGUMENT,
        'Function ' +
          e +
          '() requires its ' +
          ordinal(n) +
          ' argument to be a ' +
          t +
          ', but it was: ' +
          o
      )
    }
    function ordinal(e) {
      switch (e) {
        case 1:
          return 'first'
        case 2:
          return 'second'
        case 3:
          return 'third'
        default:
          return e + 'th'
      }
    }
    function formatPlural(e, t) {
      return e + ' ' + t + (1 === e ? '' : 's')
    }
    var AutoId = (function() {
      function e() {}
      return (
        (e.newId = function() {
          for (
            var e =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              t = '',
              n = 0;
            n < 20;
            n++
          )
            t += e.charAt(Math.floor(Math.random() * e.length))
          return assert(20 === t.length, 'Invalid auto ID: ' + t), t
        }),
        e
      )
    })()
    function primitiveComparator(e, t) {
      return e < t ? -1 : e > t ? 1 : 0
    }
    function equals(e, t) {
      return null !== e && void 0 !== e ? !(!t || !e.isEqual(t)) : e === t
    }
    function arrayEquals(e, t) {
      if (e.length !== t.length) return !1
      for (var n = 0; n < e.length; n++) if (!e[n].isEqual(t[n])) return !1
      return !0
    }
    function immediatePredecessor(e) {
      var t = e.length - 1
      return 0 === e.length
        ? ''
        : '\0' === e.charAt(t)
          ? e.substring(0, t)
          : e.substring(0, t) + String.fromCharCode(e.charCodeAt(t) - 1)
    }
    function immediateSuccessor(e) {
      return e + '\0'
    }
    function assertUint8ArrayAvailable() {
      if ('undefined' == typeof Uint8Array)
        throw new FirestoreError(
          Code.UNIMPLEMENTED,
          'Uint8Arrays are not available in this environment.'
        )
    }
    function assertBase64Available() {
      if (!PlatformSupport.getPlatform().base64Available)
        throw new FirestoreError(
          Code.UNIMPLEMENTED,
          'Blobs are unavailable in Firestore in this environment.'
        )
    }
    var Blob = (function() {
        function e(e) {
          assertBase64Available(), (this._binaryString = e)
        }
        return (
          (e.fromBase64String = function(t) {
            validateExactNumberOfArgs('Blob.fromBase64String', arguments, 1),
              validateArgType('Blob.fromBase64String', 'string', 1, t),
              assertBase64Available()
            try {
              return new e(PlatformSupport.getPlatform().atob(t))
            } catch (e) {
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Failed to construct Blob from Base64 string: ' + e
              )
            }
          }),
          (e.fromUint8Array = function(t) {
            if (
              (validateExactNumberOfArgs('Blob.fromUint8Array', arguments, 1),
              assertUint8ArrayAvailable(),
              !(t instanceof Uint8Array))
            )
              throw invalidClassError('Blob.fromUint8Array', 'Uint8Array', 1, t)
            return new e(
              Array.prototype.map
                .call(t, function(e) {
                  return String.fromCharCode(e)
                })
                .join('')
            )
          }),
          (e.prototype.toBase64 = function() {
            return (
              validateExactNumberOfArgs('Blob.toBase64', arguments, 0),
              assertBase64Available(),
              PlatformSupport.getPlatform().btoa(this._binaryString)
            )
          }),
          (e.prototype.toUint8Array = function() {
            validateExactNumberOfArgs('Blob.toUint8Array', arguments, 0),
              assertUint8ArrayAvailable()
            for (
              var e = new Uint8Array(this._binaryString.length), t = 0;
              t < this._binaryString.length;
              t++
            )
              e[t] = this._binaryString.charCodeAt(t)
            return e
          }),
          (e.prototype.toString = function() {
            return 'Blob(base64: ' + this.toBase64() + ')'
          }),
          (e.prototype.isEqual = function(e) {
            return this._binaryString === e._binaryString
          }),
          (e.prototype._compareTo = function(e) {
            return primitiveComparator(this._binaryString, e._binaryString)
          }),
          e
        )
      })(),
      PublicBlob = makeConstructorPrivate(
        Blob,
        'Use Blob.fromUint8Array() or Blob.fromBase64String() instead.'
      ),
      GeoPoint = (function() {
        function e(e, t) {
          if (
            (validateExactNumberOfArgs('GeoPoint', arguments, 2),
            validateArgType('GeoPoint', 'number', 1, e),
            validateArgType('GeoPoint', 'number', 2, t),
            !isFinite(e) || e < -90 || e > 90)
          )
            throw new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Latitude must be a number between -90 and 90, but was: ' + e
            )
          if (!isFinite(t) || t < -180 || t > 180)
            throw new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Longitude must be a number between -180 and 180, but was: ' + t
            )
          ;(this._lat = e), (this._long = t)
        }
        return (
          Object.defineProperty(e.prototype, 'latitude', {
            get: function() {
              return this._lat
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'longitude', {
            get: function() {
              return this._long
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.isEqual = function(e) {
            return this._lat === e._lat && this._long === e._long
          }),
          (e.prototype._compareTo = function(e) {
            return (
              primitiveComparator(this._lat, e._lat) ||
              primitiveComparator(this._long, e._long)
            )
          }),
          e
        )
      })(),
      Timestamp = (function() {
        function e(e, t) {
          if (((this.seconds = e), (this.nanoseconds = t), t < 0))
            throw new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Timestamp nanoseconds out of range: ' + t
            )
          if (t >= 1e9)
            throw new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Timestamp nanoseconds out of range: ' + t
            )
          if (e < -62135596800)
            throw new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Timestamp seconds out of range: ' + e
            )
          if (e >= 253402300800)
            throw new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Timestamp seconds out of range: ' + e
            )
        }
        return (
          (e.now = function() {
            return e.fromMillis(Date.now())
          }),
          (e.fromDate = function(t) {
            return e.fromMillis(t.getTime())
          }),
          (e.fromMillis = function(t) {
            var n = Math.floor(t / 1e3)
            return new e(n, 1e6 * (t - 1e3 * n))
          }),
          (e.prototype.toDate = function() {
            return new Date(this.toMillis())
          }),
          (e.prototype.toMillis = function() {
            return 1e3 * this.seconds + this.nanoseconds / 1e6
          }),
          (e.prototype._compareTo = function(e) {
            return this.seconds === e.seconds
              ? primitiveComparator(this.nanoseconds, e.nanoseconds)
              : primitiveComparator(this.seconds, e.seconds)
          }),
          (e.prototype.isEqual = function(e) {
            return (
              e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
            )
          }),
          (e.prototype.toString = function() {
            return (
              'Timestamp(seconds=' +
              this.seconds +
              ', nanoseconds=' +
              this.nanoseconds +
              ')'
            )
          }),
          e
        )
      })(),
      DatabaseInfo = (function() {
        return function(e, t, n, r) {
          ;(this.databaseId = e),
            (this.persistenceKey = t),
            (this.host = n),
            (this.ssl = r)
        }
      })(),
      DEFAULT_DATABASE_NAME = '(default)',
      DatabaseId = (function() {
        function e(e, t) {
          ;(this.projectId = e), (this.database = t || DEFAULT_DATABASE_NAME)
        }
        return (
          Object.defineProperty(e.prototype, 'isDefaultDatabase', {
            get: function() {
              return this.database === DEFAULT_DATABASE_NAME
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.isEqual = function(t) {
            return (
              t instanceof e &&
              t.projectId === this.projectId &&
              t.database === this.database
            )
          }),
          (e.prototype.compareTo = function(e) {
            return (
              primitiveComparator(this.projectId, e.projectId) ||
              primitiveComparator(this.database, e.database)
            )
          }),
          e
        )
      })(),
      DOCUMENT_KEY_NAME = '__name__',
      Path = (function() {
        function e(e, t, n) {
          this.init(e, t, n)
        }
        return (
          (e.prototype.init = function(e, t, n) {
            void 0 === t
              ? (t = 0)
              : t > e.length &&
                fail('offset ' + t + ' out of range ' + e.length),
              void 0 === n
                ? (n = e.length - t)
                : n > e.length - t &&
                  fail('length ' + n + ' out of range ' + (e.length - t)),
              (this.segments = e),
              (this.offset = t),
              (this.len = n)
          }),
          (e.prototype.construct = function(e, t, n) {
            var r = Object.create(Object.getPrototypeOf(this))
            return r.init(e, t, n), r
          }),
          Object.defineProperty(e.prototype, 'length', {
            get: function() {
              return this.len
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.isEqual = function(t) {
            return 0 === e.comparator(this, t)
          }),
          (e.prototype.child = function(t) {
            var n = this.segments.slice(this.offset, this.limit())
            return (
              t instanceof e
                ? t.forEach(function(e) {
                    n.push(e)
                  })
                : 'string' == typeof t
                  ? n.push(t)
                  : fail('Unknown parameter type for Path.child(): ' + t),
              this.construct(n)
            )
          }),
          (e.prototype.limit = function() {
            return this.offset + this.length
          }),
          (e.prototype.popFirst = function(e) {
            return (
              (e = void 0 === e ? 1 : e),
              assert(
                this.length >= e,
                "Can't call popFirst() with less segments"
              ),
              this.construct(this.segments, this.offset + e, this.length - e)
            )
          }),
          (e.prototype.popLast = function() {
            return (
              assert(!this.isEmpty(), "Can't call popLast() on empty path"),
              this.construct(this.segments, this.offset, this.length - 1)
            )
          }),
          (e.prototype.firstSegment = function() {
            return (
              assert(
                !this.isEmpty(),
                "Can't call firstSegment() on empty path"
              ),
              this.segments[this.offset]
            )
          }),
          (e.prototype.lastSegment = function() {
            return (
              assert(!this.isEmpty(), "Can't call lastSegment() on empty path"),
              this.segments[this.limit() - 1]
            )
          }),
          (e.prototype.get = function(e) {
            return (
              assert(e < this.length, 'Index out of range'),
              this.segments[this.offset + e]
            )
          }),
          (e.prototype.isEmpty = function() {
            return 0 === this.length
          }),
          (e.prototype.isPrefixOf = function(e) {
            if (e.length < this.length) return !1
            for (var t = 0; t < this.length; t++)
              if (this.get(t) !== e.get(t)) return !1
            return !0
          }),
          (e.prototype.forEach = function(e) {
            for (var t = this.offset, n = this.limit(); t < n; t++)
              e(this.segments[t])
          }),
          (e.prototype.toArray = function() {
            return this.segments.slice(this.offset, this.limit())
          }),
          (e.comparator = function(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
              var o = e.get(r),
                i = t.get(r)
              if (o < i) return -1
              if (o > i) return 1
            }
            return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
          }),
          e
        )
      })(),
      ResourcePath = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          __extends(t, e),
          (t.prototype.canonicalString = function() {
            return this.toArray().join('/')
          }),
          (t.prototype.toString = function() {
            return this.canonicalString()
          }),
          (t.fromString = function(e) {
            if (e.indexOf('//') >= 0)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Invalid path (' + e + '). Paths must not contain // in them.'
              )
            return new t(
              e.split('/').filter(function(e) {
                return e.length > 0
              })
            )
          }),
          (t.EMPTY_PATH = new t([])),
          t
        )
      })(Path),
      identifierRegExp = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
      FieldPath = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          __extends(t, e),
          (t.isValidIdentifier = function(e) {
            return identifierRegExp.test(e)
          }),
          (t.prototype.canonicalString = function() {
            return this.toArray()
              .map(function(e) {
                return (
                  (e = e.replace('\\', '\\\\').replace('`', '\\`')),
                  t.isValidIdentifier(e) || (e = '`' + e + '`'),
                  e
                )
              })
              .join('.')
          }),
          (t.prototype.toString = function() {
            return this.canonicalString()
          }),
          (t.prototype.isKeyField = function() {
            return 1 === this.length && this.get(0) === DOCUMENT_KEY_NAME
          }),
          (t.keyField = function() {
            return new t([DOCUMENT_KEY_NAME])
          }),
          (t.fromServerFormat = function(e) {
            for (
              var n = [],
                r = '',
                o = 0,
                i = function() {
                  if (0 === r.length)
                    throw new FirestoreError(
                      Code.INVALID_ARGUMENT,
                      'Invalid field path (' +
                        e +
                        "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                    )
                  n.push(r), (r = '')
                },
                a = !1;
              o < e.length;

            ) {
              var s = e[o]
              if ('\\' === s) {
                if (o + 1 === e.length)
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    'Path has trailing escape character: ' + e
                  )
                var u = e[o + 1]
                if ('\\' !== u && '.' !== u && '`' !== u)
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    'Path has invalid escape sequence: ' + e
                  )
                ;(r += u), (o += 2)
              } else
                '`' === s
                  ? ((a = !a), o++)
                  : '.' !== s || a ? ((r += s), o++) : (i(), o++)
            }
            if ((i(), a))
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Unterminated ` in path: ' + e
              )
            return new t(n)
          }),
          (t.EMPTY_PATH = new t([])),
          t
        )
      })(Path),
      DocumentKey = (function() {
        function e(t) {
          ;(this.path = t),
            assert(
              e.isDocumentKey(t),
              'Invalid DocumentKey with an odd number of segments: ' +
                t.toArray().join('/')
            )
        }
        return (
          (e.prototype.isEqual = function(e) {
            return (
              null !== e && 0 === ResourcePath.comparator(this.path, e.path)
            )
          }),
          (e.prototype.toString = function() {
            return this.path.toString()
          }),
          (e.comparator = function(e, t) {
            return ResourcePath.comparator(e.path, t.path)
          }),
          (e.isDocumentKey = function(e) {
            return e.length % 2 == 0
          }),
          (e.fromSegments = function(t) {
            return new e(new ResourcePath(t.slice()))
          }),
          (e.fromPathString = function(t) {
            return new e(ResourcePath.fromString(t))
          }),
          (e.EMPTY = new e(new ResourcePath([]))),
          e
        )
      })(),
      Document = (function() {
        function e(e, t, n, r) {
          ;(this.key = e),
            (this.version = t),
            (this.data = n),
            (this.hasLocalMutations = r.hasLocalMutations)
        }
        return (
          (e.prototype.field = function(e) {
            return this.data.field(e)
          }),
          (e.prototype.fieldValue = function(e) {
            var t = this.field(e)
            return t ? t.value() : void 0
          }),
          (e.prototype.value = function() {
            return this.data.value()
          }),
          (e.prototype.isEqual = function(t) {
            return (
              t instanceof e &&
              this.key.isEqual(t.key) &&
              this.version.isEqual(t.version) &&
              this.data.isEqual(t.data) &&
              this.hasLocalMutations === t.hasLocalMutations
            )
          }),
          (e.prototype.toString = function() {
            return (
              'Document(' +
              this.key +
              ', ' +
              this.version +
              ', ' +
              this.data.toString() +
              ', {hasLocalMutations: ' +
              this.hasLocalMutations +
              '})'
            )
          }),
          (e.compareByKey = function(e, t) {
            return DocumentKey.comparator(e.key, t.key)
          }),
          (e.compareByField = function(e, t, n) {
            var r = t.field(e),
              o = n.field(e)
            return void 0 !== r && void 0 !== o
              ? r.compareTo(o)
              : fail("Trying to compare documents on fields that don't exist")
          }),
          e
        )
      })(),
      NoDocument = (function() {
        function e(e, t) {
          ;(this.key = e), (this.version = t)
        }
        return (
          (e.prototype.toString = function() {
            return 'NoDocument(' + this.key + ', ' + this.version + ')'
          }),
          (e.prototype.isEqual = function(e) {
            return (
              e && e.version.isEqual(this.version) && e.key.isEqual(this.key)
            )
          }),
          (e.compareByKey = function(e, t) {
            return DocumentKey.comparator(e.key, t.key)
          }),
          e
        )
      })(),
      SortedMap = (function() {
        function e(e, t) {
          ;(this.comparator = e), (this.root = t || LLRBNode.EMPTY)
        }
        return (
          (e.prototype.insert = function(t, n) {
            return new e(
              this.comparator,
              this.root
                .insert(t, n, this.comparator)
                .copy(null, null, LLRBNode.BLACK, null, null)
            )
          }),
          (e.prototype.remove = function(t) {
            return new e(
              this.comparator,
              this.root
                .remove(t, this.comparator)
                .copy(null, null, LLRBNode.BLACK, null, null)
            )
          }),
          (e.prototype.get = function(e) {
            for (var t = this.root; !t.isEmpty(); ) {
              var n = this.comparator(e, t.key)
              if (0 === n) return t.value
              n < 0 ? (t = t.left) : n > 0 && (t = t.right)
            }
            return null
          }),
          (e.prototype.indexOf = function(e) {
            for (var t = 0, n = this.root; !n.isEmpty(); ) {
              var r = this.comparator(e, n.key)
              if (0 === r) return t + n.left.size
              r < 0 ? (n = n.left) : ((t += n.left.size + 1), (n = n.right))
            }
            return -1
          }),
          (e.prototype.isEmpty = function() {
            return this.root.isEmpty()
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function() {
              return this.root.size
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.minKey = function() {
            return this.root.minKey()
          }),
          (e.prototype.maxKey = function() {
            return this.root.maxKey()
          }),
          (e.prototype.inorderTraversal = function(e) {
            return this.root.inorderTraversal(e)
          }),
          (e.prototype.forEach = function(e) {
            this.inorderTraversal(function(t, n) {
              return e(t, n), !1
            })
          }),
          (e.prototype.reverseTraversal = function(e) {
            return this.root.reverseTraversal(e)
          }),
          (e.prototype.getIterator = function() {
            return new SortedMapIterator(this.root, null, this.comparator, !1)
          }),
          (e.prototype.getIteratorFrom = function(e) {
            return new SortedMapIterator(this.root, e, this.comparator, !1)
          }),
          (e.prototype.getReverseIterator = function() {
            return new SortedMapIterator(this.root, null, this.comparator, !0)
          }),
          (e.prototype.getReverseIteratorFrom = function(e) {
            return new SortedMapIterator(this.root, e, this.comparator, !0)
          }),
          e
        )
      })(),
      SortedMapIterator = (function() {
        function e(e, t, n, r) {
          ;(this.isReverse = r), (this.nodeStack = [])
          for (var o = 1; !e.isEmpty(); )
            if (((o = t ? n(e.key, t) : 1), r && (o *= -1), o < 0))
              e = this.isReverse ? e.left : e.right
            else {
              if (0 === o) {
                this.nodeStack.push(e)
                break
              }
              this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left)
            }
        }
        return (
          (e.prototype.getNext = function() {
            assert(
              this.nodeStack.length > 0,
              'getNext() called on iterator when hasNext() is false.'
            )
            var e = this.nodeStack.pop(),
              t = {key: e.key, value: e.value}
            if (this.isReverse)
              for (e = e.left; !e.isEmpty(); )
                this.nodeStack.push(e), (e = e.right)
            else
              for (e = e.right; !e.isEmpty(); )
                this.nodeStack.push(e), (e = e.left)
            return t
          }),
          (e.prototype.hasNext = function() {
            return this.nodeStack.length > 0
          }),
          (e.prototype.peek = function() {
            if (0 === this.nodeStack.length) return null
            var e = this.nodeStack[this.nodeStack.length - 1]
            return {key: e.key, value: e.value}
          }),
          e
        )
      })(),
      LLRBNode = (function() {
        function e(t, n, r, o, i) {
          ;(this.key = t),
            (this.value = n),
            (this.color = null != r ? r : e.RED),
            (this.left = null != o ? o : e.EMPTY),
            (this.right = null != i ? i : e.EMPTY),
            (this.size = this.left.size + 1 + this.right.size)
        }
        return (
          (e.prototype.copy = function(t, n, r, o, i) {
            return new e(
              null != t ? t : this.key,
              null != n ? n : this.value,
              null != r ? r : this.color,
              null != o ? o : this.left,
              null != i ? i : this.right
            )
          }),
          (e.prototype.isEmpty = function() {
            return !1
          }),
          (e.prototype.inorderTraversal = function(e) {
            return (
              this.left.inorderTraversal(e) ||
              e(this.key, this.value) ||
              this.right.inorderTraversal(e)
            )
          }),
          (e.prototype.reverseTraversal = function(e) {
            return (
              this.right.reverseTraversal(e) ||
              e(this.key, this.value) ||
              this.left.reverseTraversal(e)
            )
          }),
          (e.prototype.min = function() {
            return this.left.isEmpty() ? this : this.left.min()
          }),
          (e.prototype.minKey = function() {
            return this.min().key
          }),
          (e.prototype.maxKey = function() {
            return this.right.isEmpty() ? this.key : this.right.maxKey()
          }),
          (e.prototype.insert = function(e, t, n) {
            var r = this,
              o = n(e, r.key)
            return (r =
              o < 0
                ? r.copy(null, null, null, r.left.insert(e, t, n), null)
                : 0 === o
                  ? r.copy(null, t, null, null, null)
                  : r.copy(
                      null,
                      null,
                      null,
                      null,
                      r.right.insert(e, t, n)
                    )).fixUp()
          }),
          (e.prototype.removeMin = function() {
            if (this.left.isEmpty()) return e.EMPTY
            var t = this
            return (
              t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
              (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp()
            )
          }),
          (e.prototype.remove = function(t, n) {
            var r,
              o = this
            if (n(t, o.key) < 0)
              o.left.isEmpty() ||
                o.left.isRed() ||
                o.left.left.isRed() ||
                (o = o.moveRedLeft()),
                (o = o.copy(null, null, null, o.left.remove(t, n), null))
            else {
              if (
                (o.left.isRed() && (o = o.rotateRight()),
                o.right.isEmpty() ||
                  o.right.isRed() ||
                  o.right.left.isRed() ||
                  (o = o.moveRedRight()),
                0 === n(t, o.key))
              ) {
                if (o.right.isEmpty()) return e.EMPTY
                ;(r = o.right.min()),
                  (o = o.copy(r.key, r.value, null, null, o.right.removeMin()))
              }
              o = o.copy(null, null, null, null, o.right.remove(t, n))
            }
            return o.fixUp()
          }),
          (e.prototype.isRed = function() {
            return this.color
          }),
          (e.prototype.fixUp = function() {
            var e = this
            return (
              e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
              e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
              e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
              e
            )
          }),
          (e.prototype.moveRedLeft = function() {
            var e = this.colorFlip()
            return (
              e.right.left.isRed() &&
                (e = (e = (e = e.copy(
                  null,
                  null,
                  null,
                  null,
                  e.right.rotateRight()
                )).rotateLeft()).colorFlip()),
              e
            )
          }),
          (e.prototype.moveRedRight = function() {
            var e = this.colorFlip()
            return (
              e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()), e
            )
          }),
          (e.prototype.rotateLeft = function() {
            var t = this.copy(null, null, e.RED, null, this.right.left)
            return this.right.copy(null, null, this.color, t, null)
          }),
          (e.prototype.rotateRight = function() {
            var t = this.copy(null, null, e.RED, this.left.right, null)
            return this.left.copy(null, null, this.color, null, t)
          }),
          (e.prototype.colorFlip = function() {
            var e = this.left.copy(null, null, !this.left.color, null, null),
              t = this.right.copy(null, null, !this.right.color, null, null)
            return this.copy(null, null, !this.color, e, t)
          }),
          (e.prototype.checkMaxDepth = function() {
            var e = this.check()
            return Math.pow(2, e) <= this.size + 1
          }),
          (e.prototype.check = function() {
            if (this.isRed() && this.left.isRed())
              throw fail(
                'Red node has red child(' + this.key + ',' + this.value + ')'
              )
            if (this.right.isRed())
              throw fail(
                'Right child of (' + this.key + ',' + this.value + ') is red'
              )
            var e = this.left.check()
            if (e !== this.right.check()) throw fail('Black depths differ')
            return e + (this.isRed() ? 0 : 1)
          }),
          (e.EMPTY = null),
          (e.RED = !0),
          (e.BLACK = !1),
          e
        )
      })(),
      LLRBEmptyNode = (function() {
        function e() {
          this.size = 0
        }
        return (
          (e.prototype.copy = function(e, t, n, r, o) {
            return this
          }),
          (e.prototype.insert = function(e, t, n) {
            return new LLRBNode(e, t)
          }),
          (e.prototype.remove = function(e, t) {
            return this
          }),
          (e.prototype.isEmpty = function() {
            return !0
          }),
          (e.prototype.inorderTraversal = function(e) {
            return !1
          }),
          (e.prototype.reverseTraversal = function(e) {
            return !1
          }),
          (e.prototype.minKey = function() {
            return null
          }),
          (e.prototype.maxKey = function() {
            return null
          }),
          (e.prototype.isRed = function() {
            return !1
          }),
          (e.prototype.checkMaxDepth = function() {
            return !0
          }),
          (e.prototype.check = function() {
            return 0
          }),
          e
        )
      })(),
      TypeOrder,
      ServerTimestampBehavior
    ;(LLRBNode.EMPTY = new LLRBEmptyNode()),
      (function(e) {
        ;(e[(e.NullValue = 0)] = 'NullValue'),
          (e[(e.BooleanValue = 1)] = 'BooleanValue'),
          (e[(e.NumberValue = 2)] = 'NumberValue'),
          (e[(e.TimestampValue = 3)] = 'TimestampValue'),
          (e[(e.StringValue = 4)] = 'StringValue'),
          (e[(e.BlobValue = 5)] = 'BlobValue'),
          (e[(e.RefValue = 6)] = 'RefValue'),
          (e[(e.GeoPointValue = 7)] = 'GeoPointValue'),
          (e[(e.ArrayValue = 8)] = 'ArrayValue'),
          (e[(e.ObjectValue = 9)] = 'ObjectValue')
      })(TypeOrder || (TypeOrder = {})),
      (function(e) {
        ;(e[(e.Default = 0)] = 'Default'),
          (e[(e.Estimate = 1)] = 'Estimate'),
          (e[(e.Previous = 2)] = 'Previous')
      })(ServerTimestampBehavior || (ServerTimestampBehavior = {}))
    var FieldValueOptions = (function() {
        function e(e, t) {
          ;(this.serverTimestampBehavior = e), (this.timestampsInSnapshots = t)
        }
        return (
          (e.fromSnapshotOptions = function(t, n) {
            switch (t.serverTimestamps) {
              case 'estimate':
                return new e(ServerTimestampBehavior.Estimate, n)
              case 'previous':
                return new e(ServerTimestampBehavior.Previous, n)
              case 'none':
              case void 0:
                return new e(ServerTimestampBehavior.Default, n)
              default:
                return fail(
                  'fromSnapshotOptions() called with invalid options.'
                )
            }
          }),
          e
        )
      })(),
      FieldValue = (function() {
        function e() {}
        return (
          (e.prototype.toString = function() {
            var e = this.value()
            return null === e ? 'null' : e.toString()
          }),
          (e.prototype.defaultCompareTo = function(e) {
            return (
              assert(
                this.typeOrder !== e.typeOrder,
                'Default compareTo should not be used for values of same type.'
              ),
              primitiveComparator(this.typeOrder, e.typeOrder)
            )
          }),
          e
        )
      })(),
      NullValue = (function(e) {
        function t() {
          var t = e.call(this) || this
          return (
            (t.typeOrder = TypeOrder.NullValue), (t.internalValue = null), t
          )
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return null
          }),
          (t.prototype.isEqual = function(e) {
            return e instanceof t
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t ? 0 : this.defaultCompareTo(e)
          }),
          (t.INSTANCE = new t()),
          t
        )
      })(FieldValue),
      BooleanValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (
            (n.internalValue = t), (n.typeOrder = TypeOrder.BooleanValue), n
          )
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return this.internalValue
          }),
          (t.prototype.isEqual = function(e) {
            return e instanceof t && this.internalValue === e.internalValue
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t
              ? primitiveComparator(this, e)
              : this.defaultCompareTo(e)
          }),
          (t.of = function(e) {
            return e ? t.TRUE : t.FALSE
          }),
          (t.TRUE = new t(!0)),
          (t.FALSE = new t(!1)),
          t
        )
      })(FieldValue),
      NumberValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (n.internalValue = t), (n.typeOrder = TypeOrder.NumberValue), n
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return this.internalValue
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t
              ? numericComparator(this.internalValue, e.internalValue)
              : this.defaultCompareTo(e)
          }),
          t
        )
      })(FieldValue)
    function numericComparator(e, t) {
      return e < t
        ? -1
        : e > t ? 1 : e === t ? 0 : isNaN(e) ? (isNaN(t) ? 0 : -1) : 1
    }
    function numericEquals(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    var IntegerValue = (function(e) {
        function t(t) {
          return e.call(this, t) || this
        }
        return (
          __extends(t, e),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t &&
              numericEquals(this.internalValue, e.internalValue)
            )
          }),
          t
        )
      })(NumberValue),
      DoubleValue = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this
          return (n.internalValue = t), n
        }
        return (
          __extends(t, e),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t &&
              numericEquals(this.internalValue, e.internalValue)
            )
          }),
          (t.NAN = new t(NaN)),
          (t.POSITIVE_INFINITY = new t(1 / 0)),
          (t.NEGATIVE_INFINITY = new t(-1 / 0)),
          t
        )
      })(NumberValue),
      StringValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (n.internalValue = t), (n.typeOrder = TypeOrder.StringValue), n
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return this.internalValue
          }),
          (t.prototype.isEqual = function(e) {
            return e instanceof t && this.internalValue === e.internalValue
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t
              ? primitiveComparator(this.internalValue, e.internalValue)
              : this.defaultCompareTo(e)
          }),
          t
        )
      })(FieldValue),
      TimestampValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (
            (n.internalValue = t), (n.typeOrder = TypeOrder.TimestampValue), n
          )
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return e && e.timestampsInSnapshots
              ? this.internalValue
              : this.internalValue.toDate()
          }),
          (t.prototype.isEqual = function(e) {
            return e instanceof t && this.internalValue.isEqual(e.internalValue)
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t
              ? this.internalValue._compareTo(e.internalValue)
              : e instanceof ServerTimestampValue
                ? -1
                : this.defaultCompareTo(e)
          }),
          t
        )
      })(FieldValue),
      ServerTimestampValue = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this
          return (
            (r.localWriteTime = t),
            (r.previousValue = n),
            (r.typeOrder = TypeOrder.TimestampValue),
            r
          )
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return e &&
              e.serverTimestampBehavior === ServerTimestampBehavior.Estimate
              ? new TimestampValue(this.localWriteTime).value(e)
              : e &&
                e.serverTimestampBehavior ===
                  ServerTimestampBehavior.Previous &&
                this.previousValue
                ? this.previousValue.value(e)
                : null
          }),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t && this.localWriteTime.isEqual(e.localWriteTime)
            )
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t
              ? this.localWriteTime._compareTo(e.localWriteTime)
              : e instanceof TimestampValue ? 1 : this.defaultCompareTo(e)
          }),
          (t.prototype.toString = function() {
            return (
              '<ServerTimestamp localTime=' +
              this.localWriteTime.toString() +
              '>'
            )
          }),
          t
        )
      })(FieldValue),
      BlobValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (n.internalValue = t), (n.typeOrder = TypeOrder.BlobValue), n
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return this.internalValue
          }),
          (t.prototype.isEqual = function(e) {
            return e instanceof t && this.internalValue.isEqual(e.internalValue)
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t
              ? this.internalValue._compareTo(e.internalValue)
              : this.defaultCompareTo(e)
          }),
          t
        )
      })(FieldValue),
      RefValue = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this
          return (
            (r.databaseId = t),
            (r.key = n),
            (r.typeOrder = TypeOrder.RefValue),
            r
          )
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return this.key
          }),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t &&
              (this.key.isEqual(e.key) && this.databaseId.isEqual(e.databaseId))
            )
          }),
          (t.prototype.compareTo = function(e) {
            if (e instanceof t) {
              var n = this.databaseId.compareTo(e.databaseId)
              return 0 !== n ? n : DocumentKey.comparator(this.key, e.key)
            }
            return this.defaultCompareTo(e)
          }),
          t
        )
      })(FieldValue),
      GeoPointValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (
            (n.internalValue = t), (n.typeOrder = TypeOrder.GeoPointValue), n
          )
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return this.internalValue
          }),
          (t.prototype.isEqual = function(e) {
            return e instanceof t && this.internalValue.isEqual(e.internalValue)
          }),
          (t.prototype.compareTo = function(e) {
            return e instanceof t
              ? this.internalValue._compareTo(e.internalValue)
              : this.defaultCompareTo(e)
          }),
          t
        )
      })(FieldValue),
      ObjectValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (n.internalValue = t), (n.typeOrder = TypeOrder.ObjectValue), n
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            var t = {}
            return (
              this.internalValue.inorderTraversal(function(n, r) {
                t[n] = r.value(e)
              }),
              t
            )
          }),
          (t.prototype.forEach = function(e) {
            this.internalValue.inorderTraversal(e)
          }),
          (t.prototype.isEqual = function(e) {
            if (e instanceof t) {
              for (
                var n = this.internalValue.getIterator(),
                  r = e.internalValue.getIterator();
                n.hasNext() && r.hasNext();

              ) {
                var o = n.getNext(),
                  i = r.getNext()
                if (o.key !== i.key || !o.value.isEqual(i.value)) return !1
              }
              return !n.hasNext() && !r.hasNext()
            }
            return !1
          }),
          (t.prototype.compareTo = function(e) {
            if (e instanceof t) {
              for (
                var n = this.internalValue.getIterator(),
                  r = e.internalValue.getIterator();
                n.hasNext() && r.hasNext();

              ) {
                var o = n.getNext(),
                  i = r.getNext(),
                  a =
                    primitiveComparator(o.key, i.key) ||
                    o.value.compareTo(i.value)
                if (a) return a
              }
              return primitiveComparator(n.hasNext(), r.hasNext())
            }
            return this.defaultCompareTo(e)
          }),
          (t.prototype.set = function(e, n) {
            if (
              (assert(
                !e.isEmpty(),
                'Cannot set field for empty path on ObjectValue'
              ),
              1 === e.length)
            )
              return this.setChild(e.firstSegment(), n)
            var r = this.child(e.firstSegment())
            r instanceof t || (r = t.EMPTY)
            var o = r.set(e.popFirst(), n)
            return this.setChild(e.firstSegment(), o)
          }),
          (t.prototype.delete = function(e) {
            if (
              (assert(
                !e.isEmpty(),
                'Cannot delete field for empty path on ObjectValue'
              ),
              1 === e.length)
            )
              return new t(this.internalValue.remove(e.firstSegment()))
            var n = this.child(e.firstSegment())
            if (n instanceof t) {
              var r = n.delete(e.popFirst())
              return new t(this.internalValue.insert(e.firstSegment(), r))
            }
            return this
          }),
          (t.prototype.contains = function(e) {
            return void 0 !== this.field(e)
          }),
          (t.prototype.field = function(e) {
            assert(!e.isEmpty(), "Can't get field of empty path")
            var n = this
            return (
              e.forEach(function(e) {
                n = (n instanceof t && n.internalValue.get(e)) || void 0
              }),
              n
            )
          }),
          (t.prototype.toString = function() {
            return JSON.stringify(this.value())
          }),
          (t.prototype.child = function(e) {
            return this.internalValue.get(e) || void 0
          }),
          (t.prototype.setChild = function(e, n) {
            return new t(this.internalValue.insert(e, n))
          }),
          (t.EMPTY = new t(new SortedMap(primitiveComparator))),
          t
        )
      })(FieldValue),
      ArrayValue = (function(e) {
        function t(t) {
          var n = e.call(this) || this
          return (n.internalValue = t), (n.typeOrder = TypeOrder.ArrayValue), n
        }
        return (
          __extends(t, e),
          (t.prototype.value = function(e) {
            return this.internalValue.map(function(t) {
              return t.value(e)
            })
          }),
          (t.prototype.forEach = function(e) {
            this.internalValue.forEach(e)
          }),
          (t.prototype.isEqual = function(e) {
            if (e instanceof t) {
              if (this.internalValue.length !== e.internalValue.length)
                return !1
              for (var n = 0; n < this.internalValue.length; n++)
                if (!this.internalValue[n].isEqual(e.internalValue[n]))
                  return !1
              return !0
            }
            return !1
          }),
          (t.prototype.compareTo = function(e) {
            if (e instanceof t) {
              for (
                var n = Math.min(
                    this.internalValue.length,
                    e.internalValue.length
                  ),
                  r = 0;
                r < n;
                r++
              ) {
                var o = this.internalValue[r].compareTo(e.internalValue[r])
                if (o) return o
              }
              return primitiveComparator(
                this.internalValue.length,
                e.internalValue.length
              )
            }
            return this.defaultCompareTo(e)
          }),
          (t.prototype.toString = function() {
            return JSON.stringify(this.value())
          }),
          t
        )
      })(FieldValue),
      NumberAsAny = Number,
      MIN_SAFE_INTEGER = NumberAsAny.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1),
      MAX_SAFE_INTEGER = NumberAsAny.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
      isInteger =
        NumberAsAny.isInteger ||
        function(e) {
          return 'number' == typeof e && isFinite(e) && Math.floor(e) === e
        }
    function isNullOrUndefined(e) {
      return null === e || void 0 === e
    }
    function isSafeInteger(e) {
      return isInteger(e) && e <= MAX_SAFE_INTEGER && e >= MIN_SAFE_INTEGER
    }
    var Query = (function() {
        function e(e, t, n, r, o, i) {
          void 0 === t && (t = []),
            void 0 === n && (n = []),
            void 0 === r && (r = null),
            void 0 === o && (o = null),
            void 0 === i && (i = null),
            (this.path = e),
            (this.explicitOrderBy = t),
            (this.filters = n),
            (this.limit = r),
            (this.startAt = o),
            (this.endAt = i),
            (this.memoizedCanonicalId = null),
            (this.memoizedOrderBy = null),
            this.startAt && this.assertValidBound(this.startAt),
            this.endAt && this.assertValidBound(this.endAt)
        }
        return (
          (e.atPath = function(t) {
            return new e(t)
          }),
          Object.defineProperty(e.prototype, 'orderBy', {
            get: function() {
              if (null === this.memoizedOrderBy) {
                var e = this.getInequalityFilterField(),
                  t = this.getFirstOrderByField()
                if (null !== e && null === t)
                  e.isKeyField()
                    ? (this.memoizedOrderBy = [KEY_ORDERING_ASC])
                    : (this.memoizedOrderBy = [
                        new OrderBy(e),
                        KEY_ORDERING_ASC
                      ])
                else {
                  assert(
                    null === e || (null !== t && e.isEqual(t)),
                    'First orderBy should match inequality field.'
                  ),
                    (this.memoizedOrderBy = [])
                  for (
                    var n = !1, r = 0, o = this.explicitOrderBy;
                    r < o.length;
                    r++
                  ) {
                    var i = o[r]
                    this.memoizedOrderBy.push(i),
                      i.field.isKeyField() && (n = !0)
                  }
                  if (!n) {
                    var a =
                      this.explicitOrderBy.length > 0
                        ? this.explicitOrderBy[this.explicitOrderBy.length - 1]
                            .dir
                        : Direction.ASCENDING
                    this.memoizedOrderBy.push(
                      a === Direction.ASCENDING
                        ? KEY_ORDERING_ASC
                        : KEY_ORDERING_DESC
                    )
                  }
                }
              }
              return this.memoizedOrderBy
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.addFilter = function(t) {
            assert(
              null == this.getInequalityFilterField() ||
                !(t instanceof RelationFilter) ||
                !t.isInequality() ||
                t.field.isEqual(this.getInequalityFilterField()),
              'Query must only have one inequality field.'
            ),
              assert(
                !DocumentKey.isDocumentKey(this.path),
                'No filtering allowed for document query'
              )
            var n = this.filters.concat([t])
            return new e(
              this.path,
              this.explicitOrderBy.slice(),
              n,
              this.limit,
              this.startAt,
              this.endAt
            )
          }),
          (e.prototype.addOrderBy = function(t) {
            assert(
              !DocumentKey.isDocumentKey(this.path),
              'No ordering allowed for document query'
            ),
              assert(
                !this.startAt && !this.endAt,
                'Bounds must be set after orderBy'
              )
            var n = this.explicitOrderBy.concat([t])
            return new e(
              this.path,
              n,
              this.filters.slice(),
              this.limit,
              this.startAt,
              this.endAt
            )
          }),
          (e.prototype.withLimit = function(t) {
            return new e(
              this.path,
              this.explicitOrderBy.slice(),
              this.filters.slice(),
              t,
              this.startAt,
              this.endAt
            )
          }),
          (e.prototype.withStartAt = function(t) {
            return new e(
              this.path,
              this.explicitOrderBy.slice(),
              this.filters.slice(),
              this.limit,
              t,
              this.endAt
            )
          }),
          (e.prototype.withEndAt = function(t) {
            return new e(
              this.path,
              this.explicitOrderBy.slice(),
              this.filters.slice(),
              this.limit,
              this.startAt,
              t
            )
          }),
          (e.prototype.canonicalId = function() {
            if (null === this.memoizedCanonicalId) {
              var e = this.path.canonicalString()
              e += '|f:'
              for (var t = 0, n = this.filters; t < n.length; t++) {
                ;(e += n[t].canonicalId()), (e += ',')
              }
              e += '|ob:'
              for (var r = 0, o = this.orderBy; r < o.length; r++) {
                ;(e += o[r].canonicalId()), (e += ',')
              }
              isNullOrUndefined(this.limit) ||
                ((e += '|l:'), (e += this.limit)),
                this.startAt &&
                  ((e += '|lb:'), (e += this.startAt.canonicalId())),
                this.endAt && ((e += '|ub:'), (e += this.endAt.canonicalId())),
                (this.memoizedCanonicalId = e)
            }
            return this.memoizedCanonicalId
          }),
          (e.prototype.toString = function() {
            var e = 'Query(' + this.path.canonicalString()
            return (
              this.filters.length > 0 &&
                (e += ', filters: [' + this.filters.join(', ') + ']'),
              isNullOrUndefined(this.limit) || (e += ', limit: ' + this.limit),
              this.explicitOrderBy.length > 0 &&
                (e += ', orderBy: [' + this.explicitOrderBy.join(', ') + ']'),
              this.startAt && (e += ', startAt: ' + this.startAt.canonicalId()),
              this.endAt && (e += ', endAt: ' + this.endAt.canonicalId()),
              e + ')'
            )
          }),
          (e.prototype.isEqual = function(e) {
            if (this.limit !== e.limit) return !1
            if (this.orderBy.length !== e.orderBy.length) return !1
            for (var t = 0; t < this.orderBy.length; t++)
              if (!this.orderBy[t].isEqual(e.orderBy[t])) return !1
            if (this.filters.length !== e.filters.length) return !1
            for (t = 0; t < this.filters.length; t++)
              if (!this.filters[t].isEqual(e.filters[t])) return !1
            return (
              !!this.path.isEqual(e.path) &&
              (!(null !== this.startAt
                ? !this.startAt.isEqual(e.startAt)
                : null !== e.startAt) &&
                (null !== this.endAt
                  ? this.endAt.isEqual(e.endAt)
                  : null === e.endAt))
            )
          }),
          (e.prototype.docComparator = function(e, t) {
            for (var n = !1, r = 0, o = this.orderBy; r < o.length; r++) {
              var i = o[r],
                a = i.compare(e, t)
              if (0 !== a) return a
              n = n || i.field.isKeyField()
            }
            return (
              assert(n, "orderBy used that doesn't compare on key field"), 0
            )
          }),
          (e.prototype.matches = function(e) {
            return (
              this.matchesAncestor(e) &&
              this.matchesOrderBy(e) &&
              this.matchesFilters(e) &&
              this.matchesBounds(e)
            )
          }),
          (e.prototype.hasLimit = function() {
            return !isNullOrUndefined(this.limit)
          }),
          (e.prototype.getFirstOrderByField = function() {
            return this.explicitOrderBy.length > 0
              ? this.explicitOrderBy[0].field
              : null
          }),
          (e.prototype.getInequalityFilterField = function() {
            for (var e = 0, t = this.filters; e < t.length; e++) {
              var n = t[e]
              if (n instanceof RelationFilter && n.isInequality())
                return n.field
            }
            return null
          }),
          (e.prototype.isDocumentQuery = function() {
            return (
              DocumentKey.isDocumentKey(this.path) && 0 === this.filters.length
            )
          }),
          (e.prototype.matchesAncestor = function(e) {
            var t = e.key.path
            return DocumentKey.isDocumentKey(this.path)
              ? this.path.isEqual(t)
              : this.path.isPrefixOf(t) && this.path.length === t.length - 1
          }),
          (e.prototype.matchesOrderBy = function(e) {
            for (var t = 0, n = this.explicitOrderBy; t < n.length; t++) {
              var r = n[t]
              if (!r.field.isKeyField() && void 0 === e.field(r.field))
                return !1
            }
            return !0
          }),
          (e.prototype.matchesFilters = function(e) {
            for (var t = 0, n = this.filters; t < n.length; t++) {
              if (!n[t].matches(e)) return !1
            }
            return !0
          }),
          (e.prototype.matchesBounds = function(e) {
            return (
              !(
                this.startAt &&
                !this.startAt.sortsBeforeDocument(this.orderBy, e)
              ) &&
              (!this.endAt || !this.endAt.sortsBeforeDocument(this.orderBy, e))
            )
          }),
          (e.prototype.assertValidBound = function(e) {
            assert(
              e.position.length <= this.orderBy.length,
              'Bound is longer than orderBy'
            )
          }),
          e
        )
      })(),
      RelationOp = (function() {
        function e(e) {
          this.name = e
        }
        return (
          (e.fromString = function(t) {
            switch (t) {
              case '<':
                return e.LESS_THAN
              case '<=':
                return e.LESS_THAN_OR_EQUAL
              case '==':
                return e.EQUAL
              case '>=':
                return e.GREATER_THAN_OR_EQUAL
              case '>':
                return e.GREATER_THAN
              default:
                return fail('Unknown relation: ' + t)
            }
          }),
          (e.prototype.toString = function() {
            return this.name
          }),
          (e.prototype.isEqual = function(e) {
            return this.name === e.name
          }),
          (e.LESS_THAN = new e('<')),
          (e.LESS_THAN_OR_EQUAL = new e('<=')),
          (e.EQUAL = new e('==')),
          (e.GREATER_THAN = new e('>')),
          (e.GREATER_THAN_OR_EQUAL = new e('>=')),
          e
        )
      })(),
      RelationFilter = (function() {
        function e(e, t, n) {
          ;(this.field = e), (this.op = t), (this.value = n)
        }
        return (
          (e.prototype.matches = function(e) {
            if (this.field.isKeyField()) {
              assert(
                this.value instanceof RefValue,
                'Comparing on key, but filter value not a RefValue'
              )
              var t = this.value,
                n = DocumentKey.comparator(e.key, t.key)
              return this.matchesComparison(n)
            }
            var r = e.field(this.field)
            return void 0 !== r && this.matchesValue(r)
          }),
          (e.prototype.matchesValue = function(e) {
            return (
              this.value.typeOrder === e.typeOrder &&
              this.matchesComparison(e.compareTo(this.value))
            )
          }),
          (e.prototype.matchesComparison = function(e) {
            switch (this.op) {
              case RelationOp.LESS_THAN:
                return e < 0
              case RelationOp.LESS_THAN_OR_EQUAL:
                return e <= 0
              case RelationOp.EQUAL:
                return 0 === e
              case RelationOp.GREATER_THAN:
                return e > 0
              case RelationOp.GREATER_THAN_OR_EQUAL:
                return e >= 0
              default:
                return fail('Unknown relation op' + this.op)
            }
          }),
          (e.prototype.isInequality = function() {
            return this.op !== RelationOp.EQUAL
          }),
          (e.prototype.canonicalId = function() {
            return (
              this.field.canonicalString() +
              this.op.toString() +
              this.value.toString()
            )
          }),
          (e.prototype.isEqual = function(t) {
            return (
              t instanceof e &&
              (this.op.isEqual(t.op) &&
                this.field.isEqual(t.field) &&
                this.value.isEqual(t.value))
            )
          }),
          (e.prototype.toString = function() {
            return (
              this.field.canonicalString() +
              ' ' +
              this.op +
              ' ' +
              this.value.value()
            )
          }),
          e
        )
      })(),
      NullFilter = (function() {
        function e(e) {
          this.field = e
        }
        return (
          (e.prototype.matches = function(e) {
            var t = e.field(this.field)
            return void 0 !== t && null === t.value()
          }),
          (e.prototype.canonicalId = function() {
            return this.field.canonicalString() + ' IS null'
          }),
          (e.prototype.toString = function() {
            return this.field.canonicalString() + ' IS null'
          }),
          (e.prototype.isEqual = function(t) {
            return t instanceof e && this.field.isEqual(t.field)
          }),
          e
        )
      })(),
      NanFilter = (function() {
        function e(e) {
          this.field = e
        }
        return (
          (e.prototype.matches = function(e) {
            var t = e.field(this.field).value()
            return 'number' == typeof t && isNaN(t)
          }),
          (e.prototype.canonicalId = function() {
            return this.field.canonicalString() + ' IS NaN'
          }),
          (e.prototype.toString = function() {
            return this.field.canonicalString() + ' IS NaN'
          }),
          (e.prototype.isEqual = function(t) {
            return t instanceof e && this.field.isEqual(t.field)
          }),
          e
        )
      })()
    function fieldFilter(e, t, n) {
      if (n.isEqual(NullValue.INSTANCE)) {
        if (t !== RelationOp.EQUAL)
          throw new FirestoreError(
            Code.INVALID_ARGUMENT,
            'Invalid query. You can only perform equals comparisons on null.'
          )
        return new NullFilter(e)
      }
      if (n.isEqual(DoubleValue.NAN)) {
        if (t !== RelationOp.EQUAL)
          throw new FirestoreError(
            Code.INVALID_ARGUMENT,
            'Invalid query. You can only perform equals comparisons on NaN.'
          )
        return new NanFilter(e)
      }
      return new RelationFilter(e, t, n)
    }
    var Direction = (function() {
        function e(e) {
          this.name = e
        }
        return (
          (e.prototype.toString = function() {
            return this.name
          }),
          (e.ASCENDING = new e('asc')),
          (e.DESCENDING = new e('desc')),
          e
        )
      })(),
      Bound = (function() {
        function e(e, t) {
          ;(this.position = e), (this.before = t)
        }
        return (
          (e.prototype.canonicalId = function() {
            for (
              var e = this.before ? 'b:' : 'a:', t = 0, n = this.position;
              t < n.length;
              t++
            ) {
              e += n[t].toString()
            }
            return e
          }),
          (e.prototype.sortsBeforeDocument = function(e, t) {
            assert(
              this.position.length <= e.length,
              "Bound has more components than query's orderBy"
            )
            for (var n = 0, r = 0; r < this.position.length; r++) {
              var o = e[r],
                i = this.position[r]
              if (o.field.isKeyField())
                assert(
                  i instanceof RefValue,
                  'Bound has a non-key value where the key path is being used.'
                ),
                  (n = DocumentKey.comparator(i.key, t.key))
              else {
                var a = t.field(o.field)
                assert(
                  void 0 !== a,
                  'Field should exist since document matched the orderBy already.'
                ),
                  (n = i.compareTo(a))
              }
              if ((o.dir === Direction.DESCENDING && (n *= -1), 0 !== n)) break
            }
            return this.before ? n <= 0 : n < 0
          }),
          (e.prototype.isEqual = function(e) {
            if (null === e) return !1
            if (
              this.before !== e.before ||
              this.position.length !== e.position.length
            )
              return !1
            for (var t = 0; t < this.position.length; t++) {
              var n = this.position[t],
                r = e.position[t]
              return n.isEqual(r)
            }
            return !0
          }),
          e
        )
      })(),
      OrderBy = (function() {
        function e(e, t) {
          ;(this.field = e),
            void 0 === t && (t = Direction.ASCENDING),
            (this.dir = t),
            (this.isKeyOrderBy = e.isKeyField())
        }
        return (
          (e.prototype.compare = function(e, t) {
            var n = this.isKeyOrderBy
              ? Document.compareByKey(e, t)
              : Document.compareByField(this.field, e, t)
            switch (this.dir) {
              case Direction.ASCENDING:
                return n
              case Direction.DESCENDING:
                return -1 * n
              default:
                return fail('Unknown direction: ' + this.dir)
            }
          }),
          (e.prototype.canonicalId = function() {
            return this.field.canonicalString() + this.dir.toString()
          }),
          (e.prototype.toString = function() {
            return this.field.canonicalString() + ' (' + this.dir + ')'
          }),
          (e.prototype.isEqual = function(e) {
            return this.dir === e.dir && this.field.isEqual(e.field)
          }),
          e
        )
      })(),
      KEY_ORDERING_ASC = new OrderBy(FieldPath.keyField(), Direction.ASCENDING),
      KEY_ORDERING_DESC = new OrderBy(
        FieldPath.keyField(),
        Direction.DESCENDING
      ),
      SnapshotVersion = (function() {
        function e(e) {
          this.timestamp = e
        }
        return (
          (e.fromMicroseconds = function(t) {
            var n = Math.floor(t / 1e6)
            return new e(new Timestamp(n, (t % 1e6) * 1e3))
          }),
          (e.fromTimestamp = function(t) {
            return new e(t)
          }),
          (e.forDeletedDoc = function() {
            return e.MIN
          }),
          (e.prototype.compareTo = function(e) {
            return this.timestamp._compareTo(e.timestamp)
          }),
          (e.prototype.isEqual = function(e) {
            return this.timestamp.isEqual(e.timestamp)
          }),
          (e.prototype.toMicroseconds = function() {
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            )
          }),
          (e.prototype.toString = function() {
            return 'SnapshotVersion(' + this.timestamp.toString() + ')'
          }),
          (e.prototype.toTimestamp = function() {
            return this.timestamp
          }),
          (e.MIN = new e(new Timestamp(0, 0))),
          e
        )
      })(),
      QueryPurpose
    !(function(e) {
      ;(e[(e.Listen = 0)] = 'Listen'),
        (e[(e.ExistenceFilterMismatch = 1)] = 'ExistenceFilterMismatch'),
        (e[(e.LimboResolution = 2)] = 'LimboResolution')
    })(QueryPurpose || (QueryPurpose = {}))
    var QueryData = (function() {
        function e(e, t, n, r, o) {
          void 0 === r && (r = SnapshotVersion.MIN),
            void 0 === o && (o = emptyByteString()),
            (this.query = e),
            (this.targetId = t),
            (this.purpose = n),
            (this.snapshotVersion = r),
            (this.resumeToken = o)
        }
        return (
          (e.prototype.update = function(t) {
            return new e(
              this.query,
              this.targetId,
              this.purpose,
              t.snapshotVersion,
              t.resumeToken
            )
          }),
          (e.prototype.isEqual = function(e) {
            return (
              this.targetId === e.targetId &&
              this.purpose === e.purpose &&
              this.snapshotVersion.isEqual(e.snapshotVersion) &&
              this.resumeToken === e.resumeToken &&
              this.query.isEqual(e.query)
            )
          }),
          e
        )
      })(),
      FieldMask = (function() {
        function e(e) {
          this.fields = e
        }
        return (
          (e.prototype.isEqual = function(e) {
            return arrayEquals(this.fields, e.fields)
          }),
          e
        )
      })(),
      ServerTimestampTransform = (function() {
        function e() {}
        return (
          (e.prototype.isEqual = function(t) {
            return t instanceof e
          }),
          (e.instance = new e()),
          e
        )
      })(),
      FieldTransform = (function() {
        function e(e, t) {
          ;(this.field = e), (this.transform = t)
        }
        return (
          (e.prototype.isEqual = function(e) {
            return (
              this.field.isEqual(e.field) && this.transform.isEqual(e.transform)
            )
          }),
          e
        )
      })(),
      MutationResult = (function() {
        return function(e, t) {
          ;(this.version = e), (this.transformResults = t)
        }
      })(),
      MutationType
    !(function(e) {
      ;(e[(e.Set = 0)] = 'Set'),
        (e[(e.Patch = 1)] = 'Patch'),
        (e[(e.Transform = 2)] = 'Transform'),
        (e[(e.Delete = 3)] = 'Delete')
    })(MutationType || (MutationType = {}))
    var Precondition = (function() {
        function e(e, t) {
          ;(this.updateTime = e),
            (this.exists = t),
            assert(
              void 0 === e || void 0 === t,
              'Precondition can specify "exists" or "updateTime" but not both'
            )
        }
        return (
          (e.exists = function(t) {
            return new e(void 0, t)
          }),
          (e.updateTime = function(t) {
            return new e(t)
          }),
          Object.defineProperty(e.prototype, 'isNone', {
            get: function() {
              return void 0 === this.updateTime && void 0 === this.exists
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.isValidFor = function(e) {
            return void 0 !== this.updateTime
              ? e instanceof Document && e.version.isEqual(this.updateTime)
              : void 0 !== this.exists
                ? this.exists
                  ? e instanceof Document
                  : null === e || e instanceof NoDocument
                : (assert(this.isNone, 'Precondition should be empty'), !0)
          }),
          (e.prototype.isEqual = function(e) {
            return (
              equals(this.updateTime, e.updateTime) && this.exists === e.exists
            )
          }),
          (e.NONE = new e()),
          e
        )
      })(),
      Mutation = (function() {
        function e() {}
        return (
          (e.prototype.verifyKeyMatches = function(e) {
            null != e &&
              assert(
                e.key.isEqual(this.key),
                'Can only apply a mutation to a document with the same key'
              )
          }),
          (e.getPostMutationVersion = function(e) {
            return e instanceof Document ? e.version : SnapshotVersion.MIN
          }),
          e
        )
      })(),
      SetMutation = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this
          return (
            (o.key = t),
            (o.value = n),
            (o.precondition = r),
            (o.type = MutationType.Set),
            o
          )
        }
        return (
          __extends(t, e),
          (t.prototype.applyToRemoteDocument = function(e, t) {
            this.verifyKeyMatches(e),
              assert(
                null == t.transformResults,
                'Transform results received by SetMutation.'
              )
            var n = Mutation.getPostMutationVersion(e)
            return new Document(this.key, n, this.value, {
              hasLocalMutations: !1
            })
          }),
          (t.prototype.applyToLocalView = function(e, t, n) {
            if ((this.verifyKeyMatches(e), !this.precondition.isValidFor(e)))
              return e
            var r = Mutation.getPostMutationVersion(e)
            return new Document(this.key, r, this.value, {
              hasLocalMutations: !0
            })
          }),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t &&
              this.key.isEqual(e.key) &&
              this.value.isEqual(e.value) &&
              this.precondition.isEqual(e.precondition)
            )
          }),
          t
        )
      })(Mutation),
      PatchMutation = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this) || this
          return (
            (i.key = t),
            (i.data = n),
            (i.fieldMask = r),
            (i.precondition = o),
            (i.type = MutationType.Patch),
            i
          )
        }
        return (
          __extends(t, e),
          (t.prototype.applyToRemoteDocument = function(e, t) {
            if (
              (this.verifyKeyMatches(e),
              assert(
                null == t.transformResults,
                'Transform results received by PatchMutation.'
              ),
              !this.precondition.isValidFor(e))
            )
              return e
            var n = Mutation.getPostMutationVersion(e),
              r = this.patchDocument(e)
            return new Document(this.key, n, r, {hasLocalMutations: !1})
          }),
          (t.prototype.applyToLocalView = function(e, t, n) {
            if ((this.verifyKeyMatches(e), !this.precondition.isValidFor(e)))
              return e
            var r = Mutation.getPostMutationVersion(e),
              o = this.patchDocument(e)
            return new Document(this.key, r, o, {hasLocalMutations: !0})
          }),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t &&
              this.key.isEqual(e.key) &&
              this.fieldMask.isEqual(e.fieldMask) &&
              this.precondition.isEqual(e.precondition)
            )
          }),
          (t.prototype.patchDocument = function(e) {
            var t
            return (
              (t = e instanceof Document ? e.data : ObjectValue.EMPTY),
              this.patchObject(t)
            )
          }),
          (t.prototype.patchObject = function(e) {
            for (var t = 0, n = this.fieldMask.fields; t < n.length; t++) {
              var r = n[t],
                o = this.data.field(r)
              e = void 0 !== o ? e.set(r, o) : e.delete(r)
            }
            return e
          }),
          t
        )
      })(Mutation),
      TransformMutation = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this
          return (
            (r.key = t),
            (r.fieldTransforms = n),
            (r.type = MutationType.Transform),
            (r.precondition = Precondition.exists(!0)),
            r
          )
        }
        return (
          __extends(t, e),
          (t.prototype.applyToRemoteDocument = function(e, t) {
            this.verifyKeyMatches(e),
              assert(
                null != t.transformResults,
                'Transform results missing for TransformMutation.'
              )
            var n = t.transformResults
            if (!this.precondition.isValidFor(e)) return e
            var r = this.requireDocument(e),
              o = this.transformObject(r.data, n)
            return new Document(this.key, r.version, o, {hasLocalMutations: !1})
          }),
          (t.prototype.applyToLocalView = function(e, t, n) {
            if ((this.verifyKeyMatches(e), !this.precondition.isValidFor(e)))
              return e
            var r = this.requireDocument(e),
              o = this.localTransformResults(n, t),
              i = this.transformObject(r.data, o)
            return new Document(this.key, r.version, i, {hasLocalMutations: !0})
          }),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t &&
              this.key.isEqual(e.key) &&
              arrayEquals(this.fieldTransforms, e.fieldTransforms) &&
              this.precondition.isEqual(e.precondition)
            )
          }),
          (t.prototype.requireDocument = function(e) {
            assert(e instanceof Document, 'Unknown MaybeDocument type ' + e)
            var t = e
            return (
              assert(
                t.key.isEqual(this.key),
                'Can only transform a document with the same key'
              ),
              t
            )
          }),
          (t.prototype.localTransformResults = function(e, t) {
            for (
              var n = [], r = 0, o = this.fieldTransforms;
              r < o.length;
              r++
            ) {
              var i = o[r],
                a = i.transform
              if (!(a instanceof ServerTimestampTransform))
                return fail('Encountered unknown transform: ' + a)
              var s = null
              t instanceof Document && (s = t.field(i.field) || null),
                n.push(new ServerTimestampValue(e, s))
            }
            return n
          }),
          (t.prototype.transformObject = function(e, t) {
            assert(
              t.length === this.fieldTransforms.length,
              'TransformResults length mismatch.'
            )
            for (var n = 0; n < this.fieldTransforms.length; n++) {
              var r = this.fieldTransforms[n],
                o = r.transform,
                i = r.field
              if (!(o instanceof ServerTimestampTransform))
                return fail('Encountered unknown transform: ' + o)
              e = e.set(i, t[n])
            }
            return e
          }),
          t
        )
      })(Mutation),
      DeleteMutation = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this
          return (
            (r.key = t), (r.precondition = n), (r.type = MutationType.Delete), r
          )
        }
        return (
          __extends(t, e),
          (t.prototype.applyToRemoteDocument = function(e, t) {
            return (
              this.verifyKeyMatches(e),
              assert(
                null == t.transformResults,
                'Transform results received by DeleteMutation.'
              ),
              new NoDocument(this.key, SnapshotVersion.MIN)
            )
          }),
          (t.prototype.applyToLocalView = function(e, t, n) {
            return (
              this.verifyKeyMatches(e),
              this.precondition.isValidFor(e)
                ? (e &&
                    assert(
                      e.key.isEqual(this.key),
                      'Can only apply mutation to document with same key'
                    ),
                  new NoDocument(this.key, SnapshotVersion.forDeletedDoc()))
                : e
            )
          }),
          (t.prototype.isEqual = function(e) {
            return (
              e instanceof t &&
              this.key.isEqual(e.key) &&
              this.precondition.isEqual(e.precondition)
            )
          }),
          t
        )
      })(Mutation),
      ExistenceFilter = (function() {
        function e(e) {
          this.count = e
        }
        return (
          (e.prototype.isEqual = function(e) {
            return e && e.count === this.count
          }),
          e
        )
      })(),
      RpcCode
    function isPermanentError(e) {
      switch (e) {
        case Code.OK:
          return fail('Treated status OK as error')
        case Code.CANCELLED:
        case Code.UNKNOWN:
        case Code.DEADLINE_EXCEEDED:
        case Code.RESOURCE_EXHAUSTED:
        case Code.INTERNAL:
        case Code.UNAVAILABLE:
        case Code.UNAUTHENTICATED:
          return !1
        case Code.INVALID_ARGUMENT:
        case Code.NOT_FOUND:
        case Code.ALREADY_EXISTS:
        case Code.PERMISSION_DENIED:
        case Code.FAILED_PRECONDITION:
        case Code.ABORTED:
        case Code.OUT_OF_RANGE:
        case Code.UNIMPLEMENTED:
        case Code.DATA_LOSS:
          return !0
        default:
          return fail('Unknown status code: ' + e)
      }
    }
    function mapCodeFromRpcStatus(e) {
      var t = RpcCode[e]
      if (void 0 !== t) return mapCodeFromRpcCode(t)
    }
    function mapCodeFromRpcCode(e) {
      if (void 0 === e) return error('GRPC error has no .code'), Code.UNKNOWN
      switch (e) {
        case RpcCode.OK:
          return Code.OK
        case RpcCode.CANCELLED:
          return Code.CANCELLED
        case RpcCode.UNKNOWN:
          return Code.UNKNOWN
        case RpcCode.DEADLINE_EXCEEDED:
          return Code.DEADLINE_EXCEEDED
        case RpcCode.RESOURCE_EXHAUSTED:
          return Code.RESOURCE_EXHAUSTED
        case RpcCode.INTERNAL:
          return Code.INTERNAL
        case RpcCode.UNAVAILABLE:
          return Code.UNAVAILABLE
        case RpcCode.UNAUTHENTICATED:
          return Code.UNAUTHENTICATED
        case RpcCode.INVALID_ARGUMENT:
          return Code.INVALID_ARGUMENT
        case RpcCode.NOT_FOUND:
          return Code.NOT_FOUND
        case RpcCode.ALREADY_EXISTS:
          return Code.ALREADY_EXISTS
        case RpcCode.PERMISSION_DENIED:
          return Code.PERMISSION_DENIED
        case RpcCode.FAILED_PRECONDITION:
          return Code.FAILED_PRECONDITION
        case RpcCode.ABORTED:
          return Code.ABORTED
        case RpcCode.OUT_OF_RANGE:
          return Code.OUT_OF_RANGE
        case RpcCode.UNIMPLEMENTED:
          return Code.UNIMPLEMENTED
        case RpcCode.DATA_LOSS:
          return Code.DATA_LOSS
        default:
          return fail('Unknown status code: ' + e)
      }
    }
    function mapRpcCodeFromCode(e) {
      if (void 0 === e) return RpcCode.OK
      switch (e) {
        case Code.OK:
          return RpcCode.OK
        case Code.CANCELLED:
          return RpcCode.CANCELLED
        case Code.UNKNOWN:
          return RpcCode.UNKNOWN
        case Code.DEADLINE_EXCEEDED:
          return RpcCode.DEADLINE_EXCEEDED
        case Code.RESOURCE_EXHAUSTED:
          return RpcCode.RESOURCE_EXHAUSTED
        case Code.INTERNAL:
          return RpcCode.INTERNAL
        case Code.UNAVAILABLE:
          return RpcCode.UNAVAILABLE
        case Code.UNAUTHENTICATED:
          return RpcCode.UNAUTHENTICATED
        case Code.INVALID_ARGUMENT:
          return RpcCode.INVALID_ARGUMENT
        case Code.NOT_FOUND:
          return RpcCode.NOT_FOUND
        case Code.ALREADY_EXISTS:
          return RpcCode.ALREADY_EXISTS
        case Code.PERMISSION_DENIED:
          return RpcCode.PERMISSION_DENIED
        case Code.FAILED_PRECONDITION:
          return RpcCode.FAILED_PRECONDITION
        case Code.ABORTED:
          return RpcCode.ABORTED
        case Code.OUT_OF_RANGE:
          return RpcCode.OUT_OF_RANGE
        case Code.UNIMPLEMENTED:
          return RpcCode.UNIMPLEMENTED
        case Code.DATA_LOSS:
          return RpcCode.DATA_LOSS
        default:
          return fail('Unknown status code: ' + e)
      }
    }
    function mapCodeFromHttpStatus(e) {
      switch (e) {
        case 200:
          return Code.OK
        case 400:
          return Code.INVALID_ARGUMENT
        case 401:
          return Code.UNAUTHENTICATED
        case 403:
          return Code.PERMISSION_DENIED
        case 404:
          return Code.NOT_FOUND
        case 409:
          return Code.ABORTED
        case 416:
          return Code.OUT_OF_RANGE
        case 429:
          return Code.RESOURCE_EXHAUSTED
        case 499:
          return Code.CANCELLED
        case 500:
          return Code.UNKNOWN
        case 501:
          return Code.UNIMPLEMENTED
        case 503:
          return Code.UNAVAILABLE
        case 504:
          return Code.DEADLINE_EXCEEDED
        default:
          return e >= 200 && e < 300
            ? Code.OK
            : e >= 400 && e < 500
              ? Code.FAILED_PRECONDITION
              : e >= 500 && e < 600 ? Code.INTERNAL : Code.UNKNOWN
      }
    }
    !(function(e) {
      ;(e[(e.OK = 0)] = 'OK'),
        (e[(e.CANCELLED = 1)] = 'CANCELLED'),
        (e[(e.UNKNOWN = 2)] = 'UNKNOWN'),
        (e[(e.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
        (e[(e.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
        (e[(e.NOT_FOUND = 5)] = 'NOT_FOUND'),
        (e[(e.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
        (e[(e.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
        (e[(e.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
        (e[(e.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
        (e[(e.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
        (e[(e.ABORTED = 10)] = 'ABORTED'),
        (e[(e.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
        (e[(e.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
        (e[(e.INTERNAL = 13)] = 'INTERNAL'),
        (e[(e.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
        (e[(e.DATA_LOSS = 15)] = 'DATA_LOSS')
    })(RpcCode || (RpcCode = {}))
    var SortedSet = (function() {
        function e(e) {
          ;(this.comparator = e), (this.data = new SortedMap(this.comparator))
        }
        return (
          (e.fromMapKeys = function(t) {
            var n = new e(t.comparator)
            return (
              t.forEach(function(e) {
                n = n.add(e)
              }),
              n
            )
          }),
          (e.prototype.has = function(e) {
            return null !== this.data.get(e)
          }),
          (e.prototype.first = function() {
            return this.data.minKey()
          }),
          (e.prototype.last = function() {
            return this.data.maxKey()
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function() {
              return this.data.size
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.indexOf = function(e) {
            return this.data.indexOf(e)
          }),
          (e.prototype.forEach = function(e) {
            this.data.inorderTraversal(function(t, n) {
              return e(t), !1
            })
          }),
          (e.prototype.forEachInRange = function(e, t) {
            for (var n = this.data.getIteratorFrom(e[0]); n.hasNext(); ) {
              var r = n.getNext()
              if (this.comparator(r.key, e[1]) >= 0) return
              t(r.key)
            }
          }),
          (e.prototype.forEachWhile = function(e, t) {
            var n
            for (
              n =
                void 0 !== t
                  ? this.data.getIteratorFrom(t)
                  : this.data.getIterator();
              n.hasNext();

            ) {
              if (!e(n.getNext().key)) return
            }
          }),
          (e.prototype.firstAfterOrEqual = function(e) {
            var t = this.data.getIteratorFrom(e)
            return t.hasNext() ? t.getNext().key : null
          }),
          (e.prototype.add = function(e) {
            return this.copy(this.data.remove(e).insert(e, !0))
          }),
          (e.prototype.delete = function(e) {
            return this.has(e) ? this.copy(this.data.remove(e)) : this
          }),
          (e.prototype.isEmpty = function() {
            return this.data.isEmpty()
          }),
          (e.prototype.unionWith = function(e) {
            var t = this
            return (
              e.forEach(function(e) {
                t = t.add(e)
              }),
              t
            )
          }),
          (e.prototype.isEqual = function(t) {
            if (!(t instanceof e)) return !1
            if (this.size !== t.size) return !1
            for (
              var n = this.data.getIterator(), r = t.data.getIterator();
              n.hasNext();

            ) {
              var o = n.getNext().key,
                i = r.getNext().key
              if (0 !== this.comparator(o, i)) return !1
            }
            return !0
          }),
          (e.prototype.toString = function() {
            var e = []
            return (
              this.forEach(function(t) {
                return e.push(t)
              }),
              'SortedSet(' + e.toString() + ')'
            )
          }),
          (e.prototype.copy = function(t) {
            var n = new e(this.comparator)
            return (n.data = t), n
          }),
          e
        )
      })(),
      EMPTY_MAYBE_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator)
    function maybeDocumentMap() {
      return EMPTY_MAYBE_DOCUMENT_MAP
    }
    var EMPTY_DOCUMENT_MAP = new SortedMap(DocumentKey.comparator)
    function documentMap() {
      return EMPTY_DOCUMENT_MAP
    }
    var EMPTY_DOCUMENT_VERSION_MAP = new SortedMap(DocumentKey.comparator)
    function documentVersionMap() {
      return EMPTY_DOCUMENT_VERSION_MAP
    }
    var EMPTY_DOCUMENT_KEY_SET = new SortedSet(DocumentKey.comparator)
    function documentKeySet() {
      return EMPTY_DOCUMENT_KEY_SET
    }
    var RemoteEvent = (function() {
        function e(e, t, n) {
          ;(this.snapshotVersion = e),
            (this.targetChanges = t),
            (this.documentUpdates = n)
        }
        return (
          (e.prototype.addDocumentUpdate = function(e) {
            this.documentUpdates = this.documentUpdates.insert(e.key, e)
          }),
          (e.prototype.handleExistenceFilterMismatch = function(e) {
            this.targetChanges[e] = {
              mapping: new ResetMapping(),
              snapshotVersion: SnapshotVersion.MIN,
              currentStatusUpdate: CurrentStatusUpdate.MarkNotCurrent,
              resumeToken: emptyByteString()
            }
          }),
          e
        )
      })(),
      CurrentStatusUpdate
    !(function(e) {
      ;(e[(e.None = 0)] = 'None'),
        (e[(e.MarkNotCurrent = 1)] = 'MarkNotCurrent'),
        (e[(e.MarkCurrent = 2)] = 'MarkCurrent')
    })(CurrentStatusUpdate || (CurrentStatusUpdate = {}))
    var EMPTY_KEY_SET = documentKeySet(),
      ResetMapping = (function() {
        function e() {
          this.docs = EMPTY_KEY_SET
        }
        return (
          Object.defineProperty(e.prototype, 'documents', {
            get: function() {
              return this.docs
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.add = function(e) {
            this.docs = this.docs.add(e)
          }),
          (e.prototype.delete = function(e) {
            this.docs = this.docs.delete(e)
          }),
          (e.prototype.isEqual = function(e) {
            return null !== e && this.docs.isEqual(e.docs)
          }),
          e
        )
      })(),
      UpdateMapping = (function() {
        function e() {
          ;(this.addedDocuments = EMPTY_KEY_SET),
            (this.removedDocuments = EMPTY_KEY_SET)
        }
        return (
          (e.prototype.applyToKeySet = function(e) {
            var t = e
            return (
              this.addedDocuments.forEach(function(e) {
                return (t = t.add(e))
              }),
              this.removedDocuments.forEach(function(e) {
                return (t = t.delete(e))
              }),
              t
            )
          }),
          (e.prototype.add = function(e) {
            ;(this.addedDocuments = this.addedDocuments.add(e)),
              (this.removedDocuments = this.removedDocuments.delete(e))
          }),
          (e.prototype.delete = function(e) {
            ;(this.addedDocuments = this.addedDocuments.delete(e)),
              (this.removedDocuments = this.removedDocuments.add(e))
          }),
          (e.prototype.isEqual = function(e) {
            return (
              null !== e &&
              this.addedDocuments.isEqual(e.addedDocuments) &&
              this.removedDocuments.isEqual(e.removedDocuments)
            )
          }),
          e
        )
      })(),
      DocumentWatchChange = (function() {
        return function(e, t, n, r) {
          ;(this.updatedTargetIds = e),
            (this.removedTargetIds = t),
            (this.key = n),
            (this.newDoc = r)
        }
      })(),
      ExistenceFilterChange = (function() {
        return function(e, t) {
          ;(this.targetId = e), (this.existenceFilter = t)
        }
      })(),
      WatchTargetChangeState
    !(function(e) {
      ;(e[(e.NoChange = 0)] = 'NoChange'),
        (e[(e.Added = 1)] = 'Added'),
        (e[(e.Removed = 2)] = 'Removed'),
        (e[(e.Current = 3)] = 'Current'),
        (e[(e.Reset = 4)] = 'Reset')
    })(WatchTargetChangeState || (WatchTargetChangeState = {}))
    var WatchTargetChange = (function() {
        return function(e, t, n, r) {
          void 0 === n && (n = emptyByteString()),
            void 0 === r && (r = null),
            (this.state = e),
            (this.targetIds = t),
            (this.resumeToken = n),
            (this.cause = r)
        }
      })(),
      WatchChangeAggregator = (function() {
        function e(e, t, n) {
          ;(this.snapshotVersion = e),
            (this.listenTargets = t),
            (this.existenceFilters = {}),
            (this.targetChanges = {}),
            (this.documentUpdates = maybeDocumentMap()),
            (this.frozen = !1),
            (this.pendingTargetResponses = shallowCopy(n))
        }
        return (
          (e.prototype.add = function(e) {
            assert(
              !this.frozen,
              'Trying to modify frozen WatchChangeAggregator.'
            ),
              e instanceof DocumentWatchChange
                ? this.addDocumentChange(e)
                : e instanceof WatchTargetChange
                  ? this.addTargetChange(e)
                  : e instanceof ExistenceFilterChange
                    ? this.addExistenceFilterChange(e)
                    : fail('Unknown watch change: ' + e)
          }),
          (e.prototype.addChanges = function(e) {
            var t = this
            assert(
              !this.frozen,
              'Trying to modify frozen WatchChangeAggregator.'
            ),
              e.forEach(function(e) {
                return t.add(e)
              })
          }),
          (e.prototype.createRemoteEvent = function() {
            var e = this,
              t = this.targetChanges
            return (
              forEachNumber(this.targetChanges, function(n) {
                e.isActiveTarget(n) || delete t[n]
              }),
              (this.frozen = !0),
              new RemoteEvent(this.snapshotVersion, t, this.documentUpdates)
            )
          }),
          (e.prototype.ensureTargetChange = function(e) {
            var t = this.targetChanges[e]
            return (
              t ||
                ((t = {
                  currentStatusUpdate: CurrentStatusUpdate.None,
                  snapshotVersion: this.snapshotVersion,
                  mapping: new UpdateMapping(),
                  resumeToken: emptyByteString()
                }),
                (this.targetChanges[e] = t)),
              t
            )
          }),
          (e.prototype.isActiveTarget = function(e) {
            return (
              !contains(this.pendingTargetResponses, e) &&
              contains(this.listenTargets, e)
            )
          }),
          (e.prototype.addDocumentChange = function(e) {
            for (var t = !1, n = 0, r = e.updatedTargetIds; n < r.length; n++) {
              var o = r[n]
              if (this.isActiveTarget(o))
                this.ensureTargetChange(o).mapping.add(e.key), (t = !0)
            }
            for (var i = 0, a = e.removedTargetIds; i < a.length; i++) {
              o = a[i]
              if (this.isActiveTarget(o))
                this.ensureTargetChange(o).mapping.delete(e.key), (t = !0)
            }
            e.newDoc &&
              t &&
              (this.documentUpdates = this.documentUpdates.insert(
                e.key,
                e.newDoc
              ))
          }),
          (e.prototype.addTargetChange = function(e) {
            var t = this
            e.targetIds.forEach(function(n) {
              var r = t.ensureTargetChange(n)
              switch (e.state) {
                case WatchTargetChangeState.NoChange:
                  t.isActiveTarget(n) && applyResumeToken(r, e.resumeToken)
                  break
                case WatchTargetChangeState.Added:
                  t.recordTargetResponse(n),
                    contains(t.pendingTargetResponses, n) ||
                      ((r.mapping = new UpdateMapping()),
                      (r.currentStatusUpdate = CurrentStatusUpdate.None),
                      delete t.existenceFilters[n]),
                    applyResumeToken(r, e.resumeToken)
                  break
                case WatchTargetChangeState.Removed:
                  t.recordTargetResponse(n),
                    assert(
                      !e.cause,
                      'WatchChangeAggregator does not handle errored targets'
                    )
                  break
                case WatchTargetChangeState.Current:
                  t.isActiveTarget(n) &&
                    ((r.currentStatusUpdate = CurrentStatusUpdate.MarkCurrent),
                    applyResumeToken(r, e.resumeToken))
                  break
                case WatchTargetChangeState.Reset:
                  t.isActiveTarget(n) &&
                    ((r.mapping = new ResetMapping()),
                    applyResumeToken(r, e.resumeToken))
                  break
                default:
                  fail('Unknown target watch change state: ' + e.state)
              }
            })
          }),
          (e.prototype.recordTargetResponse = function(e) {
            var t = (this.pendingTargetResponses[e] || 0) - 1
            0 === t
              ? delete this.pendingTargetResponses[e]
              : (this.pendingTargetResponses[e] = t)
          }),
          (e.prototype.addExistenceFilterChange = function(e) {
            this.isActiveTarget(e.targetId) &&
              (this.existenceFilters[e.targetId] = e.existenceFilter)
          }),
          e
        )
      })()
    function applyResumeToken(e, t) {
      t.length > 0 && (e.resumeToken = t)
    }
    var DIRECTIONS = ((dirs = {}),
      (dirs[Direction.ASCENDING.name] = 'ASCENDING'),
      (dirs[Direction.DESCENDING.name] = 'DESCENDING'),
      dirs),
      OPERATORS = ((ops = {}),
      (ops[RelationOp.LESS_THAN.name] = 'LESS_THAN'),
      (ops[RelationOp.LESS_THAN_OR_EQUAL.name] = 'LESS_THAN_OR_EQUAL'),
      (ops[RelationOp.GREATER_THAN.name] = 'GREATER_THAN'),
      (ops[RelationOp.GREATER_THAN_OR_EQUAL.name] = 'GREATER_THAN_OR_EQUAL'),
      (ops[RelationOp.EQUAL.name] = 'EQUAL'),
      ops),
      ISO_REG_EXP = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
    function assertPresent(e, t) {
      assert(!isNullOrUndefined(e), t + ' is missing')
    }
    function parseInt64(e) {
      return 'number' == typeof e
        ? e
        : 'string' == typeof e ? Number(e) : fail("can't parse " + e)
    }
    var JsonProtoSerializer = (function() {
      function e(e, t) {
        ;(this.databaseId = e), (this.options = t)
      }
      return (
        (e.prototype.emptyByteString = function() {
          return this.options.useProto3Json ? '' : new Uint8Array(0)
        }),
        (e.prototype.unsafeCastProtoByteString = function(e) {
          return e
        }),
        (e.prototype.fromRpcStatus = function(e) {
          var t = void 0 === e.code ? Code.UNKNOWN : mapCodeFromRpcCode(e.code)
          return new FirestoreError(t, e.message || '')
        }),
        (e.prototype.toInt32Value = function(e) {
          return isNullOrUndefined(e) ? void 0 : {value: e}
        }),
        (e.prototype.fromInt32Value = function(e) {
          var t
          return isNullOrUndefined((t = 'object' == typeof e ? e.value : e))
            ? null
            : t
        }),
        (e.prototype.toTimestamp = function(e) {
          return {seconds: e.seconds, nanos: e.nanoseconds}
        }),
        (e.prototype.fromTimestamp = function(e) {
          if ('string' == typeof e) return this.fromIso8601String(e)
          assert(!!e, 'Cannot deserialize null or undefined timestamp.')
          var t = parseInt64(e.seconds || '0'),
            n = e.nanos || 0
          return new Timestamp(t, n)
        }),
        (e.prototype.fromIso8601String = function(e) {
          var t = 0,
            n = ISO_REG_EXP.exec(e)
          if ((assert(!!n, 'invalid timestamp: ' + e), n[1])) {
            var r = n[1]
            ;(r = (r + '000000000').substr(0, 9)), (t = Number(r))
          }
          var o = new Date(e),
            i = Math.floor(o.getTime() / 1e3)
          return new Timestamp(i, t)
        }),
        (e.prototype.toBytes = function(e) {
          return this.options.useProto3Json
            ? e.toBase64()
            : this.unsafeCastProtoByteString(e.toUint8Array())
        }),
        (e.prototype.fromBlob = function(e) {
          return 'string' == typeof e
            ? (assert(
                this.options.useProto3Json,
                'Expected bytes to be passed in as Uint8Array, but got a string instead.'
              ),
              Blob.fromBase64String(e))
            : (assert(
                !this.options.useProto3Json,
                'Expected bytes to be passed in as string, but got something else instead.'
              ),
              Blob.fromUint8Array(e))
        }),
        (e.prototype.toVersion = function(e) {
          return this.toTimestamp(e.toTimestamp())
        }),
        (e.prototype.fromVersion = function(e) {
          return (
            assert(!!e, "Trying to deserialize version that isn't set"),
            SnapshotVersion.fromTimestamp(this.fromTimestamp(e))
          )
        }),
        (e.prototype.toResourceName = function(e, t) {
          return this.fullyQualifiedPrefixPath(e)
            .child('documents')
            .child(t)
            .canonicalString()
        }),
        (e.prototype.fromResourceName = function(e) {
          var t = ResourcePath.fromString(e)
          return (
            assert(
              this.isValidResourceName(t),
              'Tried to deserialize invalid key ' + t.toString()
            ),
            t
          )
        }),
        (e.prototype.toName = function(e) {
          return this.toResourceName(this.databaseId, e.path)
        }),
        (e.prototype.fromName = function(e) {
          var t = this.fromResourceName(e)
          return (
            assert(
              t.get(1) === this.databaseId.projectId,
              'Tried to deserialize key from different project: ' +
                t.get(1) +
                ' vs ' +
                this.databaseId.projectId
            ),
            assert(
              (!t.get(3) && !this.databaseId.database) ||
                t.get(3) === this.databaseId.database,
              'Tried to deserialize key from different database: ' +
                t.get(3) +
                ' vs ' +
                this.databaseId.database
            ),
            new DocumentKey(this.extractLocalPathFromResourceName(t))
          )
        }),
        (e.prototype.toQueryPath = function(e) {
          return 0 === e.length
            ? this.encodedDatabaseId
            : this.toResourceName(this.databaseId, e)
        }),
        (e.prototype.fromQueryPath = function(e) {
          var t = this.fromResourceName(e)
          return 4 === t.length
            ? ResourcePath.EMPTY_PATH
            : this.extractLocalPathFromResourceName(t)
        }),
        Object.defineProperty(e.prototype, 'encodedDatabaseId', {
          get: function() {
            return new ResourcePath([
              'projects',
              this.databaseId.projectId,
              'databases',
              this.databaseId.database
            ]).canonicalString()
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.fullyQualifiedPrefixPath = function(e) {
          return new ResourcePath([
            'projects',
            e.projectId,
            'databases',
            e.database
          ])
        }),
        (e.prototype.extractLocalPathFromResourceName = function(e) {
          return (
            assert(
              e.length > 4 && 'documents' === e.get(4),
              'tried to deserialize invalid key ' + e.toString()
            ),
            e.popFirst(5)
          )
        }),
        (e.prototype.isValidResourceName = function(e) {
          return (
            e.length >= 4 && 'projects' === e.get(0) && 'databases' === e.get(2)
          )
        }),
        (e.prototype.toValue = function(e) {
          if (e instanceof NullValue) return {nullValue: 'NULL_VALUE'}
          if (e instanceof BooleanValue) return {booleanValue: e.value()}
          if (e instanceof IntegerValue) return {integerValue: '' + e.value()}
          if (e instanceof DoubleValue) {
            var t = e.value()
            if (this.options.useProto3Json) {
              if (isNaN(t)) return {doubleValue: 'NaN'}
              if (t === 1 / 0) return {doubleValue: 'Infinity'}
              if (t === -1 / 0) return {doubleValue: '-Infinity'}
            }
            return {doubleValue: e.value()}
          }
          return e instanceof StringValue
            ? {stringValue: e.value()}
            : e instanceof ObjectValue
              ? {mapValue: this.toMapValue(e)}
              : e instanceof ArrayValue
                ? {arrayValue: this.toArrayValue(e)}
                : e instanceof TimestampValue
                  ? {timestampValue: this.toTimestamp(e.internalValue)}
                  : e instanceof GeoPointValue
                    ? {
                        geoPointValue: {
                          latitude: e.value().latitude,
                          longitude: e.value().longitude
                        }
                      }
                    : e instanceof BlobValue
                      ? {bytesValue: this.toBytes(e.value())}
                      : e instanceof RefValue
                        ? {
                            referenceValue: this.toResourceName(
                              e.databaseId,
                              e.key.path
                            )
                          }
                        : fail('Unknown FieldValue ' + JSON.stringify(e))
        }),
        (e.prototype.fromValue = function(e) {
          var t = this,
            n = e.value_type
          if (hasTag(e, n, 'nullValue')) return NullValue.INSTANCE
          if (hasTag(e, n, 'booleanValue'))
            return BooleanValue.of(e.booleanValue)
          if (hasTag(e, n, 'integerValue'))
            return new IntegerValue(parseInt64(e.integerValue))
          if (hasTag(e, n, 'doubleValue')) {
            if (this.options.useProto3Json) {
              if ('NaN' === e.doubleValue) return DoubleValue.NAN
              if ('Infinity' === e.doubleValue)
                return DoubleValue.POSITIVE_INFINITY
              if ('-Infinity' === e.doubleValue)
                return DoubleValue.NEGATIVE_INFINITY
            }
            return new DoubleValue(e.doubleValue)
          }
          if (hasTag(e, n, 'stringValue')) return new StringValue(e.stringValue)
          if (hasTag(e, n, 'mapValue'))
            return this.fromFields(e.mapValue.fields || {})
          if (hasTag(e, n, 'arrayValue')) {
            assertPresent(e.arrayValue, 'arrayValue')
            var r = e.arrayValue.values || []
            return new ArrayValue(
              r.map(function(e) {
                return t.fromValue(e)
              })
            )
          }
          if (hasTag(e, n, 'timestampValue'))
            return (
              assertPresent(e.timestampValue, 'timestampValue'),
              new TimestampValue(this.fromTimestamp(e.timestampValue))
            )
          if (hasTag(e, n, 'geoPointValue')) {
            assertPresent(e.geoPointValue, 'geoPointValue')
            var o = e.geoPointValue.latitude || 0,
              i = e.geoPointValue.longitude || 0
            return new GeoPointValue(new GeoPoint(o, i))
          }
          if (hasTag(e, n, 'bytesValue')) {
            assertPresent(e.bytesValue, 'bytesValue')
            var a = this.fromBlob(e.bytesValue)
            return new BlobValue(a)
          }
          if (hasTag(e, n, 'referenceValue')) {
            assertPresent(e.referenceValue, 'referenceValue')
            var s = this.fromResourceName(e.referenceValue),
              u = new DatabaseId(s.get(1), s.get(3)),
              c = new DocumentKey(this.extractLocalPathFromResourceName(s))
            return new RefValue(u, c)
          }
          return fail('Unknown Value proto ' + JSON.stringify(e))
        }),
        (e.prototype.toMutationDocument = function(e, t) {
          return {name: this.toName(e), fields: this.toFields(t)}
        }),
        (e.prototype.toDocument = function(e) {
          return (
            assert(
              !e.hasLocalMutations,
              "Can't serialize documents with mutations."
            ),
            {
              name: this.toName(e.key),
              fields: this.toFields(e.data),
              updateTime: this.toTimestamp(e.version.toTimestamp())
            }
          )
        }),
        (e.prototype.fromDocument = function(e) {
          return new Document(
            this.fromName(e.name),
            this.fromVersion(e.updateTime),
            this.fromFields(e.fields || {}),
            {hasLocalMutations: !1}
          )
        }),
        (e.prototype.toFields = function(e) {
          var t = this,
            n = {}
          return (
            e.forEach(function(e, r) {
              n[e] = t.toValue(r)
            }),
            n
          )
        }),
        (e.prototype.fromFields = function(e) {
          var t = this,
            n = e,
            r = ObjectValue.EMPTY
          return (
            forEach(n, function(e, n) {
              r = r.set(new FieldPath([e]), t.fromValue(n))
            }),
            r
          )
        }),
        (e.prototype.toMapValue = function(e) {
          return {fields: this.toFields(e)}
        }),
        (e.prototype.toArrayValue = function(e) {
          var t = this,
            n = []
          return (
            e.forEach(function(e) {
              n.push(t.toValue(e))
            }),
            {values: n}
          )
        }),
        (e.prototype.fromFound = function(e) {
          assert(
            !!e.found,
            'Tried to deserialize a found document from a missing document.'
          ),
            assertPresent(e.found.name, 'doc.found.name'),
            assertPresent(e.found.updateTime, 'doc.found.updateTime')
          var t = this.fromName(e.found.name),
            n = this.fromVersion(e.found.updateTime),
            r = this.fromFields(e.found.fields || {})
          return new Document(t, n, r, {hasLocalMutations: !1})
        }),
        (e.prototype.fromMissing = function(e) {
          assert(
            !!e.missing,
            'Tried to deserialize a missing document from a found document.'
          ),
            assert(
              !!e.readTime,
              'Tried to deserialize a missing document without a read time.'
            )
          var t = this.fromName(e.missing),
            n = this.fromVersion(e.readTime)
          return new NoDocument(t, n)
        }),
        (e.prototype.fromMaybeDocument = function(e) {
          var t = e.result
          return hasTag(e, t, 'found')
            ? this.fromFound(e)
            : hasTag(e, t, 'missing')
              ? this.fromMissing(e)
              : fail('invalid batch get response: ' + JSON.stringify(e))
        }),
        (e.prototype.toWatchTargetChangeState = function(e) {
          switch (e) {
            case WatchTargetChangeState.Added:
              return 'ADD'
            case WatchTargetChangeState.Current:
              return 'CURRENT'
            case WatchTargetChangeState.NoChange:
              return 'NO_CHANGE'
            case WatchTargetChangeState.Removed:
              return 'REMOVE'
            case WatchTargetChangeState.Reset:
              return 'RESET'
            default:
              return fail('Unknown WatchTargetChangeState: ' + e)
          }
        }),
        (e.prototype.toTestWatchChange = function(e) {
          if (e instanceof ExistenceFilterChange)
            return {
              filter: {count: e.existenceFilter.count, targetId: e.targetId}
            }
          if (e instanceof DocumentWatchChange) {
            if (e.newDoc instanceof Document) {
              var t = e.newDoc
              return {
                documentChange: {
                  document: {
                    name: this.toName(t.key),
                    fields: this.toFields(t.data),
                    updateTime: this.toVersion(t.version)
                  },
                  targetIds: e.updatedTargetIds,
                  removedTargetIds: e.removedTargetIds
                }
              }
            }
            if (e.newDoc instanceof NoDocument) {
              t = e.newDoc
              return {
                documentDelete: {
                  document: this.toName(t.key),
                  readTime: this.toVersion(t.version),
                  removedTargetIds: e.removedTargetIds
                }
              }
            }
            if (null === e.newDoc)
              return {
                documentRemove: {
                  document: this.toName(e.key),
                  removedTargetIds: e.removedTargetIds
                }
              }
          }
          if (e instanceof WatchTargetChange) {
            var n = void 0
            return (
              e.cause &&
                (n = {
                  code: mapRpcCodeFromCode(e.cause.code),
                  message: e.cause.message
                }),
              {
                targetChange: {
                  targetChangeType: this.toWatchTargetChangeState(e.state),
                  targetIds: e.targetIds,
                  resumeToken: this.unsafeCastProtoByteString(e.resumeToken),
                  cause: n
                }
              }
            )
          }
          return fail('Unrecognized watch change: ' + JSON.stringify(e))
        }),
        (e.prototype.fromWatchChange = function(e) {
          var t,
            n = e.response_type
          if (hasTag(e, n, 'targetChange')) {
            assertPresent(e.targetChange, 'targetChange')
            var r = this.fromWatchTargetChangeState(
                e.targetChange.targetChangeType || 'NO_CHANGE'
              ),
              o = e.targetChange.targetIds || [],
              i = e.targetChange.resumeToken || this.emptyByteString(),
              a = e.targetChange.cause,
              s = a && this.fromRpcStatus(a)
            t = new WatchTargetChange(r, o, i, s || null)
          } else if (hasTag(e, n, 'documentChange')) {
            assertPresent(e.documentChange, 'documentChange'),
              assertPresent(e.documentChange.document, 'documentChange.name'),
              assertPresent(
                e.documentChange.document.name,
                'documentChange.document.name'
              ),
              assertPresent(
                e.documentChange.document.updateTime,
                'documentChange.document.updateTime'
              )
            var u = e.documentChange,
              c = this.fromName(u.document.name),
              h = this.fromVersion(u.document.updateTime),
              l = this.fromFields(u.document.fields || {}),
              f = new Document(c, h, l, {hasLocalMutations: !1}),
              d = u.targetIds || [],
              p = u.removedTargetIds || []
            t = new DocumentWatchChange(d, p, f.key, f)
          } else if (hasTag(e, n, 'documentDelete')) {
            assertPresent(e.documentDelete, 'documentDelete'),
              assertPresent(
                e.documentDelete.document,
                'documentDelete.document'
              )
            var m = e.documentDelete
            ;(c = this.fromName(m.document)),
              (h = m.readTime
                ? this.fromVersion(m.readTime)
                : SnapshotVersion.forDeletedDoc()),
              (f = new NoDocument(c, h)),
              (p = m.removedTargetIds || [])
            t = new DocumentWatchChange([], p, f.key, f)
          } else if (hasTag(e, n, 'documentRemove')) {
            assertPresent(e.documentRemove, 'documentRemove'),
              assertPresent(e.documentRemove.document, 'documentRemove')
            var y = e.documentRemove
            ;(c = this.fromName(y.document)), (p = y.removedTargetIds || [])
            t = new DocumentWatchChange([], p, c, null)
          } else {
            if (!hasTag(e, n, 'filter'))
              return fail('Unknown change type ' + JSON.stringify(e))
            assertPresent(e.filter, 'filter'),
              assertPresent(e.filter.targetId, 'filter.targetId')
            var g = e.filter,
              v = g.count || 0,
              b = new ExistenceFilter(v),
              E = g.targetId
            t = new ExistenceFilterChange(E, b)
          }
          return t
        }),
        (e.prototype.fromWatchTargetChangeState = function(e) {
          return 'NO_CHANGE' === e
            ? WatchTargetChangeState.NoChange
            : 'ADD' === e
              ? WatchTargetChangeState.Added
              : 'REMOVE' === e
                ? WatchTargetChangeState.Removed
                : 'CURRENT' === e
                  ? WatchTargetChangeState.Current
                  : 'RESET' === e
                    ? WatchTargetChangeState.Reset
                    : fail('Got unexpected TargetChange.state: ' + e)
        }),
        (e.prototype.versionFromListenResponse = function(e) {
          if (!hasTag(e, e.response_type, 'targetChange'))
            return SnapshotVersion.MIN
          var t = e.targetChange
          return t.targetIds && t.targetIds.length
            ? SnapshotVersion.MIN
            : t.readTime ? this.fromVersion(t.readTime) : SnapshotVersion.MIN
        }),
        (e.prototype.toMutation = function(e) {
          var t,
            n = this
          if (e instanceof SetMutation)
            t = {update: this.toMutationDocument(e.key, e.value)}
          else if (e instanceof DeleteMutation) t = {delete: this.toName(e.key)}
          else if (e instanceof PatchMutation)
            t = {
              update: this.toMutationDocument(e.key, e.data),
              updateMask: this.toDocumentMask(e.fieldMask)
            }
          else {
            if (!(e instanceof TransformMutation))
              return fail('Unknown mutation type ' + e.type)
            t = {
              transform: {
                document: this.toName(e.key),
                fieldTransforms: e.fieldTransforms.map(function(e) {
                  return n.toFieldTransform(e)
                })
              }
            }
          }
          return (
            e.precondition.isNone ||
              (t.currentDocument = this.toPrecondition(e.precondition)),
            t
          )
        }),
        (e.prototype.fromMutation = function(e) {
          var t = this,
            n = e.currentDocument
              ? this.fromPrecondition(e.currentDocument)
              : Precondition.NONE
          if (e.update) {
            assertPresent(e.update.name, 'name')
            var r = this.fromName(e.update.name),
              o = this.fromFields(e.update.fields || {})
            if (e.updateMask) {
              var i = this.fromDocumentMask(e.updateMask)
              return new PatchMutation(r, o, i, n)
            }
            return new SetMutation(r, o, n)
          }
          if (e.delete) {
            r = this.fromName(e.delete)
            return new DeleteMutation(r, n)
          }
          if (e.transform) {
            r = this.fromName(e.transform.document)
            var a = e.transform.fieldTransforms.map(function(e) {
              return t.fromFieldTransform(e)
            })
            return (
              assert(
                !0 === n.exists,
                'Transforms only support precondition "exists == true"'
              ),
              new TransformMutation(r, a)
            )
          }
          return fail('unknown mutation proto: ' + JSON.stringify(e))
        }),
        (e.prototype.toPrecondition = function(e) {
          return (
            assert(!e.isNone, "Can't serialize an empty precondition"),
            void 0 !== e.updateTime
              ? {updateTime: this.toVersion(e.updateTime)}
              : void 0 !== e.exists
                ? {exists: e.exists}
                : fail('Unknown precondition')
          )
        }),
        (e.prototype.fromPrecondition = function(e) {
          return void 0 !== e.updateTime
            ? Precondition.updateTime(this.fromVersion(e.updateTime))
            : void 0 !== e.exists
              ? Precondition.exists(e.exists)
              : Precondition.NONE
        }),
        (e.prototype.fromWriteResult = function(e) {
          var t = this,
            n = e.updateTime ? this.fromVersion(e.updateTime) : null,
            r = null
          return (
            e.transformResults &&
              e.transformResults.length > 0 &&
              (r = e.transformResults.map(function(e) {
                return t.fromValue(e)
              })),
            new MutationResult(n, r)
          )
        }),
        (e.prototype.fromWriteResults = function(e) {
          var t = this
          return (e || []).map(function(e) {
            return t.fromWriteResult(e)
          })
        }),
        (e.prototype.toFieldTransform = function(e) {
          return (
            assert(
              e.transform instanceof ServerTimestampTransform,
              'Unknown transform: ' + e.transform
            ),
            {
              fieldPath: e.field.canonicalString(),
              setToServerValue: 'REQUEST_TIME'
            }
          )
        }),
        (e.prototype.fromFieldTransform = function(e) {
          assert(
            'REQUEST_TIME' === e.setToServerValue,
            'Unknown transform proto: ' + JSON.stringify(e)
          )
          var t = FieldPath.fromServerFormat(e.fieldPath)
          return new FieldTransform(t, ServerTimestampTransform.instance)
        }),
        (e.prototype.toDocumentsTarget = function(e) {
          return {documents: [this.toQueryPath(e.path)]}
        }),
        (e.prototype.fromDocumentsTarget = function(e) {
          var t = e.documents.length
          assert(
            1 === t,
            'DocumentsTarget contained other than 1 document: ' + t
          )
          var n = e.documents[0]
          return Query.atPath(this.fromQueryPath(n))
        }),
        (e.prototype.toQueryTarget = function(e) {
          var t = {structuredQuery: {}}
          if (e.path.isEmpty())
            t.parent = this.toQueryPath(ResourcePath.EMPTY_PATH)
          else {
            var n = e.path
            assert(
              n.length % 2 != 0,
              'Document queries with filters are not supported.'
            ),
              (t.parent = this.toQueryPath(n.popLast())),
              (t.structuredQuery.from = [{collectionId: n.lastSegment()}])
          }
          var r = this.toFilter(e.filters)
          r && (t.structuredQuery.where = r)
          var o = this.toOrder(e.orderBy)
          o && (t.structuredQuery.orderBy = o)
          var i = this.toInt32Value(e.limit)
          return (
            void 0 !== i && (t.structuredQuery.limit = i),
            e.startAt && (t.structuredQuery.startAt = this.toCursor(e.startAt)),
            e.endAt && (t.structuredQuery.endAt = this.toCursor(e.endAt)),
            t
          )
        }),
        (e.prototype.fromQueryTarget = function(e) {
          var t = this.fromQueryPath(e.parent),
            n = e.structuredQuery,
            r = n.from ? n.from.length : 0
          if (r > 0) {
            assert(
              1 === r,
              'StructuredQuery.from with more than one collection is not supported.'
            )
            var o = n.from[0]
            t = t.child(o.collectionId)
          }
          var i = []
          n.where && (i = this.fromFilter(n.where))
          var a = []
          n.orderBy && (a = this.fromOrder(n.orderBy))
          var s = null
          n.limit && (s = this.fromInt32Value(n.limit))
          var u = null
          n.startAt && (u = this.fromCursor(n.startAt))
          var c = null
          return (
            n.endAt && (c = this.fromCursor(n.endAt)),
            new Query(t, a, i, s, u, c)
          )
        }),
        (e.prototype.toListenRequestLabels = function(e) {
          var t = this.toLabel(e.purpose)
          return null == t ? null : {'goog-listen-tags': t}
        }),
        (e.prototype.toLabel = function(e) {
          switch (e) {
            case QueryPurpose.Listen:
              return null
            case QueryPurpose.ExistenceFilterMismatch:
              return 'existence-filter-mismatch'
            case QueryPurpose.LimboResolution:
              return 'limbo-document'
            default:
              return fail('Unrecognized query purpose: ' + e)
          }
        }),
        (e.prototype.toTarget = function(e) {
          var t,
            n = e.query
          return (
            ((t = n.isDocumentQuery()
              ? {documents: this.toDocumentsTarget(n)}
              : {query: this.toQueryTarget(n)}).targetId =
              e.targetId),
            e.resumeToken.length > 0 &&
              (t.resumeToken = this.unsafeCastProtoByteString(e.resumeToken)),
            t
          )
        }),
        (e.prototype.toFilter = function(e) {
          var t = this
          if (0 !== e.length) {
            var n = e.map(function(e) {
              return e instanceof RelationFilter
                ? t.toRelationFilter(e)
                : t.toUnaryFilter(e)
            })
            return 1 === n.length
              ? n[0]
              : {compositeFilter: {op: 'AND', filters: n}}
          }
        }),
        (e.prototype.fromFilter = function(e) {
          var t = this
          return e
            ? void 0 !== e.unaryFilter
              ? [this.fromUnaryFilter(e)]
              : void 0 !== e.fieldFilter
                ? [this.fromRelationFilter(e)]
                : void 0 !== e.compositeFilter
                  ? e.compositeFilter.filters
                      .map(function(e) {
                        return t.fromFilter(e)
                      })
                      .reduce(function(e, t) {
                        return e.concat(t)
                      })
                  : fail('Unknown filter: ' + JSON.stringify(e))
            : []
        }),
        (e.prototype.toOrder = function(e) {
          var t = this
          if (0 !== e.length)
            return e.map(function(e) {
              return t.toPropertyOrder(e)
            })
        }),
        (e.prototype.fromOrder = function(e) {
          var t = this
          return e.map(function(e) {
            return t.fromPropertyOrder(e)
          })
        }),
        (e.prototype.toCursor = function(e) {
          var t = this
          return {
            before: e.before,
            values: e.position.map(function(e) {
              return t.toValue(e)
            })
          }
        }),
        (e.prototype.fromCursor = function(e) {
          var t = this,
            n = !!e.before,
            r = e.values.map(function(e) {
              return t.fromValue(e)
            })
          return new Bound(r, n)
        }),
        (e.prototype.toDirection = function(e) {
          return DIRECTIONS[e.name]
        }),
        (e.prototype.fromDirection = function(e) {
          switch (e) {
            case 'ASCENDING':
              return Direction.ASCENDING
            case 'DESCENDING':
              return Direction.DESCENDING
            default:
              return
          }
        }),
        (e.prototype.toOperatorName = function(e) {
          return OPERATORS[e.name]
        }),
        (e.prototype.fromOperatorName = function(e) {
          switch (e) {
            case 'EQUAL':
              return RelationOp.EQUAL
            case 'GREATER_THAN':
              return RelationOp.GREATER_THAN
            case 'GREATER_THAN_OR_EQUAL':
              return RelationOp.GREATER_THAN_OR_EQUAL
            case 'LESS_THAN':
              return RelationOp.LESS_THAN
            case 'LESS_THAN_OR_EQUAL':
              return RelationOp.LESS_THAN_OR_EQUAL
            case 'OPERATOR_UNSPECIFIED':
              return fail('Unspecified relation')
            default:
              return fail('Unknown relation')
          }
        }),
        (e.prototype.toFieldPathReference = function(e) {
          return {fieldPath: e.canonicalString()}
        }),
        (e.prototype.fromFieldPathReference = function(e) {
          return FieldPath.fromServerFormat(e.fieldPath)
        }),
        (e.prototype.toPropertyOrder = function(e) {
          return {
            field: this.toFieldPathReference(e.field),
            direction: this.toDirection(e.dir)
          }
        }),
        (e.prototype.fromPropertyOrder = function(e) {
          return new OrderBy(
            this.fromFieldPathReference(e.field),
            this.fromDirection(e.direction)
          )
        }),
        (e.prototype.toRelationFilter = function(e) {
          return e instanceof RelationFilter
            ? {
                fieldFilter: {
                  field: this.toFieldPathReference(e.field),
                  op: this.toOperatorName(e.op),
                  value: this.toValue(e.value)
                }
              }
            : fail('Unrecognized filter: ' + JSON.stringify(e))
        }),
        (e.prototype.fromRelationFilter = function(e) {
          return new RelationFilter(
            this.fromFieldPathReference(e.fieldFilter.field),
            this.fromOperatorName(e.fieldFilter.op),
            this.fromValue(e.fieldFilter.value)
          )
        }),
        (e.prototype.toUnaryFilter = function(e) {
          return e instanceof NanFilter
            ? {
                unaryFilter: {
                  field: this.toFieldPathReference(e.field),
                  op: 'IS_NAN'
                }
              }
            : e instanceof NullFilter
              ? {
                  unaryFilter: {
                    field: this.toFieldPathReference(e.field),
                    op: 'IS_NULL'
                  }
                }
              : fail('Unrecognized filter: ' + JSON.stringify(e))
        }),
        (e.prototype.fromUnaryFilter = function(e) {
          switch (e.unaryFilter.op) {
            case 'IS_NAN':
              var t = this.fromFieldPathReference(e.unaryFilter.field)
              return new NanFilter(t)
            case 'IS_NULL':
              var n = this.fromFieldPathReference(e.unaryFilter.field)
              return new NullFilter(n)
            case 'OPERATOR_UNSPECIFIED':
              return fail('Unspecified filter')
            default:
              return fail('Unknown filter')
          }
        }),
        (e.prototype.toDocumentMask = function(e) {
          return {
            fieldPaths: e.fields.map(function(e) {
              return e.canonicalString()
            })
          }
        }),
        (e.prototype.fromDocumentMask = function(e) {
          var t = (e.fieldPaths || []).map(function(e) {
            return FieldPath.fromServerFormat(e)
          })
          return new FieldMask(t)
        }),
        e
      )
    })()
    function hasTag(e, t, n) {
      return t === n || (!t && n in e)
    }
    var StreamBridge = (function() {
        function e(e) {
          ;(this.sendFn = e.sendFn), (this.closeFn = e.closeFn)
        }
        return (
          (e.prototype.onOpen = function(e) {
            assert(!this.wrappedOnOpen, 'Called onOpen on stream twice!'),
              (this.wrappedOnOpen = e)
          }),
          (e.prototype.onClose = function(e) {
            assert(!this.wrappedOnClose, 'Called onClose on stream twice!'),
              (this.wrappedOnClose = e)
          }),
          (e.prototype.onMessage = function(e) {
            assert(!this.wrappedOnMessage, 'Called onMessage on stream twice!'),
              (this.wrappedOnMessage = e)
          }),
          (e.prototype.close = function() {
            this.closeFn()
          }),
          (e.prototype.send = function(e) {
            this.sendFn(e)
          }),
          (e.prototype.callOnOpen = function() {
            assert(
              void 0 !== this.wrappedOnOpen,
              'Cannot call onOpen because no callback was set'
            ),
              this.wrappedOnOpen()
          }),
          (e.prototype.callOnClose = function(e) {
            assert(
              void 0 !== this.wrappedOnClose,
              'Cannot call onClose because no callback was set'
            ),
              this.wrappedOnClose(e)
          }),
          (e.prototype.callOnMessage = function(e) {
            assert(
              void 0 !== this.wrappedOnMessage,
              'Cannot call onMessage because no callback was set'
            ),
              this.wrappedOnMessage(e)
          }),
          e
        )
      })(),
      LOG_TAG = 'Connection',
      RPC_STREAM_SERVICE = 'google.firestore.v1beta1.Firestore',
      RPC_URL_VERSION = 'v1beta1',
      RPC_NAME_REST_MAPPING = {BatchGetDocuments: 'batchGet', Commit: 'commit'},
      X_GOOG_API_CLIENT_VALUE = 'gl-js/ fire/' + SDK_VERSION,
      XHR_TIMEOUT_SECS = 15,
      WebChannelConnection = (function() {
        function e(e) {
          ;(this.databaseId = e.databaseId), (this.pool = new dist_5())
          var t = e.ssl ? 'https' : 'http'
          this.baseUrl = t + '://' + e.host
        }
        return (
          (e.prototype.modifyHeadersForRequest = function(e, t) {
            if (t)
              for (var n in t.authHeaders)
                t.authHeaders.hasOwnProperty(n) && (e[n] = t.authHeaders[n])
            e['X-Goog-Api-Client'] = X_GOOG_API_CLIENT_VALUE
          }),
          (e.prototype.invokeRPC = function(e, t, n) {
            var r = this,
              o = this.makeUrl(e)
            return new Promise(function(i, a) {
              r.pool.getObject(function(s) {
                s.listenOnce(dist_3.COMPLETE, function() {
                  try {
                    switch (s.getLastErrorCode()) {
                      case dist_2.NO_ERROR:
                        var t = s.getResponseJson()
                        debug(LOG_TAG, 'XHR received:', JSON.stringify(t)), i(t)
                        break
                      case dist_2.TIMEOUT:
                        debug(LOG_TAG, 'RPC "' + e + '" timed out'),
                          a(
                            new FirestoreError(
                              Code.DEADLINE_EXCEEDED,
                              'Request time out'
                            )
                          )
                        break
                      case dist_2.HTTP_ERROR:
                        var n = s.getStatus()
                        debug(
                          LOG_TAG,
                          'RPC "' + e + '" failed with status:',
                          n,
                          'response text:',
                          s.getResponseText()
                        ),
                          n > 0
                            ? a(
                                new FirestoreError(
                                  mapCodeFromHttpStatus(n),
                                  'Server responded with status ' +
                                    s.getStatusText()
                                )
                              )
                            : (debug(LOG_TAG, 'RPC "' + e + '" failed'),
                              a(
                                new FirestoreError(
                                  Code.UNAVAILABLE,
                                  'Connection failed.'
                                )
                              ))
                        break
                      default:
                        fail(
                          'RPC "' +
                            e +
                            '" failed with unanticipated webchannel error ' +
                            s.getLastErrorCode() +
                            ': ' +
                            s.getLastError() +
                            ', giving up.'
                        )
                    }
                  } finally {
                    debug(LOG_TAG, 'RPC "' + e + '" completed.'),
                      r.pool.releaseObject(s)
                  }
                })
                var u = JSON.stringify(t)
                debug(LOG_TAG, 'XHR sending: ', o + ' ' + u)
                var c = {'Content-Type': 'text/plain'}
                r.modifyHeadersForRequest(c, n),
                  s.send(o, 'POST', u, c, XHR_TIMEOUT_SECS)
              })
            })
          }),
          (e.prototype.invokeStreamingRPC = function(e, t, n) {
            return this.invokeRPC(e, t, n)
          }),
          (e.prototype.openStream = function(e, t) {
            var n = [this.baseUrl, '/', RPC_STREAM_SERVICE, '/', e, '/channel'],
              r = dist_1(),
              o = {
                backgroundChannelTest: !0,
                httpSessionIdParam: 'gsessionid',
                initMessageHeaders: {},
                httpHeadersOverwriteParam: '$httpHeaders',
                messageUrlParams: {
                  database:
                    'projects/' +
                    this.databaseId.projectId +
                    '/databases/' +
                    this.databaseId.database
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0
              }
            this.modifyHeadersForRequest(o.initMessageHeaders, t)
            var i = n.join('')
            debug(LOG_TAG, 'Creating WebChannel: ' + i + ' ' + o)
            var a = r.createWebChannel(i, o),
              s = !1,
              u = !1,
              c = new StreamBridge({
                sendFn: function(e) {
                  u
                    ? debug(
                        LOG_TAG,
                        'Not sending because WebChannel is closed:',
                        e
                      )
                    : (s ||
                        (debug(LOG_TAG, 'Opening WebChannel transport.'),
                        a.open(),
                        (s = !0)),
                      debug(LOG_TAG, 'WebChannel sending:', e),
                      a.send(e))
                },
                closeFn: function() {
                  return a.close()
                }
              }),
              h = function(e, t) {
                a.listen(e, function(e) {
                  try {
                    t(e)
                  } catch (e) {
                    setTimeout(function() {
                      throw e
                    }, 0)
                  }
                })
              }
            return (
              h(dist_4.EventType.OPEN, function() {
                u || debug(LOG_TAG, 'WebChannel transport opened.')
              }),
              h(dist_4.EventType.CLOSE, function() {
                u ||
                  ((u = !0),
                  debug(LOG_TAG, 'WebChannel transport closed'),
                  c.callOnClose())
              }),
              h(dist_4.EventType.ERROR, function(e) {
                u ||
                  ((u = !0),
                  debug(LOG_TAG, 'WebChannel transport errored:', e),
                  c.callOnClose(
                    new FirestoreError(
                      Code.UNAVAILABLE,
                      'The operation could not be completed'
                    )
                  ))
              }),
              h(dist_4.EventType.MESSAGE, function(e) {
                if (!u) {
                  var t = e.data[0]
                  assert(!!t, 'Got a webchannel message without data.')
                  var n = t.error || (t[0] && t[0].error)
                  if (n) {
                    debug(LOG_TAG, 'WebChannel received error:', n)
                    var r = n.status,
                      o = mapCodeFromRpcStatus(r),
                      i = n.message
                    void 0 === o &&
                      ((o = Code.INTERNAL),
                      (i =
                        'Unknown error status: ' +
                        r +
                        ' with message ' +
                        n.message)),
                      (u = !0),
                      c.callOnClose(new FirestoreError(o, i)),
                      a.close()
                  } else
                    debug(LOG_TAG, 'WebChannel received:', t),
                      c.callOnMessage(t)
                }
              }),
              setTimeout(function() {
                c.callOnOpen()
              }, 0),
              c
            )
          }),
          (e.prototype.makeUrl = function(e) {
            var t = RPC_NAME_REST_MAPPING[e]
            assert(void 0 !== t, 'Unknown REST mapping for: ' + e)
            var n = [this.baseUrl, '/', RPC_URL_VERSION]
            return (
              n.push('/projects/'),
              n.push(this.databaseId.projectId),
              n.push('/databases/'),
              n.push(this.databaseId.database),
              n.push('/documents'),
              n.push(':'),
              n.push(t),
              n.join('')
            )
          }),
          e
        )
      })(),
      BrowserPlatform = (function() {
        function e() {
          ;(this.emptyByteString = ''),
            (this.base64Available = 'undefined' != typeof atob)
        }
        return (
          (e.prototype.loadConnection = function(e) {
            return Promise.resolve(new WebChannelConnection(e))
          }),
          (e.prototype.newSerializer = function(e) {
            return new JsonProtoSerializer(e, {useProto3Json: !0})
          }),
          (e.prototype.formatJSON = function(e) {
            return JSON.stringify(e)
          }),
          (e.prototype.atob = function(e) {
            return atob(e)
          }),
          (e.prototype.btoa = function(e) {
            return btoa(e)
          }),
          e
        )
      })()
    PlatformSupport.setPlatform(new BrowserPlatform())
    var FieldPath$1 = (function() {
        function e() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          validateNamedArrayAtLeastNumberOfElements(
            'FieldPath',
            e,
            'fieldNames',
            1
          )
          for (var n = 0; n < e.length; ++n)
            if (
              (validateArgType('FieldPath', 'string', n, e[n]),
              0 === e[n].length)
            )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Invalid field name at argument $(i + 1). Field names must not be empty.'
              )
          this._internalPath = new FieldPath(e)
        }
        return (
          (e.documentId = function() {
            return e._DOCUMENT_ID
          }),
          (e.prototype.isEqual = function(t) {
            if (!(t instanceof e))
              throw invalidClassError('isEqual', 'FieldPath', 1, t)
            return this._internalPath.isEqual(t._internalPath)
          }),
          (e._DOCUMENT_ID = new e(FieldPath.keyField().canonicalString())),
          e
        )
      })(),
      RESERVED = new RegExp('[~\\*/\\[\\]]'),
      OnlineState,
      ChangeType,
      SyncState
    function fromDotSeparatedString(e) {
      if (e.search(RESERVED) >= 0)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Invalid field path (' +
            e +
            "). Paths must not contain '~', '*', '/', '[', or ']'"
        )
      try {
        return new (FieldPath$1.bind.apply(
          FieldPath$1,
          [void 0].concat(e.split('.'))
        ))()
      } catch (t) {
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Invalid field path (' +
            e +
            "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
        )
      }
    }
    !(function(e) {
      ;(e[(e.Unknown = 0)] = 'Unknown'),
        (e[(e.Online = 1)] = 'Online'),
        (e[(e.Offline = 2)] = 'Offline')
    })(OnlineState || (OnlineState = {})),
      (function(e) {
        ;(e[(e.Added = 0)] = 'Added'),
          (e[(e.Removed = 1)] = 'Removed'),
          (e[(e.Modified = 2)] = 'Modified'),
          (e[(e.Metadata = 3)] = 'Metadata')
      })(ChangeType || (ChangeType = {})),
      (function(e) {
        ;(e[(e.Local = 0)] = 'Local'), (e[(e.Synced = 1)] = 'Synced')
      })(SyncState || (SyncState = {}))
    var DocumentChangeSet = (function() {
        function e() {
          this.changeMap = new SortedMap(DocumentKey.comparator)
        }
        return (
          (e.prototype.track = function(e) {
            var t = e.doc.key,
              n = this.changeMap.get(t)
            n
              ? e.type !== ChangeType.Added && n.type === ChangeType.Metadata
                ? (this.changeMap = this.changeMap.insert(t, e))
                : e.type === ChangeType.Metadata &&
                  n.type !== ChangeType.Removed
                  ? (this.changeMap = this.changeMap.insert(t, {
                      type: n.type,
                      doc: e.doc
                    }))
                  : e.type === ChangeType.Modified &&
                    n.type === ChangeType.Modified
                    ? (this.changeMap = this.changeMap.insert(t, {
                        type: ChangeType.Modified,
                        doc: e.doc
                      }))
                    : e.type === ChangeType.Modified &&
                      n.type === ChangeType.Added
                      ? (this.changeMap = this.changeMap.insert(t, {
                          type: ChangeType.Added,
                          doc: e.doc
                        }))
                      : e.type === ChangeType.Removed &&
                        n.type === ChangeType.Added
                        ? (this.changeMap = this.changeMap.remove(t))
                        : e.type === ChangeType.Removed &&
                          n.type === ChangeType.Modified
                          ? (this.changeMap = this.changeMap.insert(t, {
                              type: ChangeType.Removed,
                              doc: n.doc
                            }))
                          : e.type === ChangeType.Added &&
                            n.type === ChangeType.Removed
                            ? (this.changeMap = this.changeMap.insert(t, {
                                type: ChangeType.Modified,
                                doc: e.doc
                              }))
                            : fail(
                                'unsupported combination of changes: ' +
                                  JSON.stringify(e) +
                                  ' after ' +
                                  JSON.stringify(n)
                              )
              : (this.changeMap = this.changeMap.insert(t, e))
          }),
          (e.prototype.getChanges = function() {
            var e = []
            return (
              this.changeMap.inorderTraversal(function(t, n) {
                e.push(n)
              }),
              e
            )
          }),
          e
        )
      })(),
      ViewSnapshot = (function() {
        function e(e, t, n, r, o, i, a) {
          ;(this.query = e),
            (this.docs = t),
            (this.oldDocs = n),
            (this.docChanges = r),
            (this.fromCache = o),
            (this.hasPendingWrites = i),
            (this.syncStateChanged = a)
        }
        return (
          (e.prototype.isEqual = function(e) {
            if (
              this.fromCache !== e.fromCache ||
              this.hasPendingWrites !== e.hasPendingWrites ||
              this.syncStateChanged !== e.syncStateChanged ||
              !this.query.isEqual(e.query) ||
              !this.docs.isEqual(e.docs) ||
              !this.oldDocs.isEqual(e.oldDocs)
            )
              return !1
            var t = this.docChanges,
              n = e.docChanges
            if (t.length !== n.length) return !1
            for (var r = 0; r < t.length; r++)
              if (t[r].type !== n[r].type || !t[r].doc.isEqual(n[r].doc))
                return !1
            return !0
          }),
          e
        )
      })(),
      DocumentSet = (function() {
        function e(e) {
          ;(this.comparator = e
            ? function(t, n) {
                return e(t, n) || DocumentKey.comparator(t.key, n.key)
              }
            : function(e, t) {
                return DocumentKey.comparator(e.key, t.key)
              }),
            (this.keyedMap = documentMap()),
            (this.sortedSet = new SortedMap(this.comparator))
        }
        return (
          (e.emptySet = function(t) {
            return new e(t.comparator)
          }),
          (e.prototype.has = function(e) {
            return null != this.keyedMap.get(e)
          }),
          (e.prototype.get = function(e) {
            return this.keyedMap.get(e)
          }),
          (e.prototype.first = function() {
            return this.sortedSet.minKey()
          }),
          (e.prototype.last = function() {
            return this.sortedSet.maxKey()
          }),
          (e.prototype.isEmpty = function() {
            return this.sortedSet.isEmpty()
          }),
          (e.prototype.indexOf = function(e) {
            var t = this.keyedMap.get(e)
            return t ? this.sortedSet.indexOf(t) : -1
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function() {
              return this.sortedSet.size
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.forEach = function(e) {
            this.sortedSet.inorderTraversal(function(t, n) {
              return e(t), !1
            })
          }),
          (e.prototype.add = function(e) {
            var t = this.delete(e.key)
            return t.copy(
              t.keyedMap.insert(e.key, e),
              t.sortedSet.insert(e, null)
            )
          }),
          (e.prototype.delete = function(e) {
            var t = this.get(e)
            return t
              ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t))
              : this
          }),
          (e.prototype.isEqual = function(t) {
            if (!(t instanceof e)) return !1
            if (this.size !== t.size) return !1
            for (
              var n = this.sortedSet.getIterator(),
                r = t.sortedSet.getIterator();
              n.hasNext();

            ) {
              var o = n.getNext().key,
                i = r.getNext().key
              if (!o.isEqual(i)) return !1
            }
            return !0
          }),
          (e.prototype.toString = function() {
            var e = []
            return (
              this.forEach(function(t) {
                e.push(t.toString())
              }),
              0 === e.length
                ? 'DocumentSet ()'
                : 'DocumentSet (\n  ' + e.join('  \n') + '\n)'
            )
          }),
          (e.prototype.copy = function(t, n) {
            var r = new e()
            return (
              (r.comparator = this.comparator),
              (r.keyedMap = t),
              (r.sortedSet = n),
              r
            )
          }),
          e
        )
      })(),
      ObjectMap = (function() {
        function e(e) {
          ;(this.mapKeyFn = e), (this.inner = {})
        }
        return (
          (e.prototype.get = function(e) {
            var t = this.mapKeyFn(e),
              n = this.inner[t]
            if (void 0 !== n)
              for (var r = 0, o = n; r < o.length; r++) {
                var i = o[r],
                  a = i[0],
                  s = i[1]
                if (a.isEqual(e)) return s
              }
          }),
          (e.prototype.has = function(e) {
            return void 0 !== this.get(e)
          }),
          (e.prototype.set = function(e, t) {
            var n = this.mapKeyFn(e),
              r = this.inner[n]
            if (void 0 !== r) {
              for (var o = 0; o < r.length; o++)
                if (r[o][0].isEqual(e)) return void (r[o] = [e, t])
              r.push([e, t])
            } else this.inner[n] = [[e, t]]
          }),
          (e.prototype.delete = function(e) {
            var t = this.mapKeyFn(e),
              n = this.inner[t]
            if (void 0 === n) return !1
            for (var r = 0; r < n.length; r++)
              if (n[r][0].isEqual(e))
                return (
                  1 === n.length ? delete this.inner[t] : n.splice(r, 1), !0
                )
            return !1
          }),
          (e.prototype.forEach = function(e) {
            forEach(this.inner, function(t, n) {
              for (var r = 0, o = n; r < o.length; r++) {
                var i = o[r],
                  a = i[0],
                  s = i[1]
                e(a, s)
              }
            })
          }),
          (e.prototype.isEmpty = function() {
            return isEmpty(this.inner)
          }),
          e
        )
      })(),
      QueryListenersInfo = (function() {
        return function() {
          this.listeners = []
        }
      })(),
      EventManager = (function() {
        function e(e) {
          ;(this.syncEngine = e),
            (this.queries = new ObjectMap(function(e) {
              return e.canonicalId()
            })),
            (this.onlineState = OnlineState.Unknown),
            this.syncEngine.subscribe(
              this.onChange.bind(this),
              this.onError.bind(this)
            )
        }
        return (
          (e.prototype.listen = function(e) {
            var t = e.query,
              n = !1,
              r = this.queries.get(t)
            return (
              r ||
                ((n = !0),
                (r = new QueryListenersInfo()),
                this.queries.set(t, r)),
              r.listeners.push(e),
              e.applyOnlineStateChange(this.onlineState),
              r.viewSnap && e.onViewSnapshot(r.viewSnap),
              n
                ? this.syncEngine.listen(t).then(function(e) {
                    return (r.targetId = e), e
                  })
                : Promise.resolve(r.targetId)
            )
          }),
          (e.prototype.unlisten = function(e) {
            return __awaiter(this, void 0, void 0, function() {
              var t, n, r, o
              return __generator(this, function(i) {
                return (
                  (t = e.query),
                  (n = !1),
                  (r = this.queries.get(t)) &&
                    (o = r.listeners.indexOf(e)) >= 0 &&
                    (r.listeners.splice(o, 1), (n = 0 === r.listeners.length)),
                  n
                    ? (this.queries.delete(t), [2, this.syncEngine.unlisten(t)])
                    : [2]
                )
              })
            })
          }),
          (e.prototype.onChange = function(e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t],
                o = r.query,
                i = this.queries.get(o)
              if (i) {
                for (var a = 0, s = i.listeners; a < s.length; a++) {
                  s[a].onViewSnapshot(r)
                }
                i.viewSnap = r
              }
            }
          }),
          (e.prototype.onError = function(e, t) {
            var n = this.queries.get(e)
            if (n)
              for (var r = 0, o = n.listeners; r < o.length; r++) {
                o[r].onError(t)
              }
            this.queries.delete(e)
          }),
          (e.prototype.applyOnlineStateChange = function(e) {
            ;(this.onlineState = e),
              this.queries.forEach(function(t, n) {
                for (var r = 0, o = n.listeners; r < o.length; r++) {
                  o[r].applyOnlineStateChange(e)
                }
              })
          }),
          e
        )
      })(),
      QueryListener = (function() {
        function e(e, t, n) {
          ;(this.query = e),
            (this.queryObserver = t),
            (this.raisedInitialEvent = !1),
            (this.onlineState = OnlineState.Unknown),
            (this.options = n || {})
        }
        return (
          (e.prototype.onViewSnapshot = function(e) {
            if (
              (assert(
                e.docChanges.length > 0 || e.syncStateChanged,
                'We got a new snapshot with no changes?'
              ),
              !this.options.includeDocumentMetadataChanges)
            ) {
              for (var t = [], n = 0, r = e.docChanges; n < r.length; n++) {
                var o = r[n]
                o.type !== ChangeType.Metadata && t.push(o)
              }
              e = new ViewSnapshot(
                e.query,
                e.docs,
                e.oldDocs,
                t,
                e.fromCache,
                e.hasPendingWrites,
                e.syncStateChanged
              )
            }
            this.raisedInitialEvent
              ? this.shouldRaiseEvent(e) && this.queryObserver.next(e)
              : this.shouldRaiseInitialEvent(e, this.onlineState) &&
                this.raiseInitialEvent(e),
              (this.snap = e)
          }),
          (e.prototype.onError = function(e) {
            this.queryObserver.error(e)
          }),
          (e.prototype.applyOnlineStateChange = function(e) {
            ;(this.onlineState = e),
              this.snap &&
                !this.raisedInitialEvent &&
                this.shouldRaiseInitialEvent(this.snap, e) &&
                this.raiseInitialEvent(this.snap)
          }),
          (e.prototype.shouldRaiseInitialEvent = function(e, t) {
            if (
              (assert(
                !this.raisedInitialEvent,
                'Determining whether to raise first event but already had first event'
              ),
              !e.fromCache)
            )
              return !0
            var n = t !== OnlineState.Offline
            return this.options.waitForSyncWhenOnline && n
              ? (assert(
                  e.fromCache,
                  'Waiting for sync, but snapshot is not from cache'
                ),
                !1)
              : !e.docs.isEmpty() || t === OnlineState.Offline
          }),
          (e.prototype.shouldRaiseEvent = function(e) {
            if (e.docChanges.length > 0) return !0
            var t =
              this.snap && this.snap.hasPendingWrites !== e.hasPendingWrites
            return (
              !(!e.syncStateChanged && !t) &&
              !0 === this.options.includeQueryMetadataChanges
            )
          }),
          (e.prototype.raiseInitialEvent = function(t) {
            assert(
              !this.raisedInitialEvent,
              'Trying to raise initial events for second time'
            ),
              (t = new ViewSnapshot(
                t.query,
                t.docs,
                DocumentSet.emptySet(t.docs),
                e.getInitialViewChanges(t),
                t.fromCache,
                t.hasPendingWrites,
                !0
              )),
              (this.raisedInitialEvent = !0),
              this.queryObserver.next(t)
          }),
          (e.getInitialViewChanges = function(e) {
            var t = []
            return (
              e.docs.forEach(function(e) {
                t.push({type: ChangeType.Added, doc: e})
              }),
              t
            )
          }),
          e
        )
      })(),
      PersistencePromise = (function() {
        function e(e) {
          var t = this
          ;(this.nextCallback = null),
            (this.catchCallback = null),
            (this.result = void 0),
            (this.error = void 0),
            (this.isDone = !1),
            (this.callbackAttached = !1),
            e(
              function(e) {
                ;(t.isDone = !0),
                  (t.result = e),
                  t.nextCallback && t.nextCallback(e)
              },
              function(e) {
                ;(t.isDone = !0),
                  (t.error = e),
                  t.catchCallback && t.catchCallback(e)
              }
            )
        }
        return (
          (e.prototype.catch = function(e) {
            return this.next(void 0, e)
          }),
          (e.prototype.next = function(t, n) {
            var r = this
            return (
              this.callbackAttached &&
                fail('Called next() or catch() twice for PersistencePromise'),
              (this.callbackAttached = !0),
              this.isDone
                ? this.error
                  ? this.wrapFailure(n, this.error)
                  : this.wrapSuccess(t, this.result)
                : new e(function(e, o) {
                    ;(r.nextCallback = function(n) {
                      r.wrapSuccess(t, n).next(e, o)
                    }),
                      (r.catchCallback = function(t) {
                        r.wrapFailure(n, t).next(e, o)
                      })
                  })
            )
          }),
          (e.prototype.toPromise = function() {
            var e = this
            return new Promise(function(t, n) {
              e.next(t, n)
            })
          }),
          (e.prototype.wrapUserFunction = function(t) {
            try {
              var n = t()
              return n instanceof e ? n : e.resolve(n)
            } catch (t) {
              return e.reject(t)
            }
          }),
          (e.prototype.wrapSuccess = function(t, n) {
            return t
              ? this.wrapUserFunction(function() {
                  return t(n)
                })
              : e.resolve(n)
          }),
          (e.prototype.wrapFailure = function(t, n) {
            return t
              ? this.wrapUserFunction(function() {
                  return t(n)
                })
              : e.reject(n)
          }),
          (e.resolve = function(t) {
            return new e(function(e, n) {
              e(t)
            })
          }),
          (e.reject = function(t) {
            return new e(function(e, n) {
              n(t)
            })
          }),
          (e.waitFor = function(t) {
            return t.reduce(function(e, t, n) {
              return e.next(function() {
                return t
              })
            }, e.resolve())
          }),
          (e.map = function(t) {
            var n = [],
              r = !0,
              o = e.resolve(null)
            return t
              .reduce(function(e, t) {
                return e.next(function(e) {
                  return r || n.push(e), (r = !1), t
                })
              }, o)
              .next(function(e) {
                return n.push(e), n
              })
          }),
          e
        )
      })(),
      EagerGarbageCollector = (function() {
        function e() {
          ;(this.isEager = !0),
            (this.sources = []),
            (this.potentialGarbage = documentKeySet())
        }
        return (
          (e.prototype.addGarbageSource = function(e) {
            this.sources.push(e), e.setGarbageCollector(this)
          }),
          (e.prototype.removeGarbageSource = function(e) {
            this.sources.splice(this.sources.indexOf(e), 1),
              e.setGarbageCollector(null)
          }),
          (e.prototype.addPotentialGarbageKey = function(e) {
            this.potentialGarbage = this.potentialGarbage.add(e)
          }),
          (e.prototype.collectGarbage = function(e) {
            var t = this,
              n = [],
              r = documentKeySet()
            return (
              this.potentialGarbage.forEach(function(o) {
                var i = t.documentHasAnyReferences(e, o)
                n.push(
                  i.next(function(e) {
                    return e || (r = r.add(o)), PersistencePromise.resolve()
                  })
                )
              }),
              (this.potentialGarbage = documentKeySet()),
              PersistencePromise.waitFor(n).next(function() {
                return r
              })
            )
          }),
          (e.prototype.documentHasAnyReferences = function(e, t) {
            var n = PersistencePromise.resolve(!1)
            return this.sources
              .map(function(n) {
                return function() {
                  return n.containsKey(e, t)
                }
              })
              .reduce(function(e, t) {
                return e.next(function(e) {
                  return e ? PersistencePromise.resolve(!0) : t()
                })
              }, n)
          }),
          e
        )
      })(),
      LocalViewChanges = (function() {
        function e(e, t, n) {
          ;(this.query = e), (this.addedKeys = t), (this.removedKeys = n)
        }
        return (
          (e.fromSnapshot = function(t) {
            for (
              var n = documentKeySet(),
                r = documentKeySet(),
                o = 0,
                i = t.docChanges;
              o < i.length;
              o++
            ) {
              var a = i[o]
              switch (a.type) {
                case ChangeType.Added:
                  n = n.add(a.doc.key)
                  break
                case ChangeType.Removed:
                  r = r.add(a.doc.key)
              }
            }
            return new e(t.query, n, r)
          }),
          e
        )
      })(),
      ReferenceSet = (function() {
        function e() {
          ;(this.refsByKey = new SortedSet(DocReference.compareByKey)),
            (this.refsByTarget = new SortedSet(DocReference.compareByTargetId)),
            (this.garbageCollector = null)
        }
        return (
          (e.prototype.isEmpty = function() {
            return this.refsByKey.isEmpty()
          }),
          (e.prototype.addReference = function(e, t) {
            var n = new DocReference(e, t)
            ;(this.refsByKey = this.refsByKey.add(n)),
              (this.refsByTarget = this.refsByTarget.add(n))
          }),
          (e.prototype.addReferences = function(e, t) {
            var n = this
            e.forEach(function(e) {
              return n.addReference(e, t)
            })
          }),
          (e.prototype.removeReference = function(e, t) {
            this.removeRef(new DocReference(e, t))
          }),
          (e.prototype.removeReferences = function(e, t) {
            var n = this
            e.forEach(function(e) {
              return n.removeReference(e, t)
            })
          }),
          (e.prototype.removeReferencesForId = function(e) {
            var t = this,
              n = DocumentKey.EMPTY,
              r = new DocReference(n, e),
              o = new DocReference(n, e + 1)
            this.refsByTarget.forEachInRange([r, o], function(e) {
              t.removeRef(e)
            })
          }),
          (e.prototype.removeAllReferences = function() {
            var e = this
            this.refsByKey.forEach(function(t) {
              return e.removeRef(t)
            })
          }),
          (e.prototype.removeRef = function(e) {
            ;(this.refsByKey = this.refsByKey.delete(e)),
              (this.refsByTarget = this.refsByTarget.delete(e)),
              null !== this.garbageCollector &&
                this.garbageCollector.addPotentialGarbageKey(e.key)
          }),
          (e.prototype.referencesForId = function(e) {
            var t = DocumentKey.EMPTY,
              n = new DocReference(t, e),
              r = new DocReference(t, e + 1),
              o = documentKeySet()
            return (
              this.refsByTarget.forEachInRange([n, r], function(e) {
                o = o.add(e.key)
              }),
              o
            )
          }),
          (e.prototype.setGarbageCollector = function(e) {
            this.garbageCollector = e
          }),
          (e.prototype.containsKey = function(e, t) {
            var n = new DocReference(t, 0),
              r = this.refsByKey.firstAfterOrEqual(n)
            return PersistencePromise.resolve(null !== r && t.isEqual(r.key))
          }),
          e
        )
      })(),
      DocReference = (function() {
        function e(e, t) {
          ;(this.key = e), (this.targetOrBatchId = t)
        }
        return (
          (e.compareByKey = function(e, t) {
            return (
              DocumentKey.comparator(e.key, t.key) ||
              primitiveComparator(e.targetOrBatchId, t.targetOrBatchId)
            )
          }),
          (e.compareByTargetId = function(e, t) {
            return (
              primitiveComparator(e.targetOrBatchId, t.targetOrBatchId) ||
              DocumentKey.comparator(e.key, t.key)
            )
          }),
          e
        )
      })(),
      RESERVED_BITS = 1,
      GeneratorIds
    !(function(e) {
      ;(e[(e.LocalStore = 0)] = 'LocalStore'),
        (e[(e.SyncEngine = 1)] = 'SyncEngine')
    })(GeneratorIds || (GeneratorIds = {}))
    var TargetIdGenerator = (function() {
        function e(e, t) {
          void 0 === t && (t = 0), (this.generatorId = e)
          var n = (t >> RESERVED_BITS) << RESERVED_BITS,
            r = t - n
          this.previousId =
            r >= e
              ? n | this.generatorId
              : (n | this.generatorId) - (1 << RESERVED_BITS)
        }
        return (
          (e.prototype.next = function() {
            return (this.previousId += 1 << RESERVED_BITS), this.previousId
          }),
          (e.forLocalStore = function(t) {
            return void 0 === t && (t = 0), new e(GeneratorIds.LocalStore, t)
          }),
          (e.forSyncEngine = function() {
            return new e(GeneratorIds.SyncEngine)
          }),
          e
        )
      })(),
      AddedLimboDocument = (function() {
        return function(e) {
          this.key = e
        }
      })(),
      RemovedLimboDocument = (function() {
        return function(e) {
          this.key = e
        }
      })(),
      View = (function() {
        function e(e, t) {
          ;(this.query = e),
            (this.syncedDocuments = t),
            (this.syncState = null),
            (this.current = !1),
            (this.limboDocuments = documentKeySet()),
            (this.mutatedKeys = documentKeySet()),
            (this.documentSet = new DocumentSet(e.docComparator.bind(e)))
        }
        return (
          (e.prototype.computeDocChanges = function(e, t) {
            var n = this,
              r = t ? t.changeSet : new DocumentChangeSet(),
              o = t ? t.documentSet : this.documentSet,
              i = t ? t.mutatedKeys : this.mutatedKeys,
              a = o,
              s = !1,
              u =
                this.query.hasLimit() && o.size === this.query.limit
                  ? o.last()
                  : null
            if (
              (e.inorderTraversal(function(e, t) {
                var c = o.get(e),
                  h = t instanceof Document ? t : null
                if (
                  (h &&
                    (assert(
                      e.isEqual(h.key),
                      'Mismatching keys found in document changes: ' +
                        e +
                        ' != ' +
                        h.key
                    ),
                    (h = n.query.matches(h) ? h : null)),
                  h
                    ? ((a = a.add(h)),
                      (i = h.hasLocalMutations ? i.add(e) : i.delete(e)))
                    : ((a = a.delete(e)), (i = i.delete(e))),
                  c && h)
                ) {
                  var l = c.data.isEqual(h.data)
                  ;(l && c.hasLocalMutations === h.hasLocalMutations) ||
                    (l
                      ? r.track({type: ChangeType.Metadata, doc: h})
                      : r.track({type: ChangeType.Modified, doc: h}),
                    u && n.query.docComparator(h, u) > 0 && (s = !0))
                } else !c && h ? r.track({type: ChangeType.Added, doc: h}) : c && !h && (r.track({type: ChangeType.Removed, doc: c}), u && (s = !0))
              }),
              this.query.hasLimit())
            )
              for (; a.size > this.query.limit; ) {
                var c = a.last()
                ;(a = a.delete(c.key)),
                  r.track({type: ChangeType.Removed, doc: c})
              }
            return (
              assert(
                !s || !t,
                'View was refilled using docs that themselves needed refilling.'
              ),
              {documentSet: a, changeSet: r, needsRefill: s, mutatedKeys: i}
            )
          }),
          (e.prototype.applyChanges = function(e, t) {
            var n = this
            assert(!e.needsRefill, 'Cannot apply changes that need a refill')
            var r = this.documentSet
            ;(this.documentSet = e.documentSet),
              (this.mutatedKeys = e.mutatedKeys)
            var o = e.changeSet.getChanges()
            o.sort(function(e, t) {
              return (
                compareChangeType(e.type, t.type) ||
                n.query.docComparator(e.doc, t.doc)
              )
            }),
              this.applyTargetChange(t)
            var i = this.updateLimboDocuments(),
              a =
                0 === this.limboDocuments.size && this.current
                  ? SyncState.Synced
                  : SyncState.Local,
              s = a !== this.syncState
            return (
              (this.syncState = a),
              0 !== o.length || s
                ? {
                    snapshot: new ViewSnapshot(
                      this.query,
                      e.documentSet,
                      r,
                      o,
                      a === SyncState.Local,
                      !e.mutatedKeys.isEmpty(),
                      s
                    ),
                    limboChanges: i
                  }
                : {limboChanges: i}
            )
          }),
          (e.prototype.applyOnlineStateChange = function(e) {
            return this.current && e === OnlineState.Offline
              ? ((this.current = !1),
                this.applyChanges({
                  documentSet: this.documentSet,
                  changeSet: new DocumentChangeSet(),
                  mutatedKeys: this.mutatedKeys,
                  needsRefill: !1
                }))
              : {limboChanges: []}
          }),
          (e.prototype.shouldBeInLimbo = function(e) {
            return (
              !this.syncedDocuments.has(e) &&
              (!!this.documentSet.has(e) &&
                !this.documentSet.get(e).hasLocalMutations)
            )
          }),
          (e.prototype.applyTargetChange = function(e) {
            if (e) {
              var t = e.mapping
              switch ((t instanceof ResetMapping
                ? (this.syncedDocuments = t.documents)
                : t instanceof UpdateMapping &&
                  (this.syncedDocuments = t.applyToKeySet(
                    this.syncedDocuments
                  )),
              e.currentStatusUpdate)) {
                case CurrentStatusUpdate.MarkCurrent:
                  this.current = !0
                  break
                case CurrentStatusUpdate.MarkNotCurrent:
                  this.current = !1
                  break
                case CurrentStatusUpdate.None:
                  break
                default:
                  fail(
                    'Unknown current status update: ' + e.currentStatusUpdate
                  )
              }
            }
          }),
          (e.prototype.updateLimboDocuments = function() {
            var e = this
            if (!this.current) return []
            var t = this.limboDocuments
            ;(this.limboDocuments = documentKeySet()),
              this.documentSet.forEach(function(t) {
                e.shouldBeInLimbo(t.key) &&
                  (e.limboDocuments = e.limboDocuments.add(t.key))
              })
            var n = []
            return (
              t.forEach(function(t) {
                e.limboDocuments.has(t) || n.push(new RemovedLimboDocument(t))
              }),
              this.limboDocuments.forEach(function(e) {
                t.has(e) || n.push(new AddedLimboDocument(e))
              }),
              n
            )
          }),
          e
        )
      })()
    function compareChangeType(e, t) {
      var n = function(e) {
        switch (e) {
          case ChangeType.Added:
            return 1
          case ChangeType.Modified:
          case ChangeType.Metadata:
            return 2
          case ChangeType.Removed:
            return 0
          default:
            return fail('Unknown ChangeType: ' + e)
        }
      }
      return n(e) - n(t)
    }
    var LOG_TAG$1 = 'SyncEngine',
      QueryView = (function() {
        return function(e, t, n, r) {
          ;(this.query = e),
            (this.targetId = t),
            (this.resumeToken = n),
            (this.view = r)
        }
      })(),
      SyncEngine = (function() {
        function e(e, t, n) {
          ;(this.localStore = e),
            (this.remoteStore = t),
            (this.currentUser = n),
            (this.viewHandler = null),
            (this.errorHandler = null),
            (this.queryViewsByQuery = new ObjectMap(function(e) {
              return e.canonicalId()
            })),
            (this.queryViewsByTarget = {}),
            (this.limboTargetsByKey = new SortedMap(DocumentKey.comparator)),
            (this.limboKeysByTarget = {}),
            (this.limboDocumentRefs = new ReferenceSet()),
            (this.limboCollector = new EagerGarbageCollector()),
            (this.mutationUserCallbacks = {}),
            (this.targetIdGenerator = TargetIdGenerator.forSyncEngine())
        }
        return (
          (e.prototype.subscribe = function(e, t) {
            assert(
              null !== e && null !== t,
              'View and error handlers cannot be null'
            ),
              assert(
                null === this.viewHandler && null === this.errorHandler,
                'SyncEngine already has a subscriber.'
              ),
              (this.viewHandler = e),
              (this.errorHandler = t),
              this.limboCollector.addGarbageSource(this.limboDocumentRefs)
          }),
          (e.prototype.listen = function(e) {
            var t = this
            return (
              this.assertSubscribed('listen()'),
              assert(
                !this.queryViewsByQuery.has(e),
                'We already listen to the query: ' + e
              ),
              this.localStore.allocateQuery(e).then(function(n) {
                return t.localStore
                  .executeQuery(e)
                  .then(function(r) {
                    return t.localStore
                      .remoteDocumentKeys(n.targetId)
                      .then(function(o) {
                        var i = new View(e, o),
                          a = i.computeDocChanges(r),
                          s = i.applyChanges(a)
                        assert(
                          0 === s.limboChanges.length,
                          'View returned limbo docs before target ack from the server.'
                        ),
                          assert(
                            !!s.snapshot,
                            'applyChanges for new view should always return a snapshot'
                          )
                        var u = new QueryView(e, n.targetId, n.resumeToken, i)
                        t.queryViewsByQuery.set(e, u),
                          (t.queryViewsByTarget[n.targetId] = u),
                          t.viewHandler([s.snapshot]),
                          t.remoteStore.listen(n)
                      })
                  })
                  .then(function() {
                    return n.targetId
                  })
              })
            )
          }),
          (e.prototype.unlisten = function(e) {
            var t = this
            this.assertSubscribed('unlisten()')
            var n = this.queryViewsByQuery.get(e)
            return (
              assert(!!n, 'Trying to unlisten on query not found:' + e),
              this.localStore.releaseQuery(e).then(function() {
                return (
                  t.remoteStore.unlisten(n.targetId),
                  t.removeAndCleanupQuery(n).then(function() {
                    return t.localStore.collectGarbage()
                  })
                )
              })
            )
          }),
          (e.prototype.write = function(e, t) {
            var n = this
            return (
              this.assertSubscribed('write()'),
              this.localStore
                .localWrite(e)
                .then(function(e) {
                  return (
                    n.addMutationCallback(e.batchId, t),
                    n.emitNewSnapsAndNotifyLocalStore(e.changes)
                  )
                })
                .then(function() {
                  return n.remoteStore.fillWritePipeline()
                })
            )
          }),
          (e.prototype.wrapUpdateFunctionError = function(e) {
            return e
          }),
          (e.prototype.runTransaction = function(e, t) {
            var n = this
            void 0 === t && (t = 5),
              assert(t >= 0, 'Got negative number of retries for transaction.')
            var r = this.remoteStore.createTransaction()
            return (function() {
              try {
                var t = e(r)
                return !isNullOrUndefined(t) && t.catch && t.then
                  ? t.catch(function(e) {
                      return Promise.reject(n.wrapUpdateFunctionError(e))
                    })
                  : Promise.reject(
                      Error('Transaction callback must return a Promise')
                    )
              } catch (e) {
                return Promise.reject(n.wrapUpdateFunctionError(e))
              }
            })().then(function(o) {
              return r
                .commit()
                .then(function() {
                  return o
                })
                .catch(function(r) {
                  return 0 === t
                    ? Promise.reject(r)
                    : n.runTransaction(e, t - 1)
                })
            })
          }),
          (e.prototype.applyRemoteEvent = function(e) {
            var t = this
            return (
              this.assertSubscribed('applyRemoteEvent()'),
              forEachNumber(e.targetChanges, function(n, r) {
                var o = t.limboKeysByTarget[n]
                o &&
                  r.currentStatusUpdate === CurrentStatusUpdate.MarkCurrent &&
                  !e.documentUpdates.get(o) &&
                  e.addDocumentUpdate(new NoDocument(o, e.snapshotVersion))
              }),
              this.localStore.applyRemoteEvent(e).then(function(n) {
                return t.emitNewSnapsAndNotifyLocalStore(n, e)
              })
            )
          }),
          (e.prototype.applyOnlineStateChange = function(e) {
            var t = []
            this.queryViewsByQuery.forEach(function(n, r) {
              var o = r.view.applyOnlineStateChange(e)
              assert(
                0 === o.limboChanges.length,
                'OnlineState should not affect limbo documents.'
              ),
                o.snapshot && t.push(o.snapshot)
            }),
              this.viewHandler(t)
          }),
          (e.prototype.rejectListen = function(e, t) {
            var n = this
            this.assertSubscribed('rejectListens()')
            var r = this.limboKeysByTarget[e]
            if (r) {
              ;(this.limboTargetsByKey = this.limboTargetsByKey.remove(r)),
                delete this.limboKeysByTarget[e]
              var o = new SortedMap(DocumentKey.comparator)
              o = o.insert(
                r,
                new NoDocument(r, SnapshotVersion.forDeletedDoc())
              )
              var i = new RemoteEvent(SnapshotVersion.MIN, {}, o)
              return this.applyRemoteEvent(i)
            }
            var a = this.queryViewsByTarget[e]
            return (
              assert(!!a, 'Unknown targetId: ' + e),
              this.localStore.releaseQuery(a.query).then(function() {
                return n.removeAndCleanupQuery(a).then(function() {
                  n.errorHandler(a.query, t)
                })
              })
            )
          }),
          (e.prototype.applySuccessfulWrite = function(e) {
            var t = this
            return (
              this.assertSubscribed('applySuccessfulWrite()'),
              this.processUserCallback(e.batch.batchId, null),
              this.localStore.acknowledgeBatch(e).then(function(e) {
                return t.emitNewSnapsAndNotifyLocalStore(e)
              })
            )
          }),
          (e.prototype.rejectFailedWrite = function(e, t) {
            var n = this
            return (
              this.assertSubscribed('rejectFailedWrite()'),
              this.processUserCallback(e, t),
              this.localStore.rejectBatch(e).then(function(e) {
                return n.emitNewSnapsAndNotifyLocalStore(e)
              })
            )
          }),
          (e.prototype.addMutationCallback = function(e, t) {
            var n = this.mutationUserCallbacks[this.currentUser.toKey()]
            n || (n = new SortedMap(primitiveComparator)),
              (n = n.insert(e, t)),
              (this.mutationUserCallbacks[this.currentUser.toKey()] = n)
          }),
          (e.prototype.processUserCallback = function(e, t) {
            var n = this.mutationUserCallbacks[this.currentUser.toKey()]
            if (n) {
              var r = n.get(e)
              r &&
                (assert(
                  e === n.minKey(),
                  'Mutation callbacks processed out-of-order?'
                ),
                t ? r.reject(t) : r.resolve(),
                (n = n.remove(e))),
                (this.mutationUserCallbacks[this.currentUser.toKey()] = n)
            }
          }),
          (e.prototype.removeAndCleanupQuery = function(e) {
            return (
              this.queryViewsByQuery.delete(e.query),
              delete this.queryViewsByTarget[e.targetId],
              this.limboDocumentRefs.removeReferencesForId(e.targetId),
              this.gcLimboDocuments()
            )
          }),
          (e.prototype.updateTrackedLimbos = function(e, t) {
            for (var n = 0, r = t; n < r.length; n++) {
              var o = r[n]
              o instanceof AddedLimboDocument
                ? (this.limboDocumentRefs.addReference(o.key, e),
                  this.trackLimboChange(o))
                : o instanceof RemovedLimboDocument
                  ? (debug(LOG_TAG$1, 'Document no longer in limbo: ' + o.key),
                    this.limboDocumentRefs.removeReference(o.key, e))
                  : fail('Unknown limbo change: ' + JSON.stringify(o))
            }
            return this.gcLimboDocuments()
          }),
          (e.prototype.trackLimboChange = function(e) {
            var t = e.key
            if (!this.limboTargetsByKey.get(t)) {
              debug(LOG_TAG$1, 'New document in limbo: ' + t)
              var n = this.targetIdGenerator.next(),
                r = Query.atPath(t.path)
              ;(this.limboKeysByTarget[n] = t),
                this.remoteStore.listen(
                  new QueryData(r, n, QueryPurpose.Listen)
                ),
                (this.limboTargetsByKey = this.limboTargetsByKey.insert(t, n))
            }
          }),
          (e.prototype.gcLimboDocuments = function() {
            var e = this
            return this.limboCollector
              .collectGarbage(null)
              .next(function(t) {
                t.forEach(function(t) {
                  var n = e.limboTargetsByKey.get(t)
                  null !== n &&
                    (e.remoteStore.unlisten(n),
                    (e.limboTargetsByKey = e.limboTargetsByKey.remove(t)),
                    delete e.limboKeysByTarget[n])
                })
              })
              .toPromise()
          }),
          (e.prototype.currentLimboDocs = function() {
            return this.limboTargetsByKey
          }),
          (e.prototype.emitNewSnapsAndNotifyLocalStore = function(e, t) {
            var n = this,
              r = [],
              o = [],
              i = []
            return (
              this.queryViewsByQuery.forEach(function(a, s) {
                i.push(
                  Promise.resolve()
                    .then(function() {
                      var t = s.view.computeDocChanges(e)
                      return t.needsRefill
                        ? n.localStore.executeQuery(s.query).then(function(e) {
                            return s.view.computeDocChanges(e, t)
                          })
                        : t
                    })
                    .then(function(e) {
                      var i = t && t.targetChanges[s.targetId],
                        a = s.view.applyChanges(e, i)
                      return n
                        .updateTrackedLimbos(s.targetId, a.limboChanges)
                        .then(function() {
                          if (a.snapshot) {
                            r.push(a.snapshot)
                            var e = LocalViewChanges.fromSnapshot(a.snapshot)
                            o.push(e)
                          }
                        })
                    })
                )
              }),
              Promise.all(i)
                .then(function() {
                  return (
                    n.viewHandler(r), n.localStore.notifyLocalViewChanges(o)
                  )
                })
                .then(function() {
                  return n.localStore.collectGarbage()
                })
            )
          }),
          (e.prototype.assertSubscribed = function(e) {
            assert(
              null !== this.viewHandler && null !== this.errorHandler,
              'Trying to call ' + e + ' before calling subscribe().'
            )
          }),
          (e.prototype.handleUserChange = function(e) {
            var t = this
            return (
              (this.currentUser = e),
              this.localStore
                .handleUserChange(e)
                .then(function(e) {
                  return t.emitNewSnapsAndNotifyLocalStore(e)
                })
                .then(function() {
                  return t.remoteStore.handleUserChange(e)
                })
            )
          }),
          e
        )
      })(),
      BATCHID_UNKNOWN = -1,
      MutationBatch = (function() {
        function e(e, t, n) {
          ;(this.batchId = e), (this.localWriteTime = t), (this.mutations = n)
        }
        return (
          (e.prototype.applyToRemoteDocument = function(e, t, n) {
            t &&
              assert(
                t.key.isEqual(e),
                'applyToRemoteDocument: key ' +
                  e +
                  ' should match maybeDoc key\n        ' +
                  t.key
              )
            var r = n.mutationResults
            assert(
              r.length === this.mutations.length,
              'Mismatch between mutations length\n      (' +
                this.mutations.length +
                ') and mutation results length\n      (' +
                r.length +
                ').'
            )
            for (var o = 0; o < this.mutations.length; o++) {
              var i = this.mutations[o]
              if (i.key.isEqual(e)) {
                var a = r[o]
                t = i.applyToRemoteDocument(t, a)
              }
            }
            return t
          }),
          (e.prototype.applyToLocalView = function(e, t) {
            t &&
              assert(
                t.key.isEqual(e),
                'applyToLocalDocument: key ' +
                  e +
                  ' should match maybeDoc key\n        ' +
                  t.key
              )
            for (var n = t, r = 0; r < this.mutations.length; r++) {
              var o = this.mutations[r]
              o.key.isEqual(e) &&
                (t = o.applyToLocalView(t, n, this.localWriteTime))
            }
            return t
          }),
          (e.prototype.keys = function() {
            for (
              var e = documentKeySet(), t = 0, n = this.mutations;
              t < n.length;
              t++
            ) {
              var r = n[t]
              e = e.add(r.key)
            }
            return e
          }),
          (e.prototype.isEqual = function(e) {
            return (
              this.batchId === e.batchId &&
              arrayEquals(this.mutations, e.mutations)
            )
          }),
          (e.prototype.isTombstone = function() {
            return 0 === this.mutations.length
          }),
          (e.prototype.toTombstone = function() {
            return new e(this.batchId, this.localWriteTime, [])
          }),
          e
        )
      })(),
      MutationBatchResult = (function() {
        function e(e, t, n, r, o) {
          ;(this.batch = e),
            (this.commitVersion = t),
            (this.mutationResults = n),
            (this.streamToken = r),
            (this.docVersions = o)
        }
        return (
          (e.from = function(t, n, r, o) {
            assert(
              t.mutations.length === r.length,
              'Mutations sent ' +
                t.mutations.length +
                ' must equal results received ' +
                r.length
            )
            for (
              var i = documentVersionMap(), a = t.mutations, s = 0;
              s < a.length;
              s++
            ) {
              var u = r[s].version
              null === u && (u = n), (i = i.insert(a[s].key, u))
            }
            return new e(t, n, r, o, i)
          }),
          e
        )
      })(),
      escapeChar = '',
      encodedSeparatorChar = '',
      encodedNul = '',
      encodedEscape = ''
    function encode(e) {
      for (var t = '', n = 0; n < e.length; n++)
        t.length > 0 && (t = encodeSeparator(t)),
          (t = encodeSegment(e.get(n), t))
      return encodeSeparator(t)
    }
    function encodeSegment(e, t) {
      for (var n = t, r = e.length, o = 0; o < r; o++) {
        var i = e.charAt(o)
        switch (i) {
          case '\0':
            n += escapeChar + encodedNul
            break
          case escapeChar:
            n += escapeChar + encodedEscape
            break
          default:
            n += i
        }
      }
      return n
    }
    function encodeSeparator(e) {
      return e + escapeChar + encodedSeparatorChar
    }
    function decode(e) {
      var t = e.length
      if ((assert(t >= 2, 'Invalid path ' + e), 2 === t))
        return (
          assert(
            e.charAt(0) === escapeChar && e.charAt(1) === encodedSeparatorChar,
            'Non-empty path ' + e + ' had length 2'
          ),
          ResourcePath.EMPTY_PATH
        )
      for (var n = t - 2, r = [], o = '', i = 0; i < t; ) {
        var a = e.indexOf(escapeChar, i)
        switch (((a < 0 || a > n) &&
          fail('Invalid encoded resource path: "' + e + '"'),
        e.charAt(a + 1))) {
          case encodedSeparatorChar:
            var s = e.substring(i, a),
              u = void 0
            0 === o.length ? (u = s) : ((u = o += s), (o = '')), r.push(u)
            break
          case encodedNul:
            ;(o += e.substring(i, a)), (o += '\0')
            break
          case encodedEscape:
            o += e.substring(i, a + 1)
            break
          default:
            fail('Invalid encoded resource path: "' + e + '"')
        }
        i = a + 2
      }
      return new ResourcePath(r)
    }
    var SCHEMA_VERSION = 2
    function createOrUpgradeDb(e, t, n, r) {
      assert(
        n < r && n >= 0 && r <= 2,
        'Unexpected schema upgrade from v${fromVersion} to v{toVersion}.'
      ),
        n < 1 &&
          r >= 1 &&
          (createOwnerStore(e),
          createMutationQueue(e),
          createQueryCache(e),
          createRemoteDocumentCache(e))
      var o = PersistencePromise.resolve()
      return (
        n < 2 &&
          r >= 2 &&
          (o = ensureTargetGlobalExists(t).next(function(e) {
            return saveTargetCount(t, e)
          })),
        o
      )
    }
    var DbTimestamp = (function() {
        return function(e, t) {
          ;(this.seconds = e), (this.nanoseconds = t)
        }
      })(),
      DbOwner = (function() {
        function e(e, t) {
          ;(this.ownerId = e), (this.leaseTimestampMs = t)
        }
        return (e.store = 'owner'), e
      })()
    function createOwnerStore(e) {
      e.createObjectStore(DbOwner.store)
    }
    var DbMutationQueue = (function() {
        function e(e, t, n) {
          ;(this.userId = e),
            (this.lastAcknowledgedBatchId = t),
            (this.lastStreamToken = n)
        }
        return (e.store = 'mutationQueues'), (e.keyPath = 'userId'), e
      })(),
      DbMutationBatch = (function() {
        function e(e, t, n, r) {
          ;(this.userId = e),
            (this.batchId = t),
            (this.localWriteTimeMs = n),
            (this.mutations = r)
        }
        return (e.store = 'mutations'), (e.keyPath = ['userId', 'batchId']), e
      })()
    function createMutationQueue(e) {
      e.createObjectStore(DbMutationQueue.store, {
        keyPath: DbMutationQueue.keyPath
      }),
        e.createObjectStore(DbMutationBatch.store, {
          keyPath: DbMutationBatch.keyPath
        }),
        e.createObjectStore(DbDocumentMutation.store)
    }
    var DbDocumentMutation = (function() {
      function e() {}
      return (
        (e.prefixForUser = function(e) {
          return [e]
        }),
        (e.prefixForPath = function(e, t) {
          return [e, encode(t)]
        }),
        (e.key = function(e, t, n) {
          return [e, encode(t), n]
        }),
        (e.store = 'documentMutations'),
        (e.PLACEHOLDER = new e()),
        e
      )
    })()
    function createRemoteDocumentCache(e) {
      e.createObjectStore(DbRemoteDocument.store)
    }
    var DbNoDocument = (function() {
        return function(e, t) {
          ;(this.path = e), (this.readTime = t)
        }
      })(),
      DbRemoteDocument = (function() {
        function e(e, t) {
          ;(this.noDocument = e), (this.document = t)
        }
        return (e.store = 'remoteDocuments'), e
      })(),
      DbTarget = (function() {
        function e(e, t, n, r, o, i) {
          ;(this.targetId = e),
            (this.canonicalId = t),
            (this.readTime = n),
            (this.resumeToken = r),
            (this.lastListenSequenceNumber = o),
            (this.query = i)
        }
        return (
          (e.store = 'targets'),
          (e.keyPath = 'targetId'),
          (e.queryTargetsIndexName = 'queryTargetsIndex'),
          (e.queryTargetsKeyPath = ['canonicalId', 'targetId']),
          e
        )
      })(),
      DbTargetDocument = (function() {
        function e(e, t) {
          ;(this.targetId = e), (this.path = t)
        }
        return (
          (e.store = 'targetDocuments'),
          (e.keyPath = ['targetId', 'path']),
          (e.documentTargetsIndex = 'documentTargetsIndex'),
          (e.documentTargetsKeyPath = ['path', 'targetId']),
          e
        )
      })(),
      DbTargetGlobal = (function() {
        function e(e, t, n, r) {
          ;(this.highestTargetId = e),
            (this.highestListenSequenceNumber = t),
            (this.lastRemoteSnapshotVersion = n),
            (this.targetCount = r)
        }
        return (e.key = 'targetGlobalKey'), (e.store = 'targetGlobal'), e
      })()
    function createQueryCache(e) {
      e
        .createObjectStore(DbTargetDocument.store, {
          keyPath: DbTargetDocument.keyPath
        })
        .createIndex(
          DbTargetDocument.documentTargetsIndex,
          DbTargetDocument.documentTargetsKeyPath,
          {unique: !0}
        ),
        e
          .createObjectStore(DbTarget.store, {keyPath: DbTarget.keyPath})
          .createIndex(
            DbTarget.queryTargetsIndexName,
            DbTarget.queryTargetsKeyPath,
            {unique: !0}
          ),
        e.createObjectStore(DbTargetGlobal.store)
    }
    function saveTargetCount(e, t) {
      var n = e.store(DbTargetGlobal.store)
      return e
        .store(DbTarget.store)
        .count()
        .next(function(e) {
          return (t.targetCount = e), n.put(DbTargetGlobal.key, t)
        })
    }
    function ensureTargetGlobalExists(e) {
      var t = e.store(DbTargetGlobal.store)
      return t.get(DbTargetGlobal.key).next(function(e) {
        return null != e
          ? PersistencePromise.resolve(e)
          : ((e = new DbTargetGlobal(
              0,
              0,
              SnapshotVersion.MIN.toTimestamp(),
              0
            )),
            t.put(DbTargetGlobal.key, e).next(function() {
              return e
            }))
      })
    }
    var ALL_STORES = [
        DbMutationQueue.store,
        DbMutationBatch.store,
        DbDocumentMutation.store,
        DbRemoteDocument.store,
        DbTarget.store,
        DbOwner.store,
        DbTargetGlobal.store,
        DbTargetDocument.store
      ],
      LOG_TAG$2 = 'SimpleDb',
      SimpleDb = (function() {
        function e(e) {
          this.db = e
        }
        return (
          (e.openOrCreate = function(t, n, r) {
            return (
              assert(
                e.isAvailable(),
                'IndexedDB not supported in current environment.'
              ),
              debug(LOG_TAG$2, 'Opening database:', t),
              new PersistencePromise(function(o, i) {
                var a = window.indexedDB.open(t, n)
                ;(a.onsuccess = function(t) {
                  var n = t.target.result
                  o(new e(n))
                }),
                  (a.onerror = function(e) {
                    i(e.target.error)
                  }),
                  (a.onupgradeneeded = function(e) {
                    debug(
                      LOG_TAG$2,
                      'Database "' + t + '" requires upgrade from version:',
                      e.oldVersion
                    )
                    var n = e.target.result,
                      o = new SimpleDbTransaction(a.transaction)
                    r(n, o, e.oldVersion, SCHEMA_VERSION).next(function() {
                      debug(
                        LOG_TAG$2,
                        'Database upgrade to version ' +
                          SCHEMA_VERSION +
                          ' complete'
                      )
                    })
                  })
              }).toPromise()
            )
          }),
          (e.delete = function(e) {
            return (
              debug(LOG_TAG$2, 'Removing database:', e),
              wrapRequest(window.indexedDB.deleteDatabase(e)).toPromise()
            )
          }),
          (e.isAvailable = function() {
            if ('undefined' == typeof window || null == window.indexedDB)
              return !1
            var e = window.navigator.userAgent
            return !(
              e.indexOf('MSIE ') > 0 ||
              e.indexOf('Trident/') > 0 ||
              e.indexOf('Edge/') > 0
            )
          }),
          (e.prototype.runTransaction = function(e, t, n) {
            var r = SimpleDbTransaction.open(this.db, e, t),
              o = n(r)
                .catch(function(e) {
                  return r.abort(), PersistencePromise.reject(e)
                })
                .toPromise()
            return r.completionPromise.then(function() {
              return o
            })
          }),
          (e.prototype.close = function() {
            this.db.close()
          }),
          e
        )
      })(),
      IterationController = (function() {
        function e(e) {
          ;(this.dbCursor = e), (this.shouldStop = !1), (this.nextKey = null)
        }
        return (
          Object.defineProperty(e.prototype, 'isDone', {
            get: function() {
              return this.shouldStop
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'skipToKey', {
            get: function() {
              return this.nextKey
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'cursor', {
            set: function(e) {
              this.dbCursor = e
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.done = function() {
            this.shouldStop = !0
          }),
          (e.prototype.skip = function(e) {
            this.nextKey = e
          }),
          (e.prototype.delete = function() {
            return wrapRequest(this.dbCursor.delete())
          }),
          e
        )
      })(),
      SimpleDbTransaction = (function() {
        function e(e) {
          var t = this
          ;(this.transaction = e),
            (this.aborted = !1),
            (this.completionPromise = new Promise(function(e, n) {
              ;(t.transaction.onabort = t.transaction.oncomplete = function(t) {
                e()
              }),
                (t.transaction.onerror = function(e) {
                  n(e.target.error)
                })
            }))
        }
        return (
          (e.open = function(t, n, r) {
            return new e(t.transaction(r, n))
          }),
          (e.prototype.abort = function() {
            this.aborted ||
              (debug(LOG_TAG$2, 'Aborting transaction.'),
              (this.aborted = !0),
              this.transaction.abort())
          }),
          (e.prototype.store = function(e) {
            var t = this.transaction.objectStore(e)
            return (
              assert(!!t, 'Object store not part of transaction: ' + e),
              new SimpleDbStore(t)
            )
          }),
          e
        )
      })(),
      SimpleDbStore = (function() {
        function e(e) {
          this.store = e
        }
        return (
          (e.prototype.put = function(e, t) {
            var n
            return (
              void 0 !== t
                ? (debug(LOG_TAG$2, 'PUT', this.store.name, e, t),
                  (n = this.store.put(t, e)))
                : (debug(LOG_TAG$2, 'PUT', this.store.name, '<auto-key>', e),
                  (n = this.store.put(e))),
              wrapRequest(n)
            )
          }),
          (e.prototype.get = function(e) {
            var t = this
            return wrapRequest(this.store.get(e)).next(function(n) {
              return (
                void 0 === n && (n = null),
                debug(LOG_TAG$2, 'GET', t.store.name, e, n),
                n
              )
            })
          }),
          (e.prototype.delete = function(e) {
            return (
              debug(LOG_TAG$2, 'DELETE', this.store.name, e),
              wrapRequest(this.store.delete(e))
            )
          }),
          (e.prototype.count = function() {
            return (
              debug(LOG_TAG$2, 'COUNT', this.store.name),
              wrapRequest(this.store.count())
            )
          }),
          (e.prototype.loadAll = function(e, t) {
            var n = this.cursor(this.options(e, t)),
              r = []
            return this.iterateCursor(n, function(e, t) {
              r.push(t)
            }).next(function() {
              return r
            })
          }),
          (e.prototype.deleteAll = function(e, t) {
            debug(LOG_TAG$2, 'DELETE ALL', this.store.name)
            var n = this.options(e, t)
            n.keysOnly = !1
            var r = this.cursor(n)
            return this.iterateCursor(r, function(e, t, n) {
              return n.delete()
            })
          }),
          (e.prototype.iterate = function(e, t) {
            var n
            t ? (n = e) : ((n = {}), (t = e))
            var r = this.cursor(n)
            return this.iterateCursor(r, t)
          }),
          (e.prototype.iterateCursor = function(e, t) {
            var n = []
            return new PersistencePromise(function(r, o) {
              ;(e.onerror = function(e) {
                o(e.target.error)
              }),
                (e.onsuccess = function(e) {
                  var o = e.target.result
                  if (o) {
                    var i = new IterationController(o),
                      a = t(o.primaryKey, o.value, i)
                    a instanceof PersistencePromise && n.push(a),
                      i.isDone
                        ? r()
                        : null === i.skipToKey
                          ? o.continue()
                          : o.continue(i.skipToKey)
                  } else r()
                })
            }).next(function() {
              return PersistencePromise.waitFor(n)
            })
          }),
          (e.prototype.options = function(e, t) {
            var n = void 0
            return (
              void 0 !== e &&
                ('string' == typeof e
                  ? (n = e)
                  : (assert(
                      void 0 === t,
                      '3rd argument must not be defined if 2nd is a range.'
                    ),
                    (t = e))),
              {index: n, range: t}
            )
          }),
          (e.prototype.cursor = function(e) {
            var t = 'next'
            if ((e.reverse && (t = 'prev'), e.index)) {
              var n = this.store.index(e.index)
              return e.keysOnly
                ? n.openKeyCursor(e.range, t)
                : n.openCursor(e.range, t)
            }
            return this.store.openCursor(e.range, t)
          }),
          e
        )
      })()
    function wrapRequest(e) {
      return new PersistencePromise(function(t, n) {
        ;(e.onsuccess = function(e) {
          var n = e.target.result
          t(n)
        }),
          (e.onerror = function(e) {
            n(e.target.error)
          })
      })
    }
    var IndexedDbMutationQueue = (function() {
      function e(e, t) {
        ;(this.userId = e),
          (this.serializer = t),
          (this.garbageCollector = null)
      }
      return (
        (e.forUser = function(t, n) {
          return (
            assert('' !== t.uid, 'UserID must not be an empty string.'),
            new e(t.isAuthenticated() ? t.uid : '', n)
          )
        }),
        (e.prototype.start = function(t) {
          var n = this
          return e
            .loadNextBatchIdFromDb(t)
            .next(function(e) {
              return (n.nextBatchId = e), mutationQueuesStore(t).get(n.userId)
            })
            .next(function(e) {
              return (
                e || (e = new DbMutationQueue(n.userId, BATCHID_UNKNOWN, '')),
                (n.metadata = e),
                n.metadata.lastAcknowledgedBatchId >= n.nextBatchId
                  ? n.checkEmpty(t).next(function(e) {
                      return (
                        assert(
                          e,
                          'Reset nextBatchID is only possible when the queue is empty'
                        ),
                        (n.metadata.lastAcknowledgedBatchId = BATCHID_UNKNOWN),
                        mutationQueuesStore(t).put(n.metadata)
                      )
                    })
                  : PersistencePromise.resolve()
              )
            })
        }),
        (e.loadNextBatchIdFromDb = function(e) {
          var t = BATCHID_UNKNOWN
          return mutationsStore(e)
            .iterate({reverse: !0}, function(e, n, r) {
              var o = e[0]
              if ((e[1] > t && (t = n.batchId), '' === o)) r.done()
              else {
                var i = immediatePredecessor(o)
                r.skip([i])
              }
            })
            .next(function() {
              return t + 1
            })
        }),
        (e.prototype.checkEmpty = function(e) {
          var t = !0,
            n = IDBKeyRange.bound(
              this.keyForBatchId(Number.NEGATIVE_INFINITY),
              this.keyForBatchId(Number.POSITIVE_INFINITY)
            )
          return mutationsStore(e)
            .iterate({range: n}, function(e, n, r) {
              ;(t = !1), r.done()
            })
            .next(function() {
              return t
            })
        }),
        (e.prototype.getNextBatchId = function(e) {
          return PersistencePromise.resolve(this.nextBatchId)
        }),
        (e.prototype.getHighestAcknowledgedBatchId = function(e) {
          return PersistencePromise.resolve(
            this.metadata.lastAcknowledgedBatchId
          )
        }),
        (e.prototype.acknowledgeBatch = function(e, t, n) {
          var r = t.batchId
          return (
            assert(
              r > this.metadata.lastAcknowledgedBatchId,
              'Mutation batchIDs must be acknowledged in order'
            ),
            (this.metadata.lastAcknowledgedBatchId = r),
            (this.metadata.lastStreamToken = validateStreamToken(n)),
            mutationQueuesStore(e).put(this.metadata)
          )
        }),
        (e.prototype.getLastStreamToken = function(e) {
          return PersistencePromise.resolve(this.metadata.lastStreamToken)
        }),
        (e.prototype.setLastStreamToken = function(e, t) {
          return (
            (this.metadata.lastStreamToken = validateStreamToken(t)),
            mutationQueuesStore(e).put(this.metadata)
          )
        }),
        (e.prototype.addMutationBatch = function(e, t, n) {
          var r = this,
            o = this.nextBatchId
          this.nextBatchId++
          var i = new MutationBatch(o, t, n),
            a = this.serializer.toDbMutationBatch(this.userId, i)
          return mutationsStore(e)
            .put(a)
            .next(function() {
              for (var t = [], i = 0, a = n; i < a.length; i++) {
                var s = a[i],
                  u = DbDocumentMutation.key(r.userId, s.key.path, o)
                t.push(
                  documentMutationsStore(e).put(
                    u,
                    DbDocumentMutation.PLACEHOLDER
                  )
                )
              }
              return PersistencePromise.waitFor(t)
            })
            .next(function() {
              return i
            })
        }),
        (e.prototype.lookupMutationBatch = function(e, t) {
          var n = this
          return mutationsStore(e)
            .get(this.keyForBatchId(t))
            .next(function(e) {
              return e ? n.serializer.fromDbMutationBatch(e) : null
            })
        }),
        (e.prototype.getNextMutationBatchAfterBatchId = function(e, t) {
          var n = this,
            r = Math.max(t, this.metadata.lastAcknowledgedBatchId) + 1,
            o = IDBKeyRange.lowerBound(this.keyForBatchId(r)),
            i = null
          return mutationsStore(e)
            .iterate({range: o}, function(e, t, o) {
              t.userId === n.userId &&
                (assert(
                  t.batchId >= r,
                  'Should have found mutation after ' + r
                ),
                (i = n.serializer.fromDbMutationBatch(t))),
                o.done()
            })
            .next(function() {
              return i
            })
        }),
        (e.prototype.getAllMutationBatches = function(e) {
          var t = this,
            n = IDBKeyRange.bound(
              this.keyForBatchId(BATCHID_UNKNOWN),
              this.keyForBatchId(Number.POSITIVE_INFINITY)
            )
          return mutationsStore(e)
            .loadAll(n)
            .next(function(e) {
              return e.map(function(e) {
                return t.serializer.fromDbMutationBatch(e)
              })
            })
        }),
        (e.prototype.getAllMutationBatchesThroughBatchId = function(e, t) {
          var n = this,
            r = IDBKeyRange.bound(
              this.keyForBatchId(BATCHID_UNKNOWN),
              this.keyForBatchId(t)
            )
          return mutationsStore(e)
            .loadAll(r)
            .next(function(e) {
              return e.map(function(e) {
                return n.serializer.fromDbMutationBatch(e)
              })
            })
        }),
        (e.prototype.getAllMutationBatchesAffectingDocumentKey = function(
          e,
          t
        ) {
          var n = this,
            r = DbDocumentMutation.prefixForPath(this.userId, t.path),
            o = IDBKeyRange.lowerBound(r),
            i = []
          return documentMutationsStore(e)
            .iterate({range: o}, function(r, o, a) {
              var s = r[0],
                u = r[1],
                c = r[2],
                h = decode(u)
              if (s === n.userId && t.path.isEqual(h)) {
                var l = n.keyForBatchId(c)
                return mutationsStore(e)
                  .get(l)
                  .next(function(e) {
                    null === e &&
                      fail(
                        'Dangling document-mutation reference found: ' +
                          r +
                          ' which points to ' +
                          l
                      ),
                      i.push(n.serializer.fromDbMutationBatch(e))
                  })
              }
              a.done()
            })
            .next(function() {
              return i
            })
        }),
        (e.prototype.getAllMutationBatchesAffectingQuery = function(e, t) {
          var n = this
          assert(
            !t.isDocumentQuery(),
            "Document queries shouldn't go down this path"
          )
          var r = t.path,
            o = r.length + 1,
            i = DbDocumentMutation.prefixForPath(this.userId, r),
            a = IDBKeyRange.lowerBound(i),
            s = new SortedSet(primitiveComparator)
          return documentMutationsStore(e)
            .iterate({range: a}, function(e, t, i) {
              var a = e[0],
                u = e[1],
                c = e[2],
                h = decode(u)
              a === n.userId && r.isPrefixOf(h)
                ? h.length === o && (s = s.add(c))
                : i.done()
            })
            .next(function() {
              var t = [],
                r = []
              return (
                s.forEach(function(o) {
                  var i = n.keyForBatchId(o)
                  r.push(
                    mutationsStore(e)
                      .get(i)
                      .next(function(e) {
                        null === e &&
                          fail(
                            'Dangling document-mutation reference found, which points to ' +
                              i
                          ),
                          t.push(n.serializer.fromDbMutationBatch(e))
                      })
                  )
                }),
                PersistencePromise.waitFor(r).next(function() {
                  return t
                })
              )
            })
        }),
        (e.prototype.removeMutationBatches = function(e, t) {
          for (
            var n = mutationsStore(e),
              r = documentMutationsStore(e),
              o = [],
              i = function(e) {
                var t = IDBKeyRange.only(a.keyForBatchId(e.batchId)),
                  i = 0,
                  s = n.iterate({range: t}, function(e, t, n) {
                    return i++, n.delete()
                  })
                o.push(
                  s.next(function() {
                    assert(
                      1 === i,
                      'Dangling document-mutation reference found: Missing batch ' +
                        e.batchId
                    )
                  })
                )
                for (var u = 0, c = e.mutations; u < c.length; u++) {
                  var h = c[u],
                    l = DbDocumentMutation.key(a.userId, h.key.path, e.batchId)
                  o.push(r.delete(l)),
                    null !== a.garbageCollector &&
                      a.garbageCollector.addPotentialGarbageKey(h.key)
                }
              },
              a = this,
              s = 0,
              u = t;
            s < u.length;
            s++
          ) {
            i(u[s])
          }
          return PersistencePromise.waitFor(o)
        }),
        (e.prototype.performConsistencyCheck = function(e) {
          var t = this
          return this.checkEmpty(e).next(function(n) {
            if (!n) return PersistencePromise.resolve()
            var r = IDBKeyRange.lowerBound(
                DbDocumentMutation.prefixForUser(t.userId)
              ),
              o = []
            return documentMutationsStore(e)
              .iterate({range: r}, function(e, n, r) {
                if (e[0] === t.userId) {
                  var i = decode(e[1])
                  o.push(i)
                } else r.done()
              })
              .next(function() {
                assert(
                  0 === o.length,
                  'Document leak -- detected dangling mutation references when queue is empty. Dangling keys: ' +
                    o.map(function(e) {
                      return e.canonicalString()
                    })
                )
              })
          })
        }),
        (e.prototype.setGarbageCollector = function(e) {
          this.garbageCollector = e
        }),
        (e.prototype.containsKey = function(e, t) {
          var n = this,
            r = DbDocumentMutation.prefixForPath(this.userId, t.path),
            o = r[1],
            i = IDBKeyRange.lowerBound(r),
            a = !1
          return documentMutationsStore(e)
            .iterate({range: i, keysOnly: !0}, function(e, t, r) {
              var i = e[0],
                s = e[1]
              e[2]
              i === n.userId && s === o && (a = !0), r.done()
            })
            .next(function() {
              return a
            })
        }),
        (e.prototype.keyForBatchId = function(e) {
          return [this.userId, e]
        }),
        e
      )
    })()
    function validateStreamToken(e) {
      return (
        assert(
          'string' == typeof e,
          'Persisting non-string stream token not supported.'
        ),
        e
      )
    }
    function mutationsStore(e) {
      return getStore(e, DbMutationBatch.store)
    }
    function documentMutationsStore(e) {
      return getStore(e, DbDocumentMutation.store)
    }
    function mutationQueuesStore(e) {
      return getStore(e, DbMutationQueue.store)
    }
    function getStore(e, t) {
      return e instanceof SimpleDbTransaction
        ? e.store(t)
        : fail('Invalid transaction object provided!')
    }
    var IndexedDbQueryCache = (function() {
      function e(e) {
        ;(this.serializer = e),
          (this.lastRemoteSnapshotVersion = SnapshotVersion.MIN),
          (this.metadata = null),
          (this.garbageCollector = null)
      }
      return (
        (e.prototype.start = function(e) {
          var t = this
          return globalTargetStore(e)
            .get(DbTargetGlobal.key)
            .next(function(e) {
              assert(
                null !== e,
                'Missing metadata row that should be added by schema migration.'
              ),
                (t.metadata = e)
              var n = e.lastRemoteSnapshotVersion
              return (
                (t.lastRemoteSnapshotVersion = SnapshotVersion.fromTimestamp(
                  new Timestamp(n.seconds, n.nanoseconds)
                )),
                PersistencePromise.resolve()
              )
            })
        }),
        (e.prototype.getHighestTargetId = function() {
          return this.metadata.highestTargetId
        }),
        (e.prototype.getLastRemoteSnapshotVersion = function() {
          return this.lastRemoteSnapshotVersion
        }),
        (e.prototype.setLastRemoteSnapshotVersion = function(e, t) {
          return (
            (this.lastRemoteSnapshotVersion = t),
            (this.metadata.lastRemoteSnapshotVersion = t.toTimestamp()),
            globalTargetStore(e).put(DbTargetGlobal.key, this.metadata)
          )
        }),
        (e.prototype.addQueryData = function(e, t) {
          var n = this
          return this.saveQueryData(e, t).next(function() {
            return (
              (n.metadata.targetCount += 1),
              n.updateMetadataFromQueryData(t),
              n.saveMetadata(e)
            )
          })
        }),
        (e.prototype.updateQueryData = function(e, t) {
          var n = this
          return this.saveQueryData(e, t).next(function() {
            return n.updateMetadataFromQueryData(t)
              ? n.saveMetadata(e)
              : PersistencePromise.resolve()
          })
        }),
        (e.prototype.removeQueryData = function(e, t) {
          var n = this
          return (
            assert(
              this.metadata.targetCount > 0,
              'Removing from an empty query cache'
            ),
            this.removeMatchingKeysForTargetId(e, t.targetId)
              .next(function() {
                return targetsStore(e).delete(t.targetId)
              })
              .next(function() {
                return (n.metadata.targetCount -= 1), n.saveMetadata(e)
              })
          )
        }),
        (e.prototype.saveMetadata = function(e) {
          return globalTargetStore(e).put(DbTargetGlobal.key, this.metadata)
        }),
        (e.prototype.saveQueryData = function(e, t) {
          return targetsStore(e).put(this.serializer.toDbTarget(t))
        }),
        (e.prototype.updateMetadataFromQueryData = function(e) {
          var t = !1
          return (
            e.targetId > this.metadata.highestTargetId &&
              ((this.metadata.highestTargetId = e.targetId), (t = !0)),
            t
          )
        }),
        Object.defineProperty(e.prototype, 'count', {
          get: function() {
            return this.metadata.targetCount
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.getQueryData = function(e, t) {
          var n = this,
            r = t.canonicalId(),
            o = IDBKeyRange.bound(
              [r, Number.NEGATIVE_INFINITY],
              [r, Number.POSITIVE_INFINITY]
            ),
            i = null
          return targetsStore(e)
            .iterate(
              {range: o, index: DbTarget.queryTargetsIndexName},
              function(e, r, o) {
                var a = n.serializer.fromDbTarget(r)
                t.isEqual(a.query) && ((i = a), o.done())
              }
            )
            .next(function() {
              return i
            })
        }),
        (e.prototype.addMatchingKeys = function(e, t, n) {
          var r = [],
            o = documentTargetStore(e)
          return (
            t.forEach(function(e) {
              var t = encode(e.path)
              r.push(o.put(new DbTargetDocument(n, t)))
            }),
            PersistencePromise.waitFor(r)
          )
        }),
        (e.prototype.removeMatchingKeys = function(e, t, n) {
          var r = this,
            o = [],
            i = documentTargetStore(e)
          return (
            t.forEach(function(e) {
              var t = encode(e.path)
              o.push(i.delete([n, t])),
                null !== r.garbageCollector &&
                  r.garbageCollector.addPotentialGarbageKey(e)
            }),
            PersistencePromise.waitFor(o)
          )
        }),
        (e.prototype.removeMatchingKeysForTargetId = function(e, t) {
          var n = documentTargetStore(e),
            r = IDBKeyRange.bound([t], [t + 1], !1, !0)
          return this.notifyGCForRemovedKeys(e, r).next(function() {
            return n.delete(r)
          })
        }),
        (e.prototype.notifyGCForRemovedKeys = function(e, t) {
          var n = this,
            r = documentTargetStore(e)
          return null !== this.garbageCollector && this.garbageCollector.isEager
            ? r.iterate({range: t, keysOnly: !0}, function(e, t, r) {
                var o = decode(e[1]),
                  i = new DocumentKey(o)
                assert(
                  null !== n.garbageCollector,
                  'GarbageCollector for query cache set to null during key removal.'
                ),
                  n.garbageCollector.addPotentialGarbageKey(i)
              })
            : PersistencePromise.resolve()
        }),
        (e.prototype.getMatchingKeysForTargetId = function(e, t) {
          var n = IDBKeyRange.bound([t], [t + 1], !1, !0),
            r = documentTargetStore(e),
            o = documentKeySet()
          return r
            .iterate({range: n, keysOnly: !0}, function(e, t, n) {
              var r = decode(e[1]),
                i = new DocumentKey(r)
              o = o.add(i)
            })
            .next(function() {
              return o
            })
        }),
        (e.prototype.setGarbageCollector = function(e) {
          this.garbageCollector = e
        }),
        (e.prototype.containsKey = function(e, t) {
          assert(
            null !== e,
            'Persistence Transaction cannot be null for query cache containsKey'
          )
          var n = encode(t.path),
            r = IDBKeyRange.bound([n], [immediateSuccessor(n)], !1, !0),
            o = 0
          return documentTargetStore(e)
            .iterate(
              {
                index: DbTargetDocument.documentTargetsIndex,
                keysOnly: !0,
                range: r
              },
              function(e, t, n) {
                o++, n.done()
              }
            )
            .next(function() {
              return o > 0
            })
        }),
        e
      )
    })()
    function targetsStore(e) {
      return getStore$1(e, DbTarget.store)
    }
    function globalTargetStore(e) {
      return getStore$1(e, DbTargetGlobal.store)
    }
    function documentTargetStore(e) {
      return getStore$1(e, DbTargetDocument.store)
    }
    function getStore$1(e, t) {
      return e instanceof SimpleDbTransaction
        ? e.store(t)
        : fail('Invalid transaction object provided!')
    }
    var IndexedDbRemoteDocumentCache = (function() {
      function e(e) {
        this.serializer = e
      }
      return (
        (e.prototype.addEntry = function(e, t) {
          return remoteDocumentsStore(e).put(
            dbKey(t.key),
            this.serializer.toDbRemoteDocument(t)
          )
        }),
        (e.prototype.removeEntry = function(e, t) {
          return remoteDocumentsStore(e).delete(dbKey(t))
        }),
        (e.prototype.getEntry = function(e, t) {
          var n = this
          return remoteDocumentsStore(e)
            .get(dbKey(t))
            .next(function(e) {
              return e ? n.serializer.fromDbRemoteDocument(e) : null
            })
        }),
        (e.prototype.getDocumentsMatchingQuery = function(e, t) {
          var n = this,
            r = documentMap(),
            o = t.path.toArray(),
            i = IDBKeyRange.lowerBound(o)
          return remoteDocumentsStore(e)
            .iterate({range: i}, function(e, o, i) {
              var a = n.serializer.fromDbRemoteDocument(o)
              t.path.isPrefixOf(a.key.path)
                ? a instanceof Document &&
                  t.matches(a) &&
                  (r = r.insert(a.key, a))
                : i.done()
            })
            .next(function() {
              return r
            })
        }),
        e
      )
    })()
    function remoteDocumentsStore(e) {
      return e instanceof SimpleDbTransaction
        ? e.store(DbRemoteDocument.store)
        : fail('Invalid transaction object provided!')
    }
    function dbKey(e) {
      return e.path.toArray()
    }
    var LocalSerializer = (function() {
      function e(e) {
        this.remoteSerializer = e
      }
      return (
        (e.prototype.fromDbRemoteDocument = function(e) {
          if (e.document) return this.remoteSerializer.fromDocument(e.document)
          if (e.noDocument) {
            var t = DocumentKey.fromSegments(e.noDocument.path),
              n = e.noDocument.readTime,
              r = new Timestamp(n.seconds, n.nanoseconds)
            return new NoDocument(t, SnapshotVersion.fromTimestamp(r))
          }
          return fail('Unexpected DbRemoteDocument')
        }),
        (e.prototype.toDbRemoteDocument = function(e) {
          if (e instanceof Document) {
            var t = this.remoteSerializer.toDocument(e)
            return new DbRemoteDocument(null, t)
          }
          var n = e.key.path.toArray(),
            r = e.version.toTimestamp(),
            o = new DbTimestamp(r.seconds, r.nanoseconds)
          return new DbRemoteDocument(new DbNoDocument(n, o), null)
        }),
        (e.prototype.toDbMutationBatch = function(e, t) {
          var n = this,
            r = t.mutations.map(function(e) {
              return n.remoteSerializer.toMutation(e)
            })
          return new DbMutationBatch(
            e,
            t.batchId,
            t.localWriteTime.toMillis(),
            r
          )
        }),
        (e.prototype.fromDbMutationBatch = function(e) {
          var t = this,
            n = e.mutations.map(function(e) {
              return t.remoteSerializer.fromMutation(e)
            }),
            r = Timestamp.fromMillis(e.localWriteTimeMs)
          return new MutationBatch(e.batchId, r, n)
        }),
        (e.prototype.fromDbTarget = function(e) {
          var t,
            n = new Timestamp(e.readTime.seconds, e.readTime.nanoseconds),
            r = SnapshotVersion.fromTimestamp(n)
          return (
            (t = isDocumentQuery(e.query)
              ? this.remoteSerializer.fromDocumentsTarget(e.query)
              : this.remoteSerializer.fromQueryTarget(e.query)),
            new QueryData(t, e.targetId, QueryPurpose.Listen, r, e.resumeToken)
          )
        }),
        (e.prototype.toDbTarget = function(e) {
          assert(
            QueryPurpose.Listen === e.purpose,
            'Only queries with purpose ' +
              QueryPurpose.Listen +
              ' may be stored, got ' +
              e.purpose
          )
          var t,
            n = e.snapshotVersion.toTimestamp(),
            r = new DbTimestamp(n.seconds, n.nanoseconds)
          ;(t = e.query.isDocumentQuery()
            ? this.remoteSerializer.toDocumentsTarget(e.query)
            : this.remoteSerializer.toQueryTarget(e.query)),
            assert(
              'string' == typeof e.resumeToken,
              'Persisting non-string resume token not supported.'
            )
          var o = e.resumeToken
          return new DbTarget(e.targetId, e.query.canonicalId(), r, o, 0, t)
        }),
        e
      )
    })()
    function isDocumentQuery(e) {
      return void 0 !== e.documents
    }
    var LOG_TAG$3 = 'IndexedDbPersistence',
      OWNER_LEASE_MAX_AGE_MS = 5e3,
      OWNER_LEASE_REFRESH_INTERVAL_MS = 4e3,
      ZOMBIE_OWNER_LOCALSTORAGE_SUFFIX = 'zombiedOwnerId',
      EXISTING_OWNER_ERROR_MSG =
        'There is another tab open with offline persistence enabled. Only one such tab is allowed at a time. The other tab must be closed or persistence must be disabled.',
      UNSUPPORTED_PLATFORM_ERROR_MSG =
        'This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.',
      IndexedDbPersistence = (function() {
        function e(t, n) {
          ;(this.ownerId = this.generateOwnerId()),
            (this.dbName = t + e.MAIN_DATABASE),
            (this.serializer = new LocalSerializer(n)),
            (this.localStoragePrefix = t)
        }
        return (
          (e.prototype.start = function() {
            var t = this
            return e.isAvailable()
              ? (assert(!this.started, 'IndexedDbPersistence double-started!'),
                (this.started = !0),
                SimpleDb.openOrCreate(
                  this.dbName,
                  SCHEMA_VERSION,
                  createOrUpgradeDb
                )
                  .then(function(e) {
                    t.simpleDb = e
                  })
                  .then(function() {
                    return t.tryAcquireOwnerLease()
                  })
                  .then(function() {
                    t.scheduleOwnerLeaseRefreshes(), t.attachWindowUnloadHook()
                  }))
              : ((this.persistenceError = new FirestoreError(
                  Code.UNIMPLEMENTED,
                  UNSUPPORTED_PLATFORM_ERROR_MSG
                )),
                Promise.reject(this.persistenceError))
          }),
          (e.prototype.shutdown = function() {
            var e = this
            return (
              assert(
                this.started,
                'IndexedDbPersistence shutdown without start!'
              ),
              (this.started = !1),
              this.detachWindowUnloadHook(),
              this.stopOwnerLeaseRefreshes(),
              this.releaseOwnerLease().then(function() {
                e.simpleDb.close()
              })
            )
          }),
          (e.prototype.getMutationQueue = function(e) {
            return IndexedDbMutationQueue.forUser(e, this.serializer)
          }),
          (e.prototype.getQueryCache = function() {
            return new IndexedDbQueryCache(this.serializer)
          }),
          (e.prototype.getRemoteDocumentCache = function() {
            return new IndexedDbRemoteDocumentCache(this.serializer)
          }),
          (e.prototype.runTransaction = function(e, t) {
            var n = this
            return this.persistenceError
              ? Promise.reject(this.persistenceError)
              : (debug(LOG_TAG$3, 'Starting transaction:', e),
                this.simpleDb.runTransaction('readwrite', ALL_STORES, function(
                  e
                ) {
                  return n.ensureOwnerLease(e).next(function() {
                    return t(e)
                  })
                }))
          }),
          (e.isAvailable = function() {
            return SimpleDb.isAvailable()
          }),
          (e.buildStoragePrefix = function(e) {
            var t = e.databaseId.projectId
            return (
              e.databaseId.isDefaultDatabase ||
                (t += '.' + e.databaseId.database),
              'firestore/' + e.persistenceKey + '/' + t + '/'
            )
          }),
          (e.prototype.tryAcquireOwnerLease = function() {
            var e = this
            return this.simpleDb.runTransaction(
              'readwrite',
              [DbOwner.store],
              function(t) {
                var n = t.store(DbOwner.store)
                return n.get('owner').next(function(t) {
                  if (e.validOwner(t))
                    return (
                      debug(
                        LOG_TAG$3,
                        'Valid owner already. Failing. Current owner:',
                        t
                      ),
                      (e.persistenceError = new FirestoreError(
                        Code.FAILED_PRECONDITION,
                        EXISTING_OWNER_ERROR_MSG
                      )),
                      PersistencePromise.reject(e.persistenceError)
                    )
                  var r = new DbOwner(e.ownerId, Date.now())
                  return (
                    debug(
                      LOG_TAG$3,
                      'No valid owner. Acquiring owner lease. Current owner:',
                      t,
                      'New owner:',
                      r
                    ),
                    n.put('owner', r)
                  )
                })
              }
            )
          }),
          (e.prototype.releaseOwnerLease = function() {
            var e = this
            return this.simpleDb.runTransaction(
              'readwrite',
              [DbOwner.store],
              function(t) {
                var n = t.store(DbOwner.store)
                return n.get('owner').next(function(t) {
                  return null !== t && t.ownerId === e.ownerId
                    ? (debug(LOG_TAG$3, 'Releasing owner lease.'),
                      n.delete('owner'))
                    : PersistencePromise.resolve()
                })
              }
            )
          }),
          (e.prototype.ensureOwnerLease = function(e) {
            var t = this
            return e
              .store(DbOwner.store)
              .get('owner')
              .next(function(e) {
                return null === e || e.ownerId !== t.ownerId
                  ? ((t.persistenceError = new FirestoreError(
                      Code.FAILED_PRECONDITION,
                      EXISTING_OWNER_ERROR_MSG
                    )),
                    PersistencePromise.reject(t.persistenceError))
                  : PersistencePromise.resolve()
              })
          }),
          (e.prototype.validOwner = function(e) {
            var t = Date.now(),
              n = t - OWNER_LEASE_MAX_AGE_MS,
              r = t
            return (
              null !== e &&
              (!(e.leaseTimestampMs < n) &&
                (e.leaseTimestampMs > r
                  ? (error(
                      'Persistence owner-lease is in the future. Discarding.',
                      e
                    ),
                    !1)
                  : e.ownerId !== this.getZombiedOwnerId()))
            )
          }),
          (e.prototype.scheduleOwnerLeaseRefreshes = function() {
            var e = this
            this.ownerLeaseRefreshHandle = setInterval(function() {
              e
                .runTransaction('Refresh owner timestamp', function(t) {
                  return t
                    .store(DbOwner.store)
                    .put('owner', new DbOwner(e.ownerId, Date.now()))
                })
                .catch(function(t) {
                  error(t), e.stopOwnerLeaseRefreshes()
                })
            }, OWNER_LEASE_REFRESH_INTERVAL_MS)
          }),
          (e.prototype.stopOwnerLeaseRefreshes = function() {
            this.ownerLeaseRefreshHandle &&
              (clearInterval(this.ownerLeaseRefreshHandle),
              (this.ownerLeaseRefreshHandle = null))
          }),
          (e.prototype.attachWindowUnloadHook = function() {
            var e = this
            ;(this.windowUnloadHandler = function() {
              e.setZombiedOwnerId(e.ownerId), e.shutdown()
            }),
              window.addEventListener('unload', this.windowUnloadHandler)
          }),
          (e.prototype.detachWindowUnloadHook = function() {
            this.windowUnloadHandler &&
              (window.removeEventListener('unload', this.windowUnloadHandler),
              (this.windowUnloadHandler = null))
          }),
          (e.prototype.getZombiedOwnerId = function() {
            try {
              var e = window.localStorage.getItem(
                this.zombiedOwnerLocalStorageKey()
              )
              return (
                debug(LOG_TAG$3, 'Zombied ownerID from LocalStorage:', e), e
              )
            } catch (e) {
              return error('Failed to get zombie owner id.', e), null
            }
          }),
          (e.prototype.setZombiedOwnerId = function(e) {
            try {
              null === e
                ? window.localStorage.removeItem(
                    this.zombiedOwnerLocalStorageKey()
                  )
                : window.localStorage.setItem(
                    this.zombiedOwnerLocalStorageKey(),
                    e
                  )
            } catch (e) {
              error('Failed to set zombie owner id.', e)
            }
          }),
          (e.prototype.zombiedOwnerLocalStorageKey = function() {
            return this.localStoragePrefix + ZOMBIE_OWNER_LOCALSTORAGE_SUFFIX
          }),
          (e.prototype.generateOwnerId = function() {
            return AutoId.newId()
          }),
          (e.MAIN_DATABASE = 'main'),
          e
        )
      })(),
      LocalDocumentsView = (function() {
        function e(e, t) {
          ;(this.remoteDocumentCache = e), (this.mutationQueue = t)
        }
        return (
          (e.prototype.getDocument = function(e, t) {
            var n = this
            return this.remoteDocumentCache.getEntry(e, t).next(function(r) {
              return n.computeLocalDocument(e, t, r)
            })
          }),
          (e.prototype.getDocuments = function(e, t) {
            var n = this,
              r = [],
              o = maybeDocumentMap()
            return (
              t.forEach(function(t) {
                r.push(
                  n.getDocument(e, t).next(function(e) {
                    e ||
                      (e = new NoDocument(t, SnapshotVersion.forDeletedDoc())),
                      (o = o.insert(t, e))
                  })
                )
              }),
              PersistencePromise.waitFor(r).next(function() {
                return o
              })
            )
          }),
          (e.prototype.getDocumentsMatchingQuery = function(e, t) {
            return DocumentKey.isDocumentKey(t.path)
              ? this.getDocumentsMatchingDocumentQuery(e, t.path)
              : this.getDocumentsMatchingCollectionQuery(e, t)
          }),
          (e.prototype.getDocumentsMatchingDocumentQuery = function(e, t) {
            return this.getDocument(e, new DocumentKey(t)).next(function(e) {
              var t = documentMap()
              return e instanceof Document && (t = t.insert(e.key, e)), t
            })
          }),
          (e.prototype.getDocumentsMatchingCollectionQuery = function(e, t) {
            var n,
              r = this
            return this.remoteDocumentCache
              .getDocumentsMatchingQuery(e, t)
              .next(function(t) {
                return r.computeLocalDocuments(e, t)
              })
              .next(function(o) {
                return (
                  (n = o),
                  r.mutationQueue.getAllMutationBatchesAffectingQuery(e, t)
                )
              })
              .next(function(t) {
                for (var o = documentKeySet(), i = 0, a = t; i < a.length; i++)
                  for (var s = 0, u = a[i].mutations; s < u.length; s++) {
                    var c = u[s]
                    n.get(c.key) || (o = o.add(c.key))
                  }
                var h = []
                return (
                  o.forEach(function(t) {
                    h.push(
                      r.getDocument(e, t).next(function(e) {
                        e instanceof Document && (n = n.insert(e.key, e))
                      })
                    )
                  }),
                  PersistencePromise.waitFor(h)
                )
              })
              .next(function() {
                return (
                  n.forEach(function(e, r) {
                    t.matches(r) || (n = n.remove(e))
                  }),
                  n
                )
              })
          }),
          (e.prototype.computeLocalDocument = function(e, t, n) {
            return this.mutationQueue
              .getAllMutationBatchesAffectingDocumentKey(e, t)
              .next(function(e) {
                for (var r = 0, o = e; r < o.length; r++) {
                  var i = o[r]
                  n = i.applyToLocalView(t, n)
                }
                return n
              })
          }),
          (e.prototype.computeLocalDocuments = function(e, t) {
            var n = this,
              r = []
            return (
              t.forEach(function(o, i) {
                r.push(
                  n.computeLocalDocument(e, o, i).next(function(e) {
                    e instanceof Document
                      ? (t = t.insert(e.key, e))
                      : e instanceof NoDocument
                        ? (t = t.remove(e.key))
                        : fail('Unknown MaybeDocument: ' + e)
                  })
                )
              }),
              PersistencePromise.waitFor(r).next(function() {
                return t
              })
            )
          }),
          e
        )
      })(),
      RemoteDocumentChangeBuffer = (function() {
        function e(e) {
          ;(this.remoteDocumentCache = e), (this.changes = maybeDocumentMap())
        }
        return (
          (e.prototype.addEntry = function(e) {
            var t = this.assertChanges()
            this.changes = t.insert(e.key, e)
          }),
          (e.prototype.getEntry = function(e, t) {
            var n = this.assertChanges().get(t)
            return n
              ? PersistencePromise.resolve(n)
              : this.remoteDocumentCache.getEntry(e, t)
          }),
          (e.prototype.apply = function(e) {
            var t = this,
              n = []
            return (
              this.assertChanges().forEach(function(r, o) {
                n.push(t.remoteDocumentCache.addEntry(e, o))
              }),
              (this.changes = null),
              PersistencePromise.waitFor(n)
            )
          }),
          (e.prototype.assertChanges = function() {
            return (
              assert(
                null !== this.changes,
                'Changes have already been applied.'
              ),
              this.changes
            )
          }),
          e
        )
      })(),
      LOG_TAG$4 = 'LocalStore',
      LocalStore = (function() {
        function e(e, t, n) {
          ;(this.persistence = e),
            (this.garbageCollector = n),
            (this.localViewReferences = new ReferenceSet()),
            (this.targetIds = {}),
            (this.targetIdGenerator = TargetIdGenerator.forLocalStore()),
            (this.heldBatchResults = []),
            (this.mutationQueue = e.getMutationQueue(t)),
            (this.remoteDocuments = e.getRemoteDocumentCache()),
            (this.queryCache = e.getQueryCache()),
            (this.localDocuments = new LocalDocumentsView(
              this.remoteDocuments,
              this.mutationQueue
            )),
            this.garbageCollector.addGarbageSource(this.localViewReferences),
            this.garbageCollector.addGarbageSource(this.queryCache),
            this.garbageCollector.addGarbageSource(this.mutationQueue)
        }
        return (
          (e.prototype.start = function() {
            var e = this
            return this.persistence.runTransaction('Start LocalStore', function(
              t
            ) {
              return e.startMutationQueue(t).next(function() {
                return e.startQueryCache(t)
              })
            })
          }),
          (e.prototype.handleUserChange = function(e) {
            var t = this
            return this.persistence.runTransaction(
              'Handle user change',
              function(n) {
                var r
                return t.mutationQueue
                  .getAllMutationBatches(n)
                  .next(function(o) {
                    return (
                      (r = o),
                      t.garbageCollector.removeGarbageSource(t.mutationQueue),
                      (t.mutationQueue = t.persistence.getMutationQueue(e)),
                      t.garbageCollector.addGarbageSource(t.mutationQueue),
                      t.startMutationQueue(n)
                    )
                  })
                  .next(function() {
                    return (
                      (t.localDocuments = new LocalDocumentsView(
                        t.remoteDocuments,
                        t.mutationQueue
                      )),
                      t.mutationQueue.getAllMutationBatches(n)
                    )
                  })
                  .next(function(e) {
                    for (
                      var o = documentKeySet(), i = 0, a = [r, e];
                      i < a.length;
                      i++
                    )
                      for (var s = 0, u = a[i]; s < u.length; s++)
                        for (var c = 0, h = u[s].mutations; c < h.length; c++) {
                          var l = h[c]
                          o = o.add(l.key)
                        }
                    return t.localDocuments.getDocuments(n, o)
                  })
              }
            )
          }),
          (e.prototype.startQueryCache = function(e) {
            var t = this
            return this.queryCache.start(e).next(function() {
              var e = t.queryCache.getHighestTargetId()
              t.targetIdGenerator = TargetIdGenerator.forLocalStore(e)
            })
          }),
          (e.prototype.startMutationQueue = function(e) {
            var t = this
            return this.mutationQueue
              .start(e)
              .next(function() {
                return (
                  (t.heldBatchResults = []),
                  t.mutationQueue.getHighestAcknowledgedBatchId(e)
                )
              })
              .next(function(n) {
                return n !== BATCHID_UNKNOWN
                  ? t.mutationQueue.getAllMutationBatchesThroughBatchId(e, n)
                  : PersistencePromise.resolve([])
              })
              .next(function(n) {
                return n.length > 0
                  ? t.mutationQueue.removeMutationBatches(e, n)
                  : PersistencePromise.resolve()
              })
          }),
          (e.prototype.localWrite = function(e) {
            var t = this
            return this.persistence.runTransaction(
              'Locally write mutations',
              function(n) {
                var r,
                  o = Timestamp.now()
                return t.mutationQueue
                  .addMutationBatch(n, o, e)
                  .next(function(e) {
                    var o = (r = e).keys()
                    return t.localDocuments.getDocuments(n, o)
                  })
                  .next(function(e) {
                    return {batchId: r.batchId, changes: e}
                  })
              }
            )
          }),
          (e.prototype.acknowledgeBatch = function(e) {
            var t = this
            return this.persistence.runTransaction(
              'Acknowledge batch',
              function(n) {
                var r
                return t.mutationQueue
                  .acknowledgeBatch(n, e.batch, e.streamToken)
                  .next(function() {
                    if (t.shouldHoldBatchResult(e.commitVersion))
                      return (
                        t.heldBatchResults.push(e),
                        (r = documentKeySet()),
                        PersistencePromise.resolve()
                      )
                    var o = new RemoteDocumentChangeBuffer(t.remoteDocuments)
                    return t.releaseBatchResults(n, [e], o).next(function(e) {
                      return (r = e), o.apply(n)
                    })
                  })
                  .next(function() {
                    return t.mutationQueue.performConsistencyCheck(n)
                  })
                  .next(function() {
                    return t.localDocuments.getDocuments(n, r)
                  })
              }
            )
          }),
          (e.prototype.rejectBatch = function(e) {
            var t = this
            return this.persistence.runTransaction('Reject batch', function(n) {
              var r, o
              return t.mutationQueue
                .lookupMutationBatch(n, e)
                .next(function(o) {
                  return (
                    assert(null != o, 'Attempt to reject nonexistent batch!'),
                    (r = o),
                    t.mutationQueue
                      .getHighestAcknowledgedBatchId(n)
                      .next(function(t) {
                        return (
                          assert(
                            e > t,
                            "Acknowledged batches can't be rejected."
                          ),
                          r
                        )
                      })
                  )
                })
                .next(function() {
                  return t.removeMutationBatch(n, r)
                })
                .next(function(e) {
                  return (o = e), t.mutationQueue.performConsistencyCheck(n)
                })
                .next(function() {
                  return t.localDocuments.getDocuments(n, o)
                })
            })
          }),
          (e.prototype.getLastStreamToken = function() {
            var e = this
            return this.persistence.runTransaction(
              'Get last stream token',
              function(t) {
                return e.mutationQueue.getLastStreamToken(t)
              }
            )
          }),
          (e.prototype.setLastStreamToken = function(e) {
            var t = this
            return this.persistence.runTransaction(
              'Set last stream token',
              function(n) {
                return t.mutationQueue.setLastStreamToken(n, e)
              }
            )
          }),
          (e.prototype.getLastRemoteSnapshotVersion = function() {
            return this.queryCache.getLastRemoteSnapshotVersion()
          }),
          (e.prototype.applyRemoteEvent = function(e) {
            var t = this,
              n = new RemoteDocumentChangeBuffer(this.remoteDocuments)
            return this.persistence.runTransaction(
              'Apply remote event',
              function(r) {
                var o = []
                forEachNumber(e.targetChanges, function(e, n) {
                  var i = t.targetIds[e]
                  if (i) {
                    var a = n.mapping
                    if (a)
                      if (a instanceof ResetMapping)
                        o.push(
                          t.queryCache
                            .removeMatchingKeysForTargetId(r, e)
                            .next(function() {
                              return t.queryCache.addMatchingKeys(
                                r,
                                a.documents,
                                e
                              )
                            })
                        )
                      else {
                        if (!(a instanceof UpdateMapping))
                          return fail(
                            'Unknown mapping type: ' + JSON.stringify(a)
                          )
                        o.push(
                          t.queryCache
                            .removeMatchingKeys(r, a.removedDocuments, e)
                            .next(function() {
                              return t.queryCache.addMatchingKeys(
                                r,
                                a.addedDocuments,
                                e
                              )
                            })
                        )
                      }
                    var s = n.resumeToken
                    s.length > 0 &&
                      ((i = i.update({
                        resumeToken: s,
                        snapshotVersion: n.snapshotVersion
                      })),
                      (t.targetIds[e] = i),
                      o.push(t.queryCache.updateQueryData(r, i)))
                  }
                })
                var i = documentKeySet()
                e.documentUpdates.forEach(function(e, a) {
                  ;(i = i.add(e)),
                    o.push(
                      n.getEntry(r, e).next(function(r) {
                        null == r ||
                        a.version.isEqual(SnapshotVersion.MIN) ||
                        a.version.compareTo(r.version) >= 0
                          ? n.addEntry(a)
                          : debug(
                              LOG_TAG$4,
                              'Ignoring outdated watch update for ',
                              e,
                              '. Current version:',
                              r.version,
                              ' Watch version:',
                              a.version
                            ),
                          t.garbageCollector.addPotentialGarbageKey(e)
                      })
                    )
                })
                var a,
                  s = t.queryCache.getLastRemoteSnapshotVersion(),
                  u = e.snapshotVersion
                return (
                  u.isEqual(SnapshotVersion.MIN) ||
                    (assert(
                      u.compareTo(s) >= 0,
                      'Watch stream reverted to previous snapshot?? ' +
                        u +
                        ' < ' +
                        s
                    ),
                    o.push(t.queryCache.setLastRemoteSnapshotVersion(r, u))),
                  PersistencePromise.waitFor(o)
                    .next(function() {
                      return t.releaseHeldBatchResults(r, n)
                    })
                    .next(function(e) {
                      return (a = e), n.apply(r)
                    })
                    .next(function() {
                      return t.localDocuments.getDocuments(r, i.unionWith(a))
                    })
                )
              }
            )
          }),
          (e.prototype.notifyLocalViewChanges = function(e) {
            var t = this
            return this.persistence.runTransaction(
              'Notify local view changes',
              function(n) {
                for (
                  var r = [],
                    o = function(e) {
                      r.push(
                        t.queryCache.getQueryData(n, e.query).next(function(n) {
                          assert(
                            null !== n,
                            'Local view changes contain unallocated query.'
                          )
                          var r = n.targetId
                          t.localViewReferences.addReferences(e.addedKeys, r),
                            t.localViewReferences.removeReferences(
                              e.removedKeys,
                              r
                            )
                        })
                      )
                    },
                    i = 0,
                    a = e;
                  i < a.length;
                  i++
                ) {
                  o(a[i])
                }
                return PersistencePromise.waitFor(r)
              }
            )
          }),
          (e.prototype.nextMutationBatch = function(e) {
            var t = this
            return this.persistence.runTransaction(
              'Get next mutation batch',
              function(n) {
                return (
                  void 0 === e && (e = BATCHID_UNKNOWN),
                  t.mutationQueue.getNextMutationBatchAfterBatchId(n, e)
                )
              }
            )
          }),
          (e.prototype.readDocument = function(e) {
            var t = this
            return this.persistence.runTransaction('read document', function(
              n
            ) {
              return t.localDocuments.getDocument(n, e)
            })
          }),
          (e.prototype.allocateQuery = function(e) {
            var t = this
            return this.persistence.runTransaction('Allocate query', function(
              n
            ) {
              var r
              return t.queryCache
                .getQueryData(n, e)
                .next(function(o) {
                  if (o) return (r = o), PersistencePromise.resolve()
                  var i = t.targetIdGenerator.next()
                  return (
                    (r = new QueryData(e, i, QueryPurpose.Listen)),
                    t.queryCache.addQueryData(n, r)
                  )
                })
                .next(function() {
                  return (
                    assert(
                      !t.targetIds[r.targetId],
                      'Tried to allocate an already allocated query: ' + e
                    ),
                    (t.targetIds[r.targetId] = r),
                    r
                  )
                })
            })
          }),
          (e.prototype.releaseQuery = function(e) {
            var t = this
            return this.persistence.runTransaction('Release query', function(
              n
            ) {
              return t.queryCache
                .getQueryData(n, e)
                .next(function(r) {
                  return (
                    assert(
                      null != r,
                      'Tried to release nonexistent query: ' + e
                    ),
                    t.localViewReferences.removeReferencesForId(r.targetId),
                    delete t.targetIds[r.targetId],
                    t.garbageCollector.isEager
                      ? t.queryCache.removeQueryData(n, r)
                      : PersistencePromise.resolve()
                  )
                })
                .next(function() {
                  if (isEmpty(t.targetIds)) {
                    var e = new RemoteDocumentChangeBuffer(t.remoteDocuments)
                    return t.releaseHeldBatchResults(n, e).next(function() {
                      e.apply(n)
                    })
                  }
                  return PersistencePromise.resolve()
                })
            })
          }),
          (e.prototype.executeQuery = function(e) {
            var t = this
            return this.persistence.runTransaction('Execute query', function(
              n
            ) {
              return t.localDocuments.getDocumentsMatchingQuery(n, e)
            })
          }),
          (e.prototype.remoteDocumentKeys = function(e) {
            var t = this
            return this.persistence.runTransaction(
              'Remote document keys',
              function(n) {
                return t.queryCache.getMatchingKeysForTargetId(n, e)
              }
            )
          }),
          (e.prototype.collectGarbage = function() {
            var e = this
            return this.persistence.runTransaction(
              'Garbage collection',
              function(t) {
                return e.garbageCollector.collectGarbage(t).next(function(n) {
                  var r = []
                  return (
                    n.forEach(function(n) {
                      r.push(e.remoteDocuments.removeEntry(t, n))
                    }),
                    PersistencePromise.waitFor(r)
                  )
                })
              }
            )
          }),
          (e.prototype.releaseHeldBatchResults = function(e, t) {
            for (
              var n = [], r = 0, o = this.heldBatchResults;
              r < o.length;
              r++
            ) {
              var i = o[r]
              if (!this.isRemoteUpToVersion(i.commitVersion)) break
              n.push(i)
            }
            return 0 === n.length
              ? PersistencePromise.resolve(documentKeySet())
              : (this.heldBatchResults.splice(0, n.length),
                this.releaseBatchResults(e, n, t))
          }),
          (e.prototype.isRemoteUpToVersion = function(e) {
            var t = this.queryCache.getLastRemoteSnapshotVersion()
            return e.compareTo(t) <= 0 || isEmpty(this.targetIds)
          }),
          (e.prototype.shouldHoldBatchResult = function(e) {
            return (
              !this.isRemoteUpToVersion(e) || this.heldBatchResults.length > 0
            )
          }),
          (e.prototype.releaseBatchResults = function(e, t, n) {
            for (
              var r = this,
                o = PersistencePromise.resolve(),
                i = function(t) {
                  o = o.next(function() {
                    return r.applyWriteToRemoteDocuments(e, t, n)
                  })
                },
                a = 0,
                s = t;
              a < s.length;
              a++
            ) {
              i(s[a])
            }
            return o.next(function() {
              return r.removeMutationBatches(
                e,
                t.map(function(e) {
                  return e.batch
                })
              )
            })
          }),
          (e.prototype.removeMutationBatch = function(e, t) {
            return this.removeMutationBatches(e, [t])
          }),
          (e.prototype.removeMutationBatches = function(e, t) {
            for (var n = documentKeySet(), r = 0, o = t; r < o.length; r++)
              for (var i = 0, a = o[r].mutations; i < a.length; i++) {
                var s = a[i].key
                n = n.add(s)
              }
            return this.mutationQueue
              .removeMutationBatches(e, t)
              .next(function() {
                return n
              })
          }),
          (e.prototype.applyWriteToRemoteDocuments = function(e, t, n) {
            var r = t.batch,
              o = r.keys(),
              i = PersistencePromise.resolve()
            return (
              o.forEach(function(o) {
                i = i
                  .next(function() {
                    return n.getEntry(e, o)
                  })
                  .next(function(e) {
                    var i = e,
                      a = t.docVersions.get(o)
                    assert(
                      null !== a,
                      'ackVersions should contain every doc in the write.'
                    ),
                      (!i || i.version.compareTo(a) < 0) &&
                        ((i = r.applyToRemoteDocument(o, i, t))
                          ? n.addEntry(i)
                          : assert(
                              !e,
                              'Mutation batch ' +
                                r +
                                ' applied to document ' +
                                e +
                                ' resulted in null'
                            ))
                  })
              }),
              i
            )
          }),
          e
        )
      })(),
      MemoryMutationQueue = (function() {
        function e() {
          ;(this.mutationQueue = []),
            (this.nextBatchId = 1),
            (this.highestAcknowledgedBatchId = BATCHID_UNKNOWN),
            (this.lastStreamToken = emptyByteString()),
            (this.garbageCollector = null),
            (this.batchesByDocumentKey = new SortedSet(
              DocReference.compareByKey
            ))
        }
        return (
          (e.prototype.start = function(e) {
            return (
              0 === this.mutationQueue.length &&
                ((this.nextBatchId = 1),
                (this.highestAcknowledgedBatchId = BATCHID_UNKNOWN)),
              assert(
                this.highestAcknowledgedBatchId < this.nextBatchId,
                'highestAcknowledgedBatchId must be less than the nextBatchId'
              ),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.checkEmpty = function(e) {
            return PersistencePromise.resolve(0 === this.mutationQueue.length)
          }),
          (e.prototype.getNextBatchId = function(e) {
            return PersistencePromise.resolve(this.nextBatchId)
          }),
          (e.prototype.getHighestAcknowledgedBatchId = function(e) {
            return PersistencePromise.resolve(this.highestAcknowledgedBatchId)
          }),
          (e.prototype.acknowledgeBatch = function(e, t, n) {
            var r = t.batchId
            assert(
              r > this.highestAcknowledgedBatchId,
              'Mutation batchIDs must be acknowledged in order'
            )
            var o = this.indexOfExistingBatchId(r, 'acknowledged'),
              i = this.mutationQueue[o]
            return (
              assert(
                r === i.batchId,
                'Queue ordering failure: expected batch ' +
                  r +
                  ', got batch ' +
                  i.batchId
              ),
              assert(
                !i.isTombstone(),
                "Can't acknowledge a previously removed batch"
              ),
              (this.highestAcknowledgedBatchId = r),
              (this.lastStreamToken = n),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.getLastStreamToken = function(e) {
            return PersistencePromise.resolve(this.lastStreamToken)
          }),
          (e.prototype.setLastStreamToken = function(e, t) {
            return (this.lastStreamToken = t), PersistencePromise.resolve()
          }),
          (e.prototype.addMutationBatch = function(e, t, n) {
            assert(0 !== n.length, 'Mutation batches should not be empty')
            var r = this.nextBatchId
            ;(this.nextBatchId++, this.mutationQueue.length > 0) &&
              assert(
                this.mutationQueue[this.mutationQueue.length - 1].batchId < r,
                'Mutation batchIDs must be monotonically increasing order'
              )
            var o = new MutationBatch(r, t, n)
            this.mutationQueue.push(o)
            for (var i = 0, a = n; i < a.length; i++) {
              var s = a[i]
              this.batchesByDocumentKey = this.batchesByDocumentKey.add(
                new DocReference(s.key, r)
              )
            }
            return PersistencePromise.resolve(o)
          }),
          (e.prototype.lookupMutationBatch = function(e, t) {
            return PersistencePromise.resolve(this.findMutationBatch(t))
          }),
          (e.prototype.getNextMutationBatchAfterBatchId = function(e, t) {
            for (
              var n = this.mutationQueue.length,
                r = Math.max(t, this.highestAcknowledgedBatchId) + 1,
                o = this.indexOfBatchId(r),
                i = o < 0 ? 0 : o;
              i < n;
              i++
            ) {
              var a = this.mutationQueue[i]
              if (!a.isTombstone()) return PersistencePromise.resolve(a)
            }
            return PersistencePromise.resolve(null)
          }),
          (e.prototype.getAllMutationBatches = function(e) {
            return PersistencePromise.resolve(
              this.getAllLiveMutationBatchesBeforeIndex(
                this.mutationQueue.length
              )
            )
          }),
          (e.prototype.getAllMutationBatchesThroughBatchId = function(e, t) {
            var n = this.mutationQueue.length,
              r = this.indexOfBatchId(t)
            return (
              r < 0 ? (r = 0) : r >= n ? (r = n) : r++,
              PersistencePromise.resolve(
                this.getAllLiveMutationBatchesBeforeIndex(r)
              )
            )
          }),
          (e.prototype.getAllMutationBatchesAffectingDocumentKey = function(
            e,
            t
          ) {
            var n = this,
              r = new DocReference(t, 0),
              o = new DocReference(t, Number.POSITIVE_INFINITY),
              i = []
            return (
              this.batchesByDocumentKey.forEachInRange([r, o], function(e) {
                assert(
                  t.isEqual(e.key),
                  "Should only iterate over a single key's batches"
                )
                var r = n.findMutationBatch(e.targetOrBatchId)
                assert(
                  null !== r,
                  'Batches in the index must exist in the main table'
                ),
                  i.push(r)
              }),
              PersistencePromise.resolve(i)
            )
          }),
          (e.prototype.getAllMutationBatchesAffectingQuery = function(e, t) {
            var n = this,
              r = t.path,
              o = r.length + 1,
              i = r
            DocumentKey.isDocumentKey(i) || (i = i.child(''))
            var a = new DocReference(new DocumentKey(i), 0),
              s = new SortedSet(primitiveComparator)
            this.batchesByDocumentKey.forEachWhile(function(e) {
              var t = e.key.path
              return (
                !!r.isPrefixOf(t) &&
                (t.length === o && (s = s.add(e.targetOrBatchId)), !0)
              )
            }, a)
            var u = []
            return (
              s.forEach(function(e) {
                var t = n.findMutationBatch(e)
                null !== t && u.push(t)
              }),
              PersistencePromise.resolve(u)
            )
          }),
          (e.prototype.removeMutationBatches = function(e, t) {
            var n = t.length
            assert(n > 0, 'Should not remove mutations when none exist.')
            var r = t[0].batchId,
              o = this.mutationQueue.length,
              i = this.indexOfExistingBatchId(r, 'removed')
            assert(
              this.mutationQueue[i].batchId === r,
              'Removed batches must exist in the queue'
            )
            for (var a = 1, s = i + 1; a < n && s < o; ) {
              ;(d = this.mutationQueue[s]).isTombstone()
                ? s++
                : (assert(
                    d.batchId === t[a].batchId,
                    'Removed batches must be contiguous in the queue'
                  ),
                  a++,
                  s++)
            }
            if (0 === i) {
              for (; s < o; s++) {
                if (!(d = this.mutationQueue[s]).isTombstone()) break
              }
              var u = s - i
              this.mutationQueue.splice(i, u)
            } else
              for (var c = i; c < s; c++)
                this.mutationQueue[c] = this.mutationQueue[c].toTombstone()
            for (
              var h = this.batchesByDocumentKey, l = 0, f = t;
              l < f.length;
              l++
            )
              for (
                var d, p = (d = f[l]).batchId, m = 0, y = d.mutations;
                m < y.length;
                m++
              ) {
                var g = y[m].key
                null !== this.garbageCollector &&
                  this.garbageCollector.addPotentialGarbageKey(g)
                var v = new DocReference(g, p)
                h = h.delete(v)
              }
            return (this.batchesByDocumentKey = h), PersistencePromise.resolve()
          }),
          (e.prototype.setGarbageCollector = function(e) {
            this.garbageCollector = e
          }),
          (e.prototype.containsKey = function(e, t) {
            var n = new DocReference(t, 0),
              r = this.batchesByDocumentKey.firstAfterOrEqual(n)
            return PersistencePromise.resolve(t.isEqual(r && r.key))
          }),
          (e.prototype.performConsistencyCheck = function(e) {
            return (
              0 === this.mutationQueue.length &&
                assert(
                  this.batchesByDocumentKey.isEmpty(),
                  'Document leak -- detected dangling mutation references when queue is empty.'
                ),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.getAllLiveMutationBatchesBeforeIndex = function(e) {
            for (var t = [], n = 0; n < e; n++) {
              var r = this.mutationQueue[n]
              r.isTombstone() || t.push(r)
            }
            return t
          }),
          (e.prototype.indexOfExistingBatchId = function(e, t) {
            var n = this.indexOfBatchId(e)
            return (
              assert(
                n >= 0 && n < this.mutationQueue.length,
                'Batches must exist to be ' + t
              ),
              n
            )
          }),
          (e.prototype.indexOfBatchId = function(e) {
            return 0 === this.mutationQueue.length
              ? 0
              : e - this.mutationQueue[0].batchId
          }),
          (e.prototype.findMutationBatch = function(e) {
            var t = this.indexOfBatchId(e)
            if (t < 0 || t >= this.mutationQueue.length) return null
            var n = this.mutationQueue[t]
            return (
              assert(n.batchId === e, 'If found batch must match'),
              n.isTombstone() ? null : n
            )
          }),
          e
        )
      })(),
      MemoryQueryCache = (function() {
        function e() {
          ;(this.queries = new ObjectMap(function(e) {
            return e.canonicalId()
          })),
            (this.lastRemoteSnapshotVersion = SnapshotVersion.MIN),
            (this.highestTargetId = 0),
            (this.references = new ReferenceSet()),
            (this.targetCount = 0)
        }
        return (
          (e.prototype.start = function(e) {
            return PersistencePromise.resolve()
          }),
          (e.prototype.getLastRemoteSnapshotVersion = function() {
            return this.lastRemoteSnapshotVersion
          }),
          (e.prototype.getHighestTargetId = function() {
            return this.highestTargetId
          }),
          (e.prototype.setLastRemoteSnapshotVersion = function(e, t) {
            return (
              (this.lastRemoteSnapshotVersion = t), PersistencePromise.resolve()
            )
          }),
          (e.prototype.saveQueryData = function(e) {
            this.queries.set(e.query, e)
            var t = e.targetId
            t > this.highestTargetId && (this.highestTargetId = t)
          }),
          (e.prototype.addQueryData = function(e, t) {
            return (
              assert(
                !this.queries.has(t.query),
                'Adding a query that already exists'
              ),
              this.saveQueryData(t),
              (this.targetCount += 1),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.updateQueryData = function(e, t) {
            return (
              assert(
                this.queries.has(t.query),
                'Updating a non-existent query'
              ),
              this.saveQueryData(t),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.removeQueryData = function(e, t) {
            return (
              assert(
                this.targetCount > 0,
                'Removing a target from an empty cache'
              ),
              assert(
                this.queries.has(t.query),
                'Removing a non-existent target from the cache'
              ),
              this.queries.delete(t.query),
              this.references.removeReferencesForId(t.targetId),
              (this.targetCount -= 1),
              PersistencePromise.resolve()
            )
          }),
          Object.defineProperty(e.prototype, 'count', {
            get: function() {
              return this.targetCount
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.getQueryData = function(e, t) {
            var n = this.queries.get(t) || null
            return PersistencePromise.resolve(n)
          }),
          (e.prototype.addMatchingKeys = function(e, t, n) {
            return (
              this.references.addReferences(t, n), PersistencePromise.resolve()
            )
          }),
          (e.prototype.removeMatchingKeys = function(e, t, n) {
            return (
              this.references.removeReferences(t, n),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.removeMatchingKeysForTargetId = function(e, t) {
            return (
              this.references.removeReferencesForId(t),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.getMatchingKeysForTargetId = function(e, t) {
            var n = this.references.referencesForId(t)
            return PersistencePromise.resolve(n)
          }),
          (e.prototype.setGarbageCollector = function(e) {
            this.references.setGarbageCollector(e)
          }),
          (e.prototype.containsKey = function(e, t) {
            return this.references.containsKey(e, t)
          }),
          e
        )
      })(),
      MemoryRemoteDocumentCache = (function() {
        function e() {
          this.docs = maybeDocumentMap()
        }
        return (
          (e.prototype.addEntry = function(e, t) {
            return (
              (this.docs = this.docs.insert(t.key, t)),
              PersistencePromise.resolve()
            )
          }),
          (e.prototype.removeEntry = function(e, t) {
            return (
              (this.docs = this.docs.remove(t)), PersistencePromise.resolve()
            )
          }),
          (e.prototype.getEntry = function(e, t) {
            return PersistencePromise.resolve(this.docs.get(t))
          }),
          (e.prototype.getDocumentsMatchingQuery = function(e, t) {
            for (
              var n = documentMap(),
                r = new DocumentKey(t.path.child('')),
                o = this.docs.getIteratorFrom(r);
              o.hasNext();

            ) {
              var i = o.getNext(),
                a = i.key,
                s = i.value
              if (!t.path.isPrefixOf(a.path)) break
              s instanceof Document && t.matches(s) && (n = n.insert(s.key, s))
            }
            return PersistencePromise.resolve(n)
          }),
          e
        )
      })(),
      LOG_TAG$5 = 'MemoryPersistence',
      MemoryPersistence = (function() {
        function e() {
          ;(this.mutationQueues = {}),
            (this.remoteDocumentCache = new MemoryRemoteDocumentCache()),
            (this.queryCache = new MemoryQueryCache()),
            (this.started = !1)
        }
        return (
          (e.prototype.start = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                return (
                  assert(!this.started, 'MemoryPersistence double-started!'),
                  (this.started = !0),
                  [2]
                )
              })
            })
          }),
          (e.prototype.shutdown = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                return (
                  assert(
                    this.started,
                    'MemoryPersistence shutdown without start!'
                  ),
                  (this.started = !1),
                  [2]
                )
              })
            })
          }),
          (e.prototype.getMutationQueue = function(e) {
            var t = this.mutationQueues[e.toKey()]
            return (
              t ||
                ((t = new MemoryMutationQueue()),
                (this.mutationQueues[e.toKey()] = t)),
              t
            )
          }),
          (e.prototype.getQueryCache = function() {
            return this.queryCache
          }),
          (e.prototype.getRemoteDocumentCache = function() {
            return this.remoteDocumentCache
          }),
          (e.prototype.runTransaction = function(e, t) {
            return (
              debug(LOG_TAG$5, 'Starting transaction:', e),
              t(new MemoryPersistenceTransaction()).toPromise()
            )
          }),
          e
        )
      })(),
      MemoryPersistenceTransaction = (function() {
        return function() {}
      })(),
      NoOpGarbageCollector = (function() {
        function e() {
          this.isEager = !1
        }
        return (
          (e.prototype.addGarbageSource = function(e) {}),
          (e.prototype.removeGarbageSource = function(e) {}),
          (e.prototype.addPotentialGarbageKey = function(e) {}),
          (e.prototype.collectGarbage = function(e) {
            return PersistencePromise.resolve(documentKeySet())
          }),
          e
        )
      })(),
      Deferred = (function() {
        return function() {
          var e = this
          this.promise = new Promise(function(t, n) {
            ;(e.resolve = t), (e.reject = n)
          })
        }
      })(),
      TimerId
    !(function(e) {
      ;(e.All = 'all'),
        (e.ListenStreamIdle = 'listen_stream_idle'),
        (e.ListenStreamConnectionBackoff = 'listen_stream_connection_backoff'),
        (e.WriteStreamIdle = 'write_stream_idle'),
        (e.WriteStreamConnectionBackoff = 'write_stream_connection_backoff'),
        (e.OnlineStateTimeout = 'online_state_timeout')
    })(TimerId || (TimerId = {}))
    var DelayedOperation = (function() {
        function e(e, t, n, r, o) {
          ;(this.asyncQueue = e),
            (this.timerId = t),
            (this.targetTimeMs = n),
            (this.op = r),
            (this.removalCallback = o),
            (this.deferred = new Deferred()),
            (this.then = this.deferred.promise.then.bind(
              this.deferred.promise
            )),
            (this.catch = this.deferred.promise.catch.bind(
              this.deferred.promise
            )),
            this.deferred.promise.catch(function(e) {})
        }
        return (
          (e.createAndSchedule = function(t, n, r, o, i) {
            var a = new e(t, n, Date.now() + r, o, i)
            return a.start(r), a
          }),
          (e.prototype.start = function(e) {
            var t = this
            this.timerHandle = setTimeout(function() {
              return t.handleDelayElapsed()
            }, e)
          }),
          (e.prototype.skipDelay = function() {
            return this.handleDelayElapsed()
          }),
          (e.prototype.cancel = function(e) {
            null !== this.timerHandle &&
              (this.clearTimeout(),
              this.deferred.reject(
                new FirestoreError(
                  Code.CANCELLED,
                  'Operation cancelled' + (e ? ': ' + e : '')
                )
              ))
          }),
          (e.prototype.handleDelayElapsed = function() {
            var e = this
            this.asyncQueue.enqueue(function() {
              return null !== e.timerHandle
                ? (e.clearTimeout(),
                  e.op().then(function(t) {
                    return e.deferred.resolve(t)
                  }))
                : Promise.resolve()
            })
          }),
          (e.prototype.clearTimeout = function() {
            null !== this.timerHandle &&
              (this.removalCallback(this),
              clearTimeout(this.timerHandle),
              (this.timerHandle = null))
          }),
          e
        )
      })(),
      AsyncQueue = (function() {
        function e() {
          ;(this.tail = Promise.resolve()),
            (this.delayedOperations = []),
            (this.operationInProgress = !1)
        }
        return (
          (e.prototype.enqueue = function(e) {
            var t = this
            this.verifyNotFailed()
            var n = this.tail.then(function() {
              return (
                (t.operationInProgress = !0),
                e()
                  .catch(function(e) {
                    ;(t.failure = e), (t.operationInProgress = !1)
                    var n = e.stack || e.message || ''
                    throw (error('INTERNAL UNHANDLED ERROR: ', n),
                    n.indexOf('Firestore Test Simulated Error') < 0 &&
                      setTimeout(function() {
                        throw e
                      }, 0),
                    e)
                  })
                  .then(function(e) {
                    return (t.operationInProgress = !1), e
                  })
              )
            })
            return (this.tail = n), n
          }),
          (e.prototype.enqueueAfterDelay = function(e, t, n) {
            var r = this
            this.verifyNotFailed(),
              assert(
                !this.containsDelayedOperation(e),
                'Attempted to schedule multiple operations with timer id ' +
                  e +
                  '.'
              )
            var o = DelayedOperation.createAndSchedule(this, e, t, n, function(
              e
            ) {
              return r.removeDelayedOperation(e)
            })
            return this.delayedOperations.push(o), o
          }),
          (e.prototype.verifyNotFailed = function() {
            this.failure &&
              fail(
                'AsyncQueue is already failed: ' +
                  (this.failure.stack || this.failure.message)
              )
          }),
          (e.prototype.verifyOperationInProgress = function() {
            assert(
              this.operationInProgress,
              'verifyOpInProgress() called when no op in progress on this queue.'
            )
          }),
          (e.prototype.drain = function() {
            return this.enqueue(function() {
              return Promise.resolve()
            })
          }),
          (e.prototype.containsDelayedOperation = function(e) {
            return (
              this.delayedOperations.findIndex(function(t) {
                return t.timerId === e
              }) >= 0
            )
          }),
          (e.prototype.runDelayedOperationsEarly = function(e) {
            var t = this
            return this.drain().then(function() {
              assert(
                e === TimerId.All || t.containsDelayedOperation(e),
                'Attempted to drain to missing operation ' + e
              ),
                t.delayedOperations.sort(function(e, t) {
                  return e.targetTimeMs - t.targetTimeMs
                })
              for (var n = 0, r = t.delayedOperations; n < r.length; n++) {
                var o = r[n]
                if ((o.skipDelay(), e !== TimerId.All && o.timerId === e)) break
              }
              return t.drain()
            })
          }),
          (e.prototype.removeDelayedOperation = function(e) {
            var t = this.delayedOperations.indexOf(e)
            assert(t >= 0, 'Delayed operation not found.'),
              this.delayedOperations.splice(t, 1)
          }),
          e
        )
      })(),
      LOG_TAG$6 = 'ExponentialBackoff',
      ExponentialBackoff = (function() {
        function e(e, t, n, r, o) {
          ;(this.queue = e),
            (this.timerId = t),
            (this.initialDelayMs = n),
            (this.backoffFactor = r),
            (this.maxDelayMs = o),
            (this.timerPromise = null),
            this.reset()
        }
        return (
          (e.prototype.reset = function() {
            this.currentBaseMs = 0
          }),
          (e.prototype.resetToMax = function() {
            this.currentBaseMs = this.maxDelayMs
          }),
          (e.prototype.backoffAndRun = function(e) {
            this.cancel()
            var t = this.currentBaseMs + this.jitterDelayMs()
            this.currentBaseMs > 0 &&
              debug(
                LOG_TAG$6,
                'Backing off for ' +
                  t +
                  ' ms (base delay: ' +
                  this.currentBaseMs +
                  ' ms)'
              ),
              (this.timerPromise = this.queue.enqueueAfterDelay(
                this.timerId,
                t,
                e
              )),
              (this.currentBaseMs *= this.backoffFactor),
              this.currentBaseMs < this.initialDelayMs &&
                (this.currentBaseMs = this.initialDelayMs),
              this.currentBaseMs > this.maxDelayMs &&
                (this.currentBaseMs = this.maxDelayMs)
          }),
          (e.prototype.cancel = function() {
            null !== this.timerPromise &&
              (this.timerPromise.cancel(), (this.timerPromise = null))
          }),
          (e.prototype.jitterDelayMs = function() {
            return (Math.random() - 0.5) * this.currentBaseMs
          }),
          e
        )
      })(),
      LOG_TAG$7 = 'PersistentStream',
      PersistentStreamState
    !(function(e) {
      ;(e[(e.Initial = 0)] = 'Initial'),
        (e[(e.Auth = 1)] = 'Auth'),
        (e[(e.Open = 2)] = 'Open'),
        (e[(e.Error = 3)] = 'Error'),
        (e[(e.Backoff = 4)] = 'Backoff'),
        (e[(e.Stopped = 5)] = 'Stopped')
    })(PersistentStreamState || (PersistentStreamState = {}))
    var BACKOFF_INITIAL_DELAY_MS = 1e3,
      BACKOFF_MAX_DELAY_MS = 6e4,
      BACKOFF_FACTOR = 1.5,
      IDLE_TIMEOUT_MS = 6e4,
      PersistentStream = (function() {
        function e(e, t, n, r, o) {
          ;(this.queue = e),
            (this.idleTimerId = n),
            (this.connection = r),
            (this.credentialsProvider = o),
            (this.inactivityTimerPromise = null),
            (this.stream = null),
            (this.listener = null),
            (this.backoff = new ExponentialBackoff(
              e,
              t,
              BACKOFF_INITIAL_DELAY_MS,
              BACKOFF_FACTOR,
              BACKOFF_MAX_DELAY_MS
            )),
            (this.state = PersistentStreamState.Initial)
        }
        return (
          (e.prototype.isStarted = function() {
            return (
              this.state === PersistentStreamState.Backoff ||
              this.state === PersistentStreamState.Auth ||
              this.state === PersistentStreamState.Open
            )
          }),
          (e.prototype.isOpen = function() {
            return this.state === PersistentStreamState.Open
          }),
          (e.prototype.start = function(e) {
            this.state !== PersistentStreamState.Error
              ? (assert(
                  this.state === PersistentStreamState.Initial,
                  'Already started'
                ),
                (this.listener = e),
                this.auth())
              : this.performBackoff(e)
          }),
          (e.prototype.stop = function() {
            this.isStarted() && this.close(PersistentStreamState.Stopped)
          }),
          (e.prototype.inhibitBackoff = function() {
            assert(
              !this.isStarted(),
              'Can only inhibit backoff in a stopped state'
            ),
              (this.state = PersistentStreamState.Initial),
              this.backoff.reset()
          }),
          (e.prototype.markIdle = function() {
            var e = this
            this.isOpen() &&
              null === this.inactivityTimerPromise &&
              (this.inactivityTimerPromise = this.queue.enqueueAfterDelay(
                this.idleTimerId,
                IDLE_TIMEOUT_MS,
                function() {
                  return e.handleIdleCloseTimer()
                }
              ))
          }),
          (e.prototype.sendRequest = function(e) {
            this.cancelIdleCheck(), this.stream.send(e)
          }),
          (e.prototype.handleIdleCloseTimer = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                return this.isOpen()
                  ? [2, this.close(PersistentStreamState.Initial)]
                  : [2]
              })
            })
          }),
          (e.prototype.cancelIdleCheck = function() {
            this.inactivityTimerPromise &&
              (this.inactivityTimerPromise.cancel(),
              (this.inactivityTimerPromise = null))
          }),
          (e.prototype.close = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
              var n
              return __generator(this, function(r) {
                return (
                  assert(
                    e === PersistentStreamState.Error || isNullOrUndefined(t),
                    "Can't provide an error when not in an error state."
                  ),
                  this.cancelIdleCheck(),
                  this.backoff.cancel(),
                  e !== PersistentStreamState.Error
                    ? this.backoff.reset()
                    : t &&
                      t.code === Code.RESOURCE_EXHAUSTED &&
                      (error(t.toString()),
                      error(
                        'Using maximum backoff delay to prevent overloading the backend.'
                      ),
                      this.backoff.resetToMax()),
                  null !== this.stream &&
                    (this.tearDown(),
                    this.stream.close(),
                    (this.stream = null)),
                  (this.state = e),
                  (n = this.listener),
                  (this.listener = null),
                  e !== PersistentStreamState.Stopped ? [2, n.onClose(t)] : [2]
                )
              })
            })
          }),
          (e.prototype.tearDown = function() {}),
          (e.prototype.auth = function() {
            var e = this
            assert(
              this.state === PersistentStreamState.Initial,
              'Must be in initial state to auth'
            ),
              (this.state = PersistentStreamState.Auth),
              this.credentialsProvider.getToken(!1).then(
                function(t) {
                  e.startStream(t)
                },
                function(t) {
                  e.queue.enqueue(function() {
                    return __awaiter(e, void 0, void 0, function() {
                      var e
                      return __generator(this, function(n) {
                        return this.state !== PersistentStreamState.Stopped
                          ? ((e = new FirestoreError(
                              Code.UNKNOWN,
                              'Fetching auth token failed: ' + t.message
                            )),
                            [2, this.handleStreamClose(e)])
                          : [2]
                      })
                    })
                  })
                }
              )
          }),
          (e.prototype.startStream = function(e) {
            var t = this
            if (this.state !== PersistentStreamState.Stopped) {
              assert(
                this.state === PersistentStreamState.Auth,
                'Trying to start stream in a non-auth state'
              )
              var n = function(e, n) {
                t.queue.enqueue(function() {
                  return __awaiter(t, void 0, void 0, function() {
                    return __generator(this, function(t) {
                      return this.stream === e ? [2, n()] : [2]
                    })
                  })
                })
              }
              if (null !== this.listener) {
                var r = this.startRpc(e)
                ;(this.stream = r),
                  this.stream.onOpen(function() {
                    n(r, function() {
                      return (
                        assert(
                          t.state === PersistentStreamState.Auth,
                          'Expected stream to be in state auth, but was ' +
                            t.state
                        ),
                        (t.state = PersistentStreamState.Open),
                        t.listener.onOpen()
                      )
                    })
                  }),
                  this.stream.onClose(function(e) {
                    n(r, function() {
                      return t.handleStreamClose(e)
                    })
                  }),
                  this.stream.onMessage(function(e) {
                    n(r, function() {
                      return t.onMessage(e)
                    })
                  })
              }
            }
          }),
          (e.prototype.performBackoff = function(e) {
            var t = this
            assert(
              this.state === PersistentStreamState.Error,
              'Should only perform backoff in an error case'
            ),
              (this.state = PersistentStreamState.Backoff),
              this.backoff.backoffAndRun(function() {
                return __awaiter(t, void 0, void 0, function() {
                  return __generator(this, function(t) {
                    return this.state === PersistentStreamState.Stopped
                      ? [2]
                      : ((this.state = PersistentStreamState.Initial),
                        this.start(e),
                        assert(
                          this.isStarted(),
                          'PersistentStream should have started'
                        ),
                        [2])
                  })
                })
              })
          }),
          (e.prototype.handleStreamClose = function(e) {
            return (
              assert(
                this.isStarted(),
                "Can't handle server close on non-started stream"
              ),
              debug(LOG_TAG$7, 'close with error: ' + e),
              (this.stream = null),
              this.close(PersistentStreamState.Error, e)
            )
          }),
          e
        )
      })(),
      PersistentListenStream = (function(e) {
        function t(t, n, r, o) {
          var i =
            e.call(
              this,
              t,
              TimerId.ListenStreamConnectionBackoff,
              TimerId.ListenStreamIdle,
              n,
              r
            ) || this
          return (i.serializer = o), i
        }
        return (
          __extends(t, e),
          (t.prototype.startRpc = function(e) {
            return this.connection.openStream('Listen', e)
          }),
          (t.prototype.onMessage = function(e) {
            this.backoff.reset()
            var t = this.serializer.fromWatchChange(e),
              n = this.serializer.versionFromListenResponse(e)
            return this.listener.onWatchChange(t, n)
          }),
          (t.prototype.watch = function(e) {
            var t = {}
            ;(t.database = this.serializer.encodedDatabaseId),
              (t.addTarget = this.serializer.toTarget(e))
            var n = this.serializer.toListenRequestLabels(e)
            n && (t.labels = n), this.sendRequest(t)
          }),
          (t.prototype.unwatch = function(e) {
            var t = {}
            ;(t.database = this.serializer.encodedDatabaseId),
              (t.removeTarget = e),
              this.sendRequest(t)
          }),
          t
        )
      })(PersistentStream),
      PersistentWriteStream = (function(e) {
        function t(t, n, r, o) {
          var i =
            e.call(
              this,
              t,
              TimerId.WriteStreamConnectionBackoff,
              TimerId.WriteStreamIdle,
              n,
              r
            ) || this
          return (i.serializer = o), (i.handshakeComplete_ = !1), i
        }
        return (
          __extends(t, e),
          Object.defineProperty(t.prototype, 'handshakeComplete', {
            get: function() {
              return this.handshakeComplete_
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.start = function(t) {
            ;(this.handshakeComplete_ = !1), e.prototype.start.call(this, t)
          }),
          (t.prototype.tearDown = function() {
            this.handshakeComplete_ && this.writeMutations([])
          }),
          (t.prototype.startRpc = function(e) {
            return this.connection.openStream('Write', e)
          }),
          (t.prototype.onMessage = function(e) {
            if (
              (assert(
                !!e.streamToken,
                'Got a write response without a stream token'
              ),
              (this.lastStreamToken = e.streamToken),
              this.handshakeComplete_)
            ) {
              this.backoff.reset()
              var t = this.serializer.fromWriteResults(e.writeResults),
                n = this.serializer.fromVersion(e.commitTime)
              return this.listener.onMutationResult(n, t)
            }
            return (
              assert(
                !e.writeResults || 0 === e.writeResults.length,
                'Got mutation results for handshake'
              ),
              (this.handshakeComplete_ = !0),
              this.listener.onHandshakeComplete()
            )
          }),
          (t.prototype.writeHandshake = function() {
            assert(
              this.isOpen(),
              'Writing handshake requires an opened stream'
            ),
              assert(!this.handshakeComplete_, 'Handshake already completed')
            var e = {}
            ;(e.database = this.serializer.encodedDatabaseId),
              this.sendRequest(e)
          }),
          (t.prototype.writeMutations = function(e) {
            var t = this
            assert(
              this.isOpen(),
              'Writing mutations requires an opened stream'
            ),
              assert(
                this.handshakeComplete_,
                'Handshake must be complete before writing mutations'
              ),
              assert(
                this.lastStreamToken.length > 0,
                'Trying to write mutation without a token'
              )
            var n = {
              streamToken: this.lastStreamToken,
              writes: e.map(function(e) {
                return t.serializer.toMutation(e)
              })
            }
            this.sendRequest(n)
          }),
          t
        )
      })(PersistentStream),
      Datastore = (function() {
        function e(e, t, n, r) {
          ;(this.queue = e),
            (this.connection = t),
            (this.credentials = n),
            (this.serializer = r)
        }
        return (
          (e.prototype.newPersistentWriteStream = function() {
            return new PersistentWriteStream(
              this.queue,
              this.connection,
              this.credentials,
              this.serializer
            )
          }),
          (e.prototype.newPersistentWatchStream = function() {
            return new PersistentListenStream(
              this.queue,
              this.connection,
              this.credentials,
              this.serializer
            )
          }),
          (e.prototype.commit = function(e) {
            var t = this,
              n = {
                database: this.serializer.encodedDatabaseId,
                writes: e.map(function(e) {
                  return t.serializer.toMutation(e)
                })
              }
            return this.invokeRPC('Commit', n).then(function(e) {
              return t.serializer.fromWriteResults(e.writeResults)
            })
          }),
          (e.prototype.lookup = function(e) {
            var t = this,
              n = {
                database: this.serializer.encodedDatabaseId,
                documents: e.map(function(e) {
                  return t.serializer.toName(e)
                })
              }
            return this.invokeStreamingRPC('BatchGetDocuments', n).then(
              function(n) {
                var r = maybeDocumentMap()
                n.forEach(function(e) {
                  var n = t.serializer.fromMaybeDocument(e)
                  r = r.insert(n.key, n)
                })
                var o = []
                return (
                  e.forEach(function(e) {
                    var t = r.get(e)
                    assert(!!t, 'Missing entity in write response for ' + e),
                      o.push(t)
                  }),
                  o
                )
              }
            )
          }),
          (e.prototype.invokeRPC = function(e, t) {
            var n = this
            return this.credentials.getToken(!1).then(function(r) {
              return n.connection.invokeRPC(e, t, r)
            })
          }),
          (e.prototype.invokeStreamingRPC = function(e, t) {
            var n = this
            return this.credentials.getToken(!1).then(function(r) {
              return n.connection.invokeStreamingRPC(e, t, r)
            })
          }),
          e
        )
      })(),
      Transaction = (function() {
        function e(e) {
          ;(this.datastore = e),
            (this.readVersions = documentVersionMap()),
            (this.mutations = []),
            (this.committed = !1)
        }
        return (
          (e.prototype.recordVersion = function(e) {
            var t = e.version
            e instanceof NoDocument && (t = SnapshotVersion.forDeletedDoc())
            var n = this.readVersions.get(e.key)
            if (null !== n) {
              if (!t.isEqual(n))
                throw new FirestoreError(
                  Code.ABORTED,
                  'Document version changed between two reads.'
                )
            } else this.readVersions = this.readVersions.insert(e.key, t)
          }),
          (e.prototype.lookup = function(e) {
            var t = this
            return this.committed
              ? Promise.reject('Transaction has already completed.')
              : this.mutations.length > 0
                ? Promise.reject(
                    'Transactions lookups are invalid after writes.'
                  )
                : this.datastore.lookup(e).then(function(e) {
                    return (
                      e.forEach(function(e) {
                        return t.recordVersion(e)
                      }),
                      e
                    )
                  })
          }),
          (e.prototype.write = function(e) {
            if (this.committed)
              throw new FirestoreError(
                Code.FAILED_PRECONDITION,
                'Transaction has already completed.'
              )
            this.mutations = this.mutations.concat(e)
          }),
          (e.prototype.precondition = function(e) {
            var t = this.readVersions.get(e)
            return t ? Precondition.updateTime(t) : Precondition.NONE
          }),
          (e.prototype.preconditionForUpdate = function(e) {
            var t = this.readVersions.get(e)
            if (t && t.isEqual(SnapshotVersion.forDeletedDoc()))
              throw new FirestoreError(
                Code.FAILED_PRECONDITION,
                "Can't update a document that doesn't exist."
              )
            return t ? Precondition.updateTime(t) : Precondition.exists(!0)
          }),
          (e.prototype.set = function(e, t) {
            this.write(t.toMutations(e, this.precondition(e)))
          }),
          (e.prototype.update = function(e, t) {
            this.write(t.toMutations(e, this.preconditionForUpdate(e)))
          }),
          (e.prototype.delete = function(e) {
            this.write([new DeleteMutation(e, this.precondition(e))]),
              (this.readVersions = this.readVersions.insert(
                e,
                SnapshotVersion.forDeletedDoc()
              ))
          }),
          (e.prototype.commit = function() {
            var e = this,
              t = this.readVersions
            return (
              this.mutations.forEach(function(e) {
                t = t.remove(e.key)
              }),
              t.isEmpty()
                ? this.datastore.commit(this.mutations).then(function() {
                    e.committed = !0
                  })
                : Promise.reject(
                    Error(
                      'Every document read in a transaction must also be written.'
                    )
                  )
            )
          }),
          e
        )
      })(),
      LOG_TAG$8 = 'OnlineStateTracker',
      MAX_WATCH_STREAM_FAILURES = 2,
      ONLINE_STATE_TIMEOUT_MS = 1e4,
      OnlineStateTracker = (function() {
        function e(e, t) {
          ;(this.asyncQueue = e),
            (this.onlineStateHandler = t),
            (this.state = OnlineState.Unknown),
            (this.watchStreamFailures = 0),
            (this.onlineStateTimer = null),
            (this.shouldWarnClientIsOffline = !0)
        }
        return (
          (e.prototype.handleWatchStreamStart = function() {
            var e = this
            0 === this.watchStreamFailures &&
              (this.setAndBroadcast(OnlineState.Unknown),
              assert(
                null === this.onlineStateTimer,
                "onlineStateTimer shouldn't be started yet"
              ),
              (this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay(
                TimerId.OnlineStateTimeout,
                ONLINE_STATE_TIMEOUT_MS,
                function() {
                  return (
                    (e.onlineStateTimer = null),
                    assert(
                      e.state === OnlineState.Unknown,
                      'Timer should be canceled if we transitioned to a different state.'
                    ),
                    debug(
                      LOG_TAG$8,
                      "Watch stream didn't reach online or offline within " +
                        ONLINE_STATE_TIMEOUT_MS +
                        'ms. Considering client offline.'
                    ),
                    e.logClientOfflineWarningIfNecessary(),
                    e.setAndBroadcast(OnlineState.Offline),
                    Promise.resolve()
                  )
                }
              )))
          }),
          (e.prototype.handleWatchStreamFailure = function() {
            this.state === OnlineState.Online
              ? (this.setAndBroadcast(OnlineState.Unknown),
                assert(
                  0 === this.watchStreamFailures,
                  'watchStreamFailures must be 0'
                ),
                assert(
                  null === this.onlineStateTimer,
                  'onlineStateTimer must be null'
                ))
              : (this.watchStreamFailures++,
                this.watchStreamFailures >= MAX_WATCH_STREAM_FAILURES &&
                  (this.clearOnlineStateTimer(),
                  this.logClientOfflineWarningIfNecessary(),
                  this.setAndBroadcast(OnlineState.Offline)))
          }),
          (e.prototype.set = function(e) {
            this.clearOnlineStateTimer(),
              (this.watchStreamFailures = 0),
              e === OnlineState.Online && (this.shouldWarnClientIsOffline = !1),
              this.setAndBroadcast(e)
          }),
          (e.prototype.setAndBroadcast = function(e) {
            e !== this.state && ((this.state = e), this.onlineStateHandler(e))
          }),
          (e.prototype.logClientOfflineWarningIfNecessary = function() {
            this.shouldWarnClientIsOffline &&
              (error('Could not reach Firestore backend.'),
              (this.shouldWarnClientIsOffline = !1))
          }),
          (e.prototype.clearOnlineStateTimer = function() {
            null !== this.onlineStateTimer &&
              (this.onlineStateTimer.cancel(), (this.onlineStateTimer = null))
          }),
          e
        )
      })(),
      LOG_TAG$9 = 'RemoteStore',
      MAX_PENDING_WRITES = 10,
      RemoteStore = (function() {
        function e(e, t, n, r) {
          ;(this.localStore = e),
            (this.datastore = t),
            (this.pendingWrites = []),
            (this.lastBatchSeen = BATCHID_UNKNOWN),
            (this.listenTargets = {}),
            (this.pendingTargetResponses = {}),
            (this.accumulatedWatchChanges = []),
            (this.watchStream = null),
            (this.writeStream = null),
            (this.onlineStateTracker = new OnlineStateTracker(n, r))
        }
        return (
          (e.prototype.start = function() {
            return this.enableNetwork()
          }),
          (e.prototype.isNetworkEnabled = function() {
            return (
              assert(
                (null == this.watchStream) == (null == this.writeStream),
                'WatchStream and WriteStream should both be null or non-null'
              ),
              null != this.watchStream
            )
          }),
          (e.prototype.enableNetwork = function() {
            var e = this
            return this.isNetworkEnabled()
              ? Promise.resolve()
              : ((this.watchStream = this.datastore.newPersistentWatchStream()),
                (this.writeStream = this.datastore.newPersistentWriteStream()),
                this.localStore.getLastStreamToken().then(function(t) {
                  return (
                    (e.writeStream.lastStreamToken = t),
                    e.shouldStartWatchStream()
                      ? e.startWatchStream()
                      : e.onlineStateTracker.set(OnlineState.Unknown),
                    e.fillWritePipeline()
                  )
                }))
          }),
          (e.prototype.disableNetwork = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                return (
                  this.disableNetworkInternal(),
                  this.onlineStateTracker.set(OnlineState.Offline),
                  [2]
                )
              })
            })
          }),
          (e.prototype.disableNetworkInternal = function() {
            this.isNetworkEnabled() &&
              (this.watchStream.stop(),
              this.writeStream.stop(),
              this.cleanUpWatchStreamState(),
              this.cleanUpWriteStreamState(),
              (this.writeStream = null),
              (this.watchStream = null))
          }),
          (e.prototype.shutdown = function() {
            return (
              debug(LOG_TAG$9, 'RemoteStore shutting down.'),
              this.disableNetworkInternal(),
              this.onlineStateTracker.set(OnlineState.Unknown),
              Promise.resolve()
            )
          }),
          (e.prototype.listen = function(e) {
            assert(
              !contains(this.listenTargets, e.targetId),
              'listen called with duplicate targetId!'
            ),
              (this.listenTargets[e.targetId] = e),
              this.shouldStartWatchStream()
                ? this.startWatchStream()
                : this.isNetworkEnabled() &&
                  this.watchStream.isOpen() &&
                  this.sendWatchRequest(e)
          }),
          (e.prototype.unlisten = function(e) {
            assert(
              contains(this.listenTargets, e),
              'unlisten called without assigned target ID!'
            ),
              delete this.listenTargets[e],
              this.isNetworkEnabled() &&
                this.watchStream.isOpen() &&
                (this.sendUnwatchRequest(e),
                isEmpty(this.listenTargets) && this.watchStream.markIdle())
          }),
          (e.prototype.sendWatchRequest = function(e) {
            this.recordPendingTargetRequest(e.targetId),
              this.watchStream.watch(e)
          }),
          (e.prototype.sendUnwatchRequest = function(e) {
            this.recordPendingTargetRequest(e), this.watchStream.unwatch(e)
          }),
          (e.prototype.recordPendingTargetRequest = function(e) {
            this.pendingTargetResponses[e] =
              (this.pendingTargetResponses[e] || 0) + 1
          }),
          (e.prototype.startWatchStream = function() {
            assert(
              this.shouldStartWatchStream(),
              'startWriteStream() called when shouldStartWatchStream() is false.'
            ),
              this.watchStream.start({
                onOpen: this.onWatchStreamOpen.bind(this),
                onClose: this.onWatchStreamClose.bind(this),
                onWatchChange: this.onWatchStreamChange.bind(this)
              }),
              this.onlineStateTracker.handleWatchStreamStart()
          }),
          (e.prototype.shouldStartWatchStream = function() {
            return (
              this.isNetworkEnabled() &&
              !this.watchStream.isStarted() &&
              !isEmpty(this.listenTargets)
            )
          }),
          (e.prototype.cleanUpWatchStreamState = function() {
            ;(this.accumulatedWatchChanges = []),
              (this.pendingTargetResponses = {})
          }),
          (e.prototype.onWatchStreamOpen = function() {
            return __awaiter(this, void 0, void 0, function() {
              var e = this
              return __generator(this, function(t) {
                return (
                  forEachNumber(this.listenTargets, function(t, n) {
                    e.sendWatchRequest(n)
                  }),
                  [2]
                )
              })
            })
          }),
          (e.prototype.onWatchStreamClose = function(e) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                return (
                  assert(
                    this.isNetworkEnabled(),
                    'onWatchStreamClose() should only be called when the network is enabled'
                  ),
                  this.cleanUpWatchStreamState(),
                  this.onlineStateTracker.handleWatchStreamFailure(),
                  this.shouldStartWatchStream()
                    ? this.startWatchStream()
                    : this.onlineStateTracker.set(OnlineState.Unknown),
                  [2]
                )
              })
            })
          }),
          (e.prototype.onWatchStreamChange = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
              var n
              return __generator(this, function(r) {
                return (
                  this.onlineStateTracker.set(OnlineState.Online),
                  e instanceof WatchTargetChange &&
                  e.state === WatchTargetChangeState.Removed &&
                  e.cause
                    ? [2, this.handleTargetError(e)]
                    : (this.accumulatedWatchChanges.push(e),
                      !t.isEqual(SnapshotVersion.MIN) &&
                      t.compareTo(
                        this.localStore.getLastRemoteSnapshotVersion()
                      ) >= 0
                        ? ((n = this.accumulatedWatchChanges),
                          (this.accumulatedWatchChanges = []),
                          [2, this.handleWatchChangeBatch(t, n)])
                        : [2])
                )
              })
            })
          }),
          (e.prototype.handleWatchChangeBatch = function(e, t) {
            var n = this,
              r = new WatchChangeAggregator(
                e,
                this.listenTargets,
                this.pendingTargetResponses
              )
            r.addChanges(t)
            var o = r.createRemoteEvent()
            this.pendingTargetResponses = r.pendingTargetResponses
            var i = []
            return (
              forEachNumber(r.existenceFilters, function(t, r) {
                var a = n.listenTargets[t]
                if (a) {
                  var s = a.query
                  if (s.isDocumentQuery())
                    if (0 === r.count) {
                      var u = new DocumentKey(s.path),
                        c = new NoDocument(u, e)
                      o.addDocumentUpdate(c)
                    } else
                      assert(
                        1 === r.count,
                        'Single document existence filter with count: ' +
                          r.count
                      )
                  else {
                    var h = n.localStore
                      .remoteDocumentKeys(t)
                      .then(function(e) {
                        if (o.targetChanges[t]) {
                          var i = o.targetChanges[t].mapping
                          null !== i &&
                            (i instanceof UpdateMapping
                              ? (e = i.applyToKeySet(e))
                              : (assert(
                                  i instanceof ResetMapping,
                                  'Expected either reset or update mapping but got something else: ' +
                                    i
                                ),
                                (e = i.documents)))
                        }
                        if (e.size !== r.count) {
                          o.handleExistenceFilterMismatch(t)
                          var u = new QueryData(s, t, a.purpose)
                          ;(n.listenTargets[t] = u), n.sendUnwatchRequest(t)
                          var c = new QueryData(
                            s,
                            t,
                            QueryPurpose.ExistenceFilterMismatch
                          )
                          n.sendWatchRequest(c)
                        }
                      })
                    i.push(h)
                  }
                }
              }),
              Promise.all(i).then(function() {
                return (
                  forEachNumber(o.targetChanges, function(e, t) {
                    if (t.resumeToken.length > 0) {
                      var r = n.listenTargets[e]
                      r &&
                        (n.listenTargets[e] = r.update({
                          resumeToken: t.resumeToken,
                          snapshotVersion: t.snapshotVersion
                        }))
                    }
                  }),
                  n.syncEngine.applyRemoteEvent(o)
                )
              })
            )
          }),
          (e.prototype.handleTargetError = function(e) {
            var t = this
            assert(!!e.cause, 'Handling target error without a cause')
            var n = e.cause,
              r = Promise.resolve()
            return (
              e.targetIds.forEach(function(e) {
                r = r.then(function() {
                  return __awaiter(t, void 0, void 0, function() {
                    return __generator(this, function(t) {
                      return contains(this.listenTargets, e)
                        ? (delete this.listenTargets[e],
                          [2, this.syncEngine.rejectListen(e, n)])
                        : [2]
                    })
                  })
                })
              }),
              r
            )
          }),
          (e.prototype.cleanUpWriteStreamState = function() {
            ;(this.lastBatchSeen = BATCHID_UNKNOWN),
              debug(
                LOG_TAG$9,
                'Stopping write stream with ' +
                  this.pendingWrites.length +
                  ' pending writes'
              ),
              (this.pendingWrites = [])
          }),
          (e.prototype.fillWritePipeline = function() {
            return __awaiter(this, void 0, void 0, function() {
              var e = this
              return __generator(this, function(t) {
                return this.canWriteMutations()
                  ? [
                      2,
                      this.localStore
                        .nextMutationBatch(this.lastBatchSeen)
                        .then(function(t) {
                          if (null !== t)
                            return e.commit(t), e.fillWritePipeline()
                          0 === e.pendingWrites.length &&
                            e.writeStream.markIdle()
                        })
                    ]
                  : [2]
              })
            })
          }),
          (e.prototype.canWriteMutations = function() {
            return (
              this.isNetworkEnabled() &&
              this.pendingWrites.length < MAX_PENDING_WRITES
            )
          }),
          (e.prototype.outstandingWrites = function() {
            return this.pendingWrites.length
          }),
          (e.prototype.commit = function(e) {
            assert(
              this.canWriteMutations(),
              "commit called when batches can't be written"
            ),
              (this.lastBatchSeen = e.batchId),
              this.pendingWrites.push(e),
              this.shouldStartWriteStream()
                ? this.startWriteStream()
                : this.isNetworkEnabled() &&
                  this.writeStream.handshakeComplete &&
                  this.writeStream.writeMutations(e.mutations)
          }),
          (e.prototype.shouldStartWriteStream = function() {
            return (
              this.isNetworkEnabled() &&
              !this.writeStream.isStarted() &&
              this.pendingWrites.length > 0
            )
          }),
          (e.prototype.startWriteStream = function() {
            assert(
              this.shouldStartWriteStream(),
              'startWriteStream() called when shouldStartWriteStream() is false.'
            ),
              this.writeStream.start({
                onOpen: this.onWriteStreamOpen.bind(this),
                onClose: this.onWriteStreamClose.bind(this),
                onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
                onMutationResult: this.onMutationResult.bind(this)
              })
          }),
          (e.prototype.onWriteStreamOpen = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                return this.writeStream.writeHandshake(), [2]
              })
            })
          }),
          (e.prototype.onWriteHandshakeComplete = function() {
            var e = this
            return this.localStore
              .setLastStreamToken(this.writeStream.lastStreamToken)
              .then(function() {
                for (var t = 0, n = e.pendingWrites; t < n.length; t++) {
                  var r = n[t]
                  e.writeStream.writeMutations(r.mutations)
                }
              })
          }),
          (e.prototype.onMutationResult = function(e, t) {
            var n = this
            assert(
              this.pendingWrites.length > 0,
              'Got result for empty pending writes'
            )
            var r = this.pendingWrites.shift(),
              o = MutationBatchResult.from(
                r,
                e,
                t,
                this.writeStream.lastStreamToken
              )
            return this.syncEngine.applySuccessfulWrite(o).then(function() {
              return n.fillWritePipeline()
            })
          }),
          (e.prototype.onWriteStreamClose = function(e) {
            return __awaiter(this, void 0, void 0, function() {
              var t = this
              return __generator(this, function(n) {
                return (
                  assert(
                    this.isNetworkEnabled(),
                    'onWriteStreamClose() should only be called when the network is enabled'
                  ),
                  e && this.pendingWrites.length > 0
                    ? (assert(
                        !!e,
                        'We have pending writes, but the write stream closed without an error'
                      ),
                      void 0,
                      [
                        2,
                        (this.writeStream.handshakeComplete
                          ? this.handleWriteError(e)
                          : this.handleHandshakeError(e)
                        ).then(function() {
                          t.shouldStartWriteStream() && t.startWriteStream()
                        })
                      ])
                    : [2]
                )
              })
            })
          }),
          (e.prototype.handleHandshakeError = function(e) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(t) {
                return isPermanentError(e.code) || e.code === Code.ABORTED
                  ? (debug(
                      LOG_TAG$9,
                      'RemoteStore error before completed handshake; resetting stream token: ',
                      this.writeStream.lastStreamToken
                    ),
                    (this.writeStream.lastStreamToken = emptyByteString()),
                    [2, this.localStore.setLastStreamToken(emptyByteString())])
                  : [2]
              })
            })
          }),
          (e.prototype.handleWriteError = function(e) {
            return __awaiter(this, void 0, void 0, function() {
              var t,
                n = this
              return __generator(this, function(r) {
                return isPermanentError(e.code)
                  ? ((t = this.pendingWrites.shift()),
                    this.writeStream.inhibitBackoff(),
                    [
                      2,
                      this.syncEngine
                        .rejectFailedWrite(t.batchId, e)
                        .then(function() {
                          return n.fillWritePipeline()
                        })
                    ])
                  : [2]
              })
            })
          }),
          (e.prototype.createTransaction = function() {
            return new Transaction(this.datastore)
          }),
          (e.prototype.handleUserChange = function(e) {
            if (
              (debug(LOG_TAG$9, 'RemoteStore changing users: uid=', e.uid),
              this.isNetworkEnabled())
            )
              return (
                this.disableNetworkInternal(),
                this.onlineStateTracker.set(OnlineState.Unknown),
                this.enableNetwork()
              )
          }),
          e
        )
      })(),
      LOG_TAG$10 = 'FirestoreClient',
      FirestoreClient = (function() {
        function e(e, t, n, r) {
          ;(this.platform = e),
            (this.databaseInfo = t),
            (this.credentials = n),
            (this.asyncQueue = r)
        }
        return (
          (e.prototype.start = function(e) {
            var t = this,
              n = new Deferred(),
              r = new Deferred(),
              o = !1
            return (
              this.credentials.setUserChangeListener(function(i) {
                o
                  ? t.asyncQueue.enqueue(function() {
                      return t.handleUserChange(i)
                    })
                  : ((o = !0),
                    t
                      .initializePersistence(e, r)
                      .then(function() {
                        return t.initializeRest(i)
                      })
                      .then(n.resolve, n.reject))
              }),
              this.asyncQueue.enqueue(function() {
                return n.promise
              }),
              r.promise
            )
          }),
          (e.prototype.enableNetwork = function() {
            var e = this
            return this.asyncQueue.enqueue(function() {
              return e.remoteStore.enableNetwork()
            })
          }),
          (e.prototype.initializePersistence = function(e, t) {
            var n = this
            return e
              ? this.startIndexedDbPersistence()
                  .then(t.resolve)
                  .catch(function(e) {
                    return (
                      t.reject(e),
                      n.canFallback(e)
                        ? (console.warn(
                            'Error enabling offline storage. Falling back to storage disabled: ' +
                              e
                          ),
                          n.startMemoryPersistence())
                        : Promise.reject(e)
                    )
                  })
              : (t.resolve(), this.startMemoryPersistence())
          }),
          (e.prototype.canFallback = function(e) {
            return (
              e.code === Code.FAILED_PRECONDITION ||
              e.code === Code.UNIMPLEMENTED
            )
          }),
          (e.prototype.startIndexedDbPersistence = function() {
            this.garbageCollector = new NoOpGarbageCollector()
            var e = IndexedDbPersistence.buildStoragePrefix(this.databaseInfo),
              t = new JsonProtoSerializer(this.databaseInfo.databaseId, {
                useProto3Json: !0
              })
            return (
              (this.persistence = new IndexedDbPersistence(e, t)),
              this.persistence.start()
            )
          }),
          (e.prototype.startMemoryPersistence = function() {
            return (
              (this.garbageCollector = new EagerGarbageCollector()),
              (this.persistence = new MemoryPersistence()),
              this.persistence.start()
            )
          }),
          (e.prototype.initializeRest = function(e) {
            var t = this
            return this.platform
              .loadConnection(this.databaseInfo)
              .then(function(n) {
                t.localStore = new LocalStore(
                  t.persistence,
                  e,
                  t.garbageCollector
                )
                var r = t.platform.newSerializer(t.databaseInfo.databaseId),
                  o = new Datastore(t.asyncQueue, n, t.credentials, r)
                return (
                  (t.remoteStore = new RemoteStore(
                    t.localStore,
                    o,
                    t.asyncQueue,
                    function(e) {
                      t.syncEngine.applyOnlineStateChange(e),
                        t.eventMgr.applyOnlineStateChange(e)
                    }
                  )),
                  (t.syncEngine = new SyncEngine(
                    t.localStore,
                    t.remoteStore,
                    e
                  )),
                  (t.remoteStore.syncEngine = t.syncEngine),
                  (t.eventMgr = new EventManager(t.syncEngine)),
                  t.localStore.start()
                )
              })
              .then(function() {
                return t.remoteStore.start()
              })
          }),
          (e.prototype.handleUserChange = function(e) {
            return (
              this.asyncQueue.verifyOperationInProgress(),
              debug(LOG_TAG$10, 'User Changed: ' + e.uid),
              this.syncEngine.handleUserChange(e)
            )
          }),
          (e.prototype.disableNetwork = function() {
            var e = this
            return this.asyncQueue.enqueue(function() {
              return e.remoteStore.disableNetwork()
            })
          }),
          (e.prototype.shutdown = function() {
            var e = this
            return this.asyncQueue
              .enqueue(function() {
                return (
                  e.credentials.removeUserChangeListener(),
                  e.remoteStore.shutdown()
                )
              })
              .then(function() {
                return e.persistence.shutdown()
              })
          }),
          (e.prototype.listen = function(e, t, n) {
            var r = this,
              o = new QueryListener(e, t, n)
            return (
              this.asyncQueue.enqueue(function() {
                return r.eventMgr.listen(o)
              }),
              o
            )
          }),
          (e.prototype.unlisten = function(e) {
            var t = this
            this.asyncQueue.enqueue(function() {
              return t.eventMgr.unlisten(e)
            })
          }),
          (e.prototype.getDocumentFromLocalCache = function(e) {
            var t = this
            return this.asyncQueue
              .enqueue(function() {
                return t.localStore.readDocument(e)
              })
              .then(function(e) {
                if (e instanceof Document) return e
                throw new FirestoreError(
                  Code.UNAVAILABLE,
                  "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                )
              })
          }),
          (e.prototype.getDocumentsFromLocalCache = function(e) {
            var t = this
            return this.asyncQueue
              .enqueue(function() {
                return t.localStore.executeQuery(e)
              })
              .then(function(t) {
                var n = documentKeySet(),
                  r = new View(e, n),
                  o = r.computeDocChanges(t)
                return r.applyChanges(o).snapshot
              })
          }),
          (e.prototype.write = function(e) {
            var t = this,
              n = new Deferred()
            return (
              this.asyncQueue.enqueue(function() {
                return t.syncEngine.write(e, n)
              }),
              n.promise
            )
          }),
          (e.prototype.databaseId = function() {
            return this.databaseInfo.databaseId
          }),
          (e.prototype.transaction = function(e) {
            var t = this
            return this.asyncQueue
              .enqueue(function() {
                return __awaiter(t, void 0, void 0, function() {
                  return __generator(this, function(e) {
                    return [2]
                  })
                })
              })
              .then(function() {
                return t.syncEngine.runTransaction(e)
              })
          }),
          e
        )
      })(),
      AsyncObserver = (function() {
        function e(e) {
          ;(this.observer = e), (this.muted = !1)
        }
        return (
          (e.prototype.next = function(e) {
            this.scheduleEvent(this.observer.next, e)
          }),
          (e.prototype.error = function(e) {
            this.scheduleEvent(this.observer.error, e)
          }),
          (e.prototype.mute = function() {
            this.muted = !0
          }),
          (e.prototype.scheduleEvent = function(e, t) {
            var n = this
            this.muted ||
              setTimeout(function() {
                n.muted || e(t)
              }, 0)
          }),
          e
        )
      })(),
      User = (function() {
        function e(e) {
          this.uid = e
        }
        return (
          (e.prototype.isAuthenticated = function() {
            return null != this.uid
          }),
          (e.prototype.toKey = function() {
            return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user'
          }),
          (e.prototype.isEqual = function(e) {
            return e.uid === this.uid
          }),
          (e.UNAUTHENTICATED = new e(null)),
          (e.GOOGLE_CREDENTIALS = new e('google-credentials-uid')),
          (e.FIRST_PARTY = new e('first-party-uid')),
          e
        )
      })(),
      OAuthToken = (function() {
        return function(e, t) {
          ;(this.user = t),
            (this.type = 'OAuth'),
            (this.authHeaders = {Authorization: 'Bearer ' + e})
        }
      })(),
      EmptyCredentialsProvider = (function() {
        function e() {
          this.userListener = null
        }
        return (
          (e.prototype.getToken = function(e) {
            return Promise.resolve(null)
          }),
          (e.prototype.setUserChangeListener = function(e) {
            assert(
              !this.userListener,
              'Can only call setUserChangeListener() once.'
            ),
              (this.userListener = e),
              e(User.UNAUTHENTICATED)
          }),
          (e.prototype.removeUserChangeListener = function() {
            assert(
              null !== this.userListener,
              'removeUserChangeListener() when no listener registered'
            ),
              (this.userListener = null)
          }),
          e
        )
      })(),
      FirebaseCredentialsProvider = (function() {
        function e(e) {
          var t = this
          ;(this.app = e),
            (this.tokenListener = null),
            (this.userCounter = 0),
            (this.userListener = null),
            (this.tokenListener = function() {
              var e = t.getUser()
              ;(t.currentUser && e.isEqual(t.currentUser)) ||
                ((t.currentUser = e),
                t.userCounter++,
                t.userListener && t.userListener(t.currentUser))
            }),
            (this.userCounter = 0),
            this.app.INTERNAL.addAuthTokenListener(this.tokenListener)
        }
        return (
          (e.prototype.getToken = function(e) {
            var t = this
            assert(
              null != this.tokenListener,
              'getToken cannot be called after listener removed.'
            )
            var n = this.userCounter
            return this.app.INTERNAL.getToken(e).then(function(e) {
              if (t.userCounter !== n)
                throw new FirestoreError(
                  Code.ABORTED,
                  'getToken aborted due to uid change.'
                )
              return e
                ? (assert(
                    'string' == typeof e.accessToken,
                    'Invalid tokenData returned from getToken():' + e
                  ),
                  new OAuthToken(e.accessToken, t.currentUser))
                : null
            })
          }),
          (e.prototype.setUserChangeListener = function(e) {
            assert(
              !this.userListener,
              'Can only call setUserChangeListener() once.'
            ),
              (this.userListener = e),
              this.currentUser && e(this.currentUser)
          }),
          (e.prototype.removeUserChangeListener = function() {
            assert(
              null != this.tokenListener,
              'removeUserChangeListener() called twice'
            ),
              assert(
                null !== this.userListener,
                'removeUserChangeListener() called when no listener registered'
              ),
              this.app.INTERNAL.removeAuthTokenListener(this.tokenListener),
              (this.tokenListener = null),
              (this.userListener = null)
          }),
          (e.prototype.getUser = function() {
            'function' != typeof this.app.INTERNAL.getUid &&
              fail(
                'This version of the Firestore SDK requires at least version 3.7.0 of firebase.js.'
              )
            var e = this.app.INTERNAL.getUid()
            return (
              assert(
                null === e || 'string' == typeof e,
                'Received invalid UID: ' + e
              ),
              new User(e)
            )
          }),
          e
        )
      })(),
      FirstPartyToken = (function() {
        function e(e, t) {
          ;(this.gapi = e),
            (this.sessionIndex = t),
            (this.type = 'FirstParty'),
            (this.user = User.FIRST_PARTY),
            assert(
              this.gapi &&
                this.gapi.auth &&
                this.gapi.auth.getAuthHeaderValueForFirstParty,
              'unexpected gapi interface'
            )
        }
        return (
          Object.defineProperty(e.prototype, 'authHeaders', {
            get: function() {
              return {
                Authorization: this.gapi.auth.getAuthHeaderValueForFirstParty(
                  []
                ),
                'X-Goog-AuthUser': this.sessionIndex
              }
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        )
      })(),
      FirstPartyCredentialsProvider = (function() {
        function e(e, t) {
          ;(this.gapi = e),
            (this.sessionIndex = t),
            assert(
              this.gapi &&
                this.gapi.auth &&
                this.gapi.auth.getAuthHeaderValueForFirstParty,
              'unexpected gapi interface'
            )
        }
        return (
          (e.prototype.getToken = function(e) {
            return Promise.resolve(
              new FirstPartyToken(this.gapi, this.sessionIndex)
            )
          }),
          (e.prototype.setUserChangeListener = function(e) {
            e(User.FIRST_PARTY)
          }),
          (e.prototype.removeUserChangeListener = function() {}),
          e
        )
      })()
    function makeCredentialsProvider(e) {
      if (!e) return new EmptyCredentialsProvider()
      switch (e.type) {
        case 'gapi':
          return new FirstPartyCredentialsProvider(
            e.client,
            e.sessionIndex || '0'
          )
        case 'provider':
          return e.client
        default:
          throw new FirestoreError(
            Code.INVALID_ARGUMENT,
            'makeCredentialsProvider failed due to invalid credential type'
          )
      }
    }
    function isPartialObserver(e) {
      return implementsAnyMethods(e, ['next', 'error', 'complete'])
    }
    function implementsAnyMethods(e, t) {
      if ('object' != typeof e || null === e) return !1
      for (var n = e, r = 0, o = t; r < o.length; r++) {
        var i = o[r]
        if (i in n && 'function' == typeof n[i]) return !0
      }
      return !1
    }
    var FieldValueImpl = (function() {
        function e(e) {
          this.methodName = e
        }
        return (
          (e.delete = function() {
            return DeleteFieldValueImpl.instance
          }),
          (e.serverTimestamp = function() {
            return ServerTimestampFieldValueImpl.instance
          }),
          (e.prototype.isEqual = function(e) {
            return this === e
          }),
          e
        )
      })(),
      DeleteFieldValueImpl = (function(e) {
        function t() {
          return e.call(this, 'FieldValue.delete()') || this
        }
        return __extends(t, e), (t.instance = new t()), t
      })(FieldValueImpl),
      ServerTimestampFieldValueImpl = (function(e) {
        function t() {
          return e.call(this, 'FieldValue.serverTimestamp()') || this
        }
        return __extends(t, e), (t.instance = new t()), t
      })(FieldValueImpl),
      PublicFieldValue = makeConstructorPrivate(
        FieldValueImpl,
        'Use FieldValue.<field>() instead.'
      ),
      RESERVED_FIELD_REGEX = /^__.*__$/,
      ParsedSetData = (function() {
        function e(e, t, n) {
          ;(this.data = e), (this.fieldMask = t), (this.fieldTransforms = n)
        }
        return (
          (e.prototype.toMutations = function(e, t) {
            var n = []
            return (
              null !== this.fieldMask
                ? n.push(new PatchMutation(e, this.data, this.fieldMask, t))
                : n.push(new SetMutation(e, this.data, t)),
              this.fieldTransforms.length > 0 &&
                n.push(new TransformMutation(e, this.fieldTransforms)),
              n
            )
          }),
          e
        )
      })(),
      ParsedUpdateData = (function() {
        function e(e, t, n) {
          ;(this.data = e), (this.fieldMask = t), (this.fieldTransforms = n)
        }
        return (
          (e.prototype.toMutations = function(e, t) {
            var n = [new PatchMutation(e, this.data, this.fieldMask, t)]
            return (
              this.fieldTransforms.length > 0 &&
                n.push(new TransformMutation(e, this.fieldTransforms)),
              n
            )
          }),
          e
        )
      })(),
      UserDataSource
    function isWrite(e) {
      switch (e) {
        case UserDataSource.Set:
        case UserDataSource.MergeSet:
        case UserDataSource.Update:
          return !0
        case UserDataSource.QueryValue:
          return !1
        default:
          throw fail('Unexpected case for UserDataSource: ' + e)
      }
    }
    !(function(e) {
      ;(e[(e.Set = 0)] = 'Set'),
        (e[(e.Update = 1)] = 'Update'),
        (e[(e.MergeSet = 2)] = 'MergeSet'),
        (e[(e.QueryValue = 3)] = 'QueryValue')
    })(UserDataSource || (UserDataSource = {}))
    var ParseContext = (function() {
        function e(e, t, n, r, o, i) {
          ;(this.dataSource = e),
            (this.methodName = t),
            (this.path = n),
            (this.arrayElement = r),
            void 0 === o && this.validatePath(),
            (this.arrayElement = void 0 !== r && r),
            (this.fieldTransforms = o || []),
            (this.fieldMask = i || [])
        }
        return (
          (e.prototype.childContextForField = function(t) {
            var n = null == this.path ? null : this.path.child(t),
              r = new e(
                this.dataSource,
                this.methodName,
                n,
                !1,
                this.fieldTransforms,
                this.fieldMask
              )
            return r.validatePathSegment(t), r
          }),
          (e.prototype.childContextForFieldPath = function(t) {
            var n = null == this.path ? null : this.path.child(t),
              r = new e(
                this.dataSource,
                this.methodName,
                n,
                !1,
                this.fieldTransforms,
                this.fieldMask
              )
            return r.validatePath(), r
          }),
          (e.prototype.childContextForArray = function(t) {
            return new e(
              this.dataSource,
              this.methodName,
              null,
              !0,
              this.fieldTransforms,
              this.fieldMask
            )
          }),
          (e.prototype.createError = function(e) {
            var t =
              null === this.path || this.path.isEmpty()
                ? ''
                : ' (found in field ' + this.path.toString() + ')'
            return new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Function ' +
                this.methodName +
                '() called with invalid data. ' +
                e +
                t
            )
          }),
          (e.prototype.validatePath = function() {
            if (null !== this.path)
              for (var e = 0; e < this.path.length; e++)
                this.validatePathSegment(this.path.get(e))
          }),
          (e.prototype.validatePathSegment = function(e) {
            if (isWrite(this.dataSource) && RESERVED_FIELD_REGEX.test(e))
              throw this.createError(
                'Document fields cannot begin and end with __'
              )
          }),
          e
        )
      })(),
      DocumentKeyReference = (function() {
        return function(e, t) {
          ;(this.databaseId = e), (this.key = t)
        }
      })(),
      UserDataConverter = (function() {
        function e(e) {
          this.preConverter = e
        }
        return (
          (e.prototype.parseSetData = function(e, t) {
            var n = new ParseContext(
              UserDataSource.Set,
              e,
              FieldPath.EMPTY_PATH
            )
            validatePlainObject('Data must be an object, but it was:', n, t)
            var r = this.parseData(t, n)
            return new ParsedSetData(r, null, n.fieldTransforms)
          }),
          (e.prototype.parseMergeData = function(e, t) {
            var n = new ParseContext(
              UserDataSource.MergeSet,
              e,
              FieldPath.EMPTY_PATH
            )
            validatePlainObject('Data must be an object, but it was:', n, t)
            var r = this.parseData(t, n),
              o = new FieldMask(n.fieldMask)
            return new ParsedSetData(r, o, n.fieldTransforms)
          }),
          (e.prototype.parseUpdateData = function(e, t) {
            var n = this,
              r = new ParseContext(
                UserDataSource.Update,
                e,
                FieldPath.EMPTY_PATH
              )
            validatePlainObject('Data must be an object, but it was:', r, t)
            var o = [],
              i = ObjectValue.EMPTY
            forEach(t, function(t, a) {
              var s = fieldPathFromDotSeparatedString(e, t),
                u = r.childContextForFieldPath(s)
              if ((a = n.runPreConverter(a, u)) instanceof DeleteFieldValueImpl)
                o.push(s)
              else {
                var c = n.parseData(a, u)
                null != c && (o.push(s), (i = i.set(s, c)))
              }
            })
            var a = new FieldMask(o)
            return new ParsedUpdateData(i, a, r.fieldTransforms)
          }),
          (e.prototype.parseUpdateVarargs = function(e, t, n, r) {
            var o = new ParseContext(
                UserDataSource.Update,
                e,
                FieldPath.EMPTY_PATH
              ),
              i = [fieldPathFromArgument(e, t)],
              a = [n]
            if (r.length % 2 != 0)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Function ' +
                  e +
                  '() needs to be called with an even number of arguments that alternate between field names and values.'
              )
            for (var s = 0; s < r.length; s += 2)
              i.push(fieldPathFromArgument(e, r[s])), a.push(r[s + 1])
            var u = [],
              c = ObjectValue.EMPTY
            for (s = 0; s < i.length; ++s) {
              var h = i[s],
                l = o.childContextForFieldPath(h),
                f = this.runPreConverter(a[s], l)
              if (f instanceof DeleteFieldValueImpl) u.push(h)
              else {
                var d = this.parseData(f, l)
                null != d && (u.push(h), (c = c.set(h, d)))
              }
            }
            var p = new FieldMask(u)
            return new ParsedUpdateData(c, p, o.fieldTransforms)
          }),
          (e.prototype.parseQueryValue = function(e, t) {
            var n = new ParseContext(
                UserDataSource.QueryValue,
                e,
                FieldPath.EMPTY_PATH
              ),
              r = this.parseData(t, n)
            return (
              assert(null != r, 'Parsed data should not be null.'),
              assert(
                0 === n.fieldTransforms.length,
                'Field transforms should have been disallowed.'
              ),
              r
            )
          }),
          (e.prototype.runPreConverter = function(e, t) {
            try {
              return this.preConverter(e)
            } catch (e) {
              var n = errorMessage(e)
              throw t.createError(n)
            }
          }),
          (e.prototype.parseData = function(e, t) {
            if (looksLikeJsonObject((e = this.runPreConverter(e, t))))
              return (
                validatePlainObject('Unsupported field value:', t, e),
                this.parseObject(e, t)
              )
            if ((t.path && t.fieldMask.push(t.path), e instanceof Array)) {
              if (t.arrayElement)
                throw t.createError('Nested arrays are not supported')
              return this.parseArray(e, t)
            }
            return e instanceof FieldValueImpl
              ? (this.parseSentinelFieldValue(e, t), null)
              : this.parseScalarValue(e, t)
          }),
          (e.prototype.parseObject = function(e, t) {
            var n = this,
              r = new SortedMap(primitiveComparator)
            return (
              forEach(e, function(e, o) {
                var i = n.parseData(o, t.childContextForField(e))
                null != i && (r = r.insert(e, i))
              }),
              new ObjectValue(r)
            )
          }),
          (e.prototype.parseArray = function(e, t) {
            for (var n = [], r = 0, o = 0, i = e; o < i.length; o++) {
              var a = i[o],
                s = this.parseData(a, t.childContextForArray(r))
              null == s && (s = NullValue.INSTANCE), n.push(s), r++
            }
            return new ArrayValue(n)
          }),
          (e.prototype.parseSentinelFieldValue = function(e, t) {
            if (!isWrite(t.dataSource))
              throw t.createError(
                e.methodName + ' can only be used with update() and set()'
              )
            if (null === t.path)
              throw t.createError(
                e.methodName + ' is not currently supported inside arrays'
              )
            if (e instanceof DeleteFieldValueImpl) {
              if (t.dataSource !== UserDataSource.MergeSet)
                throw t.dataSource === UserDataSource.Update
                  ? (assert(
                      t.path.length > 0,
                      'FieldValue.delete() at the top level should have already been handled.'
                    ),
                    t.createError(
                      'FieldValue.delete() can only appear at the top level of your update data'
                    ))
                  : t.createError(
                      'FieldValue.delete() cannot be used with set() unless you pass {merge:true}'
                    )
            } else
              e instanceof ServerTimestampFieldValueImpl
                ? t.fieldTransforms.push(
                    new FieldTransform(
                      t.path,
                      ServerTimestampTransform.instance
                    )
                  )
                : fail('Unknown FieldValue type: ' + e)
          }),
          (e.prototype.parseScalarValue = function(e, t) {
            if (null === e) return NullValue.INSTANCE
            if ('number' == typeof e)
              return isSafeInteger(e) ? new IntegerValue(e) : new DoubleValue(e)
            if ('boolean' == typeof e) return BooleanValue.of(e)
            if ('string' == typeof e) return new StringValue(e)
            if (e instanceof Date)
              return new TimestampValue(Timestamp.fromDate(e))
            if (e instanceof Timestamp)
              return new TimestampValue(
                new Timestamp(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3))
              )
            if (e instanceof GeoPoint) return new GeoPointValue(e)
            if (e instanceof Blob) return new BlobValue(e)
            if (e instanceof DocumentKeyReference)
              return new RefValue(e.databaseId, e.key)
            throw t.createError(
              'Unsupported field value: ' + valueDescription(e)
            )
          }),
          e
        )
      })()
    function looksLikeJsonObject(e) {
      return !(
        'object' != typeof e ||
        null === e ||
        e instanceof Array ||
        e instanceof Date ||
        e instanceof Timestamp ||
        e instanceof GeoPoint ||
        e instanceof Blob ||
        e instanceof DocumentKeyReference ||
        e instanceof FieldValueImpl
      )
    }
    function validatePlainObject(e, t, n) {
      if (!looksLikeJsonObject(n) || !isPlainObject(n)) {
        var r = valueDescription(n)
        throw 'an object' === r
          ? t.createError(e + ' a custom object')
          : t.createError(e + ' ' + r)
      }
    }
    function fieldPathFromArgument(e, t) {
      if (t instanceof FieldPath$1) return t._internalPath
      if ('string' == typeof t) return fieldPathFromDotSeparatedString(e, t)
      throw new FirestoreError(
        Code.INVALID_ARGUMENT,
        'Function ' +
          e +
          '() called with invalid data. Field path arguments must be of type string or FieldPath.'
      )
    }
    function fieldPathFromDotSeparatedString(e, t) {
      try {
        return fromDotSeparatedString(t)._internalPath
      } catch (t) {
        var n = errorMessage(t)
        throw new FirestoreError(
          Code.INVALID_ARGUMENT,
          'Function ' + e + '() called with invalid data. ' + n
        )
      }
    }
    function errorMessage(e) {
      return e instanceof Error ? e.message : e.toString()
    }
    var DEFAULT_HOST = 'firestore.googleapis.com',
      DEFAULT_SSL = !0,
      DEFAULT_TIMESTAMPS_IN_SNAPSHOTS = !1,
      FirestoreSettings = (function() {
        function e(e) {
          if (void 0 === e.host) {
            if (void 0 !== e.ssl)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                "Can't provide ssl option if host option is not set"
              )
            ;(this.host = DEFAULT_HOST), (this.ssl = DEFAULT_SSL)
          } else
            validateNamedType('settings', 'string', 'host', e.host),
              (this.host = e.host),
              validateNamedOptionalType('settings', 'boolean', 'ssl', e.ssl),
              (this.ssl = defaulted(e.ssl, DEFAULT_SSL))
          validateOptionNames('settings', e, [
            'host',
            'ssl',
            'credentials',
            'timestampsInSnapshots'
          ]),
            validateNamedOptionalType(
              'settings',
              'object',
              'credentials',
              e.credentials
            ),
            (this.credentials = e.credentials),
            validateNamedOptionalType(
              'settings',
              'boolean',
              'timestampsInSnapshots',
              e.timestampsInSnapshots
            ),
            (this.timestampsInSnapshots = defaulted(
              e.timestampsInSnapshots,
              DEFAULT_TIMESTAMPS_IN_SNAPSHOTS
            ))
        }
        return (
          (e.prototype.isEqual = function(e) {
            return (
              this.host === e.host &&
              this.ssl === e.ssl &&
              this.timestampsInSnapshots === e.timestampsInSnapshots &&
              this.credentials === e.credentials
            )
          }),
          e
        )
      })(),
      FirestoreConfig = (function() {
        return function() {}
      })(),
      Firestore = (function() {
        function e(t) {
          var n = this
          ;(this._queue = new AsyncQueue()),
            (this.INTERNAL = {
              delete: function() {
                return __awaiter(n, void 0, void 0, function() {
                  return __generator(this, function(e) {
                    return this._firestoreClient
                      ? [2, this._firestoreClient.shutdown()]
                      : [2]
                  })
                })
              }
            })
          var r = new FirestoreConfig()
          if ('object' == typeof t.options) {
            var o = t
            ;(r.firebaseApp = o),
              (r.databaseId = e.databaseIdFromApp(o)),
              (r.persistenceKey = r.firebaseApp.name),
              (r.credentials = new FirebaseCredentialsProvider(o))
          } else {
            var i = t
            if (!i.projectId)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Must provide projectId'
              )
            ;(r.databaseId = new DatabaseId(i.projectId, i.database)),
              (r.persistenceKey = '[DEFAULT]'),
              (r.credentials = new EmptyCredentialsProvider())
          }
          ;(r.settings = new FirestoreSettings({})),
            (this._config = r),
            (this._databaseId = r.databaseId)
        }
        return (
          (e.prototype.settings = function(e) {
            if (
              (validateExactNumberOfArgs('Firestore.settings', arguments, 1),
              validateArgType('Firestore.settings', 'object', 1, e),
              contains(e, 'persistence'))
            )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                '"persistence" is now specified with a separate call to firestore.enablePersistence().'
              )
            var t = new FirestoreSettings(e)
            if (this._firestoreClient && !this._config.settings.isEqual(t))
              throw new FirestoreError(
                Code.FAILED_PRECONDITION,
                'Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.'
              )
            ;(this._config.settings = t),
              void 0 !== t.credentials &&
                (this._config.credentials = makeCredentialsProvider(
                  t.credentials
                ))
          }),
          (e.prototype.enableNetwork = function() {
            return (
              this.ensureClientConfigured(),
              this._firestoreClient.enableNetwork()
            )
          }),
          (e.prototype.disableNetwork = function() {
            return (
              this.ensureClientConfigured(),
              this._firestoreClient.disableNetwork()
            )
          }),
          (e.prototype.enablePersistence = function() {
            if (this._firestoreClient)
              throw new FirestoreError(
                Code.FAILED_PRECONDITION,
                'Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.'
              )
            return this.configureClient(!0)
          }),
          (e.prototype.ensureClientConfigured = function() {
            return (
              this._firestoreClient || this.configureClient(!1),
              this._firestoreClient
            )
          }),
          (e.prototype.configureClient = function(e) {
            var t = this
            assert(
              !!this._config.settings.host,
              'FirestoreSettings.host cannot be falsey'
            ),
              this._config.settings.timestampsInSnapshots ||
                error(
                  "\nThe behavior for Date objects stored in Firestore is going to change\nAND YOUR APP MAY BREAK.\nTo hide this warning and ensure your app does not break, you need to add the\nfollowing code to your app before calling any other Cloud Firestore methods:\n\n  const firestore = firebase.firestore();\n  const settings = {/* your settings... */ timestampsInSnapshots: true};\n  firestore.settings(settings);\n\nWith this change, timestamps stored in Cloud Firestore will be read back as\nFirebase Timestamp objects instead of as system Date objects. So you will also\nneed to update code expecting a Date to instead expect a Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at');\n  const date = timestamp.toDate();\n\nPlease audit all existing usages of Date when you enable the new behavior. In a\nfuture release, the behavior will change to the new behavior, so if you do not\nfollow these steps, YOUR APP MAY BREAK."
                ),
              assert(
                !this._firestoreClient,
                'configureClient() called multiple times'
              )
            var n = new DatabaseInfo(
              this._config.databaseId,
              this._config.persistenceKey,
              this._config.settings.host,
              this._config.settings.ssl
            )
            return (
              (this._dataConverter = new UserDataConverter(function(e) {
                if (e instanceof DocumentReference) {
                  var n = t._config.databaseId,
                    r = e.firestore._config.databaseId
                  if (!r.isEqual(n))
                    throw new FirestoreError(
                      Code.INVALID_ARGUMENT,
                      'Document reference is for database ' +
                        r.projectId +
                        '/' +
                        r.database +
                        ' but should be for database ' +
                        n.projectId +
                        '/' +
                        n.database
                    )
                  return new DocumentKeyReference(t._config.databaseId, e._key)
                }
                return e
              })),
              (this._firestoreClient = new FirestoreClient(
                PlatformSupport.getPlatform(),
                n,
                this._config.credentials,
                this._queue
              )),
              this._firestoreClient.start(e)
            )
          }),
          (e.databaseIdFromApp = function(e) {
            var t = e.options
            if (!contains(t, 'projectId')) {
              if (contains(t, 'firestoreId'))
                throw new FirestoreError(
                  Code.INVALID_ARGUMENT,
                  '"firestoreId" is now specified as "projectId" in firebase.initializeApp.'
                )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                '"projectId" not provided in firebase.initializeApp.'
              )
            }
            if (contains(t, 'firestoreOptions'))
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                '"firestoreOptions" values are now specified with Firestore.settings()'
              )
            var n = t.projectId
            if (!n || 'string' != typeof n)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'projectId must be a string in FirebaseApp.options'
              )
            return new DatabaseId(n)
          }),
          Object.defineProperty(e.prototype, 'app', {
            get: function() {
              if (!this._config.firebaseApp)
                throw new FirestoreError(
                  Code.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                )
              return this._config.firebaseApp
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.collection = function(e) {
            if (
              (validateExactNumberOfArgs('Firestore.collection', arguments, 1),
              validateArgType('Firestore.collection', 'string', 1, e),
              !e)
            )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Must provide a non-empty collection path to collection()'
              )
            return (
              this.ensureClientConfigured(),
              new CollectionReference(ResourcePath.fromString(e), this)
            )
          }),
          (e.prototype.doc = function(e) {
            if (
              (validateExactNumberOfArgs('Firestore.doc', arguments, 1),
              validateArgType('Firestore.doc', 'string', 1, e),
              !e)
            )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Must provide a non-empty document path to doc()'
              )
            return (
              this.ensureClientConfigured(),
              DocumentReference.forPath(ResourcePath.fromString(e), this)
            )
          }),
          (e.prototype.runTransaction = function(e) {
            var t = this
            return (
              validateExactNumberOfArgs(
                'Firestore.runTransaction',
                arguments,
                1
              ),
              validateArgType('Firestore.runTransaction', 'function', 1, e),
              this.ensureClientConfigured().transaction(function(n) {
                return e(new Transaction$1(t, n))
              })
            )
          }),
          (e.prototype.batch = function() {
            return this.ensureClientConfigured(), new WriteBatch(this)
          }),
          Object.defineProperty(e, 'logLevel', {
            get: function() {
              switch (getLogLevel()) {
                case LogLevel$1.DEBUG:
                  return 'debug'
                case LogLevel$1.ERROR:
                  return 'error'
                case LogLevel$1.SILENT:
                  return 'silent'
                default:
                  return fail('Unknown log level: ' + getLogLevel())
              }
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.setLogLevel = function(e) {
            switch ((validateExactNumberOfArgs(
              'Firestore.setLogLevel',
              arguments,
              1
            ),
            validateArgType('Firestore.setLogLevel', 'string', 1, e),
            e)) {
              case 'debug':
                setLogLevel$1(LogLevel$1.DEBUG)
                break
              case 'error':
                setLogLevel$1(LogLevel$1.ERROR)
                break
              case 'silent':
                setLogLevel$1(LogLevel$1.SILENT)
                break
              default:
                throw new FirestoreError(
                  Code.INVALID_ARGUMENT,
                  'Invalid log level: ' + e
                )
            }
          }),
          (e.prototype._areTimestampsInSnapshotsEnabled = function() {
            return this._config.settings.timestampsInSnapshots
          }),
          e
        )
      })(),
      Transaction$1 = (function() {
        function e(e, t) {
          ;(this._firestore = e), (this._transaction = t)
        }
        return (
          (e.prototype.get = function(e) {
            var t = this
            validateExactNumberOfArgs('Transaction.get', arguments, 1)
            var n = validateReference('Transaction.get', e, this._firestore)
            return this._transaction.lookup([n._key]).then(function(e) {
              if (!e || 1 !== e.length)
                return fail('Mismatch in docs returned from document lookup.')
              var r = e[0]
              return new DocumentSnapshot(
                t._firestore,
                n._key,
                r instanceof NoDocument ? null : r,
                !1
              )
            })
          }),
          (e.prototype.set = function(e, t, n) {
            validateBetweenNumberOfArgs('Transaction.set', arguments, 2, 3)
            var r = validateReference('Transaction.set', e, this._firestore),
              o = (n = validateSetOptions('Transaction.set', n)).merge
                ? this._firestore._dataConverter.parseMergeData(
                    'Transaction.set',
                    t
                  )
                : this._firestore._dataConverter.parseSetData(
                    'Transaction.set',
                    t
                  )
            return this._transaction.set(r._key, o), this
          }),
          (e.prototype.update = function(e, t, n) {
            for (var r, o, i = [], a = 3; a < arguments.length; a++)
              i[a - 3] = arguments[a]
            return (
              'string' == typeof t || t instanceof FieldPath$1
                ? (validateAtLeastNumberOfArgs(
                    'Transaction.update',
                    arguments,
                    3
                  ),
                  (r = validateReference(
                    'Transaction.update',
                    e,
                    this._firestore
                  )),
                  (o = this._firestore._dataConverter.parseUpdateVarargs(
                    'Transaction.update',
                    t,
                    n,
                    i
                  )))
                : (validateExactNumberOfArgs(
                    'Transaction.update',
                    arguments,
                    2
                  ),
                  (r = validateReference(
                    'Transaction.update',
                    e,
                    this._firestore
                  )),
                  (o = this._firestore._dataConverter.parseUpdateData(
                    'Transaction.update',
                    t
                  ))),
              this._transaction.update(r._key, o),
              this
            )
          }),
          (e.prototype.delete = function(e) {
            validateExactNumberOfArgs('Transaction.delete', arguments, 1)
            var t = validateReference('Transaction.delete', e, this._firestore)
            return this._transaction.delete(t._key), this
          }),
          e
        )
      })(),
      WriteBatch = (function() {
        function e(e) {
          ;(this._firestore = e), (this._mutations = []), (this._committed = !1)
        }
        return (
          (e.prototype.set = function(e, t, n) {
            validateBetweenNumberOfArgs('WriteBatch.set', arguments, 2, 3),
              this.verifyNotCommitted()
            var r = validateReference('WriteBatch.set', e, this._firestore),
              o = (n = validateSetOptions('WriteBatch.set', n)).merge
                ? this._firestore._dataConverter.parseMergeData(
                    'WriteBatch.set',
                    t
                  )
                : this._firestore._dataConverter.parseSetData(
                    'WriteBatch.set',
                    t
                  )
            return (
              (this._mutations = this._mutations.concat(
                o.toMutations(r._key, Precondition.NONE)
              )),
              this
            )
          }),
          (e.prototype.update = function(e, t, n) {
            for (var r, o, i = [], a = 3; a < arguments.length; a++)
              i[a - 3] = arguments[a]
            return (
              this.verifyNotCommitted(),
              'string' == typeof t || t instanceof FieldPath$1
                ? (validateAtLeastNumberOfArgs(
                    'WriteBatch.update',
                    arguments,
                    3
                  ),
                  (r = validateReference(
                    'WriteBatch.update',
                    e,
                    this._firestore
                  )),
                  (o = this._firestore._dataConverter.parseUpdateVarargs(
                    'WriteBatch.update',
                    t,
                    n,
                    i
                  )))
                : (validateExactNumberOfArgs('WriteBatch.update', arguments, 2),
                  (r = validateReference(
                    'WriteBatch.update',
                    e,
                    this._firestore
                  )),
                  (o = this._firestore._dataConverter.parseUpdateData(
                    'WriteBatch.update',
                    t
                  ))),
              (this._mutations = this._mutations.concat(
                o.toMutations(r._key, Precondition.exists(!0))
              )),
              this
            )
          }),
          (e.prototype.delete = function(e) {
            validateExactNumberOfArgs('WriteBatch.delete', arguments, 1),
              this.verifyNotCommitted()
            var t = validateReference('WriteBatch.delete', e, this._firestore)
            return (
              (this._mutations = this._mutations.concat(
                new DeleteMutation(t._key, Precondition.NONE)
              )),
              this
            )
          }),
          (e.prototype.commit = function() {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(e) {
                return (
                  this.verifyNotCommitted(),
                  (this._committed = !0),
                  this._mutations.length > 0
                    ? [
                        2,
                        this._firestore
                          .ensureClientConfigured()
                          .write(this._mutations)
                      ]
                    : [2]
                )
              })
            })
          }),
          (e.prototype.verifyNotCommitted = function() {
            if (this._committed)
              throw new FirestoreError(
                Code.FAILED_PRECONDITION,
                'A write batch can no longer be used after commit() has been called.'
              )
          }),
          e
        )
      })(),
      DocumentReference = (function() {
        function e(e, t) {
          ;(this._key = e),
            (this.firestore = t),
            (this._firestoreClient = this.firestore.ensureClientConfigured())
        }
        return (
          (e.forPath = function(t, n) {
            if (t.length % 2 != 0)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Invalid document reference. Document references must have an even number of segments, but ' +
                  t.canonicalString() +
                  ' has ' +
                  t.length
              )
            return new e(new DocumentKey(t), n)
          }),
          Object.defineProperty(e.prototype, 'id', {
            get: function() {
              return this._key.path.lastSegment()
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'parent', {
            get: function() {
              return new CollectionReference(
                this._key.path.popLast(),
                this.firestore
              )
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'path', {
            get: function() {
              return this._key.path.canonicalString()
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.collection = function(e) {
            if (
              (validateExactNumberOfArgs(
                'DocumentReference.collection',
                arguments,
                1
              ),
              validateArgType('DocumentReference.collection', 'string', 1, e),
              !e)
            )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Must provide a non-empty collection name to collection()'
              )
            var t = ResourcePath.fromString(e)
            return new CollectionReference(
              this._key.path.child(t),
              this.firestore
            )
          }),
          (e.prototype.isEqual = function(t) {
            if (!(t instanceof e))
              throw invalidClassError('isEqual', 'DocumentReference', 1, t)
            return this.firestore === t.firestore && this._key.isEqual(t._key)
          }),
          (e.prototype.set = function(e, t) {
            validateBetweenNumberOfArgs(
              'DocumentReference.set',
              arguments,
              1,
              2
            )
            var n = (t = validateSetOptions('DocumentReference.set', t)).merge
              ? this.firestore._dataConverter.parseMergeData(
                  'DocumentReference.set',
                  e
                )
              : this.firestore._dataConverter.parseSetData(
                  'DocumentReference.set',
                  e
                )
            return this._firestoreClient.write(
              n.toMutations(this._key, Precondition.NONE)
            )
          }),
          (e.prototype.update = function(e, t) {
            for (var n, r = [], o = 2; o < arguments.length; o++)
              r[o - 2] = arguments[o]
            return (
              'string' == typeof e || e instanceof FieldPath$1
                ? (validateAtLeastNumberOfArgs(
                    'DocumentReference.update',
                    arguments,
                    2
                  ),
                  (n = this.firestore._dataConverter.parseUpdateVarargs(
                    'DocumentReference.update',
                    e,
                    t,
                    r
                  )))
                : (validateExactNumberOfArgs(
                    'DocumentReference.update',
                    arguments,
                    1
                  ),
                  (n = this.firestore._dataConverter.parseUpdateData(
                    'DocumentReference.update',
                    e
                  ))),
              this._firestoreClient.write(
                n.toMutations(this._key, Precondition.exists(!0))
              )
            )
          }),
          (e.prototype.delete = function() {
            return (
              validateExactNumberOfArgs(
                'DocumentReference.delete',
                arguments,
                0
              ),
              this._firestoreClient.write([
                new DeleteMutation(this._key, Precondition.NONE)
              ])
            )
          }),
          (e.prototype.onSnapshot = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            validateBetweenNumberOfArgs(
              'DocumentReference.onSnapshot',
              arguments,
              1,
              4
            )
            var n,
              r = {includeMetadataChanges: !1},
              o = 0
            'object' != typeof e[o] ||
              isPartialObserver(e[o]) ||
              (validateOptionNames('DocumentReference.onSnapshot', (r = e[o]), [
                'includeMetadataChanges'
              ]),
              validateNamedOptionalType(
                'DocumentReference.onSnapshot',
                'boolean',
                'includeMetadataChanges',
                r.includeMetadataChanges
              ),
              o++)
            var i = {
              includeDocumentMetadataChanges: r.includeMetadataChanges,
              includeQueryMetadataChanges: r.includeMetadataChanges
            }
            return (
              isPartialObserver(e[o])
                ? (n = e[o])
                : (validateArgType(
                    'DocumentReference.onSnapshot',
                    'function',
                    o,
                    e[o]
                  ),
                  validateOptionalArgType(
                    'DocumentReference.onSnapshot',
                    'function',
                    o + 1,
                    e[o + 1]
                  ),
                  validateOptionalArgType(
                    'DocumentReference.onSnapshot',
                    'function',
                    o + 2,
                    e[o + 2]
                  ),
                  (n = {next: e[o], error: e[o + 1], complete: e[o + 2]})),
              this.onSnapshotInternal(i, n)
            )
          }),
          (e.prototype.onSnapshotInternal = function(e, t) {
            var n = this,
              r = function(e) {
                console.error('Uncaught Error in onSnapshot:', e)
              }
            t.error && (r = t.error.bind(t))
            var o = new AsyncObserver({
                next: function(e) {
                  if (t.next) {
                    assert(
                      e.docs.size <= 1,
                      'Too many documents returned on a document query'
                    )
                    var r = e.docs.get(n._key)
                    t.next(
                      new DocumentSnapshot(n.firestore, n._key, r, e.fromCache)
                    )
                  }
                },
                error: r
              }),
              i = this._firestoreClient.listen(
                Query.atPath(this._key.path),
                o,
                e
              )
            return function() {
              o.mute(), n._firestoreClient.unlisten(i)
            }
          }),
          (e.prototype.get = function(e) {
            var t = this
            return (
              validateOptionNames('DocumentReference.get', e, ['source']),
              e &&
                validateNamedOptionalPropertyEquals(
                  'DocumentReference.get',
                  'options',
                  'source',
                  e.source,
                  ['default', 'server', 'cache']
                ),
              new Promise(function(n, r) {
                e && 'cache' === e.source
                  ? t.firestore
                      .ensureClientConfigured()
                      .getDocumentFromLocalCache(t._key)
                      .then(function(e) {
                        n(new DocumentSnapshot(t.firestore, t._key, e, !0))
                      }, r)
                  : t.getViaSnapshotListener(n, r, e)
              })
            )
          }),
          (e.prototype.getViaSnapshotListener = function(e, t, n) {
            var r = this.onSnapshotInternal(
              {
                includeQueryMetadataChanges: !0,
                includeDocumentMetadataChanges: !0,
                waitForSyncWhenOnline: !0
              },
              {
                next: function(o) {
                  r(),
                    !o.exists && o.metadata.fromCache
                      ? t(
                          new FirestoreError(
                            Code.UNAVAILABLE,
                            'Failed to get document because the client is offline.'
                          )
                        )
                      : o.exists &&
                        o.metadata.fromCache &&
                        n &&
                        'server' === n.source
                        ? t(
                            new FirestoreError(
                              Code.UNAVAILABLE,
                              'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                            )
                          )
                        : e(o)
                },
                error: t
              }
            )
          }),
          e
        )
      })(),
      SnapshotMetadata = (function() {
        function e(e, t) {
          ;(this.hasPendingWrites = e), (this.fromCache = t)
        }
        return (
          (e.prototype.isEqual = function(e) {
            return (
              this.hasPendingWrites === e.hasPendingWrites &&
              this.fromCache === e.fromCache
            )
          }),
          e
        )
      })(),
      DocumentSnapshot = (function() {
        function e(e, t, n, r) {
          ;(this._firestore = e),
            (this._key = t),
            (this._document = n),
            (this._fromCache = r)
        }
        return (
          (e.prototype.data = function(e) {
            return (
              validateBetweenNumberOfArgs(
                'DocumentSnapshot.data',
                arguments,
                0,
                1
              ),
              (e = validateSnapshotOptions('DocumentSnapshot.data', e)),
              this._document
                ? this.convertObject(
                    this._document.data,
                    FieldValueOptions.fromSnapshotOptions(
                      e,
                      this._firestore._areTimestampsInSnapshotsEnabled()
                    )
                  )
                : void 0
            )
          }),
          (e.prototype.get = function(e, t) {
            if (
              (validateBetweenNumberOfArgs(
                'DocumentSnapshot.get',
                arguments,
                1,
                2
              ),
              (t = validateSnapshotOptions('DocumentSnapshot.get', t)),
              this._document)
            ) {
              var n = this._document.data.field(
                fieldPathFromArgument('DocumentSnapshot.get', e)
              )
              if (void 0 !== n)
                return this.convertValue(
                  n,
                  FieldValueOptions.fromSnapshotOptions(
                    t,
                    this._firestore._areTimestampsInSnapshotsEnabled()
                  )
                )
            }
          }),
          Object.defineProperty(e.prototype, 'id', {
            get: function() {
              return this._key.path.lastSegment()
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'ref', {
            get: function() {
              return new DocumentReference(this._key, this._firestore)
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'exists', {
            get: function() {
              return null !== this._document
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'metadata', {
            get: function() {
              return new SnapshotMetadata(
                null !== this._document && this._document.hasLocalMutations,
                this._fromCache
              )
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.isEqual = function(t) {
            if (!(t instanceof e))
              throw invalidClassError('isEqual', 'DocumentSnapshot', 1, t)
            return (
              this._firestore === t._firestore &&
              this._fromCache === t._fromCache &&
              this._key.isEqual(t._key) &&
              (null === this._document
                ? null === t._document
                : this._document.isEqual(t._document))
            )
          }),
          (e.prototype.convertObject = function(e, t) {
            var n = this,
              r = {}
            return (
              e.forEach(function(e, o) {
                r[e] = n.convertValue(o, t)
              }),
              r
            )
          }),
          (e.prototype.convertValue = function(e, t) {
            if (e instanceof ObjectValue) return this.convertObject(e, t)
            if (e instanceof ArrayValue) return this.convertArray(e, t)
            if (e instanceof RefValue) {
              var n = e.value(t),
                r = this._firestore.ensureClientConfigured().databaseId()
              return (
                e.databaseId.isEqual(r) ||
                  error(
                    'Document ' +
                      this._key.path +
                      ' contains a document reference within a different database (' +
                      e.databaseId.projectId +
                      '/' +
                      e.databaseId.database +
                      ') which is not supported. It will be treated as a reference in the current database (' +
                      r.projectId +
                      '/' +
                      r.database +
                      ') instead.'
                  ),
                new DocumentReference(n, this._firestore)
              )
            }
            return e.value(t)
          }),
          (e.prototype.convertArray = function(e, t) {
            var n = this
            return e.internalValue.map(function(e) {
              return n.convertValue(e, t)
            })
          }),
          e
        )
      })(),
      QueryDocumentSnapshot = (function(e) {
        function t(t, n, r, o) {
          return e.call(this, t, n, r, o) || this
        }
        return (
          __extends(t, e),
          (t.prototype.data = function(t) {
            var n = e.prototype.data.call(this, t)
            return (
              assert(
                'object' == typeof n,
                'Document in a QueryDocumentSnapshot should exist'
              ),
              n
            )
          }),
          t
        )
      })(DocumentSnapshot),
      Query$1 = (function() {
        function e(e, t) {
          ;(this._query = e), (this.firestore = t)
        }
        return (
          (e.prototype.where = function(t, n, r) {
            var o
            validateExactNumberOfArgs('Query.where', arguments, 3),
              validateArgType('Query.where', 'string', 2, n),
              validateDefined('Query.where', 3, r)
            var i = fieldPathFromArgument('Query.where', t)
            if (i.isKeyField())
              if ('string' == typeof r) {
                if (-1 !== r.indexOf('/'))
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    'Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it contains a slash.'
                  )
                if ('' === r)
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    'Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it was an empty string.'
                  )
                var a = this._query.path.child(new ResourcePath([r]))
                assert(a.length % 2 == 0, 'Path should be a document key'),
                  (o = new RefValue(
                    this.firestore._databaseId,
                    new DocumentKey(a)
                  ))
              } else {
                if (!(r instanceof DocumentReference))
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    'Function Query.where() requires its third parameter to be a string or a DocumentReference if the first parameter is FieldPath.documentId(), but it was: ' +
                      valueDescription(r) +
                      '.'
                  )
                var s = r
                o = new RefValue(this.firestore._databaseId, s._key)
              }
            else
              o = this.firestore._dataConverter.parseQueryValue(
                'Query.where',
                r
              )
            var u = fieldFilter(i, RelationOp.fromString(n), o)
            return (
              this.validateNewFilter(u),
              new e(this._query.addFilter(u), this.firestore)
            )
          }),
          (e.prototype.orderBy = function(t, n) {
            var r
            if (
              (validateBetweenNumberOfArgs('Query.orderBy', arguments, 1, 2),
              validateOptionalArgType('Query.orderBy', 'string', 2, n),
              void 0 === n || 'asc' === n)
            )
              r = Direction.ASCENDING
            else {
              if ('desc' !== n)
                throw new FirestoreError(
                  Code.INVALID_ARGUMENT,
                  "Function Query.orderBy() has unknown direction '" +
                    n +
                    "', expected 'asc' or 'desc'."
                )
              r = Direction.DESCENDING
            }
            if (null !== this._query.startAt)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().'
              )
            if (null !== this._query.endAt)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().'
              )
            var o = fieldPathFromArgument('Query.orderBy', t),
              i = new OrderBy(o, r)
            return (
              this.validateNewOrderBy(i),
              new e(this._query.addOrderBy(i), this.firestore)
            )
          }),
          (e.prototype.limit = function(t) {
            if (
              (validateExactNumberOfArgs('Query.limit', arguments, 1),
              validateArgType('Query.limit', 'number', 1, t),
              t <= 0)
            )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Invalid Query. Query limit (' +
                  t +
                  ') is invalid. Limit must be positive.'
              )
            return new e(this._query.withLimit(t), this.firestore)
          }),
          (e.prototype.startAt = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r]
            validateAtLeastNumberOfArgs('Query.startAt', arguments, 1)
            var o = this.boundFromDocOrFields('Query.startAt', t, n, !0)
            return new e(this._query.withStartAt(o), this.firestore)
          }),
          (e.prototype.startAfter = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r]
            validateAtLeastNumberOfArgs('Query.startAfter', arguments, 1)
            var o = this.boundFromDocOrFields('Query.startAfter', t, n, !1)
            return new e(this._query.withStartAt(o), this.firestore)
          }),
          (e.prototype.endBefore = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r]
            validateAtLeastNumberOfArgs('Query.endBefore', arguments, 1)
            var o = this.boundFromDocOrFields('Query.endBefore', t, n, !0)
            return new e(this._query.withEndAt(o), this.firestore)
          }),
          (e.prototype.endAt = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r]
            validateAtLeastNumberOfArgs('Query.endAt', arguments, 1)
            var o = this.boundFromDocOrFields('Query.endAt', t, n, !1)
            return new e(this._query.withEndAt(o), this.firestore)
          }),
          (e.prototype.isEqual = function(t) {
            if (!(t instanceof e))
              throw invalidClassError('isEqual', 'Query', 1, t)
            return (
              this.firestore === t.firestore && this._query.isEqual(t._query)
            )
          }),
          (e.prototype.boundFromDocOrFields = function(e, t, n, r) {
            if ((validateDefined(e, 1, t), t instanceof DocumentSnapshot)) {
              if (n.length > 0)
                throw new FirestoreError(
                  Code.INVALID_ARGUMENT,
                  'Too many arguments provided to ' + e + '().'
                )
              var o = t
              if (!o.exists)
                throw new FirestoreError(
                  Code.NOT_FOUND,
                  "Can't use a DocumentSnapshot that doesn't exist for " +
                    e +
                    '().'
                )
              return this.boundFromDocument(e, o._document, r)
            }
            var i = [t].concat(n)
            return this.boundFromFields(e, i, r)
          }),
          (e.prototype.boundFromDocument = function(e, t, n) {
            for (
              var r = [], o = 0, i = this._query.orderBy;
              o < i.length;
              o++
            ) {
              var a = i[o]
              if (a.field.isKeyField())
                r.push(new RefValue(this.firestore._databaseId, t.key))
              else {
                var s = t.field(a.field)
                if (void 0 === s) {
                  var u = a.field.canonicalString()
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    "Invalid query. You are trying to start or end a query using a document for which the field '" +
                      u +
                      "' (used as the orderBy) does not exist."
                  )
                }
                r.push(s)
              }
            }
            return new Bound(r, n)
          }),
          (e.prototype.boundFromFields = function(e, t, n) {
            var r = this._query.explicitOrderBy
            if (t.length > r.length)
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Too many arguments provided to ' +
                  e +
                  '(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses'
              )
            for (var o = [], i = 0; i < t.length; i++) {
              var a = t[i]
              if (r[i].field.isKeyField()) {
                if ('string' != typeof a)
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    'Invalid query. Expected a string for document ID in ' +
                      e +
                      '(), but got a ' +
                      typeof a
                  )
                if (-1 !== a.indexOf('/'))
                  throw new FirestoreError(
                    Code.INVALID_ARGUMENT,
                    "Invalid query. Document ID '" +
                      a +
                      "' contains a slash in " +
                      e +
                      '()'
                  )
                var s = new DocumentKey(this._query.path.child(a))
                o.push(new RefValue(this.firestore._databaseId, s))
              } else {
                var u = this.firestore._dataConverter.parseQueryValue(e, a)
                o.push(u)
              }
            }
            return new Bound(o, n)
          }),
          (e.prototype.onSnapshot = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            validateBetweenNumberOfArgs('Query.onSnapshot', arguments, 1, 4)
            var n,
              r = {},
              o = 0
            return (
              'object' != typeof e[o] ||
                isPartialObserver(e[o]) ||
                (validateOptionNames('Query.onSnapshot', (r = e[o]), [
                  'includeQueryMetadataChanges',
                  'includeDocumentMetadataChanges'
                ]),
                validateNamedOptionalType(
                  'Query.onSnapshot',
                  'boolean',
                  'includeDocumentMetadataChanges',
                  r.includeDocumentMetadataChanges
                ),
                validateNamedOptionalType(
                  'Query.onSnapshot',
                  'boolean',
                  'includeQueryMetadataChanges',
                  r.includeQueryMetadataChanges
                ),
                o++),
              isPartialObserver(e[o])
                ? (n = e[o])
                : (validateArgType('Query.onSnapshot', 'function', o, e[o]),
                  validateOptionalArgType(
                    'Query.onSnapshot',
                    'function',
                    o + 1,
                    e[o + 1]
                  ),
                  validateOptionalArgType(
                    'Query.onSnapshot',
                    'function',
                    o + 2,
                    e[o + 2]
                  ),
                  (n = {next: e[o], error: e[o + 1], complete: e[o + 2]})),
              this.onSnapshotInternal(r, n)
            )
          }),
          (e.prototype.onSnapshotInternal = function(e, t) {
            var n = this,
              r = function(e) {
                console.error('Uncaught Error in onSnapshot:', e)
              }
            t.error && (r = t.error.bind(t))
            var o = new AsyncObserver({
                next: function(e) {
                  t.next && t.next(new QuerySnapshot(n.firestore, n._query, e))
                },
                error: r
              }),
              i = this.firestore.ensureClientConfigured(),
              a = i.listen(this._query, o, e)
            return function() {
              o.mute(), i.unlisten(a)
            }
          }),
          (e.prototype.get = function(e) {
            var t = this
            return (
              validateBetweenNumberOfArgs('Query.get', arguments, 0, 1),
              new Promise(function(n, r) {
                e && 'cache' === e.source
                  ? t.firestore
                      .ensureClientConfigured()
                      .getDocumentsFromLocalCache(t._query)
                      .then(function(e) {
                        n(new QuerySnapshot(t.firestore, t._query, e))
                      }, r)
                  : t.getViaSnapshotListener(n, r, e)
              })
            )
          }),
          (e.prototype.getViaSnapshotListener = function(e, t, n) {
            var r = this.onSnapshotInternal(
              {
                includeDocumentMetadataChanges: !1,
                includeQueryMetadataChanges: !0,
                waitForSyncWhenOnline: !0
              },
              {
                next: function(o) {
                  r(),
                    o.metadata.fromCache && n && 'server' === n.source
                      ? t(
                          new FirestoreError(
                            Code.UNAVAILABLE,
                            'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                          )
                        )
                      : e(o)
                },
                error: t
              }
            )
          }),
          (e.prototype.validateNewFilter = function(e) {
            if (e instanceof RelationFilter && e.isInequality()) {
              var t = this._query.getInequalityFilterField()
              if (null !== t && !t.isEqual(e.field))
                throw new FirestoreError(
                  Code.INVALID_ARGUMENT,
                  "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" +
                    t.toString() +
                    "' and '" +
                    e.field.toString() +
                    "'"
                )
              var n = this._query.getFirstOrderByField()
              null !== n && this.validateOrderByAndInequalityMatch(e.field, n)
            }
          }),
          (e.prototype.validateNewOrderBy = function(e) {
            if (null === this._query.getFirstOrderByField()) {
              var t = this._query.getInequalityFilterField()
              null !== t && this.validateOrderByAndInequalityMatch(t, e.field)
            }
          }),
          (e.prototype.validateOrderByAndInequalityMatch = function(e, t) {
            if (!t.isEqual(e))
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
                  e.toString() +
                  "' and so you must also use '" +
                  e.toString() +
                  "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" +
                  t.toString() +
                  "' instead."
              )
          }),
          e
        )
      })(),
      QuerySnapshot = (function() {
        function e(e, t, n) {
          ;(this._firestore = e),
            (this._originalQuery = t),
            (this._snapshot = n),
            (this._cachedChanges = null),
            (this.metadata = new SnapshotMetadata(
              n.hasPendingWrites,
              n.fromCache
            ))
        }
        return (
          Object.defineProperty(e.prototype, 'docs', {
            get: function() {
              var e = []
              return (
                this.forEach(function(t) {
                  return e.push(t)
                }),
                e
              )
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'empty', {
            get: function() {
              return this._snapshot.docs.isEmpty()
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function() {
              return this._snapshot.docs.size
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.forEach = function(e, t) {
            var n = this
            validateBetweenNumberOfArgs(
              'QuerySnapshot.forEach',
              arguments,
              1,
              2
            ),
              validateArgType('QuerySnapshot.forEach', 'function', 1, e),
              this._snapshot.docs.forEach(function(r) {
                e.call(t, n.convertToDocumentImpl(r))
              })
          }),
          Object.defineProperty(e.prototype, 'query', {
            get: function() {
              return new Query$1(this._originalQuery, this._firestore)
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'docChanges', {
            get: function() {
              return (
                this._cachedChanges ||
                  (this._cachedChanges = changesFromSnapshot(
                    this._firestore,
                    this._snapshot
                  )),
                this._cachedChanges
              )
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.isEqual = function(t) {
            if (!(t instanceof e))
              throw invalidClassError('isEqual', 'QuerySnapshot', 1, t)
            return (
              this._firestore === t._firestore &&
              this._originalQuery.isEqual(t._originalQuery) &&
              this._snapshot.isEqual(t._snapshot)
            )
          }),
          (e.prototype.convertToDocumentImpl = function(e) {
            return new QueryDocumentSnapshot(
              this._firestore,
              e.key,
              e,
              this.metadata.fromCache
            )
          }),
          e
        )
      })(),
      CollectionReference = (function(e) {
        function t(t, n) {
          var r = e.call(this, Query.atPath(t), n) || this
          if (t.length % 2 != 1)
            throw new FirestoreError(
              Code.INVALID_ARGUMENT,
              'Invalid collection reference. Collection references must have an odd number of segments, but ' +
                t.canonicalString() +
                ' has ' +
                t.length
            )
          return r
        }
        return (
          __extends(t, e),
          Object.defineProperty(t.prototype, 'id', {
            get: function() {
              return this._query.path.lastSegment()
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'parent', {
            get: function() {
              var e = this._query.path.popLast()
              return e.isEmpty()
                ? null
                : new DocumentReference(new DocumentKey(e), this.firestore)
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'path', {
            get: function() {
              return this._query.path.canonicalString()
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.doc = function(e) {
            if (
              (validateBetweenNumberOfArgs(
                'CollectionReference.doc',
                arguments,
                0,
                1
              ),
              0 === arguments.length && (e = AutoId.newId()),
              validateArgType('CollectionReference.doc', 'string', 1, e),
              '' === e)
            )
              throw new FirestoreError(
                Code.INVALID_ARGUMENT,
                'Document path must be a non-empty string'
              )
            var t = ResourcePath.fromString(e)
            return DocumentReference.forPath(
              this._query.path.child(t),
              this.firestore
            )
          }),
          (t.prototype.add = function(e) {
            validateExactNumberOfArgs('CollectionReference.add', arguments, 1),
              validateArgType('CollectionReference.add', 'object', 1, e)
            var t = this.doc()
            return t.set(e).then(function() {
              return t
            })
          }),
          t
        )
      })(Query$1)
    function validateSetOptions(e, t) {
      return void 0 === t
        ? {merge: !1}
        : (validateOptionNames(e, t, ['merge']),
          validateNamedOptionalType(e, 'boolean', 'merge', t.merge),
          t)
    }
    function validateSnapshotOptions(e, t) {
      return void 0 === t
        ? {}
        : (validateOptionNames(e, t, ['serverTimestamps']),
          validateNamedOptionalPropertyEquals(
            e,
            'options',
            'serverTimestamps',
            t.serverTimestamps,
            ['estimate', 'previous', 'none']
          ),
          t)
    }
    function validateReference(e, t, n) {
      if (t instanceof DocumentReference) {
        if (t.firestore !== n)
          throw new FirestoreError(
            Code.INVALID_ARGUMENT,
            'Provided document reference is from a different Firestore instance.'
          )
        return t
      }
      throw invalidClassError(e, 'DocumentReference', 1, t)
    }
    function changesFromSnapshot(e, t) {
      if (t.oldDocs.isEmpty()) {
        var n,
          r = 0
        return t.docChanges.map(function(o) {
          var i = new QueryDocumentSnapshot(e, o.doc.key, o.doc, t.fromCache)
          return (
            assert(
              o.type === ChangeType.Added,
              'Invalid event type for first snapshot'
            ),
            assert(
              !n || t.query.docComparator(n, o.doc) < 0,
              'Got added events in wrong order'
            ),
            (n = o.doc),
            {type: 'added', doc: i, oldIndex: -1, newIndex: r++}
          )
        })
      }
      var o = t.oldDocs
      return t.docChanges.map(function(n) {
        var r = new QueryDocumentSnapshot(e, n.doc.key, n.doc, t.fromCache),
          i = -1,
          a = -1
        return (
          n.type !== ChangeType.Added &&
            (assert(
              (i = o.indexOf(n.doc.key)) >= 0,
              'Index for document not found'
            ),
            (o = o.delete(n.doc.key))),
          n.type !== ChangeType.Removed &&
            (a = (o = o.add(n.doc)).indexOf(n.doc.key)),
          {type: resultChangeType(n.type), doc: r, oldIndex: i, newIndex: a}
        )
      })
    }
    function resultChangeType(e) {
      switch (e) {
        case ChangeType.Added:
          return 'added'
        case ChangeType.Modified:
        case ChangeType.Metadata:
          return 'modified'
        case ChangeType.Removed:
          return 'removed'
        default:
          return fail('Unknown change type: ' + e)
      }
    }
    var PublicFirestore = makeConstructorPrivate(
        Firestore,
        'Use firebase.firestore() instead.'
      ),
      PublicTransaction = makeConstructorPrivate(
        Transaction$1,
        'Use firebase.firestore().runTransaction() instead.'
      ),
      PublicWriteBatch = makeConstructorPrivate(
        WriteBatch,
        'Use firebase.firestore().batch() instead.'
      ),
      PublicDocumentReference = makeConstructorPrivate(
        DocumentReference,
        'Use firebase.firestore().doc() instead.'
      ),
      PublicDocumentSnapshot = makeConstructorPrivate(DocumentSnapshot),
      PublicQueryDocumentSnapshot = makeConstructorPrivate(
        QueryDocumentSnapshot
      ),
      PublicQuery = makeConstructorPrivate(Query$1),
      PublicQuerySnapshot = makeConstructorPrivate(QuerySnapshot),
      PublicCollectionReference = makeConstructorPrivate(
        CollectionReference,
        'Use firebase.firestore().collection() instead.'
      ),
      firestoreNamespace = {
        Firestore: PublicFirestore,
        GeoPoint: GeoPoint,
        Timestamp: Timestamp,
        Blob: PublicBlob,
        Transaction: PublicTransaction,
        WriteBatch: PublicWriteBatch,
        DocumentReference: PublicDocumentReference,
        DocumentSnapshot: PublicDocumentSnapshot,
        Query: PublicQuery,
        QueryDocumentSnapshot: PublicQueryDocumentSnapshot,
        QuerySnapshot: PublicQuerySnapshot,
        CollectionReference: PublicCollectionReference,
        FieldPath: FieldPath$1,
        FieldValue: PublicFieldValue,
        setLogLevel: Firestore.setLogLevel
      }
    function configureForFirebase(e) {
      e.INTERNAL.registerService(
        'firestore',
        function(e) {
          return new Firestore(e)
        },
        shallowCopy(firestoreNamespace)
      )
    }
    function registerFirestore(e) {
      configureForFirebase(e)
    }
    registerFirestore(firebase)
    var firestore = {}
    return firestore
  } catch (e) {
    throw (console.error(e),
    new Error(
      'Cannot instantiate firebase-firestore - be sure to load firebase-app.js first.'
    ))
  }
  var ops, dirs, LogLevel$$1
})((this.firebase = this.firebase || {}), firebase)
//# sourceMappingURL=firebase-firestore.js.map
