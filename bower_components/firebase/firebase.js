!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd ? define(e) : (t.firebase = e())
})(this, function() {
  'use strict'
  !(function(t) {
    if (!t.fetch) {
      var e = {
        searchParams: 'URLSearchParams' in t,
        iterable: 'Symbol' in t && 'iterator' in Symbol,
        blob:
          'FileReader' in t &&
          'Blob' in t &&
          (function() {
            try {
              return new Blob(), !0
            } catch (t) {
              return !1
            }
          })(),
        formData: 'FormData' in t,
        arrayBuffer: 'ArrayBuffer' in t
      }
      if (e.arrayBuffer)
        var n = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]'
          ],
          r = function(t) {
            return t && DataView.prototype.isPrototypeOf(t)
          },
          i =
            ArrayBuffer.isView ||
            function(t) {
              return t && n.indexOf(Object.prototype.toString.call(t)) > -1
            }
      ;(h.prototype.append = function(t, e) {
        ;(t = s(t)), (e = u(e))
        var n = this.map[t]
        this.map[t] = n ? n + ',' + e : e
      }),
        (h.prototype.delete = function(t) {
          delete this.map[s(t)]
        }),
        (h.prototype.get = function(t) {
          return (t = s(t)), this.has(t) ? this.map[t] : null
        }),
        (h.prototype.has = function(t) {
          return this.map.hasOwnProperty(s(t))
        }),
        (h.prototype.set = function(t, e) {
          this.map[s(t)] = u(e)
        }),
        (h.prototype.forEach = function(t, e) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
        }),
        (h.prototype.keys = function() {
          var t = []
          return (
            this.forEach(function(e, n) {
              t.push(n)
            }),
            c(t)
          )
        }),
        (h.prototype.values = function() {
          var t = []
          return (
            this.forEach(function(e) {
              t.push(e)
            }),
            c(t)
          )
        }),
        (h.prototype.entries = function() {
          var t = []
          return (
            this.forEach(function(e, n) {
              t.push([n, e])
            }),
            c(t)
          )
        }),
        e.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries)
      var o = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
      ;(y.prototype.clone = function() {
        return new y(this, {body: this._bodyInit})
      }),
        v.call(y.prototype),
        v.call(g.prototype),
        (g.prototype.clone = function() {
          return new g(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
          })
        }),
        (g.error = function() {
          var t = new g(null, {status: 0, statusText: ''})
          return (t.type = 'error'), t
        })
      var a = [301, 302, 303, 307, 308]
      ;(g.redirect = function(t, e) {
        if (-1 === a.indexOf(e)) throw new RangeError('Invalid status code')
        return new g(null, {status: e, headers: {location: t}})
      }),
        (t.Headers = h),
        (t.Request = y),
        (t.Response = g),
        (t.fetch = function(t, n) {
          return new Promise(function(r, i) {
            var o = new y(t, n),
              a = new XMLHttpRequest()
            ;(a.onload = function() {
              var t,
                e,
                n = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: ((t = a.getAllResponseHeaders() || ''),
                  (e = new h()),
                  t
                    .replace(/\r?\n[\t ]+/g, ' ')
                    .split(/\r?\n/)
                    .forEach(function(t) {
                      var n = t.split(':'),
                        r = n.shift().trim()
                      if (r) {
                        var i = n.join(':').trim()
                        e.append(r, i)
                      }
                    }),
                  e)
                }
              n.url =
                'responseURL' in a
                  ? a.responseURL
                  : n.headers.get('X-Request-URL')
              var i = 'response' in a ? a.response : a.responseText
              r(new g(i, n))
            }),
              (a.onerror = function() {
                i(new TypeError('Network request failed'))
              }),
              (a.ontimeout = function() {
                i(new TypeError('Network request failed'))
              }),
              a.open(o.method, o.url, !0),
              'include' === o.credentials
                ? (a.withCredentials = !0)
                : 'omit' === o.credentials && (a.withCredentials = !1),
              'responseType' in a && e.blob && (a.responseType = 'blob'),
              o.headers.forEach(function(t, e) {
                a.setRequestHeader(e, t)
              }),
              a.send(void 0 === o._bodyInit ? null : o._bodyInit)
          })
        }),
        (t.fetch.polyfill = !0)
    }
    function s(t) {
      if (
        ('string' != typeof t && (t = String(t)),
        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
      )
        throw new TypeError('Invalid character in header field name')
      return t.toLowerCase()
    }
    function u(t) {
      return 'string' != typeof t && (t = String(t)), t
    }
    function c(t) {
      var n = {
        next: function() {
          var e = t.shift()
          return {done: void 0 === e, value: e}
        }
      }
      return (
        e.iterable &&
          (n[Symbol.iterator] = function() {
            return n
          }),
        n
      )
    }
    function h(t) {
      ;(this.map = {}),
        t instanceof h
          ? t.forEach(function(t, e) {
              this.append(e, t)
            }, this)
          : Array.isArray(t)
            ? t.forEach(function(t) {
                this.append(t[0], t[1])
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
              }, this)
    }
    function l(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError('Already read'))
      t.bodyUsed = !0
    }
    function p(t) {
      return new Promise(function(e, n) {
        ;(t.onload = function() {
          e(t.result)
        }),
          (t.onerror = function() {
            n(t.error)
          })
      })
    }
    function f(t) {
      var e = new FileReader(),
        n = p(e)
      return e.readAsArrayBuffer(t), n
    }
    function d(t) {
      if (t.slice) return t.slice(0)
      var e = new Uint8Array(t.byteLength)
      return e.set(new Uint8Array(t)), e.buffer
    }
    function v() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function(t) {
          if (((this._bodyInit = t), t))
            if ('string' == typeof t) this._bodyText = t
            else if (e.blob && Blob.prototype.isPrototypeOf(t))
              this._bodyBlob = t
            else if (e.formData && FormData.prototype.isPrototypeOf(t))
              this._bodyFormData = t
            else if (
              e.searchParams &&
              URLSearchParams.prototype.isPrototypeOf(t)
            )
              this._bodyText = t.toString()
            else if (e.arrayBuffer && e.blob && r(t))
              (this._bodyArrayBuffer = d(t.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer]))
            else {
              if (
                !e.arrayBuffer ||
                (!ArrayBuffer.prototype.isPrototypeOf(t) && !i(t))
              )
                throw new Error('unsupported BodyInit type')
              this._bodyArrayBuffer = d(t)
            }
          else this._bodyText = ''
          this.headers.get('content-type') ||
            ('string' == typeof t
              ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
              : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set('content-type', this._bodyBlob.type)
                : e.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(t) &&
                  this.headers.set(
                    'content-type',
                    'application/x-www-form-urlencoded;charset=UTF-8'
                  ))
        }),
        e.blob &&
          ((this.blob = function() {
            var t = l(this)
            if (t) return t
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]))
            if (this._bodyFormData)
              throw new Error('could not read FormData body as blob')
            return Promise.resolve(new Blob([this._bodyText]))
          }),
          (this.arrayBuffer = function() {
            return this._bodyArrayBuffer
              ? l(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(f)
          })),
        (this.text = function() {
          var t,
            e,
            n,
            r = l(this)
          if (r) return r
          if (this._bodyBlob)
            return (
              (t = this._bodyBlob),
              (e = new FileReader()),
              (n = p(e)),
              e.readAsText(t),
              n
            )
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function(t) {
                for (
                  var e = new Uint8Array(t), n = new Array(e.length), r = 0;
                  r < e.length;
                  r++
                )
                  n[r] = String.fromCharCode(e[r])
                return n.join('')
              })(this._bodyArrayBuffer)
            )
          if (this._bodyFormData)
            throw new Error('could not read FormData body as text')
          return Promise.resolve(this._bodyText)
        }),
        e.formData &&
          (this.formData = function() {
            return this.text().then(_)
          }),
        (this.json = function() {
          return this.text().then(JSON.parse)
        }),
        this
      )
    }
    function y(t, e) {
      var n,
        r,
        i = (e = e || {}).body
      if (t instanceof y) {
        if (t.bodyUsed) throw new TypeError('Already read')
        ;(this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new h(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0))
      } else this.url = String(t)
      if (
        ((this.credentials = e.credentials || this.credentials || 'omit'),
        (!e.headers && this.headers) || (this.headers = new h(e.headers)),
        (this.method = ((n = e.method || this.method || 'GET'),
        (r = n.toUpperCase()),
        o.indexOf(r) > -1 ? r : n)),
        (this.mode = e.mode || this.mode || null),
        (this.referrer = null),
        ('GET' === this.method || 'HEAD' === this.method) && i)
      )
        throw new TypeError('Body not allowed for GET or HEAD requests')
      this._initBody(i)
    }
    function _(t) {
      var e = new FormData()
      return (
        t
          .trim()
          .split('&')
          .forEach(function(t) {
            if (t) {
              var n = t.split('='),
                r = n.shift().replace(/\+/g, ' '),
                i = n.join('=').replace(/\+/g, ' ')
              e.append(decodeURIComponent(r), decodeURIComponent(i))
            }
          }),
        e
      )
    }
    function g(t, e) {
      e || (e = {}),
        (this.type = 'default'),
        (this.status = void 0 === e.status ? 200 : e.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
        (this.headers = new h(e.headers)),
        (this.url = e.url || ''),
        this._initBody(t)
    }
  })('undefined' != typeof self ? self : void 0)
  var t = setTimeout
  function e() {}
  function n(t) {
    if (!(this instanceof n))
      throw new TypeError('Promises must be constructed via new')
    if ('function' != typeof t) throw new TypeError('not a function')
    ;(this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      s(t, this)
  }
  function r(t, e) {
    for (; 3 === t._state; ) t = t._value
    0 !== t._state
      ? ((t._handled = !0),
        n._immediateFn(function() {
          var n = 1 === t._state ? e.onFulfilled : e.onRejected
          if (null !== n) {
            var r
            try {
              r = n(t._value)
            } catch (t) {
              return void o(e.promise, t)
            }
            i(e.promise, r)
          } else (1 === t._state ? i : o)(e.promise, t._value)
        }))
      : t._deferreds.push(e)
  }
  function i(t, e) {
    try {
      if (e === t)
        throw new TypeError('A promise cannot be resolved with itself.')
      if (e && ('object' == typeof e || 'function' == typeof e)) {
        var r = e.then
        if (e instanceof n) return (t._state = 3), (t._value = e), void a(t)
        if ('function' == typeof r)
          return void s(
            ((i = r),
            (u = e),
            function() {
              i.apply(u, arguments)
            }),
            t
          )
      }
      ;(t._state = 1), (t._value = e), a(t)
    } catch (e) {
      o(t, e)
    }
    var i, u
  }
  function o(t, e) {
    ;(t._state = 2), (t._value = e), a(t)
  }
  function a(t) {
    2 === t._state &&
      0 === t._deferreds.length &&
      n._immediateFn(function() {
        t._handled || n._unhandledRejectionFn(t._value)
      })
    for (var e = 0, i = t._deferreds.length; e < i; e++) r(t, t._deferreds[e])
    t._deferreds = null
  }
  function s(t, e) {
    var n = !1
    try {
      t(
        function(t) {
          n || ((n = !0), i(e, t))
        },
        function(t) {
          n || ((n = !0), o(e, t))
        }
      )
    } catch (t) {
      if (n) return
      ;(n = !0), o(e, t)
    }
  }
  ;(n.prototype.catch = function(t) {
    return this.then(null, t)
  }),
    (n.prototype.then = function(t, n) {
      var i = new this.constructor(e)
      return (
        r(
          this,
          new function(t, e, n) {
            ;(this.onFulfilled = 'function' == typeof t ? t : null),
              (this.onRejected = 'function' == typeof e ? e : null),
              (this.promise = n)
          }(t, n, i)
        ),
        i
      )
    }),
    (n.prototype.finally = function(t) {
      var e = this.constructor
      return this.then(
        function(n) {
          return e.resolve(t()).then(function() {
            return n
          })
        },
        function(n) {
          return e.resolve(t()).then(function() {
            return e.reject(n)
          })
        }
      )
    }),
    (n.all = function(t) {
      return new n(function(e, n) {
        if (!t || void 0 === t.length)
          throw new TypeError('Promise.all accepts an array')
        var r = Array.prototype.slice.call(t)
        if (0 === r.length) return e([])
        var i = r.length
        function o(t, a) {
          try {
            if (a && ('object' == typeof a || 'function' == typeof a)) {
              var s = a.then
              if ('function' == typeof s)
                return void s.call(
                  a,
                  function(e) {
                    o(t, e)
                  },
                  n
                )
            }
            ;(r[t] = a), 0 == --i && e(r)
          } catch (t) {
            n(t)
          }
        }
        for (var a = 0; a < r.length; a++) o(a, r[a])
      })
    }),
    (n.resolve = function(t) {
      return t && 'object' == typeof t && t.constructor === n
        ? t
        : new n(function(e) {
            e(t)
          })
    }),
    (n.reject = function(t) {
      return new n(function(e, n) {
        n(t)
      })
    }),
    (n.race = function(t) {
      return new n(function(e, n) {
        for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
      })
    }),
    (n._immediateFn =
      ('function' == typeof setImmediate &&
        function(t) {
          setImmediate(t)
        }) ||
      function(e) {
        t(e, 0)
      }),
    (n._unhandledRejectionFn = function(t) {
      'undefined' != typeof console &&
        console &&
        console.warn('Possible Unhandled Promise Rejection:', t)
    })
  var u = (function() {
    if ('undefined' != typeof self) return self
    if ('undefined' != typeof window) return window
    if ('undefined' != typeof global) return global
    throw new Error('unable to locate global object')
  })()
  function c(t, e) {
    return t((e = {exports: {}}), e.exports), e.exports
  }
  u.Promise || (u.Promise = n)
  var h = c(function(t) {
      var e = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')())
      'number' == typeof __g && (__g = e)
    }),
    l = c(function(t) {
      var e = (t.exports = {version: '2.5.5'})
      'number' == typeof __e && (__e = e)
    }),
    p = (l.version,
    function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t
    }),
    f = function(t) {
      if (!p(t)) throw TypeError(t + ' is not an object!')
      return t
    },
    d = function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    },
    v = !d(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7
          }
        }).a
      )
    }),
    y = h.document,
    _ = p(y) && p(y.createElement),
    g =
      !v &&
      !d(function() {
        return (
          7 !=
          Object.defineProperty(
            ((t = 'div'), _ ? y.createElement(t) : {}),
            'a',
            {
              get: function() {
                return 7
              }
            }
          ).a
        )
        var t
      }),
    m = Object.defineProperty,
    b = {
      f: v
        ? Object.defineProperty
        : function(t, e, n) {
            if (
              (f(t),
              (e = (function(t, e) {
                if (!p(t)) return t
                var n, r
                if (
                  e &&
                  'function' == typeof (n = t.toString) &&
                  !p((r = n.call(t)))
                )
                  return r
                if ('function' == typeof (n = t.valueOf) && !p((r = n.call(t))))
                  return r
                if (
                  !e &&
                  'function' == typeof (n = t.toString) &&
                  !p((r = n.call(t)))
                )
                  return r
                throw TypeError("Can't convert object to primitive value")
              })(e, !0)),
              f(n),
              g)
            )
              try {
                return m(t, e, n)
              } catch (t) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!')
            return 'value' in n && (t[e] = n.value), t
          }
    },
    w = v
      ? function(t, e, n) {
          return b.f(
            t,
            e,
            (function(t, e) {
              return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
              }
            })(1, n)
          )
        }
      : function(t, e, n) {
          return (t[e] = n), t
        },
    E = {}.hasOwnProperty,
    T = function(t, e) {
      return E.call(t, e)
    },
    C = 0,
    S = Math.random(),
    I = function(t) {
      return 'Symbol('.concat(
        void 0 === t ? '' : t,
        ')_',
        (++C + S).toString(36)
      )
    },
    N = c(function(t) {
      var e = I('src'),
        n = Function.toString,
        r = ('' + n).split('toString')
      ;(l.inspectSource = function(t) {
        return n.call(t)
      }),
        (t.exports = function(t, n, i, o) {
          var a = 'function' == typeof i
          a && (T(i, 'name') || w(i, 'name', n)),
            t[n] !== i &&
              (a && (T(i, e) || w(i, e, t[n] ? '' + t[n] : r.join(String(n)))),
              t === h
                ? (t[n] = i)
                : o
                  ? t[n] ? (t[n] = i) : w(t, n, i)
                  : (delete t[n], w(t, n, i)))
        })(Function.prototype, 'toString', function() {
          return ('function' == typeof this && this[e]) || n.call(this)
        })
    }),
    R = function(t, e, n) {
      if (
        ((function(t) {
          if ('function' != typeof t) throw TypeError(t + ' is not a function!')
        })(t),
        void 0 === e)
      )
        return t
      switch (n) {
        case 1:
          return function(n) {
            return t.call(e, n)
          }
        case 2:
          return function(n, r) {
            return t.call(e, n, r)
          }
        case 3:
          return function(n, r, i) {
            return t.call(e, n, r, i)
          }
      }
      return function() {
        return t.apply(e, arguments)
      }
    },
    A = function(t, e, n) {
      var r,
        i,
        o,
        a,
        s = t & A.F,
        u = t & A.G,
        c = t & A.S,
        p = t & A.P,
        f = t & A.B,
        d = u ? h : c ? h[e] || (h[e] = {}) : (h[e] || {}).prototype,
        v = u ? l : l[e] || (l[e] = {}),
        y = v.prototype || (v.prototype = {})
      for (r in (u && (n = e), n))
        (o = ((i = !s && d && void 0 !== d[r]) ? d : n)[r]),
          (a =
            f && i
              ? R(o, h)
              : p && 'function' == typeof o ? R(Function.call, o) : o),
          d && N(d, r, o, t & A.U),
          v[r] != o && w(v, r, a),
          p && y[r] != o && (y[r] = o)
    }
  ;(h.core = l),
    (A.F = 1),
    (A.G = 2),
    (A.S = 4),
    (A.P = 8),
    (A.B = 16),
    (A.W = 32),
    (A.U = 64),
    (A.R = 128)
  var k = A,
    O = {}.toString,
    P = function(t) {
      return O.call(t).slice(8, -1)
    },
    D = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(t) {
          return 'String' == P(t) ? t.split('') : Object(t)
        },
    L = function(t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t)
      return t
    },
    x = Math.ceil,
    F = Math.floor,
    U = Math.min,
    M = function(t) {
      return t > 0
        ? U(
            (function(t) {
              return isNaN((t = +t)) ? 0 : (t > 0 ? F : x)(t)
            })(t),
            9007199254740991
          )
        : 0
    },
    W =
      Array.isArray ||
      function(t) {
        return 'Array' == P(t)
      },
    B = h['__core-js_shared__'] || (h['__core-js_shared__'] = {}),
    j = function(t) {
      return B[t] || (B[t] = {})
    },
    V = c(function(t) {
      var e = j('wks'),
        n = h.Symbol,
        r = 'function' == typeof n
      ;(t.exports = function(t) {
        return e[t] || (e[t] = (r && n[t]) || (r ? n : I)('Symbol.' + t))
      }).store = e
    }),
    q = V('species'),
    H = function(t, e) {
      return new ((function(t) {
        var e
        return (
          W(t) &&
            ('function' != typeof (e = t.constructor) ||
              (e !== Array && !W(e.prototype)) ||
              (e = void 0),
            p(e) && null === (e = e[q]) && (e = void 0)),
          void 0 === e ? Array : e
        )
      })(t))(e)
    },
    K = function(t, e) {
      var n = 1 == t,
        r = 2 == t,
        i = 3 == t,
        o = 4 == t,
        a = 6 == t,
        s = 5 == t || a,
        u = e || H
      return function(e, c, h) {
        for (
          var l,
            p,
            f = Object(L(e)),
            d = D(f),
            v = R(c, h, 3),
            y = M(d.length),
            _ = 0,
            g = n ? u(e, y) : r ? u(e, 0) : void 0;
          y > _;
          _++
        )
          if ((s || _ in d) && ((p = v((l = d[_]), _, f)), t))
            if (n) g[_] = p
            else if (p)
              switch (t) {
                case 3:
                  return !0
                case 5:
                  return l
                case 6:
                  return _
                case 2:
                  g.push(l)
              }
            else if (o) return !1
        return a ? -1 : i || o ? o : g
      }
    },
    G = V('unscopables'),
    Q = Array.prototype
  void 0 == Q[G] && w(Q, G, {})
  var z = function(t) {
      Q[G][t] = !0
    },
    Y = K(5),
    X = !0
  'find' in [] &&
    Array(1).find(function() {
      X = !1
    }),
    k(k.P + k.F * X, 'Array', {
      find: function(t) {
        return Y(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }),
    z('find')
  l.Array.find
  var $ = K(6),
    J = !0
  'findIndex' in [] &&
    Array(1).findIndex(function() {
      J = !1
    }),
    k(k.P + k.F * J, 'Array', {
      findIndex: function(t) {
        return $(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }),
    z('findIndex')
  l.Array.findIndex
  var Z = V('match'),
    tt = function(t, e, n) {
      if (p((r = e)) && (void 0 !== (i = r[Z]) ? i : 'RegExp' == P(r)))
        throw TypeError('String#' + n + " doesn't accept regex!")
      var r, i
      return String(L(t))
    },
    et = V('match'),
    nt = ''.startsWith
  k(
    k.P +
      k.F *
        (function(t) {
          var e = /./
          try {
            '/./'[t](e)
          } catch (n) {
            try {
              return (e[et] = !1), !'/./'[t](e)
            } catch (t) {}
          }
          return !0
        })('startsWith'),
    'String',
    {
      startsWith: function(t) {
        var e = tt(this, t, 'startsWith'),
          n = M(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)
          ),
          r = String(t)
        return nt ? nt.call(e, r, n) : e.slice(n, n + r.length) === r
      }
    }
  )
  l.String.startsWith
  var rt =
    Object.setPrototypeOf ||
    ({__proto__: []} instanceof Array &&
      function(t, e) {
        t.__proto__ = e
      }) ||
    function(t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
    }
  function it(t, e) {
    function n() {
      this.constructor = t
    }
    rt(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
  }
  var ot =
    Object.assign ||
    function(t) {
      for (var e, n = 1, r = arguments.length; n < r; n++)
        for (var i in (e = arguments[n]))
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
      return t
    }
  function at(t, e, n, r) {
    return new (n || (n = Promise))(function(i, o) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (t) {
          o(t)
        }
      }
      function s(t) {
        try {
          u(r.throw(t))
        } catch (t) {
          o(t)
        }
      }
      function u(t) {
        t.done
          ? i(t.value)
          : new n(function(e) {
              e(t.value)
            }).then(a, s)
      }
      u((r = r.apply(t, e || [])).next())
    })
  }
  function st(t, e) {
    var n,
      r,
      i,
      o,
      a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1]
          return i[1]
        },
        trys: [],
        ops: []
      }
    return (
      (o = {next: s(0), throw: s(1), return: s(2)}),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function() {
          return this
        }),
      o
    )
    function s(o) {
      return function(s) {
        return (function(o) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i
              switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                case 0:
                case 1:
                  i = o
                  break
                case 4:
                  return a.label++, {value: o[1], done: !1}
                case 5:
                  a.label++, (r = o[1]), (o = [0])
                  continue
                case 7:
                  ;(o = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                    (6 === o[0] || 2 === o[0])
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    a.label = o[1]
                    break
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    ;(a.label = i[1]), (i = o)
                    break
                  }
                  if (i && a.label < i[2]) {
                    ;(a.label = i[2]), a.ops.push(o)
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              o = e.call(t, a)
            } catch (t) {
              ;(o = [6, t]), (r = 0)
            } finally {
              n = i = 0
            }
          if (5 & o[0]) throw o[1]
          return {value: o[0] ? o[1] : void 0, done: !0}
        })([o, s])
      }
    }
  }
  var ut = !1,
    ct = !1,
    ht = '${JSCORE_VERSION}',
    lt = function(t, e) {
      if (!t) throw pt(e)
    },
    pt = function(t) {
      return new Error(
        'Firebase Database (' + ht + ') INTERNAL ASSERT FAILED: ' + t
      )
    },
    ft = function(t) {
      for (var e = [], n = 0, r = 0; r < t.length; r++) {
        var i = t.charCodeAt(r)
        i < 128
          ? (e[n++] = i)
          : i < 2048
            ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
            : 55296 == (64512 & i) &&
              r + 1 < t.length &&
              56320 == (64512 & t.charCodeAt(r + 1))
              ? ((i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r))),
                (e[n++] = (i >> 18) | 240),
                (e[n++] = ((i >> 12) & 63) | 128),
                (e[n++] = ((i >> 6) & 63) | 128),
                (e[n++] = (63 & i) | 128))
              : ((e[n++] = (i >> 12) | 224),
                (e[n++] = ((i >> 6) & 63) | 128),
                (e[n++] = (63 & i) | 128))
      }
      return e
    },
    dt = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE:
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/='
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.'
      },
      HAS_NATIVE_SUPPORT: 'function' == typeof atob,
      encodeByteArray: function(t, e) {
        if (!Array.isArray(t))
          throw Error('encodeByteArray takes an array as a parameter')
        this.init_()
        for (
          var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            r = [],
            i = 0;
          i < t.length;
          i += 3
        ) {
          var o = t[i],
            a = i + 1 < t.length,
            s = a ? t[i + 1] : 0,
            u = i + 2 < t.length,
            c = u ? t[i + 2] : 0,
            h = o >> 2,
            l = ((3 & o) << 4) | (s >> 4),
            p = ((15 & s) << 2) | (c >> 6),
            f = 63 & c
          u || ((f = 64), a || (p = 64)), r.push(n[h], n[l], n[p], n[f])
        }
        return r.join('')
      },
      encodeString: function(t, e) {
        return this.HAS_NATIVE_SUPPORT && !e
          ? btoa(t)
          : this.encodeByteArray(ft(t), e)
      },
      decodeString: function(t, e) {
        return this.HAS_NATIVE_SUPPORT && !e
          ? atob(t)
          : (function(t) {
              for (var e = [], n = 0, r = 0; n < t.length; ) {
                var i = t[n++]
                if (i < 128) e[r++] = String.fromCharCode(i)
                else if (i > 191 && i < 224) {
                  var o = t[n++]
                  e[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o))
                } else if (i > 239 && i < 365) {
                  var a =
                    (((7 & i) << 18) |
                      ((63 & (o = t[n++])) << 12) |
                      ((63 & (s = t[n++])) << 6) |
                      (63 & t[n++])) -
                    65536
                  ;(e[r++] = String.fromCharCode(55296 + (a >> 10))),
                    (e[r++] = String.fromCharCode(56320 + (1023 & a)))
                } else {
                  o = t[n++]
                  var s = t[n++]
                  e[r++] = String.fromCharCode(
                    ((15 & i) << 12) | ((63 & o) << 6) | (63 & s)
                  )
                }
              }
              return e.join('')
            })(this.decodeStringToByteArray(t, e))
      },
      decodeStringToByteArray: function(t, e) {
        this.init_()
        for (
          var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            r = [],
            i = 0;
          i < t.length;

        ) {
          var o = n[t.charAt(i++)],
            a = i < t.length ? n[t.charAt(i)] : 0,
            s = ++i < t.length ? n[t.charAt(i)] : 64,
            u = ++i < t.length ? n[t.charAt(i)] : 64
          if ((++i, null == o || null == a || null == s || null == u))
            throw Error()
          var c = (o << 2) | (a >> 4)
          if ((r.push(c), 64 != s)) {
            var h = ((a << 4) & 240) | (s >> 2)
            if ((r.push(h), 64 != u)) {
              var l = ((s << 6) & 192) | u
              r.push(l)
            }
          }
        }
        return r
      },
      init_: function() {
        if (!this.byteToCharMap_) {
          ;(this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {})
          for (var t = 0; t < this.ENCODED_VALS.length; t++)
            (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
              (this.charToByteMap_[this.byteToCharMap_[t]] = t),
              (this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(
                t
              )),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
              t >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t))
        }
      }
    },
    vt = function(t) {
      try {
        return dt.decodeString(t, !0)
      } catch (t) {
        console.error('base64Decode failed: ', t)
      }
      return null
    }
  function yt(t) {
    return _t(void 0, t)
  }
  function _t(t, e) {
    if (!(e instanceof Object)) return e
    switch (e.constructor) {
      case Date:
        return new Date(e.getTime())
      case Object:
        void 0 === t && (t = {})
        break
      case Array:
        t = []
        break
      default:
        return e
    }
    for (var n in e) e.hasOwnProperty(n) && (t[n] = _t(t[n], e[n]))
    return t
  }
  function gt(t, e, n) {
    t[e] = n
  }
  var mt = (function() {
      function t() {
        var t = this
        this.promise = new Promise(function(e, n) {
          ;(t.resolve = e), (t.reject = n)
        })
      }
      return (
        (t.prototype.wrapCallback = function(t) {
          var e = this
          return function(n, r) {
            n ? e.reject(n) : e.resolve(r),
              'function' == typeof t &&
                (e.promise.catch(function() {}),
                1 === t.length ? t(n) : t(n, r))
          }
        }),
        t
      )
    })(),
    bt = function() {
      return (
        'undefined' != typeof window &&
        !!(window.cordova || window.phonegap || window.PhoneGap) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
          'undefined' != typeof navigator &&
          'string' == typeof navigator.userAgent
            ? navigator.userAgent
            : ''
        )
      )
    },
    wt = function() {
      return !0 === ut || !0 === ct
    },
    Et = 'FirebaseError',
    Tt = Error.captureStackTrace,
    Ct = (function() {
      return function(t, e) {
        if (((this.code = t), (this.message = e), Tt))
          Tt(this, St.prototype.create)
        else {
          var n = Error.apply(this, arguments)
          ;(this.name = Et),
            Object.defineProperty(this, 'stack', {
              get: function() {
                return n.stack
              }
            })
        }
      }
    })()
  ;(Ct.prototype = Object.create(Error.prototype)),
    (Ct.prototype.constructor = Ct),
    (Ct.prototype.name = Et)
  var St = (function() {
    function t(t, e, n) {
      ;(this.service = t),
        (this.serviceName = e),
        (this.errors = n),
        (this.pattern = /\{\$([^}]+)}/g)
    }
    return (
      (t.prototype.create = function(t, e) {
        void 0 === e && (e = {})
        var n,
          r = this.errors[t],
          i = this.service + '/' + t
        ;(n =
          void 0 === r
            ? 'Error'
            : r.replace(this.pattern, function(t, n) {
                var r = e[n]
                return void 0 !== r ? r.toString() : '<' + n + '?>'
              })),
          (n = this.serviceName + ': ' + n + ' (' + i + ').')
        var o = new Ct(i, n)
        for (var a in e)
          e.hasOwnProperty(a) && '_' !== a.slice(-1) && (o[a] = e[a])
        return o
      }),
      t
    )
  })()
  function It(t) {
    return JSON.parse(t)
  }
  function Nt(t) {
    return JSON.stringify(t)
  }
  var Rt = function(t) {
      var e = {},
        n = {},
        r = {},
        i = ''
      try {
        var o = t.split('.')
        ;(e = It(vt(o[0]) || '')),
          (n = It(vt(o[1]) || '')),
          (i = o[2]),
          (r = n.d || {}),
          delete n.d
      } catch (t) {}
      return {header: e, claims: n, data: r, signature: i}
    },
    At = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    },
    kt = function(t, e) {
      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
    },
    Ot = function(t, e) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
    },
    Pt = function(t) {
      return (
        (e = {}),
        Ot(t, function(t, n) {
          e[t] = n
        }),
        e
      )
      var e
    },
    Dt = function(t) {
      for (var e in t) return !1
      return !0
    },
    Lt = function(t) {
      var e = 0
      for (var n in t) e++
      return e
    },
    xt = function(t, e, n) {
      var r = {}
      for (var i in t) r[i] = e.call(n, t[i], i, t)
      return r
    },
    Ft = function(t, e, n) {
      for (var r in t) if (e.call(n, t[r], r, t)) return r
    },
    Ut = function(t) {
      for (var e in t) return e
    },
    Mt = (function(t) {
      function e() {
        var e = t.call(this) || this
        ;(e.chain_ = []),
          (e.buf_ = []),
          (e.W_ = []),
          (e.pad_ = []),
          (e.inbuf_ = 0),
          (e.total_ = 0),
          (e.blockSize = 64),
          (e.pad_[0] = 128)
        for (var n = 1; n < e.blockSize; ++n) e.pad_[n] = 0
        return e.reset(), e
      }
      return (
        it(e, t),
        (e.prototype.reset = function() {
          ;(this.chain_[0] = 1732584193),
            (this.chain_[1] = 4023233417),
            (this.chain_[2] = 2562383102),
            (this.chain_[3] = 271733878),
            (this.chain_[4] = 3285377520),
            (this.inbuf_ = 0),
            (this.total_ = 0)
        }),
        (e.prototype.compress_ = function(t, e) {
          e || (e = 0)
          var n = this.W_
          if ('string' == typeof t)
            for (var r = 0; r < 16; r++)
              (n[r] =
                (t.charCodeAt(e) << 24) |
                (t.charCodeAt(e + 1) << 16) |
                (t.charCodeAt(e + 2) << 8) |
                t.charCodeAt(e + 3)),
                (e += 4)
          else
            for (r = 0; r < 16; r++)
              (n[r] =
                (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]),
                (e += 4)
          for (r = 16; r < 80; r++) {
            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16]
            n[r] = 4294967295 & ((i << 1) | (i >>> 31))
          }
          var o,
            a,
            s = this.chain_[0],
            u = this.chain_[1],
            c = this.chain_[2],
            h = this.chain_[3],
            l = this.chain_[4]
          for (r = 0; r < 80; r++) {
            r < 40
              ? r < 20
                ? ((o = h ^ (u & (c ^ h))), (a = 1518500249))
                : ((o = u ^ c ^ h), (a = 1859775393))
              : r < 60
                ? ((o = (u & c) | (h & (u | c))), (a = 2400959708))
                : ((o = u ^ c ^ h), (a = 3395469782))
            i = (((s << 5) | (s >>> 27)) + o + l + a + n[r]) & 4294967295
            ;(l = h),
              (h = c),
              (c = 4294967295 & ((u << 30) | (u >>> 2))),
              (u = s),
              (s = i)
          }
          ;(this.chain_[0] = (this.chain_[0] + s) & 4294967295),
            (this.chain_[1] = (this.chain_[1] + u) & 4294967295),
            (this.chain_[2] = (this.chain_[2] + c) & 4294967295),
            (this.chain_[3] = (this.chain_[3] + h) & 4294967295),
            (this.chain_[4] = (this.chain_[4] + l) & 4294967295)
        }),
        (e.prototype.update = function(t, e) {
          if (null != t) {
            void 0 === e && (e = t.length)
            for (
              var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_;
              r < e;

            ) {
              if (0 == o)
                for (; r <= n; ) this.compress_(t, r), (r += this.blockSize)
              if ('string' == typeof t) {
                for (; r < e; )
                  if (((i[o] = t.charCodeAt(r)), ++r, ++o == this.blockSize)) {
                    this.compress_(i), (o = 0)
                    break
                  }
              } else
                for (; r < e; )
                  if (((i[o] = t[r]), ++r, ++o == this.blockSize)) {
                    this.compress_(i), (o = 0)
                    break
                  }
            }
            ;(this.inbuf_ = o), (this.total_ += e)
          }
        }),
        (e.prototype.digest = function() {
          var t = [],
            e = 8 * this.total_
          this.inbuf_ < 56
            ? this.update(this.pad_, 56 - this.inbuf_)
            : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56))
          for (var n = this.blockSize - 1; n >= 56; n--)
            (this.buf_[n] = 255 & e), (e /= 256)
          this.compress_(this.buf_)
          var r = 0
          for (n = 0; n < 5; n++)
            for (var i = 24; i >= 0; i -= 8)
              (t[r] = (this.chain_[n] >> i) & 255), ++r
          return t
        }),
        e
      )
    })(
      (function() {
        return function() {
          this.blockSize = -1
        }
      })()
    )
  function Wt(t, e) {
    var n = new Bt(t, e)
    return n.subscribe.bind(n)
  }
  var Bt = (function() {
    function t(t, e) {
      var n = this
      ;(this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = e),
        this.task
          .then(function() {
            t(n)
          })
          .catch(function(t) {
            n.error(t)
          })
    }
    return (
      (t.prototype.next = function(t) {
        this.forEachObserver(function(e) {
          e.next(t)
        })
      }),
      (t.prototype.error = function(t) {
        this.forEachObserver(function(e) {
          e.error(t)
        }),
          this.close(t)
      }),
      (t.prototype.complete = function() {
        this.forEachObserver(function(t) {
          t.complete()
        }),
          this.close()
      }),
      (t.prototype.subscribe = function(t, e, n) {
        var r,
          i = this
        if (void 0 === t && void 0 === e && void 0 === n)
          throw new Error('Missing Observer.')
        void 0 ===
          (r = (function(t, e) {
            if ('object' != typeof t || null === t) return !1
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n]
              if (i in t && 'function' == typeof t[i]) return !0
            }
            return !1
          })(t, ['next', 'error', 'complete'])
            ? t
            : {next: t, error: e, complete: n}).next && (r.next = jt),
          void 0 === r.error && (r.error = jt),
          void 0 === r.complete && (r.complete = jt)
        var o = this.unsubscribeOne.bind(this, this.observers.length)
        return (
          this.finalized &&
            this.task.then(function() {
              try {
                i.finalError ? r.error(i.finalError) : r.complete()
              } catch (t) {}
            }),
          this.observers.push(r),
          o
        )
      }),
      (t.prototype.unsubscribeOne = function(t) {
        void 0 !== this.observers &&
          void 0 !== this.observers[t] &&
          (delete this.observers[t],
          (this.observerCount -= 1),
          0 === this.observerCount &&
            void 0 !== this.onNoObservers &&
            this.onNoObservers(this))
      }),
      (t.prototype.forEachObserver = function(t) {
        if (!this.finalized)
          for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t)
      }),
      (t.prototype.sendOne = function(t, e) {
        var n = this
        this.task.then(function() {
          if (void 0 !== n.observers && void 0 !== n.observers[t])
            try {
              e(n.observers[t])
            } catch (t) {
              'undefined' != typeof console && console.error && console.error(t)
            }
        })
      }),
      (t.prototype.close = function(t) {
        var e = this
        this.finalized ||
          ((this.finalized = !0),
          void 0 !== t && (this.finalError = t),
          this.task.then(function() {
            ;(e.observers = void 0), (e.onNoObservers = void 0)
          }))
      }),
      t
    )
  })()
  function jt() {}
  var Vt = function(t, e, n, r) {
    var i
    if (
      (r < e
        ? (i = 'at least ' + e)
        : r > n && (i = 0 === n ? 'none' : 'no more than ' + n),
      i)
    )
      throw new Error(
        t +
          ' failed: Was called with ' +
          r +
          (1 === r ? ' argument.' : ' arguments.') +
          ' Expects ' +
          i +
          '.'
      )
  }
  function qt(t, e, n) {
    var r = ''
    switch (e) {
      case 1:
        r = n ? 'first' : 'First'
        break
      case 2:
        r = n ? 'second' : 'Second'
        break
      case 3:
        r = n ? 'third' : 'Third'
        break
      case 4:
        r = n ? 'fourth' : 'Fourth'
        break
      default:
        throw new Error(
          'errorPrefix called with argumentNumber > 4.  Need to update it?'
        )
    }
    var i = t + ' failed: '
    return (i += r + ' argument ')
  }
  function Ht(t, e, n, r) {
    if ((!r || n) && 'function' != typeof n)
      throw new Error(qt(t, e, r) + 'must be a valid function.')
  }
  function Kt(t, e, n, r) {
    if ((!r || n) && ('object' != typeof n || null === n))
      throw new Error(qt(t, e, r) + 'must be a valid context object.')
  }
  var Gt = function(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        var r = t.charCodeAt(n)
        r < 128
          ? e++
          : r < 2048
            ? (e += 2)
            : r >= 55296 && r <= 56319 ? ((e += 4), n++) : (e += 3)
      }
      return e
    },
    Qt = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    },
    zt = '[DEFAULT]',
    Yt = [],
    Xt = (function() {
      function t(t, e, n) {
        ;(this.firebase_ = n),
          (this.isDeleted_ = !1),
          (this.services_ = {}),
          (this.name_ = e.name),
          (this._automaticDataCollectionEnabled =
            e.automaticDataCollectionEnabled || !1),
          (this.options_ = yt(t)),
          (this.INTERNAL = {
            getUid: function() {
              return null
            },
            getToken: function() {
              return Promise.resolve(null)
            },
            addAuthTokenListener: function(t) {
              Yt.push(t),
                setTimeout(function() {
                  return t(null)
                }, 0)
            },
            removeAuthTokenListener: function(t) {
              Yt = Yt.filter(function(e) {
                return e !== t
              })
            }
          })
      }
      return (
        Object.defineProperty(t.prototype, 'automaticDataCollectionEnabled', {
          get: function() {
            return this.checkDestroyed_(), this._automaticDataCollectionEnabled
          },
          set: function(t) {
            this.checkDestroyed_(), (this._automaticDataCollectionEnabled = t)
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'name', {
          get: function() {
            return this.checkDestroyed_(), this.name_
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'options', {
          get: function() {
            return this.checkDestroyed_(), this.options_
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.delete = function() {
          var t = this
          return new Promise(function(e) {
            t.checkDestroyed_(), e()
          })
            .then(function() {
              t.firebase_.INTERNAL.removeApp(t.name_)
              var e = []
              return (
                Object.keys(t.services_).forEach(function(n) {
                  Object.keys(t.services_[n]).forEach(function(r) {
                    e.push(t.services_[n][r])
                  })
                }),
                Promise.all(
                  e.map(function(t) {
                    return t.INTERNAL.delete()
                  })
                )
              )
            })
            .then(function() {
              ;(t.isDeleted_ = !0), (t.services_ = {})
            })
        }),
        (t.prototype._getService = function(t, e) {
          if (
            (void 0 === e && (e = zt),
            this.checkDestroyed_(),
            this.services_[t] || (this.services_[t] = {}),
            !this.services_[t][e])
          ) {
            var n = e !== zt ? e : void 0,
              r = this.firebase_.INTERNAL.factories[t](
                this,
                this.extendApp.bind(this),
                n
              )
            this.services_[t][e] = r
          }
          return this.services_[t][e]
        }),
        (t.prototype.extendApp = function(t) {
          var e = this
          _t(this, t),
            t.INTERNAL &&
              t.INTERNAL.addAuthTokenListener &&
              (Yt.forEach(function(t) {
                e.INTERNAL.addAuthTokenListener(t)
              }),
              (Yt = []))
        }),
        (t.prototype.checkDestroyed_ = function() {
          this.isDeleted_ && $t('app-deleted', {name: this.name_})
        }),
        t
      )
    })()
  function $t(t, e) {
    throw Zt.create(t, e)
  }
  ;(Xt.prototype.name && Xt.prototype.options) ||
    Xt.prototype.delete ||
    console.log('dc')
  var Jt,
    Zt = new St('app', 'Firebase', {
      'no-app':
        "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
      'bad-app-name': "Illegal App name: '{$name}",
      'duplicate-app': "Firebase App named '{$name}' already exists",
      'app-deleted': "Firebase App named '{$name}' already deleted",
      'duplicate-service':
        "Firebase service named '{$name}' already registered",
      'sa-not-supported':
        'Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain',
      'invalid-app-argument':
        'firebase.{$name}() takes either no argument or a Firebase App instance.'
    }),
    te = (function t() {
      var e = {},
        n = {},
        r = {},
        i = {
          __esModule: !0,
          initializeApp: function(t, n) {
            if (
              (void 0 === n && (n = {}), 'object' != typeof n || null === n)
            ) {
              var r = n
              n = {name: r}
            }
            var o = n
            void 0 === o.name && (o.name = zt)
            var a = o.name
            ;('string' == typeof a && a) || $t('bad-app-name', {name: a + ''}),
              Qt(e, a) && $t('duplicate-app', {name: a})
            var u = new Xt(t, o, i)
            return (e[a] = u), s(u, 'create'), u
          },
          app: o,
          apps: null,
          Promise: Promise,
          SDK_VERSION: '4.13.0',
          INTERNAL: {
            registerService: function(t, e, s, u, c) {
              n[t] && $t('duplicate-service', {name: t}),
                (n[t] = e),
                u &&
                  ((r[t] = u),
                  a().forEach(function(t) {
                    u('create', t)
                  }))
              var h = function(e) {
                return (
                  void 0 === e && (e = o()),
                  'function' != typeof e[t] &&
                    $t('invalid-app-argument', {name: t}),
                  e[t]()
                )
              }
              return (
                void 0 !== s && _t(h, s),
                (i[t] = h),
                (Xt.prototype[t] = function() {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n]
                  return this._getService.bind(this, t).apply(this, c ? e : [])
                }),
                h
              )
            },
            createFirebaseNamespace: t,
            extendNamespace: function(t) {
              _t(i, t)
            },
            createSubscribe: Wt,
            ErrorFactory: St,
            removeApp: function(t) {
              s(e[t], 'delete'), delete e[t]
            },
            factories: n,
            useAsService: u,
            Promise: Promise,
            deepExtend: _t
          }
        }
      function o(t) {
        return Qt(e, (t = t || zt)) || $t('no-app', {name: t}), e[t]
      }
      function a() {
        return Object.keys(e).map(function(t) {
          return e[t]
        })
      }
      function s(t, e) {
        Object.keys(n).forEach(function(n) {
          var i = u(t, n)
          null !== i && r[i] && r[i](e, t)
        })
      }
      function u(t, e) {
        if ('serverAuth' === e) return null
        var n = e
        return t.options, n
      }
      return (
        gt(i, 'default', i),
        Object.defineProperty(i, 'apps', {get: a}),
        gt(o, 'App', Xt),
        i
      )
    })(),
    ee = Object.freeze({default: te, firebase: te}),
    ne = (ee && te) || ee,
    re = ne.default,
    ie =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self ? self : {}
  ;(function() {
    var t,
      e = ne.default,
      n = n || {},
      r = this
    function i(t) {
      return 'string' == typeof t
    }
    function o(t) {
      return 'boolean' == typeof t
    }
    function a() {}
    function s(t) {
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
    function u(t) {
      return null === t
    }
    function c(t) {
      return 'array' == s(t)
    }
    function h(t) {
      var e = s(t)
      return 'array' == e || ('object' == e && 'number' == typeof t.length)
    }
    function l(t) {
      return 'function' == s(t)
    }
    function p(t) {
      var e = typeof t
      return ('object' == e && null != t) || 'function' == e
    }
    var f = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
      d = 0
    function v(t, e, n) {
      return t.call.apply(t.bind, arguments)
    }
    function y(t, e, n) {
      if (!t) throw Error()
      if (2 < arguments.length) {
        var r = Array.prototype.slice.call(arguments, 2)
        return function() {
          var n = Array.prototype.slice.call(arguments)
          return Array.prototype.unshift.apply(n, r), t.apply(e, n)
        }
      }
      return function() {
        return t.apply(e, arguments)
      }
    }
    function _(t, e, n) {
      return (_ =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? v
          : y).apply(null, arguments)
    }
    function g(t, e) {
      var n = Array.prototype.slice.call(arguments, 1)
      return function() {
        var e = n.slice()
        return e.push.apply(e, arguments), t.apply(this, e)
      }
    }
    var m =
      Date.now ||
      function() {
        return +new Date()
      }
    function b(t, e) {
      function n() {}
      ;(n.prototype = e.prototype),
        (t.lb = e.prototype),
        (t.prototype = new n()),
        (t.prototype.constructor = t),
        (t.ad = function(t, n, r) {
          for (
            var i = Array(arguments.length - 2), o = 2;
            o < arguments.length;
            o++
          )
            i[o - 2] = arguments[o]
          return e.prototype[n].apply(t, i)
        })
    }
    function w(t) {
      ;(t.prototype.then = t.prototype.then), (t.prototype.$goog_Thenable = !0)
    }
    function E(t) {
      if (!t) return !1
      try {
        return !!t.$goog_Thenable
      } catch (t) {
        return !1
      }
    }
    function T(t) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, T)
      else {
        var e = Error().stack
        e && (this.stack = e)
      }
      t && (this.message = String(t))
    }
    function C(t, e) {
      for (var n = '', r = (t = t.split('%s')).length - 1, i = 0; i < r; i++)
        n += t[i] + (i < e.length ? e[i] : '%s')
      T.call(this, n + t[r])
    }
    function S(t, e) {
      throw new C(
        'Failure' + (t ? ': ' + t : ''),
        Array.prototype.slice.call(arguments, 1)
      )
    }
    function I(t, e) {
      ;(this.c = t), (this.f = e), (this.b = 0), (this.a = null)
    }
    function N(t, e) {
      t.f(e), 100 > t.b && (t.b++, (e.next = t.a), (t.a = e))
    }
    function R() {
      this.b = this.a = null
    }
    b(T, Error),
      (T.prototype.name = 'CustomError'),
      b(C, T),
      (C.prototype.name = 'AssertionError'),
      (I.prototype.get = function() {
        if (0 < this.b) {
          this.b--
          var t = this.a
          ;(this.a = t.next), (t.next = null)
        } else t = this.c()
        return t
      })
    var A = new I(
      function() {
        return new O()
      },
      function(t) {
        t.reset()
      }
    )
    function k() {
      var t = ft,
        e = null
      return (
        t.a &&
          ((e = t.a), (t.a = t.a.next), t.a || (t.b = null), (e.next = null)),
        e
      )
    }
    function O() {
      this.next = this.b = this.a = null
    }
    ;(R.prototype.add = function(t, e) {
      var n = A.get()
      n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n)
    }),
      (O.prototype.set = function(t, e) {
        ;(this.a = t), (this.b = e), (this.next = null)
      }),
      (O.prototype.reset = function() {
        this.next = this.b = this.a = null
      })
    var P = Array.prototype.indexOf
        ? function(t, e) {
            return Array.prototype.indexOf.call(t, e, void 0)
          }
        : function(t, e) {
            if (i(t)) return i(e) && 1 == e.length ? t.indexOf(e, 0) : -1
            for (var n = 0; n < t.length; n++)
              if (n in t && t[n] === e) return n
            return -1
          },
      D = Array.prototype.forEach
        ? function(t, e, n) {
            Array.prototype.forEach.call(t, e, n)
          }
        : function(t, e, n) {
            for (
              var r = t.length, o = i(t) ? t.split('') : t, a = 0;
              a < r;
              a++
            )
              a in o && e.call(n, o[a], a, t)
          }
    var L = Array.prototype.map
        ? function(t, e) {
            return Array.prototype.map.call(t, e, void 0)
          }
        : function(t, e) {
            for (
              var n = t.length, r = Array(n), o = i(t) ? t.split('') : t, a = 0;
              a < n;
              a++
            )
              a in o && (r[a] = e.call(void 0, o[a], a, t))
            return r
          },
      x = Array.prototype.some
        ? function(t, e) {
            return Array.prototype.some.call(t, e, void 0)
          }
        : function(t, e) {
            for (
              var n = t.length, r = i(t) ? t.split('') : t, o = 0;
              o < n;
              o++
            )
              if (o in r && e.call(void 0, r[o], o, t)) return !0
            return !1
          }
    function F(t, e) {
      return 0 <= P(t, e)
    }
    function U(t, e) {
      var n
      return (n = 0 <= (e = P(t, e))) && Array.prototype.splice.call(t, e, 1), n
    }
    function M(t, e) {
      !(function(t, e) {
        var n = t.length,
          r = i(t) ? t.split('') : t
        for (--n; 0 <= n; --n) n in r && e.call(void 0, r[n], n, t)
      })(t, function(n, r) {
        e.call(void 0, n, r, t) &&
          1 == Array.prototype.splice.call(t, r, 1).length &&
          0
      })
    }
    function W(t) {
      return Array.prototype.concat.apply([], arguments)
    }
    function B(t) {
      var e = t.length
      if (0 < e) {
        for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r]
        return n
      }
      return []
    }
    function j(t, e) {
      for (
        var n = t.split('%s'),
          r = '',
          i = Array.prototype.slice.call(arguments, 1);
        i.length && 1 < n.length;

      )
        r += n.shift() + i.shift()
      return r + n.join('%s')
    }
    var V = String.prototype.trim
      ? function(t) {
          return t.trim()
        }
      : function(t) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
        }
    function q(t) {
      return $.test(t)
        ? (-1 != t.indexOf('&') && (t = t.replace(K, '&amp;')),
          -1 != t.indexOf('<') && (t = t.replace(G, '&lt;')),
          -1 != t.indexOf('>') && (t = t.replace(Q, '&gt;')),
          -1 != t.indexOf('"') && (t = t.replace(z, '&quot;')),
          -1 != t.indexOf("'") && (t = t.replace(Y, '&#39;')),
          -1 != t.indexOf('\0') && (t = t.replace(X, '&#0;')),
          t)
        : t
    }
    var H,
      K = /&/g,
      G = /</g,
      Q = />/g,
      z = /"/g,
      Y = /'/g,
      X = /\x00/g,
      $ = /[\x00&<>"']/
    function J(t, e) {
      return -1 != t.indexOf(e)
    }
    function Z(t, e) {
      return t < e ? -1 : t > e ? 1 : 0
    }
    t: {
      var tt = r.navigator
      if (tt) {
        var et = tt.userAgent
        if (et) {
          H = et
          break t
        }
      }
      H = ''
    }
    function nt(t) {
      return J(H, t)
    }
    function rt(t, e) {
      for (var n in t) e.call(void 0, t[n], n, t)
    }
    function it(t) {
      for (var e in t) return !1
      return !0
    }
    function ot(t) {
      var e,
        n = {}
      for (e in t) n[e] = t[e]
      return n
    }
    var at,
      st,
      ut = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
        ' '
      )
    function ct(t, e) {
      for (var n, r, i = 1; i < arguments.length; i++) {
        for (n in (r = arguments[i])) t[n] = r[n]
        for (var o = 0; o < ut.length; o++)
          (n = ut[o]),
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
      }
    }
    function ht(t) {
      r.setTimeout(function() {
        throw t
      }, 0)
    }
    function lt(t, e) {
      st ||
        (function() {
          if (r.Promise && r.Promise.resolve) {
            var t = r.Promise.resolve(void 0)
            st = function() {
              t.then(dt)
            }
          } else
            st = function() {
              var t = dt
              !l(r.setImmediate) ||
              (r.Window &&
                r.Window.prototype &&
                !nt('Edge') &&
                r.Window.prototype.setImmediate == r.setImmediate)
                ? (at ||
                    (at = (function() {
                      var t = r.MessageChannel
                      if (
                        (void 0 === t &&
                          'undefined' != typeof window &&
                          window.postMessage &&
                          window.addEventListener &&
                          !nt('Presto') &&
                          (t = function() {
                            var t = document.createElement('IFRAME')
                            ;(t.style.display = 'none'),
                              (t.src = ''),
                              document.documentElement.appendChild(t)
                            var e = t.contentWindow
                            ;(t = e.document).open(), t.write(''), t.close()
                            var n = 'callImmediate' + Math.random(),
                              r =
                                'file:' == e.location.protocol
                                  ? '*'
                                  : e.location.protocol + '//' + e.location.host
                            ;(t = _(function(t) {
                              ;('*' != r && t.origin != r) ||
                                t.data != n ||
                                this.port1.onmessage()
                            }, this)),
                              e.addEventListener('message', t, !1),
                              (this.port1 = {}),
                              (this.port2 = {
                                postMessage: function() {
                                  e.postMessage(n, r)
                                }
                              })
                          }),
                        void 0 !== t && !nt('Trident') && !nt('MSIE'))
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
                        'onreadystatechange' in document.createElement('SCRIPT')
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
                  at(t))
                : r.setImmediate(t)
            }
        })(),
        pt || (st(), (pt = !0)),
        ft.add(t, e)
    }
    var pt = !1,
      ft = new R()
    function dt() {
      for (var t; (t = k()); ) {
        try {
          t.a.call(t.b)
        } catch (t) {
          ht(t)
        }
        N(A, t)
      }
      pt = !1
    }
    function vt(t, e) {
      if (
        ((this.a = yt),
        (this.j = void 0),
        (this.f = this.b = this.c = null),
        (this.g = this.h = !1),
        t != a)
      )
        try {
          var n = this
          t.call(
            e,
            function(t) {
              Nt(n, _t, t)
            },
            function(t) {
              if (!(t instanceof Lt))
                try {
                  if (t instanceof Error) throw t
                  throw Error('Promise rejected.')
                } catch (t) {}
              Nt(n, gt, t)
            }
          )
        } catch (t) {
          Nt(this, gt, t)
        }
    }
    var yt = 0,
      _t = 2,
      gt = 3
    function mt() {
      ;(this.next = this.f = this.b = this.g = this.a = null), (this.c = !1)
    }
    mt.prototype.reset = function() {
      ;(this.f = this.b = this.g = this.a = null), (this.c = !1)
    }
    var bt = new I(
      function() {
        return new mt()
      },
      function(t) {
        t.reset()
      }
    )
    function wt(t, e, n) {
      var r = bt.get()
      return (r.g = t), (r.b = e), (r.f = n), r
    }
    function Et(t) {
      if (t instanceof vt) return t
      var e = new vt(a)
      return Nt(e, _t, t), e
    }
    function Tt(t) {
      return new vt(function(e, n) {
        n(t)
      })
    }
    function Ct(t, e, n) {
      Rt(t, e, n, null) || lt(g(e, t))
    }
    function St(t, e) {
      t.b || (t.a != _t && t.a != gt) || At(t),
        t.f ? (t.f.next = e) : (t.b = e),
        (t.f = e)
    }
    function It(t, e, n, r) {
      var i = wt(null, null, null)
      return (
        (i.a = new vt(function(t, o) {
          ;(i.g = e
            ? function(n) {
                try {
                  var i = e.call(r, n)
                  t(i)
                } catch (t) {
                  o(t)
                }
              }
            : t),
            (i.b = n
              ? function(e) {
                  try {
                    var i = n.call(r, e)
                    void 0 === i && e instanceof Lt ? o(e) : t(i)
                  } catch (t) {
                    o(t)
                  }
                }
              : o)
        })),
        (i.a.c = t),
        St(t, i),
        i.a
      )
    }
    function Nt(t, e, n) {
      t.a == yt &&
        (t === n &&
          ((e = gt), (n = new TypeError('Promise cannot resolve to itself'))),
        (t.a = 1),
        Rt(n, t.Kc, t.Lc, t) ||
          ((t.j = n),
          (t.a = e),
          (t.c = null),
          At(t),
          e != gt ||
            n instanceof Lt ||
            (function(t, e) {
              ;(t.g = !0),
                lt(function() {
                  t.g && Dt.call(null, e)
                })
            })(t, n)))
    }
    function Rt(t, e, n, r) {
      if (t instanceof vt) return St(t, wt(e || a, n || null, r)), !0
      if (E(t)) return t.then(e, n, r), !0
      if (p(t))
        try {
          var i = t.then
          if (l(i))
            return (
              (function(t, e, n, r, i) {
                function o(t) {
                  a || ((a = !0), r.call(i, t))
                }
                var a = !1
                try {
                  e.call(
                    t,
                    function(t) {
                      a || ((a = !0), n.call(i, t))
                    },
                    o
                  )
                } catch (t) {
                  o(t)
                }
              })(t, i, e, n, r),
              !0
            )
        } catch (t) {
          return n.call(r, t), !0
        }
      return !1
    }
    function At(t) {
      t.h || ((t.h = !0), lt(t.Ub, t))
    }
    function kt(t) {
      var e = null
      return (
        t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
        t.b || (t.f = null),
        e
      )
    }
    function Ot(t, e, n, r) {
      if (n == gt && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1
      if (e.a) (e.a.c = null), Pt(e, n, r)
      else
        try {
          e.c ? e.g.call(e.f) : Pt(e, n, r)
        } catch (t) {
          Dt.call(null, t)
        }
      N(bt, e)
    }
    function Pt(t, e, n) {
      e == _t ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
    }
    ;(vt.prototype.then = function(t, e, n) {
      return It(this, l(t) ? t : null, l(e) ? e : null, n)
    }),
      w(vt),
      ((t = vt.prototype).ha = function(t, e) {
        return ((t = wt(t, t, e)).c = !0), St(this, t), this
      }),
      (t.m = function(t, e) {
        return It(this, null, t, e)
      }),
      (t.cancel = function(t) {
        this.a == yt &&
          lt(function() {
            !(function t(e, n) {
              if (e.a == yt)
                if (e.c) {
                  var r = e.c
                  if (r.b) {
                    for (
                      var i = 0, o = null, a = null, s = r.b;
                      s && (s.c || (i++, s.a == e && (o = s), !(o && 1 < i)));
                      s = s.next
                    )
                      o || (a = s)
                    o &&
                      (r.a == yt && 1 == i
                        ? t(r, n)
                        : (a
                            ? ((i = a).next == r.f && (r.f = i),
                              (i.next = i.next.next))
                            : kt(r),
                          Ot(r, o, gt, n)))
                  }
                  e.c = null
                } else Nt(e, gt, n)
            })(this, new Lt(t))
          }, this)
      }),
      (t.Kc = function(t) {
        ;(this.a = yt), Nt(this, _t, t)
      }),
      (t.Lc = function(t) {
        ;(this.a = yt), Nt(this, gt, t)
      }),
      (t.Ub = function() {
        for (var t; (t = kt(this)); ) Ot(this, t, this.a, this.j)
        this.h = !1
      })
    var Dt = ht
    function Lt(t) {
      T.call(this, t)
    }
    function xt() {
      0 != Ft && (Ut[this[f] || (this[f] = ++d)] = this),
        (this.pa = this.pa),
        (this.oa = this.oa)
    }
    b(Lt, T), (Lt.prototype.name = 'cancel')
    var Ft = 0,
      Ut = {}
    function Mt(t) {
      if (!t.pa && ((t.pa = !0), t.ua(), 0 != Ft)) {
        var e = t[f] || (t[f] = ++d)
        if (0 != Ft && t.oa && 0 < t.oa.length)
          throw Error(
            t +
              " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
          )
        delete Ut[e]
      }
    }
    function Wt(t) {
      return Wt[' '](t), t
    }
    ;(xt.prototype.pa = !1),
      (xt.prototype.ua = function() {
        if (this.oa) for (; this.oa.length; ) this.oa.shift()()
      }),
      (Wt[' '] = a)
    var Bt,
      jt,
      Vt = nt('Opera'),
      qt = nt('Trident') || nt('MSIE'),
      Ht = nt('Edge'),
      Kt = Ht || qt,
      Gt =
        nt('Gecko') &&
        !(J(H.toLowerCase(), 'webkit') && !nt('Edge')) &&
        !(nt('Trident') || nt('MSIE')) &&
        !nt('Edge'),
      Qt = J(H.toLowerCase(), 'webkit') && !nt('Edge')
    function zt() {
      var t = r.document
      return t ? t.documentMode : void 0
    }
    t: {
      var Yt = '',
        Xt = ((jt = H),
        Gt
          ? /rv:([^\);]+)(\)|;)/.exec(jt)
          : Ht
            ? /Edge\/([\d\.]+)/.exec(jt)
            : qt
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(jt)
              : Qt
                ? /WebKit\/(\S+)/.exec(jt)
                : Vt ? /(?:Version)[ \/]?(\S+)/.exec(jt) : void 0)
      if ((Xt && (Yt = Xt ? Xt[1] : ''), qt)) {
        var $t = zt()
        if (null != $t && $t > parseFloat(Yt)) {
          Bt = String($t)
          break t
        }
      }
      Bt = Yt
    }
    var Jt,
      Zt = {}
    function te(t) {
      return (function(t, e) {
        var n = Zt
        return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
      })(t, function() {
        for (
          var e = 0,
            n = V(String(Bt)).split('.'),
            r = V(String(t)).split('.'),
            i = Math.max(n.length, r.length),
            o = 0;
          0 == e && o < i;
          o++
        ) {
          var a = n[o] || '',
            s = r[o] || ''
          do {
            if (
              ((a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
              (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
              0 == a[0].length && 0 == s[0].length)
            )
              break
            ;(e =
              Z(
                0 == a[1].length ? 0 : parseInt(a[1], 10),
                0 == s[1].length ? 0 : parseInt(s[1], 10)
              ) ||
              Z(0 == a[2].length, 0 == s[2].length) ||
              Z(a[2], s[2])),
              (a = a[3]),
              (s = s[3])
          } while (0 == e)
        }
        return 0 <= e
      })
    }
    var ee = r.document
    Jt =
      ee && qt
        ? zt() || ('CSS1Compat' == ee.compatMode ? parseInt(Bt, 10) : 5)
        : void 0
    var re =
        Object.freeze ||
        function(t) {
          return t
        },
      ie = !qt || 9 <= Number(Jt),
      oe = qt && !te('9'),
      ae = (function() {
        if (!r.addEventListener || !Object.defineProperty) return !1
        var t = !1,
          e = Object.defineProperty({}, 'passive', {
            get: function() {
              t = !0
            }
          })
        return (
          r.addEventListener('test', a, e),
          r.removeEventListener('test', a, e),
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
          r = t.changedTouches ? t.changedTouches[0] : null
        if (
          ((this.target = t.target || t.srcElement),
          (this.b = e),
          (e = t.relatedTarget))
        ) {
          if (Gt) {
            t: {
              try {
                Wt(e.nodeName)
                var o = !0
                break t
              } catch (t) {}
              o = !1
            }
            o || (e = null)
          }
        } else
          'mouseover' == n
            ? (e = t.fromElement)
            : 'mouseout' == n && (e = t.toElement)
        ;(this.relatedTarget = e),
          null === r
            ? ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
              (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
              (this.screenX = t.screenX || 0),
              (this.screenY = t.screenY || 0))
            : ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
              (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
              (this.screenX = r.screenX || 0),
              (this.screenY = r.screenY || 0)),
          (this.button = t.button),
          (this.key = t.key || ''),
          (this.ctrlKey = t.ctrlKey),
          (this.altKey = t.altKey),
          (this.shiftKey = t.shiftKey),
          (this.metaKey = t.metaKey),
          (this.pointerId = t.pointerId || 0),
          (this.pointerType = i(t.pointerType)
            ? t.pointerType
            : ce[t.pointerType] || ''),
          (this.a = t),
          t.defaultPrevented && this.preventDefault()
      }
    }
    ;(se.prototype.preventDefault = function() {
      this.Eb = !1
    }),
      b(ue, se)
    var ce = re({2: 'touch', 3: 'pen', 4: 'mouse'})
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
      le = 0
    function pe(t) {
      ;(t.ma = !0),
        (t.listener = null),
        (t.proxy = null),
        (t.src = null),
        (t.La = null)
    }
    function fe(t) {
      ;(this.src = t), (this.a = {}), (this.b = 0)
    }
    function de(t, e) {
      var n = e.type
      n in t.a &&
        U(t.a[n], e) &&
        (pe(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
    }
    function ve(t, e, n, r) {
      for (var i = 0; i < t.length; ++i) {
        var o = t[i]
        if (!o.ma && o.listener == e && o.capture == !!n && o.La == r) return i
      }
      return -1
    }
    fe.prototype.add = function(t, e, n, r, i) {
      var o = t.toString()
      ;(t = this.a[o]) || ((t = this.a[o] = []), this.b++)
      var a = ve(t, e, r, i)
      return (
        -1 < a
          ? ((e = t[a]), n || (e.Ha = !1))
          : (((e = new function(t, e, n, r, i) {
              ;(this.listener = t),
                (this.proxy = null),
                (this.src = e),
                (this.type = n),
                (this.capture = !!r),
                (this.La = i),
                (this.key = ++le),
                (this.ma = this.Ha = !1)
            }(e, this.src, o, !!r, i)).Ha = n),
            t.push(e)),
        e
      )
    }
    var ye = 'closure_lm_' + ((1e6 * Math.random()) | 0),
      _e = {}
    function ge(t, e, n, r, i) {
      if (r && r.once) be(t, e, n, r, i)
      else if (c(e)) for (var o = 0; o < e.length; o++) ge(t, e[o], n, r, i)
      else
        (n = Ae(n)),
          t && t[he]
            ? Oe(t, e, n, p(r) ? !!r.capture : !!r, i)
            : me(t, e, n, !1, r, i)
    }
    function me(t, e, n, r, i, o) {
      if (!e) throw Error('Invalid event type')
      var a = p(i) ? !!i.capture : !!i,
        s = Ne(t)
      if ((s || (t[ye] = s = new fe(t)), !(n = s.add(e, n, r, a, o)).proxy))
        if (
          ((r = (function() {
            var t = Ie,
              e = ie
                ? function(n) {
                    return t.call(e.src, e.listener, n)
                  }
                : function(n) {
                    if (!(n = t.call(e.src, e.listener, n))) return n
                  }
            return e
          })()),
          (n.proxy = r),
          (r.src = t),
          (r.listener = n),
          t.addEventListener)
        )
          ae || (i = a),
            void 0 === i && (i = !1),
            t.addEventListener(e.toString(), r, i)
        else if (t.attachEvent) t.attachEvent(Te(e.toString()), r)
        else {
          if (!t.addListener || !t.removeListener)
            throw Error('addEventListener and attachEvent are unavailable.')
          t.addListener(r)
        }
    }
    function be(t, e, n, r, i) {
      if (c(e)) for (var o = 0; o < e.length; o++) be(t, e[o], n, r, i)
      else
        (n = Ae(n)),
          t && t[he]
            ? Pe(t, e, n, p(r) ? !!r.capture : !!r, i)
            : me(t, e, n, !0, r, i)
    }
    function we(t, e, n, r, i) {
      if (c(e)) for (var o = 0; o < e.length; o++) we(t, e[o], n, r, i)
      else
        (r = p(r) ? !!r.capture : !!r),
          (n = Ae(n)),
          t && t[he]
            ? ((t = t.u),
              (e = String(e).toString()) in t.a &&
                (-1 < (n = ve((o = t.a[e]), n, r, i)) &&
                  (pe(o[n]),
                  Array.prototype.splice.call(o, n, 1),
                  0 == o.length && (delete t.a[e], t.b--))))
            : t &&
              (t = Ne(t)) &&
              ((e = t.a[e.toString()]),
              (t = -1),
              e && (t = ve(e, n, r, i)),
              (n = -1 < t ? e[t] : null) && Ee(n))
    }
    function Ee(t) {
      if ('number' != typeof t && t && !t.ma) {
        var e = t.src
        if (e && e[he]) de(e.u, t)
        else {
          var n = t.type,
            r = t.proxy
          e.removeEventListener
            ? e.removeEventListener(n, r, t.capture)
            : e.detachEvent
              ? e.detachEvent(Te(n), r)
              : e.addListener && e.removeListener && e.removeListener(r),
            (n = Ne(e))
              ? (de(n, t), 0 == n.b && ((n.src = null), (e[ye] = null)))
              : pe(t)
        }
      }
    }
    function Te(t) {
      return t in _e ? _e[t] : (_e[t] = 'on' + t)
    }
    function Ce(t, e, n, r) {
      var i = !0
      if ((t = Ne(t)) && (e = t.a[e.toString()]))
        for (e = e.concat(), t = 0; t < e.length; t++) {
          var o = e[t]
          o && o.capture == n && !o.ma && ((o = Se(o, r)), (i = i && !1 !== o))
        }
      return i
    }
    function Se(t, e) {
      var n = t.listener,
        r = t.La || t.src
      return t.Ha && Ee(t), n.call(r, e)
    }
    function Ie(t, e) {
      if (t.ma) return !0
      if (!ie) {
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
            var a = Ce(i[o], t, !0, e)
            n = n && a
          }
          for (o = 0; o < i.length; o++)
            (e.b = i[o]), (a = Ce(i[o], t, !1, e)), (n = n && a)
        }
        return n
      }
      return Se(t, new ue(e, this))
    }
    function Ne(t) {
      return (t = t[ye]) instanceof fe ? t : null
    }
    var Re = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
    function Ae(t) {
      return l(t)
        ? t
        : (t[Re] ||
            (t[Re] = function(e) {
              return t.handleEvent(e)
            }),
          t[Re])
    }
    function ke() {
      xt.call(this), (this.u = new fe(this)), (this.Mb = this), (this.Ta = null)
    }
    function Oe(t, e, n, r, i) {
      t.u.add(String(e), n, !1, r, i)
    }
    function Pe(t, e, n, r, i) {
      t.u.add(String(e), n, !0, r, i)
    }
    function De(t, e, n, r) {
      if (!(e = t.u.a[String(e)])) return !0
      e = e.concat()
      for (var i = !0, o = 0; o < e.length; ++o) {
        var a = e[o]
        if (a && !a.ma && a.capture == n) {
          var s = a.listener,
            u = a.La || a.src
          a.Ha && de(t.u, a), (i = !1 !== s.call(u, r) && i)
        }
      }
      return i && 0 != r.Eb
    }
    function Le(t, e, n) {
      if (l(t)) n && (t = _(t, n))
      else {
        if (!t || 'function' != typeof t.handleEvent)
          throw Error('Invalid listener argument')
        t = _(t.handleEvent, t)
      }
      return 2147483647 < Number(e) ? -1 : r.setTimeout(t, e || 0)
    }
    function xe(t) {
      var e = null
      return new vt(function(n, r) {
        ;-1 ==
          (e = Le(function() {
            n(void 0)
          }, t)) && r(Error('Failed to schedule timer.'))
      }).m(function(t) {
        throw (r.clearTimeout(e), t)
      })
    }
    function Fe(t) {
      if (t.S && 'function' == typeof t.S) return t.S()
      if (i(t)) return t.split('')
      if (h(t)) {
        for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r])
        return e
      }
      for (r in ((e = []), (n = 0), t)) e[n++] = t[r]
      return e
    }
    function Ue(t) {
      if (t.U && 'function' == typeof t.U) return t.U()
      if (!t.S || 'function' != typeof t.S) {
        if (h(t) || i(t)) {
          var e = []
          t = t.length
          for (var n = 0; n < t; n++) e.push(n)
          return e
        }
        for (var r in ((e = []), (n = 0), t)) e[n++] = r
        return e
      }
    }
    function Me(t, e) {
      ;(this.b = {}), (this.a = []), (this.c = 0)
      var n = arguments.length
      if (1 < n) {
        if (n % 2) throw Error('Uneven number of arguments')
        for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
      } else if (t)
        if (t instanceof Me)
          for (n = t.U(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]))
        else for (r in t) this.set(r, t[r])
    }
    function We(t) {
      if (t.c != t.a.length) {
        for (var e = 0, n = 0; e < t.a.length; ) {
          var r = t.a[e]
          Be(t.b, r) && (t.a[n++] = r), e++
        }
        t.a.length = n
      }
      if (t.c != t.a.length) {
        var i = {}
        for (n = e = 0; e < t.a.length; )
          Be(i, (r = t.a[e])) || ((t.a[n++] = r), (i[r] = 1)), e++
        t.a.length = n
      }
    }
    function Be(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }
    b(ke, xt),
      (ke.prototype[he] = !0),
      (ke.prototype.addEventListener = function(t, e, n, r) {
        ge(this, t, e, n, r)
      }),
      (ke.prototype.removeEventListener = function(t, e, n, r) {
        we(this, t, e, n, r)
      }),
      (ke.prototype.dispatchEvent = function(t) {
        var e,
          n = this.Ta
        if (n) for (e = []; n; n = n.Ta) e.push(n)
        n = this.Mb
        var r = t.type || t
        if (i(t)) t = new se(t, n)
        else if (t instanceof se) t.target = t.target || n
        else {
          var o = t
          ct((t = new se(r, n)), o)
        }
        if (((o = !0), e))
          for (var a = e.length - 1; 0 <= a; a--) {
            var s = (t.b = e[a])
            o = De(s, r, !0, t) && o
          }
        if (
          ((o = De((s = t.b = n), r, !0, t) && o),
          (o = De(s, r, !1, t) && o),
          e)
        )
          for (a = 0; a < e.length; a++) o = De((s = t.b = e[a]), r, !1, t) && o
        return o
      }),
      (ke.prototype.ua = function() {
        if ((ke.lb.ua.call(this), this.u)) {
          var t,
            e = this.u
          for (t in e.a) {
            for (var n = e.a[t], r = 0; r < n.length; r++) pe(n[r])
            delete e.a[t], e.b--
          }
        }
        this.Ta = null
      }),
      ((t = Me.prototype).S = function() {
        We(this)
        for (var t = [], e = 0; e < this.a.length; e++)
          t.push(this.b[this.a[e]])
        return t
      }),
      (t.U = function() {
        return We(this), this.a.concat()
      }),
      (t.clear = function() {
        ;(this.b = {}), (this.c = this.a.length = 0)
      }),
      (t.get = function(t, e) {
        return Be(this.b, t) ? this.b[t] : e
      }),
      (t.set = function(t, e) {
        Be(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e)
      }),
      (t.forEach = function(t, e) {
        for (var n = this.U(), r = 0; r < n.length; r++) {
          var i = n[r],
            o = this.get(i)
          t.call(e, o, i, this)
        }
      })
    var je = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
    function Ve(t, e) {
      if (
        ((this.b = this.l = this.c = ''),
        (this.j = null),
        (this.h = this.g = ''),
        (this.f = !1),
        t instanceof Ve)
      ) {
        ;(this.f = void 0 !== e ? e : t.f),
          qe(this, t.c),
          (this.l = t.l),
          (this.b = t.b),
          He(this, t.j),
          (this.g = t.g),
          (e = t.a)
        var n = new on()
        ;(n.c = e.c),
          e.a && ((n.a = new Me(e.a)), (n.b = e.b)),
          Ke(this, n),
          (this.h = t.h)
      } else
        t && (n = String(t).match(je))
          ? ((this.f = !!e),
            qe(this, n[1] || '', !0),
            (this.l = Xe(n[2] || '')),
            (this.b = Xe(n[3] || '', !0)),
            He(this, n[4]),
            (this.g = Xe(n[5] || '', !0)),
            Ke(this, n[6] || '', !0),
            (this.h = Xe(n[7] || '')))
          : ((this.f = !!e), (this.a = new on(null, this.f)))
    }
    function qe(t, e, n) {
      ;(t.c = n ? Xe(e, !0) : e), t.c && (t.c = t.c.replace(/:$/, ''))
    }
    function He(t, e) {
      if (e) {
        if (((e = Number(e)), isNaN(e) || 0 > e))
          throw Error('Bad port number ' + e)
        t.j = e
      } else t.j = null
    }
    function Ke(t, e, n) {
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
    function Ge(t, e, n) {
      t.a.set(e, n)
    }
    function Qe(t, e) {
      return t.a.get(e)
    }
    function ze(t) {
      return t instanceof Ve ? new Ve(t) : new Ve(t, void 0)
    }
    function Ye(t, e) {
      var n = new Ve(null, void 0)
      return qe(n, 'https'), t && (n.b = t), e && (n.g = e), n
    }
    function Xe(t, e) {
      return t
        ? e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)
        : ''
    }
    function $e(t, e, n) {
      return i(t)
        ? ((t = encodeURI(t).replace(e, Je)),
          n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
          t)
        : null
    }
    function Je(t) {
      return (
        '%' +
        (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
        (15 & t).toString(16)
      )
    }
    Ve.prototype.toString = function() {
      var t = [],
        e = this.c
      e && t.push($e(e, Ze, !0), ':')
      var n = this.b
      return (
        (n || 'file' == e) &&
          (t.push('//'),
          (e = this.l) && t.push($e(e, Ze, !0), '@'),
          t.push(
            encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
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
    var Ze = /[#\/\?@]/g,
      tn = /[#\?:]/g,
      en = /[#\?]/g,
      nn = /[#\?@]/g,
      rn = /#/g
    function on(t, e) {
      ;(this.b = this.a = null), (this.c = t || null), (this.f = !!e)
    }
    function an(t) {
      t.a ||
        ((t.a = new Me()),
        (t.b = 0),
        t.c &&
          (function(t, e) {
            if (t) {
              t = t.split('&')
              for (var n = 0; n < t.length; n++) {
                var r = t[n].indexOf('='),
                  i = null
                if (0 <= r) {
                  var o = t[n].substring(0, r)
                  i = t[n].substring(r + 1)
                } else o = t[n]
                e(o, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '')
              }
            }
          })(t.c, function(e, n) {
            t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n)
          }))
    }
    function sn(t) {
      var e = Ue(t)
      if (void 0 === e) throw Error('Keys are undefined')
      var n = new on(null, void 0)
      t = Fe(t)
      for (var r = 0; r < e.length; r++) {
        var i = e[r],
          o = t[r]
        c(o) ? hn(n, i, o) : n.add(i, o)
      }
      return n
    }
    function un(t, e) {
      an(t),
        (e = ln(t, e)),
        Be(t.a.b, e) &&
          ((t.c = null),
          (t.b -= t.a.get(e).length),
          Be((t = t.a).b, e) &&
            (delete t.b[e], t.c--, t.a.length > 2 * t.c && We(t)))
    }
    function cn(t, e) {
      return an(t), (e = ln(t, e)), Be(t.a.b, e)
    }
    function hn(t, e, n) {
      un(t, e),
        0 < n.length &&
          ((t.c = null), t.a.set(ln(t, e), B(n)), (t.b += n.length))
    }
    function ln(t, e) {
      return (e = String(e)), t.f && (e = e.toLowerCase()), e
    }
    ;((t = on.prototype).add = function(t, e) {
      an(this), (this.c = null), (t = ln(this, t))
      var n = this.a.get(t)
      return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this
    }),
      (t.clear = function() {
        ;(this.a = this.c = null), (this.b = 0)
      }),
      (t.forEach = function(t, e) {
        an(this),
          this.a.forEach(function(n, r) {
            D(
              n,
              function(n) {
                t.call(e, n, r, this)
              },
              this
            )
          }, this)
      }),
      (t.U = function() {
        an(this)
        for (
          var t = this.a.S(), e = this.a.U(), n = [], r = 0;
          r < e.length;
          r++
        )
          for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r])
        return n
      }),
      (t.S = function(t) {
        an(this)
        var e = []
        if (i(t)) cn(this, t) && (e = W(e, this.a.get(ln(this, t))))
        else {
          t = this.a.S()
          for (var n = 0; n < t.length; n++) e = W(e, t[n])
        }
        return e
      }),
      (t.set = function(t, e) {
        return (
          an(this),
          (this.c = null),
          cn(this, (t = ln(this, t))) && (this.b -= this.a.get(t).length),
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
          var r = e[n],
            i = encodeURIComponent(String(r))
          r = this.S(r)
          for (var o = 0; o < r.length; o++) {
            var a = i
            '' !== r[o] && (a += '=' + encodeURIComponent(String(r[o]))),
              t.push(a)
          }
        }
        return (this.c = t.join('&'))
      })
    var pn = !qt || 9 <= Number(Jt)
    function fn() {
      ;(this.a = ''), (this.b = vn)
    }
    function dn(t) {
      return t instanceof fn && t.constructor === fn && t.b === vn
        ? t.a
        : (S("expected object of type Const, got '" + t + "'"),
          'type_error:Const')
    }
    ;(fn.prototype.la = !0),
      (fn.prototype.ja = function() {
        return this.a
      }),
      (fn.prototype.toString = function() {
        return 'Const{' + this.a + '}'
      })
    var vn = {}
    function yn(t) {
      var e = new fn()
      return (e.a = t), e
    }
    function _n() {
      ;(this.a = ''), (this.b = En)
    }
    function gn(t) {
      return t instanceof _n && t.constructor === _n && t.b === En
        ? t.a
        : (S(
            "expected object of type TrustedResourceUrl, got '" +
              t +
              "' of type " +
              s(t)
          ),
          'type_error:TrustedResourceUrl')
    }
    function mn(t, e) {
      var n = dn(t)
      if (!wn.test(n)) throw Error('Invalid TrustedResourceUrl format: ' + n)
      return (function(t) {
        var e = new _n()
        return (e.a = t), e
      })(
        (t = n.replace(bn, function(t, r) {
          if (!Object.prototype.hasOwnProperty.call(e, r))
            throw Error(
              'Found marker, "' +
                r +
                '", in format string, "' +
                n +
                '", but no valid label mapping found in args: ' +
                JSON.stringify(e)
            )
          return (t = e[r]) instanceof fn
            ? dn(t)
            : encodeURIComponent(String(t))
        }))
      )
    }
    yn(''),
      (_n.prototype.la = !0),
      (_n.prototype.ja = function() {
        return this.a
      }),
      (_n.prototype.toString = function() {
        return 'TrustedResourceUrl{' + this.a + '}'
      })
    var bn = /%{(\w+)}/g,
      wn = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,
      En = {}
    function Tn() {
      ;(this.a = ''), (this.b = Nn)
    }
    function Cn(t) {
      return t instanceof Tn && t.constructor === Tn && t.b === Nn
        ? t.a
        : (S(
            "expected object of type SafeUrl, got '" + t + "' of type " + s(t)
          ),
          'type_error:SafeUrl')
    }
    ;(Tn.prototype.la = !0),
      (Tn.prototype.ja = function() {
        return this.a
      }),
      (Tn.prototype.toString = function() {
        return 'SafeUrl{' + this.a + '}'
      })
    var Sn = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
    function In(t) {
      return t instanceof Tn
        ? t
        : ((t = t.la ? t.ja() : String(t)),
          Sn.test(t) || (t = 'about:invalid#zClosurez'),
          Rn(t))
    }
    var Nn = {}
    function Rn(t) {
      var e = new Tn()
      return (e.a = t), e
    }
    function An() {
      ;(this.a = ''), (this.b = kn)
    }
    Rn('about:blank'),
      (An.prototype.la = !0),
      (An.prototype.ja = function() {
        return this.a
      }),
      (An.prototype.toString = function() {
        return 'SafeHtml{' + this.a + '}'
      })
    var kn = {}
    function On(t) {
      var e = new An()
      return (e.a = t), e
    }
    function Pn(t) {
      var e = document
      return i(t) ? e.getElementById(t) : t
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
    On('<!DOCTYPE html>'), On(''), On('<br>')
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
      var r = arguments,
        o = document,
        a = String(r[0]),
        s = r[1]
      if (!pn && s && (s.name || s.type)) {
        if (
          ((a = ['<', a]), s.name && a.push(' name="', q(s.name), '"'), s.type)
        ) {
          a.push(' type="', q(s.type), '"')
          var u = {}
          ct(u, s), delete u.type, (s = u)
        }
        a.push('>'), (a = a.join(''))
      }
      return (
        (a = o.createElement(a)),
        s &&
          (i(s)
            ? (a.className = s)
            : c(s) ? (a.className = s.join(' ')) : Dn(a, s)),
        2 < r.length &&
          (function(t, e, n) {
            function r(n) {
              n && e.appendChild(i(n) ? t.createTextNode(n) : n)
            }
            for (var o = 2; o < n.length; o++) {
              var a = n[o]
              !h(a) || (p(a) && 0 < a.nodeType) ? r(a) : D(Fn(a) ? B(a) : a, r)
            }
          })(o, a, r),
        a
      )
    }
    function Fn(t) {
      if (t && 'number' == typeof t.length) {
        if (p(t))
          return 'function' == typeof t.item || 'string' == typeof t.item
        if (l(t)) return 'function' == typeof t.item
      }
      return !1
    }
    function Un(t) {
      var e = []
      return (
        (function t(e, n, r) {
          if (null == n) r.push('null')
          else {
            if ('object' == typeof n) {
              if (c(n)) {
                var i = n
                ;(n = i.length), r.push('[')
                for (var o = '', a = 0; a < n; a++)
                  r.push(o), t(e, i[a], r), (o = ',')
                return void r.push(']')
              }
              if (
                !(
                  n instanceof String ||
                  n instanceof Number ||
                  n instanceof Boolean
                )
              ) {
                for (i in (r.push('{'), (o = ''), n))
                  Object.prototype.hasOwnProperty.call(n, i) &&
                    ('function' != typeof (a = n[i]) &&
                      (r.push(o), Bn(i, r), r.push(':'), t(e, a, r), (o = ',')))
                return void r.push('}')
              }
              n = n.valueOf()
            }
            switch (typeof n) {
              case 'string':
                Bn(n, r)
                break
              case 'number':
                r.push(isFinite(n) && !isNaN(n) ? String(n) : 'null')
                break
              case 'boolean':
                r.push(String(n))
                break
              case 'function':
                r.push('null')
                break
              default:
                throw Error('Unknown type: ' + typeof n)
            }
          }
        })(new function() {}(), t, e),
        e.join('')
      )
    }
    var Mn = {
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
      Wn = /\uffff/.test('￿')
        ? /[\\"\x00-\x1f\x7f-\uffff]/g
        : /[\\"\x00-\x1f\x7f-\xff]/g
    function Bn(t, e) {
      e.push(
        '"',
        t.replace(Wn, function(t) {
          var e = Mn[t]
          return (
            e ||
              ((e = '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
              (Mn[t] = e)),
            e
          )
        }),
        '"'
      )
    }
    function jn() {
      var t = or()
      return (qt && !!Jt && 11 == Jt) || /Edge\/\d+/.test(t)
    }
    function Vn() {
      return (
        (r.window && r.window.location.href) ||
        (self && self.location && self.location.href) ||
        ''
      )
    }
    function qn(t, e) {
      e = e || r.window
      var n = 'about:blank'
      t && (n = Cn(In(t))), (e.location.href = n)
    }
    function Hn(t) {
      return !!(
        (t = (t || or()).toLowerCase()).match(/android/) ||
        t.match(/webos/) ||
        t.match(/iphone|ipad|ipod/) ||
        t.match(/blackberry/) ||
        t.match(/windows phone/) ||
        t.match(/iemobile/)
      )
    }
    function Kn(t) {
      t = t || r.window
      try {
        t.close()
      } catch (t) {}
    }
    function Gn(t, e, n) {
      var r = Math.floor(1e9 * Math.random()).toString()
      ;(e = e || 500), (n = n || 600)
      var i = (window.screen.availHeight - n) / 2,
        o = (window.screen.availWidth - e) / 2
      for (a in ((e = {
        width: e,
        height: n,
        top: 0 < i ? i : 0,
        left: 0 < o ? o : 0,
        location: !0,
        resizable: !0,
        statusbar: !0,
        toolbar: !1
      }),
      (n = or().toLowerCase()),
      r && ((e.target = r), J(n, 'crios/') && (e.target = '_blank')),
      nr(or()) == tr && ((t = t || 'http://localhost'), (e.scrollbars = !0)),
      (n = t || ''),
      (t = e) || (t = {}),
      (r = window),
      (e = n instanceof Tn ? n : In(void 0 !== n.href ? n.href : String(n))),
      (n = t.target || n.target),
      (i = []),
      t))
        switch (a) {
          case 'width':
          case 'height':
          case 'top':
          case 'left':
            i.push(a + '=' + t[a])
            break
          case 'target':
          case 'noopener':
          case 'noreferrer':
            break
          default:
            i.push(a + '=' + (t[a] ? 1 : 0))
        }
      var a = i.join(',')
      if (
        (((nt('iPhone') && !nt('iPod') && !nt('iPad')) ||
          nt('iPad') ||
          nt('iPod')) &&
        r.navigator &&
        r.navigator.standalone &&
        n &&
        '_self' != n
          ? ((a = r.document.createElement('A')),
            e instanceof Tn ||
              e instanceof Tn ||
              ((e = e.la ? e.ja() : String(e)),
              Sn.test(e) || (e = 'about:invalid#zClosurez'),
              (e = Rn(e))),
            (a.href = Cn(e)),
            a.setAttribute('target', n),
            t.noreferrer && a.setAttribute('rel', 'noreferrer'),
            (t = document.createEvent('MouseEvent')).initMouseEvent(
              'click',
              !0,
              !0,
              r,
              1
            ),
            a.dispatchEvent(t),
            (a = {}))
          : t.noreferrer
            ? ((a = r.open('', n, a)),
              (t = Cn(e)),
              a &&
                (Kt && J(t, ';') && (t = "'" + t.replace(/'/g, '%27') + "'"),
                (a.opener = null),
                yn('b/12014412, meta tag with sanitized URL'),
                (t = On(
                  (t =
                    '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                    q(t) +
                    '">')
                )),
                a.document.write(
                  (function(t) {
                    return t instanceof An && t.constructor === An && t.b === kn
                      ? t.a
                      : (S(
                          "expected object of type SafeHtml, got '" +
                            t +
                            "' of type " +
                            s(t)
                        ),
                        'type_error:SafeHtml')
                  })(t)
                ),
                a.document.close()))
            : (a = r.open(Cn(e), n, a)) && t.noopener && (a.opener = null),
        a)
      )
        try {
          a.focus()
        } catch (t) {}
      return a
    }
    var Qn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    function zn() {
      var t = null
      return new vt(function(e) {
        'complete' == r.document.readyState
          ? e()
          : ((t = function() {
              e()
            }),
            be(window, 'load', t))
      }).m(function(e) {
        throw (we(window, 'load', t), e)
      })
    }
    function Yn(t) {
      return (
        (t = t || or()),
        !(
          'file:' !== hr() || !t.toLowerCase().match(/iphone|ipad|ipod|android/)
        )
      )
    }
    function Xn() {
      var t = r.window
      try {
        return !(!t || t == t.top)
      } catch (t) {
        return !1
      }
    }
    function $n() {
      return 'object' != typeof r.window && 'function' == typeof r.importScripts
    }
    function Jn() {
      return e.INTERNAL.hasOwnProperty('reactNative')
        ? 'ReactNative'
        : e.INTERNAL.hasOwnProperty('node')
          ? 'Node'
          : $n() ? 'Worker' : 'Browser'
    }
    function Zn() {
      var t = Jn()
      return 'ReactNative' === t || 'Node' === t
    }
    var tr = 'Firefox',
      er = 'Chrome'
    function nr(t) {
      var e = t.toLowerCase()
      return J(e, 'opera/') || J(e, 'opr/') || J(e, 'opios/')
        ? 'Opera'
        : J(e, 'iemobile')
          ? 'IEMobile'
          : J(e, 'msie') || J(e, 'trident/')
            ? 'IE'
            : J(e, 'edge/')
              ? 'Edge'
              : J(e, 'firefox/')
                ? tr
                : J(e, 'silk/')
                  ? 'Silk'
                  : J(e, 'blackberry')
                    ? 'Blackberry'
                    : J(e, 'webos')
                      ? 'Webos'
                      : !J(e, 'safari/') ||
                        J(e, 'chrome/') ||
                        J(e, 'crios/') ||
                        J(e, 'android')
                        ? (!J(e, 'chrome/') && !J(e, 'crios/')) || J(e, 'edge/')
                          ? J(e, 'android')
                            ? 'Android'
                            : (t = t.match(
                                /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
                              )) && 2 == t.length
                              ? t[1]
                              : 'Other'
                          : er
                        : 'Safari'
    }
    var rr = {Qc: 'FirebaseCore-web', Sc: 'FirebaseUI-web'}
    function ir(t, e) {
      e = e || []
      var n,
        r = [],
        i = {}
      for (n in rr) i[rr[n]] = !0
      for (n = 0; n < e.length; n++)
        void 0 !== i[e[n]] && (delete i[e[n]], r.push(e[n]))
      return (
        r.sort(),
        (e = r).length || (e = ['FirebaseCore-web']),
        'Browser' === (r = Jn())
          ? (r = nr((i = or())))
          : 'Worker' === r && (r = nr((i = or())) + '-' + r),
        r + '/JsCore/' + t + '/' + e.join(',')
      )
    }
    function or() {
      return (r.navigator && r.navigator.userAgent) || ''
    }
    function ar(t, e) {
      ;(t = t.split('.')), (e = e || r)
      for (var n = 0; n < t.length && 'object' == typeof e && null != e; n++)
        e = e[t[n]]
      return n != t.length && (e = void 0), e
    }
    function sr() {
      try {
        var t = r.localStorage,
          e = vr()
        if (t) return t.setItem(e, '1'), t.removeItem(e), !jn() || !!r.indexedDB
      } catch (t) {
        return $n() && !!r.indexedDB
      }
      return !1
    }
    function ur() {
      return (
        (cr() || 'chrome-extension:' === hr() || Yn()) && !Zn() && sr() && !$n()
      )
    }
    function cr() {
      return 'http:' === hr() || 'https:' === hr()
    }
    function hr() {
      return (r.location && r.location.protocol) || null
    }
    function lr(t) {
      return !Hn((t = t || or())) && nr(t) != tr
    }
    function pr(t) {
      return void 0 === t ? null : Un(t)
    }
    function fr(t) {
      var e,
        n = {}
      for (e in t)
        t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e])
      return n
    }
    function dr(t) {
      if (null !== t) return JSON.parse(t)
    }
    function vr(t) {
      return t || Math.floor(1e9 * Math.random()).toString()
    }
    function yr(t) {
      return (
        'Safari' != nr((t = t || or())) &&
        !t.toLowerCase().match(/iphone|ipad|ipod/)
      )
    }
    function _r() {
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
    function gr(t, e) {
      if (t > e) throw Error('Short delay should be less than long delay!')
      ;(this.a = t),
        (this.c = e),
        (t = or()),
        (e = Jn()),
        (this.b = Hn(t) || 'ReactNative' === e)
    }
    function mr() {
      var t = r.document
      return (
        !t || void 0 === t.visibilityState || 'visible' == t.visibilityState
      )
    }
    function br(t) {
      try {
        var e = new Date(parseInt(t, 10))
        if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString()
      } catch (t) {}
      return null
    }
    function wr() {
      return !(!ar('fireauth.oauthhelper', r) && !ar('fireauth.iframe', r))
    }
    gr.prototype.get = function() {
      var t = r.navigator
      return !t ||
        'boolean' != typeof t.onLine ||
        (!cr() && 'chrome-extension:' !== hr() && void 0 === t.connection) ||
        t.onLine
        ? this.b ? this.c : this.a
        : Math.min(5e3, this.a)
    }
    var Er,
      Tr = {}
    try {
      var Cr = {}
      Object.defineProperty(Cr, 'abcd', {
        configurable: !0,
        enumerable: !0,
        value: 1
      }),
        Object.defineProperty(Cr, 'abcd', {
          configurable: !0,
          enumerable: !0,
          value: 2
        }),
        (Er = 2 == Cr.abcd)
    } catch (jt) {
      Er = !1
    }
    function Sr(t, e, n) {
      Er
        ? Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n
          })
        : (t[e] = n)
    }
    function Ir(t, e) {
      if (e) for (var n in e) e.hasOwnProperty(n) && Sr(t, n, e[n])
    }
    function Nr(t) {
      var e = {}
      return Ir(e, t), e
    }
    function Rr(t) {
      var e = t
      if ('object' == typeof t && null != t)
        for (var n in ((e = 'length' in t ? [] : {}), t)) Sr(e, n, Rr(t[n]))
      return e
    }
    var Ar = 'EMAIL_SIGNIN',
      kr = 'email',
      Or = 'newEmail',
      Pr = 'requestType',
      Dr = 'email',
      Lr = 'fromEmail',
      xr = 'data',
      Fr = 'operation'
    function Ur(t, e) {
      ;(this.code = Wr + t), (this.message = e || Br[t] || '')
    }
    function Mr(t) {
      var e = t && t.code
      return e ? new Ur(e.substring(Wr.length), t.message) : null
    }
    b(Ur, Error),
      (Ur.prototype.C = function() {
        return {code: this.code, message: this.message}
      }),
      (Ur.prototype.toJSON = function() {
        return this.C()
      })
    var Wr = 'auth/',
      Br = {
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
        'invalid-cert-hash': 'The SHA-1 certificate hash provided is invalid.',
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
    function jr(t) {
      var e = t[Kr]
      if (void 0 === e) throw new Ur('missing-continue-uri')
      if ('string' != typeof e || ('string' == typeof e && !e.length))
        throw new Ur('invalid-continue-uri')
      ;(this.h = e), (this.b = this.a = null), (this.g = !1)
      var n = t[Vr]
      if (n && 'object' == typeof n) {
        e = n[zr]
        var r = n[Gr]
        if (((n = n[Qr]), 'string' == typeof e && e.length)) {
          if (((this.a = e), void 0 !== r && 'boolean' != typeof r))
            throw new Ur(
              'argument-error',
              Gr + ' property must be a boolean when specified.'
            )
          if (
            ((this.g = !!r),
            void 0 !== n &&
              ('string' != typeof n || ('string' == typeof n && !n.length)))
          )
            throw new Ur(
              'argument-error',
              Qr + ' property must be a non empty string when specified.'
            )
          this.b = n || null
        } else {
          if (void 0 !== e)
            throw new Ur(
              'argument-error',
              zr + ' property must be a non empty string when specified.'
            )
          if (void 0 !== r || void 0 !== n)
            throw new Ur('missing-android-pkg-name')
        }
      } else if (void 0 !== n)
        throw new Ur(
          'argument-error',
          Vr + ' property must be a non null object when specified.'
        )
      if (((this.f = null), (e = t[Hr]) && 'object' == typeof e)) {
        if ('string' == typeof (e = e[Yr]) && e.length) this.f = e
        else if (void 0 !== e)
          throw new Ur(
            'argument-error',
            Yr + ' property must be a non empty string when specified.'
          )
      } else if (void 0 !== e)
        throw new Ur(
          'argument-error',
          Hr + ' property must be a non null object when specified.'
        )
      if (void 0 !== (t = t[qr]) && 'boolean' != typeof t)
        throw new Ur(
          'argument-error',
          qr + ' property must be a boolean when specified.'
        )
      this.c = !!t
    }
    var Vr = 'android',
      qr = 'handleCodeInApp',
      Hr = 'iOS',
      Kr = 'url',
      Gr = 'installApp',
      Qr = 'minimumVersion',
      zr = 'packageName',
      Yr = 'bundleId'
    function Xr(t) {
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
    var $r = null,
      Jr = null
    function Zr(t) {
      var e = ''
      return (
        (function(t, e) {
          function n(e) {
            for (; r < t.length; ) {
              var n = t.charAt(r++),
                i = Jr[n]
              if (null != i) return i
              if (!/^[\s\xa0]*$/.test(n))
                throw Error('Unknown base64 encoding at char: ' + n)
            }
            return e
          }
          !(function() {
            if (!$r) {
              ;($r = {}), (Jr = {})
              for (var t = 0; 65 > t; t++)
                ($r[
                  t
                ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(
                  t
                )),
                  (Jr[$r[t]] = t),
                  62 <= t &&
                    (Jr[
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'.charAt(
                        t
                      )
                    ] = t)
            }
          })()
          for (var r = 0; ; ) {
            var i = n(-1),
              o = n(0),
              a = n(64),
              s = n(64)
            if (64 === s && -1 === i) break
            e((i << 2) | (o >> 4)),
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
    function ti(t) {
      ;(this.c = t.sub),
        (this.a =
          t.provider_id || (t.firebase && t.firebase.sign_in_provider) || null),
        (this.b = !!t.is_anonymous || 'anonymous' == this.a)
    }
    function ei(t) {
      return (t = ni(t)) && t.sub && t.iss && t.aud && t.exp ? new ti(t) : null
    }
    function ni(t) {
      if (!t) return null
      if (3 != (t = t.split('.')).length) return null
      for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += '.'
      try {
        return JSON.parse(Zr(t))
      } catch (t) {}
      return null
    }
    ti.prototype.f = function() {
      return this.b
    }
    var ri = 'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
        ' '
      ),
      ii = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
      oi = {
        Rc: {Ma: 'locale', Aa: 500, za: 600, Na: 'facebook.com', cb: ii},
        Tc: {Ma: null, Aa: 500, za: 620, Na: 'github.com', cb: ii},
        Uc: {Ma: 'hl', Aa: 515, za: 680, Na: 'google.com', cb: ii},
        $c: {Ma: 'lang', Aa: 485, za: 705, Na: 'twitter.com', cb: ri}
      }
    function ai(t) {
      for (var e in oi) if (oi[e].Na == t) return oi[e]
      return null
    }
    function si(t) {
      var e = {}
      ;(e['facebook.com'] = pi),
        (e['google.com'] = di),
        (e['github.com'] = fi),
        (e['twitter.com'] = vi)
      var n = t && t[ci]
      try {
        if (n) return e[n] ? new e[n](t) : new li(t)
        if (void 0 !== t[ui]) return new hi(t)
      } catch (t) {}
      return null
    }
    var ui = 'idToken',
      ci = 'providerId'
    function hi(t) {
      var e = t[ci]
      if (!e && t[ui]) {
        var n = ei(t[ui])
        n && n.a && (e = n.a)
      }
      if (!e) throw Error('Invalid additional user info!')
      ;('anonymous' != e && 'custom' != e) || (e = null),
        (n = !1),
        void 0 !== t.isNewUser
          ? (n = !!t.isNewUser)
          : 'identitytoolkit#SignupNewUserResponse' === t.kind && (n = !0),
        Sr(this, 'providerId', e),
        Sr(this, 'isNewUser', n)
    }
    function li(t) {
      hi.call(this, t),
        Sr(this, 'profile', Rr((t = dr(t.rawUserInfo || '{}')) || {}))
    }
    function pi(t) {
      if ((li.call(this, t), 'facebook.com' != this.providerId))
        throw Error('Invalid provider ID!')
    }
    function fi(t) {
      if ((li.call(this, t), 'github.com' != this.providerId))
        throw Error('Invalid provider ID!')
      Sr(this, 'username', (this.profile && this.profile.login) || null)
    }
    function di(t) {
      if ((li.call(this, t), 'google.com' != this.providerId))
        throw Error('Invalid provider ID!')
    }
    function vi(t) {
      if ((li.call(this, t), 'twitter.com' != this.providerId))
        throw Error('Invalid provider ID!')
      Sr(this, 'username', t.screenName || null)
    }
    function yi(t) {
      var e = ze(t),
        n = Qe(e, 'link'),
        r = Qe(ze(n), 'link')
      return Qe(ze((e = Qe(e, 'deep_link_id'))), 'link') || e || r || n || t
    }
    function _i(t, e) {
      return t
        .then(function(t) {
          if (t[$o]) {
            var n = ei(t[$o])
            if (!n || e != n.c) throw new Ur('user-mismatch')
            return t
          }
          throw new Ur('user-mismatch')
        })
        .m(function(t) {
          throw t && t.code && t.code == Wr + 'user-not-found'
            ? new Ur('user-mismatch')
            : t
        })
    }
    function gi(t, e, n) {
      if (e.idToken || e.accessToken)
        e.idToken && Sr(this, 'idToken', e.idToken),
          e.accessToken && Sr(this, 'accessToken', e.accessToken)
      else {
        if (!e.oauthToken || !e.oauthTokenSecret)
          throw new Ur('internal-error', 'failed to construct a credential')
        Sr(this, 'accessToken', e.oauthToken),
          Sr(this, 'secret', e.oauthTokenSecret)
      }
      Sr(this, 'providerId', t), Sr(this, 'signInMethod', n)
    }
    function mi(t) {
      var e = {}
      return (
        t.idToken && (e.id_token = t.idToken),
        t.accessToken && (e.access_token = t.accessToken),
        t.secret && (e.oauth_token_secret = t.secret),
        (e.providerId = t.providerId),
        {postBody: sn(e).toString(), requestUri: 'http://localhost'}
      )
    }
    function bi(t, e) {
      ;(this.Ac = e || []),
        Ir(this, {providerId: t, isOAuthProvider: !0}),
        (this.tb = {}),
        (this.Za = (ai(t) || {}).Ma || null),
        (this.Xa = null)
    }
    function wi(t) {
      bi.call(this, t, ii), (this.a = [])
    }
    function Ei() {
      wi.call(this, 'facebook.com')
    }
    function Ti(t) {
      if (!t)
        throw new Ur(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).'
        )
      var e = t
      return p(t) && (e = t.accessToken), new Ei().credential(null, e)
    }
    function Ci() {
      wi.call(this, 'github.com')
    }
    function Si(t) {
      if (!t)
        throw new Ur(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).'
        )
      var e = t
      return p(t) && (e = t.accessToken), new Ci().credential(null, e)
    }
    function Ii() {
      wi.call(this, 'google.com'), this.ta('profile')
    }
    function Ni(t, e) {
      var n = t
      return (
        p(t) && ((n = t.idToken), (e = t.accessToken)),
        new Ii().credential(n, e)
      )
    }
    function Ri() {
      bi.call(this, 'twitter.com', ri)
    }
    function Ai(t, e) {
      var n = t
      if (
        (p(n) || (n = {oauthToken: t, oauthTokenSecret: e}),
        !n.oauthToken || !n.oauthTokenSecret)
      )
        throw new Ur(
          'argument-error',
          'credential failed: expected 2 arguments (the OAuth access token and secret).'
        )
      return new gi('twitter.com', n, 'twitter.com')
    }
    function ki(t, e, n) {
      ;(this.a = t),
        (this.b = e),
        Sr(this, 'providerId', 'password'),
        Sr(
          this,
          'signInMethod',
          n === Oi.EMAIL_LINK_SIGN_IN_METHOD
            ? Oi.EMAIL_LINK_SIGN_IN_METHOD
            : Oi.EMAIL_PASSWORD_SIGN_IN_METHOD
        )
    }
    function Oi() {
      Ir(this, {providerId: 'password', isOAuthProvider: !1})
    }
    function Pi(t, e) {
      if (!(e = Di(e))) throw new Ur('argument-error', 'Invalid email link!')
      return new ki(t, e, Oi.EMAIL_LINK_SIGN_IN_METHOD)
    }
    function Di(t) {
      var e =
        Qe(
          (t = new function(t) {
            this.a = ze(t)
          }((t = yi(t)))).a,
          'oobCode'
        ) || null
      return 'signIn' === (Qe(t.a, 'mode') || null) && e ? e : null
    }
    function Li(t) {
      if (!((t.Ra && t.Qa) || (t.Ea && t.Z))) throw new Ur('internal-error')
      ;(this.a = t),
        Sr(this, 'providerId', 'phone'),
        Sr(this, 'signInMethod', 'phone')
    }
    function xi(t) {
      return t.a.Ea && t.a.Z
        ? {temporaryProof: t.a.Ea, phoneNumber: t.a.Z}
        : {sessionInfo: t.a.Ra, code: t.a.Qa}
    }
    function Fi(t) {
      try {
        this.a = t || e.auth()
      } catch (t) {
        throw new Ur(
          'argument-error',
          'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
        )
      }
      Ir(this, {providerId: 'phone', isOAuthProvider: !1})
    }
    function Ui(t, e) {
      if (!t) throw new Ur('missing-verification-id')
      if (!e) throw new Ur('missing-verification-code')
      return new Li({Ra: t, Qa: e})
    }
    function Mi(t) {
      if (t.temporaryProof && t.phoneNumber)
        return new Li({Ea: t.temporaryProof, Z: t.phoneNumber})
      var e = t && t.providerId
      if (!e || 'password' === e) return null
      var n = t && t.oauthAccessToken,
        r = t && t.oauthTokenSecret
      t = t && t.oauthIdToken
      try {
        switch (e) {
          case 'google.com':
            return Ni(t, n)
          case 'facebook.com':
            return Ti(n)
          case 'github.com':
            return Si(n)
          case 'twitter.com':
            return Ai(n, r)
          default:
            return new wi(e).credential(t, n)
        }
      } catch (t) {
        return null
      }
    }
    function Wi(t) {
      if (!t.isOAuthProvider) throw new Ur('invalid-oauth-provider')
    }
    function Bi(t, e, n, r, i) {
      if (
        ((this.b = t),
        (this.c = e || null),
        (this.f = n || null),
        (this.g = r || null),
        (this.a = i || null),
        !this.f && !this.a)
      )
        throw new Ur('invalid-auth-event')
      if (this.f && this.a) throw new Ur('invalid-auth-event')
      if (this.f && !this.g) throw new Ur('invalid-auth-event')
    }
    function ji(t) {
      return (t = t || {}).type
        ? new Bi(
            t.type,
            t.eventId,
            t.urlResponse,
            t.sessionId,
            t.error && Mr(t.error)
          )
        : null
    }
    function Vi() {
      ;(this.b = null), (this.a = [])
    }
    b(li, hi),
      b(pi, li),
      b(fi, li),
      b(di, li),
      b(vi, li),
      (gi.prototype.xa = function(t) {
        return da(t, mi(this))
      }),
      (gi.prototype.c = function(t, e) {
        var n = mi(this)
        return (n.idToken = e), va(t, n)
      }),
      (gi.prototype.f = function(t, e) {
        return _i(ya(t, mi(this)), e)
      }),
      (gi.prototype.C = function() {
        var t = {providerId: this.providerId, signInMethod: this.signInMethod}
        return (
          this.idToken && (t.oauthIdToken = this.idToken),
          this.accessToken && (t.oauthAccessToken = this.accessToken),
          this.secret && (t.oauthTokenSecret = this.secret),
          t
        )
      }),
      (bi.prototype.Ca = function(t) {
        return (this.tb = ot(t)), this
      }),
      b(wi, bi),
      (wi.prototype.ta = function(t) {
        return F(this.a, t) || this.a.push(t), this
      }),
      (wi.prototype.yb = function() {
        return B(this.a)
      }),
      (wi.prototype.credential = function(t, e) {
        if (!t && !e)
          throw new Ur(
            'argument-error',
            'credential failed: must provide the ID token and/or the access token.'
          )
        return new gi(
          this.providerId,
          {idToken: t || null, accessToken: e || null},
          this.providerId
        )
      }),
      b(Ei, wi),
      Sr(Ei, 'PROVIDER_ID', 'facebook.com'),
      Sr(Ei, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'),
      b(Ci, wi),
      Sr(Ci, 'PROVIDER_ID', 'github.com'),
      Sr(Ci, 'GITHUB_SIGN_IN_METHOD', 'github.com'),
      b(Ii, wi),
      Sr(Ii, 'PROVIDER_ID', 'google.com'),
      Sr(Ii, 'GOOGLE_SIGN_IN_METHOD', 'google.com'),
      b(Ri, bi),
      Sr(Ri, 'PROVIDER_ID', 'twitter.com'),
      Sr(Ri, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'),
      (ki.prototype.xa = function(t) {
        return this.signInMethod == Oi.EMAIL_LINK_SIGN_IN_METHOD
          ? Ka(t, Ca, {email: this.a, oobCode: this.b})
          : Ka(t, ja, {email: this.a, password: this.b})
      }),
      (ki.prototype.c = function(t, e) {
        return this.signInMethod == Oi.EMAIL_LINK_SIGN_IN_METHOD
          ? Ka(t, Sa, {idToken: e, email: this.a, oobCode: this.b})
          : Ka(t, xa, {idToken: e, email: this.a, password: this.b})
      }),
      (ki.prototype.f = function(t, e) {
        return _i(this.xa(t), e)
      }),
      (ki.prototype.C = function() {
        return {
          email: this.a,
          password: this.b,
          signInMethod: this.signInMethod
        }
      }),
      Ir(Oi, {PROVIDER_ID: 'password'}),
      Ir(Oi, {EMAIL_LINK_SIGN_IN_METHOD: 'emailLink'}),
      Ir(Oi, {EMAIL_PASSWORD_SIGN_IN_METHOD: 'password'}),
      (Li.prototype.xa = function(t) {
        return t.Sa(xi(this))
      }),
      (Li.prototype.c = function(t, e) {
        var n = xi(this)
        return (n.idToken = e), Ka(t, qa, n)
      }),
      (Li.prototype.f = function(t, e) {
        var n = xi(this)
        return (n.operation = 'REAUTH'), _i((t = Ka(t, Ha, n)), e)
      }),
      (Li.prototype.C = function() {
        var t = {providerId: 'phone'}
        return (
          this.a.Ra && (t.verificationId = this.a.Ra),
          this.a.Qa && (t.verificationCode = this.a.Qa),
          this.a.Ea && (t.temporaryProof = this.a.Ea),
          this.a.Z && (t.phoneNumber = this.a.Z),
          t
        )
      }),
      (Fi.prototype.Sa = function(t, e) {
        var n = this.a.b
        return Et(e.verify()).then(function(r) {
          if (!i(r))
            throw new Ur(
              'argument-error',
              'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
            )
          switch (e.type) {
            case 'recaptcha':
              return (function(t, e) {
                return Ka(t, Da, e)
              })(n, {phoneNumber: t, recaptchaToken: r}).then(
                function(t) {
                  return 'function' == typeof e.reset && e.reset(), t
                },
                function(t) {
                  throw ('function' == typeof e.reset && e.reset(), t)
                }
              )
            default:
              throw new Ur(
                'argument-error',
                'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
              )
          }
        })
      }),
      Ir(Fi, {PROVIDER_ID: 'phone'}),
      Ir(Fi, {PHONE_SIGN_IN_METHOD: 'phone'}),
      (Bi.prototype.C = function() {
        return {
          type: this.b,
          eventId: this.c,
          urlResponse: this.f,
          sessionId: this.g,
          error: this.a && this.a.C()
        }
      })
    var qi = null
    function Hi(t) {
      var e = 'unauthorized-domain',
        n = void 0,
        r = ze(t)
      ;(t = r.b),
        'chrome-extension' == (r = r.c)
          ? (n = j(
              'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
              t
            ))
          : 'http' == r || 'https' == r
            ? (n = j(
                'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                t
              ))
            : (e = 'operation-not-supported-in-this-environment'),
        Ur.call(this, e, n)
    }
    function Ki(t, e, n) {
      Ur.call(this, t, n),
        (t = e || {}).ub && Sr(this, 'email', t.ub),
        t.Z && Sr(this, 'phoneNumber', t.Z),
        t.credential && Sr(this, 'credential', t.credential)
    }
    function Gi(t) {
      if (t.code) {
        var e = t.code || ''
        0 == e.indexOf(Wr) && (e = e.substring(Wr.length))
        var n = {credential: Mi(t)}
        if (t.email) n.ub = t.email
        else {
          if (!t.phoneNumber) return new Ur(e, t.message || void 0)
          n.Z = t.phoneNumber
        }
        return new Ki(e, n, t.message)
      }
      return null
    }
    ;(Vi.prototype.subscribe = function(t) {
      var e = this
      this.a.push(t),
        this.b ||
          ((this.b = function(t) {
            for (var n = 0; n < e.a.length; n++) e.a[n](t)
          }),
          'function' == typeof (t = ar('universalLinks.subscribe', r)) &&
            t(null, this.b))
    }),
      (Vi.prototype.unsubscribe = function(t) {
        M(this.a, function(e) {
          return e == t
        })
      }),
      b(Hi, Ur),
      b(Ki, Ur),
      (Ki.prototype.C = function() {
        var t = {code: this.code, message: this.message}
        this.email && (t.email = this.email),
          this.phoneNumber && (t.phoneNumber = this.phoneNumber)
        var e = this.credential && this.credential.C()
        return e && ct(t, e), t
      }),
      (Ki.prototype.toJSON = function() {
        return this.C()
      })
    var Qi,
      zi = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/
    function Yi() {}
    function Xi(t) {
      return t.c || (t.c = t.b())
    }
    function $i() {}
    function Ji(t) {
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
          var r = e[n]
          try {
            return new ActiveXObject(r), (t.f = r)
          } catch (t) {}
        }
        throw Error(
          'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
        )
      }
      return t.f
    }
    function Zi() {}
    function to() {
      ;(this.a = new XDomainRequest()),
        (this.readyState = 0),
        (this.onreadystatechange = null),
        (this.responseText = ''),
        (this.status = -1),
        (this.statusText = ''),
        (this.a.onload = _(this.bc, this)),
        (this.a.onerror = _(this.zb, this)),
        (this.a.onprogress = _(this.cc, this)),
        (this.a.ontimeout = _(this.fc, this))
    }
    function eo(t, e) {
      ;(t.readyState = e), t.onreadystatechange && t.onreadystatechange()
    }
    function no(t, e, n) {
      this.reset(t, e, n, void 0, void 0)
    }
    function ro(t) {
      ;(this.f = t), (this.b = this.c = this.a = null)
    }
    function io(t, e) {
      ;(this.name = t), (this.value = e)
    }
    ;(Yi.prototype.c = null),
      b($i, Yi),
      ($i.prototype.a = function() {
        var t = Ji(this)
        return t ? new ActiveXObject(t) : new XMLHttpRequest()
      }),
      ($i.prototype.b = function() {
        var t = {}
        return Ji(this) && ((t[0] = !0), (t[1] = !0)), t
      }),
      (Qi = new $i()),
      b(Zi, Yi),
      (Zi.prototype.a = function() {
        var t = new XMLHttpRequest()
        if ('withCredentials' in t) return t
        if ('undefined' != typeof XDomainRequest) return new to()
        throw Error('Unsupported browser')
      }),
      (Zi.prototype.b = function() {
        return {}
      }),
      ((t = to.prototype).open = function(t, e, n) {
        if (null != n && !n) throw Error('Only async requests are supported.')
        this.a.open(t, e)
      }),
      (t.send = function(t) {
        if (t) {
          if ('string' != typeof t) throw Error('Only string data is supported')
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
      (no.prototype.reset = function(t, e, n, r, i) {
        delete this.a
      }),
      (io.prototype.toString = function() {
        return this.name
      })
    var oo = new io('SEVERE', 1e3),
      ao = new io('WARNING', 900),
      so = new io('CONFIG', 700),
      uo = new io('FINE', 500)
    ro.prototype.log = function(t, e, n) {
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
    function lo(t) {
      var e
      if (
        (ho || ((ho = new ro('')), (co[''] = ho), (ho.c = so)), !(e = co[t]))
      ) {
        e = new ro(t)
        var n = t.lastIndexOf('.'),
          r = t.substr(n + 1)
        ;(n = lo(t.substr(0, n))).b || (n.b = {}),
          (n.b[r] = e),
          (e.a = n),
          (co[t] = e)
      }
      return e
    }
    function po(t, e) {
      t && t.log(uo, e, void 0)
    }
    function fo(t) {
      this.f = t
    }
    function vo(t) {
      ke.call(this),
        (this.j = t),
        (this.readyState = yo),
        (this.status = 0),
        (this.responseText = this.statusText = ''),
        (this.onreadystatechange = null),
        (this.g = new Headers()),
        (this.b = null),
        (this.h = 'GET'),
        (this.c = ''),
        (this.a = !1),
        (this.f = lo('goog.net.FetchXmlHttp'))
    }
    b(fo, Yi),
      (fo.prototype.a = function() {
        return new vo(this.f)
      }),
      (fo.prototype.b = (function(t) {
        return function() {
          return t
        }
      })({})),
      b(vo, ke)
    var yo = 0
    function _o(t) {
      t.onreadystatechange && t.onreadystatechange.call(t)
    }
    function go(t) {
      ke.call(this),
        (this.headers = new Me()),
        (this.D = t || null),
        (this.c = !1),
        (this.B = this.a = null),
        (this.h = this.N = this.l = ''),
        (this.f = this.I = this.j = this.G = !1),
        (this.g = 0),
        (this.s = null),
        (this.o = mo),
        (this.v = this.O = !1)
    }
    ;((t = vo.prototype).open = function(t, e) {
      if (this.readyState != yo)
        throw (this.abort(), Error('Error reopening a connection'))
      ;(this.h = t), (this.c = e), (this.readyState = 1), _o(this)
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
            ((this.readyState = 4), (this.a = !1), _o(this)),
          (this.readyState = yo)
      }),
      (t.ec = function(t) {
        this.a &&
          (this.b || ((this.b = t.headers), (this.readyState = 2), _o(this)),
          this.a &&
            ((this.readyState = 3),
            _o(this),
            this.a && t.text().then(this.dc.bind(this, t), this.Ab.bind(this))))
      }),
      (t.dc = function(t, e) {
        this.a &&
          ((this.status = t.status),
          (this.statusText = t.statusText),
          (this.responseText = e),
          (this.readyState = 4),
          _o(this))
      }),
      (t.Ab = function(t) {
        var e = this.f
        e &&
          e.log(
            ao,
            'Failed to fetch url ' + this.c,
            t instanceof Error ? t : Error(t)
          ),
          this.a && ((this.readyState = 4), _o(this))
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
      b(go, ke)
    var mo = ''
    go.prototype.b = lo('goog.net.XhrIo')
    var bo = /^https?$/i,
      wo = ['POST', 'PUT']
    function Eo(t, e, n, o, a) {
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
        (t.a = t.D ? t.D.a() : Qi.a()),
        (t.B = t.D ? Xi(t.D) : Xi(Qi)),
        (t.a.onreadystatechange = _(t.Db, t))
      try {
        po(t.b, Oo(t, 'Opening Xhr')),
          (t.I = !0),
          t.a.open(n, String(e), !0),
          (t.I = !1)
      } catch (e) {
        return po(t.b, Oo(t, 'Error opening Xhr: ' + e.message)), void Co(t, e)
      }
      e = o || ''
      var s = new Me(t.headers)
      a &&
        (function(t, e) {
          if (t.forEach && 'function' == typeof t.forEach) t.forEach(e, void 0)
          else if (h(t) || i(t)) D(t, e, void 0)
          else
            for (var n = Ue(t), r = Fe(t), o = r.length, a = 0; a < o; a++)
              e.call(void 0, r[a], n && n[a], t)
        })(a, function(t, e) {
          s.set(e, t)
        }),
        (a = (function(t) {
          t: {
            for (
              var e = To, n = t.length, r = i(t) ? t.split('') : t, o = 0;
              o < n;
              o++
            )
              if (o in r && e.call(void 0, r[o], o, t)) {
                e = o
                break t
              }
            e = -1
          }
          return 0 > e ? null : i(t) ? t.charAt(e) : t[e]
        })(s.U())),
        (o = r.FormData && e instanceof r.FormData),
        !F(wo, n) ||
          a ||
          o ||
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
        Ro(t),
          0 < t.g &&
            ((t.v = (function(t) {
              return (
                qt &&
                te(9) &&
                'number' == typeof t.timeout &&
                void 0 !== t.ontimeout
              )
            })(t.a)),
            po(
              t.b,
              Oo(t, 'Will abort after ' + t.g + 'ms if incomplete, xhr2 ' + t.v)
            ),
            t.v
              ? ((t.a.timeout = t.g), (t.a.ontimeout = _(t.Fa, t)))
              : (t.s = Le(t.Fa, t.g, t))),
          po(t.b, Oo(t, 'Sending request')),
          (t.j = !0),
          t.a.send(e),
          (t.j = !1)
      } catch (e) {
        po(t.b, Oo(t, 'Send error: ' + e.message)), Co(t, e)
      }
    }
    function To(t) {
      return 'content-type' == t.toLowerCase()
    }
    function Co(t, e) {
      ;(t.c = !1),
        t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
        (t.h = e),
        So(t),
        No(t)
    }
    function So(t) {
      t.G || ((t.G = !0), t.dispatchEvent('complete'), t.dispatchEvent('error'))
    }
    function Io(t) {
      if (t.c && void 0 !== n)
        if (t.B[1] && 4 == Ao(t) && 2 == ko(t))
          po(t.b, Oo(t, 'Local request error detected and ignored'))
        else if (t.j && 4 == Ao(t)) Le(t.Db, 0, t)
        else if ((t.dispatchEvent('readystatechange'), 4 == Ao(t))) {
          po(t.b, Oo(t, 'Request complete')), (t.c = !1)
          try {
            var e,
              i = ko(t)
            t: switch (i) {
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
              if ((a = 0 === i)) {
                var s = String(t.l).match(je)[1] || null
                if (!s && r.self && r.self.location) {
                  var u = r.self.location.protocol
                  s = u.substr(0, u.length - 1)
                }
                a = !bo.test(s ? s.toLowerCase() : '')
              }
              e = a
            }
            if (e) t.dispatchEvent('complete'), t.dispatchEvent('success')
            else {
              try {
                var c = 2 < Ao(t) ? t.a.statusText : ''
              } catch (e) {
                po(t.b, 'Can not get status: ' + e.message), (c = '')
              }
              ;(t.h = c + ' [' + ko(t) + ']'), So(t)
            }
          } finally {
            No(t)
          }
        }
    }
    function No(t, e) {
      if (t.a) {
        Ro(t)
        var n = t.a,
          r = t.B[0] ? a : null
        ;(t.a = null), (t.B = null), e || t.dispatchEvent('ready')
        try {
          n.onreadystatechange = r
        } catch (e) {
          ;(t = t.b) &&
            t.log(
              oo,
              'Problem encountered resetting onreadystatechange: ' + e.message,
              void 0
            )
        }
      }
    }
    function Ro(t) {
      t.a && t.v && (t.a.ontimeout = null),
        t.s && (r.clearTimeout(t.s), (t.s = null))
    }
    function Ao(t) {
      return t.a ? t.a.readyState : 0
    }
    function ko(t) {
      try {
        return 2 < Ao(t) ? t.a.status : -1
      } catch (t) {
        return -1
      }
    }
    function Oo(t, e) {
      return e + ' [' + t.N + ' ' + t.l + ' ' + ko(t) + ']'
    }
    function Po(t, e) {
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
      ;(t.a = !0), (t.c = n), (t.f = !e), Uo(t)
    }
    function Lo(t) {
      if (t.a) {
        if (!t.u) throw new Mo(t)
        t.u = !1
      }
    }
    function xo(t, e, n, r) {
      t.g.push([e, n, r]), t.a && Uo(t)
    }
    function Fo(t) {
      return x(t.g, function(t) {
        return l(t[1])
      })
    }
    function Uo(t) {
      if (t.h && t.a && Fo(t)) {
        var e = t.h,
          n = jo[e]
        n && (r.clearTimeout(n.a), delete jo[e]), (t.h = 0)
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
          } catch (r) {
            ;(e = r), (t.f = !0), Fo(t) || (n = !0)
          }
      }
      ;(t.c = e),
        i &&
          ((u = _(t.o, t, !0)),
          (i = _(t.o, t, !1)),
          e instanceof Po ? (xo(e, u, i), (e.B = !0)) : e.then(u, i)),
        n && ((e = new Bo(e)), (jo[e.a] = e), (t.h = e.a))
    }
    function Mo() {
      T.call(this)
    }
    function Wo() {
      T.call(this)
    }
    function Bo(t) {
      ;(this.a = r.setTimeout(_(this.c, this), 0)), (this.b = t)
    }
    ;((t = go.prototype).Fa = function() {
      void 0 !== n &&
        this.a &&
        ((this.h = 'Timed out after ' + this.g + 'ms, aborting'),
        po(this.b, Oo(this, this.h)),
        this.dispatchEvent('timeout'),
        this.abort(8))
    }),
      (t.abort = function() {
        this.a &&
          this.c &&
          (po(this.b, Oo(this, 'Aborting')),
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
          go.lb.ua.call(this)
      }),
      (t.Db = function() {
        this.pa || (this.I || this.j || this.f ? Io(this) : this.tc())
      }),
      (t.tc = function() {
        Io(this)
      }),
      (t.getResponse = function() {
        try {
          if (!this.a) return null
          if ('response' in this.a) return this.a.response
          switch (this.o) {
            case mo:
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
                'Response type ' + this.o + ' is not supported on this browser',
                void 0
              ),
            null
          )
        } catch (t) {
          return po(this.b, 'Can not get response: ' + t.message), null
        }
      }),
      (Po.prototype.cancel = function(t) {
        if (this.a) this.c instanceof Po && this.c.cancel()
        else {
          if (this.b) {
            var e = this.b
            delete this.b, t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel())
          }
          this.v ? this.v.call(this.s, this) : (this.u = !0),
            this.a || ((t = new Wo(this)), Lo(this), Do(this, !1, t))
        }
      }),
      (Po.prototype.o = function(t, e) {
        ;(this.j = !1), Do(this, t, e)
      }),
      (Po.prototype.D = function() {
        Lo(this), Do(this, !0, null)
      }),
      (Po.prototype.then = function(t, e, n) {
        var r,
          i,
          o = new vt(function(t, e) {
            ;(r = t), (i = e)
          })
        return (
          xo(this, r, function(t) {
            t instanceof Wo ? o.cancel() : i(t)
          }),
          o.then(t, e, n)
        )
      }),
      w(Po),
      b(Mo, T),
      (Mo.prototype.message = 'Deferred has already fired'),
      (Mo.prototype.name = 'AlreadyCalledError'),
      b(Wo, T),
      (Wo.prototype.message = 'Deferred was canceled'),
      (Wo.prototype.name = 'CanceledError'),
      (Bo.prototype.c = function() {
        throw (delete jo[this.a], this.b)
      })
    var jo = {}
    function Vo(t) {
      var e = {},
        n = e.document || document,
        r = gn(t),
        i = document.createElement('SCRIPT'),
        o = {Fb: i, Fa: void 0},
        a = new Po(qo, o),
        s = null,
        u = null != e.timeout ? e.timeout : 5e3
      return (
        0 < u &&
          ((s = window.setTimeout(function() {
            Ho(i, !0)
            var t = new Qo(Go, 'Timeout reached for loading script ' + r)
            Lo(a), Do(a, !1, t)
          }, u)),
          (o.Fa = s)),
        (i.onload = i.onreadystatechange = function() {
          ;(i.readyState &&
            'loaded' != i.readyState &&
            'complete' != i.readyState) ||
            (Ho(i, e.bd || !1, s), a.D())
        }),
        (i.onerror = function() {
          Ho(i, !0, s)
          var t = new Qo(Ko, 'Error while loading script ' + r)
          Lo(a), Do(a, !1, t)
        }),
        ct((o = e.attributes || {}), {
          type: 'text/javascript',
          charset: 'UTF-8'
        }),
        Dn(i, o),
        (i.src = gn(t)),
        (function(t) {
          var e
          return (e = (t || document).getElementsByTagName('HEAD')) &&
            0 != e.length
            ? e[0]
            : t.documentElement
        })(n).appendChild(i),
        a
      )
    }
    function qo() {
      if (this && this.Fb) {
        var t = this.Fb
        t && 'SCRIPT' == t.tagName && Ho(t, !0, this.Fa)
      }
    }
    function Ho(t, e, n) {
      null != n && r.clearTimeout(n),
        (t.onload = a),
        (t.onerror = a),
        (t.onreadystatechange = a),
        e &&
          window.setTimeout(function() {
            t && t.parentNode && t.parentNode.removeChild(t)
          }, 0)
    }
    var Ko = 0,
      Go = 1
    function Qo(t, e) {
      var n = 'Jsloader error (code #' + t + ')'
      e && (n += ': ' + e), T.call(this, n), (this.code = t)
    }
    function zo(t) {
      this.f = t
    }
    function Yo(t, n, i) {
      if (
        ((this.b = t),
        (t = n || {}),
        (this.j =
          t.secureTokenEndpoint ||
          'https://securetoken.googleapis.com/v1/token'),
        (this.l = t.secureTokenTimeout || Jo),
        (this.f = ot(t.secureTokenHeaders || Zo)),
        (this.g =
          t.firebaseEndpoint ||
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'),
        (this.h = t.firebaseTimeout || ta),
        (this.a = ot(t.firebaseHeaders || ea)),
        i &&
          ((this.a['X-Client-Version'] = i), (this.f['X-Client-Version'] = i)),
        (i = 'Node' == Jn()),
        !(i =
          r.XMLHttpRequest ||
          (i && e.INTERNAL.node && e.INTERNAL.node.XMLHttpRequest)) && !$n())
      )
        throw new Ur(
          'internal-error',
          'The XMLHttpRequest compatibility library was not found.'
        )
      ;(this.c = void 0),
        $n()
          ? (this.c = new fo(self))
          : Zn() ? (this.c = new zo(i)) : (this.c = new Zi())
    }
    b(Qo, T),
      b(zo, Yi),
      (zo.prototype.a = function() {
        return new this.f()
      }),
      (zo.prototype.b = function() {
        return {}
      })
    var Xo,
      $o = 'idToken',
      Jo = new gr(3e4, 6e4),
      Zo = {'Content-Type': 'application/x-www-form-urlencoded'},
      ta = new gr(3e4, 6e4),
      ea = {'Content-Type': 'application/json'}
    function na(t, e) {
      e ? (t.a['X-Firebase-Locale'] = e) : delete t.a['X-Firebase-Locale']
    }
    function ra(t, e) {
      e
        ? ((t.a['X-Client-Version'] = e), (t.f['X-Client-Version'] = e))
        : (delete t.a['X-Client-Version'], delete t.f['X-Client-Version'])
    }
    function ia(t, e, n, i, o, a, s) {
      ;(function() {
        var t = or()
        return !(
          ((t =
            nr(t) != er
              ? null
              : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
                ? parseInt(t[1], 10)
                : null) &&
            30 > t) ||
          (qt && Jt && !(9 < Jt))
        )
      })() || $n()
        ? (t = _(t.o, t))
        : (Xo ||
            (Xo = new vt(function(t, e) {
              !(function(t, e) {
                if (((window.gapi || {}).client || {}).request) t()
                else {
                  r[aa] = function() {
                    ;((window.gapi || {}).client || {}).request
                      ? t()
                      : e(Error('CORS_UNSUPPORTED'))
                  }
                  var n = mn(oa, {onload: aa})
                  !(function(t, e) {
                    xo(t, null, e, void 0)
                  })(Vo(n), function() {
                    e(Error('CORS_UNSUPPORTED'))
                  })
                }
              })(t, e)
            })),
          (t = _(t.u, t))),
        t(e, n, i, o, a, s)
    }
    Yo.prototype.o = function(t, e, n, i, o, a) {
      if (
        $n() &&
        (void 0 === r.fetch || void 0 === r.Headers || void 0 === r.Request)
      )
        throw new Ur(
          'operation-not-supported-in-this-environment',
          'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.'
        )
      var s = new go(this.c)
      if (a) {
        s.g = Math.max(0, a)
        var u = setTimeout(function() {
          s.dispatchEvent('timeout')
        }, a)
      }
      Oe(s, 'complete', function() {
        u && clearTimeout(u)
        var t = null
        try {
          t =
            JSON.parse(
              (function(t) {
                try {
                  return t.a ? t.a.responseText : ''
                } catch (e) {
                  return po(t.b, 'Can not get responseText: ' + e.message), ''
                }
              })(this)
            ) || null
        } catch (e) {
          t = null
        }
        e && e(t)
      }),
        Pe(s, 'ready', function() {
          u && clearTimeout(u), Mt(this)
        }),
        Pe(s, 'timeout', function() {
          u && clearTimeout(u), Mt(this), e && e(null)
        }),
        Eo(s, t, n, i, o)
    }
    var oa = yn('https://apis.google.com/js/client.js?onload=%{onload}'),
      aa = '__fcb' + Math.floor(1e6 * Math.random()).toString()
    function sa(t) {
      if (!zi.test(t.email)) throw new Ur('invalid-email')
    }
    function ua(t) {
      'email' in t && sa(t)
    }
    function ca(t) {
      if (!t[$o]) throw new Ur('internal-error')
    }
    function ha(t) {
      if (t.phoneNumber || t.temporaryProof) {
        if (!t.phoneNumber || !t.temporaryProof) throw new Ur('internal-error')
      } else {
        if (!t.sessionInfo) throw new Ur('missing-verification-id')
        if (!t.code) throw new Ur('missing-verification-code')
      }
    }
    ;(Yo.prototype.u = function(t, e, n, r, i) {
      var o = this
      Xo.then(function() {
        window.gapi.client.setApiKey(o.b)
        var a = window.gapi.auth.getToken()
        window.gapi.auth.setToken(null),
          window.gapi.client.request({
            path: t,
            method: n,
            body: r,
            headers: i,
            authType: 'none',
            callback: function(t) {
              window.gapi.auth.setToken(a), e && e(t)
            }
          })
      }).m(function(t) {
        e && e({error: {message: (t && t.message) || 'CORS_UNSUPPORTED'}})
      })
    }),
      (Yo.prototype.jb = function() {
        return Ka(this, Fa, {})
      }),
      (Yo.prototype.mb = function(t, e) {
        return Ka(this, La, {idToken: t, email: e})
      }),
      (Yo.prototype.nb = function(t, e) {
        return Ka(this, xa, {idToken: t, password: e})
      })
    var la = {displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL'}
    function pa(t) {
      if (!t.requestUri || (!t.sessionId && !t.postBody))
        throw new Ur('internal-error')
    }
    function fa(t) {
      var e = null
      if (
        (t.needConfirmation
          ? ((t.code = 'account-exists-with-different-credential'), (e = Gi(t)))
          : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage
            ? ((t.code = 'credential-already-in-use'), (e = Gi(t)))
            : 'EMAIL_EXISTS' == t.errorMessage
              ? ((t.code = 'email-already-in-use'), (e = Gi(t)))
              : t.errorMessage && (e = Ga(t.errorMessage)),
        e)
      )
        throw e
      if (!t[$o]) throw new Ur('internal-error')
    }
    function da(t, e) {
      return (e.returnIdpCredential = !0), Ka(t, Ua, e)
    }
    function va(t, e) {
      return (e.returnIdpCredential = !0), Ka(t, Wa, e)
    }
    function ya(t, e) {
      return (e.returnIdpCredential = !0), (e.autoCreate = !1), Ka(t, Ma, e)
    }
    function _a(t) {
      if (!t.oobCode) throw new Ur('invalid-action-code')
    }
    ;((t = Yo.prototype).ob = function(t, e) {
      var n = {idToken: t},
        r = []
      return (
        rt(la, function(t, i) {
          var o = e[i]
          null === o ? r.push(t) : i in e && (n[i] = o)
        }),
        r.length && (n.deleteAttribute = r),
        Ka(this, La, n)
      )
    }),
      (t.gb = function(t, e) {
        return (
          ct((t = {requestType: 'PASSWORD_RESET', email: t}), e),
          Ka(this, Aa, t)
        )
      }),
      (t.hb = function(t, e) {
        return (
          ct((t = {requestType: 'EMAIL_SIGNIN', email: t}), e), Ka(this, Na, t)
        )
      }),
      (t.fb = function(t, e) {
        return (
          ct((t = {requestType: 'VERIFY_EMAIL', idToken: t}), e),
          Ka(this, Ra, t)
        )
      }),
      (t.Sa = function(t) {
        return Ka(this, Va, t)
      }),
      (t.Wa = function(t, e) {
        return Ka(this, Pa, {oobCode: t, newPassword: e})
      }),
      (t.Ia = function(t) {
        return Ka(this, ma, {oobCode: t})
      }),
      (t.Ua = function(t) {
        return Ka(this, ga, {oobCode: t})
      })
    var ga = {endpoint: 'setAccountInfo', A: _a, ba: 'email'},
      ma = {
        endpoint: 'resetPassword',
        A: _a,
        J: function(t) {
          var e = t.requestType
          if (!e || (!t.email && 'EMAIL_SIGNIN' != e))
            throw new Ur('internal-error')
        }
      },
      ba = {
        endpoint: 'signupNewUser',
        A: function(t) {
          if ((sa(t), !t.password)) throw new Ur('weak-password')
        },
        J: ca,
        R: !0
      },
      wa = {endpoint: 'createAuthUri'},
      Ea = {endpoint: 'deleteAccount', T: ['idToken']},
      Ta = {
        endpoint: 'setAccountInfo',
        T: ['idToken', 'deleteProvider'],
        A: function(t) {
          if (!c(t.deleteProvider)) throw new Ur('internal-error')
        }
      },
      Ca = {
        endpoint: 'emailLinkSignin',
        T: ['email', 'oobCode'],
        A: sa,
        J: ca,
        R: !0
      },
      Sa = {
        endpoint: 'emailLinkSignin',
        T: ['idToken', 'email', 'oobCode'],
        A: sa,
        J: ca,
        R: !0
      },
      Ia = {endpoint: 'getAccountInfo'},
      Na = {
        endpoint: 'getOobConfirmationCode',
        T: ['requestType'],
        A: function(t) {
          if ('EMAIL_SIGNIN' != t.requestType) throw new Ur('internal-error')
          sa(t)
        },
        ba: 'email'
      },
      Ra = {
        endpoint: 'getOobConfirmationCode',
        T: ['idToken', 'requestType'],
        A: function(t) {
          if ('VERIFY_EMAIL' != t.requestType) throw new Ur('internal-error')
        },
        ba: 'email'
      },
      Aa = {
        endpoint: 'getOobConfirmationCode',
        T: ['requestType'],
        A: function(t) {
          if ('PASSWORD_RESET' != t.requestType) throw new Ur('internal-error')
          sa(t)
        },
        ba: 'email'
      },
      ka = {pb: !0, endpoint: 'getProjectConfig', Cb: 'GET'},
      Oa = {
        pb: !0,
        endpoint: 'getRecaptchaParam',
        Cb: 'GET',
        J: function(t) {
          if (!t.recaptchaSiteKey) throw new Ur('internal-error')
        }
      },
      Pa = {endpoint: 'resetPassword', A: _a, ba: 'email'},
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
          if ((ua(t), !t.password)) throw new Ur('weak-password')
        },
        J: ca,
        R: !0
      },
      Fa = {endpoint: 'signupNewUser', J: ca, R: !0},
      Ua = {endpoint: 'verifyAssertion', A: pa, J: fa, R: !0},
      Ma = {
        endpoint: 'verifyAssertion',
        A: pa,
        J: function(t) {
          if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage)
            throw new Ur('user-not-found')
          if (t.errorMessage) throw Ga(t.errorMessage)
          if (!t[$o]) throw new Ur('internal-error')
        },
        R: !0
      },
      Wa = {
        endpoint: 'verifyAssertion',
        A: function(t) {
          if ((pa(t), !t.idToken)) throw new Ur('internal-error')
        },
        J: fa,
        R: !0
      },
      Ba = {
        endpoint: 'verifyCustomToken',
        A: function(t) {
          if (!t.token) throw new Ur('invalid-custom-token')
        },
        J: ca,
        R: !0
      },
      ja = {
        endpoint: 'verifyPassword',
        A: function(t) {
          if ((sa(t), !t.password)) throw new Ur('wrong-password')
        },
        J: ca,
        R: !0
      },
      Va = {endpoint: 'verifyPhoneNumber', A: ha, J: ca},
      qa = {
        endpoint: 'verifyPhoneNumber',
        A: function(t) {
          if (!t.idToken) throw new Ur('internal-error')
          ha(t)
        },
        J: function(t) {
          if (t.temporaryProof)
            throw ((t.code = 'credential-already-in-use'), Gi(t))
          ca(t)
        }
      },
      Ha = {
        Tb: {USER_NOT_FOUND: 'user-not-found'},
        endpoint: 'verifyPhoneNumber',
        A: ha,
        J: ca
      }
    function Ka(t, e, n) {
      if (
        !(function(t, e) {
          if (!e || !e.length) return !0
          if (!t) return !1
          for (var n = 0; n < e.length; n++) {
            var r = t[e[n]]
            if (void 0 === r || null === r || '' === r) return !1
          }
          return !0
        })(n, e.T)
      )
        return Tt(new Ur('internal-error'))
      var r,
        i = e.Cb || 'POST'
      return Et(n)
        .then(e.A)
        .then(function() {
          return (
            e.R && (n.returnSecureToken = !0),
            (function(t, e, n, r, i, o) {
              var a = ze(t.g + e)
              Ge(a, 'key', t.b), o && Ge(a, 'cb', m().toString())
              var s = 'GET' == n
              if (s) for (var u in r) r.hasOwnProperty(u) && Ge(a, u, r[u])
              return new vt(function(e, o) {
                ia(
                  t,
                  a.toString(),
                  function(t) {
                    t
                      ? t.error ? o(Qa(t, i || {})) : e(t)
                      : o(new Ur('network-request-failed'))
                  },
                  n,
                  s ? void 0 : Un(fr(r)),
                  t.a,
                  t.h.get()
                )
              })
            })(t, e.endpoint, i, n, e.Tb, e.pb || !1)
          )
        })
        .then(function(t) {
          return (r = t)
        })
        .then(e.J)
        .then(function() {
          if (!e.ba) return r
          if (!(e.ba in r)) throw new Ur('internal-error')
          return r[e.ba]
        })
    }
    function Ga(t) {
      return Qa({error: {errors: [{message: t}], code: 400, message: t}})
    }
    function Qa(t, e) {
      var n =
          ((t.error && t.error.errors && t.error.errors[0]) || {}).reason || '',
        r = {
          keyInvalid: 'invalid-api-key',
          ipRefererBlocked: 'app-not-authorized'
        }
      if ((n = r[n] ? new Ur(r[n]) : null)) return n
      for (var i in ((n = (t.error && t.error.message) || ''),
      ct(
        (r = {
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
      r))
        if (0 === n.indexOf(i)) return new Ur(r[i], e)
      return !e && t && (e = pr(t)), new Ur('internal-error', e)
    }
    var za,
      Ya = {
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
    function Xa(t) {
      for (var e in Ya)
        if (Ya[e].id === t)
          return {firebaseEndpoint: (t = Ya[e]).Ya, secureTokenEndpoint: t.eb}
      return null
    }
    function $a(t) {
      ;(this.b = t),
        (this.a = null),
        (this.ab = (function(t) {
          return (
            ns ||
            (ns = new vt(function(t, e) {
              function n() {
                _r(),
                  ar('gapi.load')('gapi.iframes', {
                    callback: t,
                    ontimeout: function() {
                      _r(), e(Error('Network Error'))
                    },
                    timeout: ts.get()
                  })
              }
              if (ar('gapi.iframes.Iframe')) t()
              else if (ar('gapi.load')) n()
              else {
                var i =
                  '__iframefcb' + Math.floor(1e6 * Math.random()).toString()
                ;(r[i] = function() {
                  ar('gapi.load') ? n() : e(Error('Network Error'))
                }),
                  Et(Vo((i = mn(Za, {onload: i})))).m(function() {
                    e(Error('Network Error'))
                  })
              }
            }).m(function(t) {
              throw ((ns = null), t)
            }))
          ).then(function() {
            return new vt(function(e, n) {
              ar('gapi.iframes.getContext')().open(
                {
                  where: document.body,
                  url: t.b,
                  messageHandlersFilter: ar(
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
                function(r) {
                  function i() {
                    clearTimeout(o), e()
                  }
                  ;(t.a = r), t.a.restyle({setHideOnLeave: !1})
                  var o = setTimeout(function() {
                    n(Error('Network Error'))
                  }, es.get())
                  r.ping(i).then(i, function() {
                    n(Error('Network Error'))
                  })
                }
              )
            })
          })
        })(this))
    }
    za = Xa('__EID__') ? '__EID__' : void 0
    var Ja,
      Za = yn('https://apis.google.com/js/api.js?onload=%{onload}'),
      ts = new gr(3e4, 6e4),
      es = new gr(5e3, 15e3),
      ns = null
    function rs(t, e, n) {
      ;(this.j = t),
        (this.g = e),
        (this.h = n),
        (this.f = null),
        (this.a = Ye(this.j, '/__/auth/iframe')),
        Ge(this.a, 'apiKey', this.g),
        Ge(this.a, 'appName', this.h),
        (this.b = null),
        (this.c = [])
    }
    function is(t, e, n, r, i) {
      ;(this.o = t),
        (this.u = e),
        (this.c = n),
        (this.l = r),
        (this.h = this.g = this.j = null),
        (this.a = i),
        (this.f = null)
    }
    function os(t) {
      try {
        return e
          .app(t)
          .auth()
          .Ka()
      } catch (t) {
        return []
      }
    }
    function as(t, e, n, r, i) {
      ;(this.u = t),
        (this.f = e),
        (this.b = n),
        (this.c = r || null),
        (this.h = i || null),
        (this.o = this.s = this.v = null),
        (this.g = []),
        (this.l = this.a = null)
    }
    function ss(t) {
      var e = Vn()
      return (function(t) {
        return Ka(t, ka, {}).then(function(t) {
          return t.authorizedDomains || []
        })
      })(t).then(function(t) {
        t: {
          var n = ze(e),
            r = n.c
          n = n.b
          for (var i = 0; i < t.length; i++) {
            var o = t[i],
              a = n,
              s = r
            if (
              (0 == o.indexOf('chrome-extension://')
                ? (a = ze(o).b == a && 'chrome-extension' == s)
                : 'http' != s && 'https' != s
                  ? (a = !1)
                  : Qn.test(o)
                    ? (a = a == o)
                    : ((o = o.split('.').join('\\.')),
                      (a = new RegExp('^(.+\\.' + o + '|' + o + ')$', 'i').test(
                        a
                      ))),
              a)
            ) {
              t = !0
              break t
            }
          }
          t = !1
        }
        if (!t) throw new Hi(Vn())
      })
    }
    function us(t) {
      return t.l
        ? t.l
        : ((t.l = zn().then(function() {
            if (!t.s) {
              var e = t.c,
                n = t.h,
                r = os(t.b),
                i = new rs(t.u, t.f, t.b)
              ;(i.f = e), (i.b = n), (i.c = B(r || [])), (t.s = i.toString())
            }
            ;(t.j = new $a(t.s)),
              (function(t) {
                if (!t.j) throw Error('IfcHandler must be initialized!')
                !(function(t, e) {
                  t.ab.then(function() {
                    t.a.register(
                      'authEvent',
                      e,
                      ar('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
                    )
                  })
                })(t.j, function(e) {
                  var n = {}
                  if (e && e.authEvent) {
                    var r = !1
                    for (e = ji(e.authEvent), n = 0; n < t.g.length; n++)
                      r = t.g[n](e) || r
                    return ((n = {}).status = r ? 'ACK' : 'ERROR'), Et(n)
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
          ((t.v = t.c ? ir(t.c, os(t.b)) : null),
          (t.o = new Yo(t.f, Xa(t.h), t.v))),
        t.o
      )
    }
    function hs(t, e, n, r, i, o, a, s, u, c) {
      return (
        ((t = new is(t, e, n, r, i)).j = o),
        (t.g = a),
        (t.h = s),
        (t.b = ot(u || null)),
        (t.f = c),
        t.toString()
      )
    }
    function ls(t) {
      if (
        ((this.a =
          t || (e.INTERNAL.reactNative && e.INTERNAL.reactNative.AsyncStorage)),
        !this.a)
      )
        throw new Ur(
          'internal-error',
          'The React Native compatibility library was not found.'
        )
      this.type = 'asyncStorage'
    }
    function ps() {
      if (!vs()) throw new Ur('web-storage-unsupported')
      ;(this.f = {}),
        (this.a = []),
        (this.b = 0),
        (this.g = r.indexedDB),
        (this.type = 'indexedDB')
    }
    function fs(t) {
      return new vt(function(e, n) {
        var r = t.g.open('firebaseLocalStorageDb', 1)
        ;(r.onerror = function(t) {
          try {
            t.preventDefault()
          } catch (t) {}
          n(Error(t.target.error))
        }),
          (r.onupgradeneeded = function(t) {
            t = t.target.result
            try {
              t.createObjectStore('firebaseLocalStorage', {
                keyPath: 'fbase_key'
              })
            } catch (t) {
              n(t)
            }
          }),
          (r.onsuccess = function(r) {
            ;(r = r.target.result).objectStoreNames.contains(
              'firebaseLocalStorage'
            )
              ? e(r)
              : (function(t) {
                  return new vt(function(e, n) {
                    var r = t.g.deleteDatabase('firebaseLocalStorageDb')
                    ;(r.onsuccess = function() {
                      e()
                    }),
                      (r.onerror = function(t) {
                        n(Error(t.target.error))
                      })
                  })
                })(t)
                  .then(function() {
                    return fs(t)
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
    function ds(t) {
      return t.h || (t.h = fs(t)), t.h
    }
    function vs() {
      try {
        return !!r.indexedDB
      } catch (t) {
        return !1
      }
    }
    function ys(t) {
      return t.objectStore('firebaseLocalStorage')
    }
    function _s(t, e) {
      return t.transaction(
        ['firebaseLocalStorage'],
        e ? 'readwrite' : 'readonly'
      )
    }
    function gs(t) {
      return new vt(function(e, n) {
        ;(t.onsuccess = function(t) {
          t && t.target ? e(t.target.result) : e()
        }),
          (t.onerror = function(t) {
            n(Error(t.target.errorCode))
          })
      })
    }
    function ms(t) {
      var e = this,
        n = null
      ;(this.a = []),
        (this.type = 'indexedDB'),
        (this.c = t),
        (this.b = Et()
          .then(function() {
            return vs()
              ? (Ja || (Ja = new ps()),
                (n = Ja)
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
                D(e.a, function(e) {
                  e(t)
                })
              }),
              t
            )
          }))
    }
    function bs() {
      ;(this.a = {}), (this.type = 'inMemory')
    }
    function ws() {
      if (
        !(function() {
          var t = 'Node' == Jn()
          if (
            !(t =
              Es() || (t && e.INTERNAL.node && e.INTERNAL.node.localStorage))
          )
            return !1
          try {
            return t.setItem('__sak', '1'), t.removeItem('__sak'), !0
          } catch (t) {
            return !1
          }
        })()
      ) {
        if ('Node' == Jn())
          throw new Ur(
            'internal-error',
            'The LocalStorage compatibility library was not found.'
          )
        throw new Ur('web-storage-unsupported')
      }
      ;(this.a = Es() || e.INTERNAL.node.localStorage),
        (this.type = 'localStorage')
    }
    function Es() {
      try {
        var t = r.localStorage,
          e = vr()
        return t && (t.setItem(e, '1'), t.removeItem(e)), t
      } catch (t) {
        return null
      }
    }
    function Ts() {
      this.type = 'nullStorage'
    }
    function Cs() {
      if (
        !(function() {
          var t = 'Node' == Jn()
          if (
            !(t =
              Ss() || (t && e.INTERNAL.node && e.INTERNAL.node.sessionStorage))
          )
            return !1
          try {
            return t.setItem('__sak', '1'), t.removeItem('__sak'), !0
          } catch (t) {
            return !1
          }
        })()
      ) {
        if ('Node' == Jn())
          throw new Ur(
            'internal-error',
            'The SessionStorage compatibility library was not found.'
          )
        throw new Ur('web-storage-unsupported')
      }
      ;(this.a = Ss() || e.INTERNAL.node.sessionStorage),
        (this.type = 'sessionStorage')
    }
    function Ss() {
      try {
        var t = r.sessionStorage,
          e = vr()
        return t && (t.setItem(e, '1'), t.removeItem(e)), t
      } catch (t) {
        return null
      }
    }
    ;(rs.prototype.toString = function() {
      return (
        this.f ? Ge(this.a, 'v', this.f) : un(this.a.a, 'v'),
        this.b ? Ge(this.a, 'eid', this.b) : un(this.a.a, 'eid'),
        this.c.length ? Ge(this.a, 'fw', this.c.join(',')) : un(this.a.a, 'fw'),
        this.a.toString()
      )
    }),
      (is.prototype.toString = function() {
        var t = Ye(this.o, '/__/auth/handler')
        if (
          (Ge(t, 'apiKey', this.u),
          Ge(t, 'appName', this.c),
          Ge(t, 'authType', this.l),
          this.a.isOAuthProvider)
        ) {
          var n = this.a
          try {
            var r = e
              .app(this.c)
              .auth()
              .ca()
          } catch (t) {
            r = null
          }
          for (var i in ((n.Xa = r),
          Ge(t, 'providerId', this.a.providerId),
          (r = fr((n = this.a).tb))))
            r[i] = r[i].toString()
          ;(i = n.Ac), (r = ot(r))
          for (var o = 0; o < i.length; o++) {
            var a = i[o]
            a in r && delete r[a]
          }
          n.Za && n.Xa && !r[n.Za] && (r[n.Za] = n.Xa),
            it(r) || Ge(t, 'customParameters', pr(r))
        }
        if (
          ('function' == typeof this.a.yb &&
            ((n = this.a.yb()).length && Ge(t, 'scopes', n.join(','))),
          this.j ? Ge(t, 'redirectUrl', this.j) : un(t.a, 'redirectUrl'),
          this.g ? Ge(t, 'eventId', this.g) : un(t.a, 'eventId'),
          this.h ? Ge(t, 'v', this.h) : un(t.a, 'v'),
          this.b)
        )
          for (var s in this.b)
            this.b.hasOwnProperty(s) && !Qe(t, s) && Ge(t, s, this.b[s])
        return (
          this.f ? Ge(t, 'eid', this.f) : un(t.a, 'eid'),
          (s = os(this.c)).length && Ge(t, 'fw', s.join(',')),
          t.toString()
        )
      }),
      ((t = as.prototype).Da = function(t, e, n) {
        var r = new Ur('popup-closed-by-user'),
          i = new Ur('web-storage-unsupported'),
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
                      return new vt(function(n) {
                        t.a.send(
                          e.type,
                          e,
                          n,
                          ar('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
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
              n || (t && Kn(t), e(i), (a = !0))
            })
          })
          .m(function() {})
          .then(function() {
            if (!a)
              return (function(t) {
                return new vt(function(e) {
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
                e(r)
              })
          })
      }),
      (t.Gb = function() {
        var t = or()
        return !lr(t) && !yr(t)
      }),
      (t.Bb = function() {
        return !1
      }),
      (t.xb = function(t, e, n, r, i, o, a) {
        if (!t) return Tt(new Ur('popup-blocked'))
        if (a && !lr())
          return (
            this.ea().m(function(e) {
              Kn(t), i(e)
            }),
            r(),
            Et()
          )
        this.a || (this.a = ss(cs(this)))
        var s = this
        return this.a
          .then(function() {
            var e = s.ea().m(function(e) {
              throw (Kn(t), i(e), e)
            })
            return r(), e
          })
          .then(function() {
            ;(Wi(n), a) ||
              qn(hs(s.u, s.f, s.b, e, n, null, o, s.c, void 0, s.h), t)
          })
          .m(function(t) {
            throw ('auth/network-request-failed' == t.code && (s.a = null), t)
          })
      }),
      (t.Ba = function(t, e, n) {
        this.a || (this.a = ss(cs(this)))
        var r = this
        return this.a
          .then(function() {
            Wi(e), qn(hs(r.u, r.f, r.b, t, e, Vn(), n, r.c, void 0, r.h))
          })
          .m(function(t) {
            throw ('auth/network-request-failed' == t.code && (r.a = null), t)
          })
      }),
      (t.ea = function() {
        var t = this
        return us(this)
          .then(function() {
            return t.j.ab
          })
          .m(function() {
            throw ((t.a = null), new Ur('network-request-failed'))
          })
      }),
      (t.Lb = function() {
        return !0
      }),
      (t.va = function(t) {
        this.g.push(t)
      }),
      (t.Ja = function(t) {
        M(this.g, function(e) {
          return e == t
        })
      }),
      ((t = ls.prototype).get = function(t) {
        return Et(this.a.getItem(t)).then(function(t) {
          return t && dr(t)
        })
      }),
      (t.set = function(t, e) {
        return Et(this.a.setItem(t, pr(e)))
      }),
      (t.P = function(t) {
        return Et(this.a.removeItem(t))
      }),
      (t.Y = function() {}),
      (t.aa = function() {}),
      ((t = ps.prototype).set = function(t, e) {
        var n,
          r = !1,
          i = this
        return ds(this)
          .then(function(e) {
            return gs((e = ys(_s((n = e), !0))).get(t))
          })
          .then(function(o) {
            var a = ys(_s(n, !0))
            return o
              ? ((o.value = e), gs(a.put(o)))
              : (i.b++,
                (r = !0),
                ((o = {}).fbase_key = t),
                (o.value = e),
                gs(a.add(o)))
          })
          .then(function() {
            i.f[t] = e
          })
          .ha(function() {
            r && i.b--
          })
      }),
      (t.get = function(t) {
        return ds(this)
          .then(function(e) {
            return gs(ys(_s(e, !1)).get(t))
          })
          .then(function(t) {
            return t && t.value
          })
      }),
      (t.P = function(t) {
        var e = !1,
          n = this
        return ds(this)
          .then(function(r) {
            return (e = !0), n.b++, gs(ys(_s(r, !0)).delete(t))
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
        return ds(this)
          .then(function(t) {
            var e = ys(_s(t, !1))
            return e.getAll
              ? gs(e.getAll())
              : new vt(function(t, n) {
                  var r = [],
                    i = e.openCursor()
                  ;(i.onsuccess = function(e) {
                    ;(e = e.target.result)
                      ? (r.push(e.value), e.continue())
                      : t(r)
                  }),
                    (i.onerror = function(t) {
                      n(Error(t.target.errorCode))
                    })
                })
          })
          .then(function(e) {
            var n = {},
              r = []
            if (0 == t.b) {
              for (r = 0; r < e.length; r++) n[e[r].fbase_key] = e[r].value
              ;(r = (function t(e, n) {
                var r,
                  i = []
                for (r in e)
                  if (r in n)
                    if (typeof e[r] != typeof n[r]) i.push(r)
                    else if (c(e[r])) {
                      t: {
                        var o = void 0,
                          a = e[r],
                          s = n[r]
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
                      o || i.push(r)
                    } else
                      'object' == typeof e[r] && null != e[r] && null != n[r]
                        ? 0 < t(e[r], n[r]).length && i.push(r)
                        : e[r] !== n[r] && i.push(r)
                  else i.push(r)
                for (r in n) r in e || i.push(r)
                return i
              })(t.f, n)),
                (t.f = n)
            }
            return r
          })
      }),
      (t.Y = function(t) {
        0 == this.a.length &&
          (function(t) {
            t.c && t.c.cancel('STOP_EVENT'),
              (function e() {
                t.c = xe(800)
                  .then(_(t.Jc, t))
                  .then(function(e) {
                    0 < e.length &&
                      D(t.a, function(t) {
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
        M(this.a, function(e) {
          return e == t
        }),
          0 == this.a.length && this.c && this.c.cancel('STOP_EVENT')
      }),
      ((t = ms.prototype).get = function(t) {
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
        M(this.a, function(e) {
          return e == t
        })
      }),
      ((t = bs.prototype).get = function(t) {
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
      ((t = ws.prototype).get = function(t) {
        var e = this
        return Et().then(function() {
          return dr(e.a.getItem(t))
        })
      }),
      (t.set = function(t, e) {
        var n = this
        return Et().then(function() {
          var r = pr(e)
          null === r ? n.P(t) : n.a.setItem(t, r)
        })
      }),
      (t.P = function(t) {
        var e = this
        return Et().then(function() {
          e.a.removeItem(t)
        })
      }),
      (t.Y = function(t) {
        r.window && ge(r.window, 'storage', t)
      }),
      (t.aa = function(t) {
        r.window && we(r.window, 'storage', t)
      }),
      ((t = Ts.prototype).get = function() {
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
      ((t = Cs.prototype).get = function(t) {
        var e = this
        return Et().then(function() {
          return dr(e.a.getItem(t))
        })
      }),
      (t.set = function(t, e) {
        var n = this
        return Et().then(function() {
          var r = pr(e)
          null === r ? n.P(t) : n.a.setItem(t, r)
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
    var Is,
      Ns,
      Rs = {w: ws, Pa: Cs},
      As = {w: ws, Pa: Cs},
      ks = {w: ls, Pa: Ts},
      Os = {w: ws, Pa: Ts},
      Ps = {Vc: 'local', NONE: 'none', Xc: 'session'}
    function Ds() {
      var t = !(yr(or()) || !Xn()),
        e = lr(),
        n = sr()
      ;(this.o = t),
        (this.h = e),
        (this.l = n),
        (this.a = {}),
        Is ||
          (Is = new function() {
            var t = {}
            ;(t.Browser = Rs),
              (t.Node = As),
              (t.ReactNative = ks),
              (t.Worker = Os),
              (this.a = t[Jn()])
          }()),
        (t = Is)
      try {
        this.g =
          (!jn() && wr()) || !r.indexedDB
            ? new t.a.w()
            : new ms($n() ? new bs() : new t.a.w())
      } catch (t) {
        ;(this.g = new bs()), (this.h = !0)
      }
      try {
        this.j = new t.a.Pa()
      } catch (t) {
        this.j = new bs()
      }
      ;(this.u = new bs()), (this.f = _(this.Kb, this)), (this.b = {})
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
    function Fs(t, e) {
      return 'firebase:' + t.name + (e ? ':' + e : '')
    }
    function Us(t, e, n) {
      return (n = Fs(e, n)), 'local' == e.w && (t.b[n] = null), xs(t, e.w).P(n)
    }
    function Ms(t) {
      t.c && (clearInterval(t.c), (t.c = null))
    }
    ;((t = Ds.prototype).get = function(t, e) {
      return xs(this, t.w).get(Fs(t, e))
    }),
      (t.set = function(t, e, n) {
        var r = Fs(t, n),
          i = this,
          o = xs(this, t.w)
        return o
          .set(r, e)
          .then(function() {
            return o.get(r)
          })
          .then(function(e) {
            'local' == t.w && (i.b[r] = e)
          })
      }),
      (t.addListener = function(t, e, n) {
        ;(t = Fs(t, e)),
          this.l && (this.b[t] = r.localStorage.getItem(t)),
          it(this.a) &&
            (xs(this, 'local').Y(this.f),
            this.h ||
              ((jn() || !wr()) && r.indexedDB) ||
              !this.l ||
              (function(t) {
                Ms(t),
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
        ;(t = Fs(t, e)),
          this.a[t] &&
            (M(this.a[t], function(t) {
              return t == n
            }),
            0 == this.a[t].length && delete this.a[t]),
          it(this.a) && (xs(this, 'local').aa(this.f), Ms(this))
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
              (void 0 !== t.a.a ? xs(this, 'local').aa(this.f) : Ms(this),
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
              qt &&
              Jt &&
              10 == Jt &&
              r.localStorage.getItem(e) !== t.a.newValue &&
              t.a.newValue !== t.a.oldValue
                ? setTimeout(n, 10)
                : n()
          }
        } else D(t, _(this.Va, this))
      }),
      (t.Va = function(t) {
        this.a[t] &&
          D(this.a[t], function(t) {
            t()
          })
      })
    var Ws,
      Bs = {name: 'authEvent', w: 'local'}
    function js(t, e) {
      ;(this.b = -1),
        (this.b = Vs),
        (this.f = r.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
        (this.g = this.c = 0),
        (this.a = []),
        (this.j = t),
        (this.h = e),
        (this.l = r.Int32Array ? new Int32Array(64) : Array(64)),
        void 0 !== Ws || (Ws = r.Int32Array ? new Int32Array(Ys) : Ys),
        this.reset()
    }
    b(js, function() {
      this.b = -1
    })
    for (var Vs = 64, qs = Vs - 1, Hs = [], Ks = 0; Ks < qs; Ks++) Hs[Ks] = 0
    var Gs = W(128, Hs)
    function Qs(t) {
      for (var e = t.f, n = t.l, r = 0, i = 0; i < e.length; )
        (n[r++] = (e[i] << 24) | (e[i + 1] << 16) | (e[i + 2] << 8) | e[i + 3]),
          (i = 4 * r)
      for (e = 16; 64 > e; e++) {
        ;(i = 0 | n[e - 15]), (r = 0 | n[e - 2])
        var o =
            ((0 | n[e - 16]) +
              (((i >>> 7) | (i << 25)) ^
                ((i >>> 18) | (i << 14)) ^
                (i >>> 3))) |
            0,
          a =
            ((0 | n[e - 7]) +
              (((r >>> 17) | (r << 15)) ^
                ((r >>> 19) | (r << 13)) ^
                (r >>> 10))) |
            0
        n[e] = (o + a) | 0
      }
      ;(r = 0 | t.a[0]), (i = 0 | t.a[1])
      var s = 0 | t.a[2],
        u = 0 | t.a[3],
        c = 0 | t.a[4],
        h = 0 | t.a[5],
        l = 0 | t.a[6]
      for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
        var p =
          ((((r >>> 2) | (r << 30)) ^
            ((r >>> 13) | (r << 19)) ^
            ((r >>> 22) | (r << 10))) +
            ((r & i) ^ (r & s) ^ (i & s))) |
          0
        ;(a =
          ((o =
            (o +
              (((c >>> 6) | (c << 26)) ^
                ((c >>> 11) | (c << 21)) ^
                ((c >>> 25) | (c << 7)))) |
            0) +
            (((a = ((a = (c & h) ^ (~c & l)) + (0 | Ws[e])) | 0) + (0 | n[e])) |
              0)) |
          0),
          (o = l),
          (l = h),
          (h = c),
          (c = (u + a) | 0),
          (u = s),
          (s = i),
          (i = r),
          (r = (a + p) | 0)
      }
      ;(t.a[0] = (t.a[0] + r) | 0),
        (t.a[1] = (t.a[1] + i) | 0),
        (t.a[2] = (t.a[2] + s) | 0),
        (t.a[3] = (t.a[3] + u) | 0),
        (t.a[4] = (t.a[4] + c) | 0),
        (t.a[5] = (t.a[5] + h) | 0),
        (t.a[6] = (t.a[6] + l) | 0),
        (t.a[7] = (t.a[7] + o) | 0)
    }
    function zs(t, e, n) {
      void 0 === n && (n = e.length)
      var r = 0,
        o = t.c
      if (i(e))
        for (; r < n; )
          (t.f[o++] = e.charCodeAt(r++)), o == t.b && (Qs(t), (o = 0))
      else {
        if (!h(e)) throw Error('message must be string or array')
        for (; r < n; ) {
          var a = e[r++]
          if (!('number' == typeof a && 0 <= a && 255 >= a && a == (0 | a)))
            throw Error('message must be a byte array')
          ;(t.f[o++] = a), o == t.b && (Qs(t), (o = 0))
        }
      }
      ;(t.c = o), (t.g += n)
    }
    js.prototype.reset = function() {
      ;(this.g = this.c = 0),
        (this.a = r.Int32Array ? new Int32Array(this.h) : B(this.h))
    }
    var Ys = [
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
    function Xs() {
      js.call(this, 8, $s)
    }
    b(Xs, js)
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
    function Js(t, e, n, r, i) {
      ;(this.u = t),
        (this.j = e),
        (this.l = n),
        (this.o = r || null),
        (this.s = i || null),
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
    function Zs(t) {
      return new Ur('invalid-cordova-configuration', t)
    }
    function tu(t) {
      var e = new Xs()
      zs(e, t), (t = [])
      var n = 8 * e.g
      56 > e.c ? zs(e, Gs, 56 - e.c) : zs(e, Gs, e.b - (e.c - 56))
      for (var r = 63; 56 <= r; r--) (e.f[r] = 255 & n), (n /= 256)
      for (Qs(e), r = n = 0; r < e.j; r++)
        for (var i = 24; 0 <= i; i -= 8) t[n++] = (e.a[r] >> i) & 255
      return (function(t) {
        return L(t, function(t) {
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
            return new vt(function(e) {
              t.va(function n(r) {
                return e(r), t.Ja(n), !1
              }),
                (function(t) {
                  function e(e) {
                    ;(i = !0),
                      o && o.cancel(),
                      ru(t).then(function(r) {
                        var i = n
                        if (r && e && e.url) {
                          var o = null
                          ;-1 != (i = yi(e.url)).indexOf('/__/auth/callback') &&
                            (o = (o =
                              'object' ==
                              typeof (o = dr(
                                Qe((o = ze(i)), 'firebaseError') || null
                              ))
                                ? Mr(o)
                                : null)
                              ? new Bi(r.b, r.c, null, null, o)
                              : new Bi(r.b, r.c, i, r.g)),
                            (i = o || n)
                        }
                        eu(t, i)
                      })
                  }
                  var n = new Bi(
                      'unknown',
                      null,
                      null,
                      null,
                      new Ur('no-auth-event')
                    ),
                    i = !1,
                    o = xe(500).then(function() {
                      return ru(t).then(function() {
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
                            ar('BuildInfo.packageName', r).toLowerCase() + '://'
                          ) && e({url: t}),
                      'function' == typeof a)
                    )
                      try {
                        a(t)
                      } catch (t) {
                        console.error(t)
                      }
                  }),
                    qi || (qi = new Vi()),
                    qi.subscribe(e)
                })(t)
            })
          })),
        t.f
      )
    }
    function ru(t) {
      var e = null
      return (function(t) {
        return t.b.get(Bs, t.a).then(function(t) {
          return ji(t)
        })
      })(t.g)
        .then(function(n) {
          return (e = n), Us((n = t.g).b, Bs, n.a)
        })
        .then(function() {
          return e
        })
    }
    ;((t = Js.prototype).ea = function() {
      return this.ya
        ? this.ya
        : (this.ya = (Yn(void 0)
            ? zn().then(function() {
                return new vt(function(t, e) {
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
            : Tt(Error('Cordova must run in an Android or iOS file scheme.'))
          ).then(
            function() {
              if ('function' != typeof ar('universalLinks.subscribe', r))
                throw Zs('cordova-universal-links-plugin is not installed')
              if (void 0 === ar('BuildInfo.packageName', r))
                throw Zs('cordova-plugin-buildinfo is not installed')
              if (
                'function' != typeof ar('cordova.plugins.browsertab.openUrl', r)
              )
                throw Zs('cordova-plugin-browsertab is not installed')
              if ('function' != typeof ar('cordova.InAppBrowser.open', r))
                throw Zs('cordova-plugin-inappbrowser is not installed')
            },
            function() {
              throw new Ur('cordova-not-ready')
            }
          ))
    }),
      (t.Da = function(t, e) {
        return e(new Ur('operation-not-supported-in-this-environment')), Et()
      }),
      (t.xb = function() {
        return Tt(new Ur('operation-not-supported-in-this-environment'))
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
        if (this.c) return Tt(new Ur('redirect-operation-pending'))
        var i = this,
          o = r.document,
          a = null,
          s = null,
          u = null,
          c = null
        return (this.c = Et()
          .then(function() {
            return Wi(e), nu(i)
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
                a = new Bi(e, i, null, o, new Ur('no-auth-event')),
                s = ar('BuildInfo.packageName', r)
              if ('string' != typeof s)
                throw new Ur('invalid-cordova-configuration')
              var u = ar('BuildInfo.displayName', r),
                c = {}
              if (
                or()
                  .toLowerCase()
                  .match(/iphone|ipad|ipod/)
              )
                c.ibi = s
              else {
                if (
                  !or()
                    .toLowerCase()
                    .match(/android/)
                )
                  return Tt(
                    new Ur('operation-not-supported-in-this-environment')
                  )
                c.apn = s
              }
              u && (c.appDisplayName = u), (o = tu(o)), (c.sessionId = o)
              var h = hs(t.u, t.j, t.l, e, n, null, i, t.o, c, t.s)
              return t
                .ea()
                .then(function() {
                  var e = t.h
                  return t.v.a.set(Bs, a.C(), e)
                })
                .then(function() {
                  var e = ar('cordova.plugins.browsertab.isAvailable', r)
                  if ('function' != typeof e)
                    throw new Ur('invalid-cordova-configuration')
                  var n = null
                  e(function(e) {
                    if (e) {
                      if (
                        'function' !=
                        typeof (n = ar('cordova.plugins.browsertab.openUrl', r))
                      )
                        throw new Ur('invalid-cordova-configuration')
                      n(h)
                    } else {
                      if (
                        'function' !=
                        typeof (n = ar('cordova.InAppBrowser.open', r))
                      )
                        throw new Ur('invalid-cordova-configuration')
                      ;(e = !(
                        !(e = or()).match(/(iPad|iPhone|iPod).*OS 7_\d/i) &&
                        !e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                      )),
                        (t.a = n(h, e ? '_blank' : '_system', 'location=yes'))
                    }
                  })
                })
            })(i, t, e, n)
          })
          .then(function() {
            return new vt(function(t, e) {
              ;(s = function() {
                var e = ar('cordova.plugins.browsertab.close', r)
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
                      e(new Ur('redirect-cancelled-by-user'))
                    }))
                }),
                (c = function() {
                  mr() && u()
                }),
                o.addEventListener('resume', u, !1),
                or()
                  .toLowerCase()
                  .match(/android/) ||
                  o.addEventListener('visibilitychange', c, !1)
            }).m(function(t) {
              return ru(i).then(function() {
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
              ((e = new Bi(
                'unknown',
                null,
                null,
                null,
                new Ur('no-auth-event')
              )),
              t(e))
          })
      }),
      (t.Ja = function(t) {
        M(this.b, function(e) {
          return e == t
        })
      })
    var iu = {name: 'pendingRedirect', w: 'session'}
    function ou(t) {
      return Us(t.b, iu, t.a)
    }
    function au(t, e, n) {
      ;(this.v = t),
        (this.l = e),
        (this.u = n),
        (this.h = []),
        (this.f = !1),
        (this.j = _(this.o, this)),
        (this.c = new yu()),
        (this.s = new bu()),
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
    function su(t, n, r, i) {
      var o = e.SDK_VERSION || null
      return Yn() ? new Js(t, n, r, o, i) : new as(t, n, r, o, i)
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
          var n = new Bi(
            'unknown',
            null,
            null,
            null,
            new Ur('operation-not-supported-in-this-environment')
          )
          fu(e) && t.o(n)
        }),
        t.a.Bb() || _u(t.c)
    }
    ;(au.prototype.reset = function() {
      ;(this.f = !1), this.a.Ja(this.j), (this.a = su(this.v, this.l, this.u))
    }),
      (au.prototype.subscribe = function(t) {
        if ((F(this.h, t) || this.h.push(t), !this.f)) {
          var e = this
          ;(function(t) {
            return t.b.get(iu, t.a).then(function(t) {
              return 'pending' == t
            })
          })(this.g)
            .then(function(t) {
              t
                ? ou(e.g).then(function() {
                    uu(e).m(function(t) {
                      var n = new Bi(
                        'unknown',
                        null,
                        null,
                        null,
                        new Ur('operation-not-supported-in-this-environment')
                      )
                      fu(t) && e.o(n)
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
        M(this.h, function(e) {
          return e == t
        })
      }),
      (au.prototype.o = function(t) {
        if (!t) throw new Ur('invalid-auth-event')
        for (var e = !1, n = 0; n < this.h.length; n++) {
          var r = this.h[n]
          if (r.qb(t.b, t.c)) {
            ;(e = this.b[t.b]) && e.h(t, r), (e = !0)
            break
          }
        }
        return _u(this.c), e
      })
    var hu = new gr(2e3, 1e4),
      lu = new gr(3e4, 6e4)
    function pu(t, e, n, r, i, o) {
      return t.a.xb(
        e,
        n,
        r,
        function() {
          t.f || ((t.f = !0), t.a.va(t.j))
        },
        function() {
          t.reset()
        },
        i,
        o
      )
    }
    function fu(t) {
      return !(!t || 'auth/cordova-not-ready' != t.code)
    }
    ;(au.prototype.da = function() {
      return this.c.da()
    }),
      (au.prototype.Ba = function(t, e, n) {
        var r,
          i = this
        return (function(t) {
          return t.b.set(iu, 'pending', t.a)
        })(this.g).then(function() {
          return i.a
            .Ba(t, e, n)
            .m(function(t) {
              if (fu(t))
                throw new Ur('operation-not-supported-in-this-environment')
              return (
                (r = t),
                ou(i.g).then(function() {
                  throw r
                })
              )
            })
            .then(function() {
              return i.a.Lb()
                ? new vt(function() {})
                : ou(i.g)
                    .then(function() {
                      return i.da()
                    })
                    .then(function() {})
                    .m(function() {})
            })
        })
      }),
      (au.prototype.Da = function(t, e, n, r) {
        return this.a.Da(
          n,
          function(n) {
            t.ga(e, null, n, r)
          },
          hu.get()
        )
      })
    var du = {}
    function vu(t, e, n) {
      var r = e + ':' + n
      return du[r] || (du[r] = new au(t, e, n)), du[r]
    }
    function yu() {
      ;(this.b = null),
        (this.f = []),
        (this.c = []),
        (this.a = null),
        (this.g = !1)
    }
    function _u(t) {
      t.g || ((t.g = !0), mu(t, !1, null, null))
    }
    function gu(t, e) {
      if (
        ((t.b = function() {
          return Et(e)
        }),
        t.f.length)
      )
        for (var n = 0; n < t.f.length; n++) t.f[n](e)
    }
    function mu(t, e, n, r) {
      e
        ? r
          ? (function(t, e) {
              if (
                ((t.b = function() {
                  return Tt(e)
                }),
                t.c.length)
              )
                for (var n = 0; n < t.c.length; n++) t.c[n](e)
            })(t, r)
          : gu(t, n)
        : gu(t, {user: null}),
        (t.f = []),
        (t.c = [])
    }
    function bu() {}
    function wu(t, e) {
      ;(this.a = e), Sr(this, 'verificationId', t)
    }
    function Eu(t, e, n, r) {
      return new Fi(t).Sa(e, n).then(function(t) {
        return new wu(t, r)
      })
    }
    function Tu(t, e, n) {
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
    function Cu(t) {
      ;(this.f = t), (this.b = this.a = null), (this.c = 0)
    }
    function Su(t, e) {
      var n = e[$o],
        r = e.refreshToken
      ;(e = Iu(e.expiresIn)), (t.b = n), (t.c = e), (t.a = r)
    }
    function Iu(t) {
      return m() + 1e3 * parseInt(t, 10)
    }
    function Nu(t, e) {
      return (function(t, e) {
        return new vt(function(n, r) {
          ;('refresh_token' == e.grant_type && e.refresh_token) ||
          ('authorization_code' == e.grant_type && e.code)
            ? ia(
                t,
                t.j + '?key=' + encodeURIComponent(t.b),
                function(t) {
                  t
                    ? t.error
                      ? r(Qa(t))
                      : t.access_token && t.refresh_token
                        ? n(t)
                        : r(new Ur('internal-error'))
                    : r(new Ur('network-request-failed'))
                },
                'POST',
                sn(e).toString(),
                t.f,
                t.l.get()
              )
            : r(new Ur('internal-error'))
        })
      })(t.f, e)
        .then(function(e) {
          return (
            (t.b = e.access_token),
            (t.c = Iu(e.expires_in)),
            (t.a = e.refresh_token),
            {accessToken: t.b, expirationTime: t.c, refreshToken: t.a}
          )
        })
        .m(function(e) {
          throw ('auth/user-token-expired' == e.code && (t.a = null), e)
        })
    }
    function Ru(t, e) {
      ;(this.a = t || null),
        (this.b = e || null),
        Ir(this, {lastSignInTime: br(e || null), creationTime: br(t || null)})
    }
    function Au(t, e) {
      for (var n in (se.call(this, t), e)) this[n] = e[n]
    }
    function ku(t, n, r) {
      ;(this.D = []),
        (this.G = t.apiKey),
        (this.s = t.appName),
        (this.B = t.authDomain || null),
        (t = e.SDK_VERSION ? ir(e.SDK_VERSION) : null),
        (this.b = new Yo(this.G, Xa(za), t)),
        (this.h = new Cu(this.b)),
        Uu(this, n[$o]),
        Su(this.h, n),
        Sr(this, 'refreshToken', this.h.a),
        Bu(this, r || {}),
        ke.call(this),
        (this.I = !1),
        this.B && ur() && (this.a = vu(this.B, this.G, this.s)),
        (this.N = []),
        (this.j = null),
        (this.l = (function(t) {
          return new Tu(
            function() {
              return t.F(!0)
            },
            function(t) {
              return !(!t || 'auth/network-request-failed' != t.code)
            },
            function() {
              var e = t.h.c - m() - 3e5
              return 0 < e ? e : 0
            }
          )
        })(this)),
        (this.V = _(this.Ga, this))
      var i = this
      ;(this.ia = null),
        (this.sa = function(t) {
          i.na(t.g)
        }),
        (this.X = null),
        (this.O = []),
        (this.ra = function(t) {
          Pu(i, t.c)
        }),
        (this.W = null)
    }
    function Ou(t, e) {
      t.X && we(t.X, 'languageCodeChanged', t.sa),
        (t.X = e) && ge(e, 'languageCodeChanged', t.sa)
    }
    function Pu(t, n) {
      ;(t.O = n), ra(t.b, e.SDK_VERSION ? ir(e.SDK_VERSION, t.O) : null)
    }
    function Du(t, e) {
      t.W && we(t.W, 'frameworkChanged', t.ra),
        (t.W = e) && ge(e, 'frameworkChanged', t.ra)
    }
    function Lu(t) {
      try {
        return e.app(t.s).auth()
      } catch (e) {
        throw new Ur(
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
        (t.l.start(), we(t, 'tokenChanged', t.V), ge(t, 'tokenChanged', t.V))
    }
    function Fu(t) {
      we(t, 'tokenChanged', t.V), t.l.stop()
    }
    function Uu(t, e) {
      ;(t.qa = e), Sr(t, '_lat', e)
    }
    function Mu(t) {
      for (var e = [], n = 0; n < t.N.length; n++) e.push(t.N[n](t))
      return (function(t) {
        return new vt(function(e) {
          var n = t.length,
            r = []
          if (n)
            for (
              var i = function(t, i, o) {
                  n--,
                    (r[t] = i ? {Zb: !0, value: o} : {Zb: !1, reason: o}),
                    0 == n && e(r)
                },
                o = 0;
              o < t.length;
              o++
            )
              Ct(t[o], g(i, o, !0), g(i, o, !1))
          else e(r)
        })
      })(e).then(function() {
        return t
      })
    }
    function Wu(t) {
      t.a && !t.I && ((t.I = !0), t.a.subscribe(t))
    }
    function Bu(t, e) {
      Ir(t, {
        uid: e.uid,
        displayName: e.displayName || null,
        photoURL: e.photoURL || null,
        email: e.email || null,
        emailVerified: e.emailVerified || !1,
        phoneNumber: e.phoneNumber || null,
        isAnonymous: e.isAnonymous || !1,
        metadata: new Ru(e.createdAt, e.lastLoginAt),
        providerData: []
      })
    }
    function ju() {}
    function Vu(t) {
      return Et().then(function() {
        if (t.o) throw new Ur('app-deleted')
      })
    }
    function qu(t) {
      return L(t.providerData, function(t) {
        return t.providerId
      })
    }
    function Hu(t, e) {
      e && (Ku(t, e.providerId), t.providerData.push(e))
    }
    function Ku(t, e) {
      M(t.providerData, function(t) {
        return t.providerId == e
      })
    }
    function Gu(t, e, n) {
      ;('uid' != e || n) && t.hasOwnProperty(e) && Sr(t, e, n)
    }
    function Qu(t, e) {
      t != e &&
        (Ir(t, {
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
          ? Sr(
              t,
              'metadata',
              (function(t) {
                return new Ru(t.a, t.b)
              })(e.metadata)
            )
          : Sr(t, 'metadata', new Ru()),
        D(e.providerData, function(e) {
          Hu(t, e)
        }),
        (t.h = e.h),
        Sr(t, 'refreshToken', t.h.a))
    }
    function zu(t) {
      return t.F().then(function(e) {
        var n = t.isAnonymous
        return (function(t, e) {
          return Ka(t.b, Ia, {idToken: e}).then(_(t.uc, t))
        })(t, e).then(function() {
          return n || Gu(t, 'isAnonymous', !1), e
        })
      })
    }
    function Yu(t, e) {
      e[$o] &&
        t.qa != e[$o] &&
        (Su(t.h, e),
        t.dispatchEvent(new Au('tokenChanged')),
        Uu(t, e[$o]),
        Gu(t, 'refreshToken', t.h.a))
    }
    function Xu(t, e) {
      return zu(t).then(function() {
        if (F(qu(t), e))
          return Mu(t).then(function() {
            throw new Ur('provider-already-linked')
          })
      })
    }
    function $u(t, e, n) {
      return Nr({
        user: t,
        credential: Mi(e),
        additionalUserInfo: (e = si(e)),
        operationType: n
      })
    }
    function Ju(t, e) {
      return (
        Yu(t, e),
        t.reload().then(function() {
          return t
        })
      )
    }
    function Zu(t, n, r, i, o) {
      if (!ur())
        return Tt(new Ur('operation-not-supported-in-this-environment'))
      if (t.j && !o) return Tt(t.j)
      var a = ai(r.providerId),
        s = vr(t.uid + ':::'),
        u = null
      ;(!lr() || Xn()) &&
        t.B &&
        r.isOAuthProvider &&
        (u = hs(t.B, t.G, t.s, n, r, null, s, e.SDK_VERSION || null))
      var c = Gn(u, a && a.Aa, a && a.za)
      return (
        (i = i()
          .then(function() {
            if ((ec(t), !o)) return t.F().then(function() {})
          })
          .then(function() {
            return pu(t.a, c, n, r, s, !!u)
          })
          .then(function() {
            return new vt(function(e, r) {
              t.ga(n, null, new Ur('cancelled-popup-request'), t.g || null),
                (t.f = e),
                (t.v = r),
                (t.g = s),
                (t.c = t.a.Da(t, n, c, s))
            })
          })
          .then(function(t) {
            return c && Kn(c), t ? Nr(t) : null
          })
          .m(function(t) {
            throw (c && Kn(c), t)
          })),
        nc(t, i, o)
      )
    }
    function tc(t, e, n, r, i) {
      if (!ur())
        return Tt(new Ur('operation-not-supported-in-this-environment'))
      if (t.j && !i) return Tt(t.j)
      var o = null,
        a = vr(t.uid + ':::')
      return (
        (r = r()
          .then(function() {
            if ((ec(t), !i)) return t.F().then(function() {})
          })
          .then(function() {
            return (t.$ = a), Mu(t)
          })
          .then(function(e) {
            return t.fa && (e = (e = t.fa).b.set(ic, t.C(), e.a)), e
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
        nc(t, r, i)
      )
    }
    function ec(t) {
      if (!t.a || !t.I) {
        if (t.a && !t.I) throw new Ur('internal-error')
        throw new Ur('auth-domain-config-required')
      }
    }
    function nc(t, e, n) {
      var r = (function(t, e, n) {
        return t.j && !n
          ? (e.cancel(), Tt(t.j))
          : e.m(function(e) {
              throw (!e ||
                ('auth/user-disabled' != e.code &&
                  'auth/user-token-expired' != e.code) ||
                (t.j || t.dispatchEvent(new Au('userInvalidated')), (t.j = e)),
              e)
            })
      })(t, e, n)
      return (
        t.D.push(r),
        r.ha(function() {
          U(t.D, r)
        }),
        r
      )
    }
    function rc(t) {
      if (!t.apiKey) return null
      var e = {apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName},
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
        (n.expiresIn = (t.stsTokenManager.expirationTime - m()) / 1e3)
      var r = new ku(e, n, t)
      return (
        t.providerData &&
          D(t.providerData, function(t) {
            t && Hu(r, Nr(t))
          }),
        t.redirectEventId && (r.$ = t.redirectEventId),
        r
      )
    }
    ;(yu.prototype.reset = function() {
      ;(this.b = null), this.a && (this.a.cancel(), (this.a = null))
    }),
      (yu.prototype.h = function(t, e) {
        if (t) {
          this.reset(), (this.g = !0)
          var n = t.b,
            r = t.c,
            i = t.a && 'auth/web-storage-unsupported' == t.a.code,
            o =
              t.a &&
              'auth/operation-not-supported-in-this-environment' == t.a.code
          'unknown' != n || i || o
            ? t.a
              ? (mu(this, !0, null, t.a), Et())
              : e.wa(n, r)
                ? (function(t, e, n) {
                    n = n.wa(e.b, e.c)
                    var r = e.f,
                      i = e.g,
                      o = !!e.b.match(/Redirect$/)
                    n(r, i)
                      .then(function(e) {
                        mu(t, o, e, null)
                      })
                      .m(function(e) {
                        mu(t, o, null, e)
                      })
                  })(this, t, e)
                : Tt(new Ur('invalid-auth-event'))
            : (mu(this, !1, null, null), Et())
        } else Tt(new Ur('invalid-auth-event'))
      }),
      (yu.prototype.da = function() {
        var t = this
        return new vt(function(e, n) {
          t.b
            ? t.b().then(e, n)
            : (t.f.push(e),
              t.c.push(n),
              (function(t) {
                var e = new Ur('timeout')
                t.a && t.a.cancel(),
                  (t.a = xe(lu.get()).then(function() {
                    t.b || mu(t, !0, null, e)
                  }))
              })(t))
        })
      }),
      (bu.prototype.h = function(t, e) {
        if (t) {
          var n = t.b,
            r = t.c
          t.a
            ? (e.ga(t.b, null, t.a, t.c), Et())
            : e.wa(n, r)
              ? (function(t, e) {
                  var n = t.c,
                    r = t.b
                  e
                    .wa(r, n)(t.f, t.g)
                    .then(function(t) {
                      e.ga(r, t, null, n)
                    })
                    .m(function(t) {
                      e.ga(r, null, t, n)
                    })
                })(t, e)
              : Tt(new Ur('invalid-auth-event'))
        } else Tt(new Ur('invalid-auth-event'))
      }),
      (wu.prototype.confirm = function(t) {
        return (t = Ui(this.verificationId, t)), this.a(t)
      }),
      (Tu.prototype.start = function() {
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
                  mr() || !t
                    ? Et()
                    : new vt(function(n) {
                        ;(e = function() {
                          mr() &&
                            (t.removeEventListener('visibilitychange', e, !1),
                            n())
                        }),
                          t.addEventListener('visibilitychange', e, !1)
                      }).m(function(n) {
                        throw (t.removeEventListener('visibilitychange', e, !1),
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
      (Tu.prototype.stop = function() {
        this.b && (this.b.cancel(), (this.b = null))
      }),
      (Cu.prototype.C = function() {
        return {
          apiKey: this.f.b,
          refreshToken: this.a,
          accessToken: this.b,
          expirationTime: this.c
        }
      }),
      (Cu.prototype.getToken = function(t) {
        return (
          (t = !!t),
          this.b && !this.a
            ? Tt(new Ur('user-token-expired'))
            : t || !this.b || m() > this.c - 3e4
              ? this.a
                ? Nu(this, {grant_type: 'refresh_token', refresh_token: this.a})
                : Et(null)
              : Et({
                  accessToken: this.b,
                  expirationTime: this.c,
                  refreshToken: this.a
                })
        )
      }),
      (Ru.prototype.C = function() {
        return {lastLoginAt: this.b, createdAt: this.a}
      }),
      b(Au, se),
      b(ku, ke),
      (ku.prototype.na = function(t) {
        ;(this.ia = t), na(this.b, t)
      }),
      (ku.prototype.ca = function() {
        return this.ia
      }),
      (ku.prototype.Ka = function() {
        return B(this.O)
      }),
      (ku.prototype.Ga = function() {
        this.l.b && (this.l.stop(), this.l.start())
      }),
      Sr(ku.prototype, 'providerId', 'firebase'),
      ((t = ku.prototype).reload = function() {
        var t = this
        return nc(
          this,
          Vu(this).then(function() {
            return zu(t)
              .then(function() {
                return Mu(t)
              })
              .then(ju)
          })
        )
      }),
      (t.ac = function(t) {
        return this.F(t).then(function(t) {
          return new function(t) {
            var e = ni(t)
            if (!(e && e.exp && e.auth_time && e.iat))
              throw new Ur(
                'internal-error',
                'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.'
              )
            Ir(this, {
              token: t,
              expirationTime: br(1e3 * e.exp),
              authTime: br(1e3 * e.auth_time),
              issuedAtTime: br(1e3 * e.iat),
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
          Vu(this)
            .then(function() {
              return e.h.getToken(t)
            })
            .then(function(t) {
              if (!t) throw new Ur('internal-error')
              return (
                t.accessToken != e.qa &&
                  (Uu(e, t.accessToken),
                  e.dispatchEvent(new Au('tokenChanged'))),
                Gu(e, 'refreshToken', t.refreshToken),
                t.accessToken
              )
            })
        )
      }),
      (t.getToken = function(t) {
        return (
          Tr[
            'firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.'
          ] ||
            ((Tr[
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
        if (!(t = t.users) || !t.length) throw new Ur('internal-error')
        Bu(this, {
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
                ? L(t, function(t) {
                    return new function(t, e, n, r, i, o) {
                      Ir(this, {
                        uid: t,
                        displayName: r || null,
                        photoURL: i || null,
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
          Hu(this, e[n])
        Gu(
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
                Yu(e, t),
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
          Xu(this, t.providerId)
            .then(function() {
              return e.F()
            })
            .then(function(n) {
              return t.c(e.b, n)
            })
            .then(function(t) {
              return (n = $u(e, t, 'link')), Ju(e, t)
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
          Xu(this, 'phone').then(function() {
            return Eu(Lu(n), t, e, _(n.$a, n))
          })
        )
      }),
      (t.wc = function(t, e) {
        var n = this
        return nc(
          this,
          Et().then(function() {
            return Eu(Lu(n), t, e, _(n.bb, n))
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
              return Yu(e, t), e.reload()
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
              return Yu(e, t), e.reload()
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
              return Yu(e, t), e.reload()
            })
        )
      }),
      (t.ob = function(t) {
        if (void 0 === t.displayName && void 0 === t.photoURL) return Vu(this)
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
                Yu(e, t),
                Gu(e, 'displayName', t.displayName || null),
                Gu(e, 'photoURL', t.photoUrl || null),
                D(e.providerData, function(t) {
                  'password' === t.providerId &&
                    (Sr(t, 'displayName', e.displayName),
                    Sr(t, 'photoURL', e.photoURL))
                }),
                Mu(e)
              )
            })
            .then(ju)
        )
      }),
      (t.Mc = function(t) {
        var e = this
        return nc(
          this,
          zu(this).then(function(n) {
            return F(qu(e), t)
              ? (function(t, e, n) {
                  return Ka(t, Ta, {idToken: e, deleteProvider: n})
                })(e.b, n, [t]).then(function(t) {
                  var n = {}
                  return (
                    D(t.providerUserInfo || [], function(t) {
                      n[t.providerId] = !0
                    }),
                    D(qu(e), function(t) {
                      n[t] || Ku(e, t)
                    }),
                    n[Fi.PROVIDER_ID] || Sr(e, 'phoneNumber', null),
                    Mu(e)
                  )
                })
              : Mu(e).then(function() {
                  throw new Ur('no-such-provider')
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
              return Ka(t.b, Ea, {idToken: e})
            })
            .then(function() {
              t.dispatchEvent(new Au('userDeleted'))
            })
        ).then(function() {
          for (var e = 0; e < t.D.length; e++) t.D[e].cancel('app-deleted')
          Ou(t, null),
            Du(t, null),
            (t.D = []),
            (t.o = !0),
            Fu(t),
            Sr(t, 'refreshToken', null),
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
      (t.ga = function(t, e, n, r) {
        ;('linkViaPopup' != t && 'reauthViaPopup' != t) ||
          r != (this.g || null) ||
          (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
          this.c && (this.c.cancel(), (this.c = null)),
          delete this.f,
          delete this.v)
      }),
      (t.wa = function(t, e) {
        return 'linkViaPopup' == t && e == (this.g || null)
          ? _(this.vb, this)
          : 'reauthViaPopup' == t && e == (this.g || null)
            ? _(this.wb, this)
            : 'linkViaRedirect' == t && (this.$ || null) == e
              ? _(this.vb, this)
              : 'reauthViaRedirect' == t && (this.$ || null) == e
                ? _(this.wb, this)
                : null
      }),
      (t.oc = function(t) {
        var e = this
        return Zu(
          this,
          'linkViaPopup',
          t,
          function() {
            return Xu(e, t.providerId).then(function() {
              return Mu(e)
            })
          },
          !1
        )
      }),
      (t.xc = function(t) {
        return Zu(
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
            return Xu(e, t.providerId)
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
        var r = null
        return nc(
          this,
          this.F()
            .then(function(r) {
              return va(n.b, {requestUri: t, sessionId: e, idToken: r})
            })
            .then(function(t) {
              return (r = $u(n, t, 'link')), Ju(n, t)
            })
            .then(function() {
              return r
            })
        )
      }),
      (t.wb = function(t, e) {
        var n = this
        this.c && (this.c.cancel(), (this.c = null))
        var r = null
        return nc(
          this,
          Et()
            .then(function() {
              return _i(ya(n.b, {requestUri: t, sessionId: e}), n.uid)
            })
            .then(function(t) {
              return (
                (r = $u(n, t, 'reauthenticate')),
                Yu(n, t),
                (n.j = null),
                n.reload()
              )
            })
            .then(function() {
              return r
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
              return (n = e), void 0 === t || it(t) ? {} : Xr(new jr(t))
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
          this.metadata && ct(t, this.metadata.C()),
          D(this.providerData, function(e) {
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
    var ic = {name: 'redirectUser', w: 'session'}
    function oc(t) {
      return Us(t.b, ic, t.a)
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
            var i = Fs(e, n),
              o = xs(t, e.w)
            return t.get(e, n).then(function(a) {
              var s = null
              try {
                s = dr(r.localStorage.getItem(i))
              } catch (t) {}
              if (s && !a) return r.localStorage.removeItem(i), t.set(e, s, n)
              s && a && 'localStorage' != o.type && r.localStorage.removeItem(i)
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
        this.b.addListener(cc('local'), this.a, _(this.g, this))
    }
    function sc(t, e) {
      var n,
        r = []
      for (n in Ps) Ps[n] !== e && r.push(Us(t.b, cc(Ps[n]), t.a))
      return (
        r.push(Us(t.b, uc, t.a)),
        (function(t) {
          return new vt(function(e, n) {
            var r = t.length,
              i = []
            if (r)
              for (
                var o = function(t, n) {
                    r--, (i[t] = n), 0 == r && e(i)
                  },
                  a = function(t) {
                    n(t)
                  },
                  s = 0;
                s < t.length;
                s++
              )
                Ct(t[s], g(o, s), a)
            else e(i)
          })
        })(r)
      )
    }
    ac.prototype.g = function() {
      var t = this,
        e = cc('local')
      fc(this, function() {
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
      return fc(t, function() {
        return t.b.set(t.c, e.C(), t.a)
      })
    }
    function lc(t) {
      return fc(t, function() {
        return Us(t.b, t.c, t.a)
      })
    }
    function pc(t, e) {
      return fc(t, function() {
        return t.b.get(t.c, t.a).then(function(t) {
          return t && e && (t.authDomain = e), rc(t || {})
        })
      })
    }
    function fc(t, e) {
      return (t.f = t.f.then(e, e)), t.f
    }
    function dc(t) {
      if (
        ((this.l = !1),
        Sr(this, 'app', t),
        !wc(this).options || !wc(this).options.apiKey)
      )
        throw new Ur('invalid-api-key')
      ;(t = e.SDK_VERSION ? ir(e.SDK_VERSION) : null),
        (this.b = new Yo(
          wc(this).options && wc(this).options.apiKey,
          Xa(za),
          t
        )),
        (this.N = []),
        (this.o = []),
        (this.I = []),
        (this.Ob = e.INTERNAL.createSubscribe(_(this.ic, this))),
        (this.O = void 0),
        (this.Pb = e.INTERNAL.createSubscribe(_(this.jc, this))),
        mc(this, null),
        (this.h = new ac(wc(this).options.apiKey + ':' + wc(this).name)),
        (this.G = new function(t) {
          ;(this.a = t), (this.b = Ls())
        }(wc(this).options.apiKey + ':' + wc(this).name)),
        (this.V = Sc(
          this,
          (function(t) {
            var e = wc(t).options.authDomain,
              n = (function(t) {
                var e = (function(t, e) {
                  return t.b.get(ic, t.a).then(function(t) {
                    return t && e && (t.authDomain = e), rc(t || {})
                  })
                })(t.G, wc(t).options.authDomain).then(function(e) {
                  return (t.B = e) && (e.fa = t.G), oc(t.G)
                })
                return Sc(t, e)
              })(t)
                .then(function() {
                  return pc(t.h, e)
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
                                : lc(t.h)
                            }))
                    : null
                })
                .then(function(e) {
                  mc(t, e || null)
                })
            return Sc(t, n)
          })(this)
        )),
        (this.j = Sc(
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
        (this.ia = _(this.Ic, this)),
        (this.Ga = _(this.ka, this)),
        (this.qa = _(this.Yb, this)),
        (this.ra = _(this.gc, this)),
        (this.sa = _(this.hc, this)),
        (function(t) {
          var e = wc(t).options.authDomain,
            n = wc(t).options.apiKey
          e &&
            ur() &&
            (t.Nb = t.V.then(function() {
              if (!t.l) {
                if (
                  ((t.a = vu(e, n, wc(t).name)),
                  t.a.subscribe(t),
                  Ec(t) && Wu(Ec(t)),
                  t.B)
                ) {
                  Wu(t.B)
                  var r = t.B
                  r.na(t.ca()),
                    Ou(r, t),
                    Pu((r = t.B), t.D),
                    Du(r, t),
                    (t.B = null)
                }
                return t.a
              }
            }))
        })(this),
        (this.INTERNAL = {}),
        (this.INTERNAL.delete = _(this.delete, this)),
        (this.INTERNAL.logFramework = _(this.qc, this)),
        (this.s = 0),
        ke.call(this),
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
    function yc(t) {
      se.call(this, 'frameworkChanged'), (this.c = t)
    }
    function _c(t) {
      return t.Nb || Tt(new Ur('auth-domain-config-required'))
    }
    function gc(t, e) {
      var n = {}
      return (
        (n.apiKey = wc(t).options.apiKey),
        (n.authDomain = wc(t).options.authDomain),
        (n.appName = wc(t).name),
        t.V.then(function() {
          return (function(t, e, n, r) {
            var i = new ku(t, e)
            return (
              n && (i.fa = n),
              r && Pu(i, r),
              i.reload().then(function() {
                return i
              })
            )
          })(n, e, t.G, t.Ka())
        })
          .then(function(e) {
            return Ec(t) && e.uid == Ec(t).uid
              ? (Qu(Ec(t), e), t.ka(e))
              : (mc(t, e), Wu(e), t.ka(e))
          })
          .then(function() {
            Cc(t)
          })
      )
    }
    function mc(t, e) {
      Ec(t) &&
        ((function(t, e) {
          M(t.N, function(t) {
            return t == e
          })
        })(Ec(t), t.Ga),
        we(Ec(t), 'tokenChanged', t.qa),
        we(Ec(t), 'userDeleted', t.ra),
        we(Ec(t), 'userInvalidated', t.sa),
        Fu(Ec(t))),
        e &&
          (e.N.push(t.Ga),
          ge(e, 'tokenChanged', t.qa),
          ge(e, 'userDeleted', t.ra),
          ge(e, 'userInvalidated', t.sa),
          0 < t.s && xu(e)),
        Sr(t, 'currentUser', e),
        e && (e.na(t.ca()), Ou(e, t), Pu(e, t.D), Du(e, t))
    }
    function bc(t, e) {
      var n = null,
        r = null
      return Sc(
        t,
        e
          .then(function(e) {
            return (n = Mi(e)), (r = si(e)), gc(t, e)
          })
          .then(function() {
            return Nr({
              user: Ec(t),
              credential: n,
              additionalUserInfo: r,
              operationType: 'signIn'
            })
          })
      )
    }
    function wc(t) {
      return t.app
    }
    function Ec(t) {
      return t.currentUser
    }
    function Tc(t) {
      return (Ec(t) && Ec(t)._lat) || null
    }
    function Cc(t) {
      if (t.X) {
        for (var e = 0; e < t.o.length; e++) t.o[e] && t.o[e](Tc(t))
        if (t.O !== t.getUid() && t.I.length)
          for (t.O = t.getUid(), e = 0; e < t.I.length; e++)
            t.I[e] && t.I[e](Tc(t))
      }
    }
    function Sc(t, e) {
      return (
        t.N.push(e),
        e.ha(function() {
          U(t.N, e)
        }),
        e
      )
    }
    function Ic(t, e, n, i, o, a) {
      if (
        (Sr(this, 'type', 'recaptcha'),
        (this.b = this.c = null),
        (this.o = !1),
        (this.l = e),
        (this.a = n || {theme: 'light', type: 'image'}),
        (this.g = []),
        this.a[Ac])
      )
        throw new Ur(
          'argument-error',
          'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
        )
      if (((this.h = 'invisible' === this.a[kc]), !r.document))
        throw new Ur(
          'operation-not-supported-in-this-environment',
          'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.'
        )
      if (!Pn(e) || (!this.h && Pn(e).hasChildNodes()))
        throw new Ur(
          'argument-error',
          'reCAPTCHA container is either not found or already contains inner elements!'
        )
      ;(this.u = new Yo(t, a || null, o || null)),
        (this.s =
          i ||
          function() {
            return null
          })
      var s = this
      this.j = []
      var u = this.a[Nc]
      this.a[Nc] = function(t) {
        if ((Oc(s, t), 'function' == typeof u)) u(t)
        else if ('string' == typeof u) {
          var e = ar(u, r)
          'function' == typeof e && e(t)
        }
      }
      var c = this.a[Rc]
      this.a[Rc] = function() {
        if ((Oc(s, null), 'function' == typeof c)) c()
        else if ('string' == typeof c) {
          var t = ar(c, r)
          'function' == typeof t && t()
        }
      }
    }
    ;(ac.prototype.ib = function(t) {
      var e = null,
        n = this
      return (
        (function(t) {
          var e = new Ur('invalid-persistence-type'),
            n = new Ur('unsupported-persistence-type')
          t: {
            for (r in Ps)
              if (Ps[r] == t) {
                var r = !0
                break t
              }
            r = !1
          }
          if (!r || 'string' != typeof t) throw e
          switch (Jn()) {
            case 'ReactNative':
              if ('session' === t) throw n
              break
            case 'Node':
              if ('none' !== t) throw n
              break
            default:
              if (!sr() && 'none' !== t) throw n
          }
        })(t),
        fc(this, function() {
          return t != n.c.w
            ? n.b
                .get(n.c, n.a)
                .then(function(r) {
                  return (e = r), sc(n, t)
                })
                .then(function() {
                  if (((n.c = cc(t)), e)) return n.b.set(n.c, e, n.a)
                })
            : Et()
        })
      )
    }),
      b(dc, ke),
      b(vc, se),
      b(yc, se),
      ((t = dc.prototype).ib = function(t) {
        return Sc(this, (t = this.h.ib(t)))
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
          ra(this.b, e.SDK_VERSION ? ir(e.SDK_VERSION, this.D) : null),
          this.dispatchEvent(new yc(this.D))
      }),
      (t.Ka = function() {
        return B(this.D)
      }),
      (t.toJSON = function() {
        return {
          apiKey: wc(this).options.apiKey,
          authDomain: wc(this).options.authDomain,
          appName: wc(this).name,
          currentUser: Ec(this) && Ec(this).C()
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
      (t.ga = function(t, e, n, r) {
        'signInViaPopup' == t &&
          this.g == r &&
          (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
          this.c && (this.c.cancel(), (this.c = null)),
          delete this.f,
          delete this.v)
      }),
      (t.wa = function(t, e) {
        return 'signInViaRedirect' == t ||
          ('signInViaPopup' == t && this.g == e && this.f)
          ? _(this.Xb, this)
          : null
      }),
      (t.Xb = function(t, e) {
        var n = this
        ;(t = {requestUri: t, sessionId: e}),
          this.c && (this.c.cancel(), (this.c = null))
        var r = null,
          i = null,
          o = da(n.b, t).then(function(t) {
            return (r = Mi(t)), (i = si(t)), t
          })
        return Sc(
          this,
          (t = n.V.then(function() {
            return o
          })
            .then(function(t) {
              return gc(n, t)
            })
            .then(function() {
              return Nr({
                user: Ec(n),
                credential: r,
                additionalUserInfo: i,
                operationType: 'signIn'
              })
            }))
        )
      }),
      (t.Gc = function(t) {
        if (!ur())
          return Tt(new Ur('operation-not-supported-in-this-environment'))
        var n = this,
          r = ai(t.providerId),
          i = vr(),
          o = null
        ;(!lr() || Xn()) &&
          wc(this).options.authDomain &&
          t.isOAuthProvider &&
          (o = hs(
            wc(this).options.authDomain,
            wc(this).options.apiKey,
            wc(this).name,
            'signInViaPopup',
            t,
            null,
            i,
            e.SDK_VERSION || null
          ))
        var a = Gn(o, r && r.Aa, r && r.za)
        return Sc(
          this,
          (r = _c(this)
            .then(function(e) {
              return pu(e, a, 'signInViaPopup', t, i, !!o)
            })
            .then(function() {
              return new vt(function(t, e) {
                n.ga(
                  'signInViaPopup',
                  null,
                  new Ur('cancelled-popup-request'),
                  n.g
                ),
                  (n.f = t),
                  (n.v = e),
                  (n.g = i),
                  (n.c = n.a.Da(n, 'signInViaPopup', a, i))
              })
            })
            .then(function(t) {
              return a && Kn(a), t ? Nr(t) : null
            })
            .m(function(t) {
              throw (a && Kn(a), t)
            }))
        )
      }),
      (t.Hc = function(t) {
        if (!ur())
          return Tt(new Ur('operation-not-supported-in-this-environment'))
        var e = this
        return Sc(
          this,
          _c(this)
            .then(function() {
              return fc((t = e.h), function() {
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
        if (!ur())
          return Tt(new Ur('operation-not-supported-in-this-environment'))
        var t = this
        return Sc(
          this,
          _c(this)
            .then(function() {
              return t.a.da()
            })
            .then(function(t) {
              return t ? Nr(t) : null
            })
        )
      }),
      (t.kb = function() {
        var t = this
        return Sc(
          this,
          this.j.then(function() {
            return Ec(t)
              ? (mc(t, null),
                lc(t.h).then(function() {
                  Cc(t)
                }))
              : Et()
          })
        )
      }),
      (t.Ic = function() {
        var t = this
        return pc(this.h, wc(this).options.authDomain).then(function(e) {
          if (!t.l) {
            var n
            if ((n = Ec(t) && e)) {
              n = Ec(t).uid
              var r = e.uid
              n =
                void 0 !== n &&
                null !== n &&
                '' !== n &&
                void 0 !== r &&
                null !== r &&
                '' !== r &&
                n == r
            }
            if (n) return Qu(Ec(t), e), Ec(t).F()
            ;(Ec(t) || e) &&
              (mc(t, e),
              e && (Wu(e), (e.fa = t.G)),
              t.a && t.a.subscribe(t),
              Cc(t))
          }
        })
      }),
      (t.ka = function(t) {
        return hc(this.h, t)
      }),
      (t.Yb = function() {
        Cc(this), this.ka(Ec(this))
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
          t.next(Ec(e))
        })
      }),
      (t.jc = function(t) {
        var e = this
        !(function(t, e) {
          t.I.push(e),
            Sc(
              t,
              t.j.then(function() {
                !t.l &&
                  F(t.I, e) &&
                  t.O !== t.getUid() &&
                  ((t.O = t.getUid()), e(Tc(t)))
              })
            )
        })(this, function() {
          t.next(Ec(e))
        })
      }),
      (t.sc = function(t, n, r) {
        var i = this
        return (
          this.X &&
            e.Promise.resolve().then(function() {
              l(t) ? t(Ec(i)) : l(t.next) && t.next(Ec(i))
            }),
          this.Ob(t, n, r)
        )
      }),
      (t.rc = function(t, n, r) {
        var i = this
        return (
          this.X &&
            e.Promise.resolve().then(function() {
              ;(i.O = i.getUid()), l(t) ? t(Ec(i)) : l(t.next) && t.next(Ec(i))
            }),
          this.Pb(t, n, r)
        )
      }),
      (t.$b = function(t) {
        var e = this
        return Sc(
          this,
          this.j.then(function() {
            return Ec(e)
              ? Ec(e)
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
            return bc(e, Ka(e.b, Ba, {token: t}))
          })
          .then(function(t) {
            var n = t.user
            return Gu(n, 'isAnonymous', !1), e.ka(n), t
          })
      }),
      (t.Ib = function(t, e) {
        var n = this
        return this.j.then(function() {
          return bc(n, Ka(n.b, ja, {email: t, password: e}))
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
          return bc(n, Ka(n.b, ba, {email: t, password: e}))
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
          return bc(e, t.xa(e.b))
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
          var e = Ec(t)
          return e && e.isAnonymous
            ? Nr({
                user: e,
                credential: null,
                additionalUserInfo: Nr({providerId: null, isNewUser: !1}),
                operationType: 'signIn'
              })
            : bc(t, t.b.jb()).then(function(e) {
                var n = e.user
                return Gu(n, 'isAnonymous', !0), t.ka(n), e
              })
        })
      }),
      (t.getUid = function() {
        return (Ec(this) && Ec(this).uid) || null
      }),
      (t.Qb = function(t) {
        this.addAuthTokenListener(t),
          this.s++,
          0 < this.s && Ec(this) && xu(Ec(this))
      }),
      (t.zc = function(t) {
        var e = this
        D(this.o, function(n) {
          n == t && e.s--
        }),
          0 > this.s && (this.s = 0),
          0 == this.s && Ec(this) && Fu(Ec(this)),
          this.removeAuthTokenListener(t)
      }),
      (t.addAuthTokenListener = function(t) {
        var e = this
        this.o.push(t),
          Sc(
            this,
            this.j.then(function() {
              e.l || (F(e.o, t) && t(Tc(e)))
            })
          )
      }),
      (t.removeAuthTokenListener = function(t) {
        M(this.o, function(e) {
          return e == t
        })
      }),
      (t.delete = function() {
        this.l = !0
        for (var t = 0; t < this.N.length; t++) this.N[t].cancel('app-deleted')
        return (
          (this.N = []),
          this.h && (t = this.h).b.removeListener(cc('local'), t.a, this.ia),
          this.a && this.a.unsubscribe(this),
          e.Promise.resolve()
        )
      }),
      (t.Vb = function(t) {
        return Sc(
          this,
          (function(t, e) {
            return Ka(t, wa, {
              identifier: e,
              continueUri: cr() ? Vn() : 'http://localhost'
            }).then(function(t) {
              return t.allProviders || []
            })
          })(this.b, t)
        )
      }),
      (t.Wb = function(t) {
        return Sc(
          this,
          (function(t, e) {
            return Ka(t, wa, {
              identifier: e,
              continueUri: cr() ? Vn() : 'http://localhost'
            }).then(function(t) {
              return t.signinMethods || []
            })
          })(this.b, t)
        )
      }),
      (t.kc = function(t) {
        return !!Di(t)
      }),
      (t.hb = function(t, e) {
        var n = this
        return Sc(
          this,
          Et()
            .then(function() {
              var t = new jr(e)
              if (!t.c)
                throw new Ur(
                  'argument-error',
                  qr + ' must be true when sending sign in link to email'
                )
              return Xr(t)
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
        return Sc(this, this.b.Wa(t, e).then(function() {}))
      }),
      (t.Ia = function(t) {
        return Sc(
          this,
          this.b.Ia(t).then(function(t) {
            return new function(t) {
              var e = {},
                n = t[kr],
                r = t[Or]
              if (!(t = t[Pr]) || (t != Ar && !n))
                throw Error('Invalid provider user info!')
              ;(e[Lr] = r || null),
                (e[Dr] = n || null),
                Sr(this, Fr, t),
                Sr(this, xr, Rr(e))
            }(t)
          })
        )
      }),
      (t.Ua = function(t) {
        return Sc(this, this.b.Ua(t).then(function() {}))
      }),
      (t.gb = function(t, e) {
        var n = this
        return Sc(
          this,
          Et()
            .then(function() {
              return void 0 === e || it(e) ? {} : Xr(new jr(e))
            })
            .then(function(e) {
              return n.b.gb(t, e)
            })
            .then(function() {})
        )
      }),
      (t.Fc = function(t, e) {
        return Sc(this, Eu(this, t, e, _(this.Oa, this)))
      }),
      (t.Ec = function(t, e) {
        var n = this
        return Sc(
          this,
          Et().then(function() {
            var r = Pi(t, e || Vn())
            return n.Oa(r)
          })
        )
      })
    var Nc = 'callback',
      Rc = 'expired-callback',
      Ac = 'sitekey',
      kc = 'size'
    function Oc(t, e) {
      for (var n = 0; n < t.j.length; n++)
        try {
          t.j[n](e)
        } catch (t) {}
    }
    function Pc(t, e) {
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
        throw new Ur(
          'internal-error',
          'RecaptchaVerifier instance has been destroyed.'
        )
    }
    ;((t = Ic.prototype).ya = function() {
      var t = this
      return this.c
        ? this.c
        : (this.c = Pc(
            this,
            Et()
              .then(function() {
                if (cr() && !$n()) return zn()
                throw new Ur(
                  'operation-not-supported-in-this-environment',
                  'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
                )
              })
              .then(function() {
                return (function(t, e) {
                  return new vt(function(n, i) {
                    var o = setTimeout(function() {
                      i(new Ur('network-request-failed'))
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
                        } else clearTimeout(o), i(new Ur('internal-error'))
                        delete r[t.a]
                      }
                      var a = mn(Lc, {onload: t.a, hl: e || ''})
                      Et(Vo(a)).m(function() {
                        clearTimeout(o),
                          i(
                            new Ur(
                              'internal-error',
                              'Unable to load external reCAPTCHA dependencies!'
                            )
                          )
                      })
                    } else clearTimeout(o), n()
                  })
                })(Uc(), t.s())
              })
              .then(function() {
                return Ka(t.u, Oa, {})
              })
              .then(function(e) {
                t.a[Ac] = e.recaptchaSiteKey
              })
              .m(function(e) {
                throw ((t.c = null), e)
              })
          ))
    }),
      (t.render = function() {
        Dc(this)
        var t = this
        return Pc(
          this,
          this.ya().then(function() {
            if (null === t.b) {
              var e = t.l
              if (!t.h) {
                var n = Pn(e)
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
        return Pc(
          this,
          this.render().then(function(e) {
            return new vt(function(n) {
              var r = grecaptcha.getResponse(e)
              if (r) n(r)
              else {
                var i = function(e) {
                  e &&
                    ((function(t, e) {
                      M(t.j, function(t) {
                        return t == e
                      })
                    })(t, i),
                    n(e))
                }
                t.j.push(i), t.h && grecaptcha.execute(t.b)
              }
            })
          })
        )
      }),
      (t.reset = function() {
        Dc(this), null !== this.b && grecaptcha.reset(this.b)
      }),
      (t.clear = function() {
        Dc(this), (this.o = !0), Uc().b--
        for (var t = 0; t < this.g.length; t++)
          this.g[t].cancel('RecaptchaVerifier instance has been destroyed.')
        if (!this.h) {
          t = Pn(this.l)
          for (var e; (e = t.firstChild); ) t.removeChild(e)
        }
      })
    var Lc = yn(
      'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'
    )
    var xc = new gr(3e4, 6e4)
    var Fc = null
    function Uc() {
      return (
        Fc ||
          (Fc = new function() {
            ;(this.b = r.grecaptcha ? 1 / 0 : 0),
              (this.c = null),
              (this.a = '__rcb' + Math.floor(1e6 * Math.random()).toString())
          }()),
        Fc
      )
    }
    function Mc(t, n, r) {
      try {
        this.f = r || e.app()
      } catch (t) {
        throw new Ur(
          'argument-error',
          'No firebase.app.App instance is currently initialized.'
        )
      }
      if (!this.f.options || !this.f.options.apiKey)
        throw new Ur('invalid-api-key')
      r = this.f.options.apiKey
      var i = this,
        o = null
      try {
        o = this.f.auth().Ka()
      } catch (t) {}
      ;(o = e.SDK_VERSION ? ir(e.SDK_VERSION, o) : null),
        Ic.call(
          this,
          r,
          t,
          n,
          function() {
            try {
              var t = i.f.auth().ca()
            } catch (e) {
              t = null
            }
            return t
          },
          o,
          Xa(za)
        )
    }
    function Wc(t, e, n, r) {
      t: {
        n = Array.prototype.slice.call(n)
        for (var i = 0, o = !1, a = 0; a < e.length; a++)
          if (e[a].optional) o = !0
          else {
            if (o)
              throw new Ur(
                'internal-error',
                'Argument validator encountered a required argument after an optional argument.'
              )
            i++
          }
        if (((o = e.length), n.length < i || o < n.length))
          r =
            'Expected ' +
            (i == o
              ? 1 == i ? '1 argument' : i + ' arguments'
              : i + '-' + o + ' arguments') +
            ' but got ' +
            n.length +
            '.'
        else {
          for (i = 0; i < n.length; i++)
            if (((o = e[i].optional && void 0 === n[i]), !e[i].M(n[i]) && !o)) {
              if (((e = e[i]), 0 > i || i >= Bc.length))
                throw new Ur(
                  'internal-error',
                  'Argument validator received an unsupported number of arguments.'
                )
              ;(n = Bc[i]),
                (r =
                  (r ? '' : n + ' argument ') +
                  (e.name ? '"' + e.name + '" ' : '') +
                  'must be ' +
                  e.K +
                  '.')
              break t
            }
          r = null
        }
      }
      if (r) throw new Ur('argument-error', t + ' failed: ' + r)
    }
    b(Mc, Ic)
    var Bc = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
      ' '
    )
    function jc(t, e) {
      return {name: t || '', K: 'a valid string', optional: !!e, M: i}
    }
    function Vc() {
      return {name: 'opt_forceRefresh', K: 'a boolean', optional: !0, M: o}
    }
    function qc(t, e) {
      return {name: t || '', K: 'a valid object', optional: !!e, M: p}
    }
    function Hc(t, e) {
      return {name: t || '', K: 'a function', optional: !!e, M: l}
    }
    function Kc(t, e) {
      return {name: t || '', K: 'null', optional: !!e, M: u}
    }
    function Gc(t) {
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
    function Qc() {
      return {
        name: 'applicationVerifier',
        K: 'an implementation of firebase.auth.ApplicationVerifier',
        optional: !1,
        M: function(t) {
          return !!(t && i(t.type) && l(t.verify))
        }
      }
    }
    function zc(t, e, n, r) {
      return {
        name: n || '',
        K: t.K + ' or ' + e.K,
        optional: !!r,
        M: function(n) {
          return t.M(n) || e.M(n)
        }
      }
    }
    function Yc(t, e) {
      for (var n in e) {
        var r = e[n].name
        t[r] = $c(r, t[n], e[n].i)
      }
    }
    function Xc(t, e, n, r) {
      t[e] = $c(e, n, r)
    }
    function $c(t, e, n) {
      function r() {
        var t = Array.prototype.slice.call(arguments)
        return Wc(o, n, t), e.apply(this, t)
      }
      if (!n) return e
      var i,
        o = (function(t) {
          return (t = t.split('.'))[t.length - 1]
        })(t)
      for (i in e) r[i] = e[i]
      for (i in e.prototype) r.prototype[i] = e.prototype[i]
      return r
    }
    Yc(dc.prototype, {
      Ua: {name: 'applyActionCode', i: [jc('code')]},
      Ia: {name: 'checkActionCode', i: [jc('code')]},
      Wa: {name: 'confirmPasswordReset', i: [jc('code'), jc('newPassword')]},
      Sb: {
        name: 'createUserWithEmailAndPassword',
        i: [jc('email'), jc('password')]
      },
      sb: {
        name: 'createUserAndRetrieveDataWithEmailAndPassword',
        i: [jc('email'), jc('password')]
      },
      Vb: {name: 'fetchProvidersForEmail', i: [jc('email')]},
      Wb: {name: 'fetchSignInMethodsForEmail', i: [jc('email')]},
      da: {name: 'getRedirectResult', i: []},
      kc: {name: 'isSignInWithEmailLink', i: [jc('emailLink')]},
      rc: {
        name: 'onAuthStateChanged',
        i: [
          zc(qc(), Hc(), 'nextOrObserver'),
          Hc('opt_error', !0),
          Hc('opt_completed', !0)
        ]
      },
      sc: {
        name: 'onIdTokenChanged',
        i: [
          zc(qc(), Hc(), 'nextOrObserver'),
          Hc('opt_error', !0),
          Hc('opt_completed', !0)
        ]
      },
      gb: {
        name: 'sendPasswordResetEmail',
        i: [
          jc('email'),
          zc(
            qc('opt_actionCodeSettings', !0),
            Kc(null, !0),
            'opt_actionCodeSettings',
            !0
          )
        ]
      },
      hb: {
        name: 'sendSignInLinkToEmail',
        i: [jc('email'), qc('actionCodeSettings')]
      },
      ib: {name: 'setPersistence', i: [jc('persistence')]},
      Oa: {name: 'signInAndRetrieveDataWithCredential', i: [Gc()]},
      jb: {name: 'signInAnonymously', i: []},
      Jb: {name: 'signInAnonymouslyAndRetrieveData', i: []},
      Bc: {name: 'signInWithCredential', i: [Gc()]},
      Cc: {name: 'signInWithCustomToken', i: [jc('token')]},
      Hb: {name: 'signInAndRetrieveDataWithCustomToken', i: [jc('token')]},
      Dc: {
        name: 'signInWithEmailAndPassword',
        i: [jc('email'), jc('password')]
      },
      Ec: {name: 'signInWithEmailLink', i: [jc('email'), jc('emailLink', !0)]},
      Ib: {
        name: 'signInAndRetrieveDataWithEmailAndPassword',
        i: [jc('email'), jc('password')]
      },
      Fc: {name: 'signInWithPhoneNumber', i: [jc('phoneNumber'), Qc()]},
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
      toJSON: {name: 'toJSON', i: [jc(null, !0)]},
      Oc: {name: 'useDeviceLanguage', i: []},
      Pc: {name: 'verifyPasswordResetCode', i: [jc('code')]}
    }),
      (function(t, e) {
        for (var n in e) {
          var r = e[n].name
          if (r !== n) {
            var i = e[n].Rb
            Object.defineProperty(t, r, {
              get: function() {
                return this[n]
              },
              set: function(t) {
                Wc(r, [i], [t], !0), (this[n] = t)
              },
              enumerable: !0
            })
          }
        }
      })(dc.prototype, {
        lc: {name: 'languageCode', Rb: zc(jc(), Kc(), 'languageCode')}
      }),
      (dc.Persistence = Ps),
      (dc.Persistence.LOCAL = 'local'),
      (dc.Persistence.SESSION = 'session'),
      (dc.Persistence.NONE = 'none'),
      Yc(ku.prototype, {
        delete: {name: 'delete', i: []},
        ac: {name: 'getIdTokenResult', i: [Vc()]},
        F: {name: 'getIdToken', i: [Vc()]},
        getToken: {name: 'getToken', i: [Vc()]},
        $a: {name: 'linkAndRetrieveDataWithCredential', i: [Gc()]},
        mc: {name: 'linkWithCredential', i: [Gc()]},
        nc: {name: 'linkWithPhoneNumber', i: [jc('phoneNumber'), Qc()]},
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
        bb: {name: 'reauthenticateAndRetrieveDataWithCredential', i: [Gc()]},
        vc: {name: 'reauthenticateWithCredential', i: [Gc()]},
        wc: {
          name: 'reauthenticateWithPhoneNumber',
          i: [jc('phoneNumber'), Qc()]
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
              Kc(null, !0),
              'opt_actionCodeSettings',
              !0
            )
          ]
        },
        toJSON: {name: 'toJSON', i: [jc(null, !0)]},
        Mc: {name: 'unlink', i: [jc('provider')]},
        mb: {name: 'updateEmail', i: [jc('email')]},
        nb: {name: 'updatePassword', i: [jc('password')]},
        Nc: {name: 'updatePhoneNumber', i: [Gc('phone')]},
        ob: {name: 'updateProfile', i: [qc('profile')]}
      }),
      Yc(vt.prototype, {
        ha: {name: 'finally'},
        m: {name: 'catch'},
        then: {name: 'then'}
      }),
      Yc(wu.prototype, {
        confirm: {name: 'confirm', i: [jc('verificationCode')]}
      }),
      Xc(
        Oi,
        'credential',
        function(t, e) {
          return new ki(t, e)
        },
        [jc('email'), jc('password')]
      ),
      Yc(Ei.prototype, {
        ta: {name: 'addScope', i: [jc('scope')]},
        Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
      }),
      Xc(Ei, 'credential', Ti, [zc(jc(), qc(), 'token')]),
      Xc(Oi, 'credentialWithLink', Pi, [jc('email'), jc('emailLink')]),
      Yc(Ci.prototype, {
        ta: {name: 'addScope', i: [jc('scope')]},
        Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
      }),
      Xc(Ci, 'credential', Si, [zc(jc(), qc(), 'token')]),
      Yc(Ii.prototype, {
        ta: {name: 'addScope', i: [jc('scope')]},
        Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
      }),
      Xc(Ii, 'credential', Ni, [
        zc(jc(), zc(qc(), Kc()), 'idToken'),
        zc(jc(), Kc(), 'accessToken', !0)
      ]),
      Yc(Ri.prototype, {
        Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
      }),
      Xc(Ri, 'credential', Ai, [zc(jc(), qc(), 'token'), jc('secret', !0)]),
      Yc(wi.prototype, {
        ta: {name: 'addScope', i: [jc('scope')]},
        credential: {
          name: 'credential',
          i: [zc(jc(), Kc(), 'idToken', !0), zc(jc(), Kc(), 'accessToken', !0)]
        },
        Ca: {name: 'setCustomParameters', i: [qc('customOAuthParameters')]}
      }),
      Xc(Fi, 'credential', Ui, [jc('verificationId'), jc('verificationCode')]),
      Yc(Fi.prototype, {
        Sa: {name: 'verifyPhoneNumber', i: [jc('phoneNumber'), Qc()]}
      }),
      Yc(Ur.prototype, {toJSON: {name: 'toJSON', i: [jc(null, !0)]}}),
      Yc(Ki.prototype, {toJSON: {name: 'toJSON', i: [jc(null, !0)]}}),
      Yc(Hi.prototype, {toJSON: {name: 'toJSON', i: [jc(null, !0)]}}),
      Yc(Mc.prototype, {
        clear: {name: 'clear', i: []},
        render: {name: 'render', i: []},
        verify: {name: 'verify', i: []}
      }),
      (function() {
        if (void 0 === e || !e.INTERNAL || !e.INTERNAL.registerService)
          throw Error(
            'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
          )
        var t = {Auth: dc, Error: Ur}
        Xc(t, 'EmailAuthProvider', Oi, []),
          Xc(t, 'FacebookAuthProvider', Ei, []),
          Xc(t, 'GithubAuthProvider', Ci, []),
          Xc(t, 'GoogleAuthProvider', Ii, []),
          Xc(t, 'TwitterAuthProvider', Ri, []),
          Xc(t, 'OAuthProvider', wi, [jc('providerId')]),
          Xc(t, 'PhoneAuthProvider', Fi, [
            {
              name: 'auth',
              K: 'an instance of Firebase Auth',
              optional: !0,
              M: function(t) {
                return !!(t && t instanceof dc)
              }
            }
          ]),
          Xc(t, 'RecaptchaVerifier', Mc, [
            zc(
              jc(),
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
                return !!(t && t instanceof e.app.App)
              }
            }
          ]),
          e.INTERNAL.registerService(
            'auth',
            function(t, e) {
              return (
                e({
                  INTERNAL: {
                    getUid: _((t = new dc(t)).getUid, t),
                    getToken: _(t.$b, t),
                    addAuthTokenListener: _(t.Qb, t),
                    removeAuthTokenListener: _(t.zc, t)
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
          e.INTERNAL.extendNamespace({User: ku})
      })()
  }.call(
    void 0 !== ie
      ? ie
      : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window ? window : {}
  ),
    (function(t) {
      ;(t[(t.DEBUG = 0)] = 'DEBUG'),
        (t[(t.VERBOSE = 1)] = 'VERBOSE'),
        (t[(t.INFO = 2)] = 'INFO'),
        (t[(t.WARN = 3)] = 'WARN'),
        (t[(t.ERROR = 4)] = 'ERROR'),
        (t[(t.SILENT = 5)] = 'SILENT')
    })(Jt || (Jt = {})))
  var oe = Jt.INFO,
    ae = function(t, e) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
      if (!(e < t.logLevel)) {
        var i = new Date().toISOString()
        switch (e) {
          case Jt.DEBUG:
          case Jt.VERBOSE:
            console.log.apply(
              console,
              ['[' + i + ']  ' + t.name + ':'].concat(n)
            )
            break
          case Jt.INFO:
            console.info.apply(
              console,
              ['[' + i + ']  ' + t.name + ':'].concat(n)
            )
            break
          case Jt.WARN:
            console.warn.apply(
              console,
              ['[' + i + ']  ' + t.name + ':'].concat(n)
            )
            break
          case Jt.ERROR:
            console.error.apply(
              console,
              ['[' + i + ']  ' + t.name + ':'].concat(n)
            )
            break
          default:
            throw new Error(
              'Attempted to log a message with an invalid logType (value: ' +
                e +
                ')'
            )
        }
      }
    },
    se = (function() {
      function t(t) {
        ;(this.name = t), (this._logLevel = oe), (this._logHandler = ae)
      }
      return (
        Object.defineProperty(t.prototype, 'logLevel', {
          get: function() {
            return this._logLevel
          },
          set: function(t) {
            if (!(t in Jt))
              throw new TypeError('Invalid value assigned to `logLevel`')
            this._logLevel = t
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'logHandler', {
          get: function() {
            return this._logHandler
          },
          set: function(t) {
            if ('function' != typeof t)
              throw new TypeError(
                'Value assigned to `logHandler` must be a function'
              )
            this._logHandler = t
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.debug = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          this._logHandler.apply(this, [this, Jt.DEBUG].concat(t))
        }),
        (t.prototype.log = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          this._logHandler.apply(this, [this, Jt.VERBOSE].concat(t))
        }),
        (t.prototype.info = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          this._logHandler.apply(this, [this, Jt.INFO].concat(t))
        }),
        (t.prototype.warn = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          this._logHandler.apply(this, [this, Jt.WARN].concat(t))
        }),
        (t.prototype.error = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          this._logHandler.apply(this, [this, Jt.ERROR].concat(t))
        }),
        t
      )
    })(),
    ue = (function() {
      function t(t) {
        ;(this.domStorage_ = t), (this.prefix_ = 'firebase:')
      }
      return (
        (t.prototype.set = function(t, e) {
          null == e
            ? this.domStorage_.removeItem(this.prefixedName_(t))
            : this.domStorage_.setItem(this.prefixedName_(t), Nt(e))
        }),
        (t.prototype.get = function(t) {
          var e = this.domStorage_.getItem(this.prefixedName_(t))
          return null == e ? null : It(e)
        }),
        (t.prototype.remove = function(t) {
          this.domStorage_.removeItem(this.prefixedName_(t))
        }),
        (t.prototype.prefixedName_ = function(t) {
          return this.prefix_ + t
        }),
        (t.prototype.toString = function() {
          return this.domStorage_.toString()
        }),
        t
      )
    })(),
    ce = (function() {
      function t() {
        ;(this.cache_ = {}), (this.isInMemoryStorage = !0)
      }
      return (
        (t.prototype.set = function(t, e) {
          null == e ? delete this.cache_[t] : (this.cache_[t] = e)
        }),
        (t.prototype.get = function(t) {
          return At(this.cache_, t) ? this.cache_[t] : null
        }),
        (t.prototype.remove = function(t) {
          delete this.cache_[t]
        }),
        t
      )
    })(),
    he = function(t) {
      try {
        if ('undefined' != typeof window && void 0 !== window[t]) {
          var e = window[t]
          return (
            e.setItem('firebase:sentinel', 'cache'),
            e.removeItem('firebase:sentinel'),
            new ue(e)
          )
        }
      } catch (t) {}
      return new ce()
    },
    le = he('localStorage'),
    pe = he('sessionStorage'),
    fe = new se('@firebase/database'),
    de = (function() {
      var t = 1
      return function() {
        return t++
      }
    })(),
    ve = function(t) {
      var e = (function(t) {
          for (var e = [], n = 0, r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r)
            if (i >= 55296 && i <= 56319) {
              var o = i - 55296
              lt(++r < t.length, 'Surrogate pair missing trail surrogate.'),
                (i = 65536 + (o << 10) + (t.charCodeAt(r) - 56320))
            }
            i < 128
              ? (e[n++] = i)
              : i < 2048
                ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
                : i < 65536
                  ? ((e[n++] = (i >> 12) | 224),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128))
                  : ((e[n++] = (i >> 18) | 240),
                    (e[n++] = ((i >> 12) & 63) | 128),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128))
          }
          return e
        })(t),
        n = new Mt()
      n.update(e)
      var r = n.digest()
      return dt.encodeByteArray(r)
    },
    ye = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      for (var n = '', r = 0; r < t.length; r++)
        Array.isArray(t[r]) ||
        (t[r] && 'object' == typeof t[r] && 'number' == typeof t[r].length)
          ? (n += ye.apply(null, t[r]))
          : 'object' == typeof t[r] ? (n += Nt(t[r])) : (n += t[r]),
          (n += ' ')
      return n
    },
    _e = null,
    ge = !0,
    me = function(t, e) {
      lt(
        !e || !0 === t || !1 === t,
        "Can't turn on custom loggers persistently."
      ),
        !0 === t
          ? ((fe.logLevel = Jt.VERBOSE),
            (_e = fe.log.bind(fe)),
            e && pe.set('logging_enabled', !0))
          : 'function' == typeof t
            ? (_e = t)
            : ((_e = null), pe.remove('logging_enabled'))
    },
    be = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      if (
        (!0 === ge &&
          ((ge = !1),
          null === _e && !0 === pe.get('logging_enabled') && me(!0)),
        _e)
      ) {
        var n = ye.apply(null, t)
        _e(n)
      }
    },
    we = function(t) {
      return function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
        be.apply(void 0, [t].concat(e))
      }
    },
    Ee = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      var n = 'FIREBASE INTERNAL ERROR: ' + ye.apply(void 0, t)
      fe.error(n)
    },
    Te = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      var n = 'FIREBASE FATAL ERROR: ' + ye.apply(void 0, t)
      throw (fe.error(n), new Error(n))
    },
    Ce = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      var n = 'FIREBASE WARNING: ' + ye.apply(void 0, t)
      fe.warn(n)
    },
    Se = function(t) {
      return (
        'number' == typeof t &&
        (t != t ||
          t == Number.POSITIVE_INFINITY ||
          t == Number.NEGATIVE_INFINITY)
      )
    },
    Ie = '[MIN_NAME]',
    Ne = '[MAX_NAME]',
    Re = function(t, e) {
      if (t === e) return 0
      if (t === Ie || e === Ne) return -1
      if (e === Ie || t === Ne) return 1
      var n = Fe(t),
        r = Fe(e)
      return null !== n
        ? null !== r ? (n - r == 0 ? t.length - e.length : n - r) : -1
        : null !== r ? 1 : t < e ? -1 : 1
    },
    Ae = function(t, e) {
      return t === e ? 0 : t < e ? -1 : 1
    },
    ke = function(t, e) {
      if (e && t in e) return e[t]
      throw new Error('Missing required key (' + t + ') in object: ' + Nt(e))
    },
    Oe = function(t) {
      if ('object' != typeof t || null === t) return Nt(t)
      var e = []
      for (var n in t) e.push(n)
      e.sort()
      for (var r = '{', i = 0; i < e.length; i++)
        0 !== i && (r += ','), (r += Nt(e[i])), (r += ':'), (r += Oe(t[e[i]]))
      return (r += '}')
    },
    Pe = function(t, e) {
      var n = t.length
      if (n <= e) return [t]
      for (var r = [], i = 0; i < n; i += e)
        i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e))
      return r
    },
    De = function(t, e) {
      if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) e(n, t[n])
      else
        Ot(t, function(t, n) {
          return e(n, t)
        })
    },
    Le = function(t) {
      lt(!Se(t), 'Invalid JSON number')
      var e, n, r, i, o, a, s
      for (
        0 === t
          ? ((n = 0), (r = 0), (e = 1 / t == -1 / 0 ? 1 : 0))
          : ((e = t < 0),
            (t = Math.abs(t)) >= Math.pow(2, -1022)
              ? ((n =
                  (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) +
                  1023),
                (r = Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))))
              : ((n = 0), (r = Math.round(t / Math.pow(2, -1074))))),
          a = [],
          o = 52;
        o;
        o -= 1
      )
        a.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2))
      for (o = 11; o; o -= 1) a.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2))
      a.push(e ? 1 : 0), a.reverse(), (s = a.join(''))
      var u = ''
      for (o = 0; o < 64; o += 8) {
        var c = parseInt(s.substr(o, 8), 2).toString(16)
        1 === c.length && (c = '0' + c), (u += c)
      }
      return u.toLowerCase()
    },
    xe = new RegExp('^-?\\d{1,10}$'),
    Fe = function(t) {
      if (xe.test(t)) {
        var e = Number(t)
        if (e >= -2147483648 && e <= 2147483647) return e
      }
      return null
    },
    Ue = function(t) {
      try {
        t()
      } catch (t) {
        setTimeout(function() {
          var e = t.stack || ''
          throw (Ce('Exception was thrown by user callback.', e), t)
        }, Math.floor(0))
      }
    },
    Me = function() {
      return (
        (
          ('object' == typeof window &&
            window.navigator &&
            window.navigator.userAgent) ||
          ''
        ).search(
          /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
        ) >= 0
      )
    },
    We = function(t, e) {
      var n = setTimeout(t, e)
      return 'object' == typeof n && n.unref && n.unref(), n
    },
    Be = (function() {
      function t(t, e) {
        if (void 0 === e) {
          this.pieces_ = t.split('/')
          for (var n = 0, r = 0; r < this.pieces_.length; r++)
            this.pieces_[r].length > 0 &&
              ((this.pieces_[n] = this.pieces_[r]), n++)
          ;(this.pieces_.length = n), (this.pieceNum_ = 0)
        } else (this.pieces_ = t), (this.pieceNum_ = e)
      }
      return (
        Object.defineProperty(t, 'Empty', {
          get: function() {
            return new t('')
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.getFront = function() {
          return this.pieceNum_ >= this.pieces_.length
            ? null
            : this.pieces_[this.pieceNum_]
        }),
        (t.prototype.getLength = function() {
          return this.pieces_.length - this.pieceNum_
        }),
        (t.prototype.popFront = function() {
          var e = this.pieceNum_
          return e < this.pieces_.length && e++, new t(this.pieces_, e)
        }),
        (t.prototype.getBack = function() {
          return this.pieceNum_ < this.pieces_.length
            ? this.pieces_[this.pieces_.length - 1]
            : null
        }),
        (t.prototype.toString = function() {
          for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
            '' !== this.pieces_[e] && (t += '/' + this.pieces_[e])
          return t || '/'
        }),
        (t.prototype.toUrlEncodedString = function() {
          for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
            '' !== this.pieces_[e] &&
              (t += '/' + encodeURIComponent(String(this.pieces_[e])))
          return t || '/'
        }),
        (t.prototype.slice = function(t) {
          return void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t)
        }),
        (t.prototype.parent = function() {
          if (this.pieceNum_ >= this.pieces_.length) return null
          for (var e = [], n = this.pieceNum_; n < this.pieces_.length - 1; n++)
            e.push(this.pieces_[n])
          return new t(e, 0)
        }),
        (t.prototype.child = function(e) {
          for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++)
            n.push(this.pieces_[r])
          if (e instanceof t)
            for (r = e.pieceNum_; r < e.pieces_.length; r++)
              n.push(e.pieces_[r])
          else {
            var i = e.split('/')
            for (r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r])
          }
          return new t(n, 0)
        }),
        (t.prototype.isEmpty = function() {
          return this.pieceNum_ >= this.pieces_.length
        }),
        (t.relativePath = function(e, n) {
          var r = e.getFront(),
            i = n.getFront()
          if (null === r) return n
          if (r === i) return t.relativePath(e.popFront(), n.popFront())
          throw new Error(
            'INTERNAL ERROR: innerPath (' +
              n +
              ') is not within outerPath (' +
              e +
              ')'
          )
        }),
        (t.comparePaths = function(t, e) {
          for (
            var n = t.slice(), r = e.slice(), i = 0;
            i < n.length && i < r.length;
            i++
          ) {
            var o = Re(n[i], r[i])
            if (0 !== o) return o
          }
          return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
        }),
        (t.prototype.equals = function(t) {
          if (this.getLength() !== t.getLength()) return !1
          for (
            var e = this.pieceNum_, n = t.pieceNum_;
            e <= this.pieces_.length;
            e++, n++
          )
            if (this.pieces_[e] !== t.pieces_[n]) return !1
          return !0
        }),
        (t.prototype.contains = function(t) {
          var e = this.pieceNum_,
            n = t.pieceNum_
          if (this.getLength() > t.getLength()) return !1
          for (; e < this.pieces_.length; ) {
            if (this.pieces_[e] !== t.pieces_[n]) return !1
            ++e, ++n
          }
          return !0
        }),
        t
      )
    })(),
    je = (function() {
      function t(t, e) {
        ;(this.errorPrefix_ = e),
          (this.parts_ = t.slice()),
          (this.byteLength_ = Math.max(1, this.parts_.length))
        for (var n = 0; n < this.parts_.length; n++)
          this.byteLength_ += Gt(this.parts_[n])
        this.checkValid_()
      }
      return (
        Object.defineProperty(t, 'MAX_PATH_DEPTH', {
          get: function() {
            return 32
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t, 'MAX_PATH_LENGTH_BYTES', {
          get: function() {
            return 768
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.push = function(t) {
          this.parts_.length > 0 && (this.byteLength_ += 1),
            this.parts_.push(t),
            (this.byteLength_ += Gt(t)),
            this.checkValid_()
        }),
        (t.prototype.pop = function() {
          var t = this.parts_.pop()
          ;(this.byteLength_ -= Gt(t)),
            this.parts_.length > 0 && (this.byteLength_ -= 1)
        }),
        (t.prototype.checkValid_ = function() {
          if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES)
            throw new Error(
              this.errorPrefix_ +
                'has a key path longer than ' +
                t.MAX_PATH_LENGTH_BYTES +
                ' bytes (' +
                this.byteLength_ +
                ').'
            )
          if (this.parts_.length > t.MAX_PATH_DEPTH)
            throw new Error(
              this.errorPrefix_ +
                'path specified exceeds the maximum depth that can be written (' +
                t.MAX_PATH_DEPTH +
                ') or object contains a cycle ' +
                this.toErrorString()
            )
        }),
        (t.prototype.toErrorString = function() {
          return 0 == this.parts_.length
            ? ''
            : "in property '" + this.parts_.join('.') + "'"
        }),
        t
      )
    })(),
    Ve = 'long_polling',
    qe = (function() {
      function t(t, e, n, r, i) {
        void 0 === i && (i = ''),
          (this.secure = e),
          (this.namespace = n),
          (this.webSocketOnly = r),
          (this.persistenceKey = i),
          (this.host = t.toLowerCase()),
          (this.domain = this.host.substr(this.host.indexOf('.') + 1)),
          (this.internalHost = le.get('host:' + t) || this.host)
      }
      return (
        (t.prototype.needsQueryParam = function() {
          return this.host !== this.internalHost || this.isCustomHost()
        }),
        (t.prototype.isCacheableHost = function() {
          return 's-' === this.internalHost.substr(0, 2)
        }),
        (t.prototype.isDemoHost = function() {
          return 'firebaseio-demo.com' === this.domain
        }),
        (t.prototype.isCustomHost = function() {
          return (
            'firebaseio.com' !== this.domain &&
            'firebaseio-demo.com' !== this.domain
          )
        }),
        (t.prototype.updateHost = function(t) {
          t !== this.internalHost &&
            ((this.internalHost = t),
            this.isCacheableHost() &&
              le.set('host:' + this.host, this.internalHost))
        }),
        (t.prototype.connectionURL = function(t, e) {
          var n
          if (
            (lt('string' == typeof t, 'typeof type must == string'),
            lt('object' == typeof e, 'typeof params must == object'),
            'websocket' === t)
          )
            n = (this.secure ? 'wss://' : 'ws://') + this.internalHost + '/.ws?'
          else {
            if (t !== Ve) throw new Error('Unknown connection type: ' + t)
            n =
              (this.secure ? 'https://' : 'http://') +
              this.internalHost +
              '/.lp?'
          }
          this.needsQueryParam() && (e.ns = this.namespace)
          var r = []
          return (
            Ot(e, function(t, e) {
              r.push(t + '=' + e)
            }),
            n + r.join('&')
          )
        }),
        (t.prototype.toString = function() {
          var t = this.toURLString()
          return (
            this.persistenceKey && (t += '<' + this.persistenceKey + '>'), t
          )
        }),
        (t.prototype.toURLString = function() {
          return (this.secure ? 'https://' : 'http://') + this.host
        }),
        t
      )
    })()
  var He,
    Ke,
    Ge,
    Qe,
    ze,
    Ye = function(t) {
      var e = Xe(t),
        n = e.subdomain
      'firebase' === e.domain &&
        Te(
          e.host +
            ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
        ),
        (n && 'undefined' != n) ||
          'localhost' === e.domain ||
          Te(
            'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
          ),
        e.secure ||
          ('undefined' != typeof window &&
            window.location &&
            window.location.protocol &&
            -1 !== window.location.protocol.indexOf('https:') &&
            Ce(
              'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
            ))
      var r = 'ws' === e.scheme || 'wss' === e.scheme
      return {
        repoInfo: new qe(e.host, e.secure, n, r),
        path: new Be(e.pathString)
      }
    },
    Xe = function(t) {
      var e = '',
        n = '',
        r = '',
        i = '',
        o = !0,
        a = 'https',
        s = 443
      if ('string' == typeof t) {
        var u = t.indexOf('//')
        u >= 0 && ((a = t.substring(0, u - 1)), (t = t.substring(u + 2)))
        var c = t.indexOf('/')
        ;-1 === c && (c = t.length)
        var h = t.indexOf('?')
        ;-1 === h && (h = t.length),
          (e = t.substring(0, Math.min(c, h))),
          c < h &&
            (i = (function(t) {
              for (var e = '', n = t.split('/'), r = 0; r < n.length; r++)
                if (n[r].length > 0) {
                  var i = n[r]
                  try {
                    i = decodeURIComponent(i.replace(/\+/g, ' '))
                  } catch (t) {}
                  e += '/' + i
                }
              return e
            })(t.substring(c, h)))
        var l = (function(t) {
          var e = {}
          t.startsWith('?') && (t = t.substring(1))
          for (var n = 0, r = t.split('&'); n < r.length; n++) {
            var i = r[n]
            if (0 !== i.length) {
              var o = i.split('=')
              2 === o.length
                ? (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
                : Ce("Invalid query segment '" + i + "' in query '" + t + "'")
            }
          }
          return e
        })(t.substring(Math.min(t.length, h)))
        ;(u = e.indexOf(':')) >= 0
          ? ((o = 'https' === a || 'wss' === a),
            (s = parseInt(e.substring(u + 1), 10)))
          : (u = t.length)
        var p = e.split('.')
        3 === p.length
          ? ((n = p[1]), (r = p[0].toLowerCase()))
          : 2 === p.length
            ? (n = p[0])
            : 'localhost' === p[0].slice(0, u).toLowerCase() &&
              (n = 'localhost'),
          '' === r && 'ns' in l && (r = l.ns)
      }
      return {
        host: e,
        port: s,
        domain: n,
        subdomain: r,
        secure: o,
        scheme: a,
        pathString: i
      }
    },
    $e = /[\[\].#$\/\u0000-\u001F\u007F]/,
    Je = /[\[\].#$\u0000-\u001F\u007F]/,
    Ze = function(t) {
      return 'string' == typeof t && 0 !== t.length && !$e.test(t)
    },
    tn = function(t) {
      return 'string' == typeof t && 0 !== t.length && !Je.test(t)
    },
    en = function(t) {
      return (
        null === t ||
        'string' == typeof t ||
        ('number' == typeof t && !Se(t)) ||
        (t && 'object' == typeof t && At(t, '.sv'))
      )
    },
    nn = function(t, e, n, r, i) {
      ;(i && void 0 === n) || rn(qt(t, e, i), n, r)
    },
    rn = function(t, e, n) {
      var r = n instanceof Be ? new je(n, t) : n
      if (void 0 === e)
        throw new Error(t + 'contains undefined ' + r.toErrorString())
      if ('function' == typeof e)
        throw new Error(
          t +
            'contains a function ' +
            r.toErrorString() +
            ' with contents = ' +
            e.toString()
        )
      if (Se(e))
        throw new Error(
          t + 'contains ' + e.toString() + ' ' + r.toErrorString()
        )
      if ('string' == typeof e && e.length > 10485760 / 3 && Gt(e) > 10485760)
        throw new Error(
          t +
            'contains a string greater than 10485760 utf8 bytes ' +
            r.toErrorString() +
            " ('" +
            e.substring(0, 50) +
            "...')"
        )
      if (e && 'object' == typeof e) {
        var i = !1,
          o = !1
        if (
          (Ot(e, function(e, n) {
            if ('.value' === e) i = !0
            else if ('.priority' !== e && '.sv' !== e && ((o = !0), !Ze(e)))
              throw new Error(
                t +
                  ' contains an invalid key (' +
                  e +
                  ') ' +
                  r.toErrorString() +
                  '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
              )
            r.push(e), rn(t, n, r), r.pop()
          }),
          i && o)
        )
          throw new Error(
            t +
              ' contains ".value" child ' +
              r.toErrorString() +
              ' in addition to actual children.'
          )
      }
    },
    on = function(t, e, n, r, i) {
      if (!i || void 0 !== n) {
        var o = qt(t, e, i)
        if (!n || 'object' != typeof n || Array.isArray(n))
          throw new Error(
            o + ' must be an object containing the children to replace.'
          )
        var a = []
        Ot(n, function(t, e) {
          var n = new Be(t)
          if ((rn(o, e, r.child(n)), '.priority' === n.getBack() && !en(e)))
            throw new Error(
              o +
                "contains an invalid value for '" +
                n.toString() +
                "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
            )
          a.push(n)
        }),
          (function(t, e) {
            var n, r
            for (n = 0; n < e.length; n++)
              for (var i = (r = e[n]).slice(), o = 0; o < i.length; o++)
                if ('.priority' === i[o] && o === i.length - 1);
                else if (!Ze(i[o]))
                  throw new Error(
                    t +
                      'contains an invalid key (' +
                      i[o] +
                      ') in path ' +
                      r.toString() +
                      '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  )
            e.sort(Be.comparePaths)
            var a = null
            for (n = 0; n < e.length; n++) {
              if (((r = e[n]), null !== a && a.contains(r)))
                throw new Error(
                  t +
                    'contains a path ' +
                    a.toString() +
                    ' that is ancestor of another path ' +
                    r.toString()
                )
              a = r
            }
          })(o, a)
      }
    },
    an = function(t, e, n, r) {
      if (!r || void 0 !== n) {
        if (Se(n))
          throw new Error(
            qt(t, e, r) +
              'is ' +
              n.toString() +
              ', but must be a valid Firebase priority (a string, finite number, server value, or null).'
          )
        if (!en(n))
          throw new Error(
            qt(t, e, r) +
              'must be a valid Firebase priority (a string, finite number, server value, or null).'
          )
      }
    },
    sn = function(t, e, n, r) {
      if (!r || void 0 !== n)
        switch (n) {
          case 'value':
          case 'child_added':
          case 'child_removed':
          case 'child_changed':
          case 'child_moved':
            break
          default:
            throw new Error(
              qt(t, e, r) +
                'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
            )
        }
    },
    un = function(t, e, n, r) {
      if (!((r && void 0 === n) || Ze(n)))
        throw new Error(
          qt(t, e, r) +
            'was an invalid key = "' +
            n +
            '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
        )
    },
    cn = function(t, e, n, r) {
      if (!((r && void 0 === n) || tn(n)))
        throw new Error(
          qt(t, e, r) +
            'was an invalid path = "' +
            n +
            '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
        )
    },
    hn = function(t, e) {
      if ('.info' === e.getFront())
        throw new Error(t + " failed = Can't modify data under /.info/")
    },
    ln = function(t, e, n) {
      var r = n.path.toString()
      if (
        'string' != typeof n.repoInfo.host ||
        0 === n.repoInfo.host.length ||
        (!Ze(n.repoInfo.namespace) &&
          'localhost' !== n.repoInfo.host.split(':')[0]) ||
        (0 !== r.length &&
          !(function(t) {
            return t && (t = t.replace(/^\/*\.info(\/|$)/, '/')), tn(t)
          })(r))
      )
        throw new Error(
          qt(t, e, !1) +
            'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
        )
    },
    pn = (function() {
      function t(t, e) {
        ;(this.repo_ = t), (this.path_ = e)
      }
      return (
        (t.prototype.cancel = function(t) {
          Vt('OnDisconnect.cancel', 0, 1, arguments.length),
            Ht('OnDisconnect.cancel', 1, t, !0)
          var e = new mt()
          return (
            this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)),
            e.promise
          )
        }),
        (t.prototype.remove = function(t) {
          Vt('OnDisconnect.remove', 0, 1, arguments.length),
            hn('OnDisconnect.remove', this.path_),
            Ht('OnDisconnect.remove', 1, t, !0)
          var e = new mt()
          return (
            this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)),
            e.promise
          )
        }),
        (t.prototype.set = function(t, e) {
          Vt('OnDisconnect.set', 1, 2, arguments.length),
            hn('OnDisconnect.set', this.path_),
            nn('OnDisconnect.set', 1, t, this.path_, !1),
            Ht('OnDisconnect.set', 2, e, !0)
          var n = new mt()
          return (
            this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)),
            n.promise
          )
        }),
        (t.prototype.setWithPriority = function(t, e, n) {
          Vt('OnDisconnect.setWithPriority', 2, 3, arguments.length),
            hn('OnDisconnect.setWithPriority', this.path_),
            nn('OnDisconnect.setWithPriority', 1, t, this.path_, !1),
            an('OnDisconnect.setWithPriority', 2, e, !1),
            Ht('OnDisconnect.setWithPriority', 3, n, !0)
          var r = new mt()
          return (
            this.repo_.onDisconnectSetWithPriority(
              this.path_,
              t,
              e,
              r.wrapCallback(n)
            ),
            r.promise
          )
        }),
        (t.prototype.update = function(t, e) {
          if (
            (Vt('OnDisconnect.update', 1, 2, arguments.length),
            hn('OnDisconnect.update', this.path_),
            Array.isArray(t))
          ) {
            for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r]
            ;(t = n),
              Ce(
                'Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
              )
          }
          on('OnDisconnect.update', 1, t, this.path_, !1),
            Ht('OnDisconnect.update', 2, e, !0)
          var i = new mt()
          return (
            this.repo_.onDisconnectUpdate(this.path_, t, i.wrapCallback(e)),
            i.promise
          )
        }),
        t
      )
    })(),
    fn = (function() {
      function t(t, e) {
        ;(this.committed = t), (this.snapshot = e)
      }
      return (
        (t.prototype.toJSON = function() {
          return (
            Vt('TransactionResult.toJSON', 0, 1, arguments.length),
            {committed: this.committed, snapshot: this.snapshot.toJSON()}
          )
        }),
        t
      )
    })(),
    dn = ((He =
      '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'),
    (Ke = 0),
    (Ge = []),
    function(t) {
      var e,
        n = t === Ke
      Ke = t
      var r = new Array(8)
      for (e = 7; e >= 0; e--)
        (r[e] = He.charAt(t % 64)), (t = Math.floor(t / 64))
      lt(0 === t, 'Cannot push at time == 0')
      var i = r.join('')
      if (n) {
        for (e = 11; e >= 0 && 63 === Ge[e]; e--) Ge[e] = 0
        Ge[e]++
      } else for (e = 0; e < 12; e++) Ge[e] = Math.floor(64 * Math.random())
      for (e = 0; e < 12; e++) i += He.charAt(Ge[e])
      return lt(20 === i.length, 'nextPushId: Length should be 20.'), i
    }),
    vn = (function() {
      function t(t, e) {
        ;(this.name = t), (this.node = e)
      }
      return (
        (t.Wrap = function(e, n) {
          return new t(e, n)
        }),
        t
      )
    })(),
    yn = (function() {
      function t() {}
      return (
        (t.prototype.getCompare = function() {
          return this.compare.bind(this)
        }),
        (t.prototype.indexedValueChanged = function(t, e) {
          var n = new vn(Ie, t),
            r = new vn(Ie, e)
          return 0 !== this.compare(n, r)
        }),
        (t.prototype.minPost = function() {
          return vn.MIN
        }),
        t
      )
    })(),
    _n = (function(t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this
      }
      return (
        it(e, t),
        Object.defineProperty(e, '__EMPTY_NODE', {
          get: function() {
            return Qe
          },
          set: function(t) {
            Qe = t
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.compare = function(t, e) {
          return Re(t.name, e.name)
        }),
        (e.prototype.isDefinedOn = function(t) {
          throw pt('KeyIndex.isDefinedOn not expected to be called.')
        }),
        (e.prototype.indexedValueChanged = function(t, e) {
          return !1
        }),
        (e.prototype.minPost = function() {
          return vn.MIN
        }),
        (e.prototype.maxPost = function() {
          return new vn(Ne, Qe)
        }),
        (e.prototype.makePost = function(t, e) {
          return (
            lt(
              'string' == typeof t,
              'KeyIndex indexValue must always be a string.'
            ),
            new vn(t, Qe)
          )
        }),
        (e.prototype.toString = function() {
          return '.key'
        }),
        e
      )
    })(yn),
    gn = new _n()
  var mn,
    bn,
    wn,
    En = function(t) {
      return 'number' == typeof t ? 'number:' + Le(t) : 'string:' + t
    },
    Tn = function(t) {
      if (t.isLeafNode()) {
        var e = t.val()
        lt(
          'string' == typeof e ||
            'number' == typeof e ||
            ('object' == typeof e && At(e, '.sv')),
          'Priority must be a string or number.'
        )
      } else lt(t === ze || t.isEmpty(), 'priority of unexpected type.')
      lt(
        t === ze || t.getPriority().isEmpty(),
        "Priority nodes can't have a priority of their own."
      )
    },
    Cn = (function() {
      function t(e, n) {
        void 0 === n && (n = t.__childrenNodeConstructor.EMPTY_NODE),
          (this.value_ = e),
          (this.priorityNode_ = n),
          (this.lazyHash_ = null),
          lt(
            void 0 !== this.value_ && null !== this.value_,
            "LeafNode shouldn't be created with null/undefined value."
          ),
          Tn(this.priorityNode_)
      }
      return (
        Object.defineProperty(t, '__childrenNodeConstructor', {
          get: function() {
            return mn
          },
          set: function(t) {
            mn = t
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.isLeafNode = function() {
          return !0
        }),
        (t.prototype.getPriority = function() {
          return this.priorityNode_
        }),
        (t.prototype.updatePriority = function(e) {
          return new t(this.value_, e)
        }),
        (t.prototype.getImmediateChild = function(e) {
          return '.priority' === e
            ? this.priorityNode_
            : t.__childrenNodeConstructor.EMPTY_NODE
        }),
        (t.prototype.getChild = function(e) {
          return e.isEmpty()
            ? this
            : '.priority' === e.getFront()
              ? this.priorityNode_
              : t.__childrenNodeConstructor.EMPTY_NODE
        }),
        (t.prototype.hasChild = function() {
          return !1
        }),
        (t.prototype.getPredecessorChildName = function(t, e) {
          return null
        }),
        (t.prototype.updateImmediateChild = function(e, n) {
          return '.priority' === e
            ? this.updatePriority(n)
            : n.isEmpty() && '.priority' !== e
              ? this
              : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                  e,
                  n
                ).updatePriority(this.priorityNode_)
        }),
        (t.prototype.updateChild = function(e, n) {
          var r = e.getFront()
          return null === r
            ? n
            : n.isEmpty() && '.priority' !== r
              ? this
              : (lt(
                  '.priority' !== r || 1 === e.getLength(),
                  '.priority must be the last token in a path'
                ),
                this.updateImmediateChild(
                  r,
                  t.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                    e.popFront(),
                    n
                  )
                ))
        }),
        (t.prototype.isEmpty = function() {
          return !1
        }),
        (t.prototype.numChildren = function() {
          return 0
        }),
        (t.prototype.forEachChild = function(t, e) {
          return !1
        }),
        (t.prototype.val = function(t) {
          return t && !this.getPriority().isEmpty()
            ? {'.value': this.getValue(), '.priority': this.getPriority().val()}
            : this.getValue()
        }),
        (t.prototype.hash = function() {
          if (null === this.lazyHash_) {
            var t = ''
            this.priorityNode_.isEmpty() ||
              (t += 'priority:' + En(this.priorityNode_.val()) + ':')
            var e = typeof this.value_
            ;(t += e + ':'),
              (t += 'number' === e ? Le(this.value_) : this.value_),
              (this.lazyHash_ = ve(t))
          }
          return this.lazyHash_
        }),
        (t.prototype.getValue = function() {
          return this.value_
        }),
        (t.prototype.compareTo = function(e) {
          return e === t.__childrenNodeConstructor.EMPTY_NODE
            ? 1
            : e instanceof t.__childrenNodeConstructor
              ? -1
              : (lt(e.isLeafNode(), 'Unknown node type'),
                this.compareToLeafNode_(e))
        }),
        (t.prototype.compareToLeafNode_ = function(e) {
          var n = typeof e.value_,
            r = typeof this.value_,
            i = t.VALUE_TYPE_ORDER.indexOf(n),
            o = t.VALUE_TYPE_ORDER.indexOf(r)
          return (
            lt(i >= 0, 'Unknown leaf type: ' + n),
            lt(o >= 0, 'Unknown leaf type: ' + r),
            i === o
              ? 'object' === r
                ? 0
                : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1
              : o - i
          )
        }),
        (t.prototype.withIndex = function() {
          return this
        }),
        (t.prototype.isIndexed = function() {
          return !0
        }),
        (t.prototype.equals = function(t) {
          if (t === this) return !0
          if (t.isLeafNode()) {
            var e = t
            return (
              this.value_ === e.value_ &&
              this.priorityNode_.equals(e.priorityNode_)
            )
          }
          return !1
        }),
        (t.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string']),
        t
      )
    })()
  var Sn,
    In,
    Nn = new ((function(t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this
      }
      return (
        it(e, t),
        (e.prototype.compare = function(t, e) {
          var n = t.node.getPriority(),
            r = e.node.getPriority(),
            i = n.compareTo(r)
          return 0 === i ? Re(t.name, e.name) : i
        }),
        (e.prototype.isDefinedOn = function(t) {
          return !t.getPriority().isEmpty()
        }),
        (e.prototype.indexedValueChanged = function(t, e) {
          return !t.getPriority().equals(e.getPriority())
        }),
        (e.prototype.minPost = function() {
          return vn.MIN
        }),
        (e.prototype.maxPost = function() {
          return new vn(Ne, new Cn('[PRIORITY-POST]', wn))
        }),
        (e.prototype.makePost = function(t, e) {
          var n = bn(t)
          return new vn(e, new Cn('[PRIORITY-POST]', n))
        }),
        (e.prototype.toString = function() {
          return '.priority'
        }),
        e
      )
    })(yn))(),
    Rn = (function() {
      function t(t, e, n, r, i) {
        void 0 === i && (i = null),
          (this.isReverse_ = r),
          (this.resultGenerator_ = i),
          (this.nodeStack_ = [])
        for (var o = 1; !t.isEmpty(); )
          if (((t = t), (o = e ? n(t.key, e) : 1), r && (o *= -1), o < 0))
            t = this.isReverse_ ? t.left : t.right
          else {
            if (0 === o) {
              this.nodeStack_.push(t)
              break
            }
            this.nodeStack_.push(t), (t = this.isReverse_ ? t.right : t.left)
          }
      }
      return (
        (t.prototype.getNext = function() {
          if (0 === this.nodeStack_.length) return null
          var t,
            e = this.nodeStack_.pop()
          if (
            ((t = this.resultGenerator_
              ? this.resultGenerator_(e.key, e.value)
              : {key: e.key, value: e.value}),
            this.isReverse_)
          )
            for (e = e.left; !e.isEmpty(); )
              this.nodeStack_.push(e), (e = e.right)
          else
            for (e = e.right; !e.isEmpty(); )
              this.nodeStack_.push(e), (e = e.left)
          return t
        }),
        (t.prototype.hasNext = function() {
          return this.nodeStack_.length > 0
        }),
        (t.prototype.peek = function() {
          if (0 === this.nodeStack_.length) return null
          var t = this.nodeStack_[this.nodeStack_.length - 1]
          return this.resultGenerator_
            ? this.resultGenerator_(t.key, t.value)
            : {key: t.key, value: t.value}
        }),
        t
      )
    })(),
    An = (function() {
      function t(e, n, r, i, o) {
        ;(this.key = e),
          (this.value = n),
          (this.color = null != r ? r : t.RED),
          (this.left = null != i ? i : On.EMPTY_NODE),
          (this.right = null != o ? o : On.EMPTY_NODE)
      }
      return (
        (t.prototype.copy = function(e, n, r, i, o) {
          return new t(
            null != e ? e : this.key,
            null != n ? n : this.value,
            null != r ? r : this.color,
            null != i ? i : this.left,
            null != o ? o : this.right
          )
        }),
        (t.prototype.count = function() {
          return this.left.count() + 1 + this.right.count()
        }),
        (t.prototype.isEmpty = function() {
          return !1
        }),
        (t.prototype.inorderTraversal = function(t) {
          return (
            this.left.inorderTraversal(t) ||
            t(this.key, this.value) ||
            this.right.inorderTraversal(t)
          )
        }),
        (t.prototype.reverseTraversal = function(t) {
          return (
            this.right.reverseTraversal(t) ||
            t(this.key, this.value) ||
            this.left.reverseTraversal(t)
          )
        }),
        (t.prototype.min_ = function() {
          return this.left.isEmpty() ? this : this.left.min_()
        }),
        (t.prototype.minKey = function() {
          return this.min_().key
        }),
        (t.prototype.maxKey = function() {
          return this.right.isEmpty() ? this.key : this.right.maxKey()
        }),
        (t.prototype.insert = function(t, e, n) {
          var r, i
          return (i =
            (r = n(t, (i = this).key)) < 0
              ? i.copy(null, null, null, i.left.insert(t, e, n), null)
              : 0 === r
                ? i.copy(null, e, null, null, null)
                : i.copy(
                    null,
                    null,
                    null,
                    null,
                    i.right.insert(t, e, n)
                  )).fixUp_()
        }),
        (t.prototype.removeMin_ = function() {
          if (this.left.isEmpty()) return On.EMPTY_NODE
          var t = this
          return (
            t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()),
            (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_()
          )
        }),
        (t.prototype.remove = function(t, e) {
          var n, r
          if (e(t, (n = this).key) < 0)
            n.left.isEmpty() ||
              n.left.isRed_() ||
              n.left.left.isRed_() ||
              (n = n.moveRedLeft_()),
              (n = n.copy(null, null, null, n.left.remove(t, e), null))
          else {
            if (
              (n.left.isRed_() && (n = n.rotateRight_()),
              n.right.isEmpty() ||
                n.right.isRed_() ||
                n.right.left.isRed_() ||
                (n = n.moveRedRight_()),
              0 === e(t, n.key))
            ) {
              if (n.right.isEmpty()) return On.EMPTY_NODE
              ;(r = n.right.min_()),
                (n = n.copy(r.key, r.value, null, null, n.right.removeMin_()))
            }
            n = n.copy(null, null, null, null, n.right.remove(t, e))
          }
          return n.fixUp_()
        }),
        (t.prototype.isRed_ = function() {
          return this.color
        }),
        (t.prototype.fixUp_ = function() {
          var t = this
          return (
            t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
            t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()),
            t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
            t
          )
        }),
        (t.prototype.moveRedLeft_ = function() {
          var t = this.colorFlip_()
          return (
            t.right.left.isRed_() &&
              (t = (t = (t = t.copy(
                null,
                null,
                null,
                null,
                t.right.rotateRight_()
              )).rotateLeft_()).colorFlip_()),
            t
          )
        }),
        (t.prototype.moveRedRight_ = function() {
          var t = this.colorFlip_()
          return (
            t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()), t
          )
        }),
        (t.prototype.rotateLeft_ = function() {
          var e = this.copy(null, null, t.RED, null, this.right.left)
          return this.right.copy(null, null, this.color, e, null)
        }),
        (t.prototype.rotateRight_ = function() {
          var e = this.copy(null, null, t.RED, this.left.right, null)
          return this.left.copy(null, null, this.color, null, e)
        }),
        (t.prototype.colorFlip_ = function() {
          var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null)
          return this.copy(null, null, !this.color, t, e)
        }),
        (t.prototype.checkMaxDepth_ = function() {
          var t = this.check_()
          return Math.pow(2, t) <= this.count() + 1
        }),
        (t.prototype.check_ = function() {
          var t
          if (this.isRed_() && this.left.isRed_())
            throw new Error(
              'Red node has red child(' + this.key + ',' + this.value + ')'
            )
          if (this.right.isRed_())
            throw new Error(
              'Right child of (' + this.key + ',' + this.value + ') is red'
            )
          if ((t = this.left.check_()) !== this.right.check_())
            throw new Error('Black depths differ')
          return t + (this.isRed_() ? 0 : 1)
        }),
        (t.RED = !0),
        (t.BLACK = !1),
        t
      )
    })(),
    kn = (function() {
      function t() {}
      return (
        (t.prototype.copy = function(t, e, n, r, i) {
          return this
        }),
        (t.prototype.insert = function(t, e, n) {
          return new An(t, e, null)
        }),
        (t.prototype.remove = function(t, e) {
          return this
        }),
        (t.prototype.count = function() {
          return 0
        }),
        (t.prototype.isEmpty = function() {
          return !0
        }),
        (t.prototype.inorderTraversal = function(t) {
          return !1
        }),
        (t.prototype.reverseTraversal = function(t) {
          return !1
        }),
        (t.prototype.minKey = function() {
          return null
        }),
        (t.prototype.maxKey = function() {
          return null
        }),
        (t.prototype.check_ = function() {
          return 0
        }),
        (t.prototype.isRed_ = function() {
          return !1
        }),
        t
      )
    })(),
    On = (function() {
      function t(e, n) {
        void 0 === n && (n = t.EMPTY_NODE),
          (this.comparator_ = e),
          (this.root_ = n)
      }
      return (
        (t.prototype.insert = function(e, n) {
          return new t(
            this.comparator_,
            this.root_
              .insert(e, n, this.comparator_)
              .copy(null, null, An.BLACK, null, null)
          )
        }),
        (t.prototype.remove = function(e) {
          return new t(
            this.comparator_,
            this.root_
              .remove(e, this.comparator_)
              .copy(null, null, An.BLACK, null, null)
          )
        }),
        (t.prototype.get = function(t) {
          for (var e, n = this.root_; !n.isEmpty(); ) {
            if (0 === (e = this.comparator_(t, n.key))) return n.value
            e < 0 ? (n = n.left) : e > 0 && (n = n.right)
          }
          return null
        }),
        (t.prototype.getPredecessorKey = function(t) {
          for (var e, n = this.root_, r = null; !n.isEmpty(); ) {
            if (0 === (e = this.comparator_(t, n.key))) {
              if (n.left.isEmpty()) return r ? r.key : null
              for (n = n.left; !n.right.isEmpty(); ) n = n.right
              return n.key
            }
            e < 0 ? (n = n.left) : e > 0 && ((r = n), (n = n.right))
          }
          throw new Error(
            'Attempted to find predecessor key for a nonexistent key.  What gives?'
          )
        }),
        (t.prototype.isEmpty = function() {
          return this.root_.isEmpty()
        }),
        (t.prototype.count = function() {
          return this.root_.count()
        }),
        (t.prototype.minKey = function() {
          return this.root_.minKey()
        }),
        (t.prototype.maxKey = function() {
          return this.root_.maxKey()
        }),
        (t.prototype.inorderTraversal = function(t) {
          return this.root_.inorderTraversal(t)
        }),
        (t.prototype.reverseTraversal = function(t) {
          return this.root_.reverseTraversal(t)
        }),
        (t.prototype.getIterator = function(t) {
          return new Rn(this.root_, null, this.comparator_, !1, t)
        }),
        (t.prototype.getIteratorFrom = function(t, e) {
          return new Rn(this.root_, t, this.comparator_, !1, e)
        }),
        (t.prototype.getReverseIteratorFrom = function(t, e) {
          return new Rn(this.root_, t, this.comparator_, !0, e)
        }),
        (t.prototype.getReverseIterator = function(t) {
          return new Rn(this.root_, null, this.comparator_, !0, t)
        }),
        (t.EMPTY_NODE = new kn()),
        t
      )
    })(),
    Pn = Math.log(2),
    Dn = (function() {
      function t(t) {
        var e
        ;(this.count = ((e = t + 1), parseInt(Math.log(e) / Pn, 10))),
          (this.current_ = this.count - 1)
        var n,
          r = ((n = this.count), parseInt(Array(n + 1).join('1'), 2))
        this.bits_ = (t + 1) & r
      }
      return (
        (t.prototype.nextBitIsOne = function() {
          var t = !(this.bits_ & (1 << this.current_))
          return this.current_--, t
        }),
        t
      )
    })(),
    Ln = function(t, e, n, r) {
      t.sort(e)
      var i = function(e, r) {
          var o,
            a,
            s = r - e
          if (0 == s) return null
          if (1 == s)
            return (
              (o = t[e]),
              (a = n ? n(o) : o),
              new An(a, o.node, An.BLACK, null, null)
            )
          var u = parseInt(s / 2, 10) + e,
            c = i(e, u),
            h = i(u + 1, r)
          return (
            (o = t[u]), (a = n ? n(o) : o), new An(a, o.node, An.BLACK, c, h)
          )
        },
        o = (function(e) {
          for (
            var r = null,
              o = null,
              a = t.length,
              s = function(e, r) {
                var o = a - e,
                  s = a
                a -= e
                var c = i(o + 1, s),
                  h = t[o],
                  l = n ? n(h) : h
                u(new An(l, h.node, r, null, c))
              },
              u = function(t) {
                r ? ((r.left = t), (r = t)) : ((o = t), (r = t))
              },
              c = 0;
            c < e.count;
            ++c
          ) {
            var h = e.nextBitIsOne(),
              l = Math.pow(2, e.count - (c + 1))
            h ? s(l, An.BLACK) : (s(l, An.BLACK), s(l, An.RED))
          }
          return o
        })(new Dn(t.length))
      return new On(r || e, o)
    },
    xn = {},
    Fn = (function() {
      function t(t, e) {
        ;(this.indexes_ = t), (this.indexSet_ = e)
      }
      return (
        Object.defineProperty(t, 'Default', {
          get: function() {
            return (
              lt(xn && Nn, 'ChildrenNode.ts has not been loaded'),
              (Sn = Sn || new t({'.priority': xn}, {'.priority': Nn}))
            )
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.get = function(t) {
          var e = kt(this.indexes_, t)
          if (!e) throw new Error('No index defined for ' + t)
          return e === xn ? null : e
        }),
        (t.prototype.hasIndex = function(t) {
          return At(this.indexSet_, t.toString())
        }),
        (t.prototype.addIndex = function(e, n) {
          lt(
            e !== gn,
            "KeyIndex always exists and isn't meant to be added to the IndexMap."
          )
          for (
            var r, i = [], o = !1, a = n.getIterator(vn.Wrap), s = a.getNext();
            s;

          )
            (o = o || e.isDefinedOn(s.node)), i.push(s), (s = a.getNext())
          r = o ? Ln(i, e.getCompare()) : xn
          var u = e.toString(),
            c = Pt(this.indexSet_)
          c[u] = e
          var h = Pt(this.indexes_)
          return (h[u] = r), new t(h, c)
        }),
        (t.prototype.addToIndexes = function(e, n) {
          var r = this
          return new t(
            xt(this.indexes_, function(t, i) {
              var o = kt(r.indexSet_, i)
              if ((lt(o, 'Missing index implementation for ' + i), t === xn)) {
                if (o.isDefinedOn(e.node)) {
                  for (
                    var a = [], s = n.getIterator(vn.Wrap), u = s.getNext();
                    u;

                  )
                    u.name != e.name && a.push(u), (u = s.getNext())
                  return a.push(e), Ln(a, o.getCompare())
                }
                return xn
              }
              var c = n.get(e.name),
                h = t
              return c && (h = h.remove(new vn(e.name, c))), h.insert(e, e.node)
            }),
            this.indexSet_
          )
        }),
        (t.prototype.removeFromIndexes = function(e, n) {
          return new t(
            xt(this.indexes_, function(t) {
              if (t === xn) return t
              var r = n.get(e.name)
              return r ? t.remove(new vn(e.name, r)) : t
            }),
            this.indexSet_
          )
        }),
        t
      )
    })()
  function Un(t, e) {
    return Re(t.name, e.name)
  }
  function Mn(t, e) {
    return Re(t, e)
  }
  var Wn = (function() {
      function t(t, e, n) {
        ;(this.children_ = t),
          (this.priorityNode_ = e),
          (this.indexMap_ = n),
          (this.lazyHash_ = null),
          this.priorityNode_ && Tn(this.priorityNode_),
          this.children_.isEmpty() &&
            lt(
              !this.priorityNode_ || this.priorityNode_.isEmpty(),
              'An empty node cannot have a priority'
            )
      }
      return (
        Object.defineProperty(t, 'EMPTY_NODE', {
          get: function() {
            return In || (In = new t(new On(Mn), null, Fn.Default))
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.isLeafNode = function() {
          return !1
        }),
        (t.prototype.getPriority = function() {
          return this.priorityNode_ || In
        }),
        (t.prototype.updatePriority = function(e) {
          return this.children_.isEmpty()
            ? this
            : new t(this.children_, e, this.indexMap_)
        }),
        (t.prototype.getImmediateChild = function(t) {
          if ('.priority' === t) return this.getPriority()
          var e = this.children_.get(t)
          return null === e ? In : e
        }),
        (t.prototype.getChild = function(t) {
          var e = t.getFront()
          return null === e
            ? this
            : this.getImmediateChild(e).getChild(t.popFront())
        }),
        (t.prototype.hasChild = function(t) {
          return null !== this.children_.get(t)
        }),
        (t.prototype.updateImmediateChild = function(e, n) {
          if (
            (lt(n, 'We should always be passing snapshot nodes'),
            '.priority' === e)
          )
            return this.updatePriority(n)
          var r = new vn(e, n),
            i = void 0,
            o = void 0
          return (
            n.isEmpty()
              ? ((i = this.children_.remove(e)),
                (o = this.indexMap_.removeFromIndexes(r, this.children_)))
              : ((i = this.children_.insert(e, n)),
                (o = this.indexMap_.addToIndexes(r, this.children_))),
            new t(i, i.isEmpty() ? In : this.priorityNode_, o)
          )
        }),
        (t.prototype.updateChild = function(t, e) {
          var n = t.getFront()
          if (null === n) return e
          lt(
            '.priority' !== t.getFront() || 1 === t.getLength(),
            '.priority must be the last token in a path'
          )
          var r = this.getImmediateChild(n).updateChild(t.popFront(), e)
          return this.updateImmediateChild(n, r)
        }),
        (t.prototype.isEmpty = function() {
          return this.children_.isEmpty()
        }),
        (t.prototype.numChildren = function() {
          return this.children_.count()
        }),
        (t.prototype.val = function(e) {
          if (this.isEmpty()) return null
          var n = {},
            r = 0,
            i = 0,
            o = !0
          if (
            (this.forEachChild(Nn, function(a, s) {
              ;(n[a] = s.val(e)),
                r++,
                o && t.INTEGER_REGEXP_.test(a)
                  ? (i = Math.max(i, Number(a)))
                  : (o = !1)
            }),
            !e && o && i < 2 * r)
          ) {
            var a = []
            for (var s in n) a[s] = n[s]
            return a
          }
          return (
            e &&
              !this.getPriority().isEmpty() &&
              (n['.priority'] = this.getPriority().val()),
            n
          )
        }),
        (t.prototype.hash = function() {
          if (null === this.lazyHash_) {
            var t = ''
            this.getPriority().isEmpty() ||
              (t += 'priority:' + En(this.getPriority().val()) + ':'),
              this.forEachChild(Nn, function(e, n) {
                var r = n.hash()
                '' !== r && (t += ':' + e + ':' + r)
              }),
              (this.lazyHash_ = '' === t ? '' : ve(t))
          }
          return this.lazyHash_
        }),
        (t.prototype.getPredecessorChildName = function(t, e, n) {
          var r = this.resolveIndex_(n)
          if (r) {
            var i = r.getPredecessorKey(new vn(t, e))
            return i ? i.name : null
          }
          return this.children_.getPredecessorKey(t)
        }),
        (t.prototype.getFirstChildName = function(t) {
          var e = this.resolveIndex_(t)
          if (e) {
            var n = e.minKey()
            return n && n.name
          }
          return this.children_.minKey()
        }),
        (t.prototype.getFirstChild = function(t) {
          var e = this.getFirstChildName(t)
          return e ? new vn(e, this.children_.get(e)) : null
        }),
        (t.prototype.getLastChildName = function(t) {
          var e = this.resolveIndex_(t)
          if (e) {
            var n = e.maxKey()
            return n && n.name
          }
          return this.children_.maxKey()
        }),
        (t.prototype.getLastChild = function(t) {
          var e = this.getLastChildName(t)
          return e ? new vn(e, this.children_.get(e)) : null
        }),
        (t.prototype.forEachChild = function(t, e) {
          var n = this.resolveIndex_(t)
          return n
            ? n.inorderTraversal(function(t) {
                return e(t.name, t.node)
              })
            : this.children_.inorderTraversal(e)
        }),
        (t.prototype.getIterator = function(t) {
          return this.getIteratorFrom(t.minPost(), t)
        }),
        (t.prototype.getIteratorFrom = function(t, e) {
          var n = this.resolveIndex_(e)
          if (n)
            return n.getIteratorFrom(t, function(t) {
              return t
            })
          for (
            var r = this.children_.getIteratorFrom(t.name, vn.Wrap),
              i = r.peek();
            null != i && e.compare(i, t) < 0;

          )
            r.getNext(), (i = r.peek())
          return r
        }),
        (t.prototype.getReverseIterator = function(t) {
          return this.getReverseIteratorFrom(t.maxPost(), t)
        }),
        (t.prototype.getReverseIteratorFrom = function(t, e) {
          var n = this.resolveIndex_(e)
          if (n)
            return n.getReverseIteratorFrom(t, function(t) {
              return t
            })
          for (
            var r = this.children_.getReverseIteratorFrom(t.name, vn.Wrap),
              i = r.peek();
            null != i && e.compare(i, t) > 0;

          )
            r.getNext(), (i = r.peek())
          return r
        }),
        (t.prototype.compareTo = function(t) {
          return this.isEmpty()
            ? t.isEmpty() ? 0 : -1
            : t.isLeafNode() || t.isEmpty() ? 1 : t === Bn ? -1 : 0
        }),
        (t.prototype.withIndex = function(e) {
          if (e === gn || this.indexMap_.hasIndex(e)) return this
          var n = this.indexMap_.addIndex(e, this.children_)
          return new t(this.children_, this.priorityNode_, n)
        }),
        (t.prototype.isIndexed = function(t) {
          return t === gn || this.indexMap_.hasIndex(t)
        }),
        (t.prototype.equals = function(t) {
          if (t === this) return !0
          if (t.isLeafNode()) return !1
          var e = t
          if (this.getPriority().equals(e.getPriority())) {
            if (this.children_.count() === e.children_.count()) {
              for (
                var n = this.getIterator(Nn),
                  r = e.getIterator(Nn),
                  i = n.getNext(),
                  o = r.getNext();
                i && o;

              ) {
                if (i.name !== o.name || !i.node.equals(o.node)) return !1
                ;(i = n.getNext()), (o = r.getNext())
              }
              return null === i && null === o
            }
            return !1
          }
          return !1
        }),
        (t.prototype.resolveIndex_ = function(t) {
          return t === gn ? null : this.indexMap_.get(t.toString())
        }),
        (t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
        t
      )
    })(),
    Bn = new ((function(t) {
      function e() {
        return t.call(this, new On(Mn), Wn.EMPTY_NODE, Fn.Default) || this
      }
      return (
        it(e, t),
        (e.prototype.compareTo = function(t) {
          return t === this ? 0 : 1
        }),
        (e.prototype.equals = function(t) {
          return t === this
        }),
        (e.prototype.getPriority = function() {
          return this
        }),
        (e.prototype.getImmediateChild = function(t) {
          return Wn.EMPTY_NODE
        }),
        (e.prototype.isEmpty = function() {
          return !1
        }),
        e
      )
    })(Wn))()
  Object.defineProperties(vn, {
    MIN: {value: new vn(Ie, Wn.EMPTY_NODE)},
    MAX: {value: new vn(Ne, Bn)}
  }),
    (_n.__EMPTY_NODE = Wn.EMPTY_NODE),
    (Cn.__childrenNodeConstructor = Wn),
    (ze = Bn),
    (function(t) {
      wn = t
    })(Bn)
  var jn = !0
  function Vn(t, e) {
    if ((void 0 === e && (e = null), null === t)) return Wn.EMPTY_NODE
    if (
      ('object' == typeof t && '.priority' in t && (e = t['.priority']),
      lt(
        null === e ||
          'string' == typeof e ||
          'number' == typeof e ||
          ('object' == typeof e && '.sv' in e),
        'Invalid priority type found: ' + typeof e
      ),
      'object' == typeof t &&
        '.value' in t &&
        null !== t['.value'] &&
        (t = t['.value']),
      'object' != typeof t || '.sv' in t)
    )
      return new Cn(t, Vn(e))
    if (t instanceof Array || !jn) {
      var n = Wn.EMPTY_NODE,
        r = t
      return (
        Ot(r, function(t, e) {
          if (At(r, t) && '.' !== t.substring(0, 1)) {
            var i = Vn(e)
            ;(!i.isLeafNode() && i.isEmpty()) ||
              (n = n.updateImmediateChild(t, i))
          }
        }),
        n.updatePriority(Vn(e))
      )
    }
    var i = [],
      o = !1,
      a = t
    if (
      (Ot(a, function(t, e) {
        if ('string' != typeof t || '.' !== t.substring(0, 1)) {
          var n = Vn(a[t])
          n.isEmpty() ||
            ((o = o || !n.getPriority().isEmpty()), i.push(new vn(t, n)))
        }
      }),
      0 == i.length)
    )
      return Wn.EMPTY_NODE
    var s = Ln(
      i,
      Un,
      function(t) {
        return t.name
      },
      Mn
    )
    if (o) {
      var u = Ln(i, Nn.getCompare())
      return new Wn(s, Vn(e), new Fn({'.priority': u}, {'.priority': Nn}))
    }
    return new Wn(s, Vn(e), Fn.Default)
  }
  !(function(t) {
    bn = t
  })(Vn)
  var qn,
    Hn,
    Kn = new ((function(t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this
      }
      return (
        it(e, t),
        (e.prototype.compare = function(t, e) {
          var n = t.node.compareTo(e.node)
          return 0 === n ? Re(t.name, e.name) : n
        }),
        (e.prototype.isDefinedOn = function(t) {
          return !0
        }),
        (e.prototype.indexedValueChanged = function(t, e) {
          return !t.equals(e)
        }),
        (e.prototype.minPost = function() {
          return vn.MIN
        }),
        (e.prototype.maxPost = function() {
          return vn.MAX
        }),
        (e.prototype.makePost = function(t, e) {
          var n = Vn(t)
          return new vn(e, n)
        }),
        (e.prototype.toString = function() {
          return '.value'
        }),
        e
      )
    })(yn))(),
    Gn = (function(t) {
      function e(e) {
        var n = t.call(this) || this
        return (
          (n.indexPath_ = e),
          lt(
            !e.isEmpty() && '.priority' !== e.getFront(),
            "Can't create PathIndex with empty path or .priority key"
          ),
          n
        )
      }
      return (
        it(e, t),
        (e.prototype.extractChild = function(t) {
          return t.getChild(this.indexPath_)
        }),
        (e.prototype.isDefinedOn = function(t) {
          return !t.getChild(this.indexPath_).isEmpty()
        }),
        (e.prototype.compare = function(t, e) {
          var n = this.extractChild(t.node),
            r = this.extractChild(e.node),
            i = n.compareTo(r)
          return 0 === i ? Re(t.name, e.name) : i
        }),
        (e.prototype.makePost = function(t, e) {
          var n = Vn(t),
            r = Wn.EMPTY_NODE.updateChild(this.indexPath_, n)
          return new vn(e, r)
        }),
        (e.prototype.maxPost = function() {
          var t = Wn.EMPTY_NODE.updateChild(this.indexPath_, Bn)
          return new vn(Ne, t)
        }),
        (e.prototype.toString = function() {
          return this.indexPath_.slice().join('/')
        }),
        e
      )
    })(yn),
    Qn = (function() {
      function t(t, e, n) {
        ;(this.node_ = t), (this.ref_ = e), (this.index_ = n)
      }
      return (
        (t.prototype.val = function() {
          return (
            Vt('DataSnapshot.val', 0, 0, arguments.length), this.node_.val()
          )
        }),
        (t.prototype.exportVal = function() {
          return (
            Vt('DataSnapshot.exportVal', 0, 0, arguments.length),
            this.node_.val(!0)
          )
        }),
        (t.prototype.toJSON = function() {
          return (
            Vt('DataSnapshot.toJSON', 0, 1, arguments.length), this.exportVal()
          )
        }),
        (t.prototype.exists = function() {
          return (
            Vt('DataSnapshot.exists', 0, 0, arguments.length),
            !this.node_.isEmpty()
          )
        }),
        (t.prototype.child = function(e) {
          Vt('DataSnapshot.child', 0, 1, arguments.length),
            (e = String(e)),
            cn('DataSnapshot.child', 1, e, !1)
          var n = new Be(e),
            r = this.ref_.child(n)
          return new t(this.node_.getChild(n), r, Nn)
        }),
        (t.prototype.hasChild = function(t) {
          Vt('DataSnapshot.hasChild', 1, 1, arguments.length),
            cn('DataSnapshot.hasChild', 1, t, !1)
          var e = new Be(t)
          return !this.node_.getChild(e).isEmpty()
        }),
        (t.prototype.getPriority = function() {
          return (
            Vt('DataSnapshot.getPriority', 0, 0, arguments.length),
            this.node_.getPriority().val()
          )
        }),
        (t.prototype.forEach = function(e) {
          var n = this
          return (
            Vt('DataSnapshot.forEach', 1, 1, arguments.length),
            Ht('DataSnapshot.forEach', 1, e, !1),
            !this.node_.isLeafNode() &&
              !!this.node_.forEachChild(this.index_, function(r, i) {
                return e(new t(i, n.ref_.child(r), Nn))
              })
          )
        }),
        (t.prototype.hasChildren = function() {
          return (
            Vt('DataSnapshot.hasChildren', 0, 0, arguments.length),
            !this.node_.isLeafNode() && !this.node_.isEmpty()
          )
        }),
        Object.defineProperty(t.prototype, 'key', {
          get: function() {
            return this.ref_.getKey()
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.numChildren = function() {
          return (
            Vt('DataSnapshot.numChildren', 0, 0, arguments.length),
            this.node_.numChildren()
          )
        }),
        (t.prototype.getRef = function() {
          return Vt('DataSnapshot.ref', 0, 0, arguments.length), this.ref_
        }),
        Object.defineProperty(t.prototype, 'ref', {
          get: function() {
            return this.getRef()
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      )
    })(),
    zn = (function() {
      function t(t, e, n, r) {
        ;(this.eventType = t),
          (this.eventRegistration = e),
          (this.snapshot = n),
          (this.prevName = r)
      }
      return (
        (t.prototype.getPath = function() {
          var t = this.snapshot.getRef()
          return 'value' === this.eventType ? t.path : t.getParent().path
        }),
        (t.prototype.getEventType = function() {
          return this.eventType
        }),
        (t.prototype.getEventRunner = function() {
          return this.eventRegistration.getEventRunner(this)
        }),
        (t.prototype.toString = function() {
          return (
            this.getPath().toString() +
            ':' +
            this.eventType +
            ':' +
            Nt(this.snapshot.exportVal())
          )
        }),
        t
      )
    })(),
    Yn = (function() {
      function t(t, e, n) {
        ;(this.eventRegistration = t), (this.error = e), (this.path = n)
      }
      return (
        (t.prototype.getPath = function() {
          return this.path
        }),
        (t.prototype.getEventType = function() {
          return 'cancel'
        }),
        (t.prototype.getEventRunner = function() {
          return this.eventRegistration.getEventRunner(this)
        }),
        (t.prototype.toString = function() {
          return this.path.toString() + ':cancel'
        }),
        t
      )
    })(),
    Xn = (function() {
      function t(t, e, n) {
        ;(this.callback_ = t), (this.cancelCallback_ = e), (this.context_ = n)
      }
      return (
        (t.prototype.respondsTo = function(t) {
          return 'value' === t
        }),
        (t.prototype.createEvent = function(t, e) {
          var n = e.getQueryParams().getIndex()
          return new zn('value', this, new Qn(t.snapshotNode, e.getRef(), n))
        }),
        (t.prototype.getEventRunner = function(t) {
          var e = this.context_
          if ('cancel' === t.getEventType()) {
            lt(
              this.cancelCallback_,
              'Raising a cancel event on a listener with no cancel callback'
            )
            var n = this.cancelCallback_
            return function() {
              n.call(e, t.error)
            }
          }
          var r = this.callback_
          return function() {
            r.call(e, t.snapshot)
          }
        }),
        (t.prototype.createCancelEvent = function(t, e) {
          return this.cancelCallback_ ? new Yn(this, t, e) : null
        }),
        (t.prototype.matches = function(e) {
          return (
            e instanceof t &&
            (!e.callback_ ||
              !this.callback_ ||
              (e.callback_ === this.callback_ && e.context_ === this.context_))
          )
        }),
        (t.prototype.hasAnyCallback = function() {
          return null !== this.callback_
        }),
        t
      )
    })(),
    $n = (function() {
      function t(t, e, n) {
        ;(this.callbacks_ = t), (this.cancelCallback_ = e), (this.context_ = n)
      }
      return (
        (t.prototype.respondsTo = function(t) {
          var e = 'children_added' === t ? 'child_added' : t
          return (
            (e = 'children_removed' === e ? 'child_removed' : e),
            At(this.callbacks_, e)
          )
        }),
        (t.prototype.createCancelEvent = function(t, e) {
          return this.cancelCallback_ ? new Yn(this, t, e) : null
        }),
        (t.prototype.createEvent = function(t, e) {
          lt(null != t.childName, 'Child events should have a childName.')
          var n = e.getRef().child(t.childName),
            r = e.getQueryParams().getIndex()
          return new zn(t.type, this, new Qn(t.snapshotNode, n, r), t.prevName)
        }),
        (t.prototype.getEventRunner = function(t) {
          var e = this.context_
          if ('cancel' === t.getEventType()) {
            lt(
              this.cancelCallback_,
              'Raising a cancel event on a listener with no cancel callback'
            )
            var n = this.cancelCallback_
            return function() {
              n.call(e, t.error)
            }
          }
          var r = this.callbacks_[t.eventType]
          return function() {
            r.call(e, t.snapshot, t.prevName)
          }
        }),
        (t.prototype.matches = function(e) {
          if (e instanceof t) {
            if (!this.callbacks_ || !e.callbacks_) return !0
            if (this.context_ === e.context_) {
              var n = Lt(e.callbacks_)
              if (n === Lt(this.callbacks_)) {
                if (1 === n) {
                  var r = Ut(e.callbacks_),
                    i = Ut(this.callbacks_)
                  return !(
                    i !== r ||
                    (e.callbacks_[r] &&
                      this.callbacks_[i] &&
                      e.callbacks_[r] !== this.callbacks_[i])
                  )
                }
                return (function(t, e) {
                  for (var n in t)
                    if (
                      Object.prototype.hasOwnProperty.call(t, n) &&
                      !e(n, t[n])
                    )
                      return !1
                  return !0
                })(this.callbacks_, function(t, n) {
                  return e.callbacks_[t] === n
                })
              }
            }
          }
          return !1
        }),
        (t.prototype.hasAnyCallback = function() {
          return null !== this.callbacks_
        }),
        t
      )
    })(),
    Jn = (function() {
      function t(t, e, n, r) {
        ;(this.repo = t),
          (this.path = e),
          (this.queryParams_ = n),
          (this.orderByCalled_ = r)
      }
      return (
        Object.defineProperty(t, '__referenceConstructor', {
          get: function() {
            return lt(qn, 'Reference.ts has not been loaded'), qn
          },
          set: function(t) {
            qn = t
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.validateQueryEndpoints_ = function(t) {
          var e = null,
            n = null
          if (
            (t.hasStart() && (e = t.getIndexStartValue()),
            t.hasEnd() && (n = t.getIndexEndValue()),
            t.getIndex() === gn)
          ) {
            var r =
                'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().',
              i =
                'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.'
            if (t.hasStart()) {
              if (t.getIndexStartName() != Ie) throw new Error(r)
              if ('string' != typeof e) throw new Error(i)
            }
            if (t.hasEnd()) {
              if (t.getIndexEndName() != Ne) throw new Error(r)
              if ('string' != typeof n) throw new Error(i)
            }
          } else if (t.getIndex() === Nn) {
            if ((null != e && !en(e)) || (null != n && !en(n)))
              throw new Error(
                'Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).'
              )
          } else if (
            (lt(
              t.getIndex() instanceof Gn || t.getIndex() === Kn,
              'unknown index type.'
            ),
            (null != e && 'object' == typeof e) ||
              (null != n && 'object' == typeof n))
          )
            throw new Error(
              'Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.'
            )
        }),
        (t.validateLimit_ = function(t) {
          if (
            t.hasStart() &&
            t.hasEnd() &&
            t.hasLimit() &&
            !t.hasAnchoredLimit()
          )
            throw new Error(
              "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
            )
        }),
        (t.prototype.validateNoPreviousOrderByCall_ = function(t) {
          if (!0 === this.orderByCalled_)
            throw new Error(t + ": You can't combine multiple orderBy calls.")
        }),
        (t.prototype.getQueryParams = function() {
          return this.queryParams_
        }),
        (t.prototype.getRef = function() {
          return (
            Vt('Query.ref', 0, 0, arguments.length),
            new t.__referenceConstructor(this.repo, this.path)
          )
        }),
        (t.prototype.on = function(e, n, r, i) {
          Vt('Query.on', 2, 4, arguments.length),
            sn('Query.on', 1, e, !1),
            Ht('Query.on', 2, n, !1)
          var o = t.getCancelAndContextArgs_('Query.on', r, i)
          if ('value' === e) this.onValueEvent(n, o.cancel, o.context)
          else {
            var a = {}
            ;(a[e] = n), this.onChildEvent(a, o.cancel, o.context)
          }
          return n
        }),
        (t.prototype.onValueEvent = function(t, e, n) {
          var r = new Xn(t, e || null, n || null)
          this.repo.addEventCallbackForQuery(this, r)
        }),
        (t.prototype.onChildEvent = function(t, e, n) {
          var r = new $n(t, e, n)
          this.repo.addEventCallbackForQuery(this, r)
        }),
        (t.prototype.off = function(t, e, n) {
          Vt('Query.off', 0, 3, arguments.length),
            sn('Query.off', 1, t, !0),
            Ht('Query.off', 2, e, !0),
            Kt('Query.off', 3, n, !0)
          var r = null,
            i = null
          'value' === t
            ? (r = new Xn(e || null, null, n || null))
            : t && (e && ((i = {})[t] = e), (r = new $n(i, null, n || null)))
          this.repo.removeEventCallbackForQuery(this, r)
        }),
        (t.prototype.once = function(e, n, r, i) {
          var o = this
          Vt('Query.once', 1, 4, arguments.length),
            sn('Query.once', 1, e, !1),
            Ht('Query.once', 2, n, !0)
          var a = t.getCancelAndContextArgs_('Query.once', r, i),
            s = !0,
            u = new mt()
          u.promise.catch(function() {})
          var c = function(t) {
            s &&
              ((s = !1), o.off(e, c), n && n.bind(a.context)(t), u.resolve(t))
          }
          return (
            this.on(e, c, function(t) {
              o.off(e, c), a.cancel && a.cancel.bind(a.context)(t), u.reject(t)
            }),
            u.promise
          )
        }),
        (t.prototype.limitToFirst = function(e) {
          if (
            (Vt('Query.limitToFirst', 1, 1, arguments.length),
            'number' != typeof e || Math.floor(e) !== e || e <= 0)
          )
            throw new Error(
              'Query.limitToFirst: First argument must be a positive integer.'
            )
          if (this.queryParams_.hasLimit())
            throw new Error(
              'Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
            )
          return new t(
            this.repo,
            this.path,
            this.queryParams_.limitToFirst(e),
            this.orderByCalled_
          )
        }),
        (t.prototype.limitToLast = function(e) {
          if (
            (Vt('Query.limitToLast', 1, 1, arguments.length),
            'number' != typeof e || Math.floor(e) !== e || e <= 0)
          )
            throw new Error(
              'Query.limitToLast: First argument must be a positive integer.'
            )
          if (this.queryParams_.hasLimit())
            throw new Error(
              'Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
            )
          return new t(
            this.repo,
            this.path,
            this.queryParams_.limitToLast(e),
            this.orderByCalled_
          )
        }),
        (t.prototype.orderByChild = function(e) {
          if ((Vt('Query.orderByChild', 1, 1, arguments.length), '$key' === e))
            throw new Error(
              'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
            )
          if ('$priority' === e)
            throw new Error(
              'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
            )
          if ('$value' === e)
            throw new Error(
              'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
            )
          cn('Query.orderByChild', 1, e, !1),
            this.validateNoPreviousOrderByCall_('Query.orderByChild')
          var n = new Be(e)
          if (n.isEmpty())
            throw new Error(
              'Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.'
            )
          var r = new Gn(n),
            i = this.queryParams_.orderBy(r)
          return (
            t.validateQueryEndpoints_(i), new t(this.repo, this.path, i, !0)
          )
        }),
        (t.prototype.orderByKey = function() {
          Vt('Query.orderByKey', 0, 0, arguments.length),
            this.validateNoPreviousOrderByCall_('Query.orderByKey')
          var e = this.queryParams_.orderBy(gn)
          return (
            t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0)
          )
        }),
        (t.prototype.orderByPriority = function() {
          Vt('Query.orderByPriority', 0, 0, arguments.length),
            this.validateNoPreviousOrderByCall_('Query.orderByPriority')
          var e = this.queryParams_.orderBy(Nn)
          return (
            t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0)
          )
        }),
        (t.prototype.orderByValue = function() {
          Vt('Query.orderByValue', 0, 0, arguments.length),
            this.validateNoPreviousOrderByCall_('Query.orderByValue')
          var e = this.queryParams_.orderBy(Kn)
          return (
            t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0)
          )
        }),
        (t.prototype.startAt = function(e, n) {
          void 0 === e && (e = null),
            Vt('Query.startAt', 0, 2, arguments.length),
            nn('Query.startAt', 1, e, this.path, !0),
            un('Query.startAt', 2, n, !0)
          var r = this.queryParams_.startAt(e, n)
          if (
            (t.validateLimit_(r),
            t.validateQueryEndpoints_(r),
            this.queryParams_.hasStart())
          )
            throw new Error(
              'Query.startAt: Starting point was already set (by another call to startAt or equalTo).'
            )
          return (
            void 0 === e && ((e = null), (n = null)),
            new t(this.repo, this.path, r, this.orderByCalled_)
          )
        }),
        (t.prototype.endAt = function(e, n) {
          void 0 === e && (e = null),
            Vt('Query.endAt', 0, 2, arguments.length),
            nn('Query.endAt', 1, e, this.path, !0),
            un('Query.endAt', 2, n, !0)
          var r = this.queryParams_.endAt(e, n)
          if (
            (t.validateLimit_(r),
            t.validateQueryEndpoints_(r),
            this.queryParams_.hasEnd())
          )
            throw new Error(
              'Query.endAt: Ending point was already set (by another call to endAt or equalTo).'
            )
          return new t(this.repo, this.path, r, this.orderByCalled_)
        }),
        (t.prototype.equalTo = function(t, e) {
          if (
            (Vt('Query.equalTo', 1, 2, arguments.length),
            nn('Query.equalTo', 1, t, this.path, !1),
            un('Query.equalTo', 2, e, !0),
            this.queryParams_.hasStart())
          )
            throw new Error(
              'Query.equalTo: Starting point was already set (by another call to startAt or equalTo).'
            )
          if (this.queryParams_.hasEnd())
            throw new Error(
              'Query.equalTo: Ending point was already set (by another call to endAt or equalTo).'
            )
          return this.startAt(t, e).endAt(t, e)
        }),
        (t.prototype.toString = function() {
          return (
            Vt('Query.toString', 0, 0, arguments.length),
            this.repo.toString() + this.path.toUrlEncodedString()
          )
        }),
        (t.prototype.toJSON = function() {
          return Vt('Query.toJSON', 0, 1, arguments.length), this.toString()
        }),
        (t.prototype.queryObject = function() {
          return this.queryParams_.getQueryObject()
        }),
        (t.prototype.queryIdentifier = function() {
          var t = this.queryObject(),
            e = Oe(t)
          return '{}' === e ? 'default' : e
        }),
        (t.prototype.isEqual = function(e) {
          if (
            (Vt('Query.isEqual', 1, 1, arguments.length), !(e instanceof t))
          ) {
            throw new Error(
              'Query.isEqual failed: First argument must be an instance of firebase.database.Query.'
            )
          }
          var n = this.repo === e.repo,
            r = this.path.equals(e.path),
            i = this.queryIdentifier() === e.queryIdentifier()
          return n && r && i
        }),
        (t.getCancelAndContextArgs_ = function(t, e, n) {
          var r = {cancel: null, context: null}
          if (e && n)
            (r.cancel = e),
              Ht(t, 3, r.cancel, !0),
              (r.context = n),
              Kt(t, 4, r.context, !0)
          else if (e)
            if ('object' == typeof e && null !== e) r.context = e
            else {
              if ('function' != typeof e)
                throw new Error(
                  qt(t, 3, !0) +
                    ' must either be a cancel callback or a context object.'
                )
              r.cancel = e
            }
          return r
        }),
        Object.defineProperty(t.prototype, 'ref', {
          get: function() {
            return this.getRef()
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      )
    })(),
    Zn = (function() {
      function t() {
        this.set = {}
      }
      return (
        (t.prototype.add = function(t, e) {
          this.set[t] = null === e || e
        }),
        (t.prototype.contains = function(t) {
          return At(this.set, t)
        }),
        (t.prototype.get = function(t) {
          return this.contains(t) ? this.set[t] : void 0
        }),
        (t.prototype.remove = function(t) {
          delete this.set[t]
        }),
        (t.prototype.clear = function() {
          this.set = {}
        }),
        (t.prototype.isEmpty = function() {
          return Dt(this.set)
        }),
        (t.prototype.count = function() {
          return Lt(this.set)
        }),
        (t.prototype.each = function(t) {
          Ot(this.set, function(e, n) {
            return t(e, n)
          })
        }),
        (t.prototype.keys = function() {
          var t = []
          return (
            Ot(this.set, function(e) {
              t.push(e)
            }),
            t
          )
        }),
        t
      )
    })(),
    tr = (function() {
      function t() {
        ;(this.value_ = null), (this.children_ = null)
      }
      return (
        (t.prototype.find = function(t) {
          if (null != this.value_) return this.value_.getChild(t)
          if (t.isEmpty() || null == this.children_) return null
          var e = t.getFront()
          return (
            (t = t.popFront()),
            this.children_.contains(e) ? this.children_.get(e).find(t) : null
          )
        }),
        (t.prototype.remember = function(e, n) {
          if (e.isEmpty()) (this.value_ = n), (this.children_ = null)
          else if (null !== this.value_)
            this.value_ = this.value_.updateChild(e, n)
          else {
            null == this.children_ && (this.children_ = new Zn())
            var r = e.getFront()
            this.children_.contains(r) || this.children_.add(r, new t())
            var i = this.children_.get(r)
            ;(e = e.popFront()), i.remember(e, n)
          }
        }),
        (t.prototype.forget = function(t) {
          if (t.isEmpty())
            return (this.value_ = null), (this.children_ = null), !0
          if (null !== this.value_) {
            if (this.value_.isLeafNode()) return !1
            var e = this.value_
            this.value_ = null
            var n = this
            return (
              e.forEachChild(Nn, function(t, e) {
                n.remember(new Be(t), e)
              }),
              this.forget(t)
            )
          }
          if (null !== this.children_) {
            var r = t.getFront()
            if (((t = t.popFront()), this.children_.contains(r)))
              this.children_.get(r).forget(t) && this.children_.remove(r)
            return !!this.children_.isEmpty() && ((this.children_ = null), !0)
          }
          return !0
        }),
        (t.prototype.forEachTree = function(t, e) {
          null !== this.value_
            ? e(t, this.value_)
            : this.forEachChild(function(n, r) {
                var i = new Be(t.toString() + '/' + n)
                r.forEachTree(i, e)
              })
        }),
        (t.prototype.forEachChild = function(t) {
          null !== this.children_ &&
            this.children_.each(function(e, n) {
              t(e, n)
            })
        }),
        t
      )
    })(),
    er = function(t, e) {
      return t && 'object' == typeof t
        ? (lt('.sv' in t, 'Unexpected leaf node or priority contents'),
          e[t['.sv']])
        : t
    },
    nr = function(t, e) {
      var n,
        r = t.getPriority().val(),
        i = er(r, e)
      if (t.isLeafNode()) {
        var o = t,
          a = er(o.getValue(), e)
        return a !== o.getValue() || i !== o.getPriority().val()
          ? new Cn(a, Vn(i))
          : t
      }
      var s = t
      return (
        (n = s),
        i !== s.getPriority().val() && (n = n.updatePriority(new Cn(i))),
        s.forEachChild(Nn, function(t, r) {
          var i = nr(r, e)
          i !== r && (n = n.updateImmediateChild(t, i))
        }),
        n
      )
    }
  !(function(t) {
    ;(t[(t.OVERWRITE = 0)] = 'OVERWRITE'),
      (t[(t.MERGE = 1)] = 'MERGE'),
      (t[(t.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
      (t[(t.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE')
  })(Hn || (Hn = {}))
  var rr,
    ir,
    or = (function() {
      function t(t, e, n, r) {
        ;(this.fromUser = t),
          (this.fromServer = e),
          (this.queryId = n),
          (this.tagged = r),
          lt(!r || e, 'Tagged queries must be from server.')
      }
      return (
        (t.User = new t(!0, !1, null, !1)),
        (t.Server = new t(!1, !0, null, !1)),
        (t.forServerTaggedQuery = function(e) {
          return new t(!1, !0, e, !0)
        }),
        t
      )
    })(),
    ar = (function() {
      function t(t, e, n) {
        ;(this.path = t),
          (this.affectedTree = e),
          (this.revert = n),
          (this.type = Hn.ACK_USER_WRITE),
          (this.source = or.User)
      }
      return (
        (t.prototype.operationForChild = function(e) {
          if (this.path.isEmpty()) {
            if (null != this.affectedTree.value)
              return (
                lt(
                  this.affectedTree.children.isEmpty(),
                  'affectedTree should not have overlapping affected paths.'
                ),
                this
              )
            var n = this.affectedTree.subtree(new Be(e))
            return new t(Be.Empty, n, this.revert)
          }
          return (
            lt(
              this.path.getFront() === e,
              'operationForChild called for unrelated child.'
            ),
            new t(this.path.popFront(), this.affectedTree, this.revert)
          )
        }),
        t
      )
    })(),
    sr = function() {
      return rr || (rr = new On(Ae)), rr
    },
    ur = (function() {
      function t(t, e) {
        void 0 === e && (e = sr()), (this.value = t), (this.children = e)
      }
      return (
        (t.fromObject = function(e) {
          var n = t.Empty
          return (
            Ot(e, function(t, e) {
              n = n.set(new Be(t), e)
            }),
            n
          )
        }),
        (t.prototype.isEmpty = function() {
          return null === this.value && this.children.isEmpty()
        }),
        (t.prototype.findRootMostMatchingPathAndValue = function(t, e) {
          if (null != this.value && e(this.value))
            return {path: Be.Empty, value: this.value}
          if (t.isEmpty()) return null
          var n = t.getFront(),
            r = this.children.get(n)
          if (null !== r) {
            var i = r.findRootMostMatchingPathAndValue(t.popFront(), e)
            return null != i
              ? {path: new Be(n).child(i.path), value: i.value}
              : null
          }
          return null
        }),
        (t.prototype.findRootMostValueAndPath = function(t) {
          return this.findRootMostMatchingPathAndValue(t, function() {
            return !0
          })
        }),
        (t.prototype.subtree = function(e) {
          if (e.isEmpty()) return this
          var n = e.getFront(),
            r = this.children.get(n)
          return null !== r ? r.subtree(e.popFront()) : t.Empty
        }),
        (t.prototype.set = function(e, n) {
          if (e.isEmpty()) return new t(n, this.children)
          var r = e.getFront(),
            i = (this.children.get(r) || t.Empty).set(e.popFront(), n),
            o = this.children.insert(r, i)
          return new t(this.value, o)
        }),
        (t.prototype.remove = function(e) {
          if (e.isEmpty())
            return this.children.isEmpty()
              ? t.Empty
              : new t(null, this.children)
          var n = e.getFront(),
            r = this.children.get(n)
          if (r) {
            var i = r.remove(e.popFront()),
              o = void 0
            return (
              (o = i.isEmpty()
                ? this.children.remove(n)
                : this.children.insert(n, i)),
              null === this.value && o.isEmpty()
                ? t.Empty
                : new t(this.value, o)
            )
          }
          return this
        }),
        (t.prototype.get = function(t) {
          if (t.isEmpty()) return this.value
          var e = t.getFront(),
            n = this.children.get(e)
          return n ? n.get(t.popFront()) : null
        }),
        (t.prototype.setTree = function(e, n) {
          if (e.isEmpty()) return n
          var r = e.getFront(),
            i = (this.children.get(r) || t.Empty).setTree(e.popFront(), n),
            o = void 0
          return (
            (o = i.isEmpty()
              ? this.children.remove(r)
              : this.children.insert(r, i)),
            new t(this.value, o)
          )
        }),
        (t.prototype.fold = function(t) {
          return this.fold_(Be.Empty, t)
        }),
        (t.prototype.fold_ = function(t, e) {
          var n = {}
          return (
            this.children.inorderTraversal(function(r, i) {
              n[r] = i.fold_(t.child(r), e)
            }),
            e(t, this.value, n)
          )
        }),
        (t.prototype.findOnPath = function(t, e) {
          return this.findOnPath_(t, Be.Empty, e)
        }),
        (t.prototype.findOnPath_ = function(t, e, n) {
          var r = !!this.value && n(e, this.value)
          if (r) return r
          if (t.isEmpty()) return null
          var i = t.getFront(),
            o = this.children.get(i)
          return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null
        }),
        (t.prototype.foreachOnPath = function(t, e) {
          return this.foreachOnPath_(t, Be.Empty, e)
        }),
        (t.prototype.foreachOnPath_ = function(e, n, r) {
          if (e.isEmpty()) return this
          this.value && r(n, this.value)
          var i = e.getFront(),
            o = this.children.get(i)
          return o ? o.foreachOnPath_(e.popFront(), n.child(i), r) : t.Empty
        }),
        (t.prototype.foreach = function(t) {
          this.foreach_(Be.Empty, t)
        }),
        (t.prototype.foreach_ = function(t, e) {
          this.children.inorderTraversal(function(n, r) {
            r.foreach_(t.child(n), e)
          }),
            this.value && e(t, this.value)
        }),
        (t.prototype.foreachChild = function(t) {
          this.children.inorderTraversal(function(e, n) {
            n.value && t(e, n.value)
          })
        }),
        (t.Empty = new t(null)),
        t
      )
    })(),
    cr = (function() {
      function t(t, e) {
        ;(this.source = t), (this.path = e), (this.type = Hn.LISTEN_COMPLETE)
      }
      return (
        (t.prototype.operationForChild = function(e) {
          return this.path.isEmpty()
            ? new t(this.source, Be.Empty)
            : new t(this.source, this.path.popFront())
        }),
        t
      )
    })(),
    hr = (function() {
      function t(t, e, n) {
        ;(this.source = t),
          (this.path = e),
          (this.snap = n),
          (this.type = Hn.OVERWRITE)
      }
      return (
        (t.prototype.operationForChild = function(e) {
          return this.path.isEmpty()
            ? new t(this.source, Be.Empty, this.snap.getImmediateChild(e))
            : new t(this.source, this.path.popFront(), this.snap)
        }),
        t
      )
    })(),
    lr = (function() {
      function t(t, e, n) {
        ;(this.source = t),
          (this.path = e),
          (this.children = n),
          (this.type = Hn.MERGE)
      }
      return (
        (t.prototype.operationForChild = function(e) {
          if (this.path.isEmpty()) {
            var n = this.children.subtree(new Be(e))
            return n.isEmpty()
              ? null
              : n.value
                ? new hr(this.source, Be.Empty, n.value)
                : new t(this.source, Be.Empty, n)
          }
          return (
            lt(
              this.path.getFront() === e,
              "Can't get a merge for a child not on the path of the operation"
            ),
            new t(this.source, this.path.popFront(), this.children)
          )
        }),
        (t.prototype.toString = function() {
          return (
            'Operation(' +
            this.path +
            ': ' +
            this.source.toString() +
            ' merge: ' +
            this.children.toString() +
            ')'
          )
        }),
        t
      )
    })(),
    pr = (function() {
      function t(t, e, n) {
        ;(this.node_ = t), (this.fullyInitialized_ = e), (this.filtered_ = n)
      }
      return (
        (t.prototype.isFullyInitialized = function() {
          return this.fullyInitialized_
        }),
        (t.prototype.isFiltered = function() {
          return this.filtered_
        }),
        (t.prototype.isCompleteForPath = function(t) {
          if (t.isEmpty()) return this.isFullyInitialized() && !this.filtered_
          var e = t.getFront()
          return this.isCompleteForChild(e)
        }),
        (t.prototype.isCompleteForChild = function(t) {
          return (
            (this.isFullyInitialized() && !this.filtered_) ||
            this.node_.hasChild(t)
          )
        }),
        (t.prototype.getNode = function() {
          return this.node_
        }),
        t
      )
    })(),
    fr = (function() {
      function t(t, e) {
        ;(this.eventCache_ = t), (this.serverCache_ = e)
      }
      return (
        (t.prototype.updateEventSnap = function(e, n, r) {
          return new t(new pr(e, n, r), this.serverCache_)
        }),
        (t.prototype.updateServerSnap = function(e, n, r) {
          return new t(this.eventCache_, new pr(e, n, r))
        }),
        (t.prototype.getEventCache = function() {
          return this.eventCache_
        }),
        (t.prototype.getCompleteEventSnap = function() {
          return this.eventCache_.isFullyInitialized()
            ? this.eventCache_.getNode()
            : null
        }),
        (t.prototype.getServerCache = function() {
          return this.serverCache_
        }),
        (t.prototype.getCompleteServerSnap = function() {
          return this.serverCache_.isFullyInitialized()
            ? this.serverCache_.getNode()
            : null
        }),
        (t.Empty = new t(
          new pr(Wn.EMPTY_NODE, !1, !1),
          new pr(Wn.EMPTY_NODE, !1, !1)
        )),
        t
      )
    })(),
    dr = (function() {
      function t(t, e, n, r, i) {
        ;(this.type = t),
          (this.snapshotNode = e),
          (this.childName = n),
          (this.oldSnap = r),
          (this.prevName = i)
      }
      return (
        (t.valueChange = function(e) {
          return new t(t.VALUE, e)
        }),
        (t.childAddedChange = function(e, n) {
          return new t(t.CHILD_ADDED, n, e)
        }),
        (t.childRemovedChange = function(e, n) {
          return new t(t.CHILD_REMOVED, n, e)
        }),
        (t.childChangedChange = function(e, n, r) {
          return new t(t.CHILD_CHANGED, n, e, r)
        }),
        (t.childMovedChange = function(e, n) {
          return new t(t.CHILD_MOVED, n, e)
        }),
        (t.CHILD_ADDED = 'child_added'),
        (t.CHILD_REMOVED = 'child_removed'),
        (t.CHILD_CHANGED = 'child_changed'),
        (t.CHILD_MOVED = 'child_moved'),
        (t.VALUE = 'value'),
        t
      )
    })(),
    vr = (function() {
      function t(t) {
        this.index_ = t
      }
      return (
        (t.prototype.updateChild = function(t, e, n, r, i, o) {
          lt(
            t.isIndexed(this.index_),
            'A node must be indexed if only a child is updated'
          )
          var a = t.getImmediateChild(e)
          return a.getChild(r).equals(n.getChild(r)) &&
            a.isEmpty() == n.isEmpty()
            ? t
            : (null != o &&
                (n.isEmpty()
                  ? t.hasChild(e)
                    ? o.trackChildChange(dr.childRemovedChange(e, a))
                    : lt(
                        t.isLeafNode(),
                        'A child remove without an old child only makes sense on a leaf node'
                      )
                  : a.isEmpty()
                    ? o.trackChildChange(dr.childAddedChange(e, n))
                    : o.trackChildChange(dr.childChangedChange(e, n, a))),
              t.isLeafNode() && n.isEmpty()
                ? t
                : t.updateImmediateChild(e, n).withIndex(this.index_))
        }),
        (t.prototype.updateFullNode = function(t, e, n) {
          return (
            null != n &&
              (t.isLeafNode() ||
                t.forEachChild(Nn, function(t, r) {
                  e.hasChild(t) ||
                    n.trackChildChange(dr.childRemovedChange(t, r))
                }),
              e.isLeafNode() ||
                e.forEachChild(Nn, function(e, r) {
                  if (t.hasChild(e)) {
                    var i = t.getImmediateChild(e)
                    i.equals(r) ||
                      n.trackChildChange(dr.childChangedChange(e, r, i))
                  } else n.trackChildChange(dr.childAddedChange(e, r))
                })),
            e.withIndex(this.index_)
          )
        }),
        (t.prototype.updatePriority = function(t, e) {
          return t.isEmpty() ? Wn.EMPTY_NODE : t.updatePriority(e)
        }),
        (t.prototype.filtersNodes = function() {
          return !1
        }),
        (t.prototype.getIndexedFilter = function() {
          return this
        }),
        (t.prototype.getIndex = function() {
          return this.index_
        }),
        t
      )
    })(),
    yr = (function() {
      function t() {
        this.changeMap_ = {}
      }
      return (
        (t.prototype.trackChildChange = function(t) {
          var e = t.type,
            n = t.childName
          lt(
            e == dr.CHILD_ADDED ||
              e == dr.CHILD_CHANGED ||
              e == dr.CHILD_REMOVED,
            'Only child changes supported for tracking'
          ),
            lt(
              '.priority' !== n,
              'Only non-priority child changes can be tracked.'
            )
          var r = kt(this.changeMap_, n)
          if (r) {
            var i = r.type
            if (e == dr.CHILD_ADDED && i == dr.CHILD_REMOVED)
              this.changeMap_[n] = dr.childChangedChange(
                n,
                t.snapshotNode,
                r.snapshotNode
              )
            else if (e == dr.CHILD_REMOVED && i == dr.CHILD_ADDED)
              delete this.changeMap_[n]
            else if (e == dr.CHILD_REMOVED && i == dr.CHILD_CHANGED)
              this.changeMap_[n] = dr.childRemovedChange(n, r.oldSnap)
            else if (e == dr.CHILD_CHANGED && i == dr.CHILD_ADDED)
              this.changeMap_[n] = dr.childAddedChange(n, t.snapshotNode)
            else {
              if (e != dr.CHILD_CHANGED || i != dr.CHILD_CHANGED)
                throw pt(
                  'Illegal combination of changes: ' +
                    t +
                    ' occurred after ' +
                    r
                )
              this.changeMap_[n] = dr.childChangedChange(
                n,
                t.snapshotNode,
                r.oldSnap
              )
            }
          } else this.changeMap_[n] = t
        }),
        (t.prototype.getChanges = function() {
          return (function(t) {
            var e = [],
              n = 0
            for (var r in t) e[n++] = t[r]
            return e
          })(this.changeMap_)
        }),
        t
      )
    })(),
    _r = new ((function() {
      function t() {}
      return (
        (t.prototype.getCompleteChild = function(t) {
          return null
        }),
        (t.prototype.getChildAfterChild = function(t, e, n) {
          return null
        }),
        t
      )
    })())(),
    gr = (function() {
      function t(t, e, n) {
        void 0 === n && (n = null),
          (this.writes_ = t),
          (this.viewCache_ = e),
          (this.optCompleteServerCache_ = n)
      }
      return (
        (t.prototype.getCompleteChild = function(t) {
          var e = this.viewCache_.getEventCache()
          if (e.isCompleteForChild(t)) return e.getNode().getImmediateChild(t)
          var n =
            null != this.optCompleteServerCache_
              ? new pr(this.optCompleteServerCache_, !0, !1)
              : this.viewCache_.getServerCache()
          return this.writes_.calcCompleteChild(t, n)
        }),
        (t.prototype.getChildAfterChild = function(t, e, n) {
          var r =
              null != this.optCompleteServerCache_
                ? this.optCompleteServerCache_
                : this.viewCache_.getCompleteServerSnap(),
            i = this.writes_.calcIndexedSlice(r, e, 1, n, t)
          return 0 === i.length ? null : i[0]
        }),
        t
      )
    })(),
    mr = (function() {
      return function(t, e) {
        ;(this.viewCache = t), (this.changes = e)
      }
    })(),
    br = (function() {
      function t(t) {
        this.filter_ = t
      }
      return (
        (t.prototype.assertIndexed = function(t) {
          lt(
            t
              .getEventCache()
              .getNode()
              .isIndexed(this.filter_.getIndex()),
            'Event snap not indexed'
          ),
            lt(
              t
                .getServerCache()
                .getNode()
                .isIndexed(this.filter_.getIndex()),
              'Server snap not indexed'
            )
        }),
        (t.prototype.applyOperation = function(e, n, r, i) {
          var o,
            a,
            s = new yr()
          if (n.type === Hn.OVERWRITE) {
            var u = n
            u.source.fromUser
              ? (o = this.applyUserOverwrite_(e, u.path, u.snap, r, i, s))
              : (lt(u.source.fromServer, 'Unknown source.'),
                (a =
                  u.source.tagged ||
                  (e.getServerCache().isFiltered() && !u.path.isEmpty())),
                (o = this.applyServerOverwrite_(e, u.path, u.snap, r, i, a, s)))
          } else if (n.type === Hn.MERGE) {
            var c = n
            c.source.fromUser
              ? (o = this.applyUserMerge_(e, c.path, c.children, r, i, s))
              : (lt(c.source.fromServer, 'Unknown source.'),
                (a = c.source.tagged || e.getServerCache().isFiltered()),
                (o = this.applyServerMerge_(e, c.path, c.children, r, i, a, s)))
          } else if (n.type === Hn.ACK_USER_WRITE) {
            var h = n
            o = h.revert
              ? this.revertUserWrite_(e, h.path, r, i, s)
              : this.ackUserWrite_(e, h.path, h.affectedTree, r, i, s)
          } else {
            if (n.type !== Hn.LISTEN_COMPLETE)
              throw pt('Unknown operation type: ' + n.type)
            o = this.listenComplete_(e, n.path, r, s)
          }
          var l = s.getChanges()
          return t.maybeAddValueEvent_(e, o, l), new mr(o, l)
        }),
        (t.maybeAddValueEvent_ = function(t, e, n) {
          var r = e.getEventCache()
          if (r.isFullyInitialized()) {
            var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
              o = t.getCompleteEventSnap()
            ;(n.length > 0 ||
              !t.getEventCache().isFullyInitialized() ||
              (i && !r.getNode().equals(o)) ||
              !r
                .getNode()
                .getPriority()
                .equals(o.getPriority())) &&
              n.push(dr.valueChange(e.getCompleteEventSnap()))
          }
        }),
        (t.prototype.generateEventCacheAfterServerEvent_ = function(
          t,
          e,
          n,
          r,
          i
        ) {
          var o = t.getEventCache()
          if (null != n.shadowingWrite(e)) return t
          var a = void 0,
            s = void 0
          if (e.isEmpty())
            if (
              (lt(
                t.getServerCache().isFullyInitialized(),
                'If change path is empty, we must have complete server data'
              ),
              t.getServerCache().isFiltered())
            ) {
              var u = t.getCompleteServerSnap(),
                c = u instanceof Wn ? u : Wn.EMPTY_NODE,
                h = n.calcCompleteEventChildren(c)
              a = this.filter_.updateFullNode(t.getEventCache().getNode(), h, i)
            } else {
              var l = n.calcCompleteEventCache(t.getCompleteServerSnap())
              a = this.filter_.updateFullNode(t.getEventCache().getNode(), l, i)
            }
          else {
            var p = e.getFront()
            if ('.priority' == p) {
              lt(
                1 == e.getLength(),
                "Can't have a priority with additional path components"
              )
              var f = o.getNode()
              s = t.getServerCache().getNode()
              var d = n.calcEventCacheAfterServerOverwrite(e, f, s)
              a = null != d ? this.filter_.updatePriority(f, d) : o.getNode()
            } else {
              var v = e.popFront(),
                y = void 0
              if (o.isCompleteForChild(p)) {
                s = t.getServerCache().getNode()
                var _ = n.calcEventCacheAfterServerOverwrite(e, o.getNode(), s)
                y =
                  null != _
                    ? o
                        .getNode()
                        .getImmediateChild(p)
                        .updateChild(v, _)
                    : o.getNode().getImmediateChild(p)
              } else y = n.calcCompleteChild(p, t.getServerCache())
              a =
                null != y
                  ? this.filter_.updateChild(o.getNode(), p, y, v, r, i)
                  : o.getNode()
            }
          }
          return t.updateEventSnap(
            a,
            o.isFullyInitialized() || e.isEmpty(),
            this.filter_.filtersNodes()
          )
        }),
        (t.prototype.applyServerOverwrite_ = function(t, e, n, r, i, o, a) {
          var s,
            u = t.getServerCache(),
            c = o ? this.filter_ : this.filter_.getIndexedFilter()
          if (e.isEmpty()) s = c.updateFullNode(u.getNode(), n, null)
          else if (c.filtersNodes() && !u.isFiltered()) {
            var h = u.getNode().updateChild(e, n)
            s = c.updateFullNode(u.getNode(), h, null)
          } else {
            var l = e.getFront()
            if (!u.isCompleteForPath(e) && e.getLength() > 1) return t
            var p = e.popFront(),
              f = u
                .getNode()
                .getImmediateChild(l)
                .updateChild(p, n)
            s =
              '.priority' == l
                ? c.updatePriority(u.getNode(), f)
                : c.updateChild(u.getNode(), l, f, p, _r, null)
          }
          var d = t.updateServerSnap(
              s,
              u.isFullyInitialized() || e.isEmpty(),
              c.filtersNodes()
            ),
            v = new gr(r, d, i)
          return this.generateEventCacheAfterServerEvent_(d, e, r, v, a)
        }),
        (t.prototype.applyUserOverwrite_ = function(t, e, n, r, i, o) {
          var a,
            s,
            u = t.getEventCache(),
            c = new gr(r, t, i)
          if (e.isEmpty())
            (s = this.filter_.updateFullNode(
              t.getEventCache().getNode(),
              n,
              o
            )),
              (a = t.updateEventSnap(s, !0, this.filter_.filtersNodes()))
          else {
            var h = e.getFront()
            if ('.priority' === h)
              (s = this.filter_.updatePriority(t.getEventCache().getNode(), n)),
                (a = t.updateEventSnap(
                  s,
                  u.isFullyInitialized(),
                  u.isFiltered()
                ))
            else {
              var l = e.popFront(),
                p = u.getNode().getImmediateChild(h),
                f = void 0
              if (l.isEmpty()) f = n
              else {
                var d = c.getCompleteChild(h)
                f =
                  null != d
                    ? '.priority' === l.getBack() &&
                      d.getChild(l.parent()).isEmpty()
                      ? d
                      : d.updateChild(l, n)
                    : Wn.EMPTY_NODE
              }
              if (p.equals(f)) a = t
              else {
                var v = this.filter_.updateChild(u.getNode(), h, f, l, c, o)
                a = t.updateEventSnap(
                  v,
                  u.isFullyInitialized(),
                  this.filter_.filtersNodes()
                )
              }
            }
          }
          return a
        }),
        (t.cacheHasChild_ = function(t, e) {
          return t.getEventCache().isCompleteForChild(e)
        }),
        (t.prototype.applyUserMerge_ = function(e, n, r, i, o, a) {
          var s = this,
            u = e
          return (
            r.foreach(function(r, c) {
              var h = n.child(r)
              t.cacheHasChild_(e, h.getFront()) &&
                (u = s.applyUserOverwrite_(u, h, c, i, o, a))
            }),
            r.foreach(function(r, c) {
              var h = n.child(r)
              t.cacheHasChild_(e, h.getFront()) ||
                (u = s.applyUserOverwrite_(u, h, c, i, o, a))
            }),
            u
          )
        }),
        (t.prototype.applyMerge_ = function(t, e) {
          return (
            e.foreach(function(e, n) {
              t = t.updateChild(e, n)
            }),
            t
          )
        }),
        (t.prototype.applyServerMerge_ = function(t, e, n, r, i, o, a) {
          var s = this
          if (
            t
              .getServerCache()
              .getNode()
              .isEmpty() &&
            !t.getServerCache().isFullyInitialized()
          )
            return t
          var u,
            c = t
          u = e.isEmpty() ? n : ur.Empty.setTree(e, n)
          var h = t.getServerCache().getNode()
          return (
            u.children.inorderTraversal(function(e, n) {
              if (h.hasChild(e)) {
                var u = t
                    .getServerCache()
                    .getNode()
                    .getImmediateChild(e),
                  l = s.applyMerge_(u, n)
                c = s.applyServerOverwrite_(c, new Be(e), l, r, i, o, a)
              }
            }),
            u.children.inorderTraversal(function(e, n) {
              var u =
                !t.getServerCache().isCompleteForChild(e) && null == n.value
              if (!h.hasChild(e) && !u) {
                var l = t
                    .getServerCache()
                    .getNode()
                    .getImmediateChild(e),
                  p = s.applyMerge_(l, n)
                c = s.applyServerOverwrite_(c, new Be(e), p, r, i, o, a)
              }
            }),
            c
          )
        }),
        (t.prototype.ackUserWrite_ = function(t, e, n, r, i, o) {
          if (null != r.shadowingWrite(e)) return t
          var a = t.getServerCache().isFiltered(),
            s = t.getServerCache()
          if (null != n.value) {
            if (
              (e.isEmpty() && s.isFullyInitialized()) ||
              s.isCompleteForPath(e)
            )
              return this.applyServerOverwrite_(
                t,
                e,
                s.getNode().getChild(e),
                r,
                i,
                a,
                o
              )
            if (e.isEmpty()) {
              var u = ur.Empty
              return (
                s.getNode().forEachChild(gn, function(t, e) {
                  u = u.set(new Be(t), e)
                }),
                this.applyServerMerge_(t, e, u, r, i, a, o)
              )
            }
            return t
          }
          var c = ur.Empty
          return (
            n.foreach(function(t, n) {
              var r = e.child(t)
              s.isCompleteForPath(r) && (c = c.set(t, s.getNode().getChild(r)))
            }),
            this.applyServerMerge_(t, e, c, r, i, a, o)
          )
        }),
        (t.prototype.listenComplete_ = function(t, e, n, r) {
          var i = t.getServerCache(),
            o = t.updateServerSnap(
              i.getNode(),
              i.isFullyInitialized() || e.isEmpty(),
              i.isFiltered()
            )
          return this.generateEventCacheAfterServerEvent_(o, e, n, _r, r)
        }),
        (t.prototype.revertUserWrite_ = function(t, e, n, r, i) {
          var o
          if (null != n.shadowingWrite(e)) return t
          var a = new gr(n, t, r),
            s = t.getEventCache().getNode(),
            u = void 0
          if (e.isEmpty() || '.priority' === e.getFront()) {
            var c = void 0
            if (t.getServerCache().isFullyInitialized())
              c = n.calcCompleteEventCache(t.getCompleteServerSnap())
            else {
              var h = t.getServerCache().getNode()
              lt(
                h instanceof Wn,
                'serverChildren would be complete if leaf node'
              ),
                (c = n.calcCompleteEventChildren(h))
            }
            ;(c = c), (u = this.filter_.updateFullNode(s, c, i))
          } else {
            var l = e.getFront(),
              p = n.calcCompleteChild(l, t.getServerCache())
            null == p &&
              t.getServerCache().isCompleteForChild(l) &&
              (p = s.getImmediateChild(l)),
              (u =
                null != p
                  ? this.filter_.updateChild(s, l, p, e.popFront(), a, i)
                  : t
                      .getEventCache()
                      .getNode()
                      .hasChild(l)
                    ? this.filter_.updateChild(
                        s,
                        l,
                        Wn.EMPTY_NODE,
                        e.popFront(),
                        a,
                        i
                      )
                    : s).isEmpty() &&
                t.getServerCache().isFullyInitialized() &&
                (o = n.calcCompleteEventCache(
                  t.getCompleteServerSnap()
                )).isLeafNode() &&
                (u = this.filter_.updateFullNode(u, o, i))
          }
          return (
            (o =
              t.getServerCache().isFullyInitialized() ||
              null != n.shadowingWrite(Be.Empty)),
            t.updateEventSnap(u, o, this.filter_.filtersNodes())
          )
        }),
        t
      )
    })(),
    wr = (function() {
      function t(t) {
        ;(this.query_ = t),
          (this.index_ = this.query_.getQueryParams().getIndex())
      }
      return (
        (t.prototype.generateEventsForChanges = function(t, e, n) {
          var r = this,
            i = [],
            o = []
          return (
            t.forEach(function(t) {
              t.type === dr.CHILD_CHANGED &&
                r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                o.push(dr.childMovedChange(t.childName, t.snapshotNode))
            }),
            this.generateEventsForType_(i, dr.CHILD_REMOVED, t, n, e),
            this.generateEventsForType_(i, dr.CHILD_ADDED, t, n, e),
            this.generateEventsForType_(i, dr.CHILD_MOVED, o, n, e),
            this.generateEventsForType_(i, dr.CHILD_CHANGED, t, n, e),
            this.generateEventsForType_(i, dr.VALUE, t, n, e),
            i
          )
        }),
        (t.prototype.generateEventsForType_ = function(t, e, n, r, i) {
          var o = this,
            a = n.filter(function(t) {
              return t.type === e
            })
          a.sort(this.compareChanges_.bind(this)),
            a.forEach(function(e) {
              var n = o.materializeSingleChange_(e, i)
              r.forEach(function(r) {
                r.respondsTo(e.type) && t.push(r.createEvent(n, o.query_))
              })
            })
        }),
        (t.prototype.materializeSingleChange_ = function(t, e) {
          return 'value' === t.type || 'child_removed' === t.type
            ? t
            : ((t.prevName = e.getPredecessorChildName(
                t.childName,
                t.snapshotNode,
                this.index_
              )),
              t)
        }),
        (t.prototype.compareChanges_ = function(t, e) {
          if (null == t.childName || null == e.childName)
            throw pt('Should only compare child_ events.')
          var n = new vn(t.childName, t.snapshotNode),
            r = new vn(e.childName, e.snapshotNode)
          return this.index_.compare(n, r)
        }),
        t
      )
    })(),
    Er = (function() {
      function t(t, e) {
        ;(this.query_ = t), (this.eventRegistrations_ = [])
        var n = this.query_.getQueryParams(),
          r = new vr(n.getIndex()),
          i = n.getNodeFilter()
        this.processor_ = new br(i)
        var o = e.getServerCache(),
          a = e.getEventCache(),
          s = r.updateFullNode(Wn.EMPTY_NODE, o.getNode(), null),
          u = i.updateFullNode(Wn.EMPTY_NODE, a.getNode(), null),
          c = new pr(s, o.isFullyInitialized(), r.filtersNodes()),
          h = new pr(u, a.isFullyInitialized(), i.filtersNodes())
        ;(this.viewCache_ = new fr(h, c)),
          (this.eventGenerator_ = new wr(this.query_))
      }
      return (
        (t.prototype.getQuery = function() {
          return this.query_
        }),
        (t.prototype.getServerCache = function() {
          return this.viewCache_.getServerCache().getNode()
        }),
        (t.prototype.getCompleteServerCache = function(t) {
          var e = this.viewCache_.getCompleteServerSnap()
          return e &&
            (this.query_.getQueryParams().loadsAllData() ||
              (!t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()))
            ? e.getChild(t)
            : null
        }),
        (t.prototype.isEmpty = function() {
          return 0 === this.eventRegistrations_.length
        }),
        (t.prototype.addEventRegistration = function(t) {
          this.eventRegistrations_.push(t)
        }),
        (t.prototype.removeEventRegistration = function(t, e) {
          var n = []
          if (e) {
            lt(null == t, 'A cancel should cancel all event registrations.')
            var r = this.query_.path
            this.eventRegistrations_.forEach(function(t) {
              e = e
              var i = t.createCancelEvent(e, r)
              i && n.push(i)
            })
          }
          if (t) {
            for (var i = [], o = 0; o < this.eventRegistrations_.length; ++o) {
              var a = this.eventRegistrations_[o]
              if (a.matches(t)) {
                if (t.hasAnyCallback()) {
                  i = i.concat(this.eventRegistrations_.slice(o + 1))
                  break
                }
              } else i.push(a)
            }
            this.eventRegistrations_ = i
          } else this.eventRegistrations_ = []
          return n
        }),
        (t.prototype.applyOperation = function(t, e, n) {
          t.type === Hn.MERGE &&
            null !== t.source.queryId &&
            (lt(
              this.viewCache_.getCompleteServerSnap(),
              'We should always have a full cache before handling merges'
            ),
            lt(
              this.viewCache_.getCompleteEventSnap(),
              'Missing event cache, even though we have a server cache'
            ))
          var r = this.viewCache_,
            i = this.processor_.applyOperation(r, t, e, n)
          return (
            this.processor_.assertIndexed(i.viewCache),
            lt(
              i.viewCache.getServerCache().isFullyInitialized() ||
                !r.getServerCache().isFullyInitialized(),
              'Once a server snap is complete, it should never go back'
            ),
            (this.viewCache_ = i.viewCache),
            this.generateEventsForChanges_(
              i.changes,
              i.viewCache.getEventCache().getNode(),
              null
            )
          )
        }),
        (t.prototype.getInitialEvents = function(t) {
          var e = this.viewCache_.getEventCache(),
            n = []
          e.getNode().isLeafNode() ||
            e.getNode().forEachChild(Nn, function(t, e) {
              n.push(dr.childAddedChange(t, e))
            })
          return (
            e.isFullyInitialized() && n.push(dr.valueChange(e.getNode())),
            this.generateEventsForChanges_(n, e.getNode(), t)
          )
        }),
        (t.prototype.generateEventsForChanges_ = function(t, e, n) {
          var r = n ? [n] : this.eventRegistrations_
          return this.eventGenerator_.generateEventsForChanges(t, e, r)
        }),
        t
      )
    })(),
    Tr = (function() {
      function t() {
        this.views_ = {}
      }
      return (
        Object.defineProperty(t, '__referenceConstructor', {
          get: function() {
            return lt(ir, 'Reference.ts has not been loaded'), ir
          },
          set: function(t) {
            lt(!ir, '__referenceConstructor has already been defined'), (ir = t)
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.isEmpty = function() {
          return Dt(this.views_)
        }),
        (t.prototype.applyOperation = function(t, e, n) {
          var r = t.source.queryId
          if (null !== r) {
            var i = kt(this.views_, r)
            return (
              lt(null != i, 'SyncTree gave us an op for an invalid query.'),
              i.applyOperation(t, e, n)
            )
          }
          var o = []
          return (
            Ot(this.views_, function(r, i) {
              o = o.concat(i.applyOperation(t, e, n))
            }),
            o
          )
        }),
        (t.prototype.addEventRegistration = function(t, e, n, r, i) {
          var o = t.queryIdentifier(),
            a = kt(this.views_, o)
          if (!a) {
            var s = n.calcCompleteEventCache(i ? r : null),
              u = !1
            s
              ? (u = !0)
              : r instanceof Wn
                ? ((s = n.calcCompleteEventChildren(r)), (u = !1))
                : ((s = Wn.EMPTY_NODE), (u = !1))
            var c = new fr(new pr(s, u, !1), new pr(r, i, !1))
            ;(a = new Er(t, c)), (this.views_[o] = a)
          }
          return a.addEventRegistration(e), a.getInitialEvents(e)
        }),
        (t.prototype.removeEventRegistration = function(e, n, r) {
          var i = e.queryIdentifier(),
            o = [],
            a = [],
            s = this.hasCompleteView()
          if ('default' === i) {
            var u = this
            Ot(this.views_, function(t, e) {
              ;(a = a.concat(e.removeEventRegistration(n, r))),
                e.isEmpty() &&
                  (delete u.views_[t],
                  e
                    .getQuery()
                    .getQueryParams()
                    .loadsAllData() || o.push(e.getQuery()))
            })
          } else {
            var c = kt(this.views_, i)
            c &&
              ((a = a.concat(c.removeEventRegistration(n, r))),
              c.isEmpty() &&
                (delete this.views_[i],
                c
                  .getQuery()
                  .getQueryParams()
                  .loadsAllData() || o.push(c.getQuery())))
          }
          return (
            s &&
              !this.hasCompleteView() &&
              o.push(new t.__referenceConstructor(e.repo, e.path)),
            {removed: o, events: a}
          )
        }),
        (t.prototype.getQueryViews = function() {
          var t = this
          return Object.keys(this.views_)
            .map(function(e) {
              return t.views_[e]
            })
            .filter(function(t) {
              return !t
                .getQuery()
                .getQueryParams()
                .loadsAllData()
            })
        }),
        (t.prototype.getCompleteServerCache = function(t) {
          var e = null
          return (
            Ot(this.views_, function(n, r) {
              e = e || r.getCompleteServerCache(t)
            }),
            e
          )
        }),
        (t.prototype.viewForQuery = function(t) {
          if (t.getQueryParams().loadsAllData()) return this.getCompleteView()
          var e = t.queryIdentifier()
          return kt(this.views_, e)
        }),
        (t.prototype.viewExistsForQuery = function(t) {
          return null != this.viewForQuery(t)
        }),
        (t.prototype.hasCompleteView = function() {
          return null != this.getCompleteView()
        }),
        (t.prototype.getCompleteView = function() {
          var t, e, n
          return (
            ((t = this.views_),
            (n = Ft(
              t,
              function(t) {
                return t
                  .getQuery()
                  .getQueryParams()
                  .loadsAllData()
              },
              e
            )) && t[n]) || null
          )
        }),
        t
      )
    })(),
    Cr = (function() {
      function t(t) {
        this.writeTree_ = t
      }
      return (
        (t.prototype.addWrite = function(e, n) {
          if (e.isEmpty()) return new t(new ur(n))
          var r = this.writeTree_.findRootMostValueAndPath(e)
          if (null != r) {
            var i = r.path,
              o = r.value,
              a = Be.relativePath(i, e)
            return (o = o.updateChild(a, n)), new t(this.writeTree_.set(i, o))
          }
          var s = new ur(n)
          return new t(this.writeTree_.setTree(e, s))
        }),
        (t.prototype.addWrites = function(t, e) {
          var n = this
          return (
            Ot(e, function(e, r) {
              n = n.addWrite(t.child(e), r)
            }),
            n
          )
        }),
        (t.prototype.removeWrite = function(e) {
          return e.isEmpty()
            ? t.Empty
            : new t(this.writeTree_.setTree(e, ur.Empty))
        }),
        (t.prototype.hasCompleteWrite = function(t) {
          return null != this.getCompleteNode(t)
        }),
        (t.prototype.getCompleteNode = function(t) {
          var e = this.writeTree_.findRootMostValueAndPath(t)
          return null != e
            ? this.writeTree_.get(e.path).getChild(Be.relativePath(e.path, t))
            : null
        }),
        (t.prototype.getCompleteChildren = function() {
          var t = [],
            e = this.writeTree_.value
          return (
            null != e
              ? e.isLeafNode() ||
                e.forEachChild(Nn, function(e, n) {
                  t.push(new vn(e, n))
                })
              : this.writeTree_.children.inorderTraversal(function(e, n) {
                  null != n.value && t.push(new vn(e, n.value))
                }),
            t
          )
        }),
        (t.prototype.childCompoundWrite = function(e) {
          if (e.isEmpty()) return this
          var n = this.getCompleteNode(e)
          return new t(null != n ? new ur(n) : this.writeTree_.subtree(e))
        }),
        (t.prototype.isEmpty = function() {
          return this.writeTree_.isEmpty()
        }),
        (t.prototype.apply = function(e) {
          return t.applySubtreeWrite_(Be.Empty, this.writeTree_, e)
        }),
        (t.Empty = new t(new ur(null))),
        (t.applySubtreeWrite_ = function(e, n, r) {
          if (null != n.value) return r.updateChild(e, n.value)
          var i = null
          return (
            n.children.inorderTraversal(function(n, o) {
              '.priority' === n
                ? (lt(
                    null !== o.value,
                    'Priority writes must always be leaf nodes'
                  ),
                  (i = o.value))
                : (r = t.applySubtreeWrite_(e.child(n), o, r))
            }),
            r.getChild(e).isEmpty() ||
              null === i ||
              (r = r.updateChild(e.child('.priority'), i)),
            r
          )
        }),
        t
      )
    })(),
    Sr = (function() {
      function t() {
        ;(this.visibleWrites_ = Cr.Empty),
          (this.allWrites_ = []),
          (this.lastWriteId_ = -1)
      }
      return (
        (t.prototype.childWrites = function(t) {
          return new Ir(t, this)
        }),
        (t.prototype.addOverwrite = function(t, e, n, r) {
          lt(
            n > this.lastWriteId_,
            'Stacking an older write on top of newer ones'
          ),
            void 0 === r && (r = !0),
            this.allWrites_.push({path: t, snap: e, writeId: n, visible: r}),
            r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)),
            (this.lastWriteId_ = n)
        }),
        (t.prototype.addMerge = function(t, e, n) {
          lt(
            n > this.lastWriteId_,
            'Stacking an older merge on top of newer ones'
          ),
            this.allWrites_.push({
              path: t,
              children: e,
              writeId: n,
              visible: !0
            }),
            (this.visibleWrites_ = this.visibleWrites_.addWrites(t, e)),
            (this.lastWriteId_ = n)
        }),
        (t.prototype.getWrite = function(t) {
          for (var e = 0; e < this.allWrites_.length; e++) {
            var n = this.allWrites_[e]
            if (n.writeId === t) return n
          }
          return null
        }),
        (t.prototype.removeWrite = function(t) {
          var e = this,
            n = this.allWrites_.findIndex(function(e) {
              return e.writeId === t
            })
          lt(n >= 0, 'removeWrite called with nonexistent writeId.')
          var r = this.allWrites_[n]
          this.allWrites_.splice(n, 1)
          for (
            var i = r.visible, o = !1, a = this.allWrites_.length - 1;
            i && a >= 0;

          ) {
            var s = this.allWrites_[a]
            s.visible &&
              (a >= n && this.recordContainsPath_(s, r.path)
                ? (i = !1)
                : r.path.contains(s.path) && (o = !0)),
              a--
          }
          if (i) {
            if (o) return this.resetTree_(), !0
            if (r.snap)
              this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path)
            else {
              var u = r.children
              Ot(u, function(t) {
                e.visibleWrites_ = e.visibleWrites_.removeWrite(r.path.child(t))
              })
            }
            return !0
          }
          return !1
        }),
        (t.prototype.getCompleteWriteData = function(t) {
          return this.visibleWrites_.getCompleteNode(t)
        }),
        (t.prototype.calcCompleteEventCache = function(e, n, r, i) {
          if (r || i) {
            var o = this.visibleWrites_.childCompoundWrite(e)
            if (!i && o.isEmpty()) return n
            if (i || null != n || o.hasCompleteWrite(Be.Empty)) {
              var a = t.layerTree_(
                this.allWrites_,
                function(t) {
                  return (
                    (t.visible || i) &&
                    (!r || !~r.indexOf(t.writeId)) &&
                    (t.path.contains(e) || e.contains(t.path))
                  )
                },
                e
              )
              c = n || Wn.EMPTY_NODE
              return a.apply(c)
            }
            return null
          }
          var s = this.visibleWrites_.getCompleteNode(e)
          if (null != s) return s
          var u = this.visibleWrites_.childCompoundWrite(e)
          if (u.isEmpty()) return n
          if (null != n || u.hasCompleteWrite(Be.Empty)) {
            var c = n || Wn.EMPTY_NODE
            return u.apply(c)
          }
          return null
        }),
        (t.prototype.calcCompleteEventChildren = function(t, e) {
          var n = Wn.EMPTY_NODE,
            r = this.visibleWrites_.getCompleteNode(t)
          if (r)
            return (
              r.isLeafNode() ||
                r.forEachChild(Nn, function(t, e) {
                  n = n.updateImmediateChild(t, e)
                }),
              n
            )
          if (e) {
            var i = this.visibleWrites_.childCompoundWrite(t)
            return (
              e.forEachChild(Nn, function(t, e) {
                var r = i.childCompoundWrite(new Be(t)).apply(e)
                n = n.updateImmediateChild(t, r)
              }),
              i.getCompleteChildren().forEach(function(t) {
                n = n.updateImmediateChild(t.name, t.node)
              }),
              n
            )
          }
          return (
            this.visibleWrites_
              .childCompoundWrite(t)
              .getCompleteChildren()
              .forEach(function(t) {
                n = n.updateImmediateChild(t.name, t.node)
              }),
            n
          )
        }),
        (t.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n, r) {
          lt(
            n || r,
            'Either existingEventSnap or existingServerSnap must exist'
          )
          var i = t.child(e)
          if (this.visibleWrites_.hasCompleteWrite(i)) return null
          var o = this.visibleWrites_.childCompoundWrite(i)
          return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e))
        }),
        (t.prototype.calcCompleteChild = function(t, e, n) {
          var r = t.child(e),
            i = this.visibleWrites_.getCompleteNode(r)
          return null != i
            ? i
            : n.isCompleteForChild(e)
              ? this.visibleWrites_
                  .childCompoundWrite(r)
                  .apply(n.getNode().getImmediateChild(e))
              : null
        }),
        (t.prototype.shadowingWrite = function(t) {
          return this.visibleWrites_.getCompleteNode(t)
        }),
        (t.prototype.calcIndexedSlice = function(t, e, n, r, i, o) {
          var a,
            s = this.visibleWrites_.childCompoundWrite(t),
            u = s.getCompleteNode(Be.Empty)
          if (null != u) a = u
          else {
            if (null == e) return []
            a = s.apply(e)
          }
          if ((a = a.withIndex(o)).isEmpty() || a.isLeafNode()) return []
          for (
            var c = [],
              h = o.getCompare(),
              l = i ? a.getReverseIteratorFrom(n, o) : a.getIteratorFrom(n, o),
              p = l.getNext();
            p && c.length < r;

          )
            0 !== h(p, n) && c.push(p), (p = l.getNext())
          return c
        }),
        (t.prototype.recordContainsPath_ = function(t, e) {
          return t.snap
            ? t.path.contains(e)
            : !!Ft(t.children, function(n, r) {
                return t.path.child(r).contains(e)
              })
        }),
        (t.prototype.resetTree_ = function() {
          ;(this.visibleWrites_ = t.layerTree_(
            this.allWrites_,
            t.DefaultFilter_,
            Be.Empty
          )),
            this.allWrites_.length > 0
              ? (this.lastWriteId_ = this.allWrites_[
                  this.allWrites_.length - 1
                ].writeId)
              : (this.lastWriteId_ = -1)
        }),
        (t.DefaultFilter_ = function(t) {
          return t.visible
        }),
        (t.layerTree_ = function(t, e, n) {
          for (var r = Cr.Empty, i = 0; i < t.length; ++i) {
            var o = t[i]
            if (e(o)) {
              var a = o.path,
                s = void 0
              if (o.snap)
                n.contains(a)
                  ? ((s = Be.relativePath(n, a)), (r = r.addWrite(s, o.snap)))
                  : a.contains(n) &&
                    ((s = Be.relativePath(a, n)),
                    (r = r.addWrite(Be.Empty, o.snap.getChild(s))))
              else {
                if (!o.children)
                  throw pt('WriteRecord should have .snap or .children')
                if (n.contains(a))
                  (s = Be.relativePath(n, a)), (r = r.addWrites(s, o.children))
                else if (a.contains(n))
                  if ((s = Be.relativePath(a, n)).isEmpty())
                    r = r.addWrites(Be.Empty, o.children)
                  else {
                    var u = kt(o.children, s.getFront())
                    if (u) {
                      var c = u.getChild(s.popFront())
                      r = r.addWrite(Be.Empty, c)
                    }
                  }
              }
            }
          }
          return r
        }),
        t
      )
    })(),
    Ir = (function() {
      function t(t, e) {
        ;(this.treePath_ = t), (this.writeTree_ = e)
      }
      return (
        (t.prototype.calcCompleteEventCache = function(t, e, n) {
          return this.writeTree_.calcCompleteEventCache(this.treePath_, t, e, n)
        }),
        (t.prototype.calcCompleteEventChildren = function(t) {
          return this.writeTree_.calcCompleteEventChildren(this.treePath_, t)
        }),
        (t.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n) {
          return this.writeTree_.calcEventCacheAfterServerOverwrite(
            this.treePath_,
            t,
            e,
            n
          )
        }),
        (t.prototype.shadowingWrite = function(t) {
          return this.writeTree_.shadowingWrite(this.treePath_.child(t))
        }),
        (t.prototype.calcIndexedSlice = function(t, e, n, r, i) {
          return this.writeTree_.calcIndexedSlice(this.treePath_, t, e, n, r, i)
        }),
        (t.prototype.calcCompleteChild = function(t, e) {
          return this.writeTree_.calcCompleteChild(this.treePath_, t, e)
        }),
        (t.prototype.child = function(e) {
          return new t(this.treePath_.child(e), this.writeTree_)
        }),
        t
      )
    })(),
    Nr = (function() {
      function t(t) {
        ;(this.listenProvider_ = t),
          (this.syncPointTree_ = ur.Empty),
          (this.pendingWriteTree_ = new Sr()),
          (this.tagToQueryMap_ = {}),
          (this.queryToTagMap_ = {})
      }
      return (
        (t.prototype.applyUserOverwrite = function(t, e, n, r) {
          return (
            this.pendingWriteTree_.addOverwrite(t, e, n, r),
            r ? this.applyOperationToSyncPoints_(new hr(or.User, t, e)) : []
          )
        }),
        (t.prototype.applyUserMerge = function(t, e, n) {
          this.pendingWriteTree_.addMerge(t, e, n)
          var r = ur.fromObject(e)
          return this.applyOperationToSyncPoints_(new lr(or.User, t, r))
        }),
        (t.prototype.ackUserWrite = function(t, e) {
          void 0 === e && (e = !1)
          var n = this.pendingWriteTree_.getWrite(t)
          if (this.pendingWriteTree_.removeWrite(t)) {
            var r = ur.Empty
            return (
              null != n.snap
                ? (r = r.set(Be.Empty, !0))
                : Ot(n.children, function(t, e) {
                    r = r.set(new Be(t), e)
                  }),
              this.applyOperationToSyncPoints_(new ar(n.path, r, e))
            )
          }
          return []
        }),
        (t.prototype.applyServerOverwrite = function(t, e) {
          return this.applyOperationToSyncPoints_(new hr(or.Server, t, e))
        }),
        (t.prototype.applyServerMerge = function(t, e) {
          var n = ur.fromObject(e)
          return this.applyOperationToSyncPoints_(new lr(or.Server, t, n))
        }),
        (t.prototype.applyListenComplete = function(t) {
          return this.applyOperationToSyncPoints_(new cr(or.Server, t))
        }),
        (t.prototype.applyTaggedQueryOverwrite = function(e, n, r) {
          var i = this.queryKeyForTag_(r)
          if (null != i) {
            var o = t.parseQueryKey_(i),
              a = o.path,
              s = o.queryId,
              u = Be.relativePath(a, e),
              c = new hr(or.forServerTaggedQuery(s), u, n)
            return this.applyTaggedOperation_(a, c)
          }
          return []
        }),
        (t.prototype.applyTaggedQueryMerge = function(e, n, r) {
          var i = this.queryKeyForTag_(r)
          if (i) {
            var o = t.parseQueryKey_(i),
              a = o.path,
              s = o.queryId,
              u = Be.relativePath(a, e),
              c = ur.fromObject(n),
              h = new lr(or.forServerTaggedQuery(s), u, c)
            return this.applyTaggedOperation_(a, h)
          }
          return []
        }),
        (t.prototype.applyTaggedListenComplete = function(e, n) {
          var r = this.queryKeyForTag_(n)
          if (r) {
            var i = t.parseQueryKey_(r),
              o = i.path,
              a = i.queryId,
              s = Be.relativePath(o, e),
              u = new cr(or.forServerTaggedQuery(a), s)
            return this.applyTaggedOperation_(o, u)
          }
          return []
        }),
        (t.prototype.addEventRegistration = function(e, n) {
          var r = e.path,
            i = null,
            o = !1
          this.syncPointTree_.foreachOnPath(r, function(t, e) {
            var n = Be.relativePath(t, r)
            ;(i = i || e.getCompleteServerCache(n)),
              (o = o || e.hasCompleteView())
          })
          var a,
            s = this.syncPointTree_.get(r)
          ;(s
            ? ((o = o || s.hasCompleteView()),
              (i = i || s.getCompleteServerCache(Be.Empty)))
            : ((s = new Tr()),
              (this.syncPointTree_ = this.syncPointTree_.set(r, s))),
          null != i)
            ? (a = !0)
            : ((a = !1),
              (i = Wn.EMPTY_NODE),
              this.syncPointTree_.subtree(r).foreachChild(function(t, e) {
                var n = e.getCompleteServerCache(Be.Empty)
                n && (i = i.updateImmediateChild(t, n))
              }))
          var u = s.viewExistsForQuery(e)
          if (!u && !e.getQueryParams().loadsAllData()) {
            var c = t.makeQueryKey_(e)
            lt(
              !(c in this.queryToTagMap_),
              'View does not exist, but we have a tag'
            )
            var h = t.getNextQueryTag_()
            ;(this.queryToTagMap_[c] = h), (this.tagToQueryMap_['_' + h] = c)
          }
          var l = this.pendingWriteTree_.childWrites(r),
            p = s.addEventRegistration(e, n, l, i, a)
          if (!u && !o) {
            var f = s.viewForQuery(e)
            p = p.concat(this.setupListener_(e, f))
          }
          return p
        }),
        (t.prototype.removeEventRegistration = function(e, n, r) {
          var i = this,
            o = e.path,
            a = this.syncPointTree_.get(o),
            s = []
          if (
            a &&
            ('default' === e.queryIdentifier() || a.viewExistsForQuery(e))
          ) {
            var u = a.removeEventRegistration(e, n, r)
            a.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(o))
            var c = u.removed
            s = u.events
            var h =
                -1 !==
                c.findIndex(function(t) {
                  return t.getQueryParams().loadsAllData()
                }),
              l = this.syncPointTree_.findOnPath(o, function(t, e) {
                return e.hasCompleteView()
              })
            if (h && !l) {
              var p = this.syncPointTree_.subtree(o)
              if (!p.isEmpty())
                for (
                  var f = this.collectDistinctViewsForSubTree_(p), d = 0;
                  d < f.length;
                  ++d
                ) {
                  var v = f[d],
                    y = v.getQuery(),
                    _ = this.createListenerForView_(v)
                  this.listenProvider_.startListening(
                    t.queryForListening_(y),
                    this.tagForQuery_(y),
                    _.hashFn,
                    _.onComplete
                  )
                }
            }
            if (!l && c.length > 0 && !r)
              if (h) {
                this.listenProvider_.stopListening(
                  t.queryForListening_(e),
                  null
                )
              } else
                c.forEach(function(e) {
                  var n = i.queryToTagMap_[t.makeQueryKey_(e)]
                  i.listenProvider_.stopListening(t.queryForListening_(e), n)
                })
            this.removeTags_(c)
          }
          return s
        }),
        (t.prototype.calcCompleteEventCache = function(t, e) {
          var n = this.pendingWriteTree_,
            r = this.syncPointTree_.findOnPath(t, function(e, n) {
              var r = Be.relativePath(e, t),
                i = n.getCompleteServerCache(r)
              if (i) return i
            })
          return n.calcCompleteEventCache(t, r, e, !0)
        }),
        (t.prototype.collectDistinctViewsForSubTree_ = function(t) {
          return t.fold(function(t, e, n) {
            if (e && e.hasCompleteView()) return [e.getCompleteView()]
            var r = []
            return (
              e && (r = e.getQueryViews()),
              Ot(n, function(t, e) {
                r = r.concat(e)
              }),
              r
            )
          })
        }),
        (t.prototype.removeTags_ = function(e) {
          for (var n = 0; n < e.length; ++n) {
            var r = e[n]
            if (!r.getQueryParams().loadsAllData()) {
              var i = t.makeQueryKey_(r),
                o = this.queryToTagMap_[i]
              delete this.queryToTagMap_[i], delete this.tagToQueryMap_['_' + o]
            }
          }
        }),
        (t.queryForListening_ = function(t) {
          return t.getQueryParams().loadsAllData() &&
            !t.getQueryParams().isDefault()
            ? t.getRef()
            : t
        }),
        (t.prototype.setupListener_ = function(e, n) {
          var r = e.path,
            i = this.tagForQuery_(e),
            o = this.createListenerForView_(n),
            a = this.listenProvider_.startListening(
              t.queryForListening_(e),
              i,
              o.hashFn,
              o.onComplete
            ),
            s = this.syncPointTree_.subtree(r)
          if (i)
            lt(
              !s.value.hasCompleteView(),
              "If we're adding a query, it shouldn't be shadowed"
            )
          else
            for (
              var u = s.fold(function(t, e, n) {
                  if (!t.isEmpty() && e && e.hasCompleteView())
                    return [e.getCompleteView().getQuery()]
                  var r = []
                  return (
                    e &&
                      (r = r.concat(
                        e.getQueryViews().map(function(t) {
                          return t.getQuery()
                        })
                      )),
                    Ot(n, function(t, e) {
                      r = r.concat(e)
                    }),
                    r
                  )
                }),
                c = 0;
              c < u.length;
              ++c
            ) {
              var h = u[c]
              this.listenProvider_.stopListening(
                t.queryForListening_(h),
                this.tagForQuery_(h)
              )
            }
          return a
        }),
        (t.prototype.createListenerForView_ = function(t) {
          var e = this,
            n = t.getQuery(),
            r = this.tagForQuery_(n)
          return {
            hashFn: function() {
              return (t.getServerCache() || Wn.EMPTY_NODE).hash()
            },
            onComplete: function(t) {
              if ('ok' === t)
                return r
                  ? e.applyTaggedListenComplete(n.path, r)
                  : e.applyListenComplete(n.path)
              var i = (function(t, e) {
                var n = 'Unknown Error'
                'too_big' === t
                  ? (n =
                      'The data requested exceeds the maximum size that can be accessed with a single request.')
                  : 'permission_denied' == t
                    ? (n =
                        "Client doesn't have permission to access the desired data.")
                    : 'unavailable' == t && (n = 'The service is unavailable')
                var r = new Error(t + ' at ' + e.path.toString() + ': ' + n)
                return (r.code = t.toUpperCase()), r
              })(t, n)
              return e.removeEventRegistration(n, null, i)
            }
          }
        }),
        (t.makeQueryKey_ = function(t) {
          return t.path.toString() + '$' + t.queryIdentifier()
        }),
        (t.parseQueryKey_ = function(t) {
          var e = t.indexOf('$')
          return (
            lt(-1 !== e && e < t.length - 1, 'Bad queryKey.'),
            {queryId: t.substr(e + 1), path: new Be(t.substr(0, e))}
          )
        }),
        (t.prototype.queryKeyForTag_ = function(t) {
          return this.tagToQueryMap_['_' + t]
        }),
        (t.prototype.tagForQuery_ = function(e) {
          var n = t.makeQueryKey_(e)
          return kt(this.queryToTagMap_, n)
        }),
        (t.getNextQueryTag_ = function() {
          return t.nextQueryTag_++
        }),
        (t.prototype.applyTaggedOperation_ = function(t, e) {
          var n = this.syncPointTree_.get(t)
          lt(n, "Missing sync point for query tag that we're tracking")
          var r = this.pendingWriteTree_.childWrites(t)
          return n.applyOperation(e, r, null)
        }),
        (t.prototype.applyOperationToSyncPoints_ = function(t) {
          return this.applyOperationHelper_(
            t,
            this.syncPointTree_,
            null,
            this.pendingWriteTree_.childWrites(Be.Empty)
          )
        }),
        (t.prototype.applyOperationHelper_ = function(t, e, n, r) {
          if (t.path.isEmpty())
            return this.applyOperationDescendantsHelper_(t, e, n, r)
          var i = e.get(Be.Empty)
          null == n && null != i && (n = i.getCompleteServerCache(Be.Empty))
          var o = [],
            a = t.path.getFront(),
            s = t.operationForChild(a),
            u = e.children.get(a)
          if (u && s) {
            var c = n ? n.getImmediateChild(a) : null,
              h = r.child(a)
            o = o.concat(this.applyOperationHelper_(s, u, c, h))
          }
          return i && (o = o.concat(i.applyOperation(t, r, n))), o
        }),
        (t.prototype.applyOperationDescendantsHelper_ = function(t, e, n, r) {
          var i = this,
            o = e.get(Be.Empty)
          null == n && null != o && (n = o.getCompleteServerCache(Be.Empty))
          var a = []
          return (
            e.children.inorderTraversal(function(e, o) {
              var s = n ? n.getImmediateChild(e) : null,
                u = r.child(e),
                c = t.operationForChild(e)
              c &&
                (a = a.concat(i.applyOperationDescendantsHelper_(c, o, s, u)))
            }),
            o && (a = a.concat(o.applyOperation(t, r, n))),
            a
          )
        }),
        (t.nextQueryTag_ = 1),
        t
      )
    })(),
    Rr = (function() {
      function t() {
        this.rootNode_ = Wn.EMPTY_NODE
      }
      return (
        (t.prototype.getNode = function(t) {
          return this.rootNode_.getChild(t)
        }),
        (t.prototype.updateSnapshot = function(t, e) {
          this.rootNode_ = this.rootNode_.updateChild(t, e)
        }),
        t
      )
    })(),
    Ar = (function() {
      function t(t) {
        this.app_ = t
      }
      return (
        (t.prototype.getToken = function(t) {
          return this.app_.INTERNAL.getToken(t).then(null, function(t) {
            return t && 'auth/token-not-initialized' === t.code
              ? (be(
                  'Got auth/token-not-initialized error.  Treating as null token.'
                ),
                null)
              : Promise.reject(t)
          })
        }),
        (t.prototype.addTokenChangeListener = function(t) {
          this.app_.INTERNAL.addAuthTokenListener(t)
        }),
        (t.prototype.removeTokenChangeListener = function(t) {
          this.app_.INTERNAL.removeAuthTokenListener(t)
        }),
        (t.prototype.notifyForInvalidToken = function() {
          var t =
            'Provided authentication credentials for the app named "' +
            this.app_.name +
            '" are invalid. This usually indicates your app was not initialized correctly. '
          'credential' in this.app_.options
            ? (t +=
                'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
            : 'serviceAccount' in this.app_.options
              ? (t +=
                  'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
              : (t +=
                  'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
            Ce(t)
        }),
        t
      )
    })(),
    kr = (function() {
      function t() {
        this.counters_ = {}
      }
      return (
        (t.prototype.incrementCounter = function(t, e) {
          void 0 === e && (e = 1),
            At(this.counters_, t) || (this.counters_[t] = 0),
            (this.counters_[t] += e)
        }),
        (t.prototype.get = function() {
          return yt(this.counters_)
        }),
        t
      )
    })(),
    Or = (function() {
      function t() {}
      return (
        (t.getCollection = function(t) {
          var e = t.toString()
          return (
            this.collections_[e] || (this.collections_[e] = new kr()),
            this.collections_[e]
          )
        }),
        (t.getOrCreateReporter = function(t, e) {
          var n = t.toString()
          return (
            this.reporters_[n] || (this.reporters_[n] = e()), this.reporters_[n]
          )
        }),
        (t.collections_ = {}),
        (t.reporters_ = {}),
        t
      )
    })(),
    Pr = (function() {
      function t(t) {
        ;(this.collection_ = t), (this.last_ = null)
      }
      return (
        (t.prototype.get = function() {
          var t = this.collection_.get(),
            e = Pt(t)
          return (
            this.last_ &&
              Ot(this.last_, function(t, n) {
                e[t] = e[t] - n
              }),
            (this.last_ = t),
            e
          )
        }),
        t
      )
    })(),
    Dr = 1e4,
    Lr = 3e4,
    xr = (function() {
      function t(t, e) {
        ;(this.server_ = e),
          (this.statsToReport_ = {}),
          (this.statsListener_ = new Pr(t))
        var n = Dr + (Lr - Dr) * Math.random()
        We(this.reportStats_.bind(this), Math.floor(n))
      }
      return (
        (t.prototype.includeStat = function(t) {
          this.statsToReport_[t] = !0
        }),
        (t.prototype.reportStats_ = function() {
          var t = this,
            e = this.statsListener_.get(),
            n = {},
            r = !1
          Ot(e, function(e, i) {
            i > 0 && At(t.statsToReport_, e) && ((n[e] = i), (r = !0))
          }),
            r && this.server_.reportStats(n),
            We(
              this.reportStats_.bind(this),
              Math.floor(2 * Math.random() * 3e5)
            )
        }),
        t
      )
    })(),
    Fr = (function() {
      function t() {
        ;(this.eventLists_ = []), (this.recursionDepth_ = 0)
      }
      return (
        (t.prototype.queueEvents = function(t) {
          for (var e = null, n = 0; n < t.length; n++) {
            var r = t[n],
              i = r.getPath()
            null === e ||
              i.equals(e.getPath()) ||
              (this.eventLists_.push(e), (e = null)),
              null === e && (e = new Ur(i)),
              e.add(r)
          }
          e && this.eventLists_.push(e)
        }),
        (t.prototype.raiseEventsAtPath = function(t, e) {
          this.queueEvents(e),
            this.raiseQueuedEventsMatchingPredicate_(function(e) {
              return e.equals(t)
            })
        }),
        (t.prototype.raiseEventsForChangedPath = function(t, e) {
          this.queueEvents(e),
            this.raiseQueuedEventsMatchingPredicate_(function(e) {
              return e.contains(t) || t.contains(e)
            })
        }),
        (t.prototype.raiseQueuedEventsMatchingPredicate_ = function(t) {
          this.recursionDepth_++
          for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
            var r = this.eventLists_[n]
            if (r)
              t(r.getPath())
                ? (this.eventLists_[n].raise(), (this.eventLists_[n] = null))
                : (e = !1)
          }
          e && (this.eventLists_ = []), this.recursionDepth_--
        }),
        t
      )
    })(),
    Ur = (function() {
      function t(t) {
        ;(this.path_ = t), (this.events_ = [])
      }
      return (
        (t.prototype.add = function(t) {
          this.events_.push(t)
        }),
        (t.prototype.raise = function() {
          for (var t = 0; t < this.events_.length; t++) {
            var e = this.events_[t]
            if (null !== e) {
              this.events_[t] = null
              var n = e.getEventRunner()
              _e && be('event: ' + e.toString()), Ue(n)
            }
          }
        }),
        (t.prototype.getPath = function() {
          return this.path_
        }),
        t
      )
    })(),
    Mr = (function() {
      function t(t) {
        ;(this.allowedEvents_ = t),
          (this.listeners_ = {}),
          lt(Array.isArray(t) && t.length > 0, 'Requires a non-empty array')
      }
      return (
        (t.prototype.trigger = function(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]
          if (Array.isArray(this.listeners_[t]))
            for (var r = this.listeners_[t].slice(), i = 0; i < r.length; i++)
              r[i].callback.apply(r[i].context, e)
        }),
        (t.prototype.on = function(t, e, n) {
          this.validateEventType_(t),
            (this.listeners_[t] = this.listeners_[t] || []),
            this.listeners_[t].push({callback: e, context: n})
          var r = this.getInitialEvent(t)
          r && e.apply(n, r)
        }),
        (t.prototype.off = function(t, e, n) {
          this.validateEventType_(t)
          for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
            if (r[i].callback === e && (!n || n === r[i].context))
              return void r.splice(i, 1)
        }),
        (t.prototype.validateEventType_ = function(t) {
          lt(
            this.allowedEvents_.find(function(e) {
              return e === t
            }),
            'Unknown event: ' + t
          )
        }),
        t
      )
    })(),
    Wr = (function(t) {
      function e() {
        var e,
          n,
          r = t.call(this, ['visible']) || this
        return (
          'undefined' != typeof document &&
            void 0 !== document.addEventListener &&
            (void 0 !== document.hidden
              ? ((n = 'visibilitychange'), (e = 'hidden'))
              : void 0 !== document.mozHidden
                ? ((n = 'mozvisibilitychange'), (e = 'mozHidden'))
                : void 0 !== document.msHidden
                  ? ((n = 'msvisibilitychange'), (e = 'msHidden'))
                  : void 0 !== document.webkitHidden &&
                    ((n = 'webkitvisibilitychange'), (e = 'webkitHidden'))),
          (r.visible_ = !0),
          n &&
            document.addEventListener(
              n,
              function() {
                var t = !document[e]
                t !== r.visible_ && ((r.visible_ = t), r.trigger('visible', t))
              },
              !1
            ),
          r
        )
      }
      return (
        it(e, t),
        (e.getInstance = function() {
          return new e()
        }),
        (e.prototype.getInitialEvent = function(t) {
          return (
            lt('visible' === t, 'Unknown event type: ' + t), [this.visible_]
          )
        }),
        e
      )
    })(Mr),
    Br = (function(t) {
      function e() {
        var e = t.call(this, ['online']) || this
        return (
          (e.online_ = !0),
          'undefined' == typeof window ||
            void 0 === window.addEventListener ||
            bt() ||
            (window.addEventListener(
              'online',
              function() {
                e.online_ || ((e.online_ = !0), e.trigger('online', !0))
              },
              !1
            ),
            window.addEventListener(
              'offline',
              function() {
                e.online_ && ((e.online_ = !1), e.trigger('online', !1))
              },
              !1
            )),
          e
        )
      }
      return (
        it(e, t),
        (e.getInstance = function() {
          return new e()
        }),
        (e.prototype.getInitialEvent = function(t) {
          return lt('online' === t, 'Unknown event type: ' + t), [this.online_]
        }),
        (e.prototype.currentlyOnline = function() {
          return this.online_
        }),
        e
      )
    })(Mr),
    jr = (function() {
      function t(t) {
        ;(this.onMessage_ = t),
          (this.pendingResponses = []),
          (this.currentResponseNum = 0),
          (this.closeAfterResponse = -1),
          (this.onClose = null)
      }
      return (
        (t.prototype.closeAfter = function(t, e) {
          ;(this.closeAfterResponse = t),
            (this.onClose = e),
            this.closeAfterResponse < this.currentResponseNum &&
              (this.onClose(), (this.onClose = null))
        }),
        (t.prototype.handleResponse = function(t, e) {
          var n = this
          this.pendingResponses[t] = e
          for (
            var r = function() {
                var t = i.pendingResponses[i.currentResponseNum]
                delete i.pendingResponses[i.currentResponseNum]
                for (
                  var e = function(e) {
                      t[e] &&
                        Ue(function() {
                          n.onMessage_(t[e])
                        })
                    },
                    r = 0;
                  r < t.length;
                  ++r
                )
                  e(r)
                if (i.currentResponseNum === i.closeAfterResponse)
                  return i.onClose && (i.onClose(), (i.onClose = null)), 'break'
                i.currentResponseNum++
              },
              i = this;
            this.pendingResponses[this.currentResponseNum];

          ) {
            if ('break' === r()) break
          }
        }),
        t
      )
    })(),
    Vr = 'pLPCommand',
    qr = 'pRTLPCB',
    Hr = (function() {
      function t(t, e, n, r) {
        ;(this.connId = t),
          (this.repoInfo = e),
          (this.transportSessionId = n),
          (this.lastSessionId = r),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.everConnected_ = !1),
          (this.log_ = we(t)),
          (this.stats_ = Or.getCollection(e)),
          (this.urlFn = function(t) {
            return e.connectionURL(Ve, t)
          })
      }
      return (
        (t.prototype.open = function(t, e) {
          var n = this
          ;(this.curSegmentNum = 0),
            (this.onDisconnect_ = e),
            (this.myPacketOrderer = new jr(t)),
            (this.isClosed_ = !1),
            (this.connectTimeoutTimer_ = setTimeout(function() {
              n.log_('Timed out trying to connect.'),
                n.onClosed_(),
                (n.connectTimeoutTimer_ = null)
            }, Math.floor(3e4))),
            (function(t) {
              if (wt() || 'complete' === document.readyState) t()
              else {
                var e = !1,
                  n = function() {
                    document.body
                      ? e || ((e = !0), t())
                      : setTimeout(n, Math.floor(10))
                  }
                document.addEventListener
                  ? (document.addEventListener('DOMContentLoaded', n, !1),
                    window.addEventListener('load', n, !1))
                  : document.attachEvent &&
                    (document.attachEvent('onreadystatechange', function() {
                      'complete' === document.readyState && n()
                    }),
                    window.attachEvent('onload', n))
              }
            })(function() {
              if (!n.isClosed_) {
                n.scriptTagHolder = new Kr(
                  function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e]
                    var r = t[0],
                      i = t[1],
                      o = t[2]
                    if ((n.incrementIncomingBytes_(t), n.scriptTagHolder))
                      if (
                        (n.connectTimeoutTimer_ &&
                          (clearTimeout(n.connectTimeoutTimer_),
                          (n.connectTimeoutTimer_ = null)),
                        (n.everConnected_ = !0),
                        'start' == r)
                      )
                        (n.id = i), (n.password = o)
                      else {
                        if ('close' !== r)
                          throw new Error('Unrecognized command received: ' + r)
                        i
                          ? ((n.scriptTagHolder.sendNewPolls = !1),
                            n.myPacketOrderer.closeAfter(i, function() {
                              n.onClosed_()
                            }))
                          : n.onClosed_()
                      }
                  },
                  function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e]
                    var r = t[0],
                      i = t[1]
                    n.incrementIncomingBytes_(t),
                      n.myPacketOrderer.handleResponse(r, i)
                  },
                  function() {
                    n.onClosed_()
                  },
                  n.urlFn
                )
                var t = {start: 't'}
                ;(t.ser = Math.floor(1e8 * Math.random())),
                  n.scriptTagHolder.uniqueCallbackIdentifier &&
                    (t.cb = n.scriptTagHolder.uniqueCallbackIdentifier),
                  (t.v = '5'),
                  n.transportSessionId && (t.s = n.transportSessionId),
                  n.lastSessionId && (t.ls = n.lastSessionId),
                  !wt() &&
                    'undefined' != typeof location &&
                    location.href &&
                    -1 !== location.href.indexOf('firebaseio.com') &&
                    (t.r = 'f')
                var e = n.urlFn(t)
                n.log_('Connecting via long-poll to ' + e),
                  n.scriptTagHolder.addTag(e, function() {})
              }
            })
        }),
        (t.prototype.start = function() {
          this.scriptTagHolder.startLongPoll(this.id, this.password),
            this.addDisconnectPingFrame(this.id, this.password)
        }),
        (t.forceAllow = function() {
          t.forceAllow_ = !0
        }),
        (t.forceDisallow = function() {
          t.forceDisallow_ = !0
        }),
        (t.isAvailable = function() {
          return (
            t.forceAllow_ ||
            (!t.forceDisallow_ &&
              'undefined' != typeof document &&
              null != document.createElement &&
              !(
                'object' == typeof window &&
                window.chrome &&
                window.chrome.extension &&
                !/^chrome/.test(window.location.href)
              ) &&
              !('object' == typeof Windows && 'object' == typeof Windows.UI) &&
              !wt())
          )
        }),
        (t.prototype.markConnectionHealthy = function() {}),
        (t.prototype.shutdown_ = function() {
          ;(this.isClosed_ = !0),
            this.scriptTagHolder &&
              (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
            this.myDisconnFrame &&
              (document.body.removeChild(this.myDisconnFrame),
              (this.myDisconnFrame = null)),
            this.connectTimeoutTimer_ &&
              (clearTimeout(this.connectTimeoutTimer_),
              (this.connectTimeoutTimer_ = null))
        }),
        (t.prototype.onClosed_ = function() {
          this.isClosed_ ||
            (this.log_('Longpoll is closing itself'),
            this.shutdown_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(this.everConnected_),
              (this.onDisconnect_ = null)))
        }),
        (t.prototype.close = function() {
          this.isClosed_ ||
            (this.log_('Longpoll is being closed.'), this.shutdown_())
        }),
        (t.prototype.send = function(t) {
          var e = Nt(t)
          ;(this.bytesSent += e.length),
            this.stats_.incrementCounter('bytes_sent', e.length)
          for (
            var n,
              r = ((n = ft(e)), dt.encodeByteArray(n, !0)),
              i = Pe(r, 1840),
              o = 0;
            o < i.length;
            o++
          )
            this.scriptTagHolder.enqueueSegment(
              this.curSegmentNum,
              i.length,
              i[o]
            ),
              this.curSegmentNum++
        }),
        (t.prototype.addDisconnectPingFrame = function(t, e) {
          if (!wt()) {
            this.myDisconnFrame = document.createElement('iframe')
            var n = {dframe: 't'}
            ;(n.id = t),
              (n.pw = e),
              (this.myDisconnFrame.src = this.urlFn(n)),
              (this.myDisconnFrame.style.display = 'none'),
              document.body.appendChild(this.myDisconnFrame)
          }
        }),
        (t.prototype.incrementIncomingBytes_ = function(t) {
          var e = Nt(t).length
          ;(this.bytesReceived += e),
            this.stats_.incrementCounter('bytes_received', e)
        }),
        t
      )
    })(),
    Kr = (function() {
      function t(e, n, r, i) {
        if (
          ((this.onDisconnect = r),
          (this.urlFn = i),
          (this.outstandingRequests = new Zn()),
          (this.pendingSegs = []),
          (this.currentSerial = Math.floor(1e8 * Math.random())),
          (this.sendNewPolls = !0),
          wt())
        )
          (this.commandCB = e), (this.onMessageCB = n)
        else {
          ;(this.uniqueCallbackIdentifier = de()),
            (window[Vr + this.uniqueCallbackIdentifier] = e),
            (window[qr + this.uniqueCallbackIdentifier] = n),
            (this.myIFrame = t.createIFrame_())
          var o = ''
          if (
            this.myIFrame.src &&
            'javascript:' === this.myIFrame.src.substr(0, 'javascript:'.length)
          )
            o = '<script>document.domain="' + document.domain + '";</script>'
          var a = '<html><body>' + o + '</body></html>'
          try {
            this.myIFrame.doc.open(),
              this.myIFrame.doc.write(a),
              this.myIFrame.doc.close()
          } catch (t) {
            be('frame writing exception'), t.stack && be(t.stack), be(t)
          }
        }
      }
      return (
        (t.createIFrame_ = function() {
          var t = document.createElement('iframe')
          if (((t.style.display = 'none'), !document.body))
            throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.'
          document.body.appendChild(t)
          try {
            t.contentWindow.document || be('No IE domain setting required')
          } catch (n) {
            var e = document.domain
            t.src =
              "javascript:void((function(){document.open();document.domain='" +
              e +
              "';document.close();})())"
          }
          return (
            t.contentDocument
              ? (t.doc = t.contentDocument)
              : t.contentWindow
                ? (t.doc = t.contentWindow.document)
                : t.document && (t.doc = t.document),
            t
          )
        }),
        (t.prototype.close = function() {
          var e = this
          if (
            ((this.alive = !1),
            this.myIFrame &&
              ((this.myIFrame.doc.body.innerHTML = ''),
              setTimeout(function() {
                null !== e.myIFrame &&
                  (document.body.removeChild(e.myIFrame), (e.myIFrame = null))
              }, Math.floor(0))),
            wt() && this.myID)
          ) {
            var n = {disconn: 't'}
            ;(n.id = this.myID), (n.pw = this.myPW)
            var r = this.urlFn(n)
            t.nodeRestRequest(r)
          }
          var i = this.onDisconnect
          i && ((this.onDisconnect = null), i())
        }),
        (t.prototype.startLongPoll = function(t, e) {
          for (
            this.myID = t, this.myPW = e, this.alive = !0;
            this.newRequest_();

          );
        }),
        (t.prototype.newRequest_ = function() {
          if (
            this.alive &&
            this.sendNewPolls &&
            this.outstandingRequests.count() <
              (this.pendingSegs.length > 0 ? 2 : 1)
          ) {
            this.currentSerial++
            var t = {}
            ;(t.id = this.myID),
              (t.pw = this.myPW),
              (t.ser = this.currentSerial)
            for (
              var e = this.urlFn(t), n = '', r = 0;
              this.pendingSegs.length > 0;

            ) {
              if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break
              var i = this.pendingSegs.shift()
              ;(n =
                n +
                '&seg' +
                r +
                '=' +
                i.seg +
                '&ts' +
                r +
                '=' +
                i.ts +
                '&d' +
                r +
                '=' +
                i.d),
                r++
            }
            return (e += n), this.addLongPollTag_(e, this.currentSerial), !0
          }
          return !1
        }),
        (t.prototype.enqueueSegment = function(t, e, n) {
          this.pendingSegs.push({seg: t, ts: e, d: n}),
            this.alive && this.newRequest_()
        }),
        (t.prototype.addLongPollTag_ = function(t, e) {
          var n = this
          this.outstandingRequests.add(e, 1)
          var r = function() {
              n.outstandingRequests.remove(e), n.newRequest_()
            },
            i = setTimeout(r, Math.floor(25e3))
          this.addTag(t, function() {
            clearTimeout(i), r()
          })
        }),
        (t.prototype.addTag = function(t, e) {
          var n = this
          wt()
            ? this.doNodeLongPoll(t, e)
            : setTimeout(function() {
                try {
                  if (!n.sendNewPolls) return
                  var r = n.myIFrame.doc.createElement('script')
                  ;(r.type = 'text/javascript'),
                    (r.async = !0),
                    (r.src = t),
                    (r.onload = r.onreadystatechange = function() {
                      var t = r.readyState
                      ;(t && 'loaded' !== t && 'complete' !== t) ||
                        ((r.onload = r.onreadystatechange = null),
                        r.parentNode && r.parentNode.removeChild(r),
                        e())
                    }),
                    (r.onerror = function() {
                      be('Long-poll script failed to load: ' + t),
                        (n.sendNewPolls = !1),
                        n.close()
                    }),
                    n.myIFrame.doc.body.appendChild(r)
                } catch (t) {}
              }, Math.floor(1))
        }),
        t
      )
    })(),
    Gr = null
  'undefined' != typeof MozWebSocket
    ? (Gr = MozWebSocket)
    : 'undefined' != typeof WebSocket && (Gr = WebSocket)
  var Qr = (function() {
      function t(e, n, r, i) {
        ;(this.connId = e),
          (this.keepaliveTimer = null),
          (this.frames = null),
          (this.totalFrames = 0),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.log_ = we(this.connId)),
          (this.stats_ = Or.getCollection(n)),
          (this.connURL = t.connectionURL_(n, r, i))
      }
      return (
        (t.connectionURL_ = function(t, e, n) {
          var r = {v: '5'}
          return (
            !wt() &&
              'undefined' != typeof location &&
              location.href &&
              -1 !== location.href.indexOf('firebaseio.com') &&
              (r.r = 'f'),
            e && (r.s = e),
            n && (r.ls = n),
            t.connectionURL('websocket', r)
          )
        }),
        (t.prototype.open = function(t, e) {
          var n = this
          ;(this.onDisconnect = e),
            (this.onMessage = t),
            this.log_('Websocket connecting to ' + this.connURL),
            (this.everConnected_ = !1),
            le.set('previous_websocket_failure', !0)
          try {
            if (wt()) {
              var r = ct ? 'AdminNode' : 'Node',
                i = {
                  headers: {
                    'User-Agent':
                      'Firebase/5/' +
                      te.SDK_VERSION +
                      '/' +
                      process.platform +
                      '/' +
                      r
                  }
                },
                o = process.env,
                a =
                  0 == this.connURL.indexOf('wss://')
                    ? o.HTTPS_PROXY || o.https_proxy
                    : o.HTTP_PROXY || o.http_proxy
              a && (i.proxy = {origin: a}),
                (this.mySock = new Gr(this.connURL, [], i))
            } else this.mySock = new Gr(this.connURL)
          } catch (t) {
            this.log_('Error instantiating WebSocket.')
            var s = t.message || t.data
            return s && this.log_(s), void this.onClosed_()
          }
          ;(this.mySock.onopen = function() {
            n.log_('Websocket connected.'), (n.everConnected_ = !0)
          }),
            (this.mySock.onclose = function() {
              n.log_('Websocket connection was disconnected.'),
                (n.mySock = null),
                n.onClosed_()
            }),
            (this.mySock.onmessage = function(t) {
              n.handleIncomingFrame(t)
            }),
            (this.mySock.onerror = function(t) {
              n.log_('WebSocket error.  Closing connection.')
              var e = t.message || t.data
              e && n.log_(e), n.onClosed_()
            })
        }),
        (t.prototype.start = function() {}),
        (t.forceDisallow = function() {
          t.forceDisallow_ = !0
        }),
        (t.isAvailable = function() {
          var e = !1
          if ('undefined' != typeof navigator && navigator.userAgent) {
            var n = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)
            n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
          }
          return !e && null !== Gr && !t.forceDisallow_
        }),
        (t.previouslyFailed = function() {
          return (
            le.isInMemoryStorage || !0 === le.get('previous_websocket_failure')
          )
        }),
        (t.prototype.markConnectionHealthy = function() {
          le.remove('previous_websocket_failure')
        }),
        (t.prototype.appendFrame_ = function(t) {
          if ((this.frames.push(t), this.frames.length == this.totalFrames)) {
            var e = this.frames.join('')
            this.frames = null
            var n = It(e)
            this.onMessage(n)
          }
        }),
        (t.prototype.handleNewFrameCount_ = function(t) {
          ;(this.totalFrames = t), (this.frames = [])
        }),
        (t.prototype.extractFrameCount_ = function(t) {
          if (
            (lt(null === this.frames, 'We already have a frame buffer'),
            t.length <= 6)
          ) {
            var e = Number(t)
            if (!isNaN(e)) return this.handleNewFrameCount_(e), null
          }
          return this.handleNewFrameCount_(1), t
        }),
        (t.prototype.handleIncomingFrame = function(t) {
          if (null !== this.mySock) {
            var e = t.data
            if (
              ((this.bytesReceived += e.length),
              this.stats_.incrementCounter('bytes_received', e.length),
              this.resetKeepAlive(),
              null !== this.frames)
            )
              this.appendFrame_(e)
            else {
              var n = this.extractFrameCount_(e)
              null !== n && this.appendFrame_(n)
            }
          }
        }),
        (t.prototype.send = function(t) {
          this.resetKeepAlive()
          var e = Nt(t)
          ;(this.bytesSent += e.length),
            this.stats_.incrementCounter('bytes_sent', e.length)
          var n = Pe(e, 16384)
          n.length > 1 && this.sendString_(String(n.length))
          for (var r = 0; r < n.length; r++) this.sendString_(n[r])
        }),
        (t.prototype.shutdown_ = function() {
          ;(this.isClosed_ = !0),
            this.keepaliveTimer &&
              (clearInterval(this.keepaliveTimer),
              (this.keepaliveTimer = null)),
            this.mySock && (this.mySock.close(), (this.mySock = null))
        }),
        (t.prototype.onClosed_ = function() {
          this.isClosed_ ||
            (this.log_('WebSocket is closing itself'),
            this.shutdown_(),
            this.onDisconnect &&
              (this.onDisconnect(this.everConnected_),
              (this.onDisconnect = null)))
        }),
        (t.prototype.close = function() {
          this.isClosed_ ||
            (this.log_('WebSocket is being closed'), this.shutdown_())
        }),
        (t.prototype.resetKeepAlive = function() {
          var t = this
          clearInterval(this.keepaliveTimer),
            (this.keepaliveTimer = setInterval(function() {
              t.mySock && t.sendString_('0'), t.resetKeepAlive()
            }, Math.floor(45e3)))
        }),
        (t.prototype.sendString_ = function(t) {
          try {
            this.mySock.send(t)
          } catch (t) {
            this.log_(
              'Exception thrown from WebSocket.send():',
              t.message || t.data,
              'Closing connection.'
            ),
              setTimeout(this.onClosed_.bind(this), 0)
          }
        }),
        (t.responsesRequiredToBeHealthy = 2),
        (t.healthyTimeout = 3e4),
        t
      )
    })(),
    zr = (function() {
      function t(t) {
        this.initTransports_(t)
      }
      return (
        Object.defineProperty(t, 'ALL_TRANSPORTS', {
          get: function() {
            return [Hr, Qr]
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.initTransports_ = function(e) {
          var n = Qr && Qr.isAvailable(),
            r = n && !Qr.previouslyFailed()
          if (
            (e.webSocketOnly &&
              (n ||
                Ce(
                  "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                ),
              (r = !0)),
            r)
          )
            this.transports_ = [Qr]
          else {
            var i = (this.transports_ = [])
            De(t.ALL_TRANSPORTS, function(t, e) {
              e && e.isAvailable() && i.push(e)
            })
          }
        }),
        (t.prototype.initialTransport = function() {
          if (this.transports_.length > 0) return this.transports_[0]
          throw new Error('No transports available')
        }),
        (t.prototype.upgradeTransport = function() {
          return this.transports_.length > 1 ? this.transports_[1] : null
        }),
        t
      )
    })(),
    Yr = (function() {
      function t(t, e, n, r, i, o, a) {
        ;(this.id = t),
          (this.repoInfo_ = e),
          (this.onMessage_ = n),
          (this.onReady_ = r),
          (this.onDisconnect_ = i),
          (this.onKill_ = o),
          (this.lastSessionId = a),
          (this.connectionCount = 0),
          (this.pendingDataMessages = []),
          (this.state_ = 0),
          (this.log_ = we('c:' + this.id + ':')),
          (this.transportManager_ = new zr(e)),
          this.log_('Connection created'),
          this.start_()
      }
      return (
        (t.prototype.start_ = function() {
          var t = this,
            e = this.transportManager_.initialTransport()
          ;(this.conn_ = new e(
            this.nextTransportId_(),
            this.repoInfo_,
            void 0,
            this.lastSessionId
          )),
            (this.primaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0)
          var n = this.connReceiver_(this.conn_),
            r = this.disconnReceiver_(this.conn_)
          ;(this.tx_ = this.conn_),
            (this.rx_ = this.conn_),
            (this.secondaryConn_ = null),
            (this.isHealthy_ = !1),
            setTimeout(function() {
              t.conn_ && t.conn_.open(n, r)
            }, Math.floor(0))
          var i = e.healthyTimeout || 0
          i > 0 &&
            (this.healthyTimeout_ = We(function() {
              ;(t.healthyTimeout_ = null),
                t.isHealthy_ ||
                  (t.conn_ && t.conn_.bytesReceived > 102400
                    ? (t.log_(
                        'Connection exceeded healthy timeout but has received ' +
                          t.conn_.bytesReceived +
                          ' bytes.  Marking connection healthy.'
                      ),
                      (t.isHealthy_ = !0),
                      t.conn_.markConnectionHealthy())
                    : t.conn_ && t.conn_.bytesSent > 10240
                      ? t.log_(
                          'Connection exceeded healthy timeout but has sent ' +
                            t.conn_.bytesSent +
                            ' bytes.  Leaving connection alive.'
                        )
                      : (t.log_('Closing unhealthy connection after timeout.'),
                        t.close()))
            }, Math.floor(i)))
        }),
        (t.prototype.nextTransportId_ = function() {
          return 'c:' + this.id + ':' + this.connectionCount++
        }),
        (t.prototype.disconnReceiver_ = function(t) {
          var e = this
          return function(n) {
            t === e.conn_
              ? e.onConnectionLost_(n)
              : t === e.secondaryConn_
                ? (e.log_('Secondary connection lost.'),
                  e.onSecondaryConnectionLost_())
                : e.log_('closing an old connection')
          }
        }),
        (t.prototype.connReceiver_ = function(t) {
          var e = this
          return function(n) {
            2 != e.state_ &&
              (t === e.rx_
                ? e.onPrimaryMessageReceived_(n)
                : t === e.secondaryConn_
                  ? e.onSecondaryMessageReceived_(n)
                  : e.log_('message on old connection'))
          }
        }),
        (t.prototype.sendRequest = function(t) {
          var e = {t: 'd', d: t}
          this.sendData_(e)
        }),
        (t.prototype.tryCleanupConnection = function() {
          this.tx_ === this.secondaryConn_ &&
            this.rx_ === this.secondaryConn_ &&
            (this.log_(
              'cleaning up and promoting a connection: ' +
                this.secondaryConn_.connId
            ),
            (this.conn_ = this.secondaryConn_),
            (this.secondaryConn_ = null))
        }),
        (t.prototype.onSecondaryControl_ = function(t) {
          if ('t' in t) {
            var e = t.t
            'a' === e
              ? this.upgradeIfSecondaryHealthy_()
              : 'r' === e
                ? (this.log_('Got a reset on secondary, closing it'),
                  this.secondaryConn_.close(),
                  (this.tx_ !== this.secondaryConn_ &&
                    this.rx_ !== this.secondaryConn_) ||
                    this.close())
                : 'o' === e &&
                  (this.log_('got pong on secondary.'),
                  this.secondaryResponsesRequired_--,
                  this.upgradeIfSecondaryHealthy_())
          }
        }),
        (t.prototype.onSecondaryMessageReceived_ = function(t) {
          var e = ke('t', t),
            n = ke('d', t)
          if ('c' == e) this.onSecondaryControl_(n)
          else {
            if ('d' != e) throw new Error('Unknown protocol layer: ' + e)
            this.pendingDataMessages.push(n)
          }
        }),
        (t.prototype.upgradeIfSecondaryHealthy_ = function() {
          this.secondaryResponsesRequired_ <= 0
            ? (this.log_('Secondary connection is healthy.'),
              (this.isHealthy_ = !0),
              this.secondaryConn_.markConnectionHealthy(),
              this.proceedWithUpgrade_())
            : (this.log_('sending ping on secondary.'),
              this.secondaryConn_.send({t: 'c', d: {t: 'p', d: {}}}))
        }),
        (t.prototype.proceedWithUpgrade_ = function() {
          this.secondaryConn_.start(),
            this.log_('sending client ack on secondary'),
            this.secondaryConn_.send({t: 'c', d: {t: 'a', d: {}}}),
            this.log_('Ending transmission on primary'),
            this.conn_.send({t: 'c', d: {t: 'n', d: {}}}),
            (this.tx_ = this.secondaryConn_),
            this.tryCleanupConnection()
        }),
        (t.prototype.onPrimaryMessageReceived_ = function(t) {
          var e = ke('t', t),
            n = ke('d', t)
          'c' == e ? this.onControl_(n) : 'd' == e && this.onDataMessage_(n)
        }),
        (t.prototype.onDataMessage_ = function(t) {
          this.onPrimaryResponse_(), this.onMessage_(t)
        }),
        (t.prototype.onPrimaryResponse_ = function() {
          this.isHealthy_ ||
            (this.primaryResponsesRequired_--,
            this.primaryResponsesRequired_ <= 0 &&
              (this.log_('Primary connection is healthy.'),
              (this.isHealthy_ = !0),
              this.conn_.markConnectionHealthy()))
        }),
        (t.prototype.onControl_ = function(t) {
          var e = ke('t', t)
          if ('d' in t) {
            var n = t.d
            if ('h' === e) this.onHandshake_(n)
            else if ('n' === e) {
              this.log_('recvd end transmission on primary'),
                (this.rx_ = this.secondaryConn_)
              for (var r = 0; r < this.pendingDataMessages.length; ++r)
                this.onDataMessage_(this.pendingDataMessages[r])
              ;(this.pendingDataMessages = []), this.tryCleanupConnection()
            } else
              's' === e
                ? this.onConnectionShutdown_(n)
                : 'r' === e
                  ? this.onReset_(n)
                  : 'e' === e
                    ? Ee('Server Error: ' + n)
                    : 'o' === e
                      ? (this.log_('got pong on primary.'),
                        this.onPrimaryResponse_(),
                        this.sendPingOnPrimaryIfNecessary_())
                      : Ee('Unknown control packet command: ' + e)
          }
        }),
        (t.prototype.onHandshake_ = function(t) {
          var e = t.ts,
            n = t.v,
            r = t.h
          ;(this.sessionId = t.s),
            this.repoInfo_.updateHost(r),
            0 == this.state_ &&
              (this.conn_.start(),
              this.onConnectionEstablished_(this.conn_, e),
              '5' !== n && Ce('Protocol version mismatch detected'),
              this.tryStartUpgrade_())
        }),
        (t.prototype.tryStartUpgrade_ = function() {
          var t = this.transportManager_.upgradeTransport()
          t && this.startUpgrade_(t)
        }),
        (t.prototype.startUpgrade_ = function(t) {
          var e = this
          ;(this.secondaryConn_ = new t(
            this.nextTransportId_(),
            this.repoInfo_,
            this.sessionId
          )),
            (this.secondaryResponsesRequired_ =
              t.responsesRequiredToBeHealthy || 0)
          var n = this.connReceiver_(this.secondaryConn_),
            r = this.disconnReceiver_(this.secondaryConn_)
          this.secondaryConn_.open(n, r),
            We(function() {
              e.secondaryConn_ &&
                (e.log_('Timed out trying to upgrade.'),
                e.secondaryConn_.close())
            }, Math.floor(6e4))
        }),
        (t.prototype.onReset_ = function(t) {
          this.log_('Reset packet received.  New host: ' + t),
            this.repoInfo_.updateHost(t),
            1 === this.state_
              ? this.close()
              : (this.closeConnections_(), this.start_())
        }),
        (t.prototype.onConnectionEstablished_ = function(t, e) {
          var n = this
          this.log_('Realtime connection established.'),
            (this.conn_ = t),
            (this.state_ = 1),
            this.onReady_ &&
              (this.onReady_(e, this.sessionId), (this.onReady_ = null)),
            0 === this.primaryResponsesRequired_
              ? (this.log_('Primary connection is healthy.'),
                (this.isHealthy_ = !0))
              : We(function() {
                  n.sendPingOnPrimaryIfNecessary_()
                }, Math.floor(5e3))
        }),
        (t.prototype.sendPingOnPrimaryIfNecessary_ = function() {
          this.isHealthy_ ||
            1 !== this.state_ ||
            (this.log_('sending ping on primary.'),
            this.sendData_({t: 'c', d: {t: 'p', d: {}}}))
        }),
        (t.prototype.onSecondaryConnectionLost_ = function() {
          var t = this.secondaryConn_
          ;(this.secondaryConn_ = null),
            (this.tx_ !== t && this.rx_ !== t) || this.close()
        }),
        (t.prototype.onConnectionLost_ = function(t) {
          ;(this.conn_ = null),
            t || 0 !== this.state_
              ? 1 === this.state_ && this.log_('Realtime connection lost.')
              : (this.log_('Realtime connection failed.'),
                this.repoInfo_.isCacheableHost() &&
                  (le.remove('host:' + this.repoInfo_.host),
                  (this.repoInfo_.internalHost = this.repoInfo_.host))),
            this.close()
        }),
        (t.prototype.onConnectionShutdown_ = function(t) {
          this.log_('Connection shutdown command received. Shutting down...'),
            this.onKill_ && (this.onKill_(t), (this.onKill_ = null)),
            (this.onDisconnect_ = null),
            this.close()
        }),
        (t.prototype.sendData_ = function(t) {
          if (1 !== this.state_) throw 'Connection is not connected'
          this.tx_.send(t)
        }),
        (t.prototype.close = function() {
          2 !== this.state_ &&
            (this.log_('Closing realtime connection.'),
            (this.state_ = 2),
            this.closeConnections_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(), (this.onDisconnect_ = null)))
        }),
        (t.prototype.closeConnections_ = function() {
          this.log_('Shutting down all connections'),
            this.conn_ && (this.conn_.close(), (this.conn_ = null)),
            this.secondaryConn_ &&
              (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
            this.healthyTimeout_ &&
              (clearTimeout(this.healthyTimeout_),
              (this.healthyTimeout_ = null))
        }),
        t
      )
    })(),
    Xr = (function() {
      function t() {}
      return (
        (t.prototype.put = function(t, e, n, r) {}),
        (t.prototype.merge = function(t, e, n, r) {}),
        (t.prototype.refreshAuthToken = function(t) {}),
        (t.prototype.onDisconnectPut = function(t, e, n) {}),
        (t.prototype.onDisconnectMerge = function(t, e, n) {}),
        (t.prototype.onDisconnectCancel = function(t, e) {}),
        (t.prototype.reportStats = function(t) {}),
        t
      )
    })(),
    $r = 1e3,
    Jr = 3e5,
    Zr = (function(t) {
      function e(n, r, i, o, a, s) {
        var u = t.call(this) || this
        if (
          ((u.repoInfo_ = n),
          (u.onDataUpdate_ = r),
          (u.onConnectStatus_ = i),
          (u.onServerInfoUpdate_ = o),
          (u.authTokenProvider_ = a),
          (u.authOverride_ = s),
          (u.id = e.nextPersistentConnectionId_++),
          (u.log_ = we('p:' + u.id + ':')),
          (u.interruptReasons_ = {}),
          (u.listens_ = {}),
          (u.outstandingPuts_ = []),
          (u.outstandingPutCount_ = 0),
          (u.onDisconnectRequestQueue_ = []),
          (u.connected_ = !1),
          (u.reconnectDelay_ = $r),
          (u.maxReconnectDelay_ = Jr),
          (u.securityDebugCallback_ = null),
          (u.lastSessionId = null),
          (u.establishConnectionTimer_ = null),
          (u.visible_ = !1),
          (u.requestCBHash_ = {}),
          (u.requestNumber_ = 0),
          (u.realtime_ = null),
          (u.authToken_ = null),
          (u.forceTokenRefresh_ = !1),
          (u.invalidAuthTokenCount_ = 0),
          (u.firstConnection_ = !0),
          (u.lastConnectionAttemptTime_ = null),
          (u.lastConnectionEstablishedTime_ = null),
          s && !wt())
        )
          throw new Error(
            'Auth override specified in options, but not supported on non Node.js platforms'
          )
        return (
          u.scheduleConnect_(0),
          Wr.getInstance().on('visible', u.onVisible_, u),
          -1 === n.host.indexOf('fblocal') &&
            Br.getInstance().on('online', u.onOnline_, u),
          u
        )
      }
      return (
        it(e, t),
        (e.prototype.sendRequest = function(t, e, n) {
          var r = ++this.requestNumber_,
            i = {r: r, a: t, b: e}
          this.log_(Nt(i)),
            lt(
              this.connected_,
              "sendRequest call when we're not connected not allowed."
            ),
            this.realtime_.sendRequest(i),
            n && (this.requestCBHash_[r] = n)
        }),
        (e.prototype.listen = function(t, e, n, r) {
          var i = t.queryIdentifier(),
            o = t.path.toString()
          this.log_('Listen called for ' + o + ' ' + i),
            (this.listens_[o] = this.listens_[o] || {}),
            lt(
              t.getQueryParams().isDefault() ||
                !t.getQueryParams().loadsAllData(),
              'listen() called for non-default but complete query'
            ),
            lt(
              !this.listens_[o][i],
              'listen() called twice for same path/queryId.'
            )
          var a = {onComplete: r, hashFn: e, query: t, tag: n}
          ;(this.listens_[o][i] = a), this.connected_ && this.sendListen_(a)
        }),
        (e.prototype.sendListen_ = function(t) {
          var n = this,
            r = t.query,
            i = r.path.toString(),
            o = r.queryIdentifier()
          this.log_('Listen on ' + i + ' for ' + o)
          var a = {p: i}
          t.tag && ((a.q = r.queryObject()), (a.t = t.tag)),
            (a.h = t.hashFn()),
            this.sendRequest('q', a, function(a) {
              var s = a.d,
                u = a.s
              e.warnOnListenWarnings_(s, r),
                (n.listens_[i] && n.listens_[i][o]) === t &&
                  (n.log_('listen response', a),
                  'ok' !== u && n.removeListen_(i, o),
                  t.onComplete && t.onComplete(u, s))
            })
        }),
        (e.warnOnListenWarnings_ = function(t, e) {
          if (t && 'object' == typeof t && At(t, 'w')) {
            var n = kt(t, 'w')
            if (Array.isArray(n) && ~n.indexOf('no_index')) {
              var r =
                  '".indexOn": "' +
                  e
                    .getQueryParams()
                    .getIndex()
                    .toString() +
                  '"',
                i = e.path.toString()
              Ce(
                'Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' +
                  r +
                  ' at ' +
                  i +
                  ' to your security rules for better performance.'
              )
            }
          }
        }),
        (e.prototype.refreshAuthToken = function(t) {
          ;(this.authToken_ = t),
            this.log_('Auth token refreshed'),
            this.authToken_
              ? this.tryAuth()
              : this.connected_ &&
                this.sendRequest('unauth', {}, function() {}),
            this.reduceReconnectDelayIfAdminCredential_(t)
        }),
        (e.prototype.reduceReconnectDelayIfAdminCredential_ = function(t) {
          var e
          ;((t && 40 === t.length) ||
            ('object' == typeof (e = Rt(t).claims) && !0 === e.admin)) &&
            (this.log_(
              'Admin auth credential detected.  Reducing max reconnect time.'
            ),
            (this.maxReconnectDelay_ = 3e4))
        }),
        (e.prototype.tryAuth = function() {
          var t,
            e,
            n = this
          if (this.connected_ && this.authToken_) {
            var r = this.authToken_,
              i = ((t = Rt(r)),
              (e = t.claims),
              t.signature &&
              e &&
              'object' == typeof e &&
              e.hasOwnProperty('iat')
                ? 'auth'
                : 'gauth'),
              o = {cred: r}
            null === this.authOverride_
              ? (o.noauth = !0)
              : 'object' == typeof this.authOverride_ &&
                (o.authvar = this.authOverride_),
              this.sendRequest(i, o, function(t) {
                var e = t.s,
                  i = t.d || 'error'
                n.authToken_ === r &&
                  ('ok' === e
                    ? (n.invalidAuthTokenCount_ = 0)
                    : n.onAuthRevoked_(e, i))
              })
          }
        }),
        (e.prototype.unlisten = function(t, e) {
          var n = t.path.toString(),
            r = t.queryIdentifier()
          this.log_('Unlisten called for ' + n + ' ' + r),
            lt(
              t.getQueryParams().isDefault() ||
                !t.getQueryParams().loadsAllData(),
              'unlisten() called for non-default but complete query'
            ),
            this.removeListen_(n, r) &&
              this.connected_ &&
              this.sendUnlisten_(n, r, t.queryObject(), e)
        }),
        (e.prototype.sendUnlisten_ = function(t, e, n, r) {
          this.log_('Unlisten on ' + t + ' for ' + e)
          var i = {p: t}
          r && ((i.q = n), (i.t = r)), this.sendRequest('n', i)
        }),
        (e.prototype.onDisconnectPut = function(t, e, n) {
          this.connected_
            ? this.sendOnDisconnect_('o', t, e, n)
            : this.onDisconnectRequestQueue_.push({
                pathString: t,
                action: 'o',
                data: e,
                onComplete: n
              })
        }),
        (e.prototype.onDisconnectMerge = function(t, e, n) {
          this.connected_
            ? this.sendOnDisconnect_('om', t, e, n)
            : this.onDisconnectRequestQueue_.push({
                pathString: t,
                action: 'om',
                data: e,
                onComplete: n
              })
        }),
        (e.prototype.onDisconnectCancel = function(t, e) {
          this.connected_
            ? this.sendOnDisconnect_('oc', t, null, e)
            : this.onDisconnectRequestQueue_.push({
                pathString: t,
                action: 'oc',
                data: null,
                onComplete: e
              })
        }),
        (e.prototype.sendOnDisconnect_ = function(t, e, n, r) {
          var i = {p: e, d: n}
          this.log_('onDisconnect ' + t, i),
            this.sendRequest(t, i, function(t) {
              r &&
                setTimeout(function() {
                  r(t.s, t.d)
                }, Math.floor(0))
            })
        }),
        (e.prototype.put = function(t, e, n, r) {
          this.putInternal('p', t, e, n, r)
        }),
        (e.prototype.merge = function(t, e, n, r) {
          this.putInternal('m', t, e, n, r)
        }),
        (e.prototype.putInternal = function(t, e, n, r, i) {
          var o = {p: e, d: n}
          void 0 !== i && (o.h = i),
            this.outstandingPuts_.push({action: t, request: o, onComplete: r}),
            this.outstandingPutCount_++
          var a = this.outstandingPuts_.length - 1
          this.connected_ ? this.sendPut_(a) : this.log_('Buffering put: ' + e)
        }),
        (e.prototype.sendPut_ = function(t) {
          var e = this,
            n = this.outstandingPuts_[t].action,
            r = this.outstandingPuts_[t].request,
            i = this.outstandingPuts_[t].onComplete
          ;(this.outstandingPuts_[t].queued = this.connected_),
            this.sendRequest(n, r, function(r) {
              e.log_(n + ' response', r),
                delete e.outstandingPuts_[t],
                e.outstandingPutCount_--,
                0 === e.outstandingPutCount_ && (e.outstandingPuts_ = []),
                i && i(r.s, r.d)
            })
        }),
        (e.prototype.reportStats = function(t) {
          var e = this
          if (this.connected_) {
            var n = {c: t}
            this.log_('reportStats', n),
              this.sendRequest('s', n, function(t) {
                if ('ok' !== t.s) {
                  var n = t.d
                  e.log_('reportStats', 'Error sending stats: ' + n)
                }
              })
          }
        }),
        (e.prototype.onDataMessage_ = function(t) {
          if ('r' in t) {
            this.log_('from server: ' + Nt(t))
            var e = t.r,
              n = this.requestCBHash_[e]
            n && (delete this.requestCBHash_[e], n(t.b))
          } else {
            if ('error' in t)
              throw 'A server-side error has occurred: ' + t.error
            'a' in t && this.onDataPush_(t.a, t.b)
          }
        }),
        (e.prototype.onDataPush_ = function(t, e) {
          this.log_('handleServerMessage', t, e),
            'd' === t
              ? this.onDataUpdate_(e.p, e.d, !1, e.t)
              : 'm' === t
                ? this.onDataUpdate_(e.p, e.d, !0, e.t)
                : 'c' === t
                  ? this.onListenRevoked_(e.p, e.q)
                  : 'ac' === t
                    ? this.onAuthRevoked_(e.s, e.d)
                    : 'sd' === t
                      ? this.onSecurityDebugPacket_(e)
                      : Ee(
                          'Unrecognized action received from server: ' +
                            Nt(t) +
                            '\nAre you using the latest client?'
                        )
        }),
        (e.prototype.onReady_ = function(t, e) {
          this.log_('connection ready'),
            (this.connected_ = !0),
            (this.lastConnectionEstablishedTime_ = new Date().getTime()),
            this.handleTimestamp_(t),
            (this.lastSessionId = e),
            this.firstConnection_ && this.sendConnectStats_(),
            this.restoreState_(),
            (this.firstConnection_ = !1),
            this.onConnectStatus_(!0)
        }),
        (e.prototype.scheduleConnect_ = function(t) {
          var e = this
          lt(
            !this.realtime_,
            "Scheduling a connect when we're already connected/ing?"
          ),
            this.establishConnectionTimer_ &&
              clearTimeout(this.establishConnectionTimer_),
            (this.establishConnectionTimer_ = setTimeout(function() {
              ;(e.establishConnectionTimer_ = null), e.establishConnection_()
            }, Math.floor(t)))
        }),
        (e.prototype.onVisible_ = function(t) {
          t &&
            !this.visible_ &&
            this.reconnectDelay_ === this.maxReconnectDelay_ &&
            (this.log_('Window became visible.  Reducing delay.'),
            (this.reconnectDelay_ = $r),
            this.realtime_ || this.scheduleConnect_(0)),
            (this.visible_ = t)
        }),
        (e.prototype.onOnline_ = function(t) {
          t
            ? (this.log_('Browser went online.'),
              (this.reconnectDelay_ = $r),
              this.realtime_ || this.scheduleConnect_(0))
            : (this.log_('Browser went offline.  Killing connection.'),
              this.realtime_ && this.realtime_.close())
        }),
        (e.prototype.onRealtimeDisconnect_ = function() {
          if (
            (this.log_('data client disconnected'),
            (this.connected_ = !1),
            (this.realtime_ = null),
            this.cancelSentTransactions_(),
            (this.requestCBHash_ = {}),
            this.shouldReconnect_())
          ) {
            if (this.visible_) {
              if (this.lastConnectionEstablishedTime_) {
                new Date().getTime() - this.lastConnectionEstablishedTime_ >
                  3e4 && (this.reconnectDelay_ = $r),
                  (this.lastConnectionEstablishedTime_ = null)
              }
            } else
              this.log_("Window isn't visible.  Delaying reconnect."),
                (this.reconnectDelay_ = this.maxReconnectDelay_),
                (this.lastConnectionAttemptTime_ = new Date().getTime())
            var t = new Date().getTime() - this.lastConnectionAttemptTime_,
              e = Math.max(0, this.reconnectDelay_ - t)
            ;(e = Math.random() * e),
              this.log_('Trying to reconnect in ' + e + 'ms'),
              this.scheduleConnect_(e),
              (this.reconnectDelay_ = Math.min(
                this.maxReconnectDelay_,
                1.3 * this.reconnectDelay_
              ))
          }
          this.onConnectStatus_(!1)
        }),
        (e.prototype.establishConnection_ = function() {
          if (this.shouldReconnect_()) {
            this.log_('Making a connection attempt'),
              (this.lastConnectionAttemptTime_ = new Date().getTime()),
              (this.lastConnectionEstablishedTime_ = null)
            var t = this.onDataMessage_.bind(this),
              n = this.onReady_.bind(this),
              r = this.onRealtimeDisconnect_.bind(this),
              i = this.id + ':' + e.nextConnectionId_++,
              o = this,
              a = this.lastSessionId,
              s = !1,
              u = null,
              c = function() {
                u ? u.close() : ((s = !0), r())
              }
            this.realtime_ = {
              close: c,
              sendRequest: function(t) {
                lt(u, "sendRequest call when we're not connected not allowed."),
                  u.sendRequest(t)
              }
            }
            var h = this.forceTokenRefresh_
            ;(this.forceTokenRefresh_ = !1),
              this.authTokenProvider_
                .getToken(h)
                .then(function(e) {
                  s
                    ? be('getToken() completed but was canceled')
                    : (be('getToken() completed. Creating connection.'),
                      (o.authToken_ = e && e.accessToken),
                      (u = new Yr(
                        i,
                        o.repoInfo_,
                        t,
                        n,
                        r,
                        function(t) {
                          Ce(t + ' (' + o.repoInfo_.toString() + ')'),
                            o.interrupt('server_kill')
                        },
                        a
                      )))
                })
                .then(null, function(t) {
                  o.log_('Failed to get token: ' + t), s || (ct && Ce(t), c())
                })
          }
        }),
        (e.prototype.interrupt = function(t) {
          be('Interrupting connection for reason: ' + t),
            (this.interruptReasons_[t] = !0),
            this.realtime_
              ? this.realtime_.close()
              : (this.establishConnectionTimer_ &&
                  (clearTimeout(this.establishConnectionTimer_),
                  (this.establishConnectionTimer_ = null)),
                this.connected_ && this.onRealtimeDisconnect_())
        }),
        (e.prototype.resume = function(t) {
          be('Resuming connection for reason: ' + t),
            delete this.interruptReasons_[t],
            Dt(this.interruptReasons_) &&
              ((this.reconnectDelay_ = $r),
              this.realtime_ || this.scheduleConnect_(0))
        }),
        (e.prototype.handleTimestamp_ = function(t) {
          var e = t - new Date().getTime()
          this.onServerInfoUpdate_({serverTimeOffset: e})
        }),
        (e.prototype.cancelSentTransactions_ = function() {
          for (var t = 0; t < this.outstandingPuts_.length; t++) {
            var e = this.outstandingPuts_[t]
            e &&
              'h' in e.request &&
              e.queued &&
              (e.onComplete && e.onComplete('disconnect'),
              delete this.outstandingPuts_[t],
              this.outstandingPutCount_--)
          }
          0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
        }),
        (e.prototype.onListenRevoked_ = function(t, e) {
          var n
          n = e
            ? e
                .map(function(t) {
                  return Oe(t)
                })
                .join('$')
            : 'default'
          var r = this.removeListen_(t, n)
          r && r.onComplete && r.onComplete('permission_denied')
        }),
        (e.prototype.removeListen_ = function(t, e) {
          var n,
            r = new Be(t).toString()
          return (
            void 0 !== this.listens_[r]
              ? ((n = this.listens_[r][e]),
                delete this.listens_[r][e],
                0 === Lt(this.listens_[r]) && delete this.listens_[r])
              : (n = void 0),
            n
          )
        }),
        (e.prototype.onAuthRevoked_ = function(t, e) {
          be('Auth token revoked: ' + t + '/' + e),
            (this.authToken_ = null),
            (this.forceTokenRefresh_ = !0),
            this.realtime_.close(),
            ('invalid_token' !== t && 'permission_denied' !== t) ||
              (this.invalidAuthTokenCount_++,
              this.invalidAuthTokenCount_ >= 3 &&
                ((this.reconnectDelay_ = 3e4),
                this.authTokenProvider_.notifyForInvalidToken()))
        }),
        (e.prototype.onSecurityDebugPacket_ = function(t) {
          this.securityDebugCallback_
            ? this.securityDebugCallback_(t)
            : 'msg' in t &&
              console.log('FIREBASE: ' + t.msg.replace('\n', '\nFIREBASE: '))
        }),
        (e.prototype.restoreState_ = function() {
          var t = this
          this.tryAuth(),
            Ot(this.listens_, function(e, n) {
              Ot(n, function(e, n) {
                t.sendListen_(n)
              })
            })
          for (var e = 0; e < this.outstandingPuts_.length; e++)
            this.outstandingPuts_[e] && this.sendPut_(e)
          for (; this.onDisconnectRequestQueue_.length; ) {
            var n = this.onDisconnectRequestQueue_.shift()
            this.sendOnDisconnect_(n.action, n.pathString, n.data, n.onComplete)
          }
        }),
        (e.prototype.sendConnectStats_ = function() {
          var t = {},
            e = 'js'
          ct ? (e = 'admin_node') : ut && (e = 'node'),
            (t['sdk.' + e + '.' + te.SDK_VERSION.replace(/\./g, '-')] = 1),
            bt()
              ? (t['framework.cordova'] = 1)
              : 'object' == typeof navigator &&
                'ReactNative' === navigator.product &&
                (t['framework.reactnative'] = 1),
            this.reportStats(t)
        }),
        (e.prototype.shouldReconnect_ = function() {
          var t = Br.getInstance().currentlyOnline()
          return Dt(this.interruptReasons_) && t
        }),
        (e.nextPersistentConnectionId_ = 0),
        (e.nextConnectionId_ = 0),
        e
      )
    })(Xr),
    ti = (function(t) {
      function e(e, n, r) {
        var i = t.call(this) || this
        return (
          (i.repoInfo_ = e),
          (i.onDataUpdate_ = n),
          (i.authTokenProvider_ = r),
          (i.log_ = we('p:rest:')),
          (i.listens_ = {}),
          i
        )
      }
      return (
        it(e, t),
        (e.prototype.reportStats = function(t) {
          throw new Error('Method not implemented.')
        }),
        (e.getListenId_ = function(t, e) {
          return void 0 !== e
            ? 'tag$' + e
            : (lt(
                t.getQueryParams().isDefault(),
                "should have a tag if it's not a default query."
              ),
              t.path.toString())
        }),
        (e.prototype.listen = function(t, n, r, i) {
          var o = this,
            a = t.path.toString()
          this.log_('Listen called for ' + a + ' ' + t.queryIdentifier())
          var s = e.getListenId_(t, r),
            u = {}
          this.listens_[s] = u
          var c = t.getQueryParams().toRestQueryStringParameters()
          this.restRequest_(a + '.json', c, function(t, e) {
            var n = e
            ;(404 === t && ((n = null), (t = null)),
            null === t && o.onDataUpdate_(a, n, !1, r),
            kt(o.listens_, s) === u) &&
              i(
                t ? (401 == t ? 'permission_denied' : 'rest_error:' + t) : 'ok',
                null
              )
          })
        }),
        (e.prototype.unlisten = function(t, n) {
          var r = e.getListenId_(t, n)
          delete this.listens_[r]
        }),
        (e.prototype.refreshAuthToken = function(t) {}),
        (e.prototype.restRequest_ = function(t, e, n) {
          var r = this
          void 0 === e && (e = {}),
            (e.format = 'export'),
            this.authTokenProvider_.getToken(!1).then(function(i) {
              var o = i && i.accessToken
              o && (e.auth = o)
              var a,
                s =
                  (r.repoInfo_.secure ? 'https://' : 'http://') +
                  r.repoInfo_.host +
                  t +
                  '?' +
                  ((a = []),
                  Ot(e, function(t, e) {
                    Array.isArray(e)
                      ? e.forEach(function(e) {
                          a.push(
                            encodeURIComponent(t) + '=' + encodeURIComponent(e)
                          )
                        })
                      : a.push(
                          encodeURIComponent(t) + '=' + encodeURIComponent(e)
                        )
                  }),
                  a.length ? '&' + a.join('&') : '')
              r.log_('Sending REST request for ' + s)
              var u = new XMLHttpRequest()
              ;(u.onreadystatechange = function() {
                if (n && 4 === u.readyState) {
                  r.log_(
                    'REST Response for ' + s + ' received. status:',
                    u.status,
                    'response:',
                    u.responseText
                  )
                  var t = null
                  if (u.status >= 200 && u.status < 300) {
                    try {
                      t = It(u.responseText)
                    } catch (t) {
                      Ce(
                        'Failed to parse JSON response for ' +
                          s +
                          ': ' +
                          u.responseText
                      )
                    }
                    n(null, t)
                  } else
                    401 !== u.status &&
                      404 !== u.status &&
                      Ce(
                        'Got unsuccessful REST response for ' +
                          s +
                          ' Status: ' +
                          u.status
                      ),
                      n(u.status)
                  n = null
                }
              }),
                u.open('GET', s, !0),
                u.send()
            })
        }),
        e
      )
    })(Xr),
    ei = (function() {
      function t(t, e, n) {
        var r = this
        ;(this.repoInfo_ = t),
          (this.app = n),
          (this.dataUpdateCount = 0),
          (this.statsListener_ = null),
          (this.eventQueue_ = new Fr()),
          (this.nextWriteId_ = 1),
          (this.interceptServerDataCallback_ = null),
          (this.onDisconnect_ = new tr()),
          (this.persistentConnection_ = null)
        var i = new Ar(n)
        if (((this.stats_ = Or.getCollection(t)), e || Me()))
          (this.server_ = new ti(
            this.repoInfo_,
            this.onDataUpdate_.bind(this),
            i
          )),
            setTimeout(this.onConnectStatus_.bind(this, !0), 0)
        else {
          var o = n.options.databaseAuthVariableOverride
          if (void 0 !== o && null !== o) {
            if ('object' != typeof o)
              throw new Error(
                'Only objects are supported for option databaseAuthVariableOverride'
              )
            try {
              Nt(o)
            } catch (t) {
              throw new Error('Invalid authOverride provided: ' + t)
            }
          }
          ;(this.persistentConnection_ = new Zr(
            this.repoInfo_,
            this.onDataUpdate_.bind(this),
            this.onConnectStatus_.bind(this),
            this.onServerInfoUpdate_.bind(this),
            i,
            o
          )),
            (this.server_ = this.persistentConnection_)
        }
        i.addTokenChangeListener(function(t) {
          r.server_.refreshAuthToken(t)
        }),
          (this.statsReporter_ = Or.getOrCreateReporter(t, function() {
            return new xr(r.stats_, r.server_)
          })),
          this.transactions_init_(),
          (this.infoData_ = new Rr()),
          (this.infoSyncTree_ = new Nr({
            startListening: function(t, e, n, i) {
              var o = [],
                a = r.infoData_.getNode(t.path)
              return (
                a.isEmpty() ||
                  ((o = r.infoSyncTree_.applyServerOverwrite(t.path, a)),
                  setTimeout(function() {
                    i('ok')
                  }, 0)),
                o
              )
            },
            stopListening: function() {}
          })),
          this.updateInfo_('connected', !1),
          (this.serverSyncTree_ = new Nr({
            startListening: function(t, e, n, i) {
              return (
                r.server_.listen(t, n, e, function(e, n) {
                  var o = i(e, n)
                  r.eventQueue_.raiseEventsForChangedPath(t.path, o)
                }),
                []
              )
            },
            stopListening: function(t, e) {
              r.server_.unlisten(t, e)
            }
          }))
      }
      return (
        (t.prototype.toString = function() {
          return (
            (this.repoInfo_.secure ? 'https://' : 'http://') +
            this.repoInfo_.host
          )
        }),
        (t.prototype.name = function() {
          return this.repoInfo_.namespace
        }),
        (t.prototype.serverTime = function() {
          var t =
            this.infoData_.getNode(new Be('.info/serverTimeOffset')).val() || 0
          return new Date().getTime() + t
        }),
        (t.prototype.generateServerValues = function() {
          return (
            ((t = (t = {timestamp: this.serverTime()}) || {}).timestamp =
              t.timestamp || new Date().getTime()),
            t
          )
          var t
        }),
        (t.prototype.onDataUpdate_ = function(t, e, n, r) {
          this.dataUpdateCount++
          var i = new Be(t)
          e = this.interceptServerDataCallback_
            ? this.interceptServerDataCallback_(t, e)
            : e
          var o = []
          if (r)
            if (n) {
              var a = xt(e, function(t) {
                return Vn(t)
              })
              o = this.serverSyncTree_.applyTaggedQueryMerge(i, a, r)
            } else {
              var s = Vn(e)
              o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, s, r)
            }
          else if (n) {
            var u = xt(e, function(t) {
              return Vn(t)
            })
            o = this.serverSyncTree_.applyServerMerge(i, u)
          } else {
            var c = Vn(e)
            o = this.serverSyncTree_.applyServerOverwrite(i, c)
          }
          var h = i
          o.length > 0 && (h = this.rerunTransactions_(i)),
            this.eventQueue_.raiseEventsForChangedPath(h, o)
        }),
        (t.prototype.interceptServerData_ = function(t) {
          this.interceptServerDataCallback_ = t
        }),
        (t.prototype.onConnectStatus_ = function(t) {
          this.updateInfo_('connected', t),
            !1 === t && this.runOnDisconnectEvents_()
        }),
        (t.prototype.onServerInfoUpdate_ = function(t) {
          var e = this
          De(t, function(t, n) {
            e.updateInfo_(n, t)
          })
        }),
        (t.prototype.updateInfo_ = function(t, e) {
          var n = new Be('/.info/' + t),
            r = Vn(e)
          this.infoData_.updateSnapshot(n, r)
          var i = this.infoSyncTree_.applyServerOverwrite(n, r)
          this.eventQueue_.raiseEventsForChangedPath(n, i)
        }),
        (t.prototype.getNextWriteId_ = function() {
          return this.nextWriteId_++
        }),
        (t.prototype.setWithPriority = function(t, e, n, r) {
          var i = this
          this.log_('set', {path: t.toString(), value: e, priority: n})
          var o = this.generateServerValues(),
            a = Vn(e, n),
            s = nr(a, o),
            u = this.getNextWriteId_(),
            c = this.serverSyncTree_.applyUserOverwrite(t, s, u, !0)
          this.eventQueue_.queueEvents(c),
            this.server_.put(t.toString(), a.val(!0), function(e, n) {
              var o = 'ok' === e
              o || Ce('set at ' + t + ' failed: ' + e)
              var a = i.serverSyncTree_.ackUserWrite(u, !o)
              i.eventQueue_.raiseEventsForChangedPath(t, a),
                i.callOnCompleteCallback(r, e, n)
            })
          var h = this.abortTransactions_(t)
          this.rerunTransactions_(h),
            this.eventQueue_.raiseEventsForChangedPath(h, [])
        }),
        (t.prototype.update = function(t, e, n) {
          var r = this
          this.log_('update', {path: t.toString(), value: e})
          var i = !0,
            o = this.generateServerValues(),
            a = {}
          if (
            (Ot(e, function(t, e) {
              i = !1
              var n = Vn(e)
              a[t] = nr(n, o)
            }),
            i)
          )
            be("update() called with empty data.  Don't do anything."),
              this.callOnCompleteCallback(n, 'ok')
          else {
            var s = this.getNextWriteId_(),
              u = this.serverSyncTree_.applyUserMerge(t, a, s)
            this.eventQueue_.queueEvents(u),
              this.server_.merge(t.toString(), e, function(e, i) {
                var o = 'ok' === e
                o || Ce('update at ' + t + ' failed: ' + e)
                var a = r.serverSyncTree_.ackUserWrite(s, !o),
                  u = a.length > 0 ? r.rerunTransactions_(t) : t
                r.eventQueue_.raiseEventsForChangedPath(u, a),
                  r.callOnCompleteCallback(n, e, i)
              }),
              Ot(e, function(e) {
                var n = r.abortTransactions_(t.child(e))
                r.rerunTransactions_(n)
              }),
              this.eventQueue_.raiseEventsForChangedPath(t, [])
          }
        }),
        (t.prototype.runOnDisconnectEvents_ = function() {
          var t = this
          this.log_('onDisconnectEvents')
          var e = this.generateServerValues(),
            n = []
          ;(function(t, e) {
            var n = new tr()
            return (
              t.forEachTree(new Be(''), function(t, r) {
                n.remember(t, nr(r, e))
              }),
              n
            )
          })(this.onDisconnect_, e).forEachTree(Be.Empty, function(e, r) {
            n = n.concat(t.serverSyncTree_.applyServerOverwrite(e, r))
            var i = t.abortTransactions_(e)
            t.rerunTransactions_(i)
          }),
            (this.onDisconnect_ = new tr()),
            this.eventQueue_.raiseEventsForChangedPath(Be.Empty, n)
        }),
        (t.prototype.onDisconnectCancel = function(t, e) {
          var n = this
          this.server_.onDisconnectCancel(t.toString(), function(r, i) {
            'ok' === r && n.onDisconnect_.forget(t),
              n.callOnCompleteCallback(e, r, i)
          })
        }),
        (t.prototype.onDisconnectSet = function(t, e, n) {
          var r = this,
            i = Vn(e)
          this.server_.onDisconnectPut(t.toString(), i.val(!0), function(e, o) {
            'ok' === e && r.onDisconnect_.remember(t, i),
              r.callOnCompleteCallback(n, e, o)
          })
        }),
        (t.prototype.onDisconnectSetWithPriority = function(t, e, n, r) {
          var i = this,
            o = Vn(e, n)
          this.server_.onDisconnectPut(t.toString(), o.val(!0), function(e, n) {
            'ok' === e && i.onDisconnect_.remember(t, o),
              i.callOnCompleteCallback(r, e, n)
          })
        }),
        (t.prototype.onDisconnectUpdate = function(t, e, n) {
          var r = this
          if (Dt(e))
            return (
              be(
                "onDisconnect().update() called with empty data.  Don't do anything."
              ),
              void this.callOnCompleteCallback(n, 'ok')
            )
          this.server_.onDisconnectMerge(t.toString(), e, function(i, o) {
            'ok' === i &&
              Ot(e, function(e, n) {
                var i = Vn(n)
                r.onDisconnect_.remember(t.child(e), i)
              }),
              r.callOnCompleteCallback(n, i, o)
          })
        }),
        (t.prototype.addEventCallbackForQuery = function(t, e) {
          var n
          ;(n =
            '.info' === t.path.getFront()
              ? this.infoSyncTree_.addEventRegistration(t, e)
              : this.serverSyncTree_.addEventRegistration(t, e)),
            this.eventQueue_.raiseEventsAtPath(t.path, n)
        }),
        (t.prototype.removeEventCallbackForQuery = function(t, e) {
          var n
          ;(n =
            '.info' === t.path.getFront()
              ? this.infoSyncTree_.removeEventRegistration(t, e)
              : this.serverSyncTree_.removeEventRegistration(t, e)),
            this.eventQueue_.raiseEventsAtPath(t.path, n)
        }),
        (t.prototype.interrupt = function() {
          this.persistentConnection_ &&
            this.persistentConnection_.interrupt('repo_interrupt')
        }),
        (t.prototype.resume = function() {
          this.persistentConnection_ &&
            this.persistentConnection_.resume('repo_interrupt')
        }),
        (t.prototype.stats = function(t) {
          if ((void 0 === t && (t = !1), 'undefined' != typeof console)) {
            var e
            t
              ? (this.statsListener_ ||
                  (this.statsListener_ = new Pr(this.stats_)),
                (e = this.statsListener_.get()))
              : (e = this.stats_.get())
            var n = Object.keys(e).reduce(function(t, e) {
              return Math.max(e.length, t)
            }, 0)
            Ot(e, function(t, e) {
              for (var r = t.length; r < n + 2; r++) t += ' '
              console.log(t + e)
            })
          }
        }),
        (t.prototype.statsIncrementCounter = function(t) {
          this.stats_.incrementCounter(t), this.statsReporter_.includeStat(t)
        }),
        (t.prototype.log_ = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          var n = ''
          this.persistentConnection_ &&
            (n = this.persistentConnection_.id + ':'),
            be.apply(void 0, [n].concat(t))
        }),
        (t.prototype.callOnCompleteCallback = function(t, e, n) {
          t &&
            Ue(function() {
              if ('ok' == e) t(null)
              else {
                var r = (e || 'error').toUpperCase(),
                  i = r
                n && (i += ': ' + n)
                var o = new Error(i)
                ;(o.code = r), t(o)
              }
            })
        }),
        Object.defineProperty(t.prototype, 'database', {
          get: function() {
            return this.__database || (this.__database = new li(this))
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      )
    })(),
    ni = (function() {
      function t(e) {
        ;(this.indexedFilter_ = new vr(e.getIndex())),
          (this.index_ = e.getIndex()),
          (this.startPost_ = t.getStartPost_(e)),
          (this.endPost_ = t.getEndPost_(e))
      }
      return (
        (t.prototype.getStartPost = function() {
          return this.startPost_
        }),
        (t.prototype.getEndPost = function() {
          return this.endPost_
        }),
        (t.prototype.matches = function(t) {
          return (
            this.index_.compare(this.getStartPost(), t) <= 0 &&
            this.index_.compare(t, this.getEndPost()) <= 0
          )
        }),
        (t.prototype.updateChild = function(t, e, n, r, i, o) {
          return (
            this.matches(new vn(e, n)) || (n = Wn.EMPTY_NODE),
            this.indexedFilter_.updateChild(t, e, n, r, i, o)
          )
        }),
        (t.prototype.updateFullNode = function(t, e, n) {
          e.isLeafNode() && (e = Wn.EMPTY_NODE)
          var r = e.withIndex(this.index_)
          r = r.updatePriority(Wn.EMPTY_NODE)
          var i = this
          return (
            e.forEachChild(Nn, function(t, e) {
              i.matches(new vn(t, e)) ||
                (r = r.updateImmediateChild(t, Wn.EMPTY_NODE))
            }),
            this.indexedFilter_.updateFullNode(t, r, n)
          )
        }),
        (t.prototype.updatePriority = function(t, e) {
          return t
        }),
        (t.prototype.filtersNodes = function() {
          return !0
        }),
        (t.prototype.getIndexedFilter = function() {
          return this.indexedFilter_
        }),
        (t.prototype.getIndex = function() {
          return this.index_
        }),
        (t.getStartPost_ = function(t) {
          if (t.hasStart()) {
            var e = t.getIndexStartName()
            return t.getIndex().makePost(t.getIndexStartValue(), e)
          }
          return t.getIndex().minPost()
        }),
        (t.getEndPost_ = function(t) {
          if (t.hasEnd()) {
            var e = t.getIndexEndName()
            return t.getIndex().makePost(t.getIndexEndValue(), e)
          }
          return t.getIndex().maxPost()
        }),
        t
      )
    })(),
    ri = (function() {
      function t(t) {
        ;(this.rangedFilter_ = new ni(t)),
          (this.index_ = t.getIndex()),
          (this.limit_ = t.getLimit()),
          (this.reverse_ = !t.isViewFromLeft())
      }
      return (
        (t.prototype.updateChild = function(t, e, n, r, i, o) {
          return (
            this.rangedFilter_.matches(new vn(e, n)) || (n = Wn.EMPTY_NODE),
            t.getImmediateChild(e).equals(n)
              ? t
              : t.numChildren() < this.limit_
                ? this.rangedFilter_
                    .getIndexedFilter()
                    .updateChild(t, e, n, r, i, o)
                : this.fullLimitUpdateChild_(t, e, n, i, o)
          )
        }),
        (t.prototype.updateFullNode = function(t, e, n) {
          var r
          if (e.isLeafNode() || e.isEmpty())
            r = Wn.EMPTY_NODE.withIndex(this.index_)
          else if (
            2 * this.limit_ < e.numChildren() &&
            e.isIndexed(this.index_)
          ) {
            r = Wn.EMPTY_NODE.withIndex(this.index_)
            var i = void 0
            i = this.reverse_
              ? e.getReverseIteratorFrom(
                  this.rangedFilter_.getEndPost(),
                  this.index_
                )
              : e.getIteratorFrom(
                  this.rangedFilter_.getStartPost(),
                  this.index_
                )
            for (var o = 0; i.hasNext() && o < this.limit_; ) {
              var a = i.getNext()
              if (
                !(this.reverse_
                  ? this.index_.compare(this.rangedFilter_.getStartPost(), a) <=
                    0
                  : this.index_.compare(a, this.rangedFilter_.getEndPost()) <=
                    0)
              )
                break
              ;(r = r.updateImmediateChild(a.name, a.node)), o++
            }
          } else {
            r = (r = e.withIndex(this.index_)).updatePriority(Wn.EMPTY_NODE)
            var s = void 0,
              u = void 0,
              c = void 0
            i = void 0
            if (this.reverse_) {
              ;(i = r.getReverseIterator(this.index_)),
                (s = this.rangedFilter_.getEndPost()),
                (u = this.rangedFilter_.getStartPost())
              var h = this.index_.getCompare()
              c = function(t, e) {
                return h(e, t)
              }
            } else
              (i = r.getIterator(this.index_)),
                (s = this.rangedFilter_.getStartPost()),
                (u = this.rangedFilter_.getEndPost()),
                (c = this.index_.getCompare())
            o = 0
            for (var l = !1; i.hasNext(); ) {
              a = i.getNext()
              !l && c(s, a) <= 0 && (l = !0),
                l && o < this.limit_ && c(a, u) <= 0
                  ? o++
                  : (r = r.updateImmediateChild(a.name, Wn.EMPTY_NODE))
            }
          }
          return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n)
        }),
        (t.prototype.updatePriority = function(t, e) {
          return t
        }),
        (t.prototype.filtersNodes = function() {
          return !0
        }),
        (t.prototype.getIndexedFilter = function() {
          return this.rangedFilter_.getIndexedFilter()
        }),
        (t.prototype.getIndex = function() {
          return this.index_
        }),
        (t.prototype.fullLimitUpdateChild_ = function(t, e, n, r, i) {
          var o
          if (this.reverse_) {
            var a = this.index_.getCompare()
            o = function(t, e) {
              return a(e, t)
            }
          } else o = this.index_.getCompare()
          var s = t
          lt(s.numChildren() == this.limit_, '')
          var u = new vn(e, n),
            c = this.reverse_
              ? s.getFirstChild(this.index_)
              : s.getLastChild(this.index_),
            h = this.rangedFilter_.matches(u)
          if (s.hasChild(e)) {
            for (
              var l = s.getImmediateChild(e),
                p = r.getChildAfterChild(this.index_, c, this.reverse_);
              null != p && (p.name == e || s.hasChild(p.name));

            )
              p = r.getChildAfterChild(this.index_, p, this.reverse_)
            var f = null == p ? 1 : o(p, u)
            if (h && !n.isEmpty() && f >= 0)
              return (
                null != i && i.trackChildChange(dr.childChangedChange(e, n, l)),
                s.updateImmediateChild(e, n)
              )
            null != i && i.trackChildChange(dr.childRemovedChange(e, l))
            var d = s.updateImmediateChild(e, Wn.EMPTY_NODE)
            return null != p && this.rangedFilter_.matches(p)
              ? (null != i &&
                  i.trackChildChange(dr.childAddedChange(p.name, p.node)),
                d.updateImmediateChild(p.name, p.node))
              : d
          }
          return n.isEmpty()
            ? t
            : h && o(c, u) >= 0
              ? (null != i &&
                  (i.trackChildChange(dr.childRemovedChange(c.name, c.node)),
                  i.trackChildChange(dr.childAddedChange(e, n))),
                s
                  .updateImmediateChild(e, n)
                  .updateImmediateChild(c.name, Wn.EMPTY_NODE))
              : t
        }),
        t
      )
    })(),
    ii = (function() {
      function t() {
        ;(this.limitSet_ = !1),
          (this.startSet_ = !1),
          (this.startNameSet_ = !1),
          (this.endSet_ = !1),
          (this.endNameSet_ = !1),
          (this.limit_ = 0),
          (this.viewFrom_ = ''),
          (this.indexStartValue_ = null),
          (this.indexStartName_ = ''),
          (this.indexEndValue_ = null),
          (this.indexEndName_ = ''),
          (this.index_ = Nn)
      }
      return (
        (t.prototype.hasStart = function() {
          return this.startSet_
        }),
        (t.prototype.isViewFromLeft = function() {
          return '' === this.viewFrom_
            ? this.startSet_
            : this.viewFrom_ === t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
        }),
        (t.prototype.getIndexStartValue = function() {
          return (
            lt(this.startSet_, 'Only valid if start has been set'),
            this.indexStartValue_
          )
        }),
        (t.prototype.getIndexStartName = function() {
          return (
            lt(this.startSet_, 'Only valid if start has been set'),
            this.startNameSet_ ? this.indexStartName_ : Ie
          )
        }),
        (t.prototype.hasEnd = function() {
          return this.endSet_
        }),
        (t.prototype.getIndexEndValue = function() {
          return (
            lt(this.endSet_, 'Only valid if end has been set'),
            this.indexEndValue_
          )
        }),
        (t.prototype.getIndexEndName = function() {
          return (
            lt(this.endSet_, 'Only valid if end has been set'),
            this.endNameSet_ ? this.indexEndName_ : Ne
          )
        }),
        (t.prototype.hasLimit = function() {
          return this.limitSet_
        }),
        (t.prototype.hasAnchoredLimit = function() {
          return this.limitSet_ && '' !== this.viewFrom_
        }),
        (t.prototype.getLimit = function() {
          return (
            lt(this.limitSet_, 'Only valid if limit has been set'), this.limit_
          )
        }),
        (t.prototype.getIndex = function() {
          return this.index_
        }),
        (t.prototype.copy_ = function() {
          var e = new t()
          return (
            (e.limitSet_ = this.limitSet_),
            (e.limit_ = this.limit_),
            (e.startSet_ = this.startSet_),
            (e.indexStartValue_ = this.indexStartValue_),
            (e.startNameSet_ = this.startNameSet_),
            (e.indexStartName_ = this.indexStartName_),
            (e.endSet_ = this.endSet_),
            (e.indexEndValue_ = this.indexEndValue_),
            (e.endNameSet_ = this.endNameSet_),
            (e.indexEndName_ = this.indexEndName_),
            (e.index_ = this.index_),
            (e.viewFrom_ = this.viewFrom_),
            e
          )
        }),
        (t.prototype.limit = function(t) {
          var e = this.copy_()
          return (e.limitSet_ = !0), (e.limit_ = t), (e.viewFrom_ = ''), e
        }),
        (t.prototype.limitToFirst = function(e) {
          var n = this.copy_()
          return (
            (n.limitSet_ = !0),
            (n.limit_ = e),
            (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT),
            n
          )
        }),
        (t.prototype.limitToLast = function(e) {
          var n = this.copy_()
          return (
            (n.limitSet_ = !0),
            (n.limit_ = e),
            (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT),
            n
          )
        }),
        (t.prototype.startAt = function(t, e) {
          var n = this.copy_()
          return (
            (n.startSet_ = !0),
            void 0 === t && (t = null),
            (n.indexStartValue_ = t),
            null != e
              ? ((n.startNameSet_ = !0), (n.indexStartName_ = e))
              : ((n.startNameSet_ = !1), (n.indexStartName_ = '')),
            n
          )
        }),
        (t.prototype.endAt = function(t, e) {
          var n = this.copy_()
          return (
            (n.endSet_ = !0),
            void 0 === t && (t = null),
            (n.indexEndValue_ = t),
            void 0 !== e
              ? ((n.endNameSet_ = !0), (n.indexEndName_ = e))
              : ((n.endNameSet_ = !1), (n.indexEndName_ = '')),
            n
          )
        }),
        (t.prototype.orderBy = function(t) {
          var e = this.copy_()
          return (e.index_ = t), e
        }),
        (t.prototype.getQueryObject = function() {
          var e = t.WIRE_PROTOCOL_CONSTANTS_,
            n = {}
          if (
            (this.startSet_ &&
              ((n[e.INDEX_START_VALUE] = this.indexStartValue_),
              this.startNameSet_ &&
                (n[e.INDEX_START_NAME] = this.indexStartName_)),
            this.endSet_ &&
              ((n[e.INDEX_END_VALUE] = this.indexEndValue_),
              this.endNameSet_ && (n[e.INDEX_END_NAME] = this.indexEndName_)),
            this.limitSet_)
          ) {
            n[e.LIMIT] = this.limit_
            var r = this.viewFrom_
            '' === r &&
              (r = this.isViewFromLeft()
                ? e.VIEW_FROM_LEFT
                : e.VIEW_FROM_RIGHT),
              (n[e.VIEW_FROM] = r)
          }
          return this.index_ !== Nn && (n[e.INDEX] = this.index_.toString()), n
        }),
        (t.prototype.loadsAllData = function() {
          return !(this.startSet_ || this.endSet_ || this.limitSet_)
        }),
        (t.prototype.isDefault = function() {
          return this.loadsAllData() && this.index_ == Nn
        }),
        (t.prototype.getNodeFilter = function() {
          return this.loadsAllData()
            ? new vr(this.getIndex())
            : this.hasLimit() ? new ri(this) : new ni(this)
        }),
        (t.prototype.toRestQueryStringParameters = function() {
          var e,
            n = t.REST_QUERY_CONSTANTS_,
            r = {}
          return this.isDefault()
            ? r
            : (this.index_ === Nn
                ? (e = n.PRIORITY_INDEX)
                : this.index_ === Kn
                  ? (e = n.VALUE_INDEX)
                  : this.index_ === gn
                    ? (e = n.KEY_INDEX)
                    : (lt(
                        this.index_ instanceof Gn,
                        'Unrecognized index type!'
                      ),
                      (e = this.index_.toString())),
              (r[n.ORDER_BY] = Nt(e)),
              this.startSet_ &&
                ((r[n.START_AT] = Nt(this.indexStartValue_)),
                this.startNameSet_ &&
                  (r[n.START_AT] += ',' + Nt(this.indexStartName_))),
              this.endSet_ &&
                ((r[n.END_AT] = Nt(this.indexEndValue_)),
                this.endNameSet_ &&
                  (r[n.END_AT] += ',' + Nt(this.indexEndName_))),
              this.limitSet_ &&
                (this.isViewFromLeft()
                  ? (r[n.LIMIT_TO_FIRST] = this.limit_)
                  : (r[n.LIMIT_TO_LAST] = this.limit_)),
              r)
        }),
        (t.WIRE_PROTOCOL_CONSTANTS_ = {
          INDEX_START_VALUE: 'sp',
          INDEX_START_NAME: 'sn',
          INDEX_END_VALUE: 'ep',
          INDEX_END_NAME: 'en',
          LIMIT: 'l',
          VIEW_FROM: 'vf',
          VIEW_FROM_LEFT: 'l',
          VIEW_FROM_RIGHT: 'r',
          INDEX: 'i'
        }),
        (t.REST_QUERY_CONSTANTS_ = {
          ORDER_BY: 'orderBy',
          PRIORITY_INDEX: '$priority',
          VALUE_INDEX: '$value',
          KEY_INDEX: '$key',
          START_AT: 'startAt',
          END_AT: 'endAt',
          LIMIT_TO_FIRST: 'limitToFirst',
          LIMIT_TO_LAST: 'limitToLast'
        }),
        (t.DEFAULT = new t()),
        t
      )
    })(),
    oi = (function(t) {
      function e(e, n) {
        if (!(e instanceof ei))
          throw new Error(
            'new Reference() no longer supported - use app.database().'
          )
        return t.call(this, e, n, ii.DEFAULT, !1) || this
      }
      return (
        it(e, t),
        (e.prototype.getKey = function() {
          return (
            Vt('Reference.key', 0, 0, arguments.length),
            this.path.isEmpty() ? null : this.path.getBack()
          )
        }),
        (e.prototype.child = function(t) {
          return (
            Vt('Reference.child', 1, 1, arguments.length),
            'number' == typeof t
              ? (t = String(t))
              : t instanceof Be ||
                (null === this.path.getFront()
                  ? (function(t, e, n, r) {
                      n && (n = n.replace(/^\/*\.info(\/|$)/, '/')),
                        cn(t, e, n, r)
                    })('Reference.child', 1, t, !1)
                  : cn('Reference.child', 1, t, !1)),
            new e(this.repo, this.path.child(t))
          )
        }),
        (e.prototype.getParent = function() {
          Vt('Reference.parent', 0, 0, arguments.length)
          var t = this.path.parent()
          return null === t ? null : new e(this.repo, t)
        }),
        (e.prototype.getRoot = function() {
          Vt('Reference.root', 0, 0, arguments.length)
          for (var t = this; null !== t.getParent(); ) t = t.getParent()
          return t
        }),
        (e.prototype.databaseProp = function() {
          return this.repo.database
        }),
        (e.prototype.set = function(t, e) {
          Vt('Reference.set', 1, 2, arguments.length),
            hn('Reference.set', this.path),
            nn('Reference.set', 1, t, this.path, !1),
            Ht('Reference.set', 2, e, !0)
          var n = new mt()
          return (
            this.repo.setWithPriority(this.path, t, null, n.wrapCallback(e)),
            n.promise
          )
        }),
        (e.prototype.update = function(t, e) {
          if (
            (Vt('Reference.update', 1, 2, arguments.length),
            hn('Reference.update', this.path),
            Array.isArray(t))
          ) {
            for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r]
            ;(t = n),
              Ce(
                'Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
              )
          }
          on('Reference.update', 1, t, this.path, !1),
            Ht('Reference.update', 2, e, !0)
          var i = new mt()
          return this.repo.update(this.path, t, i.wrapCallback(e)), i.promise
        }),
        (e.prototype.setWithPriority = function(t, e, n) {
          if (
            (Vt('Reference.setWithPriority', 2, 3, arguments.length),
            hn('Reference.setWithPriority', this.path),
            nn('Reference.setWithPriority', 1, t, this.path, !1),
            an('Reference.setWithPriority', 2, e, !1),
            Ht('Reference.setWithPriority', 3, n, !0),
            '.length' === this.getKey() || '.keys' === this.getKey())
          )
            throw 'Reference.setWithPriority failed: ' +
              this.getKey() +
              ' is a read-only object.'
          var r = new mt()
          return (
            this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)),
            r.promise
          )
        }),
        (e.prototype.remove = function(t) {
          return (
            Vt('Reference.remove', 0, 1, arguments.length),
            hn('Reference.remove', this.path),
            Ht('Reference.remove', 1, t, !0),
            this.set(null, t)
          )
        }),
        (e.prototype.transaction = function(t, e, n) {
          if (
            (Vt('Reference.transaction', 1, 3, arguments.length),
            hn('Reference.transaction', this.path),
            Ht('Reference.transaction', 1, t, !1),
            Ht('Reference.transaction', 2, e, !0),
            (function(t, e, n, r) {
              if ((!r || void 0 !== n) && 'boolean' != typeof n)
                throw new Error(qt(t, e, r) + 'must be a boolean.')
            })('Reference.transaction', 3, n, !0),
            '.length' === this.getKey() || '.keys' === this.getKey())
          )
            throw 'Reference.transaction failed: ' +
              this.getKey() +
              ' is a read-only object.'
          void 0 === n && (n = !0)
          var r = new mt()
          'function' == typeof e && r.promise.catch(function() {})
          return (
            this.repo.startTransaction(
              this.path,
              t,
              function(t, n, i) {
                t ? r.reject(t) : r.resolve(new fn(n, i)),
                  'function' == typeof e && e(t, n, i)
              },
              n
            ),
            r.promise
          )
        }),
        (e.prototype.setPriority = function(t, e) {
          Vt('Reference.setPriority', 1, 2, arguments.length),
            hn('Reference.setPriority', this.path),
            an('Reference.setPriority', 1, t, !1),
            Ht('Reference.setPriority', 2, e, !0)
          var n = new mt()
          return (
            this.repo.setWithPriority(
              this.path.child('.priority'),
              t,
              null,
              n.wrapCallback(e)
            ),
            n.promise
          )
        }),
        (e.prototype.push = function(t, e) {
          Vt('Reference.push', 0, 2, arguments.length),
            hn('Reference.push', this.path),
            nn('Reference.push', 1, t, this.path, !0),
            Ht('Reference.push', 2, e, !0)
          var n,
            r = this.repo.serverTime(),
            i = dn(r),
            o = this.child(i),
            a = this.child(i)
          return (
            (n =
              null != t
                ? o.set(t, e).then(function() {
                    return a
                  })
                : Promise.resolve(a)),
            (o.then = n.then.bind(n)),
            (o.catch = n.then.bind(n, void 0)),
            'function' == typeof e && n.catch(function() {}),
            o
          )
        }),
        (e.prototype.onDisconnect = function() {
          return (
            hn('Reference.onDisconnect', this.path),
            new pn(this.repo, this.path)
          )
        }),
        Object.defineProperty(e.prototype, 'database', {
          get: function() {
            return this.databaseProp()
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'key', {
          get: function() {
            return this.getKey()
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'parent', {
          get: function() {
            return this.getParent()
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, 'root', {
          get: function() {
            return this.getRoot()
          },
          enumerable: !0,
          configurable: !0
        }),
        e
      )
    })(Jn)
  ;(Jn.__referenceConstructor = oi), (Tr.__referenceConstructor = oi)
  var ai,
    si = (function() {
      return function() {
        ;(this.children = {}), (this.childCount = 0), (this.value = null)
      }
    })(),
    ui = (function() {
      function t(t, e, n) {
        void 0 === t && (t = ''),
          void 0 === e && (e = null),
          void 0 === n && (n = new si()),
          (this.name_ = t),
          (this.parent_ = e),
          (this.node_ = n)
      }
      return (
        (t.prototype.subTree = function(e) {
          for (
            var n, r = e instanceof Be ? e : new Be(e), i = this;
            null !== (n = r.getFront());

          ) {
            ;(i = new t(n, i, kt(i.node_.children, n) || new si())),
              (r = r.popFront())
          }
          return i
        }),
        (t.prototype.getValue = function() {
          return this.node_.value
        }),
        (t.prototype.setValue = function(t) {
          lt(void 0 !== t, 'Cannot set value to undefined'),
            (this.node_.value = t),
            this.updateParents_()
        }),
        (t.prototype.clear = function() {
          ;(this.node_.value = null),
            (this.node_.children = {}),
            (this.node_.childCount = 0),
            this.updateParents_()
        }),
        (t.prototype.hasChildren = function() {
          return this.node_.childCount > 0
        }),
        (t.prototype.isEmpty = function() {
          return null === this.getValue() && !this.hasChildren()
        }),
        (t.prototype.forEachChild = function(e) {
          var n = this
          Ot(this.node_.children, function(r, i) {
            e(new t(r, n, i))
          })
        }),
        (t.prototype.forEachDescendant = function(t, e, n) {
          e && !n && t(this),
            this.forEachChild(function(e) {
              e.forEachDescendant(t, !0, n)
            }),
            e && n && t(this)
        }),
        (t.prototype.forEachAncestor = function(t, e) {
          for (var n = e ? this : this.parent(); null !== n; ) {
            if (t(n)) return !0
            n = n.parent()
          }
          return !1
        }),
        (t.prototype.forEachImmediateDescendantWithValue = function(t) {
          this.forEachChild(function(e) {
            null !== e.getValue()
              ? t(e)
              : e.forEachImmediateDescendantWithValue(t)
          })
        }),
        (t.prototype.path = function() {
          return new Be(
            null === this.parent_
              ? this.name_
              : this.parent_.path() + '/' + this.name_
          )
        }),
        (t.prototype.name = function() {
          return this.name_
        }),
        (t.prototype.parent = function() {
          return this.parent_
        }),
        (t.prototype.updateParents_ = function() {
          null !== this.parent_ && this.parent_.updateChild_(this.name_, this)
        }),
        (t.prototype.updateChild_ = function(t, e) {
          var n = e.isEmpty(),
            r = At(this.node_.children, t)
          n && r
            ? (delete this.node_.children[t],
              this.node_.childCount--,
              this.updateParents_())
            : n ||
              r ||
              ((this.node_.children[t] = e.node_),
              this.node_.childCount++,
              this.updateParents_())
        }),
        t
      )
    })()
  !(function(t) {
    ;(t[(t.RUN = 0)] = 'RUN'),
      (t[(t.SENT = 1)] = 'SENT'),
      (t[(t.COMPLETED = 2)] = 'COMPLETED'),
      (t[(t.SENT_NEEDS_ABORT = 3)] = 'SENT_NEEDS_ABORT'),
      (t[(t.NEEDS_ABORT = 4)] = 'NEEDS_ABORT')
  })(ai || (ai = {})),
    (ei.MAX_TRANSACTION_RETRIES_ = 25),
    (ei.prototype.transactions_init_ = function() {
      this.transactionQueueTree_ = new ui()
    }),
    (ei.prototype.startTransaction = function(t, e, n, r) {
      this.log_('transaction on ' + t)
      var i = function() {},
        o = new oi(this, t)
      o.on('value', i)
      var a = {
          path: t,
          update: e,
          onComplete: n,
          status: null,
          order: de(),
          applyLocally: r,
          retryCount: 0,
          unwatcher: function() {
            o.off('value', i)
          },
          abortReason: null,
          currentWriteId: null,
          currentInputSnapshot: null,
          currentOutputSnapshotRaw: null,
          currentOutputSnapshotResolved: null
        },
        s = this.getLatestState_(t)
      a.currentInputSnapshot = s
      var u = a.update(s.val())
      if (void 0 === u) {
        if (
          (a.unwatcher(),
          (a.currentOutputSnapshotRaw = null),
          (a.currentOutputSnapshotResolved = null),
          a.onComplete)
        ) {
          var c = new Qn(a.currentInputSnapshot, new oi(this, a.path), Nn)
          a.onComplete(null, !1, c)
        }
      } else {
        rn('transaction failed: Data returned ', u, a.path), (a.status = ai.RUN)
        var h = this.transactionQueueTree_.subTree(t),
          l = h.getValue() || []
        l.push(a), h.setValue(l)
        var p = void 0
        if ('object' == typeof u && null !== u && At(u, '.priority'))
          (p = kt(u, '.priority')),
            lt(
              en(p),
              'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.'
            )
        else
          p = (this.serverSyncTree_.calcCompleteEventCache(t) || Wn.EMPTY_NODE)
            .getPriority()
            .val()
        p = p
        var f = this.generateServerValues(),
          d = Vn(u, p),
          v = nr(d, f)
        ;(a.currentOutputSnapshotRaw = d),
          (a.currentOutputSnapshotResolved = v),
          (a.currentWriteId = this.getNextWriteId_())
        var y = this.serverSyncTree_.applyUserOverwrite(
          t,
          v,
          a.currentWriteId,
          a.applyLocally
        )
        this.eventQueue_.raiseEventsForChangedPath(t, y),
          this.sendReadyTransactions_()
      }
    }),
    (ei.prototype.getLatestState_ = function(t, e) {
      return this.serverSyncTree_.calcCompleteEventCache(t, e) || Wn.EMPTY_NODE
    }),
    (ei.prototype.sendReadyTransactions_ = function(t) {
      var e = this
      if (
        (void 0 === t && (t = this.transactionQueueTree_),
        t || this.pruneCompletedTransactionsBelowNode_(t),
        null !== t.getValue())
      ) {
        var n = this.buildTransactionQueue_(t)
        lt(n.length > 0, 'Sending zero length transaction queue'),
          n.every(function(t) {
            return t.status === ai.RUN
          }) && this.sendTransactionQueue_(t.path(), n)
      } else
        t.hasChildren() &&
          t.forEachChild(function(t) {
            e.sendReadyTransactions_(t)
          })
    }),
    (ei.prototype.sendTransactionQueue_ = function(t, e) {
      for (
        var n = this,
          r = e.map(function(t) {
            return t.currentWriteId
          }),
          i = this.getLatestState_(t, r),
          o = i,
          a = i.hash(),
          s = 0;
        s < e.length;
        s++
      ) {
        var u = e[s]
        lt(
          u.status === ai.RUN,
          'tryToSendTransactionQueue_: items in queue should all be run.'
        ),
          (u.status = ai.SENT),
          u.retryCount++
        var c = Be.relativePath(t, u.path)
        o = o.updateChild(c, u.currentOutputSnapshotRaw)
      }
      var h = o.val(!0),
        l = t
      this.server_.put(
        l.toString(),
        h,
        function(r) {
          n.log_('transaction put response', {path: l.toString(), status: r})
          var i = []
          if ('ok' === r) {
            for (var o = [], a = 0; a < e.length; a++) {
              if (
                ((e[a].status = ai.COMPLETED),
                (i = i.concat(
                  n.serverSyncTree_.ackUserWrite(e[a].currentWriteId)
                )),
                e[a].onComplete)
              ) {
                var s = e[a].currentOutputSnapshotResolved,
                  u = new oi(n, e[a].path),
                  c = new Qn(s, u, Nn)
                o.push(e[a].onComplete.bind(null, null, !0, c))
              }
              e[a].unwatcher()
            }
            n.pruneCompletedTransactionsBelowNode_(
              n.transactionQueueTree_.subTree(t)
            ),
              n.sendReadyTransactions_(),
              n.eventQueue_.raiseEventsForChangedPath(t, i)
            for (a = 0; a < o.length; a++) Ue(o[a])
          } else {
            if ('datastale' === r)
              for (a = 0; a < e.length; a++)
                e[a].status === ai.SENT_NEEDS_ABORT
                  ? (e[a].status = ai.NEEDS_ABORT)
                  : (e[a].status = ai.RUN)
            else {
              Ce('transaction at ' + l.toString() + ' failed: ' + r)
              for (a = 0; a < e.length; a++)
                (e[a].status = ai.NEEDS_ABORT), (e[a].abortReason = r)
            }
            n.rerunTransactions_(t)
          }
        },
        a
      )
    }),
    (ei.prototype.rerunTransactions_ = function(t) {
      var e = this.getAncestorTransactionNode_(t),
        n = e.path(),
        r = this.buildTransactionQueue_(e)
      return this.rerunTransactionQueue_(r, n), n
    }),
    (ei.prototype.rerunTransactionQueue_ = function(t, e) {
      if (0 !== t.length) {
        for (
          var n,
            r = [],
            i = [],
            o = t
              .filter(function(t) {
                return t.status === ai.RUN
              })
              .map(function(t) {
                return t.currentWriteId
              }),
            a = 0;
          a < t.length;
          a++
        ) {
          var s = t[a],
            u = Be.relativePath(e, s.path),
            c = !1,
            h = void 0
          if (
            (lt(
              null !== u,
              'rerunTransactionsUnderNode_: relativePath should not be null.'
            ),
            s.status === ai.NEEDS_ABORT)
          )
            (c = !0),
              (h = s.abortReason),
              (i = i.concat(
                this.serverSyncTree_.ackUserWrite(s.currentWriteId, !0)
              ))
          else if (s.status === ai.RUN)
            if (s.retryCount >= ei.MAX_TRANSACTION_RETRIES_)
              (c = !0),
                (h = 'maxretry'),
                (i = i.concat(
                  this.serverSyncTree_.ackUserWrite(s.currentWriteId, !0)
                ))
            else {
              var l = this.getLatestState_(s.path, o)
              s.currentInputSnapshot = l
              var p = t[a].update(l.val())
              if (void 0 !== p) {
                rn('transaction failed: Data returned ', p, s.path)
                var f = Vn(p)
                ;('object' == typeof p && null != p && At(p, '.priority')) ||
                  (f = f.updatePriority(l.getPriority()))
                var d = s.currentWriteId,
                  v = this.generateServerValues(),
                  y = nr(f, v)
                ;(s.currentOutputSnapshotRaw = f),
                  (s.currentOutputSnapshotResolved = y),
                  (s.currentWriteId = this.getNextWriteId_()),
                  o.splice(o.indexOf(d), 1),
                  (i = (i = i.concat(
                    this.serverSyncTree_.applyUserOverwrite(
                      s.path,
                      y,
                      s.currentWriteId,
                      s.applyLocally
                    )
                  )).concat(this.serverSyncTree_.ackUserWrite(d, !0)))
              } else
                (c = !0),
                  (h = 'nodata'),
                  (i = i.concat(
                    this.serverSyncTree_.ackUserWrite(s.currentWriteId, !0)
                  ))
            }
          if (
            (this.eventQueue_.raiseEventsForChangedPath(e, i),
            (i = []),
            c &&
              ((t[a].status = ai.COMPLETED),
              (n = t[a].unwatcher),
              setTimeout(n, Math.floor(0)),
              t[a].onComplete))
          )
            if ('nodata' === h) {
              var _ = new oi(this, t[a].path),
                g = t[a].currentInputSnapshot,
                m = new Qn(g, _, Nn)
              r.push(t[a].onComplete.bind(null, null, !1, m))
            } else r.push(t[a].onComplete.bind(null, new Error(h), !1, null))
        }
        this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_)
        for (a = 0; a < r.length; a++) Ue(r[a])
        this.sendReadyTransactions_()
      }
    }),
    (ei.prototype.getAncestorTransactionNode_ = function(t) {
      for (
        var e, n = this.transactionQueueTree_;
        null !== (e = t.getFront()) && null === n.getValue();

      )
        (n = n.subTree(e)), (t = t.popFront())
      return n
    }),
    (ei.prototype.buildTransactionQueue_ = function(t) {
      var e = []
      return (
        this.aggregateTransactionQueuesForNode_(t, e),
        e.sort(function(t, e) {
          return t.order - e.order
        }),
        e
      )
    }),
    (ei.prototype.aggregateTransactionQueuesForNode_ = function(t, e) {
      var n = this,
        r = t.getValue()
      if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i])
      t.forEachChild(function(t) {
        n.aggregateTransactionQueuesForNode_(t, e)
      })
    }),
    (ei.prototype.pruneCompletedTransactionsBelowNode_ = function(t) {
      var e = this,
        n = t.getValue()
      if (n) {
        for (var r = 0, i = 0; i < n.length; i++)
          n[i].status !== ai.COMPLETED && ((n[r] = n[i]), r++)
        ;(n.length = r), t.setValue(n.length > 0 ? n : null)
      }
      t.forEachChild(function(t) {
        e.pruneCompletedTransactionsBelowNode_(t)
      })
    }),
    (ei.prototype.abortTransactions_ = function(t) {
      var e = this,
        n = this.getAncestorTransactionNode_(t).path(),
        r = this.transactionQueueTree_.subTree(t)
      return (
        r.forEachAncestor(function(t) {
          e.abortTransactionsOnNode_(t)
        }),
        this.abortTransactionsOnNode_(r),
        r.forEachDescendant(function(t) {
          e.abortTransactionsOnNode_(t)
        }),
        n
      )
    }),
    (ei.prototype.abortTransactionsOnNode_ = function(t) {
      var e = t.getValue()
      if (null !== e) {
        for (var n = [], r = [], i = -1, o = 0; o < e.length; o++)
          if (e[o].status === ai.SENT_NEEDS_ABORT);
          else if (e[o].status === ai.SENT)
            lt(i === o - 1, 'All SENT items should be at beginning of queue.'),
              (i = o),
              (e[o].status = ai.SENT_NEEDS_ABORT),
              (e[o].abortReason = 'set')
          else if (
            (lt(
              e[o].status === ai.RUN,
              'Unexpected transaction status in abort'
            ),
            e[o].unwatcher(),
            (r = r.concat(
              this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0)
            )),
            e[o].onComplete)
          ) {
            n.push(e[o].onComplete.bind(null, new Error('set'), !1, null))
          }
        ;-1 === i ? t.setValue(null) : (e.length = i + 1),
          this.eventQueue_.raiseEventsForChangedPath(t.path(), r)
        for (o = 0; o < n.length; o++) Ue(n[o])
      }
    })
  var ci,
    hi = (function() {
      function t() {
        ;(this.repos_ = {}), (this.useRestClient_ = !1)
      }
      return (
        (t.getInstance = function() {
          return ci || (ci = new t()), ci
        }),
        (t.prototype.interrupt = function() {
          for (var t in this.repos_)
            for (var e in this.repos_[t]) this.repos_[t][e].interrupt()
        }),
        (t.prototype.resume = function() {
          for (var t in this.repos_)
            for (var e in this.repos_[t]) this.repos_[t][e].resume()
        }),
        (t.prototype.databaseFromApp = function(t, e) {
          var n = e || t.options.databaseURL
          void 0 === n &&
            Te(
              "Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp()."
            )
          var r = Ye(n),
            i = r.repoInfo
          return (
            ln('Invalid Firebase Database URL', 1, r),
            r.path.isEmpty() ||
              Te(
                'Database URL must point to the root of a Firebase Database (not including a child path).'
              ),
            this.createRepo(i, t).database
          )
        }),
        (t.prototype.deleteRepo = function(t) {
          var e = kt(this.repos_, t.app.name)
          ;(e && kt(e, t.repoInfo_.toURLString()) === t) ||
            Te(
              'Database ' +
                t.app.name +
                '(' +
                t.repoInfo_ +
                ') has already been deleted.'
            ),
            t.interrupt(),
            delete e[t.repoInfo_.toURLString()]
        }),
        (t.prototype.createRepo = function(t, e) {
          var n = kt(this.repos_, e.name)
          n || ((n = {}), (this.repos_[e.name] = n))
          var r = kt(n, t.toURLString())
          return (
            r &&
              Te(
                'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
              ),
            (r = new ei(t, this.useRestClient_, e)),
            (n[t.toURLString()] = r),
            r
          )
        }),
        (t.prototype.forceRestClient = function(t) {
          this.useRestClient_ = t
        }),
        t
      )
    })(),
    li = (function() {
      function t(t) {
        ;(this.repo_ = t),
          t instanceof ei ||
            Te(
              "Don't call new Database() directly - please use firebase.database()."
            ),
          (this.root_ = new oi(t, Be.Empty)),
          (this.INTERNAL = new pi(this))
      }
      return (
        Object.defineProperty(t.prototype, 'app', {
          get: function() {
            return this.repo_.app
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.ref = function(t) {
          return (
            this.checkDeleted_('ref'),
            Vt('database.ref', 0, 1, arguments.length),
            t instanceof oi
              ? this.refFromURL(t.toString())
              : void 0 !== t ? this.root_.child(t) : this.root_
          )
        }),
        (t.prototype.refFromURL = function(t) {
          var e = 'database.refFromURL'
          this.checkDeleted_(e), Vt(e, 1, 1, arguments.length)
          var n = Ye(t)
          ln(e, 1, n)
          var r = n.repoInfo
          return (
            r.host !== this.repo_.repoInfo_.host &&
              Te(
                e +
                  ': Host name does not match the current database: (found ' +
                  r.host +
                  ' but expected ' +
                  this.repo_.repoInfo_.host +
                  ')'
              ),
            this.ref(n.path.toString())
          )
        }),
        (t.prototype.checkDeleted_ = function(t) {
          null === this.repo_ &&
            Te('Cannot call ' + t + ' on a deleted database.')
        }),
        (t.prototype.goOffline = function() {
          Vt('database.goOffline', 0, 0, arguments.length),
            this.checkDeleted_('goOffline'),
            this.repo_.interrupt()
        }),
        (t.prototype.goOnline = function() {
          Vt('database.goOnline', 0, 0, arguments.length),
            this.checkDeleted_('goOnline'),
            this.repo_.resume()
        }),
        (t.ServerValue = {TIMESTAMP: {'.sv': 'timestamp'}}),
        t
      )
    })(),
    pi = (function() {
      function t(t) {
        this.database = t
      }
      return (
        (t.prototype.delete = function() {
          return at(this, void 0, void 0, function() {
            return st(this, function(t) {
              return (
                this.database.checkDeleted_('delete'),
                hi.getInstance().deleteRepo(this.database.repo_),
                (this.database.repo_ = null),
                (this.database.root_ = null),
                (this.database.INTERNAL = null),
                (this.database = null),
                [2]
              )
            })
          })
        }),
        t
      )
    })(),
    fi = Object.freeze({
      forceLongPolling: function() {
        Qr.forceDisallow(), Hr.forceAllow()
      },
      forceWebSockets: function() {
        Hr.forceDisallow()
      },
      isWebSocketsAvailable: function() {
        return Qr.isAvailable()
      },
      setSecurityDebugCallback: function(t, e) {
        t.repo.persistentConnection_.securityDebugCallback_ = e
      },
      stats: function(t, e) {
        t.repo.stats(e)
      },
      statsIncrementCounter: function(t, e) {
        t.repo.statsIncrementCounter(e)
      },
      dataUpdateCount: function(t) {
        return t.repo.dataUpdateCount
      },
      interceptServerData: function(t, e) {
        return t.repo.interceptServerData_(e)
      }
    }),
    di = Zr
  ;(Zr.prototype.simpleListen = function(t, e) {
    this.sendRequest('q', {p: t}, e)
  }),
    (Zr.prototype.echo = function(t, e) {
      this.sendRequest('echo', {d: t}, e)
    })
  var vi,
    yi = Yr,
    _i = qe,
    gi = Object.freeze({
      DataConnection: di,
      RealTimeConnection: yi,
      hijackHash: function(t) {
        var e = Zr.prototype.put
        return (
          (Zr.prototype.put = function(n, r, i, o) {
            void 0 !== o && (o = t()), e.call(this, n, r, i, o)
          }),
          function() {
            Zr.prototype.put = e
          }
        )
      },
      ConnectionTarget: _i,
      queryIdentifier: function(t) {
        return t.queryIdentifier()
      },
      listens: function(t) {
        return t.repo.persistentConnection_.listens_
      },
      forceRestClient: function(t) {
        hi.getInstance().forceRestClient(t)
      }
    }),
    mi = li.ServerValue
  ;(vi = te.INTERNAL.registerService(
    'database',
    function(t, e, n) {
      return hi.getInstance().databaseFromApp(t, n)
    },
    {
      Reference: oi,
      Query: Jn,
      Database: li,
      enableLogging: me,
      INTERNAL: fi,
      ServerValue: mi,
      TEST_ACCESS: gi
    },
    null,
    !0
  )),
    wt() && (module.exports = vi)
  var bi,
    wi,
    Ei,
    Ti = {
      AVAILABLE_IN_WINDOW: 'only-available-in-window',
      AVAILABLE_IN_SW: 'only-available-in-sw',
      SHOULD_BE_INHERITED: 'should-be-overriden',
      BAD_SENDER_ID: 'bad-sender-id',
      INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
      PERMISSION_DEFAULT: 'permission-default',
      PERMISSION_BLOCKED: 'permission-blocked',
      UNSUPPORTED_BROWSER: 'unsupported-browser',
      NOTIFICATIONS_BLOCKED: 'notifications-blocked',
      FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
      SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
      GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
      INVALID_SAVED_TOKEN: 'invalid-saved-token',
      SW_REG_REDUNDANT: 'sw-reg-redundant',
      TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
      TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
      TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
      TOKEN_UNSUBSCRIBE_FAILED: 'token-unsubscribe-failed',
      TOKEN_UPDATE_FAILED: 'token-update-failed',
      TOKEN_UPDATE_NO_TOKEN: 'token-update-no-token',
      USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
      INVALID_DELETE_TOKEN: 'invalid-delete-token',
      DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
      DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
      BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
      NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
      UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
      NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
      FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
      NO_SW_IN_REG: 'no-sw-in-reg',
      BAD_SCOPE: 'bad-scope',
      BAD_VAPID_KEY: 'bad-vapid-key',
      BAD_SUBSCRIPTION: 'bad-subscription',
      BAD_TOKEN: 'bad-token',
      BAD_PUSH_SET: 'bad-push-set',
      FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key',
      INVALID_PUBLIC_VAPID_KEY: 'invalid-public-vapid-key',
      USE_PUBLIC_KEY_BEFORE_GET_TOKEN: 'use-public-key-before-get-token',
      PUBLIC_KEY_DECRYPTION_FAILED: 'public-vapid-key-decryption-failed'
    },
    Ci = (((bi = {})[Ti.AVAILABLE_IN_WINDOW] =
      'This method is available in a Window context.'),
    (bi[Ti.AVAILABLE_IN_SW] =
      'This method is available in a service worker context.'),
    (bi[Ti.SHOULD_BE_INHERITED] =
      'This method should be overriden by extended classes.'),
    (bi[Ti.BAD_SENDER_ID] =
      "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp()."),
    (bi[Ti.PERMISSION_DEFAULT] =
      'The required permissions were not granted and dismissed instead.'),
    (bi[Ti.PERMISSION_BLOCKED] =
      'The required permissions were not granted and blocked instead.'),
    (bi[Ti.UNSUPPORTED_BROWSER] =
      "This browser doesn't support the API's required to use the firebase SDK."),
    (bi[Ti.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.'),
    (bi[Ti.FAILED_DEFAULT_REGISTRATION] =
      'We are unable to register the default service worker. {$browserErrorMessage}'),
    (bi[Ti.SW_REGISTRATION_EXPECTED] =
      'A service worker registration was the expected input.'),
    (bi[Ti.GET_SUBSCRIPTION_FAILED] =
      'There was an error when trying to get any existing Push Subscriptions.'),
    (bi[Ti.INVALID_SAVED_TOKEN] =
      'Unable to access details of the saved token.'),
    (bi[Ti.SW_REG_REDUNDANT] =
      'The service worker being used for push was made redundant.'),
    (bi[Ti.TOKEN_SUBSCRIBE_FAILED] =
      'A problem occured while subscribing the user to FCM: {$message}'),
    (bi[Ti.TOKEN_SUBSCRIBE_NO_TOKEN] =
      'FCM returned no token when subscribing the user to push.'),
    (bi[Ti.TOKEN_SUBSCRIBE_NO_PUSH_SET] =
      'FCM returned an invalid response when getting an FCM token.'),
    (bi[Ti.TOKEN_UNSUBSCRIBE_FAILED] =
      'A problem occured while unsubscribing the user from FCM: {$message}'),
    (bi[Ti.TOKEN_UPDATE_FAILED] =
      'A problem occured while updating the user from FCM: {$message}'),
    (bi[Ti.TOKEN_UPDATE_NO_TOKEN] =
      'FCM returned no token when updating the user to push.'),
    (bi[Ti.USE_SW_BEFORE_GET_TOKEN] =
      'The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.'),
    (bi[Ti.INVALID_DELETE_TOKEN] =
      'You must pass a valid token into deleteToken(), i.e. the token from getToken().'),
    (bi[Ti.DELETE_TOKEN_NOT_FOUND] =
      'The deletion attempt for token could not be performed as the token was not found.'),
    (bi[Ti.DELETE_SCOPE_NOT_FOUND] =
      'The deletion attempt for service worker scope could not be performed as the scope was not found.'),
    (bi[Ti.BG_HANDLER_FUNCTION_EXPECTED] =
      'The input to setBackgroundMessageHandler() must be a function.'),
    (bi[Ti.NO_WINDOW_CLIENT_TO_MSG] =
      'An attempt was made to message a non-existant window client.'),
    (bi[Ti.UNABLE_TO_RESUBSCRIBE] =
      'There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}'),
    (bi[Ti.NO_FCM_TOKEN_FOR_RESUBSCRIBE] =
      'Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.'),
    (bi[Ti.FAILED_TO_DELETE_TOKEN] =
      'Unable to delete the currently saved token.'),
    (bi[Ti.NO_SW_IN_REG] =
      'Even though the service worker registration was successful, there was a problem accessing the service worker itself.'),
    (bi[Ti.INCORRECT_GCM_SENDER_ID] =
      "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging."),
    (bi[Ti.BAD_SCOPE] =
      'The service worker scope must be a string with at least one character.'),
    (bi[Ti.BAD_VAPID_KEY] =
      'The public VAPID key is not a Uint8Array with 65 bytes.'),
    (bi[Ti.BAD_SUBSCRIPTION] =
      'The subscription must be a valid PushSubscription.'),
    (bi[Ti.BAD_TOKEN] =
      'The FCM Token used for storage / lookup was not a valid token string.'),
    (bi[Ti.BAD_PUSH_SET] =
      'The FCM push set used for storage / lookup was not not a valid push set string.'),
    (bi[Ti.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.'),
    (bi[Ti.INVALID_PUBLIC_VAPID_KEY] =
      'The public VAPID key must be a string.'),
    (bi[Ti.PUBLIC_KEY_DECRYPTION_FAILED] =
      'The public VAPID key did not equal 65 bytes when decrypted.'),
    bi),
    Si = new St('messaging', 'Messaging', Ci),
    Ii = new Uint8Array([
      4,
      51,
      148,
      247,
      223,
      161,
      235,
      177,
      220,
      3,
      162,
      94,
      21,
      113,
      219,
      72,
      211,
      46,
      237,
      237,
      178,
      52,
      219,
      183,
      71,
      58,
      12,
      143,
      196,
      204,
      225,
      111,
      60,
      140,
      132,
      223,
      171,
      182,
      102,
      62,
      242,
      12,
      212,
      139,
      254,
      227,
      249,
      118,
      47,
      20,
      28,
      99,
      8,
      106,
      111,
      45,
      177,
      26,
      149,
      176,
      206,
      55,
      192,
      156,
      110
    ]),
    Ni = 'https://fcm.googleapis.com'
  function Ri(t, e) {
    if (null == t || null == e) return !1
    if (t === e) return !0
    if (t.byteLength !== e.byteLength) return !1
    for (
      var n = new DataView(t), r = new DataView(e), i = 0;
      i < t.byteLength;
      i++
    )
      if (n.getUint8(i) !== r.getUint8(i)) return !1
    return !0
  }
  function Ai(t) {
    return (function(t) {
      var e = new Uint8Array(t)
      return btoa(String.fromCharCode.apply(null, e))
    })(t)
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }
  !(function(t) {
    ;(t.TYPE_OF_MSG = 'firebase-messaging-msg-type'),
      (t.DATA = 'firebase-messaging-msg-data')
  })(wi || (wi = {})),
    (function(t) {
      ;(t.PUSH_MSG_RECEIVED = 'push-msg-received'),
        (t.NOTIFICATION_CLICKED = 'notification-clicked')
    })(Ei || (Ei = {}))
  var ki = (function() {
    function t() {}
    return (
      (t.prototype.getToken = function(t, e, n) {
        return at(this, void 0, void 0, function() {
          var r, i, o, a, s, u, c, h
          return st(this, function(l) {
            switch (l.label) {
              case 0:
                ;(r = Ai(e.getKey('p256dh'))),
                  (i = Ai(e.getKey('auth'))),
                  (o =
                    'authorized_entity=' +
                    t +
                    '&endpoint=' +
                    e.endpoint +
                    '&encryption_key=' +
                    r +
                    '&encryption_auth=' +
                    i),
                  n !== Ii && ((a = Ai(n)), (o += '&application_pub_key=' + a)),
                  (s = new Headers()).append(
                    'Content-Type',
                    'application/x-www-form-urlencoded'
                  ),
                  (u = {method: 'POST', headers: s, body: o}),
                  (l.label = 1)
              case 1:
                return (
                  l.trys.push([1, 4, , 5]),
                  [4, fetch(Ni + '/fcm/connect/subscribe', u)]
                )
              case 2:
                return [4, l.sent().json()]
              case 3:
                return (c = l.sent()), [3, 5]
              case 4:
                throw (l.sent(), Si.create(Ti.TOKEN_SUBSCRIBE_FAILED))
              case 5:
                if (c.error)
                  throw ((h = c.error.message),
                  Si.create(Ti.TOKEN_SUBSCRIBE_FAILED, {message: h}))
                if (!c.token) throw Si.create(Ti.TOKEN_SUBSCRIBE_NO_TOKEN)
                if (!c.pushSet) throw Si.create(Ti.TOKEN_SUBSCRIBE_NO_PUSH_SET)
                return [2, {token: c.token, pushSet: c.pushSet}]
            }
          })
        })
      }),
      (t.prototype.updateToken = function(t, e, n, r, i) {
        return at(this, void 0, void 0, function() {
          var o, a, s, u, c, h, l, p
          return st(this, function(f) {
            switch (f.label) {
              case 0:
                ;(o = Ai(r.getKey('p256dh'))),
                  (a = Ai(r.getKey('auth'))),
                  (s =
                    'push_set=' +
                    n +
                    '&token=' +
                    e +
                    '&authorized_entity=' +
                    t +
                    '&endpoint=' +
                    r.endpoint +
                    '&encryption_key=' +
                    o +
                    '&encryption_auth=' +
                    a),
                  i !== Ii && ((u = Ai(i)), (s += '&application_pub_key=' + u)),
                  (c = new Headers()).append(
                    'Content-Type',
                    'application/x-www-form-urlencoded'
                  ),
                  (h = {method: 'POST', headers: c, body: s}),
                  (f.label = 1)
              case 1:
                return (
                  f.trys.push([1, 4, , 5]),
                  [4, fetch(Ni + '/fcm/connect/subscribe', h)]
                )
              case 2:
                return [4, f.sent().json()]
              case 3:
                return (l = f.sent()), [3, 5]
              case 4:
                throw (f.sent(), Si.create(Ti.TOKEN_UPDATE_FAILED))
              case 5:
                if (l.error)
                  throw ((p = l.error.message),
                  Si.create(Ti.TOKEN_UPDATE_FAILED, {message: p}))
                if (!l.token) throw Si.create(Ti.TOKEN_UPDATE_NO_TOKEN)
                return [2, l.token]
            }
          })
        })
      }),
      (t.prototype.deleteToken = function(t, e, n) {
        return at(this, void 0, void 0, function() {
          var r, i, o, a, s
          return st(this, function(u) {
            switch (u.label) {
              case 0:
                ;(r =
                  'authorized_entity=' + t + '&token=' + e + '&pushSet=' + n),
                  (i = new Headers()).append(
                    'Content-Type',
                    'application/x-www-form-urlencoded'
                  ),
                  (o = {method: 'POST', headers: i, body: r}),
                  (u.label = 1)
              case 1:
                return (
                  u.trys.push([1, 4, , 5]),
                  [4, fetch(Ni + '/fcm/connect/unsubscribe', o)]
                )
              case 2:
                return [4, u.sent().json()]
              case 3:
                if ((a = u.sent()).error)
                  throw ((s = a.error.message),
                  Si.create(Ti.TOKEN_UNSUBSCRIBE_FAILED, {message: s}))
                return [3, 5]
              case 4:
                throw (u.sent(), Si.create(Ti.TOKEN_UNSUBSCRIBE_FAILED))
              case 5:
                return [2]
            }
          })
        })
      }),
      t
    )
  })()
  function Oi(t) {
    for (
      var e = (t + '='.repeat((4 - t.length % 4) % 4))
          .replace(/\-/g, '+')
          .replace(/_/g, '/'),
        n = window.atob(e),
        r = new Uint8Array(n.length),
        i = 0;
      i < n.length;
      ++i
    )
      r[i] = n.charCodeAt(i)
    return r
  }
  var Pi = 'undefined',
    Di = 'fcm_token_object_Store'
  function Li() {
    var t = indexedDB.open(Pi)
    ;(t.onerror = function(t) {}),
      (t.onsuccess = function(e) {
        !(function(t) {
          if (t.objectStoreNames.contains(Di)) {
            var e = t.transaction(Di).objectStore(Di),
              n = new ki(),
              r = e.openCursor()
            ;(r.onerror = function(t) {
              console.warn('Unable to cleanup old IDB.', t)
            }),
              (r.onsuccess = function() {
                var e = r.result
                if (e) {
                  var i = e.value
                  n.deleteToken(i.fcmSenderId, i.fcmToken, i.fcmPushSet),
                    e.continue()
                } else t.close(), indexedDB.deleteDatabase(Pi)
              })
          }
        })(t.result)
      })
  }
  var xi = (function() {
    function t() {
      this.dbPromise = null
    }
    return (
      (t.prototype.get = function(t) {
        return this.createTransaction(function(e) {
          return e.get(t)
        })
      }),
      (t.prototype.getIndex = function(t, e) {
        return this.createTransaction(function(n) {
          return n.index(t).get(e)
        })
      }),
      (t.prototype.put = function(t) {
        return this.createTransaction(function(e) {
          return e.put(t)
        }, 'readwrite')
      }),
      (t.prototype.delete = function(t) {
        return this.createTransaction(function(e) {
          return e.delete(t)
        }, 'readwrite')
      }),
      (t.prototype.closeDatabase = function() {
        return at(this, void 0, void 0, function() {
          return st(this, function(t) {
            switch (t.label) {
              case 0:
                return this.dbPromise ? [4, this.dbPromise] : [3, 2]
              case 1:
                t.sent().close(), (this.dbPromise = null), (t.label = 2)
              case 2:
                return [2]
            }
          })
        })
      }),
      (t.prototype.createTransaction = function(t, e) {
        return at(this, void 0, void 0, function() {
          var n, r, i, o
          return st(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, this.getDb()]
              case 1:
                return (
                  (n = a.sent()),
                  (r = n.transaction(this.objectStoreName, e)),
                  (i = r.objectStore(this.objectStoreName)),
                  [
                    4,
                    (function(t) {
                      return new Promise(function(e, n) {
                        ;(t.onsuccess = function() {
                          e(t.result)
                        }),
                          (t.onerror = function() {
                            n(t.error)
                          })
                      })
                    })(t(i))
                  ]
                )
              case 2:
                return (
                  (o = a.sent()),
                  [
                    2,
                    new Promise(function(t, e) {
                      ;(r.oncomplete = function() {
                        t(o)
                      }),
                        (r.onerror = function() {
                          e(r.error)
                        })
                    })
                  ]
                )
            }
          })
        })
      }),
      (t.prototype.getDb = function() {
        var t = this
        return (
          this.dbPromise ||
            (this.dbPromise = new Promise(function(e, n) {
              var r = indexedDB.open(t.dbName, t.dbVersion)
              ;(r.onsuccess = function() {
                e(r.result)
              }),
                (r.onerror = function() {
                  ;(t.dbPromise = null), n(r.error)
                }),
                (r.onupgradeneeded = function(e) {
                  return t.onDbUpgrade(r, e)
                })
            })),
          this.dbPromise
        )
      }),
      t
    )
  })()
  var Fi = (function(t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (
        (e.dbName = 'fcm_token_details_db'),
        (e.dbVersion = 3),
        (e.objectStoreName = 'fcm_token_object_Store'),
        e
      )
    }
    return (
      it(e, t),
      (e.prototype.onDbUpgrade = function(t, e) {
        var n = t.result
        switch (e.oldVersion) {
          case 0:
            ;(r = n.createObjectStore(this.objectStoreName, {
              keyPath: 'swScope'
            })).createIndex('fcmSenderId', 'fcmSenderId', {unique: !1}),
              r.createIndex('fcmToken', 'fcmToken', {unique: !0})
          case 1:
            Li()
          case 2:
            var r,
              i = (r = t.transaction.objectStore(
                this.objectStoreName
              )).openCursor()
            i.onsuccess = function() {
              var t = i.result
              if (t) {
                var e = t.value,
                  n = ot({}, e)
                e.createTime || (n.createTime = Date.now()),
                  'string' == typeof e.vapidKey &&
                    (n.vapidKey = Oi(e.vapidKey)),
                  'string' == typeof e.auth && (n.auth = Oi(e.auth).buffer),
                  'string' == typeof e.auth && (n.p256dh = Oi(e.p256dh).buffer),
                  t.update(n),
                  t.continue()
              }
            }
        }
      }),
      (e.prototype.getTokenDetailsFromToken = function(t) {
        return at(this, void 0, void 0, function() {
          return st(this, function(e) {
            if (!t) throw Si.create(Ti.BAD_TOKEN)
            return Ui({fcmToken: t}), [2, this.getIndex('fcmToken', t)]
          })
        })
      }),
      (e.prototype.getTokenDetailsFromSWScope = function(t) {
        return at(this, void 0, void 0, function() {
          return st(this, function(e) {
            if (!t) throw Si.create(Ti.BAD_SCOPE)
            return Ui({swScope: t}), [2, this.get(t)]
          })
        })
      }),
      (e.prototype.saveTokenDetails = function(t) {
        return at(this, void 0, void 0, function() {
          return st(this, function(e) {
            if (!t.swScope) throw Si.create(Ti.BAD_SCOPE)
            if (!t.vapidKey) throw Si.create(Ti.BAD_VAPID_KEY)
            if (!t.endpoint || !t.auth || !t.p256dh)
              throw Si.create(Ti.BAD_SUBSCRIPTION)
            if (!t.fcmSenderId) throw Si.create(Ti.BAD_SENDER_ID)
            if (!t.fcmToken) throw Si.create(Ti.BAD_TOKEN)
            if (!t.fcmPushSet) throw Si.create(Ti.BAD_PUSH_SET)
            return Ui(t), [2, this.put(t)]
          })
        })
      }),
      (e.prototype.deleteToken = function(t) {
        return at(this, void 0, void 0, function() {
          var e
          return st(this, function(n) {
            switch (n.label) {
              case 0:
                return 'string' != typeof t || 0 === t.length
                  ? [2, Promise.reject(Si.create(Ti.INVALID_DELETE_TOKEN))]
                  : [4, this.getTokenDetailsFromToken(t)]
              case 1:
                if (!(e = n.sent())) throw Si.create(Ti.DELETE_TOKEN_NOT_FOUND)
                return [4, this.delete(e.swScope)]
              case 2:
                return n.sent(), [2, e]
            }
          })
        })
      }),
      e
    )
  })(xi)
  function Ui(t) {
    if (
      t.fcmToken &&
      ('string' != typeof t.fcmToken || 0 === t.fcmToken.length)
    )
      throw Si.create(Ti.BAD_TOKEN)
    if (t.swScope && ('string' != typeof t.swScope || 0 === t.swScope.length))
      throw Si.create(Ti.BAD_SCOPE)
    if (
      t.vapidKey &&
      (!(t.vapidKey instanceof Uint8Array) || 65 !== t.vapidKey.length)
    )
      throw Si.create(Ti.BAD_VAPID_KEY)
    if (
      t.endpoint &&
      ('string' != typeof t.endpoint || 0 === t.endpoint.length)
    )
      throw Si.create(Ti.BAD_SUBSCRIPTION)
    if (t.auth && !(t.auth instanceof ArrayBuffer))
      throw Si.create(Ti.BAD_SUBSCRIPTION)
    if (t.p256dh && !(t.p256dh instanceof ArrayBuffer))
      throw Si.create(Ti.BAD_SUBSCRIPTION)
    if (
      t.fcmSenderId &&
      ('string' != typeof t.fcmSenderId || 0 === t.fcmSenderId.length)
    )
      throw Si.create(Ti.BAD_SENDER_ID)
    if (
      t.fcmPushSet &&
      ('string' != typeof t.fcmPushSet || 0 === t.fcmPushSet.length)
    )
      throw Si.create(Ti.BAD_PUSH_SET)
  }
  var Mi = (function(t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this
        return (
          (e.dbName = 'fcm_vapid_details_db'),
          (e.dbVersion = 1),
          (e.objectStoreName = 'fcm_vapid_object_Store'),
          e
        )
      }
      return (
        it(e, t),
        (e.prototype.onDbUpgrade = function(t) {
          t.result.createObjectStore(this.objectStoreName, {keyPath: 'swScope'})
        }),
        (e.prototype.getVapidFromSWScope = function(t) {
          return at(this, void 0, void 0, function() {
            var e
            return st(this, function(n) {
              switch (n.label) {
                case 0:
                  if ('string' != typeof t || 0 === t.length)
                    throw Si.create(Ti.BAD_SCOPE)
                  return [4, this.get(t)]
                case 1:
                  return [2, (e = n.sent()) ? e.vapidKey : void 0]
              }
            })
          })
        }),
        (e.prototype.saveVapidDetails = function(t, e) {
          return at(this, void 0, void 0, function() {
            var n
            return st(this, function(r) {
              if ('string' != typeof t || 0 === t.length)
                throw Si.create(Ti.BAD_SCOPE)
              if (null === e || 65 !== e.length)
                throw Si.create(Ti.BAD_VAPID_KEY)
              return (n = {swScope: t, vapidKey: e}), [2, this.put(n)]
            })
          })
        }),
        (e.prototype.deleteVapidDetails = function(t) {
          return at(this, void 0, void 0, function() {
            var e
            return st(this, function(n) {
              switch (n.label) {
                case 0:
                  return [4, this.getVapidFromSWScope(t)]
                case 1:
                  if (!(e = n.sent()))
                    throw Si.create(Ti.DELETE_SCOPE_NOT_FOUND)
                  return [4, this.delete(t)]
                case 2:
                  return n.sent(), [2, e]
              }
            })
          })
        }),
        e
      )
    })(xi),
    Wi = 'messagingSenderId',
    Bi = (function() {
      function t(t) {
        var e = this
        if (!t.options[Wi] || 'string' != typeof t.options[Wi])
          throw Si.create(Ti.BAD_SENDER_ID)
        ;(this.messagingSenderId = t.options[Wi]),
          (this.tokenDetailsModel = new Fi()),
          (this.vapidDetailsModel = new Mi()),
          (this.iidModel = new ki()),
          (this.app = t),
          (this.INTERNAL = {
            delete: function() {
              return e.delete()
            }
          })
      }
      return (
        (t.prototype.getToken = function() {
          return at(this, void 0, void 0, function() {
            var t, e, n, r, i
            return st(this, function(o) {
              switch (o.label) {
                case 0:
                  return 'granted' !== (t = this.getNotificationPermission_())
                    ? 'denied' === t
                      ? [2, Promise.reject(Si.create(Ti.NOTIFICATIONS_BLOCKED))]
                      : [2, Promise.resolve(null)]
                    : [4, this.getSWRegistration_()]
                case 1:
                  return (e = o.sent()), [4, this.getPublicVapidKey_()]
                case 2:
                  return (n = o.sent()), [4, this.getPushSubscription(e, n)]
                case 3:
                  return (
                    (r = o.sent()),
                    [
                      4,
                      this.tokenDetailsModel.getTokenDetailsFromSWScope(e.scope)
                    ]
                  )
                case 4:
                  return (i = o.sent())
                    ? [2, this.manageExistingToken(e, r, n, i)]
                    : [2, this.getNewToken(e, r, n)]
              }
            })
          })
        }),
        (t.prototype.manageExistingToken = function(t, e, n, r) {
          return at(this, void 0, void 0, function() {
            return st(this, function(i) {
              switch (i.label) {
                case 0:
                  return (function(t, e, n) {
                    if (!Ri(e.buffer, n.vapidKey.buffer)) return !1
                    var r = t.endpoint === n.endpoint,
                      i = Ri(t.getKey('auth'), n.auth),
                      o = Ri(t.getKey('p256dh'), n.p256dh)
                    return r && i && o
                  })(e, n, r)
                    ? Date.now() < r.createTime + 6048e5
                      ? [2, r.fcmToken]
                      : [2, this.updateToken(t, e, n, r)]
                    : [4, this.deleteTokenFromDB(r.fcmToken)]
                case 1:
                  return i.sent(), [2, this.getNewToken(t, e, n)]
              }
            })
          })
        }),
        (t.prototype.updateToken = function(t, e, n, r) {
          return at(this, void 0, void 0, function() {
            var i, o, a
            return st(this, function(s) {
              switch (s.label) {
                case 0:
                  return (
                    s.trys.push([0, 4, , 6]),
                    [
                      4,
                      this.iidModel.updateToken(
                        this.messagingSenderId,
                        r.fcmToken,
                        r.fcmPushSet,
                        e,
                        n
                      )
                    ]
                  )
                case 1:
                  return (
                    (i = s.sent()),
                    (o = {
                      swScope: t.scope,
                      vapidKey: n,
                      fcmSenderId: this.messagingSenderId,
                      fcmToken: i,
                      fcmPushSet: r.fcmPushSet,
                      createTime: Date.now(),
                      endpoint: e.endpoint,
                      auth: e.getKey('auth'),
                      p256dh: e.getKey('p256dh')
                    }),
                    [4, this.tokenDetailsModel.saveTokenDetails(o)]
                  )
                case 2:
                  return (
                    s.sent(),
                    [4, this.vapidDetailsModel.saveVapidDetails(t.scope, n)]
                  )
                case 3:
                  return s.sent(), [2, i]
                case 4:
                  return (a = s.sent()), [4, this.deleteToken(r.fcmToken)]
                case 5:
                  throw (s.sent(), a)
                case 6:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.getNewToken = function(t, e, n) {
          return at(this, void 0, void 0, function() {
            var r, i
            return st(this, function(o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    this.iidModel.getToken(this.messagingSenderId, e, n)
                  ]
                case 1:
                  return (
                    (r = o.sent()),
                    (i = {
                      swScope: t.scope,
                      vapidKey: n,
                      fcmSenderId: this.messagingSenderId,
                      fcmToken: r.token,
                      fcmPushSet: r.pushSet,
                      createTime: Date.now(),
                      endpoint: e.endpoint,
                      auth: e.getKey('auth'),
                      p256dh: e.getKey('p256dh')
                    }),
                    [4, this.tokenDetailsModel.saveTokenDetails(i)]
                  )
                case 2:
                  return (
                    o.sent(),
                    [4, this.vapidDetailsModel.saveVapidDetails(t.scope, n)]
                  )
                case 3:
                  return o.sent(), [2, r.token]
              }
            })
          })
        }),
        (t.prototype.deleteToken = function(t) {
          return at(this, void 0, void 0, function() {
            var e, n
            return st(this, function(r) {
              switch (r.label) {
                case 0:
                  return [4, this.deleteTokenFromDB(t)]
                case 1:
                  return r.sent(), [4, this.getSWRegistration_()]
                case 2:
                  return (e = r.sent())
                    ? [4, e.pushManager.getSubscription()]
                    : [3, 4]
                case 3:
                  if ((n = r.sent())) return [2, n.unsubscribe()]
                  r.label = 4
                case 4:
                  return [2, !0]
              }
            })
          })
        }),
        (t.prototype.deleteTokenFromDB = function(t) {
          return at(this, void 0, void 0, function() {
            var e
            return st(this, function(n) {
              switch (n.label) {
                case 0:
                  return [4, this.tokenDetailsModel.deleteToken(t)]
                case 1:
                  return (
                    (e = n.sent()),
                    [
                      4,
                      this.iidModel.deleteToken(
                        e.fcmSenderId,
                        e.fcmToken,
                        e.fcmPushSet
                      )
                    ]
                  )
                case 2:
                  return n.sent(), [2]
              }
            })
          })
        }),
        (t.prototype.getPushSubscription = function(t, e) {
          return t.pushManager.getSubscription().then(function(n) {
            return (
              n ||
              t.pushManager.subscribe({
                userVisibleOnly: !0,
                applicationServerKey: e
              })
            )
          })
        }),
        (t.prototype.requestPermission = function() {
          throw Si.create(Ti.AVAILABLE_IN_WINDOW)
        }),
        (t.prototype.useServiceWorker = function(t) {
          throw Si.create(Ti.AVAILABLE_IN_WINDOW)
        }),
        (t.prototype.usePublicVapidKey = function(t) {
          throw Si.create(Ti.AVAILABLE_IN_WINDOW)
        }),
        (t.prototype.onMessage = function(t, e, n) {
          throw Si.create(Ti.AVAILABLE_IN_WINDOW)
        }),
        (t.prototype.onTokenRefresh = function(t, e, n) {
          throw Si.create(Ti.AVAILABLE_IN_WINDOW)
        }),
        (t.prototype.setBackgroundMessageHandler = function(t) {
          throw Si.create(Ti.AVAILABLE_IN_SW)
        }),
        (t.prototype.delete = function() {
          return at(this, void 0, void 0, function() {
            return st(this, function(t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    Promise.all([
                      this.tokenDetailsModel.closeDatabase(),
                      this.vapidDetailsModel.closeDatabase()
                    ])
                  ]
                case 1:
                  return t.sent(), [2]
              }
            })
          })
        }),
        (t.prototype.getNotificationPermission_ = function() {
          return Notification.permission
        }),
        (t.prototype.getTokenDetailsModel = function() {
          return this.tokenDetailsModel
        }),
        (t.prototype.getVapidDetailsModel = function() {
          return this.vapidDetailsModel
        }),
        (t.prototype.getIIDModel = function() {
          return this.iidModel
        }),
        t
      )
    })()
  var ji = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this
      return (
        (n.bgMessageHandler = null),
        self.addEventListener('push', function(t) {
          n.onPush(t)
        }),
        self.addEventListener('pushsubscriptionchange', function(t) {
          n.onSubChange(t)
        }),
        self.addEventListener('notificationclick', function(t) {
          n.onNotificationClick(t)
        }),
        n
      )
    }
    return (
      it(e, t),
      (e.prototype.onPush = function(t) {
        t.waitUntil(this.onPush_(t))
      }),
      (e.prototype.onSubChange = function(t) {
        t.waitUntil(this.onSubChange_(t))
      }),
      (e.prototype.onNotificationClick = function(t) {
        t.waitUntil(this.onNotificationClick_(t))
      }),
      (e.prototype.onPush_ = function(t) {
        return at(this, void 0, void 0, function() {
          var e, n, r
          return st(this, function(i) {
            switch (i.label) {
              case 0:
                if (!t.data) return [2]
                try {
                  e = t.data.json()
                } catch (t) {
                  return [2]
                }
                return [4, this.hasVisibleClients_()]
              case 1:
                return i.sent()
                  ? e.notification || this.bgMessageHandler
                    ? [2, this.sendMessageToWindowClients_(e)]
                    : [2]
                  : (n = this.getNotificationData_(e))
                    ? ((r = n.title || ''), [4, this.getSWRegistration_()])
                    : [3, 3]
              case 2:
                return [2, i.sent().showNotification(r, n)]
              case 3:
                return this.bgMessageHandler
                  ? [4, this.bgMessageHandler(e)]
                  : [3, 5]
              case 4:
                return i.sent(), [2]
              case 5:
                return [2]
            }
          })
        })
      }),
      (e.prototype.onSubChange_ = function(t) {
        return at(this, void 0, void 0, function() {
          var t, e, n, r
          return st(this, function(i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, 2, , 3]), [4, this.getSWRegistration_()]
              case 1:
                return (t = i.sent()), [3, 3]
              case 2:
                throw ((e = i.sent()),
                Si.create(Ti.UNABLE_TO_RESUBSCRIBE, {message: e}))
              case 3:
                return (
                  i.trys.push([3, 5, , 8]), [4, t.pushManager.getSubscription()]
                )
              case 4:
                return i.sent(), [3, 8]
              case 5:
                return (
                  (n = i.sent()),
                  [
                    4,
                    this.getTokenDetailsModel().getTokenDetailsFromSWScope(
                      t.scope
                    )
                  ]
                )
              case 6:
                if (!(r = i.sent())) throw n
                return [4, this.deleteToken(r.fcmToken)]
              case 7:
                throw (i.sent(), n)
              case 8:
                return [2]
            }
          })
        })
      }),
      (e.prototype.onNotificationClick_ = function(t) {
        return at(this, void 0, void 0, function() {
          var e, n, r, i
          return st(this, function(o) {
            switch (o.label) {
              case 0:
                return t.notification &&
                  t.notification.data &&
                  t.notification.data.FCM_MSG
                  ? (t.stopImmediatePropagation(),
                    t.notification.close(),
                    (e = t.notification.data.FCM_MSG).notification &&
                    (n = e.notification.click_action)
                      ? [4, this.getWindowClient_(n)]
                      : [2])
                  : [2]
              case 1:
                return (r = o.sent()) ? [3, 3] : [4, self.clients.openWindow(n)]
              case 2:
                return (r = o.sent()), [3, 5]
              case 3:
                return [4, r.focus()]
              case 4:
                ;(r = o.sent()), (o.label = 5)
              case 5:
                return r
                  ? (delete e.notification,
                    (i = qi(Ei.NOTIFICATION_CLICKED, e)),
                    [2, this.attemptToMessageClient_(r, i)])
                  : [2]
            }
          })
        })
      }),
      (e.prototype.getNotificationData_ = function(t) {
        if (t && 'object' == typeof t.notification) {
          var e,
            n = ot({}, t.notification)
          return (n.data = (((e = {}).FCM_MSG = t), e)), n
        }
      }),
      (e.prototype.setBackgroundMessageHandler = function(t) {
        if (!t || 'function' != typeof t)
          throw Si.create(Ti.BG_HANDLER_FUNCTION_EXPECTED)
        this.bgMessageHandler = t
      }),
      (e.prototype.getWindowClient_ = function(t) {
        return at(this, void 0, void 0, function() {
          var e, n, r, i
          return st(this, function(o) {
            switch (o.label) {
              case 0:
                return (e = new URL(t, self.location.href).href), [4, Vi()]
              case 1:
                for (n = o.sent(), r = null, i = 0; i < n.length; i++)
                  if (new URL(n[i].url, self.location.href).href === e) {
                    r = n[i]
                    break
                  }
                return [2, r]
            }
          })
        })
      }),
      (e.prototype.attemptToMessageClient_ = function(t, e) {
        return at(this, void 0, void 0, function() {
          return st(this, function(n) {
            if (!t) throw Si.create(Ti.NO_WINDOW_CLIENT_TO_MSG)
            return t.postMessage(e), [2]
          })
        })
      }),
      (e.prototype.hasVisibleClients_ = function() {
        return at(this, void 0, void 0, function() {
          return st(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, Vi()]
              case 1:
                return [
                  2,
                  t.sent().some(function(t) {
                    return 'visible' === t.visibilityState
                  })
                ]
            }
          })
        })
      }),
      (e.prototype.sendMessageToWindowClients_ = function(t) {
        return at(this, void 0, void 0, function() {
          var e,
            n,
            r = this
          return st(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, Vi()]
              case 1:
                return (
                  (e = i.sent()),
                  (n = qi(Ei.PUSH_MSG_RECEIVED, t)),
                  [
                    4,
                    Promise.all(
                      e.map(function(t) {
                        return r.attemptToMessageClient_(t, n)
                      })
                    )
                  ]
                )
              case 2:
                return i.sent(), [2]
            }
          })
        })
      }),
      (e.prototype.getSWRegistration_ = function() {
        return at(this, void 0, void 0, function() {
          return st(this, function(t) {
            return [2, self.registration]
          })
        })
      }),
      (e.prototype.getPublicVapidKey_ = function() {
        return at(this, void 0, void 0, function() {
          var t, e
          return st(this, function(n) {
            switch (n.label) {
              case 0:
                return [4, this.getSWRegistration_()]
              case 1:
                if (!(t = n.sent()))
                  throw Si.create(Ti.SW_REGISTRATION_EXPECTED)
                return [
                  4,
                  this.getVapidDetailsModel().getVapidFromSWScope(t.scope)
                ]
              case 2:
                return null == (e = n.sent()) ? [2, Ii] : [2, e]
            }
          })
        })
      }),
      e
    )
  })(Bi)
  function Vi() {
    return self.clients.matchAll({type: 'window', includeUncontrolled: !0})
  }
  function qi(t, e) {
    return ((n = {})[wi.TYPE_OF_MSG] = t), (n[wi.DATA] = e), n
    var n
  }
  var Hi = (function(t) {
    function e(e) {
      var n = t.call(this, e) || this
      return (
        (n.registrationToUse = null),
        (n.publicVapidKeyToUse = null),
        (n.manifestCheckPromise = null),
        (n.messageObserver = null),
        (n.tokenRefreshObserver = null),
        (n.onMessageInternal = Wt(function(t) {
          n.messageObserver = t
        })),
        (n.onTokenRefreshInternal = Wt(function(t) {
          n.tokenRefreshObserver = t
        })),
        n.setupSWMessageListener_(),
        n
      )
    }
    return (
      it(e, t),
      (e.prototype.getToken = function() {
        var e = this
        return this.isSupported_()
          ? this.manifestCheck_().then(function() {
              return t.prototype.getToken.call(e)
            })
          : Promise.reject(Si.create(Ti.UNSUPPORTED_BROWSER))
      }),
      (e.prototype.manifestCheck_ = function() {
        if (this.manifestCheckPromise) return this.manifestCheckPromise
        var t = document.querySelector('link[rel="manifest"]')
        return (
          (this.manifestCheckPromise = t
            ? fetch(t.href)
                .then(function(t) {
                  return t.json()
                })
                .catch(function() {})
                .then(function(t) {
                  if (
                    t &&
                    t.gcm_sender_id &&
                    '103953800507' !== t.gcm_sender_id
                  )
                    throw Si.create(Ti.INCORRECT_GCM_SENDER_ID)
                })
            : Promise.resolve()),
          this.manifestCheckPromise
        )
      }),
      (e.prototype.requestPermission = function() {
        return at(this, void 0, void 0, function() {
          return st(this, function(t) {
            return 'granted' === Notification.permission
              ? [2]
              : [
                  2,
                  new Promise(function(t, e) {
                    var n = function(n) {
                        return 'granted' === n
                          ? t()
                          : e(
                              'denied' === n
                                ? Si.create(Ti.PERMISSION_BLOCKED)
                                : Si.create(Ti.PERMISSION_DEFAULT)
                            )
                      },
                      r = Notification.requestPermission(n)
                    r && r.then(n)
                  })
                ]
          })
        })
      }),
      (e.prototype.useServiceWorker = function(t) {
        if (!(t instanceof ServiceWorkerRegistration))
          throw Si.create(Ti.SW_REGISTRATION_EXPECTED)
        if (null != this.registrationToUse)
          throw Si.create(Ti.USE_SW_BEFORE_GET_TOKEN)
        this.registrationToUse = t
      }),
      (e.prototype.usePublicVapidKey = function(t) {
        if ('string' != typeof t) throw Si.create(Ti.INVALID_PUBLIC_VAPID_KEY)
        if (null != this.publicVapidKeyToUse)
          throw Si.create(Ti.USE_PUBLIC_KEY_BEFORE_GET_TOKEN)
        var e = Oi(t)
        if (65 !== e.length) throw Si.create(Ti.PUBLIC_KEY_DECRYPTION_FAILED)
        this.publicVapidKeyToUse = e
      }),
      (e.prototype.onMessage = function(t, e, n) {
        return 'function' == typeof t
          ? this.onMessageInternal(t, e, n)
          : this.onMessageInternal(t)
      }),
      (e.prototype.onTokenRefresh = function(t, e, n) {
        return 'function' == typeof t
          ? this.onTokenRefreshInternal(t, e, n)
          : this.onTokenRefreshInternal(t)
      }),
      (e.prototype.waitForRegistrationToActivate_ = function(t) {
        var e = t.installing || t.waiting || t.active
        return new Promise(function(n, r) {
          if (e)
            if ('activated' !== e.state)
              if ('redundant' !== e.state) {
                var i = function() {
                  if ('activated' === e.state) n(t)
                  else {
                    if ('redundant' !== e.state) return
                    r(Si.create(Ti.SW_REG_REDUNDANT))
                  }
                  e.removeEventListener('statechange', i)
                }
                e.addEventListener('statechange', i)
              } else r(Si.create(Ti.SW_REG_REDUNDANT))
            else n(t)
          else r(Si.create(Ti.NO_SW_IN_REG))
        })
      }),
      (e.prototype.getSWRegistration_ = function() {
        var t = this
        return this.registrationToUse
          ? this.waitForRegistrationToActivate_(this.registrationToUse)
          : ((this.registrationToUse = null),
            navigator.serviceWorker
              .register('/firebase-messaging-sw.js', {
                scope: '/firebase-cloud-messaging-push-scope'
              })
              .catch(function(t) {
                throw Si.create(Ti.FAILED_DEFAULT_REGISTRATION, {
                  browserErrorMessage: t.message
                })
              })
              .then(function(e) {
                return t.waitForRegistrationToActivate_(e).then(function() {
                  return (t.registrationToUse = e), e.update(), e
                })
              }))
      }),
      (e.prototype.getPublicVapidKey_ = function() {
        return this.publicVapidKeyToUse
          ? Promise.resolve(this.publicVapidKeyToUse)
          : Promise.resolve(Ii)
      }),
      (e.prototype.setupSWMessageListener_ = function() {
        var t = this
        'serviceWorker' in navigator &&
          navigator.serviceWorker.addEventListener(
            'message',
            function(e) {
              if (e.data && e.data[wi.TYPE_OF_MSG]) {
                var n = e.data
                switch (n[wi.TYPE_OF_MSG]) {
                  case Ei.PUSH_MSG_RECEIVED:
                  case Ei.NOTIFICATION_CLICKED:
                    var r = n[wi.DATA]
                    t.messageObserver && t.messageObserver.next(r)
                }
              }
            },
            !1
          )
      }),
      (e.prototype.isSupported_ = function() {
        return (
          'serviceWorker' in navigator &&
          'PushManager' in window &&
          'Notification' in window &&
          'fetch' in window &&
          ServiceWorkerRegistration.prototype.hasOwnProperty(
            'showNotification'
          ) &&
          PushSubscription.prototype.hasOwnProperty('getKey')
        )
      }),
      e
    )
  })(Bi)
  !(function(t) {
    var e = {Messaging: Hi}
    t.INTERNAL.registerService(
      'messaging',
      function(t) {
        return self && 'ServiceWorkerGlobalScope' in self
          ? new ji(t)
          : new Hi(t)
      },
      e
    )
  })(te)
  var Ki = 'https://firebasestorage.googleapis.com',
    Gi = 'https://firebasestorage.googleapis.com',
    Qi = '/v0',
    zi = '/v0',
    Yi = 12e4,
    Xi = 6e4,
    $i = -9007199254740991,
    Ji = (function() {
      function t(t, e) {
        ;(this.code_ = to(t)),
          (this.message_ = 'Firebase Storage: ' + e),
          (this.serverResponse_ = null),
          (this.name_ = 'FirebaseError')
      }
      return (
        (t.prototype.codeProp = function() {
          return this.code
        }),
        (t.prototype.codeEquals = function(t) {
          return to(t) === this.codeProp()
        }),
        (t.prototype.serverResponseProp = function() {
          return this.serverResponse_
        }),
        (t.prototype.setServerResponseProp = function(t) {
          this.serverResponse_ = t
        }),
        Object.defineProperty(t.prototype, 'name', {
          get: function() {
            return this.name_
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'code', {
          get: function() {
            return this.code_
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'message', {
          get: function() {
            return this.message_
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'serverResponse', {
          get: function() {
            return this.serverResponse_
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      )
    })(),
    Zi = {
      UNKNOWN: 'unknown',
      OBJECT_NOT_FOUND: 'object-not-found',
      BUCKET_NOT_FOUND: 'bucket-not-found',
      PROJECT_NOT_FOUND: 'project-not-found',
      QUOTA_EXCEEDED: 'quota-exceeded',
      UNAUTHENTICATED: 'unauthenticated',
      UNAUTHORIZED: 'unauthorized',
      RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
      INVALID_CHECKSUM: 'invalid-checksum',
      CANCELED: 'canceled',
      INVALID_EVENT_NAME: 'invalid-event-name',
      INVALID_URL: 'invalid-url',
      INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
      NO_DEFAULT_BUCKET: 'no-default-bucket',
      CANNOT_SLICE_BLOB: 'cannot-slice-blob',
      SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
      NO_DOWNLOAD_URL: 'no-download-url',
      INVALID_ARGUMENT: 'invalid-argument',
      INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
      APP_DELETED: 'app-deleted',
      INVALID_ROOT_OPERATION: 'invalid-root-operation',
      INVALID_FORMAT: 'invalid-format',
      INTERNAL_ERROR: 'internal-error'
    }
  function to(t) {
    return 'storage/' + t
  }
  function eo() {
    return new Ji(
      Zi.UNKNOWN,
      'An unknown error occurred, please check the error payload for server response.'
    )
  }
  function no() {
    return new Ji(Zi.CANCELED, 'User canceled the upload/download.')
  }
  function ro() {
    return new Ji(
      Zi.CANNOT_SLICE_BLOB,
      'Cannot slice blob for upload. Please retry the upload.'
    )
  }
  function io(t, e, n) {
    return new Ji(
      Zi.INVALID_ARGUMENT,
      'Invalid argument in `' + e + '` at index ' + t + ': ' + n
    )
  }
  function oo() {
    return new Ji(Zi.APP_DELETED, 'The Firebase app was deleted.')
  }
  function ao(t, e) {
    return new Ji(
      Zi.INVALID_FORMAT,
      "String does not match format '" + t + "': " + e
    )
  }
  function so(t) {
    throw new Ji(Zi.INTERNAL_ERROR, 'Internal error: ' + t)
  }
  var uo = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
  }
  function co(t) {
    switch (t) {
      case uo.RAW:
      case uo.BASE64:
      case uo.BASE64URL:
      case uo.DATA_URL:
        return
      default:
        throw 'Expected one of the event types: [' +
          uo.RAW +
          ', ' +
          uo.BASE64 +
          ', ' +
          uo.BASE64URL +
          ', ' +
          uo.DATA_URL +
          '].'
    }
  }
  var ho = (function() {
    return function(t, e) {
      ;(this.data = t), (this.contentType = e || null)
    }
  })()
  function lo(t, e) {
    switch (t) {
      case uo.RAW:
        return new ho(po(e))
      case uo.BASE64:
      case uo.BASE64URL:
        return new ho(fo(t, e))
      case uo.DATA_URL:
        return new ho(
          (function(t) {
            var e = new vo(t)
            return e.base64
              ? fo(uo.BASE64, e.rest)
              : (function(t) {
                  var e
                  try {
                    e = decodeURIComponent(t)
                  } catch (t) {
                    throw ao(uo.DATA_URL, 'Malformed data URL.')
                  }
                  return po(e)
                })(e.rest)
          })(e),
          (function(t) {
            return new vo(t).contentType
          })(e)
        )
    }
    throw eo()
  }
  function po(t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var r = t.charCodeAt(n)
      if (r <= 127) e.push(r)
      else if (r <= 2047) e.push(192 | (r >> 6), 128 | (63 & r))
      else if (55296 == (64512 & r))
        if (n < t.length - 1 && 56320 == (64512 & t.charCodeAt(n + 1)))
          (r = 65536 | ((1023 & r) << 10) | (1023 & t.charCodeAt(++n))),
            e.push(
              240 | (r >> 18),
              128 | ((r >> 12) & 63),
              128 | ((r >> 6) & 63),
              128 | (63 & r)
            )
        else e.push(239, 191, 189)
      else
        56320 == (64512 & r)
          ? e.push(239, 191, 189)
          : e.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r))
    }
    return new Uint8Array(e)
  }
  function fo(t, e) {
    switch (t) {
      case uo.BASE64:
        var n = -1 !== e.indexOf('-'),
          r = -1 !== e.indexOf('_')
        if (n || r)
          throw ao(
            t,
            "Invalid character '" +
              (n ? '-' : '_') +
              "' found: is it base64url encoded?"
          )
        break
      case uo.BASE64URL:
        var i = -1 !== e.indexOf('+'),
          o = -1 !== e.indexOf('/')
        if (i || o)
          throw ao(
            t,
            "Invalid character '" +
              (i ? '+' : '/') +
              "' found: is it base64 encoded?"
          )
        e = e.replace(/-/g, '+').replace(/_/g, '/')
    }
    var a
    try {
      a = atob(e)
    } catch (e) {
      throw ao(t, 'Invalid character found')
    }
    for (var s = new Uint8Array(a.length), u = 0; u < a.length; u++)
      s[u] = a.charCodeAt(u)
    return s
  }
  var vo = (function() {
    return function(t) {
      ;(this.base64 = !1), (this.contentType = null)
      var e = t.match(/^data:([^,]+)?,/)
      if (null === e)
        throw ao(
          uo.DATA_URL,
          "Must be formatted 'data:[<mediatype>][;base64],<data>"
        )
      var n = e[1] || null
      null != n &&
        ((this.base64 = ((r = n),
        (i = ';base64'),
        r.length >= i.length && r.substring(r.length - i.length) === i)),
        (this.contentType = this.base64
          ? n.substring(0, n.length - ';base64'.length)
          : n)),
        (this.rest = t.substring(t.indexOf(',') + 1))
      var r, i
    }
  })()
  var yo,
    _o = {STATE_CHANGED: 'state_changed'},
    go = {
      RUNNING: 'running',
      PAUSING: 'pausing',
      PAUSED: 'paused',
      SUCCESS: 'success',
      CANCELING: 'canceling',
      CANCELED: 'canceled',
      ERROR: 'error'
    },
    mo = {
      RUNNING: 'running',
      PAUSED: 'paused',
      SUCCESS: 'success',
      CANCELED: 'canceled',
      ERROR: 'error'
    }
  function bo(t) {
    switch (t) {
      case go.RUNNING:
      case go.PAUSING:
      case go.CANCELING:
        return mo.RUNNING
      case go.PAUSED:
        return mo.PAUSED
      case go.SUCCESS:
        return mo.SUCCESS
      case go.CANCELED:
        return mo.CANCELED
      case go.ERROR:
      default:
        return mo.ERROR
    }
  }
  function wo(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }
  function Eo(t, e) {
    for (var n in t) wo(t, n) && e(n, t[n])
  }
  function To(t) {
    if (null == t) return {}
    var e = {}
    return (
      Eo(t, function(t, n) {
        e[t] = n
      }),
      e
    )
  }
  function Co(t) {
    return new Promise(t)
  }
  function So(t) {
    return Promise.resolve(t)
  }
  function Io(t) {
    return null != t
  }
  function No(t) {
    return void 0 !== t
  }
  function Ro(t) {
    return 'function' == typeof t
  }
  function Ao(t) {
    return 'object' == typeof t
  }
  function ko(t) {
    return Ao(t) && null !== t
  }
  function Oo(t) {
    return 'string' == typeof t || t instanceof String
  }
  function Po(t) {
    return Do() && t instanceof Blob
  }
  function Do() {
    return 'undefined' != typeof Blob
  }
  !(function(t) {
    ;(t[(t.NO_ERROR = 0)] = 'NO_ERROR'),
      (t[(t.NETWORK_ERROR = 1)] = 'NETWORK_ERROR'),
      (t[(t.ABORT = 2)] = 'ABORT')
  })(yo || (yo = {}))
  var Lo = (function() {
      function t() {
        var t = this
        ;(this.sent_ = !1),
          (this.xhr_ = new XMLHttpRequest()),
          (this.errorCode_ = yo.NO_ERROR),
          (this.sendPromise_ = Co(function(e, n) {
            t.xhr_.addEventListener('abort', function(n) {
              ;(t.errorCode_ = yo.ABORT), e(t)
            }),
              t.xhr_.addEventListener('error', function(n) {
                ;(t.errorCode_ = yo.NETWORK_ERROR), e(t)
              }),
              t.xhr_.addEventListener('load', function(n) {
                e(t)
              })
          }))
      }
      return (
        (t.prototype.send = function(t, e, n, r) {
          var i = this
          if (this.sent_) throw so('cannot .send() more than once')
          ;((this.sent_ = !0), this.xhr_.open(e, t, !0), Io(r)) &&
            Eo(r, function(t, e) {
              i.xhr_.setRequestHeader(t, e.toString())
            })
          return Io(n) ? this.xhr_.send(n) : this.xhr_.send(), this.sendPromise_
        }),
        (t.prototype.getErrorCode = function() {
          if (!this.sent_) throw so('cannot .getErrorCode() before sending')
          return this.errorCode_
        }),
        (t.prototype.getStatus = function() {
          if (!this.sent_) throw so('cannot .getStatus() before sending')
          try {
            return this.xhr_.status
          } catch (t) {
            return -1
          }
        }),
        (t.prototype.getResponseText = function() {
          if (!this.sent_) throw so('cannot .getResponseText() before sending')
          return this.xhr_.responseText
        }),
        (t.prototype.abort = function() {
          this.xhr_.abort()
        }),
        (t.prototype.getResponseHeader = function(t) {
          return this.xhr_.getResponseHeader(t)
        }),
        (t.prototype.addUploadProgressListener = function(t) {
          Io(this.xhr_.upload) &&
            this.xhr_.upload.addEventListener('progress', t)
        }),
        (t.prototype.removeUploadProgressListener = function(t) {
          Io(this.xhr_.upload) &&
            this.xhr_.upload.removeEventListener('progress', t)
        }),
        t
      )
    })(),
    xo = (function() {
      function t() {}
      return (
        (t.prototype.createXhrIo = function() {
          return new Lo()
        }),
        t
      )
    })()
  function Fo(t) {
    var e, n
    try {
      e = JSON.parse(t)
    } catch (t) {
      return null
    }
    return Ao((n = e)) && !Array.isArray(n) ? e : null
  }
  var Uo = (function() {
    function t(t, e) {
      ;(this.bucket = t), (this.path_ = e)
    }
    return (
      Object.defineProperty(t.prototype, 'path', {
        get: function() {
          return this.path_
        },
        enumerable: !0,
        configurable: !0
      }),
      (t.prototype.fullServerUrl = function() {
        var t = encodeURIComponent
        return '/b/' + t(this.bucket) + '/o/' + t(this.path)
      }),
      (t.prototype.bucketOnlyServerUrl = function() {
        return '/b/' + encodeURIComponent(this.bucket) + '/o'
      }),
      (t.makeFromBucketSpec = function(e) {
        var n, r
        try {
          n = t.makeFromUrl(e)
        } catch (n) {
          return new t(e, '')
        }
        if ('' === n.path) return n
        throw ((r = e),
        new Ji(
          Zi.INVALID_DEFAULT_BUCKET,
          "Invalid default bucket '" + r + "'."
        ))
      }),
      (t.makeFromUrl = function(e) {
        var n = null
        for (
          var r = [
              {
                regex: new RegExp('^gs://([A-Za-z0-9.\\-]+)(/(.*))?$', 'i'),
                indices: {bucket: 1, path: 3},
                postModify: function(t) {
                  '/' === t.path.charAt(t.path.length - 1) &&
                    (t.path_ = t.path_.slice(0, -1))
                }
              },
              {
                regex: new RegExp(
                  '^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$',
                  'i'
                ),
                indices: {bucket: 1, path: 3},
                postModify: function(t) {
                  t.path_ = decodeURIComponent(t.path)
                }
              }
            ],
            i = 0;
          i < r.length;
          i++
        ) {
          var o = r[i],
            a = o.regex.exec(e)
          if (a) {
            var s = a[o.indices.bucket],
              u = a[o.indices.path]
            u || (u = ''), (n = new t(s, u)), o.postModify(n)
            break
          }
        }
        if (null == n)
          throw (function(t) {
            return new Ji(Zi.INVALID_URL, "Invalid URL '" + t + "'.")
          })(e)
        return n
      }),
      t
    )
  })()
  function Mo(t) {
    var e = t.lastIndexOf('/', t.length - 2)
    return -1 === e ? t : t.slice(e + 1)
  }
  function Wo(t) {
    return Ki + Qi + t
  }
  function Bo(t) {
    return Ki + zi + t
  }
  function jo(t) {
    var e = encodeURIComponent,
      n = '?'
    return (
      Eo(t, function(t, r) {
        var i = e(t) + '=' + e(r)
        n = n + i + '&'
      }),
      (n = n.slice(0, -1))
    )
  }
  function Vo(t, e) {
    return e
  }
  var qo = (function() {
      return function(t, e, n, r) {
        ;(this.server = t),
          (this.local = e || t),
          (this.writable = !!n),
          (this.xform = r || Vo)
      }
    })(),
    Ho = null
  function Ko() {
    if (Ho) return Ho
    var t = []
    t.push(new qo('bucket')),
      t.push(new qo('generation')),
      t.push(new qo('metageneration')),
      t.push(new qo('name', 'fullPath', !0))
    var e = new qo('name')
    ;(e.xform = function(t, e) {
      return (function(t) {
        return !Oo(t) || t.length < 2 ? t : Mo((t = t))
      })(e)
    }),
      t.push(e)
    var n = new qo('size')
    return (
      (n.xform = function(t, e) {
        return Io(e) ? +e : e
      }),
      t.push(n),
      t.push(new qo('timeCreated')),
      t.push(new qo('updated')),
      t.push(new qo('md5Hash', null, !0)),
      t.push(new qo('cacheControl', null, !0)),
      t.push(new qo('contentDisposition', null, !0)),
      t.push(new qo('contentEncoding', null, !0)),
      t.push(new qo('contentLanguage', null, !0)),
      t.push(new qo('contentType', null, !0)),
      t.push(new qo('metadata', 'customMetadata', !0)),
      t.push(
        new qo('downloadTokens', 'downloadURLs', !1, function(t, e) {
          if (!(Oo(e) && e.length > 0)) return []
          var n = encodeURIComponent
          return e.split(',').map(function(e) {
            var r = t.bucket,
              i = t.fullPath
            return (
              (function(t) {
                return Gi + Qi + t
              })('/b/' + n(r) + '/o/' + n(i)) + jo({alt: 'media', token: e})
            )
          })
        })
      ),
      (Ho = t)
    )
  }
  function Go(t, e, n) {
    for (var r = {type: 'file'}, i = n.length, o = 0; o < i; o++) {
      var a = n[o]
      r[a.local] = a.xform(r, e[a.server])
    }
    return (
      (function(t, e) {
        Object.defineProperty(t, 'ref', {
          get: function() {
            var n = t.bucket,
              r = t.fullPath,
              i = new Uo(n, r)
            return e.makeStorageReference(i)
          }
        })
      })(r, t),
      r
    )
  }
  function Qo(t, e) {
    for (var n = {}, r = e.length, i = 0; i < r; i++) {
      var o = e[i]
      o.writable && (n[o.server] = t[o.local])
    }
    return JSON.stringify(n)
  }
  function zo(t) {
    if (!(t && Ao(t))) throw 'Expected Metadata object.'
    for (var e in t) {
      var n = t[e]
      if ('customMetadata' === e) {
        if (!Ao(n)) throw "Expected object for 'customMetadata' mapping."
      } else if (ko(n)) throw "Mapping for '" + e + "' cannot be an object."
    }
  }
  function Yo(t, e, n) {
    for (var r = e.length, i = e.length, o = 0; o < e.length; o++)
      if (e[o].optional) {
        r = o
        break
      }
    var a, s, u, c, h, l
    if (!(r <= n.length && n.length <= i))
      throw ((a = r),
      (s = i),
      (u = t),
      (c = n.length),
      a === s
        ? ((h = a), (l = 1 === a ? 'argument' : 'arguments'))
        : ((h = 'between ' + a + ' and ' + s), (l = 'arguments')),
      new Ji(
        Zi.INVALID_ARGUMENT_COUNT,
        'Invalid argument count in `' +
          u +
          '`: Expected ' +
          h +
          ' ' +
          l +
          ', received ' +
          c +
          '.'
      ))
    for (o = 0; o < n.length; o++)
      try {
        e[o].validator(n[o])
      } catch (e) {
        throw e instanceof Error ? io(o, t, e.message) : io(o, t, e)
      }
  }
  var Xo = (function() {
    return function(t, e) {
      var n = this
      ;(this.validator = function(e) {
        ;(n.optional && !No(e)) || t(e)
      }),
        (this.optional = !!e)
    }
  })()
  function $o(t, e) {
    function n(t) {
      if (!Oo(t)) throw 'Expected string.'
    }
    var r, i, o
    return (
      t
        ? ((i = n),
          (o = t),
          (r = function(t) {
            i(t), o(t)
          }))
        : (r = n),
      new Xo(r, e)
    )
  }
  function Jo(t) {
    return new Xo(zo, t)
  }
  function Zo() {
    return new Xo(function(t) {
      if (
        !(
          (function(t) {
            return 'number' == typeof t || t instanceof Number
          })(t) && t >= 0
        )
      )
        throw 'Expected a number 0 or greater.'
    })
  }
  function ta(t, e) {
    return new Xo(function(e) {
      if (!(null === e || (Io(e) && e instanceof Object)))
        throw 'Expected an Object.'
      void 0 !== t && null !== t && t(e)
    }, e)
  }
  function ea(t) {
    return new Xo(function(t) {
      if (null !== t && !Ro(t)) throw 'Expected a Function.'
    }, t)
  }
  function na() {
    return 'undefined' != typeof BlobBuilder
      ? BlobBuilder
      : 'undefined' != typeof WebKitBlobBuilder ? WebKitBlobBuilder : void 0
  }
  var ra = (function() {
    function t(t, e) {
      var n = 0,
        r = ''
      Po(t)
        ? ((this.data_ = t), (n = t.size), (r = t.type))
        : t instanceof ArrayBuffer
          ? (e
              ? (this.data_ = new Uint8Array(t))
              : ((this.data_ = new Uint8Array(t.byteLength)),
                this.data_.set(new Uint8Array(t))),
            (n = this.data_.length))
          : t instanceof Uint8Array &&
            (e
              ? (this.data_ = t)
              : ((this.data_ = new Uint8Array(t.length)), this.data_.set(t)),
            (n = t.length)),
        (this.size_ = n),
        (this.type_ = r)
    }
    return (
      (t.prototype.size = function() {
        return this.size_
      }),
      (t.prototype.type = function() {
        return this.type_
      }),
      (t.prototype.slice = function(e, n) {
        if (Po(this.data_)) {
          var r = this.data_,
            i = ((a = e),
            (s = n),
            (o = r).webkitSlice
              ? o.webkitSlice(a, s)
              : o.mozSlice ? o.mozSlice(a, s) : o.slice ? o.slice(a, s) : null)
          return null === i ? null : new t(i)
        }
        var o, a, s
        return new t(new Uint8Array(this.data_.buffer, e, n - e), !0)
      }),
      (t.getBlob = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
        if (Do()) {
          var r = e.map(function(e) {
            return e instanceof t ? e.data_ : e
          })
          return new t(
            function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              var n = na()
              if (void 0 !== n) {
                for (var r = new n(), i = 0; i < t.length; i++) r.append(t[i])
                return r.getBlob()
              }
              if (Do()) return new Blob(t)
              throw Error("This browser doesn't seem to support creating Blobs")
            }.apply(null, r)
          )
        }
        var i = e.map(function(t) {
            return Oo(t) ? lo(uo.RAW, t).data : t.data_
          }),
          o = 0
        i.forEach(function(t) {
          o += t.byteLength
        })
        var a = new Uint8Array(o),
          s = 0
        return (
          i.forEach(function(t) {
            for (var e = 0; e < t.length; e++) a[s++] = t[e]
          }),
          new t(a, !0)
        )
      }),
      (t.prototype.uploadData = function() {
        return this.data_
      }),
      t
    )
  })()
  function ia(t, e) {
    return -1 !== t.indexOf(e)
  }
  var oa = (function() {
    return function(t, e, n, r) {
      ;(this.url = t),
        (this.method = e),
        (this.handler = n),
        (this.timeout = r),
        (this.urlParams = {}),
        (this.headers = {}),
        (this.body = null),
        (this.errorHandler = null),
        (this.progressCallback = null),
        (this.successCodes = [200]),
        (this.additionalRetryCodes = [])
    }
  })()
  function aa(t) {
    if (!t) throw eo()
  }
  function sa(t, e) {
    return function(n, r) {
      var i = (function(t, e, n) {
        var r = Fo(e)
        return null === r ? null : Go(t, r, n)
      })(t, r, e)
      return aa(null !== i), i
    }
  }
  function ua(t) {
    return function(e, n) {
      var r, i, o
      return (
        401 === e.getStatus()
          ? (r = new Ji(
              Zi.UNAUTHENTICATED,
              'User is not authenticated, please authenticate using Firebase Authentication and try again.'
            ))
          : 402 === e.getStatus()
            ? ((o = t.bucket),
              (r = new Ji(
                Zi.QUOTA_EXCEEDED,
                "Quota for bucket '" +
                  o +
                  "' exceeded, please view quota on https://firebase.google.com/pricing/."
              )))
            : 403 === e.getStatus()
              ? ((i = t.path),
                (r = new Ji(
                  Zi.UNAUTHORIZED,
                  "User does not have permission to access '" + i + "'."
                )))
              : (r = n),
        r.setServerResponseProp(n.serverResponseProp()),
        r
      )
    }
  }
  function ca(t) {
    var e = ua(t)
    return function(n, r) {
      var i,
        o = e(n, r)
      return (
        404 === n.getStatus() &&
          ((i = t.path),
          (o = new Ji(
            Zi.OBJECT_NOT_FOUND,
            "Object '" + i + "' does not exist."
          ))),
        o.setServerResponseProp(r.serverResponseProp()),
        o
      )
    }
  }
  function ha(t, e, n) {
    var r = Wo(e.fullServerUrl()),
      i = t.maxOperationRetryTime(),
      o = new oa(r, 'GET', sa(t, n), i)
    return (o.errorHandler = ca(e)), o
  }
  function la(t, e, n) {
    var r = To(n)
    return (
      (r.fullPath = t.path),
      (r.size = e.size()),
      r.contentType ||
        (r.contentType = (function(t, e) {
          return (
            (t && t.contentType) ||
            (e && e.type()) ||
            'application/octet-stream'
          )
        })(null, e)),
      r
    )
  }
  var pa = (function() {
    return function(t, e, n, r) {
      ;(this.current = t),
        (this.total = e),
        (this.finalized = !!n),
        (this.metadata = r || null)
    }
  })()
  function fa(t, e) {
    var n
    try {
      n = t.getResponseHeader('X-Goog-Upload-Status')
    } catch (t) {
      aa(!1)
    }
    return aa(ia(e || ['active'], n)), n
  }
  function da(t, e, n, r, i, o, a, s) {
    var u = new pa(0, 0)
    if (
      (a
        ? ((u.current = a.current), (u.total = a.total))
        : ((u.current = 0), (u.total = r.size())),
      r.size() !== u.total)
    )
      throw new Ji(
        Zi.SERVER_FILE_WRONG_SIZE,
        'Server recorded incorrect upload file size, please retry the upload.'
      )
    var c = u.total - u.current,
      h = c
    i > 0 && (h = Math.min(h, i))
    var l = u.current,
      p = l + h,
      f = {
        'X-Goog-Upload-Command': h === c ? 'upload, finalize' : 'upload',
        'X-Goog-Upload-Offset': u.current
      },
      d = r.slice(l, p)
    if (null === d) throw ro()
    var v = e.maxUploadRetryTime(),
      y = new oa(
        n,
        'POST',
        function(t, n) {
          var i,
            a = fa(t, ['active', 'final']),
            s = u.current + h,
            c = r.size()
          return (
            (i = 'final' === a ? sa(e, o)(t, n) : null),
            new pa(s, c, 'final' === a, i)
          )
        },
        v
      )
    return (
      (y.headers = f),
      (y.body = d.uploadData()),
      (y.progressCallback = s || null),
      (y.errorHandler = ua(t)),
      y
    )
  }
  var va = (function() {
      return function(t, e, n) {
        if (Ro(t) || Io(e) || Io(n))
          (this.next = t), (this.error = e || null), (this.complete = n || null)
        else {
          var r = t
          ;(this.next = r.next || null),
            (this.error = r.error || null),
            (this.complete = r.complete || null)
        }
      }
    })(),
    ya = (function() {
      function t(t, e, n, r, i, o) {
        ;(this.bytesTransferred = t),
          (this.totalBytes = e),
          (this.state = n),
          (this.metadata = r),
          (this.task = i),
          (this.ref = o)
      }
      return (
        Object.defineProperty(t.prototype, 'downloadURL', {
          get: function() {
            if (null !== this.metadata) {
              var t = this.metadata.downloadURLs
              return null != t && null != t[0] ? t[0] : null
            }
            return null
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      )
    })()
  function _a(t) {
    return function() {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
      So(!0).then(function() {
        t.apply(null, e)
      })
    }
  }
  var ga = (function() {
      function t(t, e, n, r, i, o) {
        void 0 === o && (o = null)
        var a = this
        ;(this.transferred_ = 0),
          (this.needToFetchStatus_ = !1),
          (this.needToFetchMetadata_ = !1),
          (this.observers_ = []),
          (this.error_ = null),
          (this.uploadUrl_ = null),
          (this.request_ = null),
          (this.chunkMultiplier_ = 1),
          (this.resolve_ = null),
          (this.reject_ = null),
          (this.ref_ = t),
          (this.authWrapper_ = e),
          (this.location_ = n),
          (this.blob_ = i),
          (this.metadata_ = o),
          (this.mappings_ = r),
          (this.resumable_ = this.shouldDoResumable_(this.blob_)),
          (this.state_ = go.RUNNING),
          (this.errorHandler_ = function(t) {
            ;(a.request_ = null),
              (a.chunkMultiplier_ = 1),
              t.codeEquals(Zi.CANCELED)
                ? ((a.needToFetchStatus_ = !0), a.completeTransitions_())
                : ((a.error_ = t), a.transition_(go.ERROR))
          }),
          (this.metadataErrorHandler_ = function(t) {
            ;(a.request_ = null),
              t.codeEquals(Zi.CANCELED)
                ? a.completeTransitions_()
                : ((a.error_ = t), a.transition_(go.ERROR))
          }),
          (this.promise_ = Co(function(t, e) {
            ;(a.resolve_ = t), (a.reject_ = e), a.start_()
          })),
          this.promise_.then(null, function() {})
      }
      return (
        (t.prototype.makeProgressCallback_ = function() {
          var t = this,
            e = this.transferred_
          return function(n, r) {
            t.updateProgress_(e + n)
          }
        }),
        (t.prototype.shouldDoResumable_ = function(t) {
          return t.size() > 262144
        }),
        (t.prototype.start_ = function() {
          this.state_ === go.RUNNING &&
            null === this.request_ &&
            (this.resumable_
              ? null === this.uploadUrl_
                ? this.createResumable_()
                : this.needToFetchStatus_
                  ? this.fetchStatus_()
                  : this.needToFetchMetadata_
                    ? this.fetchMetadata_()
                    : this.continueUpload_()
              : this.oneShotUpload_())
        }),
        (t.prototype.resolveToken_ = function(t) {
          var e = this
          this.authWrapper_.getAuthToken().then(function(n) {
            switch (e.state_) {
              case go.RUNNING:
                t(n)
                break
              case go.CANCELING:
                e.transition_(go.CANCELED)
                break
              case go.PAUSING:
                e.transition_(go.PAUSED)
            }
          })
        }),
        (t.prototype.createResumable_ = function() {
          var t = this
          this.resolveToken_(function(e) {
            var n = (function(t, e, n, r, i) {
                var o = e.bucketOnlyServerUrl(),
                  a = la(e, r, i),
                  s = {name: a.fullPath},
                  u = Bo(o),
                  c = {
                    'X-Goog-Upload-Protocol': 'resumable',
                    'X-Goog-Upload-Command': 'start',
                    'X-Goog-Upload-Header-Content-Length': r.size(),
                    'X-Goog-Upload-Header-Content-Type': a.contentType,
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  h = Qo(a, n),
                  l = t.maxUploadRetryTime(),
                  p = new oa(
                    u,
                    'POST',
                    function(t, e) {
                      var n
                      fa(t)
                      try {
                        n = t.getResponseHeader('X-Goog-Upload-URL')
                      } catch (t) {
                        aa(!1)
                      }
                      return aa(Oo(n)), n
                    },
                    l
                  )
                return (
                  (p.urlParams = s),
                  (p.headers = c),
                  (p.body = h),
                  (p.errorHandler = ua(e)),
                  p
                )
              })(
                t.authWrapper_,
                t.location_,
                t.mappings_,
                t.blob_,
                t.metadata_
              ),
              r = t.authWrapper_.makeRequest(n, e)
            ;(t.request_ = r),
              r.getPromise().then(function(e) {
                ;(t.request_ = null),
                  (t.uploadUrl_ = e),
                  (t.needToFetchStatus_ = !1),
                  t.completeTransitions_()
              }, t.errorHandler_)
          })
        }),
        (t.prototype.fetchStatus_ = function() {
          var t = this,
            e = this.uploadUrl_
          this.resolveToken_(function(n) {
            var r = (function(t, e, n, r) {
                var i = t.maxUploadRetryTime(),
                  o = new oa(
                    n,
                    'POST',
                    function(t, e) {
                      var n,
                        i = fa(t, ['active', 'final'])
                      try {
                        n = t.getResponseHeader('X-Goog-Upload-Size-Received')
                      } catch (t) {
                        aa(!1)
                      }
                      var o = parseInt(n, 10)
                      return aa(!isNaN(o)), new pa(o, r.size(), 'final' === i)
                    },
                    i
                  )
                return (
                  (o.headers = {'X-Goog-Upload-Command': 'query'}),
                  (o.errorHandler = ua(e)),
                  o
                )
              })(t.authWrapper_, t.location_, e, t.blob_),
              i = t.authWrapper_.makeRequest(r, n)
            ;(t.request_ = i),
              i.getPromise().then(function(e) {
                ;(e = e),
                  (t.request_ = null),
                  t.updateProgress_(e.current),
                  (t.needToFetchStatus_ = !1),
                  e.finalized && (t.needToFetchMetadata_ = !0),
                  t.completeTransitions_()
              }, t.errorHandler_)
          })
        }),
        (t.prototype.continueUpload_ = function() {
          var t = this,
            e = 262144 * this.chunkMultiplier_,
            n = new pa(this.transferred_, this.blob_.size()),
            r = this.uploadUrl_
          this.resolveToken_(function(i) {
            var o
            try {
              o = da(
                t.location_,
                t.authWrapper_,
                r,
                t.blob_,
                e,
                t.mappings_,
                n,
                t.makeProgressCallback_()
              )
            } catch (e) {
              return (t.error_ = e), void t.transition_(go.ERROR)
            }
            var a = t.authWrapper_.makeRequest(o, i)
            ;(t.request_ = a),
              a.getPromise().then(function(e) {
                t.increaseMultiplier_(),
                  (t.request_ = null),
                  t.updateProgress_(e.current),
                  e.finalized
                    ? ((t.metadata_ = e.metadata), t.transition_(go.SUCCESS))
                    : t.completeTransitions_()
              }, t.errorHandler_)
          })
        }),
        (t.prototype.increaseMultiplier_ = function() {
          262144 * this.chunkMultiplier_ < 33554432 &&
            (this.chunkMultiplier_ *= 2)
        }),
        (t.prototype.fetchMetadata_ = function() {
          var t = this
          this.resolveToken_(function(e) {
            var n = ha(t.authWrapper_, t.location_, t.mappings_),
              r = t.authWrapper_.makeRequest(n, e)
            ;(t.request_ = r),
              r.getPromise().then(function(e) {
                ;(t.request_ = null),
                  (t.metadata_ = e),
                  t.transition_(go.SUCCESS)
              }, t.metadataErrorHandler_)
          })
        }),
        (t.prototype.oneShotUpload_ = function() {
          var t = this
          this.resolveToken_(function(e) {
            var n = (function(t, e, n, r, i) {
                var o = e.bucketOnlyServerUrl(),
                  a = {'X-Goog-Upload-Protocol': 'multipart'},
                  s = (function() {
                    for (var t = '', e = 0; e < 2; e++)
                      t += Math.random()
                        .toString()
                        .slice(2)
                    return t
                  })()
                a['Content-Type'] = 'multipart/related; boundary=' + s
                var u = la(e, r, i),
                  c =
                    '--' +
                    s +
                    '\r\nContent-Type: application/json; charset=utf-8\r\n\r\n' +
                    Qo(u, n) +
                    '\r\n--' +
                    s +
                    '\r\nContent-Type: ' +
                    u.contentType +
                    '\r\n\r\n',
                  h = '\r\n--' + s + '--',
                  l = ra.getBlob(c, r, h)
                if (null === l) throw ro()
                var p = {name: u.fullPath},
                  f = Bo(o),
                  d = t.maxUploadRetryTime(),
                  v = new oa(f, 'POST', sa(t, n), d)
                return (
                  (v.urlParams = p),
                  (v.headers = a),
                  (v.body = l.uploadData()),
                  (v.errorHandler = ua(e)),
                  v
                )
              })(
                t.authWrapper_,
                t.location_,
                t.mappings_,
                t.blob_,
                t.metadata_
              ),
              r = t.authWrapper_.makeRequest(n, e)
            ;(t.request_ = r),
              r.getPromise().then(function(e) {
                ;(t.request_ = null),
                  (t.metadata_ = e),
                  t.updateProgress_(t.blob_.size()),
                  t.transition_(go.SUCCESS)
              }, t.errorHandler_)
          })
        }),
        (t.prototype.updateProgress_ = function(t) {
          var e = this.transferred_
          ;(this.transferred_ = t),
            this.transferred_ !== e && this.notifyObservers_()
        }),
        (t.prototype.transition_ = function(t) {
          if (this.state_ !== t)
            switch (t) {
              case go.CANCELING:
              case go.PAUSING:
                ;(this.state_ = t),
                  null !== this.request_ && this.request_.cancel()
                break
              case go.RUNNING:
                var e = this.state_ === go.PAUSED
                ;(this.state_ = t),
                  e && (this.notifyObservers_(), this.start_())
                break
              case go.PAUSED:
                ;(this.state_ = t), this.notifyObservers_()
                break
              case go.CANCELED:
                ;(this.error_ = no()),
                  (this.state_ = t),
                  this.notifyObservers_()
                break
              case go.ERROR:
              case go.SUCCESS:
                ;(this.state_ = t), this.notifyObservers_()
            }
        }),
        (t.prototype.completeTransitions_ = function() {
          switch (this.state_) {
            case go.PAUSING:
              this.transition_(go.PAUSED)
              break
            case go.CANCELING:
              this.transition_(go.CANCELED)
              break
            case go.RUNNING:
              this.start_()
          }
        }),
        Object.defineProperty(t.prototype, 'snapshot', {
          get: function() {
            var t = bo(this.state_)
            return new ya(
              this.transferred_,
              this.blob_.size(),
              t,
              this.metadata_,
              this,
              this.ref_
            )
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.on = function(t, e, n, r) {
          void 0 === e && (e = void 0),
            void 0 === n && (n = void 0),
            void 0 === r && (r = void 0)
          var i =
              'Expected a function or an Object with one of `next`, `error`, `complete` properties.',
            o = ea(!0).validator,
            a = ta(null, !0).validator
          function s(t) {
            try {
              return void o(t)
            } catch (t) {}
            try {
              if ((a(t), !(No(t.next) || No(t.error) || No(t.complete))))
                throw ''
              return
            } catch (t) {
              throw i
            }
          }
          Yo(
            'on',
            [
              $o(function(e) {
                if (t !== _o.STATE_CHANGED)
                  throw 'Expected one of the event types: [' +
                    _o.STATE_CHANGED +
                    '].'
              }),
              ta(s, !0),
              ea(!0),
              ea(!0)
            ],
            arguments
          )
          var u = this
          function c(t) {
            return function(e, n, i) {
              null !== t && Yo('on', t, arguments)
              var o = new va(e, n, r)
              return (
                u.addObserver_(o),
                function() {
                  u.removeObserver_(o)
                }
              )
            }
          }
          var h = [
            ta(function(t) {
              if (null === t) throw i
              s(t)
            }),
            ea(!0),
            ea(!0)
          ]
          return !(No(e) || No(n) || No(r)) ? c(h) : c(null)(e, n, r)
        }),
        (t.prototype.then = function(t, e) {
          return this.promise_.then(t, e)
        }),
        (t.prototype.catch = function(t) {
          return this.then(null, t)
        }),
        (t.prototype.addObserver_ = function(t) {
          this.observers_.push(t), this.notifyObserver_(t)
        }),
        (t.prototype.removeObserver_ = function(t) {
          var e, n, r
          ;(e = this.observers_),
            (n = t),
            -1 !== (r = e.indexOf(n)) && e.splice(r, 1)
        }),
        (t.prototype.notifyObservers_ = function() {
          var t,
            e = this
          this.finishPromise_(),
            ((t = this.observers_), Array.prototype.slice.call(t)).forEach(
              function(t) {
                e.notifyObserver_(t)
              }
            )
        }),
        (t.prototype.finishPromise_ = function() {
          if (null !== this.resolve_) {
            var t = !0
            switch (bo(this.state_)) {
              case mo.SUCCESS:
                _a(this.resolve_.bind(null, this.snapshot))()
                break
              case mo.CANCELED:
              case mo.ERROR:
                _a(this.reject_.bind(null, this.error_))()
                break
              default:
                t = !1
            }
            t && ((this.resolve_ = null), (this.reject_ = null))
          }
        }),
        (t.prototype.notifyObserver_ = function(t) {
          switch (bo(this.state_)) {
            case mo.RUNNING:
            case mo.PAUSED:
              null !== t.next && _a(t.next.bind(t, this.snapshot))()
              break
            case mo.SUCCESS:
              null !== t.complete && _a(t.complete.bind(t))()
              break
            case mo.CANCELED:
            case mo.ERROR:
              null !== t.error && _a(t.error.bind(t, this.error_))()
              break
            default:
              null !== t.error && _a(t.error.bind(t, this.error_))()
          }
        }),
        (t.prototype.resume = function() {
          Yo('resume', [], arguments)
          var t = this.state_ === go.PAUSED || this.state_ === go.PAUSING
          return t && this.transition_(go.RUNNING), t
        }),
        (t.prototype.pause = function() {
          Yo('pause', [], arguments)
          var t = this.state_ === go.RUNNING
          return t && this.transition_(go.PAUSING), t
        }),
        (t.prototype.cancel = function() {
          Yo('cancel', [], arguments)
          var t = this.state_ === go.RUNNING || this.state_ === go.PAUSING
          return t && this.transition_(go.CANCELING), t
        }),
        t
      )
    })(),
    ma = (function() {
      function t(t, e) {
        ;(this.authWrapper = t),
          (this.location = e instanceof Uo ? e : Uo.makeFromUrl(e))
      }
      return (
        (t.prototype.toString = function() {
          return (
            Yo('toString', [], arguments),
            'gs://' + this.location.bucket + '/' + this.location.path
          )
        }),
        (t.prototype.newRef = function(e, n) {
          return new t(e, n)
        }),
        (t.prototype.mappings = function() {
          return Ko()
        }),
        (t.prototype.child = function(t) {
          Yo('child', [$o()], arguments)
          var e = (function(t, e) {
              var n = e
                .split('/')
                .filter(function(t) {
                  return t.length > 0
                })
                .join('/')
              return 0 === t.length ? n : t + '/' + n
            })(this.location.path, t),
            n = new Uo(this.location.bucket, e)
          return this.newRef(this.authWrapper, n)
        }),
        Object.defineProperty(t.prototype, 'parent', {
          get: function() {
            var t = (function(t) {
              if (0 == t.length) return null
              var e = t.lastIndexOf('/')
              return -1 === e ? '' : t.slice(0, e)
            })(this.location.path)
            if (null === t) return null
            var e = new Uo(this.location.bucket, t)
            return this.newRef(this.authWrapper, e)
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'root', {
          get: function() {
            var t = new Uo(this.location.bucket, '')
            return this.newRef(this.authWrapper, t)
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'bucket', {
          get: function() {
            return this.location.bucket
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'fullPath', {
          get: function() {
            return this.location.path
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'name', {
          get: function() {
            return Mo(this.location.path)
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'storage', {
          get: function() {
            return this.authWrapper.service()
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.put = function(t, e) {
          return (
            void 0 === e && (e = null),
            Yo(
              'put',
              [
                new Xo(function(t) {
                  if (
                    !(
                      t instanceof Uint8Array ||
                      t instanceof ArrayBuffer ||
                      (Do() && t instanceof Blob)
                    )
                  )
                    throw 'Expected Blob or File.'
                }),
                Jo(!0)
              ],
              arguments
            ),
            this.throwIfRoot_('put'),
            new ga(
              this,
              this.authWrapper,
              this.location,
              this.mappings(),
              new ra(t),
              e
            )
          )
        }),
        (t.prototype.putString = function(t, e, n) {
          void 0 === e && (e = uo.RAW),
            Yo('putString', [$o(), $o(co, !0), Jo(!0)], arguments),
            this.throwIfRoot_('putString')
          var r = lo(e, t),
            i = To(n)
          return (
            !Io(i.contentType) &&
              Io(r.contentType) &&
              (i.contentType = r.contentType),
            new ga(
              this,
              this.authWrapper,
              this.location,
              this.mappings(),
              new ra(r.data, !0),
              i
            )
          )
        }),
        (t.prototype.delete = function() {
          Yo('delete', [], arguments), this.throwIfRoot_('delete')
          var t = this
          return this.authWrapper.getAuthToken().then(function(e) {
            var n = (function(t, e) {
              var n = Wo(e.fullServerUrl()),
                r = t.maxOperationRetryTime(),
                i = new oa(n, 'DELETE', function(t, e) {}, r)
              return (i.successCodes = [200, 204]), (i.errorHandler = ca(e)), i
            })(t.authWrapper, t.location)
            return t.authWrapper.makeRequest(n, e).getPromise()
          })
        }),
        (t.prototype.getMetadata = function() {
          Yo('getMetadata', [], arguments), this.throwIfRoot_('getMetadata')
          var t = this
          return this.authWrapper.getAuthToken().then(function(e) {
            var n = ha(t.authWrapper, t.location, t.mappings())
            return t.authWrapper.makeRequest(n, e).getPromise()
          })
        }),
        (t.prototype.updateMetadata = function(t) {
          Yo('updateMetadata', [Jo()], arguments),
            this.throwIfRoot_('updateMetadata')
          var e = this
          return this.authWrapper.getAuthToken().then(function(n) {
            var r = (function(t, e, n, r) {
              var i = Wo(e.fullServerUrl()),
                o = Qo(n, r),
                a = t.maxOperationRetryTime(),
                s = new oa(i, 'PATCH', sa(t, r), a)
              return (
                (s.headers = {
                  'Content-Type': 'application/json; charset=utf-8'
                }),
                (s.body = o),
                (s.errorHandler = ca(e)),
                s
              )
            })(e.authWrapper, e.location, t, e.mappings())
            return e.authWrapper.makeRequest(r, n).getPromise()
          })
        }),
        (t.prototype.getDownloadURL = function() {
          return (
            Yo('getDownloadURL', [], arguments),
            this.throwIfRoot_('getDownloadURL'),
            this.getMetadata().then(function(t) {
              var e = t.downloadURLs[0]
              if (Io(e)) return e
              throw new Ji(
                Zi.NO_DOWNLOAD_URL,
                'The given file does not have any download URLs.'
              )
            })
          )
        }),
        (t.prototype.throwIfRoot_ = function(t) {
          if ('' === this.location.path)
            throw (function(t) {
              return new Ji(
                Zi.INVALID_ROOT_OPERATION,
                "The operation '" +
                  t +
                  "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
              )
            })(t)
        }),
        t
      )
    })(),
    ba = (function() {
      function t(t) {
        this.promise_ = (function(t) {
          return Promise.reject(t)
        })(t)
      }
      return (
        (t.prototype.getPromise = function() {
          return this.promise_
        }),
        (t.prototype.cancel = function(t) {
          void 0 === t && (t = !1)
        }),
        t
      )
    })(),
    wa = (function() {
      function t() {
        ;(this.map_ = {}), (this.id_ = $i)
      }
      return (
        (t.prototype.addRequest = function(t) {
          var e = this.id_
          this.id_++, (this.map_[e] = t)
          var n = this
          function r() {
            delete n.map_[e]
          }
          t.getPromise().then(r, r)
        }),
        (t.prototype.clear = function() {
          Eo(this.map_, function(t, e) {
            e && e.cancel(!0)
          }),
            (this.map_ = {})
        }),
        t
      )
    })(),
    Ea = (function() {
      function t(e, n, r, i, o) {
        if (
          ((this.bucket_ = null),
          (this.deleted_ = !1),
          (this.app_ = e),
          null !== this.app_)
        ) {
          var a = this.app_.options
          Io(a) && (this.bucket_ = t.extractBucket_(a))
        }
        ;(this.storageRefMaker_ = n),
          (this.requestMaker_ = r),
          (this.pool_ = o),
          (this.service_ = i),
          (this.maxOperationRetryTime_ = Yi),
          (this.maxUploadRetryTime_ = Xi),
          (this.requestMap_ = new wa())
      }
      return (
        (t.extractBucket_ = function(t) {
          var e = t.storageBucket || null
          return null == e ? null : Uo.makeFromBucketSpec(e).bucket
        }),
        (t.prototype.getAuthToken = function() {
          return null !== this.app_ &&
            Io(this.app_.INTERNAL) &&
            Io(this.app_.INTERNAL.getToken)
            ? this.app_.INTERNAL.getToken().then(
                function(t) {
                  return null !== t ? t.accessToken : null
                },
                function(t) {
                  return null
                }
              )
            : So(null)
        }),
        (t.prototype.bucket = function() {
          if (this.deleted_) throw oo()
          return this.bucket_
        }),
        (t.prototype.service = function() {
          return this.service_
        }),
        (t.prototype.makeStorageReference = function(t) {
          return this.storageRefMaker_(this, t)
        }),
        (t.prototype.makeRequest = function(t, e) {
          if (this.deleted_) return new ba(oo())
          var n = this.requestMaker_(t, e, this.pool_)
          return this.requestMap_.addRequest(n), n
        }),
        (t.prototype.deleteApp = function() {
          ;(this.deleted_ = !0), (this.app_ = null), this.requestMap_.clear()
        }),
        (t.prototype.maxUploadRetryTime = function() {
          return this.maxUploadRetryTime_
        }),
        (t.prototype.setMaxUploadRetryTime = function(t) {
          this.maxUploadRetryTime_ = t
        }),
        (t.prototype.maxOperationRetryTime = function() {
          return this.maxOperationRetryTime_
        }),
        (t.prototype.setMaxOperationRetryTime = function(t) {
          this.maxOperationRetryTime_ = t
        }),
        t
      )
    })()
  var Ta = (function() {
      function t(t, e, n, r, i, o, a, s, u, c, h) {
        ;(this.pendingXhr_ = null),
          (this.backoffId_ = null),
          (this.resolve_ = null),
          (this.reject_ = null),
          (this.canceled_ = !1),
          (this.appDelete_ = !1),
          (this.url_ = t),
          (this.method_ = e),
          (this.headers_ = n),
          (this.body_ = r),
          (this.successCodes_ = i.slice()),
          (this.additionalRetryCodes_ = o.slice()),
          (this.callback_ = a),
          (this.errorCallback_ = s),
          (this.progressCallback_ = c),
          (this.timeout_ = u),
          (this.pool_ = h)
        var l = this
        this.promise_ = Co(function(t, e) {
          ;(l.resolve_ = t), (l.reject_ = e), l.start_()
        })
      }
      return (
        (t.prototype.start_ = function() {
          var t = this
          function e(e, n) {
            var r,
              i = t.resolve_,
              o = t.reject_,
              a = n.xhr
            if (n.wasSuccessCode)
              try {
                var s = t.callback_(a, a.getResponseText())
                No(s) ? i(s) : i()
              } catch (t) {
                o(t)
              }
            else
              null !== a
                ? ((r = eo()).setServerResponseProp(a.getResponseText()),
                  t.errorCallback_ ? o(t.errorCallback_(a, r)) : o(r))
                : n.canceled
                  ? o((r = t.appDelete_ ? oo() : no()))
                  : o(
                      (r = new Ji(
                        Zi.RETRY_LIMIT_EXCEEDED,
                        'Max retry time for operation exceeded, please try again.'
                      ))
                    )
          }
          this.canceled_
            ? e(0, new Ca(!1, null, !0))
            : (this.backoffId_ = (function(t, e, n) {
                var r = 1,
                  i = null,
                  o = !1,
                  a = 0
                function s() {
                  return 2 === a
                }
                var u = !1
                function c() {
                  u || ((u = !0), e.apply(null, arguments))
                }
                function h(e) {
                  i = setTimeout(function() {
                    ;(i = null), t(l, s())
                  }, e)
                }
                function l(t) {
                  for (var e, n = [], i = 1; i < arguments.length; i++)
                    n[i - 1] = arguments[i]
                  u ||
                    (t
                      ? c.apply(null, arguments)
                      : s() || o
                        ? c.apply(null, arguments)
                        : (r < 64 && (r *= 2),
                          1 === a
                            ? ((a = 2), (e = 0))
                            : (e = 1e3 * (r + Math.random())),
                          h(e)))
                }
                var p = !1
                function f(t) {
                  p ||
                    ((p = !0),
                    u ||
                      (null !== i
                        ? (t || (a = 2), clearTimeout(i), h(0))
                        : t || (a = 1)))
                }
                return (
                  h(0),
                  setTimeout(function() {
                    ;(o = !0), f(!0)
                  }, n),
                  f
                )
              })(
                function(e, n) {
                  if (n) e(!1, new Ca(!1, null, !0))
                  else {
                    var r = t.pool_.createXhrIo()
                    ;(t.pendingXhr_ = r),
                      null !== t.progressCallback_ &&
                        r.addUploadProgressListener(i),
                      r
                        .send(t.url_, t.method_, t.body_, t.headers_)
                        .then(function(n) {
                          null !== t.progressCallback_ &&
                            n.removeUploadProgressListener(i),
                            (t.pendingXhr_ = null)
                          var r = (n = n).getErrorCode() === yo.NO_ERROR,
                            o = n.getStatus()
                          if (r && !t.isRetryStatusCode_(o)) {
                            var a = ia(t.successCodes_, o)
                            e(!0, new Ca(a, n))
                          } else {
                            var s = n.getErrorCode() === yo.ABORT
                            e(!1, new Ca(!1, null, s))
                          }
                        })
                  }
                  function i(e) {
                    var n = e.loaded,
                      r = e.lengthComputable ? e.total : -1
                    null !== t.progressCallback_ && t.progressCallback_(n, r)
                  }
                },
                e,
                this.timeout_
              ))
        }),
        (t.prototype.getPromise = function() {
          return this.promise_
        }),
        (t.prototype.cancel = function(t) {
          ;(this.canceled_ = !0),
            (this.appDelete_ = t || !1),
            null !== this.backoffId_ && (0, this.backoffId_)(!1),
            null !== this.pendingXhr_ && this.pendingXhr_.abort()
        }),
        (t.prototype.isRetryStatusCode_ = function(t) {
          var e = t >= 500 && t < 600,
            n = ia([408, 429], t),
            r = ia(this.additionalRetryCodes_, t)
          return e || n || r
        }),
        t
      )
    })(),
    Ca = (function() {
      return function(t, e, n) {
        ;(this.wasSuccessCode = t), (this.xhr = e), (this.canceled = !!n)
      }
    })()
  function Sa(t, e, n) {
    var r = jo(t.urlParams),
      i = t.url + r,
      o = To(t.headers)
    return (
      (function(t, e) {
        null !== e && e.length > 0 && (t.Authorization = 'Firebase ' + e)
      })(o, e),
      (function(t) {
        var e = void 0 !== te ? te.SDK_VERSION : 'AppManager'
        t['X-Firebase-Storage-Version'] = 'webjs/' + e
      })(o),
      new Ta(
        i,
        t.method,
        o,
        t.body,
        t.successCodes,
        t.additionalRetryCodes,
        t.handler,
        t.errorHandler,
        t.timeout,
        t.progressCallback,
        n
      )
    )
  }
  var Ia = (function() {
      function t(t, e, n) {
        if (
          ((this.bucket_ = null),
          (this.authWrapper_ = new Ea(
            t,
            function(t, e) {
              return new ma(t, e)
            },
            Sa,
            this,
            e
          )),
          (this.app_ = t),
          null != n)
        )
          this.bucket_ = Uo.makeFromBucketSpec(n)
        else {
          var r = this.authWrapper_.bucket()
          null != r && (this.bucket_ = new Uo(r, ''))
        }
        this.internals_ = new Na(this)
      }
      return (
        (t.prototype.ref = function(t) {
          if (
            (Yo(
              'ref',
              [
                $o(function(t) {
                  if (/^[A-Za-z]+:\/\//.test(t))
                    throw 'Expected child path but got a URL, use refFromURL instead.'
                }, !0)
              ],
              arguments
            ),
            null == this.bucket_)
          )
            throw new Error('No Storage Bucket defined in Firebase Options.')
          var e = new ma(this.authWrapper_, this.bucket_)
          return null != t ? e.child(t) : e
        }),
        (t.prototype.refFromURL = function(t) {
          return (
            Yo(
              'refFromURL',
              [
                $o(function(t) {
                  if (!/^[A-Za-z]+:\/\//.test(t))
                    throw 'Expected full URL but got a child path, use ref instead.'
                  try {
                    Uo.makeFromUrl(t)
                  } catch (t) {
                    throw 'Expected valid full URL but got an invalid one.'
                  }
                }, !1)
              ],
              arguments
            ),
            new ma(this.authWrapper_, t)
          )
        }),
        Object.defineProperty(t.prototype, 'maxUploadRetryTime', {
          get: function() {
            return this.authWrapper_.maxUploadRetryTime()
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.setMaxUploadRetryTime = function(t) {
          Yo('setMaxUploadRetryTime', [Zo()], arguments),
            this.authWrapper_.setMaxUploadRetryTime(t)
        }),
        Object.defineProperty(t.prototype, 'maxOperationRetryTime', {
          get: function() {
            return this.authWrapper_.maxOperationRetryTime()
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.setMaxOperationRetryTime = function(t) {
          Yo('setMaxOperationRetryTime', [Zo()], arguments),
            this.authWrapper_.setMaxOperationRetryTime(t)
        }),
        Object.defineProperty(t.prototype, 'app', {
          get: function() {
            return this.app_
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, 'INTERNAL', {
          get: function() {
            return this.internals_
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      )
    })(),
    Na = (function() {
      function t(t) {
        this.service_ = t
      }
      return (
        (t.prototype.delete = function() {
          return this.service_.authWrapper_.deleteApp(), So(void 0)
        }),
        t
      )
    })(),
    Ra = 'storage'
  function Aa(t, e, n) {
    return new Ia(t, new xo(), n)
  }
  return (
    (function(t) {
      var e = {
        TaskState: mo,
        TaskEvent: _o,
        StringFormat: uo,
        Storage: Ia,
        Reference: ma
      }
      t.INTERNAL.registerService(Ra, Aa, e, void 0, !0)
    })(te),
    re
  )
})
//# sourceMappingURL=firebase.js.map
