var _ = /* @__PURE__ */ ((h) => (h.CLOUD = "cloud", h.DASHBOARD = "dashboard", h.DASHBOARDS = "dashboards", h.IMAGES = "images", h.MESSAGES = "messages", h.PREFERENCE = "preference", h.PREFERENCES = "preferences", h.PRESENTATION = "presentation", h.PRESENTATIONS = "presentations", h.SERIES = "series", h.SLIDE = "slide", h.SLIDES = "slides", h.TOPICS = "topics", h.WIDGET = "widget", h.WIDGETS = "widgets", h))(_ || {}), c = /* @__PURE__ */ ((h) => (h.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", h.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", h.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", h.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", h.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", h.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", h.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", h.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", h.NONE = "color:transparent;background-color:transparent;", h.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", h.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", h.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", h.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", h.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", h.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", h.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", h.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", h))(c || {}), X = /* @__PURE__ */ ((h) => (h.ADD_SLIDE = "addSlide", h.APP_READY = "appReady", h.API_UPDATE = "apiUpdate", h.WS_API_REQUEST = "wsApiRequest", h.WS_API_RESPONSE = "wsApiResponse", h.WS_API_UPDATE = "wsApiRUpdate", h.APPROVE_MESSAGE = "approveMessage", h.CHANNEL = "channel", h.CLEAN_MESSAGES = "cleanMessages", h.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", h.CLOSE_BUILDER_MODAL = "closeBuilderModal", h.CLOSE_MODAL = "closeModal", h.CSS_SET = "setCss", h.CSS_STORE = "storeCss", h.DASHBOARD_LOAD = "loadDashboard", h.DASHBOARD_STORE = "storeDashboard", h.ERROR = "error", h.HIDE_MESSAGE = "hideMessage", h.HIDE_LABELS = "hideLabels", h.IMAGE_GET = "getImage", h.IMAGE_SET = "setImage", h.IMAGE_STORED = "imageStored", h.LAUPPUT_UPDATE = "layoutUpdate", h.PREV_SLIDE = "prevSlide", h.RELOAD_PRESENTATION = "reloadPresentation", h.STAR_MESSAGE = "starMessage", h.GOTO_SLIDE = "gotoSlide", h.NEXT_SLIDE = "nextSlide", h.PREFERENCE_LOAD = "loadPreference", h.PREFERENCE_STORE = "storePreference", h.PAUSE_PRESENTATION = "pausePresentation", h.PRESENTATION_READY = "presentationReady", h.PRESENTATION_LOAD = "loadPresentation", h.PRESENTATION_STORE = "storePresentation", h.SCREENSHOT_TAKE = "takeScreenshot", h.SCREENSHOT_STORE = "storeScreenshot", h.SECTION_UPDATE = "sectionUpdate", h.SHOW_BUILDER_DIALOG = "showBuilderDialog", h.SHOW_BUILDER_MODAL = "showBuilderModal", h.SHOW_MODAL = "showModal", h.SLIDE_DID_LOAD = "slideDidLoad", h.SLIDE_GET = "getSlide", h.SLIDE_GOTO = "slideGoto", h.SLIDE_LOAD = "loadSlide", h.SLIDE_READY = "slideReady", h.SLIDE_SAVED = "slideSaved", h.SLIDE_SET = "setSlide", h.SLIDE_STORE = "storeSlide", h.SLIDE_STORED = "slideStored", h.SLIDE_TRANSITIONER = "slideTransitioner", h.START_TRANSITIONER = "startTransitioner", h.STORAGE_INIT = "storageInit", h.SUBSCRIBE = "subscribe", h.SUSPEND_ACCOUNT = "suspendAccount", h.SWITCH_PRESENTATION = "switchPresentation", h.REMOVE_CLOUD = "removeCloud", h.UPDATE = "update", h.UPLOAD_COMPLETED = "uploadCompleted", h.VERSION = "version", h.WIDGETS_CLEAR = "widgetsClear", h.WIDGET_LOAD = "widgetLoad", h.WIDGET_STORE = "widgetStore", h.WIDGET_UPDATE = "widgetUpdate", h))(X || {}), er = /* @__PURE__ */ ((h) => (h.APPROVED = "approved", h.BEFORE = "before", h.DELAYED = "delayed", h.NONE = "none", h.REALTIME = "realtime", h))(er || {}), he = /* @__PURE__ */ ((h) => (h.KEYVAL = "keyval", h.LOCAL = "local", h.SESSION = "session", h.DEXIE = "dexie", h.WINDOW = "window", h))(he || {});
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
    return jn(g, t[b], b, o);
  }
}
function jn(h, t, o, l) {
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
function Wr(h) {
  return Ia(jn(0, h, "", []).toString(16), 8);
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
  let l, g, b, x, $;
  switch (h.moderation) {
    case er.BEFORE:
      l = /* @__PURE__ */ new Date(), g = (o = h.beforeTime) == null ? void 0 : o.split(":"), b = Number.parseInt(g ? g[0] : "00"), x = Number.parseInt(g ? g[1] : "00"), $ = Number.parseInt(g ? g[2] : "00"), t.before = l.setHours(b, x, $, 0) / 1e3, t.period || (t.period = l.getDay() === 1 ? 72 : 24);
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
const xa = "3.14.0";
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
      function g(e, r, n) {
        for (var a, s = 0, i = r.length; s < i; s++) !a && s in r || ((a = a || Array.prototype.slice.call(r, 0, s))[s] = r[s]);
        return e.concat(a || Array.prototype.slice.call(r));
      }
      var b = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, x = Object.keys, $ = Array.isArray;
      function te(e, r) {
        return typeof r != "object" || x(r).forEach(function(n) {
          e[n] = r[n];
        }), e;
      }
      typeof Promise > "u" || b.Promise || (b.Promise = Promise);
      var ge = Object.getPrototypeOf, Ce = {}.hasOwnProperty;
      function ie(e, r) {
        return Ce.call(e, r);
      }
      function be(e, r) {
        typeof r == "function" && (r = r(ge(e))), (typeof Reflect > "u" ? x : Reflect.ownKeys)(r).forEach(function(n) {
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
        b.setImmediate ? setImmediate(e) : setTimeout(e, 0);
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
          d !== -1 ? (i = r.substr(0, d), (u = r.substr(d + 1)) === "" ? n === void 0 ? $(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = n : ue(d = !(d = e[i]) || !ie(e, i) ? e[i] = {} : d, u, n)) : n === void 0 ? $(e) && !isNaN(parseInt(r)) ? e.splice(r, 1) : delete e[r] : e[r] = n;
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
      var Ge = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Qr([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + e + "Array";
        });
      }))).filter(function(e) {
        return b[e];
      }), Xr = new Set(Ge.map(function(e) {
        return b[e];
      })), it = null;
      function $e(e) {
        return it = /* @__PURE__ */ new WeakMap(), e = function r(n) {
          if (!n || typeof n != "object") return n;
          var a = it.get(n);
          if (a) return a;
          if ($(n)) {
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
          if ($(e)) return e.slice();
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
      var ut = {}, en = 100, Ge = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, ge(e), e];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, ge(r), e];
      }(), lt = Ge[0], fe = Ge[1], Ge = Ge[2], fe = fe && fe.then, Ke = lt && lt.constructor, ir = !!Ge, dt = function(e, r) {
        ft.push([e, r]), It && (queueMicrotask(ra), It = !1);
      }, cr = !0, It = !0, Be = [], Nt = [], ur = ct, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, B = Pe, ft = [], Le = 0, Rt = [];
      function M(e) {
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
                i && typeof i.then == "function" ? n(a, function(d, p) {
                  i instanceof M ? i._then(d, p) : i.then(d, p);
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
          var i = this, u = !e.global && (e !== B || r !== Ct), d = u && !Ie(), p = new M(function(y, w) {
            fr(i, new tn(an(a, e, u, d), an(s, e, u, d), y, w, e));
          });
          return this._consoleTask && (p._consoleTask = this._consoleTask), p;
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
        Nt.push(r), e._state === null && (n = e._lib && Ze(), r = ur(r), e._state = !1, e._value = r, a = e, Be.some(function(s) {
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
          !r._state && Nt.length && (Nt = []), a = pe && r._consoleTask ? r._consoleTask.run(function() {
            return e(s);
          }) : e(s), r._state || Nt.indexOf(s) !== -1 || function(i) {
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
        return It = cr = !1, e;
      }
      function qe() {
        var e, r, n;
        do
          for (; 0 < ft.length; ) for (e = ft, ft = [], n = e.length, r = 0; r < n; ++r) {
            var a = e[r];
            a[0].apply(null, a[1]);
          }
        while (0 < ft.length);
        It = cr = !0;
      }
      function hr() {
        var e = Be;
        Be = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var r = Rt.slice(0), n = r.length; n; ) r[--n]();
      }
      function Tt(e) {
        return new M(ut, !1, e);
      }
      function Z(e, r) {
        var n = B;
        return function() {
          var a = Ze(), s = B;
          try {
            return Ne(n, !0), e.apply(this, arguments);
          } catch (i) {
            r && r(i);
          } finally {
            Ne(s, !1), a && qe();
          }
        };
      }
      be(M.prototype, { then: lr, _then: function(e, r) {
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
          return M.resolve(e()).then(function() {
            return r;
          });
        }, function(r) {
          return M.resolve(e()).then(function() {
            return Tt(r);
          });
        });
      }, timeout: function(e, r) {
        var n = this;
        return e < 1 / 0 ? new M(function(a, s) {
          var i = setTimeout(function() {
            return s(new L.Timeout(r));
          }, e);
          n.then(a, s).finally(clearTimeout.bind(null, i));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(M.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = nn(), be(M, { all: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(r, n) {
          e.length === 0 && r([]);
          var a = e.length;
          e.forEach(function(s, i) {
            return M.resolve(s).then(function(u) {
              e[i] = u, --a || r(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof M ? e : e && typeof e.then == "function" ? new M(function(r, n) {
          e.then(r, n);
        }) : new M(ut, !0, e);
      }, reject: Tt, race: function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(r, n) {
          e.map(function(a) {
            return M.resolve(a).then(r, n);
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
        return new M(function(n, a) {
          return De(function(s, i) {
            var u = B;
            u.unhandleds = [], u.onunhandled = i, u.finalize = Me(function() {
              var d, p = this;
              d = function() {
                p.unhandleds.length === 0 ? s() : i(p.unhandleds[0]);
              }, Rt.push(function y() {
                d(), Rt.splice(Rt.indexOf(y), 1);
              }), ++Le, dt(function() {
                --Le == 0 && hr();
              }, []);
            }, u.finalize), e();
          }, r, n, a);
        });
      } }), Ke && (Ke.allSettled && Ae(M, "allSettled", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(r) {
          e.length === 0 && r([]);
          var n = e.length, a = new Array(n);
          e.forEach(function(s, i) {
            return M.resolve(s).then(function(u) {
              return a[i] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[i] = { status: "rejected", reason: u };
            }).then(function() {
              return --n || r(a);
            });
          });
        });
      }), Ke.any && typeof AggregateError < "u" && Ae(M, "any", function() {
        var e = Ee.apply(null, arguments).map($t);
        return new M(function(r, n) {
          e.length === 0 && n(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(i, u) {
            return M.resolve(i).then(function(d) {
              return r(d);
            }, function(d) {
              s[u] = d, --a || n(new AggregateError(s));
            });
          });
        });
      }), Ke.withResolvers && (M.withResolvers = Ke.withResolvers));
      var re = { awaits: 0, echoes: 0, id: 0 }, na = 0, xt = [], kt = 0, Ct = 0, aa = 0;
      function De(e, r, n, a) {
        var s = B, i = Object.create(s);
        return i.parent = s, i.ref = 0, i.global = !1, i.id = ++aa, Pe.env, i.env = ir ? { Promise: M, PromiseProp: { value: M, configurable: !0, writable: !0 }, all: M.all, race: M.race, allSettled: M.allSettled, any: M.any, resolve: M.resolve, reject: M.reject } : {}, r && te(i, r), ++s.ref, i.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = We(i, e, n, a), i.ref === 0 && i.finalize(), a;
      }
      function et() {
        return re.id || (re.id = ++na), ++re.awaits, re.echoes += en, re.id;
      }
      function Ie() {
        return !!re.awaits && (--re.awaits == 0 && (re.id = 0), re.echoes = re.awaits * en, !0);
      }
      function $t(e) {
        return re.echoes && e && e.constructor === Ke ? (et(), e.then(function(r) {
          return Ie(), r;
        }, function(r) {
          return Ie(), q(r);
        })) : e;
      }
      function sa() {
        var e = xt[xt.length - 1];
        xt.pop(), Ne(e, !1);
      }
      function Ne(e, r) {
        var n, a = B;
        (r ? !re.echoes || kt++ && e === B : !kt || --kt && e === B) || queueMicrotask(r ? function(s) {
          ++Ct, re.echoes && --re.echoes != 0 || (re.echoes = re.awaits = re.id = 0), xt.push(B), Ne(s, !0);
        }.bind(null, e) : sa), e !== B && (B = e, a === Pe && (Pe.env = nn()), ir && (n = Pe.env.Promise, r = e.env, (a.global || e.global) && (Object.defineProperty(b, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any && (n.any = r.any))));
      }
      function nn() {
        var e = b.Promise;
        return ir ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(b, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function We(e, r, n, a, s) {
        var i = B;
        try {
          return Ne(e, !0), r(n, a, s);
        } finally {
          Ne(i, !1);
        }
      }
      function an(e, r, n, a) {
        return typeof e != "function" ? e : function() {
          var s = B;
          n && et(), Ne(r, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ne(s, !1), a && queueMicrotask(Ie);
          }
        };
      }
      function gr(e) {
        Promise === Ke && re.echoes === 0 ? kt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + fe).indexOf("[native code]") === -1 && (et = Ie = Q);
      var q = M.reject, Fe = "￿", we = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", sn = "String expected.", tt = [], jt = "__dbnames", pr = "readonly", mr = "readwrite";
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
                for (var u = s.length, d = i.length, p = u < d ? u : d, y = 0; y < p; ++y) if (s[y] !== i[y]) return s[y] < i[y] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(ln(e), ln(r));
            case "Array":
              return function(s, i) {
                for (var u = s.length, d = i.length, p = u < d ? u : d, y = 0; y < p; ++y) {
                  var w = H(s[y], i[y]);
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
        return r != "object" ? r : ArrayBuffer.isView(e) ? "binary" : (e = rr(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function ln(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var dn = (J.prototype._trans = function(e, r, n) {
        var a = this._tx || B.trans, s = this.name, i = pe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(y, w, f) {
          if (!f.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return r(f.idbtrans, f);
        }
        var d = Ze();
        try {
          var p = a && a.db._novip === this.db._novip ? a === B.trans ? a._promise(e, u, n) : De(function() {
            return a._promise(e, u, n);
          }, { trans: a, transless: B.transless || B }) : function y(w, f, O, m) {
            if (w.idbdb && (w._state.openComplete || B.letThrough || w._vip)) {
              var E = w._createTransaction(f, O, w._dbSchema);
              try {
                E.create(), w._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === sr.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
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
      }, J.prototype.get = function(e, r) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(r) : e == null ? q(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return n.core.get({ trans: a, key: e }).then(function(s) {
            return n.hook.reading.fire(s);
          });
        }).then(r);
      }, J.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if ($(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var r = x(e);
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
        if (n && this.db._maxKey !== Fe) {
          var i = n.keyPath.slice(0, r.length);
          return this.where(i).equals(i.map(function(p) {
            return e[p];
          }));
        }
        !n && pe && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, p) {
          return H(d, p) === 0;
        }
        var u = r.reduce(function(f, p) {
          var y = f[0], w = f[1], f = a[p], O = e[p];
          return [y || f, y || !f ? Ue(w, f && f.multi ? function(m) {
            return m = ve(m, p), $(m) && m.some(function(E) {
              return s(O, E);
            });
          } : function(m) {
            return s(O, ve(m, p));
          }) : w];
        }, [null, null]), i = u[0], u = u[1];
        return i ? this.where(i.name).equals(e[i.keyPath]).filter(u) : n ? this.filter(u) : this.where(r).equals("");
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
        var r, n = this.db, a = this.name;
        function s() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof cn && (function(p, y) {
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
      }, J.prototype.add = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "add", keys: r != null ? [r] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? M.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (i) try {
            ue(e, i, d);
          } catch {
          }
          return d;
        });
      }, J.prototype.update = function(e, r) {
        return typeof e != "object" || $(e) ? this.where(":id").equals(e).modify(r) : (e = ve(e, this.schema.primKey.keyPath), e === void 0 ? q(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(r));
      }, J.prototype.put = function(e, r) {
        var n = this, a = this.schema.primKey, s = a.auto, i = a.keyPath, u = e;
        return i && s && (u = Mt(i)(e)), this._trans("readwrite", function(d) {
          return n.core.mutate({ trans: d, type: "put", values: [u], keys: r != null ? [r] : null });
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
        var r = this;
        return this._trans("readwrite", function(n) {
          return r.core.mutate({ trans: n, type: "delete", keys: [e] });
        }).then(function(n) {
          return n.numFailures ? M.reject(n.failures[0]) : void 0;
        });
      }, J.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(r) {
          return e.core.mutate({ trans: r, type: "deleteRange", range: on });
        }).then(function(r) {
          return r.numFailures ? M.reject(r.failures[0]) : void 0;
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
        var a = this, s = Array.isArray(r) ? r : void 0, i = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
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
      }, J.prototype.bulkPut = function(e, r, n) {
        var a = this, s = Array.isArray(r) ? r : void 0, i = (n = n || (s ? void 0 : r)) ? n.allKeys : void 0;
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
        var r = this, n = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), i = [];
        return this._trans("readwrite", function(u) {
          return n.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
            var p = [], y = [];
            e.forEach(function(f, O) {
              var m = f.key, E = f.changes, S = d[O];
              if (S) {
                for (var v = 0, A = Object.keys(E); v < A.length; v++) {
                  var P = A[v], D = E[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (H(D, m) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ue(S, P, D);
                }
                i.push(O), p.push(m), y.push(S);
              }
            });
            var w = p.length;
            return n.mutate({ trans: u, type: "put", keys: p, values: y, updates: { keys: a, changeSpecs: s } }).then(function(f) {
              var O = f.numFailures, m = f.failures;
              if (O === 0) return w;
              for (var E = 0, S = Object.keys(m); E < S.length; E++) {
                var v, A = S[E], P = i[Number(A)];
                P != null && (v = m[A], delete m[A], m[P] = v);
              }
              throw new Je("".concat(r.name, ".bulkUpdate(): ").concat(O, " of ").concat(w, " operations failed"), m);
            });
          });
        });
      }, J.prototype.bulkDelete = function(e) {
        var r = this, n = e.length;
        return this._trans("readwrite", function(a) {
          return r.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(u) {
          var s = u.numFailures, i = u.lastResult, u = u.failures;
          if (s === 0) return i;
          throw new Je("".concat(r.name, ".bulkDelete(): ").concat(s, " of ").concat(n, " operations failed"), u);
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
        r.addEventType = i;
        for (var a = 1, s = arguments.length; a < s; ++a) i(arguments[a]);
        return r;
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
            return n[u] = r[u] = w;
          }
          x(y = u).forEach(function(f) {
            var O = y[f];
            if ($(O)) i(f, y[f][0], y[f][1]);
            else {
              if (O !== "asap") throw new L.InvalidArgument("Invalid event config");
              var m = i(f, ct, function() {
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
      function Kt(e, r, n, a) {
        var s = e.replayFilter ? Ue(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var i = {}, u = function(d, p, y) {
            var w, f;
            s && !s(p, y, function(O) {
              return p.stop(O);
            }, function(O) {
              return p.fail(O);
            }) || ((f = "" + (w = p.primaryKey)) == "[object ArrayBuffer]" && (f = "" + new Uint8Array(w)), ie(i, f) || (i[f] = !0, r(d, p, y)));
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
          if ($(n)) return g(g([], $(e) ? e : [], !0), n).sort();
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
        return Kt(this._ctx, e, r, this._ctx.table.core);
      }, V.prototype.clone = function(e) {
        var r = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && te(n, e), r._ctx = n, r;
      }, V.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, V.prototype.each = function(e) {
        var r = this._ctx;
        return this._read(function(n) {
          return Kt(r, e, n, r.table.core);
        });
      }, V.prototype.count = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx, s = a.table.core;
          if (rt(a, !0)) return s.count({ trans: n, query: { index: Gt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var i = 0;
          return Kt(a, function() {
            return ++i, !1;
          }, n, s).then(function() {
            return i;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, r) {
        var n = e.split(".").reverse(), a = n[0], s = n.length - 1;
        function i(p, y) {
          return y ? i(p[n[y]], y - 1) : p[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(p, y) {
          return H(i(p, s), i(y, s)) * u;
        }
        return this.toArray(function(p) {
          return p.sort(d);
        }).then(r);
      }, V.prototype.toArray = function(e) {
        var r = this;
        return this._read(function(n) {
          var a = r._ctx;
          if (a.dir === "next" && rt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, i = Gt(a, a.table.core.schema);
            return a.table.core.query({ trans: n, limit: a.limit, values: !0, query: { index: i, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Kt(a, function(d) {
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
          var a = s.primaryKey.toString(), s = ie(r, a);
          return r[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var r = this, n = this._ctx;
        return this._write(function(a) {
          var s, i, u;
          u = typeof e == "function" ? e : (s = x(e), i = s.length, function(v) {
            for (var A = !1, P = 0; P < i; ++P) {
              var D = s[P], I = e[D], N = ve(v, D);
              I instanceof pt ? (ue(v, D, I.execute(N)), A = !0) : N !== I && (ue(v, D, I), A = !0);
            }
            return A;
          });
          var d = n.table.core, f = d.schema.primaryKey, p = f.outbound, y = f.extractKey, w = 200, f = r.db._options.modifyChunkSize;
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
          return r.clone().primaryKeys().then(function(v) {
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
                  return (0 < j.length || P && e === vr) && d.mutate({ trans: a, type: "delete", keys: j, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return O(j.length, U);
                  });
                }).then(function() {
                  return v.length > D + I && A(D + w);
                });
              });
            }
            var P = rt(n) && n.limit === 1 / 0 && (typeof e != "function" || e === vr) && { index: n.index, range: n.range };
            return A(0).then(function() {
              if (0 < m.length) throw new Pt("Error modifying one or more objects", m, E, S);
              return v.length;
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
              if (u.lastResult, u.results, u = u.numFailures, u) throw new Pt("Could not delete some values", Object.keys(d).map(function(p) {
                return d[p];
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
        var s, i, u, d, p, y, w, f = n.length;
        if (!n.every(function(E) {
          return typeof E == "string";
        })) return le(e, sn);
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
          var S = n.map(function(v) {
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
          if (r(P, p, m)) return !0;
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
      function Re(e, r, n, a) {
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
            return Re(e, r, !n, !a);
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
          return Re(e, void 0, !0);
        });
      }, ne.prototype.aboveOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Re(e, void 0, !1);
        });
      }, ne.prototype.below = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Re(void 0, e, !1, !0);
        });
      }, ne.prototype.belowOrEqual = function(e) {
        return e == null ? le(this, we) : new this.Collection(this, function() {
          return Re(void 0, e);
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
          return Re(r[0], r[r.length - 1]);
        });
        a._ondirectionchange = function(i) {
          n = i === "next" ? e._ascending : e._descending, r.sort(n);
        };
        var s = 0;
        return a._addAlgorithm(function(i, u, d) {
          for (var p = i.key; 0 < n(p, r[s]); ) if (++s === r.length) return u(d), !1;
          return n(p, r[s]) === 0 || (u(function() {
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
        var p = !r || r.includeLowers !== !1, y = r && r.includeUppers === !0, w, f = s;
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
          return !E(N = C) && !S(N) || (n._cmp(C, w[m][1]) === 0 || n._cmp(C, w[m][0]) === 0 || D(function() {
            f === s ? P.continue(w[m][0]) : P.continue(w[m][1]);
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
        if (this._locked()) return new M(function(i, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, r, n).then(i, u);
          }, B]);
        });
        if (n) return De(function() {
          var i = new M(function(u, d) {
            a._lock();
            var p = r(u, d, a);
            p && p.then && p.then(u, d);
          });
          return i.finally(function() {
            return a._unlock();
          }), i._lib = !0, i;
        });
        var s = new M(function(i, u) {
          var d = r(i, u, a);
          d && d.then && d.then(i, u);
        });
        return s._lib = !0, s;
      }, ye.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ye.prototype.waitFor = function(e) {
        var r, n = this._root(), a = M.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return a;
        }) : (n._waitingFor = a, n._waitingQueue = [], r = n.idbtrans.objectStore(n.storeNames[0]), function i() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (r.get(-1 / 0).onsuccess = i);
        }());
        var s = n._waitingFor;
        return new M(function(i, u) {
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
                ce = ce.target.result, U.forEach(function(Ve, Lr) {
                  return Ve.error != null && (z[Lr] = Ve.error);
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
                    ce = Z(ce), k.onerror = me(Ve), W.fail = Ve, W.stop = function(Lr) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = de, ce(Lr);
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
        var i, u, d, w = (u = p, d = bn((i = e).objectStoreNames), { schema: { name: i.name, tables: d.map(function(O) {
          return u.objectStore(O);
        }).map(function(O) {
          var m = O.keyPath, v = O.autoIncrement, E = $(m), S = {}, v = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: m == null, compound: E, keyPath: m, autoIncrement: v, unique: !0, extractKey: Or(m) }, indexes: bn(O.indexNames).map(function(A) {
            return O.index(A);
          }).map(function(I) {
            var P = I.name, D = I.unique, N = I.multiEntry, I = I.keyPath, N = { name: P, compound: $(I), keyPath: I, unique: D, multiEntry: N, extractKey: Or(I) };
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
        }, MIN_KEY: -1 / 0, MAX_KEY: bt(r), schema: p };
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
            var d = function p(y, w) {
              return Fn(y, w) || (y = ge(y)) && p(y, w);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(p) {
              _t(this, s, { value: p, writable: !0, configurable: !0, enumerable: !0 });
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
          return B.trans = i, B.transless = d, r !== 0 ? (Lt(e, n), y = r, ((p = i).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(w) {
            return w ?? y;
          }) : M.resolve(y)).then(function(w) {
            return O = w, m = i, E = n, S = [], w = (f = e)._versions, v = f._dbSchema = Ut(0, f.idbdb, E), (w = w.filter(function(A) {
              return A._cfg.version >= O;
            })).length !== 0 ? (w.forEach(function(A) {
              S.push(function() {
                var P = v, D = A._cfg.dbschema;
                zt(f, P, E), zt(f, D, E), v = f._dbSchema = D;
                var I = Ar(P, D);
                I.add.forEach(function(j) {
                  Pr(E, j[0], j[1].primKey, j[1].indexes);
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
                  var C = Yr(D);
                  I.del.forEach(function(j) {
                    C[j] = P[j];
                  }), _r(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], x(C), C), m.schema = C;
                  var R, T = ar(N);
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
                }), _r(f, [f.Transaction.prototype]), Wt(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), m.schema = f._dbSchema;
              }), S.push(function(P) {
                f.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(f.idbdb.version / 10) === A._cfg.version ? (f.idbdb.deleteObjectStore("$meta"), delete f._dbSchema.$meta, f._storeNames = f._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return S.length ? M.resolve(S.shift()(m.idbtrans)).then(A) : M.resolve();
            }().then(function() {
              vn(v, E);
            })) : M.resolve();
            var f, O, m, E, S, v;
          }).catch(u)) : (x(s).forEach(function(w) {
            Pr(n, w, s[w].primKey, s[w].indexes);
          }), Lt(e, n), void M.follow(function() {
            return e.on.populate.fire(i);
          }).catch(u));
          var p, y;
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
            u.add.forEach(function(p) {
              pe && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(p.src)), Ft(d, p);
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
              var d = s.idxByName, p = i.idxByName, y = void 0;
              for (y in d) p[y] || u.del.push(y);
              for (y in p) {
                var w = d[y], f = p[y];
                w ? w.src !== f.src && u.change.push(f) : u.add.push(f);
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
        x(e).forEach(function(n) {
          r.db.objectStoreNames.contains(n) || (pe && console.debug("Dexie: Creating missing table", n), Pr(r, n, e[n].primKey, e[n].indexes));
        });
      }
      function Ft(e, r) {
        e.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Ut(e, r, n) {
        var a = {};
        return At(r.objectStoreNames, 0).forEach(function(s) {
          for (var i = n.objectStore(s), u = wr(yn(y = i.keyPath), y || "", !0, !1, !!i.autoIncrement, y && typeof y != "string", !0), d = [], p = 0; p < i.indexNames.length; ++p) {
            var w = i.index(i.indexNames[p]), y = w.keyPath, w = wr(w.name, y, !!w.unique, !!w.multiEntry, !1, y && typeof y != "string", !1);
            d.push(w);
          }
          a[s] = Sr(s, u, d);
        }), a;
      }
      function zt(e, r, n) {
        for (var a = n.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var i = a[s], u = n.objectStore(i);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var p = u.indexNames[d], y = u.index(p).keyPath, w = typeof y == "string" ? y : "[" + At(y).join("+") + "]";
            !r[i] || (y = r[i].idxByName[w]) && (y.name = p, delete r[i].idxByName[w], r[i].idxByName[p] = y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && b.WorkerGlobalScope && b instanceof b.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function En(e) {
        return e.split(",").map(function(r, n) {
          var a = (r = r.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return wr(a, s || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), $(s), n === 0);
        });
      }
      var ma = (Ht.prototype._parseStoresSpec = function(e, r) {
        x(e).forEach(function(n) {
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
        }), r._dbSchema = s, _r(r, [r._allTables, r, r.Transaction.prototype]), Wt(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], x(s), s), r._storeNames = x(s), this;
      }, Ht.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = or(this._cfg.contentUpgrade || Q, e), this;
      }, Ht);
      function Ht() {
      }
      function Dr(e, r) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Se(jt, { addons: [], indexedDB: e, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function Ir(e) {
        return e && typeof e.databases == "function";
      }
      function Nr(e) {
        return De(function() {
          return B.letThrough = !0, e();
        });
      }
      function Rr(e) {
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
          if (Rr(e)) return te(e, { from: r, to: n, d: 1 });
          var s = e.l, a = e.r;
          if (H(n, e.from) < 0) return s ? Et(s, r, n) : e.l = { from: r, to: n, d: 1, l: null, r: null }, Sn(e);
          if (0 < H(r, e.to)) return a ? Et(a, r, n) : e.r = { from: r, to: n, d: 1, l: null, r: null }, Sn(e);
          H(r, e.from) < 0 && (e.from = r, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, s && !e.l && wt(e, s), a && n && wt(e, a);
        }
      }
      function wt(e, r) {
        Rr(r) || function n(a, p) {
          var i = p.from, u = p.to, d = p.l, p = p.r;
          Et(a, i, u), d && n(a, d), p && n(a, p);
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
        var r = Rr(e) ? null : { s: 0, n: e };
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
        return x(r).forEach(function(n) {
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
        n.forEach(function(p) {
          return p();
        });
      }
      function _n(e, r, n, a) {
        for (var s = [], i = 0, u = Object.entries(e.queries.query); i < u.length; i++) {
          for (var d = u[i], p = d[0], y = [], w = 0, f = d[1]; w < f.length; w++) {
            var O = f[w];
            Tr(r, O.obsSet) ? O.subscribers.forEach(function(v) {
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
          return r.dbOpenError ? q(r.dbOpenError) : e;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var a = r.openCanceller, s = Math.round(10 * e.verno), i = !1;
        function u() {
          if (r.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new M(function(O, m) {
            if (u(), !n) throw new L.MissingAPI();
            var E = e.name, S = r.autoSchema || !s ? n.open(E) : n.open(E, s);
            if (!S) throw new L.MissingAPI();
            S.onerror = me(m), S.onblocked = Z(e._fireOnBlocked), S.onupgradeneeded = Z(function(v) {
              var A;
              w = S.transaction, r.autoSchema && !e._options.allowEmptyDB ? (S.onerror = mt, w.abort(), S.result.close(), (A = n.deleteDatabase(E)).onsuccess = A.onerror = Z(function() {
                m(new L.NoSuchDatabase("Database ".concat(E, " doesnt exist")));
              })) : (w.onerror = me(m), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, f = v < 1, e.idbdb = S.result, i && pa(e, w), ga(e, v / 10, w, m));
            }, m), S.onsuccess = Z(function() {
              w = null;
              var v, A, P, D, I, N = e.idbdb = S.result, C = At(N.objectStoreNames);
              if (0 < C.length) try {
                var R = N.transaction((D = C).length === 1 ? D[0] : D, "readonly");
                if (r.autoSchema) A = N, P = R, (v = e).verno = A.version / 10, P = v._dbSchema = Ut(0, A, P), v._storeNames = At(A.objectStoreNames, 0), Wt(v, [v._allTables], x(P), P);
                else if (zt(e, e._dbSchema, R), ((I = Ar(Ut(0, (I = e).idbdb, R), I._dbSchema)).add.length || I.change.some(function(T) {
                  return T.add.length || T.change.length;
                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), N.close(), s = N.version + 1, i = !0, O(d());
                Lt(e, R);
              } catch {
              }
              tt.push(e), N.onversionchange = Z(function(T) {
                r.vcFired = !0, e.on("versionchange").fire(T);
              }), N.onclose = Z(function(T) {
                e.on("close").fire(T);
              }), f && (I = e._deps, R = E, N = I.indexedDB, I = I.IDBKeyRange, Ir(N) || R === jt || Dr(N, I).put({ name: R }).catch(Q)), O();
            }, m);
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
        var p, y = r.dbReadyResolve, w = null, f = !1;
        return M.race([a, (typeof navigator > "u" ? M.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function m() {
            return indexedDB.databases().finally(O);
          }
          p = setInterval(m, 100), m();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(d)]).then(function() {
          return u(), r.onReadyBeingFired = [], M.resolve(Nr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < r.onReadyBeingFired.length) {
              var m = r.onReadyBeingFired.reduce(or, Q);
              return r.onReadyBeingFired = [], M.resolve(Nr(function() {
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
          r.openComplete = !0, y();
        }).then(function() {
          var O;
          return f && (O = {}, e.tables.forEach(function(m) {
            m.schema.indexes.forEach(function(E) {
              E.name && (O["idb://".concat(e.name, "/").concat(m.name, "/").concat(E.name)] = new ae(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(m.name, "/")] = O["idb://".concat(e.name, "/").concat(m.name, "/:dels")] = new ae(-1 / 0, [[[]]]);
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
          return function(p) {
            var d = i(p), p = d.value;
            return d.done ? p : p && typeof p.then == "function" ? p.then(n, a) : $(p) ? Promise.all(p).then(n, a) : n(p);
          };
        }
        return s(r)();
      }
      function Xt(e, r, n) {
        for (var a = $(e) ? e.slice() : [e], s = 0; s < n; ++s) a.push(r);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(r) {
          var n = e.table(r), a = n.schema, s = {}, i = [];
          function u(f, O, m) {
            var E = vt(f), S = s[E] = s[E] || [], v = f == null ? 0 : typeof f == "string" ? 1 : f.length, A = 0 < O, A = l(l({}, m), { name: A ? "".concat(E, "(virtual-from:").concat(m.name, ")") : m.name, lowLevelIndex: m, isVirtual: A, keyTail: O, keyLength: v, extractKey: Or(f), unique: !A && m.unique });
            return S.push(A), A.isPrimaryKey || i.push(A), 1 < v && u(v === 2 ? f[0] : f.slice(0, v - 1), O + 1, m), S.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), A;
          }
          r = u(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [r];
          for (var d = 0, p = a.indexes; d < p.length; d++) {
            var y = p[d];
            u(y.keyPath, 0, y);
          }
          function w(f) {
            var O, m = f.query.index;
            return m.isVirtual ? l(l({}, f), { query: { index: m.lowLevelIndex, range: (O = f.query.range, m = m.keyTail, { type: O.type === 1 ? 2 : O.type, lower: Xt(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, m), lowerOpen: !0, upper: Xt(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, m), upperOpen: !0 }) } }) : f;
          }
          return l(l({}, n), { schema: l(l({}, a), { primaryKey: r, indexes: i, getIndexByKeyPath: function(f) {
            return (f = s[vt(f)]) && f[0];
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
      function jr(e, r, n, a) {
        return n = n || {}, a = a || "", x(e).forEach(function(s) {
          var i, u, d;
          ie(r, s) ? (i = e[s], u = r[s], typeof i == "object" && typeof u == "object" && i && u ? (d = rr(i)) !== rr(u) ? n[a + s] = r[s] : d === "Object" ? jr(i, u, n, a + s + ".") : i !== u && (n[a + s] = r[s]) : i !== u && (n[a + s] = r[s])) : n[a + s] = void 0;
        }), x(r).forEach(function(s) {
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
            var i = B.trans, u = i.table(r).hook, d = u.deleting, p = u.creating, y = u.updating;
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
              var O, m, E, S = B.trans, v = f.keys || Mr(a, f);
              if (!v) throw new Error("Keys missing");
              return (f = f.type === "add" || f.type === "put" ? l(l({}, f), { keys: v }) : l({}, f)).type !== "delete" && (f.values = g([], f.values)), f.keys && (f.keys = g([], f.keys)), O = n, E = v, ((m = f).type === "add" ? Promise.resolve([]) : O.getMany({ trans: m.trans, keys: E, cache: "immutable" })).then(function(A) {
                var P = v.map(function(D, I) {
                  var N, C, R, T = A[I], j = { onerror: null, onsuccess: null };
                  return f.type === "delete" ? d.fire.call(j, D, T, S) : f.type === "add" || T === void 0 ? (N = p.fire.call(j, D, f.values[I], S), D == null && N != null && (f.keys[I] = D = N, a.outbound || ue(f.values[I], a.keyPath, D))) : (N = jr(T, f.values[I]), (C = y.fire.call(j, N, D, T, S)) && (R = f.values[I], Object.keys(C).forEach(function(k) {
                    ie(R, k) ? R[k] = C[k] : ue(R, k, C[k]);
                  }))), j;
                });
                return n.mutate(f).then(function(D) {
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
            return s ? M.resolve(s) : n.getMany(a).then(function(i) {
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
          var s = e.table(a), i = s.schema, u = i.primaryKey, f = i.indexes, d = u.extractKey, p = u.outbound, y = u.autoIncrement && f.filter(function(m) {
            return m.compound && m.keyPath.includes(u.keyPath);
          }), w = l(l({}, s), { mutate: function(m) {
            function E(k) {
              return k = "idb://".concat(r, "/").concat(a, "/").concat(k), D[k] || (D[k] = new ae());
            }
            var S, v, A, P = m.trans, D = m.mutatedParts || (m.mutatedParts = {}), I = E(""), N = E(":dels"), C = m.type, j = m.type === "deleteRange" ? [m.range] : m.type === "delete" ? [m.keys] : m.values.length < 50 ? [Mr(u, m).filter(function(k) {
              return k;
            }), m.values] : [], R = j[0], T = j[1], j = m.trans._cache;
            return $(R) ? (I.addKeys(R), (j = C === "delete" || R.length === T.length ? An(R, j) : null) || N.addKeys(R), (j || T) && (S = E, v = j, A = T, i.indexes.forEach(function(k) {
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
            }))) : R ? (T = { from: (T = R.lower) !== null && T !== void 0 ? T : e.MIN_KEY, to: (T = R.upper) !== null && T !== void 0 ? T : e.MAX_KEY }, N.add(T), I.add(T)) : (I.add(n), N.add(n), i.indexes.forEach(function(k) {
              return E(k.name).add(n);
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
              var S = B.subscr, v = !!S, A = Pn(B, s) && Dn(m, E) ? E.obsSet = {} : S;
              if (v) {
                var P = function(T) {
                  return T = "idb://".concat(r, "/").concat(a, "/").concat(T), A[T] || (A[T] = new ae());
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
        return n.numFailures === a ? null : (r = l({}, r), $(r.keys) && (r.keys = r.keys.filter(function(s, i) {
          return !(i in n.failures);
        })), "values" in r && $(r.values) && (r.values = r.values.filter(function(s, i) {
          return !(i in n.failures);
        })), r);
      }
      function Gr(e, r) {
        return n = e, ((a = r).lower === void 0 || (a.lowerOpen ? 0 < H(n, a.lower) : 0 <= H(n, a.lower))) && (e = e, (r = r).upper === void 0 || (r.upperOpen ? H(e, r.upper) < 0 : H(e, r.upper) <= 0));
        var n, a;
      }
      function Nn(e, r, O, a, s, i) {
        if (!O || O.length === 0) return e;
        var u = r.query.index, d = u.multiEntry, p = r.query.range, y = a.schema.primaryKey.extractKey, w = u.extractKey, f = (u.lowLevelIndex || u).extractKey, O = O.reduce(function(m, E) {
          var S = m, v = [];
          if (E.type === "add" || E.type === "put") for (var A = new ae(), P = E.values.length - 1; 0 <= P; --P) {
            var D, I = E.values[P], N = y(I);
            A.hasKey(N) || (D = w(I), (d && $(D) ? D.some(function(k) {
              return Gr(k, p);
            }) : Gr(D, p)) && (A.addKey(N), v.push(I)));
          }
          switch (E.type) {
            case "add":
              var C = new ae().addKeys(r.values ? m.map(function(G) {
                return y(G);
              }) : m), S = m.concat(r.values ? v.filter(function(G) {
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
                return !R.hasKey(r.values ? y(G) : G);
              }).concat(r.values ? v : v.map(function(G) {
                return y(G);
              }));
              break;
            case "delete":
              var T = new ae().addKeys(E.keys);
              S = m.filter(function(G) {
                return !T.hasKey(r.values ? y(G) : G);
              });
              break;
            case "deleteRange":
              var j = E.range;
              S = m.filter(function(G) {
                return !Gr(y(G), j);
              });
          }
          return S;
        }, e);
        return O === e ? e : (O.sort(function(m, E) {
          return H(f(m), f(E)) || H(y(m), y(E));
        }), r.limit && r.limit < 1 / 0 && (O.length > r.limit ? O.length = r.limit : e.length === r.limit && O.length < r.limit && (s.dirty = !0)), i ? Object.freeze(O) : O);
      }
      function Rn(e, r) {
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
          return a === "readwrite" && (u = (i = new AbortController()).signal, s = function(p) {
            return function() {
              if (i.abort(), a === "readwrite") {
                for (var y = /* @__PURE__ */ new Set(), w = 0, f = n; w < f.length; w++) {
                  var O = f[w], m = ze["idb://".concat(r, "/").concat(O)];
                  if (m) {
                    var E = e.table(O), S = m.optimisticOps.filter(function(G) {
                      return G.trans === d;
                    });
                    if (d._explicit && p && d.mutatedParts) for (var v = 0, A = Object.values(m.queries.query); v < A.length; v++) for (var P = 0, D = (C = A[v]).slice(); P < D.length; P++) Tr((R = D[P]).obsSet, d.mutatedParts) && (je(C, R), R.subscribers.forEach(function(G) {
                      return y.add(G);
                    }));
                    else if (0 < S.length) {
                      m.optimisticOps = m.optimisticOps.filter(function(G) {
                        return G.trans !== d;
                      });
                      for (var I = 0, N = Object.values(m.queries.query); I < N.length; I++) for (var C, R, T, j = 0, k = (C = N[I]).slice(); j < k.length; j++) (R = k[j]).res != null && d.mutatedParts && (p && !R.dirty ? (T = Object.isFrozen(R.res), T = Nn(R.res, R.req, S, E, R, T), R.dirty ? (je(C, R), R.subscribers.forEach(function(G) {
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
        }, table: function(n) {
          var a = e.table(n), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(i) {
            var u = B.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(i);
            var d = ze["idb://".concat(r, "/").concat(n)];
            return d ? (u = a.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || Mr(s, i).some(function(p) {
              return p == null;
            })) ? (d.optimisticOps.push(i), i.mutatedParts && Qt(i.mutatedParts), u.then(function(p) {
              0 < p.numFailures && (je(d.optimisticOps, i), (p = In(0, i, p)) && d.optimisticOps.push(p), i.mutatedParts && Qt(i.mutatedParts));
            }), u.catch(function() {
              je(d.optimisticOps, i), i.mutatedParts && Qt(i.mutatedParts);
            })) : u.then(function(p) {
              var y = In(0, l(l({}, i), { values: i.values.map(function(w, f) {
                var O;
                return p.failures[f] ? w : (w = (O = s.keyPath) !== null && O !== void 0 && O.includes(".") ? $e(w) : l({}, w), ue(w, s.keyPath, p.results[f]), w);
              }) }), p);
              d.optimisticOps.push(y), queueMicrotask(function() {
                return i.mutatedParts && Qt(i.mutatedParts);
              });
            }), u) : a.mutate(i);
          }, query: function(i) {
            if (!Pn(B, a) || !Dn("query", i)) return a.query(i);
            var u = ((y = B.trans) === null || y === void 0 ? void 0 : y.db._options.cache) === "immutable", f = B, d = f.requery, p = f.signal, y = function(E, S, v, A) {
              var P = ze["idb://".concat(E, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[v])) return [null, !1, P, null];
              var D = S[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (v) {
                case "query":
                  var I = D.find(function(N) {
                    return N.req.limit === A.limit && N.req.values === A.values && Rn(N.req.query.range, A.query.range);
                  });
                  return I ? [I, !0, P, D] : [D.find(function(N) {
                    return ("limit" in N.req ? N.req.limit : 1 / 0) >= A.limit && (!A.values || N.req.values) && Sa(N.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return I = D.find(function(N) {
                    return Rn(N.req.query.range, A.query.range);
                  }), [I, !!I, P, D];
              }
            }(r, n, "query", i), w = y[0], f = y[1], O = y[2], m = y[3];
            return w && f ? w.obsSet = i.obsSet : (f = a.query(i).then(function(E) {
              var S = E.result;
              if (w && (w.res = S), u) {
                for (var v = 0, A = S.length; v < A; ++v) Object.freeze(S[v]);
                Object.freeze(S);
              } else E.result = $e(S);
              return E;
            }).catch(function(E) {
              return m && w && je(m, w), Promise.reject(E);
            }), w = { obsSet: i.obsSet, promise: f, subscribers: /* @__PURE__ */ new Set(), type: "query", req: i, dirty: !1 }, m ? m.push(w) : (m = [w], (O = O || (ze["idb://".concat(r, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[i.query.index.name || ""] = m)), Oa(w, m, d, p), w.promise.then(function(E) {
              return { result: Nn(E.result, i, O?.optimisticOps, a, w, u) };
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
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new M(function(n, a) {
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
        e.isBeingOpened || (e.dbReadyPromise = new M(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new M(function(n, a) {
          e.cancelOpen = a;
        }));
      }, ee.prototype.close = function(n) {
        var r = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        r ? (n.isBeingOpened && n.cancelOpen(new L.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new L.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, ee.prototype.delete = function(e) {
        var r = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new M(function(s, i) {
          function u() {
            r.close(e);
            var d = r._deps.indexedDB.deleteDatabase(r.name);
            d.onsuccess = Z(function() {
              var p, y, w;
              p = r._deps, y = r.name, w = p.indexedDB, p = p.IDBKeyRange, Ir(w) || y === jt || Dr(w, p).delete(y).catch(Q), s();
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
        return x(this._allTables).map(function(r) {
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
          if (u = r.map(function(y) {
            if (y = y instanceof a.Table ? y.name : y, typeof y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return y;
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
              return D.name === sr.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return y(w, f, O, null, E);
              })) : q(D);
            }
            var A, P = ar(E);
            return P && et(), S = M.follow(function() {
              var D;
              (A = E.call(v, v)) && (P ? (D = Ie.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = $r(A)));
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
        }.bind(null, this, i, u, s, n);
        return s ? s._promise(i, p, "lock") : B.trans ? We(B.transless, function() {
          return a._whenReady(p);
        }) : this._whenReady(p);
      }, ee.prototype.table = function(e) {
        if (!ie(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, r) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = r = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, a = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, i, u, d, p, y = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        y.dbReadyPromise = new M(function(f) {
          y.dbReadyResolve = f;
        }), y.openCanceller = new M(function(f, O) {
          y.cancelOpen = O;
        }), this._state = y, this.name = e, this.on = ht(this, "populate", "blocked", "versionchange", "close", { ready: [or, Q] }), this.on.ready.subscribe = Hr(this.on.ready.subscribe, function(f) {
          return function(O, m) {
            ee.vip(function() {
              var E, S = n._state;
              S.openComplete ? (S.dbOpenError || M.resolve().then(O), m && f(O)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(O), m && f(O)) : (f(O), E = n, m || f(function v() {
                E.on.ready.unsubscribe(O), E.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (s = this, gt(oa.prototype, function(A, v) {
          this.db = s;
          var m = on, E = null;
          if (v) try {
            m = v();
          } catch (P) {
            E = P;
          }
          var S = A._ctx, v = S.table, A = v.hook.reading.fire;
          this._ctx = { table: v, index: S.index, isPrimKey: !S.index || v.schema.primKey.keyPath && S.index === v.schema.primKey.name, range: m, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: E, or: S.or, valueMapper: A !== ct ? A : null };
        })), this.Table = (i = this, gt(dn.prototype, function(f, O, m) {
          this.db = i, this._tx = m, this.name = f, this.schema = O, this.hook = i._allTables[f] ? i._allTables[f].hook : ht(null, { creating: [Jn, Q], reading: [Xn, ct], updating: [qn, Q], deleting: [Zn, Q] });
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
        })), this.WhereClause = (p = this, gt(mn.prototype, function(f, O, m) {
          if (this.db = p, this._ctx = { table: f, index: O === ":id" ? null : O, or: m }, this._cmp = this._ascending = H, this._descending = function(E, S) {
            return H(S, E);
          }, this._max = function(E, S) {
            return 0 < H(E, S) ? E : S;
          }, this._min = function(E, S) {
            return H(E, S) < 0 ? E : S;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(f) {
          0 < f.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(f) {
          !f.newVersion || f.newVersion < f.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(f.oldVersion / 10));
        }), this._maxKey = bt(r.IDBKeyRange), this._createTransaction = function(f, O, m, E) {
          return new n.Transaction(f, O, m, n._options.chromeTransactionDurability, E);
        }, this._fireOnBlocked = function(f) {
          n.on("blocked").fire(f), tt.filter(function(O) {
            return O.name === n.name && O !== n && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(f);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var w = new Proxy(this, { get: function(f, O, m) {
          if (O === "_vip") return !0;
          if (O === "table") return function(S) {
            return Jt(n.table(S), w);
          };
          var E = Reflect.get(f, O, m);
          return E instanceof dn ? Jt(E, w) : O === "tables" ? E.map(function(S) {
            return Jt(S, w);
          }) : O === "_createTransaction" ? function() {
            return Jt(E.apply(this, arguments), w);
          } : E;
        } });
        this.vip = w, a.forEach(function(f) {
          return f(n);
        });
      }
      var Zt, fe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Kr.prototype.subscribe = function(e, r, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: r, complete: n });
      }, Kr.prototype[fe] = function() {
        return this;
      }, Kr);
      function Kr(e) {
        this._subscribe = e;
      }
      try {
        Zt = { indexedDB: b.indexedDB || b.mozIndexedDB || b.webkitIndexedDB || b.msIndexedDB, IDBKeyRange: b.IDBKeyRange || b.webkitIDBKeyRange };
      } catch {
        Zt = { indexedDB: null, IDBKeyRange: null };
      }
      function Tn(e) {
        var r, n = !1, a = new Aa(function(s) {
          var i = ar(e), u, d = !1, p = {}, y = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), f && Te.storagemutated.unsubscribe(m));
          } };
          s.start && s.start(w);
          var f = !1, O = function() {
            return gr(E);
          }, m = function(S) {
            Yt(p, S), Tr(y, p) && O();
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
              n = !0, r = P, d || v.signal.aborted || (p = {}, function(D) {
                for (var I in D) if (ie(D, I)) return;
                return 1;
              }(y = S) || f || (Te(yt, m), f = !0), gr(function() {
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
          return r = He.dependencies, n = r.indexedDB, r = r.IDBKeyRange, (Ir(n) ? Promise.resolve(n.databases()).then(function(a) {
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
      }, vip: Nr, async: function(e) {
        return function() {
          try {
            var r = $r(e.apply(this, arguments));
            return r && typeof r.then == "function" ? r : M.resolve(r);
          } catch (n) {
            return q(n);
          }
        };
      }, spawn: function(e, r, n) {
        try {
          var a = $r(e.apply(n, r || []));
          return a && typeof a.then == "function" ? a : M.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, r) {
        return r = M.resolve(typeof e == "function" ? He.ignoreTransaction(e) : e).timeout(r || 6e4), B.trans ? B.trans.waitFor(r) : r;
      }, Promise: M, debug: { get: function() {
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
      })), M.rejectionMapper = function(e, r) {
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
var Ga = Ma();
const Ur = /* @__PURE__ */ $a(Ga), $n = Symbol.for("Dexie"), St = globalThis[$n] || (globalThis[$n] = Ur);
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
    const o = ($) => t?.id ? $.id === t.id : !1, l = ($) => t?.name ? $.name.includes(t?.name) : !1, g = ($) => t?.presentation_id ? $.presentation_id === t.presentation_id : !1, x = await this.db.table(_.SLIDE).toArray().then(($) => t?.presentation_id ? $.filter(g) : $).then(($) => t?.id ? $.filter(o) : $).then(($) => t?.name ? $.filter(l) : $);
    return x && x.sort(($, te) => $.order_index - te.order_index), x !== void 0 && K(3, ["%cstorage%c %cslides", c.STORAGE, c.NONE, c.SLIDE, t]), {
      // @ts-ignore
      data: x,
      query: t,
      //: data !== undefined ? { data, query } : null,
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
      c.STORAGE,
      c.NONE,
      c.PRESENTATION,
      t
    ]), {
      // @ts-ignore
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
    c.STORAGE,
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
function zr(h) {
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
    return g.onupgradeneeded = () => g.result.createObjectStore(t), o = zr(g), o.then((b) => {
      b.onclose = () => o = void 0;
    }, () => {
    }), o;
  };
  return (g, b) => l().then((x) => b(x.transaction(t, g).objectStore(t)));
}
let Fr;
function Gn() {
  return Fr || (Fr = Ka("keyval-store", "keyval")), Fr;
}
function _e(h, t = Gn()) {
  return t("readonly", (o) => zr(o.get(h)));
}
function ke(h, t, o = Gn()) {
  return o("readwrite", (l) => (l.put(t, h), zr(l.transaction)));
}
class Kn {
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
        this.sm = new Mn(t);
        break;
      case he.LOCAL:
        this.sm = new Ln(t);
        break;
      case he.SESSION:
        this.sm = new Bn(t);
        break;
      case he.KEYVAL:
        this.sm = new Kn(t);
        break;
      case he.WINDOW:
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
          ), t.data.messages = x, b = t.data.messages.length > 0 ? Wr(t.data.messages[0].utc) : "none", g?.hash && g.hash === b ? (K(3, [
            "%cload%c %cleanMessages",
            c.NO_UPDATES,
            c.NONE,
            c.MESSAGES,
            t.query.widget
          ]), K(4, ["%cmessages", c.MESSAGES, t]), l = 204) : (o = t, g.hash = b, l = await this.sm?.setMessages(t.query, t).then(async ($) => ($ = 201, this.broadcastUpdate($, t))));
          break;
        case _.CLOUD:
          b = Wr(t.data.cloud), g?.hash && g.hash === b ? (K(3, [
            "%cload%c %ccloud",
            c.NO_UPDATES,
            c.NONE,
            c.CLOUD,
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
          b = Wr(t.data.series), g?.hash && g.hash === b ? (K(3, [
            "%cload%c %cseries",
            c.NO_UPDATES,
            c.NONE,
            c.SERIES,
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
            "%cfetch%c %capi",
            c.NO_UPDATES,
            c.NONE,
            c.API,
            `Bad request: type ${t.query.type} unknown`
          ]), t;
      }
    } else
      switch (K(4, [
        `%cload%c %c${t.query.type}%c %bad request`,
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
          kn(o.query),
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
        this.sm = new Mn(t);
        break;
      case he.LOCAL:
        this.sm = new Ln(t);
        break;
      case he.SESSION:
        this.sm = new Bn(t);
        break;
      case he.KEYVAL:
        this.sm = new Kn(t);
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
