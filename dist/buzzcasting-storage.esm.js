var _ = /* @__PURE__ */ ((p) => (p.MESSAGES = "messages", p.CLOUD = "cloud", p.SERIES = "series", p.TOPICS = "topics", p.WIDGET = "widget", p.WIDGETS = "widgets", p.DASHBOARD = "dashboard", p.DASHBOARDS = "dashboards", p.SLIDE = "slide", p.SLIDES = "slides", p.PRESENTATION = "presentation", p.PRESENTATIONS = "presentations", p.PREFERENCE = "preference", p.PREFERENCES = "preferences", p))(_ || {}), c = /* @__PURE__ */ ((p) => (p.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", p.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", p.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", p.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", p.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", p.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", p.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", p.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", p.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", p.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", p.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", p.NONE = "color:transparent;background-color:transparent;", p.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", p.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", p.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", p.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", p.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", p.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", p.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", p.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", p))(c || {}), J = /* @__PURE__ */ ((p) => (p.ADD_SLIDE = "addSlide", p.APP_READY = "appReady", p.API_UPDATE = "apiUpdate", p.WS_API_REQUEST = "wsApiRequest", p.WS_API_RESPONSE = "wsApiResponse", p.WS_API_UPDATE = "wsApiRUpdate", p.APPROVE_MESSAGE = "approveMessage", p.CHANNEL = "channel", p.CLEAN_MESSAGES = "cleanMessages", p.CLOSE_MODAL = "closeModal", p.CLOSE_BUILDER_MODAL = "closeBuilderModal", p.DASHBOARD_LOAD = "loadDashboard", p.DASHBOARD_STORE = "storeDashboard", p.ERROR = "error", p.HIDE_MESSAGE = "hideMessage", p.HIDE_LABELS = "hideLabels", p.MAUPPUT_UPDATE = "layoutUpdate", p.PREV_SLIDE = "prevSlide", p.RELOAD_PRESENTATION = "reloadPresentation", p.SHOW_MODAL = "showModal", p.STAR_MESSAGE = "starMessage", p.GOTO_SLIDE = "gotoSlide", p.NEXT_SLIDE = "nextSlide", p.PREFERENCE_LOAD = "loadPreference", p.PREFERENCE_STORE = "storePreference", p.PAUSE_PRESENTATION = "pausePresentation", p.PRESENTATION_READY = "presentationReady", p.PRESENTATION_LOAD = "loadPresentation", p.PRESENTATION_STORE = "storePresentation", p.SHOW_BUILDER_MODAL = "showBuilderModal", p.SLIDE_DID_LOAD = "slideDidLoad", p.SLIDE_GOTO = "slideGoto", p.SLIDE_READY = "slideReady", p.SLIDE_LOAD = "loadSlide", p.SLIDE_STORE = "storeSlide", p.SLIDE_TRANSITIONER = "slideTransitioner", p.START_TRANSITIONER = "startTransitioner", p.STORAGE_INIT = "storageInit", p.SUBSCRIBE = "subscribe", p.SUSPEND_ACCOUNT = "suspendAccount", p.SWITCH_PRESENTATION = "switchPresentation", p.REMOVE_CLOUD = "removeCloud", p.UPDATE = "update", p.VERSION = "version", p.WIDGETS_CLEAR = "widgetsClear", p.WIDGET_LOAD = "widgetLoad", p.WIDGET_STORE = "widgetStore", p.WIDGET_UPDATE = "widgetUpdate", p))(J || {}), en = /* @__PURE__ */ ((p) => (p.APPROVED = "approved", p.BEFORE = "before", p.DELAYED = "delayed", p.NONE = "none", p.REALTIME = "realtime", p))(en || {}), he = /* @__PURE__ */ ((p) => (p.KEYVAL = "keyval", p.LOCAL = "local", p.SESSION = "session", p.DEXIE = "dexie", p.WINDOW = "window", p))(he || {});
function Pa(p) {
  const n = {};
  for (let o = 0; o < p.length; o++) {
    const l = p.item(o);
    l != null && l.name && (n[l.name] = l.value);
  }
  return n;
}
function Da(p) {
  const n = document.createRange();
  n.selectNodeContents(p), n.deleteContents();
}
function Na(p, n) {
  for (; p.length < n; )
    p = `0${p}`;
  return p;
}
function Oe(p, n) {
  let o, l, E;
  if (n.length === 0)
    return p;
  for (o = 0, E = n.length; o < E; o++)
    l = n.charCodeAt(o), p = (p << 5) - p + l, p |= 0;
  return p < 0 ? p * -2 : p;
}
function Ra(p, n, o) {
  return Object.keys(n).sort().reduce(l, p);
  function l(E, O) {
    return jr(E, n[O], O, o);
  }
}
function jr(p, n, o, l) {
  const E = Oe(Oe(Oe(p, o), Ta(n)), typeof n);
  if (n === null)
    return Oe(E, "null");
  if (n === void 0)
    return Oe(E, "undefined");
  if (typeof n == "object" || typeof n == "function") {
    if (l.includes(n))
      return Oe(E, `[Circular]${o}`);
    l.push(n);
    const O = Ra(E, n, l);
    if (!("valueOf" in n) || typeof n.valueOf != "function")
      return O;
    try {
      return Oe(O, String(n.valueOf()));
    } catch (C) {
      return Oe(O, `[valueOf exception]${C.stack || C.message}`);
    }
  }
  return Oe(E, n.toString());
}
function Ta(p) {
  return Object.prototype.toString.call(p);
}
function Fn(p) {
  return Na(jr(0, p, "", []).toString(16), 8);
}
const st = (p) => {
  let n = {}, o = p.split(",");
  for (let l = 0; l < o.length; l++) n[o[l]] = !0;
  return n;
};
st(
  "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
);
st(
  "a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
);
st(
  "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
);
st("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
st(
  "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
);
st("script,style");
const K = (p = 0, n) => {
  switch (!0) {
    case p > 3:
      console.debug(...n);
      break;
    case p > 2:
      console.info(...n);
      break;
    case p > 1:
      console.warn(...n);
      break;
    case p > 0:
      console.error(...n);
      break;
  }
}, kr = (p) => {
  switch (p?.type) {
    case _.MESSAGES:
      return c.MESSAGES;
    case _.SERIES:
      return c.SERIES;
    case _.CLOUD:
      return c.CLOUD;
    default:
      return c.NO_UPDATES;
  }
};
function Y(p) {
  let n = `${p.type}.${p.topics}`;
  return p.order && (n += `.${p.order}`), p.period && (n += `.${p.period}`), n;
}
function Ia(p) {
  var n;
  if (p.widget === void 0) {
    const o = (n = p.topics) == null ? void 0 : n.split("-");
    o && o.length > 1 ? (p.dashboard = o ? o[0] : "", p.widget = o ? o[1] : "") : (p.widget = p.topics, p.dashboard = p.slide);
  }
  return p;
}
function Ot(p, n) {
  var o;
  let l, E, O, C, G;
  switch (p.moderation) {
    case en.BEFORE:
      l = /* @__PURE__ */ new Date(), E = (o = p.beforeTime) == null ? void 0 : o.split(":"), O = Number.parseInt(E ? E[0] : "00"), C = Number.parseInt(E ? E[1] : "00"), G = Number.parseInt(E ? E[2] : "00"), n.before = l.setHours(O, C, G, 0) / 1e3, n.period || (n.period = l.getDay() === 1 ? 72 : 24);
      break;
    case en.DELAYED:
      p.delay && p.delay > 0 && (n.delay = `${p.delay}`);
      break;
    case en.APPROVED:
      n.approved = "1";
      break;
    default:
      p.period !== 0 && (n.period = p.period);
  }
  return n;
}
const xa = "3.9.11";
class ka {
  options;
  url;
  constructor(n) {
    this.options = n, this.url = `https://${n.app}.buzzcasting.net`;
  }
  headers = () => {
    const n = `Bearer ${this.options.bearer}`;
    return {
      headers: new Headers({
        Authorization: n,
        Accept: "application/json"
        // 'Cache-Control': 'no-cache',
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      })
    };
  };
  formHeaders = () => {
    const n = `Bearer ${this.options.bearer}`;
    return {
      headers: new Headers({
        Authorization: n,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      })
    };
  };
  async get(n) {
    const { version: o } = this.options, l = this.headers(), E = Object.assign({}, n);
    delete E.type, delete E.hash, delete E.order, E.topics = `${E.dashboard}-${E.widget}`, delete E.presentation;
    const O = Object.keys(E).length > 0 ? `?${new URLSearchParams(E).toString()}` : "";
    let C = "";
    switch (n.type) {
      case _.MESSAGES:
        C = c.MESSAGES;
        break;
      case _.SERIES:
        C = c.SERIES;
        break;
      case _.CLOUD:
        C = c.CLOUD;
        break;
    }
    return K(3, [
      `%cfetch%c %capi%c %c${n.type}`,
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      C,
      n.widget
    ]), K(4, [n.type, E]), await fetch(
      [this.url, "api", o, n.type].join("/") + O,
      { ...l, method: "get" }
    ).then(async (G) => {
      if (!G.ok)
        throw new Error(`${G.status}`);
      return G;
    }).then((G) => G.json()).then((G) => (G.query = n, G)).catch((G) => ({ success: !1, message: `${G}`, data: null, query: n }));
  }
  async hideMessage(n) {
    const { version: o } = this.options, l = this.headers(), E = "?action=visible";
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_MESSAGE,
      n.widget,
      n.id
    ), await fetch(
      [this.url, "api", o, "messages", n.id].join("/") + E,
      { ...l, method: "put" }
    ).then((O) => {
      if (!O.ok)
        throw new Error(O.statusText);
      return O;
    }).then((O) => O.json()).catch((O) => ({ succes: !1, message: O, data: [] }));
  }
  async hideLabels(n) {
    const { version: o } = this.options, l = this.formHeaders(), E = new URLSearchParams(), O = n.labels || [];
    for (const [C, G] of O.entries())
      E.append(`custom_filters[${C}]`, G);
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_LABELS,
      n.widget,
      O
    ), await fetch(
      [this.url, "api", o, n.type, n.widget].join("/"),
      { ...l, body: E, method: "put" }
    ).then((C) => {
      if (!C.ok)
        throw new Error(C.statusText);
      return C;
    }).then((C) => C.json()).catch((C) => ({ succes: !1, message: C, data: [] }));
  }
  async loadSlide(n) {
    const { version: o } = this.options, l = this.headers(), E = Object.assign({}, n);
    return delete E.type, delete E.hash, K(3, ["%capi%c %cloadSlide", c.API, c.NONE, c.SLIDE, n.id]), await fetch(
      [this.url, "api", o, "slides", n.id].join("/"),
      { ...l, method: "get" }
    ).then(async (O) => {
      if (!O.ok)
        throw new Error(`${O.status}`);
      return O;
    }).then((O) => O.json()).then((O) => (O.query = n, O.data && O.data.json && (O.data.json = JSON.parse(O.data.json)), O)).catch((O) => ({ success: !1, message: `${O}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storeSlide(n) {
    const { version: o } = this.options, l = this.formHeaders();
    delete n.update, delete n.type;
    const E = JSON.stringify(n);
    return K(3, [
      "%cput%c %capi%c %cslide",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.SLIDE,
      J.SLIDE_STORE,
      n.id
    ]), await fetch(
      [this.url, "api", o, "slides", n.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((O) => {
      if (!O.ok)
        throw new Error(O.statusText);
      return O;
    }).then((O) => O.json()).catch((O) => ({ succes: !1, message: O, data: [] }));
  }
  async loadPresentation(n) {
    const { version: o } = this.options, l = this.headers();
    return delete n.update, K(3, [
      "%cload%c %capi%c %cloadPresentation",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.PRESENTATION,
      n.id
    ]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, n.id].join("/"),
      { ...l, method: "get" }
    ).then(async (E) => {
      if (!E.ok)
        throw new Error(`${E.status}`);
      return E;
    }).then((E) => E.json()).then((E) => (E.query = n, E)).catch((E) => ({ success: !1, message: `${E}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storePresentation(n) {
    const { version: o } = this.options, l = this.formHeaders();
    delete n.update;
    const E = JSON.stringify(n);
    return K(2, ["%capi%c %cput", c.API, c.NONE, c.PRESENTATION, n.name]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, n.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((O) => {
      if (!O.ok)
        throw new Error(O.statusText);
      return O;
    }).then((O) => O.json()).catch((O) => ({ succes: !1, message: O, data: [] }));
  }
  async loadPreference(n) {
    const { version: o } = this.options, l = this.headers();
    return K(3, [
      "%capi%c %cloadPreference",
      c.API,
      c.NONE,
      c.APP,
      n.id
    ]), await fetch(
      [this.url, "api", o, _.PREFERENCES, n.id].join("/"),
      { ...l, method: "get" }
    ).then(async (E) => {
      if (!E.ok)
        throw new Error(`${E.status}`);
      return E;
    }).then((E) => E.json()).then((E) => E).catch((E) => ({ success: !1, message: `${E}`, data: null }));
  }
  async storePreference(n) {
    const { version: o } = this.options, l = this.formHeaders();
    delete n.update;
    const E = JSON.stringify({ data: n });
    return console.info(
      "%capi%c %cstorePreference",
      c.API,
      c.NONE,
      c.APP,
      n.id
    ), await fetch(
      [this.url, "api", o, _.PREFERENCES, n.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((O) => {
      if (!O.ok)
        throw new Error(O.statusText);
      return O;
    }).then((O) => O.json()).catch((O) => ({ succes: !1, message: O, data: [] }));
  }
  /*public async loadDashboardWidgets(query: IQuery): Promise<any> {
  		if (query?.dashboard === undefined)
  			return { success: false, message: `Dashboard ID not defines`, data: null };
  		const { version }: IStorageOptions = this.options;
  		const headers = this.headers();
  
  		log(3,[
  			"%capi%c %cloadDashboardWidget",
  			CSS.API,
  			CSS.NONE,
  			CSS.WIDGET,
  			query.id
  		);
  		return await fetch(
  			[this.url, "api", version, API.WIDGETS, query.dashboard].join("/"),
  			{ ...headers, method: "get" }
  		)
  			.then(async (response: Response) => {
  				if (!response.ok) {
  					throw new Error(`${response.status}`);
  				}
  				return response;
  			})
  			.then((response: Response) => {
  				return response.json();
  			})
  			.then((json: IWidget[]): IResponse => {
  				return {
  					data: { widgets: json},
  					message: "Dashboard Widgets loaded from api",
  					success: true
  				};
  			})
  			.catch((code) => {
  				return { success: false, message: `${code}`, data: null, query: query };
  			});
  	}*/
  async loadDashboards(n) {
    const { version: o } = this.options, l = this.headers();
    return K(3, ["%capi%c %dashboards", c.API, c.NONE, c.WIDGET]), await fetch(
      [this.url, "api", o, _.WIDGETS, n?.id || ""].join("/"),
      {
        ...l,
        method: "get"
      }
    ).then(async (E) => {
      if (!E.ok)
        throw new Error(`${E.status}`);
      return E;
    }).then((E) => E.json()).then((E) => ({
      data: { dashboards: E },
      message: "Dashboard Widgets loaded from api",
      success: !0
    })).catch((E) => ({ success: !1, message: `${E}`, data: null }));
  }
}
var Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $a(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var tn = { exports: {} }, ja = tn.exports, Cr;
function Ma() {
  return Cr || (Cr = 1, function(p, n) {
    (function(o, l) {
      p.exports = l();
    })(ja, function() {
      var o = function(e, t) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
          r.__proto__ = a;
        } || function(r, a) {
          for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
        })(e, t);
      }, l = function() {
        return (l = Object.assign || function(e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }).apply(this, arguments);
      };
      function E(e, t, r) {
        for (var a, s = 0, i = t.length; s < i; s++) !a && s in t || ((a = a || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(a || Array.prototype.slice.call(t));
      }
      var O = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, C = Object.keys, G = Array.isArray;
      function te(e, t) {
        return typeof t != "object" || C(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || O.Promise || (O.Promise = Promise);
      var ge = Object.getPrototypeOf, Ce = {}.hasOwnProperty;
      function ie(e, t) {
        return Ce.call(e, t);
      }
      function be(e, t) {
        typeof t == "function" && (t = t(ge(e))), (typeof Reflect > "u" ? C : Reflect.ownKeys)(t).forEach(function(r) {
          Ae(e, r, t[r]);
        });
      }
      var _t = Object.defineProperty;
      function Ae(e, t, r, a) {
        _t(e, t, te(r && ie(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, a));
      }
      function Ye(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Ae(e.prototype, "constructor", e), { extend: be.bind(null, e.prototype) };
        } };
      }
      var Fr = Object.getOwnPropertyDescriptor, Ur = [].slice;
      function At(e, t, r) {
        return Ur.call(e, t, r);
      }
      function Vn(e, t) {
        return t(e);
      }
      function ot(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Yn(e) {
        O.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ve(e, t) {
        if (typeof t == "string" && ie(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], a = 0, s = t.length; a < s; ++a) {
            var i = ve(e, t[a]);
            r.push(i);
          }
          return r;
        }
        var u = t.indexOf(".");
        if (u !== -1) {
          var d = e[t.substr(0, u)];
          return d == null ? void 0 : ve(d, t.substr(u + 1));
        }
      }
      function ue(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          ot(typeof r != "string" && "length" in r);
          for (var a = 0, s = t.length; a < s; ++a) ue(e, t[a], r[a]);
        } else {
          var i, u, d = t.indexOf(".");
          d !== -1 ? (i = t.substr(0, d), (u = t.substr(d + 1)) === "" ? r === void 0 ? G(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = r : ue(d = !(d = e[i]) || !ie(e, i) ? e[i] = {} : d, u, r)) : r === void 0 ? G(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Qn(e) {
        var t, r = {};
        for (t in e) ie(e, t) && (r[t] = e[t]);
        return r;
      }
      var zr = [].concat;
      function Xn(e) {
        return zr.apply([], e);
      }
      var Ke = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xn([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return O[e];
      }), Jn = new Set(Ke.map(function(e) {
        return O[e];
      })), it = null;
      function $e(e) {
        return it = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var a = it.get(r);
          if (a) return a;
          if (G(r)) {
            a = [], it.set(r, a);
            for (var s = 0, i = r.length; s < i; ++s) a.push(t(r[s]));
          } else if (Jn.has(r.constructor)) a = r;
          else {
            var u, d = ge(r);
            for (u in a = d === Object.prototype ? {} : Object.create(d), it.set(r, a), r) ie(r, u) && (a[u] = t(r[u]));
          }
          return a;
        }(e), it = null, e;
      }
      var Hr = {}.toString;
      function nn(e) {
        return Hr.call(e).slice(8, -1);
      }
      var rn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Vr = typeof rn == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[rn]) && t.apply(e);
      } : function() {
        return null;
      };
      function je(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var Qe = {};
      function Ee(e) {
        var t, r, a, s;
        if (arguments.length === 1) {
          if (G(e)) return e.slice();
          if (this === Qe && typeof e == "string") return [e];
          if (s = Vr(e)) {
            for (r = []; !(a = s.next()).done; ) r.push(a.value);
            return r;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (r = new Array(t); t--; ) r[t] = e[t];
          return r;
        }
        for (t = arguments.length, r = new Array(t); t--; ) r[t] = arguments[t];
        return r;
      }
      var an = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, lt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], fe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(lt), Yr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Xe(e, t) {
        this.name = e, this.message = t;
      }
      function Zn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, a, s) {
          return s.indexOf(r) === a;
        }).join(`
`);
      }
      function Pt(e, t, r, a) {
        this.failures = t, this.failedKeys = a, this.successCount = r, this.message = Zn(e, t);
      }
      function Je(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = Zn(e, this.failures);
      }
      Ye(Xe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ye(Pt).from(Xe), Ye(Je).from(Xe);
      var sn = fe.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Qr = Xe, L = fe.reduce(function(e, t) {
        var r = t + "Error";
        function a(s, i) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(i ? `
 ` + i : ""), this.inner = i || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Yr[t] || r, this.inner = null);
        }
        return Ye(a).from(Qr), e[t] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var qn = lt.reduce(function(e, t) {
        return e[t + "Error"] = L[t], e;
      }, {}), Dt = fe.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = L[t]), e;
      }, {});
      function Q() {
      }
      function ct(e) {
        return e;
      }
      function Xr(e, t) {
        return e == null || e === ct ? t : function(r) {
          return t(e(r));
        };
      }
      function Me(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Jr(e, t) {
        return e === Q ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var a = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var i = t.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? Me(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? Me(s, this.onerror) : s), i !== void 0 ? i : r;
        };
      }
      function Zr(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Me(r, this.onsuccess) : r), a && (this.onerror = this.onerror ? Me(a, this.onerror) : a);
        };
      }
      function qr(e, t) {
        return e === Q ? t : function(r) {
          var a = e.apply(this, arguments);
          te(r, a);
          var s = this.onsuccess, i = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Me(s, this.onsuccess) : s), i && (this.onerror = this.onerror ? Me(i, this.onerror) : i), a === void 0 ? r === void 0 ? void 0 : r : te(a, r);
        };
      }
      function ea(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function on(e, t) {
        return e === Q ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var a = this, s = arguments.length, i = new Array(s); s--; ) i[s] = arguments[s];
            return r.then(function() {
              return t.apply(a, i);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Dt.ModifyError = Pt, Dt.DexieError = Xe, Dt.BulkError = Je;
      var pe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function er(e) {
        pe = e;
      }
      var ut = {}, tr = 100, Ke = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, ge(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, ge(t), e];
      }(), lt = Ke[0], fe = Ke[1], Ke = Ke[2], fe = fe && fe.then, Ge = lt && lt.constructor, cn = !!Ke, dt = function(e, t) {
        ft.push([e, t]), Nt && (queueMicrotask(na), Nt = !1);
      }, un = !0, Nt = !0, Be = [], Rt = [], ln = ct, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Pe, ft = [], Le = 0, Tt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = B;
        if (typeof e != "function") {
          if (e !== ut) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && fn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(a, s) {
          try {
            s(function(i) {
              if (a._state === null) {
                if (i === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Ze();
                i && typeof i.then == "function" ? r(a, function(d, h) {
                  i instanceof j ? i._then(d, h) : i.then(d, h);
                }) : (a._state = !0, a._value = i, rr(a)), u && qe();
              }
            }, fn.bind(null, a));
          } catch (i) {
            fn(a, i);
          }
        }(this, e);
      }
      var dn = { get: function() {
        var e = B, t = Ct;
        function r(a, s) {
          var i = this, u = !e.global && (e !== B || t !== Ct), d = u && !Ne(), h = new j(function(m, v) {
            hn(i, new nr(sr(a, e, u, d), sr(s, e, u, d), m, v, e));
          });
          return this._consoleTask && (h._consoleTask = this._consoleTask), h;
        }
        return r.prototype = ut, r;
      }, set: function(e) {
        Ae(this, "then", e && e.prototype === ut ? dn : { get: function() {
          return e;
        }, set: dn.set });
      } };
      function nr(e, t, r, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = a, this.psd = s;
      }
      function fn(e, t) {
        var r, a;
        Rt.push(t), e._state === null && (r = e._lib && Ze(), t = ln(t), e._state = !1, e._value = t, a = e, Be.some(function(s) {
          return s._value === a._value;
        }) || Be.push(a), rr(e), r && qe());
      }
      function rr(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, a = t.length; r < a; ++r) hn(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Le === 0 && (++Le, dt(function() {
          --Le == 0 && gn();
        }, []));
      }
      function hn(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Le, dt(ta, [r, e, t]);
        } else e._listeners.push(t);
      }
      function ta(e, t, r) {
        try {
          var a, s = t._value;
          !t._state && Rt.length && (Rt = []), a = pe && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || Rt.indexOf(s) !== -1 || function(i) {
            for (var u = Be.length; u; ) if (Be[--u]._value === i._value) return Be.splice(u, 1);
          }(t), r.resolve(a);
        } catch (i) {
          r.reject(i);
        } finally {
          --Le == 0 && gn(), --r.psd.ref || r.psd.finalize();
        }
      }
      function na() {
        We(Pe, function() {
          Ze() && qe();
        });
      }
      function Ze() {
        var e = un;
        return Nt = un = !1, e;
      }
      function qe() {
        var e, t, r;
        do
          for (; 0 < ft.length; ) for (e = ft, ft = [], r = e.length, t = 0; t < r; ++t) {
            var a = e[t];
            a[0].apply(null, a[1]);
          }
        while (0 < ft.length);
        Nt = un = !0;
      }
      function gn() {
        var e = Be;
        Be = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var t = Tt.slice(0), r = t.length; r; ) t[--r]();
      }
      function It(e) {
        return new j(ut, !1, e);
      }
      function Z(e, t) {
        var r = B;
        return function() {
          var a = Ze(), s = B;
          try {
            return Re(r, !0), e.apply(this, arguments);
          } catch (i) {
            t && t(i);
          } finally {
            Re(s, !1), a && qe();
          }
        };
      }
      be(j.prototype, { then: dn, _then: function(e, t) {
        hn(this, new nr(null, null, e, t, B));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(a) {
          return (a instanceof t ? r : It)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === t ? r : It)(a);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return It(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new j(function(a, s) {
          var i = setTimeout(function() {
            return s(new L.Timeout(t));
          }, e);
          r.then(a, s).finally(clearTimeout.bind(null, i));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = ar(), be(j, { all: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t, r) {
          e.length === 0 && t([]);
          var a = e.length;
          e.forEach(function(s, i) {
            return j.resolve(s).then(function(u) {
              e[i] = u, --a || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(t, r) {
          e.then(t, r);
        }) : new j(ut, !0, e);
      }, reject: It, race: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t, r) {
          e.map(function(a) {
            return j.resolve(a).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return B;
      }, set: function(e) {
        return B = e;
      } }, totalEchoes: { get: function() {
        return Ct;
      } }, newPSD: De, usePSD: We, scheduler: { get: function() {
        return dt;
      }, set: function(e) {
        dt = e;
      } }, rejectionMapper: { get: function() {
        return ln;
      }, set: function(e) {
        ln = e;
      } }, follow: function(e, t) {
        return new j(function(r, a) {
          return De(function(s, i) {
            var u = B;
            u.unhandleds = [], u.onunhandled = i, u.finalize = Me(function() {
              var d, h = this;
              d = function() {
                h.unhandleds.length === 0 ? s() : i(h.unhandleds[0]);
              }, Tt.push(function m() {
                d(), Tt.splice(Tt.indexOf(m), 1);
              }), ++Le, dt(function() {
                --Le == 0 && gn();
              }, []);
            }, u.finalize), e();
          }, t, r, a);
        });
      } }), Ge && (Ge.allSettled && Ae(j, "allSettled", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t) {
          e.length === 0 && t([]);
          var r = e.length, a = new Array(r);
          e.forEach(function(s, i) {
            return j.resolve(s).then(function(u) {
              return a[i] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[i] = { status: "rejected", reason: u };
            }).then(function() {
              return --r || t(a);
            });
          });
        });
      }), Ge.any && typeof AggregateError < "u" && Ae(j, "any", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(i, u) {
            return j.resolve(i).then(function(d) {
              return t(d);
            }, function(d) {
              s[u] = d, --a || r(new AggregateError(s));
            });
          });
        });
      }), Ge.withResolvers && (j.withResolvers = Ge.withResolvers));
      var ne = { awaits: 0, echoes: 0, id: 0 }, ra = 0, xt = [], kt = 0, Ct = 0, aa = 0;
      function De(e, t, r, a) {
        var s = B, i = Object.create(s);
        return i.parent = s, i.ref = 0, i.global = !1, i.id = ++aa, Pe.env, i.env = cn ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && te(i, t), ++s.ref, i.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = We(i, e, r, a), i.ref === 0 && i.finalize(), a;
      }
      function et() {
        return ne.id || (ne.id = ++ra), ++ne.awaits, ne.echoes += tr, ne.id;
      }
      function Ne() {
        return !!ne.awaits && (--ne.awaits == 0 && (ne.id = 0), ne.echoes = ne.awaits * tr, !0);
      }
      function $t(e) {
        return ne.echoes && e && e.constructor === Ge ? (et(), e.then(function(t) {
          return Ne(), t;
        }, function(t) {
          return Ne(), q(t);
        })) : e;
      }
      function sa() {
        var e = xt[xt.length - 1];
        xt.pop(), Re(e, !1);
      }
      function Re(e, t) {
        var r, a = B;
        (t ? !ne.echoes || kt++ && e === B : !kt || --kt && e === B) || queueMicrotask(t ? function(s) {
          ++Ct, ne.echoes && --ne.echoes != 0 || (ne.echoes = ne.awaits = ne.id = 0), xt.push(B), Re(s, !0);
        }.bind(null, e) : sa), e !== B && (B = e, a === Pe && (Pe.env = ar()), cn && (r = Pe.env.Promise, t = e.env, (a.global || e.global) && (Object.defineProperty(O, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ar() {
        var e = O.Promise;
        return cn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(O, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function We(e, t, r, a, s) {
        var i = B;
        try {
          return Re(e, !0), t(r, a, s);
        } finally {
          Re(i, !1);
        }
      }
      function sr(e, t, r, a) {
        return typeof e != "function" ? e : function() {
          var s = B;
          r && et(), Re(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Re(s, !1), a && queueMicrotask(Ne);
          }
        };
      }
      function pn(e) {
        Promise === Ge && ne.echoes === 0 ? kt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + fe).indexOf("[native code]") === -1 && (et = Ne = Q);
      var q = j.reject, Fe = "￿", we = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", or = "String expected.", tt = [], jt = "__dbnames", mn = "readonly", yn = "readwrite";
      function Ue(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var ir = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Mt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = $e(t))[e], t;
        };
      }
      function cr() {
        throw L.Type();
      }
      function H(e, t) {
        try {
          var r = ur(e), a = ur(t);
          if (r !== a) return r === "Array" ? 1 : a === "Array" ? -1 : r === "binary" ? 1 : a === "binary" ? -1 : r === "string" ? 1 : a === "string" ? -1 : r === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, i) {
                for (var u = s.length, d = i.length, h = u < d ? u : d, m = 0; m < h; ++m) if (s[m] !== i[m]) return s[m] < i[m] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(lr(e), lr(t));
            case "Array":
              return function(s, i) {
                for (var u = s.length, d = i.length, h = u < d ? u : d, m = 0; m < h; ++m) {
                  var v = H(s[m], i[m]);
                  if (v !== 0) return v;
                }
                return u === d ? 0 : u < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function ur(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = nn(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function lr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var dr = (X.prototype._trans = function(e, t, r) {
        var a = this._tx || B.trans, s = this.name, i = pe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(m, v, f) {
          if (!f.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return t(f.idbtrans, f);
        }
        var d = Ze();
        try {
          var h = a && a.db._novip === this.db._novip ? a === B.trans ? a._promise(e, u, r) : De(function() {
            return a._promise(e, u, r);
          }, { trans: a, transless: B.transless || B }) : function m(v, f, S, g) {
            if (v.idbdb && (v._state.openComplete || B.letThrough || v._vip)) {
              var b = v._createTransaction(f, S, v._dbSchema);
              try {
                b.create(), v._state.PR1398_maxLoop = 3;
              } catch (w) {
                return w.name === sn.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({ disableAutoOpen: !1 }), v.open().then(function() {
                  return m(v, f, S, g);
                })) : q(w);
              }
              return b._promise(f, function(w, y) {
                return De(function() {
                  return B.trans = b, g(w, y, b);
                });
              }).then(function(w) {
                if (f === "readwrite") try {
                  b.idbtrans.commit();
                } catch {
                }
                return f === "readonly" ? w : b._completion.then(function() {
                  return w;
                });
              });
            }
            if (v._state.openComplete) return q(new L.DatabaseClosed(v._state.dbOpenError));
            if (!v._state.isBeingOpened) {
              if (!v._state.autoOpen) return q(new L.DatabaseClosed());
              v.open().catch(Q);
            }
            return v._state.dbReadyPromise.then(function() {
              return m(v, f, S, g);
            });
          }(this.db, e, [this.name], u);
          return i && (h._consoleTask = i, h = h.catch(function(m) {
            return console.trace(m), q(m);
          })), h;
        } finally {
          d && qe();
        }
      }, X.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? q(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return r.core.get({ trans: a, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, X.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (G(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = C(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(m) {
            return 0 <= d.keyPath.indexOf(m);
          })) {
            for (var h = 0; h < t.length; ++h) if (t.indexOf(d.keyPath[h]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, h) {
          return d.keyPath.length - h.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Fe) {
          var i = r.keyPath.slice(0, t.length);
          return this.where(i).equals(i.map(function(h) {
            return e[h];
          }));
        }
        !r && pe && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, h) {
          return H(d, h) === 0;
        }
        var u = t.reduce(function(f, h) {
          var m = f[0], v = f[1], f = a[h], S = e[h];
          return [m || f, m || !f ? Ue(v, f && f.multi ? function(g) {
            return g = ve(g, h), G(g) && g.some(function(b) {
              return s(S, b);
            });
          } : function(g) {
            return s(S, ve(g, h));
          }) : v];
        }, [null, null]), i = u[0], u = u[1];
        return i ? this.where(i.name).equals(e[i.keyPath]).filter(u) : r ? this.filter(u) : this.where(t).equals("");
      }, X.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, X.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, X.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, X.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, X.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, X.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, X.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, X.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, G(e) ? "[".concat(e.join("+"), "]") : e));
      }, X.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, X.prototype.mapToClass = function(e) {
        var t, r = this.db, a = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof cr && (function(h, m) {
          if (typeof m != "function" && m !== null) throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
          function v() {
            this.constructor = h;
          }
          o(h, m), h.prototype = m === null ? Object.create(m) : (v.prototype = m.prototype, new v());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var i = /* @__PURE__ */ new Set(), u = e.prototype; u; u = ge(u)) Object.getOwnPropertyNames(u).forEach(function(h) {
          return i.add(h);
        });
        function d(h) {
          if (!h) return h;
          var m, v = Object.create(e.prototype);
          for (m in h) if (!i.has(m)) try {
            v[m] = h[m];
          } catch {
          }
          return v;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, X.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          te(this, e);
        });
      }, X.prototype.add = function(e, t) {
        var r = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? j.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (i) try {
            ue(e, i, d);
          } catch {
          }
          return d;
        });
      }, X.prototype.update = function(e, t) {
        return typeof e != "object" || G(e) ? this.where(":id").equals(e).modify(t) : (e = ve(e, this.schema.primKey.keyPath), e === void 0 ? q(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, X.prototype.put = function(e, t) {
        var r = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [u], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? j.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (i) try {
            ue(e, i, d);
          } catch {
          }
          return d;
        });
      }, X.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] });
        }).then(function(r) {
          return r.numFailures ? j.reject(r.failures[0]) : void 0;
        });
      }, X.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: ir });
        }).then(function(t) {
          return t.numFailures ? j.reject(t.failures[0]) : void 0;
        });
      }, X.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(a) {
            return a.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, X.prototype.bulkAdd = function(e, t, r) {
        var a = this, s = Array.isArray(t) ? t : void 0, i = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var h = e.length, m = m && d ? e.map(Mt(m)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: m, wantResults: i }).then(function(b) {
            var f = b.numFailures, S = b.results, g = b.lastResult, b = b.failures;
            if (f === 0) return i ? S : g;
            throw new Je("".concat(a.name, ".bulkAdd(): ").concat(f, " of ").concat(h, " operations failed"), b);
          });
        });
      }, X.prototype.bulkPut = function(e, t, r) {
        var a = this, s = Array.isArray(t) ? t : void 0, i = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var h = e.length, m = m && d ? e.map(Mt(m)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: m, wantResults: i }).then(function(b) {
            var f = b.numFailures, S = b.results, g = b.lastResult, b = b.failures;
            if (f === 0) return i ? S : g;
            throw new Je("".concat(a.name, ".bulkPut(): ").concat(f, " of ").concat(h, " operations failed"), b);
          });
        });
      }, X.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), i = [];
        return this._trans("readwrite", function(u) {
          return r.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
            var h = [], m = [];
            e.forEach(function(f, S) {
              var g = f.key, b = f.changes, w = d[S];
              if (w) {
                for (var y = 0, A = Object.keys(b); y < A.length; y++) {
                  var P = A[y], D = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (H(D, g) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ue(w, P, D);
                }
                i.push(S), h.push(g), m.push(w);
              }
            });
            var v = h.length;
            return r.mutate({ trans: u, type: "put", keys: h, values: m, updates: { keys: a, changeSpecs: s } }).then(function(f) {
              var S = f.numFailures, g = f.failures;
              if (S === 0) return v;
              for (var b = 0, w = Object.keys(g); b < w.length; b++) {
                var y, A = w[b], P = i[Number(A)];
                P != null && (y = g[A], delete g[A], g[P] = y);
              }
              throw new Je("".concat(t.name, ".bulkUpdate(): ").concat(S, " of ").concat(v, " operations failed"), g);
            });
          });
        });
      }, X.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(a) {
          return t.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(u) {
          var s = u.numFailures, i = u.lastResult, u = u.failures;
          if (s === 0) return i;
          throw new Je("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), u);
        });
      }, X);
      function X() {
      }
      function ht(e) {
        function t(u, d) {
          if (d) {
            for (var h = arguments.length, m = new Array(h - 1); --h; ) m[h - 1] = arguments[h];
            return r[u].subscribe.apply(null, m), e;
          }
          if (typeof u == "string") return r[u];
        }
        var r = {};
        t.addEventType = i;
        for (var a = 1, s = arguments.length; a < s; ++a) i(arguments[a]);
        return t;
        function i(u, d, h) {
          if (typeof u != "object") {
            var m;
            d = d || ea;
            var v = { subscribers: [], fire: h = h || Q, subscribe: function(f) {
              v.subscribers.indexOf(f) === -1 && (v.subscribers.push(f), v.fire = d(v.fire, f));
            }, unsubscribe: function(f) {
              v.subscribers = v.subscribers.filter(function(S) {
                return S !== f;
              }), v.fire = v.subscribers.reduce(d, h);
            } };
            return r[u] = t[u] = v;
          }
          C(m = u).forEach(function(f) {
            var S = m[f];
            if (G(S)) i(f, m[f][0], m[f][1]);
            else {
              if (S !== "asap") throw new L.InvalidArgument("Invalid event config");
              var g = i(f, ct, function() {
                for (var b = arguments.length, w = new Array(b); b--; ) w[b] = arguments[b];
                g.subscribers.forEach(function(y) {
                  Yn(function() {
                    y.apply(null, w);
                  });
                });
              });
            }
          });
        }
      }
      function gt(e, t) {
        return Ye(t).from({ prototype: e }), t;
      }
      function nt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function bn(e, t) {
        e.filter = Ue(e.filter, t);
      }
      function vn(e, t, r) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Ue(a(), t());
        } : t, e.justLimit = r && !a;
      }
      function Kt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new L.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function fr(e, t, r) {
        var a = Kt(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Gt(e, t, r, a) {
        var s = e.replayFilter ? Ue(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var i = {}, u = function(d, h, m) {
            var v, f;
            s && !s(h, m, function(S) {
              return h.stop(S);
            }, function(S) {
              return h.fail(S);
            }) || ((f = "" + (v = h.primaryKey)) == "[object ArrayBuffer]" && (f = "" + new Uint8Array(v)), ie(i, f) || (i[f] = !0, t(d, h, m)));
          };
          return Promise.all([e.or._iterate(u, r), hr(fr(e, a, r), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return hr(fr(e, a, r), Ue(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function hr(e, t, r, a) {
        var s = Z(a ? function(i, u, d) {
          return r(a(i), u, d);
        } : r);
        return e.then(function(i) {
          if (i) return i.start(function() {
            var u = function() {
              return i.continue();
            };
            t && !t(i, function(d) {
              return u = d;
            }, function(d) {
              i.stop(d), u = Q;
            }, function(d) {
              i.fail(d), u = Q;
            }) || s(i.value, i, function(d) {
              return u = d;
            }), u();
          });
        });
      }
      var pt = (gr.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (G(r)) return E(E([], G(e) ? e : [], !0), r).sort();
          if (typeof r == "number") return (Number(e) || 0) + r;
          if (typeof r == "bigint") try {
            return BigInt(e) + r;
          } catch {
            return BigInt(0) + r;
          }
          throw new TypeError("Invalid term ".concat(r));
        }
        if (t.remove !== void 0) {
          var a = t.remove;
          if (G(a)) return G(e) ? e.filter(function(s) {
            return !a.includes(s);
          }).sort() : [];
          if (typeof a == "number") return Number(e) - a;
          if (typeof a == "bigint") try {
            return BigInt(e) - a;
          } catch {
            return BigInt(0) - a;
          }
          throw new TypeError("Invalid subtrahend ".concat(a));
        }
        return r = (r = t.replacePrefix) === null || r === void 0 ? void 0 : r[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
      }, gr);
      function gr(e) {
        this["@@propmod"] = e;
      }
      var oa = (V.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, q.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, V.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, q.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, V.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ue(t.algorithm, e);
      }, V.prototype._iterate = function(e, t) {
        return Gt(this._ctx, e, t, this._ctx.table.core);
      }, V.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && te(r, e), t._ctx = r, t;
      }, V.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, V.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Gt(t, e, r, t.table.core);
        });
      }, V.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var a = t._ctx, s = a.table.core;
          if (nt(a, !0)) return s.count({ trans: r, query: { index: Kt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var i = 0;
          return Gt(a, function() {
            return ++i, !1;
          }, r, s).then(function() {
            return i;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), a = r[0], s = r.length - 1;
        function i(h, m) {
          return m ? i(h[r[m]], m - 1) : h[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(h, m) {
          return H(i(h, s), i(m, s)) * u;
        }
        return this.toArray(function(h) {
          return h.sort(d);
        }).then(t);
      }, V.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var a = t._ctx;
          if (a.dir === "next" && nt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, i = Kt(a, a.table.core.schema);
            return a.table.core.query({ trans: r, limit: a.limit, values: !0, query: { index: i, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Gt(a, function(d) {
            return u.push(d);
          }, r, a.table.core).then(function() {
            return u;
          });
        }, e);
      }, V.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, nt(t) ? vn(t, function() {
          var r = e;
          return function(a, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              a.advance(r), r = 0;
            }), !1);
          };
        }) : vn(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, V.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), vn(this._ctx, function() {
          var t = e;
          return function(r, a, s) {
            return --t <= 0 && a(s), 0 <= t;
          };
        }, !0), this;
      }, V.prototype.until = function(e, t) {
        return bn(this._ctx, function(r, a, s) {
          return !e(r.value) || (a(s), t);
        }), this;
      }, V.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, V.prototype.last = function(e) {
        return this.reverse().first(e);
      }, V.prototype.filter = function(e) {
        var t;
        return bn(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Ue(t.isMatch, e), this;
      }, V.prototype.and = function(e) {
        return this.filter(e);
      }, V.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, V.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, V.prototype.desc = function() {
        return this.reverse();
      }, V.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, a) {
          e(a.key, a);
        });
      }, V.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, V.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, a) {
          e(a.primaryKey, a);
        });
      }, V.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(a, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, V.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && nt(t, !0) && 0 < t.limit) return this._read(function(a) {
          var s = Kt(t, t.table.core.schema);
          return t.table.core.query({ trans: a, values: !1, limit: t.limit, query: { index: s, range: t.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(a, s) {
          r.push(s.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, V.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, V.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, V.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, V.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return bn(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = ie(t, a);
          return t[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(a) {
          var s, i, u;
          u = typeof e == "function" ? e : (s = C(e), i = s.length, function(y) {
            for (var A = !1, P = 0; P < i; ++P) {
              var D = s[P], N = e[D], R = ve(y, D);
              N instanceof pt ? (ue(y, D, N.execute(R)), A = !0) : R !== N && (ue(y, D, N), A = !0);
            }
            return A;
          });
          var d = r.table.core, f = d.schema.primaryKey, h = f.outbound, m = f.extractKey, v = 200, f = t.db._options.modifyChunkSize;
          f && (v = typeof f == "object" ? f[d.name] || f["*"] || 200 : f);
          function S(y, D) {
            var P = D.failures, D = D.numFailures;
            b += y - D;
            for (var N = 0, R = C(P); N < R.length; N++) {
              var k = R[N];
              g.push(P[k]);
            }
          }
          var g = [], b = 0, w = [];
          return t.clone().primaryKeys().then(function(y) {
            function A(D) {
              var N = Math.min(v, y.length - D);
              return d.getMany({ trans: a, keys: y.slice(D, D + N), cache: "immutable" }).then(function(R) {
                for (var k = [], T = [], I = h ? [] : null, $ = [], x = 0; x < N; ++x) {
                  var M = R[x], F = { value: $e(M), primKey: y[D + x] };
                  u.call(F, F.value, F) !== !1 && (F.value == null ? $.push(y[D + x]) : h || H(m(M), m(F.value)) === 0 ? (T.push(F.value), h && I.push(y[D + x])) : ($.push(y[D + x]), k.push(F.value)));
                }
                return Promise.resolve(0 < k.length && d.mutate({ trans: a, type: "add", values: k }).then(function(U) {
                  for (var z in U.failures) $.splice(parseInt(z), 1);
                  S(k.length, U);
                })).then(function() {
                  return (0 < T.length || P && typeof e == "object") && d.mutate({ trans: a, type: "put", keys: I, values: T, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(U) {
                    return S(T.length, U);
                  });
                }).then(function() {
                  return (0 < $.length || P && e === En) && d.mutate({ trans: a, type: "delete", keys: $, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return S($.length, U);
                  });
                }).then(function() {
                  return y.length > D + N && A(D + v);
                });
              });
            }
            var P = nt(r) && r.limit === 1 / 0 && (typeof e != "function" || e === En) && { index: r.index, range: r.range };
            return A(0).then(function() {
              if (0 < g.length) throw new Pt("Error modifying one or more objects", g, b, w);
              return y.length;
            });
          });
        });
      }, V.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return nt(e) && (e.isPrimKey || t.type === 3) ? this._write(function(r) {
          var a = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: a, range: s } }).then(function(i) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(u) {
              var d = u.failures;
              if (u.lastResult, u.results, u = u.numFailures, u) throw new Pt("Could not delete some values", Object.keys(d).map(function(h) {
                return d[h];
              }), i - u);
              return i - u;
            });
          });
        }) : this.modify(En);
      }, V);
      function V() {
      }
      var En = function(e, t) {
        return t.value = null;
      };
      function ia(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ca(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function le(e, t, r) {
        return e = e instanceof mr ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function rt(e) {
        return new e.Collection(e, function() {
          return pr("");
        }).limit(0);
      }
      function Bt(e, t, r, a) {
        var s, i, u, d, h, m, v, f = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return le(e, or);
        function S(b) {
          s = b === "next" ? function(y) {
            return y.toUpperCase();
          } : function(y) {
            return y.toLowerCase();
          }, i = b === "next" ? function(y) {
            return y.toLowerCase();
          } : function(y) {
            return y.toUpperCase();
          }, u = b === "next" ? ia : ca;
          var w = r.map(function(y) {
            return { lower: i(y), upper: s(y) };
          }).sort(function(y, A) {
            return u(y.lower, A.lower);
          });
          d = w.map(function(y) {
            return y.upper;
          }), h = w.map(function(y) {
            return y.lower;
          }), v = (m = b) === "next" ? "" : a;
        }
        S("next"), e = new e.Collection(e, function() {
          return Te(d[0], h[f - 1] + a);
        }), e._ondirectionchange = function(b) {
          S(b);
        };
        var g = 0;
        return e._addAlgorithm(function(b, w, y) {
          var A = b.key;
          if (typeof A != "string") return !1;
          var P = i(A);
          if (t(P, h, g)) return !0;
          for (var D = null, N = g; N < f; ++N) {
            var R = function(k, T, I, $, x, M) {
              for (var F = Math.min(k.length, $.length), U = -1, z = 0; z < F; ++z) {
                var de = T[z];
                if (de !== $[z]) return x(k[z], I[z]) < 0 ? k.substr(0, z) + I[z] + I.substr(z + 1) : x(k[z], $[z]) < 0 ? k.substr(0, z) + $[z] + I.substr(z + 1) : 0 <= U ? k.substr(0, U) + T[U] + I.substr(U + 1) : null;
                x(k[z], de) < 0 && (U = z);
              }
              return F < $.length && M === "next" ? k + I.substr(k.length) : F < k.length && M === "prev" ? k.substr(0, I.length) : U < 0 ? null : k.substr(0, U) + $[U] + I.substr(U + 1);
            }(A, P, d[N], h[N], u, m);
            R === null && D === null ? g = N + 1 : (D === null || 0 < u(D, R)) && (D = R);
          }
          return w(D !== null ? function() {
            b.continue(D + v);
          } : y), !1;
        }), e;
      }
      function Te(e, t, r, a) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: a };
      }
      function pr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var mr = (Object.defineProperty(re.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), re.prototype.between = function(e, t, r, a) {
        r = r !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || a) && (!r || !a) ? rt(this) : new this.Collection(this, function() {
            return Te(e, t, !r, !a);
          });
        } catch {
          return le(this, we);
        }
      }, re.prototype.equals = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return pr(e);
        });
      }, re.prototype.above = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(e, void 0, !0);
        });
      }, re.prototype.aboveOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(e, void 0, !1);
        });
      }, re.prototype.below = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(void 0, e, !1, !0);
        });
      }, re.prototype.belowOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(void 0, e);
        });
      }, re.prototype.startsWith = function(e) {
        return typeof e != "string" ? le(this, or) : this.between(e, e + Fe, !0, !0);
      }, re.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Bt(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Fe);
      }, re.prototype.equalsIgnoreCase = function(e) {
        return Bt(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, re.prototype.anyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? rt(this) : Bt(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, re.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? rt(this) : Bt(this, function(t, r) {
          return r.some(function(a) {
            return t.indexOf(a) === 0;
          });
        }, e, Fe);
      }, re.prototype.anyOf = function() {
        var e = this, t = Ee.apply(Qe, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return le(this, we);
        }
        if (t.length === 0) return rt(this);
        var a = new this.Collection(this, function() {
          return Te(t[0], t[t.length - 1]);
        });
        a._ondirectionchange = function(i) {
          r = i === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return a._addAlgorithm(function(i, u, d) {
          for (var h = i.key; 0 < r(h, t[s]); ) if (++s === t.length) return u(d), !1;
          return r(h, t[s]) === 0 || (u(function() {
            i.continue(t[s]);
          }), !1);
        }), a;
      }, re.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, re.prototype.noneOf = function() {
        var e = Ee.apply(Qe, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return le(this, we);
        }
        var t = e.reduce(function(r, a) {
          return r ? r.concat([[r[r.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, re.prototype.inAnyRange = function(A, t) {
        var r = this, a = this._cmp, s = this._ascending, i = this._descending, u = this._min, d = this._max;
        if (A.length === 0) return rt(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return le(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", L.InvalidArgument);
        var h = !t || t.includeLowers !== !1, m = t && t.includeUppers === !0, v, f = s;
        function S(P, D) {
          return f(P[0], D[0]);
        }
        try {
          (v = A.reduce(function(P, D) {
            for (var N = 0, R = P.length; N < R; ++N) {
              var k = P[N];
              if (a(D[0], k[1]) < 0 && 0 < a(D[1], k[0])) {
                k[0] = u(k[0], D[0]), k[1] = d(k[1], D[1]);
                break;
              }
            }
            return N === R && P.push(D), P;
          }, [])).sort(S);
        } catch {
          return le(this, we);
        }
        var g = 0, b = m ? function(P) {
          return 0 < s(P, v[g][1]);
        } : function(P) {
          return 0 <= s(P, v[g][1]);
        }, w = h ? function(P) {
          return 0 < i(P, v[g][0]);
        } : function(P) {
          return 0 <= i(P, v[g][0]);
        }, y = b, A = new this.Collection(this, function() {
          return Te(v[0][0], v[v.length - 1][1], !h, !m);
        });
        return A._ondirectionchange = function(P) {
          f = P === "next" ? (y = b, s) : (y = w, i), v.sort(S);
        }, A._addAlgorithm(function(P, D, N) {
          for (var R, k = P.key; y(k); ) if (++g === v.length) return D(N), !1;
          return !b(R = k) && !w(R) || (r._cmp(k, v[g][1]) === 0 || r._cmp(k, v[g][0]) === 0 || D(function() {
            f === s ? P.continue(v[g][0]) : P.continue(v[g][1]);
          }), !1);
        }), A;
      }, re.prototype.startsWithAnyOf = function() {
        var e = Ee.apply(Qe, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? rt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Fe];
        })) : le(this, "startsWithAnyOf() only works with strings");
      }, re);
      function re() {
      }
      function me(e) {
        return Z(function(t) {
          return mt(t), e(t.target.error), !1;
        });
      }
      function mt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var yt = "storagemutated", wn = "x-storagemutated-1", Ie = ht(null, yt), ua = (ye.prototype._lock = function() {
        return ot(!B.global), ++this._reculock, this._reculock !== 1 || B.global || (B.lockOwnerFor = this), this;
      }, ye.prototype._unlock = function() {
        if (ot(!B.global), --this._reculock == 0) for (B.global || (B.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            We(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, ye.prototype._locked = function() {
        return this._reculock && B.lockOwnerFor !== this;
      }, ye.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ot(!this.idbtrans), !e && !r) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new L.DatabaseClosed(a);
          case "MissingAPIError":
            throw new L.MissingAPI(a.message, a);
          default:
            throw new L.OpenFailed(a);
        }
        if (!this.active) throw new L.TransactionInactive();
        return ot(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Z(function(s) {
          mt(s), t._reject(e.error);
        }), e.onabort = Z(function(s) {
          mt(s), t.active && t._reject(new L.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Z(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ie.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ye.prototype._promise = function(e, t, r) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return q(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return q(new L.TransactionInactive());
        if (this._locked()) return new j(function(i, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, t, r).then(i, u);
          }, B]);
        });
        if (r) return De(function() {
          var i = new j(function(u, d) {
            a._lock();
            var h = t(u, d, a);
            h && h.then && h.then(u, d);
          });
          return i.finally(function() {
            return a._unlock();
          }), i._lib = !0, i;
        });
        var s = new j(function(i, u) {
          var d = t(i, u, a);
          d && d.then && d.then(i, u);
        });
        return s._lib = !0, s;
      }, ye.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ye.prototype.waitFor = function(e) {
        var t, r = this._root(), a = j.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return a;
        }) : (r._waitingFor = a, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function i() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = i);
        }());
        var s = r._waitingFor;
        return new j(function(i, u) {
          a.then(function(d) {
            return r._waitingQueue.push(Z(i.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(Z(u.bind(null, d)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, ye.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new L.Abort()));
      }, ye.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (ie(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new L.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, ye);
      function ye() {
      }
      function Sn(e, t, r, a, s, i, u) {
        return { name: e, keyPath: t, unique: r, multi: a, auto: s, compound: i, src: (r && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + yr(t) };
      }
      function yr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function On(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (a = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, i, u) {
          return u = a(i, u), u && (s[u[0]] = u[1]), s;
        }, {})) };
        var a;
      }
      var bt = function(e) {
        try {
          return e.only([[]]), bt = function() {
            return [[]];
          }, [[]];
        } catch {
          return bt = function() {
            return Fe;
          }, Fe;
        }
      };
      function _n(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return ve(r, t);
        } : function(r) {
          return ve(r, e);
        };
        var t;
      }
      function br(e) {
        return [].slice.call(e);
      }
      var la = 0;
      function vt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function da(e, t, h) {
        function a(y) {
          if (y.type === 3) return null;
          if (y.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var g = y.lower, b = y.upper, w = y.lowerOpen, y = y.upperOpen;
          return g === void 0 ? b === void 0 ? null : t.upperBound(b, !!y) : b === void 0 ? t.lowerBound(g, !!w) : t.bound(g, b, !!w, !!y);
        }
        function s(S) {
          var g, b = S.name;
          return { name: b, schema: S, mutate: function(w) {
            var y = w.trans, A = w.type, P = w.keys, D = w.values, N = w.range;
            return new Promise(function(R, k) {
              R = Z(R);
              var T = y.objectStore(b), I = T.keyPath == null, $ = A === "put" || A === "add";
              if (!$ && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var x, M = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (M === 0) return R({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function F(ce) {
                ++de, mt(ce);
              }
              var U = [], z = [], de = 0;
              if (A === "deleteRange") {
                if (N.type === 4) return R({ numFailures: de, failures: z, results: [], lastResult: void 0 });
                N.type === 3 ? U.push(x = T.clear()) : U.push(x = T.delete(a(N)));
              } else {
                var I = $ ? I ? [D, P] : [D, null] : [P, null], W = I[0], se = I[1];
                if ($) for (var oe = 0; oe < M; ++oe) U.push(x = se && se[oe] !== void 0 ? T[A](W[oe], se[oe]) : T[A](W[oe])), x.onerror = F;
                else for (oe = 0; oe < M; ++oe) U.push(x = T[A](W[oe])), x.onerror = F;
              }
              function qt(ce) {
                ce = ce.target.result, U.forEach(function(Ve, Wn) {
                  return Ve.error != null && (z[Wn] = Ve.error);
                }), R({ numFailures: de, failures: z, results: A === "delete" ? P : U.map(function(Ve) {
                  return Ve.result;
                }), lastResult: ce });
              }
              x.onerror = function(ce) {
                F(ce), qt(ce);
              }, x.onsuccess = qt;
            });
          }, getMany: function(w) {
            var y = w.trans, A = w.keys;
            return new Promise(function(P, D) {
              P = Z(P);
              for (var N, R = y.objectStore(b), k = A.length, T = new Array(k), I = 0, $ = 0, x = function(U) {
                U = U.target, T[U._pos] = U.result, ++$ === I && P(T);
              }, M = me(D), F = 0; F < k; ++F) A[F] != null && ((N = R.get(A[F]))._pos = F, N.onsuccess = x, N.onerror = M, ++I);
              I === 0 && P(T);
            });
          }, get: function(w) {
            var y = w.trans, A = w.key;
            return new Promise(function(P, D) {
              P = Z(P);
              var N = y.objectStore(b).get(A);
              N.onsuccess = function(R) {
                return P(R.target.result);
              }, N.onerror = me(D);
            });
          }, query: (g = m, function(w) {
            return new Promise(function(y, A) {
              y = Z(y);
              var P, D, N, I = w.trans, R = w.values, k = w.limit, x = w.query, T = k === 1 / 0 ? void 0 : k, $ = x.index, x = x.range, I = I.objectStore(b), $ = $.isPrimaryKey ? I : I.index($.name), x = a(x);
              if (k === 0) return y({ result: [] });
              g ? ((T = R ? $.getAll(x, T) : $.getAllKeys(x, T)).onsuccess = function(M) {
                return y({ result: M.target.result });
              }, T.onerror = me(A)) : (P = 0, D = !R && "openKeyCursor" in $ ? $.openKeyCursor(x) : $.openCursor(x), N = [], D.onsuccess = function(M) {
                var F = D.result;
                return F ? (N.push(R ? F.value : F.primaryKey), ++P === k ? y({ result: N }) : void F.continue()) : y({ result: N });
              }, D.onerror = me(A));
            });
          }), openCursor: function(w) {
            var y = w.trans, A = w.values, P = w.query, D = w.reverse, N = w.unique;
            return new Promise(function(R, k) {
              R = Z(R);
              var $ = P.index, T = P.range, I = y.objectStore(b), I = $.isPrimaryKey ? I : I.index($.name), $ = D ? N ? "prevunique" : "prev" : N ? "nextunique" : "next", x = !A && "openKeyCursor" in I ? I.openKeyCursor(a(T), $) : I.openCursor(a(T), $);
              x.onerror = me(k), x.onsuccess = Z(function(M) {
                var F, U, z, de, W = x.result;
                W ? (W.___id = ++la, W.done = !1, F = W.continue.bind(W), U = (U = W.continuePrimaryKey) && U.bind(W), z = W.advance.bind(W), de = function() {
                  throw new Error("Cursor not stopped");
                }, W.trans = y, W.stop = W.continue = W.continuePrimaryKey = W.advance = function() {
                  throw new Error("Cursor not started");
                }, W.fail = Z(k), W.next = function() {
                  var se = this, oe = 1;
                  return this.start(function() {
                    return oe-- ? se.continue() : se.stop();
                  }).then(function() {
                    return se;
                  });
                }, W.start = function(se) {
                  function oe() {
                    if (x.result) try {
                      se();
                    } catch (ce) {
                      W.fail(ce);
                    }
                    else W.done = !0, W.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, W.stop();
                  }
                  var qt = new Promise(function(ce, Ve) {
                    ce = Z(ce), x.onerror = me(Ve), W.fail = Ve, W.stop = function(Wn) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = de, ce(Wn);
                    };
                  });
                  return x.onsuccess = Z(function(ce) {
                    x.onsuccess = oe, oe();
                  }), W.continue = F, W.continuePrimaryKey = U, W.advance = z, oe(), qt;
                }, R(W)) : R(null);
              }, k);
            });
          }, count: function(w) {
            var y = w.query, A = w.trans, P = y.index, D = y.range;
            return new Promise(function(N, R) {
              var k = A.objectStore(b), T = P.isPrimaryKey ? k : k.index(P.name), k = a(D), T = k ? T.count(k) : T.count();
              T.onsuccess = Z(function(I) {
                return N(I.target.result);
              }), T.onerror = me(R);
            });
          } };
        }
        var i, u, d, v = (u = h, d = br((i = e).objectStoreNames), { schema: { name: i.name, tables: d.map(function(S) {
          return u.objectStore(S);
        }).map(function(S) {
          var g = S.keyPath, y = S.autoIncrement, b = G(g), w = {}, y = { name: S.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: g == null, compound: b, keyPath: g, autoIncrement: y, unique: !0, extractKey: _n(g) }, indexes: br(S.indexNames).map(function(A) {
            return S.index(A);
          }).map(function(N) {
            var P = N.name, D = N.unique, R = N.multiEntry, N = N.keyPath, R = { name: P, compound: G(N), keyPath: N, unique: D, multiEntry: R, extractKey: _n(N) };
            return w[vt(N)] = R;
          }), getIndexByKeyPath: function(A) {
            return w[vt(A)];
          } };
          return w[":id"] = y.primaryKey, g != null && (w[vt(g)] = y.primaryKey), y;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), h = v.schema, m = v.hasGetAll, v = h.tables.map(s), f = {};
        return v.forEach(function(S) {
          return f[S.name] = S;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(S) {
          if (!f[S]) throw new Error("Table '".concat(S, "' not found"));
          return f[S];
        }, MIN_KEY: -1 / 0, MAX_KEY: bt(t), schema: h };
      }
      function fa(e, t, r, a) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (a = da(t, s, a), e.dbcore.reduce(function(i, u) {
          return u = u.create, l(l({}, i), u(i));
        }, a)) };
      }
      function Lt(e, a) {
        var r = a.db, a = fa(e._middlewares, r, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(s) {
          var i = s.name;
          e.core.schema.tables.some(function(u) {
            return u.name === i;
          }) && (s.core = e.core.table(i), e[i] instanceof e.Table && (e[i].core = s.core));
        });
      }
      function Wt(e, t, r, a) {
        r.forEach(function(s) {
          var i = a[s];
          t.forEach(function(u) {
            var d = function h(m, v) {
              return Fr(m, v) || (m = ge(m)) && h(m, v);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(h) {
              _t(this, s, { value: h, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, i));
          });
        });
      }
      function An(e, t) {
        t.forEach(function(r) {
          for (var a in r) r[a] instanceof e.Table && delete r[a];
        });
      }
      function ha(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ga(e, t, r, a) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = On("$meta", Er("")[0], []), e._storeNames.push("$meta"));
        var i = e._createTransaction("readwrite", e._storeNames, s);
        i.create(r), i._completion.catch(a);
        var u = i._reject.bind(i), d = B.transless || B;
        De(function() {
          return B.trans = i, B.transless = d, t !== 0 ? (Lt(e, r), m = t, ((h = i).storeNames.includes("$meta") ? h.table("$meta").get("version").then(function(v) {
            return v ?? m;
          }) : j.resolve(m)).then(function(v) {
            return S = v, g = i, b = r, w = [], v = (f = e)._versions, y = f._dbSchema = Ut(0, f.idbdb, b), (v = v.filter(function(A) {
              return A._cfg.version >= S;
            })).length !== 0 ? (v.forEach(function(A) {
              w.push(function() {
                var P = y, D = A._cfg.dbschema;
                zt(f, P, b), zt(f, D, b), y = f._dbSchema = D;
                var N = Pn(P, D);
                N.add.forEach(function($) {
                  Dn(b, $[0], $[1].primKey, $[1].indexes);
                }), N.change.forEach(function($) {
                  if ($.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var x = b.objectStore($.name);
                  $.add.forEach(function(M) {
                    return Ft(x, M);
                  }), $.change.forEach(function(M) {
                    x.deleteIndex(M.name), Ft(x, M);
                  }), $.del.forEach(function(M) {
                    return x.deleteIndex(M);
                  });
                });
                var R = A._cfg.contentUpgrade;
                if (R && A._cfg.version > S) {
                  Lt(f, b), g._memoizedTables = {};
                  var k = Qn(D);
                  N.del.forEach(function($) {
                    k[$] = P[$];
                  }), An(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], C(k), k), g.schema = k;
                  var T, I = an(R);
                  return I && et(), N = j.follow(function() {
                    var $;
                    (T = R(g)) && I && ($ = Ne.bind(null, null), T.then($, $));
                  }), T && typeof T.then == "function" ? j.resolve(T) : N.then(function() {
                    return T;
                  });
                }
              }), w.push(function(P) {
                var D, N, R = A._cfg.dbschema;
                D = R, N = P, [].slice.call(N.db.objectStoreNames).forEach(function(k) {
                  return D[k] == null && N.db.deleteObjectStore(k);
                }), An(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), g.schema = f._dbSchema;
              }), w.push(function(P) {
                f.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(f.idbdb.version / 10) === A._cfg.version ? (f.idbdb.deleteObjectStore("$meta"), delete f._dbSchema.$meta, f._storeNames = f._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return w.length ? j.resolve(w.shift()(g.idbtrans)).then(A) : j.resolve();
            }().then(function() {
              vr(y, b);
            })) : j.resolve();
            var f, S, g, b, w, y;
          }).catch(u)) : (C(s).forEach(function(v) {
            Dn(r, v, s[v].primKey, s[v].indexes);
          }), Lt(e, r), void j.follow(function() {
            return e.on.populate.fire(i);
          }).catch(u));
          var h, m;
        });
      }
      function pa(e, t) {
        vr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Ut(0, e.idbdb, t);
        zt(e, e._dbSchema, t);
        for (var a = 0, s = Pn(r, e._dbSchema).change; a < s.length; a++) {
          var i = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(u.name);
            u.add.forEach(function(h) {
              pe && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(h.src)), Ft(d, h);
            });
          }(s[a]);
          if (typeof i == "object") return i.value;
        }
      }
      function Pn(e, t) {
        var r, a = { del: [], add: [], change: [] };
        for (r in e) t[r] || a.del.push(r);
        for (r in t) {
          var s = e[r], i = t[r];
          if (s) {
            var u = { name: r, def: i, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || s.primKey.auto !== i.primKey.auto) u.recreate = !0, a.change.push(u);
            else {
              var d = s.idxByName, h = i.idxByName, m = void 0;
              for (m in d) h[m] || u.del.push(m);
              for (m in h) {
                var v = d[m], f = h[m];
                v ? v.src !== f.src && u.change.push(f) : u.add.push(f);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && a.change.push(u);
            }
          } else a.add.push([r, i]);
        }
        return a;
      }
      function Dn(e, t, r, a) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return a.forEach(function(i) {
          return Ft(s, i);
        }), s;
      }
      function vr(e, t) {
        C(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (pe && console.debug("Dexie: Creating missing table", r), Dn(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Ft(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Ut(e, t, r) {
        var a = {};
        return At(t.objectStoreNames, 0).forEach(function(s) {
          for (var i = r.objectStore(s), u = Sn(yr(m = i.keyPath), m || "", !0, !1, !!i.autoIncrement, m && typeof m != "string", !0), d = [], h = 0; h < i.indexNames.length; ++h) {
            var v = i.index(i.indexNames[h]), m = v.keyPath, v = Sn(v.name, m, !!v.unique, !!v.multiEntry, !1, m && typeof m != "string", !1);
            d.push(v);
          }
          a[s] = On(s, u, d);
        }), a;
      }
      function zt(e, t, r) {
        for (var a = r.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var i = a[s], u = r.objectStore(i);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var h = u.indexNames[d], m = u.index(h).keyPath, v = typeof m == "string" ? m : "[" + At(m).join("+") + "]";
            !t[i] || (m = t[i].idxByName[v]) && (m.name = h, delete t[i].idxByName[v], t[i].idxByName[h] = m);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && O.WorkerGlobalScope && O instanceof O.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Er(e) {
        return e.split(",").map(function(t, r) {
          var a = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Sn(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), G(s), r === 0);
        });
      }
      var ma = (Ht.prototype._parseStoresSpec = function(e, t) {
        C(e).forEach(function(r) {
          if (e[r] !== null) {
            var a = Er(e[r]), s = a.shift();
            if (s.unique = !0, s.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(i) {
              if (i.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!i.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), t[r] = On(r, s, a);
          }
        });
      }, Ht.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? te(this._cfg.storesSource, r) : r;
        var r = t._versions, a = {}, s = {};
        return r.forEach(function(i) {
          te(a, i._cfg.storesSource), s = i._cfg.dbschema = {}, i._parseStoresSpec(a, s);
        }), t._dbSchema = s, An(t, [t._allTables, t, t.Transaction.prototype]), Wt(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], C(s), s), t._storeNames = C(s), this;
      }, Ht.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = on(this._cfg.contentUpgrade || Q, e), this;
      }, Ht);
      function Ht() {
      }
      function Nn(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Se(jt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Rn(e) {
        return e && typeof e.databases == "function";
      }
      function Tn(e) {
        return De(function() {
          return B.letThrough = !0, e();
        });
      }
      function In(e) {
        return !("from" in e);
      }
      var ae = function(e, t) {
        if (!this) {
          var r = new ae();
          return e && "d" in e && te(r, e), r;
        }
        te(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Et(e, t, r) {
        var a = H(t, r);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (In(e)) return te(e, { from: t, to: r, d: 1 });
          var s = e.l, a = e.r;
          if (H(r, e.from) < 0) return s ? Et(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Sr(e);
          if (0 < H(t, e.to)) return a ? Et(a, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Sr(e);
          H(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && wt(e, s), a && r && wt(e, a);
        }
      }
      function wt(e, t) {
        In(t) || function r(a, h) {
          var i = h.from, u = h.to, d = h.l, h = h.r;
          Et(a, i, u), d && r(a, d), h && r(a, h);
        }(e, t);
      }
      function wr(e, t) {
        var r = Vt(t), a = r.next();
        if (a.done) return !1;
        for (var s = a.value, i = Vt(e), u = i.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (H(d.from, s.to) <= 0 && 0 <= H(d.to, s.from)) return !0;
          H(s.from, d.from) < 0 ? s = (a = r.next(d.from)).value : d = (u = i.next(s.from)).value;
        }
        return !1;
      }
      function Vt(e) {
        var t = In(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var a = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, a) for (; t.n.l && H(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !a || H(r, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function Sr(e) {
        var t, r, a = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], r[s] = a[t], (e[t] = r).d = Or(r)), e.d = Or(e);
      }
      function Or(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function Yt(e, t) {
        return C(t).forEach(function(r) {
          e[r] ? wt(e[r], t[r]) : e[r] = function a(s) {
            var i, u, d = {};
            for (i in s) ie(s, i) && (u = s[i], d[i] = !u || typeof u != "object" || Jn.has(u.constructor) ? u : a(u));
            return d;
          }(t[r]);
        }), e;
      }
      function xn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && wr(t[r], e[r]);
        });
      }
      be(ae.prototype, ((fe = { add: function(e) {
        return wt(this, e), this;
      }, addKey: function(e) {
        return Et(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return Et(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = Vt(this).next(e).value;
        return t && H(t.from, e) <= 0 && 0 <= H(t.to, e);
      } })[rn] = function() {
        return Vt(this);
      }, fe));
      var ze = {}, kn = {}, Cn = !1;
      function Qt(e) {
        Yt(kn, e), Cn || (Cn = !0, setTimeout(function() {
          Cn = !1, $n(kn, !(kn = {}));
        }, 0));
      }
      function $n(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(ze); a < s.length; a++) _r(u = s[a], e, r, t);
        else for (var i in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
          d && (i = d[1], d = d[2], (u = ze["idb://".concat(i, "/").concat(d)]) && _r(u, e, r, t));
        }
        r.forEach(function(h) {
          return h();
        });
      }
      function _r(e, t, r, a) {
        for (var s = [], i = 0, u = Object.entries(e.queries.query); i < u.length; i++) {
          for (var d = u[i], h = d[0], m = [], v = 0, f = d[1]; v < f.length; v++) {
            var S = f[v];
            xn(t, S.obsSet) ? S.subscribers.forEach(function(y) {
              return r.add(y);
            }) : a && m.push(S);
          }
          a && s.push([h, m]);
        }
        if (a) for (var g = 0, b = s; g < b.length; g++) {
          var w = b[g], h = w[0], m = w[1];
          e.queries.query[h] = m;
        }
      }
      function ya(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? q(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var a = t.openCanceller, s = Math.round(10 * e.verno), i = !1;
        function u() {
          if (t.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new j(function(S, g) {
            if (u(), !r) throw new L.MissingAPI();
            var b = e.name, w = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!w) throw new L.MissingAPI();
            w.onerror = me(g), w.onblocked = Z(e._fireOnBlocked), w.onupgradeneeded = Z(function(y) {
              var A;
              v = w.transaction, t.autoSchema && !e._options.allowEmptyDB ? (w.onerror = mt, v.abort(), w.result.close(), (A = r.deleteDatabase(b)).onsuccess = A.onerror = Z(function() {
                g(new L.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (v.onerror = me(g), y = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion, f = y < 1, e.idbdb = w.result, i && pa(e, v), ga(e, y / 10, v, g));
            }, g), w.onsuccess = Z(function() {
              v = null;
              var y, A, P, D, N, R = e.idbdb = w.result, k = At(R.objectStoreNames);
              if (0 < k.length) try {
                var T = R.transaction((D = k).length === 1 ? D[0] : D, "readonly");
                if (t.autoSchema) A = R, P = T, (y = e).verno = A.version / 10, P = y._dbSchema = Ut(0, A, P), y._storeNames = At(A.objectStoreNames, 0), Wt(y, [y._allTables], C(P), P);
                else if (zt(e, e._dbSchema, T), ((N = Pn(Ut(0, (N = e).idbdb, T), N._dbSchema)).add.length || N.change.some(function(I) {
                  return I.add.length || I.change.length;
                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), R.close(), s = R.version + 1, i = !0, S(d());
                Lt(e, T);
              } catch {
              }
              tt.push(e), R.onversionchange = Z(function(I) {
                t.vcFired = !0, e.on("versionchange").fire(I);
              }), R.onclose = Z(function(I) {
                e.on("close").fire(I);
              }), f && (N = e._deps, T = b, R = N.indexedDB, N = N.IDBKeyRange, Rn(R) || T === jt || Nn(R, N).put({ name: T }).catch(Q)), S();
            }, g);
          }).catch(function(S) {
            switch (S?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return j.reject(S);
          });
        }
        var h, m = t.dbReadyResolve, v = null, f = !1;
        return j.race([a, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(S) {
          function g() {
            return indexedDB.databases().finally(S);
          }
          h = setInterval(g, 100), g();
        }).finally(function() {
          return clearInterval(h);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), t.onReadyBeingFired = [], j.resolve(Tn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function S() {
            if (0 < t.onReadyBeingFired.length) {
              var g = t.onReadyBeingFired.reduce(on, Q);
              return t.onReadyBeingFired = [], j.resolve(Tn(function() {
                return g(e.vip);
              })).then(S);
            }
          });
        }).finally(function() {
          t.openCanceller === a && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(S) {
          t.dbOpenError = S;
          try {
            v && v.abort();
          } catch {
          }
          return a === t.openCanceller && e._close(), q(S);
        }).finally(function() {
          t.openComplete = !0, m();
        }).then(function() {
          var S;
          return f && (S = {}, e.tables.forEach(function(g) {
            g.schema.indexes.forEach(function(b) {
              b.name && (S["idb://".concat(e.name, "/").concat(g.name, "/").concat(b.name)] = new ae(-1 / 0, [[[]]]));
            }), S["idb://".concat(e.name, "/").concat(g.name, "/")] = S["idb://".concat(e.name, "/").concat(g.name, "/:dels")] = new ae(-1 / 0, [[[]]]);
          }), Ie(yt).fire(S), $n(S, !0)), e;
        });
      }
      function jn(e) {
        function t(i) {
          return e.next(i);
        }
        var r = s(t), a = s(function(i) {
          return e.throw(i);
        });
        function s(i) {
          return function(h) {
            var d = i(h), h = d.value;
            return d.done ? h : h && typeof h.then == "function" ? h.then(r, a) : G(h) ? Promise.all(h).then(r, a) : r(h);
          };
        }
        return s(t)();
      }
      function Xt(e, t, r) {
        for (var a = G(e) ? e.slice() : [e], s = 0; s < r; ++s) a.push(t);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var r = e.table(t), a = r.schema, s = {}, i = [];
          function u(f, S, g) {
            var b = vt(f), w = s[b] = s[b] || [], y = f == null ? 0 : typeof f == "string" ? 1 : f.length, A = 0 < S, A = l(l({}, g), { name: A ? "".concat(b, "(virtual-from:").concat(g.name, ")") : g.name, lowLevelIndex: g, isVirtual: A, keyTail: S, keyLength: y, extractKey: _n(f), unique: !A && g.unique });
            return w.push(A), A.isPrimaryKey || i.push(A), 1 < y && u(y === 2 ? f[0] : f.slice(0, y - 1), S + 1, g), w.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), A;
          }
          t = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [t];
          for (var d = 0, h = a.indexes; d < h.length; d++) {
            var m = h[d];
            u(m.keyPath, 0, m);
          }
          function v(f) {
            var S, g = f.query.index;
            return g.isVirtual ? l(l({}, f), { query: { index: g.lowLevelIndex, range: (S = f.query.range, g = g.keyTail, { type: S.type === 1 ? 2 : S.type, lower: Xt(S.lower, S.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g), lowerOpen: !0, upper: Xt(S.upper, S.upperOpen ? e.MIN_KEY : e.MAX_KEY, g), upperOpen: !0 }) } }) : f;
          }
          return l(l({}, r), { schema: l(l({}, a), { primaryKey: t, indexes: i, getIndexByKeyPath: function(f) {
            return (f = s[vt(f)]) && f[0];
          } }), count: function(f) {
            return r.count(v(f));
          }, query: function(f) {
            return r.query(v(f));
          }, openCursor: function(f) {
            var S = f.query.index, g = S.keyTail, b = S.isVirtual, w = S.keyLength;
            return b ? r.openCursor(v(f)).then(function(A) {
              return A && y(A);
            }) : r.openCursor(f);
            function y(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Xt(P, f.reverse ? e.MAX_KEY : e.MIN_KEY, g)) : f.unique ? A.continue(A.key.slice(0, w).concat(f.reverse ? e.MIN_KEY : e.MAX_KEY, g)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                A.continuePrimaryKey(Xt(P, e.MAX_KEY, g), D);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var P = A.key;
                return w === 1 ? P[0] : P.slice(0, w);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function Mn(e, t, r, a) {
        return r = r || {}, a = a || "", C(e).forEach(function(s) {
          var i, u, d;
          ie(t, s) ? (i = e[s], u = t[s], typeof i == "object" && typeof u == "object" && i && u ? (d = nn(i)) !== nn(u) ? r[a + s] = t[s] : d === "Object" ? Mn(i, u, r, a + s + ".") : i !== u && (r[a + s] = t[s]) : i !== u && (r[a + s] = t[s])) : r[a + s] = void 0;
        }), C(t).forEach(function(s) {
          ie(e, s) || (r[a + s] = t[s]);
        }), r;
      }
      function Kn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var r = e.table(t), a = r.schema.primaryKey;
          return l(l({}, r), { mutate: function(s) {
            var i = B.trans, u = i.table(t).hook, d = u.deleting, h = u.creating, m = u.updating;
            switch (s.type) {
              case "add":
                if (h.fire === Q) break;
                return i._promise("readwrite", function() {
                  return v(s);
                }, !0);
              case "put":
                if (h.fire === Q && m.fire === Q) break;
                return i._promise("readwrite", function() {
                  return v(s);
                }, !0);
              case "delete":
                if (d.fire === Q) break;
                return i._promise("readwrite", function() {
                  return v(s);
                }, !0);
              case "deleteRange":
                if (d.fire === Q) break;
                return i._promise("readwrite", function() {
                  return function f(S, g, b) {
                    return r.query({ trans: S, values: !1, query: { index: a, range: g }, limit: b }).then(function(w) {
                      var y = w.result;
                      return v({ type: "delete", keys: y, trans: S }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : y.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : f(S, l(l({}, g), { lower: y[y.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function v(f) {
              var S, g, b, w = B.trans, y = f.keys || Kn(a, f);
              if (!y) throw new Error("Keys missing");
              return (f = f.type === "add" || f.type === "put" ? l(l({}, f), { keys: y }) : l({}, f)).type !== "delete" && (f.values = E([], f.values)), f.keys && (f.keys = E([], f.keys)), S = r, b = y, ((g = f).type === "add" ? Promise.resolve([]) : S.getMany({ trans: g.trans, keys: b, cache: "immutable" })).then(function(A) {
                var P = y.map(function(D, N) {
                  var R, k, T, I = A[N], $ = { onerror: null, onsuccess: null };
                  return f.type === "delete" ? d.fire.call($, D, I, w) : f.type === "add" || I === void 0 ? (R = h.fire.call($, D, f.values[N], w), D == null && R != null && (f.keys[N] = D = R, a.outbound || ue(f.values[N], a.keyPath, D))) : (R = Mn(I, f.values[N]), (k = m.fire.call($, R, D, I, w)) && (T = f.values[N], Object.keys(k).forEach(function(x) {
                    ie(T, x) ? T[x] = k[x] : ue(T, x, k[x]);
                  }))), $;
                });
                return r.mutate(f).then(function(D) {
                  for (var N = D.failures, R = D.results, k = D.numFailures, D = D.lastResult, T = 0; T < y.length; ++T) {
                    var I = (R || y)[T], $ = P[T];
                    I == null ? $.onerror && $.onerror(N[T]) : $.onsuccess && $.onsuccess(f.type === "put" && A[T] ? f.values[T] : I);
                  }
                  return { failures: N, results: R, numFailures: k, lastResult: D };
                }).catch(function(D) {
                  return P.forEach(function(N) {
                    return N.onerror && N.onerror(D);
                  }), Promise.reject(D);
                });
              });
            }
          } });
        } });
      } };
      function Ar(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var a = [], s = 0, i = 0; s < t.keys.length && i < e.length; ++s) H(t.keys[s], e[i]) === 0 && (a.push(r ? $e(t.values[s]) : t.values[s]), ++i);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Ea = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return l(l({}, r), { getMany: function(a) {
            if (!a.cache) return r.getMany(a);
            var s = Ar(a.keys, a.trans._cache, a.cache === "clone");
            return s ? j.resolve(s) : r.getMany(a).then(function(i) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? $e(i) : i }, i;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), r.mutate(a);
          } });
        } };
      } };
      function Pr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Dr(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var wa = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new ae(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, i) {
          if (B.subscr && s !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));
          return e.transaction(a, s, i);
        }, table: function(a) {
          var s = e.table(a), i = s.schema, u = i.primaryKey, f = i.indexes, d = u.extractKey, h = u.outbound, m = u.autoIncrement && f.filter(function(g) {
            return g.compound && g.keyPath.includes(u.keyPath);
          }), v = l(l({}, s), { mutate: function(g) {
            function b(x) {
              return x = "idb://".concat(t, "/").concat(a, "/").concat(x), D[x] || (D[x] = new ae());
            }
            var w, y, A, P = g.trans, D = g.mutatedParts || (g.mutatedParts = {}), N = b(""), R = b(":dels"), k = g.type, $ = g.type === "deleteRange" ? [g.range] : g.type === "delete" ? [g.keys] : g.values.length < 50 ? [Kn(u, g).filter(function(x) {
              return x;
            }), g.values] : [], T = $[0], I = $[1], $ = g.trans._cache;
            return G(T) ? (N.addKeys(T), ($ = k === "delete" || T.length === I.length ? Ar(T, $) : null) || R.addKeys(T), ($ || I) && (w = b, y = $, A = I, i.indexes.forEach(function(x) {
              var M = w(x.name || "");
              function F(z) {
                return z != null ? x.extractKey(z) : null;
              }
              function U(z) {
                return x.multiEntry && G(z) ? z.forEach(function(de) {
                  return M.addKey(de);
                }) : M.addKey(z);
              }
              (y || A).forEach(function(z, se) {
                var W = y && F(y[se]), se = A && F(A[se]);
                H(W, se) !== 0 && (W != null && U(W), se != null && U(se));
              });
            }))) : T ? (I = { from: (I = T.lower) !== null && I !== void 0 ? I : e.MIN_KEY, to: (I = T.upper) !== null && I !== void 0 ? I : e.MAX_KEY }, R.add(I), N.add(I)) : (N.add(r), R.add(r), i.indexes.forEach(function(x) {
              return b(x.name).add(r);
            })), s.mutate(g).then(function(x) {
              return !T || g.type !== "add" && g.type !== "put" || (N.addKeys(x.results), m && m.forEach(function(M) {
                for (var F = g.values.map(function(W) {
                  return M.extractKey(W);
                }), U = M.keyPath.findIndex(function(W) {
                  return W === u.keyPath;
                }), z = 0, de = x.results.length; z < de; ++z) F[z][U] = x.results[z];
                b(M.name).addKeys(F);
              })), P.mutatedParts = Yt(P.mutatedParts || {}, D), x;
            });
          } }), f = function(b) {
            var w = b.query, b = w.index, w = w.range;
            return [b, new ae((b = w.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (w = w.upper) !== null && w !== void 0 ? w : e.MAX_KEY)];
          }, S = { get: function(g) {
            return [u, new ae(g.key)];
          }, getMany: function(g) {
            return [u, new ae().addKeys(g.keys)];
          }, count: f, query: f, openCursor: f };
          return C(S).forEach(function(g) {
            v[g] = function(b) {
              var w = B.subscr, y = !!w, A = Pr(B, s) && Dr(g, b) ? b.obsSet = {} : w;
              if (y) {
                var P = function(I) {
                  return I = "idb://".concat(t, "/").concat(a, "/").concat(I), A[I] || (A[I] = new ae());
                }, D = P(""), N = P(":dels"), w = S[g](b), y = w[0], w = w[1];
                if ((g === "query" && y.isPrimaryKey && !b.values ? N : P(y.name || "")).add(w), !y.isPrimaryKey) {
                  if (g !== "count") {
                    var R = g === "query" && h && b.values && s.query(l(l({}, b), { values: !1 }));
                    return s[g].apply(this, arguments).then(function(I) {
                      if (g === "query") {
                        if (h && b.values) return R.then(function(F) {
                          return F = F.result, D.addKeys(F), I;
                        });
                        var $ = b.values ? I.result.map(d) : I.result;
                        (b.values ? D : N).addKeys($);
                      } else if (g === "openCursor") {
                        var x = I, M = b.values;
                        return x && Object.create(x, { key: { get: function() {
                          return N.addKey(x.primaryKey), x.key;
                        } }, primaryKey: { get: function() {
                          var F = x.primaryKey;
                          return N.addKey(F), F;
                        } }, value: { get: function() {
                          return M && D.addKey(x.primaryKey), x.value;
                        } } });
                      }
                      return I;
                    });
                  }
                  N.add(r);
                }
              }
              return s[g].apply(this, arguments);
            };
          }), v;
        } });
      } };
      function Nr(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var a = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === a ? null : (t = l({}, t), G(t.keys) && (t.keys = t.keys.filter(function(s, i) {
          return !(i in r.failures);
        })), "values" in t && G(t.values) && (t.values = t.values.filter(function(s, i) {
          return !(i in r.failures);
        })), t);
      }
      function Gn(e, t) {
        return r = e, ((a = t).lower === void 0 || (a.lowerOpen ? 0 < H(r, a.lower) : 0 <= H(r, a.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? H(e, t.upper) < 0 : H(e, t.upper) <= 0));
        var r, a;
      }
      function Rr(e, t, S, a, s, i) {
        if (!S || S.length === 0) return e;
        var u = t.query.index, d = u.multiEntry, h = t.query.range, m = a.schema.primaryKey.extractKey, v = u.extractKey, f = (u.lowLevelIndex || u).extractKey, S = S.reduce(function(g, b) {
          var w = g, y = [];
          if (b.type === "add" || b.type === "put") for (var A = new ae(), P = b.values.length - 1; 0 <= P; --P) {
            var D, N = b.values[P], R = m(N);
            A.hasKey(R) || (D = v(N), (d && G(D) ? D.some(function(x) {
              return Gn(x, h);
            }) : Gn(D, h)) && (A.addKey(R), y.push(N)));
          }
          switch (b.type) {
            case "add":
              var k = new ae().addKeys(t.values ? g.map(function(M) {
                return m(M);
              }) : g), w = g.concat(t.values ? y.filter(function(M) {
                return M = m(M), !k.hasKey(M) && (k.addKey(M), !0);
              }) : y.map(function(M) {
                return m(M);
              }).filter(function(M) {
                return !k.hasKey(M) && (k.addKey(M), !0);
              }));
              break;
            case "put":
              var T = new ae().addKeys(b.values.map(function(M) {
                return m(M);
              }));
              w = g.filter(function(M) {
                return !T.hasKey(t.values ? m(M) : M);
              }).concat(t.values ? y : y.map(function(M) {
                return m(M);
              }));
              break;
            case "delete":
              var I = new ae().addKeys(b.keys);
              w = g.filter(function(M) {
                return !I.hasKey(t.values ? m(M) : M);
              });
              break;
            case "deleteRange":
              var $ = b.range;
              w = g.filter(function(M) {
                return !Gn(m(M), $);
              });
          }
          return w;
        }, e);
        return S === e ? e : (S.sort(function(g, b) {
          return H(f(g), f(b)) || H(m(g), m(b));
        }), t.limit && t.limit < 1 / 0 && (S.length > t.limit ? S.length = t.limit : e.length === t.limit && S.length < t.limit && (s.dirty = !0)), i ? Object.freeze(S) : S);
      }
      function Tr(e, t) {
        return H(e.lower, t.lower) === 0 && H(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Sa(e, t) {
        return function(r, a, s, i) {
          if (r === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = H(r, a)) === 0) {
            if (s && i) return 0;
            if (s) return 1;
            if (i) return -1;
          }
          return a;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, a, s, i) {
          if (r === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = H(r, a)) === 0) {
            if (s && i) return 0;
            if (s) return -1;
            if (i) return 1;
          }
          return a;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Oa(e, t, r, a) {
        e.subscribers.add(r), a.addEventListener("abort", function() {
          var s, i;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, i = t, setTimeout(function() {
            s.subscribers.size === 0 && je(i, s);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return l(l({}, e), { transaction: function(r, a, s) {
          var i, u, d = e.transaction(r, a, s);
          return a === "readwrite" && (u = (i = new AbortController()).signal, s = function(h) {
            return function() {
              if (i.abort(), a === "readwrite") {
                for (var m = /* @__PURE__ */ new Set(), v = 0, f = r; v < f.length; v++) {
                  var S = f[v], g = ze["idb://".concat(t, "/").concat(S)];
                  if (g) {
                    var b = e.table(S), w = g.optimisticOps.filter(function(M) {
                      return M.trans === d;
                    });
                    if (d._explicit && h && d.mutatedParts) for (var y = 0, A = Object.values(g.queries.query); y < A.length; y++) for (var P = 0, D = (k = A[y]).slice(); P < D.length; P++) xn((T = D[P]).obsSet, d.mutatedParts) && (je(k, T), T.subscribers.forEach(function(M) {
                      return m.add(M);
                    }));
                    else if (0 < w.length) {
                      g.optimisticOps = g.optimisticOps.filter(function(M) {
                        return M.trans !== d;
                      });
                      for (var N = 0, R = Object.values(g.queries.query); N < R.length; N++) for (var k, T, I, $ = 0, x = (k = R[N]).slice(); $ < x.length; $++) (T = x[$]).res != null && d.mutatedParts && (h && !T.dirty ? (I = Object.isFrozen(T.res), I = Rr(T.res, T.req, w, b, T, I), T.dirty ? (je(k, T), T.subscribers.forEach(function(M) {
                        return m.add(M);
                      })) : I !== T.res && (T.res = I, T.promise = j.resolve({ result: I }))) : (T.dirty && je(k, T), T.subscribers.forEach(function(M) {
                        return m.add(M);
                      })));
                    }
                  }
                }
                m.forEach(function(M) {
                  return M();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: u }), d.addEventListener("error", s(!1), { signal: u }), d.addEventListener("complete", s(!0), { signal: u })), d;
        }, table: function(r) {
          var a = e.table(r), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(i) {
            var u = B.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(i);
            var d = ze["idb://".concat(t, "/").concat(r)];
            return d ? (u = a.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || Kn(s, i).some(function(h) {
              return h == null;
            })) ? (d.optimisticOps.push(i), i.mutatedParts && Qt(i.mutatedParts), u.then(function(h) {
              0 < h.numFailures && (je(d.optimisticOps, i), (h = Nr(0, i, h)) && d.optimisticOps.push(h), i.mutatedParts && Qt(i.mutatedParts));
            }), u.catch(function() {
              je(d.optimisticOps, i), i.mutatedParts && Qt(i.mutatedParts);
            })) : u.then(function(h) {
              var m = Nr(0, l(l({}, i), { values: i.values.map(function(v, f) {
                var S;
                return h.failures[f] ? v : (v = (S = s.keyPath) !== null && S !== void 0 && S.includes(".") ? $e(v) : l({}, v), ue(v, s.keyPath, h.results[f]), v);
              }) }), h);
              d.optimisticOps.push(m), queueMicrotask(function() {
                return i.mutatedParts && Qt(i.mutatedParts);
              });
            }), u) : a.mutate(i);
          }, query: function(i) {
            if (!Pr(B, a) || !Dr("query", i)) return a.query(i);
            var u = ((m = B.trans) === null || m === void 0 ? void 0 : m.db._options.cache) === "immutable", f = B, d = f.requery, h = f.signal, m = function(b, w, y, A) {
              var P = ze["idb://".concat(b, "/").concat(w)];
              if (!P) return [];
              if (!(w = P.queries[y])) return [null, !1, P, null];
              var D = w[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (y) {
                case "query":
                  var N = D.find(function(R) {
                    return R.req.limit === A.limit && R.req.values === A.values && Tr(R.req.query.range, A.query.range);
                  });
                  return N ? [N, !0, P, D] : [D.find(function(R) {
                    return ("limit" in R.req ? R.req.limit : 1 / 0) >= A.limit && (!A.values || R.req.values) && Sa(R.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return N = D.find(function(R) {
                    return Tr(R.req.query.range, A.query.range);
                  }), [N, !!N, P, D];
              }
            }(t, r, "query", i), v = m[0], f = m[1], S = m[2], g = m[3];
            return v && f ? v.obsSet = i.obsSet : (f = a.query(i).then(function(b) {
              var w = b.result;
              if (v && (v.res = w), u) {
                for (var y = 0, A = w.length; y < A; ++y) Object.freeze(w[y]);
                Object.freeze(w);
              } else b.result = $e(w);
              return b;
            }).catch(function(b) {
              return g && v && je(g, v), Promise.reject(b);
            }), v = { obsSet: i.obsSet, promise: f, subscribers: /* @__PURE__ */ new Set(), type: "query", req: i, dirty: !1 }, g ? g.push(v) : (g = [v], (S = S || (ze["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[i.query.index.name || ""] = g)), Oa(v, g, d, h), v.promise.then(function(b) {
              return { result: Rr(b.result, i, S?.optimisticOps, a, v, u) };
            });
          } });
        } });
      } };
      function Jt(e, t) {
        return new Proxy(e, { get: function(r, a, s) {
          return a === "db" ? t : Reflect.get(r, a, s);
        } });
      }
      var Se = (ee.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new L.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(ha), r.stores({}), this._state.autoSchema = !1, r);
      }, ee.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new j(function(r, a) {
          if (t._state.openComplete) return a(new L.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void a(new L.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(r, a);
        }).then(e);
      }, ee.prototype.use = function(e) {
        var t = e.stack, r = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: a ?? 10, name: s }), e.sort(function(i, u) {
          return i.level - u.level;
        }), this;
      }, ee.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, a = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return a ? s.create !== a : !!r && s.name !== r;
        })), this;
      }, ee.prototype.open = function() {
        var e = this;
        return We(Pe, function() {
          return ya(e);
        });
      }, ee.prototype._close = function() {
        var e = this._state, t = tt.indexOf(this);
        if (0 <= t && tt.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new j(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new j(function(r, a) {
          e.cancelOpen = a;
        }));
      }, ee.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new L.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new L.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, ee.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new j(function(s, i) {
          function u() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = Z(function() {
              var h, m, v;
              h = t._deps, m = t.name, v = h.indexedDB, h = h.IDBKeyRange, Rn(v) || m === jt || Nn(v, h).delete(m).catch(Q), s();
            }), d.onerror = me(i), d.onblocked = t._fireOnBlocked;
          }
          if (r) throw new L.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(u) : u();
        });
      }, ee.prototype.backendDB = function() {
        return this.idbdb;
      }, ee.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ee.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ee.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ee.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ee.prototype, "tables", { get: function() {
        var e = this;
        return C(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), ee.prototype.transaction = function() {
        var e = function(t, r, a) {
          var s = arguments.length;
          if (s < 2) throw new L.InvalidArgument("Too few arguments");
          for (var i = new Array(s - 1); --s; ) i[s - 1] = arguments[s];
          return a = i.pop(), [t, Xn(i), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ee.prototype._transaction = function(e, t, r) {
        var a = this, s = B.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var i, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = t.map(function(m) {
            if (m = m instanceof a.Table ? m.name : m, typeof m != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return m;
          }), e == "r" || e === mn) i = mn;
          else {
            if (e != "rw" && e != yn) throw new L.InvalidArgument("Invalid transaction mode: " + e);
            i = yn;
          }
          if (s) {
            if (s.mode === mn && i === yn) {
              if (!d) throw new L.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && u.forEach(function(m) {
              if (s && s.storeNames.indexOf(m) === -1) {
                if (!d) throw new L.SubTransaction("Table " + m + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (m) {
          return s ? s._promise(null, function(v, f) {
            f(m);
          }) : q(m);
        }
        var h = function m(v, f, S, g, b) {
          return j.resolve().then(function() {
            var w = B.transless || B, y = v._createTransaction(f, S, v._dbSchema, g);
            if (y.explicit = !0, w = { trans: y, transless: w }, g) y.idbtrans = g.idbtrans;
            else try {
              y.create(), y.idbtrans._explicit = !0, v._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === sn.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({ disableAutoOpen: !1 }), v.open().then(function() {
                return m(v, f, S, null, b);
              })) : q(D);
            }
            var A, P = an(b);
            return P && et(), w = j.follow(function() {
              var D;
              (A = b.call(y, y)) && (P ? (D = Ne.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = jn(A)));
            }, w), (A && typeof A.then == "function" ? j.resolve(A).then(function(D) {
              return y.active ? D : q(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : w.then(function() {
              return A;
            })).then(function(D) {
              return g && y._resolve(), y._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return y._reject(D), q(D);
            });
          });
        }.bind(null, this, i, u, s, r);
        return s ? s._promise(i, h, "lock") : B.trans ? We(B.transless, function() {
          return a._whenReady(h);
        }) : this._whenReady(h);
      }, ee.prototype.table = function(e) {
        if (!ie(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = t = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, a = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, i, u, d, h, m = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        m.dbReadyPromise = new j(function(f) {
          m.dbReadyResolve = f;
        }), m.openCanceller = new j(function(f, S) {
          m.cancelOpen = S;
        }), this._state = m, this.name = e, this.on = ht(this, "populate", "blocked", "versionchange", "close", { ready: [on, Q] }), this.on.ready.subscribe = Vn(this.on.ready.subscribe, function(f) {
          return function(S, g) {
            ee.vip(function() {
              var b, w = r._state;
              w.openComplete ? (w.dbOpenError || j.resolve().then(S), g && f(S)) : w.onReadyBeingFired ? (w.onReadyBeingFired.push(S), g && f(S)) : (f(S), b = r, g || f(function y() {
                b.on.ready.unsubscribe(S), b.on.ready.unsubscribe(y);
              }));
            });
          };
        }), this.Collection = (s = this, gt(oa.prototype, function(A, y) {
          this.db = s;
          var g = ir, b = null;
          if (y) try {
            g = y();
          } catch (P) {
            b = P;
          }
          var w = A._ctx, y = w.table, A = y.hook.reading.fire;
          this._ctx = { table: y, index: w.index, isPrimKey: !w.index || y.schema.primKey.keyPath && w.index === y.schema.primKey.name, range: g, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: w.or, valueMapper: A !== ct ? A : null };
        })), this.Table = (i = this, gt(dr.prototype, function(f, S, g) {
          this.db = i, this._tx = g, this.name = f, this.schema = S, this.hook = i._allTables[f] ? i._allTables[f].hook : ht(null, { creating: [Jr, Q], reading: [Xr, ct], updating: [qr, Q], deleting: [Zr, Q] });
        })), this.Transaction = (u = this, gt(ua.prototype, function(f, S, g, b, w) {
          var y = this;
          this.db = u, this.mode = f, this.storeNames = S, this.schema = g, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = ht(this, "complete", "error", "abort"), this.parent = w || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(A, P) {
            y._resolve = A, y._reject = P;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(A) {
            var P = y.active;
            return y.active = !1, y.on.error.fire(A), y.parent ? y.parent._reject(A) : P && y.idbtrans && y.idbtrans.abort(), q(A);
          });
        })), this.Version = (d = this, gt(ma.prototype, function(f) {
          this.db = d, this._cfg = { version: f, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (h = this, gt(mr.prototype, function(f, S, g) {
          if (this.db = h, this._ctx = { table: f, index: S === ":id" ? null : S, or: g }, this._cmp = this._ascending = H, this._descending = function(b, w) {
            return H(w, b);
          }, this._max = function(b, w) {
            return 0 < H(b, w) ? b : w;
          }, this._min = function(b, w) {
            return H(b, w) < 0 ? b : w;
          }, this._IDBKeyRange = h._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(f) {
          0 < f.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(f) {
          !f.newVersion || f.newVersion < f.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(f.oldVersion / 10));
        }), this._maxKey = bt(t.IDBKeyRange), this._createTransaction = function(f, S, g, b) {
          return new r.Transaction(f, S, g, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(f) {
          r.on("blocked").fire(f), tt.filter(function(S) {
            return S.name === r.name && S !== r && !S._state.vcFired;
          }).map(function(S) {
            return S.on("versionchange").fire(f);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var v = new Proxy(this, { get: function(f, S, g) {
          if (S === "_vip") return !0;
          if (S === "table") return function(w) {
            return Jt(r.table(w), v);
          };
          var b = Reflect.get(f, S, g);
          return b instanceof dr ? Jt(b, v) : S === "tables" ? b.map(function(w) {
            return Jt(w, v);
          }) : S === "_createTransaction" ? function() {
            return Jt(b.apply(this, arguments), v);
          } : b;
        } });
        this.vip = v, a.forEach(function(f) {
          return f(r);
        });
      }
      var Zt, fe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Bn.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Bn.prototype[fe] = function() {
        return this;
      }, Bn);
      function Bn(e) {
        this._subscribe = e;
      }
      try {
        Zt = { indexedDB: O.indexedDB || O.mozIndexedDB || O.webkitIndexedDB || O.msIndexedDB, IDBKeyRange: O.IDBKeyRange || O.webkitIDBKeyRange };
      } catch {
        Zt = { indexedDB: null, IDBKeyRange: null };
      }
      function Ir(e) {
        var t, r = !1, a = new Aa(function(s) {
          var i = an(e), u, d = !1, h = {}, m = {}, v = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), f && Ie.storagemutated.unsubscribe(g));
          } };
          s.start && s.start(v);
          var f = !1, S = function() {
            return pn(b);
          }, g = function(w) {
            Yt(h, w), xn(m, h) && S();
          }, b = function() {
            var w, y, A;
            !d && Zt.indexedDB && (h = {}, w = {}, u && u.abort(), u = new AbortController(), A = function(P) {
              var D = Ze();
              try {
                i && et();
                var N = De(e, P);
                return N = i ? N.finally(Ne) : N;
              } finally {
                D && qe();
              }
            }(y = { subscr: w, signal: u.signal, requery: S, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              r = !0, t = P, d || y.signal.aborted || (h = {}, function(D) {
                for (var N in D) if (ie(D, N)) return;
                return 1;
              }(m = w) || f || (Ie(yt, g), f = !0), pn(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || pn(function() {
                d || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(S, 0), v;
        });
        return a.hasValue = function() {
          return r;
        }, a.getValue = function() {
          return t;
        }, a;
      }
      var He = Se;
      function Ln(e) {
        var t = xe;
        try {
          xe = !0, Ie.storagemutated.fire(e), $n(e, !0);
        } finally {
          xe = t;
        }
      }
      be(He, l(l({}, Dt), { delete: function(e) {
        return new He(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new He(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = He.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Rn(r) ? Promise.resolve(r.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== jt;
            });
          }) : Nn(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return q(new L.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          te(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? We(B.transless, e) : e();
      }, vip: Tn, async: function(e) {
        return function() {
          try {
            var t = jn(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (r) {
            return q(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var a = jn(e.apply(r, t || []));
          return a && typeof a.then == "function" ? a : j.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? He.ignoreTransaction(e) : e).timeout(t || 6e4), B.trans ? B.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return pe;
      }, set: function(e) {
        er(e);
      } }, derive: Ye, extend: te, props: be, override: Vn, Events: ht, on: Ie, liveQuery: Ir, extendObservabilitySet: Yt, getByKeyPath: ve, setByKeyPath: ue, delByKeyPath: function(e, t) {
        typeof t == "string" ? ue(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          ue(e, r, void 0);
        });
      }, shallowClone: Qn, deepClone: $e, getObjectDiff: Mn, cmp: H, asap: Yn, minKey: -1 / 0, addons: [], connections: tt, errnames: sn, dependencies: Zt, cache: ze, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), He.maxKey = bt(He.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ie(yt, function(e) {
        xe || (e = new CustomEvent(wn, { detail: e }), xe = !0, dispatchEvent(e), xe = !1);
      }), addEventListener(wn, function(e) {
        e = e.detail, xe || Ln(e);
      }));
      var at, xe = !1, xr = function() {
      };
      return typeof BroadcastChannel < "u" && ((xr = function() {
        (at = new BroadcastChannel(wn)).onmessage = function(e) {
          return e.data && Ln(e.data);
        };
      })(), typeof at.unref == "function" && at.unref(), Ie(yt, function(e) {
        xe || at.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Se.disableBfCache && e.persisted) {
          pe && console.debug("Dexie: handling persisted pagehide"), at?.close();
          for (var t = 0, r = tt; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Se.disableBfCache && e.persisted && (pe && console.debug("Dexie: handling persisted pageshow"), xr(), Ln({ all: new ae(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof Xe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !qn[e.name] ? e : (t = new qn[e.name](t || e.message, e), "stack" in e && Ae(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, er(pe), l(Se, Object.freeze({ __proto__: null, Dexie: Se, liveQuery: Ir, Entity: cr, cmp: H, PropModification: pt, replacePrefix: function(e, t) {
        return new pt({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new pt({ add: e });
      }, remove: function(e) {
        return new pt({ remove: e });
      }, default: Se, RangeSet: ae, mergeRanges: wt, rangesOverlap: wr }), { default: Se }), Se;
    });
  }(tn)), tn.exports;
}
var Ka = Ma();
const zn = /* @__PURE__ */ $a(Ka), $r = Symbol.for("Dexie"), St = globalThis[$r] || (globalThis[$r] = zn);
if (zn.semVer !== St.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${zn.semVer} and ${St.semVer}`);
const {
  liveQuery: La,
  mergeRanges: Wa,
  rangesOverlap: Fa,
  RangeSet: Ua,
  cmp: za,
  Entity: Ha,
  PropModification: Va,
  replacePrefix: Ya,
  add: Qa,
  remove: Xa
} = St;
class Mr {
  db;
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, this.db = new St(n.app), this.db.version(11).stores({
      channel: "id,slide_index",
      cloud: "id,dashboard_id",
      dashboard: "id,name,update",
      display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
      messages: "id,utc,expires",
      monitor: "id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor",
      player: "id,title,name,location",
      preference: "id,value",
      presentation: "id,name,update",
      series: "id,dashboard_id",
      slide: "id,name,presentation_id,order_index,json,html,update",
      topics: "[widget_id+message_id],message_id,widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,utc,expires",
      widget: "id,name,dashboard_id,type,update"
    }), this.db.open();
  }
  /**
   * Retrieve Cloud Data
   * @param query IQuery
   * @returns IResponse
   */
  getCloud = async (n) => {
    if (n.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %ccloud",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.CLOUD,
        n
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: n
      };
    const o = await this.db.table(_.CLOUD).where({ id: n.widget }).last().catch(() => {
      K(2, ["%capi%C %ccloud", c.API, c.NONE, c.CLOUD, n.widget]);
    });
    if (typeof o > "u")
      return { data: null, message: "Cloud Data error", success: !1, query: n };
    const l = {
      data: o.data,
      message: o !== void 0 ? "Cloud retrieved successfully" : "Cloud Data error",
      success: o !== void 0,
      query: n
    };
    return K(3, [
      "%cget%c %cstorage%c %ccloud",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.CLOUD,
      l
    ]), l;
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (n, o) => n.type === _.CLOUD && o !== "" ? await this.db.table(_.CLOUD).put({
    id: n.widget,
    dashboard_id: n.dashboard,
    //data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %ccloud",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.CLOUD,
    n,
    l.message
  ]), 400)) : 400;
  getDashboard = async (n) => {
    const o = await this.db.table(_.DASHBOARD).where({ id: n.id }).last().catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, n.id]);
    });
    return o === void 0 ? {
      data: null,
      message: `Dashboard ${n.id} Load error`,
      success: !1
    } : (o.message = `Dashboard ${n.id} retrieved from storage`, o.success = !0, o);
  };
  getDashboards = async (n) => {
    const o = (O) => n?.id === O.id, l = (O) => n?.name ? O.name.includes(n?.name) : !1;
    let E = await this.db.table(_.DASHBOARD).toArray().then((O) => n?.id ? O.filter(o) : O).then((O) => n?.name ? O.filter(l) : O).catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, n]);
    });
    return E !== void 0 && K(3, [
      "%cstorage%c %cdashboards",
      c.STORAGE,
      c.NONE,
      c.WIDGET,
      n
    ]), {
      // @ts-ignore
      data: E !== void 0 ? { dashboards: E, query: n } : null,
      message: E !== void 0 ? "Dashboards loaded from storage" : "Dashboards load error",
      success: E !== void 0
    };
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setDashboard = async (n) => {
    const o = structuredClone(n);
    return delete o.data.widgets, await this.db.table(_.DASHBOARD).put({
      id: o.id,
      name: o.name,
      data: o.data,
      update: o.update
    }).then(() => ({
      data: null,
      message: `Dashboard ${o.data.id} saved to storage`,
      success: !0
    })).catch((l) => (K(4, ["%cstorage", c.STORAGE, _.WIDGET, n, l.message]), {
      data: null,
      message: `Dashboard ${o.data.id} save error: ${l.message}`,
      success: !1
    }));
  };
  /**
   * Wipe Message data after expires timestamp
   */
  cleanMessages = async () => {
    const n = Date.now() / 1e3, o = (O) => O.expires < n, l = (O) => O.expires < n;
    return await this.db.table(_.TOPICS).orderBy("expires").filter(o).delete().catch((O) => (console.error(
      "%cstorage%c %cclean",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      O.message
    ), 0)), await this.db.table(_.MESSAGES).orderBy("expires").filter(l).delete().catch((O) => (console.error(
      "%clean%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      O.message
    ), 0));
  };
  /**
   * Retrieve Messages Data
   * @param query IQuery
   * @returns IResponse
   */
  getMessages = async (n) => {
    if (n.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %cmessages",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        n
      ]), {
        data: null,
        message: "Messages Data error",
        success: !1,
        query: n
      };
    const o = n?.order ?? "utc", l = Math.floor(Date.now() / 1e3);
    o !== "utc" && (n.since = l - 60 * 60 * 24 * 30), this.options.delay != 0 ? n.before = l - (this.options.delay || 0) : n.before = l;
    const E = (G) => G.utc > (n?.since || 0), O = (G) => G.utc < (n?.before || l), C = (G) => G?.visible !== 0;
    try {
      const te = await this.db.table(_.TOPICS).where("widget_id").equals(n.widget).filter(C).filter(E).filter(O).reverse().limit(n?.limit ?? 25).sortBy(o);
      if (te.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: n
        };
      let ge = te.map((Ce) => this.db.table(_.MESSAGES).get({ id: Ce.message_id }));
      return St.Promise.all(ge).then(async (Ce) => {
        const be = {
          data: {
            messages: Ce.map((_t) => _t.data)
          },
          query: n,
          message: "Messages retrieved successfully",
          success: !0
        };
        return K(3, [
          "%cget%c %cstorage%c %cmessages",
          c.OK,
          c.NONE,
          c.STORAGE,
          c.NONE,
          c.MESSAGES,
          be
        ]), be;
      });
    } catch (G) {
      return K(2, [
        "%cget%c %cstorage%c %cmessages",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        n,
        G.message
      ]), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  hideMessage = async (n, o) => {
    await this.db.table(_.TOPICS).where("message_id").equals(n).modify({ visible: o ? 1 : 0 }).catch((l) => (console.error(
      "%chide%c %cstorage%c %cmessage",
      c.KO,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.HIDE,
      l.message
    ), 0));
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data any
   * @returns number
   */
  setMessages = async (n, o) => {
    if (n.type !== _.MESSAGES)
      return 400;
    const l = o.data.title;
    let E = 0;
    return await o.data.messages.forEach(async (O) => {
      O.id !== null && (O.topics[0] = {
        message_id: O.id,
        engagement: O.topics[0]?.engagement || O.dynamics?.engagement || 0,
        impressions: O.topics[0]?.impressions || O.dynamics?.semrush_visits || 0,
        reach: O.topics[0]?.reach || O.dynamics?.potential_reach || 0,
        sentiment: O.topics[0]?.sentiment || 0
      }, await this.db.table(_.MESSAGES).put({
        id: O.id,
        utc: O.utc,
        data: O,
        expires: O.expires
      }).catch((C) => {
        E++, K(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set message",
          `title: ${l}`,
          O,
          C.message
        ]);
      }), await this.db.table(_.TOPICS).put({
        title: l,
        widget_id: n.widget,
        message_id: O.id,
        dashboard_id: n.dashboard,
        engagement: O.topics[0]?.engagement || O.dynamics?.engagement || 0,
        impressions: O.topics[0]?.impressions || O.dynamics?.semrush_visits || 0,
        reach: O.topics[0]?.reach || O.dynamics?.potential_reach || 0,
        sentiment: O.topics[0]?.sentiment || 0,
        utc: O.utc,
        expires: O.expires
      }).catch((C) => {
        E++, K(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set topic",
          `title: ${l}`,
          O,
          C.message
        ]);
      }), await o.data.topics.forEach(async (C) => {
        const G = C.message_id, te = C.visible ? 1 : 0, ge = C.title;
        await this.db.table(_.TOPICS).where("message_id").equals(G).modify({ visible: te }).catch((Ce) => {
          E++, K(4, [
            "%cset%c %cstorage",
            c.KO,
            c.NONE,
            c.STORAGE,
            "update message visibility",
            `title: ${ge}`,
            `widget: ${C.widget_id}`,
            Ce.message
          ]);
        });
      }));
    }), E === 0 ? 201 : 400;
  };
  /**
   * Retrieve Series Data
   * @param query IQuery
   * @returns IResponse
   */
  getSeries = async (n) => {
    if (n.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %cseries",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.CLOUD,
        n
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: n
      };
    const o = await this.db.table(_.SERIES).where({ id: n.widget }).last().catch(() => {
      K(2, [
        "%cget%c %cstorage%c %cseries",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.SERIES,
        n.widget
      ]);
    }), l = {
      data: o.data,
      message: o !== void 0 ? "Get Series success" : "Get Series error",
      success: o !== void 0,
      query: n
    };
    return K(3, [
      "%cget%c %cstorage%c %cseries",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.SERIES,
      l
    ]), l;
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (n, o) => (delete o?.query, n.type === _.SERIES && o !== "" ? await this.db.table(_.SERIES).put({
    id: n.widget,
    dashboard_id: n.dashboard,
    //data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %cseries",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.SERIES,
    n,
    l.message
  ]), 400)) : 400);
  /**
   * Retrieve Widget from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidget = async (n) => {
    if (n.id === "")
      return K(3, [
        "%cget%c %cstorage%c %cwidget",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.WIDGET,
        n
      ]), {
        data: null,
        message: "Widget Data error",
        success: !1,
        query: n
      };
    const o = await this.db.table(_.WIDGET).where({ id: n.id }).last().catch(() => {
      console.warn("%cstorage", c.STORAGE, J.WIDGET_LOAD, n.id);
    });
    return o === void 0 ? {
      data: null,
      message: `Widget ${n.id} Load error`,
      success: !1
    } : (o.message = `Widget ${n.id} retrieved from storage`, o.success = !0, o);
  };
  /**
   * Retrieve Widgets from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidgets = async (n) => {
    const o = (C) => n?.dashboard === C.dashboard_id, l = (C) => n?.type === C.type, E = (C) => n?.name ? C.name.includes(n?.name) : !1;
    let O = await this.db.table(_.WIDGET).toArray().then((C) => n?.dashboard ? C.filter(o) : C).then((C) => n?.type ? C.filter(l) : C).then((C) => n?.name ? C.filter(E) : C).catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.WIDGET_LOAD, n]);
    });
    return O !== void 0 && K(3, [
      "%cstorage%c %cwidgets",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      n
    ]), {
      // @ts-ignore
      data: O !== void 0 ? { data: O, query: n } : null,
      message: O !== void 0 ? "Widgets loaded from storage" : "Widgets load error",
      success: O !== void 0
    };
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (n) => await this.db.table(_.WIDGET).put({
    id: n.id,
    name: n.title,
    dashboard_id: n.dashboard_id,
    type: n.type,
    update: n.update
  }).then(() => ({
    data: null,
    message: `Widget ${n.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    _.WIDGET,
    n,
    o.message
  ), {
    data: null,
    message: `Widget ${n.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (n) => (n = Ia(n), this.subscribers.filter(
    (l) => l.widget === n.widget
  ).length > 0 || (n.type === _.MESSAGES && (n = Ot(this.options, n)), console.info(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    n.slide,
    n.widget
  ), console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    n
  ), this.subscribers.push(n)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((n) => n(this.subscribers));
  /**
   * Retrieve Slide from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlide = async (n) => {
    const o = await this.db.table(_.SLIDE).where({ id: n.id }).last().catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.SLIDE_LOAD, n.id]);
    });
    return {
      // @ts-ignore
      data: o !== void 0 ? { slides: o, query: n } : null,
      message: o !== void 0 ? "Slide loaded from storage" : "Slide load error",
      success: o !== void 0
    };
  };
  /**
   * Retrieve Slides from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlides = async (n) => {
    const o = (C) => n?.id ? n.id = C.id : !1, l = (C) => n?.name ? C.name.includes(n?.name) : !1, O = await this.db.table(_.SLIDE).toArray().then((C) => n?.id ? C.filter(o) : C).then((C) => n?.name ? C.filter(l) : C);
    return O !== void 0 && K(3, ["%cstorage%c %cslides", c.STORAGE, c.NONE, c.SLIDE, n]), {
      // @ts-ignore
      data: O !== void 0 ? { slides: O, query: n } : null,
      message: O !== void 0 ? "Slides loaded from storage" : "Slides load error",
      success: O !== void 0
    };
  };
  /**
   * Update Slide in Storage
   * @param query IQuery
   * @returns number
   */
  setSlide = async (n) => await this.db.table(_.SLIDE).put({
    id: n.data.id,
    presentation_id: n.data.presentation_id,
    order_index: n.data.order_index,
    name: n.data.name || "Not set",
    json: n.data.json || {},
    html: n.data.html || "",
    update: n.data.update
  }).then(() => ({
    data: null,
    message: `Slide ${n.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.SLIDE_STORE,
    n,
    o.message
  ), {
    data: null,
    message: `Slide ${n.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Retrieve Presentation from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentation = async (n) => {
    const o = await this.db.table(_.PRESENTATION).where({ id: n.id }).last().catch(() => {
      console.warn(
        "%cstorage ",
        c.STORAGE,
        J.PRESENTATION_LOAD,
        n.id
      );
    });
    return o === void 0 ? {
      data: null,
      message: `Presentation ${n.id} Load error`,
      success: !1
    } : (o.message = `Presentation ${n.id} retrieved from storage`, o.success = !0, o);
  };
  /**
   * Retrieve Presentations from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentations = async (n) => {
    const o = (O) => n?.name ? O.name.includes(n?.name) : !1, E = await this.db.table(_.PRESENTATION).toArray().then((O) => n?.name ? O.filter(o) : O);
    return E !== void 0 && K(3, [
      "%cstorage%c %cpresentations",
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      n
    ]), {
      // @ts-ignore
      data: E !== void 0 ? { presentations: E, query: n } : null,
      message: E !== void 0 ? "Presentations loaded from storage" : "Presentations load error",
      success: E !== void 0
    };
  };
  /**
   * Update Presentation in Storage
   * @param query IQuery
   * @returns number
   */
  setPresentation = async (n) => await this.db.table(_.PRESENTATION).put({
    id: n.data.id,
    name: n.data.name || "Not set",
    data: n.data,
    update: n.update
  }).then(() => ({
    data: null,
    message: `Presentation ${n.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PRESENTATION_STORE,
    n,
    o.message
  ), {
    data: null,
    message: `Presentation ${n.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Retrieve Preference from Storage
   * @param preference IPreference
   * @returns IResponse
   */
  getPreference = async (n) => {
    const o = await this.db.table(_.PREFERENCE).where({ id: n.id }).last().catch(() => {
      K(2, [
        "%cstorage",
        c.STORAGE,
        J.PREFERENCE_LOAD,
        n.id
      ]);
    });
    return {
      // @ts-ignore
      data: o !== void 0 ? { preferences: o, query: n } : null,
      message: o !== void 0 ? "Preference loaded from storage" : "Preference load error",
      success: o !== void 0
    };
  };
  /**
   * Retrieve Preferences from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPreferences = async (n) => {
    const o = (O) => n?.id ? n.id = O.id : !1, E = await this.db.table(_.SLIDE).toArray().then((O) => n?.id ? O.filter(o) : O);
    return E !== void 0 && K(3, [
      "%cstorage%c %cpreferences",
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      n
    ]), {
      // @ts-ignore
      data: E !== void 0 ? { prefrences: E, query: n } : null,
      message: E !== void 0 ? "Preferences loaded from storage" : "Preferences load error",
      success: E !== void 0
    };
  };
  /**
   * Update Preference in Storage
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (n) => await this.db.table(_.PREFERENCE).put({
    id: n.id,
    value: n.value
  }).then(() => ({
    data: null,
    message: `Preference ${n.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PREFERENCE_STORE,
    n,
    o.message
  ), {
    data: null,
    message: `Preference ${n.id} save error: ${o.message}`,
    success: !1
  }));
}
function Hn(p) {
  return new Promise((n, o) => {
    p.oncomplete = p.onsuccess = () => n(p.result), p.onabort = p.onerror = () => o(p.error);
  });
}
function Ga(p, n) {
  const o = indexedDB.open(p);
  o.onupgradeneeded = () => o.result.createObjectStore(n);
  const l = Hn(o);
  return (E, O) => l.then((C) => O(C.transaction(n, E).objectStore(n)));
}
let Un;
function Kr() {
  return Un || (Un = Ga("keyval-store", "keyval")), Un;
}
function _e(p, n = Kr()) {
  return n("readonly", (o) => Hn(o.get(p)));
}
function ke(p, n, o = Kr()) {
  return o("readwrite", (l) => (l.put(n, p), Hn(l.transaction)));
}
class Gr {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n;
  }
  getCloud = async (n) => {
    const o = Y(n);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.CLOUD, n.slide, n.widget), { data: null, message: "Cloud Data error", success: !1 }));
  };
  getSeries = async (n) => {
    const o = Y(n);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.SERIES, n.slide, n.widget), { data: null, message: "Series Data error", success: !1 }));
  };
  getMessages = async (n) => {
    const o = Y(n);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.MESSAGES, n.slide, n.widget), { data: null, message: "Messages Data error", success: !1 }));
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (n, o) => {
    if (!o.success)
      return 400;
    const l = Y(n);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.CLOUD,
      n,
      E.message
    ), 400));
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns bumber
   */
  setSeries = async (n, o) => {
    if (!o.success)
      return 400;
    const l = Y(n);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.SERIES,
      n,
      E.message
    ), 400));
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (n, o) => {
    if (!o.success)
      return 400;
    const l = Y(n);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.MESSAGES,
      n,
      E.message
    ), 400));
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (n, o) => {
    console.debug(
      `hideMessage ${n} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    const o = Y(n);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, n.id), {
      data: null,
      message: `Widget ${n.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setDashboard = async (n) => {
    const o = Y(n), l = {
      id: n.dashboard,
      name: n.name
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Dashboard ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.WIDGET,
      n,
      E.message
    ), {
      data: null,
      message: `Slide ${n.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getWidget = async (n) => {
    const o = Y(n);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, n.id), {
      data: null,
      message: `Widget ${n.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getWidgets = async (n) => (console.warn("%capi", c.API, _.SLIDE, n?.presentation), {
    data: null,
    message: "Widgets load error: ",
    success: !1
  });
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (n) => {
    const o = Y(n), l = {
      id: n.widget,
      name: n.name,
      dashboard_id: n.dashboard,
      type: n.type
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Widget ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.WIDGET,
      n,
      E.message
    ), {
      data: null,
      message: `Slide ${n.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (n) => (n.type === _.MESSAGES && (n = Ot(this.options, n)), this.subscribers.filter(
    (l) => l.widget === n.widget
  ).length > 0 || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    n.slide,
    n.widget
  ), this.subscribers.push(n)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((n) => n(this.subscribers));
  getSlide = async (n) => {
    const o = Y(n);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, n.id), {
      data: null,
      message: `Slide ${n.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getSlides = async (n) => (console.warn("%capi", c.API, _.SLIDE, n.presentation), {
    data: null,
    message: `Slided ${n.presentation} load error: `,
    success: !1
  });
  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  setSlide = async (n) => {
    const o = Y(n), l = {
      id: n.data.id,
      title: n.data.title || "Not set",
      json: n.data.json || {},
      html: n.data.html || ""
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Slide ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.SLIDE,
      n,
      E.message
    ), {
      data: null,
      message: `Slide ${n.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getPresentation = async (n) => {
    const o = Y(n);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.PRESENTATION, n.id), {
      data: null,
      message: `Slide ${n.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getPresentations = async () => ({
    data: null,
    message: "Presentations get error: ",
    success: !1
  });
  /**
   * Update Presentation
   * @param query IQuery
   * @returns number
   */
  setPresentation = async (n) => {
    const o = Y(n), l = n.data;
    return await ke(o, l).then(() => ({
      data: null,
      message: `Presentation ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.PRESENTATION,
      n,
      E.message
    ), {
      data: null,
      message: `Presentation ${n.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getPreference = async (n) => await _e(`${_.PREFERENCE}.${n.id}`).then((o) => o).catch((o) => (console.warn("%capi", c.API, _.PREFERENCE, n.id), {
    data: null,
    message: `Preference ${n.id} get error: ${o.message}`,
    success: !1
  }));
  getPreferences = async () => await _e(`${_.PREFERENCE}`).then((n) => n).catch((n) => (console.warn("%capi", c.API, _.PREFERENCE), {
    data: null,
    message: `Preferences get error: ${n.message}`,
    success: !1
  }));
  /**
   * Update Preference
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (n) => await ke(`${_.PREFERENCE}.${n.id}`, n.value).then(() => ({
    data: null,
    message: `Preference ${n.id} save error`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    _.PREFERENCE,
    n,
    o.message
  ), {
    data: null,
    message: `Preference ${n.id} save error: ${o.message}`,
    success: !1
  }));
}
class Br {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, Storage.prototype.setObject = function(o, l) {
      this.setObject(o, JSON.stringify(l));
    }, Storage.prototype.getObject = function(o) {
      const l = this.getObject(o);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (n) => {
    const o = Y(n);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (n) => {
    const o = Y(n);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (n) => {
    const o = Y(n);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (n, o) => {
    const l = Y(n);
    try {
      return localStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, n, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (n, o) => {
    const l = Y(n);
    try {
      return localStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.SERIES, n, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (n, o) => {
    const l = Y(n);
    try {
      return localStorage.setObject(l, o), 200;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, n, E), 400;
    }
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (n, o) => {
    console.debug(
      `hideMessage ${n} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    try {
      return localStorage.getObject(`${_.DASHBOARD}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Dashboard ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (n) => {
    const o = `${_.DASHBOARD}.${n.dashboard}`;
    try {
      return localStorage.setObject(o, n), {
        data: null,
        message: `Dashboard ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, n, l), {
        data: null,
        message: `Dashboard ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (n) => {
    try {
      return localStorage.getObject(`${_.WIDGET}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Widget ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (n) => {
    const o = `widget.${n.widget}`;
    try {
      return localStorage.setObject(o, n), {
        data: null,
        message: `Widget ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, n, l), {
        data: null,
        message: `Widget ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (n) => (n.type === _.MESSAGES && (n = Ot(this.options, n)), this.subscribers.filter(
    (l) => l.widget === n.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    n.slide,
    n.widget
  ), this.subscribers.push(n)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((n) => n(this.subscribers));
  getSlide = async (n) => {
    try {
      return localStorage.getObject(`${_.SLIDE}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Slide ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (n) => {
    try {
      return localStorage.getObject(`${_.SLIDE}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Slide ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  setSlide = async (n) => {
    try {
      return localStorage.setObject(`${_.SLIDE}.${n.data.id}`, {
        id: n.data.id,
        title: n.data.title || "Not set",
        json: n.data.json || {},
        html: n.data.html || ""
      }), {
        data: null,
        message: `Slide ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, n, o), {
        data: null,
        message: `Slide ${n.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (n) => {
    try {
      return localStorage.getObject(`${_.PRESENTATION}.${n.presentation}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, n.presentation, o), {
        data: null,
        message: `Presentations ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return localStorage.getObject(`${_.PRESENTATION}.`);
    } catch (n) {
      return console.warn("%capi", c.API, _.PRESENTATION, n), {
        data: null,
        message: `Presentations get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (n) => {
    try {
      return localStorage.setObject(`${_.PRESENTATION}.${n.data.id}`, n.data), {
        data: null,
        message: `Presentation ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, n, o), {
        data: null,
        message: `Presentation ${n.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (n) => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, n.id, o), {
        data: null,
        message: `Preference ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.`);
    } catch (n) {
      return console.warn("%capi", c.API, _.PREFERENCE, n), {
        data: null,
        message: `Preference get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPreference = async (n) => {
    try {
      return localStorage.setObject(
        `${_.PREFERENCE}.${n.id}`,
        n.value
      ), {
        data: null,
        message: `Preference ${n.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        n,
        o
      ), {
        data: null,
        message: `Preference ${n.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
}
class Lr {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, Storage.prototype.setObject = function(o, l) {
      this.setItem(o, JSON.stringify(l));
    }, Storage.prototype.getObject = function(o) {
      const l = this.getItem(o);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (n) => {
    const o = Y(n);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (n) => {
    const o = Y(n);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (n) => {
    const o = Y(n);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (n, o) => {
    const l = Y(n);
    try {
      return sessionStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, n, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (n, o) => {
    const l = Y(n);
    try {
      return sessionStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.SERIES, n, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (n, o) => {
    const l = Y(n);
    try {
      return sessionStorage.setObject(l, o), 200;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, n, E), 400;
    }
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (n, o) => {
    console.debug(
      `hideMessage ${n} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    try {
      return sessionStorage.getObject(`${_.DASHBOARD}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Dashboard ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (n) => {
    const o = `${_.DASHBOARD}.${n.dashboard}`;
    try {
      return sessionStorage.setObject(o, n), {
        data: null,
        message: `Dashboard ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, n, l), {
        data: null,
        message: `Dashboard ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (n) => {
    try {
      return sessionStorage.getObject(`${_.WIDGET}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Widget ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (n) => {
    const o = `widget.${n.widget}`;
    try {
      return sessionStorage.setObject(o, n), {
        data: null,
        message: `Widget ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, n, l), {
        data: null,
        message: `Slide ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (n) => (n.type === _.MESSAGES && (n = Ot(this.options, n)), this.subscribers.filter(
    (l) => l.widget === n.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    n.slide,
    n.widget
  ), this.subscribers.push(n)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((n) => n(this.subscribers));
  getSlide = async (n) => {
    try {
      return sessionStorage.getObject(`${_.SLIDE}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Slide ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (n) => {
    try {
      return sessionStorage.getObject(`${_.SLIDE}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Slide ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  setSlide = async (n) => {
    try {
      return sessionStorage.setObject(`${_.SLIDE}.${n.data.id}`, {
        id: n.data.id,
        title: n.data.title || "Not set",
        json: n.data.json || {},
        html: n.data.html || ""
      }), {
        data: null,
        message: `Slide ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, n, o), {
        data: null,
        message: `Slide ${n.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (n) => {
    try {
      return sessionStorage.getObject(`${_.PRESENTATION}.${n.presentation}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, n.presentation, o), {
        data: null,
        message: `Presentation ${n.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return sessionStorage.getObject(`${_.PRESENTATION}.`);
    } catch (n) {
      return console.warn("%capi", c.API, _.PRESENTATION, n), {
        data: null,
        message: `Presentations get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (n) => {
    try {
      return sessionStorage.setObject(`${_.PRESENTATION}.${n.data.id}`, n.data), {
        data: null,
        message: `Presentation ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, n, o), {
        data: null,
        message: `Presentation ${n.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (n) => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}.${n.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, n.id, o), {
        data: null,
        message: `Preference ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}`);
    } catch (n) {
      return console.warn("%capi", c.API, _.PREFERENCE, n), {
        data: null,
        message: `Preferences get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPreference = async (n) => {
    try {
      return sessionStorage.setObject(
        `${_.PREFERENCE}.${n.id}`,
        n.value
      ), {
        data: null,
        message: `Preference ${n.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        n,
        o
      ), {
        data: null,
        message: `Preference ${n.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
}
class Wr {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, window.BuzzCasting.WidgetData = /* @__PURE__ */ new Set();
  }
  getCloud = async (n) => {
    const o = Y(n);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Cloud Data error", success: !1 };
    }
  };
  getSeries = async (n) => {
    const o = Y(n);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Series Data error", success: !1 };
    }
  };
  getMessages = async (n) => {
    const o = Y(n);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (n, o) => {
    const l = Y(n);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, "set", n, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (n, o) => {
    const l = Y(n);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, "set", n, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (n, o) => {
    const l = Y(n);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, "set", n, E), 400;
    }
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (n, o) => {
    console.debug(
      `hideMessage ${n} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    try {
      return window.BuzzCasting.DashboardData[n.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.DASHBOARD, n.id, o), {
        data: null,
        message: `Dashboard ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (n) => {
    const o = `widget.${n.widget}`;
    try {
      return window.BuzzCasting.DashboardData[o] = n, {
        data: null,
        message: `Dashboard ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.DASHBOARD, n, l), {
        data: null,
        message: `Dashboard ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (n) => {
    try {
      return window.BuzzCasting.WidgetData[n.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.WIDGET, n.id, o), {
        data: null,
        message: `Widget ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (n) => {
    const o = `widget.${n.widget}`;
    try {
      return window.BuzzCasting.WidgetData[o] = n, {
        data: null,
        message: `Widget ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, n, l), {
        data: null,
        message: `Slide ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (n) => (n.type === _.MESSAGES && (n = Ot(this.options, n)), this.subscribers.filter(
    (l) => l.widget === n.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    n.slide,
    n.widget
  ), this.subscribers.push(n)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((n) => n(this.subscribers));
  getSlide = async (n) => {
    try {
      return window.BuzzCasting.SlideData[n.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, n.id, o), {
        data: null,
        message: `Slide ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (n) => {
    try {
      return window.BuzzCasting.SlideData.filter((o) => o.presentation_id === n.presentation);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, n.presentation_id, o), {
        data: null,
        message: `Slides for presentation ${n.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  setSlide = async (n) => {
    try {
      return window.BuzzCasting.SlideData[n.id] = {
        id: n.slide,
        title: n.data.title || "Not set",
        json: n.data.json || {},
        html: n.data.html || ""
      }, {
        data: null,
        message: `Slide ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, n, o), {
        data: null,
        message: `Slide ${n.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (n) => {
    try {
      const o = n.presentation || "none";
      return window.BuzzCasting.PresentationData[o];
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, n.presentation, o), {
        data: null,
        message: `Presentation ${n.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return window.BuzzCasting.PresentationData;
    } catch (n) {
      return console.warn("%capi", c.API, _.PRESENTATION, n), {
        data: null,
        message: `Presentations get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (n) => {
    try {
      return window.BuzzCasting.PresentationData[n.id] = n.data, {
        data: null,
        message: `Presentation ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, n, o), {
        data: null,
        message: `Presentation ${n.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (n) => {
    try {
      return window.BuzzCasting.Preferences[n.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, n.id, o), {
        data: null,
        message: `Preference ${n.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return window.BuzzCasting.Preferences;
    } catch (n) {
      return console.warn("%capi", c.API, _.PREFERENCE, n), {
        data: null,
        message: `Preferences get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPreference = async (n) => {
    try {
      return window.BuzzCasting.Preferences[n.id] = n.value, {
        data: null,
        message: `Preference ${n.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        n,
        o
      ), {
        data: null,
        message: `Preference ${n.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
}
class Ja {
  sm;
  api;
  bc;
  options;
  subscribers = [];
  //private temp: {[x:string]:any} = []
  constructor(n) {
    K(3, [
      "%cpresentation",
      c.PRESENTATION,
      n.presentation,
      J.VERSION,
      xa
    ]), this.options = n, this.sm = null;
    const o = n.presentation;
    switch (this.bc = new BroadcastChannel(o), K(3, ["%cchannel%c %capi", c.BROADCAST, c.NONE, c.API, o]), this.bc.onmessage = (l) => {
      this.actions(l);
    }, this.bc.postMessage({ event: J.STORAGE_INIT, data: {} }), this.api = new ka(n), n.storage) {
      case he.DEXIE:
        this.sm = new Mr(n);
        break;
      case he.LOCAL:
        this.sm = new Lr(n);
        break;
      case he.SESSION:
        this.sm = new Br(n);
        break;
      case he.KEYVAL:
        this.sm = new Gr(n);
        break;
      case he.WINDOW:
        this.sm = new Wr(n);
        break;
    }
  }
  addSubscriber(n) {
    this.subscribers[n.widget] = n;
  }
  update = async (n) => {
    if (this.sm === null || Object.keys(this.subscribers).length === 0)
      return;
    const o = [];
    Object.values(this.subscribers).forEach((l) => {
      o.push(this.api.get(l));
    }), o.forEach(async (l) => {
      await l.then(
        async (E) => await this.processResponse(E)
      );
    });
  };
  processResponse = async (n) => {
    let o, l = 400;
    if (n.success === !0) {
      const E = this.subscribers[n.query.widget];
      let O = "";
      switch (n.query.type) {
        case _.MESSAGES:
          let C;
          C = n.data.messages.filter(
            (G) => G.id !== null
          ), n.data.messages = C, O = n.data.messages.length > 0 ? Fn(n.data.messages[0].utc) : "none", E?.hash && E.hash === O ? (K(3, [
            "%cload%c %cmessages%c %cno updates",
            c.OK,
            c.NONE,
            c.MESSAGES,
            c.NONE,
            c.NO_UPDATES,
            n.query.widget
          ]), K(4, ["%cmessages", c.MESSAGES, n]), l = 204) : (o = n, E.hash = O, l = await this.sm?.setMessages(n.query, n).then(async (G) => (G = 201, this.broadcastUpdate(G, n))));
          break;
        case _.CLOUD:
          O = Fn(n.data.cloud), E?.hash && E.hash === O ? (K(3, [
            "%cload%c %ccloud%c %cno updates",
            c.OK,
            c.NONE,
            c.CLOUD,
            c.NONE,
            c.NO_UPDATES,
            n.query.widget
          ]), K(4, ["%ccloud", c.CLOUD, n.query]), l = 204) : (E.hash = O, o = {
            data: {
              cloud: n.data
            },
            message: n.message,
            success: n.success,
            query: n.query
          }, l = await this.sm?.setCloud(n.query, o.data).then((G) => this.broadcastUpdate(G, n)));
          break;
        case _.SERIES:
          O = Fn(n.data.series), E?.hash && E.hash === O ? (K(3, [
            "%cload%c %cseries%c %cno updates",
            c.OK,
            c.NONE,
            c.SERIES,
            c.NONE,
            c.NO_UPDATES,
            n.query.widget
          ]), K(4, ["%cseries", c.SERIES, n]), l = 204) : (E.hash = O, o = {
            data: n.data,
            message: n.message,
            success: n.success,
            query: n.query
          }, l = await this.sm?.setSeries(n.query, n.data).then((G) => this.broadcastUpdate(G, n)));
          break;
        default:
          return K(4, [
            "%cfetch%c %capi%c %cno updates",
            c.KO,
            c.NONE,
            c.API,
            c.NONE,
            c.NO_UPDATES,
            `Bad request: type ${n.query.type} unknown`
          ]), n;
      }
    } else
      switch (K(4, [
        `%cload%c %c${n.query}%c %bad request`,
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        n.query
      ]), n.query.type) {
        case _.MESSAGES:
          return await this.sm?.getMessages(n.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
        case _.CLOUD:
          return await this.sm?.getCloud(n.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
        case _.SERIES:
          return await this.sm?.getSeries(n.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
      }
    return l;
  };
  broadcastUpdate = (n, o) => {
    switch (n) {
      case 201:
        K(3, [
          `%cupdate%c %cwidget%c %c${o.query?.type}`,
          c.BROADCAST,
          c.NONE,
          c.WIDGET,
          c.NONE,
          kr(o.query),
          //@ts-ignore
          `${o.data?.title ?? ""} ${o.query.widget}`
        ]), K(4, [
          "%cevent",
          c.BROADCAST,
          //@ts-ignore
          o
        ]), this.bc.postMessage({
          event: J.WIDGET_UPDATE,
          data: o.query
        });
        break;
      case 204:
        break;
      default:
        K(2, [
          `%cupdate%c %cwidget%c %c${o.query?.type}`,
          c.KO,
          c.NONE,
          c.WIDGET,
          c.NONE,
          kr(o.query),
          "Fetch error",
          o.query
        ]);
        break;
    }
    return n;
  };
  hide = (n) => {
    this.api.hideMessage(n);
  };
  actions = async (n) => {
    switch (n.data.event) {
      case J.SUBSCRIBE:
        this.addSubscriber(n.data.data);
        break;
      case J.UPDATE:
        K(3, [
          "%cupdate%c %capi%c %cstorage",
          c.BROADCAST,
          c.NONE,
          c.API,
          c.NONE,
          c.STORAGE,
          n.data
        ]), await this.update(n.data.data);
        break;
    }
  };
  cleanMessages = async () => {
    if (this.options?.suspended) {
      K(2, [
        "%cclean%c %cstorage%c %cmessages",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        "Account suspended"
      ]);
      return;
    }
    const n = this.options?.retention || 86400 * 4, o = await this.sm?.cleanMessages(
      n
    );
    K(3, [
      "%cclean%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      `${o} messages deleted`
    ]);
  };
  hideMessage = async (n) => {
    const o = await this.sm?.hideMessage(n.id, 0);
    return K(3, [
      "%chide%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      `${o} messages hidden`
    ]), await this.api.hideMessage(n);
  };
  hideLabels = async (n) => await this.api.hideLabels(n);
  getSubscribers = async () => await new Promise((n) => n(this.subscribers));
  getSlide = async (n) => await this.sm?.getSlide(n);
  getSlides = async (n) => await this.sm?.getSlides(n);
  setSlide = async (n) => await this.sm?.setSlide(n);
  loadSlide = async (n) => await this.api.loadSlide(n);
  storeSlide = async (n) => await this.api.storeSlide(n);
  getPresentation = async (n) => await this.sm?.getPresentation(n);
  getPresentations = async (n) => await this.sm?.getPresentations(n);
  setPresentation = async (n) => await this.sm?.setPresentation(n);
  loadPresentation = async (n) => await this.api.loadPresentation(n);
  storePresentation = async (n) => await this.api.storePresentation(n);
  getPreference = async (n) => await this.sm?.getPreference(n);
  getPreferences = async (n) => await this.sm?.getPreferences(n);
  setPreference = async (n) => await this.sm?.setPreference(n);
  loadPreference = async (n) => await this.api.loadPreference(n);
  storePreference = async (n) => await this.api.storePreference(n);
  /*public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
  	return await this.api.loadDashboardWidgets(query);
  };*/
  getWidget = async (n) => await this.sm?.getWidget(n);
  getWidgets = async (n) => await this.sm?.getWidgets(n);
  setWidget = async (n) => await this.sm?.setWidget(n);
  loadDashboards = async (n) => await this.api.loadDashboards(n);
  getDashboard = async (n) => await this.sm?.getDashboard(n);
  getDashboards = async (n) => await this.sm?.getDashboards();
  setDashboard = async (n) => await this.sm?.setDashboard(n);
}
class Ba {
  sm;
  constructor(n) {
    switch (this.sm = null, n.storage) {
      case he.DEXIE:
        this.sm = new Mr(n);
        break;
      case he.LOCAL:
        this.sm = new Lr(n);
        break;
      case he.SESSION:
        this.sm = new Br(n);
        break;
      case he.KEYVAL:
        this.sm = new Gr(n);
        break;
      case he.WINDOW:
        this.sm = new Wr(n);
        break;
    }
  }
  /**
   * Retieve Cloud Data
   * @param query Widgets parameters, type "cloud"
   * @returns IResponse
   */
  getCloud = async (n) => n.type !== _.CLOUD ? (console.warn(
    "%cget%c %cstorage%c %ccloud",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.CLOUD,
    n.widget,
    "wrong method call for getMessages, type used is",
    n.type
  ), {
    data: null,
    message: `'wrong method call for getMessages, type used is ${n.type}`,
    success: !1
  }) : await this.sm?.getCloud(n);
  /**
   * Retieve Message Data
   * @param query Widgets parameters, type "messages"
   * @returns IResponse
   */
  getMessages = async (n) => n.type !== _.MESSAGES ? (console.warn(
    "%cget%c %cstorage%c %cmessages",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.MESSAGES,
    n.widget,
    "wrong method call for getMessages, type used is",
    n.type
  ), {
    data: null,
    message: `'wrong method call for getMessages, type used is ${n.type}`,
    success: !1
  }) : await this.sm?.getMessages(n);
  /**
   * Retrieve Series Data
   * @param query Widgets parameters, type "series"
   * @returns IResponse
   */
  getSeries = async (n) => n.type !== _.SERIES ? (console.warn(
    "%cget%c %cstorage%c %cseries",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.SERIES,
    n.widget,
    "wrong method call for getMessages, type used is",
    n.type
  ), {
    data: null,
    message: `'wrong method call for getSeries, type used is ${n.type}`,
    success: !1
  }) : await this.sm?.getSeries(n);
}
class Za {
  storageReader;
  broadcastChannel;
  element;
  query;
  callbacks;
  /**
   * Main container for managing widgets and data updates
   *
   * @param element widget web component
   * @param callbacks functions in the widget that will receive the update
   * @param selector container for the element - by default buzzcasting-app (optional)
   */
  constructor(n, o, l) {
    this.element = n, this.callbacks = o, l = typeof l < "u" ? l : "buzzcasting-app";
    let E;
    E = { ...n.dataset }, delete E.hmr, E.presentation = n.closest(l)?.getAttribute("presentation") ?? `${l} not found`, this.query = E, Da(n);
    const O = window.BuzzCasting.getOptions();
    this.storageReader = new Ba(O), this.broadcastChannel = new BroadcastChannel(E.presentation), this.broadcastListener();
  }
  addCallbackListener(n) {
    this.callbacks.push(n);
  }
  /**
   * Data received from BroadcastChannel
   * data that is broadcast needs to be a IMessage[] |ICloud or ISeries structure
   */
  broadcastListener() {
    const n = this.query;
    this.broadcastChannel.onmessage = async (o) => {
      const l = o.data.data;
      switch (o.data.event) {
        case J.WIDGET_UPDATE:
          try {
            if (l.dashboard === n.dashboard && l.widget === n.widget) {
              const E = await this.getData();
              E?.success && (K(4, [
                "%cset%c %cbroadcast%c %cwidget",
                c.OK,
                c.NONE,
                c.BROADCAST,
                c.NONE,
                c.WIDGET,
                this.query
              ]), this.callbacks.forEach(async (O) => {
                O(E);
              }));
            }
          } catch {
            K(4, [J.WIDGET_UPDATE, l]);
          }
          break;
        case J.APP_READY:
          this.subscribe();
          break;
      }
    };
  }
  /**
   * This is used to register the component on the container's broadcast channel
   * This takes place when the container indicates it has finished loading (ready)
   */
  subscribe() {
    K(3, [
      "%csubscribe%c %cwidget",
      c.SUBSCRIBE,
      c.NONE,
      c.WIDGET,
      this.query.presentation,
      this.query.widget
    ]), K(4, ["%cwidget", c.WIDGET, this.query]), this.broadcastChannel.postMessage({
      event: J.SUBSCRIBE,
      data: this.query
    });
  }
  /**
   * Generic call to any query type
   *
   * @returns IResponse
   */
  getData = async () => {
    switch (this.query.type) {
      case _.CLOUD:
        return await this.getCloud();
      case _.MESSAGES:
        return await this.getMessages();
      case _.SERIES:
        return await this.getSeries();
    }
    return {
      data: null,
      message: `wrong method call, '${this.query.type}' is unknown`,
      success: !1,
      query: this.query
    };
  };
  /**
   * Get Widget Coud Data
   *
   * @returns IResponse
   */
  getCloud = async () => this.query.type !== _.CLOUD ? (K(3, [
    "%cget%c %cstorage%c %cwidget",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.WIDGET,
    this.query.widget,
    "Wrong method call for getCloud, expected type is",
    this.query.type
  ]), K(4, ["%ccloud", c.CLOUD, this.query]), {
    data: null,
    message: `wrong method call for getCloud, expected type is '${this.query.type}'`,
    success: !1,
    query: this.query
  }) : await this.storageReader.getCloud(this.query);
  /**
   * Get Widget Messages Data
   *
   * @returns IResponse
   */
  getMessages = async () => this.query.type !== _.MESSAGES ? (K(3, [
    "%cget%c %cstorage%c %cwidget",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.WIDGET,
    this.query.widget,
    "Wrong method call for getMessages, expected type is",
    this.query.type
  ]), K(4, ["%cmessages", c.MESSAGES, this.query]), {
    data: null,
    message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
    success: !1
  }) : await this.storageReader.getMessages(this.query);
  /**
   * Get Widget Series Data
   *
   * @returns IResponse
   */
  getSeries = async () => this.query.type !== _.SERIES ? (K(3, [
    "%cget%c %cstorage%c %cwidget",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.WIDGET,
    this.query.widget,
    "Wrong method call for getSeries, expected type is",
    this.query.type
  ]), K(4, ["%cseries", this.query]), {
    data: null,
    message: `wrong method call for getSeries, expected type is '${this.query.type}'`,
    success: !1,
    query: this.query
  }) : await this.storageReader.getSeries(this.query);
  /**
   * Emit a show modal event using the element's attributes
   * the component is the web component name to show
   *
   * @param modal IModal
   */
  showModal = (n) => {
    K(3, [
      "%cwidget",
      c.WIDGET,
      J.SHOW_MODAL,
      n.showComponent,
      // @ts-ignore
      Pa(this.element.attributes)
      //props['data-widget'],
    ]);
    const o = new CustomEvent(J.SHOW_MODAL, {
      detail: {
        component: n.showComponent,
        props: n.props,
        //mergedProps,
        timeout: n?.timeout
      },
      bubbles: !0,
      cancelable: !0,
      composed: !0
    });
    window.dispatchEvent(o);
  };
  destroy() {
    this.broadcastChannel.close();
  }
}
export {
  Ja as BuzzcastingStorageManager,
  Ba as BuzzcastingStorageReader,
  Za as Widget
};
