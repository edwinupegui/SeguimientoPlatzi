const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=2&api_key=live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV';
const API_URL_FAVORITES = 'https://api.thedogapi.com/v1/favourites?api_key=live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV';

const spanError = document.getElementById('error') 

const loadRandomDogs = async () => {

  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un erro: " + res.status + data.message;
  } else {
    const img1 = document.getElementById('imagen1');
    const img2 = document.getElementById('imagen2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
} 

const favoriteDogs = async () => {
  const res = await fetch(API_URL_FAVORITES);
  const data = await res.json();

  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = 'Hubo otro error: ' + res.status + data.message; 
  }
}

const saveFavorites = async () => {
  const res = await fetch(API_URL_FAVORITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: 'Z6h74tJ-D',
    })
  })

  const data = await res.json()

  if (res.status !== 200) {
    spanError.innerHTML = 'Hubo otro error: ' + res.status + data.message;
  }

}

loadRandomDogs();
favoriteDogs();