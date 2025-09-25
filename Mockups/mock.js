// Seleccionamos el modal y la imagen que se mostrará
const myModal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");

// Seleccionamos todas las imágenes y botones de las cards
const cardImages = document.querySelectorAll(".card-img-top");
const cardButtons = document.querySelectorAll(".btn-view");

// Función para abrir el modal con la imagen
function openModal(imgSrc) {
  modalImage.src = imgSrc;
  const modal = new bootstrap.Modal(myModal);
  modal.show();
}

// Evento para imágenes
cardImages.forEach(img => {
  img.addEventListener("click", () => {
    openModal(img.src);
  });
});

// Evento para botones (se busca la imagen de la misma card)
cardButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const imgSrc = cardImages[index].src;
    openModal(imgSrc);
  });
});

