import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const handle = galleryItems
	.map(
		({ original, preview, description }) =>
			`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
	)
	.join("");

gallery.insertAdjacentHTML("beforeend", handle);

document.addEventListener("click", e => {
	console.log(e);
	e.preventDefault();
	if (e.target.className !== "gallery__image") return;

	const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

	instance.show();

	document.addEventListener("keyup", e => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
});
