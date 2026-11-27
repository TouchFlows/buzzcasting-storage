import { API as e, CSS as t, EVENTS as n, MODERATION as r, STORAGE as i, attrs as a, clearContents as o, getKey as s, hashSum as c, log as l, moderation as u, typeCss as d, widgetParams as f } from "buzzcasting-utils";
import p from "ndjson-readablestream";
import m from "dexie";
import { get as h, set as g } from "idb-keyval";
// package.json
var _ = "3.22.2", v = class {
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
	async get(n) {
		let { version: r } = this.options, i = this.headers(), a = Object.assign({}, n);
		delete a.type, delete a.hash, delete a.order, a.topics = `${a.dashboard}-${a.widget}`, delete a.presentation;
		let o = Object.keys(a).length > 0 ? `?${new URLSearchParams(a).toString()}` : "", s = "";
		switch (n.type) {
			case e.MESSAGES:
				s = t.MESSAGES;
				break;
			case e.SERIES:
				s = t.SERIES;
				break;
			case e.CLOUD: s = t.CLOUD;
		}
		return l(3, [
			`%cfetch%c %capi%c %c${n.type}`,
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			s,
			n.widget,
			a
		]), await fetch([
			this.url,
			"api",
			r,
			n.type
		].join("/") + o, {
			...i,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((e) => (e.query = n, e)).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null,
			query: n
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
		for await (let e of p(r.body)) console.log("Received", e);
	}
	async hideMessage(e) {
		let { version: r } = this.options, i = this.headers();
		return l(3, [
			"%capi%c %cput",
			t.API,
			t.NONE,
			t.GET_DATA,
			n.HIDE_MESSAGE,
			e.widget,
			e.id
		]), await fetch([
			this.url,
			"api",
			r,
			"messages",
			e.id
		].join("/") + "?action=visible", {
			...i,
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
		let { version: r } = this.options, i = this.formHeaders(), a = new URLSearchParams(), o = e.labels || [];
		for (let [e, t] of o.entries()) a.append(`custom_filters[${e}]`, t);
		return console.info("%capi%c %cput", t.API, t.NONE, t.GET_DATA, n.REMOVE_CLOUD, e.widget, o), await fetch([
			this.url,
			"api",
			r,
			e.type,
			e.widget
		].join("/"), {
			...i,
			body: a,
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
		let { version: n } = this.options, r = this.headers(), i = Object.assign({}, e);
		return delete i.type, delete i.hash, l(3, [
			"%cload%c %capi%c %cslide",
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			t.SLIDE,
			e.id
		]), await fetch([
			this.url,
			"api",
			n,
			"slides",
			e.id
		].join("/"), {
			...r,
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
		let { version: n } = this.options, r = this.formHeaders();
		delete e.update, delete e.type, delete e.id;
		let i = JSON.stringify(e);
		return l(3, [
			"%cpost%c %capi%c %ccreate slide",
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			t.SLIDE,
			e
		]), await fetch([
			this.url,
			"api",
			n,
			"slides"
		].join("/"), {
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
	async storeSlide(e) {
		let { version: r } = this.options, i = this.formHeaders();
		delete e.update, delete e.type;
		let a = JSON.stringify(e);
		return l(3, [
			"%cput%c %capi%c %cslide",
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			t.SLIDE,
			n.SLIDE_STORE,
			e.id
		]), await fetch([
			this.url,
			"api",
			r,
			"slides",
			e.id
		].join("/"), {
			...i,
			body: a,
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
	async loadPresentation(n) {
		let { version: r } = this.options, i = this.headers();
		return delete n.update, l(3, [
			"%cload%c %capi%c %cpresentation",
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			t.PRESENTATION,
			n.id
		]), await fetch([
			this.url,
			"api",
			r,
			e.PRESENTATIONS,
			n.id
		].join("/"), {
			...i,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((e) => {
			let t;
			return n.type = "presentations", e.query = n, e?.data && (t = structuredClone(e.data), e.data = t), e;
		}).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null
		}));
	}
	async storePresentation(n) {
		let { version: r } = this.options, i = this.formHeaders();
		delete n.update;
		let a = JSON.stringify(n);
		return l(2, [
			"%capi%c %cput",
			t.API,
			t.NONE,
			t.PRESENTATION,
			n.name
		]), await fetch([
			this.url,
			"api",
			r,
			e.PRESENTATIONS,
			n.id
		].join("/"), {
			...i,
			body: a,
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
	async loadPreference(n) {
		let { version: r } = this.options, i = this.headers();
		return l(3, [
			"%cload%c %capi%c %cpreference",
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			t.APP,
			n.id
		]), await fetch([
			this.url,
			"api",
			r,
			e.PREFERENCES,
			n.id
		].join("/"), {
			...i,
			method: "get"
		}).then(async (e) => {
			if (!e.ok) throw Error(`${e.status}`);
			return e;
		}).then((e) => e.json()).then((e) => (n.type = "preference", e.query = n, e)).catch((e) => ({
			success: !1,
			message: `${e}`,
			data: null
		}));
	}
	async storePreference(n) {
		let { version: r } = this.options, i = `Bearer ${this.options.bearer}`, a = { headers: new Headers({
			Authorization: i,
			"Content-Type": "application/json",
			Accept: "application/json"
		}) };
		delete n.update;
		let o = JSON.stringify({ data: n });
		return l(3, [
			"%capi%c %cstorePreference",
			t.API,
			t.NONE,
			t.APP,
			n.id
		]), await fetch(`${[
			this.url,
			"api",
			r,
			e.PREFERENCES
		].join("/")}/`, {
			...a,
			body: o,
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
	async loadDashboards(n) {
		let { version: r } = this.options, i = this.headers();
		return l(3, [
			"%capi%c %cdashboards",
			t.API,
			t.NONE,
			t.WIDGET
		]), await fetch([
			this.url,
			"api",
			r,
			e.WIDGETS,
			n?.id || ""
		].join("/"), {
			...i,
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
	async loadImages(n) {
		let { version: r } = this.options, i = this.headers();
		return l(3, [
			"%cload%c %capi%c %cimage",
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			t.WIDGET
		]), await fetch(`${[
			this.url,
			"api",
			r,
			e.IMAGES
		].join("/")}?folder=${n}`, {
			...i,
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
	async storeImage(n) {
		let { version: r } = this.options, i = this.fileHeaders(), a = n;
		return console.info("%capi%c %cstoreImage", t.API, t.NONE, t.WIDGET, n.get("name")), await fetch(`${[
			this.url,
			"api",
			r,
			e.IMAGES
		].join("/")}?folder=${n.get("folder")}`, {
			...i,
			body: a,
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
	async deleteImage(n, r) {
		let { version: i } = this.options, a = this.formHeaders();
		return console.info("%capi%c %cdeleteImage", t.API, t.NONE, t.WIDGET, r), await fetch(`${[
			this.url,
			"api",
			i,
			e.IMAGES,
			r
		].join("/")}?folder=${n}`, {
			...a,
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
}, y = class {
	db;
	subscribers = [];
	options;
	constructor(e) {
		this.options = e, this.db = new m(e.app), this.db.version(19).stores({
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
		let n = await this.db.table("hashtable").where({ id: e.widget }).last().catch(() => {
			l(2, [
				"%chash%c %capi%C %chash",
				t.API,
				t.NONE,
				t.APP
			]);
		});
		return l(3, [
			"%cget%c %chash%c %chash",
			t.OK,
			t.NONE,
			t.API,
			t.NONE,
			t.APP,
			e
		]), n?.hash ?? "none";
	};
	setHash = async (e) => await this.db.table("hashtable").where({ id: e.widget }).modify({ hash: e.hash }).then(() => (l(3, [
		"%cset%c %chash%c %chash}",
		t.OK,
		t.NONE,
		t.API,
		t.NONE,
		t.WIDGET,
		e
	]), 201)).catch((n) => (l(2, [
		"%cget%c %chash%c %chash",
		t.OK,
		t.NONE,
		t.API,
		t.NONE,
		t.WIDGET,
		e,
		n.message
	]), 400));
	clearHash = async () => await this.db.table("hashtable").clear().then(() => 201).catch(() => (l(2, [
		"%cclear%c %cstorage%c %chash",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.WIDGET,
		"clear hashes"
	]), 400));
	deleteHash = async (e) => await this.db.table("hashtable").where({ id: e.widget }).delete().then(() => 201).catch(() => (l(2, [
		"%cdelete%c %cstorage%c %chash",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.WIDGET,
		"clear dashboard hashes",
		e.dashboard
	]), 400));
	createHash = async (e) => await this.db.table("hashtable").put({
		id: e.widget,
		hash: e.hash
	}).then(() => 201).catch((n) => (l(2, [
		"%cset%c %cstorage%c %chash",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.WIDGET,
		e,
		n.message
	]), 400));
	getCloud = async (n) => {
		if (n.widget === "") return l(3, [
			"%cget%c %cstorage%c %ccloud",
			t.NO_UPDATES,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.CLOUD,
			n
		]), {
			data: null,
			message: "Series Data error",
			success: !1,
			query: n
		};
		let r = await this.db.table(e.CLOUD).where({ id: n.widget }).last().catch(() => {
			l(2, [
				"%capi%C %ccloud",
				t.API,
				t.NONE,
				t.CLOUD,
				n.widget
			]);
		});
		if (r === void 0) return {
			data: null,
			message: "Cloud Data error",
			success: !1,
			query: n
		};
		let i = {
			data: r?.data ?? null,
			message: r === void 0 ? "Cloud Data error" : "Cloud retrieved successfully",
			success: r !== void 0,
			query: n
		};
		return l(3, [
			"%cget%c %cstorage%c %ccloud",
			t.OK,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.CLOUD,
			i
		]), i;
	};
	setCloud = async (n, r) => n.type === e.CLOUD && r !== "" ? (l(3, [
		"%cset%c %cstorage%c %ccloud",
		t.OK,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.CLOUD,
		r?.title ?? n.widget
	]), await this.db.table(e.CLOUD).put({
		id: n.widget,
		dashboard_id: n.dashboard,
		hash: n.hash,
		data: r
	}).then(() => 201).catch((e) => (l(2, [
		"%cset%c %cstorage%c %ccloud",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.CLOUD,
		n,
		e.message
	]), 400))) : 400;
	bulk = async (e, n) => await this.db.table(e).bulkPut(n).then(() => ({
		data: null,
		message: `Bulk add ${n.length} items to ${e}`,
		success: !0
	})).catch((r) => (l(4, [
		"%cstorage",
		t.STORAGE,
		e,
		n.length,
		r.message
	]), {
		data: null,
		message: `Bulk add to ${e}:  ${r.message}`,
		success: !1
	}));
	get = async (e, n) => {
		let r = await this.db.table(e).where({ id: n.id }).last().catch(() => {
			l(2, [
				"%cstorage",
				t.STORAGE,
				`loading ${e}`,
				n.id
			]);
		});
		return r === void 0 ? {
			data: null,
			message: `${e} ${n.id} Load error`,
			success: !1
		} : (r.message = `${e} ${n.id} retrieved from storage`, r.success = !0, r);
	};
	set = async (e, n) => await this.db.table(e).put(n).then(() => ({
		data: null,
		message: `${e} ${n.id} saved to storage`,
		success: !0
	})).catch((r) => (l(4, [
		"%cstorage",
		t.STORAGE,
		e,
		n,
		r.message
	]), {
		data: null,
		message: `${e} ${n.id} save error: ${r.message}`,
		success: !1
	}));
	getDashboard = async (r) => {
		let i = await this.db.table(e.DASHBOARD).where({ id: r.id }).last().catch(() => {
			l(2, [
				"%cstorage",
				t.STORAGE,
				n.DASHBOARD_LOAD,
				r.id
			]);
		});
		return i === void 0 ? {
			data: null,
			message: `Dashboard ${r.id} Load error`,
			success: !1
		} : (i.message = `Dashboard ${r.id} retrieved from storage`, i.success = !0, i);
	};
	getDashboards = async (r) => {
		let i = (e) => r?.id === e.id, a = (e) => r?.name ? e.name.includes(r?.name) : !1, o = await this.db.table(e.DASHBOARD).toArray().then((e) => r?.id ? e.filter(i) : e).then((e) => r?.name ? e.filter(a) : e).catch(() => {
			l(2, [
				"%cstorage",
				t.STORAGE,
				n.DASHBOARD_LOAD,
				r
			]);
		});
		return o !== void 0 && l(3, [
			"%cstorage%c %cdashboards",
			t.STORAGE,
			t.NONE,
			t.WIDGET,
			r
		]), {
			data: o === void 0 ? null : {
				dashboards: o,
				query: r
			},
			message: o === void 0 ? "Dashboards load error" : "Dashboards loaded from storage",
			success: o !== void 0
		};
	};
	setDashboard = async (n) => {
		let r = structuredClone(n);
		return delete r.data.widgets, await this.db.table(e.DASHBOARD).put({
			id: r.id,
			name: r.name,
			data: r.data,
			update: r.update
		}).then(() => ({
			data: null,
			message: `Dashboard ${r.data.id} saved to storage`,
			success: !0
		})).catch((i) => (l(4, [
			"%cstorage",
			t.STORAGE,
			e.WIDGET,
			n,
			i.message
		]), {
			data: null,
			message: `Dashboard ${r.data.id} save error: ${i.message}`,
			success: !1
		}));
	};
	deleteDashboard = async (n) => await this.db.table(e.DASHBOARD).where({ id: n.id }).delete().then(() => ({
		data: null,
		message: `Dashboard ${n.id} deleted`,
		success: !0
	})).catch((r) => (l(4, [
		"%cstorage",
		t.STORAGE,
		e.DASHBOARD,
		n,
		r.message
	]), {
		data: null,
		message: `Dashboard ${n.id} delete error: ${r.message}`,
		success: !1
	}));
	deleteDashboards = async () => await this.db.table(e.DASHBOARD).clear().then(() => ({
		data: null,
		message: "Dashboard table deleted from storage",
		success: !0
	})).catch((n) => (console.error("%cstorage", t.STORAGE, e.DASHBOARD, "deleted", n.message), {
		data: null,
		message: `Dashboard table deleted error: ${n.message}`,
		success: !1
	}));
	cleanMessages = async () => {
		let n = Date.now() / 1e3;
		return await this.db.table(e.TOPICS).orderBy("expires").filter((e) => e.expires < n).delete().catch((e) => (console.error("%cstorage%c %cclean", t.STORAGE, t.NONE, t.MESSAGES, e.message), 0)), await this.db.table(e.MESSAGES).orderBy("expires").filter((e) => e.expires < n).delete().catch((e) => (console.error("%clean%c %cstorage%c %cmessages", t.OK, t.NONE, t.STORAGE, t.NONE, t.MESSAGES, e.message), 0));
	};
	getMessages = async (n) => {
		if (n.widget === "") return l(3, [
			"%cget%c %cstorage%c %cmessages",
			t.NO_UPDATES,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.MESSAGES,
			n
		]), {
			data: null,
			message: "Messages Data error",
			success: !1,
			query: n
		};
		let i = n?.order ?? "utc", a = Math.floor(Date.now() / 1e3), o = n?.period ?? 0;
		n.since = o === 0 ? a - 2592e3 : a - o, n.before = this.options.moderation === r.DELAYED && this.options.delay ? a - this.options.delay : a;
		let s = (e) => e.utc > (n?.since || 0), c = (e) => e.utc < (n?.before || a);
		try {
			let a = this.db.table(e.TOPICS).where("widget_id").equals(n.widget).filter(s).filter(c);
			this.options.moderation === r.APPROVED ? a.and((e) => e.approved === 1) : a.and((e) => e.visible === 1), a.reverse();
			let o = await a.limit(n?.limit ?? 25).sortBy(i);
			if (o.length === 0) return {
				data: null,
				message: "No Messages error",
				success: !1,
				query: n
			};
			let u = o.map((t) => this.db.table(e.MESSAGES).get({ id: t.message_id }));
			return m.Promise.all(u).then(async (e) => {
				let r = {
					data: { messages: e.map((e) => e?.data) },
					query: n,
					message: "Messages retrieved successfully",
					success: !0
				};
				return l(3, [
					"%cget%c %cstorage%c %cmessages",
					t.OK,
					t.NONE,
					t.STORAGE,
					t.NONE,
					t.MESSAGES,
					r
				]), r;
			});
		} catch (e) {
			return l(2, [
				"%cget%c %cstorage%c %cmessages",
				t.OK,
				t.NONE,
				t.STORAGE,
				t.NONE,
				t.NO_UPDATES,
				n,
				e.message
			]), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	hideMessage = async (n, r) => {
		await this.db.table(e.TOPICS).where("message_id").equals(n).modify({ visible: +!!r }).catch((e) => (console.error("%chide%c %cstorage%c %cmessage", t.KO, t.NONE, t.STORAGE, t.NONE, t.HIDE, e.message), 0));
	};
	approveMessage = async (n, r) => {
		await this.db.table(e.TOPICS).where("message_id").equals(n).modify({ approved: +!!r }).catch((e) => (console.error("%capprove%c %cstorage%c %cmessage", t.KO, t.NONE, t.STORAGE, t.NONE, t.OK, e.message), 0));
	};
	setMessages = async (n, r) => {
		if (n.type !== e.MESSAGES) return 400;
		let i = r.data.title, a = 0;
		return l(3, [
			"%cset%c %cstorage%c %cmessages",
			t.OK,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.MESSAGES,
			r?.title ?? n.widget
		]), await Promise.all(r.data.messages.map(async (o) => {
			if (o.id !== null) {
				o.topics[0] = {
					message_id: o.id,
					engagement: o.topics[0]?.engagement || o.dynamics?.engagement || 0,
					impressions: o.topics[0]?.impressions || o.dynamics?.semrush_visits || 0,
					reach: o.topics[0]?.reach || o.dynamics?.potential_reach || 0,
					sentiment: o.topics[0]?.sentiment || 0,
					approved: +!!o.topics[0]?.approved
				}, await this.db.table(e.MESSAGES).put({
					id: o.id,
					utc: o.utc,
					data: o,
					expires: o.expires
				}).catch((e) => {
					a++, l(4, [
						"%cset%c %cstorage",
						t.KO,
						t.NONE,
						t.STORAGE,
						"set message",
						`title: ${i}`,
						o,
						e.message
					]);
				});
				let s = {
					title: i,
					widget_id: n.widget,
					visible: o.topics[0]?.visible || 1,
					approved: o.topics[0]?.approved || 0,
					message_id: o.id,
					dashboard_id: n.dashboard,
					engagement: o.topics[0]?.engagement || o.dynamics?.engagement || 0,
					impressions: o.topics[0]?.impressions || o.dynamics?.semrush_visits || 0,
					reach: o.topics[0]?.reach || o.dynamics?.potential_reach || 0,
					sentiment: o.topics[0]?.sentiment || 0,
					utc: o.utc,
					expires: o.expires
				};
				await this.db.table(e.TOPICS).put(s).catch((e) => {
					a++, l(4, [
						"%cset%c %cstorage",
						t.KO,
						t.NONE,
						t.STORAGE,
						"set topic",
						`title: ${i}`,
						o,
						e.message
					]);
				}), await Promise.all(r.data.topics.map(async (n) => {
					let r = n.message_id, i = +!!n.visible, o = +!!n.approve, s = n.title;
					await this.db.table(e.TOPICS).where("message_id").equals(r).modify({
						visible: i,
						approve: o
					}).catch((e) => {
						a++, l(4, [
							"%cset%c %cstorage",
							t.KO,
							t.NONE,
							t.STORAGE,
							"update message visibility",
							`title: ${s}`,
							`widget: ${n.widget_id}`,
							e.message
						]);
					});
				}));
			}
		})), a === 0 ? 201 : 400;
	};
	getSeries = async (n) => {
		if (n.widget === "") return l(3, [
			"%cget%c %cstorage%c %cseries",
			t.NO_UPDATES,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.CLOUD,
			n
		]), {
			data: null,
			message: "Series Data error",
			success: !1,
			query: n
		};
		let r = await this.db.table(e.SERIES).where({ id: n.widget }).last().catch(() => {
			l(2, [
				"%cget%c %cstorage%c %cseries",
				t.KO,
				t.NONE,
				t.STORAGE,
				t.NONE,
				t.SERIES,
				n.widget
			]);
		}), i = {
			data: r?.data ?? null,
			message: r === void 0 ? "Get Series error" : "Get Series success",
			success: r !== void 0,
			query: n
		};
		return l(3, [
			"%cget%c %cstorage%c %cseries",
			t.OK,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.SERIES,
			i
		]), i;
	};
	setSeries = async (n, r) => (delete r?.query, n.type === e.SERIES && r !== "" ? (l(3, [
		"%cset%c %cstorage%c %cseries",
		t.OK,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.SERIES,
		r?.title ?? n.widget
	]), await this.db.table(e.SERIES).put({
		id: n.widget,
		dashboard_id: n.dashboard,
		hash: n.hash,
		data: r
	}).then(() => 201).catch((e) => (l(2, [
		"%cset%c %cstorage%c %cseries",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.SERIES,
		n,
		e.message
	]), 400))) : 400);
	getWidget = async (r) => {
		if (r.id === "") return l(3, [
			"%cget%c %cstorage%c %cwidget",
			t.KO,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.WIDGET,
			r
		]), {
			data: null,
			message: "Widget Data error",
			success: !1,
			query: r
		};
		let i = await this.db.table(e.WIDGET).where({ id: r.id }).last().catch(() => {
			console.warn("%cstorage", t.STORAGE, n.WIDGET_LOAD, r.id);
		});
		return i === void 0 ? {
			data: null,
			message: `Widget ${r.id} Load error`,
			success: !1
		} : (i.message = `Widget ${r.id} retrieved from storage`, i.success = !0, i);
	};
	getWidgets = async (r) => {
		let i = (e) => r?.dashboard === e.dashboard_id, a = (e) => r?.type === e.type, o = (e) => r?.name ? e.name.includes(r?.name) : !1, s = await this.db.table(e.WIDGET).toArray().then((e) => r?.dashboard ? e.filter(i) : e).then((e) => r?.type ? e.filter(a) : e).then((e) => r?.name ? e.filter(o) : e).catch(() => {
			l(2, [
				"%cstorage",
				t.STORAGE,
				n.WIDGET_LOAD,
				r
			]);
		});
		return s !== void 0 && l(3, [
			"%cstorage%c %cwidgets",
			t.STORAGE,
			t.NONE,
			t.MESSAGES,
			r
		]), {
			data: s === void 0 ? null : {
				data: s,
				query: r
			},
			message: s === void 0 ? "Widgets load error" : "Widgets loaded from storage",
			success: s !== void 0
		};
	};
	setWidget = async (n) => await this.db.table(e.WIDGET).put({
		id: n.id,
		name: n.title,
		dashboard_id: n.dashboard_id,
		type: n.type,
		update: n.update
	}).then(() => ({
		data: null,
		message: `Widget ${n.id} saved to storage`,
		success: !0
	})).catch((r) => (console.error("%cstorage", t.STORAGE, e.WIDGET, n, r.message), {
		data: null,
		message: `Widget ${n.id} save error: ${r.message}`,
		success: !1
	}));
	deleteWidget = async (n) => await this.db.table(e.WIDGET).where({ id: n.id }).delete().then(() => ({
		data: null,
		message: `Widget ${n.id} deleted from storage`,
		success: !0
	})).catch((r) => (console.error("%cstorage", t.STORAGE, e.WIDGET, n, r.message), {
		data: null,
		message: `Widget ${n.id} save error: ${r.message}`,
		success: !1
	}));
	deleteWidgets = async () => await this.db.table(e.WIDGET).clear().then(() => ({
		data: null,
		message: "Widgets table deleted from storage",
		success: !0
	})).catch((n) => (console.error("%cstorage", t.STORAGE, e.WIDGETS, "deleted", n.message), {
		data: null,
		message: `Widgets table deleted error: ${n.message}`,
		success: !1
	}));
	subscribe = (n) => (n = f(n), this.subscribers.filter((e) => e.widget === n.widget).length > 0 || (n.type === e.MESSAGES && (n = u(this.options, n)), console.info("%cstorage%c %csubscribe", t.STORAGE, t.NONE, t.SUBSCRIBE, n.slide, n.widget), console.debug("%cstorage%c %csubscribe", t.STORAGE, t.NONE, t.SUBSCRIBE, n), this.subscribers.push(n)), null);
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (r) => {
		let i = await this.db.table(e.SLIDE).where({ id: r.id }).last().catch(() => {
			l(2, [
				"%cstorage",
				t.STORAGE,
				n.SLIDE_LOAD,
				r.id
			]);
		});
		return {
			data: i,
			query: r,
			message: i === void 0 ? "Slide load error" : "Slide loaded from storage",
			success: i !== void 0
		};
	};
	getSlides = async (n) => {
		let r = (e) => n?.id ? e.id === n.id : !1, i = (e) => n?.name ? e.name.includes(n?.name) : !1, a = (e) => n?.presentation_id ? e.presentation_id === n.presentation_id : !1, o = await this.db.table(e.SLIDE).toArray().then((e) => n?.presentation_id ? e.filter(a) : e).then((e) => n?.id ? e.filter(r) : e).then((e) => n?.name ? e.filter(i) : e);
		return o && o.sort((e, t) => e.order_index - t.order_index), o !== void 0 && l(3, [
			"%cstorage%c %cslides",
			t.STORAGE,
			t.NONE,
			t.SLIDE,
			n
		]), {
			data: o,
			query: n,
			message: o === void 0 ? "Slides load error" : "Slides loaded from storage",
			success: o !== void 0
		};
	};
	setSlide = async (r) => await this.db.table(e.SLIDE).put({
		id: r.data.id,
		presentation_id: r.data.presentation_id,
		order_index: r.data.order_index,
		name: r.data.name.replace("-copy", "") || "Not set",
		json: r.data.json || {},
		html: r.data.html || "",
		update: r.data.update
	}).then(() => ({
		data: null,
		message: `Slide ${r.data.id} saved to storage`,
		success: !0
	})).catch((e) => (console.error("%cstorage", t.STORAGE, n.SLIDE_STORE, r, e.message), {
		data: null,
		message: `Slide ${r.data.id} save error: ${e.message}`,
		success: !1
	}));
	deleteSlide = async (n) => await this.db.table(e.SLIDE).where({ id: n.id }).delete().then(() => ({
		data: null,
		message: `Slide ${n.id} deleted from storage`,
		success: !0
	})).catch((r) => (console.error("%cstorage", t.STORAGE, e.WIDGET, n, r.message), {
		data: null,
		message: `Widget ${n.id} save error: ${r.message}`,
		success: !1
	}));
	deleteSlides = async () => await this.db.table(e.SLIDE).clear().then(() => ({
		data: null,
		message: "Slide table deleted from storage",
		success: !0
	})).catch((n) => (console.error("%cstorage", t.STORAGE, e.SLIDE, "deleted", n.message), {
		data: null,
		message: `Slide table deleted error: ${n.message}`,
		success: !1
	}));
	getPresentation = async (r) => {
		let i = await this.db.table(e.PRESENTATION).where({ id: r.id }).last().catch(() => {
			console.warn("%cstorage ", t.STORAGE, n.PRESENTATION_LOAD, r.id);
		});
		return i === void 0 ? {
			data: null,
			message: `Presentation ${r.id} Load error`,
			success: !1
		} : (i.query = r, i.message = `Presentation ${r.id} retrieved from storage`, i.success = !0, i);
	};
	getPresentations = async (n) => {
		let r = (e) => n?.name ? e.name.includes(n?.name) : !1, i = await this.db.table(e.PRESENTATION).toArray().then((e) => n?.name ? e.filter(r) : e);
		return i !== void 0 && l(3, [
			"%cstorage%c %cpresentations",
			t.STORAGE,
			t.NONE,
			t.PRESENTATION,
			n
		]), {
			data: i,
			query: n,
			message: i === void 0 ? "Presentations load error" : "Presentations loaded from storage",
			success: i !== void 0
		};
	};
	setPresentation = async (r) => await this.db.table(e.PRESENTATION).put({
		id: r.data.id,
		name: r.data.name || "Not set",
		data: r.data,
		update: r.update
	}).then(() => ({
		data: null,
		query: r,
		message: `Presentation ${r.data.id} saved to storage`,
		success: !0
	})).catch((e) => (console.error("%cstorage", t.STORAGE, n.PRESENTATION_STORE, r, e.message), {
		data: null,
		query: r,
		message: `Presentation ${r.data.id} save error: ${e.message}`,
		success: !1
	}));
	deletePresentation = async (n) => await this.db.table(e.PRESENTATION).where({ id: n.id }).delete().then(() => ({
		data: null,
		message: `Presentation ${n.id} deleted from storage`,
		success: !0
	})).catch((r) => (console.error("%cstorage", t.STORAGE, e.PRESENTATION, n, r.message), {
		data: null,
		message: `Presentation ${n.id} save error: ${r.message}`,
		success: !1
	}));
	deletePresentations = async () => await this.db.table(e.PRESENTATION).clear().then(() => ({
		data: null,
		message: "Presentation table deleted from storage",
		success: !0
	})).catch((n) => (console.error("%cstorage", t.STORAGE, e.PRESENTATION, "deleted", n.message), {
		data: null,
		message: `Presentation table deleted error: ${n.message}`,
		success: !1
	}));
	getPreference = async (r) => {
		let i = await this.db.table(e.PREFERENCE).where({ id: r.id }).last().catch(() => {
			l(2, [
				"%cstorage",
				t.STORAGE,
				n.PREFERENCE_LOAD,
				r.id
			]);
		});
		return {
			data: i === void 0 ? null : { preferences: i },
			message: i === void 0 ? "Preference load error" : "Preference loaded from storage",
			success: i !== void 0,
			query: {
				preference: r,
				widget: ""
			}
		};
	};
	getPreferences = async (n) => {
		let r = (e) => n?.id ? n.id = e.id : !1, i = await this.db.table(e.PREFERENCE).toArray().then((e) => n?.id ? e.filter(r) : e);
		return i !== void 0 && l(3, [
			"%cstorage%c %cpreferences",
			t.STORAGE,
			t.NONE,
			t.PRESENTATION,
			n
		]), {
			data: i === void 0 ? null : {
				preferences: i,
				query: n
			},
			message: i === void 0 ? "Preferences load error" : "Preferences loaded from storage",
			success: i !== void 0
		};
	};
	setPreference = async (r) => await this.db.table(e.PREFERENCE).put({
		id: r.id,
		value: r.value,
		update: r.update
	}).then(() => ({
		data: null,
		message: `Preference ${r.id} saved to storage`,
		success: !0
	})).catch((e) => (console.error("%cstorage", t.STORAGE, n.PREFERENCE_STORE, r, e.message), {
		data: null,
		message: `Preference ${r.id} save error: ${e.message}`,
		success: !1
	}));
	deletePreference = async (n) => await this.db.table(e.PREFERENCE).where({ id: n.id }).delete().then(() => ({
		data: null,
		message: `Preference ${n.id} deleted from storage`,
		success: !0
	})).catch((r) => (console.error("%cstorage", t.STORAGE, e.PREFERENCE, n, r.message), {
		data: null,
		message: `Preference ${n.id} save error: ${r.message}`,
		success: !1
	}));
	getImages = async (n) => {
		let r = (e) => n?.id ? e.includes(n.id) : !1, i = await this.db.table(e.IMAGES).toArray().then((e) => n?.id ? e.filter(r) : e);
		return i !== void 0 && l(3, [
			"%cstorage%c %cimages",
			t.STORAGE,
			t.NONE,
			t.PRESENTATION,
			n
		]), {
			data: i === void 0 ? null : {
				images: i,
				query: n
			},
			message: i === void 0 ? "Images load error" : "Images loaded from storage",
			success: i !== void 0
		};
	};
	setImage = async (r) => await this.db.table(e.IMAGES).put({
		id: r.data.name,
		basename: r.data.basename,
		extension: r.data.extension,
		size: r.data.size,
		type: r.data.type,
		url: r.data.url
	}).then(() => ({
		data: null,
		message: `Image ${r.data.name} saved to storage`,
		success: !0
	})).catch((e) => (console.error("%cstorage", t.STORAGE, n.IMAGE_SET, r, e.message), {
		data: null,
		message: `Image ${r.data.id} save error: ${e.message}`,
		success: !1
	}));
}, b = class {
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
	getCloud = async (n) => {
		let r = s(n);
		return await h(r).then((e) => e).catch(() => (console.warn("%capi", t.API, e.CLOUD, n.slide, n.widget), {
			data: null,
			message: "Cloud Data error",
			success: !1
		}));
	};
	getSeries = async (n) => {
		let r = s(n);
		return await h(r).then((e) => e).catch(() => (console.warn("%capi", t.API, e.SERIES, n.slide, n.widget), {
			data: null,
			message: "Series Data error",
			success: !1
		}));
	};
	getMessages = async (n) => {
		let r = s(n);
		return await h(r).then((e) => e).catch(() => (console.warn("%capi", t.API, e.MESSAGES, n.slide, n.widget), {
			data: null,
			message: "Messages Data error",
			success: !1
		}));
	};
	setCloud = async (n, r) => {
		if (!r.success) return 400;
		let i = s(n);
		return delete r.success, delete r.message, await g(i, r).then(() => 201).catch((r) => (console.error("%cstorage", t.STORAGE, e.CLOUD, n, r.message), 400));
	};
	setSeries = async (n, r) => {
		if (!r.success) return 400;
		let i = s(n);
		return delete r.success, delete r.message, await g(i, r).then(() => 201).catch((r) => (console.error("%cstorage", t.STORAGE, e.SERIES, n, r.message), 400));
	};
	setMessages = async (n, r) => {
		if (!r.success) return 400;
		let i = s(n);
		return delete r.success, delete r.message, await g(i, r).then(() => 201).catch((r) => (console.error("%cstorage", t.STORAGE, e.MESSAGES, n, r.message), 400));
	};
	cleanMessages = async (e) => (console.log("cleanMessages not implemented for ", this.options.storage), await new Promise((e) => e(0)));
	hideMessage = async (e, t) => {
		console.debug(`hideMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	approveMessage = async (e, t) => {
		console.debug(`approveMessage ${e} ${t} not implemented for ${this.options.storage}`);
	};
	getDashboard = async (n) => {
		let r = s(n);
		return await h(r).then((e) => e).catch((r) => (console.warn("%capi", t.API, e.SLIDE, n.id), {
			data: null,
			message: `Widget ${n.data.id} load error: ${r.message}`,
			success: !1
		}));
	};
	getDashboards = async () => ({
		data: null,
		message: "Dashboards get error: ",
		success: !1
	});
	setDashboard = async (n) => {
		let r = s(n), i = {
			id: n.dashboard,
			name: n.name
		};
		return await g(r, i).then(() => ({
			data: null,
			message: `Dashboard ${n.data.id} saved to storage`,
			success: !0
		})).catch((r) => (console.error("%cstorage", t.STORAGE, e.WIDGET, n, r.message), {
			data: null,
			message: `Slide ${n.data.id} save error: ${r.message}`,
			success: !1
		}));
	};
	getWidget = async (n) => {
		let r = s(n);
		return await h(r).then((e) => e).catch((r) => (console.warn("%capi", t.API, e.SLIDE, n.id), {
			data: null,
			message: `Widget ${n.data.id} load error: ${r.message}`,
			success: !1
		}));
	};
	getWidgets = async (n) => (console.warn("%capi", t.API, e.SLIDE, n?.presentation), {
		data: null,
		message: "Widgets load error: ",
		success: !1
	});
	setWidget = async (n) => {
		let r = s(n), i = {
			id: n.widget,
			name: n.name,
			dashboard_id: n.dashboard,
			type: n.type
		};
		return await g(r, i).then(() => ({
			data: null,
			message: `Widget ${n.data.id} saved to storage`,
			success: !0
		})).catch((r) => (console.error("%cstorage", t.STORAGE, e.WIDGET, n, r.message), {
			data: null,
			message: `Slide ${n.data.id} save error: ${r.message}`,
			success: !1
		}));
	};
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
	subscribe = (n) => (n.type === e.MESSAGES && (n = u(this.options, n)), this.subscribers.filter((e) => e.widget === n.widget).length > 0 || (console.debug("%cstorage%c %csubscribe", t.STORAGE, t.NONE, t.SUBSCRIBE, n.slide, n.widget), this.subscribers.push(n)), null);
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (n) => {
		let r = s(n);
		return await h(r).then((e) => e).catch((r) => (console.warn("%capi", t.API, e.SLIDE, n.id), {
			data: null,
			message: `Slide ${n.data.id} load error: ${r.message}`,
			success: !1
		}));
	};
	getSlides = async (n) => (console.warn("%capi", t.API, e.SLIDE, n.presentation), {
		data: null,
		message: `Slided ${n.presentation} load error: `,
		success: !1
	});
	setSlide = async (n) => {
		let r = s(n), i = {
			id: n.data.id,
			title: n.data.title || "Not set",
			json: n.data.json || {},
			html: n.data.html || ""
		};
		return await g(r, i).then(() => ({
			data: null,
			message: `Slide ${n.data.id} saved to storage`,
			success: !0
		})).catch((r) => (console.error("%cstorage", t.STORAGE, e.SLIDE, n, r.message), {
			data: null,
			message: `Slide ${n.data.id} save error: ${r.message}`,
			success: !1
		}));
	};
	getPresentation = async (n) => {
		let r = s(n);
		return await h(r).then((e) => e).catch((r) => (console.warn("%capi", t.API, e.PRESENTATION, n.id), {
			data: null,
			message: `Slide ${n.data.id} load error: ${r.message}`,
			success: !1
		}));
	};
	getPresentations = async () => ({
		data: null,
		message: "Presentations get error: ",
		success: !1
	});
	setPresentation = async (n) => {
		let r = s(n), i = n.data;
		return await g(r, i).then(() => ({
			data: null,
			message: `Presentation ${n.data.id} saved to storage`,
			success: !0
		})).catch((r) => (console.error("%cstorage", t.STORAGE, e.PRESENTATION, n, r.message), {
			data: null,
			message: `Presentation ${n.data.id} save error: ${r.message}`,
			success: !1
		}));
	};
	getPreference = async (n) => await h(`${e.PREFERENCE}.${n.id}`).then((e) => e).catch((r) => (console.warn("%capi", t.API, e.PREFERENCE, n.id), {
		data: null,
		message: `Preference ${n.id} get error: ${r.message}`,
		success: !1
	}));
	getPreferences = async () => await h(`${e.PREFERENCE}`).then((e) => e).catch((n) => (console.warn("%capi", t.API, e.PREFERENCE), {
		data: null,
		message: `Preferences get error: ${n.message}`,
		success: !1
	}));
	setPreference = async (n) => await g(`${e.PREFERENCE}.${n.id}`, n.value).then(() => ({
		data: null,
		message: `Preference ${n.id} save error`,
		success: !0
	})).catch((r) => (console.error("%cstorage", t.STORAGE, e.PREFERENCE, n, r.message), {
		data: null,
		message: `Preference ${n.id} save error: ${r.message}`,
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
}, x = class {
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
	getCloud = async (n) => {
		let r = s(n);
		try {
			return window.__bc.WidgetData[r];
		} catch (r) {
			return console.warn("%capi", t.API, e.CLOUD, n.slide, n.widget, r), {
				data: null,
				message: "Cloud Data error",
				success: !1
			};
		}
	};
	getSeries = async (n) => {
		let r = s(n);
		try {
			return window.__bc.WidgetData[r];
		} catch (r) {
			return console.warn("%capi", t.API, e.SERIES, n.slide, n.widget, r), {
				data: null,
				message: "Series Data error",
				success: !1
			};
		}
	};
	getMessages = async (n) => {
		let r = s(n);
		try {
			return window.__bc.WidgetData[r];
		} catch (r) {
			return console.warn("%capi", t.API, e.MESSAGES, n.slide, n.widget, r), {
				data: null,
				message: "Messages Data error",
				success: !1
			};
		}
	};
	setCloud = async (e, n) => {
		let r = s(e);
		try {
			return window.__bc.WidgetData[r] = n, 201;
		} catch (n) {
			return console.error("%cstorage", t.STORAGE, "set", e, n), 400;
		}
	};
	setSeries = async (e, n) => {
		let r = s(e);
		try {
			return window.__bc.WidgetData[r] = n, 201;
		} catch (n) {
			return console.error("%cstorage", t.STORAGE, "set", e, n), 400;
		}
	};
	setMessages = async (e, n) => {
		let r = s(e);
		try {
			return window.__bc.WidgetData[r] = n, 201;
		} catch (n) {
			return console.error("%cstorage", t.STORAGE, "set", e, n), 400;
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
	getDashboard = async (n) => {
		try {
			return window.__bc.DashboardData[n.id];
		} catch (r) {
			return console.warn("%capi", t.API, e.DASHBOARD, n.id, r), {
				data: null,
				message: `Dashboard ${n.id} load error: ${r.message}`,
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
		let r = `widget.${n.widget}`;
		try {
			return window.__bc.DashboardData[r] = n, {
				data: null,
				message: `Dashboard ${n.data.id} saved to storage`,
				success: !0
			};
		} catch (r) {
			return console.error("%cstorage", t.STORAGE, e.DASHBOARD, n, r), {
				data: null,
				message: `Dashboard ${n.data.id} save error: ${r.message}`,
				success: !1
			};
		}
	};
	deleteDashboard = async (e) => 404;
	deleteDashboards = async () => 404;
	getWidget = async (n) => {
		try {
			return window.__bc.WidgetData[n.id];
		} catch (r) {
			return console.warn("%capi", t.API, e.WIDGET, n.id, r), {
				data: null,
				message: `Widget ${n.id} load error: ${r.message}`,
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
		let r = `widget.${n.widget}`;
		try {
			return window.__bc.WidgetData[r] = n, {
				data: null,
				message: `Widget ${n.data.id} saved to storage`,
				success: !0
			};
		} catch (r) {
			return console.error("%cstorage", t.STORAGE, e.WIDGET, n, r), {
				data: null,
				message: `Slide ${n.data.id} save error: ${r.message}`,
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
	subscribe = (n) => (n.type === e.MESSAGES && (n = u(this.options, n)), this.subscribers.filter((e) => e.widget === n.widget).length || (console.debug("%cstorage%c %csubscribe", t.STORAGE, t.NONE, t.SUBSCRIBE, n.slide, n.widget), this.subscribers.push(n)), null);
	getSubscribers = async () => await new Promise((e) => e(this.subscribers));
	getSlide = async (n) => {
		try {
			return window.__bc.SlideData[n.id];
		} catch (r) {
			return console.warn("%capi", t.API, e.SLIDE, n.id, r), {
				data: null,
				message: `Slide ${n.id} load error: ${r.message}`,
				success: !1
			};
		}
	};
	getSlides = async (n) => {
		try {
			return window.__bc.SlideData.filter((e) => e.presentation_id === n.presentation);
		} catch (r) {
			return console.warn("%capi", t.API, e.PRESENTATION, n.presentation_id, r), {
				data: null,
				message: `Slides for presentation ${n.presentation} load error: ${r.message}`,
				success: !1
			};
		}
	};
	setSlide = async (n) => {
		try {
			return window.__bc.SlideData[n.id] = {
				id: n.slide,
				title: n.data.title || "Not set",
				json: n.data.json || {},
				html: n.data.html || ""
			}, {
				data: null,
				message: `Slide ${n.data.id} saved to storage`,
				success: !0
			};
		} catch (r) {
			return console.error("%cstorage", t.STORAGE, e.SLIDE, n, r), {
				data: null,
				message: `Slide ${n.data.id} save error: ${r.message}`,
				success: !1
			};
		}
	};
	getPresentation = async (n) => {
		try {
			let e = n.presentation || "none";
			return window.__bc.PresentationData[e];
		} catch (r) {
			return console.warn("%capi", t.API, e.PRESENTATION, n.presentation, r), {
				data: null,
				message: `Presentation ${n.presentation} load error: ${r.message}`,
				success: !1
			};
		}
	};
	getPresentations = async () => {
		try {
			return window.__bc.PresentationData;
		} catch (n) {
			return console.warn("%capi", t.API, e.PRESENTATION, n), {
				data: null,
				message: `Presentations get error: ${n.message}`,
				success: !1
			};
		}
	};
	setPresentation = async (n) => {
		try {
			return window.__bc.PresentationData[n.id] = n.data, {
				data: null,
				message: `Presentation ${n.data.id} saved to storage`,
				success: !0
			};
		} catch (r) {
			return console.error("%cstorage", t.STORAGE, e.PRESENTATION, n, r), {
				data: null,
				message: `Presentation ${n.data.id} save error: ${r.message}`,
				success: !1
			};
		}
	};
	getPreference = async (n) => {
		try {
			return window.__bc.Preferences[n.id];
		} catch (r) {
			return console.warn("%capi", t.API, e.PREFERENCE, n.id, r), {
				data: null,
				message: `Preference ${n.id} load error: ${r.message}`,
				success: !1
			};
		}
	};
	getPreferences = async () => {
		try {
			return window.__bc.Preferences;
		} catch (n) {
			return console.warn("%capi", t.API, e.PREFERENCE, n), {
				data: null,
				message: `Preferences get error: ${n.message}`,
				success: !1
			};
		}
	};
	setPreference = async (n) => {
		try {
			return window.__bc.Preferences[n.id] = n.value, {
				data: null,
				message: `Preference ${n.id} saved to storage`,
				success: !0
			};
		} catch (r) {
			return console.error("%cstorage", t.STORAGE, e.PREFERENCE, n, r), {
				data: null,
				message: `Preference ${n.id} save error: ${r.message}`,
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
function S(e) {
	switch (e.storage) {
		case i.DEXIE: return new y(e);
		case i.KEYVAL: return new b(e);
		case i.WINDOW: return new x(e);
		default: return null;
	}
}
// src/manager/index.ts
var C = class {
	sm;
	api;
	bc;
	options;
	subscribers = [];
	constructor(e) {
		l(3, [
			"%cpresentation",
			t.PRESENTATION,
			e.presentation,
			n.VERSION,
			_
		]), this.options = e, this.bc = new BroadcastChannel(this.options.presentation), this.api = new v(e), this.sm = S(e);
	}
	addSubscriber(e) {
		this.subscribers[e.widget] = e;
	}
	deleteSubscriber(e) {
		delete this.subscribers[e.widget];
	}
	update = async (e) => {
		if (l(3, [
			"%cupdate%c %cdata",
			t.NO_UPDATES,
			t.NONE,
			t.MESSAGES,
			e
		]), this.sm === null || Object.keys(this.subscribers).length === 0) return;
		let n = [];
		Object.values(this.subscribers).forEach((e) => {
			e.dashboard?.length && e.widget?.length && e.type?.length && n.push(this.api.get(e));
		}), await Promise.all(n.map(async (t) => await this.processResponse(await t, e)));
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
	processResponse = async (n, r) => {
		let i, a = {
			code: 400,
			hash: ""
		}, o = "", s;
		if (n.success === !0) {
			let u = n.query;
			switch (u.type) {
				case e.MESSAGES:
					s = await this.sm?.getHash(u), s === "none" && (u.hash = "temp", await this.sm?.createHash(u)), n.data.messages = n.data.messages.filter((e) => e.id !== null), o = n.data.messages.length > 0 ? c(n.data.messages[0].utc) : "none", s === o && r.refresh === !1 ? (l(3, [
						"%cset%c %cstorage%c %cmessages",
						t.NO_UPDATES,
						t.NONE,
						t.STORAGE,
						t.NONE,
						t.MESSAGES,
						n.data?.title ?? n.query.widget,
						`same hash:${o}`
					]), a.code = 204) : this.sm === null ? a.code = 500 : (u.hash = o, await this.sm?.setHash(u), a.code = await this.sm.setMessages(n.query, n).then(async (e) => (r.refresh && e === 204 && (e = 201), this.broadcastUpdate(e, n), e)).catch(() => 500));
					break;
				case e.CLOUD:
					s = await this.sm?.getHash(u), s === "none" && (u.hash = "temp", await this.sm?.createHash(u)), o = c(n.data.cloud), s === o && r.refresh === !1 ? (l(3, [
						"%cset%c %cstorage%c %ccloud",
						t.NO_UPDATES,
						t.NONE,
						t.STORAGE,
						t.NONE,
						t.CLOUD,
						n.data?.title ?? u.widget,
						`same hash:${o}`
					]), l(4, [
						"%cdebug%c %ccloud",
						t.NO_UPDATES,
						t.NONE,
						t.CLOUD,
						n.query
					]), a = {
						code: 204,
						hash: o
					}) : (u.hash = o, await this.sm?.setHash(u), i = {
						data: { cloud: n.data },
						message: n.message,
						success: n.success,
						query: n.query
					}, this.sm === null ? a.code = 500 : a.code = await this.sm.setCloud(n.query, i.data).then((e) => (r.refresh && e === 204 && (e = 201), this.broadcastUpdate(e, n), e)).catch(() => 500));
					break;
				case e.SERIES:
					s = await this.sm?.getHash(u), s === "none" && (u.hash = "temp", await this.sm?.createHash(u)), o = c(n.data.series), s === o && r.refresh === !1 ? (l(3, [
						"%cset%c %cstorage%c %cseries",
						t.NO_UPDATES,
						t.NONE,
						t.STORAGE,
						t.NONE,
						t.SERIES,
						n.data?.title ?? n.query.widget,
						`same hash:${o}`
					]), l(4, [
						"%cdebug%c %cseries",
						t.NO_UPDATES,
						t.NONE,
						t.SERIES,
						u
					]), a = {
						code: 204,
						hash: o
					}) : (u.hash = o, await this.sm?.setHash(u), i = {
						data: n.data,
						message: n.message,
						success: n.success,
						query: n.query
					}, this.sm === null ? a.code = 500 : a.code = await this.sm.setSeries(u, n.data).then((e) => (r.refresh && e === 204 && (e = 201), this.broadcastUpdate(e, n), e)).catch(() => 500));
					break;
				default: l(3, [
					`%cfetch%c %capi% %c${u.type} `,
					t.KO,
					t.NONE,
					t.API,
					t.NONE,
					t.NO_UPDATES,
					`Bad request: type ${u.type} unknown`
				]), a = {
					code: 404,
					hash: o
				};
			}
		} else switch (l(3, [
			`%cset%c %c${n.query.type}%c %cunauthorized`,
			t.KO,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.NO_UPDATES,
			n.query
		]), n.query.type) {
			case e.MESSAGES: return this.sm === null ? {
				code: 500,
				hash: o
			} : await this.sm?.getMessages(n.query).then((e) => (this.broadcastUpdate(201, e), {
				code: 201,
				hash: o
			}));
			case e.CLOUD: return this.sm === null ? {
				code: 500,
				hash: o
			} : await this.sm?.getCloud(n.query).then((e) => (this.broadcastUpdate(201, e), {
				code: 201,
				hash: o
			}));
			case e.SERIES: return this.sm === null ? {
				code: 500,
				hash: o
			} : await this.sm?.getSeries(n.query).then((e) => (this.broadcastUpdate(201, e), {
				code: 201,
				hash: o
			}));
		}
		return n = null, a;
	};
	startBroadcastListener = () => {
		let e = this.options.presentation;
		l(3, [
			"%cchannel%c %capi",
			t.BROADCAST,
			t.NONE,
			t.API,
			e
		]), this.bc && (this.bc.onmessage = (e) => {
			this.actions(e);
		}, this.bc.postMessage({
			event: n.STORAGE_INIT,
			data: {}
		}));
	};
	broadcastMessage = (e, t) => {
		this.bc && this.bc.postMessage({
			event: e,
			data: t
		});
	};
	broadcastUpdate = (e, r) => {
		switch (e) {
			case 201:
				l(3, [
					`%cupdate%c %cwidget%c %c${r.query?.type}`,
					t.BROADCAST,
					t.NONE,
					t.WIDGET,
					t.NONE,
					d(r.query),
					`${r?.data?.title ?? ""} ${r.query.widget}`
				]), l(4, [
					"%cdebug%c %cevent",
					t.NO_UPDATES,
					t.NONE,
					t.BROADCAST,
					r
				]), this.bc?.postMessage({
					event: n.WIDGET_UPDATE,
					data: r.query
				});
				break;
			case 204: break;
			default: l(2, [
				`%cupdate%c %cwidget%c %c${r.query?.type}`,
				t.KO,
				t.NONE,
				t.WIDGET,
				t.NONE,
				d(r.query),
				"Fetch error",
				r.query
			]);
		}
	};
	hide = (e) => {
		this.api.hideMessage(e);
	};
	actions = async (e) => {
		switch (e.data.event) {
			case n.SUBSCRIBE: {
				let n = e.data.data;
				n.widget !== void 0 && (l(3, [
					`%csubscribe%c %cwidget%c %c${e.data.data.type}`,
					t.BROADCAST,
					t.NONE,
					t.WIDGET,
					t.NONE,
					d(n),
					n
				]), this.addSubscriber(n));
				break;
			}
			case n.UNSUBSCRIBE:
				e.data.data.widget !== void 0 && this.deleteSubscriber(e.data.data);
				break;
			case n.UPDATE:
				l(3, [
					"%cupdate%c %capi%c %cstorage",
					t.BROADCAST,
					t.NONE,
					t.API,
					t.NONE,
					t.STORAGE,
					e.data
				]), await this.update(e.data.data);
				break;
			case "stream": l(3, [
				"%cupdate%c %capi%c %cstorage",
				t.BROADCAST,
				t.NONE,
				t.API,
				t.NONE,
				t.STORAGE,
				e.data
			]), await this.stream();
		}
	};
	cleanMessages = async () => {
		if (this.options?.suspended) {
			l(2, [
				"%cclean%c %cstorage%c %cmessages",
				t.KO,
				t.NONE,
				t.STORAGE,
				t.NONE,
				t.MESSAGES,
				"Account suspended"
			]);
			return;
		}
		let e = this.options?.retention || 3456e3, n = await this.sm?.cleanMessages(e);
		l(3, [
			"%cclean%c %cstorage%c %cmessages",
			t.OK,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.MESSAGES,
			`${n} messages deleted`
		]);
	};
	hideMessage = async (e) => {
		let n = await this.sm?.hideMessage(e.id, 0);
		return l(3, [
			"%chide%c %cstorage%c %cmessages",
			t.OK,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.MESSAGES,
			`${n} messages hidden`
		]), await this.api.hideMessage(e);
	};
	hideLabels = async (e) => await this.api.hideLabels(e);
	approveMessage = async (e) => {
		let n = await this.sm?.approveMessage(e.id, +!!e.approved);
		l(3, [
			"%capprove%c %cstorage%c %cmessages",
			t.OK,
			t.NONE,
			t.STORAGE,
			t.NONE,
			t.MESSAGES,
			`${n} messages approved`
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
}, w = class {
	sm;
	constructor(e) {
		this.sm = S(e);
	}
	getCloud = async (n) => n.type === e.CLOUD ? await this.sm?.getCloud(n) : (console.warn("%cget%c %cstorage%c %ccloud", t.KO, t.NONE, t.STORAGE, t.NONE, t.CLOUD, n.widget, "wrong method call for getCloud, type used is", n.type), {
		data: null,
		message: `'wrong method call for getCloud, type used is ${n.type}`,
		success: !1
	});
	getMessages = async (n) => n.type === e.MESSAGES ? await this.sm?.getMessages(n) : (console.warn("%cget%c %cstorage%c %cmessages", t.KO, t.NONE, t.STORAGE, t.NONE, t.MESSAGES, n.widget, "wrong method call for getMessages, type used is", n.type), {
		data: null,
		message: `'wrong method call for getMessages, type used is ${n.type}`,
		success: !1
	});
	getSeries = async (n) => n.type === e.SERIES ? await this.sm?.getSeries(n) : (console.warn("%cget%c %cstorage%c %cseries", t.KO, t.NONE, t.STORAGE, t.NONE, t.SERIES, n.widget, "wrong method call for getSeries, type used is", n.type), {
		data: null,
		message: `'wrong method call for getSeries, type used is ${n.type}`,
		success: !1
	});
}, T = class {
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
		r.presentation = i?.presentation ?? `${n} not found`, this.query = r, o(e), this.storageReader = new w(i), this.broadcastChannel = new BroadcastChannel(r.presentation), this.broadcastListener();
	}
	addCallbackListener(e) {
		this.callbacks.push(e);
	}
	broadcastListener() {
		let e = this.query;
		this.broadcastChannel.onmessage = async (r) => {
			let i = r.data.data;
			switch (r.data.event) {
				case n.WIDGET_UPDATE:
					try {
						if (i.dashboard === e.dashboard && i.widget === e.widget) {
							let e = await this.getData();
							e?.success && (l(4, [
								`%cset%c %cwidget%c %c${this.query.type}`,
								t.OK,
								t.NONE,
								t.WIDGET,
								t.NONE,
								d(this.query),
								this.query
							]), this.callbacks.forEach(async (t) => {
								t(e);
							}));
						}
					} catch (e) {
						l(4, [
							n.WIDGET_UPDATE,
							i,
							e.message,
							e
						]);
					}
					break;
				case n.APP_READY: this.subscribe();
			}
		};
	}
	subscribe() {
		this.query.dashboard?.length && this.query.widget?.length && this.query.type?.length && (this.broadcastChannel.postMessage({
			event: n.SUBSCRIBE,
			data: this.query
		}), l(3, [
			`%csubscribe%c %cwidget%c %c${this.query.type}`,
			t.SUBSCRIBE,
			t.NONE,
			t.WIDGET,
			t.NONE,
			d(this.query),
			this.query.widget
		]), l(4, [
			"%cdebug%c %cwidget",
			t.NO_UPDATES,
			t.NONE,
			t.WIDGET,
			this.query
		]));
	}
	unsubscribe() {
		this.query.widget?.length && (this.broadcastChannel.postMessage({
			event: n.UNSUBSCRIBE,
			data: this.query
		}), l(3, [
			`%cunsubscribe%c %cwidget%c %c${this.query.type}`,
			t.SUBSCRIBE,
			t.NONE,
			t.WIDGET,
			t.NONE,
			d(this.query),
			this.query.widget
		]));
	}
	getData = async () => {
		switch (this.query.type) {
			case e.CLOUD: return await this.getCloud();
			case e.MESSAGES: return await this.getMessages();
			case e.SERIES: return await this.getSeries();
		}
		return {
			data: null,
			message: `wrong method call, '${this.query.type}' is unknown`,
			success: !1,
			query: this.query
		};
	};
	getCloud = async () => this.query.type === e.CLOUD ? await this.storageReader.getCloud(this.query) : (l(3, [
		"%cget%c %cstorage%c %cwidget",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.WIDGET,
		this.query.widget,
		"Wrong method call for getCloud, expected type is",
		this.query.type
	]), l(4, [
		"%cdebug%c %ccloud",
		t.NO_UPDATES,
		t.NONE,
		t.CLOUD,
		this.query
	]), {
		data: null,
		message: `wrong method call for getCloud, expected type is '${this.query.type}'`,
		success: !1,
		query: this.query
	});
	getMessages = async () => this.query.type === e.MESSAGES ? await this.storageReader.getMessages(this.query) : (l(3, [
		"%cget%c %cstorage%c %cwidget",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.WIDGET,
		this.query.widget,
		"Wrong method call for getMessages, expected type is",
		this.query.type
	]), l(4, [
		"%debug%c %cmessages",
		t.NO_UPDATES,
		t.NONE,
		t.MESSAGES,
		this.query
	]), {
		data: null,
		message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
		success: !1
	});
	getSeries = async () => this.query.type === e.SERIES ? await this.storageReader.getSeries(this.query) : (l(3, [
		"%cget%c %cstorage%c %cwidget",
		t.KO,
		t.NONE,
		t.STORAGE,
		t.NONE,
		t.WIDGET,
		this.query.widget,
		"Wrong method call for getSeries, expected type is",
		this.query.type
	]), l(4, [
		"%cdebug%c %cseries",
		t.NO_UPDATES,
		t.NONE,
		t.SERIES,
		this.query
	]), {
		data: null,
		message: `wrong method call for getSeries, expected type is '${this.query.type}'`,
		success: !1,
		query: this.query
	});
	showModal = (e) => {
		l(3, [
			"%cmodal%c %cwidget",
			t.OK,
			t.NONE,
			t.WIDGET,
			n.SHOW_MODAL,
			e.showComponent,
			a(this.element.attributes)
		]);
		let r = new CustomEvent(n.SHOW_MODAL, {
			detail: {
				component: e.showComponent,
				props: e.props,
				timeout: e?.timeout
			},
			bubbles: !0,
			cancelable: !0,
			composed: !0
		});
		window.dispatchEvent(r);
	};
	destroy() {
		this.unsubscribe(), this.broadcastChannel.close();
	}
};
export { C as BuzzcastingStorageManager, w as BuzzcastingStorageReader, T as Widget };
