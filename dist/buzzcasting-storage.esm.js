var _ = /* @__PURE__ */ ((h) => (h.CLOUD = "cloud", h.DASHBOARD = "dashboard", h.DASHBOARDS = "dashboards", h.IMAGES = "images", h.MESSAGES = "messages", h.PREFERENCE = "preference", h.PREFERENCES = "preferences", h.PRESENTATION = "presentation", h.PRESENTATIONS = "presentations", h.SERIES = "series", h.SLIDE = "slide", h.SLIDES = "slides", h.TOPICS = "topics", h.WIDGET = "widget", h.WIDGETS = "widgets", h))(_ || {}), c = /* @__PURE__ */ ((h) => (h.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", h.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", h.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", h.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", h.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", h.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", h.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", h.NONE = "color:transparent;background-color:transparent;", h.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", h.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", h.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", h.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", h.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", h.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", h.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", h))(c || {}), X = /* @__PURE__ */ ((h) => (h.ADD_SLIDE = "addSlide", h.APP_READY = "appReady", h.API_UPDATE = "apiUpdate", h.WS_API_REQUEST = "wsApiRequest", h.WS_API_RESPONSE = "wsApiResponse", h.WS_API_UPDATE = "wsApiRUpdate", h.APPROVE_MESSAGE = "approveMessage", h.CHANNEL = "channel", h.CLEAN_MESSAGES = "cleanMessages", h.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", h.CLOSE_BUILDER_MODAL = "closeBuilderModal", h.CLOSE_MODAL = "closeModal", h.CSS_SET = "setCss", h.CSS_STORE = "storeCss", h.DASHBOARD_LOAD = "loadDashboard", h.DASHBOARD_STORE = "storeDashboard", h.ERROR = "error", h.HIDE_MESSAGE = "hideMessage", h.HIDE_LABELS = "hideLabels", h.IMAGE_GET = "getImage", h.IMAGE_SET = "setImage", h.IMAGE_STORED = "imageStored", h.LAUPPUT_UPDATE = "layoutUpdate", h.PREV_SLIDE = "prevSlide", h.RELOAD_PRESENTATION = "reloadPresentation", h.STAR_MESSAGE = "starMessage", h.GOTO_SLIDE = "gotoSlide", h.NEXT_SLIDE = "nextSlide", h.PREFERENCE_LOAD = "loadPreference", h.PREFERENCE_STORE = "storePreference", h.PAUSE_PRESENTATION = "pausePresentation", h.PRESENTATION_READY = "presentationReady", h.PRESENTATION_LOAD = "loadPresentation", h.PRESENTATION_STORE = "storePresentation", h.SCREENSHOT_TAKE = "takeScreenshot", h.SCREENSHOT_STORE = "storeScreenshot", h.SECTION_UPDATE = "sectionUpdate", h.SHOW_BUILDER_DIALOG = "showBuilderDialog", h.SHOW_BUILDER_MODAL = "showBuilderModal", h.SHOW_MODAL = "showModal", h.SLIDE_DID_LOAD = "slideDidLoad", h.SLIDE_GET = "getSlide", h.SLIDE_GOTO = "slideGoto", h.SLIDE_LOAD = "loadSlide", h.SLIDE_READY = "slideReady", h.SLIDE_SAVED = "slideSaved", h.SLIDE_SET = "setSlide", h.SLIDE_STORE = "storeSlide", h.SLIDE_STORED = "slideStored", h.SLIDE_TRANSITIONER = "slideTransitioner", h.START_TRANSITIONER = "startTransitioner", h.STORAGE_INIT = "storageInit", h.SUBSCRIBE = "subscribe", h.SUSPEND_ACCOUNT = "suspendAccount", h.SWITCH_PRESENTATION = "switchPresentation", h.REMOVE_CLOUD = "removeCloud", h.UPDATE = "update", h.UPLOAD_COMPLETED = "uploadCompleted", h.VERSION = "version", h.WIDGETS_CLEAR = "widgetsClear", h.WIDGET_LOAD = "widgetLoad", h.WIDGET_STORE = "widgetStore", h.WIDGET_UPDATE = "widgetUpdate", h))(X || {}), en = /* @__PURE__ */ ((h) => (h.APPROVED = "approved", h.BEFORE = "before", h.DELAYED = "delayed", h.NONE = "none", h.REALTIME = "realtime", h))(en || {}), he = /* @__PURE__ */ ((h) => (h.KEYVAL = "keyval", h.LOCAL = "local", h.SESSION = "session", h.DEXIE = "dexie", h.WINDOW = "window", h))(he || {});
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
function Ia(h, t) {
  for (; h.length < t; )
    h = `0${h}`;
  return h;
}
function Oe(h, t) {
  let o, l, g;
  if (t.length === 0)
    return h;
  for (o = 0, g = t.length; o < g; o++)
    l = t.charCodeAt(o), h = (h << 5) - h + l, h |= 0;
  return h < 0 ? h * -2 : h;
}
function Na(h, t, o) {
  return Object.keys(t).sort().reduce(l, h);
  function l(g, b) {
    return jr(g, t[b], b, o);
  }
}
function jr(h, t, o, l) {
  const g = Oe(Oe(Oe(h, o), Ra(t)), typeof t);
  if (t === null)
    return Oe(g, "null");
  if (t === void 0)
    return Oe(g, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (l.includes(t))
      return Oe(g, `[Circular]${o}`);
    l.push(t);
    const b = Na(g, t, l);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return b;
    try {
      return Oe(b, String(t.valueOf()));
    } catch (x) {
      return Oe(b, `[valueOf exception]${x.stack || x.message}`);
    }
  }
  return Oe(g, t.toString());
}
function Ra(h) {
  return Object.prototype.toString.call(h);
}
function Fn(h) {
  return Ia(jr(0, h, "", []).toString(16), 8);
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
}, kr = (h) => {
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
  let l, g, b, x, $;
  switch (h.moderation) {
    case en.BEFORE:
      l = /* @__PURE__ */ new Date(), g = (o = h.beforeTime) == null ? void 0 : o.split(":"), b = Number.parseInt(g ? g[0] : "00"), x = Number.parseInt(g ? g[1] : "00"), $ = Number.parseInt(g ? g[2] : "00"), t.before = l.setHours(b, x, $, 0) / 1e3, t.period || (t.period = l.getDay() === 1 ? 72 : 24);
      break;
    case en.DELAYED:
      h.delay && h.delay > 0 && (t.delay = `${h.delay}`);
      break;
    case en.APPROVED:
      t.approved = "1";
      break;
    default:
      h.period !== 0 && (t.period = h.period);
  }
  return t;
}
const xa = "3.12.4";
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
    let x = "";
    switch (t.type) {
      case _.MESSAGES:
        x = c.MESSAGES;
        break;
      case _.SERIES:
        x = c.SERIES;
        break;
      case _.CLOUD:
        x = c.CLOUD;
        break;
    }
    return K(3, [
      `%cfetch%c %capi%c %c${t.type}`,
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      x,
      t.widget
    ]), K(4, [t.type, g]), await fetch(
      [this.url, "api", o, t.type].join("/") + b,
      { ...l, method: "get" }
    ).then(async ($) => {
      if (!$.ok)
        throw new Error(`${$.status}`);
      return $;
    }).then(($) => $.json()).then(($) => ($.query = t, $)).catch(($) => ({ success: !1, message: `${$}`, data: null, query: t }));
  }
  async hideMessage(t) {
    const { version: o } = this.options, l = this.headers(), g = "?action=visible";
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
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
    for (const [x, $] of b.entries())
      g.append(`custom_filters[${x}]`, $);
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      X.HIDE_LABELS,
      t.widget,
      b
    ), await fetch(
      [this.url, "api", o, t.type, t.widget].join("/"),
      { ...l, body: g, method: "put" }
    ).then((x) => {
      if (!x.ok)
        throw new Error(x.statusText);
      return x;
    }).then((x) => x.json()).catch((x) => ({ succes: !1, message: x, data: [] }));
  }
  async loadSlide(t) {
    const { version: o } = this.options, l = this.headers(), g = Object.assign({}, t);
    return delete g.type, delete g.hash, K(3, ["%capi%c %cloadSlide", c.API, c.NONE, c.SLIDE, t.id]), await fetch(
      [this.url, "api", o, "slides", t.id].join("/"),
      { ...l, method: "get" }
    ).then(async (b) => {
      if (!b.ok)
        throw new Error(`${b.status}`);
      return b;
    }).then((b) => b.json()).then((b) => {
      let x;
      return t.type = "slides", b.query = t, b?.data && (Array.isArray(b.data) ? (x = structuredClone(b.data), x.forEach(($) => {
        typeof $.json == "string" && ($.json = JSON.parse($.json));
      })) : (x = structuredClone(b.data), x.json = JSON.parse(x.json)), b.data = x), b;
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
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.SLIDE,
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
    return K(2, ["%capi%c %cput", c.API, c.NONE, c.PRESENTATION, t.name]), await fetch(
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
      "%capi%c %cloadPreference",
      c.API,
      c.NONE,
      c.APP,
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
      c.API,
      c.NONE,
      c.APP,
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
    return console.info("%capi%c %cloadImage", c.API, c.NONE, c.WIDGET), await fetch(
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
      c.API,
      c.NONE,
      c.WIDGET,
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
      c.API,
      c.NONE,
      c.WIDGET,
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
function $a(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var tn = { exports: {} }, ja = tn.exports, Cr;
function Ma() {
  return Cr || (Cr = 1, function(h, t) {
    (function(o, l) {
      h.exports = l();
    })(ja, function() {
      var o = function(e, n) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
          r.__proto__ = a;
        } || function(r, a) {
          for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
        })(e, n);
      }, l = function() {
        return (l = Object.assign || function(e) {
          for (var n, r = 1, a = arguments.length; r < a; r++) for (var s in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          return e;
        }).apply(this, arguments);
      };
      function g(e, n, r) {
        for (var a, s = 0, i = n.length; s < i; s++) !a && s in n || ((a = a || Array.prototype.slice.call(n, 0, s))[s] = n[s]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var b = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, x = Object.keys, $ = Array.isArray;
      function te(e, n) {
        return typeof n != "object" || x(n).forEach(function(r) {
          e[r] = n[r];
        }), e;
      }
      typeof Promise > "u" || b.Promise || (b.Promise = Promise);
      var ge = Object.getPrototypeOf, Ce = {}.hasOwnProperty;
      function ie(e, n) {
        return Ce.call(e, n);
      }
      function be(e, n) {
        typeof n == "function" && (n = n(ge(e))), (typeof Reflect > "u" ? x : Reflect.ownKeys)(n).forEach(function(r) {
          Ae(e, r, n[r]);
        });
      }
      var _t = Object.defineProperty;
      function Ae(e, n, r, a) {
        _t(e, n, te(r && ie(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, a));
      }
      function Ye(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), Ae(e.prototype, "constructor", e), { extend: be.bind(null, e.prototype) };
        } };
      }
      var Fr = Object.getOwnPropertyDescriptor, Ur = [].slice;
      function At(e, n, r) {
        return Ur.call(e, n, r);
      }
      function Vn(e, n) {
        return n(e);
      }
      function ot(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Yn(e) {
        b.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ve(e, n) {
        if (typeof n == "string" && ie(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var r = [], a = 0, s = n.length; a < s; ++a) {
            var i = ve(e, n[a]);
            r.push(i);
          }
          return r;
        }
        var u = n.indexOf(".");
        if (u !== -1) {
          var d = e[n.substr(0, u)];
          return d == null ? void 0 : ve(d, n.substr(u + 1));
        }
      }
      function ue(e, n, r) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ot(typeof r != "string" && "length" in r);
          for (var a = 0, s = n.length; a < s; ++a) ue(e, n[a], r[a]);
        } else {
          var i, u, d = n.indexOf(".");
          d !== -1 ? (i = n.substr(0, d), (u = n.substr(d + 1)) === "" ? r === void 0 ? $(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = r : ue(d = !(d = e[i]) || !ie(e, i) ? e[i] = {} : d, u, r)) : r === void 0 ? $(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = r;
        }
      }
      function Qn(e) {
        var n, r = {};
        for (n in e) ie(e, n) && (r[n] = e[n]);
        return r;
      }
      var zr = [].concat;
      function Xn(e) {
        return zr.apply([], e);
      }
      var Ge = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xn([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return b[e];
      }), Jn = new Set(Ge.map(function(e) {
        return b[e];
      })), it = null;
      function $e(e) {
        return it = /* @__PURE__ */ new WeakMap(), e = function n(r) {
          if (!r || typeof r != "object") return r;
          var a = it.get(r);
          if (a) return a;
          if ($(r)) {
            a = [], it.set(r, a);
            for (var s = 0, i = r.length; s < i; ++s) a.push(n(r[s]));
          } else if (Jn.has(r.constructor)) a = r;
          else {
            var u, d = ge(r);
            for (u in a = d === Object.prototype ? {} : Object.create(d), it.set(r, a), r) ie(r, u) && (a[u] = n(r[u]));
          }
          return a;
        }(e), it = null, e;
      }
      var Hr = {}.toString;
      function nn(e) {
        return Hr.call(e).slice(8, -1);
      }
      var rn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Vr = typeof rn == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[rn]) && n.apply(e);
      } : function() {
        return null;
      };
      function je(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var Qe = {};
      function Ee(e) {
        var n, r, a, s;
        if (arguments.length === 1) {
          if ($(e)) return e.slice();
          if (this === Qe && typeof e == "string") return [e];
          if (s = Vr(e)) {
            for (r = []; !(a = s.next()).done; ) r.push(a.value);
            return r;
          }
          if (e == null) return [e];
          if (typeof (n = e.length) != "number") return [e];
          for (r = new Array(n); n--; ) r[n] = e[n];
          return r;
        }
        for (n = arguments.length, r = new Array(n); n--; ) r[n] = arguments[n];
        return r;
      }
      var an = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, lt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], fe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(lt), Yr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Xe(e, n) {
        this.name = e, this.message = n;
      }
      function Zn(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(r) {
          return n[r].toString();
        }).filter(function(r, a, s) {
          return s.indexOf(r) === a;
        }).join(`
`);
      }
      function Pt(e, n, r, a) {
        this.failures = n, this.failedKeys = a, this.successCount = r, this.message = Zn(e, n);
      }
      function Je(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(r) {
          return n[r];
        }), this.failuresByPos = n, this.message = Zn(e, this.failures);
      }
      Ye(Xe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ye(Pt).from(Xe), Ye(Je).from(Xe);
      var sn = fe.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), Qr = Xe, L = fe.reduce(function(e, n) {
        var r = n + "Error";
        function a(s, i) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(i ? `
 ` + i : ""), this.inner = i || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Yr[n] || r, this.inner = null);
        }
        return Ye(a).from(Qr), e[n] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var qn = lt.reduce(function(e, n) {
        return e[n + "Error"] = L[n], e;
      }, {}), Dt = fe.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = L[n]), e;
      }, {});
      function Q() {
      }
      function ct(e) {
        return e;
      }
      function Xr(e, n) {
        return e == null || e === ct ? n : function(r) {
          return n(e(r));
        };
      }
      function Me(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function Jr(e, n) {
        return e === Q ? n : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var a = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var i = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? Me(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? Me(s, this.onerror) : s), i !== void 0 ? i : r;
        };
      }
      function Zr(e, n) {
        return e === Q ? n : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Me(r, this.onsuccess) : r), a && (this.onerror = this.onerror ? Me(a, this.onerror) : a);
        };
      }
      function qr(e, n) {
        return e === Q ? n : function(r) {
          var a = e.apply(this, arguments);
          te(r, a);
          var s = this.onsuccess, i = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = n.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Me(s, this.onsuccess) : s), i && (this.onerror = this.onerror ? Me(i, this.onerror) : i), a === void 0 ? r === void 0 ? void 0 : r : te(a, r);
        };
      }
      function ea(e, n) {
        return e === Q ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function on(e, n) {
        return e === Q ? n : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var a = this, s = arguments.length, i = new Array(s); s--; ) i[s] = arguments[s];
            return r.then(function() {
              return n.apply(a, i);
            });
          }
          return n.apply(this, arguments);
        };
      }
      Dt.ModifyError = Pt, Dt.DexieError = Xe, Dt.BulkError = Je;
      var pe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function er(e) {
        pe = e;
      }
      var ut = {}, tr = 100, Ge = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, ge(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, ge(n), e];
      }(), lt = Ge[0], fe = Ge[1], Ge = Ge[2], fe = fe && fe.then, Ke = lt && lt.constructor, cn = !!Ge, dt = function(e, n) {
        ft.push([e, n]), It && (queueMicrotask(na), It = !1);
      }, un = !0, It = !0, Be = [], Nt = [], ln = ct, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Pe, ft = [], Le = 0, Rt = [];
      function M(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = B;
        if (typeof e != "function") {
          if (e !== ut) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && fn(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function r(a, s) {
          try {
            s(function(i) {
              if (a._state === null) {
                if (i === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Ze();
                i && typeof i.then == "function" ? r(a, function(d, p) {
                  i instanceof M ? i._then(d, p) : i.then(d, p);
                }) : (a._state = !0, a._value = i, rr(a)), u && qe();
              }
            }, fn.bind(null, a));
          } catch (i) {
            fn(a, i);
          }
        }(this, e);
      }
      var dn = { get: function() {
        var e = B, n = Ct;
        function r(a, s) {
          var i = this, u = !e.global && (e !== B || n !== Ct), d = u && !Ie(), p = new M(function(y, w) {
            hn(i, new nr(sr(a, e, u, d), sr(s, e, u, d), y, w, e));
          });
          return this._consoleTask && (p._consoleTask = this._consoleTask), p;
        }
        return r.prototype = ut, r;
      }, set: function(e) {
        Ae(this, "then", e && e.prototype === ut ? dn : { get: function() {
          return e;
        }, set: dn.set });
      } };
      function nr(e, n, r, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = r, this.reject = a, this.psd = s;
      }
      function fn(e, n) {
        var r, a;
        Nt.push(n), e._state === null && (r = e._lib && Ze(), n = ln(n), e._state = !1, e._value = n, a = e, Be.some(function(s) {
          return s._value === a._value;
        }) || Be.push(a), rr(e), r && qe());
      }
      function rr(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var r = 0, a = n.length; r < a; ++r) hn(e, n[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Le === 0 && (++Le, dt(function() {
          --Le == 0 && gn();
        }, []));
      }
      function hn(e, n) {
        if (e._state !== null) {
          var r = e._state ? n.onFulfilled : n.onRejected;
          if (r === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++Le, dt(ta, [r, e, n]);
        } else e._listeners.push(n);
      }
      function ta(e, n, r) {
        try {
          var a, s = n._value;
          !n._state && Nt.length && (Nt = []), a = pe && n._consoleTask ? n._consoleTask.run(function() {
            return e(s);
          }) : e(s), n._state || Nt.indexOf(s) !== -1 || function(i) {
            for (var u = Be.length; u; ) if (Be[--u]._value === i._value) return Be.splice(u, 1);
          }(n), r.resolve(a);
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
        return It = un = !1, e;
      }
      function qe() {
        var e, n, r;
        do
          for (; 0 < ft.length; ) for (e = ft, ft = [], r = e.length, n = 0; n < r; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < ft.length);
        It = un = !0;
      }
      function gn() {
        var e = Be;
        Be = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Rt.slice(0), r = n.length; r; ) n[--r]();
      }
      function Tt(e) {
        return new M(ut, !1, e);
      }
      function Z(e, n) {
        var r = B;
        return function() {
          var a = Ze(), s = B;
          try {
            return Ne(r, !0), e.apply(this, arguments);
          } catch (i) {
            n && n(i);
          } finally {
            Ne(s, !1), a && qe();
          }
        };
      }
      be(M.prototype, { then: dn, _then: function(e, n) {
        hn(this, new nr(null, null, e, n, B));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, r = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? r : Tt)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? r : Tt)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return M.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return M.resolve(e()).then(function() {
            return Tt(n);
          });
        });
      }, timeout: function(e, n) {
        var r = this;
        return e < 1 / 0 ? new M(function(a, s) {
          var i = setTimeout(function() {
            return s(new L.Timeout(n));
          }, e);
          r.then(a, s).finally(clearTimeout.bind(null, i));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(M.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = ar(), be(M, { all: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(n, r) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(s, i) {
            return M.resolve(s).then(function(u) {
              e[i] = u, --a || n(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof M ? e : e && typeof e.then == "function" ? new M(function(n, r) {
          e.then(n, r);
        }) : new M(ut, !0, e);
      }, reject: Tt, race: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(n, r) {
          e.map(function(a) {
            return M.resolve(a).then(n, r);
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
      } }, follow: function(e, n) {
        return new M(function(r, a) {
          return De(function(s, i) {
            var u = B;
            u.unhandleds = [], u.onunhandled = i, u.finalize = Me(function() {
              var d, p = this;
              d = function() {
                p.unhandleds.length === 0 ? s() : i(p.unhandleds[0]);
              }, Rt.push(function y() {
                d(), Rt.splice(Rt.indexOf(y), 1);
              }), ++Le, dt(function() {
                --Le == 0 && gn();
              }, []);
            }, u.finalize), e();
          }, n, r, a);
        });
      } }), Ke && (Ke.allSettled && Ae(M, "allSettled", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(n) {
          e.length === 0 && n([]);
          var r = e.length, a = new Array(r);
          e.forEach(function(s, i) {
            return M.resolve(s).then(function(u) {
              return a[i] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[i] = { status: "rejected", reason: u };
            }).then(function() {
              return --r || n(a);
            });
          });
        });
      }), Ke.any && typeof AggregateError < "u" && Ae(M, "any", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(n, r) {
          e.length === 0 && r(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(i, u) {
            return M.resolve(i).then(function(d) {
              return n(d);
            }, function(d) {
              s[u] = d, --a || r(new AggregateError(s));
            });
          });
        });
      }), Ke.withResolvers && (M.withResolvers = Ke.withResolvers));
      var ne = { awaits: 0, echoes: 0, id: 0 }, ra = 0, xt = [], kt = 0, Ct = 0, aa = 0;
      function De(e, n, r, a) {
        var s = B, i = Object.create(s);
        return i.parent = s, i.ref = 0, i.global = !1, i.id = ++aa, Pe.env, i.env = cn ? { Promise: M, PromiseProp: { value: M, configurable: !0, writable: !0 }, all: M.all, race: M.race, allSettled: M.allSettled, any: M.any, resolve: M.resolve, reject: M.reject } : {}, n && te(i, n), ++s.ref, i.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = We(i, e, r, a), i.ref === 0 && i.finalize(), a;
      }
      function et() {
        return ne.id || (ne.id = ++ra), ++ne.awaits, ne.echoes += tr, ne.id;
      }
      function Ie() {
        return !!ne.awaits && (--ne.awaits == 0 && (ne.id = 0), ne.echoes = ne.awaits * tr, !0);
      }
      function $t(e) {
        return ne.echoes && e && e.constructor === Ke ? (et(), e.then(function(n) {
          return Ie(), n;
        }, function(n) {
          return Ie(), q(n);
        })) : e;
      }
      function sa() {
        var e = xt[xt.length - 1];
        xt.pop(), Ne(e, !1);
      }
      function Ne(e, n) {
        var r, a = B;
        (n ? !ne.echoes || kt++ && e === B : !kt || --kt && e === B) || queueMicrotask(n ? function(s) {
          ++Ct, ne.echoes && --ne.echoes != 0 || (ne.echoes = ne.awaits = ne.id = 0), xt.push(B), Ne(s, !0);
        }.bind(null, e) : sa), e !== B && (B = e, a === Pe && (Pe.env = ar()), cn && (r = Pe.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(b, "Promise", n.PromiseProp), r.all = n.all, r.race = n.race, r.resolve = n.resolve, r.reject = n.reject, n.allSettled && (r.allSettled = n.allSettled), n.any && (r.any = n.any))));
      }
      function ar() {
        var e = b.Promise;
        return cn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(b, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function We(e, n, r, a, s) {
        var i = B;
        try {
          return Ne(e, !0), n(r, a, s);
        } finally {
          Ne(i, !1);
        }
      }
      function sr(e, n, r, a) {
        return typeof e != "function" ? e : function() {
          var s = B;
          r && et(), Ne(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ne(s, !1), a && queueMicrotask(Ie);
          }
        };
      }
      function pn(e) {
        Promise === Ke && ne.echoes === 0 ? kt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + fe).indexOf("[native code]") === -1 && (et = Ie = Q);
      var q = M.reject, Fe = "￿", we = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", or = "String expected.", tt = [], jt = "__dbnames", mn = "readonly", yn = "readwrite";
      function Ue(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var ir = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Mt(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = $e(n))[e], n;
        };
      }
      function cr() {
        throw L.Type();
      }
      function H(e, n) {
        try {
          var r = ur(e), a = ur(n);
          if (r !== a) return r === "Array" ? 1 : a === "Array" ? -1 : r === "binary" ? 1 : a === "binary" ? -1 : r === "string" ? 1 : a === "string" ? -1 : r === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(s, i) {
                for (var u = s.length, d = i.length, p = u < d ? u : d, y = 0; y < p; ++y) if (s[y] !== i[y]) return s[y] < i[y] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(lr(e), lr(n));
            case "Array":
              return function(s, i) {
                for (var u = s.length, d = i.length, p = u < d ? u : d, y = 0; y < p; ++y) {
                  var w = H(s[y], i[y]);
                  if (w !== 0) return w;
                }
                return u === d ? 0 : u < d ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function ur(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = nn(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function lr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var dr = (J.prototype._trans = function(e, n, r) {
        var a = this._tx || B.trans, s = this.name, i = pe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(y, w, f) {
          if (!f.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return n(f.idbtrans, f);
        }
        var d = Ze();
        try {
          var p = a && a.db._novip === this.db._novip ? a === B.trans ? a._promise(e, u, r) : De(function() {
            return a._promise(e, u, r);
          }, { trans: a, transless: B.transless || B }) : function y(w, f, O, m) {
            if (w.idbdb && (w._state.openComplete || B.letThrough || w._vip)) {
              var E = w._createTransaction(f, O, w._dbSchema);
              try {
                E.create(), w._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === sn.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return y(w, f, O, m);
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
              return y(w, f, O, m);
            });
          }(this.db, e, [this.name], u);
          return i && (p._consoleTask = i, p = p.catch(function(y) {
            return console.trace(y), q(y);
          })), p;
        } finally {
          d && qe();
        }
      }, J.prototype.get = function(e, n) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? q(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return r.core.get({ trans: a, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(n);
      }, J.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if ($(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var n = x(e);
        if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && n.every(function(y) {
            return 0 <= d.keyPath.indexOf(y);
          })) {
            for (var p = 0; p < n.length; ++p) if (n.indexOf(d.keyPath[p]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, p) {
          return d.keyPath.length - p.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Fe) {
          var i = r.keyPath.slice(0, n.length);
          return this.where(i).equals(i.map(function(p) {
            return e[p];
          }));
        }
        !r && pe && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, p) {
          return H(d, p) === 0;
        }
        var u = n.reduce(function(f, p) {
          var y = f[0], w = f[1], f = a[p], O = e[p];
          return [y || f, y || !f ? Ue(w, f && f.multi ? function(m) {
            return m = ve(m, p), $(m) && m.some(function(E) {
              return s(O, E);
            });
          } : function(m) {
            return s(O, ve(m, p));
          }) : w];
        }, [null, null]), i = u[0], u = u[1];
        return i ? this.where(i.name).equals(e[i.keyPath]).filter(u) : r ? this.filter(u) : this.where(n).equals("");
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
        return new this.db.Collection(new this.db.WhereClause(this, $(e) ? "[".concat(e.join("+"), "]") : e));
      }, J.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, J.prototype.mapToClass = function(e) {
        var n, r = this.db, a = this.name;
        function s() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof cr && (function(p, y) {
          if (typeof y != "function" && y !== null) throw new TypeError("Class extends value " + String(y) + " is not a constructor or null");
          function w() {
            this.constructor = p;
          }
          o(p, y), p.prototype = y === null ? Object.create(y) : (w.prototype = y.prototype, new w());
        }(s, n = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var i = /* @__PURE__ */ new Set(), u = e.prototype; u; u = ge(u)) Object.getOwnPropertyNames(u).forEach(function(p) {
          return i.add(p);
        });
        function d(p) {
          if (!p) return p;
          var y, w = Object.create(e.prototype);
          for (y in p) if (!i.has(y)) try {
            w[y] = p[y];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, J.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          te(this, e);
        });
      }, J.prototype.add = function(e, n) {
        var r = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: n != null ? [n] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? M.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (i) try {
            ue(e, i, d);
          } catch {
          }
          return d;
        });
      }, J.prototype.update = function(e, n) {
        return typeof e != "object" || $(e) ? this.where(":id").equals(e).modify(n) : (e = ve(e, this.schema.primKey.keyPath), e === void 0 ? q(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, J.prototype.put = function(e, n) {
        var r = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [u], keys: n != null ? [n] : null });
        }).then(function(d) {
          return d.numFailures ? M.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (i) try {
            ue(e, i, d);
          } catch {
          }
          return d;
        });
      }, J.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(r) {
          return n.core.mutate({ trans: r, type: "delete", keys: [e] });
        }).then(function(r) {
          return r.numFailures ? M.reject(r.failures[0]) : void 0;
        });
      }, J.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: ir });
        }).then(function(n) {
          return n.numFailures ? M.reject(n.failures[0]) : void 0;
        });
      }, J.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(r) {
          return n.core.getMany({ keys: e, trans: r }).then(function(a) {
            return a.map(function(s) {
              return n.hook.reading.fire(s);
            });
          });
        });
      }, J.prototype.bulkAdd = function(e, n, r) {
        var a = this, s = Array.isArray(n) ? n : void 0, i = (r = r || (s ? void 0 : n)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var y = a.schema.primKey, d = y.auto, y = y.keyPath;
          if (y && s) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, y = y && d ? e.map(Mt(y)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: y, wantResults: i }).then(function(E) {
            var f = E.numFailures, O = E.results, m = E.lastResult, E = E.failures;
            if (f === 0) return i ? O : m;
            throw new Je("".concat(a.name, ".bulkAdd(): ").concat(f, " of ").concat(p, " operations failed"), E);
          });
        });
      }, J.prototype.bulkPut = function(e, n, r) {
        var a = this, s = Array.isArray(n) ? n : void 0, i = (r = r || (s ? void 0 : n)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var y = a.schema.primKey, d = y.auto, y = y.keyPath;
          if (y && s) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, y = y && d ? e.map(Mt(y)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: y, wantResults: i }).then(function(E) {
            var f = E.numFailures, O = E.results, m = E.lastResult, E = E.failures;
            if (f === 0) return i ? O : m;
            throw new Je("".concat(a.name, ".bulkPut(): ").concat(f, " of ").concat(p, " operations failed"), E);
          });
        });
      }, J.prototype.bulkUpdate = function(e) {
        var n = this, r = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), i = [];
        return this._trans("readwrite", function(u) {
          return r.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
            var p = [], y = [];
            e.forEach(function(f, O) {
              var m = f.key, E = f.changes, S = d[O];
              if (S) {
                for (var v = 0, A = Object.keys(E); v < A.length; v++) {
                  var P = A[v], D = E[P];
                  if (P === n.schema.primKey.keyPath) {
                    if (H(D, m) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ue(S, P, D);
                }
                i.push(O), p.push(m), y.push(S);
              }
            });
            var w = p.length;
            return r.mutate({ trans: u, type: "put", keys: p, values: y, updates: { keys: a, changeSpecs: s } }).then(function(f) {
              var O = f.numFailures, m = f.failures;
              if (O === 0) return w;
              for (var E = 0, S = Object.keys(m); E < S.length; E++) {
                var v, A = S[E], P = i[Number(A)];
                P != null && (v = m[A], delete m[A], m[P] = v);
              }
              throw new Je("".concat(n.name, ".bulkUpdate(): ").concat(O, " of ").concat(w, " operations failed"), m);
            });
          });
        });
      }, J.prototype.bulkDelete = function(e) {
        var n = this, r = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(u) {
          var s = u.numFailures, i = u.lastResult, u = u.failures;
          if (s === 0) return i;
          throw new Je("".concat(n.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), u);
        });
      }, J);
      function J() {
      }
      function ht(e) {
        function n(u, d) {
          if (d) {
            for (var p = arguments.length, y = new Array(p - 1); --p; ) y[p - 1] = arguments[p];
            return r[u].subscribe.apply(null, y), e;
          }
          if (typeof u == "string") return r[u];
        }
        var r = {};
        n.addEventType = i;
        for (var a = 1, s = arguments.length; a < s; ++a) i(arguments[a]);
        return n;
        function i(u, d, p) {
          if (typeof u != "object") {
            var y;
            d = d || ea;
            var w = { subscribers: [], fire: p = p || Q, subscribe: function(f) {
              w.subscribers.indexOf(f) === -1 && (w.subscribers.push(f), w.fire = d(w.fire, f));
            }, unsubscribe: function(f) {
              w.subscribers = w.subscribers.filter(function(O) {
                return O !== f;
              }), w.fire = w.subscribers.reduce(d, p);
            } };
            return r[u] = n[u] = w;
          }
          x(y = u).forEach(function(f) {
            var O = y[f];
            if ($(O)) i(f, y[f][0], y[f][1]);
            else {
              if (O !== "asap") throw new L.InvalidArgument("Invalid event config");
              var m = i(f, ct, function() {
                for (var E = arguments.length, S = new Array(E); E--; ) S[E] = arguments[E];
                m.subscribers.forEach(function(v) {
                  Yn(function() {
                    v.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function gt(e, n) {
        return Ye(n).from({ prototype: e }), n;
      }
      function nt(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function bn(e, n) {
        e.filter = Ue(e.filter, n);
      }
      function vn(e, n, r) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Ue(a(), n());
        } : n, e.justLimit = r && !a;
      }
      function Gt(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var r = n.getIndexByKeyPath(e.index);
        if (!r) throw new L.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return r;
      }
      function fr(e, n, r) {
        var a = Gt(e, n.schema);
        return n.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Kt(e, n, r, a) {
        var s = e.replayFilter ? Ue(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var i = {}, u = function(d, p, y) {
            var w, f;
            s && !s(p, y, function(O) {
              return p.stop(O);
            }, function(O) {
              return p.fail(O);
            }) || ((f = "" + (w = p.primaryKey)) == "[object ArrayBuffer]" && (f = "" + new Uint8Array(w)), ie(i, f) || (i[f] = !0, n(d, p, y)));
          };
          return Promise.all([e.or._iterate(u, r), hr(fr(e, a, r), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return hr(fr(e, a, r), Ue(e.algorithm, s), n, !e.keysOnly && e.valueMapper);
      }
      function hr(e, n, r, a) {
        var s = Z(a ? function(i, u, d) {
          return r(a(i), u, d);
        } : r);
        return e.then(function(i) {
          if (i) return i.start(function() {
            var u = function() {
              return i.continue();
            };
            n && !n(i, function(d) {
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
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var r = n.add;
          if ($(r)) return g(g([], $(e) ? e : [], !0), r).sort();
          if (typeof r == "number") return (Number(e) || 0) + r;
          if (typeof r == "bigint") try {
            return BigInt(e) + r;
          } catch {
            return BigInt(0) + r;
          }
          throw new TypeError("Invalid term ".concat(r));
        }
        if (n.remove !== void 0) {
          var a = n.remove;
          if ($(a)) return $(e) ? e.filter(function(s) {
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
        return r = (r = n.replacePrefix) === null || r === void 0 ? void 0 : r[0], r && typeof e == "string" && e.startsWith(r) ? n.replacePrefix[1] + e.substring(r.length) : e;
      }, gr);
      function gr(e) {
        this["@@propmod"] = e;
      }
      var oa = (V.prototype._read = function(e, n) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, q.bind(null, r.error)) : r.table._trans("readonly", e).then(n);
      }, V.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, q.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, V.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = Ue(n.algorithm, e);
      }, V.prototype._iterate = function(e, n) {
        return Kt(this._ctx, e, n, this._ctx.table.core);
      }, V.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && te(r, e), n._ctx = r, n;
      }, V.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, V.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(r) {
          return Kt(n, e, r, n.table.core);
        });
      }, V.prototype.count = function(e) {
        var n = this;
        return this._read(function(r) {
          var a = n._ctx, s = a.table.core;
          if (nt(a, !0)) return s.count({ trans: r, query: { index: Gt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var i = 0;
          return Kt(a, function() {
            return ++i, !1;
          }, r, s).then(function() {
            return i;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, n) {
        var r = e.split(".").reverse(), a = r[0], s = r.length - 1;
        function i(p, y) {
          return y ? i(p[r[y]], y - 1) : p[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(p, y) {
          return H(i(p, s), i(y, s)) * u;
        }
        return this.toArray(function(p) {
          return p.sort(d);
        }).then(n);
      }, V.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(r) {
          var a = n._ctx;
          if (a.dir === "next" && nt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, i = Gt(a, a.table.core.schema);
            return a.table.core.query({ trans: r, limit: a.limit, values: !0, query: { index: i, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Kt(a, function(d) {
            return u.push(d);
          }, r, a.table.core).then(function() {
            return u;
          });
        }, e);
      }, V.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, nt(n) ? vn(n, function() {
          var r = e;
          return function(a, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              a.advance(r), r = 0;
            }), !1);
          };
        }) : vn(n, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, V.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), vn(this._ctx, function() {
          var n = e;
          return function(r, a, s) {
            return --n <= 0 && a(s), 0 <= n;
          };
        }, !0), this;
      }, V.prototype.until = function(e, n) {
        return bn(this._ctx, function(r, a, s) {
          return !e(r.value) || (a(s), n);
        }), this;
      }, V.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, V.prototype.last = function(e) {
        return this.reverse().first(e);
      }, V.prototype.filter = function(e) {
        var n;
        return bn(this._ctx, function(r) {
          return e(r.value);
        }), (n = this._ctx).isMatch = Ue(n.isMatch, e), this;
      }, V.prototype.and = function(e) {
        return this.filter(e);
      }, V.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, V.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, V.prototype.desc = function() {
        return this.reverse();
      }, V.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(r, a) {
          e(a.key, a);
        });
      }, V.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, V.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(r, a) {
          e(a.primaryKey, a);
        });
      }, V.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(a, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, V.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && nt(n, !0) && 0 < n.limit) return this._read(function(a) {
          var s = Gt(n, n.table.core.schema);
          return n.table.core.query({ trans: a, values: !1, limit: n.limit, query: { index: s, range: n.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(a, s) {
          r.push(s.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, V.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, V.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, V.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, V.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return bn(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = ie(n, a);
          return n[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var n = this, r = this._ctx;
        return this._write(function(a) {
          var s, i, u;
          u = typeof e == "function" ? e : (s = x(e), i = s.length, function(v) {
            for (var A = !1, P = 0; P < i; ++P) {
              var D = s[P], I = e[D], N = ve(v, D);
              I instanceof pt ? (ue(v, D, I.execute(N)), A = !0) : N !== I && (ue(v, D, I), A = !0);
            }
            return A;
          });
          var d = r.table.core, f = d.schema.primaryKey, p = f.outbound, y = f.extractKey, w = 200, f = n.db._options.modifyChunkSize;
          f && (w = typeof f == "object" ? f[d.name] || f["*"] || 200 : f);
          function O(v, D) {
            var P = D.failures, D = D.numFailures;
            E += v - D;
            for (var I = 0, N = x(P); I < N.length; I++) {
              var C = N[I];
              m.push(P[C]);
            }
          }
          var m = [], E = 0, S = [];
          return n.clone().primaryKeys().then(function(v) {
            function A(D) {
              var I = Math.min(w, v.length - D);
              return d.getMany({ trans: a, keys: v.slice(D, D + I), cache: "immutable" }).then(function(N) {
                for (var C = [], R = [], T = p ? [] : null, j = [], k = 0; k < I; ++k) {
                  var G = N[k], F = { value: $e(G), primKey: v[D + k] };
                  u.call(F, F.value, F) !== !1 && (F.value == null ? j.push(v[D + k]) : p || H(y(G), y(F.value)) === 0 ? (R.push(F.value), p && T.push(v[D + k])) : (j.push(v[D + k]), C.push(F.value)));
                }
                return Promise.resolve(0 < C.length && d.mutate({ trans: a, type: "add", values: C }).then(function(U) {
                  for (var z in U.failures) j.splice(parseInt(z), 1);
                  O(C.length, U);
                })).then(function() {
                  return (0 < R.length || P && typeof e == "object") && d.mutate({ trans: a, type: "put", keys: T, values: R, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O(R.length, U);
                  });
                }).then(function() {
                  return (0 < j.length || P && e === En) && d.mutate({ trans: a, type: "delete", keys: j, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O(j.length, U);
                  });
                }).then(function() {
                  return v.length > D + I && A(D + w);
                });
              });
            }
            var P = nt(r) && r.limit === 1 / 0 && (typeof e != "function" || e === En) && { index: r.index, range: r.range };
            return A(0).then(function() {
              if (0 < m.length) throw new Pt("Error modifying one or more objects", m, E, S);
              return v.length;
            });
          });
        });
      }, V.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return nt(e) && (e.isPrimKey || n.type === 3) ? this._write(function(r) {
          var a = e.table.core.schema.primaryKey, s = n;
          return e.table.core.count({ trans: r, query: { index: a, range: s } }).then(function(i) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(u) {
              var d = u.failures;
              if (u.lastResult, u.results, u = u.numFailures, u) throw new Pt("Could not delete some values", Object.keys(d).map(function(p) {
                return d[p];
              }), i - u);
              return i - u;
            });
          });
        }) : this.modify(En);
      }, V);
      function V() {
      }
      var En = function(e, n) {
        return n.value = null;
      };
      function ia(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function ca(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function le(e, n, r) {
        return e = e instanceof mr ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(n), e;
      }
      function rt(e) {
        return new e.Collection(e, function() {
          return pr("");
        }).limit(0);
      }
      function Bt(e, n, r, a) {
        var s, i, u, d, p, y, w, f = r.length;
        if (!r.every(function(E) {
          return typeof E == "string";
        })) return le(e, or);
        function O(E) {
          s = E === "next" ? function(v) {
            return v.toUpperCase();
          } : function(v) {
            return v.toLowerCase();
          }, i = E === "next" ? function(v) {
            return v.toLowerCase();
          } : function(v) {
            return v.toUpperCase();
          }, u = E === "next" ? ia : ca;
          var S = r.map(function(v) {
            return { lower: i(v), upper: s(v) };
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
          return Re(d[0], p[f - 1] + a);
        }), e._ondirectionchange = function(E) {
          O(E);
        };
        var m = 0;
        return e._addAlgorithm(function(E, S, v) {
          var A = E.key;
          if (typeof A != "string") return !1;
          var P = i(A);
          if (n(P, p, m)) return !0;
          for (var D = null, I = m; I < f; ++I) {
            var N = function(C, R, T, j, k, G) {
              for (var F = Math.min(C.length, j.length), U = -1, z = 0; z < F; ++z) {
                var de = R[z];
                if (de !== j[z]) return k(C[z], T[z]) < 0 ? C.substr(0, z) + T[z] + T.substr(z + 1) : k(C[z], j[z]) < 0 ? C.substr(0, z) + j[z] + T.substr(z + 1) : 0 <= U ? C.substr(0, U) + R[U] + T.substr(U + 1) : null;
                k(C[z], de) < 0 && (U = z);
              }
              return F < j.length && G === "next" ? C + T.substr(C.length) : F < C.length && G === "prev" ? C.substr(0, T.length) : U < 0 ? null : C.substr(0, U) + j[U] + T.substr(U + 1);
            }(A, P, d[I], p[I], u, y);
            N === null && D === null ? m = I + 1 : (D === null || 0 < u(D, N)) && (D = N);
          }
          return S(D !== null ? function() {
            E.continue(D + w);
          } : v), !1;
        }), e;
      }
      function Re(e, n, r, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: r, upperOpen: a };
      }
      function pr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var mr = (Object.defineProperty(re.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), re.prototype.between = function(e, n, r, a) {
        r = r !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (r || a) && (!r || !a) ? rt(this) : new this.Collection(this, function() {
            return Re(e, n, !r, !a);
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
          return Re(e, void 0, !0);
        });
      }, re.prototype.aboveOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Re(e, void 0, !1);
        });
      }, re.prototype.below = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Re(void 0, e, !1, !0);
        });
      }, re.prototype.belowOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Re(void 0, e);
        });
      }, re.prototype.startsWith = function(e) {
        return typeof e != "string" ? le(this, or) : this.between(e, e + Fe, !0, !0);
      }, re.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Bt(this, function(n, r) {
          return n.indexOf(r[0]) === 0;
        }, [e], Fe);
      }, re.prototype.equalsIgnoreCase = function(e) {
        return Bt(this, function(n, r) {
          return n === r[0];
        }, [e], "");
      }, re.prototype.anyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? rt(this) : Bt(this, function(n, r) {
          return r.indexOf(n) !== -1;
        }, e, "");
      }, re.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Ee.apply(Qe, arguments);
        return e.length === 0 ? rt(this) : Bt(this, function(n, r) {
          return r.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, Fe);
      }, re.prototype.anyOf = function() {
        var e = this, n = Ee.apply(Qe, arguments), r = this._cmp;
        try {
          n.sort(r);
        } catch {
          return le(this, we);
        }
        if (n.length === 0) return rt(this);
        var a = new this.Collection(this, function() {
          return Re(n[0], n[n.length - 1]);
        });
        a._ondirectionchange = function(i) {
          r = i === "next" ? e._ascending : e._descending, n.sort(r);
        };
        var s = 0;
        return a._addAlgorithm(function(i, u, d) {
          for (var p = i.key; 0 < r(p, n[s]); ) if (++s === n.length) return u(d), !1;
          return r(p, n[s]) === 0 || (u(function() {
            i.continue(n[s]);
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
        var n = e.reduce(function(r, a) {
          return r ? r.concat([[r[r.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, re.prototype.inAnyRange = function(A, n) {
        var r = this, a = this._cmp, s = this._ascending, i = this._descending, u = this._min, d = this._max;
        if (A.length === 0) return rt(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return le(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", L.InvalidArgument);
        var p = !n || n.includeLowers !== !1, y = n && n.includeUppers === !0, w, f = s;
        function O(P, D) {
          return f(P[0], D[0]);
        }
        try {
          (w = A.reduce(function(P, D) {
            for (var I = 0, N = P.length; I < N; ++I) {
              var C = P[I];
              if (a(D[0], C[1]) < 0 && 0 < a(D[1], C[0])) {
                C[0] = u(C[0], D[0]), C[1] = d(C[1], D[1]);
                break;
              }
            }
            return I === N && P.push(D), P;
          }, [])).sort(O);
        } catch {
          return le(this, we);
        }
        var m = 0, E = y ? function(P) {
          return 0 < s(P, w[m][1]);
        } : function(P) {
          return 0 <= s(P, w[m][1]);
        }, S = p ? function(P) {
          return 0 < i(P, w[m][0]);
        } : function(P) {
          return 0 <= i(P, w[m][0]);
        }, v = E, A = new this.Collection(this, function() {
          return Re(w[0][0], w[w.length - 1][1], !p, !y);
        });
        return A._ondirectionchange = function(P) {
          f = P === "next" ? (v = E, s) : (v = S, i), w.sort(O);
        }, A._addAlgorithm(function(P, D, I) {
          for (var N, C = P.key; v(C); ) if (++m === w.length) return D(I), !1;
          return !E(N = C) && !S(N) || (r._cmp(C, w[m][1]) === 0 || r._cmp(C, w[m][0]) === 0 || D(function() {
            f === s ? P.continue(w[m][0]) : P.continue(w[m][1]);
          }), !1);
        }), A;
      }, re.prototype.startsWithAnyOf = function() {
        var e = Ee.apply(Qe, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? rt(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + Fe];
        })) : le(this, "startsWithAnyOf() only works with strings");
      }, re);
      function re() {
      }
      function me(e) {
        return Z(function(n) {
          return mt(n), e(n.target.error), !1;
        });
      }
      function mt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var yt = "storagemutated", wn = "x-storagemutated-1", Te = ht(null, yt), ua = (ye.prototype._lock = function() {
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
        var n = this;
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
          mt(s), n._reject(e.error);
        }), e.onabort = Z(function(s) {
          mt(s), n.active && n._reject(new L.Abort(e.error)), n.active = !1, n.on("abort").fire(s);
        }), e.oncomplete = Z(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Te.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ye.prototype._promise = function(e, n, r) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return q(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return q(new L.TransactionInactive());
        if (this._locked()) return new M(function(i, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, r).then(i, u);
          }, B]);
        });
        if (r) return De(function() {
          var i = new M(function(u, d) {
            a._lock();
            var p = n(u, d, a);
            p && p.then && p.then(u, d);
          });
          return i.finally(function() {
            return a._unlock();
          }), i._lib = !0, i;
        });
        var s = new M(function(i, u) {
          var d = n(i, u, a);
          d && d.then && d.then(i, u);
        });
        return s._lib = !0, s;
      }, ye.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ye.prototype.waitFor = function(e) {
        var n, r = this._root(), a = M.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return a;
        }) : (r._waitingFor = a, r._waitingQueue = [], n = r.idbtrans.objectStore(r.storeNames[0]), function i() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (n.get(-1 / 0).onsuccess = i);
        }());
        var s = r._waitingFor;
        return new M(function(i, u) {
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
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (ie(n, e)) return n[e];
        var r = this.schema[e];
        if (!r) throw new L.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), n[e] = r;
      }, ye);
      function ye() {
      }
      function Sn(e, n, r, a, s, i, u) {
        return { name: e, keyPath: n, unique: r, multi: a, auto: s, compound: i, src: (r && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + yr(n) };
      }
      function yr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function On(e, n, r) {
        return { name: e, primKey: n, indexes: r, mappedClass: null, idxByName: (a = function(s) {
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
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(r) {
          return r[n];
        } : function(r) {
          return ve(r, n);
        } : function(r) {
          return ve(r, e);
        };
        var n;
      }
      function br(e) {
        return [].slice.call(e);
      }
      var la = 0;
      function vt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function da(e, n, p) {
        function a(v) {
          if (v.type === 3) return null;
          if (v.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var m = v.lower, E = v.upper, S = v.lowerOpen, v = v.upperOpen;
          return m === void 0 ? E === void 0 ? null : n.upperBound(E, !!v) : E === void 0 ? n.lowerBound(m, !!S) : n.bound(m, E, !!S, !!v);
        }
        function s(O) {
          var m, E = O.name;
          return { name: E, schema: O, mutate: function(S) {
            var v = S.trans, A = S.type, P = S.keys, D = S.values, I = S.range;
            return new Promise(function(N, C) {
              N = Z(N);
              var R = v.objectStore(E), T = R.keyPath == null, j = A === "put" || A === "add";
              if (!j && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var k, G = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (G === 0) return N({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function F(ce) {
                ++de, mt(ce);
              }
              var U = [], z = [], de = 0;
              if (A === "deleteRange") {
                if (I.type === 4) return N({ numFailures: de, failures: z, results: [], lastResult: void 0 });
                I.type === 3 ? U.push(k = R.clear()) : U.push(k = R.delete(a(I)));
              } else {
                var T = j ? T ? [D, P] : [D, null] : [P, null], W = T[0], se = T[1];
                if (j) for (var oe = 0; oe < G; ++oe) U.push(k = se && se[oe] !== void 0 ? R[A](W[oe], se[oe]) : R[A](W[oe])), k.onerror = F;
                else for (oe = 0; oe < G; ++oe) U.push(k = R[A](W[oe])), k.onerror = F;
              }
              function qt(ce) {
                ce = ce.target.result, U.forEach(function(Ve, Wn) {
                  return Ve.error != null && (z[Wn] = Ve.error);
                }), N({ numFailures: de, failures: z, results: A === "delete" ? P : U.map(function(Ve) {
                  return Ve.result;
                }), lastResult: ce });
              }
              k.onerror = function(ce) {
                F(ce), qt(ce);
              }, k.onsuccess = qt;
            });
          }, getMany: function(S) {
            var v = S.trans, A = S.keys;
            return new Promise(function(P, D) {
              P = Z(P);
              for (var I, N = v.objectStore(E), C = A.length, R = new Array(C), T = 0, j = 0, k = function(U) {
                U = U.target, R[U._pos] = U.result, ++j === T && P(R);
              }, G = me(D), F = 0; F < C; ++F) A[F] != null && ((I = N.get(A[F]))._pos = F, I.onsuccess = k, I.onerror = G, ++T);
              T === 0 && P(R);
            });
          }, get: function(S) {
            var v = S.trans, A = S.key;
            return new Promise(function(P, D) {
              P = Z(P);
              var I = v.objectStore(E).get(A);
              I.onsuccess = function(N) {
                return P(N.target.result);
              }, I.onerror = me(D);
            });
          }, query: (m = y, function(S) {
            return new Promise(function(v, A) {
              v = Z(v);
              var P, D, I, T = S.trans, N = S.values, C = S.limit, k = S.query, R = C === 1 / 0 ? void 0 : C, j = k.index, k = k.range, T = T.objectStore(E), j = j.isPrimaryKey ? T : T.index(j.name), k = a(k);
              if (C === 0) return v({ result: [] });
              m ? ((R = N ? j.getAll(k, R) : j.getAllKeys(k, R)).onsuccess = function(G) {
                return v({ result: G.target.result });
              }, R.onerror = me(A)) : (P = 0, D = !N && "openKeyCursor" in j ? j.openKeyCursor(k) : j.openCursor(k), I = [], D.onsuccess = function(G) {
                var F = D.result;
                return F ? (I.push(N ? F.value : F.primaryKey), ++P === C ? v({ result: I }) : void F.continue()) : v({ result: I });
              }, D.onerror = me(A));
            });
          }), openCursor: function(S) {
            var v = S.trans, A = S.values, P = S.query, D = S.reverse, I = S.unique;
            return new Promise(function(N, C) {
              N = Z(N);
              var j = P.index, R = P.range, T = v.objectStore(E), T = j.isPrimaryKey ? T : T.index(j.name), j = D ? I ? "prevunique" : "prev" : I ? "nextunique" : "next", k = !A && "openKeyCursor" in T ? T.openKeyCursor(a(R), j) : T.openCursor(a(R), j);
              k.onerror = me(C), k.onsuccess = Z(function(G) {
                var F, U, z, de, W = k.result;
                W ? (W.___id = ++la, W.done = !1, F = W.continue.bind(W), U = (U = W.continuePrimaryKey) && U.bind(W), z = W.advance.bind(W), de = function() {
                  throw new Error("Cursor not stopped");
                }, W.trans = v, W.stop = W.continue = W.continuePrimaryKey = W.advance = function() {
                  throw new Error("Cursor not started");
                }, W.fail = Z(C), W.next = function() {
                  var se = this, oe = 1;
                  return this.start(function() {
                    return oe-- ? se.continue() : se.stop();
                  }).then(function() {
                    return se;
                  });
                }, W.start = function(se) {
                  function oe() {
                    if (k.result) try {
                      se();
                    } catch (ce) {
                      W.fail(ce);
                    }
                    else W.done = !0, W.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, W.stop();
                  }
                  var qt = new Promise(function(ce, Ve) {
                    ce = Z(ce), k.onerror = me(Ve), W.fail = Ve, W.stop = function(Wn) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = de, ce(Wn);
                    };
                  });
                  return k.onsuccess = Z(function(ce) {
                    k.onsuccess = oe, oe();
                  }), W.continue = F, W.continuePrimaryKey = U, W.advance = z, oe(), qt;
                }, N(W)) : N(null);
              }, C);
            });
          }, count: function(S) {
            var v = S.query, A = S.trans, P = v.index, D = v.range;
            return new Promise(function(I, N) {
              var C = A.objectStore(E), R = P.isPrimaryKey ? C : C.index(P.name), C = a(D), R = C ? R.count(C) : R.count();
              R.onsuccess = Z(function(T) {
                return I(T.target.result);
              }), R.onerror = me(N);
            });
          } };
        }
        var i, u, d, w = (u = p, d = br((i = e).objectStoreNames), { schema: { name: i.name, tables: d.map(function(O) {
          return u.objectStore(O);
        }).map(function(O) {
          var m = O.keyPath, v = O.autoIncrement, E = $(m), S = {}, v = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: E, keyPath: m, autoIncrement: v, unique: !0, extractKey: _n(m) }, indexes: br(O.indexNames).map(function(A) {
            return O.index(A);
          }).map(function(I) {
            var P = I.name, D = I.unique, N = I.multiEntry, I = I.keyPath, N = { name: P, compound: $(I), keyPath: I, unique: D, multiEntry: N, extractKey: _n(I) };
            return S[vt(I)] = N;
          }), getIndexByKeyPath: function(A) {
            return S[vt(A)];
          } };
          return S[":id"] = v.primaryKey, m != null && (S[vt(m)] = v.primaryKey), v;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), p = w.schema, y = w.hasGetAll, w = p.tables.map(s), f = {};
        return w.forEach(function(O) {
          return f[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!f[O]) throw new Error("Table '".concat(O, "' not found"));
          return f[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: bt(n), schema: p };
      }
      function fa(e, n, r, a) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (a = da(n, s, a), e.dbcore.reduce(function(i, u) {
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
      function Wt(e, n, r, a) {
        r.forEach(function(s) {
          var i = a[s];
          n.forEach(function(u) {
            var d = function p(y, w) {
              return Fr(y, w) || (y = ge(y)) && p(y, w);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(p) {
              _t(this, s, { value: p, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, i));
          });
        });
      }
      function An(e, n) {
        n.forEach(function(r) {
          for (var a in r) r[a] instanceof e.Table && delete r[a];
        });
      }
      function ha(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function ga(e, n, r, a) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = On("$meta", Er("")[0], []), e._storeNames.push("$meta"));
        var i = e._createTransaction("readwrite", e._storeNames, s);
        i.create(r), i._completion.catch(a);
        var u = i._reject.bind(i), d = B.transless || B;
        De(function() {
          return B.trans = i, B.transless = d, n !== 0 ? (Lt(e, r), y = n, ((p = i).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(w) {
            return w ?? y;
          }) : M.resolve(y)).then(function(w) {
            return O = w, m = i, E = r, S = [], w = (f = e)._versions, v = f._dbSchema = Ut(0, f.idbdb, E), (w = w.filter(function(A) {
              return A._cfg.version >= O;
            })).length !== 0 ? (w.forEach(function(A) {
              S.push(function() {
                var P = v, D = A._cfg.dbschema;
                zt(f, P, E), zt(f, D, E), v = f._dbSchema = D;
                var I = Pn(P, D);
                I.add.forEach(function(j) {
                  Dn(E, j[0], j[1].primKey, j[1].indexes);
                }), I.change.forEach(function(j) {
                  if (j.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var k = E.objectStore(j.name);
                  j.add.forEach(function(G) {
                    return Ft(k, G);
                  }), j.change.forEach(function(G) {
                    k.deleteIndex(G.name), Ft(k, G);
                  }), j.del.forEach(function(G) {
                    return k.deleteIndex(G);
                  });
                });
                var N = A._cfg.contentUpgrade;
                if (N && A._cfg.version > O) {
                  Lt(f, E), m._memoizedTables = {};
                  var C = Qn(D);
                  I.del.forEach(function(j) {
                    C[j] = P[j];
                  }), An(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], x(C), C), m.schema = C;
                  var R, T = an(N);
                  return T && et(), I = M.follow(function() {
                    var j;
                    (R = N(m)) && T && (j = Ie.bind(null, null), R.then(j, j));
                  }), R && typeof R.then == "function" ? M.resolve(R) : I.then(function() {
                    return R;
                  });
                }
              }), S.push(function(P) {
                var D, I, N = A._cfg.dbschema;
                D = N, I = P, [].slice.call(I.db.objectStoreNames).forEach(function(C) {
                  return D[C] == null && I.db.deleteObjectStore(C);
                }), An(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), m.schema = f._dbSchema;
              }), S.push(function(P) {
                f.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(f.idbdb.version / 10) === A._cfg.version ? (f.idbdb.deleteObjectStore("$meta"), delete f._dbSchema.$meta, f._storeNames = f._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return S.length ? M.resolve(S.shift()(m.idbtrans)).then(A) : M.resolve();
            }().then(function() {
              vr(v, E);
            })) : M.resolve();
            var f, O, m, E, S, v;
          }).catch(u)) : (x(s).forEach(function(w) {
            Dn(r, w, s[w].primKey, s[w].indexes);
          }), Lt(e, r), void M.follow(function() {
            return e.on.populate.fire(i);
          }).catch(u));
          var p, y;
        });
      }
      function pa(e, n) {
        vr(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var r = Ut(0, e.idbdb, n);
        zt(e, e._dbSchema, n);
        for (var a = 0, s = Pn(r, e._dbSchema).change; a < s.length; a++) {
          var i = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = n.objectStore(u.name);
            u.add.forEach(function(p) {
              pe && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(p.src)), Ft(d, p);
            });
          }(s[a]);
          if (typeof i == "object") return i.value;
        }
      }
      function Pn(e, n) {
        var r, a = { del: [], add: [], change: [] };
        for (r in e) n[r] || a.del.push(r);
        for (r in n) {
          var s = e[r], i = n[r];
          if (s) {
            var u = { name: r, def: i, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || s.primKey.auto !== i.primKey.auto) u.recreate = !0, a.change.push(u);
            else {
              var d = s.idxByName, p = i.idxByName, y = void 0;
              for (y in d) p[y] || u.del.push(y);
              for (y in p) {
                var w = d[y], f = p[y];
                w ? w.src !== f.src && u.change.push(f) : u.add.push(f);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && a.change.push(u);
            }
          } else a.add.push([r, i]);
        }
        return a;
      }
      function Dn(e, n, r, a) {
        var s = e.db.createObjectStore(n, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return a.forEach(function(i) {
          return Ft(s, i);
        }), s;
      }
      function vr(e, n) {
        x(e).forEach(function(r) {
          n.db.objectStoreNames.contains(r) || (pe && console.debug("Dexie: Creating missing table", r), Dn(n, r, e[r].primKey, e[r].indexes));
        });
      }
      function Ft(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function Ut(e, n, r) {
        var a = {};
        return At(n.objectStoreNames, 0).forEach(function(s) {
          for (var i = r.objectStore(s), u = Sn(yr(y = i.keyPath), y || "", !0, !1, !!i.autoIncrement, y && typeof y != "string", !0), d = [], p = 0; p < i.indexNames.length; ++p) {
            var w = i.index(i.indexNames[p]), y = w.keyPath, w = Sn(w.name, y, !!w.unique, !!w.multiEntry, !1, y && typeof y != "string", !1);
            d.push(w);
          }
          a[s] = On(s, u, d);
        }), a;
      }
      function zt(e, n, r) {
        for (var a = r.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var i = a[s], u = r.objectStore(i);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var p = u.indexNames[d], y = u.index(p).keyPath, w = typeof y == "string" ? y : "[" + At(y).join("+") + "]";
            !n[i] || (y = n[i].idxByName[w]) && (y.name = p, delete n[i].idxByName[w], n[i].idxByName[p] = y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && b.WorkerGlobalScope && b instanceof b.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Er(e) {
        return e.split(",").map(function(n, r) {
          var a = (n = n.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Sn(a, s || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), $(s), r === 0);
        });
      }
      var ma = (Ht.prototype._parseStoresSpec = function(e, n) {
        x(e).forEach(function(r) {
          if (e[r] !== null) {
            var a = Er(e[r]), s = a.shift();
            if (s.unique = !0, s.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(i) {
              if (i.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!i.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), n[r] = On(r, s, a);
          }
        });
      }, Ht.prototype.stores = function(r) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? te(this._cfg.storesSource, r) : r;
        var r = n._versions, a = {}, s = {};
        return r.forEach(function(i) {
          te(a, i._cfg.storesSource), s = i._cfg.dbschema = {}, i._parseStoresSpec(a, s);
        }), n._dbSchema = s, An(n, [n._allTables, n, n.Transaction.prototype]), Wt(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], x(s), s), n._storeNames = x(s), this;
      }, Ht.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = on(this._cfg.contentUpgrade || Q, e), this;
      }, Ht);
      function Ht() {
      }
      function In(e, n) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Se(jt, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Nn(e) {
        return e && typeof e.databases == "function";
      }
      function Rn(e) {
        return De(function() {
          return B.letThrough = !0, e();
        });
      }
      function Tn(e) {
        return !("from" in e);
      }
      var ae = function(e, n) {
        if (!this) {
          var r = new ae();
          return e && "d" in e && te(r, e), r;
        }
        te(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Et(e, n, r) {
        var a = H(n, r);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Tn(e)) return te(e, { from: n, to: r, d: 1 });
          var s = e.l, a = e.r;
          if (H(r, e.from) < 0) return s ? Et(s, n, r) : e.l = { from: n, to: r, d: 1, l: null, r: null }, Sr(e);
          if (0 < H(n, e.to)) return a ? Et(a, n, r) : e.r = { from: n, to: r, d: 1, l: null, r: null }, Sr(e);
          H(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && wt(e, s), a && r && wt(e, a);
        }
      }
      function wt(e, n) {
        Tn(n) || function r(a, p) {
          var i = p.from, u = p.to, d = p.l, p = p.r;
          Et(a, i, u), d && r(a, d), p && r(a, p);
        }(e, n);
      }
      function wr(e, n) {
        var r = Vt(n), a = r.next();
        if (a.done) return !1;
        for (var s = a.value, i = Vt(e), u = i.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (H(d.from, s.to) <= 0 && 0 <= H(d.to, s.from)) return !0;
          H(s.from, d.from) < 0 ? s = (a = r.next(d.from)).value : d = (u = i.next(s.from)).value;
        }
        return !1;
      }
      function Vt(e) {
        var n = Tn(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && H(r, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || H(r, n.n.to) <= 0) return { value: n.n, done: !1 };
            case 2:
              if (n.n.r) {
                n.s = 3, n = { up: n, n: n.n.r, s: 0 };
                continue;
              }
            case 3:
              n = n.up;
          }
          return { done: !0 };
        } };
      }
      function Sr(e) {
        var n, r, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (n = s == "r" ? "l" : "r", r = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], r[s] = a[n], (e[n] = r).d = Or(r)), e.d = Or(e);
      }
      function Or(r) {
        var n = r.r, r = r.l;
        return (n ? r ? Math.max(n.d, r.d) : n.d : r ? r.d : 0) + 1;
      }
      function Yt(e, n) {
        return x(n).forEach(function(r) {
          e[r] ? wt(e[r], n[r]) : e[r] = function a(s) {
            var i, u, d = {};
            for (i in s) ie(s, i) && (u = s[i], d[i] = !u || typeof u != "object" || Jn.has(u.constructor) ? u : a(u));
            return d;
          }(n[r]);
        }), e;
      }
      function xn(e, n) {
        return e.all || n.all || Object.keys(e).some(function(r) {
          return n[r] && wr(n[r], e[r]);
        });
      }
      be(ae.prototype, ((fe = { add: function(e) {
        return wt(this, e), this;
      }, addKey: function(e) {
        return Et(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(r) {
          return Et(n, r, r);
        }), this;
      }, hasKey: function(e) {
        var n = Vt(this).next(e).value;
        return n && H(n.from, e) <= 0 && 0 <= H(n.to, e);
      } })[rn] = function() {
        return Vt(this);
      }, fe));
      var ze = {}, kn = {}, Cn = !1;
      function Qt(e) {
        Yt(kn, e), Cn || (Cn = !0, setTimeout(function() {
          Cn = !1, $n(kn, !(kn = {}));
        }, 0));
      }
      function $n(e, n) {
        n === void 0 && (n = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(ze); a < s.length; a++) _r(u = s[a], e, r, n);
        else for (var i in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
          d && (i = d[1], d = d[2], (u = ze["idb://".concat(i, "/").concat(d)]) && _r(u, e, r, n));
        }
        r.forEach(function(p) {
          return p();
        });
      }
      function _r(e, n, r, a) {
        for (var s = [], i = 0, u = Object.entries(e.queries.query); i < u.length; i++) {
          for (var d = u[i], p = d[0], y = [], w = 0, f = d[1]; w < f.length; w++) {
            var O = f[w];
            xn(n, O.obsSet) ? O.subscribers.forEach(function(v) {
              return r.add(v);
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
        var n = e._state, r = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? q(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, s = Math.round(10 * e.verno), i = !1;
        function u() {
          if (n.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new M(function(O, m) {
            if (u(), !r) throw new L.MissingAPI();
            var E = e.name, S = n.autoSchema || !s ? r.open(E) : r.open(E, s);
            if (!S) throw new L.MissingAPI();
            S.onerror = me(m), S.onblocked = Z(e._fireOnBlocked), S.onupgradeneeded = Z(function(v) {
              var A;
              w = S.transaction, n.autoSchema && !e._options.allowEmptyDB ? (S.onerror = mt, w.abort(), S.result.close(), (A = r.deleteDatabase(E)).onsuccess = A.onerror = Z(function() {
                m(new L.NoSuchDatabase("Database ".concat(E, " doesnt exist")));
              })) : (w.onerror = me(m), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, f = v < 1, e.idbdb = S.result, i && pa(e, w), ga(e, v / 10, w, m));
            }, m), S.onsuccess = Z(function() {
              w = null;
              var v, A, P, D, I, N = e.idbdb = S.result, C = At(N.objectStoreNames);
              if (0 < C.length) try {
                var R = N.transaction((D = C).length === 1 ? D[0] : D, "readonly");
                if (n.autoSchema) A = N, P = R, (v = e).verno = A.version / 10, P = v._dbSchema = Ut(0, A, P), v._storeNames = At(A.objectStoreNames, 0), Wt(v, [v._allTables], x(P), P);
                else if (zt(e, e._dbSchema, R), ((I = Pn(Ut(0, (I = e).idbdb, R), I._dbSchema)).add.length || I.change.some(function(T) {
                  return T.add.length || T.change.length;
                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), N.close(), s = N.version + 1, i = !0, O(d());
                Lt(e, R);
              } catch {
              }
              tt.push(e), N.onversionchange = Z(function(T) {
                n.vcFired = !0, e.on("versionchange").fire(T);
              }), N.onclose = Z(function(T) {
                e.on("close").fire(T);
              }), f && (I = e._deps, R = E, N = I.indexedDB, I = I.IDBKeyRange, Nn(N) || R === jt || In(N, I).put({ name: R }).catch(Q)), O();
            }, m);
          }).catch(function(O) {
            switch (O?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return M.reject(O);
          });
        }
        var p, y = n.dbReadyResolve, w = null, f = !1;
        return M.race([a, (typeof navigator > "u" ? M.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function m() {
            return indexedDB.databases().finally(O);
          }
          p = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), n.onReadyBeingFired = [], M.resolve(Rn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < n.onReadyBeingFired.length) {
              var m = n.onReadyBeingFired.reduce(on, Q);
              return n.onReadyBeingFired = [], M.resolve(Rn(function() {
                return m(e.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          n.openCanceller === a && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(O) {
          n.dbOpenError = O;
          try {
            w && w.abort();
          } catch {
          }
          return a === n.openCanceller && e._close(), q(O);
        }).finally(function() {
          n.openComplete = !0, y();
        }).then(function() {
          var O;
          return f && (O = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(E) {
              E.name && (O["idb://".concat(e.name, "/").concat(m.name, "/").concat(E.name)] = new ae(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(m.name, "/")] = O["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new ae(-1 / 0, [[[]]]);
          }), Te(yt).fire(O), $n(O, !0)), e;
        });
      }
      function jn(e) {
        function n(i) {
          return e.next(i);
        }
        var r = s(n), a = s(function(i) {
          return e.throw(i);
        });
        function s(i) {
          return function(p) {
            var d = i(p), p = d.value;
            return d.done ? p : p && typeof p.then == "function" ? p.then(r, a) : $(p) ? Promise.all(p).then(r, a) : r(p);
          };
        }
        return s(n)();
      }
      function Xt(e, n, r) {
        for (var a = $(e) ? e.slice() : [e], s = 0; s < r; ++s) a.push(n);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(n) {
          var r = e.table(n), a = r.schema, s = {}, i = [];
          function u(f, O, m) {
            var E = vt(f), S = s[E] = s[E] || [], v = f == null ? 0 : typeof f == "string" ? 1 : f.length, A = 0 < O, A = l(l({}, m), { name: A ? "".concat(E, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: A, keyTail: O, keyLength: v, extractKey: _n(f), unique: !A && m.unique });
            return S.push(A), A.isPrimaryKey || i.push(A), 1 < v && u(v === 2 ? f[0] : f.slice(0, v - 1), O + 1, m), S.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), A;
          }
          n = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [n];
          for (var d = 0, p = a.indexes; d < p.length; d++) {
            var y = p[d];
            u(y.keyPath, 0, y);
          }
          function w(f) {
            var O, m = f.query.index;
            return m.isVirtual ? l(l({}, f), { query: { index: m.lowLevelIndex, range: (O = f.query.range, m = m.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Xt(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Xt(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : f;
          }
          return l(l({}, r), { schema: l(l({}, a), { primaryKey: n, indexes: i, getIndexByKeyPath: function(f) {
            return (f = s[vt(f)]) && f[0];
          } }), count: function(f) {
            return r.count(w(f));
          }, query: function(f) {
            return r.query(w(f));
          }, openCursor: function(f) {
            var O = f.query.index, m = O.keyTail, E = O.isVirtual, S = O.keyLength;
            return E ? r.openCursor(w(f)).then(function(A) {
              return A && v(A);
            }) : r.openCursor(f);
            function v(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Xt(P, f.reverse ? e.MAX_KEY : e.MIN_KEY, m)) : f.unique ? A.continue(A.key.slice(0, S).concat(f.reverse ? e.MIN_KEY : e.MAX_KEY, m)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                A.continuePrimaryKey(Xt(P, e.MAX_KEY, m), D);
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
      function Mn(e, n, r, a) {
        return r = r || {}, a = a || "", x(e).forEach(function(s) {
          var i, u, d;
          ie(n, s) ? (i = e[s], u = n[s], typeof i == "object" && typeof u == "object" && i && u ? (d = nn(i)) !== nn(u) ? r[a + s] = n[s] : d === "Object" ? Mn(i, u, r, a + s + ".") : i !== u && (r[a + s] = n[s]) : i !== u && (r[a + s] = n[s])) : r[a + s] = void 0;
        }), x(n).forEach(function(s) {
          ie(e, s) || (r[a + s] = n[s]);
        }), r;
      }
      function Gn(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(n) {
          var r = e.table(n), a = r.schema.primaryKey;
          return l(l({}, r), { mutate: function(s) {
            var i = B.trans, u = i.table(n).hook, d = u.deleting, p = u.creating, y = u.updating;
            switch (s.type) {
              case "add":
                if (p.fire === Q) break;
                return i._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (p.fire === Q && y.fire === Q) break;
                return i._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (d.fire === Q) break;
                return i._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (d.fire === Q) break;
                return i._promise("readwrite", function() {
                  return function f(O, m, E) {
                    return r.query({ trans: O, values: !1, query: { index: a, range: m }, limit: E }).then(function(S) {
                      var v = S.result;
                      return w({ type: "delete", keys: v, trans: O }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : v.length < E ? { failures: [], numFailures: 0, lastResult: void 0 } : f(O, l(l({}, m), { lower: v[v.length - 1], lowerOpen: !0 }), E);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function w(f) {
              var O, m, E, S = B.trans, v = f.keys || Gn(a, f);
              if (!v) throw new Error("Keys missing");
              return (f = f.type === "add" || f.type === "put" ? l(l({}, f), { keys: v }) : l({}, f)).type !== "delete" && (f.values = g([], f.values)), f.keys && (f.keys = g([], f.keys)), O = r, E = v, ((m = f).type === "add" ? Promise.resolve([]) : O.getMany({ trans: m.trans, keys: E, cache: "immutable" })).then(function(A) {
                var P = v.map(function(D, I) {
                  var N, C, R, T = A[I], j = { onerror: null, onsuccess: null };
                  return f.type === "delete" ? d.fire.call(j, D, T, S) : f.type === "add" || T === void 0 ? (N = p.fire.call(j, D, f.values[I], S), D == null && N != null && (f.keys[I] = D = N, a.outbound || ue(f.values[I], a.keyPath, D))) : (N = Mn(T, f.values[I]), (C = y.fire.call(j, N, D, T, S)) && (R = f.values[I], Object.keys(C).forEach(function(k) {
                    ie(R, k) ? R[k] = C[k] : ue(R, k, C[k]);
                  }))), j;
                });
                return r.mutate(f).then(function(D) {
                  for (var I = D.failures, N = D.results, C = D.numFailures, D = D.lastResult, R = 0; R < v.length; ++R) {
                    var T = (N || v)[R], j = P[R];
                    T == null ? j.onerror && j.onerror(I[R]) : j.onsuccess && j.onsuccess(f.type === "put" && A[R] ? f.values[R] : T);
                  }
                  return { failures: I, results: N, numFailures: C, lastResult: D };
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
      function Ar(e, n, r) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], s = 0, i = 0; s < n.keys.length && i < e.length; ++s) H(n.keys[s], e[i]) === 0 && (a.push(r ? $e(n.values[s]) : n.values[s]), ++i);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Ea = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var r = e.table(n);
          return l(l({}, r), { getMany: function(a) {
            if (!a.cache) return r.getMany(a);
            var s = Ar(a.keys, a.trans._cache, a.cache === "clone");
            return s ? M.resolve(s) : r.getMany(a).then(function(i) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? $e(i) : i }, i;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), r.mutate(a);
          } });
        } };
      } };
      function Pr(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function Dr(e, n) {
        switch (e) {
          case "query":
            return n.values && !n.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var wa = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, r = new ae(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, i) {
          if (B.subscr && s !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));
          return e.transaction(a, s, i);
        }, table: function(a) {
          var s = e.table(a), i = s.schema, u = i.primaryKey, f = i.indexes, d = u.extractKey, p = u.outbound, y = u.autoIncrement && f.filter(function(m) {
            return m.compound && m.keyPath.includes(u.keyPath);
          }), w = l(l({}, s), { mutate: function(m) {
            function E(k) {
              return k = "idb://".concat(n, "/").concat(a, "/").concat(k), D[k] || (D[k] = new ae());
            }
            var S, v, A, P = m.trans, D = m.mutatedParts || (m.mutatedParts = {}), I = E(""), N = E(":dels"), C = m.type, j = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Gn(u, m).filter(function(k) {
              return k;
            }), m.values] : [], R = j[0], T = j[1], j = m.trans._cache;
            return $(R) ? (I.addKeys(R), (j = C === "delete" || R.length === T.length ? Ar(R, j) : null) || N.addKeys(R), (j || T) && (S = E, v = j, A = T, i.indexes.forEach(function(k) {
              var G = S(k.name || "");
              function F(z) {
                return z != null ? k.extractKey(z) : null;
              }
              function U(z) {
                return k.multiEntry && $(z) ? z.forEach(function(de) {
                  return G.addKey(de);
                }) : G.addKey(z);
              }
              (v || A).forEach(function(z, se) {
                var W = v && F(v[se]), se = A && F(A[se]);
                H(W, se) !== 0 && (W != null && U(W), se != null && U(se));
              });
            }))) : R ? (T = { from: (T = R.lower) !== null && T !== void 0 ? T : e.MIN_KEY, to: (T = R.upper) !== null && T !== void 0 ? T : e.MAX_KEY }, N.add(T), I.add(T)) : (I.add(r), N.add(r), i.indexes.forEach(function(k) {
              return E(k.name).add(r);
            })), s.mutate(m).then(function(k) {
              return !R || m.type !== "add" && m.type !== "put" || (I.addKeys(k.results), y && y.forEach(function(G) {
                for (var F = m.values.map(function(W) {
                  return G.extractKey(W);
                }), U = G.keyPath.findIndex(function(W) {
                  return W === u.keyPath;
                }), z = 0, de = k.results.length; z < de; ++z) F[z][U] = k.results[z];
                E(G.name).addKeys(F);
              })), P.mutatedParts = Yt(P.mutatedParts || {}, D), k;
            });
          } }), f = function(E) {
            var S = E.query, E = S.index, S = S.range;
            return [E, new ae((E = S.lower) !== null && E !== void 0 ? E : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, O = { get: function(m) {
            return [u, new ae(m.key)];
          }, getMany: function(m) {
            return [u, new ae().addKeys(m.keys)];
          }, count: f, query: f, openCursor: f };
          return x(O).forEach(function(m) {
            w[m] = function(E) {
              var S = B.subscr, v = !!S, A = Pr(B, s) && Dr(m, E) ? E.obsSet = {} : S;
              if (v) {
                var P = function(T) {
                  return T = "idb://".concat(n, "/").concat(a, "/").concat(T), A[T] || (A[T] = new ae());
                }, D = P(""), I = P(":dels"), S = O[m](E), v = S[0], S = S[1];
                if ((m === "query" && v.isPrimaryKey && !E.values ? I : P(v.name || "")).add(S), !v.isPrimaryKey) {
                  if (m !== "count") {
                    var N = m === "query" && p && E.values && s.query(l(l({}, E), { values: !1 }));
                    return s[m].apply(this, arguments).then(function(T) {
                      if (m === "query") {
                        if (p && E.values) return N.then(function(F) {
                          return F = F.result, D.addKeys(F), T;
                        });
                        var j = E.values ? T.result.map(d) : T.result;
                        (E.values ? D : I).addKeys(j);
                      } else if (m === "openCursor") {
                        var k = T, G = E.values;
                        return k && Object.create(k, { key: { get: function() {
                          return I.addKey(k.primaryKey), k.key;
                        } }, primaryKey: { get: function() {
                          var F = k.primaryKey;
                          return I.addKey(F), F;
                        } }, value: { get: function() {
                          return G && D.addKey(k.primaryKey), k.value;
                        } } });
                      }
                      return T;
                    });
                  }
                  I.add(r);
                }
              }
              return s[m].apply(this, arguments);
            };
          }), w;
        } });
      } };
      function Ir(e, n, r) {
        if (r.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return r.numFailures === a ? null : (n = l({}, n), $(n.keys) && (n.keys = n.keys.filter(function(s, i) {
          return !(i in r.failures);
        })), "values" in n && $(n.values) && (n.values = n.values.filter(function(s, i) {
          return !(i in r.failures);
        })), n);
      }
      function Kn(e, n) {
        return r = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < H(r, a.lower) : 0 <= H(r, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? H(e, n.upper) < 0 : H(e, n.upper) <= 0));
        var r, a;
      }
      function Nr(e, n, O, a, s, i) {
        if (!O || O.length === 0) return e;
        var u = n.query.index, d = u.multiEntry, p = n.query.range, y = a.schema.primaryKey.extractKey, w = u.extractKey, f = (u.lowLevelIndex || u).extractKey, O = O.reduce(function(m, E) {
          var S = m, v = [];
          if (E.type === "add" || E.type === "put") for (var A = new ae(), P = E.values.length - 1; 0 <= P; --P) {
            var D, I = E.values[P], N = y(I);
            A.hasKey(N) || (D = w(I), (d && $(D) ? D.some(function(k) {
              return Kn(k, p);
            }) : Kn(D, p)) && (A.addKey(N), v.push(I)));
          }
          switch (E.type) {
            case "add":
              var C = new ae().addKeys(n.values ? m.map(function(G) {
                return y(G);
              }) : m), S = m.concat(n.values ? v.filter(function(G) {
                return G = y(G), !C.hasKey(G) && (C.addKey(G), !0);
              }) : v.map(function(G) {
                return y(G);
              }).filter(function(G) {
                return !C.hasKey(G) && (C.addKey(G), !0);
              }));
              break;
            case "put":
              var R = new ae().addKeys(E.values.map(function(G) {
                return y(G);
              }));
              S = m.filter(function(G) {
                return !R.hasKey(n.values ? y(G) : G);
              }).concat(n.values ? v : v.map(function(G) {
                return y(G);
              }));
              break;
            case "delete":
              var T = new ae().addKeys(E.keys);
              S = m.filter(function(G) {
                return !T.hasKey(n.values ? y(G) : G);
              });
              break;
            case "deleteRange":
              var j = E.range;
              S = m.filter(function(G) {
                return !Kn(y(G), j);
              });
          }
          return S;
        }, e);
        return O === e ? e : (O.sort(function(m, E) {
          return H(f(m), f(E)) || H(y(m), y(E));
        }), n.limit && n.limit < 1 / 0 && (O.length > n.limit ? O.length = n.limit : e.length === n.limit && O.length < n.limit && (s.dirty = !0)), i ? Object.freeze(O) : O);
      }
      function Rr(e, n) {
        return H(e.lower, n.lower) === 0 && H(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Sa(e, n) {
        return function(r, a, s, i) {
          if (r === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = H(r, a)) === 0) {
            if (s && i) return 0;
            if (s) return 1;
            if (i) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(r, a, s, i) {
          if (r === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = H(r, a)) === 0) {
            if (s && i) return 0;
            if (s) return -1;
            if (i) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function Oa(e, n, r, a) {
        e.subscribers.add(r), a.addEventListener("abort", function() {
          var s, i;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, i = n, setTimeout(function() {
            s.subscribers.size === 0 && je(i, s);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return l(l({}, e), { transaction: function(r, a, s) {
          var i, u, d = e.transaction(r, a, s);
          return a === "readwrite" && (u = (i = new AbortController()).signal, s = function(p) {
            return function() {
              if (i.abort(), a === "readwrite") {
                for (var y = /* @__PURE__ */ new Set(), w = 0, f = r; w < f.length; w++) {
                  var O = f[w], m = ze["idb://".concat(n, "/").concat(O)];
                  if (m) {
                    var E = e.table(O), S = m.optimisticOps.filter(function(G) {
                      return G.trans === d;
                    });
                    if (d._explicit && p && d.mutatedParts) for (var v = 0, A = Object.values(m.queries.query); v < A.length; v++) for (var P = 0, D = (C = A[v]).slice(); P < D.length; P++) xn((R = D[P]).obsSet, d.mutatedParts) && (je(C, R), R.subscribers.forEach(function(G) {
                      return y.add(G);
                    }));
                    else if (0 < S.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== d;
                      });
                      for (var I = 0, N = Object.values(m.queries.query); I < N.length; I++) for (var C, R, T, j = 0, k = (C = N[I]).slice(); j < k.length; j++) (R = k[j]).res != null && d.mutatedParts && (p && !R.dirty ? (T = Object.isFrozen(R.res), T = Nr(R.res, R.req, S, E, R, T), R.dirty ? (je(C, R), R.subscribers.forEach(function(G) {
                        return y.add(G);
                      })) : T !== R.res && (R.res = T, R.promise = M.resolve({ result: T }))) : (R.dirty && je(C, R), R.subscribers.forEach(function(G) {
                        return y.add(G);
                      })));
                    }
                  }
                }
                y.forEach(function(G) {
                  return G();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: u }), d.addEventListener("error", s(!1), { signal: u }), d.addEventListener("complete", s(!0), { signal: u })), d;
        }, table: function(r) {
          var a = e.table(r), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(i) {
            var u = B.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(i);
            var d = ze["idb://".concat(n, "/").concat(r)];
            return d ? (u = a.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || Gn(s, i).some(function(p) {
              return p == null;
            })) ? (d.optimisticOps.push(i), i.mutatedParts && Qt(i.mutatedParts), u.then(function(p) {
              0 < p.numFailures && (je(d.optimisticOps, i), (p = Ir(0, i, p)) && d.optimisticOps.push(p), i.mutatedParts && Qt(i.mutatedParts));
            }), u.catch(function() {
              je(d.optimisticOps, i), i.mutatedParts && Qt(i.mutatedParts);
            })) : u.then(function(p) {
              var y = Ir(0, l(l({}, i), { values: i.values.map(function(w, f) {
                var O;
                return p.failures[f] ? w : (w = (O = s.keyPath) !== null && O !== void 0 && O.includes(".") ? $e(w) : l({}, w), ue(w, s.keyPath, p.results[f]), w);
              }) }), p);
              d.optimisticOps.push(y), queueMicrotask(function() {
                return i.mutatedParts && Qt(i.mutatedParts);
              });
            }), u) : a.mutate(i);
          }, query: function(i) {
            if (!Pr(B, a) || !Dr("query", i)) return a.query(i);
            var u = ((y = B.trans) === null || y === void 0 ? void 0 : y.db._options.cache) === "immutable", f = B, d = f.requery, p = f.signal, y = function(E, S, v, A) {
              var P = ze["idb://".concat(E, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[v])) return [null, !1, P, null];
              var D = S[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (v) {
                case "query":
                  var I = D.find(function(N) {
                    return N.req.limit === A.limit && N.req.values === A.values && Rr(N.req.query.range, A.query.range);
                  });
                  return I ? [I, !0, P, D] : [D.find(function(N) {
                    return ("limit" in N.req ? N.req.limit : 1 / 0) >= A.limit && (!A.values || N.req.values) && Sa(N.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return I = D.find(function(N) {
                    return Rr(N.req.query.range, A.query.range);
                  }), [I, !!I, P, D];
              }
            }(n, r, "query", i), w = y[0], f = y[1], O = y[2], m = y[3];
            return w && f ? w.obsSet = i.obsSet : (f = a.query(i).then(function(E) {
              var S = E.result;
              if (w && (w.res = S), u) {
                for (var v = 0, A = S.length; v < A; ++v) Object.freeze(S[v]);
                Object.freeze(S);
              } else E.result = $e(S);
              return E;
            }).catch(function(E) {
              return m && w && je(m, w), Promise.reject(E);
            }), w = { obsSet: i.obsSet, promise: f, subscribers: /* @__PURE__ */ new Set(), type: "query", req: i, dirty: !1 }, m ? m.push(w) : (m = [w], (O = O || (ze["idb://".concat(n, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[i.query.index.name || ""] = m)), Oa(w, m, d, p), w.promise.then(function(E) {
              return { result: Nr(E.result, i, O?.optimisticOps, a, w, u) };
            });
          } });
        } });
      } };
      function Jt(e, n) {
        return new Proxy(e, { get: function(r, a, s) {
          return a === "db" ? n : Reflect.get(r, a, s);
        } });
      }
      var Se = (ee.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new L.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, r = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), n.push(r), n.sort(ha), r.stores({}), this._state.autoSchema = !1, r);
      }, ee.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new M(function(r, a) {
          if (n._state.openComplete) return a(new L.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new L.DatabaseClosed());
            n.open().catch(Q);
          }
          n._state.dbReadyPromise.then(r, a);
        }).then(e);
      }, ee.prototype.use = function(e) {
        var n = e.stack, r = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: n, name: s }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: r, level: a ?? 10, name: s }), e.sort(function(i, u) {
          return i.level - u.level;
        }), this;
      }, ee.prototype.unuse = function(e) {
        var n = e.stack, r = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(s) {
          return a ? s.create !== a : !!r && s.name !== r;
        })), this;
      }, ee.prototype.open = function() {
        var e = this;
        return We(Pe, function() {
          return ya(e);
        });
      }, ee.prototype._close = function() {
        var e = this._state, n = tt.indexOf(this);
        if (0 <= n && tt.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new M(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new M(function(r, a) {
          e.cancelOpen = a;
        }));
      }, ee.prototype.close = function(r) {
        var n = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        n ? (r.isBeingOpened && r.cancelOpen(new L.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new L.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, ee.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new M(function(s, i) {
          function u() {
            n.close(e);
            var d = n._deps.indexedDB.deleteDatabase(n.name);
            d.onsuccess = Z(function() {
              var p, y, w;
              p = n._deps, y = n.name, w = p.indexedDB, p = p.IDBKeyRange, Nn(w) || y === jt || In(w, p).delete(y).catch(Q), s();
            }), d.onerror = me(i), d.onblocked = n._fireOnBlocked;
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
        return x(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), ee.prototype.transaction = function() {
        var e = function(n, r, a) {
          var s = arguments.length;
          if (s < 2) throw new L.InvalidArgument("Too few arguments");
          for (var i = new Array(s - 1); --s; ) i[s - 1] = arguments[s];
          return a = i.pop(), [n, Xn(i), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ee.prototype._transaction = function(e, n, r) {
        var a = this, s = B.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var i, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = n.map(function(y) {
            if (y = y instanceof a.Table ? y.name : y, typeof y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return y;
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
            s && u.forEach(function(y) {
              if (s && s.storeNames.indexOf(y) === -1) {
                if (!d) throw new L.SubTransaction("Table " + y + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (y) {
          return s ? s._promise(null, function(w, f) {
            f(y);
          }) : q(y);
        }
        var p = function y(w, f, O, m, E) {
          return M.resolve().then(function() {
            var S = B.transless || B, v = w._createTransaction(f, O, w._dbSchema, m);
            if (v.explicit = !0, S = { trans: v, transless: S }, m) v.idbtrans = m.idbtrans;
            else try {
              v.create(), v.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === sn.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return y(w, f, O, null, E);
              })) : q(D);
            }
            var A, P = an(E);
            return P && et(), S = M.follow(function() {
              var D;
              (A = E.call(v, v)) && (P ? (D = Ie.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = jn(A)));
            }, S), (A && typeof A.then == "function" ? M.resolve(A).then(function(D) {
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
        }.bind(null, this, i, u, s, r);
        return s ? s._promise(i, p, "lock") : B.trans ? We(B.transless, function() {
          return a._whenReady(p);
        }) : this._whenReady(p);
      }, ee.prototype.table = function(e) {
        if (!ie(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, n) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = n = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, i, u, d, p, y = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        y.dbReadyPromise = new M(function(f) {
          y.dbReadyResolve = f;
        }), y.openCanceller = new M(function(f, O) {
          y.cancelOpen = O;
        }), this._state = y, this.name = e, this.on = ht(this, "populate", "blocked", "versionchange", "close", { ready: [on, Q] }), this.on.ready.subscribe = Vn(this.on.ready.subscribe, function(f) {
          return function(O, m) {
            ee.vip(function() {
              var E, S = r._state;
              S.openComplete ? (S.dbOpenError || M.resolve().then(O), m && f(O)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(O), m && f(O)) : (f(O), E = r, m || f(function v() {
                E.on.ready.unsubscribe(O), E.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (s = this, gt(oa.prototype, function(A, v) {
          this.db = s;
          var m = ir, E = null;
          if (v) try {
            m = v();
          } catch (P) {
            E = P;
          }
          var S = A._ctx, v = S.table, A = v.hook.reading.fire;
          this._ctx = { table: v, index: S.index, isPrimKey: !S.index || v.schema.primKey.keyPath && S.index === v.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: E, or: S.or, valueMapper: A !== ct ? A : null };
        })), this.Table = (i = this, gt(dr.prototype, function(f, O, m) {
          this.db = i, this._tx = m, this.name = f, this.schema = O, this.hook = i._allTables[f] ? i._allTables[f].hook : ht(null, { creating: [Jr, Q], reading: [Xr, ct], updating: [qr, Q], deleting: [Zr, Q] });
        })), this.Transaction = (u = this, gt(ua.prototype, function(f, O, m, E, S) {
          var v = this;
          this.db = u, this.mode = f, this.storeNames = O, this.schema = m, this.chromeTransactionDurability = E, this.idbtrans = null, this.on = ht(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new M(function(A, P) {
            v._resolve = A, v._reject = P;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(A) {
            var P = v.active;
            return v.active = !1, v.on.error.fire(A), v.parent ? v.parent._reject(A) : P && v.idbtrans && v.idbtrans.abort(), q(A);
          });
        })), this.Version = (d = this, gt(ma.prototype, function(f) {
          this.db = d, this._cfg = { version: f, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (p = this, gt(mr.prototype, function(f, O, m) {
          if (this.db = p, this._ctx = { table: f, index: O === ":id" ? null : O, or: m }, this._cmp = this._ascending = H, this._descending = function(E, S) {
            return H(S, E);
          }, this._max = function(E, S) {
            return 0 < H(E, S) ? E : S;
          }, this._min = function(E, S) {
            return H(E, S) < 0 ? E : S;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(f) {
          0 < f.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(f) {
          !f.newVersion || f.newVersion < f.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(f.oldVersion / 10));
        }), this._maxKey = bt(n.IDBKeyRange), this._createTransaction = function(f, O, m, E) {
          return new r.Transaction(f, O, m, r._options.chromeTransactionDurability, E);
        }, this._fireOnBlocked = function(f) {
          r.on("blocked").fire(f), tt.filter(function(O) {
            return O.name === r.name && O !== r && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(f);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var w = new Proxy(this, { get: function(f, O, m) {
          if (O === "_vip") return !0;
          if (O === "table") return function(S) {
            return Jt(r.table(S), w);
          };
          var E = Reflect.get(f, O, m);
          return E instanceof dr ? Jt(E, w) : O === "tables" ? E.map(function(S) {
            return Jt(S, w);
          }) : O === "_createTransaction" ? function() {
            return Jt(E.apply(this, arguments), w);
          } : E;
        } });
        this.vip = w, a.forEach(function(f) {
          return f(r);
        });
      }
      var Zt, fe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Bn.prototype.subscribe = function(e, n, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: r });
      }, Bn.prototype[fe] = function() {
        return this;
      }, Bn);
      function Bn(e) {
        this._subscribe = e;
      }
      try {
        Zt = { indexedDB: b.indexedDB || b.mozIndexedDB || b.webkitIndexedDB || b.msIndexedDB, IDBKeyRange: b.IDBKeyRange || b.webkitIDBKeyRange };
      } catch {
        Zt = { indexedDB: null, IDBKeyRange: null };
      }
      function Tr(e) {
        var n, r = !1, a = new Aa(function(s) {
          var i = an(e), u, d = !1, p = {}, y = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), f && Te.storagemutated.unsubscribe(m));
          } };
          s.start && s.start(w);
          var f = !1, O = function() {
            return pn(E);
          }, m = function(S) {
            Yt(p, S), xn(y, p) && O();
          }, E = function() {
            var S, v, A;
            !d && Zt.indexedDB && (p = {}, S = {}, u && u.abort(), u = new AbortController(), A = function(P) {
              var D = Ze();
              try {
                i && et();
                var I = De(e, P);
                return I = i ? I.finally(Ie) : I;
              } finally {
                D && qe();
              }
            }(v = { subscr: S, signal: u.signal, requery: O, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              r = !0, n = P, d || v.signal.aborted || (p = {}, function(D) {
                for (var I in D) if (ie(D, I)) return;
                return 1;
              }(y = S) || f || (Te(yt, m), f = !0), pn(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || pn(function() {
                d || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(O, 0), w;
        });
        return a.hasValue = function() {
          return r;
        }, a.getValue = function() {
          return n;
        }, a;
      }
      var He = Se;
      function Ln(e) {
        var n = xe;
        try {
          xe = !0, Te.storagemutated.fire(e), $n(e, !0);
        } finally {
          xe = n;
        }
      }
      be(He, l(l({}, Dt), { delete: function(e) {
        return new He(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new He(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = He.dependencies, r = n.indexedDB, n = n.IDBKeyRange, (Nn(r) ? Promise.resolve(r.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== jt;
            });
          }) : In(r, n).toCollection().primaryKeys()).then(e);
        } catch {
          return q(new L.MissingAPI());
        }
        var n, r;
      }, defineClass: function() {
        return function(e) {
          te(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? We(B.transless, e) : e();
      }, vip: Rn, async: function(e) {
        return function() {
          try {
            var n = jn(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : M.resolve(n);
          } catch (r) {
            return q(r);
          }
        };
      }, spawn: function(e, n, r) {
        try {
          var a = jn(e.apply(r, n || []));
          return a && typeof a.then == "function" ? a : M.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, n) {
        return n = M.resolve(typeof e == "function" ? He.ignoreTransaction(e) : e).timeout(n || 6e4), B.trans ? B.trans.waitFor(n) : n;
      }, Promise: M, debug: { get: function() {
        return pe;
      }, set: function(e) {
        er(e);
      } }, derive: Ye, extend: te, props: be, override: Vn, Events: ht, on: Te, liveQuery: Tr, extendObservabilitySet: Yt, getByKeyPath: ve, setByKeyPath: ue, delByKeyPath: function(e, n) {
        typeof n == "string" ? ue(e, n, void 0) : "length" in n && [].map.call(n, function(r) {
          ue(e, r, void 0);
        });
      }, shallowClone: Qn, deepClone: $e, getObjectDiff: Mn, cmp: H, asap: Yn, minKey: -1 / 0, addons: [], connections: tt, errnames: sn, dependencies: Zt, cache: ze, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, r) {
        return e + n / Math.pow(10, 2 * r);
      }) })), He.maxKey = bt(He.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Te(yt, function(e) {
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
      })(), typeof at.unref == "function" && at.unref(), Te(yt, function(e) {
        xe || at.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Se.disableBfCache && e.persisted) {
          pe && console.debug("Dexie: handling persisted pagehide"), at?.close();
          for (var n = 0, r = tt; n < r.length; n++) r[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Se.disableBfCache && e.persisted && (pe && console.debug("Dexie: handling persisted pageshow"), xr(), Ln({ all: new ae(-1 / 0, [[]]) }));
      })), M.rejectionMapper = function(e, n) {
        return !e || e instanceof Xe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !qn[e.name] ? e : (n = new qn[e.name](n || e.message, e), "stack" in e && Ae(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, er(pe), l(Se, Object.freeze({ __proto__: null, Dexie: Se, liveQuery: Tr, Entity: cr, cmp: H, PropModification: pt, replacePrefix: function(e, n) {
        return new pt({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new pt({ add: e });
      }, remove: function(e) {
        return new pt({ remove: e });
      }, default: Se, RangeSet: ae, mergeRanges: wt, rangesOverlap: wr }), { default: Se }), Se;
    });
  }(tn)), tn.exports;
}
var Ga = Ma();
const zn = /* @__PURE__ */ $a(Ga), $r = Symbol.for("Dexie"), St = globalThis[$r] || (globalThis[$r] = zn);
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
  constructor(t) {
    this.options = t, this.db = new St(t.app), this.db.version(12).stores({
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
    // data: data.data,
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
      K(2, ["%cstorage", c.STORAGE, X.DASHBOARD_LOAD, t.id]);
    });
    return o === void 0 ? {
      data: null,
      message: `Dashboard ${t.id} Load error`,
      success: !1
    } : (o.message = `Dashboard ${t.id} retrieved from storage`, o.success = !0, o);
  };
  getDashboards = async (t) => {
    const o = (b) => t?.id === b.id, l = (b) => t?.name ? b.name.includes(t?.name) : !1, g = await this.db.table(_.DASHBOARD).toArray().then((b) => t?.id ? b.filter(o) : b).then((b) => t?.name ? b.filter(l) : b).catch(() => {
      K(2, ["%cstorage", c.STORAGE, X.DASHBOARD_LOAD, t]);
    });
    return g !== void 0 && K(3, [
      "%cstorage%c %cdashboards",
      c.STORAGE,
      c.NONE,
      c.WIDGET,
      t
    ]), {
      // @ts-ignore
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
    const t = Date.now() / 1e3, o = (b) => b.expires < t, l = (b) => b.expires < t;
    return await this.db.table(_.TOPICS).orderBy("expires").filter(o).delete().catch((b) => (console.error(
      "%cstorage%c %cclean",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      b.message
    ), 0)), await this.db.table(_.MESSAGES).orderBy("expires").filter(l).delete().catch((b) => (console.error(
      "%clean%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
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
    const g = ($) => $.utc > (t?.since || 0), b = ($) => $.utc < (t?.before || l), x = ($) => $?.visible !== 0;
    try {
      const te = await this.db.table(_.TOPICS).where("widget_id").equals(t.widget).filter(x).filter(g).filter(b).reverse().limit(t?.limit ?? 25).sortBy(o);
      if (te.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: t
        };
      const ge = te.map((Ce) => this.db.table(_.MESSAGES).get({ id: Ce.message_id }));
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
    } catch ($) {
      return K(2, [
        "%cget%c %cstorage%c %cmessages",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        t,
        $.message
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
    let g = 0;
    return await o.data.messages.forEach(async (b) => {
      b.id !== null && (b.topics[0] = {
        message_id: b.id,
        engagement: b.topics[0]?.engagement || b.dynamics?.engagement || 0,
        impressions: b.topics[0]?.impressions || b.dynamics?.semrush_visits || 0,
        reach: b.topics[0]?.reach || b.dynamics?.potential_reach || 0,
        sentiment: b.topics[0]?.sentiment || 0
      }, await this.db.table(_.MESSAGES).put({
        id: b.id,
        utc: b.utc,
        data: b,
        expires: b.expires
      }).catch((x) => {
        g++, K(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set message",
          `title: ${l}`,
          b,
          x.message
        ]);
      }), await this.db.table(_.TOPICS).put({
        title: l,
        widget_id: t.widget,
        message_id: b.id,
        dashboard_id: t.dashboard,
        engagement: b.topics[0]?.engagement || b.dynamics?.engagement || 0,
        impressions: b.topics[0]?.impressions || b.dynamics?.semrush_visits || 0,
        reach: b.topics[0]?.reach || b.dynamics?.potential_reach || 0,
        sentiment: b.topics[0]?.sentiment || 0,
        utc: b.utc,
        expires: b.expires
      }).catch((x) => {
        g++, K(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set topic",
          `title: ${l}`,
          b,
          x.message
        ]);
      }), await o.data.topics.forEach(async (x) => {
        const $ = x.message_id, te = x.visible ? 1 : 0, ge = x.title;
        await this.db.table(_.TOPICS).where("message_id").equals($).modify({ visible: te }).catch((Ce) => {
          g++, K(4, [
            "%cset%c %cstorage",
            c.KO,
            c.NONE,
            c.STORAGE,
            "update message visibility",
            `title: ${ge}`,
            `widget: ${x.widget_id}`,
            Ce.message
          ]);
        });
      }));
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
    // data: data.data,
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
      console.warn("%cstorage", c.STORAGE, X.WIDGET_LOAD, t.id);
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
    const o = (x) => t?.dashboard === x.dashboard_id, l = (x) => t?.type === x.type, g = (x) => t?.name ? x.name.includes(t?.name) : !1, b = await this.db.table(_.WIDGET).toArray().then((x) => t?.dashboard ? x.filter(o) : x).then((x) => t?.type ? x.filter(l) : x).then((x) => t?.name ? x.filter(g) : x).catch(() => {
      K(2, ["%cstorage", c.STORAGE, X.WIDGET_LOAD, t]);
    });
    return b !== void 0 && K(3, [
      "%cstorage%c %cwidgets",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
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
      K(2, ["%cstorage", c.STORAGE, X.SLIDE_LOAD, t.id]);
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
    const o = ($) => t?.id ? $.id = t.id : !1, l = ($) => t?.name ? $.name.includes(t?.name) : !1, g = ($) => t?.presentation_id ? $.presentation_id = t.presentation_id : !1, x = await this.db.table(_.SLIDE).toArray().then(($) => t?.presentation_id ? $.filter(g) : $).then(($) => t?.id ? $.filter(o) : $).then(($) => t?.name ? $.filter(l) : $);
    return x !== void 0 && K(3, ["%cstorage%c %cslides", c.STORAGE, c.NONE, c.SLIDE, t]), {
      // @ts-ignore
      data: x !== void 0 ? { slides: x, query: t } : null,
      message: x !== void 0 ? "Slides loaded from storage" : "Slides load error",
      success: x !== void 0
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
        c.STORAGE,
        X.PRESENTATION_LOAD,
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
    const o = (b) => t?.name ? b.name.includes(t?.name) : !1, g = await this.db.table(_.PRESENTATION).toArray().then((b) => t?.name ? b.filter(o) : b);
    return g !== void 0 && K(3, [
      "%cstorage%c %cpresentations",
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      t
    ]), {
      // @ts-ignore
      data: g !== void 0 ? { presentations: g, query: t } : null,
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
    message: `Presentation ${t.data.id} saved to storage`,
    success: !0
  })).catch((o) => (console.error(
    "%cstorage",
    c.STORAGE,
    X.PRESENTATION_STORE,
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
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      t
    ]), {
      // @ts-ignore
      data: g !== void 0 ? { prefrences: g, query: t } : null,
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
    c.STORAGE,
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
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      t
    ]), {
      // @ts-ignore
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
    c.STORAGE,
    X.IMAGE_SET,
    t,
    o.message
  ), {
    data: null,
    message: `Image ${t.data.id} save error: ${o.message}`,
    success: !1
  }));
}
function Hn(h) {
  return new Promise((t, o) => {
    h.oncomplete = h.onsuccess = () => t(h.result), h.onabort = h.onerror = () => o(h.error);
  });
}
function Ka(h, t) {
  let o;
  const l = () => {
    if (o)
      return o;
    const g = indexedDB.open(h);
    return g.onupgradeneeded = () => g.result.createObjectStore(t), o = Hn(g), o.then((b) => {
      b.onclose = () => o = void 0;
    }, () => {
    }), o;
  };
  return (g, b) => l().then((x) => b(x.transaction(t, g).objectStore(t)));
}
let Un;
function Gr() {
  return Un || (Un = Ka("keyval-store", "keyval")), Un;
}
function _e(h, t = Gr()) {
  return t("readonly", (o) => Hn(o.get(h)));
}
function ke(h, t, o = Gr()) {
  return o("readwrite", (l) => (l.put(t, h), Hn(l.transaction)));
}
class Kr {
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
    return delete o.success, delete o.message, await ke(l, o).then(() => 201).catch((g) => (console.error(
      "%cstorage",
      c.STORAGE,
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
      c.STORAGE,
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
      c.STORAGE,
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
    })).catch((g) => (console.error(
      "%cstorage",
      c.STORAGE,
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
    })).catch((g) => (console.error(
      "%cstorage",
      c.STORAGE,
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
    })).catch((g) => (console.error(
      "%cstorage",
      c.STORAGE,
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
    })).catch((g) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.PRESENTATION,
      t,
      g.message
    ), {
      data: null,
      message: `Presentation ${t.data.id} save error: ${g.message}`,
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
class Br {
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
    } catch (g) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, t, g), 400;
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
      return console.error("%cstorage", c.STORAGE, _.SERIES, t, g), 400;
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
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, t, g), 400;
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
      return localStorage.getObject(
        `${_.PRESENTATION}.${t.presentation}`
      );
    } catch (o) {
      return console.warn(
        "%capi",
        c.API,
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
      return console.warn("%capi", c.API, _.PRESENTATION, t), {
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
class Lr {
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
    } catch (g) {
      return console.error("%cstorage", c.STORAGE, _.CLOUD, t, g), 400;
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
      return console.error("%cstorage", c.STORAGE, _.SERIES, t, g), 400;
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
      return console.error("%cstorage", c.STORAGE, _.MESSAGES, t, g), 400;
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
      return sessionStorage.getObject(
        `${_.PRESENTATION}.${t.presentation}`
      );
    } catch (o) {
      return console.warn(
        "%capi",
        c.API,
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
      return console.warn("%capi", c.API, _.PRESENTATION, t), {
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
class Wr {
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
    } catch (g) {
      return console.error("%cstorage", c.STORAGE, "set", t, g), 400;
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
      return console.error("%cstorage", c.STORAGE, "set", t, g), 400;
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
      return console.error("%cstorage", c.STORAGE, "set", t, g), 400;
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
      return window.BuzzCasting.SlideData.filter(
        (o) => o.presentation_id === t.presentation
      );
    } catch (o) {
      return console.warn(
        "%capi",
        c.API,
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
      return console.warn(
        "%capi",
        c.API,
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
    K(3, [
      "%cpresentation",
      c.PRESENTATION,
      t.presentation,
      X.VERSION,
      xa
    ]), this.options = t, this.sm = null;
    const o = t.presentation;
    switch (this.bc = new BroadcastChannel(o), K(3, ["%cchannel%c %capi", c.BROADCAST, c.NONE, c.API, o]), this.bc.onmessage = (l) => {
      this.actions(l);
    }, this.bc.postMessage({ event: X.STORAGE_INIT, data: {} }), this.api = new ka(t), t.storage) {
      case he.DEXIE:
        this.sm = new Mr(t);
        break;
      case he.LOCAL:
        this.sm = new Lr(t);
        break;
      case he.SESSION:
        this.sm = new Br(t);
        break;
      case he.KEYVAL:
        this.sm = new Kr(t);
        break;
      case he.WINDOW:
        this.sm = new Wr(t);
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
        async (g) => await this.processResponse(g)
      );
    });
  };
  processResponse = async (t) => {
    let o, l = 400;
    if (t.success === !0) {
      const g = this.subscribers[t.query.widget];
      let b = "";
      switch (t.query.type) {
        case _.MESSAGES:
          let x;
          x = t.data.messages.filter(
            ($) => $.id !== null
          ), t.data.messages = x, b = t.data.messages.length > 0 ? Fn(t.data.messages[0].utc) : "none", g?.hash && g.hash === b ? (K(3, [
            "%cload%c %cmessages%c %cno updates",
            c.OK,
            c.NONE,
            c.MESSAGES,
            c.NONE,
            c.NO_UPDATES,
            t.query.widget
          ]), K(4, ["%cmessages", c.MESSAGES, t]), l = 204) : (o = t, g.hash = b, l = await this.sm?.setMessages(t.query, t).then(async ($) => ($ = 201, this.broadcastUpdate($, t))));
          break;
        case _.CLOUD:
          b = Fn(t.data.cloud), g?.hash && g.hash === b ? (K(3, [
            "%cload%c %ccloud%c %cno updates",
            c.OK,
            c.NONE,
            c.CLOUD,
            c.NONE,
            c.NO_UPDATES,
            t.query.widget
          ]), K(4, ["%ccloud", c.CLOUD, t.query]), l = 204) : (g.hash = b, o = {
            data: {
              cloud: t.data
            },
            message: t.message,
            success: t.success,
            query: t.query
          }, l = await this.sm?.setCloud(t.query, o.data).then(($) => this.broadcastUpdate($, t)));
          break;
        case _.SERIES:
          b = Fn(t.data.series), g?.hash && g.hash === b ? (K(3, [
            "%cload%c %cseries%c %cno updates",
            c.OK,
            c.NONE,
            c.SERIES,
            c.NONE,
            c.NO_UPDATES,
            t.query.widget
          ]), K(4, ["%cseries", c.SERIES, t]), l = 204) : (g.hash = b, o = {
            data: t.data,
            message: t.message,
            success: t.success,
            query: t.query
          }, l = await this.sm?.setSeries(t.query, t.data).then(($) => this.broadcastUpdate($, t)));
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
          return await this.sm?.getMessages(t.query).then((g) => {
            this.broadcastUpdate(201, g);
          });
        case _.CLOUD:
          return await this.sm?.getCloud(t.query).then((g) => {
            this.broadcastUpdate(201, g);
          });
        case _.SERIES:
          return await this.sm?.getSeries(t.query).then((g) => {
            this.broadcastUpdate(201, g);
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
          kr(o.query),
          // @ts-ignore
          `${o.data?.title ?? ""} ${o.query.widget}`
        ]), K(4, [
          "%cevent",
          c.BROADCAST,
          // @ts-ignore
          o
        ]), this.bc.postMessage({
          event: X.WIDGET_UPDATE,
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
  /* public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
  	return await this.api.loadDashboardWidgets(query);
  }; */
  getWidget = async (t) => await this.sm?.getWidget(t);
  getWidgets = async (t) => await this.sm?.getWidgets(t);
  setWidget = async (t) => await this.sm?.setWidget(t);
  loadDashboards = async (t) => await this.api.loadDashboards(t);
  getDashboard = async (t) => await this.sm?.getDashboard(t);
  getDashboards = async (t) => await this.sm?.getDashboards();
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
      case he.DEXIE:
        this.sm = new Mr(t);
        break;
      case he.LOCAL:
        this.sm = new Lr(t);
        break;
      case he.SESSION:
        this.sm = new Br(t);
        break;
      case he.KEYVAL:
        this.sm = new Kr(t);
        break;
      case he.WINDOW:
        this.sm = new Wr(t);
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
    let g;
    g = { ...t.dataset }, delete g.hmr, g.presentation = window.BuzzCasting.getOptions()?.presentation ?? `${l} not found`, this.query = g, Da(t);
    const b = window.BuzzCasting.getOptions();
    this.storageReader = new Ba(b), this.broadcastChannel = new BroadcastChannel(g.presentation), this.broadcastListener();
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
                "%cset%c %cbroadcast%c %cwidget",
                c.OK,
                c.NONE,
                c.BROADCAST,
                c.NONE,
                c.WIDGET,
                this.query
              ]), this.callbacks.forEach(async (b) => {
                b(g);
              }));
            }
          } catch {
            K(4, [X.WIDGET_UPDATE, l]);
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
      c.SUBSCRIBE,
      c.NONE,
      c.WIDGET,
      this.query.presentation,
      this.query.widget
    ]), K(4, ["%cwidget", c.WIDGET, this.query]), this.broadcastChannel.postMessage({
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
      X.SHOW_MODAL,
      t.showComponent,
      // @ts-ignore
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
