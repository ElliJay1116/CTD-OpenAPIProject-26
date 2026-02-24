fetch("https://api.artic.edu/api/v1/artworks")
    .then(function (response) {
        return response.json();
    })
    .then (function (artwork){
        console.log(artwork);
    })