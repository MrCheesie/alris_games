const dataDiv = document.getElementById('data-div');

const baseUrl: string | undefined = dataDiv?.dataset.myVar;

if (dataDiv) {
    console.log(baseUrl);
}
console.log("script active")
const gamesList: Array<string> = [

    "https://transcendent-peony-c6d089.netlify.app/",
    "../spammer/",
    "../mocker/",
    "../draw/",
    "../qr-maker/",
    "../bsod",
    "../pdf/",
    `${baseUrl}/pong`,
    `${baseUrl}/bomb_eater/`,
    "../no/",
    `${baseUrl}/RTG/paid.html`,
    `${baseUrl}/AI-harness/`,
    `${baseUrl}/tag/`,
    "../blog/",
    "../fakeNotifs/"

]

const mysteryBtn: HTMLElement | null = document.getElementById("mysteryBtn")

// @ts-ignore
mysteryBtn.addEventListener("click", () => {mysteryRedirect(gamesList)});

function mysteryRedirect(list: Array<string>): void {

    const randomIndex: number = Math.floor(Math.random() * gamesList.length);
    const randomChoice: string = gamesList[randomIndex];

    console.info("mysteryRedirect clicked");
    window.location.href = randomChoice;

}