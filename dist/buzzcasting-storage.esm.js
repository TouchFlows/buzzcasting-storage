var _ = /* @__PURE__ */ ((g) => (g.MESSAGES = "messages", g.CLOUD = "cloud", g.SERIES = "series", g.TOPICS = "topics", g.WIDGET = "widget", g.WIDGETS = "widgets", g.DASHBOARD = "dashboard", g.DASHBOARDS = "dashboards", g.SLIDE = "slide", g.SLIDES = "slides", g.PRESENTATION = "presentation", g.PRESENTATIONS = "presentations", g.PREFERENCE = "preference", g.PREFERENCES = "preferences", g))(_ || {}), c = /* @__PURE__ */ ((g) => (g.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", g.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", g.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", g.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", g.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", g.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", g.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", g.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", g.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", g.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", g.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", g.NONE = "color:transparent;background-color:transparent;", g.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", g.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", g.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", g.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", g.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", g.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", g.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", g.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", g))(c || {}), J = /* @__PURE__ */ ((g) => (g.ADD_SLIDE = "addSlide", g.APP_READY = "appReady", g.API_UPDATE = "apiUpdate", g.WS_API_REQUEST = "wsApiRequest", g.WS_API_RESPONSE = "wsApiResponse", g.WS_API_UPDATE = "wsApiRUpdate", g.APPROVE_MESSAGE = "approveMessage", g.CHANNEL = "channel", g.CLEAN_MESSAGES = "cleanMessages", g.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", g.CLOSE_BUILDER_MODAL = "closeBuilderModal", g.CLOSE_MODAL = "closeModal", g.CSS_SET = "setCss", g.CSS_STORE = "storeCss", g.DASHBOARD_LOAD = "loadDashboard", g.DASHBOARD_STORE = "storeDashboard", g.ERROR = "error", g.HIDE_MESSAGE = "hideMessage", g.HIDE_LABELS = "hideLabels", g.MAUPPUT_UPDATE = "layoutUpdate", g.PREV_SLIDE = "prevSlide", g.RELOAD_PRESENTATION = "reloadPresentation", g.STAR_MESSAGE = "starMessage", g.GOTO_SLIDE = "gotoSlide", g.NEXT_SLIDE = "nextSlide", g.PREFERENCE_LOAD = "loadPreference", g.PREFERENCE_STORE = "storePreference", g.PAUSE_PRESENTATION = "pausePresentation", g.PRESENTATION_READY = "presentationReady", g.PRESENTATION_LOAD = "loadPresentation", g.PRESENTATION_STORE = "storePresentation", g.SHOW_BUILDER_DIALOG = "showBuilderDialog", g.SHOW_BUILDER_MODAL = "showBuilderModal", g.SHOW_MODAL = "showModal", g.SLIDE_DID_LOAD = "slideDidLoad", g.SLIDE_GOTO = "slideGoto", g.SLIDE_READY = "slideReady", g.SLIDE_LOAD = "loadSlide", g.SLIDE_STORE = "storeSlide", g.SLIDE_TRANSITIONER = "slideTransitioner", g.START_TRANSITIONER = "startTransitioner", g.STORAGE_INIT = "storageInit", g.SUBSCRIBE = "subscribe", g.SUSPEND_ACCOUNT = "suspendAccount", g.SWITCH_PRESENTATION = "switchPresentation", g.REMOVE_CLOUD = "removeCloud", g.UPDATE = "update", g.VERSION = "version", g.WIDGETS_CLEAR = "widgetsClear", g.WIDGET_LOAD = "widgetLoad", g.WIDGET_STORE = "widgetStore", g.WIDGET_UPDATE = "widgetUpdate", g))(J || {}), er = /* @__PURE__ */ ((g) => (g.APPROVED = "approved", g.BEFORE = "before", g.DELAYED = "delayed", g.NONE = "none", g.REALTIME = "realtime", g))(er || {}), he = /* @__PURE__ */ ((g) => (g.KEYVAL = "keyval", g.LOCAL = "local", g.SESSION = "session", g.DEXIE = "dexie", g.WINDOW = "window", g))(he || {});
function Pa(g) {
  const r = {};
  for (let o = 0; o < g.length; o++) {
    const l = g.item(o);
    l != null && l.name && (r[l.name] = l.value);
  }
  return r;
}
function Da(g) {
  const r = document.createRange();
  r.selectNodeContents(g), r.deleteContents();
}
function Na(g, r) {
  for (; g.length < r; )
    g = `0${g}`;
  return g;
}
function Oe(g, r) {
  let o, l, E;
  if (r.length === 0)
    return g;
  for (o = 0, E = r.length; o < E; o++)
    l = r.charCodeAt(o), g = (g << 5) - g + l, g |= 0;
  return g < 0 ? g * -2 : g;
}
function Ra(g, r, o) {
  return Object.keys(r).sort().reduce(l, g);
  function l(E, O) {
    return jn(E, r[O], O, o);
  }
}
function jn(g, r, o, l) {
  const E = Oe(Oe(Oe(g, o), Ta(r)), typeof r);
  if (r === null)
    return Oe(E, "null");
  if (r === void 0)
    return Oe(E, "undefined");
  if (typeof r == "object" || typeof r == "function") {
    if (l.includes(r))
      return Oe(E, `[Circular]${o}`);
    l.push(r);
    const O = Ra(E, r, l);
    if (!("valueOf" in r) || typeof r.valueOf != "function")
      return O;
    try {
      return Oe(O, String(r.valueOf()));
    } catch (C) {
      return Oe(O, `[valueOf exception]${C.stack || C.message}`);
    }
  }
  return Oe(E, r.toString());
}
function Ta(g) {
  return Object.prototype.toString.call(g);
}
function Wr(g) {
  return Na(jn(0, g, "", []).toString(16), 8);
}
const st = (g) => {
  let r = {}, o = g.split(",");
  for (let l = 0; l < o.length; l++) r[o[l]] = !0;
  return r;
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
const K = (g = 0, r) => {
  switch (!0) {
    case g > 3:
      console.debug(...r);
      break;
    case g > 2:
      console.info(...r);
      break;
    case g > 1:
      console.warn(...r);
      break;
    case g > 0:
      console.error(...r);
      break;
  }
}, kn = (g) => {
  switch (g?.type) {
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
function Y(g) {
  let r = `${g.type}.${g.topics}`;
  return g.order && (r += `.${g.order}`), g.period && (r += `.${g.period}`), r;
}
function Ia(g) {
  var r;
  if (g.widget === void 0) {
    const o = (r = g.topics) == null ? void 0 : r.split("-");
    o && o.length > 1 ? (g.dashboard = o ? o[0] : "", g.widget = o ? o[1] : "") : (g.widget = g.topics, g.dashboard = g.slide);
  }
  return g;
}
function Ot(g, r) {
  var o;
  let l, E, O, C, B;
  switch (g.moderation) {
    case er.BEFORE:
      l = /* @__PURE__ */ new Date(), E = (o = g.beforeTime) == null ? void 0 : o.split(":"), O = Number.parseInt(E ? E[0] : "00"), C = Number.parseInt(E ? E[1] : "00"), B = Number.parseInt(E ? E[2] : "00"), r.before = l.setHours(O, C, B, 0) / 1e3, r.period || (r.period = l.getDay() === 1 ? 72 : 24);
      break;
    case er.DELAYED:
      g.delay && g.delay > 0 && (r.delay = `${g.delay}`);
      break;
    case er.APPROVED:
      r.approved = "1";
      break;
    default:
      g.period !== 0 && (r.period = g.period);
  }
  return r;
}
const xa = "3.9.14";
class ka {
  options;
  url;
  constructor(r) {
    this.options = r, this.url = `https://${r.app}.buzzcasting.net`;
  }
  headers = () => {
    const r = `Bearer ${this.options.bearer}`;
    return {
      headers: new Headers({
        Authorization: r,
        Accept: "application/json"
        // 'Cache-Control': 'no-cache',
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      })
    };
  };
  formHeaders = () => {
    const r = `Bearer ${this.options.bearer}`;
    return {
      headers: new Headers({
        Authorization: r,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      })
    };
  };
  async get(r) {
    const { version: o } = this.options, l = this.headers(), E = Object.assign({}, r);
    delete E.type, delete E.hash, delete E.order, E.topics = `${E.dashboard}-${E.widget}`, delete E.presentation;
    const O = Object.keys(E).length > 0 ? `?${new URLSearchParams(E).toString()}` : "";
    let C = "";
    switch (r.type) {
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
      `%cfetch%c %capi%c %c${r.type}`,
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      C,
      r.widget
    ]), K(4, [r.type, E]), await fetch(
      [this.url, "api", o, r.type].join("/") + O,
      { ...l, method: "get" }
    ).then(async (B) => {
      if (!B.ok)
        throw new Error(`${B.status}`);
      return B;
    }).then((B) => B.json()).then((B) => (B.query = r, B)).catch((B) => ({ success: !1, message: `${B}`, data: null, query: r }));
  }
  async hideMessage(r) {
    const { version: o } = this.options, l = this.headers(), E = "?action=visible";
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_MESSAGE,
      r.widget,
      r.id
    ), await fetch(
      [this.url, "api", o, "messages", r.id].join("/") + E,
      { ...l, method: "put" }
    ).then((O) => {
      if (!O.ok)
        throw new Error(O.statusText);
      return O;
    }).then((O) => O.json()).catch((O) => ({ succes: !1, message: O, data: [] }));
  }
  async hideLabels(r) {
    const { version: o } = this.options, l = this.formHeaders(), E = new URLSearchParams(), O = r.labels || [];
    for (const [C, B] of O.entries())
      E.append(`custom_filters[${C}]`, B);
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_LABELS,
      r.widget,
      O
    ), await fetch(
      [this.url, "api", o, r.type, r.widget].join("/"),
      { ...l, body: E, method: "put" }
    ).then((C) => {
      if (!C.ok)
        throw new Error(C.statusText);
      return C;
    }).then((C) => C.json()).catch((C) => ({ succes: !1, message: C, data: [] }));
  }
  async loadSlide(r) {
    const { version: o } = this.options, l = this.headers(), E = Object.assign({}, r);
    return delete E.type, delete E.hash, K(3, ["%capi%c %cloadSlide", c.API, c.NONE, c.SLIDE, r.id]), await fetch(
      [this.url, "api", o, "slides", r.id].join("/"),
      { ...l, method: "get" }
    ).then(async (O) => {
      if (!O.ok)
        throw new Error(`${O.status}`);
      return O;
    }).then((O) => O.json()).then((O) => (O.query = r, O.data && O.data.json && (O.data.json = JSON.parse(O.data.json)), O)).catch((O) => ({ success: !1, message: `${O}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storeSlide(r) {
    const { version: o } = this.options, l = this.formHeaders();
    delete r.update, delete r.type;
    const E = JSON.stringify(r);
    return K(3, [
      "%cput%c %capi%c %cslide",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.SLIDE,
      J.SLIDE_STORE,
      r.id
    ]), await fetch(
      [this.url, "api", o, "slides", r.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((O) => {
      if (!O.ok)
        throw new Error(O.statusText);
      return O;
    }).then((O) => O.json()).catch((O) => ({ succes: !1, message: O, data: [] }));
  }
  async loadPresentation(r) {
    const { version: o } = this.options, l = this.headers();
    return delete r.update, K(3, [
      "%cload%c %capi%c %cloadPresentation",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.PRESENTATION,
      r.id
    ]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, r.id].join("/"),
      { ...l, method: "get" }
    ).then(async (E) => {
      if (!E.ok)
        throw new Error(`${E.status}`);
      return E;
    }).then((E) => E.json()).then((E) => (E.query = r, E)).catch((E) => ({ success: !1, message: `${E}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storePresentation(r) {
    const { version: o } = this.options, l = this.formHeaders();
    delete r.update;
    const E = JSON.stringify(r);
    return K(2, ["%capi%c %cput", c.API, c.NONE, c.PRESENTATION, r.name]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, r.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((O) => {
      if (!O.ok)
        throw new Error(O.statusText);
      return O;
    }).then((O) => O.json()).catch((O) => ({ succes: !1, message: O, data: [] }));
  }
  async loadPreference(r) {
    const { version: o } = this.options, l = this.headers();
    return K(3, [
      "%capi%c %cloadPreference",
      c.API,
      c.NONE,
      c.APP,
      r.id
    ]), await fetch(
      [this.url, "api", o, _.PREFERENCES, r.id].join("/"),
      { ...l, method: "get" }
    ).then(async (E) => {
      if (!E.ok)
        throw new Error(`${E.status}`);
      return E;
    }).then((E) => E.json()).then((E) => E).catch((E) => ({ success: !1, message: `${E}`, data: null }));
  }
  async storePreference(r) {
    const { version: o } = this.options, l = this.formHeaders();
    delete r.update;
    const E = JSON.stringify({ data: r });
    return console.info(
      "%capi%c %cstorePreference",
      c.API,
      c.NONE,
      c.APP,
      r.id
    ), await fetch(
      [this.url, "api", o, _.PREFERENCES, r.id].join("/"),
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
  async loadDashboards(r) {
    const { version: o } = this.options, l = this.headers();
    return K(3, ["%capi%c %dashboards", c.API, c.NONE, c.WIDGET]), await fetch(
      [this.url, "api", o, _.WIDGETS, r?.id || ""].join("/"),
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
function $a(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var tr = { exports: {} }, ja = tr.exports, Cn;
function Ma() {
  return Cn || (Cn = 1, function(g, r) {
    (function(o, l) {
      g.exports = l();
    })(ja, function() {
      var o = function(e, t) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
          n.__proto__ = a;
        } || function(n, a) {
          for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
        })(e, t);
      }, l = function() {
        return (l = Object.assign || function(e) {
          for (var t, n = 1, a = arguments.length; n < a; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }).apply(this, arguments);
      };
      function E(e, t, n) {
        for (var a, s = 0, i = t.length; s < i; s++) !a && s in t || ((a = a || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(a || Array.prototype.slice.call(t));
      }
      var O = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, C = Object.keys, B = Array.isArray;
      function te(e, t) {
        return typeof t != "object" || C(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || O.Promise || (O.Promise = Promise);
      var ge = Object.getPrototypeOf, Ce = {}.hasOwnProperty;
      function ie(e, t) {
        return Ce.call(e, t);
      }
      function be(e, t) {
        typeof t == "function" && (t = t(ge(e))), (typeof Reflect > "u" ? C : Reflect.ownKeys)(t).forEach(function(n) {
          Ae(e, n, t[n]);
        });
      }
      var _t = Object.defineProperty;
      function Ae(e, t, n, a) {
        _t(e, t, te(n && ie(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, a));
      }
      function Ye(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Ae(e.prototype, "constructor", e), { extend: be.bind(null, e.prototype) };
        } };
      }
      var Fn = Object.getOwnPropertyDescriptor, Un = [].slice;
      function At(e, t, n) {
        return Un.call(e, t, n);
      }
      function Hr(e, t) {
        return t(e);
      }
      function ot(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Vr(e) {
        O.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ve(e, t) {
        if (typeof t == "string" && ie(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], a = 0, s = t.length; a < s; ++a) {
            var i = ve(e, t[a]);
            n.push(i);
          }
          return n;
        }
        var u = t.indexOf(".");
        if (u !== -1) {
          var d = e[t.substr(0, u)];
          return d == null ? void 0 : ve(d, t.substr(u + 1));
        }
      }
      function ue(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          ot(typeof n != "string" && "length" in n);
          for (var a = 0, s = t.length; a < s; ++a) ue(e, t[a], n[a]);
        } else {
          var i, u, d = t.indexOf(".");
          d !== -1 ? (i = t.substr(0, d), (u = t.substr(d + 1)) === "" ? n === void 0 ? B(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = n : ue(d = !(d = e[i]) || !ie(e, i) ? e[i] = {} : d, u, n)) : n === void 0 ? B(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function Yr(e) {
        var t, n = {};
        for (t in e) ie(e, t) && (n[t] = e[t]);
        return n;
      }
      var zn = [].concat;
      function Qr(e) {
        return zn.apply([], e);
      }
      var Ke = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Qr([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return O[e];
      }), Xr = new Set(Ke.map(function(e) {
        return O[e];
      })), it = null;
      function $e(e) {
        return it = /* @__PURE__ */ new WeakMap(), e = function t(n) {
          if (!n || typeof n != "object") return n;
          var a = it.get(n);
          if (a) return a;
          if (B(n)) {
            a = [], it.set(n, a);
            for (var s = 0, i = n.length; s < i; ++s) a.push(t(n[s]));
          } else if (Xr.has(n.constructor)) a = n;
          else {
            var u, d = ge(n);
            for (u in a = d === Object.prototype ? {} : Object.create(d), it.set(n, a), n) ie(n, u) && (a[u] = t(n[u]));
          }
          return a;
        }(e), it = null, e;
      }
      var Hn = {}.toString;
      function rr(e) {
        return Hn.call(e).slice(8, -1);
      }
      var nr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Vn = typeof nr == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[nr]) && t.apply(e);
      } : function() {
        return null;
      };
      function je(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var Qe = {};
      function Ee(e) {
        var t, n, a, s;
        if (arguments.length === 1) {
          if (B(e)) return e.slice();
          if (this === Qe && typeof e == "string") return [e];
          if (s = Vn(e)) {
            for (n = []; !(a = s.next()).done; ) n.push(a.value);
            return n;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (n = new Array(t); t--; ) n[t] = e[t];
          return n;
        }
        for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
        return n;
      }
      var ar = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, lt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], fe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(lt), Yn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Xe(e, t) {
        this.name = e, this.message = t;
      }
      function Jr(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, a, s) {
          return s.indexOf(n) === a;
        }).join(`
`);
      }
      function Pt(e, t, n, a) {
        this.failures = t, this.failedKeys = a, this.successCount = n, this.message = Jr(e, t);
      }
      function Je(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Jr(e, this.failures);
      }
      Ye(Xe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ye(Pt).from(Xe), Ye(Je).from(Xe);
      var sr = fe.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Qn = Xe, L = fe.reduce(function(e, t) {
        var n = t + "Error";
        function a(s, i) {
          this.name = n, s ? typeof s == "string" ? (this.message = "".concat(s).concat(i ? `
 ` + i : ""), this.inner = i || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Yn[t] || n, this.inner = null);
        }
        return Ye(a).from(Qn), e[t] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var Zr = lt.reduce(function(e, t) {
        return e[t + "Error"] = L[t], e;
      }, {}), Dt = fe.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = L[t]), e;
      }, {});
      function Q() {
      }
      function ct(e) {
        return e;
      }
      function Xn(e, t) {
        return e == null || e === ct ? t : function(n) {
          return t(e(n));
        };
      }
      function Me(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Jn(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var a = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var i = t.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? Me(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? Me(s, this.onerror) : s), i !== void 0 ? i : n;
        };
      }
      function Zn(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Me(n, this.onsuccess) : n), a && (this.onerror = this.onerror ? Me(a, this.onerror) : a);
        };
      }
      function qn(e, t) {
        return e === Q ? t : function(n) {
          var a = e.apply(this, arguments);
          te(n, a);
          var s = this.onsuccess, i = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Me(s, this.onsuccess) : s), i && (this.onerror = this.onerror ? Me(i, this.onerror) : i), a === void 0 ? n === void 0 ? void 0 : n : te(a, n);
        };
      }
      function ea(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function or(e, t) {
        return e === Q ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var a = this, s = arguments.length, i = new Array(s); s--; ) i[s] = arguments[s];
            return n.then(function() {
              return t.apply(a, i);
            });
          }
          return t.apply(this, arguments);
        };
      }
      Dt.ModifyError = Pt, Dt.DexieError = Xe, Dt.BulkError = Je;
      var pe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function qr(e) {
        pe = e;
      }
      var ut = {}, en = 100, Ke = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, ge(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, ge(t), e];
      }(), lt = Ke[0], fe = Ke[1], Ke = Ke[2], fe = fe && fe.then, Be = lt && lt.constructor, ir = !!Ke, dt = function(e, t) {
        ft.push([e, t]), Nt && (queueMicrotask(ra), Nt = !1);
      }, cr = !0, Nt = !0, Ge = [], Rt = [], ur = ct, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, G = Pe, ft = [], Le = 0, Tt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = G;
        if (typeof e != "function") {
          if (e !== ut) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && dr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function n(a, s) {
          try {
            s(function(i) {
              if (a._state === null) {
                if (i === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Ze();
                i && typeof i.then == "function" ? n(a, function(d, h) {
                  i instanceof j ? i._then(d, h) : i.then(d, h);
                }) : (a._state = !0, a._value = i, rn(a)), u && qe();
              }
            }, dr.bind(null, a));
          } catch (i) {
            dr(a, i);
          }
        }(this, e);
      }
      var lr = { get: function() {
        var e = G, t = Ct;
        function n(a, s) {
          var i = this, u = !e.global && (e !== G || t !== Ct), d = u && !Ne(), h = new j(function(m, v) {
            fr(i, new tn(an(a, e, u, d), an(s, e, u, d), m, v, e));
          });
          return this._consoleTask && (h._consoleTask = this._consoleTask), h;
        }
        return n.prototype = ut, n;
      }, set: function(e) {
        Ae(this, "then", e && e.prototype === ut ? lr : { get: function() {
          return e;
        }, set: lr.set });
      } };
      function tn(e, t, n, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = a, this.psd = s;
      }
      function dr(e, t) {
        var n, a;
        Rt.push(t), e._state === null && (n = e._lib && Ze(), t = ur(t), e._state = !1, e._value = t, a = e, Ge.some(function(s) {
          return s._value === a._value;
        }) || Ge.push(a), rn(e), n && qe());
      }
      function rn(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, a = t.length; n < a; ++n) fr(e, t[n]);
        var s = e._PSD;
        --s.ref || s.finalize(), Le === 0 && (++Le, dt(function() {
          --Le == 0 && hr();
        }, []));
      }
      function fr(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Le, dt(ta, [n, e, t]);
        } else e._listeners.push(t);
      }
      function ta(e, t, n) {
        try {
          var a, s = t._value;
          !t._state && Rt.length && (Rt = []), a = pe && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || Rt.indexOf(s) !== -1 || function(i) {
            for (var u = Ge.length; u; ) if (Ge[--u]._value === i._value) return Ge.splice(u, 1);
          }(t), n.resolve(a);
        } catch (i) {
          n.reject(i);
        } finally {
          --Le == 0 && hr(), --n.psd.ref || n.psd.finalize();
        }
      }
      function ra() {
        We(Pe, function() {
          Ze() && qe();
        });
      }
      function Ze() {
        var e = cr;
        return Nt = cr = !1, e;
      }
      function qe() {
        var e, t, n;
        do
          for (; 0 < ft.length; ) for (e = ft, ft = [], n = e.length, t = 0; t < n; ++t) {
            var a = e[t];
            a[0].apply(null, a[1]);
          }
        while (0 < ft.length);
        Nt = cr = !0;
      }
      function hr() {
        var e = Ge;
        Ge = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var t = Tt.slice(0), n = t.length; n; ) t[--n]();
      }
      function It(e) {
        return new j(ut, !1, e);
      }
      function Z(e, t) {
        var n = G;
        return function() {
          var a = Ze(), s = G;
          try {
            return Re(n, !0), e.apply(this, arguments);
          } catch (i) {
            t && t(i);
          } finally {
            Re(s, !1), a && qe();
          }
        };
      }
      be(j.prototype, { then: lr, _then: function(e, t) {
        fr(this, new tn(null, null, e, t, G));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(a) {
          return (a instanceof t ? n : It)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === t ? n : It)(a);
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
        var n = this;
        return e < 1 / 0 ? new j(function(a, s) {
          var i = setTimeout(function() {
            return s(new L.Timeout(t));
          }, e);
          n.then(a, s).finally(clearTimeout.bind(null, i));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = nn(), be(j, { all: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t, n) {
          e.length === 0 && t([]);
          var a = e.length;
          e.forEach(function(s, i) {
            return j.resolve(s).then(function(u) {
              e[i] = u, --a || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(t, n) {
          e.then(t, n);
        }) : new j(ut, !0, e);
      }, reject: It, race: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t, n) {
          e.map(function(a) {
            return j.resolve(a).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return G;
      }, set: function(e) {
        return G = e;
      } }, totalEchoes: { get: function() {
        return Ct;
      } }, newPSD: De, usePSD: We, scheduler: { get: function() {
        return dt;
      }, set: function(e) {
        dt = e;
      } }, rejectionMapper: { get: function() {
        return ur;
      }, set: function(e) {
        ur = e;
      } }, follow: function(e, t) {
        return new j(function(n, a) {
          return De(function(s, i) {
            var u = G;
            u.unhandleds = [], u.onunhandled = i, u.finalize = Me(function() {
              var d, h = this;
              d = function() {
                h.unhandleds.length === 0 ? s() : i(h.unhandleds[0]);
              }, Tt.push(function m() {
                d(), Tt.splice(Tt.indexOf(m), 1);
              }), ++Le, dt(function() {
                --Le == 0 && hr();
              }, []);
            }, u.finalize), e();
          }, t, n, a);
        });
      } }), Be && (Be.allSettled && Ae(j, "allSettled", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t) {
          e.length === 0 && t([]);
          var n = e.length, a = new Array(n);
          e.forEach(function(s, i) {
            return j.resolve(s).then(function(u) {
              return a[i] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[i] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || t(a);
            });
          });
        });
      }), Be.any && typeof AggregateError < "u" && Ae(j, "any", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(i, u) {
            return j.resolve(i).then(function(d) {
              return t(d);
            }, function(d) {
              s[u] = d, --a || n(new AggregateError(s));
            });
          });
        });
      }), Be.withResolvers && (j.withResolvers = Be.withResolvers));
      var re = { awaits: 0, echoes: 0, id: 0 }, na = 0, xt = [], kt = 0, Ct = 0, aa = 0;
      function De(e, t, n, a) {
        var s = G, i = Object.create(s);
        return i.parent = s, i.ref = 0, i.global = !1, i.id = ++aa, Pe.env, i.env = ir ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && te(i, t), ++s.ref, i.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = We(i, e, n, a), i.ref === 0 && i.finalize(), a;
      }
      function et() {
        return re.id || (re.id = ++na), ++re.awaits, re.echoes += en, re.id;
      }
      function Ne() {
        return !!re.awaits && (--re.awaits == 0 && (re.id = 0), re.echoes = re.awaits * en, !0);
      }
      function $t(e) {
        return re.echoes && e && e.constructor === Be ? (et(), e.then(function(t) {
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
        var n, a = G;
        (t ? !re.echoes || kt++ && e === G : !kt || --kt && e === G) || queueMicrotask(t ? function(s) {
          ++Ct, re.echoes && --re.echoes != 0 || (re.echoes = re.awaits = re.id = 0), xt.push(G), Re(s, !0);
        }.bind(null, e) : sa), e !== G && (G = e, a === Pe && (Pe.env = nn()), ir && (n = Pe.env.Promise, t = e.env, (a.global || e.global) && (Object.defineProperty(O, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function nn() {
        var e = O.Promise;
        return ir ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(O, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function We(e, t, n, a, s) {
        var i = G;
        try {
          return Re(e, !0), t(n, a, s);
        } finally {
          Re(i, !1);
        }
      }
      function an(e, t, n, a) {
        return typeof e != "function" ? e : function() {
          var s = G;
          n && et(), Re(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Re(s, !1), a && queueMicrotask(Ne);
          }
        };
      }
      function gr(e) {
        Promise === Be && re.echoes === 0 ? kt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + fe).indexOf("[native code]") === -1 && (et = Ne = Q);
      var q = j.reject, Fe = "￿", we = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", sn = "String expected.", tt = [], jt = "__dbnames", pr = "readonly", mr = "readwrite";
      function Ue(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var on = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Mt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = $e(t))[e], t;
        };
      }
      function cn() {
        throw L.Type();
      }
      function H(e, t) {
        try {
          var n = un(e), a = un(t);
          if (n !== a) return n === "Array" ? 1 : a === "Array" ? -1 : n === "binary" ? 1 : a === "binary" ? -1 : n === "string" ? 1 : a === "string" ? -1 : n === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, i) {
                for (var u = s.length, d = i.length, h = u < d ? u : d, m = 0; m < h; ++m) if (s[m] !== i[m]) return s[m] < i[m] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(ln(e), ln(t));
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
      function un(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = rr(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ln(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var dn = (X.prototype._trans = function(e, t, n) {
        var a = this._tx || G.trans, s = this.name, i = pe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(m, v, f) {
          if (!f.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return t(f.idbtrans, f);
        }
        var d = Ze();
        try {
          var h = a && a.db._novip === this.db._novip ? a === G.trans ? a._promise(e, u, n) : De(function() {
            return a._promise(e, u, n);
          }, { trans: a, transless: G.transless || G }) : function m(v, f, S, p) {
            if (v.idbdb && (v._state.openComplete || G.letThrough || v._vip)) {
              var b = v._createTransaction(f, S, v._dbSchema);
              try {
                b.create(), v._state.PR1398_maxLoop = 3;
              } catch (w) {
                return w.name === sr.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({ disableAutoOpen: !1 }), v.open().then(function() {
                  return m(v, f, S, p);
                })) : q(w);
              }
              return b._promise(f, function(w, y) {
                return De(function() {
                  return G.trans = b, p(w, y, b);
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
              return m(v, f, S, p);
            });
          }(this.db, e, [this.name], u);
          return i && (h._consoleTask = i, h = h.catch(function(m) {
            return console.trace(m), q(m);
          })), h;
        } finally {
          d && qe();
        }
      }, X.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? q(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return n.core.get({ trans: a, key: e }).then(function(s) {
            return n.hook.reading.fire(s);
          });
        }).then(t);
      }, X.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (B(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = C(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
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
        if (n && this.db._maxKey !== Fe) {
          var i = n.keyPath.slice(0, t.length);
          return this.where(i).equals(i.map(function(h) {
            return e[h];
          }));
        }
        !n && pe && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, h) {
          return H(d, h) === 0;
        }
        var u = t.reduce(function(f, h) {
          var m = f[0], v = f[1], f = a[h], S = e[h];
          return [m || f, m || !f ? Ue(v, f && f.multi ? function(p) {
            return p = ve(p, h), B(p) && p.some(function(b) {
              return s(S, b);
            });
          } : function(p) {
            return s(S, ve(p, h));
          }) : v];
        }, [null, null]), i = u[0], u = u[1];
        return i ? this.where(i.name).equals(e[i.keyPath]).filter(u) : n ? this.filter(u) : this.where(t).equals("");
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
        return new this.db.Collection(new this.db.WhereClause(this, B(e) ? "[".concat(e.join("+"), "]") : e));
      }, X.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, X.prototype.mapToClass = function(e) {
        var t, n = this.db, a = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof cn && (function(h, m) {
          if (typeof m != "function" && m !== null) throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
          function v() {
            this.constructor = h;
          }
          o(h, m), h.prototype = m === null ? Object.create(m) : (v.prototype = m.prototype, new v());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return n;
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
        var n = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [u] });
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
        return typeof e != "object" || B(e) ? this.where(":id").equals(e).modify(t) : (e = ve(e, this.schema.primKey.keyPath), e === void 0 ? q(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, X.prototype.put = function(e, t) {
        var n = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [u], keys: t != null ? [t] : null });
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
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] });
        }).then(function(n) {
          return n.numFailures ? j.reject(n.failures[0]) : void 0;
        });
      }, X.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: on });
        }).then(function(t) {
          return t.numFailures ? j.reject(t.failures[0]) : void 0;
        });
      }, X.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(a) {
            return a.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, X.prototype.bulkAdd = function(e, t, n) {
        var a = this, s = Array.isArray(t) ? t : void 0, i = (n = n || (s ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var h = e.length, m = m && d ? e.map(Mt(m)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: m, wantResults: i }).then(function(b) {
            var f = b.numFailures, S = b.results, p = b.lastResult, b = b.failures;
            if (f === 0) return i ? S : p;
            throw new Je("".concat(a.name, ".bulkAdd(): ").concat(f, " of ").concat(h, " operations failed"), b);
          });
        });
      }, X.prototype.bulkPut = function(e, t, n) {
        var a = this, s = Array.isArray(t) ? t : void 0, i = (n = n || (s ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var h = e.length, m = m && d ? e.map(Mt(m)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: m, wantResults: i }).then(function(b) {
            var f = b.numFailures, S = b.results, p = b.lastResult, b = b.failures;
            if (f === 0) return i ? S : p;
            throw new Je("".concat(a.name, ".bulkPut(): ").concat(f, " of ").concat(h, " operations failed"), b);
          });
        });
      }, X.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), i = [];
        return this._trans("readwrite", function(u) {
          return n.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
            var h = [], m = [];
            e.forEach(function(f, S) {
              var p = f.key, b = f.changes, w = d[S];
              if (w) {
                for (var y = 0, A = Object.keys(b); y < A.length; y++) {
                  var P = A[y], D = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (H(D, p) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ue(w, P, D);
                }
                i.push(S), h.push(p), m.push(w);
              }
            });
            var v = h.length;
            return n.mutate({ trans: u, type: "put", keys: h, values: m, updates: { keys: a, changeSpecs: s } }).then(function(f) {
              var S = f.numFailures, p = f.failures;
              if (S === 0) return v;
              for (var b = 0, w = Object.keys(p); b < w.length; b++) {
                var y, A = w[b], P = i[Number(A)];
                P != null && (y = p[A], delete p[A], p[P] = y);
              }
              throw new Je("".concat(t.name, ".bulkUpdate(): ").concat(S, " of ").concat(v, " operations failed"), p);
            });
          });
        });
      }, X.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(a) {
          return t.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(u) {
          var s = u.numFailures, i = u.lastResult, u = u.failures;
          if (s === 0) return i;
          throw new Je("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(n, " operations failed"), u);
        });
      }, X);
      function X() {
      }
      function ht(e) {
        function t(u, d) {
          if (d) {
            for (var h = arguments.length, m = new Array(h - 1); --h; ) m[h - 1] = arguments[h];
            return n[u].subscribe.apply(null, m), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
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
            return n[u] = t[u] = v;
          }
          C(m = u).forEach(function(f) {
            var S = m[f];
            if (B(S)) i(f, m[f][0], m[f][1]);
            else {
              if (S !== "asap") throw new L.InvalidArgument("Invalid event config");
              var p = i(f, ct, function() {
                for (var b = arguments.length, w = new Array(b); b--; ) w[b] = arguments[b];
                p.subscribers.forEach(function(y) {
                  Vr(function() {
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
      function rt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function yr(e, t) {
        e.filter = Ue(e.filter, t);
      }
      function br(e, t, n) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Ue(a(), t());
        } : t, e.justLimit = n && !a;
      }
      function Kt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new L.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function fn(e, t, n) {
        var a = Kt(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Bt(e, t, n, a) {
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
          return Promise.all([e.or._iterate(u, n), hn(fn(e, a, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return hn(fn(e, a, n), Ue(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function hn(e, t, n, a) {
        var s = Z(a ? function(i, u, d) {
          return n(a(i), u, d);
        } : n);
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
      var pt = (gn.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (B(n)) return E(E([], B(e) ? e : [], !0), n).sort();
          if (typeof n == "number") return (Number(e) || 0) + n;
          if (typeof n == "bigint") try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
          throw new TypeError("Invalid term ".concat(n));
        }
        if (t.remove !== void 0) {
          var a = t.remove;
          if (B(a)) return B(e) ? e.filter(function(s) {
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
        return n = (n = t.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
      }, gn);
      function gn(e) {
        this["@@propmod"] = e;
      }
      var oa = (V.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, q.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, V.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, q.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, V.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Ue(t.algorithm, e);
      }, V.prototype._iterate = function(e, t) {
        return Bt(this._ctx, e, t, this._ctx.table.core);
      }, V.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && te(n, e), t._ctx = n, t;
      }, V.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, V.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return Bt(t, e, n, t.table.core);
        });
      }, V.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var a = t._ctx, s = a.table.core;
          if (rt(a, !0)) return s.count({ trans: n, query: { index: Kt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var i = 0;
          return Bt(a, function() {
            return ++i, !1;
          }, n, s).then(function() {
            return i;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), a = n[0], s = n.length - 1;
        function i(h, m) {
          return m ? i(h[n[m]], m - 1) : h[a];
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
        return this._read(function(n) {
          var a = t._ctx;
          if (a.dir === "next" && rt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, i = Kt(a, a.table.core.schema);
            return a.table.core.query({ trans: n, limit: a.limit, values: !0, query: { index: i, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Bt(a, function(d) {
            return u.push(d);
          }, n, a.table.core).then(function() {
            return u;
          });
        }, e);
      }, V.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, rt(t) ? br(t, function() {
          var n = e;
          return function(a, s) {
            return n === 0 || (n === 1 ? --n : s(function() {
              a.advance(n), n = 0;
            }), !1);
          };
        }) : br(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, V.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), br(this._ctx, function() {
          var t = e;
          return function(n, a, s) {
            return --t <= 0 && a(s), 0 <= t;
          };
        }, !0), this;
      }, V.prototype.until = function(e, t) {
        return yr(this._ctx, function(n, a, s) {
          return !e(n.value) || (a(s), t);
        }), this;
      }, V.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, V.prototype.last = function(e) {
        return this.reverse().first(e);
      }, V.prototype.filter = function(e) {
        var t;
        return yr(this._ctx, function(n) {
          return e(n.value);
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
        return t.keysOnly = !t.isMatch, this.each(function(n, a) {
          e(a.key, a);
        });
      }, V.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, V.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, a) {
          e(a.primaryKey, a);
        });
      }, V.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(a, s) {
          n.push(s.key);
        }).then(function() {
          return n;
        }).then(e);
      }, V.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && rt(t, !0) && 0 < t.limit) return this._read(function(a) {
          var s = Kt(t, t.table.core.schema);
          return t.table.core.query({ trans: a, values: !1, limit: t.limit, query: { index: s, range: t.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(a, s) {
          n.push(s.primaryKey);
        }).then(function() {
          return n;
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
        return yr(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = ie(t, a);
          return t[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(a) {
          var s, i, u;
          u = typeof e == "function" ? e : (s = C(e), i = s.length, function(y) {
            for (var A = !1, P = 0; P < i; ++P) {
              var D = s[P], N = e[D], R = ve(y, D);
              N instanceof pt ? (ue(y, D, N.execute(R)), A = !0) : R !== N && (ue(y, D, N), A = !0);
            }
            return A;
          });
          var d = n.table.core, f = d.schema.primaryKey, h = f.outbound, m = f.extractKey, v = 200, f = t.db._options.modifyChunkSize;
          f && (v = typeof f == "object" ? f[d.name] || f["*"] || 200 : f);
          function S(y, D) {
            var P = D.failures, D = D.numFailures;
            b += y - D;
            for (var N = 0, R = C(P); N < R.length; N++) {
              var k = R[N];
              p.push(P[k]);
            }
          }
          var p = [], b = 0, w = [];
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
                  return (0 < $.length || P && e === vr) && d.mutate({ trans: a, type: "delete", keys: $, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return S($.length, U);
                  });
                }).then(function() {
                  return y.length > D + N && A(D + v);
                });
              });
            }
            var P = rt(n) && n.limit === 1 / 0 && (typeof e != "function" || e === vr) && { index: n.index, range: n.range };
            return A(0).then(function() {
              if (0 < p.length) throw new Pt("Error modifying one or more objects", p, b, w);
              return y.length;
            });
          });
        });
      }, V.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return rt(e) && (e.isPrimKey || t.type === 3) ? this._write(function(n) {
          var a = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: n, query: { index: a, range: s } }).then(function(i) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: s }).then(function(u) {
              var d = u.failures;
              if (u.lastResult, u.results, u = u.numFailures, u) throw new Pt("Could not delete some values", Object.keys(d).map(function(h) {
                return d[h];
              }), i - u);
              return i - u;
            });
          });
        }) : this.modify(vr);
      }, V);
      function V() {
      }
      var vr = function(e, t) {
        return t.value = null;
      };
      function ia(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ca(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function le(e, t, n) {
        return e = e instanceof mn ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function nt(e) {
        return new e.Collection(e, function() {
          return pn("");
        }).limit(0);
      }
      function Gt(e, t, n, a) {
        var s, i, u, d, h, m, v, f = n.length;
        if (!n.every(function(b) {
          return typeof b == "string";
        })) return le(e, sn);
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
          var w = n.map(function(y) {
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
        var p = 0;
        return e._addAlgorithm(function(b, w, y) {
          var A = b.key;
          if (typeof A != "string") return !1;
          var P = i(A);
          if (t(P, h, p)) return !0;
          for (var D = null, N = p; N < f; ++N) {
            var R = function(k, T, I, $, x, M) {
              for (var F = Math.min(k.length, $.length), U = -1, z = 0; z < F; ++z) {
                var de = T[z];
                if (de !== $[z]) return x(k[z], I[z]) < 0 ? k.substr(0, z) + I[z] + I.substr(z + 1) : x(k[z], $[z]) < 0 ? k.substr(0, z) + $[z] + I.substr(z + 1) : 0 <= U ? k.substr(0, U) + T[U] + I.substr(U + 1) : null;
                x(k[z], de) < 0 && (U = z);
              }
              return F < $.length && M === "next" ? k + I.substr(k.length) : F < k.length && M === "prev" ? k.substr(0, I.length) : U < 0 ? null : k.substr(0, U) + $[U] + I.substr(U + 1);
            }(A, P, d[N], h[N], u, m);
            R === null && D === null ? p = N + 1 : (D === null || 0 < u(D, R)) && (D = R);
          }
          return w(D !== null ? function() {
            b.continue(D + v);
          } : y), !1;
        }), e;
      }
      function Te(e, t, n, a) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: a };
      }
      function pn(e) {
        return { type: 1, lower: e, upper: e };
      }
      var mn = (Object.defineProperty(ne.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ne.prototype.between = function(e, t, n, a) {
        n = n !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || a) && (!n || !a) ? nt(this) : new this.Collection(this, function() {
            return Te(e, t, !n, !a);
          });
        } catch {
          return le(this, we);
        }
      }, ne.prototype.equals = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return pn(e);
        });
      }, ne.prototype.above = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(e, void 0, !0);
        });
      }, ne.prototype.aboveOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(e, void 0, !1);
        });
      }, ne.prototype.below = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(void 0, e, !1, !0);
        });
      }, ne.prototype.belowOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Te(void 0, e);
        });
      }, ne.prototype.startsWith = function(e) {
        return typeof e != "string" ? le(this, sn) : this.between(e, e + Fe, !0, !0);
      }, ne.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Gt(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], Fe);
      }, ne.prototype.equalsIgnoreCase = function(e) {
        return Gt(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, ne.prototype.anyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? nt(this) : Gt(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, ne.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? nt(this) : Gt(this, function(t, n) {
          return n.some(function(a) {
            return t.indexOf(a) === 0;
          });
        }, e, Fe);
      }, ne.prototype.anyOf = function() {
        var e = this, t = Ee.apply(Qe, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return le(this, we);
        }
        if (t.length === 0) return nt(this);
        var a = new this.Collection(this, function() {
          return Te(t[0], t[t.length - 1]);
        });
        a._ondirectionchange = function(i) {
          n = i === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var s = 0;
        return a._addAlgorithm(function(i, u, d) {
          for (var h = i.key; 0 < n(h, t[s]); ) if (++s === t.length) return u(d), !1;
          return n(h, t[s]) === 0 || (u(function() {
            i.continue(t[s]);
          }), !1);
        }), a;
      }, ne.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ne.prototype.noneOf = function() {
        var e = Ee.apply(Qe, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return le(this, we);
        }
        var t = e.reduce(function(n, a) {
          return n ? n.concat([[n[n.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, ne.prototype.inAnyRange = function(A, t) {
        var n = this, a = this._cmp, s = this._ascending, i = this._descending, u = this._min, d = this._max;
        if (A.length === 0) return nt(this);
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
        var p = 0, b = m ? function(P) {
          return 0 < s(P, v[p][1]);
        } : function(P) {
          return 0 <= s(P, v[p][1]);
        }, w = h ? function(P) {
          return 0 < i(P, v[p][0]);
        } : function(P) {
          return 0 <= i(P, v[p][0]);
        }, y = b, A = new this.Collection(this, function() {
          return Te(v[0][0], v[v.length - 1][1], !h, !m);
        });
        return A._ondirectionchange = function(P) {
          f = P === "next" ? (y = b, s) : (y = w, i), v.sort(S);
        }, A._addAlgorithm(function(P, D, N) {
          for (var R, k = P.key; y(k); ) if (++p === v.length) return D(N), !1;
          return !b(R = k) && !w(R) || (n._cmp(k, v[p][1]) === 0 || n._cmp(k, v[p][0]) === 0 || D(function() {
            f === s ? P.continue(v[p][0]) : P.continue(v[p][1]);
          }), !1);
        }), A;
      }, ne.prototype.startsWithAnyOf = function() {
        var e = Ee.apply(Qe, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? nt(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Fe];
        })) : le(this, "startsWithAnyOf() only works with strings");
      }, ne);
      function ne() {
      }
      function me(e) {
        return Z(function(t) {
          return mt(t), e(t.target.error), !1;
        });
      }
      function mt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var yt = "storagemutated", Er = "x-storagemutated-1", Ie = ht(null, yt), ua = (ye.prototype._lock = function() {
        return ot(!G.global), ++this._reculock, this._reculock !== 1 || G.global || (G.lockOwnerFor = this), this;
      }, ye.prototype._unlock = function() {
        if (ot(!G.global), --this._reculock == 0) for (G.global || (G.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            We(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, ye.prototype._locked = function() {
        return this._reculock && G.lockOwnerFor !== this;
      }, ye.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ot(!this.idbtrans), !e && !n) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new L.DatabaseClosed(a);
          case "MissingAPIError":
            throw new L.MissingAPI(a.message, a);
          default:
            throw new L.OpenFailed(a);
        }
        if (!this.active) throw new L.TransactionInactive();
        return ot(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Z(function(s) {
          mt(s), t._reject(e.error);
        }), e.onabort = Z(function(s) {
          mt(s), t.active && t._reject(new L.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Z(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ie.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ye.prototype._promise = function(e, t, n) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return q(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return q(new L.TransactionInactive());
        if (this._locked()) return new j(function(i, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, t, n).then(i, u);
          }, G]);
        });
        if (n) return De(function() {
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
        var t, n = this._root(), a = j.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return a;
        }) : (n._waitingFor = a, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function i() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = i);
        }());
        var s = n._waitingFor;
        return new j(function(i, u) {
          a.then(function(d) {
            return n._waitingQueue.push(Z(i.bind(null, d)));
          }, function(d) {
            return n._waitingQueue.push(Z(u.bind(null, d)));
          }).finally(function() {
            n._waitingFor === s && (n._waitingFor = null);
          });
        });
      }, ye.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new L.Abort()));
      }, ye.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (ie(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new L.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, ye);
      function ye() {
      }
      function wr(e, t, n, a, s, i, u) {
        return { name: e, keyPath: t, unique: n, multi: a, auto: s, compound: i, src: (n && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + yn(t) };
      }
      function yn(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Sr(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (a = function(s) {
          return [s.name, s];
        }, n.reduce(function(s, i, u) {
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
      function Or(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return ve(n, t);
        } : function(n) {
          return ve(n, e);
        };
        var t;
      }
      function bn(e) {
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
          var p = y.lower, b = y.upper, w = y.lowerOpen, y = y.upperOpen;
          return p === void 0 ? b === void 0 ? null : t.upperBound(b, !!y) : b === void 0 ? t.lowerBound(p, !!w) : t.bound(p, b, !!w, !!y);
        }
        function s(S) {
          var p, b = S.name;
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
                ce = ce.target.result, U.forEach(function(Ve, Lr) {
                  return Ve.error != null && (z[Lr] = Ve.error);
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
          }, query: (p = m, function(w) {
            return new Promise(function(y, A) {
              y = Z(y);
              var P, D, N, I = w.trans, R = w.values, k = w.limit, x = w.query, T = k === 1 / 0 ? void 0 : k, $ = x.index, x = x.range, I = I.objectStore(b), $ = $.isPrimaryKey ? I : I.index($.name), x = a(x);
              if (k === 0) return y({ result: [] });
              p ? ((T = R ? $.getAll(x, T) : $.getAllKeys(x, T)).onsuccess = function(M) {
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
                    ce = Z(ce), x.onerror = me(Ve), W.fail = Ve, W.stop = function(Lr) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = de, ce(Lr);
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
        var i, u, d, v = (u = h, d = bn((i = e).objectStoreNames), { schema: { name: i.name, tables: d.map(function(S) {
          return u.objectStore(S);
        }).map(function(S) {
          var p = S.keyPath, y = S.autoIncrement, b = B(p), w = {}, y = { name: S.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: p == null, compound: b, keyPath: p, autoIncrement: y, unique: !0, extractKey: Or(p) }, indexes: bn(S.indexNames).map(function(A) {
            return S.index(A);
          }).map(function(N) {
            var P = N.name, D = N.unique, R = N.multiEntry, N = N.keyPath, R = { name: P, compound: B(N), keyPath: N, unique: D, multiEntry: R, extractKey: Or(N) };
            return w[vt(N)] = R;
          }), getIndexByKeyPath: function(A) {
            return w[vt(A)];
          } };
          return w[":id"] = y.primaryKey, p != null && (w[vt(p)] = y.primaryKey), y;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), h = v.schema, m = v.hasGetAll, v = h.tables.map(s), f = {};
        return v.forEach(function(S) {
          return f[S.name] = S;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(S) {
          if (!f[S]) throw new Error("Table '".concat(S, "' not found"));
          return f[S];
        }, MIN_KEY: -1 / 0, MAX_KEY: bt(t), schema: h };
      }
      function fa(e, t, n, a) {
        var s = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (a = da(t, s, a), e.dbcore.reduce(function(i, u) {
          return u = u.create, l(l({}, i), u(i));
        }, a)) };
      }
      function Lt(e, a) {
        var n = a.db, a = fa(e._middlewares, n, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(s) {
          var i = s.name;
          e.core.schema.tables.some(function(u) {
            return u.name === i;
          }) && (s.core = e.core.table(i), e[i] instanceof e.Table && (e[i].core = s.core));
        });
      }
      function Wt(e, t, n, a) {
        n.forEach(function(s) {
          var i = a[s];
          t.forEach(function(u) {
            var d = function h(m, v) {
              return Fn(m, v) || (m = ge(m)) && h(m, v);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(h) {
              _t(this, s, { value: h, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, i));
          });
        });
      }
      function _r(e, t) {
        t.forEach(function(n) {
          for (var a in n) n[a] instanceof e.Table && delete n[a];
        });
      }
      function ha(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ga(e, t, n, a) {
        var s = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Sr("$meta", En("")[0], []), e._storeNames.push("$meta"));
        var i = e._createTransaction("readwrite", e._storeNames, s);
        i.create(n), i._completion.catch(a);
        var u = i._reject.bind(i), d = G.transless || G;
        De(function() {
          return G.trans = i, G.transless = d, t !== 0 ? (Lt(e, n), m = t, ((h = i).storeNames.includes("$meta") ? h.table("$meta").get("version").then(function(v) {
            return v ?? m;
          }) : j.resolve(m)).then(function(v) {
            return S = v, p = i, b = n, w = [], v = (f = e)._versions, y = f._dbSchema = Ut(0, f.idbdb, b), (v = v.filter(function(A) {
              return A._cfg.version >= S;
            })).length !== 0 ? (v.forEach(function(A) {
              w.push(function() {
                var P = y, D = A._cfg.dbschema;
                zt(f, P, b), zt(f, D, b), y = f._dbSchema = D;
                var N = Ar(P, D);
                N.add.forEach(function($) {
                  Pr(b, $[0], $[1].primKey, $[1].indexes);
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
                  Lt(f, b), p._memoizedTables = {};
                  var k = Yr(D);
                  N.del.forEach(function($) {
                    k[$] = P[$];
                  }), _r(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], C(k), k), p.schema = k;
                  var T, I = ar(R);
                  return I && et(), N = j.follow(function() {
                    var $;
                    (T = R(p)) && I && ($ = Ne.bind(null, null), T.then($, $));
                  }), T && typeof T.then == "function" ? j.resolve(T) : N.then(function() {
                    return T;
                  });
                }
              }), w.push(function(P) {
                var D, N, R = A._cfg.dbschema;
                D = R, N = P, [].slice.call(N.db.objectStoreNames).forEach(function(k) {
                  return D[k] == null && N.db.deleteObjectStore(k);
                }), _r(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), p.schema = f._dbSchema;
              }), w.push(function(P) {
                f.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(f.idbdb.version / 10) === A._cfg.version ? (f.idbdb.deleteObjectStore("$meta"), delete f._dbSchema.$meta, f._storeNames = f._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return w.length ? j.resolve(w.shift()(p.idbtrans)).then(A) : j.resolve();
            }().then(function() {
              vn(y, b);
            })) : j.resolve();
            var f, S, p, b, w, y;
          }).catch(u)) : (C(s).forEach(function(v) {
            Pr(n, v, s[v].primKey, s[v].indexes);
          }), Lt(e, n), void j.follow(function() {
            return e.on.populate.fire(i);
          }).catch(u));
          var h, m;
        });
      }
      function pa(e, t) {
        vn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = Ut(0, e.idbdb, t);
        zt(e, e._dbSchema, t);
        for (var a = 0, s = Ar(n, e._dbSchema).change; a < s.length; a++) {
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
      function Ar(e, t) {
        var n, a = { del: [], add: [], change: [] };
        for (n in e) t[n] || a.del.push(n);
        for (n in t) {
          var s = e[n], i = t[n];
          if (s) {
            var u = { name: n, def: i, recreate: !1, del: [], add: [], change: [] };
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
          } else a.add.push([n, i]);
        }
        return a;
      }
      function Pr(e, t, n, a) {
        var s = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return a.forEach(function(i) {
          return Ft(s, i);
        }), s;
      }
      function vn(e, t) {
        C(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (pe && console.debug("Dexie: Creating missing table", n), Pr(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Ft(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Ut(e, t, n) {
        var a = {};
        return At(t.objectStoreNames, 0).forEach(function(s) {
          for (var i = n.objectStore(s), u = wr(yn(m = i.keyPath), m || "", !0, !1, !!i.autoIncrement, m && typeof m != "string", !0), d = [], h = 0; h < i.indexNames.length; ++h) {
            var v = i.index(i.indexNames[h]), m = v.keyPath, v = wr(v.name, m, !!v.unique, !!v.multiEntry, !1, m && typeof m != "string", !1);
            d.push(v);
          }
          a[s] = Sr(s, u, d);
        }), a;
      }
      function zt(e, t, n) {
        for (var a = n.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var i = a[s], u = n.objectStore(i);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var h = u.indexNames[d], m = u.index(h).keyPath, v = typeof m == "string" ? m : "[" + At(m).join("+") + "]";
            !t[i] || (m = t[i].idxByName[v]) && (m.name = h, delete t[i].idxByName[v], t[i].idxByName[h] = m);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && O.WorkerGlobalScope && O instanceof O.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function En(e) {
        return e.split(",").map(function(t, n) {
          var a = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return wr(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), B(s), n === 0);
        });
      }
      var ma = (Ht.prototype._parseStoresSpec = function(e, t) {
        C(e).forEach(function(n) {
          if (e[n] !== null) {
            var a = En(e[n]), s = a.shift();
            if (s.unique = !0, s.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(i) {
              if (i.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!i.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), t[n] = Sr(n, s, a);
          }
        });
      }, Ht.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? te(this._cfg.storesSource, n) : n;
        var n = t._versions, a = {}, s = {};
        return n.forEach(function(i) {
          te(a, i._cfg.storesSource), s = i._cfg.dbschema = {}, i._parseStoresSpec(a, s);
        }), t._dbSchema = s, _r(t, [t._allTables, t, t.Transaction.prototype]), Wt(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], C(s), s), t._storeNames = C(s), this;
      }, Ht.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = or(this._cfg.contentUpgrade || Q, e), this;
      }, Ht);
      function Ht() {
      }
      function Dr(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Se(jt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Nr(e) {
        return e && typeof e.databases == "function";
      }
      function Rr(e) {
        return De(function() {
          return G.letThrough = !0, e();
        });
      }
      function Tr(e) {
        return !("from" in e);
      }
      var ae = function(e, t) {
        if (!this) {
          var n = new ae();
          return e && "d" in e && te(n, e), n;
        }
        te(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Et(e, t, n) {
        var a = H(t, n);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Tr(e)) return te(e, { from: t, to: n, d: 1 });
          var s = e.l, a = e.r;
          if (H(n, e.from) < 0) return s ? Et(s, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, Sn(e);
          if (0 < H(t, e.to)) return a ? Et(a, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, Sn(e);
          H(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, s && !e.l && wt(e, s), a && n && wt(e, a);
        }
      }
      function wt(e, t) {
        Tr(t) || function n(a, h) {
          var i = h.from, u = h.to, d = h.l, h = h.r;
          Et(a, i, u), d && n(a, d), h && n(a, h);
        }(e, t);
      }
      function wn(e, t) {
        var n = Vt(t), a = n.next();
        if (a.done) return !1;
        for (var s = a.value, i = Vt(e), u = i.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (H(d.from, s.to) <= 0 && 0 <= H(d.to, s.from)) return !0;
          H(s.from, d.from) < 0 ? s = (a = n.next(d.from)).value : d = (u = i.next(s.from)).value;
        }
        return !1;
      }
      function Vt(e) {
        var t = Tr(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var a = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, a) for (; t.n.l && H(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !a || H(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function Sn(e) {
        var t, n, a = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", n = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], n[s] = a[t], (e[t] = n).d = On(n)), e.d = On(e);
      }
      function On(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function Yt(e, t) {
        return C(t).forEach(function(n) {
          e[n] ? wt(e[n], t[n]) : e[n] = function a(s) {
            var i, u, d = {};
            for (i in s) ie(s, i) && (u = s[i], d[i] = !u || typeof u != "object" || Xr.has(u.constructor) ? u : a(u));
            return d;
          }(t[n]);
        }), e;
      }
      function Ir(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && wn(t[n], e[n]);
        });
      }
      be(ae.prototype, ((fe = { add: function(e) {
        return wt(this, e), this;
      }, addKey: function(e) {
        return Et(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return Et(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = Vt(this).next(e).value;
        return t && H(t.from, e) <= 0 && 0 <= H(t.to, e);
      } })[nr] = function() {
        return Vt(this);
      }, fe));
      var ze = {}, xr = {}, kr = !1;
      function Qt(e) {
        Yt(xr, e), kr || (kr = !0, setTimeout(function() {
          kr = !1, Cr(xr, !(xr = {}));
        }, 0));
      }
      function Cr(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(ze); a < s.length; a++) _n(u = s[a], e, n, t);
        else for (var i in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
          d && (i = d[1], d = d[2], (u = ze["idb://".concat(i, "/").concat(d)]) && _n(u, e, n, t));
        }
        n.forEach(function(h) {
          return h();
        });
      }
      function _n(e, t, n, a) {
        for (var s = [], i = 0, u = Object.entries(e.queries.query); i < u.length; i++) {
          for (var d = u[i], h = d[0], m = [], v = 0, f = d[1]; v < f.length; v++) {
            var S = f[v];
            Ir(t, S.obsSet) ? S.subscribers.forEach(function(y) {
              return n.add(y);
            }) : a && m.push(S);
          }
          a && s.push([h, m]);
        }
        if (a) for (var p = 0, b = s; p < b.length; p++) {
          var w = b[p], h = w[0], m = w[1];
          e.queries.query[h] = m;
        }
      }
      function ya(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? q(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var a = t.openCanceller, s = Math.round(10 * e.verno), i = !1;
        function u() {
          if (t.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new j(function(S, p) {
            if (u(), !n) throw new L.MissingAPI();
            var b = e.name, w = t.autoSchema || !s ? n.open(b) : n.open(b, s);
            if (!w) throw new L.MissingAPI();
            w.onerror = me(p), w.onblocked = Z(e._fireOnBlocked), w.onupgradeneeded = Z(function(y) {
              var A;
              v = w.transaction, t.autoSchema && !e._options.allowEmptyDB ? (w.onerror = mt, v.abort(), w.result.close(), (A = n.deleteDatabase(b)).onsuccess = A.onerror = Z(function() {
                p(new L.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (v.onerror = me(p), y = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion, f = y < 1, e.idbdb = w.result, i && pa(e, v), ga(e, y / 10, v, p));
            }, p), w.onsuccess = Z(function() {
              v = null;
              var y, A, P, D, N, R = e.idbdb = w.result, k = At(R.objectStoreNames);
              if (0 < k.length) try {
                var T = R.transaction((D = k).length === 1 ? D[0] : D, "readonly");
                if (t.autoSchema) A = R, P = T, (y = e).verno = A.version / 10, P = y._dbSchema = Ut(0, A, P), y._storeNames = At(A.objectStoreNames, 0), Wt(y, [y._allTables], C(P), P);
                else if (zt(e, e._dbSchema, T), ((N = Ar(Ut(0, (N = e).idbdb, T), N._dbSchema)).add.length || N.change.some(function(I) {
                  return I.add.length || I.change.length;
                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), R.close(), s = R.version + 1, i = !0, S(d());
                Lt(e, T);
              } catch {
              }
              tt.push(e), R.onversionchange = Z(function(I) {
                t.vcFired = !0, e.on("versionchange").fire(I);
              }), R.onclose = Z(function(I) {
                e.on("close").fire(I);
              }), f && (N = e._deps, T = b, R = N.indexedDB, N = N.IDBKeyRange, Nr(R) || T === jt || Dr(R, N).put({ name: T }).catch(Q)), S();
            }, p);
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
          function p() {
            return indexedDB.databases().finally(S);
          }
          h = setInterval(p, 100), p();
        }).finally(function() {
          return clearInterval(h);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), t.onReadyBeingFired = [], j.resolve(Rr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function S() {
            if (0 < t.onReadyBeingFired.length) {
              var p = t.onReadyBeingFired.reduce(or, Q);
              return t.onReadyBeingFired = [], j.resolve(Rr(function() {
                return p(e.vip);
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
          return f && (S = {}, e.tables.forEach(function(p) {
            p.schema.indexes.forEach(function(b) {
              b.name && (S["idb://".concat(e.name, "/").concat(p.name, "/").concat(b.name)] = new ae(-1 / 0, [[[]]]));
            }), S["idb://".concat(e.name, "/").concat(p.name, "/")] = S["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new ae(-1 / 0, [[[]]]);
          }), Ie(yt).fire(S), Cr(S, !0)), e;
        });
      }
      function $r(e) {
        function t(i) {
          return e.next(i);
        }
        var n = s(t), a = s(function(i) {
          return e.throw(i);
        });
        function s(i) {
          return function(h) {
            var d = i(h), h = d.value;
            return d.done ? h : h && typeof h.then == "function" ? h.then(n, a) : B(h) ? Promise.all(h).then(n, a) : n(h);
          };
        }
        return s(t)();
      }
      function Xt(e, t, n) {
        for (var a = B(e) ? e.slice() : [e], s = 0; s < n; ++s) a.push(t);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var n = e.table(t), a = n.schema, s = {}, i = [];
          function u(f, S, p) {
            var b = vt(f), w = s[b] = s[b] || [], y = f == null ? 0 : typeof f == "string" ? 1 : f.length, A = 0 < S, A = l(l({}, p), { name: A ? "".concat(b, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: A, keyTail: S, keyLength: y, extractKey: Or(f), unique: !A && p.unique });
            return w.push(A), A.isPrimaryKey || i.push(A), 1 < y && u(y === 2 ? f[0] : f.slice(0, y - 1), S + 1, p), w.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), A;
          }
          t = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [t];
          for (var d = 0, h = a.indexes; d < h.length; d++) {
            var m = h[d];
            u(m.keyPath, 0, m);
          }
          function v(f) {
            var S, p = f.query.index;
            return p.isVirtual ? l(l({}, f), { query: { index: p.lowLevelIndex, range: (S = f.query.range, p = p.keyTail, { type: S.type === 1 ? 2 : S.type, lower: Xt(S.lower, S.lowerOpen ? e.MAX_KEY : e.MIN_KEY, p), lowerOpen: !0, upper: Xt(S.upper, S.upperOpen ? e.MIN_KEY : e.MAX_KEY, p), upperOpen: !0 }) } }) : f;
          }
          return l(l({}, n), { schema: l(l({}, a), { primaryKey: t, indexes: i, getIndexByKeyPath: function(f) {
            return (f = s[vt(f)]) && f[0];
          } }), count: function(f) {
            return n.count(v(f));
          }, query: function(f) {
            return n.query(v(f));
          }, openCursor: function(f) {
            var S = f.query.index, p = S.keyTail, b = S.isVirtual, w = S.keyLength;
            return b ? n.openCursor(v(f)).then(function(A) {
              return A && y(A);
            }) : n.openCursor(f);
            function y(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Xt(P, f.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : f.unique ? A.continue(A.key.slice(0, w).concat(f.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                A.continuePrimaryKey(Xt(P, e.MAX_KEY, p), D);
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
      function jr(e, t, n, a) {
        return n = n || {}, a = a || "", C(e).forEach(function(s) {
          var i, u, d;
          ie(t, s) ? (i = e[s], u = t[s], typeof i == "object" && typeof u == "object" && i && u ? (d = rr(i)) !== rr(u) ? n[a + s] = t[s] : d === "Object" ? jr(i, u, n, a + s + ".") : i !== u && (n[a + s] = t[s]) : i !== u && (n[a + s] = t[s])) : n[a + s] = void 0;
        }), C(t).forEach(function(s) {
          ie(e, s) || (n[a + s] = t[s]);
        }), n;
      }
      function Mr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var n = e.table(t), a = n.schema.primaryKey;
          return l(l({}, n), { mutate: function(s) {
            var i = G.trans, u = i.table(t).hook, d = u.deleting, h = u.creating, m = u.updating;
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
                  return function f(S, p, b) {
                    return n.query({ trans: S, values: !1, query: { index: a, range: p }, limit: b }).then(function(w) {
                      var y = w.result;
                      return v({ type: "delete", keys: y, trans: S }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : y.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : f(S, l(l({}, p), { lower: y[y.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return n.mutate(s);
            function v(f) {
              var S, p, b, w = G.trans, y = f.keys || Mr(a, f);
              if (!y) throw new Error("Keys missing");
              return (f = f.type === "add" || f.type === "put" ? l(l({}, f), { keys: y }) : l({}, f)).type !== "delete" && (f.values = E([], f.values)), f.keys && (f.keys = E([], f.keys)), S = n, b = y, ((p = f).type === "add" ? Promise.resolve([]) : S.getMany({ trans: p.trans, keys: b, cache: "immutable" })).then(function(A) {
                var P = y.map(function(D, N) {
                  var R, k, T, I = A[N], $ = { onerror: null, onsuccess: null };
                  return f.type === "delete" ? d.fire.call($, D, I, w) : f.type === "add" || I === void 0 ? (R = h.fire.call($, D, f.values[N], w), D == null && R != null && (f.keys[N] = D = R, a.outbound || ue(f.values[N], a.keyPath, D))) : (R = jr(I, f.values[N]), (k = m.fire.call($, R, D, I, w)) && (T = f.values[N], Object.keys(k).forEach(function(x) {
                    ie(T, x) ? T[x] = k[x] : ue(T, x, k[x]);
                  }))), $;
                });
                return n.mutate(f).then(function(D) {
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
      function An(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var a = [], s = 0, i = 0; s < t.keys.length && i < e.length; ++s) H(t.keys[s], e[i]) === 0 && (a.push(n ? $e(t.values[s]) : t.values[s]), ++i);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Ea = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return l(l({}, n), { getMany: function(a) {
            if (!a.cache) return n.getMany(a);
            var s = An(a.keys, a.trans._cache, a.cache === "clone");
            return s ? j.resolve(s) : n.getMany(a).then(function(i) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? $e(i) : i }, i;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), n.mutate(a);
          } });
        } };
      } };
      function Pn(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Dn(e, t) {
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
        var t = e.schema.name, n = new ae(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, i) {
          if (G.subscr && s !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));
          return e.transaction(a, s, i);
        }, table: function(a) {
          var s = e.table(a), i = s.schema, u = i.primaryKey, f = i.indexes, d = u.extractKey, h = u.outbound, m = u.autoIncrement && f.filter(function(p) {
            return p.compound && p.keyPath.includes(u.keyPath);
          }), v = l(l({}, s), { mutate: function(p) {
            function b(x) {
              return x = "idb://".concat(t, "/").concat(a, "/").concat(x), D[x] || (D[x] = new ae());
            }
            var w, y, A, P = p.trans, D = p.mutatedParts || (p.mutatedParts = {}), N = b(""), R = b(":dels"), k = p.type, $ = p.type === "deleteRange" ? [p.range] : p.type === "delete" ? [p.keys] : p.values.length < 50 ? [Mr(u, p).filter(function(x) {
              return x;
            }), p.values] : [], T = $[0], I = $[1], $ = p.trans._cache;
            return B(T) ? (N.addKeys(T), ($ = k === "delete" || T.length === I.length ? An(T, $) : null) || R.addKeys(T), ($ || I) && (w = b, y = $, A = I, i.indexes.forEach(function(x) {
              var M = w(x.name || "");
              function F(z) {
                return z != null ? x.extractKey(z) : null;
              }
              function U(z) {
                return x.multiEntry && B(z) ? z.forEach(function(de) {
                  return M.addKey(de);
                }) : M.addKey(z);
              }
              (y || A).forEach(function(z, se) {
                var W = y && F(y[se]), se = A && F(A[se]);
                H(W, se) !== 0 && (W != null && U(W), se != null && U(se));
              });
            }))) : T ? (I = { from: (I = T.lower) !== null && I !== void 0 ? I : e.MIN_KEY, to: (I = T.upper) !== null && I !== void 0 ? I : e.MAX_KEY }, R.add(I), N.add(I)) : (N.add(n), R.add(n), i.indexes.forEach(function(x) {
              return b(x.name).add(n);
            })), s.mutate(p).then(function(x) {
              return !T || p.type !== "add" && p.type !== "put" || (N.addKeys(x.results), m && m.forEach(function(M) {
                for (var F = p.values.map(function(W) {
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
          }, S = { get: function(p) {
            return [u, new ae(p.key)];
          }, getMany: function(p) {
            return [u, new ae().addKeys(p.keys)];
          }, count: f, query: f, openCursor: f };
          return C(S).forEach(function(p) {
            v[p] = function(b) {
              var w = G.subscr, y = !!w, A = Pn(G, s) && Dn(p, b) ? b.obsSet = {} : w;
              if (y) {
                var P = function(I) {
                  return I = "idb://".concat(t, "/").concat(a, "/").concat(I), A[I] || (A[I] = new ae());
                }, D = P(""), N = P(":dels"), w = S[p](b), y = w[0], w = w[1];
                if ((p === "query" && y.isPrimaryKey && !b.values ? N : P(y.name || "")).add(w), !y.isPrimaryKey) {
                  if (p !== "count") {
                    var R = p === "query" && h && b.values && s.query(l(l({}, b), { values: !1 }));
                    return s[p].apply(this, arguments).then(function(I) {
                      if (p === "query") {
                        if (h && b.values) return R.then(function(F) {
                          return F = F.result, D.addKeys(F), I;
                        });
                        var $ = b.values ? I.result.map(d) : I.result;
                        (b.values ? D : N).addKeys($);
                      } else if (p === "openCursor") {
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
                  N.add(n);
                }
              }
              return s[p].apply(this, arguments);
            };
          }), v;
        } });
      } };
      function Nn(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var a = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === a ? null : (t = l({}, t), B(t.keys) && (t.keys = t.keys.filter(function(s, i) {
          return !(i in n.failures);
        })), "values" in t && B(t.values) && (t.values = t.values.filter(function(s, i) {
          return !(i in n.failures);
        })), t);
      }
      function Kr(e, t) {
        return n = e, ((a = t).lower === void 0 || (a.lowerOpen ? 0 < H(n, a.lower) : 0 <= H(n, a.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? H(e, t.upper) < 0 : H(e, t.upper) <= 0));
        var n, a;
      }
      function Rn(e, t, S, a, s, i) {
        if (!S || S.length === 0) return e;
        var u = t.query.index, d = u.multiEntry, h = t.query.range, m = a.schema.primaryKey.extractKey, v = u.extractKey, f = (u.lowLevelIndex || u).extractKey, S = S.reduce(function(p, b) {
          var w = p, y = [];
          if (b.type === "add" || b.type === "put") for (var A = new ae(), P = b.values.length - 1; 0 <= P; --P) {
            var D, N = b.values[P], R = m(N);
            A.hasKey(R) || (D = v(N), (d && B(D) ? D.some(function(x) {
              return Kr(x, h);
            }) : Kr(D, h)) && (A.addKey(R), y.push(N)));
          }
          switch (b.type) {
            case "add":
              var k = new ae().addKeys(t.values ? p.map(function(M) {
                return m(M);
              }) : p), w = p.concat(t.values ? y.filter(function(M) {
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
              w = p.filter(function(M) {
                return !T.hasKey(t.values ? m(M) : M);
              }).concat(t.values ? y : y.map(function(M) {
                return m(M);
              }));
              break;
            case "delete":
              var I = new ae().addKeys(b.keys);
              w = p.filter(function(M) {
                return !I.hasKey(t.values ? m(M) : M);
              });
              break;
            case "deleteRange":
              var $ = b.range;
              w = p.filter(function(M) {
                return !Kr(m(M), $);
              });
          }
          return w;
        }, e);
        return S === e ? e : (S.sort(function(p, b) {
          return H(f(p), f(b)) || H(m(p), m(b));
        }), t.limit && t.limit < 1 / 0 && (S.length > t.limit ? S.length = t.limit : e.length === t.limit && S.length < t.limit && (s.dirty = !0)), i ? Object.freeze(S) : S);
      }
      function Tn(e, t) {
        return H(e.lower, t.lower) === 0 && H(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Sa(e, t) {
        return function(n, a, s, i) {
          if (n === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = H(n, a)) === 0) {
            if (s && i) return 0;
            if (s) return 1;
            if (i) return -1;
          }
          return a;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(n, a, s, i) {
          if (n === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = H(n, a)) === 0) {
            if (s && i) return 0;
            if (s) return -1;
            if (i) return 1;
          }
          return a;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Oa(e, t, n, a) {
        e.subscribers.add(n), a.addEventListener("abort", function() {
          var s, i;
          e.subscribers.delete(n), e.subscribers.size === 0 && (s = e, i = t, setTimeout(function() {
            s.subscribers.size === 0 && je(i, s);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return l(l({}, e), { transaction: function(n, a, s) {
          var i, u, d = e.transaction(n, a, s);
          return a === "readwrite" && (u = (i = new AbortController()).signal, s = function(h) {
            return function() {
              if (i.abort(), a === "readwrite") {
                for (var m = /* @__PURE__ */ new Set(), v = 0, f = n; v < f.length; v++) {
                  var S = f[v], p = ze["idb://".concat(t, "/").concat(S)];
                  if (p) {
                    var b = e.table(S), w = p.optimisticOps.filter(function(M) {
                      return M.trans === d;
                    });
                    if (d._explicit && h && d.mutatedParts) for (var y = 0, A = Object.values(p.queries.query); y < A.length; y++) for (var P = 0, D = (k = A[y]).slice(); P < D.length; P++) Ir((T = D[P]).obsSet, d.mutatedParts) && (je(k, T), T.subscribers.forEach(function(M) {
                      return m.add(M);
                    }));
                    else if (0 < w.length) {
                      p.optimisticOps = p.optimisticOps.filter(function(M) {
                        return M.trans !== d;
                      });
                      for (var N = 0, R = Object.values(p.queries.query); N < R.length; N++) for (var k, T, I, $ = 0, x = (k = R[N]).slice(); $ < x.length; $++) (T = x[$]).res != null && d.mutatedParts && (h && !T.dirty ? (I = Object.isFrozen(T.res), I = Rn(T.res, T.req, w, b, T, I), T.dirty ? (je(k, T), T.subscribers.forEach(function(M) {
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
        }, table: function(n) {
          var a = e.table(n), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(i) {
            var u = G.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(i);
            var d = ze["idb://".concat(t, "/").concat(n)];
            return d ? (u = a.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || Mr(s, i).some(function(h) {
              return h == null;
            })) ? (d.optimisticOps.push(i), i.mutatedParts && Qt(i.mutatedParts), u.then(function(h) {
              0 < h.numFailures && (je(d.optimisticOps, i), (h = Nn(0, i, h)) && d.optimisticOps.push(h), i.mutatedParts && Qt(i.mutatedParts));
            }), u.catch(function() {
              je(d.optimisticOps, i), i.mutatedParts && Qt(i.mutatedParts);
            })) : u.then(function(h) {
              var m = Nn(0, l(l({}, i), { values: i.values.map(function(v, f) {
                var S;
                return h.failures[f] ? v : (v = (S = s.keyPath) !== null && S !== void 0 && S.includes(".") ? $e(v) : l({}, v), ue(v, s.keyPath, h.results[f]), v);
              }) }), h);
              d.optimisticOps.push(m), queueMicrotask(function() {
                return i.mutatedParts && Qt(i.mutatedParts);
              });
            }), u) : a.mutate(i);
          }, query: function(i) {
            if (!Pn(G, a) || !Dn("query", i)) return a.query(i);
            var u = ((m = G.trans) === null || m === void 0 ? void 0 : m.db._options.cache) === "immutable", f = G, d = f.requery, h = f.signal, m = function(b, w, y, A) {
              var P = ze["idb://".concat(b, "/").concat(w)];
              if (!P) return [];
              if (!(w = P.queries[y])) return [null, !1, P, null];
              var D = w[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (y) {
                case "query":
                  var N = D.find(function(R) {
                    return R.req.limit === A.limit && R.req.values === A.values && Tn(R.req.query.range, A.query.range);
                  });
                  return N ? [N, !0, P, D] : [D.find(function(R) {
                    return ("limit" in R.req ? R.req.limit : 1 / 0) >= A.limit && (!A.values || R.req.values) && Sa(R.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return N = D.find(function(R) {
                    return Tn(R.req.query.range, A.query.range);
                  }), [N, !!N, P, D];
              }
            }(t, n, "query", i), v = m[0], f = m[1], S = m[2], p = m[3];
            return v && f ? v.obsSet = i.obsSet : (f = a.query(i).then(function(b) {
              var w = b.result;
              if (v && (v.res = w), u) {
                for (var y = 0, A = w.length; y < A; ++y) Object.freeze(w[y]);
                Object.freeze(w);
              } else b.result = $e(w);
              return b;
            }).catch(function(b) {
              return p && v && je(p, v), Promise.reject(b);
            }), v = { obsSet: i.obsSet, promise: f, subscribers: /* @__PURE__ */ new Set(), type: "query", req: i, dirty: !1 }, p ? p.push(v) : (p = [v], (S = S || (ze["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[i.query.index.name || ""] = p)), Oa(v, p, d, h), v.promise.then(function(b) {
              return { result: Rn(b.result, i, S?.optimisticOps, a, v, u) };
            });
          } });
        } });
      } };
      function Jt(e, t) {
        return new Proxy(e, { get: function(n, a, s) {
          return a === "db" ? t : Reflect.get(n, a, s);
        } });
      }
      var Se = (ee.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new L.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(ha), n.stores({}), this._state.autoSchema = !1, n);
      }, ee.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || G.letThrough || this._vip) ? e() : new j(function(n, a) {
          if (t._state.openComplete) return a(new L.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void a(new L.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(n, a);
        }).then(e);
      }, ee.prototype.use = function(e) {
        var t = e.stack, n = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: a ?? 10, name: s }), e.sort(function(i, u) {
          return i.level - u.level;
        }), this;
      }, ee.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, a = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return a ? s.create !== a : !!n && s.name !== n;
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
        e.isBeingOpened || (e.dbReadyPromise = new j(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new j(function(n, a) {
          e.cancelOpen = a;
        }));
      }, ee.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new L.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new L.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ee.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new j(function(s, i) {
          function u() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = Z(function() {
              var h, m, v;
              h = t._deps, m = t.name, v = h.indexedDB, h = h.IDBKeyRange, Nr(v) || m === jt || Dr(v, h).delete(m).catch(Q), s();
            }), d.onerror = me(i), d.onblocked = t._fireOnBlocked;
          }
          if (n) throw new L.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
        var e = function(t, n, a) {
          var s = arguments.length;
          if (s < 2) throw new L.InvalidArgument("Too few arguments");
          for (var i = new Array(s - 1); --s; ) i[s - 1] = arguments[s];
          return a = i.pop(), [t, Qr(i), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ee.prototype._transaction = function(e, t, n) {
        var a = this, s = G.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var i, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = t.map(function(m) {
            if (m = m instanceof a.Table ? m.name : m, typeof m != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return m;
          }), e == "r" || e === pr) i = pr;
          else {
            if (e != "rw" && e != mr) throw new L.InvalidArgument("Invalid transaction mode: " + e);
            i = mr;
          }
          if (s) {
            if (s.mode === pr && i === mr) {
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
        var h = function m(v, f, S, p, b) {
          return j.resolve().then(function() {
            var w = G.transless || G, y = v._createTransaction(f, S, v._dbSchema, p);
            if (y.explicit = !0, w = { trans: y, transless: w }, p) y.idbtrans = p.idbtrans;
            else try {
              y.create(), y.idbtrans._explicit = !0, v._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === sr.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({ disableAutoOpen: !1 }), v.open().then(function() {
                return m(v, f, S, null, b);
              })) : q(D);
            }
            var A, P = ar(b);
            return P && et(), w = j.follow(function() {
              var D;
              (A = b.call(y, y)) && (P ? (D = Ne.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = $r(A)));
            }, w), (A && typeof A.then == "function" ? j.resolve(A).then(function(D) {
              return y.active ? D : q(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : w.then(function() {
              return A;
            })).then(function(D) {
              return p && y._resolve(), y._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return y._reject(D), q(D);
            });
          });
        }.bind(null, this, i, u, s, n);
        return s ? s._promise(i, h, "lock") : G.trans ? We(G.transless, function() {
          return a._whenReady(h);
        }) : this._whenReady(h);
      }, ee.prototype.table = function(e) {
        if (!ie(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = t = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, a = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, i, u, d, h, m = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        m.dbReadyPromise = new j(function(f) {
          m.dbReadyResolve = f;
        }), m.openCanceller = new j(function(f, S) {
          m.cancelOpen = S;
        }), this._state = m, this.name = e, this.on = ht(this, "populate", "blocked", "versionchange", "close", { ready: [or, Q] }), this.on.ready.subscribe = Hr(this.on.ready.subscribe, function(f) {
          return function(S, p) {
            ee.vip(function() {
              var b, w = n._state;
              w.openComplete ? (w.dbOpenError || j.resolve().then(S), p && f(S)) : w.onReadyBeingFired ? (w.onReadyBeingFired.push(S), p && f(S)) : (f(S), b = n, p || f(function y() {
                b.on.ready.unsubscribe(S), b.on.ready.unsubscribe(y);
              }));
            });
          };
        }), this.Collection = (s = this, gt(oa.prototype, function(A, y) {
          this.db = s;
          var p = on, b = null;
          if (y) try {
            p = y();
          } catch (P) {
            b = P;
          }
          var w = A._ctx, y = w.table, A = y.hook.reading.fire;
          this._ctx = { table: y, index: w.index, isPrimKey: !w.index || y.schema.primKey.keyPath && w.index === y.schema.primKey.name, range: p, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: w.or, valueMapper: A !== ct ? A : null };
        })), this.Table = (i = this, gt(dn.prototype, function(f, S, p) {
          this.db = i, this._tx = p, this.name = f, this.schema = S, this.hook = i._allTables[f] ? i._allTables[f].hook : ht(null, { creating: [Jn, Q], reading: [Xn, ct], updating: [qn, Q], deleting: [Zn, Q] });
        })), this.Transaction = (u = this, gt(ua.prototype, function(f, S, p, b, w) {
          var y = this;
          this.db = u, this.mode = f, this.storeNames = S, this.schema = p, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = ht(this, "complete", "error", "abort"), this.parent = w || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(A, P) {
            y._resolve = A, y._reject = P;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(A) {
            var P = y.active;
            return y.active = !1, y.on.error.fire(A), y.parent ? y.parent._reject(A) : P && y.idbtrans && y.idbtrans.abort(), q(A);
          });
        })), this.Version = (d = this, gt(ma.prototype, function(f) {
          this.db = d, this._cfg = { version: f, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (h = this, gt(mn.prototype, function(f, S, p) {
          if (this.db = h, this._ctx = { table: f, index: S === ":id" ? null : S, or: p }, this._cmp = this._ascending = H, this._descending = function(b, w) {
            return H(w, b);
          }, this._max = function(b, w) {
            return 0 < H(b, w) ? b : w;
          }, this._min = function(b, w) {
            return H(b, w) < 0 ? b : w;
          }, this._IDBKeyRange = h._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(f) {
          0 < f.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(f) {
          !f.newVersion || f.newVersion < f.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(f.oldVersion / 10));
        }), this._maxKey = bt(t.IDBKeyRange), this._createTransaction = function(f, S, p, b) {
          return new n.Transaction(f, S, p, n._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(f) {
          n.on("blocked").fire(f), tt.filter(function(S) {
            return S.name === n.name && S !== n && !S._state.vcFired;
          }).map(function(S) {
            return S.on("versionchange").fire(f);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var v = new Proxy(this, { get: function(f, S, p) {
          if (S === "_vip") return !0;
          if (S === "table") return function(w) {
            return Jt(n.table(w), v);
          };
          var b = Reflect.get(f, S, p);
          return b instanceof dn ? Jt(b, v) : S === "tables" ? b.map(function(w) {
            return Jt(w, v);
          }) : S === "_createTransaction" ? function() {
            return Jt(b.apply(this, arguments), v);
          } : b;
        } });
        this.vip = v, a.forEach(function(f) {
          return f(n);
        });
      }
      var Zt, fe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Br.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Br.prototype[fe] = function() {
        return this;
      }, Br);
      function Br(e) {
        this._subscribe = e;
      }
      try {
        Zt = { indexedDB: O.indexedDB || O.mozIndexedDB || O.webkitIndexedDB || O.msIndexedDB, IDBKeyRange: O.IDBKeyRange || O.webkitIDBKeyRange };
      } catch {
        Zt = { indexedDB: null, IDBKeyRange: null };
      }
      function In(e) {
        var t, n = !1, a = new Aa(function(s) {
          var i = ar(e), u, d = !1, h = {}, m = {}, v = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), f && Ie.storagemutated.unsubscribe(p));
          } };
          s.start && s.start(v);
          var f = !1, S = function() {
            return gr(b);
          }, p = function(w) {
            Yt(h, w), Ir(m, h) && S();
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
              n = !0, t = P, d || y.signal.aborted || (h = {}, function(D) {
                for (var N in D) if (ie(D, N)) return;
                return 1;
              }(m = w) || f || (Ie(yt, p), f = !0), gr(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || gr(function() {
                d || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(S, 0), v;
        });
        return a.hasValue = function() {
          return n;
        }, a.getValue = function() {
          return t;
        }, a;
      }
      var He = Se;
      function Gr(e) {
        var t = xe;
        try {
          xe = !0, Ie.storagemutated.fire(e), Cr(e, !0);
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
          return t = He.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (Nr(n) ? Promise.resolve(n.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== jt;
            });
          }) : Dr(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return q(new L.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          te(this, e);
        };
      }, ignoreTransaction: function(e) {
        return G.trans ? We(G.transless, e) : e();
      }, vip: Rr, async: function(e) {
        return function() {
          try {
            var t = $r(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (n) {
            return q(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var a = $r(e.apply(n, t || []));
          return a && typeof a.then == "function" ? a : j.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return G.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? He.ignoreTransaction(e) : e).timeout(t || 6e4), G.trans ? G.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return pe;
      }, set: function(e) {
        qr(e);
      } }, derive: Ye, extend: te, props: be, override: Hr, Events: ht, on: Ie, liveQuery: In, extendObservabilitySet: Yt, getByKeyPath: ve, setByKeyPath: ue, delByKeyPath: function(e, t) {
        typeof t == "string" ? ue(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          ue(e, n, void 0);
        });
      }, shallowClone: Yr, deepClone: $e, getObjectDiff: jr, cmp: H, asap: Vr, minKey: -1 / 0, addons: [], connections: tt, errnames: sr, dependencies: Zt, cache: ze, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), He.maxKey = bt(He.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ie(yt, function(e) {
        xe || (e = new CustomEvent(Er, { detail: e }), xe = !0, dispatchEvent(e), xe = !1);
      }), addEventListener(Er, function(e) {
        e = e.detail, xe || Gr(e);
      }));
      var at, xe = !1, xn = function() {
      };
      return typeof BroadcastChannel < "u" && ((xn = function() {
        (at = new BroadcastChannel(Er)).onmessage = function(e) {
          return e.data && Gr(e.data);
        };
      })(), typeof at.unref == "function" && at.unref(), Ie(yt, function(e) {
        xe || at.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Se.disableBfCache && e.persisted) {
          pe && console.debug("Dexie: handling persisted pagehide"), at?.close();
          for (var t = 0, n = tt; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Se.disableBfCache && e.persisted && (pe && console.debug("Dexie: handling persisted pageshow"), xn(), Gr({ all: new ae(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof Xe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Zr[e.name] ? e : (t = new Zr[e.name](t || e.message, e), "stack" in e && Ae(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, qr(pe), l(Se, Object.freeze({ __proto__: null, Dexie: Se, liveQuery: In, Entity: cn, cmp: H, PropModification: pt, replacePrefix: function(e, t) {
        return new pt({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new pt({ add: e });
      }, remove: function(e) {
        return new pt({ remove: e });
      }, default: Se, RangeSet: ae, mergeRanges: wt, rangesOverlap: wn }), { default: Se }), Se;
    });
  }(tr)), tr.exports;
}
var Ka = Ma();
const Ur = /* @__PURE__ */ $a(Ka), $n = Symbol.for("Dexie"), St = globalThis[$n] || (globalThis[$n] = Ur);
if (Ur.semVer !== St.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ur.semVer} and ${St.semVer}`);
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
class Mn {
  db;
  subscribers = [];
  options;
  constructor(r) {
    this.options = r, this.db = new St(r.app), this.db.version(11).stores({
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
  getCloud = async (r) => {
    if (r.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %ccloud",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.CLOUD,
        r
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: r
      };
    const o = await this.db.table(_.CLOUD).where({ id: r.widget }).last().catch(() => {
      K(2, ["%capi%C %ccloud", c.API, c.NONE, c.CLOUD, r.widget]);
    });
    if (typeof o > "u")
      return { data: null, message: "Cloud Data error", success: !1, query: r };
    const l = {
      data: o.data,
      message: o !== void 0 ? "Cloud retrieved successfully" : "Cloud Data error",
      success: o !== void 0,
      query: r
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
  setCloud = async (r, o) => r.type === _.CLOUD && o !== "" ? await this.db.table(_.CLOUD).put({
    id: r.widget,
    dashboard_id: r.dashboard,
    //data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %ccloud",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.CLOUD,
    r,
    l.message
  ]), 400)) : 400;
  getDashboard = async (r) => {
    const o = await this.db.table(_.DASHBOARD).where({ id: r.id }).last().catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, r.id]);
    });
    return o === void 0 ? {
      data: null,
      message: `Dashboard ${r.id} Load error`,
      success: !1
    } : (o.message = `Dashboard ${r.id} retrieved from storage`, o.success = !0, o);
  };
  getDashboards = async (r) => {
    const o = (O) => r?.id === O.id, l = (O) => r?.name ? O.name.includes(r?.name) : !1;
    let E = await this.db.table(_.DASHBOARD).toArray().then((O) => r?.id ? O.filter(o) : O).then((O) => r?.name ? O.filter(l) : O).catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, r]);
    });
    return E !== void 0 && K(3, [
      "%cstorage%c %cdashboards",
      c.STORAGE,
      c.NONE,
      c.WIDGET,
      r
    ]), {
      // @ts-ignore
      data: E !== void 0 ? { dashboards: E, query: r } : null,
      message: E !== void 0 ? "Dashboards loaded from storage" : "Dashboards load error",
      success: E !== void 0
    };
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setDashboard = async (r) => {
    const o = structuredClone(r);
    return delete o.data.widgets, await this.db.table(_.DASHBOARD).put({
      id: o.id,
      name: o.name,
      data: o.data,
      update: o.update
    }).then(() => ({
      data: null,
      message: `Dashboard ${o.data.id} saved to storage`,
      success: !0
    })).catch((l) => (K(4, ["%cstorage", c.STORAGE, _.WIDGET, r, l.message]), {
      data: null,
      message: `Dashboard ${o.data.id} save error: ${l.message}`,
      success: !1
    }));
  };
  /**
   * Wipe Message data after expires timestamp
   */
  cleanMessages = async () => {
    const r = Date.now() / 1e3, o = (O) => O.expires < r, l = (O) => O.expires < r;
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
  getMessages = async (r) => {
    if (r.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %cmessages",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        r
      ]), {
        data: null,
        message: "Messages Data error",
        success: !1,
        query: r
      };
    const o = r?.order ?? "utc", l = Math.floor(Date.now() / 1e3);
    o !== "utc" && (r.since = l - 60 * 60 * 24 * 30), this.options.delay != 0 ? r.before = l - (this.options.delay || 0) : r.before = l;
    const E = (B) => B.utc > (r?.since || 0), O = (B) => B.utc < (r?.before || l), C = (B) => B?.visible !== 0;
    try {
      const te = await this.db.table(_.TOPICS).where("widget_id").equals(r.widget).filter(C).filter(E).filter(O).reverse().limit(r?.limit ?? 25).sortBy(o);
      if (te.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: r
        };
      let ge = te.map((Ce) => this.db.table(_.MESSAGES).get({ id: Ce.message_id }));
      return St.Promise.all(ge).then(async (Ce) => {
        const be = {
          data: {
            messages: Ce.map((_t) => _t.data)
          },
          query: r,
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
    } catch (B) {
      return K(2, [
        "%cget%c %cstorage%c %cmessages",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        r,
        B.message
      ]), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  hideMessage = async (r, o) => {
    await this.db.table(_.TOPICS).where("message_id").equals(r).modify({ visible: o ? 1 : 0 }).catch((l) => (console.error(
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
  setMessages = async (r, o) => {
    if (r.type !== _.MESSAGES)
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
        widget_id: r.widget,
        message_id: O.id,
        dashboard_id: r.dashboard,
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
        const B = C.message_id, te = C.visible ? 1 : 0, ge = C.title;
        await this.db.table(_.TOPICS).where("message_id").equals(B).modify({ visible: te }).catch((Ce) => {
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
  getSeries = async (r) => {
    if (r.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %cseries",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.CLOUD,
        r
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: r
      };
    const o = await this.db.table(_.SERIES).where({ id: r.widget }).last().catch(() => {
      K(2, [
        "%cget%c %cstorage%c %cseries",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.SERIES,
        r.widget
      ]);
    }), l = {
      data: o.data,
      message: o !== void 0 ? "Get Series success" : "Get Series error",
      success: o !== void 0,
      query: r
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
  setSeries = async (r, o) => (delete o?.query, r.type === _.SERIES && o !== "" ? await this.db.table(_.SERIES).put({
    id: r.widget,
    dashboard_id: r.dashboard,
    //data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %cseries",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.SERIES,
    r,
    l.message
  ]), 400)) : 400);
  /**
   * Retrieve Widget from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidget = async (r) => {
    if (r.id === "")
      return K(3, [
        "%cget%c %cstorage%c %cwidget",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.WIDGET,
        r
      ]), {
        data: null,
        message: "Widget Data error",
        success: !1,
        query: r
      };
    const o = await this.db.table(_.WIDGET).where({ id: r.id }).last().catch(() => {
      console.warn("%cstorage", c.STORAGE, J.WIDGET_LOAD, r.id);
    });
    return o === void 0 ? {
      data: null,
      message: `Widget ${r.id} Load error`,
      success: !1
    } : (o.message = `Widget ${r.id} retrieved from storage`, o.success = !0, o);
  };
  /**
   * Retrieve Widgets from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidgets = async (r) => {
    const o = (C) => r?.dashboard === C.dashboard_id, l = (C) => r?.type === C.type, E = (C) => r?.name ? C.name.includes(r?.name) : !1;
    let O = await this.db.table(_.WIDGET).toArray().then((C) => r?.dashboard ? C.filter(o) : C).then((C) => r?.type ? C.filter(l) : C).then((C) => r?.name ? C.filter(E) : C).catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.WIDGET_LOAD, r]);
    });
    return O !== void 0 && K(3, [
      "%cstorage%c %cwidgets",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      r
    ]), {
      // @ts-ignore
      data: O !== void 0 ? { data: O, query: r } : null,
      message: O !== void 0 ? "Widgets loaded from storage" : "Widgets load error",
      success: O !== void 0
    };
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (r) => await this.db.table(_.WIDGET).put({
    id: r.id,
    name: r.title,
    dashboard_id: r.dashboard_id,
    type: r.type,
    update: r.update
  }).then(() => ({
    data: null,
    message: `Widget ${r.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    _.WIDGET,
    r,
    o.message
  ), {
    data: null,
    message: `Widget ${r.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (r) => (r = Ia(r), this.subscribers.filter(
    (l) => l.widget === r.widget
  ).length > 0 || (r.type === _.MESSAGES && (r = Ot(this.options, r)), console.info(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    r.slide,
    r.widget
  ), console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    r
  ), this.subscribers.push(r)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((r) => r(this.subscribers));
  /**
   * Retrieve Slide from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlide = async (r) => {
    const o = await this.db.table(_.SLIDE).where({ id: r.id }).last().catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.SLIDE_LOAD, r.id]);
    });
    return {
      // @ts-ignore
      data: o !== void 0 ? { slides: o, query: r } : null,
      message: o !== void 0 ? "Slide loaded from storage" : "Slide load error",
      success: o !== void 0
    };
  };
  /**
   * Retrieve Slides from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlides = async (r) => {
    const o = (C) => r?.id ? r.id = C.id : !1, l = (C) => r?.name ? C.name.includes(r?.name) : !1, O = await this.db.table(_.SLIDE).toArray().then((C) => r?.id ? C.filter(o) : C).then((C) => r?.name ? C.filter(l) : C);
    return O !== void 0 && K(3, ["%cstorage%c %cslides", c.STORAGE, c.NONE, c.SLIDE, r]), {
      // @ts-ignore
      data: O !== void 0 ? { slides: O, query: r } : null,
      message: O !== void 0 ? "Slides loaded from storage" : "Slides load error",
      success: O !== void 0
    };
  };
  /**
   * Update Slide in Storage
   * @param query IQuery
   * @returns number
   */
  setSlide = async (r) => await this.db.table(_.SLIDE).put({
    id: r.data.id,
    presentation_id: r.data.presentation_id,
    order_index: r.data.order_index,
    name: r.data.name || "Not set",
    json: r.data.json || {},
    html: r.data.html || "",
    update: r.data.update
  }).then(() => ({
    data: null,
    message: `Slide ${r.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.SLIDE_STORE,
    r,
    o.message
  ), {
    data: null,
    message: `Slide ${r.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Retrieve Presentation from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentation = async (r) => {
    const o = await this.db.table(_.PRESENTATION).where({ id: r.id }).last().catch(() => {
      console.warn(
        "%cstorage ",
        c.STORAGE,
        J.PRESENTATION_LOAD,
        r.id
      );
    });
    return o === void 0 ? {
      data: null,
      message: `Presentation ${r.id} Load error`,
      success: !1
    } : (o.message = `Presentation ${r.id} retrieved from storage`, o.success = !0, o);
  };
  /**
   * Retrieve Presentations from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentations = async (r) => {
    const o = (O) => r?.name ? O.name.includes(r?.name) : !1, E = await this.db.table(_.PRESENTATION).toArray().then((O) => r?.name ? O.filter(o) : O);
    return E !== void 0 && K(3, [
      "%cstorage%c %cpresentations",
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      r
    ]), {
      // @ts-ignore
      data: E !== void 0 ? { presentations: E, query: r } : null,
      message: E !== void 0 ? "Presentations loaded from storage" : "Presentations load error",
      success: E !== void 0
    };
  };
  /**
   * Update Presentation in Storage
   * @param query IQuery
   * @returns number
   */
  setPresentation = async (r) => await this.db.table(_.PRESENTATION).put({
    id: r.data.id,
    name: r.data.name || "Not set",
    data: r.data,
    update: r.update
  }).then(() => ({
    data: null,
    message: `Presentation ${r.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PRESENTATION_STORE,
    r,
    o.message
  ), {
    data: null,
    message: `Presentation ${r.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Retrieve Preference from Storage
   * @param preference IPreference
   * @returns IResponse
   */
  getPreference = async (r) => {
    const o = await this.db.table(_.PREFERENCE).where({ id: r.id }).last().catch(() => {
      K(2, [
        "%cstorage",
        c.STORAGE,
        J.PREFERENCE_LOAD,
        r.id
      ]);
    });
    return {
      // @ts-ignore
      data: o !== void 0 ? { preferences: o, query: r } : null,
      message: o !== void 0 ? "Preference loaded from storage" : "Preference load error",
      success: o !== void 0
    };
  };
  /**
   * Retrieve Preferences from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPreferences = async (r) => {
    const o = (O) => r?.id ? r.id = O.id : !1, E = await this.db.table(_.SLIDE).toArray().then((O) => r?.id ? O.filter(o) : O);
    return E !== void 0 && K(3, [
      "%cstorage%c %cpreferences",
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      r
    ]), {
      // @ts-ignore
      data: E !== void 0 ? { prefrences: E, query: r } : null,
      message: E !== void 0 ? "Preferences loaded from storage" : "Preferences load error",
      success: E !== void 0
    };
  };
  /**
   * Update Preference in Storage
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (r) => await this.db.table(_.PREFERENCE).put({
    id: r.id,
    value: r.value
  }).then(() => ({
    data: null,
    message: `Preference ${r.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PREFERENCE_STORE,
    r,
    o.message
  ), {
    data: null,
    message: `Preference ${r.id} save error: ${o.message}`,
    success: !1
  }));
}
function zr(g) {
  return new Promise((r, o) => {
    g.oncomplete = g.onsuccess = () => r(g.result), g.onabort = g.onerror = () => o(g.error);
  });
}
function Ba(g, r) {
  const o = indexedDB.open(g);
  o.onupgradeneeded = () => o.result.createObjectStore(r);
  const l = zr(o);
  return (E, O) => l.then((C) => O(C.transaction(r, E).objectStore(r)));
}
let Fr;
function Kn() {
  return Fr || (Fr = Ba("keyval-store", "keyval")), Fr;
}
function _e(g, r = Kn()) {
  return r("readonly", (o) => zr(o.get(g)));
}
function ke(g, r, o = Kn()) {
  return o("readwrite", (l) => (l.put(r, g), zr(l.transaction)));
}
class Bn {
  subscribers = [];
  options;
  constructor(r) {
    this.options = r;
  }
  getCloud = async (r) => {
    const o = Y(r);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.CLOUD, r.slide, r.widget), { data: null, message: "Cloud Data error", success: !1 }));
  };
  getSeries = async (r) => {
    const o = Y(r);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.SERIES, r.slide, r.widget), { data: null, message: "Series Data error", success: !1 }));
  };
  getMessages = async (r) => {
    const o = Y(r);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.MESSAGES, r.slide, r.widget), { data: null, message: "Messages Data error", success: !1 }));
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (r, o) => {
    if (!o.success)
      return 400;
    const l = Y(r);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.CLOUD,
      r,
      E.message
    ), 400));
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns bumber
   */
  setSeries = async (r, o) => {
    if (!o.success)
      return 400;
    const l = Y(r);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.SERIES,
      r,
      E.message
    ), 400));
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (r, o) => {
    if (!o.success)
      return 400;
    const l = Y(r);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.MESSAGES,
      r,
      E.message
    ), 400));
  };
  cleanMessages = async (r) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (r, o) => {
    console.debug(
      `hideMessage ${r} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (r) => {
    const o = Y(r);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, r.id), {
      data: null,
      message: `Widget ${r.data.id} load error: ${l.message}`,
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
  setDashboard = async (r) => {
    const o = Y(r), l = {
      id: r.dashboard,
      name: r.name
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Dashboard ${r.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.WIDGET,
      r,
      E.message
    ), {
      data: null,
      message: `Slide ${r.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getWidget = async (r) => {
    const o = Y(r);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, r.id), {
      data: null,
      message: `Widget ${r.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getWidgets = async (r) => (console.warn("%capi", c.API, _.SLIDE, r?.presentation), {
    data: null,
    message: "Widgets load error: ",
    success: !1
  });
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (r) => {
    const o = Y(r), l = {
      id: r.widget,
      name: r.name,
      dashboard_id: r.dashboard,
      type: r.type
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Widget ${r.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.WIDGET,
      r,
      E.message
    ), {
      data: null,
      message: `Slide ${r.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (r) => (r.type === _.MESSAGES && (r = Ot(this.options, r)), this.subscribers.filter(
    (l) => l.widget === r.widget
  ).length > 0 || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    r.slide,
    r.widget
  ), this.subscribers.push(r)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((r) => r(this.subscribers));
  getSlide = async (r) => {
    const o = Y(r);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, r.id), {
      data: null,
      message: `Slide ${r.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getSlides = async (r) => (console.warn("%capi", c.API, _.SLIDE, r.presentation), {
    data: null,
    message: `Slided ${r.presentation} load error: `,
    success: !1
  });
  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  setSlide = async (r) => {
    const o = Y(r), l = {
      id: r.data.id,
      title: r.data.title || "Not set",
      json: r.data.json || {},
      html: r.data.html || ""
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Slide ${r.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.SLIDE,
      r,
      E.message
    ), {
      data: null,
      message: `Slide ${r.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getPresentation = async (r) => {
    const o = Y(r);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.PRESENTATION, r.id), {
      data: null,
      message: `Slide ${r.data.id} load error: ${l.message}`,
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
  setPresentation = async (r) => {
    const o = Y(r), l = r.data;
    return await ke(o, l).then(() => ({
      data: null,
      message: `Presentation ${r.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.PRESENTATION,
      r,
      E.message
    ), {
      data: null,
      message: `Presentation ${r.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getPreference = async (r) => await _e(`${_.PREFERENCE}.${r.id}`).then((o) => o).catch((o) => (console.warn("%capi", c.API, _.PREFERENCE, r.id), {
    data: null,
    message: `Preference ${r.id} get error: ${o.message}`,
    success: !1
  }));
  getPreferences = async () => await _e(`${_.PREFERENCE}`).then((r) => r).catch((r) => (console.warn("%capi", c.API, _.PREFERENCE), {
    data: null,
    message: `Preferences get error: ${r.message}`,
    success: !1
  }));
  /**
   * Update Preference
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (r) => await ke(`${_.PREFERENCE}.${r.id}`, r.value).then(() => ({
    data: null,
    message: `Preference ${r.id} save error`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    _.PREFERENCE,
    r,
    o.message
  ), {
    data: null,
    message: `Preference ${r.id} save error: ${o.message}`,
    success: !1
  }));
}
class Gn {
  subscribers = [];
  options;
  constructor(r) {
    this.options = r, Storage.prototype.setObject = function(o, l) {
      this.setObject(o, JSON.stringify(l));
    }, Storage.prototype.getObject = function(o) {
      const l = this.getObject(o);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (r) => {
    const o = Y(r);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        r.slide,
        r.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (r) => {
    const o = Y(r);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        r.slide,
        r.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (r) => {
    const o = Y(r);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        r.slide,
        r.widget,
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
  setCloud = async (r, o) => {
    const l = Y(r);
    try {
      return localStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, r, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (r, o) => {
    const l = Y(r);
    try {
      return localStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.SERIES, r, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (r, o) => {
    const l = Y(r);
    try {
      return localStorage.setObject(l, o), 200;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, r, E), 400;
    }
  };
  cleanMessages = async (r) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (r, o) => {
    console.debug(
      `hideMessage ${r} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (r) => {
    try {
      return localStorage.getObject(`${_.DASHBOARD}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Dashboard ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (r) => {
    const o = `${_.DASHBOARD}.${r.dashboard}`;
    try {
      return localStorage.setObject(o, r), {
        data: null,
        message: `Dashboard ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, r, l), {
        data: null,
        message: `Dashboard ${r.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (r) => {
    try {
      return localStorage.getObject(`${_.WIDGET}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Widget ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (r) => {
    const o = `widget.${r.widget}`;
    try {
      return localStorage.setObject(o, r), {
        data: null,
        message: `Widget ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, r, l), {
        data: null,
        message: `Widget ${r.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (r) => (r.type === _.MESSAGES && (r = Ot(this.options, r)), this.subscribers.filter(
    (l) => l.widget === r.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    r.slide,
    r.widget
  ), this.subscribers.push(r)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((r) => r(this.subscribers));
  getSlide = async (r) => {
    try {
      return localStorage.getObject(`${_.SLIDE}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Slide ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (r) => {
    try {
      return localStorage.getObject(`${_.SLIDE}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Slide ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  setSlide = async (r) => {
    try {
      return localStorage.setObject(`${_.SLIDE}.${r.data.id}`, {
        id: r.data.id,
        title: r.data.title || "Not set",
        json: r.data.json || {},
        html: r.data.html || ""
      }), {
        data: null,
        message: `Slide ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, r, o), {
        data: null,
        message: `Slide ${r.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (r) => {
    try {
      return localStorage.getObject(`${_.PRESENTATION}.${r.presentation}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, r.presentation, o), {
        data: null,
        message: `Presentations ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return localStorage.getObject(`${_.PRESENTATION}.`);
    } catch (r) {
      return console.warn("%capi", c.API, _.PRESENTATION, r), {
        data: null,
        message: `Presentations get error: ${r.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (r) => {
    try {
      return localStorage.setObject(`${_.PRESENTATION}.${r.data.id}`, r.data), {
        data: null,
        message: `Presentation ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, r, o), {
        data: null,
        message: `Presentation ${r.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (r) => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, r.id, o), {
        data: null,
        message: `Preference ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.`);
    } catch (r) {
      return console.warn("%capi", c.API, _.PREFERENCE, r), {
        data: null,
        message: `Preference get error: ${r.message}`,
        success: !1
      };
    }
  };
  setPreference = async (r) => {
    try {
      return localStorage.setObject(
        `${_.PREFERENCE}.${r.id}`,
        r.value
      ), {
        data: null,
        message: `Preference ${r.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        r,
        o
      ), {
        data: null,
        message: `Preference ${r.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
}
class Ln {
  subscribers = [];
  options;
  constructor(r) {
    this.options = r, Storage.prototype.setObject = function(o, l) {
      this.setItem(o, JSON.stringify(l));
    }, Storage.prototype.getObject = function(o) {
      const l = this.getItem(o);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (r) => {
    const o = Y(r);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        r.slide,
        r.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (r) => {
    const o = Y(r);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        r.slide,
        r.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (r) => {
    const o = Y(r);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        r.slide,
        r.widget,
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
  setCloud = async (r, o) => {
    const l = Y(r);
    try {
      return sessionStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, r, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (r, o) => {
    const l = Y(r);
    try {
      return sessionStorage.setObject(l, o), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.SERIES, r, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (r, o) => {
    const l = Y(r);
    try {
      return sessionStorage.setObject(l, o), 200;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, r, E), 400;
    }
  };
  cleanMessages = async (r) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (r, o) => {
    console.debug(
      `hideMessage ${r} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (r) => {
    try {
      return sessionStorage.getObject(`${_.DASHBOARD}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Dashboard ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (r) => {
    const o = `${_.DASHBOARD}.${r.dashboard}`;
    try {
      return sessionStorage.setObject(o, r), {
        data: null,
        message: `Dashboard ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, r, l), {
        data: null,
        message: `Dashboard ${r.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (r) => {
    try {
      return sessionStorage.getObject(`${_.WIDGET}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Widget ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (r) => {
    const o = `widget.${r.widget}`;
    try {
      return sessionStorage.setObject(o, r), {
        data: null,
        message: `Widget ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, r, l), {
        data: null,
        message: `Slide ${r.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (r) => (r.type === _.MESSAGES && (r = Ot(this.options, r)), this.subscribers.filter(
    (l) => l.widget === r.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    r.slide,
    r.widget
  ), this.subscribers.push(r)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((r) => r(this.subscribers));
  getSlide = async (r) => {
    try {
      return sessionStorage.getObject(`${_.SLIDE}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Slide ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (r) => {
    try {
      return sessionStorage.getObject(`${_.SLIDE}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Slide ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  setSlide = async (r) => {
    try {
      return sessionStorage.setObject(`${_.SLIDE}.${r.data.id}`, {
        id: r.data.id,
        title: r.data.title || "Not set",
        json: r.data.json || {},
        html: r.data.html || ""
      }), {
        data: null,
        message: `Slide ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, r, o), {
        data: null,
        message: `Slide ${r.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (r) => {
    try {
      return sessionStorage.getObject(`${_.PRESENTATION}.${r.presentation}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, r.presentation, o), {
        data: null,
        message: `Presentation ${r.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return sessionStorage.getObject(`${_.PRESENTATION}.`);
    } catch (r) {
      return console.warn("%capi", c.API, _.PRESENTATION, r), {
        data: null,
        message: `Presentations get error: ${r.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (r) => {
    try {
      return sessionStorage.setObject(`${_.PRESENTATION}.${r.data.id}`, r.data), {
        data: null,
        message: `Presentation ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, r, o), {
        data: null,
        message: `Presentation ${r.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (r) => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}.${r.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, r.id, o), {
        data: null,
        message: `Preference ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}`);
    } catch (r) {
      return console.warn("%capi", c.API, _.PREFERENCE, r), {
        data: null,
        message: `Preferences get error: ${r.message}`,
        success: !1
      };
    }
  };
  setPreference = async (r) => {
    try {
      return sessionStorage.setObject(
        `${_.PREFERENCE}.${r.id}`,
        r.value
      ), {
        data: null,
        message: `Preference ${r.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        r,
        o
      ), {
        data: null,
        message: `Preference ${r.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
}
class Wn {
  subscribers = [];
  options;
  constructor(r) {
    this.options = r, window.BuzzCasting.WidgetData = /* @__PURE__ */ new Set();
  }
  getCloud = async (r) => {
    const o = Y(r);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        r.slide,
        r.widget,
        l
      ), { data: null, message: "Cloud Data error", success: !1 };
    }
  };
  getSeries = async (r) => {
    const o = Y(r);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        r.slide,
        r.widget,
        l
      ), { data: null, message: "Series Data error", success: !1 };
    }
  };
  getMessages = async (r) => {
    const o = Y(r);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        r.slide,
        r.widget,
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
  setCloud = async (r, o) => {
    const l = Y(r);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, "set", r, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (r, o) => {
    const l = Y(r);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, "set", r, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (r, o) => {
    const l = Y(r);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, "set", r, E), 400;
    }
  };
  cleanMessages = async (r) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (r, o) => {
    console.debug(
      `hideMessage ${r} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (r) => {
    try {
      return window.BuzzCasting.DashboardData[r.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.DASHBOARD, r.id, o), {
        data: null,
        message: `Dashboard ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (r) => {
    const o = `widget.${r.widget}`;
    try {
      return window.BuzzCasting.DashboardData[o] = r, {
        data: null,
        message: `Dashboard ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.DASHBOARD, r, l), {
        data: null,
        message: `Dashboard ${r.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (r) => {
    try {
      return window.BuzzCasting.WidgetData[r.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.WIDGET, r.id, o), {
        data: null,
        message: `Widget ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (r) => {
    const o = `widget.${r.widget}`;
    try {
      return window.BuzzCasting.WidgetData[o] = r, {
        data: null,
        message: `Widget ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, r, l), {
        data: null,
        message: `Slide ${r.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (r) => (r.type === _.MESSAGES && (r = Ot(this.options, r)), this.subscribers.filter(
    (l) => l.widget === r.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    r.slide,
    r.widget
  ), this.subscribers.push(r)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((r) => r(this.subscribers));
  getSlide = async (r) => {
    try {
      return window.BuzzCasting.SlideData[r.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, r.id, o), {
        data: null,
        message: `Slide ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (r) => {
    try {
      return window.BuzzCasting.SlideData.filter((o) => o.presentation_id === r.presentation);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, r.presentation_id, o), {
        data: null,
        message: `Slides for presentation ${r.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  setSlide = async (r) => {
    try {
      return window.BuzzCasting.SlideData[r.id] = {
        id: r.slide,
        title: r.data.title || "Not set",
        json: r.data.json || {},
        html: r.data.html || ""
      }, {
        data: null,
        message: `Slide ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, r, o), {
        data: null,
        message: `Slide ${r.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (r) => {
    try {
      const o = r.presentation || "none";
      return window.BuzzCasting.PresentationData[o];
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, r.presentation, o), {
        data: null,
        message: `Presentation ${r.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return window.BuzzCasting.PresentationData;
    } catch (r) {
      return console.warn("%capi", c.API, _.PRESENTATION, r), {
        data: null,
        message: `Presentations get error: ${r.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (r) => {
    try {
      return window.BuzzCasting.PresentationData[r.id] = r.data, {
        data: null,
        message: `Presentation ${r.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, r, o), {
        data: null,
        message: `Presentation ${r.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (r) => {
    try {
      return window.BuzzCasting.Preferences[r.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, r.id, o), {
        data: null,
        message: `Preference ${r.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return window.BuzzCasting.Preferences;
    } catch (r) {
      return console.warn("%capi", c.API, _.PREFERENCE, r), {
        data: null,
        message: `Preferences get error: ${r.message}`,
        success: !1
      };
    }
  };
  setPreference = async (r) => {
    try {
      return window.BuzzCasting.Preferences[r.id] = r.value, {
        data: null,
        message: `Preference ${r.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        r,
        o
      ), {
        data: null,
        message: `Preference ${r.id} save error: ${o.message}`,
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
  constructor(r) {
    K(3, [
      "%cpresentation",
      c.PRESENTATION,
      r.presentation,
      J.VERSION,
      xa
    ]), this.options = r, this.sm = null;
    const o = r.presentation;
    switch (this.bc = new BroadcastChannel(o), K(3, ["%cchannel%c %capi", c.BROADCAST, c.NONE, c.API, o]), this.bc.onmessage = (l) => {
      this.actions(l);
    }, this.bc.postMessage({ event: J.STORAGE_INIT, data: {} }), this.api = new ka(r), r.storage) {
      case he.DEXIE:
        this.sm = new Mn(r);
        break;
      case he.LOCAL:
        this.sm = new Ln(r);
        break;
      case he.SESSION:
        this.sm = new Gn(r);
        break;
      case he.KEYVAL:
        this.sm = new Bn(r);
        break;
      case he.WINDOW:
        this.sm = new Wn(r);
        break;
    }
  }
  addSubscriber(r) {
    this.subscribers[r.widget] = r;
  }
  update = async (r) => {
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
  processResponse = async (r) => {
    let o, l = 400;
    if (r.success === !0) {
      const E = this.subscribers[r.query.widget];
      let O = "";
      switch (r.query.type) {
        case _.MESSAGES:
          let C;
          C = r.data.messages.filter(
            (B) => B.id !== null
          ), r.data.messages = C, O = r.data.messages.length > 0 ? Wr(r.data.messages[0].utc) : "none", E?.hash && E.hash === O ? (K(3, [
            "%cload%c %cmessages%c %cno updates",
            c.OK,
            c.NONE,
            c.MESSAGES,
            c.NONE,
            c.NO_UPDATES,
            r.query.widget
          ]), K(4, ["%cmessages", c.MESSAGES, r]), l = 204) : (o = r, E.hash = O, l = await this.sm?.setMessages(r.query, r).then(async (B) => (B = 201, this.broadcastUpdate(B, r))));
          break;
        case _.CLOUD:
          O = Wr(r.data.cloud), E?.hash && E.hash === O ? (K(3, [
            "%cload%c %ccloud%c %cno updates",
            c.OK,
            c.NONE,
            c.CLOUD,
            c.NONE,
            c.NO_UPDATES,
            r.query.widget
          ]), K(4, ["%ccloud", c.CLOUD, r.query]), l = 204) : (E.hash = O, o = {
            data: {
              cloud: r.data
            },
            message: r.message,
            success: r.success,
            query: r.query
          }, l = await this.sm?.setCloud(r.query, o.data).then((B) => this.broadcastUpdate(B, r)));
          break;
        case _.SERIES:
          O = Wr(r.data.series), E?.hash && E.hash === O ? (K(3, [
            "%cload%c %cseries%c %cno updates",
            c.OK,
            c.NONE,
            c.SERIES,
            c.NONE,
            c.NO_UPDATES,
            r.query.widget
          ]), K(4, ["%cseries", c.SERIES, r]), l = 204) : (E.hash = O, o = {
            data: r.data,
            message: r.message,
            success: r.success,
            query: r.query
          }, l = await this.sm?.setSeries(r.query, r.data).then((B) => this.broadcastUpdate(B, r)));
          break;
        default:
          return K(4, [
            "%cfetch%c %capi%c %cno updates",
            c.KO,
            c.NONE,
            c.API,
            c.NONE,
            c.NO_UPDATES,
            `Bad request: type ${r.query.type} unknown`
          ]), r;
      }
    } else
      switch (K(4, [
        `%cload%c %c${r.query}%c %bad request`,
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        r.query
      ]), r.query.type) {
        case _.MESSAGES:
          return await this.sm?.getMessages(r.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
        case _.CLOUD:
          return await this.sm?.getCloud(r.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
        case _.SERIES:
          return await this.sm?.getSeries(r.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
      }
    return l;
  };
  broadcastUpdate = (r, o) => {
    switch (r) {
      case 201:
        K(3, [
          `%cupdate%c %cwidget%c %c${o.query?.type}`,
          c.BROADCAST,
          c.NONE,
          c.WIDGET,
          c.NONE,
          kn(o.query),
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
          kn(o.query),
          "Fetch error",
          o.query
        ]);
        break;
    }
    return r;
  };
  hide = (r) => {
    this.api.hideMessage(r);
  };
  actions = async (r) => {
    switch (r.data.event) {
      case J.SUBSCRIBE:
        this.addSubscriber(r.data.data);
        break;
      case J.UPDATE:
        K(3, [
          "%cupdate%c %capi%c %cstorage",
          c.BROADCAST,
          c.NONE,
          c.API,
          c.NONE,
          c.STORAGE,
          r.data
        ]), await this.update(r.data.data);
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
    const r = this.options?.retention || 86400 * 4, o = await this.sm?.cleanMessages(
      r
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
  hideMessage = async (r) => {
    const o = await this.sm?.hideMessage(r.id, 0);
    return K(3, [
      "%chide%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      `${o} messages hidden`
    ]), await this.api.hideMessage(r);
  };
  hideLabels = async (r) => await this.api.hideLabels(r);
  getSubscribers = async () => await new Promise((r) => r(this.subscribers));
  getSlide = async (r) => await this.sm?.getSlide(r);
  getSlides = async (r) => await this.sm?.getSlides(r);
  setSlide = async (r) => await this.sm?.setSlide(r);
  loadSlide = async (r) => await this.api.loadSlide(r);
  storeSlide = async (r) => await this.api.storeSlide(r);
  getPresentation = async (r) => await this.sm?.getPresentation(r);
  getPresentations = async (r) => await this.sm?.getPresentations(r);
  setPresentation = async (r) => await this.sm?.setPresentation(r);
  loadPresentation = async (r) => await this.api.loadPresentation(r);
  storePresentation = async (r) => await this.api.storePresentation(r);
  getPreference = async (r) => await this.sm?.getPreference(r);
  getPreferences = async (r) => await this.sm?.getPreferences(r);
  setPreference = async (r) => await this.sm?.setPreference(r);
  loadPreference = async (r) => await this.api.loadPreference(r);
  storePreference = async (r) => await this.api.storePreference(r);
  /*public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
  	return await this.api.loadDashboardWidgets(query);
  };*/
  getWidget = async (r) => await this.sm?.getWidget(r);
  getWidgets = async (r) => await this.sm?.getWidgets(r);
  setWidget = async (r) => await this.sm?.setWidget(r);
  loadDashboards = async (r) => await this.api.loadDashboards(r);
  getDashboard = async (r) => await this.sm?.getDashboard(r);
  getDashboards = async (r) => await this.sm?.getDashboards();
  setDashboard = async (r) => await this.sm?.setDashboard(r);
}
class Ga {
  sm;
  constructor(r) {
    switch (this.sm = null, r.storage) {
      case he.DEXIE:
        this.sm = new Mn(r);
        break;
      case he.LOCAL:
        this.sm = new Ln(r);
        break;
      case he.SESSION:
        this.sm = new Gn(r);
        break;
      case he.KEYVAL:
        this.sm = new Bn(r);
        break;
      case he.WINDOW:
        this.sm = new Wn(r);
        break;
    }
  }
  /**
   * Retieve Cloud Data
   * @param query Widgets parameters, type "cloud"
   * @returns IResponse
   */
  getCloud = async (r) => r.type !== _.CLOUD ? (console.warn(
    "%cget%c %cstorage%c %ccloud",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.CLOUD,
    r.widget,
    "wrong method call for getMessages, type used is",
    r.type
  ), {
    data: null,
    message: `'wrong method call for getMessages, type used is ${r.type}`,
    success: !1
  }) : await this.sm?.getCloud(r);
  /**
   * Retieve Message Data
   * @param query Widgets parameters, type "messages"
   * @returns IResponse
   */
  getMessages = async (r) => r.type !== _.MESSAGES ? (console.warn(
    "%cget%c %cstorage%c %cmessages",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.MESSAGES,
    r.widget,
    "wrong method call for getMessages, type used is",
    r.type
  ), {
    data: null,
    message: `'wrong method call for getMessages, type used is ${r.type}`,
    success: !1
  }) : await this.sm?.getMessages(r);
  /**
   * Retrieve Series Data
   * @param query Widgets parameters, type "series"
   * @returns IResponse
   */
  getSeries = async (r) => r.type !== _.SERIES ? (console.warn(
    "%cget%c %cstorage%c %cseries",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.SERIES,
    r.widget,
    "wrong method call for getMessages, type used is",
    r.type
  ), {
    data: null,
    message: `'wrong method call for getSeries, type used is ${r.type}`,
    success: !1
  }) : await this.sm?.getSeries(r);
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
  constructor(r, o, l) {
    this.element = r, this.callbacks = o, l = typeof l < "u" ? l : "buzzcasting-app";
    let E;
    E = { ...r.dataset }, delete E.hmr, E.presentation = r.closest(l)?.getAttribute("presentation") ?? `${l} not found`, this.query = E, Da(r);
    const O = window.BuzzCasting.getOptions();
    this.storageReader = new Ga(O), this.broadcastChannel = new BroadcastChannel(E.presentation), this.broadcastListener();
  }
  addCallbackListener(r) {
    this.callbacks.push(r);
  }
  /**
   * Data received from BroadcastChannel
   * data that is broadcast needs to be a IMessage[] |ICloud or ISeries structure
   */
  broadcastListener() {
    const r = this.query;
    this.broadcastChannel.onmessage = async (o) => {
      const l = o.data.data;
      switch (o.data.event) {
        case J.WIDGET_UPDATE:
          try {
            if (l.dashboard === r.dashboard && l.widget === r.widget) {
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
  showModal = (r) => {
    K(3, [
      "%cwidget",
      c.WIDGET,
      J.SHOW_MODAL,
      r.showComponent,
      // @ts-ignore
      Pa(this.element.attributes)
      //props['data-widget'],
    ]);
    const o = new CustomEvent(J.SHOW_MODAL, {
      detail: {
        component: r.showComponent,
        props: r.props,
        //mergedProps,
        timeout: r?.timeout
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
  Ga as BuzzcastingStorageReader,
  Za as Widget
};
