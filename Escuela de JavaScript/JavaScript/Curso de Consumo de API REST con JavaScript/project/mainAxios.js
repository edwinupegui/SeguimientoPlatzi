const api = axios.create({
  baseURl: 'https://api.thedogapi.com/v1',
});
api.defaults.headers.common['X-API-KEY'] = 'live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV';

const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=2';
const API_URL_FAVORITES = 'https://api.thedogapi.com/v1/favourites';
const API_URL_FAVORITES_DELETE = (id) => `https://api.thedogapi.com/v1/favourites/${id}`;
const API_URL_FAVORITES_UPLOAD = `https://api.thedogapi.com/v1/images/upload`;

const spanError = document.getElementById('error') 

const loadRandomDogs = async() => {

  const res = await fetch(API_URL_RANDOM, {
    method: 'GET',
    headers: {
      'X-API-KEY': 'live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV'
    }
  });
  const data = await res.json();
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un erro: " + res.status + data.message;
  } else {
    const img1 = document.getElementById('imagen1');
    const img2 = document.getElementById('imagen2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    
    img1.src = data[0].url;
    img2.src = data[1].url;

    btn1.onclick = () => saveFavorite(data[0].id)
    btn2.onclick = () => saveFavorite(data[1].id)
  }
}

const favoriteDogs = async() => {
  const res = await fetch(API_URL_FAVORITES, {
    method: 'GET',
    headers: {
      'X-API-KEY': 'live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV'
    }
  });
  const data = await res.json();

  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    spanError.innerHTML = 'Hubo otro error: ' + res.status + data.message; 
  } else {
    const section = document.getElementById('favoritesMichis');

    section.innerHTML = ""
    const h2 = document.createElement('h2')
    const h2Text = document.createTextNode('Perritos favoritos')
    h2.appendChild(h2Text)
    section.appendChild(h2)

    data.forEach(dog => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('Sacar al perrito de favoritos');

      btn.appendChild(btnText)
      img.src = dog.image.url
      img.width = 300
      btn.onclick = () => deleteFavorite(dog.id)
      article.appendChild(img)
      article.appendChild(btn)
      section.appendChild(article)
    });
  }
}

const saveFavorite = async(id) => {
  const { data, status } = await api.post('/favourites', {
    image_id: String(id)
  })

  if (status !== 200) {
    spanError.innerHTML = 'Hubo otro error: ' + status + data.message;
  } else {
    console.log('Perrito guardado en favoritos')
    favoriteDogs();
  }
}

const deleteFavorite = async(id) => {
  const res = await fetch(API_URL_FAVORITES_DELETE(id), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV'
    },
  })

  const data = await res.json()

  if (res.status !== 200) {
    spanError.innerHTML = 'Hubo otro error: ' + res.status + data.message;
  } else {
    console.log('Perrito eliminado en favoritos')
    favoriteDogs();
  }
}

const uploadDogPhoto = async() => {
  const form = document.getElementById('uploadingForm');
  const formData = new FormData(form);

  console.log(formData.get('file'))

  const res = await fetch(API_URL_FAVORITES_UPLOAD, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      'X-API-KEY': 'live_r5nbzZaYNwp2fWHT31lZyGrms3uyeToAfjSJfzCHxknrmMpqfx8RkVxlULAZhycV',
    },
    body: formData,
  })

}

loadRandomDogs();
favoriteDogs();