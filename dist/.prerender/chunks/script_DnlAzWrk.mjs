import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime_DC62tzP2.mjs";
//#endregion
//#region \0virtual:astro:page:src/pages/draw/script@_@js
var import_script = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin((() => {
	console.log("script active");
	var canvas = document.getElementById("paintCanvas");
	var ctx = canvas.getContext("2d");
	var colorPicker = document.getElementById("colorPicker");
	var lineWidthInput = document.getElementById("lineWidth");
	var clearBtn = document.getElementById("clearBtn");
	var isDrawing = false;
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight - document.querySelector(".toolbar").offsetHeight;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
	}
	window.addEventListener("resize", resizeCanvas);
	window.addEventListener("DOMContentLoaded", resizeCanvas);
	function startDrawing(e) {
		isDrawing = true;
		draw(e);
	}
	function stopDrawing() {
		isDrawing = false;
		ctx.beginPath();
	}
	function draw(e) {
		if (!isDrawing) return;
		ctx.lineWidth = lineWidthInput.value;
		ctx.strokeStyle = colorPicker.value;
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		const clientY = e.touches ? e.touches[0].clientY : e.clientY;
		const canvasTop = canvas.getBoundingClientRect().top;
		ctx.lineTo(clientX, clientY - canvasTop);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(clientX, clientY - canvasTop);
	}
	canvas.addEventListener("mousedown", startDrawing);
	canvas.addEventListener("mousemove", draw);
	canvas.addEventListener("mouseup", stopDrawing);
	canvas.addEventListener("mouseleave", stopDrawing);
	canvas.addEventListener("touchstart", (e) => {
		e.preventDefault();
		startDrawing(e);
	}, { passive: false });
	canvas.addEventListener("touchmove", (e) => {
		e.preventDefault();
		draw(e);
	}, { passive: false });
	canvas.addEventListener("touchend", stopDrawing);
	clearBtn.addEventListener("click", () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});
})))());
var page = () => import_script;
//#endregion
export { page };
