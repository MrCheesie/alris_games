const noField = document.getElementById("noField");
let no = noField.textContent;

btn = document.getElementById("btn");
copyBtn = document.getElementById("copyBtn");
btn.addEventListener("click", sayNo);
copyBtn.addEventListener("click", copy);

async function sayNo() {
  try {
    let response = await fetch("https://naas.isalman.dev/no");
    let data = await response.json(); // jsonify
    console.log(data);
    let no = data.reason;
    noField.textContent = no;
  } catch(e) { // incase fetch fails or server returns an error
    console.error(e);
    alert(`
Something went wrong. Try checking your internet connection.
ERROR: ${e}`
    );
  }
}

function copy() {
  navigator.clipboard.writeText(noField.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 2000);
}
