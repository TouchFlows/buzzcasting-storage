var _ = /* @__PURE__ */ ((f) => (f.CARDS = "cards", f.CLOUD = "cloud", f.DASHBOARD = "dashboard", f.DASHBOARDS = "dashboards", f.IMAGES = "images", f.MESSAGES = "messages", f.PREFERENCE = "preference", f.PREFERENCES = "preferences", f.PRESENTATION = "presentation", f.PRESENTATIONS = "presentations", f.SERIES = "series", f.SLIDE = "slide", f.SLIDES = "slides", f.TOPICS = "topics", f.WIDGET = "widget", f.WIDGETS = "widgets", f))(_ || {}), o = /* @__PURE__ */ ((f) => (f.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", f.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", f.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", f.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", f.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", f.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", f.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", f.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", f.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", f.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", f.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", f.NONE = "color:transparent;background-color:transparent;", f.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", f.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", f.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", f.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", f.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", f.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", f.WIDGET = "color:black;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", f.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", f))(o || {}), J = /* @__PURE__ */ ((f) => (f.ADD_SLIDE = "addSlide", f.APP_READY = "appReady", f.API_UPDATE = "apiUpdate", f.BACKGROUND_UPDATE = "backgroundUpdate", f.BUILDER_PREVIEW = "builderPreview", f.COMPONENT_UPDATE = "componentUpdate", f.APPROVE_MESSAGE = "approveMessage", f.CHANNEL = "channel", f.CLEAN_MESSAGES = "cleanMessages", f.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", f.CLOSE_BUILDER_MODAL = "closeBuilderModal", f.CLOSE_MODAL = "closeModal", f.COLOR_UPDATE = "colorUpdate", f.COMPONENT_INDEX = "componentIndex", f.CSS_SET = "setCss", f.CSS_STORE = "storeCss", f.DASHBOARD_LOAD = "loadDashboard", f.DASHBOARD_STORE = "storeDashboard", f.DASHBOARD_UPDATED = "dashboardUpdated", f.ERROR = "error", f.HIDE_MESSAGE = "hideMessage", f.HIDE_LABELS = "hideLabels", f.IMAGE_GET = "getImage", f.IMAGE_SET = "setImage", f.IMAGE_STORED = "imageStored", f.LAUPPUT_UPDATE = "layoutUpdate", f.PREV_SLIDE = "prevSlide", f.RELOAD_PRESENTATION = "reloadPresentation", f.STAR_MESSAGE = "starMessage", f.GOTO_SLIDE = "gotoSlide", f.NEXT_SLIDE = "nextSlide", f.PREFERENCE_LOAD = "loadPreference", f.PREFERENCE_STORE = "storePreference", f.PREFERENCE_UPDATED = "preferenceUpdated", f.PAUSE_PRESENTATION = "pausePresentation", f.PRESENTATION_READY = "presentationReady", f.PRESENTATION_LOAD = "loadPresentation", f.PRESENTATION_STORE = "storePresentation", f.PRESENTATION_UPDATED = "presentationUpdated", f.ROW_COL_UPDATE = "rowcolupdate", f.SCREENSHOT_TAKE = "takeScreenshot", f.SCREENSHOT_STORE = "storeScreenshot", f.SECTION_UPDATE = "sectionUpdate", f.SHOW_BUILDER_DIALOG = "showBuilderDialog", f.SHOW_BUILDER_MODAL = "showBuilderModal", f.SHOW_MODAL = "showModal", f.SLIDE_DID_LOAD = "slideDidLoad", f.SLIDE_GET = "getSlide", f.SLIDE_GOTO = "slideGoto", f.SLIDE_LOAD = "loadSlide", f.SLIDE_READY = "slideReady", f.SLIDE_SAVED = "slideSaved", f.SLIDE_SET = "setSlide", f.SLIDE_STORE = "storeSlide", f.SLIDE_STORED = "slideStored", f.SLIDE_TRANSITIONER = "slideTransitioner", f.SLIDE_UPDATED = "slideUpdated", f.START_TRANSITIONER = "startTransitioner", f.STORAGE_INIT = "storageInit", f.STREAM = "stream", f.SUBSCRIBE = "subscribe", f.SUSPEND_ACCOUNT = "suspendAccount", f.SWITCH_PRESENTATION = "switchPresentation", f.REMOVE_CLOUD = "removeCloud", f.UPDATE = "update", f.UPLOAD_COMPLETED = "uploadCompleted", f.VERSION = "version", f.WIDGETS_CLEAR = "widgetsClear", f.WIDGET_DID_LOAD = "widgetDidLoad", f.WIDGET_DID_UPDATE = "widgetDidUpdate", f.WIDGET_LOAD = "widgetLoad", f.WIDGET_STORE = "widgetStore", f.WIDGET_UPDATE = "widgetUpdate", f.WS_API_REQUEST = "wsApiRequest", f.WS_API_RESPONSE = "wsApiResponse", f.WS_API_UPDATE = "wsApiRUpdate", f))(J || {}), rr = /* @__PURE__ */ ((f) => (f.APPROVED = "approved", f.BEFORE = "before", f.DELAYED = "delayed", f.NONE = "none", f.REALTIME = "realtime", f))(rr || {}), pe = /* @__PURE__ */ ((f) => (f.KEYVAL = "keyval", f.LOCAL = "local", f.SESSION = "session", f.DEXIE = "dexie", f.WINDOW = "window", f))(pe || {});
function Da(f) {
  const t = {};
  for (let i = 0; i < f.length; i++) {
    const l = f.item(i);
    l?.name && (t[l.name] = l.value);
  }
  return t;
}
function Ia(f) {
  const t = document.createRange();
  t.selectNodeContents(f), t.deleteContents();
}
function Ta(f, t) {
  for (; f.length < t; )
    f = `0${f}`;
  return f;
}
function _e(f, t) {
  let i, l, g;
  if (t.length === 0)
    return f;
  for (i = 0, g = t.length; i < g; i++)
    l = t.charCodeAt(i), f = (f << 5) - f + l, f |= 0;
  return f < 0 ? f * -2 : f;
}
function Ra(f, t, i) {
  return Object.keys(t).sort().reduce(l, f);
  function l(g, b) {
    return Mn(g, t[b], b, i);
  }
}
function Mn(f, t, i, l) {
  const g = _e(_e(_e(f, i), xa(t)), typeof t);
  if (t === null)
    return _e(g, "null");
  if (t === void 0)
    return _e(g, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (l.includes(t))
      return _e(g, `[Circular]${i}`);
    l.push(t);
    const b = Ra(g, t, l);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return b;
    try {
      return _e(b, String(t.valueOf()));
    } catch (I) {
      return _e(b, `[valueOf exception]${I.stack || I.message}`);
    }
  }
  return _e(g, t.toString());
}
function xa(f) {
  return Object.prototype.toString.call(f);
}
function Wr(f) {
  return Ta(Mn(0, f, "", []).toString(16), 8);
}
const ot = (f) => {
  let t = {}, i = f.split(",");
  for (let l = 0; l < i.length; l++) t[i[l]] = !0;
  return t;
};
ot(
  "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
);
ot(
  "a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
);
ot(
  "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
);
ot("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
ot(
  "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
);
ot("script,style");
const ka = new BroadcastChannel("logging"), G = async (f = 0, t) => {
  ka.postMessage({ action: "log", level: f, message: t });
}, _t = (f) => {
  switch (f?.type) {
    case _.MESSAGES:
      return o.MESSAGES;
    case _.SERIES:
      return o.SERIES;
    case _.CLOUD:
      return o.CLOUD;
    default:
      return o.NO_UPDATES;
  }
};
function Y(f) {
  let t = `${f.type}.${f.topics}`;
  return f.order && (t += `.${f.order}`), f.period && (t += `.${f.period}`), t;
}
function Ca(f) {
  if (f.widget === void 0) {
    const t = f.topics?.split("-");
    t && t.length > 1 ? (f.dashboard = t ? t[0] : "", f.widget = t ? t[1] : "") : (f.widget = f.topics, f.dashboard = f.slide);
  }
  return f;
}
function Pt(f, t) {
  let i, l, g, b, I;
  switch (f.moderation) {
    case rr.BEFORE:
      i = /* @__PURE__ */ new Date(), l = f.beforeTime?.split(":"), g = Number.parseInt(l ? l[0] : "00"), b = Number.parseInt(l ? l[1] : "00"), I = Number.parseInt(l ? l[2] : "00"), t.before = i.setHours(g, b, I, 0) / 1e3, t.period || (t.period = i.getDay() === 1 ? 72 : 24);
      break;
    case rr.DELAYED:
      f.delay && f.delay > 0 && (t.delay = `${f.delay}`);
      break;
    case rr.APPROVED:
      t.approved = "1";
      break;
    default:
      f.period !== 0 && (t.period = f.period);
  }
  return t;
}
const $a = "3.18.2";
async function* ja(f) {
  const t = f.pipeThrough(new TextDecoderStream("utf-8")).getReader();
  let i = "";
  for (; ; ) {
    const { done: l, value: g } = await t.read();
    if (l) break;
    for (const b of g.split(`
`))
      try {
        i += b, yield JSON.parse(i), i = "";
      } catch {
      }
  }
}
class Ga {
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
    const { version: i } = this.options, l = this.headers(), g = Object.assign({}, t);
    delete g.type, delete g.hash, delete g.order, g.topics = `${g.dashboard}-${g.widget}`, delete g.presentation;
    const b = Object.keys(g).length > 0 ? `?${new URLSearchParams(g).toString()}` : "";
    let I = "";
    switch (t.type) {
      case _.MESSAGES:
        I = o.MESSAGES;
        break;
      case _.SERIES:
        I = o.SERIES;
        break;
      case _.CLOUD:
        I = o.CLOUD;
        break;
    }
    return G(3, [
      `%cfetch%c %capi%c %c${t.type}`,
      o.OK,
      o.NONE,
      o.API,
      o.NONE,
      I,
      t.widget,
      g
    ]), await fetch(
      [this.url, "api", i, t.type].join("/") + b,
      { ...l, method: "get" }
    ).then(async (T) => {
      if (!T.ok)
        throw new Error(`${T.status}`);
      return T;
    }).then((T) => T.json()).then((T) => (T.query = t, T)).catch((T) => ({ success: !1, message: `${T}`, data: null, query: t }));
  }
  async ndjson(t) {
    const { version: i } = this.options, l = this.headers(), g = await fetch(
      `${[this.url, "api", i, "stream"].join("/")}`,
      {
        ...l,
        body: JSON.stringify({ data: t }),
        method: "post"
      }
    );
    for await (const b of ja(g.body))
      console.log("Received", b);
  }
  async hideMessage(t) {
    const { version: i } = this.options, l = this.headers(), g = "?action=visible";
    return G(3, [
      "%capi%c %cput",
      o.API,
      o.NONE,
      o.GET_DATA,
      J.HIDE_MESSAGE,
      t.widget,
      t.id
    ]), await fetch(
      [this.url, "api", i, "messages", t.id].join("/") + g,
      { ...l, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
  async hideLabels(t) {
    const { version: i } = this.options, l = this.formHeaders(), g = new URLSearchParams(), b = t.labels || [];
    for (const [I, T] of b.entries())
      g.append(`custom_filters[${I}]`, T);
    return console.info(
      "%capi%c %cput",
      o.API,
      o.NONE,
      o.GET_DATA,
      J.HIDE_LABELS,
      t.widget,
      b
    ), await fetch(
      [this.url, "api", i, t.type, t.widget].join("/"),
      { ...l, body: g, method: "put" }
    ).then((I) => {
      if (!I.ok)
        throw new Error(I.statusText);
      return I;
    }).then((I) => I.json()).catch((I) => ({ succes: !1, message: I, data: [] }));
  }
  async loadSlide(t) {
    const { version: i } = this.options, l = this.headers(), g = Object.assign({}, t);
    return delete g.type, delete g.hash, G(3, [
      "%cload%c %capi%c %cslide",
      o.OK,
      o.NONE,
      o.API,
      o.NONE,
      o.SLIDE,
      t.id
    ]), await fetch(
      [this.url, "api", i, "slides", t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (b) => {
      if (!b.ok)
        throw new Error(`${b.status}`);
      return b;
    }).then((b) => b.json()).then((b) => {
      let I;
      return t.type = "slides", b.query = t, b?.data && (Array.isArray(b.data) ? (I = structuredClone(b.data), I.forEach((T) => {
        typeof T.json == "string" && (T.json = JSON.parse(T.json));
      })) : (I = structuredClone(b.data), I.json = JSON.parse(I.json)), b.data = I), b;
    }).catch((b) => ({ success: !1, message: `${b}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.__bc.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storeSlide(t) {
    const { version: i } = this.options, l = this.formHeaders();
    delete t.update, delete t.type;
    const g = JSON.stringify(t);
    return G(3, [
      "%cput%c %capi%c %cslide",
      o.OK,
      o.NONE,
      o.API,
      o.NONE,
      o.SLIDE,
      J.SLIDE_STORE,
      t.id
    ]), await fetch(
      [this.url, "api", i, "slides", t.id].join("/"),
      { ...l, body: g, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
  async loadPresentation(t) {
    const { version: i } = this.options, l = this.headers();
    return delete t.update, G(3, [
      "%cload%c %capi%c %cpresentation",
      o.OK,
      o.NONE,
      o.API,
      o.NONE,
      o.PRESENTATION,
      t.id
    ]), await fetch(
      [this.url, "api", i, _.PRESENTATIONS, t.id].join("/"),
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
   * ex: window.__bc.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storePresentation(t) {
    const { version: i } = this.options, l = this.formHeaders();
    delete t.update;
    const g = JSON.stringify(t);
    return G(2, ["%capi%c %cput", o.API, o.NONE, o.PRESENTATION, t.name]), await fetch(
      [this.url, "api", i, _.PRESENTATIONS, t.id].join("/"),
      { ...l, body: g, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
  async loadPreference(t) {
    const { version: i } = this.options, l = this.headers();
    return G(3, [
      "%cload%c %capi%c %cpreference",
      o.OK,
      o.NONE,
      o.API,
      o.NONE,
      o.APP,
      t.id
    ]), await fetch(
      [this.url, "api", i, _.PREFERENCES, t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (g) => {
      if (!g.ok)
        throw new Error(`${g.status}`);
      return g;
    }).then((g) => g.json()).then((g) => (t.type = "preference", g.query = t, g)).catch((g) => ({ success: !1, message: `${g}`, data: null }));
  }
  async storePreference(t) {
    const { version: i } = this.options, l = this.formHeaders();
    delete t.update;
    const g = JSON.stringify({ data: t });
    return G(3, [
      "%capi%c %cstorePreference",
      o.API,
      o.NONE,
      o.APP,
      t.id
    ]), await fetch(
      [this.url, "api", i, _.PREFERENCES, t.id].join("/"),
      { ...l, body: g, method: "put" }
    ).then((b) => {
      if (!b.ok)
        throw new Error(b.statusText);
      return b;
    }).then((b) => b.json()).catch((b) => ({ succes: !1, message: b, data: [] }));
  }
  async loadDashboards(t) {
    const { version: i } = this.options, l = this.headers();
    return G(3, ["%capi%c %cdashboards", o.API, o.NONE, o.WIDGET]), await fetch(
      [this.url, "api", i, _.WIDGETS, t?.id || ""].join("/"),
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
    const { version: i } = this.options, l = this.headers();
    return G(3, [
      "%cload%c %capi%c %cimage",
      o.OK,
      o.NONE,
      o.API,
      o.NONE,
      o.WIDGET
    ]), await fetch(
      `${[this.url, "api", i, _.IMAGES].join(
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
    const { version: i } = this.options, l = this.fileHeaders(), g = t;
    return console.info(
      "%capi%c %cstoreImage",
      o.API,
      o.NONE,
      o.WIDGET,
      t.get("name")
    ), await fetch(
      `${[this.url, "api", i, _.IMAGES].join(
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
  async deleteImage(t, i) {
    const { version: l } = this.options, g = this.formHeaders();
    return console.info(
      "%capi%c %cdeleteImage",
      o.API,
      o.NONE,
      o.WIDGET,
      i
    ), await fetch(
      `${[this.url, "api", l, _.IMAGES, i].join(
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
var Ma = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ka(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var nr = { exports: {} }, La = nr.exports, jn;
function Ba() {
  return jn || (jn = 1, (function(f, t) {
    (function(i, l) {
      f.exports = l();
    })(La, function() {
      var i = function(e, r) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
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
      var b = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ma, I = Object.keys, T = Array.isArray;
      function te(e, r) {
        return typeof r != "object" || I(r).forEach(function(n) {
          e[n] = r[n];
        }), e;
      }
      typeof Promise > "u" || b.Promise || (b.Promise = Promise);
      var me = Object.getPrototypeOf, fe = {}.hasOwnProperty;
      function ae(e, r) {
        return fe.call(e, r);
      }
      function ge(e, r) {
        typeof r == "function" && (r = r(me(e))), (typeof Reflect > "u" ? I : Reflect.ownKeys)(r).forEach(function(n) {
          Pe(e, n, r[n]);
        });
      }
      var it = Object.defineProperty;
      function Pe(e, r, n, a) {
        it(e, r, te(n && ae(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, a));
      }
      function Ye(e) {
        return { from: function(r) {
          return e.prototype = Object.create(r.prototype), Pe(e.prototype, "constructor", e), { extend: ge.bind(null, e.prototype) };
        } };
      }
      var Hn = Object.getOwnPropertyDescriptor, Vn = [].slice;
      function Nt(e, r, n) {
        return Vn.call(e, r, n);
      }
      function zr(e, r) {
        return r(e);
      }
      function ct(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Yr(e) {
        b.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Ee(e, r) {
        if (typeof r == "string" && ae(e, r)) return e[r];
        if (!r) return e;
        if (typeof r != "string") {
          for (var n = [], a = 0, s = r.length; a < s; ++a) {
            var c = Ee(e, r[a]);
            n.push(c);
          }
          return n;
        }
        var u = r.indexOf(".");
        if (u !== -1) {
          var d = e[r.substr(0, u)];
          return d == null ? void 0 : Ee(d, r.substr(u + 1));
        }
      }
      function ue(e, r, n) {
        if (e && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof r != "string" && "length" in r) {
          ct(typeof n != "string" && "length" in n);
          for (var a = 0, s = r.length; a < s; ++a) ue(e, r[a], n[a]);
        } else {
          var c, u, d = r.indexOf(".");
          d !== -1 ? (c = r.substr(0, d), (u = r.substr(d + 1)) === "" ? n === void 0 ? T(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = n : ue(d = !(d = e[c]) || !ae(e, c) ? e[c] = {} : d, u, n)) : n === void 0 ? T(e) && !isNaN(parseInt(r)) ? e.splice(r, 1) : delete e[r] : e[r] = n;
        }
      }
      function Xr(e) {
        var r, n = {};
        for (r in e) ae(e, r) && (n[r] = e[r]);
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
        return b[e];
      }), Jr = new Set(Me.map(function(e) {
        return b[e];
      })), ut = null;
      function $e(e) {
        return ut = /* @__PURE__ */ new WeakMap(), e = (function r(n) {
          if (!n || typeof n != "object") return n;
          var a = ut.get(n);
          if (a) return a;
          if (T(n)) {
            a = [], ut.set(n, a);
            for (var s = 0, c = n.length; s < c; ++s) a.push(r(n[s]));
          } else if (Jr.has(n.constructor)) a = n;
          else {
            var u, d = me(n);
            for (u in a = d === Object.prototype ? {} : Object.create(d), ut.set(n, a), n) ae(n, u) && (a[u] = r(n[u]));
          }
          return a;
        })(e), ut = null, e;
      }
      var Yn = {}.toString;
      function ar(e) {
        return Yn.call(e).slice(8, -1);
      }
      var sr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Xn = typeof sr == "symbol" ? function(e) {
        var r;
        return e != null && (r = e[sr]) && r.apply(e);
      } : function() {
        return null;
      };
      function je(e, r) {
        return r = e.indexOf(r), 0 <= r && e.splice(r, 1), 0 <= r;
      }
      var Xe = {};
      function we(e) {
        var r, n, a, s;
        if (arguments.length === 1) {
          if (T(e)) return e.slice();
          if (this === Xe && typeof e == "string") return [e];
          if (s = Xn(e)) {
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
      var or = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ht = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], he = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ht), Qn = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
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
      function Dt(e, r, n, a) {
        this.failures = r, this.failedKeys = a, this.successCount = n, this.message = Zr(e, r);
      }
      function Je(e, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(n) {
          return r[n];
        }), this.failuresByPos = r, this.message = Zr(e, this.failures);
      }
      Ye(Qe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ye(Dt).from(Qe), Ye(Je).from(Qe);
      var ir = he.reduce(function(e, r) {
        return e[r] = r + "Error", e;
      }, {}), Jn = Qe, B = he.reduce(function(e, r) {
        var n = r + "Error";
        function a(s, c) {
          this.name = n, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Qn[r] || n, this.inner = null);
        }
        return Ye(a).from(Jn), e[r] = a, e;
      }, {});
      B.Syntax = SyntaxError, B.Type = TypeError, B.Range = RangeError;
      var qr = ht.reduce(function(e, r) {
        return e[r + "Error"] = B[r], e;
      }, {}), It = he.reduce(function(e, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (e[r + "Error"] = B[r]), e;
      }, {});
      function X() {
      }
      function lt(e) {
        return e;
      }
      function Zn(e, r) {
        return e == null || e === lt ? r : function(n) {
          return r(e(n));
        };
      }
      function Ge(e, r) {
        return function() {
          e.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function qn(e, r) {
        return e === X ? r : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var a = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = r.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? Ge(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? Ge(s, this.onerror) : s), c !== void 0 ? c : n;
        };
      }
      function ea(e, r) {
        return e === X ? r : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ge(n, this.onsuccess) : n), a && (this.onerror = this.onerror ? Ge(a, this.onerror) : a);
        };
      }
      function ta(e, r) {
        return e === X ? r : function(n) {
          var a = e.apply(this, arguments);
          te(n, a);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = r.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Ge(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? Ge(c, this.onerror) : c), a === void 0 ? n === void 0 ? void 0 : n : te(a, n);
        };
      }
      function ra(e, r) {
        return e === X ? r : function() {
          return r.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function cr(e, r) {
        return e === X ? r : function() {
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
      It.ModifyError = Dt, It.DexieError = Qe, It.BulkError = Je;
      var ye = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function en(e) {
        ye = e;
      }
      var dt = {}, tn = 100, Me = typeof Promise > "u" ? [] : (function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, me(e), e];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, me(r), e];
      })(), ht = Me[0], he = Me[1], Me = Me[2], he = he && he.then, Ke = ht && ht.constructor, ur = !!Me, ft = function(e, r) {
        gt.push([e, r]), Tt && (queueMicrotask(aa), Tt = !1);
      }, lr = !0, Tt = !0, Le = [], Rt = [], dr = lt, Ne = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: X, pgp: !1, env: {}, finalize: X }, L = Ne, gt = [], Be = 0, xt = [];
      function M(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = L;
        if (typeof e != "function") {
          if (e !== dt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && fr(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, (function n(a, s) {
          try {
            s(function(c) {
              if (a._state === null) {
                if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Ze();
                c && typeof c.then == "function" ? n(a, function(d, p) {
                  c instanceof M ? c._then(d, p) : c.then(d, p);
                }) : (a._state = !0, a._value = c, nn(a)), u && qe();
              }
            }, fr.bind(null, a));
          } catch (c) {
            fr(a, c);
          }
        })(this, e);
      }
      var hr = { get: function() {
        var e = L, r = jt;
        function n(a, s) {
          var c = this, u = !e.global && (e !== L || r !== jt), d = u && !Ie(), p = new M(function(m, w) {
            gr(c, new rn(sn(a, e, u, d), sn(s, e, u, d), m, w, e));
          });
          return this._consoleTask && (p._consoleTask = this._consoleTask), p;
        }
        return n.prototype = dt, n;
      }, set: function(e) {
        Pe(this, "then", e && e.prototype === dt ? hr : { get: function() {
          return e;
        }, set: hr.set });
      } };
      function rn(e, r, n, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = n, this.reject = a, this.psd = s;
      }
      function fr(e, r) {
        var n, a;
        Rt.push(r), e._state === null && (n = e._lib && Ze(), r = dr(r), e._state = !1, e._value = r, a = e, Le.some(function(s) {
          return s._value === a._value;
        }) || Le.push(a), nn(e), n && qe());
      }
      function nn(e) {
        var r = e._listeners;
        e._listeners = [];
        for (var n = 0, a = r.length; n < a; ++n) gr(e, r[n]);
        var s = e._PSD;
        --s.ref || s.finalize(), Be === 0 && (++Be, ft(function() {
          --Be == 0 && pr();
        }, []));
      }
      function gr(e, r) {
        if (e._state !== null) {
          var n = e._state ? r.onFulfilled : r.onRejected;
          if (n === null) return (e._state ? r.resolve : r.reject)(e._value);
          ++r.psd.ref, ++Be, ft(na, [n, e, r]);
        } else e._listeners.push(r);
      }
      function na(e, r, n) {
        try {
          var a, s = r._value;
          !r._state && Rt.length && (Rt = []), a = ye && r._consoleTask ? r._consoleTask.run(function() {
            return e(s);
          }) : e(s), r._state || Rt.indexOf(s) !== -1 || (function(c) {
            for (var u = Le.length; u; ) if (Le[--u]._value === c._value) return Le.splice(u, 1);
          })(r), n.resolve(a);
        } catch (c) {
          n.reject(c);
        } finally {
          --Be == 0 && pr(), --n.psd.ref || n.psd.finalize();
        }
      }
      function aa() {
        Ue(Ne, function() {
          Ze() && qe();
        });
      }
      function Ze() {
        var e = lr;
        return Tt = lr = !1, e;
      }
      function qe() {
        var e, r, n;
        do
          for (; 0 < gt.length; ) for (e = gt, gt = [], n = e.length, r = 0; r < n; ++r) {
            var a = e[r];
            a[0].apply(null, a[1]);
          }
        while (0 < gt.length);
        Tt = lr = !0;
      }
      function pr() {
        var e = Le;
        Le = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var r = xt.slice(0), n = r.length; n; ) r[--n]();
      }
      function kt(e) {
        return new M(dt, !1, e);
      }
      function Z(e, r) {
        var n = L;
        return function() {
          var a = Ze(), s = L;
          try {
            return Te(n, !0), e.apply(this, arguments);
          } catch (c) {
            r && r(c);
          } finally {
            Te(s, !1), a && qe();
          }
        };
      }
      ge(M.prototype, { then: hr, _then: function(e, r) {
        gr(this, new rn(null, null, e, r, L));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var r = e, n = arguments[1];
        return typeof r == "function" ? this.then(null, function(a) {
          return (a instanceof r ? n : kt)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === r ? n : kt)(a);
        });
      }, finally: function(e) {
        return this.then(function(r) {
          return M.resolve(e()).then(function() {
            return r;
          });
        }, function(r) {
          return M.resolve(e()).then(function() {
            return kt(r);
          });
        });
      }, timeout: function(e, r) {
        var n = this;
        return e < 1 / 0 ? new M(function(a, s) {
          var c = setTimeout(function() {
            return s(new B.Timeout(r));
          }, e);
          n.then(a, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Pe(M.prototype, Symbol.toStringTag, "Dexie.Promise"), Ne.env = an(), ge(M, { all: function() {
        var e = we.apply(null, arguments).map(Gt);
        return new M(function(r, n) {
          e.length === 0 && r([]);
          var a = e.length;
          e.forEach(function(s, c) {
            return M.resolve(s).then(function(u) {
              e[c] = u, --a || r(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof M ? e : e && typeof e.then == "function" ? new M(function(r, n) {
          e.then(r, n);
        }) : new M(dt, !0, e);
      }, reject: kt, race: function() {
        var e = we.apply(null, arguments).map(Gt);
        return new M(function(r, n) {
          e.map(function(a) {
            return M.resolve(a).then(r, n);
          });
        });
      }, PSD: { get: function() {
        return L;
      }, set: function(e) {
        return L = e;
      } }, totalEchoes: { get: function() {
        return jt;
      } }, newPSD: De, usePSD: Ue, scheduler: { get: function() {
        return ft;
      }, set: function(e) {
        ft = e;
      } }, rejectionMapper: { get: function() {
        return dr;
      }, set: function(e) {
        dr = e;
      } }, follow: function(e, r) {
        return new M(function(n, a) {
          return De(function(s, c) {
            var u = L;
            u.unhandleds = [], u.onunhandled = c, u.finalize = Ge(function() {
              var d, p = this;
              d = function() {
                p.unhandleds.length === 0 ? s() : c(p.unhandleds[0]);
              }, xt.push(function m() {
                d(), xt.splice(xt.indexOf(m), 1);
              }), ++Be, ft(function() {
                --Be == 0 && pr();
              }, []);
            }, u.finalize), e();
          }, r, n, a);
        });
      } }), Ke && (Ke.allSettled && Pe(M, "allSettled", function() {
        var e = we.apply(null, arguments).map(Gt);
        return new M(function(r) {
          e.length === 0 && r([]);
          var n = e.length, a = new Array(n);
          e.forEach(function(s, c) {
            return M.resolve(s).then(function(u) {
              return a[c] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[c] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || r(a);
            });
          });
        });
      }), Ke.any && typeof AggregateError < "u" && Pe(M, "any", function() {
        var e = we.apply(null, arguments).map(Gt);
        return new M(function(r, n) {
          e.length === 0 && n(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(c, u) {
            return M.resolve(c).then(function(d) {
              return r(d);
            }, function(d) {
              s[u] = d, --a || n(new AggregateError(s));
            });
          });
        });
      }), Ke.withResolvers && (M.withResolvers = Ke.withResolvers));
      var re = { awaits: 0, echoes: 0, id: 0 }, sa = 0, Ct = [], $t = 0, jt = 0, oa = 0;
      function De(e, r, n, a) {
        var s = L, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++oa, Ne.env, c.env = ur ? { Promise: M, PromiseProp: { value: M, configurable: !0, writable: !0 }, all: M.all, race: M.race, allSettled: M.allSettled, any: M.any, resolve: M.resolve, reject: M.reject } : {}, r && te(c, r), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = Ue(c, e, n, a), c.ref === 0 && c.finalize(), a;
      }
      function et() {
        return re.id || (re.id = ++sa), ++re.awaits, re.echoes += tn, re.id;
      }
      function Ie() {
        return !!re.awaits && (--re.awaits == 0 && (re.id = 0), re.echoes = re.awaits * tn, !0);
      }
      function Gt(e) {
        return re.echoes && e && e.constructor === Ke ? (et(), e.then(function(r) {
          return Ie(), r;
        }, function(r) {
          return Ie(), q(r);
        })) : e;
      }
      function ia() {
        var e = Ct[Ct.length - 1];
        Ct.pop(), Te(e, !1);
      }
      function Te(e, r) {
        var n, a = L;
        (r ? !re.echoes || $t++ && e === L : !$t || --$t && e === L) || queueMicrotask(r ? function(s) {
          ++jt, re.echoes && --re.echoes != 0 || (re.echoes = re.awaits = re.id = 0), Ct.push(L), Te(s, !0);
        }.bind(null, e) : ia), e !== L && (L = e, a === Ne && (Ne.env = an()), ur && (n = Ne.env.Promise, r = e.env, (a.global || e.global) && (Object.defineProperty(b, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any && (n.any = r.any))));
      }
      function an() {
        var e = b.Promise;
        return ur ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(b, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ue(e, r, n, a, s) {
        var c = L;
        try {
          return Te(e, !0), r(n, a, s);
        } finally {
          Te(c, !1);
        }
      }
      function sn(e, r, n, a) {
        return typeof e != "function" ? e : function() {
          var s = L;
          n && et(), Te(r, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Te(s, !1), a && queueMicrotask(Ie);
          }
        };
      }
      function mr(e) {
        Promise === Ke && re.echoes === 0 ? $t === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + he).indexOf("[native code]") === -1 && (et = Ie = X);
      var q = M.reject, We = "￿", Se = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", on = "String expected.", tt = [], Mt = "__dbnames", yr = "readonly", br = "readwrite";
      function Fe(e, r) {
        return e ? r ? function() {
          return e.apply(this, arguments) && r.apply(this, arguments);
        } : e : r;
      }
      var cn = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Kt(e) {
        return typeof e != "string" || /\./.test(e) ? function(r) {
          return r;
        } : function(r) {
          return r[e] === void 0 && e in r && delete (r = $e(r))[e], r;
        };
      }
      function un() {
        throw B.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function V(e, r) {
        try {
          var n = ln(e), a = ln(r);
          if (n !== a) return n === "Array" ? 1 : a === "Array" ? -1 : n === "binary" ? 1 : a === "binary" ? -1 : n === "string" ? 1 : a === "string" ? -1 : n === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return r < e ? 1 : e < r ? -1 : 0;
            case "binary":
              return (function(s, c) {
                for (var u = s.length, d = c.length, p = u < d ? u : d, m = 0; m < p; ++m) if (s[m] !== c[m]) return s[m] < c[m] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              })(dn(e), dn(r));
            case "Array":
              return (function(s, c) {
                for (var u = s.length, d = c.length, p = u < d ? u : d, m = 0; m < p; ++m) {
                  var w = V(s[m], c[m]);
                  if (w !== 0) return w;
                }
                return u === d ? 0 : u < d ? -1 : 1;
              })(e, r);
          }
        } catch {
        }
        return NaN;
      }
      function ln(e) {
        var r = typeof e;
        return r != "object" ? r : ArrayBuffer.isView(e) ? "binary" : (e = ar(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function dn(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Lt(e, r, n) {
        var a = e.schema.yProps;
        return a ? (r && 0 < n.numFailures && (r = r.filter(function(s, c) {
          return !n.failures[c];
        })), Promise.all(a.map(function(s) {
          return s = s.updatesTable, r ? e.db.table(s).where("k").anyOf(r).delete() : e.db.table(s).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var pt = (hn.prototype.execute = function(e) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var n = r.add;
          if (T(n)) return g(g([], T(e) ? e : [], !0), n).sort();
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
          if (T(a)) return T(e) ? e.filter(function(s) {
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
      }, hn);
      function hn(e) {
        this["@@propmod"] = e;
      }
      function fn(e, r) {
        for (var n = I(r), a = n.length, s = !1, c = 0; c < a; ++c) {
          var u = n[c], d = r[u], p = Ee(e, u);
          d instanceof pt ? (ue(e, u, d.execute(p)), s = !0) : p !== d && (ue(e, u, d), s = !0);
        }
        return s;
      }
      var gn = (Q.prototype._trans = function(e, r, n) {
        var a = this._tx || L.trans, s = this.name, c = ye && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(m, w, h) {
          if (!h.schema[s]) throw new B.NotFound("Table " + s + " not part of transaction");
          return r(h.idbtrans, h);
        }
        var d = Ze();
        try {
          var p = a && a.db._novip === this.db._novip ? a === L.trans ? a._promise(e, u, n) : De(function() {
            return a._promise(e, u, n);
          }, { trans: a, transless: L.transless || L }) : (function m(w, h, O, y) {
            if (w.idbdb && (w._state.openComplete || L.letThrough || w._vip)) {
              var v = w._createTransaction(h, O, w._dbSchema);
              try {
                v.create(), w._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === ir.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return m(w, h, O, y);
                })) : q(E);
              }
              return v._promise(h, function(E, S) {
                return De(function() {
                  return L.trans = v, y(E, S, v);
                });
              }).then(function(E) {
                if (h === "readwrite") try {
                  v.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? E : v._completion.then(function() {
                  return E;
                });
              });
            }
            if (w._state.openComplete) return q(new B.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return q(new B.DatabaseClosed());
              w.open().catch(X);
            }
            return w._state.dbReadyPromise.then(function() {
              return m(w, h, O, y);
            });
          })(this.db, e, [this.name], u);
          return c && (p._consoleTask = c, p = p.catch(function(m) {
            return console.trace(m), q(m);
          })), p;
        } finally {
          d && qe();
        }
      }, Q.prototype.get = function(e, r) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(r) : e == null ? q(new B.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return n.core.get({ trans: a, key: e }).then(function(s) {
            return n.hook.reading.fire(s);
          });
        }).then(r);
      }, Q.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (T(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var r = I(e);
        if (r.length === 1) return this.where(r[0]).equals(e[r[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && r.every(function(m) {
            return 0 <= d.keyPath.indexOf(m);
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
        !n && ye && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, p) {
          return V(d, p) === 0;
        }
        var u = r.reduce(function(h, p) {
          var m = h[0], w = h[1], h = a[p], O = e[p];
          return [m || h, m || !h ? Fe(w, h && h.multi ? function(y) {
            return y = Ee(y, p), T(y) && y.some(function(v) {
              return s(O, v);
            });
          } : function(y) {
            return s(O, Ee(y, p));
          }) : w];
        }, [null, null]), c = u[0], u = u[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(u) : n ? this.filter(u) : this.where(r).equals("");
      }, Q.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Q.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Q.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Q.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Q.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Q.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Q.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Q.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, T(e) ? "[".concat(e.join("+"), "]") : e));
      }, Q.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Q.prototype.mapToClass = function(e) {
        var r, n = this.db, a = this.name;
        function s() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof un && ((function(p, m) {
          if (typeof m != "function" && m !== null) throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
          function w() {
            this.constructor = p;
          }
          i(p, m), p.prototype = m === null ? Object.create(m) : (w.prototype = m.prototype, new w());
        })(s, r = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), u = e.prototype; u; u = me(u)) Object.getOwnPropertyNames(u).forEach(function(p) {
          return c.add(p);
        });
        function d(p) {
          if (!p) return p;
          var m, w = Object.create(e.prototype);
          for (m in p) if (!c.has(m)) try {
            w[m] = p[m];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, Q.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          te(this, e);
        });
      }, Q.prototype.add = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, c = a.keyPath, u = e;
        return c && s && (u = Kt(c)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: r != null ? [r] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? M.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            ue(e, c, d);
          } catch {
          }
          return d;
        });
      }, Q.prototype.upsert = function(e, r) {
        var n = this, a = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(s) {
          return n.core.get({ trans: s, key: e }).then(function(c) {
            var u = c ?? {};
            return fn(u, r), a && ue(u, a, e), n.core.mutate({ trans: s, type: "put", values: [u], keys: [e], upsert: !0, updates: { keys: [e], changeSpecs: [r] } }).then(function(d) {
              return d.numFailures ? M.reject(d.failures[0]) : !!c;
            });
          });
        });
      }, Q.prototype.update = function(e, r) {
        return typeof e != "object" || T(e) ? this.where(":id").equals(e).modify(r) : (e = Ee(e, this.schema.primKey.keyPath), e === void 0 ? q(new B.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(r));
      }, Q.prototype.put = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, c = a.keyPath, u = e;
        return c && s && (u = Kt(c)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [u], keys: r != null ? [r] : null });
        }).then(function(d) {
          return d.numFailures ? M.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            ue(e, c, d);
          } catch {
          }
          return d;
        });
      }, Q.prototype.delete = function(e) {
        var r = this;
        return this._trans("readwrite", function(n) {
          return r.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(a) {
            return Lt(r, [e], a);
          }).then(function(a) {
            return a.numFailures ? M.reject(a.failures[0]) : void 0;
          });
        });
      }, Q.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(r) {
          return e.core.mutate({ trans: r, type: "deleteRange", range: cn }).then(function(n) {
            return Lt(e, null, n);
          });
        }).then(function(r) {
          return r.numFailures ? M.reject(r.failures[0]) : void 0;
        });
      }, Q.prototype.bulkGet = function(e) {
        var r = this;
        return this._trans("readonly", function(n) {
          return r.core.getMany({ keys: e, trans: n }).then(function(a) {
            return a.map(function(s) {
              return r.hook.reading.fire(s);
            });
          });
        });
      }, Q.prototype.bulkAdd = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, c = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new B.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, m = m && d ? e.map(Kt(m)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: m, wantResults: c }).then(function(v) {
            var h = v.numFailures, O = v.results, y = v.lastResult, v = v.failures;
            if (h === 0) return c ? O : y;
            throw new Je("".concat(a.name, ".bulkAdd(): ").concat(h, " of ").concat(p, " operations failed"), v);
          });
        });
      }, Q.prototype.bulkPut = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, c = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new B.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, m = m && d ? e.map(Kt(m)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: m, wantResults: c }).then(function(v) {
            var h = v.numFailures, O = v.results, y = v.lastResult, v = v.failures;
            if (h === 0) return c ? O : y;
            throw new Je("".concat(a.name, ".bulkPut(): ").concat(h, " of ").concat(p, " operations failed"), v);
          });
        });
      }, Q.prototype.bulkUpdate = function(e) {
        var r = this, n = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), c = [];
        return this._trans("readwrite", function(u) {
          return n.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
            var p = [], m = [];
            e.forEach(function(h, O) {
              var y = h.key, v = h.changes, E = d[O];
              if (E) {
                for (var S = 0, A = Object.keys(v); S < A.length; S++) {
                  var P = A[S], N = v[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (V(N, y) !== 0) throw new B.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ue(E, P, N);
                }
                c.push(O), p.push(y), m.push(E);
              }
            });
            var w = p.length;
            return n.mutate({ trans: u, type: "put", keys: p, values: m, updates: { keys: a, changeSpecs: s } }).then(function(h) {
              var O = h.numFailures, y = h.failures;
              if (O === 0) return w;
              for (var v = 0, E = Object.keys(y); v < E.length; v++) {
                var S, A = E[v], P = c[Number(A)];
                P != null && (S = y[A], delete y[A], y[P] = S);
              }
              throw new Je("".concat(r.name, ".bulkUpdate(): ").concat(O, " of ").concat(w, " operations failed"), y);
            });
          });
        });
      }, Q.prototype.bulkDelete = function(e) {
        var r = this, n = e.length;
        return this._trans("readwrite", function(a) {
          return r.core.mutate({ trans: a, type: "delete", keys: e }).then(function(s) {
            return Lt(r, e, s);
          });
        }).then(function(u) {
          var s = u.numFailures, c = u.lastResult, u = u.failures;
          if (s === 0) return c;
          throw new Je("".concat(r.name, ".bulkDelete(): ").concat(s, " of ").concat(n, " operations failed"), u);
        });
      }, Q);
      function Q() {
      }
      function mt(e) {
        function r(u, d) {
          if (d) {
            for (var p = arguments.length, m = new Array(p - 1); --p; ) m[p - 1] = arguments[p];
            return n[u].subscribe.apply(null, m), e;
          }
          if (typeof u == "string") return n[u];
        }
        var n = {};
        r.addEventType = c;
        for (var a = 1, s = arguments.length; a < s; ++a) c(arguments[a]);
        return r;
        function c(u, d, p) {
          if (typeof u != "object") {
            var m;
            d = d || ra;
            var w = { subscribers: [], fire: p = p || X, subscribe: function(h) {
              w.subscribers.indexOf(h) === -1 && (w.subscribers.push(h), w.fire = d(w.fire, h));
            }, unsubscribe: function(h) {
              w.subscribers = w.subscribers.filter(function(O) {
                return O !== h;
              }), w.fire = w.subscribers.reduce(d, p);
            } };
            return n[u] = r[u] = w;
          }
          I(m = u).forEach(function(h) {
            var O = m[h];
            if (T(O)) c(h, m[h][0], m[h][1]);
            else {
              if (O !== "asap") throw new B.InvalidArgument("Invalid event config");
              var y = c(h, lt, function() {
                for (var v = arguments.length, E = new Array(v); v--; ) E[v] = arguments[v];
                y.subscribers.forEach(function(S) {
                  Yr(function() {
                    S.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function yt(e, r) {
        return Ye(r).from({ prototype: e }), r;
      }
      function rt(e, r) {
        return !(e.filter || e.algorithm || e.or) && (r ? e.justLimit : !e.replayFilter);
      }
      function vr(e, r) {
        e.filter = Fe(e.filter, r);
      }
      function Er(e, r, n) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Fe(a(), r());
        } : r, e.justLimit = n && !a;
      }
      function Bt(e, r) {
        if (e.isPrimKey) return r.primaryKey;
        var n = r.getIndexByKeyPath(e.index);
        if (!n) throw new B.Schema("KeyPath " + e.index + " on object store " + r.name + " is not indexed");
        return n;
      }
      function pn(e, r, n) {
        var a = Bt(e, r.schema);
        return r.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Ut(e, r, n, a) {
        var s = e.replayFilter ? Fe(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, u = function(d, p, m) {
            var w, h;
            s && !s(p, m, function(O) {
              return p.stop(O);
            }, function(O) {
              return p.fail(O);
            }) || ((h = "" + (w = p.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(w)), ae(c, h) || (c[h] = !0, r(d, p, m)));
          };
          return Promise.all([e.or._iterate(u, n), mn(pn(e, a, n), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return mn(pn(e, a, n), Fe(e.algorithm, s), r, !e.keysOnly && e.valueMapper);
      }
      function mn(e, r, n, a) {
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
              c.stop(d), u = X;
            }, function(d) {
              c.fail(d), u = X;
            }) || s(c.value, c, function(d) {
              return u = d;
            }), u();
          });
        });
      }
      var ca = (z.prototype._read = function(e, r) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, q.bind(null, n.error)) : n.table._trans("readonly", e).then(r);
      }, z.prototype._write = function(e) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, q.bind(null, r.error)) : r.table._trans("readwrite", e, "locked");
      }, z.prototype._addAlgorithm = function(e) {
        var r = this._ctx;
        r.algorithm = Fe(r.algorithm, e);
      }, z.prototype._iterate = function(e, r) {
        return Ut(this._ctx, e, r, this._ctx.table.core);
      }, z.prototype.clone = function(e) {
        var r = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && te(n, e), r._ctx = n, r;
      }, z.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, z.prototype.each = function(e) {
        var r = this._ctx;
        return this._read(function(n) {
          return Ut(r, e, n, r.table.core);
        });
      }, z.prototype.count = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx, s = a.table.core;
          if (rt(a, !0)) return s.count({ trans: n, query: { index: Bt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var c = 0;
          return Ut(a, function() {
            return ++c, !1;
          }, n, s).then(function() {
            return c;
          });
        }).then(e);
      }, z.prototype.sortBy = function(e, r) {
        var n = e.split(".").reverse(), a = n[0], s = n.length - 1;
        function c(p, m) {
          return m ? c(p[n[m]], m - 1) : p[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(p, m) {
          return V(c(p, s), c(m, s)) * u;
        }
        return this.toArray(function(p) {
          return p.sort(d);
        }).then(r);
      }, z.prototype.toArray = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx;
          if (a.dir === "next" && rt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, c = Bt(a, a.table.core.schema);
            return a.table.core.query({ trans: n, limit: a.limit, values: !0, query: { index: c, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Ut(a, function(d) {
            return u.push(d);
          }, n, a.table.core).then(function() {
            return u;
          });
        }, e);
      }, z.prototype.offset = function(e) {
        var r = this._ctx;
        return e <= 0 || (r.offset += e, rt(r) ? Er(r, function() {
          var n = e;
          return function(a, s) {
            return n === 0 || (n === 1 ? --n : s(function() {
              a.advance(n), n = 0;
            }), !1);
          };
        }) : Er(r, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, z.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Er(this._ctx, function() {
          var r = e;
          return function(n, a, s) {
            return --r <= 0 && a(s), 0 <= r;
          };
        }, !0), this;
      }, z.prototype.until = function(e, r) {
        return vr(this._ctx, function(n, a, s) {
          return !e(n.value) || (a(s), r);
        }), this;
      }, z.prototype.first = function(e) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(e);
      }, z.prototype.last = function(e) {
        return this.reverse().first(e);
      }, z.prototype.filter = function(e) {
        var r;
        return vr(this._ctx, function(n) {
          return e(n.value);
        }), (r = this._ctx).isMatch = Fe(r.isMatch, e), this;
      }, z.prototype.and = function(e) {
        return this.filter(e);
      }, z.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, z.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, z.prototype.desc = function() {
        return this.reverse();
      }, z.prototype.eachKey = function(e) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(n, a) {
          e(a.key, a);
        });
      }, z.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, z.prototype.eachPrimaryKey = function(e) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(n, a) {
          e(a.primaryKey, a);
        });
      }, z.prototype.keys = function(e) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var n = [];
        return this.each(function(a, s) {
          n.push(s.key);
        }).then(function() {
          return n;
        }).then(e);
      }, z.prototype.primaryKeys = function(e) {
        var r = this._ctx;
        if (r.dir === "next" && rt(r, !0) && 0 < r.limit) return this._read(function(a) {
          var s = Bt(r, r.table.core.schema);
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
      }, z.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, z.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(e);
      }, z.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, z.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var r = {};
        return vr(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = ae(r, a);
          return r[a] = !0, !s;
        }), this;
      }, z.prototype.modify = function(e) {
        var r = this, n = this._ctx;
        return this._write(function(a) {
          var s = typeof e == "function" ? e : function(E) {
            return fn(E, e);
          }, c = n.table.core, m = c.schema.primaryKey, u = m.outbound, d = m.extractKey, p = 200, m = r.db._options.modifyChunkSize;
          m && (p = typeof m == "object" ? m[c.name] || m["*"] || 200 : m);
          function w(E, P) {
            var A = P.failures, P = P.numFailures;
            O += E - P;
            for (var N = 0, D = I(A); N < D.length; N++) {
              var x = D[N];
              h.push(A[x]);
            }
          }
          var h = [], O = 0, y = [], v = e === yn;
          return r.clone().primaryKeys().then(function(E) {
            function S(P) {
              var N = Math.min(p, E.length - P), D = E.slice(P, P + N);
              return (v ? Promise.resolve([]) : c.getMany({ trans: a, keys: D, cache: "immutable" })).then(function(x) {
                var $ = [], R = [], k = u ? [] : null, j = v ? D : [];
                if (!v) for (var C = 0; C < N; ++C) {
                  var K = x[C], W = { value: $e(K), primKey: E[P + C] };
                  s.call(W, W.value, W) !== !1 && (W.value == null ? j.push(E[P + C]) : u || V(d(K), d(W.value)) === 0 ? (R.push(W.value), u && k.push(E[P + C])) : (j.push(E[P + C]), $.push(W.value)));
                }
                return Promise.resolve(0 < $.length && c.mutate({ trans: a, type: "add", values: $ }).then(function(F) {
                  for (var H in F.failures) j.splice(parseInt(H), 1);
                  w($.length, F);
                })).then(function() {
                  return (0 < R.length || A && typeof e == "object") && c.mutate({ trans: a, type: "put", keys: k, values: R, criteria: A, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < P }).then(function(F) {
                    return w(R.length, F);
                  });
                }).then(function() {
                  return (0 < j.length || A && v) && c.mutate({ trans: a, type: "delete", keys: j, criteria: A, isAdditionalChunk: 0 < P }).then(function(F) {
                    return Lt(n.table, j, F);
                  }).then(function(F) {
                    return w(j.length, F);
                  });
                }).then(function() {
                  return E.length > P + N && S(P + p);
                });
              });
            }
            var A = rt(n) && n.limit === 1 / 0 && (typeof e != "function" || v) && { index: n.index, range: n.range };
            return S(0).then(function() {
              if (0 < h.length) throw new Dt("Error modifying one or more objects", h, O, y);
              return E.length;
            });
          });
        });
      }, z.prototype.delete = function() {
        var e = this._ctx, r = e.range;
        return !rt(e) || e.table.schema.yProps || !e.isPrimKey && r.type !== 3 ? this.modify(yn) : this._write(function(n) {
          var a = e.table.core.schema.primaryKey, s = r;
          return e.table.core.count({ trans: n, query: { index: a, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: s }).then(function(p) {
              var d = p.failures, p = p.numFailures;
              if (p) throw new Dt("Could not delete some values", Object.keys(d).map(function(m) {
                return d[m];
              }), c - p);
              return c - p;
            });
          });
        });
      }, z);
      function z() {
      }
      var yn = function(e, r) {
        return r.value = null;
      };
      function ua(e, r) {
        return e < r ? -1 : e === r ? 0 : 1;
      }
      function la(e, r) {
        return r < e ? -1 : e === r ? 0 : 1;
      }
      function le(e, r, n) {
        return e = e instanceof vn ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(r), e;
      }
      function nt(e) {
        return new e.Collection(e, function() {
          return bn("");
        }).limit(0);
      }
      function Wt(e, r, n, a) {
        var s, c, u, d, p, m, w, h = n.length;
        if (!n.every(function(v) {
          return typeof v == "string";
        })) return le(e, on);
        function O(v) {
          s = v === "next" ? function(S) {
            return S.toUpperCase();
          } : function(S) {
            return S.toLowerCase();
          }, c = v === "next" ? function(S) {
            return S.toLowerCase();
          } : function(S) {
            return S.toUpperCase();
          }, u = v === "next" ? ua : la;
          var E = n.map(function(S) {
            return { lower: c(S), upper: s(S) };
          }).sort(function(S, A) {
            return u(S.lower, A.lower);
          });
          d = E.map(function(S) {
            return S.upper;
          }), p = E.map(function(S) {
            return S.lower;
          }), w = (m = v) === "next" ? "" : a;
        }
        O("next"), e = new e.Collection(e, function() {
          return Re(d[0], p[h - 1] + a);
        }), e._ondirectionchange = function(v) {
          O(v);
        };
        var y = 0;
        return e._addAlgorithm(function(v, E, S) {
          var A = v.key;
          if (typeof A != "string") return !1;
          var P = c(A);
          if (r(P, p, y)) return !0;
          for (var N = null, D = y; D < h; ++D) {
            var x = (function($, R, k, j, C, K) {
              for (var W = Math.min($.length, j.length), F = -1, H = 0; H < W; ++H) {
                var de = R[H];
                if (de !== j[H]) return C($[H], k[H]) < 0 ? $.substr(0, H) + k[H] + k.substr(H + 1) : C($[H], j[H]) < 0 ? $.substr(0, H) + j[H] + k.substr(H + 1) : 0 <= F ? $.substr(0, F) + R[F] + k.substr(F + 1) : null;
                C($[H], de) < 0 && (F = H);
              }
              return W < j.length && K === "next" ? $ + k.substr($.length) : W < $.length && K === "prev" ? $.substr(0, k.length) : F < 0 ? null : $.substr(0, F) + j[F] + k.substr(F + 1);
            })(A, P, d[D], p[D], u, m);
            x === null && N === null ? y = D + 1 : (N === null || 0 < u(N, x)) && (N = x);
          }
          return E(N !== null ? function() {
            v.continue(N + w);
          } : S), !1;
        }), e;
      }
      function Re(e, r, n, a) {
        return { type: 2, lower: e, upper: r, lowerOpen: n, upperOpen: a };
      }
      function bn(e) {
        return { type: 1, lower: e, upper: e };
      }
      var vn = (Object.defineProperty(ne.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ne.prototype.between = function(e, r, n, a) {
        n = n !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, r) || this._cmp(e, r) === 0 && (n || a) && (!n || !a) ? nt(this) : new this.Collection(this, function() {
            return Re(e, r, !n, !a);
          });
        } catch {
          return le(this, Se);
        }
      }, ne.prototype.equals = function(e) {
        return e == null ? le(this, Se) : new this.Collection(this, function() {
          return bn(e);
        });
      }, ne.prototype.above = function(e) {
        return e == null ? le(this, Se) : new this.Collection(this, function() {
          return Re(e, void 0, !0);
        });
      }, ne.prototype.aboveOrEqual = function(e) {
        return e == null ? le(this, Se) : new this.Collection(this, function() {
          return Re(e, void 0, !1);
        });
      }, ne.prototype.below = function(e) {
        return e == null ? le(this, Se) : new this.Collection(this, function() {
          return Re(void 0, e, !1, !0);
        });
      }, ne.prototype.belowOrEqual = function(e) {
        return e == null ? le(this, Se) : new this.Collection(this, function() {
          return Re(void 0, e);
        });
      }, ne.prototype.startsWith = function(e) {
        return typeof e != "string" ? le(this, on) : this.between(e, e + We, !0, !0);
      }, ne.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Wt(this, function(r, n) {
          return r.indexOf(n[0]) === 0;
        }, [e], We);
      }, ne.prototype.equalsIgnoreCase = function(e) {
        return Wt(this, function(r, n) {
          return r === n[0];
        }, [e], "");
      }, ne.prototype.anyOfIgnoreCase = function() {
        var e = we.apply(Xe, arguments);
        return e.length === 0 ? nt(this) : Wt(this, function(r, n) {
          return n.indexOf(r) !== -1;
        }, e, "");
      }, ne.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = we.apply(Xe, arguments);
        return e.length === 0 ? nt(this) : Wt(this, function(r, n) {
          return n.some(function(a) {
            return r.indexOf(a) === 0;
          });
        }, e, We);
      }, ne.prototype.anyOf = function() {
        var e = this, r = we.apply(Xe, arguments), n = this._cmp;
        try {
          r.sort(n);
        } catch {
          return le(this, Se);
        }
        if (r.length === 0) return nt(this);
        var a = new this.Collection(this, function() {
          return Re(r[0], r[r.length - 1]);
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
      }, ne.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ne.prototype.noneOf = function() {
        var e = we.apply(Xe, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return le(this, Se);
        }
        var r = e.reduce(function(n, a) {
          return n ? n.concat([[n[n.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return r.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, ne.prototype.inAnyRange = function(A, r) {
        var n = this, a = this._cmp, s = this._ascending, c = this._descending, u = this._min, d = this._max;
        if (A.length === 0) return nt(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return le(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", B.InvalidArgument);
        var p = !r || r.includeLowers !== !1, m = r && r.includeUppers === !0, w, h = s;
        function O(P, N) {
          return h(P[0], N[0]);
        }
        try {
          (w = A.reduce(function(P, N) {
            for (var D = 0, x = P.length; D < x; ++D) {
              var $ = P[D];
              if (a(N[0], $[1]) < 0 && 0 < a(N[1], $[0])) {
                $[0] = u($[0], N[0]), $[1] = d($[1], N[1]);
                break;
              }
            }
            return D === x && P.push(N), P;
          }, [])).sort(O);
        } catch {
          return le(this, Se);
        }
        var y = 0, v = m ? function(P) {
          return 0 < s(P, w[y][1]);
        } : function(P) {
          return 0 <= s(P, w[y][1]);
        }, E = p ? function(P) {
          return 0 < c(P, w[y][0]);
        } : function(P) {
          return 0 <= c(P, w[y][0]);
        }, S = v, A = new this.Collection(this, function() {
          return Re(w[0][0], w[w.length - 1][1], !p, !m);
        });
        return A._ondirectionchange = function(P) {
          h = P === "next" ? (S = v, s) : (S = E, c), w.sort(O);
        }, A._addAlgorithm(function(P, N, D) {
          for (var x, $ = P.key; S($); ) if (++y === w.length) return N(D), !1;
          return !v(x = $) && !E(x) || (n._cmp($, w[y][1]) === 0 || n._cmp($, w[y][0]) === 0 || N(function() {
            h === s ? P.continue(w[y][0]) : P.continue(w[y][1]);
          }), !1);
        }), A;
      }, ne.prototype.startsWithAnyOf = function() {
        var e = we.apply(Xe, arguments);
        return e.every(function(r) {
          return typeof r == "string";
        }) ? e.length === 0 ? nt(this) : this.inAnyRange(e.map(function(r) {
          return [r, r + We];
        })) : le(this, "startsWithAnyOf() only works with strings");
      }, ne);
      function ne() {
      }
      function be(e) {
        return Z(function(r) {
          return bt(r), e(r.target.error), !1;
        });
      }
      function bt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var vt = "storagemutated", wr = "x-storagemutated-1", xe = mt(null, vt), da = (ve.prototype._lock = function() {
        return ct(!L.global), ++this._reculock, this._reculock !== 1 || L.global || (L.lockOwnerFor = this), this;
      }, ve.prototype._unlock = function() {
        if (ct(!L.global), --this._reculock == 0) for (L.global || (L.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ue(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, ve.prototype._locked = function() {
        return this._reculock && L.lockOwnerFor !== this;
      }, ve.prototype.create = function(e) {
        var r = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ct(!this.idbtrans), !e && !n) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new B.DatabaseClosed(a);
          case "MissingAPIError":
            throw new B.MissingAPI(a.message, a);
          default:
            throw new B.OpenFailed(a);
        }
        if (!this.active) throw new B.TransactionInactive();
        return ct(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Z(function(s) {
          bt(s), r._reject(e.error);
        }), e.onabort = Z(function(s) {
          bt(s), r.active && r._reject(new B.Abort(e.error)), r.active = !1, r.on("abort").fire(s);
        }), e.oncomplete = Z(function() {
          r.active = !1, r._resolve(), "mutatedParts" in e && xe.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ve.prototype._promise = function(e, r, n) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return q(new B.ReadOnly("Transaction is readonly"));
        if (!this.active) return q(new B.TransactionInactive());
        if (this._locked()) return new M(function(c, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, r, n).then(c, u);
          }, L]);
        });
        if (n) return De(function() {
          var c = new M(function(u, d) {
            a._lock();
            var p = r(u, d, a);
            p && p.then && p.then(u, d);
          });
          return c.finally(function() {
            return a._unlock();
          }), c._lib = !0, c;
        });
        var s = new M(function(c, u) {
          var d = r(c, u, a);
          d && d.then && d.then(c, u);
        });
        return s._lib = !0, s;
      }, ve.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ve.prototype.waitFor = function(e) {
        var r, n = this._root(), a = M.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return a;
        }) : (n._waitingFor = a, n._waitingQueue = [], r = n.idbtrans.objectStore(n.storeNames[0]), (function c() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (r.get(-1 / 0).onsuccess = c);
        })());
        var s = n._waitingFor;
        return new M(function(c, u) {
          a.then(function(d) {
            return n._waitingQueue.push(Z(c.bind(null, d)));
          }, function(d) {
            return n._waitingQueue.push(Z(u.bind(null, d)));
          }).finally(function() {
            n._waitingFor === s && (n._waitingFor = null);
          });
        });
      }, ve.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new B.Abort()));
      }, ve.prototype.table = function(e) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (ae(r, e)) return r[e];
        var n = this.schema[e];
        if (!n) throw new B.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), r[e] = n;
      }, ve);
      function ve() {
      }
      function Sr(e, r, n, a, s, c, u, d) {
        return { name: e, keyPath: r, unique: n, multi: a, auto: s, compound: c, src: (n && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + En(r), type: d };
      }
      function En(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Or(e, r, n) {
        return { name: e, primKey: r, indexes: n, mappedClass: null, idxByName: (a = function(s) {
          return [s.name, s];
        }, n.reduce(function(s, c, u) {
          return u = a(c, u), u && (s[u[0]] = u[1]), s;
        }, {})) };
        var a;
      }
      var Et = function(e) {
        try {
          return e.only([[]]), Et = function() {
            return [[]];
          }, [[]];
        } catch {
          return Et = function() {
            return We;
          }, We;
        }
      };
      function _r(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (r = e).split(".").length === 1 ? function(n) {
          return n[r];
        } : function(n) {
          return Ee(n, r);
        } : function(n) {
          return Ee(n, e);
        };
        var r;
      }
      function wn(e) {
        return [].slice.call(e);
      }
      var ha = 0;
      function wt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function fa(e, r, p) {
        function a(S) {
          if (S.type === 3) return null;
          if (S.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var y = S.lower, v = S.upper, E = S.lowerOpen, S = S.upperOpen;
          return y === void 0 ? v === void 0 ? null : r.upperBound(v, !!S) : v === void 0 ? r.lowerBound(y, !!E) : r.bound(y, v, !!E, !!S);
        }
        function s(O) {
          var y, v = O.name;
          return { name: v, schema: O, mutate: function(E) {
            var S = E.trans, A = E.type, P = E.keys, N = E.values, D = E.range;
            return new Promise(function(x, $) {
              x = Z(x);
              var R = S.objectStore(v), k = R.keyPath == null, j = A === "put" || A === "add";
              if (!j && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var C, K = (P || N || { length: 1 }).length;
              if (P && N && P.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (K === 0) return x({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function W(ce) {
                ++de, bt(ce);
              }
              var F = [], H = [], de = 0;
              if (A === "deleteRange") {
                if (D.type === 4) return x({ numFailures: de, failures: H, results: [], lastResult: void 0 });
                D.type === 3 ? F.push(C = R.clear()) : F.push(C = R.delete(a(D)));
              } else {
                var k = j ? k ? [N, P] : [N, null] : [P, null], U = k[0], oe = k[1];
                if (j) for (var ie = 0; ie < K; ++ie) F.push(C = oe && oe[ie] !== void 0 ? R[A](U[ie], oe[ie]) : R[A](U[ie])), C.onerror = W;
                else for (ie = 0; ie < K; ++ie) F.push(C = R[A](U[ie])), C.onerror = W;
              }
              function tr(ce) {
                ce = ce.target.result, F.forEach(function(ze, Ur) {
                  return ze.error != null && (H[Ur] = ze.error);
                }), x({ numFailures: de, failures: H, results: A === "delete" ? P : F.map(function(ze) {
                  return ze.result;
                }), lastResult: ce });
              }
              C.onerror = function(ce) {
                W(ce), tr(ce);
              }, C.onsuccess = tr;
            });
          }, getMany: function(E) {
            var S = E.trans, A = E.keys;
            return new Promise(function(P, N) {
              P = Z(P);
              for (var D, x = S.objectStore(v), $ = A.length, R = new Array($), k = 0, j = 0, C = function(F) {
                F = F.target, R[F._pos] = F.result, ++j === k && P(R);
              }, K = be(N), W = 0; W < $; ++W) A[W] != null && ((D = x.get(A[W]))._pos = W, D.onsuccess = C, D.onerror = K, ++k);
              k === 0 && P(R);
            });
          }, get: function(E) {
            var S = E.trans, A = E.key;
            return new Promise(function(P, N) {
              P = Z(P);
              var D = S.objectStore(v).get(A);
              D.onsuccess = function(x) {
                return P(x.target.result);
              }, D.onerror = be(N);
            });
          }, query: (y = m, function(E) {
            return new Promise(function(S, A) {
              S = Z(S);
              var P, N, D, k = E.trans, x = E.values, $ = E.limit, C = E.query, R = $ === 1 / 0 ? void 0 : $, j = C.index, C = C.range, k = k.objectStore(v), j = j.isPrimaryKey ? k : k.index(j.name), C = a(C);
              if ($ === 0) return S({ result: [] });
              y ? ((R = x ? j.getAll(C, R) : j.getAllKeys(C, R)).onsuccess = function(K) {
                return S({ result: K.target.result });
              }, R.onerror = be(A)) : (P = 0, N = !x && "openKeyCursor" in j ? j.openKeyCursor(C) : j.openCursor(C), D = [], N.onsuccess = function(K) {
                var W = N.result;
                return W ? (D.push(x ? W.value : W.primaryKey), ++P === $ ? S({ result: D }) : void W.continue()) : S({ result: D });
              }, N.onerror = be(A));
            });
          }), openCursor: function(E) {
            var S = E.trans, A = E.values, P = E.query, N = E.reverse, D = E.unique;
            return new Promise(function(x, $) {
              x = Z(x);
              var j = P.index, R = P.range, k = S.objectStore(v), k = j.isPrimaryKey ? k : k.index(j.name), j = N ? D ? "prevunique" : "prev" : D ? "nextunique" : "next", C = !A && "openKeyCursor" in k ? k.openKeyCursor(a(R), j) : k.openCursor(a(R), j);
              C.onerror = be($), C.onsuccess = Z(function(K) {
                var W, F, H, de, U = C.result;
                U ? (U.___id = ++ha, U.done = !1, W = U.continue.bind(U), F = (F = U.continuePrimaryKey) && F.bind(U), H = U.advance.bind(U), de = function() {
                  throw new Error("Cursor not stopped");
                }, U.trans = S, U.stop = U.continue = U.continuePrimaryKey = U.advance = function() {
                  throw new Error("Cursor not started");
                }, U.fail = Z($), U.next = function() {
                  var oe = this, ie = 1;
                  return this.start(function() {
                    return ie-- ? oe.continue() : oe.stop();
                  }).then(function() {
                    return oe;
                  });
                }, U.start = function(oe) {
                  function ie() {
                    if (C.result) try {
                      oe();
                    } catch (ce) {
                      U.fail(ce);
                    }
                    else U.done = !0, U.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, U.stop();
                  }
                  var tr = new Promise(function(ce, ze) {
                    ce = Z(ce), C.onerror = be(ze), U.fail = ze, U.stop = function(Ur) {
                      U.stop = U.continue = U.continuePrimaryKey = U.advance = de, ce(Ur);
                    };
                  });
                  return C.onsuccess = Z(function(ce) {
                    C.onsuccess = ie, ie();
                  }), U.continue = W, U.continuePrimaryKey = F, U.advance = H, ie(), tr;
                }, x(U)) : x(null);
              }, $);
            });
          }, count: function(E) {
            var S = E.query, A = E.trans, P = S.index, N = S.range;
            return new Promise(function(D, x) {
              var $ = A.objectStore(v), R = P.isPrimaryKey ? $ : $.index(P.name), $ = a(N), R = $ ? R.count($) : R.count();
              R.onsuccess = Z(function(k) {
                return D(k.target.result);
              }), R.onerror = be(x);
            });
          } };
        }
        var c, u, d, w = (u = p, d = wn((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(O) {
          return u.objectStore(O);
        }).map(function(O) {
          var y = O.keyPath, S = O.autoIncrement, v = T(y), E = {}, S = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: y == null, compound: v, keyPath: y, autoIncrement: S, unique: !0, extractKey: _r(y) }, indexes: wn(O.indexNames).map(function(A) {
            return O.index(A);
          }).map(function(D) {
            var P = D.name, N = D.unique, x = D.multiEntry, D = D.keyPath, x = { name: P, compound: T(D), keyPath: D, unique: N, multiEntry: x, extractKey: _r(D) };
            return E[wt(D)] = x;
          }), getIndexByKeyPath: function(A) {
            return E[wt(A)];
          } };
          return E[":id"] = S.primaryKey, y != null && (E[wt(y)] = S.primaryKey), S;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), p = w.schema, m = w.hasGetAll, w = p.tables.map(s), h = {};
        return w.forEach(function(O) {
          return h[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!h[O]) throw new Error("Table '".concat(O, "' not found"));
          return h[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: Et(r), schema: p };
      }
      function ga(e, r, n, a) {
        var s = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (a = fa(r, s, a), e.dbcore.reduce(function(c, u) {
          return u = u.create, l(l({}, c), u(c));
        }, a)) };
      }
      function Ft(e, a) {
        var n = a.db, a = ga(e._middlewares, n, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(u) {
            return u.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Ht(e, r, n, a) {
        n.forEach(function(s) {
          var c = a[s];
          r.forEach(function(u) {
            var d = (function p(m, w) {
              return Hn(m, w) || (m = me(m)) && p(m, w);
            })(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Pe(u, s, { get: function() {
              return this.table(s);
            }, set: function(p) {
              it(this, s, { value: p, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, c));
          });
        });
      }
      function Ar(e, r) {
        r.forEach(function(n) {
          for (var a in n) n[a] instanceof e.Table && delete n[a];
        });
      }
      function pa(e, r) {
        return e._cfg.version - r._cfg.version;
      }
      function ma(e, r, n, a) {
        var s = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Or("$meta", On("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(n), c._completion.catch(a);
        var u = c._reject.bind(c), d = L.transless || L;
        De(function() {
          return L.trans = c, L.transless = d, r !== 0 ? (Ft(e, n), m = r, ((p = c).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(w) {
            return w ?? m;
          }) : M.resolve(m)).then(function(w) {
            return O = w, y = c, v = n, E = [], w = (h = e)._versions, S = h._dbSchema = zt(0, h.idbdb, v), (w = w.filter(function(A) {
              return A._cfg.version >= O;
            })).length !== 0 ? (w.forEach(function(A) {
              E.push(function() {
                var P = S, N = A._cfg.dbschema;
                Yt(h, P, v), Yt(h, N, v), S = h._dbSchema = N;
                var D = Pr(P, N);
                D.add.forEach(function(j) {
                  Nr(v, j[0], j[1].primKey, j[1].indexes);
                }), D.change.forEach(function(j) {
                  if (j.recreate) throw new B.Upgrade("Not yet support for changing primary key");
                  var C = v.objectStore(j.name);
                  j.add.forEach(function(K) {
                    return Vt(C, K);
                  }), j.change.forEach(function(K) {
                    C.deleteIndex(K.name), Vt(C, K);
                  }), j.del.forEach(function(K) {
                    return C.deleteIndex(K);
                  });
                });
                var x = A._cfg.contentUpgrade;
                if (x && A._cfg.version > O) {
                  Ft(h, v), y._memoizedTables = {};
                  var $ = Xr(N);
                  D.del.forEach(function(j) {
                    $[j] = P[j];
                  }), Ar(h, [h.Transaction.prototype]), Ht(h, [h.Transaction.prototype], I($), $), y.schema = $;
                  var R, k = or(x);
                  return k && et(), D = M.follow(function() {
                    var j;
                    (R = x(y)) && k && (j = Ie.bind(null, null), R.then(j, j));
                  }), R && typeof R.then == "function" ? M.resolve(R) : D.then(function() {
                    return R;
                  });
                }
              }), E.push(function(P) {
                var N, D, x = A._cfg.dbschema;
                N = x, D = P, [].slice.call(D.db.objectStoreNames).forEach(function($) {
                  return N[$] == null && D.db.deleteObjectStore($);
                }), Ar(h, [h.Transaction.prototype]), Ht(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), y.schema = h._dbSchema;
              }), E.push(function(P) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === A._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), (function A() {
              return E.length ? M.resolve(E.shift()(y.idbtrans)).then(A) : M.resolve();
            })().then(function() {
              Sn(S, v);
            })) : M.resolve();
            var h, O, y, v, E, S;
          }).catch(u)) : (I(s).forEach(function(w) {
            Nr(n, w, s[w].primKey, s[w].indexes);
          }), Ft(e, n), void M.follow(function() {
            return e.on.populate.fire(c);
          }).catch(u));
          var p, m;
        });
      }
      function ya(e, r) {
        Sn(e._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var n = zt(0, e.idbdb, r);
        Yt(e, e._dbSchema, r);
        for (var a = 0, s = Pr(n, e._dbSchema).change; a < s.length; a++) {
          var c = (function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = r.objectStore(u.name);
            u.add.forEach(function(p) {
              ye && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(p.src)), Vt(d, p);
            });
          })(s[a]);
          if (typeof c == "object") return c.value;
        }
      }
      function Pr(e, r) {
        var n, a = { del: [], add: [], change: [] };
        for (n in e) r[n] || a.del.push(n);
        for (n in r) {
          var s = e[n], c = r[n];
          if (s) {
            var u = { name: n, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) u.recreate = !0, a.change.push(u);
            else {
              var d = s.idxByName, p = c.idxByName, m = void 0;
              for (m in d) p[m] || u.del.push(m);
              for (m in p) {
                var w = d[m], h = p[m];
                w ? w.src !== h.src && u.change.push(h) : u.add.push(h);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && a.change.push(u);
            }
          } else a.add.push([n, c]);
        }
        return a;
      }
      function Nr(e, r, n, a) {
        var s = e.db.createObjectStore(r, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return a.forEach(function(c) {
          return Vt(s, c);
        }), s;
      }
      function Sn(e, r) {
        I(e).forEach(function(n) {
          r.db.objectStoreNames.contains(n) || (ye && console.debug("Dexie: Creating missing table", n), Nr(r, n, e[n].primKey, e[n].indexes));
        });
      }
      function Vt(e, r) {
        e.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function zt(e, r, n) {
        var a = {};
        return Nt(r.objectStoreNames, 0).forEach(function(s) {
          for (var c = n.objectStore(s), u = Sr(En(m = c.keyPath), m || "", !0, !1, !!c.autoIncrement, m && typeof m != "string", !0), d = [], p = 0; p < c.indexNames.length; ++p) {
            var w = c.index(c.indexNames[p]), m = w.keyPath, w = Sr(w.name, m, !!w.unique, !!w.multiEntry, !1, m && typeof m != "string", !1);
            d.push(w);
          }
          a[s] = Or(s, u, d);
        }), a;
      }
      function Yt(e, r, n) {
        for (var a = n.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var c = a[s], u = n.objectStore(c);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var p = u.indexNames[d], m = u.index(p).keyPath, w = typeof m == "string" ? m : "[" + Nt(m).join("+") + "]";
            !r[c] || (m = r[c].idxByName[w]) && (m.name = p, delete r[c].idxByName[w], r[c].idxByName[p] = m);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && b.WorkerGlobalScope && b instanceof b.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function On(e) {
        return e.split(",").map(function(r, n) {
          var c = r.split(":"), a = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (r = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Sr(s, c || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), T(c), n === 0, a);
        });
      }
      var ba = (at.prototype._createTableSchema = Or, at.prototype._parseIndexSyntax = On, at.prototype._parseStoresSpec = function(e, r) {
        var n = this;
        I(e).forEach(function(a) {
          if (e[a] !== null) {
            var s = n._parseIndexSyntax(e[a]), c = s.shift();
            if (!c) throw new B.Schema("Invalid schema for table " + a + ": " + e[a]);
            if (c.unique = !0, c.multi) throw new B.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(u) {
              if (u.auto) throw new B.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!u.keyPath) throw new B.Schema("Index must have a name and cannot be an empty string");
            }), s = n._createTableSchema(a, c, s), r[a] = s;
          }
        });
      }, at.prototype.stores = function(n) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? te(this._cfg.storesSource, n) : n;
        var n = r._versions, a = {}, s = {};
        return n.forEach(function(c) {
          te(a, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(a, s);
        }), r._dbSchema = s, Ar(r, [r._allTables, r, r.Transaction.prototype]), Ht(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], I(s), s), r._storeNames = I(s), this;
      }, at.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = cr(this._cfg.contentUpgrade || X, e), this;
      }, at);
      function at() {
      }
      function Dr(e, r) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Oe(Mt, { addons: [], indexedDB: e, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Ir(e) {
        return e && typeof e.databases == "function";
      }
      function Tr(e) {
        return De(function() {
          return L.letThrough = !0, e();
        });
      }
      function Rr(e) {
        return !("from" in e);
      }
      var se = function(e, r) {
        if (!this) {
          var n = new se();
          return e && "d" in e && te(n, e), n;
        }
        te(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? r : e } : { d: 0 });
      };
      function St(e, r, n) {
        var a = V(r, n);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Rr(e)) return te(e, { from: r, to: n, d: 1 });
          var s = e.l, a = e.r;
          if (V(n, e.from) < 0) return s ? St(s, r, n) : e.l = { from: r, to: n, d: 1, l: null, r: null }, An(e);
          if (0 < V(r, e.to)) return a ? St(a, r, n) : e.r = { from: r, to: n, d: 1, l: null, r: null }, An(e);
          V(r, e.from) < 0 && (e.from = r, e.l = null, e.d = a ? a.d + 1 : 1), 0 < V(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, s && !e.l && Ot(e, s), a && n && Ot(e, a);
        }
      }
      function Ot(e, r) {
        Rr(r) || (function n(a, p) {
          var c = p.from, u = p.to, d = p.l, p = p.r;
          St(a, c, u), d && n(a, d), p && n(a, p);
        })(e, r);
      }
      function _n(e, r) {
        var n = Xt(r), a = n.next();
        if (a.done) return !1;
        for (var s = a.value, c = Xt(e), u = c.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (V(d.from, s.to) <= 0 && 0 <= V(d.to, s.from)) return !0;
          V(s.from, d.from) < 0 ? s = (a = n.next(d.from)).value : d = (u = c.next(s.from)).value;
        }
        return !1;
      }
      function Xt(e) {
        var r = Rr(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var a = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, a) for (; r.n.l && V(n, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !a || V(n, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function An(e) {
        var r, n, a = (((r = e.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (r = s == "r" ? "l" : "r", n = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], n[s] = a[r], (e[r] = n).d = Pn(n)), e.d = Pn(e);
      }
      function Pn(n) {
        var r = n.r, n = n.l;
        return (r ? n ? Math.max(r.d, n.d) : r.d : n ? n.d : 0) + 1;
      }
      function Qt(e, r) {
        return I(r).forEach(function(n) {
          e[n] ? Ot(e[n], r[n]) : e[n] = (function a(s) {
            var c, u, d = {};
            for (c in s) ae(s, c) && (u = s[c], d[c] = !u || typeof u != "object" || Jr.has(u.constructor) ? u : a(u));
            return d;
          })(r[n]);
        }), e;
      }
      function xr(e, r) {
        return e.all || r.all || Object.keys(e).some(function(n) {
          return r[n] && _n(r[n], e[n]);
        });
      }
      ge(se.prototype, ((he = { add: function(e) {
        return Ot(this, e), this;
      }, addKey: function(e) {
        return St(this, e, e), this;
      }, addKeys: function(e) {
        var r = this;
        return e.forEach(function(n) {
          return St(r, n, n);
        }), this;
      }, hasKey: function(e) {
        var r = Xt(this).next(e).value;
        return r && V(r.from, e) <= 0 && 0 <= V(r.to, e);
      } })[sr] = function() {
        return Xt(this);
      }, he));
      var He = {}, kr = {}, Cr = !1;
      function Jt(e) {
        Qt(kr, e), Cr || (Cr = !0, setTimeout(function() {
          Cr = !1, $r(kr, !(kr = {}));
        }, 0));
      }
      function $r(e, r) {
        r === void 0 && (r = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(He); a < s.length; a++) Nn(u = s[a], e, n, r);
        else for (var c in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (u = He["idb://".concat(c, "/").concat(d)]) && Nn(u, e, n, r));
        }
        n.forEach(function(p) {
          return p();
        });
      }
      function Nn(e, r, n, a) {
        for (var s = [], c = 0, u = Object.entries(e.queries.query); c < u.length; c++) {
          for (var d = u[c], p = d[0], m = [], w = 0, h = d[1]; w < h.length; w++) {
            var O = h[w];
            xr(r, O.obsSet) ? O.subscribers.forEach(function(S) {
              return n.add(S);
            }) : a && m.push(O);
          }
          a && s.push([p, m]);
        }
        if (a) for (var y = 0, v = s; y < v.length; y++) {
          var E = v[y], p = E[0], m = E[1];
          e.queries.query[p] = m;
        }
      }
      function va(e) {
        var r = e._state, n = e._deps.indexedDB;
        if (r.isBeingOpened || e.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? q(r.dbOpenError) : e;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var a = r.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function u() {
          if (r.openCanceller !== a) throw new B.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new M(function(O, y) {
            if (u(), !n) throw new B.MissingAPI();
            var v = e.name, E = r.autoSchema || !s ? n.open(v) : n.open(v, s);
            if (!E) throw new B.MissingAPI();
            E.onerror = be(y), E.onblocked = Z(e._fireOnBlocked), E.onupgradeneeded = Z(function(S) {
              var A;
              w = E.transaction, r.autoSchema && !e._options.allowEmptyDB ? (E.onerror = bt, w.abort(), E.result.close(), (A = n.deleteDatabase(v)).onsuccess = A.onerror = Z(function() {
                y(new B.NoSuchDatabase("Database ".concat(v, " doesnt exist")));
              })) : (w.onerror = be(y), S = S.oldVersion > Math.pow(2, 62) ? 0 : S.oldVersion, h = S < 1, e.idbdb = E.result, c && ya(e, w), ma(e, S / 10, w, y));
            }, y), E.onsuccess = Z(function() {
              w = null;
              var S, A, P, N, D, x = e.idbdb = E.result, $ = Nt(x.objectStoreNames);
              if (0 < $.length) try {
                var R = x.transaction((N = $).length === 1 ? N[0] : N, "readonly");
                if (r.autoSchema) A = x, P = R, (S = e).verno = A.version / 10, P = S._dbSchema = zt(0, A, P), S._storeNames = Nt(A.objectStoreNames, 0), Ht(S, [S._allTables], I(P), P);
                else if (Yt(e, e._dbSchema, R), ((D = Pr(zt(0, (D = e).idbdb, R), D._dbSchema)).add.length || D.change.some(function(k) {
                  return k.add.length || k.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), x.close(), s = x.version + 1, c = !0, O(d());
                Ft(e, R);
              } catch {
              }
              tt.push(e), x.onversionchange = Z(function(k) {
                r.vcFired = !0, e.on("versionchange").fire(k);
              }), x.onclose = Z(function() {
                e.close({ disableAutoOpen: !1 });
              }), h && (D = e._deps, R = v, x = D.indexedDB, D = D.IDBKeyRange, Ir(x) || R === Mt || Dr(x, D).put({ name: R }).catch(X)), O();
            }, y);
          }).catch(function(O) {
            switch (O?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return M.reject(O);
          });
        }
        var p, m = r.dbReadyResolve, w = null, h = !1;
        return M.race([a, (typeof navigator > "u" ? M.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function y() {
            return indexedDB.databases().finally(O);
          }
          p = setInterval(y, 100), y();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), r.onReadyBeingFired = [], M.resolve(Tr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < r.onReadyBeingFired.length) {
              var y = r.onReadyBeingFired.reduce(cr, X);
              return r.onReadyBeingFired = [], M.resolve(Tr(function() {
                return y(e.vip);
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
          r.openComplete = !0, m();
        }).then(function() {
          var O;
          return h && (O = {}, e.tables.forEach(function(y) {
            y.schema.indexes.forEach(function(v) {
              v.name && (O["idb://".concat(e.name, "/").concat(y.name, "/").concat(v.name)] = new se(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(y.name, "/")] = O["idb://".concat(e.name, "/").concat(y.name, "/:dels")] = new se(-1 / 0, [[[]]]);
          }), xe(vt).fire(O), $r(O, !0)), e;
        });
      }
      function jr(e) {
        function r(c) {
          return e.next(c);
        }
        var n = s(r), a = s(function(c) {
          return e.throw(c);
        });
        function s(c) {
          return function(p) {
            var d = c(p), p = d.value;
            return d.done ? p : p && typeof p.then == "function" ? p.then(n, a) : T(p) ? Promise.all(p).then(n, a) : n(p);
          };
        }
        return s(r)();
      }
      function Zt(e, r, n) {
        for (var a = T(e) ? e.slice() : [e], s = 0; s < n; ++s) a.push(r);
        return a;
      }
      var Ea = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema, s = {}, c = [];
          function u(h, O, y) {
            var v = wt(h), E = s[v] = s[v] || [], S = h == null ? 0 : typeof h == "string" ? 1 : h.length, A = 0 < O, A = l(l({}, y), { name: A ? "".concat(v, "(virtual-from:").concat(y.name, ")") : y.name, lowLevelIndex: y, isVirtual: A, keyTail: O, keyLength: S, extractKey: _r(h), unique: !A && y.unique });
            return E.push(A), A.isPrimaryKey || c.push(A), 1 < S && u(S === 2 ? h[0] : h.slice(0, S - 1), O + 1, y), E.sort(function(P, N) {
              return P.keyTail - N.keyTail;
            }), A;
          }
          r = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [r];
          for (var d = 0, p = a.indexes; d < p.length; d++) {
            var m = p[d];
            u(m.keyPath, 0, m);
          }
          function w(h) {
            var O, y = h.query.index;
            return y.isVirtual ? l(l({}, h), { query: { index: y.lowLevelIndex, range: (O = h.query.range, y = y.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Zt(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, y), lowerOpen: !0, upper: Zt(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, y), upperOpen: !0 }) } }) : h;
          }
          return l(l({}, n), { schema: l(l({}, a), { primaryKey: r, indexes: c, getIndexByKeyPath: function(h) {
            return (h = s[wt(h)]) && h[0];
          } }), count: function(h) {
            return n.count(w(h));
          }, query: function(h) {
            return n.query(w(h));
          }, openCursor: function(h) {
            var O = h.query.index, y = O.keyTail, v = O.isVirtual, E = O.keyLength;
            return v ? n.openCursor(w(h)).then(function(A) {
              return A && S(A);
            }) : n.openCursor(h);
            function S(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Zt(P, h.reverse ? e.MAX_KEY : e.MIN_KEY, y)) : h.unique ? A.continue(A.key.slice(0, E).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, y)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, N) {
                A.continuePrimaryKey(Zt(P, e.MAX_KEY, y), N);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var P = A.key;
                return E === 1 ? P[0] : P.slice(0, E);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function Gr(e, r, n, a) {
        return n = n || {}, a = a || "", I(e).forEach(function(s) {
          var c, u, d;
          ae(r, s) ? (c = e[s], u = r[s], typeof c == "object" && typeof u == "object" && c && u ? (d = ar(c)) !== ar(u) ? n[a + s] = r[s] : d === "Object" ? Gr(c, u, n, a + s + ".") : c !== u && (n[a + s] = r[s]) : c !== u && (n[a + s] = r[s])) : n[a + s] = void 0;
        }), I(r).forEach(function(s) {
          ae(e, s) || (n[a + s] = r[s]);
        }), n;
      }
      function Mr(e, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(e.extractKey);
      }
      var wa = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema.primaryKey;
          return l(l({}, n), { mutate: function(s) {
            var c = L.trans, u = c.table(r).hook, d = u.deleting, p = u.creating, m = u.updating;
            switch (s.type) {
              case "add":
                if (p.fire === X) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (p.fire === X && m.fire === X) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (d.fire === X) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (d.fire === X) break;
                return c._promise("readwrite", function() {
                  return (function h(O, y, v) {
                    return n.query({ trans: O, values: !1, query: { index: a, range: y }, limit: v }).then(function(E) {
                      var S = E.result;
                      return w({ type: "delete", keys: S, trans: O }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : S.length < v ? { failures: [], numFailures: 0, lastResult: void 0 } : h(O, l(l({}, y), { lower: S[S.length - 1], lowerOpen: !0 }), v);
                      });
                    });
                  })(s.trans, s.range, 1e4);
                }, !0);
            }
            return n.mutate(s);
            function w(h) {
              var O, y, v, E = L.trans, S = h.keys || Mr(a, h);
              if (!S) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? l(l({}, h), { keys: S }) : l({}, h)).type !== "delete" && (h.values = g([], h.values)), h.keys && (h.keys = g([], h.keys)), O = n, v = S, ((y = h).type === "add" ? Promise.resolve([]) : O.getMany({ trans: y.trans, keys: v, cache: "immutable" })).then(function(A) {
                var P = S.map(function(N, D) {
                  var x, $, R, k = A[D], j = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? d.fire.call(j, N, k, E) : h.type === "add" || k === void 0 ? (x = p.fire.call(j, N, h.values[D], E), N == null && x != null && (h.keys[D] = N = x, a.outbound || ue(h.values[D], a.keyPath, N))) : (x = Gr(k, h.values[D]), ($ = m.fire.call(j, x, N, k, E)) && (R = h.values[D], Object.keys($).forEach(function(C) {
                    ae(R, C) ? R[C] = $[C] : ue(R, C, $[C]);
                  }))), j;
                });
                return n.mutate(h).then(function(N) {
                  for (var D = N.failures, x = N.results, $ = N.numFailures, N = N.lastResult, R = 0; R < S.length; ++R) {
                    var k = (x || S)[R], j = P[R];
                    k == null ? j.onerror && j.onerror(D[R]) : j.onsuccess && j.onsuccess(h.type === "put" && A[R] ? h.values[R] : k);
                  }
                  return { failures: D, results: x, numFailures: $, lastResult: N };
                }).catch(function(N) {
                  return P.forEach(function(D) {
                    return D.onerror && D.onerror(N);
                  }), Promise.reject(N);
                });
              });
            }
          } });
        } });
      } };
      function Dn(e, r, n) {
        try {
          if (!r || r.keys.length < e.length) return null;
          for (var a = [], s = 0, c = 0; s < r.keys.length && c < e.length; ++s) V(r.keys[s], e[c]) === 0 && (a.push(n ? $e(r.values[s]) : r.values[s]), ++c);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Sa = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(r) {
          var n = e.table(r);
          return l(l({}, n), { getMany: function(a) {
            if (!a.cache) return n.getMany(a);
            var s = Dn(a.keys, a.trans._cache, a.cache === "clone");
            return s ? M.resolve(s) : n.getMany(a).then(function(c) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? $e(c) : c }, c;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), n.mutate(a);
          } });
        } };
      } };
      function In(e, r) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function Tn(e, r) {
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
      var Oa = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var r = e.schema.name, n = new se(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, c) {
          if (L.subscr && s !== "readonly") throw new B.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(L.querier));
          return e.transaction(a, s, c);
        }, table: function(a) {
          var s = e.table(a), c = s.schema, u = c.primaryKey, h = c.indexes, d = u.extractKey, p = u.outbound, m = u.autoIncrement && h.filter(function(y) {
            return y.compound && y.keyPath.includes(u.keyPath);
          }), w = l(l({}, s), { mutate: function(y) {
            function v(C) {
              return C = "idb://".concat(r, "/").concat(a, "/").concat(C), N[C] || (N[C] = new se());
            }
            var E, S, A, P = y.trans, N = y.mutatedParts || (y.mutatedParts = {}), D = v(""), x = v(":dels"), $ = y.type, j = y.type === "deleteRange" ? [y.range] : y.type === "delete" ? [y.keys] : y.values.length < 50 ? [Mr(u, y).filter(function(C) {
              return C;
            }), y.values] : [], R = j[0], k = j[1], j = y.trans._cache;
            return T(R) ? (D.addKeys(R), (j = $ === "delete" || R.length === k.length ? Dn(R, j) : null) || x.addKeys(R), (j || k) && (E = v, S = j, A = k, c.indexes.forEach(function(C) {
              var K = E(C.name || "");
              function W(H) {
                return H != null ? C.extractKey(H) : null;
              }
              function F(H) {
                return C.multiEntry && T(H) ? H.forEach(function(de) {
                  return K.addKey(de);
                }) : K.addKey(H);
              }
              (S || A).forEach(function(H, oe) {
                var U = S && W(S[oe]), oe = A && W(A[oe]);
                V(U, oe) !== 0 && (U != null && F(U), oe != null && F(oe));
              });
            }))) : R ? (k = { from: (k = R.lower) !== null && k !== void 0 ? k : e.MIN_KEY, to: (k = R.upper) !== null && k !== void 0 ? k : e.MAX_KEY }, x.add(k), D.add(k)) : (D.add(n), x.add(n), c.indexes.forEach(function(C) {
              return v(C.name).add(n);
            })), s.mutate(y).then(function(C) {
              return !R || y.type !== "add" && y.type !== "put" || (D.addKeys(C.results), m && m.forEach(function(K) {
                for (var W = y.values.map(function(U) {
                  return K.extractKey(U);
                }), F = K.keyPath.findIndex(function(U) {
                  return U === u.keyPath;
                }), H = 0, de = C.results.length; H < de; ++H) W[H][F] = C.results[H];
                v(K.name).addKeys(W);
              })), P.mutatedParts = Qt(P.mutatedParts || {}, N), C;
            });
          } }), h = function(v) {
            var E = v.query, v = E.index, E = E.range;
            return [v, new se((v = E.lower) !== null && v !== void 0 ? v : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, O = { get: function(y) {
            return [u, new se(y.key)];
          }, getMany: function(y) {
            return [u, new se().addKeys(y.keys)];
          }, count: h, query: h, openCursor: h };
          return I(O).forEach(function(y) {
            w[y] = function(v) {
              var E = L.subscr, S = !!E, A = In(L, s) && Tn(y, v) ? v.obsSet = {} : E;
              if (S) {
                var P = function(k) {
                  return k = "idb://".concat(r, "/").concat(a, "/").concat(k), A[k] || (A[k] = new se());
                }, N = P(""), D = P(":dels"), E = O[y](v), S = E[0], E = E[1];
                if ((y === "query" && S.isPrimaryKey && !v.values ? D : P(S.name || "")).add(E), !S.isPrimaryKey) {
                  if (y !== "count") {
                    var x = y === "query" && p && v.values && s.query(l(l({}, v), { values: !1 }));
                    return s[y].apply(this, arguments).then(function(k) {
                      if (y === "query") {
                        if (p && v.values) return x.then(function(W) {
                          return W = W.result, N.addKeys(W), k;
                        });
                        var j = v.values ? k.result.map(d) : k.result;
                        (v.values ? N : D).addKeys(j);
                      } else if (y === "openCursor") {
                        var C = k, K = v.values;
                        return C && Object.create(C, { key: { get: function() {
                          return D.addKey(C.primaryKey), C.key;
                        } }, primaryKey: { get: function() {
                          var W = C.primaryKey;
                          return D.addKey(W), W;
                        } }, value: { get: function() {
                          return K && N.addKey(C.primaryKey), C.value;
                        } } });
                      }
                      return k;
                    });
                  }
                  D.add(n);
                }
              }
              return s[y].apply(this, arguments);
            };
          }), w;
        } });
      } };
      function Rn(e, r, n) {
        if (n.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var a = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return n.numFailures === a ? null : (r = l({}, r), T(r.keys) && (r.keys = r.keys.filter(function(s, c) {
          return !(c in n.failures);
        })), "values" in r && T(r.values) && (r.values = r.values.filter(function(s, c) {
          return !(c in n.failures);
        })), r);
      }
      function Kr(e, r) {
        return n = e, ((a = r).lower === void 0 || (a.lowerOpen ? 0 < V(n, a.lower) : 0 <= V(n, a.lower))) && (e = e, (r = r).upper === void 0 || (r.upperOpen ? V(e, r.upper) < 0 : V(e, r.upper) <= 0));
        var n, a;
      }
      function xn(e, r, O, a, s, c) {
        if (!O || O.length === 0) return e;
        var u = r.query.index, d = u.multiEntry, p = r.query.range, m = a.schema.primaryKey.extractKey, w = u.extractKey, h = (u.lowLevelIndex || u).extractKey, O = O.reduce(function(y, v) {
          var E = y, S = [];
          if (v.type === "add" || v.type === "put") for (var A = new se(), P = v.values.length - 1; 0 <= P; --P) {
            var N, D = v.values[P], x = m(D);
            A.hasKey(x) || (N = w(D), (d && T(N) ? N.some(function(C) {
              return Kr(C, p);
            }) : Kr(N, p)) && (A.addKey(x), S.push(D)));
          }
          switch (v.type) {
            case "add":
              var $ = new se().addKeys(r.values ? y.map(function(K) {
                return m(K);
              }) : y), E = y.concat(r.values ? S.filter(function(K) {
                return K = m(K), !$.hasKey(K) && ($.addKey(K), !0);
              }) : S.map(function(K) {
                return m(K);
              }).filter(function(K) {
                return !$.hasKey(K) && ($.addKey(K), !0);
              }));
              break;
            case "put":
              var R = new se().addKeys(v.values.map(function(K) {
                return m(K);
              }));
              E = y.filter(function(K) {
                return !R.hasKey(r.values ? m(K) : K);
              }).concat(r.values ? S : S.map(function(K) {
                return m(K);
              }));
              break;
            case "delete":
              var k = new se().addKeys(v.keys);
              E = y.filter(function(K) {
                return !k.hasKey(r.values ? m(K) : K);
              });
              break;
            case "deleteRange":
              var j = v.range;
              E = y.filter(function(K) {
                return !Kr(m(K), j);
              });
          }
          return E;
        }, e);
        return O === e ? e : (O.sort(function(y, v) {
          return V(h(y), h(v)) || V(m(y), m(v));
        }), r.limit && r.limit < 1 / 0 && (O.length > r.limit ? O.length = r.limit : e.length === r.limit && O.length < r.limit && (s.dirty = !0)), c ? Object.freeze(O) : O);
      }
      function kn(e, r) {
        return V(e.lower, r.lower) === 0 && V(e.upper, r.upper) === 0 && !!e.lowerOpen == !!r.lowerOpen && !!e.upperOpen == !!r.upperOpen;
      }
      function _a(e, r) {
        return (function(n, a, s, c) {
          if (n === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = V(n, a)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return a;
        })(e.lower, r.lower, e.lowerOpen, r.lowerOpen) <= 0 && 0 <= (function(n, a, s, c) {
          if (n === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = V(n, a)) === 0) {
            if (s && c) return 0;
            if (s) return -1;
            if (c) return 1;
          }
          return a;
        })(e.upper, r.upper, e.upperOpen, r.upperOpen);
      }
      function Aa(e, r, n, a) {
        e.subscribers.add(n), a.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(n), e.subscribers.size === 0 && (s = e, c = r, setTimeout(function() {
            s.subscribers.size === 0 && je(c, s);
          }, 3e3));
        });
      }
      var Pa = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var r = e.schema.name;
        return l(l({}, e), { transaction: function(n, a, s) {
          var c, u, d = e.transaction(n, a, s);
          return a === "readwrite" && (u = (c = new AbortController()).signal, s = function(p) {
            return function() {
              if (c.abort(), a === "readwrite") {
                for (var m = /* @__PURE__ */ new Set(), w = 0, h = n; w < h.length; w++) {
                  var O = h[w], y = He["idb://".concat(r, "/").concat(O)];
                  if (y) {
                    var v = e.table(O), E = y.optimisticOps.filter(function(K) {
                      return K.trans === d;
                    });
                    if (d._explicit && p && d.mutatedParts) for (var S = 0, A = Object.values(y.queries.query); S < A.length; S++) for (var P = 0, N = ($ = A[S]).slice(); P < N.length; P++) xr((R = N[P]).obsSet, d.mutatedParts) && (je($, R), R.subscribers.forEach(function(K) {
                      return m.add(K);
                    }));
                    else if (0 < E.length) {
                      y.optimisticOps = y.optimisticOps.filter(function(K) {
                        return K.trans !== d;
                      });
                      for (var D = 0, x = Object.values(y.queries.query); D < x.length; D++) for (var $, R, k, j = 0, C = ($ = x[D]).slice(); j < C.length; j++) (R = C[j]).res != null && d.mutatedParts && (p && !R.dirty ? (k = Object.isFrozen(R.res), k = xn(R.res, R.req, E, v, R, k), R.dirty ? (je($, R), R.subscribers.forEach(function(K) {
                        return m.add(K);
                      })) : k !== R.res && (R.res = k, R.promise = M.resolve({ result: k }))) : (R.dirty && je($, R), R.subscribers.forEach(function(K) {
                        return m.add(K);
                      })));
                    }
                  }
                }
                m.forEach(function(K) {
                  return K();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: u }), d.addEventListener("error", s(!1), { signal: u }), d.addEventListener("complete", s(!0), { signal: u })), d;
        }, table: function(n) {
          var a = e.table(n), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(c) {
            var u = L.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(c);
            var d = He["idb://".concat(r, "/").concat(n)];
            return d ? (u = a.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Mr(s, c).some(function(p) {
              return p == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && Jt(c.mutatedParts), u.then(function(p) {
              0 < p.numFailures && (je(d.optimisticOps, c), (p = Rn(0, c, p)) && d.optimisticOps.push(p), c.mutatedParts && Jt(c.mutatedParts));
            }), u.catch(function() {
              je(d.optimisticOps, c), c.mutatedParts && Jt(c.mutatedParts);
            })) : u.then(function(p) {
              var m = Rn(0, l(l({}, c), { values: c.values.map(function(w, h) {
                var O;
                return p.failures[h] ? w : (w = (O = s.keyPath) !== null && O !== void 0 && O.includes(".") ? $e(w) : l({}, w), ue(w, s.keyPath, p.results[h]), w);
              }) }), p);
              d.optimisticOps.push(m), queueMicrotask(function() {
                return c.mutatedParts && Jt(c.mutatedParts);
              });
            }), u) : a.mutate(c);
          }, query: function(c) {
            if (!In(L, a) || !Tn("query", c)) return a.query(c);
            var u = ((m = L.trans) === null || m === void 0 ? void 0 : m.db._options.cache) === "immutable", h = L, d = h.requery, p = h.signal, m = (function(v, E, S, A) {
              var P = He["idb://".concat(v, "/").concat(E)];
              if (!P) return [];
              if (!(E = P.queries[S])) return [null, !1, P, null];
              var N = E[(A.query ? A.query.index.name : null) || ""];
              if (!N) return [null, !1, P, null];
              switch (S) {
                case "query":
                  var D = N.find(function(x) {
                    return x.req.limit === A.limit && x.req.values === A.values && kn(x.req.query.range, A.query.range);
                  });
                  return D ? [D, !0, P, N] : [N.find(function(x) {
                    return ("limit" in x.req ? x.req.limit : 1 / 0) >= A.limit && (!A.values || x.req.values) && _a(x.req.query.range, A.query.range);
                  }), !1, P, N];
                case "count":
                  return D = N.find(function(x) {
                    return kn(x.req.query.range, A.query.range);
                  }), [D, !!D, P, N];
              }
            })(r, n, "query", c), w = m[0], h = m[1], O = m[2], y = m[3];
            return w && h ? w.obsSet = c.obsSet : (h = a.query(c).then(function(v) {
              var E = v.result;
              if (w && (w.res = E), u) {
                for (var S = 0, A = E.length; S < A; ++S) Object.freeze(E[S]);
                Object.freeze(E);
              } else v.result = $e(E);
              return v;
            }).catch(function(v) {
              return y && w && je(y, w), Promise.reject(v);
            }), w = { obsSet: c.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, y ? y.push(w) : (y = [w], (O = O || (He["idb://".concat(r, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = y)), Aa(w, y, d, p), w.promise.then(function(v) {
              return { result: xn(v.result, c, O?.optimisticOps, a, w, u) };
            });
          } });
        } });
      } };
      function qt(e, r) {
        return new Proxy(e, { get: function(n, a, s) {
          return a === "db" ? r : Reflect.get(n, a, s);
        } });
      }
      var Oe = (ee.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new B.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new B.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var r = this._versions, n = r.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), r.push(n), r.sort(pa), n.stores({}), this._state.autoSchema = !1, n);
      }, ee.prototype._whenReady = function(e) {
        var r = this;
        return this.idbdb && (this._state.openComplete || L.letThrough || this._vip) ? e() : new M(function(n, a) {
          if (r._state.openComplete) return a(new B.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void a(new B.DatabaseClosed());
            r.open().catch(X);
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
        return Ue(Ne, function() {
          return va(e);
        });
      }, ee.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, r = tt.indexOf(this);
        if (0 <= r && tt.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new M(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new M(function(n, a) {
          e.cancelOpen = a;
        }));
      }, ee.prototype.close = function(n) {
        var r = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        r ? (n.isBeingOpened && n.cancelOpen(new B.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new B.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ee.prototype.delete = function(e) {
        var r = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new M(function(s, c) {
          function u() {
            r.close(e);
            var d = r._deps.indexedDB.deleteDatabase(r.name);
            d.onsuccess = Z(function() {
              var p, m, w;
              p = r._deps, m = r.name, w = p.indexedDB, p = p.IDBKeyRange, Ir(w) || m === Mt || Dr(w, p).delete(m).catch(X), s();
            }), d.onerror = be(c), d.onblocked = r._fireOnBlocked;
          }
          if (n) throw new B.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
        return I(this._allTables).map(function(r) {
          return e._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), ee.prototype.transaction = function() {
        var e = function(r, n, a) {
          var s = arguments.length;
          if (s < 2) throw new B.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return a = c.pop(), [r, Qr(c), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ee.prototype._transaction = function(e, r, n) {
        var a = this, s = L.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = r.map(function(m) {
            if (m = m instanceof a.Table ? m.name : m, typeof m != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return m;
          }), e == "r" || e === yr) c = yr;
          else {
            if (e != "rw" && e != br) throw new B.InvalidArgument("Invalid transaction mode: " + e);
            c = br;
          }
          if (s) {
            if (s.mode === yr && c === br) {
              if (!d) throw new B.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && u.forEach(function(m) {
              if (s && s.storeNames.indexOf(m) === -1) {
                if (!d) throw new B.SubTransaction("Table " + m + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (m) {
          return s ? s._promise(null, function(w, h) {
            h(m);
          }) : q(m);
        }
        var p = function m(w, h, O, y, v) {
          return M.resolve().then(function() {
            var E = L.transless || L, S = w._createTransaction(h, O, w._dbSchema, y);
            if (S.explicit = !0, E = { trans: S, transless: E }, y) S.idbtrans = y.idbtrans;
            else try {
              S.create(), S.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === ir.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return m(w, h, O, null, v);
              })) : q(N);
            }
            var A, P = or(v);
            return P && et(), E = M.follow(function() {
              var N;
              (A = v.call(S, S)) && (P ? (N = Ie.bind(null, null), A.then(N, N)) : typeof A.next == "function" && typeof A.throw == "function" && (A = jr(A)));
            }, E), (A && typeof A.then == "function" ? M.resolve(A).then(function(N) {
              return S.active ? N : q(new B.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return A;
            })).then(function(N) {
              return y && S._resolve(), S._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return S._reject(N), q(N);
            });
          });
        }.bind(null, this, c, u, s, n);
        return s ? s._promise(c, p, "lock") : L.trans ? Ue(L.transless, function() {
          return a._whenReady(p);
        }) : this._whenReady(p);
      }, ee.prototype.table = function(e) {
        if (!ae(this._allTables, e)) throw new B.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, r) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = r = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, a = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, u, d, p, m = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: X, dbReadyPromise: null, cancelOpen: X, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        m.dbReadyPromise = new M(function(h) {
          m.dbReadyResolve = h;
        }), m.openCanceller = new M(function(h, O) {
          m.cancelOpen = O;
        }), this._state = m, this.name = e, this.on = mt(this, "populate", "blocked", "versionchange", "close", { ready: [cr, X] }), this.once = function(h, O) {
          var y = function() {
            for (var v = [], E = 0; E < arguments.length; E++) v[E] = arguments[E];
            n.on(h).unsubscribe(y), O.apply(n, v);
          };
          return n.on(h, y);
        }, this.on.ready.subscribe = zr(this.on.ready.subscribe, function(h) {
          return function(O, y) {
            ee.vip(function() {
              var v, E = n._state;
              E.openComplete ? (E.dbOpenError || M.resolve().then(O), y && h(O)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(O), y && h(O)) : (h(O), v = n, y || h(function S() {
                v.on.ready.unsubscribe(O), v.on.ready.unsubscribe(S);
              }));
            });
          };
        }), this.Collection = (s = this, yt(ca.prototype, function(A, S) {
          this.db = s;
          var y = cn, v = null;
          if (S) try {
            y = S();
          } catch (P) {
            v = P;
          }
          var E = A._ctx, S = E.table, A = S.hook.reading.fire;
          this._ctx = { table: S, index: E.index, isPrimKey: !E.index || S.schema.primKey.keyPath && E.index === S.schema.primKey.name, range: y, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: v, or: E.or, valueMapper: A !== lt ? A : null };
        })), this.Table = (c = this, yt(gn.prototype, function(h, O, y) {
          this.db = c, this._tx = y, this.name = h, this.schema = O, this.hook = c._allTables[h] ? c._allTables[h].hook : mt(null, { creating: [qn, X], reading: [Zn, lt], updating: [ta, X], deleting: [ea, X] });
        })), this.Transaction = (u = this, yt(da.prototype, function(h, O, y, v, E) {
          var S = this;
          h !== "readonly" && O.forEach(function(A) {
            A = (A = y[A]) === null || A === void 0 ? void 0 : A.yProps, A && (O = O.concat(A.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = u, this.mode = h, this.storeNames = O, this.schema = y, this.chromeTransactionDurability = v, this.idbtrans = null, this.on = mt(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new M(function(A, P) {
            S._resolve = A, S._reject = P;
          }), this._completion.then(function() {
            S.active = !1, S.on.complete.fire();
          }, function(A) {
            var P = S.active;
            return S.active = !1, S.on.error.fire(A), S.parent ? S.parent._reject(A) : P && S.idbtrans && S.idbtrans.abort(), q(A);
          });
        })), this.Version = (d = this, yt(ba.prototype, function(h) {
          this.db = d, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (p = this, yt(vn.prototype, function(h, O, y) {
          if (this.db = p, this._ctx = { table: h, index: O === ":id" ? null : O, or: y }, this._cmp = this._ascending = V, this._descending = function(v, E) {
            return V(E, v);
          }, this._max = function(v, E) {
            return 0 < V(v, E) ? v : E;
          }, this._min = function(v, E) {
            return V(v, E) < 0 ? v : E;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new B.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = Et(r.IDBKeyRange), this._createTransaction = function(h, O, y, v) {
          return new n.Transaction(h, O, y, n._options.chromeTransactionDurability, v);
        }, this._fireOnBlocked = function(h) {
          n.on("blocked").fire(h), tt.filter(function(O) {
            return O.name === n.name && O !== n && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(h);
          });
        }, this.use(Sa), this.use(Pa), this.use(Oa), this.use(Ea), this.use(wa);
        var w = new Proxy(this, { get: function(h, O, y) {
          if (O === "_vip") return !0;
          if (O === "table") return function(E) {
            return qt(n.table(E), w);
          };
          var v = Reflect.get(h, O, y);
          return v instanceof gn ? qt(v, w) : O === "tables" ? v.map(function(E) {
            return qt(E, w);
          }) : O === "_createTransaction" ? function() {
            return qt(v.apply(this, arguments), w);
          } : v;
        } });
        this.vip = w, a.forEach(function(h) {
          return h(n);
        });
      }
      var er, he = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Na = (Lr.prototype.subscribe = function(e, r, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: r, complete: n });
      }, Lr.prototype[he] = function() {
        return this;
      }, Lr);
      function Lr(e) {
        this._subscribe = e;
      }
      try {
        er = { indexedDB: b.indexedDB || b.mozIndexedDB || b.webkitIndexedDB || b.msIndexedDB, IDBKeyRange: b.IDBKeyRange || b.webkitIDBKeyRange };
      } catch {
        er = { indexedDB: null, IDBKeyRange: null };
      }
      function Cn(e) {
        var r, n = !1, a = new Na(function(s) {
          var c = or(e), u, d = !1, p = {}, m = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), h && xe.storagemutated.unsubscribe(y));
          } };
          s.start && s.start(w);
          var h = !1, O = function() {
            return mr(v);
          }, y = function(E) {
            Qt(p, E), xr(m, p) && O();
          }, v = function() {
            var E, S, A;
            !d && er.indexedDB && (p = {}, E = {}, u && u.abort(), u = new AbortController(), A = (function(P) {
              var N = Ze();
              try {
                c && et();
                var D = De(e, P);
                return D = c ? D.finally(Ie) : D;
              } finally {
                N && qe();
              }
            })(S = { subscr: E, signal: u.signal, requery: O, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              n = !0, r = P, d || S.signal.aborted || (p = {}, (function(N) {
                for (var D in N) if (ae(N, D)) return;
                return 1;
              })(m = E) || h || (xe(vt, y), h = !0), mr(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || mr(function() {
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
      var Ve = Oe;
      function Br(e) {
        var r = ke;
        try {
          ke = !0, xe.storagemutated.fire(e), $r(e, !0);
        } finally {
          ke = r;
        }
      }
      ge(Ve, l(l({}, It), { delete: function(e) {
        return new Ve(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Ve(e, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return r = Ve.dependencies, n = r.indexedDB, r = r.IDBKeyRange, (Ir(n) ? Promise.resolve(n.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Mt;
            });
          }) : Dr(n, r).toCollection().primaryKeys()).then(e);
        } catch {
          return q(new B.MissingAPI());
        }
        var r, n;
      }, defineClass: function() {
        return function(e) {
          te(this, e);
        };
      }, ignoreTransaction: function(e) {
        return L.trans ? Ue(L.transless, e) : e();
      }, vip: Tr, async: function(e) {
        return function() {
          try {
            var r = jr(e.apply(this, arguments));
            return r && typeof r.then == "function" ? r : M.resolve(r);
          } catch (n) {
            return q(n);
          }
        };
      }, spawn: function(e, r, n) {
        try {
          var a = jr(e.apply(n, r || []));
          return a && typeof a.then == "function" ? a : M.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return L.trans || null;
      } }, waitFor: function(e, r) {
        return r = M.resolve(typeof e == "function" ? Ve.ignoreTransaction(e) : e).timeout(r || 6e4), L.trans ? L.trans.waitFor(r) : r;
      }, Promise: M, debug: { get: function() {
        return ye;
      }, set: function(e) {
        en(e);
      } }, derive: Ye, extend: te, props: ge, override: zr, Events: mt, on: xe, liveQuery: Cn, extendObservabilitySet: Qt, getByKeyPath: Ee, setByKeyPath: ue, delByKeyPath: function(e, r) {
        typeof r == "string" ? ue(e, r, void 0) : "length" in r && [].map.call(r, function(n) {
          ue(e, n, void 0);
        });
      }, shallowClone: Xr, deepClone: $e, getObjectDiff: Gr, cmp: V, asap: Yr, minKey: -1 / 0, addons: [], connections: tt, errnames: ir, dependencies: er, cache: He, semVer: "4.2.1", version: "4.2.1".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, r, n) {
        return e + r / Math.pow(10, 2 * n);
      }) })), Ve.maxKey = Et(Ve.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (xe(vt, function(e) {
        ke || (e = new CustomEvent(wr, { detail: e }), ke = !0, dispatchEvent(e), ke = !1);
      }), addEventListener(wr, function(e) {
        e = e.detail, ke || Br(e);
      }));
      var st, ke = !1, $n = function() {
      };
      return typeof BroadcastChannel < "u" && (($n = function() {
        (st = new BroadcastChannel(wr)).onmessage = function(e) {
          return e.data && Br(e.data);
        };
      })(), typeof st.unref == "function" && st.unref(), xe(vt, function(e) {
        ke || st.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Oe.disableBfCache && e.persisted) {
          ye && console.debug("Dexie: handling persisted pagehide"), st?.close();
          for (var r = 0, n = tt; r < n.length; r++) n[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Oe.disableBfCache && e.persisted && (ye && console.debug("Dexie: handling persisted pageshow"), $n(), Br({ all: new se(-1 / 0, [[]]) }));
      })), M.rejectionMapper = function(e, r) {
        return !e || e instanceof Qe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !qr[e.name] ? e : (r = new qr[e.name](r || e.message, e), "stack" in e && Pe(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, en(ye), l(Oe, Object.freeze({ __proto__: null, Dexie: Oe, liveQuery: Cn, Entity: un, cmp: V, PropModification: pt, replacePrefix: function(e, r) {
        return new pt({ replacePrefix: [e, r] });
      }, add: function(e) {
        return new pt({ add: e });
      }, remove: function(e) {
        return new pt({ remove: e });
      }, default: Oe, RangeSet: se, mergeRanges: Ot, rangesOverlap: _n }), { default: Oe }), Oe;
    });
  })(nr)), nr.exports;
}
var Ua = Ba();
const Hr = /* @__PURE__ */ Ka(Ua), Gn = /* @__PURE__ */ Symbol.for("Dexie"), At = globalThis[Gn] || (globalThis[Gn] = Hr);
if (Hr.semVer !== At.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Hr.semVer} and ${At.semVer}`);
const {
  liveQuery: Ha,
  mergeRanges: Va,
  rangesOverlap: za,
  RangeSet: Ya,
  cmp: Xa,
  Entity: Qa,
  PropModification: Ja,
  replacePrefix: Za,
  add: qa,
  remove: es,
  DexieYProvider: ts
} = At;
class Kn {
  db;
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, this.db = new At(t.app), this.db.version(18).stores({
      channel: "id,slide_index",
      cloud: "id,dashboard_id",
      dashboard: "id,name,update",
      display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
      hashes: "id, hash",
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
  getHash = async (t) => {
    const i = await this.db.table("hashes").where({ id: t.widget }).last().catch(() => {
      G(2, ["%chash%c %capi%C %chash", o.API, o.NONE, o.APP]);
    });
    return G(3, [
      "%cget%c %chash%c %chash",
      o.OK,
      o.NONE,
      o.API,
      o.NONE,
      o.APP,
      t
    ]), i?.hash ?? "none";
  };
  setHash = async (t) => await this.db.table("hashes").where({
    id: t.widget
  }).modify({ hash: t.hash }).then(() => (G(3, [
    "%cset%c %chash%c %chash}",
    o.OK,
    o.NONE,
    o.API,
    o.NONE,
    o.WIDGET,
    t
  ]), 201)).catch((i) => (G(2, [
    "%cget%c %chash%c %chash",
    o.OK,
    o.NONE,
    o.API,
    o.NONE,
    o.WIDGET,
    t,
    i.message
  ]), 400));
  clearHash = async () => await this.db.table("hashes").clear().then(() => 201).catch((t) => (G(2, [
    "%cclear%c %cstorage%c %chash",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.WIDGET,
    "clear hashes"
  ]), 400));
  deleteHash = async (t) => await this.db.table("hashes").where({ id: t.widget }).delete().then(() => 201).catch((i) => (G(2, [
    "%cdelete%c %cstorage%c %chash",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.WIDGET,
    "clear dashboard hashes",
    t.dashboard
  ]), 400));
  createHash = async (t) => await this.db.table("hashes").put({
    id: t.widget,
    hash: t.hash
  }).then(() => 201).catch((i) => (G(2, [
    "%cset%c %cstorage%c %chash",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.WIDGET,
    t,
    i.message
  ]), 400));
  /**
   * Retrieve Cloud Data
   * @param query IQuery
   * @returns IResponse
   */
  getCloud = async (t) => {
    if (t.widget === "")
      return G(3, [
        "%cget%c %cstorage%c %ccloud",
        o.NO_UPDATES,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.CLOUD,
        t
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: t
      };
    const i = await this.db.table(_.CLOUD).where({ id: t.widget }).last().catch(() => {
      G(2, ["%capi%C %ccloud", o.API, o.NONE, o.CLOUD, t.widget]);
    });
    if (typeof i > "u")
      return { data: null, message: "Cloud Data error", success: !1, query: t };
    const l = {
      data: i?.data ?? null,
      message: i !== void 0 ? "Cloud retrieved successfully" : "Cloud Data error",
      success: i !== void 0,
      query: t
    };
    return G(3, [
      "%cget%c %cstorage%c %ccloud",
      o.OK,
      o.NONE,
      o.STORAGE,
      o.NONE,
      o.CLOUD,
      l
    ]), l;
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (t, i) => t.type === _.CLOUD && i !== "" ? (G(3, [
    "%cset%c %cstorage%c %ccloud",
    o.OK,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.CLOUD,
    i?.title ?? t.widget
  ]), await this.db.table(_.CLOUD).put({
    id: t.widget,
    dashboard_id: t.dashboard,
    hash: t.hash,
    // data: data.data,
    data: i
  }).then(() => 201).catch((l) => (G(2, [
    "%cset%c %cstorage%c %ccloud",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.CLOUD,
    t,
    l.message
  ]), 400))) : 400;
  getDashboard = async (t) => {
    const i = await this.db.table(_.DASHBOARD).where({ id: t.id }).last().catch(() => {
      G(2, ["%cstorage", o.STORAGE, J.DASHBOARD_LOAD, t.id]);
    });
    return i === void 0 ? {
      data: null,
      message: `Dashboard ${t.id} Load error`,
      success: !1
    } : (i.message = `Dashboard ${t.id} retrieved from storage`, i.success = !0, i);
  };
  getDashboards = async (t) => {
    const i = (b) => t?.id === b.id, l = (b) => t?.name ? b.name.includes(t?.name) : !1, g = await this.db.table(_.DASHBOARD).toArray().then((b) => t?.id ? b.filter(i) : b).then((b) => t?.name ? b.filter(l) : b).catch(() => {
      G(2, ["%cstorage", o.STORAGE, J.DASHBOARD_LOAD, t]);
    });
    return g !== void 0 && G(3, [
      "%cstorage%c %cdashboards",
      o.STORAGE,
      o.NONE,
      o.WIDGET,
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
    const i = structuredClone(t);
    return delete i.data.widgets, await this.db.table(_.DASHBOARD).put({
      id: i.id,
      name: i.name,
      data: i.data,
      update: i.update
    }).then(() => ({
      data: null,
      message: `Dashboard ${i.data.id} saved to storage`,
      success: !0
    })).catch((l) => (G(4, ["%cstorage", o.STORAGE, _.WIDGET, t, l.message]), {
      data: null,
      message: `Dashboard ${i.data.id} save error: ${l.message}`,
      success: !1
    }));
  };
  /**
   * Wipe Message data after expires timestamp
   */
  cleanMessages = async () => {
    const t = Date.now() / 1e3, i = (b) => b.expires < t, l = (b) => b.expires < t;
    return await this.db.table(_.TOPICS).orderBy("expires").filter(i).delete().catch((b) => (console.error(
      "%cstorage%c %cclean",
      o.STORAGE,
      o.NONE,
      o.MESSAGES,
      b.message
    ), 0)), await this.db.table(_.MESSAGES).orderBy("expires").filter(l).delete().catch((b) => (console.error(
      "%clean%c %cstorage%c %cmessages",
      o.OK,
      o.NONE,
      o.STORAGE,
      o.NONE,
      o.MESSAGES,
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
      return G(3, [
        "%cget%c %cstorage%c %cmessages",
        o.NO_UPDATES,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.MESSAGES,
        t
      ]), {
        data: null,
        message: "Messages Data error",
        success: !1,
        query: t
      };
    const i = t?.order ?? "utc", l = Math.floor(Date.now() / 1e3), g = t?.period ?? 0;
    t.since = g === 0 ? l - 3600 * 24 * 30 : l - g, this.options.delay !== 0 ? t.before = l - (this.options.delay || 0) : t.before = l;
    const b = (T) => T.utc > (t?.since || 0), I = (T) => T.utc < (t?.before || l);
    try {
      const T = this.db.table(_.TOPICS).where("widget_id").equals(t.widget).filter(b).filter(I);
      t?.approved === "true" ? T.and((fe) => fe.approved === 1) : T.and((fe) => fe.visible === 1), T.reverse();
      const te = await T.limit(t?.limit ?? 25).sortBy(i);
      if (te.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: t
        };
      const me = te.map((fe) => this.db.table(_.MESSAGES).get({ id: fe.message_id }));
      return At.Promise.all(me).then(async (fe) => {
        const ge = {
          data: {
            messages: fe.map((it) => {
              if (it !== void 0) return it.data;
            })
          },
          query: t,
          message: "Messages retrieved successfully",
          success: !0
        };
        return G(3, [
          "%cget%c %cstorage%c %cmessages",
          o.OK,
          o.NONE,
          o.STORAGE,
          o.NONE,
          o.MESSAGES,
          ge
        ]), ge;
      });
    } catch (T) {
      return G(2, [
        "%cget%c %cstorage%c %cmessages",
        o.OK,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.NO_UPDATES,
        t,
        T.message
      ]), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  hideMessage = async (t, i) => {
    await this.db.table(_.TOPICS).where("message_id").equals(t).modify({ visible: i ? 1 : 0 }).catch((l) => (console.error(
      "%chide%c %cstorage%c %cmessage",
      o.KO,
      o.NONE,
      o.STORAGE,
      o.NONE,
      o.HIDE,
      l.message
    ), 0));
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data any
   * @returns number
   */
  setMessages = async (t, i) => {
    if (t.type !== _.MESSAGES)
      return 400;
    const l = i.data.title;
    let g = 0;
    return G(3, [
      "%cset%c %cstorage%c %cmessages",
      o.OK,
      o.NONE,
      o.STORAGE,
      o.NONE,
      o.MESSAGES,
      i?.title ?? t.widget
    ]), await i.data.messages.forEach(async (b) => {
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
        }).catch((T) => {
          g++, G(4, [
            "%cset%c %cstorage",
            o.KO,
            o.NONE,
            o.STORAGE,
            "set message",
            `title: ${l}`,
            b,
            T.message
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
        await this.db.table(_.TOPICS).put(I).catch((T) => {
          g++, G(4, [
            "%cset%c %cstorage",
            o.KO,
            o.NONE,
            o.STORAGE,
            "set topic",
            `title: ${l}`,
            b,
            T.message
          ]);
        }), await i.data.topics.forEach(async (T) => {
          const te = T.message_id, me = T.visible ? 1 : 0, fe = T.approve ? 1 : 0, ae = T.title;
          await this.db.table(_.TOPICS).where("message_id").equals(te).modify({ visible: me, approve: fe }).catch((ge) => {
            g++, G(4, [
              "%cset%c %cstorage",
              o.KO,
              o.NONE,
              o.STORAGE,
              "update message visibility",
              `title: ${ae}`,
              `widget: ${T.widget_id}`,
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
      return G(3, [
        "%cget%c %cstorage%c %cseries",
        o.NO_UPDATES,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.CLOUD,
        t
      ]), {
        data: null,
        message: "Series Data error",
        success: !1,
        query: t
      };
    const i = await this.db.table(_.SERIES).where({ id: t.widget }).last().catch(() => {
      G(2, [
        "%cget%c %cstorage%c %cseries",
        o.KO,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.SERIES,
        t.widget
      ]);
    }), l = {
      data: i?.data ?? null,
      message: i !== void 0 ? "Get Series success" : "Get Series error",
      success: i !== void 0,
      query: t
    };
    return G(3, [
      "%cget%c %cstorage%c %cseries",
      o.OK,
      o.NONE,
      o.STORAGE,
      o.NONE,
      o.SERIES,
      l
    ]), l;
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (t, i) => (delete i?.query, t.type === _.SERIES && i !== "" ? (G(3, [
    "%cset%c %cstorage%c %cseries",
    o.OK,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.SERIES,
    i?.title ?? t.widget
  ]), await this.db.table(_.SERIES).put({
    id: t.widget,
    dashboard_id: t.dashboard,
    hash: t.hash,
    // data: data.data,
    data: i
  }).then(() => 201).catch((l) => (G(2, [
    "%cset%c %cstorage%c %cseries",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.SERIES,
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
      return G(3, [
        "%cget%c %cstorage%c %cwidget",
        o.KO,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.WIDGET,
        t
      ]), {
        data: null,
        message: "Widget Data error",
        success: !1,
        query: t
      };
    const i = await this.db.table(_.WIDGET).where({ id: t.id }).last().catch(() => {
      console.warn("%cstorage", o.STORAGE, J.WIDGET_LOAD, t.id);
    });
    return i === void 0 ? {
      data: null,
      message: `Widget ${t.id} Load error`,
      success: !1
    } : (i.message = `Widget ${t.id} retrieved from storage`, i.success = !0, i);
  };
  /**
   * Retrieve Widgets from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidgets = async (t) => {
    const i = (I) => t?.dashboard === I.dashboard_id, l = (I) => t?.type === I.type, g = (I) => t?.name ? I.name.includes(t?.name) : !1, b = await this.db.table(_.WIDGET).toArray().then((I) => t?.dashboard ? I.filter(i) : I).then((I) => t?.type ? I.filter(l) : I).then((I) => t?.name ? I.filter(g) : I).catch(() => {
      G(2, ["%cstorage", o.STORAGE, J.WIDGET_LOAD, t]);
    });
    return b !== void 0 && G(3, [
      "%cstorage%c %cwidgets",
      o.STORAGE,
      o.NONE,
      o.MESSAGES,
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
  })).catch((i) => (console.error(
    "%cstorage",
    o.STORAGE,
    _.WIDGET,
    t,
    i.message
  ), {
    data: null,
    message: `Widget ${t.data.id} save error: ${i.message}`,
    success: !1
  }));
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (t) => (t = Ca(t), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length > 0 || (t.type === _.MESSAGES && (t = Pt(this.options, t)), console.info(
    "%cstorage%c %csubscribe",
    o.STORAGE,
    o.NONE,
    o.SUBSCRIBE,
    t.slide,
    t.widget
  ), console.debug(
    "%cstorage%c %csubscribe",
    o.STORAGE,
    o.NONE,
    o.SUBSCRIBE,
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
    const i = await this.db.table(_.SLIDE).where({ id: t.id }).last().catch(() => {
      G(2, ["%cstorage", o.STORAGE, J.SLIDE_LOAD, t.id]);
    });
    return {
      data: i,
      query: t,
      message: i !== void 0 ? "Slide loaded from storage" : "Slide load error",
      success: i !== void 0
    };
  };
  /**
   * Retrieve Slides from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlides = async (t) => {
    const i = (T) => t?.id ? T.id === t.id : !1, l = (T) => t?.name ? T.name.includes(t?.name) : !1, g = (T) => t?.presentation_id ? T.presentation_id === t.presentation_id : !1, I = await this.db.table(_.SLIDE).toArray().then((T) => t?.presentation_id ? T.filter(g) : T).then((T) => t?.id ? T.filter(i) : T).then((T) => t?.name ? T.filter(l) : T);
    return I && I.sort((T, te) => T.order_index - te.order_index), I !== void 0 && G(3, ["%cstorage%c %cslides", o.STORAGE, o.NONE, o.SLIDE, t]), {
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
    name: t.data.name.replace("-copy", "") || "Not set",
    json: t.data.json || {},
    html: t.data.html || "",
    update: t.data.update
  }).then(() => ({
    data: null,
    message: `Slide ${t.data.id} saved to storage`,
    success: !0
  })).catch((i) => (console.error(
    "%cstorage",
    o.STORAGE,
    J.SLIDE_STORE,
    t,
    i.message
  ), {
    data: null,
    message: `Slide ${t.data.id} save error: ${i.message}`,
    success: !1
  }));
  /**
   * Retrieve Presentation from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentation = async (t) => {
    const i = await this.db.table(_.PRESENTATION).where({ id: t.id }).last().catch(() => {
      console.warn(
        "%cstorage ",
        o.STORAGE,
        J.PRESENTATION_LOAD,
        t.id
      );
    });
    return i === void 0 ? {
      data: null,
      message: `Presentation ${t.id} Load error`,
      success: !1
    } : (i.query = t, i.message = `Presentation ${t.id} retrieved from storage`, i.success = !0, i);
  };
  /**
   * Retrieve Presentations from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentations = async (t) => {
    const i = (b) => t?.name ? b.name.includes(t?.name) : !1, g = await this.db.table(_.PRESENTATION).toArray().then((b) => t?.name ? b.filter(i) : b);
    return g !== void 0 && G(3, [
      "%cstorage%c %cpresentations",
      o.STORAGE,
      o.NONE,
      o.PRESENTATION,
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
  })).catch((i) => (console.error(
    "%cstorage",
    o.STORAGE,
    J.PRESENTATION_STORE,
    t,
    i.message
  ), {
    data: null,
    query: t,
    message: `Presentation ${t.data.id} save error: ${i.message}`,
    success: !1
  }));
  /**
   * Retrieve Preference from Storage
   * @param preference IPreference
   * @returns IResponse
   */
  getPreference = async (t) => {
    const i = await this.db.table(_.PREFERENCE).where({ id: t.id }).last().catch(() => {
      G(2, [
        "%cstorage",
        o.STORAGE,
        J.PREFERENCE_LOAD,
        t.id
      ]);
    });
    return {
      // @ts-ignore
      data: i !== void 0 ? { preferences: i } : null,
      message: i !== void 0 ? "Preference loaded from storage" : "Preference load error",
      success: i !== void 0,
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
    const i = (b) => t?.id ? t.id = b.id : !1, g = await this.db.table(_.PREFERENCE).toArray().then((b) => t?.id ? b.filter(i) : b);
    return g !== void 0 && G(3, [
      "%cstorage%c %cpreferences",
      o.STORAGE,
      o.NONE,
      o.PRESENTATION,
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
  })).catch((i) => (console.error(
    "%cstorage",
    o.STORAGE,
    J.PREFERENCE_STORE,
    t,
    i.message
  ), {
    data: null,
    message: `Preference ${t.id} save error: ${i.message}`,
    success: !1
  }));
  /**
   * Retrieve List of Images from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getImages = async (t) => {
    const i = (b) => t?.id ? b.includes(t.id) : !1, g = await this.db.table(_.IMAGES).toArray().then((b) => t?.id ? b.filter(i) : b);
    return g !== void 0 && G(3, [
      "%cstorage%c %cimages",
      o.STORAGE,
      o.NONE,
      o.PRESENTATION,
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
  })).catch((i) => (console.error(
    "%cstorage",
    o.STORAGE,
    J.IMAGE_SET,
    t,
    i.message
  ), {
    data: null,
    message: `Image ${t.data.id} save error: ${i.message}`,
    success: !1
  }));
}
function Vr(f) {
  return new Promise((t, i) => {
    f.oncomplete = f.onsuccess = () => t(f.result), f.onabort = f.onerror = () => i(f.error);
  });
}
function Wa(f, t) {
  let i;
  const l = () => {
    if (i)
      return i;
    const g = indexedDB.open(f);
    return g.onupgradeneeded = () => g.result.createObjectStore(t), i = Vr(g), i.then((b) => {
      b.onclose = () => i = void 0;
    }, () => {
    }), i;
  };
  return (g, b) => l().then((I) => b(I.transaction(t, g).objectStore(t)));
}
let Fr;
function Ln() {
  return Fr || (Fr = Wa("keyval-store", "keyval")), Fr;
}
function Ae(f, t = Ln()) {
  return t("readonly", (i) => Vr(i.get(f)));
}
function Ce(f, t, i = Ln()) {
  return i("readwrite", (l) => (l.put(t, f), Vr(l.transaction)));
}
class Bn {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t;
  }
  getHash = async (t) => "none";
  setHash = async (t) => 404;
  createHash = async (t) => 404;
  clearHash = async () => 404;
  deleteHash = async (t) => 404;
  getCloud = async (t) => {
    const i = Y(t);
    return await Ae(i).then((l) => l).catch(() => (console.warn("%capi", o.API, _.CLOUD, t.slide, t.widget), { data: null, message: "Cloud Data error", success: !1 }));
  };
  getSeries = async (t) => {
    const i = Y(t);
    return await Ae(i).then((l) => l).catch(() => (console.warn("%capi", o.API, _.SERIES, t.slide, t.widget), { data: null, message: "Series Data error", success: !1 }));
  };
  getMessages = async (t) => {
    const i = Y(t);
    return await Ae(i).then((l) => l).catch(() => (console.warn("%capi", o.API, _.MESSAGES, t.slide, t.widget), { data: null, message: "Messages Data error", success: !1 }));
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (t, i) => {
    if (!i.success)
      return 400;
    const l = Y(t);
    return delete i.success, delete i.message, await Ce(l, i).then(() => 201).catch((g) => (console.error(
      "%cstorage",
      o.STORAGE,
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
  setSeries = async (t, i) => {
    if (!i.success)
      return 400;
    const l = Y(t);
    return delete i.success, delete i.message, await Ce(l, i).then(() => 201).catch((g) => (console.error(
      "%cstorage",
      o.STORAGE,
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
  setMessages = async (t, i) => {
    if (!i.success)
      return 400;
    const l = Y(t);
    return delete i.success, delete i.message, await Ce(l, i).then(() => 201).catch((g) => (console.error(
      "%cstorage",
      o.STORAGE,
      _.MESSAGES,
      t,
      g.message
    ), 400));
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (t, i) => {
    console.debug(
      `hideMessage ${t} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    const i = Y(t);
    return await Ae(i).then((l) => l).catch((l) => (console.warn("%capi", o.API, _.SLIDE, t.id), {
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
    const i = Y(t), l = {
      id: t.dashboard,
      name: t.name
    };
    return await Ce(i, l).then(() => ({
      data: null,
      message: `Dashboard ${t.data.id} saved to storage`,
      success: !0
    })).catch((g) => (console.error(
      "%cstorage",
      o.STORAGE,
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
    const i = Y(t);
    return await Ae(i).then((l) => l).catch((l) => (console.warn("%capi", o.API, _.SLIDE, t.id), {
      data: null,
      message: `Widget ${t.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getWidgets = async (t) => (console.warn("%capi", o.API, _.SLIDE, t?.presentation), {
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
    const i = Y(t), l = {
      id: t.widget,
      name: t.name,
      dashboard_id: t.dashboard,
      type: t.type
    };
    return await Ce(i, l).then(() => ({
      data: null,
      message: `Widget ${t.data.id} saved to storage`,
      success: !0
    })).catch((g) => (console.error(
      "%cstorage",
      o.STORAGE,
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
  subscribe = (t) => (t.type === _.MESSAGES && (t = Pt(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length > 0 || (console.debug(
    "%cstorage%c %csubscribe",
    o.STORAGE,
    o.NONE,
    o.SUBSCRIBE,
    t.slide,
    t.widget
  ), this.subscribers.push(t)), null);
  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async () => await new Promise((t) => t(this.subscribers));
  getSlide = async (t) => {
    const i = Y(t);
    return await Ae(i).then((l) => l).catch((l) => (console.warn("%capi", o.API, _.SLIDE, t.id), {
      data: null,
      message: `Slide ${t.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getSlides = async (t) => (console.warn("%capi", o.API, _.SLIDE, t.presentation), {
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
    const i = Y(t), l = {
      id: t.data.id,
      title: t.data.title || "Not set",
      json: t.data.json || {},
      html: t.data.html || ""
    };
    return await Ce(i, l).then(() => ({
      data: null,
      message: `Slide ${t.data.id} saved to storage`,
      success: !0
    })).catch((g) => (console.error(
      "%cstorage",
      o.STORAGE,
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
    const i = Y(t);
    return await Ae(i).then((l) => l).catch((l) => (console.warn("%capi", o.API, _.PRESENTATION, t.id), {
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
    const i = Y(t), l = t.data;
    return await Ce(i, l).then(() => ({
      data: null,
      message: `Presentation ${t.data.id} saved to storage`,
      success: !0
    })).catch((g) => (console.error(
      "%cstorage",
      o.STORAGE,
      _.PRESENTATION,
      t,
      g.message
    ), {
      data: null,
      message: `Presentation ${t.data.id} save error: ${g.message}`,
      success: !1
    }));
  };
  getPreference = async (t) => await Ae(`${_.PREFERENCE}.${t.id}`).then((i) => i).catch((i) => (console.warn("%capi", o.API, _.PREFERENCE, t.id), {
    data: null,
    message: `Preference ${t.id} get error: ${i.message}`,
    success: !1
  }));
  getPreferences = async () => await Ae(`${_.PREFERENCE}`).then((t) => t).catch((t) => (console.warn("%capi", o.API, _.PREFERENCE), {
    data: null,
    message: `Preferences get error: ${t.message}`,
    success: !1
  }));
  /**
   * Update Preference
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (t) => await Ce(`${_.PREFERENCE}.${t.id}`, t.value).then(() => ({
    data: null,
    message: `Preference ${t.id} save error`,
    success: !0
  })).catch((i) => (console.error(
    "%cstorage",
    o.STORAGE,
    _.PREFERENCE,
    t,
    i.message
  ), {
    data: null,
    message: `Preference ${t.id} save error: ${i.message}`,
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
class Un {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, Storage.prototype.setObject = function(i, l) {
      this.setObject(i, JSON.stringify(l));
    }, Storage.prototype.getObject = function(i) {
      const l = this.getObject(i);
      return l && JSON.parse(l);
    };
  }
  getHash = async (t) => "none";
  setHash = async (t) => 404;
  createHash = async (t) => 404;
  clearHash = async () => 404;
  deleteHash = async (t) => 404;
  getCloud = async (t) => {
    const i = Y(t);
    try {
      return localStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
        _.CLOUD,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (t) => {
    const i = Y(t);
    try {
      return localStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
        _.SERIES,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (t) => {
    const i = Y(t);
    try {
      return localStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
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
  setCloud = async (t, i) => {
    const l = Y(t);
    try {
      return localStorage.setObject(l, i), 201;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, _.CLOUD, t, g), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (t, i) => {
    const l = Y(t);
    try {
      return localStorage.setObject(l, i), 201;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, _.SERIES, t, g), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (t, i) => {
    const l = Y(t);
    try {
      return localStorage.setObject(l, i), 200;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, _.MESSAGES, t, g), 400;
    }
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (t, i) => {
    console.debug(
      `hideMessage ${t} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    try {
      return localStorage.getObject(`${_.DASHBOARD}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Dashboard ${t.id} load error: ${i.message}`,
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
    const i = `${_.DASHBOARD}.${t.dashboard}`;
    try {
      return localStorage.setObject(i, t), {
        data: null,
        message: `Dashboard ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", o.STORAGE, _.WIDGET, t, l), {
        data: null,
        message: `Dashboard ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (t) => {
    try {
      return localStorage.getObject(`${_.WIDGET}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Widget ${t.id} load error: ${i.message}`,
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
    const i = `widget.${t.widget}`;
    try {
      return localStorage.setObject(i, t), {
        data: null,
        message: `Widget ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", o.STORAGE, _.WIDGET, t, l), {
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
  subscribe = (t) => (t.type === _.MESSAGES && (t = Pt(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    o.STORAGE,
    o.NONE,
    o.SUBSCRIBE,
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
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Slide ${t.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getSlides = async (t) => {
    try {
      return localStorage.getObject(`${_.SLIDE}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Slide ${t.id} load error: ${i.message}`,
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
    } catch (i) {
      return console.error("%cstorage", o.STORAGE, _.SLIDE, t, i), {
        data: null,
        message: `Slide ${t.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      return localStorage.getObject(
        `${_.PRESENTATION}.${t.presentation}`
      );
    } catch (i) {
      return console.warn(
        "%capi",
        o.API,
        _.PRESENTATION,
        t.presentation,
        i
      ), {
        data: null,
        message: `Presentations ${t.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return localStorage.getObject(`${_.PRESENTATION}.`);
    } catch (t) {
      return console.warn("%capi", o.API, _.PRESENTATION, t), {
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
    } catch (i) {
      return console.error("%cstorage", o.STORAGE, _.PRESENTATION, t, i), {
        data: null,
        message: `Presentation ${t.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreference = async (t) => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.PREFERENCE, t.id, i), {
        data: null,
        message: `Preference ${t.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return localStorage.getObject(`${_.PREFERENCE}.`);
    } catch (t) {
      return console.warn("%capi", o.API, _.PREFERENCE, t), {
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
    } catch (i) {
      return console.error(
        "%cstorage",
        o.STORAGE,
        _.PREFERENCE,
        t,
        i
      ), {
        data: null,
        message: `Preference ${t.id} save error: ${i.message}`,
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
class Wn {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, Storage.prototype.setObject = function(i, l) {
      this.setItem(i, JSON.stringify(l));
    }, Storage.prototype.getObject = function(i) {
      const l = this.getItem(i);
      return l && JSON.parse(l);
    };
  }
  getHash = async (t) => "none";
  setHash = async (t) => 404;
  createHash = async (t) => 404;
  clearHash = async () => 404;
  deleteHash = async (t) => 404;
  getCloud = async (t) => {
    const i = Y(t);
    try {
      return sessionStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
        _.CLOUD,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (t) => {
    const i = Y(t);
    try {
      return sessionStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
        _.SERIES,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (t) => {
    const i = Y(t);
    try {
      return sessionStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
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
  setCloud = async (t, i) => {
    const l = Y(t);
    try {
      return sessionStorage.setObject(l, i), 201;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, _.CLOUD, t, g), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (t, i) => {
    const l = Y(t);
    try {
      return sessionStorage.setObject(l, i), 201;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, _.SERIES, t, g), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (t, i) => {
    const l = Y(t);
    try {
      return sessionStorage.setObject(l, i), 200;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, _.MESSAGES, t, g), 400;
    }
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (t, i) => {
    console.debug(
      `hideMessage ${t} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    try {
      return sessionStorage.getObject(`${_.DASHBOARD}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Dashboard ${t.id} load error: ${i.message}`,
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
    const i = `${_.DASHBOARD}.${t.dashboard}`;
    try {
      return sessionStorage.setObject(i, t), {
        data: null,
        message: `Dashboard ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", o.STORAGE, _.WIDGET, t, l), {
        data: null,
        message: `Dashboard ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (t) => {
    try {
      return sessionStorage.getObject(`${_.WIDGET}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Widget ${t.id} load error: ${i.message}`,
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
    const i = `widget.${t.widget}`;
    try {
      return sessionStorage.setObject(i, t), {
        data: null,
        message: `Widget ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", o.STORAGE, _.WIDGET, t, l), {
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
  subscribe = (t) => (t.type === _.MESSAGES && (t = Pt(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    o.STORAGE,
    o.NONE,
    o.SUBSCRIBE,
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
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Slide ${t.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getSlides = async (t) => {
    try {
      return sessionStorage.getObject(`${_.SLIDE}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Slide ${t.id} load error: ${i.message}`,
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
    } catch (i) {
      return console.error("%cstorage", o.STORAGE, _.SLIDE, t, i), {
        data: null,
        message: `Slide ${t.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      return sessionStorage.getObject(
        `${_.PRESENTATION}.${t.presentation}`
      );
    } catch (i) {
      return console.warn(
        "%capi",
        o.API,
        _.PRESENTATION,
        t.presentation,
        i
      ), {
        data: null,
        message: `Presentation ${t.presentation} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return sessionStorage.getObject(`${_.PRESENTATION}.`);
    } catch (t) {
      return console.warn("%capi", o.API, _.PRESENTATION, t), {
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
    } catch (i) {
      return console.error("%cstorage", o.STORAGE, _.PRESENTATION, t, i), {
        data: null,
        message: `Presentation ${t.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreference = async (t) => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}.${t.id}`);
    } catch (i) {
      return console.warn("%capi", o.API, _.PREFERENCE, t.id, i), {
        data: null,
        message: `Preference ${t.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return sessionStorage.getObject(`${_.PREFERENCE}`);
    } catch (t) {
      return console.warn("%capi", o.API, _.PREFERENCE, t), {
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
    } catch (i) {
      return console.error(
        "%cstorage",
        o.STORAGE,
        _.PREFERENCE,
        t,
        i
      ), {
        data: null,
        message: `Preference ${t.id} save error: ${i.message}`,
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
class Fn {
  subscribers = [];
  options;
  constructor(t) {
    this.options = t, window.__bc.WidgetData = /* @__PURE__ */ new Set();
  }
  getHash = async (t) => "none";
  setHash = async (t) => 404;
  createHash = async (t) => 404;
  clearHash = async () => 404;
  deleteHash = async (t) => 404;
  getCloud = async (t) => {
    const i = Y(t);
    try {
      return window.__bc.WidgetData[i];
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
        _.CLOUD,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Cloud Data error", success: !1 };
    }
  };
  getSeries = async (t) => {
    const i = Y(t);
    try {
      return window.__bc.WidgetData[i];
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
        _.SERIES,
        t.slide,
        t.widget,
        l
      ), { data: null, message: "Series Data error", success: !1 };
    }
  };
  getMessages = async (t) => {
    const i = Y(t);
    try {
      return window.__bc.WidgetData[i];
    } catch (l) {
      return console.warn(
        "%capi",
        o.API,
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
  setCloud = async (t, i) => {
    const l = Y(t);
    try {
      return window.__bc.WidgetData[l] = i, 201;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, "set", t, g), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (t, i) => {
    const l = Y(t);
    try {
      return window.__bc.WidgetData[l] = i, 201;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, "set", t, g), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (t, i) => {
    const l = Y(t);
    try {
      return window.__bc.WidgetData[l] = i, 201;
    } catch (g) {
      return console.error("%cstorage", o.STORAGE, "set", t, g), 400;
    }
  };
  cleanMessages = async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (t, i) => {
    console.debug(
      `hideMessage ${t} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (t) => {
    try {
      return window.__bc.DashboardData[t.id];
    } catch (i) {
      return console.warn("%capi", o.API, _.DASHBOARD, t.id, i), {
        data: null,
        message: `Dashboard ${t.id} load error: ${i.message}`,
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
    const i = `widget.${t.widget}`;
    try {
      return window.__bc.DashboardData[i] = t, {
        data: null,
        message: `Dashboard ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", o.STORAGE, _.DASHBOARD, t, l), {
        data: null,
        message: `Dashboard ${t.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (t) => {
    try {
      return window.__bc.WidgetData[t.id];
    } catch (i) {
      return console.warn("%capi", o.API, _.WIDGET, t.id, i), {
        data: null,
        message: `Widget ${t.id} load error: ${i.message}`,
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
    const i = `widget.${t.widget}`;
    try {
      return window.__bc.WidgetData[i] = t, {
        data: null,
        message: `Widget ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", o.STORAGE, _.WIDGET, t, l), {
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
  subscribe = (t) => (t.type === _.MESSAGES && (t = Pt(this.options, t)), this.subscribers.filter(
    (l) => l.widget === t.widget
  ).length || (console.debug(
    "%cstorage%c %csubscribe",
    o.STORAGE,
    o.NONE,
    o.SUBSCRIBE,
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
      return window.__bc.SlideData[t.id];
    } catch (i) {
      return console.warn("%capi", o.API, _.SLIDE, t.id, i), {
        data: null,
        message: `Slide ${t.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getSlides = async (t) => {
    try {
      return window.__bc.SlideData.filter(
        (i) => i.presentation_id === t.presentation
      );
    } catch (i) {
      return console.warn(
        "%capi",
        o.API,
        _.PRESENTATION,
        t.presentation_id,
        i
      ), {
        data: null,
        message: `Slides for presentation ${t.presentation} load error: ${i.message}`,
        success: !1
      };
    }
  };
  setSlide = async (t) => {
    try {
      return window.__bc.SlideData[t.id] = {
        id: t.slide,
        title: t.data.title || "Not set",
        json: t.data.json || {},
        html: t.data.html || ""
      }, {
        data: null,
        message: `Slide ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error("%cstorage", o.STORAGE, _.SLIDE, t, i), {
        data: null,
        message: `Slide ${t.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (t) => {
    try {
      const i = t.presentation || "none";
      return window.__bc.PresentationData[i];
    } catch (i) {
      return console.warn(
        "%capi",
        o.API,
        _.PRESENTATION,
        t.presentation,
        i
      ), {
        data: null,
        message: `Presentation ${t.presentation} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return window.__bc.PresentationData;
    } catch (t) {
      return console.warn("%capi", o.API, _.PRESENTATION, t), {
        data: null,
        message: `Presentations get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (t) => {
    try {
      return window.__bc.PresentationData[t.id] = t.data, {
        data: null,
        message: `Presentation ${t.data.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error("%cstorage", o.STORAGE, _.PRESENTATION, t, i), {
        data: null,
        message: `Presentation ${t.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreference = async (t) => {
    try {
      return window.__bc.Preferences[t.id];
    } catch (i) {
      return console.warn("%capi", o.API, _.PREFERENCE, t.id, i), {
        data: null,
        message: `Preference ${t.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return window.__bc.Preferences;
    } catch (t) {
      return console.warn("%capi", o.API, _.PREFERENCE, t), {
        data: null,
        message: `Preferences get error: ${t.message}`,
        success: !1
      };
    }
  };
  setPreference = async (t) => {
    try {
      return window.__bc.Preferences[t.id] = t.value, {
        data: null,
        message: `Preference ${t.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error(
        "%cstorage",
        o.STORAGE,
        _.PREFERENCE,
        t,
        i
      ), {
        data: null,
        message: `Preference ${t.id} save error: ${i.message}`,
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
class rs {
  sm;
  api;
  bc;
  options;
  subscribers = [];
  // private temp: {[x:string]:any} = []
  constructor(t) {
    switch (G(3, [
      "%cpresentation",
      o.PRESENTATION,
      t.presentation,
      J.VERSION,
      $a
    ]), this.options = t, this.sm = null, this.bc = new BroadcastChannel(this.options.presentation), this.api = new Ga(t), t.storage) {
      case pe.DEXIE:
        this.sm = new Kn(t);
        break;
      case pe.LOCAL:
        this.sm = new Wn(t);
        break;
      case pe.SESSION:
        this.sm = new Un(t);
        break;
      case pe.KEYVAL:
        this.sm = new Bn(t);
        break;
      case pe.WINDOW:
        this.sm = new Fn(t);
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
    if (G(3, ["%cupdate%c %cdata", o.NO_UPDATES, o.NONE, o.MESSAGES, t]), this.sm === null || Object.keys(this.subscribers).length === 0)
      return;
    const i = [];
    Object.values(this.subscribers).forEach((l) => {
      l.dashboard?.length && l.widget?.length && l.type?.length && i.push(this.api.get(l));
    }), i.forEach(async (l) => {
      await l.then(
        async (g) => await this.processResponse(g)
      );
    });
  };
  stream = () => {
    const t = [];
    Object.values(this.subscribers).forEach((i) => {
      t.push(i);
    }), this.api.ndjson(t);
  };
  apiQuery = async (t) => await this.api.get(t).then(async (i) => await this.processResponse(i)).catch((i) => ({ code: 204, hash: "" }));
  processResponse = async (t) => {
    let i, l = { code: 400, hash: "" }, g = "", b;
    if (t.success === !0) {
      const I = t.query;
      switch (I.type) {
        case _.MESSAGES:
          b = await this.sm?.getHash(I), b === "none" && (I.hash = "temp", await this.sm?.createHash(I)), t.data.messages = t.data.messages.filter(
            (T) => T.id !== null
          ), g = t.data.messages.length > 0 ? Wr(t.data.messages[0].utc) : "none", b === g ? (G(3, [
            "%cset%c %cstorage%c %cmessages",
            o.NO_UPDATES,
            o.NONE,
            o.STORAGE,
            o.NONE,
            o.MESSAGES,
            t.data?.title ?? t.query.widget,
            `same hash:${g}`
          ]), l.code = 204) : this.sm !== null ? (I.hash = g, await this.sm?.setHash(I), l.code = await this.sm.setMessages(t.query, t).then(async (T) => (this.broadcastUpdate(T, t), T)).catch((T) => 500)) : l.code = 500;
          break;
        case _.CLOUD:
          b = await this.sm?.getHash(I), b === "none" && (I.hash = "temp", await this.sm?.createHash(I)), g = Wr(t.data.cloud), b === g ? (G(3, [
            "%cset%c %cstorage%c %ccloud",
            o.NO_UPDATES,
            o.NONE,
            o.STORAGE,
            o.NONE,
            o.CLOUD,
            t.data?.title ?? I.widget,
            `same hash:${g}`
          ]), G(4, [
            "%cdebug%c %ccloud",
            o.NO_UPDATES,
            o.NONE,
            o.CLOUD,
            t.query
          ]), l = { code: 204, hash: g }) : (I.hash = g, await this.sm?.setHash(I), i = {
            data: {
              cloud: t.data
            },
            message: t.message,
            success: t.success,
            query: t.query
          }, this.sm !== null ? l.code = await this.sm.setCloud(t.query, i.data).then((T) => (this.broadcastUpdate(T, t), T)).catch((T) => 500) : l.code = 500);
          break;
        case _.SERIES:
          b = await this.sm?.getHash(I), b === "none" && (I.hash = "temp", await this.sm?.createHash(I)), g = Wr(t.data.series), b === g ? (G(3, [
            "%cset%c %cstorage%c %cseries",
            o.NO_UPDATES,
            o.NONE,
            o.STORAGE,
            o.NONE,
            o.SERIES,
            t.data?.title ?? t.query.widget,
            `same hash:${g}`
          ]), G(4, [
            "%cdebug%c %cseries",
            o.NO_UPDATES,
            o.NONE,
            o.SERIES,
            I
          ]), l = { code: 204, hash: g }) : (I.hash = g, await this.sm?.setHash(I), i = {
            data: t.data,
            message: t.message,
            success: t.success,
            query: t.query
          }, this.sm !== null ? l.code = await this.sm?.setSeries(I, t.data).then((T) => (this.broadcastUpdate(T, t), T)).catch((T) => 500) : l.code = 500);
          break;
        default:
          G(3, [
            `%cfetch%c %capi% %c${I.type} `,
            o.KO,
            o.NONE,
            o.API,
            o.NONE,
            o.NO_UPDATES,
            `Bad request: type ${I.type} unknown`
          ]), l = { code: 404, hash: g };
      }
    } else
      switch (G(3, [
        `%cset%c %c${t.query.type}%c %cunauthorized`,
        o.KO,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.NO_UPDATES,
        t.query
      ]), t.query.type) {
        case _.MESSAGES:
          return this.sm !== null ? await this.sm?.getMessages(t.query).then((I) => (this.broadcastUpdate(201, I), { code: 201, hash: g })) : { code: 500, hash: g };
        case _.CLOUD:
          return this.sm !== null ? await this.sm?.getCloud(t.query).then((I) => (this.broadcastUpdate(201, I), { code: 201, hash: g })) : { code: 500, hash: g };
        case _.SERIES:
          return this.sm !== null ? await this.sm?.getSeries(t.query).then((I) => (this.broadcastUpdate(201, I), { code: 201, hash: g })) : { code: 500, hash: g };
      }
    return t = null, l;
  };
  startBroadcastListener = () => {
    const t = this.options.presentation;
    G(3, ["%cchannel%c %capi", o.BROADCAST, o.NONE, o.API, t]), this.bc && (this.bc.onmessage = (i) => {
      this.actions(i);
    }, this.bc.postMessage({ event: J.STORAGE_INIT, data: {} }));
  };
  broadcastMessage = (t, i) => {
    this.bc && this.bc.postMessage({ event: t, data: i });
  };
  broadcastUpdate = (t, i) => {
    switch (t) {
      case 201:
        G(3, [
          `%cupdate%c %cwidget%c %c${i.query?.type}`,
          o.BROADCAST,
          o.NONE,
          o.WIDGET,
          o.NONE,
          _t(i.query),
          // @ts-expect-error query.widget is obligatory but not always
          `${i?.data?.title ?? ""} ${i.query.widget}`
        ]), G(4, [
          "%cdebug%c %cevent",
          o.NO_UPDATES,
          o.NONE,
          o.BROADCAST,
          i
        ]), this.bc?.postMessage({
          event: J.WIDGET_UPDATE,
          data: i.query
        });
        break;
      case 204:
        break;
      default:
        G(2, [
          `%cupdate%c %cwidget%c %c${i.query?.type}`,
          o.KO,
          o.NONE,
          o.WIDGET,
          o.NONE,
          _t(i.query),
          "Fetch error",
          i.query
        ]);
        break;
    }
  };
  hide = (t) => {
    this.api.hideMessage(t);
  };
  actions = async (t) => {
    switch (t.data.event) {
      case J.SUBSCRIBE:
        const i = t.data.data;
        i.widget !== void 0 && (G(3, [
          `%csubscribe%c %cwidget%c %c${t.data.data.type}`,
          o.BROADCAST,
          o.NONE,
          o.WIDGET,
          o.NONE,
          _t(i),
          i
        ]), this.addSubscriber(i));
        break;
      case J.UPDATE:
        G(3, [
          "%cupdate%c %capi%c %cstorage",
          o.BROADCAST,
          o.NONE,
          o.API,
          o.NONE,
          o.STORAGE,
          t.data
        ]), await this.update(t.data.data);
        break;
      case "stream":
        G(3, [
          "%cupdate%c %capi%c %cstorage",
          o.BROADCAST,
          o.NONE,
          o.API,
          o.NONE,
          o.STORAGE,
          t.data
        ]), await this.stream();
        break;
    }
  };
  cleanMessages = async () => {
    if (this.options?.suspended) {
      G(2, [
        "%cclean%c %cstorage%c %cmessages",
        o.KO,
        o.NONE,
        o.STORAGE,
        o.NONE,
        o.MESSAGES,
        "Account suspended"
      ]);
      return;
    }
    const t = this.options?.retention || 86400 * 40, i = await this.sm?.cleanMessages(
      t
    );
    G(3, [
      "%cclean%c %cstorage%c %cmessages",
      o.OK,
      o.NONE,
      o.STORAGE,
      o.NONE,
      o.MESSAGES,
      `${i} messages deleted`
    ]);
  };
  hideMessage = async (t) => {
    const i = await this.sm?.hideMessage(t.id, 0);
    return G(3, [
      "%chide%c %cstorage%c %cmessages",
      o.OK,
      o.NONE,
      o.STORAGE,
      o.NONE,
      o.MESSAGES,
      `${i} messages hidden`
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
  deleteImage = async (t, i) => await this.api.deleteImage(t, i);
  getImages = async (t) => await this.sm?.getImages(t);
  setImage = async (t) => await this.sm?.setImage(t);
  getHash = async (t, i) => await this.sm?.getHash(i);
  setHash = async (t, i) => await this.sm?.setHash(i) ?? 400;
  clearHash = async () => await this.sm?.clearHash() ?? 400;
}
class Fa {
  sm;
  constructor(t) {
    switch (this.sm = null, t.storage) {
      case pe.DEXIE:
        this.sm = new Kn(t);
        break;
      case pe.LOCAL:
        this.sm = new Wn(t);
        break;
      case pe.SESSION:
        this.sm = new Un(t);
        break;
      case pe.KEYVAL:
        this.sm = new Bn(t);
        break;
      case pe.WINDOW:
        this.sm = new Fn(t);
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
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.CLOUD,
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
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.MESSAGES,
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
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.SERIES,
    t.widget,
    "wrong method call for getSeries, type used is",
    t.type
  ), {
    data: null,
    message: `'wrong method call for getSeries, type used is ${t.type}`,
    success: !1
  }) : await this.sm?.getSeries(t);
}
class ns {
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
  constructor(t, i, l) {
    this.element = t, this.callbacks = i, l = typeof l < "u" ? l : "buzzcasting-app";
    const g = { ...t.dataset };
    delete g.hmr;
    const b = window.__bc.opts;
    g.presentation = b?.presentation ?? `${l} not found`, this.query = g, Ia(t), this.storageReader = new Fa(b), this.broadcastChannel = new BroadcastChannel(g.presentation), this.broadcastListener();
  }
  addCallbackListener(t) {
    this.callbacks.push(t);
  }
  /**
   * Data received from BroadcastChannel
   * data that is broadcast needs to be a IMessage[] |ICloud or ISeries structure
   * WIDGET_UPDATE is used to trigger fetching on the broadcast channel,
   * but also to trigger data retrieval on the widget
   */
  broadcastListener() {
    const t = this.query;
    this.broadcastChannel.onmessage = async (i) => {
      const l = i.data.data;
      switch (i.data.event) {
        case J.WIDGET_UPDATE:
          try {
            if (l.dashboard === t.dashboard && l.widget === t.widget) {
              const g = await this.getData();
              g?.success && (G(4, [
                `%cset%c %cwidget%c %c${this.query.type}`,
                o.OK,
                o.NONE,
                o.WIDGET,
                o.NONE,
                //@ts-ignore
                _t(this.query),
                this.query
              ]), this.callbacks.forEach(async (b) => {
                b(g);
              }));
            }
          } catch (g) {
            G(4, [J.WIDGET_UPDATE, l, g.message, g]);
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
    this.query.dashboard?.length && this.query.widget?.length && this.query.type?.length && (this.broadcastChannel.postMessage({
      event: J.SUBSCRIBE,
      data: this.query
    }), G(3, [
      `%csubscribe%c %cwidget%c %c${this.query.type}`,
      o.SUBSCRIBE,
      o.NONE,
      o.WIDGET,
      o.NONE,
      _t(this.query),
      this.query.widget
    ]), G(4, [
      "%cdebug%c %cwidget",
      o.NO_UPDATES,
      o.NONE,
      o.WIDGET,
      this.query
    ]));
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
  getCloud = async () => this.query.type !== _.CLOUD ? (G(3, [
    "%cget%c %cstorage%c %cwidget",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.WIDGET,
    this.query.widget,
    "Wrong method call for getCloud, expected type is",
    this.query.type
  ]), G(4, [
    "%cdebug%c %ccloud",
    o.NO_UPDATES,
    o.NONE,
    o.CLOUD,
    this.query
  ]), {
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
  getMessages = async () => this.query.type !== _.MESSAGES ? (G(3, [
    "%cget%c %cstorage%c %cwidget",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.WIDGET,
    this.query.widget,
    "Wrong method call for getMessages, expected type is",
    this.query.type
  ]), G(4, [
    "%debug%c %cmessages",
    o.NO_UPDATES,
    o.NONE,
    o.MESSAGES,
    this.query
  ]), {
    data: null,
    message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
    success: !1
  }) : await this.storageReader.getMessages(this.query);
  /**
   * Get Widget Series Data
   *
   * @returns IResponse
   */
  getSeries = async () => this.query.type !== _.SERIES ? (G(3, [
    "%cget%c %cstorage%c %cwidget",
    o.KO,
    o.NONE,
    o.STORAGE,
    o.NONE,
    o.WIDGET,
    this.query.widget,
    "Wrong method call for getSeries, expected type is",
    this.query.type
  ]), G(4, [
    "%cdebug%c %cseries",
    o.NO_UPDATES,
    o.NONE,
    o.SERIES,
    this.query
  ]), {
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
    G(3, [
      "%cmodal%c %cwidget",
      o.OK,
      o.NONE,
      o.WIDGET,
      J.SHOW_MODAL,
      t.showComponent,
      Da(this.element.attributes)
      // props['data-widget'],
    ]);
    const i = new CustomEvent(J.SHOW_MODAL, {
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
    window.dispatchEvent(i);
  };
  destroy() {
    this.broadcastChannel.close();
  }
}
export {
  rs as BuzzcastingStorageManager,
  Fa as BuzzcastingStorageReader,
  ns as Widget
};
