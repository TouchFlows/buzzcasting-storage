var O = /* @__PURE__ */ ((g) => (g.MESSAGES = "messages", g.CLOUD = "cloud", g.SERIES = "series", g.TOPICS = "topics", g.WIDGET = "widget", g.WIDGETS = "widgets", g.DASHBOARD = "dashboard", g.DASHBOARDS = "dashboards", g.SLIDE = "slide", g.SLIDES = "slides", g.PRESENTATION = "presentation", g.PRESENTATIONS = "presentations", g.PREFERENCE = "preference", g.PREFERENCES = "preferences", g))(O || {}), c = /* @__PURE__ */ ((g) => (g.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", g.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", g.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", g.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", g.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", g.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", g.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", g.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", g.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", g.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", g.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", g.NONE = "color:transparent;background-color:transparent;", g.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", g.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", g.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", g.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", g.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", g.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", g.WIDGET = "color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", g.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", g))(c || {}), J = /* @__PURE__ */ ((g) => (g.ADD_SLIDE = "addSlide", g.APP_READY = "appReady", g.API_UPDATE = "apiUpdate", g.WS_API_REQUEST = "wsApiRequest", g.WS_API_RESPONSE = "wsApiResponse", g.WS_API_UPDATE = "wsApiRUpdate", g.APPROVE_MESSAGE = "approveMessage", g.CHANNEL = "channel", g.CLEAN_MESSAGES = "cleanMessages", g.CLOSE_MODAL = "closeModal", g.CLOSE_BUILDER_MODAL = "closeBuilderModal", g.DASHBOARD_LOAD = "loadDashboard", g.DASHBOARD_STORE = "storeDashboard", g.ERROR = "error", g.HIDE_MESSAGE = "hideMessage", g.HIDE_LABELS = "hideLabels", g.MAUPPUT_UPDATE = "layoutUpdate", g.PREV_SLIDE = "prevSlide", g.RELOAD_PRESENTATION = "reloadPresentation", g.SHOW_MODAL = "showModal", g.STAR_MESSAGE = "starMessage", g.GOTO_SLIDE = "gotoSlide", g.NEXT_SLIDE = "nextSlide", g.PREFERENCE_LOAD = "loadPreference", g.PREFERENCE_STORE = "storePreference", g.PAUSE_PRESENTATION = "pausePresentation", g.PRESENTATION_READY = "presentationReady", g.PRESENTATION_LOAD = "loadPresentation", g.PRESENTATION_STORE = "storePresentation", g.SHOW_BUILDER_MODAL = "showBuilderModal", g.SLIDE_DID_LOAD = "slideDidLoad", g.SLIDE_GOTO = "slideGoto", g.SLIDE_READY = "slideReady", g.SLIDE_LOAD = "loadSlide", g.SLIDE_STORE = "storeSlide", g.SLIDE_TRANSITIONER = "slideTransitioner", g.START_TRANSITIONER = "startTransitioner", g.STORAGE_INIT = "storageInit", g.SUBSCRIBE = "subscribe", g.SUSPEND_ACCOUNT = "suspendAccount", g.SWITCH_PRESENTATION = "switchPresentation", g.REMOVE_CLOUD = "removeCloud", g.UPDATE = "update", g.VERSION = "version", g.WIDGETS_CLEAR = "widgetsClear", g.WIDGET_LOAD = "widgetLoad", g.WIDGET_STORE = "widgetStore", g.WIDGET_UPDATE = "widgetUpdate", g))(J || {}), Zt = /* @__PURE__ */ ((g) => (g.APPROVED = "approved", g.BEFORE = "before", g.DELAYED = "delayed", g.NONE = "none", g.REALTIME = "realtime", g))(Zt || {}), pe = /* @__PURE__ */ ((g) => (g.KEYVAL = "keyval", g.LOCAL = "local", g.SESSION = "session", g.DEXIE = "dexie", g.WINDOW = "window", g))(pe || {});
function Pa(g) {
  const n = {};
  for (let i = 0; i < g.length; i++) {
    const l = g.item(i);
    l != null && l.name && (n[l.name] = l.value);
  }
  return n;
}
function Da(g) {
  const n = document.createRange();
  n.selectNodeContents(g), n.deleteContents();
}
function Ra(g, n) {
  for (; g.length < n; )
    g = `0${g}`;
  return g;
}
function Se(g, n) {
  let i, l, E;
  if (n.length === 0)
    return g;
  for (i = 0, E = n.length; i < E; i++)
    l = n.charCodeAt(i), g = (g << 5) - g + l, g |= 0;
  return g < 0 ? g * -2 : g;
}
function Na(g, n, i) {
  return Object.keys(n).sort().reduce(l, g);
  function l(E, _) {
    return jr(E, n[_], _, i);
  }
}
function jr(g, n, i, l) {
  const E = Se(Se(Se(g, i), Ta(n)), typeof n);
  if (n === null)
    return Se(E, "null");
  if (n === void 0)
    return Se(E, "undefined");
  if (typeof n == "object" || typeof n == "function") {
    if (l.includes(n))
      return Se(E, `[Circular]${i}`);
    l.push(n);
    const _ = Na(E, n, l);
    if (!("valueOf" in n) || typeof n.valueOf != "function")
      return _;
    try {
      return Se(_, String(n.valueOf()));
    } catch (I) {
      return Se(_, `[valueOf exception]${I.stack || I.message}`);
    }
  }
  return Se(E, n.toString());
}
function Ta(g) {
  return Object.prototype.toString.call(g);
}
function Fn(g) {
  return Ra(jr(0, g, "", []).toString(16), 8);
}
const at = (g) => {
  let n = {}, i = g.split(",");
  for (let l = 0; l < i.length; l++) n[i[l]] = !0;
  return n;
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
Array.prototype.last = function() {
  return this[this.length - 1];
};
const B = (g = 0, n) => {
  switch (!0) {
    case g > 3:
      console.debug(...n);
      break;
    case g > 2:
      console.info(...n);
      break;
    case g > 1:
      console.warn(...n);
      break;
    case g > 0:
      console.error(...n);
      break;
  }
}, kr = (g) => {
  switch (g?.type) {
    case O.MESSAGES:
      return c.MESSAGES;
    case O.SERIES:
      return c.SERIES;
    case O.CLOUD:
      return c.CLOUD;
    default:
      return c.NO_UPDATES;
  }
};
function Y(g) {
  let n = `${g.type}.${g.topics}`;
  return g.order && (n += `.${g.order}`), g.period && (n += `.${g.period}`), n;
}
function Ia(g) {
  var n;
  if (g.widget === void 0) {
    const i = (n = g.topics) == null ? void 0 : n.split("-");
    i && i.length > 1 ? (g.dashboard = i ? i[0] : "", g.widget = i ? i[1] : "") : (g.widget = g.topics, g.dashboard = g.slide);
  }
  return g;
}
function wt(g, n) {
  var i;
  let l, E, _, I, G;
  switch (g.moderation) {
    case Zt.BEFORE:
      l = /* @__PURE__ */ new Date(), E = (i = g.beforeTime) == null ? void 0 : i.split(":"), _ = Number.parseInt(E ? E[0] : "00"), I = Number.parseInt(E ? E[1] : "00"), G = Number.parseInt(E ? E[2] : "00"), n.before = l.setHours(_, I, G, 0) / 1e3, n.period || (n.period = l.getDay() === 1 ? 72 : 24);
      break;
    case Zt.DELAYED:
      g.delay && g.delay > 0 && (n.delay = `${g.delay}`);
      break;
    case Zt.APPROVED:
      n.approved = "1";
      break;
    default:
      g.period !== 0 && (n.period = g.period);
  }
  return n;
}
const xa = "3.8.0";
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
    const { version: i } = this.options, l = this.headers(), E = Object.assign({}, n);
    delete E.type, delete E.hash, delete E.order, E.topics = `${E.dashboard}-${E.widget}`, delete E.presentation;
    const _ = Object.keys(E).length > 0 ? `?${new URLSearchParams(E).toString()}` : "";
    let I = "";
    switch (n.type) {
      case O.MESSAGES:
        I = c.MESSAGES;
        break;
      case O.SERIES:
        I = c.SERIES;
        break;
      case O.CLOUD:
        I = c.CLOUD;
        break;
    }
    return B(3, [
      `%cfetch%c %capi%c %c${n.type}`,
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      I,
      n.widget
    ]), B(4, [n.type, E]), await fetch(
      [this.url, "api", i, n.type].join("/") + _,
      { ...l, method: "get" }
    ).then(async (G) => {
      if (!G.ok)
        throw new Error(`${G.status}`);
      return G;
    }).then((G) => G.json()).then((G) => (G.query = n, G)).catch((G) => ({ success: !1, message: `${G}`, data: null, query: n }));
  }
  async hideMessage(n) {
    const { version: i } = this.options, l = this.headers(), E = "?action=visible";
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_MESSAGE,
      n.widget,
      n.id
    ), await fetch(
      [this.url, "api", i, "messages", n.id].join("/") + E,
      { ...l, method: "put" }
    ).then((_) => {
      if (!_.ok)
        throw new Error(_.statusText);
      return _;
    }).then((_) => _.json()).catch((_) => ({ succes: !1, message: _, data: [] }));
  }
  async hideLabels(n) {
    const { version: i } = this.options, l = this.formHeaders(), E = new URLSearchParams(), _ = n.labels || [];
    for (const [I, G] of _.entries())
      E.append(`custom_filters[${I}]`, G);
    return console.info(
      "%capi%c %cput",
      c.API,
      c.NONE,
      c.GET_DATA,
      J.HIDE_LABELS,
      n.widget,
      _
    ), await fetch(
      [this.url, "api", i, n.type, n.widget].join("/"),
      { ...l, body: E, method: "put" }
    ).then((I) => {
      if (!I.ok)
        throw new Error(I.statusText);
      return I;
    }).then((I) => I.json()).catch((I) => ({ succes: !1, message: I, data: [] }));
  }
  async loadSlide(n) {
    const { version: i } = this.options, l = this.headers(), E = Object.assign({}, n);
    return delete E.type, delete E.hash, B(3, ["%capi%c %cloadSlide", c.API, c.NONE, c.SLIDE, n.id]), await fetch(
      [this.url, "api", i, "slides", n.id].join("/"),
      { ...l, method: "get" }
    ).then(async (_) => {
      if (!_.ok)
        throw new Error(`${_.status}`);
      return _;
    }).then((_) => _.json()).then((_) => (_.query = n, _)).catch((_) => ({ success: !1, message: `${_}`, data: null }));
  }
  /**
   * Store slide definition
   * ex: window.BuzzCasting.storage.storeSlide({id:'1',type:'slide', data: {json: {a:'b'},html:'<div/>',css:'abc'}, update: true}) // update: stockage sur le serveur
   *
   * @param query
   * @returns
   */
  async storeSlide(n) {
    const { version: i } = this.options, l = this.formHeaders();
    delete n.update, delete n.type;
    const E = JSON.stringify(n);
    return B(3, [
      "%cput%c %capi%c %cslide",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.SLIDE,
      J.SLIDE_STORE,
      n.id
    ]), await fetch(
      [this.url, "api", i, "slides", n.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((_) => {
      if (!_.ok)
        throw new Error(_.statusText);
      return _;
    }).then((_) => _.json()).catch((_) => ({ succes: !1, message: _, data: [] }));
  }
  async loadPresentation(n) {
    const { version: i } = this.options, l = this.headers();
    return delete n.update, B(3, [
      "%cload%c %capi%c %cloadPresentation",
      c.OK,
      c.NONE,
      c.API,
      c.NONE,
      c.PRESENTATION,
      n.id
    ]), await fetch(
      [this.url, "api", i, O.PRESENTATIONS, n.id].join("/"),
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
    const { version: i } = this.options, l = this.formHeaders();
    delete n.update;
    const E = JSON.stringify(n);
    return B(2, ["%capi%c %cput", c.API, c.NONE, c.PRESENTATION, n.name]), await fetch(
      [this.url, "api", i, O.PRESENTATIONS, n.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((_) => {
      if (!_.ok)
        throw new Error(_.statusText);
      return _;
    }).then((_) => _.json()).catch((_) => ({ succes: !1, message: _, data: [] }));
  }
  async loadPreference(n) {
    const { version: i } = this.options, l = this.headers();
    return B(3, [
      "%capi%c %cloadPreference",
      c.API,
      c.NONE,
      c.APP,
      n.id
    ]), await fetch(
      [this.url, "api", i, O.PREFERENCES, n.id].join("/"),
      { ...l, method: "get" }
    ).then(async (E) => {
      if (!E.ok)
        throw new Error(`${E.status}`);
      return E;
    }).then((E) => E.json()).then((E) => E).catch((E) => ({ success: !1, message: `${E}`, data: null }));
  }
  async storePreference(n) {
    const { version: i } = this.options, l = this.formHeaders();
    delete n.update;
    const E = JSON.stringify({ data: n });
    return console.info(
      "%capi%c %cstorePreference",
      c.API,
      c.NONE,
      c.APP,
      n.id
    ), await fetch(
      [this.url, "api", i, O.PREFERENCES, n.id].join("/"),
      { ...l, body: E, method: "put" }
    ).then((_) => {
      if (!_.ok)
        throw new Error(_.statusText);
      return _;
    }).then((_) => _.json()).catch((_) => ({ succes: !1, message: _, data: [] }));
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
    const { version: i } = this.options, l = this.headers();
    return B(3, ["%capi%c %dashboards", c.API, c.NONE, c.WIDGET]), await fetch(
      [this.url, "api", i, O.WIDGETS, n?.id || ""].join("/"),
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
var qt = { exports: {} }, ja = qt.exports, Cr;
function Ma() {
  return Cr || (Cr = 1, function(g, n) {
    (function(i, l) {
      g.exports = l();
    })(ja, function() {
      var i = function(e, t) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
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
        for (var a, s = 0, o = t.length; s < o; s++) !a && s in t || ((a = a || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(a || Array.prototype.slice.call(t));
      }
      var _ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ca, I = Object.keys, G = Array.isArray;
      function re(e, t) {
        return typeof t != "object" || I(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || _.Promise || (_.Promise = Promise);
      var fe = Object.getPrototypeOf, St = {}.hasOwnProperty;
      function ae(e, t) {
        return St.call(e, t);
      }
      function _e(e, t) {
        typeof t == "function" && (t = t(fe(e))), (typeof Reflect > "u" ? I : Reflect.ownKeys)(t).forEach(function(r) {
          Ae(e, r, t[r]);
        });
      }
      var Hn = Object.defineProperty;
      function Ae(e, t, r, a) {
        Hn(e, t, re(r && ae(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, a));
      }
      function Ve(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), Ae(e.prototype, "constructor", e), { extend: _e.bind(null, e.prototype) };
        } };
      }
      var Wr = Object.getOwnPropertyDescriptor, Ur = [].slice;
      function Ot(e, t, r) {
        return Ur.call(e, t, r);
      }
      function Vn(e, t) {
        return t(e);
      }
      function st(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Yn(e) {
        _.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function be(e, t) {
        if (typeof t == "string" && ae(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], a = 0, s = t.length; a < s; ++a) {
            var o = be(e, t[a]);
            r.push(o);
          }
          return r;
        }
        var u = t.indexOf(".");
        if (u !== -1) {
          var d = e[t.substr(0, u)];
          return d == null ? void 0 : be(d, t.substr(u + 1));
        }
      }
      function ue(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          st(typeof r != "string" && "length" in r);
          for (var a = 0, s = t.length; a < s; ++a) ue(e, t[a], r[a]);
        } else {
          var o, u, d = t.indexOf(".");
          d !== -1 ? (o = t.substr(0, d), (u = t.substr(d + 1)) === "" ? r === void 0 ? G(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = r : ue(d = !(d = e[o]) || !ae(e, o) ? e[o] = {} : d, u, r)) : r === void 0 ? G(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function Qn(e) {
        var t, r = {};
        for (t in e) ae(e, t) && (r[t] = e[t]);
        return r;
      }
      var zr = [].concat;
      function Xn(e) {
        return zr.apply([], e);
      }
      var Me = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Xn([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return _[e];
      }), Jn = new Set(Me.map(function(e) {
        return _[e];
      })), it = null;
      function Ce(e) {
        return it = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var a = it.get(r);
          if (a) return a;
          if (G(r)) {
            a = [], it.set(r, a);
            for (var s = 0, o = r.length; s < o; ++s) a.push(t(r[s]));
          } else if (Jn.has(r.constructor)) a = r;
          else {
            var u, d = fe(r);
            for (u in a = d === Object.prototype ? {} : Object.create(d), it.set(r, a), r) ae(r, u) && (a[u] = t(r[u]));
          }
          return a;
        }(e), it = null, e;
      }
      var Hr = {}.toString;
      function tn(e) {
        return Hr.call(e).slice(8, -1);
      }
      var nn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Vr = typeof nn == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[nn]) && t.apply(e);
      } : function() {
        return null;
      };
      function $e(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var Ye = {};
      function ve(e) {
        var t, r, a, s;
        if (arguments.length === 1) {
          if (G(e)) return e.slice();
          if (this === Ye && typeof e == "string") return [e];
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
      var rn = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ut = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], he = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ut), Yr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Qe(e, t) {
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
      function _t(e, t, r, a) {
        this.failures = t, this.failedKeys = a, this.successCount = r, this.message = Zn(e, t);
      }
      function Xe(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = Zn(e, this.failures);
      }
      Ve(Qe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ve(_t).from(Qe), Ve(Xe).from(Qe);
      var an = he.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Qr = Qe, L = he.reduce(function(e, t) {
        var r = t + "Error";
        function a(s, o) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Yr[t] || r, this.inner = null);
        }
        return Ve(a).from(Qr), e[t] = a, e;
      }, {});
      L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError;
      var qn = ut.reduce(function(e, t) {
        return e[t + "Error"] = L[t], e;
      }, {}), At = he.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = L[t]), e;
      }, {});
      function Q() {
      }
      function ot(e) {
        return e;
      }
      function Xr(e, t) {
        return e == null || e === ot ? t : function(r) {
          return t(e(r));
        };
      }
      function je(e, t) {
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
          var o = t.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? je(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? je(s, this.onerror) : s), o !== void 0 ? o : r;
        };
      }
      function Zr(e, t) {
        return e === Q ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? je(r, this.onsuccess) : r), a && (this.onerror = this.onerror ? je(a, this.onerror) : a);
        };
      }
      function qr(e, t) {
        return e === Q ? t : function(r) {
          var a = e.apply(this, arguments);
          re(r, a);
          var s = this.onsuccess, o = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? je(s, this.onsuccess) : s), o && (this.onerror = this.onerror ? je(o, this.onerror) : o), a === void 0 ? r === void 0 ? void 0 : r : re(a, r);
        };
      }
      function ea(e, t) {
        return e === Q ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function sn(e, t) {
        return e === Q ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var a = this, s = arguments.length, o = new Array(s); s--; ) o[s] = arguments[s];
            return r.then(function() {
              return t.apply(a, o);
            });
          }
          return t.apply(this, arguments);
        };
      }
      At.ModifyError = _t, At.DexieError = Qe, At.BulkError = Xe;
      var ge = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function er(e) {
        ge = e;
      }
      var ct = {}, tr = 100, Me = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, fe(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, fe(t), e];
      }(), ut = Me[0], he = Me[1], Me = Me[2], he = he && he.then, Ke = ut && ut.constructor, on = !!Me, lt = function(e, t) {
        dt.push([e, t]), Pt && (queueMicrotask(na), Pt = !1);
      }, cn = !0, Pt = !0, Be = [], Dt = [], un = ot, Pe = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Q, pgp: !1, env: {}, finalize: Q }, K = Pe, dt = [], Ge = 0, Rt = [];
      function j(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = K;
        if (typeof e != "function") {
          if (e !== ct) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && dn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(a, s) {
          try {
            s(function(o) {
              if (a._state === null) {
                if (o === a) throw new TypeError("A promise cannot be resolved with itself.");
                var u = a._lib && Je();
                o && typeof o.then == "function" ? r(a, function(d, h) {
                  o instanceof j ? o._then(d, h) : o.then(d, h);
                }) : (a._state = !0, a._value = o, rr(a)), u && Ze();
              }
            }, dn.bind(null, a));
          } catch (o) {
            dn(a, o);
          }
        }(this, e);
      }
      var ln = { get: function() {
        var e = K, t = xt;
        function r(a, s) {
          var o = this, u = !e.global && (e !== K || t !== xt), d = u && !Re(), h = new j(function(m, v) {
            fn(o, new nr(sr(a, e, u, d), sr(s, e, u, d), m, v, e));
          });
          return this._consoleTask && (h._consoleTask = this._consoleTask), h;
        }
        return r.prototype = ct, r;
      }, set: function(e) {
        Ae(this, "then", e && e.prototype === ct ? ln : { get: function() {
          return e;
        }, set: ln.set });
      } };
      function nr(e, t, r, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = a, this.psd = s;
      }
      function dn(e, t) {
        var r, a;
        Dt.push(t), e._state === null && (r = e._lib && Je(), t = un(t), e._state = !1, e._value = t, a = e, Be.some(function(s) {
          return s._value === a._value;
        }) || Be.push(a), rr(e), r && Ze());
      }
      function rr(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, a = t.length; r < a; ++r) fn(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Ge === 0 && (++Ge, lt(function() {
          --Ge == 0 && hn();
        }, []));
      }
      function fn(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ge, lt(ta, [r, e, t]);
        } else e._listeners.push(t);
      }
      function ta(e, t, r) {
        try {
          var a, s = t._value;
          !t._state && Dt.length && (Dt = []), a = ge && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || Dt.indexOf(s) !== -1 || function(o) {
            for (var u = Be.length; u; ) if (Be[--u]._value === o._value) return Be.splice(u, 1);
          }(t), r.resolve(a);
        } catch (o) {
          r.reject(o);
        } finally {
          --Ge == 0 && hn(), --r.psd.ref || r.psd.finalize();
        }
      }
      function na() {
        Le(Pe, function() {
          Je() && Ze();
        });
      }
      function Je() {
        var e = cn;
        return Pt = cn = !1, e;
      }
      function Ze() {
        var e, t, r;
        do
          for (; 0 < dt.length; ) for (e = dt, dt = [], r = e.length, t = 0; t < r; ++t) {
            var a = e[t];
            a[0].apply(null, a[1]);
          }
        while (0 < dt.length);
        Pt = cn = !0;
      }
      function hn() {
        var e = Be;
        Be = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var t = Rt.slice(0), r = t.length; r; ) t[--r]();
      }
      function Nt(e) {
        return new j(ct, !1, e);
      }
      function Z(e, t) {
        var r = K;
        return function() {
          var a = Je(), s = K;
          try {
            return Ne(r, !0), e.apply(this, arguments);
          } catch (o) {
            t && t(o);
          } finally {
            Ne(s, !1), a && Ze();
          }
        };
      }
      _e(j.prototype, { then: ln, _then: function(e, t) {
        fn(this, new nr(null, null, e, t, K));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(a) {
          return (a instanceof t ? r : Nt)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === t ? r : Nt)(a);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return j.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return j.resolve(e()).then(function() {
            return Nt(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new j(function(a, s) {
          var o = setTimeout(function() {
            return s(new L.Timeout(t));
          }, e);
          r.then(a, s).finally(clearTimeout.bind(null, o));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Ae(j.prototype, Symbol.toStringTag, "Dexie.Promise"), Pe.env = ar(), _e(j, { all: function() {
        var e = ve.apply(null, arguments).map(kt);
        return new j(function(t, r) {
          e.length === 0 && t([]);
          var a = e.length;
          e.forEach(function(s, o) {
            return j.resolve(s).then(function(u) {
              e[o] = u, --a || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof j ? e : e && typeof e.then == "function" ? new j(function(t, r) {
          e.then(t, r);
        }) : new j(ct, !0, e);
      }, reject: Nt, race: function() {
        var e = ve.apply(null, arguments).map(kt);
        return new j(function(t, r) {
          e.map(function(a) {
            return j.resolve(a).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return K;
      }, set: function(e) {
        return K = e;
      } }, totalEchoes: { get: function() {
        return xt;
      } }, newPSD: De, usePSD: Le, scheduler: { get: function() {
        return lt;
      }, set: function(e) {
        lt = e;
      } }, rejectionMapper: { get: function() {
        return un;
      }, set: function(e) {
        un = e;
      } }, follow: function(e, t) {
        return new j(function(r, a) {
          return De(function(s, o) {
            var u = K;
            u.unhandleds = [], u.onunhandled = o, u.finalize = je(function() {
              var d, h = this;
              d = function() {
                h.unhandleds.length === 0 ? s() : o(h.unhandleds[0]);
              }, Rt.push(function m() {
                d(), Rt.splice(Rt.indexOf(m), 1);
              }), ++Ge, lt(function() {
                --Ge == 0 && hn();
              }, []);
            }, u.finalize), e();
          }, t, r, a);
        });
      } }), Ke && (Ke.allSettled && Ae(j, "allSettled", function() {
        var e = ve.apply(null, arguments).map(kt);
        return new j(function(t) {
          e.length === 0 && t([]);
          var r = e.length, a = new Array(r);
          e.forEach(function(s, o) {
            return j.resolve(s).then(function(u) {
              return a[o] = { status: "fulfilled", value: u };
            }, function(u) {
              return a[o] = { status: "rejected", reason: u };
            }).then(function() {
              return --r || t(a);
            });
          });
        });
      }), Ke.any && typeof AggregateError < "u" && Ae(j, "any", function() {
        var e = ve.apply(null, arguments).map(kt);
        return new j(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(o, u) {
            return j.resolve(o).then(function(d) {
              return t(d);
            }, function(d) {
              s[u] = d, --a || r(new AggregateError(s));
            });
          });
        });
      }), Ke.withResolvers && (j.withResolvers = Ke.withResolvers));
      var te = { awaits: 0, echoes: 0, id: 0 }, ra = 0, Tt = [], It = 0, xt = 0, aa = 0;
      function De(e, t, r, a) {
        var s = K, o = Object.create(s);
        return o.parent = s, o.ref = 0, o.global = !1, o.id = ++aa, Pe.env, o.env = on ? { Promise: j, PromiseProp: { value: j, configurable: !0, writable: !0 }, all: j.all, race: j.race, allSettled: j.allSettled, any: j.any, resolve: j.resolve, reject: j.reject } : {}, t && re(o, t), ++s.ref, o.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = Le(o, e, r, a), o.ref === 0 && o.finalize(), a;
      }
      function qe() {
        return te.id || (te.id = ++ra), ++te.awaits, te.echoes += tr, te.id;
      }
      function Re() {
        return !!te.awaits && (--te.awaits == 0 && (te.id = 0), te.echoes = te.awaits * tr, !0);
      }
      function kt(e) {
        return te.echoes && e && e.constructor === Ke ? (qe(), e.then(function(t) {
          return Re(), t;
        }, function(t) {
          return Re(), q(t);
        })) : e;
      }
      function sa() {
        var e = Tt[Tt.length - 1];
        Tt.pop(), Ne(e, !1);
      }
      function Ne(e, t) {
        var r, a = K;
        (t ? !te.echoes || It++ && e === K : !It || --It && e === K) || queueMicrotask(t ? function(s) {
          ++xt, te.echoes && --te.echoes != 0 || (te.echoes = te.awaits = te.id = 0), Tt.push(K), Ne(s, !0);
        }.bind(null, e) : sa), e !== K && (K = e, a === Pe && (Pe.env = ar()), on && (r = Pe.env.Promise, t = e.env, (a.global || e.global) && (Object.defineProperty(_, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function ar() {
        var e = _.Promise;
        return on ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(_, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Le(e, t, r, a, s) {
        var o = K;
        try {
          return Ne(e, !0), t(r, a, s);
        } finally {
          Ne(o, !1);
        }
      }
      function sr(e, t, r, a) {
        return typeof e != "function" ? e : function() {
          var s = K;
          r && qe(), Ne(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ne(s, !1), a && queueMicrotask(Re);
          }
        };
      }
      function pn(e) {
        Promise === Ke && te.echoes === 0 ? It === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + he).indexOf("[native code]") === -1 && (qe = Re = Q);
      var q = j.reject, Fe = "￿", Ee = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ir = "String expected.", et = [], Ct = "__dbnames", gn = "readonly", mn = "readwrite";
      function We(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var or = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function $t(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ce(t))[e], t;
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
              return function(s, o) {
                for (var u = s.length, d = o.length, h = u < d ? u : d, m = 0; m < h; ++m) if (s[m] !== o[m]) return s[m] < o[m] ? -1 : 1;
                return u === d ? 0 : u < d ? -1 : 1;
              }(lr(e), lr(t));
            case "Array":
              return function(s, o) {
                for (var u = s.length, d = o.length, h = u < d ? u : d, m = 0; m < h; ++m) {
                  var v = H(s[m], o[m]);
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
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = tn(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function lr(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      var dr = (X.prototype._trans = function(e, t, r) {
        var a = this._tx || K.trans, s = this.name, o = ge && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function u(m, v, f) {
          if (!f.schema[s]) throw new L.NotFound("Table " + s + " not part of transaction");
          return t(f.idbtrans, f);
        }
        var d = Je();
        try {
          var h = a && a.db._novip === this.db._novip ? a === K.trans ? a._promise(e, u, r) : De(function() {
            return a._promise(e, u, r);
          }, { trans: a, transless: K.transless || K }) : function m(v, f, S, p) {
            if (v.idbdb && (v._state.openComplete || K.letThrough || v._vip)) {
              var b = v._createTransaction(f, S, v._dbSchema);
              try {
                b.create(), v._state.PR1398_maxLoop = 3;
              } catch (w) {
                return w.name === an.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({ disableAutoOpen: !1 }), v.open().then(function() {
                  return m(v, f, S, p);
                })) : q(w);
              }
              return b._promise(f, function(w, y) {
                return De(function() {
                  return K.trans = b, p(w, y, b);
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
          return o && (h._consoleTask = o, h = h.catch(function(m) {
            return console.trace(m), q(m);
          })), h;
        } finally {
          d && Ze();
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
        var t = I(e);
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
          var o = r.keyPath.slice(0, t.length);
          return this.where(o).equals(o.map(function(h) {
            return e[h];
          }));
        }
        !r && ge && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(d, h) {
          return H(d, h) === 0;
        }
        var u = t.reduce(function(f, h) {
          var m = f[0], v = f[1], f = a[h], S = e[h];
          return [m || f, m || !f ? We(v, f && f.multi ? function(p) {
            return p = be(p, h), G(p) && p.some(function(b) {
              return s(S, b);
            });
          } : function(p) {
            return s(S, be(p, h));
          }) : v];
        }, [null, null]), o = u[0], u = u[1];
        return o ? this.where(o.name).equals(e[o.keyPath]).filter(u) : r ? this.filter(u) : this.where(t).equals("");
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
          i(h, m), h.prototype = m === null ? Object.create(m) : (v.prototype = m.prototype, new v());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var o = /* @__PURE__ */ new Set(), u = e.prototype; u; u = fe(u)) Object.getOwnPropertyNames(u).forEach(function(h) {
          return o.add(h);
        });
        function d(h) {
          if (!h) return h;
          var m, v = Object.create(e.prototype);
          for (m in h) if (!o.has(m)) try {
            v[m] = h[m];
          } catch {
          }
          return v;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, X.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          re(this, e);
        });
      }, X.prototype.add = function(e, t) {
        var r = this, a = this.schema.primKey, s = a.auto, o = a.keyPath, u = e;
        return o && s && (u = $t(o)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [u] });
        }).then(function(d) {
          return d.numFailures ? j.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (o) try {
            ue(e, o, d);
          } catch {
          }
          return d;
        });
      }, X.prototype.update = function(e, t) {
        return typeof e != "object" || G(e) ? this.where(":id").equals(e).modify(t) : (e = be(e, this.schema.primKey.keyPath), e === void 0 ? q(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, X.prototype.put = function(e, t) {
        var r = this, a = this.schema.primKey, s = a.auto, o = a.keyPath, u = e;
        return o && s && (u = $t(o)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [u], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? j.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (o) try {
            ue(e, o, d);
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
          return e.core.mutate({ trans: t, type: "deleteRange", range: or });
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
        var a = this, s = Array.isArray(t) ? t : void 0, o = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var h = e.length, m = m && d ? e.map($t(m)) : e;
          return a.core.mutate({ trans: u, type: "add", keys: s, values: m, wantResults: o }).then(function(b) {
            var f = b.numFailures, S = b.results, p = b.lastResult, b = b.failures;
            if (f === 0) return o ? S : p;
            throw new Xe("".concat(a.name, ".bulkAdd(): ").concat(f, " of ").concat(h, " operations failed"), b);
          });
        });
      }, X.prototype.bulkPut = function(e, t, r) {
        var a = this, s = Array.isArray(t) ? t : void 0, o = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(u) {
          var m = a.schema.primKey, d = m.auto, m = m.keyPath;
          if (m && s) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var h = e.length, m = m && d ? e.map($t(m)) : e;
          return a.core.mutate({ trans: u, type: "put", keys: s, values: m, wantResults: o }).then(function(b) {
            var f = b.numFailures, S = b.results, p = b.lastResult, b = b.failures;
            if (f === 0) return o ? S : p;
            throw new Xe("".concat(a.name, ".bulkPut(): ").concat(f, " of ").concat(h, " operations failed"), b);
          });
        });
      }, X.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, a = e.map(function(u) {
          return u.key;
        }), s = e.map(function(u) {
          return u.changes;
        }), o = [];
        return this._trans("readwrite", function(u) {
          return r.getMany({ trans: u, keys: a, cache: "clone" }).then(function(d) {
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
                o.push(S), h.push(p), m.push(w);
              }
            });
            var v = h.length;
            return r.mutate({ trans: u, type: "put", keys: h, values: m, updates: { keys: a, changeSpecs: s } }).then(function(f) {
              var S = f.numFailures, p = f.failures;
              if (S === 0) return v;
              for (var b = 0, w = Object.keys(p); b < w.length; b++) {
                var y, A = w[b], P = o[Number(A)];
                P != null && (y = p[A], delete p[A], p[P] = y);
              }
              throw new Xe("".concat(t.name, ".bulkUpdate(): ").concat(S, " of ").concat(v, " operations failed"), p);
            });
          });
        });
      }, X.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(a) {
          return t.core.mutate({ trans: a, type: "delete", keys: e });
        }).then(function(u) {
          var s = u.numFailures, o = u.lastResult, u = u.failures;
          if (s === 0) return o;
          throw new Xe("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), u);
        });
      }, X);
      function X() {
      }
      function ft(e) {
        function t(u, d) {
          if (d) {
            for (var h = arguments.length, m = new Array(h - 1); --h; ) m[h - 1] = arguments[h];
            return r[u].subscribe.apply(null, m), e;
          }
          if (typeof u == "string") return r[u];
        }
        var r = {};
        t.addEventType = o;
        for (var a = 1, s = arguments.length; a < s; ++a) o(arguments[a]);
        return t;
        function o(u, d, h) {
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
          I(m = u).forEach(function(f) {
            var S = m[f];
            if (G(S)) o(f, m[f][0], m[f][1]);
            else {
              if (S !== "asap") throw new L.InvalidArgument("Invalid event config");
              var p = o(f, ot, function() {
                for (var b = arguments.length, w = new Array(b); b--; ) w[b] = arguments[b];
                p.subscribers.forEach(function(y) {
                  Yn(function() {
                    y.apply(null, w);
                  });
                });
              });
            }
          });
        }
      }
      function ht(e, t) {
        return Ve(t).from({ prototype: e }), t;
      }
      function tt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function yn(e, t) {
        e.filter = We(e.filter, t);
      }
      function bn(e, t, r) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return We(a(), t());
        } : t, e.justLimit = r && !a;
      }
      function jt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new L.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function fr(e, t, r) {
        var a = jt(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function Mt(e, t, r, a) {
        var s = e.replayFilter ? We(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var o = {}, u = function(d, h, m) {
            var v, f;
            s && !s(h, m, function(S) {
              return h.stop(S);
            }, function(S) {
              return h.fail(S);
            }) || ((f = "" + (v = h.primaryKey)) == "[object ArrayBuffer]" && (f = "" + new Uint8Array(v)), ae(o, f) || (o[f] = !0, t(d, h, m)));
          };
          return Promise.all([e.or._iterate(u, r), hr(fr(e, a, r), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
        }
        return hr(fr(e, a, r), We(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function hr(e, t, r, a) {
        var s = Z(a ? function(o, u, d) {
          return r(a(o), u, d);
        } : r);
        return e.then(function(o) {
          if (o) return o.start(function() {
            var u = function() {
              return o.continue();
            };
            t && !t(o, function(d) {
              return u = d;
            }, function(d) {
              o.stop(d), u = Q;
            }, function(d) {
              o.fail(d), u = Q;
            }) || s(o.value, o, function(d) {
              return u = d;
            }), u();
          });
        });
      }
      var pt = (pr.prototype.execute = function(e) {
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
      }, pr);
      function pr(e) {
        this["@@propmod"] = e;
      }
      var ia = (V.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, q.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, V.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, q.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, V.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = We(t.algorithm, e);
      }, V.prototype._iterate = function(e, t) {
        return Mt(this._ctx, e, t, this._ctx.table.core);
      }, V.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && re(r, e), t._ctx = r, t;
      }, V.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, V.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Mt(t, e, r, t.table.core);
        });
      }, V.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var a = t._ctx, s = a.table.core;
          if (tt(a, !0)) return s.count({ trans: r, query: { index: jt(a, s.schema), range: a.range } }).then(function(u) {
            return Math.min(u, a.limit);
          });
          var o = 0;
          return Mt(a, function() {
            return ++o, !1;
          }, r, s).then(function() {
            return o;
          });
        }).then(e);
      }, V.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), a = r[0], s = r.length - 1;
        function o(h, m) {
          return m ? o(h[r[m]], m - 1) : h[a];
        }
        var u = this._ctx.dir === "next" ? 1 : -1;
        function d(h, m) {
          return H(o(h, s), o(m, s)) * u;
        }
        return this.toArray(function(h) {
          return h.sort(d);
        }).then(t);
      }, V.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var a = t._ctx;
          if (a.dir === "next" && tt(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, o = jt(a, a.table.core.schema);
            return a.table.core.query({ trans: r, limit: a.limit, values: !0, query: { index: o, range: a.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var u = [];
          return Mt(a, function(d) {
            return u.push(d);
          }, r, a.table.core).then(function() {
            return u;
          });
        }, e);
      }, V.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, tt(t) ? bn(t, function() {
          var r = e;
          return function(a, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              a.advance(r), r = 0;
            }), !1);
          };
        }) : bn(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, V.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), bn(this._ctx, function() {
          var t = e;
          return function(r, a, s) {
            return --t <= 0 && a(s), 0 <= t;
          };
        }, !0), this;
      }, V.prototype.until = function(e, t) {
        return yn(this._ctx, function(r, a, s) {
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
        return yn(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = We(t.isMatch, e), this;
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
        if (t.dir === "next" && tt(t, !0) && 0 < t.limit) return this._read(function(a) {
          var s = jt(t, t.table.core.schema);
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
        return yn(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = ae(t, a);
          return t[a] = !0, !s;
        }), this;
      }, V.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(a) {
          var s, o, u;
          u = typeof e == "function" ? e : (s = I(e), o = s.length, function(y) {
            for (var A = !1, P = 0; P < o; ++P) {
              var D = s[P], R = e[D], N = be(y, D);
              R instanceof pt ? (ue(y, D, R.execute(N)), A = !0) : N !== R && (ue(y, D, R), A = !0);
            }
            return A;
          });
          var d = r.table.core, f = d.schema.primaryKey, h = f.outbound, m = f.extractKey, v = 200, f = t.db._options.modifyChunkSize;
          f && (v = typeof f == "object" ? f[d.name] || f["*"] || 200 : f);
          function S(y, D) {
            var P = D.failures, D = D.numFailures;
            b += y - D;
            for (var R = 0, N = I(P); R < N.length; R++) {
              var C = N[R];
              p.push(P[C]);
            }
          }
          var p = [], b = 0, w = [];
          return t.clone().primaryKeys().then(function(y) {
            function A(D) {
              var R = Math.min(v, y.length - D);
              return d.getMany({ trans: a, keys: y.slice(D, D + R), cache: "immutable" }).then(function(N) {
                for (var C = [], T = [], x = h ? [] : null, $ = [], k = 0; k < R; ++k) {
                  var M = N[k], W = { value: Ce(M), primKey: y[D + k] };
                  u.call(W, W.value, W) !== !1 && (W.value == null ? $.push(y[D + k]) : h || H(m(M), m(W.value)) === 0 ? (T.push(W.value), h && x.push(y[D + k])) : ($.push(y[D + k]), C.push(W.value)));
                }
                return Promise.resolve(0 < C.length && d.mutate({ trans: a, type: "add", values: C }).then(function(U) {
                  for (var z in U.failures) $.splice(parseInt(z), 1);
                  S(C.length, U);
                })).then(function() {
                  return (0 < T.length || P && typeof e == "object") && d.mutate({ trans: a, type: "put", keys: x, values: T, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(U) {
                    return S(T.length, U);
                  });
                }).then(function() {
                  return (0 < $.length || P && e === vn) && d.mutate({ trans: a, type: "delete", keys: $, criteria: P, isAdditionalChunk: 0 < D }).then(function(U) {
                    return S($.length, U);
                  });
                }).then(function() {
                  return y.length > D + R && A(D + v);
                });
              });
            }
            var P = tt(r) && r.limit === 1 / 0 && (typeof e != "function" || e === vn) && { index: r.index, range: r.range };
            return A(0).then(function() {
              if (0 < p.length) throw new _t("Error modifying one or more objects", p, b, w);
              return y.length;
            });
          });
        });
      }, V.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return tt(e) && (e.isPrimKey || t.type === 3) ? this._write(function(r) {
          var a = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: a, range: s } }).then(function(o) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(u) {
              var d = u.failures;
              if (u.lastResult, u.results, u = u.numFailures, u) throw new _t("Could not delete some values", Object.keys(d).map(function(h) {
                return d[h];
              }), o - u);
              return o - u;
            });
          });
        }) : this.modify(vn);
      }, V);
      function V() {
      }
      var vn = function(e, t) {
        return t.value = null;
      };
      function oa(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function ca(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function le(e, t, r) {
        return e = e instanceof mr ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function nt(e) {
        return new e.Collection(e, function() {
          return gr("");
        }).limit(0);
      }
      function Kt(e, t, r, a) {
        var s, o, u, d, h, m, v, f = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return le(e, ir);
        function S(b) {
          s = b === "next" ? function(y) {
            return y.toUpperCase();
          } : function(y) {
            return y.toLowerCase();
          }, o = b === "next" ? function(y) {
            return y.toLowerCase();
          } : function(y) {
            return y.toUpperCase();
          }, u = b === "next" ? oa : ca;
          var w = r.map(function(y) {
            return { lower: o(y), upper: s(y) };
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
          var P = o(A);
          if (t(P, h, p)) return !0;
          for (var D = null, R = p; R < f; ++R) {
            var N = function(C, T, x, $, k, M) {
              for (var W = Math.min(C.length, $.length), U = -1, z = 0; z < W; ++z) {
                var de = T[z];
                if (de !== $[z]) return k(C[z], x[z]) < 0 ? C.substr(0, z) + x[z] + x.substr(z + 1) : k(C[z], $[z]) < 0 ? C.substr(0, z) + $[z] + x.substr(z + 1) : 0 <= U ? C.substr(0, U) + T[U] + x.substr(U + 1) : null;
                k(C[z], de) < 0 && (U = z);
              }
              return W < $.length && M === "next" ? C + x.substr(C.length) : W < C.length && M === "prev" ? C.substr(0, x.length) : U < 0 ? null : C.substr(0, U) + $[U] + x.substr(U + 1);
            }(A, P, d[R], h[R], u, m);
            N === null && D === null ? p = R + 1 : (D === null || 0 < u(D, N)) && (D = N);
          }
          return w(D !== null ? function() {
            b.continue(D + v);
          } : y), !1;
        }), e;
      }
      function Te(e, t, r, a) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: a };
      }
      function gr(e) {
        return { type: 1, lower: e, upper: e };
      }
      var mr = (Object.defineProperty(ne.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), ne.prototype.between = function(e, t, r, a) {
        r = r !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || a) && (!r || !a) ? nt(this) : new this.Collection(this, function() {
            return Te(e, t, !r, !a);
          });
        } catch {
          return le(this, Ee);
        }
      }, ne.prototype.equals = function(e) {
        return e == null ? le(this, Ee) : new this.Collection(this, function() {
          return gr(e);
        });
      }, ne.prototype.above = function(e) {
        return e == null ? le(this, Ee) : new this.Collection(this, function() {
          return Te(e, void 0, !0);
        });
      }, ne.prototype.aboveOrEqual = function(e) {
        return e == null ? le(this, Ee) : new this.Collection(this, function() {
          return Te(e, void 0, !1);
        });
      }, ne.prototype.below = function(e) {
        return e == null ? le(this, Ee) : new this.Collection(this, function() {
          return Te(void 0, e, !1, !0);
        });
      }, ne.prototype.belowOrEqual = function(e) {
        return e == null ? le(this, Ee) : new this.Collection(this, function() {
          return Te(void 0, e);
        });
      }, ne.prototype.startsWith = function(e) {
        return typeof e != "string" ? le(this, ir) : this.between(e, e + Fe, !0, !0);
      }, ne.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Kt(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Fe);
      }, ne.prototype.equalsIgnoreCase = function(e) {
        return Kt(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, ne.prototype.anyOfIgnoreCase = function() {
        var e = ve.apply(Ye, arguments);
        return e.length === 0 ? nt(this) : Kt(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, ne.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = ve.apply(Ye, arguments);
        return e.length === 0 ? nt(this) : Kt(this, function(t, r) {
          return r.some(function(a) {
            return t.indexOf(a) === 0;
          });
        }, e, Fe);
      }, ne.prototype.anyOf = function() {
        var e = this, t = ve.apply(Ye, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return le(this, Ee);
        }
        if (t.length === 0) return nt(this);
        var a = new this.Collection(this, function() {
          return Te(t[0], t[t.length - 1]);
        });
        a._ondirectionchange = function(o) {
          r = o === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return a._addAlgorithm(function(o, u, d) {
          for (var h = o.key; 0 < r(h, t[s]); ) if (++s === t.length) return u(d), !1;
          return r(h, t[s]) === 0 || (u(function() {
            o.continue(t[s]);
          }), !1);
        }), a;
      }, ne.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, ne.prototype.noneOf = function() {
        var e = ve.apply(Ye, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return le(this, Ee);
        }
        var t = e.reduce(function(r, a) {
          return r ? r.concat([[r[r.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, ne.prototype.inAnyRange = function(A, t) {
        var r = this, a = this._cmp, s = this._ascending, o = this._descending, u = this._min, d = this._max;
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
            for (var R = 0, N = P.length; R < N; ++R) {
              var C = P[R];
              if (a(D[0], C[1]) < 0 && 0 < a(D[1], C[0])) {
                C[0] = u(C[0], D[0]), C[1] = d(C[1], D[1]);
                break;
              }
            }
            return R === N && P.push(D), P;
          }, [])).sort(S);
        } catch {
          return le(this, Ee);
        }
        var p = 0, b = m ? function(P) {
          return 0 < s(P, v[p][1]);
        } : function(P) {
          return 0 <= s(P, v[p][1]);
        }, w = h ? function(P) {
          return 0 < o(P, v[p][0]);
        } : function(P) {
          return 0 <= o(P, v[p][0]);
        }, y = b, A = new this.Collection(this, function() {
          return Te(v[0][0], v[v.length - 1][1], !h, !m);
        });
        return A._ondirectionchange = function(P) {
          f = P === "next" ? (y = b, s) : (y = w, o), v.sort(S);
        }, A._addAlgorithm(function(P, D, R) {
          for (var N, C = P.key; y(C); ) if (++p === v.length) return D(R), !1;
          return !b(N = C) && !w(N) || (r._cmp(C, v[p][1]) === 0 || r._cmp(C, v[p][0]) === 0 || D(function() {
            f === s ? P.continue(v[p][0]) : P.continue(v[p][1]);
          }), !1);
        }), A;
      }, ne.prototype.startsWithAnyOf = function() {
        var e = ve.apply(Ye, arguments);
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
          return gt(t), e(t.target.error), !1;
        });
      }
      function gt(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var mt = "storagemutated", En = "x-storagemutated-1", Ie = ft(null, mt), ua = (ye.prototype._lock = function() {
        return st(!K.global), ++this._reculock, this._reculock !== 1 || K.global || (K.lockOwnerFor = this), this;
      }, ye.prototype._unlock = function() {
        if (st(!K.global), --this._reculock == 0) for (K.global || (K.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Le(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, ye.prototype._locked = function() {
        return this._reculock && K.lockOwnerFor !== this;
      }, ye.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, a = this.db._state.dbOpenError;
        if (st(!this.idbtrans), !e && !r) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new L.DatabaseClosed(a);
          case "MissingAPIError":
            throw new L.MissingAPI(a.message, a);
          default:
            throw new L.OpenFailed(a);
        }
        if (!this.active) throw new L.TransactionInactive();
        return st(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Z(function(s) {
          gt(s), t._reject(e.error);
        }), e.onabort = Z(function(s) {
          gt(s), t.active && t._reject(new L.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Z(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Ie.storagemutated.fire(e.mutatedParts);
        }), this;
      }, ye.prototype._promise = function(e, t, r) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return q(new L.ReadOnly("Transaction is readonly"));
        if (!this.active) return q(new L.TransactionInactive());
        if (this._locked()) return new j(function(o, u) {
          a._blockedFuncs.push([function() {
            a._promise(e, t, r).then(o, u);
          }, K]);
        });
        if (r) return De(function() {
          var o = new j(function(u, d) {
            a._lock();
            var h = t(u, d, a);
            h && h.then && h.then(u, d);
          });
          return o.finally(function() {
            return a._unlock();
          }), o._lib = !0, o;
        });
        var s = new j(function(o, u) {
          var d = t(o, u, a);
          d && d.then && d.then(o, u);
        });
        return s._lib = !0, s;
      }, ye.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ye.prototype.waitFor = function(e) {
        var t, r = this._root(), a = j.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return a;
        }) : (r._waitingFor = a, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function o() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = o);
        }());
        var s = r._waitingFor;
        return new j(function(o, u) {
          a.then(function(d) {
            return r._waitingQueue.push(Z(o.bind(null, d)));
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
        if (ae(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new L.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, ye);
      function ye() {
      }
      function wn(e, t, r, a, s, o, u) {
        return { name: e, keyPath: t, unique: r, multi: a, auto: s, compound: o, src: (r && !u ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + yr(t) };
      }
      function yr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Sn(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (a = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, o, u) {
          return u = a(o, u), u && (s[u[0]] = u[1]), s;
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
            return Fe;
          }, Fe;
        }
      };
      function On(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return be(r, t);
        } : function(r) {
          return be(r, e);
        };
        var t;
      }
      function br(e) {
        return [].slice.call(e);
      }
      var la = 0;
      function bt(e) {
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
            var y = w.trans, A = w.type, P = w.keys, D = w.values, R = w.range;
            return new Promise(function(N, C) {
              N = Z(N);
              var T = y.objectStore(b), x = T.keyPath == null, $ = A === "put" || A === "add";
              if (!$ && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var k, M = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (M === 0) return N({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function W(ce) {
                ++de, gt(ce);
              }
              var U = [], z = [], de = 0;
              if (A === "deleteRange") {
                if (R.type === 4) return N({ numFailures: de, failures: z, results: [], lastResult: void 0 });
                R.type === 3 ? U.push(k = T.clear()) : U.push(k = T.delete(a(R)));
              } else {
                var x = $ ? x ? [D, P] : [D, null] : [P, null], F = x[0], ie = x[1];
                if ($) for (var oe = 0; oe < M; ++oe) U.push(k = ie && ie[oe] !== void 0 ? T[A](F[oe], ie[oe]) : T[A](F[oe])), k.onerror = W;
                else for (oe = 0; oe < M; ++oe) U.push(k = T[A](F[oe])), k.onerror = W;
              }
              function Jt(ce) {
                ce = ce.target.result, U.forEach(function(He, Ln) {
                  return He.error != null && (z[Ln] = He.error);
                }), N({ numFailures: de, failures: z, results: A === "delete" ? P : U.map(function(He) {
                  return He.result;
                }), lastResult: ce });
              }
              k.onerror = function(ce) {
                W(ce), Jt(ce);
              }, k.onsuccess = Jt;
            });
          }, getMany: function(w) {
            var y = w.trans, A = w.keys;
            return new Promise(function(P, D) {
              P = Z(P);
              for (var R, N = y.objectStore(b), C = A.length, T = new Array(C), x = 0, $ = 0, k = function(U) {
                U = U.target, T[U._pos] = U.result, ++$ === x && P(T);
              }, M = me(D), W = 0; W < C; ++W) A[W] != null && ((R = N.get(A[W]))._pos = W, R.onsuccess = k, R.onerror = M, ++x);
              x === 0 && P(T);
            });
          }, get: function(w) {
            var y = w.trans, A = w.key;
            return new Promise(function(P, D) {
              P = Z(P);
              var R = y.objectStore(b).get(A);
              R.onsuccess = function(N) {
                return P(N.target.result);
              }, R.onerror = me(D);
            });
          }, query: (p = m, function(w) {
            return new Promise(function(y, A) {
              y = Z(y);
              var P, D, R, x = w.trans, N = w.values, C = w.limit, k = w.query, T = C === 1 / 0 ? void 0 : C, $ = k.index, k = k.range, x = x.objectStore(b), $ = $.isPrimaryKey ? x : x.index($.name), k = a(k);
              if (C === 0) return y({ result: [] });
              p ? ((T = N ? $.getAll(k, T) : $.getAllKeys(k, T)).onsuccess = function(M) {
                return y({ result: M.target.result });
              }, T.onerror = me(A)) : (P = 0, D = !N && "openKeyCursor" in $ ? $.openKeyCursor(k) : $.openCursor(k), R = [], D.onsuccess = function(M) {
                var W = D.result;
                return W ? (R.push(N ? W.value : W.primaryKey), ++P === C ? y({ result: R }) : void W.continue()) : y({ result: R });
              }, D.onerror = me(A));
            });
          }), openCursor: function(w) {
            var y = w.trans, A = w.values, P = w.query, D = w.reverse, R = w.unique;
            return new Promise(function(N, C) {
              N = Z(N);
              var $ = P.index, T = P.range, x = y.objectStore(b), x = $.isPrimaryKey ? x : x.index($.name), $ = D ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", k = !A && "openKeyCursor" in x ? x.openKeyCursor(a(T), $) : x.openCursor(a(T), $);
              k.onerror = me(C), k.onsuccess = Z(function(M) {
                var W, U, z, de, F = k.result;
                F ? (F.___id = ++la, F.done = !1, W = F.continue.bind(F), U = (U = F.continuePrimaryKey) && U.bind(F), z = F.advance.bind(F), de = function() {
                  throw new Error("Cursor not stopped");
                }, F.trans = y, F.stop = F.continue = F.continuePrimaryKey = F.advance = function() {
                  throw new Error("Cursor not started");
                }, F.fail = Z(C), F.next = function() {
                  var ie = this, oe = 1;
                  return this.start(function() {
                    return oe-- ? ie.continue() : ie.stop();
                  }).then(function() {
                    return ie;
                  });
                }, F.start = function(ie) {
                  function oe() {
                    if (k.result) try {
                      ie();
                    } catch (ce) {
                      F.fail(ce);
                    }
                    else F.done = !0, F.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, F.stop();
                  }
                  var Jt = new Promise(function(ce, He) {
                    ce = Z(ce), k.onerror = me(He), F.fail = He, F.stop = function(Ln) {
                      F.stop = F.continue = F.continuePrimaryKey = F.advance = de, ce(Ln);
                    };
                  });
                  return k.onsuccess = Z(function(ce) {
                    k.onsuccess = oe, oe();
                  }), F.continue = W, F.continuePrimaryKey = U, F.advance = z, oe(), Jt;
                }, N(F)) : N(null);
              }, C);
            });
          }, count: function(w) {
            var y = w.query, A = w.trans, P = y.index, D = y.range;
            return new Promise(function(R, N) {
              var C = A.objectStore(b), T = P.isPrimaryKey ? C : C.index(P.name), C = a(D), T = C ? T.count(C) : T.count();
              T.onsuccess = Z(function(x) {
                return R(x.target.result);
              }), T.onerror = me(N);
            });
          } };
        }
        var o, u, d, v = (u = h, d = br((o = e).objectStoreNames), { schema: { name: o.name, tables: d.map(function(S) {
          return u.objectStore(S);
        }).map(function(S) {
          var p = S.keyPath, y = S.autoIncrement, b = G(p), w = {}, y = { name: S.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: p == null, compound: b, keyPath: p, autoIncrement: y, unique: !0, extractKey: On(p) }, indexes: br(S.indexNames).map(function(A) {
            return S.index(A);
          }).map(function(R) {
            var P = R.name, D = R.unique, N = R.multiEntry, R = R.keyPath, N = { name: P, compound: G(R), keyPath: R, unique: D, multiEntry: N, extractKey: On(R) };
            return w[bt(R)] = N;
          }), getIndexByKeyPath: function(A) {
            return w[bt(A)];
          } };
          return w[":id"] = y.primaryKey, p != null && (w[bt(p)] = y.primaryKey), y;
        }) }, hasGetAll: 0 < d.length && "getAll" in u.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), h = v.schema, m = v.hasGetAll, v = h.tables.map(s), f = {};
        return v.forEach(function(S) {
          return f[S.name] = S;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(S) {
          if (!f[S]) throw new Error("Table '".concat(S, "' not found"));
          return f[S];
        }, MIN_KEY: -1 / 0, MAX_KEY: yt(t), schema: h };
      }
      function fa(e, t, r, a) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (a = da(t, s, a), e.dbcore.reduce(function(o, u) {
          return u = u.create, l(l({}, o), u(o));
        }, a)) };
      }
      function Bt(e, a) {
        var r = a.db, a = fa(e._middlewares, r, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(s) {
          var o = s.name;
          e.core.schema.tables.some(function(u) {
            return u.name === o;
          }) && (s.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = s.core));
        });
      }
      function Gt(e, t, r, a) {
        r.forEach(function(s) {
          var o = a[s];
          t.forEach(function(u) {
            var d = function h(m, v) {
              return Wr(m, v) || (m = fe(m)) && h(m, v);
            }(u, s);
            (!d || "value" in d && d.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? Ae(u, s, { get: function() {
              return this.table(s);
            }, set: function(h) {
              Hn(this, s, { value: h, writable: !0, configurable: !0, enumerable: !0 });
            } }) : u[s] = new e.Table(s, o));
          });
        });
      }
      function _n(e, t) {
        t.forEach(function(r) {
          for (var a in r) r[a] instanceof e.Table && delete r[a];
        });
      }
      function ha(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function pa(e, t, r, a) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Sn("$meta", Er("")[0], []), e._storeNames.push("$meta"));
        var o = e._createTransaction("readwrite", e._storeNames, s);
        o.create(r), o._completion.catch(a);
        var u = o._reject.bind(o), d = K.transless || K;
        De(function() {
          return K.trans = o, K.transless = d, t !== 0 ? (Bt(e, r), m = t, ((h = o).storeNames.includes("$meta") ? h.table("$meta").get("version").then(function(v) {
            return v ?? m;
          }) : j.resolve(m)).then(function(v) {
            return S = v, p = o, b = r, w = [], v = (f = e)._versions, y = f._dbSchema = Ft(0, f.idbdb, b), (v = v.filter(function(A) {
              return A._cfg.version >= S;
            })).length !== 0 ? (v.forEach(function(A) {
              w.push(function() {
                var P = y, D = A._cfg.dbschema;
                Wt(f, P, b), Wt(f, D, b), y = f._dbSchema = D;
                var R = An(P, D);
                R.add.forEach(function($) {
                  Pn(b, $[0], $[1].primKey, $[1].indexes);
                }), R.change.forEach(function($) {
                  if ($.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var k = b.objectStore($.name);
                  $.add.forEach(function(M) {
                    return Lt(k, M);
                  }), $.change.forEach(function(M) {
                    k.deleteIndex(M.name), Lt(k, M);
                  }), $.del.forEach(function(M) {
                    return k.deleteIndex(M);
                  });
                });
                var N = A._cfg.contentUpgrade;
                if (N && A._cfg.version > S) {
                  Bt(f, b), p._memoizedTables = {};
                  var C = Qn(D);
                  R.del.forEach(function($) {
                    C[$] = P[$];
                  }), _n(f, [f.Transaction.prototype]), Gt(f, [f.Transaction.prototype], I(C), C), p.schema = C;
                  var T, x = rn(N);
                  return x && qe(), R = j.follow(function() {
                    var $;
                    (T = N(p)) && x && ($ = Re.bind(null, null), T.then($, $));
                  }), T && typeof T.then == "function" ? j.resolve(T) : R.then(function() {
                    return T;
                  });
                }
              }), w.push(function(P) {
                var D, R, N = A._cfg.dbschema;
                D = N, R = P, [].slice.call(R.db.objectStoreNames).forEach(function(C) {
                  return D[C] == null && R.db.deleteObjectStore(C);
                }), _n(f, [f.Transaction.prototype]), Gt(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), p.schema = f._dbSchema;
              }), w.push(function(P) {
                f.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(f.idbdb.version / 10) === A._cfg.version ? (f.idbdb.deleteObjectStore("$meta"), delete f._dbSchema.$meta, f._storeNames = f._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return w.length ? j.resolve(w.shift()(p.idbtrans)).then(A) : j.resolve();
            }().then(function() {
              vr(y, b);
            })) : j.resolve();
            var f, S, p, b, w, y;
          }).catch(u)) : (I(s).forEach(function(v) {
            Pn(r, v, s[v].primKey, s[v].indexes);
          }), Bt(e, r), void j.follow(function() {
            return e.on.populate.fire(o);
          }).catch(u));
          var h, m;
        });
      }
      function ga(e, t) {
        vr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Ft(0, e.idbdb, t);
        Wt(e, e._dbSchema, t);
        for (var a = 0, s = An(r, e._dbSchema).change; a < s.length; a++) {
          var o = function(u) {
            if (u.change.length || u.recreate) return console.warn("Unable to patch indexes of table ".concat(u.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(u.name);
            u.add.forEach(function(h) {
              ge && console.debug("Dexie upgrade patch: Creating missing index ".concat(u.name, ".").concat(h.src)), Lt(d, h);
            });
          }(s[a]);
          if (typeof o == "object") return o.value;
        }
      }
      function An(e, t) {
        var r, a = { del: [], add: [], change: [] };
        for (r in e) t[r] || a.del.push(r);
        for (r in t) {
          var s = e[r], o = t[r];
          if (s) {
            var u = { name: r, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || s.primKey.auto !== o.primKey.auto) u.recreate = !0, a.change.push(u);
            else {
              var d = s.idxByName, h = o.idxByName, m = void 0;
              for (m in d) h[m] || u.del.push(m);
              for (m in h) {
                var v = d[m], f = h[m];
                v ? v.src !== f.src && u.change.push(f) : u.add.push(f);
              }
              (0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && a.change.push(u);
            }
          } else a.add.push([r, o]);
        }
        return a;
      }
      function Pn(e, t, r, a) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return a.forEach(function(o) {
          return Lt(s, o);
        }), s;
      }
      function vr(e, t) {
        I(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (ge && console.debug("Dexie: Creating missing table", r), Pn(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Lt(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Ft(e, t, r) {
        var a = {};
        return Ot(t.objectStoreNames, 0).forEach(function(s) {
          for (var o = r.objectStore(s), u = wn(yr(m = o.keyPath), m || "", !0, !1, !!o.autoIncrement, m && typeof m != "string", !0), d = [], h = 0; h < o.indexNames.length; ++h) {
            var v = o.index(o.indexNames[h]), m = v.keyPath, v = wn(v.name, m, !!v.unique, !!v.multiEntry, !1, m && typeof m != "string", !1);
            d.push(v);
          }
          a[s] = Sn(s, u, d);
        }), a;
      }
      function Wt(e, t, r) {
        for (var a = r.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var o = a[s], u = r.objectStore(o);
          e._hasGetAll = "getAll" in u;
          for (var d = 0; d < u.indexNames.length; ++d) {
            var h = u.indexNames[d], m = u.index(h).keyPath, v = typeof m == "string" ? m : "[" + Ot(m).join("+") + "]";
            !t[o] || (m = t[o].idxByName[v]) && (m.name = h, delete t[o].idxByName[v], t[o].idxByName[h] = m);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _.WorkerGlobalScope && _ instanceof _.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Er(e) {
        return e.split(",").map(function(t, r) {
          var a = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), s = /^\[/.test(a) ? a.match(/^\[(.*)\]$/)[1].split("+") : a;
          return wn(a, s || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), G(s), r === 0);
        });
      }
      var ma = (Ut.prototype._parseStoresSpec = function(e, t) {
        I(e).forEach(function(r) {
          if (e[r] !== null) {
            var a = Er(e[r]), s = a.shift();
            if (s.unique = !0, s.multi) throw new L.Schema("Primary key cannot be multi-valued");
            a.forEach(function(o) {
              if (o.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!o.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), t[r] = Sn(r, s, a);
          }
        });
      }, Ut.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? re(this._cfg.storesSource, r) : r;
        var r = t._versions, a = {}, s = {};
        return r.forEach(function(o) {
          re(a, o._cfg.storesSource), s = o._cfg.dbschema = {}, o._parseStoresSpec(a, s);
        }), t._dbSchema = s, _n(t, [t._allTables, t, t.Transaction.prototype]), Gt(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], I(s), s), t._storeNames = I(s), this;
      }, Ut.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = sn(this._cfg.contentUpgrade || Q, e), this;
      }, Ut);
      function Ut() {
      }
      function Dn(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new we(Ct, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function Rn(e) {
        return e && typeof e.databases == "function";
      }
      function Nn(e) {
        return De(function() {
          return K.letThrough = !0, e();
        });
      }
      function Tn(e) {
        return !("from" in e);
      }
      var se = function(e, t) {
        if (!this) {
          var r = new se();
          return e && "d" in e && re(r, e), r;
        }
        re(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function vt(e, t, r) {
        var a = H(t, r);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (Tn(e)) return re(e, { from: t, to: r, d: 1 });
          var s = e.l, a = e.r;
          if (H(r, e.from) < 0) return s ? vt(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Sr(e);
          if (0 < H(t, e.to)) return a ? vt(a, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Sr(e);
          H(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), 0 < H(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && Et(e, s), a && r && Et(e, a);
        }
      }
      function Et(e, t) {
        Tn(t) || function r(a, h) {
          var o = h.from, u = h.to, d = h.l, h = h.r;
          vt(a, o, u), d && r(a, d), h && r(a, h);
        }(e, t);
      }
      function wr(e, t) {
        var r = zt(t), a = r.next();
        if (a.done) return !1;
        for (var s = a.value, o = zt(e), u = o.next(s.from), d = u.value; !a.done && !u.done; ) {
          if (H(d.from, s.to) <= 0 && 0 <= H(d.to, s.from)) return !0;
          H(s.from, d.from) < 0 ? s = (a = r.next(d.from)).value : d = (u = o.next(s.from)).value;
        }
        return !1;
      }
      function zt(e) {
        var t = Tn(e) ? null : { s: 0, n: e };
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
      function Ht(e, t) {
        return I(t).forEach(function(r) {
          e[r] ? Et(e[r], t[r]) : e[r] = function a(s) {
            var o, u, d = {};
            for (o in s) ae(s, o) && (u = s[o], d[o] = !u || typeof u != "object" || Jn.has(u.constructor) ? u : a(u));
            return d;
          }(t[r]);
        }), e;
      }
      function In(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && wr(t[r], e[r]);
        });
      }
      _e(se.prototype, ((he = { add: function(e) {
        return Et(this, e), this;
      }, addKey: function(e) {
        return vt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return vt(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = zt(this).next(e).value;
        return t && H(t.from, e) <= 0 && 0 <= H(t.to, e);
      } })[nn] = function() {
        return zt(this);
      }, he));
      var Ue = {}, xn = {}, kn = !1;
      function Vt(e) {
        Ht(xn, e), kn || (kn = !0, setTimeout(function() {
          kn = !1, Cn(xn, !(xn = {}));
        }, 0));
      }
      function Cn(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(Ue); a < s.length; a++) _r(u = s[a], e, r, t);
        else for (var o in e) {
          var u, d = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          d && (o = d[1], d = d[2], (u = Ue["idb://".concat(o, "/").concat(d)]) && _r(u, e, r, t));
        }
        r.forEach(function(h) {
          return h();
        });
      }
      function _r(e, t, r, a) {
        for (var s = [], o = 0, u = Object.entries(e.queries.query); o < u.length; o++) {
          for (var d = u[o], h = d[0], m = [], v = 0, f = d[1]; v < f.length; v++) {
            var S = f[v];
            In(t, S.obsSet) ? S.subscribers.forEach(function(y) {
              return r.add(y);
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
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? q(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var a = t.openCanceller, s = Math.round(10 * e.verno), o = !1;
        function u() {
          if (t.openCanceller !== a) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new j(function(S, p) {
            if (u(), !r) throw new L.MissingAPI();
            var b = e.name, w = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!w) throw new L.MissingAPI();
            w.onerror = me(p), w.onblocked = Z(e._fireOnBlocked), w.onupgradeneeded = Z(function(y) {
              var A;
              v = w.transaction, t.autoSchema && !e._options.allowEmptyDB ? (w.onerror = gt, v.abort(), w.result.close(), (A = r.deleteDatabase(b)).onsuccess = A.onerror = Z(function() {
                p(new L.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (v.onerror = me(p), y = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion, f = y < 1, e.idbdb = w.result, o && ga(e, v), pa(e, y / 10, v, p));
            }, p), w.onsuccess = Z(function() {
              v = null;
              var y, A, P, D, R, N = e.idbdb = w.result, C = Ot(N.objectStoreNames);
              if (0 < C.length) try {
                var T = N.transaction((D = C).length === 1 ? D[0] : D, "readonly");
                if (t.autoSchema) A = N, P = T, (y = e).verno = A.version / 10, P = y._dbSchema = Ft(0, A, P), y._storeNames = Ot(A.objectStoreNames, 0), Gt(y, [y._allTables], I(P), P);
                else if (Wt(e, e._dbSchema, T), ((R = An(Ft(0, (R = e).idbdb, T), R._dbSchema)).add.length || R.change.some(function(x) {
                  return x.add.length || x.change.length;
                })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), N.close(), s = N.version + 1, o = !0, S(d());
                Bt(e, T);
              } catch {
              }
              et.push(e), N.onversionchange = Z(function(x) {
                t.vcFired = !0, e.on("versionchange").fire(x);
              }), N.onclose = Z(function(x) {
                e.on("close").fire(x);
              }), f && (R = e._deps, T = b, N = R.indexedDB, R = R.IDBKeyRange, Rn(N) || T === Ct || Dn(N, R).put({ name: T }).catch(Q)), S();
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
          return u(), t.onReadyBeingFired = [], j.resolve(Nn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function S() {
            if (0 < t.onReadyBeingFired.length) {
              var p = t.onReadyBeingFired.reduce(sn, Q);
              return t.onReadyBeingFired = [], j.resolve(Nn(function() {
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
              b.name && (S["idb://".concat(e.name, "/").concat(p.name, "/").concat(b.name)] = new se(-1 / 0, [[[]]]));
            }), S["idb://".concat(e.name, "/").concat(p.name, "/")] = S["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new se(-1 / 0, [[[]]]);
          }), Ie(mt).fire(S), Cn(S, !0)), e;
        });
      }
      function $n(e) {
        function t(o) {
          return e.next(o);
        }
        var r = s(t), a = s(function(o) {
          return e.throw(o);
        });
        function s(o) {
          return function(h) {
            var d = o(h), h = d.value;
            return d.done ? h : h && typeof h.then == "function" ? h.then(r, a) : G(h) ? Promise.all(h).then(r, a) : r(h);
          };
        }
        return s(t)();
      }
      function Yt(e, t, r) {
        for (var a = G(e) ? e.slice() : [e], s = 0; s < r; ++s) a.push(t);
        return a;
      }
      var ba = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var r = e.table(t), a = r.schema, s = {}, o = [];
          function u(f, S, p) {
            var b = bt(f), w = s[b] = s[b] || [], y = f == null ? 0 : typeof f == "string" ? 1 : f.length, A = 0 < S, A = l(l({}, p), { name: A ? "".concat(b, "(virtual-from:").concat(p.name, ")") : p.name, lowLevelIndex: p, isVirtual: A, keyTail: S, keyLength: y, extractKey: On(f), unique: !A && p.unique });
            return w.push(A), A.isPrimaryKey || o.push(A), 1 < y && u(y === 2 ? f[0] : f.slice(0, y - 1), S + 1, p), w.sort(function(P, D) {
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
            return p.isVirtual ? l(l({}, f), { query: { index: p.lowLevelIndex, range: (S = f.query.range, p = p.keyTail, { type: S.type === 1 ? 2 : S.type, lower: Yt(S.lower, S.lowerOpen ? e.MAX_KEY : e.MIN_KEY, p), lowerOpen: !0, upper: Yt(S.upper, S.upperOpen ? e.MIN_KEY : e.MAX_KEY, p), upperOpen: !0 }) } }) : f;
          }
          return l(l({}, r), { schema: l(l({}, a), { primaryKey: t, indexes: o, getIndexByKeyPath: function(f) {
            return (f = s[bt(f)]) && f[0];
          } }), count: function(f) {
            return r.count(v(f));
          }, query: function(f) {
            return r.query(v(f));
          }, openCursor: function(f) {
            var S = f.query.index, p = S.keyTail, b = S.isVirtual, w = S.keyLength;
            return b ? r.openCursor(v(f)).then(function(A) {
              return A && y(A);
            }) : r.openCursor(f);
            function y(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(Yt(P, f.reverse ? e.MAX_KEY : e.MIN_KEY, p)) : f.unique ? A.continue(A.key.slice(0, w).concat(f.reverse ? e.MIN_KEY : e.MAX_KEY, p)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                A.continuePrimaryKey(Yt(P, e.MAX_KEY, p), D);
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
      function jn(e, t, r, a) {
        return r = r || {}, a = a || "", I(e).forEach(function(s) {
          var o, u, d;
          ae(t, s) ? (o = e[s], u = t[s], typeof o == "object" && typeof u == "object" && o && u ? (d = tn(o)) !== tn(u) ? r[a + s] = t[s] : d === "Object" ? jn(o, u, r, a + s + ".") : o !== u && (r[a + s] = t[s]) : o !== u && (r[a + s] = t[s])) : r[a + s] = void 0;
        }), I(t).forEach(function(s) {
          ae(e, s) || (r[a + s] = t[s]);
        }), r;
      }
      function Mn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var va = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(t) {
          var r = e.table(t), a = r.schema.primaryKey;
          return l(l({}, r), { mutate: function(s) {
            var o = K.trans, u = o.table(t).hook, d = u.deleting, h = u.creating, m = u.updating;
            switch (s.type) {
              case "add":
                if (h.fire === Q) break;
                return o._promise("readwrite", function() {
                  return v(s);
                }, !0);
              case "put":
                if (h.fire === Q && m.fire === Q) break;
                return o._promise("readwrite", function() {
                  return v(s);
                }, !0);
              case "delete":
                if (d.fire === Q) break;
                return o._promise("readwrite", function() {
                  return v(s);
                }, !0);
              case "deleteRange":
                if (d.fire === Q) break;
                return o._promise("readwrite", function() {
                  return function f(S, p, b) {
                    return r.query({ trans: S, values: !1, query: { index: a, range: p }, limit: b }).then(function(w) {
                      var y = w.result;
                      return v({ type: "delete", keys: y, trans: S }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : y.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : f(S, l(l({}, p), { lower: y[y.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function v(f) {
              var S, p, b, w = K.trans, y = f.keys || Mn(a, f);
              if (!y) throw new Error("Keys missing");
              return (f = f.type === "add" || f.type === "put" ? l(l({}, f), { keys: y }) : l({}, f)).type !== "delete" && (f.values = E([], f.values)), f.keys && (f.keys = E([], f.keys)), S = r, b = y, ((p = f).type === "add" ? Promise.resolve([]) : S.getMany({ trans: p.trans, keys: b, cache: "immutable" })).then(function(A) {
                var P = y.map(function(D, R) {
                  var N, C, T, x = A[R], $ = { onerror: null, onsuccess: null };
                  return f.type === "delete" ? d.fire.call($, D, x, w) : f.type === "add" || x === void 0 ? (N = h.fire.call($, D, f.values[R], w), D == null && N != null && (f.keys[R] = D = N, a.outbound || ue(f.values[R], a.keyPath, D))) : (N = jn(x, f.values[R]), (C = m.fire.call($, N, D, x, w)) && (T = f.values[R], Object.keys(C).forEach(function(k) {
                    ae(T, k) ? T[k] = C[k] : ue(T, k, C[k]);
                  }))), $;
                });
                return r.mutate(f).then(function(D) {
                  for (var R = D.failures, N = D.results, C = D.numFailures, D = D.lastResult, T = 0; T < y.length; ++T) {
                    var x = (N || y)[T], $ = P[T];
                    x == null ? $.onerror && $.onerror(R[T]) : $.onsuccess && $.onsuccess(f.type === "put" && A[T] ? f.values[T] : x);
                  }
                  return { failures: R, results: N, numFailures: C, lastResult: D };
                }).catch(function(D) {
                  return P.forEach(function(R) {
                    return R.onerror && R.onerror(D);
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
          for (var a = [], s = 0, o = 0; s < t.keys.length && o < e.length; ++s) H(t.keys[s], e[o]) === 0 && (a.push(r ? Ce(t.values[s]) : t.values[s]), ++o);
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
            return s ? j.resolve(s) : r.getMany(a).then(function(o) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Ce(o) : o }, o;
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
        var t = e.schema.name, r = new se(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, o) {
          if (K.subscr && s !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(K.querier));
          return e.transaction(a, s, o);
        }, table: function(a) {
          var s = e.table(a), o = s.schema, u = o.primaryKey, f = o.indexes, d = u.extractKey, h = u.outbound, m = u.autoIncrement && f.filter(function(p) {
            return p.compound && p.keyPath.includes(u.keyPath);
          }), v = l(l({}, s), { mutate: function(p) {
            function b(k) {
              return k = "idb://".concat(t, "/").concat(a, "/").concat(k), D[k] || (D[k] = new se());
            }
            var w, y, A, P = p.trans, D = p.mutatedParts || (p.mutatedParts = {}), R = b(""), N = b(":dels"), C = p.type, $ = p.type === "deleteRange" ? [p.range] : p.type === "delete" ? [p.keys] : p.values.length < 50 ? [Mn(u, p).filter(function(k) {
              return k;
            }), p.values] : [], T = $[0], x = $[1], $ = p.trans._cache;
            return G(T) ? (R.addKeys(T), ($ = C === "delete" || T.length === x.length ? Ar(T, $) : null) || N.addKeys(T), ($ || x) && (w = b, y = $, A = x, o.indexes.forEach(function(k) {
              var M = w(k.name || "");
              function W(z) {
                return z != null ? k.extractKey(z) : null;
              }
              function U(z) {
                return k.multiEntry && G(z) ? z.forEach(function(de) {
                  return M.addKey(de);
                }) : M.addKey(z);
              }
              (y || A).forEach(function(z, ie) {
                var F = y && W(y[ie]), ie = A && W(A[ie]);
                H(F, ie) !== 0 && (F != null && U(F), ie != null && U(ie));
              });
            }))) : T ? (x = { from: (x = T.lower) !== null && x !== void 0 ? x : e.MIN_KEY, to: (x = T.upper) !== null && x !== void 0 ? x : e.MAX_KEY }, N.add(x), R.add(x)) : (R.add(r), N.add(r), o.indexes.forEach(function(k) {
              return b(k.name).add(r);
            })), s.mutate(p).then(function(k) {
              return !T || p.type !== "add" && p.type !== "put" || (R.addKeys(k.results), m && m.forEach(function(M) {
                for (var W = p.values.map(function(F) {
                  return M.extractKey(F);
                }), U = M.keyPath.findIndex(function(F) {
                  return F === u.keyPath;
                }), z = 0, de = k.results.length; z < de; ++z) W[z][U] = k.results[z];
                b(M.name).addKeys(W);
              })), P.mutatedParts = Ht(P.mutatedParts || {}, D), k;
            });
          } }), f = function(b) {
            var w = b.query, b = w.index, w = w.range;
            return [b, new se((b = w.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (w = w.upper) !== null && w !== void 0 ? w : e.MAX_KEY)];
          }, S = { get: function(p) {
            return [u, new se(p.key)];
          }, getMany: function(p) {
            return [u, new se().addKeys(p.keys)];
          }, count: f, query: f, openCursor: f };
          return I(S).forEach(function(p) {
            v[p] = function(b) {
              var w = K.subscr, y = !!w, A = Pr(K, s) && Dr(p, b) ? b.obsSet = {} : w;
              if (y) {
                var P = function(x) {
                  return x = "idb://".concat(t, "/").concat(a, "/").concat(x), A[x] || (A[x] = new se());
                }, D = P(""), R = P(":dels"), w = S[p](b), y = w[0], w = w[1];
                if ((p === "query" && y.isPrimaryKey && !b.values ? R : P(y.name || "")).add(w), !y.isPrimaryKey) {
                  if (p !== "count") {
                    var N = p === "query" && h && b.values && s.query(l(l({}, b), { values: !1 }));
                    return s[p].apply(this, arguments).then(function(x) {
                      if (p === "query") {
                        if (h && b.values) return N.then(function(W) {
                          return W = W.result, D.addKeys(W), x;
                        });
                        var $ = b.values ? x.result.map(d) : x.result;
                        (b.values ? D : R).addKeys($);
                      } else if (p === "openCursor") {
                        var k = x, M = b.values;
                        return k && Object.create(k, { key: { get: function() {
                          return R.addKey(k.primaryKey), k.key;
                        } }, primaryKey: { get: function() {
                          var W = k.primaryKey;
                          return R.addKey(W), W;
                        } }, value: { get: function() {
                          return M && D.addKey(k.primaryKey), k.value;
                        } } });
                      }
                      return x;
                    });
                  }
                  R.add(r);
                }
              }
              return s[p].apply(this, arguments);
            };
          }), v;
        } });
      } };
      function Rr(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var a = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === a ? null : (t = l({}, t), G(t.keys) && (t.keys = t.keys.filter(function(s, o) {
          return !(o in r.failures);
        })), "values" in t && G(t.values) && (t.values = t.values.filter(function(s, o) {
          return !(o in r.failures);
        })), t);
      }
      function Kn(e, t) {
        return r = e, ((a = t).lower === void 0 || (a.lowerOpen ? 0 < H(r, a.lower) : 0 <= H(r, a.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? H(e, t.upper) < 0 : H(e, t.upper) <= 0));
        var r, a;
      }
      function Nr(e, t, S, a, s, o) {
        if (!S || S.length === 0) return e;
        var u = t.query.index, d = u.multiEntry, h = t.query.range, m = a.schema.primaryKey.extractKey, v = u.extractKey, f = (u.lowLevelIndex || u).extractKey, S = S.reduce(function(p, b) {
          var w = p, y = [];
          if (b.type === "add" || b.type === "put") for (var A = new se(), P = b.values.length - 1; 0 <= P; --P) {
            var D, R = b.values[P], N = m(R);
            A.hasKey(N) || (D = v(R), (d && G(D) ? D.some(function(k) {
              return Kn(k, h);
            }) : Kn(D, h)) && (A.addKey(N), y.push(R)));
          }
          switch (b.type) {
            case "add":
              var C = new se().addKeys(t.values ? p.map(function(M) {
                return m(M);
              }) : p), w = p.concat(t.values ? y.filter(function(M) {
                return M = m(M), !C.hasKey(M) && (C.addKey(M), !0);
              }) : y.map(function(M) {
                return m(M);
              }).filter(function(M) {
                return !C.hasKey(M) && (C.addKey(M), !0);
              }));
              break;
            case "put":
              var T = new se().addKeys(b.values.map(function(M) {
                return m(M);
              }));
              w = p.filter(function(M) {
                return !T.hasKey(t.values ? m(M) : M);
              }).concat(t.values ? y : y.map(function(M) {
                return m(M);
              }));
              break;
            case "delete":
              var x = new se().addKeys(b.keys);
              w = p.filter(function(M) {
                return !x.hasKey(t.values ? m(M) : M);
              });
              break;
            case "deleteRange":
              var $ = b.range;
              w = p.filter(function(M) {
                return !Kn(m(M), $);
              });
          }
          return w;
        }, e);
        return S === e ? e : (S.sort(function(p, b) {
          return H(f(p), f(b)) || H(m(p), m(b));
        }), t.limit && t.limit < 1 / 0 && (S.length > t.limit ? S.length = t.limit : e.length === t.limit && S.length < t.limit && (s.dirty = !0)), o ? Object.freeze(S) : S);
      }
      function Tr(e, t) {
        return H(e.lower, t.lower) === 0 && H(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Sa(e, t) {
        return function(r, a, s, o) {
          if (r === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = H(r, a)) === 0) {
            if (s && o) return 0;
            if (s) return 1;
            if (o) return -1;
          }
          return a;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, a, s, o) {
          if (r === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = H(r, a)) === 0) {
            if (s && o) return 0;
            if (s) return -1;
            if (o) return 1;
          }
          return a;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Oa(e, t, r, a) {
        e.subscribers.add(r), a.addEventListener("abort", function() {
          var s, o;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, o = t, setTimeout(function() {
            s.subscribers.size === 0 && $e(o, s);
          }, 3e3));
        });
      }
      var _a = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return l(l({}, e), { transaction: function(r, a, s) {
          var o, u, d = e.transaction(r, a, s);
          return a === "readwrite" && (u = (o = new AbortController()).signal, s = function(h) {
            return function() {
              if (o.abort(), a === "readwrite") {
                for (var m = /* @__PURE__ */ new Set(), v = 0, f = r; v < f.length; v++) {
                  var S = f[v], p = Ue["idb://".concat(t, "/").concat(S)];
                  if (p) {
                    var b = e.table(S), w = p.optimisticOps.filter(function(M) {
                      return M.trans === d;
                    });
                    if (d._explicit && h && d.mutatedParts) for (var y = 0, A = Object.values(p.queries.query); y < A.length; y++) for (var P = 0, D = (C = A[y]).slice(); P < D.length; P++) In((T = D[P]).obsSet, d.mutatedParts) && ($e(C, T), T.subscribers.forEach(function(M) {
                      return m.add(M);
                    }));
                    else if (0 < w.length) {
                      p.optimisticOps = p.optimisticOps.filter(function(M) {
                        return M.trans !== d;
                      });
                      for (var R = 0, N = Object.values(p.queries.query); R < N.length; R++) for (var C, T, x, $ = 0, k = (C = N[R]).slice(); $ < k.length; $++) (T = k[$]).res != null && d.mutatedParts && (h && !T.dirty ? (x = Object.isFrozen(T.res), x = Nr(T.res, T.req, w, b, T, x), T.dirty ? ($e(C, T), T.subscribers.forEach(function(M) {
                        return m.add(M);
                      })) : x !== T.res && (T.res = x, T.promise = j.resolve({ result: x }))) : (T.dirty && $e(C, T), T.subscribers.forEach(function(M) {
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
          return l(l({}, a), { mutate: function(o) {
            var u = K.trans;
            if (s.outbound || u.db._options.cache === "disabled" || u.explicit || u.idbtrans.mode !== "readwrite") return a.mutate(o);
            var d = Ue["idb://".concat(t, "/").concat(r)];
            return d ? (u = a.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Mn(s, o).some(function(h) {
              return h == null;
            })) ? (d.optimisticOps.push(o), o.mutatedParts && Vt(o.mutatedParts), u.then(function(h) {
              0 < h.numFailures && ($e(d.optimisticOps, o), (h = Rr(0, o, h)) && d.optimisticOps.push(h), o.mutatedParts && Vt(o.mutatedParts));
            }), u.catch(function() {
              $e(d.optimisticOps, o), o.mutatedParts && Vt(o.mutatedParts);
            })) : u.then(function(h) {
              var m = Rr(0, l(l({}, o), { values: o.values.map(function(v, f) {
                var S;
                return h.failures[f] ? v : (v = (S = s.keyPath) !== null && S !== void 0 && S.includes(".") ? Ce(v) : l({}, v), ue(v, s.keyPath, h.results[f]), v);
              }) }), h);
              d.optimisticOps.push(m), queueMicrotask(function() {
                return o.mutatedParts && Vt(o.mutatedParts);
              });
            }), u) : a.mutate(o);
          }, query: function(o) {
            if (!Pr(K, a) || !Dr("query", o)) return a.query(o);
            var u = ((m = K.trans) === null || m === void 0 ? void 0 : m.db._options.cache) === "immutable", f = K, d = f.requery, h = f.signal, m = function(b, w, y, A) {
              var P = Ue["idb://".concat(b, "/").concat(w)];
              if (!P) return [];
              if (!(w = P.queries[y])) return [null, !1, P, null];
              var D = w[(A.query ? A.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (y) {
                case "query":
                  var R = D.find(function(N) {
                    return N.req.limit === A.limit && N.req.values === A.values && Tr(N.req.query.range, A.query.range);
                  });
                  return R ? [R, !0, P, D] : [D.find(function(N) {
                    return ("limit" in N.req ? N.req.limit : 1 / 0) >= A.limit && (!A.values || N.req.values) && Sa(N.req.query.range, A.query.range);
                  }), !1, P, D];
                case "count":
                  return R = D.find(function(N) {
                    return Tr(N.req.query.range, A.query.range);
                  }), [R, !!R, P, D];
              }
            }(t, r, "query", o), v = m[0], f = m[1], S = m[2], p = m[3];
            return v && f ? v.obsSet = o.obsSet : (f = a.query(o).then(function(b) {
              var w = b.result;
              if (v && (v.res = w), u) {
                for (var y = 0, A = w.length; y < A; ++y) Object.freeze(w[y]);
                Object.freeze(w);
              } else b.result = Ce(w);
              return b;
            }).catch(function(b) {
              return p && v && $e(p, v), Promise.reject(b);
            }), v = { obsSet: o.obsSet, promise: f, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, p ? p.push(v) : (p = [v], (S = S || (Ue["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = p)), Oa(v, p, d, h), v.promise.then(function(b) {
              return { result: Nr(b.result, o, S?.optimisticOps, a, v, u) };
            });
          } });
        } });
      } };
      function Qt(e, t) {
        return new Proxy(e, { get: function(r, a, s) {
          return a === "db" ? t : Reflect.get(r, a, s);
        } });
      }
      var we = (ee.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new L.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(ha), r.stores({}), this._state.autoSchema = !1, r);
      }, ee.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || K.letThrough || this._vip) ? e() : new j(function(r, a) {
          if (t._state.openComplete) return a(new L.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void a(new L.DatabaseClosed());
            t.open().catch(Q);
          }
          t._state.dbReadyPromise.then(r, a);
        }).then(e);
      }, ee.prototype.use = function(e) {
        var t = e.stack, r = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: a ?? 10, name: s }), e.sort(function(o, u) {
          return o.level - u.level;
        }), this;
      }, ee.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, a = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return a ? s.create !== a : !!r && s.name !== r;
        })), this;
      }, ee.prototype.open = function() {
        var e = this;
        return Le(Pe, function() {
          return ya(e);
        });
      }, ee.prototype._close = function() {
        var e = this._state, t = et.indexOf(this);
        if (0 <= t && et.splice(t, 1), this.idbdb) {
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
        return new j(function(s, o) {
          function u() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = Z(function() {
              var h, m, v;
              h = t._deps, m = t.name, v = h.indexedDB, h = h.IDBKeyRange, Rn(v) || m === Ct || Dn(v, h).delete(m).catch(Q), s();
            }), d.onerror = me(o), d.onblocked = t._fireOnBlocked;
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
        return I(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), ee.prototype.transaction = function() {
        var e = function(t, r, a) {
          var s = arguments.length;
          if (s < 2) throw new L.InvalidArgument("Too few arguments");
          for (var o = new Array(s - 1); --s; ) o[s - 1] = arguments[s];
          return a = o.pop(), [t, Xn(o), a];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ee.prototype._transaction = function(e, t, r) {
        var a = this, s = K.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var o, u, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (u = t.map(function(m) {
            if (m = m instanceof a.Table ? m.name : m, typeof m != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return m;
          }), e == "r" || e === gn) o = gn;
          else {
            if (e != "rw" && e != mn) throw new L.InvalidArgument("Invalid transaction mode: " + e);
            o = mn;
          }
          if (s) {
            if (s.mode === gn && o === mn) {
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
            var w = K.transless || K, y = v._createTransaction(f, S, v._dbSchema, p);
            if (y.explicit = !0, w = { trans: y, transless: w }, p) y.idbtrans = p.idbtrans;
            else try {
              y.create(), y.idbtrans._explicit = !0, v._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === an.InvalidState && v.isOpen() && 0 < --v._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), v.close({ disableAutoOpen: !1 }), v.open().then(function() {
                return m(v, f, S, null, b);
              })) : q(D);
            }
            var A, P = rn(b);
            return P && qe(), w = j.follow(function() {
              var D;
              (A = b.call(y, y)) && (P ? (D = Re.bind(null, null), A.then(D, D)) : typeof A.next == "function" && typeof A.throw == "function" && (A = $n(A)));
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
        }.bind(null, this, o, u, s, r);
        return s ? s._promise(o, h, "lock") : K.trans ? Le(K.transless, function() {
          return a._whenReady(h);
        }) : this._whenReady(h);
      }, ee.prototype.table = function(e) {
        if (!ae(this._allTables, e)) throw new L.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ee);
      function ee(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var a = ee.dependencies;
        this._options = t = l({ addons: ee.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, a = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, o, u, d, h, m = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Q, dbReadyPromise: null, cancelOpen: Q, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        m.dbReadyPromise = new j(function(f) {
          m.dbReadyResolve = f;
        }), m.openCanceller = new j(function(f, S) {
          m.cancelOpen = S;
        }), this._state = m, this.name = e, this.on = ft(this, "populate", "blocked", "versionchange", "close", { ready: [sn, Q] }), this.on.ready.subscribe = Vn(this.on.ready.subscribe, function(f) {
          return function(S, p) {
            ee.vip(function() {
              var b, w = r._state;
              w.openComplete ? (w.dbOpenError || j.resolve().then(S), p && f(S)) : w.onReadyBeingFired ? (w.onReadyBeingFired.push(S), p && f(S)) : (f(S), b = r, p || f(function y() {
                b.on.ready.unsubscribe(S), b.on.ready.unsubscribe(y);
              }));
            });
          };
        }), this.Collection = (s = this, ht(ia.prototype, function(A, y) {
          this.db = s;
          var p = or, b = null;
          if (y) try {
            p = y();
          } catch (P) {
            b = P;
          }
          var w = A._ctx, y = w.table, A = y.hook.reading.fire;
          this._ctx = { table: y, index: w.index, isPrimKey: !w.index || y.schema.primKey.keyPath && w.index === y.schema.primKey.name, range: p, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: w.or, valueMapper: A !== ot ? A : null };
        })), this.Table = (o = this, ht(dr.prototype, function(f, S, p) {
          this.db = o, this._tx = p, this.name = f, this.schema = S, this.hook = o._allTables[f] ? o._allTables[f].hook : ft(null, { creating: [Jr, Q], reading: [Xr, ot], updating: [qr, Q], deleting: [Zr, Q] });
        })), this.Transaction = (u = this, ht(ua.prototype, function(f, S, p, b, w) {
          var y = this;
          this.db = u, this.mode = f, this.storeNames = S, this.schema = p, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = ft(this, "complete", "error", "abort"), this.parent = w || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new j(function(A, P) {
            y._resolve = A, y._reject = P;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(A) {
            var P = y.active;
            return y.active = !1, y.on.error.fire(A), y.parent ? y.parent._reject(A) : P && y.idbtrans && y.idbtrans.abort(), q(A);
          });
        })), this.Version = (d = this, ht(ma.prototype, function(f) {
          this.db = d, this._cfg = { version: f, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (h = this, ht(mr.prototype, function(f, S, p) {
          if (this.db = h, this._ctx = { table: f, index: S === ":id" ? null : S, or: p }, this._cmp = this._ascending = H, this._descending = function(b, w) {
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
        }), this._maxKey = yt(t.IDBKeyRange), this._createTransaction = function(f, S, p, b) {
          return new r.Transaction(f, S, p, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(f) {
          r.on("blocked").fire(f), et.filter(function(S) {
            return S.name === r.name && S !== r && !S._state.vcFired;
          }).map(function(S) {
            return S.on("versionchange").fire(f);
          });
        }, this.use(Ea), this.use(_a), this.use(wa), this.use(ba), this.use(va);
        var v = new Proxy(this, { get: function(f, S, p) {
          if (S === "_vip") return !0;
          if (S === "table") return function(w) {
            return Qt(r.table(w), v);
          };
          var b = Reflect.get(f, S, p);
          return b instanceof dr ? Qt(b, v) : S === "tables" ? b.map(function(w) {
            return Qt(w, v);
          }) : S === "_createTransaction" ? function() {
            return Qt(b.apply(this, arguments), v);
          } : b;
        } });
        this.vip = v, a.forEach(function(f) {
          return f(r);
        });
      }
      var Xt, he = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Aa = (Bn.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Bn.prototype[he] = function() {
        return this;
      }, Bn);
      function Bn(e) {
        this._subscribe = e;
      }
      try {
        Xt = { indexedDB: _.indexedDB || _.mozIndexedDB || _.webkitIndexedDB || _.msIndexedDB, IDBKeyRange: _.IDBKeyRange || _.webkitIDBKeyRange };
      } catch {
        Xt = { indexedDB: null, IDBKeyRange: null };
      }
      function Ir(e) {
        var t, r = !1, a = new Aa(function(s) {
          var o = rn(e), u, d = !1, h = {}, m = {}, v = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, u && u.abort(), f && Ie.storagemutated.unsubscribe(p));
          } };
          s.start && s.start(v);
          var f = !1, S = function() {
            return pn(b);
          }, p = function(w) {
            Ht(h, w), In(m, h) && S();
          }, b = function() {
            var w, y, A;
            !d && Xt.indexedDB && (h = {}, w = {}, u && u.abort(), u = new AbortController(), A = function(P) {
              var D = Je();
              try {
                o && qe();
                var R = De(e, P);
                return R = o ? R.finally(Re) : R;
              } finally {
                D && Ze();
              }
            }(y = { subscr: w, signal: u.signal, requery: S, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              r = !0, t = P, d || y.signal.aborted || (h = {}, function(D) {
                for (var R in D) if (ae(D, R)) return;
                return 1;
              }(m = w) || f || (Ie(mt, p), f = !0), pn(function() {
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
      var ze = we;
      function Gn(e) {
        var t = xe;
        try {
          xe = !0, Ie.storagemutated.fire(e), Cn(e, !0);
        } finally {
          xe = t;
        }
      }
      _e(ze, l(l({}, At), { delete: function(e) {
        return new ze(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new ze(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = ze.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (Rn(r) ? Promise.resolve(r.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Ct;
            });
          }) : Dn(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return q(new L.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          re(this, e);
        };
      }, ignoreTransaction: function(e) {
        return K.trans ? Le(K.transless, e) : e();
      }, vip: Nn, async: function(e) {
        return function() {
          try {
            var t = $n(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : j.resolve(t);
          } catch (r) {
            return q(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var a = $n(e.apply(r, t || []));
          return a && typeof a.then == "function" ? a : j.resolve(a);
        } catch (s) {
          return q(s);
        }
      }, currentTransaction: { get: function() {
        return K.trans || null;
      } }, waitFor: function(e, t) {
        return t = j.resolve(typeof e == "function" ? ze.ignoreTransaction(e) : e).timeout(t || 6e4), K.trans ? K.trans.waitFor(t) : t;
      }, Promise: j, debug: { get: function() {
        return ge;
      }, set: function(e) {
        er(e);
      } }, derive: Ve, extend: re, props: _e, override: Vn, Events: ft, on: Ie, liveQuery: Ir, extendObservabilitySet: Ht, getByKeyPath: be, setByKeyPath: ue, delByKeyPath: function(e, t) {
        typeof t == "string" ? ue(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          ue(e, r, void 0);
        });
      }, shallowClone: Qn, deepClone: Ce, getObjectDiff: jn, cmp: H, asap: Yn, minKey: -1 / 0, addons: [], connections: et, errnames: an, dependencies: Xt, cache: Ue, semVer: "4.0.11", version: "4.0.11".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), ze.maxKey = yt(ze.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ie(mt, function(e) {
        xe || (e = new CustomEvent(En, { detail: e }), xe = !0, dispatchEvent(e), xe = !1);
      }), addEventListener(En, function(e) {
        e = e.detail, xe || Gn(e);
      }));
      var rt, xe = !1, xr = function() {
      };
      return typeof BroadcastChannel < "u" && ((xr = function() {
        (rt = new BroadcastChannel(En)).onmessage = function(e) {
          return e.data && Gn(e.data);
        };
      })(), typeof rt.unref == "function" && rt.unref(), Ie(mt, function(e) {
        xe || rt.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!we.disableBfCache && e.persisted) {
          ge && console.debug("Dexie: handling persisted pagehide"), rt?.close();
          for (var t = 0, r = et; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !we.disableBfCache && e.persisted && (ge && console.debug("Dexie: handling persisted pageshow"), xr(), Gn({ all: new se(-1 / 0, [[]]) }));
      })), j.rejectionMapper = function(e, t) {
        return !e || e instanceof Qe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !qn[e.name] ? e : (t = new qn[e.name](t || e.message, e), "stack" in e && Ae(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, er(ge), l(we, Object.freeze({ __proto__: null, Dexie: we, liveQuery: Ir, Entity: cr, cmp: H, PropModification: pt, replacePrefix: function(e, t) {
        return new pt({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new pt({ add: e });
      }, remove: function(e) {
        return new pt({ remove: e });
      }, default: we, RangeSet: se, mergeRanges: Et, rangesOverlap: wr }), { default: we }), we;
    });
  }(qt)), qt.exports;
}
var Ka = Ma();
const Un = /* @__PURE__ */ $a(Ka), $r = Symbol.for("Dexie"), en = globalThis[$r] || (globalThis[$r] = Un);
if (Un.semVer !== en.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Un.semVer} and ${en.semVer}`);
class Mr {
  db;
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, this.db = new en(n.app), this.db.version(11).stores({
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
    const i = await this.db.table(O.CLOUD).where({ id: n.widget }).last().catch(() => {
      B(2, ["%capi%C %ccloud", c.API, c.NONE, c.CLOUD, n.widget]);
    });
    if (typeof i > "u")
      return { data: null, message: "Cloud Data error", success: !1, query: n };
    const l = {
      data: i.data,
      message: i !== void 0 ? "Series retrieved successfully" : "Series Data error",
      success: i !== void 0,
      query: n
    };
    return B(3, [
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
  setCloud = async (n, i) => n.type === O.CLOUD && i !== "" ? await this.db.table(O.CLOUD).put({
    id: n.widget,
    dashboard_id: n.dashboard,
    //data: data.data,
    data: i
  }).then(() => 201).catch((l) => (B(2, [
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
    const i = await this.db.table(O.DASHBOARD).where({ id: n.id }).last().catch(() => {
      B(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, n.id]);
    });
    return i === void 0 ? {
      data: null,
      message: `Dashboard ${n.id} Load error`,
      success: !1
    } : (i.message = `Dashboard ${n.id} retrieved from storage`, i.success = !0, i);
  };
  getDashboards = async (n) => {
    const i = (_) => n?.id === _.id, l = (_) => n?.name ? _.name.includes(n?.name) : !1;
    let E = await this.db.table(O.DASHBOARD).toArray().then((_) => n?.id ? _.filter(i) : _).then((_) => n?.name ? _.filter(l) : _).catch(() => {
      B(2, ["%cstorage", c.STORAGE, J.DASHBOARD_LOAD, n]);
    });
    return E !== void 0 && B(3, [
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
    const i = structuredClone(n);
    return delete i.data.widgets, await this.db.table(O.DASHBOARD).put({
      id: i.id,
      name: i.name,
      dashboard: i.data,
      update: i.update
    }).then(() => ({
      data: null,
      message: `Dashboard ${i.data.id} saved to storage`,
      success: !0
    })).catch((l) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.WIDGET,
      n,
      l.message
    ), {
      data: null,
      message: `Dashboard ${i.data.id} save error: ${l.message}`,
      success: !1
    }));
  };
  /**
   * Wipe Message data after expires timestamp
   */
  cleanMessages = async () => {
    const n = Date.now() / 1e3, i = (_) => _.expires < n, l = (_) => _.expires < n;
    return await this.db.table(O.TOPICS).orderBy("expires").filter(i).delete().catch((_) => (console.error(
      "%cstorage%c %cclean",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      _.message
    ), 0)), await this.db.table(O.MESSAGES).orderBy("expires").filter(l).delete().catch((_) => (console.error(
      "%clean%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      _.message
    ), 0));
  };
  /**
   * Retrieve Messages Data
   * @param query IQuery
   * @returns IResponse
   */
  getMessages = async (n) => {
    const i = n?.order ?? "utc";
    i !== "utc" && (n.since = Math.floor(Date.now() / 1e3) - 60 * 60 * 24 * 7), this.options.delay != 0 ? n.before = Math.floor(Date.now() / 1e3) - (this.options.delay || 0) : n.before = Math.floor(Date.now() / 1e3);
    const l = (I) => I.utc > (n?.since || 0), E = (I) => I.utc < (n?.before || Date.now() / 1e3), _ = (I) => I?.visible !== 0;
    try {
      const G = await this.db.table(O.TOPICS).where("widget_id").equals(n.widget).filter(_).filter(l).filter(E).reverse().limit(n?.limit ?? 25).sortBy(i);
      if (G.length === 0)
        return {
          data: null,
          message: "No Messages error",
          success: !1,
          query: n
        };
      let re = G.map((fe) => this.db.table(O.MESSAGES).get({ id: fe.message_id }));
      return en.Promise.all(re).then(async (fe) => {
        const ae = {
          data: {
            messages: fe.map((_e) => _e.data)
          },
          query: n,
          message: "Messages retrieved successfully",
          success: !0
        };
        return B(3, [
          "%cget%c %cstorage%c %cmessages",
          c.OK,
          c.NONE,
          c.STORAGE,
          c.NONE,
          c.MESSAGES,
          ae
        ]), ae;
      });
    } catch (I) {
      return B(2, [
        "%cget%c %cstorage%c %cmessages",
        c.OK,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        n,
        I.message
      ]), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  hideMessage = async (n, i) => {
    await this.db.table(O.TOPICS).where("message_id").equals(n).modify({ visible: i ? 1 : 0 }).catch((l) => (console.error(
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
  setMessages = async (n, i) => {
    if (n.type !== O.MESSAGES)
      return 400;
    const l = i.data.title;
    let E = 0;
    return await i.data.messages.forEach(async (_) => {
      _.id !== null && (_.topics[0] = {
        message_id: _.id,
        engagement: _.topics[0]?.engagement || _.dynamics?.engagement || 0,
        impressions: _.topics[0]?.impressions || _.dynamics?.semrush_visits || 0,
        reach: _.topics[0]?.reach || _.dynamics?.potential_reach || 0,
        sentiment: _.topics[0]?.sentiment || 0
      }, await this.db.table(O.MESSAGES).put({
        id: _.id,
        utc: _.utc,
        data: _,
        expires: _.expires
      }).catch((I) => {
        E++, B(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set message",
          `title: ${l}`,
          _,
          I.message
        ]);
      }), await this.db.table(O.TOPICS).put({
        title: l,
        widget_id: n.widget,
        message_id: _.id,
        dashboard_id: n.dashboard,
        engagement: _.topics[0]?.engagement || _.dynamics?.engagement || 0,
        impressions: _.topics[0]?.impressions || _.dynamics?.semrush_visits || 0,
        reach: _.topics[0]?.reach || _.dynamics?.potential_reach || 0,
        sentiment: _.topics[0]?.sentiment || 0,
        utc: _.utc,
        expires: _.expires
      }).catch((I) => {
        E++, B(4, [
          "%cset%c %cstorage",
          c.KO,
          c.NONE,
          c.STORAGE,
          "set topic",
          `title: ${l}`,
          _,
          I.message
        ]);
      }), await i.data.topics.forEach(async (I) => {
        const G = I.message_id, re = I.visible ? 1 : 0, fe = I.title;
        await this.db.table(O.TOPICS).where("message_id").equals(G).modify({ visible: re }).catch((St) => {
          E++, B(4, [
            "%cset%c %cstorage",
            c.KO,
            c.NONE,
            c.STORAGE,
            "update message visibility",
            `title: ${fe}`,
            `widget: ${I.widget_id}`,
            St.message
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
    const i = await this.db.table(O.SERIES).where({ id: n.widget }).last().catch(() => {
      B(2, [
        "%cget%c %cstorage%c %cseries",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.SERIES,
        n.widget
      ]);
    }), l = {
      data: i.data,
      message: i !== void 0 ? "Get Series success" : "Get Series error",
      success: i !== void 0,
      query: n
    };
    return B(3, [
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
  setSeries = async (n, i) => (delete i?.query, n.type === O.SERIES && i !== "" ? await this.db.table(O.SERIES).put({
    id: n.widget,
    dashboard_id: n.dashboard,
    //data: data.data,
    data: i
  }).then(() => 201).catch((l) => (B(2, [
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
    const i = await this.db.table(O.WIDGET).where({ id: n.id }).last().catch(() => {
      console.warn("%cstorage", c.STORAGE, J.WIDGET_LOAD, n.id);
    });
    return i === void 0 ? {
      data: null,
      message: `Widget ${n.id} Load error`,
      success: !1
    } : (i.message = `Widget ${n.id} retrieved from storage`, i.success = !0, i);
  };
  /**
   * Retrieve Widgets from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getWidgets = async (n) => {
    const i = (I) => n?.dashboard === I.dashboard_id, l = (I) => n?.type === I.type, E = (I) => n?.name ? I.name.includes(n?.name) : !1;
    let _ = await this.db.table(O.WIDGET).toArray().then((I) => n?.dashboard ? I.filter(i) : I).then((I) => n?.type ? I.filter(l) : I).then((I) => n?.name ? I.filter(E) : I).catch(() => {
      B(2, ["%cstorage", c.STORAGE, J.WIDGET_LOAD, n]);
    });
    return _ !== void 0 && B(3, [
      "%cstorage%c %cwidgets",
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      n
    ]), {
      // @ts-ignore
      data: _ !== void 0 ? { data: _, query: n } : null,
      message: _ !== void 0 ? "Widgets loaded from storage" : "Widgets load error",
      success: _ !== void 0
    };
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (n) => await this.db.table(O.WIDGET).put({
    id: n.id,
    name: n.title,
    dashboard_id: n.dashboard_id,
    type: n.type,
    update: n.update
  }).then(() => ({
    data: null,
    message: `Widget ${n.data.id} saved to storage`,
    success: !0
  })).catch((i) => (console.error(
    "%cstorage",
    c.STORAGE,
    O.WIDGET,
    n,
    i.message
  ), {
    data: null,
    message: `Widget ${n.data.id} save error: ${i.message}`,
    success: !1
  }));
  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (n) => (n = Ia(n), this.subscribers.filter(
    (l) => l.widget === n.widget
  ).length > 0 || (n.type === O.MESSAGES && (n = wt(this.options, n)), console.info(
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
    const i = await this.db.table(O.SLIDE).where({ id: n.id }).last().catch(() => {
      B(2, ["%cstorage", c.STORAGE, J.SLIDE_LOAD, n.id]);
    });
    return {
      // @ts-ignore
      data: i !== void 0 ? { slides: i, query: n } : null,
      message: i !== void 0 ? "Slide loaded from storage" : "Slide load error",
      success: i !== void 0
    };
  };
  /**
   * Retrieve Slides from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getSlides = async (n) => {
    const i = (I) => n?.id ? n.id = I.id : !1, l = (I) => n?.name ? I.name.includes(n?.name) : !1, _ = await this.db.table(O.SLIDE).toArray().then((I) => n?.id ? I.filter(i) : I).then((I) => n?.name ? I.filter(l) : I);
    return _ !== void 0 && B(3, ["%cstorage%c %cslides", c.STORAGE, c.NONE, c.SLIDE, n]), {
      // @ts-ignore
      data: _ !== void 0 ? { slides: _, query: n } : null,
      message: _ !== void 0 ? "Slides loaded from storage" : "Slides load error",
      success: _ !== void 0
    };
  };
  /**
   * Update Slide in Storage
   * @param query IQuery
   * @returns number
   */
  setSlide = async (n) => await this.db.table(O.SLIDE).put({
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
  })).catch((i) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.SLIDE_STORE,
    n,
    i.message
  ), {
    data: null,
    message: `Slide ${n.data.id} save error: ${i.message}`,
    success: !1
  }));
  /**
   * Retrieve Presentation from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentation = async (n) => {
    const i = await this.db.table(O.PRESENTATION).where({ id: n.id }).last().catch(() => {
      console.warn(
        "%cstorage ",
        c.STORAGE,
        J.PRESENTATION_LOAD,
        n.id
      );
    });
    return i === void 0 ? {
      data: null,
      message: `Presentation ${n.id} Load error`,
      success: !1
    } : (i.message = `Presentation ${n.id} retrieved from storage`, i.success = !0, i);
  };
  /**
   * Retrieve Presentations from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPresentations = async (n) => {
    const i = (_) => n?.name ? _.name.includes(n?.name) : !1, E = await this.db.table(O.PRESENTATION).toArray().then((_) => n?.name ? _.filter(i) : _);
    return E !== void 0 && B(3, [
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
  setPresentation = async (n) => await this.db.table(O.PRESENTATION).put({
    id: n.data.id,
    name: n.data.name || "Not set",
    data: n.data,
    update: n.update
  }).then(() => ({
    data: null,
    message: `Presentation ${n.data.id} saved to storage`,
    success: !0
  })).catch((i) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PRESENTATION_STORE,
    n,
    i.message
  ), {
    data: null,
    message: `Presentation ${n.data.id} save error: ${i.message}`,
    success: !1
  }));
  /**
   * Retrieve Preference from Storage
   * @param preference IPreference
   * @returns IResponse
   */
  getPreference = async (n) => {
    const i = await this.db.table(O.PREFERENCE).where({ id: n.id }).last().catch(() => {
      B(2, [
        "%cstorage",
        c.STORAGE,
        J.PREFERENCE_LOAD,
        n.id
      ]);
    });
    return {
      // @ts-ignore
      data: i !== void 0 ? { preferences: i, query } : null,
      message: i !== void 0 ? "Preference loaded from storage" : "Preference load error",
      success: i !== void 0
    };
  };
  /**
   * Retrieve Preferences from Storage
   * @param query IQuery
   * @returns IResponse
   */
  getPreferences = async (n) => {
    const i = (_) => n?.id ? n.id = _.id : !1, E = await this.db.table(O.SLIDE).toArray().then((_) => n?.id ? _.filter(i) : _);
    return E !== void 0 && B(3, [
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
  setPreference = async (n) => await this.db.table(O.PREFERENCE).put({
    id: n.id,
    value: n.value
  }).then(() => ({
    data: null,
    message: `Preference ${n.id} saved to storage`,
    success: !0
  })).catch((i) => (console.error(
    "%cstorage",
    c.STORAGE,
    J.PREFERENCE_STORE,
    n,
    i.message
  ), {
    data: null,
    message: `Preference ${n.id} save error: ${i.message}`,
    success: !1
  }));
}
function zn(g) {
  return new Promise((n, i) => {
    g.oncomplete = g.onsuccess = () => n(g.result), g.onabort = g.onerror = () => i(g.error);
  });
}
function Ba(g, n) {
  const i = indexedDB.open(g);
  i.onupgradeneeded = () => i.result.createObjectStore(n);
  const l = zn(i);
  return (E, _) => l.then((I) => _(I.transaction(n, E).objectStore(n)));
}
let Wn;
function Kr() {
  return Wn || (Wn = Ba("keyval-store", "keyval")), Wn;
}
function Oe(g, n = Kr()) {
  return n("readonly", (i) => zn(i.get(g)));
}
function ke(g, n, i = Kr()) {
  return i("readwrite", (l) => (l.put(n, g), zn(l.transaction)));
}
class Br {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n;
  }
  getCloud = async (n) => {
    const i = Y(n);
    return await Oe(i).then((l) => l).catch(() => (console.warn("%capi", c.API, O.CLOUD, n.slide, n.widget), { data: null, message: "Cloud Data error", success: !1 }));
  };
  getSeries = async (n) => {
    const i = Y(n);
    return await Oe(i).then((l) => l).catch(() => (console.warn("%capi", c.API, O.SERIES, n.slide, n.widget), { data: null, message: "Series Data error", success: !1 }));
  };
  getMessages = async (n) => {
    const i = Y(n);
    return await Oe(i).then((l) => l).catch(() => (console.warn("%capi", c.API, O.MESSAGES, n.slide, n.widget), { data: null, message: "Messages Data error", success: !1 }));
  };
  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (n, i) => {
    if (!i.success)
      return 400;
    const l = Y(n);
    return delete i.success, delete i.message, await ke(l, i).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.CLOUD,
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
  setSeries = async (n, i) => {
    if (!i.success)
      return 400;
    const l = Y(n);
    return delete i.success, delete i.message, await ke(l, i).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.SERIES,
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
  setMessages = async (n, i) => {
    if (!i.success)
      return 400;
    const l = Y(n);
    return delete i.success, delete i.message, await ke(l, i).then(() => 201).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.MESSAGES,
      n,
      E.message
    ), 400));
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (n, i) => {
    console.debug(
      `hideMessage ${n} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    const i = Y(n);
    return await Oe(i).then((l) => l).catch((l) => (console.warn("%capi", c.API, O.SLIDE, n.id), {
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
    const i = Y(n), l = {
      id: n.dashboard,
      name: n.name
    };
    return await ke(i, l).then(() => ({
      data: null,
      message: `Dashboard ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.WIDGET,
      n,
      E.message
    ), {
      data: null,
      message: `Slide ${n.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getWidget = async (n) => {
    const i = Y(n);
    return await Oe(i).then((l) => l).catch((l) => (console.warn("%capi", c.API, O.SLIDE, n.id), {
      data: null,
      message: `Widget ${n.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getWidgets = async (n) => (console.warn("%capi", c.API, O.SLIDE, n?.presentation), {
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
    const i = Y(n), l = {
      id: n.widget,
      name: n.name,
      dashboard_id: n.dashboard,
      type: n.type
    };
    return await ke(i, l).then(() => ({
      data: null,
      message: `Widget ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.WIDGET,
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
  subscribe = (n) => (n.type === O.MESSAGES && (n = wt(this.options, n)), this.subscribers.filter(
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
    const i = Y(n);
    return await Oe(i).then((l) => l).catch((l) => (console.warn("%capi", c.API, O.SLIDE, n.id), {
      data: null,
      message: `Slide ${n.data.id} load error: ${l.message}`,
      success: !1
    }));
  };
  getSlides = async (n) => (console.warn("%capi", c.API, O.SLIDE, n.presentation), {
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
    const i = Y(n), l = {
      id: n.data.id,
      title: n.data.title || "Not set",
      json: n.data.json || {},
      html: n.data.html || ""
    };
    return await ke(i, l).then(() => ({
      data: null,
      message: `Slide ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.SLIDE,
      n,
      E.message
    ), {
      data: null,
      message: `Slide ${n.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getPresentation = async (n) => {
    const i = Y(n);
    return await Oe(i).then((l) => l).catch((l) => (console.warn("%capi", c.API, O.PRESENTATION, n.id), {
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
    const i = Y(n), l = n.data;
    return await ke(i, l).then(() => ({
      data: null,
      message: `Presentation ${n.data.id} saved to storage`,
      success: !0
    })).catch((E) => (console.error(
      "%cstorage",
      c.STORAGE,
      O.PRESENTATION,
      n,
      E.message
    ), {
      data: null,
      message: `Presentation ${n.data.id} save error: ${E.message}`,
      success: !1
    }));
  };
  getPreference = async (n) => await Oe(`${O.PREFERENCE}.${n.id}`).then((i) => i).catch((i) => (console.warn("%capi", c.API, O.PREFERENCE, n.id), {
    data: null,
    message: `Preference ${n.id} get error: ${i.message}`,
    success: !1
  }));
  getPreferences = async () => await Oe(`${O.PREFERENCE}`).then((n) => n).catch((n) => (console.warn("%capi", c.API, O.PREFERENCE), {
    data: null,
    message: `Preferences get error: ${n.message}`,
    success: !1
  }));
  /**
   * Update Preference
   * @param preference IPreference
   * @returns number
   */
  setPreference = async (n) => await ke(`${O.PREFERENCE}.${n.id}`, n.value).then(() => ({
    data: null,
    message: `Preference ${n.id} save error`,
    success: !0
  })).catch((i) => (console.error(
    "%cstorage",
    c.STORAGE,
    O.PREFERENCE,
    n,
    i.message
  ), {
    data: null,
    message: `Preference ${n.id} save error: ${i.message}`,
    success: !1
  }));
}
class Gr {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, Storage.prototype.setObject = function(i, l) {
      this.setObject(i, JSON.stringify(l));
    }, Storage.prototype.getObject = function(i) {
      const l = this.getObject(i);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (n) => {
    const i = Y(n);
    try {
      return localStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.CLOUD,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (n) => {
    const i = Y(n);
    try {
      return localStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.SERIES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (n) => {
    const i = Y(n);
    try {
      return localStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.MESSAGES,
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
  setCloud = async (n, i) => {
    const l = Y(n);
    try {
      return localStorage.setObject(l, i), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, O.CLOUD, n, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (n, i) => {
    const l = Y(n);
    try {
      return localStorage.setObject(l, i), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, O.SERIES, n, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (n, i) => {
    const l = Y(n);
    try {
      return localStorage.setObject(l, i), 200;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, O.MESSAGES, n, E), 400;
    }
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (n, i) => {
    console.debug(
      `hideMessage ${n} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    try {
      return localStorage.getObject(`${O.DASHBOARD}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Dashboard ${n.id} load error: ${i.message}`,
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
    const i = `${O.DASHBOARD}.${n.dashboard}`;
    try {
      return localStorage.setObject(i, n), {
        data: null,
        message: `Dashboard ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, O.WIDGET, n, l), {
        data: null,
        message: `Dashboard ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (n) => {
    try {
      return localStorage.getObject(`${O.WIDGET}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Widget ${n.id} load error: ${i.message}`,
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
    const i = `widget.${n.widget}`;
    try {
      return localStorage.setObject(i, n), {
        data: null,
        message: `Widget ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, O.WIDGET, n, l), {
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
  subscribe = (n) => (n.type === O.MESSAGES && (n = wt(this.options, n)), this.subscribers.filter(
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
      return localStorage.getObject(`${O.SLIDE}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Slide ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getSlides = async (n) => {
    try {
      return localStorage.getObject(`${O.SLIDE}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Slide ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  setSlide = async (n) => {
    try {
      return localStorage.setObject(`${O.SLIDE}.${n.data.id}`, {
        id: n.data.id,
        title: n.data.title || "Not set",
        json: n.data.json || {},
        html: n.data.html || ""
      }), {
        data: null,
        message: `Slide ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error("%cstorage", c.STORAGE, O.SLIDE, n, i), {
        data: null,
        message: `Slide ${n.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (n) => {
    try {
      return localStorage.getObject(`${O.PRESENTATION}.${n.presentation}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.PRESENTATION, n.presentation, i), {
        data: null,
        message: `Presentations ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return localStorage.getObject(`${O.PRESENTATION}.`);
    } catch (n) {
      return console.warn("%capi", c.API, O.PRESENTATION, n), {
        data: null,
        message: `Presentations get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (n) => {
    try {
      return localStorage.setObject(`${O.PRESENTATION}.${n.data.id}`, n.data), {
        data: null,
        message: `Presentation ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error("%cstorage", c.STORAGE, O.PRESENTATION, n, i), {
        data: null,
        message: `Presentation ${n.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreference = async (n) => {
    try {
      return localStorage.getObject(`${O.PREFERENCE}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.PREFERENCE, n.id, i), {
        data: null,
        message: `Preference ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return localStorage.getObject(`${O.PREFERENCE}.`);
    } catch (n) {
      return console.warn("%capi", c.API, O.PREFERENCE, n), {
        data: null,
        message: `Preference get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPreference = async (n) => {
    try {
      return localStorage.setObject(
        `${O.PREFERENCE}.${n.id}`,
        n.value
      ), {
        data: null,
        message: `Preference ${n.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        O.PREFERENCE,
        n,
        i
      ), {
        data: null,
        message: `Preference ${n.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
}
class Lr {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, Storage.prototype.setObject = function(i, l) {
      this.setItem(i, JSON.stringify(l));
    }, Storage.prototype.getObject = function(i) {
      const l = this.getItem(i);
      return l && JSON.parse(l);
    };
  }
  getCloud = async (n) => {
    const i = Y(n);
    try {
      return sessionStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.CLOUD,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getSeries = async (n) => {
    const i = Y(n);
    try {
      return sessionStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.SERIES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Messages Data error", success: !1 };
    }
  };
  getMessages = async (n) => {
    const i = Y(n);
    try {
      return sessionStorage.getObject(i);
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.MESSAGES,
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
  setCloud = async (n, i) => {
    const l = Y(n);
    try {
      return sessionStorage.setObject(l, i), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, O.CLOUD, n, E), 400;
    }
  };
  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (n, i) => {
    const l = Y(n);
    try {
      return sessionStorage.setObject(l, i), 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, O.SERIES, n, E), 400;
    }
  };
  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (n, i) => {
    const l = Y(n);
    try {
      return sessionStorage.setObject(l, i), 200;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, O.MESSAGES, n, E), 400;
    }
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (n, i) => {
    console.debug(
      `hideMessage ${n} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    try {
      return sessionStorage.getObject(`${O.DASHBOARD}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Dashboard ${n.id} load error: ${i.message}`,
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
    const i = `${O.DASHBOARD}.${n.dashboard}`;
    try {
      return sessionStorage.setObject(i, n), {
        data: null,
        message: `Dashboard ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, O.WIDGET, n, l), {
        data: null,
        message: `Dashboard ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (n) => {
    try {
      return sessionStorage.getObject(`${O.WIDGET}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Widget ${n.id} load error: ${i.message}`,
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
    const i = `widget.${n.widget}`;
    try {
      return sessionStorage.setObject(i, n), {
        data: null,
        message: `Widget ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, O.WIDGET, n, l), {
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
  subscribe = (n) => (n.type === O.MESSAGES && (n = wt(this.options, n)), this.subscribers.filter(
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
      return sessionStorage.getObject(`${O.SLIDE}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Slide ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getSlides = async (n) => {
    try {
      return sessionStorage.getObject(`${O.SLIDE}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Slide ${n.id} load error: ${i.message}`,
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
      return sessionStorage.setObject(`${O.SLIDE}.${n.data.id}`, {
        id: n.data.id,
        title: n.data.title || "Not set",
        json: n.data.json || {},
        html: n.data.html || ""
      }), {
        data: null,
        message: `Slide ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error("%cstorage", c.STORAGE, O.SLIDE, n, i), {
        data: null,
        message: `Slide ${n.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (n) => {
    try {
      return sessionStorage.getObject(`${O.PRESENTATION}.${n.presentation}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.PRESENTATION, n.presentation, i), {
        data: null,
        message: `Presentation ${n.presentation} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return sessionStorage.getObject(`${O.PRESENTATION}.`);
    } catch (n) {
      return console.warn("%capi", c.API, O.PRESENTATION, n), {
        data: null,
        message: `Presentations get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPresentation = async (n) => {
    try {
      return sessionStorage.setObject(`${O.PRESENTATION}.${n.data.id}`, n.data), {
        data: null,
        message: `Presentation ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error("%cstorage", c.STORAGE, O.PRESENTATION, n, i), {
        data: null,
        message: `Presentation ${n.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreference = async (n) => {
    try {
      return sessionStorage.getObject(`${O.PREFERENCE}.${n.id}`);
    } catch (i) {
      return console.warn("%capi", c.API, O.PREFERENCE, n.id, i), {
        data: null,
        message: `Preference ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return sessionStorage.getObject(`${O.PREFERENCE}`);
    } catch (n) {
      return console.warn("%capi", c.API, O.PREFERENCE, n), {
        data: null,
        message: `Preferences get error: ${n.message}`,
        success: !1
      };
    }
  };
  setPreference = async (n) => {
    try {
      return sessionStorage.setObject(
        `${O.PREFERENCE}.${n.id}`,
        n.value
      ), {
        data: null,
        message: `Preference ${n.id} saved to storage`,
        success: !0
      };
    } catch (i) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        O.PREFERENCE,
        n,
        i
      ), {
        data: null,
        message: `Preference ${n.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
}
class Fr {
  subscribers = [];
  options;
  constructor(n) {
    this.options = n, window.BuzzCasting.WidgetData = /* @__PURE__ */ new Set();
  }
  getCloud = async (n) => {
    const i = Y(n);
    try {
      return window.BuzzCasting.WidgetData[i];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.CLOUD,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Cloud Data error", success: !1 };
    }
  };
  getSeries = async (n) => {
    const i = Y(n);
    try {
      return window.BuzzCasting.WidgetData[i];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.SERIES,
        n.slide,
        n.widget,
        l
      ), { data: null, message: "Series Data error", success: !1 };
    }
  };
  getMessages = async (n) => {
    const i = Y(n);
    try {
      return window.BuzzCasting.WidgetData[i];
    } catch (l) {
      return console.warn(
        "%capi",
        c.API,
        O.MESSAGES,
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
  setCloud = async (n, i) => {
    const l = Y(n);
    try {
      return window.BuzzCasting.WidgetData[l] = i, 201;
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
  setSeries = async (n, i) => {
    const l = Y(n);
    try {
      return window.BuzzCasting.WidgetData[l] = i, 201;
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
  setMessages = async (n, i) => {
    const l = Y(n);
    try {
      return window.BuzzCasting.WidgetData[l] = i, 201;
    } catch (E) {
      return console.error("%cstorage", c.STORAGE, "set", n, E), 400;
    }
  };
  cleanMessages = async (n) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((i) => i(0)));
  hideMessage = async (n, i) => {
    console.debug(
      `hideMessage ${n} ${i} not implemented for ${this.options.storage}`
    );
  };
  getDashboard = async (n) => {
    try {
      return window.BuzzCasting.DashboardData[n.id];
    } catch (i) {
      return console.warn("%capi", c.API, O.DASHBOARD, n.id, i), {
        data: null,
        message: `Dashboard ${n.id} load error: ${i.message}`,
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
    const i = `widget.${n.widget}`;
    try {
      return window.BuzzCasting.DashboardData[i] = n, {
        data: null,
        message: `Dashboard ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, O.DASHBOARD, n, l), {
        data: null,
        message: `Dashboard ${n.data.id} save error: ${l.message}`,
        success: !1
      };
    }
  };
  getWidget = async (n) => {
    try {
      return window.BuzzCasting.WidgetData[n.id];
    } catch (i) {
      return console.warn("%capi", c.API, O.WIDGET, n.id, i), {
        data: null,
        message: `Widget ${n.id} load error: ${i.message}`,
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
    const i = `widget.${n.widget}`;
    try {
      return window.BuzzCasting.WidgetData[i] = n, {
        data: null,
        message: `Widget ${n.data.id} saved to storage`,
        success: !0
      };
    } catch (l) {
      return console.error("%cstorage", c.STORAGE, O.WIDGET, n, l), {
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
  subscribe = (n) => (n.type === O.MESSAGES && (n = wt(this.options, n)), this.subscribers.filter(
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
    } catch (i) {
      return console.warn("%capi", c.API, O.SLIDE, n.id, i), {
        data: null,
        message: `Slide ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getSlides = async (n) => {
    try {
      return window.BuzzCasting.SlideData.filter((i) => i.presentation_id === n.presentation);
    } catch (i) {
      return console.warn("%capi", c.API, O.PRESENTATION, n.presentation_id, i), {
        data: null,
        message: `Slides for presentation ${n.presentation} load error: ${i.message}`,
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
    } catch (i) {
      return console.error("%cstorage", c.STORAGE, O.SLIDE, n, i), {
        data: null,
        message: `Slide ${n.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentation = async (n) => {
    try {
      const i = n.presentation || "none";
      return window.BuzzCasting.PresentationData[i];
    } catch (i) {
      return console.warn("%capi", c.API, O.PRESENTATION, n.presentation, i), {
        data: null,
        message: `Presentation ${n.presentation} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPresentations = async () => {
    try {
      return window.BuzzCasting.PresentationData;
    } catch (n) {
      return console.warn("%capi", c.API, O.PRESENTATION, n), {
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
    } catch (i) {
      return console.error("%cstorage", c.STORAGE, O.PRESENTATION, n, i), {
        data: null,
        message: `Presentation ${n.data.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreference = async (n) => {
    try {
      return window.BuzzCasting.Preferences[n.id];
    } catch (i) {
      return console.warn("%capi", c.API, O.PREFERENCE, n.id, i), {
        data: null,
        message: `Preference ${n.id} load error: ${i.message}`,
        success: !1
      };
    }
  };
  getPreferences = async () => {
    try {
      return window.BuzzCasting.Preferences;
    } catch (n) {
      return console.warn("%capi", c.API, O.PREFERENCE, n), {
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
    } catch (i) {
      return console.error(
        "%cstorage",
        c.STORAGE,
        O.PREFERENCE,
        n,
        i
      ), {
        data: null,
        message: `Preference ${n.id} save error: ${i.message}`,
        success: !1
      };
    }
  };
}
class La {
  sm;
  api;
  bc;
  options;
  subscribers = [];
  //private temp: {[x:string]:any} = []
  constructor(n) {
    B(3, [
      "%cpresentation",
      c.PRESENTATION,
      n.presentation,
      J.VERSION,
      xa
    ]), this.options = n, this.sm = null;
    const i = n.presentation;
    switch (this.bc = new BroadcastChannel(i), B(3, ["%cchannel%c %capi", c.BROADCAST, c.NONE, c.API, i]), this.bc.onmessage = (l) => {
      this.actions(l);
    }, this.bc.postMessage({ event: J.STORAGE_INIT, data: {} }), this.api = new ka(n), n.storage) {
      case pe.DEXIE:
        this.sm = new Mr(n);
        break;
      case pe.LOCAL:
        this.sm = new Lr(n);
        break;
      case pe.SESSION:
        this.sm = new Gr(n);
        break;
      case pe.KEYVAL:
        this.sm = new Br(n);
        break;
      case pe.WINDOW:
        this.sm = new Fr(n);
        break;
    }
  }
  addSubscriber(n) {
    this.subscribers[n.widget] = n;
  }
  update = async (n) => {
    if (this.sm === null || Object.keys(this.subscribers).length === 0)
      return;
    const i = [];
    Object.values(this.subscribers).forEach((l) => {
      i.push(this.api.get(l));
    }), i.forEach(async (l) => {
      await l.then(
        async (E) => await this.processResponse(E)
      );
    });
  };
  processResponse = async (n) => {
    let i, l = 400;
    if (n.success === !0) {
      const E = this.subscribers[n.query.widget];
      let _ = "";
      switch (n.query.type) {
        case O.MESSAGES:
          let I;
          I = n.data.messages.filter(
            (G) => G.id !== null
          ), n.data.messages = I, _ = Fn(n.data.messages), E?.hash && E.hash === _ ? (B(3, [
            "%cload%c %cmessages%c %cno updates",
            c.OK,
            c.NONE,
            c.MESSAGES,
            c.NONE,
            c.NO_UPDATES,
            n.query.widget
          ]), B(4, ["%cmessages", c.MESSAGES, n]), l = 204) : (i = n, E.hash = _, l = await this.sm?.setMessages(n.query, n).then(async (G) => (G = 201, this.broadcastUpdate(G, n))));
          break;
        case O.CLOUD:
          _ = Fn(n.data.cloud), E?.hash && E.hash === _ ? (B(3, [
            "%cload%c %ccloud%c %cno updates",
            c.OK,
            c.NONE,
            c.CLOUD,
            c.NONE,
            c.NO_UPDATES,
            n.query.widget
          ]), B(4, ["%ccloud", c.CLOUD, n.query]), l = 204) : (E.hash = _, i = {
            data: {
              cloud: n.data
            },
            message: n.message,
            success: n.success,
            query: n.query
          }, l = await this.sm?.setCloud(n.query, i.data).then((G) => this.broadcastUpdate(G, n)));
          break;
        case O.SERIES:
          _ = Fn(n.data.series), E?.hash && E.hash === _ ? (B(3, [
            "%cload%c %cseries%c %cno updates",
            c.OK,
            c.NONE,
            c.SERIES,
            c.NONE,
            c.NO_UPDATES,
            n.query.widget
          ]), B(4, ["%cseries", c.SERIES, n]), l = 204) : (E.hash = _, i = {
            data: n.data,
            message: n.message,
            success: n.success,
            query: n.query
          }, l = await this.sm?.setSeries(n.query, n.data).then((G) => this.broadcastUpdate(G, n)));
          break;
        default:
          B(4, [
            "%cload%c %cunknown%c %cno updates",
            c.KO,
            c.NONE,
            c.STORAGE,
            c.NONE,
            c.NO_UPDATES,
            `Bad request: type ${n.query.type} unknown`
          ]), l = 204;
      }
    } else
      switch (B(2, [
        "%cload%c %cunknown%c %cno updates",
        c.KO,
        c.NONE,
        c.STORAGE,
        c.NONE,
        c.NO_UPDATES,
        n.status
      ]), n.query.type) {
        case O.MESSAGES:
          return await this.sm?.getMessages(n.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
        case O.CLOUD:
          return await this.sm?.getCloud(n.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
        case O.SERIES:
          return await this.sm?.getSeries(n.query).then((E) => {
            this.broadcastUpdate(201, E);
          });
      }
    return l;
  };
  broadcastUpdate = (n, i) => {
    switch (n) {
      case 201:
        B(3, [
          `%cupdate%c %cwidget%c %c${i.query?.type}`,
          c.BROADCAST,
          c.NONE,
          c.WIDGET,
          c.NONE,
          kr(i.query),
          //@ts-ignore
          `${i.data?.title ?? ""} ${i.query.widget}`
        ]), B(4, [
          "%cevent",
          c.BROADCAST,
          //@ts-ignore
          i
        ]), this.bc.postMessage({
          event: J.WIDGET_UPDATE,
          data: i.query
        });
        break;
      case 204:
        break;
      default:
        B(2, [
          `%cupdate%c %cwidget%c %c${i.query?.type}`,
          c.KO,
          c.NONE,
          c.WIDGET,
          c.NONE,
          kr(i.query),
          "Fetch error",
          i.query
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
        B(3, [
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
      B(2, [
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
    const n = this.options?.retention || 86400 * 4, i = await this.sm?.cleanMessages(
      n
    );
    B(3, [
      "%cclean%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      `${i} messages deleted`
    ]);
  };
  hideMessage = async (n) => {
    const i = await this.sm?.hideMessage(n.id, 0);
    return B(3, [
      "%chide%c %cstorage%c %cmessages",
      c.OK,
      c.NONE,
      c.STORAGE,
      c.NONE,
      c.MESSAGES,
      `${i} messages hidden`
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
class Ga {
  sm;
  constructor(n) {
    switch (this.sm = null, n.storage) {
      case pe.DEXIE:
        this.sm = new Mr(n);
        break;
      case pe.LOCAL:
        this.sm = new Lr(n);
        break;
      case pe.SESSION:
        this.sm = new Gr(n);
        break;
      case pe.KEYVAL:
        this.sm = new Br(n);
        break;
      case pe.WINDOW:
        this.sm = new Fr(n);
        break;
    }
  }
  /**
   * Retieve Cloud Data
   * @param query Widgets parameters, type "cloud"
   * @returns IResponse
   */
  getCloud = async (n) => n.type !== O.CLOUD ? (console.warn(
    "%capp%c %get",
    c.APP,
    c.NONE,
    c.GET_DATA,
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
  getMessages = async (n) => n.type !== O.MESSAGES ? (console.warn(
    "%capp%c %cmessages%c %cget",
    c.APP,
    c.NONE,
    c.MESSAGES,
    c.NONE,
    c.GET_DATA,
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
  getSeries = async (n) => n.type !== O.SERIES ? (console.warn(
    "%capp%c %get",
    c.APP,
    c.NONE,
    c.GET_DATA,
    n.widget,
    "wrong method call for getMessages, type used is",
    n.type
  ), {
    data: null,
    message: `'wrong method call for getSeries, type used is ${n.type}`,
    success: !1
  }) : await this.sm?.getSeries(n);
}
class Fa {
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
  constructor(n, i, l) {
    this.element = n, this.callbacks = i, l = typeof l < "u" ? l : "buzzcasting-app";
    let E;
    E = { ...n.dataset }, delete E.hmr, E.presentation = n.closest(l)?.getAttribute("presentation") ?? `${l} not found`, this.query = E, Da(n);
    const _ = window.BuzzCasting.getOptions();
    this.storageReader = new Ga(_), this.broadcastChannel = new BroadcastChannel(E.presentation), this.broadcastListener();
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
    this.broadcastChannel.onmessage = async (i) => {
      const l = i.data.data;
      switch (i.data.event) {
        case J.WIDGET_UPDATE:
          try {
            if (l.dashboard === n.dashboard && l.widget === n.widget) {
              const E = await this.getData();
              E?.success && (B(4, [
                "%cset%c %cbroadcast%c %cwidget",
                c.OK,
                c.NONE,
                c.BROADCAST,
                c.NONE,
                c.WIDGET,
                this.query
              ]), this.callbacks.forEach(async (_) => {
                _(E);
              }));
            }
          } catch {
            B(4, [J.WIDGET_UPDATE, l]);
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
    B(3, [
      "%csubscribe%c %cwidget",
      c.SUBSCRIBE,
      c.NONE,
      c.WIDGET,
      this.query.presentation,
      this.query.widget
    ]), B(4, ["%cwidget", c.WIDGET, this.query]), this.broadcastChannel.postMessage({
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
      case O.CLOUD:
        return await this.getCloud();
      case O.MESSAGES:
        return await this.getMessages();
      case O.SERIES:
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
  getCloud = async () => this.query.type !== O.CLOUD ? (B(3, [
    "%cget%c %cstorage%c %cwidget",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.WIDGET,
    this.query.widget,
    "Wrong method call for getCloud, expected type is",
    this.query.type
  ]), B(4, ["%ccloud", c.CLOUD, this.query]), {
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
  getMessages = async () => this.query.type !== O.MESSAGES ? (B(3, [
    "%cget%c %cstorage%c %cwidget",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.WIDGET,
    this.query.widget,
    "Wrong method call for getMessages, expected type is",
    this.query.type
  ]), B(4, ["%cmessages", c.MESSAGES, this.query]), {
    data: null,
    message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
    success: !1
  }) : await this.storageReader.getMessages(this.query);
  /**
   * Get Widget Series Data
   *
   * @returns IResponse
   */
  getSeries = async () => this.query.type !== O.SERIES ? (B(3, [
    "%cget%c %cstorage%c %cwidget",
    c.KO,
    c.NONE,
    c.STORAGE,
    c.NONE,
    c.WIDGET,
    this.query.widget,
    "Wrong method call for getSeries, expected type is",
    this.query.type
  ]), B(4, ["%cseries", this.query]), {
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
    B(3, [
      "%cwidget",
      c.WIDGET,
      J.SHOW_MODAL,
      n.showComponent,
      // @ts-ignore
      Pa(this.element.attributes)
      //props['data-widget'],
    ]);
    const i = new CustomEvent(J.SHOW_MODAL, {
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
    window.dispatchEvent(i);
  };
  destroy() {
    this.broadcastChannel.close();
  }
}
export {
  La as BuzzcastingStorageManager,
  Ga as BuzzcastingStorageReader,
  Fa as Widget
};
