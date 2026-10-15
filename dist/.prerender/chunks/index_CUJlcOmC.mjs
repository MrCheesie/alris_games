import { n as __exportAll } from "./rolldown-runtime_DC62tzP2.mjs";
import { d as renderTemplate, o as renderComponent, p as renderHead } from "./server_B-HiMtrG.mjs";
import { t as createComponent } from "./astro-component_BYiPXd1_.mjs";
import "./compiler_CIZUmh8B.mjs";
import { t as $$Footer } from "./Footer_CnmVcNuR.mjs";
//#region src/pages/docs/index.astro
var docs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><title>Docs</title>${renderHead($$result)}</head><body><div id="center"><h1>Docs</h1><div id="how-to-blog" class="blog"><a href="ai-harness-docs/"><h2>AI harness docs</h2></a><h3>A guide on how to use the AI Harness with your own API key for free.</h3></div>${renderComponent($$result, "Footer", $$Footer, {})}</div></body></html>`;
}, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/docs/index.astro", void 0);
var $$file = "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/docs/index.astro";
var $$url = "/alris_games/docs";
//#endregion
//#region \0virtual:astro:page:src/pages/docs/index@_@astro
var page = () => docs_exports;
//#endregion
export { page };
