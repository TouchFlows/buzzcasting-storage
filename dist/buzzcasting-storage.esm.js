var _ = /* @__PURE__ */ ((h) => (h.CLOUD = "cloud", h.DASHBOARD = "dashboard", h.DASHBOARDS = "dashboards", h.IMAGES = "images", h.MESSAGES = "messages", h.PREFERENCE = "preference", h.PREFERENCES = "preferences", h.PRESENTATION = "presentation", h.PRESENTATIONS = "presentations", h.SERIES = "series", h.SLIDE = "slide", h.SLIDES = "slides", h.TOPICS = "topics", h.WIDGET = "widget", h.WIDGETS = "widgets", h))(_ || {}), i = /* @__PURE__ */ ((h) => (h.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", h.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", h.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", h.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", h.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", h.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", h.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", h.NONE = "color:transparent;background-color:transparent;", h.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", h.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", h.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", h.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", h.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", h.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", h.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", h))(i || {}), X = /* @__PURE__ */ ((h) => (h.ADD_SLIDE = "addSlide", h.APP_READY = "appReady", h.API_UPDATE = "apiUpdate", h.BACKGROUND_UPDATE = "backgroundUpdate", h.WS_API_REQUEST = "wsApiRequest", h.WS_API_RESPONSE = "wsApiResponse", h.WS_API_UPDATE = "wsApiRUpdate", h.APPROVE_MESSAGE = "approveMessage", h.CHANNEL = "channel", h.CLEAN_MESSAGES = "cleanMessages", h.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", h.CLOSE_BUILDER_MODAL = "closeBuilderModal", h.CLOSE_MODAL = "closeModal", h.COLOR_UPDATE = "colorUpdate", h.COMPONENT_INDEX = "componentIndex", h.CSS_SET = "setCss", h.CSS_STORE = "storeCss", h.DASHBOARD_LOAD = "loadDashboard", h.DASHBOARD_STORE = "storeDashboard", h.ERROR = "error", h.HIDE_MESSAGE = "hideMessage", h.HIDE_LABELS = "hideLabels", h.IMAGE_GET = "getImage", h.IMAGE_SET = "setImage", h.IMAGE_STORED = "imageStored", h.LAUPPUT_UPDATE = "layoutUpdate", h.PREV_SLIDE = "prevSlide", h.RELOAD_PRESENTATION = "reloadPresentation", h.STAR_MESSAGE = "starMessage", h.GOTO_SLIDE = "gotoSlide", h.NEXT_SLIDE = "nextSlide", h.PREFERENCE_LOAD = "loadPreference", h.PREFERENCE_STORE = "storePreference", h.PAUSE_PRESENTATION = "pausePresentation", h.PRESENTATION_READY = "presentationReady", h.PRESENTATION_LOAD = "loadPresentation", h.PRESENTATION_STORE = "storePresentation", h.SCREENSHOT_TAKE = "takeScreenshot", h.SCREENSHOT_STORE = "storeScreenshot", h.SECTION_UPDATE = "sectionUpdate", h.SHOW_BUILDER_DIALOG = "showBuilderDialog", h.SHOW_BUILDER_MODAL = "showBuilderModal", h.SHOW_MODAL = "showModal", h.SLIDE_DID_LOAD = "slideDidLoad", h.SLIDE_GET = "getSlide", h.SLIDE_GOTO = "slideGoto", h.SLIDE_LOAD = "loadSlide", h.SLIDE_READY = "slideReady", h.SLIDE_SAVED = "slideSaved", h.SLIDE_SET = "setSlide", h.SLIDE_STORE = "storeSlide", h.SLIDE_STORED = "slideStored", h.SLIDE_TRANSITIONER = "slideTransitioner", h.START_TRANSITIONER = "startTransitioner", h.STORAGE_INIT = "storageInit", h.SUBSCRIBE = "subscribe", h.SUSPEND_ACCOUNT = "suspendAccount", h.SWITCH_PRESENTATION = "switchPresentation", h.REMOVE_CLOUD = "removeCloud", h.UPDATE = "update", h.UPLOAD_COMPLETED = "uploadCompleted", h.VERSION = "version", h.WIDGETS_CLEAR = "widgetsClear", h.WIDGET_DID_UPDATE = "widgetDidUpdate", h.WIDGET_LOAD = "widgetLoad", h.WIDGET_STORE = "widgetStore", h.WIDGET_UPDATE = "widgetUpdate", h))(X || {}), qt = /* @__PURE__ */ ((h) => (h.APPROVED = "approved", h.BEFORE = "before", h.DELAYED = "delayed", h.NONE = "none", h.REALTIME = "realtime", h))(qt || {}), ge = /* @__PURE__ */ ((h) => (h.KEYVAL = "keyval", h.LOCAL = "local", h.SESSION = "session", h.DEXIE = "dexie", h.WINDOW = "window", h))(ge || {});
function Pa(h) {
  const t = {};
  for (let o = 0; o < h.length; o++) {
    const l = h.item(o);
    l?.name && (t[l.name] = l.value);
  }
  return t;
}
function Da(h) {
  const t = document.createRange();
  t.selectNodeContents(h), t.deleteContents();
}
function Ia(h, t) {
  for (; h.length < t; )
    h = `0${h}`;
  return h;
}
function Oe(h, t) {
  let o, l, p;
  if (t.length === 0)
    return h;
  for (o = 0, p = t.length; o < p; o++)
    l = t.charCodeAt(o), h = (h << 5) - h + l, h |= 0;
  return h < 0 ? h * -2 : h;
}
function Na(h, t, o) {
  return Object.keys(t).sort().reduce(l, h);
  function l(p, y) {
    return jn(p, t[y], y, o);
  }
}
function jn(h, t, o, l) {
  const p = Oe(Oe(Oe(h, o), Ta(t)), typeof t);
  if (t === null)
    return Oe(p, "null");
  if (t === void 0)
    return Oe(p, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (l.includes(t))
      return Oe(p, `[Circular]${o}`);
    l.push(t);
    const y = Na(p, t, l);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return y;
    try {
      return Oe(y, String(t.valueOf()));
    } catch (N) {
      return Oe(y, `[valueOf exception]${N.stack || N.message}`);
    }
  }
  return Oe(p, t.toString());
}
function Ta(h) {
  return Object.prototype.toString.call(h);
}
function Lr(h) {
  return Ia(jn(0, h, "", []).toString(16), 8);
}
const at = (h) => {
  let t = {}, o = h.split(",");
  for (let l = 0; l < o.length; l++) t[o[l]] = !0;
  return t;
};
at(
  "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
);
at(
  "a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
);
at(
  "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
);
at("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
at(
  "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
);
at("script,style");
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
      return i.MESSAGES;
    case _.SERIES:
      return i.SERIES;
    case _.CLOUD:
      return i.CLOUD;
    default:
      return i.NO_UPDATES;
  }
};
function Y(h) {
  let t = `${h.type}.${h.topics}`;
  return h.order && (t += `.${h.order}`), h.period && (t += `.${h.period}`), t;
}
function Ra(h) {
  if (h.widget === void 0) {
    const t = h.topics?.split("-");
    t && t.length > 1 ? (h.dashboard = t ? t[0] : "", h.widget = t ? t[1] : "") : (h.widget = h.topics, h.dashboard = h.slide);
  }
  return h;
}
function St(h, t) {
  let o, l, p, y, N;
  switch (h.moderation) {
    case qt.BEFORE:
      o = /* @__PURE__ */ new Date(), l = h.beforeTime?.split(":"), p = Number.parseInt(l ? l[0] : "00"), y = Number.parseInt(l ? l[1] : "00"), N = Number.parseInt(l ? l[2] : "00"), t.before = o.setHours(p, y, N, 0) / 1e3, t.period || (t.period = o.getDay() === 1 ? 72 : 24);
      break;
    case qt.DELAYED:
      h.delay && h.delay > 0 && (t.delay = `${h.delay}`);
      break;
    case qt.APPROVED:
      t.approved = "1";
      break;
    default:
      h.period !== 0 && (t.period = h.period);
  }
  return t;
}
const xa = "3.14.3";
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
  fileHeaders = () => {
    const t = `Bearer ${this.options.bearer}`;
    return {
      headers: new Headers({
        Authorization: t
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
    const { version: o } = this.options, l = this.headers(), p = Object.assign({}, t);
    delete p.type, delete p.hash, delete p.order, p.topics = `${p.dashboard}-${p.widget}`, delete p.presentation;
    const y = Object.keys(p).length > 0 ? `?${new URLSearchParams(p).toString()}` : "";
    let N = "";
    switch (t.type) {
      case _.MESSAGES:
        N = i.MESSAGES;
        break;
      case _.SERIES:
        N = i.SERIES;
        break;
      case _.CLOUD:
        N = i.CLOUD;
        break;
    }
    return K(3, [
      `%cfetch%c %capi%c %c${t.type}`,
      i.OK,
      i.NONE,
      i.API,
      i.NONE,
      N,
      t.widget
    ]), K(4, [t.type, p]), await fetch(
      [this.url, "api", o, t.type].join("/") + y,
      { ...l, method: "get" }
    ).then(async (M) => {
      if (!M.ok)
        throw new Error(`${M.status}`);
      return M;
    }).then((M) => M.json()).then((M) => (M.query = t, M)).catch((M) => ({ success: !1, message: `${M}`, data: null, query: t }));
  }
  async hideMessage(t) {
    const { version: o } = this.options, l = this.headers(), p = "?action=visible";
    return console.info(
      "%capi%c %cput",
      i.API,
      i.NONE,
      i.GET_DATA,
      X.HIDE_MESSAGE,
      t.widget,
      t.id
    ), await fetch(
      [this.url, "api", o, "messages", t.id].join("/") + p,
      { ...l, method: "put" }
    ).then((y) => {
      if (!y.ok)
        throw new Error(y.statusText);
      return y;
    }).then((y) => y.json()).catch((y) => ({ succes: !1, message: y, data: [] }));
  }
  async hideLabels(t) {
    const { version: o } = this.options, l = this.formHeaders(), p = new URLSearchParams(), y = t.labels || [];
    for (const [N, M] of y.entries())
      p.append(`custom_filters[${N}]`, M);
    return console.info(
      "%capi%c %cput",
      i.API,
      i.NONE,
      i.GET_DATA,
      X.HIDE_LABELS,
      t.widget,
      y
    ), await fetch(
      [this.url, "api", o, t.type, t.widget].join("/"),
      { ...l, body: p, method: "put" }
    ).then((N) => {
      if (!N.ok)
        throw new Error(N.statusText);
      return N;
    }).then((N) => N.json()).catch((N) => ({ succes: !1, message: N, data: [] }));
  }
  async loadSlide(t) {
    const { version: o } = this.options, l = this.headers(), p = Object.assign({}, t);
    return delete p.type, delete p.hash, K(3, [
      "%cload%c %capi%c %cslide",
      i.OK,
      i.NONE,
      i.API,
      i.NONE,
      i.SLIDE,
      t.id
    ]), await fetch(
      [this.url, "api", o, "slides", t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (y) => {
      if (!y.ok)
        throw new Error(`${y.status}`);
      return y;
    }).then((y) => y.json()).then((y) => {
      let N;
      return t.type = "slides", y.query = t, y?.data && (Array.isArray(y.data) ? (N = structuredClone(y.data), N.forEach((M) => {
        typeof M.json == "string" && (M.json = JSON.parse(M.json));
      })) : (N = structuredClone(y.data), N.json = JSON.parse(N.json)), y.data = N), y;
    }).catch((y) => ({ success: !1, message: `${y}`, data: null }));
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
    const p = JSON.stringify(t);
    return K(3, [
      "%cput%c %capi%c %cslide",
      i.OK,
      i.NONE,
      i.API,
      i.NONE,
      i.SLIDE,
      X.SLIDE_STORE,
      t.id
    ]), await fetch(
      [this.url, "api", o, "slides", t.id].join("/"),
      { ...l, body: p, method: "put" }
    ).then((y) => {
      if (!y.ok)
        throw new Error(y.statusText);
      return y;
    }).then((y) => y.json()).catch((y) => ({ succes: !1, message: y, data: [] }));
  }
  async loadPresentation(t) {
    const { version: o } = this.options, l = this.headers();
    return delete t.update, K(3, [
      "%cload%c %capi%c %cpresentation",
      i.OK,
      i.NONE,
      i.API,
      i.NONE,
      i.PRESENTATION,
      t.id
    ]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (p) => {
      if (!p.ok)
        throw new Error(`${p.status}`);
      return p;
    }).then((p) => p.json()).then((p) => {
      let y;
      return t.type = "presentations", p.query = t, p?.data && (y = structuredClone(p.data), p.data = y), p;
    }).catch((p) => ({ success: !1, message: `${p}`, data: null }));
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
    const p = JSON.stringify(t);
    return K(2, ["%capi%c %cput", i.API, i.NONE, i.PRESENTATION, t.name]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, t.id].join("/"),
      { ...l, body: p, method: "put" }
    ).then((y) => {
      if (!y.ok)
        throw new Error(y.statusText);
      return y;
    }).then((y) => y.json()).catch((y) => ({ succes: !1, message: y, data: [] }));
  }
  async loadPreference(t) {
    const { version: o } = this.options, l = this.headers();
    return K(3, [
      "%cload%c %capi%c %cpreference",
      i.OK,
      i.NONE,
      i.API,
      i.NONE,
      i.APP,
      t.id
    ]), await fetch(
      [this.url, "api", o, _.PREFERENCES, t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (p) => {
      if (!p.ok)
        throw new Error(`${p.status}`);
      return p;
    }).then((p) => p.json()).then((p) => (t.type = "preference", p.query = t, p)).catch((p) => ({ success: !1, message: `${p}`, data: null }));
  }
  async storePreference(t) {
    const { version: o } = this.options, l = this.formHeaders();
    delete t.update;
    const p = JSON.stringify({ data: t });
    return console.info(
      "%capi%c %cstorePreference",
      i.API,
      i.NONE,
      i.APP,
      t.id
    ), await fetch(
      [this.url, "api", o, _.PREFERENCES, t.id].join("/"),
      { ...l, body: p, method: "put" }
    ).then((y) => {
      if (!y.ok)
        throw new Error(y.statusText);
      return y;
    }).then((y) => y.json()).catch((y) => ({ succes: !1, message: y, data: [] }));
  }
  async loadDashboards(t) {
    const { version: o } = this.options, l = this.headers();
    return K(3, ["%capi%c %cdashboards", i.API, i.NONE, i.WIDGET]), await fetch(
      [this.url, "api", o, _.WIDGETS, t?.id || ""].join("/"),
      {
        ...l,
        method: "get"
      }
    ).then(async (p) => {
      if (!p.ok)
        throw new Error(`${p.status}`);
      return p;
    }).then((p) => p.json()).then((p) => ({
      data: { dashboards: p },
      message: "Dashboard Widgets loaded from api",
      success: !0
    })).catch((p) => ({ success: !1, message: `${p}`, data: null }));
  }
  async loadImages(t) {
    const { version: o } = this.options, l = this.headers();
    return console.info(
      "%cload%c %capi%c %cimage",
      i.OK,
      i.NONE,
      i.API,
      i.NONE,
      i.WIDGET
    ), await fetch(
      `${[this.url, "api", o, _.IMAGES].join(
        "/"
      )}?folder=${t}`,
      {
        ...l,
        method: "get"
      }
    ).then(async (p) => {
      if (!p.ok)
        throw new Error(`${p.status}`);
      return p;
    }).then((p) => p.json()).then((p) => ({
      data: { images: p.data },
      message: "Images loaded via api",
      success: !0
    })).catch((p) => ({ success: !1, message: `${p}`, data: null }));
  }
  async storeImage(t) {
    const { version: o } = this.options, l = this.fileHeaders(), p = t;
    return console.info(
      "%capi%c %cstoreImage",
      i.API,
      i.NONE,
      i.WIDGET,
      t.get("name")
    ), await fetch(
      `${[this.url, "api", o, _.IMAGES].join(
        "/"
      )}?folder=${t.get("folder")}`,
      {
        ...l,
        body: p,
        method: "post"
      }
    ).then((y) => {
      if (!y.ok)
        throw new Error(y.statusText);
      return y;
    }).then((y) => y.json()).catch((y) => ({ succes: !1, message: y, data: [] }));
  }
  async deleteImage(t, o) {
    const { version: l } = this.options, p = this.formHeaders();
    return console.info(
      "%capi%c %cdeleteImage",
      i.API,
      i.NONE,
      i.WIDGET,
      o
    ), await fetch(
      `${[this.url, "api", l, _.IMAGES, o].join(
        "/"
      )}?folder=${t}`,
      { ...p, method: "delete" }
    ).then((y) => {
      if (!y.ok)
        throw new Error(y.statusText);
      return y;
    }).then((y) => y.json()).catch((y) => ({ succes: !1, message: y, data: [] }));
  }
}
var Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $a(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var er = { exports: {} }, ja = er.exports, Cn;
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
      function p(e, r, n) {
        for (var a, s = 0, c = r.length; s < c; s++) !a && s in r || ((a = a || Array.prototype.slice.call(r, 0, s))[s] = r[s]);
        return e.concat(a || Array.prototype.slice.call(r));
      }
      var y = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, N = Object.keys, M = Array.isArray;
      function te(e, r) {
        return typeof r != "object" || N(r).forEach(function(n) {
          e[n] = r[n];
        }), e;
      }
      typeof Promise > "u" || y.Promise || (y.Promise = Promise);
      var se = Object.getPrototypeOf, Ot = {}.hasOwnProperty;
      function re(e, r) {
        return Ot.call(e, r);
      }
      function pe(e, r) {
        typeof r == "function" && (r = r(se(e))), (typeof Reflect > "u" ? N : Reflect.ownKeys)(r).forEach(function(n) {
          Ae(e, n, r[n]);
        });
      }
      var zr = Object.defineProperty;
      function Ae(e, r, n, a) {
        zr(e, r, te(n && re(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, a));
      }
      function Ve(e) {
        return { from: function(r) {
          return e.prototype = Object.create(r.prototype), Ae(e.prototype, "constructor", e), { extend: pe.bind(null, e.prototype) };
        } };
      }
      var Fn = Object.getOwnPropertyDescriptor, Un = [].slice;
      function _t(e, r, n) {
        return Un.call(e, r, n);
      }
      function Hr(e, r) {
        return r(e);
      }
      function st(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Vr(e) {
        y.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ve(e, r) {
        if (typeof r == "string" && re(e, r)) return e[r];
        if (!r) return e;
        if (typeof r != "string") {
          for (var n = [], a = 0, s = r.length; a < s; ++a) {
            var c = ve(e, r[a]);
            n.push(c);
          }
          return n;
        }
        var u = r.indexOf(".");
        if (u !== -1) {
          var d = e[r.substr(0, u)];
          return d == null ? void 0 : ve(d, r.substr(u + 1));
        }
      }
      function le(e, r, n) {
        if (e && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof r != "string" && "length" in r) {
          st(typeof n != "string" && "length" in n);
          for (var a = 0, s = r.length; a < s; ++a) le(e, r[a], n[a]);
        } else {
          var c, u, d = r.indexOf(".");
          d !== -1 ? (c = r.substr(0, d), (u = r.substr(d + 1)) === "" ? n === void 0 ? M(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = n : le(d = !(d = e[c]) || !re(e, c) ? e[c] = {} : d, u, n)) : n === void 0 ? M(e) && !isNaN(parseInt(r)) ? e.splice(r, 1) : delete e[r] : e[r] = n;
        }
      }
      function Yr(e) {
        var r, n = {};
        for (r in e) re(e, r) && (n[r] = e[r]);
        return n;
      }
      var zn = [].concat;
      function Qr(e) {
        return zn.apply([], e);
      }
      var Me = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Qr([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + e + "Array";
        });
      }))).filter(function(e) {
        return y[e];
      }), Xr = new Set(Me.map(function(e) {
        return y[e];
      })), ot = null;
      function Ce(e) {
        return ot = /* @__PURE__ */ new WeakMap(), e = function r(n) {
          if (!n || typeof n != "object") return n;
          var a = ot.get(n);
          if (a) return a;
          if (M(n)) {
            a = [], ot.set(n, a);
            for (var s = 0, c = n.length; s < c; ++s) a.push(r(n[s]));
          } else if (Xr.has(n.constructor)) a = n;
          else {
            var u, d = se(n);
            for (u in a = d === Object.prototype ? {} : Object.create(d), ot.set(n, a), n) re(n, u) && (a[u] = r(n[u]));
          }
          return a;
        }(e), ot = null, e;
      }
      var Hn = {}.toString;
      function tr(e) {
        return Hn.call(e).slice(8, -1);
      }
      var rr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Vn = typeof rr == "symbol" ? function(e) {
        var r;
        return e != null && (r = e[rr]) && r.apply(e);
      } : function() {
        return null;
      };
      function $e(e, r) {
        return r = e.indexOf(r), 0 <= r && e.splice(r, 1), 0 <= r;
      }
      var Ye = {};
      function Ee(e) {
        var r, n, a, s;
        if (arguments.length === 1) {
          if (M(e)) return e.slice();
          if (this === Ye && typeof e == "string") return [e];
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
      var nr = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ut = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], he = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ut), Yn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Qe(e, r) {
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
      function At(e, r, n, a) {
        this.failures = r, this.failedKeys = a, this.successCount = n, this.message = Jr(e, r);
      }
      function Xe(e, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(n) {
          return r[n];
        }), this.failuresByPos = r, this.message = Jr(e, this.failures);
      }
      Ve(Qe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ve(At).from(Qe), Ve(Xe).from(Qe);
      var ar = he.reduce(function(e, r) {
        return e[r] = r + "Error", e;
      }, {}), Qn = Qe, L = he.reduce(function(e, r) {
        var n = r + "Error";
        function a(s, c) {
          this.name = n, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Yn[r] || n, this.inner = null);
        }
        return Ve(a).from(Qn), e[r] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var Zr = ut.reduce(function(e, r) {
        return e[r + "Error"] = L[r], e;
      }, {}), Pt = he.reduce(function(e, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (e[r + "Error"] = L[r]), e;
      }, {});
      function Q() {
      }
      function it(e) {
        return e;
      }
      function Xn(e, r) {
        return e == null || e === it ? r : function(n) {
          return r(e(n));
        };
      }
      function je(e, r) {
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
          var c = r.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? je(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? je(s, this.onerror) : s), c !== void 0 ? c : n;
        };
      }
      function Zn(e, r) {
        return e === Q ? r : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? je(n, this.onsuccess) : n), a && (this.onerror = this.onerror ? je(a, this.onerror) : a);
        };
      }
      function qn(e, r) {
        return e === Q ? r : function(n) {
          var a = e.apply(this, arguments);
          te(n, a);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = r.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? je(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? je(c, this.onerror) : c), a === void 0 ? n === void 0 ? void 0 : n : te(a, n);
        };
      }
      function ea(e, r) {
        return e === Q ? r : function() {
          return r.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function sr(e, r) {
        return e === Q ? r : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var a = this, s = arguments.length, c = new Array(s); s--; ) c[s] = arguments[s];
            return n.then(function() {
              return r.apply(a, c);
            });
          }
          return r.apply(this, arguments);
        };
      }
      Pt.ModifyError = At, Pt.DexieError = Qe, Pt.BulkError = Xe;
      var me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function qr(e) {
        me = e;
      }
      var ct = {}, en = 100, Me = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, se(e), e];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, se(r), e];
      }(), ut = Me[0], he = Me[1], Me = Me[2], he = he && he.then, Ge = ut && ut.constructor, or = !!Me, lt = function(e, r) {
        dt.push([e, r]), Dt && (queueMicrotask(ra), Dt = !1);
      }, ir = !0, Dt = !0, Ke = [], It = [], cr = it, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Pe, dt = [], Be = 0, Nt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = B;
        if (typeof e != "function") {
          if (e !== ct) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && lr(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function n(a, s) {
          try {
            s(function(c) {
              if (a._state === null) {
                if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Je();
                c && typeof c.then == "function" ? n(a, function(d, g) {
                  c instanceof j ? c._then(d, g) : c.then(d, g);
                }) : (a._state = !0, a._value = c, rn(a)), u && Ze();
              }
            }, lr.bind(null, a));
          } catch (c) {
            lr(a, c);
          }
        }(this, e);
      }
      var ur = { get: function() {
        var e = B, r = kt;
        function n(a, s) {
          var c = this, u = !e.global && (e !== B || r !== kt), d = u && !Ie(), g = new j(function(b, w) {
            dr(c, new tn(an(a, e, u, d), an(s, e, u, d), b, w, e));
          });
          return this._consoleTask && (g._consoleTask = this._consoleTask), g;
        }
        return n.prototype = ct, n;
      }, set: function(e) {
        Ae(this, "then", e && e.prototype === ct ? ur : { get: function() {
          return e;
        }, set: ur.set });
      } };
      function tn(e, r, n, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = n, this.reject = a, this.psd = s;
      }
      function lr(e, r) {
        var n, a;
        It.push(r), e._state === null && (n = e._lib && Je(), r = cr(r), e._state = !1, e._value = r, a = e, Ke.some(function(s) {
          return s._value === a._value;
        }) || Ke.push(a), rn(e), n && Ze());
      }
      function rn(e) {
        var r = e._listeners;
        e._listeners = [];
        for (var n = 0, a = r.length; n < a; ++n) dr(e, r[n]);
        var s = e._PSD;
        --s.ref || s.finalize(), Be === 0 && (++Be, lt(function() {
          --Be == 0 && fr();
        }, []));
      }
      function dr(e, r) {
        if (e._state !== null) {
          var n = e._state ? r.onFulfilled : r.onRejected;
          if (n === null) return (e._state ? r.resolve : r.reject)(e._value);
          ++r.psd.ref, ++Be, lt(ta, [n, e, r]);
        } else e._listeners.push(r);
      }
      function ta(e, r, n) {
        try {
          var a, s = r._value;
          !r._state && It.length && (It = []), a = me && r._consoleTask ? r._consoleTask.run(function() {
            return e(s);
          }) : e(s), r._state || It.indexOf(s) !== -1 || function(c) {
            for (var u = Ke.length; u; ) if (Ke[--u]._value === c._value) return Ke.splice(u, 1);
          }(r), n.resolve(a);
        } catch (c) {
          n.reject(c);
        } finally {
          --Be == 0 && fr(), --n.psd.ref || n.psd.finalize();
        }
      }
      function ra() {
        Le(Pe, function() {
          Je() && Ze();
        });
      }
      function Je() {
        var e = ir;
        return Dt = ir = !1, e;
      }
      function Ze() {
        var e, r, n;
        do
          for (; 0 < dt.length; ) for (e = dt, dt = [], n = e.length, r = 0; r < n; ++r) {
            var a = e[r];
            a[0].apply(null, a[1]);
          }
        while (0 < dt.length);
        Dt = ir = !0;
      }
      function fr() {
        var e = Ke;
        Ke = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var r = Nt.slice(0), n = r.length; n; ) r[--n]();
      }
      function Tt(e) {
        return new j(ct, !1, e);
      }
      function Z(e, r) {
        var n = B;
        return function() {
          var a = Je(), s = B;
          try {
            return Ne(n, !0), e.apply(this, arguments);
          } catch (c) {
            r && r(c);
          } finally {
            Ne(s, !1), a && Ze();
          }
        };
      }
      pe(j.prototype, { then: ur, _then: function(e, r) {
        dr(this, new tn(null, null, e, r, B));
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
          var c = setTimeout(function() {
            return s(new L.Timeout(r));
          }, e);
          n.then(a, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = nn(), pe(j, { all: function() {
        var e = Ee.apply(null, arguments).map(Ct);
        return new j(function(r, n) {
          e.length === 0 && r([]);
          var a = e.length;
          e.forEach(function(s, c) {
            return j.resolve(s).then(function(u) {
              e[c] = u, --a || r(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(r, n) {
          e.then(r, n);
        }) : new j(ct, !0, e);
      }, reject: Tt, race: function() {
        var e = Ee.apply(null, arguments).map(Ct);
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
        return kt;
      } }, newPSD: De, usePSD: Le, scheduler: { get: function() {
        return lt;
      }, set: function(e) {
        lt = e;
      } }, rejectionMapper: { get: function() {
        return cr;
      }, set: function(e) {
        cr = e;
      } }, follow: function(e, r) {
        return new j(function(n, a) {
          return De(function(s, c) {
            var u = B;
            u.unhandleds = [], u.onunhandled = c, u.finalize = je(function() {
              var d, g = this;
              d = function() {
                g.unhandleds.length === 0 ? s() : c(g.unhandleds[0]);
              }, Nt.push(function b() {
                d(), Nt.splice(Nt.indexOf(b), 1);
              }), ++Be, lt(function() {
                --Be == 0 && fr();
              }, []);
            }, u.finalize), e();
          }, r, n, a);
        });
      } }), Ge && (Ge.allSettled && Ae(j, "allSettled", function() {
        var e = Ee.apply(null, arguments).map(Ct);
        return new j(function(r) {
          e.length === 0 && r([]);
          var n = e.length, a = new Array(n);
          e.forEach(function(s, c) {
            return j.resolve(s).then(function(u) {
              return a[c] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[c] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || r(a);
            });
          });
        });
      }), Ge.any && typeof AggregateError < "u" && Ae(j, "any", function() {
        var e = Ee.apply(null, arguments).map(Ct);
        return new j(function(r, n) {
          e.length === 0 && n(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(c, u) {
            return j.resolve(c).then(function(d) {
              return r(d);
            }, function(d) {
              s[u] = d, --a || n(new AggregateError(s));
            });
          });
        });
      }), Ge.withResolvers && (j.withResolvers = Ge.withResolvers));
      var ne = { awaits: 0, echoes: 0, id: 0 }, na = 0, Rt = [], xt = 0, kt = 0, aa = 0;
      function De(e, r, n, a) {
        var s = B, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++aa, Pe.env, c.env = or ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, r && te(c, r), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = Le(c, e, n, a), c.ref === 0 && c.finalize(), a;
      }
      function qe() {
        return ne.id || (ne.id = ++na), ++ne.awaits, ne.echoes += en, ne.id;
      }
      function Ie() {
        return !!ne.awaits && (--ne.awaits == 0 && (ne.id = 0), ne.echoes = ne.awaits * en, !0);
      }
      function Ct(e) {
        return ne.echoes && e && e.constructor === Ge ? (qe(), e.then(function(r) {
          return Ie(), r;
        }, function(r) {
          return Ie(), q(r);
        })) : e;
      }
      function sa() {
        var e = Rt[Rt.length - 1];
        Rt.pop(), Ne(e, !1);
      }
      function Ne(e, r) {
        var n, a = B;
        (r ? !ne.echoes || xt++ && e === B : !xt || --xt && e === B) || queueMicrotask(r ? function(s) {
          ++kt, ne.echoes && --ne.echoes != 0 || (ne.echoes = ne.awaits = ne.id = 0), Rt.push(B), Ne(s, !0);
        }.bind(null, e) : sa), e !== B && (B = e, a === Pe && (Pe.env = nn()), or && (n = Pe.env.Promise, r = e.env, (a.global || e.global) && (Object.defineProperty(y, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any && (n.any = r.any))));
      }
      function nn() {
        var e = y.Promise;
        return or ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(y, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Le(e, r, n, a, s) {
        var c = B;
        try {
          return Ne(e, !0), r(n, a, s);
        } finally {
          Ne(c, !1);
        }
      }
      function an(e, r, n, a) {
        return typeof e != "function" ? e : function() {
          var s = B;
          n && qe(), Ne(r, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ne(s, !1), a && queueMicrotask(Ie);
          }
        };
      }
      function hr(e) {
        Promise === Ge && ne.echoes === 0 ? xt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + he).indexOf("[native code]") === -1 && (qe = Ie = Q);
      var q = j.reject, We = "￿", we = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", sn = "String expected.", et = [], $t = "__dbnames", gr = "readonly", pr = "readwrite";
      function Fe(e, r) {
        return e ? r ? function() {
          return e.apply(this, arguments) && r.apply(this, arguments);
        } : e : r;
      }
      var on = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function jt(e) {
        return typeof e != "string" || /\./.test(e) ? function(r) {
          return r;
        } : function(r) {
          return r[e] === void 0 && e in r && delete (r = Ce(r))[e], r;
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
              return function(s, c) {
                for (var u = s.length, d = c.length, g = u < d ? u : d, b = 0; b < g; ++b) if (s[b] !== c[b]) return s[b] < c[b] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(ln(e), ln(r));
            case "Array":
              return function(s, c) {
                for (var u = s.length, d = c.length, g = u < d ? u : d, b = 0; b < g; ++b) {
                  var w = H(s[b], c[b]);
                  if (w !== 0) return w;
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
        return r != "object" ? r : ArrayBuffer.isView(e) ? "binary" : (e = tr(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ln(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var dn = (J.prototype._trans = function(e, r, n) {
        var a = this._tx || B.trans, s = this.name, c = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(b, w, f) {
          if (!f.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return r(f.idbtrans, f);
        }
        var d = Je();
        try {
          var g = a && a.db._novip === this.db._novip ? a === B.trans ? a._promise(e, u, n) : De(function() {
            return a._promise(e, u, n);
          }, { trans: a, transless: B.transless || B }) : function b(w, f, O, m) {
            if (w.idbdb && (w._state.openComplete || B.letThrough || w._vip)) {
              var E = w._createTransaction(f, O, w._dbSchema);
              try {
                E.create(), w._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === ar.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return b(w, f, O, m);
                })) : q(S);
              }
              return E._promise(f, function(S, v) {
                return De(function() {
                  return B.trans = E, m(S, v, E);
                });
              }).then(function(S) {
                if (f === "readwrite") try {
                  E.idbtrans.commit();
                } catch {
                }
                return f === "readonly" ? S : E._completion.then(function() {
                  return S;
                });
              });
            }
            if (w._state.openComplete) return q(new L.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return q(new L.DatabaseClosed());
              w.open().catch(Q);
            }
            return w._state.dbReadyPromise.then(function() {
              return b(w, f, O, m);
            });
          }(this.db, e, [this.name], u);
          return c && (g._consoleTask = c, g = g.catch(function(b) {
            return console.trace(b), q(b);
          })), g;
        } finally {
          d && Ze();
        }
      }, J.prototype.get = function(e, r) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(r) : e == null ? q(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return n.core.get({ trans: a, key: e }).then(function(s) {
            return n.hook.reading.fire(s);
          });
        }).then(r);
      }, J.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (M(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var r = N(e);
        if (r.length === 1) return this.where(r[0]).equals(e[r[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && r.every(function(b) {
            return 0 <= d.keyPath.indexOf(b);
          })) {
            for (var g = 0; g < r.length; ++g) if (r.indexOf(d.keyPath[g]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, g) {
          return d.keyPath.length - g.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== We) {
          var c = n.keyPath.slice(0, r.length);
          return this.where(c).equals(c.map(function(g) {
            return e[g];
          }));
        }
        !n && me && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, g) {
          return H(d, g) === 0;
        }
        var u = r.reduce(function(f, g) {
          var b = f[0], w = f[1], f = a[g], O = e[g];
          return [b || f, b || !f ? Fe(w, f && f.multi ? function(m) {
            return m = ve(m, g), M(m) && m.some(function(E) {
              return s(O, E);
            });
          } : function(m) {
            return s(O, ve(m, g));
          }) : w];
        }, [null, null]), c = u[0], u = u[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(u) : n ? this.filter(u) : this.where(r).equals("");
      }, J.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, J.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, J.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, J.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, J.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, J.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, J.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, J.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, M(e) ? "[".concat(e.join("+"), "]") : e));
      }, J.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, J.prototype.mapToClass = function(e) {
        var r, n = this.db, a = this.name;
        function s() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof cn && (function(g, b) {
          if (typeof b != "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          function w() {
            this.constructor = g;
          }
          o(g, b), g.prototype = b === null ? Object.create(b) : (w.prototype = b.prototype, new w());
        }(s, r = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), u = e.prototype; u; u = se(u)) Object.getOwnPropertyNames(u).forEach(function(g) {
          return c.add(g);
        });
        function d(g) {
          if (!g) return g;
          var b, w = Object.create(e.prototype);
          for (b in g) if (!c.has(b)) try {
            w[b] = g[b];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, J.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          te(this, e);
        });
      }, J.prototype.add = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, c = a.keyPath, u = e;
        return c && s && (u = jt(c)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: r != null ? [r] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? j.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            le(e, c, d);
          } catch {
          }
          return d;
        });
      }, J.prototype.update = function(e, r) {
        return typeof e != "object" || M(e) ? this.where(":id").equals(e).modify(r) : (e = ve(e, this.schema.primKey.keyPath), e === void 0 ? q(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(r));
      }, J.prototype.put = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, c = a.keyPath, u = e;
        return c && s && (u = jt(c)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [u], keys: r != null ? [r] : null });
        }).then(function(d) {
          return d.numFailures ? j.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            le(e, c, d);
          } catch {
          }
          return d;
        });
      }, J.prototype.delete = function(e) {
        var r = this;
        return this._trans("readwrite", function(n) {
          return r.core.mutate({ trans: n, type: "delete", keys: [e] });
        }).then(function(n) {
          return n.numFailures ? j.reject(n.failures[0]) : void 0;
        });
      }, J.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(r) {
          return e.core.mutate({ trans: r, type: "deleteRange", range: on });
        }).then(function(r) {
          return r.numFailures ? j.reject(r.failures[0]) : void 0;
        });
      }, J.prototype.bulkGet = function(e) {
        var r = this;
        return this._trans("readonly", function(n) {
          return r.core.getMany({ keys: e, trans: n }).then(function(a) {
            return a.map(function(s) {
              return r.hook.reading.fire(s);
            });
          });
        });
      }, J.prototype.bulkAdd = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, c = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var b = a.schema.primKey, d = b.auto, b = b.keyPath;
          if (b && s) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var g = e.length, b = b && d ? e.map(jt(b)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: b, wantResults: c }).then(function(E) {
            var f = E.numFailures, O = E.results, m = E.lastResult, E = E.failures;
            if (f === 0) return c ? O : m;
            throw new Xe("".concat(a.name, ".bulkAdd(): ").concat(f, " of ").concat(g, " operations failed"), E);
          });
        });
      }, J.prototype.bulkPut = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, c = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var b = a.schema.primKey, d = b.auto, b = b.keyPath;
          if (b && s) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var g = e.length, b = b && d ? e.map(jt(b)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: b, wantResults: c }).then(function(E) {
            var f = E.numFailures, O = E.results, m = E.lastResult, E = E.failures;
            if (f === 0) return c ? O : m;
            throw new Xe("".concat(a.name, ".bulkPut(): ").concat(f, " of ").concat(g, " operations failed"), E);
          });
        });
      }, J.prototype.bulkUpdate = function(e) {
        var r = this, n = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), c = [];
        return this._trans("readwrite", function(u) {
          return n.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
            var g = [], b = [];
            e.forEach(function(f, O) {
              var m = f.key, E = f.changes, S = d[O];
              if (S) {
                for (var v = 0, A = Object.keys(E); v < A.length; v++) {
                  var P = A[v], D = E[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (H(D, m) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else le(S, P, D);
                }
                c.push(O), g.push(m), b.push(S);
              }
            });
            var w = g.length;
            return n.mutate({ trans: u, type: "put", keys: g, values: b, updates: { keys: a, changeSpecs: s } }).then(function(f) {
              var O = f.numFailures, m = f.failures;
              if (O === 0) return w;
              for (var E = 0, S = Object.keys(m); E < S.length; E++) {
                var v, A = S[E], P = c[Number(A)];
                P != null && (v = m[A], delete m[A], m[P] = v);
              }
              throw new Xe("".concat(r.name, ".bulkUpdate(): ").concat(O, " of ").concat(w, " operations failed"), m);
            });
          });
        });
      }, J.prototype.bulkDelete = function(e) {
        var r = this, n = e.length;
        return this._trans("readwrite", function(a) {
          return r.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(u) {
          var s = u.numFailures, c = u.lastResult, u = u.failures;
          if (s === 0) return c;
          throw new Xe("".concat(r.name, ".bulkDelete(): ").concat(s, " of ").concat(n, " operations failed"), u);
        });
      }, J);
      function J() {
      }
      function ft(e) {
        function r(u, d) {
          if (d) {
            for (var g = arguments.length, b = new Array(g - 1); --g; ) b[g - 1] = arguments[g];
            return n[u].subscribe.apply(null, b), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
        r.addEventType = c;
        for (var a = 1, s = arguments.length; a < s; ++a) c(arguments[a]);
        return r;
        function c(u, d, g) {
          if (typeof u != "object") {
            var b;
            d = d || ea;
            var w = { subscribers: [], fire: g = g || Q, subscribe: function(f) {
              w.subscribers.indexOf(f) === -1 && (w.subscribers.push(f), w.fire = d(w.fire, f));
            }, unsubscribe: function(f) {
              w.subscribers = w.subscribers.filter(function(O) {
                return O !== f;
              }), w.fire = w.subscribers.reduce(d, g);
            } };
            return n[u] = r[u] = w;
          }
          N(b = u).forEach(function(f) {
            var O = b[f];
            if (M(O)) c(f, b[f][0], b[f][1]);
            else {
              if (O !== "asap") throw new L.InvalidArgument("Invalid event config");
              var m = c(f, it, function() {
                for (var E = arguments.length, S = new Array(E); E--; ) S[E] = arguments[E];
                m.subscribers.forEach(function(v) {
                  Vr(function() {
                    v.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function ht(e, r) {
        return Ve(r).from({ prototype: e }), r;
      }
      function tt(e, r) {
        return !(e.filter || e.algorithm || e.or) && (r ? e.justLimit : !e.replayFilter);
      }
      function mr(e, r) {
        e.filter = Fe(e.filter, r);
      }
      function yr(e, r, n) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Fe(a(), r());
        } : r, e.justLimit = n && !a;
      }
      function Mt(e, r) {
        if (e.isPrimKey) return r.primaryKey;
        var n = r.getIndexByKeyPath(e.index);
        if (!n) throw new L.Schema("KeyPath " + e.index + " on object store " + r.name + " is not indexed");
        return n;
      }
      function fn(e, r, n) {
        var a = Mt(e, r.schema);
        return r.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Gt(e, r, n, a) {
        var s = e.replayFilter ? Fe(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, u = function(d, g, b) {
            var w, f;
            s && !s(g, b, function(O) {
              return g.stop(O);
            }, function(O) {
              return g.fail(O);
            }) || ((f = "" + (w = g.primaryKey)) == "[object ArrayBuffer]" && (f = "" + new Uint8Array(w)), re(c, f) || (c[f] = !0, r(d, g, b)));
          };
          return Promise.all([e.or._iterate(u, n), hn(fn(e, a, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return hn(fn(e, a, n), Fe(e.algorithm, s), r, !e.keysOnly && e.valueMapper);
      }
      function hn(e, r, n, a) {
        var s = Z(a ? function(c, u, d) {
          return n(a(c), u, d);
        } : n);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var u = function() {
              return c.continue();
            };
            r && !r(c, function(d) {
              return u = d;
            }, function(d) {
              c.stop(d), u = Q;
            }, function(d) {
              c.fail(d), u = Q;
            }) || s(c.value, c, function(d) {
              return u = d;
            }), u();
          });
        });
      }
      var gt = (gn.prototype.execute = function(e) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var n = r.add;
          if (M(n)) return p(p([], M(e) ? e : [], !0), n).sort();
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
          if (M(a)) return M(e) ? e.filter(function(s) {
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
        r.algorithm = Fe(r.algorithm, e);
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
          if (tt(a, !0)) return s.count({ trans: n, query: { index: Mt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var c = 0;
          return Gt(a, function() {
            return ++c, !1;
          }, n, s).then(function() {
            return c;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, r) {
        var n = e.split(".").reverse(), a = n[0], s = n.length - 1;
        function c(g, b) {
          return b ? c(g[n[b]], b - 1) : g[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(g, b) {
          return H(c(g, s), c(b, s)) * u;
        }
        return this.toArray(function(g) {
          return g.sort(d);
        }).then(r);
      }, V.prototype.toArray = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx;
          if (a.dir === "next" && tt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, c = Mt(a, a.table.core.schema);
            return a.table.core.query({ trans: n, limit: a.limit, values: !0, query: { index: c, range: a.range } }).then(function(d) {
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
        return e <= 0 || (r.offset += e, tt(r) ? yr(r, function() {
          var n = e;
          return function(a, s) {
            return n === 0 || (n === 1 ? --n : s(function() {
              a.advance(n), n = 0;
            }), !1);
          };
        }) : yr(r, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, V.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), yr(this._ctx, function() {
          var r = e;
          return function(n, a, s) {
            return --r <= 0 && a(s), 0 <= r;
          };
        }, !0), this;
      }, V.prototype.until = function(e, r) {
        return mr(this._ctx, function(n, a, s) {
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
        return mr(this._ctx, function(n) {
          return e(n.value);
        }), (r = this._ctx).isMatch = Fe(r.isMatch, e), this;
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
        if (r.dir === "next" && tt(r, !0) && 0 < r.limit) return this._read(function(a) {
          var s = Mt(r, r.table.core.schema);
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
        return mr(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = re(r, a);
          return r[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var r = this, n = this._ctx;
        return this._write(function(a) {
          var s, c, u;
          u = typeof e == "function" ? e : (s = N(e), c = s.length, function(v) {
            for (var A = !1, P = 0; P < c; ++P) {
              var D = s[P], I = e[D], T = ve(v, D);
              I instanceof gt ? (le(v, D, I.execute(T)), A = !0) : T !== I && (le(v, D, I), A = !0);
            }
            return A;
          });
          var d = n.table.core, f = d.schema.primaryKey, g = f.outbound, b = f.extractKey, w = 200, f = r.db._options.modifyChunkSize;
          f && (w = typeof f == "object" ? f[d.name] || f["*"] || 200 : f);
          function O(v, D) {
            var P = D.failures, D = D.numFailures;
            E += v - D;
            for (var I = 0, T = N(P); I < T.length; I++) {
              var C = T[I];
              m.push(P[C]);
            }
          }
          var m = [], E = 0, S = [];
          return r.clone().primaryKeys().then(function(v) {
            function A(D) {
              var I = Math.min(w, v.length - D);
              return d.getMany({ trans: a, keys: v.slice(D, D + I), cache: "immutable" }).then(function(T) {
                for (var C = [], R = [], x = g ? [] : null, $ = [], k = 0; k < I; ++k) {
                  var G = T[k], F = { value: Ce(G), primKey: v[D + k] };
                  u.call(F, F.value, F) !== !1 && (F.value == null ? $.push(v[D + k]) : g || H(b(G), b(F.value)) === 0 ? (R.push(F.value), g && x.push(v[D + k])) : ($.push(v[D + k]), C.push(F.value)));
                }
                return Promise.resolve(0 < C.length && d.mutate({ trans: a, type: "add", values: C }).then(function(U) {
                  for (var z in U.failures) $.splice(parseInt(z), 1);
                  O(C.length, U);
                })).then(function() {
                  return (0 < R.length || P && typeof e == "object") && d.mutate({ trans: a, type: "put", keys: x, values: R, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O(R.length, U);
                  });
                }).then(function() {
                  return (0 < $.length || P && e === br) && d.mutate({ trans: a, type: "delete", keys: $, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O($.length, U);
                  });
                }).then(function() {
                  return v.length > D + I && A(D + w);
                });
              });
            }
            var P = tt(n) && n.limit === 1 / 0 && (typeof e != "function" || e === br) && { index: n.index, range: n.range };
            return A(0).then(function() {
              if (0 < m.length) throw new At("Error modifying one or more objects", m, E, S);
              return v.length;
            });
          });
        });
      }, V.prototype.delete = function() {
        var e = this._ctx, r = e.range;
        return tt(e) && (e.isPrimKey || r.type === 3) ? this._write(function(n) {
          var a = e.table.core.schema.primaryKey, s = r;
          return e.table.core.count({ trans: n, query: { index: a, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: s }).then(function(u) {
              var d = u.failures;
              if (u.lastResult, u.results, u = u.numFailures, u) throw new At("Could not delete some values", Object.keys(d).map(function(g) {
                return d[g];
              }), c - u);
              return c - u;
            });
          });
        }) : this.modify(br);
      }, V);
      function V() {
      }
      var br = function(e, r) {
        return r.value = null;
      };
      function ia(e, r) {
        return e < r ? -1 : e === r ? 0 : 1;
      }
      function ca(e, r) {
        return r < e ? -1 : e === r ? 0 : 1;
      }
      function de(e, r, n) {
        return e = e instanceof mn ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(r), e;
      }
      function rt(e) {
        return new e.Collection(e, function() {
          return pn("");
        }).limit(0);
      }
      function Kt(e, r, n, a) {
        var s, c, u, d, g, b, w, f = n.length;
        if (!n.every(function(E) {
          return typeof E == "string";
        })) return de(e, sn);
        function O(E) {
          s = E === "next" ? function(v) {
            return v.toUpperCase();
          } : function(v) {
            return v.toLowerCase();
          }, c = E === "next" ? function(v) {
            return v.toLowerCase();
          } : function(v) {
            return v.toUpperCase();
          }, u = E === "next" ? ia : ca;
          var S = n.map(function(v) {
            return { lower: c(v), upper: s(v) };
          }).sort(function(v, A) {
            return u(v.lower, A.lower);
          });
          d = S.map(function(v) {
            return v.upper;
          }), g = S.map(function(v) {
            return v.lower;
          }), w = (b = E) === "next" ? "" : a;
        }
        O("next"), e = new e.Collection(e, function() {
          return Te(d[0], g[f - 1] + a);
        }), e._ondirectionchange = function(E) {
          O(E);
        };
        var m = 0;
        return e._addAlgorithm(function(E, S, v) {
          var A = E.key;
          if (typeof A != "string") return !1;
          var P = c(A);
          if (r(P, g, m)) return !0;
          for (var D = null, I = m; I < f; ++I) {
            var T = function(C, R, x, $, k, G) {
              for (var F = Math.min(C.length, $.length), U = -1, z = 0; z < F; ++z) {
                var fe = R[z];
                if (fe !== $[z]) return k(C[z], x[z]) < 0 ? C.substr(0, z) + x[z] + x.substr(z + 1) : k(C[z], $[z]) < 0 ? C.substr(0, z) + $[z] + x.substr(z + 1) : 0 <= U ? C.substr(0, U) + R[U] + x.substr(U + 1) : null;
                k(C[z], fe) < 0 && (U = z);
              }
              return F < $.length && G === "next" ? C + x.substr(C.length) : F < C.length && G === "prev" ? C.substr(0, x.length) : U < 0 ? null : C.substr(0, U) + $[U] + x.substr(U + 1);
            }(A, P, d[I], g[I], u, b);
            T === null && D === null ? m = I + 1 : (D === null || 0 < u(D, T)) && (D = T);
          }
          return S(D !== null ? function() {
            E.continue(D + w);
          } : v), !1;
        }), e;
      }
      function Te(e, r, n, a) {
        return { type: 2, lower: e, upper: r, lowerOpen: n, upperOpen: a };
      }
      function pn(e) {
        return { type: 1, lower: e, upper: e };
      }
      var mn = (Object.defineProperty(ae.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ae.prototype.between = function(e, r, n, a) {
        n = n !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, r) || this._cmp(e, r) === 0 && (n || a) && (!n || !a) ? rt(this) : new this.Collection(this, function() {
            return Te(e, r, !n, !a);
          });
        } catch {
          return de(this, we);
        }
      }, ae.prototype.equals = function(e) {
        return e == null ? de(this, we) : new this.Collection(this, function() {
          return pn(e);
        });
      }, ae.prototype.above = function(e) {
        return e == null ? de(this, we) : new this.Collection(this, function() {
          return Te(e, void 0, !0);
        });
      }, ae.prototype.aboveOrEqual = function(e) {
        return e == null ? de(this, we) : new this.Collection(this, function() {
          return Te(e, void 0, !1);
        });
      }, ae.prototype.below = function(e) {
        return e == null ? de(this, we) : new this.Collection(this, function() {
          return Te(void 0, e, !1, !0);
        });
      }, ae.prototype.belowOrEqual = function(e) {
        return e == null ? de(this, we) : new this.Collection(this, function() {
          return Te(void 0, e);
        });
      }, ae.prototype.startsWith = function(e) {
        return typeof e != "string" ? de(this, sn) : this.between(e, e + We, !0, !0);
      }, ae.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Kt(this, function(r, n) {
          return r.indexOf(n[0]) === 0;
        }, [e], We);
      }, ae.prototype.equalsIgnoreCase = function(e) {
        return Kt(this, function(r, n) {
          return r === n[0];
        }, [e], "");
      }, ae.prototype.anyOfIgnoreCase = function() {
        var e = Ee.apply(Ye, arguments);
        return e.length === 0 ? rt(this) : Kt(this, function(r, n) {
          return n.indexOf(r) !== -1;
        }, e, "");
      }, ae.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ee.apply(Ye, arguments);
        return e.length === 0 ? rt(this) : Kt(this, function(r, n) {
          return n.some(function(a) {
            return r.indexOf(a) === 0;
          });
        }, e, We);
      }, ae.prototype.anyOf = function() {
        var e = this, r = Ee.apply(Ye, arguments), n = this._cmp;
        try {
          r.sort(n);
        } catch {
          return de(this, we);
        }
        if (r.length === 0) return rt(this);
        var a = new this.Collection(this, function() {
          return Te(r[0], r[r.length - 1]);
        });
        a._ondirectionchange = function(c) {
          n = c === "next" ? e._ascending : e._descending, r.sort(n);
        };
        var s = 0;
        return a._addAlgorithm(function(c, u, d) {
          for (var g = c.key; 0 < n(g, r[s]); ) if (++s === r.length) return u(d), !1;
          return n(g, r[s]) === 0 || (u(function() {
            c.continue(r[s]);
          }), !1);
        }), a;
      }, ae.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ae.prototype.noneOf = function() {
        var e = Ee.apply(Ye, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return de(this, we);
        }
        var r = e.reduce(function(n, a) {
          return n ? n.concat([[n[n.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return r.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, ae.prototype.inAnyRange = function(A, r) {
        var n = this, a = this._cmp, s = this._ascending, c = this._descending, u = this._min, d = this._max;
        if (A.length === 0) return rt(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return de(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", L.InvalidArgument);
        var g = !r || r.includeLowers !== !1, b = r && r.includeUppers === !0, w, f = s;
        function O(P, D) {
          return f(P[0], D[0]);
        }
        try {
          (w = A.reduce(function(P, D) {
            for (var I = 0, T = P.length; I < T; ++I) {
              var C = P[I];
              if (a(D[0], C[1]) < 0 && 0 < a(D[1], C[0])) {
                C[0] = u(C[0], D[0]), C[1] = d(C[1], D[1]);
                break;
              }
            }
            return I === T && P.push(D), P;
          }, [])).sort(O);
        } catch {
          return de(this, we);
        }
        var m = 0, E = b ? function(P) {
          return 0 < s(P, w[m][1]);
        } : function(P) {
          return 0 <= s(P, w[m][1]);
        }, S = g ? function(P) {
          return 0 < c(P, w[m][0]);
        } : function(P) {
          return 0 <= c(P, w[m][0]);
        }, v = E, A = new this.Collection(this, function() {
          return Te(w[0][0], w[w.length - 1][1], !g, !b);
        });
        return A._ondirectionchange = function(P) {
          f = P === "next" ? (v = E, s) : (v = S, c), w.sort(O);
        }, A._addAlgorithm(function(P, D, I) {
          for (var T, C = P.key; v(C); ) if (++m === w.length) return D(I), !1;
          return !E(T = C) && !S(T) || (n._cmp(C, w[m][1]) === 0 || n._cmp(C, w[m][0]) === 0 || D(function() {
            f === s ? P.continue(w[m][0]) : P.continue(w[m][1]);
          }), !1);
        }), A;
      }, ae.prototype.startsWithAnyOf = function() {
        var e = Ee.apply(Ye, arguments);
        return e.every(function(r) {
          return typeof r == "string";
        }) ? e.length === 0 ? rt(this) : this.inAnyRange(e.map(function(r) {
          return [r, r + We];
        })) : de(this, "startsWithAnyOf() only works with strings");
      }, ae);
      function ae() {
      }
      function ye(e) {
        return Z(function(r) {
          return pt(r), e(r.target.error), !1;
        });
      }
      function pt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var mt = "storagemutated", vr = "x-storagemutated-1", Re = ft(null, mt), ua = (be.prototype._lock = function() {
        return st(!B.global), ++this._reculock, this._reculock !== 1 || B.global || (B.lockOwnerFor = this), this;
      }, be.prototype._unlock = function() {
        if (st(!B.global), --this._reculock == 0) for (B.global || (B.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Le(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, be.prototype._locked = function() {
        return this._reculock && B.lockOwnerFor !== this;
      }, be.prototype.create = function(e) {
        var r = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, a = this.db._state.dbOpenError;
        if (st(!this.idbtrans), !e && !n) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new L.DatabaseClosed(a);
          case "MissingAPIError":
            throw new L.MissingAPI(a.message, a);
          default:
            throw new L.OpenFailed(a);
        }
        if (!this.active) throw new L.TransactionInactive();
        return st(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Z(function(s) {
          pt(s), r._reject(e.error);
        }), e.onabort = Z(function(s) {
          pt(s), r.active && r._reject(new L.Abort(e.error)), r.active = !1, r.on("abort").fire(s);
        }), e.oncomplete = Z(function() {
          r.active = !1, r._resolve(), "mutatedParts" in e && Re.storagemutated.fire(e.mutatedParts);
        }), this;
      }, be.prototype._promise = function(e, r, n) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return q(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return q(new L.TransactionInactive());
        if (this._locked()) return new j(function(c, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, r, n).then(c, u);
          }, B]);
        });
        if (n) return De(function() {
          var c = new j(function(u, d) {
            a._lock();
            var g = r(u, d, a);
            g && g.then && g.then(u, d);
          });
          return c.finally(function() {
            return a._unlock();
          }), c._lib = !0, c;
        });
        var s = new j(function(c, u) {
          var d = r(c, u, a);
          d && d.then && d.then(c, u);
        });
        return s._lib = !0, s;
      }, be.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, be.prototype.waitFor = function(e) {
        var r, n = this._root(), a = j.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return a;
        }) : (n._waitingFor = a, n._waitingQueue = [], r = n.idbtrans.objectStore(n.storeNames[0]), function c() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (r.get(-1 / 0).onsuccess = c);
        }());
        var s = n._waitingFor;
        return new j(function(c, u) {
          a.then(function(d) {
            return n._waitingQueue.push(Z(c.bind(null, d)));
          }, function(d) {
            return n._waitingQueue.push(Z(u.bind(null, d)));
          }).finally(function() {
            n._waitingFor === s && (n._waitingFor = null);
          });
        });
      }, be.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new L.Abort()));
      }, be.prototype.table = function(e) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (re(r, e)) return r[e];
        var n = this.schema[e];
        if (!n) throw new L.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), r[e] = n;
      }, be);
      function be() {
      }
      function Er(e, r, n, a, s, c, u) {
        return { name: e, keyPath: r, unique: n, multi: a, auto: s, compound: c, src: (n && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + yn(r) };
      }
      function yn(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function wr(e, r, n) {
        return { name: e, primKey: r, indexes: n, mappedClass: null, idxByName: (a = function(s) {
          return [s.name, s];
        }, n.reduce(function(s, c, u) {
          return u = a(c, u), u && (s[u[0]] = u[1]), s;
        }, {})) };
        var a;
      }
      var yt = function(e) {
        try {
          return e.only([[]]), yt = function() {
            return [[]];
          }, [[]];
        } catch {
          return yt = function() {
            return We;
          }, We;
        }
      };
      function Sr(e) {
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
      function bt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function da(e, r, g) {
        function a(v) {
          if (v.type === 3) return null;
          if (v.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = v.lower, E = v.upper, S = v.lowerOpen, v = v.upperOpen;
          return m === void 0 ? E === void 0 ? null : r.upperBound(E, !!v) : E === void 0 ? r.lowerBound(m, !!S) : r.bound(m, E, !!S, !!v);
        }
        function s(O) {
          var m, E = O.name;
          return { name: E, schema: O, mutate: function(S) {
            var v = S.trans, A = S.type, P = S.keys, D = S.values, I = S.range;
            return new Promise(function(T, C) {
              T = Z(T);
              var R = v.objectStore(E), x = R.keyPath == null, $ = A === "put" || A === "add";
              if (!$ && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var k, G = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return T({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function F(ue) {
                ++fe, pt(ue);
              }
              var U = [], z = [], fe = 0;
              if (A === "deleteRange") {
                if (I.type === 4) return T({ numFailures: fe, failures: z, results: [], lastResult: void 0 });
                I.type === 3 ? U.push(k = R.clear()) : U.push(k = R.delete(a(I)));
              } else {
                var x = $ ? x ? [D, P] : [D, null] : [P, null], W = x[0], ie = x[1];
                if ($) for (var ce = 0; ce < G; ++ce) U.push(k = ie && ie[ce] !== void 0 ? R[A](W[ce], ie[ce]) : R[A](W[ce])), k.onerror = F;
                else for (ce = 0; ce < G; ++ce) U.push(k = R[A](W[ce])), k.onerror = F;
              }
              function Zt(ue) {
                ue = ue.target.result, U.forEach(function(He, Br) {
                  return He.error != null && (z[Br] = He.error);
                }), T({ numFailures: fe, failures: z, results: A === "delete" ? P : U.map(function(He) {
                  return He.result;
                }), lastResult: ue });
              }
              k.onerror = function(ue) {
                F(ue), Zt(ue);
              }, k.onsuccess = Zt;
            });
          }, getMany: function(S) {
            var v = S.trans, A = S.keys;
            return new Promise(function(P, D) {
              P = Z(P);
              for (var I, T = v.objectStore(E), C = A.length, R = new Array(C), x = 0, $ = 0, k = function(U) {
                U = U.target, R[U._pos] = U.result, ++$ === x && P(R);
              }, G = ye(D), F = 0; F < C; ++F) A[F] != null && ((I = T.get(A[F]))._pos = F, I.onsuccess = k, I.onerror = G, ++x);
              x === 0 && P(R);
            });
          }, get: function(S) {
            var v = S.trans, A = S.key;
            return new Promise(function(P, D) {
              P = Z(P);
              var I = v.objectStore(E).get(A);
              I.onsuccess = function(T) {
                return P(T.target.result);
              }, I.onerror = ye(D);
            });
          }, query: (m = b, function(S) {
            return new Promise(function(v, A) {
              v = Z(v);
              var P, D, I, x = S.trans, T = S.values, C = S.limit, k = S.query, R = C === 1 / 0 ? void 0 : C, $ = k.index, k = k.range, x = x.objectStore(E), $ = $.isPrimaryKey ? x : x.index($.name), k = a(k);
              if (C === 0) return v({ result: [] });
              m ? ((R = T ? $.getAll(k, R) : $.getAllKeys(k, R)).onsuccess = function(G) {
                return v({ result: G.target.result });
              }, R.onerror = ye(A)) : (P = 0, D = !T && "openKeyCursor" in $ ? $.openKeyCursor(k) : $.openCursor(k), I = [], D.onsuccess = function(G) {
                var F = D.result;
                return F ? (I.push(T ? F.value : F.primaryKey), ++P === C ? v({ result: I }) : void F.continue()) : v({ result: I });
              }, D.onerror = ye(A));
            });
          }), openCursor: function(S) {
            var v = S.trans, A = S.values, P = S.query, D = S.reverse, I = S.unique;
            return new Promise(function(T, C) {
              T = Z(T);
              var $ = P.index, R = P.range, x = v.objectStore(E), x = $.isPrimaryKey ? x : x.index($.name), $ = D ? I ? "prevunique" : "prev" : I ? "nextunique" : "next", k = !A && "openKeyCursor" in x ? x.openKeyCursor(a(R), $) : x.openCursor(a(R), $);
              k.onerror = ye(C), k.onsuccess = Z(function(G) {
                var F, U, z, fe, W = k.result;
                W ? (W.___id = ++la, W.done = !1, F = W.continue.bind(W), U = (U = W.continuePrimaryKey) && U.bind(W), z = W.advance.bind(W), fe = function() {
                  throw new Error("Cursor not stopped");
                }, W.trans = v, W.stop = W.continue = W.continuePrimaryKey = W.advance = function() {
                  throw new Error("Cursor not started");
                }, W.fail = Z(C), W.next = function() {
                  var ie = this, ce = 1;
                  return this.start(function() {
                    return ce-- ? ie.continue() : ie.stop();
                  }).then(function() {
                    return ie;
                  });
                }, W.start = function(ie) {
                  function ce() {
                    if (k.result) try {
                      ie();
                    } catch (ue) {
                      W.fail(ue);
                    }
                    else W.done = !0, W.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, W.stop();
                  }
                  var Zt = new Promise(function(ue, He) {
                    ue = Z(ue), k.onerror = ye(He), W.fail = He, W.stop = function(Br) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = fe, ue(Br);
                    };
                  });
                  return k.onsuccess = Z(function(ue) {
                    k.onsuccess = ce, ce();
                  }), W.continue = F, W.continuePrimaryKey = U, W.advance = z, ce(), Zt;
                }, T(W)) : T(null);
              }, C);
            });
          }, count: function(S) {
            var v = S.query, A = S.trans, P = v.index, D = v.range;
            return new Promise(function(I, T) {
              var C = A.objectStore(E), R = P.isPrimaryKey ? C : C.index(P.name), C = a(D), R = C ? R.count(C) : R.count();
              R.onsuccess = Z(function(x) {
                return I(x.target.result);
              }), R.onerror = ye(T);
            });
          } };
        }
        var c, u, d, w = (u = g, d = bn((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(O) {
          return u.objectStore(O);
        }).map(function(O) {
          var m = O.keyPath, v = O.autoIncrement, E = M(m), S = {}, v = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: E, keyPath: m, autoIncrement: v, unique: !0, extractKey: Sr(m) }, indexes: bn(O.indexNames).map(function(A) {
            return O.index(A);
          }).map(function(I) {
            var P = I.name, D = I.unique, T = I.multiEntry, I = I.keyPath, T = { name: P, compound: M(I), keyPath: I, unique: D, multiEntry: T, extractKey: Sr(I) };
            return S[bt(I)] = T;
          }), getIndexByKeyPath: function(A) {
            return S[bt(A)];
          } };
          return S[":id"] = v.primaryKey, m != null && (S[bt(m)] = v.primaryKey), v;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), g = w.schema, b = w.hasGetAll, w = g.tables.map(s), f = {};
        return w.forEach(function(O) {
          return f[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!f[O]) throw new Error("Table '".concat(O, "' not found"));
          return f[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: yt(r), schema: g };
      }
      function fa(e, r, n, a) {
        var s = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (a = da(r, s, a), e.dbcore.reduce(function(c, u) {
          return u = u.create, l(l({}, c), u(c));
        }, a)) };
      }
      function Bt(e, a) {
        var n = a.db, a = fa(e._middlewares, n, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(u) {
            return u.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Lt(e, r, n, a) {
        n.forEach(function(s) {
          var c = a[s];
          r.forEach(function(u) {
            var d = function g(b, w) {
              return Fn(b, w) || (b = se(b)) && g(b, w);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(g) {
              zr(this, s, { value: g, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, c));
          });
        });
      }
      function Or(e, r) {
        r.forEach(function(n) {
          for (var a in n) n[a] instanceof e.Table && delete n[a];
        });
      }
      function ha(e, r) {
        return e._cfg.version - r._cfg.version;
      }
      function ga(e, r, n, a) {
        var s = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = wr("$meta", En("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(n), c._completion.catch(a);
        var u = c._reject.bind(c), d = B.transless || B;
        De(function() {
          return B.trans = c, B.transless = d, r !== 0 ? (Bt(e, n), b = r, ((g = c).storeNames.includes("$meta") ? g.table("$meta").get("version").then(function(w) {
            return w ?? b;
          }) : j.resolve(b)).then(function(w) {
            return O = w, m = c, E = n, S = [], w = (f = e)._versions, v = f._dbSchema = Ft(0, f.idbdb, E), (w = w.filter(function(A) {
              return A._cfg.version >= O;
            })).length !== 0 ? (w.forEach(function(A) {
              S.push(function() {
                var P = v, D = A._cfg.dbschema;
                Ut(f, P, E), Ut(f, D, E), v = f._dbSchema = D;
                var I = _r(P, D);
                I.add.forEach(function($) {
                  Ar(E, $[0], $[1].primKey, $[1].indexes);
                }), I.change.forEach(function($) {
                  if ($.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var k = E.objectStore($.name);
                  $.add.forEach(function(G) {
                    return Wt(k, G);
                  }), $.change.forEach(function(G) {
                    k.deleteIndex(G.name), Wt(k, G);
                  }), $.del.forEach(function(G) {
                    return k.deleteIndex(G);
                  });
                });
                var T = A._cfg.contentUpgrade;
                if (T && A._cfg.version > O) {
                  Bt(f, E), m._memoizedTables = {};
                  var C = Yr(D);
                  I.del.forEach(function($) {
                    C[$] = P[$];
                  }), Or(f, [f.Transaction.prototype]), Lt(f, [f.Transaction.prototype], N(C), C), m.schema = C;
                  var R, x = nr(T);
                  return x && qe(), I = j.follow(function() {
                    var $;
                    (R = T(m)) && x && ($ = Ie.bind(null, null), R.then($, $));
                  }), R && typeof R.then == "function" ? j.resolve(R) : I.then(function() {
                    return R;
                  });
                }
              }), S.push(function(P) {
                var D, I, T = A._cfg.dbschema;
                D = T, I = P, [].slice.call(I.db.objectStoreNames).forEach(function(C) {
                  return D[C] == null && I.db.deleteObjectStore(C);
                }), Or(f, [f.Transaction.prototype]), Lt(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), m.schema = f._dbSchema;
              }), S.push(function(P) {
                f.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(f.idbdb.version / 10) === A._cfg.version ? (f.idbdb.deleteObjectStore("$meta"), delete f._dbSchema.$meta, f._storeNames = f._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return S.length ? j.resolve(S.shift()(m.idbtrans)).then(A) : j.resolve();
            }().then(function() {
              vn(v, E);
            })) : j.resolve();
            var f, O, m, E, S, v;
          }).catch(u)) : (N(s).forEach(function(w) {
            Ar(n, w, s[w].primKey, s[w].indexes);
          }), Bt(e, n), void j.follow(function() {
            return e.on.populate.fire(c);
          }).catch(u));
          var g, b;
        });
      }
      function pa(e, r) {
        vn(e._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var n = Ft(0, e.idbdb, r);
        Ut(e, e._dbSchema, r);
        for (var a = 0, s = _r(n, e._dbSchema).change; a < s.length; a++) {
          var c = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = r.objectStore(u.name);
            u.add.forEach(function(g) {
              me && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(g.src)), Wt(d, g);
            });
          }(s[a]);
          if (typeof c == "object") return c.value;
        }
      }
      function _r(e, r) {
        var n, a = { del: [], add: [], change: [] };
        for (n in e) r[n] || a.del.push(n);
        for (n in r) {
          var s = e[n], c = r[n];
          if (s) {
            var u = { name: n, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) u.recreate = !0, a.change.push(u);
            else {
              var d = s.idxByName, g = c.idxByName, b = void 0;
              for (b in d) g[b] || u.del.push(b);
              for (b in g) {
                var w = d[b], f = g[b];
                w ? w.src !== f.src && u.change.push(f) : u.add.push(f);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && a.change.push(u);
            }
          } else a.add.push([n, c]);
        }
        return a;
      }
      function Ar(e, r, n, a) {
        var s = e.db.createObjectStore(r, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return a.forEach(function(c) {
          return Wt(s, c);
        }), s;
      }
      function vn(e, r) {
        N(e).forEach(function(n) {
          r.db.objectStoreNames.contains(n) || (me && console.debug("Dexie: Creating missing table", n), Ar(r, n, e[n].primKey, e[n].indexes));
        });
      }
      function Wt(e, r) {
        e.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Ft(e, r, n) {
        var a = {};
        return _t(r.objectStoreNames, 0).forEach(function(s) {
          for (var c = n.objectStore(s), u = Er(yn(b = c.keyPath), b || "", !0, !1, !!c.autoIncrement, b && typeof b != "string", !0), d = [], g = 0; g < c.indexNames.length; ++g) {
            var w = c.index(c.indexNames[g]), b = w.keyPath, w = Er(w.name, b, !!w.unique, !!w.multiEntry, !1, b && typeof b != "string", !1);
            d.push(w);
          }
          a[s] = wr(s, u, d);
        }), a;
      }
      function Ut(e, r, n) {
        for (var a = n.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var c = a[s], u = n.objectStore(c);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var g = u.indexNames[d], b = u.index(g).keyPath, w = typeof b == "string" ? b : "[" + _t(b).join("+") + "]";
            !r[c] || (b = r[c].idxByName[w]) && (b.name = g, delete r[c].idxByName[w], r[c].idxByName[g] = b);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && y.WorkerGlobalScope && y instanceof y.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function En(e) {
        return e.split(",").map(function(r, n) {
          var a = (r = r.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Er(a, s || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), M(s), n === 0);
        });
      }
      var ma = (zt.prototype._parseStoresSpec = function(e, r) {
        N(e).forEach(function(n) {
          if (e[n] !== null) {
            var a = En(e[n]), s = a.shift();
            if (s.unique = !0, s.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(c) {
              if (c.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!c.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), r[n] = wr(n, s, a);
          }
        });
      }, zt.prototype.stores = function(n) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? te(this._cfg.storesSource, n) : n;
        var n = r._versions, a = {}, s = {};
        return n.forEach(function(c) {
          te(a, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(a, s);
        }), r._dbSchema = s, Or(r, [r._allTables, r, r.Transaction.prototype]), Lt(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], N(s), s), r._storeNames = N(s), this;
      }, zt.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = sr(this._cfg.contentUpgrade || Q, e), this;
      }, zt);
      function zt() {
      }
      function Pr(e, r) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Se($t, { addons: [], indexedDB: e, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Dr(e) {
        return e && typeof e.databases == "function";
      }
      function Ir(e) {
        return De(function() {
          return B.letThrough = !0, e();
        });
      }
      function Nr(e) {
        return !("from" in e);
      }
      var oe = function(e, r) {
        if (!this) {
          var n = new oe();
          return e && "d" in e && te(n, e), n;
        }
        te(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? r : e } : { d: 0 });
      };
      function vt(e, r, n) {
        var a = H(r, n);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Nr(e)) return te(e, { from: r, to: n, d: 1 });
          var s = e.l, a = e.r;
          if (H(n, e.from) < 0) return s ? vt(s, r, n) : e.l = { from: r, to: n, d: 1, l: null, r: null }, Sn(e);
          if (0 < H(r, e.to)) return a ? vt(a, r, n) : e.r = { from: r, to: n, d: 1, l: null, r: null }, Sn(e);
          H(r, e.from) < 0 && (e.from = r, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, s && !e.l && Et(e, s), a && n && Et(e, a);
        }
      }
      function Et(e, r) {
        Nr(r) || function n(a, g) {
          var c = g.from, u = g.to, d = g.l, g = g.r;
          vt(a, c, u), d && n(a, d), g && n(a, g);
        }(e, r);
      }
      function wn(e, r) {
        var n = Ht(r), a = n.next();
        if (a.done) return !1;
        for (var s = a.value, c = Ht(e), u = c.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (H(d.from, s.to) <= 0 && 0 <= H(d.to, s.from)) return !0;
          H(s.from, d.from) < 0 ? s = (a = n.next(d.from)).value : d = (u = c.next(s.from)).value;
        }
        return !1;
      }
      function Ht(e) {
        var r = Nr(e) ? null : { s: 0, n: e };
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
      function Vt(e, r) {
        return N(r).forEach(function(n) {
          e[n] ? Et(e[n], r[n]) : e[n] = function a(s) {
            var c, u, d = {};
            for (c in s) re(s, c) && (u = s[c], d[c] = !u || typeof u != "object" || Xr.has(u.constructor) ? u : a(u));
            return d;
          }(r[n]);
        }), e;
      }
      function Tr(e, r) {
        return e.all || r.all || Object.keys(e).some(function(n) {
          return r[n] && wn(r[n], e[n]);
        });
      }
      pe(oe.prototype, ((he = { add: function(e) {
        return Et(this, e), this;
      }, addKey: function(e) {
        return vt(this, e, e), this;
      }, addKeys: function(e) {
        var r = this;
        return e.forEach(function(n) {
          return vt(r, n, n);
        }), this;
      }, hasKey: function(e) {
        var r = Ht(this).next(e).value;
        return r && H(r.from, e) <= 0 && 0 <= H(r.to, e);
      } })[rr] = function() {
        return Ht(this);
      }, he));
      var Ue = {}, Rr = {}, xr = !1;
      function Yt(e) {
        Vt(Rr, e), xr || (xr = !0, setTimeout(function() {
          xr = !1, kr(Rr, !(Rr = {}));
        }, 0));
      }
      function kr(e, r) {
        r === void 0 && (r = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(Ue); a < s.length; a++) _n(u = s[a], e, n, r);
        else for (var c in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (u = Ue["idb://".concat(c, "/").concat(d)]) && _n(u, e, n, r));
        }
        n.forEach(function(g) {
          return g();
        });
      }
      function _n(e, r, n, a) {
        for (var s = [], c = 0, u = Object.entries(e.queries.query); c < u.length; c++) {
          for (var d = u[c], g = d[0], b = [], w = 0, f = d[1]; w < f.length; w++) {
            var O = f[w];
            Tr(r, O.obsSet) ? O.subscribers.forEach(function(v) {
              return n.add(v);
            }) : a && b.push(O);
          }
          a && s.push([g, b]);
        }
        if (a) for (var m = 0, E = s; m < E.length; m++) {
          var S = E[m], g = S[0], b = S[1];
          e.queries.query[g] = b;
        }
      }
      function ya(e) {
        var r = e._state, n = e._deps.indexedDB;
        if (r.isBeingOpened || e.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? q(r.dbOpenError) : e;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var a = r.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function u() {
          if (r.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new j(function(O, m) {
            if (u(), !n) throw new L.MissingAPI();
            var E = e.name, S = r.autoSchema || !s ? n.open(E) : n.open(E, s);
            if (!S) throw new L.MissingAPI();
            S.onerror = ye(m), S.onblocked = Z(e._fireOnBlocked), S.onupgradeneeded = Z(function(v) {
              var A;
              w = S.transaction, r.autoSchema && !e._options.allowEmptyDB ? (S.onerror = pt, w.abort(), S.result.close(), (A = n.deleteDatabase(E)).onsuccess = A.onerror = Z(function() {
                m(new L.NoSuchDatabase("Database ".concat(E, " doesnt exist")));
              })) : (w.onerror = ye(m), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, f = v < 1, e.idbdb = S.result, c && pa(e, w), ga(e, v / 10, w, m));
            }, m), S.onsuccess = Z(function() {
              w = null;
              var v, A, P, D, I, T = e.idbdb = S.result, C = _t(T.objectStoreNames);
              if (0 < C.length) try {
                var R = T.transaction((D = C).length === 1 ? D[0] : D, "readonly");
                if (r.autoSchema) A = T, P = R, (v = e).verno = A.version / 10, P = v._dbSchema = Ft(0, A, P), v._storeNames = _t(A.objectStoreNames, 0), Lt(v, [v._allTables], N(P), P);
                else if (Ut(e, e._dbSchema, R), ((I = _r(Ft(0, (I = e).idbdb, R), I._dbSchema)).add.length || I.change.some(function(x) {
                  return x.add.length || x.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), T.close(), s = T.version + 1, c = !0, O(d());
                Bt(e, R);
              } catch {
              }
              et.push(e), T.onversionchange = Z(function(x) {
                r.vcFired = !0, e.on("versionchange").fire(x);
              }), T.onclose = Z(function(x) {
                e.on("close").fire(x);
              }), f && (I = e._deps, R = E, T = I.indexedDB, I = I.IDBKeyRange, Dr(T) || R === $t || Pr(T, I).put({ name: R }).catch(Q)), O();
            }, m);
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
        var g, b = r.dbReadyResolve, w = null, f = !1;
        return j.race([a, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function m() {
            return indexedDB.databases().finally(O);
          }
          g = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(g);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), r.onReadyBeingFired = [], j.resolve(Ir(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < r.onReadyBeingFired.length) {
              var m = r.onReadyBeingFired.reduce(sr, Q);
              return r.onReadyBeingFired = [], j.resolve(Ir(function() {
                return m(e.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          r.openCanceller === a && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(O) {
          r.dbOpenError = O;
          try {
            w && w.abort();
          } catch {
          }
          return a === r.openCanceller && e._close(), q(O);
        }).finally(function() {
          r.openComplete = !0, b();
        }).then(function() {
          var O;
          return f && (O = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(E) {
              E.name && (O["idb://".concat(e.name, "/").concat(m.name, "/").concat(E.name)] = new oe(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(m.name, "/")] = O["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new oe(-1 / 0, [[[]]]);
          }), Re(mt).fire(O), kr(O, !0)), e;
        });
      }
      function Cr(e) {
        function r(c) {
          return e.next(c);
        }
        var n = s(r), a = s(function(c) {
          return e.throw(c);
        });
        function s(c) {
          return function(g) {
            var d = c(g), g = d.value;
            return d.done ? g : g && typeof g.then == "function" ? g.then(n, a) : M(g) ? Promise.all(g).then(n, a) : n(g);
          };
        }
        return s(r)();
      }
      function Qt(e, r, n) {
        for (var a = M(e) ? e.slice() : [e], s = 0; s < n; ++s) a.push(r);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema, s = {}, c = [];
          function u(f, O, m) {
            var E = bt(f), S = s[E] = s[E] || [], v = f == null ? 0 : typeof f == "string" ? 1 : f.length, A = 0 < O, A = l(l({}, m), { name: A ? "".concat(E, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: A, keyTail: O, keyLength: v, extractKey: Sr(f), unique: !A && m.unique });
            return S.push(A), A.isPrimaryKey || c.push(A), 1 < v && u(v === 2 ? f[0] : f.slice(0, v - 1), O + 1, m), S.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), A;
          }
          r = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [r];
          for (var d = 0, g = a.indexes; d < g.length; d++) {
            var b = g[d];
            u(b.keyPath, 0, b);
          }
          function w(f) {
            var O, m = f.query.index;
            return m.isVirtual ? l(l({}, f), { query: { index: m.lowLevelIndex, range: (O = f.query.range, m = m.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Qt(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Qt(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : f;
          }
          return l(l({}, n), { schema: l(l({}, a), { primaryKey: r, indexes: c, getIndexByKeyPath: function(f) {
            return (f = s[bt(f)]) && f[0];
          } }), count: function(f) {
            return n.count(w(f));
          }, query: function(f) {
            return n.query(w(f));
          }, openCursor: function(f) {
            var O = f.query.index, m = O.keyTail, E = O.isVirtual, S = O.keyLength;
            return E ? n.openCursor(w(f)).then(function(A) {
              return A && v(A);
            }) : n.openCursor(f);
            function v(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Qt(P, f.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : f.unique ? A.continue(A.key.slice(0, S).concat(f.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                A.continuePrimaryKey(Qt(P, e.MAX_KEY, m), D);
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
      function $r(e, r, n, a) {
        return n = n || {}, a = a || "", N(e).forEach(function(s) {
          var c, u, d;
          re(r, s) ? (c = e[s], u = r[s], typeof c == "object" && typeof u == "object" && c && u ? (d = tr(c)) !== tr(u) ? n[a + s] = r[s] : d === "Object" ? $r(c, u, n, a + s + ".") : c !== u && (n[a + s] = r[s]) : c !== u && (n[a + s] = r[s])) : n[a + s] = void 0;
        }), N(r).forEach(function(s) {
          re(e, s) || (n[a + s] = r[s]);
        }), n;
      }
      function jr(e, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema.primaryKey;
          return l(l({}, n), { mutate: function(s) {
            var c = B.trans, u = c.table(r).hook, d = u.deleting, g = u.creating, b = u.updating;
            switch (s.type) {
              case "add":
                if (g.fire === Q) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (g.fire === Q && b.fire === Q) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (d.fire === Q) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (d.fire === Q) break;
                return c._promise("readwrite", function() {
                  return function f(O, m, E) {
                    return n.query({ trans: O, values: !1, query: { index: a, range: m }, limit: E }).then(function(S) {
                      var v = S.result;
                      return w({ type: "delete", keys: v, trans: O }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : v.length < E ? { failures: [], numFailures: 0, lastResult: void 0 } : f(O, l(l({}, m), { lower: v[v.length - 1], lowerOpen: !0 }), E);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return n.mutate(s);
            function w(f) {
              var O, m, E, S = B.trans, v = f.keys || jr(a, f);
              if (!v) throw new Error("Keys missing");
              return (f = f.type === "add" || f.type === "put" ? l(l({}, f), { keys: v }) : l({}, f)).type !== "delete" && (f.values = p([], f.values)), f.keys && (f.keys = p([], f.keys)), O = n, E = v, ((m = f).type === "add" ? Promise.resolve([]) : O.getMany({ trans: m.trans, keys: E, cache: "immutable" })).then(function(A) {
                var P = v.map(function(D, I) {
                  var T, C, R, x = A[I], $ = { onerror: null, onsuccess: null };
                  return f.type === "delete" ? d.fire.call($, D, x, S) : f.type === "add" || x === void 0 ? (T = g.fire.call($, D, f.values[I], S), D == null && T != null && (f.keys[I] = D = T, a.outbound || le(f.values[I], a.keyPath, D))) : (T = $r(x, f.values[I]), (C = b.fire.call($, T, D, x, S)) && (R = f.values[I], Object.keys(C).forEach(function(k) {
                    re(R, k) ? R[k] = C[k] : le(R, k, C[k]);
                  }))), $;
                });
                return n.mutate(f).then(function(D) {
                  for (var I = D.failures, T = D.results, C = D.numFailures, D = D.lastResult, R = 0; R < v.length; ++R) {
                    var x = (T || v)[R], $ = P[R];
                    x == null ? $.onerror && $.onerror(I[R]) : $.onsuccess && $.onsuccess(f.type === "put" && A[R] ? f.values[R] : x);
                  }
                  return { failures: I, results: T, numFailures: C, lastResult: D };
                }).catch(function(D) {
                  return P.forEach(function(I) {
                    return I.onerror && I.onerror(D);
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
          for (var a = [], s = 0, c = 0; s < r.keys.length && c < e.length; ++s) H(r.keys[s], e[c]) === 0 && (a.push(n ? Ce(r.values[s]) : r.values[s]), ++c);
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
            return s ? j.resolve(s) : n.getMany(a).then(function(c) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Ce(c) : c }, c;
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
        var r = e.schema.name, n = new oe(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, c) {
          if (B.subscr && s !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));
          return e.transaction(a, s, c);
        }, table: function(a) {
          var s = e.table(a), c = s.schema, u = c.primaryKey, f = c.indexes, d = u.extractKey, g = u.outbound, b = u.autoIncrement && f.filter(function(m) {
            return m.compound && m.keyPath.includes(u.keyPath);
          }), w = l(l({}, s), { mutate: function(m) {
            function E(k) {
              return k = "idb://".concat(r, "/").concat(a, "/").concat(k), D[k] || (D[k] = new oe());
            }
            var S, v, A, P = m.trans, D = m.mutatedParts || (m.mutatedParts = {}), I = E(""), T = E(":dels"), C = m.type, $ = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [jr(u, m).filter(function(k) {
              return k;
            }), m.values] : [], R = $[0], x = $[1], $ = m.trans._cache;
            return M(R) ? (I.addKeys(R), ($ = C === "delete" || R.length === x.length ? An(R, $) : null) || T.addKeys(R), ($ || x) && (S = E, v = $, A = x, c.indexes.forEach(function(k) {
              var G = S(k.name || "");
              function F(z) {
                return z != null ? k.extractKey(z) : null;
              }
              function U(z) {
                return k.multiEntry && M(z) ? z.forEach(function(fe) {
                  return G.addKey(fe);
                }) : G.addKey(z);
              }
              (v || A).forEach(function(z, ie) {
                var W = v && F(v[ie]), ie = A && F(A[ie]);
                H(W, ie) !== 0 && (W != null && U(W), ie != null && U(ie));
              });
            }))) : R ? (x = { from: (x = R.lower) !== null && x !== void 0 ? x : e.MIN_KEY, to: (x = R.upper) !== null && x !== void 0 ? x : e.MAX_KEY }, T.add(x), I.add(x)) : (I.add(n), T.add(n), c.indexes.forEach(function(k) {
              return E(k.name).add(n);
            })), s.mutate(m).then(function(k) {
              return !R || m.type !== "add" && m.type !== "put" || (I.addKeys(k.results), b && b.forEach(function(G) {
                for (var F = m.values.map(function(W) {
                  return G.extractKey(W);
                }), U = G.keyPath.findIndex(function(W) {
                  return W === u.keyPath;
                }), z = 0, fe = k.results.length; z < fe; ++z) F[z][U] = k.results[z];
                E(G.name).addKeys(F);
              })), P.mutatedParts = Vt(P.mutatedParts || {}, D), k;
            });
          } }), f = function(E) {
            var S = E.query, E = S.index, S = S.range;
            return [E, new oe((E = S.lower) !== null && E !== void 0 ? E : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, O = { get: function(m) {
            return [u, new oe(m.key)];
          }, getMany: function(m) {
            return [u, new oe().addKeys(m.keys)];
          }, count: f, query: f, openCursor: f };
          return N(O).forEach(function(m) {
            w[m] = function(E) {
              var S = B.subscr, v = !!S, A = Pn(B, s) && Dn(m, E) ? E.obsSet = {} : S;
              if (v) {
                var P = function(x) {
                  return x = "idb://".concat(r, "/").concat(a, "/").concat(x), A[x] || (A[x] = new oe());
                }, D = P(""), I = P(":dels"), S = O[m](E), v = S[0], S = S[1];
                if ((m === "query" && v.isPrimaryKey && !E.values ? I : P(v.name || "")).add(S), !v.isPrimaryKey) {
                  if (m !== "count") {
                    var T = m === "query" && g && E.values && s.query(l(l({}, E), { values: !1 }));
                    return s[m].apply(this, arguments).then(function(x) {
                      if (m === "query") {
                        if (g && E.values) return T.then(function(F) {
                          return F = F.result, D.addKeys(F), x;
                        });
                        var $ = E.values ? x.result.map(d) : x.result;
                        (E.values ? D : I).addKeys($);
                      } else if (m === "openCursor") {
                        var k = x, G = E.values;
                        return k && Object.create(k, { key: { get: function() {
                          return I.addKey(k.primaryKey), k.key;
                        } }, primaryKey: { get: function() {
                          var F = k.primaryKey;
                          return I.addKey(F), F;
                        } }, value: { get: function() {
                          return G && D.addKey(k.primaryKey), k.value;
                        } } });
                      }
                      return x;
                    });
                  }
                  I.add(n);
                }
              }
              return s[m].apply(this, arguments);
            };
          }), w;
        } });
      } };
      function In(e, r, n) {
        if (n.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var a = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return n.numFailures === a ? null : (r = l({}, r), M(r.keys) && (r.keys = r.keys.filter(function(s, c) {
          return !(c in n.failures);
        })), "values" in r && M(r.values) && (r.values = r.values.filter(function(s, c) {
          return !(c in n.failures);
        })), r);
      }
      function Mr(e, r) {
        return n = e, ((a = r).lower === void 0 || (a.lowerOpen ? 0 < H(n, a.lower) : 0 <= H(n, a.lower))) && (e = e, (r = r).upper === void 0 || (r.upperOpen ? H(e, r.upper) < 0 : H(e, r.upper) <= 0));
        var n, a;
      }
      function Nn(e, r, O, a, s, c) {
        if (!O || O.length === 0) return e;
        var u = r.query.index, d = u.multiEntry, g = r.query.range, b = a.schema.primaryKey.extractKey, w = u.extractKey, f = (u.lowLevelIndex || u).extractKey, O = O.reduce(function(m, E) {
          var S = m, v = [];
          if (E.type === "add" || E.type === "put") for (var A = new oe(), P = E.values.length - 1; 0 <= P; --P) {
            var D, I = E.values[P], T = b(I);
            A.hasKey(T) || (D = w(I), (d && M(D) ? D.some(function(k) {
              return Mr(k, g);
            }) : Mr(D, g)) && (A.addKey(T), v.push(I)));
          }
          switch (E.type) {
            case "add":
              var C = new oe().addKeys(r.values ? m.map(function(G) {
                return b(G);
              }) : m), S = m.concat(r.values ? v.filter(function(G) {
                return G = b(G), !C.hasKey(G) && (C.addKey(G), !0);
              }) : v.map(function(G) {
                return b(G);
              }).filter(function(G) {
                return !C.hasKey(G) && (C.addKey(G), !0);
              }));
              break;
            case "put":
              var R = new oe().addKeys(E.values.map(function(G) {
                return b(G);
              }));
              S = m.filter(function(G) {
                return !R.hasKey(r.values ? b(G) : G);
              }).concat(r.values ? v : v.map(function(G) {
                return b(G);
              }));
              break;
            case "delete":
              var x = new oe().addKeys(E.keys);
              S = m.filter(function(G) {
                return !x.hasKey(r.values ? b(G) : G);
              });
              break;
            case "deleteRange":
              var $ = E.range;
              S = m.filter(function(G) {
                return !Mr(b(G), $);
              });
          }
          return S;
        }, e);
        return O === e ? e : (O.sort(function(m, E) {
          return H(f(m), f(E)) || H(b(m), b(E));
        }), r.limit && r.limit < 1 / 0 && (O.length > r.limit ? O.length = r.limit : e.length === r.limit && O.length < r.limit && (s.dirty = !0)), c ? Object.freeze(O) : O);
      }
      function Tn(e, r) {
        return H(e.lower, r.lower) === 0 && H(e.upper, r.upper) === 0 && !!e.lowerOpen == !!r.lowerOpen && !!e.upperOpen == !!r.upperOpen;
      }
      function Sa(e, r) {
        return function(n, a, s, c) {
          if (n === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = H(n, a)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return a;
        }(e.lower, r.lower, e.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(n, a, s, c) {
          if (n === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = H(n, a)) === 0) {
            if (s && c) return 0;
            if (s) return -1;
            if (c) return 1;
          }
          return a;
        }(e.upper, r.upper, e.upperOpen, r.upperOpen);
      }
      function Oa(e, r, n, a) {
        e.subscribers.add(n), a.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(n), e.subscribers.size === 0 && (s = e, c = r, setTimeout(function() {
            s.subscribers.size === 0 && $e(c, s);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var r = e.schema.name;
        return l(l({}, e), { transaction: function(n, a, s) {
          var c, u, d = e.transaction(n, a, s);
          return a === "readwrite" && (u = (c = new AbortController()).signal, s = function(g) {
            return function() {
              if (c.abort(), a === "readwrite") {
                for (var b = /* @__PURE__ */ new Set(), w = 0, f = n; w < f.length; w++) {
                  var O = f[w], m = Ue["idb://".concat(r, "/").concat(O)];
                  if (m) {
                    var E = e.table(O), S = m.optimisticOps.filter(function(G) {
                      return G.trans === d;
                    });
                    if (d._explicit && g && d.mutatedParts) for (var v = 0, A = Object.values(m.queries.query); v < A.length; v++) for (var P = 0, D = (C = A[v]).slice(); P < D.length; P++) Tr((R = D[P]).obsSet, d.mutatedParts) && ($e(C, R), R.subscribers.forEach(function(G) {
                      return b.add(G);
                    }));
                    else if (0 < S.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== d;
                      });
                      for (var I = 0, T = Object.values(m.queries.query); I < T.length; I++) for (var C, R, x, $ = 0, k = (C = T[I]).slice(); $ < k.length; $++) (R = k[$]).res != null && d.mutatedParts && (g && !R.dirty ? (x = Object.isFrozen(R.res), x = Nn(R.res, R.req, S, E, R, x), R.dirty ? ($e(C, R), R.subscribers.forEach(function(G) {
                        return b.add(G);
                      })) : x !== R.res && (R.res = x, R.promise = j.resolve({ result: x }))) : (R.dirty && $e(C, R), R.subscribers.forEach(function(G) {
                        return b.add(G);
                      })));
                    }
                  }
                }
                b.forEach(function(G) {
                  return G();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: u }), d.addEventListener("error", s(!1), { signal: u }), d.addEventListener("complete", s(!0), { signal: u })), d;
        }, table: function(n) {
          var a = e.table(n), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(c) {
            var u = B.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(c);
            var d = Ue["idb://".concat(r, "/").concat(n)];
            return d ? (u = a.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || jr(s, c).some(function(g) {
              return g == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && Yt(c.mutatedParts), u.then(function(g) {
              0 < g.numFailures && ($e(d.optimisticOps, c), (g = In(0, c, g)) && d.optimisticOps.push(g), c.mutatedParts && Yt(c.mutatedParts));
            }), u.catch(function() {
              $e(d.optimisticOps, c), c.mutatedParts && Yt(c.mutatedParts);
            })) : u.then(function(g) {
              var b = In(0, l(l({}, c), { values: c.values.map(function(w, f) {
                var O;
                return g.failures[f] ? w : (w = (O = s.keyPath) !== null && O !== void 0 && O.includes(".") ? Ce(w) : l({}, w), le(w, s.keyPath, g.results[f]), w);
              }) }), g);
              d.optimisticOps.push(b), queueMicrotask(function() {
                return c.mutatedParts && Yt(c.mutatedParts);
              });
            }), u) : a.mutate(c);
          }, query: function(c) {
            if (!Pn(B, a) || !Dn("query", c)) return a.query(c);
            var u = ((b = B.trans) === null || b === void 0 ? void 0 : b.db._options.cache) === "immutable", f = B, d = f.requery, g = f.signal, b = function(E, S, v, A) {
              var P = Ue["idb://".concat(E, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[v])) return [null, !1, P, null];
              var D = S[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (v) {
                case "query":
                  var I = D.find(function(T) {
                    return T.req.limit === A.limit && T.req.values === A.values && Tn(T.req.query.range, A.query.range);
                  });
                  return I ? [I, !0, P, D] : [D.find(function(T) {
                    return ("limit" in T.req ? T.req.limit : 1 / 0) >= A.limit && (!A.values || T.req.values) && Sa(T.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return I = D.find(function(T) {
                    return Tn(T.req.query.range, A.query.range);
                  }), [I, !!I, P, D];
              }
            }(r, n, "query", c), w = b[0], f = b[1], O = b[2], m = b[3];
            return w && f ? w.obsSet = c.obsSet : (f = a.query(c).then(function(E) {
              var S = E.result;
              if (w && (w.res = S), u) {
                for (var v = 0, A = S.length; v < A; ++v) Object.freeze(S[v]);
                Object.freeze(S);
              } else E.result = Ce(S);
              return E;
            }).catch(function(E) {
              return m && w && $e(m, w), Promise.reject(E);
            }), w = { obsSet: c.obsSet, promise: f, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, m ? m.push(w) : (m = [w], (O = O || (Ue["idb://".concat(r, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = m)), Oa(w, m, d, g), w.promise.then(function(E) {
              return { result: Nn(E.result, c, O?.optimisticOps, a, w, u) };
            });
          } });
        } });
      } };
      function Xt(e, r) {
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
        return s && this.unuse({ stack: r, name: s }), e = this._middlewares[r] || (this._middlewares[r] = []), e.push({ stack: r, create: n, level: a ?? 10, name: s }), e.sort(function(c, u) {
          return c.level - u.level;
        }), this;
      }, ee.prototype.unuse = function(e) {
        var r = e.stack, n = e.name, a = e.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(s) {
          return a ? s.create !== a : !!n && s.name !== n;
        })), this;
      }, ee.prototype.open = function() {
        var e = this;
        return Le(Pe, function() {
          return ya(e);
        });
      }, ee.prototype._close = function() {
        var e = this._state, r = et.indexOf(this);
        if (0 <= r && et.splice(r, 1), this.idbdb) {
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
        return new j(function(s, c) {
          function u() {
            r.close(e);
            var d = r._deps.indexedDB.deleteDatabase(r.name);
            d.onsuccess = Z(function() {
              var g, b, w;
              g = r._deps, b = r.name, w = g.indexedDB, g = g.IDBKeyRange, Dr(w) || b === $t || Pr(w, g).delete(b).catch(Q), s();
            }), d.onerror = ye(c), d.onblocked = r._fireOnBlocked;
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
        return N(this._allTables).map(function(r) {
          return e._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), ee.prototype.transaction = function() {
        var e = function(r, n, a) {
          var s = arguments.length;
          if (s < 2) throw new L.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return a = c.pop(), [r, Qr(c), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ee.prototype._transaction = function(e, r, n) {
        var a = this, s = B.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = r.map(function(b) {
            if (b = b instanceof a.Table ? b.name : b, typeof b != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return b;
          }), e == "r" || e === gr) c = gr;
          else {
            if (e != "rw" && e != pr) throw new L.InvalidArgument("Invalid transaction mode: " + e);
            c = pr;
          }
          if (s) {
            if (s.mode === gr && c === pr) {
              if (!d) throw new L.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && u.forEach(function(b) {
              if (s && s.storeNames.indexOf(b) === -1) {
                if (!d) throw new L.SubTransaction("Table " + b + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (b) {
          return s ? s._promise(null, function(w, f) {
            f(b);
          }) : q(b);
        }
        var g = function b(w, f, O, m, E) {
          return j.resolve().then(function() {
            var S = B.transless || B, v = w._createTransaction(f, O, w._dbSchema, m);
            if (v.explicit = !0, S = { trans: v, transless: S }, m) v.idbtrans = m.idbtrans;
            else try {
              v.create(), v.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === ar.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return b(w, f, O, null, E);
              })) : q(D);
            }
            var A, P = nr(E);
            return P && qe(), S = j.follow(function() {
              var D;
              (A = E.call(v, v)) && (P ? (D = Ie.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = Cr(A)));
            }, S), (A && typeof A.then == "function" ? j.resolve(A).then(function(D) {
              return v.active ? D : q(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return A;
            })).then(function(D) {
              return m && v._resolve(), v._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return v._reject(D), q(D);
            });
          });
        }.bind(null, this, c, u, s, n);
        return s ? s._promise(c, g, "lock") : B.trans ? Le(B.transless, function() {
          return a._whenReady(g);
        }) : this._whenReady(g);
      }, ee.prototype.table = function(e) {
        if (!re(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, r) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = r = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, a = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, u, d, g, b = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        b.dbReadyPromise = new j(function(f) {
          b.dbReadyResolve = f;
        }), b.openCanceller = new j(function(f, O) {
          b.cancelOpen = O;
        }), this._state = b, this.name = e, this.on = ft(this, "populate", "blocked", "versionchange", "close", { ready: [sr, Q] }), this.on.ready.subscribe = Hr(this.on.ready.subscribe, function(f) {
          return function(O, m) {
            ee.vip(function() {
              var E, S = n._state;
              S.openComplete ? (S.dbOpenError || j.resolve().then(O), m && f(O)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(O), m && f(O)) : (f(O), E = n, m || f(function v() {
                E.on.ready.unsubscribe(O), E.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (s = this, ht(oa.prototype, function(A, v) {
          this.db = s;
          var m = on, E = null;
          if (v) try {
            m = v();
          } catch (P) {
            E = P;
          }
          var S = A._ctx, v = S.table, A = v.hook.reading.fire;
          this._ctx = { table: v, index: S.index, isPrimKey: !S.index || v.schema.primKey.keyPath && S.index === v.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: E, or: S.or, valueMapper: A !== it ? A : null };
        })), this.Table = (c = this, ht(dn.prototype, function(f, O, m) {
          this.db = c, this._tx = m, this.name = f, this.schema = O, this.hook = c._allTables[f] ? c._allTables[f].hook : ft(null, { creating: [Jn, Q], reading: [Xn, it], updating: [qn, Q], deleting: [Zn, Q] });
        })), this.Transaction = (u = this, ht(ua.prototype, function(f, O, m, E, S) {
          var v = this;
          this.db = u, this.mode = f, this.storeNames = O, this.schema = m, this.chromeTransactionDurability = E, this.idbtrans = null, this.on = ft(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(A, P) {
            v._resolve = A, v._reject = P;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(A) {
            var P = v.active;
            return v.active = !1, v.on.error.fire(A), v.parent ? v.parent._reject(A) : P && v.idbtrans && v.idbtrans.abort(), q(A);
          });
        })), this.Version = (d = this, ht(ma.prototype, function(f) {
          this.db = d, this._cfg = { version: f, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (g = this, ht(mn.prototype, function(f, O, m) {
          if (this.db = g, this._ctx = { table: f, index: O === ":id" ? null : O, or: m }, this._cmp = this._ascending = H, this._descending = function(E, S) {
            return H(S, E);
          }, this._max = function(E, S) {
            return 0 < H(E, S) ? E : S;
          }, this._min = function(E, S) {
            return H(E, S) < 0 ? E : S;
          }, this._IDBKeyRange = g._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(f) {
          0 < f.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(f) {
          !f.newVersion || f.newVersion < f.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(f.oldVersion / 10));
        }), this._maxKey = yt(r.IDBKeyRange), this._createTransaction = function(f, O, m, E) {
          return new n.Transaction(f, O, m, n._options.chromeTransactionDurability, E);
        }, this._fireOnBlocked = function(f) {
          n.on("blocked").fire(f), et.filter(function(O) {
            return O.name === n.name && O !== n && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(f);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var w = new Proxy(this, { get: function(f, O, m) {
          if (O === "_vip") return !0;
          if (O === "table") return function(S) {
            return Xt(n.table(S), w);
          };
          var E = Reflect.get(f, O, m);
          return E instanceof dn ? Xt(E, w) : O === "tables" ? E.map(function(S) {
            return Xt(S, w);
          }) : O === "_createTransaction" ? function() {
            return Xt(E.apply(this, arguments), w);
          } : E;
        } });
        this.vip = w, a.forEach(function(f) {
          return f(n);
        });
      }
      var Jt, he = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Gr.prototype.subscribe = function(e, r, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: r, complete: n });
      }, Gr.prototype[he] = function() {
        return this;
      }, Gr);
      function Gr(e) {
        this._subscribe = e;
      }
      try {
        Jt = { indexedDB: y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.msIndexedDB, IDBKeyRange: y.IDBKeyRange || y.webkitIDBKeyRange };
      } catch {
        Jt = { indexedDB: null, IDBKeyRange: null };
      }
      function Rn(e) {
        var r, n = !1, a = new Aa(function(s) {
          var c = nr(e), u, d = !1, g = {}, b = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), f && Re.storagemutated.unsubscribe(m));
          } };
          s.start && s.start(w);
          var f = !1, O = function() {
            return hr(E);
          }, m = function(S) {
            Vt(g, S), Tr(b, g) && O();
          }, E = function() {
            var S, v, A;
            !d && Jt.indexedDB && (g = {}, S = {}, u && u.abort(), u = new AbortController(), A = function(P) {
              var D = Je();
              try {
                c && qe();
                var I = De(e, P);
                return I = c ? I.finally(Ie) : I;
              } finally {
                D && Ze();
              }
            }(v = { subscr: S, signal: u.signal, requery: O, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              n = !0, r = P, d || v.signal.aborted || (g = {}, function(D) {
                for (var I in D) if (re(D, I)) return;
                return 1;
              }(b = S) || f || (Re(mt, m), f = !0), hr(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || hr(function() {
                d || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(O, 0), w;
        });
        return a.hasValue = function() {
          return n;
        }, a.getValue = function() {
          return r;
        }, a;
      }
      var ze = Se;
      function Kr(e) {
        var r = xe;
        try {
          xe = !0, Re.storagemutated.fire(e), kr(e, !0);
        } finally {
          xe = r;
        }
      }
      pe(ze, l(l({}, Pt), { delete: function(e) {
        return new ze(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new ze(e, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return r = ze.dependencies, n = r.indexedDB, r = r.IDBKeyRange, (Dr(n) ? Promise.resolve(n.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== $t;
            });
          }) : Pr(n, r).toCollection().primaryKeys()).then(e);
        } catch {
          return q(new L.MissingAPI());
        }
        var r, n;
      }, defineClass: function() {
        return function(e) {
          te(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? Le(B.transless, e) : e();
      }, vip: Ir, async: function(e) {
        return function() {
          try {
            var r = Cr(e.apply(this, arguments));
            return r && typeof r.then == "function" ? r : j.resolve(r);
          } catch (n) {
            return q(n);
          }
        };
      }, spawn: function(e, r, n) {
        try {
          var a = Cr(e.apply(n, r || []));
          return a && typeof a.then == "function" ? a : j.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, r) {
        return r = j.resolve(typeof e == "function" ? ze.ignoreTransaction(e) : e).timeout(r || 6e4), B.trans ? B.trans.waitFor(r) : r;
      }, Promise: j, debug: { get: function() {
        return me;
      }, set: function(e) {
        qr(e);
      } }, derive: Ve, extend: te, props: pe, override: Hr, Events: ft, on: Re, liveQuery: Rn, extendObservabilitySet: Vt, getByKeyPath: ve, setByKeyPath: le, delByKeyPath: function(e, r) {
        typeof r == "string" ? le(e, r, void 0) : "length" in r && [].map.call(r, function(n) {
          le(e, n, void 0);
        });
      }, shallowClone: Yr, deepClone: Ce, getObjectDiff: $r, cmp: H, asap: Vr, minKey: -1 / 0, addons: [], connections: et, errnames: ar, dependencies: Jt, cache: Ue, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, r, n) {
        return e + r / Math.pow(10, 2 * n);
      }) })), ze.maxKey = yt(ze.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Re(mt, function(e) {
        xe || (e = new CustomEvent(vr, { detail: e }), xe = !0, dispatchEvent(e), xe = !1);
      }), addEventListener(vr, function(e) {
        e = e.detail, xe || Kr(e);
      }));
      var nt, xe = !1, xn = function() {
      };
      return typeof BroadcastChannel < "u" && ((xn = function() {
        (nt = new BroadcastChannel(vr)).onmessage = function(e) {
          return e.data && Kr(e.data);
        };
      })(), typeof nt.unref == "function" && nt.unref(), Re(mt, function(e) {
        xe || nt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Se.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), nt?.close();
          for (var r = 0, n = et; r < n.length; r++) n[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Se.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), xn(), Kr({ all: new oe(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, r) {
        return !e || e instanceof Qe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Zr[e.name] ? e : (r = new Zr[e.name](r || e.message, e), "stack" in e && Ae(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, qr(me), l(Se, Object.freeze({ __proto__: null, Dexie: Se, liveQuery: Rn, Entity: cn, cmp: H, PropModification: gt, replacePrefix: function(e, r) {
        return new gt({ replacePrefix: [e, r] });
      }, add: function(e) {
        return new gt({ add: e });
      }, remove: function(e) {
        return new gt({ remove: e });
      }, default: Se, RangeSet: oe, mergeRanges: Et, rangesOverlap: wn }), { default: Se }), Se;
    });
  }(er)), er.exports;
}
var Ga = Ma();
const Fr = /* @__PURE__ */ $a(Ga), $n = Symbol.for("Dexie"), wt = globalThis[$n] || (globalThis[$n] = Fr);
if (Fr.semVer !== wt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Fr.semVer} and ${wt.semVer}`);
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
} = wt;
class Mn {
  db;
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, this.db = new wt(t.app), this.db.version(13).stores({
      channel: "id,slide_index",
      cloud: "id,dashboard_id",
      dashboard: "id,name,update",
      display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
      images: "id,basename,extension,size,type,url",
      messages: "id,utc,expires",
      monitor: "id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor",
      player: "id,title,name,location",
      preference: "id,value,update",
      presentation: "id,name,update",
      series: "id,dashboard_id",
      slide: "id,name,presentation_id,order_index,json,html,update",
      topics: "[widget_id+message_id],message_id,widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,approved,utc,expires",
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
        i.NO_UPDATES,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.CLOUD,
        t
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: t
      };
    const o = await this.db.table(_.CLOUD).where({ id: t.widget }).last().catch(() => {
      K(2, ["%capi%C %ccloud", i.API, i.NONE, i.CLOUD, t.widget]);
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
      i.OK,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.CLOUD,
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
    // data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %ccloud",
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.CLOUD,
    t,
    l.message
  ]), 400)) : 400;
  getDashboard = async (t) => {
    const o = await this.db.table(_.DASHBOARD).where({ id: t.id }).last().catch(() => {
      K(2, ["%cstorage", i.STORAGE, X.DASHBOARD_LOAD, t.id]);
    });
    return o === void 0 ? {
      data: null,
      message: `Dashboard ${t.id} Load error`,
      success: !1
    } : (o.message = `Dashboard ${t.id} retrieved from storage`, o.success = !0, o);
  };
  getDashboards = async (t) => {
    const o = (y) => t?.id === y.id, l = (y) => t?.name ? y.name.includes(t?.name) : !1, p = await this.db.table(_.DASHBOARD).toArray().then((y) => t?.id ? y.filter(o) : y).then((y) => t?.name ? y.filter(l) : y).catch(() => {
      K(2, ["%cstorage", i.STORAGE, X.DASHBOARD_LOAD, t]);
    });
    return p !== void 0 && K(3, [
      "%cstorage%c %cdashboards",
      i.STORAGE,
      i.NONE,
      i.WIDGET,
      t
    ]), {
      data: p !== void 0 ? { dashboards: p, query: t } : null,
      message: p !== void 0 ? "Dashboards loaded from storage" : "Dashboards load error",
      success: p !== void 0
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
    })).catch((l) => (K(4, ["%cstorage", i.STORAGE, _.WIDGET, t, l.message]), {
      data: null,
      message: `Dashboard ${o.data.id} save error: ${l.message}`,
      success: !1
    }));
  };
  /**
   * Wipe Message data after expires timestamp
   */
  cleanMessages = async () => {
    const t = Date.now() / 1e3, o = (y) => y.expires < t, l = (y) => y.expires < t;
    return await this.db.table(_.TOPICS).orderBy("expires").filter(o).delete().catch((y) => (console.error(
      "%cstorage%c %cclean",
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      y.message
    ), 0)), await this.db.table(_.MESSAGES).orderBy("expires").filter(l).delete().catch((y) => (console.error(
      "%clean%c %cstorage%c %cmessages",
      i.OK,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      y.message
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
        i.NO_UPDATES,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.MESSAGES,
        t
      ]), {
        data: null,
        message: "Messages Data error",
        success: !1,
        query: t
      };
    const o = t?.order ?? "utc", l = Math.floor(Date.now() / 1e3);
    o !== "utc" && (t.since = l - 60 * 60 * 24 * 30), this.options.delay !== 0 ? t.before = l - (this.options.delay || 0) : t.before = l;
    const p = (N) => N.utc > (t?.since || 0), y = (N) => N.utc < (t?.before || l);
    try {
      const N = this.db.table(_.TOPICS).where("widget_id").equals(t.widget).filter(p).filter(y);
      t?.approved === "true" ? N.and((se) => se.approved === 1) : N.and((se) => se.visible === 1), N.reverse();
      const M = await N.limit(t?.limit ?? 25).sortBy(o);
      if (M.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: t
        };
      const te = M.map((se) => this.db.table(_.MESSAGES).get({ id: se.message_id }));
      return wt.Promise.all(te).then(async (se) => {
        const re = {
          data: {
            messages: se.map((pe) => pe.data)
          },
          query: t,
          message: "Messages retrieved successfully",
          success: !0
        };
        return K(3, [
          "%cget%c %cstorage%c %cmessages",
          i.OK,
          i.NONE,
          i.STORAGE,
          i.NONE,
          i.MESSAGES,
          re
        ]), re;
      });
    } catch (N) {
      return K(2, [
        "%cget%c %cstorage%c %cmessages",
        i.OK,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.NO_UPDATES,
        t,
        N.message
      ]), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  hideMessage = async (t, o) => {
    await this.db.table(_.TOPICS).where("message_id").equals(t).modify({ visible: o ? 1 : 0 }).catch((l) => (console.error(
      "%chide%c %cstorage%c %cmessage",
      i.KO,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.HIDE,
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
    let p = 0;
    return await o.data.messages.forEach(async (y) => {
      if (y.id !== null) {
        y.topics[0] = {
          message_id: y.id,
          engagement: y.topics[0]?.engagement || y.dynamics?.engagement || 0,
          impressions: y.topics[0]?.impressions || y.dynamics?.semrush_visits || 0,
          reach: y.topics[0]?.reach || y.dynamics?.potential_reach || 0,
          sentiment: y.topics[0]?.sentiment || 0,
          // @ts-ignore
          approved: y.topics[0]?.approved ? 1 : 0
        }, await this.db.table(_.MESSAGES).put({
          id: y.id,
          utc: y.utc,
          data: y,
          expires: y.expires
        }).catch((M) => {
          p++, K(4, [
            "%cset%c %cstorage",
            i.KO,
            i.NONE,
            i.STORAGE,
            "set message",
            `title: ${l}`,
            y,
            M.message
          ]);
        });
        const N = {
          title: l,
          widget_id: t.widget,
          visible: y.topics[0]?.visible || 1,
          // @ts-ignore
          approved: y.topics[0]?.approved || 0,
          message_id: y.id,
          dashboard_id: t.dashboard,
          engagement: y.topics[0]?.engagement || y.dynamics?.engagement || 0,
          impressions: y.topics[0]?.impressions || y.dynamics?.semrush_visits || 0,
          reach: y.topics[0]?.reach || y.dynamics?.potential_reach || 0,
          sentiment: y.topics[0]?.sentiment || 0,
          utc: y.utc,
          expires: y.expires
        };
        await this.db.table(_.TOPICS).put(N).catch((M) => {
          p++, K(4, [
            "%cset%c %cstorage",
            i.KO,
            i.NONE,
            i.STORAGE,
            "set topic",
            `title: ${l}`,
            y,
            M.message
          ]);
        }), await o.data.topics.forEach(async (M) => {
          const te = M.message_id, se = M.visible ? 1 : 0, Ot = M.approve ? 1 : 0, re = M.title;
          await this.db.table(_.TOPICS).where("message_id").equals(te).modify({ visible: se, approve: Ot }).catch((pe) => {
            p++, K(4, [
              "%cset%c %cstorage",
              i.KO,
              i.NONE,
              i.STORAGE,
              "update message visibility",
              `title: ${re}`,
              `widget: ${M.widget_id}`,
              pe.message
            ]);
          });
        });
      }
    }), p === 0 ? 201 : 400;
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
        i.NO_UPDATES,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.CLOUD,
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
        i.KO,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.SERIES,
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
      i.OK,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.SERIES,
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
    // data: data.data,
    data: o
  }).then(() => 201).catch((l) => (K(2, [
    "%cset%c %cstorage%c %cseries",
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.SERIES,
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
        i.KO,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.WIDGET,
        t
      ]), {
        data: null,
        message: "Widget Data error",
        success: !1,
        query: t
      };
    const o = await this.db.table(_.WIDGET).where({ id: t.id }).last().catch(() => {
      console.warn("%cstorage", i.STORAGE, X.WIDGET_LOAD, t.id);
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
    const o = (N) => t?.dashboard === N.dashboard_id, l = (N) => t?.type === N.type, p = (N) => t?.name ? N.name.includes(t?.name) : !1, y = await this.db.table(_.WIDGET).toArray().then((N) => t?.dashboard ? N.filter(o) : N).then((N) => t?.type ? N.filter(l) : N).then((N) => t?.name ? N.filter(p) : N).catch(() => {
      K(2, ["%cstorage", i.STORAGE, X.WIDGET_LOAD, t]);
    });
    return y !== void 0 && K(3, [
      "%cstorage%c %cwidgets",
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      t
    ]), {
      // @ts-ignore
      data: y !== void 0 ? { data: y, query: t } : null,
      message: y !== void 0 ? "Widgets loaded from storage" : "Widgets load error",
      success: y !== void 0
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
    i.STORAGE,
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
  subscribe = (t) => (t = Ra(t), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length > 0 || (t.type === _.MESSAGES && (t = St(this.options, t)), console.info(
    "%cstorage%c %csubscribe",
    i.STORAGE,
    i.NONE,
    i.SUBSCRIBE,
    t.slide,
    t.widget
  ), console.debug(
    "%cstorage%c %csubscribe",
    i.STORAGE,
    i.NONE,
    i.SUBSCRIBE,
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
      K(2, ["%cstorage", i.STORAGE, X.SLIDE_LOAD, t.id]);
    });
    return {
      data: o,
      query: t,
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
    const o = (M) => t?.id ? M.id === t.id : !1, l = (M) => t?.name ? M.name.includes(t?.name) : !1, p = (M) => t?.presentation_id ? M.presentation_id === t.presentation_id : !1, N = await this.db.table(_.SLIDE).toArray().then((M) => t?.presentation_id ? M.filter(p) : M).then((M) => t?.id ? M.filter(o) : M).then((M) => t?.name ? M.filter(l) : M);
    return N && N.sort((M, te) => M.order_index - te.order_index), N !== void 0 && K(3, ["%cstorage%c %cslides", i.STORAGE, i.NONE, i.SLIDE, t]), {
      // @ts-ignore
      data: N,
      query: t,
      // : data !== undefined ? { data, query } : null,
      message: N !== void 0 ? "Slides loaded from storage" : "Slides load error",
      success: N !== void 0
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
    i.STORAGE,
    X.SLIDE_STORE,
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
        i.STORAGE,
        X.PRESENTATION_LOAD,
        t.id
      );
    });
    return o === void 0 ? {
      data: null,
      message: `Presentation ${t.id} Load error`,
      success: !1
    } : (o.query = t, o.message = `Presentation ${t.id} retrieved from storage`, o.success = !0, o);
  };
  /**
   * Retrieve Presentations from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentations = async (t) => {
    const o = (y) => t?.name ? y.name.includes(t?.name) : !1, p = await this.db.table(_.PRESENTATION).toArray().then((y) => t?.name ? y.filter(o) : y);
    return p !== void 0 && K(3, [
      "%cstorage%c %cpresentations",
      i.STORAGE,
      i.NONE,
      i.PRESENTATION,
      t
    ]), {
      data: p,
      query: t,
      message: p !== void 0 ? "Presentations loaded from storage" : "Presentations load error",
      success: p !== void 0
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
    query: t,
    message: `Presentation ${t.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    i.STORAGE,
    X.PRESENTATION_STORE,
    t,
    o.message
  ), {
    data: null,
    query: t,
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
        i.STORAGE,
        X.PREFERENCE_LOAD,
        t.id
      ]);
    });
    return {
      // @ts-ignore
      data: o !== void 0 ? { preferences: o } : null,
      message: o !== void 0 ? "Preference loaded from storage" : "Preference load error",
      success: o !== void 0,
      query: { preference: t, widget: "" }
      // widget needs to have a value in IQuery interface
    };
  };
  /**
   * Retrieve Preferences from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPreferences = async (t) => {
    const o = (y) => t?.id ? t.id = y.id : !1, p = await this.db.table(_.SLIDE).toArray().then((y) => t?.id ? y.filter(o) : y);
    return p !== void 0 && K(3, [
      "%cstorage%c %cpreferences",
      i.STORAGE,
      i.NONE,
      i.PRESENTATION,
      t
    ]), {
      // @ts-ignore
      data: p !== void 0 ? { preferences: p, query: t } : null,
      message: p !== void 0 ? "Preferences loaded from storage" : "Preferences load error",
      success: p !== void 0
    };
  };
  /**
   * Update Preference in Storage
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (t) => await this.db.table(_.PREFERENCE).put({
    id: t.id,
    value: t.value,
    update: t.update
  }).then(() => ({
    data: null,
    message: `Preference ${t.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    i.STORAGE,
    X.PREFERENCE_STORE,
    t,
    o.message
  ), {
    data: null,
    message: `Preference ${t.id} save error: ${o.message}`,
    success: !1
  }));
  /**
   * Retrieve List of Images from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getImages = async (t) => {
    const o = (y) => t?.id ? y.includes(t.id) : !1, p = await this.db.table(_.IMAGES).toArray().then((y) => t?.id ? y.filter(o) : y);
    return p !== void 0 && K(3, [
      "%cstorage%c %cimages",
      i.STORAGE,
      i.NONE,
      i.PRESENTATION,
      t
    ]), {
      // @ts-expect-error query.widget is obligatory but not always
      data: p !== void 0 ? { images: p, query: t } : null,
      message: p !== void 0 ? "Images loaded from storage" : "Images load error",
      success: p !== void 0
    };
  };
  /**
   * Update Image in Storage
   * @param query IQuery
   * @returns number
   */
  setImage = async (t) => await this.db.table(_.IMAGES).put({
    id: t.data.name,
    basename: t.data.basename,
    extension: t.data.extension,
    size: t.data.size,
    type: t.data.type,
    url: t.data.url
  }).then(() => ({
    data: null,
    message: `Image ${t.data.name} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    i.STORAGE,
    X.IMAGE_SET,
    t,
    o.message
  ), {
    data: null,
    message: `Image ${t.data.id} save error: ${o.message}`,
    success: !1
  }));
}
function Ur(h) {
  return new Promise((t, o) => {
    h.oncomplete = h.onsuccess = () => t(h.result), h.onabort = h.onerror = () => o(h.error);
  });
}
function Ka(h, t) {
  let o;
  const l = () => {
    if (o)
      return o;
    const p = indexedDB.open(h);
    return p.onupgradeneeded = () => p.result.createObjectStore(t), o = Ur(p), o.then((y) => {
      y.onclose = () => o = void 0;
    }, () => {
    }), o;
  };
  return (p, y) => l().then((N) => y(N.transaction(t, p).objectStore(t)));
}
let Wr;
function Gn() {
  return Wr || (Wr = Ka("keyval-store", "keyval")), Wr;
}
function _e(h, t = Gn()) {
  return t("readonly", (o) => Ur(o.get(h)));
}
function ke(h, t, o = Gn()) {
  return o("readwrite", (l) => (l.put(t, h), Ur(l.transaction)));
}
class Kn {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t;
  }
  getCloud = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", i.API, _.CLOUD, t.slide, t.widget), { data: null, message: "Cloud Data error", success: !1 }));
  };
  getSeries = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", i.API, _.SERIES, t.slide, t.widget), { data: null, message: "Series Data error", success: !1 }));
  };
  getMessages = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch(() => (console.warn("%capi", i.API, _.MESSAGES, t.slide, t.widget), { data: null, message: "Messages Data error", success: !1 }));
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
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((p) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.CLOUD,
      t,
      p.message
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
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((p) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.SERIES,
      t,
      p.message
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
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((p) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.MESSAGES,
      t,
      p.message
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
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", i.API, _.SLIDE, t.id), {
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
    })).catch((p) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.WIDGET,
      t,
      p.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${p.message}`,
      success: !1
    }));
  };
  getWidget = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", i.API, _.SLIDE, t.id), {
      data: null,
      message: `Widget ${t.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getWidgets = async (t) => (console.warn("%capi", i.API, _.SLIDE, t?.presentation), {
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
    })).catch((p) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.WIDGET,
      t,
      p.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${p.message}`,
      success: !1
    }));
  };
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (t) => (t.type === _.MESSAGES && (t = St(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length > 0 || (console.debug(
    "%cstorage%c %csubscribe",
    i.STORAGE,
    i.NONE,
    i.SUBSCRIBE,
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
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", i.API, _.SLIDE, t.id), {
      data: null,
      message: `Slide ${t.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getSlides = async (t) => (console.warn("%capi", i.API, _.SLIDE, t.presentation), {
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
    })).catch((p) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.SLIDE,
      t,
      p.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${p.message}`,
      success: !1
    }));
  };
  getPresentation = async (t) => {
    const o = Y(t);
    return await _e(o).then((l) => l).catch((l) => (console.warn("%capi", i.API, _.PRESENTATION, t.id), {
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
    })).catch((p) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.PRESENTATION,
      t,
      p.message
    ), {
      data: null,
      message: `Presentation ${t.data.id} save error: ${p.message}`,
      success: !1
    }));
  };
  getPreference = async (t) => await _e(`${_.PREFERENCE}.${t.id}`).then((o) => o).catch((o) => (console.warn("%capi", i.API, _.PREFERENCE, t.id), {
    data: null,
    message: `Preference ${t.id} get error: ${o.message}`,
    success: !1
  }));
  getPreferences = async () => await _e(`${_.PREFERENCE}`).then((t) => t).catch((t) => (console.warn("%capi", i.API, _.PREFERENCE), {
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
    i.STORAGE,
    _.PREFERENCE,
    t,
    o.message
  ), {
    data: null,
    message: `Preference ${t.id} save error: ${o.message}`,
    success: !1
  }));
  getImages = async (t) => ({
    data: null,
    message: `Images ${t.id} `,
    success: !1
  });
  setImage = async (t) => ({
    data: null,
    message: `Image ${t.id} saved`,
    success: !1
  });
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
        i.API,
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
        i.API,
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
        i.API,
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, _.CLOUD, t, p), 400;
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, _.SERIES, t, p), 400;
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, _.MESSAGES, t, p), 400;
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.WIDGET, t, l), {
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.WIDGET, t, l), {
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
  subscribe = (t) => (t.type === _.MESSAGES && (t = St(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    i.STORAGE,
    i.NONE,
    i.SUBSCRIBE,
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.SLIDE, t, o), {
        data: null,
        message: `Slide ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      return localStorage.getObject(
        `${_.PRESENTATION}.${t.presentation}`
      );
    } catch (o) {
      return console.warn(
        "%capi",
        i.API,
        _.PRESENTATION,
        t.presentation,
        o
      ), {
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
      return console.warn("%capi", i.API, _.PRESENTATION, t), {
        data: null,
        message: `Presentations get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (t) => {
    try {
      return localStorage.setObject(
        `${_.PRESENTATION}.${t.data.id}`,
        t.data
      ), {
        data: null,
        message: `Presentation ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", i.STORAGE, _.PRESENTATION, t, o), {
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
      return console.warn("%capi", i.API, _.PREFERENCE, t.id, o), {
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
      return console.warn("%capi", i.API, _.PREFERENCE, t), {
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
        i.STORAGE,
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
  getImages = async (t) => ({
    data: null,
    message: `Images ${t.id} `,
    success: !1
  });
  setImage = async (t) => ({
    data: null,
    message: `Image ${t.id} saved `,
    success: !1
  });
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
        i.API,
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
        i.API,
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
        i.API,
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, _.CLOUD, t, p), 400;
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, _.SERIES, t, p), 400;
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, _.MESSAGES, t, p), 400;
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.WIDGET, t, l), {
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.WIDGET, t, l), {
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
  subscribe = (t) => (t.type === _.MESSAGES && (t = St(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    i.STORAGE,
    i.NONE,
    i.SUBSCRIBE,
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.SLIDE, t, o), {
        data: null,
        message: `Slide ${t.data.id} save error: ${o.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      return sessionStorage.getObject(
        `${_.PRESENTATION}.${t.presentation}`
      );
    } catch (o) {
      return console.warn(
        "%capi",
        i.API,
        _.PRESENTATION,
        t.presentation,
        o
      ), {
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
      return console.warn("%capi", i.API, _.PRESENTATION, t), {
        data: null,
        message: `Presentations get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (t) => {
    try {
      return sessionStorage.setObject(
        `${_.PRESENTATION}.${t.data.id}`,
        t.data
      ), {
        data: null,
        message: `Presentation ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (o) {
      return console.error("%cstorage", i.STORAGE, _.PRESENTATION, t, o), {
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
      return console.warn("%capi", i.API, _.PREFERENCE, t.id, o), {
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
      return console.warn("%capi", i.API, _.PREFERENCE, t), {
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
        i.STORAGE,
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
  getImages = async (t) => ({
    data: null,
    message: `Images ${t.id} `,
    success: !1
  });
  setImage = async (t) => ({
    data: null,
    message: `Image ${t.id} saved`,
    success: !1
  });
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
        i.API,
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
        i.API,
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
        i.API,
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, "set", t, p), 400;
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, "set", t, p), 400;
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
    } catch (p) {
      return console.error("%cstorage", i.STORAGE, "set", t, p), 400;
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
      return console.warn("%capi", i.API, _.DASHBOARD, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.DASHBOARD, t, l), {
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
      return console.warn("%capi", i.API, _.WIDGET, t.id, o), {
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
      return console.error("%cstorage", i.STORAGE, _.WIDGET, t, l), {
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
  subscribe = (t) => (t.type === _.MESSAGES && (t = St(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    i.STORAGE,
    i.NONE,
    i.SUBSCRIBE,
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
      return console.warn("%capi", i.API, _.SLIDE, t.id, o), {
        data: null,
        message: `Slide ${t.id} load error: ${o.message}`,
        success: !1
      };
    }
  };
  getSlides = async (t) => {
    try {
      return window.BuzzCasting.SlideData.filter(
        (o) => o.presentation_id === t.presentation
      );
    } catch (o) {
      return console.warn(
        "%capi",
        i.API,
        _.PRESENTATION,
        t.presentation_id,
        o
      ), {
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
      return console.error("%cstorage", i.STORAGE, _.SLIDE, t, o), {
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
      return console.warn(
        "%capi",
        i.API,
        _.PRESENTATION,
        t.presentation,
        o
      ), {
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
      return console.warn("%capi", i.API, _.PRESENTATION, t), {
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
      return console.error("%cstorage", i.STORAGE, _.PRESENTATION, t, o), {
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
      return console.warn("%capi", i.API, _.PREFERENCE, t.id, o), {
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
      return console.warn("%capi", i.API, _.PREFERENCE, t), {
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
        i.STORAGE,
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
  getImages = async (t) => ({
    data: null,
    message: `Images ${t.id} `,
    success: !1
  });
  setImage = async (t) => ({
    data: null,
    message: `Image ${t.name} saved`,
    success: !1
  });
}
class Ja {
  sm;
  api;
  bc;
  options;
  subscribers = [];
  // private temp: {[x:string]:any} = []
  constructor(t) {
    switch (K(3, [
      "%cpresentation",
      i.PRESENTATION,
      t.presentation,
      X.VERSION,
      xa
    ]), this.options = t, this.sm = null, this.bc = null, this.api = new ka(t), t.storage) {
      case ge.DEXIE:
        this.sm = new Mn(t);
        break;
      case ge.LOCAL:
        this.sm = new Ln(t);
        break;
      case ge.SESSION:
        this.sm = new Bn(t);
        break;
      case ge.KEYVAL:
        this.sm = new Kn(t);
        break;
      case ge.WINDOW:
        this.sm = new Wn(t);
        break;
    }
  }
  addSubscriber(t) {
    this.subscribers[t.widget] = t;
  }
  deleteSubscriber(t) {
    delete this.subscribers[t.widget];
  }
  update = async (t) => {
    if (K(3, [
      "%clupdate%c %cdata",
      i.NO_UPDATES,
      i.NONE,
      i.MESSAGES,
      t
    ]), this.sm === null || Object.keys(this.subscribers).length === 0)
      return;
    const o = [];
    Object.values(this.subscribers).forEach((l) => {
      o.push(this.api.get(l));
    }), o.forEach(async (l) => {
      await l.then(
        async (p) => await this.processResponse(p)
      );
    });
  };
  processResponse = async (t) => {
    let o, l = 400;
    if (t.success === !0) {
      const p = this.subscribers[t.query.widget];
      let y = "";
      switch (t.query.type) {
        case _.MESSAGES:
          t.data.messages = t.data.messages.filter(
            (N) => N.id !== null
          ), y = t.data.messages.length > 0 ? Lr(t.data.messages[0].utc) : "none", p?.hash && p.hash === y ? (K(3, [
            "%cload%c %ccleanMessages",
            i.NO_UPDATES,
            i.NONE,
            i.MESSAGES,
            t.query.widget
          ]), K(4, ["%cmessages", i.MESSAGES, t]), l = 204) : (o = t, p.hash = y, l = await this.sm?.setMessages(t.query, t).then(async (N) => (N = 201, this.broadcastUpdate(N, t))));
          break;
        case _.CLOUD:
          y = Lr(t.data.cloud), p?.hash && p.hash === y ? (K(3, [
            "%cset%c %capi%c %ccloud",
            i.NO_UPDATES,
            i.NONE,
            i.API,
            i.NONE,
            i.CLOUD,
            t.query.widget
          ]), K(4, ["%ccloud", i.CLOUD, t.query]), l = 204) : (p.hash = y, o = {
            data: {
              cloud: t.data
            },
            message: t.message,
            success: t.success,
            query: t.query
          }, l = await this.sm?.setCloud(t.query, o.data).then((N) => this.broadcastUpdate(N, t)));
          break;
        case _.SERIES:
          y = Lr(t.data.series), p?.hash && p.hash === y ? (K(3, [
            "%cset%c %capi%c %cseries",
            i.NO_UPDATES,
            i.NONE,
            i.API,
            i.NONE,
            i.CLOUD
          ]), K(4, ["%cseries", i.SERIES, t]), l = 204) : (p.hash = y, o = {
            data: t.data,
            message: t.message,
            success: t.success,
            query: t.query
          }, l = await this.sm?.setSeries(t.query, t.data).then((N) => this.broadcastUpdate(N, t)));
          break;
        default:
          return K(4, [
            "%cfetch%c %capi",
            i.NO_UPDATES,
            i.NONE,
            i.API,
            `Bad request: type ${t.query.type} unknown`
          ]), t;
      }
    } else
      switch (K(4, [
        `%cset%c %c${t.query.type}%c %cbad request`,
        i.KO,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.NO_UPDATES,
        t.query
      ]), t.query.type) {
        case _.MESSAGES:
          return await this.sm?.getMessages(t.query).then((p) => {
            this.broadcastUpdate(201, p);
          });
        case _.CLOUD:
          return await this.sm?.getCloud(t.query).then((p) => {
            this.broadcastUpdate(201, p);
          });
        case _.SERIES:
          return await this.sm?.getSeries(t.query).then((p) => {
            this.broadcastUpdate(201, p);
          });
      }
    return l;
  };
  startBroadcastListener = () => {
    const t = this.options.presentation;
    this.bc = new BroadcastChannel(t), K(3, ["%cchannel%c %capi", i.BROADCAST, i.NONE, i.API, t]), this.bc.onmessage = (o) => {
      this.actions(o);
    }, this.bc.postMessage({ event: X.STORAGE_INIT, data: {} });
  };
  broadcastUpdate = (t, o) => {
    switch (t) {
      case 201:
        K(3, [
          `%cupdate%c %cwidget%c %c${o.query?.type}`,
          i.BROADCAST,
          i.NONE,
          i.WIDGET,
          i.NONE,
          kn(o.query),
          // @ts-expect-error query.widget is obligatory but not always
          `${o.data?.title ?? ""} ${o.query.widget}`
        ]), K(4, ["%cevent", i.BROADCAST, o]), this.bc?.postMessage({
          event: X.WIDGET_UPDATE,
          data: o.query
        });
        break;
      case 204:
        break;
      default:
        K(2, [
          `%cupdate%c %cwidget%c %c${o.query?.type}`,
          i.KO,
          i.NONE,
          i.WIDGET,
          i.NONE,
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
      case X.SUBSCRIBE:
        this.addSubscriber(t.data.data);
        break;
      case X.UPDATE:
        K(3, [
          "%cupdate%c %capi%c %cstorage",
          i.BROADCAST,
          i.NONE,
          i.API,
          i.NONE,
          i.STORAGE,
          t.data
        ]), await this.update(t.data.data);
        break;
    }
  };
  cleanMessages = async () => {
    if (this.options?.suspended) {
      K(2, [
        "%cclean%c %cstorage%c %cmessages",
        i.KO,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.MESSAGES,
        "Account suspended"
      ]);
      return;
    }
    const t = this.options?.retention || 86400 * 4, o = await this.sm?.cleanMessages(
      t
    );
    K(3, [
      "%cclean%c %cstorage%c %cmessages",
      i.OK,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      `${o} messages deleted`
    ]);
  };
  hideMessage = async (t) => {
    const o = await this.sm?.hideMessage(t.id, 0);
    return K(3, [
      "%chide%c %cstorage%c %cmessages",
      i.OK,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      `${o} messages hidden`
    ]), await this.api.hideMessage(t);
  };
  hideLabels = async (t) => await this.api.hideLabels(t);
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  deleteSubscribers = async () => (this.subscribers = [], await new Promise((t) => t(this.subscribers)));
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
  /* public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
  	return await this.api.loadDashboardWidgets(query);
  }; */
  getWidget = async (t) => await this.sm?.getWidget(t);
  getWidgets = async (t) => await this.sm?.getWidgets(t);
  setWidget = async (t) => await this.sm?.setWidget(t);
  loadDashboards = async (t) => await this.api.loadDashboards(t);
  getDashboard = async (t) => await this.sm?.getDashboard(t);
  getDashboards = async () => await this.sm?.getDashboards();
  setDashboard = async (t) => await this.sm?.setDashboard(t);
  loadImages = async (t) => await this.api.loadImages(t);
  storeImage = async (t) => await this.api.storeImage(t);
  deleteImage = async (t, o) => await this.api.deleteImage(t, o);
  getImages = async (t) => await this.sm?.getImages(t);
  setImage = async (t) => await this.sm?.setImage(t);
}
class Ba {
  sm;
  constructor(t) {
    switch (this.sm = null, t.storage) {
      case ge.DEXIE:
        this.sm = new Mn(t);
        break;
      case ge.LOCAL:
        this.sm = new Ln(t);
        break;
      case ge.SESSION:
        this.sm = new Bn(t);
        break;
      case ge.KEYVAL:
        this.sm = new Kn(t);
        break;
      case ge.WINDOW:
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
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.CLOUD,
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
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.MESSAGES,
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
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.SERIES,
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
    const p = { ...t.dataset };
    delete p.hmr, p.presentation = window.BuzzCasting.getOptions()?.presentation ?? `${l} not found`, this.query = p, Da(t);
    const y = window.BuzzCasting.getOptions();
    this.storageReader = new Ba(y), this.broadcastChannel = new BroadcastChannel(p.presentation), this.broadcastListener();
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
        case X.WIDGET_UPDATE:
          try {
            if (l.dashboard === t.dashboard && l.widget === t.widget) {
              const p = await this.getData();
              p?.success && (K(4, [
                "%cset%c %cbroadcast%c %cwidget",
                i.OK,
                i.NONE,
                i.BROADCAST,
                i.NONE,
                i.WIDGET,
                this.query
              ]), this.callbacks.forEach(async (y) => {
                y(p);
              }));
            }
          } catch (p) {
            K(4, [X.WIDGET_UPDATE, l, p.message]);
          }
          break;
        case X.APP_READY:
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
      i.SUBSCRIBE,
      i.NONE,
      i.WIDGET,
      this.query.presentation,
      this.query.widget
    ]), K(4, ["%cwidget", i.WIDGET, this.query]), this.broadcastChannel.postMessage({
      event: X.SUBSCRIBE,
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
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.WIDGET,
    this.query.widget,
    "Wrong method call for getCloud, expected type is",
    this.query.type
  ]), K(4, ["%ccloud", i.CLOUD, this.query]), {
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
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.WIDGET,
    this.query.widget,
    "Wrong method call for getMessages, expected type is",
    this.query.type
  ]), K(4, ["%cmessages", i.MESSAGES, this.query]), {
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
    i.KO,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.WIDGET,
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
      i.WIDGET,
      X.SHOW_MODAL,
      t.showComponent,
      Pa(this.element.attributes)
      // props['data-widget'],
    ]);
    const o = new CustomEvent(X.SHOW_MODAL, {
      detail: {
        component: t.showComponent,
        props: t.props,
        // mergedProps,
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
