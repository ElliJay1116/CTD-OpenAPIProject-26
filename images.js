fetch("https://api.artic.edu/api/v1/artworks")
.then(function(response){
    return response.json();
})
.then(function(data){

    let page = document.getElementById("image-page");

    data.data.slice(0,10).forEach(function(art){

        if(art.image_id){

            let imageURL = `https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`;

            page.innerHTML += `
                <div class="image_container">
                    <h3>${art.title}</h3>
                    <img src="${imageURL}" alt="${art.title}">
                    <a href="index.html" class="button4artist">See Artwork Info</a>
                </div>
            `;
        }

    });

});