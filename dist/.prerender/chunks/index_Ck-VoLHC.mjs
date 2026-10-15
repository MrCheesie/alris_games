import { n as __exportAll } from "./rolldown-runtime_DC62tzP2.mjs";
import { d as renderTemplate, o as renderComponent, p as renderHead } from "./server_B-HiMtrG.mjs";
import { t as createComponent } from "./astro-component_BYiPXd1_.mjs";
import { t as renderScript } from "./script_dmZmXB2R.mjs";
import "./compiler_CIZUmh8B.mjs";
import { t as $$Footer } from "./Footer_CnmVcNuR.mjs";
//#region src/pages/qr-maker/index.astro
var qr_maker_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>QR Code Generator</title>${renderHead($$result)}</head><body><h2>QR Code Generator</h2><label for="qr-text">QR Code text</label><input type="text" id="qr-text" placeholder="Enter text or URL" value="https://mrcheesie.github.io/alris_games/"><button onclick="generateQR()">Generate QR Code</button><!-- Container where the QR Code will render --><div id="qrcode"></div>${renderScript($$result, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/qr-maker/index.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/qr-maker/index.astro", void 0);
var $$file = "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/qr-maker/index.astro";
var $$url = "/alris_games/qr-maker";
//#endregion
//#region \0virtual:astro:page:src/pages/qr-maker/index@_@astro
var page = () => qr_maker_exports;
//#endregion
export { page };
