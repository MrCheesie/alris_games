import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime_DC62tzP2.mjs";
//#endregion
//#region \0virtual:astro:page:src/pages/bsod/app@_@js
var import_app = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin((() => {
	if (typeof document !== "undefined") {
		document.querySelectorAll(".bsod-trigger").forEach((img) => {
			img.addEventListener("click", () => {
				if (img.requestFullscreen) img.requestFullscreen().then((r) => console.log(`${r}, Fullscreened`));
				else if (img.webkitRequestFullscreen) img.webkitRequestFullscreen();
				else if (img.msRequestFullscreen) img.msRequestFullscreen();
			});
		});
		document.addEventListener("click", (e) => {
			if (document.fullscreenElement && e.target.tagName === "IMG") document.exitFullscreen().then((r) => console.log(`${r}, unfullscreened`));
		});
	}
})))());
var page = () => import_app;
//#endregion
export { page };
