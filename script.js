const data = [
  {
    title: "Bilbao",
    description: "En Bilbao encontrarás el mercado de la Rivera mas espectacular",
    url_img: "../assets/Bilbao.jpg"
  },
  {
    title: "Málaga",
    description: "Conoce las playas mas lindas de Málaga y alrededores",
    url_img: "/assets/malaga.jpg"
  },
  {
    title: "Sevilla",
    description: "Recorre Sevilla y aprende de su historia",
    url_img: "../assets/Sevilla.jpg"
  }
];



function renderizarDestinos() {
  const contenedor = document.getElementById("recomendados");
  contenedor.innerHTML = ""; 

  data.forEach((viaje) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>${viaje.title}</h2>
      <p>${viaje.description}</p>
      <img src="${viaje.url_img}" alt="${viaje.title}" class="img-reducida">
    `;
    contenedor.appendChild(article);
  });
}

renderizarDestinos();