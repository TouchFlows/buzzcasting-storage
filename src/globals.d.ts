/**
 * Ambient globals this package reads. `WindowClient` and `Widget` reach into
 * `window.__bc`, which is the host application's object (buzzcasting-app
 * declares the real, much larger shape in `src/global/index.ts`).
 *
 * This lives in a hand-written `.d.ts` on purpose: it keeps the declarations in
 * this package's own typecheck without publishing them. As a `declare global`
 * inside `index.ts` it was being emitted into `dist/index.d.ts`, and a second
 * `Window.__bc` declaration makes every property of the host's own `__bc`
 * fail to resolve (`Property 'api' does not exist on type '{ DashboardData?:
 * ...; opts: any; }'`). The previously published `.d.ts` was bundled by
 * api-extractor, which dropped the augmentation, so the collision only
 * appeared once declarations were emitted per file.
 */
interface Window {
	BuzzCasting: any;
	__bc: {
		DashboardData?: any;
		Preferences?: any;
		SlideData?: any;
		PresentationData?: any;
		WidgetData?: any;
		opts: any;
	};
}
