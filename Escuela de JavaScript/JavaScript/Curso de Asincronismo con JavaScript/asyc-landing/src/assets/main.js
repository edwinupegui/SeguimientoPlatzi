const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLjJ6RKo9if6grSepV8ipY6Y6eNqxsfUxl&part=snippet&maxResults=10';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f4d1c13ac9msh6f5de16ff51b543p10b8ebjsn6a0cb73dc694',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
const content = null | document.getElementById('content')

const fetchData = async (urlApi, optionsApi) => {
  const response = await fetch(urlApi, optionsApi);
  const data = await response.json();
  return data;
};

(async () => {
  try {
    const videos = await fetchData(API, options);
    let view = `
    ${videos.items.map(
      (video) => `
    <div class="group relative">
  <div
    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
  </div>
  <div class="mt-4 flex justify-between">
    <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      ${video.snippet.title}
    </h3>
  </div>
</div>
    `
    ).slice(0, 4).join('')}
  
  `;
    content.innerHTML = view
  } catch (error) {
    console.log(error)
  }
})();
