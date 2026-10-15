import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime_DC62tzP2.mjs";
//#endregion
//#region \0virtual:astro:page:src/pages/spammer/app@_@js
var import_app = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin((() => {
	document.addEventListener("DOMContentLoaded", () => {
		const form = document.getElementById("formy");
		const copyBtn = document.getElementById("copyBtn");
		form.addEventListener("submit", function(e) {
			e.preventDefault();
			const quantityInput = document.getElementById("quantity");
			const textInput = document.getElementById("textInput");
			const resultElement = document.getElementById("result");
			const quantity = parseInt(quantityInput.value) || 0;
			result = textInput.value.repeat(quantity);
			resultElement.textContent = result;
		});
		copyBtn.addEventListener("click", function(e) {
			e.preventDefault();
			try {
				navigator.clipboard.writeText(result);
				console.log("Text copied to clipboard");
			} catch {
				console.error("Unable to add text to clipboard");
			}
		});
	});
})))());
var page = () => import_app;
//#endregion
export { page };
