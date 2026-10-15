import QRCode from 'qrcode';

window.generateQR = async function () {
    const text = document.getElementById('qr-text').value;
    const container = document.getElementById('qrcode');
    container.innerHTML = '';

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    await QRCode.toCanvas(canvas, text, { width: 256 });
};