import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
	)
	.join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});


// // forEach

// const liItems = document.querySelectorAll(".gallery__link");

// liItems.forEach(item => {
// 	item.addEventListener("click", e => {
// 		e.preventDefault();
// 	});
// });
