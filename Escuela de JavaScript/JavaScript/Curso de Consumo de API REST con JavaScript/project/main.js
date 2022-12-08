const API_URL = 'https://api.thedogapi.com/v1/images/search?limit=3';

const reload = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data)
  const img1 = document.getElementById('imagen1');
  const img2 = document.getElementById('imagen2');
  const img3 = document.getElementById('imagen3');
  
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
} 

reload()