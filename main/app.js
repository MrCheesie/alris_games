"use strict";
console.log("script active");
const gamesList = [
    "https://transcendent-peony-c6d089.netlify.app/",
    "../spammer/",
    "../mocker/",
    "../draw/",
    "../qr-maker/",
    "../bsod",
    "../pdf/",
    "../pong",
    "../bomb_eater/",
    "../no/",
    "../RTG/paid.html",
    "../AI-harness/",
    "../tag/",
    "../blog/"
];
const mysteryBtn = document.getElementById("mysteryBtn");
// @ts-ignore
mysteryBtn.addEventListener("click", () => { mysteryRedirect(gamesList); });
function mysteryRedirect(list) {
    const randomIndex = Math.floor(Math.random() * gamesList.length);
    const randomChoice = gamesList[randomIndex];
    console.info("mysteryRedirect clicked");
    window.location.href = randomChoice;
}
