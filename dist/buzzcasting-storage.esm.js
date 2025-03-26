var Pa = Object.defineProperty;
var Da = (d, t, s) => t in d ? Pa(d, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : d[t] = s;
var y = (d, t, s) => Da(d, typeof t != "symbol" ? t + "" : t, s);
var _ = /* @__PURE__ */ ((d) => (d.MESSAGES = "messages", d.CLOUD = "cloud", d.SERIES = "series", d.TOPICS = "topics", d.WIDGET = "widget", d.WIDGETS = "widgets", d.DASHBOARD = "dashboard", d.DASHBOARDS = "dashboards", d.SLIDE = "slide", d.SLIDES = "slides", d.PRESENTATION = "presentation", d.PRESENTATIONS = "presentations", d.PREFERENCE = "preference", d.PREFERENCES = "preferences", d))(_ || {}), c = /* @__PURE__ */ ((d) => (d.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", d.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", d.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", d.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", d.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", d.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", d.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", d.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", d.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", d.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", d.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", d.NONE = "color:transparent;background-color:transparent;", d.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", d.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", d.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", d.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", d.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", d.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", d.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", d.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", d))(c || {}), ee = /* @__PURE__ */ ((d) => (d.ADD_SLIDE = "addSlide", d.APP_READY = "appReady", d.API_UPDATE = "apiUpdate", d.WS_API_REQUEST = "wsApiRequest", d.WS_API_RESPONSE = "wsApiResponse", d.WS_API_UPDATE = "wsApiRUpdate", d.APPROVE_MESSAGE = "approveMessage", d.CHANNEL = "channel", d.CLEAN_MESSAGES = "cleanMessages", d.CLOSE_MODAL = "closeModal", d.CLOSE_BUILDER_MODAL = "closeBuilderModal", d.DASHBOARD_LOAD = "loadDashboard", d.DASHBOARD_STORE = "storeDashboard", d.ERROR = "error", d.HIDE_MESSAGE = "hideMessage", d.HIDE_LABELS = "hideLabels", d.MAUPPUT_UPDATE = "layoutUpdate", d.PREV_SLIDE = "prevSlide", d.RELOAD_PRESENTATION = "reloadPresentation", d.SHOW_MODAL = "showModal", d.STAR_MESSAGE = "starMessage", d.GOTO_SLIDE = "gotoSlide", d.NEXT_SLIDE = "nextSlide", d.PREFERENCE_LOAD = "loadPreference", d.PREFERENCE_STORE = "storePreference", d.PAUSE_PRESENTATION = "pausePresentation", d.PRESENTATION_READY = "presentationReady", d.PRESENTATION_LOAD = "loadPresentation", d.PRESENTATION_STORE = "storePresentation", d.SHOW_BUILDER_MODAL = "showBuilderModal", d.SLIDE_DID_LOAD = "slideDidLoad", d.SLIDE_GOTO = "slideGoto", d.SLIDE_READY = "slideReady", d.SLIDE_LOAD = "loadSlide", d.SLIDE_STORE = "storeSlide", d.SLIDE_TRANSITIONER = "slideTransitioner", d.START_TRANSITIONER = "startTransitioner", d.STORAGE_INIT = "storageInit", d.SUBSCRIBE = "subscribe", d.SUSPEND_ACCOUNT = "suspendAccount", d.SWITCH_PRESENTATION = "switchPresentation", d.REMOVE_CLOUD = "removeCloud", d.UPDATE = "update", d.VERSION = "version", d.WIDGETS_CLEAR = "widgetsClear", d.WIDGET_LOAD = "widgetLoad", d.WIDGET_STORE = "widgetStore", d.WIDGET_UPDATE = "widgetUpdate", d))(ee || {}), an = /* @__PURE__ */ ((d) => (d.APPROVED = "approved", d.BEFORE = "before", d.DELAYED = "delayed", d.NONE = "none", d.REALTIME = "realtime", d))(an || {}), Ee = /* @__PURE__ */ ((d) => (d.KEYVAL = "keyval", d.LOCAL = "local", d.SESSION = "session", d.DEXIE = "dexie", d.WINDOW = "window", d))(Ee || {});
const Ra = "3.7.8";
function za(d) {
  const t = d.toUpperCase().split(/[\s_-]+/);
  return t.length > 0 ? (t.forEach((s, u) => {
    t[u] = `${s.charAt(0)}.`;
  }), t.join(" ")) : "";
}
function Ha(d) {
  let t = "", s = "", u = {
    backgroundImage: ""
  };
  return typeof d.media < "u" && d.media.forEach((m) => {
    (m.type === "photo" || m.type === "image") && (u = {
      backgroundImage: `url(${m.url})`
    }, s = m.url), m.type === "video" && (t = m.url);
  }), {
    image: s,
    background: u || null,
    video: t
  };
}
function xa(d) {
  const t = {};
  for (let s = 0; s < d.length; s++) {
    const u = d.item(s);
    u != null && u.name && (t[u.name] = u.value);
  }
  return t;
}
function Ya(d) {
  const t = {};
  for (let s = 0; s < d.length; s++) {
    const u = d[s];
    u.name !== "class" && !u.name.includes("data") && (t[u.name] = u.value);
  }
  return t;
}
function Qa(d, t) {
  switch (d) {
    case "ax":
      return '<div class="axa-switch-small bg-center bg-cover w-6 h-6"></div>';
    case "bl":
      return `<li class="text-blue fa-solid fa-rss fa-${t}"/>`;
    case "co":
      return `<li class="fa-solid fa-comment fa-${t}"/>`;
    case "da":
      return `<li class="fa-brands fa-dailymotion fa-${t}"/>`;
    case "fb":
      return `<li class="text-blue-900 fa-brands fa-facebook fa-${t}"/>`;
    case "fo":
      return `<li class="fa-solid fa-messages fa-${t}"/>`;
    case "ig":
      return `<li class="fa-brands fa-instagram fa-${t}"/>`;
    case "lb":
      return `<li class="fa-solid fa-comment fa-${t}"/>`;
    case "li":
      return `<li class="fa-brands fa-linkedin fa-${t}"/>`;
    case "me":
      return `<li class="fa-solid fa-rss fa-${t}"/>`;
    case "pi":
      return `<li class="fa-brands fa-pinterest fa-${t}"/>`;
    case "qq":
      return `<li class="fa-brands fa-weibo fa-${t}"/>`;
    case "rd":
      return `<li class="fa-brands fa-reddit fa-${t}"/>`;
    case "re":
      return `<li class="fa-solid fa-star-sharp-half-stroke fa-${t}"/>`;
    case "ti":
      return `<li class="fa-brands fa-tiktok fa-${t}"/>`;
    case "tw":
      return `<li class="fa-brands fa-x-twitter fa-${t}"/>`;
    case "vk":
      return `<li class="fa-brands fa-vk fa-${t}"/>`;
    case "ws":
      return `<li class="fa-solid fa-rss fa-${t}"/>`;
    case "yt":
      return `<li class="text-red fa-brands fa-youtube fa-${t}"/>`;
    default:
      return "";
  }
}
function Xa(d) {
  return d.replace(/^\w|[A-Z]|\b\w/g, (t, s) => s === 0 ? t.toLowerCase() : t.toUpperCase()).replace(/\s+/g, "");
}
function Ja(d) {
  return d.toLowerCase().split("-").reduce((t, s) => t + (s.charAt(0).toUpperCase() + s.slice(1)));
}
const Za = (d) => d.charAt(0).toUpperCase() + d.slice(1);
function ka(d) {
  const t = document.createRange();
  t.selectNodeContents(d), t.deleteContents();
}
function Ia(d) {
  d.reduce(
    (t, s) => Object.keys(s).reduce(
      (u, m) => ({
        ...u,
        [m]: m in t && typeof t[m] == "object" && t[m] !== null && typeof s[m] == "object" && s[m] !== null ? Ia([t[m], s[m]]) : s[m]
      }),
      t
    ),
    {}
  );
}
function Va(d, t = "font-bold") {
  return `${(d == null ? void 0 : d.title.length) > 0 ? `<div class="${t}">${d.title}</div>` : ""}${d != null && d.content ? d.content.replace(/\n\n/g, `
`).replace(/\n/g, "<br/>") : ""}`;
}
function Na(d, t) {
  for (; d.length < t; )
    d = `0${d}`;
  return d;
}
function xe(d, t) {
  let s, u, m;
  if (t.length === 0)
    return d;
  for (s = 0, m = t.length; s < m; s++)
    u = t.charCodeAt(s), d = (d << 5) - d + u, d |= 0;
  return d < 0 ? d * -2 : d;
}
function Ta(d, t, s) {
  return Object.keys(t).sort().reduce(u, d);
  function u(m, A) {
    return Kr(m, t[A], A, s);
  }
}
function Kr(d, t, s, u) {
  const m = xe(xe(xe(d, s), Ca(t)), typeof t);
  if (t === null)
    return xe(m, "null");
  if (t === void 0)
    return xe(m, "undefined");
  if (typeof t == "object" || typeof t == "function") {
    if (u.includes(t))
      return xe(m, `[Circular]${s}`);
    u.push(t);
    const A = Ta(m, t, u);
    if (!("valueOf" in t) || typeof t.valueOf != "function")
      return A;
    try {
      return xe(A, String(t.valueOf()));
    } catch (N) {
      return xe(A, `[valueOf exception]${N.stack || N.message}`);
    }
  }
  return xe(m, t.toString());
}
function Ca(d) {
  return Object.prototype.toString.call(d);
}
function Qn(d) {
  return Na(Kr(0, d, "", []).toString(16), 8);
}
function qa(d, t) {
  if (d = d.toString().replace(/[^0-9.]/g, ""), d < 1e3)
    return d;
  const s = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" }
  ];
  let u;
  for (u = s.length - 1; u > 0 && !(d >= s[u].v); u--)
    ;
  return (d / s[u].v).toFixed(t).replace(/\.0+$|(\.\d*[1-9])0+$/, "$1") + s[u].s;
}
const G = (d = 0, t) => {
  switch (!0) {
    case d > 3:
      console.debug(...t);
      break;
    case d > 2:
      console.info(...t);
      break;
    case d > 1:
      console.warn(...t);
      break;
    case d > 0:
      console.error(...t);
      break;
  }
};
function es(d, t) {
  const s = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "MM" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ], u = /\.0+$|(\.\d*[1-9])0+$/;
  let m;
  for (m = s.length - 1; m > 0 && !(d >= s[m].value); m--)
    ;
  return (d / s[m].value).toFixed(t).replace(u, "$1") + s[m].symbol;
}
function ts(d) {
  return d[Math.floor(Math.random() * d.length)];
}
function ns(d) {
  switch (d.language) {
    case "ar":
      return {
        direction: "rtl",
        textAlign: "right"
      };
    default:
      return {};
  }
}
function rs(d) {
  const t = window.BuzzCasting.getOptions().suspended ?? !1;
  return d.forEach((s) => {
    var u;
    if (t ? s.content = "License suspended, please contact your Sales Representative to restore service" : s.content = ((u = s.content) == null ? void 0 : u.replace(
      /(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)((\?.*)?)/g,
      ""
    )) || "", s.sender !== null)
      switch (!0) {
        case s.sender.title === "Unknown author":
          s.sender.title = "", s.sender.name = "";
          break;
        case s.sender.title === s.sender.name:
          s.sender.name = "";
          break;
        case s.channel === "tw":
          s.sender.name = `@${s.sender.name}`;
          break;
      }
    else
      s.sender = {
        title: "",
        name: "",
        id: "",
        avatar: "default",
        bio: "",
        location: "",
        following: 0,
        verified: 0,
        listed: 0,
        followers: 0,
        favourites: 0,
        messages: 0,
        influence: 0
      };
    if (s.sender.title === "" && s.link !== "") {
      const m = new URL(s.link);
      s.sender.title = m.hostname.replace("www.", "");
    }
  }), d;
}
function as(d, t, s, u) {
  d.stopPropagation(), t.showModal({
    showComponent: "card-modal",
    props: { data: s, options: u }
  });
}
function ss(d) {
  const t = [...d];
  for (let s = t.length - 1; s > 0; s--) {
    const u = Math.floor(Math.random() * (s + 1));
    [t[s], t[u]] = [t[u], t[s]];
  }
  return t;
}
function is() {
  let d = "";
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let s = 0; s < 7; s++) d += t.charAt(Math.floor(Math.random() * t.length));
  return d;
}
const $r = (d) => {
  switch (d == null ? void 0 : d.type) {
    case _.MESSAGES:
      return c.MESSAGES;
    case _.SERIES:
      return c.SERIES;
    case _.CLOUD:
      return c.CLOUD;
    default:
      return c.NO_UPDATES;
  }
}, os = (d) => {
  switch (!0) {
    case d < 0:
      return "text-down text-xs";
    case d > 0:
      return "text-up text-xs";
    default:
      return "text-white text-xs";
  }
};
function X(d) {
  let t = `${d.type}.${d.topics}`;
  return d.order && (t += `.${d.order}`), d.period && (t += `.${d.period}`), t;
}
function $a(d) {
  var t;
  if (d.widget === void 0) {
    const s = (t = d.topics) == null ? void 0 : t.split("-");
    s && s.length > 1 ? (d.dashboard = s ? s[0] : "", d.widget = s ? s[1] : "") : (d.widget = d.topics, d.dashboard = d.slide);
  }
  return d;
}
function At(d, t) {
  var F;
  let s, u, m, A, N;
  switch (d.moderation) {
    case an.BEFORE:
      s = /* @__PURE__ */ new Date(), u = (F = d.beforeTime) == null ? void 0 : F.split(":"), m = Number.parseInt(u ? u[0] : "00"), A = Number.parseInt(u ? u[1] : "00"), N = Number.parseInt(u ? u[2] : "00"), t.before = s.setHours(m, A, N, 0) / 1e3, t.period || (t.period = s.getDay() === 1 ? 72 : 24);
      break;
    case an.DELAYED:
      d.delay && d.delay > 0 && (t.delay = `${d.delay}`);
      break;
    case an.APPROVED:
      t.approved = "1";
      break;
    default:
      d.period !== 0 && (t.period = d.period);
  }
  return t;
}
class ja {
  constructor(t) {
    y(this, "options");
    y(this, "url");
    y(this, "headers", () => {
      const t = `Bearer ${this.options.bearer}`;
      return {
        headers: new Headers({
          Authorization: t,
          Accept: "application/json"
          // 'Cache-Control': 'no-cache',
          // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
        })
      };
    });
    y(this, "formHeaders", () => {
      const t = `Bearer ${this.options.bearer}`;
      return {
        headers: new Headers({
          Authorization: t,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
          // 'X-Session-Key': localStorage.getItem('guid') || 'invalid',
        })
      };
    });
    this.options = t, this.url = `https://${t.app}.buzzcasting.net`;
  }
  async get(t) {
    const { version: s } = this.options, u = this.headers(), m = Object.assign({}, t);
    delete m.type, delete m.hash, delete m.order, m.topics = `${m.dashboard}-${m.widget}`, delete m.presentation;
    const A = Object.keys(m).length > 0 ? `?${new URLSearchParams(m).toString()}` : "";
    let N = "";
    switch (t.type) {
      case _.MESSAGES:
        N = c.MESSAGES;
        break;
      case _.SERIES:
        N = c.SERIES;
        break;
      case _.CLOUD:
        N = c.CLOUD;
        break;
    }
    return G(3, [
      `%cfetch%c %capi%c %c${t.type}`,
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      N,
      t.widget
    ]), G(4, [t.type, m]), await fetch(
      [this.url, "api", s, t.type].join("/") + A,
      { ...u, method: "get" }
    ).then(async (F) => {
      if (!F.ok)
        throw new Error(`${F.status}`);
      return F;
    }).then((F) => F.json()).then((F) => (F.query = t, F)).catch((F) => ({ success: !1, message: `${F}`, data: null, query: t }));
  }
  async hideMessage(t) {
    const { version: s } = this.options, u = this.headers(), m = "?action=visible";
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      ee.HIDE_MESSAGE,
      t.widget,
      t.id
    ), await fetch(
      [this.url, "api", s, "messages", t.id].join("/") + m,
      { ...u, method: "put" }
    ).then((A) => {
      if (!A.ok)
        throw new Error(A.statusText);
      return A;
    }).then((A) => A.json()).catch((A) => ({ succes: !1, message: A, data: [] }));
  }
  async hideLabels(t) {
    const { version: s } = this.options, u = this.formHeaders(), m = new URLSearchParams(), A = t.labels || [];
    for (const [N, F] of A.entries())
      m.append(`custom_filters[${N}]`, F);
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      ee.HIDE_LABELS,
      t.widget,
      A
    ), await fetch(
      [this.url, "api", s, t.type, t.widget].join("/"),
      { ...u, body: m, method: "put" }
    ).then((N) => {
      if (!N.ok)
        throw new Error(N.statusText);
      return N;
    }).then((N) => N.json()).catch((N) => ({ succes: !1, message: N, data: [] }));
  }
  async loadSlide(t) {
    const { version: s } = this.options, u = this.headers(), m = Object.assign({}, t);
    return delete m.type, delete m.hash, G(3, ["%capi%c %cloadSlide", c.API, c.NONE, c.SLIDE, t.id]), await fetch(
      [this.url, "api", s, "slides", t.id].join("/"),
      { ...u, method: "get" }
    ).then(async (A) => {
      if (!A.ok)
        throw new Error(`${A.status}`);
      return A;
    }).then((A) => A.json()).then((A) => (A.query = t, A)).catch((A) => ({ success: !1, message: `${A}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storeSlide(t) {
    const { version: s } = this.options, u = this.formHeaders();
    delete t.update, delete t.type;
    const m = JSON.stringify(t);
    return G(3, [
      "%cput%c %capi%c %cslide",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.SLIDE,
      ee.SLIDE_STORE,
      t.id
    ]), await fetch(
      [this.url, "api", s, "slides", t.id].join("/"),
      { ...u, body: m, method: "put" }
    ).then((A) => {
      if (!A.ok)
        throw new Error(A.statusText);
      return A;
    }).then((A) => A.json()).catch((A) => ({ succes: !1, message: A, data: [] }));
  }
  async loadPresentation(t) {
    const { version: s } = this.options, u = this.headers();
    return delete t.update, G(3, [
      "%cload%c %capi%c %cloadPresentation",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.PRESENTATION,
      t.id
    ]), await fetch(
      [this.url, "api", s, _.PRESENTATIONS, t.id].join("/"),
      { ...u, method: "get" }
    ).then(async (m) => {
      if (!m.ok)
        throw new Error(`${m.status}`);
      return m;
    }).then((m) => m.json()).then((m) => (m.query = t, m)).catch((m) => ({ success: !1, message: `${m}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storePresentation(t) {
    const { version: s } = this.options, u = this.formHeaders();
    delete t.update;
    const m = JSON.stringify(t);
    return G(2, ["%capi%c %cput", c.API, c.NONE, c.PRESENTATION, t.name]), await fetch(
      [this.url, "api", s, _.PRESENTATIONS, t.id].join("/"),
      { ...u, body: m, method: "put" }
    ).then((A) => {
      if (!A.ok)
        throw new Error(A.statusText);
      return A;
    }).then((A) => A.json()).catch((A) => ({ succes: !1, message: A, data: [] }));
  }
  async loadPreference(t) {
    const { version: s } = this.options, u = this.headers();
    return G(3, [
      "%capi%c %cloadPreference",
      c.API,
      c.NONE,
      c.APP,
      t.id
    ]), await fetch(
      [this.url, "api", s, _.PREFERENCES, t.id].join("/"),
      { ...u, method: "get" }
    ).then(async (m) => {
      if (!m.ok)
        throw new Error(`${m.status}`);
      return m;
    }).then((m) => m.json()).then((m) => m).catch((m) => ({ success: !1, message: `${m}`, data: null }));
  }
  async storePreference(t) {
    const { version: s } = this.options, u = this.formHeaders();
    delete t.update;
    const m = JSON.stringify({ data: t });
    return console.info(
      "%capi%c %cstorePreference",
      c.API,
      c.NONE,
      c.APP,
      t.id
    ), await fetch(
      [this.url, "api", s, _.PREFERENCES, t.id].join("/"),
      { ...u, body: m, method: "put" }
    ).then((A) => {
      if (!A.ok)
        throw new Error(A.statusText);
      return A;
    }).then((A) => A.json()).catch((A) => ({ succes: !1, message: A, data: [] }));
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
    const { version: s } = this.options, u = this.headers();
    return G(3, ["%capi%c %dashboards", c.API, c.NONE, c.WIDGET]), await fetch(
      [this.url, "api", s, _.WIDGETS, (t == null ? void 0 : t.id) || ""].join("/"),
      {
        ...u,
        method: "get"
      }
    ).then(async (m) => {
      if (!m.ok)
        throw new Error(`${m.status}`);
      return m;
    }).then((m) => m.json()).then((m) => ({
      data: { dashboards: m },
      message: "Dashboard Widgets loaded from api",
      success: !0
    })).catch((m) => ({ success: !1, message: `${m}`, data: null }));
  }
}
var Ma = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ka(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var sn = { exports: {} }, Ba = sn.exports, jr;
function Ga() {
  return jr || (jr = 1, function(d, t) {
    (function(s, u) {
      d.exports = u();
    })(Ba, function() {
      var s = function(e, n) {
        return (s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
          r.__proto__ = a;
        } || function(r, a) {
          for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
        })(e, n);
      }, u = function() {
        return (u = Object.assign || function(e) {
          for (var n, r = 1, a = arguments.length; r < a; r++) for (var i in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          return e;
        }).apply(this, arguments);
      };
      function m(e, n, r) {
        for (var a, i = 0, o = n.length; i < o; i++) !a && i in n || ((a = a || Array.prototype.slice.call(n, 0, i))[i] = n[i]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var A = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ma, N = Object.keys, F = Array.isArray;
      function ne(e, n) {
        return typeof n != "object" || N(n).forEach(function(r) {
          e[r] = n[r];
        }), e;
      }
      typeof Promise > "u" || A.Promise || (A.Promise = Promise);
      var oe = Object.getPrototypeOf, V = {}.hasOwnProperty;
      function J(e, n) {
        return V.call(e, n);
      }
      function he(e, n) {
        typeof n == "function" && (n = n(oe(e))), (typeof Reflect > "u" ? N : Reflect.ownKeys)(n).forEach(function(r) {
          ve(e, r, n[r]);
        });
      }
      var pe = Object.defineProperty;
      function ve(e, n, r, a) {
        pe(e, n, ne(r && J(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, a));
      }
      function Ae(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), ve(e.prototype, "constructor", e), { extend: he.bind(null, e.prototype) };
        } };
      }
      var Pt = Object.getOwnPropertyDescriptor, Dt = [].slice;
      function Be(e, n, r) {
        return Dt.call(e, n, r);
      }
      function ut(e, n) {
        return n(e);
      }
      function ge(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Rt(e) {
        A.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function we(e, n) {
        if (typeof n == "string" && J(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var r = [], a = 0, i = n.length; a < i; ++a) {
            var o = we(e, n[a]);
            r.push(o);
          }
          return r;
        }
        var l = n.indexOf(".");
        if (l !== -1) {
          var f = e[n.substr(0, l)];
          return f == null ? void 0 : we(f, n.substr(l + 1));
        }
      }
      function de(e, n, r) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ge(typeof r != "string" && "length" in r);
          for (var a = 0, i = n.length; a < i; ++a) de(e, n[a], r[a]);
        } else {
          var o, l, f = n.indexOf(".");
          f !== -1 ? (o = n.substr(0, f), (l = n.substr(f + 1)) === "" ? r === void 0 ? F(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = r : de(f = !(f = e[o]) || !J(e, o) ? e[o] = {} : f, l, r)) : r === void 0 ? F(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = r;
        }
      }
      function xt(e) {
        var n, r = {};
        for (n in e) J(e, n) && (r[n] = e[n]);
        return r;
      }
      var zr = [].concat;
      function Vn(e) {
        return zr.apply([], e);
      }
      var We = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Vn([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return A[e];
      }), qn = new Set(We.map(function(e) {
        return A[e];
      })), lt = null;
      function Ge(e) {
        return lt = /* @__PURE__ */ new WeakMap(), e = function n(r) {
          if (!r || typeof r != "object") return r;
          var a = lt.get(r);
          if (a) return a;
          if (F(r)) {
            a = [], lt.set(r, a);
            for (var i = 0, o = r.length; i < o; ++i) a.push(n(r[i]));
          } else if (qn.has(r.constructor)) a = r;
          else {
            var l, f = oe(r);
            for (l in a = f === Object.prototype ? {} : Object.create(f), lt.set(r, a), r) J(r, l) && (a[l] = n(r[l]));
          }
          return a;
        }(e), lt = null, e;
      }
      var Hr = {}.toString;
      function cn(e) {
        return Hr.call(e).slice(8, -1);
      }
      var un = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Yr = typeof un == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[un]) && n.apply(e);
      } : function() {
        return null;
      };
      function Le(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var qe = {};
      function Pe(e) {
        var n, r, a, i;
        if (arguments.length === 1) {
          if (F(e)) return e.slice();
          if (this === qe && typeof e == "string") return [e];
          if (i = Yr(e)) {
            for (r = []; !(a = i.next()).done; ) r.push(a.value);
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
      var ln = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ht = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ye = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ht), Qr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function et(e, n) {
        this.name = e, this.message = n;
      }
      function er(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(r) {
          return n[r].toString();
        }).filter(function(r, a, i) {
          return i.indexOf(r) === a;
        }).join(`
`);
      }
      function kt(e, n, r, a) {
        this.failures = n, this.failedKeys = a, this.successCount = r, this.message = er(e, n);
      }
      function tt(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(r) {
          return n[r];
        }), this.failuresByPos = n, this.message = er(e, this.failures);
      }
      Ae(et).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ae(kt).from(et), Ae(tt).from(et);
      var dn = ye.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), Xr = et, L = ye.reduce(function(e, n) {
        var r = n + "Error";
        function a(i, o) {
          this.name = r, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Qr[n] || r, this.inner = null);
        }
        return Ae(a).from(Xr), e[n] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var tr = ht.reduce(function(e, n) {
        return e[n + "Error"] = L[n], e;
      }, {}), It = ye.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = L[n]), e;
      }, {});
      function Z() {
      }
      function dt(e) {
        return e;
      }
      function Jr(e, n) {
        return e == null || e === dt ? n : function(r) {
          return n(e(r));
        };
      }
      function Fe(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function Zr(e, n) {
        return e === Z ? n : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var a = this.onsuccess, i = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var o = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? Fe(a, this.onsuccess) : a), i && (this.onerror = this.onerror ? Fe(i, this.onerror) : i), o !== void 0 ? o : r;
        };
      }
      function Vr(e, n) {
        return e === Z ? n : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? Fe(r, this.onsuccess) : r), a && (this.onerror = this.onerror ? Fe(a, this.onerror) : a);
        };
      }
      function qr(e, n) {
        return e === Z ? n : function(r) {
          var a = e.apply(this, arguments);
          ne(r, a);
          var i = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = n.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Fe(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Fe(o, this.onerror) : o), a === void 0 ? r === void 0 ? void 0 : r : ne(a, r);
        };
      }
      function ea(e, n) {
        return e === Z ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function fn(e, n) {
        return e === Z ? n : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var a = this, i = arguments.length, o = new Array(i); i--; ) o[i] = arguments[i];
            return r.then(function() {
              return n.apply(a, o);
            });
          }
          return n.apply(this, arguments);
        };
      }
      It.ModifyError = kt, It.DexieError = et, It.BulkError = tt;
      var Se = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function nr(e) {
        Se = e;
      }
      var ft = {}, rr = 100, We = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, oe(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, oe(n), e];
      }(), ht = We[0], ye = We[1], We = We[2], ye = ye && ye.then, Ue = ht && ht.constructor, hn = !!We, pt = function(e, n) {
        gt.push([e, n]), Nt && (queueMicrotask(na), Nt = !1);
      }, pn = !0, Nt = !0, ze = [], Tt = [], gn = dt, Ie = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Z, pgp: !1, env: {}, finalize: Z }, B = Ie, gt = [], He = 0, Ct = [];
      function M(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = B;
        if (typeof e != "function") {
          if (e !== ft) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && bn(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function r(a, i) {
          try {
            i(function(o) {
              if (a._state === null) {
                if (o === a) throw new TypeError("A promise cannot be resolved with itself.");
                var l = a._lib && nt();
                o && typeof o.then == "function" ? r(a, function(f, p) {
                  o instanceof M ? o._then(f, p) : o.then(f, p);
                }) : (a._state = !0, a._value = o, sr(a)), l && rt();
              }
            }, bn.bind(null, a));
          } catch (o) {
            bn(a, o);
          }
        }(this, e);
      }
      var mn = { get: function() {
        var e = B, n = Kt;
        function r(a, i) {
          var o = this, l = !e.global && (e !== B || n !== Kt), f = l && !Te(), p = new M(function(b, E) {
            yn(o, new ar(or(a, e, l, f), or(i, e, l, f), b, E, e));
          });
          return this._consoleTask && (p._consoleTask = this._consoleTask), p;
        }
        return r.prototype = ft, r;
      }, set: function(e) {
        ve(this, "then", e && e.prototype === ft ? mn : { get: function() {
          return e;
        }, set: mn.set });
      } };
      function ar(e, n, r, a, i) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = r, this.reject = a, this.psd = i;
      }
      function bn(e, n) {
        var r, a;
        Tt.push(n), e._state === null && (r = e._lib && nt(), n = gn(n), e._state = !1, e._value = n, a = e, ze.some(function(i) {
          return i._value === a._value;
        }) || ze.push(a), sr(e), r && rt());
      }
      function sr(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var r = 0, a = n.length; r < a; ++r) yn(e, n[r]);
        var i = e._PSD;
        --i.ref || i.finalize(), He === 0 && (++He, pt(function() {
          --He == 0 && vn();
        }, []));
      }
      function yn(e, n) {
        if (e._state !== null) {
          var r = e._state ? n.onFulfilled : n.onRejected;
          if (r === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++He, pt(ta, [r, e, n]);
        } else e._listeners.push(n);
      }
      function ta(e, n, r) {
        try {
          var a, i = n._value;
          !n._state && Tt.length && (Tt = []), a = Se && n._consoleTask ? n._consoleTask.run(function() {
            return e(i);
          }) : e(i), n._state || Tt.indexOf(i) !== -1 || function(o) {
            for (var l = ze.length; l; ) if (ze[--l]._value === o._value) return ze.splice(l, 1);
          }(n), r.resolve(a);
        } catch (o) {
          r.reject(o);
        } finally {
          --He == 0 && vn(), --r.psd.ref || r.psd.finalize();
        }
      }
      function na() {
        Ye(Ie, function() {
          nt() && rt();
        });
      }
      function nt() {
        var e = pn;
        return Nt = pn = !1, e;
      }
      function rt() {
        var e, n, r;
        do
          for (; 0 < gt.length; ) for (e = gt, gt = [], r = e.length, n = 0; n < r; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < gt.length);
        Nt = pn = !0;
      }
      function vn() {
        var e = ze;
        ze = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Ct.slice(0), r = n.length; r; ) n[--r]();
      }
      function $t(e) {
        return new M(ft, !1, e);
      }
      function te(e, n) {
        var r = B;
        return function() {
          var a = nt(), i = B;
          try {
            return Ce(r, !0), e.apply(this, arguments);
          } catch (o) {
            n && n(o);
          } finally {
            Ce(i, !1), a && rt();
          }
        };
      }
      he(M.prototype, { then: mn, _then: function(e, n) {
        yn(this, new ar(null, null, e, n, B));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, r = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? r : $t)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? r : $t)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return M.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return M.resolve(e()).then(function() {
            return $t(n);
          });
        });
      }, timeout: function(e, n) {
        var r = this;
        return e < 1 / 0 ? new M(function(a, i) {
          var o = setTimeout(function() {
            return i(new L.Timeout(n));
          }, e);
          r.then(a, i).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ve(M.prototype, Symbol.toStringTag, "Dexie.Promise"), Ie.env = ir(), he(M, { all: function() {
        var e = Pe.apply(null, arguments).map(Bt);
        return new M(function(n, r) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(i, o) {
            return M.resolve(i).then(function(l) {
              e[o] = l, --a || n(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof M ? e : e && typeof e.then == "function" ? new M(function(n, r) {
          e.then(n, r);
        }) : new M(ft, !0, e);
      }, reject: $t, race: function() {
        var e = Pe.apply(null, arguments).map(Bt);
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
        return Kt;
      } }, newPSD: Ne, usePSD: Ye, scheduler: { get: function() {
        return pt;
      }, set: function(e) {
        pt = e;
      } }, rejectionMapper: { get: function() {
        return gn;
      }, set: function(e) {
        gn = e;
      } }, follow: function(e, n) {
        return new M(function(r, a) {
          return Ne(function(i, o) {
            var l = B;
            l.unhandleds = [], l.onunhandled = o, l.finalize = Fe(function() {
              var f, p = this;
              f = function() {
                p.unhandleds.length === 0 ? i() : o(p.unhandleds[0]);
              }, Ct.push(function b() {
                f(), Ct.splice(Ct.indexOf(b), 1);
              }), ++He, pt(function() {
                --He == 0 && vn();
              }, []);
            }, l.finalize), e();
          }, n, r, a);
        });
      } }), Ue && (Ue.allSettled && ve(M, "allSettled", function() {
        var e = Pe.apply(null, arguments).map(Bt);
        return new M(function(n) {
          e.length === 0 && n([]);
          var r = e.length, a = new Array(r);
          e.forEach(function(i, o) {
            return M.resolve(i).then(function(l) {
              return a[o] = { status: "fulfilled", value: l };
            }, function(l) {
              return a[o] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || n(a);
            });
          });
        });
      }), Ue.any && typeof AggregateError < "u" && ve(M, "any", function() {
        var e = Pe.apply(null, arguments).map(Bt);
        return new M(function(n, r) {
          e.length === 0 && r(new AggregateError([]));
          var a = e.length, i = new Array(a);
          e.forEach(function(o, l) {
            return M.resolve(o).then(function(f) {
              return n(f);
            }, function(f) {
              i[l] = f, --a || r(new AggregateError(i));
            });
          });
        });
      }), Ue.withResolvers && (M.withResolvers = Ue.withResolvers));
      var se = { awaits: 0, echoes: 0, id: 0 }, ra = 0, jt = [], Mt = 0, Kt = 0, aa = 0;
      function Ne(e, n, r, a) {
        var i = B, o = Object.create(i);
        return o.parent = i, o.ref = 0, o.global = !1, o.id = ++aa, Ie.env, o.env = hn ? { Promise: M, PromiseProp: { value: M, configurable: !0, writable: !0 }, all: M.all, race: M.race, allSettled: M.allSettled, any: M.any, resolve: M.resolve, reject: M.reject } : {}, n && ne(o, n), ++i.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = Ye(o, e, r, a), o.ref === 0 && o.finalize(), a;
      }
      function at() {
        return se.id || (se.id = ++ra), ++se.awaits, se.echoes += rr, se.id;
      }
      function Te() {
        return !!se.awaits && (--se.awaits == 0 && (se.id = 0), se.echoes = se.awaits * rr, !0);
      }
      function Bt(e) {
        return se.echoes && e && e.constructor === Ue ? (at(), e.then(function(n) {
          return Te(), n;
        }, function(n) {
          return Te(), re(n);
        })) : e;
      }
      function sa() {
        var e = jt[jt.length - 1];
        jt.pop(), Ce(e, !1);
      }
      function Ce(e, n) {
        var r, a = B;
        (n ? !se.echoes || Mt++ && e === B : !Mt || --Mt && e === B) || queueMicrotask(n ? (function(i) {
          ++Kt, se.echoes && --se.echoes != 0 || (se.echoes = se.awaits = se.id = 0), jt.push(B), Ce(i, !0);
        }).bind(null, e) : sa), e !== B && (B = e, a === Ie && (Ie.env = ir()), hn && (r = Ie.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(A, "Promise", n.PromiseProp), r.all = n.all, r.race = n.race, r.resolve = n.resolve, r.reject = n.reject, n.allSettled && (r.allSettled = n.allSettled), n.any && (r.any = n.any))));
      }
      function ir() {
        var e = A.Promise;
        return hn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(A, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Ye(e, n, r, a, i) {
        var o = B;
        try {
          return Ce(e, !0), n(r, a, i);
        } finally {
          Ce(o, !1);
        }
      }
      function or(e, n, r, a) {
        return typeof e != "function" ? e : function() {
          var i = B;
          r && at(), Ce(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ce(i, !1), a && queueMicrotask(Te);
          }
        };
      }
      function wn(e) {
        Promise === Ue && se.echoes === 0 ? Mt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ye).indexOf("[native code]") === -1 && (at = Te = Z);
      var re = M.reject, Qe = "￿", De = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", cr = "String expected.", st = [], Gt = "__dbnames", En = "readonly", Sn = "readwrite";
      function Xe(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var ur = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Lt(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = Ge(n))[e], n;
        };
      }
      function lr() {
        throw L.Type();
      }
      function Y(e, n) {
        try {
          var r = dr(e), a = dr(n);
          if (r !== a) return r === "Array" ? 1 : a === "Array" ? -1 : r === "binary" ? 1 : a === "binary" ? -1 : r === "string" ? 1 : a === "string" ? -1 : r === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(i, o) {
                for (var l = i.length, f = o.length, p = l < f ? l : f, b = 0; b < p; ++b) if (i[b] !== o[b]) return i[b] < o[b] ? -1 : 1;
                return l === f ? 0 : l < f ? -1 : 1;
              }(fr(e), fr(n));
            case "Array":
              return function(i, o) {
                for (var l = i.length, f = o.length, p = l < f ? l : f, b = 0; b < p; ++b) {
                  var E = Y(i[b], o[b]);
                  if (E !== 0) return E;
                }
                return l === f ? 0 : l < f ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function dr(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = cn(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function fr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var hr = (q.prototype._trans = function(e, n, r) {
        var a = this._tx || B.trans, i = this.name, o = Se && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(b, E, h) {
          if (!h.schema[i]) throw new L.NotFound("Table " + i + " not part of transaction");
          return n(h.idbtrans, h);
        }
        var f = nt();
        try {
          var p = a && a.db._novip === this.db._novip ? a === B.trans ? a._promise(e, l, r) : Ne(function() {
            return a._promise(e, l, r);
          }, { trans: a, transless: B.transless || B }) : function b(E, h, O, g) {
            if (E.idbdb && (E._state.openComplete || B.letThrough || E._vip)) {
              var w = E._createTransaction(h, O, E._dbSchema);
              try {
                w.create(), E._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === dn.InvalidState && E.isOpen() && 0 < --E._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), E.close({ disableAutoOpen: !1 }), E.open().then(function() {
                  return b(E, h, O, g);
                })) : re(S);
              }
              return w._promise(h, function(S, v) {
                return Ne(function() {
                  return B.trans = w, g(S, v, w);
                });
              }).then(function(S) {
                if (h === "readwrite") try {
                  w.idbtrans.commit();
                } catch {
                }
                return h === "readonly" ? S : w._completion.then(function() {
                  return S;
                });
              });
            }
            if (E._state.openComplete) return re(new L.DatabaseClosed(E._state.dbOpenError));
            if (!E._state.isBeingOpened) {
              if (!E._state.autoOpen) return re(new L.DatabaseClosed());
              E.open().catch(Z);
            }
            return E._state.dbReadyPromise.then(function() {
              return b(E, h, O, g);
            });
          }(this.db, e, [this.name], l);
          return o && (p._consoleTask = o, p = p.catch(function(b) {
            return console.trace(b), re(b);
          })), p;
        } finally {
          f && rt();
        }
      }, q.prototype.get = function(e, n) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? re(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return r.core.get({ trans: a, key: e }).then(function(i) {
            return r.hook.reading.fire(i);
          });
        }).then(n);
      }, q.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (F(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var n = N(e);
        if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
          if (f.compound && n.every(function(b) {
            return 0 <= f.keyPath.indexOf(b);
          })) {
            for (var p = 0; p < n.length; ++p) if (n.indexOf(f.keyPath[p]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(f, p) {
          return f.keyPath.length - p.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Qe) {
          var o = r.keyPath.slice(0, n.length);
          return this.where(o).equals(o.map(function(p) {
            return e[p];
          }));
        }
        !r && Se && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var a = this.schema.idxByName;
        function i(f, p) {
          return Y(f, p) === 0;
        }
        var l = n.reduce(function(h, p) {
          var b = h[0], E = h[1], h = a[p], O = e[p];
          return [b || h, b || !h ? Xe(E, h && h.multi ? function(g) {
            return g = we(g, p), F(g) && g.some(function(w) {
              return i(O, w);
            });
          } : function(g) {
            return i(O, we(g, p));
          }) : E];
        }, [null, null]), o = l[0], l = l[1];
        return o ? this.where(o.name).equals(e[o.keyPath]).filter(l) : r ? this.filter(l) : this.where(n).equals("");
      }, q.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, q.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, q.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, q.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, q.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, q.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, q.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, q.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, F(e) ? "[".concat(e.join("+"), "]") : e));
      }, q.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, q.prototype.mapToClass = function(e) {
        var n, r = this.db, a = this.name;
        function i() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof lr && (function(p, b) {
          if (typeof b != "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          function E() {
            this.constructor = p;
          }
          s(p, b), p.prototype = b === null ? Object.create(b) : (E.prototype = b.prototype, new E());
        }(i, n = e), Object.defineProperty(i.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
          return a;
        }, e = i);
        for (var o = /* @__PURE__ */ new Set(), l = e.prototype; l; l = oe(l)) Object.getOwnPropertyNames(l).forEach(function(p) {
          return o.add(p);
        });
        function f(p) {
          if (!p) return p;
          var b, E = Object.create(e.prototype);
          for (b in p) if (!o.has(b)) try {
            E[b] = p[b];
          } catch {
          }
          return E;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = f, this.hook("reading", f), e;
      }, q.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          ne(this, e);
        });
      }, q.prototype.add = function(e, n) {
        var r = this, a = this.schema.primKey, i = a.auto, o = a.keyPath, l = e;
        return o && i && (l = Lt(o)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "add", keys: n != null ? [n] : null, values: [l] });
        }).then(function(f) {
          return f.numFailures ? M.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (o) try {
            de(e, o, f);
          } catch {
          }
          return f;
        });
      }, q.prototype.update = function(e, n) {
        return typeof e != "object" || F(e) ? this.where(":id").equals(e).modify(n) : (e = we(e, this.schema.primKey.keyPath), e === void 0 ? re(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, q.prototype.put = function(e, n) {
        var r = this, a = this.schema.primKey, i = a.auto, o = a.keyPath, l = e;
        return o && i && (l = Lt(o)(e)), this._trans("readwrite", function(f) {
          return r.core.mutate({ trans: f, type: "put", values: [l], keys: n != null ? [n] : null });
        }).then(function(f) {
          return f.numFailures ? M.reject(f.failures[0]) : f.lastResult;
        }).then(function(f) {
          if (o) try {
            de(e, o, f);
          } catch {
          }
          return f;
        });
      }, q.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(r) {
          return n.core.mutate({ trans: r, type: "delete", keys: [e] });
        }).then(function(r) {
          return r.numFailures ? M.reject(r.failures[0]) : void 0;
        });
      }, q.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: ur });
        }).then(function(n) {
          return n.numFailures ? M.reject(n.failures[0]) : void 0;
        });
      }, q.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(r) {
          return n.core.getMany({ keys: e, trans: r }).then(function(a) {
            return a.map(function(i) {
              return n.hook.reading.fire(i);
            });
          });
        });
      }, q.prototype.bulkAdd = function(e, n, r) {
        var a = this, i = Array.isArray(n) ? n : void 0, o = (r = r || (i ? void 0 : n)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var b = a.schema.primKey, f = b.auto, b = b.keyPath;
          if (b && i) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, b = b && f ? e.map(Lt(b)) : e;
          return a.core.mutate({ trans: l, type: "add", keys: i, values: b, wantResults: o }).then(function(w) {
            var h = w.numFailures, O = w.results, g = w.lastResult, w = w.failures;
            if (h === 0) return o ? O : g;
            throw new tt("".concat(a.name, ".bulkAdd(): ").concat(h, " of ").concat(p, " operations failed"), w);
          });
        });
      }, q.prototype.bulkPut = function(e, n, r) {
        var a = this, i = Array.isArray(n) ? n : void 0, o = (r = r || (i ? void 0 : n)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var b = a.schema.primKey, f = b.auto, b = b.keyPath;
          if (b && i) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (i && i.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var p = e.length, b = b && f ? e.map(Lt(b)) : e;
          return a.core.mutate({ trans: l, type: "put", keys: i, values: b, wantResults: o }).then(function(w) {
            var h = w.numFailures, O = w.results, g = w.lastResult, w = w.failures;
            if (h === 0) return o ? O : g;
            throw new tt("".concat(a.name, ".bulkPut(): ").concat(h, " of ").concat(p, " operations failed"), w);
          });
        });
      }, q.prototype.bulkUpdate = function(e) {
        var n = this, r = this.core, a = e.map(function(l) {
          return l.key;
        }), i = e.map(function(l) {
          return l.changes;
        }), o = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: a, cache: "clone" }).then(function(f) {
            var p = [], b = [];
            e.forEach(function(h, O) {
              var g = h.key, w = h.changes, S = f[O];
              if (S) {
                for (var v = 0, P = Object.keys(w); v < P.length; v++) {
                  var D = P[v], R = w[D];
                  if (D === n.schema.primKey.keyPath) {
                    if (Y(R, g) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else de(S, D, R);
                }
                o.push(O), p.push(g), b.push(S);
              }
            });
            var E = p.length;
            return r.mutate({ trans: l, type: "put", keys: p, values: b, updates: { keys: a, changeSpecs: i } }).then(function(h) {
              var O = h.numFailures, g = h.failures;
              if (O === 0) return E;
              for (var w = 0, S = Object.keys(g); w < S.length; w++) {
                var v, P = S[w], D = o[Number(P)];
                D != null && (v = g[P], delete g[P], g[D] = v);
              }
              throw new tt("".concat(n.name, ".bulkUpdate(): ").concat(O, " of ").concat(E, " operations failed"), g);
            });
          });
        });
      }, q.prototype.bulkDelete = function(e) {
        var n = this, r = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(l) {
          var i = l.numFailures, o = l.lastResult, l = l.failures;
          if (i === 0) return o;
          throw new tt("".concat(n.name, ".bulkDelete(): ").concat(i, " of ").concat(r, " operations failed"), l);
        });
      }, q);
      function q() {
      }
      function mt(e) {
        function n(l, f) {
          if (f) {
            for (var p = arguments.length, b = new Array(p - 1); --p; ) b[p - 1] = arguments[p];
            return r[l].subscribe.apply(null, b), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        n.addEventType = o;
        for (var a = 1, i = arguments.length; a < i; ++a) o(arguments[a]);
        return n;
        function o(l, f, p) {
          if (typeof l != "object") {
            var b;
            f = f || ea;
            var E = { subscribers: [], fire: p = p || Z, subscribe: function(h) {
              E.subscribers.indexOf(h) === -1 && (E.subscribers.push(h), E.fire = f(E.fire, h));
            }, unsubscribe: function(h) {
              E.subscribers = E.subscribers.filter(function(O) {
                return O !== h;
              }), E.fire = E.subscribers.reduce(f, p);
            } };
            return r[l] = n[l] = E;
          }
          N(b = l).forEach(function(h) {
            var O = b[h];
            if (F(O)) o(h, b[h][0], b[h][1]);
            else {
              if (O !== "asap") throw new L.InvalidArgument("Invalid event config");
              var g = o(h, dt, function() {
                for (var w = arguments.length, S = new Array(w); w--; ) S[w] = arguments[w];
                g.subscribers.forEach(function(v) {
                  Rt(function() {
                    v.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function bt(e, n) {
        return Ae(n).from({ prototype: e }), n;
      }
      function it(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function On(e, n) {
        e.filter = Xe(e.filter, n);
      }
      function _n(e, n, r) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return Xe(a(), n());
        } : n, e.justLimit = r && !a;
      }
      function Ft(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var r = n.getIndexByKeyPath(e.index);
        if (!r) throw new L.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return r;
      }
      function pr(e, n, r) {
        var a = Ft(e, n.schema);
        return n.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Wt(e, n, r, a) {
        var i = e.replayFilter ? Xe(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, l = function(f, p, b) {
            var E, h;
            i && !i(p, b, function(O) {
              return p.stop(O);
            }, function(O) {
              return p.fail(O);
            }) || ((h = "" + (E = p.primaryKey)) == "[object ArrayBuffer]" && (h = "" + new Uint8Array(E)), J(o, h) || (o[h] = !0, n(f, p, b)));
          };
          return Promise.all([e.or._iterate(l, r), gr(pr(e, a, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return gr(pr(e, a, r), Xe(e.algorithm, i), n, !e.keysOnly && e.valueMapper);
      }
      function gr(e, n, r, a) {
        var i = te(a ? function(o, l, f) {
          return r(a(o), l, f);
        } : r);
        return e.then(function(o) {
          if (o) return o.start(function() {
            var l = function() {
              return o.continue();
            };
            n && !n(o, function(f) {
              return l = f;
            }, function(f) {
              o.stop(f), l = Z;
            }, function(f) {
              o.fail(f), l = Z;
            }) || i(o.value, o, function(f) {
              return l = f;
            }), l();
          });
        });
      }
      var yt = (mr.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var r = n.add;
          if (F(r)) return m(m([], F(e) ? e : [], !0), r).sort();
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
          if (F(a)) return F(e) ? e.filter(function(i) {
            return !a.includes(i);
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
      }, mr);
      function mr(e) {
        this["@@propmod"] = e;
      }
      var ia = (Q.prototype._read = function(e, n) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, re.bind(null, r.error)) : r.table._trans("readonly", e).then(n);
      }, Q.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, re.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Q.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = Xe(n.algorithm, e);
      }, Q.prototype._iterate = function(e, n) {
        return Wt(this._ctx, e, n, this._ctx.table.core);
      }, Q.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && ne(r, e), n._ctx = r, n;
      }, Q.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Q.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(r) {
          return Wt(n, e, r, n.table.core);
        });
      }, Q.prototype.count = function(e) {
        var n = this;
        return this._read(function(r) {
          var a = n._ctx, i = a.table.core;
          if (it(a, !0)) return i.count({ trans: r, query: { index: Ft(a, i.schema), range: a.range } }).then(function(l) {
            return Math.min(l, a.limit);
          });
          var o = 0;
          return Wt(a, function() {
            return ++o, !1;
          }, r, i).then(function() {
            return o;
          });
        }).then(e);
      }, Q.prototype.sortBy = function(e, n) {
        var r = e.split(".").reverse(), a = r[0], i = r.length - 1;
        function o(p, b) {
          return b ? o(p[r[b]], b - 1) : p[a];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function f(p, b) {
          return Y(o(p, i), o(b, i)) * l;
        }
        return this.toArray(function(p) {
          return p.sort(f);
        }).then(n);
      }, Q.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(r) {
          var a = n._ctx;
          if (a.dir === "next" && it(a, !0) && 0 < a.limit) {
            var i = a.valueMapper, o = Ft(a, a.table.core.schema);
            return a.table.core.query({ trans: r, limit: a.limit, values: !0, query: { index: o, range: a.range } }).then(function(f) {
              return f = f.result, i ? f.map(i) : f;
            });
          }
          var l = [];
          return Wt(a, function(f) {
            return l.push(f);
          }, r, a.table.core).then(function() {
            return l;
          });
        }, e);
      }, Q.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, it(n) ? _n(n, function() {
          var r = e;
          return function(a, i) {
            return r === 0 || (r === 1 ? --r : i(function() {
              a.advance(r), r = 0;
            }), !1);
          };
        }) : _n(n, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, Q.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), _n(this._ctx, function() {
          var n = e;
          return function(r, a, i) {
            return --n <= 0 && a(i), 0 <= n;
          };
        }, !0), this;
      }, Q.prototype.until = function(e, n) {
        return On(this._ctx, function(r, a, i) {
          return !e(r.value) || (a(i), n);
        }), this;
      }, Q.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, Q.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Q.prototype.filter = function(e) {
        var n;
        return On(this._ctx, function(r) {
          return e(r.value);
        }), (n = this._ctx).isMatch = Xe(n.isMatch, e), this;
      }, Q.prototype.and = function(e) {
        return this.filter(e);
      }, Q.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Q.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Q.prototype.desc = function() {
        return this.reverse();
      }, Q.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(r, a) {
          e(a.key, a);
        });
      }, Q.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Q.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(r, a) {
          e(a.primaryKey, a);
        });
      }, Q.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(a, i) {
          r.push(i.key);
        }).then(function() {
          return r;
        }).then(e);
      }, Q.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && it(n, !0) && 0 < n.limit) return this._read(function(a) {
          var i = Ft(n, n.table.core.schema);
          return n.table.core.query({ trans: a, values: !1, limit: n.limit, query: { index: i, range: n.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(a, i) {
          r.push(i.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, Q.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Q.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, Q.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Q.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return On(this._ctx, function(i) {
          var a = i.primaryKey.toString(), i = J(n, a);
          return n[a] = !0, !i;
        }), this;
      }, Q.prototype.modify = function(e) {
        var n = this, r = this._ctx;
        return this._write(function(a) {
          var i, o, l;
          l = typeof e == "function" ? e : (i = N(e), o = i.length, function(v) {
            for (var P = !1, D = 0; D < o; ++D) {
              var R = i[D], x = e[R], k = we(v, R);
              x instanceof yt ? (de(v, R, x.execute(k)), P = !0) : k !== x && (de(v, R, x), P = !0);
            }
            return P;
          });
          var f = r.table.core, h = f.schema.primaryKey, p = h.outbound, b = h.extractKey, E = 200, h = n.db._options.modifyChunkSize;
          h && (E = typeof h == "object" ? h[f.name] || h["*"] || 200 : h);
          function O(v, R) {
            var D = R.failures, R = R.numFailures;
            w += v - R;
            for (var x = 0, k = N(D); x < k.length; x++) {
              var $ = k[x];
              g.push(D[$]);
            }
          }
          var g = [], w = 0, S = [];
          return n.clone().primaryKeys().then(function(v) {
            function P(R) {
              var x = Math.min(E, v.length - R);
              return f.getMany({ trans: a, keys: v.slice(R, R + x), cache: "immutable" }).then(function(k) {
                for (var $ = [], I = [], T = p ? [] : null, j = [], C = 0; C < x; ++C) {
                  var K = k[C], U = { value: Ge(K), primKey: v[R + C] };
                  l.call(U, U.value, U) !== !1 && (U.value == null ? j.push(v[R + C]) : p || Y(b(K), b(U.value)) === 0 ? (I.push(U.value), p && T.push(v[R + C])) : (j.push(v[R + C]), $.push(U.value)));
                }
                return Promise.resolve(0 < $.length && f.mutate({ trans: a, type: "add", values: $ }).then(function(z) {
                  for (var H in z.failures) j.splice(parseInt(H), 1);
                  O($.length, z);
                })).then(function() {
                  return (0 < I.length || D && typeof e == "object") && f.mutate({ trans: a, type: "put", keys: T, values: I, criteria: D, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < R }).then(function(z) {
                    return O(I.length, z);
                  });
                }).then(function() {
                  return (0 < j.length || D && e === An) && f.mutate({ trans: a, type: "delete", keys: j, criteria: D, isAdditionalChunk: 0 < R }).then(function(z) {
                    return O(j.length, z);
                  });
                }).then(function() {
                  return v.length > R + x && P(R + E);
                });
              });
            }
            var D = it(r) && r.limit === 1 / 0 && (typeof e != "function" || e === An) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < g.length) throw new kt("Error modifying one or more objects", g, w, S);
              return v.length;
            });
          });
        });
      }, Q.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return it(e) && (e.isPrimKey || n.type === 3) ? this._write(function(r) {
          var a = e.table.core.schema.primaryKey, i = n;
          return e.table.core.count({ trans: r, query: { index: a, range: i } }).then(function(o) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: i }).then(function(l) {
              var f = l.failures;
              if (l.lastResult, l.results, l = l.numFailures, l) throw new kt("Could not delete some values", Object.keys(f).map(function(p) {
                return f[p];
              }), o - l);
              return o - l;
            });
          });
        }) : this.modify(An);
      }, Q);
      function Q() {
      }
      var An = function(e, n) {
        return n.value = null;
      };
      function oa(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function ca(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function me(e, n, r) {
        return e = e instanceof yr ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(n), e;
      }
      function ot(e) {
        return new e.Collection(e, function() {
          return br("");
        }).limit(0);
      }
      function Ut(e, n, r, a) {
        var i, o, l, f, p, b, E, h = r.length;
        if (!r.every(function(w) {
          return typeof w == "string";
        })) return me(e, cr);
        function O(w) {
          i = w === "next" ? function(v) {
            return v.toUpperCase();
          } : function(v) {
            return v.toLowerCase();
          }, o = w === "next" ? function(v) {
            return v.toLowerCase();
          } : function(v) {
            return v.toUpperCase();
          }, l = w === "next" ? oa : ca;
          var S = r.map(function(v) {
            return { lower: o(v), upper: i(v) };
          }).sort(function(v, P) {
            return l(v.lower, P.lower);
          });
          f = S.map(function(v) {
            return v.upper;
          }), p = S.map(function(v) {
            return v.lower;
          }), E = (b = w) === "next" ? "" : a;
        }
        O("next"), e = new e.Collection(e, function() {
          return $e(f[0], p[h - 1] + a);
        }), e._ondirectionchange = function(w) {
          O(w);
        };
        var g = 0;
        return e._addAlgorithm(function(w, S, v) {
          var P = w.key;
          if (typeof P != "string") return !1;
          var D = o(P);
          if (n(D, p, g)) return !0;
          for (var R = null, x = g; x < h; ++x) {
            var k = function($, I, T, j, C, K) {
              for (var U = Math.min($.length, j.length), z = -1, H = 0; H < U; ++H) {
                var be = I[H];
                if (be !== j[H]) return C($[H], T[H]) < 0 ? $.substr(0, H) + T[H] + T.substr(H + 1) : C($[H], j[H]) < 0 ? $.substr(0, H) + j[H] + T.substr(H + 1) : 0 <= z ? $.substr(0, z) + I[z] + T.substr(z + 1) : null;
                C($[H], be) < 0 && (z = H);
              }
              return U < j.length && K === "next" ? $ + T.substr($.length) : U < $.length && K === "prev" ? $.substr(0, T.length) : z < 0 ? null : $.substr(0, z) + j[z] + T.substr(z + 1);
            }(P, D, f[x], p[x], l, b);
            k === null && R === null ? g = x + 1 : (R === null || 0 < l(R, k)) && (R = k);
          }
          return S(R !== null ? function() {
            w.continue(R + E);
          } : v), !1;
        }), e;
      }
      function $e(e, n, r, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: r, upperOpen: a };
      }
      function br(e) {
        return { type: 1, lower: e, upper: e };
      }
      var yr = (Object.defineProperty(ie.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ie.prototype.between = function(e, n, r, a) {
        r = r !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (r || a) && (!r || !a) ? ot(this) : new this.Collection(this, function() {
            return $e(e, n, !r, !a);
          });
        } catch {
          return me(this, De);
        }
      }, ie.prototype.equals = function(e) {
        return e == null ? me(this, De) : new this.Collection(this, function() {
          return br(e);
        });
      }, ie.prototype.above = function(e) {
        return e == null ? me(this, De) : new this.Collection(this, function() {
          return $e(e, void 0, !0);
        });
      }, ie.prototype.aboveOrEqual = function(e) {
        return e == null ? me(this, De) : new this.Collection(this, function() {
          return $e(e, void 0, !1);
        });
      }, ie.prototype.below = function(e) {
        return e == null ? me(this, De) : new this.Collection(this, function() {
          return $e(void 0, e, !1, !0);
        });
      }, ie.prototype.belowOrEqual = function(e) {
        return e == null ? me(this, De) : new this.Collection(this, function() {
          return $e(void 0, e);
        });
      }, ie.prototype.startsWith = function(e) {
        return typeof e != "string" ? me(this, cr) : this.between(e, e + Qe, !0, !0);
      }, ie.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Ut(this, function(n, r) {
          return n.indexOf(r[0]) === 0;
        }, [e], Qe);
      }, ie.prototype.equalsIgnoreCase = function(e) {
        return Ut(this, function(n, r) {
          return n === r[0];
        }, [e], "");
      }, ie.prototype.anyOfIgnoreCase = function() {
        var e = Pe.apply(qe, arguments);
        return e.length === 0 ? ot(this) : Ut(this, function(n, r) {
          return r.indexOf(n) !== -1;
        }, e, "");
      }, ie.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Pe.apply(qe, arguments);
        return e.length === 0 ? ot(this) : Ut(this, function(n, r) {
          return r.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, Qe);
      }, ie.prototype.anyOf = function() {
        var e = this, n = Pe.apply(qe, arguments), r = this._cmp;
        try {
          n.sort(r);
        } catch {
          return me(this, De);
        }
        if (n.length === 0) return ot(this);
        var a = new this.Collection(this, function() {
          return $e(n[0], n[n.length - 1]);
        });
        a._ondirectionchange = function(o) {
          r = o === "next" ? e._ascending : e._descending, n.sort(r);
        };
        var i = 0;
        return a._addAlgorithm(function(o, l, f) {
          for (var p = o.key; 0 < r(p, n[i]); ) if (++i === n.length) return l(f), !1;
          return r(p, n[i]) === 0 || (l(function() {
            o.continue(n[i]);
          }), !1);
        }), a;
      }, ie.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ie.prototype.noneOf = function() {
        var e = Pe.apply(qe, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return me(this, De);
        }
        var n = e.reduce(function(r, a) {
          return r ? r.concat([[r[r.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, ie.prototype.inAnyRange = function(P, n) {
        var r = this, a = this._cmp, i = this._ascending, o = this._descending, l = this._min, f = this._max;
        if (P.length === 0) return ot(this);
        if (!P.every(function(D) {
          return D[0] !== void 0 && D[1] !== void 0 && i(D[0], D[1]) <= 0;
        })) return me(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", L.InvalidArgument);
        var p = !n || n.includeLowers !== !1, b = n && n.includeUppers === !0, E, h = i;
        function O(D, R) {
          return h(D[0], R[0]);
        }
        try {
          (E = P.reduce(function(D, R) {
            for (var x = 0, k = D.length; x < k; ++x) {
              var $ = D[x];
              if (a(R[0], $[1]) < 0 && 0 < a(R[1], $[0])) {
                $[0] = l($[0], R[0]), $[1] = f($[1], R[1]);
                break;
              }
            }
            return x === k && D.push(R), D;
          }, [])).sort(O);
        } catch {
          return me(this, De);
        }
        var g = 0, w = b ? function(D) {
          return 0 < i(D, E[g][1]);
        } : function(D) {
          return 0 <= i(D, E[g][1]);
        }, S = p ? function(D) {
          return 0 < o(D, E[g][0]);
        } : function(D) {
          return 0 <= o(D, E[g][0]);
        }, v = w, P = new this.Collection(this, function() {
          return $e(E[0][0], E[E.length - 1][1], !p, !b);
        });
        return P._ondirectionchange = function(D) {
          h = D === "next" ? (v = w, i) : (v = S, o), E.sort(O);
        }, P._addAlgorithm(function(D, R, x) {
          for (var k, $ = D.key; v($); ) if (++g === E.length) return R(x), !1;
          return !w(k = $) && !S(k) || (r._cmp($, E[g][1]) === 0 || r._cmp($, E[g][0]) === 0 || R(function() {
            h === i ? D.continue(E[g][0]) : D.continue(E[g][1]);
          }), !1);
        }), P;
      }, ie.prototype.startsWithAnyOf = function() {
        var e = Pe.apply(qe, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? ot(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + Qe];
        })) : me(this, "startsWithAnyOf() only works with strings");
      }, ie);
      function ie() {
      }
      function Oe(e) {
        return te(function(n) {
          return vt(n), e(n.target.error), !1;
        });
      }
      function vt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var wt = "storagemutated", Pn = "x-storagemutated-1", je = mt(null, wt), ua = (_e.prototype._lock = function() {
        return ge(!B.global), ++this._reculock, this._reculock !== 1 || B.global || (B.lockOwnerFor = this), this;
      }, _e.prototype._unlock = function() {
        if (ge(!B.global), --this._reculock == 0) for (B.global || (B.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ye(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, _e.prototype._locked = function() {
        return this._reculock && B.lockOwnerFor !== this;
      }, _e.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ge(!this.idbtrans), !e && !r) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new L.DatabaseClosed(a);
          case "MissingAPIError":
            throw new L.MissingAPI(a.message, a);
          default:
            throw new L.OpenFailed(a);
        }
        if (!this.active) throw new L.TransactionInactive();
        return ge(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = te(function(i) {
          vt(i), n._reject(e.error);
        }), e.onabort = te(function(i) {
          vt(i), n.active && n._reject(new L.Abort(e.error)), n.active = !1, n.on("abort").fire(i);
        }), e.oncomplete = te(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && je.storagemutated.fire(e.mutatedParts);
        }), this;
      }, _e.prototype._promise = function(e, n, r) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return re(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return re(new L.TransactionInactive());
        if (this._locked()) return new M(function(o, l) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, r).then(o, l);
          }, B]);
        });
        if (r) return Ne(function() {
          var o = new M(function(l, f) {
            a._lock();
            var p = n(l, f, a);
            p && p.then && p.then(l, f);
          });
          return o.finally(function() {
            return a._unlock();
          }), o._lib = !0, o;
        });
        var i = new M(function(o, l) {
          var f = n(o, l, a);
          f && f.then && f.then(o, l);
        });
        return i._lib = !0, i;
      }, _e.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, _e.prototype.waitFor = function(e) {
        var n, r = this._root(), a = M.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return a;
        }) : (r._waitingFor = a, r._waitingQueue = [], n = r.idbtrans.objectStore(r.storeNames[0]), function o() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (n.get(-1 / 0).onsuccess = o);
        }());
        var i = r._waitingFor;
        return new M(function(o, l) {
          a.then(function(f) {
            return r._waitingQueue.push(te(o.bind(null, f)));
          }, function(f) {
            return r._waitingQueue.push(te(l.bind(null, f)));
          }).finally(function() {
            r._waitingFor === i && (r._waitingFor = null);
          });
        });
      }, _e.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new L.Abort()));
      }, _e.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (J(n, e)) return n[e];
        var r = this.schema[e];
        if (!r) throw new L.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), n[e] = r;
      }, _e);
      function _e() {
      }
      function Dn(e, n, r, a, i, o, l) {
        return { name: e, keyPath: n, unique: r, multi: a, auto: i, compound: o, src: (r && !l ? "&" : "") + (a ? "*" : "") + (i ? "++" : "") + vr(n) };
      }
      function vr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Rn(e, n, r) {
        return { name: e, primKey: n, indexes: r, mappedClass: null, idxByName: (a = function(i) {
          return [i.name, i];
        }, r.reduce(function(i, o, l) {
          return l = a(o, l), l && (i[l[0]] = l[1]), i;
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
            return Qe;
          }, Qe;
        }
      };
      function xn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(r) {
          return r[n];
        } : function(r) {
          return we(r, n);
        } : function(r) {
          return we(r, e);
        };
        var n;
      }
      function wr(e) {
        return [].slice.call(e);
      }
      var la = 0;
      function St(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function da(e, n, p) {
        function a(v) {
          if (v.type === 3) return null;
          if (v.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var g = v.lower, w = v.upper, S = v.lowerOpen, v = v.upperOpen;
          return g === void 0 ? w === void 0 ? null : n.upperBound(w, !!v) : w === void 0 ? n.lowerBound(g, !!S) : n.bound(g, w, !!S, !!v);
        }
        function i(O) {
          var g, w = O.name;
          return { name: w, schema: O, mutate: function(S) {
            var v = S.trans, P = S.type, D = S.keys, R = S.values, x = S.range;
            return new Promise(function(k, $) {
              k = te(k);
              var I = v.objectStore(w), T = I.keyPath == null, j = P === "put" || P === "add";
              if (!j && P !== "delete" && P !== "deleteRange") throw new Error("Invalid operation type: " + P);
              var C, K = (D || R || { length: 1 }).length;
              if (D && R && D.length !== R.length) throw new Error("Given keys array must have same length as given values array.");
              if (K === 0) return k({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function U(fe) {
                ++be, vt(fe);
              }
              var z = [], H = [], be = 0;
              if (P === "deleteRange") {
                if (x.type === 4) return k({ numFailures: be, failures: H, results: [], lastResult: void 0 });
                x.type === 3 ? z.push(C = I.clear()) : z.push(C = I.delete(a(x)));
              } else {
                var T = j ? T ? [R, D] : [R, null] : [D, null], W = T[0], ue = T[1];
                if (j) for (var le = 0; le < K; ++le) z.push(C = ue && ue[le] !== void 0 ? I[P](W[le], ue[le]) : I[P](W[le])), C.onerror = U;
                else for (le = 0; le < K; ++le) z.push(C = I[P](W[le])), C.onerror = U;
              }
              function rn(fe) {
                fe = fe.target.result, z.forEach(function(Ve, Yn) {
                  return Ve.error != null && (H[Yn] = Ve.error);
                }), k({ numFailures: be, failures: H, results: P === "delete" ? D : z.map(function(Ve) {
                  return Ve.result;
                }), lastResult: fe });
              }
              C.onerror = function(fe) {
                U(fe), rn(fe);
              }, C.onsuccess = rn;
            });
          }, getMany: function(S) {
            var v = S.trans, P = S.keys;
            return new Promise(function(D, R) {
              D = te(D);
              for (var x, k = v.objectStore(w), $ = P.length, I = new Array($), T = 0, j = 0, C = function(z) {
                z = z.target, I[z._pos] = z.result, ++j === T && D(I);
              }, K = Oe(R), U = 0; U < $; ++U) P[U] != null && ((x = k.get(P[U]))._pos = U, x.onsuccess = C, x.onerror = K, ++T);
              T === 0 && D(I);
            });
          }, get: function(S) {
            var v = S.trans, P = S.key;
            return new Promise(function(D, R) {
              D = te(D);
              var x = v.objectStore(w).get(P);
              x.onsuccess = function(k) {
                return D(k.target.result);
              }, x.onerror = Oe(R);
            });
          }, query: (g = b, function(S) {
            return new Promise(function(v, P) {
              v = te(v);
              var D, R, x, T = S.trans, k = S.values, $ = S.limit, C = S.query, I = $ === 1 / 0 ? void 0 : $, j = C.index, C = C.range, T = T.objectStore(w), j = j.isPrimaryKey ? T : T.index(j.name), C = a(C);
              if ($ === 0) return v({ result: [] });
              g ? ((I = k ? j.getAll(C, I) : j.getAllKeys(C, I)).onsuccess = function(K) {
                return v({ result: K.target.result });
              }, I.onerror = Oe(P)) : (D = 0, R = !k && "openKeyCursor" in j ? j.openKeyCursor(C) : j.openCursor(C), x = [], R.onsuccess = function(K) {
                var U = R.result;
                return U ? (x.push(k ? U.value : U.primaryKey), ++D === $ ? v({ result: x }) : void U.continue()) : v({ result: x });
              }, R.onerror = Oe(P));
            });
          }), openCursor: function(S) {
            var v = S.trans, P = S.values, D = S.query, R = S.reverse, x = S.unique;
            return new Promise(function(k, $) {
              k = te(k);
              var j = D.index, I = D.range, T = v.objectStore(w), T = j.isPrimaryKey ? T : T.index(j.name), j = R ? x ? "prevunique" : "prev" : x ? "nextunique" : "next", C = !P && "openKeyCursor" in T ? T.openKeyCursor(a(I), j) : T.openCursor(a(I), j);
              C.onerror = Oe($), C.onsuccess = te(function(K) {
                var U, z, H, be, W = C.result;
                W ? (W.___id = ++la, W.done = !1, U = W.continue.bind(W), z = (z = W.continuePrimaryKey) && z.bind(W), H = W.advance.bind(W), be = function() {
                  throw new Error("Cursor not stopped");
                }, W.trans = v, W.stop = W.continue = W.continuePrimaryKey = W.advance = function() {
                  throw new Error("Cursor not started");
                }, W.fail = te($), W.next = function() {
                  var ue = this, le = 1;
                  return this.start(function() {
                    return le-- ? ue.continue() : ue.stop();
                  }).then(function() {
                    return ue;
                  });
                }, W.start = function(ue) {
                  function le() {
                    if (C.result) try {
                      ue();
                    } catch (fe) {
                      W.fail(fe);
                    }
                    else W.done = !0, W.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, W.stop();
                  }
                  var rn = new Promise(function(fe, Ve) {
                    fe = te(fe), C.onerror = Oe(Ve), W.fail = Ve, W.stop = function(Yn) {
                      W.stop = W.continue = W.continuePrimaryKey = W.advance = be, fe(Yn);
                    };
                  });
                  return C.onsuccess = te(function(fe) {
                    C.onsuccess = le, le();
                  }), W.continue = U, W.continuePrimaryKey = z, W.advance = H, le(), rn;
                }, k(W)) : k(null);
              }, $);
            });
          }, count: function(S) {
            var v = S.query, P = S.trans, D = v.index, R = v.range;
            return new Promise(function(x, k) {
              var $ = P.objectStore(w), I = D.isPrimaryKey ? $ : $.index(D.name), $ = a(R), I = $ ? I.count($) : I.count();
              I.onsuccess = te(function(T) {
                return x(T.target.result);
              }), I.onerror = Oe(k);
            });
          } };
        }
        var o, l, f, E = (l = p, f = wr((o = e).objectStoreNames), { schema: { name: o.name, tables: f.map(function(O) {
          return l.objectStore(O);
        }).map(function(O) {
          var g = O.keyPath, v = O.autoIncrement, w = F(g), S = {}, v = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: g == null, compound: w, keyPath: g, autoIncrement: v, unique: !0, extractKey: xn(g) }, indexes: wr(O.indexNames).map(function(P) {
            return O.index(P);
          }).map(function(x) {
            var D = x.name, R = x.unique, k = x.multiEntry, x = x.keyPath, k = { name: D, compound: F(x), keyPath: x, unique: R, multiEntry: k, extractKey: xn(x) };
            return S[St(x)] = k;
          }), getIndexByKeyPath: function(P) {
            return S[St(P)];
          } };
          return S[":id"] = v.primaryKey, g != null && (S[St(g)] = v.primaryKey), v;
        }) }, hasGetAll: 0 < f.length && "getAll" in l.objectStore(f[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), p = E.schema, b = E.hasGetAll, E = p.tables.map(i), h = {};
        return E.forEach(function(O) {
          return h[O.name] = O;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(O) {
          if (!h[O]) throw new Error("Table '".concat(O, "' not found"));
          return h[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: Et(n), schema: p };
      }
      function fa(e, n, r, a) {
        var i = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (a = da(n, i, a), e.dbcore.reduce(function(o, l) {
          return l = l.create, u(u({}, o), l(o));
        }, a)) };
      }
      function zt(e, a) {
        var r = a.db, a = fa(e._middlewares, r, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(i) {
          var o = i.name;
          e.core.schema.tables.some(function(l) {
            return l.name === o;
          }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
        });
      }
      function Ht(e, n, r, a) {
        r.forEach(function(i) {
          var o = a[i];
          n.forEach(function(l) {
            var f = function p(b, E) {
              return Pt(b, E) || (b = oe(b)) && p(b, E);
            }(l, i);
            (!f || "value" in f && f.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? ve(l, i, { get: function() {
              return this.table(i);
            }, set: function(p) {
              pe(this, i, { value: p, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[i] = new e.Table(i, o));
          });
        });
      }
      function kn(e, n) {
        n.forEach(function(r) {
          for (var a in r) r[a] instanceof e.Table && delete r[a];
        });
      }
      function ha(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function pa(e, n, r, a) {
        var i = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = Rn("$meta", Sr("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, i);
        o.create(r), o._completion.catch(a);
        var l = o._reject.bind(o), f = B.transless || B;
        Ne(function() {
          return B.trans = o, B.transless = f, n !== 0 ? (zt(e, r), b = n, ((p = o).storeNames.includes("$meta") ? p.table("$meta").get("version").then(function(E) {
            return E ?? b;
          }) : M.resolve(b)).then(function(E) {
            return O = E, g = o, w = r, S = [], E = (h = e)._versions, v = h._dbSchema = Qt(0, h.idbdb, w), (E = E.filter(function(P) {
              return P._cfg.version >= O;
            })).length !== 0 ? (E.forEach(function(P) {
              S.push(function() {
                var D = v, R = P._cfg.dbschema;
                Xt(h, D, w), Xt(h, R, w), v = h._dbSchema = R;
                var x = In(D, R);
                x.add.forEach(function(j) {
                  Nn(w, j[0], j[1].primKey, j[1].indexes);
                }), x.change.forEach(function(j) {
                  if (j.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var C = w.objectStore(j.name);
                  j.add.forEach(function(K) {
                    return Yt(C, K);
                  }), j.change.forEach(function(K) {
                    C.deleteIndex(K.name), Yt(C, K);
                  }), j.del.forEach(function(K) {
                    return C.deleteIndex(K);
                  });
                });
                var k = P._cfg.contentUpgrade;
                if (k && P._cfg.version > O) {
                  zt(h, w), g._memoizedTables = {};
                  var $ = xt(R);
                  x.del.forEach(function(j) {
                    $[j] = D[j];
                  }), kn(h, [h.Transaction.prototype]), Ht(h, [h.Transaction.prototype], N($), $), g.schema = $;
                  var I, T = ln(k);
                  return T && at(), x = M.follow(function() {
                    var j;
                    (I = k(g)) && T && (j = Te.bind(null, null), I.then(j, j));
                  }), I && typeof I.then == "function" ? M.resolve(I) : x.then(function() {
                    return I;
                  });
                }
              }), S.push(function(D) {
                var R, x, k = P._cfg.dbschema;
                R = k, x = D, [].slice.call(x.db.objectStoreNames).forEach(function($) {
                  return R[$] == null && x.db.deleteObjectStore($);
                }), kn(h, [h.Transaction.prototype]), Ht(h, [h.Transaction.prototype], h._storeNames, h._dbSchema), g.schema = h._dbSchema;
              }), S.push(function(D) {
                h.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(h.idbdb.version / 10) === P._cfg.version ? (h.idbdb.deleteObjectStore("$meta"), delete h._dbSchema.$meta, h._storeNames = h._storeNames.filter(function(R) {
                  return R !== "$meta";
                })) : D.objectStore("$meta").put(P._cfg.version, "version"));
              });
            }), function P() {
              return S.length ? M.resolve(S.shift()(g.idbtrans)).then(P) : M.resolve();
            }().then(function() {
              Er(v, w);
            })) : M.resolve();
            var h, O, g, w, S, v;
          }).catch(l)) : (N(i).forEach(function(E) {
            Nn(r, E, i[E].primKey, i[E].indexes);
          }), zt(e, r), void M.follow(function() {
            return e.on.populate.fire(o);
          }).catch(l));
          var p, b;
        });
      }
      function ga(e, n) {
        Er(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var r = Qt(0, e.idbdb, n);
        Xt(e, e._dbSchema, n);
        for (var a = 0, i = In(r, e._dbSchema).change; a < i.length; a++) {
          var o = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var f = n.objectStore(l.name);
            l.add.forEach(function(p) {
              Se && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(p.src)), Yt(f, p);
            });
          }(i[a]);
          if (typeof o == "object") return o.value;
        }
      }
      function In(e, n) {
        var r, a = { del: [], add: [], change: [] };
        for (r in e) n[r] || a.del.push(r);
        for (r in n) {
          var i = e[r], o = n[r];
          if (i) {
            var l = { name: r, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) l.recreate = !0, a.change.push(l);
            else {
              var f = i.idxByName, p = o.idxByName, b = void 0;
              for (b in f) p[b] || l.del.push(b);
              for (b in p) {
                var E = f[b], h = p[b];
                E ? E.src !== h.src && l.change.push(h) : l.add.push(h);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && a.change.push(l);
            }
          } else a.add.push([r, o]);
        }
        return a;
      }
      function Nn(e, n, r, a) {
        var i = e.db.createObjectStore(n, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return a.forEach(function(o) {
          return Yt(i, o);
        }), i;
      }
      function Er(e, n) {
        N(e).forEach(function(r) {
          n.db.objectStoreNames.contains(r) || (Se && console.debug("Dexie: Creating missing table", r), Nn(n, r, e[r].primKey, e[r].indexes));
        });
      }
      function Yt(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function Qt(e, n, r) {
        var a = {};
        return Be(n.objectStoreNames, 0).forEach(function(i) {
          for (var o = r.objectStore(i), l = Dn(vr(b = o.keyPath), b || "", !0, !1, !!o.autoIncrement, b && typeof b != "string", !0), f = [], p = 0; p < o.indexNames.length; ++p) {
            var E = o.index(o.indexNames[p]), b = E.keyPath, E = Dn(E.name, b, !!E.unique, !!E.multiEntry, !1, b && typeof b != "string", !1);
            f.push(E);
          }
          a[i] = Rn(i, l, f);
        }), a;
      }
      function Xt(e, n, r) {
        for (var a = r.db.objectStoreNames, i = 0; i < a.length; ++i) {
          var o = a[i], l = r.objectStore(o);
          e._hasGetAll = "getAll" in l;
          for (var f = 0; f < l.indexNames.length; ++f) {
            var p = l.indexNames[f], b = l.index(p).keyPath, E = typeof b == "string" ? b : "[" + Be(b).join("+") + "]";
            !n[o] || (b = n[o].idxByName[E]) && (b.name = p, delete n[o].idxByName[E], n[o].idxByName[p] = b);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && A.WorkerGlobalScope && A instanceof A.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Sr(e) {
        return e.split(",").map(function(n, r) {
          var a = (n = n.trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return Dn(a, i || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), F(i), r === 0);
        });
      }
      var ma = (Jt.prototype._parseStoresSpec = function(e, n) {
        N(e).forEach(function(r) {
          if (e[r] !== null) {
            var a = Sr(e[r]), i = a.shift();
            if (i.unique = !0, i.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(o) {
              if (o.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!o.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), n[r] = Rn(r, i, a);
          }
        });
      }, Jt.prototype.stores = function(r) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? ne(this._cfg.storesSource, r) : r;
        var r = n._versions, a = {}, i = {};
        return r.forEach(function(o) {
          ne(a, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(a, i);
        }), n._dbSchema = i, kn(n, [n._allTables, n, n.Transaction.prototype]), Ht(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], N(i), i), n._storeNames = N(i), this;
      }, Jt.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = fn(this._cfg.contentUpgrade || Z, e), this;
      }, Jt);
      function Jt() {
      }
      function Tn(e, n) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new Re(Gt, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Cn(e) {
        return e && typeof e.databases == "function";
      }
      function $n(e) {
        return Ne(function() {
          return B.letThrough = !0, e();
        });
      }
      function jn(e) {
        return !("from" in e);
      }
      var ce = function(e, n) {
        if (!this) {
          var r = new ce();
          return e && "d" in e && ne(r, e), r;
        }
        ne(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Ot(e, n, r) {
        var a = Y(n, r);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (jn(e)) return ne(e, { from: n, to: r, d: 1 });
          var i = e.l, a = e.r;
          if (Y(r, e.from) < 0) return i ? Ot(i, n, r) : e.l = { from: n, to: r, d: 1, l: null, r: null }, _r(e);
          if (0 < Y(n, e.to)) return a ? Ot(a, n, r) : e.r = { from: n, to: r, d: 1, l: null, r: null }, _r(e);
          Y(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Y(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, i && !e.l && _t(e, i), a && r && _t(e, a);
        }
      }
      function _t(e, n) {
        jn(n) || function r(a, p) {
          var o = p.from, l = p.to, f = p.l, p = p.r;
          Ot(a, o, l), f && r(a, f), p && r(a, p);
        }(e, n);
      }
      function Or(e, n) {
        var r = Zt(n), a = r.next();
        if (a.done) return !1;
        for (var i = a.value, o = Zt(e), l = o.next(i.from), f = l.value; !a.done && !l.done; ) {
          if (Y(f.from, i.to) <= 0 && 0 <= Y(f.to, i.from)) return !0;
          Y(i.from, f.from) < 0 ? i = (a = r.next(f.from)).value : f = (l = o.next(i.from)).value;
        }
        return !1;
      }
      function Zt(e) {
        var n = jn(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && Y(r, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || Y(r, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      function _r(e) {
        var n, r, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), i = 1 < a ? "r" : a < -1 ? "l" : "";
        i && (n = i == "r" ? "l" : "r", r = u({}, e), a = e[i], e.from = a.from, e.to = a.to, e[i] = a[i], r[i] = a[n], (e[n] = r).d = Ar(r)), e.d = Ar(e);
      }
      function Ar(r) {
        var n = r.r, r = r.l;
        return (n ? r ? Math.max(n.d, r.d) : n.d : r ? r.d : 0) + 1;
      }
      function Vt(e, n) {
        return N(n).forEach(function(r) {
          e[r] ? _t(e[r], n[r]) : e[r] = function a(i) {
            var o, l, f = {};
            for (o in i) J(i, o) && (l = i[o], f[o] = !l || typeof l != "object" || qn.has(l.constructor) ? l : a(l));
            return f;
          }(n[r]);
        }), e;
      }
      function Mn(e, n) {
        return e.all || n.all || Object.keys(e).some(function(r) {
          return n[r] && Or(n[r], e[r]);
        });
      }
      he(ce.prototype, ((ye = { add: function(e) {
        return _t(this, e), this;
      }, addKey: function(e) {
        return Ot(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(r) {
          return Ot(n, r, r);
        }), this;
      }, hasKey: function(e) {
        var n = Zt(this).next(e).value;
        return n && Y(n.from, e) <= 0 && 0 <= Y(n.to, e);
      } })[un] = function() {
        return Zt(this);
      }, ye));
      var Je = {}, Kn = {}, Bn = !1;
      function qt(e) {
        Vt(Kn, e), Bn || (Bn = !0, setTimeout(function() {
          Bn = !1, Gn(Kn, !(Kn = {}));
        }, 0));
      }
      function Gn(e, n) {
        n === void 0 && (n = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, i = Object.values(Je); a < i.length; a++) Pr(l = i[a], e, r, n);
        else for (var o in e) {
          var l, f = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          f && (o = f[1], f = f[2], (l = Je["idb://".concat(o, "/").concat(f)]) && Pr(l, e, r, n));
        }
        r.forEach(function(p) {
          return p();
        });
      }
      function Pr(e, n, r, a) {
        for (var i = [], o = 0, l = Object.entries(e.queries.query); o < l.length; o++) {
          for (var f = l[o], p = f[0], b = [], E = 0, h = f[1]; E < h.length; E++) {
            var O = h[E];
            Mn(n, O.obsSet) ? O.subscribers.forEach(function(v) {
              return r.add(v);
            }) : a && b.push(O);
          }
          a && i.push([p, b]);
        }
        if (a) for (var g = 0, w = i; g < w.length; g++) {
          var S = w[g], p = S[0], b = S[1];
          e.queries.query[p] = b;
        }
      }
      function ba(e) {
        var n = e._state, r = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? re(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, i = Math.round(10 * e.verno), o = !1;
        function l() {
          if (n.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function f() {
          return new M(function(O, g) {
            if (l(), !r) throw new L.MissingAPI();
            var w = e.name, S = n.autoSchema || !i ? r.open(w) : r.open(w, i);
            if (!S) throw new L.MissingAPI();
            S.onerror = Oe(g), S.onblocked = te(e._fireOnBlocked), S.onupgradeneeded = te(function(v) {
              var P;
              E = S.transaction, n.autoSchema && !e._options.allowEmptyDB ? (S.onerror = vt, E.abort(), S.result.close(), (P = r.deleteDatabase(w)).onsuccess = P.onerror = te(function() {
                g(new L.NoSuchDatabase("Database ".concat(w, " doesnt exist")));
              })) : (E.onerror = Oe(g), v = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, h = v < 1, e.idbdb = S.result, o && ga(e, E), pa(e, v / 10, E, g));
            }, g), S.onsuccess = te(function() {
              E = null;
              var v, P, D, R, x, k = e.idbdb = S.result, $ = Be(k.objectStoreNames);
              if (0 < $.length) try {
                var I = k.transaction((R = $).length === 1 ? R[0] : R, "readonly");
                if (n.autoSchema) P = k, D = I, (v = e).verno = P.version / 10, D = v._dbSchema = Qt(0, P, D), v._storeNames = Be(P.objectStoreNames, 0), Ht(v, [v._allTables], N(D), D);
                else if (Xt(e, e._dbSchema, I), ((x = In(Qt(0, (x = e).idbdb, I), x._dbSchema)).add.length || x.change.some(function(T) {
                  return T.add.length || T.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), k.close(), i = k.version + 1, o = !0, O(f());
                zt(e, I);
              } catch {
              }
              st.push(e), k.onversionchange = te(function(T) {
                n.vcFired = !0, e.on("versionchange").fire(T);
              }), k.onclose = te(function(T) {
                e.on("close").fire(T);
              }), h && (x = e._deps, I = w, k = x.indexedDB, x = x.IDBKeyRange, Cn(k) || I === Gt || Tn(k, x).put({ name: I }).catch(Z)), O();
            }, g);
          }).catch(function(O) {
            switch (O == null ? void 0 : O.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), f();
                break;
              case "VersionError":
                if (0 < i) return i = 0, f();
            }
            return M.reject(O);
          });
        }
        var p, b = n.dbReadyResolve, E = null, h = !1;
        return M.race([a, (typeof navigator > "u" ? M.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function g() {
            return indexedDB.databases().finally(O);
          }
          p = setInterval(g, 100), g();
        }).finally(function() {
          return clearInterval(p);
        }) : Promise.resolve()).then(f)]).then(function() {
          return l(), n.onReadyBeingFired = [], M.resolve($n(function() {
            return e.on.ready.fire(e.vip);
          })).then(function O() {
            if (0 < n.onReadyBeingFired.length) {
              var g = n.onReadyBeingFired.reduce(fn, Z);
              return n.onReadyBeingFired = [], M.resolve($n(function() {
                return g(e.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          n.openCanceller === a && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(O) {
          n.dbOpenError = O;
          try {
            E && E.abort();
          } catch {
          }
          return a === n.openCanceller && e._close(), re(O);
        }).finally(function() {
          n.openComplete = !0, b();
        }).then(function() {
          var O;
          return h && (O = {}, e.tables.forEach(function(g) {
            g.schema.indexes.forEach(function(w) {
              w.name && (O["idb://".concat(e.name, "/").concat(g.name, "/").concat(w.name)] = new ce(-1 / 0, [[[]]]));
            }), O["idb://".concat(e.name, "/").concat(g.name, "/")] = O["idb://".concat(e.name, "/").concat(g.name, "/:dels")] = new ce(-1 / 0, [[[]]]);
          }), je(wt).fire(O), Gn(O, !0)), e;
        });
      }
      function Ln(e) {
        function n(o) {
          return e.next(o);
        }
        var r = i(n), a = i(function(o) {
          return e.throw(o);
        });
        function i(o) {
          return function(p) {
            var f = o(p), p = f.value;
            return f.done ? p : p && typeof p.then == "function" ? p.then(r, a) : F(p) ? Promise.all(p).then(r, a) : r(p);
          };
        }
        return i(n)();
      }
      function en(e, n, r) {
        for (var a = F(e) ? e.slice() : [e], i = 0; i < r; ++i) a.push(n);
        return a;
      }
      var ya = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(n) {
          var r = e.table(n), a = r.schema, i = {}, o = [];
          function l(h, O, g) {
            var w = St(h), S = i[w] = i[w] || [], v = h == null ? 0 : typeof h == "string" ? 1 : h.length, P = 0 < O, P = u(u({}, g), { name: P ? "".concat(w, "(virtual-from:").concat(g.name, ")") : g.name, lowLevelIndex: g, isVirtual: P, keyTail: O, keyLength: v, extractKey: xn(h), unique: !P && g.unique });
            return S.push(P), P.isPrimaryKey || o.push(P), 1 < v && l(v === 2 ? h[0] : h.slice(0, v - 1), O + 1, g), S.sort(function(D, R) {
              return D.keyTail - R.keyTail;
            }), P;
          }
          n = l(a.primaryKey.keyPath, 0, a.primaryKey), i[":id"] = [n];
          for (var f = 0, p = a.indexes; f < p.length; f++) {
            var b = p[f];
            l(b.keyPath, 0, b);
          }
          function E(h) {
            var O, g = h.query.index;
            return g.isVirtual ? u(u({}, h), { query: { index: g.lowLevelIndex, range: (O = h.query.range, g = g.keyTail, { type: O.type === 1 ? 2 : O.type, lower: en(O.lower, O.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g), lowerOpen: !0, upper: en(O.upper, O.upperOpen ? e.MIN_KEY : e.MAX_KEY, g), upperOpen: !0 }) } }) : h;
          }
          return u(u({}, r), { schema: u(u({}, a), { primaryKey: n, indexes: o, getIndexByKeyPath: function(h) {
            return (h = i[St(h)]) && h[0];
          } }), count: function(h) {
            return r.count(E(h));
          }, query: function(h) {
            return r.query(E(h));
          }, openCursor: function(h) {
            var O = h.query.index, g = O.keyTail, w = O.isVirtual, S = O.keyLength;
            return w ? r.openCursor(E(h)).then(function(P) {
              return P && v(P);
            }) : r.openCursor(h);
            function v(P) {
              return Object.create(P, { continue: { value: function(D) {
                D != null ? P.continue(en(D, h.reverse ? e.MAX_KEY : e.MIN_KEY, g)) : h.unique ? P.continue(P.key.slice(0, S).concat(h.reverse ? e.MIN_KEY : e.MAX_KEY, g)) : P.continue();
              } }, continuePrimaryKey: { value: function(D, R) {
                P.continuePrimaryKey(en(D, e.MAX_KEY, g), R);
              } }, primaryKey: { get: function() {
                return P.primaryKey;
              } }, key: { get: function() {
                var D = P.key;
                return S === 1 ? D[0] : D.slice(0, S);
              } }, value: { get: function() {
                return P.value;
              } } });
            }
          } });
        } });
      } };
      function Fn(e, n, r, a) {
        return r = r || {}, a = a || "", N(e).forEach(function(i) {
          var o, l, f;
          J(n, i) ? (o = e[i], l = n[i], typeof o == "object" && typeof l == "object" && o && l ? (f = cn(o)) !== cn(l) ? r[a + i] = n[i] : f === "Object" ? Fn(o, l, r, a + i + ".") : o !== l && (r[a + i] = n[i]) : o !== l && (r[a + i] = n[i])) : r[a + i] = void 0;
        }), N(n).forEach(function(i) {
          J(e, i) || (r[a + i] = n[i]);
        }), r;
      }
      function Wn(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(n) {
          var r = e.table(n), a = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(i) {
            var o = B.trans, l = o.table(n).hook, f = l.deleting, p = l.creating, b = l.updating;
            switch (i.type) {
              case "add":
                if (p.fire === Z) break;
                return o._promise("readwrite", function() {
                  return E(i);
                }, !0);
              case "put":
                if (p.fire === Z && b.fire === Z) break;
                return o._promise("readwrite", function() {
                  return E(i);
                }, !0);
              case "delete":
                if (f.fire === Z) break;
                return o._promise("readwrite", function() {
                  return E(i);
                }, !0);
              case "deleteRange":
                if (f.fire === Z) break;
                return o._promise("readwrite", function() {
                  return function h(O, g, w) {
                    return r.query({ trans: O, values: !1, query: { index: a, range: g }, limit: w }).then(function(S) {
                      var v = S.result;
                      return E({ type: "delete", keys: v, trans: O }).then(function(P) {
                        return 0 < P.numFailures ? Promise.reject(P.failures[0]) : v.length < w ? { failures: [], numFailures: 0, lastResult: void 0 } : h(O, u(u({}, g), { lower: v[v.length - 1], lowerOpen: !0 }), w);
                      });
                    });
                  }(i.trans, i.range, 1e4);
                }, !0);
            }
            return r.mutate(i);
            function E(h) {
              var O, g, w, S = B.trans, v = h.keys || Wn(a, h);
              if (!v) throw new Error("Keys missing");
              return (h = h.type === "add" || h.type === "put" ? u(u({}, h), { keys: v }) : u({}, h)).type !== "delete" && (h.values = m([], h.values)), h.keys && (h.keys = m([], h.keys)), O = r, w = v, ((g = h).type === "add" ? Promise.resolve([]) : O.getMany({ trans: g.trans, keys: w, cache: "immutable" })).then(function(P) {
                var D = v.map(function(R, x) {
                  var k, $, I, T = P[x], j = { onerror: null, onsuccess: null };
                  return h.type === "delete" ? f.fire.call(j, R, T, S) : h.type === "add" || T === void 0 ? (k = p.fire.call(j, R, h.values[x], S), R == null && k != null && (h.keys[x] = R = k, a.outbound || de(h.values[x], a.keyPath, R))) : (k = Fn(T, h.values[x]), ($ = b.fire.call(j, k, R, T, S)) && (I = h.values[x], Object.keys($).forEach(function(C) {
                    J(I, C) ? I[C] = $[C] : de(I, C, $[C]);
                  }))), j;
                });
                return r.mutate(h).then(function(R) {
                  for (var x = R.failures, k = R.results, $ = R.numFailures, R = R.lastResult, I = 0; I < v.length; ++I) {
                    var T = (k || v)[I], j = D[I];
                    T == null ? j.onerror && j.onerror(x[I]) : j.onsuccess && j.onsuccess(h.type === "put" && P[I] ? h.values[I] : T);
                  }
                  return { failures: x, results: k, numFailures: $, lastResult: R };
                }).catch(function(R) {
                  return D.forEach(function(x) {
                    return x.onerror && x.onerror(R);
                  }), Promise.reject(R);
                });
              });
            }
          } });
        } });
      } };
      function Dr(e, n, r) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], i = 0, o = 0; i < n.keys.length && o < e.length; ++i) Y(n.keys[i], e[o]) === 0 && (a.push(r ? Ge(n.values[i]) : n.values[i]), ++o);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var wa = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var r = e.table(n);
          return u(u({}, r), { getMany: function(a) {
            if (!a.cache) return r.getMany(a);
            var i = Dr(a.keys, a.trans._cache, a.cache === "clone");
            return i ? M.resolve(i) : r.getMany(a).then(function(o) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Ge(o) : o }, o;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), r.mutate(a);
          } });
        } };
      } };
      function Rr(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function xr(e, n) {
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
      var Ea = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, r = new ce(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(a, i, o) {
          if (B.subscr && i !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));
          return e.transaction(a, i, o);
        }, table: function(a) {
          var i = e.table(a), o = i.schema, l = o.primaryKey, h = o.indexes, f = l.extractKey, p = l.outbound, b = l.autoIncrement && h.filter(function(g) {
            return g.compound && g.keyPath.includes(l.keyPath);
          }), E = u(u({}, i), { mutate: function(g) {
            function w(C) {
              return C = "idb://".concat(n, "/").concat(a, "/").concat(C), R[C] || (R[C] = new ce());
            }
            var S, v, P, D = g.trans, R = g.mutatedParts || (g.mutatedParts = {}), x = w(""), k = w(":dels"), $ = g.type, j = g.type === "deleteRange" ? [g.range] : g.type === "delete" ? [g.keys] : g.values.length < 50 ? [Wn(l, g).filter(function(C) {
              return C;
            }), g.values] : [], I = j[0], T = j[1], j = g.trans._cache;
            return F(I) ? (x.addKeys(I), (j = $ === "delete" || I.length === T.length ? Dr(I, j) : null) || k.addKeys(I), (j || T) && (S = w, v = j, P = T, o.indexes.forEach(function(C) {
              var K = S(C.name || "");
              function U(H) {
                return H != null ? C.extractKey(H) : null;
              }
              function z(H) {
                return C.multiEntry && F(H) ? H.forEach(function(be) {
                  return K.addKey(be);
                }) : K.addKey(H);
              }
              (v || P).forEach(function(H, ue) {
                var W = v && U(v[ue]), ue = P && U(P[ue]);
                Y(W, ue) !== 0 && (W != null && z(W), ue != null && z(ue));
              });
            }))) : I ? (T = { from: (T = I.lower) !== null && T !== void 0 ? T : e.MIN_KEY, to: (T = I.upper) !== null && T !== void 0 ? T : e.MAX_KEY }, k.add(T), x.add(T)) : (x.add(r), k.add(r), o.indexes.forEach(function(C) {
              return w(C.name).add(r);
            })), i.mutate(g).then(function(C) {
              return !I || g.type !== "add" && g.type !== "put" || (x.addKeys(C.results), b && b.forEach(function(K) {
                for (var U = g.values.map(function(W) {
                  return K.extractKey(W);
                }), z = K.keyPath.findIndex(function(W) {
                  return W === l.keyPath;
                }), H = 0, be = C.results.length; H < be; ++H) U[H][z] = C.results[H];
                w(K.name).addKeys(U);
              })), D.mutatedParts = Vt(D.mutatedParts || {}, R), C;
            });
          } }), h = function(w) {
            var S = w.query, w = S.index, S = S.range;
            return [w, new ce((w = S.lower) !== null && w !== void 0 ? w : e.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : e.MAX_KEY)];
          }, O = { get: function(g) {
            return [l, new ce(g.key)];
          }, getMany: function(g) {
            return [l, new ce().addKeys(g.keys)];
          }, count: h, query: h, openCursor: h };
          return N(O).forEach(function(g) {
            E[g] = function(w) {
              var S = B.subscr, v = !!S, P = Rr(B, i) && xr(g, w) ? w.obsSet = {} : S;
              if (v) {
                var D = function(T) {
                  return T = "idb://".concat(n, "/").concat(a, "/").concat(T), P[T] || (P[T] = new ce());
                }, R = D(""), x = D(":dels"), S = O[g](w), v = S[0], S = S[1];
                if ((g === "query" && v.isPrimaryKey && !w.values ? x : D(v.name || "")).add(S), !v.isPrimaryKey) {
                  if (g !== "count") {
                    var k = g === "query" && p && w.values && i.query(u(u({}, w), { values: !1 }));
                    return i[g].apply(this, arguments).then(function(T) {
                      if (g === "query") {
                        if (p && w.values) return k.then(function(U) {
                          return U = U.result, R.addKeys(U), T;
                        });
                        var j = w.values ? T.result.map(f) : T.result;
                        (w.values ? R : x).addKeys(j);
                      } else if (g === "openCursor") {
                        var C = T, K = w.values;
                        return C && Object.create(C, { key: { get: function() {
                          return x.addKey(C.primaryKey), C.key;
                        } }, primaryKey: { get: function() {
                          var U = C.primaryKey;
                          return x.addKey(U), U;
                        } }, value: { get: function() {
                          return K && R.addKey(C.primaryKey), C.value;
                        } } });
                      }
                      return T;
                    });
                  }
                  x.add(r);
                }
              }
              return i[g].apply(this, arguments);
            };
          }), E;
        } });
      } };
      function kr(e, n, r) {
        if (r.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return r.numFailures === a ? null : (n = u({}, n), F(n.keys) && (n.keys = n.keys.filter(function(i, o) {
          return !(o in r.failures);
        })), "values" in n && F(n.values) && (n.values = n.values.filter(function(i, o) {
          return !(o in r.failures);
        })), n);
      }
      function Un(e, n) {
        return r = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < Y(r, a.lower) : 0 <= Y(r, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Y(e, n.upper) < 0 : Y(e, n.upper) <= 0));
        var r, a;
      }
      function Ir(e, n, O, a, i, o) {
        if (!O || O.length === 0) return e;
        var l = n.query.index, f = l.multiEntry, p = n.query.range, b = a.schema.primaryKey.extractKey, E = l.extractKey, h = (l.lowLevelIndex || l).extractKey, O = O.reduce(function(g, w) {
          var S = g, v = [];
          if (w.type === "add" || w.type === "put") for (var P = new ce(), D = w.values.length - 1; 0 <= D; --D) {
            var R, x = w.values[D], k = b(x);
            P.hasKey(k) || (R = E(x), (f && F(R) ? R.some(function(C) {
              return Un(C, p);
            }) : Un(R, p)) && (P.addKey(k), v.push(x)));
          }
          switch (w.type) {
            case "add":
              var $ = new ce().addKeys(n.values ? g.map(function(K) {
                return b(K);
              }) : g), S = g.concat(n.values ? v.filter(function(K) {
                return K = b(K), !$.hasKey(K) && ($.addKey(K), !0);
              }) : v.map(function(K) {
                return b(K);
              }).filter(function(K) {
                return !$.hasKey(K) && ($.addKey(K), !0);
              }));
              break;
            case "put":
              var I = new ce().addKeys(w.values.map(function(K) {
                return b(K);
              }));
              S = g.filter(function(K) {
                return !I.hasKey(n.values ? b(K) : K);
              }).concat(n.values ? v : v.map(function(K) {
                return b(K);
              }));
              break;
            case "delete":
              var T = new ce().addKeys(w.keys);
              S = g.filter(function(K) {
                return !T.hasKey(n.values ? b(K) : K);
              });
              break;
            case "deleteRange":
              var j = w.range;
              S = g.filter(function(K) {
                return !Un(b(K), j);
              });
          }
          return S;
        }, e);
        return O === e ? e : (O.sort(function(g, w) {
          return Y(h(g), h(w)) || Y(b(g), b(w));
        }), n.limit && n.limit < 1 / 0 && (O.length > n.limit ? O.length = n.limit : e.length === n.limit && O.length < n.limit && (i.dirty = !0)), o ? Object.freeze(O) : O);
      }
      function Nr(e, n) {
        return Y(e.lower, n.lower) === 0 && Y(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Sa(e, n) {
        return function(r, a, i, o) {
          if (r === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = Y(r, a)) === 0) {
            if (i && o) return 0;
            if (i) return 1;
            if (o) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(r, a, i, o) {
          if (r === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = Y(r, a)) === 0) {
            if (i && o) return 0;
            if (i) return -1;
            if (o) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function Oa(e, n, r, a) {
        e.subscribers.add(r), a.addEventListener("abort", function() {
          var i, o;
          e.subscribers.delete(r), e.subscribers.size === 0 && (i = e, o = n, setTimeout(function() {
            i.subscribers.size === 0 && Le(o, i);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return u(u({}, e), { transaction: function(r, a, i) {
          var o, l, f = e.transaction(r, a, i);
          return a === "readwrite" && (l = (o = new AbortController()).signal, i = function(p) {
            return function() {
              if (o.abort(), a === "readwrite") {
                for (var b = /* @__PURE__ */ new Set(), E = 0, h = r; E < h.length; E++) {
                  var O = h[E], g = Je["idb://".concat(n, "/").concat(O)];
                  if (g) {
                    var w = e.table(O), S = g.optimisticOps.filter(function(K) {
                      return K.trans === f;
                    });
                    if (f._explicit && p && f.mutatedParts) for (var v = 0, P = Object.values(g.queries.query); v < P.length; v++) for (var D = 0, R = ($ = P[v]).slice(); D < R.length; D++) Mn((I = R[D]).obsSet, f.mutatedParts) && (Le($, I), I.subscribers.forEach(function(K) {
                      return b.add(K);
                    }));
                    else if (0 < S.length) {
                      g.optimisticOps = g.optimisticOps.filter(function(K) {
                        return K.trans !== f;
                      });
                      for (var x = 0, k = Object.values(g.queries.query); x < k.length; x++) for (var $, I, T, j = 0, C = ($ = k[x]).slice(); j < C.length; j++) (I = C[j]).res != null && f.mutatedParts && (p && !I.dirty ? (T = Object.isFrozen(I.res), T = Ir(I.res, I.req, S, w, I, T), I.dirty ? (Le($, I), I.subscribers.forEach(function(K) {
                        return b.add(K);
                      })) : T !== I.res && (I.res = T, I.promise = M.resolve({ result: T }))) : (I.dirty && Le($, I), I.subscribers.forEach(function(K) {
                        return b.add(K);
                      })));
                    }
                  }
                }
                b.forEach(function(K) {
                  return K();
                });
              }
            };
          }, f.addEventListener("abort", i(!1), { signal: l }), f.addEventListener("error", i(!1), { signal: l }), f.addEventListener("complete", i(!0), { signal: l })), f;
        }, table: function(r) {
          var a = e.table(r), i = a.schema.primaryKey;
          return u(u({}, a), { mutate: function(o) {
            var l = B.trans;
            if (i.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return a.mutate(o);
            var f = Je["idb://".concat(n, "/").concat(r)];
            return f ? (l = a.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Wn(i, o).some(function(p) {
              return p == null;
            })) ? (f.optimisticOps.push(o), o.mutatedParts && qt(o.mutatedParts), l.then(function(p) {
              0 < p.numFailures && (Le(f.optimisticOps, o), (p = kr(0, o, p)) && f.optimisticOps.push(p), o.mutatedParts && qt(o.mutatedParts));
            }), l.catch(function() {
              Le(f.optimisticOps, o), o.mutatedParts && qt(o.mutatedParts);
            })) : l.then(function(p) {
              var b = kr(0, u(u({}, o), { values: o.values.map(function(E, h) {
                var O;
                return p.failures[h] ? E : (E = (O = i.keyPath) !== null && O !== void 0 && O.includes(".") ? Ge(E) : u({}, E), de(E, i.keyPath, p.results[h]), E);
              }) }), p);
              f.optimisticOps.push(b), queueMicrotask(function() {
                return o.mutatedParts && qt(o.mutatedParts);
              });
            }), l) : a.mutate(o);
          }, query: function(o) {
            if (!Rr(B, a) || !xr("query", o)) return a.query(o);
            var l = ((b = B.trans) === null || b === void 0 ? void 0 : b.db._options.cache) === "immutable", h = B, f = h.requery, p = h.signal, b = function(w, S, v, P) {
              var D = Je["idb://".concat(w, "/").concat(S)];
              if (!D) return [];
              if (!(S = D.queries[v])) return [null, !1, D, null];
              var R = S[(P.query ? P.query.index.name : null) || ""];
              if (!R) return [null, !1, D, null];
              switch (v) {
                case "query":
                  var x = R.find(function(k) {
                    return k.req.limit === P.limit && k.req.values === P.values && Nr(k.req.query.range, P.query.range);
                  });
                  return x ? [x, !0, D, R] : [R.find(function(k) {
                    return ("limit" in k.req ? k.req.limit : 1 / 0) >= P.limit && (!P.values || k.req.values) && Sa(k.req.query.range, P.query.range);
                  }), !1, D, R];
                case "count":
                  return x = R.find(function(k) {
                    return Nr(k.req.query.range, P.query.range);
                  }), [x, !!x, D, R];
              }
            }(n, r, "query", o), E = b[0], h = b[1], O = b[2], g = b[3];
            return E && h ? E.obsSet = o.obsSet : (h = a.query(o).then(function(w) {
              var S = w.result;
              if (E && (E.res = S), l) {
                for (var v = 0, P = S.length; v < P; ++v) Object.freeze(S[v]);
                Object.freeze(S);
              } else w.result = Ge(S);
              return w;
            }).catch(function(w) {
              return g && E && Le(g, E), Promise.reject(w);
            }), E = { obsSet: o.obsSet, promise: h, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, g ? g.push(E) : (g = [E], (O = O || (Je["idb://".concat(n, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = g)), Oa(E, g, f, p), E.promise.then(function(w) {
              return { result: Ir(w.result, o, O == null ? void 0 : O.optimisticOps, a, E, l) };
            });
          } });
        } });
      } };
      function tn(e, n) {
        return new Proxy(e, { get: function(r, a, i) {
          return a === "db" ? n : Reflect.get(r, a, i);
        } });
      }
      var Re = (ae.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new L.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, r = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), n.push(r), n.sort(ha), r.stores({}), this._state.autoSchema = !1, r);
      }, ae.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || B.letThrough || this._vip) ? e() : new M(function(r, a) {
          if (n._state.openComplete) return a(new L.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new L.DatabaseClosed());
            n.open().catch(Z);
          }
          n._state.dbReadyPromise.then(r, a);
        }).then(e);
      }, ae.prototype.use = function(e) {
        var n = e.stack, r = e.create, a = e.level, i = e.name;
        return i && this.unuse({ stack: n, name: i }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: r, level: a ?? 10, name: i }), e.sort(function(o, l) {
          return o.level - l.level;
        }), this;
      }, ae.prototype.unuse = function(e) {
        var n = e.stack, r = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(i) {
          return a ? i.create !== a : !!r && i.name !== r;
        })), this;
      }, ae.prototype.open = function() {
        var e = this;
        return Ye(Ie, function() {
          return ba(e);
        });
      }, ae.prototype._close = function() {
        var e = this._state, n = st.indexOf(this);
        if (0 <= n && st.splice(n, 1), this.idbdb) {
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
      }, ae.prototype.close = function(r) {
        var n = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        n ? (r.isBeingOpened && r.cancelOpen(new L.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new L.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, ae.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new M(function(i, o) {
          function l() {
            n.close(e);
            var f = n._deps.indexedDB.deleteDatabase(n.name);
            f.onsuccess = te(function() {
              var p, b, E;
              p = n._deps, b = n.name, E = p.indexedDB, p = p.IDBKeyRange, Cn(E) || b === Gt || Tn(E, p).delete(b).catch(Z), i();
            }), f.onerror = Oe(o), f.onblocked = n._fireOnBlocked;
          }
          if (r) throw new L.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(l) : l();
        });
      }, ae.prototype.backendDB = function() {
        return this.idbdb;
      }, ae.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ae.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ae.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ae.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ae.prototype, "tables", { get: function() {
        var e = this;
        return N(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), ae.prototype.transaction = function() {
        var e = (function(n, r, a) {
          var i = arguments.length;
          if (i < 2) throw new L.InvalidArgument("Too few arguments");
          for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
          return a = o.pop(), [n, Vn(o), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ae.prototype._transaction = function(e, n, r) {
        var a = this, i = B.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        var o, l, f = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = n.map(function(b) {
            if (b = b instanceof a.Table ? b.name : b, typeof b != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return b;
          }), e == "r" || e === En) o = En;
          else {
            if (e != "rw" && e != Sn) throw new L.InvalidArgument("Invalid transaction mode: " + e);
            o = Sn;
          }
          if (i) {
            if (i.mode === En && o === Sn) {
              if (!f) throw new L.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              i = null;
            }
            i && l.forEach(function(b) {
              if (i && i.storeNames.indexOf(b) === -1) {
                if (!f) throw new L.SubTransaction("Table " + b + " not included in parent transaction.");
                i = null;
              }
            }), f && i && !i.active && (i = null);
          }
        } catch (b) {
          return i ? i._promise(null, function(E, h) {
            h(b);
          }) : re(b);
        }
        var p = (function b(E, h, O, g, w) {
          return M.resolve().then(function() {
            var S = B.transless || B, v = E._createTransaction(h, O, E._dbSchema, g);
            if (v.explicit = !0, S = { trans: v, transless: S }, g) v.idbtrans = g.idbtrans;
            else try {
              v.create(), v.idbtrans._explicit = !0, E._state.PR1398_maxLoop = 3;
            } catch (R) {
              return R.name === dn.InvalidState && E.isOpen() && 0 < --E._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), E.close({ disableAutoOpen: !1 }), E.open().then(function() {
                return b(E, h, O, null, w);
              })) : re(R);
            }
            var P, D = ln(w);
            return D && at(), S = M.follow(function() {
              var R;
              (P = w.call(v, v)) && (D ? (R = Te.bind(null, null), P.then(R, R)) : typeof P.next == "function" && typeof P.throw == "function" && (P = Ln(P)));
            }, S), (P && typeof P.then == "function" ? M.resolve(P).then(function(R) {
              return v.active ? R : re(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return P;
            })).then(function(R) {
              return g && v._resolve(), v._completion.then(function() {
                return R;
              });
            }).catch(function(R) {
              return v._reject(R), re(R);
            });
          });
        }).bind(null, this, o, l, i, r);
        return i ? i._promise(o, p, "lock") : B.trans ? Ye(B.transless, function() {
          return a._whenReady(p);
        }) : this._whenReady(p);
      }, ae.prototype.table = function(e) {
        if (!J(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ae);
      function ae(e, n) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var a = ae.dependencies;
        this._options = n = u({ addons: ae.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var i, o, l, f, p, b = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Z, dbReadyPromise: null, cancelOpen: Z, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        b.dbReadyPromise = new M(function(h) {
          b.dbReadyResolve = h;
        }), b.openCanceller = new M(function(h, O) {
          b.cancelOpen = O;
        }), this._state = b, this.name = e, this.on = mt(this, "populate", "blocked", "versionchange", "close", { ready: [fn, Z] }), this.on.ready.subscribe = ut(this.on.ready.subscribe, function(h) {
          return function(O, g) {
            ae.vip(function() {
              var w, S = r._state;
              S.openComplete ? (S.dbOpenError || M.resolve().then(O), g && h(O)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(O), g && h(O)) : (h(O), w = r, g || h(function v() {
                w.on.ready.unsubscribe(O), w.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (i = this, bt(ia.prototype, function(P, v) {
          this.db = i;
          var g = ur, w = null;
          if (v) try {
            g = v();
          } catch (D) {
            w = D;
          }
          var S = P._ctx, v = S.table, P = v.hook.reading.fire;
          this._ctx = { table: v, index: S.index, isPrimKey: !S.index || v.schema.primKey.keyPath && S.index === v.schema.primKey.name, range: g, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: w, or: S.or, valueMapper: P !== dt ? P : null };
        })), this.Table = (o = this, bt(hr.prototype, function(h, O, g) {
          this.db = o, this._tx = g, this.name = h, this.schema = O, this.hook = o._allTables[h] ? o._allTables[h].hook : mt(null, { creating: [Zr, Z], reading: [Jr, dt], updating: [qr, Z], deleting: [Vr, Z] });
        })), this.Transaction = (l = this, bt(ua.prototype, function(h, O, g, w, S) {
          var v = this;
          this.db = l, this.mode = h, this.storeNames = O, this.schema = g, this.chromeTransactionDurability = w, this.idbtrans = null, this.on = mt(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new M(function(P, D) {
            v._resolve = P, v._reject = D;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(P) {
            var D = v.active;
            return v.active = !1, v.on.error.fire(P), v.parent ? v.parent._reject(P) : D && v.idbtrans && v.idbtrans.abort(), re(P);
          });
        })), this.Version = (f = this, bt(ma.prototype, function(h) {
          this.db = f, this._cfg = { version: h, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (p = this, bt(yr.prototype, function(h, O, g) {
          if (this.db = p, this._ctx = { table: h, index: O === ":id" ? null : O, or: g }, this._cmp = this._ascending = Y, this._descending = function(w, S) {
            return Y(S, w);
          }, this._max = function(w, S) {
            return 0 < Y(w, S) ? w : S;
          }, this._min = function(w, S) {
            return Y(w, S) < 0 ? w : S;
          }, this._IDBKeyRange = p._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(h) {
          0 < h.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(h) {
          !h.newVersion || h.newVersion < h.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(h.oldVersion / 10));
        }), this._maxKey = Et(n.IDBKeyRange), this._createTransaction = function(h, O, g, w) {
          return new r.Transaction(h, O, g, r._options.chromeTransactionDurability, w);
        }, this._fireOnBlocked = function(h) {
          r.on("blocked").fire(h), st.filter(function(O) {
            return O.name === r.name && O !== r && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(h);
          });
        }, this.use(wa), this.use(_a), this.use(Ea), this.use(ya), this.use(va);
        var E = new Proxy(this, { get: function(h, O, g) {
          if (O === "_vip") return !0;
          if (O === "table") return function(S) {
            return tn(r.table(S), E);
          };
          var w = Reflect.get(h, O, g);
          return w instanceof hr ? tn(w, E) : O === "tables" ? w.map(function(S) {
            return tn(S, E);
          }) : O === "_createTransaction" ? function() {
            return tn(w.apply(this, arguments), E);
          } : w;
        } });
        this.vip = E, a.forEach(function(h) {
          return h(r);
        });
      }
      var nn, ye = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (zn.prototype.subscribe = function(e, n, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: r });
      }, zn.prototype[ye] = function() {
        return this;
      }, zn);
      function zn(e) {
        this._subscribe = e;
      }
      try {
        nn = { indexedDB: A.indexedDB || A.mozIndexedDB || A.webkitIndexedDB || A.msIndexedDB, IDBKeyRange: A.IDBKeyRange || A.webkitIDBKeyRange };
      } catch {
        nn = { indexedDB: null, IDBKeyRange: null };
      }
      function Tr(e) {
        var n, r = !1, a = new Aa(function(i) {
          var o = ln(e), l, f = !1, p = {}, b = {}, E = { get closed() {
            return f;
          }, unsubscribe: function() {
            f || (f = !0, l && l.abort(), h && je.storagemutated.unsubscribe(g));
          } };
          i.start && i.start(E);
          var h = !1, O = function() {
            return wn(w);
          }, g = function(S) {
            Vt(p, S), Mn(b, p) && O();
          }, w = function() {
            var S, v, P;
            !f && nn.indexedDB && (p = {}, S = {}, l && l.abort(), l = new AbortController(), P = function(D) {
              var R = nt();
              try {
                o && at();
                var x = Ne(e, D);
                return x = o ? x.finally(Te) : x;
              } finally {
                R && rt();
              }
            }(v = { subscr: S, signal: l.signal, requery: O, querier: e, trans: null }), Promise.resolve(P).then(function(D) {
              r = !0, n = D, f || v.signal.aborted || (p = {}, function(R) {
                for (var x in R) if (J(R, x)) return;
                return 1;
              }(b = S) || h || (je(wt, g), h = !0), wn(function() {
                return !f && i.next && i.next(D);
              }));
            }, function(D) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(D == null ? void 0 : D.name) || f || wn(function() {
                f || i.error && i.error(D);
              });
            }));
          };
          return setTimeout(O, 0), E;
        });
        return a.hasValue = function() {
          return r;
        }, a.getValue = function() {
          return n;
        }, a;
      }
      var Ze = Re;
      function Hn(e) {
        var n = Me;
        try {
          Me = !0, je.storagemutated.fire(e), Gn(e, !0);
        } finally {
          Me = n;
        }
      }
      he(Ze, u(u({}, It), { delete: function(e) {
        return new Ze(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Ze(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = Ze.dependencies, r = n.indexedDB, n = n.IDBKeyRange, (Cn(r) ? Promise.resolve(r.databases()).then(function(a) {
            return a.map(function(i) {
              return i.name;
            }).filter(function(i) {
              return i !== Gt;
            });
          }) : Tn(r, n).toCollection().primaryKeys()).then(e);
        } catch {
          return re(new L.MissingAPI());
        }
        var n, r;
      }, defineClass: function() {
        return function(e) {
          ne(this, e);
        };
      }, ignoreTransaction: function(e) {
        return B.trans ? Ye(B.transless, e) : e();
      }, vip: $n, async: function(e) {
        return function() {
          try {
            var n = Ln(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : M.resolve(n);
          } catch (r) {
            return re(r);
          }
        };
      }, spawn: function(e, n, r) {
        try {
          var a = Ln(e.apply(r, n || []));
          return a && typeof a.then == "function" ? a : M.resolve(a);
        } catch (i) {
          return re(i);
        }
      }, currentTransaction: { get: function() {
        return B.trans || null;
      } }, waitFor: function(e, n) {
        return n = M.resolve(typeof e == "function" ? Ze.ignoreTransaction(e) : e).timeout(n || 6e4), B.trans ? B.trans.waitFor(n) : n;
      }, Promise: M, debug: { get: function() {
        return Se;
      }, set: function(e) {
        nr(e);
      } }, derive: Ae, extend: ne, props: he, override: ut, Events: mt, on: je, liveQuery: Tr, extendObservabilitySet: Vt, getByKeyPath: we, setByKeyPath: de, delByKeyPath: function(e, n) {
        typeof n == "string" ? de(e, n, void 0) : "length" in n && [].map.call(n, function(r) {
          de(e, r, void 0);
        });
      }, shallowClone: xt, deepClone: Ge, getObjectDiff: Fn, cmp: Y, asap: Rt, minKey: -1 / 0, addons: [], connections: st, errnames: dn, dependencies: nn, cache: Je, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, r) {
        return e + n / Math.pow(10, 2 * r);
      }) })), Ze.maxKey = Et(Ze.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (je(wt, function(e) {
        Me || (e = new CustomEvent(Pn, { detail: e }), Me = !0, dispatchEvent(e), Me = !1);
      }), addEventListener(Pn, function(e) {
        e = e.detail, Me || Hn(e);
      }));
      var ct, Me = !1, Cr = function() {
      };
      return typeof BroadcastChannel < "u" && ((Cr = function() {
        (ct = new BroadcastChannel(Pn)).onmessage = function(e) {
          return e.data && Hn(e.data);
        };
      })(), typeof ct.unref == "function" && ct.unref(), je(wt, function(e) {
        Me || ct.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Re.disableBfCache && e.persisted) {
          Se && console.debug("Dexie: handling persisted pagehide"), ct != null && ct.close();
          for (var n = 0, r = st; n < r.length; n++) r[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Re.disableBfCache && e.persisted && (Se && console.debug("Dexie: handling persisted pageshow"), Cr(), Hn({ all: new ce(-1 / 0, [[]]) }));
      })), M.rejectionMapper = function(e, n) {
        return !e || e instanceof et || e instanceof TypeError || e instanceof SyntaxError || !e.name || !tr[e.name] ? e : (n = new tr[e.name](n || e.message, e), "stack" in e && ve(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, nr(Se), u(Re, Object.freeze({ __proto__: null, Dexie: Re, liveQuery: Tr, Entity: lr, cmp: Y, PropModification: yt, replacePrefix: function(e, n) {
        return new yt({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new yt({ add: e });
      }, remove: function(e) {
        return new yt({ remove: e });
      }, default: Re, RangeSet: ce, mergeRanges: _t, rangesOverlap: Or }), { default: Re }), Re;
    });
  }(sn)), sn.exports;
}
var La = Ga();
const Jn = /* @__PURE__ */ Ka(La), Mr = Symbol.for("Dexie"), on = globalThis[Mr] || (globalThis[Mr] = Jn);
if (Jn.semVer !== on.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Jn.semVer} and ${on.semVer}`);
class Br {
  constructor(t) {
    y(this, "db");
    y(this, "subscribers", []);
    y(this, "options");
    /**
     * Retrieve Cloud Data
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getCloud", async (t) => {
      const s = await this.db.table(_.CLOUD).where({ id: t.widget }).last().catch(() => {
        G(2, ["%capi%C %ccloud", c.API, c.NONE, c.CLOUD, t.widget]);
      });
      if (typeof s > "u")
        return { data: null, message: "Cloud Data error", success: !1, query: t };
      const u = {
        data: s.data,
        message: s !== void 0 ? "Series retrieved successfully" : "Series Data error",
        success: s !== void 0,
        query: t
      };
      return G(3, [
        "%cget%c %cstorage%c %ccloud",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.CLOUD,
        u
      ]), u;
    });
    /**
     * Update Cloud
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setCloud", async (t, s) => t.type === _.CLOUD && s !== "" ? await this.db.table(_.CLOUD).put({
      id: t.widget,
      dashboard_id: t.dashboard,
      //data: data.data,
      data: s
    }).then(() => 201).catch((u) => (G(2, [
      "%cset%c %cstorage%c %ccloud",
      c.KO,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.CLOUD,
      t,
      u.message
    ]), 400)) : 400);
    y(this, "getDashboard", async (t) => {
      const s = await this.db.table(_.DASHBOARD).where({ id: t.id }).last().catch(() => {
        G(2, ["%cstorage", c.STORAGE, ee.DASHBOARD_LOAD, t.id]);
      });
      return s === void 0 ? {
        data: null,
        message: `Dashboard ${t.id} Load error`,
        success: !1
      } : (s.message = `Dashboard ${t.id} retrieved from storage`, s.success = !0, s);
    });
    y(this, "getDashboards", async (t) => {
      const s = (A) => (t == null ? void 0 : t.id) === A.id, u = (A) => t != null && t.name ? A.name.includes(t == null ? void 0 : t.name) : !1;
      let m = await this.db.table(_.DASHBOARD).toArray().then((A) => t != null && t.id ? A.filter(s) : A).then((A) => t != null && t.name ? A.filter(u) : A).catch(() => {
        G(2, ["%cstorage", c.STORAGE, ee.DASHBOARD_LOAD, t]);
      });
      return m !== void 0 && G(3, [
        "%cstorage%c %cdashboards",
        c.STORAGE,
        c.NONE,
        c.WIDGET,
        t
      ]), {
        // @ts-ignore
        data: m !== void 0 ? { dashboards: m, query: t } : null,
        message: m !== void 0 ? "Dashboards loaded from storage" : "Dashboards load error",
        success: m !== void 0
      };
    });
    /**
     * Update Cloud
     * @param query IQuery
     * @returns number
     */
    y(this, "setDashboard", async (t) => {
      const s = structuredClone(t);
      return delete s.data.widgets, await this.db.table(_.DASHBOARD).put({
        id: s.id,
        name: s.name,
        dashboard: s.data,
        update: s.update
      }).then(() => ({
        data: null,
        message: `Dashboard ${s.data.id} saved to storage`,
        success: !0
      })).catch((u) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.WIDGET,
        t,
        u.message
      ), {
        data: null,
        message: `Dashboard ${s.data.id} save error: ${u.message}`,
        success: !1
      }));
    });
    /**
     * Wipe Message data after expires timestamp
     */
    y(this, "cleanMessages", async () => {
      const t = Date.now() / 1e3, s = (A) => A.expires < t, u = (A) => A.expires < t;
      return await this.db.table(_.TOPICS).orderBy("expires").filter(s).delete().catch((A) => (console.error(
        "%cstorage%c %cclean",
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        A.message
      ), 0)), await this.db.table(_.MESSAGES).orderBy("expires").filter(u).delete().catch((A) => (console.error(
        "%clean%c %cstorage%c %cmessages",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        A.message
      ), 0));
    });
    /**
     * Retrieve Messages Data
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getMessages", async (t) => {
      const s = (t == null ? void 0 : t.order) ?? "utc";
      s !== "utc" && (t.since = Math.floor(Date.now() / 1e3) - 60 * 60 * 24 * 7), this.options.delay != 0 ? t.before = Math.floor(Date.now() / 1e3) - (this.options.delay || 0) : t.before = Math.floor(Date.now() / 1e3);
      const u = (N) => N.utc > ((t == null ? void 0 : t.since) || 0), m = (N) => N.utc < ((t == null ? void 0 : t.before) || Date.now() / 1e3), A = (N) => (N == null ? void 0 : N.visible) !== 0;
      try {
        const F = await this.db.table(_.TOPICS).where("widget_id").equals(t.widget).filter(A).filter(u).filter(m).reverse().limit((t == null ? void 0 : t.limit) ?? 25).sortBy(s);
        if (F.length === 0)
          return {
            data: null,
            message: "No Messages error",
            success: !1,
            query: t
          };
        let ne = F.map((oe) => this.db.table(_.MESSAGES).get({ id: oe.message_id }));
        return on.Promise.all(ne).then(async (oe) => {
          const J = {
            data: {
              messages: oe.map((he) => he.data)
            },
            query: t,
            message: "Messages retrieved successfully",
            success: !0
          };
          return G(3, [
            "%cget%c %cstorage%c %cmessages",
            c.OK,
            c.NONE,
            c.STORAGE,
            c.NONE,
            c.MESSAGES,
            J
          ]), J;
        });
      } catch (N) {
        return G(2, [
          "%cget%c %cstorage%c %cmessages",
          c.OK,
          c.NONE,
          c.STORAGE,
          c.NONE,
          c.NO_UPDATES,
          t,
          N.message
        ]), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    y(this, "hideMessage", async (t, s) => {
      await this.db.table(_.TOPICS).where("message_id").equals(t).modify({ visible: s ? 1 : 0 }).catch((u) => (console.error(
        "%chide%c %cstorage%c %cmessage",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.HIDE,
        u.message
      ), 0));
    });
    /**
     * Update Messages
     * @param query IQuery
     * @param data any
     * @returns number
     */
    y(this, "setMessages", async (t, s) => {
      if (t.type !== _.MESSAGES)
        return 400;
      const u = s.data.title;
      let m = 0;
      return await s.data.messages.forEach(async (A) => {
        var N, F, ne, oe, V, J, he, pe, ve, Ae, Pt, Dt, Be, ut;
        A.id !== null && (A.topics[0] = {
          message_id: A.id,
          engagement: ((N = A.topics[0]) == null ? void 0 : N.engagement) || ((F = A.dynamics) == null ? void 0 : F.engagement) || 0,
          impressions: ((ne = A.topics[0]) == null ? void 0 : ne.impressions) || ((oe = A.dynamics) == null ? void 0 : oe.semrush_visits) || 0,
          reach: ((V = A.topics[0]) == null ? void 0 : V.reach) || ((J = A.dynamics) == null ? void 0 : J.potential_reach) || 0,
          sentiment: ((he = A.topics[0]) == null ? void 0 : he.sentiment) || 0
        }, await this.db.table(_.MESSAGES).put({
          id: A.id,
          utc: A.utc,
          data: A,
          expires: A.expires
        }).catch((ge) => {
          m++, G(4, [
            "%cset%c %cstorage",
            c.KO,
            c.NONE,
            c.STORAGE,
            "set message",
            `title: ${u}`,
            A,
            ge.message
          ]);
        }), await this.db.table(_.TOPICS).put({
          title: u,
          widget_id: t.widget,
          message_id: A.id,
          dashboard_id: t.dashboard,
          engagement: ((pe = A.topics[0]) == null ? void 0 : pe.engagement) || ((ve = A.dynamics) == null ? void 0 : ve.engagement) || 0,
          impressions: ((Ae = A.topics[0]) == null ? void 0 : Ae.impressions) || ((Pt = A.dynamics) == null ? void 0 : Pt.semrush_visits) || 0,
          reach: ((Dt = A.topics[0]) == null ? void 0 : Dt.reach) || ((Be = A.dynamics) == null ? void 0 : Be.potential_reach) || 0,
          sentiment: ((ut = A.topics[0]) == null ? void 0 : ut.sentiment) || 0,
          utc: A.utc,
          expires: A.expires
        }).catch((ge) => {
          m++, G(4, [
            "%cset%c %cstorage",
            c.KO,
            c.NONE,
            c.STORAGE,
            "set topic",
            `title: ${u}`,
            A,
            ge.message
          ]);
        }), await s.data.topics.forEach(async (ge) => {
          const Rt = ge.message_id, we = ge.visible ? 1 : 0, de = ge.title;
          await this.db.table(_.TOPICS).where("message_id").equals(Rt).modify({ visible: we }).catch((xt) => {
            m++, G(4, [
              "%cset%c %cstorage",
              c.KO,
              c.NONE,
              c.STORAGE,
              "update message visibility",
              `title: ${de}`,
              `widget: ${ge.widget_id}`,
              xt.message
            ]);
          });
        }));
      }), m === 0 ? 201 : 400;
    });
    /**
     * Retrieve Series Data
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getSeries", async (t) => {
      const s = await this.db.table(_.SERIES).where({ id: t.widget }).last().catch(() => {
        G(2, [
          "%cget%c %cstorage%c %cseries",
          c.KO,
          c.NONE,
          c.STORAGE,
          c.NONE,
          c.SERIES,
          t.widget
        ]);
      }), u = {
        data: s.data,
        message: s !== void 0 ? "Get Series success" : "Get Series error",
        success: s !== void 0,
        query: t
      };
      return G(3, [
        "%cget%c %cstorage%c %cseries",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.SERIES,
        u
      ]), u;
    });
    /**
     * Update Series
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setSeries", async (t, s) => (s == null || delete s.query, t.type === _.SERIES && s !== "" ? await this.db.table(_.SERIES).put({
      id: t.widget,
      dashboard_id: t.dashboard,
      //data: data.data,
      data: s
    }).then(() => 201).catch((u) => (G(2, [
      "%cset%c %cstorage%c %cseries",
      c.KO,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.SERIES,
      t,
      u.message
    ]), 400)) : 400));
    /**
     * Retrieve Widget from Storage
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getWidget", async (t) => {
      const s = await this.db.table(_.WIDGET).where({ id: t.id }).last().catch(() => {
        console.warn("%cstorage", c.STORAGE, ee.WIDGET_LOAD, t.id);
      });
      return s === void 0 ? {
        data: null,
        message: `Widget ${t.id} Load error`,
        success: !1
      } : (s.message = `Widget ${t.id} retrieved from storage`, s.success = !0, s);
    });
    /**
     * Retrieve Widgets from Storage
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getWidgets", async (t) => {
      const s = (N) => (t == null ? void 0 : t.dashboard) === N.dashboard_id, u = (N) => (t == null ? void 0 : t.type) === N.type, m = (N) => t != null && t.name ? N.name.includes(t == null ? void 0 : t.name) : !1;
      let A = await this.db.table(_.WIDGET).toArray().then((N) => t != null && t.dashboard ? N.filter(s) : N).then((N) => t != null && t.type ? N.filter(u) : N).then((N) => t != null && t.name ? N.filter(m) : N).catch(() => {
        G(2, ["%cstorage", c.STORAGE, ee.WIDGET_LOAD, t]);
      });
      return A !== void 0 && G(3, [
        "%cstorage%c %cwidgets",
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        t
      ]), {
        // @ts-ignore
        data: A !== void 0 ? { data: A, query: t } : null,
        message: A !== void 0 ? "Widgets loaded from storage" : "Widgets load error",
        success: A !== void 0
      };
    });
    /**
     * Update Cloud
     * @param query IQuery
     * @returns number
     */
    y(this, "setWidget", async (t) => await this.db.table(_.WIDGET).put({
      id: t.id,
      name: t.title,
      dashboard_id: t.dashboard_id,
      type: t.type,
      update: t.update
    }).then(() => ({
      data: null,
      message: `Widget ${t.data.id} saved to storage`,
      success: !0
    })).catch((s) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.WIDGET,
      t,
      s.message
    ), {
      data: null,
      message: `Widget ${t.data.id} save error: ${s.message}`,
      success: !1
    })));
    /**
     * Add component subscriber
     * @param query IQuery
     * @returns null
     */
    y(this, "subscribe", (t) => (t = $a(t), this.subscribers.filter(
      (u) => u.widget === t.widget
    ).length > 0 || (t.type === _.MESSAGES && (t = At(this.options, t)), console.info(
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
    ), this.subscribers.push(t)), null));
    /**
     * Get current subscribers
     * @returns IQuery[]
     */
    y(this, "getSubscribers", async () => await new Promise((t) => t(this.subscribers)));
    /**
     * Retrieve Slide from Storage
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getSlide", async (t) => {
      const s = await this.db.table(_.SLIDE).where({ id: t.id }).last().catch(() => {
        G(2, ["%cstorage", c.STORAGE, ee.SLIDE_LOAD, t.id]);
      });
      return {
        // @ts-ignore
        data: s !== void 0 ? { slides: s, query: t } : null,
        message: s !== void 0 ? "Slide loaded from storage" : "Slide load error",
        success: s !== void 0
      };
    });
    /**
     * Retrieve Slides from Storage
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getSlides", async (t) => {
      const s = (N) => t != null && t.id ? t.id = N.id : !1, u = (N) => t != null && t.name ? N.name.includes(t == null ? void 0 : t.name) : !1, A = await this.db.table(_.SLIDE).toArray().then((N) => t != null && t.id ? N.filter(s) : N).then((N) => t != null && t.name ? N.filter(u) : N);
      return A !== void 0 && G(3, ["%cstorage%c %cslides", c.STORAGE, c.NONE, c.SLIDE, t]), {
        // @ts-ignore
        data: A !== void 0 ? { slides: A, query: t } : null,
        message: A !== void 0 ? "Slides loaded from storage" : "Slides load error",
        success: A !== void 0
      };
    });
    /**
     * Update Slide in Storage
     * @param query IQuery
     * @returns number
     */
    y(this, "setSlide", async (t) => await this.db.table(_.SLIDE).put({
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
    })).catch((s) => (console.error(
      "%cstorage",
      c.STORAGE,
      ee.SLIDE_STORE,
      t,
      s.message
    ), {
      data: null,
      message: `Slide ${t.data.id} save error: ${s.message}`,
      success: !1
    })));
    /**
     * Retrieve Presentation from Storage
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getPresentation", async (t) => {
      const s = await this.db.table(_.PRESENTATION).where({ id: t.id }).last().catch(() => {
        console.warn(
          "%cstorage ",
          c.STORAGE,
          ee.PRESENTATION_LOAD,
          t.id
        );
      });
      return s === void 0 ? {
        data: null,
        message: `Presentation ${t.id} Load error`,
        success: !1
      } : (s.message = `Presentation ${t.id} retrieved from storage`, s.success = !0, s);
    });
    /**
     * Retrieve Presentations from Storage
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getPresentations", async (t) => {
      const s = (A) => t != null && t.name ? A.name.includes(t == null ? void 0 : t.name) : !1, m = await this.db.table(_.PRESENTATION).toArray().then((A) => t != null && t.name ? A.filter(s) : A);
      return m !== void 0 && G(3, [
        "%cstorage%c %cpresentations",
        c.STORAGE,
        c.NONE,
        c.PRESENTATION,
        t
      ]), {
        // @ts-ignore
        data: m !== void 0 ? { presentations: m, query: t } : null,
        message: m !== void 0 ? "Presentations loaded from storage" : "Presentations load error",
        success: m !== void 0
      };
    });
    /**
     * Update Presentation in Storage
     * @param query IQuery
     * @returns number
     */
    y(this, "setPresentation", async (t) => await this.db.table(_.PRESENTATION).put({
      id: t.data.id,
      name: t.data.name || "Not set",
      data: t.data,
      update: t.update
    }).then(() => ({
      data: null,
      message: `Presentation ${t.data.id} saved to storage`,
      success: !0
    })).catch((s) => (console.error(
      "%cstorage",
      c.STORAGE,
      ee.PRESENTATION_STORE,
      t,
      s.message
    ), {
      data: null,
      message: `Presentation ${t.data.id} save error: ${s.message}`,
      success: !1
    })));
    /**
     * Retrieve Preference from Storage
     * @param preference IPreference
     * @returns IResponse
     */
    y(this, "getPreference", async (t) => {
      const s = await this.db.table(_.PREFERENCE).where({ id: t.id }).last().catch(() => {
        G(2, [
          "%cstorage",
          c.STORAGE,
          ee.PREFERENCE_LOAD,
          t.id
        ]);
      });
      return {
        // @ts-ignore
        data: s !== void 0 ? { preferences: s, query } : null,
        message: s !== void 0 ? "Preference loaded from storage" : "Preference load error",
        success: s !== void 0
      };
    });
    /**
     * Retrieve Preferences from Storage
     * @param query IQuery
     * @returns IResponse
     */
    y(this, "getPreferences", async (t) => {
      const s = (A) => t != null && t.id ? t.id = A.id : !1, m = await this.db.table(_.SLIDE).toArray().then((A) => t != null && t.id ? A.filter(s) : A);
      return m !== void 0 && G(3, [
        "%cstorage%c %cpreferences",
        c.STORAGE,
        c.NONE,
        c.PRESENTATION,
        t
      ]), {
        // @ts-ignore
        data: m !== void 0 ? { prefrences: m, query: t } : null,
        message: m !== void 0 ? "Preferences loaded from storage" : "Preferences load error",
        success: m !== void 0
      };
    });
    /**
     * Update Preference in Storage
     * @param preference IPreference
     * @returns number
     */
    y(this, "setPreference", async (t) => await this.db.table(_.PREFERENCE).put({
      id: t.id,
      value: t.value
    }).then(() => ({
      data: null,
      message: `Preference ${t.id} saved to storage`,
      success: !0
    })).catch((s) => (console.error(
      "%cstorage",
      c.STORAGE,
      ee.PREFERENCE_STORE,
      t,
      s.message
    ), {
      data: null,
      message: `Preference ${t.id} save error: ${s.message}`,
      success: !1
    })));
    this.options = t, this.db = new on(t.app), this.db.version(11).stores({
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
}
function Zn(d) {
  return new Promise((t, s) => {
    d.oncomplete = d.onsuccess = () => t(d.result), d.onabort = d.onerror = () => s(d.error);
  });
}
function Fa(d, t) {
  const s = indexedDB.open(d);
  s.onupgradeneeded = () => s.result.createObjectStore(t);
  const u = Zn(s);
  return (m, A) => u.then((N) => A(N.transaction(t, m).objectStore(t)));
}
let Xn;
function Gr() {
  return Xn || (Xn = Fa("keyval-store", "keyval")), Xn;
}
function ke(d, t = Gr()) {
  return t("readonly", (s) => Zn(s.get(d)));
}
function Ke(d, t, s = Gr()) {
  return s("readwrite", (u) => (u.put(t, d), Zn(u.transaction)));
}
class Lr {
  constructor(t) {
    y(this, "subscribers", []);
    y(this, "options");
    y(this, "getCloud", async (t) => {
      const s = X(t);
      return await ke(s).then((u) => u).catch(() => (console.warn("%capi", c.API, _.CLOUD, t.slide, t.widget), { data: null, message: "Cloud Data error", success: !1 }));
    });
    y(this, "getSeries", async (t) => {
      const s = X(t);
      return await ke(s).then((u) => u).catch(() => (console.warn("%capi", c.API, _.SERIES, t.slide, t.widget), { data: null, message: "Series Data error", success: !1 }));
    });
    y(this, "getMessages", async (t) => {
      const s = X(t);
      return await ke(s).then((u) => u).catch(() => (console.warn("%capi", c.API, _.MESSAGES, t.slide, t.widget), { data: null, message: "Messages Data error", success: !1 }));
    });
    /**
     * Update Cloud
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setCloud", async (t, s) => {
      if (!s.success)
        return 400;
      const u = X(t);
      return delete s.success, delete s.message, await Ke(u, s).then(() => 201).catch((m) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.CLOUD,
        t,
        m.message
      ), 400));
    });
    /**
     * Update Series
     * @param query IQuery
     * @param data
     * @returns bumber
     */
    y(this, "setSeries", async (t, s) => {
      if (!s.success)
        return 400;
      const u = X(t);
      return delete s.success, delete s.message, await Ke(u, s).then(() => 201).catch((m) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.SERIES,
        t,
        m.message
      ), 400));
    });
    /**
     * Update Messages
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setMessages", async (t, s) => {
      if (!s.success)
        return 400;
      const u = X(t);
      return delete s.success, delete s.message, await Ke(u, s).then(() => 201).catch((m) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.MESSAGES,
        t,
        m.message
      ), 400));
    });
    y(this, "cleanMessages", async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((s) => s(0))));
    y(this, "hideMessage", async (t, s) => {
      console.debug(
        `hideMessage ${t} ${s} not implemented for ${this.options.storage}`
      );
    });
    y(this, "getDashboard", async (t) => {
      const s = X(t);
      return await ke(s).then((u) => u).catch((u) => (console.warn("%capi", c.API, _.SLIDE, t.id), {
        data: null,
        message: `Widget ${t.data.id} load error: ${u.message}`,
        success: !1
      }));
    });
    y(this, "getDashboards", async () => ({
      data: null,
      message: "Dashboards get error: ",
      success: !1
    }));
    /**
     * Update Cloud
     * @param query IQuery
     * @returns number
     */
    y(this, "setDashboard", async (t) => {
      const s = X(t), u = {
        id: t.dashboard,
        name: t.name
      };
      return await Ke(s, u).then(() => ({
        data: null,
        message: `Dashboard ${t.data.id} saved to storage`,
        success: !0
      })).catch((m) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.WIDGET,
        t,
        m.message
      ), {
        data: null,
        message: `Slide ${t.data.id} save error: ${m.message}`,
        success: !1
      }));
    });
    y(this, "getWidget", async (t) => {
      const s = X(t);
      return await ke(s).then((u) => u).catch((u) => (console.warn("%capi", c.API, _.SLIDE, t.id), {
        data: null,
        message: `Widget ${t.data.id} load error: ${u.message}`,
        success: !1
      }));
    });
    y(this, "getWidgets", async (t) => (console.warn("%capi", c.API, _.SLIDE, t == null ? void 0 : t.presentation), {
      data: null,
      message: "Widgets load error: ",
      success: !1
    }));
    /**
     * Update Cloud
     * @param query IQuery
     * @returns number
     */
    y(this, "setWidget", async (t) => {
      const s = X(t), u = {
        id: t.widget,
        name: t.name,
        dashboard_id: t.dashboard,
        type: t.type
      };
      return await Ke(s, u).then(() => ({
        data: null,
        message: `Widget ${t.data.id} saved to storage`,
        success: !0
      })).catch((m) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.WIDGET,
        t,
        m.message
      ), {
        data: null,
        message: `Slide ${t.data.id} save error: ${m.message}`,
        success: !1
      }));
    });
    /**
     * Add component subscriber
     * @param query IQuery
     * @returns null
     */
    y(this, "subscribe", (t) => (t.type === _.MESSAGES && (t = At(this.options, t)), this.subscribers.filter(
      (u) => u.widget === t.widget
    ).length > 0 || (console.debug(
      "%cstorage%c %csubscribe",
      c.STORAGE,
      c.NONE,
      c.SUBSCRIBE,
      t.slide,
      t.widget
    ), this.subscribers.push(t)), null));
    /**
     * Get current subscribers
     * @returns IQuery[]
     */
    y(this, "getSubscribers", async () => await new Promise((t) => t(this.subscribers)));
    y(this, "getSlide", async (t) => {
      const s = X(t);
      return await ke(s).then((u) => u).catch((u) => (console.warn("%capi", c.API, _.SLIDE, t.id), {
        data: null,
        message: `Slide ${t.data.id} load error: ${u.message}`,
        success: !1
      }));
    });
    y(this, "getSlides", async (t) => (console.warn("%capi", c.API, _.SLIDE, t.presentation), {
      data: null,
      message: `Slided ${t.presentation} load error: `,
      success: !1
    }));
    /**
     * Update Slide
     * @param query IQuery
     * @returns number
     */
    y(this, "setSlide", async (t) => {
      const s = X(t), u = {
        id: t.data.id,
        title: t.data.title || "Not set",
        json: t.data.json || {},
        html: t.data.html || ""
      };
      return await Ke(s, u).then(() => ({
        data: null,
        message: `Slide ${t.data.id} saved to storage`,
        success: !0
      })).catch((m) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.SLIDE,
        t,
        m.message
      ), {
        data: null,
        message: `Slide ${t.data.id} save error: ${m.message}`,
        success: !1
      }));
    });
    y(this, "getPresentation", async (t) => {
      const s = X(t);
      return await ke(s).then((u) => u).catch((u) => (console.warn("%capi", c.API, _.PRESENTATION, t.id), {
        data: null,
        message: `Slide ${t.data.id} load error: ${u.message}`,
        success: !1
      }));
    });
    y(this, "getPresentations", async () => ({
      data: null,
      message: "Presentations get error: ",
      success: !1
    }));
    /**
     * Update Presentation
     * @param query IQuery
     * @returns number
     */
    y(this, "setPresentation", async (t) => {
      const s = X(t), u = t.data;
      return await Ke(s, u).then(() => ({
        data: null,
        message: `Presentation ${t.data.id} saved to storage`,
        success: !0
      })).catch((m) => (console.error(
        "%cstorage",
        c.STORAGE,
        _.PRESENTATION,
        t,
        m.message
      ), {
        data: null,
        message: `Presentation ${t.data.id} save error: ${m.message}`,
        success: !1
      }));
    });
    y(this, "getPreference", async (t) => await ke(`${_.PREFERENCE}.${t.id}`).then((s) => s).catch((s) => (console.warn("%capi", c.API, _.PREFERENCE, t.id), {
      data: null,
      message: `Preference ${t.id} get error: ${s.message}`,
      success: !1
    })));
    y(this, "getPreferences", async () => await ke(`${_.PREFERENCE}`).then((t) => t).catch((t) => (console.warn("%capi", c.API, _.PREFERENCE), {
      data: null,
      message: `Preferences get error: ${t.message}`,
      success: !1
    })));
    /**
     * Update Preference
     * @param preference IPreference
     * @returns number
     */
    y(this, "setPreference", async (t) => await Ke(`${_.PREFERENCE}.${t.id}`, t.value).then(() => ({
      data: null,
      message: `Preference ${t.id} save error`,
      success: !0
    })).catch((s) => (console.error(
      "%cstorage",
      c.STORAGE,
      _.PREFERENCE,
      t,
      s.message
    ), {
      data: null,
      message: `Preference ${t.id} save error: ${s.message}`,
      success: !1
    })));
    this.options = t;
  }
}
class Fr {
  constructor(t) {
    y(this, "subscribers", []);
    y(this, "options");
    y(this, "getCloud", async (t) => {
      const s = X(t);
      try {
        return localStorage.getObject(s);
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.CLOUD,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    y(this, "getSeries", async (t) => {
      const s = X(t);
      try {
        return localStorage.getObject(s);
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.SERIES,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    y(this, "getMessages", async (t) => {
      const s = X(t);
      try {
        return localStorage.getObject(s);
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.MESSAGES,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    /**
     * Update Cloud
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setCloud", async (t, s) => {
      const u = X(t);
      try {
        return localStorage.setObject(u, s), 201;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, _.CLOUD, t, m), 400;
      }
    });
    /**
     * Update Series
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setSeries", async (t, s) => {
      const u = X(t);
      try {
        return localStorage.setObject(u, s), 201;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, _.SERIES, t, m), 400;
      }
    });
    /**
     * Update Messages
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setMessages", async (t, s) => {
      const u = X(t);
      try {
        return localStorage.setObject(u, s), 200;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, _.MESSAGES, t, m), 400;
      }
    });
    y(this, "cleanMessages", async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((s) => s(0))));
    y(this, "hideMessage", async (t, s) => {
      console.debug(
        `hideMessage ${t} ${s} not implemented for ${this.options.storage}`
      );
    });
    y(this, "getDashboard", async (t) => {
      try {
        return localStorage.getObject(`${_.DASHBOARD}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Dashboard ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getDashboards", async () => ({
      data: null,
      message: "Dashboards get error: ",
      success: !1
    }));
    y(this, "setDashboard", async (t) => {
      const s = `${_.DASHBOARD}.${t.dashboard}`;
      try {
        return localStorage.setObject(s, t), {
          data: null,
          message: `Dashboard ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (u) {
        return console.error("%cstorage", c.STORAGE, _.WIDGET, t, u), {
          data: null,
          message: `Dashboard ${t.data.id} save error: ${u.message}`,
          success: !1
        };
      }
    });
    y(this, "getWidget", async (t) => {
      try {
        return localStorage.getObject(`${_.WIDGET}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Widget ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getWidgets", async () => ({
      data: null,
      message: "Widgets get error: ",
      success: !1
    }));
    y(this, "setWidget", async (t) => {
      const s = `widget.${t.widget}`;
      try {
        return localStorage.setObject(s, t), {
          data: null,
          message: `Widget ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (u) {
        return console.error("%cstorage", c.STORAGE, _.WIDGET, t, u), {
          data: null,
          message: `Widget ${t.data.id} save error: ${u.message}`,
          success: !1
        };
      }
    });
    /**
     * Add component subscriber
     * @param query IQuery
     * @returns null
     */
    y(this, "subscribe", (t) => (t.type === _.MESSAGES && (t = At(this.options, t)), this.subscribers.filter(
      (u) => u.widget === t.widget
    ).length || (console.debug(
      "%cstorage%c %csubscribe",
      c.STORAGE,
      c.NONE,
      c.SUBSCRIBE,
      t.slide,
      t.widget
    ), this.subscribers.push(t)), null));
    /**
     * Get current subscribers
     * @returns IQuery[]
     */
    y(this, "getSubscribers", async () => await new Promise((t) => t(this.subscribers)));
    y(this, "getSlide", async (t) => {
      try {
        return localStorage.getObject(`${_.SLIDE}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Slide ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getSlides", async (t) => {
      try {
        return localStorage.getObject(`${_.SLIDE}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Slide ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "setSlide", async (t) => {
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
      } catch (s) {
        return console.error("%cstorage", c.STORAGE, _.SLIDE, t, s), {
          data: null,
          message: `Slide ${t.data.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPresentation", async (t) => {
      try {
        return localStorage.getObject(`${_.PRESENTATION}.${t.presentation}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.PRESENTATION, t.presentation, s), {
          data: null,
          message: `Presentations ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPresentations", async () => {
      try {
        return localStorage.getObject(`${_.PRESENTATION}.`);
      } catch (t) {
        return console.warn("%capi", c.API, _.PRESENTATION, t), {
          data: null,
          message: `Presentations get error: ${t.message}`,
          success: !1
        };
      }
    });
    y(this, "setPresentation", async (t) => {
      try {
        return localStorage.setObject(`${_.PRESENTATION}.${t.data.id}`, t.data), {
          data: null,
          message: `Presentation ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (s) {
        return console.error("%cstorage", c.STORAGE, _.PRESENTATION, t, s), {
          data: null,
          message: `Presentation ${t.data.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPreference", async (t) => {
      try {
        return localStorage.getObject(`${_.PREFERENCE}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.PREFERENCE, t.id, s), {
          data: null,
          message: `Preference ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPreferences", async () => {
      try {
        return localStorage.getObject(`${_.PREFERENCE}.`);
      } catch (t) {
        return console.warn("%capi", c.API, _.PREFERENCE, t), {
          data: null,
          message: `Preference get error: ${t.message}`,
          success: !1
        };
      }
    });
    y(this, "setPreference", async (t) => {
      try {
        return localStorage.setObject(
          `${_.PREFERENCE}.${t.id}`,
          t.value
        ), {
          data: null,
          message: `Preference ${t.id} saved to storage`,
          success: !0
        };
      } catch (s) {
        return console.error(
          "%cstorage",
          c.STORAGE,
          _.PREFERENCE,
          t,
          s
        ), {
          data: null,
          message: `Preference ${t.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    this.options = t, Storage.prototype.setObject = function(s, u) {
      this.setObject(s, JSON.stringify(u));
    }, Storage.prototype.getObject = function(s) {
      const u = this.getObject(s);
      return u && JSON.parse(u);
    };
  }
}
class Wr {
  constructor(t) {
    y(this, "subscribers", []);
    y(this, "options");
    y(this, "getCloud", async (t) => {
      const s = X(t);
      try {
        return sessionStorage.getObject(s);
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.CLOUD,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    y(this, "getSeries", async (t) => {
      const s = X(t);
      try {
        return sessionStorage.getObject(s);
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.SERIES,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    y(this, "getMessages", async (t) => {
      const s = X(t);
      try {
        return sessionStorage.getObject(s);
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.MESSAGES,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    /**
     * Update Cloud
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setCloud", async (t, s) => {
      const u = X(t);
      try {
        return sessionStorage.setObject(u, s), 201;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, _.CLOUD, t, m), 400;
      }
    });
    /**
     * Update Series
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setSeries", async (t, s) => {
      const u = X(t);
      try {
        return sessionStorage.setObject(u, s), 201;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, _.SERIES, t, m), 400;
      }
    });
    /**
     * Update Messages
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setMessages", async (t, s) => {
      const u = X(t);
      try {
        return sessionStorage.setObject(u, s), 200;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, _.MESSAGES, t, m), 400;
      }
    });
    y(this, "cleanMessages", async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((s) => s(0))));
    y(this, "hideMessage", async (t, s) => {
      console.debug(
        `hideMessage ${t} ${s} not implemented for ${this.options.storage}`
      );
    });
    y(this, "getDashboard", async (t) => {
      try {
        return sessionStorage.getObject(`${_.DASHBOARD}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Dashboard ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getDashboards", async () => ({
      data: null,
      message: "Dashboards get error: ",
      success: !1
    }));
    y(this, "setDashboard", async (t) => {
      const s = `${_.DASHBOARD}.${t.dashboard}`;
      try {
        return sessionStorage.setObject(s, t), {
          data: null,
          message: `Dashboard ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (u) {
        return console.error("%cstorage", c.STORAGE, _.WIDGET, t, u), {
          data: null,
          message: `Dashboard ${t.data.id} save error: ${u.message}`,
          success: !1
        };
      }
    });
    y(this, "getWidget", async (t) => {
      try {
        return sessionStorage.getObject(`${_.WIDGET}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Widget ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getWidgets", async () => ({
      data: null,
      message: "Widgets get error: ",
      success: !1
    }));
    y(this, "setWidget", async (t) => {
      const s = `widget.${t.widget}`;
      try {
        return sessionStorage.setObject(s, t), {
          data: null,
          message: `Widget ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (u) {
        return console.error("%cstorage", c.STORAGE, _.WIDGET, t, u), {
          data: null,
          message: `Slide ${t.data.id} save error: ${u.message}`,
          success: !1
        };
      }
    });
    /**
     * Add component subscriber
     * @param query IQuery
     * @returns null
     */
    y(this, "subscribe", (t) => (t.type === _.MESSAGES && (t = At(this.options, t)), this.subscribers.filter(
      (u) => u.widget === t.widget
    ).length || (console.debug(
      "%cstorage%c %csubscribe",
      c.STORAGE,
      c.NONE,
      c.SUBSCRIBE,
      t.slide,
      t.widget
    ), this.subscribers.push(t)), null));
    /**
     * Get current subscribers
     * @returns IQuery[]
     */
    y(this, "getSubscribers", async () => await new Promise((t) => t(this.subscribers)));
    y(this, "getSlide", async (t) => {
      try {
        return sessionStorage.getObject(`${_.SLIDE}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Slide ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getSlides", async (t) => {
      try {
        return sessionStorage.getObject(`${_.SLIDE}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Slide ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    /**
     * Update Slide
     * @param query IQuery
     * @returns number
     */
    y(this, "setSlide", async (t) => {
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
      } catch (s) {
        return console.error("%cstorage", c.STORAGE, _.SLIDE, t, s), {
          data: null,
          message: `Slide ${t.data.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPresentation", async (t) => {
      try {
        return sessionStorage.getObject(`${_.PRESENTATION}.${t.presentation}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.PRESENTATION, t.presentation, s), {
          data: null,
          message: `Presentation ${t.presentation} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPresentations", async () => {
      try {
        return sessionStorage.getObject(`${_.PRESENTATION}.`);
      } catch (t) {
        return console.warn("%capi", c.API, _.PRESENTATION, t), {
          data: null,
          message: `Presentations get error: ${t.message}`,
          success: !1
        };
      }
    });
    y(this, "setPresentation", async (t) => {
      try {
        return sessionStorage.setObject(`${_.PRESENTATION}.${t.data.id}`, t.data), {
          data: null,
          message: `Presentation ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (s) {
        return console.error("%cstorage", c.STORAGE, _.PRESENTATION, t, s), {
          data: null,
          message: `Presentation ${t.data.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPreference", async (t) => {
      try {
        return sessionStorage.getObject(`${_.PREFERENCE}.${t.id}`);
      } catch (s) {
        return console.warn("%capi", c.API, _.PREFERENCE, t.id, s), {
          data: null,
          message: `Preference ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPreferences", async () => {
      try {
        return sessionStorage.getObject(`${_.PREFERENCE}`);
      } catch (t) {
        return console.warn("%capi", c.API, _.PREFERENCE, t), {
          data: null,
          message: `Preferences get error: ${t.message}`,
          success: !1
        };
      }
    });
    y(this, "setPreference", async (t) => {
      try {
        return sessionStorage.setObject(
          `${_.PREFERENCE}.${t.id}`,
          t.value
        ), {
          data: null,
          message: `Preference ${t.id} saved to storage`,
          success: !0
        };
      } catch (s) {
        return console.error(
          "%cstorage",
          c.STORAGE,
          _.PREFERENCE,
          t,
          s
        ), {
          data: null,
          message: `Preference ${t.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    this.options = t, Storage.prototype.setObject = function(s, u) {
      this.setItem(s, JSON.stringify(u));
    }, Storage.prototype.getObject = function(s) {
      const u = this.getItem(s);
      return u && JSON.parse(u);
    };
  }
}
class Ur {
  constructor(t) {
    y(this, "subscribers", []);
    y(this, "options");
    y(this, "getCloud", async (t) => {
      const s = X(t);
      try {
        return window.BuzzCasting.WidgetData[s];
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.CLOUD,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Cloud Data error", success: !1 };
      }
    });
    y(this, "getSeries", async (t) => {
      const s = X(t);
      try {
        return window.BuzzCasting.WidgetData[s];
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.SERIES,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Series Data error", success: !1 };
      }
    });
    y(this, "getMessages", async (t) => {
      const s = X(t);
      try {
        return window.BuzzCasting.WidgetData[s];
      } catch (u) {
        return console.warn(
          "%capi",
          c.API,
          _.MESSAGES,
          t.slide,
          t.widget,
          u
        ), { data: null, message: "Messages Data error", success: !1 };
      }
    });
    /**
     * Update Cloud
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setCloud", async (t, s) => {
      const u = X(t);
      try {
        return window.BuzzCasting.WidgetData[u] = s, 201;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, "set", t, m), 400;
      }
    });
    /**
     * Update Series
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setSeries", async (t, s) => {
      const u = X(t);
      try {
        return window.BuzzCasting.WidgetData[u] = s, 201;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, "set", t, m), 400;
      }
    });
    /**
     * Update Messages
     * @param query IQuery
     * @param data
     * @returns number
     */
    y(this, "setMessages", async (t, s) => {
      const u = X(t);
      try {
        return window.BuzzCasting.WidgetData[u] = s, 201;
      } catch (m) {
        return console.error("%cstorage", c.STORAGE, "set", t, m), 400;
      }
    });
    y(this, "cleanMessages", async (t) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((s) => s(0))));
    y(this, "hideMessage", async (t, s) => {
      console.debug(
        `hideMessage ${t} ${s} not implemented for ${this.options.storage}`
      );
    });
    y(this, "getDashboard", async (t) => {
      try {
        return window.BuzzCasting.DashboardData[t.id];
      } catch (s) {
        return console.warn("%capi", c.API, _.DASHBOARD, t.id, s), {
          data: null,
          message: `Dashboard ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getDashboards", async () => ({
      data: null,
      message: "Dashboards get error: ",
      success: !1
    }));
    y(this, "setDashboard", async (t) => {
      const s = `widget.${t.widget}`;
      try {
        return window.BuzzCasting.DashboardData[s] = t, {
          data: null,
          message: `Dashboard ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (u) {
        return console.error("%cstorage", c.STORAGE, _.DASHBOARD, t, u), {
          data: null,
          message: `Dashboard ${t.data.id} save error: ${u.message}`,
          success: !1
        };
      }
    });
    y(this, "getWidget", async (t) => {
      try {
        return window.BuzzCasting.WidgetData[t.id];
      } catch (s) {
        return console.warn("%capi", c.API, _.WIDGET, t.id, s), {
          data: null,
          message: `Widget ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getWidgets", async () => ({
      data: null,
      message: "Widgets get error: ",
      success: !1
    }));
    y(this, "setWidget", async (t) => {
      const s = `widget.${t.widget}`;
      try {
        return window.BuzzCasting.WidgetData[s] = t, {
          data: null,
          message: `Widget ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (u) {
        return console.error("%cstorage", c.STORAGE, _.WIDGET, t, u), {
          data: null,
          message: `Slide ${t.data.id} save error: ${u.message}`,
          success: !1
        };
      }
    });
    /**
     * Add component subscriber
     * @param query IQuery
     * @returns null
     */
    y(this, "subscribe", (t) => (t.type === _.MESSAGES && (t = At(this.options, t)), this.subscribers.filter(
      (u) => u.widget === t.widget
    ).length || (console.debug(
      "%cstorage%c %csubscribe",
      c.STORAGE,
      c.NONE,
      c.SUBSCRIBE,
      t.slide,
      t.widget
    ), this.subscribers.push(t)), null));
    /**
     * Get current subscribers
     * @returns IQuery[]
     */
    y(this, "getSubscribers", async () => await new Promise((t) => t(this.subscribers)));
    y(this, "getSlide", async (t) => {
      try {
        return window.BuzzCasting.SlideData[t.id];
      } catch (s) {
        return console.warn("%capi", c.API, _.SLIDE, t.id, s), {
          data: null,
          message: `Slide ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getSlides", async (t) => {
      try {
        return window.BuzzCasting.SlideData.filter((s) => s.presentation_id === t.presentation);
      } catch (s) {
        return console.warn("%capi", c.API, _.PRESENTATION, t.presentation_id, s), {
          data: null,
          message: `Slides for presentation ${t.presentation} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "setSlide", async (t) => {
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
      } catch (s) {
        return console.error("%cstorage", c.STORAGE, _.SLIDE, t, s), {
          data: null,
          message: `Slide ${t.data.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPresentation", async (t) => {
      try {
        const s = t.presentation || "none";
        return window.BuzzCasting.PresentationData[s];
      } catch (s) {
        return console.warn("%capi", c.API, _.PRESENTATION, t.presentation, s), {
          data: null,
          message: `Presentation ${t.presentation} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPresentations", async () => {
      try {
        return window.BuzzCasting.PresentationData;
      } catch (t) {
        return console.warn("%capi", c.API, _.PRESENTATION, t), {
          data: null,
          message: `Presentations get error: ${t.message}`,
          success: !1
        };
      }
    });
    y(this, "setPresentation", async (t) => {
      try {
        return window.BuzzCasting.PresentationData[t.id] = t.data, {
          data: null,
          message: `Presentation ${t.data.id} saved to storage`,
          success: !0
        };
      } catch (s) {
        return console.error("%cstorage", c.STORAGE, _.PRESENTATION, t, s), {
          data: null,
          message: `Presentation ${t.data.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPreference", async (t) => {
      try {
        return window.BuzzCasting.Preferences[t.id];
      } catch (s) {
        return console.warn("%capi", c.API, _.PREFERENCE, t.id, s), {
          data: null,
          message: `Preference ${t.id} load error: ${s.message}`,
          success: !1
        };
      }
    });
    y(this, "getPreferences", async () => {
      try {
        return window.BuzzCasting.Preferences;
      } catch (t) {
        return console.warn("%capi", c.API, _.PREFERENCE, t), {
          data: null,
          message: `Preferences get error: ${t.message}`,
          success: !1
        };
      }
    });
    y(this, "setPreference", async (t) => {
      try {
        return window.BuzzCasting.Preferences[t.id] = t.value, {
          data: null,
          message: `Preference ${t.id} saved to storage`,
          success: !0
        };
      } catch (s) {
        return console.error(
          "%cstorage",
          c.STORAGE,
          _.PREFERENCE,
          t,
          s
        ), {
          data: null,
          message: `Preference ${t.id} save error: ${s.message}`,
          success: !1
        };
      }
    });
    this.options = t, window.BuzzCasting.WidgetData = /* @__PURE__ */ new Set();
  }
}
class cs {
  //private temp: {[x:string]:any} = []
  constructor(t) {
    y(this, "sm");
    y(this, "api");
    y(this, "bc");
    y(this, "options");
    y(this, "subscribers", []);
    y(this, "update", async (t) => {
      if (this.sm === null || Object.keys(this.subscribers).length === 0)
        return;
      const s = [];
      Object.values(this.subscribers).forEach((u) => {
        s.push(this.api.get(u));
      }), s.forEach(async (u) => {
        await u.then(
          async (m) => await this.processResponse(m)
        );
      });
    });
    y(this, "processResponse", async (t) => {
      var m, A, N, F, ne, oe;
      let s, u = 400;
      if (t.success === !0) {
        const V = this.subscribers[t.query.widget];
        let J = "";
        switch (t.query.type) {
          case _.MESSAGES:
            let he;
            he = t.data.messages.filter(
              (pe) => pe.id !== null
            ), t.data.messages = he, J = Qn(t.data.messages), V != null && V.hash && V.hash === J ? (G(3, [
              "%cload%c %cmessages%c %cno updates",
              c.OK,
              c.NONE,
              c.MESSAGES,
              c.NONE,
              c.NO_UPDATES,
              t.query.widget
            ]), G(4, ["%cmessages", c.MESSAGES, t]), u = 204) : (s = t, V.hash = J, u = await ((m = this.sm) == null ? void 0 : m.setMessages(t.query, t).then(async (pe) => (pe = 201, this.broadcastUpdate(pe, t)))));
            break;
          case _.CLOUD:
            J = Qn(t.data.cloud), V != null && V.hash && V.hash === J ? (G(3, [
              "%cload%c %ccloud%c %cno updates",
              c.OK,
              c.NONE,
              c.CLOUD,
              c.NONE,
              c.NO_UPDATES,
              t.query.widget
            ]), G(4, ["%ccloud", c.CLOUD, t.query]), u = 204) : (V.hash = J, s = {
              data: {
                cloud: t.data
              },
              message: t.message,
              success: t.success,
              query: t.query
            }, u = await ((A = this.sm) == null ? void 0 : A.setCloud(t.query, s.data).then((pe) => this.broadcastUpdate(pe, t))));
            break;
          case _.SERIES:
            J = Qn(t.data.series), V != null && V.hash && V.hash === J ? (G(3, [
              "%cload%c %cseries%c %cno updates",
              c.OK,
              c.NONE,
              c.SERIES,
              c.NONE,
              c.NO_UPDATES,
              t.query.widget
            ]), G(4, ["%cseries", c.SERIES, t]), u = 204) : (V.hash = J, s = {
              data: t.data,
              message: t.message,
              success: t.success,
              query: t.query
            }, u = await ((N = this.sm) == null ? void 0 : N.setSeries(t.query, t.data).then((pe) => this.broadcastUpdate(pe, t))));
            break;
          default:
            G(4, [
              "%cload%c %cunknown%c %cno updates",
              c.KO,
              c.NONE,
              c.STORAGE,
              c.NONE,
              c.NO_UPDATES,
              `Bad request: type ${t.query.type} unknown`
            ]), u = 204;
        }
      } else
        switch (G(2, [
          "%cload%c %cunknown%c %cno updates",
          c.KO,
          c.NONE,
          c.STORAGE,
          c.NONE,
          c.NO_UPDATES,
          t.status
        ]), t.query.type) {
          case _.MESSAGES:
            return await ((F = this.sm) == null ? void 0 : F.getMessages(t.query).then((V) => {
              this.broadcastUpdate(201, V);
            }));
          case _.CLOUD:
            return await ((ne = this.sm) == null ? void 0 : ne.getCloud(t.query).then((V) => {
              this.broadcastUpdate(201, V);
            }));
          case _.SERIES:
            return await ((oe = this.sm) == null ? void 0 : oe.getSeries(t.query).then((V) => {
              this.broadcastUpdate(201, V);
            }));
        }
      return u;
    });
    y(this, "broadcastUpdate", (t, s) => {
      var u, m, A;
      switch (t) {
        case 201:
          G(3, [
            `%cupdate%c %cwidget%c %c${(u = s.query) == null ? void 0 : u.type}`,
            c.BROADCAST,
            c.NONE,
            c.WIDGET,
            c.NONE,
            $r(s.query),
            //@ts-ignore
            `${((m = s.data) == null ? void 0 : m.title) ?? ""} ${s.query.widget}`
          ]), G(4, [
            "%cevent",
            c.BROADCAST,
            //@ts-ignore
            s
          ]), this.bc.postMessage({
            event: ee.WIDGET_UPDATE,
            data: s.query
          });
          break;
        case 204:
          break;
        default:
          G(2, [
            `%cupdate%c %cwidget%c %c${(A = s.query) == null ? void 0 : A.type}`,
            c.KO,
            c.NONE,
            c.WIDGET,
            c.NONE,
            $r(s.query),
            "Fetch error",
            s.query
          ]);
          break;
      }
      return t;
    });
    y(this, "hide", (t) => {
      this.api.hideMessage(t);
    });
    y(this, "actions", async (t) => {
      switch (t.data.event) {
        case ee.SUBSCRIBE:
          this.addSubscriber(t.data.data);
          break;
        case ee.UPDATE:
          G(3, [
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
    });
    y(this, "cleanMessages", async () => {
      var u, m, A;
      if ((u = this.options) != null && u.suspended) {
        G(2, [
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
      const t = ((m = this.options) == null ? void 0 : m.retention) || 86400 * 4, s = await ((A = this.sm) == null ? void 0 : A.cleanMessages(
        t
      ));
      G(3, [
        "%cclean%c %cstorage%c %cmessages",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        `${s} messages deleted`
      ]);
    });
    y(this, "hideMessage", async (t) => {
      var u;
      const s = await ((u = this.sm) == null ? void 0 : u.hideMessage(t.id, 0));
      return G(3, [
        "%chide%c %cstorage%c %cmessages",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.MESSAGES,
        `${s} messages hidden`
      ]), await this.api.hideMessage(t);
    });
    y(this, "hideLabels", async (t) => await this.api.hideLabels(t));
    y(this, "getSubscribers", async () => await new Promise((t) => t(this.subscribers)));
    y(this, "getSlide", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getSlide(t));
    });
    y(this, "getSlides", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getSlides(t));
    });
    y(this, "setSlide", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.setSlide(t));
    });
    y(this, "loadSlide", async (t) => await this.api.loadSlide(t));
    y(this, "storeSlide", async (t) => await this.api.storeSlide(t));
    y(this, "getPresentation", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getPresentation(t));
    });
    y(this, "getPresentations", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getPresentations(t));
    });
    y(this, "setPresentation", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.setPresentation(t));
    });
    y(this, "loadPresentation", async (t) => await this.api.loadPresentation(t));
    y(this, "storePresentation", async (t) => await this.api.storePresentation(t));
    y(this, "getPreference", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getPreference(t));
    });
    y(this, "getPreferences", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getPreferences(t));
    });
    y(this, "setPreference", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.setPreference(t));
    });
    y(this, "loadPreference", async (t) => await this.api.loadPreference(t));
    y(this, "storePreference", async (t) => await this.api.storePreference(t));
    /*public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
    	return await this.api.loadDashboardWidgets(query);
    };*/
    y(this, "getWidget", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getWidget(t));
    });
    y(this, "getWidgets", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getWidgets(t));
    });
    y(this, "setWidget", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.setWidget(t));
    });
    y(this, "loadDashboards", async (t) => await this.api.loadDashboards(t));
    y(this, "getDashboard", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getDashboard(t));
    });
    y(this, "getDashboards", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.getDashboards());
    });
    y(this, "setDashboard", async (t) => {
      var s;
      return await ((s = this.sm) == null ? void 0 : s.setDashboard(t));
    });
    G(3, [
      "%cpresentation",
      c.PRESENTATION,
      t.presentation,
      ee.VERSION,
      Ra
    ]), this.options = t, this.sm = null;
    const s = t.presentation;
    switch (this.bc = new BroadcastChannel(s), G(3, [
      "%cchannel%c %capi",
      c.BROADCAST,
      c.NONE,
      c.API,
      s
    ]), this.bc.onmessage = (u) => {
      this.actions(u);
    }, this.bc.postMessage({ event: ee.STORAGE_INIT, data: {} }), this.api = new ja(t), t.storage) {
      case Ee.DEXIE:
        this.sm = new Br(t);
        break;
      case Ee.LOCAL:
        this.sm = new Wr(t);
        break;
      case Ee.SESSION:
        this.sm = new Fr(t);
        break;
      case Ee.KEYVAL:
        this.sm = new Lr(t);
        break;
      case Ee.WINDOW:
        this.sm = new Ur(t);
        break;
    }
  }
  addSubscriber(t) {
    this.subscribers[t.widget] = t;
  }
}
class Wa {
  constructor(t) {
    y(this, "sm");
    /**
     * Retieve Cloud Data
     * @param query Widgets parameters, type "cloud"
     * @returns IResponse
     */
    y(this, "getCloud", async (t) => {
      var s;
      return t.type !== _.CLOUD ? (console.warn(
        "%capp%c %get",
        c.APP,
        c.NONE,
        c.GET_DATA,
        t.widget,
        "wrong method call for getMessages, type used is",
        t.type
      ), {
        data: null,
        message: `'wrong method call for getMessages, type used is ${t.type}`,
        success: !1
      }) : await ((s = this.sm) == null ? void 0 : s.getCloud(t));
    });
    /**
     * Retieve Message Data
     * @param query Widgets parameters, type "messages"
     * @returns IResponse
     */
    y(this, "getMessages", async (t) => {
      var s;
      return t.type !== _.MESSAGES ? (console.warn(
        "%capp%c %cmessages%c %cget",
        c.APP,
        c.NONE,
        c.MESSAGES,
        c.NONE,
        c.GET_DATA,
        t.widget,
        "wrong method call for getMessages, type used is",
        t.type
      ), {
        data: null,
        message: `'wrong method call for getMessages, type used is ${t.type}`,
        success: !1
      }) : await ((s = this.sm) == null ? void 0 : s.getMessages(t));
    });
    /**
     * Retrieve Series Data
     * @param query Widgets parameters, type "series"
     * @returns IResponse
     */
    y(this, "getSeries", async (t) => {
      var s;
      return t.type !== _.SERIES ? (console.warn(
        "%capp%c %get",
        c.APP,
        c.NONE,
        c.GET_DATA,
        t.widget,
        "wrong method call for getMessages, type used is",
        t.type
      ), {
        data: null,
        message: `'wrong method call for getSeries, type used is ${t.type}`,
        success: !1
      }) : await ((s = this.sm) == null ? void 0 : s.getSeries(t));
    });
    switch (this.sm = null, t.storage) {
      case Ee.DEXIE:
        this.sm = new Br(t);
        break;
      case Ee.LOCAL:
        this.sm = new Wr(t);
        break;
      case Ee.SESSION:
        this.sm = new Fr(t);
        break;
      case Ee.KEYVAL:
        this.sm = new Lr(t);
        break;
      case Ee.WINDOW:
        this.sm = new Ur(t);
        break;
    }
  }
}
class us {
  /**
   * Main container for managing widgets and data updates
   *
   * @param element widget web component
   * @param callbacks functions in the widget that will receive the update
   * @param selector container for the element - by default buzzcasting-app (optional)
   */
  constructor(t, s, u) {
    y(this, "storageReader");
    y(this, "broadcastChannel");
    y(this, "element");
    y(this, "query");
    y(this, "callbacks");
    /**
     * Generic call to any query type
     *
     * @returns IResponse
     */
    y(this, "getData", async () => {
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
    });
    /**
     * Get Widget Coud Data
     *
     * @returns IResponse
     */
    y(this, "getCloud", async () => this.query.type !== _.CLOUD ? (G(3, [
      "%cget%c %cstorage%c %cwidget",
      c.KO,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.WIDGET,
      this.query.widget,
      "Wrong method call for getCloud, expected type is",
      this.query.type
    ]), G(4, [
      "%ccloud",
      c.CLOUD,
      this.query
    ]), {
      data: null,
      message: `wrong method call for getCloud, expected type is '${this.query.type}'`,
      success: !1,
      query: this.query
    }) : await this.storageReader.getCloud(this.query));
    /**
     * Get Widget Messages Data
     *
     * @returns IResponse
     */
    y(this, "getMessages", async () => this.query.type !== _.MESSAGES ? (G(3, [
      "%cget%c %cstorage%c %cwidget",
      c.KO,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.WIDGET,
      this.query.widget,
      "Wrong method call for getMessages, expected type is",
      this.query.type
    ]), G(4, [
      "%cmessages",
      c.MESSAGES,
      this.query
    ]), {
      data: null,
      message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
      success: !1
    }) : await this.storageReader.getMessages(this.query));
    /**
     * Get Widget Series Data
     *
     * @returns IResponse
     */
    y(this, "getSeries", async () => this.query.type !== _.SERIES ? (G(3, [
      "%cget%c %cstorage%c %cwidget",
      c.KO,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.WIDGET,
      this.query.widget,
      "Wrong method call for getSeries, expected type is",
      this.query.type
    ]), G(4, [
      "%cseries",
      this.query
    ]), {
      data: null,
      message: `wrong method call for getSeries, expected type is '${this.query.type}'`,
      success: !1,
      query: this.query
    }) : await this.storageReader.getSeries(this.query));
    /**
     * Emit a show modal event using the element's attributes
     * the component is the web component name to show
     *
     * @param modal IModal
     */
    y(this, "showModal", (t) => {
      G(3, [
        "%cwidget",
        c.WIDGET,
        ee.SHOW_MODAL,
        t.showComponent,
        // @ts-ignore
        xa(this.element.attributes)
        //props['data-widget'],
      ]);
      const s = new CustomEvent(ee.SHOW_MODAL, {
        detail: {
          component: t.showComponent,
          props: t.props,
          //mergedProps,
          timeout: t == null ? void 0 : t.timeout
        },
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
      window.dispatchEvent(s);
    });
    var N;
    this.element = t, this.callbacks = s, u = typeof u < "u" ? u : "buzzcasting-app";
    let m;
    m = { ...t.dataset }, delete m.hmr, m.presentation = ((N = t.closest(u)) == null ? void 0 : N.getAttribute("presentation")) ?? `${u} not found`, this.query = m, ka(t);
    const A = window.BuzzCasting.getOptions();
    this.storageReader = new Wa(A), this.broadcastChannel = new BroadcastChannel(m.presentation), this.broadcastListener();
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
    this.broadcastChannel.onmessage = async (s) => {
      const u = s.data.data;
      switch (s.data.event) {
        case ee.WIDGET_UPDATE:
          try {
            if (u.dashboard === t.dashboard && u.widget === t.widget) {
              const m = await this.getData();
              m != null && m.success && (G(4, [
                "%cset%c %cbroadcast%c %cwidget",
                c.OK,
                c.NONE,
                c.BROADCAST,
                c.NONE,
                c.WIDGET,
                this.query
              ]), this.callbacks.forEach(async (A) => {
                A(m);
              }));
            }
          } catch {
            G(4, [ee.WIDGET_UPDATE, u]);
          }
          break;
        case ee.APP_READY:
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
    G(3, [
      "%csubscribe%c %cwidget",
      c.SUBSCRIBE,
      c.NONE,
      c.WIDGET,
      this.query.presentation,
      this.query.widget
    ]), G(4, ["%cwidget", c.WIDGET, this.query]), this.broadcastChannel.postMessage({
      event: ee.SUBSCRIBE,
      data: this.query
    });
  }
  destroy() {
    this.broadcastChannel.close();
  }
}
export {
  _ as API,
  cs as BuzzcastingStorageManager,
  Wa as BuzzcastingStorageReader,
  c as CSS,
  ee as EVENTS,
  an as MODERATION,
  Ee as STORAGE,
  us as Widget,
  za as anonymize,
  Ha as attachedMedia,
  xa as attrs,
  Qa as brandLogo,
  Ja as camelCase,
  Xa as camelize,
  Za as capitalizeFirstLetter,
  ka as clearContents,
  Ia as deepMerge,
  Ya as filterAttributes,
  Va as formatContent,
  Qn as hashSum,
  qa as intToString,
  es as numberFormatter,
  ts as randomValue,
  ns as rtl,
  rs as sanitize,
  as as showModal,
  ss as shuffleMessages,
  is as stringGen,
  os as upDownColor,
  $a as widgetParams
};
