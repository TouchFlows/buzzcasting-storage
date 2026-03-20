//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l = function(e) {
	return e.CARDS = "cards", e.CLOUD = "cloud", e.DASHBOARD = "dashboard", e.DASHBOARDS = "dashboards", e.IMAGES = "images", e.MESSAGES = "messages", e.PREFERENCE = "preference", e.PREFERENCES = "preferences", e.PRESENTATION = "presentation", e.PRESENTATIONS = "presentations", e.SERIES = "series", e.SLIDE = "slide", e.SLIDES = "slides", e.TEMPLATES = "templates", e.TOPICS = "topics", e.WIDGET = "widget", e.WIDGETS = "widgets", e;
}({}), u = function(e) {
	return e.API = "color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;", e.APP = "color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;", e.BROADCAST = "color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;", e.CLOUD = "color:purple;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;", e.DATA = "color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;", e.ERROR = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.GET_DATA = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.HIDE = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.KO = "color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;", e.MESSAGES = "color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;", e.NO_UPDATES = "color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;", e.NONE = "color:transparent;background-color:transparent;", e.OK = "color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;", e.PRESENTATION = "color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;", e.SERIES = "color:purple;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;", e.SLIDE = "color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;", e.STORAGE = "color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;", e.SUBSCRIBE = "color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;", e.WIDGET = "color:black;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;", e.WS = "color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;", e;
}({}), d = function(e) {
	return e.ADD_SLIDE = "addSlide", e.APP_READY = "appReady", e.API_UPDATE = "apiUpdate", e.BACKGROUND_UPDATE = "backgroundUpdate", e.BUILDER_PREVIEW = "builderPreview", e.COMPONENT_UPDATE = "componentUpdate", e.APPROVE_MESSAGE = "approveMessage", e.CHANNEL = "channel", e.CLEAN_MESSAGES = "cleanMessages", e.CLOSE_BUILDER_DIALOG = "closeBuilderDialog", e.CLOSE_BUILDER_MODAL = "closeBuilderModal", e.CLOSE_MODAL = "closeModal", e.COLOR_UPDATE = "colorUpdate", e.COMPONENT_INDEX = "componentIndex", e.CSS_SET = "setCss", e.CSS_STORE = "storeCss", e.DASHBOARD_LOAD = "loadDashboard", e.DASHBOARD_STORE = "storeDashboard", e.DASHBOARD_UPDATED = "dashboardUpdated", e.ERROR = "error", e.HIDE_MESSAGE = "hideMessage", e.HIDE_LABELS = "hideLabels", e.IMAGE_GET = "getImage", e.IMAGE_SET = "setImage", e.IMAGE_STORED = "imageStored", e.LAUPPUT_UPDATE = "layoutUpdate", e.PREV_SLIDE = "prevSlide", e.RELOAD_PRESENTATION = "reloadPresentation", e.STAR_MESSAGE = "starMessage", e.GOTO_SLIDE = "gotoSlide", e.NEXT_SLIDE = "nextSlide", e.PREFERENCE_LOAD = "loadPreference", e.PREFERENCE_STORE = "storePreference", e.PREFERENCE_UPDATED = "preferenceUpdated", e.PAUSE_PRESENTATION = "pausePresentation", e.PRESENTATION_READY = "presentationReady", e.PRESENTATION_LOAD = "loadPresentation", e.PRESENTATION_STORE = "storePresentation", e.PRESENTATION_UPDATED = "presentationUpdated", e.ROW_COL_UPDATE = "rowcolupdate", e.SCREENSHOT_TAKE = "takeScreenshot", e.SCREENSHOT_STORE = "storeScreenshot", e.SECTION_UPDATE = "sectionUpdate", e.SHOW_BUILDER_DIALOG = "showBuilderDialog", e.SHOW_BUILDER_MODAL = "showBuilderModal", e.SHOW_MODAL = "showModal", e.SLIDE_DID_LOAD = "slideDidLoad", e.SLIDE_GET = "getSlide", e.SLIDE_GOTO = "slideGoto", e.SLIDE_LOAD = "loadSlide", e.SLIDE_READY = "slideReady", e.SLIDE_SAVED = "slideSaved", e.SLIDE_SET = "setSlide", e.SLIDE_STORE = "storeSlide", e.SLIDE_STORED = "slideStored", e.SLIDE_TRANSITIONER = "slideTransitioner", e.SLIDE_UPDATED = "slideUpdated", e.START_TRANSITIONER = "startTransitioner", e.STORAGE_INIT = "storageInit", e.STREAM = "stream", e.SUBSCRIBE = "subscribe", e.SUSPEND_ACCOUNT = "suspendAccount", e.SWITCH_PRESENTATION = "switchPresentation", e.REMOVE_CLOUD = "removeCloud", e.UPDATE = "update", e.UPLOAD_COMPLETED = "uploadCompleted", e.VERSION = "version", e.WIDGETS_CLEAR = "widgetsClear", e.WIDGET_DID_LOAD = "widgetDidLoad", e.WIDGET_DID_UPDATE = "widgetDidUpdate", e.WIDGET_LOAD = "widgetLoad", e.WIDGET_STORE = "widgetStore", e.WIDGET_UPDATE = "widgetUpdate", e.WS_API_REQUEST = "wsApiRequest", e.WS_API_RESPONSE = "wsApiResponse", e.WS_API_UPDATE = "wsApiRUpdate", e;
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
function C(e) {
	return `"${e}"`;
}
var ee = (e) => {
	let t = [
		"area",
		"base",
		"basefont",
		"br",
		"col",
		"frame",
		"hr",
		"img",
		"input",
		"isindex",
		"link",
		"meta",
		"param",
		"embed"
	], n = "";
	e.child && (n = e.child.map(function(e) {
		return ee(e);
	}).join(""));
	let r = "";
	if (e.attr && (r = Object.keys(e.attr).map(function(t) {
		let n = e.attr[t];
		return Array.isArray(n) && (n = n.join(" ")), `${t}=${C(n)}`;
	}).join(" "), r !== "" && (r = ` ${r}`)), e.node === "element") {
		let i = e.tag;
		if (t.indexOf(i) > -1) return `<${e.tag}${r}/>`;
		let a = `<${e.tag}${r}>`, o = `</${e.tag}>`;
		return `${a}${n}${o}`;
	}
	if (e.node === "text") return e.text;
	if (e.node === "comment") return `<!-- ${e.text} -->`;
	if (e.node === "root") return n;
}, w = new BroadcastChannel("logging"), T = async (e = 0, t) => {
	w.postMessage({
		action: "log",
		level: e,
		message: t
	});
}, E = (e) => {
	switch (e?.type) {
		case l.MESSAGES: return u.MESSAGES;
		case l.SERIES: return u.SERIES;
		case l.CLOUD: return u.CLOUD;
		default: return u.NO_UPDATES;
	}
};
function D(e) {
	let t = `${e.type}.${e.topics}`;
	return e.order && (t += `.${e.order}`), e.period && (t += `.${e.period}`), t;
}
function te(e) {
	if (e.widget === void 0) {
		let t = e.topics?.split("-");
		t && t.length > 1 ? (e.dashboard = t ? t[0] : "", e.widget = t ? t[1] : "") : (e.widget = e.topics, e.dashboard = e.slide);
	}
	return e;
}
function ne(e, t) {
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
//#endregion
//#region package.json
var re = "3.21.1", ie = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.readNDJSONStream = r());
	})(e, (function() {
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
})))(), 1), ae = class {
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
			case l.CLOUD:
				a = u.CLOUD;
				break;
		}
		return T(3, [
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
		for await (let e of (0, ie.default)(r.body)) console.log("Received", e);
	}
	async hideMessage(e) {
		let { version: t } = this.options, n = this.headers();
		return T(3, [
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
		return console.info("%capi%c %cput", u.API, u.NONE, u.GET_DATA, d.HIDE_LABELS, e.widget, i), await fetch([
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
		return delete r.type, delete r.hash, T(3, [
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
	async storeSlide(e) {
		let { version: t } = this.options, n = this.formHeaders();
		delete e.update, delete e.type;
		let r = JSON.stringify(e);
		return T(3, [
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
		return delete e.update, T(3, [
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
		return T(2, [
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
		return T(3, [
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
		let { version: t } = this.options, n = this.formHeaders();
		delete e.update;
		let r = JSON.stringify({ data: e });
		return T(3, [
			"%capi%c %cstorePreference",
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
	async loadDashboards(e) {
		let { version: t } = this.options, n = this.headers();
		return T(3, [
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
		return T(3, [
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
}, O = /* @__PURE__ */ c((/* @__PURE__ */ o(((e, t) => {
	((n, r) => {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self).Dexie = r();
	})(e, function() {
		var e = function(t, n) {
			return (e = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
				e.__proto__ = t;
			} : function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}))(t, n);
		}, t = function() {
			return (t = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}).apply(this, arguments);
		};
		function n(e, t, n) {
			if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || ((r ||= Array.prototype.slice.call(t, 0, i))[i] = t[i]);
			return e.concat(r || Array.prototype.slice.call(t));
		}
		var r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, i = Object.keys, a = Array.isArray;
		function o(e, t) {
			return typeof t == "object" && i(t).forEach(function(n) {
				e[n] = t[n];
			}), e;
		}
		typeof Promise > "u" || r.Promise || (r.Promise = Promise);
		var s = Object.getPrototypeOf, c = {}.hasOwnProperty;
		function l(e, t) {
			return c.call(e, t);
		}
		function u(e, t) {
			typeof t == "function" && (t = t(s(e))), (typeof Reflect > "u" ? i : Reflect.ownKeys)(t).forEach(function(n) {
				f(e, n, t[n]);
			});
		}
		var d = Object.defineProperty;
		function f(e, t, n, r) {
			d(e, t, o(n && l(n, "get") && typeof n.get == "function" ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, r));
		}
		function p(e) {
			return { from: function(t) {
				return e.prototype = Object.create(t.prototype), f(e.prototype, "constructor", e), { extend: u.bind(null, e.prototype) };
			} };
		}
		var m = Object.getOwnPropertyDescriptor, h = [].slice;
		function g(e, t, n) {
			return h.call(e, t, n);
		}
		function _(e, t) {
			return t(e);
		}
		function v(e) {
			if (!e) throw Error("Assertion Failed");
		}
		function y(e) {
			r.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function b(e, t) {
			if (typeof t == "string" && l(e, t)) return e[t];
			if (!t) return e;
			if (typeof t != "string") {
				for (var n = [], r = 0, i = t.length; r < i; ++r) {
					var a = b(e, t[r]);
					n.push(a);
				}
				return n;
			}
			var o, s = t.indexOf(".");
			return s === -1 || (o = e[t.substr(0, s)]) == null ? void 0 : b(o, t.substr(s + 1));
		}
		function x(e, t, n) {
			if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
				v(typeof n != "string" && "length" in n);
				for (var r = 0, i = t.length; r < i; ++r) x(e, t[r], n[r]);
			} else {
				var o, s, c = t.indexOf(".");
				c === -1 ? n === void 0 ? a(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n : (o = t.substr(0, c), (c = t.substr(c + 1)) === "" ? n === void 0 ? a(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : x(s = (s = e[o]) && l(e, o) ? s : e[o] = {}, c, n));
			}
		}
		function S(e) {
			var t, n = {};
			for (t in e) l(e, t) && (n[t] = e[t]);
			return n;
		}
		var C = [].concat;
		function ee(e) {
			return C.apply([], e);
		}
		var w = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ee([
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
			return r[e];
		}), T = new Set(w.map(function(e) {
			return r[e];
		})), E = null;
		function D(e) {
			return E = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || typeof t != "object") return t;
				var n = E.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], E.set(t, n);
					for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
				} else if (T.has(t.constructor)) n = t;
				else {
					var o, c = s(t);
					for (o in n = c === Object.prototype ? {} : Object.create(c), E.set(t, n), t) l(t, o) && (n[o] = e(t[o]));
				}
				return n;
			}(e), E = null, e;
		}
		var te = {}.toString;
		function ne(e) {
			return te.call(e).slice(8, -1);
		}
		var re = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ie = typeof re == "symbol" ? function(e) {
			var t;
			return e != null && (t = e[re]) && t.apply(e);
		} : function() {
			return null;
		};
		function ae(e, t) {
			t = e.indexOf(t), 0 <= t && e.splice(t, 1);
		}
		var O = {};
		function k(e) {
			var t, n, r, i;
			if (arguments.length === 1) {
				if (a(e)) return e.slice();
				if (this === O && typeof e == "string") return [e];
				if (i = ie(e)) for (n = []; !(r = i.next()).done;) n.push(r.value);
				else {
					if (e == null || typeof (t = e.length) != "number") return [e];
					for (n = Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var A = typeof Symbol < "u" ? function(e) {
			return e[Symbol.toStringTag] === "AsyncFunction";
		} : function() {
			return !1;
		}, w = [
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
		], j = [
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
		].concat(w), oe = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function se(e, t) {
			this.name = e, this.message = t;
		}
		function ce(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function le(e, t, n, r) {
			this.failures = t, this.failedKeys = r, this.successCount = n, this.message = ce(e, t);
		}
		function ue(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = ce(e, this.failures);
		}
		p(se).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), p(le).from(se), p(ue).from(se);
		var de = j.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), fe = se, M = j.reduce(function(e, t) {
			var n = t + "Error";
			function r(e, r) {
				this.name = n, e ? typeof e == "string" ? (this.message = `${e}${r ? "\n " + r : ""}`, this.inner = r || null) : typeof e == "object" && (this.message = `${e.name} ${e.message}`, this.inner = e) : (this.message = oe[t] || n, this.inner = null);
			}
			return p(r).from(fe), e[t] = r, e;
		}, {}), pe = (M.Syntax = SyntaxError, M.Type = TypeError, M.Range = RangeError, w.reduce(function(e, t) {
			return e[t + "Error"] = M[t], e;
		}, {}));
		w = j.reduce(function(e, t) {
			return [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) === -1 && (e[t + "Error"] = M[t]), e;
		}, {});
		function N() {}
		function me(e) {
			return e;
		}
		function he(e, t) {
			return e == null || e === me ? t : function(n) {
				return t(e(n));
			};
		}
		function P(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function ge(e, t) {
			return e === N ? t : function() {
				var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? P(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? P(i, this.onerror) : i), a === void 0 ? n : a;
			};
		}
		function _e(e, t) {
			return e === N ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? P(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? P(r, this.onerror) : r);
			};
		}
		function F(e, t) {
			return e === N ? t : function(n) {
				var r = e.apply(this, arguments), n = (o(n, r), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return n && (this.onsuccess = this.onsuccess ? P(n, this.onsuccess) : n), i && (this.onerror = this.onerror ? P(i, this.onerror) : i), r === void 0 ? a === void 0 ? void 0 : a : o(r, a);
			};
		}
		function I(e, t) {
			return e === N ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function ve(e, t) {
			return e === N ? t : function() {
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
		w.ModifyError = le, w.DexieError = se, w.BulkError = ue;
		var L = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function ye(e) {
			L = e;
		}
		var be = {}, xe = 100, Se = typeof Promise > "u" ? [] : (j = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [
			Se = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			s(Se),
			j
		] : [
			j,
			s(j),
			j
		]), j = Se[0], Ce = Se[1], Ce = Ce && Ce.then, we = j && j.constructor, Te = !!Se[2], Ee = function(e, t) {
			Ne.push([e, t]), Oe &&= (queueMicrotask(He), !1);
		}, De = !0, Oe = !0, ke = [], Ae = [], je = me, Me = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: N,
			pgp: !1,
			env: {},
			finalize: N
		}, R = Me, Ne = [], Pe = 0, Fe = [];
		function z(e) {
			if (typeof this != "object") throw TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = R;
			if (typeof e != "function") {
				if (e !== be) throw TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && Re(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (t._state === null) {
							if (n === t) throw TypeError("A promise cannot be resolved with itself.");
							var r = t._lib && Ue();
							n && typeof n.then == "function" ? e(t, function(e, t) {
								n instanceof z ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, ze(t)), r && We();
						}
					}, Re.bind(null, t));
				} catch (e) {
					Re(t, e);
				}
			}(this, e);
		}
		var Ie = {
			get: function() {
				var e = R, t = Xe;
				function n(n, r) {
					var i = this, a = !e.global && (e !== R || t !== Xe), o = a && !et(), s = new z(function(t, s) {
						Be(i, new Le(ot(n, e, a, o), ot(r, e, a, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return n.prototype = be, n;
			},
			set: function(e) {
				f(this, "then", e && e.prototype === be ? Ie : {
					get: function() {
						return e;
					},
					set: Ie.set
				});
			}
		};
		function Le(e, t, n, r, i) {
			this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
		}
		function Re(e, t) {
			var n, r;
			Ae.push(t), e._state === null && (n = e._lib && Ue(), t = je(t), e._state = !1, e._value = t, r = e, ke.some(function(e) {
				return e._value === r._value;
			}) || ke.push(r), ze(e), n) && We();
		}
		function ze(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, r = t.length; n < r; ++n) Be(e, t[n]);
			var i = e._PSD;
			--i.ref || i.finalize(), Pe === 0 && (++Pe, Ee(function() {
				--Pe == 0 && Ge();
			}, []));
		}
		function Be(e, t) {
			if (e._state === null) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++Pe, Ee(Ve, [
					n,
					e,
					t
				]);
			}
		}
		function Ve(e, t, n) {
			try {
				var r, i = t._value;
				!t._state && Ae.length && (Ae = []), r = L && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || Ae.indexOf(i) !== -1 || ((e) => {
					for (var t = ke.length; t;) if (ke[--t]._value === e._value) return ke.splice(t, 1);
				})(t), n.resolve(r);
			} catch (e) {
				n.reject(e);
			} finally {
				--Pe == 0 && Ge(), --n.psd.ref || n.psd.finalize();
			}
		}
		function He() {
			at(Me, function() {
				Ue() && We();
			});
		}
		function Ue() {
			var e = De;
			return Oe = De = !1, e;
		}
		function We() {
			var e, t, n;
			do
				for (; 0 < Ne.length;) for (e = Ne, Ne = [], n = e.length, t = 0; t < n; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < Ne.length);
			Oe = De = !0;
		}
		function Ge() {
			for (var e = ke, t = (ke = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), Fe.slice(0)), n = t.length; n;) t[--n]();
		}
		function Ke(e) {
			return new z(be, !1, e);
		}
		function B(e, t) {
			var n = R;
			return function() {
				var r = Ue(), i = R;
				try {
					return rt(n, !0), e.apply(this, arguments);
				} catch (e) {
					t && t(e);
				} finally {
					rt(i, !1), r && We();
				}
			};
		}
		u(z.prototype, {
			then: Ie,
			_then: function(e, t) {
				Be(this, new Le(null, null, e, t, R));
			},
			catch: function(e) {
				var t, n;
				return arguments.length === 1 ? this.then(null, e) : (t = e, n = arguments[1], typeof t == "function" ? this.then(null, function(e) {
					return (e instanceof t ? n : Ke)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : Ke)(e);
				}));
			},
			finally: function(e) {
				return this.then(function(t) {
					return z.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return z.resolve(e()).then(function() {
						return Ke(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < Infinity ? new z(function(r, i) {
					var a = setTimeout(function() {
						return i(new M.Timeout(t));
					}, e);
					n.then(r, i).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && f(z.prototype, Symbol.toStringTag, "Dexie.Promise"), Me.env = it(), u(z, {
			all: function() {
				var e = k.apply(null, arguments).map(tt);
				return new z(function(t, n) {
					e.length === 0 && t([]);
					var r = e.length;
					e.forEach(function(i, a) {
						return z.resolve(i).then(function(n) {
							e[a] = n, --r || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof z ? e : e && typeof e.then == "function" ? new z(function(t, n) {
					e.then(t, n);
				}) : new z(be, !0, e);
			},
			reject: Ke,
			race: function() {
				var e = k.apply(null, arguments).map(tt);
				return new z(function(t, n) {
					e.map(function(e) {
						return z.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return R;
				},
				set: function(e) {
					return R = e;
				}
			},
			totalEchoes: { get: function() {
				return Xe;
			} },
			newPSD: Qe,
			usePSD: at,
			scheduler: {
				get: function() {
					return Ee;
				},
				set: function(e) {
					Ee = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return je;
				},
				set: function(e) {
					je = e;
				}
			},
			follow: function(e, t) {
				return new z(function(n, r) {
					return Qe(function(t, n) {
						var r = R;
						r.unhandleds = [], r.onunhandled = n, r.finalize = P(function() {
							var e, r = this;
							e = function() {
								r.unhandleds.length === 0 ? t() : n(r.unhandleds[0]);
							}, Fe.push(function t() {
								e(), Fe.splice(Fe.indexOf(t), 1);
							}), ++Pe, Ee(function() {
								--Pe == 0 && Ge();
							}, []);
						}, r.finalize), e();
					}, t, n, r);
				});
			}
		}), we && (we.allSettled && f(z, "allSettled", function() {
			var e = k.apply(null, arguments).map(tt);
			return new z(function(t) {
				e.length === 0 && t([]);
				var n = e.length, r = Array(n);
				e.forEach(function(e, i) {
					return z.resolve(e).then(function(e) {
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
		}), we.any && typeof AggregateError < "u" && f(z, "any", function() {
			var e = k.apply(null, arguments).map(tt);
			return new z(function(t, n) {
				e.length === 0 && n(/* @__PURE__ */ AggregateError([]));
				var r = e.length, i = Array(r);
				e.forEach(function(e, a) {
					return z.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[a] = e, --r || n(AggregateError(i));
					});
				});
			});
		}), we.withResolvers) && (z.withResolvers = we.withResolvers);
		var V = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, qe = 0, Je = [], Ye = 0, Xe = 0, Ze = 0;
		function Qe(e, t, n, r) {
			var i = R, a = Object.create(i), t = (a.parent = i, a.ref = 0, a.global = !1, a.id = ++Ze, Me.env, a.env = Te ? {
				Promise: z,
				PromiseProp: {
					value: z,
					configurable: !0,
					writable: !0
				},
				all: z.all,
				race: z.race,
				allSettled: z.allSettled,
				any: z.any,
				resolve: z.resolve,
				reject: z.reject
			} : {}, t && o(a, t), ++i.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, at(a, e, n, r));
			return a.ref === 0 && a.finalize(), t;
		}
		function $e() {
			return V.id ||= ++qe, ++V.awaits, V.echoes += xe, V.id;
		}
		function et() {
			return !!V.awaits && (--V.awaits == 0 && (V.id = 0), V.echoes = V.awaits * xe, !0);
		}
		function tt(e) {
			return V.echoes && e && e.constructor === we ? ($e(), e.then(function(e) {
				return et(), e;
			}, function(e) {
				return et(), H(e);
			})) : e;
		}
		function nt() {
			var e = Je[Je.length - 1];
			Je.pop(), rt(e, !1);
		}
		function rt(e, t) {
			var n, i, a = R;
			(t ? !V.echoes || Ye++ && e === R : !Ye || --Ye && e === R) || queueMicrotask(t ? function(e) {
				++Xe, V.echoes && --V.echoes != 0 || (V.echoes = V.awaits = V.id = 0), Je.push(R), rt(e, !0);
			}.bind(null, e) : nt), e !== R && (R = e, a === Me && (Me.env = it()), Te) && (n = Me.env.Promise, i = e.env, a.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), n.all = i.all, n.race = i.race, n.resolve = i.resolve, n.reject = i.reject, i.allSettled && (n.allSettled = i.allSettled), i.any) && (n.any = i.any);
		}
		function it() {
			var e = r.Promise;
			return Te ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
				all: e.all,
				race: e.race,
				allSettled: e.allSettled,
				any: e.any,
				resolve: e.resolve,
				reject: e.reject
			} : {};
		}
		function at(e, t, n, r, i) {
			var a = R;
			try {
				return rt(e, !0), t(n, r, i);
			} finally {
				rt(a, !1);
			}
		}
		function ot(e, t, n, r) {
			return typeof e == "function" ? function() {
				var i = R;
				n && $e(), rt(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					rt(i, !1), r && queueMicrotask(et);
				}
			} : e;
		}
		function st(e) {
			Promise === we && V.echoes === 0 ? Ye === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		("" + Ce).indexOf("[native code]") === -1 && ($e = et = N);
		var H = z.reject, ct = "￿", U = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", lt = "String expected.", ut = [], dt = "__dbnames", ft = "readonly", pt = "readwrite";
		function mt(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var ht = {
			type: 3,
			lower: -Infinity,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function gt(e) {
			return typeof e != "string" || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return t[e] === void 0 && e in t && delete (t = D(t))[e], t;
			};
		}
		function _t() {
			throw M.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function W(e, t) {
			try {
				var n = vt(e), r = vt(t);
				if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r === "Date" ? -1 : NaN;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var i = yt(e), a = yt(t), o = i.length, s = a.length, c = o < s ? o : s, l = 0; l < c; ++l) if (i[l] !== a[l]) return i[l] < a[l] ? -1 : 1;
						return o === s ? 0 : o < s ? -1 : 1;
					case "Array":
						for (var u = e, d = t, f = u.length, p = d.length, m = f < p ? f : p, h = 0; h < m; ++h) {
							var g = W(u[h], d[h]);
							if (g !== 0) return g;
						}
						return f === p ? 0 : f < p ? -1 : 1;
				}
			} catch {}
			return NaN;
		}
		function vt(e) {
			var t = typeof e;
			return t == "object" && (ArrayBuffer.isView(e) || (t = ne(e)) === "ArrayBuffer") ? "binary" : t;
		}
		function yt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function bt(e, t, n) {
			var r = e.schema.yProps;
			return r ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(r.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		St.prototype.execute = function(e) {
			var t = this["@@propmod"];
			if (t.add !== void 0) {
				var r = t.add;
				if (a(r)) return n(n([], a(e) ? e : [], !0), r, !0).sort();
				if (typeof r == "number") return (Number(e) || 0) + r;
				if (typeof r == "bigint") try {
					return BigInt(e) + r;
				} catch {
					return BigInt(0) + r;
				}
				throw TypeError(`Invalid term ${r}`);
			}
			if (t.remove !== void 0) {
				var i = t.remove;
				if (a(i)) return a(e) ? e.filter(function(e) {
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
			return r = (r = t.replacePrefix)?.[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
		};
		var xt = St;
		function St(e) {
			this["@@propmod"] = e;
		}
		function Ct(e, t) {
			for (var n = i(t), r = n.length, a = !1, o = 0; o < r; ++o) {
				var s = n[o], c = t[s], l = b(e, s);
				c instanceof xt ? (x(e, s, c.execute(l)), a = !0) : l !== c && (x(e, s, c), a = !0);
			}
			return a;
		}
		G.prototype._trans = function(e, t, n) {
			var r = this._tx || R.trans, i = this.name, a = L && typeof console < "u" && console.createTask && console.createTask(`Dexie: ${e === "readonly" ? "read" : "write"} ${this.name}`);
			function o(e, n, r) {
				if (r.schema[i]) return t(r.idbtrans, r);
				throw new M.NotFound("Table " + i + " not part of transaction");
			}
			var s = Ue();
			try {
				var c = r && r.db._novip === this.db._novip ? r === R.trans ? r._promise(e, o, n) : Qe(function() {
					return r._promise(e, o, n);
				}, {
					trans: r,
					transless: R.transless || R
				}) : function e(t, n, r, i) {
					if (t.idbdb && (t._state.openComplete || R.letThrough || t._vip)) {
						var a = t._createTransaction(n, r, t._dbSchema);
						try {
							a.create(), t._state.PR1398_maxLoop = 3;
						} catch (a) {
							return a.name === de.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
								return e(t, n, r, i);
							})) : H(a);
						}
						return a._promise(n, function(e, t) {
							return Qe(function() {
								return R.trans = a, i(e, t, a);
							});
						}).then(function(e) {
							if (n === "readwrite") try {
								a.idbtrans.commit();
							} catch {}
							return n === "readonly" ? e : a._completion.then(function() {
								return e;
							});
						});
					}
					if (t._state.openComplete) return H(new M.DatabaseClosed(t._state.dbOpenError));
					if (!t._state.isBeingOpened) {
						if (!t._state.autoOpen) return H(new M.DatabaseClosed());
						t.open().catch(N);
					}
					return t._state.dbReadyPromise.then(function() {
						return e(t, n, r, i);
					});
				}(this.db, e, [this.name], o);
				return a && (c._consoleTask = a, c = c.catch(function(e) {
					return console.trace(e), H(e);
				})), c;
			} finally {
				s && We();
			}
		}, G.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : e == null ? H(new M.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, G.prototype.where = function(e) {
			if (typeof e == "string") return new this.db.WhereClause(this, e);
			if (a(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
			var t = i(e);
			if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
			var n = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
				if (e.compound && t.every(function(t) {
					return 0 <= e.keyPath.indexOf(t);
				})) {
					for (var n = 0; n < t.length; ++n) if (t.indexOf(e.keyPath[n]) === -1) return !1;
					return !0;
				}
				return !1;
			}).sort(function(e, t) {
				return e.keyPath.length - t.keyPath.length;
			})[0];
			if (n && this.db._maxKey !== ct) return s = n.keyPath.slice(0, t.length), this.where(s).equals(s.map(function(t) {
				return e[t];
			}));
			!n && L && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join("+")}]`);
			var r = this.schema.idxByName;
			function o(e, t) {
				return W(e, t) === 0;
			}
			var s = t.reduce(function(t, n) {
				var i = t[0], t = t[1], s = r[n], c = e[n];
				return [i || s, i || !s ? mt(t, s && s.multi ? function(e) {
					return e = b(e, n), a(e) && e.some(function(e) {
						return o(c, e);
					});
				} : function(e) {
					return o(c, b(e, n));
				}) : t];
			}, [null, null]), c = s[0], s = s[1];
			return c ? this.where(c.name).equals(e[c.keyPath]).filter(s) : n ? this.filter(s) : this.where(t).equals("");
		}, G.prototype.filter = function(e) {
			return this.toCollection().and(e);
		}, G.prototype.count = function(e) {
			return this.toCollection().count(e);
		}, G.prototype.offset = function(e) {
			return this.toCollection().offset(e);
		}, G.prototype.limit = function(e) {
			return this.toCollection().limit(e);
		}, G.prototype.each = function(e) {
			return this.toCollection().each(e);
		}, G.prototype.toArray = function(e) {
			return this.toCollection().toArray(e);
		}, G.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this));
		}, G.prototype.orderBy = function(e) {
			return new this.db.Collection(new this.db.WhereClause(this, a(e) ? `[${e.join("+")}]` : e));
		}, G.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, G.prototype.mapToClass = function(t) {
			for (var n = this.db, r = this.name, i = ((this.schema.mappedClass = t).prototype instanceof _t && (t = ((t) => {
				var i = s, a = t;
				if (typeof a != "function" && a !== null) throw TypeError("Class extends value " + String(a) + " is not a constructor or null");
				function o() {
					this.constructor = i;
				}
				function s() {
					return t !== null && t.apply(this, arguments) || this;
				}
				return e(i, a), i.prototype = a === null ? Object.create(a) : (o.prototype = a.prototype, new o()), Object.defineProperty(s.prototype, "db", {
					get: function() {
						return n;
					},
					enumerable: !1,
					configurable: !0
				}), s.prototype.table = function() {
					return r;
				}, s;
			})(t)), /* @__PURE__ */ new Set()), a = t.prototype; a; a = s(a)) Object.getOwnPropertyNames(a).forEach(function(e) {
				return i.add(e);
			});
			function o(e) {
				if (!e) return e;
				var n, r = Object.create(t.prototype);
				for (n in e) if (!i.has(n)) try {
					r[n] = e[n];
				} catch {}
				return r;
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o, this.hook("reading", o), t;
		}, G.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, G.prototype.add = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = gt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: t == null ? null : [t],
					values: [o]
				});
			}).then(function(e) {
				return e.numFailures ? z.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, G.prototype.upsert = function(e, t) {
			var n = this, r = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(i) {
				return n.core.get({
					trans: i,
					key: e
				}).then(function(a) {
					var o = a ?? {};
					return Ct(o, t), r && x(o, r, e), n.core.mutate({
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
						return e.numFailures ? z.reject(e.failures[0]) : !!a;
					});
				});
			});
		}, G.prototype.update = function(e, t) {
			return typeof e != "object" || a(e) ? this.where(":id").equals(e).modify(t) : (e = b(e, this.schema.primKey.keyPath)) === void 0 ? H(new M.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, G.prototype.put = function(e, t) {
			var n = this, r = this.schema.primKey, i = r.auto, a = r.keyPath, o = e;
			return a && i && (o = gt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [o],
					keys: t == null ? null : [t]
				});
			}).then(function(e) {
				return e.numFailures ? z.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					x(e, a, t);
				} catch {}
				return t;
			});
		}, G.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: [e]
				}).then(function(n) {
					return bt(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? z.reject(e.failures[0]) : void 0;
				});
			});
		}, G.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: ht
				}).then(function(t) {
					return bt(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? z.reject(e.failures[0]) : void 0;
			});
		}, G.prototype.bulkGet = function(e) {
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
		}, G.prototype.bulkAdd = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new M.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new M.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(gt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new ue(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, n);
				});
			});
		}, G.prototype.bulkPut = function(e, t, n) {
			var r = this, i = Array.isArray(t) ? t : void 0, a = (n ||= i ? void 0 : t) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n = r.schema.primKey, o = n.auto, n = n.keyPath;
				if (n && i) throw new M.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new M.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length, o = n && o ? e.map(gt(n)) : e;
				return r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: o,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (t === 0) return a ? e.results : e.lastResult;
					throw new ue(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, n);
				});
			});
		}, G.prototype.bulkUpdate = function(e) {
			var t = this, n = this.core, r = e.map(function(e) {
				return e.key;
			}), i = e.map(function(e) {
				return e.changes;
			}), a = [];
			return this._trans("readwrite", function(o) {
				return n.getMany({
					trans: o,
					keys: r,
					cache: "clone"
				}).then(function(s) {
					var c = [], l = [], u = (e.forEach(function(e, n) {
						var r = e.key, i = e.changes, o = s[n];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var f = d[u], p = i[f];
								if (f === t.schema.primKey.keyPath) {
									if (W(p, r) !== 0) throw new M.Constraint("Cannot update primary key in bulkUpdate()");
								} else x(o, f, p);
							}
							a.push(n), c.push(r), l.push(o);
						}
					}), c.length);
					return n.mutate({
						trans: o,
						type: "put",
						keys: c,
						values: l,
						updates: {
							keys: r,
							changeSpecs: i
						}
					}).then(function(e) {
						var n = e.numFailures, r = e.failures;
						if (n === 0) return u;
						for (var i = 0, o = Object.keys(r); i < o.length; i++) {
							var s, c = o[i], l = a[Number(c)];
							l != null && (s = r[c], delete r[c], r[l] = s);
						}
						throw new ue(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`, r);
					});
				});
			});
		}, G.prototype.bulkDelete = function(e) {
			var t = this, n = e.length;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: e
				}).then(function(n) {
					return bt(t, e, n);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.failures;
				if (r === 0) return e.lastResult;
				throw new ue(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, i);
			});
		};
		var wt = G;
		function G() {}
		function Tt(e) {
			function t(t, r) {
				if (r) {
					for (var i = arguments.length, a = Array(i - 1); --i;) a[i - 1] = arguments[i];
					return n[t].subscribe.apply(null, a), e;
				}
				if (typeof t == "string") return n[t];
			}
			var n = {};
			t.addEventType = s;
			for (var r = 1, o = arguments.length; r < o; ++r) s(arguments[r]);
			return t;
			function s(e, r, o) {
				var c, l;
				if (typeof e != "object") return r ||= I, l = {
					subscribers: [],
					fire: o ||= N,
					subscribe: function(e) {
						l.subscribers.indexOf(e) === -1 && (l.subscribers.push(e), l.fire = r(l.fire, e));
					},
					unsubscribe: function(e) {
						l.subscribers = l.subscribers.filter(function(t) {
							return t !== e;
						}), l.fire = l.subscribers.reduce(r, o);
					}
				}, n[e] = t[e] = l;
				i(c = e).forEach(function(e) {
					var t = c[e];
					if (a(t)) s(e, c[e][0], c[e][1]);
					else {
						if (t !== "asap") throw new M.InvalidArgument("Invalid event config");
						var n = s(e, me, function() {
							for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
							n.subscribers.forEach(function(e) {
								y(function() {
									e.apply(null, t);
								});
							});
						});
					}
				});
			}
		}
		function Et(e, t) {
			return p(t).from({ prototype: e }), t;
		}
		function Dt(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function Ot(e, t) {
			e.filter = mt(e.filter, t);
		}
		function kt(e, t, n) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return mt(r(), t());
			} : t, e.justLimit = n && !r;
		}
		function At(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (n) return n;
			throw new M.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function jt(e, t, n) {
			var r = At(e, t.schema);
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
		function Mt(e, t, n, r) {
			var i, a, o = e.replayFilter ? mt(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (i = {}, a = function(e, n, r) {
				var a, s;
				o && !o(n, r, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ((s = "" + (a = n.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(a)), l(i, s)) || (i[s] = !0, t(e, n, r));
			}, Promise.all([e.or._iterate(a, n), Nt(jt(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])) : Nt(jt(e, r, n), mt(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
		}
		function Nt(e, t, n, r) {
			var i = B(r ? function(e, t, i) {
				return n(r(e), t, i);
			} : n);
			return e.then(function(e) {
				if (e) return e.start(function() {
					var n = function() {
						return e.continue();
					};
					t && !t(e, function(e) {
						return n = e;
					}, function(t) {
						e.stop(t), n = N;
					}, function(t) {
						e.fail(t), n = N;
					}) || i(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		K.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, H.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, K.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, H.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, K.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = mt(t.algorithm, e);
		}, K.prototype._iterate = function(e, t) {
			return Mt(this._ctx, e, t, this._ctx.table.core);
		}, K.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && o(n, e), t._ctx = n, t;
		}, K.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, K.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return Mt(t, e, n, t.table.core);
			});
		}, K.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r = t._ctx, i = r.table.core;
				return Dt(r, !0) ? i.count({
					trans: e,
					query: {
						index: At(r, i.schema),
						range: r.range
					}
				}).then(function(e) {
					return Math.min(e, r.limit);
				}) : (n = 0, Mt(r, function() {
					return ++n, !1;
				}, e, i).then(function() {
					return n;
				}));
			}).then(e);
		}, K.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[r];
			}
			var o = this._ctx.dir === "next" ? 1 : -1;
			function s(e, t) {
				return W(a(e, i), a(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.sort(s);
			}).then(t);
		}, K.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, r, i, a = t._ctx;
				return a.dir === "next" && Dt(a, !0) && 0 < a.limit ? (n = a.valueMapper, r = At(a, a.table.core.schema), a.table.core.query({
					trans: e,
					limit: a.limit,
					values: !0,
					query: {
						index: r,
						range: a.range
					}
				}).then(function(e) {
					return e = e.result, n ? e.map(n) : e;
				})) : (i = [], Mt(a, function(e) {
					return i.push(e);
				}, e, a.table.core).then(function() {
					return i;
				}));
			}, e);
		}, K.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, Dt(t) ? kt(t, function() {
				var t = e;
				return function(e, n) {
					return t === 0 || (t === 1 ? --t : n(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : kt(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, K.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), kt(this._ctx, function() {
				var t = e;
				return function(e, n, r) {
					return --t <= 0 && n(r), 0 <= t;
				};
			}, !0), this;
		}, K.prototype.until = function(e, t) {
			return Ot(this._ctx, function(n, r, i) {
				return !e(n.value) || (r(i), t);
			}), this;
		}, K.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, K.prototype.last = function(e) {
			return this.reverse().first(e);
		}, K.prototype.filter = function(e) {
			var t;
			return Ot(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = mt(t.isMatch, e), this;
		}, K.prototype.and = function(e) {
			return this.filter(e);
		}, K.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, K.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, K.prototype.desc = function() {
			return this.reverse();
		}, K.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, K.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, K.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, K.prototype.keys = function(e) {
			var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, K.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (t.dir === "next" && Dt(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = At(t, t.table.core.schema);
				return t.table.core.query({
					trans: e,
					values: !1,
					limit: t.limit,
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
		}, K.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, K.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, K.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, K.prototype.distinct = function() {
			var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
			return t && t.multi && (e = {}, Ot(this._ctx, function(t) {
				var t = t.primaryKey.toString(), n = l(e, t);
				return e[t] = !0, !n;
			})), this;
		}, K.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(r) {
				function a(e, t) {
					var n = t.failures;
					p += e - t.numFailures;
					for (var r = 0, a = i(n); r < a.length; r++) {
						var o = a[r];
						f.push(n[o]);
					}
				}
				var o = typeof e == "function" ? e : function(t) {
					return Ct(t, e);
				}, s = n.table.core, c = s.schema.primaryKey, l = c.outbound, u = c.extractKey, d = 200, c = t.db._options.modifyChunkSize, f = (c && (d = typeof c == "object" ? c[s.name] || c["*"] || 200 : c), []), p = 0, m = [], h = e === Ft;
				return t.clone().primaryKeys().then(function(t) {
					function i(f) {
						var p = Math.min(d, t.length - f), m = t.slice(f, f + p);
						return (h ? Promise.resolve([]) : s.getMany({
							trans: r,
							keys: m,
							cache: "immutable"
						})).then(function(g) {
							var _ = [], v = [], y = l ? [] : null, b = h ? m : [];
							if (!h) for (var x = 0; x < p; ++x) {
								var S = g[x], C = {
									value: D(S),
									primKey: t[f + x]
								};
								!1 !== o.call(C, C.value, C) && (C.value == null ? b.push(t[f + x]) : l || W(u(S), u(C.value)) === 0 ? (v.push(C.value), l && y.push(t[f + x])) : (b.push(t[f + x]), _.push(C.value)));
							}
							return Promise.resolve(0 < _.length && s.mutate({
								trans: r,
								type: "add",
								values: _
							}).then(function(e) {
								for (var t in e.failures) b.splice(parseInt(t), 1);
								a(_.length, e);
							})).then(function() {
								return (0 < v.length || c && typeof e == "object") && s.mutate({
									trans: r,
									type: "put",
									keys: y,
									values: v,
									criteria: c,
									changeSpec: typeof e != "function" && e,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return a(v.length, e);
								});
							}).then(function() {
								return (0 < b.length || c && h) && s.mutate({
									trans: r,
									type: "delete",
									keys: b,
									criteria: c,
									isAdditionalChunk: 0 < f
								}).then(function(e) {
									return bt(n.table, b, e);
								}).then(function(e) {
									return a(b.length, e);
								});
							}).then(function() {
								return t.length > f + p && i(f + d);
							});
						});
					}
					var c = Dt(n) && n.limit === Infinity && (typeof e != "function" || h) && {
						index: n.index,
						range: n.range
					};
					return i(0).then(function() {
						if (0 < f.length) throw new le("Error modifying one or more objects", f, p, m);
						return t.length;
					});
				});
			});
		}, K.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !Dt(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Ft) : this._write(function(n) {
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
						var n = e.failures, e = e.numFailures;
						if (e) throw new le("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var Pt = K;
		function K() {}
		var Ft = function(e, t) {
			return t.value = null;
		};
		function It(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Lt(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function q(e, t, n) {
			return e = e instanceof Ht ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
		}
		function Rt(e) {
			return new e.Collection(e, function() {
				return Vt("");
			}).limit(0);
		}
		function zt(e, t, n, r) {
			var i, a, o, s, c, l, u, d = n.length;
			if (!n.every(function(e) {
				return typeof e == "string";
			})) return q(e, lt);
			function f(e) {
				i = e === "next" ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = e === "next" ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = e === "next" ? It : Lt;
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
				}), u = (l = e) === "next" ? "" : r;
			}
			f("next");
			var e = new e.Collection(e, function() {
				return Bt(s[0], c[d - 1] + r);
			}), p = (e._ondirectionchange = function(e) {
				f(e);
			}, 0);
			return e._addAlgorithm(function(e, n, r) {
				var i = e.key;
				if (typeof i == "string") {
					var f = a(i);
					if (t(f, c, p)) return !0;
					for (var m = null, h = p; h < d; ++h) {
						var g = ((e, t, n, r, i, a) => {
							for (var o = Math.min(e.length, r.length), s = -1, c = 0; c < o; ++c) {
								var l = t[c];
								if (l !== r[c]) return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : 0 <= s ? e.substr(0, s) + t[s] + n.substr(s + 1) : null;
								i(e[c], l) < 0 && (s = c);
							}
							return o < r.length && a === "next" ? e + n.substr(e.length) : o < e.length && a === "prev" ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1);
						})(i, f, s[h], c[h], o, l);
						g === null && m === null ? p = h + 1 : (m === null || 0 < o(m, g)) && (m = g);
					}
					n(m === null ? r : function() {
						e.continue(m + u);
					});
				}
				return !1;
			}), e;
		}
		function Bt(e, t, n, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: r
			};
		}
		function Vt(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		Object.defineProperty(J.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), J.prototype.between = function(e, t, n, r) {
			n = !1 !== n, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Rt(this) : new this.Collection(this, function() {
					return Bt(e, t, !n, !r);
				});
			} catch {
				return q(this, U);
			}
		}, J.prototype.equals = function(e) {
			return e == null ? q(this, U) : new this.Collection(this, function() {
				return Vt(e);
			});
		}, J.prototype.above = function(e) {
			return e == null ? q(this, U) : new this.Collection(this, function() {
				return Bt(e, void 0, !0);
			});
		}, J.prototype.aboveOrEqual = function(e) {
			return e == null ? q(this, U) : new this.Collection(this, function() {
				return Bt(e, void 0, !1);
			});
		}, J.prototype.below = function(e) {
			return e == null ? q(this, U) : new this.Collection(this, function() {
				return Bt(void 0, e, !1, !0);
			});
		}, J.prototype.belowOrEqual = function(e) {
			return e == null ? q(this, U) : new this.Collection(this, function() {
				return Bt(void 0, e);
			});
		}, J.prototype.startsWith = function(e) {
			return typeof e == "string" ? this.between(e, e + ct, !0, !0) : q(this, lt);
		}, J.prototype.startsWithIgnoreCase = function(e) {
			return e === "" ? this.startsWith(e) : zt(this, function(e, t) {
				return e.indexOf(t[0]) === 0;
			}, [e], ct);
		}, J.prototype.equalsIgnoreCase = function(e) {
			return zt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, J.prototype.anyOfIgnoreCase = function() {
			var e = k.apply(O, arguments);
			return e.length === 0 ? Rt(this) : zt(this, function(e, t) {
				return t.indexOf(e) !== -1;
			}, e, "");
		}, J.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = k.apply(O, arguments);
			return e.length === 0 ? Rt(this) : zt(this, function(e, t) {
				return t.some(function(t) {
					return e.indexOf(t) === 0;
				});
			}, e, ct);
		}, J.prototype.anyOf = function() {
			var e, t, n = this, r = k.apply(O, arguments), i = this._cmp;
			try {
				r.sort(i);
			} catch {
				return q(this, U);
			}
			return r.length === 0 ? Rt(this) : ((e = new this.Collection(this, function() {
				return Bt(r[0], r[r.length - 1]);
			}))._ondirectionchange = function(e) {
				i = e === "next" ? n._ascending : n._descending, r.sort(i);
			}, t = 0, e._addAlgorithm(function(e, n, a) {
				for (var o = e.key; 0 < i(o, r[t]);) if (++t === r.length) return n(a), !1;
				return i(o, r[t]) === 0 || (n(function() {
					e.continue(r[t]);
				}), !1);
			}), e);
		}, J.prototype.notEqual = function(e) {
			return this.inAnyRange([[-Infinity, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, J.prototype.noneOf = function() {
			var e = k.apply(O, arguments);
			if (e.length === 0) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch {
				return q(this, U);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-Infinity, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, J.prototype.inAnyRange = function(e, t) {
			var n = this, r = this._cmp, i = this._ascending, a = this._descending, o = this._min, s = this._max;
			if (e.length === 0) return Rt(this);
			if (!e.every(function(e) {
				return e[0] !== void 0 && e[1] !== void 0 && i(e[0], e[1]) <= 0;
			})) return q(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", M.InvalidArgument);
			var c = !t || !1 !== t.includeLowers, l = t && !0 === t.includeUppers, u, d = i;
			function f(e, t) {
				return d(e[0], t[0]);
			}
			try {
				(u = e.reduce(function(e, t) {
					for (var n = 0, i = e.length; n < i; ++n) {
						var a = e[n];
						if (r(t[0], a[1]) < 0 && 0 < r(t[1], a[0])) {
							a[0] = o(a[0], t[0]), a[1] = s(a[1], t[1]);
							break;
						}
					}
					return n === i && e.push(t), e;
				}, [])).sort(f);
			} catch {
				return q(this, U);
			}
			var p = 0, m = l ? function(e) {
				return 0 < i(e, u[p][1]);
			} : function(e) {
				return 0 <= i(e, u[p][1]);
			}, h = c ? function(e) {
				return 0 < a(e, u[p][0]);
			} : function(e) {
				return 0 <= a(e, u[p][0]);
			}, g = m, t = new this.Collection(this, function() {
				return Bt(u[0][0], u[u.length - 1][1], !c, !l);
			});
			return t._ondirectionchange = function(e) {
				d = e === "next" ? (g = m, i) : (g = h, a), u.sort(f);
			}, t._addAlgorithm(function(e, t, r) {
				for (var a, o = e.key; g(o);) if (++p === u.length) return t(r), !1;
				return !m(a = o) && !h(a) || (n._cmp(o, u[p][1]) === 0 || n._cmp(o, u[p][0]) === 0 || t(function() {
					d === i ? e.continue(u[p][0]) : e.continue(u[p][1]);
				}), !1);
			}), t;
		}, J.prototype.startsWithAnyOf = function() {
			var e = k.apply(O, arguments);
			return e.every(function(e) {
				return typeof e == "string";
			}) ? e.length === 0 ? Rt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + ct];
			})) : q(this, "startsWithAnyOf() only works with strings");
		};
		var Ht = J;
		function J() {}
		function Y(e) {
			return B(function(t) {
				return Ut(t), e(t.target.error), !1;
			});
		}
		function Ut(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Wt = "storagemutated", Gt = "x-storagemutated-1", Kt = Tt(null, Wt), qt = (X.prototype._lock = function() {
			return v(!R.global), ++this._reculock, this._reculock !== 1 || R.global || (R.lockOwnerFor = this), this;
		}, X.prototype._unlock = function() {
			if (v(!R.global), --this._reculock == 0) for (R.global || (R.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					at(e[1], e[0]);
				} catch {}
			}
			return this;
		}, X.prototype._locked = function() {
			return this._reculock && R.lockOwnerFor !== this;
		}, X.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, r = this.db._state.dbOpenError;
				if (v(!this.idbtrans), !e && !n) switch (r && r.name) {
					case "DatabaseClosedError": throw new M.DatabaseClosed(r);
					case "MissingAPIError": throw new M.MissingAPI(r.message, r);
					default: throw new M.OpenFailed(r);
				}
				if (!this.active) throw new M.TransactionInactive();
				v(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = B(function(n) {
					Ut(n), t._reject(e.error);
				}), e.onabort = B(function(n) {
					Ut(n), t.active && t._reject(new M.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = B(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Kt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, X.prototype._promise = function(e, t, n) {
			var r, i = this;
			return e === "readwrite" && this.mode !== "readwrite" ? H(new M.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new z(function(r, a) {
				i._blockedFuncs.push([function() {
					i._promise(e, t, n).then(r, a);
				}, R]);
			}) : n ? Qe(function() {
				var e = new z(function(e, n) {
					i._lock();
					var r = t(e, n, i);
					r && r.then && r.then(e, n);
				});
				return e.finally(function() {
					return i._unlock();
				}), e._lib = !0, e;
			}) : ((r = new z(function(e, n) {
				var r = t(e, n, i);
				r && r.then && r.then(e, n);
			}))._lib = !0, r) : H(new M.TransactionInactive());
		}, X.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, X.prototype.waitFor = function(e) {
			var t, n = this._root(), r = z.resolve(e), i = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return r;
			}) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-Infinity).onsuccess = e);
			}()), n._waitingFor);
			return new z(function(e, t) {
				r.then(function(t) {
					return n._waitingQueue.push(B(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(B(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === i && (n._waitingFor = null);
				});
			});
		}, X.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new M.Abort()));
		}, X.prototype.table = function(e) {
			var t = this._memoizedTables ||= {};
			if (l(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new M.NotFound("Table " + e + " not part of transaction");
		}, X);
		function X() {}
		function Jt(e, t, n, r, i, a, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: r,
				auto: i,
				compound: a,
				src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Yt(t),
				type: s
			};
		}
		function Yt(e) {
			return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Xt(e, t, n) {
			return {
				name: e,
				primKey: t,
				indexes: n,
				mappedClass: null,
				idxByName: (r = function(e) {
					return [e.name, e];
				}, n.reduce(function(e, t, n) {
					return t = r(t, n), t && (e[t[0]] = t[1]), e;
				}, {}))
			};
			var r;
		}
		var Zt = function(e) {
			try {
				return e.only([[]]), Zt = function() {
					return [[]];
				}, [[]];
			} catch {
				return Zt = function() {
					return ct;
				}, ct;
			}
		};
		function Qt(e) {
			return e == null ? function() {} : typeof e == "string" ? (t = e).split(".").length === 1 ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function $t(e) {
			return [].slice.call(e);
		}
		var en = 0;
		function tn(e) {
			return e == null ? ":id" : typeof e == "string" ? e : `[${e.join("+")}]`;
		}
		function nn(e, t, n) {
			function r(e) {
				if (e.type === 3) return null;
				if (e.type === 4) throw Error("Cannot convert never type to IDBKeyRange");
				var n = e.lower, r = e.upper, i = e.lowerOpen, e = e.upperOpen;
				return n === void 0 ? r === void 0 ? null : t.upperBound(r, !!e) : r === void 0 ? t.lowerBound(n, !!i) : t.bound(n, r, !!i, !!e);
			}
			function i(e) {
				var t, n = e.name;
				return {
					name: n,
					schema: e,
					mutate: function(e) {
						var t = e.trans, i = e.type, a = e.keys, o = e.values, s = e.range;
						return new Promise(function(e, c) {
							e = B(e);
							var l = t.objectStore(n), u = l.keyPath == null, d = i === "put" || i === "add";
							if (!d && i !== "delete" && i !== "deleteRange") throw Error("Invalid operation type: " + i);
							var f, p = (a || o || { length: 1 }).length;
							if (a && o && a.length !== o.length) throw Error("Given keys array must have same length as given values array.");
							if (p === 0) return e({
								numFailures: 0,
								failures: {},
								results: [],
								lastResult: void 0
							});
							function m(e) {
								++_, Ut(e);
							}
							var h = [], g = [], _ = 0;
							if (i === "deleteRange") {
								if (s.type === 4) return e({
									numFailures: _,
									failures: g,
									results: [],
									lastResult: void 0
								});
								s.type === 3 ? h.push(f = l.clear()) : h.push(f = l.delete(r(s)));
							} else {
								var u = d ? u ? [o, a] : [o, null] : [a, null], v = u[0], y = u[1];
								if (d) for (var b = 0; b < p; ++b) h.push(f = y && y[b] !== void 0 ? l[i](v[b], y[b]) : l[i](v[b])), f.onerror = m;
								else for (b = 0; b < p; ++b) h.push(f = l[i](v[b])), f.onerror = m;
							}
							function x(t) {
								t = t.target.result, h.forEach(function(e, t) {
									return e.error != null && (g[t] = e.error);
								}), e({
									numFailures: _,
									failures: g,
									results: i === "delete" ? a : h.map(function(e) {
										return e.result;
									}),
									lastResult: t
								});
							}
							f.onerror = function(e) {
								m(e), x(e);
							}, f.onsuccess = x;
						});
					},
					getMany: function(e) {
						var t = e.trans, r = e.keys;
						return new Promise(function(e, i) {
							e = B(e);
							for (var a, o = t.objectStore(n), s = r.length, c = Array(s), l = 0, u = 0, d = function(t) {
								t = t.target, c[t._pos] = t.result, ++u === l && e(c);
							}, f = Y(i), p = 0; p < s; ++p) r[p] != null && ((a = o.get(r[p]))._pos = p, a.onsuccess = d, a.onerror = f, ++l);
							l === 0 && e(c);
						});
					},
					get: function(e) {
						var t = e.trans, r = e.key;
						return new Promise(function(e, i) {
							e = B(e);
							var a = t.objectStore(n).get(r);
							a.onsuccess = function(t) {
								return e(t.target.result);
							}, a.onerror = Y(i);
						});
					},
					query: (t = c, function(e) {
						return new Promise(function(i, a) {
							i = B(i);
							var o, s, c, l = e.trans, u = e.values, d = e.limit, f = e.query, p = d === Infinity ? void 0 : d, m = f.index, f = f.range, l = l.objectStore(n), l = m.isPrimaryKey ? l : l.index(m.name), m = r(f);
							if (d === 0) return i({ result: [] });
							t ? ((f = u ? l.getAll(m, p) : l.getAllKeys(m, p)).onsuccess = function(e) {
								return i({ result: e.target.result });
							}, f.onerror = Y(a)) : (o = 0, s = !u && "openKeyCursor" in l ? l.openKeyCursor(m) : l.openCursor(m), c = [], s.onsuccess = function(e) {
								var t = s.result;
								return !t || (c.push(u ? t.value : t.primaryKey), ++o === d) ? i({ result: c }) : void t.continue();
							}, s.onerror = Y(a));
						});
					}),
					openCursor: function(e) {
						var t = e.trans, i = e.values, a = e.query, o = e.reverse, s = e.unique;
						return new Promise(function(e, c) {
							e = B(e);
							var l = a.index, u = a.range, d = t.objectStore(n), d = l.isPrimaryKey ? d : d.index(l.name), l = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", f = !i && "openKeyCursor" in d ? d.openKeyCursor(r(u), l) : d.openCursor(r(u), l);
							f.onerror = Y(c), f.onsuccess = B(function(n) {
								var r, i, a, o, s = f.result;
								s ? (s.___id = ++en, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), a = s.advance.bind(s), o = function() {
									throw Error("Cursor not stopped");
								}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
									throw Error("Cursor not started");
								}, s.fail = B(c), s.next = function() {
									var e = this, t = 1;
									return this.start(function() {
										return t-- ? e.continue() : e.stop();
									}).then(function() {
										return e;
									});
								}, s.start = function(e) {
									function t() {
										if (f.result) try {
											e();
										} catch (e) {
											s.fail(e);
										}
										else s.done = !0, s.start = function() {
											throw Error("Cursor behind last entry");
										}, s.stop();
									}
									var n = new Promise(function(e, t) {
										e = B(e), f.onerror = Y(t), s.fail = t, s.stop = function(t) {
											s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
										};
									});
									return f.onsuccess = B(function(e) {
										f.onsuccess = t, t();
									}), s.continue = r, s.continuePrimaryKey = i, s.advance = a, t(), n;
								}, e(s)) : e(null);
							}, c);
						});
					},
					count: function(e) {
						var t = e.query, i = e.trans, a = t.index, o = t.range;
						return new Promise(function(e, t) {
							var s = i.objectStore(n), s = a.isPrimaryKey ? s : s.index(a.name), c = r(o), c = c ? s.count(c) : s.count();
							c.onsuccess = B(function(t) {
								return e(t.target.result);
							}), c.onerror = Y(t);
						});
					}
				};
			}
			o = n, s = $t((n = e).objectStoreNames);
			var o, n = {
				schema: {
					name: n.name,
					tables: s.map(function(e) {
						return o.objectStore(e);
					}).map(function(e) {
						var t = e.keyPath, n = e.autoIncrement, r = a(t), i = {}, r = {
							name: e.name,
							primaryKey: {
								name: null,
								isPrimaryKey: !0,
								outbound: t == null,
								compound: r,
								keyPath: t,
								autoIncrement: n,
								unique: !0,
								extractKey: Qt(t)
							},
							indexes: $t(e.indexNames).map(function(t) {
								return e.index(t);
							}).map(function(e) {
								var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, t = {
									name: t,
									compound: a(e),
									keyPath: e,
									unique: n,
									multiEntry: r,
									extractKey: Qt(e)
								};
								return i[tn(e)] = t;
							}),
							getIndexByKeyPath: function(e) {
								return i[tn(e)];
							}
						};
						return i[":id"] = r.primaryKey, t != null && (i[tn(t)] = r.primaryKey), r;
					})
				},
				hasGetAll: 0 < s.length && "getAll" in o.objectStore(s[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
			}, s = n.schema, c = n.hasGetAll, n = s.tables.map(i), l = {};
			return n.forEach(function(e) {
				return l[e.name] = e;
			}), {
				stack: "dbcore",
				transaction: e.transaction.bind(e),
				table: function(e) {
					if (l[e]) return l[e];
					throw Error(`Table '${e}' not found`);
				},
				MIN_KEY: -Infinity,
				MAX_KEY: Zt(t),
				schema: s
			};
		}
		function rn(e, n, r, i) {
			return r = r.IDBKeyRange, n = nn(n, r, i), { dbcore: e.dbcore.reduce(function(e, n) {
				return n = n.create, t(t({}, e), n(e));
			}, n) };
		}
		function an(e, t) {
			var n = t.db, n = rn(e._middlewares, n, e._deps, t);
			e.core = n.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table) && (e[n].core = t.core);
			});
		}
		function on(e, t, n, r) {
			n.forEach(function(n) {
				var i = r[n];
				t.forEach(function(t) {
					var r = function e(t, n) {
						return m(t, n) || (t = s(t)) && e(t, n);
					}(t, n);
					(!r || "value" in r && r.value === void 0) && (t === e.Transaction.prototype || t instanceof e.Transaction ? f(t, n, {
						get: function() {
							return this.table(n);
						},
						set: function(e) {
							d(this, n, {
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
		function sn(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function cn(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function ln(e, t, n, r) {
			var a = e._dbSchema, o = (n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Xt("$meta", _n("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, a)), s = (o.create(n), o._completion.catch(r), o._reject.bind(o)), c = R.transless || R;
			Qe(function() {
				if (R.trans = o, R.transless = c, t !== 0) return an(e, n), l = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return e ?? l;
				}) : z.resolve(l)).then(function(t) {
					var r = e, a = t, s = o, c = n, l = [], t = r._versions, u = r._dbSchema = hn(0, r.idbdb, c);
					return (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length === 0 ? z.resolve() : (t.forEach(function(e) {
						l.push(function() {
							var t, n, o, l = u, d = e._cfg.dbschema, f = (gn(r, l, c), gn(r, d, c), u = r._dbSchema = d, dn(l, d)), p = (f.add.forEach(function(e) {
								fn(c, e[0], e[1].primKey, e[1].indexes);
							}), f.change.forEach(function(e) {
								if (e.recreate) throw new M.Upgrade("Not yet support for changing primary key");
								var t = c.objectStore(e.name);
								e.add.forEach(function(e) {
									return mn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), mn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (p && e._cfg.version > a) return an(r, c), s._memoizedTables = {}, t = S(d), f.del.forEach(function(e) {
								t[e] = l[e];
							}), sn(r, [r.Transaction.prototype]), on(r, [r.Transaction.prototype], i(t), t), s.schema = t, (n = A(p)) && $e(), d = z.follow(function() {
								var e;
								(o = p(s)) && n && (e = et.bind(null, null), o.then(e, e));
							}), o && typeof o.then == "function" ? z.resolve(o) : d.then(function() {
								return o;
							});
						}), l.push(function(t) {
							var n = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return n[e] == null && i.db.deleteObjectStore(e);
							}), sn(r, [r.Transaction.prototype]), on(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), l.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return e !== "$meta";
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return l.length ? z.resolve(l.shift()(s.idbtrans)).then(e) : z.resolve();
					}().then(function() {
						pn(u, c);
					}));
				}).catch(s);
				var r, l;
				i(a).forEach(function(e) {
					fn(n, e, a[e].primKey, a[e].indexes);
				}), an(e, n), z.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
			});
		}
		function un(e, t) {
			pn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
			var n = hn(0, e.idbdb, t);
			gn(e, e._dbSchema, t);
			for (var r = 0, i = dn(n, e._dbSchema).change; r < i.length; r++) {
				var a = ((e) => {
					if (e.change.length || e.recreate) return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`), { value: void 0 };
					var n = t.objectStore(e.name);
					e.add.forEach(function(t) {
						L && console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`), mn(n, t);
					});
				})(i[r]);
				if (typeof a == "object") return a.value;
			}
		}
		function dn(e, t) {
			var n, r = {
				del: [],
				add: [],
				change: []
			};
			for (n in e) t[n] || r.del.push(n);
			for (n in t) {
				var i = e[n], a = t[n];
				if (i) {
					var o = {
						name: n,
						def: a,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) o.recreate = !0, r.change.push(o);
					else {
						var s = i.idxByName, c = a.idxByName, l = void 0;
						for (l in s) c[l] || o.del.push(l);
						for (l in c) {
							var u = s[l], d = c[l];
							u ? u.src !== d.src && o.change.push(d) : o.add.push(d);
						}
						(0 < o.del.length || 0 < o.add.length || 0 < o.change.length) && r.change.push(o);
					}
				} else r.add.push([n, a]);
			}
			return r;
		}
		function fn(e, t, n, r) {
			var i = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			r.forEach(function(e) {
				return mn(i, e);
			});
		}
		function pn(e, t) {
			i(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || (L && console.debug("Dexie: Creating missing table", n), fn(t, n, e[n].primKey, e[n].indexes));
			});
		}
		function mn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function hn(e, t, n) {
			var r = {};
			return g(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), i = Jt(Yt(c = t.keyPath), c || "", !0, !1, !!t.autoIncrement, c && typeof c != "string", !0), a = [], o = 0; o < t.indexNames.length; ++o) {
					var s = t.index(t.indexNames[o]), c = s.keyPath, s = Jt(s.name, c, !!s.unique, !!s.multiEntry, !1, c && typeof c != "string", !1);
					a.push(s);
				}
				r[e] = Xt(e, i, a);
			}), r;
		}
		function gn(e, t, n) {
			for (var i = n.db.objectStoreNames, a = 0; a < i.length; ++a) {
				var o = i[a], s = n.objectStore(o);
				e._hasGetAll = "getAll" in s;
				for (var c = 0; c < s.indexNames.length; ++c) {
					var l, u = s.indexNames[c], d = s.index(u).keyPath, d = typeof d == "string" ? d : "[" + g(d).join("+") + "]";
					t[o] && (l = t[o].idxByName[d]) && (l.name = u, delete t[o].idxByName[d], t[o].idxByName[u] = l);
				}
			}
			typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function _n(e) {
			return e.split(",").map(function(e, t) {
				var n = e.split(":"), r = (r = n[1])?.trim(), n = (e = n[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
				return Jt(n, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(i), t === 0, r);
			});
		}
		yn.prototype._createTableSchema = Xt, yn.prototype._parseIndexSyntax = _n, yn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			i(e).forEach(function(r) {
				if (e[r] !== null) {
					var i = n._parseIndexSyntax(e[r]), a = i.shift();
					if (!a) throw new M.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (a.unique = !0, a.multi) throw new M.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new M.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new M.Schema("Index must have a name and cannot be an empty string");
					}), a = n._createTableSchema(r, a, i), t[r] = a;
				}
			});
		}, yn.prototype.stores = function(e) {
			var t = this.db, e = (this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e, t._versions), n = {}, r = {};
			return e.forEach(function(e) {
				o(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r);
			}), t._dbSchema = r, sn(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), on(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, yn.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = ve(this._cfg.contentUpgrade || N, e), this;
		};
		var vn = yn;
		function yn() {}
		function bn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new Q(dt, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function xn(e) {
			return e && typeof e.databases == "function";
		}
		function Sn(e) {
			return Qe(function() {
				return R.letThrough = !0, e();
			});
		}
		function Cn(e) {
			return !("from" in e);
		}
		var Z = function(e, t) {
			var n;
			if (!this) return n = new Z(), e && "d" in e && o(n, e), n;
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function wn(e, t, n) {
			var r = W(t, n);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (Cn(e)) return o(e, {
					from: t,
					to: n,
					d: 1
				});
				var r = e.l, i = e.r;
				if (W(n, e.from) < 0) return r ? wn(r, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				if (0 < W(t, e.to)) return i ? wn(i, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, On(e);
				W(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < W(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && Tn(e, r), i && t && Tn(e, i);
			}
		}
		function Tn(e, t) {
			Cn(t) || function e(t, n) {
				var r = n.from, i = n.l, a = n.r;
				wn(t, r, n.to), i && e(t, i), a && e(t, a);
			}(e, t);
		}
		function En(e, t) {
			var n = Dn(t), r = n.next();
			if (!r.done) for (var i = r.value, a = Dn(e), o = a.next(i.from), s = o.value; !r.done && !o.done;) {
				if (W(s.from, i.to) <= 0 && 0 <= W(s.to, i.from)) return !0;
				W(i.from, s.from) < 0 ? i = (r = n.next(s.from)).value : s = (o = a.next(i.from)).value;
			}
			return !1;
		}
		function Dn(e) {
			var t = Cn(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && W(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || W(e, t.n.to) <= 0) return {
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
		function On(e) {
			var n, r, i, a = ((a = e.r)?.d || 0) - ((a = e.l)?.d || 0), a = 1 < a ? "r" : a < -1 ? "l" : "";
			a && (n = a == "r" ? "l" : "r", r = t({}, e), i = e[a], e.from = i.from, e.to = i.to, e[a] = i[a], r[a] = i[n], (e[n] = r).d = kn(r)), e.d = kn(e);
		}
		function kn(e) {
			var t = e.r, e = e.l;
			return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function An(e, t) {
			return i(t).forEach(function(n) {
				e[n] ? Tn(e[n], t[n]) : e[n] = function e(t) {
					var n, r, i = {};
					for (n in t) l(t, n) && (r = t[n], i[n] = !r || typeof r != "object" || T.has(r.constructor) ? r : e(r));
					return i;
				}(t[n]);
			}), e;
		}
		function jn(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && En(t[n], e[n]);
			});
		}
		u(Z.prototype, ((j = {
			add: function(e) {
				return Tn(this, e), this;
			},
			addKey: function(e) {
				return wn(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return wn(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = Dn(this).next(e).value;
				return t && W(t.from, e) <= 0 && 0 <= W(t.to, e);
			}
		})[re] = function() {
			return Dn(this);
		}, j));
		var Mn = {}, Nn = {}, Pn = !1;
		function Fn(e) {
			An(Nn, e), Pn || (Pn = !0, setTimeout(function() {
				Pn = !1, In(Nn, !(Nn = {}));
			}, 0));
		}
		function In(e, t) {
			t === void 0 && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(Mn); r < i.length; r++) Ln(s = i[r], e, n, t);
			else for (var a in e) {
				var o, s, a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
				a && (o = a[1], a = a[2], s = Mn[`idb://${o}/${a}`]) && Ln(s, e, n, t);
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Ln(e, t, n, r) {
			for (var i = [], a = 0, o = Object.entries(e.queries.query); a < o.length; a++) {
				for (var s = o[a], c = s[0], l = [], u = 0, d = s[1]; u < d.length; u++) {
					var f = d[u];
					jn(t, f.obsSet) ? f.subscribers.forEach(function(e) {
						return n.add(e);
					}) : r && l.push(f);
				}
				r && i.push([c, l]);
			}
			if (r) for (var p = 0, m = i; p < m.length; p++) {
				var h = m[p], c = h[0], l = h[1];
				e.queries.query[c] = l;
			}
		}
		function Rn(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? H(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, a = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new M.DatabaseClosed("db.open() was cancelled");
			}
			function c() {
				return new z(function(r, l) {
					if (s(), !n) throw new M.MissingAPI();
					var u = e.name, p = t.autoSchema || !a ? n.open(u) : n.open(u, a);
					if (!p) throw new M.MissingAPI();
					p.onerror = Y(l), p.onblocked = B(e._fireOnBlocked), p.onupgradeneeded = B(function(r) {
						var i;
						d = p.transaction, t.autoSchema && !e._options.allowEmptyDB ? (p.onerror = Ut, d.abort(), p.result.close(), (i = n.deleteDatabase(u)).onsuccess = i.onerror = B(function() {
							l(new M.NoSuchDatabase(`Database ${u} doesnt exist`));
						})) : (d.onerror = Y(l), i = r.oldVersion > 2 ** 62 ? 0 : r.oldVersion, f = i < 1, e.idbdb = p.result, o && un(e, d), ln(e, i / 10, d, l));
					}, l), p.onsuccess = B(function() {
						d = null;
						var n, s, l, m, h, _, v = e.idbdb = p.result, y = g(v.objectStoreNames);
						if (0 < y.length) try {
							var b = v.transaction((h = y).length === 1 ? h[0] : h, "readonly");
							if (t.autoSchema) _ = v, m = b, (l = e).verno = _.version / 10, m = l._dbSchema = hn(0, _, m), l._storeNames = g(_.objectStoreNames, 0), on(l, [l._allTables], i(m), m);
							else if (gn(e, e._dbSchema, b), s = b, ((s = dn(hn(0, (n = e).idbdb, s), n._dbSchema)).add.length || s.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), v.close(), a = v.version + 1, o = !0, r(c());
							an(e, b);
						} catch {}
						ut.push(e), v.onversionchange = B(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), v.onclose = B(function() {
							e.close({ disableAutoOpen: !1 });
						}), f && (y = e._deps, h = u, xn(_ = y.indexedDB) || h === dt || bn(_, y.IDBKeyRange).put({ name: h }).catch(N)), r();
					}, l);
				}).catch(function(e) {
					switch (e?.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), c();
							break;
						case "VersionError": if (0 < a) return a = 0, c();
					}
					return z.reject(e);
				});
			}
			var l, u = t.dbReadyResolve, d = null, f = !1;
			return z.race([r, (typeof navigator > "u" ? z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(c)]).then(function() {
				return s(), t.onReadyBeingFired = [], z.resolve(Sn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var r;
					if (0 < t.onReadyBeingFired.length) return r = t.onReadyBeingFired.reduce(ve, N), t.onReadyBeingFired = [], z.resolve(Sn(function() {
						return r(e.vip);
					})).then(n);
				});
			}).finally(function() {
				t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(n) {
				t.dbOpenError = n;
				try {
					d && d.abort();
				} catch {}
				return r === t.openCanceller && e._close(), H(n);
			}).finally(function() {
				t.openComplete = !0, u();
			}).then(function() {
				var t;
				return f && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(r) {
						r.name && (t[`idb://${e.name}/${n.name}/${r.name}`] = new Z(-Infinity, [[[]]]));
					}), t[`idb://${e.name}/${n.name}/`] = t[`idb://${e.name}/${n.name}/:dels`] = new Z(-Infinity, [[[]]]);
				}), Kt(Wt).fire(t), In(t, !0)), e;
			});
		}
		function zn(e) {
			function t(t) {
				return e.next(t);
			}
			var n = i(t), r = i(function(t) {
				return e.throw(t);
			});
			function i(e) {
				return function(t) {
					var t = e(t), i = t.value;
					return t.done ? i : i && typeof i.then == "function" ? i.then(n, r) : a(i) ? Promise.all(i).then(n, r) : n(i);
				};
			}
			return i(t)();
		}
		function Bn(e, t, n) {
			for (var r = a(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
			return r;
		}
		var Vn = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(n) {
					var r = e.table(n), n = r.schema, i = {}, a = [];
					function o(e, n, r) {
						var s = tn(e), c = i[s] = i[s] || [], l = e == null ? 0 : typeof e == "string" ? 1 : e.length, u = 0 < n, s = t(t({}, r), {
							name: u ? `${s}(virtual-from:${r.name})` : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: n,
							keyLength: l,
							extractKey: Qt(e),
							unique: !u && r.unique
						});
						return c.push(s), s.isPrimaryKey || a.push(s), 1 < l && o(l === 2 ? e[0] : e.slice(0, l - 1), n + 1, r), c.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), s;
					}
					var s = o(n.primaryKey.keyPath, 0, n.primaryKey);
					i[":id"] = [s];
					for (var c = 0, l = n.indexes; c < l.length; c++) {
						var u = l[c];
						o(u.keyPath, 0, u);
					}
					function d(n) {
						var r, i = n.query.index;
						return i.isVirtual ? t(t({}, n), { query: {
							index: i.lowLevelIndex,
							range: (r = n.query.range, i = i.keyTail, {
								type: r.type === 1 ? 2 : r.type,
								lower: Bn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
								lowerOpen: !0,
								upper: Bn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, r), {
						schema: t(t({}, n), {
							primaryKey: s,
							indexes: a,
							getIndexByKeyPath: function(e) {
								return (e = i[tn(e)]) && e[0];
							}
						}),
						count: function(e) {
							return r.count(d(e));
						},
						query: function(e) {
							return r.query(d(e));
						},
						openCursor: function(t) {
							var n = t.query.index, i = n.keyTail, a = n.keyLength;
							return n.isVirtual ? r.openCursor(d(t)).then(function(e) {
								return e && o(e);
							}) : r.openCursor(t);
							function o(n) {
								return Object.create(n, {
									continue: { value: function(r) {
										r == null ? t.unique ? n.continue(n.key.slice(0, a).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : n.continue() : n.continue(Bn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i));
									} },
									continuePrimaryKey: { value: function(t, r) {
										n.continuePrimaryKey(Bn(t, e.MAX_KEY, i), r);
									} },
									primaryKey: { get: function() {
										return n.primaryKey;
									} },
									key: { get: function() {
										var e = n.key;
										return a === 1 ? e[0] : e.slice(0, a);
									} },
									value: { get: function() {
										return n.value;
									} }
								});
							}
						}
					});
				} });
			}
		};
		function Hn(e, t, n, r) {
			return n ||= {}, r ||= "", i(e).forEach(function(i) {
				var a, o, s;
				l(t, i) ? (a = e[i], o = t[i], typeof a == "object" && typeof o == "object" && a && o ? (s = ne(a)) === ne(o) ? s === "Object" ? Hn(a, o, n, r + i + ".") : a !== o && (n[r + i] = t[i]) : n[r + i] = t[i] : a !== o && (n[r + i] = t[i])) : n[r + i] = void 0;
			}), i(t).forEach(function(i) {
				l(e, i) || (n[r + i] = t[i]);
			}), n;
		}
		function Un(e, t) {
			return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var Wn = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(r) {
					var i = e.table(r), a = i.schema.primaryKey;
					return t(t({}, i), { mutate: function(e) {
						var o = R.trans, s = o.table(r).hook, c = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === N) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "put":
								if (u.fire === N && d.fire === N) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "delete":
								if (c.fire === N) break;
								return o._promise("readwrite", function() {
									return f(e);
								}, !0);
							case "deleteRange":
								if (c.fire === N) break;
								return o._promise("readwrite", function() {
									return function e(n, r, o) {
										return i.query({
											trans: n,
											values: !1,
											query: {
												index: a,
												range: r
											},
											limit: o
										}).then(function(i) {
											var a = i.result;
											return f({
												type: "delete",
												keys: a,
												trans: n
											}).then(function(i) {
												return 0 < i.numFailures ? Promise.reject(i.failures[0]) : a.length < o ? {
													failures: [],
													numFailures: 0,
													lastResult: void 0
												} : e(n, t(t({}, r), {
													lower: a[a.length - 1],
													lowerOpen: !0
												}), o);
											});
										});
									}(e.trans, e.range, 1e4);
								}, !0);
						}
						return i.mutate(e);
						function f(e) {
							var r, o, s, f = R.trans, p = e.keys || Un(a, e);
							if (p) return (e = e.type === "add" || e.type === "put" ? t(t({}, e), { keys: p }) : t({}, e)).type !== "delete" && (e.values = n([], e.values, !0)), e.keys &&= n([], e.keys, !0), r = i, s = p, ((o = e).type === "add" ? Promise.resolve([]) : r.getMany({
								trans: o.trans,
								keys: s,
								cache: "immutable"
							})).then(function(t) {
								var n = p.map(function(n, r) {
									var i, o, s, p = t[r], m = {
										onerror: null,
										onsuccess: null
									};
									return e.type === "delete" ? c.fire.call(m, n, p, f) : e.type === "add" || p === void 0 ? (i = u.fire.call(m, n, e.values[r], f), n == null && i != null && (e.keys[r] = n = i, a.outbound || x(e.values[r], a.keyPath, n))) : (i = Hn(p, e.values[r]), (o = d.fire.call(m, i, n, p, f)) && (s = e.values[r], Object.keys(o).forEach(function(e) {
										l(s, e) ? s[e] = o[e] : x(s, e, o[e]);
									}))), m;
								});
								return i.mutate(e).then(function(r) {
									for (var i = r.failures, a = r.results, o = r.numFailures, r = r.lastResult, s = 0; s < p.length; ++s) {
										var c = (a || p)[s], l = n[s];
										c == null ? l.onerror && l.onerror(i[s]) : l.onsuccess && l.onsuccess(e.type === "put" && t[s] ? e.values[s] : c);
									}
									return {
										failures: i,
										results: a,
										numFailures: o,
										lastResult: r
									};
								}).catch(function(e) {
									return n.forEach(function(t) {
										return t.onerror && t.onerror(e);
									}), Promise.reject(e);
								});
							});
							throw Error("Keys missing");
						}
					} });
				} });
			}
		};
		function Gn(e, t, n) {
			try {
				if (!t || t.keys.length < e.length) return null;
				for (var r = [], i = 0, a = 0; i < t.keys.length && a < e.length; ++i) W(t.keys[i], e[a]) === 0 && (r.push(n ? D(t.values[i]) : t.values[i]), ++a);
				return r.length === e.length ? r : null;
			} catch {
				return null;
			}
		}
		var Kn = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(n) {
					var r = e.table(n);
					return t(t({}, r), {
						getMany: function(e) {
							var t;
							return e.cache ? (t = Gn(e.keys, e.trans._cache, e.cache === "clone")) ? z.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: e.cache === "clone" ? D(t) : t
								}, t;
							}) : r.getMany(e);
						},
						mutate: function(e) {
							return e.type !== "add" && (e.trans._cache = null), r.mutate(e);
						}
					});
				} };
			}
		};
		function qn(e, t) {
			return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
		}
		function Jn(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var Yn = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var n = e.schema.name, r = new Z(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, r) {
						if (R.subscr && n !== "readonly") throw new M.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${R.querier}`);
						return e.transaction(t, n, r);
					},
					table: function(o) {
						function s(t) {
							var t = t.query;
							return [t.index, new Z((t = t.range).lower ?? e.MIN_KEY, t.upper ?? e.MAX_KEY)];
						}
						var c = e.table(o), l = c.schema, u = l.primaryKey, d = l.indexes, f = u.extractKey, p = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), h = t(t({}, c), { mutate: function(t) {
							function i(e) {
								return e = `idb://${n}/${o}/${e}`, h[e] || (h[e] = new Z());
							}
							var s, d, f, p = t.trans, h = t.mutatedParts ||= {}, g = i(""), _ = i(":dels"), v = t.type, y = t.type === "deleteRange" ? [t.range] : t.type === "delete" ? [t.keys] : t.values.length < 50 ? [Un(u, t).filter(function(e) {
								return e;
							}), t.values] : [], b = y[0], y = y[1], x = t.trans._cache;
							return a(b) ? (g.addKeys(b), (v = v === "delete" || b.length === y.length ? Gn(b, x) : null) || _.addKeys(b), (v || y) && (s = i, d = v, f = y, l.indexes.forEach(function(e) {
								var t = s(e.name || "");
								function n(t) {
									return t == null ? null : e.extractKey(t);
								}
								function r(n) {
									e.multiEntry && a(n) ? n.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(n);
								}
								(d || f).forEach(function(e, t) {
									var i = d && n(d[t]), t = f && n(f[t]);
									W(i, t) !== 0 && (i != null && r(i), t != null) && r(t);
								});
							}))) : b ? (y = {
								from: (x = b.lower) ?? e.MIN_KEY,
								to: (v = b.upper) ?? e.MAX_KEY
							}, _.add(y), g.add(y)) : (g.add(r), _.add(r), l.indexes.forEach(function(e) {
								return i(e.name).add(r);
							})), c.mutate(t).then(function(e) {
								return !b || t.type !== "add" && t.type !== "put" || (g.addKeys(e.results), m && m.forEach(function(n) {
									for (var r = t.values.map(function(e) {
										return n.extractKey(e);
									}), a = n.keyPath.findIndex(function(e) {
										return e === u.keyPath;
									}), o = 0, s = e.results.length; o < s; ++o) r[o][a] = e.results[o];
									i(n.name).addKeys(r);
								})), p.mutatedParts = An(p.mutatedParts || {}, h), e;
							});
						} }), g = {
							get: function(e) {
								return [u, new Z(e.key)];
							},
							getMany: function(e) {
								return [u, new Z().addKeys(e.keys)];
							},
							count: s,
							query: s,
							openCursor: s
						};
						return i(g).forEach(function(e) {
							h[e] = function(i) {
								var a = R.subscr, s = !!a, l = qn(R, c) && Jn(e, i) ? i.obsSet = {} : a;
								if (s) {
									var u, a = function(e) {
										return e = `idb://${n}/${o}/${e}`, l[e] || (l[e] = new Z());
									}, d = a(""), m = a(":dels"), s = g[e](i), h = s[0], s = s[1];
									if ((e === "query" && h.isPrimaryKey && !i.values ? m : a(h.name || "")).add(s), !h.isPrimaryKey) {
										if (e !== "count") return u = e === "query" && p && i.values && c.query(t(t({}, i), { values: !1 })), c[e].apply(this, arguments).then(function(t) {
											if (e === "query") {
												if (p && i.values) return u.then(function(e) {
													return e = e.result, d.addKeys(e), t;
												});
												var n = i.values ? t.result.map(f) : t.result;
												(i.values ? d : m).addKeys(n);
											} else {
												var r, a;
												if (e === "openCursor") return a = i.values, (r = t) && Object.create(r, {
													key: { get: function() {
														return m.addKey(r.primaryKey), r.key;
													} },
													primaryKey: { get: function() {
														var e = r.primaryKey;
														return m.addKey(e), e;
													} },
													value: { get: function() {
														return a && d.addKey(r.primaryKey), r.value;
													} }
												});
											}
											return t;
										});
										m.add(r);
									}
								}
								return c[e].apply(this, arguments);
							};
						}), h;
					}
				});
			}
		};
		function Xn(e, n, r) {
			var i;
			return r.numFailures === 0 ? n : n.type === "deleteRange" || (i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1, r.numFailures === i) ? null : (i = t({}, n), a(i.keys) && (i.keys = i.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in i && a(i.values) && (i.values = i.values.filter(function(e, t) {
				return !(t in r.failures);
			})), i);
		}
		function Zn(e, t) {
			return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < W(n, r.lower) : 0 <= W(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? W(n, r.upper) < 0 : W(n, r.upper) <= 0));
			var n, r;
		}
		function Qn(e, t, n, r, i, o) {
			var s, c, l, u, d, f;
			return !n || n.length === 0 || (s = t.query.index, c = s.multiEntry, l = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, f = (s.lowLevelIndex || s).extractKey, (r = n.reduce(function(e, n) {
				var r = e, i = [];
				if (n.type === "add" || n.type === "put") for (var o = new Z(), s = n.values.length - 1; 0 <= s; --s) {
					var f, p = n.values[s], m = u(p);
					!o.hasKey(m) && (f = d(p), c && a(f) ? f.some(function(e) {
						return Zn(e, l);
					}) : Zn(f, l)) && (o.addKey(m), i.push(p));
				}
				switch (n.type) {
					case "add":
						var h = new Z().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e), r = e.concat(t.values ? i.filter(function(e) {
							return e = u(e), !h.hasKey(e) && (h.addKey(e), !0);
						}) : i.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !h.hasKey(e) && (h.addKey(e), !0);
						}));
						break;
					case "put":
						var g = new Z().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new Z().addKeys(n.keys);
						r = e.filter(function(e) {
							return !_.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var v = n.range;
						r = e.filter(function(e) {
							return !Zn(u(e), v);
						});
				}
				return r;
			}, e)) === e) ? e : (r.sort(function(e, t) {
				return W(f(e), f(t)) || W(u(e), u(t));
			}), t.limit && t.limit < Infinity && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = !0)), o ? Object.freeze(r) : r);
		}
		function $n(e, t) {
			return W(e.lower, t.lower) === 0 && W(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		function er(e, t) {
			return ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : -1;
				if (t === void 0) return 1;
				if ((e = W(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return 1;
					if (r) return -1;
				}
				return e;
			})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, r) => {
				if (e === void 0) return t === void 0 ? 0 : 1;
				if (t === void 0) return -1;
				if ((e = W(e, t)) === 0) {
					if (n && r) return 0;
					if (n) return -1;
					if (r) return 1;
				}
				return e;
			})(e.upper, t.upper, e.upperOpen, t.upperOpen);
		}
		function tr(e, t, n, r) {
			e.subscribers.add(n), r.addEventListener("abort", function() {
				var r, i;
				e.subscribers.delete(n), e.subscribers.size === 0 && (r = e, i = t, setTimeout(function() {
					r.subscribers.size === 0 && ae(i, r);
				}, 3e3));
			});
		}
		var nr = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var n = e.schema.name;
				return t(t({}, e), {
					transaction: function(t, r, i) {
						var a, o, s = e.transaction(t, r, i);
						return r === "readwrite" && (i = (a = new AbortController()).signal, s.addEventListener("abort", (o = function(i) {
							return function() {
								if (a.abort(), r === "readwrite") {
									for (var o = /* @__PURE__ */ new Set(), c = 0, l = t; c < l.length; c++) {
										var u = l[c], d = Mn[`idb://${n}/${u}`];
										if (d) {
											var f = e.table(u), p = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var g = 0, _ = (b = h[m]).slice(); g < _.length; g++) jn((x = _[g]).obsSet, s.mutatedParts) && (ae(b, x), x.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < p.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var v = 0, y = Object.values(d.queries.query); v < y.length; v++) for (var b, x, S, C = 0, ee = (b = y[v]).slice(); C < ee.length; C++) (x = ee[C]).res != null && s.mutatedParts && (i && !x.dirty ? (S = Object.isFrozen(x.res), S = Qn(x.res, x.req, p, f, x, S), x.dirty ? (ae(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})) : S !== x.res && (x.res = S, x.promise = z.resolve({ result: S }))) : (x.dirty && ae(b, x), x.subscribers.forEach(function(e) {
													return o.add(e);
												})));
											}
										}
									}
									o.forEach(function(e) {
										return e();
									});
								}
							};
						})(!1), { signal: i }), s.addEventListener("error", o(!1), { signal: i }), s.addEventListener("complete", o(!0), { signal: i })), s;
					},
					table: function(r) {
						var i = e.table(r), a = i.schema.primaryKey;
						return t(t({}, i), {
							mutate: function(e) {
								var o, s = R.trans;
								return !a.outbound && s.db._options.cache !== "disabled" && !s.explicit && s.idbtrans.mode === "readwrite" && (o = Mn[`idb://${n}/${r}`]) ? (s = i.mutate(e), e.type !== "add" && e.type !== "put" || !(50 <= e.values.length || Un(a, e).some(function(e) {
									return e == null;
								})) ? (o.optimisticOps.push(e), e.mutatedParts && Fn(e.mutatedParts), s.then(function(t) {
									0 < t.numFailures && (ae(o.optimisticOps, e), (t = Xn(0, e, t)) && o.optimisticOps.push(t), e.mutatedParts) && Fn(e.mutatedParts);
								}), s.catch(function() {
									ae(o.optimisticOps, e), e.mutatedParts && Fn(e.mutatedParts);
								})) : s.then(function(n) {
									var r = Xn(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return n.failures[r] ? e : (x(i = (i = a.keyPath) != null && i.includes(".") ? D(e) : t({}, e), a.keyPath, n.results[r]), i);
									}) }), n);
									o.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Fn(e.mutatedParts);
									});
								}), s) : i.mutate(e);
							},
							query: function(e) {
								var t, a, o, s, c, l, u;
								return qn(R, i) && Jn("query", e) ? (t = (o = R.trans)?.db._options.cache === "immutable", a = (o = R).requery, o = o.signal, l = ((e, t, n, r) => {
									var i = Mn[`idb://${e}/${t}`];
									if (!i) return [];
									if (!(e = i.queries[n])) return [
										null,
										!1,
										i,
										null
									];
									var a = e[(r.query ? r.query.index.name : null) || ""];
									if (!a) return [
										null,
										!1,
										i,
										null
									];
									switch (n) {
										case "query":
											var o = a.find(function(e) {
												return e.req.limit === r.limit && e.req.values === r.values && $n(e.req.query.range, r.query.range);
											});
											return o ? [
												o,
												!0,
												i,
												a
											] : [
												a.find(function(e) {
													return ("limit" in e.req ? e.req.limit : Infinity) >= r.limit && (!r.values || e.req.values) && er(e.req.query.range, r.query.range);
												}),
												!1,
												i,
												a
											];
										case "count": return o = a.find(function(e) {
											return $n(e.req.query.range, r.query.range);
										}), [
											o,
											!!o,
											i,
											a
										];
									}
								})(n, r, "query", e), u = l[0], s = l[2], c = l[3], u && l[1] ? u.obsSet = e.obsSet : (l = i.query(e).then(function(e) {
									var n = e.result;
									if (u && (u.res = n), t) {
										for (var r = 0, i = n.length; r < i; ++r) Object.freeze(n[r]);
										Object.freeze(n);
									} else e.result = D(n);
									return e;
								}).catch(function(e) {
									return c && u && ae(c, u), Promise.reject(e);
								}), u = {
									obsSet: e.obsSet,
									promise: l,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, c ? c.push(u) : (c = [u], (s ||= Mn[`idb://${n}/${r}`] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								}).queries.query[e.query.index.name || ""] = c)), tr(u, c, a, o), u.promise.then(function(n) {
									return { result: Qn(n.result, e, s?.optimisticOps, i, u, t) };
								})) : i.query(e);
							}
						});
					}
				});
			}
		};
		function rr(e, t) {
			return new Proxy(e, { get: function(e, n, r) {
				return n === "db" ? t : Reflect.get(e, n, r);
			} });
		}
		$.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new M.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new M.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(cn), n.stores({}), this._state.autoSchema = !1), n;
		}, $.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || R.letThrough || this._vip) ? e() : new z(function(e, n) {
				if (t._state.openComplete) return n(new M.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new M.DatabaseClosed());
					t.open().catch(N);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, $.prototype.use = function(e) {
			var t = e.stack, n = e.create, r = e.level, e = e.name, i = (e && this.unuse({
				stack: t,
				name: e
			}), this._middlewares[t] || (this._middlewares[t] = []));
			return i.push({
				stack: t,
				create: n,
				level: r ?? 10,
				name: e
			}), i.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, $.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!n && e.name !== n;
			})), this;
		}, $.prototype.open = function() {
			var e = this;
			return at(Me, function() {
				return Rn(e);
			});
		}, $.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state, t = ut.indexOf(this);
			if (0 <= t && ut.splice(t, 1), this.idbdb) {
				try {
					this.idbdb.close();
				} catch {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new z(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new z(function(t, n) {
				e.cancelOpen = n;
			}));
		}, $.prototype.close = function(e) {
			var e = (e === void 0 ? { disableAutoOpen: !0 } : e).disableAutoOpen, t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new M.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new M.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, $.prototype.delete = function(e) {
			var t = this, n = (e === void 0 && (e = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
			return new z(function(i, a) {
				function o() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = B(function() {
						var e = t._deps, n = t.name, r;
						xn(r = e.indexedDB) || n === dt || bn(r, e.IDBKeyRange).delete(n).catch(N), i();
					}), n.onerror = Y(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new M.InvalidArgument("Invalid closeOptions argument to db.delete()");
				r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
			});
		}, $.prototype.backendDB = function() {
			return this.idbdb;
		}, $.prototype.isOpen = function() {
			return this.idbdb !== null;
		}, $.prototype.hasBeenClosed = function() {
			var e = this._state.dbOpenError;
			return e && e.name === "DatabaseClosed";
		}, $.prototype.hasFailed = function() {
			return this._state.dbOpenError !== null;
		}, $.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema;
		}, Object.defineProperty($.prototype, "tables", {
			get: function() {
				var e = this;
				return i(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), $.prototype.transaction = function() {
			var e = function(e, t, n) {
				var r = arguments.length;
				if (r < 2) throw new M.InvalidArgument("Too few arguments");
				for (var i = Array(r - 1); --r;) i[r - 1] = arguments[r];
				return n = i.pop(), [
					e,
					ee(i),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, $.prototype._transaction = function(e, t, n) {
			var r, i, a = this, o = R.trans, s = (o && o.db === this && e.indexOf("!") === -1 || (o = null), e.indexOf("?") !== -1);
			e = e.replace("!", "").replace("?", "");
			try {
				if (i = t.map(function(e) {
					if (e = e instanceof a.Table ? e.name : e, typeof e != "string") throw TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), e == "r" || e === ft) r = ft;
				else {
					if (e != "rw" && e != pt) throw new M.InvalidArgument("Invalid transaction mode: " + e);
					r = pt;
				}
				if (o) {
					if (o.mode === ft && r === pt) {
						if (!s) throw new M.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						o = null;
					}
					o && i.forEach(function(e) {
						if (o && o.storeNames.indexOf(e) === -1) {
							if (!s) throw new M.SubTransaction("Table " + e + " not included in parent transaction.");
							o = null;
						}
					}), s && o && !o.active && (o = null);
				}
			} catch (e) {
				return o ? o._promise(null, function(t, n) {
					n(e);
				}) : H(e);
			}
			var c = function e(t, n, r, i, a) {
				return z.resolve().then(function() {
					var o = R.transless || R, s = t._createTransaction(n, r, t._dbSchema, i), o = (s.explicit = !0, {
						trans: s,
						transless: o
					});
					if (i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (i) {
						return i.name === de.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, r, null, a);
						})) : H(i);
					}
					var c, l = A(a), o = (l && $e(), z.follow(function() {
						var e;
						(c = a.call(s, s)) && (l ? (e = et.bind(null, null), c.then(e, e)) : typeof c.next == "function" && typeof c.throw == "function" && (c = zn(c)));
					}, o));
					return (c && typeof c.then == "function" ? z.resolve(c).then(function(e) {
						return s.active ? e : H(new M.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : o.then(function() {
						return c;
					})).then(function(e) {
						return i && s._resolve(), s._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return s._reject(e), H(e);
					});
				});
			}.bind(null, this, r, i, o, n);
			return o ? o._promise(r, c, "lock") : R.trans ? at(R.transless, function() {
				return a._whenReady(c);
			}) : this._whenReady(c);
		}, $.prototype.table = function(e) {
			if (l(this._allTables, e)) return this._allTables[e];
			throw new M.InvalidTable(`Table ${e} does not exist`);
		};
		var Q = $;
		function $(e, n) {
			var r, i, a, o, s, c = this, l = (this._middlewares = {}, this.verno = 0, $.dependencies), l = (this._options = n = t({
				addons: $.addons,
				autoOpen: !0,
				indexedDB: l.indexedDB,
				IDBKeyRange: l.IDBKeyRange,
				cache: "cloned"
			}, n), this._deps = {
				indexedDB: n.indexedDB,
				IDBKeyRange: n.IDBKeyRange
			}, n.addons), u = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
				dbOpenError: null,
				isBeingOpened: !1,
				onReadyBeingFired: null,
				openComplete: !1,
				dbReadyResolve: N,
				dbReadyPromise: null,
				cancelOpen: N,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: n.autoOpen
			}), d = (u.dbReadyPromise = new z(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new z(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = Tt(this, "populate", "blocked", "versionchange", "close", { ready: [ve, N] }), this.once = function(e, t) {
				var n = function() {
					var r = [...arguments];
					c.on(e).unsubscribe(n), t.apply(c, r);
				};
				return c.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					$.vip(function() {
						var r, i = c._state;
						i.openComplete ? (i.dbOpenError || z.resolve().then(t), n && e(t)) : i.onReadyBeingFired ? (i.onReadyBeingFired.push(t), n && e(t)) : (e(t), r = c, n || e(function e() {
							r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (r = this, Et(Pt.prototype, function(e, t) {
				this.db = r;
				var n = ht, i = null;
				if (t) try {
					n = t();
				} catch (e) {
					i = e;
				}
				var t = e._ctx, e = t.table, a = e.hook.reading.fire;
				this._ctx = {
					table: e,
					index: t.index,
					isPrimKey: !t.index || e.schema.primKey.keyPath && t.index === e.schema.primKey.name,
					range: n,
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
					or: t.or,
					valueMapper: a === me ? null : a
				};
			})), this.Table = (i = this, Et(wt.prototype, function(e, t, n) {
				this.db = i, this._tx = n, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : Tt(null, {
					creating: [ge, N],
					reading: [he, me],
					updating: [F, N],
					deleting: [_e, N]
				});
			})), this.Transaction = (a = this, Et(qt.prototype, function(e, t, n, r, i) {
				var o = this;
				e !== "readonly" && t.forEach(function(e) {
					e = (e = n[e])?.yProps, e && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = Tt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new z(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), H(e);
				});
			})), this.Version = (o = this, Et(vn.prototype, function(e) {
				this.db = o, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (s = this, Et(Ht.prototype, function(e, t, n) {
				if (this.db = s, this._ctx = {
					table: e,
					index: t === ":id" ? null : t,
					or: n
				}, this._cmp = this._ascending = W, this._descending = function(e, t) {
					return W(t, e);
				}, this._max = function(e, t) {
					return 0 < W(e, t) ? e : t;
				}, this._min = function(e, t) {
					return W(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange) throw new M.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`), c.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${c.name}') was blocked`) : console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
			}), this._maxKey = Zt(n.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
				return new c.Transaction(e, t, n, c._options.chromeTransactionDurability, r);
			}, this._fireOnBlocked = function(e) {
				c.on("blocked").fire(e), ut.filter(function(e) {
					return e.name === c.name && e !== c && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Kn), this.use(nr), this.use(Yn), this.use(Vn), this.use(Wn), new Proxy(this, { get: function(e, t, n) {
				var r;
				return t === "_vip" || (t === "table" ? function(e) {
					return rr(c.table(e), d);
				} : (r = Reflect.get(e, t, n)) instanceof wt ? rr(r, d) : t === "tables" ? r.map(function(e) {
					return rr(e, d);
				}) : t === "_createTransaction" ? function() {
					return rr(r.apply(this, arguments), d);
				} : r);
			} }));
			this.vip = d, l.forEach(function(e) {
				return e(c);
			});
		}
		var ir, Ce = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ar = (or.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && typeof e != "function" ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, or.prototype[Ce] = function() {
			return this;
		}, or);
		function or(e) {
			this._subscribe = e;
		}
		try {
			ir = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch {
			ir = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function sr(e) {
			var t, n = !1, r = new ar(function(r) {
				var i = A(e), a, o = !1, s = {}, c = {}, u = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, a && a.abort(), d && Kt.storagemutated.unsubscribe(p));
					}
				}, d = (r.start && r.start(u), !1), f = function() {
					return st(m);
				}, p = function(e) {
					An(s, e), jn(c, s) && f();
				}, m = function() {
					var u, m, h;
					!o && ir.indexedDB && (s = {}, u = {}, a && a.abort(), a = new AbortController(), h = ((t) => {
						var n = Ue();
						try {
							i && $e();
							var r = Qe(e, t);
							return r = i ? r.finally(et) : r;
						} finally {
							n && We();
						}
					})(m = {
						subscr: u,
						signal: a.signal,
						requery: f,
						querier: e,
						trans: null
					}), Promise.resolve(h).then(function(e) {
						n = !0, t = e, o || m.signal.aborted || (s = {}, ((e) => {
							for (var t in e) if (l(e, t)) return;
							return 1;
						})(c = u) || d || (Kt(Wt, p), d = !0), st(function() {
							return !o && r.next && r.next(e);
						}));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(e?.name) || o || st(function() {
							o || r.error && r.error(e);
						});
					}));
				};
				return setTimeout(f, 0), u;
			});
			return r.hasValue = function() {
				return n;
			}, r.getValue = function() {
				return t;
			}, r;
		}
		var cr = Q;
		function lr(e) {
			var t = dr;
			try {
				dr = !0, Kt.storagemutated.fire(e), In(e, !0);
			} finally {
				dr = t;
			}
		}
		u(cr, t(t({}, w), {
			delete: function(e) {
				return new cr(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new cr(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return t = cr.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (xn(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== dt;
						});
					}) : bn(n, t).toCollection().primaryKeys()).then(e);
				} catch {
					return H(new M.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return R.trans ? at(R.transless, e) : e();
			},
			vip: Sn,
			async: function(e) {
				return function() {
					try {
						var t = zn(e.apply(this, arguments));
						return t && typeof t.then == "function" ? t : z.resolve(t);
					} catch (e) {
						return H(e);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var r = zn(e.apply(n, t || []));
					return r && typeof r.then == "function" ? r : z.resolve(r);
				} catch (e) {
					return H(e);
				}
			},
			currentTransaction: { get: function() {
				return R.trans || null;
			} },
			waitFor: function(e, t) {
				return e = z.resolve(typeof e == "function" ? cr.ignoreTransaction(e) : e).timeout(t || 6e4), R.trans ? R.trans.waitFor(e) : e;
			},
			Promise: z,
			debug: {
				get: function() {
					return L;
				},
				set: function(e) {
					ye(e);
				}
			},
			derive: p,
			extend: o,
			props: u,
			override: _,
			Events: Tt,
			on: Kt,
			liveQuery: sr,
			extendObservabilitySet: An,
			getByKeyPath: b,
			setByKeyPath: x,
			delByKeyPath: function(e, t) {
				typeof t == "string" ? x(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					x(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: D,
			getObjectDiff: Hn,
			cmp: W,
			asap: y,
			minKey: -Infinity,
			addons: [],
			connections: ut,
			errnames: de,
			dependencies: ir,
			cache: Mn,
			semVer: "4.3.0",
			version: "4.3.0".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / 10 ** (2 * n);
			})
		})), cr.maxKey = Zt(cr.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Kt(Wt, function(e) {
			dr ||= (e = new CustomEvent(Gt, { detail: e }), dr = !0, dispatchEvent(e), !1);
		}), addEventListener(Gt, function(e) {
			e = e.detail, dr || lr(e);
		}));
		var ur, dr = !1, fr = function() {};
		return typeof BroadcastChannel < "u" && ((fr = function() {
			(ur = new BroadcastChannel(Gt)).onmessage = function(e) {
				return e.data && lr(e.data);
			};
		})(), typeof ur.unref == "function" && ur.unref(), Kt(Wt, function(e) {
			dr || ur.postMessage(e);
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
			if (!Q.disableBfCache && e.persisted) {
				L && console.debug("Dexie: handling persisted pagehide"), ur?.close();
				for (var t = 0, n = ut; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!Q.disableBfCache && e.persisted && (L && console.debug("Dexie: handling persisted pageshow"), fr(), lr({ all: new Z(-Infinity, [[]]) }));
		})), z.rejectionMapper = function(e, t) {
			return !e || e instanceof se || e instanceof TypeError || e instanceof SyntaxError || !e.name || !pe[e.name] ? e : (t = new pe[e.name](t || e.message, e), "stack" in e && f(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, ye(L), t(Q, Object.freeze({
			__proto__: null,
			Dexie: Q,
			Entity: _t,
			PropModification: xt,
			RangeSet: Z,
			add: function(e) {
				return new xt({ add: e });
			},
			cmp: W,
			default: Q,
			liveQuery: sr,
			mergeRanges: Tn,
			rangesOverlap: En,
			remove: function(e) {
				return new xt({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new xt({ replacePrefix: [e, t] });
			}
		}), { default: Q }), Q;
	});
})))(), 1), k = Symbol.for("Dexie"), A = globalThis[k] || (globalThis[k] = O.default);
if (O.default.semVer !== A.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${O.default.semVer} and ${A.semVer}`);
var { liveQuery: j, mergeRanges: oe, rangesOverlap: se, RangeSet: ce, cmp: le, Entity: ue, PropModification: de, replacePrefix: fe, add: M, remove: pe, DexieYProvider: N } = A, me = class {
	db;
	subscribers = [];
	options;
	constructor(e) {
		this.options = e, this.db = new A(e.app), this.db.version(19).stores({
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
			T(2, [
				"%chash%c %capi%C %chash",
				u.API,
				u.NONE,
				u.APP
			]);
		});
		return T(3, [
			"%cget%c %chash%c %chash",
			u.OK,
			u.NONE,
			u.API,
			u.NONE,
			u.APP,
			e
		]), t?.hash ?? "none";
	};
	setHash = async (e) => await this.db.table("hashtable").where({ id: e.widget }).modify({ hash: e.hash }).then(() => (T(3, [
		"%cset%c %chash%c %chash}",
		u.OK,
		u.NONE,
		u.API,
		u.NONE,
		u.WIDGET,
		e
	]), 201)).catch((t) => (T(2, [
		"%cget%c %chash%c %chash",
		u.OK,
		u.NONE,
		u.API,
		u.NONE,
		u.WIDGET,
		e,
		t.message
	]), 400));
	clearHash = async () => await this.db.table("hashtable").clear().then(() => 201).catch((e) => (T(2, [
		"%cclear%c %cstorage%c %chash",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		"clear hashes"
	]), 400));
	deleteHash = async (e) => await this.db.table("hashtable").where({ id: e.widget }).delete().then(() => 201).catch((t) => (T(2, [
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
	}).then(() => 201).catch((t) => (T(2, [
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
		if (e.widget === "") return T(3, [
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
			T(2, [
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
		return T(3, [
			"%cget%c %cstorage%c %ccloud",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.CLOUD,
			n
		]), n;
	};
	setCloud = async (e, t) => e.type === l.CLOUD && t !== "" ? (T(3, [
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
	}).then(() => 201).catch((t) => (T(2, [
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
	})).catch((n) => (T(4, [
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
			T(2, [
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
	})).catch((n) => (T(4, [
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
			T(2, [
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
			T(2, [
				"%cstorage",
				u.STORAGE,
				d.DASHBOARD_LOAD,
				e
			]);
		});
		return r !== void 0 && T(3, [
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
		})).catch((n) => (T(4, [
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
	})).catch((t) => (T(4, [
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
		if (e.widget === "") return T(3, [
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
		e.since = r === 0 ? n - 3600 * 24 * 30 : n - r, this.options.delay === 0 ? e.before = n : e.before = n - (this.options.delay || 0);
		let i = (t) => t.utc > (e?.since || 0), a = (t) => t.utc < (e?.before || n);
		try {
			let n = this.db.table(l.TOPICS).where("widget_id").equals(e.widget).filter(i).filter(a);
			e?.approved === "true" ? n.and((e) => e.approved === 1) : n.and((e) => e.visible === 1), n.reverse();
			let r = await n.limit(e?.limit ?? 25).sortBy(t);
			if (r.length === 0) return {
				data: null,
				message: "No Messages error",
				success: !1,
				query: e
			};
			let o = r.map((e) => this.db.table(l.MESSAGES).get({ id: e.message_id }));
			return A.Promise.all(o).then(async (t) => {
				let n = {
					data: { messages: t.map((e) => {
						if (e !== void 0) return e.data;
					}) },
					query: e,
					message: "Messages retrieved successfully",
					success: !0
				};
				return T(3, [
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
			return T(2, [
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
		await this.db.table(l.TOPICS).where("message_id").equals(e).modify({ visible: t ? 1 : 0 }).catch((e) => (console.error("%chide%c %cstorage%c %cmessage", u.KO, u.NONE, u.STORAGE, u.NONE, u.HIDE, e.message), 0));
	};
	setMessages = async (e, t) => {
		if (e.type !== l.MESSAGES) return 400;
		let n = t.data.title, r = 0;
		return T(3, [
			"%cset%c %cstorage%c %cmessages",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.MESSAGES,
			t?.title ?? e.widget
		]), await t.data.messages.forEach(async (i) => {
			if (i.id !== null) {
				i.topics[0] = {
					message_id: i.id,
					engagement: i.topics[0]?.engagement || i.dynamics?.engagement || 0,
					impressions: i.topics[0]?.impressions || i.dynamics?.semrush_visits || 0,
					reach: i.topics[0]?.reach || i.dynamics?.potential_reach || 0,
					sentiment: i.topics[0]?.sentiment || 0,
					approved: i.topics[0]?.approved ? 1 : 0
				}, await this.db.table(l.MESSAGES).put({
					id: i.id,
					utc: i.utc,
					data: i,
					expires: i.expires
				}).catch((e) => {
					r++, T(4, [
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
					r++, T(4, [
						"%cset%c %cstorage",
						u.KO,
						u.NONE,
						u.STORAGE,
						"set topic",
						`title: ${n}`,
						i,
						e.message
					]);
				}), await t.data.topics.forEach(async (e) => {
					let t = e.message_id, n = e.visible ? 1 : 0, i = e.approve ? 1 : 0, a = e.title;
					await this.db.table(l.TOPICS).where("message_id").equals(t).modify({
						visible: n,
						approve: i
					}).catch((t) => {
						r++, T(4, [
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
				});
			}
		}), r === 0 ? 201 : 400;
	};
	getSeries = async (e) => {
		if (e.widget === "") return T(3, [
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
			T(2, [
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
		return T(3, [
			"%cget%c %cstorage%c %cseries",
			u.OK,
			u.NONE,
			u.STORAGE,
			u.NONE,
			u.SERIES,
			n
		]), n;
	};
	setSeries = async (e, t) => (delete t?.query, e.type === l.SERIES && t !== "" ? (T(3, [
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
	}).then(() => 201).catch((t) => (T(2, [
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
		if (e.id === "") return T(3, [
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
			T(2, [
				"%cstorage",
				u.STORAGE,
				d.WIDGET_LOAD,
				e
			]);
		});
		return i !== void 0 && T(3, [
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
	subscribe = (e) => (e = te(e), this.subscribers.filter((t) => t.widget === e.widget).length > 0 ? null : (e.type === l.MESSAGES && (e = ne(this.options, e)), console.info("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e), this.subscribers.push(e), null));
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (e) => {
		let t = await this.db.table(l.SLIDE).where({ id: e.id }).last().catch(() => {
			T(2, [
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
		return i && i.sort((e, t) => e.order_index - t.order_index), i !== void 0 && T(3, [
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
		return n !== void 0 && T(3, [
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
			T(2, [
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
		return n !== void 0 && T(3, [
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
		return n !== void 0 && T(3, [
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
//#endregion
//#region node_modules/idb-keyval/dist/index.js
function he(e) {
	return new Promise((t, n) => {
		e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error);
	});
}
function P(e, t) {
	let n, r = () => {
		if (n) return n;
		let r = indexedDB.open(e);
		return r.onupgradeneeded = () => r.result.createObjectStore(t), n = he(r), n.then((e) => {
			e.onclose = () => n = void 0;
		}, () => {}), n;
	};
	return (e, n) => r().then((r) => n(r.transaction(t, e).objectStore(t)));
}
var ge;
function _e() {
	return ge ||= P("keyval-store", "keyval"), ge;
}
function F(e, t = _e()) {
	return t("readonly", (t) => he(t.get(e)));
}
function I(e, t, n = _e()) {
	return n("readwrite", (n) => (n.put(t, e), he(n.transaction)));
}
//#endregion
//#region src/storage/keyval.ts
var ve = class {
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
	getCloud = async (e) => await F(D(e)).then((e) => e).catch(() => (console.warn("%capi", u.API, l.CLOUD, e.slide, e.widget), {
		data: null,
		message: "Cloud Data error",
		success: !1
	}));
	getSeries = async (e) => await F(D(e)).then((e) => e).catch(() => (console.warn("%capi", u.API, l.SERIES, e.slide, e.widget), {
		data: null,
		message: "Series Data error",
		success: !1
	}));
	getMessages = async (e) => await F(D(e)).then((e) => e).catch(() => (console.warn("%capi", u.API, l.MESSAGES, e.slide, e.widget), {
		data: null,
		message: "Messages Data error",
		success: !1
	}));
	setCloud = async (e, t) => {
		if (!t.success) return 400;
		let n = D(e);
		return delete t.success, delete t.message, await I(n, t).then(() => 201).catch((t) => (console.error("%cstorage", u.STORAGE, l.CLOUD, e, t.message), 400));
	};
	setSeries = async (e, t) => {
		if (!t.success) return 400;
		let n = D(e);
		return delete t.success, delete t.message, await I(n, t).then(() => 201).catch((t) => (console.error("%cstorage", u.STORAGE, l.SERIES, e, t.message), 400));
	};
	setMessages = async (e, t) => {
		if (!t.success) return 400;
		let n = D(e);
		return delete t.success, delete t.message, await I(n, t).then(() => 201).catch((t) => (console.error("%cstorage", u.STORAGE, l.MESSAGES, e, t.message), 400));
	};
	cleanMessages = async (e) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((e) => e(0)));
	hideMessage = async (e, t) => {
		console.debug(`hideMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	getDashboard = async (e) => await F(D(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.SLIDE, e.id), {
		data: null,
		message: `Widget ${e.data.id} load error: ${t.message}`,
		success: !1
	}));
	getDashboards = async () => ({
		data: null,
		message: "Dashboards get error: ",
		success: !1
	});
	setDashboard = async (e) => await I(D(e), {
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
	getWidget = async (e) => await F(D(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.SLIDE, e.id), {
		data: null,
		message: `Widget ${e.data.id} load error: ${t.message}`,
		success: !1
	}));
	getWidgets = async (e) => (console.warn("%capi", u.API, l.SLIDE, e?.presentation), {
		data: null,
		message: "Widgets load error: ",
		success: !1
	});
	setWidget = async (e) => await I(D(e), {
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
	subscribe = (e) => (e.type === l.MESSAGES && (e = ne(this.options, e)), this.subscribers.filter((t) => t.widget === e.widget).length > 0 ? null : (console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), this.subscribers.push(e), null));
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (e) => await F(D(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.SLIDE, e.id), {
		data: null,
		message: `Slide ${e.data.id} load error: ${t.message}`,
		success: !1
	}));
	getSlides = async (e) => (console.warn("%capi", u.API, l.SLIDE, e.presentation), {
		data: null,
		message: `Slided ${e.presentation} load error: `,
		success: !1
	});
	setSlide = async (e) => await I(D(e), {
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
	getPresentation = async (e) => await F(D(e)).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.PRESENTATION, e.id), {
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
		let t = D(e), n = e.data;
		return await I(t, n).then(() => ({
			data: null,
			message: `Presentation ${e.data.id} saved to storage`,
			success: !0
		})).catch((t) => (console.error("%cstorage", u.STORAGE, l.PRESENTATION, e, t.message), {
			data: null,
			message: `Presentation ${e.data.id} save error: ${t.message}`,
			success: !1
		}));
	};
	getPreference = async (e) => await F(`${l.PREFERENCE}.${e.id}`).then((e) => e).catch((t) => (console.warn("%capi", u.API, l.PREFERENCE, e.id), {
		data: null,
		message: `Preference ${e.id} get error: ${t.message}`,
		success: !1
	}));
	getPreferences = async () => await F(`${l.PREFERENCE}`).then((e) => e).catch((e) => (console.warn("%capi", u.API, l.PREFERENCE), {
		data: null,
		message: `Preferences get error: ${e.message}`,
		success: !1
	}));
	setPreference = async (e) => await I(`${l.PREFERENCE}.${e.id}`, e.value).then(() => ({
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
}, L = class {
	subscribers = [];
	options;
	constructor(e) {
		this.options = e, Storage.prototype.setObject = function(e, t) {
			this.setObject(e, JSON.stringify(t));
		}, Storage.prototype.getObject = function(e) {
			let t = this.getObject(e);
			return t && JSON.parse(t);
		};
	}
	getHash = async (e) => "none";
	setHash = async (e) => 404;
	createHash = async (e) => 404;
	clearHash = async () => 404;
	deleteHash = async (e) => 404;
	getCloud = async (e) => {
		let t = D(e);
		try {
			return localStorage.getObject(t);
		} catch (t) {
			return console.warn("%capi", u.API, l.CLOUD, e.slide, e.widget, t), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	getSeries = async (e) => {
		let t = D(e);
		try {
			return localStorage.getObject(t);
		} catch (t) {
			return console.warn("%capi", u.API, l.SERIES, e.slide, e.widget, t), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	getMessages = async (e) => {
		let t = D(e);
		try {
			return localStorage.getObject(t);
		} catch (t) {
			return console.warn("%capi", u.API, l.MESSAGES, e.slide, e.widget, t), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	bulk = async (e, t) => 404;
	get = async (e, t) => 404;
	set = async (e, t) => 404;
	setCloud = async (e, t) => {
		let n = D(e);
		try {
			return localStorage.setObject(n, t), 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.CLOUD, e, t), 400;
		}
	};
	setSeries = async (e, t) => {
		let n = D(e);
		try {
			return localStorage.setObject(n, t), 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.SERIES, e, t), 400;
		}
	};
	setMessages = async (e, t) => {
		let n = D(e);
		try {
			return localStorage.setObject(n, t), 200;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.MESSAGES, e, t), 400;
		}
	};
	cleanMessages = async (e) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((e) => e(0)));
	hideMessage = async (e, t) => {
		console.debug(`hideMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	getDashboard = async (e) => {
		try {
			return localStorage.getObject(`${l.DASHBOARD}.${e.id}`);
		} catch (t) {
			return console.warn("%capi", u.API, l.SLIDE, e.id, t), {
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
		let t = `${l.DASHBOARD}.${e.dashboard}`;
		try {
			return localStorage.setObject(t, e), {
				data: null,
				message: `Dashboard ${e.data.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.WIDGET, e, t), {
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
			return localStorage.getObject(`${l.WIDGET}.${e.id}`);
		} catch (t) {
			return console.warn("%capi", u.API, l.SLIDE, e.id, t), {
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
			return localStorage.setObject(t, e), {
				data: null,
				message: `Widget ${e.data.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.WIDGET, e, t), {
				data: null,
				message: `Widget ${e.data.id} save error: ${t.message}`,
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
	subscribe = (e) => (e.type === l.MESSAGES && (e = ne(this.options, e)), this.subscribers.filter((t) => t.widget === e.widget).length ? null : (console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), this.subscribers.push(e), null));
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (e) => {
		try {
			return localStorage.getObject(`${l.SLIDE}.${e.id}`);
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
			return localStorage.getObject(`${l.SLIDE}.${e.id}`);
		} catch (t) {
			return console.warn("%capi", u.API, l.SLIDE, e.id, t), {
				data: null,
				message: `Slide ${e.id} load error: ${t.message}`,
				success: !1
			};
		}
	};
	setSlide = async (e) => {
		try {
			return localStorage.setObject(`${l.SLIDE}.${e.data.id}`, {
				id: e.data.id,
				title: e.data.title || "Not set",
				json: e.data.json || {},
				html: e.data.html || ""
			}), {
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
			return localStorage.getObject(`${l.PRESENTATION}.${e.presentation}`);
		} catch (t) {
			return console.warn("%capi", u.API, l.PRESENTATION, e.presentation, t), {
				data: null,
				message: `Presentations ${e.id} load error: ${t.message}`,
				success: !1
			};
		}
	};
	getPresentations = async () => {
		try {
			return localStorage.getObject(`${l.PRESENTATION}.`);
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
			return localStorage.setObject(`${l.PRESENTATION}.${e.data.id}`, e.data), {
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
			return localStorage.getObject(`${l.PREFERENCE}.${e.id}`);
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
			return localStorage.getObject(`${l.PREFERENCE}.`);
		} catch (e) {
			return console.warn("%capi", u.API, l.PREFERENCE, e), {
				data: null,
				message: `Preference get error: ${e.message}`,
				success: !1
			};
		}
	};
	setPreference = async (e) => {
		try {
			return localStorage.setObject(`${l.PREFERENCE}.${e.id}`, e.value), {
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
		message: `Image ${e.id} saved `,
		success: !1
	});
}, ye = class {
	subscribers = [];
	options;
	constructor(e) {
		this.options = e, Storage.prototype.setObject = function(e, t) {
			this.setItem(e, JSON.stringify(t));
		}, Storage.prototype.getObject = function(e) {
			let t = this.getItem(e);
			return t && JSON.parse(t);
		};
	}
	getHash = async (e) => "none";
	setHash = async (e) => 404;
	createHash = async (e) => 404;
	clearHash = async () => 404;
	deleteHash = async (e) => 404;
	getCloud = async (e) => {
		let t = D(e);
		try {
			return sessionStorage.getObject(t);
		} catch (t) {
			return console.warn("%capi", u.API, l.CLOUD, e.slide, e.widget, t), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	getSeries = async (e) => {
		let t = D(e);
		try {
			return sessionStorage.getObject(t);
		} catch (t) {
			return console.warn("%capi", u.API, l.SERIES, e.slide, e.widget, t), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	getMessages = async (e) => {
		let t = D(e);
		try {
			return sessionStorage.getObject(t);
		} catch (t) {
			return console.warn("%capi", u.API, l.MESSAGES, e.slide, e.widget, t), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	setCloud = async (e, t) => {
		let n = D(e);
		try {
			return sessionStorage.setObject(n, t), 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.CLOUD, e, t), 400;
		}
	};
	setSeries = async (e, t) => {
		let n = D(e);
		try {
			return sessionStorage.setObject(n, t), 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.SERIES, e, t), 400;
		}
	};
	setMessages = async (e, t) => {
		let n = D(e);
		try {
			return sessionStorage.setObject(n, t), 200;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.MESSAGES, e, t), 400;
		}
	};
	cleanMessages = async (e) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((e) => e(0)));
	hideMessage = async (e, t) => {
		console.debug(`hideMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	bulk = async (e, t) => 404;
	get = async (e, t) => 404;
	set = async (e, t) => 404;
	getDashboard = async (e) => {
		try {
			return sessionStorage.getObject(`${l.DASHBOARD}.${e.id}`);
		} catch (t) {
			return console.warn("%capi", u.API, l.SLIDE, e.id, t), {
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
	deleteDashboard = async (e) => 404;
	deleteDashboards = async () => 404;
	setDashboard = async (e) => {
		let t = `${l.DASHBOARD}.${e.dashboard}`;
		try {
			return sessionStorage.setObject(t, e), {
				data: null,
				message: `Dashboard ${e.data.id} saved to storage`,
				success: !0
			};
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, l.WIDGET, e, t), {
				data: null,
				message: `Dashboard ${e.data.id} save error: ${t.message}`,
				success: !1
			};
		}
	};
	getWidget = async (e) => {
		try {
			return sessionStorage.getObject(`${l.WIDGET}.${e.id}`);
		} catch (t) {
			return console.warn("%capi", u.API, l.SLIDE, e.id, t), {
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
			return sessionStorage.setObject(t, e), {
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
	subscribe = (e) => (e.type === l.MESSAGES && (e = ne(this.options, e)), this.subscribers.filter((t) => t.widget === e.widget).length ? null : (console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), this.subscribers.push(e), null));
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (e) => {
		try {
			return sessionStorage.getObject(`${l.SLIDE}.${e.id}`);
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
			return sessionStorage.getObject(`${l.SLIDE}.${e.id}`);
		} catch (t) {
			return console.warn("%capi", u.API, l.SLIDE, e.id, t), {
				data: null,
				message: `Slide ${e.id} load error: ${t.message}`,
				success: !1
			};
		}
	};
	setSlide = async (e) => {
		try {
			return sessionStorage.setObject(`${l.SLIDE}.${e.data.id}`, {
				id: e.data.id,
				title: e.data.title || "Not set",
				json: e.data.json || {},
				html: e.data.html || ""
			}), {
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
			return sessionStorage.getObject(`${l.PRESENTATION}.${e.presentation}`);
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
			return sessionStorage.getObject(`${l.PRESENTATION}.`);
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
			return sessionStorage.setObject(`${l.PRESENTATION}.${e.data.id}`, e.data), {
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
			return sessionStorage.getObject(`${l.PREFERENCE}.${e.id}`);
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
			return sessionStorage.getObject(`${l.PREFERENCE}`);
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
			return sessionStorage.setObject(`${l.PREFERENCE}.${e.id}`, e.value), {
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
		message: `Image ${e.id} saved`,
		success: !1
	});
}, be = class {
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
		let t = D(e);
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
		let t = D(e);
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
		let t = D(e);
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
		let n = D(e);
		try {
			return window.__bc.WidgetData[n] = t, 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, "set", e, t), 400;
		}
	};
	setSeries = async (e, t) => {
		let n = D(e);
		try {
			return window.__bc.WidgetData[n] = t, 201;
		} catch (t) {
			return console.error("%cstorage", u.STORAGE, "set", e, t), 400;
		}
	};
	setMessages = async (e, t) => {
		let n = D(e);
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
	subscribe = (e) => (e.type === l.MESSAGES && (e = ne(this.options, e)), this.subscribers.filter((t) => t.widget === e.widget).length ? null : (console.debug("%cstorage%c %csubscribe", u.STORAGE, u.NONE, u.SUBSCRIBE, e.slide, e.widget), this.subscribers.push(e), null));
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
}, xe = class {
	sm;
	api;
	bc;
	options;
	subscribers = [];
	constructor(e) {
		switch (T(3, [
			"%cpresentation",
			u.PRESENTATION,
			e.presentation,
			d.VERSION,
			re
		]), this.options = e, this.sm = null, this.bc = new BroadcastChannel(this.options.presentation), this.api = new ae(e), e.storage) {
			case p.DEXIE:
				this.sm = new me(e);
				break;
			case p.LOCAL:
				this.sm = new ye(e);
				break;
			case p.SESSION:
				this.sm = new L(e);
				break;
			case p.KEYVAL:
				this.sm = new ve(e);
				break;
			case p.WINDOW:
				this.sm = new be(e);
				break;
			default:
		}
	}
	addSubscriber(e) {
		this.subscribers[e.widget] = e;
	}
	deleteSubscriber(e) {
		delete this.subscribers[e.widget];
	}
	update = async (e) => {
		if (T(3, [
			"%cupdate%c %cdata",
			u.NO_UPDATES,
			u.NONE,
			u.MESSAGES,
			e
		]), this.sm === null || Object.keys(this.subscribers).length === 0) return;
		let t = [];
		Object.values(this.subscribers).forEach((e) => {
			e.dashboard?.length && e.widget?.length && e.type?.length && t.push(this.api.get(e));
		}), t.forEach(async (t) => {
			await t.then(async (t) => await this.processResponse(t, e));
		});
	};
	stream = () => {
		let e = [];
		Object.values(this.subscribers).forEach((t) => {
			e.push(t);
		}), this.api.ndjson(e);
	};
	apiQuery = async (e) => await this.api.get(e).then(async (e) => await this.processResponse(e, { refresh: !1 })).catch((e) => ({
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
					a = await this.sm?.getHash(o), a === "none" && (o.hash = "temp", await this.sm?.createHash(o)), e.data.messages = e.data.messages.filter((e) => e.id !== null), i = e.data.messages.length > 0 ? x(e.data.messages[0].utc) : "none", a === i && t.refresh === !1 ? (T(3, [
						"%cset%c %cstorage%c %cmessages",
						u.NO_UPDATES,
						u.NONE,
						u.STORAGE,
						u.NONE,
						u.MESSAGES,
						e.data?.title ?? e.query.widget,
						`same hash:${i}`
					]), r.code = 204) : this.sm === null ? r.code = 500 : (o.hash = i, await this.sm?.setHash(o), r.code = await this.sm.setMessages(e.query, e).then(async (n) => (t.refresh && n === 204 && (n = 201), this.broadcastUpdate(n, e), n)).catch((e) => 500));
					break;
				case l.CLOUD:
					a = await this.sm?.getHash(o), a === "none" && (o.hash = "temp", await this.sm?.createHash(o)), i = x(e.data.cloud), a === i && t.refresh === !1 ? (T(3, [
						"%cset%c %cstorage%c %ccloud",
						u.NO_UPDATES,
						u.NONE,
						u.STORAGE,
						u.NONE,
						u.CLOUD,
						e.data?.title ?? o.widget,
						`same hash:${i}`
					]), T(4, [
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
					}, this.sm === null ? r.code = 500 : r.code = await this.sm.setCloud(e.query, n.data).then((n) => (t.refresh && n === 204 && (n = 201), this.broadcastUpdate(n, e), n)).catch((e) => 500));
					break;
				case l.SERIES:
					a = await this.sm?.getHash(o), a === "none" && (o.hash = "temp", await this.sm?.createHash(o)), i = x(e.data.series), a === i && t.refresh === !1 ? (T(3, [
						"%cset%c %cstorage%c %cseries",
						u.NO_UPDATES,
						u.NONE,
						u.STORAGE,
						u.NONE,
						u.SERIES,
						e.data?.title ?? e.query.widget,
						`same hash:${i}`
					]), T(4, [
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
					}, this.sm === null ? r.code = 500 : r.code = await this.sm.setSeries(o, e.data).then((n) => (t.refresh && n === 204 && (n = 201), this.broadcastUpdate(n, e), n)).catch((e) => 500));
					break;
				default: T(3, [
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
		} else switch (T(3, [
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
		T(3, [
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
				T(3, [
					`%cupdate%c %cwidget%c %c${t.query?.type}`,
					u.BROADCAST,
					u.NONE,
					u.WIDGET,
					u.NONE,
					E(t.query),
					`${t?.data?.title ?? ""} ${t.query.widget}`
				]), T(4, [
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
			default:
				T(2, [
					`%cupdate%c %cwidget%c %c${t.query?.type}`,
					u.KO,
					u.NONE,
					u.WIDGET,
					u.NONE,
					E(t.query),
					"Fetch error",
					t.query
				]);
				break;
		}
	};
	hide = (e) => {
		this.api.hideMessage(e);
	};
	actions = async (e) => {
		switch (e.data.event) {
			case d.SUBSCRIBE:
				let t = e.data.data;
				t.widget !== void 0 && (T(3, [
					`%csubscribe%c %cwidget%c %c${e.data.data.type}`,
					u.BROADCAST,
					u.NONE,
					u.WIDGET,
					u.NONE,
					E(t),
					t
				]), this.addSubscriber(t));
				break;
			case d.UPDATE:
				T(3, [
					"%cupdate%c %capi%c %cstorage",
					u.BROADCAST,
					u.NONE,
					u.API,
					u.NONE,
					u.STORAGE,
					e.data
				]), await this.update(e.data.data);
				break;
			case "stream":
				T(3, [
					"%cupdate%c %capi%c %cstorage",
					u.BROADCAST,
					u.NONE,
					u.API,
					u.NONE,
					u.STORAGE,
					e.data
				]), await this.stream();
				break;
			default:
		}
	};
	cleanMessages = async () => {
		if (this.options?.suspended) {
			T(2, [
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
		let e = this.options?.retention || 86400 * 40, t = await this.sm?.cleanMessages(e);
		T(3, [
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
		return T(3, [
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
}, Se = class {
	sm;
	constructor(e) {
		switch (this.sm = null, e.storage) {
			case p.DEXIE:
				this.sm = new me(e);
				break;
			case p.LOCAL:
				this.sm = new ye(e);
				break;
			case p.SESSION:
				this.sm = new L(e);
				break;
			case p.KEYVAL:
				this.sm = new ve(e);
				break;
			case p.WINDOW:
				this.sm = new be(e);
				break;
			default:
		}
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
}, Ce = class {
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
		r.presentation = i?.presentation ?? `${n} not found`, this.query = r, h(e), this.storageReader = new Se(i), this.broadcastChannel = new BroadcastChannel(r.presentation), this.broadcastListener();
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
							e?.success && (T(4, [
								`%cset%c %cwidget%c %c${this.query.type}`,
								u.OK,
								u.NONE,
								u.WIDGET,
								u.NONE,
								E(this.query),
								this.query
							]), this.callbacks.forEach(async (t) => {
								t(e);
							}));
						}
					} catch (e) {
						T(4, [
							d.WIDGET_UPDATE,
							n,
							e.message,
							e
						]);
					}
					break;
				case d.APP_READY:
					this.subscribe();
					break;
				default:
			}
		};
	}
	subscribe() {
		this.query.dashboard?.length && this.query.widget?.length && this.query.type?.length && (this.broadcastChannel.postMessage({
			event: d.SUBSCRIBE,
			data: this.query
		}), T(3, [
			`%csubscribe%c %cwidget%c %c${this.query.type}`,
			u.SUBSCRIBE,
			u.NONE,
			u.WIDGET,
			u.NONE,
			E(this.query),
			this.query.widget
		]), T(4, [
			"%cdebug%c %cwidget",
			u.NO_UPDATES,
			u.NONE,
			u.WIDGET,
			this.query
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
	getCloud = async () => this.query.type === l.CLOUD ? await this.storageReader.getCloud(this.query) : (T(3, [
		"%cget%c %cstorage%c %cwidget",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		this.query.widget,
		"Wrong method call for getCloud, expected type is",
		this.query.type
	]), T(4, [
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
	getMessages = async () => this.query.type === l.MESSAGES ? await this.storageReader.getMessages(this.query) : (T(3, [
		"%cget%c %cstorage%c %cwidget",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		this.query.widget,
		"Wrong method call for getMessages, expected type is",
		this.query.type
	]), T(4, [
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
	getSeries = async () => this.query.type === l.SERIES ? await this.storageReader.getSeries(this.query) : (T(3, [
		"%cget%c %cstorage%c %cwidget",
		u.KO,
		u.NONE,
		u.STORAGE,
		u.NONE,
		u.WIDGET,
		this.query.widget,
		"Wrong method call for getSeries, expected type is",
		this.query.type
	]), T(4, [
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
		T(3, [
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
		this.broadcastChannel.close();
	}
};
//#endregion
export { xe as BuzzcastingStorageManager, Se as BuzzcastingStorageReader, Ce as Widget };
