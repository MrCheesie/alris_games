function randomCase(str) {
  return str
      .split('')
      .map(char => char[Math.random() < 0.5 ? 'toUpperCase' : 'toLowerCase']())
      .join('');
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formy");
  const copyBtn = document.getElementById("copyBtn");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents page reload

    const textInput = document.getElementById("textInput");
    const resultElement = document.getElementById("result");

    const text = textInput.value;

    // Repeat text string by quantity count
    result = randomCase(text);
    resultElement.textContent = result;
  });

// Example usage:
  console.log(randomCase("javascript")); // Output: "jAvAsCrIpT"


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
