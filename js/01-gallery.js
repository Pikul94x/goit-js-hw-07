import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" data-source="${image.original}" src="${image.preview}" alt="${image.description}"></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const liItems = document.querySelectorAll(".gallery__link");

liItems.forEach((item) => {
  const lightbox = basicLightbox.create(
    `
		<img width="1400" height="900" src='${item.href}'>
	`
  );
  item.addEventListener("click", (e) => {
    e.preventDefault();
    lightbox.show();
  });
  document.addEventListener("keydown", (e) => {
  
    if (e.key === "Escape") {
      lightbox.close();
    }
  });
});
