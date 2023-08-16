import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

const postData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    creadentials: 'same-origin',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response
}

const data = {
  "title": "Nunca pares de aprender",
  "price": 9999,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))

fetch('https://eu1-search.doofinder.com/6/f007bfa0d476d44cedb9a35e81e69825/_suggest', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'us1-38fd5bf1db761654f7c6775765a7b46be6bdeee5'
  },
  body: JSON.stringify({
    query: "zapa",
  }
  )
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
