import { n as __exportAll } from "./rolldown-runtime_DC62tzP2.mjs";
import { d as renderTemplate, o as renderComponent, p as renderHead } from "./server_B-HiMtrG.mjs";
import { t as createComponent } from "./astro-component_BYiPXd1_.mjs";
import { t as renderScript } from "./script_dmZmXB2R.mjs";
import "./compiler_CIZUmh8B.mjs";
import { t as $$Footer } from "./Footer_CnmVcNuR.mjs";
//#region src/pages/mocker/index.astro
var mocker_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!--Font embed --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"><title>Random case generator</title>${renderHead($$result)}</head><body><div id="container"><div><form id="formy"><label for="textInput">Enter text here:</label><input type="text" name="textInput" id="textInput" value="Enter text to randomly capitalize here "><br><br><button type="submit">Generate text</button></form></div><div><button type="button" id="copyBtn">Copy</button><p id="result">mocK text WiLl APpEaR hErE</p></div></div>${renderScript($$result, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/mocker/index.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/mocker/index.astro", void 0);
var $$file = "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/mocker/index.astro";
var $$url = "/alris_games/mocker";
//#endregion
//#region \0virtual:astro:page:src/pages/mocker/index@_@astro
var page = () => mocker_exports;
//#endregion
export { page };
