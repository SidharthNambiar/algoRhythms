!(function(t, e) {
  'use strict'
  try {
    e = e && e.hasOwnProperty('default') ? e.default : e
    var r = 'https://firebasestorage.googleapis.com',
      n = 'https://firebasestorage.googleapis.com',
      o = '/v0',
      i = '/v0',
      a = 12e4,
      s = 6e4,
      u = -9007199254740991,
      c = (function() {
        function t(t, e) {
          ;(this.code_ = h(t)),
            (this.message_ = 'Firebase Storage: ' + e),
            (this.serverResponse_ = null),
            (this.name_ = 'FirebaseError')
        }
        return (
          (t.prototype.codeProp = function() {
            return this.code
          }),
          (t.prototype.codeEquals = function(t) {
            return h(t) === this.codeProp()
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
      l = {
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
    function h(t) {
      return 'storage/' + t
    }
    function p() {
      return new c(
        l.UNKNOWN,
        'An unknown error occurred, please check the error payload for server response.'
      )
    }
    function f() {
      return new c(l.CANCELED, 'User canceled the upload/download.')
    }
    function d() {
      return new c(
        l.CANNOT_SLICE_BLOB,
        'Cannot slice blob for upload. Please retry the upload.'
      )
    }
    function _(t, e, r) {
      return new c(
        l.INVALID_ARGUMENT,
        'Invalid argument in `' + e + '` at index ' + t + ': ' + r
      )
    }
    function v() {
      return new c(l.APP_DELETED, 'The Firebase app was deleted.')
    }
    function b(t, e) {
      return new c(
        l.INVALID_FORMAT,
        "String does not match format '" + t + "': " + e
      )
    }
    function m(t) {
      throw new c(l.INTERNAL_ERROR, 'Internal error: ' + t)
    }
    var g = {
      RAW: 'raw',
      BASE64: 'base64',
      BASE64URL: 'base64url',
      DATA_URL: 'data_url'
    }
    function y(t) {
      switch (t) {
        case g.RAW:
        case g.BASE64:
        case g.BASE64URL:
        case g.DATA_URL:
          return
        default:
          throw 'Expected one of the event types: [' +
            g.RAW +
            ', ' +
            g.BASE64 +
            ', ' +
            g.BASE64URL +
            ', ' +
            g.DATA_URL +
            '].'
      }
    }
    var R = (function() {
      return function(t, e) {
        ;(this.data = t), (this.contentType = e || null)
      }
    })()
    function E(t, e) {
      switch (t) {
        case g.RAW:
          return new R(w(e))
        case g.BASE64:
        case g.BASE64URL:
          return new R(U(t, e))
        case g.DATA_URL:
          return new R(
            (function(t) {
              var e = new T(t)
              return e.base64
                ? U(g.BASE64, e.rest)
                : (function(t) {
                    var e
                    try {
                      e = decodeURIComponent(t)
                    } catch (t) {
                      throw b(g.DATA_URL, 'Malformed data URL.')
                    }
                    return w(e)
                  })(e.rest)
            })(e),
            (function(t) {
              return new T(t).contentType
            })(e)
          )
      }
      throw p()
    }
    function w(t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var n = t.charCodeAt(r)
        if (n <= 127) e.push(n)
        else if (n <= 2047) e.push(192 | (n >> 6), 128 | (63 & n))
        else if (55296 == (64512 & n))
          if (r < t.length - 1 && 56320 == (64512 & t.charCodeAt(r + 1)))
            (n = 65536 | ((1023 & n) << 10) | (1023 & t.charCodeAt(++r))),
              e.push(
                240 | (n >> 18),
                128 | ((n >> 12) & 63),
                128 | ((n >> 6) & 63),
                128 | (63 & n)
              )
          else e.push(239, 191, 189)
        else
          56320 == (64512 & n)
            ? e.push(239, 191, 189)
            : e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
      }
      return new Uint8Array(e)
    }
    function U(t, e) {
      switch (t) {
        case g.BASE64:
          var r = -1 !== e.indexOf('-'),
            n = -1 !== e.indexOf('_')
          if (r || n)
            throw b(
              t,
              "Invalid character '" +
                (r ? '-' : '_') +
                "' found: is it base64url encoded?"
            )
          break
        case g.BASE64URL:
          var o = -1 !== e.indexOf('+'),
            i = -1 !== e.indexOf('/')
          if (o || i)
            throw b(
              t,
              "Invalid character '" +
                (o ? '+' : '/') +
                "' found: is it base64 encoded?"
            )
          e = e.replace(/-/g, '+').replace(/_/g, '/')
      }
      var a
      try {
        a = atob(e)
      } catch (e) {
        throw b(t, 'Invalid character found')
      }
      for (var s = new Uint8Array(a.length), u = 0; u < a.length; u++)
        s[u] = a.charCodeAt(u)
      return s
    }
    var T = (function() {
      return function(t) {
        ;(this.base64 = !1), (this.contentType = null)
        var e = t.match(/^data:([^,]+)?,/)
        if (null === e)
          throw b(
            g.DATA_URL,
            "Must be formatted 'data:[<mediatype>][;base64],<data>"
          )
        var r = e[1] || null
        null != r &&
          ((this.base64 = ((n = r),
          (o = ';base64'),
          n.length >= o.length && n.substring(n.length - o.length) === o)),
          (this.contentType = this.base64
            ? r.substring(0, r.length - ';base64'.length)
            : r)),
          (this.rest = t.substring(t.indexOf(',') + 1))
        var n, o
      }
    })()
    var A,
      N = {STATE_CHANGED: 'state_changed'},
      O = {
        RUNNING: 'running',
        PAUSING: 'pausing',
        PAUSED: 'paused',
        SUCCESS: 'success',
        CANCELING: 'canceling',
        CANCELED: 'canceled',
        ERROR: 'error'
      },
      C = {
        RUNNING: 'running',
        PAUSED: 'paused',
        SUCCESS: 'success',
        CANCELED: 'canceled',
        ERROR: 'error'
      }
    function S(t) {
      switch (t) {
        case O.RUNNING:
        case O.PAUSING:
        case O.CANCELING:
          return C.RUNNING
        case O.PAUSED:
          return C.PAUSED
        case O.SUCCESS:
          return C.SUCCESS
        case O.CANCELED:
          return C.CANCELED
        case O.ERROR:
        default:
          return C.ERROR
      }
    }
    function k(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }
    function I(t, e) {
      for (var r in t) k(t, r) && e(r, t[r])
    }
    function L(t) {
      if (null == t) return {}
      var e = {}
      return (
        I(t, function(t, r) {
          e[t] = r
        }),
        e
      )
    }
    function P(t) {
      return new Promise(t)
    }
    function x(t) {
      return Promise.resolve(t)
    }
    function D(t) {
      return null != t
    }
    function M(t) {
      return void 0 !== t
    }
    function W(t) {
      return 'function' == typeof t
    }
    function B(t) {
      return 'object' == typeof t
    }
    function G(t) {
      return B(t) && null !== t
    }
    function j(t) {
      return 'string' == typeof t || t instanceof String
    }
    function q(t) {
      return F() && t instanceof Blob
    }
    function F() {
      return 'undefined' != typeof Blob
    }
    !(function(t) {
      ;(t[(t.NO_ERROR = 0)] = 'NO_ERROR'),
        (t[(t.NETWORK_ERROR = 1)] = 'NETWORK_ERROR'),
        (t[(t.ABORT = 2)] = 'ABORT')
    })(A || (A = {}))
    var H = (function() {
        function t() {
          var t = this
          ;(this.sent_ = !1),
            (this.xhr_ = new XMLHttpRequest()),
            (this.errorCode_ = A.NO_ERROR),
            (this.sendPromise_ = P(function(e, r) {
              t.xhr_.addEventListener('abort', function(r) {
                ;(t.errorCode_ = A.ABORT), e(t)
              }),
                t.xhr_.addEventListener('error', function(r) {
                  ;(t.errorCode_ = A.NETWORK_ERROR), e(t)
                }),
                t.xhr_.addEventListener('load', function(r) {
                  e(t)
                })
            }))
        }
        return (
          (t.prototype.send = function(t, e, r, n) {
            var o = this
            if (this.sent_) throw m('cannot .send() more than once')
            ;((this.sent_ = !0), this.xhr_.open(e, t, !0), D(n)) &&
              I(n, function(t, e) {
                o.xhr_.setRequestHeader(t, e.toString())
              })
            return (
              D(r) ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_
            )
          }),
          (t.prototype.getErrorCode = function() {
            if (!this.sent_) throw m('cannot .getErrorCode() before sending')
            return this.errorCode_
          }),
          (t.prototype.getStatus = function() {
            if (!this.sent_) throw m('cannot .getStatus() before sending')
            try {
              return this.xhr_.status
            } catch (t) {
              return -1
            }
          }),
          (t.prototype.getResponseText = function() {
            if (!this.sent_) throw m('cannot .getResponseText() before sending')
            return this.xhr_.responseText
          }),
          (t.prototype.abort = function() {
            this.xhr_.abort()
          }),
          (t.prototype.getResponseHeader = function(t) {
            return this.xhr_.getResponseHeader(t)
          }),
          (t.prototype.addUploadProgressListener = function(t) {
            D(this.xhr_.upload) &&
              this.xhr_.upload.addEventListener('progress', t)
          }),
          (t.prototype.removeUploadProgressListener = function(t) {
            D(this.xhr_.upload) &&
              this.xhr_.upload.removeEventListener('progress', t)
          }),
          t
        )
      })(),
      z = (function() {
        function t() {}
        return (
          (t.prototype.createXhrIo = function() {
            return new H()
          }),
          t
        )
      })()
    function X(t) {
      var e, r
      try {
        e = JSON.parse(t)
      } catch (t) {
        return null
      }
      return B((r = e)) && !Array.isArray(r) ? e : null
    }
    var V = (function() {
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
          var r, n
          try {
            r = t.makeFromUrl(e)
          } catch (r) {
            return new t(e, '')
          }
          if ('' === r.path) return r
          throw ((n = e),
          new c(
            l.INVALID_DEFAULT_BUCKET,
            "Invalid default bucket '" + n + "'."
          ))
        }),
        (t.makeFromUrl = function(e) {
          var r = null
          for (
            var n = [
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
              o = 0;
            o < n.length;
            o++
          ) {
            var i = n[o],
              a = i.regex.exec(e)
            if (a) {
              var s = a[i.indices.bucket],
                u = a[i.indices.path]
              u || (u = ''), (r = new t(s, u)), i.postModify(r)
              break
            }
          }
          if (null == r)
            throw (function(t) {
              return new c(l.INVALID_URL, "Invalid URL '" + t + "'.")
            })(e)
          return r
        }),
        t
      )
    })()
    function K(t) {
      var e = t.lastIndexOf('/', t.length - 2)
      return -1 === e ? t : t.slice(e + 1)
    }
    function Z(t) {
      return r + o + t
    }
    function J(t) {
      return r + i + t
    }
    function Q(t) {
      var e = encodeURIComponent,
        r = '?'
      return (
        I(t, function(t, n) {
          var o = e(t) + '=' + e(n)
          r = r + o + '&'
        }),
        (r = r.slice(0, -1))
      )
    }
    function Y(t, e) {
      return e
    }
    var $ = (function() {
        return function(t, e, r, n) {
          ;(this.server = t),
            (this.local = e || t),
            (this.writable = !!r),
            (this.xform = n || Y)
        }
      })(),
      tt = null
    function et() {
      if (tt) return tt
      var t = []
      t.push(new $('bucket')),
        t.push(new $('generation')),
        t.push(new $('metageneration')),
        t.push(new $('name', 'fullPath', !0))
      var e = new $('name')
      ;(e.xform = function(t, e) {
        return (function(t) {
          return !j(t) || t.length < 2 ? t : K((t = t))
        })(e)
      }),
        t.push(e)
      var r = new $('size')
      return (
        (r.xform = function(t, e) {
          return D(e) ? +e : e
        }),
        t.push(r),
        t.push(new $('timeCreated')),
        t.push(new $('updated')),
        t.push(new $('md5Hash', null, !0)),
        t.push(new $('cacheControl', null, !0)),
        t.push(new $('contentDisposition', null, !0)),
        t.push(new $('contentEncoding', null, !0)),
        t.push(new $('contentLanguage', null, !0)),
        t.push(new $('contentType', null, !0)),
        t.push(new $('metadata', 'customMetadata', !0)),
        t.push(
          new $('downloadTokens', 'downloadURLs', !1, function(t, e) {
            if (!(j(e) && e.length > 0)) return []
            var r = encodeURIComponent
            return e.split(',').map(function(e) {
              var i = t.bucket,
                a = t.fullPath
              return (
                (function(t) {
                  return n + o + t
                })('/b/' + r(i) + '/o/' + r(a)) + Q({alt: 'media', token: e})
              )
            })
          })
        ),
        (tt = t)
      )
    }
    function rt(t, e, r) {
      for (var n = {type: 'file'}, o = r.length, i = 0; i < o; i++) {
        var a = r[i]
        n[a.local] = a.xform(n, e[a.server])
      }
      return (
        (function(t, e) {
          Object.defineProperty(t, 'ref', {
            get: function() {
              var r = t.bucket,
                n = t.fullPath,
                o = new V(r, n)
              return e.makeStorageReference(o)
            }
          })
        })(n, t),
        n
      )
    }
    function nt(t, e) {
      for (var r = {}, n = e.length, o = 0; o < n; o++) {
        var i = e[o]
        i.writable && (r[i.server] = t[i.local])
      }
      return JSON.stringify(r)
    }
    function ot(t) {
      if (!(t && B(t))) throw 'Expected Metadata object.'
      for (var e in t) {
        var r = t[e]
        if ('customMetadata' === e) {
          if (!B(r)) throw "Expected object for 'customMetadata' mapping."
        } else if (G(r)) throw "Mapping for '" + e + "' cannot be an object."
      }
    }
    function it(t, e, r) {
      for (var n = e.length, o = e.length, i = 0; i < e.length; i++)
        if (e[i].optional) {
          n = i
          break
        }
      var a, s, u, h, p, f
      if (!(n <= r.length && r.length <= o))
        throw ((a = n),
        (s = o),
        (u = t),
        (h = r.length),
        a === s
          ? ((p = a), (f = 1 === a ? 'argument' : 'arguments'))
          : ((p = 'between ' + a + ' and ' + s), (f = 'arguments')),
        new c(
          l.INVALID_ARGUMENT_COUNT,
          'Invalid argument count in `' +
            u +
            '`: Expected ' +
            p +
            ' ' +
            f +
            ', received ' +
            h +
            '.'
        ))
      for (i = 0; i < r.length; i++)
        try {
          e[i].validator(r[i])
        } catch (e) {
          throw e instanceof Error ? _(i, t, e.message) : _(i, t, e)
        }
    }
    var at = (function() {
      return function(t, e) {
        var r = this
        ;(this.validator = function(e) {
          ;(r.optional && !M(e)) || t(e)
        }),
          (this.optional = !!e)
      }
    })()
    function st(t, e) {
      function r(t) {
        if (!j(t)) throw 'Expected string.'
      }
      var n, o, i
      return (
        t
          ? ((o = r),
            (i = t),
            (n = function(t) {
              o(t), i(t)
            }))
          : (n = r),
        new at(n, e)
      )
    }
    function ut(t) {
      return new at(ot, t)
    }
    function ct() {
      return new at(function(t) {
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
    function lt(t, e) {
      return new at(function(e) {
        if (!(null === e || (D(e) && e instanceof Object)))
          throw 'Expected an Object.'
        void 0 !== t && null !== t && t(e)
      }, e)
    }
    function ht(t) {
      return new at(function(t) {
        if (null !== t && !W(t)) throw 'Expected a Function.'
      }, t)
    }
    function pt() {
      return 'undefined' != typeof BlobBuilder
        ? BlobBuilder
        : 'undefined' != typeof WebKitBlobBuilder ? WebKitBlobBuilder : void 0
    }
    var ft = (function() {
      function t(t, e) {
        var r = 0,
          n = ''
        q(t)
          ? ((this.data_ = t), (r = t.size), (n = t.type))
          : t instanceof ArrayBuffer
            ? (e
                ? (this.data_ = new Uint8Array(t))
                : ((this.data_ = new Uint8Array(t.byteLength)),
                  this.data_.set(new Uint8Array(t))),
              (r = this.data_.length))
            : t instanceof Uint8Array &&
              (e
                ? (this.data_ = t)
                : ((this.data_ = new Uint8Array(t.length)), this.data_.set(t)),
              (r = t.length)),
          (this.size_ = r),
          (this.type_ = n)
      }
      return (
        (t.prototype.size = function() {
          return this.size_
        }),
        (t.prototype.type = function() {
          return this.type_
        }),
        (t.prototype.slice = function(e, r) {
          if (q(this.data_)) {
            var n = this.data_,
              o = ((a = e),
              (s = r),
              (i = n).webkitSlice
                ? i.webkitSlice(a, s)
                : i.mozSlice
                  ? i.mozSlice(a, s)
                  : i.slice ? i.slice(a, s) : null)
            return null === o ? null : new t(o)
          }
          var i, a, s
          return new t(new Uint8Array(this.data_.buffer, e, r - e), !0)
        }),
        (t.getBlob = function() {
          for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
          if (F()) {
            var n = e.map(function(e) {
              return e instanceof t ? e.data_ : e
            })
            return new t(
              function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e]
                var r = pt()
                if (void 0 !== r) {
                  for (var n = new r(), o = 0; o < t.length; o++) n.append(t[o])
                  return n.getBlob()
                }
                if (F()) return new Blob(t)
                throw Error(
                  "This browser doesn't seem to support creating Blobs"
                )
              }.apply(null, n)
            )
          }
          var o = e.map(function(t) {
              return j(t) ? E(g.RAW, t).data : t.data_
            }),
            i = 0
          o.forEach(function(t) {
            i += t.byteLength
          })
          var a = new Uint8Array(i),
            s = 0
          return (
            o.forEach(function(t) {
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
    function dt(t, e) {
      return -1 !== t.indexOf(e)
    }
    var _t = (function() {
      return function(t, e, r, n) {
        ;(this.url = t),
          (this.method = e),
          (this.handler = r),
          (this.timeout = n),
          (this.urlParams = {}),
          (this.headers = {}),
          (this.body = null),
          (this.errorHandler = null),
          (this.progressCallback = null),
          (this.successCodes = [200]),
          (this.additionalRetryCodes = [])
      }
    })()
    function vt(t) {
      if (!t) throw p()
    }
    function bt(t, e) {
      return function(r, n) {
        var o = (function(t, e, r) {
          var n = X(e)
          return null === n ? null : rt(t, n, r)
        })(t, n, e)
        return vt(null !== o), o
      }
    }
    function mt(t) {
      return function(e, r) {
        var n, o, i
        return (
          401 === e.getStatus()
            ? (n = new c(
                l.UNAUTHENTICATED,
                'User is not authenticated, please authenticate using Firebase Authentication and try again.'
              ))
            : 402 === e.getStatus()
              ? ((i = t.bucket),
                (n = new c(
                  l.QUOTA_EXCEEDED,
                  "Quota for bucket '" +
                    i +
                    "' exceeded, please view quota on https://firebase.google.com/pricing/."
                )))
              : 403 === e.getStatus()
                ? ((o = t.path),
                  (n = new c(
                    l.UNAUTHORIZED,
                    "User does not have permission to access '" + o + "'."
                  )))
                : (n = r),
          n.setServerResponseProp(r.serverResponseProp()),
          n
        )
      }
    }
    function gt(t) {
      var e = mt(t)
      return function(r, n) {
        var o,
          i = e(r, n)
        return (
          404 === r.getStatus() &&
            ((o = t.path),
            (i = new c(
              l.OBJECT_NOT_FOUND,
              "Object '" + o + "' does not exist."
            ))),
          i.setServerResponseProp(n.serverResponseProp()),
          i
        )
      }
    }
    function yt(t, e, r) {
      var n = Z(e.fullServerUrl()),
        o = t.maxOperationRetryTime(),
        i = new _t(n, 'GET', bt(t, r), o)
      return (i.errorHandler = gt(e)), i
    }
    function Rt(t, e, r) {
      var n = L(r)
      return (
        (n.fullPath = t.path),
        (n.size = e.size()),
        n.contentType ||
          (n.contentType = (function(t, e) {
            return (
              (t && t.contentType) ||
              (e && e.type()) ||
              'application/octet-stream'
            )
          })(null, e)),
        n
      )
    }
    var Et = (function() {
      return function(t, e, r, n) {
        ;(this.current = t),
          (this.total = e),
          (this.finalized = !!r),
          (this.metadata = n || null)
      }
    })()
    function wt(t, e) {
      var r
      try {
        r = t.getResponseHeader('X-Goog-Upload-Status')
      } catch (t) {
        vt(!1)
      }
      return vt(dt(e || ['active'], r)), r
    }
    function Ut(t, e, r, n, o, i, a, s) {
      var u = new Et(0, 0)
      if (
        (a
          ? ((u.current = a.current), (u.total = a.total))
          : ((u.current = 0), (u.total = n.size())),
        n.size() !== u.total)
      )
        throw new c(
          l.SERVER_FILE_WRONG_SIZE,
          'Server recorded incorrect upload file size, please retry the upload.'
        )
      var h = u.total - u.current,
        p = h
      o > 0 && (p = Math.min(p, o))
      var f = u.current,
        _ = f + p,
        v = {
          'X-Goog-Upload-Command': p === h ? 'upload, finalize' : 'upload',
          'X-Goog-Upload-Offset': u.current
        },
        b = n.slice(f, _)
      if (null === b) throw d()
      var m = e.maxUploadRetryTime(),
        g = new _t(
          r,
          'POST',
          function(t, r) {
            var o,
              a = wt(t, ['active', 'final']),
              s = u.current + p,
              c = n.size()
            return (
              (o = 'final' === a ? bt(e, i)(t, r) : null),
              new Et(s, c, 'final' === a, o)
            )
          },
          m
        )
      return (
        (g.headers = v),
        (g.body = b.uploadData()),
        (g.progressCallback = s || null),
        (g.errorHandler = mt(t)),
        g
      )
    }
    var Tt = (function() {
        return function(t, e, r) {
          if (W(t) || D(e) || D(r))
            (this.next = t),
              (this.error = e || null),
              (this.complete = r || null)
          else {
            var n = t
            ;(this.next = n.next || null),
              (this.error = n.error || null),
              (this.complete = n.complete || null)
          }
        }
      })(),
      At = (function() {
        function t(t, e, r, n, o, i) {
          ;(this.bytesTransferred = t),
            (this.totalBytes = e),
            (this.state = r),
            (this.metadata = n),
            (this.task = o),
            (this.ref = i)
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
    function Nt(t) {
      return function() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
        x(!0).then(function() {
          t.apply(null, e)
        })
      }
    }
    var Ot = (function() {
        function t(t, e, r, n, o, i) {
          void 0 === i && (i = null)
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
            (this.location_ = r),
            (this.blob_ = o),
            (this.metadata_ = i),
            (this.mappings_ = n),
            (this.resumable_ = this.shouldDoResumable_(this.blob_)),
            (this.state_ = O.RUNNING),
            (this.errorHandler_ = function(t) {
              ;(a.request_ = null),
                (a.chunkMultiplier_ = 1),
                t.codeEquals(l.CANCELED)
                  ? ((a.needToFetchStatus_ = !0), a.completeTransitions_())
                  : ((a.error_ = t), a.transition_(O.ERROR))
            }),
            (this.metadataErrorHandler_ = function(t) {
              ;(a.request_ = null),
                t.codeEquals(l.CANCELED)
                  ? a.completeTransitions_()
                  : ((a.error_ = t), a.transition_(O.ERROR))
            }),
            (this.promise_ = P(function(t, e) {
              ;(a.resolve_ = t), (a.reject_ = e), a.start_()
            })),
            this.promise_.then(null, function() {})
        }
        return (
          (t.prototype.makeProgressCallback_ = function() {
            var t = this,
              e = this.transferred_
            return function(r, n) {
              t.updateProgress_(e + r)
            }
          }),
          (t.prototype.shouldDoResumable_ = function(t) {
            return t.size() > 262144
          }),
          (t.prototype.start_ = function() {
            this.state_ === O.RUNNING &&
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
            this.authWrapper_.getAuthToken().then(function(r) {
              switch (e.state_) {
                case O.RUNNING:
                  t(r)
                  break
                case O.CANCELING:
                  e.transition_(O.CANCELED)
                  break
                case O.PAUSING:
                  e.transition_(O.PAUSED)
              }
            })
          }),
          (t.prototype.createResumable_ = function() {
            var t = this
            this.resolveToken_(function(e) {
              var r = (function(t, e, r, n, o) {
                  var i = e.bucketOnlyServerUrl(),
                    a = Rt(e, n, o),
                    s = {name: a.fullPath},
                    u = J(i),
                    c = {
                      'X-Goog-Upload-Protocol': 'resumable',
                      'X-Goog-Upload-Command': 'start',
                      'X-Goog-Upload-Header-Content-Length': n.size(),
                      'X-Goog-Upload-Header-Content-Type': a.contentType,
                      'Content-Type': 'application/json; charset=utf-8'
                    },
                    l = nt(a, r),
                    h = t.maxUploadRetryTime(),
                    p = new _t(
                      u,
                      'POST',
                      function(t, e) {
                        var r
                        wt(t)
                        try {
                          r = t.getResponseHeader('X-Goog-Upload-URL')
                        } catch (t) {
                          vt(!1)
                        }
                        return vt(j(r)), r
                      },
                      h
                    )
                  return (
                    (p.urlParams = s),
                    (p.headers = c),
                    (p.body = l),
                    (p.errorHandler = mt(e)),
                    p
                  )
                })(
                  t.authWrapper_,
                  t.location_,
                  t.mappings_,
                  t.blob_,
                  t.metadata_
                ),
                n = t.authWrapper_.makeRequest(r, e)
              ;(t.request_ = n),
                n.getPromise().then(function(e) {
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
            this.resolveToken_(function(r) {
              var n = (function(t, e, r, n) {
                  var o = t.maxUploadRetryTime(),
                    i = new _t(
                      r,
                      'POST',
                      function(t, e) {
                        var r,
                          o = wt(t, ['active', 'final'])
                        try {
                          r = t.getResponseHeader('X-Goog-Upload-Size-Received')
                        } catch (t) {
                          vt(!1)
                        }
                        var i = parseInt(r, 10)
                        return vt(!isNaN(i)), new Et(i, n.size(), 'final' === o)
                      },
                      o
                    )
                  return (
                    (i.headers = {'X-Goog-Upload-Command': 'query'}),
                    (i.errorHandler = mt(e)),
                    i
                  )
                })(t.authWrapper_, t.location_, e, t.blob_),
                o = t.authWrapper_.makeRequest(n, r)
              ;(t.request_ = o),
                o.getPromise().then(function(e) {
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
              r = new Et(this.transferred_, this.blob_.size()),
              n = this.uploadUrl_
            this.resolveToken_(function(o) {
              var i
              try {
                i = Ut(
                  t.location_,
                  t.authWrapper_,
                  n,
                  t.blob_,
                  e,
                  t.mappings_,
                  r,
                  t.makeProgressCallback_()
                )
              } catch (e) {
                return (t.error_ = e), void t.transition_(O.ERROR)
              }
              var a = t.authWrapper_.makeRequest(i, o)
              ;(t.request_ = a),
                a.getPromise().then(function(e) {
                  t.increaseMultiplier_(),
                    (t.request_ = null),
                    t.updateProgress_(e.current),
                    e.finalized
                      ? ((t.metadata_ = e.metadata), t.transition_(O.SUCCESS))
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
              var r = yt(t.authWrapper_, t.location_, t.mappings_),
                n = t.authWrapper_.makeRequest(r, e)
              ;(t.request_ = n),
                n.getPromise().then(function(e) {
                  ;(t.request_ = null),
                    (t.metadata_ = e),
                    t.transition_(O.SUCCESS)
                }, t.metadataErrorHandler_)
            })
          }),
          (t.prototype.oneShotUpload_ = function() {
            var t = this
            this.resolveToken_(function(e) {
              var r = (function(t, e, r, n, o) {
                  var i = e.bucketOnlyServerUrl(),
                    a = {'X-Goog-Upload-Protocol': 'multipart'},
                    s = (function() {
                      for (var t = '', e = 0; e < 2; e++)
                        t += Math.random()
                          .toString()
                          .slice(2)
                      return t
                    })()
                  a['Content-Type'] = 'multipart/related; boundary=' + s
                  var u = Rt(e, n, o),
                    c =
                      '--' +
                      s +
                      '\r\nContent-Type: application/json; charset=utf-8\r\n\r\n' +
                      nt(u, r) +
                      '\r\n--' +
                      s +
                      '\r\nContent-Type: ' +
                      u.contentType +
                      '\r\n\r\n',
                    l = '\r\n--' + s + '--',
                    h = ft.getBlob(c, n, l)
                  if (null === h) throw d()
                  var p = {name: u.fullPath},
                    f = J(i),
                    _ = t.maxUploadRetryTime(),
                    v = new _t(f, 'POST', bt(t, r), _)
                  return (
                    (v.urlParams = p),
                    (v.headers = a),
                    (v.body = h.uploadData()),
                    (v.errorHandler = mt(e)),
                    v
                  )
                })(
                  t.authWrapper_,
                  t.location_,
                  t.mappings_,
                  t.blob_,
                  t.metadata_
                ),
                n = t.authWrapper_.makeRequest(r, e)
              ;(t.request_ = n),
                n.getPromise().then(function(e) {
                  ;(t.request_ = null),
                    (t.metadata_ = e),
                    t.updateProgress_(t.blob_.size()),
                    t.transition_(O.SUCCESS)
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
                case O.CANCELING:
                case O.PAUSING:
                  ;(this.state_ = t),
                    null !== this.request_ && this.request_.cancel()
                  break
                case O.RUNNING:
                  var e = this.state_ === O.PAUSED
                  ;(this.state_ = t),
                    e && (this.notifyObservers_(), this.start_())
                  break
                case O.PAUSED:
                  ;(this.state_ = t), this.notifyObservers_()
                  break
                case O.CANCELED:
                  ;(this.error_ = f()),
                    (this.state_ = t),
                    this.notifyObservers_()
                  break
                case O.ERROR:
                case O.SUCCESS:
                  ;(this.state_ = t), this.notifyObservers_()
              }
          }),
          (t.prototype.completeTransitions_ = function() {
            switch (this.state_) {
              case O.PAUSING:
                this.transition_(O.PAUSED)
                break
              case O.CANCELING:
                this.transition_(O.CANCELED)
                break
              case O.RUNNING:
                this.start_()
            }
          }),
          Object.defineProperty(t.prototype, 'snapshot', {
            get: function() {
              var t = S(this.state_)
              return new At(
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
          (t.prototype.on = function(t, e, r, n) {
            void 0 === e && (e = void 0),
              void 0 === r && (r = void 0),
              void 0 === n && (n = void 0)
            var o =
                'Expected a function or an Object with one of `next`, `error`, `complete` properties.',
              i = ht(!0).validator,
              a = lt(null, !0).validator
            function s(t) {
              try {
                return void i(t)
              } catch (t) {}
              try {
                if ((a(t), !(M(t.next) || M(t.error) || M(t.complete))))
                  throw ''
                return
              } catch (t) {
                throw o
              }
            }
            it(
              'on',
              [
                st(function(e) {
                  if (t !== N.STATE_CHANGED)
                    throw 'Expected one of the event types: [' +
                      N.STATE_CHANGED +
                      '].'
                }),
                lt(s, !0),
                ht(!0),
                ht(!0)
              ],
              arguments
            )
            var u = this
            function c(t) {
              return function(e, r, o) {
                null !== t && it('on', t, arguments)
                var i = new Tt(e, r, n)
                return (
                  u.addObserver_(i),
                  function() {
                    u.removeObserver_(i)
                  }
                )
              }
            }
            var l = [
              lt(function(t) {
                if (null === t) throw o
                s(t)
              }),
              ht(!0),
              ht(!0)
            ]
            return !(M(e) || M(r) || M(n)) ? c(l) : c(null)(e, r, n)
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
            var e, r, n
            ;(e = this.observers_),
              (r = t),
              -1 !== (n = e.indexOf(r)) && e.splice(n, 1)
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
              switch (S(this.state_)) {
                case C.SUCCESS:
                  Nt(this.resolve_.bind(null, this.snapshot))()
                  break
                case C.CANCELED:
                case C.ERROR:
                  Nt(this.reject_.bind(null, this.error_))()
                  break
                default:
                  t = !1
              }
              t && ((this.resolve_ = null), (this.reject_ = null))
            }
          }),
          (t.prototype.notifyObserver_ = function(t) {
            switch (S(this.state_)) {
              case C.RUNNING:
              case C.PAUSED:
                null !== t.next && Nt(t.next.bind(t, this.snapshot))()
                break
              case C.SUCCESS:
                null !== t.complete && Nt(t.complete.bind(t))()
                break
              case C.CANCELED:
              case C.ERROR:
                null !== t.error && Nt(t.error.bind(t, this.error_))()
                break
              default:
                null !== t.error && Nt(t.error.bind(t, this.error_))()
            }
          }),
          (t.prototype.resume = function() {
            it('resume', [], arguments)
            var t = this.state_ === O.PAUSED || this.state_ === O.PAUSING
            return t && this.transition_(O.RUNNING), t
          }),
          (t.prototype.pause = function() {
            it('pause', [], arguments)
            var t = this.state_ === O.RUNNING
            return t && this.transition_(O.PAUSING), t
          }),
          (t.prototype.cancel = function() {
            it('cancel', [], arguments)
            var t = this.state_ === O.RUNNING || this.state_ === O.PAUSING
            return t && this.transition_(O.CANCELING), t
          }),
          t
        )
      })(),
      Ct = (function() {
        function t(t, e) {
          ;(this.authWrapper = t),
            (this.location = e instanceof V ? e : V.makeFromUrl(e))
        }
        return (
          (t.prototype.toString = function() {
            return (
              it('toString', [], arguments),
              'gs://' + this.location.bucket + '/' + this.location.path
            )
          }),
          (t.prototype.newRef = function(e, r) {
            return new t(e, r)
          }),
          (t.prototype.mappings = function() {
            return et()
          }),
          (t.prototype.child = function(t) {
            it('child', [st()], arguments)
            var e = (function(t, e) {
                var r = e
                  .split('/')
                  .filter(function(t) {
                    return t.length > 0
                  })
                  .join('/')
                return 0 === t.length ? r : t + '/' + r
              })(this.location.path, t),
              r = new V(this.location.bucket, e)
            return this.newRef(this.authWrapper, r)
          }),
          Object.defineProperty(t.prototype, 'parent', {
            get: function() {
              var t = (function(t) {
                if (0 == t.length) return null
                var e = t.lastIndexOf('/')
                return -1 === e ? '' : t.slice(0, e)
              })(this.location.path)
              if (null === t) return null
              var e = new V(this.location.bucket, t)
              return this.newRef(this.authWrapper, e)
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, 'root', {
            get: function() {
              var t = new V(this.location.bucket, '')
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
              return K(this.location.path)
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
              it(
                'put',
                [
                  new at(function(t) {
                    if (
                      !(
                        t instanceof Uint8Array ||
                        t instanceof ArrayBuffer ||
                        (F() && t instanceof Blob)
                      )
                    )
                      throw 'Expected Blob or File.'
                  }),
                  ut(!0)
                ],
                arguments
              ),
              this.throwIfRoot_('put'),
              new Ot(
                this,
                this.authWrapper,
                this.location,
                this.mappings(),
                new ft(t),
                e
              )
            )
          }),
          (t.prototype.putString = function(t, e, r) {
            void 0 === e && (e = g.RAW),
              it('putString', [st(), st(y, !0), ut(!0)], arguments),
              this.throwIfRoot_('putString')
            var n = E(e, t),
              o = L(r)
            return (
              !D(o.contentType) &&
                D(n.contentType) &&
                (o.contentType = n.contentType),
              new Ot(
                this,
                this.authWrapper,
                this.location,
                this.mappings(),
                new ft(n.data, !0),
                o
              )
            )
          }),
          (t.prototype.delete = function() {
            it('delete', [], arguments), this.throwIfRoot_('delete')
            var t = this
            return this.authWrapper.getAuthToken().then(function(e) {
              var r = (function(t, e) {
                var r = Z(e.fullServerUrl()),
                  n = t.maxOperationRetryTime(),
                  o = new _t(r, 'DELETE', function(t, e) {}, n)
                return (
                  (o.successCodes = [200, 204]), (o.errorHandler = gt(e)), o
                )
              })(t.authWrapper, t.location)
              return t.authWrapper.makeRequest(r, e).getPromise()
            })
          }),
          (t.prototype.getMetadata = function() {
            it('getMetadata', [], arguments), this.throwIfRoot_('getMetadata')
            var t = this
            return this.authWrapper.getAuthToken().then(function(e) {
              var r = yt(t.authWrapper, t.location, t.mappings())
              return t.authWrapper.makeRequest(r, e).getPromise()
            })
          }),
          (t.prototype.updateMetadata = function(t) {
            it('updateMetadata', [ut()], arguments),
              this.throwIfRoot_('updateMetadata')
            var e = this
            return this.authWrapper.getAuthToken().then(function(r) {
              var n = (function(t, e, r, n) {
                var o = Z(e.fullServerUrl()),
                  i = nt(r, n),
                  a = t.maxOperationRetryTime(),
                  s = new _t(o, 'PATCH', bt(t, n), a)
                return (
                  (s.headers = {
                    'Content-Type': 'application/json; charset=utf-8'
                  }),
                  (s.body = i),
                  (s.errorHandler = gt(e)),
                  s
                )
              })(e.authWrapper, e.location, t, e.mappings())
              return e.authWrapper.makeRequest(n, r).getPromise()
            })
          }),
          (t.prototype.getDownloadURL = function() {
            return (
              it('getDownloadURL', [], arguments),
              this.throwIfRoot_('getDownloadURL'),
              this.getMetadata().then(function(t) {
                var e = t.downloadURLs[0]
                if (D(e)) return e
                throw new c(
                  l.NO_DOWNLOAD_URL,
                  'The given file does not have any download URLs.'
                )
              })
            )
          }),
          (t.prototype.throwIfRoot_ = function(t) {
            if ('' === this.location.path)
              throw (function(t) {
                return new c(
                  l.INVALID_ROOT_OPERATION,
                  "The operation '" +
                    t +
                    "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
                )
              })(t)
          }),
          t
        )
      })(),
      St = (function() {
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
      kt = (function() {
        function t() {
          ;(this.map_ = {}), (this.id_ = u)
        }
        return (
          (t.prototype.addRequest = function(t) {
            var e = this.id_
            this.id_++, (this.map_[e] = t)
            var r = this
            function n() {
              delete r.map_[e]
            }
            t.getPromise().then(n, n)
          }),
          (t.prototype.clear = function() {
            I(this.map_, function(t, e) {
              e && e.cancel(!0)
            }),
              (this.map_ = {})
          }),
          t
        )
      })(),
      It = (function() {
        function t(e, r, n, o, i) {
          if (
            ((this.bucket_ = null),
            (this.deleted_ = !1),
            (this.app_ = e),
            null !== this.app_)
          ) {
            var u = this.app_.options
            D(u) && (this.bucket_ = t.extractBucket_(u))
          }
          ;(this.storageRefMaker_ = r),
            (this.requestMaker_ = n),
            (this.pool_ = i),
            (this.service_ = o),
            (this.maxOperationRetryTime_ = a),
            (this.maxUploadRetryTime_ = s),
            (this.requestMap_ = new kt())
        }
        return (
          (t.extractBucket_ = function(t) {
            var e = t.storageBucket || null
            return null == e ? null : V.makeFromBucketSpec(e).bucket
          }),
          (t.prototype.getAuthToken = function() {
            return null !== this.app_ &&
              D(this.app_.INTERNAL) &&
              D(this.app_.INTERNAL.getToken)
              ? this.app_.INTERNAL.getToken().then(
                  function(t) {
                    return null !== t ? t.accessToken : null
                  },
                  function(t) {
                    return null
                  }
                )
              : x(null)
          }),
          (t.prototype.bucket = function() {
            if (this.deleted_) throw v()
            return this.bucket_
          }),
          (t.prototype.service = function() {
            return this.service_
          }),
          (t.prototype.makeStorageReference = function(t) {
            return this.storageRefMaker_(this, t)
          }),
          (t.prototype.makeRequest = function(t, e) {
            if (this.deleted_) return new St(v())
            var r = this.requestMaker_(t, e, this.pool_)
            return this.requestMap_.addRequest(r), r
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
    var Lt = (function() {
        function t(t, e, r, n, o, i, a, s, u, c, l) {
          ;(this.pendingXhr_ = null),
            (this.backoffId_ = null),
            (this.resolve_ = null),
            (this.reject_ = null),
            (this.canceled_ = !1),
            (this.appDelete_ = !1),
            (this.url_ = t),
            (this.method_ = e),
            (this.headers_ = r),
            (this.body_ = n),
            (this.successCodes_ = o.slice()),
            (this.additionalRetryCodes_ = i.slice()),
            (this.callback_ = a),
            (this.errorCallback_ = s),
            (this.progressCallback_ = c),
            (this.timeout_ = u),
            (this.pool_ = l)
          var h = this
          this.promise_ = P(function(t, e) {
            ;(h.resolve_ = t), (h.reject_ = e), h.start_()
          })
        }
        return (
          (t.prototype.start_ = function() {
            var t = this
            function e(e, r) {
              var n,
                o = t.resolve_,
                i = t.reject_,
                a = r.xhr
              if (r.wasSuccessCode)
                try {
                  var s = t.callback_(a, a.getResponseText())
                  M(s) ? o(s) : o()
                } catch (t) {
                  i(t)
                }
              else
                null !== a
                  ? ((n = p()).setServerResponseProp(a.getResponseText()),
                    t.errorCallback_ ? i(t.errorCallback_(a, n)) : i(n))
                  : r.canceled
                    ? i((n = t.appDelete_ ? v() : f()))
                    : i(
                        (n = new c(
                          l.RETRY_LIMIT_EXCEEDED,
                          'Max retry time for operation exceeded, please try again.'
                        ))
                      )
            }
            this.canceled_
              ? e(0, new Pt(!1, null, !0))
              : (this.backoffId_ = (function(t, e, r) {
                  var n = 1,
                    o = null,
                    i = !1,
                    a = 0
                  function s() {
                    return 2 === a
                  }
                  var u = !1
                  function c() {
                    u || ((u = !0), e.apply(null, arguments))
                  }
                  function l(e) {
                    o = setTimeout(function() {
                      ;(o = null), t(h, s())
                    }, e)
                  }
                  function h(t) {
                    for (var e, r = [], o = 1; o < arguments.length; o++)
                      r[o - 1] = arguments[o]
                    u ||
                      (t
                        ? c.apply(null, arguments)
                        : s() || i
                          ? c.apply(null, arguments)
                          : (n < 64 && (n *= 2),
                            1 === a
                              ? ((a = 2), (e = 0))
                              : (e = 1e3 * (n + Math.random())),
                            l(e)))
                  }
                  var p = !1
                  function f(t) {
                    p ||
                      ((p = !0),
                      u ||
                        (null !== o
                          ? (t || (a = 2), clearTimeout(o), l(0))
                          : t || (a = 1)))
                  }
                  return (
                    l(0),
                    setTimeout(function() {
                      ;(i = !0), f(!0)
                    }, r),
                    f
                  )
                })(
                  function(e, r) {
                    if (r) e(!1, new Pt(!1, null, !0))
                    else {
                      var n = t.pool_.createXhrIo()
                      ;(t.pendingXhr_ = n),
                        null !== t.progressCallback_ &&
                          n.addUploadProgressListener(o),
                        n
                          .send(t.url_, t.method_, t.body_, t.headers_)
                          .then(function(r) {
                            null !== t.progressCallback_ &&
                              r.removeUploadProgressListener(o),
                              (t.pendingXhr_ = null)
                            var n = (r = r).getErrorCode() === A.NO_ERROR,
                              i = r.getStatus()
                            if (n && !t.isRetryStatusCode_(i)) {
                              var a = dt(t.successCodes_, i)
                              e(!0, new Pt(a, r))
                            } else {
                              var s = r.getErrorCode() === A.ABORT
                              e(!1, new Pt(!1, null, s))
                            }
                          })
                    }
                    function o(e) {
                      var r = e.loaded,
                        n = e.lengthComputable ? e.total : -1
                      null !== t.progressCallback_ && t.progressCallback_(r, n)
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
              r = dt([408, 429], t),
              n = dt(this.additionalRetryCodes_, t)
            return e || r || n
          }),
          t
        )
      })(),
      Pt = (function() {
        return function(t, e, r) {
          ;(this.wasSuccessCode = t), (this.xhr = e), (this.canceled = !!r)
        }
      })()
    function xt(t, r, n) {
      var o = Q(t.urlParams),
        i = t.url + o,
        a = L(t.headers)
      return (
        (function(t, e) {
          null !== e && e.length > 0 && (t.Authorization = 'Firebase ' + e)
        })(a, r),
        (function(t) {
          var r = void 0 !== e ? e.SDK_VERSION : 'AppManager'
          t['X-Firebase-Storage-Version'] = 'webjs/' + r
        })(a),
        new Lt(
          i,
          t.method,
          a,
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
    var Dt = (function() {
        function t(t, e, r) {
          if (
            ((this.bucket_ = null),
            (this.authWrapper_ = new It(
              t,
              function(t, e) {
                return new Ct(t, e)
              },
              xt,
              this,
              e
            )),
            (this.app_ = t),
            null != r)
          )
            this.bucket_ = V.makeFromBucketSpec(r)
          else {
            var n = this.authWrapper_.bucket()
            null != n && (this.bucket_ = new V(n, ''))
          }
          this.internals_ = new Mt(this)
        }
        return (
          (t.prototype.ref = function(t) {
            if (
              (it(
                'ref',
                [
                  st(function(t) {
                    if (/^[A-Za-z]+:\/\//.test(t))
                      throw 'Expected child path but got a URL, use refFromURL instead.'
                  }, !0)
                ],
                arguments
              ),
              null == this.bucket_)
            )
              throw new Error('No Storage Bucket defined in Firebase Options.')
            var e = new Ct(this.authWrapper_, this.bucket_)
            return null != t ? e.child(t) : e
          }),
          (t.prototype.refFromURL = function(t) {
            return (
              it(
                'refFromURL',
                [
                  st(function(t) {
                    if (!/^[A-Za-z]+:\/\//.test(t))
                      throw 'Expected full URL but got a child path, use ref instead.'
                    try {
                      V.makeFromUrl(t)
                    } catch (t) {
                      throw 'Expected valid full URL but got an invalid one.'
                    }
                  }, !1)
                ],
                arguments
              ),
              new Ct(this.authWrapper_, t)
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
            it('setMaxUploadRetryTime', [ct()], arguments),
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
            it('setMaxOperationRetryTime', [ct()], arguments),
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
      Mt = (function() {
        function t(t) {
          this.service_ = t
        }
        return (
          (t.prototype.delete = function() {
            return this.service_.authWrapper_.deleteApp(), x(void 0)
          }),
          t
        )
      })(),
      Wt = 'storage'
    function Bt(t, e, r) {
      return new Dt(t, new z(), r)
    }
    ;(Gt = {
      TaskState: C,
      TaskEvent: N,
      StringFormat: g,
      Storage: Dt,
      Reference: Ct
    }),
      e.INTERNAL.registerService(Wt, Bt, Gt, void 0, !0)
    return {}
  } catch (t) {
    throw (console.error(t),
    new Error(
      'Cannot instantiate firebase-storage - be sure to load firebase-app.js first.'
    ))
  }
  var Gt
})((this.firebase = this.firebase || {}), firebase)
//# sourceMappingURL=firebase-storage.js.map
