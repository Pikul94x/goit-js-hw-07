import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
  )

  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const liItems = document.querySelectorAll(".gallery__link");

liItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

var lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
