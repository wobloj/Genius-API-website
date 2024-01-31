const main = document.getElementById('main')

async function fetchData(){
    const url = 'https://genius-song-lyrics1.p.rapidapi.com/artist/albums/?id=1645&per_page=20&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c319d3103msh1390d1fcb76c01ep105b1bjsn65e39beb8989',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };
 
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        displayData(result);
    } catch (error) {
        console.error(error);
    }
}
fetchData();

function displayData(result){
    albumsList = JSON.parse(result).albums;

    //Sprawdź jak wyglądają Twoje dane w konsoli:
    console.log(albumsList);

    albumsList.forEach(album => {
        main.innerHTML += 
        `
            <div>
                <img src=${album.cover_art_thumbnail_url}>
                <p class="album-title">${album.full_title}</p>
                <div class="release">
                    <p>Release date:</p>
                    <p class="date">${album.release_date_for_display}</p>
                </div>
                
                <a class="button" href="${album.url}">Link to album</a>
            </div>
        `
    });
    
}