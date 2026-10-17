const button: HTMLElement | null = document.getElementById("set-btn");

const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));

const delay_between_repeat_notification_in_ms = 1000; // self-explanatory

/*
* I am the greatest TypeScript coder.
* Any errors? @ts-ignore
* If you ask me "why not just JavaScript?"
* Because I want to use TypeScript.
* Not because it's good,
* Because I want it to tremble against the power of my carlessness,
* my disregard for type safety.
*
* Born a python coder,
* always a python coder.
*/


function newNotif(title: string, body: string, time: number, amt: number): Notification {
    const notification: Notification = new Notification(title, { body });
    console.log(title, body, time, amt, button);
    return notification;
}

async function sendNotifs() {
    // @ts-ignore
    const title: string = document.getElementById("notif-title").value;
    // @ts-ignore
    const body: string = document.getElementById("notif-body").value;
    // @ts-ignore
    const time: number = document.getElementById("notif-time").value;
    // @ts-ignore
    const amt: number = document.getElementById("notif-amt").value;

    alert("notification(s) set");
    for (let i = 0; i < amt; i++) {
    console.log("Notif set");
        await delay(time * 60 * 1000 ); // wait until time (ms)
        newNotif(title, body, time, amt);
        await delay(delay_between_repeat_notification_in_ms); // wait 1 second so they don't go off at once
        console.log("notif sent");
    }
}

if (typeof document !== 'undefined') {

    // @ts-ignore
    button.addEventListener("click", async () => {
        if (Notification.permission === 'granted') {
            await sendNotifs();
        } else if (Notification.permission !== "denied") {
            console.log("Requesting notification permission");
            Notification.requestPermission().then(async permission => {
                await sendNotifs()
            });
        } else if (Notification.permission === "denied") {
            console.error("Notification permission denied");
            alert("Notification permission denied");
        }
    });

}
