fetch("https://api.artic.edu/api/v1/artworks")
    .then(function (response) {
        return response.json();
    })

    .then (function(data){
        let page = document.getElementById("art-page");
        data.data.slice(0,10).forEach(function(art){
            // let imageURL= `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
            page.innerHTML += `
            <div class="whole_container">
                <h3>${art.title}</h3>
                <p> Artist: ${art.artist_title}</p>
                <a href="images.html" class="myButton2images">See Artwork Images</a>
            </div>`;
        })
    }
)
    // .then (function (artwork){
    //     let artDiv = document.getElementById("art");
    //     artwork.data.forEach(function(piece){
    //         artDiv.innerHTML += `<p>${piece.title}</p>`;
    //     });
    //     // console.log(artwork);
    // })