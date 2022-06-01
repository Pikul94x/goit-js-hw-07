import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
	)
	.join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", e => {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") return;

	const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

	instance.show();

	document.addEventListener("keydown", e => {
		if (e.key === "Escape") {
			instance.close();
		}
	});
});

// // oneClick function

// gallery.onclick = (e) => {
//     e.preventDefault()

// 	basicLightbox
// 		.create(
// 			`
// 		<img width="1400" height="900" src="${e.target.dataset.source}">
// 	`
// 		)
// 		.show();
// };
