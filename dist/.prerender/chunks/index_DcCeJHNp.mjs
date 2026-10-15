import { n as __exportAll } from "./rolldown-runtime_DC62tzP2.mjs";
import { d as renderTemplate, m as addAttribute, o as renderComponent, p as renderHead } from "./server_B-HiMtrG.mjs";
import { t as createComponent } from "./astro-component_BYiPXd1_.mjs";
import { t as renderScript } from "./script_dmZmXB2R.mjs";
import "./compiler_CIZUmh8B.mjs";
import { t as $$Footer } from "./Footer_CnmVcNuR.mjs";
/* empty css                */
var details_default$4 = {
	name: "No Generator",
	author: "Alris",
	date: "2026-03-01",
	description: "Ever wanted to refuse without sounding offensive? Now, you can get witty and funny ways to say no using this website."
};
var details_default$3 = {
	name: "Docs",
	author: "Alris",
	date: "2026-10-13",
	description: "Read guides to use the alris games website."
};
var details_default$2 = {
	name: "Random case generator",
	author: "Alris",
	date: "2026-10-13",
	description: "Ever wanted to irritate someone by mocking them online? well now you can with this random case generator."
};
var details_default$1 = {
	name: "Drawing app",
	author: "Alris",
	date: "2026-10-13",
	description: "This is a simple drawing app. Use it to doodle, demonstrate things, solve equations, draw diagrams and more! Your creativity is the limit."
};
var details_default = {
	name: "QR code generator",
	author: "Alris",
	date: "2026-10-13",
	description: "Create QR codes, because creating QR codes shouldn't be paywalled or filled with advertisements."
};
//#endregion
//#region src/pages/games/index.astro
var games_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const base = "/alris_games";
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Games</title>${renderHead($$result)}</head><body><div class="centerz"><ul id="list"><li id="mysteryBox" class="mysteryBox"><h2 class="mysteryBox">Mystery Pick</h2><p class="mysteryBox">Go to a random game/tool.</p><br><a class="button" id="mysteryBtn">?</a> <br></li><br><hr><br><li id="floppyBird"><h2>Floppy Bird</h2><p>The OG game. Flap about in this game, and make sure you don't get doomed.</p><br><a href="https://transcendent-peony-c6d089.netlify.app/" class="button">Game</a> <br><a href="https://floppybirdhighscores.netlify.app" class="button">Scoreboard</a></li><br><hr><br><li id="spammer"><h2>Text repeater</h2><p>Ever wanted to spam someone with a message? Well now you can.</p><br><a href="../spammer/" class="button">Annoy people!</a> <br></li><br><hr><br><li id="mocker"><h2>${details_default$2.name}</h2><p>${details_default$2.description}</p><br><a href="../mocker/" class="button">Annoy people!</a> <br></li><br><hr><br><li id="draw"><h2>${details_default$1.name}</h2><p>${details_default$1.description}</p><br><a href="../draw/" class="button">Drawing app</a> <br></li><br><hr><br><li id="qrMaker"><h2>${details_default.name}</h2><p>${details_default.description}</p><br><a href="../qr-maker/" class="button">Make a QR code</a> <br></li><br><hr><br><li id="errorScreen"><h2>Fake error screen</h2><p>Prank your friends or get out of doing work with these fake blue screens of death.</p><br><a href="../bsod/index.astro" class="button">Pretend to have an error</a> <br></li><br><hr><br><li id="pdf"><h2>PDF annotater</h2><p>Annotate, read, and redact PDFs in your browser for free.</p><br><a href="../pdf/index.html" class="button">Annotate PDFs</a></li><br><hr><br><li id="pong"><h2>2-player pong game</h2><p>Play pong with your friend.</p><br><a${addAttribute(`${base}/pong/`, "href")} class="button">Pong</a></li><br><hr><br><li id="bombEater"><h2>Bomb eater</h2><p>Eat coins, try not to explode.</p><br><a href="../../../public/bomb_eater/index.html" class="button">Game</a><a href="../../../public/bomb_eater/scores.html" class="button">Scores</a></li><br><hr><br><li id="noSayer"><h2>${details_default$4.name}</h2><p>${details_default$4.description}</p><!--<p>Ever wanted to refuse without sounding offensive? Now, you can get witty and funny ways to say no using this website. </p>--><br><a href="../no/" class="button">Say no</a></li><br><hr><br><li id="RandomTeamGenerator"><h2>Random team generator</h2><p>Create random teams and groups with this random group generator.  </p><br><a${addAttribute(`${base}/RTG/`, "href")} class="button">Free version</a><a${addAttribute(`${base}/RTG/paid.html`, "href")} class="button">Premium version</a></li><br><hr><br><li id="aiHarness"><h2>Use AI with your own API keys</h2><p>Use this AI chat harness with your own API keys. Google AI Studio recommended</p><br><a href="../../../public/AI-harness/" class="button">Chat with AI</a></li><br><hr><br><li id="tag"><h2>Play Tag</h2><p>Play tag together with your friends! Not compatible with mobile.</p><br><a href="../../../public/tag/" class="button">Play Tag!</a></li><br><hr><br><li id="blogs"><h2>Blogs</h2><p>Read and view blogs made by people and make your own.</p><br><a href="../blog/" class="button">Blog</a></li><br><hr><br><li id="docs"><h2>${details_default$3.name}</h2><p>${details_default$3.description}</p><br><a href="../docs/" class="button">Read docs</a></li><br><hr><br></ul></div>${renderComponent($$result, "Footer", $$Footer, {})}<!-- TS script -->${renderScript($$result, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/games/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/games/index.astro", void 0);
var $$file = "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/games/index.astro";
var $$url = "/alris_games/games";
//#endregion
//#region \0virtual:astro:page:src/pages/games/index@_@astro
var page = () => games_exports;
//#endregion
export { page };
