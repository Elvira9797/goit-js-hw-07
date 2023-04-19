import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryListRef: document.querySelector(".gallery"),
};

const galleryListMarkup = createGalleryListMarkup(galleryItems);
refs.galleryListRef.insertAdjacentHTML("beforeend", galleryListMarkup);

function createGalleryListMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
