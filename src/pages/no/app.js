let response;

const API_URLS = [
  "https://naas.isalman.dev/no", // main (appears to be down)
  "https://naas.api.nixie.online/no", // backup
];
async function sayNo(noField) {
  try {
    response = await fetch(API_URLS[0]); // try first api
  } catch (e) {
    console.error(`${API_URLS[0]} failed with error ${e}. trying ${API_URLS[1]}`);
    // incase fetch fails or server returns an error
    try {
      response = await fetch(API_URLS[1]); // try next api
    } catch (e) {
      console.error(`${API_URLS[1]} failed with error ${e}. no other backup api left.`);
      alert(`
  Something went wrong. Try checking your internet connection.
  ERROR: ${e}`);
    }
  }
  if (response) {
    const data = await response.json(); // jsonify
    console.log(data);
    const no = data.reason;
    noField.textContent = no;
  }
}

function copy() {
  navigator.clipboard.writeText(noField.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 2000);
}

if (typeof document !== "undefined") {
  const noField = document.getElementById("noField");

  const btn = document.getElementById("btn");
  const copyBtn = document.getElementById("copyBtn");
  btn.addEventListener("click", () => sayNo(noField));
  copyBtn.addEventListener("click", () => copy());
}
