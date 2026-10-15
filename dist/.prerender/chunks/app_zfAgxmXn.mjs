import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime_DC62tzP2.mjs";
import QRCode from "qrcode";
//#endregion
//#region \0virtual:astro:page:src/pages/qr-maker/app@_@js
var import_app = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin((() => {
	window.generateQR = async function() {
		const text = document.getElementById("qr-text").value;
		const container = document.getElementById("qrcode");
		container.innerHTML = "";
		const canvas = document.createElement("canvas");
		container.appendChild(canvas);
		await QRCode.toCanvas(canvas, text, { width: 256 });
	};
})))());
var page = () => import_app;
//#endregion
export { page };
