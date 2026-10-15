import { n as __exportAll } from "./rolldown-runtime_DC62tzP2.mjs";
import { d as renderTemplate, m as addAttribute, p as renderHead } from "./server_B-HiMtrG.mjs";
import { t as createComponent } from "./astro-component_BYiPXd1_.mjs";
import "./compiler_CIZUmh8B.mjs";
/* empty css                */
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const base = "/alris_games";
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'&gt;&lt;text y='.9em' font-size='90'&gt;🎮&lt;/text&gt;&lt;/svg&gt;"><meta name="google-site-verification" content="g1HbQANLq7Icgsie9gs5j_5Y8k2v4mqwgDA6UMOUpyY"><title>Alris Games | Free games and tools</title>${renderHead($$result)}</head><body><img${addAttribute(`${base}/assets/grok-bot.svg`, "src")} alt="grok-bot"><div class="center"><h1>Welcome to Alris' Games!</h1><p>We have games and tools at alris games!</p><br><a${addAttribute(`${base}/games/`, "href")} class="button">Explore Games and Tools</a></div><footer class="footer"><p id="copyRight" style="font-family: 'JetBrains Mono', monospace;">&copy; 2026 Alris Dhanwani | Apache 2.0</p><a href="LICENSE" id="buh2">View License</a><a href="https://github.com/MrCheesie/alris_games" id="buh">Star us on GitHub</a></footer></body></html>`;
}, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/index.astro", void 0);
var $$file = "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/index.astro";
var $$url = "/alris_games";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
