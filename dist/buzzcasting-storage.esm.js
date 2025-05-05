var _ = /* @__PURE__ */ ((h) => (h.CLOUD = "cloud", h.DASHBOARD = "dashboard", h.DASHBOARDS = "dashboards", h.IMAGES = "images", h.MESSAGES = "messages", h.PREFERENCE = "preference", h.PREFERENCES = "preferences", h.PRESENTATION = "presentation", h.PRESENTATIONS = "presentations", h.SERIES = "series", h.SLIDE = "slide", h.SLIDES = "slides", h.TOPICS = "topics", h.WIDGET = "widget", h.WIDGETS = "widgets", h))(_ || {}), c = /* @__PURE__ */ ((h) => (h.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", h.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", h.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", h.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", h.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", h.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", h.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", h.NONE = "color:transparent;background-color:transparent;", h.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", h.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", h.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", h.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", h.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", h.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", h.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", h))(c || {}), J = /* @__PURE__ */ ((h) => (h.ADD_SLIDE = "addSlide", h.APP_READY = "appReady", h.API_UPDATE = "apiUpdate", h.WS_API_REQUEST = "wsApiRequest", h.WS_API_RESPONSE = "wsApiResponse", h.WS_API_UPDATE = "wsApiRUpdate", h.APPROVE_MESSAGE = "approveMessage", h.CHANNEL = "channel", h.CLEAN_MESSAGES = "cleanMessages", h.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", h.CLOSE_BUILDER_MODAL = "closeBuilderModal", h.CLOSE_MODAL = "closeModal", h.CSS_SET = "setCss", h.CSS_STORE = "storeCss", h.DASHBOARD_LOAD = "loadDashboard", h.DASHBOARD_STORE = "storeDashboard", h.ERROR = "error", h.HIDE_MESSAGE = "hideMessage", h.HIDE_LABELS = "hideLabels", h.MAUPPUT_UPDATE = "layoutUpdate", h.PREV_SLIDE = "prevSlide", h.RELOAD_PRESENTATION = "reloadPresentation", h.STAR_MESSAGE = "starMessage", h.GOTO_SLIDE = "gotoSlide", h.NEXT_SLIDE = "nextSlide", h.PREFERENCE_LOAD = "loadPreference", h.PREFERENCE_STORE = "storePreference", h.PAUSE_PRESENTATION = "pausePresentation", h.PRESENTATION_READY = "presentationReady", h.PRESENTATION_LOAD = "loadPresentation", h.PRESENTATION_STORE = "storePresentation", h.SHOW_BUILDER_DIALOG = "showBuilderDialog", h.SHOW_BUILDER_MODAL = "showBuilderModal", h.SHOW_MODAL = "showModal", h.SLIDE_DID_LOAD = "slideDidLoad", h.SLIDE_GOTO = "slideGoto", h.SLIDE_READY = "slideReady", h.SLIDE_LOAD = "loadSlide", h.SLIDE_STORE = "storeSlide", h.SLIDE_TRANSITIONER = "slideTransitioner", h.START_TRANSITIONER = "startTransitioner", h.STORAGE_INIT = "storageInit", h.SUBSCRIBE = "subscribe", h.SUSPEND_ACCOUNT = "suspendAccount", h.SWITCH_PRESENTATION = "switchPresentation", h.REMOVE_CLOUD = "removeCloud", h.UPDATE = "update", h.VERSION = "version", h.WIDGETS_CLEAR = "widgetsClear", h.WIDGET_LOAD = "widgetLoad", h.WIDGET_STORE = "widgetStore", h.WIDGET_UPDATE = "widgetUpdate", h))(J || {}), er = /* @__PURE__ */ ((h) => (h.APPROVED = "approved", h.BEFORE = "before", h.DELAYED = "delayed", h.NONE = "none", h.REALTIME = "realtime", h))(er || {}), he = /* @__PURE__ */ ((h) => (h.KEYVAL = "keyval", h.LOCAL = "local", h.SESSION = "session", h.DEXIE = "dexie", h.WINDOW = "window", h))(he || {});
function Pa(h) {
  const t = {};
  for (let o = 0; o < h.length; o++) {
    const l = h.item(o);
    l != null && l.name && (t[l.name] = l.value);
  }
  return t;
}
function Da(h) {
  const t = document.createRange();
  t.selectNodeContents(h), t.deleteContents();
}
function Na(h, t) {
  for (; h.length < t; )
    h = `0${h}`;
  return h;
}
function Oe(h, t) {
  let o, l, b;
  if (t.length === 0)
    return h;
  for (o = 0, b = t.length; o < b; o++)
    l = t.charCodeAt(o), h = (h << 5) - h + l, h |= 0;
  return h < 0 ? h * -2 : h;
}
function Ra(h, t, o) {
  return Object.keys(t).sort().reduce(l, h);
  function l(b, w) {
    return jn(b, t[w], w, o);
  }
}
function jn(h, t, o, l) {
  const b = Oe(Oe(Oe(h, o), Ia(t)), typeof t);
  if (t === null)
    return Oe(b, "null");
  if (t === void 0)
    return Oe(b, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (l.includes(t))
      return Oe(b, `[Circular]${o}`);
    l.push(t);
    const w = Ra(b, t, l);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return w;
    try {
      return Oe(w, String(t.valueOf()));
    } catch (C) {
      return Oe(w, `[valueOf exception]${C.stack || C.message}`);
    }
  }
  return Oe(b, t.toString());
}
function Ia(h) {
  return Object.prototype.toString.call(h);
}
function Wr(h) {
  return Na(jn(0, h, "", []).toString(16), 8);
}
const st = (h) => {
  let t = {}, o = h.split(",");
  for (let l = 0; l < o.length; l++) t[o[l]] = !0;
  return t;
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
const K = (h = 0, t) => {
  switch (!0) {
    case h > 3:
      console.debug(...t);
      break;
    case h > 2:
      console.info(...t);
      break;
    case h > 1:
      console.warn(...t);
      break;
    case h > 0:
      console.error(...t);
      break;
  }
}, kn = (h) => {
  switch (h?.type) {
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
function Y(h) {
  let t = `${h.type}.${h.topics}`;
  return h.order && (t += `.${h.order}`), h.period && (t += `.${h.period}`), t;
}
function Ta(h) {
  var t;
  if (h.widget === void 0) {
    const o = (t = h.topics) == null ? void 0 : t.split("-");
    o && o.length > 1 ? (h.dashboard = o ? o[0] : "", h.widget = o ? o[1] : "") : (h.widget = h.topics, h.dashboard = h.slide);
  }
  return h;
}
function Ot(h, t) {
  var o;
  let l, b, w, C, G;
  switch (h.moderation) {
    case er.BEFORE:
      l = /* @__PURE__ */ new Date(), b = (o = h.beforeTime) == null ? void 0 : o.split(":"), w = Number.parseInt(b ? b[0] : "00"), C = Number.parseInt(b ? b[1] : "00"), G = Number.parseInt(b ? b[2] : "00"), t.before = l.setHours(w, C, G, 0) / 1e3, t.period || (t.period = l.getDay() === 1 ? 72 : 24);
      break;
    case er.DELAYED:
      h.delay && h.delay > 0 && (t.delay = `${h.delay}`);
      break;
    case er.APPROVED:
      t.approved = "1";
      break;
    default:
      h.period !== 0 && (t.period = h.period);
  }
  return t;
}
const xa = "3.9.15";
class ka {
  options;
  url;
  constructor(t) {
    this.options = t, this.url = `https://${t.app}.buzzcasting.net`;
  }
  headers = () => {
    const t = `Bearer ${this.options.bearer}`;
    return {
      headers: new Headers({
        Authorization: t,
        Accept: "application/json"
        // 'Cache-Control': 'no-cache',
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      })
    };
  };
  formHeaders = () => {
    const t = `Bearer ${this.options.bearer}`;
    return {
      headers: new Headers({
        Authorization: t,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
        // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
      })
    };
  };
  async get(t) {
    const { version: o } = this.options, l = this.headers(), b = Object.assign({}, t);
    delete b.type, delete b.hash, delete b.order, b.topics = `${b.dashboard}-${b.widget}`, delete b.presentation;
    const w = Object.keys(b).length > 0 ? `?${new URLSearchParams(b).toString()}` : "";
    let C = "";
    switch (t.type) {
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
      `%cfetch%c %capi%c %c${t.type}`,
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      C,
      t.widget
    ]), K(4, [t.type, b]), await fetch(
      [this.url, "api", o, t.type].join("/") + w,
      { ...l, method: "get" }
    ).then(async (G) => {
      if (!G.ok)
        throw new Error(`${G.status}`);
      return G;
    }).then((G) => G.json()).then((G) => (G.query = t, G)).catch((G) => ({ success: !1, message: `${G}`, data: null, query: t }));
  }
  async hideMessage(t) {
    const { version: o } = this.options, l = this.headers(), b = "?action=visible";
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_MESSAGE,
      t.widget,
      t.id
    ), await fetch(
      [this.url, "api", o, "messages", t.id].join("/") + b,
      { ...l, method: "put" }
    ).then((w) => {
      if (!w.ok)
        throw new Error(w.statusText);
      return w;
    }).then((w) => w.json()).catch((w) => ({ succes: !1, message: w, data: [] }));
  }
  async hideLabels(t) {
    const { version: o } = this.options, l = this.formHeaders(), b = new URLSearchParams(), w = t.labels || [];
    for (const [C, G] of w.entries())
      b.append(`custom_filters[${C}]`, G);
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_LABELS,
      t.widget,
      w
    ), await fetch(
      [this.url, "api", o, t.type, t.widget].join("/"),
      { ...l, body: b, method: "put" }
    ).then((C) => {
      if (!C.ok)
        throw new Error(C.statusText);
      return C;
    }).then((C) => C.json()).catch((C) => ({ succes: !1, message: C, data: [] }));
  }
  async loadSlide(t) {
    const { version: o } = this.options, l = this.headers(), b = Object.assign({}, t);
    return delete b.type, delete b.hash, K(3, ["%capi%c %cloadSlide", c.API, c.NONE, c.SLIDE, t.id]), await fetch(
      [this.url, "api", o, "slides", t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (w) => {
      if (!w.ok)
        throw new Error(`${w.status}`);
      return w;
    }).then((w) => w.json()).then((w) => (w.query = t, w.data && w.data.json && (w.data.json = JSON.parse(w.data.json)), w)).catch((w) => ({ success: !1, message: `${w}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storeSlide(t) {
    const { version: o } = this.options, l = this.formHeaders();
    delete t.update, delete t.type;
    const b = JSON.stringify(t);
    return K(3, [
      "%cput%c %capi%c %cslide",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.SLIDE,
      J.SLIDE_STORE,
      t.id
    ]), await fetch(
      [this.url, "api", o, "slides", t.id].join("/"),
      { ...l, body: b, method: "put" }
    ).then((w) => {
      if (!w.ok)
        throw new Error(w.statusText);
      return w;
    }).then((w) => w.json()).catch((w) => ({ succes: !1, message: w, data: [] }));
  }
  async loadPresentation(t) {
    const { version: o } = this.options, l = this.headers();
    return delete t.update, K(3, [
      "%cload%c %capi%c %cloadPresentation",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.PRESENTATION,
      t.id
    ]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (b) => {
      if (!b.ok)
        throw new Error(`${b.status}`);
      return b;
    }).then((b) => b.json()).then((b) => (b.query = t, b)).catch((b) => ({ success: !1, message: `${b}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storePresentation(t) {
    const { version: o } = this.options, l = this.formHeaders();
    delete t.update;
    const b = JSON.stringify(t);
    return K(2, ["%capi%c %cput", c.API, c.NONE, c.PRESENTATION, t.name]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, t.id].join("/"),
      { ...l, body: b, method: "put" }
    ).then((w) => {
      if (!w.ok)
        throw new Error(w.statusText);
      return w;
    }).then((w) => w.json()).catch((w) => ({ succes: !1, message: w, data: [] }));
  }
  async loadPreference(t) {
    const { version: o } = this.options, l = this.headers();
    return K(3, [
      "%capi%c %cloadPreference",
      c.API,
      c.NONE,
      c.APP,
      t.id
    ]), await fetch(
      [this.url, "api", o, _.PREFERENCES, t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (b) => {
      if (!b.ok)
        throw new Error(`${b.status}`);
      return b;
    }).then((b) => b.json()).then((b) => b).catch((b) => ({ success: !1, message: `${b}`, data: null }));
  }
  async storePreference(t) {
    const { version: o } = this.options, l = this.formHeaders();
    delete t.update;
    const b = JSON.stringify({ data: t });
    return console.info(
      "%capi%c %cstorePreference",
      c.API,
      c.NONE,
      c.APP,
      t.id
    ), await fetch(
      [this.url, "api", o, _.PREFERENCES, t.id].join("/"),
      { ...l, body: b, method: "put" }
    ).then((w) => {
      if (!w.ok)
        throw new Error(w.statusText);
      return w;
    }).then((w) => w.json()).catch((w) => ({ succes: !1, message: w, data: [] }));
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
  async loadDashboards(t) {
    const { version: o } = this.options, l = this.headers();
    return K(3, ["%capi%c %cdashboards", c.API, c.NONE, c.WIDGET]), await fetch(
      [this.url, "api", o, _.WIDGETS, t?.id || ""].join("/"),
      {
        ...l,
        method: "get"
      }
    ).then(async (b) => {
      if (!b.ok)
        throw new Error(`${b.status}`);
      return b;
    }).then((b) => b.json()).then((b) => ({
      data: { dashboards: b },
      message: "Dashboard Widgets loaded from api",
      success: !0
    })).catch((b) => ({ success: !1, message: `${b}`, data: null }));
  }
  async loadImages() {
    const { version: t } = this.options, o = this.headers();
    return console.info("%capi%c %cloadImage", c.API, c.NONE, c.WIDGET), await fetch([this.url, "api", t, _.IMAGES].join("/"), {
      ...o,
      method: "get"
    }).then(async (l) => {
      if (!l.ok)
        throw new Error(`${l.status}`);
      return l;
    }).then((l) => l.json()).then((l) => ({
      data: { dashboards: l },
      message: "Images loaded via api",
      success: !0
    })).catch((l) => ({ success: !1, message: `${l}`, data: null }));
  }
  async storeImage(t) {
    const { version: o } = this.options, l = this.formHeaders(), b = JSON.stringify({ data: t });
    return console.info(
      "%capi%c %cstoreImage",
      c.API,
      c.NONE,
      c.WIDGET,
      t
    ), await fetch(
      [this.url, "api", o, _.IMAGES, t].join("/"),
      { ...l, body: b, method: "post" }
    ).then((w) => {
      if (!w.ok)
        throw new Error(w.statusText);
      return w;
    }).then((w) => w.json()).catch((w) => ({ succes: !1, message: w, data: [] }));
  }
  async deleteImage(t) {
    const { version: o } = this.options, l = this.formHeaders();
    return console.info(
      "%capi%c %cdeleteImage",
      c.API,
      c.NONE,
      c.WIDGET,
      t
    ), await fetch(
      [this.url, "api", o, _.IMAGES, t].join("/"),
      { ...l, method: "delete" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
}
var Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $a(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var tr = { exports: {} }, ja = tr.exports, Cn;
function Ma() {
  return Cn || (Cn = 1, function(h, t) {
    (function(o, l) {
      h.exports = l();
    })(ja, function() {
      var o = function(e, r) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
          n.__proto__ = a;
        } || function(n, a) {
          for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
        })(e, r);
      }, l = function() {
        return (l = Object.assign || function(e) {
          for (var r, n = 1, a = arguments.length; n < a; n++) for (var s in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
          return e;
        }).apply(this, arguments);
      };
      function b(e, r, n) {
        for (var a, s = 0, i = r.length; s < i; s++) !a && s in r || ((a = a || Array.prototype.slice.call(r, 0, s))[s] = r[s]);
        return e.concat(a || Array.prototype.slice.call(r));
      }
      var w = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, C = Object.keys, G = Array.isArray;
      function te(e, r) {
        return typeof r != "object" || C(r).forEach(function(n) {
          e[n] = r[n];
        }), e;
      }
      typeof Promise > "u" || w.Promise || (w.Promise = Promise);
      var ge = Object.getPrototypeOf, Ce = {}.hasOwnProperty;
      function ie(e, r) {
        return Ce.call(e, r);
      }
      function be(e, r) {
        typeof r == "function" && (r = r(ge(e))), (typeof Reflect > "u" ? C : Reflect.ownKeys)(r).forEach(function(n) {
          Ae(e, n, r[n]);
        });
      }
      var _t = Object.defineProperty;
      function Ae(e, r, n, a) {
        _t(e, r, te(n && ie(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, a));
      }
      function Ye(e) {
        return { from: function(r) {
          return e.prototype = Object.create(r.prototype), Ae(e.prototype, "constructor", e), { extend: be.bind(null, e.prototype) };
        } };
      }
      var Fn = Object.getOwnPropertyDescriptor, Un = [].slice;
      function At(e, r, n) {
        return Un.call(e, r, n);
      }
      function Hr(e, r) {
        return r(e);
      }
      function ot(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Vr(e) {
        w.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ve(e, r) {
        if (typeof r == "string" && ie(e, r)) return e[r];
        if (!r) return e;
        if (typeof r != "string") {
          for (var n = [], a = 0, s = r.length; a < s; ++a) {
            var i = ve(e, r[a]);
            n.push(i);
          }
          return n;
        }
        var u = r.indexOf(".");
        if (u !== -1) {
          var d = e[r.substr(0, u)];
          return d == null ? void 0 : ve(d, r.substr(u + 1));
        }
      }
      function ue(e, r, n) {
        if (e && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof r != "string" && "length" in r) {
          ot(typeof n != "string" && "length" in n);
          for (var a = 0, s = r.length; a < s; ++a) ue(e, r[a], n[a]);
        } else {
          var i, u, d = r.indexOf(".");
          d !== -1 ? (i = r.substr(0, d), (u = r.substr(d + 1)) === "" ? n === void 0 ? G(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = n : ue(d = !(d = e[i]) || !ie(e, i) ? e[i] = {} : d, u, n)) : n === void 0 ? G(e) && !isNaN(parseInt(r)) ? e.splice(r, 1) : delete e[r] : e[r] = n;
        }
      }
      function Yr(e) {
        var r, n = {};
        for (r in e) ie(e, r) && (n[r] = e[r]);
        return n;
      }
      var zn = [].concat;
      function Qr(e) {
        return zn.apply([], e);
      }
      var Ke = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Qr([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + e + "Array";
        });
      }))).filter(function(e) {
        return w[e];
      }), Xr = new Set(Ke.map(function(e) {
        return w[e];
      })), it = null;
      function $e(e) {
        return it = /* @__PURE__ */ new WeakMap(), e = function r(n) {
          if (!n || typeof n != "object") return n;
          var a = it.get(n);
          if (a) return a;
          if (G(n)) {
            a = [], it.set(n, a);
            for (var s = 0, i = n.length; s < i; ++s) a.push(r(n[s]));
          } else if (Xr.has(n.constructor)) a = n;
          else {
            var u, d = ge(n);
            for (u in a = d === Object.prototype ? {} : Object.create(d), it.set(n, a), n) ie(n, u) && (a[u] = r(n[u]));
          }
          return a;
        }(e), it = null, e;
      }
      var Hn = {}.toString;
      function rr(e) {
        return Hn.call(e).slice(8, -1);
      }
      var nr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Vn = typeof nr == "symbol" ? function(e) {
        var r;
        return e != null && (r = e[nr]) && r.apply(e);
      } : function() {
        return null;
      };
      function je(e, r) {
        return r = e.indexOf(r), 0 <= r && e.splice(r, 1), 0 <= r;
      }
      var Qe = {};
      function Ee(e) {
        var r, n, a, s;
        if (arguments.length === 1) {
          if (G(e)) return e.slice();
          if (this === Qe && typeof e == "string") return [e];
          if (s = Vn(e)) {
            for (n = []; !(a = s.next()).done; ) n.push(a.value);
            return n;
          }
          if (e == null) return [e];
          if (typeof (r = e.length) != "number") return [e];
          for (n = new Array(r); r--; ) n[r] = e[r];
          return n;
        }
        for (r = arguments.length, n = new Array(r); r--; ) n[r] = arguments[r];
        return n;
      }
      var ar = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, lt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], fe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(lt), Yn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Xe(e, r) {
        this.name = e, this.message = r;
      }
      function Jr(e, r) {
        return e + ". Errors: " + Object.keys(r).map(function(n) {
          return r[n].toString();
        }).filter(function(n, a, s) {
          return s.indexOf(n) === a;
        }).join(`
`);
      }
      function Pt(e, r, n, a) {
        this.failures = r, this.failedKeys = a, this.successCount = n, this.message = Jr(e, r);
      }
      function Je(e, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(n) {
          return r[n];
        }), this.failuresByPos = r, this.message = Jr(e, this.failures);
      }
      Ye(Xe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ye(Pt).from(Xe), Ye(Je).from(Xe);
      var sr = fe.reduce(function(e, r) {
        return e[r] = r + "Error", e;
      }, {}), Qn = Xe, L = fe.reduce(function(e, r) {
        var n = r + "Error";
        function a(s, i) {
          this.name = n, s ? typeof s == "string" ? (this.message = "".concat(s).concat(i ? `
 ` + i : ""), this.inner = i || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Yn[r] || n, this.inner = null);
        }
        return Ye(a).from(Qn), e[r] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var Zr = lt.reduce(function(e, r) {
        return e[r + "Error"] = L[r], e;
      }, {}), Dt = fe.reduce(function(e, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (e[r + "Error"] = L[r]), e;
      }, {});
      function Q() {
      }
      function ct(e) {
        return e;
      }
      function Xn(e, r) {
        return e == null || e === ct ? r : function(n) {
          return r(e(n));
        };
      }
      function Me(e, r) {
        return function() {
          e.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function Jn(e, r) {
        return e === Q ? r : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var a = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var i = r.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? Me(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? Me(s, this.onerror) : s), i !== void 0 ? i : n;
        };
      }
      function Zn(e, r) {
        return e === Q ? r : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Me(n, this.onsuccess) : n), a && (this.onerror = this.onerror ? Me(a, this.onerror) : a);
        };
      }
      function qn(e, r) {
        return e === Q ? r : function(n) {
          var a = e.apply(this, arguments);
          te(n, a);
          var s = this.onsuccess, i = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = r.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Me(s, this.onsuccess) : s), i && (this.onerror = this.onerror ? Me(i, this.onerror) : i), a === void 0 ? n === void 0 ? void 0 : n : te(a, n);
        };
      }
      function ea(e, r) {
        return e === Q ? r : function() {
          return r.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function or(e, r) {
        return e === Q ? r : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var a = this, s = arguments.length, i = new Array(s); s--; ) i[s] = arguments[s];
            return n.then(function() {
              return r.apply(a, i);
            });
          }
          return r.apply(this, arguments);
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
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, ge(r), e];
      }(), lt = Ke[0], fe = Ke[1], Ke = Ke[2], fe = fe && fe.then, Ge = lt && lt.constructor, ir = !!Ke, dt = function(e, r) {
        ft.push([e, r]), Nt && (queueMicrotask(ra), Nt = !1);
      }, cr = !0, Nt = !0, Be = [], Rt = [], ur = ct, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Pe, ft = [], Le = 0, It = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = B;
        if (typeof e != "function") {
          if (e !== ut) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && dr(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function n(a, s) {
          try {
            s(function(i) {
              if (a._state === null) {
                if (i === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Ze();
                i && typeof i.then == "function" ? n(a, function(d, g) {
                  i instanceof j ? i._then(d, g) : i.then(d, g);
                }) : (a._state = !0, a._value = i, rn(a)), u && qe();
              }
            }, dr.bind(null, a));
          } catch (i) {
            dr(a, i);
          }
        }(this, e);
      }
      var lr = { get: function() {
        var e = B, r = Ct;
        function n(a, s) {
          var i = this, u = !e.global && (e !== B || r !== Ct), d = u && !Ne(), g = new j(function(m, E) {
            fr(i, new tn(an(a, e, u, d), an(s, e, u, d), m, E, e));
          });
          return this._consoleTask && (g._consoleTask = this._consoleTask), g;
        }
        return n.prototype = ut, n;
      }, set: function(e) {
        Ae(this, "then", e && e.prototype === ut ? lr : { get: function() {
          return e;
        }, set: lr.set });
      } };
      function tn(e, r, n, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = n, this.reject = a, this.psd = s;
      }
      function dr(e, r) {
        var n, a;
        Rt.push(r), e._state === null && (n = e._lib && Ze(), r = ur(r), e._state = !1, e._value = r, a = e, Be.some(function(s) {
          return s._value === a._value;
        }) || Be.push(a), rn(e), n && qe());
      }
      function rn(e) {
        var r = e._listeners;
        e._listeners = [];
        for (var n = 0, a = r.length; n < a; ++n) fr(e, r[n]);
        var s = e._PSD;
        --s.ref || s.finalize(), Le === 0 && (++Le, dt(function() {
          --Le == 0 && hr();
        }, []));
      }
      function fr(e, r) {
        if (e._state !== null) {
          var n = e._state ? r.onFulfilled : r.onRejected;
          if (n === null) return (e._state ? r.resolve : r.reject)(e._value);
          ++r.psd.ref, ++Le, dt(ta, [n, e, r]);
        } else e._listeners.push(r);
      }
      function ta(e, r, n) {
        try {
          var a, s = r._value;
          !r._state && Rt.length && (Rt = []), a = pe && r._consoleTask ? r._consoleTask.run(function() {
            return e(s);
          }) : e(s), r._state || Rt.indexOf(s) !== -1 || function(i) {
            for (var u = Be.length; u; ) if (Be[--u]._value === i._value) return Be.splice(u, 1);
          }(r), n.resolve(a);
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
        var e, r, n;
        do
          for (; 0 < ft.length; ) for (e = ft, ft = [], n = e.length, r = 0; r < n; ++r) {
            var a = e[r];
            a[0].apply(null, a[1]);
          }
        while (0 < ft.length);
        Nt = cr = !0;
      }
      function hr() {
        var e = Be;
        Be = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var r = It.slice(0), n = r.length; n; ) r[--n]();
      }
      function Tt(e) {
        return new j(ut, !1, e);
      }
      function Z(e, r) {
        var n = B;
        return function() {
          var a = Ze(), s = B;
          try {
            return Re(n, !0), e.apply(this, arguments);
          } catch (i) {
            r && r(i);
          } finally {
            Re(s, !1), a && qe();
          }
        };
      }
      be(j.prototype, { then: lr, _then: function(e, r) {
        fr(this, new tn(null, null, e, r, B));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var r = e, n = arguments[1];
        return typeof r == "function" ? this.then(null, function(a) {
          return (a instanceof r ? n : Tt)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === r ? n : Tt)(a);
        });
      }, finally: function(e) {
        return this.then(function(r) {
          return j.resolve(e()).then(function() {
            return r;
          });
        }, function(r) {
          return j.resolve(e()).then(function() {
            return Tt(r);
          });
        });
      }, timeout: function(e, r) {
        var n = this;
        return e < 1 / 0 ? new j(function(a, s) {
          var i = setTimeout(function() {
            return s(new L.Timeout(r));
          }, e);
          n.then(a, s).finally(clearTimeout.bind(null, i));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = nn(), be(j, { all: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(r, n) {
          e.length === 0 && r([]);
          var a = e.length;
          e.forEach(function(s, i) {
            return j.resolve(s).then(function(u) {
              e[i] = u, --a || r(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(r, n) {
          e.then(r, n);
        }) : new j(ut, !0, e);
      }, reject: Tt, race: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(r, n) {
          e.map(function(a) {
            return j.resolve(a).then(r, n);
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
        return ur;
      }, set: function(e) {
        ur = e;
      } }, follow: function(e, r) {
        return new j(function(n, a) {
          return De(function(s, i) {
            var u = B;
            u.unhandleds = [], u.onunhandled = i, u.finalize = Me(function() {
              var d, g = this;
              d = function() {
                g.unhandleds.length === 0 ? s() : i(g.unhandleds[0]);
              }, It.push(function m() {
                d(), It.splice(It.indexOf(m), 1);
              }), ++Le, dt(function() {
                --Le == 0 && hr();
              }, []);
            }, u.finalize), e();
          }, r, n, a);
        });
      } }), Ge && (Ge.allSettled && Ae(j, "allSettled", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(r) {
          e.length === 0 && r([]);
          var n = e.length, a = new Array(n);
          e.forEach(function(s, i) {
            return j.resolve(s).then(function(u) {
              return a[i] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[i] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || r(a);
            });
          });
        });
      }), Ge.any && typeof AggregateError < "u" && Ae(j, "any", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new j(function(r, n) {
          e.length === 0 && n(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(i, u) {
            return j.resolve(i).then(function(d) {
              return r(d);
            }, function(d) {
              s[u] = d, --a || n(new AggregateError(s));
            });
          });
        });
      }), Ge.withResolvers && (j.withResolvers = Ge.withResolvers));
      var re = { awaits: 0, echoes: 0, id: 0 }, na = 0, xt = [], kt = 0, Ct = 0, aa = 0;
      function De(e, r, n, a) {
        var s = B, i = Object.create(s);
        return i.parent = s, i.ref = 0, i.global = !1, i.id = ++aa, Pe.env, i.env = ir ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, r && te(i, r), ++s.ref, i.finalize = function() {
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
        return re.echoes && e && e.constructor === Ge ? (et(), e.then(function(r) {
          return Ne(), r;
        }, function(r) {
          return Ne(), q(r);
        })) : e;
      }
      function sa() {
        var e = xt[xt.length - 1];
        xt.pop(), Re(e, !1);
      }
      function Re(e, r) {
        var n, a = B;
        (r ? !re.echoes || kt++ && e === B : !kt || --kt && e === B) || queueMicrotask(r ? function(s) {
          ++Ct, re.echoes && --re.echoes != 0 || (re.echoes = re.awaits = re.id = 0), xt.push(B), Re(s, !0);
        }.bind(null, e) : sa), e !== B && (B = e, a === Pe && (Pe.env = nn()), ir && (n = Pe.env.Promise, r = e.env, (a.global || e.global) && (Object.defineProperty(w, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any && (n.any = r.any))));
      }
      function nn() {
        var e = w.Promise;
        return ir ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(w, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function We(e, r, n, a, s) {
        var i = B;
        try {
          return Re(e, !0), r(n, a, s);
        } finally {
          Re(i, !1);
        }
      }
      function an(e, r, n, a) {
        return typeof e != "function" ? e : function() {
          var s = B;
          n && et(), Re(r, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Re(s, !1), a && queueMicrotask(Ne);
          }
        };
      }
      function gr(e) {
        Promise === Ge && re.echoes === 0 ? kt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + fe).indexOf("[native code]") === -1 && (et = Ne = Q);
      var q = j.reject, Fe = "￿", we = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", sn = "String expected.", tt = [], jt = "__dbnames", pr = "readonly", mr = "readwrite";
      function Ue(e, r) {
        return e ? r ? function() {
          return e.apply(this, arguments) && r.apply(this, arguments);
        } : e : r;
      }
      var on = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Mt(e) {
        return typeof e != "string" || /\./.test(e) ? function(r) {
          return r;
        } : function(r) {
          return r[e] === void 0 && e in r && delete (r = $e(r))[e], r;
        };
      }
      function cn() {
        throw L.Type();
      }
      function H(e, r) {
        try {
          var n = un(e), a = un(r);
          if (n !== a) return n === "Array" ? 1 : a === "Array" ? -1 : n === "binary" ? 1 : a === "binary" ? -1 : n === "string" ? 1 : a === "string" ? -1 : n === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return r < e ? 1 : e < r ? -1 : 0;
            case "binary":
              return function(s, i) {
                for (var u = s.length, d = i.length, g = u < d ? u : d, m = 0; m < g; ++m) if (s[m] !== i[m]) return s[m] < i[m] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(ln(e), ln(r));
            case "Array":
              return function(s, i) {
                for (var u = s.length, d = i.length, g = u < d ? u : d, m = 0; m < g; ++m) {
                  var E = H(s[m], i[m]);
                  if (E !== 0) return E;
                }
                return u === d ? 0 : u < d ? -1 : 1;
              }(e, r);
          }
        } catch {
        }
        return NaN;
      }
      function un(e) {
        var r = typeof e;
        return r != "object" ? r : ArrayBuffer.isView(e) ? "binary" : (e = rr(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ln(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var dn = (X.prototype._trans = function(e, r, n) {
        var a = this._tx || B.trans, s = this.name, i = pe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(m, E, f) {
          if (!f.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return r(f.idbtrans, f);
        }
        var d = Ze();
        try {
          var g = a && a.db._novip === this.db._novip ? a === B.trans ? a._promise(e, u, n) : De(function() {
            return a._promise(e, u, n);
          }, { trans: a, transless: B.transless || B }) : function m(E, f, O, p) {
            if (E.idbdb && (E._state.openComplete || B.letThrough || E._vip)) {
              var v = E._createTransaction(f, O, E._dbSchema);
              try {
                v.create(), E._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === sr.InvalidState && E.isOpen() && 0 < --E._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), E.close({ disableAutoOpen: !1 }), E.open().then(function() {
                  return m(E, f, O, p);
                })) : q(S);
              }
              return v._promise(f, function(S, y) {
                return De(function() {
                  return B.trans = v, p(S, y, v);
                });
              }).then(function(S) {
                if (f === "readwrite") try {
                  v.idbtrans.commit();
                } catch {
                }
                return f === "readonly" ? S : v._completion.then(function() {
                  return S;
                });
              });
            }
            if (E._state.openComplete) return q(new L.DatabaseClosed(E._state.dbOpenError));
            if (!E._state.isBeingOpened) {
              if (!E._state.autoOpen) return q(new L.DatabaseClosed());
              E.open().catch(Q);
            }
            return E._state.dbReadyPromise.then(function() {
              return m(E, f, O, p);
            });
          }(this.db, e, [this.name], u);
          return i && (g._consoleTask = i, g = g.catch(function(m) {
            return console.trace(m), q(m);
          })), g;
        } finally {
          d && qe();
        }
      }, X.prototype.get = function(e, r) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(r) : e == null ? q(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return n.core.get({ trans: a, key: e }).then(function(s) {
            return n.hook.reading.fire(s);
          });
        }).then(r);
      }, X.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (G(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var r = C(e);
        if (r.length === 1) return this.where(r[0]).equals(e[r[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && r.every(function(m) {
            return 0 <= d.keyPath.indexOf(m);
          })) {
            for (var g = 0; g < r.length; ++g) if (r.indexOf(d.keyPath[g]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, g) {
          return d.keyPath.length - g.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== Fe) {
          var i = n.keyPath.slice(0, r.length);
          return this.where(i).equals(i.map(function(g) {
            return e[g];
          }));
        }
        !n && pe && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, g) {
          return H(d, g) === 0;
        }
        var u = r.reduce(function(f, g) {
          var m = f[0], E = f[1], f = a[g], O = e[g];
          return [m || f, m || !f ? Ue(E, f && f.multi ? function(p) {
            return p = ve(p, g), G(p) && p.some(function(v) {
              return s(O, v);
            });
          } : function(p) {
            return s(O, ve(p, g));
          }) : E];
        }, [null, null]), i = u[0], u = u[1];
        return i ? this.where(i.name).equals(e[i.keyPath]).filter(u) : n ? this.filter(u) : this.where(r).equals("");
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
        var r, n = this.db, a = this.name;
        function s() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof cn && (function(g, m) {
          if (typeof m != "function" && m !== null) throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
          function E() {
            this.constructor = g;
          }
          o(g, m), g.prototype = m === null ? Object.create(m) : (E.prototype = m.prototype, new E());
        }(s, r = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var i = /* @__PURE__ */ new Set(), u = e.prototype; u; u = ge(u)) Object.getOwnPropertyNames(u).forEach(function(g) {
          return i.add(g);
        });
        function d(g) {
          if (!g) return g;
          var m, E = Object.create(e.prototype);
          for (m in g) if (!i.has(m)) try {
            E[m] = g[m];
          } catch {
          }
          return E;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, X.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          te(this, e);
        });
      }, X.prototype.add = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: r != null ? [r] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? j.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (i) try {
            ue(e, i, d);
          } catch {
          }
          return d;
        });
      }, X.prototype.update = function(e, r) {
        return typeof e != "object" || G(e) ? this.where(":id").equals(e).modify(r) : (e = ve(e, this.schema.primKey.keyPath), e === void 0 ? q(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(r));
      }, X.prototype.put = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [u], keys: r != null ? [r] : null });
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
        var r = this;
        return this._trans("readwrite", function(n) {
          return r.core.mutate({ trans: n, type: "delete", keys: [e] });
        }).then(function(n) {
          return n.numFailures ? j.reject(n.failures[0]) : void 0;
        });
      }, X.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(r) {
          return e.core.mutate({ trans: r, type: "deleteRange", range: on });
        }).then(function(r) {
          return r.numFailures ? j.reject(r.failures[0]) : void 0;
        });
      }, X.prototype.bulkGet = function(e) {
        var r = this;
        return this._trans("readonly", function(n) {
          return r.core.getMany({ keys: e, trans: n }).then(function(a) {
            return a.map(function(s) {
              return r.hook.reading.fire(s);
            });
          });
        });
      }, X.prototype.bulkAdd = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, i = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var g = e.length, m = m && d ? e.map(Mt(m)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: m, wantResults: i }).then(function(v) {
            var f = v.numFailures, O = v.results, p = v.lastResult, v = v.failures;
            if (f === 0) return i ? O : p;
            throw new Je("".concat(a.name, ".bulkAdd(): ").concat(f, " of ").concat(g, " operations failed"), v);
          });
        });
      }, X.prototype.bulkPut = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, i = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var g = e.length, m = m && d ? e.map(Mt(m)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: m, wantResults: i }).then(function(v) {
            var f = v.numFailures, O = v.results, p = v.lastResult, v = v.failures;
            if (f === 0) return i ? O : p;
            throw new Je("".concat(a.name, ".bulkPut(): ").concat(f, " of ").concat(g, " operations failed"), v);
          });
        });
      }, X.prototype.bulkUpdate = function(e) {
        var r = this, n = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), i = [];
        return this._trans("readwrite", function(u) {
          return n.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
            var g = [], m = [];
            e.forEach(function(f, O) {
              var p = f.key, v = f.changes, S = d[O];
              if (S) {
                for (var y = 0, A = Object.keys(v); y < A.length; y++) {
                  var P = A[y], D = v[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (H(D, p) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ue(S, P, D);
                }
                i.push(O), g.push(p), m.push(S);
              }
            });
            var E = g.length;
            return n.mutate({ trans: u, type: "put", keys: g, values: m, updates: { keys: a, changeSpecs: s } }).then(function(f) {
              var O = f.numFailures, p = f.failures;
              if (O === 0) return E;
              for (var v = 0, S = Object.keys(p); v < S.length; v++) {
                var y, A = S[v], P = i[Number(A)];
                P != null && (y = p[A], delete p[A], p[P] = y);
              }
              throw new Je("".concat(r.name, ".bulkUpdate(): ").concat(O, " of ").concat(E, " operations failed"), p);
            });
          });
        });
      }, X.prototype.bulkDelete = function(e) {
        var r = this, n = e.length;
        return this._trans("readwrite", function(a) {
          return r.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(u) {
          var s = u.numFailures, i = u.lastResult, u = u.failures;
          if (s === 0) return i;
          throw new Je("".concat(r.name, ".bulkDelete(): ").concat(s, " of ").concat(n, " operations failed"), u);
        });
      }, X);
      function X() {
      }
      function ht(e) {
        function r(u, d) {
          if (d) {
            for (var g = arguments.length, m = new Array(g - 1); --g; ) m[g - 1] = arguments[g];
            return n[u].subscribe.apply(null, m), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
        r.addEventType = i;
        for (var a = 1, s = arguments.length; a < s; ++a) i(arguments[a]);
        return r;
        function i(u, d, g) {
          if (typeof u != "object") {
            var m;
            d = d || ea;
            var E = { subscribers: [], fire: g = g || Q, subscribe: function(f) {
              E.subscribers.indexOf(f) === -1 && (E.subscribers.push(f), E.fire = d(E.fire, f));
            }, unsubscribe: function(f) {
              E.subscribers = E.subscribers.filter(function(O) {
                return O !== f;
              }), E.fire = E.subscribers.reduce(d, g);
            } };
            return n[u] = r[u] = E;
          }
          C(m = u).forEach(function(f) {
            var O = m[f];
            if (G(O)) i(f, m[f][0], m[f][1]);
            else {
              if (O !== "asap") throw new L.InvalidArgument("Invalid event config");
              var p = i(f, ct, function() {
                for (var v = arguments.length, S = new Array(v); v--; ) S[v] = arguments[v];
                p.subscribers.forEach(function(y) {
                  Vr(function() {
                    y.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function gt(e, r) {
        return Ye(r).from({ prototype: e }), r;
      }
      function rt(e, r) {
        return !(e.filter || e.algorithm || e.or) && (r ? e.justLimit : !e.replayFilter);
      }
      function yr(e, r) {
        e.filter = Ue(e.filter, r);
      }
      function br(e, r, n) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Ue(a(), r());
        } : r, e.justLimit = n && !a;
      }
      function Kt(e, r) {
        if (e.isPrimKey) return r.primaryKey;
        var n = r.getIndexByKeyPath(e.index);
        if (!n) throw new L.Schema("KeyPath " + e.index + " on object store " + r.name + " is not indexed");
        return n;
      }
      function fn(e, r, n) {
        var a = Kt(e, r.schema);
        return r.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Gt(e, r, n, a) {
        var s = e.replayFilter ? Ue(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var i = {}, u = function(d, g, m) {
            var E, f;
            s && !s(g, m, function(O) {
              return g.stop(O);
            }, function(O) {
              return g.fail(O);
            }) || ((f = "" + (E = g.primaryKey)) == "[object ArrayBuffer]" && (f = "" + new Uint8Array(E)), ie(i, f) || (i[f] = !0, r(d, g, m)));
          };
          return Promise.all([e.or._iterate(u, n), hn(fn(e, a, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return hn(fn(e, a, n), Ue(e.algorithm, s), r, !e.keysOnly && e.valueMapper);
      }
      function hn(e, r, n, a) {
        var s = Z(a ? function(i, u, d) {
          return n(a(i), u, d);
        } : n);
        return e.then(function(i) {
          if (i) return i.start(function() {
            var u = function() {
              return i.continue();
            };
            r && !r(i, function(d) {
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
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var n = r.add;
          if (G(n)) return b(b([], G(e) ? e : [], !0), n).sort();
          if (typeof n == "number") return (Number(e) || 0) + n;
          if (typeof n == "bigint") try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
          throw new TypeError("Invalid term ".concat(n));
        }
        if (r.remove !== void 0) {
          var a = r.remove;
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
        return n = (n = r.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? r.replacePrefix[1] + e.substring(n.length) : e;
      }, gn);
      function gn(e) {
        this["@@propmod"] = e;
      }
      var oa = (V.prototype._read = function(e, r) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, q.bind(null, n.error)) : n.table._trans("readonly", e).then(r);
      }, V.prototype._write = function(e) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, q.bind(null, r.error)) : r.table._trans("readwrite", e, "locked");
      }, V.prototype._addAlgorithm = function(e) {
        var r = this._ctx;
        r.algorithm = Ue(r.algorithm, e);
      }, V.prototype._iterate = function(e, r) {
        return Gt(this._ctx, e, r, this._ctx.table.core);
      }, V.prototype.clone = function(e) {
        var r = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && te(n, e), r._ctx = n, r;
      }, V.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, V.prototype.each = function(e) {
        var r = this._ctx;
        return this._read(function(n) {
          return Gt(r, e, n, r.table.core);
        });
      }, V.prototype.count = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx, s = a.table.core;
          if (rt(a, !0)) return s.count({ trans: n, query: { index: Kt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var i = 0;
          return Gt(a, function() {
            return ++i, !1;
          }, n, s).then(function() {
            return i;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, r) {
        var n = e.split(".").reverse(), a = n[0], s = n.length - 1;
        function i(g, m) {
          return m ? i(g[n[m]], m - 1) : g[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(g, m) {
          return H(i(g, s), i(m, s)) * u;
        }
        return this.toArray(function(g) {
          return g.sort(d);
        }).then(r);
      }, V.prototype.toArray = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx;
          if (a.dir === "next" && rt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, i = Kt(a, a.table.core.schema);
            return a.table.core.query({ trans: n, limit: a.limit, values: !0, query: { index: i, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Gt(a, function(d) {
            return u.push(d);
          }, n, a.table.core).then(function() {
            return u;
          });
        }, e);
      }, V.prototype.offset = function(e) {
        var r = this._ctx;
        return e <= 0 || (r.offset += e, rt(r) ? br(r, function() {
          var n = e;
          return function(a, s) {
            return n === 0 || (n === 1 ? --n : s(function() {
              a.advance(n), n = 0;
            }), !1);
          };
        }) : br(r, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, V.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), br(this._ctx, function() {
          var r = e;
          return function(n, a, s) {
            return --r <= 0 && a(s), 0 <= r;
          };
        }, !0), this;
      }, V.prototype.until = function(e, r) {
        return yr(this._ctx, function(n, a, s) {
          return !e(n.value) || (a(s), r);
        }), this;
      }, V.prototype.first = function(e) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(e);
      }, V.prototype.last = function(e) {
        return this.reverse().first(e);
      }, V.prototype.filter = function(e) {
        var r;
        return yr(this._ctx, function(n) {
          return e(n.value);
        }), (r = this._ctx).isMatch = Ue(r.isMatch, e), this;
      }, V.prototype.and = function(e) {
        return this.filter(e);
      }, V.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, V.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, V.prototype.desc = function() {
        return this.reverse();
      }, V.prototype.eachKey = function(e) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(n, a) {
          e(a.key, a);
        });
      }, V.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, V.prototype.eachPrimaryKey = function(e) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(n, a) {
          e(a.primaryKey, a);
        });
      }, V.prototype.keys = function(e) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var n = [];
        return this.each(function(a, s) {
          n.push(s.key);
        }).then(function() {
          return n;
        }).then(e);
      }, V.prototype.primaryKeys = function(e) {
        var r = this._ctx;
        if (r.dir === "next" && rt(r, !0) && 0 < r.limit) return this._read(function(a) {
          var s = Kt(r, r.table.core.schema);
          return r.table.core.query({ trans: a, values: !1, limit: r.limit, query: { index: s, range: r.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        r.keysOnly = !r.isMatch;
        var n = [];
        return this.each(function(a, s) {
          n.push(s.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, V.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, V.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(e);
      }, V.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, V.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var r = {};
        return yr(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = ie(r, a);
          return r[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var r = this, n = this._ctx;
        return this._write(function(a) {
          var s, i, u;
          u = typeof e == "function" ? e : (s = C(e), i = s.length, function(y) {
            for (var A = !1, P = 0; P < i; ++P) {
              var D = s[P], N = e[D], R = ve(y, D);
              N instanceof pt ? (ue(y, D, N.execute(R)), A = !0) : R !== N && (ue(y, D, N), A = !0);
            }
            return A;
          });
          var d = n.table.core, f = d.schema.primaryKey, g = f.outbound, m = f.extractKey, E = 200, f = r.db._options.modifyChunkSize;
          f && (E = typeof f == "object" ? f[d.name] || f["*"] || 200 : f);
          function O(y, D) {
            var P = D.failures, D = D.numFailures;
            v += y - D;
            for (var N = 0, R = C(P); N < R.length; N++) {
              var k = R[N];
              p.push(P[k]);
            }
          }
          var p = [], v = 0, S = [];
          return r.clone().primaryKeys().then(function(y) {
            function A(D) {
              var N = Math.min(E, y.length - D);
              return d.getMany({ trans: a, keys: y.slice(D, D + N), cache: "immutable" }).then(function(R) {
                for (var k = [], I = [], T = g ? [] : null, $ = [], x = 0; x < N; ++x) {
                  var M = R[x], F = { value: $e(M), primKey: y[D + x] };
                  u.call(F, F.value, F) !== !1 && (F.value == null ? $.push(y[D + x]) : g || H(m(M), m(F.value)) === 0 ? (I.push(F.value), g && T.push(y[D + x])) : ($.push(y[D + x]), k.push(F.value)));
                }
                return Promise.resolve(0 < k.length && d.mutate({ trans: a, type: "add", values: k }).then(function(U) {
                  for (var z in U.failures) $.splice(parseInt(z), 1);
                  O(k.length, U);
                })).then(function() {
                  return (0 < I.length || P && typeof e == "object") && d.mutate({ trans: a, type: "put", keys: T, values: I, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O(I.length, U);
                  });
                }).then(function() {
                  return (0 < $.length || P && e === vr) && d.mutate({ trans: a, type: "delete", keys: $, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O($.length, U);
                  });
                }).then(function() {
                  return y.length > D + N && A(D + E);
                });
              });
            }
            var P = rt(n) && n.limit === 1 / 0 && (typeof e != "function" || e === vr) && { index: n.index, range: n.range };
            return A(0).then(function() {
              if (0 < p.length) throw new Pt("Error modifying one or more objects", p, v, S);
              return y.length;
            });
          });
        });
      }, V.prototype.delete = function() {
        var e = this._ctx, r = e.range;
        return rt(e) && (e.isPrimKey || r.type === 3) ? this._write(function(n) {
          var a = e.table.core.schema.primaryKey, s = r;
          return e.table.core.count({ trans: n, query: { index: a, range: s } }).then(function(i) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: s }).then(function(u) {
              var d = u.failures;
              if (u.lastResult, u.results, u = u.numFailures, u) throw new Pt("Could not delete some values", Object.keys(d).map(function(g) {
                return d[g];
              }), i - u);
              return i - u;
            });
          });
        }) : this.modify(vr);
      }, V);
      function V() {
      }
      var vr = function(e, r) {
        return r.value = null;
      };
      function ia(e, r) {
        return e < r ? -1 : e === r ? 0 : 1;
      }
      function ca(e, r) {
        return r < e ? -1 : e === r ? 0 : 1;
      }
      function le(e, r, n) {
        return e = e instanceof mn ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(r), e;
      }
      function nt(e) {
        return new e.Collection(e, function() {
          return pn("");
        }).limit(0);
      }
      function Bt(e, r, n, a) {
        var s, i, u, d, g, m, E, f = n.length;
        if (!n.every(function(v) {
          return typeof v == "string";
        })) return le(e, sn);
        function O(v) {
          s = v === "next" ? function(y) {
            return y.toUpperCase();
          } : function(y) {
            return y.toLowerCase();
          }, i = v === "next" ? function(y) {
            return y.toLowerCase();
          } : function(y) {
            return y.toUpperCase();
          }, u = v === "next" ? ia : ca;
          var S = n.map(function(y) {
            return { lower: i(y), upper: s(y) };
          }).sort(function(y, A) {
            return u(y.lower, A.lower);
          });
          d = S.map(function(y) {
            return y.upper;
          }), g = S.map(function(y) {
            return y.lower;
          }), E = (m = v) === "next" ? "" : a;
        }
        O("next"), e = new e.Collection(e, function() {
          return Ie(d[0], g[f - 1] + a);
        }), e._ondirectionchange = function(v) {
          O(v);
        };
        var p = 0;
        return e._addAlgorithm(function(v, S, y) {
          var A = v.key;
          if (typeof A != "string") return !1;
          var P = i(A);
          if (r(P, g, p)) return !0;
          for (var D = null, N = p; N < f; ++N) {
            var R = function(k, I, T, $, x, M) {
              for (var F = Math.min(k.length, $.length), U = -1, z = 0; z < F; ++z) {
                var de = I[z];
                if (de !== $[z]) return x(k[z], T[z]) < 0 ? k.substr(0, z) + T[z] + T.substr(z + 1) : x(k[z], $[z]) < 0 ? k.substr(0, z) + $[z] + T.substr(z + 1) : 0 <= U ? k.substr(0, U) + I[U] + T.substr(U + 1) : null;
                x(k[z], de) < 0 && (U = z);
              }
              return F < $.length && M === "next" ? k + T.substr(k.length) : F < k.length && M === "prev" ? k.substr(0, T.length) : U < 0 ? null : k.substr(0, U) + $[U] + T.substr(U + 1);
            }(A, P, d[N], g[N], u, m);
            R === null && D === null ? p = N + 1 : (D === null || 0 < u(D, R)) && (D = R);
          }
          return S(D !== null ? function() {
            v.continue(D + E);
          } : y), !1;
        }), e;
      }
      function Ie(e, r, n, a) {
        return { type: 2, lower: e, upper: r, lowerOpen: n, upperOpen: a };
      }
      function pn(e) {
        return { type: 1, lower: e, upper: e };
      }
      var mn = (Object.defineProperty(ne.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ne.prototype.between = function(e, r, n, a) {
        n = n !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, r) || this._cmp(e, r) === 0 && (n || a) && (!n || !a) ? nt(this) : new this.Collection(this, function() {
            return Ie(e, r, !n, !a);
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
          return Ie(e, void 0, !0);
        });
      }, ne.prototype.aboveOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Ie(e, void 0, !1);
        });
      }, ne.prototype.below = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Ie(void 0, e, !1, !0);
        });
      }, ne.prototype.belowOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Ie(void 0, e);
        });
      }, ne.prototype.startsWith = function(e) {
        return typeof e != "string" ? le(this, sn) : this.between(e, e + Fe, !0, !0);
      }, ne.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Bt(this, function(r, n) {
          return r.indexOf(n[0]) === 0;
        }, [e], Fe);
      }, ne.prototype.equalsIgnoreCase = function(e) {
        return Bt(this, function(r, n) {
          return r === n[0];
        }, [e], "");
      }, ne.prototype.anyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? nt(this) : Bt(this, function(r, n) {
          return n.indexOf(r) !== -1;
        }, e, "");
      }, ne.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? nt(this) : Bt(this, function(r, n) {
          return n.some(function(a) {
            return r.indexOf(a) === 0;
          });
        }, e, Fe);
      }, ne.prototype.anyOf = function() {
        var e = this, r = Ee.apply(Qe, arguments), n = this._cmp;
        try {
          r.sort(n);
        } catch {
          return le(this, we);
        }
        if (r.length === 0) return nt(this);
        var a = new this.Collection(this, function() {
          return Ie(r[0], r[r.length - 1]);
        });
        a._ondirectionchange = function(i) {
          n = i === "next" ? e._ascending : e._descending, r.sort(n);
        };
        var s = 0;
        return a._addAlgorithm(function(i, u, d) {
          for (var g = i.key; 0 < n(g, r[s]); ) if (++s === r.length) return u(d), !1;
          return n(g, r[s]) === 0 || (u(function() {
            i.continue(r[s]);
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
        var r = e.reduce(function(n, a) {
          return n ? n.concat([[n[n.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return r.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, ne.prototype.inAnyRange = function(A, r) {
        var n = this, a = this._cmp, s = this._ascending, i = this._descending, u = this._min, d = this._max;
        if (A.length === 0) return nt(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return le(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", L.InvalidArgument);
        var g = !r || r.includeLowers !== !1, m = r && r.includeUppers === !0, E, f = s;
        function O(P, D) {
          return f(P[0], D[0]);
        }
        try {
          (E = A.reduce(function(P, D) {
            for (var N = 0, R = P.length; N < R; ++N) {
              var k = P[N];
              if (a(D[0], k[1]) < 0 && 0 < a(D[1], k[0])) {
                k[0] = u(k[0], D[0]), k[1] = d(k[1], D[1]);
                break;
              }
            }
            return N === R && P.push(D), P;
          }, [])).sort(O);
        } catch {
          return le(this, we);
        }
        var p = 0, v = m ? function(P) {
          return 0 < s(P, E[p][1]);
        } : function(P) {
          return 0 <= s(P, E[p][1]);
        }, S = g ? function(P) {
          return 0 < i(P, E[p][0]);
        } : function(P) {
          return 0 <= i(P, E[p][0]);
        }, y = v, A = new this.Collection(this, function() {
          return Ie(E[0][0], E[E.length - 1][1], !g, !m);
        });
        return A._ondirectionchange = function(P) {
          f = P === "next" ? (y = v, s) : (y = S, i), E.sort(O);
        }, A._addAlgorithm(function(P, D, N) {
          for (var R, k = P.key; y(k); ) if (++p === E.length) return D(N), !1;
          return !v(R = k) && !S(R) || (n._cmp(k, E[p][1]) === 0 || n._cmp(k, E[p][0]) === 0 || D(function() {
            f === s ? P.continue(E[p][0]) : P.continue(E[p][1]);
          }), !1);
        }), A;
      }, ne.prototype.startsWithAnyOf = function() {
        var e = Ee.apply(Qe, arguments);
        return e.every(function(r) {
          return typeof r == "string";
        }) ? e.length === 0 ? nt(this) : this.inAnyRange(e.map(function(r) {
          return [r, r + Fe];
        })) : le(this, "startsWithAnyOf() only works with strings");
      }, ne);
      function ne() {
      }
      function me(e) {
        return Z(function(r) {
          return mt(r), e(r.target.error), !1;
        });
      }
      function mt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var yt = "storagemutated", Er = "x-storagemutated-1", Te = ht(null, yt), ua = (ye.prototype._lock = function() {
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
        var r = this;
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
          mt(s), r._reject(e.error);
        }), e.onabort = Z(function(s) {
          mt(s), r.active && r._reject(new L.Abort(e.error)), r.active = !1, r.on("abort").fire(s);
        }), e.oncomplete = Z(function() {
          r.active = !1, r._resolve(), "mutatedParts" in e && Te.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ye.prototype._promise = function(e, r, n) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return q(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return q(new L.TransactionInactive());
        if (this._locked()) return new j(function(i, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, r, n).then(i, u);
          }, B]);
        });
        if (n) return De(function() {
          var i = new j(function(u, d) {
            a._lock();
            var g = r(u, d, a);
            g && g.then && g.then(u, d);
          });
          return i.finally(function() {
            return a._unlock();
          }), i._lib = !0, i;
        });
        var s = new j(function(i, u) {
          var d = r(i, u, a);
          d && d.then && d.then(i, u);
        });
        return s._lib = !0, s;
      }, ye.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ye.prototype.waitFor = function(e) {
        var r, n = this._root(), a = j.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return a;
        }) : (n._waitingFor = a, n._waitingQueue = [], r = n.idbtrans.objectStore(n.storeNames[0]), function i() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (r.get(-1 / 0).onsuccess = i);
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
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (ie(r, e)) return r[e];
        var n = this.schema[e];
        if (!n) throw new L.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), r[e] = n;
      }, ye);
      function ye() {
      }
      function wr(e, r, n, a, s, i, u) {
        return { name: e, keyPath: r, unique: n, multi: a, auto: s, compound: i, src: (n && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + yn(r) };
      }
      function yn(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Sr(e, r, n) {
        return { name: e, primKey: r, indexes: n, mappedClass: null, idxByName: (a = function(s) {
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
        } : typeof e == "string" ? (r = e).split(".").length === 1 ? function(n) {
          return n[r];
        } : function(n) {
          return ve(n, r);
        } : function(n) {
          return ve(n, e);
        };
        var r;
      }
      function bn(e) {
        return [].slice.call(e);
      }
      var la = 0;
      function vt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function da(e, r, g) {
        function a(y) {
          if (y.type === 3) return null;
          if (y.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var p = y.lower, v = y.upper, S = y.lowerOpen, y = y.upperOpen;
          return p === void 0 ? v === void 0 ? null : r.upperBound(v, !!y) : v === void 0 ? r.lowerBound(p, !!S) : r.bound(p, v, !!S, !!y);
        }
        function s(O) {
          var p, v = O.name;
          return { name: v, schema: O, mutate: function(S) {
            var y = S.trans, A = S.type, P = S.keys, D = S.values, N = S.range;
            return new Promise(function(R, k) {
              R = Z(R);
              var I = y.objectStore(v), T = I.keyPath == null, $ = A === "put" || A === "add";
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
                N.type === 3 ? U.push(x = I.clear()) : U.push(x = I.delete(a(N)));
              } else {
                var T = $ ? T ? [D, P] : [D, null] : [P, null], W = T[0], se = T[1];
                if ($) for (var oe = 0; oe < M; ++oe) U.push(x = se && se[oe] !== void 0 ? I[A](W[oe], se[oe]) : I[A](W[oe])), x.onerror = F;
                else for (oe = 0; oe < M; ++oe) U.push(x = I[A](W[oe])), x.onerror = F;
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
          }, getMany: function(S) {
            var y = S.trans, A = S.keys;
            return new Promise(function(P, D) {
              P = Z(P);
              for (var N, R = y.objectStore(v), k = A.length, I = new Array(k), T = 0, $ = 0, x = function(U) {
                U = U.target, I[U._pos] = U.result, ++$ === T && P(I);
              }, M = me(D), F = 0; F < k; ++F) A[F] != null && ((N = R.get(A[F]))._pos = F, N.onsuccess = x, N.onerror = M, ++T);
              T === 0 && P(I);
            });
          }, get: function(S) {
            var y = S.trans, A = S.key;
            return new Promise(function(P, D) {
              P = Z(P);
              var N = y.objectStore(v).get(A);
              N.onsuccess = function(R) {
                return P(R.target.result);
              }, N.onerror = me(D);
            });
          }, query: (p = m, function(S) {
            return new Promise(function(y, A) {
              y = Z(y);
              var P, D, N, T = S.trans, R = S.values, k = S.limit, x = S.query, I = k === 1 / 0 ? void 0 : k, $ = x.index, x = x.range, T = T.objectStore(v), $ = $.isPrimaryKey ? T : T.index($.name), x = a(x);
              if (k === 0) return y({ result: [] });
              p ? ((I = R ? $.getAll(x, I) : $.getAllKeys(x, I)).onsuccess = function(M) {
                return y({ result: M.target.result });
              }, I.onerror = me(A)) : (P = 0, D = !R && "openKeyCursor" in $ ? $.openKeyCursor(x) : $.openCursor(x), N = [], D.onsuccess = function(M) {
                var F = D.result;
                return F ? (N.push(R ? F.value : F.primaryKey), ++P === k ? y({ result: N }) : void F.continue()) : y({ result: N });
              }, D.onerror = me(A));
            });
          }), openCursor: function(S) {
            var y = S.trans, A = S.values, P = S.query, D = S.reverse, N = S.unique;
            return new Promise(function(R, k) {
              R = Z(R);
              var $ = P.index, I = P.range, T = y.objectStore(v), T = $.isPrimaryKey ? T : T.index($.name), $ = D ? N ? "prevunique" : "prev" : N ? "nextunique" : "next", x = !A && "openKeyCursor" in T ? T.openKeyCursor(a(I), $) : T.openCursor(a(I), $);
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
          }, count: function(S) {
            var y = S.query, A = S.trans, P = y.index, D = y.range;
            return new Promise(function(N, R) {
              var k = A.objectStore(v), I = P.isPrimaryKey ? k : k.index(P.name), k = a(D), I = k ? I.count(k) : I.count();
              I.onsuccess = Z(function(T) {
                return N(T.target.result);
              }), I.onerror = me(R);
            });
          } };
        }
        var i, u, d, E = (u = g, d = bn((i = e).objectStoreNames), { schema: { name: i.name, tables: d.map(function(O) {
          return u.objectStore(O);
        }).map(function(O) {
          var p = O.keyPath, y = O.autoIncrement, v = G(p), S = {}, y = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: p == null, compound: v, keyPath: p, autoIncrement: y, unique: !0, extractKey: Or(p) }, indexes: bn(O.indexNames).map(function(A) {
            return O.index(A);
          }).map(function(N) {
            var P = N.name, D = N.unique, R = N.multiEntry, N = N.keyPath, R = { name: P, compound: G(N), keyPath: N, unique: D, multiEntry: R, extractKey: Or(N) };
            return S[vt(N)] = R;
          }), getIndexByKeyPath: function(A) {
            return S[vt(A)];
          } };
          return S[":id"] = y.primaryKey, p != null && (S[vt(p)] = y.primaryKey), y;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), g = E.schema, m = E.hasGetAll, E = g.tables.map(s), f = {};
        return E.forEach(function(O) {
          return f[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!f[O]) throw new Error("Table '".concat(O, "' not found"));
          return f[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: bt(r), schema: g };
      }
      function fa(e, r, n, a) {
        var s = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (a = da(r, s, a), e.dbcore.reduce(function(i, u) {
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
      function Wt(e, r, n, a) {
        n.forEach(function(s) {
          var i = a[s];
          r.forEach(function(u) {
            var d = function g(m, E) {
              return Fn(m, E) || (m = ge(m)) && g(m, E);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(g) {
              _t(this, s, { value: g, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, i));
          });
        });
      }
      function _r(e, r) {
        r.forEach(function(n) {
          for (var a in n) n[a] instanceof e.Table && delete n[a];
        });
      }
      function ha(e, r) {
        return e._cfg.version - r._cfg.version;
      }
      function ga(e, r, n, a) {
        var s = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Sr("$meta", En("")[0], []), e._storeNames.push("$meta"));
        var i = e._createTransaction("readwrite", e._storeNames, s);
        i.create(n), i._completion.catch(a);
        var u = i._reject.bind(i), d = B.transless || B;
        De(function() {
          return B.trans = i, B.transless = d, r !== 0 ? (Lt(e, n), m = r, ((g = i).storeNames.includes("$meta") ? g.table("$meta").get("version").then(function(E) {
            return E ?? m;
          }) : j.resolve(m)).then(function(E) {
            return O = E, p = i, v = n, S = [], E = (f = e)._versions, y = f._dbSchema = Ut(0, f.idbdb, v), (E = E.filter(function(A) {
              return A._cfg.version >= O;
            })).length !== 0 ? (E.forEach(function(A) {
              S.push(function() {
                var P = y, D = A._cfg.dbschema;
                zt(f, P, v), zt(f, D, v), y = f._dbSchema = D;
                var N = Ar(P, D);
                N.add.forEach(function($) {
                  Pr(v, $[0], $[1].primKey, $[1].indexes);
                }), N.change.forEach(function($) {
                  if ($.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var x = v.objectStore($.name);
                  $.add.forEach(function(M) {
                    return Ft(x, M);
                  }), $.change.forEach(function(M) {
                    x.deleteIndex(M.name), Ft(x, M);
                  }), $.del.forEach(function(M) {
                    return x.deleteIndex(M);
                  });
                });
                var R = A._cfg.contentUpgrade;
                if (R && A._cfg.version > O) {
                  Lt(f, v), p._memoizedTables = {};
                  var k = Yr(D);
                  N.del.forEach(function($) {
                    k[$] = P[$];
                  }), _r(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], C(k), k), p.schema = k;
                  var I, T = ar(R);
                  return T && et(), N = j.follow(function() {
                    var $;
                    (I = R(p)) && T && ($ = Ne.bind(null, null), I.then($, $));
                  }), I && typeof I.then == "function" ? j.resolve(I) : N.then(function() {
                    return I;
                  });
                }
              }), S.push(function(P) {
                var D, N, R = A._cfg.dbschema;
                D = R, N = P, [].slice.call(N.db.objectStoreNames).forEach(function(k) {
                  return D[k] == null && N.db.deleteObjectStore(k);
                }), _r(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), p.schema = f._dbSchema;
              }), S.push(function(P) {
                f.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(f.idbdb.version / 10) === A._cfg.version ? (f.idbdb.deleteObjectStore("$meta"), delete f._dbSchema.$meta, f._storeNames = f._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return S.length ? j.resolve(S.shift()(p.idbtrans)).then(A) : j.resolve();
            }().then(function() {
              vn(y, v);
            })) : j.resolve();
            var f, O, p, v, S, y;
          }).catch(u)) : (C(s).forEach(function(E) {
            Pr(n, E, s[E].primKey, s[E].indexes);
          }), Lt(e, n), void j.follow(function() {
            return e.on.populate.fire(i);
          }).catch(u));
          var g, m;
        });
      }
      function pa(e, r) {
        vn(e._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var n = Ut(0, e.idbdb, r);
        zt(e, e._dbSchema, r);
        for (var a = 0, s = Ar(n, e._dbSchema).change; a < s.length; a++) {
          var i = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = r.objectStore(u.name);
            u.add.forEach(function(g) {
              pe && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(g.src)), Ft(d, g);
            });
          }(s[a]);
          if (typeof i == "object") return i.value;
        }
      }
      function Ar(e, r) {
        var n, a = { del: [], add: [], change: [] };
        for (n in e) r[n] || a.del.push(n);
        for (n in r) {
          var s = e[n], i = r[n];
          if (s) {
            var u = { name: n, def: i, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || s.primKey.auto !== i.primKey.auto) u.recreate = !0, a.change.push(u);
            else {
              var d = s.idxByName, g = i.idxByName, m = void 0;
              for (m in d) g[m] || u.del.push(m);
              for (m in g) {
                var E = d[m], f = g[m];
                E ? E.src !== f.src && u.change.push(f) : u.add.push(f);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && a.change.push(u);
            }
          } else a.add.push([n, i]);
        }
        return a;
      }
      function Pr(e, r, n, a) {
        var s = e.db.createObjectStore(r, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return a.forEach(function(i) {
          return Ft(s, i);
        }), s;
      }
      function vn(e, r) {
        C(e).forEach(function(n) {
          r.db.objectStoreNames.contains(n) || (pe && console.debug("Dexie: Creating missing table", n), Pr(r, n, e[n].primKey, e[n].indexes));
        });
      }
      function Ft(e, r) {
        e.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Ut(e, r, n) {
        var a = {};
        return At(r.objectStoreNames, 0).forEach(function(s) {
          for (var i = n.objectStore(s), u = wr(yn(m = i.keyPath), m || "", !0, !1, !!i.autoIncrement, m && typeof m != "string", !0), d = [], g = 0; g < i.indexNames.length; ++g) {
            var E = i.index(i.indexNames[g]), m = E.keyPath, E = wr(E.name, m, !!E.unique, !!E.multiEntry, !1, m && typeof m != "string", !1);
            d.push(E);
          }
          a[s] = Sr(s, u, d);
        }), a;
      }
      function zt(e, r, n) {
        for (var a = n.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var i = a[s], u = n.objectStore(i);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var g = u.indexNames[d], m = u.index(g).keyPath, E = typeof m == "string" ? m : "[" + At(m).join("+") + "]";
            !r[i] || (m = r[i].idxByName[E]) && (m.name = g, delete r[i].idxByName[E], r[i].idxByName[g] = m);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && w.WorkerGlobalScope && w instanceof w.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function En(e) {
        return e.split(",").map(function(r, n) {
          var a = (r = r.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return wr(a, s || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), G(s), n === 0);
        });
      }
      var ma = (Ht.prototype._parseStoresSpec = function(e, r) {
        C(e).forEach(function(n) {
          if (e[n] !== null) {
            var a = En(e[n]), s = a.shift();
            if (s.unique = !0, s.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(i) {
              if (i.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!i.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), r[n] = Sr(n, s, a);
          }
        });
      }, Ht.prototype.stores = function(n) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? te(this._cfg.storesSource, n) : n;
        var n = r._versions, a = {}, s = {};
        return n.forEach(function(i) {
          te(a, i._cfg.storesSource), s = i._cfg.dbschema = {}, i._parseStoresSpec(a, s);
        }), r._dbSchema = s, _r(r, [r._allTables, r, r.Transaction.prototype]), Wt(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], C(s), s), r._storeNames = C(s), this;
      }, Ht.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = or(this._cfg.contentUpgrade || Q, e), this;
      }, Ht);
      function Ht() {
      }
      function Dr(e, r) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Se(jt, { addons: [], indexedDB: e, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Nr(e) {
        return e && typeof e.databases == "function";
      }
      function Rr(e) {
        return De(function() {
          return B.letThrough = !0, e();
        });
      }
      function Ir(e) {
        return !("from" in e);
      }
      var ae = function(e, r) {
        if (!this) {
          var n = new ae();
          return e && "d" in e && te(n, e), n;
        }
        te(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? r : e } : { d: 0 });
      };
      function Et(e, r, n) {
        var a = H(r, n);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Ir(e)) return te(e, { from: r, to: n, d: 1 });
          var s = e.l, a = e.r;
          if (H(n, e.from) < 0) return s ? Et(s, r, n) : e.l = { from: r, to: n, d: 1, l: null, r: null }, Sn(e);
          if (0 < H(r, e.to)) return a ? Et(a, r, n) : e.r = { from: r, to: n, d: 1, l: null, r: null }, Sn(e);
          H(r, e.from) < 0 && (e.from = r, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, s && !e.l && wt(e, s), a && n && wt(e, a);
        }
      }
      function wt(e, r) {
        Ir(r) || function n(a, g) {
          var i = g.from, u = g.to, d = g.l, g = g.r;
          Et(a, i, u), d && n(a, d), g && n(a, g);
        }(e, r);
      }
      function wn(e, r) {
        var n = Vt(r), a = n.next();
        if (a.done) return !1;
        for (var s = a.value, i = Vt(e), u = i.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (H(d.from, s.to) <= 0 && 0 <= H(d.to, s.from)) return !0;
          H(s.from, d.from) < 0 ? s = (a = n.next(d.from)).value : d = (u = i.next(s.from)).value;
        }
        return !1;
      }
      function Vt(e) {
        var r = Ir(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var a = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, a) for (; r.n.l && H(n, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !a || H(n, r.n.to) <= 0) return { value: r.n, done: !1 };
            case 2:
              if (r.n.r) {
                r.s = 3, r = { up: r, n: r.n.r, s: 0 };
                continue;
              }
            case 3:
              r = r.up;
          }
          return { done: !0 };
        } };
      }
      function Sn(e) {
        var r, n, a = (((r = e.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (r = s == "r" ? "l" : "r", n = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], n[s] = a[r], (e[r] = n).d = On(n)), e.d = On(e);
      }
      function On(n) {
        var r = n.r, n = n.l;
        return (r ? n ? Math.max(r.d, n.d) : r.d : n ? n.d : 0) + 1;
      }
      function Yt(e, r) {
        return C(r).forEach(function(n) {
          e[n] ? wt(e[n], r[n]) : e[n] = function a(s) {
            var i, u, d = {};
            for (i in s) ie(s, i) && (u = s[i], d[i] = !u || typeof u != "object" || Xr.has(u.constructor) ? u : a(u));
            return d;
          }(r[n]);
        }), e;
      }
      function Tr(e, r) {
        return e.all || r.all || Object.keys(e).some(function(n) {
          return r[n] && wn(r[n], e[n]);
        });
      }
      be(ae.prototype, ((fe = { add: function(e) {
        return wt(this, e), this;
      }, addKey: function(e) {
        return Et(this, e, e), this;
      }, addKeys: function(e) {
        var r = this;
        return e.forEach(function(n) {
          return Et(r, n, n);
        }), this;
      }, hasKey: function(e) {
        var r = Vt(this).next(e).value;
        return r && H(r.from, e) <= 0 && 0 <= H(r.to, e);
      } })[nr] = function() {
        return Vt(this);
      }, fe));
      var ze = {}, xr = {}, kr = !1;
      function Qt(e) {
        Yt(xr, e), kr || (kr = !0, setTimeout(function() {
          kr = !1, Cr(xr, !(xr = {}));
        }, 0));
      }
      function Cr(e, r) {
        r === void 0 && (r = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(ze); a < s.length; a++) _n(u = s[a], e, n, r);
        else for (var i in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
          d && (i = d[1], d = d[2], (u = ze["idb://".concat(i, "/").concat(d)]) && _n(u, e, n, r));
        }
        n.forEach(function(g) {
          return g();
        });
      }
      function _n(e, r, n, a) {
        for (var s = [], i = 0, u = Object.entries(e.queries.query); i < u.length; i++) {
          for (var d = u[i], g = d[0], m = [], E = 0, f = d[1]; E < f.length; E++) {
            var O = f[E];
            Tr(r, O.obsSet) ? O.subscribers.forEach(function(y) {
              return n.add(y);
            }) : a && m.push(O);
          }
          a && s.push([g, m]);
        }
        if (a) for (var p = 0, v = s; p < v.length; p++) {
          var S = v[p], g = S[0], m = S[1];
          e.queries.query[g] = m;
        }
      }
      function ya(e) {
        var r = e._state, n = e._deps.indexedDB;
        if (r.isBeingOpened || e.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? q(r.dbOpenError) : e;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var a = r.openCanceller, s = Math.round(10 * e.verno), i = !1;
        function u() {
          if (r.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new j(function(O, p) {
            if (u(), !n) throw new L.MissingAPI();
            var v = e.name, S = r.autoSchema || !s ? n.open(v) : n.open(v, s);
            if (!S) throw new L.MissingAPI();
            S.onerror = me(p), S.onblocked = Z(e._fireOnBlocked), S.onupgradeneeded = Z(function(y) {
              var A;
              E = S.transaction, r.autoSchema && !e._options.allowEmptyDB ? (S.onerror = mt, E.abort(), S.result.close(), (A = n.deleteDatabase(v)).onsuccess = A.onerror = Z(function() {
                p(new L.NoSuchDatabase("Database ".concat(v, " doesnt exist")));
              })) : (E.onerror = me(p), y = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion, f = y < 1, e.idbdb = S.result, i && pa(e, E), ga(e, y / 10, E, p));
            }, p), S.onsuccess = Z(function() {
              E = null;
              var y, A, P, D, N, R = e.idbdb = S.result, k = At(R.objectStoreNames);
              if (0 < k.length) try {
                var I = R.transaction((D = k).length === 1 ? D[0] : D, "readonly");
                if (r.autoSchema) A = R, P = I, (y = e).verno = A.version / 10, P = y._dbSchema = Ut(0, A, P), y._storeNames = At(A.objectStoreNames, 0), Wt(y, [y._allTables], C(P), P);
                else if (zt(e, e._dbSchema, I), ((N = Ar(Ut(0, (N = e).idbdb, I), N._dbSchema)).add.length || N.change.some(function(T) {
                  return T.add.length || T.change.length;
                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), R.close(), s = R.version + 1, i = !0, O(d());
                Lt(e, I);
              } catch {
              }
              tt.push(e), R.onversionchange = Z(function(T) {
                r.vcFired = !0, e.on("versionchange").fire(T);
              }), R.onclose = Z(function(T) {
                e.on("close").fire(T);
              }), f && (N = e._deps, I = v, R = N.indexedDB, N = N.IDBKeyRange, Nr(R) || I === jt || Dr(R, N).put({ name: I }).catch(Q)), O();
            }, p);
          }).catch(function(O) {
            switch (O?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return j.reject(O);
          });
        }
        var g, m = r.dbReadyResolve, E = null, f = !1;
        return j.race([a, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function p() {
            return indexedDB.databases().finally(O);
          }
          g = setInterval(p, 100), p();
        }).finally(function() {
          return clearInterval(g);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), r.onReadyBeingFired = [], j.resolve(Rr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < r.onReadyBeingFired.length) {
              var p = r.onReadyBeingFired.reduce(or, Q);
              return r.onReadyBeingFired = [], j.resolve(Rr(function() {
                return p(e.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          r.openCanceller === a && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(O) {
          r.dbOpenError = O;
          try {
            E && E.abort();
          } catch {
          }
          return a === r.openCanceller && e._close(), q(O);
        }).finally(function() {
          r.openComplete = !0, m();
        }).then(function() {
          var O;
          return f && (O = {}, e.tables.forEach(function(p) {
            p.schema.indexes.forEach(function(v) {
              v.name && (O["idb://".concat(e.name, "/").concat(p.name, "/").concat(v.name)] = new ae(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(p.name, "/")] = O["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new ae(-1 / 0, [[[]]]);
          }), Te(yt).fire(O), Cr(O, !0)), e;
        });
      }
      function $r(e) {
        function r(i) {
          return e.next(i);
        }
        var n = s(r), a = s(function(i) {
          return e.throw(i);
        });
        function s(i) {
          return function(g) {
            var d = i(g), g = d.value;
            return d.done ? g : g && typeof g.then == "function" ? g.then(n, a) : G(g) ? Promise.all(g).then(n, a) : n(g);
          };
        }
        return s(r)();
      }
      function Xt(e, r, n) {
        for (var a = G(e) ? e.slice() : [e], s = 0; s < n; ++s) a.push(r);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema, s = {}, i = [];
          function u(f, O, p) {
            var v = vt(f), S = s[v] = s[v] || [], y = f == null ? 0 : typeof f == "string" ? 1 : f.length, A = 0 < O, A = l(l({}, p), { name: A ? "".concat(v, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: A, keyTail: O, keyLength: y, extractKey: Or(f), unique: !A && p.unique });
            return S.push(A), A.isPrimaryKey || i.push(A), 1 < y && u(y === 2 ? f[0] : f.slice(0, y - 1), O + 1, p), S.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), A;
          }
          r = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [r];
          for (var d = 0, g = a.indexes; d < g.length; d++) {
            var m = g[d];
            u(m.keyPath, 0, m);
          }
          function E(f) {
            var O, p = f.query.index;
            return p.isVirtual ? l(l({}, f), { query: { index: p.lowLevelIndex, range: (O = f.query.range, p = p.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Xt(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, p), lowerOpen: !0, upper: Xt(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, p), upperOpen: !0 }) } }) : f;
          }
          return l(l({}, n), { schema: l(l({}, a), { primaryKey: r, indexes: i, getIndexByKeyPath: function(f) {
            return (f = s[vt(f)]) && f[0];
          } }), count: function(f) {
            return n.count(E(f));
          }, query: function(f) {
            return n.query(E(f));
          }, openCursor: function(f) {
            var O = f.query.index, p = O.keyTail, v = O.isVirtual, S = O.keyLength;
            return v ? n.openCursor(E(f)).then(function(A) {
              return A && y(A);
            }) : n.openCursor(f);
            function y(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Xt(P, f.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : f.unique ? A.continue(A.key.slice(0, S).concat(f.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                A.continuePrimaryKey(Xt(P, e.MAX_KEY, p), D);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var P = A.key;
                return S === 1 ? P[0] : P.slice(0, S);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function jr(e, r, n, a) {
        return n = n || {}, a = a || "", C(e).forEach(function(s) {
          var i, u, d;
          ie(r, s) ? (i = e[s], u = r[s], typeof i == "object" && typeof u == "object" && i && u ? (d = rr(i)) !== rr(u) ? n[a + s] = r[s] : d === "Object" ? jr(i, u, n, a + s + ".") : i !== u && (n[a + s] = r[s]) : i !== u && (n[a + s] = r[s])) : n[a + s] = void 0;
        }), C(r).forEach(function(s) {
          ie(e, s) || (n[a + s] = r[s]);
        }), n;
      }
      function Mr(e, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema.primaryKey;
          return l(l({}, n), { mutate: function(s) {
            var i = B.trans, u = i.table(r).hook, d = u.deleting, g = u.creating, m = u.updating;
            switch (s.type) {
              case "add":
                if (g.fire === Q) break;
                return i._promise("readwrite", function() {
                  return E(s);
                }, !0);
              case "put":
                if (g.fire === Q && m.fire === Q) break;
                return i._promise("readwrite", function() {
                  return E(s);
                }, !0);
              case "delete":
                if (d.fire === Q) break;
                return i._promise("readwrite", function() {
                  return E(s);
                }, !0);
              case "deleteRange":
                if (d.fire === Q) break;
                return i._promise("readwrite", function() {
                  return function f(O, p, v) {
                    return n.query({ trans: O, values: !1, query: { index: a, range: p }, limit: v }).then(function(S) {
                      var y = S.result;
                      return E({ type: "delete", keys: y, trans: O }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : y.length < v ? { failures: [], numFailures: 0, lastResult: void 0 } : f(O, l(l({}, p), { lower: y[y.length - 1], lowerOpen: !0 }), v);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return n.mutate(s);
            function E(f) {
              var O, p, v, S = B.trans, y = f.keys || Mr(a, f);
              if (!y) throw new Error("Keys missing");
              return (f = f.type === "add" || f.type === "put" ? l(l({}, f), { keys: y }) : l({}, f)).type !== "delete" && (f.values = b([], f.values)), f.keys && (f.keys = b([], f.keys)), O = n, v = y, ((p = f).type === "add" ? Promise.resolve([]) : O.getMany({ trans: p.trans, keys: v, cache: "immutable" })).then(function(A) {
                var P = y.map(function(D, N) {
                  var R, k, I, T = A[N], $ = { onerror: null, onsuccess: null };
                  return f.type === "delete" ? d.fire.call($, D, T, S) : f.type === "add" || T === void 0 ? (R = g.fire.call($, D, f.values[N], S), D == null && R != null && (f.keys[N] = D = R, a.outbound || ue(f.values[N], a.keyPath, D))) : (R = jr(T, f.values[N]), (k = m.fire.call($, R, D, T, S)) && (I = f.values[N], Object.keys(k).forEach(function(x) {
                    ie(I, x) ? I[x] = k[x] : ue(I, x, k[x]);
                  }))), $;
                });
                return n.mutate(f).then(function(D) {
                  for (var N = D.failures, R = D.results, k = D.numFailures, D = D.lastResult, I = 0; I < y.length; ++I) {
                    var T = (R || y)[I], $ = P[I];
                    T == null ? $.onerror && $.onerror(N[I]) : $.onsuccess && $.onsuccess(f.type === "put" && A[I] ? f.values[I] : T);
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
      function An(e, r, n) {
        try {
          if (!r || r.keys.length < e.length) return null;
          for (var a = [], s = 0, i = 0; s < r.keys.length && i < e.length; ++s) H(r.keys[s], e[i]) === 0 && (a.push(n ? $e(r.values[s]) : r.values[s]), ++i);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Ea = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(r) {
          var n = e.table(r);
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
      function Pn(e, r) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function Dn(e, r) {
        switch (e) {
          case "query":
            return r.values && !r.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var wa = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var r = e.schema.name, n = new ae(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, i) {
          if (B.subscr && s !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));
          return e.transaction(a, s, i);
        }, table: function(a) {
          var s = e.table(a), i = s.schema, u = i.primaryKey, f = i.indexes, d = u.extractKey, g = u.outbound, m = u.autoIncrement && f.filter(function(p) {
            return p.compound && p.keyPath.includes(u.keyPath);
          }), E = l(l({}, s), { mutate: function(p) {
            function v(x) {
              return x = "idb://".concat(r, "/").concat(a, "/").concat(x), D[x] || (D[x] = new ae());
            }
            var S, y, A, P = p.trans, D = p.mutatedParts || (p.mutatedParts = {}), N = v(""), R = v(":dels"), k = p.type, $ = p.type === "deleteRange" ? [p.range] : p.type === "delete" ? [p.keys] : p.values.length < 50 ? [Mr(u, p).filter(function(x) {
              return x;
            }), p.values] : [], I = $[0], T = $[1], $ = p.trans._cache;
            return G(I) ? (N.addKeys(I), ($ = k === "delete" || I.length === T.length ? An(I, $) : null) || R.addKeys(I), ($ || T) && (S = v, y = $, A = T, i.indexes.forEach(function(x) {
              var M = S(x.name || "");
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
            }))) : I ? (T = { from: (T = I.lower) !== null && T !== void 0 ? T : e.MIN_KEY, to: (T = I.upper) !== null && T !== void 0 ? T : e.MAX_KEY }, R.add(T), N.add(T)) : (N.add(n), R.add(n), i.indexes.forEach(function(x) {
              return v(x.name).add(n);
            })), s.mutate(p).then(function(x) {
              return !I || p.type !== "add" && p.type !== "put" || (N.addKeys(x.results), m && m.forEach(function(M) {
                for (var F = p.values.map(function(W) {
                  return M.extractKey(W);
                }), U = M.keyPath.findIndex(function(W) {
                  return W === u.keyPath;
                }), z = 0, de = x.results.length; z < de; ++z) F[z][U] = x.results[z];
                v(M.name).addKeys(F);
              })), P.mutatedParts = Yt(P.mutatedParts || {}, D), x;
            });
          } }), f = function(v) {
            var S = v.query, v = S.index, S = S.range;
            return [v, new ae((v = S.lower) !== null && v !== void 0 ? v : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, O = { get: function(p) {
            return [u, new ae(p.key)];
          }, getMany: function(p) {
            return [u, new ae().addKeys(p.keys)];
          }, count: f, query: f, openCursor: f };
          return C(O).forEach(function(p) {
            E[p] = function(v) {
              var S = B.subscr, y = !!S, A = Pn(B, s) && Dn(p, v) ? v.obsSet = {} : S;
              if (y) {
                var P = function(T) {
                  return T = "idb://".concat(r, "/").concat(a, "/").concat(T), A[T] || (A[T] = new ae());
                }, D = P(""), N = P(":dels"), S = O[p](v), y = S[0], S = S[1];
                if ((p === "query" && y.isPrimaryKey && !v.values ? N : P(y.name || "")).add(S), !y.isPrimaryKey) {
                  if (p !== "count") {
                    var R = p === "query" && g && v.values && s.query(l(l({}, v), { values: !1 }));
                    return s[p].apply(this, arguments).then(function(T) {
                      if (p === "query") {
                        if (g && v.values) return R.then(function(F) {
                          return F = F.result, D.addKeys(F), T;
                        });
                        var $ = v.values ? T.result.map(d) : T.result;
                        (v.values ? D : N).addKeys($);
                      } else if (p === "openCursor") {
                        var x = T, M = v.values;
                        return x && Object.create(x, { key: { get: function() {
                          return N.addKey(x.primaryKey), x.key;
                        } }, primaryKey: { get: function() {
                          var F = x.primaryKey;
                          return N.addKey(F), F;
                        } }, value: { get: function() {
                          return M && D.addKey(x.primaryKey), x.value;
                        } } });
                      }
                      return T;
                    });
                  }
                  N.add(n);
                }
              }
              return s[p].apply(this, arguments);
            };
          }), E;
        } });
      } };
      function Nn(e, r, n) {
        if (n.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var a = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return n.numFailures === a ? null : (r = l({}, r), G(r.keys) && (r.keys = r.keys.filter(function(s, i) {
          return !(i in n.failures);
        })), "values" in r && G(r.values) && (r.values = r.values.filter(function(s, i) {
          return !(i in n.failures);
        })), r);
      }
      function Kr(e, r) {
        return n = e, ((a = r).lower === void 0 || (a.lowerOpen ? 0 < H(n, a.lower) : 0 <= H(n, a.lower))) && (e = e, (r = r).upper === void 0 || (r.upperOpen ? H(e, r.upper) < 0 : H(e, r.upper) <= 0));
        var n, a;
      }
      function Rn(e, r, O, a, s, i) {
        if (!O || O.length === 0) return e;
        var u = r.query.index, d = u.multiEntry, g = r.query.range, m = a.schema.primaryKey.extractKey, E = u.extractKey, f = (u.lowLevelIndex || u).extractKey, O = O.reduce(function(p, v) {
          var S = p, y = [];
          if (v.type === "add" || v.type === "put") for (var A = new ae(), P = v.values.length - 1; 0 <= P; --P) {
            var D, N = v.values[P], R = m(N);
            A.hasKey(R) || (D = E(N), (d && G(D) ? D.some(function(x) {
              return Kr(x, g);
            }) : Kr(D, g)) && (A.addKey(R), y.push(N)));
          }
          switch (v.type) {
            case "add":
              var k = new ae().addKeys(r.values ? p.map(function(M) {
                return m(M);
              }) : p), S = p.concat(r.values ? y.filter(function(M) {
                return M = m(M), !k.hasKey(M) && (k.addKey(M), !0);
              }) : y.map(function(M) {
                return m(M);
              }).filter(function(M) {
                return !k.hasKey(M) && (k.addKey(M), !0);
              }));
              break;
            case "put":
              var I = new ae().addKeys(v.values.map(function(M) {
                return m(M);
              }));
              S = p.filter(function(M) {
                return !I.hasKey(r.values ? m(M) : M);
              }).concat(r.values ? y : y.map(function(M) {
                return m(M);
              }));
              break;
            case "delete":
              var T = new ae().addKeys(v.keys);
              S = p.filter(function(M) {
                return !T.hasKey(r.values ? m(M) : M);
              });
              break;
            case "deleteRange":
              var $ = v.range;
              S = p.filter(function(M) {
                return !Kr(m(M), $);
              });
          }
          return S;
        }, e);
        return O === e ? e : (O.sort(function(p, v) {
          return H(f(p), f(v)) || H(m(p), m(v));
        }), r.limit && r.limit < 1 / 0 && (O.length > r.limit ? O.length = r.limit : e.length === r.limit && O.length < r.limit && (s.dirty = !0)), i ? Object.freeze(O) : O);
      }
      function In(e, r) {
        return H(e.lower, r.lower) === 0 && H(e.upper, r.upper) === 0 && !!e.lowerOpen == !!r.lowerOpen && !!e.upperOpen == !!r.upperOpen;
      }
      function Sa(e, r) {
        return function(n, a, s, i) {
          if (n === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = H(n, a)) === 0) {
            if (s && i) return 0;
            if (s) return 1;
            if (i) return -1;
          }
          return a;
        }(e.lower, r.lower, e.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(n, a, s, i) {
          if (n === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = H(n, a)) === 0) {
            if (s && i) return 0;
            if (s) return -1;
            if (i) return 1;
          }
          return a;
        }(e.upper, r.upper, e.upperOpen, r.upperOpen);
      }
      function Oa(e, r, n, a) {
        e.subscribers.add(n), a.addEventListener("abort", function() {
          var s, i;
          e.subscribers.delete(n), e.subscribers.size === 0 && (s = e, i = r, setTimeout(function() {
            s.subscribers.size === 0 && je(i, s);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var r = e.schema.name;
        return l(l({}, e), { transaction: function(n, a, s) {
          var i, u, d = e.transaction(n, a, s);
          return a === "readwrite" && (u = (i = new AbortController()).signal, s = function(g) {
            return function() {
              if (i.abort(), a === "readwrite") {
                for (var m = /* @__PURE__ */ new Set(), E = 0, f = n; E < f.length; E++) {
                  var O = f[E], p = ze["idb://".concat(r, "/").concat(O)];
                  if (p) {
                    var v = e.table(O), S = p.optimisticOps.filter(function(M) {
                      return M.trans === d;
                    });
                    if (d._explicit && g && d.mutatedParts) for (var y = 0, A = Object.values(p.queries.query); y < A.length; y++) for (var P = 0, D = (k = A[y]).slice(); P < D.length; P++) Tr((I = D[P]).obsSet, d.mutatedParts) && (je(k, I), I.subscribers.forEach(function(M) {
                      return m.add(M);
                    }));
                    else if (0 < S.length) {
                      p.optimisticOps = p.optimisticOps.filter(function(M) {
                        return M.trans !== d;
                      });
                      for (var N = 0, R = Object.values(p.queries.query); N < R.length; N++) for (var k, I, T, $ = 0, x = (k = R[N]).slice(); $ < x.length; $++) (I = x[$]).res != null && d.mutatedParts && (g && !I.dirty ? (T = Object.isFrozen(I.res), T = Rn(I.res, I.req, S, v, I, T), I.dirty ? (je(k, I), I.subscribers.forEach(function(M) {
                        return m.add(M);
                      })) : T !== I.res && (I.res = T, I.promise = j.resolve({ result: T }))) : (I.dirty && je(k, I), I.subscribers.forEach(function(M) {
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
            var u = B.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(i);
            var d = ze["idb://".concat(r, "/").concat(n)];
            return d ? (u = a.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || Mr(s, i).some(function(g) {
              return g == null;
            })) ? (d.optimisticOps.push(i), i.mutatedParts && Qt(i.mutatedParts), u.then(function(g) {
              0 < g.numFailures && (je(d.optimisticOps, i), (g = Nn(0, i, g)) && d.optimisticOps.push(g), i.mutatedParts && Qt(i.mutatedParts));
            }), u.catch(function() {
              je(d.optimisticOps, i), i.mutatedParts && Qt(i.mutatedParts);
            })) : u.then(function(g) {
              var m = Nn(0, l(l({}, i), { values: i.values.map(function(E, f) {
                var O;
                return g.failures[f] ? E : (E = (O = s.keyPath) !== null && O !== void 0 && O.includes(".") ? $e(E) : l({}, E), ue(E, s.keyPath, g.results[f]), E);
              }) }), g);
              d.optimisticOps.push(m), queueMicrotask(function() {
                return i.mutatedParts && Qt(i.mutatedParts);
              });
            }), u) : a.mutate(i);
          }, query: function(i) {
            if (!Pn(B, a) || !Dn("query", i)) return a.query(i);
            var u = ((m = B.trans) === null || m === void 0 ? void 0 : m.db._options.cache) === "immutable", f = B, d = f.requery, g = f.signal, m = function(v, S, y, A) {
              var P = ze["idb://".concat(v, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[y])) return [null, !1, P, null];
              var D = S[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (y) {
                case "query":
                  var N = D.find(function(R) {
                    return R.req.limit === A.limit && R.req.values === A.values && In(R.req.query.range, A.query.range);
                  });
                  return N ? [N, !0, P, D] : [D.find(function(R) {
                    return ("limit" in R.req ? R.req.limit : 1 / 0) >= A.limit && (!A.values || R.req.values) && Sa(R.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return N = D.find(function(R) {
                    return In(R.req.query.range, A.query.range);
                  }), [N, !!N, P, D];
              }
            }(r, n, "query", i), E = m[0], f = m[1], O = m[2], p = m[3];
            return E && f ? E.obsSet = i.obsSet : (f = a.query(i).then(function(v) {
              var S = v.result;
              if (E && (E.res = S), u) {
                for (var y = 0, A = S.length; y < A; ++y) Object.freeze(S[y]);
                Object.freeze(S);
              } else v.result = $e(S);
              return v;
            }).catch(function(v) {
              return p && E && je(p, E), Promise.reject(v);
            }), E = { obsSet: i.obsSet, promise: f, subscribers: /* @__PURE__ */ new Set(), type: "query", req: i, dirty: !1 }, p ? p.push(E) : (p = [E], (O = O || (ze["idb://".concat(r, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[i.query.index.name || ""] = p)), Oa(E, p, d, g), E.promise.then(function(v) {
              return { result: Rn(v.result, i, O?.optimisticOps, a, E, u) };
            });
          } });
        } });
      } };
      function Jt(e, r) {
        return new Proxy(e, { get: function(n, a, s) {
          return a === "db" ? r : Reflect.get(n, a, s);
        } });
      }
      var Se = (ee.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new L.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var r = this._versions, n = r.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), r.push(n), r.sort(ha), n.stores({}), this._state.autoSchema = !1, n);
      }, ee.prototype._whenReady = function(e) {
        var r = this;
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new j(function(n, a) {
          if (r._state.openComplete) return a(new L.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void a(new L.DatabaseClosed());
            r.open().catch(Q);
          }
          r._state.dbReadyPromise.then(n, a);
        }).then(e);
      }, ee.prototype.use = function(e) {
        var r = e.stack, n = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: r, name: s }), e = this._middlewares[r] || (this._middlewares[r] = []), e.push({ stack: r, create: n, level: a ?? 10, name: s }), e.sort(function(i, u) {
          return i.level - u.level;
        }), this;
      }, ee.prototype.unuse = function(e) {
        var r = e.stack, n = e.name, a = e.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(s) {
          return a ? s.create !== a : !!n && s.name !== n;
        })), this;
      }, ee.prototype.open = function() {
        var e = this;
        return We(Pe, function() {
          return ya(e);
        });
      }, ee.prototype._close = function() {
        var e = this._state, r = tt.indexOf(this);
        if (0 <= r && tt.splice(r, 1), this.idbdb) {
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
        var r = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        r ? (n.isBeingOpened && n.cancelOpen(new L.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new L.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ee.prototype.delete = function(e) {
        var r = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new j(function(s, i) {
          function u() {
            r.close(e);
            var d = r._deps.indexedDB.deleteDatabase(r.name);
            d.onsuccess = Z(function() {
              var g, m, E;
              g = r._deps, m = r.name, E = g.indexedDB, g = g.IDBKeyRange, Nr(E) || m === jt || Dr(E, g).delete(m).catch(Q), s();
            }), d.onerror = me(i), d.onblocked = r._fireOnBlocked;
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
        return C(this._allTables).map(function(r) {
          return e._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), ee.prototype.transaction = function() {
        var e = function(r, n, a) {
          var s = arguments.length;
          if (s < 2) throw new L.InvalidArgument("Too few arguments");
          for (var i = new Array(s - 1); --s; ) i[s - 1] = arguments[s];
          return a = i.pop(), [r, Qr(i), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ee.prototype._transaction = function(e, r, n) {
        var a = this, s = B.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var i, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = r.map(function(m) {
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
          return s ? s._promise(null, function(E, f) {
            f(m);
          }) : q(m);
        }
        var g = function m(E, f, O, p, v) {
          return j.resolve().then(function() {
            var S = B.transless || B, y = E._createTransaction(f, O, E._dbSchema, p);
            if (y.explicit = !0, S = { trans: y, transless: S }, p) y.idbtrans = p.idbtrans;
            else try {
              y.create(), y.idbtrans._explicit = !0, E._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === sr.InvalidState && E.isOpen() && 0 < --E._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), E.close({ disableAutoOpen: !1 }), E.open().then(function() {
                return m(E, f, O, null, v);
              })) : q(D);
            }
            var A, P = ar(v);
            return P && et(), S = j.follow(function() {
              var D;
              (A = v.call(y, y)) && (P ? (D = Ne.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = $r(A)));
            }, S), (A && typeof A.then == "function" ? j.resolve(A).then(function(D) {
              return y.active ? D : q(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
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
        return s ? s._promise(i, g, "lock") : B.trans ? We(B.transless, function() {
          return a._whenReady(g);
        }) : this._whenReady(g);
      }, ee.prototype.table = function(e) {
        if (!ie(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, r) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = r = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, a = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, i, u, d, g, m = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        m.dbReadyPromise = new j(function(f) {
          m.dbReadyResolve = f;
        }), m.openCanceller = new j(function(f, O) {
          m.cancelOpen = O;
        }), this._state = m, this.name = e, this.on = ht(this, "populate", "blocked", "versionchange", "close", { ready: [or, Q] }), this.on.ready.subscribe = Hr(this.on.ready.subscribe, function(f) {
          return function(O, p) {
            ee.vip(function() {
              var v, S = n._state;
              S.openComplete ? (S.dbOpenError || j.resolve().then(O), p && f(O)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(O), p && f(O)) : (f(O), v = n, p || f(function y() {
                v.on.ready.unsubscribe(O), v.on.ready.unsubscribe(y);
              }));
            });
          };
        }), this.Collection = (s = this, gt(oa.prototype, function(A, y) {
          this.db = s;
          var p = on, v = null;
          if (y) try {
            p = y();
          } catch (P) {
            v = P;
          }
          var S = A._ctx, y = S.table, A = y.hook.reading.fire;
          this._ctx = { table: y, index: S.index, isPrimKey: !S.index || y.schema.primKey.keyPath && S.index === y.schema.primKey.name, range: p, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: v, or: S.or, valueMapper: A !== ct ? A : null };
        })), this.Table = (i = this, gt(dn.prototype, function(f, O, p) {
          this.db = i, this._tx = p, this.name = f, this.schema = O, this.hook = i._allTables[f] ? i._allTables[f].hook : ht(null, { creating: [Jn, Q], reading: [Xn, ct], updating: [qn, Q], deleting: [Zn, Q] });
        })), this.Transaction = (u = this, gt(ua.prototype, function(f, O, p, v, S) {
          var y = this;
          this.db = u, this.mode = f, this.storeNames = O, this.schema = p, this.chromeTransactionDurability = v, this.idbtrans = null, this.on = ht(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(A, P) {
            y._resolve = A, y._reject = P;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(A) {
            var P = y.active;
            return y.active = !1, y.on.error.fire(A), y.parent ? y.parent._reject(A) : P && y.idbtrans && y.idbtrans.abort(), q(A);
          });
        })), this.Version = (d = this, gt(ma.prototype, function(f) {
          this.db = d, this._cfg = { version: f, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (g = this, gt(mn.prototype, function(f, O, p) {
          if (this.db = g, this._ctx = { table: f, index: O === ":id" ? null : O, or: p }, this._cmp = this._ascending = H, this._descending = function(v, S) {
            return H(S, v);
          }, this._max = function(v, S) {
            return 0 < H(v, S) ? v : S;
          }, this._min = function(v, S) {
            return H(v, S) < 0 ? v : S;
          }, this._IDBKeyRange = g._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(f) {
          0 < f.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(f) {
          !f.newVersion || f.newVersion < f.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(f.oldVersion / 10));
        }), this._maxKey = bt(r.IDBKeyRange), this._createTransaction = function(f, O, p, v) {
          return new n.Transaction(f, O, p, n._options.chromeTransactionDurability, v);
        }, this._fireOnBlocked = function(f) {
          n.on("blocked").fire(f), tt.filter(function(O) {
            return O.name === n.name && O !== n && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(f);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var E = new Proxy(this, { get: function(f, O, p) {
          if (O === "_vip") return !0;
          if (O === "table") return function(S) {
            return Jt(n.table(S), E);
          };
          var v = Reflect.get(f, O, p);
          return v instanceof dn ? Jt(v, E) : O === "tables" ? v.map(function(S) {
            return Jt(S, E);
          }) : O === "_createTransaction" ? function() {
            return Jt(v.apply(this, arguments), E);
          } : v;
        } });
        this.vip = E, a.forEach(function(f) {
          return f(n);
        });
      }
      var Zt, fe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Gr.prototype.subscribe = function(e, r, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: r, complete: n });
      }, Gr.prototype[fe] = function() {
        return this;
      }, Gr);
      function Gr(e) {
        this._subscribe = e;
      }
      try {
        Zt = { indexedDB: w.indexedDB || w.mozIndexedDB || w.webkitIndexedDB || w.msIndexedDB, IDBKeyRange: w.IDBKeyRange || w.webkitIDBKeyRange };
      } catch {
        Zt = { indexedDB: null, IDBKeyRange: null };
      }
      function Tn(e) {
        var r, n = !1, a = new Aa(function(s) {
          var i = ar(e), u, d = !1, g = {}, m = {}, E = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), f && Te.storagemutated.unsubscribe(p));
          } };
          s.start && s.start(E);
          var f = !1, O = function() {
            return gr(v);
          }, p = function(S) {
            Yt(g, S), Tr(m, g) && O();
          }, v = function() {
            var S, y, A;
            !d && Zt.indexedDB && (g = {}, S = {}, u && u.abort(), u = new AbortController(), A = function(P) {
              var D = Ze();
              try {
                i && et();
                var N = De(e, P);
                return N = i ? N.finally(Ne) : N;
              } finally {
                D && qe();
              }
            }(y = { subscr: S, signal: u.signal, requery: O, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              n = !0, r = P, d || y.signal.aborted || (g = {}, function(D) {
                for (var N in D) if (ie(D, N)) return;
                return 1;
              }(m = S) || f || (Te(yt, p), f = !0), gr(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || gr(function() {
                d || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(O, 0), E;
        });
        return a.hasValue = function() {
          return n;
        }, a.getValue = function() {
          return r;
        }, a;
      }
      var He = Se;
      function Br(e) {
        var r = xe;
        try {
          xe = !0, Te.storagemutated.fire(e), Cr(e, !0);
        } finally {
          xe = r;
        }
      }
      be(He, l(l({}, Dt), { delete: function(e) {
        return new He(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new He(e, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return r = He.dependencies, n = r.indexedDB, r = r.IDBKeyRange, (Nr(n) ? Promise.resolve(n.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== jt;
            });
          }) : Dr(n, r).toCollection().primaryKeys()).then(e);
        } catch {
          return q(new L.MissingAPI());
        }
        var r, n;
      }, defineClass: function() {
        return function(e) {
          te(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? We(B.transless, e) : e();
      }, vip: Rr, async: function(e) {
        return function() {
          try {
            var r = $r(e.apply(this, arguments));
            return r && typeof r.then == "function" ? r : j.resolve(r);
          } catch (n) {
            return q(n);
          }
        };
      }, spawn: function(e, r, n) {
        try {
          var a = $r(e.apply(n, r || []));
          return a && typeof a.then == "function" ? a : j.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, r) {
        return r = j.resolve(typeof e == "function" ? He.ignoreTransaction(e) : e).timeout(r || 6e4), B.trans ? B.trans.waitFor(r) : r;
      }, Promise: j, debug: { get: function() {
        return pe;
      }, set: function(e) {
        qr(e);
      } }, derive: Ye, extend: te, props: be, override: Hr, Events: ht, on: Te, liveQuery: Tn, extendObservabilitySet: Yt, getByKeyPath: ve, setByKeyPath: ue, delByKeyPath: function(e, r) {
        typeof r == "string" ? ue(e, r, void 0) : "length" in r && [].map.call(r, function(n) {
          ue(e, n, void 0);
        });
      }, shallowClone: Yr, deepClone: $e, getObjectDiff: jr, cmp: H, asap: Vr, minKey: -1 / 0, addons: [], connections: tt, errnames: sr, dependencies: Zt, cache: ze, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, r, n) {
        return e + r / Math.pow(10, 2 * n);
      }) })), He.maxKey = bt(He.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Te(yt, function(e) {
        xe || (e = new CustomEvent(Er, { detail: e }), xe = !0, dispatchEvent(e), xe = !1);
      }), addEventListener(Er, function(e) {
        e = e.detail, xe || Br(e);
      }));
      var at, xe = !1, xn = function() {
      };
      return typeof BroadcastChannel < "u" && ((xn = function() {
        (at = new BroadcastChannel(Er)).onmessage = function(e) {
          return e.data && Br(e.data);
        };
      })(), typeof at.unref == "function" && at.unref(), Te(yt, function(e) {
        xe || at.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Se.disableBfCache && e.persisted) {
          pe && console.debug("Dexie: handling persisted pagehide"), at?.close();
          for (var r = 0, n = tt; r < n.length; r++) n[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Se.disableBfCache && e.persisted && (pe && console.debug("Dexie: handling persisted pageshow"), xn(), Br({ all: new ae(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, r) {
        return !e || e instanceof Xe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Zr[e.name] ? e : (r = new Zr[e.name](r || e.message, e), "stack" in e && Ae(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, qr(pe), l(Se, Object.freeze({ __proto__: null, Dexie: Se, liveQuery: Tn, Entity: cn, cmp: H, PropModification: pt, replacePrefix: function(e, r) {
        return new pt({ replacePrefix: [e, r] });
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
  constructor(t) {
    this.options = t, this.db = new St(t.app), this.db.version(11).stores({
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
  getCloud = async (t) => {
    if (t.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %ccloud",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.CLOUD,
        t
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: t
      };
    const o = await this.db.table(_.CLOUD).where({ id: t.widget }).last().catch(() => {
      K(2, ["%capi%C %ccloud", c.API, c.NONE, c.CLOUD, t.widget]);
    });
    if (typeof o > "u")
      return { data: null, message: "Cloud Data error", success: !1, query: t };
    const l = {
      data: o.data,
      message: o !== void 0 ? "Cloud retrieved successfully" : "Cloud Data error",
      success: o !== void 0,
      query: t
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
  setCloud = async (t, o) => t.type === _.CLOUD && o !== "" ? await this.db.table(_.CLOUD).put({
    id: t.widget,
    dashboard_id: t.dashboard,
    //data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %ccloud",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.CLOUD,
    t,
    l.message
  ]), 400)) : 400;
  getDashboard = async (t) => {
    const o = await this.db.table(_.DASHBOARD).where({ id: t.id }).last().catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, t.id]);
    });
    return o === void 0 ? {
      data: null,
      message: `Dashboard ${t.id} Load error`,
      success: !1
    } : (o.message = `Dashboard ${t.id} retrieved from storage`, o.success = !0, o);
  };
  getDashboards = async (t) => {
    const o = (w) => t?.id === w.id, l = (w) => t?.name ? w.name.includes(t?.name) : !1;
    let b = await this.db.table(_.DASHBOARD).toArray().then((w) => t?.id ? w.filter(o) : w).then((w) => t?.name ? w.filter(l) : w).catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, t]);
    });
    return b !== void 0 && K(3, [
      "%cstorage%c %cdashboards",
      c.STORAGE,
      c.NONE,
      c.WIDGET,
      t
    ]), {
      // @ts-ignore
      data: b !== void 0 ? { dashboards: b, query: t } : null,
      message: b !== void 0 ? "Dashboards loaded from storage" : "Dashboards load error",
      success: b !== void 0
    };
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setDashboard = async (t) => {
    const o = structuredClone(t);
    return delete o.data.widgets, await this.db.table(_.DASHBOARD).put({
      id: o.id,
      name: o.name,
      data: o.data,
      update: o.update
    }).then(() => ({
      data: null,
      message: `Dashboard ${o.data.id} saved to storage`,
      success: !0
    })).catch((l) => (K(4, ["%cstorage", c.STORAGE, _.WIDGET, t, l.message]), {
      data: null,
      message: `Dashboard ${o.data.id} save error: ${l.message}`,
      success: !1
    }));
  };
  /**
   * Wipe Message data after expires timestamp
   */
  cleanMessages = async () => {
    const t = Date.now() / 1e3, o = (w) => w.expires < t, l = (w) => w.expires < t;
    return await this.db.table(_.TOPICS).orderBy("expires").filter(o).delete().catch((w) => (console.error(
      "%cstorage%c %cclean",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      w.message
    ), 0)), await this.db.table(_.MESSAGES).orderBy("expires").filter(l).delete().catch((w) => (console.error(
      "%clean%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      w.message
    ), 0));
  };
  /**
   * Retrieve Messages Data
   * @param query IQuery
   * @returns IResponse
   */
  getMessages = async (t) => {
    if (t.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %cmessages",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        t
      ]), {
        data: null,
        message: "Messages Data error",
        success: !1,
        query: t
      };
    const o = t?.order ?? "utc", l = Math.floor(Date.now() / 1e3);
    o !== "utc" && (t.since = l - 60 * 60 * 24 * 30), this.options.delay != 0 ? t.before = l - (this.options.delay || 0) : t.before = l;
    const b = (G) => G.utc > (t?.since || 0), w = (G) => G.utc < (t?.before || l), C = (G) => G?.visible !== 0;
    try {
      const te = await this.db.table(_.TOPICS).where("widget_id").equals(t.widget).filter(C).filter(b).filter(w).reverse().limit(t?.limit ?? 25).sortBy(o);
      if (te.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: t
        };
      let ge = te.map((Ce) => this.db.table(_.MESSAGES).get({ id: Ce.message_id }));
      return St.Promise.all(ge).then(async (Ce) => {
        const be = {
          data: {
            messages: Ce.map((_t) => _t.data)
          },
          query: t,
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
        t,
        G.message
      ]), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  hideMessage = async (t, o) => {
    await this.db.table(_.TOPICS).where("message_id").equals(t).modify({ visible: o ? 1 : 0 }).catch((l) => (console.error(
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
  setMessages = async (t, o) => {
    if (t.type !== _.MESSAGES)
      return 400;
    const l = o.data.title;
    let b = 0;
    return await o.data.messages.forEach(async (w) => {
      w.id !== null && (w.topics[0] = {
        message_id: w.id,
        engagement: w.topics[0]?.engagement || w.dynamics?.engagement || 0,
        impressions: w.topics[0]?.impressions || w.dynamics?.semrush_visits || 0,
        reach: w.topics[0]?.reach || w.dynamics?.potential_reach || 0,
        sentiment: w.topics[0]?.sentiment || 0
      }, await this.db.table(_.MESSAGES).put({
        id: w.id,
        utc: w.utc,
        data: w,
        expires: w.expires
      }).catch((C) => {
        b++, K(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set message",
          `title: ${l}`,
          w,
          C.message
        ]);
      }), await this.db.table(_.TOPICS).put({
        title: l,
        widget_id: t.widget,
        message_id: w.id,
        dashboard_id: t.dashboard,
        engagement: w.topics[0]?.engagement || w.dynamics?.engagement || 0,
        impressions: w.topics[0]?.impressions || w.dynamics?.semrush_visits || 0,
        reach: w.topics[0]?.reach || w.dynamics?.potential_reach || 0,
        sentiment: w.topics[0]?.sentiment || 0,
        utc: w.utc,
        expires: w.expires
      }).catch((C) => {
        b++, K(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set topic",
          `title: ${l}`,
          w,
          C.message
        ]);
      }), await o.data.topics.forEach(async (C) => {
        const G = C.message_id, te = C.visible ? 1 : 0, ge = C.title;
        await this.db.table(_.TOPICS).where("message_id").equals(G).modify({ visible: te }).catch((Ce) => {
          b++, K(4, [
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
    }), b === 0 ? 201 : 400;
  };
  /**
   * Retrieve Series Data
   * @param query IQuery
   * @returns IResponse
   */
  getSeries = async (t) => {
    if (t.widget === "")
      return K(3, [
        "%cget%c %cstorage%c %cseries",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.CLOUD,
        t
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: t
      };
    const o = await this.db.table(_.SERIES).where({ id: t.widget }).last().catch(() => {
      K(2, [
        "%cget%c %cstorage%c %cseries",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.SERIES,
        t.widget
      ]);
    }), l = {
      data: o.data,
      message: o !== void 0 ? "Get Series success" : "Get Series error",
      success: o !== void 0,
      query: t
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
  setSeries = async (t, o) => (delete o?.query, t.type === _.SERIES && o !== "" ? await this.db.table(_.SERIES).put({
    id: t.widget,
    dashboard_id: t.dashboard,
    //data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %cseries",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.SERIES,
    t,
    l.message
  ]), 400)) : 400);
  /**
   * Retrieve Widget from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidget = async (t) => {
    if (t.id === "")
      return K(3, [
        "%cget%c %cstorage%c %cwidget",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.WIDGET,
        t
      ]), {
        data: null,
        message: "Widget Data error",
        success: !1,
        query: t
      };
    const o = await this.db.table(_.WIDGET).where({ id: t.id }).last().catch(() => {
      console.warn("%cstorage", c.STORAGE, J.WIDGET_LOAD, t.id);
    });
    return o === void 0 ? {
      data: null,
      message: `Widget ${t.id} Load error`,
      success: !1
    } : (o.message = `Widget ${t.id} retrieved from storage`, o.success = !0, o);
  };
  /**
   * Retrieve Widgets from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidgets = async (t) => {
    const o = (C) => t?.dashboard === C.dashboard_id, l = (C) => t?.type === C.type, b = (C) => t?.name ? C.name.includes(t?.name) : !1;
    let w = await this.db.table(_.WIDGET).toArray().then((C) => t?.dashboard ? C.filter(o) : C).then((C) => t?.type ? C.filter(l) : C).then((C) => t?.name ? C.filter(b) : C).catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.WIDGET_LOAD, t]);
    });
    return w !== void 0 && K(3, [
      "%cstorage%c %cwidgets",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      t
    ]), {
      // @ts-ignore
      data: w !== void 0 ? { data: w, query: t } : null,
      message: w !== void 0 ? "Widgets loaded from storage" : "Widgets load error",
      success: w !== void 0
    };
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (t) => await this.db.table(_.WIDGET).put({
    id: t.id,
    name: t.title,
    dashboard_id: t.dashboard_id,
    type: t.type,
    update: t.update
  }).then(() => ({
    data: null,
    message: `Widget ${t.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    _.WIDGET,
    t,
    o.message
  ), {
    data: null,
    message: `Widget ${t.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (t) => (t = Ta(t), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length > 0 || (t.type === _.MESSAGES && (t = Ot(this.options, t)), console.info(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    t.slide,
    t.widget
  ), console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    t
  ), this.subscribers.push(t)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  /**
   * Retrieve Slide from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlide = async (t) => {
    const o = await this.db.table(_.SLIDE).where({ id: t.id }).last().catch(() => {
      K(2, ["%cstorage", c.STORAGE, J.SLIDE_LOAD, t.id]);
    });
    return {
      // @ts-ignore
      data: o !== void 0 ? { slides: o, query: t } : null,
      message: o !== void 0 ? "Slide loaded from storage" : "Slide load error",
      success: o !== void 0
    };
  };
  /**
   * Retrieve Slides from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlides = async (t) => {
    const o = (C) => t?.id ? t.id = C.id : !1, l = (C) => t?.name ? C.name.includes(t?.name) : !1, w = await this.db.table(_.SLIDE).toArray().then((C) => t?.id ? C.filter(o) : C).then((C) => t?.name ? C.filter(l) : C);
    return w !== void 0 && K(3, ["%cstorage%c %cslides", c.STORAGE, c.NONE, c.SLIDE, t]), {
      // @ts-ignore
      data: w !== void 0 ? { slides: w, query: t } : null,
      message: w !== void 0 ? "Slides loaded from storage" : "Slides load error",
      success: w !== void 0
    };
  };
  /**
   * Update Slide in Storage
   * @param query IQuery
   * @returns number
   */
  setSlide = async (t) => await this.db.table(_.SLIDE).put({
    id: t.data.id,
    presentation_id: t.data.presentation_id,
    order_index: t.data.order_index,
    name: t.data.name || "Not set",
    json: t.data.json || {},
    html: t.data.html || "",
    update: t.data.update
  }).then(() => ({
    data: null,
    message: `Slide ${t.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.SLIDE_STORE,
    t,
    o.message
  ), {
    data: null,
    message: `Slide ${t.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Retrieve Presentation from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentation = async (t) => {
    const o = await this.db.table(_.PRESENTATION).where({ id: t.id }).last().catch(() => {
      console.warn(
        "%cstorage ",
        c.STORAGE,
        J.PRESENTATION_LOAD,
        t.id
      );
    });
    return o === void 0 ? {
      data: null,
      message: `Presentation ${t.id} Load error`,
      success: !1
    } : (o.message = `Presentation ${t.id} retrieved from storage`, o.success = !0, o);
  };
  /**
   * Retrieve Presentations from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentations = async (t) => {
    const o = (w) => t?.name ? w.name.includes(t?.name) : !1, b = await this.db.table(_.PRESENTATION).toArray().then((w) => t?.name ? w.filter(o) : w);
    return b !== void 0 && K(3, [
      "%cstorage%c %cpresentations",
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      t
    ]), {
      // @ts-ignore
      data: b !== void 0 ? { presentations: b, query: t } : null,
      message: b !== void 0 ? "Presentations loaded from storage" : "Presentations load error",
      success: b !== void 0
    };
  };
  /**
   * Update Presentation in Storage
   * @param query IQuery
   * @returns number
   */
  setPresentation = async (t) => await this.db.table(_.PRESENTATION).put({
    id: t.data.id,
    name: t.data.name || "Not set",
    data: t.data,
    update: t.update
  }).then(() => ({
    data: null,
    message: `Presentation ${t.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PRESENTATION_STORE,
    t,
    o.message
  ), {
    data: null,
    message: `Presentation ${t.data.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Retrieve Preference from Storage
   * @param preference IPreference
   * @returns IResponse
   */
  getPreference = async (t) => {
    const o = await this.db.table(_.PREFERENCE).where({ id: t.id }).last().catch(() => {
      K(2, [
        "%cstorage",
        c.STORAGE,
        J.PREFERENCE_LOAD,
        t.id
      ]);
    });
    return {
      // @ts-ignore
      data: o !== void 0 ? { preferences: o, query: t } : null,
      message: o !== void 0 ? "Preference loaded from storage" : "Preference load error",
      success: o !== void 0
    };
  };
  /**
   * Retrieve Preferences from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPreferences = async (t) => {
    const o = (w) => t?.id ? t.id = w.id : !1, b = await this.db.table(_.SLIDE).toArray().then((w) => t?.id ? w.filter(o) : w);
    return b !== void 0 && K(3, [
      "%cstorage%c %cpreferences",
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      t
    ]), {
      // @ts-ignore
      data: b !== void 0 ? { prefrences: b, query: t } : null,
      message: b !== void 0 ? "Preferences loaded from storage" : "Preferences load error",
      success: b !== void 0
    };
  };
  /**
   * Update Preference in Storage
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (t) => await this.db.table(_.PREFERENCE).put({
    id: t.id,
    value: t.value
  }).then(() => ({
    data: null,
    message: `Preference ${t.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PREFERENCE_STORE,
    t,
    o.message
  ), {
    data: null,
    message: `Preference ${t.id} save error: ${o.message}`,
    success: !1
  }));
}
function zr(h) {
  return new Promise((t, o) => {
    h.oncomplete = h.onsuccess = () => t(h.result), h.onabort = h.onerror = () => o(h.error);
  });
}
function Ga(h, t) {
  const o = indexedDB.open(h);
  o.onupgradeneeded = () => o.result.createObjectStore(t);
  const l = zr(o);
  return (b, w) => l.then((C) => w(C.transaction(t, b).objectStore(t)));
}
let Fr;
function Kn() {
  return Fr || (Fr = Ga("keyval-store", "keyval")), Fr;
}
function _e(h, t = Kn()) {
  return t("readonly", (o) => zr(o.get(h)));
}
function ke(h, t, o = Kn()) {
  return o("readwrite", (l) => (l.put(t, h), zr(l.transaction)));
}
class Gn {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t;
  }
  getCloud = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.CLOUD, t.slide, t.widget), { data: null, message: "Cloud Data error", success: !1 }));
  };
  getSeries = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.SERIES, t.slide, t.widget), { data: null, message: "Series Data error", success: !1 }));
  };
  getMessages = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", c.API, _.MESSAGES, t.slide, t.widget), { data: null, message: "Messages Data error", success: !1 }));
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (t, o) => {
    if (!o.success)
      return 400;
    const l = Y(t);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((b) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.CLOUD,
      t,
      b.message
    ), 400));
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns bumber
   */
  setSeries = async (t, o) => {
    if (!o.success)
      return 400;
    const l = Y(t);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((b) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.SERIES,
      t,
      b.message
    ), 400));
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (t, o) => {
    if (!o.success)
      return 400;
    const l = Y(t);
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((b) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.MESSAGES,
      t,
      b.message
    ), 400));
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (t, o) => {
    console.debug(
      `hideMessage ${t} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, t.id), {
      data: null,
      message: `Widget ${t.data.id} load error: ${l.message}`,
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
  setDashboard = async (t) => {
    const o = Y(t), l = {
      id: t.dashboard,
      name: t.name
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Dashboard ${t.data.id} saved to storage`,
      success: !0
    })).catch((b) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.WIDGET,
      t,
      b.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${b.message}`,
      success: !1
    }));
  };
  getWidget = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, t.id), {
      data: null,
      message: `Widget ${t.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getWidgets = async (t) => (console.warn("%capi", c.API, _.SLIDE, t?.presentation), {
    data: null,
    message: "Widgets load error: ",
    success: !1
  });
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (t) => {
    const o = Y(t), l = {
      id: t.widget,
      name: t.name,
      dashboard_id: t.dashboard,
      type: t.type
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Widget ${t.data.id} saved to storage`,
      success: !0
    })).catch((b) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.WIDGET,
      t,
      b.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${b.message}`,
      success: !1
    }));
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (t) => (t.type === _.MESSAGES && (t = Ot(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length > 0 || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    t.slide,
    t.widget
  ), this.subscribers.push(t)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  getSlide = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.SLIDE, t.id), {
      data: null,
      message: `Slide ${t.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getSlides = async (t) => (console.warn("%capi", c.API, _.SLIDE, t.presentation), {
    data: null,
    message: `Slided ${t.presentation} load error: `,
    success: !1
  });
  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  setSlide = async (t) => {
    const o = Y(t), l = {
      id: t.data.id,
      title: t.data.title || "Not set",
      json: t.data.json || {},
      html: t.data.html || ""
    };
    return await ke(o, l).then(() => ({
      data: null,
      message: `Slide ${t.data.id} saved to storage`,
      success: !0
    })).catch((b) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.SLIDE,
      t,
      b.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${b.message}`,
      success: !1
    }));
  };
  getPresentation = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", c.API, _.PRESENTATION, t.id), {
      data: null,
      message: `Slide ${t.data.id} load error: ${l.message}`,
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
  setPresentation = async (t) => {
    const o = Y(t), l = t.data;
    return await ke(o, l).then(() => ({
      data: null,
      message: `Presentation ${t.data.id} saved to storage`,
      success: !0
    })).catch((b) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.PRESENTATION,
      t,
      b.message
    ), {
      data: null,
      message: `Presentation ${t.data.id} save error: ${b.message}`,
      success: !1
    }));
  };
  getPreference = async (t) => await _e(`${_.PREFERENCE}.${t.id}`).then((o) => o).catch((o) => (console.warn("%capi", c.API, _.PREFERENCE, t.id), {
    data: null,
    message: `Preference ${t.id} get error: ${o.message}`,
    success: !1
  }));
  getPreferences = async () => await _e(`${_.PREFERENCE}`).then((t) => t).catch((t) => (console.warn("%capi", c.API, _.PREFERENCE), {
    data: null,
    message: `Preferences get error: ${t.message}`,
    success: !1
  }));
  /**
   * Update Preference
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (t) => await ke(`${_.PREFERENCE}.${t.id}`, t.value).then(() => ({
    data: null,
    message: `Preference ${t.id} save error`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    _.PREFERENCE,
    t,
    o.message
  ), {
    data: null,
    message: `Preference ${t.id} save error: ${o.message}`,
    success: !1
  }));
}
class Bn {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, Storage.prototype.setObject = function(o, l) {
      this.setObject(o, JSON.stringify(l));
    }, Storage.prototype.getObject = function(o) {
      const l = this.getObject(o);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (t) => {
    const o = Y(t);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (t) => {
    const o = Y(t);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (t) => {
    const o = Y(t);
    try {
      return localStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        t.slide,
        t.widget,
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
  setCloud = async (t, o) => {
    const l = Y(t);
    try {
      return localStorage.setObject(l, o), 201;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, t, b), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (t, o) => {
    const l = Y(t);
    try {
      return localStorage.setObject(l, o), 201;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, _.SERIES, t, b), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (t, o) => {
    const l = Y(t);
    try {
      return localStorage.setObject(l, o), 200;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, t, b), 400;
    }
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (t, o) => {
    console.debug(
      `hideMessage ${t} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    try {
      return localStorage.getObject(`${_.DASHBOARD}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Dashboard ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (t) => {
    const o = `${_.DASHBOARD}.${t.dashboard}`;
    try {
      return localStorage.setObject(o, t), {
        data: null,
        message: `Dashboard ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, t, l), {
        data: null,
        message: `Dashboard ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (t) => {
    try {
      return localStorage.getObject(`${_.WIDGET}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Widget ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (t) => {
    const o = `widget.${t.widget}`;
    try {
      return localStorage.setObject(o, t), {
        data: null,
        message: `Widget ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, t, l), {
        data: null,
        message: `Widget ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (t) => (t.type === _.MESSAGES && (t = Ot(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    t.slide,
    t.widget
  ), this.subscribers.push(t)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  getSlide = async (t) => {
    try {
      return localStorage.getObject(`${_.SLIDE}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Slide ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (t) => {
    try {
      return localStorage.getObject(`${_.SLIDE}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Slide ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  setSlide = async (t) => {
    try {
      return localStorage.setObject(`${_.SLIDE}.${t.data.id}`, {
        id: t.data.id,
        title: t.data.title || "Not set",
        json: t.data.json || {},
        html: t.data.html || ""
      }), {
        data: null,
        message: `Slide ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, t, o), {
        data: null,
        message: `Slide ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      return localStorage.getObject(`${_.PRESENTATION}.${t.presentation}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, t.presentation, o), {
        data: null,
        message: `Presentations ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return localStorage.getObject(`${_.PRESENTATION}.`);
    } catch (t) {
      return console.warn("%capi", c.API, _.PRESENTATION, t), {
        data: null,
        message: `Presentations get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (t) => {
    try {
      return localStorage.setObject(`${_.PRESENTATION}.${t.data.id}`, t.data), {
        data: null,
        message: `Presentation ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, t, o), {
        data: null,
        message: `Presentation ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (t) => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, t.id, o), {
        data: null,
        message: `Preference ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.`);
    } catch (t) {
      return console.warn("%capi", c.API, _.PREFERENCE, t), {
        data: null,
        message: `Preference get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPreference = async (t) => {
    try {
      return localStorage.setObject(
        `${_.PREFERENCE}.${t.id}`,
        t.value
      ), {
        data: null,
        message: `Preference ${t.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        t,
        o
      ), {
        data: null,
        message: `Preference ${t.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
}
class Ln {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, Storage.prototype.setObject = function(o, l) {
      this.setItem(o, JSON.stringify(l));
    }, Storage.prototype.getObject = function(o) {
      const l = this.getItem(o);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (t) => {
    const o = Y(t);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (t) => {
    const o = Y(t);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (t) => {
    const o = Y(t);
    try {
      return sessionStorage.getObject(o);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        t.slide,
        t.widget,
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
  setCloud = async (t, o) => {
    const l = Y(t);
    try {
      return sessionStorage.setObject(l, o), 201;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, t, b), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (t, o) => {
    const l = Y(t);
    try {
      return sessionStorage.setObject(l, o), 201;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, _.SERIES, t, b), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (t, o) => {
    const l = Y(t);
    try {
      return sessionStorage.setObject(l, o), 200;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, t, b), 400;
    }
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (t, o) => {
    console.debug(
      `hideMessage ${t} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    try {
      return sessionStorage.getObject(`${_.DASHBOARD}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Dashboard ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (t) => {
    const o = `${_.DASHBOARD}.${t.dashboard}`;
    try {
      return sessionStorage.setObject(o, t), {
        data: null,
        message: `Dashboard ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, t, l), {
        data: null,
        message: `Dashboard ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (t) => {
    try {
      return sessionStorage.getObject(`${_.WIDGET}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Widget ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (t) => {
    const o = `widget.${t.widget}`;
    try {
      return sessionStorage.setObject(o, t), {
        data: null,
        message: `Widget ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, t, l), {
        data: null,
        message: `Slide ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (t) => (t.type === _.MESSAGES && (t = Ot(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    t.slide,
    t.widget
  ), this.subscribers.push(t)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  getSlide = async (t) => {
    try {
      return sessionStorage.getObject(`${_.SLIDE}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Slide ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (t) => {
    try {
      return sessionStorage.getObject(`${_.SLIDE}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Slide ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  setSlide = async (t) => {
    try {
      return sessionStorage.setObject(`${_.SLIDE}.${t.data.id}`, {
        id: t.data.id,
        title: t.data.title || "Not set",
        json: t.data.json || {},
        html: t.data.html || ""
      }), {
        data: null,
        message: `Slide ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, t, o), {
        data: null,
        message: `Slide ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      return sessionStorage.getObject(`${_.PRESENTATION}.${t.presentation}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, t.presentation, o), {
        data: null,
        message: `Presentation ${t.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return sessionStorage.getObject(`${_.PRESENTATION}.`);
    } catch (t) {
      return console.warn("%capi", c.API, _.PRESENTATION, t), {
        data: null,
        message: `Presentations get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (t) => {
    try {
      return sessionStorage.setObject(`${_.PRESENTATION}.${t.data.id}`, t.data), {
        data: null,
        message: `Presentation ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, t, o), {
        data: null,
        message: `Presentation ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (t) => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}.${t.id}`);
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, t.id, o), {
        data: null,
        message: `Preference ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}`);
    } catch (t) {
      return console.warn("%capi", c.API, _.PREFERENCE, t), {
        data: null,
        message: `Preferences get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPreference = async (t) => {
    try {
      return sessionStorage.setObject(
        `${_.PREFERENCE}.${t.id}`,
        t.value
      ), {
        data: null,
        message: `Preference ${t.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        t,
        o
      ), {
        data: null,
        message: `Preference ${t.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
}
class Wn {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, window.BuzzCasting.WidgetData = /* @__PURE__ */ new Set();
  }
  getCloud = async (t) => {
    const o = Y(t);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.CLOUD,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Cloud Data error", success: !1 };
    }
  };
  getSeries = async (t) => {
    const o = Y(t);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.SERIES,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Series Data error", success: !1 };
    }
  };
  getMessages = async (t) => {
    const o = Y(t);
    try {
      return window.BuzzCasting.WidgetData[o];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        _.MESSAGES,
        t.slide,
        t.widget,
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
  setCloud = async (t, o) => {
    const l = Y(t);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, "set", t, b), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (t, o) => {
    const l = Y(t);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, "set", t, b), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (t, o) => {
    const l = Y(t);
    try {
      return window.BuzzCasting.WidgetData[l] = o, 201;
    } catch (b) {
      return console.error("%cstorage", c.STORAGE, "set", t, b), 400;
    }
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((o) => o(0)));
  hideMessage = async (t, o) => {
    console.debug(
      `hideMessage ${t} ${o} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    try {
      return window.BuzzCasting.DashboardData[t.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.DASHBOARD, t.id, o), {
        data: null,
        message: `Dashboard ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getDashboards = async () => ({
    data: null,
    message: "Dashboards get error: ",
    success: !1
  });
  setDashboard = async (t) => {
    const o = `widget.${t.widget}`;
    try {
      return window.BuzzCasting.DashboardData[o] = t, {
        data: null,
        message: `Dashboard ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.DASHBOARD, t, l), {
        data: null,
        message: `Dashboard ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (t) => {
    try {
      return window.BuzzCasting.WidgetData[t.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.WIDGET, t.id, o), {
        data: null,
        message: `Widget ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getWidgets = async () => ({
    data: null,
    message: "Widgets get error: ",
    success: !1
  });
  setWidget = async (t) => {
    const o = `widget.${t.widget}`;
    try {
      return window.BuzzCasting.WidgetData[o] = t, {
        data: null,
        message: `Widget ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, _.WIDGET, t, l), {
        data: null,
        message: `Slide ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (t) => (t.type === _.MESSAGES && (t = Ot(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    c.STORAGE,
    c.NONE,
    c.SUBSCRIBE,
    t.slide,
    t.widget
  ), this.subscribers.push(t)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  getSlide = async (t) => {
    try {
      return window.BuzzCasting.SlideData[t.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Slide ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (t) => {
    try {
      return window.BuzzCasting.SlideData.filter((o) => o.presentation_id === t.presentation);
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, t.presentation_id, o), {
        data: null,
        message: `Slides for presentation ${t.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  setSlide = async (t) => {
    try {
      return window.BuzzCasting.SlideData[t.id] = {
        id: t.slide,
        title: t.data.title || "Not set",
        json: t.data.json || {},
        html: t.data.html || ""
      }, {
        data: null,
        message: `Slide ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.SLIDE, t, o), {
        data: null,
        message: `Slide ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      const o = t.presentation || "none";
      return window.BuzzCasting.PresentationData[o];
    } catch (o) {
      return console.warn("%capi", c.API, _.PRESENTATION, t.presentation, o), {
        data: null,
        message: `Presentation ${t.presentation} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return window.BuzzCasting.PresentationData;
    } catch (t) {
      return console.warn("%capi", c.API, _.PRESENTATION, t), {
        data: null,
        message: `Presentations get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (t) => {
    try {
      return window.BuzzCasting.PresentationData[t.id] = t.data, {
        data: null,
        message: `Presentation ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", c.STORAGE, _.PRESENTATION, t, o), {
        data: null,
        message: `Presentation ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreference = async (t) => {
    try {
      return window.BuzzCasting.Preferences[t.id];
    } catch (o) {
      return console.warn("%capi", c.API, _.PREFERENCE, t.id, o), {
        data: null,
        message: `Preference ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return window.BuzzCasting.Preferences;
    } catch (t) {
      return console.warn("%capi", c.API, _.PREFERENCE, t), {
        data: null,
        message: `Preferences get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPreference = async (t) => {
    try {
      return window.BuzzCasting.Preferences[t.id] = t.value, {
        data: null,
        message: `Preference ${t.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        _.PREFERENCE,
        t,
        o
      ), {
        data: null,
        message: `Preference ${t.id} save error: ${o.message}`,
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
  constructor(t) {
    K(3, [
      "%cpresentation",
      c.PRESENTATION,
      t.presentation,
      J.VERSION,
      xa
    ]), this.options = t, this.sm = null;
    const o = t.presentation;
    switch (this.bc = new BroadcastChannel(o), K(3, ["%cchannel%c %capi", c.BROADCAST, c.NONE, c.API, o]), this.bc.onmessage = (l) => {
      this.actions(l);
    }, this.bc.postMessage({ event: J.STORAGE_INIT, data: {} }), this.api = new ka(t), t.storage) {
      case he.DEXIE:
        this.sm = new Mn(t);
        break;
      case he.LOCAL:
        this.sm = new Ln(t);
        break;
      case he.SESSION:
        this.sm = new Bn(t);
        break;
      case he.KEYVAL:
        this.sm = new Gn(t);
        break;
      case he.WINDOW:
        this.sm = new Wn(t);
        break;
    }
  }
  addSubscriber(t) {
    this.subscribers[t.widget] = t;
  }
  update = async (t) => {
    if (this.sm === null || Object.keys(this.subscribers).length === 0)
      return;
    const o = [];
    Object.values(this.subscribers).forEach((l) => {
      o.push(this.api.get(l));
    }), o.forEach(async (l) => {
      await l.then(
        async (b) => await this.processResponse(b)
      );
    });
  };
  processResponse = async (t) => {
    let o, l = 400;
    if (t.success === !0) {
      const b = this.subscribers[t.query.widget];
      let w = "";
      switch (t.query.type) {
        case _.MESSAGES:
          let C;
          C = t.data.messages.filter(
            (G) => G.id !== null
          ), t.data.messages = C, w = t.data.messages.length > 0 ? Wr(t.data.messages[0].utc) : "none", b?.hash && b.hash === w ? (K(3, [
            "%cload%c %cmessages%c %cno updates",
            c.OK,
            c.NONE,
            c.MESSAGES,
            c.NONE,
            c.NO_UPDATES,
            t.query.widget
          ]), K(4, ["%cmessages", c.MESSAGES, t]), l = 204) : (o = t, b.hash = w, l = await this.sm?.setMessages(t.query, t).then(async (G) => (G = 201, this.broadcastUpdate(G, t))));
          break;
        case _.CLOUD:
          w = Wr(t.data.cloud), b?.hash && b.hash === w ? (K(3, [
            "%cload%c %ccloud%c %cno updates",
            c.OK,
            c.NONE,
            c.CLOUD,
            c.NONE,
            c.NO_UPDATES,
            t.query.widget
          ]), K(4, ["%ccloud", c.CLOUD, t.query]), l = 204) : (b.hash = w, o = {
            data: {
              cloud: t.data
            },
            message: t.message,
            success: t.success,
            query: t.query
          }, l = await this.sm?.setCloud(t.query, o.data).then((G) => this.broadcastUpdate(G, t)));
          break;
        case _.SERIES:
          w = Wr(t.data.series), b?.hash && b.hash === w ? (K(3, [
            "%cload%c %cseries%c %cno updates",
            c.OK,
            c.NONE,
            c.SERIES,
            c.NONE,
            c.NO_UPDATES,
            t.query.widget
          ]), K(4, ["%cseries", c.SERIES, t]), l = 204) : (b.hash = w, o = {
            data: t.data,
            message: t.message,
            success: t.success,
            query: t.query
          }, l = await this.sm?.setSeries(t.query, t.data).then((G) => this.broadcastUpdate(G, t)));
          break;
        default:
          return K(4, [
            "%cfetch%c %capi%c %cno updates",
            c.KO,
            c.NONE,
            c.API,
            c.NONE,
            c.NO_UPDATES,
            `Bad request: type ${t.query.type} unknown`
          ]), t;
      }
    } else
      switch (K(4, [
        `%cload%c %c${t.query}%c %bad request`,
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        t.query
      ]), t.query.type) {
        case _.MESSAGES:
          return await this.sm?.getMessages(t.query).then((b) => {
            this.broadcastUpdate(201, b);
          });
        case _.CLOUD:
          return await this.sm?.getCloud(t.query).then((b) => {
            this.broadcastUpdate(201, b);
          });
        case _.SERIES:
          return await this.sm?.getSeries(t.query).then((b) => {
            this.broadcastUpdate(201, b);
          });
      }
    return l;
  };
  broadcastUpdate = (t, o) => {
    switch (t) {
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
    return t;
  };
  hide = (t) => {
    this.api.hideMessage(t);
  };
  actions = async (t) => {
    switch (t.data.event) {
      case J.SUBSCRIBE:
        this.addSubscriber(t.data.data);
        break;
      case J.UPDATE:
        K(3, [
          "%cupdate%c %capi%c %cstorage",
          c.BROADCAST,
          c.NONE,
          c.API,
          c.NONE,
          c.STORAGE,
          t.data
        ]), await this.update(t.data.data);
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
    const t = this.options?.retention || 86400 * 4, o = await this.sm?.cleanMessages(
      t
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
  hideMessage = async (t) => {
    const o = await this.sm?.hideMessage(t.id, 0);
    return K(3, [
      "%chide%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      `${o} messages hidden`
    ]), await this.api.hideMessage(t);
  };
  hideLabels = async (t) => await this.api.hideLabels(t);
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  getSlide = async (t) => await this.sm?.getSlide(t);
  getSlides = async (t) => await this.sm?.getSlides(t);
  setSlide = async (t) => await this.sm?.setSlide(t);
  loadSlide = async (t) => await this.api.loadSlide(t);
  storeSlide = async (t) => await this.api.storeSlide(t);
  getPresentation = async (t) => await this.sm?.getPresentation(t);
  getPresentations = async (t) => await this.sm?.getPresentations(t);
  setPresentation = async (t) => await this.sm?.setPresentation(t);
  loadPresentation = async (t) => await this.api.loadPresentation(t);
  storePresentation = async (t) => await this.api.storePresentation(t);
  getPreference = async (t) => await this.sm?.getPreference(t);
  getPreferences = async (t) => await this.sm?.getPreferences(t);
  setPreference = async (t) => await this.sm?.setPreference(t);
  loadPreference = async (t) => await this.api.loadPreference(t);
  storePreference = async (t) => await this.api.storePreference(t);
  /*public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
  	return await this.api.loadDashboardWidgets(query);
  };*/
  getWidget = async (t) => await this.sm?.getWidget(t);
  getWidgets = async (t) => await this.sm?.getWidgets(t);
  setWidget = async (t) => await this.sm?.setWidget(t);
  loadDashboards = async (t) => await this.api.loadDashboards(t);
  getDashboard = async (t) => await this.sm?.getDashboard(t);
  getDashboards = async (t) => await this.sm?.getDashboards();
  setDashboard = async (t) => await this.sm?.setDashboard(t);
  loadImages = async () => await this.api.loadImages();
  storeImage = async (t) => await this.api.storeImage(t);
  deleteImage = async (t) => await this.api.deleteImage(t);
}
class Ba {
  sm;
  constructor(t) {
    switch (this.sm = null, t.storage) {
      case he.DEXIE:
        this.sm = new Mn(t);
        break;
      case he.LOCAL:
        this.sm = new Ln(t);
        break;
      case he.SESSION:
        this.sm = new Bn(t);
        break;
      case he.KEYVAL:
        this.sm = new Gn(t);
        break;
      case he.WINDOW:
        this.sm = new Wn(t);
        break;
    }
  }
  /**
   * Retieve Cloud Data
   * @param query Widgets parameters, type "cloud"
   * @returns IResponse
   */
  getCloud = async (t) => t.type !== _.CLOUD ? (console.warn(
    "%cget%c %cstorage%c %ccloud",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.CLOUD,
    t.widget,
    "wrong method call for getMessages, type used is",
    t.type
  ), {
    data: null,
    message: `'wrong method call for getMessages, type used is ${t.type}`,
    success: !1
  }) : await this.sm?.getCloud(t);
  /**
   * Retieve Message Data
   * @param query Widgets parameters, type "messages"
   * @returns IResponse
   */
  getMessages = async (t) => t.type !== _.MESSAGES ? (console.warn(
    "%cget%c %cstorage%c %cmessages",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.MESSAGES,
    t.widget,
    "wrong method call for getMessages, type used is",
    t.type
  ), {
    data: null,
    message: `'wrong method call for getMessages, type used is ${t.type}`,
    success: !1
  }) : await this.sm?.getMessages(t);
  /**
   * Retrieve Series Data
   * @param query Widgets parameters, type "series"
   * @returns IResponse
   */
  getSeries = async (t) => t.type !== _.SERIES ? (console.warn(
    "%cget%c %cstorage%c %cseries",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.SERIES,
    t.widget,
    "wrong method call for getMessages, type used is",
    t.type
  ), {
    data: null,
    message: `'wrong method call for getSeries, type used is ${t.type}`,
    success: !1
  }) : await this.sm?.getSeries(t);
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
  constructor(t, o, l) {
    this.element = t, this.callbacks = o, l = typeof l < "u" ? l : "buzzcasting-app";
    let b;
    b = { ...t.dataset }, delete b.hmr, b.presentation = t.closest(l)?.getAttribute("presentation") ?? `${l} not found`, this.query = b, Da(t);
    const w = window.BuzzCasting.getOptions();
    this.storageReader = new Ba(w), this.broadcastChannel = new BroadcastChannel(b.presentation), this.broadcastListener();
  }
  addCallbackListener(t) {
    this.callbacks.push(t);
  }
  /**
   * Data received from BroadcastChannel
   * data that is broadcast needs to be a IMessage[] |ICloud or ISeries structure
   */
  broadcastListener() {
    const t = this.query;
    this.broadcastChannel.onmessage = async (o) => {
      const l = o.data.data;
      switch (o.data.event) {
        case J.WIDGET_UPDATE:
          try {
            if (l.dashboard === t.dashboard && l.widget === t.widget) {
              const b = await this.getData();
              b?.success && (K(4, [
                "%cset%c %cbroadcast%c %cwidget",
                c.OK,
                c.NONE,
                c.BROADCAST,
                c.NONE,
                c.WIDGET,
                this.query
              ]), this.callbacks.forEach(async (w) => {
                w(b);
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
  showModal = (t) => {
    K(3, [
      "%cwidget",
      c.WIDGET,
      J.SHOW_MODAL,
      t.showComponent,
      // @ts-ignore
      Pa(this.element.attributes)
      //props['data-widget'],
    ]);
    const o = new CustomEvent(J.SHOW_MODAL, {
      detail: {
        component: t.showComponent,
        props: t.props,
        //mergedProps,
        timeout: t?.timeout
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
