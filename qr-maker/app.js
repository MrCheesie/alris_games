// Initialize the QRCode instance once
const qrcodeContainer = document.getElementById("qrcode");
const qrInput = document.getElementById("qr-text");

const qrcode = new QRCode(qrcodeContainer, {
    text: qrInput.value,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H // High error correction
});

// Function to update the QR code dynamically
function generateQR() {
    const inputValue = qrInput.value.trim();
    if (inputValue === "") {
        alert("Please enter some text or a URL!");
        return;
    }
    qrcode.clear(); // Clear the previous QR code
    qrcode.makeCode(inputValue); // Generate the new QR code
}
