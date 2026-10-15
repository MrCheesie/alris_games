import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime_DC62tzP2.mjs";
//#endregion
//#region \0virtual:astro:page:src/pages/mocker/app@_@js
var import_app = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin((() => {
	function randomCase(str) {
		return str.split("").map((char) => char[Math.random() < .5 ? "toUpperCase" : "toLowerCase"]()).join("");
	}
	document.addEventListener("DOMContentLoaded", () => {
		const form = document.getElementById("formy");
		const copyBtn = document.getElementById("copyBtn");
		form.addEventListener("submit", function(e) {
			e.preventDefault();
			const textInput = document.getElementById("textInput");
			const resultElement = document.getElementById("result");
			const text = textInput.value;
			resultElement.textContent = randomCase(text);
		});
		console.log(randomCase("javascript active "));
		copyBtn.addEventListener("click", function(e) {
			e.preventDefault();
			try {
				navigator.clipboard.writeText(result).then((r) => {
					console.log("Text copied to clipboard");
				});
			} catch {
				console.error("Unable to add text to clipboard");
			}
		});
	});
})))());
var page = () => import_app;
//#endregion
export { page };
