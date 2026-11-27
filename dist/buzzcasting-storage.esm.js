// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = function(e) {
	return e.CARDS = "cards", e.CLOUD = "cloud", e.DASHBOARD = "dashboard", e.DASHBOARDS = "dashboards", e.IMAGES = "images", e.MESSAGES = "messages", e.PREFERENCE = "preference", e.PREFERENCES = "preferences", e.PRESENTATION = "presentation", e.PRESENTATIONS = "presentations", e.SERIES = "series", e.SLIDE = "slide", e.SLIDES = "slides", e.TEMPLATES = "templates", e.TOPICS = "topics", e.WIDGET = "widget", e.WIDGETS = "widgets", e;
}({}), u = function(e) {
	return e.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", e.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", e.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", e.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", e.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", e.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", e.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", e.NONE = "color:transparent;background-color:transparent;", e.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", e.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", e.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", e.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", e.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", e.WIDGET = "color:black;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", e.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", e;
}({}), d = function(e) {
	return e.ADD_SLIDE = "addSlide", e.APP_READY = "appReady", e.API_UPDATE = "apiUpdate", e.BACKGROUND_UPDATE = "backgroundUpdate", e.BUILDER_PREVIEW = "builderPreview", e.COMPONENT_UPDATE = "componentUpdate", e.APPROVE_MESSAGE = "approveMessage", e.CHANNEL = "channel", e.CLEAN_MESSAGES = "cleanMessages", e.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", e.CLOSE_BUILDER_MODAL = "closeBuilderModal", e.CLOSE_MODAL = "closeModal", e.COLOR_UPDATE = "colorUpdate", e.COMPONENT_INDEX = "componentIndex", e.CSS_SET = "setCss", e.CSS_STORE = "storeCss", e.DASHBOARD_LOAD = "loadDashboard", e.DASHBOARD_STORE = "storeDashboard", e.DASHBOARD_UPDATED = "dashboardUpdated", e.ERROR = "error", e.HIDE_MESSAGE = "hideMessage", e.IMAGE_GET = "getImage", e.IMAGE_SET = "setImage", e.IMAGE_STORED = "imageStored", e.LAYOUT_UPDATE = "layoutUpdate", e.PREV_SLIDE = "prevSlide", e.RELOAD_PRESENTATION = "reloadPresentation", e.STAR_MESSAGE = "starMessage", e.GOTO_SLIDE = "gotoSlide", e.NEXT_SLIDE = "nextSlide", e.PREFERENCE_LOAD = "loadPreference", e.PREFERENCE_STORE = "storePreference", e.PREFERENCE_UPDATED = "preferenceUpdated", e.PAUSE_PRESENTATION = "pausePresentation", e.PRESENTATION_READY = "presentationReady", e.PRESENTATION_LOAD = "loadPresentation", e.PRESENTATION_STORE = "storePresentation", e.PRESENTATION_UPDATED = "presentationUpdated", e.ROW_COL_UPDATE = "rowcolupdate", e.SCREENSHOT_TAKE = "takeScreenshot", e.SCREENSHOT_STORE = "storeScreenshot", e.SECTION_UPDATE = "sectionUpdate", e.SHOW_BUILDER_DIALOG = "showBuilderDialog", e.SHOW_BUILDER_MODAL = "showBuilderModal", e.SHOW_MODAL = "showModal", e.SLIDE_DID_LOAD = "slideDidLoad", e.SLIDE_GET = "getSlide", e.SLIDE_GOTO = "slideGoto", e.SLIDE_LOAD = "loadSlide", e.SLIDE_READY = "slideReady", e.SLIDE_SAVED = "slideSaved", e.SLIDE_SET = "setSlide", e.SLIDE_STORE = "storeSlide", e.SLIDE_STORED = "slideStored", e.SLIDE_TRANSITIONER = "slideTransitioner", e.SLIDE_UPDATED = "slideUpdated", e.START_TRANSITIONER = "startTransitioner", e.STORAGE_INIT = "storageInit", e.STREAM = "stream", e.SUBSCRIBE = "subscribe", e.UNSUBSCRIBE = "unsubscribe", e.SUSPEND_ACCOUNT = "suspendAccount", e.SWITCH_PRESENTATION = "switchPresentation", e.REMOVE_CLOUD = "removeCloud", e.UPDATE = "update", e.UPLOAD_COMPLETED = "uploadCompleted", e.VERSION = "version", e.WIDGETS_CLEAR = "widgetsClear", e.WIDGET_DID_LOAD = "widgetDidLoad", e.WIDGET_DID_UPDATE = "widgetDidUpdate", e.WIDGET_LOAD = "widgetLoad", e.WIDGET_STORE = "widgetStore", e.WIDGET_UPDATE = "widgetUpdate", e.WS_API_REQUEST = "wsApiRequest", e.WS_API_RESPONSE = "wsApiResponse", e.WS_API_UPDATE = "wsApiUpdate", e;
}({}), f = function(e) {
	return e.APPROVED = "approved", e.BEFORE = "before", e.DELAYED = "delayed", e.NONE = "none", e.REALTIME = "realtime", e;
}({}), p = function(e) {
	return e.KEYVAL = "keyval", e.LOCAL = "local", e.SESSION = "session", e.DEXIE = "dexie", e.WINDOW = "window", e;
}({});
function m(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e.item(n);
		r?.name && (t[r.name] = r.value);
	}
	return t;
}
function h(e) {
	let t = document.createRange();
	t.selectNodeContents(e), t.deleteContents();
}
function g(e, t) {
	for (; e.length < t;) e = `0${e}`;
	return e;
}
function _(e, t) {
	let n, r, i;
	if (t.length === 0) return e;
	for (n = 0, i = t.length; n < i; n++) r = t.charCodeAt(n), e = (e << 5) - e + r, e |= 0;
	return e < 0 ? e * -2 : e;
}
function v(e, t, n) {
	return Object.keys(t).sort().reduce(r, e);
	function r(e, r) {
		return y(e, t[r], r, n);
	}
}
function y(e, t, n, r) {
	let i = _(_(_(e, n), b(t)), typeof t);
	if (t === null) return _(i, "null");
	if (t === void 0) return _(i, "undefined");
	if (typeof t == "object" || typeof t == "function") {
		if (r.includes(t)) return _(i, `[Circular]${n}`);
		r.push(t);
		let e = v(i, t, r);
		if (!("valueOf" in t) || typeof t.valueOf != "function") return e;
		try {
			return _(e, String(t.valueOf()));
		} catch (t) {
			return _(e, `[valueOf exception]${t.stack || t.message}`);
		}
	}
	return _(i, t.toString());
}
function b(e) {
	return Object.prototype.toString.call(e);
}
function x(e) {
	return g(y(0, e, "", []).toString(16), 8);
}
var S = (e) => {
	let t = {}, n = e.split(",");
	for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
};
S("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), S("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), S("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), S("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), S("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), S("script,style");
var C = new BroadcastChannel("logging"), w = async (e = 0, t) => {
	C.postMessage({
		action: "log",
		level: e,
		message: t
	});
};
(class e {
	static EPOCH = Date.UTC(1970, 0, 1).valueOf();
	static SHARD_ID = 1;
	static SEQUENCE = 1;
	static generate({ timestamp: t = Date.now(), shard_id: n = e.SHARD_ID } = {}) {
		t = t instanceof Date ? t.valueOf() : new Date(t).valueOf();
		let r = BigInt(t) - BigInt(e.EPOCH) << BigInt(22);
		return r |= BigInt(n % 1024) << BigInt(12), r |= BigInt(e.SEQUENCE++ % 4096), r.toString();
	}
	static parse(t) {
		let n = e.binary(t);
		return {
			timestamp: e.extractBits(t, 1, 41),
			shard_id: e.extractBits(t, 42, 10),
			sequence: e.extractBits(t, 52),
			binary: n
		};
	}
	static isValid(t) {
		if (!/^[\d]{19}$/.test(t)) return !1;
		try {
			return e.parse(t), !0;
		} catch {
			return !1;
		}
	}
	static extractBits(t, n, r) {
		return parseInt(r ? e.binary(t).substring(n, n + r) : e.binary(t).substring(n), 2);
	}
	static binary(e) {
		let t = BigInt(e).toString(2);
		return t.length < 64 ? "0000000000000000000000000000000000000000000000000000000000000000".substring(0, 64 - t.length) + t : t;
	}
});
var T = (e) => {
	switch (e?.type) {
		case l.MESSAGES: return u.MESSAGES;
		case l.SERIES: return u.SERIES;
		case l.CLOUD: return u.CLOUD;
		default: return u.NO_UPDATES;
	}
};
function E(e) {
	let t = `${e.type}.${e.topics}`;
	return e.order && (t += `.${e.order}`), e.period && (t += `.${e.period}`), t;
}
function ee(e) {
	if (e.widget === void 0) {
		let t = e.topics?.split("-");
		t && t.length > 1 ? (e.dashboard = t ? t[0] : "", e.widget = t ? t[1] : "") : (e.widget = e.topics, e.dashboard = e.slide);
	}
	return e;
}
function te(e, t) {
	let n, r, i, a, o;
	switch (e.moderation) {
		case f.BEFORE:
			n = /* @__PURE__ */ new Date(), r = e.beforeTime?.split(":"), i = Number.parseInt(r ? r[0] : "00"), a = Number.parseInt(r ? r[1] : "00"), o = Number.parseInt(r ? r[2] : "00"), t.before = n.setHours(i, a, o, 0) / 1e3, t.period ||= n.getDay() === 1 ? 72 : 24;
			break;
		case f.DELAYED:
			e.delay && e.delay > 0 && (t.delay = `${e.delay}`);
			break;
		case f.APPROVED:
			t.approved = "1";
			break;
		default: e.period !== 0 && (t.period = e.period);
	}
	return t;
}
(function(e) {
	return e.MultiPolygon = "MultiPolygon", e.Polygon = "Polygon", e;
})({}), function(e) {
	return e.MultiPolygon = "MultiPolygon", e.Polygon = "Polygon", e;
}({});
// package.json
var ne = "3.22.2", re = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t, n) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.readNDJSONStream = r());
	})(n, (function() {
		async function* e(e) {
			let t = e.pipeThrough(new TextDecoderStream("utf-8")).getReader(), n = "";
			for (;;) {
				let { done: e, value: r } = await t.read();
				if (e) break;
				for (let e of r.split("\n")) try {
					n += e, yield JSON.parse(n), n = "";
				} catch {}
			}
		}
		return e;
	}));
})))(), 1), ie = class {
	options;
	url;
	constructor(e) {
		this.options = e, this.url = `https://${e.app}.buzzcasting.net`;
	}
	headers = () => {
		let e = `Bearer ${this.options.bearer}`;
		return { headers: new Headers({
			Authorization: e,
			Accept: "application/json"
		}) };
	};
	fileHeaders = () => {
		let e = `Bearer ${this.options.bearer}`;
		return { headers: new Headers({ Authorization: e }) };
	};
	formHeaders = () => {
		let e = `Bearer ${this.options.bearer}`;
		return { headers: new Headers({
			Authorization: e,
			"Content-Type": "application/x-www-form-urlencoded",
			Accept: "application/json"
		}) };
	};
	async get(e) {
		let { version: t } = this.options, n = this.headers(), r = Object.assign({}, e);
		delete r.type, delete r.hash, delete r.order, r.topics = `${r.dashboard}-${r.widget}`, delete r.presentation;
		let i = Object.keys(r).length > 0 ? `?${new URLSearchParams(r).toString()}` : "", a = "";
		switch (e.type) {
			case l.MESSAGES:
				a = u.MESSAGES;
				break;
			case l.SERIES:
				a = u.SERIES;
				break;
			case l.CLOUD: a = u.CLOUD;
		}
		return w(3, [
			`%cfetch%c %capi%c %c${e.type}`,
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			a,
			e.widget,
			r
		]), await fetch([
			this.url,
			"api",
			t,
			e.type
		].join("/") + i, {
			...n,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((t) => (t.query = e, t)).catch((t) => ({
			success: !1,
			message: `${t}`,
			data: null,
			query: e
		}));
	}
	async ndjson(e) {
		let { version: t } = this.options, n = this.headers(), r = await fetch(`${[
			this.url,
			"api",
			t,
			"stream"
		].join("/")}`, {
			...n,
			body: JSON.stringify({ data: e }),
			method: "post"
		});
		for await (let e of (0, re.default)(r.body)) console.log("Received", e);
	}
	async hideMessage(e) {
		let { version: t } = this.options, n = this.headers();
		return w(3, [
			"%capi%c %cput",
			u.API,
			u.NONE,
			u.GET_DATA,
			d.HIDE_MESSAGE,
			e.widget,
			e.id
		]), await fetch([
			this.url,
			"api",
			t,
			"messages",
			e.id
		].join("/") + "?action=visible", {
			...n,
			method: "put"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
	async hideLabels(e) {
		let { version: t } = this.options, n = this.formHeaders(), r = new URLSearchParams(), i = e.labels || [];
		for (let [e, t] of i.entries()) r.append(`custom_filters[${e}]`, t);
		return console.info("%capi%c %cput", u.API, u.NONE, u.GET_DATA, d.REMOVE_CLOUD, e.widget, i), await fetch([
			this.url,
			"api",
			t,
			e.type,
			e.widget
		].join("/"), {
			...n,
			body: r,
			method: "put"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
	async loadSlide(e) {
		let { version: t } = this.options, n = this.headers(), r = Object.assign({}, e);
		return delete r.type, delete r.hash, w(3, [
			"%cload%c %capi%c %cslide",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.SLIDE,
			e.id
		]), await fetch([
			this.url,
			"api",
			t,
			"slides",
			e.id
		].join("/"), {
			...n,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((t) => {
			let n;
			return e.type = "slides", t.query = e, t?.data && (Array.isArray(t.data) ? (n = structuredClone(t.data), n.forEach((e) => {
				typeof e.json == "string" && (e.json = JSON.parse(e.json));
			})) : (n = structuredClone(t.data), n.json = JSON.parse(n.json)), t.data = n), t;
		}).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null
		}));
	}
	async createSlide(e) {
		let { version: t } = this.options, n = this.formHeaders();
		delete e.update, delete e.type, delete e.id;
		let r = JSON.stringify(e);
		return w(3, [
			"%cpost%c %capi%c %ccreate slide",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.SLIDE,
			e
		]), await fetch([
			this.url,
			"api",
			t,
			"slides"
		].join("/"), {
			...n,
			body: r,
			method: "post"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
	async storeSlide(e) {
		let { version: t } = this.options, n = this.formHeaders();
		delete e.update, delete e.type;
		let r = JSON.stringify(e);
		return w(3, [
			"%cput%c %capi%c %cslide",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.SLIDE,
			d.SLIDE_STORE,
			e.id
		]), await fetch([
			this.url,
			"api",
			t,
			"slides",
			e.id
		].join("/"), {
			...n,
			body: r,
			method: "put"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
	async loadPresentation(e) {
		let { version: t } = this.options, n = this.headers();
		return delete e.update, w(3, [
			"%cload%c %capi%c %cpresentation",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.PRESENTATION,
			e.id
		]), await fetch([
			this.url,
			"api",
			t,
			l.PRESENTATIONS,
			e.id
		].join("/"), {
			...n,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((t) => {
			let n;
			return e.type = "presentations", t.query = e, t?.data && (n = structuredClone(t.data), t.data = n), t;
		}).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null
		}));
	}
	async storePresentation(e) {
		let { version: t } = this.options, n = this.formHeaders();
		delete e.update;
		let r = JSON.stringify(e);
		return w(2, [
			"%capi%c %cput",
			u.API,
			u.NONE,
			u.PRESENTATION,
			e.name
		]), await fetch([
			this.url,
			"api",
			t,
			l.PRESENTATIONS,
			e.id
		].join("/"), {
			...n,
			body: r,
			method: "put"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
	async loadPreference(e) {
		let { version: t } = this.options, n = this.headers();
		return w(3, [
			"%cload%c %capi%c %cpreference",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.APP,
			e.id
		]), await fetch([
			this.url,
			"api",
			t,
			l.PREFERENCES,
			e.id
		].join("/"), {
			...n,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((t) => (e.type = "preference", t.query = e, t)).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null
		}));
	}
	async storePreference(e) {
		let { version: t } = this.options, n = `Bearer ${this.options.bearer}`, r = { headers: new Headers({
			Authorization: n,
			"Content-Type": "application/json",
			Accept: "application/json"
		}) };
		delete e.update;
		let i = JSON.stringify({ data: e });
		return w(3, [
			"%capi%c %cstorePreference",
			u.API,
			u.NONE,
			u.APP,
			e.id
		]), await fetch(`${[
			this.url,
			"api",
			t,
			l.PREFERENCES
		].join("/")}/`, {
			...r,
			body: i,
			method: "post"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
	async loadDashboards(e) {
		let { version: t } = this.options, n = this.headers();
		return w(3, [
			"%capi%c %cdashboards",
			u.API,
			u.NONE,
			u.WIDGET
		]), await fetch([
			this.url,
			"api",
			t,
			l.WIDGETS,
			e?.id || ""
		].join("/"), {
			...n,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((e) => ({
			data: { dashboards: e },
			message: "Dashboard Widgets loaded from api",
			success: !0
		})).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null
		}));
	}
	async loadImages(e) {
		let { version: t } = this.options, n = this.headers();
		return w(3, [
			"%cload%c %capi%c %cimage",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.WIDGET
		]), await fetch(`${[
			this.url,
			"api",
			t,
			l.IMAGES
		].join("/")}?folder=${e}`, {
			...n,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((e) => ({
			data: { images: e.data },
			message: "Images loaded via api",
			success: !0
		})).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null
		}));
	}
	async storeImage(e) {
		let { version: t } = this.options, n = this.fileHeaders(), r = e;
		return console.info("%capi%c %cstoreImage", u.API, u.NONE, u.WIDGET, e.get("name")), await fetch(`${[
			this.url,
			"api",
			t,
			l.IMAGES
		].join("/")}?folder=${e.get("folder")}`, {
			...n,
			body: r,
			method: "post"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
	async deleteImage(e, t) {
		let { version: n } = this.options, r = this.formHeaders();
		return console.info("%capi%c %cdeleteImage", u.API, u.NONE, u.WIDGET, t), await fetch(`${[
			this.url,
			"api",
			n,
			l.IMAGES,
			t
		].join("/")}?folder=${e}`, {
			...r,
			method: "delete"
		}).then((e) => {
			if (!e.ok) throw Error(e.statusText);
			return e;
		}).then((e) => e.json()).catch((e) => ({
			succes: !1,
			message: e,
			data: []
		}));
	}
}, D = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t, n) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.Dexie = r());
	})(n, (function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}, e(t, n);
		};
		function t(t, n) {
			if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
		}
		var n = function() {
			return n = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, n.apply(this, arguments);
		};
		function r(e, t, n) {
			if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
			return e.concat(a || Array.prototype.slice.call(t));
		}
		var i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, a = Object.keys, o = Array.isArray;
		typeof Promise < "u" && !i.Promise && (i.Promise = Promise);
		function s(e, t) {
			return typeof t == "object" && a(t).forEach(function(n) {
				e[n] = t[n];
			}), e;
		}
		var c = Object.getPrototypeOf, l = {}.hasOwnProperty;
		function u(e, t) {
			return l.call(e, t);
		}
		function d(e, t) {
			typeof t == "function" && (t = t(c(e))), (typeof Reflect > "u" ? a : Reflect.ownKeys)(t).forEach(function(n) {
				p(e, n, t[n]);
			});
		}
		var f = Object.defineProperty;
		function p(e, t, n, r) {
			f(e, t, s(n && u(n, "get") && typeof n.get == "function" ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, r));
		}
		function m(e) {
			return { from: function(t) {
				return e.prototype = Object.create(t.prototype), p(e.prototype, "constructor", e), { extend: d.bind(null, e.prototype) };
			} };
		}
		var h = Object.getOwnPropertyDescriptor;
		function g(e, t) {
			var n = h(e, t), r;
			return n || (r = c(e)) && g(r, t);
		}
		var _ = [].slice;
		function v(e, t, n) {
			return _.call(e, t, n);
		}
		function y(e, t) {
			return t(e);
		}
		function b(e) {
			if (!e) throw Error("Assertion Failed");
		}
		function x(e) {
			i.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function S(e, t) {
			return e.reduce(function(e, n, r) {
				var i = t(n, r);
				return i && (e[i[0]] = i[1]), e;
			}, {});
		}
		function C(e, t) {
			if (typeof t == "string" && u(e, t)) return e[t];
			if (!t) return e;
			if (typeof t != "string") {
				for (var n = [], r = 0, i = t.length; r < i; ++r) {
					var a = C(e, t[r]);
					n.push(a);
				}
				return n;
			}
			var o = t.indexOf(".");
			if (o !== -1) {
				var s = e[t.substr(0, o)];
				return s == null ? void 0 : C(s, t.substr(o + 1));
			}
		}
		function w(e, t, n) {
			if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) {
				if (typeof t != "string" && "length" in t) {
					b(typeof n != "string" && "length" in n);
					for (var r = 0, i = t.length; r < i; ++r) w(e, t[r], n[r]);
				} else {
					var a = t.indexOf(".");
					if (a !== -1) {
						var s = t.substr(0, a), c = t.substr(a + 1);
						if (c === "") n === void 0 ? o(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = n;
						else {
							var l = e[s];
							if (!l || !u(e, s)) {
								if (n === void 0) return;
								l = e[s] = {};
							}
							w(l, c, n);
						}
					} else n === void 0 ? o(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
				}
			}
		}
		function T(e, t) {
			typeof t == "string" ? w(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
				w(e, t, void 0);
			});
		}
		function E(e) {
			var t = {};
			for (var n in e) u(e, n) && (t[n] = e[n]);
			return t;
		}
		var ee = [].concat;
		function te(e) {
			return ee.apply([], e);
		}
		var ne = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(te([
			8,
			16,
			32,
			64
		].map(function(e) {
			return [
				"Int",
				"Uint",
				"Float"
			].map(function(t) {
				return t + e + "Array";
			});
		}))).filter(function(e) {
			return i[e];
		}), re = new Set(ne.map(function(e) {
			return i[e];
		}));
		function ie(e) {
			var t = {};
			for (var n in e) if (u(e, n)) {
				var r = e[n];
				t[n] = !r || typeof r != "object" || re.has(r.constructor) ? r : ie(r);
			}
			return t;
		}
		var D = null;
		function O(e) {
			D = /* @__PURE__ */ new WeakMap();
			var t = k(e);
			return D = null, t;
		}
		function k(e) {
			if (!e || typeof e != "object") return e;
			var t = D.get(e);
			if (t) return t;
			if (o(e)) {
				t = [], D.set(e, t);
				for (var n = 0, r = e.length; n < r; ++n) t.push(k(e[n]));
			} else if (re.has(e.constructor)) t = e;
			else {
				var i = c(e);
				for (var a in t = i === Object.prototype ? {} : Object.create(i), D.set(e, t), e) u(e, a) && (t[a] = k(e[a]));
			}
			return t;
		}
		var ae = {}.toString;
		function oe(e) {
			return ae.call(e).slice(8, -1);
		}
		var se = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ce = typeof se == "symbol" ? function(e) {
			var t;
			return e != null && (t = e[se]) && t.apply(e);
		} : function() {
			return null;
		};
		function le(e, t) {
			var n = e.indexOf(t);
			return n >= 0 && e.splice(n, 1), n >= 0;
		}
		var ue = {};
		function A(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (o(e)) return e.slice();
				if (this === ue && typeof e == "string") return [e];
				if (i = ce(e)) {
					for (n = []; r = i.next(), !r.done;) n.push(r.value);
					return n;
				}
				if (e == null) return [e];
				if (t = e.length, typeof t == "number") {
					for (n = Array(t); t--;) n[t] = e[t];
					return n;
				}
				return [e];
			}
			for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var de = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, fe = [
			"Modify",
			"Bulk",
			"OpenFailed",
			"VersionChange",
			"Schema",
			"Upgrade",
			"InvalidTable",
			"MissingAPI",
			"NoSuchDatabase",
			"InvalidArgument",
			"SubTransaction",
			"Unsupported",
			"Internal",
			"DatabaseClosed",
			"PrematureCommit",
			"ForeignAwait"
		], pe = [
			"Unknown",
			"Constraint",
			"Data",
			"TransactionInactive",
			"ReadOnly",
			"Version",
			"NotFound",
			"InvalidState",
			"InvalidAccess",
			"Abort",
			"Timeout",
			"QuotaExceeded",
			"Syntax",
			"DataClone"
		], me = fe.concat(pe), he = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function j(e, t) {
			this.name = e, this.message = t;
		}
		m(j).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} });
		function ge(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function _e(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = ge(e, t);
		}
		m(_e).from(j);
		function M(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = ge(e, this.failures);
		}
		m(M).from(j);
		var N = me.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), P = j, F = me.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = he[t] || n, this.inner = null);
			}
			return m(r).from(P), e[t] = r, e;
		}, {});
		F.Syntax = SyntaxError, F.Type = TypeError, F.Range = RangeError;
		var ve = pe.reduce(function(e, t) {
			return e[t + "Error"] = F[t], e;
		}, {});
		function ye(e, t) {
			if (!e || e instanceof j || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ve[e.name]) return e;
			var n = new ve[e.name](t || e.message, e);
			return "stack" in e && p(n, "stack", { get: function() {
				return this.inner.stack;
			} }), n;
		}
		var be = me.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = F[t]), e;
		}, {});
		be.ModifyError = _e, be.DexieError = j, be.BulkError = M;
		function I() {}
		function xe(e) {
			return e;
		}
		function Se(e, t) {
			return e == null || e === xe ? t : function(n) {
				return t(e(n));
			};
		}
		function Ce(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function we(e, t) {
			return e === I ? t : function() {
				var n = e.apply(this, arguments);
				n !== void 0 && (arguments[0] = n);
				var r = this.onsuccess, i = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var a = t.apply(this, arguments);
				return r && (this.onsuccess = this.onsuccess ? Ce(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Ce(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function Te(e, t) {
			return e === I ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ce(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ce(r, this.onerror) : r);
			};
		}
		function Ee(e, t) {
			return e === I ? t : function() {
				var n = e.apply(this, arguments), r = arguments[0];
				s(r, n);
				var i = this.onsuccess, a = this.onerror;
				this.onsuccess = null, this.onerror = null;
				var o = t.apply(this, arguments);
				return i && (this.onsuccess = this.onsuccess ? Ce(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? Ce(a, this.onerror) : a), n === void 0 ? o === void 0 ? void 0 : o : s(n, o);
			};
		}
		function De(e, t) {
			return e === I ? t : function() {
				return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
			};
		}
		function Oe(e, t) {
			return e === I ? t : function() {
				var n = e.apply(this, arguments);
				if (n && typeof n.then == "function") {
					for (var r = this, i = arguments.length, a = Array(i); i--;) a[i] = arguments[i];
					return n.then(function() {
						return t.apply(r, a);
					});
				}
				return t.apply(this, arguments);
			};
		}
		var L = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function ke(e, t) {
			L = e;
		}
		var Ae = {}, je = 100, Me = typeof Promise > "u" ? [] : (function() {
			var e = Promise.resolve();
			if (typeof crypto > "u" || !crypto.subtle) return [
				e,
				c(e),
				e
			];
			var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
			return [
				t,
				c(t),
				e
			];
		})(), Ne = Me[0], Pe = Me[1], Fe = Me[2], Ie = Pe && Pe.then, Le = Ne && Ne.constructor, Re = !!Fe;
		function ze() {
			queueMicrotask(nt);
		}
		var Be = function(e, t) {
			Ke.push([e, t]), He &&= (ze(), !1);
		}, Ve = !0, He = !0, Ue = [], We = [], Ge = xe, R = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: I,
			pgp: !1,
			env: {},
			finalize: I
		}, z = R, Ke = [], qe = 0, Je = [];
		function B(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = z;
			if (typeof e != "function") {
				if (e !== Ae) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], this._state === !1 && Qe(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, Ze(this, e);
		}
		var Ye = {
			get: function() {
				var e = z, t = pt;
				function n(n, r) {
					var i = this, a = !e.global && (e !== z || t !== pt), o = a && !W(), s = new B(function(t, s) {
						et(i, new Xe(xt(n, e, a, o), xt(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = Ae, n;
			},
			set: function(e) {
				p(this, "then", e && e.prototype === Ae ? Ye : {
					get: function() {
						return e;
					},
					set: Ye.set
				});
			}
		};
		d(B.prototype, {
			then: Ye,
			_then: function(e, t) {
				et(this, new Xe(null, null, e, t, z));
			},
			catch: function(e) {
				if (arguments.length === 1) return this.then(null, e);
				var t = arguments[0], n = arguments[1];
				return typeof t == "function" ? this.then(null, function(e) {
					return e instanceof t ? n(e) : lt(e);
				}) : this.then(null, function(e) {
					return e && e.name === t ? n(e) : lt(e);
				});
			},
			finally: function(e) {
				return this.then(function(t) {
					return B.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return B.resolve(e()).then(function() {
						return lt(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < Infinity ? new B(function(r, i) {
					var a = setTimeout(function() {
						return i(new F.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && p(B.prototype, Symbol.toStringTag, "Dexie.Promise"), R.env = yt();
		function Xe(e, t, n, r, i) {
			this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
		}
		d(B, {
			all: function() {
				var e = A.apply(null, arguments).map(gt);
				return new B(function(t, n) {
					e.length === 0 && t([]);
					var r = e.length;
					e.forEach(function(i, a) {
						return B.resolve(i).then(function(n) {
							e[a] = n, --r || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof B ? e : e && typeof e.then == "function" ? new B(function(t, n) {
					e.then(t, n);
				}) : new B(Ae, !0, e);
			},
			reject: lt,
			race: function() {
				var e = A.apply(null, arguments).map(gt);
				return new B(function(t, n) {
					e.map(function(e) {
						return B.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return z;
				},
				set: function(e) {
					return z = e;
				}
			},
			totalEchoes: { get: function() {
				return pt;
			} },
			newPSD: U,
			usePSD: bt,
			scheduler: {
				get: function() {
					return Be;
				},
				set: function(e) {
					Be = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return Ge;
				},
				set: function(e) {
					Ge = e;
				}
			},
			follow: function(e, t) {
				return new B(function(n, r) {
					return U(function(t, n) {
						var r = z;
						r.unhandleds = [], r.onunhandled = n, r.finalize = Ce(function() {
							var e = this;
							ot(function() {
								e.unhandleds.length === 0 ? t() : n(e.unhandleds[0]);
							});
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), Le && (Le.allSettled && p(B, "allSettled", function() {
			var e = A.apply(null, arguments).map(gt);
			return new B(function(t) {
				e.length === 0 && t([]);
				var n = e.length, r = Array(n);
				e.forEach(function(e, i) {
					return B.resolve(e).then(function(e) {
						return r[i] = {
							status: "fulfilled",
							value: e
						};
					}, function(e) {
						return r[i] = {
							status: "rejected",
							reason: e
						};
					}).then(function() {
						return --n || t(r);
					});
				});
			});
		}), Le.any && typeof AggregateError < "u" && p(B, "any", function() {
			var e = A.apply(null, arguments).map(gt);
			return new B(function(t, n) {
				e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
				var r = e.length, i = Array(r);
				e.forEach(function(e, a) {
					return B.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[a] = e, --r || n(AggregateError(i));
					});
				});
			});
		}), Le.withResolvers && (B.withResolvers = Le.withResolvers));
		function Ze(e, t) {
			try {
				t(function(t) {
					if (e._state === null) {
						if (t === e) throw TypeError("A promise cannot be resolved with itself.");
						var n = e._lib && rt();
						t && typeof t.then == "function" ? Ze(e, function(e, n) {
							t instanceof B ? t._then(e, n) : t.then(e, n);
						}) : (e._state = !0, e._value = t, $e(e)), n && it();
					}
				}, Qe.bind(null, e));
			} catch (t) {
				Qe(e, t);
			}
		}
		function Qe(e, t) {
			if (We.push(t), e._state === null) {
				var n = e._lib && rt();
				t = Ge(t), e._state = !1, e._value = t, st(e), $e(e), n && it();
			}
		}
		function $e(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) et(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), qe === 0 && (++qe, Be(function() {
				--qe === 0 && at();
			}, []));
		}
		function et(e, t) {
			if (e._state === null) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++qe, Be(tt, [
					n,
					e,
					t
				]);
			}
		}
		function tt(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && We.length && (We = []), r = L && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), !t._state && We.indexOf(i) === -1 && ct(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--qe === 0 && at(), --n.psd.ref || n.psd.finalize();
			}
		}
		function nt() {
			bt(R, function() {
				rt() && it();
			});
		}
		function rt() {
			var e = Ve;
			return Ve = !1, He = !1, e;
		}
		function it() {
			var e, t, n;
			do
				for (; Ke.length > 0;) for (e = Ke, Ke = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (Ke.length > 0);
			Ve = !0, He = !0;
		}
		function at() {
			var e = Ue;
			Ue = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			});
			for (var t = Je.slice(0), n = t.length; n;) t[--n]();
		}
		function ot(e) {
			function t() {
				e(), Je.splice(Je.indexOf(t), 1);
			}
			Je.push(t), ++qe, Be(function() {
				--qe === 0 && at();
			}, []);
		}
		function st(e) {
			Ue.some(function(t) {
				return t._value === e._value;
			}) || Ue.push(e);
		}
		function ct(e) {
			for (var t = Ue.length; t;) if (Ue[--t]._value === e._value) {
				Ue.splice(t, 1);
				return;
			}
		}
		function lt(e) {
			return new B(Ae, !1, e);
		}
		function V(e, t) {
			var n = z;
			return function() {
				var r = rt(), i = z;
				try {
					return G(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					G(i, !1), r && it();
				}
			};
		}
		var H = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, ut = 0, dt = [], ft = 0, pt = 0, mt = 0;
		function U(e, t, n, r) {
			var i = z, a = Object.create(i);
			a.parent = i, a.ref = 0, a.global = !1, a.id = ++mt, R.env, a.env = Re ? {
				Promise: B,
				PromiseProp: {
					value: B,
					configurable: !0,
					writable: !0
				},
				all: B.all,
				race: B.race,
				allSettled: B.allSettled,
				any: B.any,
				resolve: B.resolve,
				reject: B.reject
			} : {}, t && s(a, t), ++i.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			};
			var o = bt(a, e, n, r);
			return a.ref === 0 && a.finalize(), o;
		}
		function ht() {
			return H.id ||= ++ut, ++H.awaits, H.echoes += je, H.id;
		}
		function W() {
			return H.awaits ? (--H.awaits === 0 && (H.id = 0), H.echoes = H.awaits * je, !0) : !1;
		}
		("" + Ie).indexOf("[native code]") === -1 && (ht = W = I);
		function gt(e) {
			return H.echoes && e && e.constructor === Le ? (ht(), e.then(function(e) {
				return W(), e;
			}, function(e) {
				return W(), K(e);
			})) : e;
		}
		function _t(e) {
			++pt, H.echoes && --H.echoes !== 0 || (H.echoes = H.awaits = H.id = 0), dt.push(z), G(e, !0);
		}
		function vt() {
			var e = dt[dt.length - 1];
			dt.pop(), G(e, !1);
		}
		function G(e, t) {
			var n = z;
			if ((t ? H.echoes && (!ft++ || e !== z) : ft && (!--ft || e !== z)) && queueMicrotask(t ? _t.bind(null, e) : vt), e !== z && (z = e, n === R && (R.env = yt()), Re)) {
				var r = R.env.Promise, a = e.env;
				(n.global || e.global) && (Object.defineProperty(i, "Promise", a.PromiseProp), r.all = a.all, r.race = a.race, r.resolve = a.resolve, r.reject = a.reject, a.allSettled && (r.allSettled = a.allSettled), a.any && (r.any = a.any));
			}
		}
		function yt() {
			var e = i.Promise;
			return Re ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"),
				all: e.all,
				race: e.race,
				allSettled: e.allSettled,
				any: e.any,
				resolve: e.resolve,
				reject: e.reject
			} : {};
		}
		function bt(e, t, n, r, i) {
			var a = z;
			try {
				return G(e, !0), t(n, r, i);
			} finally {
				G(a, !1);
			}
		}
		function xt(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = z;
				n && ht(), G(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					G(i, !1), r && queueMicrotask(W);
				}
			} : e;
		}
		function St(e) {
			Promise === Le && H.echoes === 0 ? ft === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		var K = B.reject;
		function Ct(e, t, n, r) {
			if (!e.idbdb || !e._state.openComplete && !z.letThrough && !e._vip) {
				if (e._state.openComplete) return K(new F.DatabaseClosed(e._state.dbOpenError));
				if (!e._state.isBeingOpened) {
					if (!e._state.autoOpen) return K(new F.DatabaseClosed());
					e.open().catch(I);
				}
				return e._state.dbReadyPromise.then(function() {
					return Ct(e, t, n, r);
				});
			}
			var i = e._createTransaction(t, n, e._dbSchema);
			try {
				i.create(), e._state.PR1398_maxLoop = 3;
			} catch (i) {
				return i.name === N.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
					return Ct(e, t, n, r);
				})) : K(i);
			}
			return i._promise(t, function(e, t) {
				return U(function() {
					return z.trans = i, r(e, t, i);
				});
			}).then(function(e) {
				if (t === "readwrite") try {
					i.idbtrans.commit();
				} catch {}
				return t === "readonly" ? e : i._completion.then(function() {
					return e;
				});
			});
		}
		var wt = "4.4.7", Tt = "￿", Et = -Infinity, q = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Dt = "String expected.", Ot = 1e3, kt = "__dbnames", At = "readonly", jt = "readwrite";
		function Mt(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var Nt = {
			type: 3,
			lower: -Infinity,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function Pt(e) {
			return typeof e == "string" && !/\./.test(e) ? function(t) {
				return t[e] === void 0 && e in t && (t = O(t), delete t[e]), t;
			} : function(e) {
				return e;
			};
		}
		function Ft() {
			throw F.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function J(e, t) {
			try {
				var n = Rt(e), r = Rt(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return e > t ? 1 : e < t ? -1 : 0;
					case "binary": return Lt(zt(e), zt(t));
					case "Array": return It(e, t);
				}
			} catch {}
			return NaN;
		}
		function It(e, t) {
			for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) {
				var o = J(e[a], t[a]);
				if (o !== 0) return o;
			}
			return n === r ? 0 : n < r ? -1 : 1;
		}
		function Lt(e, t) {
			for (var n = e.length, r = t.length, i = n < r ? n : r, a = 0; a < i; ++a) if (e[a] !== t[a]) return e[a] < t[a] ? -1 : 1;
			return n === r ? 0 : n < r ? -1 : 1;
		}
		function Rt(e) {
			var t = typeof e;
			if (t !== "object") return t;
			if (ArrayBuffer.isView(e)) return "binary";
			var n = oe(e);
			return n === "ArrayBuffer" ? "binary" : n;
		}
		function zt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function Bt(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && n.numFailures > 0 && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				var r = n.updatesTable;
				return t ? e.db.table(r).where("k").anyOf(t).delete() : e.db.table(r).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		var Vt = function() {
			function e(e) {
				this["@@propmod"] = e;
			}
			return e.prototype.execute = function(e) {
				var t = this["@@propmod"];
				if (t.add !== void 0) {
					var n = t.add;
					if (o(n)) return r(r([], o(e) ? e : [], !0), n, !0).sort();
					if (typeof n == "number") return (Number(e) || 0) + n;
					if (typeof n == "bigint") try {
						return BigInt(e) + n;
					} catch {
						return BigInt(0) + n;
					}
					throw TypeError(`Invalid term ${n}`);
				}
				if (t.remove !== void 0) {
					var i = t.remove;
					if (o(i)) return o(e) ? e.filter(function(e) {
						return !i.includes(e);
					}).sort() : [];
					if (typeof i == "number") return Number(e) - i;
					if (typeof i == "bigint") try {
						return BigInt(e) - i;
					} catch {
						return BigInt(0) - i;
					}
					throw TypeError(`Invalid subtrahend ${i}`);
				}
				var a = t.replacePrefix?.[0];
				return a && typeof e == "string" && e.startsWith(a) ? t.replacePrefix[1] + e.substring(a.length) : e;
			}, e;
		}();
		function Ht(e, t) {
			for (var n = a(t), r = n.length, i = !1, o = 0; o < r; ++o) {
				var s = n[o], c = t[s], l = C(e, s);
				c instanceof Vt ? (w(e, s, c.execute(l)), i = !0) : l !== c && (w(e, s, c), i = !0);
			}
			return i;
		}
		var Ut = function() {
			function e() {}
			return e.prototype._trans = function(e, t, n) {
				var r = this._tx || z.trans, i = this.name, a = L && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
				function o(e, n, r) {
					if (!r.schema[i]) throw new F.NotFound("Table " + i + " not part of transaction");
					return t(r.idbtrans, r);
				}
				var s = rt();
				try {
					var c = r && r.db._novip === this.db._novip ? r === z.trans ? r._promise(e, o, n) : U(function() {
						return r._promise(e, o, n);
					}, {
						trans: r,
						transless: z.transless || z
					}) : Ct(this.db, e, [this.name], o);
					return a && (c._consoleTask = a, c = c.catch(function(e) {
						return console.trace(e), K(e);
					})), c;
				} finally {
					s && it();
				}
			}, e.prototype.get = function(e, t) {
				var n = this;
				return e && e.constructor === Object ? this.where(e).first(t) : e == null ? K(new F.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
					return n.core.get({
						trans: t,
						key: e
					}).then(function(e) {
						return n.hook.reading.fire(e);
					});
				}).then(t);
			}, e.prototype.where = function(e) {
				if (typeof e == "string") return new this.db.WhereClause(this, e);
				if (o(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
				var t = a(e);
				if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
				var n = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
					if (e.compound && t.every(function(t) {
						return e.keyPath.indexOf(t) >= 0;
					})) {
						for (var n = 0; n < t.length; ++n) if (t.indexOf(e.keyPath[n]) === -1) return !1;
						return !0;
					}
					return !1;
				}).sort(function(e, t) {
					return e.keyPath.length - t.keyPath.length;
				})[0];
				if (n && this.db._maxKey !== Tt) {
					var r = n.keyPath.slice(0, t.length);
					return this.where(r).equals(r.map(function(t) {
						return e[t];
					}));
				}
				!n && L && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
				var i = this.schema.idxByName;
				function s(e, t) {
					return J(e, t) === 0;
				}
				var c = t.reduce(function(t, n) {
					var r = t[0], a = t[1], c = i[n], l = e[n];
					return [r || c, r || !c ? Mt(a, c && c.multi ? function(e) {
						var t = C(e, n);
						return o(t) && t.some(function(e) {
							return s(l, e);
						});
					} : function(e) {
						return s(l, C(e, n));
					}) : a];
				}, [null, null]), l = c[0], u = c[1];
				return l ? this.where(l.name).equals(e[l.keyPath]).filter(u) : n ? this.filter(u) : this.where(t).equals("");
			}, e.prototype.filter = function(e) {
				return this.toCollection().and(e);
			}, e.prototype.count = function(e) {
				return this.toCollection().count(e);
			}, e.prototype.offset = function(e) {
				return this.toCollection().offset(e);
			}, e.prototype.limit = function(e) {
				return this.toCollection().limit(e);
			}, e.prototype.each = function(e) {
				return this.toCollection().each(e);
			}, e.prototype.toArray = function(e) {
				return this.toCollection().toArray(e);
			}, e.prototype.toCollection = function() {
				return new this.db.Collection(new this.db.WhereClause(this));
			}, e.prototype.orderBy = function(e) {
				return new this.db.Collection(new this.db.WhereClause(this, o(e) ? `[${e.join("+")}]` : e));
			}, e.prototype.reverse = function() {
				return this.toCollection().reverse();
			}, e.prototype.mapToClass = function(e) {
				var n = this, r = n.db, i = n.name;
				this.schema.mappedClass = e, e.prototype instanceof Ft && (e = function(e) {
					t(n, e);
					function n() {
						return e !== null && e.apply(this, arguments) || this;
					}
					return Object.defineProperty(n.prototype, "db", {
						get: function() {
							return r;
						},
						enumerable: !1,
						configurable: !0
					}), n.prototype.table = function() {
						return i;
					}, n;
				}(e));
				for (var a = /* @__PURE__ */ new Set(), o = e.prototype; o; o = c(o)) Object.getOwnPropertyNames(o).forEach(function(e) {
					return a.add(e);
				});
				var s = function(t) {
					if (!t) return t;
					var n = Object.create(e.prototype);
					for (var r in t) if (!a.has(r)) try {
						n[r] = t[r];
					} catch {}
					return n;
				};
				return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = s, this.hook("reading", s), e;
			}, e.prototype.defineClass = function() {
				function e(e) {
					s(this, e);
				}
				return this.mapToClass(e);
			}, e.prototype.add = function(e, t) {
				var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
				return a && i && (o = Pt(a)(e)), this._trans("readwrite", function(e) {
					return n.core.mutate({
						trans: e,
						type: "add",
						keys: t == null ? null : [t],
						values: [o]
					});
				}).then(function(e) {
					return e.numFailures ? B.reject(e.failures[0]) : e.lastResult;
				}).then(function(t) {
					if (a) try {
						w(e, a, t);
					} catch {}
					return t;
				});
			}, e.prototype.upsert = function(e, t) {
				var n = this, r = this.schema.primKey.keyPath;
				return this._trans("readwrite", function(i) {
					return n.core.get({
						trans: i,
						key: e
					}).then(function(a) {
						var o = a ?? {};
						return Ht(o, t), r && w(o, r, e), n.core.mutate({
							trans: i,
							type: "put",
							values: [o],
							keys: [e],
							upsert: !0,
							updates: {
								keys: [e],
								changeSpecs: [t]
							}
						}).then(function(e) {
							return e.numFailures ? B.reject(e.failures[0]) : !!a;
						});
					});
				});
			}, e.prototype.update = function(e, t) {
				if (typeof e == "object" && !o(e)) {
					var n = C(e, this.schema.primKey.keyPath);
					return n === void 0 ? K(new F.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(t);
				}
				return this.where(":id").equals(e).modify(t);
			}, e.prototype.put = function(e, t) {
				var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
				return a && i && (o = Pt(a)(e)), this._trans("readwrite", function(e) {
					return n.core.mutate({
						trans: e,
						type: "put",
						values: [o],
						keys: t == null ? null : [t]
					});
				}).then(function(e) {
					return e.numFailures ? B.reject(e.failures[0]) : e.lastResult;
				}).then(function(t) {
					if (a) try {
						w(e, a, t);
					} catch {}
					return t;
				});
			}, e.prototype.delete = function(e) {
				var t = this;
				return this._trans("readwrite", function(n) {
					return t.core.mutate({
						trans: n,
						type: "delete",
						keys: [e]
					}).then(function(n) {
						return Bt(t, [e], n);
					}).then(function(e) {
						return e.numFailures ? B.reject(e.failures[0]) : void 0;
					});
				});
			}, e.prototype.clear = function() {
				var e = this;
				return this._trans("readwrite", function(t) {
					return e.core.mutate({
						trans: t,
						type: "deleteRange",
						range: Nt
					}).then(function(t) {
						return Bt(e, null, t);
					});
				}).then(function(e) {
					return e.numFailures ? B.reject(e.failures[0]) : void 0;
				});
			}, e.prototype.bulkGet = function(e) {
				var t = this;
				return this._trans("readonly", function(n) {
					return t.core.getMany({
						keys: e,
						trans: n
					}).then(function(e) {
						return e.map(function(e) {
							return t.hook.reading.fire(e);
						});
					});
				});
			}, e.prototype.bulkAdd = function(e, t, n) {
				var r = this, i = Array.isArray(t) ? t : void 0;
				n ||= i ? void 0 : t;
				var a = n ? n.allKeys : void 0;
				return this._trans("readwrite", function(t) {
					var n = r.schema.primKey, o = n.auto, s = n.keyPath;
					if (s && i) throw new F.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
					if (i && i.length !== e.length) throw new F.InvalidArgument("Arguments objects and keys must have the same length");
					var c = e.length, l = s && o ? e.map(Pt(s)) : e;
					return r.core.mutate({
						trans: t,
						type: "add",
						keys: i,
						values: l,
						wantResults: a
					}).then(function(e) {
						var t = e.numFailures, n = e.results, i = e.lastResult, o = e.failures, s = a ? n : i;
						if (t === 0) return s;
						throw new M(`${r.name}.bulkAdd(): ${t} of ${c} operations failed`, o);
					});
				});
			}, e.prototype.bulkPut = function(e, t, n) {
				var r = this, i = Array.isArray(t) ? t : void 0;
				n ||= i ? void 0 : t;
				var a = n ? n.allKeys : void 0;
				return this._trans("readwrite", function(t) {
					var n = r.schema.primKey, o = n.auto, s = n.keyPath;
					if (s && i) throw new F.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
					if (i && i.length !== e.length) throw new F.InvalidArgument("Arguments objects and keys must have the same length");
					var c = e.length, l = s && o ? e.map(Pt(s)) : e;
					return r.core.mutate({
						trans: t,
						type: "put",
						keys: i,
						values: l,
						wantResults: a
					}).then(function(e) {
						var t = e.numFailures, n = e.results, i = e.lastResult, o = e.failures, s = a ? n : i;
						if (t === 0) return s;
						throw new M(`${r.name}.bulkPut(): ${t} of ${c} operations failed`, o);
					});
				});
			}, e.prototype.bulkUpdate = function(e) {
				var t = this, n = e.map(function(e) {
					return e.key;
				}), r = e.map(function(e) {
					return e.changes;
				}), i = [];
				return this._trans("readwrite", function(a) {
					var o = t.core;
					return o.getMany({
						trans: a,
						keys: n,
						cache: "clone"
					}).then(function(s) {
						var c = o.schema.primaryKey, l = c.outbound, u = c.extractKey, d = [], f = [];
						e.forEach(function(e, t) {
							var n = e.key, r = e.changes, a = s[t];
							if (a) {
								for (var o = 0, c = Object.keys(r); o < c.length; o++) {
									var p = c[o];
									w(a, p, r[p]);
								}
								if (!l && J(u(a), n) !== 0) throw new F.Constraint("Cannot update primary key in bulkUpdate()");
								i.push(t), d.push(n), f.push(a);
							}
						});
						var p = d.length;
						return o.mutate({
							trans: a,
							type: "put",
							keys: d,
							values: f,
							updates: {
								keys: n,
								changeSpecs: r
							}
						}).then(function(e) {
							var n = e.numFailures, r = e.failures;
							if (n === 0) return p;
							for (var a = 0, o = Object.keys(r); a < o.length; a++) {
								var s = o[a], c = i[Number(s)];
								if (c != null) {
									var l = r[s];
									delete r[s], r[c] = l;
								}
							}
							throw new M(`${t.name}.bulkUpdate(): ${n} of ${p} operations failed`, r);
						});
					});
				});
			}, e.prototype.bulkDelete = function(e) {
				var t = this, n = e.length;
				return this._trans("readwrite", function(n) {
					return t.core.mutate({
						trans: n,
						type: "delete",
						keys: e
					}).then(function(n) {
						return Bt(t, e, n);
					});
				}).then(function(e) {
					var r = e.numFailures, i = e.lastResult, a = e.failures;
					if (r === 0) return i;
					throw new M(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, a);
				});
			}, e;
		}();
		function Wt(e) {
			var t = {}, n = function(n, r) {
				if (r) {
					for (var i = arguments.length, a = Array(i - 1); --i;) a[i - 1] = arguments[i];
					return t[n].subscribe.apply(null, a), e;
				}
				if (typeof n == "string") return t[n];
			};
			n.addEventType = s;
			for (var r = 1, i = arguments.length; r < i; ++r) s(arguments[r]);
			return n;
			function s(e, r, i) {
				if (typeof e == "object") return c(e);
				r ||= De, i ||= I;
				var a = {
					subscribers: [],
					fire: i,
					subscribe: function(e) {
						a.subscribers.indexOf(e) === -1 && (a.subscribers.push(e), a.fire = r(a.fire, e));
					},
					unsubscribe: function(e) {
						a.subscribers = a.subscribers.filter(function(t) {
							return t !== e;
						}), a.fire = a.subscribers.reduce(r, i);
					}
				};
				return t[e] = n[e] = a, a;
			}
			function c(e) {
				a(e).forEach(function(t) {
					var n = e[t];
					if (o(n)) s(t, e[t][0], e[t][1]);
					else if (n === "asap") var r = s(t, xe, function() {
						for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
						r.subscribers.forEach(function(e) {
							x(function() {
								e.apply(null, t);
							});
						});
					});
					else throw new F.InvalidArgument("Invalid event config");
				});
			}
		}
		function Gt(e, t) {
			return m(t).from({ prototype: e }), t;
		}
		function Kt(e) {
			return Gt(Ut.prototype, function(t, n, r) {
				this.db = e, this._tx = r, this.name = t, this.schema = n, this.hook = e._allTables[t] ? e._allTables[t].hook : Wt(null, {
					creating: [we, I],
					reading: [Se, xe],
					updating: [Ee, I],
					deleting: [Te, I]
				});
			});
		}
		function qt(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function Jt(e, t) {
			e.filter = Mt(e.filter, t);
		}
		function Yt(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return Mt(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function Xt(e, t) {
			e.isMatch = Mt(e.isMatch, t);
		}
		function Zt(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (!n) throw new F.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
			return n;
		}
		function Qt(e, t, n) {
			var r = Zt(e, t.schema);
			return t.openCursor({
				trans: n,
				values: !e.keysOnly,
				reverse: e.dir === "prev",
				unique: !!e.unique,
				query: {
					index: r,
					range: e.range
				}
			});
		}
		function $t(e, t, n, r) {
			var i = e.replayFilter ? Mt(e.filter, e.replayFilter()) : e.filter;
			if (e.or) {
				var a = {}, o = function(e, n, r) {
					if (!i || i(n, r, function(e) {
						return n.stop(e);
					}, function(e) {
						return n.fail(e);
					})) {
						var o = n.primaryKey, s = "" + o;
						s === "[object ArrayBuffer]" && (s = "" + new Uint8Array(o)), u(a, s) || (a[s] = !0, t(e, n, r));
					}
				};
				return Promise.all([e.or._iterate(o, n), en(Qt(e, r, n), e.algorithm, o, !e.keysOnly && e.valueMapper)]);
			}
			return en(Qt(e, r, n), Mt(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
		}
		function en(e, t, n, r) {
			var i = V(r ? function(e, t, i) {
				return n(r(e), t, i);
			} : n);
			return e.then(function(e) {
				if (e) return e.start(function() {
					var n = function() {
						return e.continue();
					};
					(!t || t(e, function(e) {
						return n = e;
					}, function(t) {
						e.stop(t), n = I;
					}, function(t) {
						e.fail(t), n = I;
					})) && i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		var tn = function() {
			function e() {}
			return e.prototype._read = function(e, t) {
				var n = this._ctx;
				return n.error ? n.table._trans(null, K.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
			}, e.prototype._write = function(e) {
				var t = this._ctx;
				return t.error ? t.table._trans(null, K.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
			}, e.prototype._addAlgorithm = function(e) {
				var t = this._ctx;
				t.algorithm = Mt(t.algorithm, e);
			}, e.prototype._iterate = function(e, t) {
				return $t(this._ctx, e, t, this._ctx.table.core);
			}, e.prototype.clone = function(e) {
				var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
				return e && s(n, e), t._ctx = n, t;
			}, e.prototype.raw = function() {
				return this._ctx.valueMapper = null, this;
			}, e.prototype.each = function(e) {
				var t = this._ctx;
				return this._read(function(n) {
					return $t(t, e, n, t.table.core);
				});
			}, e.prototype.count = function(e) {
				var t = this;
				return this._read(function(e) {
					var n = t._ctx, r = n.table.core;
					if (qt(n, !0)) return r.count({
						trans: e,
						query: {
							index: Zt(n, r.schema),
							range: n.range
						}
					}).then(function(e) {
						return Math.min(e, n.limit);
					});
					var i = 0;
					return $t(n, function() {
						return ++i, !1;
					}, e, r).then(function() {
						return i;
					});
				}).then(e);
			}, e.prototype.sortBy = function(e, t) {
				var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
				function a(e, t) {
					return t ? a(e[n[t]], t - 1) : e[r];
				}
				var o = this._ctx.dir === "next" ? 1 : -1;
				function s(e, t) {
					return J(a(e, i), a(t, i)) * o;
				}
				return this.toArray(function(e) {
					return e.slice().sort(s);
				}).then(t);
			}, e.prototype.toArray = function(e) {
				var t = this;
				return this._read(function(e) {
					var n = t._ctx;
					if (qt(n, !0) && n.limit > 0) {
						var r = n.valueMapper, i = Zt(n, n.table.core.schema);
						return n.table.core.query({
							trans: e,
							limit: n.limit,
							values: !0,
							direction: n.dir === "prev" ? "prev" : void 0,
							query: {
								index: i,
								range: n.range
							}
						}).then(function(e) {
							var t = e.result;
							return r ? t.map(r) : t;
						});
					}
					var a = [];
					return $t(n, function(e) {
						return a.push(e);
					}, e, n.table.core).then(function() {
						return a;
					});
				}, e);
			}, e.prototype.offset = function(e) {
				var t = this._ctx;
				return e <= 0 || (t.offset += e, qt(t) ? Yt(t, function() {
					var t = e;
					return function(e, n) {
						return t === 0 ? !0 : t === 1 ? (--t, !1) : (n(function() {
							e.advance(t), t = 0;
						}), !1);
					};
				}) : Yt(t, function() {
					var t = e;
					return function() {
						return --t < 0;
					};
				})), this;
			}, e.prototype.limit = function(e) {
				return this._ctx.limit = Math.min(this._ctx.limit, e), Yt(this._ctx, function() {
					var t = e;
					return function(e, n, r) {
						return --t <= 0 && n(r), t >= 0;
					};
				}, !0), this;
			}, e.prototype.until = function(e, t) {
				return Jt(this._ctx, function(n, r, i) {
					return !e(n.value) || (r(i), t);
				}), this;
			}, e.prototype.first = function(e) {
				return this.limit(1).toArray(function(e) {
					return e[0];
				}).then(e);
			}, e.prototype.last = function(e) {
				return this.reverse().first(e);
			}, e.prototype.filter = function(e) {
				return Jt(this._ctx, function(t) {
					return e(t.value);
				}), Xt(this._ctx, e), this;
			}, e.prototype.and = function(e) {
				return this.filter(e);
			}, e.prototype.or = function(e) {
				return new this.db.WhereClause(this._ctx.table, e, this);
			}, e.prototype.reverse = function() {
				return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
			}, e.prototype.desc = function() {
				return this.reverse();
			}, e.prototype.eachKey = function(e) {
				var t = this._ctx;
				return t.keysOnly = !t.isMatch, this.each(function(t, n) {
					e(n.key, n);
				});
			}, e.prototype.eachUniqueKey = function(e) {
				return this._ctx.unique = "unique", this.eachKey(e);
			}, e.prototype.eachPrimaryKey = function(e) {
				var t = this._ctx;
				return t.keysOnly = !t.isMatch, this.each(function(t, n) {
					e(n.primaryKey, n);
				});
			}, e.prototype.keys = function(e) {
				var t = this._ctx;
				t.keysOnly = !t.isMatch;
				var n = [];
				return this.each(function(e, t) {
					n.push(t.key);
				}).then(function() {
					return n;
				}).then(e);
			}, e.prototype.primaryKeys = function(e) {
				var t = this._ctx;
				if (qt(t, !0) && t.limit > 0) return this._read(function(e) {
					var n = Zt(t, t.table.core.schema);
					return t.table.core.query({
						trans: e,
						values: !1,
						limit: t.limit,
						direction: t.dir === "prev" ? "prev" : void 0,
						query: {
							index: n,
							range: t.range
						}
					});
				}).then(function(e) {
					return e.result;
				}).then(e);
				t.keysOnly = !t.isMatch;
				var n = [];
				return this.each(function(e, t) {
					n.push(t.primaryKey);
				}).then(function() {
					return n;
				}).then(e);
			}, e.prototype.uniqueKeys = function(e) {
				return this._ctx.unique = "unique", this.keys(e);
			}, e.prototype.firstKey = function(e) {
				return this.limit(1).keys(function(e) {
					return e[0];
				}).then(e);
			}, e.prototype.lastKey = function(e) {
				return this.reverse().firstKey(e);
			}, e.prototype.distinct = function() {
				var e = this._ctx, t = e.index && e.table.schema.idxByName[e.index];
				if (!t || !t.multi) return this;
				var n = {};
				return Jt(this._ctx, function(e) {
					var t = e.primaryKey.toString(), r = u(n, t);
					return n[t] = !0, !r;
				}), this;
			}, e.prototype.modify = function(e) {
				var t = this, n = this._ctx;
				return this._write(function(r) {
					var i = typeof e == "function" ? e : function(t) {
						return Ht(t, e);
					}, o = n.table.core, s = o.schema.primaryKey, c = s.outbound, l = s.extractKey, u = 200, d = t.db._options.modifyChunkSize;
					d && (u = typeof d == "object" ? d[o.name] || d["*"] || 200 : d);
					var f = [], p = 0, m = [], h = function(e, t) {
						var n = t.failures, r = t.numFailures;
						p += e - r;
						for (var i = 0, o = a(n); i < o.length; i++) {
							var s = o[i];
							f.push(n[s]);
						}
					}, g = e === nn;
					return t.clone().primaryKeys().then(function(t) {
						var a = qt(n) && n.limit === Infinity && (typeof e != "function" || g) && {
							index: n.index,
							range: n.range
						}, s = function(d) {
							var f = Math.min(u, t.length - d), p = t.slice(d, d + f);
							return (g ? Promise.resolve([]) : o.getMany({
								trans: r,
								keys: p,
								cache: "immutable"
							})).then(function(m) {
								var _ = [], v = [], y = c ? [] : null, b = g ? p : [];
								if (!g) for (var x = 0; x < f; ++x) {
									var S = m[x], C = {
										value: O(S),
										primKey: t[d + x]
									};
									i.call(C, C.value, C) !== !1 && (C.value == null ? b.push(t[d + x]) : !c && J(l(S), l(C.value)) !== 0 ? (b.push(t[d + x]), _.push(C.value)) : (v.push(C.value), c && y.push(t[d + x])));
								}
								return Promise.resolve(_.length > 0 && o.mutate({
									trans: r,
									type: "add",
									values: _
								}).then(function(e) {
									for (var t in e.failures) b.splice(parseInt(t), 1);
									h(_.length, e);
								})).then(function() {
									return (v.length > 0 || a && typeof e == "object") && o.mutate({
										trans: r,
										type: "put",
										keys: y,
										values: v,
										criteria: a,
										changeSpec: typeof e != "function" && e,
										isAdditionalChunk: d > 0
									}).then(function(e) {
										return h(v.length, e);
									});
								}).then(function() {
									return (b.length > 0 || a && g) && o.mutate({
										trans: r,
										type: "delete",
										keys: b,
										criteria: a,
										isAdditionalChunk: d > 0
									}).then(function(e) {
										return Bt(n.table, b, e);
									}).then(function(e) {
										return h(b.length, e);
									});
								}).then(function() {
									return t.length > d + f && s(d + u);
								});
							});
						};
						return s(0).then(function() {
							if (f.length > 0) throw new _e("Error modifying one or more objects", f, p, m);
							return t.length;
						});
					});
				});
			}, e.prototype.delete = function() {
				var e = this._ctx, t = e.range;
				return qt(e) && !e.table.schema.yProps && (e.isPrimKey || t.type === 3) ? this._write(function(n) {
					var r = e.table.core.schema.primaryKey, i = t;
					return e.table.core.count({
						trans: n,
						query: {
							index: r,
							range: i
						}
					}).then(function(t) {
						return e.table.core.mutate({
							trans: n,
							type: "deleteRange",
							range: i
						}).then(function(e) {
							var n = e.failures, r = e.numFailures;
							if (r) throw new _e("Could not delete some values", Object.keys(n).map(function(e) {
								return n[e];
							}), t - r);
							return t - r;
						});
					});
				}) : this.modify(nn);
			}, e;
		}(), nn = function(e, t) {
			return t.value = null;
		};
		function rn(e) {
			return Gt(tn.prototype, function(t, n) {
				this.db = e;
				var r = Nt, i = null;
				if (n) try {
					r = n();
				} catch (e) {
					i = e;
				}
				var a = t._ctx, o = a.table, s = o.hook.reading.fire;
				this._ctx = {
					table: o,
					index: a.index,
					isPrimKey: !a.index || o.schema.primKey.keyPath && a.index === o.schema.primKey.name,
					range: r,
					keysOnly: !1,
					dir: "next",
					unique: "",
					algorithm: null,
					filter: null,
					replayFilter: null,
					justLimit: !0,
					isMatch: null,
					offset: 0,
					limit: Infinity,
					error: i,
					or: a.or,
					valueMapper: s === xe ? null : s
				};
			});
		}
		function an(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function on(e, t) {
			return e > t ? -1 : e === t ? 0 : 1;
		}
		function Y(e, t, n) {
			var r = e instanceof mn ? new e.Collection(e) : e;
			return r._ctx.error = n ? new n(t) : TypeError(t), r;
		}
		function sn(e) {
			var t = new e.Collection(e, function() {
				return pn("");
			});
			return t._addAlgorithm(function() {
				return !1;
			}), t;
		}
		function cn(e) {
			return e === "next" ? function(e) {
				return e.toUpperCase();
			} : function(e) {
				return e.toLowerCase();
			};
		}
		function ln(e) {
			return e === "next" ? function(e) {
				return e.toLowerCase();
			} : function(e) {
				return e.toUpperCase();
			};
		}
		function un(e, t, n, r, i, a) {
			for (var o = Math.min(e.length, r.length), s = -1, c = 0; c < o; ++c) {
				var l = t[c];
				if (l !== r[c]) return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : s >= 0 ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
				i(e[c], l) < 0 && (s = c);
			}
			return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1);
		}
		function dn(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return Y(e, Dt);
			function f(e) {
				i = cn(e), a = ln(e), o = e === "next" ? an : on;
				var t = n.map(function(e) {
					return {
						lower: a(e),
						upper: i(e)
					};
				}).sort(function(e, t) {
					return o(e.lower, t.lower);
				});
				s = t.map(function(e) {
					return e.upper;
				}), c = t.map(function(e) {
					return e.lower;
				}), l = e, u = e === "next" ? "" : r;
			}
			f("next");
			var p = new e.Collection(e, function() {
				return fn(s[0], c[d - 1] + r);
			});
			p._ondirectionchange = function(e) {
				f(e);
			};
			var m = 0;
			return p._addAlgorithm(function(e, n, r) {
				var i = e.key;
				if (typeof i != "string") return !1;
				var f = a(i);
				if (t(f, c, m)) return !0;
				for (var p = null, h = m; h < d; ++h) {
					var g = un(i, f, s[h], c[h], o, l);
					g === null && p === null ? m = h + 1 : (p === null || o(p, g) > 0) && (p = g);
				}
				return n(p === null ? r : function() {
					e.continue(p + u);
				}), !1;
			}), p;
		}
		function fn(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function pn(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		var mn = function() {
			function e() {}
			return Object.defineProperty(e.prototype, "Collection", {
				get: function() {
					return this._ctx.table.db.Collection;
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.between = function(e, t, n, r) {
				n = n !== !1, r = r === !0;
				try {
					return this._cmp(e, t) > 0 || this._cmp(e, t) === 0 && (n || r) && !(n && r) ? sn(this) : new this.Collection(this, function() {
						return fn(e, t, !n, !r);
					});
				} catch {
					return Y(this, q);
				}
			}, e.prototype.equals = function(e) {
				return e == null ? Y(this, q) : new this.Collection(this, function() {
					return pn(e);
				});
			}, e.prototype.above = function(e) {
				return e == null ? Y(this, q) : new this.Collection(this, function() {
					return fn(e, void 0, !0);
				});
			}, e.prototype.aboveOrEqual = function(e) {
				return e == null ? Y(this, q) : new this.Collection(this, function() {
					return fn(e, void 0, !1);
				});
			}, e.prototype.below = function(e) {
				return e == null ? Y(this, q) : new this.Collection(this, function() {
					return fn(void 0, e, !1, !0);
				});
			}, e.prototype.belowOrEqual = function(e) {
				return e == null ? Y(this, q) : new this.Collection(this, function() {
					return fn(void 0, e);
				});
			}, e.prototype.startsWith = function(e) {
				return typeof e == "string" ? this.between(e, e + Tt, !0, !0) : Y(this, Dt);
			}, e.prototype.startsWithIgnoreCase = function(e) {
				return e === "" ? this.startsWith(e) : dn(this, function(e, t) {
					return e.indexOf(t[0]) === 0;
				}, [e], Tt);
			}, e.prototype.equalsIgnoreCase = function(e) {
				return dn(this, function(e, t) {
					return e === t[0];
				}, [e], "");
			}, e.prototype.anyOfIgnoreCase = function() {
				var e = A.apply(ue, arguments);
				return e.length === 0 ? sn(this) : dn(this, function(e, t) {
					return t.indexOf(e) !== -1;
				}, e, "");
			}, e.prototype.startsWithAnyOfIgnoreCase = function() {
				var e = A.apply(ue, arguments);
				return e.length === 0 ? sn(this) : dn(this, function(e, t) {
					return t.some(function(t) {
						return e.indexOf(t) === 0;
					});
				}, e, Tt);
			}, e.prototype.anyOf = function() {
				var e = this, t = A.apply(ue, arguments), n = this._cmp;
				try {
					t.sort(n);
				} catch {
					return Y(this, q);
				}
				if (t.length === 0) return sn(this);
				var r = new this.Collection(this, function() {
					return fn(t[0], t[t.length - 1]);
				});
				r._ondirectionchange = function(r) {
					n = r === "next" ? e._ascending : e._descending, t.sort(n);
				};
				var i = 0;
				return r._addAlgorithm(function(e, r, a) {
					for (var o = e.key; n(o, t[i]) > 0;) if (++i, i === t.length) return r(a), !1;
					return n(o, t[i]) === 0 || (r(function() {
						e.continue(t[i]);
					}), !1);
				}), r;
			}, e.prototype.notEqual = function(e) {
				return this.inAnyRange([[Et, e], [e, this.db._maxKey]], {
					includeLowers: !1,
					includeUppers: !1
				});
			}, e.prototype.noneOf = function() {
				var e = A.apply(ue, arguments);
				if (e.length === 0) return new this.Collection(this);
				try {
					e.sort(this._ascending);
				} catch {
					return Y(this, q);
				}
				var t = e.reduce(function(e, t) {
					return e ? e.concat([[e[e.length - 1][1], t]]) : [[Et, t]];
				}, null);
				return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
					includeLowers: !1,
					includeUppers: !1
				});
			}, e.prototype.inAnyRange = function(e, t) {
				var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
				if (e.length === 0) return sn(this);
				if (!e.every(function(e) {
					return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
				})) return Y(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", F.InvalidArgument);
				var c = !t || t.includeLowers !== !1, l = t && t.includeUppers === !0;
				function u(e, t) {
					for (var n = 0, i = e.length; n < i; ++n) {
						var a = e[n];
						if (r(t[0], a[1]) < 0 && r(t[1], a[0]) > 0) {
							a[0] = o(a[0], t[0]), a[1] = s(a[1], t[1]);
							break;
						}
					}
					return n === i && e.push(t), e;
				}
				var d = i;
				function f(e, t) {
					return d(e[0], t[0]);
				}
				var p;
				try {
					p = e.reduce(u, []), p.sort(f);
				} catch {
					return Y(this, q);
				}
				var m = 0, h = l ? function(e) {
					return i(e, p[m][1]) > 0;
				} : function(e) {
					return i(e, p[m][1]) >= 0;
				}, g = c ? function(e) {
					return a(e, p[m][0]) > 0;
				} : function(e) {
					return a(e, p[m][0]) >= 0;
				};
				function _(e) {
					return !h(e) && !g(e);
				}
				var v = h, y = new this.Collection(this, function() {
					return fn(p[0][0], p[p.length - 1][1], !c, !l);
				});
				return y._ondirectionchange = function(e) {
					e === "next" ? (v = h, d = i) : (v = g, d = a), p.sort(f);
				}, y._addAlgorithm(function(e, t, r) {
					for (var a = e.key; v(a);) if (++m, m === p.length) return t(r), !1;
					return _(a) ? !0 : (n._cmp(a, p[m][1]) === 0 || n._cmp(a, p[m][0]) === 0 || t(function() {
						d === i ? e.continue(p[m][0]) : e.continue(p[m][1]);
					}), !1);
				}), y;
			}, e.prototype.startsWithAnyOf = function() {
				var e = A.apply(ue, arguments);
				return e.every(function(e) {
					return typeof e == "string";
				}) ? e.length === 0 ? sn(this) : this.inAnyRange(e.map(function(e) {
					return [e, e + Tt];
				})) : Y(this, "startsWithAnyOf() only works with strings");
			}, e;
		}();
		function hn(e) {
			return Gt(mn.prototype, function(t, n, r) {
				if (this.db = e, this._ctx = {
					table: t,
					index: n === ":id" ? null : n,
					or: r
				}, this._cmp = this._ascending = J, this._descending = function(e, t) {
					return J(t, e);
				}, this._max = function(e, t) {
					return J(e, t) > 0 ? e : t;
				}, this._min = function(e, t) {
					return J(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = e._deps.IDBKeyRange, !this._IDBKeyRange) throw new F.MissingAPI();
			});
		}
		function X(e) {
			return V(function(t) {
				return gn(t), e(t.target.error), !1;
			});
		}
		function gn(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var _n = "storagemutated", vn = "x-storagemutated-1", Z = Wt(null, _n), yn = function() {
			function e() {}
			return e.prototype._lock = function() {
				return b(!z.global), ++this._reculock, this._reculock === 1 && !z.global && (z.lockOwnerFor = this), this;
			}, e.prototype._unlock = function() {
				if (b(!z.global), --this._reculock === 0) for (z.global || (z.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
					var e = this._blockedFuncs.shift();
					try {
						bt(e[1], e[0]);
					} catch {}
				}
				return this;
			}, e.prototype._locked = function() {
				return this._reculock && z.lockOwnerFor !== this;
			}, e.prototype.create = function(e) {
				var t = this;
				if (!this.mode) return this;
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (b(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new F.DatabaseClosed(r);
					case "MissingAPIError": throw new F.MissingAPI(r.message, r);
					default: throw new F.OpenFailed(r);
				}
				if (!this.active) throw new F.TransactionInactive();
				return b(this._completion._state === null), e = this.idbtrans = e || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : n.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })), e.onerror = V(function(n) {
					gn(n), t._reject(e.error);
				}), e.onabort = V(function(n) {
					gn(n), t.active && t._reject(new F.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = V(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Z.storagemutated.fire(e.mutatedParts);
				}), this;
			}, e.prototype._promise = function(e, t, n) {
				var r = this;
				if (e === "readwrite" && this.mode !== "readwrite") return K(new F.ReadOnly("Transaction is readonly"));
				if (!this.active) return K(new F.TransactionInactive());
				if (this._locked()) return new B(function(i, a) {
					r._blockedFuncs.push([function() {
						r._promise(e, t, n).then(i, a);
					}, z]);
				});
				if (n) return U(function() {
					var e = new B(function(e, n) {
						r._lock();
						var i = t(e, n, r);
						i && i.then && i.then(e, n);
					});
					return e.finally(function() {
						return r._unlock();
					}), e._lib = !0, e;
				});
				var i = new B(function(e, n) {
					var i = t(e, n, r);
					i && i.then && i.then(e, n);
				});
				return i._lib = !0, i;
			}, e.prototype._root = function() {
				return this.parent ? this.parent._root() : this;
			}, e.prototype.waitFor = function(e) {
				var t = this._root(), n = B.resolve(e);
				if (t._waitingFor) t._waitingFor = t._waitingFor.then(function() {
					return n;
				});
				else {
					t._waitingFor = n, t._waitingQueue = [];
					var r = t.idbtrans.objectStore(t.storeNames[0]);
					(function e() {
						for (++t._spinCount; t._waitingQueue.length;) t._waitingQueue.shift()();
						t._waitingFor && (r.get(-Infinity).onsuccess = e);
					})();
				}
				var i = t._waitingFor;
				return new B(function(e, r) {
					n.then(function(n) {
						return t._waitingQueue.push(V(e.bind(null, n)));
					}, function(e) {
						return t._waitingQueue.push(V(r.bind(null, e)));
					}).finally(function() {
						t._waitingFor === i && (t._waitingFor = null);
					});
				});
			}, e.prototype.abort = function() {
				this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new F.Abort()));
			}, e.prototype.table = function(e) {
				var t = this._memoizedTables ||= {};
				if (u(t, e)) return t[e];
				var n = this.schema[e];
				if (!n) throw new F.NotFound("Table " + e + " not part of transaction");
				var r = new this.db.Table(e, n, this);
				return r.core = this.db.core.table(e), t[e] = r, r;
			}, e;
		}();
		function bn(e) {
			return Gt(yn.prototype, function(t, n, r, i, a) {
				var o = this;
				t !== "readonly" && n.forEach(function(e) {
					var t = r[e]?.yProps;
					t && (n = n.concat(t.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = e, this.mode = t, this.storeNames = n, this.schema = r, this.chromeTransactionDurability = i, this.idbtrans = null, this.on = Wt(this, "complete", "error", "abort"), this.parent = a || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new B(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), K(e);
				});
			});
		}
		function xn(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Sn(t),
				type: s
			};
		}
		function Sn(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Cn(e, t, n) {
			return {
				name: e,
				primKey: t,
				indexes: n,
				mappedClass: null,
				idxByName: S(n, function(e) {
					return [e.name, e];
				})
			};
		}
		function wn(e) {
			return e.length === 1 ? e[0] : e;
		}
		var Tn = function(e) {
			try {
				return e.only([[]]), Tn = function() {
					return [[]];
				}, [[]];
			} catch {
				return Tn = function() {
					return Tt;
				}, Tt;
			}
		};
		function En(e) {
			return e == null ? function() {} : typeof e == "string" ? Dn(e) : function(t) {
				return C(t, e);
			};
		}
		function Dn(e) {
			return e.split(".").length === 1 ? function(t) {
				return t[e];
			} : function(t) {
				return C(t, e);
			};
		}
		function On(e) {
			return [].slice.call(e);
		}
		var kn = 0;
		function An(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function jn(e, t, n) {
			function r(e, t) {
				var n = On(e.objectStoreNames), r = n.length > 0 ? t.objectStore(n[0]) : {};
				return {
					schema: {
						name: e.name,
						tables: n.map(function(e) {
							return t.objectStore(e);
						}).map(function(e) {
							var t = e.keyPath, n = e.autoIncrement, r = o(t), i = t == null, a = {}, s = {
								name: e.name,
								primaryKey: {
									name: null,
									isPrimaryKey: !0,
									outbound: i,
									compound: r,
									keyPath: t,
									autoIncrement: n,
									unique: !0,
									extractKey: En(t)
								},
								indexes: On(e.indexNames).map(function(t) {
									return e.index(t);
								}).map(function(e) {
									var t = e.name, n = e.unique, r = e.multiEntry, i = e.keyPath, s = {
										name: t,
										compound: o(i),
										keyPath: i,
										unique: n,
										multiEntry: r,
										extractKey: En(i)
									};
									return a[An(i)] = s, s;
								}),
								getIndexByKeyPath: function(e) {
									return a[An(e)];
								}
							};
							return a[":id"] = s.primaryKey, t != null && (a[An(t)] = s.primaryKey), s;
						})
					},
					hasGetAll: n.length > 0 && "getAll" in r && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
					hasIdb3Features: "getAllRecords" in r
				};
			}
			function i(e) {
				if (e.type === 3) return null;
				if (e.type === 4) throw Error("Cannot convert never type to IDBKeyRange");
				var n = e.lower, r = e.upper, i = e.lowerOpen, a = e.upperOpen;
				return n === void 0 ? r === void 0 ? null : t.upperBound(r, !!a) : r === void 0 ? t.lowerBound(n, !!i) : t.bound(n, r, !!i, !!a);
			}
			function a(e) {
				var t = e.name;
				function n(e) {
					var n = e.trans, r = e.type, a = e.keys, o = e.values, s = e.range;
					return new Promise(function(e, c) {
						e = V(e);
						var l = n.objectStore(t), u = l.keyPath == null, d = r === "put" || r === "add";
						if (!d && r !== "delete" && r !== "deleteRange") throw Error("Invalid operation type: " + r);
						var f = (a || o || { length: 1 }).length;
						if (a && o && a.length !== o.length) throw Error("Given keys array must have same length as given values array.");
						if (f === 0) return e({
							numFailures: 0,
							failures: {},
							results: [],
							lastResult: void 0
						});
						var p, m = [], h = [], g = 0, _ = function(e) {
							++g, gn(e);
						};
						if (r === "deleteRange") {
							if (s.type === 4) return e({
								numFailures: g,
								failures: h,
								results: [],
								lastResult: void 0
							});
							s.type === 3 ? m.push(p = l.clear()) : m.push(p = l.delete(i(s)));
						} else {
							var v = d ? u ? [o, a] : [o, null] : [a, null], y = v[0], b = v[1];
							if (d) for (var x = 0; x < f; ++x) m.push(p = b && b[x] !== void 0 ? l[r](y[x], b[x]) : l[r](y[x])), p.onerror = _;
							else for (var x = 0; x < f; ++x) m.push(p = l[r](y[x])), p.onerror = _;
						}
						var S = function(t) {
							var n = t.target.result;
							m.forEach(function(e, t) {
								return e.error != null && (h[t] = e.error);
							}), e({
								numFailures: g,
								failures: h,
								results: r === "delete" ? a : m.map(function(e) {
									return e.result;
								}),
								lastResult: n
							});
						};
						p.onerror = function(e) {
							_(e), S(e);
						}, p.onsuccess = S;
					});
				}
				function r(e) {
					var n = e.trans, r = e.values, a = e.query, o = e.reverse, s = e.unique;
					return new Promise(function(e, c) {
						e = V(e);
						var l = a.index, u = a.range, d = n.objectStore(t), f = l.isPrimaryKey ? d : d.index(l.name), p = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", m = r || !("openKeyCursor" in f) ? f.openCursor(i(u), p) : f.openKeyCursor(i(u), p);
						m.onerror = X(c), m.onsuccess = V(function(t) {
							var r = m.result;
							if (!r) e(null);
							else {
								r.___id = ++kn, r.done = !1;
								var i = r.continue.bind(r), a = r.continuePrimaryKey;
								a &&= a.bind(r);
								var o = r.advance.bind(r), s = function() {
									throw Error("Cursor not started");
								}, l = function() {
									throw Error("Cursor not stopped");
								};
								r.trans = n, r.stop = r.continue = r.continuePrimaryKey = r.advance = s, r.fail = V(c), r.next = function() {
									var e = this, t = 1;
									return this.start(function() {
										return t-- ? e.continue() : e.stop();
									}).then(function() {
										return e;
									});
								}, r.start = function(e) {
									var t = new Promise(function(e, t) {
										e = V(e), m.onerror = X(t), r.fail = t, r.stop = function(t) {
											r.stop = r.continue = r.continuePrimaryKey = r.advance = l, e(t);
										};
									}), n = function() {
										if (m.result) try {
											e();
										} catch (e) {
											r.fail(e);
										}
										else r.done = !0, r.start = function() {
											throw Error("Cursor behind last entry");
										}, r.stop();
									};
									return m.onsuccess = V(function(e) {
										m.onsuccess = n, n();
									}), r.continue = i, r.continuePrimaryKey = a, r.advance = o, n(), t;
								}, e(r);
							}
						}, c);
					});
				}
				function a(e, n) {
					return function(r) {
						return new Promise(function(a, o) {
							a = V(a);
							var s = r.trans, c = r.values, l = r.limit, u = r.query, d = r.direction ?? "next", f = l === Infinity ? void 0 : l, p = u.index, m = u.range, h = s.objectStore(t), g = p.isPrimaryKey ? h : h.index(p.name), _ = i(m);
							if (l === 0) return a({ result: [] });
							if (n) {
								var v = {
									query: _,
									count: f,
									direction: d
								}, y = c ? g.getAll(v) : g.getAllKeys(v);
								y.onsuccess = function(e) {
									return a({ result: e.target.result });
								}, y.onerror = X(o);
							} else if (e && d === "next") {
								var y = c ? g.getAll(_, f) : g.getAllKeys(_, f);
								y.onsuccess = function(e) {
									return a({ result: e.target.result });
								}, y.onerror = X(o);
							} else {
								var b = 0, x = c || !("openKeyCursor" in g) ? g.openCursor(_, d) : g.openKeyCursor(_, d), S = [];
								x.onsuccess = function() {
									var e = x.result;
									if (!e || (S.push(c ? e.value : e.primaryKey), ++b === l)) return a({ result: S });
									e.continue();
								}, x.onerror = X(o);
							}
						});
					};
				}
				return {
					name: t,
					schema: e,
					mutate: n,
					getMany: function(e) {
						var n = e.trans, r = e.keys;
						return new Promise(function(e, i) {
							e = V(e);
							for (var a = n.objectStore(t), o = r.length, s = Array(o), c = 0, l = 0, u, d = function(t) {
								var n = t.target;
								s[n._pos] = n.result, ++l === c && e(s);
							}, f = X(i), p = 0; p < o; ++p) r[p] != null && (u = a.get(r[p]), u._pos = p, u.onsuccess = d, u.onerror = f, ++c);
							c === 0 && e(s);
						});
					},
					get: function(e) {
						var n = e.trans, r = e.key;
						return new Promise(function(e, i) {
							e = V(e);
							var a = n.objectStore(t).get(r);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = X(i);
						});
					},
					query: a(l, u),
					openCursor: r,
					count: function(e) {
						var n = e.query, r = e.trans, a = n.index, o = n.range;
						return new Promise(function(e, n) {
							var s = r.objectStore(t), c = a.isPrimaryKey ? s : s.index(a.name), l = i(o), u = l ? c.count(l) : c.count();
							u.onsuccess = V(function(t) {
								return e(t.target.result);
							}), u.onerror = X(n);
						});
					}
				};
			}
			var s = r(e, n), c = s.schema, l = s.hasGetAll, u = s.hasIdb3Features, d = c.tables.map(function(e) {
				return a(e);
			}), f = {};
			return d.forEach(function(e) {
				return f[e.name] = e;
			}), {
				stack: "dbcore",
				transaction: e.transaction.bind(e),
				table: function(e) {
					if (!f[e]) throw Error(`Table '${e}' not found`);
					return f[e];
				},
				MIN_KEY: -Infinity,
				MAX_KEY: Tn(t),
				schema: c
			};
		}
		function Mn(e, t) {
			return t.reduce(function(e, t) {
				var r = t.create;
				return n(n({}, e), r(e));
			}, e);
		}
		function Nn(e, t, n, r) {
			var i = n.IDBKeyRange;
			return n.indexedDB, { dbcore: Mn(jn(t, i, r), e.dbcore) };
		}
		function Pn(e, t) {
			var n = t.db;
			e.core = Nn(e._middlewares, n, e._deps, t).dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table && (e[n].core = t.core));
			});
		}
		function Fn(e, t, n, r) {
			n.forEach(function(n) {
				var i = r[n];
				t.forEach(function(t) {
					var r = g(t, n);
					(!r || "value" in r && r.value === void 0) && (t === e.Transaction.prototype || t instanceof e.Transaction ? p(t, n, {
						get: function() {
							return this.table(n);
						},
						set: function(e) {
							f(this, n, {
								value: e,
								writable: !0,
								configurable: !0,
								enumerable: !0
							});
						}
					}) : t[n] = new e.Table(n, i));
				});
			});
		}
		function In(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function Ln(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function Rn(e, t, n, r) {
			var i = e._dbSchema;
			n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = Cn("$meta", Zn("")[0], []), e._storeNames.push("$meta"));
			var o = e._createTransaction("readwrite", e._storeNames, i);
			o.create(n), o._completion.catch(r);
			var s = o._reject.bind(o), c = z.transless || z;
			U(function() {
				if (z.trans = o, z.transless = c, t === 0) a(i).forEach(function(e) {
					Un(n, e, i[e].primKey, i[e].indexes);
				}), Pn(e, n), B.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
				else return Pn(e, n), Bn(e, o, t).then(function(t) {
					return Vn(e, t, o, n);
				}).catch(s);
			});
		}
		function zn(e, t) {
			Wn(e._dbSchema, t), t.db.version % 10 == 0 && !t.objectStoreNames.contains("$meta") && t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = qn(e, e.idbdb, t);
			Xn(e, e._dbSchema, t);
			for (var r = Hn(n, e._dbSchema), i = function(e) {
				if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
				var n = t.objectStore(e.name);
				e.add.forEach(function(t) {
					L && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), Kn(n, t);
				});
			}, a = 0, o = r.change; a < o.length; a++) {
				var s = o[a], c = i(s);
				if (typeof c == "object") return c.value;
			}
		}
		function Bn(e, t, n) {
			return t.storeNames.includes("$meta") ? t.table("$meta").get("version").then(function(e) {
				return e ?? n;
			}) : B.resolve(n);
		}
		function Vn(e, t, n, r) {
			var i = [], o = e._versions, s = e._dbSchema = qn(e, e.idbdb, r), c = o.filter(function(e) {
				return e._cfg.version >= t;
			});
			if (c.length === 0) return B.resolve();
			c.forEach(function(o) {
				i.push(function() {
					var i = s, c = o._cfg.dbschema;
					Xn(e, i, r), Xn(e, c, r), s = e._dbSchema = c;
					var l = Hn(i, c);
					l.add.forEach(function(e) {
						Un(r, e[0], e[1].primKey, e[1].indexes);
					}), l.change.forEach(function(e) {
						if (e.recreate) throw new F.Upgrade("Not yet support for changing primary key");
						var t = r.objectStore(e.name);
						e.add.forEach(function(e) {
							return Kn(t, e);
						}), e.change.forEach(function(e) {
							t.deleteIndex(e.name), Kn(t, e);
						}), e.del.forEach(function(e) {
							return t.deleteIndex(e);
						});
					});
					var u = o._cfg.contentUpgrade;
					if (u && o._cfg.version > t) {
						Pn(e, r), n._memoizedTables = {};
						var d = E(c);
						l.del.forEach(function(e) {
							d[e] = i[e];
						}), In(e, [e.Transaction.prototype]), Fn(e, [e.Transaction.prototype], a(d), d), n.schema = d;
						var f = de(u);
						f && ht();
						var p, m = B.follow(function() {
							if (p = u(n), p && f) {
								var e = W.bind(null, null);
								p.then(e, e);
							}
						});
						return p && typeof p.then == "function" ? B.resolve(p) : m.then(function() {
							return p;
						});
					}
				}), i.push(function(t) {
					var r = o._cfg.dbschema;
					Gn(r, t), In(e, [e.Transaction.prototype]), Fn(e, [e.Transaction.prototype], e._storeNames, e._dbSchema), n.schema = e._dbSchema;
				}), i.push(function(t) {
					e.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(e.idbdb.version / 10) === o._cfg.version ? (e.idbdb.deleteObjectStore("$meta"), delete e._dbSchema.$meta, e._storeNames = e._storeNames.filter(function(e) {
						return e !== "$meta";
					})) : t.objectStore("$meta").put(o._cfg.version, "version"));
				});
			});
			function l() {
				return i.length ? B.resolve(i.shift()(n.idbtrans)).then(l) : B.resolve();
			}
			return l().then(function() {
				Wn(s, r);
			});
		}
		function Hn(e, t) {
			var n = {
				del: [],
				add: [],
				change: []
			}, r;
			for (r in e) t[r] || n.del.push(r);
			for (r in t) {
				var i = e[r], a = t[r];
				if (!i) n.add.push([r, a]);
				else {
					var o = {
						name: r,
						def: a,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) o.recreate = !0, n.change.push(o);
					else {
						var s = i.idxByName, c = a.idxByName, l = void 0;
						for (l in s) c[l] || o.del.push(l);
						for (l in c) {
							var u = s[l], d = c[l];
							u ? u.src !== d.src && o.change.push(d) : o.add.push(d);
						}
						(o.del.length > 0 || o.add.length > 0 || o.change.length > 0) && n.change.push(o);
					}
				}
			}
			return n;
		}
		function Un(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			return r.forEach(function(e) {
				return Kn(i, e);
			}), i;
		}
		function Wn(e, t) {
			a(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (L && console.debug("Dexie: Creating missing table", n), Un(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function Gn(e, t) {
			[].slice.call(t.db.objectStoreNames).forEach(function(n) {
				return e[n] == null && t.db.deleteObjectStore(n);
			});
		}
		function Kn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function qn(e, t, n) {
			var r = {};
			return v(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = t.keyPath, a = xn(Sn(i), i || "", !0, !1, !!t.autoIncrement, i && typeof i != "string", !0), o = [], s = 0; s < t.indexNames.length; ++s) {
					var c = t.index(t.indexNames[s]);
					i = c.keyPath;
					var l = xn(c.name, i, !!c.unique, !!c.multiEntry, !1, i && typeof i != "string", !1);
					o.push(l);
				}
				r[e] = Cn(e, a, o);
			}), r;
		}
		function Jn(e, t, n) {
			e.verno = t.version / 10;
			var r = e._dbSchema = qn(e, t, n);
			e._storeNames = v(t.objectStoreNames, 0), Fn(e, [e._allTables], a(r), r);
		}
		function Yn(e, t) {
			var n = Hn(qn(e, e.idbdb, t), e._dbSchema);
			return !(n.add.length || n.change.some(function(e) {
				return e.add.length || e.change.length;
			}));
		}
		function Xn(e, t, n) {
			for (var r = n.db.objectStoreNames, a = 0; a < r.length; ++a) {
				var o = r[a], s = n.objectStore(o);
				e._hasGetAll = "getAll" in s;
				for (var c = 0; c < s.indexNames.length; ++c) {
					var l = s.indexNames[c], u = s.index(l).keyPath, d = typeof u == "string" ? u : "[" + v(u).join("+") + "]";
					if (t[o]) {
						var f = t[o].idxByName[d];
						f && (f.name = l, delete t[o].idxByName[d], t[o].idxByName[l] = f);
					}
				}
			}
			typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function Zn(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = n[1]?.trim();
				e = n[0].trim();
				var i = e.replace(/([&*]|\+\+)/g, ""), a = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
				return xn(i, a || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), o(a), t === 0, r);
			});
		}
		var Qn = function() {
			function e() {}
			return e.prototype._createTableSchema = function(e, t, n) {
				return Cn(e, t, n);
			}, e.prototype._parseIndexSyntax = function(e) {
				return Zn(e);
			}, e.prototype._parseStoresSpec = function(e, t) {
				var n = this;
				a(e).forEach(function(r) {
					if (e[r] !== null) {
						var i = n._parseIndexSyntax(e[r]), a = i.shift();
						if (!a) throw new F.Schema("Invalid schema for table " + r + ": " + e[r]);
						if (a.unique = !0, a.multi) throw new F.Schema("Primary key cannot be multiEntry*");
						i.forEach(function(e) {
							if (e.auto) throw new F.Schema("Only primary key can be marked as autoIncrement (++)");
							if (!e.keyPath) throw new F.Schema("Index must have a name and cannot be an empty string");
						}), t[r] = n._createTableSchema(r, a, i);
					}
				});
			}, e.prototype.stores = function(e) {
				var t = this.db;
				this._cfg.storesSource = this._cfg.storesSource ? s(this._cfg.storesSource, e) : e;
				var n = t._versions, r = {}, i = {};
				return n.forEach(function(e) {
					s(r, e._cfg.storesSource), i = e._cfg.dbschema = {}, e._parseStoresSpec(r, i);
				}), t._dbSchema = i, In(t, [
					t._allTables,
					t,
					t.Transaction.prototype
				]), Fn(t, [
					t._allTables,
					t,
					t.Transaction.prototype,
					this._cfg.tables
				], a(i), i), t._storeNames = a(i), this;
			}, e.prototype.upgrade = function(e) {
				return this._cfg.contentUpgrade = Oe(this._cfg.contentUpgrade || I, e), this;
			}, e;
		}();
		function $n(e) {
			return Gt(Qn.prototype, function(t) {
				this.db = e, this._cfg = {
					version: t,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			});
		}
		var er = tr();
		function tr() {
			if (typeof FinalizationRegistry < "u" && typeof WeakRef < "u") {
				var e = /* @__PURE__ */ new Set(), t = new FinalizationRegistry(function(t) {
					e.delete(t);
				}), n = function() {
					return Array.from(e).map(function(e) {
						return e.deref();
					}).filter(function(e) {
						return e !== void 0;
					});
				}, r = function(n) {
					var r = new WeakRef(n._novip);
					if (e.add(r), t.register(n._novip, r, r), e.size > n._options.maxConnections) {
						var i = e.values().next().value;
						e.delete(i), t.unregister(i);
					}
				}, i = function(n) {
					if (n) for (var r = e.values(), i = r.next(); !i.done;) {
						var a = i.value;
						if (a.deref() === n._novip) {
							e.delete(a), t.unregister(a);
							return;
						}
						i = r.next();
					}
				};
				return {
					toArray: n,
					add: r,
					remove: i
				};
			}
			var a = [], n = function() {
				return a;
			}, r = function(e) {
				a.push(e._novip);
			}, i = function(e) {
				if (e) {
					var t = a.indexOf(e._novip);
					t !== -1 && a.splice(t, 1);
				}
			};
			return {
				toArray: n,
				add: r,
				remove: i
			};
		}
		function nr(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new $(kt, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			}), n.version(1).stores({ dbnames: "name" })), n.table("dbnames");
		}
		function rr(e) {
			return e && typeof e.databases == "function";
		}
		function ir(e) {
			var t = e.indexedDB, n = e.IDBKeyRange;
			return rr(t) ? Promise.resolve(t.databases()).then(function(e) {
				return e.map(function(e) {
					return e.name;
				}).filter(function(e) {
					return e !== kt;
				});
			}) : nr(t, n).toCollection().primaryKeys();
		}
		function ar(e, t) {
			var n = e.indexedDB, r = e.IDBKeyRange;
			!rr(n) && t !== kt && nr(n, r).put({ name: t }).catch(I);
		}
		function or(e, t) {
			var n = e.indexedDB, r = e.IDBKeyRange;
			!rr(n) && t !== kt && nr(n, r).delete(t).catch(I);
		}
		function sr(e) {
			return U(function() {
				return z.letThrough = !0, e();
			});
		}
		function cr() {
			if (navigator.userAgentData || !/Safari\//.test(navigator.userAgent) || /Chrom(e|ium)\//.test(navigator.userAgent) || !indexedDB.databases) return Promise.resolve();
			var e;
			return new Promise(function(t) {
				var n = function() {
					return indexedDB.databases().finally(t);
				};
				e = setInterval(n, 100), n();
			}).finally(function() {
				return clearInterval(e);
			});
		}
		var lr;
		function ur(e) {
			return !("from" in e);
		}
		var Q = function(e, t) {
			if (this) s(this, arguments.length ? {
				d: 1,
				from: e,
				to: arguments.length > 1 ? t : e
			} : { d: 0 });
			else {
				var n = new Q();
				return e && "d" in e && s(n, e), n;
			}
		};
		d(Q.prototype, (lr = {
			add: function(e) {
				return fr(this, e), this;
			},
			addKey: function(e) {
				return dr(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return dr(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = mr(this).next(e).value;
				return t && J(t.from, e) <= 0 && J(t.to, e) >= 0;
			}
		}, lr[se] = function() {
			return mr(this);
		}, lr));
		function dr(e, t, n) {
			var r = J(t, n);
			if (!isNaN(r)) {
				if (r > 0) throw RangeError();
				if (ur(e)) return s(e, {
					from: t,
					to: n,
					d: 1
				});
				var i = e.l, a = e.r;
				if (J(n, e.from) < 0) return i ? dr(i, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, hr(e);
				if (J(t, e.to) > 0) return a ? dr(a, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, hr(e);
				J(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), J(n, e.to) > 0 && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
				var o = !e.r;
				i && !e.l && fr(e, i), a && o && fr(e, a);
			}
		}
		function fr(e, t) {
			function n(e, t) {
				var r = t.from, i = t.to, a = t.l, o = t.r;
				dr(e, r, i), a && n(e, a), o && n(e, o);
			}
			ur(t) || n(e, t);
		}
		function pr(e, t) {
			var n = mr(t), r = n.next();
			if (r.done) return !1;
			for (var i = r.value, a = mr(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (J(s.from, i.to) <= 0 && J(s.to, i.from) >= 0) return !0;
				J(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function mr(e) {
			var t = ur(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = arguments.length > 0; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && J(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || J(e, t.n.to) <= 0) return {
						value: t.n,
						done: !1
					};
					case 2: if (t.n.r) {
						t.s = 3, t = {
							up: t,
							n: t.n.r,
							s: 0
						};
						continue;
					}
					case 3: t = t.up;
				}
				return { done: !0 };
			} };
		}
		function hr(e) {
			var t = (e.r?.d || 0) - (e.l?.d || 0), r = t > 1 ? "r" : t < -1 ? "l" : "";
			if (r) {
				var i = r === "r" ? "l" : "r", a = n({}, e), o = e[r];
				e.from = o.from, e.to = o.to, e[r] = o[r], a[r] = o[i], e[i] = a, a.d = gr(a);
			}
			e.d = gr(e);
		}
		function gr(e) {
			var t = e.r, n = e.l;
			return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
		}
		function _r(e, t) {
			return a(t).forEach(function(n) {
				e[n] ? fr(e[n], t[n]) : e[n] = ie(t[n]);
			}), e;
		}
		function vr(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && pr(t[n], e[n]);
			});
		}
		var yr = {}, br = {}, xr = !1;
		function Sr(e, t) {
			_r(br, e), xr || (xr = !0, setTimeout(function() {
				xr = !1;
				var e = br;
				br = {}, Cr(e, !1);
			}, 0));
		}
		function Cr(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(yr); r < i.length; r++) {
				var a = i[r];
				wr(a, e, n, t);
			}
			else for (var o in e) {
				var s = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
				if (s) {
					var a = yr[`idb://${s[1]}/${s[2]}`];
					a && wr(a, e, n, t);
				}
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function wr(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = s[1], u = [], d = 0, f = l; d < f.length; d++) {
					var p = f[d];
					vr(t, p.obsSet) ? p.subscribers.forEach(function(e) {
						return n.add(e);
					}) : r && u.push(p);
				}
				r && i.push([c, u]);
			}
			if (r) for (var m = 0, h = i; m < h.length; m++) {
				var g = h[m], c = g[0], u = g[1];
				e.queries.query[c] = u;
			}
		}
		function Tr(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? K(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(e.verno * 10), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new F.DatabaseClosed("db.open() was cancelled");
			}
			var c = t.dbReadyResolve, l = null, u = !1, d = function() {
				return new B(function(r, i) {
					if (s(), !n) throw new F.MissingAPI();
					var c = e.name, f = t.autoSchema || !a ? n.open(c) : n.open(c, a);
					if (!f) throw new F.MissingAPI();
					f.onerror = X(i), f.onblocked = V(e._fireOnBlocked), f.onupgradeneeded = V(function(r) {
						if (l = f.transaction, t.autoSchema && !e._options.allowEmptyDB) {
							f.onerror = gn, l.abort(), f.result.close();
							var a = n.deleteDatabase(c);
							a.onsuccess = a.onerror = V(function() {
								i(new F.NoSuchDatabase(`Database ${c} doesnt exist`));
							});
						} else {
							l.onerror = X(i);
							var s = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion;
							u = s < 1, e.idbdb = f.result, o && zn(e, l), Rn(e, s / 10, l, i);
						}
					}, i), f.onsuccess = V(function() {
						l = null;
						var n = e.idbdb = f.result, i = v(n.objectStoreNames);
						if (i.length > 0) try {
							var s = n.transaction(wn(i), "readonly");
							if (t.autoSchema) Jn(e, n, s);
							else if (Xn(e, e._dbSchema, s), !Yn(e, s) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), n.close(), a = n.version + 1, o = !0, r(d());
							Pn(e, s);
						} catch {}
						er.add(e), n.onversionchange = V(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), n.onclose = V(function() {
							e.close({ disableAutoOpen: !1 });
						}), u && ar(e._deps, c), r();
					}, i);
				}).catch(function(e) {
					switch (e?.name) {
						case "UnknownError":
							if (t.PR1398_maxLoop > 0) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
							break;
						case "VersionError": if (a > 0) return a = 0, d();
					}
					return B.reject(e);
				});
			}, f = typeof navigator < "u" && !!n && n === i.indexedDB;
			return B.race([r, (f ? cr() : B.resolve()).then(d)]).then(function() {
				return s(), t.onReadyBeingFired = [], B.resolve(sr(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					if (t.onReadyBeingFired.length > 0) {
						var r = t.onReadyBeingFired.reduce(Oe, I);
						return t.onReadyBeingFired = [], B.resolve(sr(function() {
							return r(e.vip);
						})).then(n);
					}
				});
			}).finally(function() {
				t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(n) {
				t.dbOpenError = n;
				try {
					l && l.abort();
				} catch {}
				return r === t.openCanceller && e._close(), K(n);
			}).finally(function() {
				t.openComplete = !0, c();
			}).then(function() {
				if (u) {
					var t = {};
					e.tables.forEach(function(n) {
						n.schema.indexes.forEach(function(r) {
							r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new Q(-Infinity, [[[]]]));
						}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new Q(-Infinity, [[[]]]);
					}), Z(_n).fire(t), Cr(t, !0);
				}
				return e;
			});
		}
		function Er(e) {
			var t = function(t) {
				return e.next(t);
			}, n = function(t) {
				return e.throw(t);
			}, r = a(t), i = a(n);
			function a(e) {
				return function(t) {
					var n = e(t), a = n.value;
					return n.done ? a : !a || typeof a.then != "function" ? o(a) ? Promise.all(a).then(r, i) : r(a) : a.then(r, i);
				};
			}
			return a(t)();
		}
		function Dr(e, t, n) {
			var r = arguments.length;
			if (r < 2) throw new F.InvalidArgument("Too few arguments");
			for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
			return n = i.pop(), [
				e,
				te(i),
				n
			];
		}
		function Or(e, t, n, r, i) {
			return B.resolve().then(function() {
				var a = z.transless || z, o = e._createTransaction(t, n, e._dbSchema, r);
				o.explicit = !0;
				var s = {
					trans: o,
					transless: a
				};
				if (r) o.idbtrans = r.idbtrans;
				else try {
					o.create(), o.idbtrans._explicit = !0, e._state.PR1398_maxLoop = 3;
				} catch (r) {
					return r.name === N.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: !1 }), e.open().then(function() {
						return Or(e, t, n, null, i);
					})) : K(r);
				}
				var c = de(i);
				c && ht();
				var l, u = B.follow(function() {
					if (l = i.call(o, o), l) {
						if (c) {
							var e = W.bind(null, null);
							l.then(e, e);
						} else typeof l.next == "function" && typeof l.throw == "function" && (l = Er(l));
					}
				}, s);
				return (l && typeof l.then == "function" ? B.resolve(l).then(function(e) {
					return o.active ? e : K(new F.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
				}) : u.then(function() {
					return l;
				})).then(function(e) {
					return r && o._resolve(), o._completion.then(function() {
						return e;
					});
				}).catch(function(e) {
					return o._reject(e), K(e);
				});
			});
		}
		function kr(e, t, n) {
			for (var r = o(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
			return r;
		}
		function Ar(e) {
			return n(n({}, e), { table: function(t) {
				var r = e.table(t), i = r.schema, a = Object.create(null), o = [];
				function s(e, t, r) {
					var i = An(e), c = a[i] = a[i] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = t > 0, d = n(n({}, r), {
						name: u ? `${i}(virtual-from:${r.name})` : r.name,
						lowLevelIndex: r,
						isVirtual: u,
						keyTail: t,
						keyLength: l,
						extractKey: En(e),
						unique: !u && r.unique
					});
					return c.push(d), d.isPrimaryKey || o.push(d), l > 1 && s(l === 2 ? e[0] : e.slice(0, l - 1), t + 1, r), c.sort(function(e, t) {
						return e.keyTail - t.keyTail;
					}), d;
				}
				var c = s(i.primaryKey.keyPath, 0, i.primaryKey);
				a[":id"] = [c];
				for (var l = 0, u = i.indexes; l < u.length; l++) {
					var d = u[l];
					s(d.keyPath, 0, d);
				}
				function f(e) {
					var t = a[An(e)];
					return t && t[0];
				}
				function p(t, n) {
					return {
						type: t.type === 1 ? 2 : t.type,
						lower: kr(t.lower, t.lowerOpen ? e.MAX_KEY : e.MIN_KEY, n),
						lowerOpen: !0,
						upper: kr(t.upper, t.upperOpen ? e.MIN_KEY : e.MAX_KEY, n),
						upperOpen: !0
					};
				}
				function m(e) {
					var t = e.query.index;
					return t.isVirtual ? n(n({}, e), { query: {
						index: t.lowLevelIndex,
						range: p(e.query.range, t.keyTail)
					} }) : e;
				}
				return n(n({}, r), {
					schema: n(n({}, i), {
						primaryKey: c,
						indexes: o,
						getIndexByKeyPath: f
					}),
					count: function(e) {
						return r.count(m(e));
					},
					query: function(e) {
						return r.query(m(e));
					},
					openCursor: function(t) {
						var n = t.query.index, i = n.keyTail, a = n.isVirtual, o = n.keyLength;
						if (!a) return r.openCursor(t);
						function s(n) {
							function r(r) {
								r == null ? t.unique ? n.continue(n.key.slice(0, o).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(kr(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
							}
							return Object.create(n, {
								continue: { value: r },
								continuePrimaryKey: { value: function(t, r) {
									n.continuePrimaryKey(kr(t, e.MAX_KEY, i), r);
								} },
								primaryKey: { get: function() {
									return n.primaryKey;
								} },
								key: { get: function() {
									var e = n.key;
									return o === 1 ? e[0] : e.slice(0, o);
								} },
								value: { get: function() {
									return n.value;
								} }
							});
						}
						return r.openCursor(m(t)).then(function(e) {
							return e && s(e);
						});
					}
				});
			} });
		}
		var jr = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: Ar
		};
		function Mr(e, t, n, r) {
			return n ||= {}, r ||= "", a(e).forEach(function(i) {
				if (!u(t, i)) n[r + i] = void 0;
				else {
					var a = e[i], o = t[i];
					if (typeof a == "object" && typeof o == "object" && a && o) {
						var s = oe(a);
						s === oe(o) ? s === "Object" ? Mr(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i];
					} else a !== o && (n[r + i] = t[i]);
				}
			}), a(t).forEach(function(i) {
				u(e, i) || (n[r + i] = t[i]);
			}), n;
		}
		function Nr(e, t) {
			return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var Pr = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return n(n({}, e), { table: function(t) {
					var i = e.table(t), a = i.schema.primaryKey;
					return n(n({}, i), { mutate: function(e) {
						var o = z.trans, s = o.table(t).hook, c = s.deleting, l = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (l.fire === I) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (l.fire === I && d.fire === I) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === I) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === I) break;
								return o._promise("readwrite", function() {
									return p(e);
								}, !0);
						}
						return i.mutate(e);
						function f(e) {
							var t = z.trans, o = e.keys || Nr(a, e);
							if (!o) throw Error("Keys missing");
							return e = e.type === "add" || e.type === "put" ? n(n({}, e), { keys: o }) : n({}, e), e.type !== "delete" && (e.values = r([], e.values, !0)), e.keys && (e.keys = r([], e.keys, !0)), Fr(i, e, o).then(function(n) {
								var r = o.map(function(r, i) {
									var o = n[i], s = {
										onerror: null,
										onsuccess: null
									};
									if (e.type === "delete") c.fire.call(s, r, o, t);
									else if (e.type === "add" || o === void 0) {
										var f = l.fire.call(s, r, e.values[i], t);
										r == null && f != null && (r = f, e.keys[i] = r, a.outbound || w(e.values[i], a.keyPath, r));
									} else {
										var p = Mr(o, e.values[i]), m = d.fire.call(s, p, r, o, t);
										if (m) {
											var h = e.values[i];
											Object.keys(m).forEach(function(e) {
												u(h, e) ? h[e] = m[e] : w(h, e, m[e]);
											});
										}
									}
									return s;
								});
								return i.mutate(e).then(function(t) {
									for (var i = t.failures, a = t.results, s = t.numFailures, c = t.lastResult, l = 0; l < o.length; ++l) {
										var u = a ? a[l] : o[l], d = r[l];
										u == null ? d.onerror && d.onerror(i[l]) : d.onsuccess && d.onsuccess(e.type === "put" && n[l] ? e.values[l] : u);
									}
									return {
										failures: i,
										results: a,
										numFailures: s,
										lastResult: c
									};
								}).catch(function(e) {
									return r.forEach(function(t) {
										return t.onerror && t.onerror(e);
									}), Promise.reject(e);
								});
							});
						}
						function p(e) {
							return m(e.trans, e.range, 1e4);
						}
						function m(e, t, r) {
							return i.query({
								trans: e,
								values: !1,
								query: {
									index: a,
									range: t
								},
								limit: r
							}).then(function(i) {
								var a = i.result;
								return f({
									type: "delete",
									keys: a,
									trans: e
								}).then(function(i) {
									return i.numFailures > 0 ? Promise.reject(i.failures[0]) : a.length < r ? {
										failures: [],
										numFailures: 0,
										lastResult: void 0
									} : m(e, n(n({}, t), {
										lower: a[a.length - 1],
										lowerOpen: !0
									}), r);
								});
							});
						}
					} });
				} });
			}
		};
		function Fr(e, t, n) {
			return t.type === "add" ? Promise.resolve([]) : e.getMany({
				trans: t.trans,
				keys: n,
				cache: "immutable"
			});
		}
		function Ir(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) J(t.keys[i], e[a]) === 0 && (r.push(n ? O(t.values[i]) : t.values[i]), ++a);
				return r.length === e.length ? r : null;
			} catch {
				return null;
			}
		}
		var Lr = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(t) {
					var r = e.table(t);
					return n(n({}, r), {
						getMany: function(e) {
							if (!e.cache) return r.getMany(e);
							var t = Ir(e.keys, e.trans._cache, e.cache === "clone");
							return t ? B.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? O(t) : t
								}, t;
							});
						},
						mutate: function(e) {
							return e.type !== "add" && (e.trans._cache = null), r.mutate(e);
						}
					});
				} };
			}
		};
		function Rr(e, t) {
			return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
		}
		function zr(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get": return !1;
				case "getMany": return !1;
				case "count": return !1;
				case "openCursor": return !1;
			}
		}
		var Br = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var t = e.schema.name, r = new Q(e.MIN_KEY, e.MAX_KEY);
				return n(n({}, e), {
					transaction: function(t, n, r) {
						if (z.subscr && n !== "readonly") throw new F.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${z.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(i) {
						var s = e.table(i), c = s.schema, l = c.primaryKey, u = c.indexes, d = l.extractKey, f = l.outbound, p = l.autoIncrement && u.filter(function(e) {
							return e.compound && e.keyPath.includes(l.keyPath);
						}), m = n(n({}, s), { mutate: function(n) {
							var a = n.trans, u = n.mutatedParts ||= {}, d = function(e) {
								var n = `idb://${t}/${i}/${e}`;
								return u[n] || (u[n] = new Q());
							}, f = d(""), m = d(":dels"), h = n.type, g = n.type === "deleteRange" ? [n.range] : n.type === "delete" ? [n.keys] : n.values.length < 50 ? [Nr(l, n).filter(function(e) {
								return e != null;
							}), n.values] : [], _ = g[0], v = g[1], y = n.trans._cache;
							if (o(_)) {
								f.addKeys(_);
								var b = h === "delete" || _.length === v.length ? Ir(_, y) : null;
								b || m.addKeys(_), (b || v) && Vr(d, c, b, v);
							} else if (_) {
								var x = {
									from: _.lower ?? e.MIN_KEY,
									to: _.upper ?? e.MAX_KEY
								};
								m.add(x), f.add(x);
							} else f.add(r), m.add(r), c.indexes.forEach(function(e) {
								return d(e.name).add(r);
							});
							return s.mutate(n).then(function(e) {
								return _ && (n.type === "add" || n.type === "put") && (f.addKeys(e.results), p && p.forEach(function(t) {
									for (var r = n.values.map(function(e) {
										return t.extractKey(e);
									}), i = t.keyPath.findIndex(function(e) {
										return e === l.keyPath;
									}), a = 0, o = e.results.length; a < o; ++a) r[a][i] = e.results[a];
									d(t.name).addKeys(r);
								})), a.mutatedParts = _r(a.mutatedParts || {}, u), e;
							});
						} }), h = function(t) {
							var n = t.query, r = n.index, i = n.range;
							return [r, new Q(i.lower ?? e.MIN_KEY, i.upper ?? e.MAX_KEY)];
						}, g = {
							get: function(e) {
								return [l, new Q(e.key)];
							},
							getMany: function(e) {
								return [l, new Q().addKeys(e.keys)];
							},
							count: h,
							query: h,
							openCursor: h
						};
						return a(g).forEach(function(e) {
							m[e] = function(a) {
								var o = z.subscr, c = !!o, l = Rr(z, s) && zr(e, a) ? a.obsSet = {} : o;
								if (c) {
									var u = function(e) {
										var n = `idb://${t}/${i}/${e}`;
										return l[n] || (l[n] = new Q());
									}, p = u(""), m = u(":dels"), h = g[e](a), _ = h[0], v = h[1];
									if (e === "query" && _.isPrimaryKey && !a.values ? m.add(v) : u(_.name || "").add(v), !_.isPrimaryKey) {
										if (e === "count") m.add(r);
										else {
											var y = e === "query" && f && a.values && s.query(n(n({}, a), { values: !1 }));
											return s[e].apply(this, arguments).then(function(t) {
												if (e === "query") {
													if (f && a.values) return y.then(function(e) {
														var n = e.result;
														return p.addKeys(n), t;
													});
													var n = a.values ? t.result.map(d) : t.result;
													a.values ? p.addKeys(n) : m.addKeys(n);
												} else if (e === "openCursor") {
													var r = t, i = a.values;
													return r && Object.create(r, {
														key: { get: function() {
															return m.addKey(r.primaryKey), r.key;
														} },
														primaryKey: { get: function() {
															var e = r.primaryKey;
															return m.addKey(e), e;
														} },
														value: { get: function() {
															return i && p.addKey(r.primaryKey), r.value;
														} }
													});
												}
												return t;
											});
										}
									}
								}
								return s[e].apply(this, arguments);
							};
						}), m;
					}
				});
			}
		};
		function Vr(e, t, n, r) {
			function i(t) {
				var i = e(t.name || "");
				function a(e) {
					return e == null ? null : t.extractKey(e);
				}
				var s = function(e) {
					return t.multiEntry && o(e) ? e.forEach(function(e) {
						return i.addKey(e);
					}) : i.addKey(e);
				};
				(n || r).forEach(function(e, t) {
					var i = n && a(n[t]), o = r && a(r[t]);
					J(i, o) !== 0 && (i != null && s(i), o != null && s(o));
				});
			}
			t.indexes.forEach(i);
		}
		function Hr(e, t, r) {
			if (r.numFailures === 0) return t;
			if (t.type === "deleteRange") return null;
			var i = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
			if (r.numFailures === i) return null;
			var a = n({}, t);
			return o(a.keys) && (a.keys = a.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in a && o(a.values) && (a.values = a.values.filter(function(e, t) {
				return !(t in r.failures);
			})), a;
		}
		function Ur(e, t) {
			return t.lower === void 0 ? !0 : t.lowerOpen ? J(e, t.lower) > 0 : J(e, t.lower) >= 0;
		}
		function Wr(e, t) {
			return t.upper === void 0 ? !0 : t.upperOpen ? J(e, t.upper) < 0 : J(e, t.upper) <= 0;
		}
		function Gr(e, t) {
			return Ur(e, t) && Wr(e, t);
		}
		function Kr(e, t, n, r, i, a) {
			if (!n || n.length === 0) return e;
			var s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, p = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var a = new Q(), s = n.values.length - 1; s >= 0; --s) {
					var f = n.values[s], p = u(f);
					if (!a.hasKey(p)) {
						var m = d(f);
						(c && o(m) ? m.some(function(e) {
							return Gr(e, l);
						}) : Gr(m, l)) && (a.addKey(p), i.push(f));
					}
				}
				switch (n.type) {
					case "add":
						var h = new Q().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e);
						r = e.concat(t.values ? i.filter(function(e) {
							var t = u(e);
							return !h.hasKey(t) && (h.addKey(t), !0);
						}) : i.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !h.hasKey(e) && (h.addKey(e), !0);
						}));
						break;
					case "put":
						var g = new Q().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new Q().addKeys(n.keys);
						r = e.filter(function(e) {
							return !_.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var v = n.range;
						r = e.filter(function(e) {
							return !Gr(u(e), v);
						});
				}
				return r;
			}, e);
			if (p === e) return e;
			var m = function(e, t) {
				return J(f(e), f(t)) || J(u(e), u(t));
			};
			return p.sort(t.direction === "prev" || t.direction === "prevunique" ? function(e, t) {
				return m(t, e);
			} : m), t.limit && t.limit < Infinity && (p.length > t.limit ? p.length = t.limit : e.length === t.limit && p.length < t.limit && (i.dirty = !0)), a ? Object.freeze(p) : p;
		}
		function qr(e, t) {
			return J(e.lower, t.lower) === 0 && J(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function Jr(e, t, n, r) {
			if (e === void 0) return t === void 0 ? 0 : -1;
			if (t === void 0) return 1;
			var i = J(e, t);
			if (i === 0) {
				if (n && r) return 0;
				if (n) return 1;
				if (r) return -1;
			}
			return i;
		}
		function Yr(e, t, n, r) {
			if (e === void 0) return t === void 0 ? 0 : 1;
			if (t === void 0) return -1;
			var i = J(e, t);
			if (i === 0) {
				if (n && r) return 0;
				if (n) return -1;
				if (r) return 1;
			}
			return i;
		}
		function Xr(e, t) {
			return Jr(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && Yr(e.upper, t.upper, e.upperOpen, t.upperOpen) >= 0;
		}
		function Zr(e, t, n, r) {
			var i = yr[`idb://${e}/${t}`];
			if (!i) return [];
			var a = i.queries[n];
			if (!a) return [
				null,
				!1,
				i,
				null
			];
			var o = a[(r.query ? r.query.index.name : null) || ""];
			if (!o) return [
				null,
				!1,
				i,
				null
			];
			switch (n) {
				case "query":
					var s = r.direction ?? "next", c = o.find(function(e) {
						return e.req.limit === r.limit && e.req.values === r.values && (e.req.direction ?? "next") === s && qr(e.req.query.range, r.query.range);
					});
					return c ? [
						c,
						!0,
						i,
						o
					] : [
						o.find(function(e) {
							return ("limit" in e.req ? e.req.limit : Infinity) >= r.limit && (e.req.direction ?? "next") === s && (!r.values || e.req.values) && Xr(e.req.query.range, r.query.range);
						}),
						!1,
						i,
						o
					];
				case "count":
					var l = o.find(function(e) {
						return qr(e.req.query.range, r.query.range);
					});
					return [
						l,
						!!l,
						i,
						o
					];
			}
		}
		function Qr(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				e.subscribers.delete(n), e.subscribers.size === 0 && $r(e, t);
			});
		}
		function $r(e, t) {
			setTimeout(function() {
				e.subscribers.size === 0 && le(t, e);
			}, 3e3);
		}
		var ei = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var t = e.schema.name;
				return n(n({}, e), {
					transaction: function(n, r, i) {
						var a = e.transaction(n, r, i);
						if (r === "readwrite") {
							var o = new AbortController(), s = o.signal, c = function(i) {
								return function() {
									if (o.abort(), r === "readwrite") {
										for (var s = /* @__PURE__ */ new Set(), c = 0, l = n; c < l.length; c++) {
											var u = l[c], d = yr[`idb://${t}/${u}`];
											if (d) {
												var f = e.table(u), p = d.optimisticOps.filter(function(e) {
													return e.trans === a;
												});
												if (a._explicit && i && a.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = h[m], _ = 0, v = g.slice(); _ < v.length; _++) {
													var y = v[_];
													vr(y.obsSet, a.mutatedParts) && (le(g, y), y.subscribers.forEach(function(e) {
														return s.add(e);
													}));
												}
												else if (p.length > 0) {
													d.optimisticOps = d.optimisticOps.filter(function(e) {
														return e.trans !== a;
													});
													for (var b = 0, x = Object.values(d.queries.query); b < x.length; b++) for (var g = x[b], S = 0, C = g.slice(); S < C.length; S++) {
														var y = C[S];
														if (y.res != null && a.mutatedParts) {
															if (i && !y.dirty) {
																var w = Object.isFrozen(y.res), T = Kr(y.res, y.req, p, f, y, w);
																y.dirty ? (le(g, y), y.subscribers.forEach(function(e) {
																	return s.add(e);
																})) : T !== y.res && (y.res = T, y.promise = B.resolve({ result: T }));
															} else y.dirty && le(g, y), y.subscribers.forEach(function(e) {
																return s.add(e);
															});
														}
													}
												}
											}
										}
										s.forEach(function(e) {
											return e();
										});
									}
								};
							};
							a.addEventListener("abort", c(!1), { signal: s }), a.addEventListener("error", c(!1), { signal: s }), a.addEventListener("complete", c(!0), { signal: s });
						}
						return a;
					},
					table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return n(n({}, i), {
							mutate: function(e) {
								var o = z.trans;
								if (a.outbound || o.db._options.cache === "disabled" || o.explicit || o.idbtrans.mode !== "readwrite") return i.mutate(e);
								var s = yr[`idb://${t}/${r}`];
								if (!s) return i.mutate(e);
								var c = i.mutate(e);
								return (e.type === "add" || e.type === "put") && (e.values.length >= 50 || Nr(a, e).some(function(e) {
									return e == null;
								})) ? c.then(function(t) {
									var r = Hr(s, n(n({}, e), { values: e.values.map(function(e, r) {
										if (t.failures[r]) return e;
										var i = a.keyPath?.includes(".") ? O(e) : n({}, e);
										return w(i, a.keyPath, t.results[r]), i;
									}) }), t);
									s.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Sr(e.mutatedParts);
									});
								}) : (s.optimisticOps.push(e), e.mutatedParts && Sr(e.mutatedParts), c.then(function(t) {
									if (t.numFailures > 0) {
										le(s.optimisticOps, e);
										var n = Hr(s, e, t);
										n && s.optimisticOps.push(n), e.mutatedParts && Sr(e.mutatedParts);
									}
								}), c.catch(function() {
									le(s.optimisticOps, e), e.mutatedParts && Sr(e.mutatedParts);
								})), c;
							},
							query: function(e) {
								if (!Rr(z, i) || !zr("query", e)) return i.query(e);
								var n = z.trans?.db._options.cache === "immutable", a = z, o = a.requery, s = a.signal, c = Zr(t, r, "query", e), l = c[0], u = c[1], d = c[2], f = c[3];
								if (l && u) l.obsSet = e.obsSet;
								else {
									var p = i.query(e).then(function(e) {
										var t = e.result;
										if (l && (l.res = t), n) {
											for (var r = 0, i = t.length; r < i; ++r) Object.freeze(t[r]);
											Object.freeze(t);
										}
										return e;
									}).catch(function(e) {
										return f && l && le(f, l), Promise.reject(e);
									});
									l = {
										obsSet: e.obsSet,
										promise: p,
										subscribers: /* @__PURE__ */ new Set(),
										type: "query",
										req: e,
										dirty: !1
									}, f ? f.push(l) : (f = [l], d ||= yr[`idb://${t}/${r}`] = {
										queries: {
											query: {},
											count: {}
										},
										objs: /* @__PURE__ */ new Map(),
										optimisticOps: [],
										unsignaledParts: {}
									}, d.queries.query[e.query.index.name || ""] = f);
								}
								return Qr(l, f, o, s), l.promise.then(function(t) {
									var r = Kr(t.result, e, d?.optimisticOps, i, l, n);
									return { result: n ? r : O(r) };
								});
							}
						});
					}
				});
			}
		};
		function ti(e, t) {
			return new Proxy(e, { get: function(e, n, r) {
				return n === "db" ? t : Reflect.get(e, n, r);
			} });
		}
		var $ = function() {
			function e(t, r) {
				var i = this;
				this._middlewares = {}, this.verno = 0;
				var a = e.dependencies;
				this._options = r = n({
					addons: e.addons,
					autoOpen: !0,
					indexedDB: a.indexedDB,
					IDBKeyRange: a.IDBKeyRange,
					cache: "cloned",
					maxConnections: Ot
				}, r), this._deps = {
					indexedDB: r.indexedDB,
					IDBKeyRange: r.IDBKeyRange
				};
				var o = r.addons;
				this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
				var s = {
					dbOpenError: null,
					isBeingOpened: !1,
					onReadyBeingFired: null,
					openComplete: !1,
					dbReadyResolve: I,
					dbReadyPromise: null,
					cancelOpen: I,
					openCanceller: null,
					autoSchema: !0,
					PR1398_maxLoop: 3,
					autoOpen: r.autoOpen
				};
				s.dbReadyPromise = new B(function(e) {
					s.dbReadyResolve = e;
				}), s.openCanceller = new B(function(e, t) {
					s.cancelOpen = t;
				}), this._state = s, this.name = t, this.on = Wt(this, "populate", "blocked", "versionchange", "close", { ready: [Oe, I] }), this.once = function(e, t) {
					var n = function() {
						var r = [...arguments];
						i.on(e).unsubscribe(n), t.apply(i, r);
					};
					return i.on(e, n);
				}, this.on.ready.subscribe = y(this.on.ready.subscribe, function(t) {
					return function(n, r) {
						e.vip(function() {
							var e = i._state;
							if (e.openComplete) e.dbOpenError || B.resolve().then(n), r && t(n);
							else if (e.onReadyBeingFired) e.onReadyBeingFired.push(n), r && t(n);
							else {
								t(n);
								var a = i;
								r || t(function e() {
									a.on.ready.unsubscribe(n), a.on.ready.unsubscribe(e);
								});
							}
						});
					};
				}), this.Collection = rn(this), this.Table = Kt(this), this.Transaction = bn(this), this.Version = $n(this), this.WhereClause = hn(this), this.on("versionchange", function(e) {
					e.newVersion > 0 ? console.warn(`Another connection wants to upgrade database '${i.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${i.name}'. Closing db now to resume the delete request.`), i.close({ disableAutoOpen: !1 });
				}), this.on("blocked", function(e) {
					!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${i.name}') was blocked`) : console.warn(`Upgrade '${i.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
				}), this._maxKey = Tn(r.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
					return new i.Transaction(e, t, n, i._options.chromeTransactionDurability, r);
				}, this._fireOnBlocked = function(e) {
					i.on("blocked").fire(e), er.toArray().filter(function(e) {
						return e.name === i.name && e !== i && !e._state.vcFired;
					}).map(function(t) {
						return t.on("versionchange").fire(e);
					});
				}, this.use(Lr), this.use(ei), this.use(Br), this.use(jr), this.use(Pr);
				var c = new Proxy(this, { get: function(e, t, n) {
					if (t === "_vip") return !0;
					if (t === "table") return function(e) {
						return ti(i.table(e), c);
					};
					var r = Reflect.get(e, t, n);
					return r instanceof Ut ? ti(r, c) : t === "tables" ? r.map(function(e) {
						return ti(e, c);
					}) : t === "_createTransaction" ? function() {
						return ti(r.apply(this, arguments), c);
					} : r;
				} });
				this.vip = c, o.forEach(function(e) {
					return e(i);
				});
			}
			return e.prototype.version = function(e) {
				if (isNaN(e) || e < .1) throw new F.Type("Given version is not a positive number");
				if (e = Math.round(e * 10) / 10, this.idbdb || this._state.isBeingOpened) throw new F.Schema("Cannot add version when database is open");
				this.verno = Math.max(this.verno, e);
				var t = this._versions, n = t.filter(function(t) {
					return t._cfg.version === e;
				})[0];
				return n || (n = new this.Version(e), t.push(n), t.sort(Ln), n.stores({}), this._state.autoSchema = !1, n);
			}, e.prototype._whenReady = function(e) {
				var t = this;
				return this.idbdb && (this._state.openComplete || z.letThrough || this._vip) ? e() : new B(function(e, n) {
					if (t._state.openComplete) return n(new F.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) {
							n(new F.DatabaseClosed());
							return;
						}
						t.open().catch(I);
					}
					t._state.dbReadyPromise.then(e, n);
				}).then(e);
			}, e.prototype.use = function(e) {
				var t = e.stack, n = e.create, r = e.level, i = e.name;
				i && this.unuse({
					stack: t,
					name: i
				});
				var a = this._middlewares[t] || (this._middlewares[t] = []);
				return a.push({
					stack: t,
					create: n,
					level: r ?? 10,
					name: i
				}), a.sort(function(e, t) {
					return e.level - t.level;
				}), this;
			}, e.prototype.unuse = function(e) {
				var t = e.stack, n = e.name, r = e.create;
				return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
					return r ? e.create !== r : n ? e.name !== n : !1;
				})), this;
			}, e.prototype.open = function() {
				var e = this;
				return bt(R, function() {
					return Tr(e);
				});
			}, e.prototype._close = function() {
				this.on.close.fire(new CustomEvent("close"));
				var e = this._state;
				if (er.remove(this), this.idbdb) {
					try {
						this.idbdb.close();
					} catch {}
					this.idbdb = null;
				}
				e.isBeingOpened || (e.dbReadyPromise = new B(function(t) {
					e.dbReadyResolve = t;
				}), e.openCanceller = new B(function(t, n) {
					e.cancelOpen = n;
				}));
			}, e.prototype.close = function(e) {
				var t = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, n = this._state;
				t ? (n.isBeingOpened && n.cancelOpen(new F.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new F.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
			}, e.prototype.delete = function(e) {
				var t = this;
				e === void 0 && (e = { disableAutoOpen: !0 });
				var n = arguments.length > 0 && typeof arguments[0] != "object", r = this._state;
				return new B(function(i, a) {
					var o = function() {
						t.close(e);
						var n = t._deps.indexedDB.deleteDatabase(t.name);
						n.onsuccess = V(function() {
							or(t._deps, t.name), i();
						}), n.onerror = X(a), n.onblocked = t._fireOnBlocked;
					};
					if (n) throw new F.InvalidArgument("Invalid closeOptions argument to db.delete()");
					r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
				});
			}, e.prototype.backendDB = function() {
				return this.idbdb;
			}, e.prototype.isOpen = function() {
				return this.idbdb !== null;
			}, e.prototype.hasBeenClosed = function() {
				var e = this._state.dbOpenError;
				return e && e.name === "DatabaseClosedError";
			}, e.prototype.hasFailed = function() {
				return this._state.dbOpenError !== null;
			}, e.prototype.dynamicallyOpened = function() {
				return this._state.autoSchema;
			}, Object.defineProperty(e.prototype, "tables", {
				get: function() {
					var e = this;
					return a(this._allTables).map(function(t) {
						return e._allTables[t];
					});
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.transaction = function() {
				var e = Dr.apply(this, arguments);
				return this._transaction.apply(this, e);
			}, e.prototype._transaction = function(e, t, n) {
				var r = this, i = z.trans;
				i && i.db === this && e.indexOf("!") === -1 || (i = null);
				var a = e.indexOf("?") !== -1;
				e = e.replace("!", "").replace("?", "");
				var o, s;
				try {
					if (s = t.map(function(e) {
						var t = e instanceof r.Table ? e.name : e;
						if (typeof t != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
						return t;
					}), e == "r" || e === At) o = At;
					else if (e == "rw" || e == jt) o = jt;
					else throw new F.InvalidArgument("Invalid transaction mode: " + e);
					if (i) {
						if (i.mode === At && o === jt) {
							if (a) i = null;
							else throw new F.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						}
						i && s.forEach(function(e) {
							if (i && i.storeNames.indexOf(e) === -1) {
								if (a) i = null;
								else throw new F.SubTransaction("Table " + e + " not included in parent transaction.");
							}
						}), a && i && !i.active && (i = null);
					}
				} catch (e) {
					return i ? i._promise(null, function(t, n) {
						n(e);
					}) : K(e);
				}
				var c = Or.bind(null, this, o, s, i, n);
				return i ? i._promise(o, c, "lock") : z.trans ? bt(z.transless, function() {
					return r._whenReady(c);
				}) : this._whenReady(c);
			}, e.prototype.table = function(e) {
				if (!u(this._allTables, e)) throw new F.InvalidTable(`Table ${e} does not exist`);
				return this._allTables[e];
			}, e;
		}(), ni = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ri = function() {
			function e(e) {
				this._subscribe = e;
			}
			return e.prototype.subscribe = function(e, t, n) {
				return this._subscribe(!e || typeof e == "function" ? {
					next: e,
					error: t,
					complete: n
				} : e);
			}, e.prototype[ni] = function() {
				return this;
			}, e;
		}(), ii;
		try {
			ii = {
				indexedDB: i.indexedDB || i.mozIndexedDB || i.webkitIndexedDB || i.msIndexedDB,
				IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange
			};
		} catch {
			ii = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function ai(e) {
			var t = !1, n, r = new ri(function(r) {
				var i = de(e);
				function a(t) {
					var n = rt();
					try {
						i && ht();
						var r = U(e, t);
						return i && (r = r.finally(W)), r;
					} finally {
						n && it();
					}
				}
				var o = !1, s, c = {}, l = {}, u = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, s && s.abort(), d && Z.storagemutated.unsubscribe(m));
					}
				};
				r.start && r.start(u);
				var d = !1, f = function() {
					return St(h);
				};
				function p() {
					return vr(l, c);
				}
				var m = function(e) {
					_r(c, e), p() && f();
				}, h = function() {
					if (!o && ii.indexedDB) {
						c = {};
						var i = {};
						s && s.abort(), s = new AbortController();
						var u = {
							subscr: i,
							signal: s.signal,
							requery: f,
							querier: e,
							trans: null
						}, h = a(u);
						d ||= (Z.storagemutated.subscribe(m), !0), Promise.resolve(h).then(function(e) {
							t = !0, n = e, o || u.signal.aborted || (p() ? f() : (l = i, p() ? f() : (c = {}, St(function() {
								return !o && r.next && r.next(e);
							}))));
						}, function(e) {
							o || u.signal.aborted || (t = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || St(function() {
								o || r.error && r.error(e);
							}));
						});
					}
				};
				return setTimeout(f, 0), u;
			});
			return r.hasValue = function() {
				return t;
			}, r.getValue = function() {
				return n;
			}, r;
		}
		var oi = $;
		d(oi, n(n({}, be), {
			delete: function(e) {
				return new oi(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new oi(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return ir(oi.dependencies).then(e);
				} catch {
					return K(new F.MissingAPI());
				}
			},
			defineClass: function() {
				function e(e) {
					s(this, e);
				}
				return e;
			},
			ignoreTransaction: function(e) {
				return z.trans ? bt(z.transless || R, e) : e();
			},
			vip: sr,
			async: function(e) {
				return function() {
					try {
						var t = Er(e.apply(this, arguments));
						return !t || typeof t.then != "function" ? B.resolve(t) : t;
					} catch (e) {
						return K(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = Er(e.apply(n, t || []));
					return !r || typeof r.then != "function" ? B.resolve(r) : r;
				} catch (e) {
					return K(e);
				}
			},
			currentTransaction: { get: function() {
				return z.trans || null;
			} },
			waitFor: function(e, t) {
				var n = B.resolve(typeof e == "function" ? oi.ignoreTransaction(e) : e).timeout(t || 6e4);
				return z.trans ? z.trans.waitFor(n) : n;
			},
			Promise: B,
			debug: {
				get: function() {
					return L;
				},
				set: function(e) {
					ke(e);
				}
			},
			derive: m,
			extend: s,
			props: d,
			override: y,
			Events: Wt,
			on: Z,
			liveQuery: ai,
			extendObservabilitySet: _r,
			getByKeyPath: C,
			setByKeyPath: w,
			delByKeyPath: T,
			shallowClone: E,
			deepClone: O,
			getObjectDiff: Mr,
			cmp: J,
			asap: x,
			minKey: Et,
			addons: [],
			connections: { get: er.toArray },
			errnames: N,
			dependencies: ii,
			cache: yr,
			semVer: wt,
			version: wt.split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (n * 2);
			})
		})), oi.maxKey = Tn(oi.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Z(_n, function(e) {
			if (!ci) {
				var t = new CustomEvent(vn, { detail: e });
				ci = !0, dispatchEvent(t), ci = !1;
			}
		}), addEventListener(vn, function(e) {
			var t = e.detail;
			ci || si(t);
		}));
		function si(e) {
			var t = ci;
			try {
				ci = !0, Z.storagemutated.fire(e), Cr(e, !0);
			} finally {
				ci = t;
			}
		}
		var ci = !1, li, ui = function() {};
		typeof BroadcastChannel < "u" && (ui = function() {
			li = new BroadcastChannel(vn), li.onmessage = function(e) {
				return e.data && si(e.data);
			};
		}, ui(), typeof li.unref == "function" && li.unref(), Z(_n, function(e) {
			ci || li.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!$.disableBfCache && e.persisted) {
				L && console.debug("Dexie: handling persisted pagehide"), li?.close();
				for (var t = 0, n = er.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!$.disableBfCache && e.persisted && (L && console.debug("Dexie: handling persisted pageshow"), ui(), si({ all: new Q(-Infinity, [[]]) }));
		}));
		function di(e) {
			return new Vt({ add: e });
		}
		function fi(e) {
			return new Vt({ remove: e });
		}
		function pi(e, t) {
			return new Vt({ replacePrefix: [e, t] });
		}
		return B.rejectionMapper = ye, ke(L), n($, /* @__PURE__ */ Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: Ot,
			Dexie: $,
			Entity: Ft,
			PropModification: Vt,
			RangeSet: Q,
			add: di,
			cmp: J,
			default: $,
			liveQuery: ai,
			mergeRanges: fr,
			rangesOverlap: pr,
			remove: fi,
			replacePrefix: pi
		}), { default: $ }), $;
	}));
})))(), 1), O = Symbol.for("Dexie"), k = globalThis[O] || (globalThis[O] = D.default);
if (D.default.semVer !== k.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${D.default.semVer} and ${k.semVer}`);
var { liveQuery: ae, mergeRanges: oe, rangesOverlap: se, RangeSet: ce, cmp: le, Entity: ue, PropModification: A, replacePrefix: de, add: fe, remove: pe, DexieYProvider: me } = k, he = class {
	db;
	subscribers = [];
	options;
	constructor(e) {
		this.options = e, this.db = new k(e.app), this.db.version(19).stores({
			channel: "id,slide_index",
			cloud: "id,dashboard_id",
			dashboard: "id,name,update",
			display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
			hashtable: "id, hash",
			images: "id,basename,extension,size,type,url",
			messages: "id,utc,expires",
			monitor: "id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor",
			player: "id,title,name,location",
			preference: "id,value,update",
			presentation: "id,name,update",
			series: "id,dashboard_id",
			slide: "id,name,presentation_id,order_index,json,html,update",
			template: "id,name,json,update",
			topics: "[widget_id+message_id],message_id,widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,approved,utc,expires",
			widget: "id,name,dashboard_id,type,update"
		}), this.db.open();
	}
	getHash = async (e) => {
		let t = await this.db.table("hashtable").where({ id: e.widget }).last().catch(() => {
			w(2, [
				"%chash%c %capi%C %chash",
				u.API,
				u.NONE,
				u.APP
			]);
		});
		return w(3, [
			"%cget%c %chash%c %chash",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.APP,
			e
		]), t?.hash ?? "none";
	};
	setHash = async (e) => await this.db.table("hashtable").where({ id: e.widget }).modify({ hash: e.hash }).then(() => (w(3, [
		"%cset%c %chash%c %chash}",
		u.OK,
		u.NONE,
		u.API,
		u.NONE,
		u.WIDGET,
		e
	]), 201)).catch((t) => (w(2, [
		"%cget%c %chash%c %chash",
		u.OK,
		u.NONE,
		u.API,
		u.NONE,
		u.WIDGET,
		e,
		t.message
	]), 400));
	clearHash = async () => await this.db.table("hashtable").clear().then(() => 201).catch(() => (w(2, [
		"%cclear%c %cstorage%c %chash",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		"clear hashes"
	]), 400));
	deleteHash = async (e) => await this.db.table("hashtable").where({ id: e.widget }).delete().then(() => 201).catch(() => (w(2, [
		"%cdelete%c %cstorage%c %chash",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		"clear dashboard hashes",
		e.dashboard
	]), 400));
	createHash = async (e) => await this.db.table("hashtable").put({
		id: e.widget,
		hash: e.hash
	}).then(() => 201).catch((t) => (w(2, [
		"%cset%c %cstorage%c %chash",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		e,
		t.message
	]), 400));
	getCloud = async (e) => {
		if (e.widget === "") return w(3, [
			"%cget%c %cstorage%c %ccloud",
			u.NO_UPDATES,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.CLOUD,
			e
		]), {
			data: null,
			message: "Series Data error",
			success: !1,
			query: e
		};
		let t = await this.db.table(l.CLOUD).where({ id: e.widget }).last().catch(() => {
			w(2, [
				"%capi%C %ccloud",
				u.API,
				u.NONE,
				u.CLOUD,
				e.widget
			]);
		});
		if (t === void 0) return {
			data: null,
			message: "Cloud Data error",
			success: !1,
			query: e
		};
		let n = {
			data: t?.data ?? null,
			message: t === void 0 ? "Cloud Data error" : "Cloud retrieved successfully",
			success: t !== void 0,
			query: e
		};
		return w(3, [
			"%cget%c %cstorage%c %ccloud",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.CLOUD,
			n
		]), n;
	};
	setCloud = async (e, t) => e.type === l.CLOUD && t !== "" ? (w(3, [
		"%cset%c %cstorage%c %ccloud",
		u.OK,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.CLOUD,
		t?.title ?? e.widget
	]), await this.db.table(l.CLOUD).put({
		id: e.widget,
		dashboard_id: e.dashboard,
		hash: e.hash,
		data: t
	}).then(() => 201).catch((t) => (w(2, [
		"%cset%c %cstorage%c %ccloud",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.CLOUD,
		e,
		t.message
	]), 400))) : 400;
	bulk = async (e, t) => await this.db.table(e).bulkPut(t).then(() => ({
		data: null,
		message: `Bulk add ${t.length} items to ${e}`,
		success: !0
	})).catch((n) => (w(4, [
		"%cstorage",
		u.STORAGE,
		e,
		t.length,
		n.message
	]), {
		data: null,
		message: `Bulk add to ${e}:  ${n.message}`,
		success: !1
	}));
	get = async (e, t) => {
		let n = await this.db.table(e).where({ id: t.id }).last().catch(() => {
			w(2, [
				"%cstorage",
				u.STORAGE,
				`loading ${e}`,
				t.id
			]);
		});
		return n === void 0 ? {
			data: null,
			message: `${e} ${t.id} Load error`,
			success: !1
		} : (n.message = `${e} ${t.id} retrieved from storage`, n.success = !0, n);
	};
	set = async (e, t) => await this.db.table(e).put(t).then(() => ({
		data: null,
		message: `${e} ${t.id} saved to storage`,
		success: !0
	})).catch((n) => (w(4, [
		"%cstorage",
		u.STORAGE,
		e,
		t,
		n.message
	]), {
		data: null,
		message: `${e} ${t.id} save error: ${n.message}`,
		success: !1
	}));
	getDashboard = async (e) => {
		let t = await this.db.table(l.DASHBOARD).where({ id: e.id }).last().catch(() => {
			w(2, [
				"%cstorage",
				u.STORAGE,
				d.DASHBOARD_LOAD,
				e.id
			]);
		});
		return t === void 0 ? {
			data: null,
			message: `Dashboard ${e.id} Load error`,
			success: !1
		} : (t.message = `Dashboard ${e.id} retrieved from storage`, t.success = !0, t);
	};
	getDashboards = async (e) => {
		let t = (t) => e?.id === t.id, n = (t) => e?.name ? t.name.includes(e?.name) : !1, r = await this.db.table(l.DASHBOARD).toArray().then((n) => e?.id ? n.filter(t) : n).then((t) => e?.name ? t.filter(n) : t).catch(() => {
			w(2, [
				"%cstorage",
				u.STORAGE,
				d.DASHBOARD_LOAD,
				e
			]);
		});
		return r !== void 0 && w(3, [
			"%cstorage%c %cdashboards",
			u.STORAGE,
			u.NONE,
			u.WIDGET,
			e
		]), {
			data: r === void 0 ? null : {
				dashboards: r,
				query: e
			},
			message: r === void 0 ? "Dashboards load error" : "Dashboards loaded from storage",
			success: r !== void 0
		};
	};
	setDashboard = async (e) => {
		let t = structuredClone(e);
		return delete t.data.widgets, await this.db.table(l.DASHBOARD).put({
			id: t.id,
			name: t.name,
			data: t.data,
			update: t.update
		}).then(() => ({
			data: null,
			message: `Dashboard ${t.data.id} saved to storage`,
			success: !0
		})).catch((n) => (w(4, [
			"%cstorage",
			u.STORAGE,
			l.WIDGET,
			e,
			n.message
		]), {
			data: null,
			message: `Dashboard ${t.data.id} save error: ${n.message}`,
			success: !1
		}));
	};
	deleteDashboard = async (e) => await this.db.table(l.DASHBOARD).where({ id: e.id }).delete().then(() => ({
		data: null,
		message: `Dashboard ${e.id} deleted`,
		success: !0
	})).catch((t) => (w(4, [
		"%cstorage",
		u.STORAGE,
		l.DASHBOARD,
		e,
		t.message
	]), {
		data: null,
		message: `Dashboard ${e.id} delete error: ${t.message}`,
		success: !1
	}));
	deleteDashboards = async () => await this.db.table(l.DASHBOARD).clear().then(() => ({
		data: null,
		message: "Dashboard table deleted from storage",
		success: !0
	})).catch((e) => (console.error("%cstorage", u.STORAGE, l.DASHBOARD, "deleted", e.message), {
		data: null,
		message: `Dashboard table deleted error: ${e.message}`,
		success: !1
	}));
	cleanMessages = async () => {
		let e = Date.now() / 1e3;
		return await this.db.table(l.TOPICS).orderBy("expires").filter((t) => t.expires < e).delete().catch((e) => (console.error("%cstorage%c %cclean", u.STORAGE, u.NONE, u.MESSAGES, e.message), 0)), await this.db.table(l.MESSAGES).orderBy("expires").filter((t) => t.expires < e).delete().catch((e) => (console.error("%clean%c %cstorage%c %cmessages", u.OK, u.NONE, u.STORAGE, u.NONE, u.MESSAGES, e.message), 0));
	};
	getMessages = async (e) => {
		if (e.widget === "") return w(3, [
			"%cget%c %cstorage%c %cmessages",
			u.NO_UPDATES,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.MESSAGES,
			e
		]), {
			data: null,
			message: "Messages Data error",
			success: !1,
			query: e
		};
		let t = e?.order ?? "utc", n = Math.floor(Date.now() / 1e3), r = e?.period ?? 0;
		e.since = r === 0 ? n - 2592e3 : n - r, e.before = this.options.moderation === f.DELAYED && this.options.delay ? n - this.options.delay : n;
		let i = (t) => t.utc > (e?.since || 0), a = (t) => t.utc < (e?.before || n);
		try {
			let n = this.db.table(l.TOPICS).where("widget_id").equals(e.widget).filter(i).filter(a);
			this.options.moderation === f.APPROVED ? n.and((e) => e.approved === 1) : n.and((e) => e.visible === 1), n.reverse();
			let r = await n.limit(e?.limit ?? 25).sortBy(t);
			if (r.length === 0) return {
				data: null,
				message: "No Messages error",
				success: !1,
				query: e
			};
			let o = r.map((e) => this.db.table(l.MESSAGES).get({ id: e.message_id }));
			return k.Promise.all(o).then(async (t) => {
				let n = {
					data: { messages: t.map((e) => e?.data) },
					query: e,
					message: "Messages retrieved successfully",
					success: !0
				};
				return w(3, [
					"%cget%c %cstorage%c %cmessages",
					u.OK,
					u.NONE,
					u.STORAGE,
					u.NONE,
					u.MESSAGES,
					n
				]), n;
			});
		} catch (t) {
			return w(2, [
				"%cget%c %cstorage%c %cmessages",
				u.OK,
				u.NONE,
				u.STORAGE,
				u.NONE,
				u.NO_UPDATES,
				e,
				t.message
			]), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	hideMessage = async (e, t) => {
		await this.db.table(l.TOPICS).where("message_id").equals(e).modify({ visible: +!!t }).catch((e) => (console.error("%chide%c %cstorage%c %cmessage", u.KO, u.NONE, u.STORAGE, u.NONE, u.HIDE, e.message), 0));
	};
	approveMessage = async (e, t) => {
		await this.db.table(l.TOPICS).where("message_id").equals(e).modify({ approved: +!!t }).catch((e) => (console.error("%capprove%c %cstorage%c %cmessage", u.KO, u.NONE, u.STORAGE, u.NONE, u.OK, e.message), 0));
	};
	setMessages = async (e, t) => {
		if (e.type !== l.MESSAGES) return 400;
		let n = t.data.title, r = 0;
		return w(3, [
			"%cset%c %cstorage%c %cmessages",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.MESSAGES,
			t?.title ?? e.widget
		]), await Promise.all(t.data.messages.map(async (i) => {
			if (i.id !== null) {
				i.topics[0] = {
					message_id: i.id,
					engagement: i.topics[0]?.engagement || i.dynamics?.engagement || 0,
					impressions: i.topics[0]?.impressions || i.dynamics?.semrush_visits || 0,
					reach: i.topics[0]?.reach || i.dynamics?.potential_reach || 0,
					sentiment: i.topics[0]?.sentiment || 0,
					approved: +!!i.topics[0]?.approved
				}, await this.db.table(l.MESSAGES).put({
					id: i.id,
					utc: i.utc,
					data: i,
					expires: i.expires
				}).catch((e) => {
					r++, w(4, [
						"%cset%c %cstorage",
						u.KO,
						u.NONE,
						u.STORAGE,
						"set message",
						`title: ${n}`,
						i,
						e.message
					]);
				});
				let a = {
					title: n,
					widget_id: e.widget,
					visible: i.topics[0]?.visible || 1,
					approved: i.topics[0]?.approved || 0,
					message_id: i.id,
					dashboard_id: e.dashboard,
					engagement: i.topics[0]?.engagement || i.dynamics?.engagement || 0,
					impressions: i.topics[0]?.impressions || i.dynamics?.semrush_visits || 0,
					reach: i.topics[0]?.reach || i.dynamics?.potential_reach || 0,
					sentiment: i.topics[0]?.sentiment || 0,
					utc: i.utc,
					expires: i.expires
				};
				await this.db.table(l.TOPICS).put(a).catch((e) => {
					r++, w(4, [
						"%cset%c %cstorage",
						u.KO,
						u.NONE,
						u.STORAGE,
						"set topic",
						`title: ${n}`,
						i,
						e.message
					]);
				}), await Promise.all(t.data.topics.map(async (e) => {
					let t = e.message_id, n = +!!e.visible, i = +!!e.approve, a = e.title;
					await this.db.table(l.TOPICS).where("message_id").equals(t).modify({
						visible: n,
						approve: i
					}).catch((t) => {
						r++, w(4, [
							"%cset%c %cstorage",
							u.KO,
							u.NONE,
							u.STORAGE,
							"update message visibility",
							`title: ${a}`,
							`widget: ${e.widget_id}`,
							t.message
						]);
					});
				}));
			}
		})), r === 0 ? 201 : 400;
	};
	getSeries = async (e) => {
		if (e.widget === "") return w(3, [
			"%cget%c %cstorage%c %cseries",
			u.NO_UPDATES,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.CLOUD,
			e
		]), {
			data: null,
			message: "Series Data error",
			success: !1,
			query: e
		};
		let t = await this.db.table(l.SERIES).where({ id: e.widget }).last().catch(() => {
			w(2, [
				"%cget%c %cstorage%c %cseries",
				u.KO,
				u.NONE,
				u.STORAGE,
				u.NONE,
				u.SERIES,
				e.widget
			]);
		}), n = {
			data: t?.data ?? null,
			message: t === void 0 ? "Get Series error" : "Get Series success",
			success: t !== void 0,
			query: e
		};
		return w(3, [
			"%cget%c %cstorage%c %cseries",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.SERIES,
			n
		]), n;
	};
	setSeries = async (e, t) => (delete t?.query, e.type === l.SERIES && t !== "" ? (w(3, [
		"%cset%c %cstorage%c %cseries",
		u.OK,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.SERIES,
		t?.title ?? e.widget
	]), await this.db.table(l.SERIES).put({
		id: e.widget,
		dashboard_id: e.dashboard,
		hash: e.hash,
		data: t
	}).then(() => 201).catch((t) => (w(2, [
		"%cset%c %cstorage%c %cseries",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.SERIES,
		e,
		t.message
	]), 400))) : 400);
	getWidget = async (e) => {
		if (e.id === "") return w(3, [
			"%cget%c %cstorage%c %cwidget",
			u.KO,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.WIDGET,
			e
		]), {
			data: null,
			message: "Widget Data error",
			success: !1,
			query: e
		};
		let t = await this.db.table(l.WIDGET).where({ id: e.id }).last().catch(() => {
			console.warn("%cstorage", u.STORAGE, d.WIDGET_LOAD, e.id);
		});
		return t === void 0 ? {
			data: null,
			message: `Widget ${e.id} Load error`,
			success: !1
		} : (t.message = `Widget ${e.id} retrieved from storage`, t.success = !0, t);
	};
	getWidgets = async (e) => {
		let t = (t) => e?.dashboard === t.dashboard_id, n = (t) => e?.type === t.type, r = (t) => e?.name ? t.name.includes(e?.name) : !1, i = await this.db.table(l.WIDGET).toArray().then((n) => e?.dashboard ? n.filter(t) : n).then((t) => e?.type ? t.filter(n) : t).then((t) => e?.name ? t.filter(r) : t).catch(() => {
			w(2, [
				"%cstorage",
				u.STORAGE,
				d.WIDGET_LOAD,
				e
			]);
		});
		return i !== void 0 && w(3, [
			"%cstorage%c %cwidgets",
			u.STORAGE,
			u.NONE,
			u.MESSAGES,
			e
		]), {
			data: i === void 0 ? null : {
				data: i,
				query: e
			},
			message: i === void 0 ? "Widgets load error" : "Widgets loaded from storage",
			success: i !== void 0
		};
	};
	setWidget = async (e) => await this.db.table(l.WIDGET).put({
		id: e.id,
		name: e.title,
		dashboard_id: e.dashboard_id,
		type: e.type,
		update: e.update
	}).then(() => ({
		data: null,
		message: `Widget ${e.id} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.WIDGET, e, t.message), {
		data: null,
		message: `Widget ${e.id} save error: ${t.message}`,
		success: !1
	}));
	deleteWidget = async (e) => await this.db.table(l.WIDGET).where({ id: e.id }).delete().then(() => ({
		data: null,
		message: `Widget ${e.id} deleted from storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.WIDGET, e, t.message), {
		data: null,
		message: `Widget ${e.id} save error: ${t.message}`,
		success: !1
	}));
	deleteWidgets = async () => await this.db.table(l.WIDGET).clear().then(() => ({
		data: null,
		message: "Widgets table deleted from storage",
		success: !0
	})).catch((e) => (console.error("%cstorage", u.STORAGE, l.WIDGETS, "deleted", e.message), {
		data: null,
		message: `Widgets table deleted error: ${e.message}`,
		success: !1
	}));
	subscribe = (e) => (e = ee(e), this.subscribers.filter((t) => t.widget === e.widget).length > 0 || (e.type === l.MESSAGES && (e = te(this.options, e)), console.info("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e), this.subscribers.push(e)), null);
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (e) => {
		let t = await this.db.table(l.SLIDE).where({ id: e.id }).last().catch(() => {
			w(2, [
				"%cstorage",
				u.STORAGE,
				d.SLIDE_LOAD,
				e.id
			]);
		});
		return {
			data: t,
			query: e,
			message: t === void 0 ? "Slide load error" : "Slide loaded from storage",
			success: t !== void 0
		};
	};
	getSlides = async (e) => {
		let t = (t) => e?.id ? t.id === e.id : !1, n = (t) => e?.name ? t.name.includes(e?.name) : !1, r = (t) => e?.presentation_id ? t.presentation_id === e.presentation_id : !1, i = await this.db.table(l.SLIDE).toArray().then((t) => e?.presentation_id ? t.filter(r) : t).then((n) => e?.id ? n.filter(t) : n).then((t) => e?.name ? t.filter(n) : t);
		return i && i.sort((e, t) => e.order_index - t.order_index), i !== void 0 && w(3, [
			"%cstorage%c %cslides",
			u.STORAGE,
			u.NONE,
			u.SLIDE,
			e
		]), {
			data: i,
			query: e,
			message: i === void 0 ? "Slides load error" : "Slides loaded from storage",
			success: i !== void 0
		};
	};
	setSlide = async (e) => await this.db.table(l.SLIDE).put({
		id: e.data.id,
		presentation_id: e.data.presentation_id,
		order_index: e.data.order_index,
		name: e.data.name.replace("-copy", "") || "Not set",
		json: e.data.json || {},
		html: e.data.html || "",
		update: e.data.update
	}).then(() => ({
		data: null,
		message: `Slide ${e.data.id} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, d.SLIDE_STORE, e, t.message), {
		data: null,
		message: `Slide ${e.data.id} save error: ${t.message}`,
		success: !1
	}));
	deleteSlide = async (e) => await this.db.table(l.SLIDE).where({ id: e.id }).delete().then(() => ({
		data: null,
		message: `Slide ${e.id} deleted from storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.WIDGET, e, t.message), {
		data: null,
		message: `Widget ${e.id} save error: ${t.message}`,
		success: !1
	}));
	deleteSlides = async () => await this.db.table(l.SLIDE).clear().then(() => ({
		data: null,
		message: "Slide table deleted from storage",
		success: !0
	})).catch((e) => (console.error("%cstorage", u.STORAGE, l.SLIDE, "deleted", e.message), {
		data: null,
		message: `Slide table deleted error: ${e.message}`,
		success: !1
	}));
	getPresentation = async (e) => {
		let t = await this.db.table(l.PRESENTATION).where({ id: e.id }).last().catch(() => {
			console.warn("%cstorage ", u.STORAGE, d.PRESENTATION_LOAD, e.id);
		});
		return t === void 0 ? {
			data: null,
			message: `Presentation ${e.id} Load error`,
			success: !1
		} : (t.query = e, t.message = `Presentation ${e.id} retrieved from storage`, t.success = !0, t);
	};
	getPresentations = async (e) => {
		let t = (t) => e?.name ? t.name.includes(e?.name) : !1, n = await this.db.table(l.PRESENTATION).toArray().then((n) => e?.name ? n.filter(t) : n);
		return n !== void 0 && w(3, [
			"%cstorage%c %cpresentations",
			u.STORAGE,
			u.NONE,
			u.PRESENTATION,
			e
		]), {
			data: n,
			query: e,
			message: n === void 0 ? "Presentations load error" : "Presentations loaded from storage",
			success: n !== void 0
		};
	};
	setPresentation = async (e) => await this.db.table(l.PRESENTATION).put({
		id: e.data.id,
		name: e.data.name || "Not set",
		data: e.data,
		update: e.update
	}).then(() => ({
		data: null,
		query: e,
		message: `Presentation ${e.data.id} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, d.PRESENTATION_STORE, e, t.message), {
		data: null,
		query: e,
		message: `Presentation ${e.data.id} save error: ${t.message}`,
		success: !1
	}));
	deletePresentation = async (e) => await this.db.table(l.PRESENTATION).where({ id: e.id }).delete().then(() => ({
		data: null,
		message: `Presentation ${e.id} deleted from storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.PRESENTATION, e, t.message), {
		data: null,
		message: `Presentation ${e.id} save error: ${t.message}`,
		success: !1
	}));
	deletePresentations = async () => await this.db.table(l.PRESENTATION).clear().then(() => ({
		data: null,
		message: "Presentation table deleted from storage",
		success: !0
	})).catch((e) => (console.error("%cstorage", u.STORAGE, l.PRESENTATION, "deleted", e.message), {
		data: null,
		message: `Presentation table deleted error: ${e.message}`,
		success: !1
	}));
	getPreference = async (e) => {
		let t = await this.db.table(l.PREFERENCE).where({ id: e.id }).last().catch(() => {
			w(2, [
				"%cstorage",
				u.STORAGE,
				d.PREFERENCE_LOAD,
				e.id
			]);
		});
		return {
			data: t === void 0 ? null : { preferences: t },
			message: t === void 0 ? "Preference load error" : "Preference loaded from storage",
			success: t !== void 0,
			query: {
				preference: e,
				widget: ""
			}
		};
	};
	getPreferences = async (e) => {
		let t = (t) => e?.id ? e.id = t.id : !1, n = await this.db.table(l.PREFERENCE).toArray().then((n) => e?.id ? n.filter(t) : n);
		return n !== void 0 && w(3, [
			"%cstorage%c %cpreferences",
			u.STORAGE,
			u.NONE,
			u.PRESENTATION,
			e
		]), {
			data: n === void 0 ? null : {
				preferences: n,
				query: e
			},
			message: n === void 0 ? "Preferences load error" : "Preferences loaded from storage",
			success: n !== void 0
		};
	};
	setPreference = async (e) => await this.db.table(l.PREFERENCE).put({
		id: e.id,
		value: e.value,
		update: e.update
	}).then(() => ({
		data: null,
		message: `Preference ${e.id} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, d.PREFERENCE_STORE, e, t.message), {
		data: null,
		message: `Preference ${e.id} save error: ${t.message}`,
		success: !1
	}));
	deletePreference = async (e) => await this.db.table(l.PREFERENCE).where({ id: e.id }).delete().then(() => ({
		data: null,
		message: `Preference ${e.id} deleted from storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.PREFERENCE, e, t.message), {
		data: null,
		message: `Preference ${e.id} save error: ${t.message}`,
		success: !1
	}));
	getImages = async (e) => {
		let t = (t) => e?.id ? t.includes(e.id) : !1, n = await this.db.table(l.IMAGES).toArray().then((n) => e?.id ? n.filter(t) : n);
		return n !== void 0 && w(3, [
			"%cstorage%c %cimages",
			u.STORAGE,
			u.NONE,
			u.PRESENTATION,
			e
		]), {
			data: n === void 0 ? null : {
				images: n,
				query: e
			},
			message: n === void 0 ? "Images load error" : "Images loaded from storage",
			success: n !== void 0
		};
	};
	setImage = async (e) => await this.db.table(l.IMAGES).put({
		id: e.data.name,
		basename: e.data.basename,
		extension: e.data.extension,
		size: e.data.size,
		type: e.data.type,
		url: e.data.url
	}).then(() => ({
		data: null,
		message: `Image ${e.data.name} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, d.IMAGE_SET, e, t.message), {
		data: null,
		message: `Image ${e.data.id} save error: ${t.message}`,
		success: !1
	}));
};
// node_modules/.pnpm/idb-keyval@6.3.0/node_modules/idb-keyval/dist/index.js
function j(e) {
	return new Promise((t, n) => {
		e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error);
	});
}
function ge(e, t) {
	let n, r = () => {
		if (n) return n;
		let r = indexedDB.open(e);
		return r.onupgradeneeded = () => r.result.createObjectStore(t), n = j(r), n.then((e) => {
			e.onclose = () => n = void 0;
		}, () => {
			n = void 0;
		}), n;
	};
	return (e, n) => r().then((r) => n(r.transaction(t, e).objectStore(t)));
}
var _e;
function M() {
	return _e ||= ge("keyval-store", "keyval"), _e;
}
function N(e, t = M()) {
	return t("readonly", (t) => j(t.get(e)));
}
function P(e, t, n = M()) {
	return n("readwrite", (n) => (n.put(t, e), j(n.transaction)));
}
// src/storage/keyval.ts
var F = class {
	subscribers = [];
	options;
	constructor(e) {
		this.options = e;
	}
	getHash = async (e) => "none";
	setHash = async (e) => 404;
	createHash = async (e) => 404;
	clearHash = async () => 404;
	deleteHash = async (e) => 404;
	getCloud = async (e) => await N(E(e)).then((e) => e).catch(() => (console.warn("%capi", u.API, l.CLOUD, e.slide, e.widget), {
		data: null,
		message: "Cloud Data error",
		success: !1
	}));
	getSeries = async (e) => await N(E(e)).then((e) => e).catch(() => (console.warn("%capi", u.API, l.SERIES, e.slide, e.widget), {
		data: null,
		message: "Series Data error",
		success: !1
	}));
	getMessages = async (e) => await N(E(e)).then((e) => e).catch(() => (console.warn("%capi", u.API, l.MESSAGES, e.slide, e.widget), {
		data: null,
		message: "Messages Data error",
		success: !1
	}));
	setCloud = async (e, t) => {
		if (!t.success) return 400;
		let n = E(e);
		return delete t.success, delete t.message, await P(n, t).then(() => 201).catch((t) => (console.error("%cstorage", u.STORAGE, l.CLOUD, e, t.message), 400));
	};
	setSeries = async (e, t) => {
		if (!t.success) return 400;
		let n = E(e);
		return delete t.success, delete t.message, await P(n, t).then(() => 201).catch((t) => (console.error("%cstorage", u.STORAGE, l.SERIES, e, t.message), 400));
	};
	setMessages = async (e, t) => {
		if (!t.success) return 400;
		let n = E(e);
		return delete t.success, delete t.message, await P(n, t).then(() => 201).catch((t) => (console.error("%cstorage", u.STORAGE, l.MESSAGES, e, t.message), 400));
	};
	cleanMessages = async (e) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((e) => e(0)));
	hideMessage = async (e, t) => {
		console.debug(`hideMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	approveMessage = async (e, t) => {
		console.debug(`approveMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	getDashboard = async (e) => await N(E(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.SLIDE, e.id), {
		data: null,
		message: `Widget ${e.data.id} load error: ${t.message}`,
		success: !1
	}));
	getDashboards = async () => ({
		data: null,
		message: "Dashboards get error: ",
		success: !1
	});
	setDashboard = async (e) => await P(E(e), {
		id: e.dashboard,
		name: e.name
	}).then(() => ({
		data: null,
		message: `Dashboard ${e.data.id} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.WIDGET, e, t.message), {
		data: null,
		message: `Slide ${e.data.id} save error: ${t.message}`,
		success: !1
	}));
	getWidget = async (e) => await N(E(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.SLIDE, e.id), {
		data: null,
		message: `Widget ${e.data.id} load error: ${t.message}`,
		success: !1
	}));
	getWidgets = async (e) => (console.warn("%capi", u.API, l.SLIDE, e?.presentation), {
		data: null,
		message: "Widgets load error: ",
		success: !1
	});
	setWidget = async (e) => await P(E(e), {
		id: e.widget,
		name: e.name,
		dashboard_id: e.dashboard,
		type: e.type
	}).then(() => ({
		data: null,
		message: `Widget ${e.data.id} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.WIDGET, e, t.message), {
		data: null,
		message: `Slide ${e.data.id} save error: ${t.message}`,
		success: !1
	}));
	deleteDashboard = async (e) => ({
		data: null,
		message: "Dashboards delete error: ",
		success: !1
	});
	deleteDashboards = async () => ({
		data: null,
		message: "Dashboards delete error: ",
		success: !1
	});
	bulk = async (e, t) => 404;
	get = async (e, t) => 404;
	set = async (e, t) => 404;
	deleteWidget = async (e) => 404;
	deleteWidgets = async () => 404;
	deleteSlide = async (e) => 404;
	deleteSlides = async () => 404;
	deletePresentation = async (e) => 404;
	deletePresentations = async () => 404;
	subscribe = (e) => (e.type === l.MESSAGES && (e = te(this.options, e)), this.subscribers.filter((t) => t.widget === e.widget).length > 0 || (console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), this.subscribers.push(e)), null);
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (e) => await N(E(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.SLIDE, e.id), {
		data: null,
		message: `Slide ${e.data.id} load error: ${t.message}`,
		success: !1
	}));
	getSlides = async (e) => (console.warn("%capi", u.API, l.SLIDE, e.presentation), {
		data: null,
		message: `Slided ${e.presentation} load error: `,
		success: !1
	});
	setSlide = async (e) => await P(E(e), {
		id: e.data.id,
		title: e.data.title || "Not set",
		json: e.data.json || {},
		html: e.data.html || ""
	}).then(() => ({
		data: null,
		message: `Slide ${e.data.id} saved to storage`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.SLIDE, e, t.message), {
		data: null,
		message: `Slide ${e.data.id} save error: ${t.message}`,
		success: !1
	}));
	getPresentation = async (e) => await N(E(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.PRESENTATION, e.id), {
		data: null,
		message: `Slide ${e.data.id} load error: ${t.message}`,
		success: !1
	}));
	getPresentations = async () => ({
		data: null,
		message: "Presentations get error: ",
		success: !1
	});
	setPresentation = async (e) => {
		let t = E(e), n = e.data;
		return await P(t, n).then(() => ({
			data: null,
			message: `Presentation ${e.data.id} saved to storage`,
			success: !0
		})).catch((t) => (console.error("%cstorage", u.STORAGE, l.PRESENTATION, e, t.message), {
			data: null,
			message: `Presentation ${e.data.id} save error: ${t.message}`,
			success: !1
		}));
	};
	getPreference = async (e) => await N(`${l.PREFERENCE}.${e.id}`).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.PREFERENCE, e.id), {
		data: null,
		message: `Preference ${e.id} get error: ${t.message}`,
		success: !1
	}));
	getPreferences = async () => await N(`${l.PREFERENCE}`).then((e) => e).catch((e) => (console.warn("%capi", u.API, l.PREFERENCE), {
		data: null,
		message: `Preferences get error: ${e.message}`,
		success: !1
	}));
	setPreference = async (e) => await P(`${l.PREFERENCE}.${e.id}`, e.value).then(() => ({
		data: null,
		message: `Preference ${e.id} save error`,
		success: !0
	})).catch((t) => (console.error("%cstorage", u.STORAGE, l.PREFERENCE, e, t.message), {
		data: null,
		message: `Preference ${e.id} save error: ${t.message}`,
		success: !1
	}));
	getImages = async (e) => ({
		data: null,
		message: `Images ${e.id} `,
		success: !1
	});
	setImage = async (e) => ({
		data: null,
		message: `Image ${e.id} saved`,
		success: !1
	});
}, ve = class {
	subscribers = [];
	options;
	constructor(e) {
		this.options = e, window.__bc.WidgetData = /* @__PURE__ */ new Set();
	}
	getHash = async (e) => "none";
	setHash = async (e) => 404;
	createHash = async (e) => 404;
	clearHash = async () => 404;
	deleteHash = async (e) => 404;
	getCloud = async (e) => {
		let t = E(e);
		try {
			return window.__bc.WidgetData[t];
		} catch (t) {
			return console.warn("%capi", u.API, l.CLOUD, e.slide, e.widget, t), {
				data: null,
				message: "Cloud Data error",
				success: !1
			};
		}
	};
	getSeries = async (e) => {
		let t = E(e);
		try {
			return window.__bc.WidgetData[t];
		} catch (t) {
			return console.warn("%capi", u.API, l.SERIES, e.slide, e.widget, t), {
				data: null,
				message: "Series Data error",
				success: !1
			};
		}
	};
	getMessages = async (e) => {
		let t = E(e);
		try {
			return window.__bc.WidgetData[t];
		} catch (t) {
			return console.warn("%capi", u.API, l.MESSAGES, e.slide, e.widget, t), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	setCloud = async (e, t) => {
		let n = E(e);
		try {
			return window.__bc.WidgetData[n] = t, 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, "set", e, t), 400;
		}
	};
	setSeries = async (e, t) => {
		let n = E(e);
		try {
			return window.__bc.WidgetData[n] = t, 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, "set", e, t), 400;
		}
	};
	setMessages = async (e, t) => {
		let n = E(e);
		try {
			return window.__bc.WidgetData[n] = t, 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, "set", e, t), 400;
		}
	};
	cleanMessages = async (e) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((e) => e(0)));
	hideMessage = async (e, t) => {
		console.debug(`hideMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	approveMessage = async (e, t) => {
		console.debug(`approveMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	bulk = async (e, t) => 404;
	get = async (e, t) => 404;
	set = async (e, t) => 404;
	getDashboard = async (e) => {
		try {
			return window.__bc.DashboardData[e.id];
		} catch (t) {
			return console.warn("%capi", u.API, l.DASHBOARD, e.id, t), {
				data: null,
				message: `Dashboard ${e.id} load error: ${t.message}`,
				success: !1
			};
		}
	};
	getDashboards = async () => ({
		data: null,
		message: "Dashboards get error: ",
		success: !1
	});
	setDashboard = async (e) => {
		let t = `widget.${e.widget}`;
		try {
			return window.__bc.DashboardData[t] = e, {
				data: null,
				message: `Dashboard ${e.data.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.DASHBOARD, e, t), {
				data: null,
				message: `Dashboard ${e.data.id} save error: ${t.message}`,
				success: !1
			};
		}
	};
	deleteDashboard = async (e) => 404;
	deleteDashboards = async () => 404;
	getWidget = async (e) => {
		try {
			return window.__bc.WidgetData[e.id];
		} catch (t) {
			return console.warn("%capi", u.API, l.WIDGET, e.id, t), {
				data: null,
				message: `Widget ${e.id} load error: ${t.message}`,
				success: !1
			};
		}
	};
	getWidgets = async () => ({
		data: null,
		message: "Widgets get error: ",
		success: !1
	});
	setWidget = async (e) => {
		let t = `widget.${e.widget}`;
		try {
			return window.__bc.WidgetData[t] = e, {
				data: null,
				message: `Widget ${e.data.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.WIDGET, e, t), {
				data: null,
				message: `Slide ${e.data.id} save error: ${t.message}`,
				success: !1
			};
		}
	};
	deleteWidget = async (e) => 404;
	deleteWidgets = async () => 404;
	deleteSlide = async (e) => 404;
	deleteSlides = async () => 404;
	deletePresentation = async (e) => 404;
	deletePresentations = async () => 404;
	subscribe = (e) => (e.type === l.MESSAGES && (e = te(this.options, e)), this.subscribers.filter((t) => t.widget === e.widget).length || (console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), this.subscribers.push(e)), null);
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (e) => {
		try {
			return window.__bc.SlideData[e.id];
		} catch (t) {
			return console.warn("%capi", u.API, l.SLIDE, e.id, t), {
				data: null,
				message: `Slide ${e.id} load error: ${t.message}`,
				success: !1
			};
		}
	};
	getSlides = async (e) => {
		try {
			return window.__bc.SlideData.filter((t) => t.presentation_id === e.presentation);
		} catch (t) {
			return console.warn("%capi", u.API, l.PRESENTATION, e.presentation_id, t), {
				data: null,
				message: `Slides for presentation ${e.presentation} load error: ${t.message}`,
				success: !1
			};
		}
	};
	setSlide = async (e) => {
		try {
			return window.__bc.SlideData[e.id] = {
				id: e.slide,
				title: e.data.title || "Not set",
				json: e.data.json || {},
				html: e.data.html || ""
			}, {
				data: null,
				message: `Slide ${e.data.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.SLIDE, e, t), {
				data: null,
				message: `Slide ${e.data.id} save error: ${t.message}`,
				success: !1
			};
		}
	};
	getPresentation = async (e) => {
		try {
			let t = e.presentation || "none";
			return window.__bc.PresentationData[t];
		} catch (t) {
			return console.warn("%capi", u.API, l.PRESENTATION, e.presentation, t), {
				data: null,
				message: `Presentation ${e.presentation} load error: ${t.message}`,
				success: !1
			};
		}
	};
	getPresentations = async () => {
		try {
			return window.__bc.PresentationData;
		} catch (e) {
			return console.warn("%capi", u.API, l.PRESENTATION, e), {
				data: null,
				message: `Presentations get error: ${e.message}`,
				success: !1
			};
		}
	};
	setPresentation = async (e) => {
		try {
			return window.__bc.PresentationData[e.id] = e.data, {
				data: null,
				message: `Presentation ${e.data.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.PRESENTATION, e, t), {
				data: null,
				message: `Presentation ${e.data.id} save error: ${t.message}`,
				success: !1
			};
		}
	};
	getPreference = async (e) => {
		try {
			return window.__bc.Preferences[e.id];
		} catch (t) {
			return console.warn("%capi", u.API, l.PREFERENCE, e.id, t), {
				data: null,
				message: `Preference ${e.id} load error: ${t.message}`,
				success: !1
			};
		}
	};
	getPreferences = async () => {
		try {
			return window.__bc.Preferences;
		} catch (e) {
			return console.warn("%capi", u.API, l.PREFERENCE, e), {
				data: null,
				message: `Preferences get error: ${e.message}`,
				success: !1
			};
		}
	};
	setPreference = async (e) => {
		try {
			return window.__bc.Preferences[e.id] = e.value, {
				data: null,
				message: `Preference ${e.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.PREFERENCE, e, t), {
				data: null,
				message: `Preference ${e.id} save error: ${t.message}`,
				success: !1
			};
		}
	};
	getImages = async (e) => ({
		data: null,
		message: `Images ${e.id} `,
		success: !1
	});
	setImage = async (e) => ({
		data: null,
		message: `Image ${e.name} saved`,
		success: !1
	});
};
// src/storage/factory.ts
function ye(e) {
	switch (e.storage) {
		case p.DEXIE: return new he(e);
		case p.KEYVAL: return new F(e);
		case p.WINDOW: return new ve(e);
		default: return null;
	}
}
// src/manager/index.ts
var be = class {
	sm;
	api;
	bc;
	options;
	subscribers = [];
	constructor(e) {
		w(3, [
			"%cpresentation",
			u.PRESENTATION,
			e.presentation,
			d.VERSION,
			ne
		]), this.options = e, this.bc = new BroadcastChannel(this.options.presentation), this.api = new ie(e), this.sm = ye(e);
	}
	addSubscriber(e) {
		this.subscribers[e.widget] = e;
	}
	deleteSubscriber(e) {
		delete this.subscribers[e.widget];
	}
	update = async (e) => {
		if (w(3, [
			"%cupdate%c %cdata",
			u.NO_UPDATES,
			u.NONE,
			u.MESSAGES,
			e
		]), this.sm === null || Object.keys(this.subscribers).length === 0) return;
		let t = [];
		Object.values(this.subscribers).forEach((e) => {
			e.dashboard?.length && e.widget?.length && e.type?.length && t.push(this.api.get(e));
		}), await Promise.all(t.map(async (t) => await this.processResponse(await t, e)));
	};
	stream = () => {
		let e = [];
		Object.values(this.subscribers).forEach((t) => {
			e.push(t);
		}), this.api.ndjson(e);
	};
	apiQuery = async (e) => await this.api.get(e).then(async (e) => await this.processResponse(e, { refresh: !1 })).catch(() => ({
		code: 204,
		hash: ""
	}));
	processResponse = async (e, t) => {
		let n, r = {
			code: 400,
			hash: ""
		}, i = "", a;
		if (e.success === !0) {
			let o = e.query;
			switch (o.type) {
				case l.MESSAGES:
					a = await this.sm?.getHash(o), a === "none" && (o.hash = "temp", await this.sm?.createHash(o)), e.data.messages = e.data.messages.filter((e) => e.id !== null), i = e.data.messages.length > 0 ? x(e.data.messages[0].utc) : "none", a === i && t.refresh === !1 ? (w(3, [
						"%cset%c %cstorage%c %cmessages",
						u.NO_UPDATES,
						u.NONE,
						u.STORAGE,
						u.NONE,
						u.MESSAGES,
						e.data?.title ?? e.query.widget,
						`same hash:${i}`
					]), r.code = 204) : this.sm === null ? r.code = 500 : (o.hash = i, await this.sm?.setHash(o), r.code = await this.sm.setMessages(e.query, e).then(async (n) => (t.refresh && n === 204 && (n = 201), this.broadcastUpdate(n, e), n)).catch(() => 500));
					break;
				case l.CLOUD:
					a = await this.sm?.getHash(o), a === "none" && (o.hash = "temp", await this.sm?.createHash(o)), i = x(e.data.cloud), a === i && t.refresh === !1 ? (w(3, [
						"%cset%c %cstorage%c %ccloud",
						u.NO_UPDATES,
						u.NONE,
						u.STORAGE,
						u.NONE,
						u.CLOUD,
						e.data?.title ?? o.widget,
						`same hash:${i}`
					]), w(4, [
						"%cdebug%c %ccloud",
						u.NO_UPDATES,
						u.NONE,
						u.CLOUD,
						e.query
					]), r = {
						code: 204,
						hash: i
					}) : (o.hash = i, await this.sm?.setHash(o), n = {
						data: { cloud: e.data },
						message: e.message,
						success: e.success,
						query: e.query
					}, this.sm === null ? r.code = 500 : r.code = await this.sm.setCloud(e.query, n.data).then((n) => (t.refresh && n === 204 && (n = 201), this.broadcastUpdate(n, e), n)).catch(() => 500));
					break;
				case l.SERIES:
					a = await this.sm?.getHash(o), a === "none" && (o.hash = "temp", await this.sm?.createHash(o)), i = x(e.data.series), a === i && t.refresh === !1 ? (w(3, [
						"%cset%c %cstorage%c %cseries",
						u.NO_UPDATES,
						u.NONE,
						u.STORAGE,
						u.NONE,
						u.SERIES,
						e.data?.title ?? e.query.widget,
						`same hash:${i}`
					]), w(4, [
						"%cdebug%c %cseries",
						u.NO_UPDATES,
						u.NONE,
						u.SERIES,
						o
					]), r = {
						code: 204,
						hash: i
					}) : (o.hash = i, await this.sm?.setHash(o), n = {
						data: e.data,
						message: e.message,
						success: e.success,
						query: e.query
					}, this.sm === null ? r.code = 500 : r.code = await this.sm.setSeries(o, e.data).then((n) => (t.refresh && n === 204 && (n = 201), this.broadcastUpdate(n, e), n)).catch(() => 500));
					break;
				default: w(3, [
					`%cfetch%c %capi% %c${o.type} `,
					u.KO,
					u.NONE,
					u.API,
					u.NONE,
					u.NO_UPDATES,
					`Bad request: type ${o.type} unknown`
				]), r = {
					code: 404,
					hash: i
				};
			}
		} else switch (w(3, [
			`%cset%c %c${e.query.type}%c %cunauthorized`,
			u.KO,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.NO_UPDATES,
			e.query
		]), e.query.type) {
			case l.MESSAGES: return this.sm === null ? {
				code: 500,
				hash: i
			} : await this.sm?.getMessages(e.query).then((e) => (this.broadcastUpdate(201, e), {
				code: 201,
				hash: i
			}));
			case l.CLOUD: return this.sm === null ? {
				code: 500,
				hash: i
			} : await this.sm?.getCloud(e.query).then((e) => (this.broadcastUpdate(201, e), {
				code: 201,
				hash: i
			}));
			case l.SERIES: return this.sm === null ? {
				code: 500,
				hash: i
			} : await this.sm?.getSeries(e.query).then((e) => (this.broadcastUpdate(201, e), {
				code: 201,
				hash: i
			}));
		}
		return e = null, r;
	};
	startBroadcastListener = () => {
		let e = this.options.presentation;
		w(3, [
			"%cchannel%c %capi",
			u.BROADCAST,
			u.NONE,
			u.API,
			e
		]), this.bc && (this.bc.onmessage = (e) => {
			this.actions(e);
		}, this.bc.postMessage({
			event: d.STORAGE_INIT,
			data: {}
		}));
	};
	broadcastMessage = (e, t) => {
		this.bc && this.bc.postMessage({
			event: e,
			data: t
		});
	};
	broadcastUpdate = (e, t) => {
		switch (e) {
			case 201:
				w(3, [
					`%cupdate%c %cwidget%c %c${t.query?.type}`,
					u.BROADCAST,
					u.NONE,
					u.WIDGET,
					u.NONE,
					T(t.query),
					`${t?.data?.title ?? ""} ${t.query.widget}`
				]), w(4, [
					"%cdebug%c %cevent",
					u.NO_UPDATES,
					u.NONE,
					u.BROADCAST,
					t
				]), this.bc?.postMessage({
					event: d.WIDGET_UPDATE,
					data: t.query
				});
				break;
			case 204: break;
			default: w(2, [
				`%cupdate%c %cwidget%c %c${t.query?.type}`,
				u.KO,
				u.NONE,
				u.WIDGET,
				u.NONE,
				T(t.query),
				"Fetch error",
				t.query
			]);
		}
	};
	hide = (e) => {
		this.api.hideMessage(e);
	};
	actions = async (e) => {
		switch (e.data.event) {
			case d.SUBSCRIBE: {
				let t = e.data.data;
				t.widget !== void 0 && (w(3, [
					`%csubscribe%c %cwidget%c %c${e.data.data.type}`,
					u.BROADCAST,
					u.NONE,
					u.WIDGET,
					u.NONE,
					T(t),
					t
				]), this.addSubscriber(t));
				break;
			}
			case d.UNSUBSCRIBE:
				e.data.data.widget !== void 0 && this.deleteSubscriber(e.data.data);
				break;
			case d.UPDATE:
				w(3, [
					"%cupdate%c %capi%c %cstorage",
					u.BROADCAST,
					u.NONE,
					u.API,
					u.NONE,
					u.STORAGE,
					e.data
				]), await this.update(e.data.data);
				break;
			case "stream": w(3, [
				"%cupdate%c %capi%c %cstorage",
				u.BROADCAST,
				u.NONE,
				u.API,
				u.NONE,
				u.STORAGE,
				e.data
			]), await this.stream();
		}
	};
	cleanMessages = async () => {
		if (this.options?.suspended) {
			w(2, [
				"%cclean%c %cstorage%c %cmessages",
				u.KO,
				u.NONE,
				u.STORAGE,
				u.NONE,
				u.MESSAGES,
				"Account suspended"
			]);
			return;
		}
		let e = this.options?.retention || 3456e3, t = await this.sm?.cleanMessages(e);
		w(3, [
			"%cclean%c %cstorage%c %cmessages",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.MESSAGES,
			`${t} messages deleted`
		]);
	};
	hideMessage = async (e) => {
		let t = await this.sm?.hideMessage(e.id, 0);
		return w(3, [
			"%chide%c %cstorage%c %cmessages",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.MESSAGES,
			`${t} messages hidden`
		]), await this.api.hideMessage(e);
	};
	hideLabels = async (e) => await this.api.hideLabels(e);
	approveMessage = async (e) => {
		let t = await this.sm?.approveMessage(e.id, +!!e.approved);
		w(3, [
			"%capprove%c %cstorage%c %cmessages",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.MESSAGES,
			`${t} messages approved`
		]);
	};
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	deleteSubscribers = async () => (this.subscribers = [], await new Promise((e) => e(this.subscribers)));
	bulk = async (e, t) => await this.sm?.bulk(e, t);
	get = async (e, t) => await this.sm?.get(e, t);
	set = async (e, t) => await this.sm?.set(e, t);
	getSlide = async (e) => await this.sm?.getSlide(e);
	getSlides = async (e) => await this.sm?.getSlides(e);
	setSlide = async (e) => await this.sm?.setSlide(e);
	loadSlide = async (e) => await this.api.loadSlide(e);
	storeSlide = async (e) => await this.api.storeSlide(e);
	createSlide = async (e) => await this.api.createSlide(e);
	deleteSlide = async (e) => await this.sm?.deleteSlide(e);
	deleteSlides = async () => await this.sm?.deleteSlides();
	getPresentation = async (e) => await this.sm?.getPresentation(e);
	getPresentations = async (e) => await this.sm?.getPresentations(e);
	setPresentation = async (e) => await this.sm?.setPresentation(e);
	loadPresentation = async (e) => await this.api.loadPresentation(e);
	storePresentation = async (e) => await this.api.storePresentation(e);
	deletePresentation = async (e) => await this.sm?.deletePresentation(e);
	deletePresentations = async () => await this.sm?.deletePresentations();
	getPreference = async (e) => await this.sm?.getPreference(e);
	getPreferences = async (e) => await this.sm?.getPreferences(e);
	setPreference = async (e) => await this.sm?.setPreference(e);
	loadPreference = async (e) => await this.api.loadPreference(e);
	storePreference = async (e) => await this.api.storePreference(e);
	getWidget = async (e) => await this.sm?.getWidget(e);
	getWidgets = async (e) => await this.sm?.getWidgets(e);
	setWidget = async (e) => await this.sm?.setWidget(e);
	deleteWidget = async (e) => await this.sm?.deleteWidget(e);
	deleteWidgets = async () => await this.sm?.deleteWidgets();
	loadDashboards = async (e) => await this.api.loadDashboards(e);
	getDashboard = async (e) => await this.sm?.getDashboard(e);
	deleteDashboard = async (e) => await this.sm?.deleteDashboard(e);
	deleteDashboards = async () => await this.sm?.deleteDashboards();
	getDashboards = async () => await this.sm?.getDashboards();
	setDashboard = async (e) => await this.sm?.setDashboard(e);
	loadImages = async (e) => await this.api.loadImages(e);
	storeImage = async (e) => await this.api.storeImage(e);
	deleteImage = async (e, t) => await this.api.deleteImage(e, t);
	getImages = async (e) => await this.sm?.getImages(e);
	setImage = async (e) => await this.sm?.setImage(e);
	getHash = async (e, t) => await this.sm?.getHash(t);
	setHash = async (e, t) => await this.sm?.setHash(t) ?? 400;
	clearHash = async () => await this.sm?.clearHash() ?? 400;
}, I = class {
	sm;
	constructor(e) {
		this.sm = ye(e);
	}
	getCloud = async (e) => e.type === l.CLOUD ? await this.sm?.getCloud(e) : (console.warn("%cget%c %cstorage%c %ccloud", u.KO, u.NONE, u.STORAGE, u.NONE, u.CLOUD, e.widget, "wrong method call for getCloud, type used is", e.type), {
		data: null,
		message: `'wrong method call for getCloud, type used is ${e.type}`,
		success: !1
	});
	getMessages = async (e) => e.type === l.MESSAGES ? await this.sm?.getMessages(e) : (console.warn("%cget%c %cstorage%c %cmessages", u.KO, u.NONE, u.STORAGE, u.NONE, u.MESSAGES, e.widget, "wrong method call for getMessages, type used is", e.type), {
		data: null,
		message: `'wrong method call for getMessages, type used is ${e.type}`,
		success: !1
	});
	getSeries = async (e) => e.type === l.SERIES ? await this.sm?.getSeries(e) : (console.warn("%cget%c %cstorage%c %cseries", u.KO, u.NONE, u.STORAGE, u.NONE, u.SERIES, e.widget, "wrong method call for getSeries, type used is", e.type), {
		data: null,
		message: `'wrong method call for getSeries, type used is ${e.type}`,
		success: !1
	});
}, xe = class {
	storageReader;
	broadcastChannel;
	element;
	query;
	callbacks;
	constructor(e, t, n) {
		this.element = e, this.callbacks = t, n = n === void 0 ? "buzzcasting-app" : n;
		let r = { ...e.dataset };
		delete r.hmr;
		let i = window.__bc.opts;
		r.presentation = i?.presentation ?? `${n} not found`, this.query = r, h(e), this.storageReader = new I(i), this.broadcastChannel = new BroadcastChannel(r.presentation), this.broadcastListener();
	}
	addCallbackListener(e) {
		this.callbacks.push(e);
	}
	broadcastListener() {
		let e = this.query;
		this.broadcastChannel.onmessage = async (t) => {
			let n = t.data.data;
			switch (t.data.event) {
				case d.WIDGET_UPDATE:
					try {
						if (n.dashboard === e.dashboard && n.widget === e.widget) {
							let e = await this.getData();
							e?.success && (w(4, [
								`%cset%c %cwidget%c %c${this.query.type}`,
								u.OK,
								u.NONE,
								u.WIDGET,
								u.NONE,
								T(this.query),
								this.query
							]), this.callbacks.forEach(async (t) => {
								t(e);
							}));
						}
					} catch (e) {
						w(4, [
							d.WIDGET_UPDATE,
							n,
							e.message,
							e
						]);
					}
					break;
				case d.APP_READY: this.subscribe();
			}
		};
	}
	subscribe() {
		this.query.dashboard?.length && this.query.widget?.length && this.query.type?.length && (this.broadcastChannel.postMessage({
			event: d.SUBSCRIBE,
			data: this.query
		}), w(3, [
			`%csubscribe%c %cwidget%c %c${this.query.type}`,
			u.SUBSCRIBE,
			u.NONE,
			u.WIDGET,
			u.NONE,
			T(this.query),
			this.query.widget
		]), w(4, [
			"%cdebug%c %cwidget",
			u.NO_UPDATES,
			u.NONE,
			u.WIDGET,
			this.query
		]));
	}
	unsubscribe() {
		this.query.widget?.length && (this.broadcastChannel.postMessage({
			event: d.UNSUBSCRIBE,
			data: this.query
		}), w(3, [
			`%cunsubscribe%c %cwidget%c %c${this.query.type}`,
			u.SUBSCRIBE,
			u.NONE,
			u.WIDGET,
			u.NONE,
			T(this.query),
			this.query.widget
		]));
	}
	getData = async () => {
		switch (this.query.type) {
			case l.CLOUD: return await this.getCloud();
			case l.MESSAGES: return await this.getMessages();
			case l.SERIES: return await this.getSeries();
		}
		return {
			data: null,
			message: `wrong method call, '${this.query.type}' is unknown`,
			success: !1,
			query: this.query
		};
	};
	getCloud = async () => this.query.type === l.CLOUD ? await this.storageReader.getCloud(this.query) : (w(3, [
		"%cget%c %cstorage%c %cwidget",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		this.query.widget,
		"Wrong method call for getCloud, expected type is",
		this.query.type
	]), w(4, [
		"%cdebug%c %ccloud",
		u.NO_UPDATES,
		u.NONE,
		u.CLOUD,
		this.query
	]), {
		data: null,
		message: `wrong method call for getCloud, expected type is '${this.query.type}'`,
		success: !1,
		query: this.query
	});
	getMessages = async () => this.query.type === l.MESSAGES ? await this.storageReader.getMessages(this.query) : (w(3, [
		"%cget%c %cstorage%c %cwidget",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		this.query.widget,
		"Wrong method call for getMessages, expected type is",
		this.query.type
	]), w(4, [
		"%debug%c %cmessages",
		u.NO_UPDATES,
		u.NONE,
		u.MESSAGES,
		this.query
	]), {
		data: null,
		message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
		success: !1
	});
	getSeries = async () => this.query.type === l.SERIES ? await this.storageReader.getSeries(this.query) : (w(3, [
		"%cget%c %cstorage%c %cwidget",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		this.query.widget,
		"Wrong method call for getSeries, expected type is",
		this.query.type
	]), w(4, [
		"%cdebug%c %cseries",
		u.NO_UPDATES,
		u.NONE,
		u.SERIES,
		this.query
	]), {
		data: null,
		message: `wrong method call for getSeries, expected type is '${this.query.type}'`,
		success: !1,
		query: this.query
	});
	showModal = (e) => {
		w(3, [
			"%cmodal%c %cwidget",
			u.OK,
			u.NONE,
			u.WIDGET,
			d.SHOW_MODAL,
			e.showComponent,
			m(this.element.attributes)
		]);
		let t = new CustomEvent(d.SHOW_MODAL, {
			detail: {
				component: e.showComponent,
				props: e.props,
				timeout: e?.timeout
			},
			bubbles: !0,
			cancelable: !0,
			composed: !0
		});
		window.dispatchEvent(t);
	};
	destroy() {
		this.unsubscribe(), this.broadcastChannel.close();
	}
};
export { be as BuzzcastingStorageManager, I as BuzzcastingStorageReader, xe as Widget };
