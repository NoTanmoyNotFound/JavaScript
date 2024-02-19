$(document).ready(function() {
    var btc = document.getElementById("bitcoinPrice");
    var eth = document.getElementById("ethereumPrice");
    var doge = document.getElementById("dogecoinPrice");

    $.ajax({
        url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
        method: "GET",
        success: function(response) {
            btc.textContent = response.bitcoin.usd;
            eth.textContent = response.ethereum.usd;
            doge.textContent = response.dogecoin.usd;
        },
        error: function(xhr, status, error) {
            console.error("Error fetching cryptocurrency prices:", error);
        }
    });
});
