var _ = /* @__PURE__ */ ((f) => (f.CLOUD = "cloud", f.DASHBOARD = "dashboard", f.DASHBOARDS = "dashboards", f.IMAGES = "images", f.MESSAGES = "messages", f.PREFERENCE = "preference", f.PREFERENCES = "preferences", f.PRESENTATION = "presentation", f.PRESENTATIONS = "presentations", f.SERIES = "series", f.SLIDE = "slide", f.SLIDES = "slides", f.TOPICS = "topics", f.WIDGET = "widget", f.WIDGETS = "widgets", f))(_ || {}), i = /* @__PURE__ */ ((f) => (f.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", f.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", f.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", f.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", f.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", f.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", f.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", f.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", f.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", f.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", f.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", f.NONE = "color:transparent;background-color:transparent;", f.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", f.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", f.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", f.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", f.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", f.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", f.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", f.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", f))(i || {}), X = /* @__PURE__ */ ((f) => (f.ADD_SLIDE = "addSlide", f.APP_READY = "appReady", f.API_UPDATE = "apiUpdate", f.BACKGROUND_UPDATE = "backgroundUpdate", f.WS_API_REQUEST = "wsApiRequest", f.WS_API_RESPONSE = "wsApiResponse", f.WS_API_UPDATE = "wsApiRUpdate", f.APPROVE_MESSAGE = "approveMessage", f.CHANNEL = "channel", f.CLEAN_MESSAGES = "cleanMessages", f.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", f.CLOSE_BUILDER_MODAL = "closeBuilderModal", f.CLOSE_MODAL = "closeModal", f.COLOR_UPDATE = "colorUpdate", f.COMPONENT_INDEX = "componentIndex", f.CSS_SET = "setCss", f.CSS_STORE = "storeCss", f.DASHBOARD_LOAD = "loadDashboard", f.DASHBOARD_STORE = "storeDashboard", f.ERROR = "error", f.HIDE_MESSAGE = "hideMessage", f.HIDE_LABELS = "hideLabels", f.IMAGE_GET = "getImage", f.IMAGE_SET = "setImage", f.IMAGE_STORED = "imageStored", f.LAUPPUT_UPDATE = "layoutUpdate", f.PREV_SLIDE = "prevSlide", f.RELOAD_PRESENTATION = "reloadPresentation", f.STAR_MESSAGE = "starMessage", f.GOTO_SLIDE = "gotoSlide", f.NEXT_SLIDE = "nextSlide", f.PREFERENCE_LOAD = "loadPreference", f.PREFERENCE_STORE = "storePreference", f.PAUSE_PRESENTATION = "pausePresentation", f.PRESENTATION_READY = "presentationReady", f.PRESENTATION_LOAD = "loadPresentation", f.PRESENTATION_STORE = "storePresentation", f.SCREENSHOT_TAKE = "takeScreenshot", f.SCREENSHOT_STORE = "storeScreenshot", f.SECTION_UPDATE = "sectionUpdate", f.SHOW_BUILDER_DIALOG = "showBuilderDialog", f.SHOW_BUILDER_MODAL = "showBuilderModal", f.SHOW_MODAL = "showModal", f.SLIDE_DID_LOAD = "slideDidLoad", f.SLIDE_GET = "getSlide", f.SLIDE_GOTO = "slideGoto", f.SLIDE_LOAD = "loadSlide", f.SLIDE_READY = "slideReady", f.SLIDE_SAVED = "slideSaved", f.SLIDE_SET = "setSlide", f.SLIDE_STORE = "storeSlide", f.SLIDE_STORED = "slideStored", f.SLIDE_TRANSITIONER = "slideTransitioner", f.START_TRANSITIONER = "startTransitioner", f.STORAGE_INIT = "storageInit", f.SUBSCRIBE = "subscribe", f.SUSPEND_ACCOUNT = "suspendAccount", f.SWITCH_PRESENTATION = "switchPresentation", f.REMOVE_CLOUD = "removeCloud", f.UPDATE = "update", f.UPLOAD_COMPLETED = "uploadCompleted", f.VERSION = "version", f.WIDGETS_CLEAR = "widgetsClear", f.WIDGET_DID_UPDATE = "widgetDidUpdate", f.WIDGET_LOAD = "widgetLoad", f.WIDGET_STORE = "widgetStore", f.WIDGET_UPDATE = "widgetUpdate", f))(X || {}), qt = /* @__PURE__ */ ((f) => (f.APPROVED = "approved", f.BEFORE = "before", f.DELAYED = "delayed", f.NONE = "none", f.REALTIME = "realtime", f))(qt || {}), pe = /* @__PURE__ */ ((f) => (f.KEYVAL = "keyval", f.LOCAL = "local", f.SESSION = "session", f.DEXIE = "dexie", f.WINDOW = "window", f))(pe || {});
function Pa(f) {
  const t = {};
  for (let o = 0; o < f.length; o++) {
    const l = f.item(o);
    l?.name && (t[l.name] = l.value);
  }
  return t;
}
function Da(f) {
  const t = document.createRange();
  t.selectNodeContents(f), t.deleteContents();
}
function Na(f, t) {
  for (; f.length < t; )
    f = `0${f}`;
  return f;
}
function Oe(f, t) {
  let o, l, g;
  if (t.length === 0)
    return f;
  for (o = 0, g = t.length; o < g; o++)
    l = t.charCodeAt(o), f = (f << 5) - f + l, f |= 0;
  return f < 0 ? f * -2 : f;
}
function Ia(f, t, o) {
  return Object.keys(t).sort().reduce(l, f);
  function l(g, b) {
    return jn(g, t[b], b, o);
  }
}
function jn(f, t, o, l) {
  const g = Oe(Oe(Oe(f, o), Ta(t)), typeof t);
  if (t === null)
    return Oe(g, "null");
  if (t === void 0)
    return Oe(g, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (l.includes(t))
      return Oe(g, `[Circular]${o}`);
    l.push(t);
    const b = Ia(g, t, l);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return b;
    try {
      return Oe(b, String(t.valueOf()));
    } catch (I) {
      return Oe(b, `[valueOf exception]${I.stack || I.message}`);
    }
  }
  return Oe(g, t.toString());
}
function Ta(f) {
  return Object.prototype.toString.call(f);
}
function er(f) {
  return Na(jn(0, f, "", []).toString(16), 8);
}
const at = (f) => {
  let t = {}, o = f.split(",");
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
const K = (f = 0, t) => {
  switch (!0) {
    case f > 3:
      console.debug(...t);
      break;
    case f > 2:
      console.info(...t);
      break;
    case f > 1:
      console.warn(...t);
      break;
    case f > 0:
      console.error(...t);
      break;
  }
}, Fr = (f) => {
  switch (f?.type) {
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
function Y(f) {
  let t = `${f.type}.${f.topics}`;
  return f.order && (t += `.${f.order}`), f.period && (t += `.${f.period}`), t;
}
function Ra(f) {
  if (f.widget === void 0) {
    const t = f.topics?.split("-");
    t && t.length > 1 ? (f.dashboard = t ? t[0] : "", f.widget = t ? t[1] : "") : (f.widget = f.topics, f.dashboard = f.slide);
  }
  return f;
}
function St(f, t) {
  let o, l, g, b, I;
  switch (f.moderation) {
    case qt.BEFORE:
      o = /* @__PURE__ */ new Date(), l = f.beforeTime?.split(":"), g = Number.parseInt(l ? l[0] : "00"), b = Number.parseInt(l ? l[1] : "00"), I = Number.parseInt(l ? l[2] : "00"), t.before = o.setHours(g, b, I, 0) / 1e3, t.period || (t.period = o.getDay() === 1 ? 72 : 24);
      break;
    case qt.DELAYED:
      f.delay && f.delay > 0 && (t.delay = `${f.delay}`);
      break;
    case qt.APPROVED:
      t.approved = "1";
      break;
    default:
      f.period !== 0 && (t.period = f.period);
  }
  return t;
}
const xa = "3.14.4";
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
    const { version: o } = this.options, l = this.headers(), g = Object.assign({}, t);
    delete g.type, delete g.hash, delete g.order, g.topics = `${g.dashboard}-${g.widget}`, delete g.presentation;
    const b = Object.keys(g).length > 0 ? `?${new URLSearchParams(g).toString()}` : "";
    let I = "";
    switch (t.type) {
      case _.MESSAGES:
        I = i.MESSAGES;
        break;
      case _.SERIES:
        I = i.SERIES;
        break;
      case _.CLOUD:
        I = i.CLOUD;
        break;
    }
    return K(3, [
      `%cfetch%c %capi%c %c${t.type}`,
      i.OK,
      i.NONE,
      i.API,
      i.NONE,
      I,
      t.widget,
      g
    ]), await fetch(
      [this.url, "api", o, t.type].join("/") + b,
      { ...l, method: "get" }
    ).then(async (G) => {
      if (!G.ok)
        throw new Error(`${G.status}`);
      return G;
    }).then((G) => G.json()).then((G) => (G.query = t, G)).catch((G) => ({ success: !1, message: `${G}`, data: null, query: t }));
  }
  async hideMessage(t) {
    const { version: o } = this.options, l = this.headers(), g = "?action=visible";
    return console.info(
      "%capi%c %cput",
      i.API,
      i.NONE,
      i.GET_DATA,
      X.HIDE_MESSAGE,
      t.widget,
      t.id
    ), await fetch(
      [this.url, "api", o, "messages", t.id].join("/") + g,
      { ...l, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
  async hideLabels(t) {
    const { version: o } = this.options, l = this.formHeaders(), g = new URLSearchParams(), b = t.labels || [];
    for (const [I, G] of b.entries())
      g.append(`custom_filters[${I}]`, G);
    return console.info(
      "%capi%c %cput",
      i.API,
      i.NONE,
      i.GET_DATA,
      X.HIDE_LABELS,
      t.widget,
      b
    ), await fetch(
      [this.url, "api", o, t.type, t.widget].join("/"),
      { ...l, body: g, method: "put" }
    ).then((I) => {
      if (!I.ok)
        throw new Error(I.statusText);
      return I;
    }).then((I) => I.json()).catch((I) => ({ succes: !1, message: I, data: [] }));
  }
  async loadSlide(t) {
    const { version: o } = this.options, l = this.headers(), g = Object.assign({}, t);
    return delete g.type, delete g.hash, K(3, [
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
    ).then(async (b) => {
      if (!b.ok)
        throw new Error(`${b.status}`);
      return b;
    }).then((b) => b.json()).then((b) => {
      let I;
      return t.type = "slides", b.query = t, b?.data && (Array.isArray(b.data) ? (I = structuredClone(b.data), I.forEach((G) => {
        typeof G.json == "string" && (G.json = JSON.parse(G.json));
      })) : (I = structuredClone(b.data), I.json = JSON.parse(I.json)), b.data = I), b;
    }).catch((b) => ({ success: !1, message: `${b}`, data: null }));
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
    const g = JSON.stringify(t);
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
      { ...l, body: g, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
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
    ).then(async (g) => {
      if (!g.ok)
        throw new Error(`${g.status}`);
      return g;
    }).then((g) => g.json()).then((g) => {
      let b;
      return t.type = "presentations", g.query = t, g?.data && (b = structuredClone(g.data), g.data = b), g;
    }).catch((g) => ({ success: !1, message: `${g}`, data: null }));
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
    const g = JSON.stringify(t);
    return K(2, ["%capi%c %cput", i.API, i.NONE, i.PRESENTATION, t.name]), await fetch(
      [this.url, "api", o, _.PRESENTATIONS, t.id].join("/"),
      { ...l, body: g, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
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
    ).then(async (g) => {
      if (!g.ok)
        throw new Error(`${g.status}`);
      return g;
    }).then((g) => g.json()).then((g) => (t.type = "preference", g.query = t, g)).catch((g) => ({ success: !1, message: `${g}`, data: null }));
  }
  async storePreference(t) {
    const { version: o } = this.options, l = this.formHeaders();
    delete t.update;
    const g = JSON.stringify({ data: t });
    return console.info(
      "%capi%c %cstorePreference",
      i.API,
      i.NONE,
      i.APP,
      t.id
    ), await fetch(
      [this.url, "api", o, _.PREFERENCES, t.id].join("/"),
      { ...l, body: g, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
  async loadDashboards(t) {
    const { version: o } = this.options, l = this.headers();
    return K(3, ["%capi%c %cdashboards", i.API, i.NONE, i.WIDGET]), await fetch(
      [this.url, "api", o, _.WIDGETS, t?.id || ""].join("/"),
      {
        ...l,
        method: "get"
      }
    ).then(async (g) => {
      if (!g.ok)
        throw new Error(`${g.status}`);
      return g;
    }).then((g) => g.json()).then((g) => ({
      data: { dashboards: g },
      message: "Dashboard Widgets loaded from api",
      success: !0
    })).catch((g) => ({ success: !1, message: `${g}`, data: null }));
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
    ).then(async (g) => {
      if (!g.ok)
        throw new Error(`${g.status}`);
      return g;
    }).then((g) => g.json()).then((g) => ({
      data: { images: g.data },
      message: "Images loaded via api",
      success: !0
    })).catch((g) => ({ success: !1, message: `${g}`, data: null }));
  }
  async storeImage(t) {
    const { version: o } = this.options, l = this.fileHeaders(), g = t;
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
        body: g,
        method: "post"
      }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
  async deleteImage(t, o) {
    const { version: l } = this.options, g = this.formHeaders();
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
      { ...g, method: "delete" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
}
var Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $a(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var tr = { exports: {} }, ja = tr.exports, Cn;
function Ga() {
  return Cn || (Cn = 1, function(f, t) {
    (function(o, l) {
      f.exports = l();
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
      function g(e, r, n) {
        for (var a, s = 0, c = r.length; s < c; s++) !a && s in r || ((a = a || Array.prototype.slice.call(r, 0, s))[s] = r[s]);
        return e.concat(a || Array.prototype.slice.call(r));
      }
      var b = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, I = Object.keys, G = Array.isArray;
      function re(e, r) {
        return typeof r != "object" || I(r).forEach(function(n) {
          e[n] = r[n];
        }), e;
      }
      typeof Promise > "u" || b.Promise || (b.Promise = Promise);
      var se = Object.getPrototypeOf, Ot = {}.hasOwnProperty;
      function q(e, r) {
        return Ot.call(e, r);
      }
      function ge(e, r) {
        typeof r == "function" && (r = r(se(e))), (typeof Reflect > "u" ? I : Reflect.ownKeys)(r).forEach(function(n) {
          Ae(e, n, r[n]);
        });
      }
      var Hr = Object.defineProperty;
      function Ae(e, r, n, a) {
        Hr(e, r, re(n && q(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, a));
      }
      function Ve(e) {
        return { from: function(r) {
          return e.prototype = Object.create(r.prototype), Ae(e.prototype, "constructor", e), { extend: ge.bind(null, e.prototype) };
        } };
      }
      var Fn = Object.getOwnPropertyDescriptor, Un = [].slice;
      function _t(e, r, n) {
        return Un.call(e, r, n);
      }
      function Vr(e, r) {
        return r(e);
      }
      function st(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Yr(e) {
        b.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ve(e, r) {
        if (typeof r == "string" && q(e, r)) return e[r];
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
          d !== -1 ? (c = r.substr(0, d), (u = r.substr(d + 1)) === "" ? n === void 0 ? G(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = n : le(d = !(d = e[c]) || !q(e, c) ? e[c] = {} : d, u, n)) : n === void 0 ? G(e) && !isNaN(parseInt(r)) ? e.splice(r, 1) : delete e[r] : e[r] = n;
        }
      }
      function Qr(e) {
        var r, n = {};
        for (r in e) q(e, r) && (n[r] = e[r]);
        return n;
      }
      var zn = [].concat;
      function Xr(e) {
        return zn.apply([], e);
      }
      var Ge = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xr([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + e + "Array";
        });
      }))).filter(function(e) {
        return b[e];
      }), Jr = new Set(Ge.map(function(e) {
        return b[e];
      })), ot = null;
      function Ce(e) {
        return ot = /* @__PURE__ */ new WeakMap(), e = function r(n) {
          if (!n || typeof n != "object") return n;
          var a = ot.get(n);
          if (a) return a;
          if (G(n)) {
            a = [], ot.set(n, a);
            for (var s = 0, c = n.length; s < c; ++s) a.push(r(n[s]));
          } else if (Jr.has(n.constructor)) a = n;
          else {
            var u, d = se(n);
            for (u in a = d === Object.prototype ? {} : Object.create(d), ot.set(n, a), n) q(n, u) && (a[u] = r(n[u]));
          }
          return a;
        }(e), ot = null, e;
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
      function $e(e, r) {
        return r = e.indexOf(r), 0 <= r && e.splice(r, 1), 0 <= r;
      }
      var Ye = {};
      function Ee(e) {
        var r, n, a, s;
        if (arguments.length === 1) {
          if (G(e)) return e.slice();
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
      var ar = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ut = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], fe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ut), Yn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Qe(e, r) {
        this.name = e, this.message = r;
      }
      function Zr(e, r) {
        return e + ". Errors: " + Object.keys(r).map(function(n) {
          return r[n].toString();
        }).filter(function(n, a, s) {
          return s.indexOf(n) === a;
        }).join(`
`);
      }
      function At(e, r, n, a) {
        this.failures = r, this.failedKeys = a, this.successCount = n, this.message = Zr(e, r);
      }
      function Xe(e, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(n) {
          return r[n];
        }), this.failuresByPos = r, this.message = Zr(e, this.failures);
      }
      Ve(Qe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ve(At).from(Qe), Ve(Xe).from(Qe);
      var sr = fe.reduce(function(e, r) {
        return e[r] = r + "Error", e;
      }, {}), Qn = Qe, L = fe.reduce(function(e, r) {
        var n = r + "Error";
        function a(s, c) {
          this.name = n, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Yn[r] || n, this.inner = null);
        }
        return Ve(a).from(Qn), e[r] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var qr = ut.reduce(function(e, r) {
        return e[r + "Error"] = L[r], e;
      }, {}), Pt = fe.reduce(function(e, r) {
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
          re(n, a);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = r.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? je(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? je(c, this.onerror) : c), a === void 0 ? n === void 0 ? void 0 : n : re(a, n);
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
      function en(e) {
        me = e;
      }
      var ct = {}, tn = 100, Ge = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, se(e), e];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, se(r), e];
      }(), ut = Ge[0], fe = Ge[1], Ge = Ge[2], fe = fe && fe.then, Me = ut && ut.constructor, ir = !!Ge, lt = function(e, r) {
        dt.push([e, r]), Dt && (queueMicrotask(ra), Dt = !1);
      }, cr = !0, Dt = !0, Ke = [], Nt = [], ur = it, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Pe, dt = [], Be = 0, It = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = B;
        if (typeof e != "function") {
          if (e !== ct) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && dr(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function n(a, s) {
          try {
            s(function(c) {
              if (a._state === null) {
                if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Je();
                c && typeof c.then == "function" ? n(a, function(d, p) {
                  c instanceof j ? c._then(d, p) : c.then(d, p);
                }) : (a._state = !0, a._value = c, nn(a)), u && Ze();
              }
            }, dr.bind(null, a));
          } catch (c) {
            dr(a, c);
          }
        }(this, e);
      }
      var lr = { get: function() {
        var e = B, r = kt;
        function n(a, s) {
          var c = this, u = !e.global && (e !== B || r !== kt), d = u && !Ne(), p = new j(function(y, w) {
            hr(c, new rn(sn(a, e, u, d), sn(s, e, u, d), y, w, e));
          });
          return this._consoleTask && (p._consoleTask = this._consoleTask), p;
        }
        return n.prototype = ct, n;
      }, set: function(e) {
        Ae(this, "then", e && e.prototype === ct ? lr : { get: function() {
          return e;
        }, set: lr.set });
      } };
      function rn(e, r, n, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = n, this.reject = a, this.psd = s;
      }
      function dr(e, r) {
        var n, a;
        Nt.push(r), e._state === null && (n = e._lib && Je(), r = ur(r), e._state = !1, e._value = r, a = e, Ke.some(function(s) {
          return s._value === a._value;
        }) || Ke.push(a), nn(e), n && Ze());
      }
      function nn(e) {
        var r = e._listeners;
        e._listeners = [];
        for (var n = 0, a = r.length; n < a; ++n) hr(e, r[n]);
        var s = e._PSD;
        --s.ref || s.finalize(), Be === 0 && (++Be, lt(function() {
          --Be == 0 && fr();
        }, []));
      }
      function hr(e, r) {
        if (e._state !== null) {
          var n = e._state ? r.onFulfilled : r.onRejected;
          if (n === null) return (e._state ? r.resolve : r.reject)(e._value);
          ++r.psd.ref, ++Be, lt(ta, [n, e, r]);
        } else e._listeners.push(r);
      }
      function ta(e, r, n) {
        try {
          var a, s = r._value;
          !r._state && Nt.length && (Nt = []), a = me && r._consoleTask ? r._consoleTask.run(function() {
            return e(s);
          }) : e(s), r._state || Nt.indexOf(s) !== -1 || function(c) {
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
        var e = cr;
        return Dt = cr = !1, e;
      }
      function Ze() {
        var e, r, n;
        do
          for (; 0 < dt.length; ) for (e = dt, dt = [], n = e.length, r = 0; r < n; ++r) {
            var a = e[r];
            a[0].apply(null, a[1]);
          }
        while (0 < dt.length);
        Dt = cr = !0;
      }
      function fr() {
        var e = Ke;
        Ke = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var r = It.slice(0), n = r.length; n; ) r[--n]();
      }
      function Tt(e) {
        return new j(ct, !1, e);
      }
      function Z(e, r) {
        var n = B;
        return function() {
          var a = Je(), s = B;
          try {
            return Ie(n, !0), e.apply(this, arguments);
          } catch (c) {
            r && r(c);
          } finally {
            Ie(s, !1), a && Ze();
          }
        };
      }
      ge(j.prototype, { then: lr, _then: function(e, r) {
        hr(this, new rn(null, null, e, r, B));
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
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = an(), ge(j, { all: function() {
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
        return ur;
      }, set: function(e) {
        ur = e;
      } }, follow: function(e, r) {
        return new j(function(n, a) {
          return De(function(s, c) {
            var u = B;
            u.unhandleds = [], u.onunhandled = c, u.finalize = je(function() {
              var d, p = this;
              d = function() {
                p.unhandleds.length === 0 ? s() : c(p.unhandleds[0]);
              }, It.push(function y() {
                d(), It.splice(It.indexOf(y), 1);
              }), ++Be, lt(function() {
                --Be == 0 && fr();
              }, []);
            }, u.finalize), e();
          }, r, n, a);
        });
      } }), Me && (Me.allSettled && Ae(j, "allSettled", function() {
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
      }), Me.any && typeof AggregateError < "u" && Ae(j, "any", function() {
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
      }), Me.withResolvers && (j.withResolvers = Me.withResolvers));
      var ne = { awaits: 0, echoes: 0, id: 0 }, na = 0, Rt = [], xt = 0, kt = 0, aa = 0;
      function De(e, r, n, a) {
        var s = B, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++aa, Pe.env, c.env = ir ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, r && re(c, r), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = Le(c, e, n, a), c.ref === 0 && c.finalize(), a;
      }
      function qe() {
        return ne.id || (ne.id = ++na), ++ne.awaits, ne.echoes += tn, ne.id;
      }
      function Ne() {
        return !!ne.awaits && (--ne.awaits == 0 && (ne.id = 0), ne.echoes = ne.awaits * tn, !0);
      }
      function Ct(e) {
        return ne.echoes && e && e.constructor === Me ? (qe(), e.then(function(r) {
          return Ne(), r;
        }, function(r) {
          return Ne(), ee(r);
        })) : e;
      }
      function sa() {
        var e = Rt[Rt.length - 1];
        Rt.pop(), Ie(e, !1);
      }
      function Ie(e, r) {
        var n, a = B;
        (r ? !ne.echoes || xt++ && e === B : !xt || --xt && e === B) || queueMicrotask(r ? function(s) {
          ++kt, ne.echoes && --ne.echoes != 0 || (ne.echoes = ne.awaits = ne.id = 0), Rt.push(B), Ie(s, !0);
        }.bind(null, e) : sa), e !== B && (B = e, a === Pe && (Pe.env = an()), ir && (n = Pe.env.Promise, r = e.env, (a.global || e.global) && (Object.defineProperty(b, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any && (n.any = r.any))));
      }
      function an() {
        var e = b.Promise;
        return ir ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(b, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Le(e, r, n, a, s) {
        var c = B;
        try {
          return Ie(e, !0), r(n, a, s);
        } finally {
          Ie(c, !1);
        }
      }
      function sn(e, r, n, a) {
        return typeof e != "function" ? e : function() {
          var s = B;
          n && qe(), Ie(r, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ie(s, !1), a && queueMicrotask(Ne);
          }
        };
      }
      function gr(e) {
        Promise === Me && ne.echoes === 0 ? xt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + fe).indexOf("[native code]") === -1 && (qe = Ne = Q);
      var ee = j.reject, We = "￿", we = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", on = "String expected.", et = [], $t = "__dbnames", pr = "readonly", mr = "readwrite";
      function Fe(e, r) {
        return e ? r ? function() {
          return e.apply(this, arguments) && r.apply(this, arguments);
        } : e : r;
      }
      var cn = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function jt(e) {
        return typeof e != "string" || /\./.test(e) ? function(r) {
          return r;
        } : function(r) {
          return r[e] === void 0 && e in r && delete (r = Ce(r))[e], r;
        };
      }
      function un() {
        throw L.Type();
      }
      function H(e, r) {
        try {
          var n = ln(e), a = ln(r);
          if (n !== a) return n === "Array" ? 1 : a === "Array" ? -1 : n === "binary" ? 1 : a === "binary" ? -1 : n === "string" ? 1 : a === "string" ? -1 : n === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return r < e ? 1 : e < r ? -1 : 0;
            case "binary":
              return function(s, c) {
                for (var u = s.length, d = c.length, p = u < d ? u : d, y = 0; y < p; ++y) if (s[y] !== c[y]) return s[y] < c[y] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(dn(e), dn(r));
            case "Array":
              return function(s, c) {
                for (var u = s.length, d = c.length, p = u < d ? u : d, y = 0; y < p; ++y) {
                  var w = H(s[y], c[y]);
                  if (w !== 0) return w;
                }
                return u === d ? 0 : u < d ? -1 : 1;
              }(e, r);
          }
        } catch {
        }
        return NaN;
      }
      function ln(e) {
        var r = typeof e;
        return r != "object" ? r : ArrayBuffer.isView(e) ? "binary" : (e = rr(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function dn(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var hn = (J.prototype._trans = function(e, r, n) {
        var a = this._tx || B.trans, s = this.name, c = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(y, w, h) {
          if (!h.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return r(h.idbtrans, h);
        }
        var d = Je();
        try {
          var p = a && a.db._novip === this.db._novip ? a === B.trans ? a._promise(e, u, n) : De(function() {
            return a._promise(e, u, n);
          }, { trans: a, transless: B.transless || B }) : function y(w, h, O, m) {
            if (w.idbdb && (w._state.openComplete || B.letThrough || w._vip)) {
              var E = w._createTransaction(h, O, w._dbSchema);
              try {
                E.create(), w._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === sr.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return y(w, h, O, m);
                })) : ee(S);
              }
              return E._promise(h, function(S, v) {
                return De(function() {
                  return B.trans = E, m(S, v, E);
                });
              }).then(function(S) {
                if (h === "readwrite") try {
                  E.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? S : E._completion.then(function() {
                  return S;
                });
              });
            }
            if (w._state.openComplete) return ee(new L.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return ee(new L.DatabaseClosed());
              w.open().catch(Q);
            }
            return w._state.dbReadyPromise.then(function() {
              return y(w, h, O, m);
            });
          }(this.db, e, [this.name], u);
          return c && (p._consoleTask = c, p = p.catch(function(y) {
            return console.trace(y), ee(y);
          })), p;
        } finally {
          d && Ze();
        }
      }, J.prototype.get = function(e, r) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(r) : e == null ? ee(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return n.core.get({ trans: a, key: e }).then(function(s) {
            return n.hook.reading.fire(s);
          });
        }).then(r);
      }, J.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (G(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var r = I(e);
        if (r.length === 1) return this.where(r[0]).equals(e[r[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && r.every(function(y) {
            return 0 <= d.keyPath.indexOf(y);
          })) {
            for (var p = 0; p < r.length; ++p) if (r.indexOf(d.keyPath[p]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, p) {
          return d.keyPath.length - p.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== We) {
          var c = n.keyPath.slice(0, r.length);
          return this.where(c).equals(c.map(function(p) {
            return e[p];
          }));
        }
        !n && me && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, p) {
          return H(d, p) === 0;
        }
        var u = r.reduce(function(h, p) {
          var y = h[0], w = h[1], h = a[p], O = e[p];
          return [y || h, y || !h ? Fe(w, h && h.multi ? function(m) {
            return m = ve(m, p), G(m) && m.some(function(E) {
              return s(O, E);
            });
          } : function(m) {
            return s(O, ve(m, p));
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
        return new this.db.Collection(new this.db.WhereClause(this, G(e) ? "[".concat(e.join("+"), "]") : e));
      }, J.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, J.prototype.mapToClass = function(e) {
        var r, n = this.db, a = this.name;
        function s() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof un && (function(p, y) {
          if (typeof y != "function" && y !== null) throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
          function w() {
            this.constructor = p;
          }
          o(p, y), p.prototype = y === null ? Object.create(y) : (w.prototype = y.prototype, new w());
        }(s, r = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), u = e.prototype; u; u = se(u)) Object.getOwnPropertyNames(u).forEach(function(p) {
          return c.add(p);
        });
        function d(p) {
          if (!p) return p;
          var y, w = Object.create(e.prototype);
          for (y in p) if (!c.has(y)) try {
            w[y] = p[y];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, J.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          re(this, e);
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
        return typeof e != "object" || G(e) ? this.where(":id").equals(e).modify(r) : (e = ve(e, this.schema.primKey.keyPath), e === void 0 ? ee(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(r));
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
          return e.core.mutate({ trans: r, type: "deleteRange", range: cn });
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
          var y = a.schema.primKey, d = y.auto, y = y.keyPath;
          if (y && s) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, y = y && d ? e.map(jt(y)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: y, wantResults: c }).then(function(E) {
            var h = E.numFailures, O = E.results, m = E.lastResult, E = E.failures;
            if (h === 0) return c ? O : m;
            throw new Xe("".concat(a.name, ".bulkAdd(): ").concat(h, " of ").concat(p, " operations failed"), E);
          });
        });
      }, J.prototype.bulkPut = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, c = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var y = a.schema.primKey, d = y.auto, y = y.keyPath;
          if (y && s) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, y = y && d ? e.map(jt(y)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: y, wantResults: c }).then(function(E) {
            var h = E.numFailures, O = E.results, m = E.lastResult, E = E.failures;
            if (h === 0) return c ? O : m;
            throw new Xe("".concat(a.name, ".bulkPut(): ").concat(h, " of ").concat(p, " operations failed"), E);
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
            var p = [], y = [];
            e.forEach(function(h, O) {
              var m = h.key, E = h.changes, S = d[O];
              if (S) {
                for (var v = 0, A = Object.keys(E); v < A.length; v++) {
                  var P = A[v], D = E[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (H(D, m) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else le(S, P, D);
                }
                c.push(O), p.push(m), y.push(S);
              }
            });
            var w = p.length;
            return n.mutate({ trans: u, type: "put", keys: p, values: y, updates: { keys: a, changeSpecs: s } }).then(function(h) {
              var O = h.numFailures, m = h.failures;
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
      function ht(e) {
        function r(u, d) {
          if (d) {
            for (var p = arguments.length, y = new Array(p - 1); --p; ) y[p - 1] = arguments[p];
            return n[u].subscribe.apply(null, y), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
        r.addEventType = c;
        for (var a = 1, s = arguments.length; a < s; ++a) c(arguments[a]);
        return r;
        function c(u, d, p) {
          if (typeof u != "object") {
            var y;
            d = d || ea;
            var w = { subscribers: [], fire: p = p || Q, subscribe: function(h) {
              w.subscribers.indexOf(h) === -1 && (w.subscribers.push(h), w.fire = d(w.fire, h));
            }, unsubscribe: function(h) {
              w.subscribers = w.subscribers.filter(function(O) {
                return O !== h;
              }), w.fire = w.subscribers.reduce(d, p);
            } };
            return n[u] = r[u] = w;
          }
          I(y = u).forEach(function(h) {
            var O = y[h];
            if (G(O)) c(h, y[h][0], y[h][1]);
            else {
              if (O !== "asap") throw new L.InvalidArgument("Invalid event config");
              var m = c(h, it, function() {
                for (var E = arguments.length, S = new Array(E); E--; ) S[E] = arguments[E];
                m.subscribers.forEach(function(v) {
                  Yr(function() {
                    v.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function ft(e, r) {
        return Ve(r).from({ prototype: e }), r;
      }
      function tt(e, r) {
        return !(e.filter || e.algorithm || e.or) && (r ? e.justLimit : !e.replayFilter);
      }
      function yr(e, r) {
        e.filter = Fe(e.filter, r);
      }
      function br(e, r, n) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Fe(a(), r());
        } : r, e.justLimit = n && !a;
      }
      function Gt(e, r) {
        if (e.isPrimKey) return r.primaryKey;
        var n = r.getIndexByKeyPath(e.index);
        if (!n) throw new L.Schema("KeyPath " + e.index + " on object store " + r.name + " is not indexed");
        return n;
      }
      function fn(e, r, n) {
        var a = Gt(e, r.schema);
        return r.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Mt(e, r, n, a) {
        var s = e.replayFilter ? Fe(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, u = function(d, p, y) {
            var w, h;
            s && !s(p, y, function(O) {
              return p.stop(O);
            }, function(O) {
              return p.fail(O);
            }) || ((h = "" + (w = p.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(w)), q(c, h) || (c[h] = !0, r(d, p, y)));
          };
          return Promise.all([e.or._iterate(u, n), gn(fn(e, a, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return gn(fn(e, a, n), Fe(e.algorithm, s), r, !e.keysOnly && e.valueMapper);
      }
      function gn(e, r, n, a) {
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
      var gt = (pn.prototype.execute = function(e) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var n = r.add;
          if (G(n)) return g(g([], G(e) ? e : [], !0), n).sort();
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
      }, pn);
      function pn(e) {
        this["@@propmod"] = e;
      }
      var oa = (V.prototype._read = function(e, r) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ee.bind(null, n.error)) : n.table._trans("readonly", e).then(r);
      }, V.prototype._write = function(e) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, ee.bind(null, r.error)) : r.table._trans("readwrite", e, "locked");
      }, V.prototype._addAlgorithm = function(e) {
        var r = this._ctx;
        r.algorithm = Fe(r.algorithm, e);
      }, V.prototype._iterate = function(e, r) {
        return Mt(this._ctx, e, r, this._ctx.table.core);
      }, V.prototype.clone = function(e) {
        var r = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && re(n, e), r._ctx = n, r;
      }, V.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, V.prototype.each = function(e) {
        var r = this._ctx;
        return this._read(function(n) {
          return Mt(r, e, n, r.table.core);
        });
      }, V.prototype.count = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx, s = a.table.core;
          if (tt(a, !0)) return s.count({ trans: n, query: { index: Gt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var c = 0;
          return Mt(a, function() {
            return ++c, !1;
          }, n, s).then(function() {
            return c;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, r) {
        var n = e.split(".").reverse(), a = n[0], s = n.length - 1;
        function c(p, y) {
          return y ? c(p[n[y]], y - 1) : p[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(p, y) {
          return H(c(p, s), c(y, s)) * u;
        }
        return this.toArray(function(p) {
          return p.sort(d);
        }).then(r);
      }, V.prototype.toArray = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx;
          if (a.dir === "next" && tt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, c = Gt(a, a.table.core.schema);
            return a.table.core.query({ trans: n, limit: a.limit, values: !0, query: { index: c, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Mt(a, function(d) {
            return u.push(d);
          }, n, a.table.core).then(function() {
            return u;
          });
        }, e);
      }, V.prototype.offset = function(e) {
        var r = this._ctx;
        return e <= 0 || (r.offset += e, tt(r) ? br(r, function() {
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
          var s = Gt(r, r.table.core.schema);
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
          var a = s.primaryKey.toString(), s = q(r, a);
          return r[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var r = this, n = this._ctx;
        return this._write(function(a) {
          var s, c, u;
          u = typeof e == "function" ? e : (s = I(e), c = s.length, function(v) {
            for (var A = !1, P = 0; P < c; ++P) {
              var D = s[P], N = e[D], T = ve(v, D);
              N instanceof gt ? (le(v, D, N.execute(T)), A = !0) : T !== N && (le(v, D, N), A = !0);
            }
            return A;
          });
          var d = n.table.core, h = d.schema.primaryKey, p = h.outbound, y = h.extractKey, w = 200, h = r.db._options.modifyChunkSize;
          h && (w = typeof h == "object" ? h[d.name] || h["*"] || 200 : h);
          function O(v, D) {
            var P = D.failures, D = D.numFailures;
            E += v - D;
            for (var N = 0, T = I(P); N < T.length; N++) {
              var C = T[N];
              m.push(P[C]);
            }
          }
          var m = [], E = 0, S = [];
          return r.clone().primaryKeys().then(function(v) {
            function A(D) {
              var N = Math.min(w, v.length - D);
              return d.getMany({ trans: a, keys: v.slice(D, D + N), cache: "immutable" }).then(function(T) {
                for (var C = [], R = [], x = p ? [] : null, $ = [], k = 0; k < N; ++k) {
                  var M = T[k], F = { value: Ce(M), primKey: v[D + k] };
                  u.call(F, F.value, F) !== !1 && (F.value == null ? $.push(v[D + k]) : p || H(y(M), y(F.value)) === 0 ? (R.push(F.value), p && x.push(v[D + k])) : ($.push(v[D + k]), C.push(F.value)));
                }
                return Promise.resolve(0 < C.length && d.mutate({ trans: a, type: "add", values: C }).then(function(U) {
                  for (var z in U.failures) $.splice(parseInt(z), 1);
                  O(C.length, U);
                })).then(function() {
                  return (0 < R.length || P && typeof e == "object") && d.mutate({ trans: a, type: "put", keys: x, values: R, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O(R.length, U);
                  });
                }).then(function() {
                  return (0 < $.length || P && e === vr) && d.mutate({ trans: a, type: "delete", keys: $, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O($.length, U);
                  });
                }).then(function() {
                  return v.length > D + N && A(D + w);
                });
              });
            }
            var P = tt(n) && n.limit === 1 / 0 && (typeof e != "function" || e === vr) && { index: n.index, range: n.range };
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
              if (u.lastResult, u.results, u = u.numFailures, u) throw new At("Could not delete some values", Object.keys(d).map(function(p) {
                return d[p];
              }), c - u);
              return c - u;
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
      function de(e, r, n) {
        return e = e instanceof yn ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(r), e;
      }
      function rt(e) {
        return new e.Collection(e, function() {
          return mn("");
        }).limit(0);
      }
      function Kt(e, r, n, a) {
        var s, c, u, d, p, y, w, h = n.length;
        if (!n.every(function(E) {
          return typeof E == "string";
        })) return de(e, on);
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
          }), p = S.map(function(v) {
            return v.lower;
          }), w = (y = E) === "next" ? "" : a;
        }
        O("next"), e = new e.Collection(e, function() {
          return Te(d[0], p[h - 1] + a);
        }), e._ondirectionchange = function(E) {
          O(E);
        };
        var m = 0;
        return e._addAlgorithm(function(E, S, v) {
          var A = E.key;
          if (typeof A != "string") return !1;
          var P = c(A);
          if (r(P, p, m)) return !0;
          for (var D = null, N = m; N < h; ++N) {
            var T = function(C, R, x, $, k, M) {
              for (var F = Math.min(C.length, $.length), U = -1, z = 0; z < F; ++z) {
                var he = R[z];
                if (he !== $[z]) return k(C[z], x[z]) < 0 ? C.substr(0, z) + x[z] + x.substr(z + 1) : k(C[z], $[z]) < 0 ? C.substr(0, z) + $[z] + x.substr(z + 1) : 0 <= U ? C.substr(0, U) + R[U] + x.substr(U + 1) : null;
                k(C[z], he) < 0 && (U = z);
              }
              return F < $.length && M === "next" ? C + x.substr(C.length) : F < C.length && M === "prev" ? C.substr(0, x.length) : U < 0 ? null : C.substr(0, U) + $[U] + x.substr(U + 1);
            }(A, P, d[N], p[N], u, y);
            T === null && D === null ? m = N + 1 : (D === null || 0 < u(D, T)) && (D = T);
          }
          return S(D !== null ? function() {
            E.continue(D + w);
          } : v), !1;
        }), e;
      }
      function Te(e, r, n, a) {
        return { type: 2, lower: e, upper: r, lowerOpen: n, upperOpen: a };
      }
      function mn(e) {
        return { type: 1, lower: e, upper: e };
      }
      var yn = (Object.defineProperty(ae.prototype, "Collection", { get: function() {
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
          return mn(e);
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
        return typeof e != "string" ? de(this, on) : this.between(e, e + We, !0, !0);
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
          for (var p = c.key; 0 < n(p, r[s]); ) if (++s === r.length) return u(d), !1;
          return n(p, r[s]) === 0 || (u(function() {
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
        var p = !r || r.includeLowers !== !1, y = r && r.includeUppers === !0, w, h = s;
        function O(P, D) {
          return h(P[0], D[0]);
        }
        try {
          (w = A.reduce(function(P, D) {
            for (var N = 0, T = P.length; N < T; ++N) {
              var C = P[N];
              if (a(D[0], C[1]) < 0 && 0 < a(D[1], C[0])) {
                C[0] = u(C[0], D[0]), C[1] = d(C[1], D[1]);
                break;
              }
            }
            return N === T && P.push(D), P;
          }, [])).sort(O);
        } catch {
          return de(this, we);
        }
        var m = 0, E = y ? function(P) {
          return 0 < s(P, w[m][1]);
        } : function(P) {
          return 0 <= s(P, w[m][1]);
        }, S = p ? function(P) {
          return 0 < c(P, w[m][0]);
        } : function(P) {
          return 0 <= c(P, w[m][0]);
        }, v = E, A = new this.Collection(this, function() {
          return Te(w[0][0], w[w.length - 1][1], !p, !y);
        });
        return A._ondirectionchange = function(P) {
          h = P === "next" ? (v = E, s) : (v = S, c), w.sort(O);
        }, A._addAlgorithm(function(P, D, N) {
          for (var T, C = P.key; v(C); ) if (++m === w.length) return D(N), !1;
          return !E(T = C) && !S(T) || (n._cmp(C, w[m][1]) === 0 || n._cmp(C, w[m][0]) === 0 || D(function() {
            h === s ? P.continue(w[m][0]) : P.continue(w[m][1]);
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
      var mt = "storagemutated", Er = "x-storagemutated-1", Re = ht(null, mt), ua = (be.prototype._lock = function() {
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
        if (e === "readwrite" && this.mode !== "readwrite") return ee(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return ee(new L.TransactionInactive());
        if (this._locked()) return new j(function(c, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, r, n).then(c, u);
          }, B]);
        });
        if (n) return De(function() {
          var c = new j(function(u, d) {
            a._lock();
            var p = r(u, d, a);
            p && p.then && p.then(u, d);
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
        if (q(r, e)) return r[e];
        var n = this.schema[e];
        if (!n) throw new L.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), r[e] = n;
      }, be);
      function be() {
      }
      function wr(e, r, n, a, s, c, u) {
        return { name: e, keyPath: r, unique: n, multi: a, auto: s, compound: c, src: (n && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + bn(r) };
      }
      function bn(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Sr(e, r, n) {
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
      function vn(e) {
        return [].slice.call(e);
      }
      var la = 0;
      function bt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function da(e, r, p) {
        function a(v) {
          if (v.type === 3) return null;
          if (v.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = v.lower, E = v.upper, S = v.lowerOpen, v = v.upperOpen;
          return m === void 0 ? E === void 0 ? null : r.upperBound(E, !!v) : E === void 0 ? r.lowerBound(m, !!S) : r.bound(m, E, !!S, !!v);
        }
        function s(O) {
          var m, E = O.name;
          return { name: E, schema: O, mutate: function(S) {
            var v = S.trans, A = S.type, P = S.keys, D = S.values, N = S.range;
            return new Promise(function(T, C) {
              T = Z(T);
              var R = v.objectStore(E), x = R.keyPath == null, $ = A === "put" || A === "add";
              if (!$ && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var k, M = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (M === 0) return T({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function F(ue) {
                ++he, pt(ue);
              }
              var U = [], z = [], he = 0;
              if (A === "deleteRange") {
                if (N.type === 4) return T({ numFailures: he, failures: z, results: [], lastResult: void 0 });
                N.type === 3 ? U.push(k = R.clear()) : U.push(k = R.delete(a(N)));
              } else {
                var x = $ ? x ? [D, P] : [D, null] : [P, null], W = x[0], ie = x[1];
                if ($) for (var ce = 0; ce < M; ++ce) U.push(k = ie && ie[ce] !== void 0 ? R[A](W[ce], ie[ce]) : R[A](W[ce])), k.onerror = F;
                else for (ce = 0; ce < M; ++ce) U.push(k = R[A](W[ce])), k.onerror = F;
              }
              function Zt(ue) {
                ue = ue.target.result, U.forEach(function(He, Lr) {
                  return He.error != null && (z[Lr] = He.error);
                }), T({ numFailures: he, failures: z, results: A === "delete" ? P : U.map(function(He) {
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
              for (var N, T = v.objectStore(E), C = A.length, R = new Array(C), x = 0, $ = 0, k = function(U) {
                U = U.target, R[U._pos] = U.result, ++$ === x && P(R);
              }, M = ye(D), F = 0; F < C; ++F) A[F] != null && ((N = T.get(A[F]))._pos = F, N.onsuccess = k, N.onerror = M, ++x);
              x === 0 && P(R);
            });
          }, get: function(S) {
            var v = S.trans, A = S.key;
            return new Promise(function(P, D) {
              P = Z(P);
              var N = v.objectStore(E).get(A);
              N.onsuccess = function(T) {
                return P(T.target.result);
              }, N.onerror = ye(D);
            });
          }, query: (m = y, function(S) {
            return new Promise(function(v, A) {
              v = Z(v);
              var P, D, N, x = S.trans, T = S.values, C = S.limit, k = S.query, R = C === 1 / 0 ? void 0 : C, $ = k.index, k = k.range, x = x.objectStore(E), $ = $.isPrimaryKey ? x : x.index($.name), k = a(k);
              if (C === 0) return v({ result: [] });
              m ? ((R = T ? $.getAll(k, R) : $.getAllKeys(k, R)).onsuccess = function(M) {
                return v({ result: M.target.result });
              }, R.onerror = ye(A)) : (P = 0, D = !T && "openKeyCursor" in $ ? $.openKeyCursor(k) : $.openCursor(k), N = [], D.onsuccess = function(M) {
                var F = D.result;
                return F ? (N.push(T ? F.value : F.primaryKey), ++P === C ? v({ result: N }) : void F.continue()) : v({ result: N });
              }, D.onerror = ye(A));
            });
          }), openCursor: function(S) {
            var v = S.trans, A = S.values, P = S.query, D = S.reverse, N = S.unique;
            return new Promise(function(T, C) {
              T = Z(T);
              var $ = P.index, R = P.range, x = v.objectStore(E), x = $.isPrimaryKey ? x : x.index($.name), $ = D ? N ? "prevunique" : "prev" : N ? "nextunique" : "next", k = !A && "openKeyCursor" in x ? x.openKeyCursor(a(R), $) : x.openCursor(a(R), $);
              k.onerror = ye(C), k.onsuccess = Z(function(M) {
                var F, U, z, he, W = k.result;
                W ? (W.___id = ++la, W.done = !1, F = W.continue.bind(W), U = (U = W.continuePrimaryKey) && U.bind(W), z = W.advance.bind(W), he = function() {
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
                    ue = Z(ue), k.onerror = ye(He), W.fail = He, W.stop = function(Lr) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = he, ue(Lr);
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
            return new Promise(function(N, T) {
              var C = A.objectStore(E), R = P.isPrimaryKey ? C : C.index(P.name), C = a(D), R = C ? R.count(C) : R.count();
              R.onsuccess = Z(function(x) {
                return N(x.target.result);
              }), R.onerror = ye(T);
            });
          } };
        }
        var c, u, d, w = (u = p, d = vn((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(O) {
          return u.objectStore(O);
        }).map(function(O) {
          var m = O.keyPath, v = O.autoIncrement, E = G(m), S = {}, v = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: E, keyPath: m, autoIncrement: v, unique: !0, extractKey: Or(m) }, indexes: vn(O.indexNames).map(function(A) {
            return O.index(A);
          }).map(function(N) {
            var P = N.name, D = N.unique, T = N.multiEntry, N = N.keyPath, T = { name: P, compound: G(N), keyPath: N, unique: D, multiEntry: T, extractKey: Or(N) };
            return S[bt(N)] = T;
          }), getIndexByKeyPath: function(A) {
            return S[bt(A)];
          } };
          return S[":id"] = v.primaryKey, m != null && (S[bt(m)] = v.primaryKey), v;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), p = w.schema, y = w.hasGetAll, w = p.tables.map(s), h = {};
        return w.forEach(function(O) {
          return h[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!h[O]) throw new Error("Table '".concat(O, "' not found"));
          return h[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: yt(r), schema: p };
      }
      function ha(e, r, n, a) {
        var s = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (a = da(r, s, a), e.dbcore.reduce(function(c, u) {
          return u = u.create, l(l({}, c), u(c));
        }, a)) };
      }
      function Bt(e, a) {
        var n = a.db, a = ha(e._middlewares, n, e._deps, a);
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
            var d = function p(y, w) {
              return Fn(y, w) || (y = se(y)) && p(y, w);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(p) {
              Hr(this, s, { value: p, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, c));
          });
        });
      }
      function _r(e, r) {
        r.forEach(function(n) {
          for (var a in n) n[a] instanceof e.Table && delete n[a];
        });
      }
      function fa(e, r) {
        return e._cfg.version - r._cfg.version;
      }
      function ga(e, r, n, a) {
        var s = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Sr("$meta", wn("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(n), c._completion.catch(a);
        var u = c._reject.bind(c), d = B.transless || B;
        De(function() {
          return B.trans = c, B.transless = d, r !== 0 ? (Bt(e, n), y = r, ((p = c).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(w) {
            return w ?? y;
          }) : j.resolve(y)).then(function(w) {
            return O = w, m = c, E = n, S = [], w = (h = e)._versions, v = h._dbSchema = Ft(0, h.idbdb, E), (w = w.filter(function(A) {
              return A._cfg.version >= O;
            })).length !== 0 ? (w.forEach(function(A) {
              S.push(function() {
                var P = v, D = A._cfg.dbschema;
                Ut(h, P, E), Ut(h, D, E), v = h._dbSchema = D;
                var N = Ar(P, D);
                N.add.forEach(function($) {
                  Pr(E, $[0], $[1].primKey, $[1].indexes);
                }), N.change.forEach(function($) {
                  if ($.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var k = E.objectStore($.name);
                  $.add.forEach(function(M) {
                    return Wt(k, M);
                  }), $.change.forEach(function(M) {
                    k.deleteIndex(M.name), Wt(k, M);
                  }), $.del.forEach(function(M) {
                    return k.deleteIndex(M);
                  });
                });
                var T = A._cfg.contentUpgrade;
                if (T && A._cfg.version > O) {
                  Bt(h, E), m._memoizedTables = {};
                  var C = Qr(D);
                  N.del.forEach(function($) {
                    C[$] = P[$];
                  }), _r(h, [h.Transaction.prototype]), Lt(h, [h.Transaction.prototype], I(C), C), m.schema = C;
                  var R, x = ar(T);
                  return x && qe(), N = j.follow(function() {
                    var $;
                    (R = T(m)) && x && ($ = Ne.bind(null, null), R.then($, $));
                  }), R && typeof R.then == "function" ? j.resolve(R) : N.then(function() {
                    return R;
                  });
                }
              }), S.push(function(P) {
                var D, N, T = A._cfg.dbschema;
                D = T, N = P, [].slice.call(N.db.objectStoreNames).forEach(function(C) {
                  return D[C] == null && N.db.deleteObjectStore(C);
                }), _r(h, [h.Transaction.prototype]), Lt(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), m.schema = h._dbSchema;
              }), S.push(function(P) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === A._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return S.length ? j.resolve(S.shift()(m.idbtrans)).then(A) : j.resolve();
            }().then(function() {
              En(v, E);
            })) : j.resolve();
            var h, O, m, E, S, v;
          }).catch(u)) : (I(s).forEach(function(w) {
            Pr(n, w, s[w].primKey, s[w].indexes);
          }), Bt(e, n), void j.follow(function() {
            return e.on.populate.fire(c);
          }).catch(u));
          var p, y;
        });
      }
      function pa(e, r) {
        En(e._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var n = Ft(0, e.idbdb, r);
        Ut(e, e._dbSchema, r);
        for (var a = 0, s = Ar(n, e._dbSchema).change; a < s.length; a++) {
          var c = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = r.objectStore(u.name);
            u.add.forEach(function(p) {
              me && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(p.src)), Wt(d, p);
            });
          }(s[a]);
          if (typeof c == "object") return c.value;
        }
      }
      function Ar(e, r) {
        var n, a = { del: [], add: [], change: [] };
        for (n in e) r[n] || a.del.push(n);
        for (n in r) {
          var s = e[n], c = r[n];
          if (s) {
            var u = { name: n, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) u.recreate = !0, a.change.push(u);
            else {
              var d = s.idxByName, p = c.idxByName, y = void 0;
              for (y in d) p[y] || u.del.push(y);
              for (y in p) {
                var w = d[y], h = p[y];
                w ? w.src !== h.src && u.change.push(h) : u.add.push(h);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && a.change.push(u);
            }
          } else a.add.push([n, c]);
        }
        return a;
      }
      function Pr(e, r, n, a) {
        var s = e.db.createObjectStore(r, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return a.forEach(function(c) {
          return Wt(s, c);
        }), s;
      }
      function En(e, r) {
        I(e).forEach(function(n) {
          r.db.objectStoreNames.contains(n) || (me && console.debug("Dexie: Creating missing table", n), Pr(r, n, e[n].primKey, e[n].indexes));
        });
      }
      function Wt(e, r) {
        e.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Ft(e, r, n) {
        var a = {};
        return _t(r.objectStoreNames, 0).forEach(function(s) {
          for (var c = n.objectStore(s), u = wr(bn(y = c.keyPath), y || "", !0, !1, !!c.autoIncrement, y && typeof y != "string", !0), d = [], p = 0; p < c.indexNames.length; ++p) {
            var w = c.index(c.indexNames[p]), y = w.keyPath, w = wr(w.name, y, !!w.unique, !!w.multiEntry, !1, y && typeof y != "string", !1);
            d.push(w);
          }
          a[s] = Sr(s, u, d);
        }), a;
      }
      function Ut(e, r, n) {
        for (var a = n.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var c = a[s], u = n.objectStore(c);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var p = u.indexNames[d], y = u.index(p).keyPath, w = typeof y == "string" ? y : "[" + _t(y).join("+") + "]";
            !r[c] || (y = r[c].idxByName[w]) && (y.name = p, delete r[c].idxByName[w], r[c].idxByName[p] = y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && b.WorkerGlobalScope && b instanceof b.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function wn(e) {
        return e.split(",").map(function(r, n) {
          var a = (r = r.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return wr(a, s || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), G(s), n === 0);
        });
      }
      var ma = (zt.prototype._parseStoresSpec = function(e, r) {
        I(e).forEach(function(n) {
          if (e[n] !== null) {
            var a = wn(e[n]), s = a.shift();
            if (s.unique = !0, s.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(c) {
              if (c.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!c.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), r[n] = Sr(n, s, a);
          }
        });
      }, zt.prototype.stores = function(n) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? re(this._cfg.storesSource, n) : n;
        var n = r._versions, a = {}, s = {};
        return n.forEach(function(c) {
          re(a, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(a, s);
        }), r._dbSchema = s, _r(r, [r._allTables, r, r.Transaction.prototype]), Lt(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], I(s), s), r._storeNames = I(s), this;
      }, zt.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = or(this._cfg.contentUpgrade || Q, e), this;
      }, zt);
      function zt() {
      }
      function Dr(e, r) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Se($t, { addons: [], indexedDB: e, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Nr(e) {
        return e && typeof e.databases == "function";
      }
      function Ir(e) {
        return De(function() {
          return B.letThrough = !0, e();
        });
      }
      function Tr(e) {
        return !("from" in e);
      }
      var oe = function(e, r) {
        if (!this) {
          var n = new oe();
          return e && "d" in e && re(n, e), n;
        }
        re(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? r : e } : { d: 0 });
      };
      function vt(e, r, n) {
        var a = H(r, n);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Tr(e)) return re(e, { from: r, to: n, d: 1 });
          var s = e.l, a = e.r;
          if (H(n, e.from) < 0) return s ? vt(s, r, n) : e.l = { from: r, to: n, d: 1, l: null, r: null }, On(e);
          if (0 < H(r, e.to)) return a ? vt(a, r, n) : e.r = { from: r, to: n, d: 1, l: null, r: null }, On(e);
          H(r, e.from) < 0 && (e.from = r, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, s && !e.l && Et(e, s), a && n && Et(e, a);
        }
      }
      function Et(e, r) {
        Tr(r) || function n(a, p) {
          var c = p.from, u = p.to, d = p.l, p = p.r;
          vt(a, c, u), d && n(a, d), p && n(a, p);
        }(e, r);
      }
      function Sn(e, r) {
        var n = Ht(r), a = n.next();
        if (a.done) return !1;
        for (var s = a.value, c = Ht(e), u = c.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (H(d.from, s.to) <= 0 && 0 <= H(d.to, s.from)) return !0;
          H(s.from, d.from) < 0 ? s = (a = n.next(d.from)).value : d = (u = c.next(s.from)).value;
        }
        return !1;
      }
      function Ht(e) {
        var r = Tr(e) ? null : { s: 0, n: e };
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
      function On(e) {
        var r, n, a = (((r = e.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (r = s == "r" ? "l" : "r", n = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], n[s] = a[r], (e[r] = n).d = _n(n)), e.d = _n(e);
      }
      function _n(n) {
        var r = n.r, n = n.l;
        return (r ? n ? Math.max(r.d, n.d) : r.d : n ? n.d : 0) + 1;
      }
      function Vt(e, r) {
        return I(r).forEach(function(n) {
          e[n] ? Et(e[n], r[n]) : e[n] = function a(s) {
            var c, u, d = {};
            for (c in s) q(s, c) && (u = s[c], d[c] = !u || typeof u != "object" || Jr.has(u.constructor) ? u : a(u));
            return d;
          }(r[n]);
        }), e;
      }
      function Rr(e, r) {
        return e.all || r.all || Object.keys(e).some(function(n) {
          return r[n] && Sn(r[n], e[n]);
        });
      }
      ge(oe.prototype, ((fe = { add: function(e) {
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
      } })[nr] = function() {
        return Ht(this);
      }, fe));
      var Ue = {}, xr = {}, kr = !1;
      function Yt(e) {
        Vt(xr, e), kr || (kr = !0, setTimeout(function() {
          kr = !1, Cr(xr, !(xr = {}));
        }, 0));
      }
      function Cr(e, r) {
        r === void 0 && (r = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(Ue); a < s.length; a++) An(u = s[a], e, n, r);
        else for (var c in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (u = Ue["idb://".concat(c, "/").concat(d)]) && An(u, e, n, r));
        }
        n.forEach(function(p) {
          return p();
        });
      }
      function An(e, r, n, a) {
        for (var s = [], c = 0, u = Object.entries(e.queries.query); c < u.length; c++) {
          for (var d = u[c], p = d[0], y = [], w = 0, h = d[1]; w < h.length; w++) {
            var O = h[w];
            Rr(r, O.obsSet) ? O.subscribers.forEach(function(v) {
              return n.add(v);
            }) : a && y.push(O);
          }
          a && s.push([p, y]);
        }
        if (a) for (var m = 0, E = s; m < E.length; m++) {
          var S = E[m], p = S[0], y = S[1];
          e.queries.query[p] = y;
        }
      }
      function ya(e) {
        var r = e._state, n = e._deps.indexedDB;
        if (r.isBeingOpened || e.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? ee(r.dbOpenError) : e;
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
              })) : (w.onerror = ye(m), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, h = v < 1, e.idbdb = S.result, c && pa(e, w), ga(e, v / 10, w, m));
            }, m), S.onsuccess = Z(function() {
              w = null;
              var v, A, P, D, N, T = e.idbdb = S.result, C = _t(T.objectStoreNames);
              if (0 < C.length) try {
                var R = T.transaction((D = C).length === 1 ? D[0] : D, "readonly");
                if (r.autoSchema) A = T, P = R, (v = e).verno = A.version / 10, P = v._dbSchema = Ft(0, A, P), v._storeNames = _t(A.objectStoreNames, 0), Lt(v, [v._allTables], I(P), P);
                else if (Ut(e, e._dbSchema, R), ((N = Ar(Ft(0, (N = e).idbdb, R), N._dbSchema)).add.length || N.change.some(function(x) {
                  return x.add.length || x.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), T.close(), s = T.version + 1, c = !0, O(d());
                Bt(e, R);
              } catch {
              }
              et.push(e), T.onversionchange = Z(function(x) {
                r.vcFired = !0, e.on("versionchange").fire(x);
              }), T.onclose = Z(function(x) {
                e.on("close").fire(x);
              }), h && (N = e._deps, R = E, T = N.indexedDB, N = N.IDBKeyRange, Nr(T) || R === $t || Dr(T, N).put({ name: R }).catch(Q)), O();
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
        var p, y = r.dbReadyResolve, w = null, h = !1;
        return j.race([a, (typeof navigator > "u" ? j.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function m() {
            return indexedDB.databases().finally(O);
          }
          p = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), r.onReadyBeingFired = [], j.resolve(Ir(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < r.onReadyBeingFired.length) {
              var m = r.onReadyBeingFired.reduce(or, Q);
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
          return a === r.openCanceller && e._close(), ee(O);
        }).finally(function() {
          r.openComplete = !0, y();
        }).then(function() {
          var O;
          return h && (O = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(E) {
              E.name && (O["idb://".concat(e.name, "/").concat(m.name, "/").concat(E.name)] = new oe(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(m.name, "/")] = O["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new oe(-1 / 0, [[[]]]);
          }), Re(mt).fire(O), Cr(O, !0)), e;
        });
      }
      function $r(e) {
        function r(c) {
          return e.next(c);
        }
        var n = s(r), a = s(function(c) {
          return e.throw(c);
        });
        function s(c) {
          return function(p) {
            var d = c(p), p = d.value;
            return d.done ? p : p && typeof p.then == "function" ? p.then(n, a) : G(p) ? Promise.all(p).then(n, a) : n(p);
          };
        }
        return s(r)();
      }
      function Qt(e, r, n) {
        for (var a = G(e) ? e.slice() : [e], s = 0; s < n; ++s) a.push(r);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema, s = {}, c = [];
          function u(h, O, m) {
            var E = bt(h), S = s[E] = s[E] || [], v = h == null ? 0 : typeof h == "string" ? 1 : h.length, A = 0 < O, A = l(l({}, m), { name: A ? "".concat(E, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: A, keyTail: O, keyLength: v, extractKey: Or(h), unique: !A && m.unique });
            return S.push(A), A.isPrimaryKey || c.push(A), 1 < v && u(v === 2 ? h[0] : h.slice(0, v - 1), O + 1, m), S.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), A;
          }
          r = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [r];
          for (var d = 0, p = a.indexes; d < p.length; d++) {
            var y = p[d];
            u(y.keyPath, 0, y);
          }
          function w(h) {
            var O, m = h.query.index;
            return m.isVirtual ? l(l({}, h), { query: { index: m.lowLevelIndex, range: (O = h.query.range, m = m.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Qt(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Qt(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : h;
          }
          return l(l({}, n), { schema: l(l({}, a), { primaryKey: r, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[bt(h)]) && h[0];
          } }), count: function(h) {
            return n.count(w(h));
          }, query: function(h) {
            return n.query(w(h));
          }, openCursor: function(h) {
            var O = h.query.index, m = O.keyTail, E = O.isVirtual, S = O.keyLength;
            return E ? n.openCursor(w(h)).then(function(A) {
              return A && v(A);
            }) : n.openCursor(h);
            function v(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Qt(P, h.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : h.unique ? A.continue(A.key.slice(0, S).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : A.continue();
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
      function jr(e, r, n, a) {
        return n = n || {}, a = a || "", I(e).forEach(function(s) {
          var c, u, d;
          q(r, s) ? (c = e[s], u = r[s], typeof c == "object" && typeof u == "object" && c && u ? (d = rr(c)) !== rr(u) ? n[a + s] = r[s] : d === "Object" ? jr(c, u, n, a + s + ".") : c !== u && (n[a + s] = r[s]) : c !== u && (n[a + s] = r[s])) : n[a + s] = void 0;
        }), I(r).forEach(function(s) {
          q(e, s) || (n[a + s] = r[s]);
        }), n;
      }
      function Gr(e, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema.primaryKey;
          return l(l({}, n), { mutate: function(s) {
            var c = B.trans, u = c.table(r).hook, d = u.deleting, p = u.creating, y = u.updating;
            switch (s.type) {
              case "add":
                if (p.fire === Q) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (p.fire === Q && y.fire === Q) break;
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
                  return function h(O, m, E) {
                    return n.query({ trans: O, values: !1, query: { index: a, range: m }, limit: E }).then(function(S) {
                      var v = S.result;
                      return w({ type: "delete", keys: v, trans: O }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : v.length < E ? { failures: [], numFailures: 0, lastResult: void 0 } : h(O, l(l({}, m), { lower: v[v.length - 1], lowerOpen: !0 }), E);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return n.mutate(s);
            function w(h) {
              var O, m, E, S = B.trans, v = h.keys || Gr(a, h);
              if (!v) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? l(l({}, h), { keys: v }) : l({}, h)).type !== "delete" && (h.values = g([], h.values)), h.keys && (h.keys = g([], h.keys)), O = n, E = v, ((m = h).type === "add" ? Promise.resolve([]) : O.getMany({ trans: m.trans, keys: E, cache: "immutable" })).then(function(A) {
                var P = v.map(function(D, N) {
                  var T, C, R, x = A[N], $ = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? d.fire.call($, D, x, S) : h.type === "add" || x === void 0 ? (T = p.fire.call($, D, h.values[N], S), D == null && T != null && (h.keys[N] = D = T, a.outbound || le(h.values[N], a.keyPath, D))) : (T = jr(x, h.values[N]), (C = y.fire.call($, T, D, x, S)) && (R = h.values[N], Object.keys(C).forEach(function(k) {
                    q(R, k) ? R[k] = C[k] : le(R, k, C[k]);
                  }))), $;
                });
                return n.mutate(h).then(function(D) {
                  for (var N = D.failures, T = D.results, C = D.numFailures, D = D.lastResult, R = 0; R < v.length; ++R) {
                    var x = (T || v)[R], $ = P[R];
                    x == null ? $.onerror && $.onerror(N[R]) : $.onsuccess && $.onsuccess(h.type === "put" && A[R] ? h.values[R] : x);
                  }
                  return { failures: N, results: T, numFailures: C, lastResult: D };
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
      function Pn(e, r, n) {
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
            var s = Pn(a.keys, a.trans._cache, a.cache === "clone");
            return s ? j.resolve(s) : n.getMany(a).then(function(c) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Ce(c) : c }, c;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), n.mutate(a);
          } });
        } };
      } };
      function Dn(e, r) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function Nn(e, r) {
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
          var s = e.table(a), c = s.schema, u = c.primaryKey, h = c.indexes, d = u.extractKey, p = u.outbound, y = u.autoIncrement && h.filter(function(m) {
            return m.compound && m.keyPath.includes(u.keyPath);
          }), w = l(l({}, s), { mutate: function(m) {
            function E(k) {
              return k = "idb://".concat(r, "/").concat(a, "/").concat(k), D[k] || (D[k] = new oe());
            }
            var S, v, A, P = m.trans, D = m.mutatedParts || (m.mutatedParts = {}), N = E(""), T = E(":dels"), C = m.type, $ = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Gr(u, m).filter(function(k) {
              return k;
            }), m.values] : [], R = $[0], x = $[1], $ = m.trans._cache;
            return G(R) ? (N.addKeys(R), ($ = C === "delete" || R.length === x.length ? Pn(R, $) : null) || T.addKeys(R), ($ || x) && (S = E, v = $, A = x, c.indexes.forEach(function(k) {
              var M = S(k.name || "");
              function F(z) {
                return z != null ? k.extractKey(z) : null;
              }
              function U(z) {
                return k.multiEntry && G(z) ? z.forEach(function(he) {
                  return M.addKey(he);
                }) : M.addKey(z);
              }
              (v || A).forEach(function(z, ie) {
                var W = v && F(v[ie]), ie = A && F(A[ie]);
                H(W, ie) !== 0 && (W != null && U(W), ie != null && U(ie));
              });
            }))) : R ? (x = { from: (x = R.lower) !== null && x !== void 0 ? x : e.MIN_KEY, to: (x = R.upper) !== null && x !== void 0 ? x : e.MAX_KEY }, T.add(x), N.add(x)) : (N.add(n), T.add(n), c.indexes.forEach(function(k) {
              return E(k.name).add(n);
            })), s.mutate(m).then(function(k) {
              return !R || m.type !== "add" && m.type !== "put" || (N.addKeys(k.results), y && y.forEach(function(M) {
                for (var F = m.values.map(function(W) {
                  return M.extractKey(W);
                }), U = M.keyPath.findIndex(function(W) {
                  return W === u.keyPath;
                }), z = 0, he = k.results.length; z < he; ++z) F[z][U] = k.results[z];
                E(M.name).addKeys(F);
              })), P.mutatedParts = Vt(P.mutatedParts || {}, D), k;
            });
          } }), h = function(E) {
            var S = E.query, E = S.index, S = S.range;
            return [E, new oe((E = S.lower) !== null && E !== void 0 ? E : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, O = { get: function(m) {
            return [u, new oe(m.key)];
          }, getMany: function(m) {
            return [u, new oe().addKeys(m.keys)];
          }, count: h, query: h, openCursor: h };
          return I(O).forEach(function(m) {
            w[m] = function(E) {
              var S = B.subscr, v = !!S, A = Dn(B, s) && Nn(m, E) ? E.obsSet = {} : S;
              if (v) {
                var P = function(x) {
                  return x = "idb://".concat(r, "/").concat(a, "/").concat(x), A[x] || (A[x] = new oe());
                }, D = P(""), N = P(":dels"), S = O[m](E), v = S[0], S = S[1];
                if ((m === "query" && v.isPrimaryKey && !E.values ? N : P(v.name || "")).add(S), !v.isPrimaryKey) {
                  if (m !== "count") {
                    var T = m === "query" && p && E.values && s.query(l(l({}, E), { values: !1 }));
                    return s[m].apply(this, arguments).then(function(x) {
                      if (m === "query") {
                        if (p && E.values) return T.then(function(F) {
                          return F = F.result, D.addKeys(F), x;
                        });
                        var $ = E.values ? x.result.map(d) : x.result;
                        (E.values ? D : N).addKeys($);
                      } else if (m === "openCursor") {
                        var k = x, M = E.values;
                        return k && Object.create(k, { key: { get: function() {
                          return N.addKey(k.primaryKey), k.key;
                        } }, primaryKey: { get: function() {
                          var F = k.primaryKey;
                          return N.addKey(F), F;
                        } }, value: { get: function() {
                          return M && D.addKey(k.primaryKey), k.value;
                        } } });
                      }
                      return x;
                    });
                  }
                  N.add(n);
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
        return n.numFailures === a ? null : (r = l({}, r), G(r.keys) && (r.keys = r.keys.filter(function(s, c) {
          return !(c in n.failures);
        })), "values" in r && G(r.values) && (r.values = r.values.filter(function(s, c) {
          return !(c in n.failures);
        })), r);
      }
      function Mr(e, r) {
        return n = e, ((a = r).lower === void 0 || (a.lowerOpen ? 0 < H(n, a.lower) : 0 <= H(n, a.lower))) && (e = e, (r = r).upper === void 0 || (r.upperOpen ? H(e, r.upper) < 0 : H(e, r.upper) <= 0));
        var n, a;
      }
      function Tn(e, r, O, a, s, c) {
        if (!O || O.length === 0) return e;
        var u = r.query.index, d = u.multiEntry, p = r.query.range, y = a.schema.primaryKey.extractKey, w = u.extractKey, h = (u.lowLevelIndex || u).extractKey, O = O.reduce(function(m, E) {
          var S = m, v = [];
          if (E.type === "add" || E.type === "put") for (var A = new oe(), P = E.values.length - 1; 0 <= P; --P) {
            var D, N = E.values[P], T = y(N);
            A.hasKey(T) || (D = w(N), (d && G(D) ? D.some(function(k) {
              return Mr(k, p);
            }) : Mr(D, p)) && (A.addKey(T), v.push(N)));
          }
          switch (E.type) {
            case "add":
              var C = new oe().addKeys(r.values ? m.map(function(M) {
                return y(M);
              }) : m), S = m.concat(r.values ? v.filter(function(M) {
                return M = y(M), !C.hasKey(M) && (C.addKey(M), !0);
              }) : v.map(function(M) {
                return y(M);
              }).filter(function(M) {
                return !C.hasKey(M) && (C.addKey(M), !0);
              }));
              break;
            case "put":
              var R = new oe().addKeys(E.values.map(function(M) {
                return y(M);
              }));
              S = m.filter(function(M) {
                return !R.hasKey(r.values ? y(M) : M);
              }).concat(r.values ? v : v.map(function(M) {
                return y(M);
              }));
              break;
            case "delete":
              var x = new oe().addKeys(E.keys);
              S = m.filter(function(M) {
                return !x.hasKey(r.values ? y(M) : M);
              });
              break;
            case "deleteRange":
              var $ = E.range;
              S = m.filter(function(M) {
                return !Mr(y(M), $);
              });
          }
          return S;
        }, e);
        return O === e ? e : (O.sort(function(m, E) {
          return H(h(m), h(E)) || H(y(m), y(E));
        }), r.limit && r.limit < 1 / 0 && (O.length > r.limit ? O.length = r.limit : e.length === r.limit && O.length < r.limit && (s.dirty = !0)), c ? Object.freeze(O) : O);
      }
      function Rn(e, r) {
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
          return a === "readwrite" && (u = (c = new AbortController()).signal, s = function(p) {
            return function() {
              if (c.abort(), a === "readwrite") {
                for (var y = /* @__PURE__ */ new Set(), w = 0, h = n; w < h.length; w++) {
                  var O = h[w], m = Ue["idb://".concat(r, "/").concat(O)];
                  if (m) {
                    var E = e.table(O), S = m.optimisticOps.filter(function(M) {
                      return M.trans === d;
                    });
                    if (d._explicit && p && d.mutatedParts) for (var v = 0, A = Object.values(m.queries.query); v < A.length; v++) for (var P = 0, D = (C = A[v]).slice(); P < D.length; P++) Rr((R = D[P]).obsSet, d.mutatedParts) && ($e(C, R), R.subscribers.forEach(function(M) {
                      return y.add(M);
                    }));
                    else if (0 < S.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(M) {
                        return M.trans !== d;
                      });
                      for (var N = 0, T = Object.values(m.queries.query); N < T.length; N++) for (var C, R, x, $ = 0, k = (C = T[N]).slice(); $ < k.length; $++) (R = k[$]).res != null && d.mutatedParts && (p && !R.dirty ? (x = Object.isFrozen(R.res), x = Tn(R.res, R.req, S, E, R, x), R.dirty ? ($e(C, R), R.subscribers.forEach(function(M) {
                        return y.add(M);
                      })) : x !== R.res && (R.res = x, R.promise = j.resolve({ result: x }))) : (R.dirty && $e(C, R), R.subscribers.forEach(function(M) {
                        return y.add(M);
                      })));
                    }
                  }
                }
                y.forEach(function(M) {
                  return M();
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
            return d ? (u = a.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Gr(s, c).some(function(p) {
              return p == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && Yt(c.mutatedParts), u.then(function(p) {
              0 < p.numFailures && ($e(d.optimisticOps, c), (p = In(0, c, p)) && d.optimisticOps.push(p), c.mutatedParts && Yt(c.mutatedParts));
            }), u.catch(function() {
              $e(d.optimisticOps, c), c.mutatedParts && Yt(c.mutatedParts);
            })) : u.then(function(p) {
              var y = In(0, l(l({}, c), { values: c.values.map(function(w, h) {
                var O;
                return p.failures[h] ? w : (w = (O = s.keyPath) !== null && O !== void 0 && O.includes(".") ? Ce(w) : l({}, w), le(w, s.keyPath, p.results[h]), w);
              }) }), p);
              d.optimisticOps.push(y), queueMicrotask(function() {
                return c.mutatedParts && Yt(c.mutatedParts);
              });
            }), u) : a.mutate(c);
          }, query: function(c) {
            if (!Dn(B, a) || !Nn("query", c)) return a.query(c);
            var u = ((y = B.trans) === null || y === void 0 ? void 0 : y.db._options.cache) === "immutable", h = B, d = h.requery, p = h.signal, y = function(E, S, v, A) {
              var P = Ue["idb://".concat(E, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[v])) return [null, !1, P, null];
              var D = S[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (v) {
                case "query":
                  var N = D.find(function(T) {
                    return T.req.limit === A.limit && T.req.values === A.values && Rn(T.req.query.range, A.query.range);
                  });
                  return N ? [N, !0, P, D] : [D.find(function(T) {
                    return ("limit" in T.req ? T.req.limit : 1 / 0) >= A.limit && (!A.values || T.req.values) && Sa(T.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return N = D.find(function(T) {
                    return Rn(T.req.query.range, A.query.range);
                  }), [N, !!N, P, D];
              }
            }(r, n, "query", c), w = y[0], h = y[1], O = y[2], m = y[3];
            return w && h ? w.obsSet = c.obsSet : (h = a.query(c).then(function(E) {
              var S = E.result;
              if (w && (w.res = S), u) {
                for (var v = 0, A = S.length; v < A; ++v) Object.freeze(S[v]);
                Object.freeze(S);
              } else E.result = Ce(S);
              return E;
            }).catch(function(E) {
              return m && w && $e(m, w), Promise.reject(E);
            }), w = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, m ? m.push(w) : (m = [w], (O = O || (Ue["idb://".concat(r, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = m)), Oa(w, m, d, p), w.promise.then(function(E) {
              return { result: Tn(E.result, c, O?.optimisticOps, a, w, u) };
            });
          } });
        } });
      } };
      function Xt(e, r) {
        return new Proxy(e, { get: function(n, a, s) {
          return a === "db" ? r : Reflect.get(n, a, s);
        } });
      }
      var Se = (te.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new L.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var r = this._versions, n = r.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), r.push(n), r.sort(fa), n.stores({}), this._state.autoSchema = !1, n);
      }, te.prototype._whenReady = function(e) {
        var r = this;
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new j(function(n, a) {
          if (r._state.openComplete) return a(new L.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void a(new L.DatabaseClosed());
            r.open().catch(Q);
          }
          r._state.dbReadyPromise.then(n, a);
        }).then(e);
      }, te.prototype.use = function(e) {
        var r = e.stack, n = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: r, name: s }), e = this._middlewares[r] || (this._middlewares[r] = []), e.push({ stack: r, create: n, level: a ?? 10, name: s }), e.sort(function(c, u) {
          return c.level - u.level;
        }), this;
      }, te.prototype.unuse = function(e) {
        var r = e.stack, n = e.name, a = e.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(s) {
          return a ? s.create !== a : !!n && s.name !== n;
        })), this;
      }, te.prototype.open = function() {
        var e = this;
        return Le(Pe, function() {
          return ya(e);
        });
      }, te.prototype._close = function() {
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
      }, te.prototype.close = function(n) {
        var r = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        r ? (n.isBeingOpened && n.cancelOpen(new L.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new L.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, te.prototype.delete = function(e) {
        var r = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new j(function(s, c) {
          function u() {
            r.close(e);
            var d = r._deps.indexedDB.deleteDatabase(r.name);
            d.onsuccess = Z(function() {
              var p, y, w;
              p = r._deps, y = r.name, w = p.indexedDB, p = p.IDBKeyRange, Nr(w) || y === $t || Dr(w, p).delete(y).catch(Q), s();
            }), d.onerror = ye(c), d.onblocked = r._fireOnBlocked;
          }
          if (n) throw new L.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(u) : u();
        });
      }, te.prototype.backendDB = function() {
        return this.idbdb;
      }, te.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, te.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, te.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, te.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(te.prototype, "tables", { get: function() {
        var e = this;
        return I(this._allTables).map(function(r) {
          return e._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), te.prototype.transaction = function() {
        var e = function(r, n, a) {
          var s = arguments.length;
          if (s < 2) throw new L.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return a = c.pop(), [r, Xr(c), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, te.prototype._transaction = function(e, r, n) {
        var a = this, s = B.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = r.map(function(y) {
            if (y = y instanceof a.Table ? y.name : y, typeof y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return y;
          }), e == "r" || e === pr) c = pr;
          else {
            if (e != "rw" && e != mr) throw new L.InvalidArgument("Invalid transaction mode: " + e);
            c = mr;
          }
          if (s) {
            if (s.mode === pr && c === mr) {
              if (!d) throw new L.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && u.forEach(function(y) {
              if (s && s.storeNames.indexOf(y) === -1) {
                if (!d) throw new L.SubTransaction("Table " + y + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (y) {
          return s ? s._promise(null, function(w, h) {
            h(y);
          }) : ee(y);
        }
        var p = function y(w, h, O, m, E) {
          return j.resolve().then(function() {
            var S = B.transless || B, v = w._createTransaction(h, O, w._dbSchema, m);
            if (v.explicit = !0, S = { trans: v, transless: S }, m) v.idbtrans = m.idbtrans;
            else try {
              v.create(), v.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === sr.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return y(w, h, O, null, E);
              })) : ee(D);
            }
            var A, P = ar(E);
            return P && qe(), S = j.follow(function() {
              var D;
              (A = E.call(v, v)) && (P ? (D = Ne.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = $r(A)));
            }, S), (A && typeof A.then == "function" ? j.resolve(A).then(function(D) {
              return v.active ? D : ee(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return A;
            })).then(function(D) {
              return m && v._resolve(), v._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return v._reject(D), ee(D);
            });
          });
        }.bind(null, this, c, u, s, n);
        return s ? s._promise(c, p, "lock") : B.trans ? Le(B.transless, function() {
          return a._whenReady(p);
        }) : this._whenReady(p);
      }, te.prototype.table = function(e) {
        if (!q(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, te);
      function te(e, r) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var a = te.dependencies;
        this._options = r = l({ addons: te.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, a = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, u, d, p, y = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        y.dbReadyPromise = new j(function(h) {
          y.dbReadyResolve = h;
        }), y.openCanceller = new j(function(h, O) {
          y.cancelOpen = O;
        }), this._state = y, this.name = e, this.on = ht(this, "populate", "blocked", "versionchange", "close", { ready: [or, Q] }), this.on.ready.subscribe = Vr(this.on.ready.subscribe, function(h) {
          return function(O, m) {
            te.vip(function() {
              var E, S = n._state;
              S.openComplete ? (S.dbOpenError || j.resolve().then(O), m && h(O)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(O), m && h(O)) : (h(O), E = n, m || h(function v() {
                E.on.ready.unsubscribe(O), E.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (s = this, ft(oa.prototype, function(A, v) {
          this.db = s;
          var m = cn, E = null;
          if (v) try {
            m = v();
          } catch (P) {
            E = P;
          }
          var S = A._ctx, v = S.table, A = v.hook.reading.fire;
          this._ctx = { table: v, index: S.index, isPrimKey: !S.index || v.schema.primKey.keyPath && S.index === v.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: E, or: S.or, valueMapper: A !== it ? A : null };
        })), this.Table = (c = this, ft(hn.prototype, function(h, O, m) {
          this.db = c, this._tx = m, this.name = h, this.schema = O, this.hook = c._allTables[h] ? c._allTables[h].hook : ht(null, { creating: [Jn, Q], reading: [Xn, it], updating: [qn, Q], deleting: [Zn, Q] });
        })), this.Transaction = (u = this, ft(ua.prototype, function(h, O, m, E, S) {
          var v = this;
          this.db = u, this.mode = h, this.storeNames = O, this.schema = m, this.chromeTransactionDurability = E, this.idbtrans = null, this.on = ht(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(A, P) {
            v._resolve = A, v._reject = P;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(A) {
            var P = v.active;
            return v.active = !1, v.on.error.fire(A), v.parent ? v.parent._reject(A) : P && v.idbtrans && v.idbtrans.abort(), ee(A);
          });
        })), this.Version = (d = this, ft(ma.prototype, function(h) {
          this.db = d, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (p = this, ft(yn.prototype, function(h, O, m) {
          if (this.db = p, this._ctx = { table: h, index: O === ":id" ? null : O, or: m }, this._cmp = this._ascending = H, this._descending = function(E, S) {
            return H(S, E);
          }, this._max = function(E, S) {
            return 0 < H(E, S) ? E : S;
          }, this._min = function(E, S) {
            return H(E, S) < 0 ? E : S;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = yt(r.IDBKeyRange), this._createTransaction = function(h, O, m, E) {
          return new n.Transaction(h, O, m, n._options.chromeTransactionDurability, E);
        }, this._fireOnBlocked = function(h) {
          n.on("blocked").fire(h), et.filter(function(O) {
            return O.name === n.name && O !== n && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(h);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var w = new Proxy(this, { get: function(h, O, m) {
          if (O === "_vip") return !0;
          if (O === "table") return function(S) {
            return Xt(n.table(S), w);
          };
          var E = Reflect.get(h, O, m);
          return E instanceof hn ? Xt(E, w) : O === "tables" ? E.map(function(S) {
            return Xt(S, w);
          }) : O === "_createTransaction" ? function() {
            return Xt(E.apply(this, arguments), w);
          } : E;
        } });
        this.vip = w, a.forEach(function(h) {
          return h(n);
        });
      }
      var Jt, fe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Kr.prototype.subscribe = function(e, r, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: r, complete: n });
      }, Kr.prototype[fe] = function() {
        return this;
      }, Kr);
      function Kr(e) {
        this._subscribe = e;
      }
      try {
        Jt = { indexedDB: b.indexedDB || b.mozIndexedDB || b.webkitIndexedDB || b.msIndexedDB, IDBKeyRange: b.IDBKeyRange || b.webkitIDBKeyRange };
      } catch {
        Jt = { indexedDB: null, IDBKeyRange: null };
      }
      function xn(e) {
        var r, n = !1, a = new Aa(function(s) {
          var c = ar(e), u, d = !1, p = {}, y = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), h && Re.storagemutated.unsubscribe(m));
          } };
          s.start && s.start(w);
          var h = !1, O = function() {
            return gr(E);
          }, m = function(S) {
            Vt(p, S), Rr(y, p) && O();
          }, E = function() {
            var S, v, A;
            !d && Jt.indexedDB && (p = {}, S = {}, u && u.abort(), u = new AbortController(), A = function(P) {
              var D = Je();
              try {
                c && qe();
                var N = De(e, P);
                return N = c ? N.finally(Ne) : N;
              } finally {
                D && Ze();
              }
            }(v = { subscr: S, signal: u.signal, requery: O, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              n = !0, r = P, d || v.signal.aborted || (p = {}, function(D) {
                for (var N in D) if (q(D, N)) return;
                return 1;
              }(y = S) || h || (Re(mt, m), h = !0), gr(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || gr(function() {
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
      function Br(e) {
        var r = xe;
        try {
          xe = !0, Re.storagemutated.fire(e), Cr(e, !0);
        } finally {
          xe = r;
        }
      }
      ge(ze, l(l({}, Pt), { delete: function(e) {
        return new ze(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new ze(e, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return r = ze.dependencies, n = r.indexedDB, r = r.IDBKeyRange, (Nr(n) ? Promise.resolve(n.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== $t;
            });
          }) : Dr(n, r).toCollection().primaryKeys()).then(e);
        } catch {
          return ee(new L.MissingAPI());
        }
        var r, n;
      }, defineClass: function() {
        return function(e) {
          re(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? Le(B.transless, e) : e();
      }, vip: Ir, async: function(e) {
        return function() {
          try {
            var r = $r(e.apply(this, arguments));
            return r && typeof r.then == "function" ? r : j.resolve(r);
          } catch (n) {
            return ee(n);
          }
        };
      }, spawn: function(e, r, n) {
        try {
          var a = $r(e.apply(n, r || []));
          return a && typeof a.then == "function" ? a : j.resolve(a);
        } catch (s) {
          return ee(s);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, r) {
        return r = j.resolve(typeof e == "function" ? ze.ignoreTransaction(e) : e).timeout(r || 6e4), B.trans ? B.trans.waitFor(r) : r;
      }, Promise: j, debug: { get: function() {
        return me;
      }, set: function(e) {
        en(e);
      } }, derive: Ve, extend: re, props: ge, override: Vr, Events: ht, on: Re, liveQuery: xn, extendObservabilitySet: Vt, getByKeyPath: ve, setByKeyPath: le, delByKeyPath: function(e, r) {
        typeof r == "string" ? le(e, r, void 0) : "length" in r && [].map.call(r, function(n) {
          le(e, n, void 0);
        });
      }, shallowClone: Qr, deepClone: Ce, getObjectDiff: jr, cmp: H, asap: Yr, minKey: -1 / 0, addons: [], connections: et, errnames: sr, dependencies: Jt, cache: Ue, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, r, n) {
        return e + r / Math.pow(10, 2 * n);
      }) })), ze.maxKey = yt(ze.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Re(mt, function(e) {
        xe || (e = new CustomEvent(Er, { detail: e }), xe = !0, dispatchEvent(e), xe = !1);
      }), addEventListener(Er, function(e) {
        e = e.detail, xe || Br(e);
      }));
      var nt, xe = !1, kn = function() {
      };
      return typeof BroadcastChannel < "u" && ((kn = function() {
        (nt = new BroadcastChannel(Er)).onmessage = function(e) {
          return e.data && Br(e.data);
        };
      })(), typeof nt.unref == "function" && nt.unref(), Re(mt, function(e) {
        xe || nt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Se.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), nt?.close();
          for (var r = 0, n = et; r < n.length; r++) n[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Se.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), kn(), Br({ all: new oe(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, r) {
        return !e || e instanceof Qe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !qr[e.name] ? e : (r = new qr[e.name](r || e.message, e), "stack" in e && Ae(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, en(me), l(Se, Object.freeze({ __proto__: null, Dexie: Se, liveQuery: xn, Entity: un, cmp: H, PropModification: gt, replacePrefix: function(e, r) {
        return new gt({ replacePrefix: [e, r] });
      }, add: function(e) {
        return new gt({ add: e });
      }, remove: function(e) {
        return new gt({ remove: e });
      }, default: Se, RangeSet: oe, mergeRanges: Et, rangesOverlap: Sn }), { default: Se }), Se;
    });
  }(tr)), tr.exports;
}
var Ma = Ga();
const Ur = /* @__PURE__ */ $a(Ma), $n = Symbol.for("Dexie"), wt = globalThis[$n] || (globalThis[$n] = Ur);
if (Ur.semVer !== wt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ur.semVer} and ${wt.semVer}`);
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
class Gn {
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
  setCloud = async (t, o) => t.type === _.CLOUD && o !== "" ? (K(3, [
    "%cset%c %cstorage%c %ccloud",
    i.OK,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.CLOUD,
    o?.title ?? t.widget
  ]), await this.db.table(_.CLOUD).put({
    id: t.widget,
    dashboard_id: t.dashboard,
    hash: t.hash,
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
  ]), 400))) : 400;
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
    const o = (b) => t?.id === b.id, l = (b) => t?.name ? b.name.includes(t?.name) : !1, g = await this.db.table(_.DASHBOARD).toArray().then((b) => t?.id ? b.filter(o) : b).then((b) => t?.name ? b.filter(l) : b).catch(() => {
      K(2, ["%cstorage", i.STORAGE, X.DASHBOARD_LOAD, t]);
    });
    return g !== void 0 && K(3, [
      "%cstorage%c %cdashboards",
      i.STORAGE,
      i.NONE,
      i.WIDGET,
      t
    ]), {
      data: g !== void 0 ? { dashboards: g, query: t } : null,
      message: g !== void 0 ? "Dashboards loaded from storage" : "Dashboards load error",
      success: g !== void 0
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
    const t = Date.now() / 1e3, o = (b) => b.expires < t, l = (b) => b.expires < t;
    return await this.db.table(_.TOPICS).orderBy("expires").filter(o).delete().catch((b) => (console.error(
      "%cstorage%c %cclean",
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      b.message
    ), 0)), await this.db.table(_.MESSAGES).orderBy("expires").filter(l).delete().catch((b) => (console.error(
      "%clean%c %cstorage%c %cmessages",
      i.OK,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      b.message
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
    const g = (I) => I.utc > (t?.since || 0), b = (I) => I.utc < (t?.before || l);
    try {
      const I = this.db.table(_.TOPICS).where("widget_id").equals(t.widget).filter(g).filter(b);
      t?.approved === "true" ? I.and((se) => se.approved === 1) : I.and((se) => se.visible === 1), I.reverse();
      const G = await I.limit(t?.limit ?? 25).sortBy(o);
      if (G.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: t
        };
      const re = G.map((se) => this.db.table(_.MESSAGES).get({ id: se.message_id }));
      return wt.Promise.all(re).then(async (se) => {
        const q = {
          data: {
            messages: se.map((ge) => {
              if (ge !== void 0) return ge.data;
            })
          },
          query: t,
          message: "Messages retrieved successfully",
          success: !0
        };
        return q.query.hash = q.data.messages.length ? er(q.data.messages[0].utc) : "", K(3, [
          "%cget%c %cstorage%c %cmessages",
          i.OK,
          i.NONE,
          i.STORAGE,
          i.NONE,
          i.MESSAGES,
          q
        ]), q;
      });
    } catch (I) {
      return K(2, [
        "%cget%c %cstorage%c %cmessages",
        i.OK,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.NO_UPDATES,
        t,
        I.message
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
    let g = 0;
    return K(3, [
      "%cset%c %cstorage%c %cmessages",
      i.OK,
      i.NONE,
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      o?.title ?? t.widget
    ]), await o.data.messages.forEach(async (b) => {
      if (b.id !== null) {
        b.topics[0] = {
          message_id: b.id,
          engagement: b.topics[0]?.engagement || b.dynamics?.engagement || 0,
          impressions: b.topics[0]?.impressions || b.dynamics?.semrush_visits || 0,
          reach: b.topics[0]?.reach || b.dynamics?.potential_reach || 0,
          sentiment: b.topics[0]?.sentiment || 0,
          // @ts-ignore
          approved: b.topics[0]?.approved ? 1 : 0
        }, await this.db.table(_.MESSAGES).put({
          id: b.id,
          utc: b.utc,
          data: b,
          expires: b.expires
        }).catch((G) => {
          g++, K(4, [
            "%cset%c %cstorage",
            i.KO,
            i.NONE,
            i.STORAGE,
            "set message",
            `title: ${l}`,
            b,
            G.message
          ]);
        });
        const I = {
          title: l,
          widget_id: t.widget,
          visible: b.topics[0]?.visible || 1,
          // @ts-ignore
          approved: b.topics[0]?.approved || 0,
          message_id: b.id,
          dashboard_id: t.dashboard,
          engagement: b.topics[0]?.engagement || b.dynamics?.engagement || 0,
          impressions: b.topics[0]?.impressions || b.dynamics?.semrush_visits || 0,
          reach: b.topics[0]?.reach || b.dynamics?.potential_reach || 0,
          sentiment: b.topics[0]?.sentiment || 0,
          utc: b.utc,
          expires: b.expires
        };
        await this.db.table(_.TOPICS).put(I).catch((G) => {
          g++, K(4, [
            "%cset%c %cstorage",
            i.KO,
            i.NONE,
            i.STORAGE,
            "set topic",
            `title: ${l}`,
            b,
            G.message
          ]);
        }), await o.data.topics.forEach(async (G) => {
          const re = G.message_id, se = G.visible ? 1 : 0, Ot = G.approve ? 1 : 0, q = G.title;
          await this.db.table(_.TOPICS).where("message_id").equals(re).modify({ visible: se, approve: Ot }).catch((ge) => {
            g++, K(4, [
              "%cset%c %cstorage",
              i.KO,
              i.NONE,
              i.STORAGE,
              "update message visibility",
              `title: ${q}`,
              `widget: ${G.widget_id}`,
              ge.message
            ]);
          });
        });
      }
    }), g === 0 ? 201 : 400;
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
  setSeries = async (t, o) => (delete o?.query, t.type === _.SERIES && o !== "" ? (K(3, [
    "%cset%c %cstorage%c %cseries",
    i.OK,
    i.NONE,
    i.STORAGE,
    i.NONE,
    i.SERIES,
    o?.title ?? t.widget
  ]), await this.db.table(_.SERIES).put({
    id: t.widget,
    dashboard_id: t.dashboard,
    hash: t.hash,
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
  ]), 400))) : 400);
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
    const o = (I) => t?.dashboard === I.dashboard_id, l = (I) => t?.type === I.type, g = (I) => t?.name ? I.name.includes(t?.name) : !1, b = await this.db.table(_.WIDGET).toArray().then((I) => t?.dashboard ? I.filter(o) : I).then((I) => t?.type ? I.filter(l) : I).then((I) => t?.name ? I.filter(g) : I).catch(() => {
      K(2, ["%cstorage", i.STORAGE, X.WIDGET_LOAD, t]);
    });
    return b !== void 0 && K(3, [
      "%cstorage%c %cwidgets",
      i.STORAGE,
      i.NONE,
      i.MESSAGES,
      t
    ]), {
      // @ts-ignore
      data: b !== void 0 ? { data: b, query: t } : null,
      message: b !== void 0 ? "Widgets loaded from storage" : "Widgets load error",
      success: b !== void 0
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
    const o = (G) => t?.id ? G.id === t.id : !1, l = (G) => t?.name ? G.name.includes(t?.name) : !1, g = (G) => t?.presentation_id ? G.presentation_id === t.presentation_id : !1, I = await this.db.table(_.SLIDE).toArray().then((G) => t?.presentation_id ? G.filter(g) : G).then((G) => t?.id ? G.filter(o) : G).then((G) => t?.name ? G.filter(l) : G);
    return I && I.sort((G, re) => G.order_index - re.order_index), I !== void 0 && K(3, ["%cstorage%c %cslides", i.STORAGE, i.NONE, i.SLIDE, t]), {
      // @ts-ignore
      data: I,
      query: t,
      // : data !== undefined ? { data, query } : null,
      message: I !== void 0 ? "Slides loaded from storage" : "Slides load error",
      success: I !== void 0
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
    const o = (b) => t?.name ? b.name.includes(t?.name) : !1, g = await this.db.table(_.PRESENTATION).toArray().then((b) => t?.name ? b.filter(o) : b);
    return g !== void 0 && K(3, [
      "%cstorage%c %cpresentations",
      i.STORAGE,
      i.NONE,
      i.PRESENTATION,
      t
    ]), {
      data: g,
      query: t,
      message: g !== void 0 ? "Presentations loaded from storage" : "Presentations load error",
      success: g !== void 0
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
    const o = (b) => t?.id ? t.id = b.id : !1, g = await this.db.table(_.SLIDE).toArray().then((b) => t?.id ? b.filter(o) : b);
    return g !== void 0 && K(3, [
      "%cstorage%c %cpreferences",
      i.STORAGE,
      i.NONE,
      i.PRESENTATION,
      t
    ]), {
      // @ts-ignore
      data: g !== void 0 ? { preferences: g, query: t } : null,
      message: g !== void 0 ? "Preferences loaded from storage" : "Preferences load error",
      success: g !== void 0
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
    const o = (b) => t?.id ? b.includes(t.id) : !1, g = await this.db.table(_.IMAGES).toArray().then((b) => t?.id ? b.filter(o) : b);
    return g !== void 0 && K(3, [
      "%cstorage%c %cimages",
      i.STORAGE,
      i.NONE,
      i.PRESENTATION,
      t
    ]), {
      // @ts-expect-error query.widget is obligatory but not always
      data: g !== void 0 ? { images: g, query: t } : null,
      message: g !== void 0 ? "Images loaded from storage" : "Images load error",
      success: g !== void 0
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
function zr(f) {
  return new Promise((t, o) => {
    f.oncomplete = f.onsuccess = () => t(f.result), f.onabort = f.onerror = () => o(f.error);
  });
}
function Ka(f, t) {
  let o;
  const l = () => {
    if (o)
      return o;
    const g = indexedDB.open(f);
    return g.onupgradeneeded = () => g.result.createObjectStore(t), o = zr(g), o.then((b) => {
      b.onclose = () => o = void 0;
    }, () => {
    }), o;
  };
  return (g, b) => l().then((I) => b(I.transaction(t, g).objectStore(t)));
}
let Wr;
function Mn() {
  return Wr || (Wr = Ka("keyval-store", "keyval")), Wr;
}
function _e(f, t = Mn()) {
  return t("readonly", (o) => zr(o.get(f)));
}
function ke(f, t, o = Mn()) {
  return o("readwrite", (l) => (l.put(t, f), zr(l.transaction)));
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
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((g) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.CLOUD,
      t,
      g.message
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
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((g) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.SERIES,
      t,
      g.message
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
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((g) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.MESSAGES,
      t,
      g.message
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
    })).catch((g) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.WIDGET,
      t,
      g.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${g.message}`,
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
    })).catch((g) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.WIDGET,
      t,
      g.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${g.message}`,
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
    })).catch((g) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.SLIDE,
      t,
      g.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${g.message}`,
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
    })).catch((g) => (console.error(
      "%cstorage",
      i.STORAGE,
      _.PRESENTATION,
      t,
      g.message
    ), {
      data: null,
      message: `Presentation ${t.data.id} save error: ${g.message}`,
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, _.CLOUD, t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, _.SERIES, t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, _.MESSAGES, t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, _.CLOUD, t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, _.SERIES, t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, _.MESSAGES, t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, "set", t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, "set", t, g), 400;
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
    } catch (g) {
      return console.error("%cstorage", i.STORAGE, "set", t, g), 400;
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
      case pe.DEXIE:
        this.sm = new Gn(t);
        break;
      case pe.LOCAL:
        this.sm = new Ln(t);
        break;
      case pe.SESSION:
        this.sm = new Bn(t);
        break;
      case pe.KEYVAL:
        this.sm = new Kn(t);
        break;
      case pe.WINDOW:
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
    if (K(3, ["%cupdate%c %cdata", i.NO_UPDATES, i.NONE, i.MESSAGES, t]), this.sm === null || Object.keys(this.subscribers).length === 0)
      return;
    const o = [];
    Object.values(this.subscribers).forEach((l) => {
      o.push(this.api.get(l));
    }), o.forEach(async (l) => {
      await l.then(
        async (g) => await this.processResponse(g)
      );
    });
  };
  apiQuery = async (t) => await this.api.get(t).then(async (o) => await this.processResponse(o)).catch((o) => ({ code: 204, hash: "" }));
  processResponse = async (t) => {
    let o, l = { code: 400, hash: "" }, g = "", b;
    if (t.success === !0)
      switch (b = t.query.hash, t.query.type) {
        case _.MESSAGES:
          t.data.messages = t.data.messages.filter(
            (I) => I.id !== null
          ), g = t.data.messages.length > 0 ? er(t.data.messages[0].utc) : "none", b === g ? (K(3, [
            "%cset%c %cstorage%c %cmessages",
            i.NO_UPDATES,
            i.NONE,
            i.STORAGE,
            i.NONE,
            i.MESSAGES,
            t.data?.title ?? t.query.widget,
            `same hash:${g}`
          ]), l.code = 204) : this.sm !== null ? (t.query.hash = g, l.code = await this.sm.setMessages(t.query, t).then(async (I) => (this.broadcastUpdate(I, t), I)).catch((I) => 500)) : l.code = 500;
          break;
        case _.CLOUD:
          g = er(t.data.cloud), b === g ? (K(3, [
            "%cset%c %cstorage%c %ccloud",
            i.NO_UPDATES,
            i.NONE,
            i.STORAGE,
            i.NONE,
            i.CLOUD,
            t.data?.title ?? t.query.widget,
            `same hash:${g}`
          ]), K(4, [
            "%debug%c %ccloud",
            i.NO_UPDATES,
            i.NONE,
            i.CLOUD,
            t.query
          ]), l = { code: 204, hash: g }) : (t.query.hash = g, o = {
            data: {
              cloud: t.data
            },
            message: t.message,
            success: t.success,
            query: t.query
          }, this.sm !== null ? l.code = await this.sm.setCloud(t.query, o.data).then((I) => (this.broadcastUpdate(I, t), I)).catch((I) => 500) : l.code = 500);
          break;
        case _.SERIES:
          g = er(t.data.series), b === g ? (K(3, [
            "%cset%c %cstorage%c %cseries",
            i.NO_UPDATES,
            i.NONE,
            i.STORAGE,
            i.NONE,
            i.SERIES,
            t.data?.title ?? t.query.widget,
            `same hash:${g}`
          ]), l = { code: 204, hash: g }) : (t.query.hash = g, o = {
            data: t.data,
            message: t.message,
            success: t.success,
            query: t.query
          }, this.sm !== null ? l.code = await this.sm?.setSeries(t.query, t.data).then((I) => (this.broadcastUpdate(I, t), I)).catch((I) => 500) : l.code = 500);
          break;
        default:
          K(3, [
            `%cfetch%c %capi% %c${t.query.type} `,
            i.KO,
            i.NONE,
            i.API,
            i.NONE,
            i.NO_UPDATES,
            `Bad request: type ${t.query.type} unknown`
          ]), l = { code: 404, hash: g };
      }
    else
      switch (K(3, [
        `%cset%c %c${t.query.type}%c %cunauthorized`,
        i.KO,
        i.NONE,
        i.STORAGE,
        i.NONE,
        i.NO_UPDATES,
        t.query
      ]), t.query.type) {
        case _.MESSAGES:
          return this.sm !== null ? await this.sm?.getMessages(t.query).then((I) => (this.broadcastUpdate(201, I), { code: 201, hash: g })) : { code: 500, hash: g };
        case _.CLOUD:
          return this.sm !== null ? await this.sm?.getCloud(t.query).then((I) => (this.broadcastUpdate(201, I), { code: 201, hash: g })) : { code: 500, hash: g };
        case _.SERIES:
          return this.sm !== null ? await this.sm?.getSeries(t.query).then((I) => (this.broadcastUpdate(201, I), { code: 201, hash: g })) : { code: 500, hash: g };
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
          Fr(o.query),
          // @ts-expect-error query.widget is obligatory but not always
          `${o?.data?.title ?? ""} ${o.query.widget}`
        ]), K(4, [
          "%cdebug%c %cevent",
          i.NO_UPDATES,
          i.NONE,
          i.BROADCAST,
          o
        ]), this.bc?.postMessage({
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
          Fr(o.query),
          "Fetch error",
          o.query
        ]);
        break;
    }
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
      case pe.DEXIE:
        this.sm = new Gn(t);
        break;
      case pe.LOCAL:
        this.sm = new Ln(t);
        break;
      case pe.SESSION:
        this.sm = new Bn(t);
        break;
      case pe.KEYVAL:
        this.sm = new Kn(t);
        break;
      case pe.WINDOW:
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
    "wrong method call for getCloud, type used is",
    t.type
  ), {
    data: null,
    message: `'wrong method call for getCloud, type used is ${t.type}`,
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
    "wrong method call for getSeries, type used is",
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
    const g = { ...t.dataset };
    delete g.hmr;
    const b = window.BuzzCasting.getOptions();
    g.presentation = b?.presentation ?? `${l} not found`, this.query = g, Da(t), this.storageReader = new Ba(b), this.broadcastChannel = new BroadcastChannel(g.presentation), this.broadcastListener();
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
              const g = await this.getData();
              g?.success && (K(4, [
                `%cset%c %cwidget%c %c${this.query.type}`,
                i.OK,
                i.NONE,
                i.WIDGET,
                i.NONE,
                //@ts-ignore
                Fr(this.query),
                this.query
              ]), this.callbacks.forEach(async (b) => {
                b(g);
              }));
            }
          } catch (g) {
            K(4, [X.WIDGET_UPDATE, l, g.message, g]);
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
  setHash(t) {
    this.query.hash = t;
  }
  getHash() {
    return this.query.hash;
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
