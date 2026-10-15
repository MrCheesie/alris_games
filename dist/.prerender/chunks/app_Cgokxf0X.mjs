import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime_DC62tzP2.mjs";
//#endregion
//#region \0virtual:astro:page:src/pages/no/app@_@js
var import_app = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin((() => {
	var noField = document.getElementById("noField");
	noField.textContent;
	var btn = document.getElementById("btn");
	var copyBtn = document.getElementById("copyBtn");
	btn.addEventListener("click", sayNo);
	copyBtn.addEventListener("click", copy);
	async function sayNo() {
		try {
			let data = await (await fetch("https://naas.isalman.dev/no")).json();
			console.log(data);
			noField.textContent = data.reason;
		} catch (e) {
			console.error(e);
			alert(`
Something went wrong. Try checking your internet connection.
ERROR: ${e}`);
		}
	}
	function copy() {
		navigator.clipboard.writeText(noField.textContent);
		copyBtn.textContent = "Copied!";
		setTimeout(() => {
			copyBtn.textContent = "Copy";
		}, 2e3);
	}
})))());
var page = () => import_app;
//#endregion
export { page };
