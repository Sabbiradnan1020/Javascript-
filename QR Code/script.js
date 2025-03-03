const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.getElementById("qr-body");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("click", (e) => {
  sizes = e.target.value;
  isEmptyInput();
});

downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img");

  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    downloadBtn.setAttribute("herf", imgAttr);
  } else {
    downloadBtn.setAttribute(
      "herf",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInput() {
  if (qrText.value.length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or URL to generate your QR code");
  }
}

function generateQRCode() {
  let size = sizes.value;
  qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
