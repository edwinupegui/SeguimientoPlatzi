const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=2&api_key=live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV';
const API_URL_FAVORITES = 'https://api.thedogapi.com/v1/favourites?limit=2&api_key=live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV';

const loadRandomDogs = async () => {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();

  console.log(data)
  const img1 = document.getElementById('imagen1');
  const img2 = document.getElementById('imagen2');
  
  img1.src = data[0].url;
  img2.src = data[1].url;
} 
const favoritesDogs = async () => {
  const res = await fetch(API_URL_FAVORITES);
  const data = await res.json();

  console.log(data)
  const img1 = document.getElementById('imagen1');
  const img2 = document.getElementById('imagen2');
  
  img1.src = data[0].url;
  img2.src = data[1].url;
} 

loadRandomDogs()