const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
  .then(response => response.json())
  .then(data => {
    btc.textContent = data.bitcoin.usd;
    eth.textContent = data.ethereum.usd;
    doge.textContent = data.dogecoin.usd;
  })
  .catch(error => console.error("Error fetching cryptocurrency data:", error));
