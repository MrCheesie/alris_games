document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formy");
  const copyBtn = document.getElementById("copyBtn");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents page reload

    const quantityInput = document.getElementById("quantity");
    const textInput = document.getElementById("textInput");
    const resultElement = document.getElementById("result");

    const quantity = parseInt(quantityInput.value) || 0;
    const text = textInput.value;

    // Repeat text string by quantity count
    result = text.repeat(quantity);
    resultElement.textContent = result;
  });

  // Copy button functionality
  copyBtn.addEventListener("click", function (e) {
    e.preventDefault(); // prevent page reload

    try {
      navigator.clipboard.writeText(result);
      console.log("Text copied to clipboard");
    } catch {
      console.error("Unable to add text to clipboard");
    }


  });
});
